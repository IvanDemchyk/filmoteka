!function(){var e=JSON.parse(localStorage.getItem("watche"))||[],t=JSON.parse(localStorage.getItem("queue"))||[],n=document.querySelector(".card");function c(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,c=e.title,a=e.genre_ids,s=e.overview,i=e.release_date,r=e.id;return'<li class="card__item list" id="'.concat(r,'">\n            <img src="https://image.tmdb.org/t/p/w500/').concat(t,'" alt="').concat(s,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=c?c:n,'</h2>\n            <p class="card__desc">').concat(a.join(", ")," | ").concat(i.substr(0,4),"\n            </p>\n            </li>")})).join("")}function a(e){return e&&e.length?c(e):'<li class="notification">\n            <p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>\n            <svg class="notification-svg">\n            <use href=""></use>\n            </svg>\n           </li>'}n.insertAdjacentHTML("beforeend",a(e));var s=document.querySelector(".watched-btn-js"),i=document.querySelector(".queue-btn-js");function r(e,t,n){n.classList.add(e),t.classList.remove(e)}document.querySelector(".library-header__buttons").addEventListener("click",(function(c){var o=c.target;if(!o.classList.contains("library-header__btn"))return;o.classList.contains("queue-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",a(t)),r("active",s,o));o.classList.contains("watched-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",a(e)),r("active",i,o))}));var o=document.querySelector(".watched-btn-js"),l=document.querySelector(".queue-btn-js");l.addEventListener("click",(function(){l.classList.add("active"),o.classList.remove("active")}))}();
//# sourceMappingURL=library.7f4e3113.js.map
