import renderProjects from "./renderProjects.js";
import readPNG from '../assets/book.png';

// const readPNG = new Image();
// readPNG.src = bookPNG;

let projects = [{title: "Work", description: "Go to work", todo: []}, {title: "Read", description: "Read some books", image: readPNG, todo: []}];

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