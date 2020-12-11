const INTERVAL = 2000;
const COLOR_RANGE_MAX = 255;
const elements = document.body.querySelectorAll("*");

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomElement = (elementsList) => {
  return elementsList[getRandomInt(elementsList.length - 1)];
};

const generateColor = () => {
  const red = getRandomInt(COLOR_RANGE_MAX);
  const green = getRandomInt(COLOR_RANGE_MAX);
  const blue = getRandomInt(COLOR_RANGE_MAX);
  return `rgb(${red}, ${blue}, ${green})`;
};

const addBackgroundColor = (element) => {
  const bgNew = generateColor();
  const bgCurrent = element.style.backgroundColor;
  if (bgCurrent) {
    element.dataset.bgPrev = bgCurrent;
  }
  element.dataset.bgNew = bgNew;
  element.style.backgroundColor = bgNew;
};

const removeBackgroundColor = (element) => {
  const bgNew = element.dataset.bgNew;
  if (!bgNew) {
    return;
  }
  const bgPrev = element.dataset.bgPrev;
  const bgCurrent = element.style.backgroundColor;
  element.removeAttribute("data-bg-new");
  element.removeAttribute("data-bg-prev");
  if (bgNew !== bgCurrent) {
    return;
  }
  if (bgPrev) {
    element.style.backgroundColor = bgPrev;
    return;
  }
  element.style.backgroundColor = "";
};

setInterval(() => {
  addBackgroundColor(getRandomElement(elements));
}, INTERVAL);

setInterval(() => {
  removeBackgroundColor(getRandomElement(elements));
}, INTERVAL);
