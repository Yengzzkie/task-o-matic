/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/modules/projectModule.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks.js */ "./src/modules/renderTasks.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__);



function addTodo(projectIndex, addTaskInput) {

  if (projectIndex >= 0 && projectIndex < _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.length) {
    const project = _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex];
    project.todo.push(addTaskInput);

    console.log(project)
    console.log("New task successfuly added");
 
  } else {
    console.error("Invalid project index.");
  }

};

/***/ }),

/***/ "./src/modules/handleProjectInput.js":
/*!*******************************************!*\
  !*** ./src/modules/handleProjectInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

// addTodo(2);
(0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);



/***/ }),

/***/ "./src/modules/renderProjects.js":
/*!***************************************!*\
  !*** ./src/modules/renderProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/modules/projectModule.js");
/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo.js */ "./src/modules/addTodo.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks.js */ "./src/modules/renderTasks.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_renderTasks_js__WEBPACK_IMPORTED_MODULE_2__);




function renderProjects() {
    const mainContent = document.getElementById('app');
    
    mainContent.innerHTML = '';

    _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.projects.map((project, index) => {
        const projectContainer = document.createElement('div');
        const projectTitle = project.title;
        const projectDescription = project.description;

        const titleContainer = document.createElement('h1');
        const descContainer = document.createElement('p');
        titleContainer.textContent = projectTitle;
        descContainer.textContent = projectDescription;

        const addTaskInput = document.createElement('input');
        const addTaskButton = document.createElement('button');
        addTaskButton.textContent = 'Add Task';

        const ul = document.createElement('ul');
        
        const tasks = project.todo;

        addTaskButton.addEventListener('click', () => {
            (0,_addTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(index, addTaskInput.value);
            renderTodo();
        });

        function renderTodo() {
            ul.innerHTML = ''; // Clear the previous content

            tasks.map((task) => {    
                const li = document.createElement('li');
                li.textContent = task;
                ul.appendChild(li);
            });

            console.log(tasks);
        }

        renderTodo(); //initialize the todo array on each project
                    //so everytime a new project is added, the todo array will rerender on each project object

        projectContainer.append(titleContainer, descContainer, addTaskInput, ul);

        mainContent.append(projectContainer, addTaskButton);
    });
};


/***/ }),

/***/ "./src/modules/renderTasks.js":
/*!************************************!*\
  !*** ./src/modules/renderTasks.js ***!
  \************************************/
