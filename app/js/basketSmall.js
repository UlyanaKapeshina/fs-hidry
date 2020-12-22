export default class BasketSmall {
  constructor(model) {
    this.model = model;
    this.basketSmall = document.querySelector(".menu__item--basket");
    this.basketSmallCount = this.basketSmall.querySelector("span");
    this.onDataChange = this.onDataChange.bind(this);
  }

  init() {
    this.model.addObserver(this.onDataChange);
    document.addEventListener("basketModelChange", this.onDataChange);
  }

  onDataChange(data) {
    this.renderCount(data.length);
  }

  renderCount(count) {
    this.basketSmallCount.textContent = count;
  }
}
