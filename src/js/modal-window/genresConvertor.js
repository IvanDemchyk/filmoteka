export default function genresConvertor(movieGenres, genresList) {
  return movieGenres
    .map(genre => {
      const allGenres = JSON.parse(localStorage.getItem(genresList));
      return allGenres[genre];
    })
    .join(', ');
}
