import { projects } from './projectModule.js';

export default function renderProjects() {
    const mainContent = document.getElementById('app');

    mainContent.innerHTML = '';

    projects.forEach(project => { //loop through the array and console log the objects
        console.log(project);

        const projectTitle = project.title;
        const projectDescription = project.description;

        const titleContainer = document.createElement('h1');
        const descContainer = document.createElement('p');
        titleContainer.textContent = projectTitle;
        descContainer.textContent = projectDescription;

        mainContent.append(titleContainer, descContainer);
    });
}