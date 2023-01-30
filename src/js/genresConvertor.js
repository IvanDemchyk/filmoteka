// ---- Genres converting function - замінює id жанрів в картці фільму на назви жанрів
import { GENRES_MOVIES } from './get-genres'
export function genresConvertor(genre_ids) {
  const result = genre_ids.map(id => {
    const objectNumbersInString = JSON.parse(localStorage.getItem(GENRES_MOVIES));
    return objectNumbersInString[id];
  });
  if (result.length > 2) {
    result.splice(2, result.length - 2);
    result.push("Other")
  } else if (result.length === 0) {
    result.push("no genres")
  }
  return result
}
