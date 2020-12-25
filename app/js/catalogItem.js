export class CatalogItem {
  constructor(card, template, onButtonClick, isInBasket) {
    this.data = card;
    this.template = template;
    this.onButtonClick = onButtonClick;
    this.isInBasket = isInBasket;
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.createElement();
  }
  getElement() {
    return this.card;
  }

  buttonClickHandler(evt) {
    evt.preventDefault();
    evt.target.textContent = "В корзине";
    evt.target.classList.add("button--basket");
    this.onButtonClick(this.data);
  }

  createElement() {
    this.card = this.template.content.cloneNode(true);
    this.card.querySelector(".catalog__item").dataset.id = this.data.id;
    this.card.querySelector("img").src = this.data.image.src;
    this.card.querySelector("img").alt = this.data.image.alt;
    this.card.querySelector(".catalog__description").textContent = this.data.name;
    this.card.querySelector(".catalog__cost").textContent = this.data.cost;
    this.card.querySelector("a").href = `card.html?id=${this.data.id}`;
    this.card.querySelector(".catalog__button").addEventListener("click", this.buttonClickHandler);

    if (this.isInBasket) {
      const button = this.card.querySelector(".catalog__button");
      button.textContent = "В корзине";
      button.classList.add("button--basket");
    }
  }
}
