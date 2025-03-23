document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn"); // Fixed ID Reference
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <span class="status not-completed">Not Completed</span> <button class="delete-btn">X</button>`;

        taskList.appendChild(li);
        taskInput.value = "";

        // Toggle completion status
        li.addEventListener("click", function () {
            const status = li.querySelector(".status");
            if (status.classList.contains("not-completed")) {
                status.classList.remove("not-completed");
                status.classList.add("completed");
                status.textContent = "Completed";
            } else {
                status.classList.remove("completed");
                status.classList.add("not-completed");
                status.textContent = "Not Completed";
            }
        });

        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", function (event) {
            event.stopPropagation();
            taskList.removeChild(li);
        });
    });
});
