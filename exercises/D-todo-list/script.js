function todoList(todos) {
  let content = document.querySelector("#content");
let unorderedList = document.createElement("ul")
content.appendChild(unorderedList);

todos.forEach(item => {
  console.log(item);
  let todoList = document.createElement("li");
  todoList.innerText = item.todo;
  unorderedList.appendChild(todoList);
//  todoList.addEventListener("click", lineThrough)
    function lineThrough() {
      todoList.style.textDecorationLine = "line-through";
      todoList.removeEventListener("click", lineThrough);
    };

    todoList.addEventListener("click", lineThrough)

})





}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);