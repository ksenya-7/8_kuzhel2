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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/vendor.js":
/*!**********************!*\
  !*** ./js/vendor.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_move_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/move-to */ "./js/vendor/move-to.js");
 // Vendor
// ---------------------------------

/***/ }),

/***/ "./js/vendor/move-to.js":
/*!******************************!*\
  !*** ./js/vendor/move-to.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var moveTo = function moveTo() {
  var MoveTo = function () {
    /**
     * Defaults
     * @type {object}
     */
    var defaults = {
      tolerance: 0,
      duration: 800,
      easing: 'easeOutQuart',
      container: window,
      callback: function callback() {}
    };
    /**
     * easeOutQuart Easing Function
     * @param  {number} t - current time
     * @param  {number} b - start value
     * @param  {number} c - change in value
     * @param  {number} d - duration
     * @return {number} - calculated value
     */

    function easeOutQuart(t, b, c, d) {
      t /= d;
      t--;
      return -c * (t * t * t * t - 1) + b;
    }
    /**
     * Merge two object
     *
     * @param  {object} obj1
     * @param  {object} obj2
     * @return {object} merged object
     */


    function mergeObject(obj1, obj2) {
      var obj3 = {};
      Object.keys(obj1).forEach(function (propertyName) {
        obj3[propertyName] = obj1[propertyName];
      });
      Object.keys(obj2).forEach(function (propertyName) {
        obj3[propertyName] = obj2[propertyName];
      });
      return obj3;
    }

    ;
    /**
     * Converts camel case to kebab case
     * @param  {string} val the value to be converted
     * @return {string} the converted value
     */

    function kebabCase(val) {
      return val.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
      });
    }

    ;
    /**
     * Count a number of item scrolled top
     * @param  {Window|HTMLElement} container
     * @return {number}
     */

    function countScrollTop(container) {
      if (container instanceof HTMLElement) {
        return container.scrollTop;
      }

      return container.pageYOffset;
    }

    ;
    /**
     * MoveTo Constructor
     * @param {object} options Options
     * @param {object} easeFunctions Custom ease functions
     */

    function MoveTo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.options = mergeObject(defaults, options);
      this.easeFunctions = mergeObject({
        easeOutQuart: easeOutQuart
      }, easeFunctions);
    }
    /**
     * Register a dom element as trigger
     * @param  {HTMLElement} dom Dom trigger element
     * @param  {function} callback Callback function
     * @return {function|void} unregister function
     */


    MoveTo.prototype.registerTrigger = function (dom, callback) {
      var _this = this;

      if (!dom) {
        return;
      }

      var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled

      var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
      var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));

      if (typeof callback === 'function') {
        options.callback = callback;
      }

      var listener = function listener(e) {
        e.preventDefault();

        _this.move(target, options);
      };

      dom.addEventListener('click', listener, false);
      return function () {
        return dom.removeEventListener('click', listener, false);
      };
    };
    /**
     * Move
     * Scrolls to given element by using easeOutQuart function
     * @param  {HTMLElement|number} target Target element to be scrolled or target position
     * @param  {object} options Custom options
     */


    MoveTo.prototype.move = function (target) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (target !== 0 && !target) {
        return;
      }

      options = mergeObject(this.options, options);
      var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
      var from = countScrollTop(options.container);
      var startTime = null;
      var lastYOffset;
      distance -= options.tolerance; // rAF loop

      var loop = function loop(currentTime) {
        var currentYOffset = countScrollTop(_this2.options.container);

        if (!startTime) {
          // To starts time from 1, we subtracted 1 from current time
          // If time starts from 1 The first loop will not do anything,
          // because easing value will be zero
          startTime = currentTime - 1;
        }

        var timeElapsed = currentTime - startTime;

        if (lastYOffset) {
          if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {
            return options.callback(target);
          }
        }

        lastYOffset = currentYOffset;

        var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);

        options.container.scroll(0, val);

        if (timeElapsed < options.duration) {
          window.requestAnimationFrame(loop);
        } else {
          options.container.scroll(0, distance + from);
          options.callback(target);
        }
      };

      window.requestAnimationFrame(loop);
    };
    /**
     * Adds custom ease function
     * @param {string}   name Ease function name
     * @param {function} fn   Ease function
     */


    MoveTo.prototype.addEaseFunction = function (name, fn) {
      this.easeFunctions[name] = fn;
    };
    /**
     * Returns options which created from trigger dom element
     * @param  {HTMLElement} dom Trigger dom element
     * @param  {object} options The instance's options
     * @return {object} The options which created from trigger dom element
     */


    function _getOptionsFromTriggerDom(dom, options) {
      var domOptions = {};
      Object.keys(options).forEach(function (key) {
        var value = dom.getAttribute("data-mt-".concat(kebabCase(key)));

        if (value) {
          domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
        }
      });
      return domOptions;
    }

    return MoveTo;
  }();

  window.MoveTo = MoveTo;
};

/* harmony default export */ __webpack_exports__["default"] = (moveTo());

/***/ })

/******/ });
//# sourceMappingURL=vendor.js.map