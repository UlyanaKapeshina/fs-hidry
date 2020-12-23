export default class BasketItem {
  constructor(item, model) {
    this.model = model;
    this.cardData = item.data;
    this.count = item.count;
    this.itemTemplate = document.querySelector("#basket-item");
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  createItem() {
    this.item = this.itemTemplate.content.cloneNode(true);
    this.item.querySelector("img").src = this.cardData.image.src;
    this.item.querySelector("img").alt = this.cardData.image.alt;
    this.item.querySelector(".basket__item-name").textContent = this.cardData.name;
    this.item.querySelector(".count-controls__result").textContent = this.count;
    this.item.querySelector(".basket__cost").textContent = this.cardData.price * this.count;
    this.item.querySelector(".basket__item-remove").addEventListener("click", this.onRemoveClick);
    return this.item;
  }
  onRemoveClick(evt) {
    evt.currentTarget.parentElement.remove();
    this.model.removeItem(this.cardData);
  }
}
