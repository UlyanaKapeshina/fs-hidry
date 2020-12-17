import * as api from "./api.js";
import * as cardList from "./cardList.js";
// import * as filterForm from "./filterForm.js";
import * as filter from "./filter.js";

let cardsData = [];
const filterForm = document.querySelector(".filter");

const filterChangeHandler = (evt) => {
  const filters = filter.getFilters();
  filter.setFiltersType(filters);
  const dataCount = filter.getCount(cardsData);
  filter.showResultMessage(dataCount, evt.target.offsetTop);
};
const filterSubmitHandler = (evt) => {
  evt.preventDefault();

  const filteredData = filter.getData(cardsData);
  cardList.updateCards(filteredData);
  filter.hideResultMessage();
};

const onLoadCards = (data) => {
  const randomSortData = data.slice().sort(function () {
    return Math.random() - 0.5;
  });
  cardsData = randomSortData;
  cardList.renderCards(cardsData);
  filterForm.addEventListener("input", filterChangeHandler);
  filterForm.addEventListener("submit", filterSubmitHandler);
};
const onErrorCards = (error) => {
  console.log(error);
};

api.loadCardsData(onLoadCards, onErrorCards);
