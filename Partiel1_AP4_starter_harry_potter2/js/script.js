

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




    let Characters = ["cho"]
    let container2 = document.querySelector(".Characters")
    for (const Character of Characters) {
      let div = document.createElement("div")
  
      div.addEventListener("click", () => {
        console.log("test")
        loadData(Character)
      })
  
      div.innerHTML = `
      <img src="./images/logo/${Character}.png" alt="" srcset="" />`
  
      container.appendChild(div)
    }
  