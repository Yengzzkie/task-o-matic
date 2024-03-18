export default function headerContent() {
    const header = document.querySelector('header');
    const headerElement = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const hamburger = document.createElement('span');
    const close = document.createElement('p');

    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;

    headerTitle.textContent = 'Task-O\'-Matic';
    
    hamburger.addEventListener('click', () => {
        header.classList.add('close');
    })

    close.addEventListener('click', () => {
        header.classList.remove('close');
    })

    headerElement.append(headerTitle, hamburger, close)



    return { headerElement };
}