import { projects } from "./projectModule.js";

export default function addTodo(projectIndex) {
  if (projectIndex >= 0 && projectIndex < projects.length) {
    const project = projects[projectIndex];
    project.todo.push("Do some cleaning");
    console.log(project.todo);
    console.log("New task successfuly added");
  } else {
    console.error("Invalid project index.");
  }
}