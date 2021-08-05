/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: scroll;\n}\n\n.pointer:hover {\n  cursor: pointer;\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: #202020;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\nheader nav {\n  gap: 30px;\n}\nheader nav a {\n  color: white;\n}\nheader nav a:hover {\n  color: red;\n}\nheader nav img {\n  height: 30px;\n}\n\nmain {\n  position: relative;\n}\nmain .grid {\n  grid-template-columns: repeat(auto-fill, 150px);\n  grid-gap: 50px 50px;\n  height: calc(100vh - 188px);\n}\nmain .grid .card {\n  background-color: #151515;\n}\nmain .grid .card img {\n  height: 150px;\n  border-bottom: 5px solid red;\n}\nmain .grid .card .card-header {\n  height: 50px;\n}\nmain .grid .card .card-header .material-icons {\n  color: red;\n}\nmain .grid .card button {\n  border: 1px solid white;\n}\nmain .grid .card button:hover {\n  background-color: red;\n}\nmain ::-webkit-scrollbar {\n  visibility: hidden;\n}\nmain .fade {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 50px;\n}\nmain .fade-before {\n  top: 0;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\nmain .fade-after {\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\n\n.popup {\n  position: absolute;\n  top: 0;\n  width: 50vw;\n  height: 100vh;\n  background-color: red;\n}\n.popup .closing-btn {\n  display: flex;\n  cursor: pointer;\n}\n.popup img {\n  width: 300px;\n  height: auto;\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/scss/_layout.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_utilities.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;ACEF;;ADCA;EACE,aAAA;EACA,mBAAA;ACEF;;ADCA;EACE,aAAA;EACA,sBAAA;ACEF;;ADCA;EACE,mBAAA;ACEF;;ADCA;EACE,uBAAA;ACEF;;ADCA;EACE,8BAAA;ACEF;;ADCA;EACE,yBAAA;ACEF;;ADCA;EACE,2BAAA;ACEF;;ACjCA;EACE,gBAAA;EACA,qBAAA;ADoCF;;ACjCA;EACE,kBAAA;ADoCF;;ACjCA;EACE,kBAAA;ADoCF;;AChCE;EACE,eAAA;ADmCJ;;AC/BA;EACE,kBAAA;ADkCF;;AC/BA;EACE,iBAAA;ADkCF;;AC/BA;EACE,gBAAA;ADkCF;;AC/BA;EACE,gBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,aAAA;ADkCF;;AC/BA;EACE,kBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,iBAAA;EACA,oBAAA;ADkCF;;AC/BA;EACE,gBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,mBAAA;EACA,oBAAA;ADkCF;;AAvFA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,2CAAA;EACA,gBAAA;AA0FF;;AAvFA;EACE,yBAAA;AA0FF;;AAvFA;EACE,gBAAA;EACA,MAAA;AA0FF;AAxFE;EACE,SAAA;AA0FJ;AAxFI;EACE,YAAA;AA0FN;AAxFM;EACE,UAAA;AA0FR;AAtFI;EACE,YAAA;AAwFN;;AAnFA;EACE,kBAAA;AAsFF;AApFE;EACE,+CAAA;EACA,mBAAA;EACA,2BAAA;AAsFJ;AApFI;EACE,yBAAA;AAsFN;AAnFM;EACE,aAAA;EACA,4BAAA;AAqFR;AAlFM;EACE,YAAA;AAoFR;AAlFQ;EACE,UAAA;AAoFV;AAhFM;EACE,uBAAA;AAkFR;AAhFQ;EACE,qBAAA;AAkFV;AAjEE;EACE,kBAAA;AAmEJ;AAhEE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AAkEJ;AA/DE;EACE,MAAA;EACA,gGACE;AAgEN;AAxDE;EACE,SAAA;EACA,mGACE;AAyDN;;AAhDA;EACE,kBAAA;EAEA,MAAA;EAEA,WAAA;EACA,aAAA;EAGA,qBAAA;AA+CF;AA7CE;EACE,aAAA;EACA,eAAA;AA+CJ;AA5CE;EACE,YAAA;EACA,YAAA;AA8CJ;;AArBA;EACE,WAAA;EACA,eAAA;EACA,SAAA;AAwBF","sourcesContent":[".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n","@import 'layout.scss';\n@import 'utilities.scss';\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: rgb(32, 32, 32);\n}\n\nheader {\n  position: sticky;\n  top: 0;\n\n  nav {\n    gap: 30px;\n\n    a {\n      color: white;\n\n      &:hover {\n        color: red;\n      }\n    }\n\n    img {\n      height: 30px;\n    }\n  }\n}\n\nmain {\n  position: relative;\n\n  .grid {\n    grid-template-columns: repeat(auto-fill, 150px);\n    grid-gap: 50px 50px;\n    height: calc(100vh - 188px);\n\n    .card {\n      background-color: #151515;\n      // position: relative;\n\n      img {\n        height: 150px;\n        border-bottom: 5px solid red;\n      }\n\n      .card-header {\n        height: 50px;\n\n        .material-icons {\n          color: red;\n        }\n      }\n\n      button {\n        border: 1px solid white;\n\n        &:hover {\n          background-color: red;\n        }\n      }\n\n      // &:after {\n      //   position: absolute;\n      //   content: '';\n      //   bottom: 0;\n      //   right: 0;\n      //   border-width: 10px 10px 0 0;\n      //   border-style: solid;\n      //   border-color: white;\n      //   border-top-color: transparent;\n      // }\n    }\n  }\n\n  ::-webkit-scrollbar {\n    visibility: hidden;\n  }\n\n  .fade {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 50px;\n  }\n\n  .fade-before {\n    top: 0;\n    background-image:\n      linear-gradient(\n        to top,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n\n  .fade-after {\n    bottom: 0;\n    background-image:\n      linear-gradient(\n        to bottom,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n}\n\n.popup {\n  position: absolute;\n  // transform: translateX(-50%);\n  top: 0;\n  // left: 50%;\n  width: 50vw;\n  height: 100vh;\n  // border: 1px solid #000;\n  // padding: 2em;\n  background-color: red;\n\n  .closing-btn {\n    display: flex;\n    cursor: pointer;\n  }\n\n  img {\n    width: 300px;\n    height: auto;\n    // margin: 0 auto;\n  }\n  // h2 {\n  //   margin: 0 auto;\n  // }\n  // .details {\n  //   font-size: 2em;\n  // }\n  // .comments {\n  //   h6 {\n  //     font-size: 1.4em;\n  //   }\n  // }\n  // form {\n  //   input {\n  //     padding: 0.5em;\n  //   }\n\n  //   textarea {\n  //     padding: 0.3em;\n  //   }\n  // }\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}",".minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: scroll;\n}\n\n.pointer {\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/API.js":
/*!***********************!*\
  !*** ./src/js/API.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
class API {
  constructor() {
    this.url = '';
    this.params = {};
    this.headers = { 'Content-type': 'application/json' };
    this.body = '';
  }

  async get() {
    Object.keys(this.params).forEach((key) => this.url.searchParams.append(key, this.params[key]));

    const response = await fetch(this.url);

    const data = await response.json();

    return data;
  }

  async post() {
    await fetch(

      this.url,

      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(this.body),
      },

    );
  }
}

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");


class Card {
  constructor(character) {
    this.container = '';
    this.character = character;
    return this.container;
  }

  set character(character) {
    this.container = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'flex-col card');

    const cardImage = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', '', { src: character.image });

    const cardBody = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'flex-col p-10');

    const cardHeader = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'card-header flex-row justify-between');
    const spanName = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', '', {}, character.name);
    const spanIcon = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'like material-icons pointer', {}, 'favorite_border');
    cardHeader.append(spanName, spanIcon);

    const spanLikes = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'flex-row justify-end', {}, `${character.likes} Likes`);

    const buttonDiv = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'flex-row justify-center');
    const buttonComments = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'Comment-btn minimal pointer p-y-5 p-x-10 m-t-25', { type: 'button' }, 'Comments');
    buttonDiv.append(buttonComments);

    cardBody.append(cardHeader, spanLikes, buttonDiv);

    this.container.append(cardImage, cardBody);
  }
}

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Character)
/* harmony export */ });
class Character {
  constructor(id, name, likes = 0, description, image, url) {
    this.id = id;
    this.name = name;
    this.likes = likes;
    this.description = description;
    this.image = image;
    this.url = url;
  }
}

