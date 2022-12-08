import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

menu.forEach((e) => {
  console.log(e.name);
  const display = document.getElementById("display");
  /*  display.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2>${e.name}</h2>
</div>`
  ); */
});

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
