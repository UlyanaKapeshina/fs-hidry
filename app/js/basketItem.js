export default class BasketItem {
  constructor(item, model) {
    this.model = model;
    this.cardData = item.data;
    this.count = item.count;
    this.itemTemplate = document.querySelector("#basket-item");
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  createItem() {
    this.item = this.itemTemplate.content.cloneNode(true);
    this.item.querySelector("img").src = this.cardData.image.src;
    this.item.querySelector("img").alt = this.cardData.image.alt;
    this.item.querySelector(".basket__item-name").textContent = this.cardData.name;
    this.item.querySelector(".count-controls__result").textContent = this.count;
    this.item.querySelector(".basket__cost").textContent = this.cardData.price * this.count;

    this.item.querySelector(".checkbox-label").htmlFor = this.cardData.id;
    const input = this.item.querySelector(".checkbox-input");
    input.id = this.cardData.id;
    input.checked = true;

    this.item.querySelector(".basket__item-remove").addEventListener("click", this.onRemoveClick);
    this.item.querySelector(".count-controls__minus").addEventListener("click", this.onMinusClick);
    this.item.querySelector(".count-controls__plus").addEventListener("click", this.onPlusClick);
    if (this.count === 1) {
      this.item.querySelector(".count-controls__minus").disabled = true;
    }
    return this.item;
  }
  onRemoveClick() {
    this.model.removeItem(this.cardData);
  }
  onMinusClick(evt) {
    if (this.count === 1) {
      return;
    }
    this.model.decreaseItemCount(this.cardData);
  }
  onPlusClick() {
    this.model.addItem(this.cardData);
  }
}
