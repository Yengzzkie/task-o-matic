import { projects } from './projectModule.js';
import addTodo from './addTodo.js';

export default function renderProjects() {
    const mainContent = document.getElementById('app');
    mainContent.innerHTML = '';

    projects.map((project, index) => {
        const projectTitle = project.title;
        const projectDescription = project.description;

        const titleContainer = document.createElement('h1');
        const descContainer = document.createElement('p');
        titleContainer.textContent = projectTitle;
        descContainer.textContent = projectDescription;

        const addTaskInput = document.createElement('input');
        const addTodoButton = document.createElement('button');
        addTodoButton.textContent = 'Add Task';

        addTodoButton.addEventListener('click', () => {
            addTodo(index, addTaskInput.value);
        });

        mainContent.append(titleContainer, descContainer, addTaskInput, addTodoButton);
    });
}
