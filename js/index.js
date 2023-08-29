const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteTask">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    const deleteButton = taskItem.querySelector('.deleteTask');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });
  }
}