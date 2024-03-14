import '../css/renderTodo.css';

export default function renderTodo(project, ul) {
  ul.innerHTML = ""; // Clear the previous todo content

  const tasks = project.todo;

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-button';
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    // Create a radio button
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'todo'; // Set a common name for the radio buttons in the same group
    checkbox.className = 'checkbox';
    checkbox.value = task; // Set the value of the radio button

    // Create a label for the radio button
    const span = document.createElement('span');
    span.textContent = task;

    checkbox.addEventListener('change', function() {
      span.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    // Append the radio button and label to the list item
    li.append(checkbox, span, editBtn);

    // Append the list item to the unordered list
    ul.appendChild(li);
  });
}
