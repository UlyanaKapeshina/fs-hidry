import * as filter from "./filter.js";
import * as cardList from "./cardList.js";
import { mocks } from "./mocks.js";

let dataToFilter = [];

const filterForm = document.querySelector(".filter");
const resultMessage = filterForm.querySelector(".filter__result-message");

const showResultMessage = (dataLength, top) => {
  resultMessage.style.display = "flex";
  resultMessage.style.top = `${top}px`;
  resultMessage.querySelector(".filter__result-count").textContent = dataLength;
};

const hideResultMessage = () => {
  resultMessage.style.display = "none";
};

const filterChangeHandler = (evt) => {
  const filters = filter.getFilters();
  filter.setFiltersType(filters);
  const dataCount = filter.getCount(dataToFilter);
  showResultMessage(dataCount, evt.target.offsetTop);
};
const filterSubmitHandler = (evt) => {
  evt.preventDefault();
  const filters = filter.getFilters();
  filter.setFiltersType(...filters);
  const filteredData = filter.getData(dataToFilter);
  cardList.updateCards(filteredData);
  hideResultMessage();
};

export const activateFilter = (data) => {
  dataToFilter = data;
  filterForm.addEventListener("input", filterChangeHandler);
  filterForm.addEventListener("submit", filterSubmitHandler);
};
