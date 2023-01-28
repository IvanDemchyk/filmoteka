import {
  WATCHE,
  QUEUE
} from './local.js';
import {
  pagination,
  paginationBoxElem
} from './pagination.js';
import {
  createMovieCard
} from './createMovieCard.js';
import {
  card
} from './local';
import {
  watchedBtn
} from './watched.js';
import {
  queueBtn
} from './queue.js';

watchedBtn.addEventListener('click', localPagWatched);
queueBtn.addEventListener("click", localPagQueue);
paginationBoxElem.addEventListener("click", paginationHandler);

class LocalePagination {
  constructor(category) {
    this.arr = JSON.parse(localStorage.getItem(category));
    this.pageNum = 1;
    this.pageAll = (this.arr.length - 1) / 20;
    this.pageSize = 20;

  }
  paginate(arr, pageNumber, pageSize) {
    return arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  paginationRender() {
    if (this.arr < 20) {
      return;
    } else {
      pagination(this.pageNum, this.pageAll);
    }
  }

  pagLeft() {
    this.pageNum -= 1;
    this.pagedArr = paginate(this.arr, this.pageNum, this.pageSize);
    card.innerHTML = createMovieCard(this.pagedArr);
    pagination(this.pageNum, this.pageAll);
  }

  pagRight() {
    this.pageNum += 1;
    this.pagedArr = paginate(this.arr, this.pageNum, this.pageSize);
    card.innerHTML = createMovieCard(this.pagedArr);
    pagination(this.pageNum, this.pageAll);
  }

  peakedPage(actPage) {
    this.pageNum = actPage;
    this.pagedArr = paginate(this.arr, this.pageNum, this.pageSize);
    card.innerHTML = createMovieCard(this.pagedArr);
    pagination(this.pageNum, this.pageAll);
  }
}

const watchedLocal = new LocalePagination(WATCHE);
const queueLocal = new LocalePagination(QUEUE);

function localPagWatched(evt) {
  watchedLocal.paginationRender();

  console.log(evt.target);
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  if (evt.target.textContent === "...") {
    return;
  }

  if (evt.target.textContent === "🡸") {
    watchedLocal.pagLeft();
  }

  if (evt.target.textContent === "🡺") {
    watchedLocal.pagRight();
  }

  watchedLocal.peakedPage(evt.target.textContent);
}

function localPagQueue(evt) {
  queueLocal.paginationRender();

  console.log(evt.target);
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  if (evt.target.textContent === "...") {
    return;
  }

  if (evt.target.textContent === "🡸") {
    queueLocal.pagLeft();
  }

  if (evt.target.textContent === "🡺") {
    queueLocal.pagRight();
  }

  queueLocal.peakedPage(evt.target.textContent);
}