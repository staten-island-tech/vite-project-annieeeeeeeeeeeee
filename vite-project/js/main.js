import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  display: document.getElementById("display"),
  teaFilter: document.getElementById("tea"),
<<<<<<< HEAD
  edibles: document.getElementById("edibles"),
  sidesFilter: document.getElementById("sides"),
  all: document.getElementById("default"),
=======
  foodFilter: document.getElementById("edibles"),
  default: document.getElementById("default"),
  theme: document.querySelector(".theme"),
>>>>>>> bc264cc3fb3e871e74fc8c0eee64233309f34e89
};

function everything() {
  DOMSelectors.display.innerHTML = " ";
  menu.forEach((e) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <div class="container">
        <div class="card-front">
          <h2 class="name">${e.name}</h2>
          <div class="img-container"><img src="${e.img}" class="img" /></div>
        </div>
        <div class="card-back">
          <h2 class="name-back">${e.name}</h2>
          <p class="description">${e.description}</p>
          <p class="price">$${e.price}.00</p>
  
        </div>
      </div>
      </div>
        `
    );
  });
}

everything();

<<<<<<< HEAD
DOMSelectors.all.addEventListener("click", function () {
  everything();
});

=======
>>>>>>> bc264cc3fb3e871e74fc8c0eee64233309f34e89
function teaOnly() {
  DOMSelectors.display.innerHTML = "";
  menu
    .filter((e) => e.category === "tea")
    .forEach((e) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <div class="container">
          <div class="card-front">
            <h2 class="name">${e.name}</h2>
            <div class="img-container"><img src="${e.img}" class="img" /></div>
          </div>
          <div class="card-back">
            <h2 class="name-back">${e.name}</h2>
            <p class="description">${e.description}</p>
            <p class="price">$${e.price}.00</p>
    
          </div>
        </div>
        </div>
          `
      );
    });
}

DOMSelectors.teaFilter.addEventListener("click", function () {
  teaOnly();
});

function foodOnly() {
  DOMSelectors.display.innerHTML = "";
  menu
    .filter((e) => e.category === "edibles")
    .forEach((e) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <div class="container">
        <div class="card-front">
          <h2 class="name">${e.name}</h2>
          <div class="img-container"><img src="${e.img}" class="img" /></div>
        </div>
        <div class="card-back">
          <h2 class="name-back">${e.name}</h2>
          <p class="description">${e.description}</p>
          <p class="price">$${e.price}.00</p>
  
        </div>
      </div>
      </div>
        `
      );
    });
}

<<<<<<< HEAD
DOMSelectors.edibles.addEventListener("click", function () {
  foodOnly();
});

function sideOnly() {
  DOMSelectors.display.innerHTML = "";
  menu
    .filter((e) => e.category === "side")
    .forEach((e) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
    <div class="container">
      <div class="card-front">
        <h2 class="name">${e.name}</h2>
        <div class="img-container"><img src="${e.img}" class="img" /></div>
      </div>
      <div class="card-back">
        <h2 class="name-back">${e.name}</h2>
        <p class="description">${e.description}</p>
        <p class="price">$${e.price}.00</p>

      </div>
    </div>
    </div>
      `
      );
    });
}

DOMSelectors.sidesFilter.addEventListener("click", function () {
  sideOnly();
=======
DOMSelectors.foodFilter.addEventListener("click", function () {
  foodOnly();
});

function reset() {
  DOMSelectors.display.innerHTML = "";
  everything();
}

DOMSelectors.default.addEventListener("click", function () {
  reset();
});

DOMSelectors.theme.addEventListener("click", function () {
  console.log("yes");
  document.body.classList.add("pinkTheme");
>>>>>>> bc264cc3fb3e871e74fc8c0eee64233309f34e89
});
