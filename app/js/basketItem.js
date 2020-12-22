export default class BasketItem {
  constructor(cardData) {
    this.cardData = cardData;
    this.itemTemplate = document.querySelector("#basket-item");
  }

  createItem() {
    this.item = this.itemTemplate.content.cloneNode(true);
    this.item.querySelector("img").src = this.cardData.image.src;
    this.item.querySelector("img").alt = this.cardData.image.alt;
    this.item.querySelector(".basket__item-name").textContent = this.cardData.name;
    this.item.querySelector(".count-controls__result").textContent = this.cardData.count;
    this.item.querySelector(".basket__cost").textContent = this.cardData.price * this.cardData.count;
    this.item.querySelector(".basket__item-remove").addEventListener("click", this.onItemClick);
    return this.item;
  }
}
