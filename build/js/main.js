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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ie-fix */ "./js/utils/ie-fix.js");
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ "./js/modules/scroll.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
/* harmony import */ var _modules_phone_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/phone-mask */ "./js/modules/phone-mask.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_init_modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/init-modals */ "./js/modules/init-modals.js");
/* harmony import */ var _modules_form_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/form-modal */ "./js/modules/form-modal.js");







 // Utils
// ---------------------------------

Object(_utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__["ieFix"])();
Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__["iosVhFix"])(); // Modules
// ---------------------------------

Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["initAccordion"])();
Object(_modules_phone_mask__WEBPACK_IMPORTED_MODULE_4__["initPhoneMask"])();
Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["initFormValidity"])();
Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_2__["initScroll"])();
Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_6__["initModals"])();
Object(_modules_form_modal__WEBPACK_IMPORTED_MODULE_7__["initFormModalValidity"])();

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/*! exports provided: initAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAccordion", function() { return initAccordion; });
var toggles = document.querySelectorAll('.main-footer__toggle');
var blocks = document.querySelectorAll('.main-footer__hide-block');
var breakpointLg = window.matchMedia('(max-width: 768px)');

var closeLists = function closeLists() {
  blocks.forEach(function (element) {
    element.classList.remove('main-footer__hide-block--js');
    element.style.maxHeight = 0;
  });
};

var deactivateToggles = function deactivateToggles() {
  toggles.forEach(function (element) {
    element.classList.remove('main-footer__toggle--active');
  });
};

var toggleBlock = function toggleBlock(block, toggle) {
  block.classList.toggle('main-footer__hide-block--js');
  toggle.classList.toggle('main-footer__toggle--active');
};

var initAccordion = function initAccordion() {
  if (breakpointLg.matches) {
    closeLists();
    deactivateToggles();
    toggles.forEach(function (btn, index) {
      btn.classList.remove('main-footer__toggle--no-js');
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (btn.classList.contains('main-footer__toggle--active')) {
          toggleBlock(blocks[index], btn);
        } else {
          closeLists();
          deactivateToggles();
          var maxHeight = blocks[index].style.maxHeight;
          blocks[index].style.maxHeight = maxHeight ? null : blocks[index].scrollHeight + 'px';
          toggleBlock(blocks[index], btn);
        }
      });
    });
  } else {
    blocks.forEach(function (element) {
      element.style.maxHeight = null;
    });
  }
};



/***/ }),

/***/ "./js/modules/form-modal.js":
/*!**********************************!*\
  !*** ./js/modules/form-modal.js ***!
  \**********************************/
/*! exports provided: initFormModalValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFormModalValidity", function() { return initFormModalValidity; });
/* harmony import */ var _validity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validity */ "./js/modules/validity.js");

var textInput = document.querySelector('.modal__content input[type="text"]');
var telInput = document.querySelector('.modal__content input[type="tel"]');
var message = document.querySelector('.modal__content textarea');
var buttonSubmit = document.querySelector('.modal__button');
var checkBox = document.querySelector('.modal__content input[type="checkbox"]');
var label = document.querySelector('.modal__content label');
var form = document.querySelector('.modal form');

var initFormModalValidity = function initFormModalValidity() {
  Object(_validity__WEBPACK_IMPORTED_MODULE_0__["initValidity"])(textInput, telInput, message, buttonSubmit, checkBox, label, form);
};



/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: initFormValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFormValidity", function() { return initFormValidity; });
/* harmony import */ var _validity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validity */ "./js/modules/validity.js");

var textInput = document.querySelector('.feedback__form input[type="text"]');
var telInput = document.querySelector('.feedback__form input[type="tel"]');
var message = document.querySelector('.feedback__form textarea');
var buttonSubmit = document.querySelector('.feedback__button');
var checkBox = document.querySelector('.feedback__form input[type="checkbox"]');
var label = document.querySelector('.feedback__field label');
var form = document.querySelector('.feedback form');

var initFormValidity = function initFormValidity() {
  Object(_validity__WEBPACK_IMPORTED_MODULE_0__["initValidity"])(textInput, telInput, message, buttonSubmit, checkBox, label, form);
};



/***/ }),

/***/ "./js/modules/init-modals.js":
/*!***********************************!*\
  !*** ./js/modules/init-modals.js ***!
  \***********************************/
/*! exports provided: initModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModals", function() { return initModals; });
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/modal */ "./js/utils/modal.js");

var modal = document.querySelector('.modal');
var modalButtons = document.querySelectorAll('.main-header__button');
var textInput = document.querySelector('.modal__content input[type="text"]');

var focusTextInput = function focusTextInput() {
  textInput.focus();
};

var initModals = function initModals() {
  if (modal && modalButtons.length) {
    Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modal, false, modalButtons, focusTextInput, false);
  }
};



/***/ }),

/***/ "./js/modules/phone-mask.js":
/*!**********************************!*\
  !*** ./js/modules/phone-mask.js ***!
  \**********************************/
/*! exports provided: initPhoneMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPhoneMask", function() { return initPhoneMask; });
var COUNTRY_CODE = '+7(';
var length = COUNTRY_CODE.length;

var onInputPhoneInput = function onInputPhoneInput(e) {
  var matrix = COUNTRY_CODE + '___) ___ __ __';
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = e.target.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  e.target.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

var onFocusPhoneInput = function onFocusPhoneInput(e) {
  if (!e.target.value) {
    e.target.value = COUNTRY_CODE;
    e.target.addEventListener('input', onInputPhoneInput);
    e.target.addEventListener('blur', onBlurPhoneInput);
    e.target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

var onKeydownPhoneInput = function onKeydownPhoneInput(e) {
  if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
    e.target.setSelectionRange(length, length);
  }

  if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
    e.preventDefault();
  }

  if (e.target.selectionStart === 1 && e.keyCode === 46) {
    e.preventDefault();
  }
};

var onBlurPhoneInput = function onBlurPhoneInput(e) {
  if (e.target.value === COUNTRY_CODE) {
    e.target.value = '';
    e.target.removeEventListener('input', onInputPhoneInput);
    e.target.removeEventListener('blur', onBlurPhoneInput);
  }
};

var initPhoneMask = function initPhoneMask() {
  var phoneInputs = document.querySelectorAll('[data-type="tel"]');

  if (phoneInputs.length) {
    phoneInputs.forEach(function (input) {
      input.addEventListener('focus', onFocusPhoneInput);
    });
  }
};



/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! exports provided: initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScroll", function() { return initScroll; });
var moveTo = new window.MoveTo({
  duration: 800,
  easing: 'easeOutQuart'
});

var initScroll = function initScroll() {
  var anchors = document.querySelectorAll('.js-trigger');

  if (anchors.length) {
    anchors.forEach(function (anchor) {
      moveTo.registerTrigger(anchor);
    });
  }
};



/***/ }),

/***/ "./js/modules/validity.js":
/*!********************************!*\
  !*** ./js/modules/validity.js ***!
  \********************************/
