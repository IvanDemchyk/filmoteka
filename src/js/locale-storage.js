// Index.js

// import getFetchMovies from "./api.js";
// import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from "./local.js";
// import { createCard, createPaginationList } from "./createCard.js";

// export const card = document.querySelector(".card");
// export const pagination = document.querySelector(".pagination-list");

// // Идет запрос на сервер , первый запрос.Получаем данные с фетча и записывает массив обьектов в localStorage
// // Идет рендер страницы с данными уже с localeStorage
// getFetchMovies(1).then((res) => {
//   localStorage.setItem(CURRENT_MOVIES, JSON.stringify(res.results));
//   card.insertAdjacentHTML(
//     "beforeend",
//     createCard(JSON.parse(localStorage.getItem(CURRENT_MOVIES)))
//   );
//   pagination.insertAdjacentHTML(
//     "beforeend",
//     createPaginationList(JSON.parse(localStorage.getItem(CURRENT_MOVIES)))
//   );
// });

// // При первом клике на карточку открываеться модалка и отрисовка контента одной карточки с localStorage
// // Если идет клик по кнопке добваить/удалить - добавляем или удаляем localStorage
// card.addEventListener("click", (e) => {
//   const saveLocalData = JSON.parse(localStorage.getItem(CURRENT_MOVIES));
//   saveLocalData.forEach((el) => {
//     //   if (e.target.textContent === "Watche") {
//     //     if (el.title === e.target.textContent) {
//     //       watche.push(el);
//     //       localStorage.setItem(WATCHE, JSON.stringify(watche));
//     //     }
//     //   }
//     //   if (e.target.textContent === "Queue") {
//     //     queue.push(el);
//     //     localStorage.setItem(QUEUE, JSON.stringify(queue));
//     //   }
//     // }
//     el.title === e.target.textContent ? watche.push(el) : console.log("no");
//   });
//   localStorage.setItem(WATCHE, JSON.stringify(watche));
// });

// // Создать три ключа в localeStorage : CURRENT_MOVIES,WATCHE,QUEUE
// //1. Первый запрос за отрисовкой главной стринцы
// // В промисе где обрабатывется запрос который пришел - записываем данные в localStorage в ключ CURRENT_MOVIES ложим обьект данных с запроса и передаем педеаеь уже из localStorage данные для рендера страницу при каждом новом запросе будет перезаписываться localeStorage и перерендываться страница

// // 2. На главной странице при клике на фильм открывается модалка.При открытие модалкы, информация для карточки береться с localeStorage если это происходит на главной страинце береться с CURRENT_MOVIES

// //3.При нажатие на кнопку watche добавить обьект с инфо в localeStorage WATCHE аналоично с QUEUE.

// —————————————————
// Library.js

// import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from "./local.js";
// import { createCard } from "./createCard.js";

// const cardF = document.querySelector(".card-f");

// // Приходят данные которые мы передали с localeStorage проверям какой ответ пришел и взависимости от данных рендерем либо карточки с фильмами либо показываем картинку-текс что еще ничего нет
// function createLibary(data) {
//   if (data === "EMPTY" || !data.length) {
//     return "EMPTY";
//   }
//   return createCard(data);
// }

// // Получаем данные с localeStorage , провереям есть ли там что-то под ключем WATCHE если нет закидываем что-то картинку или текс который покажем на странице библиотека.
// const dataLocalStorage = JSON.parse(localStorage.getItem(WATCHE)) || "EMPTY";

// // Рендерем ответ-разметку на вкладке библиотека
// cardF.insertAdjacentHTML("beforeend", createLibary(dataLocalStorage));

// // При первом клике на карточку открываеться модалка и отрисовка контента одной карточки с localStorage
// // Если идет клик по кнопке удалить - добавляем или удаляем localStorage
// cardF.addEventListener("click", (e) => {
//   const dataLocalStorage = JSON.parse(localStorage.getItem(WATCHE));
//   dataLocalStorage.forEach((el, i, arr) => {
//     el.title === e.target.textContent ? arr.splice(i, 1) : console.log("no");
//   });

//   localStorage.setItem(WATCHE, JSON.stringify(dataLocalStorage));
//   createLibary(dataLocalStorage);
// });

// ——————————————

// createCard.js

// export function createCard(data) {
//   const markup = data
//     .map(({ poster_path, name, title }) => {
//       return `<li class="card__item">
//             <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt=${
//         name ?? title
//       } class="card__img" />
//             <h2 class="card__title">${name ?? title}</h2>
//             <p class="card__desc"></p>
//             <button type= "button">Watche</button>
//             <button type= "button">Queue</button>
//             </li>`;
//     })
//     .join("");
//   return markup;
// }

// export function createPaginationList(data) {
//   const markup = data
//     .map((el, i) => {
//       return ` <li class="pagination-list__item">
//                <button type="button" class="pagination-list__btn">${
//                  i + 1
//                }</button>
//                </li>`;
//     })
//     .join("");
//   return markup;
// }

// ———————————————————

// Pagination.js

// import { pagination, card } from "./index.js";
// import getFetchMovies from "./api.js";
// import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from "./local.js";
// import { createCard } from "./createCard.js";

// pagination.addEventListener("click", (evt) => {
//   console.dir(evt.target.textContent);
//   getFetchMovies(evt.target.textContent).then((res) => {
//     localStorage.setItem(CURRENT_MOVIES, JSON.stringify(res.results));
//     card.innerHTML = "";
//     card.insertAdjacentHTML(
//       "beforeend",
//       createCard(JSON.parse(localStorage.getItem(CURRENT_MOVIES)))
//     );
//   });
// });
