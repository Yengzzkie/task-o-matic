import '../css/renderTodo.css';
import renderProjects from './renderProjects.js';

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

    //this block below are the variable text assignment, separating them from the variables to avoid confusion
    addTodoBtn.textContent = 'Add Task';
    closeModalBtn.textContent = 'Cancel';
    todoContainer.className = 'todo-container';
    openModalBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    openModalBtn.setAttribute('id', 'add-task');
    backBtn.textContent = 'Back';
    backBtn.className = 'back-btn'

    openModalBtn.addEventListener('click', () => {
      inputModal.showModal();
    })

    closeModalBtn.addEventListener('click', () => {
      inputModal.close();
    })

    addTodoBtn.addEventListener('click', addTask);

    //function to load the projects from storage
    function loadProjectsFromLocalStorage() {
      const storedProjectsJSON = localStorage.getItem('projects');
      if (storedProjectsJSON) {
          return JSON.parse(storedProjectsJSON);
      } else {
          // Return a default value if no projects are stored in localStorage
          return [];
      }
  }

    function addTask() {
      const todoInputValue = todoInput.value;
      project.todo.push(todoInputValue); 
      localStorage.setItem('projects', JSON.stringify(projects)); //store the new added tasks to the local storage
      renderTodo(index); //then re-render the array by calling renderTodo function which contains the loadProjectsFromLocalStorage() function
      console.log('New task added') //adds new tasks inside the project
      console.log(project.todo);
    }

    backBtn.addEventListener('click', () => {
      renderProjects();
    }); //re-renders the projects when the back button is clicked
  
    // Clear the existing content in the app element
    app.innerHTML = '';

    // Iterate through the todo array of the project and create list items for each todo
    project.todo.forEach(todoItem => {
        const li = document.createElement('li');
        li.textContent = todoItem;
        ul.append(li);
    });

    //initialize the load function upon pushing a new task to the projects stored from the local storage
    loadProjectsFromLocalStorage();

    // Append the unordered list to the app element
    inputModal.append(todoInput, addTodoBtn, closeModalBtn)
    todoContainer.append(ul, openModalBtn, backBtn)
    app.append(todoContainer, inputModal);
}