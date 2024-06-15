/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling */
body {
  height: 100vh;
  background: linear-gradient(90deg, #109ab3, #460574);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3em;
  font-family: "Arial", sans-serif;
}

/* Navigation styling */
nav {
  margin-top: 2em;
}

/* Input field styling */
input[type="text"] {
  padding: 10px;
  border-radius: 16px;
  outline: none;
  border: none;
  width: 256px;
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* Search button styling */
.search-button {
  outline: none;
  border: none;
  background: none;
}

/* Search container styling */
.search {
  width: max-content;
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 28px;
  background: rgba(246, 246, 246, 0.8);
  transition: box-shadow 0.25s, background 0.25s;
}

.search:focus-within {
  background: rgba(241, 241, 241, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

/* Search input styling */
.search-input {
  font-size: 16px;
  color: #333;
  margin-left: 14px;
  outline: none;
  border: none;
  background: transparent;
  width: 300px;
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

/* Search icon styling */
.search-icon {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.3s;
}

.search-icon:hover {
  color: rgba(0, 0, 0, 0.7);
}

/* Main container styling */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 2em;
}

.section-header {
  text-align: center;
}

/* Weather section styling */
.section-weather {
  display: flex;
  gap: 2em;
}

/* Weather main section styling */
.weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}

.weather-main:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Weather main top styling */
.weather-main-top {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
  color: #fff;
  font-size: 1.2em;
}

.weather-main-top i {
  font-size: 2em;
  color: #ffd700; /* Example for icon color, can be changed */
}

/* Weather main bottom styling */
.weather-main-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 1em;
}

.weather-main-bottom span {
  margin-top: 0.5em;
}

/* Weather details styling */
.weather-details {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2em;
}

/* Style individual weather detail items */
.weather-details > * {
  background: rgba(255, 255, 255, 0.2);
  padding: 1em;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.weather-details > *:hover {
  transform: scale(1.05);
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

.section-forecast {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}
.section-forecast > * {
  background: rgba(255, 255, 255, 0.2);
  padding: 1em;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.weather-img {
  width: 3em;
}
.icon-weather {
  width: 200px;
}
.temp-weather {
  font-size: 40px;
}
.temp-weather-c::after,
.feelslike-c::after {
  content: "\\2103";
}
.temp-weather-f::after,
.feelslike-f::after {
  content: "\\2109";
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,oDAAoD;EACpD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,gCAAgC;AAClC;;AAEA,uBAAuB;AACvB;EACE,eAAe;AACjB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,sCAAsC;AACxC;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,8CAA8C;AAChD;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;AAC1C;;AAEA,yBAAyB;AACzB;EACE,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,QAAQ;AACV;;AAEA,iCAAiC;AACjC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;EACpC,cAAc;EACd,mBAAmB;EACnB,wCAAwC;EACxC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,cAAc,EAAE,2CAA2C;AAC7D;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,sCAAsC;EACtC,QAAQ;AACV;;AAEA,0CAA0C;AAC1C;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,wCAAwC;EACxC,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,wCAAwC;EACxC,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,UAAU;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB","sourcesContent":["/* General reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Body styling */\nbody {\n  height: 100vh;\n  background: linear-gradient(90deg, #109ab3, #460574);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3em;\n  font-family: \"Arial\", sans-serif;\n}\n\n/* Navigation styling */\nnav {\n  margin-top: 2em;\n}\n\n/* Input field styling */\ninput[type=\"text\"] {\n  padding: 10px;\n  border-radius: 16px;\n  outline: none;\n  border: none;\n  width: 256px;\n  transition: all 0.3s ease;\n}\n\ninput[type=\"text\"]:focus {\n  width: 300px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n}\n\n/* Search button styling */\n.search-button {\n  outline: none;\n  border: none;\n  background: none;\n}\n\n/* Search container styling */\n.search {\n  width: max-content;\n  display: flex;\n  align-items: center;\n  padding: 14px;\n  border-radius: 28px;\n  background: rgba(246, 246, 246, 0.8);\n  transition: box-shadow 0.25s, background 0.25s;\n}\n\n.search:focus-within {\n  background: rgba(241, 241, 241, 0.9);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n\n/* Search input styling */\n.search-input {\n  font-size: 16px;\n  color: #333;\n  margin-left: 14px;\n  outline: none;\n  border: none;\n  background: transparent;\n  width: 300px;\n}\n\n.search-input::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n/* Search icon styling */\n.search-icon {\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.3s;\n}\n\n.search-icon:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n/* Main container styling */\n.main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  gap: 2em;\n}\n\n.section-header {\n  text-align: center;\n}\n\n/* Weather section styling */\n.section-weather {\n  display: flex;\n  gap: 2em;\n}\n\n/* Weather main section styling */\n.weather-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5em;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: background 0.3s ease;\n}\n\n.weather-main:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n/* Weather main top styling */\n.weather-main-top {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  margin-bottom: 1em;\n  color: #fff;\n  font-size: 1.2em;\n}\n\n.weather-main-top i {\n  font-size: 2em;\n  color: #ffd700; /* Example for icon color, can be changed */\n}\n\n/* Weather main bottom styling */\n.weather-main-bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n  font-size: 1em;\n}\n\n.weather-main-bottom span {\n  margin-top: 0.5em;\n}\n\n/* Weather details styling */\n.weather-details {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 2em;\n}\n\n/* Style individual weather detail items */\n.weather-details > * {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 1em;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n}\n\n.weather-details > *:hover {\n  transform: scale(1.05);\n}\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  display: none;\n}\n\n.section-forecast {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 2em;\n  margin-bottom: 1em;\n}\n.section-forecast > * {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 1em;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.weather-img {\n  width: 3em;\n}\n.icon-weather {\n  width: 200px;\n}\n.temp-weather {\n  font-size: 40px;\n}\n.temp-weather-c::after,\n.feelslike-c::after {\n  content: \"\\2103\";\n}\n.temp-weather-f::after,\n.feelslike-f::after {\n  content: \"\\2109\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  apiKey: "e6e1a95f697e48caa74121917240906",
};




/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeSearchHandlers: () => (/* binding */ initializeSearchHandlers)
/* harmony export */ });
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");


const degrees = {
  current: "f", // TODO switch to c or f
  celcius: "&#176;",
  fahrenheit: "&#8457;",
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item).default || r(item);
  });
  return images;
}

const images = importAll(
  __webpack_require__("./src/images sync \\.(png%7Cjpe?g%7Csvg)$")
);

const imagesAnimated = importAll(
  __webpack_require__("./src/images/animated sync \\.(png%7Cjpe?g%7Csvg)$")
);

const weatherImages = {
  app_logo: images["app_logo.svg"],
  sunrise: images["sunrise.svg"],
  sunset: images["sunset.svg"],
  day: imagesAnimated["day.svg"],
  night: imagesAnimated["night.svg"],
  partly_cloudy: imagesAnimated["cloudy-day-2.svg"],
  cloudy: imagesAnimated["cloudy.svg"],
  sunny_rainy: imagesAnimated["rainy-1.svg"],
  rainy: imagesAnimated["rainy-6.svg"],
  sunny_snowy: imagesAnimated["snowy-1.svg"],
  snowy: imagesAnimated["snowy-5.svg"],
  thunder: imagesAnimated["thunder.svg"],
};
const weatherCodes = {
  1000: weatherImages.day,
  1003: weatherImages.partly_cloudy,
  1006: weatherImages.cloudy,
  1066: weatherImages.sunny_snowy,
  1014: weatherImages.snowy,
  1180: weatherImages.sunny_rainy,
  1195: weatherImages.rainy,
  1273: weatherImages.thunder,
};
function getWeatherIcon(weatherCode) {
  let code = weatherCode;
  // cloudy
  if (
    code === 1009 ||
    code === 1030 ||
    code === 1009 ||
    code === 1135 ||
    code === 1147
  ) {
    code = 1006;
    return weatherCodes[code];
  }
  // rainy
  if (
    code === 1063 ||
    code === 1030 ||
    code === 1009 ||
    code === 1069 ||
    code === 1072 ||
    code === 1150 ||
    code === 1153 ||
    (code >= 1168 && code <= 1207) ||
    (code >= 1240 && code <= 1252)
  ) {
    code = 1195;
    return weatherCodes[code];
  }

  // snowy
  if (
    code === 1066 ||
    code === 1114 ||
    code === 1117 ||
    (code >= 1210 && code <= 1225) ||
    code === 1237 ||
    (code >= 1255 && code <= 1264)
  ) {
    code = 1014;
    return weatherCodes[code];
  }

  //thunder
  if (code === 1087 || (code >= 1273 && code <= 1282)) {
    code = 1273;
    return weatherCodes[code];
  }

  return weatherCodes[code];
}

function initializeSearchHandlers() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-icon");

  searchButton.addEventListener("click", () => {
    (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchInput.value).then((data) => {
      console.log(data);
      updateDom(data);
    });
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchInput.value).then((data) => {
        console.log(data);
        updateDom(data);
      });
    }
  });
}

