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

/***/ "./src/Models/Game.ts":
/*!****************************!*\
  !*** ./src/Models/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Models/Player.ts\");\n\nclass Game {\n    constructor(screenWidth, screenHeight, canvas) {\n        this.canvas = canvas;\n        this.canvas.width = screenWidth;\n        this.canvas.height = screenHeight;\n        this.context = this.canvas.getContext('2d');\n    }\n    start() {\n        console.log('iniciou');\n        this.resetPlayerAndDrawables();\n        this.startIntervals();\n    }\n    onMouseMove(event) {\n        this.player.moveTo(event.clientX);\n    }\n    // onKeydownMove(event: KeyboardEvent) {\n    //   this.player.\n    // }\n    resetPlayerAndDrawables() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.context, this.canvas.width / 2, this.canvas.height);\n    }\n    startIntervals() {\n        this.clearIntervals();\n        const { setInterval } = window;\n        this.intervalsIds = [\n            setInterval(() => this.gameLoop(), 1000 / 120),\n            // setInterval(() => this.spawnEnemy(), 2000),\n            // setInterval(() => this.spawnFriend(), 1000),\n            // setInterval(() => this.spawnSuperFriend(), 2000),\n            // setInterval(() => this.updateScore(this.score + 0.1), 30),\n        ];\n    }\n    clearIntervals() {\n        var _a;\n        (_a = this.intervalsIds) === null || _a === void 0 ? void 0 : _a.forEach(clearInterval);\n    }\n    gameLoop() {\n        this.renderGame();\n    }\n    renderGame() {\n        this.clearScreen();\n        this.player.draw();\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Game.ts?");

/***/ }),

/***/ "./src/Models/Player.ts":
/*!******************************!*\
  !*** ./src/Models/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Models/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, initialX, initialY) {\n        super(context, initialX, initialY, './sprites/alien.png');\n    }\n    moveTo(x) {\n        this.x = x;\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Player.ts?");

/***/ }),

/***/ "./src/Models/Sprite.ts":
/*!******************************!*\
  !*** ./src/Models/Sprite.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, initialX, initialY, src) {\n        this.context = context;\n        this.x = initialX;\n        this.y = initialY;\n        this.src = src;\n    }\n    draw() {\n        const img = document.createElement('img');\n        img.src = this.src;\n        img.addEventListener('load', () => {\n            this.context.drawImage(img, this.x - 45, this.y - 80, 45, 60);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Sprite.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/Game */ \"./src/Models/Game.ts\");\n\nconst screenWidth = window.innerWidth;\nconst screenHeight = window.innerHeight;\nconst canvas = document.querySelector('#canvas');\n// const img = document.createElement('img');\n// img.src = './sprites/alien.png';\n// img.addEventListener('load', () => {\n//   context.drawImage(img, 10, 10);\n// });\nconst game = new _Models_Game__WEBPACK_IMPORTED_MODULE_0__.default(screenWidth, screenHeight, canvas);\ngame.start();\ncanvas.addEventListener('mousemove', (event) => {\n    game.onMouseMove(event);\n});\n\n\n//# sourceURL=webpack://banana/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;