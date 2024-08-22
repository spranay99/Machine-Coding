const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {
  const todo = todoInput.value.trim();

  if (todo !== "") {
    const listItem = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    document.getElementById("todo-list").appendChild(listItem);

    todoInput.value = "";
  }
});
