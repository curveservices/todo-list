/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blank-project.js":
/*!******************************!*\
  !*** ./src/blank-project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankProject: () => (/* binding */ blankProject)\n/* harmony export */ });\nconst blankProject = () => {\n    console.log(\"Called blankProject... creating blank project array\");\n\n    let projectsArray = [];\n    console.log('Pushing the title name of project to the projectArray...');\n    let projectTitle = \"House chores\";\n    projectsArray.push({ projectTitle });\n    console.log(projectsArray);\n    return { projectsArray, projectTitle };\n}\n\n//# sourceURL=webpack://todo-list/./src/blank-project.js?");

/***/ }),

/***/ "./src/blank-task.js":
/*!***************************!*\
  !*** ./src/blank-task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskCreated: () => (/* binding */ taskCreated)\n/* harmony export */ });\nconst taskCreated = () => {\n    console.log(\"Called blankProject... creating blank project array\");\n\n    let taskArray = [];\n    console.log('Pushing the title name of task to the taskArray...');\n    let taskTitle = \"Laundry day\";\n    // taskTitle.classList.add ('task-title');\n    taskArray.push({ taskTitle });\n    console.log(taskArray);\n    return { taskArray, taskTitle };\n}\n\n//# sourceURL=webpack://todo-list/./src/blank-task.js?");

/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTask: () => (/* binding */ displayTask)\n/* harmony export */ });\n\n//creating an array for ToDo, if needed down the line\nlet toDoArray = [];\n//factory function to create todo list\nconst displayTask = (title, description, dueDate, priority, checkList) => {\n    undefined.title = title,\n    undefined.author = author,\n    undefined.pages = pages,\n    undefined.read = read;\n\n    console.log('pushing this object to the todoArray');\n\n    console.log('Called createToDO module, creating todo now');\n\n    \n    console.log({ title, description, dueDate,priority,checkList});\n\n    \n\n    //TODO remove bottom 2 lines of code if array is not needed\n    // toDoArray.push({ title,description,dueDate,checkList });\n    // console.log(toDoArray);\n    // return{ title,description,dueDate,checkList };\n}\n\n//# sourceURL=webpack://todo-list/./src/create-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo */ \"./src/create-todo.js\");\n/* harmony import */ var _blank_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-task */ \"./src/blank-task.js\");\n/* harmony import */ var _blank_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-project */ \"./src/blank-project.js\");\n/* harmony import */ var _initial_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-dom */ \"./src/initial-dom.js\");\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popUp */ \"./src/popUp.js\");\n \n \n \n \n \n\n//call populateTask\n(0,_blank_project__WEBPACK_IMPORTED_MODULE_2__.blankProject)();\n\n//Click event Module\n(0,_popUp__WEBPACK_IMPORTED_MODULE_4__.formOpenOrClosed)()\n\n//Click event for displaying the form\n\n//Click event to add an item to the check list\n// const clearBtn = document.querySelector('.reset');\n// clearBtn.addEventListener('click', clearForm);\n\n// })();\n//call DOM manipulation module to control UI.\n;(0,_initial_dom__WEBPACK_IMPORTED_MODULE_3__.initialdom)();\n\n//call createToDo module and apply some objects/properties\n// const myToDo = createToDo('shopping run', 'got get shopping', '15/08/2023', 'low','yes');\n// const myToDo2 = createToDo('homework', 'do odin project work', '15/08/2023', 'medium', 'yes');\n// console.log('show me properies on mtToDo from index.js.....', myToDo)\n// console.log('show me properties from myToDo2 from index.js....', myToDo2);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initial-dom.js":
/*!****************************!*\
  !*** ./src/initial-dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialdom: () => (/* binding */ initialdom)\n/* harmony export */ });\n/* harmony import */ var _blank_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-project */ \"./src/blank-project.js\");\n/* harmony import */ var _blank_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-task */ \"./src/blank-task.js\");\n\n\n\n\n//DOM manipulation to display the UI components\nfunction initialdom () {\n\n    const taskContainer = document.querySelector('.right-container');\n    const projectContainer = document.querySelector('.project-container')\n    \n\n     //DOM for todo's loads\n    //  const tabTitle = document.createElement('h1');\n    //  tabTitle.classList.add ('tab-title');\n    //  taskContainer.appendChild(tabTitle);\n\n    // //DOM for adding Todo\n    // const taskBtn = document.createElement('div');\n    // taskBtn.classList.add ('add-task-btn');\n    // taskBtn.innerHTML = '<i class=\"fa-solid fa-circle-plus\"></i> Add Task';\n    // taskContainer.appendChild(taskBtn);\n\n    //DOM for the default project load\n    const projectTitle = document.createElement('h1')\n    projectTitle.textContent = 'Projects';\n    const projectBtn = document.createElement('div');\n    projectBtn.classList.add ('add-project-btn');\n    projectBtn.innerHTML = '<i class=\"fa-solid fa-circle-plus\"></i> Add Project';\n    projectContainer.appendChild(projectTitle);\n    projectContainer.appendChild(projectBtn);\n\n    const projectsInfoDiv = document.createElement('div');\n    projectsInfoDiv.classList.add (\"project-list\")\n    projectsInfoDiv.textContent = (0,_blank_project__WEBPACK_IMPORTED_MODULE_0__.blankProject)().projectTitle;\n    projectContainer.appendChild(projectsInfoDiv);\n\n    //DOM for taskload\n    const taskInfoDiv = document.createElement('div');\n    taskInfoDiv.classList.add \n    taskInfoDiv.textContent = (0,_blank_task__WEBPACK_IMPORTED_MODULE_1__.taskCreated)().taskTitle;\n    taskContainer.appendChild(taskInfoDiv);\n};\n\n\n // Dark mode\n const toggle = document.getElementById('toggle-dark');\n const body = document.querySelector('body');\n const header = document.querySelector('header');\n const formCard = document.querySelector('.card')\n const submitBtn = document.querySelector('.submit')\n\n toggle.addEventListener('click', function() {\n     this.classList.toggle('fa-moon');\n     if (this.classList.toggle('fa-sun')) {\n         body.style.background = 'var(--light-background)';\n         body.style.color = 'black';\n         body.style.transition = '0.2s';\n         header.style.background = 'var(--light-header)';\n         header.style.transition = '0.2s';\n     } else {\n         body.style.background = 'var(--dark-background)';\n         body.style.color = 'white';\n         body.style.transition = '0.2s';\n         header.style.background = 'var(--dark-header)';\n         header.style.transition = '0.2s';\n         formCard.style.background = 'var(--dark-background)';\n         submitBtn.style.background = 'var(--opposite-dark)';\n     }\n });\n \n\n//# sourceURL=webpack://todo-list/./src/initial-dom.js?");

