const filterForm = document.querySelector(".filter");
export const getFilters = () => {
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
  return [
    typeValues,
    featuresValues,
    weightFromFilterValue,
    weightToFilterValue,
  ];
};

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

let filtersTypes = [];
let filteredData = [];
let needUpdate = false;
export const setFiltersType = (filters) => {
  if (filtersTypes !== filters) {
    filtersTypes = filters;
    needUpdate = true;
  }
};

export const getCount = (data) => {
  if (needUpdate) {
    filteredData = filter(data, ...filtersTypes);
  }

  return filteredData.length;
};

export const getData = (data) => {
  if (needUpdate) {
    filteredData = filter(data, ...filtersTypes);
  }
  needUpdate = false;
  return filteredData;
};

const resultMessage = filterForm.querySelector(".filter__result-message");

export const showResultMessage = (dataLength, top) => {
  resultMessage.style.display = "flex";
  resultMessage.style.top = `${top}px`;
  resultMessage.querySelector(".filter__result-count").textContent = dataLength;
};

export const hideResultMessage = () => {
  resultMessage.style.display = "none";
};
