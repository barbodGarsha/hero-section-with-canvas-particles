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

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics */ \"./js/graphics.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ \"./js/globals.js\");\n\r\n\r\n\r\n_globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.addEventListener('mousemove', function(e) {\r\n\r\n    const target = e.target;\r\n\r\n    // Get the bounding rectangle of target\r\n    const rect = target.getBoundingClientRect();\r\n\r\n    // Mouse position\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mouse.x = e.clientX - rect.left;\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mouse.y = e.clientY - rect.top;\r\n\r\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.length; i++) {\r\n        if(_globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes[i].isMouseHover()) {\r\n            \r\n        }\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://particles/./js/events.js?");

/***/ }),

/***/ "./js/globals.js":
/*!***********************!*\
  !*** ./js/globals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst canvas = document.getElementById('canvas01')\r\nconst ctx = canvas.getContext('2d')\r\n\r\ncanvas.width = canvas.parentElement.clientWidth\r\ncanvas.height = canvas.parentElement.clientHeight\r\n\r\nlet shapes = []\r\n\r\nconst STEPS = 25\r\n\r\n// handle mouse\r\nconst mouse = {\r\n    x: null,\r\n    y: null,\r\n    radius: 50\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    STEPS,\r\n    mouse,\r\n    canvas,\r\n    ctx\r\n});\n\n//# sourceURL=webpack://particles/./js/globals.js?");

/***/ }),

/***/ "./js/graphics.js":
/*!************************!*\
  !*** ./js/graphics.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./js/globals.js\");\n\r\n\r\n\r\n\r\nclass Particle {\r\n    constructor(x, y, color) {\r\n        this.x = x\r\n        this.y = y\r\n        this.color = color\r\n        this.size = 3\r\n        this.baseX = this.x\r\n        this.baseY = this.y\r\n        this.density = ((Math.random() * 30) + 1)\r\n    }\r\n\r\n    draw() {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fillStyle = this.color\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.beginPath()\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.closePath()\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.fill()\r\n    }\r\n\r\n    update() {\r\n        let dx = _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.x - this.x\r\n        let dy = _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.y - this.y\r\n        let distance = Math.sqrt((dx * dx) + (dy * dy))\r\n\r\n        let forDirectionX = dx / distance\r\n        let forDirectionY = dy / distance\r\n\r\n        let maxDistance = _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.radius\r\n\r\n        let force = (maxDistance - distance) / maxDistance\r\n\r\n        let changeX = forDirectionX * force * this.density\r\n        let changeY = forDirectionY * force * this.density\r\n\r\n        if(distance < _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.radius + 10) {\r\n            this.x -= changeX\r\n            this.y -= changeY\r\n        }\r\n        else {\r\n            if(this.x != this.baseX) {\r\n                let dx = this.x - this.baseX\r\n                this.x -= dx/8\r\n            }\r\n            if(this.y != this.baseY) {\r\n                let dy = this.y - this.baseY\r\n                this.y -= dy/8\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Shapes =========\r\n\r\nclass Shape {\r\n    constructor(name) {\r\n        this.name = name\r\n    }\r\n\r\n    create_points(steps) {\r\n        return null\r\n    }\r\n\r\n    draw() {\r\n        for (let i = 0; i < this.coordinates.length; i++) {\r\n            this.coordinates[i].draw() \r\n            this.coordinates[i].update()\r\n        }\r\n    }\r\n\r\n    isMouseHover() {\r\n        return null\r\n    }\r\n}\r\n\r\nclass Rect extends Shape {\r\n    constructor(name, startX, startY, width, height, fill, color) {\r\n        super(name)\r\n\r\n        this.sX = startX\r\n        this.sY = startY\r\n\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.eX = this.sX + this.width\r\n        this.eY = this.sY + this.height\r\n\r\n        this.realStartX = null\r\n        this.realStartY = null\r\n        this.realEndX = null\r\n        this.realEndY = null\r\n       \r\n        this.fill = fill\r\n\r\n        this.coordinates = []\r\n        this.color = color\r\n    }\r\n\r\n    create_points(steps) {\r\n       \r\n        this.realStartX = this.sX * steps\r\n        this.realStartY = this.sY * steps\r\n        this.realEndX = this.eX * steps\r\n        this.realEndY = this.eY * steps\r\n        \r\n        let dx = this.eX - this.sX\r\n        let dy = this.eY - this.sY\r\n\r\n    \r\n        for (let i = 0; i <= dx; i++) {\r\n            for (let j = 0; j <= dy; j++) {\r\n                if(!this.fill) {\r\n                    if(j != 0 && j != dy) {            \r\n                        if(i != 0 && i != dx) {\r\n                            continue\r\n                        }\r\n                    }\r\n                }\r\n                this.coordinates.push(new Particle(this.realStartX + (i * steps), this.realStartY + (j * steps), this.color))\r\n            }\r\n        }\r\n    }\r\n\r\n    isMouseHover() {\r\n        if(_globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.x < this.realEndX && _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.x > this.realStartX) {\r\n            if(_globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.y < this.realEndY && _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouse.y > this.realStartY) {\r\n                return true\r\n            }   \r\n        }\r\n        \r\n        return false\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction draw() {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width, _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height)\r\n\r\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapes.length; i++) {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapes[i].draw()\r\n    }   \r\n}\r\n\r\n\r\nfunction animate() {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ctx.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.width, _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.height)\r\n\r\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapes.length; i++) {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shapes[i].draw()\r\n    }   \r\n    requestAnimationFrame(animate)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    draw,\r\n    animate,\r\n    Particle,\r\n    Shape, \r\n    Rect\r\n});\n\n//# sourceURL=webpack://particles/./js/graphics.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics */ \"./js/graphics.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ \"./js/globals.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ \"./js/events.js\");\n\r\n\r\n\r\n\r\nlet particlesArr = []\r\n\r\nfunction init() {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes = []\r\n   \r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', 0, 0, 5, 5, true, 'red'))\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', 3, 3, 5, 5, true, 'red'))\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.width / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 2, 0, 2, 2, true, 'red'))\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.width / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 5, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 5, 5, 5, true, 'green'))\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.width / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 7, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 7, 5, 5, false, 'red'))\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', 0, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS - 5, 5, 20, true, 'green'))\r\n\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.push(new _graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Rect('designs', 0, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS / 3 *  2, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.width / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS, _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].canvas.height / _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS / 4, true, 'yellow'))\r\n    //globals.shapes.push(new graphics.Rect('t2', 2, 2, 2, 2, true, 'green'))\r\n\r\n    for (let i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes.length; i++) {\r\n        _globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shapes[i].create_points(_globals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STEPS)        \r\n    }\r\n}\r\n\r\ninit()\r\n\r\n_graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw()\r\n\r\n\r\n_graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animate()\r\n\r\n\n\n//# sourceURL=webpack://particles/./js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;