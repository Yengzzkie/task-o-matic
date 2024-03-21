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
    const projectImage = new Image();
    const projectTitle = project.title;
    const projectDescription = project.description;
    const titleContainer = document.createElement("h1");
    const descContainer = document.createElement("p");
    // const taskCounter = document.createElement('span');
    const pinIcon = document.createElement('span');
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const openProjectBtn = document.createElement('button');
    
    projectImage.src = project.image;
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";
    pinIcon.innerHTML = `<i class="fa-sharp fa-solid fa-map-pin"></i>`;
    pinIcon.className = 'pin-icon';
    openProjectBtn.innerHTML = `<i class="fa-regular fa-folder-open"></i>`;
    // taskCounter.innerHTML = numOfTasks.length > 0 ? `"You have ${numOfTasks.length} tasks in this project"` : `All tasks are cleared`;
    titleContainer.append(projectTitle);
    descContainer.textContent = projectDescription;

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

    iconsContainer.append(openProjectBtn);
    projectContainer.append(projectImage, pinIcon, iconsContainer, titleContainer, descContainer);
    projectWrapper.append(projectContainer);
    app.append(projectWrapper);
  });

  return projectWrapper;
}