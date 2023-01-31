import { THEME } from './local.js';

export const controlElem = document.querySelector('.theme__control');
const toolbarElem = document.querySelector('.toolbar');
const pagItemElem = document.querySelector('.js-pagination');
const footer = document.querySelector('footer');
const light = 'light-theme';
const dark = 'dark-theme';

let currentTheme = localStorage.getItem(THEME);
storageTheme();

toolbarElem.addEventListener('click', onThemeChange);

function onThemeChange(evt) {
  if (evt.target.classList.contains('theme__control')) {
    controlElem.classList.toggle('checked');
  }

  if (controlElem.classList.contains('checked')) {
    footer.classList.remove('light-theme');
    footer.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem(THEME, dark);
  } else {
    footer.classList.remove('dark-theme');
    footer.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem(THEME, light);
  }
}

function storageTheme() {
  if (currentTheme === null) {
    return;
  }

  if (currentTheme === light) {
    footer.classList.remove('dark-theme');
    footer.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    controlElem.classList.remove('checked');
  } else {
    footer.classList.remove('light-theme');
    footer.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    controlElem.classList.add('checked');
  }
}
