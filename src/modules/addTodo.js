import { projects } from "./projectModule.js";
import renderTasks from "./renderTodo.js";

export default function addTodo(projectIndex, addTaskInput) {

  if (projectIndex >= 0 && projectIndex < projects.length) {
    const project = projects[projectIndex];
    project.todo.push(addTaskInput);

    console.log(project)
    console.log("New task successfuly added");
 
  } else {
    console.error("Invalid project index.");
  }

};