/***/ (() => {

// import { projects } from './projectModule.js';

// export default function renderTasks(index) {
    
//     projects.map((project) => {

//         const tasks = projects[index];

//         const ul = document.createElement('ul');
//         const li = document.createElement('li');
//         li.textContent = project.todo;
//         console.log(project);

//         ul.appendChild(li);

//         return li;
//     })

// }



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7O0FBRXhDO0FBQ2YseUJBQXlCLHNEQUFPO0FBQ2hDLEVBQUUsdURBQVE7QUFDVixjQUFjLHVEQUFRO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDhDO0FBQ0g7O0FBRTVCOztBQUVmLDBDQUEwQyx1REFBUTtBQUNsRCxvQkFBb0IsdURBQVE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ5QztBQUNRO0FBQ0o7O0FBRTlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQixRQUFRLDhEQUFjO0FBQ3RCLEtBQUs7O0FBRUw7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJpRDtBQUNSO0FBQ047O0FBRW5DLGlCQUFpQixtREFBbUQsR0FBRyx3REFBd0Q7O0FBRS9ILGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ1g7QUFDUTs7QUFFNUI7QUFDZjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx1REFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBTztBQUNuQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNuREEsWUFBWSxXQUFXOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOzs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ1c7QUFDUjs7QUFFekQ7QUFDQSxZQUFZLE9BQU8sRUFBRSwwRUFBa0I7O0FBRXZDOztBQUVBLElBQUksc0VBQWM7O0FBRWxCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hhbmRsZVByb2plY3RJbnB1dC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcHJvamVjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3JlbmRlclRhc2tzLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0TW9kdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIGNvbnNvbGUubG9nKFwiTmV3IHByb2plY3Qgc3VjY2Vzc2Z1bHkgYWRkZWRcIik7XG59O1xuXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNb2R1bGUuanNcIjtcbmltcG9ydCByZW5kZXJUYXNrcyBmcm9tIFwiLi9yZW5kZXJUYXNrcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKHByb2plY3RJbmRleCwgYWRkVGFza0lucHV0KSB7XG5cbiAgaWYgKHByb2plY3RJbmRleCA+PSAwICYmIHByb2plY3RJbmRleCA8IHByb2plY3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIHByb2plY3QudG9kby5wdXNoKGFkZFRhc2tJbnB1dCk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgIGNvbnNvbGUubG9nKFwiTmV3IHRhc2sgc3VjY2Vzc2Z1bHkgYWRkZWRcIik7XG4gXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcHJvamVjdCBpbmRleC5cIik7XG4gIH1cblxufTsiLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcmVuZGVyUHJvamVjdHMuanNcIjtcbmltcG9ydCByZW5kZXJUb2RvIGZyb20gJy4vcmVuZGVyUHJvamVjdHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0SW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlLCBwcm9qZWN0RGVzY0lucHV0LnZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQsIHByb2plY3REZXNjSW5wdXQsIGFkZEJ1dHRvbilcblxuICAgIHJldHVybiB7IGZvcm0gfTtcbn07IiwiaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3JlbmRlclByb2plY3RzLmpzXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvLmpzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFt7dGl0bGU6IFwiV29ya1wiLCBkZXNjcmlwdGlvbjogXCJHbyB0byB3b3JrXCIsIHRvZG86IFtdfSwge3RpdGxlOiBcIlJlYWRcIiwgZGVzY3JpcHRpb246IFwiUmVhZCBzb21lIGJvb2tzXCIsIHRvZG86IFtdfV07XG5cbmNsYXNzIFByb2plY3QgeyAvL21haW4gY29uc3RydWN0b3IgZm9yIFByb2plY3RcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXG4gICAgICAgIHRoaXMudG9kbyA9IFtdXG4gICAgfVxufVxuXG4vLyBhZGRUb2RvKDIpO1xucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXG5leHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0TW9kdWxlLmpzJztcbmltcG9ydCBhZGRUb2RvIGZyb20gJy4vYWRkVG9kby5qcyc7XG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSAnLi9yZW5kZXJUYXNrcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIFxuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCBkZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgZGVzY0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC50b2RvO1xuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb2RvKGluZGV4LCBhZGRUYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJUb2RvKCkge1xuICAgICAgICAgICAgdWwuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBwcmV2aW91cyBjb250ZW50XG5cbiAgICAgICAgICAgIHRhc2tzLm1hcCgodGFzaykgPT4geyAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJUb2RvKCk7IC8vaW5pdGlhbGl6ZSB0aGUgdG9kbyBhcnJheSBvbiBlYWNoIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgLy9zbyBldmVyeXRpbWUgYSBuZXcgcHJvamVjdCBpcyBhZGRlZCwgdGhlIHRvZG8gYXJyYXkgd2lsbCByZXJlbmRlciBvbiBlYWNoIHByb2plY3Qgb2JqZWN0XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGl0bGVDb250YWluZXIsIGRlc2NDb250YWluZXIsIGFkZFRhc2tJbnB1dCwgdWwpO1xuXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyLCBhZGRUYXNrQnV0dG9uKTtcbiAgICB9KTtcbn07XG4iLCIvLyBpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdE1vZHVsZS5qcyc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKGluZGV4KSB7XG4gICAgXG4vLyAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG5cbi8vICAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0c1tpbmRleF07XG5cbi8vICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuLy8gICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4vLyAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdC50b2RvO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuLy8gICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbi8vICAgICAgICAgcmV0dXJuIGxpO1xuLy8gICAgIH0pXG5cbi8vIH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RNb2R1bGUuanMnO1xuaW1wb3J0IGhhbmRsZVByb2plY3RJbnB1dCBmcm9tICcuL21vZHVsZXMvaGFuZGxlUHJvamVjdElucHV0LmpzJztcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtIH0gPSBoYW5kbGVQcm9qZWN0SW5wdXQoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuXG59XG5cbnJlbmRlcigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=