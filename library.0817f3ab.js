!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var o="current_movies",r="watche",c="queue",s=JSON.parse(localStorage.getItem(r))||[],d=JSON.parse(localStorage.getItem(c))||[],l=document.querySelector(".card"),u="genresList";function m(e){var t=e.map((function(e){return JSON.parse(localStorage.getItem(u))[e]}));return t.length>2?(t.splice(2,t.length-2),t.push("Other")):0===t.length&&t.push("no genres"),t}function g(e){return e.map((function(e){var t,n,a=e.poster_path,i=e.original_title,o=void 0===i?"":i,r=e.title,c=void 0===r?"":r,s=e.genre_ids,d=e.overview,l=void 0===d?"":d,u=e.release_date,g=void 0===u?"":u,p=e.id,h=void 0===p?Date.now():p;t=""===g?"no date":g.substr(0,4),n=a?"https://image.tmdb.org/t/p/w500/"+a:"https://picsum.photos/500/750";return'<li class="card__item list" id="'.concat(h,"\">\n            <img src='").concat(n,'\' loading="lazy" alt="').concat(l,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=c?c:o,'</h2>\n            <p class="card__desc">').concat(m(s).join(", ")," | ").concat(t,"\n            </p>\n            </li>")})).join("")}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US").then((function(e){return e.json()})).then((function(e){var t=e.genres.reduce((function(e,t){var n=t.id,a=t.name;return e[n]=a,e}),{});localStorage.setItem(u,JSON.stringify(t))}));var p=i("8MBJY"),h=i("a2hTj"),v=document.querySelector(".js-pagination-lib"),_=function(){"use strict";function t(n){e(p)(this,t),this.arr=n,this.pageNum=1,this.pageAll=Math.round((this.arr.length-1)/5),this.pageSize=5,this.pagedArr}return e(h)(t,[{key:"paginate",value:function(e,t,n){return e.slice((t-1)*n,t*n)}},{key:"paginationRender",value:function(){this.arr.length<5?l.innerHTML=R(this.arr):(this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),l.innerHTML=R(this.pagedArr),f(this.pageNum,this.pageAll))}},{key:"pagLeft",value:function(){this.pageNum-=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),l.innerHTML=R(this.pagedArr),f(this.pageNum,this.pageAll)}},{key:"pagRight",value:function(){this.pageNum+=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),l.innerHTML=R(this.pagedArr),f(this.pageNum,this.pageAll)}},{key:"peakedPage",value:function(e){this.pageNum=Number(e),this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),l.innerHTML=R(this.pagedArr),f(this.pageNum,this.pageAll)}}]),t}();function f(e,t){var n="",a=e-1,i=e+1,o=e+2;e>1&&(n+="<li class='arrows arrow-left'>&#129144;</li>",n+='<li class="firstInt">1</li>'),e>4&&(n+='<li class="dots">...</li>'),e>3&&(n+='<li class="two-left">'.concat(e-2,"</li>")),e>2&&(n+="<li>".concat(a,"</li>")),n+="<li class='active'>".concat(e,"</li>"),t-1>e&&(n+="<li >".concat(i,"</li>")),t-2>e&&(n+="<li >".concat(o,"</li>")),t-3>e&&(n+='<li class="dots">...</li>'),t>e&&(n+='<li class="lastInt">'.concat(t,"</li>"),n+="<li class='arrows arrow-right'>&#129146</li>"),v.innerHTML=n}var b=document.querySelector(".watched-btn-js"),y=document.querySelector(".queue-btn-js"),S=document.querySelector(".library-header__buttons"),L=new _(s),x=new _(d);function w(e,t,n){n.classList.add(e),t.classList.remove(e)}S.addEventListener("click",(function(e){var t=e.target;if(!t.classList.contains("library-header__btn"))return;t.classList.contains("queue-btn-js")&&(l.innerHTML="",x.paginationRender(),w("active",b,t));t.classList.contains("watched-btn-js")&&(l.innerHTML="",L.paginationRender(),w("active",y,t))})),v.addEventListener("click",(function(e){var t=Boolean(document.querySelector(".watched-btn-js.active")),n=e.target.textContent;if("LI"!==e.target.nodeName||"..."===n)return;"🡸"===n?t?L.pagLeft():x.pagLeft():"🡺"===n?t?L.pagRight():x.pagRight():t?L.peakedPage(n):x.peakedPage(n)}));var N=document.querySelector(".backdrop"),k=document.querySelector(".modal__movie"),q=document.querySelector(".watched-btn-js");function T(e,t,n){var a=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).results.find((function(e){return e.id===a}))}function E(e,t,n,a){var i='<div class="movie__img-container">\n  <img class=\'movie__img\'\n    alt="movie poster"\n    src="https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'"\n  />\n</div>\n      <div class="movie__info">\n      <h2 class="movie__title">').concat(e.title,'</h2>\n      <table class="movie__details">\n      <tbody>\n      <tr>\n      <td class=\'movie__detail modal-text--left-column modal-text\'>Vote/Votes</td>\n      <td class="movie__detail modal-text modal-text--line-high">\n      <span class="movie__detail--accent">\n      ').concat(e.vote_average.toFixed(1)," </span\n      >/ ").concat(e.vote_count,'\n      </td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>\n      <td class="movie__detail modal-text modal-text--line-high">').concat(e.popularity.toFixed(1),'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Original title</td>\n      <td class="movie__detail modal-text modal-text--uppercase movie__detail-right-column">').concat(e.original_title,'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Genres</td>\n      <td class="movie__detail modal-text movie__detail-right-column">').concat(function(e,t){return e.map((function(e){return JSON.parse(localStorage.getItem(t))[e]})).join(", ")}(e.genre_ids,t),'</td>\n      </tr>\n          </tbody>\n          </table>\n          \n          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>\n      <p class="movie__description modal-text">').concat(e.overview,'</p>\n      \n      <div class="movie__add-buttons">\n      <button class=\'modal__movie-btn modal-text modal-text--uppercase trailer-btn\' data-movie-id="').concat(e.id,'">watch trailer</button>\n        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--watched">').concat(n?"remove from ":"add to ",'watched</button>\n        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--queue">').concat(a?"remove from ":"add to ","queue</button>\n      </div>\n      </div>\n  ");k.id=e.id,k.innerHTML=i}var j={onBackdropClick:function(e){"BODY"===e.target.parentElement.nodeName&&(N.hidden=!0,N.removeEventListener("click",this.onBackdropClick))},onEsc:function(e){"Escape"===e.code&&(N.hidden=!0,document.removeEventListener("keydown",this.onEsc))},onCloseBtn:function(){N.hidden=!0}},O={toWatched:function(e){"add to watched"===e.currentTarget.textContent?A(e,".modal__movie",o,s,r,"watched"):I(e,".modal__movie",s,r,"watched")},toQueue:function(e){"add to queue"===e.currentTarget.textContent?A(e,".modal__movie",o,d,c,"queue"):I(e,".modal__movie",d,c,"queue")}};function A(e,t,n,a,i,o){var r=T(e,t,n);a.push(r),localStorage.setItem(i,JSON.stringify(a)),e.currentTarget.textContent="remove from ".concat(o)}function I(e,t,n,a,i){var o=JSON.parse(localStorage.getItem(a)),r=Number(e.target.closest(t).id);o.forEach((function(e,t){e.id===r&&n.splice(t,1)})),localStorage.setItem(a,JSON.stringify(n)),e.currentTarget.textContent="add to ".concat(i)}function M(e,t){var n=document.querySelector(".modal-window__close-btn"),a={addToWatched:document.querySelector(".js-movie__add-btn--watched"),addToQueue:document.querySelector(".js-movie__add-btn--queue")};a.addToWatched.addEventListener("click",t.toWatched),a.addToQueue.addEventListener("click",t.toQueue),n.addEventListener("click",e.onCloseBtn),N.addEventListener("click",e.onBackdropClick),document.addEventListener("keydown",e.onEsc)}function C(e,t){if(0!==e.length)return e.find((function(e){return e.id===t.id}))}var J=document.querySelector("#main"),H=document.querySelector(".library-header");function R(e){return e&&e.length?(H.classList.remove("library-header-notification"),J.classList.remove("notification-bcg"),g(e)):(J.classList.add("notification-bcg"),H.classList.add("library-header-notification"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}L.paginationRender(),l.addEventListener("click",(function(e){var t=function(e,t,n){var a=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).find((function(e){return e.id===a}))}(e,".card__item",q.classList.contains("active")?r:c),n=C(s,t),a=C(d,t);E(t,u,n,a),M(j,O),N.hidden=!1}));var B=document.querySelector(".watched-btn-js"),z=document.querySelector(".queue-btn-js");z.addEventListener("click",(function(){z.classList.add("active"),B.classList.remove("active")}))}();
//# sourceMappingURL=library.0817f3ab.js.map