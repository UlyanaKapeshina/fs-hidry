export const removeElements = (elements) => {
  elements.forEach(function (element) {
    element.remove();
  });
};
export const randomSortCards = (data) => {
  return data.slice().sort(function () {
    return Math.random() - 0.5;
  });
};
