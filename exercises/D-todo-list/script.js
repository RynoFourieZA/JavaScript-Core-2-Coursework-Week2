function todoList(todos) {
  let content = document.querySelector("#content");
  // Write your code here...
let unorderedList = document.createElement("ul")
content.appendChild(unorderedList);

todos.forEach(item => {
  console.log(item);
  let todoList = document.createElement("li");
  todoList.innerText = item.todo;
  unorderedList.appendChild(todoList);
 if(todoList.addEventListener("click", lineThrough) ===){
    function lineThrough() {
      todoList.style.textDecorationLine = "line-through";
    };
  }

})





}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);