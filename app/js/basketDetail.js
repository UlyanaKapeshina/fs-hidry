import { removeElements } from "./util.js";
export default class BasketDetail {
  constructor(model) {
    this.model = model;
    this.basketSmallElem = document.querySelector(".menu__item--basket");
    this.basketDetail = document.querySelector(".basket");
    this.shadowLayer = document.querySelector(".shadow-layer");
    this.closeBasketDetailButton = this.basketDetail.querySelector(".close");
    this.basketInner = this.basketDetail.querySelector(".basket__inner");
    this.itemTemplate = this.basketDetail.querySelector("#basket-item");
    this.itemList = this.basketDetail.querySelector(".basket__list");
    this.result = this.basketDetail.querySelector(".basket__result");
    this.count = this.result.querySelector(".basket__result-count");
    this.sum = this.result.querySelector(".basket__result-sum");
    this.basketEmptyMessage = this.basketDetail.querySelector(".basket__empty");
    this.onDataChange = this.onDataChange.bind(this);
  }
  init() {
    this.basketSmallElem.addEventListener(
      "click",
      this.showBasketDetail.bind(this)
    );
  }

  onDataChange(cards) {
    this.renderBasketDetail(cards);
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
    this.closeBasketDetailButton.addEventListener(
      "click",
      this.hideBasketDetail.bind(this)
    );
  }

  hideBasketDetail() {
    this.model.removeObserver(this.onDataChange);
    this.basketDetail.classList.add("basket--hide");
    this.shadowLayer.classList.add("shadow-layer--hide");
  }

  renderItems(cards) {
    this.removeItems();
    const fragment = document.createDocumentFragment();
    const items = cards;

    const uniqItemsWithCount = items.reduce((acc, item) => {
      const index = acc.indexOf(item);

      if (index !== -1) {
        const repeatingItem = acc[index];
        repeatingItem.count++;
        return acc;
      }
      item.count = 1;
      acc.push(item);

      return acc;
    }, []);

    uniqItemsWithCount.forEach((it) => {
      const item = this.itemTemplate.content.cloneNode(true);
      item.querySelector("img").src = it.image.src;
      item.querySelector("img").alt = it.image.alt;
      item.querySelector(".basket__item-name").textContent = it.name;
      item.querySelector(".count-controls__result").textContent = it.count;
      item.querySelector(".basket__cost").textContent = it.price * it.count;
      fragment.appendChild(item);
    });
    this.itemList.appendChild(fragment);
  }
  removeItems() {
    const items = this.basketDetail.querySelectorAll(".basket__item");
    removeElements(items);
  }

  renderResult(cards) {
    const resultSum = cards.reduce((acc, item) => {
      return acc + Number(item.price);
    }, 0);
    this.sum.textContent = resultSum;
    this.count.textContent = cards.length;
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
