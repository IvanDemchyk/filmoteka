!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("Ur9Nn",(function(t,n){e(t.exports,"CURRENT_MOVIES",(function(){return r})),e(t.exports,"WATCHE",(function(){return o})),e(t.exports,"QUEUE",(function(){return a})),e(t.exports,"watche",(function(){return i})),e(t.exports,"queue",(function(){return c})),e(t.exports,"card",(function(){return u})),e(t.exports,"logo",(function(){return d})),e(t.exports,"home",(function(){return l})),e(t.exports,"library",(function(){return s})),e(t.exports,"THEME",(function(){return f})),e(t.exports,"LANG",(function(){return p})),e(t.exports,"GLOBALREQUEST",(function(){return m}));var r="current_movies",o="watche",a="queue",i=JSON.parse(localStorage.getItem(o))||[],c=JSON.parse(localStorage.getItem(a))||[],u=document.querySelector(".card"),d=document.querySelector(".page-header__logo-title"),l=document.querySelector(".home"),s=document.querySelector(".library"),f="theme",p="language",m="globalrequest"})),a.register("i3Qnx",(function(t,n){e(t.exports,"createMovieCard",(function(){return o}));var r=a("7oPUb");function o(e){return e.map((function(e){var t,n,o=e.poster_path,a=e.original_title,i=void 0===a?"":a,c=e.title,u=void 0===c?"":c,d=e.genre_ids,l=e.overview,s=void 0===l?"":l,f=e.release_date,p=void 0===f?"":f,m=e.id,v=void 0===m?Date.now():m;t=""===p?"no date":p.substr(0,4),n=o?"https://image.tmdb.org/t/p/w500/"+o:"https://picsum.photos/500/750";return'<li class="card__item list" id="'.concat(v,"\">\n            <img src='").concat(n,'\' loading="lazy" alt="').concat(s,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=u?u:i,'</h2>\n            <p class="card__desc">').concat((0,r.genresConvertor)(d).join(", ")," | ").concat(t,"\n            </p>\n            </li>")})).join("")}})),a.register("7oPUb",(function(t,n){e(t.exports,"genresConvertor",(function(){return o}));var r=a("lwvvG");function o(e){var t=e.map((function(e){return JSON.parse(localStorage.getItem(r.GENRES_MOVIES))[e]}));return t.length>2?(t.splice(2,t.length-2),t.push("Other")):0===t.length&&t.push("no genres"),t}})),a.register("lwvvG",(function(t,n){e(t.exports,"GENRES_MOVIES",(function(){return r}));var r="genresList";fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US").then((function(e){return e.json()})).then((function(e){var t=e.genres.reduce((function(e,t){var n=t.id,r=t.name;return e[n]=r,e}),{});localStorage.setItem(r,JSON.stringify(t))}))})),a.register("hYQZ6",(function(n,r){e(n.exports,"showMovieMain",(function(){return v})),e(n.exports,"showMovieLibrary",(function(){return _})),e(n.exports,"showSliderMovie",(function(){return h}));var o=a("bpxeT"),i=a("2TvXO"),c=a("lwvvG"),u=a("cDXQO"),d=a("jYmZk"),l=a("ilN96"),s=a("Ur9Nn"),f=a("1pRDY"),p=a("lH91g"),m=a("TEMkz");function v(e){return g.apply(this,arguments)}function g(){return(g=t(o)(t(i).mark((function e(n){var r,o,a,f;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("UL"!==n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return r=(0,l.getFilmMain)(n,".card__item",s.CURRENT_MOVIES),o=(0,d.default)(s.watche,r),a=(0,d.default)(s.queue,r),e.next=7,(0,u.trailerInst)(r.id);case 7:f=e.sent,(0,p.createMovieInfo)(r,c.GENRES_MOVIES,o,a,f),m.default.backdrop.hidden=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return b.apply(this,arguments)}function b(){return(b=t(o)(t(i).mark((function e(n){var r,o,a,v;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("UL"!==n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return r=(0,l.getFilmLibrary)(n,".card__item",(0,f.default)()),o=(0,d.default)(s.watche,r),a=(0,d.default)(s.queue,r),e.next=7,(0,u.trailerInst)(r.id);case 7:v=e.sent,(0,p.createMovieInfo)(r,c.GENRES_MOVIES,o,a,v),m.default.backdrop.hidden=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=t(o)(t(i).mark((function e(n){var r,o,a,f;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("UL"!==n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return n.preventDefault(),r=(0,l.getFilmMain)(n,".slider__item",s.CURRENT_MOVIES),o=(0,d.default)(s.watche,r),a=(0,d.default)(s.queue,r),e.next=8,(0,u.trailerInst)(r.id);case 8:f=e.sent,(0,p.createMovieInfo)(r,c.GENRES_MOVIES,o,a,f),m.default.backdrop.hidden=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),a.register("cDXQO",(function(n,r){e(n.exports,"trailerInst",(function(){return p}));var o=a("bpxeT"),i=a("2TvXO"),c=a("dIxxU"),u="0b11624b950ea9c4284f61844023b09c";function d(e){return l.apply(this,arguments)}function l(){return(l=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("https://api.themoviedb.org/3/movie/".concat(n,"/videos?api_key=").concat(u,"&language=en"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(response.statusText);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function s(e){return e.results.filter((function(e){return e.name.toLowerCase().includes("trailer")}))}function f(e){return"<button class='modal__movie-btn modal-text modal-text--uppercase trailer-btn' \"><a href=\"https://www.youtube.com/embed/".concat(e[0].key,'" target="_blank">\n  Trailer in new window\n </a></button>')}function p(e){return m.apply(this,arguments)}function m(){return(m=t(o)(t(i).mark((function e(n){var r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:if(34!==(r=e.sent).status_code&&7!==r.status_code&&0!==r.results.length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,s(r);case 7:if(0!==(o=e.sent).length){e.next=10;break}return e.abrupt("return");case 10:return f(o),e.abrupt("return",f(o));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),a.register("jYmZk",(function(t,n){function r(e,t){if(0!==e.length)return e.find((function(e){return e.id===t.id}))}e(t.exports,"default",(function(){return r}))})),a.register("ilN96",(function(t,n){function r(e,t,n){var r=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).results.find((function(e){return e.id===r}))}function o(e,t,n){var r=Number(e.target.closest(t).id);return JSON.parse(localStorage.getItem(n)).find((function(e){return e.id===r}))}e(t.exports,"getFilmMain",(function(){return r})),e(t.exports,"getFilmLibrary",(function(){return o}))})),a.register("1pRDY",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("TEMkz"),o=a("Ur9Nn");function i(){return r.default.watchedBtn.classList.contains("active")?o.WATCHE:o.QUEUE}})),a.register("TEMkz",(function(t,n){e(t.exports,"default",(function(){return r}));var r={backdrop:document.querySelector(".backdrop"),modalMovie:document.querySelector(".modal__movie"),watchedBtn:document.querySelector(".watched-btn-js"),libraryHeaderLink:document.querySelector(".js-library"),libraryMainContainer:document.querySelector("#main"),libraryHeader:document.querySelector(".library-header"),librarySlider:document.querySelector("#slider")}})),a.register("lH91g",(function(t,n){e(t.exports,"createMovieInfo",(function(){return d}));var r=a("kZjEW"),o=a("i10iy"),i=a("JnurI"),c=a("2qzGS"),u=a("TEMkz");function d(e,t,n,a){var d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l='<div class="movie__img-container">\n  <img class=\'movie__img\'\n    alt="movie poster"\n    src="https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'"\n  />\n</div>\n      <div class="movie__info">\n      <h2 class="movie__title">').concat(e.title,'</h2>\n      <table class="movie__details">\n      <tbody>\n      <tr>\n      <td class=\'movie__detail modal-text--left-column modal-text\'>Vote/Votes</td>\n      <td class="movie__detail modal-text modal-text--line-high">\n      <span class="movie__detail--accent">\n      ').concat(e.vote_average.toFixed(1)," </span\n      >/ ").concat(e.vote_count,'\n      </td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>\n      <td class="movie__detail modal-text modal-text--line-high">').concat(e.popularity.toFixed(1),'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Original title</td>\n      <td class="movie__detail modal-text modal-text--uppercase movie__detail-right-column">').concat(e.original_title,'</td>\n      </tr>\n      <tr>\n      <td class="movie__detail modal-text--left-column modal-text">Genres</td>\n      <td class="movie__detail modal-text movie__detail-right-column">').concat((0,r.default)(e.genre_ids,t),'</td>\n      </tr>\n          </tbody>\n          </table>\n          \n          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>\n      <p class="movie__description modal-text">').concat(e.overview,'</p>\n      \n      <div class="movie__add-buttons">\n      ').concat(d,'\n        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--watched">').concat(n?"remove from ":"add to ",'watched</button>\n        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--queue">').concat(a?"remove from ":"add to ","queue</button>\n      </div>\n      </div>\n  ");u.default.modalMovie.id=e.id,u.default.modalMovie.innerHTML=l,(0,o.default)(i.default,c.default)}})),a.register("kZjEW",(function(t,n){function r(e,t){return e.map((function(e){return JSON.parse(localStorage.getItem(t))[e]})).join(", ")}e(t.exports,"default",(function(){return r}))})),a.register("i10iy",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("TEMkz");function o(e,t){var n=document.querySelector(".modal-window__close-btn"),o={addToWatched:document.querySelector(".js-movie__add-btn--watched"),addToQueue:document.querySelector(".js-movie__add-btn--queue")};o.addToWatched.addEventListener("click",t.toWatched),o.addToQueue.addEventListener("click",t.toQueue),n.addEventListener("click",e.onCloseBtn),r.default.backdrop.addEventListener("click",e.onBackdropClick),document.addEventListener("keydown",e.onEsc)}})),a.register("JnurI",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("TEMkz"),o={onBackdropClick:function(e){"BODY"===e.target.parentElement.nodeName&&(r.default.backdrop.hidden=!0,r.default.backdrop.removeEventListener("click",this.onBackdropClick))},onEsc:function(e){"Escape"===e.code&&(r.default.backdrop.hidden=!0,document.removeEventListener("keydown",this.onEsc))},onCloseBtn:function(){r.default.backdrop.hidden=!0}}})),a.register("2qzGS",(function(t,n){e(t.exports,"default",(function(){return c}));var r=a("kvTYB"),o=a("77cYI"),i=a("Ur9Nn"),c={toWatched:function(e){"add to watched"===e.currentTarget.textContent?(0,r.default)(e,".modal__movie",i.CURRENT_MOVIES,i.watche,i.WATCHE,"watched"):(0,o.default)(e,".modal__movie",i.watche,i.WATCHE,"watched")},toQueue:function(e){"add to queue"===e.currentTarget.textContent?(0,r.default)(e,".modal__movie",i.CURRENT_MOVIES,i.queue,i.QUEUE,"queue"):(0,o.default)(e,".modal__movie",i.queue,i.QUEUE,"queue")}}})),a.register("kvTYB",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("Ur9Nn"),o=a("ilN96"),i=a("TEMkz"),c=a("975gr"),u=a("1pRDY");function d(e,t,n,a,d,l){var s=(0,o.getFilmMain)(e,t,n);a.push(s),localStorage.setItem(d,JSON.stringify(a)),e.currentTarget.textContent="remove from ".concat(l),i.default.libraryHeaderLink.classList.contains("current")&&(r.card.innerHTML=(0,c.default)(JSON.parse(localStorage.getItem((0,u.default)()))))}})),a.register("975gr",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("TEMkz"),o=a("i3Qnx");function i(e){return e&&e.length?(r.default.libraryHeader.classList.remove("library-header-notification"),r.default.libraryMainContainer.classList.remove("notification-bcg"),r.default.librarySlider.classList.remove("slider-bcg"),(0,o.createMovieCard)(e)):(r.default.libraryMainContainer.classList.add("notification-bcg"),r.default.libraryHeader.classList.add("library-header-notification"),r.default.librarySlider.classList.add("slider-bcg"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}})),a.register("77cYI",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("Ur9Nn"),o=a("TEMkz"),i=a("975gr"),c=a("1pRDY");function u(e,t,n,a,u){var d=JSON.parse(localStorage.getItem(a)),l=Number(e.target.closest(t).id);d.forEach((function(e,t){e.id===l&&n.splice(t,1)})),localStorage.setItem(a,JSON.stringify(n)),e.currentTarget.textContent="add to ".concat(u),o.default.libraryHeaderLink.classList.contains("current")&&(r.card.innerHTML=(0,i.default)(JSON.parse(localStorage.getItem((0,c.default)()))))}})),a.register("kvC6y",(function(t,n){e(t.exports,"loaderOn",(function(){return o})),e(t.exports,"loaderOff",(function(){return a}));var r=document.querySelector(".preloader");function o(){r.style.display="flex"}function a(){setTimeout((function(){r.style.display="none"}),500)}}))}();
//# sourceMappingURL=library.5559ac03.js.map
