document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const clearTasks = document.getElementById('clearTasks');

    // Carrega tarefas do armazenamento local
    loadTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (taskInput.value.trim() === '') {
            alert('Por favor, adicione uma tarefa.');
        } else {
            const li = document.createElement('li');
            li.textContent = taskInput.value;
            li.addEventListener('click', () => li.classList.toggle('completed'));
            taskList.appendChild(li);
            saveTasks();
            taskInput.value = '';
        }
    });

    clearTasks.addEventListener('click', () => {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        saveTasks();
    });

    function saveTasks() {
        let tasks = [];
        document.querySelectorAll('#taskList li').forEach(task => {
            tasks.push({ text: task.textContent, completed: task.classList.contains('completed') });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.text;
                if (task.completed) {
                    li.classList.add('completed');
                }
                li.addEventListener('click', () => li.classList.toggle('completed'));
                taskList.appendChild(li);
            });
        }
    }
});