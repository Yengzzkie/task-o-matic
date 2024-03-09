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
  const anotherProject = new _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description);
  _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(anotherProject);
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


function addTodo(projectIndex) {
  if (projectIndex >= 0 && projectIndex < _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.length) {
    const project = _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex];
    project.todo.push("Do some cleaning");
    console.log(project.todo);
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
(0,_addTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2);
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


function renderProjects() {
    const mainContent = document.getElementById('app');

    mainContent.innerHTML = '';

    _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => { //loop through the array and console log the objects
        console.log(project);

        const projectTitle = project.title;
        const projectDescription = project.description;

        const titleContainer = document.createElement('h1');
        const descContainer = document.createElement('p');
        titleContainer.textContent = projectTitle;
        descContainer.textContent = projectDescription;

        mainContent.append(titleContainer, descContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7O0FBRXhDO0FBQ2YsNkJBQTZCLHNEQUFPO0FBQ3BDLEVBQUUsdURBQVE7QUFDVixjQUFjLHVEQUFRO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDhDOztBQUUvQjtBQUNmLDBDQUEwQyx1REFBUTtBQUNsRCxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1h5QztBQUNROztBQUVsQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEIsUUFBUSw4REFBYztBQUN0QixLQUFLOztBQUVMOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJpRDtBQUNSO0FBQ047O0FBRW5DLGlCQUFpQixtREFBbUQsR0FBRyx3REFBd0Q7O0FBRS9ILGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQVU7QUFDVix1REFBTztBQUNQLDhEQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZ0M7O0FBRS9CO0FBQ2Y7O0FBRUE7O0FBRUEsSUFBSSx1REFBUSxzQkFBc0I7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNXO0FBQ1I7O0FBRXpEO0FBQ0EsWUFBWSxPQUFPLEVBQUUsMEVBQWtCOztBQUV2Qzs7QUFFQSxJQUFJLHNFQUFjOztBQUVsQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9hZGRUb2RvLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9oYW5kbGVQcm9qZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3JlbmRlclByb2plY3RzLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBhbm90aGVyUHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIHByb2plY3RzLnB1c2goYW5vdGhlclByb2plY3QpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIGNvbnNvbGUubG9nKFwiTmV3IHByb2plY3Qgc3VjY2Vzc2Z1bHkgYWRkZWRcIik7XG59O1xuXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNb2R1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0SW5kZXgpIHtcbiAgaWYgKHByb2plY3RJbmRleCA+PSAwICYmIHByb2plY3RJbmRleCA8IHByb2plY3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHByb2plY3QudG9kby5wdXNoKFwiRG8gc29tZSBjbGVhbmluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG8pO1xuICAgIGNvbnNvbGUubG9nKFwiTmV3IHRhc2sgc3VjY2Vzc2Z1bHkgYWRkZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcHJvamVjdCBpbmRleC5cIik7XG4gIH1cbn0iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcmVuZGVyUHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdElucHV0KCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3REZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSwgcHJvamVjdERlc2NJbnB1dC52YWx1ZSk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LCBwcm9qZWN0RGVzY0lucHV0LCBhZGRCdXR0b24pXG5cbiAgICByZXR1cm4geyBmb3JtIH07XG59OyIsImltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkUHJvamVjdC5qc1wiO1xuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kby5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbe3RpdGxlOiBcIldvcmtcIiwgZGVzY3JpcHRpb246IFwiR28gdG8gd29ya1wiLCB0b2RvOiBbXX0sIHt0aXRsZTogXCJSZWFkXCIsIGRlc2NyaXB0aW9uOiBcIlJlYWQgc29tZSBib29rc1wiLCB0b2RvOiBbXX1dO1xuXG5jbGFzcyBQcm9qZWN0IHsgLy9tYWluIGNvbnN0cnVjdG9yIGZvciBQcm9qZWN0XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnRvZG8gPSBbXVxuICAgIH1cbn1cblxuYWRkUHJvamVjdChcIlN0dWR5XCIsIFwiTGVhcm4gbmV3IHRoaW5nc1wiKTtcbmFkZFRvZG8oMik7XG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbmV4cG9ydCB7IFByb2plY3QsIHByb2plY3RzIH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RNb2R1bGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHsgLy9sb29wIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjb25zb2xlIGxvZyB0aGUgb2JqZWN0c1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIGRlc2NDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb247XG5cbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBkZXNjQ29udGFpbmVyKTtcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RNb2R1bGUuanMnO1xuaW1wb3J0IGhhbmRsZVByb2plY3RJbnB1dCBmcm9tICcuL21vZHVsZXMvaGFuZGxlUHJvamVjdElucHV0LmpzJztcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtIH0gPSBoYW5kbGVQcm9qZWN0SW5wdXQoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuXG59XG5cbnJlbmRlcigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=