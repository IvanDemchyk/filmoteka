console.log("api-films")
export default function getFetchMovies() {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=0b11624b950ea9c4284f61844023b09c&page=1'
  ).then(data => data.json());
}