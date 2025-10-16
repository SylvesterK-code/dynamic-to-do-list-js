// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ===== Select DOM elements =====
  const taskInput = document.getElementById('task-input'); // Input field for new tasks
  const addButton = document.getElementById('add-task-btn'); // Button to add tasks
  const taskList = document.getElementById('task-list'); // <ul> element that holds all tasks

  // ===== Function to create and add a new task =====
  function addTask() {
    // Get the value entered in the input field and remove extra spaces
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Set its text content to the entered task

    // Create a "Remove" button for each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'; // Label for the button
    removeButton.className = 'remove-btn'; // Assign class for styling

    // Add a click event to the Remove button
    removeButton.onclick = () => {
      // When clicked, remove this <li> element from the list
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list (<ul>)
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = '';
  }

  // ===== Event Listeners =====

  // 1️⃣ Add a new task when the "Add Task" button is clicked
  addButton.addEventListener('click', addTask);

  // 2️⃣ Add a new task when the user presses the "Enter" key
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






