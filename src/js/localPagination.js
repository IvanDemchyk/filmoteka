import { card } from './local';
import { checkDataRenderPage } from './libaryLocal';

export const paginationLibBox = document.querySelector('.js-pagination-lib');

export class LocalPagination {
    constructor(category) {
      this.arr = category;
      this.pageNum = 1;
      this.pageAll = Math.round((this.arr.length - 1 ) / 9);
      this.pageSize = 9;
      this.pagedArr;
    }
    paginate(arr, pageNumber, pageSize) {
      return arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
  
    paginationRender() {
      if (this.arr.length < 9) {
        card.innerHTML = checkDataRenderPage(this.arr);
      } else {
        this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
        card.innerHTML = checkDataRenderPage(this.pagedArr);
        paginationLib(this.pageNum, this.pageAll);
      }
    }
  
    pagLeft() {
      this.pageNum -= 1;
      this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
      card.innerHTML = checkDataRenderPage(this.pagedArr);
      paginationLib(this.pageNum, this.pageAll);
    }
  
    pagRight() {
      this.pageNum += 1;
      this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
      card.innerHTML = checkDataRenderPage(this.pagedArr);
      paginationLib(this.pageNum, this.pageAll);
    }
  
    peakedPage(actPage) {
      this.pageNum = Number(actPage);
      this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
      card.innerHTML = checkDataRenderPage(this.pagedArr);
      paginationLib(this.pageNum, this.pageAll);
    }
  }

function paginationLib(currPage, allPages) {
    let markupControls = '';
    let beforeTwoPages = currPage - 2;
    let beforeOnePage = currPage - 1;
    let afterOnePage = currPage + 1;
    let afterTwoPage = currPage + 2;

      
    if (currPage > 1) {
      markupControls += `<li class='arrows arrow-left'>&#129144;</li>`;
      markupControls += `<li class="firstInt">1</li>`;
    }

    if (currPage > 4) {
      markupControls += `<li class="dots">...</li>`;
    }

    if (currPage > 3) {
      markupControls += `<li class="two-left">${beforeTwoPages}</li>`;
    }

    if (currPage > 2) {
      markupControls += `<li>${beforeOnePage}</li>`;
    }

    markupControls += `<li class='active'>${currPage}</li>`;

    if (allPages - 1 > currPage) {
      markupControls += `<li >${afterOnePage}</li>`;
    }

    if (allPages - 2 > currPage) {
      markupControls += `<li >${afterTwoPage}</li>`;
    }

    if (allPages - 3 > currPage) {
      markupControls += `<li class="dots">...</li>`;
    }

    if (allPages > currPage) {
      markupControls += `<li class="lastInt">${allPages}</li>`;
      markupControls += `<li class='arrows arrow-right'>&#129146</li>`;
    }

    paginationLibBox.innerHTML = markupControls;
  }
  
