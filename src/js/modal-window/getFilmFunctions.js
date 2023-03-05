export function getFilmMain(e, element, fromStoarage) {
  const movieId = Number(e.target.closest(element).id);

  return JSON.parse(localStorage.getItem(fromStoarage)).results.find(
    movie => movie.id === movieId
  );
}

export function getFilmLibrary(e, element, fromStoarage) {
  const movieId = Number(e.target.closest(element).id);
  return JSON.parse(localStorage.getItem(fromStoarage)).find(
    movie => movie.id === movieId
  );
}
