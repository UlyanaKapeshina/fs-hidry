const data = [
  {
    name: "Айну",
    cost: "12000",
    type: "Компаньоны",
    features: "Отсутствует чувство страха",
    weight: 30,
    image: {
      src: "./assets/img/ainu.jpg",
      alt: "Айну",
    },
  },
  {
    name: "Афганская борзая",
    cost: "15000",
    type: "Охотничьи",
    features: "Мало линяет",
    weight: 40,
    image: {
      src: "./assets/img/afgan.jpg",
      alt: "Афганская борзая",
    },
  },
  {
    name: "Бассет",
    cost: "14000",
    type: "Декоративные",
    features: "Отличное здоровье",
    weight: 20,
    image: {
      src: "./assets/img/basset.jpg",
      alt: "Бассет",
    },
  },
  {
    name: "Барбет",
    cost: "14000",
    type: "Служебные",
    features: "Хорошее послушание",
    weight: 30,
    image: {
      src: "./assets/img/barbet.jpg",
      alt: "Барбет",
    },
  },
  {
    name: "Айну",
    cost: "12000",
    type: "Компаньоны",
    features: "Отсутствует чувство страха",
    weight: 30,
    image: {
      src: "./assets/img/ainu.jpg",
      alt: "Айну",
    },
  },
  {
    name: "Афганская борзая",
    cost: "15000",
    type: "Охотничьи",
    features: "Мало линяет",
    weight: 40,
    image: {
      src: "./assets/img/afgan.jpg",
      alt: "Афганская борзая",
    },
  },
  {
    name: "Бассет",
    cost: "14000",
    type: "Декоративные",
    features: "Отличное здоровье",
    weight: 20,
    image: {
      src: "./assets/img/basset.jpg",
      alt: "Бассет",
    },
  },
  {
    name: "Барбет",
    cost: "14000",
    type: "Служебные",
    features: "Хорошее послушание",
    weight: 30,
    image: {
      src: "./assets/img/barbet.jpg",
      alt: "Барбет",
    },
  },
];
// if (resultMessage) {
//   resultMessage.querySelector(".number").textContent = dataLength;
//   resultMessage.style.top = `${top}px`;
// } else {
//   const messageTemplate = filterForm
//     .querySelector("#filter-result")
//     .content.cloneNode(true);

//   messageTemplate.querySelector(".number").textContent = dataLength;
//   messageTemplate.querySelector("div").style.top = `${top}px`;

//   filterForm.appendChild(messageTemplate);
// }
const randomSortData = data.sort(function () {
  return Math.random() - 0.5;
});
const template = document.querySelector("#catalog__li-template");
const fragment = document.createDocumentFragment();
const renderCards = (cards) => {
  cards.forEach((it) => {
    const item = template.content.cloneNode(true);
    item.querySelector("img").src = it.image.src;
    item.querySelector("img").alt = it.image.alt;
    item.querySelector(".catalog__description").textContent = it.name;
    item.querySelector(".catalog__cost").textContent = it.cost;
    fragment.appendChild(item);
  });
  document.querySelector(".catalog__list").appendChild(fragment);
};

renderCards(randomSortData);

const filterForm = document.querySelector(".filter");
const resultMessage = filterForm.querySelector(".filter__result-message");
const resultMessageButton = resultMessage.querySelector("button");

// const filter = (evt) => {
//   const typeFilters = filterForm.querySelectorAll("input[name=type]:checked");
//   const typeValues = Array.from(typeFilters).map((it) => it.value);
//   const featuresFilters = filterForm.querySelectorAll(
//     "input[name=features]:checked"
//   );
//   const featuresValues = Array.from(featuresFilters).map((it) => it.value);

//   const filterTypes = function (item) {
//     return (
//       typeValues.length === 0 ||
//       typeValues.every((it) => item.type.includes(it))
//     );
//   };
//   const filterFeatures = function (item) {
//     return (
//       featuresValues.length === 0 ||
//       featuresValues.every((it) => item.features.includes(it))
//     );
//   };
//   const filteredData = randomSortData.filter((it) => {
//     return filterTypes(it) && filterFeatures(it);
//   });

