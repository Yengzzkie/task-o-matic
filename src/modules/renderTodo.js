import '../css/renderTodo.css';
import renderProjects from './renderProjects.js';
// import { projects } from "./projectData.js";

export default function renderTodo(index) {
    const projectsJSON = localStorage.getItem('projects');
    const projects = JSON.parse(projectsJSON);
    const project = projects[index]; //get the index of the projects

    //this block below are all the variables
    const app = document.getElementById('app');
    const inputModal = document.createElement('dialog')
    const todoContainer = document.createElement('div');
    const todoInput = document.createElement('input');
    const addTodoBtn = document.createElement('button');
    const closeModalBtn = document.createElement('button');
    const openModalBtn = document.createElement('button');
    const backBtn = document.createElement('button');
    const ul = document.createElement('ul');
    const tasks = project.todo;

    //this block below are the variable text assignment, separating them from the variables to avoid confusion
    addTodoBtn.textContent = 'Add Task';
    closeModalBtn.textContent = 'Cancel';
    todoContainer.className = 'todo-container';
    openModalBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    openModalBtn.setAttribute('id', 'add-task');
    backBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    backBtn.className = 'back-btn'

    openModalBtn.addEventListener('click', () => {
      inputModal.showModal();
    })

    closeModalBtn.addEventListener('click', () => {
      inputModal.close();
    })

    addTodoBtn.addEventListener('click', addTask);

  function addTask() {
    console.log("Adding task...");
    const todoInputValue = todoInput.value;
    tasks.push(todoInputValue); 
    // Update the project's todo array with the updated tasks
    project.todo = tasks;
    console.log("Updated project:", project); // Log the updated project
    localStorage.setItem('projects', JSON.stringify(projects)); //store the new added tasks to the local storage
    console.log("Projects stored in localStorage:", localStorage.getItem('projects')); // Log the projects stored in localStorage
    renderTodo(index); //then re-render the array by calling renderTodo function which contains the loadProjectsFromLocalStorage() function
    console.log('New task added') //adds new tasks inside the project
  }
    backBtn.addEventListener('click', () => {
      renderProjects();
    }); //re-renders the projects when the back button is clicked
  
    // Clear the existing content in the app element
    app.innerHTML = '';
    
    // Iterate through the todo array of the project and create list items for each todo
    tasks.forEach((todoItem, index) => {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const taskToDelete = tasks[index]

        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        li.textContent = todoItem;

        function removeTask(taskIndex) {
          tasks.splice(taskIndex, 1); // Remove the task from the tasks array
          project.todo = tasks; // Update the project's todo array with the updated tasks
          localStorage.setItem('projects', JSON.stringify(projects)); // Update localStorage with the updated projects
      
          // Remove the task's corresponding list item from the DOM
          ul.removeChild(ul.childNodes[taskIndex]);
      
          // If there are no more tasks, remove the dialog element and re-render only the current project
          if (tasks.length === 0) {
              inputModal.close(); // Close the dialog
              inputModal.remove(); // Remove the dialog element from the DOM
              renderProjects(); // Re-render only the current project
          }
      }
      
      // Inside the forEach loop where you create delete buttons for each task
      deleteBtn.addEventListener('click', () => {
          const taskIndex = tasks.indexOf(todoItem); // Find the index of the task to remove
          removeTask(taskIndex); // Call the removeTask function with the index to remove
      });
      

        li.append(deleteBtn);
        ul.append(li);
    });

    // Append the unordered list to the app element
    inputModal.append(todoInput, addTodoBtn, closeModalBtn)
    todoContainer.append(ul, openModalBtn, backBtn)
    app.append(todoContainer, inputModal);
}