import { ErrorMessage } from "./error.js";
import Basket from "./basket.js";
import BasketDetail from "./basketDetail.js";
import BasketSmall from "./basketSmall.js";
import { CatalogPage } from "./catalogPage.js";
import { CardPage } from "./cardPage.js";
import { Api } from "./api.js";
const cardsUrl = "http://localhost:3000/api/cards.json";

const basket = new Basket();
const basketSmall = new BasketSmall(basket);
const basketDetail = new BasketDetail(basket);
const errorMessage = new ErrorMessage();
const api = new Api(cardsUrl);
basketSmall.init();
basketDetail.init();

const pageName = location.pathname;

if (pageName === "/catalog.html" || "app/catalog.html") {
  const catalog = new CatalogPage(errorMessage, basket.addItem, api);
  catalog.init();
} else if (pageName === "/card.html" || "app/card.html") {
  const card = new CardPage(errorMessage, basket.addItem, api);
  card.init();
}