//   const showFilterResult = () => {
//     evt.preventDefault();
//     document.querySelector(".catalog__list").innerHTML = "";
//     renderCards(filteredData);
//   };

//   const resultMessage = filterForm.querySelector(".filter__result-message");
//   if (resultMessage) {
//     resultMessage.querySelector(".number").textContent = filteredData.length;
//     resultMessage.style.top = `${evt.target.offsetTop}px`;
//   } else {
//     const messageTemplate = filterForm
//       .querySelector("#filter-result")
//       .content.cloneNode(true);
//     messageTemplate.querySelector(".number").textContent = filteredData.length;
//     messageTemplate
//       .querySelector("button")
//       .addEventListener("submit", showFilterResult);
//     messageTemplate.querySelector(
//       "div"
//     ).style.top = `${evt.target.offsetTop}px`;
//     filterForm.appendChild(messageTemplate);
//   }
// };
// filterForm.addEventListener("change", filter);

// const resultMessage = filterForm.querySelector(".filter__result-message");

const showResultMessage = (dataLength, top) => {
  resultMessage.style.display = "flex";
  resultMessage.style.top = `${top}px`;
  resultMessage.querySelector(".filter__result-count").textContent = dataLength;
};

const hideResultMessage = () => {
  resultMessage.style.display = "none";
};

////////////////////

const filter = (
  dataToFilter,
  typeValues,
  featuresValues,
  weightFromFilterValue,
  weightToFilterValue
) => {
  const filterTypes = function (item) {
    return (
      typeValues.length === 0 ||
      typeValues.every((it) => item.type.includes(it))
    );
  };
  const filterFeatures = function (item) {
    return (
      featuresValues.length === 0 ||
      featuresValues.every((it) => item.features.includes(it))
    );
  };
  const filterWeightFrom = (item) => {
    return !weightFromFilterValue || item.weight > weightFromFilterValue;
  };
  const filterWeightTo = (item) => {
    return !weightToFilterValue || item.weight < weightToFilterValue;
  };
  return dataToFilter.filter((it) => {
    return (
      filterTypes(it) &&
      filterFeatures(it) &&
      filterWeightFrom(it) &&
      filterWeightTo(it)
    );
  });
};

let filtersTypes;
const currentData = data.slice();
let filteredData;
let needUpdate = false;
const setFiltersType = (filters) => {
  if (filtersTypes !== filters) {
    filtersTypes = filters;
    // needUpdate = true;
  }
};

const getFilterData = (filters) => {
  return filter(currentData, ...filters);
};
const getCount = () => {
  filteredData = getFilterData(filters);
  return filteredData.length;
};
const getData = () => {
  filteredData = getFilterData(filters);
  return filteredData;
};

///////////////

const removeElements = (elements) => {
  elements.forEach(function (element) {
    element.remove();
  });
};
const updateCards = (data) => {
  removeElements(document.querySelectorAll(".catalog__item"));
  renderCards(data);
};

const filterChangeHandler = (evt) => {
  const typeFilters = filterForm.querySelectorAll("input[name=type]:checked");
  const typeValues = Array.from(typeFilters).map((it) => it.value);
  const featuresFilters = filterForm.querySelectorAll(
    "input[name=features]:checked"
  );
  const featuresValues = Array.from(featuresFilters).map((it) => it.value);
  const weightFromFilterValue = filterForm.querySelector(
    "input[name=weightFrom]"
  ).value;
  const weightToFilterValue = filterForm.querySelector("input[name=weightTo]")
    .value;
  setFiltersType(
    typeValues,
    featuresValues,
    weightFromFilterValue,
    weightToFilterValue
  );
  const dataCount = getCount();
  showResultMessage(dataCount, evt.target.offsetTop);
};
const filterSubmitHandler = (evt) => {
  evt.preventDefault();
  setFiltersType();
  const filteredData = getData();
  updateCards(filteredData);
  hideResultMessage();
};

filterForm.addEventListener("input", filterChangeHandler);
filterForm.addEventListener("submit", filterSubmitHandler);
