export class BreadCrumbs {
  constructor() {
    this.breadCrumbs = document.querySelector(".breadcrumbs");
  }
  render(name) {
    this.breadCrumbs.querySelector(".breadcrumbs__item--current").querySelector("a").textContent = name;
  }
}
