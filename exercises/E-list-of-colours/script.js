function listOfColours(colours) {
  let content = document.querySelector("#content");

  let selectEl = document.createElement("select");
  content.appendChild(selectEl);
  
  
  
  colours.forEach(color => {
    let optionEl = document.createElement("option");
    selectEl.appendChild(optionEl);
    let paragraphEl = document.createElement("p");
    optionEl.appendChild(paragraphEl);
    console.log("This is a color",color);
    paragraphEl.innerText = color;
    optionEl.addEventListener("click", changeColour)
    function changeColour(){
      paragraphEl.style.color = color;
    }
  })
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
