var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);function a(e){const t=e.map((e=>JSON.parse(localStorage.getItem("genresList"))[e]));return t.length>2&&(t.splice(2,t.length-2),t.push("other")),t}function i(e){return e.map((({poster_path:e,original_title:t,title:o,genre_ids:n,overview:i,release_date:l,id:d})=>`<li class="card__item list" id="${d}">\n            <img src="https://image.tmdb.org/t/p/w500/${e}" loading="lazy" alt="${i}" class="card__img" />\n            <h2 class="card__title">${o??t}</h2>\n            <p class="card__desc">${a(n).join(", ")} | ${l.substr(0,4)}\n            </p>\n            </li>`)).join("")}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US").then((e=>e.json())).then((function(e){const t=e.genres.reduce(((e,{id:t,name:o})=>(e[t]=o,e)),{});localStorage.setItem("genresList",JSON.stringify(t))}));var l=n("2shzp");async function d(e,t){try{return(await l.default.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=0b11624b950ea9c4284f61844023b09c&page=${e}`)).data}catch(e){throw new Error(response.statusText)}}n("9eEKU");var s=n("9eEKU"),r=n("dNTj1");s=n("9eEKU"),s=n("9eEKU");function c(e){localStorage.setItem(s.CURRENT_MOVIES,JSON.stringify(e)),s.card.innerHTML=i(JSON.parse(localStorage.getItem(s.CURRENT_MOVIES)).results)}let u;const m=document.querySelector(".js-pagination");function _(e,t){let o="";u=e,e>1&&(o+="<li class=' arrows'>&#129144;</li>",o+='<li class="firstInt">1</li>'),e>4&&(o+='<li class="dots">...</li>'),e>3&&(o+=`<li class="two-left">${e-2}</li>`),e>2&&(o+=`<li>${e-1}</li>`),o+=`<li class='active'>${e}</li>`,t-1>e&&(o+=`<li >${e+1}</li>`),t-2>e&&(o+=`<li >${e+2}</li>`),t-3>e&&(o+='<li class="dots">...</li>'),t>e&&(o+=`<li class="lastInt">${t}</li>`,o+="<li class=' arrows'>&#129146</li>"),m.innerHTML=o}let g=document.querySelector(".preloader");function p(){g.style.display="flex"}function v(){setTimeout((()=>{g.style.display="none"}),500)}const f=document.querySelector(".form-js"),h=document.querySelector(".form-input"),b=document.querySelector(".form__notification");let w,y;f.addEventListener("submit",(async function(e){e.preventDefault();let t=h.value.trim();if(t)try{const e=await(0,r.fetchMovies)(1,t);if(0===e.results.length)return b.style.visibility="visible",void setTimeout((()=>{b.style.visibility="hidden"}),5e3);y=e.page,p(),c(e),window.onload=v(),w=t,_(e.page,e.total_pages)}catch(e){console.log("Error")}}));s=n("9eEKU");const E=document.querySelector(".backdrop"),x=document.querySelector(".modal-window");function S(e,t,o){const n=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(o)).results.find((e=>e.id===n))}const T={onBackdropClick(e){"BODY"===e.target.parentElement.nodeName&&(E.hidden=!0,E.removeEventListener("click",this.onBackdropClick))},onEsc(e){"Escape"===e.code&&(E.hidden=!0,document.removeEventListener("keydown",this.onEsc))},onCloseBtn(){E.hidden=!0}},$={toWatched(e){"add to watched"===e.currentTarget.textContent?q(e,".modal__movie",s.CURRENT_MOVIES,s.watche,s.WATCHE,"watched"):N(e,".modal__movie",s.watche,s.WATCHE,"watched")},toQueue(e){"add to queue"===e.currentTarget.textContent?q(e,".modal__movie",s.CURRENT_MOVIES,s.queue,s.QUEUE,"queue"):N(e,".modal__movie",s.queue,s.QUEUE,"queue")}};function q(e,t,o,n,a,i){const l=S(e,t,o);n.push(l),localStorage.setItem(a,JSON.stringify(n)),e.currentTarget.textContent=`remove from ${i}`}function N(e,t,o,n,a){const i=JSON.parse(localStorage.getItem(n)),l=Number(e.target.closest(t).id);i.forEach(((e,t)=>{e.id===l&&o.splice(t,1)})),localStorage.setItem(n,JSON.stringify(o)),e.currentTarget.textContent=`add to ${a}`}function C(e,t){if(0!==e.length)return e.find((e=>e.id===t.id))}s.card.addEventListener("click",(function(e){const t=S(e,".card__item",s.CURRENT_MOVIES);!function(e,t,o,n){const a=`<button class="modal-window__close-btn">close</button>\n\n    <div class="modal__movie" id='${e.id}'><img class='movie__img' alt="movie poster" src="https://image.tmdb.org/t/p/w500/${e.poster_path}"/>\n      <div class="movie__info">\n      <h2 class="movie__title">${e.title}</h2>\n      <table class="movie__details">\n      <tbody>\n      <tr>\n      <td class='movie__detail modal-text--left-column modal-text'>Vote/Votes</td>\n      <td class="movie__detail modal-text modal-text--line-high">\n      <span class="movie__detail--accent">\n      ${e.vote_average.toFixed(1)} </span\n      >/ ${e.vote_count}\n      </td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>\n      <td class="movie__detail modal-text modal-text--line-high">${e.popularity.toFixed(1)}</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Original title</td>\n      <td class="movie__detail modal-text modal-text--uppercase">${e.original_title}</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Genres</td>\n      <td class="movie__detail modal-text">${function(e,t){return e.map((e=>JSON.parse(localStorage.getItem(t))[e])).join(", ")}(e.genre_ids,t)}</td>\n      </tr>\n          </tbody>\n          </table>\n          \n          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>\n      <p class="movie__description modal-text">${e.overview}</p>\n      <div class="movie__add-buttons">\n        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--watched">${o?"remove from ":"add to "}watched</button>\n        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--queue">${n?"remove from ":"add to "}queue</button>\n      </div><button data-movie-id='${e.id}'>Trailer</button>\n      </div></div>\n  `;x.innerHTML=a}(t,"genresList",C(s.watche,t),C(s.queue,t)),function(e,t){const o=document.querySelector(".modal-window__close-btn"),n={addToWatched:document.querySelector(".js-movie__add-btn--watched"),addToQueue:document.querySelector(".js-movie__add-btn--queue")};n.addToWatched.addEventListener("click",t.toWatched),n.addToQueue.addEventListener("click",t.toQueue),o.addEventListener("click",e.onCloseBtn),E.addEventListener("click",e.onBackdropClick),document.addEventListener("keydown",e.onEsc)}(T,$),E.hidden=!1}));r=n("dNTj1");const k=document.querySelector(".js-pagination");let O;async function L(e=1){let t;return console.log(w),w?(t=await(0,r.fetchMovies)(e,w),O=t.page,t):(p(),t=await d(e),window.onload=v(),O=t.page,t)}L().then((e=>{p(),c(e),O=e.page,window.onload=v(),_(e.page,e.total_pages)})),k.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;if("🡸"===e.target.textContent)L(O-=1).then((e=>{c(e),_(e.page,e.total_pages)}));else if("🡺"===e.target.textContent)L(O+=1).then((e=>{c(e),_(e.page,e.total_pages)}));else{L(e.target.textContent).then((e=>{c(e),_(e.page,e.total_pages)}))}}));
//# sourceMappingURL=index.56503359.js.map
