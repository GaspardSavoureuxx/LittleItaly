import para from "../../sources/js/paragraphe.js";
import liste from "../../sources/js/liste.js";
const Landing = document.getElementById("container");

Landing.innerHTML = para("Bienvenue") + para("dans la petite Italie");
Landing.innerHTML = liste("légumes");
