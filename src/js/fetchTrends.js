
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
// let page = 1;
export async function fetchTrends(page, request) {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${KEY_API}&page=${page}`
    );
    return response.data;
  } catch (err) {
    throw new Error(response.statusText);
  }
}
