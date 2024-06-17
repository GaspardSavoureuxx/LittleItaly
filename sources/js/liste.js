const liste = function (data) {

console.log(Menu);
const Menu = ["pizza", "pates", "lasagnes", "viandes"];
    Menu.push(data);
    const AjPlat =+ `<li>${data}</li>`
    NvPlat.innerHTML = AjPlat

    console.log(AjPlat);
};

export default liste;
