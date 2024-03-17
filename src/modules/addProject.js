import { Project, projects } from "./projectModule.js";

export default function addProject(title, description, date) {
  const newProject = new Project(title, description, date);
  projects.unshift(newProject);
  console.log(projects);
  console.log("New project successfuly added");
};

