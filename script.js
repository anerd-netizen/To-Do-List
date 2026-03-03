const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const celebrationArea = document.getElementById('celebrationArea');

function addTask() {
    if (input.value.trim() === "") return;

    // Create the task
    const li = document.createElement('li');
    li.innerHTML = `
        ${input.value} 
        <button onclick="this.parentElement.remove()">Done!</button>
    `;
    todoList.appendChild(li);

    // Add a fun "Success" GIF when they add a task
    celebrationArea.innerHTML = `<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZHo5bXJqZHo5bXJqZHo5bXJqZHo5bXJqZHo5bXJqZHo5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKVUn7iM8FMEU24/giphy.gif" width="100px" style="margin-bottom:10px;">`;
    
    // Remove the GIF after 2 seconds so it doesn't stay there forever
    setTimeout(() => { celebrationArea.innerHTML = ""; }, 2000);

    input.value = "";
}

addBtn.addEventListener('click', addTask);
input.addEventListener("keypress", (e) => { if (e.key === "Enter") addTask(); });
