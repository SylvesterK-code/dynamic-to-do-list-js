// Wait until the HTML document has fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

  // ====== SELECTING DOM ELEMENTS ======
  const taskInput = document.getElementById('task-input');     // Input field for typing a task
  const addButton = document.getElementById('add-task-btn');   // Button for adding a task
  const taskList = document.getElementById('task-list');       // <ul> or <ol> element to display tasks

  // ====== LOAD SAVED TASKS FROM LOCAL STORAGE ======
  // Retrieve saved tasks (if any) and render them on the page
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(taskText => addTask(taskText, false)); // Load without saving again

  // ====== FUNCTION TO ADD A NEW TASK ======
  function addTask(taskText = taskInput.value.trim(), save = true) {
    // Prevent adding empty tasks
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a new <button> for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // Add a CSS class to the remove button (✅ using classList.add as required)
    removeButton.classList.add('remove-btn');

    // When the remove button is clicked, remove the task from the list
    removeButton.onclick = () => {
      // Remove from the DOM
      taskList.removeChild(listItem);

      // Also remove it from localStorage
      removeFromLocalStorage(taskText);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Add the task to the list container
    taskList.appendChild(listItem);

    // Save the new task to localStorage (optional if loaded from storage)
    if (save) {
      saveToLocalStorage(taskText);
    }

    // Clear the input field after adding a task
    taskInput.value = '';
  }

  // ====== SAVE TASK TO LOCAL STORAGE ======
  function saveToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ====== REMOVE TASK FROM LOCAL STORAGE ======
  function removeFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // ====== EVENT LISTENERS ======

  // ✅ 1. Add task when "Add Task" button is clicked
  addButton.addEventListener('click', () => addTask());

  // ✅ 2. Add task when "Enter" key is pressed inside the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});






// // Wait until the HTML document has fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {

//   // ====== DOM ELEMENT SELECTION ======
//   // Select input field, add button, and the task list container
//   const taskInput = document.getElementById('task-input');
//   const addButton = document.getElementById('add-task-btn');
//   const taskList = document.getElementById('task-list');

//   // ====== LOAD SAVED TASKS FROM LOCAL STORAGE ======
//   // Retrieve tasks from localStorage (if available) and display them
//   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   savedTasks.forEach(taskText => addTask(taskText, false)); // Load without saving again

//   // ====== FUNCTION TO ADD A NEW TASK ======
//   function addTask(taskText = taskInput.value.trim(), save = true) {
//     // Validate that the input is not empty
//     if (taskText === '') {
//       alert('Please enter a task.');
//       return;
//     }

//     // Create a new <li> element for the task
//     const listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     // Create a remove button for each task
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className = 'remove-btn';

//     // Add an event listener to remove the task when the button is clicked
//     removeButton.onclick = () => {
//       // Remove task from the DOM
//       taskList.removeChild(listItem);

//       // Also remove it from localStorage
//       removeFromLocalStorage(taskText);
//     };

//     // Append the remove button to the task item, and the item to the list
//     listItem.appendChild(removeButton);
//     taskList.appendChild(listItem);

//     // Save the new task to localStorage
//     if (save) {
//       saveToLocalStorage(taskText);
//     }

//     // Clear the input field
//     taskInput.value = '';
//   }

//   // ====== FUNCTION TO SAVE TASKS TO LOCAL STORAGE ======
//   function saveToLocalStorage(taskText) {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push(taskText);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

//   // ====== FUNCTION TO REMOVE TASK FROM LOCAL STORAGE ======
//   function removeFromLocalStorage(taskText) {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const updatedTasks = tasks.filter(task => task !== taskText);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//   }

//   // ====== EVENT LISTENERS ======
//   // Add task when "Add Task" button is clicked
//   addButton.addEventListener('click', () => addTask());

//   // Allow pressing Enter key to add a task
//   taskInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//       addTask();
//     }
//   });
// });






