import addProject from "./addProject.js";
import renderProjects from "./renderProjects.js";
import "../css/handleProjectInput.css";

export default function handleProjectInput() {
  const form = document.createElement("form");
  const projectTitleInput = document.createElement("input");
  const projectDescInput = document.createElement("input");
  const addButton = document.createElement("button");
  addButton.textContent = "Add Project";

  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (projectTitleInput.value !== "" || projectDescInput.value !== "") {
      addProject(projectTitleInput.value, projectDescInput.value);
      renderProjects();

      projectTitleInput.value = ''; //clear the input value if input fields are filled
      projectDescInput.value = '';
    } else {
        alert('Project name and description is required')
    }
  });

  form.append(projectTitleInput, projectDescInput, addButton);

  return { form };
}
