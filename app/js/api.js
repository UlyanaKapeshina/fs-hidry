import { adaptDataToClient } from "./adapter.js";

const URL = "http://localhost:3000/api/cards.json";

var SUCCESS_CODE = 200;
function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {};
    xhr.onprogress = function () {};
    xhr.onload = function () {
      if (xhr.status === SUCCESS_CODE) {
        const data = JSON.parse(xhr.response);
        resolve(data);
      } else {
        reject("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    };
    xhr.onerror = function () {
      reject("Произошла ошибка соединения");
    };
    xhr.open(method, url, true);
    xhr.send();
  });
}

export const getCards = () => {
  return makeRequest("GET", URL).then((data) =>
    data.map((it) => adaptDataToClient(it))
  );
};
export const getCardById = (id) => {
  return makeRequest("GET", URL)
    .then((data) => data.find((it) => it.id === id))
    .then((data) => adaptDataToClient(data));
};
