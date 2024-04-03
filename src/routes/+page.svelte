
<script>
  import { onMount } from "svelte";

  let movies = [];
  let searchQuery = "";
  let totalResults = 0;
  let displaySearchQuery = "";

  onMount(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    movies = data.results.filter((movie) => movie.vote_average > 0);
  });

  async function searchMovies() {
    if (searchQuery.trim() === "") {
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchQuery}`
    );
    const data = await response.json();
    movies = data.results.filter((movie) => movie.vote_average > 0);
    totalResults = movies.length;
    displaySearchQuery = searchQuery;
  }
</script>
  
  <main class="container">
    <div class="flex items-center gap-2.5 my-8">
      <img src="logo.png" alt="" />
      <h1 class="text-white text-2xl font-bold">CineMate</h1>
    </div>
  
    <div class="searchbar mb-8">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search movies..."
        on:keydown={(e) => e.key === "Enter" && searchMovies()}
        class="bg-transparent text-white text-2xl outline-none p-2.5"
      />
      <button on:click={searchMovies} class="bg-transparent border-none cursor-pointer">
        <img src="search.png" alt="" placeholder="Search movies" />
      </button>
    </div>
  
    {#if totalResults > 0}
      <p class="text-4xl mb-4">
        Found {totalResults} results for '{displaySearchQuery}'
      </p>
    {/if}
  
    <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 justify-items-center">
      {#each movies as movie}
        <a href="/movie/{movie.id}">
          <img
            class="relative rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div class="flex gap-2.5 text-white no-underline">
            <p class="relative z-10 -translate-y-6 p-2 bg-black text-gray-50 border-2 border-gray-50 rounded-full borderr">{movie.vote_average.toFixed(1)}</p>
          </div>
          <h3 class="max-sm:max-w-[15ch] -mt-5 text-white text-xl font-bold">{movie.title}</h3>
        </a>
      {/each}
    </div>
  </main>
  