function updateDom(data) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";

  const sectionHeader = createHeaderSection(data);
  const sectionWeather = createWeatherSection(data);
  const sectionForecast = createForecastSection(data); // TODO

  mainContainer.appendChild(sectionHeader);
  mainContainer.appendChild(sectionWeather);
  mainContainer.appendChild(sectionForecast); // TODO
}

function createWeatherSection(data) {
  // create main weather section div
  const sectionWeather = createDiv("section-weather");

  //create weather main and its child container divs
  const weatherMain = createDiv("weather-main");
  const weatherMainTop = createDiv("weather-main-top");
  const weatherMainBottom = createDiv("weather-main-bottom");

  console.log(getWeatherIcon(data.current.condition.code));
  console.log(images);
  console.log(imagesAnimated);
  // create weather data divs for weather main div
  const iconWeather = createImg(
    "icon-weather",
    getWeatherIcon(data.current.condition.code)
  );

  const tempWeather = createSpan(
    `temp-weather-${degrees.current}`,
    data.current[`temp_${degrees.current}`]
  );
  const sky_condition = createSpan(
    "sky-condition",
    data.current.condition.text
  );

  const feelsLike = createSpan(
    `feelslike-${degrees.current}`,
    `Feels like ${data.current[`feelslike_${degrees.current}`]}`
  );

  // append data divs to weather main div
  weatherMainTop.append(iconWeather, tempWeather);
  weatherMainBottom.append(sky_condition, feelsLike);
  weatherMain.append(weatherMainTop, weatherMainBottom);

  // create div for weather details
  const weatherDetails = createDiv("weather-details");

  // wind div
  const windDiv = createDiv("details");
  const windParaHeader = createPara("Wind");
  const windParaContent = createPara(`${data.current.wind_kph}m/s`);
  windDiv.append(windParaHeader, windParaContent);

  //humidity div
  const humidityDiv = createDiv("details");
  const humidityParaHeader = createPara("Humidity");
  const humidityParaContent = createPara(`${data.current.humidity}%`);
  humidityDiv.append(humidityParaHeader, humidityParaContent);

  // uv index div
  const uvDiv = createDiv("details");
  const uvParaHeader = createPara("UV index");
  const uvParaContent = createPara(`${data.current.uv}`);
  uvDiv.append(uvParaHeader, uvParaContent);

  // visibility div
  const visDiv = createDiv("details");
  const visParaHeader = createPara("Visibility");
  const visParaContent = createPara(`${data.current.vis_km}`);
  visDiv.append(visParaHeader, visParaContent);

  // cloudiness div
  const cloudDiv = createDiv("details");
  const cloudParaHeader = createPara("Cloudiness");
  const cloudParaContent = createPara(`${data.current.cloud}%`);
  cloudDiv.append(cloudParaHeader, cloudParaContent);

  //chance of rain div
  const rainChanceDiv = createDiv("details");
  const rainChanceParaHeader = createPara("Chance of rain");
  const rainChanceParaContent = createPara(`${data.current.chance_of_rain}%`);
  rainChanceDiv.append(rainChanceParaHeader, rainChanceParaContent);

  // sunrise div
  const sunriseDiv = createDiv("details");
  // const sunriseParaHeader = createPara("Sunrise");
  const sunriseImg = createImg("weather-img", weatherImages.sunrise);
  const sunriseParaContent = createPara(`${data.current.sunrise}`);
  sunriseDiv.append(sunriseImg, sunriseParaContent);

  // sunset div
  const sunsetDiv = createDiv("details");
  // const sunsetParaHeader = createPara("Sunset");
  const sunsetImg = createImg("weather-img", weatherImages.sunset);
  const sunsetParaContent = createPara(`${data.current.sunset}`);
  sunsetDiv.append(sunsetImg, sunsetParaContent);

  // append all divs to main weather details div
  weatherDetails.append(
    windDiv,
    humidityDiv,
    uvDiv,
    visDiv,
    cloudDiv,
    rainChanceDiv,
    sunriseDiv,
    sunsetDiv
  );

  // append weather main and weather details divs to main section
  sectionWeather.append(weatherMain, weatherDetails);

  return sectionWeather;
}

function createForecastSection(data) {
  const sectionForecast = createDiv("section-forecast");

  data.forecast.forecastday.forEach((day) => {
    sectionForecast.appendChild(createForecastDays(day));
  });
  return sectionForecast;
}

function createForecastDays(data) {
  const dayDiv = createDiv("day");

  const condition = createSpan("day-condition", data.day.condition.text);
  const mintemp = createSpan("day-min-temp", data.day.mintemp_c);
  const maxtemp = createSpan("day-max-temp", data.day.maxtemp_c);

  dayDiv.append(condition, mintemp, maxtemp);
  return dayDiv;
}

function createHeaderSection(data) {
  const sectionHeader = createDiv("section-header");

  const locationHeader = document.createElement("h1");
  locationHeader.textContent = `${data.location.name}, ${data.location.country}`;

  const dateHeader = document.createElement("h2");
  dateHeader.textContent = `${data.location.localtime}`;

  sectionHeader.appendChild(locationHeader);
  sectionHeader.appendChild(dateHeader);

  return sectionHeader;
}

function createImg(className, imgData) {
  const img = document.createElement("img");
  img.classList.add(className);
  img.src = imgData;

  return img;
}
function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;

  return para;
}

