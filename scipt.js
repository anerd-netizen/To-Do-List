document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM is ready!");

    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    function addTask() {
        if (input.value.trim() === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${input.value} 
            <button onclick="this.parentElement.remove()">Delete</button>
        `;
        
        todoList.appendChild(li);
        input.value = "";
    }

    addBtn.addEventListener('click', addTask);

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
