import renderProjects from "./renderProjects";
import addTodo from "./addTodo";
import renderTodo from "./renderTodo";

export default function viewProjectModal(project, index, projectTitle, projectDescription) {

    const { addModal } = renderProjects();
    addModal.innerHTML = ""; // Clear previous content

      const projectTitleInModal = document.createElement("h2");
      const projectDescriptionInModal = document.createElement("p");
      const addTaskInput = document.createElement("input");
      const addTaskButton = document.createElement("button");
      const closeModal = document.createElement("button");
      const ul = document.createElement("ul");
      
      addTaskButton.textContent = "Add Task";
      closeModal.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
      closeModal.className = 'close-modal';
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
}