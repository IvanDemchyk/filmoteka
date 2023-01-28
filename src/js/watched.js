const watchedBtn = document.querySelector('.watched-btn-js');
const queueBtn = document.querySelector('.queue-btn-js');
watchedBtn.addEventListener('click', onClickWatchedBtn);
function onClickWatchedBtn() {
  onActiveWatchedBtn();
}
function onActiveWatchedBtn() {
  watchedBtn.classList.add('active');
  queueBtn.classList.remove('active');
}
