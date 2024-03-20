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
homeBtn.innerHTML = `<i class="fa-solid fa-house"></i> Home`;
homeBtn.addEventListener('click', () => {
    updateContent(homeContent())
})

const notesBtn = document.getElementById('notes');
notesBtn.innerHTML = `<i class="fa-solid fa-align-left"></i> My Notes`;
notesBtn.addEventListener('click', () => {
    updateContent(renderProjects())
})

const instructionsBtn = document.getElementById('instructions');
instructionsBtn.innerHTML = `<i class="fa-solid fa-person-chalkboard"></i> Instructions`;
instructionsBtn.addEventListener('click', () => {
    updateContent(homeContent())
})

render();
updateContent(homeContent()); //calls homeContent on page load as default landing page