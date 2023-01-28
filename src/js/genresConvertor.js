// ---- Genres converting function - замінює id жанрів в картці фільму на назви жанрів

function genresConvertor(genre_ids) {
  return genre_ids.map(id => objectNumbersInString[id]);
}
