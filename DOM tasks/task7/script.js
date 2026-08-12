let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


for (let i = 0; i < tasks.length; i++) {
    addTask(tasks[i]);
}


addBtn.addEventListener("click", function() {

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    addTask(task);

    input.value = "";

});


function addTask(task) {

    let li = document.createElement("li");

    li.textContent = task;

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {

        li.remove();

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i] === task) {
                tasks.splice(i, 1);
                break;
            }

        }

        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}