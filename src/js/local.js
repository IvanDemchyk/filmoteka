export const CURRENT_MOVIES = 'current_movies';
export const WATCHE = 'watche';
export const QUEUE = 'queue';
export const watche = JSON.parse(localStorage.getItem(WATCHE)) || [];
export const queue = JSON.parse(localStorage.getItem(QUEUE)) || [];
export const card = document.querySelector('.card');
export const logo = document.querySelector('.page-header__logo-title');
export const home = document.querySelector('.home');
export const library = document.querySelector('.library');
export const THEME = 'theme';
export const LANG = 'language';
export const GLOBALREQUEST = 'globalrequest';
