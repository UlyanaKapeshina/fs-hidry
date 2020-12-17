const URL = "http://localhost:3000/api/cards.json";
var SUCCESS_CODE = 200;

export const loadCardsData = (onLoad, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {};
  xhr.onprogress = function () {};
  xhr.onload = function () {
    if (xhr.status === SUCCESS_CODE) {
      const data = JSON.parse(xhr.response);
      onLoad(data);
    } else {
      onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
    }
  };
  xhr.onerror = function () {
    onError("Произошла ошибка соединения");
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
