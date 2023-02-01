import { teamCards } from './team-cards';

const teamModWindOpen = document.querySelector('.js-team-modal__open');
const teamModWindClose = document.querySelector('.js-team-modal__close');
const teamModBackdrop = document.querySelector('.js-team__modal-backdrop');
const team = document.querySelector('.js-team');

teamModWindOpen.addEventListener('click', onModWindOpen);
teamModWindClose.addEventListener('click', onModWindClose);
document.addEventListener('keydown', onEsc);

function onModWindOpen() {
  teamModBackdrop.hidden = false;
  console.log('click');
}
// ------ закриття модального вікна ------
function onModWindClose() {
  teamModBackdrop.hidden = true;
  console.log('click');
}

function onEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  teamModBackdrop.hidden = true;
  document.removeEventListener('keydown', this.onEsc);
}

// ------------- розмітка карток команди

function teamCardMarkup({ picture, name, role, ghlink }) {
  const markup = `<li class="js-team__member">
  <img src=${picture} alt="team members photo" crossorigin class="team-member__photo"><p class="taem-member__name>${name}</p>
  <p class="team-member__rol">${role}</p>
  <a href=${ghlink} class="team-member__github-link link">GitHub</a></li>`;
  return markup;
}

const teamModWindMarkup = teamCards.map(card => teamCardMarkup(card)).join('');

try {
  team.insertAdjacentHTML('afterbegin', teamModWindMarkup);
} catch (error) {
  console.log(error);
}
