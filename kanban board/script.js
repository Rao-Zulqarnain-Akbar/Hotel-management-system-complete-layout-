let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let todo = document.querySelector("#todo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


addBtn.addEventListener("click", function () {

    if (input.value === "") {
        return;
    }

    let task = document.createElement("div");

    task.classList.add("bg-white","p-3","rounded-lg","shadow","mb-3","flex","justify-between","items-start","gap-2","min-w-0");

    let text = document.createElement("span");

    text.textContent = input.value;
    text.classList.add("break-words","min-w-0","flex-1");


    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("bg-red-500","text-white","px-3","py-1","rounded","text-sm","hover:bg-red-600");

    deleteBtn.addEventListener("click", function () {

        task.remove();

        tasks = tasks.filter(function (item) {
            return item.text !== text.textContent;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });


    task.append(text);
    task.append(deleteBtn);

    task.draggable = true;

    task.addEventListener("dragstart", function () {
        task.classList.add("opacity-50");
    });

    task.addEventListener("dragend", function () {
        task.classList.remove("opacity-50");
    });


    todo.append(task);


    tasks.push({
        text: input.value,
        section: "todo"
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
});


let columns = [todo, progress, done];

columns.forEach(function (column) {

    column.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    column.addEventListener("drop", function () {

        let task = document.querySelector(".opacity-50");

        if (task) {

            column.append(task);

            let taskText = task.querySelector("span").textContent;

            for (let i = 0; i < tasks.length; i++) {

                if (tasks[i].text === taskText) {

                    if (column === todo) {
                        tasks[i].section = "todo";
                    }

                    else if (column === progress) {
                        tasks[i].section = "progress";
                    }

                    else if (column === done) {
                        tasks[i].section = "done";
                    }

                    break;
                }
            }

            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    });

});



tasks.forEach(function (item) {

    let task = document.createElement("div");

    task.classList.add("bg-white","p-3","rounded-lg","shadow","mb-3","flex","justify-between","items-start","gap-2","min-w-0");

    let text = document.createElement("span");

    text.textContent = item.text;
    text.classList.add("break-words","min-w-0","flex-1");


    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("bg-red-500","text-white","px-3","py-1","rounded","text-sm","hover:bg-red-600");

    deleteBtn.addEventListener("click", function () {

        task.remove();

        tasks = tasks.filter(function (taskItem) {
            return taskItem.text !== text.textContent;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });


    task.append(text);
    task.append(deleteBtn);

    task.draggable = true;

    task.addEventListener("dragstart", function () {
        task.classList.add("opacity-50");
    });

    task.addEventListener("dragend", function () {
        task.classList.remove("opacity-50");
    });


    if (item.section === "todo") {
        todo.append(task);
    }

    else if (item.section === "progress") {
        progress.append(task);
    }

    else if (item.section === "done") {
        done.append(task);
    }

});