/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/modules/projectModule.js");


function addProject(title, description) {
  const newProject = new _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description);
  _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);
  console.log(_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects);
  console.log("New project successfuly added");
};



/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/modules/projectModule.js");


function addTodo(projectIndex, addTaskInput) {

  if (projectIndex >= 0 && projectIndex < _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.length) {
    const project = _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex];
    project.todo.push(addTaskInput);
    console.log(project.todo);
    console.log(_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects);
    console.log("New task successfuly added");
  } else {
    console.error("Invalid project index.");
  }
}

/***/ }),

/***/ "./src/modules/handleProjectInput.js":
/*!*******************************************!*\
  !*** ./src/modules/handleProjectInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleProjectInput)
/* harmony export */ });
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ "./src/modules/addProject.js");
/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects.js */ "./src/modules/renderProjects.js");



function handleProjectInput() {
    const form = document.createElement('form');
    const projectTitleInput = document.createElement('input');
    const projectDescInput = document.createElement('input');
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTitleInput.value, projectDescInput.value);
        (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    form.append(projectTitleInput, projectDescInput, addButton)

    return { form };
};

/***/ }),

/***/ "./src/modules/projectModule.js":
/*!**************************************!*\
  !*** ./src/modules/projectModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects.js */ "./src/modules/renderProjects.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject.js */ "./src/modules/addProject.js");
/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodo.js */ "./src/modules/addTodo.js");




let projects = [{title: "Work", description: "Go to work", todo: []}, {title: "Read", description: "Read some books", todo: []}];

class Project { //main constructor for Project
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.todo = []
    }
}

(0,_addProject_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Study", "Learn new things");
// addTodo(2);
(0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);



/***/ }),

/***/ "./src/modules/renderProjects.js":
/*!***************************************!*\
  !*** ./src/modules/renderProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/modules/projectModule.js");
/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo.js */ "./src/modules/addTodo.js");



function renderProjects() {
    const mainContent = document.getElementById('app');
    mainContent.innerHTML = '';

    _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.map((project, index) => {
        const projectTitle = project.title;
        const projectDescription = project.description;

        const titleContainer = document.createElement('h1');
        const descContainer = document.createElement('p');
        titleContainer.textContent = projectTitle;
        descContainer.textContent = projectDescription;

        const addTaskInput = document.createElement('input');
        const addTodoButton = document.createElement('button');
        addTodoButton.textContent = 'Add Task';

        addTodoButton.addEventListener('click', () => {
            (0,_addTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(index, addTaskInput.value);
        });

        mainContent.append(titleContainer, descContainer, addTaskInput, addTodoButton);
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectModule.js */ "./src/modules/projectModule.js");
/* harmony import */ var _modules_handleProjectInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleProjectInput.js */ "./src/modules/handleProjectInput.js");
/* harmony import */ var _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderProjects.js */ "./src/modules/renderProjects.js");




function render() {
    const { form } = (0,_modules_handleProjectInput_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

    document.body.appendChild(form);

    (0,_modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

}

render();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7O0FBRXhDO0FBQ2YseUJBQXlCLHNEQUFPO0FBQ2hDLEVBQUUsdURBQVE7QUFDVixjQUFjLHVEQUFRO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDhDOztBQUUvQjs7QUFFZiwwQ0FBMEMsdURBQVE7QUFDbEQsb0JBQW9CLHVEQUFRO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDO0FBQ1E7O0FBRWxDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQixRQUFRLDhEQUFjO0FBQ3RCLEtBQUs7O0FBRUw7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmlEO0FBQ1I7QUFDTjs7QUFFbkMsaUJBQWlCLG1EQUFtRCxHQUFHLHdEQUF3RDs7QUFFL0gsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBVTtBQUNWO0FBQ0EsOERBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZ0M7QUFDWDs7QUFFcEI7QUFDZjtBQUNBOztBQUVBLElBQUksdURBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksdURBQU87QUFDbkIsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDVztBQUNSOztBQUV6RDtBQUNBLFlBQVksT0FBTyxFQUFFLDBFQUFrQjs7QUFFdkM7O0FBRUEsSUFBSSxzRUFBYzs7QUFFbEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvaGFuZGxlUHJvamVjdElucHV0LmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9wcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNb2R1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgY29uc29sZS5sb2coXCJOZXcgcHJvamVjdCBzdWNjZXNzZnVseSBhZGRlZFwiKTtcbn07XG5cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKHByb2plY3RJbmRleCwgYWRkVGFza0lucHV0KSB7XG5cbiAgaWYgKHByb2plY3RJbmRleCA+PSAwICYmIHByb2plY3RJbmRleCA8IHByb2plY3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHByb2plY3QudG9kby5wdXNoKGFkZFRhc2tJbnB1dCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2RvKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2coXCJOZXcgdGFzayBzdWNjZXNzZnVseSBhZGRlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBwcm9qZWN0IGluZGV4LlwiKTtcbiAgfVxufSIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL2FkZFByb2plY3QuanNcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0SW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlLCBwcm9qZWN0RGVzY0lucHV0LnZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQsIHByb2plY3REZXNjSW5wdXQsIGFkZEJ1dHRvbilcblxuICAgIHJldHVybiB7IGZvcm0gfTtcbn07IiwiaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3JlbmRlclByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvLmpzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFt7dGl0bGU6IFwiV29ya1wiLCBkZXNjcmlwdGlvbjogXCJHbyB0byB3b3JrXCIsIHRvZG86IFtdfSwge3RpdGxlOiBcIlJlYWRcIiwgZGVzY3JpcHRpb246IFwiUmVhZCBzb21lIGJvb2tzXCIsIHRvZG86IFtdfV07XG5cbmNsYXNzIFByb2plY3QgeyAvL21haW4gY29uc3RydWN0b3IgZm9yIFByb2plY3RcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXG4gICAgICAgIHRoaXMudG9kbyA9IFtdXG4gICAgfVxufVxuXG5hZGRQcm9qZWN0KFwiU3R1ZHlcIiwgXCJMZWFybiBuZXcgdGhpbmdzXCIpO1xuLy8gYWRkVG9kbygyKTtcbnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdE1vZHVsZS5qcyc7XG5pbXBvcnQgYWRkVG9kbyBmcm9tICcuL2FkZFRvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IGRlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBkZXNjQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdERlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICAgICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRvZG8oaW5kZXgsIGFkZFRhc2tJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgZGVzY0NvbnRhaW5lciwgYWRkVGFza0lucHV0LCBhZGRUb2RvQnV0dG9uKTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdE1vZHVsZS5qcyc7XG5pbXBvcnQgaGFuZGxlUHJvamVjdElucHV0IGZyb20gJy4vbW9kdWxlcy9oYW5kbGVQcm9qZWN0SW5wdXQuanMnO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IGhhbmRsZVByb2plY3RJbnB1dCgpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG5cbn1cblxucmVuZGVyKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==