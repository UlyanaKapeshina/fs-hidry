export default class Basket {
  constructor() {
    this._observers = [];
    this.onStorageChange = this.onStorageChange.bind(this);
    window.addEventListener("storage", this.onStorageChange, false);
  }

  addItem(item) {
    const items = JSON.parse(localStorage.getItem("basketCards")) || [];

    const index = items.findIndex((it) => it.data.id === item.id);

    if (index !== -1) {
      items[index].count++;
    } else {
      items.push({
        data: item,
        count: 1,
      });
    }
    localStorage.setItem("basketCards", JSON.stringify(items));
    this.notify(items);
  }
  removeItem(item) {
    let items = JSON.parse(localStorage.getItem("basketCards")) || [];
    items = items.filter((it) => it.data.id !== item.id);
    localStorage.setItem("basketCards", JSON.stringify(items));
    this.notify(items);
  }
  addObserver(observer) {
    this._observers.push(observer);
    const items = JSON.parse(localStorage.getItem("basketCards")) || [];
    observer(items);
  }
  removeObserver(observer) {
    this._observers = this._observers.filter((it) => observer !== it);
  }

  notify(...update) {
    this._observers.forEach((observer) => observer(...update));
  }
  onStorageChange(evt) {
    if (evt.storageArea.length === 0) {
      this.notify([]);
      return;
    }
    if (evt.key !== "basketCards") {
      return;
    }

    const newData = JSON.parse(evt.newValue);
    this.notify(newData);
  }
}
