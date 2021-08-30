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

/***/ "./src/Models/Bomb.ts":
/*!****************************!*\
  !*** ./src/Models/Bomb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bomb)\n/* harmony export */ });\n/* harmony import */ var _FallingSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FallingSprite */ \"./src/Models/FallingSprite.ts\");\n\nclass Bomb extends _FallingSprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas, context) {\n        super(canvas, context, './sprites/bomb.png');\n    }\n    updateState(game) {\n        this.move();\n        if (game.player.checkCollision(this)) {\n            game.endGame();\n        }\n        this.increaseSpeed();\n    }\n    increaseSpeed() {\n        this.speedY *= 1.0001;\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Bomb.ts?");

/***/ }),

/***/ "./src/Models/FallingSprite.ts":
/*!*************************************!*\
  !*** ./src/Models/FallingSprite.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FallingSprite)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Models/Sprite.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/Models/helpers.ts\");\n\n\nclass FallingSprite extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas, context, source) {\n        super(context, 0, 0, source);\n        this.canvas = canvas;\n        this.source = source;\n        const randomInitialPosition = this.generateRandomInitialPosition();\n        this.x = randomInitialPosition;\n        this.speedY = this.generateRandomSpeed();\n    }\n    move() {\n        this.y += this.speedY;\n    }\n    generateRandomSpeed() {\n        return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(3, 7);\n    }\n    generateRandomInitialPosition() {\n        const horizontalOrVertical = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.randomBoolean)();\n        if (horizontalOrVertical) {\n            const randomX = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(0, this.canvas.width);\n            return randomX;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/FallingSprite.ts?");

/***/ }),

/***/ "./src/Models/Fruit.ts":
/*!*****************************!*\
  !*** ./src/Models/Fruit.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _FallingSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FallingSprite */ \"./src/Models/FallingSprite.ts\");\n\nclass Fruit extends _FallingSprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas, context) {\n        super(canvas, context, './sprites/banana.png');\n        const fruit = this.whatFruitWillFall();\n        this.source = `./sprites/${fruit.name}.png`;\n    }\n    updateState(game) {\n        this.move();\n        if (game.player.checkCollision(this)) {\n            const fruit = this.whatFruitWillFall().name;\n            const fruitScore = this.whatFruitWillFall().score;\n            const newScore = game.score === 0 && fruit === 'banana'\n                ? 2\n                : fruit === 'banana'\n                    ? game.score * 2\n                    : game.score + fruitScore;\n            game.updateScore(newScore);\n            game.deleteDrawable(this);\n        }\n        this.increaseSpeed();\n    }\n    increaseSpeed() {\n        this.speedY *= 1.0001;\n    }\n    whatFruitWillFall() {\n        const probability = Math.ceil(Math.random() * 100);\n        if (probability <= 5) {\n            return { name: 'banana', score: 0 };\n        }\n        else if (probability <= 20) {\n            return { name: 'strawberry', score: 30 };\n        }\n        else if (probability <= 40) {\n            return { name: 'watermelon', score: 20 };\n        }\n        else if (probability <= 70) {\n            return { name: 'red-apple', score: 10 };\n        }\n        else if (probability <= 100) {\n            return { name: 'orange', score: 5 };\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Fruit.ts?");

/***/ }),

/***/ "./src/Models/Game.ts":
/*!****************************!*\
  !*** ./src/Models/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fruit */ \"./src/Models/Fruit.ts\");\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bomb */ \"./src/Models/Bomb.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Models/Player.ts\");\n\n\n\nclass Game {\n    constructor(screenWidth, screenHeight, canvas) {\n        this.canvas = canvas;\n        this.canvas.width = screenWidth;\n        this.canvas.height = screenHeight;\n        this.context = this.canvas.getContext('2d');\n        this.score = 0;\n    }\n    start() {\n        this.resetPlayerAndDrawables();\n        this.startIntervals();\n    }\n    onMouseMove(event) {\n        //change to keyboard\n        this.player.moveTo(event.clientX);\n    }\n    resetPlayerAndDrawables() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__.default(this.context, this.canvas.width / 2, this.canvas.height);\n        this.drawables = [];\n    }\n    updateScore(newScore) {\n        const element = document.querySelector('.score');\n        this.score = newScore;\n        element.innerText = 'Score: ' + this.score;\n    }\n    startIntervals() {\n        this.clearIntervals();\n        const { setInterval } = window;\n        this.intervalsIds = [\n            setInterval(() => this.gameLoop(), 1000 / 60),\n            setInterval(() => this.spawnBomb(), 2000),\n            setInterval(() => this.spawnFruit(), 1000),\n            // setInterval(() => this.spawnSuperFriend(), 2000),\n            setInterval(() => this.updateScore(this.score), 1000),\n        ];\n    }\n    clearIntervals() {\n        var _a;\n        (_a = this.intervalsIds) === null || _a === void 0 ? void 0 : _a.forEach(clearInterval);\n    }\n    gameLoop() {\n        this.updateState();\n        this.renderGame();\n    }\n    updateState() {\n        this.drawables.forEach(drawable => drawable.updateState(this));\n    }\n    renderGame() {\n        this.clearScreen();\n        this.player.draw();\n        this.drawables.forEach(drawable => drawable.draw());\n    }\n    spawnBomb() {\n        this.drawables.push(new _Bomb__WEBPACK_IMPORTED_MODULE_1__.default(this.canvas, this.context));\n    }\n    spawnFruit() {\n        this.drawables.push(new _Fruit__WEBPACK_IMPORTED_MODULE_0__.default(this.canvas, this.context));\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    deleteDrawable(drawable) {\n        this.drawables = this.drawables.filter(d => d !== drawable);\n    }\n    endGame() {\n        this.clearIntervals();\n        setTimeout(() => {\n            alert(`Fim do jogo! Você fez ${this.score} pontos!`);\n        }, 1500);\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Game.ts?");

/***/ }),

/***/ "./src/Models/Player.ts":
/*!******************************!*\
  !*** ./src/Models/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Models/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, initialX, initialY) {\n        super(context, initialX, initialY - 80, './sprites/alien.png');\n    }\n    moveTo(x) {\n        this.x = x;\n    }\n    checkCollision(sprite) {\n        const distanceY = this.y - 80 - (sprite.y + 60);\n        const distanceX = this.x === sprite.x;\n        return distanceY <= 0 && distanceX;\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Player.ts?");

/***/ }),

/***/ "./src/Models/Sprite.ts":
/*!******************************!*\
  !*** ./src/Models/Sprite.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, initialX, initialY, src) {\n        this.context = context;\n        this.x = initialX;\n        this.y = initialY;\n        this.src = src;\n    }\n    draw() {\n        const img = document.createElement('img');\n        img.src = this.src;\n        this.context.drawImage(img, this.x, this.y, 45, 60);\n    }\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/Sprite.ts?");

/***/ }),

/***/ "./src/Models/helpers.ts":
/*!*******************************!*\
  !*** ./src/Models/helpers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomIntFromInterval\": () => (/* binding */ randomIntFromInterval),\n/* harmony export */   \"randomBoolean\": () => (/* binding */ randomBoolean)\n/* harmony export */ });\nfunction randomIntFromInterval(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\nfunction randomBoolean() {\n    return Math.random() > 0.5;\n}\n\n\n//# sourceURL=webpack://banana/./src/Models/helpers.ts?");

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