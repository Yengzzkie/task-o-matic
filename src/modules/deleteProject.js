import renderProjects from "./renderProjects";

export default function deleteProject(projects, index) { //delete project function
    
    if (projects.length > 1) {
        projects.splice(index, 1);
        renderProjects();
    } else {
        alert('Oooopss')
    }
};