var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    event.preventDefault();
    
    var taskItemEl =document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
};

formEl.addEventListener("submit", createTaskHandler);