function createSpan(className, text) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = text;

  return span;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
}




/***/ }),

/***/ "./src/fetch-weather-data.js":
/*!***********************************!*\
  !*** ./src/fetch-weather-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");


async function fetchWeatherData(location = "istanbul") {
  try {
    const weather_api = `https://api.weatherapi.com/v1/forecast.json?key=${
      _config__WEBPACK_IMPORTED_MODULE_0__.config.apiKey
    }&q=${location.toLowerCase()}&days=4`;

    const response = await fetch(weather_api);
    const weatherData = await response.json();
    console.log(weather_api);
    // console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function processData(data) {
  const weatherData = {
    forecast: {
      forecastday: [
        {
          date: data.forecast.forecastday[1].date,
          astro: {
            sunset: data.forecast.forecastday[1].astro.sunset,
            sunrise: data.forecast.forecastday[1].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[1].day.condition },
            maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
          },
        },
        {
          date: data.forecast.forecastday[2].date,
          astro: {
            sunset: data.forecast.forecastday[2].astro.sunset,
            sunrise: data.forecast.forecastday[2].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[2].day.condition },
            maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[2].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[2].day.mintemp_f,
          },
        },
        {
          date: data.forecast.forecastday[3].date,
          astro: {
            sunset: data.forecast.forecastday[3].astro.sunset,
            sunrise: data.forecast.forecastday[3].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[3].day.condition },
            maxtemp_c: data.forecast.forecastday[3].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[3].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[3].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[3].day.mintemp_f,
          },
        },
      ],
    },
    current: {
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      day: data.current.is_day,
      condition: { ...data.current.condition },
      humidity: data.current.humidity,
      cloud: data.current.cloud,
      wind_kph: data.current.wind_kph,
      uv: data.current.uv,
      vis_km: data.current.vis_km,
      chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      sunset: data.forecast.forecastday[0].astro.sunset,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
    },
    location: {
      localtime: data.location.localtime,
      name: data.location.name,
      country: data.location.country,
    },
  };
  return weatherData;
}

async function getWeatherData(location = "istanbul") {
  const data = await fetchWeatherData(location);
  const weatherData = processData(data);
  return weatherData;
}




/***/ }),

/***/ "./src/images/animated sync \\.(png%7Cjpe?g%7Csvg)$":
/*!***********************************************************************!*\
  !*** ./src/images/animated/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cloudy-day-1.svg": "./src/images/animated/cloudy-day-1.svg",
	"./cloudy-day-2.svg": "./src/images/animated/cloudy-day-2.svg",
	"./cloudy-day-3.svg": "./src/images/animated/cloudy-day-3.svg",
	"./cloudy-night-1.svg": "./src/images/animated/cloudy-night-1.svg",
	"./cloudy-night-2.svg": "./src/images/animated/cloudy-night-2.svg",
	"./cloudy-night-3.svg": "./src/images/animated/cloudy-night-3.svg",
	"./cloudy.svg": "./src/images/animated/cloudy.svg",
	"./day.svg": "./src/images/animated/day.svg",
	"./night.svg": "./src/images/animated/night.svg",
	"./rainy-1.svg": "./src/images/animated/rainy-1.svg",
	"./rainy-2.svg": "./src/images/animated/rainy-2.svg",
	"./rainy-3.svg": "./src/images/animated/rainy-3.svg",
	"./rainy-4.svg": "./src/images/animated/rainy-4.svg",
	"./rainy-5.svg": "./src/images/animated/rainy-5.svg",
	"./rainy-6.svg": "./src/images/animated/rainy-6.svg",
	"./rainy-7.svg": "./src/images/animated/rainy-7.svg",
	"./snowy-1.svg": "./src/images/animated/snowy-1.svg",
	"./snowy-2.svg": "./src/images/animated/snowy-2.svg",
	"./snowy-3.svg": "./src/images/animated/snowy-3.svg",
	"./snowy-4.svg": "./src/images/animated/snowy-4.svg",
	"./snowy-5.svg": "./src/images/animated/snowy-5.svg",
	"./snowy-6.svg": "./src/images/animated/snowy-6.svg",
	"./thunder.svg": "./src/images/animated/thunder.svg",
	"./weather-sprite.svg": "./src/images/animated/weather-sprite.svg",
	"./weather.svg": "./src/images/animated/weather.svg",
	"./weather_sagittarius.svg": "./src/images/animated/weather_sagittarius.svg",
	"./weather_sunset.svg": "./src/images/animated/weather_sunset.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/animated sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app_logo.svg": "./src/images/app_logo.svg",
	"./sunrise.svg": "./src/images/sunrise.svg",
	"./sunset.svg": "./src/images/sunset.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/images/animated/cloudy-day-1.svg":
/*!**********************************************!*\
  !*** ./src/images/animated/cloudy-day-1.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-day-1213f9a41fb1665620980.svg";

/***/ }),

/***/ "./src/images/animated/cloudy-day-2.svg":
/*!**********************************************!*\
  !*** ./src/images/animated/cloudy-day-2.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-day-27fb7ecfc8c851acab6d1.svg";

/***/ }),

/***/ "./src/images/animated/cloudy-day-3.svg":
/*!**********************************************!*\
  !*** ./src/images/animated/cloudy-day-3.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-day-32164d3c4f5b55bd11f03.svg";

/***/ }),

/***/ "./src/images/animated/cloudy-night-1.svg":
/*!************************************************!*\
  !*** ./src/images/animated/cloudy-night-1.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-night-14e6a9fdeed0f295b3dfb.svg";

/***/ }),

/***/ "./src/images/animated/cloudy-night-2.svg":
/*!************************************************!*\
  !*** ./src/images/animated/cloudy-night-2.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-night-24a43954d6d49ed062d0c.svg";

/***/ }),

/***/ "./src/images/animated/cloudy-night-3.svg":
/*!************************************************!*\
  !*** ./src/images/animated/cloudy-night-3.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy-night-3e2327d5071146989f596.svg";

/***/ }),

/***/ "./src/images/animated/cloudy.svg":
/*!****************************************!*\
  !*** ./src/images/animated/cloudy.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cloudy24f9a4741fe33f66bc0d.svg";

/***/ }),

/***/ "./src/images/animated/day.svg":
/*!*************************************!*\
  !*** ./src/images/animated/day.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dayc33ef66438b2725bead5.svg";

/***/ }),

/***/ "./src/images/animated/night.svg":
/*!***************************************!*\
  !*** ./src/images/animated/night.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/night6cf4adcd3e5042b69048.svg";

/***/ }),

/***/ "./src/images/animated/rainy-1.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-144fb82231e1f5a7515c3.svg";

/***/ }),

/***/ "./src/images/animated/rainy-2.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-2523a54b86f32a04f4415.svg";

/***/ }),

/***/ "./src/images/animated/rainy-3.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-3.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-38c33eccc717e097dc00a.svg";

/***/ }),

/***/ "./src/images/animated/rainy-4.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-4.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-49988edfd7ac66c28e664.svg";

/***/ }),

/***/ "./src/images/animated/rainy-5.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-5.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-5a8183a992545bbb02f27.svg";

/***/ }),

