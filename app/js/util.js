export const removeElements = (elements) => {
  Array.from(elements).forEach((it) => it.remove());
};
export const randomSortCards = (data) => {
  return data.slice().sort(function () {
    return Math.random() - 0.5;
  });
};
