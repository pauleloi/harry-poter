
let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
let container = document.querySelector(".houses");

for (const house of houses) {
  let div = document.createElement("div");
  div.classList.add("house-item"); 

  div.addEventListener("click", () => {
    console.log("test");
    loadData(house);
  });

  div.innerHTML = `
    <img src="./images/logo/${house}.png" alt="${house} logo" />
  `;
  container.appendChild(div);
}


let characters = ["cho", "cedric"];
let container2 = document.querySelector(".characters");

for (const character of characters) {
  let div = document.createElement("div");
  div.classList.add("character-item"); 

  div.addEventListener("click", () => {
    console.log("test perso");
    loadData(character);
  });

  div.innerHTML = `
    <img src="./images/character/${character}.png" alt="${character} logo" />
  `;

  container2.appendChild(div);
}




  