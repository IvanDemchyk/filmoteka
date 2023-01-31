const toolbarElem = document.querySelector('.toolbar');
export const controlElem = document.querySelector('.theme__control');
const pagItemElem = document.querySelector('.js-pagination');
console.log(pagItemElem);
toolbarElem.addEventListener('click', onThemeChange)

function onThemeChange(evt) {
  if(evt.target.classList.contains('theme__control')) {
    controlElem.classList.toggle('checked')
    const liElem = [...pagItemElem.children].forEach(li => {
      li.classList.toggle('dark')
    })
  }

  if(controlElem.classList.contains('checked')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}
/* import refs from './refs';
const { changeThemeBtn } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(JSON.stringify(Theme));

const light = Theme.LIGHT;
const dark = Theme.DARK;

let currentTheme = localStorage.getItem('theme');
cacheChange();

changeThemeBtn.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  event.preventDefault();

  if (!event.target.checked) {
    toggleTheme(light, dark);
    localStorage.setItem('theme', light);
  }

  if (event.target.checked) {
    toggleTheme(dark, light);
    localStorage.setItem('theme', dark);
  }
}

function toggleTheme(currentTheme, nextTheme) {
  document.body.classList.remove(nextTheme);
  document.body.classList.add(currentTheme);
}

function cacheChange() {
  if (currentTheme === null) {
    return;
  }

  if (currentTheme === light) {
    document.body.classList.add(light);
    changeThemeBtn.checked = false;
  } else {
    document.body.classList.add(dark);
    changeThemeBtn.checked = true;
  }
} */