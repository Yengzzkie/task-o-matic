import { projects } from './projectModule.js';
import addTodo from './addTodo.js';
import '../css/renderProjects.css';

export default function renderProjects() {
  const app = document.getElementById('app');
  const projectWrapper = document.createElement('div');
  projectWrapper.className = 'project-wrapper';

  app.innerHTML = '';

  projects.forEach((project, index) => {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    if (index === projects.length - 1) {
      // If it's the last (newly added) project, add the 'active' class for animation
      projectContainer.classList.add('active');
    }

    const projectTitle = project.title;
    const projectDescription = project.description;

    const titleContainer = document.createElement('h1');
    const descContainer = document.createElement('p');
    titleContainer.textContent = projectTitle;
    descContainer.textContent = projectDescription;

    const addTaskInput = document.createElement('input');
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';

    const ul = document.createElement('ul');

    addTaskButton.addEventListener('click', () => {
      addTodo(index, addTaskInput.value);
      addTaskInput.value = ''; // Clear the input field
      renderTodo();
    });

    function renderTodo() {
      ul.innerHTML = ''; // Clear the previous todo content

      const tasks = project.todo;

      tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
      });
      console.log(tasks);
    }

    renderTodo(); // Initialize the todo array on each project
    // So every time a new project is added, the todo array will re-render on each project object

    projectContainer.append(titleContainer, descContainer, addTaskInput, addTaskButton, ul);
    projectWrapper.appendChild(projectContainer);
    app.append(projectWrapper);
  });
}
