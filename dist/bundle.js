/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("const canvas = document.getElementById('canvas01')\r\nconst ctx = canvas.getContext('2d')\r\n\r\ncanvas.width = canvas.parentElement.clientWidth\r\ncanvas.height = canvas.parentElement.clientHeight\r\n\r\nlet particlesArr = []\r\n\r\n// handle mouse\r\nconst mouse = {\r\n    x: null,\r\n    y: null,\r\n    radius: 150\r\n}\r\n\r\nwindow.addEventListener('mousemove', function(e) {\r\n    mouse.x = e.x\r\n    mouse.y = e.y\r\n    console.log(mouse.x, mouse.y)\r\n\r\n})\r\n\r\n\r\nclass Particle {\r\n    constructor(x, y) {\r\n        this.x = x\r\n        this.y = y\r\n        this.size = 3\r\n        this.baseX = this.x\r\n        this.baseY = this.y\r\n        this.density = ((Math.random() * 30) + 1)\r\n    }\r\n\r\n    draw() {\r\n        ctx.fillStyle = 'white'\r\n        ctx.beginPath()\r\n        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)\r\n        ctx.closePath()\r\n        ctx.fill()\r\n    }\r\n\r\n    update() {\r\n        let dx = mouse.x - this.x\r\n        let dy = mouse.x - this.y\r\n        let distance = Math.sqrt((dx * dx) + (dy * dy))\r\n        if(distance < 10) {\r\n            this.size = 10\r\n        }\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    particlesArr = []\r\n\r\n    for (let i = 0; i < 100; i++) {\r\n        let x = Math.random() * canvas.width\r\n        let y = Math.random() * canvas.height\r\n        particlesArr.push(new Particle(x, y))   \r\n    }\r\n    console.log(particlesArr)\r\n}\r\n\r\ninit()\r\n\r\nfunction animate() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\r\n    for (let i = 0; i < particlesArr.length; i++) {\r\n        particlesArr[i].draw()\r\n        particlesArr[i].update()\r\n    }\r\n    requestAnimationFrame(animate)\r\n}\r\n\r\nanimate()\n\n//# sourceURL=webpack://particles/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.js"]();
/******/ 	
/******/ })()
;