/***/ }),

/***/ "./src/popUp.js":
/*!**********************!*\
  !*** ./src/popUp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formOpenOrClosed: () => (/* binding */ formOpenOrClosed)\n/* harmony export */ });\n//popup modal\nconst formOpenOrClosed = () => {\n    const newTask = document.querySelector('.add-task-btn');\n    const formCard = document.querySelector('.card');\n    const taskForm = document.querySelector('#form');\n    const overLay = document.querySelector('.over-lay');\n    const closeButton = document.querySelector('.close');\n    let formOpen;\n\n    newTask.addEventListener('click', () => {\n        if (formOpen) {\n            formCard.style.transform = 'scale(0)';\n            taskForm.reset();\n            overLay.style.opacity = 0;\n            formOpen = false;\n        } else {\n            formCard.style.transform = 'scale(1)';\n            overLay.style.opacity = 1;\n            formOpen = true;\n        }\n    });\n\n    closeButton.addEventListener('click', () => {\n        if (formOpen) {\n            formCard.style.transform = 'scale(0)';\n            taskForm.reset();\n            overLay.style.opacity = 0;\n            formOpen =false;\n        } else {\n            formCard.style.transform = 'scale(1)';\n            overLay.style.opacity = 1;\n            formOpen = true;\n        }\n    });\n};\n\n//form validation\nconst taskTitle = document.getElementById('title');\nconst titleError = document.querySelector('.title-error'); \ntaskTitle.addEventListener('input', () => {\n    taskTitle.value === '' ? titleError.textContent = '* Please enter a title' : titleError.textContent = '';\n});\n\nconst taskDescription = document.getElementById('description');\nconst descriptionError = document.querySelector('.description-error');\ntaskDescription.addEventListener('input', () => {\n    taskDescription.value === '' ? descriptionError.textContent = '* Please enter a description' : descriptionError.textContent = '';\n});\n\nconst priority = document.getElementById('priority');\nconst priorityError = document.querySelector('.priority-error');\npriority.addEventListener('input', () => {\n    priority.value === '' ? priorityError.textContent = '* Please select a priority' : priorityError.textContent= '';\n})\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/popUp.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;