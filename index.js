(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GenerateHash.ts":
/*!*****************************!*\
  !*** ./src/GenerateHash.ts ***!
  \*****************************/
/*! exports provided: generateHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHash\", function() { return generateHash; });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction generateHash({ value, algorithm, encoding }) {\r\n    const hasher = Object(crypto__WEBPACK_IMPORTED_MODULE_0__[\"createHash\"])(algorithm);\r\n    hasher.update(value);\r\n    const hash = hasher.digest(encoding);\r\n    return hash;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/GenerateHash.ts?");

/***/ }),

/***/ "./src/GracefulExit.ts":
/*!*****************************!*\
  !*** ./src/GracefulExit.ts ***!
  \*****************************/
/*! exports provided: initialiseGracefulExitHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialiseGracefulExitHandler\", function() { return initialiseGracefulExitHandler; });\n/* harmony import */ var _ChrisTalman_isomorphic_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ChrisTalman/isomorphic-utilities */ \"@ChrisTalman/isomorphic-utilities\");\n/* harmony import */ var _ChrisTalman_isomorphic_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChrisTalman_isomorphic_utilities__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst GRACEFUL_EXIT_SIGNAL = Object(_ChrisTalman_isomorphic_utilities__WEBPACK_IMPORTED_MODULE_0__[\"mirror\"])({\r\n    SIGTERM: true,\r\n    SIGINT: true\r\n});\r\nconst GRACEFUL_EXIT_SIGNALS = Object.values(GRACEFUL_EXIT_SIGNAL);\r\nfunction initialiseGracefulExitHandler(handleGracefulExit) {\r\n    for (let signal of GRACEFUL_EXIT_SIGNALS) {\r\n        process.on(signal, handleGracefulExit);\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/GracefulExit.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: initialiseGracefulExitHandler, generateHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GracefulExit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GracefulExit */ \"./src/GracefulExit.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialiseGracefulExitHandler\", function() { return _GracefulExit__WEBPACK_IMPORTED_MODULE_0__[\"initialiseGracefulExitHandler\"]; });\n\n/* harmony import */ var _GenerateHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateHash */ \"./src/GenerateHash.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateHash\", function() { return _GenerateHash__WEBPACK_IMPORTED_MODULE_1__[\"generateHash\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "@ChrisTalman/isomorphic-utilities":
/*!****************************************************!*\
  !*** external "@ChrisTalman/isomorphic-utilities" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ChrisTalman/isomorphic-utilities\");\n\n//# sourceURL=webpack:///external_%22@ChrisTalman/isomorphic-utilities%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ })

/******/ });
});