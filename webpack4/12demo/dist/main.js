/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/template.jpeg":
/*!**********************************!*\
  !*** ./src/assets/template.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=`data:image/jpeg;base64,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`\n\n//# sourceURL=webpack:///./src/assets/template.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const img = __webpack_require__(/*! ./assets/template.jpeg */ \"./src/assets/template.jpeg\");\n\nconsole.log(img);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });