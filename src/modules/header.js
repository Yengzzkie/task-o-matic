import logoImage from '../assets/todo-favicon.png';

export default function headerContent() {
    const headerElement = document.createElement('h1');

    const logo = new Image();
    logo.src = logoImage;
    logo.alt = 'logoImage';

    headerElement.textContent = 'Task-O\'-Matic';

    headerElement.appendChild(logo);

    return { headerElement };
}