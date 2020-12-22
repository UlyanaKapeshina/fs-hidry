import { removeElements } from "./util.js";
export default class Basket {
  constructor() {
    this.items = [];
  }
  setDataChangeHandler(onDataChange) {
    this.onDataChange = onDataChange;
  }
  getItems() {
    return this.items;
  }
  setItems(items) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
    this.onDataChange();
  }
  removeItem(item) {
    this.items = this.items.filter((it) => it.id !== item.id);
    this.onDataChange();
  }
}
