import { Project, projects } from "./projectModule.js";

export default function addProject(title, description) {
  const newProject = new Project(title, description);
  projects.push(newProject);
  console.log(projects);
  console.log("New project successfuly added");
};

