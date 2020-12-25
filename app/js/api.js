import { adaptDataToClient } from "./adapter.js";

export class Api {
  constructor(url) {
    this.cardsUrl = url;
  }
  makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {};
      xhr.onprogress = function () {};
      xhr.onload = function () {
        if (xhr.status === 200) {
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

  getCards() {
    return this.makeRequest("GET", this.cardsUrl).then((data) => data.map((it) => adaptDataToClient(it)));
  }
  getCardById(id) {
    return this.makeRequest("GET", this.cardsUrl)
      .then((data) => data.find((it) => it.id === id))
      .then((data) => adaptDataToClient(data));
  }
}
