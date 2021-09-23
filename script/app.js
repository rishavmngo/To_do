const addItem = document.getElementById("add");
const input = document.getElementById("input");
const ItemList = document.getElementById("itemList");

//event listeneer
addItem.addEventListener("click", addTodo);
ItemList.addEventListener("click", deleteItem);

//funcitons

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("item");
  const itemName = document.createElement("p");
  itemName.classList.add("item-value");
  itemName.innerText = input.value;
  const complete = document.createElement("button");
  const trash = document.createElement("button");
  complete.classList.add("item-complete");
  complete.classList.add("action");
  trash.classList.add("item-delete");
  trash.classList.add("action");
  complete.innerHTML = '<i class="fas fa-check-square"></i>';
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  complete.setAttribute("id", "btn-complete");
  trash.setAttribute("id", "btn-delete");
  todoDiv.appendChild(itemName, complete, trash);
  todoDiv.appendChild(complete);
  todoDiv.appendChild(trash);
  ItemList.appendChild(todoDiv);
  input.value = "";
}

function deleteItem(event) {
  const btnAction = event.target;
  if (btnAction.classList[0] === "item-delete") {
    btnAction.parentNode.remove();
  } else if (btnAction.classList[0] == "item-complete") {
    btnAction.parentNode.setAttribute("id", "completed");
  }
}
