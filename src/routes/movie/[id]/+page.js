export async function load({ params }) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`);
    const movie = await response.json();
    return {
      movie,
    };
  }
