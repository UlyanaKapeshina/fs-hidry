import * as api from "./api.js";
import * as cardList from "./cardList.js";
import * as error from "./error.js";
import BasketView from "./basketView.js";

import * as filterForm from "./filterForm.js";
import { randomSortCards } from "./util.js";
import Basket from "./basket.js";

let cardsData = [];

const basket = new Basket();
const basketView = new BasketView(basket);

const cardButtonClickHandler = (item) => {
  basket.addItem(item);
};

const filterChangeHandler = (newData) => {
  cardList.updateCards(newData, cardButtonClickHandler);
};

const onLoadCards = (data) => {
  cardsData = randomSortCards(data);
  cardList.renderCards(cardsData, cardButtonClickHandler);
  filterForm.activateInputs();
  filterForm.init(data, filterChangeHandler);
  basketView.init();
};

const onErrorCards = (err) => {
  error.createErrorMessage(err, document.querySelector(".catalog__list"));
  filterForm.disableInputs();
};

api
  .getCards()
  .then((data) => onLoadCards(data))
  .catch((err) => onErrorCards(err));
