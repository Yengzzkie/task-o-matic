import { projects } from './projectModule.js';
import addTodo from './addTodo.js';
import renderTasks from './renderTasks.js';

export default function renderProjects() {
    const mainContent = document.getElementById('app');
    
    mainContent.innerHTML = '';

    projects.map((project, index) => {
        const projectContainer = document.createElement('div');
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
        
        const tasks = project.todo;

        addTaskButton.addEventListener('click', () => {
            addTodo(index, addTaskInput.value);
            renderTodo();
        });

        function renderTodo() {
            ul.innerHTML = ''; // Clear the previous content

            tasks.map((task) => {    
                const li = document.createElement('li');
                li.textContent = task;
                ul.appendChild(li);
            });

            console.log(tasks);
        }

        renderTodo(); //initialize the todo array on each project
                    //so everytime a new project is added, the todo array will rerender on each project object

        projectContainer.append(titleContainer, descContainer, addTaskInput, ul);

        mainContent.append(projectContainer, addTaskButton);
    });
};
