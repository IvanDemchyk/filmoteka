
export let currPageGlobe;
const paginationBoxElem = document.querySelector('.js-pagination');

export function pagination(currPage, allPages) {
  let markupControls = '';
  let beforeTwoPages = currPage - 2;
  let beforeOnePage = currPage - 1;
  let afterOnePage = currPage + 1;
  let afterTwoPage = currPage + 2;
  currPageGlobe = currPage;

  if (currPage > 1) {
    markupControls += `<li class=' arrows'>&#129144;</li>`;
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
    markupControls += `<li class=' arrows'>&#129146</li>`;
  }

  paginationBoxElem.innerHTML = markupControls;
}