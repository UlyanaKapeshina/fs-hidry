// // let filtersTypes = [];
// // let filteredData = [];
// // let needUpdate = false;
// // export const setFiltersType = (filters) => {
// //   if (filtersTypes !== filters) {
// //     filtersTypes = filters;
// //     needUpdate = true;
// //   }
// // };

// export const getCount = (data) => {
//   if (needUpdate) {
//     filteredData = filter(data, ...filtersTypes);
//   }

//   return filteredData.length;
// };

// export const getData = (data) => {
//   if (needUpdate) {
//     filteredData = filter(data, ...filtersTypes);
//   }
//   needUpdate = false;
//   return filteredData;
// };
export class Filter {
  constructor() {
    this.needUpdate = false;
    this.filtersTypes = [];
    this.filteredData = [];
  }
  filter(dataToFilter, types, features, weightFrom, weightTo) {
    const filterTypes = function (item) {
      return types.length === 0 || types.every((it) => item.types.includes(it));
    };
    const filterFeatures = function (item) {
      return features.length === 0 || features.every((it) => item.features.includes(it));
    };
    const filterWeightFrom = (item) => {
      return !weightFrom || item.weight > weightFrom;
    };
    const filterWeightTo = (item) => {
      return !weightTo || item.weight < weightTo;
    };
    return dataToFilter.filter((it) => {
      return filterTypes(it) && filterFeatures(it) && filterWeightFrom(it) && filterWeightTo(it);
    });
  }
  setFiltersType(filters) {
    if (this.filtersTypes !== filters) {
      this.filtersTypes = filters;
      this.needUpdate = true;
    }
  }
  getData(data) {
    if (this.needUpdate) {
      this.filteredData = this.filter(data, ...this.filtersTypes);
    }
    this.needUpdate = false;
    return this.filteredData;
  }
  getCount(data) {
    if (this.needUpdate) {
      this.filteredData = this.filter(data, ...this.filtersTypes);
    }

    return this.filteredData.length;
  }
}
