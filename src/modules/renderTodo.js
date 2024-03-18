import '../css/renderTodo.css';
import renderProjects from './renderProjects.js';
import { projects } from './projectModule.js';

export default function renderTodo(index) {

    const project = projects[index]; //get the index of the projects

    const app = document.getElementById('app');
    const inputModal = document.createElement('dialog')
    const todoContainer = document.createElement('div');
    const todoInput = document.createElement('input');
    const addTodoBtn = document.createElement('button');
    const closeModalBtn = document.createElement('button');
    const openModalBtn = document.createElement('button');
    const backBtn = document.createElement('button');
    const ul = document.createElement('ul');

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

    function addTask() {
      const todoInputValue = todoInput.value;
      project.todo.push(todoInputValue); 
      renderTodo(index);
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

    // Append the unordered list to the app element
    inputModal.append(todoInput, addTodoBtn, closeModalBtn)
    todoContainer.append(ul, openModalBtn, backBtn)
    app.append(todoContainer, inputModal);
}