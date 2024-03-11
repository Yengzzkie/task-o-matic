import renderProjects from "./renderProjects.js";
import addProject from "./addProject.js";
import addTodo from "./addTodo.js";

let projects = [{title: "Work", description: "Go to work", todo: []}, {title: "Read", description: "Read some books", todo: []}];

class Project { //main constructor for Project
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.todo = []
    }
}

// addTodo(2);
renderProjects(projects);

export { Project, projects };