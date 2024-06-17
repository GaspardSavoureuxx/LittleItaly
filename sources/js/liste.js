const liste = function (data) {
    const Menu = ["pizza", "pates", "lasagnes", "viandes"];
    Menu.push(data);
    console.log(Menu);
    const AjPlat = `<li>${(data)}</li>`
  return `
        <ul>
        ${AjPlat}
        <li>${Menu[0]}</li>
        <li>${Menu[1]}</li>
        <li>${Menu[2]}</li>
        <li>${Menu[3]}</li>
        <div class = "nvPlat"> </div>
        </ul>
        
    `
    ; 
};

export default liste;
