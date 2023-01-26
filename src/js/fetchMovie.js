import axios from 'axios';
// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
let page = 1;

export async function fetchMovies(page, request, test = 'trending') {
  let q = '';
  let w = `/week`;
  if (test === 'search') {
    q = `&query=${request}`;
    w = '';
  }
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${test}/movie${w}?api_key=${KEY_API}${q}&page=${page}`
    );
    console.dir(response.data);
    return response.data;
  } catch (err) {
    throw new Error(response.statusText);
  }
}
