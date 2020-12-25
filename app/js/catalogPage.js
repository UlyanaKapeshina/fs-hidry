import { CatalogList } from "./catalogList.js";
import { FilterForm } from "./filterForm.js";
import { randomSortCards } from "./util.js";
// import * as api from "./api.js";

export class CatalogPage {
  constructor(errorMessage, cardButtonClickHandler, api) {
    this.errorMessage = errorMessage;
    this.cardButtonClickHandler = cardButtonClickHandler;
    this.api = api;
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.catalogList = new CatalogList(this.cardButtonClickHandler);
    this.filterForm = new FilterForm(this.filterChangeHandler);
  }
  init() {
    this.api
      .getCards()
      .then((data) => this.onLoadCards(data))
      .catch((err) => this.onErrorCards(err));
  }
  onLoadCards(data) {
    const cardsData = randomSortCards(data);
    this.catalogList.renderCards(cardsData);

    this.filterForm.init(data);
  }
  onErrorCards(err) {
    this.errorMessage.create(err, document.querySelector(".catalog__list"));
  }
  filterChangeHandler(newData) {
    this.catalogList.updateCards(newData);
  }
}