/*! exports provided: initValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initValidity", function() { return initValidity; });
var MIN_TEXT_LENGTH = 3;
var TEL_LENGTH = 17;
var isStorageSupport = true;
var storageText = '';
var storageTel = '';
var storageMessage = '';

var initValidity = function initValidity(name, tel, message, btn, checkbox, label, form) {
  try {
    storageText = localStorage.getItem('user-name');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageTel = localStorage.getItem('phone');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageMessage = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  if (isStorageSupport) {
    storageText = localStorage.getItem('user-name', name.value);
    storageTel = localStorage.getItem('phone', tel.value);
    storageMessage = localStorage.getItem('message', message.value);
    name.value = storageText;
    tel.value = storageTel;
    message.value = storageMessage;
  }

  if (btn) {
    btn.addEventListener('click', function (evt) {
      var isLengthOfText = true;
      var isLengthOfTel = true;

      if (name) {
        var nameUser = name.value;
        isLengthOfText = nameUser.length < MIN_TEXT_LENGTH;
      }

      if (tel) {
        var telUser = tel.value;
        isLengthOfTel = telUser.length !== TEL_LENGTH;
      }

      if (isLengthOfText) {
        evt.preventDefault();
        name.classList.add('js-invalid');
      } else if (isLengthOfTel) {
        evt.preventDefault();
        tel.classList.add('js-invalid');
      } else {
        name.classList.remove('js-invalid');
        tel.classList.remove('js-invalid');
      }

      name.reportValidity();
      tel.reportValidity();
    });
  }

  form.addEventListener('submit', function (evt) {
    if (!name.value || !tel.value || !checkbox.checked) {
      evt.preventDefault();
      name.classList.add('js-invalid');
      tel.classList.add('js-invalid');
      label.classList.add('js-unchecked');
    } else if (isStorageSupport) {
      localStorage.setItem('user-name', name.value);
      localStorage.setItem('phone', tel.value);
      localStorage.setItem('message', message.value);
    }
  });
};



/***/ }),

/***/ "./js/utils/ie-fix.js":
/*!****************************!*\
  !*** ./js/utils/ie-fix.js ***!
  \****************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */
var ieFix = function ieFix() {
  // Polyfills
  //---------------------------------
  // forEach
  // CustomEvent
  // includes
  // matches
  // closest
  // prepend
  // append
  // before
  // remove
  // startsWith
  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // closest


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
var isIos = function isIos() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (isIos()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ }),

/***/ "./js/utils/modal.js":
/*!***************************!*\
  !*** ./js/utils/modal.js ***!
  \***************************/
/*! exports provided: setupModal, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupModal", function() { return setupModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-lock */ "./js/utils/scroll-lock.js");


var openModal = function openModal(modal, callback, preventScrollLock) {
  modal.classList.add('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    Object(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableScrolling"])();
  }
};

var closeModal = function closeModal(modal, callback, preventScrollLock) {
  modal.classList.remove('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableScrolling"], 300);
  }
};

var onEscPress = function onEscPress(evt, modal, callback) {
  var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

var setModalListeners = function setModalListeners(modal, closeCallback, preventScrollLock) {
  var overlay = modal.querySelector('.modal__overlay');
  var closeBtn = modal.querySelector('.modal__close-btn');
  closeBtn.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  overlay.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  document.addEventListener('keydown', function (evt) {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });
};

var setupModal = function setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) {
  if (modalBtns) {
    modalBtns.forEach(function (btn) {
      btn.addEventListener('click', function (evt) {
        if (!noPrevDefault) {
          evt.preventDefault();
        }

        openModal(modal, openCallback, preventScrollLock);
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};



/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScrolling", function() { return disableScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScrolling", function() { return enableScrolling; });
var body = document.querySelector('body'); // eslint-disable-next-line consistent-return

var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  body.appendChild(outer);
  var inner = document.createElement('div');
  outer.appendChild(inner);
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  if (body.offsetHeight > window.innerHeight) {
    return scrollbarWidth;
  }
};

var getBodyScrollTop = function getBodyScrollTop() {
  return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
};

var disableScrolling = function disableScrolling(noScrollbar) {
  if (!noScrollbar) {
    var scrollWidth = getScrollbarWidth();
    body.setAttribute('style', "padding-right: ".concat(scrollWidth, "px;"));
  }

  body.dataset.scrollY = "".concat(getBodyScrollTop());
  body.style.top = "-".concat(body.dataset.scrollY, "px");
  body.classList.add('scroll-lock');
};

var enableScrolling = function enableScrolling() {
  body.removeAttribute('style');
  body.classList.remove('scroll-lock');
  window.scrollTo(0, +body.dataset.scrollY);
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map