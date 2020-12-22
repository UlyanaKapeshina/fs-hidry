export default class Basket {
  constructor() {
    this.items = [];
    this._observers = [];
  }

  addItem(item) {
    this.items.push(item);
    this.notify(this.items);
  }
  removeItem(item) {
    this.items = this.items.filter((it) => it.id !== item.id);
    this.notify(this.items);
  }
  addObserver(observer) {
    this._observers.push(observer);
    observer(this.items);
  }
  removeObserver(observer) {
    this._observers = this._observers.filter((it) => observer !== it);
  }

  notify(...update) {
    this._observers.forEach((observer) => observer(...update));

    // document.dispatchEvent(
    //   new CustomEvent("basketModelChange", {
    //     detail: { data: update },
    //   })
    // );
  }
}
