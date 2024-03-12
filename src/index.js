import handleProjectInput from './modules/handleProjectInput.js';
import renderProjects from './modules/renderProjects.js';
import headerContent from './modules/header.js';
import './styles.css';

function render() {
    const header = document.querySelector('header');
    const { headerElement } = headerContent();

    header.appendChild(headerElement);

    renderProjects(); //callback to render the projects

}

render();

