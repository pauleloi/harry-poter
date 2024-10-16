


    let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    let container = document.querySelector(".houses")
    for (const house of houses) {
      let div = document.createElement("div")
  
      div.addEventListener("click", () => {
        console.log("test")
        loadData(house)
      })
  
      div.innerHTML = `
      <img src="./images/logo/${house}.png" alt="" srcset="" />`
  
      container.appendChild(div)
    }
    