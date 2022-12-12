import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  display: document.getElementById("display"),
};

function item() {
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
          <p class="price">$${e.price}.00</p>
          <p class="description">${e.description}</p>
        </div>
      </div>
      </div>
        `
    );
  });
}

item();

//function item(tea) {}

//const getProducts = {};

//create an array of objects (menu)
//creat efunction to inject menu item

//function(item){
//insert html
//}
//iterate(forEach) over array and insert HTMl
// button event listen to filter
//OOP object oreinted programming to encapstulate data/functions
//dom object

/* const getProducts = {
  getjfeiwo: data
    .filter
}

getProducts.getAllProducts
getProducts.get...
*/
