// console.log("api-films")
// export default function getFetchMovies(p) {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/movie/week?api_key=0b11624b950ea9c4284f61844023b09c&page=${p}`
//   ).then(data => data.json());
// }

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
// let page = 1;
export async function getfetchTrends(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${KEY_API}&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}