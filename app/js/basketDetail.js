import BasketItem from "./basketItem.js";
import { removeElements } from "./util.js";
export default class BasketDetail {
  constructor(model) {
    this.model = model;
    this.basketSmallElem = document.querySelector(".menu__item--basket");
    this.basketDetail = document.querySelector(".basket");
    this.shadowLayer = document.querySelector(".shadow-layer");
    this.closeBasketDetailButton = this.basketDetail.querySelector(".close");
    this.basketInner = this.basketDetail.querySelector(".basket__inner");
    this.itemList = this.basketDetail.querySelector(".basket__list");
    this.result = this.basketDetail.querySelector(".basket__result");
    this.count = this.result.querySelector(".basket__result-count");
    this.sum = this.result.querySelector(".basket__result-sum");
    this.basketEmptyMessage = this.basketDetail.querySelector(".basket__empty");
    this.onDataChange = this.onDataChange.bind(this);
    this.init();
  }
  init() {
    this.basketSmallElem.addEventListener("click", this.showBasketDetail.bind(this));
  }

  onDataChange(cards) {
    this.renderBasketDetail(cards);
  }
  onStorageChange(evt) {
    debugger;
  }

  renderBasketDetail(cards) {
    if (cards.length > 0) {
      this.hideEmptyBasket();
      this.renderItems(cards);
      this.renderResult(cards);
    } else {
      this.showEmptyBasket();
    }
  }

  showBasketDetail(evt) {
    evt.preventDefault();
    this.model.addObserver(this.onDataChange);
    this.basketDetail.classList.remove("basket--hide");
    this.shadowLayer.classList.remove("shadow-layer--hide");
    this.closeBasketDetailButton.addEventListener("click", this.hideBasketDetail.bind(this));
  }

  hideBasketDetail() {
    this.model.removeObserver(this.onDataChange);
    this.basketDetail.classList.add("basket--hide");
    this.shadowLayer.classList.add("shadow-layer--hide");
  }

  renderItems(cards) {
    this.removeItems();
    const fragment = document.createDocumentFragment();
    cards.forEach((it) => {
      const item = new BasketItem(it, this.model);
      fragment.appendChild(item.createItem());
    });

    this.itemList.appendChild(fragment);
  }

  removeItems() {
    const items = this.basketDetail.querySelectorAll(".basket__item");
    removeElements(items);
  }

  renderResult(cards) {
    const resultSum = cards.reduce((acc, it) => {
      return acc + Number(it.data.price);
    }, 0);
    const resultCount = cards.reduce((acc, it) => {
      return acc + Number(it.count);
    }, 0);
    this.sum.textContent = resultSum;
    this.count.textContent = resultCount;
  }
  showEmptyBasket() {
    this.basketInner.style.display = "none";
    this.basketEmptyMessage.style.display = "block";
  }
  hideEmptyBasket() {
    this.basketInner.style.display = "flex";
    this.basketEmptyMessage.style.display = "none";
  }
}