/***/ }),

/***/ "./src/js/Grid.js":
/*!************************!*\
  !*** ./src/js/Grid.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ "./src/js/Card.js");


class Grid {

  constructor(className) {
    this.container = '';
    this.className = className;
    this.cards = [];
  }

  set className(className) {
    this.container = document.querySelector(`.${className}`);
  }

  build(characters) {
    Object.values(characters).forEach((character) => {
      this.cards.push(new _Card_js__WEBPACK_IMPORTED_MODULE_0__.default(character));
    });
    return this;
  }

  append() {
    this.container.append(...this.cards);
  }
}

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");
/* harmony import */ var _MarvelAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarvelAPI.js */ "./src/js/MarvelAPI.js");
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/js/InvolvementAPI.js");
/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Character.js */ "./src/js/Character.js");
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grid.js */ "./src/js/Grid.js");
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup.js */ "./src/js/Popup.js");







class Home {
  constructor() {
    this.base = new _MarvelAPI_js__WEBPACK_IMPORTED_MODULE_1__.default();
    this.involvement = new _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.default();
    this.apiCharacters = [];
    this.apiLikes = [];
    this.characters = {};
    this.likes = {};
    this.itemId = 0;
    this.charactersCount = 0;
  }

  async init() {
    await this.getAPIData();
    this.objectifyAPIData();
    this.handleCounter();
    this.populateGrid();
    this.setEventListeners();
  }

