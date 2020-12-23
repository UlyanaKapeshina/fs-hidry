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

  onDataChange(data = {}) {
    const count = data.reduce((acc, it) => {
      return acc + it.count;
    }, 0);
    this.renderCount(count);
  }

  renderCount(count) {
    this.basketSmallCount.textContent = count;
  }
}
