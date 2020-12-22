// import { removeElements } from "./util.js";
// export default class Basket {
//   constructor(basketIcon) {
//     this.basketIcon = basketIcon;
//     this.basket = document.querySelector(".basket");
//     this.shadow = document.querySelector(".shadow-layer");
//     this.close = this.basket.querySelector(".close");
//     this.ItemTemplate = this.basket.querySelector("#basket-item");
//     this.ItemList = this.basket.querySelector(".basket__list");
//     this.count = this.basket.querySelector(".basket__result-count");
//     this.sum = this.basket.querySelector(".basket__result-sum");
//     this.items = [];
//     this.setOnIconClickHandler();
//   }
//   setOnIconClickHandler() {
//     this.basketIcon.addEventListener("click", this.open.bind(this));
//   }
//   open(evt) {
//     evt.preventDefault();
//     this.basket.classList.remove("basket--hide");
//     this.shadow.classList.remove("shadow-layer--hide");
//     this.close.addEventListener("click", this.hide.bind(this));
//     this.renderItems();
//     this.renderResult();
//   }
//   hide() {
//     this.basket.classList.add("basket--hide");
//     this.shadow.classList.add("shadow-layer--hide");
//   }

//   addItems(item) {
//     this.items.push(item);
//     this.renderCount();
//   }

//   renderCount() {
//     this.basketIcon.querySelector("span").textContent = this.items.length;
//   }
//   renderItems() {
//     this.removeItems();
//     const fragment = document.createDocumentFragment();
//     const items = this.items;

//     const newItems = items.reduce((acc, item) => {
//       const index = acc.indexOf(item);

//       if (index !== -1) {
//         const item1 = acc[index];
//         item1.count++;
//         return acc;
//       }
//       item.count = 1;
//       acc.push(item);

//       return acc;
//     }, []);

//     newItems.forEach((it) => {
//       const item = this.ItemTemplate.content.cloneNode(true);
//       item.querySelector("img").src = it.image.src;
//       item.querySelector("img").alt = it.image.alt;
//       item.querySelector(".basket__item-name").textContent = it.name;
//       item.querySelector(".count-controls__result").textContent = it.count;
//       item.querySelector(".basket__cost").textContent = it.price * it.count;
//       fragment.appendChild(item);
//     });
//     this.ItemList.appendChild(fragment);
//   }
//   removeItems() {
//     const items = this.basket.querySelectorAll(".basket__item");
//     removeElements(items);
//   }
//   renderResult() {
//     const resultSum = this.items.reduce((acc, item) => {
//       return acc + Number(item.price);
//     }, 0);
//     this.sum.textContent = resultSum;
//     this.count.textContent = this.items.length;
//   }
// }
