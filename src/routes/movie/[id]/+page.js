export async function load({ params }) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0cfd029479ad3a9da0ed691331abd850`);
    const movie = await response.json();
    return {
      movie,
    };
  }