/***/ "./src/images/animated/rainy-6.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-6.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-6130d6250fca4e54ff49f.svg";

/***/ }),

/***/ "./src/images/animated/rainy-7.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/rainy-7.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rainy-79305701c616e797ab473.svg";

/***/ }),

/***/ "./src/images/animated/snowy-1.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-127113af0c662be019fac.svg";

/***/ }),

/***/ "./src/images/animated/snowy-2.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-23be1e2a1569fa9b0bbc6.svg";

/***/ }),

/***/ "./src/images/animated/snowy-3.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-3.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-3b5422f54f9f554eb98f8.svg";

/***/ }),

/***/ "./src/images/animated/snowy-4.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-4.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-437766ef22ceaca76db6b.svg";

/***/ }),

/***/ "./src/images/animated/snowy-5.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-5.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-5c90a1604f5f5f5bea2ed.svg";

/***/ }),

/***/ "./src/images/animated/snowy-6.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/snowy-6.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/snowy-6dce3f5e7e7d2c7e342ff.svg";

/***/ }),

/***/ "./src/images/animated/thunder.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/thunder.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/thunder19ff3c30164844769f3c.svg";

/***/ }),

/***/ "./src/images/animated/weather-sprite.svg":
/*!************************************************!*\
  !*** ./src/images/animated/weather-sprite.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weather-spritef1b68f31a5d099e878b2.svg";

/***/ }),

/***/ "./src/images/animated/weather.svg":
/*!*****************************************!*\
  !*** ./src/images/animated/weather.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weather7eb9134042731e973e95.svg";

/***/ }),

/***/ "./src/images/animated/weather_sagittarius.svg":
/*!*****************************************************!*\
  !*** ./src/images/animated/weather_sagittarius.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weather_sagittarius1dbfbad51f0f1cd52ac6.svg";

/***/ }),

/***/ "./src/images/animated/weather_sunset.svg":
/*!************************************************!*\
  !*** ./src/images/animated/weather_sunset.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weather_sunset729d4eea9039a92760ff.svg";

/***/ }),

/***/ "./src/images/app_logo.svg":
/*!*********************************!*\
  !*** ./src/images/app_logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/app_logo4344d250c25f442a2970.svg";

/***/ }),

/***/ "./src/images/sunrise.svg":
/*!********************************!*\
  !*** ./src/images/sunrise.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sunrise091aa58b11ebf1395404.svg";

/***/ }),

