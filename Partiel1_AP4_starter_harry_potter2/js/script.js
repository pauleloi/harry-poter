
const wikiharry = await fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
      .catch((error) => alert("Erreur : " + error));
    console.log(wikiharry);

let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
let container = document.querySelector(".houses");

for (const house of houses) {
  let div = document.createElement("div");
  div.classList.add("house-item"); 

  div.addEventListener("click", () => {
    console.log("test maison");
    loadData(house);
  });

  div.innerHTML = `
    <img src="./images/logo/${house}.png" alt="${house} logo" />
  `;
  container.appendChild(div);
}



let container2 = document.querySelector(".characters");

for (const character of wikiharry) {
  let div = document.createElement("div");
  div.classList.add("character-item"); 

  div.addEventListener("click", () => {
    console.log("test perso");
    loadData(character);
  });

  div.innerHTML = `
    <img src="./images/characters/${character}.webp" alt="${character} logo" />
    <p>${character}</p>
  `;

  container2.appendChild(div);
}




  