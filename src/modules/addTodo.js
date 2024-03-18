import { projects } from "./projectModule.js";

export default function addTodo(todoInputValue, projectIndex) {
    if (projectIndex >= 0 && projectIndex < projects.length) {
        const project = projects[projectIndex];
        project.todo.push(todoInputValue); 

        console.log(project);
        console.log("New task successfully added");
    } else {
        console.error("Invalid project index.");
    }
};
