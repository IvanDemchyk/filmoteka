!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i("Ur9Nn");var o="genresList";function r(e){var t=e.map((function(e){return JSON.parse(localStorage.getItem(o))[e]}));return t.length>2&&(t.splice(2,t.length-2),t.push("Other")),t}function c(e){return e.map((function(e){var t,n=e.poster_path,a=e.original_title,i=void 0===a?"":a,o=e.title,c=void 0===o?"":o,d=e.genre_ids,s=void 0===d?["no info"]:d,l=e.overview,u=void 0===l?"":l,m=e.release_date,g=void 0===m?"......":m,h=e.id,p=void 0===h?Date.now:h;t=n?"https://image.tmdb.org/t/p/w500/"+n:"https://picsum.photos/500/750";return'<li class="card__item list" id="'.concat(p,"\">\n            <img src='").concat(t,'\' loading="lazy" alt="').concat(u,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=c?c:i,'</h2>\n            <p class="card__desc">').concat(r(s).join(", ")," | ").concat(g.substr(0,4),"\n            </p>\n            </li>")})).join("")}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US").then((function(e){return e.json()})).then((function(e){var t=e.genres.reduce((function(e,t){var n=t.id,a=t.name;return e[n]=a,e}),{});localStorage.setItem(o,JSON.stringify(t))}));var d=i("Ur9Nn"),s=i("8MBJY"),l=i("a2hTj"),u=(d=i("Ur9Nn"),document.querySelector(".js-pagination-lib")),m=function(){"use strict";function t(n){e(s)(this,t),this.arr=n,this.pageNum=1,this.pageAll=Math.round((this.arr.length-1)/5),this.pageSize=5,this.pagedArr}return e(l)(t,[{key:"paginate",value:function(e,t,n){return e.slice((t-1)*n,t*n)}},{key:"paginationRender",value:function(){this.arr.length<5?d.card.innerHTML=U(this.arr):(this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),d.card.innerHTML=U(this.pagedArr),g(this.pageNum,this.pageAll))}},{key:"pagLeft",value:function(){this.pageNum-=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),d.card.innerHTML=U(this.pagedArr),g(this.pageNum,this.pageAll)}},{key:"pagRight",value:function(){this.pageNum+=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),d.card.innerHTML=U(this.pagedArr),g(this.pageNum,this.pageAll)}},{key:"peakedPage",value:function(e){this.pageNum=Number(e),this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),d.card.innerHTML=U(this.pagedArr),g(this.pageNum,this.pageAll)}}]),t}();function g(e,t){var n="",a=e-1,i=e+1,o=e+2;e>1&&(n+="<li class='arrows arrow-left'>&#129144;</li>",n+='<li class="firstInt">1</li>'),e>4&&(n+='<li class="dots">...</li>'),e>3&&(n+='<li class="two-left">'.concat(e-2,"</li>")),e>2&&(n+="<li>".concat(a,"</li>")),n+="<li class='active'>".concat(e,"</li>"),t-1>e&&(n+="<li >".concat(i,"</li>")),t-2>e&&(n+="<li >".concat(o,"</li>")),t-3>e&&(n+='<li class="dots">...</li>'),t>e&&(n+='<li class="lastInt">'.concat(t,"</li>"),n+="<li class='arrows arrow-right'>&#129146</li>"),u.innerHTML=n}d=i("Ur9Nn"),d=i("Ur9Nn");var h=document.querySelector(".watched-btn-js"),p=(document.querySelector(".queue-btn-js"),document.querySelector(".library-header__buttons")),v=JSON.parse(localStorage.getItem(d.CURRENT_MOVIES)).results,f=new m(v),_=new m(v);function b(e,t,n){n.classList.add(e),t.classList.remove(e)}p.addEventListener("click",(function(e){var t=e.target;if(!t.classList.contains("library-header__btn"))return;t.classList.contains("queue-btn-js")&&(d.card.innerHTML="",_.paginationRender(),b("active",h,t));t.classList.contains("watched-btn-js")&&(d.card.innerHTML="",f.paginationRender(),b("active",h,t))})),u.addEventListener("click",(function(e){var t=Boolean(document.querySelector(".watched-btn-js.active")),n=e.target.textContent;if("LI"!==e.target.nodeName||"..."===n)return;"🡸"===n?t?f.pagLeft():_.pagLeft():"🡺"===n?t?f.pagRight():_.pagRight():t?f.peakedPage(n):_.peakedPage(n)}));d=i("Ur9Nn");var S=document.querySelector(".backdrop"),y=document.querySelector(".modal-window"),w=document.querySelector(".watched-btn-js");document.querySelector(".queue-btn-js");function N(e,t,n){var a=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).results.find((function(e){return e.id===a}))}function L(e,t,n,a){var i='<button class="modal-window__close-btn">close</button>\n\n    <div class="modal__movie" id=\''.concat(e.id,"'><img class='movie__img' alt=\"movie poster\" src=\"https://image.tmdb.org/t/p/w500/").concat(e.poster_path,'"/>\n      <div class="movie__info">\n      <h2 class="movie__title">').concat(e.title,'</h2>\n      <table class="movie__details">\n      <tbody>\n      <tr>\n      <td class=\'movie__detail modal-text--left-column modal-text\'>Vote/Votes</td>\n      <td class="movie__detail modal-text modal-text--line-high">\n      <span class="movie__detail--accent">\n      ').concat(e.vote_average.toFixed(1)," </span\n      >/ ").concat(e.vote_count,'\n      </td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>\n      <td class="movie__detail modal-text modal-text--line-high">').concat(e.popularity.toFixed(1),'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Original title</td>\n      <td class="movie__detail modal-text modal-text--uppercase">').concat(e.original_title,'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Genres</td>\n      <td class="movie__detail modal-text">').concat(function(e,t){return e.map((function(e){return JSON.parse(localStorage.getItem(t))[e]})).join(", ")}(e.genre_ids,t),'</td>\n      </tr>\n          </tbody>\n          </table>\n          \n          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>\n      <p class="movie__description modal-text">').concat(e.overview,'</p>\n      <div class="movie__add-buttons">\n        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--watched">').concat(n?"remove from ":"add to ",'watched</button>\n        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--queue">').concat(a?"remove from ":"add to ","queue</button>\n      </div><button data-movie-id='").concat(e.id,"'>Trailer</button>\n      </div></div>\n  ");y.innerHTML=i}var x={onBackdropClick:function(e){"BODY"===e.target.parentElement.nodeName&&(S.hidden=!0,S.removeEventListener("click",this.onBackdropClick))},onEsc:function(e){"Escape"===e.code&&(S.hidden=!0,document.removeEventListener("keydown",this.onEsc))},onCloseBtn:function(){S.hidden=!0}},E={toWatched:function(e){"add to watched"===e.currentTarget.textContent?q(e,".modal__movie",d.CURRENT_MOVIES,d.watche,d.WATCHE,"watched"):k(e,".modal__movie",d.watche,d.WATCHE,"watched")},toQueue:function(e){"add to queue"===e.currentTarget.textContent?q(e,".modal__movie",d.CURRENT_MOVIES,d.queue,d.QUEUE,"queue"):k(e,".modal__movie",d.queue,d.QUEUE,"queue")}};function q(e,t,n,a,i,o){var r=N(e,t,n);a.push(r),localStorage.setItem(i,JSON.stringify(a)),e.currentTarget.textContent="remove from ".concat(o)}function k(e,t,n,a,i){var o=JSON.parse(localStorage.getItem(a)),r=Number(e.target.closest(t).id);o.forEach((function(e,t){e.id===r&&n.splice(t,1)})),localStorage.setItem(a,JSON.stringify(n)),e.currentTarget.textContent="add to ".concat(i)}function T(e,t){var n=document.querySelector(".modal-window__close-btn"),a={addToWatched:document.querySelector(".js-movie__add-btn--watched"),addToQueue:document.querySelector(".js-movie__add-btn--queue")};a.addToWatched.addEventListener("click",t.toWatched),a.addToQueue.addEventListener("click",t.toQueue),n.addEventListener("click",e.onCloseBtn),S.addEventListener("click",e.onBackdropClick),document.addEventListener("keydown",e.onEsc)}function j(e,t){if(0!==e.length)return e.find((function(e){return e.id===t.id}))}var A=document.querySelector("#main"),O=document.querySelector(".library-header");function U(e){return e&&e.length?(O.classList.remove("library-header-notification"),A.classList.remove("notification-bcg"),c(e)):(A.classList.add("notification-bcg"),O.classList.add("library-header-notification"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}f.paginationRender(),d.card.addEventListener("click",(function(e){var t=function(e,t,n){var a=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).find((function(e){return e.id===a}))}(e,".card__item",w.classList.contains("active")?d.WATCHE:d.QUEUE),n=j(d.watche,t),a=j(d.queue,t);L(t,o,n,a),T(x,E),S.hidden=!1}));var C=document.querySelector(".watched-btn-js"),M=document.querySelector(".queue-btn-js");M.addEventListener("click",(function(){M.classList.add("active"),C.classList.remove("active")}))}();
//# sourceMappingURL=library.56b14a0c.js.map
