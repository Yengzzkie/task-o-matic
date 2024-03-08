
let projects = [{title: "Work", description: "Go to work"}, {title: "Read", description: "Read some books"}];

export default function projectModule() {
    class Project { //main constructor for Project
        constructor(title, description) {
            this.title = title,
            this.description = description
        }
    }

    projects.forEach(project => { //loop through the array and console log the objects
        console.log(project);
    });

    const newProject = new Project("Run", "Jog for 5 mins");
        projects.push(newProject);
        console.log(projects);

    return Project;
};


