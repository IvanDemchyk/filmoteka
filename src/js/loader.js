export let preloader = document.querySelector('.preloader');

export function loaderOn() {
  preloader.style.display = 'flex';
}
export function loaderOff() {
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
}
