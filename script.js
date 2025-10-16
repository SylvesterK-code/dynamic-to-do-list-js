// Wait until the HTML document has fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // ====== SELECTING DOM ELEMENTS ======
  const taskInput = document.getElementById('task-input');     // Input field for typing a task
  const addButton = document.getElementById('add-task-btn');   // Button for adding a task
  const taskList = document.getElementById('task-list');       // <ul> element for displaying tasks

  // ====== LOAD TASKS ON PAGE LOAD ======
  loadTasks(); // Call function to retrieve and render tasks from Local Storage

  // ====== FUNCTION: LOAD TASKS FROM LOCAL STORAGE ======
  function loadTasks() {
    // Retrieve stored tasks (if any), or use an empty array if none exist
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Loop through each saved task and add it to the DOM (without re-saving)
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // ====== FUNCTION: ADD A NEW TASK ======
  function addTask(taskText = taskInput.value.trim(), save = true) {
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item for task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a "Remove" button for each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Handle task removal when button is clicked
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      removeFromLocalStorage(taskText);
    };

    // Append remove button to task item, then append task to the list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save to localStorage only if not loading from storage
    if (save) {
      saveToLocalStorage(taskText);
    }

    // Clear input field after adding task
    taskInput.value = '';
  }

  // ====== FUNCTION: SAVE TASK TO LOCAL STORAGE ======
  function saveToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ====== FUNCTION: REMOVE TASK FROM LOCAL STORAGE ======
  function removeFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // ====== EVENT LISTENERS ======

  // Add task when the button is clicked
  addButton.addEventListener('click', () => addTask());

  // Add task when the Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
