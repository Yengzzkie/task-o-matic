import renderProjects from './modules/renderProjects.js';
import headerContent from './modules/header.js';
import homeContent from './modules/homeContent.js';
import './styles.css';

function render() {
    const header = document.querySelector('header');
    const { headerElement } = headerContent();
    header.append(headerElement);
}

function updateContent(newContent) {
    const app = document.getElementById('app');
    app.innerHTML = '';

    app.append(newContent)

    return app;
}

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    updateContent(homeContent())
})

const notesBtn = document.getElementById('notes');
notesBtn.addEventListener('click', () => {
    updateContent(renderProjects())
})

render();
updateContent(homeContent());