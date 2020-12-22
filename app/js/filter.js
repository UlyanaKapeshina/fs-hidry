const filter = (dataToFilter, types, features, weightFrom, weightTo) => {
  const filterTypes = function (item) {
    return types.length === 0 || types.every((it) => item.types.includes(it));
  };
  const filterFeatures = function (item) {
    return (
      features.length === 0 ||
      features.every((it) => item.features.includes(it))
    );
  };
  const filterWeightFrom = (item) => {
    return !weightFrom || item.weight > weightFrom;
  };
  const filterWeightTo = (item) => {
    return !weightTo || item.weight < weightTo;
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
