import { removeElements } from "./util.js";
export default class BasketSmall {
  constructor(model) {
    this.model = model;
    this.basketSmall = document.querySelector(".menu__item--basket");
    this.basketSmallCount = this.basketSmall.querySelector("span");
  }

  init() {
    this.model.addObserver(this.onDataChange.bind(this));
  }

  onDataChange(data) {
    this.renderCount(data.length);
  }

  renderCount(count) {
    this.basketSmallCount.textContent = count;
  }
}
