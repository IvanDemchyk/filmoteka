!function(){var e=JSON.parse(localStorage.getItem("watche"))||[],t=JSON.parse(localStorage.getItem("queue"))||[],n=document.querySelector(".card"),c="genresList";function a(e){var t=e.map((function(e){return JSON.parse(localStorage.getItem(c))[e]}));return t.length>2&&(t.splice(2,t.length-2),t.push("other")),t}function r(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,c=e.title,r=e.genre_ids,i=e.overview,s=e.release_date,o=e.id;return'<li class="card__item list" id="'.concat(o,'">\n            <img src="https://image.tmdb.org/t/p/w500/').concat(t,'" loading="lazy" alt="').concat(i,'" class="card__img" />\n            <h2 class="card__title">').concat(null!=c?c:n,'</h2>\n            <p class="card__desc">').concat(a(r).join(", ")," | ").concat(s.substr(0,4),"\n            </p>\n            </li>")})).join("")}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US").then((function(e){return e.json()})).then((function(e){var t=e.genres.reduce((function(e,t){var n=t.id,c=t.name;return e[n]=c,e}),{});localStorage.setItem(c,JSON.stringify(t))}));var i=document.querySelector("#main");function s(e){return e&&e.length?r(e):(i.classList.add("notification-bcg"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}n.insertAdjacentHTML("beforeend",s(e));var o=document.querySelector(".watched-btn-js"),l=document.querySelector(".queue-btn-js");function u(e,t,n){n.classList.add(e),t.classList.remove(e)}document.querySelector(".library-header__buttons").addEventListener("click",(function(c){var a=c.target;if(!a.classList.contains("library-header__btn"))return;a.classList.contains("queue-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",s(t)),u("active",o,a));a.classList.contains("watched-btn-js")&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",s(e)),u("active",l,a))}));var d=document.querySelector(".watched-btn-js"),g=document.querySelector(".queue-btn-js");g.addEventListener("click",(function(){g.classList.add("active"),d.classList.remove("active")}))}();
//# sourceMappingURL=library.e0a08038.js.map
