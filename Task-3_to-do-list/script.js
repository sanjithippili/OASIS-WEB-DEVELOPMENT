let tasks = [];
function add() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    updateTaskList();
    taskInput.value = "";
  }
}
function Delete(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
function edit(index) {
  const newTask = prompt("Enter new name for task:");
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    updateTaskList();
  }
}
function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${task}</span>
      <button class="edit" onclick="edit(${index})">Edit</button>
      <button onclick="Delete(${index})">Delete</button>
    `;

    taskList.appendChild(listItem);
  });
}
document.getElementById("addButton").addEventListener("click", add);
