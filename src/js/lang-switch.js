import { LANG } from './local.js';

export const langControlElem = document.querySelector('.lang__control');
const langSwithElem = document.querySelector('.lang');

export let searchLangGlobal;

const ukranian = 'uk-UA';
const english = 'en-US';

let currentLang = localStorage.getItem(LANG);
storageLang();

langSwithElem.addEventListener('click', onLangChange);

function onLangChange(evt) {
  if (evt.target.classList.contains('lang__control')) {
    langControlElem.classList.toggle('checked');
  }

  if (langControlElem.classList.contains('checked')) {
    searchLangGlobal = 'en';
    localStorage.setItem(LANG, ukranian);
  } else {
    searchLangGlobal = 'uk';
    localStorage.setItem(LANG, english);
  }
}

function storageLang() {
  if (currentLang === null) {
    return;
  }

  if (currentLang === english) {
    searchLangGlobal = 'en';
    langControlElem.classList.remove('checked');
  } else {
    searchLangGlobal = 'uk';
    langControlElem.classList.add('checked');
  }
}
