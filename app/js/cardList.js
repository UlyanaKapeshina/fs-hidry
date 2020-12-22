import { removeElements } from "./util.js";

const template = document.querySelector("#catalog__li-template");
const fragment = document.createDocumentFragment();

export const renderCards = (cards, onButtonClick) => {
  cards.forEach((it) => {
    const item = template.content.cloneNode(true);
    item.querySelector(".catalog__item").dataset.id = it.id;
    item.querySelector("img").src = it.image.src;
    item.querySelector("img").alt = it.image.alt;
    item.querySelector(".catalog__description").textContent = it.name;
    item.querySelector(".catalog__cost").textContent = it.cost;
    item.querySelector("a").href = `card.html?id=${it.id}`;
    const buttonClickHandler = (evt) => {
      evt.preventDefault();
      evt.target.textContent = "В корзине";
      onButtonClick(it);
    };
    item
      .querySelector(".catalog__button")
      .addEventListener("click", buttonClickHandler);
    fragment.appendChild(item);
  });
  document.querySelector(".catalog__list").appendChild(fragment);
};

export const updateCards = (data) => {
  removeElements(document.querySelectorAll(".catalog__item"));
  renderCards(data);
};
