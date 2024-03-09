import addProject from "./addProject.js";
import renderProjects from "./renderProjects.js";

export default function handleProjectInput() {
    const form = document.createElement('form');
    const projectTitleInput = document.createElement('input');
    const projectDescInput = document.createElement('input');
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        addProject(projectTitleInput.value, projectDescInput.value);
        renderProjects();
    })

    form.append(projectTitleInput, projectDescInput, addButton)

    return { form };
};