const taskToAdd = document.getElementById("input-task");
const existingTasks = document.getElementById("task-list");
let toStore = [];

function addNewTask() {
    let addTaskButton = document.getElementById("add-task-button");
    addTaskButton.addEventListener("click", function () {
        toStoreCreation(taskToAdd.value);
    });
}

addNewTask();

function toStoreCreation(task, completed=false) {
    if (task !== "") {
        const taskObject = {
            "task": task,
            "completion": completed
        };
        toStore.push(taskObject);
        addToLocal(toStore);
        taskToAdd.value = null;
    }
}

function renderTasks(tasks) {
    existingTasks.innerHTML = "";
    tasks.forEach(function (task) {
        let taskElement = document.createElement("li");

        let taskCheckbox = document.createElement("input");
        let taskSpan = document.createElement("span");
        let taskButton = document.createElement("button");

        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = false;
        taskSpan.textContent = task.task;
        if (task.completion) {
            taskSpan.className = "task checked";
            taskCheckbox.checked = true;
        } else {
            taskSpan.className = "task";
        }
        taskButton.className = "delete-btn";

        taskElement.appendChild(taskCheckbox);
        taskElement.appendChild(taskSpan);
        taskElement.appendChild(taskButton);
        existingTasks.append(taskElement);
    });
}

function deleteTask(task) {
    toStore = toStore.filter(function (entry) {
        return entry.task != task;
    });

    addToLocal(toStore);
}

function completionStatusChange(task) {
    toStore.forEach(function (entry) {
        if (entry.task == task) {
            entry.completion = !entry.completion;
        }
    });

    addToLocal(toStore);
}

function clickEffects() {
    existingTasks.addEventListener('click', function (mouseEvent) {
        if (mouseEvent.target.type === "checkbox") {
            completionStatusChange(mouseEvent.target.nextSibling.innerHTML);
        }
        if (mouseEvent.target.className === "delete-btn") {
            deleteTask(mouseEvent.target.previousSibling.innerHTML);
        }
    });
}

clickEffects();

function addToLocal(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks);
}

function renderFromLocal() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(storedTasks);
}

renderFromLocal();