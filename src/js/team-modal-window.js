import { teamCards } from './team-cards';

const teamModWindOpen = document.querySelector('.js-team-modal__open');
const teamModBackdrop = document.querySelector('.js-team__modal-backdrop');
const team = document.querySelector('.js-team');

teamModWindOpen.addEventListener('click', onModWindOpen);
teamModBackdrop.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onEsc);

function onModWindOpen() {
  teamModBackdrop.hidden = false;
  console.log('click');
}

function onEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  teamModBackdrop.hidden = true;
}

function onBackdropClick(e) {
  if (e.target.parentElement.nodeName === 'BODY' || e.target.parentElement.nodeName === 'BOTTON') {
    teamModBackdrop.hidden = true;
  }
}

// ------------- розмітка карток команди

function teamCardMarkup({ picture, name, role, ghlink, linkedinLink }) {
  const markup = `<li class="team-member">
  <img src=${picture} alt="team members photo" class="team-member__photo"/>
  <div class="team-member-card__footer">
  <div class="team-member-card__caption">
  <p class="team-member__name">${name}</p>
  <p class="team-member__rol">${role}</p>
  </div>
  <a href=${ghlink} class="team-member__github-link link" target="blank">GitHub</a>
  <a href=${linkedinLink} class="team-member__linkedin-link link" target="blank">LinkedIn</a>
  </div>
  </li>`;
  return markup;
}

const teamModWindMarkup = teamCards.map(card => teamCardMarkup(card)).join('');

try {
  team.insertAdjacentHTML('afterbegin', teamModWindMarkup);
} catch (error) {
  console.log(error);
}