  async getAPIData() {
    this.apiCharacters = await this.base.getCharacters();
    this.apiLikes = await this.involvement.getLikes();
  }

  objectifyAPIData() {
    this.objectifyLikes();
    this.objectifyCharacters();
  }

  objectifyLikes() {
    this.apiLikes.forEach((apiLike) => {
      this.likes[apiLike.item_id] = apiLike.likes;
    });
  }

  objectifyCharacters() {
    this.apiCharacters.forEach((apiCharacter) => {
      this.characters[apiCharacter.name] = new _Character_js__WEBPACK_IMPORTED_MODULE_3__.default(
        apiCharacter.id,
        apiCharacter.name,
        this.likes[apiCharacter.id],
        apiCharacter.description,
        `${apiCharacter.thumbnail.path}.${apiCharacter.thumbnail.extension}`,
        apiCharacter.urls[0].url,
      );
    });
  }

  handleCounter() {
    this.setCounter();
    this.displayCounter();
  }

  setCounter() {
    this.charactersCount = this.apiCharacters.length;
  }

  displayCounter() {
    const charactersMenu = document.querySelector('nav a');
    charactersMenu.innerHTML = `Characters (${this.charactersCount})`;
  }

  populateGrid() {
    const grid = new _Grid_js__WEBPACK_IMPORTED_MODULE_4__.default('grid');
    grid.build(this.characters).append();
  }

  setEventListeners() {
    const commentBtn = document.querySelectorAll('.Comment-btn');
  
    commentBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        let name = this.apiCharacters[index].name;
        let popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_5__.default(name);
        console.log(name);
        // let image = this.characters[name].image;
        // popup.init(name);
      });
    });

    const likeButtons = document.querySelectorAll('.like');
    (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(
      likeButtons,
      {
        click: (e) => this.likeCharacter(e),
        mouseenter: (e) => (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.toggle)(e.target, 'innerHTML', ['favorite', 'favorite_border']),
        mouseleave: (e) => (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.toggle)(e.target, 'innerHTML', ['favorite', 'favorite_border']),
      },
    );
  }

  likeCharacter(e) {
    this.updateLocalLikes(e.target);
    this.involvement.postLike(this.itemId);
  }

  updateLocalLikes(element) {
    const name = element.previousElementSibling.innerHTML;
    const likeElement = element.parentElement.nextElementSibling;
    this.itemId = this.characters[name].id;

    this.likes[this.itemId] += 1;
    this.characters[name].likes += 1;

    likeElement.innerHTML = `${this.likes[this.itemId]} Likes`;
  }
}


/***/ }),

/***/ "./src/js/InvolvementAPI.js":
/*!**********************************!*\
  !*** ./src/js/InvolvementAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementAPI)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/js/API.js");


class InvolvementAPI extends _API_js__WEBPACK_IMPORTED_MODULE_0__.default {
  async postLike(itemId) {
    super.url = new URL('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6/likes');

    super.body = {
      item_id: itemId,
    };

    await super.post();
  }

  async getLikes() {
    super.url = new URL('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6/likes');

    const data = await super.get();

    return data;
  }
}


/***/ }),

