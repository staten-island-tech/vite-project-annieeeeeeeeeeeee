import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

document.getElementbyId("menu").insertAdjacentHtml(
  "beforeend",
  `<div class="card">
    <h2>${menu.name}</h2>
</div>);`
);

/*console.log(menu); */
