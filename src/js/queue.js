const watchedBtn = document.querySelector('.watched-btn-js');
const queueBtn = document.querySelector('.queue-btn-js');
queueBtn.addEventListener('click', onClickQueueBtn);
function onClickQueueBtn() {
  queueBtn.classList.add('active');
  watchedBtn.classList.remove('active');
}
