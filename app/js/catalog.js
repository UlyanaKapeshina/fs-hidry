import * as api from "./api.js";
import * as cardList from "./cardList.js";
import * as error from "./error.js";

import * as filterForm from "./filterForm.js";
import { randomSortCards } from "./util.js";

let cardsData = [];
const form = document.querySelector(".filter");

const onLoadCards = (data) => {
  cardsData = randomSortCards(data);
  cardList.renderCards(cardsData);
  filterForm.activateInputs();
  filterForm.init(data);
};

const onErrorCards = (err) => {
  error.createErrorMessage(err, document.querySelector(".catalog__list"));
  filterForm.disableInputs();
};

api
  .getCards()
  .then((data) => onLoadCards(data))
  .catch((err) => onErrorCards(err));
