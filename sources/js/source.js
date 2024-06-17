let body = document.querySelector("body");
let header = `<header style="border : solid #000 2px;">
<nav> <i class="fa-solid fa-utensils"></i> <nav/>
 <h1>Connectez-vous</h1> 
 </header> `;
let form = ` <form>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre email">
    </div>
    <div>
        <label for="mdp">Mot de passe</label>
        <input type="password" id="mdp" name="mdp" placeholder="Votre mot de passe" pattern="[a-zA-Z]{5,100}">
        <small id="error-mdp"></small>
    </div>

    <button id="subm">Envoyer</button>
    <button id="reset">Reset</button>
    </form>
`;
body.innerHTML += header;
body.innerHTML += form;

let email = document.getElementById("email");
let mdp = document.getElementById("mdp");

const motsInterdits = [
  // Fichiers de mots interdits à entrer
  "<script>",
  "</script>", // Interdire ces balises pour pas que l'user entre un script pour ajouter une nouvelle source à notre code
  "<html>",
  "</html>",
  "fdp",
  "zgeg",
  "ntm",
];

let form1 = document.querySelector("form");

form1.addEventListener("submit", (event) => {
  event.preventDefault(); // Fonction de rappel qui est l'argument d'une autre fonction = "colback"
  console.log(email.value + " " + mdp.value);
  email.value = " ";
  mdp.value = "";
});

//*  Creer un bouton "Reset"
let btn = document.getElementById("reset");

btn.addEventListener("click", (event) => {
  email.value = " ";
  mdp.value = "";
});

//* Fonctions pour colorer les barres de recherches selon si l'user a entré des données valides
email.addEventListener("input", (event) => {
  const pattern = new RegExp(/[a-zA-Z]{5,100}/); // Fonction de rappel = "collback"
  if (pattern.test(email.value) == true) {
    email.style.outline = "green 5px solid";
  } else {
    email.style.outline = "red 5px solid";
  }
  console.log(event.target.value); //* Code pour voir les données entrées par l'user
});

mdp.addEventListener("input", (event) => {
  const pattern = new RegExp(/[a-zA-Z]{5,100}/); // Fonction de rappel = "collback"
  if (pattern.test(mdp.value) == true) {
    mdp.style.outline = "green 5px solid";
  } else {
    mdp.style.outline = "red 5px solid";
  }
  console.log(event.target.value);
});

// function MotIntMessage(a){
//     for (const word of motsInterdits){
//     if (email.value == word){email.value = " "} //* Reset la valeur du champ si un mot "motsInterdits" est entré par l'user
//     const messageErreur =  `<small id="error-mail">MOT INTERDIT</small>`
//     form1.innerHTML += messageErreur
// }}
// MotIntMessage(email.value)

let input2 = document.getElementById("mdp");
input2.addEventListener("input", (event) => {
  for (const word of motsInterdits) {
    if (mdp.value == word) {
      mdp.value = "";
    } //* Reset la valeur du champ si un mot "motsInterdits" est entré par l'user
  }
  // Fonction de rappel = "collback"
  console.log(event.target.value);
});
