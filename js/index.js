
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load tasks from local storage on page load
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Populate the task list with tasks from local storage
  tasks.forEach(taskText => {
    addTaskToList(taskText);
  });

  addTaskButton.addEventListener('click', addTask);
  darkModeToggle.addEventListener('click', toggleDarkMode);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTaskToList(taskText);
      taskInput.value = '';
      saveTasksToLocalStorage();
    }
  }

  function addTaskToList(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      
      <span>${taskText}</span>
      <button class=" "><i class="fa-solid fa-trash-can deleteTask"></i>   <i class="fa-solid fa-pen-to-square editTask"></i></button>
      
    `;
    taskList.appendChild(taskItem);

    const editButton = taskItem.querySelector('.editTask');
    editButton.addEventListener('click', () => {
      editTask(taskItem);
    });

    const deleteButton = taskItem.querySelector('.deleteTask');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      saveTasksToLocalStorage();
    });

  }

  function editTask(taskItem) {
    const span = taskItem.querySelector('span');
    const editButton = taskItem.querySelector('.editTask');

    const newTaskText = prompt('Edit the task:', span.textContent);
    if (newTaskText !== null) {
      span.textContent = newTaskText;
      saveTasksToLocalStorage();
    }
  }
  // Save tasks to local storage
  function saveTasksToLocalStorage() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll('li span');
    taskItems.forEach(item => {
      tasks.push(item.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
