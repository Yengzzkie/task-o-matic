import addProject from "./addProject.js";
import renderProjects from "./renderProjects.js";
import warningModal from "./warningModal.js";
import "../css/handleProjectInput.css";

export default function handleProjectInput() {
  const form = document.createElement("form");

  const dropdown = document.createElement('select');
  const options = ["Personal", "Work", "Study", "Health", "Social", "Hobbies", "Finance", "Travel", "Others"];
  
  const placeholderOption = document.createElement('option');
  placeholderOption.value = "";
  placeholderOption.text = "Select a category...";
  placeholderOption.disabled = true; 
  placeholderOption.selected = true;
  dropdown.add(placeholderOption);

  for (let i = 0; i < options.length; i++) { //generates the options for the dropdown menu
    const option = document.createElement('option');
    option.value = options[i];
    option.text = options[i];
    dropdown.add(option);
  }

  const projectDescInput = document.createElement("input");
  const addButton = document.createElement("button");
  addButton.textContent = "Add Project";

  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (dropdown.value !== placeholderOption.value && projectDescInput.value !== "") {
      addProject(dropdown.value, projectDescInput.value);
      renderProjects();

      dropdown.selectedIndex = placeholderOption.index; //clear the input fields after submitting
      projectDescInput.value = '';
    } else {
        warningModal();
    }
  });

  form.append(dropdown, projectDescInput, addButton);

  return { form };
};