<script>
    export let data;
    const { movie } = data;
  </script>
  
  <main class="container min-h-screen grid place-items-center">
    <div class="flex gap-8 flex-col md:flex-row">
      <div class="md:w-fit mx-auto">
        <img
          class="max-h-[80vh]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h1 class="text-white text-2xl font-bold">{movie.title}</h1>
        <p class="text-white mt-2">{new Date(movie.release_date).getFullYear()}</p>
        <p class="mt-4 max-w-[60ch] text-gray-300">{movie.overview}</p>
      </div>
    </div>
  </main>
  
  