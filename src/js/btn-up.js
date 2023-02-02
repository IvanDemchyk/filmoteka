const btnUpElem = document.querySelector('.btn-up');

btnUpElem.addEventListener('click', scrollToTop);
window.addEventListener('scroll', listenScroll);

function listenScroll() {
  let scrolled = window.scrollY;
  let userHeight = document.documentElement.clientHeight;

  scrolled < userHeight ? btnUpElem.classList.add('show') : btnUpElem.classList.remove('show');
}

export function scrollToTop() {
  let scrollStep = window.scrollY / 20;

  if (window.scrollY > 0) {
    window.scrollBy(0, -scrollStep);
    setTimeout(scrollToTop, 0);
  }
}