import '../css/renderTodo.css';

export default function renderTodo(project, ul) {
  ul.innerHTML = ""; // Clear the previous todo content

  const tasks = project.todo;

  tasks.forEach((task) => {
    const li = document.createElement("li");

    // Create a radio button
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'todo'; // Set a common name for the radio buttons in the same group
    checkbox.className = 'checkbox';
    checkbox.value = task; // Set the value of the radio button

    // Create a label for the radio button
    const label = document.createElement('label');
    label.textContent = task;

    checkbox.addEventListener('change', function() {
      label.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    // Append the radio button and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Append the list item to the unordered list
    ul.appendChild(li);
  });
}
