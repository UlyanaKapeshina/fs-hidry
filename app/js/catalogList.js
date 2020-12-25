import { removeElements } from "./util.js";
import { CatalogItem } from "./catalogItem.js";

export class CatalogList {
  constructor(onButtonClick) {
    this.list = document.querySelector(".catalog__list");
    this.cardTemplate = document.querySelector("#catalog__li-template");
    this.onButtonClick = onButtonClick;
  }
  renderCards(cards) {
    const template = this.cardTemplate;
    const fragment = document.createDocumentFragment();
    const items = JSON.parse(localStorage.getItem("basketCards")) || [];
    cards.forEach((it) => {
      const isInBasket = items.some((item) => item.data.id === it.id);
      const card = new CatalogItem(it, template, this.onButtonClick, isInBasket);
      fragment.appendChild(card.getElement());
    });
    this.list.appendChild(fragment);
  }
  updateCards(cards) {
    this.removeCards();
    this.renderCards(cards);
  }
  removeCards() {
    // const cards = this.list.querySelectorAll(".catalog__item");
    removeElements(this.list.children);
  }
}