/***/ "./src/images/sunset.svg":
/*!*******************************!*\
  !*** ./src/images/sunset.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sunset6444782c7a19ea35d19e.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");




(0,_dom_manip__WEBPACK_IMPORTED_MODULE_1__.initializeSearchHandlers)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsc0JBQXNCLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFB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QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1tYW5pcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC13ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW1hZ2VzL2FuaW1hdGVkLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltYWdlcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIHJlc2V0ICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBCb2R5IHN0eWxpbmcgKi9cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMDlhYjMsICM0NjA1NzQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xubmF2IHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4vKiBJbnB1dCBmaWVsZCBzdHlsaW5nICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDI1NnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi8qIFNlYXJjaCBidXR0b24gc3R5bGluZyAqL1xuLnNlYXJjaC1idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qIFNlYXJjaCBjb250YWluZXIgc3R5bGluZyAqL1xuLnNlYXJjaCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjgpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzLCBiYWNrZ3JvdW5kIDAuMjVzO1xufVxuXG4uc2VhcmNoOmZvY3VzLXdpdGhpbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC45KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLyogU2VhcmNoIGlucHV0IHN0eWxpbmcgKi9cbi5zZWFyY2gtaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi8qIFNlYXJjaCBpY29uIHN0eWxpbmcgKi9cbi5zZWFyY2gtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLyogTWFpbiBjb250YWluZXIgc3R5bGluZyAqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBnYXA6IDJlbTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBXZWF0aGVyIHNlY3Rpb24gc3R5bGluZyAqL1xuLnNlY3Rpb24td2VhdGhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMmVtO1xufVxuXG4vKiBXZWF0aGVyIG1haW4gc2VjdGlvbiBzdHlsaW5nICovXG4ud2VhdGhlci1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi53ZWF0aGVyLW1haW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi8qIFdlYXRoZXIgbWFpbiB0b3Agc3R5bGluZyAqL1xuLndlYXRoZXItbWFpbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLndlYXRoZXItbWFpbi10b3AgaSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZDcwMDsgLyogRXhhbXBsZSBmb3IgaWNvbiBjb2xvciwgY2FuIGJlIGNoYW5nZWQgKi9cbn1cblxuLyogV2VhdGhlciBtYWluIGJvdHRvbSBzdHlsaW5nICovXG4ud2VhdGhlci1tYWluLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLndlYXRoZXItbWFpbi1ib3R0b20gc3BhbiB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4vKiBXZWF0aGVyIGRldGFpbHMgc3R5bGluZyAqL1xuLndlYXRoZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICBnYXA6IDJlbTtcbn1cblxuLyogU3R5bGUgaW5kaXZpZHVhbCB3ZWF0aGVyIGRldGFpbCBpdGVtcyAqL1xuLndlYXRoZXItZGV0YWlscyA+ICoge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi53ZWF0aGVyLWRldGFpbHMgPiAqOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VjdGlvbi1mb3JlY2FzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5zZWN0aW9uLWZvcmVjYXN0ID4gKiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxZW07XG59XG5cbi53ZWF0aGVyLWltZyB7XG4gIHdpZHRoOiAzZW07XG59XG4uaWNvbi13ZWF0aGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnRlbXAtd2VhdGhlciB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi50ZW1wLXdlYXRoZXItYzo6YWZ0ZXIsXG4uZmVlbHNsaWtlLWM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcXFxcMjEwM1wiO1xufVxuLnRlbXAtd2VhdGhlci1mOjphZnRlcixcbi5mZWVsc2xpa2UtZjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcXFwyMTA5XCI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixnQ0FBZ0M7QUFDbEM7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdDQUF3QztBQUMxQzs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYyxFQUFFLDJDQUEyQztBQUM3RDs7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFFBQVE7QUFDVjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCByZXNldCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJvZHkgc3R5bGluZyAqL1xcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwOWFiMywgIzQ2MDU3NCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xcbm5hdiB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblxcbi8qIElucHV0IGZpZWxkIHN0eWxpbmcgKi9cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDI1NnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4vKiBTZWFyY2ggYnV0dG9uIHN0eWxpbmcgKi9cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLyogU2VhcmNoIGNvbnRhaW5lciBzdHlsaW5nICovXFxuLnNlYXJjaCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjgpO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cywgYmFja2dyb3VuZCAwLjI1cztcXG59XFxuXFxuLnNlYXJjaDpmb2N1cy13aXRoaW4ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLyogU2VhcmNoIGlucHV0IHN0eWxpbmcgKi9cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi8qIFNlYXJjaCBpY29uIHN0eWxpbmcgKi9cXG4uc2VhcmNoLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcblxcbi5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRhaW5lciBzdHlsaW5nICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBXZWF0aGVyIHNlY3Rpb24gc3R5bGluZyAqL1xcbi5zZWN0aW9uLXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4vKiBXZWF0aGVyIG1haW4gc2VjdGlvbiBzdHlsaW5nICovXFxuLndlYXRoZXItbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcblxcbi53ZWF0aGVyLW1haW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4vKiBXZWF0aGVyIG1haW4gdG9wIHN0eWxpbmcgKi9cXG4ud2VhdGhlci1tYWluLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4ud2VhdGhlci1tYWluLXRvcCBpIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmQ3MDA7IC8qIEV4YW1wbGUgZm9yIGljb24gY29sb3IsIGNhbiBiZSBjaGFuZ2VkICovXFxufVxcblxcbi8qIFdlYXRoZXIgbWFpbiBib3R0b20gc3R5bGluZyAqL1xcbi53ZWF0aGVyLW1haW4tYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi53ZWF0aGVyLW1haW4tYm90dG9tIHNwYW4ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxufVxcblxcbi8qIFdlYXRoZXIgZGV0YWlscyBzdHlsaW5nICovXFxuLndlYXRoZXItZGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLyogU3R5bGUgaW5kaXZpZHVhbCB3ZWF0aGVyIGRldGFpbCBpdGVtcyAqL1xcbi53ZWF0aGVyLWRldGFpbHMgPiAqIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzID4gKjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VjdGlvbi1mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLnNlY3Rpb24tZm9yZWNhc3QgPiAqIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLndlYXRoZXItaW1nIHtcXG4gIHdpZHRoOiAzZW07XFxufVxcbi5pY29uLXdlYXRoZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4udGVtcC13ZWF0aGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLnRlbXAtd2VhdGhlci1jOjphZnRlcixcXG4uZmVlbHNsaWtlLWM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjEwM1xcXCI7XFxufVxcbi50ZW1wLXdlYXRoZXItZjo6YWZ0ZXIsXFxuLmZlZWxzbGlrZS1mOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIxMDlcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiZTZlMWE5NWY2OTdlNDhjYWE3NDEyMTkxNzI0MDkwNlwiLFxufTtcblxuZXhwb3J0IHsgY29uZmlnIH07XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2ZldGNoLXdlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBkZWdyZWVzID0ge1xuICBjdXJyZW50OiBcImZcIiwgLy8gVE9ETyBzd2l0Y2ggdG8gYyBvciBmXG4gIGNlbGNpdXM6IFwiJiMxNzY7XCIsXG4gIGZhaHJlbmhlaXQ6IFwiJiM4NDU3O1wiLFxufTtcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pLmRlZmF1bHQgfHwgcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChcbiAgcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcbik7XG5cbmNvbnN0IGltYWdlc0FuaW1hdGVkID0gaW1wb3J0QWxsKFxuICByZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlcy9hbmltYXRlZFwiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKVxuKTtcblxuY29uc3Qgd2VhdGhlckltYWdlcyA9IHtcbiAgYXBwX2xvZ286IGltYWdlc1tcImFwcF9sb2dvLnN2Z1wiXSxcbiAgc3VucmlzZTogaW1hZ2VzW1wic3VucmlzZS5zdmdcIl0sXG4gIHN1bnNldDogaW1hZ2VzW1wic3Vuc2V0LnN2Z1wiXSxcbiAgZGF5OiBpbWFnZXNBbmltYXRlZFtcImRheS5zdmdcIl0sXG4gIG5pZ2h0OiBpbWFnZXNBbmltYXRlZFtcIm5pZ2h0LnN2Z1wiXSxcbiAgcGFydGx5X2Nsb3VkeTogaW1hZ2VzQW5pbWF0ZWRbXCJjbG91ZHktZGF5LTIuc3ZnXCJdLFxuICBjbG91ZHk6IGltYWdlc0FuaW1hdGVkW1wiY2xvdWR5LnN2Z1wiXSxcbiAgc3VubnlfcmFpbnk6IGltYWdlc0FuaW1hdGVkW1wicmFpbnktMS5zdmdcIl0sXG4gIHJhaW55OiBpbWFnZXNBbmltYXRlZFtcInJhaW55LTYuc3ZnXCJdLFxuICBzdW5ueV9zbm93eTogaW1hZ2VzQW5pbWF0ZWRbXCJzbm93eS0xLnN2Z1wiXSxcbiAgc25vd3k6IGltYWdlc0FuaW1hdGVkW1wic25vd3ktNS5zdmdcIl0sXG4gIHRodW5kZXI6IGltYWdlc0FuaW1hdGVkW1widGh1bmRlci5zdmdcIl0sXG59O1xuY29uc3Qgd2VhdGhlckNvZGVzID0ge1xuICAxMDAwOiB3ZWF0aGVySW1hZ2VzLmRheSxcbiAgMTAwMzogd2VhdGhlckltYWdlcy5wYXJ0bHlfY2xvdWR5LFxuICAxMDA2OiB3ZWF0aGVySW1hZ2VzLmNsb3VkeSxcbiAgMTA2Njogd2VhdGhlckltYWdlcy5zdW5ueV9zbm93eSxcbiAgMTAxNDogd2VhdGhlckltYWdlcy5zbm93eSxcbiAgMTE4MDogd2VhdGhlckltYWdlcy5zdW5ueV9yYWlueSxcbiAgMTE5NTogd2VhdGhlckltYWdlcy5yYWlueSxcbiAgMTI3Mzogd2VhdGhlckltYWdlcy50aHVuZGVyLFxufTtcbmZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKHdlYXRoZXJDb2RlKSB7XG4gIGxldCBjb2RlID0gd2VhdGhlckNvZGU7XG4gIC8vIGNsb3VkeVxuICBpZiAoXG4gICAgY29kZSA9PT0gMTAwOSB8fFxuICAgIGNvZGUgPT09IDEwMzAgfHxcbiAgICBjb2RlID09PSAxMDA5IHx8XG4gICAgY29kZSA9PT0gMTEzNSB8fFxuICAgIGNvZGUgPT09IDExNDdcbiAgKSB7XG4gICAgY29kZSA9IDEwMDY7XG4gICAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcbiAgfVxuICAvLyByYWlueVxuICBpZiAoXG4gICAgY29kZSA9PT0gMTA2MyB8fFxuICAgIGNvZGUgPT09IDEwMzAgfHxcbiAgICBjb2RlID09PSAxMDA5IHx8XG4gICAgY29kZSA9PT0gMTA2OSB8fFxuICAgIGNvZGUgPT09IDEwNzIgfHxcbiAgICBjb2RlID09PSAxMTUwIHx8XG4gICAgY29kZSA9PT0gMTE1MyB8fFxuICAgIChjb2RlID49IDExNjggJiYgY29kZSA8PSAxMjA3KSB8fFxuICAgIChjb2RlID49IDEyNDAgJiYgY29kZSA8PSAxMjUyKVxuICApIHtcbiAgICBjb2RlID0gMTE5NTtcbiAgICByZXR1cm4gd2VhdGhlckNvZGVzW2NvZGVdO1xuICB9XG5cbiAgLy8gc25vd3lcbiAgaWYgKFxuICAgIGNvZGUgPT09IDEwNjYgfHxcbiAgICBjb2RlID09PSAxMTE0IHx8XG4gICAgY29kZSA9PT0gMTExNyB8fFxuICAgIChjb2RlID49IDEyMTAgJiYgY29kZSA8PSAxMjI1KSB8fFxuICAgIGNvZGUgPT09IDEyMzcgfHxcbiAgICAoY29kZSA+PSAxMjU1ICYmIGNvZGUgPD0gMTI2NClcbiAgKSB7XG4gICAgY29kZSA9IDEwMTQ7XG4gICAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcbiAgfVxuXG4gIC8vdGh1bmRlclxuICBpZiAoY29kZSA9PT0gMTA4NyB8fCAoY29kZSA+PSAxMjczICYmIGNvZGUgPD0gMTI4MikpIHtcbiAgICBjb2RlID0gMTI3MztcbiAgICByZXR1cm4gd2VhdGhlckNvZGVzW2NvZGVdO1xuICB9XG5cbiAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNlYXJjaEhhbmRsZXJzKCkge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uXCIpO1xuXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdldFdlYXRoZXJEYXRhKHNlYXJjaElucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHVwZGF0ZURvbShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHVwZGF0ZURvbShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbShkYXRhKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGNyZWF0ZUhlYWRlclNlY3Rpb24oZGF0YSk7XG4gIGNvbnN0IHNlY3Rpb25XZWF0aGVyID0gY3JlYXRlV2VhdGhlclNlY3Rpb24oZGF0YSk7XG4gIGNvbnN0IHNlY3Rpb25Gb3JlY2FzdCA9IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbihkYXRhKTsgLy8gVE9ET1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbldlYXRoZXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25Gb3JlY2FzdCk7IC8vIFRPRE9cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlclNlY3Rpb24oZGF0YSkge1xuICAvLyBjcmVhdGUgbWFpbiB3ZWF0aGVyIHNlY3Rpb24gZGl2XG4gIGNvbnN0IHNlY3Rpb25XZWF0aGVyID0gY3JlYXRlRGl2KFwic2VjdGlvbi13ZWF0aGVyXCIpO1xuXG4gIC8vY3JlYXRlIHdlYXRoZXIgbWFpbiBhbmQgaXRzIGNoaWxkIGNvbnRhaW5lciBkaXZzXG4gIGNvbnN0IHdlYXRoZXJNYWluID0gY3JlYXRlRGl2KFwid2VhdGhlci1tYWluXCIpO1xuICBjb25zdCB3ZWF0aGVyTWFpblRvcCA9IGNyZWF0ZURpdihcIndlYXRoZXItbWFpbi10b3BcIik7XG4gIGNvbnN0IHdlYXRoZXJNYWluQm90dG9tID0gY3JlYXRlRGl2KFwid2VhdGhlci1tYWluLWJvdHRvbVwiKTtcblxuICBjb25zb2xlLmxvZyhnZXRXZWF0aGVySWNvbihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGUpKTtcbiAgY29uc29sZS5sb2coaW1hZ2VzKTtcbiAgY29uc29sZS5sb2coaW1hZ2VzQW5pbWF0ZWQpO1xuICAvLyBjcmVhdGUgd2VhdGhlciBkYXRhIGRpdnMgZm9yIHdlYXRoZXIgbWFpbiBkaXZcbiAgY29uc3QgaWNvbldlYXRoZXIgPSBjcmVhdGVJbWcoXG4gICAgXCJpY29uLXdlYXRoZXJcIixcbiAgICBnZXRXZWF0aGVySWNvbihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGUpXG4gICk7XG5cbiAgY29uc3QgdGVtcFdlYXRoZXIgPSBjcmVhdGVTcGFuKFxuICAgIGB0ZW1wLXdlYXRoZXItJHtkZWdyZWVzLmN1cnJlbnR9YCxcbiAgICBkYXRhLmN1cnJlbnRbYHRlbXBfJHtkZWdyZWVzLmN1cnJlbnR9YF1cbiAgKTtcbiAgY29uc3Qgc2t5X2NvbmRpdGlvbiA9IGNyZWF0ZVNwYW4oXG4gICAgXCJza3ktY29uZGl0aW9uXCIsXG4gICAgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XG4gICk7XG5cbiAgY29uc3QgZmVlbHNMaWtlID0gY3JlYXRlU3BhbihcbiAgICBgZmVlbHNsaWtlLSR7ZGVncmVlcy5jdXJyZW50fWAsXG4gICAgYEZlZWxzIGxpa2UgJHtkYXRhLmN1cnJlbnRbYGZlZWxzbGlrZV8ke2RlZ3JlZXMuY3VycmVudH1gXX1gXG4gICk7XG5cbiAgLy8gYXBwZW5kIGRhdGEgZGl2cyB0byB3ZWF0aGVyIG1haW4gZGl2XG4gIHdlYXRoZXJNYWluVG9wLmFwcGVuZChpY29uV2VhdGhlciwgdGVtcFdlYXRoZXIpO1xuICB3ZWF0aGVyTWFpbkJvdHRvbS5hcHBlbmQoc2t5X2NvbmRpdGlvbiwgZmVlbHNMaWtlKTtcbiAgd2VhdGhlck1haW4uYXBwZW5kKHdlYXRoZXJNYWluVG9wLCB3ZWF0aGVyTWFpbkJvdHRvbSk7XG5cbiAgLy8gY3JlYXRlIGRpdiBmb3Igd2VhdGhlciBkZXRhaWxzXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gY3JlYXRlRGl2KFwid2VhdGhlci1kZXRhaWxzXCIpO1xuXG4gIC8vIHdpbmQgZGl2XG4gIGNvbnN0IHdpbmREaXYgPSBjcmVhdGVEaXYoXCJkZXRhaWxzXCIpO1xuICBjb25zdCB3aW5kUGFyYUhlYWRlciA9IGNyZWF0ZVBhcmEoXCJXaW5kXCIpO1xuICBjb25zdCB3aW5kUGFyYUNvbnRlbnQgPSBjcmVhdGVQYXJhKGAke2RhdGEuY3VycmVudC53aW5kX2twaH1tL3NgKTtcbiAgd2luZERpdi5hcHBlbmQod2luZFBhcmFIZWFkZXIsIHdpbmRQYXJhQ29udGVudCk7XG5cbiAgLy9odW1pZGl0eSBkaXZcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBjcmVhdGVEaXYoXCJkZXRhaWxzXCIpO1xuICBjb25zdCBodW1pZGl0eVBhcmFIZWFkZXIgPSBjcmVhdGVQYXJhKFwiSHVtaWRpdHlcIik7XG4gIGNvbnN0IGh1bWlkaXR5UGFyYUNvbnRlbnQgPSBjcmVhdGVQYXJhKGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYCk7XG4gIGh1bWlkaXR5RGl2LmFwcGVuZChodW1pZGl0eVBhcmFIZWFkZXIsIGh1bWlkaXR5UGFyYUNvbnRlbnQpO1xuXG4gIC8vIHV2IGluZGV4IGRpdlxuICBjb25zdCB1dkRpdiA9IGNyZWF0ZURpdihcImRldGFpbHNcIik7XG4gIGNvbnN0IHV2UGFyYUhlYWRlciA9IGNyZWF0ZVBhcmEoXCJVViBpbmRleFwiKTtcbiAgY29uc3QgdXZQYXJhQ29udGVudCA9IGNyZWF0ZVBhcmEoYCR7ZGF0YS5jdXJyZW50LnV2fWApO1xuICB1dkRpdi5hcHBlbmQodXZQYXJhSGVhZGVyLCB1dlBhcmFDb250ZW50KTtcblxuICAvLyB2aXNpYmlsaXR5IGRpdlxuICBjb25zdCB2aXNEaXYgPSBjcmVhdGVEaXYoXCJkZXRhaWxzXCIpO1xuICBjb25zdCB2aXNQYXJhSGVhZGVyID0gY3JlYXRlUGFyYShcIlZpc2liaWxpdHlcIik7XG4gIGNvbnN0IHZpc1BhcmFDb250ZW50ID0gY3JlYXRlUGFyYShgJHtkYXRhLmN1cnJlbnQudmlzX2ttfWApO1xuICB2aXNEaXYuYXBwZW5kKHZpc1BhcmFIZWFkZXIsIHZpc1BhcmFDb250ZW50KTtcblxuICAvLyBjbG91ZGluZXNzIGRpdlxuICBjb25zdCBjbG91ZERpdiA9IGNyZWF0ZURpdihcImRldGFpbHNcIik7XG4gIGNvbnN0IGNsb3VkUGFyYUhlYWRlciA9IGNyZWF0ZVBhcmEoXCJDbG91ZGluZXNzXCIpO1xuICBjb25zdCBjbG91ZFBhcmFDb250ZW50ID0gY3JlYXRlUGFyYShgJHtkYXRhLmN1cnJlbnQuY2xvdWR9JWApO1xuICBjbG91ZERpdi5hcHBlbmQoY2xvdWRQYXJhSGVhZGVyLCBjbG91ZFBhcmFDb250ZW50KTtcblxuICAvL2NoYW5jZSBvZiByYWluIGRpdlxuICBjb25zdCByYWluQ2hhbmNlRGl2ID0gY3JlYXRlRGl2KFwiZGV0YWlsc1wiKTtcbiAgY29uc3QgcmFpbkNoYW5jZVBhcmFIZWFkZXIgPSBjcmVhdGVQYXJhKFwiQ2hhbmNlIG9mIHJhaW5cIik7XG4gIGNvbnN0IHJhaW5DaGFuY2VQYXJhQ29udGVudCA9IGNyZWF0ZVBhcmEoYCR7ZGF0YS5jdXJyZW50LmNoYW5jZV9vZl9yYWlufSVgKTtcbiAgcmFpbkNoYW5jZURpdi5hcHBlbmQocmFpbkNoYW5jZVBhcmFIZWFkZXIsIHJhaW5DaGFuY2VQYXJhQ29udGVudCk7XG5cbiAgLy8gc3VucmlzZSBkaXZcbiAgY29uc3Qgc3VucmlzZURpdiA9IGNyZWF0ZURpdihcImRldGFpbHNcIik7XG4gIC8vIGNvbnN0IHN1bnJpc2VQYXJhSGVhZGVyID0gY3JlYXRlUGFyYShcIlN1bnJpc2VcIik7XG4gIGNvbnN0IHN1bnJpc2VJbWcgPSBjcmVhdGVJbWcoXCJ3ZWF0aGVyLWltZ1wiLCB3ZWF0aGVySW1hZ2VzLnN1bnJpc2UpO1xuICBjb25zdCBzdW5yaXNlUGFyYUNvbnRlbnQgPSBjcmVhdGVQYXJhKGAke2RhdGEuY3VycmVudC5zdW5yaXNlfWApO1xuICBzdW5yaXNlRGl2LmFwcGVuZChzdW5yaXNlSW1nLCBzdW5yaXNlUGFyYUNvbnRlbnQpO1xuXG4gIC8vIHN1bnNldCBkaXZcbiAgY29uc3Qgc3Vuc2V0RGl2ID0gY3JlYXRlRGl2KFwiZGV0YWlsc1wiKTtcbiAgLy8gY29uc3Qgc3Vuc2V0UGFyYUhlYWRlciA9IGNyZWF0ZVBhcmEoXCJTdW5zZXRcIik7XG4gIGNvbnN0IHN1bnNldEltZyA9IGNyZWF0ZUltZyhcIndlYXRoZXItaW1nXCIsIHdlYXRoZXJJbWFnZXMuc3Vuc2V0KTtcbiAgY29uc3Qgc3Vuc2V0UGFyYUNvbnRlbnQgPSBjcmVhdGVQYXJhKGAke2RhdGEuY3VycmVudC5zdW5zZXR9YCk7XG4gIHN1bnNldERpdi5hcHBlbmQoc3Vuc2V0SW1nLCBzdW5zZXRQYXJhQ29udGVudCk7XG5cbiAgLy8gYXBwZW5kIGFsbCBkaXZzIHRvIG1haW4gd2VhdGhlciBkZXRhaWxzIGRpdlxuICB3ZWF0aGVyRGV0YWlscy5hcHBlbmQoXG4gICAgd2luZERpdixcbiAgICBodW1pZGl0eURpdixcbiAgICB1dkRpdixcbiAgICB2aXNEaXYsXG4gICAgY2xvdWREaXYsXG4gICAgcmFpbkNoYW5jZURpdixcbiAgICBzdW5yaXNlRGl2LFxuICAgIHN1bnNldERpdlxuICApO1xuXG4gIC8vIGFwcGVuZCB3ZWF0aGVyIG1haW4gYW5kIHdlYXRoZXIgZGV0YWlscyBkaXZzIHRvIG1haW4gc2VjdGlvblxuICBzZWN0aW9uV2VhdGhlci5hcHBlbmQod2VhdGhlck1haW4sIHdlYXRoZXJEZXRhaWxzKTtcblxuICByZXR1cm4gc2VjdGlvbldlYXRoZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0U2VjdGlvbihkYXRhKSB7XG4gIGNvbnN0IHNlY3Rpb25Gb3JlY2FzdCA9IGNyZWF0ZURpdihcInNlY3Rpb24tZm9yZWNhc3RcIik7XG5cbiAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICBzZWN0aW9uRm9yZWNhc3QuYXBwZW5kQ2hpbGQoY3JlYXRlRm9yZWNhc3REYXlzKGRheSkpO1xuICB9KTtcbiAgcmV0dXJuIHNlY3Rpb25Gb3JlY2FzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3REYXlzKGRhdGEpIHtcbiAgY29uc3QgZGF5RGl2ID0gY3JlYXRlRGl2KFwiZGF5XCIpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbiA9IGNyZWF0ZVNwYW4oXCJkYXktY29uZGl0aW9uXCIsIGRhdGEuZGF5LmNvbmRpdGlvbi50ZXh0KTtcbiAgY29uc3QgbWludGVtcCA9IGNyZWF0ZVNwYW4oXCJkYXktbWluLXRlbXBcIiwgZGF0YS5kYXkubWludGVtcF9jKTtcbiAgY29uc3QgbWF4dGVtcCA9IGNyZWF0ZVNwYW4oXCJkYXktbWF4LXRlbXBcIiwgZGF0YS5kYXkubWF4dGVtcF9jKTtcblxuICBkYXlEaXYuYXBwZW5kKGNvbmRpdGlvbiwgbWludGVtcCwgbWF4dGVtcCk7XG4gIHJldHVybiBkYXlEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlclNlY3Rpb24oZGF0YSkge1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gY3JlYXRlRGl2KFwic2VjdGlvbi1oZWFkZXJcIik7XG5cbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5sb2NhdGlvbi5uYW1lfSwgJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICBjb25zdCBkYXRlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YDtcblxuICBzZWN0aW9uSGVhZGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcbiAgc2VjdGlvbkhlYWRlci5hcHBlbmRDaGlsZChkYXRlSGVhZGVyKTtcblxuICByZXR1cm4gc2VjdGlvbkhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nKGNsYXNzTmFtZSwgaW1nRGF0YSkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpbWcuc3JjID0gaW1nRGF0YTtcblxuICByZXR1cm4gaW1nO1xufVxuZnVuY3Rpb24gY3JlYXRlUGFyYSh0ZXh0KSB7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIHBhcmE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW4oY2xhc3NOYW1lLCB0ZXh0KSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVNlYXJjaEhhbmRsZXJzIH07XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiA9IFwiaXN0YW5idWxcIikge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJfYXBpID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7XG4gICAgICBjb25maWcuYXBpS2V5XG4gICAgfSZxPSR7bG9jYXRpb24udG9Mb3dlckNhc2UoKX0mZGF5cz00YDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlcl9hcGkpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJfYXBpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XG4gICAgZm9yZWNhc3Q6IHtcbiAgICAgIGZvcmVjYXN0ZGF5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsXG4gICAgICAgICAgYXN0cm86IHtcbiAgICAgICAgICAgIHN1bnNldDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5hc3Ryby5zdW5zZXQsXG4gICAgICAgICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmFzdHJvLnN1bnJpc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXk6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogeyAuLi5kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24gfSxcbiAgICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUsXG4gICAgICAgICAgYXN0cm86IHtcbiAgICAgICAgICAgIHN1bnNldDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5hc3Ryby5zdW5zZXQsXG4gICAgICAgICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmFzdHJvLnN1bnJpc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXk6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogeyAuLi5kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24gfSxcbiAgICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRhdGUsXG4gICAgICAgICAgYXN0cm86IHtcbiAgICAgICAgICAgIHN1bnNldDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5hc3Ryby5zdW5zZXQsXG4gICAgICAgICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmFzdHJvLnN1bnJpc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXk6IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogeyAuLi5kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24gfSxcbiAgICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgdGVtcF9jOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgdGVtcF9mOiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgZmVlbHNsaWtlX2M6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgIGZlZWxzbGlrZV9mOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICBkYXk6IGRhdGEuY3VycmVudC5pc19kYXksXG4gICAgICBjb25kaXRpb246IHsgLi4uZGF0YS5jdXJyZW50LmNvbmRpdGlvbiB9LFxuICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgIGNsb3VkOiBkYXRhLmN1cnJlbnQuY2xvdWQsXG4gICAgICB3aW5kX2twaDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgdXY6IGRhdGEuY3VycmVudC51dixcbiAgICAgIHZpc19rbTogZGF0YS5jdXJyZW50LnZpc19rbSxcbiAgICAgIGNoYW5jZV9vZl9yYWluOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgIHN1bnNldDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQsXG4gICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2UsXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgbG9jYWx0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIG5hbWU6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uID0gXCJpc3RhbmJ1bFwiKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBwcm9jZXNzRGF0YShkYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2Nsb3VkeS1kYXktMS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvY2xvdWR5LWRheS0xLnN2Z1wiLFxuXHRcIi4vY2xvdWR5LWRheS0yLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9jbG91ZHktZGF5LTIuc3ZnXCIsXG5cdFwiLi9jbG91ZHktZGF5LTMuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL2Nsb3VkeS1kYXktMy5zdmdcIixcblx0XCIuL2Nsb3VkeS1uaWdodC0xLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9jbG91ZHktbmlnaHQtMS5zdmdcIixcblx0XCIuL2Nsb3VkeS1uaWdodC0yLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9jbG91ZHktbmlnaHQtMi5zdmdcIixcblx0XCIuL2Nsb3VkeS1uaWdodC0zLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9jbG91ZHktbmlnaHQtMy5zdmdcIixcblx0XCIuL2Nsb3VkeS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvY2xvdWR5LnN2Z1wiLFxuXHRcIi4vZGF5LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9kYXkuc3ZnXCIsXG5cdFwiLi9uaWdodC5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvbmlnaHQuc3ZnXCIsXG5cdFwiLi9yYWlueS0xLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9yYWlueS0xLnN2Z1wiLFxuXHRcIi4vcmFpbnktMi5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvcmFpbnktMi5zdmdcIixcblx0XCIuL3JhaW55LTMuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3JhaW55LTMuc3ZnXCIsXG5cdFwiLi9yYWlueS00LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9yYWlueS00LnN2Z1wiLFxuXHRcIi4vcmFpbnktNS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvcmFpbnktNS5zdmdcIixcblx0XCIuL3JhaW55LTYuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3JhaW55LTYuc3ZnXCIsXG5cdFwiLi9yYWlueS03LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9yYWlueS03LnN2Z1wiLFxuXHRcIi4vc25vd3ktMS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvc25vd3ktMS5zdmdcIixcblx0XCIuL3Nub3d5LTIuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3Nub3d5LTIuc3ZnXCIsXG5cdFwiLi9zbm93eS0zLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9zbm93eS0zLnN2Z1wiLFxuXHRcIi4vc25vd3ktNC5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvc25vd3ktNC5zdmdcIixcblx0XCIuL3Nub3d5LTUuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3Nub3d5LTUuc3ZnXCIsXG5cdFwiLi9zbm93eS02LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC9zbm93eS02LnN2Z1wiLFxuXHRcIi4vdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQvdGh1bmRlci5zdmdcIixcblx0XCIuL3dlYXRoZXItc3ByaXRlLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC93ZWF0aGVyLXNwcml0ZS5zdmdcIixcblx0XCIuL3dlYXRoZXIuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3dlYXRoZXIuc3ZnXCIsXG5cdFwiLi93ZWF0aGVyX3NhZ2l0dGFyaXVzLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hbmltYXRlZC93ZWF0aGVyX3NhZ2l0dGFyaXVzLnN2Z1wiLFxuXHRcIi4vd2VhdGhlcl9zdW5zZXQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL2FuaW1hdGVkL3dlYXRoZXJfc3Vuc2V0LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvYW5pbWF0ZWQgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcF9sb2dvLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9hcHBfbG9nby5zdmdcIixcblx0XCIuL3N1bnJpc2Uuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3N1bnJpc2Uuc3ZnXCIsXG5cdFwiLi9zdW5zZXQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3N1bnNldC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZVNlYXJjaEhhbmRsZXJzIH0gZnJvbSBcIi4vZG9tLW1hbmlwXCI7XG5cbmluaXRpYWxpemVTZWFyY2hIYW5kbGVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9