/***/ "./src/js/MarvelAPI.js":
/*!*****************************!*\
  !*** ./src/js/MarvelAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarvelAPI)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/js/API.js");


class MarvelAPI extends _API_js__WEBPACK_IMPORTED_MODULE_0__.default {
  async getCharacters() {
    super.url = new URL('https://gateway.marvel.com/v1/public/characters');

    super.params = {
      apikey: '86af4a1749d744f4f6c643c5c87a4f3c',
      limit: '10',
    };

    const data = await super.get();

    return data.data.results;
  }
}

/***/ }),

/***/ "./src/js/Popup.js":
/*!*************************!*\
  !*** ./src/js/Popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ "./src/js/Home.js");



class Popup extends _Home_js__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(name) {
    this.characterName = name;
    this.character = {};
  }

  set characterName(name) {
    this.character = super.characters[name];
    console.log(this.character);
  }

  init() {
    this.build();
    this.setEventListener();
  }

  async setEventListener() {
    let closingButton = document.querySelector('.closing-btn');
    let popupSection = document.querySelector('.popup');
    closingButton.addEventListener('click', () => {
      document.body.removeChild(popupSection);
    });
  }

  build() {

    let closingBtn = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'material-icons closing-btn justify-end', {}, 'close');

    let img = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', '', {src: image});
    let charname = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', {}, name);

    let detailsDiv = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'details');
    let details1 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '', {}, `description : ${description}`);
    detailsDiv.append(details1);

    let commentUserName = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h6', '', {}, 'user name');
    let commentContent = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '', {}, 'comment somthing');
    let commentDiv = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      'div',
      'comments flex-col justify-between justify-center p-y-50'
    );
    commentDiv.append(commentUserName, commentContent);
    let form = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', 'flex-col');
    let formheader = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
    let input = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', '', {
      type: 'text',
      placeholder: 'yourname',
    });
    let textarea = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea', '', {
      id: 'txtid',
      name: 'txtname',
      rows: '4',
      cols: '50',
      maxlength: '200',
      placeholder: 'text',
    });
    let commentBtn = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '', {}, 'comment');
    form.append(formheader, input, textarea, commentBtn);
    let popupSection = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'popup flex-col');

    popupSection.append(closingBtn, img, charname, detailsDiv, commentDiv, form);
    document.body.append(popupSection);
    console.log(popupSection);
  }
}


/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "toggle": () => (/* binding */ toggle)
/* harmony export */ });
const createElement = (elementType, classNames = '', attributes = {}, innerHTML = '', properties = {}) => {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  Object.keys(properties).forEach((property) => {
    elementObject[property] = properties[property];
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
};

const addListeners = (elements, listeners) => {
  elements.forEach((element) => {
    Object.entries(listeners).forEach(([event, listener]) => {
      element.addEventListener(event, listener);
    });
  });
};

const toggle = (target, property, states) => {
  target[property] = (target[property] === states[0] ? states[1] : states[0]);
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ "./src/js/Home.js");



function init() {
  let home = new _Home_js__WEBPACK_IMPORTED_MODULE_1__.default();
  home.init();
}

window.addEventListener('load', init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7d0RDTjRCOzBEQUNDOztBQUU3QjtBQUNBLGlCQUFpQiw2Q0FBSTtBQUNyQjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9HcmlkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvSG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvTWFydmVsQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWluaW1hbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcm9sbC15IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcbmhlYWRlciBuYXYge1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5oZWFkZXIgbmF2IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgbmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuaGVhZGVyIG5hdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbiAuZ3JpZCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE1MHB4KTtcXG4gIGdyaWQtZ2FwOiA1MHB4IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgLmNhcmQtaGVhZGVyIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCAuY2FyZC1oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbm1haW4gOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbm1haW4gLmZhZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZmFkZS1iZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDEwMCUpO1xcbn1cXG5tYWluIC5mYWRlLWFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnBvcHVwIC5jbG9zaW5nLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXAgaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL191dGlsaXRpZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLDhCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7QUNFRjs7QUNqQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGtCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGtCQUFBO0FEb0NGOztBQ2hDRTtFQUNFLGVBQUE7QURtQ0o7O0FDL0JBO0VBQ0Usa0JBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsaUJBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsZ0JBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxhQUFBO0FEa0NGOztBQy9CQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEa0NGOztBQy9CQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QURrQ0Y7O0FBdkZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FBMEZGOztBQXZGQTtFQUNFLHlCQUFBO0FBMEZGOztBQXZGQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQTBGRjtBQXhGRTtFQUNFLFNBQUE7QUEwRko7QUF4Rkk7RUFDRSxZQUFBO0FBMEZOO0FBeEZNO0VBQ0UsVUFBQTtBQTBGUjtBQXRGSTtFQUNFLFlBQUE7QUF3Rk47O0FBbkZBO0VBQ0Usa0JBQUE7QUFzRkY7QUFwRkU7RUFDRSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFzRko7QUFwRkk7RUFDRSx5QkFBQTtBQXNGTjtBQW5GTTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtBQXFGUjtBQWxGTTtFQUNFLFlBQUE7QUFvRlI7QUFsRlE7RUFDRSxVQUFBO0FBb0ZWO0FBaEZNO0VBQ0UsdUJBQUE7QUFrRlI7QUFoRlE7RUFDRSxxQkFBQTtBQWtGVjtBQWpFRTtFQUNFLGtCQUFBO0FBbUVKO0FBaEVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFrRUo7QUEvREU7RUFDRSxNQUFBO0VBQ0EsZ0dBQ0U7QUFnRU47QUF4REU7RUFDRSxTQUFBO0VBQ0EsbUdBQ0U7QUF5RE47O0FBaERBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFHQSxxQkFBQTtBQStDRjtBQTdDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBK0NKO0FBNUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUE4Q0o7O0FBckJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBd0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblwiLFwiQGltcG9ydCAnbGF5b3V0LnNjc3MnO1xcbkBpbXBvcnQgJ3V0aWxpdGllcy5zY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG5cXG4gIG5hdiB7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgYSB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTUwcHgpO1xcbiAgICBncmlkLWdhcDogNTBweCA1MHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5jYXJkLWhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAvLyAmOmFmdGVyIHtcXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAvLyAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIC8vICAgYm90dG9tOiAwO1xcbiAgICAgIC8vICAgcmlnaHQ6IDA7XFxuICAgICAgLy8gICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwIDA7XFxuICAgICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAvLyAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIC8vIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5mYWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC5mYWRlLWJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byB0b3AsXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXFxuICAgICAgICAxMDAlXFxuICAgICAgKTtcXG4gIH1cXG5cXG4gIC5mYWRlLWFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIGJvdHRvbSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcXG4gICAgICAgIDEwMCVcXG4gICAgICApO1xcbiAgfVxcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdG9wOiAwO1xcbiAgLy8gbGVmdDogNTAlO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIC8vIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG4gIC5jbG9zaW5nLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gIC8vIGgyIHtcXG4gIC8vICAgbWFyZ2luOiAwIGF1dG87XFxuICAvLyB9XFxuICAvLyAuZGV0YWlscyB7XFxuICAvLyAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgLy8gfVxcbiAgLy8gLmNvbW1lbnRzIHtcXG4gIC8vICAgaDYge1xcbiAgLy8gICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAvLyAgIH1cXG4gIC8vIH1cXG4gIC8vIGZvcm0ge1xcbiAgLy8gICBpbnB1dCB7XFxuICAvLyAgICAgcGFkZGluZzogMC41ZW07XFxuICAvLyAgIH1cXG5cXG4gIC8vICAgdGV4dGFyZWEge1xcbiAgLy8gICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgLy8gICB9XFxuICAvLyB9XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG59XCIsXCIubWluaW1hbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcm9sbC15IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wLXktNTAge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wLXgtMTAwIHtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVybCA9ICcnO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5oZWFkZXJzID0geyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH07XG4gICAgdGhpcy5ib2R5ID0gJyc7XG4gIH1cblxuICBhc3luYyBnZXQoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5wYXJhbXMpLmZvckVhY2goKGtleSkgPT4gdGhpcy51cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHRoaXMucGFyYW1zW2tleV0pKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgcG9zdCgpIHtcbiAgICBhd2FpdCBmZXRjaChcblxuICAgICAgdGhpcy51cmwsXG5cbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgIH0sXG5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIHNldCBjaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wgY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZEltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHsgc3JjOiBjaGFyYWN0ZXIuaW1hZ2UgfSk7XG5cbiAgICBjb25zdCBjYXJkQm9keSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBwLTEwJyk7XG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtaGVhZGVyIGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbicpO1xuICAgIGNvbnN0IHNwYW5OYW1lID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgY2hhcmFjdGVyLm5hbWUpO1xuICAgIGNvbnN0IHNwYW5JY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdsaWtlIG1hdGVyaWFsLWljb25zIHBvaW50ZXInLCB7fSwgJ2Zhdm9yaXRlX2JvcmRlcicpO1xuICAgIGNhcmRIZWFkZXIuYXBwZW5kKHNwYW5OYW1lLCBzcGFuSWNvbik7XG5cbiAgICBjb25zdCBzcGFuTGlrZXMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2ZsZXgtcm93IGp1c3RpZnktZW5kJywge30sIGAke2NoYXJhY3Rlci5saWtlc30gTGlrZXNgKTtcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbW1lbnRzID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0NvbW1lbnQtYnRuIG1pbmltYWwgcG9pbnRlciBwLXktNSBwLXgtMTAgbS10LTI1JywgeyB0eXBlOiAnYnV0dG9uJyB9LCAnQ29tbWVudHMnKTtcbiAgICBidXR0b25EaXYuYXBwZW5kKGJ1dHRvbkNvbW1lbnRzKTtcblxuICAgIGNhcmRCb2R5LmFwcGVuZChjYXJkSGVhZGVyLCBzcGFuTGlrZXMsIGJ1dHRvbkRpdik7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FyZEltYWdlLCBjYXJkQm9keSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgbGlrZXMgPSAwLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHVybCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGlrZXMgPSBsaWtlcztcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG5cbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gIH1cblxuICBzZXQgY2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICB9XG5cbiAgYnVpbGQoY2hhcmFjdGVycykge1xuICAgIE9iamVjdC52YWx1ZXMoY2hhcmFjdGVycykuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzLnB1c2gobmV3IENhcmQoY2hhcmFjdGVyKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKC4uLnRoaXMuY2FyZHMpO1xuICB9XG59IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzLCB0b2dnbGUgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IE1hcnZlbEFQSSBmcm9tICcuL01hcnZlbEFQSS5qcyc7XG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZC5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2UgPSBuZXcgTWFydmVsQVBJKCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudCA9IG5ldyBJbnZvbHZlbWVudEFQSSgpO1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IFtdO1xuICAgIHRoaXMuYXBpTGlrZXMgPSBbXTtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB7fTtcbiAgICB0aGlzLmxpa2VzID0ge307XG4gICAgdGhpcy5pdGVtSWQgPSAwO1xuICAgIHRoaXMuY2hhcmFjdGVyc0NvdW50ID0gMDtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRBUElEYXRhKCk7XG4gICAgdGhpcy5vYmplY3RpZnlBUElEYXRhKCk7XG4gICAgdGhpcy5oYW5kbGVDb3VudGVyKCk7XG4gICAgdGhpcy5wb3B1bGF0ZUdyaWQoKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhc3luYyBnZXRBUElEYXRhKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IGF3YWl0IHRoaXMuYmFzZS5nZXRDaGFyYWN0ZXJzKCk7XG4gICAgdGhpcy5hcGlMaWtlcyA9IGF3YWl0IHRoaXMuaW52b2x2ZW1lbnQuZ2V0TGlrZXMoKTtcbiAgfVxuXG4gIG9iamVjdGlmeUFQSURhdGEoKSB7XG4gICAgdGhpcy5vYmplY3RpZnlMaWtlcygpO1xuICAgIHRoaXMub2JqZWN0aWZ5Q2hhcmFjdGVycygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5TGlrZXMoKSB7XG4gICAgdGhpcy5hcGlMaWtlcy5mb3JFYWNoKChhcGlMaWtlKSA9PiB7XG4gICAgICB0aGlzLmxpa2VzW2FwaUxpa2UuaXRlbV9pZF0gPSBhcGlMaWtlLmxpa2VzO1xuICAgIH0pO1xuICB9XG5cbiAgb2JqZWN0aWZ5Q2hhcmFjdGVycygpIHtcbiAgICB0aGlzLmFwaUNoYXJhY3RlcnMuZm9yRWFjaCgoYXBpQ2hhcmFjdGVyKSA9PiB7XG4gICAgICB0aGlzLmNoYXJhY3RlcnNbYXBpQ2hhcmFjdGVyLm5hbWVdID0gbmV3IENoYXJhY3RlcihcbiAgICAgICAgYXBpQ2hhcmFjdGVyLmlkLFxuICAgICAgICBhcGlDaGFyYWN0ZXIubmFtZSxcbiAgICAgICAgdGhpcy5saWtlc1thcGlDaGFyYWN0ZXIuaWRdLFxuICAgICAgICBhcGlDaGFyYWN0ZXIuZGVzY3JpcHRpb24sXG4gICAgICAgIGAke2FwaUNoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHthcGlDaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gLFxuICAgICAgICBhcGlDaGFyYWN0ZXIudXJsc1swXS51cmwsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ291bnRlcigpIHtcbiAgICB0aGlzLnNldENvdW50ZXIoKTtcbiAgICB0aGlzLmRpc3BsYXlDb3VudGVyKCk7XG4gIH1cblxuICBzZXRDb3VudGVyKCkge1xuICAgIHRoaXMuY2hhcmFjdGVyc0NvdW50ID0gdGhpcy5hcGlDaGFyYWN0ZXJzLmxlbmd0aDtcbiAgfVxuXG4gIGRpc3BsYXlDb3VudGVyKCkge1xuICAgIGNvbnN0IGNoYXJhY3RlcnNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGEnKTtcbiAgICBjaGFyYWN0ZXJzTWVudS5pbm5lckhUTUwgPSBgQ2hhcmFjdGVycyAoJHt0aGlzLmNoYXJhY3RlcnNDb3VudH0pYDtcbiAgfVxuXG4gIHBvcHVsYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQoJ2dyaWQnKTtcbiAgICBncmlkLmJ1aWxkKHRoaXMuY2hhcmFjdGVycykuYXBwZW5kKCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNvbW1lbnQtYnRuJyk7XG4gIFxuICAgIGNvbW1lbnRCdG4uZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuYXBpQ2hhcmFjdGVyc1tpbmRleF0ubmFtZTtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwKG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgLy8gbGV0IGltYWdlID0gdGhpcy5jaGFyYWN0ZXJzW25hbWVdLmltYWdlO1xuICAgICAgICAvLyBwb3B1cC5pbml0KG5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaWtlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgbGlrZUJ1dHRvbnMsXG4gICAgICB7XG4gICAgICAgIGNsaWNrOiAoZSkgPT4gdGhpcy5saWtlQ2hhcmFjdGVyKGUpLFxuICAgICAgICBtb3VzZWVudGVyOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICAgIG1vdXNlbGVhdmU6IChlKSA9PiB0b2dnbGUoZS50YXJnZXQsICdpbm5lckhUTUwnLCBbJ2Zhdm9yaXRlJywgJ2Zhdm9yaXRlX2JvcmRlciddKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGxpa2VDaGFyYWN0ZXIoZSkge1xuICAgIHRoaXMudXBkYXRlTG9jYWxMaWtlcyhlLnRhcmdldCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudC5wb3N0TGlrZSh0aGlzLml0ZW1JZCk7XG4gIH1cblxuICB1cGRhdGVMb2NhbExpa2VzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICBjb25zdCBsaWtlRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy5pdGVtSWQgPSB0aGlzLmNoYXJhY3RlcnNbbmFtZV0uaWQ7XG5cbiAgICB0aGlzLmxpa2VzW3RoaXMuaXRlbUlkXSArPSAxO1xuICAgIHRoaXMuY2hhcmFjdGVyc1tuYW1lXS5saWtlcyArPSAxO1xuXG4gICAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGhpcy5saWtlc1t0aGlzLml0ZW1JZF19IExpa2VzYDtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIGV4dGVuZHMgQVBJIHtcbiAgYXN5bmMgcG9zdExpa2UoaXRlbUlkKSB7XG4gICAgc3VwZXIudXJsID0gbmV3IFVSTCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMUZqVnpaYmZScVdkdnJuWUV3aDYvbGlrZXMnKTtcblxuICAgIHN1cGVyLmJvZHkgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgfTtcblxuICAgIGF3YWl0IHN1cGVyLnBvc3QoKTtcbiAgfVxuXG4gIGFzeW5jIGdldExpa2VzKCkge1xuICAgIHN1cGVyLnVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFGalZ6WmJmUnFXZHZybllFd2g2L2xpa2VzJyk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3VwZXIuZ2V0KCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcnZlbEFQSSBleHRlbmRzIEFQSSB7XG4gIGFzeW5jIGdldENoYXJhY3RlcnMoKSB7XG4gICAgc3VwZXIudXJsID0gbmV3IFVSTCgnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljL2NoYXJhY3RlcnMnKTtcblxuICAgIHN1cGVyLnBhcmFtcyA9IHtcbiAgICAgIGFwaWtleTogJzg2YWY0YTE3NDlkNzQ0ZjRmNmM2NDNjNWM4N2E0ZjNjJyxcbiAgICAgIGxpbWl0OiAnMTAnLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3VwZXIuZ2V0KCk7XG5cbiAgICByZXR1cm4gZGF0YS5kYXRhLnJlc3VsdHM7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmNoYXJhY3Rlck5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2hhcmFjdGVyID0ge307XG4gIH1cblxuICBzZXQgY2hhcmFjdGVyTmFtZShuYW1lKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBzdXBlci5jaGFyYWN0ZXJzW25hbWVdO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcigpO1xuICB9XG5cbiAgYXN5bmMgc2V0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICBsZXQgY2xvc2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zaW5nLWJ0bicpO1xuICAgIGxldCBwb3B1cFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBjbG9zaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3B1cFNlY3Rpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGQoKSB7XG5cbiAgICBsZXQgY2xvc2luZ0J0biA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbWF0ZXJpYWwtaWNvbnMgY2xvc2luZy1idG4ganVzdGlmeS1lbmQnLCB7fSwgJ2Nsb3NlJyk7XG5cbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHtzcmM6IGltYWdlfSk7XG4gICAgbGV0IGNoYXJuYW1lID0gY3JlYXRlRWxlbWVudCgnaDInLCAnJywge30sIG5hbWUpO1xuXG4gICAgbGV0IGRldGFpbHNEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGV0YWlscycpO1xuICAgIGxldCBkZXRhaWxzMSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywge30sIGBkZXNjcmlwdGlvbiA6ICR7ZGVzY3JpcHRpb259YCk7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmQoZGV0YWlsczEpO1xuXG4gICAgbGV0IGNvbW1lbnRVc2VyTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2g2JywgJycsIHt9LCAndXNlciBuYW1lJyk7XG4gICAgbGV0IGNvbW1lbnRDb250ZW50ID0gY3JlYXRlRWxlbWVudCgncCcsICcnLCB7fSwgJ2NvbW1lbnQgc29tdGhpbmcnKTtcbiAgICBsZXQgY29tbWVudERpdiA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgICdjb21tZW50cyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4ganVzdGlmeS1jZW50ZXIgcC15LTUwJ1xuICAgICk7XG4gICAgY29tbWVudERpdi5hcHBlbmQoY29tbWVudFVzZXJOYW1lLCBjb21tZW50Q29udGVudCk7XG4gICAgbGV0IGZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgJ2ZsZXgtY29sJyk7XG4gICAgbGV0IGZvcm1oZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxldCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJycsIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHBsYWNlaG9sZGVyOiAneW91cm5hbWUnLFxuICAgIH0pO1xuICAgIGxldCB0ZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgJycsIHtcbiAgICAgIGlkOiAndHh0aWQnLFxuICAgICAgbmFtZTogJ3R4dG5hbWUnLFxuICAgICAgcm93czogJzQnLFxuICAgICAgY29sczogJzUwJyxcbiAgICAgIG1heGxlbmd0aDogJzIwMCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ3RleHQnLFxuICAgIH0pO1xuICAgIGxldCBjb21tZW50QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJycsIHt9LCAnY29tbWVudCcpO1xuICAgIGZvcm0uYXBwZW5kKGZvcm1oZWFkZXIsIGlucHV0LCB0ZXh0YXJlYSwgY29tbWVudEJ0bik7XG4gICAgbGV0IHBvcHVwU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAncG9wdXAgZmxleC1jb2wnKTtcblxuICAgIHBvcHVwU2VjdGlvbi5hcHBlbmQoY2xvc2luZ0J0biwgaW1nLCBjaGFybmFtZSwgZGV0YWlsc0RpdiwgY29tbWVudERpdiwgZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9wdXBTZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhwb3B1cFNlY3Rpb24pO1xuICB9XG59XG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAoZWxlbWVudHMsIGxpc3RlbmVycykgPT4ge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnQsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlID0gKHRhcmdldCwgcHJvcGVydHksIHN0YXRlcykgPT4ge1xuICB0YXJnZXRbcHJvcGVydHldID0gKHRhcmdldFtwcm9wZXJ0eV0gPT09IHN0YXRlc1swXSA/IHN0YXRlc1sxXSA6IHN0YXRlc1swXSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhZGRMaXN0ZW5lcnMsIHRvZ2dsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxldCBob21lID0gbmV3IEhvbWUoKTtcbiAgaG9tZS5pbml0KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=