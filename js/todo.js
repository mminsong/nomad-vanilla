const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newLi = document.createElement("li");
  newLi.innerText = newToDo;
  toDoList.appendChild(newLi);
}
toDoForm.addEventListener("submit", handleSubmit);
