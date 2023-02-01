import { genresConvertor } from './genresConvertor';
export function createMovieCard(data) {
  const markup = data
    .map(
      ({
        poster_path,
        original_title = '',
        title = '',
        genre_ids,
        overview = '',
        release_date = '',
        id = Date.now(),
      }) => {
        let release;
        if (release_date === '') {
          release = 'no date';
        } else {
          release = release_date.substr(0, 4);
        }
        let path;
        if (poster_path) {
          path = 'https://image.tmdb.org/t/p/w500/' + poster_path;
        } else {
          path = 'https://picsum.photos/500/750';
        }
        const altPath = './images/no-file-opt.jpg';
        //  <img src="./images/no-file-opt.jpg" alt="A brilliant.">
        return `<li class="card__item list" id="${id}">
            <img src='${path}' loading="lazy" alt="${overview}" class="card__img" />
            <h2 class="card__title">${title ?? original_title}</h2>
            <p class="card__desc">${genresConvertor(genre_ids).join(
              ', '
            )} | ${release}
            </p>
            </li>`;
      }
    )
    .join('');
  return markup;
}
