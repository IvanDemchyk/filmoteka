!function(){var e=JSON.parse(localStorage.getItem("watche"))||[],t=JSON.parse(localStorage.getItem("queue"))||[],n=document.querySelector(".card");function c(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,c=e.title,a=e.genre_ids,r=e.overview,s=e.release_date,i=e.id;return'<li class="card__item list" id="'.concat(i,'">\n            <img src="https://image.tmdb.org/t/p/w500/').concat(t,'" alt="').concat(r,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=c?c:n,'</h2>\n            <p class="card__desc">').concat(a.join(", ")," | ").concat(s.substr(0,4),"\n            </p>\n            </li>")})).join("")}var a=document.querySelector("#main");function r(e){return e&&e.length?c(e):(a.classList.add("notification-bcg"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}n.insertAdjacentHTML("beforeend",r(e));var s=document.querySelector(".watched-btn-js"),i=document.querySelector(".queue-btn-js");function o(e,t,n){n.classList.add(e),t.classList.remove(e)}document.querySelector(".library-header__buttons").addEventListener("click",(function(c){var a=c.target;if(!a.classList.contains("library-header__btn"))return;a.classList.contains("queue-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",r(t)),o("active",s,a));a.classList.contains("watched-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",r(e)),o("active",i,a))}));var d=document.querySelector(".watched-btn-js"),l=document.querySelector(".queue-btn-js");l.addEventListener("click",(function(){l.classList.add("active"),d.classList.remove("active")}))}();
//# sourceMappingURL=library.de487564.js.map
