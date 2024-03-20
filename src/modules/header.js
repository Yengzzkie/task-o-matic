export default function headerContent() {
    const header = document.querySelector('header');
    const headerTitle = document.createElement('h1');
    const headerElement = document.createElement('div');
    const footerElement = document.createElement('footer');
    const hamburger = document.createElement('span');
    const close = document.createElement('p');

    headerTitle.textContent = 'Task-O\'-Matic';
    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    footerElement.textContent = `All Rights Reserved | Yengzzkie DzignTech©`;

    
    hamburger.addEventListener('click', () => {
        header.classList.add('open');
    })

    close.addEventListener('click', closeNavbar)


    function closeNavbar() {
        header.classList.remove('open');
    }

    header.append(headerTitle, footerElement);
    headerElement.append(hamburger, close)



    return { headerElement };
}