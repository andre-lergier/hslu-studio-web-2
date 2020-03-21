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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scss/style.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/style.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/scss/style.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Playfair+Display:400,600,700,800,900&display=swap);"]);
// Module
exports.push([module.i, "*,*::after,*::before{box-sizing:border-box}:root{--font-serif: 'Playfair Display', serif}html{--color-primary: #538797;--color-2: #c2d9cd;--color-3: #ff842a;--color-4: #fed55d;--color-5: #fcfaf1;--color-background: #fff;--color-text: #161719;--color-light-grey: #f4f4f4;--color-light-grey-darken: #eee;--color-dark-grey: #666}html.deviceIdentificationTriggered,html.darkMode{--color-background: #161719;--color-text: #fff;--color-light-grey: #2c2c2e;--color-light-grey-darken: #3a3a3c;--color-dark-grey: #636366;--color-dark-grey: #8e8e93}body{margin:0;padding:0;font-size:1rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;background:var(--color-background);color:var(--color-text);transition:all .5s ease 0s}p{margin:0}.button{-webkit-appearance:none;user-select:none;background:var(--color-5);color:var(--color-dark-grey);font-size:1rem;border-radius:50px;outline:none;cursor:pointer;padding:10px 20px;line-height:1rem;border:none;border:1px solid var(--color-dark-grey);background:var(--color-light-grey);box-shadow:0 5px 15px rgba(0,0,0,0.05);font-weight:500;font-size:.9rem;transition:all ease .5s}.button:hover,.button:focus{border-color:var(--color-primary);background:var(--color-primary);color:var(--color-5)}header{position:fixed;top:0;right:0;left:0;width:100%;background:rgba(255,255,255,0.5);backdrop-filter:blur(15px);padding:15px;z-index:1000;display:flex;justify-content:space-between;border-bottom:5px solid var(--color-primary)}header .user{border-radius:50%;line-height:1;margin-right:15px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;text-align:center;background:white;color:var(--color-text);border:4px solid}#enableMotionTracking{opacity:0}#enableMotionTracking.show{opacity:1}#playground{display:block;width:100%;height:calc(100vh - 130px);overflow:hidden}#playground .ball{display:block;border-radius:50%;background:var(--color-primary)}.identifyContainer{position:fixed;top:0;left:0;z-index:-1;height:calc(100% - 130px);width:100%;display:flex;justify-content:center;align-items:center;font-family:var(--font-serif);text-align:center}.identifyWrapper{transform:translateY(-0.5rem)}.identifyDeviceNumberWrapper{font-size:25rem;line-height:1;font-variant-numeric:'lnum';font-feature-settings:'lnum', 'pnum';font-weight:600;opacity:0;overflow:hidden}.identifyDeviceNumberWrapper #identifyDeviceNumber{display:block;transform:translateY(-4rem)}.blurEffect .identifyDeviceNumberWrapper{filter:blur(30px);transform:translate3d(0, 20%, 0);transform:scale3d(0.5, 0.5, 0.5);opacity:0;transition:all 0s ease 0s}.identifyIn .blurEffect .identifyDeviceNumberWrapper{filter:blur(0px);transform:translate3d(0, 0%, 0);transform:scale3d(1, 1, 1);opacity:1}.identifyOut .blurEffect .identifyDeviceNumberWrapper{transform:translate3d(0, -20%, 0);transform:scale3d(1.5, 1.5, 1.5)}.blurEffect.animationEnabled .identifyDeviceNumberWrapper{transition:all 0.8s cubic-bezier(0.11, 0.65, 0.34, 0.96) 0s}.identifyDeviceTextWrapper{font-size:3rem;line-height:1;overflow:hidden;opacity:0}.identifyDeviceTextWrapper #identifyDeviceText{display:block}.blurEffect .identifyDeviceTextWrapper{transform:translate3d(0, 100%, 0);opacity:0;transition:all 0s ease 0s}.identifyIn .blurEffect .identifyDeviceTextWrapper{transform:translate3d(0, 0%, 0);opacity:1}.identifyOut .blurEffect .identifyDeviceTextWrapper{opacity:0;transform:translate3d(0, 0%, 0)}.blurEffect.animationEnabled .identifyDeviceTextWrapper{transition:all 0.5s cubic-bezier(0.11, 0.65, 0.34, 0.96) 0s}footer{position:fixed;bottom:0;left:0;right:0;width:100%}footer .buttonHolder{width:100%;display:flex;justify-content:flex-end;padding:25px;position:relative;z-index:-1}.deviceIdentificationTriggered footer .buttonHolder .button{transform:translateY(200%)}footer .connectedDevices{width:100%;display:flex;flex-wrap:nowrap;overflow-y:hidden;overflow-x:scroll;padding:15px;border-top:4px solid transparent;background:var(--color-light-grey);transition:all ease .3s;-webkit-overflow-scrolling:touch;min-height:130px}footer .connectedDevices.draggingOver{border-top:4px solid #666;background:var(--color-light-grey-darken)}footer .connectedDevices.reordering .device,footer .connectedDevices.reordering .device.show{transition:all ease .3s;transform:translate3d(0, 0px, 0) scale3d(0.8, 0.8, 1);opacity:0}footer .connectedDevices .device{padding:12px 17px;border-radius:6px;box-shadow:0 8px 15px rgba(0,0,0,0.1);border:2px solid transparent;background:white;font-size:.9rem;margin-right:30px;flex-shrink:0;min-width:135px;transform:translate3d(0, 30px, 0);opacity:0;color:var(--color-text);transition:all 0.5s cubic-bezier(0, 0, 0.15, 0.96) 0s,background 0.5s ease 0s,color 0.5s ease 0s;cursor:grab;user-select:none;-khtml-user-drag:element;-webkit-user-drag:element}.deviceIdentificationTriggered footer .connectedDevices .device{background:var(--color-light-grey-darken);box-shadow:0 8px 15px rgba(0,0,0,0.3)}footer .connectedDevices .device:hover,footer .connectedDevices .device.show:hover{box-shadow:0 8px 15px rgba(0,0,0,0.15);transform:translate3d(0, -3px, 0)}footer .connectedDevices .device:active,footer .connectedDevices .device:focus{cursor:grabbing}footer .connectedDevices .device.show{transform:translate3d(0, 0px, 0);opacity:1}footer .connectedDevices .device.currentUser{padding:8px;border:2px solid var(--color-primary)}footer .connectedDevices .device.dragging{opacity:.3;transform:scale3d(0.9, 0.9, 1)}footer .connectedDevices .device.dragging:hover{transform:translate3d(0, -3px, 0) scale3d(0.9, 0.9, 1) !important}footer .connectedDevices .device.draggingOver{border:2px solid #aaa;opacity:.6;transform:translate3d(10px, 0, 0) !important}footer .connectedDevices .device .userHeader{display:flex;justify-content:space-between;margin-bottom:18px}footer .connectedDevices .device .deviceIcon{display:block;height:30px;max-width:35px;user-select:none}footer .connectedDevices .device .deviceIcon path{fill:var(--color-dark-grey)}.deviceIdentificationTriggered footer .connectedDevices .device .deviceIcon path,.darkMode footer .connectedDevices .device .deviceIcon path{fill:white}footer .connectedDevices .device .userColorDot{border-radius:50%;height:20px;width:20px;color:white;text-align:center;vertical-align:middle;line-height:1.35}footer .connectedDevices .device .userName{font-weight:500;margin-bottom:3px;display:inline-block}footer .connectedDevices .device .userOrder{color:white}footer .connectedDevices .device .userId{color:#aaa;font-weight:200;font-size:80%}.background-stripes{overflow:hidden;height:100vh;width:100vw;display:none}.background-stripes svg{transform:scale(3);transform:scale(4);transform-origin:40% 20%}.background-stripes svg line{stroke:#ccc !important;animation-name:animate-background;animation-duration:3s;animation-iteration-count:infinite;animation-direction:alternate;animation-timing-function:ease;animation-fill-mode:both}.background-stripes svg line:nth-child(1){animation-delay:.05556s}.background-stripes svg line:nth-child(2){animation-delay:.11111s}.background-stripes svg line:nth-child(3){animation-delay:.16667s}.background-stripes svg line:nth-child(4){animation-delay:.22222s}.background-stripes svg line:nth-child(5){animation-delay:.27778s}.background-stripes svg line:nth-child(6){animation-delay:.33333s}.background-stripes svg line:nth-child(7){animation-delay:.38889s}.background-stripes svg line:nth-child(8){animation-delay:.44444s}.background-stripes svg line:nth-child(9){animation-delay:.5s}.background-stripes svg line:nth-child(10){animation-delay:.55556s}.background-stripes svg line:nth-child(11){animation-delay:.61111s}.background-stripes svg line:nth-child(12){animation-delay:.66667s}.background-stripes svg line:nth-child(13){animation-delay:.72222s}.background-stripes svg line:nth-child(14){animation-delay:.77778s}.background-stripes svg line:nth-child(15){animation-delay:.83333s}.background-stripes svg line:nth-child(16){animation-delay:.88889s}.background-stripes svg line:nth-child(17){animation-delay:.94444s}.background-stripes svg line:nth-child(18){animation-delay:1s}.background-stripes svg line:nth-child(19){animation-delay:1.05556s}.background-stripes svg line:nth-child(20){animation-delay:1.11111s}.background-stripes svg line:nth-child(21){animation-delay:1.16667s}.background-stripes svg line:nth-child(22){animation-delay:1.22222s}.background-stripes svg line:nth-child(23){animation-delay:1.27778s}.background-stripes svg line:nth-child(24){animation-delay:1.33333s}.background-stripes svg line:nth-child(25){animation-delay:1.38889s}.background-stripes svg line:nth-child(26){animation-delay:1.44444s}.background-stripes svg line:nth-child(27){animation-delay:1.5s}.background-stripes svg line:nth-child(28){animation-delay:1.55556s}.background-stripes svg line:nth-child(29){animation-delay:1.61111s}.background-stripes svg line:nth-child(30){animation-delay:1.66667s}.background-stripes svg line:nth-child(31){animation-delay:1.72222s}.background-stripes svg line:nth-child(32){animation-delay:1.77778s}.background-stripes svg line:nth-child(33){animation-delay:1.83333s}.background-stripes svg line:nth-child(34){animation-delay:1.88889s}.background-stripes svg line:nth-child(35){animation-delay:1.94444s}.background-stripes svg line:nth-child(36){animation-delay:2s}.background-stripes svg line:nth-child(37){animation-delay:2.05556s}.background-stripes svg line:nth-child(38){animation-delay:2.11111s}.background-stripes svg line:nth-child(39){animation-delay:2.16667s}.background-stripes svg line:nth-child(40){animation-delay:2.22222s}.background-stripes svg line:nth-child(41){animation-delay:2.27778s}.background-stripes svg line:nth-child(42){animation-delay:2.33333s}.background-stripes svg line:nth-child(43){animation-delay:2.38889s}.background-stripes svg line:nth-child(44){animation-delay:2.44444s}.background-stripes svg line:nth-child(45){animation-delay:2.5s}.background-stripes svg line:nth-child(46){animation-delay:2.55556s}.background-stripes svg line:nth-child(47){animation-delay:2.61111s}.background-stripes svg line:nth-child(48){animation-delay:2.66667s}.background-stripes svg line:nth-child(49){animation-delay:2.72222s}.background-stripes svg line:nth-child(50){animation-delay:2.77778s}.background-stripes svg line:nth-child(51){animation-delay:2.83333s}.background-stripes svg line:nth-child(52){animation-delay:2.88889s}.background-stripes svg line:nth-child(53){animation-delay:2.94444s}.background-stripes svg line:nth-child(54){animation-delay:3s}.background-stripes svg line:nth-child(55){animation-delay:3.05556s}.background-stripes svg line:nth-child(56){animation-delay:3.11111s}.background-stripes svg line:nth-child(57){animation-delay:3.16667s}.background-stripes svg line:nth-child(58){animation-delay:3.22222s}.background-stripes svg line:nth-child(59){animation-delay:3.27778s}.background-stripes svg line:nth-child(60){animation-delay:3.33333s}.background-stripes svg line:nth-child(61){animation-delay:3.38889s}.background-stripes svg line:nth-child(62){animation-delay:3.44444s}.background-stripes svg line:nth-child(63){animation-delay:3.5s}.background-stripes svg line:nth-child(64){animation-delay:3.55556s}.background-stripes svg line:nth-child(65){animation-delay:3.61111s}.background-stripes svg line:nth-child(66){animation-delay:3.66667s}.background-stripes svg line:nth-child(67){animation-delay:3.72222s}.background-stripes svg line:nth-child(68){animation-delay:3.77778s}.background-stripes svg line:nth-child(69){animation-delay:3.83333s}.background-stripes svg line:nth-child(70){animation-delay:3.88889s}.background-stripes svg line:nth-child(71){animation-delay:3.94444s}.background-stripes svg line:nth-child(72){animation-delay:4s}.background-stripes svg line:nth-child(73){animation-delay:4.05556s}.background-stripes svg line:nth-child(74){animation-delay:4.11111s}.background-stripes svg line:nth-child(75){animation-delay:4.16667s}.background-stripes svg line:nth-child(76){animation-delay:4.22222s}.background-stripes svg line:nth-child(77){animation-delay:4.27778s}.background-stripes svg line:nth-child(78){animation-delay:4.33333s}.background-stripes svg line:nth-child(79){animation-delay:4.38889s}.background-stripes svg line:nth-child(80){animation-delay:4.44444s}.background-stripes svg line:nth-child(81){animation-delay:4.5s}.background-stripes svg line:nth-child(82){animation-delay:4.55556s}.background-stripes svg line:nth-child(83){animation-delay:4.61111s}.background-stripes svg line:nth-child(84){animation-delay:4.66667s}.background-stripes svg line:nth-child(85){animation-delay:4.72222s}.background-stripes svg line:nth-child(86){animation-delay:4.77778s}.background-stripes svg line:nth-child(87){animation-delay:4.83333s}.background-stripes svg line:nth-child(88){animation-delay:4.88889s}.background-stripes svg line:nth-child(89){animation-delay:4.94444s}.background-stripes svg line:nth-child(90){animation-delay:5s}.background-stripes svg line:nth-child(91){animation-delay:5.05556s}.background-stripes svg line:nth-child(92){animation-delay:5.11111s}.background-stripes svg line:nth-child(93){animation-delay:5.16667s}.background-stripes svg line:nth-child(94){animation-delay:5.22222s}.background-stripes svg line:nth-child(95){animation-delay:5.27778s}.background-stripes svg line:nth-child(96){animation-delay:5.33333s}.background-stripes svg line:nth-child(97){animation-delay:5.38889s}.background-stripes svg line:nth-child(98){animation-delay:5.44444s}.background-stripes svg line:nth-child(99){animation-delay:5.5s}.background-stripes svg line:nth-child(100){animation-delay:5.55556s}.stripes{display:none;position:fixed;z-index:10;top:50%;left:50%;width:50vw;height:50vh;transform:translate3d(-50%, -50%, 0);overflow:hidden}.stripes svg{transform:scale(5.5) rotate(270deg)}.stripes svg line{stroke:white !important}.bubbles{position:fixed;top:0;left:0;width:100%;height:100%;padding:15px;position:static;height:100vh;width:100vw;padding-top:100px}.bubbles .user{background:#3ed678;border-radius:50%;margin-bottom:15px;width:50px;height:50px;padding:8px;font-size:80%;display:flex;justify-content:center;align-items:center;text-align:center}@keyframes animate-background{from{stroke-width:20px}to{stroke-width:5px}}@keyframes background-transforms{from{transform:scale(4) rotate(0deg)}from{transform:scale(4) rotate(360deg)}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzNlMTMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6NDAwLDYwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiosKjo6YWZ0ZXIsKjo6YmVmb3Jle2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdHstLWZvbnQtc2VyaWY6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWZ9aHRtbHstLWNvbG9yLXByaW1hcnk6ICM1Mzg3OTc7LS1jb2xvci0yOiAjYzJkOWNkOy0tY29sb3ItMzogI2ZmODQyYTstLWNvbG9yLTQ6ICNmZWQ1NWQ7LS1jb2xvci01OiAjZmNmYWYxOy0tY29sb3ItYmFja2dyb3VuZDogI2ZmZjstLWNvbG9yLXRleHQ6ICMxNjE3MTk7LS1jb2xvci1saWdodC1ncmV5OiAjZjRmNGY0Oy0tY29sb3ItbGlnaHQtZ3JleS1kYXJrZW46ICNlZWU7LS1jb2xvci1kYXJrLWdyZXk6ICM2NjZ9aHRtbC5kZXZpY2VJZGVudGlmaWNhdGlvblRyaWdnZXJlZCxodG1sLmRhcmtNb2Rley0tY29sb3ItYmFja2dyb3VuZDogIzE2MTcxOTstLWNvbG9yLXRleHQ6ICNmZmY7LS1jb2xvci1saWdodC1ncmV5OiAjMmMyYzJlOy0tY29sb3ItbGlnaHQtZ3JleS1kYXJrZW46ICMzYTNhM2M7LS1jb2xvci1kYXJrLWdyZXk6ICM2MzYzNjY7LS1jb2xvci1kYXJrLWdyZXk6ICM4ZThlOTN9Ym9keXttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC1zaXplOjFyZW07Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3ItdGV4dCk7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2UgMHN9cHttYXJnaW46MH0uYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZDp2YXIoLS1jb2xvci01KTtjb2xvcjp2YXIoLS1jb2xvci1kYXJrLWdyZXkpO2ZvbnQtc2l6ZToxcmVtO2JvcmRlci1yYWRpdXM6NTBweDtvdXRsaW5lOm5vbmU7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoxMHB4IDIwcHg7bGluZS1oZWlnaHQ6MXJlbTtib3JkZXI6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWNvbG9yLWRhcmstZ3JleSk7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1saWdodC1ncmV5KTtib3gtc2hhZG93OjAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjA1KTtmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOi45cmVtO3RyYW5zaXRpb246YWxsIGVhc2UgLjVzfS5idXR0b246aG92ZXIsLmJ1dHRvbjpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY29sb3ItcHJpbWFyeSk7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1wcmltYXJ5KTtjb2xvcjp2YXIoLS1jb2xvci01KX1oZWFkZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtsZWZ0OjA7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNXB4KTtwYWRkaW5nOjE1cHg7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3JkZXItYm90dG9tOjVweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KX1oZWFkZXIgLnVzZXJ7Ym9yZGVyLXJhZGl1czo1MCU7bGluZS1oZWlnaHQ6MTttYXJnaW4tcmlnaHQ6MTVweDt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOndoaXRlO2NvbG9yOnZhcigtLWNvbG9yLXRleHQpO2JvcmRlcjo0cHggc29saWR9I2VuYWJsZU1vdGlvblRyYWNraW5ne29wYWNpdHk6MH0jZW5hYmxlTW90aW9uVHJhY2tpbmcuc2hvd3tvcGFjaXR5OjF9I3BsYXlncm91bmR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMHZoIC0gMTMwcHgpO292ZXJmbG93OmhpZGRlbn0jcGxheWdyb3VuZCAuYmFsbHtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItcHJpbWFyeSl9LmlkZW50aWZ5Q29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4Oi0xO2hlaWdodDpjYWxjKDEwMCUgLSAxMzBweCk7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1zZXJpZik7dGV4dC1hbGlnbjpjZW50ZXJ9LmlkZW50aWZ5V3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41cmVtKX0uaWRlbnRpZnlEZXZpY2VOdW1iZXJXcmFwcGVye2ZvbnQtc2l6ZToyNXJlbTtsaW5lLWhlaWdodDoxO2ZvbnQtdmFyaWFudC1udW1lcmljOidsbnVtJztmb250LWZlYXR1cmUtc2V0dGluZ3M6J2xudW0nLCAncG51bSc7Zm9udC13ZWlnaHQ6NjAwO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW59LmlkZW50aWZ5RGV2aWNlTnVtYmVyV3JhcHBlciAjaWRlbnRpZnlEZXZpY2VOdW1iZXJ7ZGlzcGxheTpibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNHJlbSl9LmJsdXJFZmZlY3QgLmlkZW50aWZ5RGV2aWNlTnVtYmVyV3JhcHBlcntmaWx0ZXI6Ymx1cigzMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMjAlLCAwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLjUsIDAuNSwgMC41KTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgMHMgZWFzZSAwc30uaWRlbnRpZnlJbiAuYmx1ckVmZmVjdCAuaWRlbnRpZnlEZXZpY2VOdW1iZXJXcmFwcGVye2ZpbHRlcjpibHVyKDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAlLCAwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKTtvcGFjaXR5OjF9LmlkZW50aWZ5T3V0IC5ibHVyRWZmZWN0IC5pZGVudGlmeURldmljZU51bWJlcldyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIC0yMCUsIDApO3RyYW5zZm9ybTpzY2FsZTNkKDEuNSwgMS41LCAxLjUpfS5ibHVyRWZmZWN0LmFuaW1hdGlvbkVuYWJsZWQgLmlkZW50aWZ5RGV2aWNlTnVtYmVyV3JhcHBlcnt0cmFuc2l0aW9uOmFsbCAwLjhzIGN1YmljLWJlemllcigwLjExLCAwLjY1LCAwLjM0LCAwLjk2KSAwc30uaWRlbnRpZnlEZXZpY2VUZXh0V3JhcHBlcntmb250LXNpemU6M3JlbTtsaW5lLWhlaWdodDoxO292ZXJmbG93OmhpZGRlbjtvcGFjaXR5OjB9LmlkZW50aWZ5RGV2aWNlVGV4dFdyYXBwZXIgI2lkZW50aWZ5RGV2aWNlVGV4dHtkaXNwbGF5OmJsb2NrfS5ibHVyRWZmZWN0IC5pZGVudGlmeURldmljZVRleHRXcmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgMHMgZWFzZSAwc30uaWRlbnRpZnlJbiAuYmx1ckVmZmVjdCAuaWRlbnRpZnlEZXZpY2VUZXh0V3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCUsIDApO29wYWNpdHk6MX0uaWRlbnRpZnlPdXQgLmJsdXJFZmZlY3QgLmlkZW50aWZ5RGV2aWNlVGV4dFdyYXBwZXJ7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwJSwgMCl9LmJsdXJFZmZlY3QuYW5pbWF0aW9uRW5hYmxlZCAuaWRlbnRpZnlEZXZpY2VUZXh0V3JhcHBlcnt0cmFuc2l0aW9uOmFsbCAwLjVzIGN1YmljLWJlemllcigwLjExLCAwLjY1LCAwLjM0LCAwLjk2KSAwc31mb290ZXJ7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7d2lkdGg6MTAwJX1mb290ZXIgLmJ1dHRvbkhvbGRlcnt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cGFkZGluZzoyNXB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6LTF9LmRldmljZUlkZW50aWZpY2F0aW9uVHJpZ2dlcmVkIGZvb3RlciAuYnV0dG9uSG9sZGVyIC5idXR0b257dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAwJSl9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2Vze3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDpub3dyYXA7b3ZlcmZsb3cteTpoaWRkZW47b3ZlcmZsb3cteDpzY3JvbGw7cGFkZGluZzoxNXB4O2JvcmRlci10b3A6NHB4IHNvbGlkIHRyYW5zcGFyZW50O2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbGlnaHQtZ3JleSk7dHJhbnNpdGlvbjphbGwgZWFzZSAuM3M7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7bWluLWhlaWdodDoxMzBweH1mb290ZXIgLmNvbm5lY3RlZERldmljZXMuZHJhZ2dpbmdPdmVye2JvcmRlci10b3A6NHB4IHNvbGlkICM2NjY7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1saWdodC1ncmV5LWRhcmtlbil9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzLnJlb3JkZXJpbmcgLmRldmljZSxmb290ZXIgLmNvbm5lY3RlZERldmljZXMucmVvcmRlcmluZyAuZGV2aWNlLnNob3d7dHJhbnNpdGlvbjphbGwgZWFzZSAuM3M7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDBweCwgMCkgc2NhbGUzZCgwLjgsIDAuOCwgMSk7b3BhY2l0eTowfWZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNle3BhZGRpbmc6MTJweCAxN3B4O2JvcmRlci1yYWRpdXM6NnB4O2JveC1zaGFkb3c6MCA4cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7Ym9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOndoaXRlO2ZvbnQtc2l6ZTouOXJlbTttYXJnaW4tcmlnaHQ6MzBweDtmbGV4LXNocmluazowO21pbi13aWR0aDoxMzVweDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMzBweCwgMCk7b3BhY2l0eTowO2NvbG9yOnZhcigtLWNvbG9yLXRleHQpO3RyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMTUsIDAuOTYpIDBzLGJhY2tncm91bmQgMC41cyBlYXNlIDBzLGNvbG9yIDAuNXMgZWFzZSAwcztjdXJzb3I6Z3JhYjt1c2VyLXNlbGVjdDpub25lOy1raHRtbC11c2VyLWRyYWc6ZWxlbWVudDstd2Via2l0LXVzZXItZHJhZzplbGVtZW50fS5kZXZpY2VJZGVudGlmaWNhdGlvblRyaWdnZXJlZCBmb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZXtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLWxpZ2h0LWdyZXktZGFya2VuKTtib3gtc2hhZG93OjAgOHB4IDE1cHggcmdiYSgwLDAsMCwwLjMpfWZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlOmhvdmVyLGZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlLnNob3c6aG92ZXJ7Ym94LXNoYWRvdzowIDhweCAxNXB4IHJnYmEoMCwwLDAsMC4xNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIC0zcHgsIDApfWZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlOmFjdGl2ZSxmb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZTpmb2N1c3tjdXJzb3I6Z3JhYmJpbmd9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzIC5kZXZpY2Uuc2hvd3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtvcGFjaXR5OjF9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzIC5kZXZpY2UuY3VycmVudFVzZXJ7cGFkZGluZzo4cHg7Ym9yZGVyOjJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KX1mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZS5kcmFnZ2luZ3tvcGFjaXR5Oi4zO3RyYW5zZm9ybTpzY2FsZTNkKDAuOSwgMC45LCAxKX1mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZS5kcmFnZ2luZzpob3Zlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgLTNweCwgMCkgc2NhbGUzZCgwLjksIDAuOSwgMSkgIWltcG9ydGFudH1mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZS5kcmFnZ2luZ092ZXJ7Ym9yZGVyOjJweCBzb2xpZCAjYWFhO29wYWNpdHk6LjY7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApICFpbXBvcnRhbnR9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzIC5kZXZpY2UgLnVzZXJIZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MThweH1mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZSAuZGV2aWNlSWNvbntkaXNwbGF5OmJsb2NrO2hlaWdodDozMHB4O21heC13aWR0aDozNXB4O3VzZXItc2VsZWN0Om5vbmV9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzIC5kZXZpY2UgLmRldmljZUljb24gcGF0aHtmaWxsOnZhcigtLWNvbG9yLWRhcmstZ3JleSl9LmRldmljZUlkZW50aWZpY2F0aW9uVHJpZ2dlcmVkIGZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlIC5kZXZpY2VJY29uIHBhdGgsLmRhcmtNb2RlIGZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlIC5kZXZpY2VJY29uIHBhdGh7ZmlsbDp3aGl0ZX1mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZSAudXNlckNvbG9yRG90e2JvcmRlci1yYWRpdXM6NTAlO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7Y29sb3I6d2hpdGU7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246bWlkZGxlO2xpbmUtaGVpZ2h0OjEuMzV9Zm9vdGVyIC5jb25uZWN0ZWREZXZpY2VzIC5kZXZpY2UgLnVzZXJOYW1le2ZvbnQtd2VpZ2h0OjUwMDttYXJnaW4tYm90dG9tOjNweDtkaXNwbGF5OmlubGluZS1ibG9ja31mb290ZXIgLmNvbm5lY3RlZERldmljZXMgLmRldmljZSAudXNlck9yZGVye2NvbG9yOndoaXRlfWZvb3RlciAuY29ubmVjdGVkRGV2aWNlcyAuZGV2aWNlIC51c2VySWR7Y29sb3I6I2FhYTtmb250LXdlaWdodDoyMDA7Zm9udC1zaXplOjgwJX0uYmFja2dyb3VuZC1zdHJpcGVze292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7ZGlzcGxheTpub25lfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3Zne3RyYW5zZm9ybTpzY2FsZSgzKTt0cmFuc2Zvcm06c2NhbGUoNCk7dHJhbnNmb3JtLW9yaWdpbjo0MCUgMjAlfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmV7c3Ryb2tlOiNjY2MgIWltcG9ydGFudDthbmltYXRpb24tbmFtZTphbmltYXRlLWJhY2tncm91bmQ7YW5pbWF0aW9uLWR1cmF0aW9uOjNzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgxKXthbmltYXRpb24tZGVsYXk6LjA1NTU2c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgyKXthbmltYXRpb24tZGVsYXk6LjExMTExc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgzKXthbmltYXRpb24tZGVsYXk6LjE2NjY3c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg0KXthbmltYXRpb24tZGVsYXk6LjIyMjIyc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg1KXthbmltYXRpb24tZGVsYXk6LjI3Nzc4c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg2KXthbmltYXRpb24tZGVsYXk6LjMzMzMzc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg3KXthbmltYXRpb24tZGVsYXk6LjM4ODg5c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg4KXthbmltYXRpb24tZGVsYXk6LjQ0NDQ0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg5KXthbmltYXRpb24tZGVsYXk6LjVzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDEwKXthbmltYXRpb24tZGVsYXk6LjU1NTU2c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgxMSl7YW5pbWF0aW9uLWRlbGF5Oi42MTExMXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMTIpe2FuaW1hdGlvbi1kZWxheTouNjY2NjdzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDEzKXthbmltYXRpb24tZGVsYXk6LjcyMjIyc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgxNCl7YW5pbWF0aW9uLWRlbGF5Oi43Nzc3OHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMTUpe2FuaW1hdGlvbi1kZWxheTouODMzMzNzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDE2KXthbmltYXRpb24tZGVsYXk6Ljg4ODg5c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgxNyl7YW5pbWF0aW9uLWRlbGF5Oi45NDQ0NHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMTgpe2FuaW1hdGlvbi1kZWxheToxc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgxOSl7YW5pbWF0aW9uLWRlbGF5OjEuMDU1NTZzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDIwKXthbmltYXRpb24tZGVsYXk6MS4xMTExMXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMjEpe2FuaW1hdGlvbi1kZWxheToxLjE2NjY3c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgyMil7YW5pbWF0aW9uLWRlbGF5OjEuMjIyMjJzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDIzKXthbmltYXRpb24tZGVsYXk6MS4yNzc3OHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMjQpe2FuaW1hdGlvbi1kZWxheToxLjMzMzMzc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgyNSl7YW5pbWF0aW9uLWRlbGF5OjEuMzg4ODlzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDI2KXthbmltYXRpb24tZGVsYXk6MS40NDQ0NHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMjcpe2FuaW1hdGlvbi1kZWxheToxLjVzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDI4KXthbmltYXRpb24tZGVsYXk6MS41NTU1NnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMjkpe2FuaW1hdGlvbi1kZWxheToxLjYxMTExc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgzMCl7YW5pbWF0aW9uLWRlbGF5OjEuNjY2NjdzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDMxKXthbmltYXRpb24tZGVsYXk6MS43MjIyMnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMzIpe2FuaW1hdGlvbi1kZWxheToxLjc3Nzc4c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgzMyl7YW5pbWF0aW9uLWRlbGF5OjEuODMzMzNzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDM0KXthbmltYXRpb24tZGVsYXk6MS44ODg4OXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMzUpe2FuaW1hdGlvbi1kZWxheToxLjk0NDQ0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgzNil7YW5pbWF0aW9uLWRlbGF5OjJzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDM3KXthbmltYXRpb24tZGVsYXk6Mi4wNTU1NnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMzgpe2FuaW1hdGlvbi1kZWxheToyLjExMTExc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCgzOSl7YW5pbWF0aW9uLWRlbGF5OjIuMTY2NjdzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDQwKXthbmltYXRpb24tZGVsYXk6Mi4yMjIyMnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNDEpe2FuaW1hdGlvbi1kZWxheToyLjI3Nzc4c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg0Mil7YW5pbWF0aW9uLWRlbGF5OjIuMzMzMzNzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDQzKXthbmltYXRpb24tZGVsYXk6Mi4zODg4OXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNDQpe2FuaW1hdGlvbi1kZWxheToyLjQ0NDQ0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg0NSl7YW5pbWF0aW9uLWRlbGF5OjIuNXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNDYpe2FuaW1hdGlvbi1kZWxheToyLjU1NTU2c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg0Nyl7YW5pbWF0aW9uLWRlbGF5OjIuNjExMTFzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDQ4KXthbmltYXRpb24tZGVsYXk6Mi42NjY2N3N9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNDkpe2FuaW1hdGlvbi1kZWxheToyLjcyMjIyc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg1MCl7YW5pbWF0aW9uLWRlbGF5OjIuNzc3NzhzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDUxKXthbmltYXRpb24tZGVsYXk6Mi44MzMzM3N9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNTIpe2FuaW1hdGlvbi1kZWxheToyLjg4ODg5c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg1Myl7YW5pbWF0aW9uLWRlbGF5OjIuOTQ0NDRzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDU0KXthbmltYXRpb24tZGVsYXk6M3N9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNTUpe2FuaW1hdGlvbi1kZWxheTozLjA1NTU2c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg1Nil7YW5pbWF0aW9uLWRlbGF5OjMuMTExMTFzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDU3KXthbmltYXRpb24tZGVsYXk6My4xNjY2N3N9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNTgpe2FuaW1hdGlvbi1kZWxheTozLjIyMjIyc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg1OSl7YW5pbWF0aW9uLWRlbGF5OjMuMjc3NzhzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDYwKXthbmltYXRpb24tZGVsYXk6My4zMzMzM3N9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNjEpe2FuaW1hdGlvbi1kZWxheTozLjM4ODg5c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg2Mil7YW5pbWF0aW9uLWRlbGF5OjMuNDQ0NDRzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDYzKXthbmltYXRpb24tZGVsYXk6My41c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg2NCl7YW5pbWF0aW9uLWRlbGF5OjMuNTU1NTZzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDY1KXthbmltYXRpb24tZGVsYXk6My42MTExMXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNjYpe2FuaW1hdGlvbi1kZWxheTozLjY2NjY3c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg2Nyl7YW5pbWF0aW9uLWRlbGF5OjMuNzIyMjJzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDY4KXthbmltYXRpb24tZGVsYXk6My43Nzc3OHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNjkpe2FuaW1hdGlvbi1kZWxheTozLjgzMzMzc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg3MCl7YW5pbWF0aW9uLWRlbGF5OjMuODg4ODlzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDcxKXthbmltYXRpb24tZGVsYXk6My45NDQ0NHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNzIpe2FuaW1hdGlvbi1kZWxheTo0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg3Myl7YW5pbWF0aW9uLWRlbGF5OjQuMDU1NTZzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDc0KXthbmltYXRpb24tZGVsYXk6NC4xMTExMXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNzUpe2FuaW1hdGlvbi1kZWxheTo0LjE2NjY3c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg3Nil7YW5pbWF0aW9uLWRlbGF5OjQuMjIyMjJzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDc3KXthbmltYXRpb24tZGVsYXk6NC4yNzc3OHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoNzgpe2FuaW1hdGlvbi1kZWxheTo0LjMzMzMzc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg3OSl7YW5pbWF0aW9uLWRlbGF5OjQuMzg4ODlzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDgwKXthbmltYXRpb24tZGVsYXk6NC40NDQ0NHN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoODEpe2FuaW1hdGlvbi1kZWxheTo0LjVzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDgyKXthbmltYXRpb24tZGVsYXk6NC41NTU1NnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoODMpe2FuaW1hdGlvbi1kZWxheTo0LjYxMTExc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg4NCl7YW5pbWF0aW9uLWRlbGF5OjQuNjY2NjdzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDg1KXthbmltYXRpb24tZGVsYXk6NC43MjIyMnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoODYpe2FuaW1hdGlvbi1kZWxheTo0Ljc3Nzc4c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg4Nyl7YW5pbWF0aW9uLWRlbGF5OjQuODMzMzNzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDg4KXthbmltYXRpb24tZGVsYXk6NC44ODg4OXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoODkpe2FuaW1hdGlvbi1kZWxheTo0Ljk0NDQ0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg5MCl7YW5pbWF0aW9uLWRlbGF5OjVzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDkxKXthbmltYXRpb24tZGVsYXk6NS4wNTU1NnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoOTIpe2FuaW1hdGlvbi1kZWxheTo1LjExMTExc30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg5Myl7YW5pbWF0aW9uLWRlbGF5OjUuMTY2NjdzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDk0KXthbmltYXRpb24tZGVsYXk6NS4yMjIyMnN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoOTUpe2FuaW1hdGlvbi1kZWxheTo1LjI3Nzc4c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg5Nil7YW5pbWF0aW9uLWRlbGF5OjUuMzMzMzNzfS5iYWNrZ3JvdW5kLXN0cmlwZXMgc3ZnIGxpbmU6bnRoLWNoaWxkKDk3KXthbmltYXRpb24tZGVsYXk6NS4zODg4OXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoOTgpe2FuaW1hdGlvbi1kZWxheTo1LjQ0NDQ0c30uYmFja2dyb3VuZC1zdHJpcGVzIHN2ZyBsaW5lOm50aC1jaGlsZCg5OSl7YW5pbWF0aW9uLWRlbGF5OjUuNXN9LmJhY2tncm91bmQtc3RyaXBlcyBzdmcgbGluZTpudGgtY2hpbGQoMTAwKXthbmltYXRpb24tZGVsYXk6NS41NTU1NnN9LnN0cmlwZXN7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo1MHZ3O2hlaWdodDo1MHZoO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtvdmVyZmxvdzpoaWRkZW59LnN0cmlwZXMgc3Zne3RyYW5zZm9ybTpzY2FsZSg1LjUpIHJvdGF0ZSgyNzBkZWcpfS5zdHJpcGVzIHN2ZyBsaW5le3N0cm9rZTp3aGl0ZSAhaW1wb3J0YW50fS5idWJibGVze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6MTVweDtwb3NpdGlvbjpzdGF0aWM7aGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O3BhZGRpbmctdG9wOjEwMHB4fS5idWJibGVzIC51c2Vye2JhY2tncm91bmQ6IzNlZDY3ODtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tYm90dG9tOjE1cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtwYWRkaW5nOjhweDtmb250LXNpemU6ODAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcn1Aa2V5ZnJhbWVzIGFuaW1hdGUtYmFja2dyb3VuZHtmcm9te3N0cm9rZS13aWR0aDoyMHB4fXRve3N0cm9rZS13aWR0aDo1cHh9fUBrZXlmcmFtZXMgYmFja2dyb3VuZC10cmFuc2Zvcm1ze2Zyb217dHJhbnNmb3JtOnNjYWxlKDQpIHJvdGF0ZSgwZGVnKX1mcm9te3RyYW5zZm9ybTpzY2FsZSg0KSByb3RhdGUoMzYwZGVnKX19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==