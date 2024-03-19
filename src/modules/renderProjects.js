import { projects } from "./projectData.js";
import "../css/renderProjects.css";
import renderTodo from './renderTodo.js';

export default function renderProjects() {

  if (!localStorage.getItem('projects')) {
    // If not, set it with the projects data
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const app = document.getElementById("app");

  const projectWrapper = document.createElement("div"); //contains the input form
  projectWrapper.className = "project-wrapper";

  app.innerHTML = ""; //clears the contents everytime a new project is added to avoid duplication of projects

  projects.forEach((project, index) => {
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const openProjectBtn = document.createElement('button');
    
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";

    iconsContainer.append(openProjectBtn);

    if (index === projects.length - 1) {
      projectContainer.classList.add("active");
    }

    const projectImage = new Image();
    projectImage.src = project.image;

    const projectTitle = project.title;
    const projectDescription = project.description;
    const projectDate = project.date;
    const numOfTasks = project.todo;
    const titleContainer = document.createElement("h1");
    const descContainer = document.createElement("p");
    const dateContainer = document.createElement('span');
    const taskCounter = document.createElement('span');
    const pinIcon = document.createElement('span');
    
    pinIcon.innerHTML = `<i class="fa-sharp fa-solid fa-map-pin"></i>`;
    pinIcon.className = 'pin-icon';
    dateContainer.className = 'due-date';
    openProjectBtn.innerHTML = `<i class="fa-regular fa-folder-open"></i>`;
    taskCounter.innerHTML = numOfTasks.length > 0 ? `"You have ${numOfTasks.length} tasks in this project"` : `All tasks are cleared`;
    titleContainer.append(projectTitle, projectImage);
    descContainer.textContent = projectDescription;
    dateContainer.textContent = !projectDate ? `Due date not set` : `Due date: ${projectDate}`;
    // *****************EXPERIMENTAL**************************
    openProjectBtn.addEventListener("click", () => {
      const projectIndex = index; // Capture the current project index
      const ul = document.createElement('ul');

      renderTodo(projectIndex);
      ul.append(li)
      app.innerHTML = '';
      app.append(ul);
    });
// *****************EXPERIMENTAL**************************

    projectContainer.append(pinIcon, iconsContainer, titleContainer, descContainer, taskCounter, dateContainer);
    projectWrapper.appendChild(projectContainer);
    app.append(projectWrapper);
  });

  return projectWrapper;
}