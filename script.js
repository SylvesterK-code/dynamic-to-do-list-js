// Wait until the HTML document has fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // ====== DOM ELEMENT SELECTION ======
  // Select input field, add button, and the task list container
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // ====== LOAD SAVED TASKS FROM LOCAL STORAGE ======
  // Retrieve tasks from localStorage (if available) and display them
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(taskText => addTask(taskText, false)); // Load without saving again

  // ====== FUNCTION TO ADD A NEW TASK ======
  function addTask(taskText = taskInput.value.trim(), save = true) {
    // Validate that the input is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button for each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add an event listener to remove the task when the button is clicked
    removeButton.onclick = () => {
      // Remove task from the DOM
      taskList.removeChild(listItem);

      // Also remove it from localStorage
      removeFromLocalStorage(taskText);
    };

    // Append the remove button to the task item, and the item to the list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save the new task to localStorage
    if (save) {
      saveToLocalStorage(taskText);
    }

    // Clear the input field
    taskInput.value = '';
  }

  // ====== FUNCTION TO SAVE TASKS TO LOCAL STORAGE ======
  function saveToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ====== FUNCTION TO REMOVE TASK FROM LOCAL STORAGE ======
  function removeFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // ====== EVENT LISTENERS ======
  // Add task when "Add Task" button is clicked
  addButton.addEventListener('click', () => addTask());

  // Allow pressing Enter key to add a task
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
