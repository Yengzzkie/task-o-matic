import { projects } from "./projectModule.js";
import handleProjectInput from "./handleProjectInput.js";
import addTodo from "./addTodo.js";
import renderTodo from "./renderTodo.js";
import deleteProject from "./deleteProject.js";
import "../css/renderProjects.css";

export default function renderProjects() {
  const app = document.getElementById("app");
  const formWrapper = document.createElement("div");
  const { form } = handleProjectInput();
  
  const projectWrapper = document.createElement("div"); //contains the input form
  projectWrapper.className = "project-wrapper";
  formWrapper.className = "form-wrapper";

  const addModal = document.createElement("dialog"); //modal for adding tasks in the project
  document.body.append(addModal);

  const button = document.createElement("button");
  button.textContent = "Add project";

  app.innerHTML = ""; //clears the contents everytime a new project is added to avoid duplication of projects

  projects.forEach((project, index) => {
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const deleteBtn = document.createElement("button");
    
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.addEventListener("click", () => { //deletes project
      deleteProject(projects, index);
    });

    iconsContainer.append(deleteBtn);

    if (index === projects.length - 1) {
      projectContainer.classList.add("active");
    }

    const projectTitle = project.title;
    const projectDescription = project.description;
    const numOfTasks = project.todo;
    const titleContainer = document.createElement("h1");
    const descContainer = document.createElement("p");
    const taskCounter = document.createElement('span');
    const openProjectBtn = document.createElement('button');
    
    openProjectBtn.innerHTML = `<i class="fa-regular fa-folder-open"></i>`;
    taskCounter.textContent = `"There are ${numOfTasks.length} tasks in this project"`;
    titleContainer.append(projectTitle);
    descContainer.textContent = projectDescription;

    formWrapper.appendChild(form, button);
    projectContainer.append(iconsContainer, titleContainer, descContainer, taskCounter, openProjectBtn);

    openProjectBtn.addEventListener("click", () => {

      addModal.innerHTML = ""; // Clear previous content

      const projectTitleInModal = document.createElement("h2");
      const projectDescriptionInModal = document.createElement("p");
      const addTaskInput = document.createElement("input");
      const addTaskButton = document.createElement("button");
      const closeModal = document.createElement("button");
      const ul = document.createElement("ul");
      
      addTaskButton.textContent = "Add Task";
      closeModal.textContent = 'Close';
      closeModal.addEventListener('click', () => {
        addModal.close();
      })

      addTaskButton.addEventListener("click", () => {
        addTodo(index, addTaskInput.value);
        addTaskInput.value = ""; // Clear the input field
        renderTodo(project, ul); // Pass project and ul to renderTodo
        renderProjects();
      });

      projectTitleInModal.textContent = projectTitle;
      projectDescriptionInModal.textContent = projectDescription;
      addModal.append(closeModal, projectTitleInModal, projectDescriptionInModal, addTaskInput, addTaskButton, ul);
      addModal.showModal();
      renderTodo(project, ul);
    });

    projectWrapper.appendChild(projectContainer);
    app.append(formWrapper, projectWrapper);
  });
}
