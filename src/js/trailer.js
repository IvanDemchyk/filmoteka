import axios from 'axios';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';

async function getfetchTrailer(film) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${film}/videos?api_key=${KEY_API}&language=en`
    );
    return response.data;
  } catch (err) {
    throw new Error(response.statusText);
  }
}

function filterNameTrailer({ results }) {
  return results.filter(({ name }) => name.toLowerCase().includes('trailer'));
}

function trailerLink(trailerObj) {
  return `<button class='modal__movie-btn modal-text modal-text--uppercase trailer-btn' "><a href="https://www.youtube.com/embed/${trailerObj[0].key}" target="_blank">
  Trailer in new window
 </a></button>`;
}

async function trailerInst(film) {
  const trailerInfo = await getfetchTrailer(film);

  if (
    trailerInfo.status_code === 34 ||
    trailerInfo.status_code === 7 ||
    trailerInfo.results.length === 0
  ) {
    return;
  }

  const trailerObj = await filterNameTrailer(trailerInfo);
  if (trailerObj.length === 0) {
    return;
  }

  trailerLink(trailerObj);

  return trailerLink(trailerObj);
}

export { trailerInst };
