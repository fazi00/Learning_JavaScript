const addTask = document.querySelector(".btn");
const popUp = document.querySelector(".popup");
const taskForm = document.querySelector(".form");
const taskInput = document.querySelector(".input");
const tableTask = document.querySelector(".table").querySelector("tbody");

let serial_no = 1;

// Task is to store the data in local Storage
let data = [];

function loadData() {
  const response = localStorage.getItem("data");
  if (response) {
    data = JSON.parse(response);
    // After refreshing the page the data should be on page if we use loop on our data array
    data.forEach((task) => addNewTask(task));
  }
}

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

loadData();

addTask.addEventListener("click", () => {
  popUp.style.display = "block";
});

function hidePopup() {
  popUp.style.display = "none";
}

function addNewTask(task) {
  // To stop exponentially increase in data
  const existingTask = data.find((item) => item === task);
  if (existingTask) return;
  // Adding the data in an array
  data.push(task);
  saveData();

  const row = tableTask.insertRow();
  const cell_1 = row.insertCell(0);
  const cell_2 = row.insertCell(1);
  const cell_3 = row.insertCell(2);
  const cell_4 = row.insertCell(3);
  const cell_5 = row.insertCell(4);
  const cell_6 = row.insertCell(5);

  cell_1.textContent = serial_no++;
  cell_2.textContent = task;
  cell_3.textContent = "In-progress";

  if (cell_3.textContent == "In-progress") {
    cell_3.style.color = "yellow";
  }

  // Edit button for updating the existing task
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");

  editButton.addEventListener("click", () => {
    const newTask = prompt("Update the task");
    if (newTask !== null) {
      cell_2.textContent = newTask;

      /////////////////////////////

      data[row.rowIndex - 2] = newTask;
      saveData();

      ////////////////////////////
    }
  });

  cell_4.appendChild(editButton);

  // Delete Task from the row
  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";
  deleteTask.classList.add("delete");
  deleteTask.addEventListener("click", () => {
    //tableTask.deleteRow(index);
    //////////////////////////////
    tableTask.deleteRow(row.rowIndex - 1);
    data.splice(row.rowIndex - 1, 1);
    saveData();
    /////////////////////////////
  });
  cell_5.appendChild(deleteTask);

  // complete button
  const complete = document.createElement("button");
  complete.textContent = "Complete";
  complete.classList.add("complete");
  complete.addEventListener("click", () => {
    cell_3.textContent = "Completed";
    row.style.backgroundColor = "red";
    editButton.disabled = true;
    editButton.style.backgroundColor = "black";
    deleteTask.style.backgroundColor = "black";
    complete.style.backgroundColor = "black";
  });
  cell_6.appendChild(complete);
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    addNewTask(newTask);
    hidePopup();
    taskInput.value = "";
  }
});

// // Complete Button for task completion
// // const completeButton = document.createElement("button");
// // completeButton.textContent = "Complete";
// // completeButton.classList.add("complete");
// // completeButton.addEventListener("click", () => {
// //   cell_3.textContent = "Completed";
// //   if (cell_3.textContent == "Completed") {
// //     cell_3.style.color = "aquamarine";
// //   }
// //   // Disabled edit and complete button
// //   editButton.disabled = true;
// //   completeButton.disabled = true;
// // });
// // cell_5.appendChild(completeButton);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
