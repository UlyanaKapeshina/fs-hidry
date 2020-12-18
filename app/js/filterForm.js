import * as filter from "./filter.js";
import * as cardList from "./cardList.js";

const form = document.querySelector(".filter");
const resultMessage = form.querySelector(".filter__result-message");

let cardsData = [];

export const getFilters = () => {
  const typeFilters = form.querySelectorAll("input[name=type]:checked");
  const typeValues = Array.from(typeFilters).map((it) => it.value);
  const featuresFilters = form.querySelectorAll("input[name=features]:checked");
  const featuresValues = Array.from(featuresFilters).map((it) => it.value);
  const weightFromFilterValue = form.querySelector("input[name=weightFrom]")
    .value;
  const weightToFilterValue = form.querySelector("input[name=weightTo]").value;
  return [
    typeValues,
    featuresValues,
    weightFromFilterValue,
    weightToFilterValue,
  ];
};

export const showResultMessage = (dataLength, top) => {
  resultMessage.style.display = "flex";
  resultMessage.style.top = `${top}px`;
  resultMessage.querySelector(".filter__result-count").textContent = dataLength;
};

export const hideResultMessage = (evt) => {
  resultMessage.style.display = "none";
};
let isActive = true;
export const disableInputs = () => {
  filterForm.querySelectorAll("input").forEach((it) => {
    it.disabled = true;
    isActive = false;
  });
};
export const activateInputs = () => {
  if (isActive) {
    return;
  }
  filterForm.querySelectorAll("input").forEach((it) => {
    it.disabled = false;
  });
};
const moreClickHandler = () => {};
const moreButton = form.querySelector(".filter__button-more");
moreButton.addEventListener("click", moreClickHandler);

const filterChangeHandler = (evt) => {
  const filters = getFilters();
  filter.setFiltersType(filters);
  const dataCount = filter.getCount(cardsData);
  showResultMessage(dataCount, evt.target.offsetTop);
};
const filterSubmitHandler = (evt) => {
  evt.preventDefault();
  const filteredData = filter.getData(cardsData);
  cardList.updateCards(filteredData);
  hideResultMessage();
};

export const init = (data) => {
  cardsData = data;
  form.addEventListener("input", filterChangeHandler);
  form.addEventListener("submit", filterSubmitHandler);
};

// const legends = form.querySelectorAll("legend");
// legends.forEach((it) => {
//   it.addEventListener("click", function () {
//     it.classList.toggle("active");
//     const panel = it.nextElementSibling;
//     const maxHeight = Number(panel.style.maxHeight.replace("px", ""));
//     if (!panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// });
