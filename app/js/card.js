import * as api from "./api.js";

const id = Number(location.search.replace("?id=", ""));

const renderCard = ({
  name,
  types,
  weightCategory,
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
  card.querySelector(".card__type").textContent = types.join(", ");
  card.querySelector(".card__weight").textContent = weightCategory;
  card.querySelector(".card__features").textContent = features.join(", ");
  card.querySelector(".card__diseases").textContent = diseases.join(", ");
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
  renderCard(data);
  renderBreadCrumbs(data.name);
};
const onErrorCards = (error) => {
  console.log(error);
};

api
  .getCardById(id)
  .then((data) => onLoadCards(data))
  .catch((err) => onErrorCards(err));
