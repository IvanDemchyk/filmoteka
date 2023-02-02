import { THEME } from './local.js';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
export const controlElem = document.querySelector('.theme__control');
const toolbarElem = document.querySelector('.toolbar');
const pagItemElem = document.querySelector('.js-pagination');
const footer = document.querySelector('.footer');
const card = document.querySelector('.card');
const loader = document.querySelector('.preloader');
const loaderRollerDark = document.querySelector('.lds-roller__dark');
const loaderRollerLight = document.querySelector('.lds-roller__light');
import { langControlElem } from './lang-switch';

const light = 'light-theme';
const dark = 'dark-theme';

let currentTheme = localStorage.getItem(THEME);
storageTheme();

toolbarElem.addEventListener('click', onThemeChange);

function onThemeChange(evt) {
  loaderOn();
  location.reload();
  if (evt.target.classList.contains('theme__control') || evt.target.classList.contains('theme__icon-svg') || evt.target.classList.contains('theme__icon')) {
    controlElem.classList.toggle('checked');
  }

  if (controlElem.classList.contains('checked')) {
    loaderRollerDark.classList.remove('dark-theme');
    loaderRollerDark.classList.add('light-theme');
    loaderRollerLight.classList.remove('dark-theme');
    loaderRollerLight.classList.add('light-theme');
    loader.classList.remove('dark-theme');
    loader.classList.add('light-theme');
    footer.classList.remove('light-theme');
    footer.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem(THEME, dark);
  } else {
    loaderRollerDark.classList.remove('light-theme');
    loaderRollerDark.classList.add('dark-theme');
    loaderRollerLight.classList.remove('light-theme');
    loaderRollerLight.classList.add('dark-theme');
    loader.classList.remove('light-theme');
    loader.classList.add('dark-theme');
    footer.classList.remove('dark-theme');
    footer.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem(THEME, light);
  }
  window.onload = loaderOff();
}

function storageTheme() {
  if (currentTheme === null) {
    return;
  }

  if (currentTheme === light) {
    loaderRollerDark.classList.remove('dark-theme');
    loaderRollerDark.classList.add('light-theme');
    loaderRollerLight.classList.remove('dark-theme');
    loaderRollerLight.classList.add('light-theme');
    loader.classList.remove('dark-theme');
    loader.classList.add('light-theme');
    footer.classList.remove('dark-theme');
    footer.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    controlElem.classList.remove('checked');
  } else {
    loaderRollerDark.classList.remove('light-theme');
    loaderRollerDark.classList.add('dark-theme');
    loaderRollerLight.classList.remove('light-theme');
    loaderRollerLight.classList.add('dark-theme');
    loader.classList.remove('light-theme');
    loader.classList.add('dark-theme');
    footer.classList.remove('light-theme');
    footer.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    controlElem.classList.add('checked');
  }
}

/// на сторінку Бібліотека
