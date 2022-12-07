import "../styles/style.css";
import { menu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

menu.forEach((e) => {
  console.log(e.name);
});

DOMSelectors = {
  display: document.getElementbyId("display"),
};
DOMSelectors.display.insertAdjacentHtml(
  "beforeend",
  `<div class="card">
    <h2>Hello</h2>
</div>);`
);

/*console.log(menu); */
