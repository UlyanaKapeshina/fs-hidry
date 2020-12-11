const INTERVAL = 2000;
const COLOR_RANGE_MAX = 255;
const elements = document.body.querySelectorAll(":not(script)");

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomElement = (elementsList) => {
  const element = elementsList[getRandomInt(elementsList.length - 1)];
  return element;
};
let style = document.querySelector("style");

if (!style) {
  const newStyle = document.createElement("style");
  document.querySelector("head").appendChild(newStyle);
  style = document.querySelector("style");
}

const generateColorRanges = () => {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  return [red, green, blue];
};

const addBackgroundClass = (element) => {
  const [red, green, blue] = generateColorRanges();
  const bgClassName = `bgcolor-${red}${green}${blue}`;
  style.textContent = `${style.textContent}\n.${bgClassName} {\nbackground-color: rgb(${red}, ${green}, ${blue});\n}`;
  element.classList.add(bgClassName);
};
const removeBackgroundClass = (element) => {
  Array.from(element.classList)
    .filter((it) => it.includes("bgcolor"))
    .forEach((it) => {
      element.classList.remove(it);
      const regexp = new RegExp(`\n\\.${it} \\{[^\\{\\}]*\\}`);
      style.textContent = style.textContent.replace(regexp, "");
    });
};

setInterval(() => {
  addBackgroundClass(getRandomElement(elements));
}, INTERVAL);

setInterval(() => {
  removeBackgroundClass(getRandomElement(elements));
}, INTERVAL);
