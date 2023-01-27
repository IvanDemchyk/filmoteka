export const CURRENT_MOVIES = 'current_movies';
export const WATCHE = 'watche';
export const QUEUE = 'queue';
export const watche = JSON.parse(localStorage.getItem(WATCHE)) || [];
export const queue = JSON.parse(localStorage.getItem(QUEUE)) || [];
export const card = document.querySelector('.card');
