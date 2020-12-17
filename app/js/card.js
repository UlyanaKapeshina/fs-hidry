import { mocks } from "./mocks.js";
import * as api from "./api.js";

const id = Number(location.search.replace("?id=", ""));

const renderCard = ({
  name,
  type,
  weight,
  features,
  diseases,
  iq,
  price,
  image,
}) => {
  const card = document.querySelector(".card");
  card.querySelector("h2").textContent = name;
  card.querySelector("img").src = image.src;
  card.querySelector("img").alt = image.alt;
  card.querySelector(".card__type").textContent = type;
  card.querySelector(".card__weight").textContent = weight;
  card.querySelector(".card__features").textContent = features;
  card.querySelector(".card__diseases").textContent = diseases;
  card.querySelector(".card__iq").textContent = iq;
  card.querySelector(".card__price").textContent = price;
};
const renderBreadCrumbs = (name) => {
  const breadCrumbs = document.querySelector(".breadcrumbs");
  breadCrumbs
    .querySelector(".breadcrumbs__item--current")
    .querySelector("a").textContent = name;
};

const onLoadCards = (data) => {
  const cardData = data.find((it) => it.id === id);
  renderCard(cardData);
  renderBreadCrumbs(cardData.name);
};
const onErrorCards = (error) => {
  console.log(error);
};

api.loadCardsData(onLoadCards, onErrorCards);
