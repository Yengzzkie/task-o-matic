export default function headerContent() {
    const header = document.querySelector('header');
    const headerTitle = document.createElement('h1');
    const headerElement = document.createElement('div');
    const footerElement = document.createElement('footer');
    const hamburger = document.createElement('span');
    const close = document.createElement('p');
    const clearDB = document.createElement('button');
    const dialogWrapper = document.getElementById('dialog-wrapper');
    const clearDataWarning = document.createElement('span');
    const confirmBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const clearDataModal = document.getElementById('input-modal');

    confirmBtn.textContent = 'Confirm';
    cancelBtn.textContent = 'Cancel';
    clearDataWarning.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Are you sure you want to delete all data? This is irreversible.`;
    headerTitle.textContent = 'Task-O\'-Matic';
    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    clearDB.innerHTML = `<i class="fa-solid fa-trash-can"></i> Delete All Data`;
    footerElement.textContent = `All Rights Reserved | Yengzzkie DzignTech©`;
    
    hamburger.addEventListener('click', () => { //hamburger open event listener for mobile screens
        header.classList.add('open');
    })

    close.addEventListener('click', closeNavbar) //hamburger close event listener for mobile screens

    function closeNavbar() { //hamburger close function
        header.classList.remove('open');
    }

    clearDB.addEventListener('click', () => {
        clearDataModal.innerHTML = '';
        clearStorage();
    }); //event listener for clear storage button

    function clearStorage() { //function for clearing local storage
        clearDataModal.showModal(); //opens the deletion modal

        dialogWrapper.append(clearDataWarning, confirmBtn, cancelBtn)
        clearDataModal.append(dialogWrapper);

        confirmBtn.addEventListener('click', () => { //confirms deletion of data from local storage
            localStorage.clear(); //calls this function to delete from local storage
            dialogWrapper.innerHTML = ''; //empties the dialog wrapper
            closeModal(); //close the modal
            location.reload(); //then reloads the page
        });

        cancelBtn.addEventListener('click', () => { //cancels 
            closeModal(); //and close modal for data deletion
        })
    }

    function closeModal() {
        clearDataModal.close();
    }

    // clearDataModal.append(clearDataWarning, confirmBtn, cancelBtn);
    headerElement.append(hamburger, close)
    footerElement.append(clearDB);
    header.append(headerTitle, footerElement);



    return { headerElement };
}