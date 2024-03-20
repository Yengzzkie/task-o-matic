import '../css/warningModal.css';

export default function warningModal() {
  const warningModal = document.createElement("dialog");
  const warningDialog = document.createElement("span");
  const warningCloseBtn = document.createElement("button");

  warningModal.className = 'warning-modal';
  warningCloseBtn.textContent = "Close";
  warningDialog.textContent = "Please fill up the text field, do not procrastinate!";

  warningCloseBtn.addEventListener("click", () => {
    warningModal.close();
  });

  warningModal.append(warningDialog, warningCloseBtn);
  document.body.append(warningModal);

  warningModal.showModal();
};