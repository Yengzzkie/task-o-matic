import handleProjectInput from './modules/handleProjectInput.js';
import renderProjects from './modules/renderProjects.js';
import './styles.css';

function render() {
    const header = document.querySelector('header');
    const { form } = handleProjectInput();

    header.appendChild(form);

    renderProjects(); //call renderProjects to render the projects

}

render();

