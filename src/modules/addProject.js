import { Project, projects } from "./projectModule.js";

export default function addProject(title, description) {
  const anotherProject = new Project(title, description);
  projects.push(anotherProject);
  console.log(projects);
};
