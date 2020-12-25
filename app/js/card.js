export class Card {
  constructor(onBasketClick) {
    this.onBasketClick = onBasketClick;
    this.onButtonBasketClick = this.onButtonBasketClick.bind(this);
    this.template = document.querySelector("#card");
  }
  render(data) {
    this.data = data;
    const card = this.template.content.cloneNode(true);
    card.querySelector("h2").textContent = data.name;
    card.querySelector("img").src = data.image.src;
    card.querySelector("img").alt = data.image.alt;
    card.querySelector(".card__type").textContent = data.types.join(", ");
    card.querySelector(".card__weight").textContent = data.weightCategory;
    card.querySelector(".card__features").textContent = data.features.join(", ");
    card.querySelector(".card__diseases").textContent = data.diseases.join(", ");
    card.querySelector(".card__iq").textContent = data.iq;
    card.querySelector(".card__price").textContent = data.price;
    card.querySelector(".card__button-basket").addEventListener("click", this.onButtonBasketClick);
    document.querySelector(".card").appendChild(card);
  }
  onButtonBasketClick(evt) {
    evt.preventDefault();
    evt.target.textContent = "В корзине";
    this.onBasketClick(this.data);
  }
}
