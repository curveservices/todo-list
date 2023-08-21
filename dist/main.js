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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankProject: () => (/* binding */ blankProject)\n/* harmony export */ });\nconst blankProject = () => {\n    console.log(\"Called blankProject... creating blank project array\");\n\n    let projectsArray = [];\n    console.log('Pushing the title name of project to the projectArray...');\n    let projectTitle = \"Default Project\";\n    projectsArray.push({ projectTitle });\n    console.log(projectsArray);\n    return { projectsArray, projectTitle };\n}\n\n//# sourceURL=webpack://todo-list/./src/blank-project.js?");

/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDo: () => (/* binding */ createToDo)\n/* harmony export */ });\n//creating an array for ToDo, if needed down the line\nlet toDoArray = [];\n\n//factory function to create todo list\nconst createToDo = (Title, Description, DueDate, Priority, checkList) => {\n    console.log('Called createToDO module, creating todo now');\n    console.log({ Title, Description, DueDate,Priority,checkList});\n    console.log('pushing this object to the todoArray');\n\n    //TODO remove bottom 2 lines of code if array is not needed\n    toDoArray.push({ Title,Description,DueDate,checkList });\n    console.log(toDoArray);\n    return{ Title,Description,DueDate,checkList };\n}\n\n//# sourceURL=webpack://todo-list/./src/create-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo */ \"./src/create-todo.js\");\n/* harmony import */ var _blank_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-project */ \"./src/blank-project.js\");\n/* harmony import */ var _initial_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-dom */ \"./src/initial-dom.js\");\nalert('hello');\n \n \n \n\n //call blankProject\n (0,_blank_project__WEBPACK_IMPORTED_MODULE_1__.blankProject)();\n\n //call DOM manipulation module to control UI.\n (0,_initial_dom__WEBPACK_IMPORTED_MODULE_2__.initialdom)();\n\n//call createToDo module and apply some objects/properties\nconst myToDo = (0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createToDo)('shopping run', 'got get shopping', '15/08/2023', 'low','yes');\nconst myToDo2 = (0,_create_todo__WEBPACK_IMPORTED_MODULE_0__.createToDo)('homework', 'do odin project work', '15/08/2023', 'medium', 'yes');\nconsole.log('show me properies on mtToDo from index.js.....', myToDo)\nconsole.log('show me properties from myToDo2 from index.js....', myToDo2);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initial-dom.js":
/*!****************************!*\
  !*** ./src/initial-dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialdom: () => (/* binding */ initialdom)\n/* harmony export */ });\n/* harmony import */ var _blank_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-project */ \"./src/blank-project.js\");\n\n\n//DOM manipulation to display the UI components\nfunction initialdom () {\n\n    //DOM for Heading\n    const content = document.querySelector('.content');\n    const heading = document.createElement('h1');\n    heading.textContent = 'To-Do WebApp';\n    content.appendChild(heading);\n\n    //DOM for the default project load\n    const projectsInfoDiv = document.createElement('div');\n    projectsInfoDiv.textContent = (0,_blank_project__WEBPACK_IMPORTED_MODULE_0__.blankProject)().projectTitle;\n    content.appendChild(projectsInfoDiv);\n};\n\n\n//# sourceURL=webpack://todo-list/./src/initial-dom.js?");

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