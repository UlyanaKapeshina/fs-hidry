import * as api from "./api.js";
import Basket from "./basket.js";
import BasketDetail from "./basketDetail.js";
import BasketSmall from "./basketSmall.js";

const basket = new Basket();
const basketSmall = new BasketSmall(basket);
const basketDetail = new BasketDetail(basket);

const id = Number(location.search.replace("?id=", ""));

const renderCard = (data, onCardBasketClick) => {
  const card = document.querySelector(".card");
  card.querySelector("h2").textContent = data.name;
  card.querySelector("img").src = data.image.src;
  card.querySelector("img").alt = data.image.alt;
  card.querySelector(".card__type").textContent = data.types.join(", ");
  card.querySelector(".card__weight").textContent = data.weightCategory;
  card.querySelector(".card__features").textContent = data.features.join(", ");
  card.querySelector(".card__diseases").textContent = data.diseases.join(", ");
  card.querySelector(".card__iq").textContent = data.iq;
  card.querySelector(".card__price").textContent = data.price;
  const onButtonBasketClick = (evt) => {
    evt.preventDefault();
    evt.target.textContent = "В корзине";
    onCardBasketClick(data);
  };
  card.querySelector(".card__button-basket").addEventListener("click", onButtonBasketClick);
};
const renderBreadCrumbs = (name) => {
  const breadCrumbs = document.querySelector(".breadcrumbs");
  breadCrumbs.querySelector(".breadcrumbs__item--current").querySelector("a").textContent = name;
};

const onCardBasketClick = (item) => {
  basket.addItem(item);
};

const onLoadCards = (data) => {
  renderCard(data, onCardBasketClick);
  renderBreadCrumbs(data.name);

  basketSmall.init();
  basketDetail.init();
  const handler = () => {
    debugger;
  };
  // window.addEventListener("storage", handler, false);
  // StorageEvent = {
  //   key: "keyName",
  //   newValue: "key value",
  //   oldValue: null,
  //   url: "http://example.com"
  // };
};
const onErrorCards = (error) => {
  console.log(error);
};

api
  .getCardById(id)
  .then((data) => onLoadCards(data))
  .catch((err) => onErrorCards(err));
