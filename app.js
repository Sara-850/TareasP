// Obtener elementos del DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Manejar el envío del formulario
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        todoInput.value = ""; // Limpiar el input después de agregar la tarea
    }
});

// Función para agregar tarea
function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="remove-btn">✘</button>
        </div>
    `;
    todoList.appendChild(li);

    // Marcar como completada
    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.querySelector('span').classList.toggle('completed');
    });

    // Eliminar tarea
    li.querySelector('.remove-btn').addEventListener('click', function() {
        li.remove();
    });
}