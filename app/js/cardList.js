import { mocks } from "./mocks.js";
import { removeElements } from "./util.js";
import * as api from "./api.js";

const template = document.querySelector("#catalog__li-template");
const fragment = document.createDocumentFragment();
export const renderCards = (cards) => {
  cards.forEach((it) => {
    const item = template.content.cloneNode(true);
    item.querySelector(".catalog__item").dataset.id = it.id;
    item.querySelector("img").src = it.image.src;
    item.querySelector("img").alt = it.image.alt;
    item.querySelector(".catalog__description").textContent = it.name;
    item.querySelector(".catalog__cost").textContent = it.cost;
    item.querySelector("a").href = `card.html?id=${it.id}`;
    fragment.appendChild(item);
  });
  document.querySelector(".catalog__list").appendChild(fragment);
};

// const onLoadCards = (data) => {
//   // dataCards = data;
//   const randomSortData = data.slice().sort(function () {
//     return Math.random() - 0.5;
//   });
//   renderCards(randomSortData);
// };
// const onErrorCards = (error) => {
//   // dataCards = data;
//   console.log(error);
// };

// api.loadCardsData(onLoadCards, onErrorCards);

export const updateCards = (data) => {
  removeElements(document.querySelectorAll(".catalog__item"));
  renderCards(data);
};
