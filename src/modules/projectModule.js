import renderProjects from "./renderProjects.js";
import personalPNG from '../assets/personal.png';
import readPNG from '../assets/book.png';
import workPNG from '../assets/work.png';
import healthPNG from '../assets/health.png';
import socialPNG from '../assets/social.png';
import hobbiesPNG from '../assets/hobby.png';
import financePNG from '../assets/finance.png';
import groceryPNG from '../assets/grocery.png';
import otherPNG from '../assets/other.png';

let projects = [{title: "Personal", description: "Personal stuff", image: personalPNG, todo: ["something personal", "Test 1"]}, {title: "Work", description: "Go to work", image: workPNG, todo: ["test 2"]}, {title: "Study", description: "Read some books", image: readPNG, todo: []}, {title: "Health", description: "Healthy Living", image: healthPNG, todo: []}, {title: "Social", description: "Anything about socializing", image: socialPNG, todo: []}, {title: "Hobbies", description: "Anything about hobbies", image: hobbiesPNG, todo: []}, {title: "Finance", description: "All about money", image: financePNG, todo: []}, {title: "Grocery", description: "Stock up those shelves", image: groceryPNG, todo: []}, {title: "Other", description: "Other stuff you may think of", image: otherPNG, todo: []}];

class Project { //main constructor for Project
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.todo = []
    }
}

renderProjects(projects);

export { Project, projects };