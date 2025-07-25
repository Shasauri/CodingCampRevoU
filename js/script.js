let task = [];

function addTask() {
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");

    if(taskInput.value === "" || dateInput.value === "") {
        alert("Please fill in both task and date.");
        return;
    }

    task.push({
        task: taskInput.value,
        date: dateInput.value,
        compleated: false,
    });
    displayTasks();
}

function deleteAllTask() {
    task = [];
    displayTasks();
}

function deleteTask(index){
    if (index < 0 || index >= task.length) {
        console.error("Invalid task index");
        return;
    }
    task.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = ""; 
    task.forEach((task, index) => {
        list.innerHTML += `
        <li class="list-item">
            <span>${task.task} <small>(${task.date})</small></span>
            <div>
                <button class="button4" onclick="deleteTask(${index});">Delete</button>
            </div>
        </li>
        `;
    });
}

function filterTasks() {
    // Urutkan task berdasarkan tanggal terdekat
    task.sort((a, b) => new Date(a.date) - new Date(b.date));
    displayTasks();
}