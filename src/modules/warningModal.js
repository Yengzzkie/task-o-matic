import '../css/warningModal.css';

export default function warningModal() {
  const warningModal = document.createElement("dialog");
  const warningDialog = document.createElement("span");
  const warningCloseBtn = document.createElement("button");
  warningCloseBtn.textContent = "Close";
  warningDialog.textContent = "Category and brief description is required";

  warningCloseBtn.addEventListener("click", () => {
    warningModal.close();
  });

  warningModal.append(warningDialog, warningCloseBtn);
  document.body.append(warningModal);

  warningModal.showModal();
};