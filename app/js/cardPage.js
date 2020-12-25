import { BreadCrumbs } from "./breadCrumbs.js";
import { Card } from "./card.js";
import * as api from "./api.js";

export class CardPage {
  constructor(errorMessage, cardButtonClickHandler, api) {
    this.errorMessage = errorMessage;
    this.cardButtonClickHandler = cardButtonClickHandler;
    this.api = api;
    this.breadCrumbs = new BreadCrumbs();
    this.card = new Card(cardButtonClickHandler);
    this.id = Number(location.search.replace("?id=", ""));
  }
  init() {
    api
      .getCardById(this.id)
      .then((data) => this.onLoadCards(data))
      .catch((err) => this.onErrorCards(err));
  }
  onLoadCards(data) {
    this.card.render(data, this.cardButtonClickHandler);
    this.breadCrumbs.render(data.name);
  }
  onErrorCards(err) {
    this.errorMessage.create(err, document.querySelector(".card"));
  }
}
