import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
// let page = 1;

export async function fetchMovies(page, request, lang = 'en-US') {
  try {
    const response = await axios.get(
      `${BASE_URL}?api_key=${KEY_API}&query=${request}&page=${page}&language=${lang}`
    );
    return response.data;
  } catch (err) {
    throw new Error(response.statusText);
  }
}
