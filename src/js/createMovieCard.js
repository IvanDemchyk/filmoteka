export function createMovieCard(data) {
  const markup = data
    .map(
      ({
        poster_path,
        original_title,
        title,
        genre_ids,
        overview,
        release_date,
        id,
      }) => {
        return `<li class="card__item list" id="${id}">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${overview}" class="card__img" />
            <h2 class="card__title">${title ?? original_title}</h2>
            <p class="card__desc">${genre_ids.join(
              ', '
            )} | ${release_date.substr(0, 4)}
            </p>
            </li>`;
      }
    )
    .join('');
  return markup;
}
