// // if (resultMessage) {
// //   resultMessage.querySelector(".number").textContent = dataLength;
// //   resultMessage.style.top = `${top}px`;
// // } else {
// //   const messageTemplate = filterForm
// //     .querySelector("#filter-result")
// //     .content.cloneNode(true);

// //   messageTemplate.querySelector(".number").textContent = dataLength;
// //   messageTemplate.querySelector("div").style.top = `${top}px`;

// //   filterForm.appendChild(messageTemplate);
// // }

// const filterForm = document.querySelector(".filter");
// const resultMessage = filterForm.querySelector(".filter__result-message");
// const resultMessageButton = resultMessage.querySelector("button");

// // const filter = (evt) => {
// //   const typeFilters = filterForm.querySelectorAll("input[name=type]:checked");
// //   const typeValues = Array.from(typeFilters).map((it) => it.value);
// //   const featuresFilters = filterForm.querySelectorAll(
// //     "input[name=features]:checked"
// //   );
// //   const featuresValues = Array.from(featuresFilters).map((it) => it.value);

// //   const filterTypes = function (item) {
// //     return (
// //       typeValues.length === 0 ||
// //       typeValues.every((it) => item.type.includes(it))
// //     );
// //   };
// //   const filterFeatures = function (item) {
// //     return (
// //       featuresValues.length === 0 ||
// //       featuresValues.every((it) => item.features.includes(it))
// //     );
// //   };
// //   const filteredData = randomSortData.filter((it) => {
// //     return filterTypes(it) && filterFeatures(it);
// //   });

// //   const showFilterResult = () => {
// //     evt.preventDefault();
// //     document.querySelector(".catalog__list").innerHTML = "";
// //     renderCards(filteredData);
// //   };

// //   const resultMessage = filterForm.querySelector(".filter__result-message");
// //   if (resultMessage) {
// //     resultMessage.querySelector(".number").textContent = filteredData.length;
// //     resultMessage.style.top = `${evt.target.offsetTop}px`;
// //   } else {
// //     const messageTemplate = filterForm
// //       .querySelector("#filter-result")
// //       .content.cloneNode(true);
// //     messageTemplate.querySelector(".number").textContent = filteredData.length;
// //     messageTemplate
// //       .querySelector("button")
// //       .addEventListener("submit", showFilterResult);
// //     messageTemplate.querySelector(
// //       "div"
// //     ).style.top = `${evt.target.offsetTop}px`;
// //     filterForm.appendChild(messageTemplate);
// //   }
// // };
// // filterForm.addEventListener("change", filter);

// // const resultMessage = filterForm.querySelector(".filter__result-message");

// const showResultMessage = (dataLength, top) => {
//   resultMessage.style.display = "flex";
//   resultMessage.style.top = `${top}px`;
//   resultMessage.querySelector(".filter__result-count").textContent = dataLength;
// };

// const hideResultMessage = () => {
//   resultMessage.style.display = "none";
// };

// ////////////////////

// ///////////////

// const cardClickHandler = (evt) => {
//   // evt.preventDefault();
//   // const card = document.querySelector(".card");
//   // card.querySelector(".card__title").textContent =
// };

// for (item of items) {
//   item.addEventListener("click", cardClickHandler);
// }

// const card = data[0];
