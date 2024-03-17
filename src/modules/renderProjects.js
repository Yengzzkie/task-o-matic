import { projects } from "./projectModule.js";
import handleProjectInput from "./handleProjectInput.js";
import deleteProject from "./deleteProject.js";
import "../css/renderProjects.css";
import viewProjectModal from "./viewProjectModal.js";

export default function renderProjects() {
  const app = document.getElementById("app");
  // const formWrapper = document.createElement("div");
  // const { form } = handleProjectInput();

  const projectWrapper = document.createElement("div"); //contains the input form
  projectWrapper.className = "project-wrapper";
  // formWrapper.className = "form-wrapper";

  const addModal = document.createElement("dialog"); //modal for adding tasks in the project

  const button = document.createElement("button");
  button.textContent = "Add project";

  app.innerHTML = ""; //clears the contents everytime a new project is added to avoid duplication of projects

  projects.forEach((project, index) => {
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const openProjectBtn = document.createElement('button');
    
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.addEventListener("click", () => { //deletes project
      deleteProject(projects, index);
    });

    iconsContainer.append(openProjectBtn, deleteBtn);

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

      const backBtn = document.createElement('button');
      backBtn.textContent = 'Back';
      backBtn.addEventListener('click', () => {
        projectWrapper.innerHTML = '';
        renderProjects();
      })

      projectWrapper.innerHTML = '';
      projectWrapper.append(project.todo, backBtn);
      
      // viewProjectModal(project, index, projectTitle, projectDescription)
    });
// *****************EXPERIMENTAL**************************
    // formWrapper.appendChild(form, button);
    projectContainer.append(pinIcon, iconsContainer, titleContainer, descContainer, taskCounter, dateContainer);
    projectWrapper.appendChild(projectContainer);
    app.append(projectWrapper, addModal);
  });

  return projectWrapper;
}
