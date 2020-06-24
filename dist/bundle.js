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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/*! exports provided: Menu, toggleHeader, backToTop, smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleHeader\", function() { return toggleHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backToTop\", function() { return backToTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothScroll\", function() { return smoothScroll; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Menu\nvar hamburger = document.querySelector(\".hamburger\");\nvar mobileNav = document.querySelector(\".mobile-nav\"); // open or close the mobile nav\n\nfunction nav(state) {\n  if (state) {\n    mobileNav.style.right = \"0px\";\n  } else if (!state) {\n    mobileNav.style.right = \"-236px\";\n  }\n}\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu(type) {\n    _classCallCheck(this, Menu);\n\n    this.type = type;\n  }\n\n  _createClass(Menu, [{\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      hamburger.classList.add(this.type);\n      hamburger.addEventListener(\"click\", function () {\n        if (this.classList.contains(\"is-active\")) {\n          this.classList.remove(\"is-active\");\n          nav(false);\n        } else {\n          this.classList.add(\"is-active\");\n          nav(true);\n        }\n      });\n    }\n  }]);\n\n  return Menu;\n}();\nfunction toggleHeader() {\n  var prevPosition = window.pageYOffset;\n  var header = document.querySelector(\"header\");\n  window.addEventListener(\"scroll\", function () {\n    var currPosition = window.pageYOffset;\n\n    if (mediaQuery(1024)) {\n      if (currPosition == \"0\") {\n        header.style.background = \"transparent\";\n        header.classList.remove(\"header-active\");\n      }\n    }\n\n    if (prevPosition > currPosition) {\n      header.style.top = \"10px\";\n    } else {\n      header.style.top = \"-\".concat(header.offsetHeight, \"px\");\n      header.style.background = \"#fff\";\n      header.classList.add(\"header-active\");\n    }\n\n    prevPosition = currPosition;\n  });\n}\nfunction backToTop() {\n  window.addEventListener(\"scroll\", function () {\n    var currPosition = window.pageYOffset;\n    var button = document.querySelector(\".back-to-top\");\n    currPosition > 1000 ? button.style.right = \"30px\" : button.style.right = \"-38px\";\n  });\n}\n\nfunction mediaQuery(size) {\n  if (window.matchMedia(\"(min-width: \".concat(size, \"px)\")).matches) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction smoothScroll() {\n  // smooth scroll\n  $('a[href*=\\\\#]').on('click', function (event) {\n    event.preventDefault();\n    $('html,body').animate({\n      scrollTop: $(this.hash).offset().top\n    }, 800);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/global.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ \"./src/js/global.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ \"./src/js/validation.js\");\n\n // header\n\nvar m = new _global_js__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"](\"hamburger--spin-r\");\nm.toggleMenu();\nObject(_global_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleHeader\"])();\nObject(_global_js__WEBPACK_IMPORTED_MODULE_0__[\"backToTop\"])(); // smooth scroll\n\nObject(_global_js__WEBPACK_IMPORTED_MODULE_0__[\"smoothScroll\"])(); // parallax\n\nvar rellax = new Rellax(\".rellax\"); // animate on scroll\n\nAOS.init(); // validation\n\nvar v = new _validation_js__WEBPACK_IMPORTED_MODULE_1__[\"Validation\"]();\nv.isValid(\"#name\", /^[a-z ,.'-]+$/i);\nv.isValid(\"#email\", /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/);\nv.isValid(\"#message\", /^\\s*\\S+.*/); // carousel\n\n$(\".carousel\").slick({\n  autoplay: true,\n  dots: true,\n  pauseOnFocus: false,\n  pauseOnHover: false,\n  arrows: false\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validation\", function() { return Validation; });\n// constructor\nvar Validation = function Validation() {}; // method - validate regular expression\n\nValidation.prototype.isValid = function (id, regex) {\n  var inputType = $(id);\n  var regExp = regex;\n  var error = id + \"Error\";\n  inputType.on(\"blur\", function () {\n    if (!regExp.test(inputType.val())) {\n      $(this).css(\"border\", \"1px solid red\");\n      $(error).show();\n    } else {\n      $(this).css(\"border\", \"1px solid #ccc\");\n      $(error).hide();\n    }\n  });\n  inputType.on(\"focus\", function () {\n    if (regExp.test(inputType.val())) {\n      $(this).css(\"border\", \"1px solid #ccc\");\n      $(error).hide();\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/js/validation.js?");

/***/ })

/******/ });