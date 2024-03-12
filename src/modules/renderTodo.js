export default function renderTodo(project, ul) {
  ul.innerHTML = ""; // Clear the previous todo content

  const tasks = project.todo;

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    ul.appendChild(li);
  });
}
