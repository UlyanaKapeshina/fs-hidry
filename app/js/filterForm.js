import { Filter } from "./filter.js";

export class FilterForm {
  constructor(onSubmit) {
    this.onSubmitHandler = onSubmit;
    this.form = document.querySelector(".filter");
    this.resultMessage = this.form.querySelector(".filter__result-message");
    this.filter = new Filter();
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.filterSubmitHandler = this.filterSubmitHandler.bind(this);
    this.cardsData = [];
  }
  init(data) {
    this.cardsData = data;
    this.form.addEventListener("input", this.filterChangeHandler);
    this.form.addEventListener("submit", this.filterSubmitHandler);
  }

  getFilters() {
    const typeFilters = this.form.querySelectorAll("input[name=type]:checked");
    const typeValues = Array.from(typeFilters).map((it) => it.value);
    const featuresFilters = this.form.querySelectorAll("input[name=features]:checked");
    const featuresValues = Array.from(featuresFilters).map((it) => it.value);
    const weightFromFilterValue = this.form.querySelector("input[name=weightFrom]").value;
    const weightToFilterValue = this.form.querySelector("input[name=weightTo]").value;
    return [typeValues, featuresValues, weightFromFilterValue, weightToFilterValue];
  }
  showResultMessage(dataLength, top) {
    this.resultMessage.style.display = "flex";
    this.resultMessage.style.top = `${top}px`;
    this.resultMessage.querySelector(".filter__result-count").textContent = dataLength;
  }
  hideResultMessage() {
    this.resultMessage.style.display = "none";
  }

  filterChangeHandler(evt) {
    // const filters = this.getFilters();
    this.filter.setFiltersType(this.getFilters());
    const dataCount = this.filter.getCount(this.cardsData);
    this.showResultMessage(dataCount, evt.target.offsetTop);
  }
  filterSubmitHandler(evt) {
    evt.preventDefault();
    const filteredData = this.filter.getData(this.cardsData);
    this.onSubmitHandler(filteredData);
    this.hideResultMessage();
  }
}

// export const getFilters = () => {};

// export const showResultMessage = (dataLength, top) => {};

// export const hideResultMessage = (evt) => {};
// let isActive = true;
// export const disableInputs = () => {
//   form.querySelectorAll("input").forEach((it) => {
//     it.disabled = true;
//     isActive = false;
//   });
// };
// export const activateInputs = () => {
//   if (isActive) {
//     return;
//   }
//   filterForm.querySelectorAll("input").forEach((it) => {
//     it.disabled = false;
//   });
// };

// const filterChangeHandler = (evt) => {
//   const filters = getFilters();
//   filter.setFiltersType(filters);
//   const dataCount = filter.getCount(cardsData);
//   showResultMessage(dataCount, evt.target.offsetTop);
// };
// const filterSubmitHandler = (evt) => {
//   evt.preventDefault();
//   const filteredData = filter.getData(cardsData);
//   onSubmitHandler(filteredData);
//   hideResultMessage();
// };

// export const init = (data, onSubmit) => {
//   c
// };
