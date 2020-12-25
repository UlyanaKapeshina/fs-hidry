const INTERVAL = 2000;
const COLOR_RANGE_MAX = 255;
const elements = document.body.querySelectorAll("*");
const logo = document.querySelector(".header__logo");
let logoClicks = 0;
let isPaintStart = false;
let addBackgroundClassInterval;
let removeBackgroundClassInterval;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomElement = (elementsList) => elementsList[getRandomInt(elementsList.length - 1)];

const createStyleTag = () => {
  const styleTag = document.createElement("style");
  document.head.appendChild(styleTag);
  return document.querySelector("style");
};

let style = document.querySelector("style") || createStyleTag();

const generateColorRanges = () => {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  return [red, green, blue];
};

const createCssBgStyle = (className, red, green, blue) => {
  return `
  .${className} {
    background-color: rgb(${red}, ${green}, ${blue});
  }`;
};

const addBackgroundClass = (element, [red, green, blue]) => {
  const bgClassName = `bgcolor-${red}${green}${blue}`;
  const bgCssStyle = createCssBgStyle(bgClassName, red, green, blue);
  style.textContent = style.textContent + bgCssStyle;
  element.classList.add(bgClassName);
};
const removeBackgroundClass = (element) => {
  Array.from(element.classList)
    .filter((it) => it.includes("bgcolor"))
    .forEach((it) => {
      element.classList.remove(it);
      const findStyleRegexp = new RegExp(`\n\\.${it} \\{[^\\{\\}]*\\}`);
      style.textContent = style.textContent.replace(findStyleRegexp, "");
    });
};

const logoHandler = (evt) => {
  evt.preventDefault();
  logoClicks++;

  if (logoClicks > 5 && !isPaintStart) {
    logoClicks = 0;
    isPaintStart = true;
    addBackgroundClassInterval = setInterval(() => {
      addBackgroundClass(getRandomElement(elements), generateColorRanges());
    }, INTERVAL);

    removeBackgroundClassInterval = setInterval(() => {
      removeBackgroundClass(getRandomElement(elements));
    }, INTERVAL);
  }
  if (logoClicks > 5 && isPaintStart) {
    isPaintStart = false;
    clearInterval(addBackgroundClassInterval);
    clearInterval(removeBackgroundClassInterval);
    elements.forEach(removeBackgroundClass);
  }
};

logo.addEventListener("click", logoHandler);
