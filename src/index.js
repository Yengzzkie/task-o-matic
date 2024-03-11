import { projects } from './modules/projectModule.js';
import handleProjectInput from './modules/handleProjectInput.js';
import renderProjects from './modules/renderProjects.js';
import './styles.css';

function render() {
    const { form } = handleProjectInput();

    document.body.appendChild(form);

    renderProjects();

}

render();

