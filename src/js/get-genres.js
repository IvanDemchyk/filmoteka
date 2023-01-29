export const GENRES_MOVIES = 'genresList';
const fetchedGenres = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US`
  ).then(data => data.json());
};

fetchedGenres().then(onFetchSuccess);

function onFetchSuccess(respond) {
  const genresList = respond.genres.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});
  localStorage.setItem(GENRES_MOVIES, JSON.stringify(genresList));
}
