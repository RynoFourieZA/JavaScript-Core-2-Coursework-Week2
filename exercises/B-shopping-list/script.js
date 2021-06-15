function shoppingList(arrayOfPeople) {
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  arrayOfPeople.forEach(item => {
       let listItem = document.createElement("li");
       listItem.innerText = item;
       unorderedList.appendChild(listItem);
  })

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);