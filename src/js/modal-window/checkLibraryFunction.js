export default function checkLibrary(local, film) {
  if (local.length === 0) {
    return;
  }

  return local.find(movie => movie.id === film.id);
}
