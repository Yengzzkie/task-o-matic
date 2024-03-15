import renderProjects from "./renderProjects.js";

let projects = [{title: "Work", description: "Go to work", todo: []}, {title: "Read", description: "Read some books", todo: []}];

class Project { //main constructor for Project
    constructor(title, description, date) {
        this.title = title,
        this.description = description,
        this.date = date;
        this.todo = []
    }
}

renderProjects(projects);

export { Project, projects };