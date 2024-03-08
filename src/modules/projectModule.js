
import renderProjects from "./renderProjects";

let projects = [{title: "Work", description: "Go to work", todo: []}, {title: "Read", description: "Read some books", todo: []}];

export default function projectModule() {
    class Project { //main constructor for Project
        constructor(title, description) {
            this.title = title,
            this.description = description,
            this.todo = []
        }
    }

    renderProjects(projects);

    // const newProject = new Project("Run", "Jog for 5 mins");
    //     projects.push(newProject);
    //     console.log(projects);
    //separate this to another module :)

    return Project;
};


