import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./dom";
/* import AOS from "aos";
import "aos/dist/aos.css"; */

AOS.init();

function HTML(menu) {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <div class="container">
      <div class="card-front">
        <div class="img-container"><img src="${menu.img}" class="img" /></div>
        <h2 class="name">${menu.name}</h2>
        <p class="price">$${menu.price}.00</p>
      </div>
      <div class="card-back">
        <h2 class="name-back">${menu.name}</h2>
        <p class="description">${menu.description}</p>
      </div>
    </div>
    </div>
      `
  );
}

function everything() {
  menu.forEach((e) => {
    HTML(e);
  });
}

everything();

function teaOnly() {
  DOMSelectors.display.innerHTML = " ";
  menu
    .filter((e) => e.category === "tea")
    .forEach((e) => {
      HTML(e);
    });
}

DOMSelectors.teaFilter.addEventListener("click", function () {
  teaOnly();
});

function ediblesOnly() {
  DOMSelectors.display.innerHTML = " ";
  menu
    .filter((e) => e.category === "edibles")
    .forEach((e) => {
      HTML(e);
    });
}

DOMSelectors.foodFilter.addEventListener("click", function () {
  ediblesOnly();
});

function sidesOnly() {
  DOMSelectors.display.innerHTML = " ";
  menu
    .filter((e) => e.category === "side")
    .forEach((e) => {
      HTML(e);
    });
}

DOMSelectors.sideFilter.addEventListener("click", function () {
  sidesOnly();
});

function reset() {
  DOMSelectors.display.innerHTML = " ";
  everything();
}

DOMSelectors.default.addEventListener("click", function () {
  reset();
});

DOMSelectors.theme.addEventListener("click", function () {
  console.log("yes");
  document.body.classList.add("pink");
  DOMSelectors.theme.innerHTML = "red";
});

DOMSelectors.theme.addEventListener("click", function () {
  if (document.body.classList.contains("red")) {
    document.body.classList.add("pink");
    document.body.classList.remove("red");
    DOMSelectors.theme.innerHTML = "Red!";
  } else {
    document.body.classList.add("red");
    document.body.classList.remove("pink");
    DOMSelectors.theme.innerHTML = "Pink!";
  }
});
