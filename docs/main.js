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
___CSS_LOADER_EXPORT___.push([module.id, ".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: scroll;\n}\n\n.pointer:hover {\n  cursor: pointer;\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: #202020;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\nheader nav {\n  gap: 30px;\n}\nheader nav a {\n  color: white;\n}\nheader nav a:hover {\n  color: red;\n}\nheader nav img {\n  height: 30px;\n}\n\nmain {\n  position: relative;\n}\nmain .grid {\n  grid-template-columns: repeat(auto-fill, 150px);\n  grid-gap: 50px 50px;\n  height: calc(100vh - 188px);\n}\nmain .grid .card {\n  background-color: #151515;\n}\nmain .grid .card img {\n  height: 150px;\n  border-bottom: 5px solid red;\n}\nmain .grid .card .card-header {\n  height: 50px;\n}\nmain .grid .card .card-header .material-icons {\n  color: red;\n}\nmain .grid .card button {\n  border: 1px solid white;\n}\nmain .grid .card button:hover {\n  background-color: red;\n}\nmain ::-webkit-scrollbar {\n  visibility: hidden;\n}\nmain .fade {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 50px;\n}\nmain .fade-before {\n  top: 0;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\nmain .fade-after {\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\n\n.popup {\n  position: absolute;\n  transform: translateX(-50%);\n  top: 3%;\n  left: 50%;\n  width: 40%;\n  height: 95%;\n  border: 1px solid #000;\n  padding: 2em;\n  background-color: #fff;\n}\n.popup .closing-btn {\n  display: flex;\n  font-size: 3em;\n  cursor: pointer;\n}\n.popup img {\n  width: 50%;\n  margin: 0 auto;\n}\n.popup h2 {\n  margin: 0 auto;\n}\n.popup .details {\n  font-size: 2em;\n}\n.popup .comments h6 {\n  font-size: 1.4em;\n}\n.popup form input {\n  padding: 0.5em;\n}\n.popup form textarea {\n  padding: 0.3em;\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/scss/_layout.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_utilities.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;ACEF;;ADCA;EACE,aAAA;EACA,mBAAA;ACEF;;ADCA;EACE,aAAA;EACA,sBAAA;ACEF;;ADCA;EACE,mBAAA;ACEF;;ADCA;EACE,uBAAA;ACEF;;ADCA;EACE,8BAAA;ACEF;;ADCA;EACE,yBAAA;ACEF;;ADCA;EACE,2BAAA;ACEF;;ACjCA;EACE,gBAAA;EACA,qBAAA;ADoCF;;ACjCA;EACE,kBAAA;ADoCF;;ACjCA;EACE,kBAAA;ADoCF;;AChCE;EACE,eAAA;ADmCJ;;AC/BA;EACE,kBAAA;ADkCF;;AC/BA;EACE,iBAAA;ADkCF;;AC/BA;EACE,gBAAA;ADkCF;;AC/BA;EACE,gBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,aAAA;ADkCF;;AC/BA;EACE,kBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,iBAAA;EACA,oBAAA;ADkCF;;AC/BA;EACE,gBAAA;EACA,mBAAA;ADkCF;;AC/BA;EACE,mBAAA;EACA,oBAAA;ADkCF;;AAvFA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,2CAAA;EACA,gBAAA;AA0FF;;AAvFA;EACE,yBAAA;AA0FF;;AAvFA;EACE,gBAAA;EACA,MAAA;AA0FF;AAxFE;EACE,SAAA;AA0FJ;AAxFI;EACE,YAAA;AA0FN;AAxFM;EACE,UAAA;AA0FR;AAtFI;EACE,YAAA;AAwFN;;AAnFA;EACE,kBAAA;AAsFF;AApFE;EACE,+CAAA;EACA,mBAAA;EACA,2BAAA;AAsFJ;AApFI;EACE,yBAAA;AAsFN;AAnFM;EACE,aAAA;EACA,4BAAA;AAqFR;AAlFM;EACE,YAAA;AAoFR;AAlFQ;EACE,UAAA;AAoFV;AAhFM;EACE,uBAAA;AAkFR;AAhFQ;EACE,qBAAA;AAkFV;AAjEE;EACE,kBAAA;AAmEJ;AAhEE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AAkEJ;AA/DE;EACE,MAAA;EACA,gGACE;AAgEN;AAxDE;EACE,SAAA;EACA,mGACE;AAyDN;;AAhDA;EACE,kBAAA;EACA,2BAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;EACA,sBAAA;AAmDF;AAlDE;EACE,aAAA;EACA,cAAA;EACA,eAAA;AAoDJ;AAlDE;EACE,UAAA;EACA,cAAA;AAoDJ;AAlDE;EACE,cAAA;AAoDJ;AAlDE;EACE,cAAA;AAoDJ;AAjDI;EACE,gBAAA;AAmDN;AA/CI;EACE,cAAA;AAiDN;AA9CI;EACE,cAAA;AAgDN;;AA3CA;EACE,WAAA;EACA,eAAA;EACA,SAAA;AA8CF","sourcesContent":[".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n","@import 'layout.scss';\n@import 'utilities.scss';\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: rgb(32, 32, 32);\n}\n\nheader {\n  position: sticky;\n  top: 0;\n\n  nav {\n    gap: 30px;\n\n    a {\n      color: white;\n\n      &:hover {\n        color: red;\n      }\n    }\n\n    img {\n      height: 30px;\n    }\n  }\n}\n\nmain {\n  position: relative;\n\n  .grid {\n    grid-template-columns: repeat(auto-fill, 150px);\n    grid-gap: 50px 50px;\n    height: calc(100vh - 188px);\n\n    .card {\n      background-color: #151515;\n      // position: relative;\n\n      img {\n        height: 150px;\n        border-bottom: 5px solid red;\n      }\n\n      .card-header {\n        height: 50px;\n\n        .material-icons {\n          color: red;\n        }\n      }\n\n      button {\n        border: 1px solid white;\n\n        &:hover {\n          background-color: red;\n        }\n      }\n\n      // &:after {\n      //   position: absolute;\n      //   content: '';\n      //   bottom: 0;\n      //   right: 0;\n      //   border-width: 10px 10px 0 0;\n      //   border-style: solid;\n      //   border-color: white;\n      //   border-top-color: transparent;\n      // }\n    }\n  }\n\n  ::-webkit-scrollbar {\n    visibility: hidden;\n  }\n\n  .fade {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 50px;\n  }\n\n  .fade-before {\n    top: 0;\n    background-image:\n      linear-gradient(\n        to top,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n\n  .fade-after {\n    bottom: 0;\n    background-image:\n      linear-gradient(\n        to bottom,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n}\n\n.popup {\n  position: absolute;\n  transform: translateX(-50%);\n  top: 3%;\n  left: 50%;\n  width: 40%;\n  height: 95%;\n  border: 1px solid #000;\n  padding: 2em;\n  background-color: #fff;\n  .closing-btn {\n    display: flex;\n    font-size: 3em;\n    cursor: pointer;\n  }\n  img {\n    width: 50%;\n    margin: 0 auto;\n  }\n  h2 {\n    margin: 0 auto;\n  }\n  .details {\n    font-size: 2em;\n  }\n  .comments {\n    h6 {\n      font-size: 1.4em;\n    }\n  }\n  form {\n    input {\n      padding: 0.5em;\n    }\n\n    textarea {\n      padding: 0.3em;\n    }\n  }\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}",".minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: scroll;\n}\n\n.pointer {\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n"],"sourceRoot":""}]);
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
    const buttonComments = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'minimal pointer p-y-5 p-x-10 m-t-25', { type: 'button' }, 'Comments');
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

    let popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_5__.default();
    console.log(popup);
    commentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popup.init();
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


class Popup {
  init() {
    this.build();
    this.setEventListener();
  }

  setEventListener() {
    let closingButton = document.querySelector('.closing-btn');
    let popupSection = document.querySelector('.popup');
    closingButton.addEventListener('click', () => {
      console.log('hello from the closing button');
      console.log(popupSection);
      document.body.removeChild(popupSection);
    });
    console.log(closingButton);
  }

  build() {
    let closingBtn = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      'span',
      'closing-btn justify-end',
      {},
      '&times;'
    );

    let img = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', '', {
      src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
    });
    let h2 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', {}, 'popup title');
    let spanicon = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      'span',
      'material-icons flex-col justify-end',
      {},
      'favorite_border'
    );
    let spanLikes = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', '', {}, '0 Likes');

    let details1 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '', {}, 'super power:magic');
    let details2 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '', {}, 'age:30');
    let detailsDiv = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'details');
    detailsDiv.append(details1, details2);
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

    popupSection.append(
      closingBtn,
      img,
      h2,
      spanicon,
      spanLikes,
      detailsDiv,
      commentDiv,
      form
    );
    document.body.append(popupSection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7d0RDTjRCOzBEQUNDOztBQUU3QjtBQUNBLGlCQUFpQiw2Q0FBSTtBQUNyQjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9HcmlkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvSG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvTWFydmVsQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWluaW1hbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcm9sbC15IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcbmhlYWRlciBuYXYge1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5oZWFkZXIgbmF2IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgbmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuaGVhZGVyIG5hdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbiAuZ3JpZCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE1MHB4KTtcXG4gIGdyaWQtZ2FwOiA1MHB4IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgLmNhcmQtaGVhZGVyIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCAuY2FyZC1oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbm1haW4gOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbm1haW4gLmZhZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZmFkZS1iZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDEwMCUpO1xcbn1cXG5tYWluIC5mYWRlLWFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRvcDogMyU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnBvcHVwIC5jbG9zaW5nLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb3B1cCBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ucG9wdXAgaDIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5wb3B1cCAuZGV0YWlscyB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLnBvcHVwIC5jb21tZW50cyBoNiB7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4ucG9wdXAgZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLnBvcHVwIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2xheW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdXRpbGl0aWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FDakNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxrQkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxrQkFBQTtBRG9DRjs7QUNoQ0U7RUFDRSxlQUFBO0FEbUNKOztBQy9CQTtFQUNFLGtCQUFBO0FEa0NGOztBQy9CQTtFQUNFLGlCQUFBO0FEa0NGOztBQy9CQTtFQUNFLGdCQUFBO0FEa0NGOztBQy9CQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsYUFBQTtBRGtDRjs7QUMvQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEa0NGOztBQy9CQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FEa0NGOztBQXZGQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQTBGRjs7QUF2RkE7RUFDRSx5QkFBQTtBQTBGRjs7QUF2RkE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUEwRkY7QUF4RkU7RUFDRSxTQUFBO0FBMEZKO0FBeEZJO0VBQ0UsWUFBQTtBQTBGTjtBQXhGTTtFQUNFLFVBQUE7QUEwRlI7QUF0Rkk7RUFDRSxZQUFBO0FBd0ZOOztBQW5GQTtFQUNFLGtCQUFBO0FBc0ZGO0FBcEZFO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBc0ZKO0FBcEZJO0VBQ0UseUJBQUE7QUFzRk47QUFuRk07RUFDRSxhQUFBO0VBQ0EsNEJBQUE7QUFxRlI7QUFsRk07RUFDRSxZQUFBO0FBb0ZSO0FBbEZRO0VBQ0UsVUFBQTtBQW9GVjtBQWhGTTtFQUNFLHVCQUFBO0FBa0ZSO0FBaEZRO0VBQ0UscUJBQUE7QUFrRlY7QUFqRUU7RUFDRSxrQkFBQTtBQW1FSjtBQWhFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBa0VKO0FBL0RFO0VBQ0UsTUFBQTtFQUNBLGdHQUNFO0FBZ0VOO0FBeERFO0VBQ0UsU0FBQTtFQUNBLG1HQUNFO0FBeUROOztBQWhEQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFtREY7QUFsREU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFvREo7QUFsREU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQW9ESjtBQWxERTtFQUNFLGNBQUE7QUFvREo7QUFsREU7RUFDRSxjQUFBO0FBb0RKO0FBakRJO0VBQ0UsZ0JBQUE7QUFtRE47QUEvQ0k7RUFDRSxjQUFBO0FBaUROO0FBOUNJO0VBQ0UsY0FBQTtBQWdETjs7QUEzQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUE4Q0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXCIsXCJAaW1wb3J0ICdsYXlvdXQuc2Nzcyc7XFxuQGltcG9ydCAndXRpbGl0aWVzLnNjc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhcmstZ3JleS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcblxcbiAgbmF2IHtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxNTBweCk7XFxuICAgIGdyaWQtZ2FwOiA1MHB4IDUwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4OHB4KTtcXG5cXG4gICAgLmNhcmQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcXG4gICAgICB9XFxuXFxuICAgICAgLmNhcmQtaGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC8vICY6YWZ0ZXIge1xcbiAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIC8vICAgY29udGVudDogJyc7XFxuICAgICAgLy8gICBib3R0b206IDA7XFxuICAgICAgLy8gICByaWdodDogMDtcXG4gICAgICAvLyAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDAgMDtcXG4gICAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgLy8gICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIC8vICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgLy8gfVxcbiAgICB9XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmZhZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgLmZhZGUtYmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIHRvcCxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcXG4gICAgICAgIDEwMCVcXG4gICAgICApO1xcbiAgfVxcblxcbiAgLmZhZGUtYWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gYm90dG9tLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxcbiAgICAgICAgMTAwJVxcbiAgICAgICk7XFxuICB9XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0b3A6IDMlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAuY2xvc2luZy1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICBoMiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgLmRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gIH1cXG4gIC5jb21tZW50cyB7XFxuICAgIGg2IHtcXG4gICAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICB9XFxuICB9XFxuICBmb3JtIHtcXG4gICAgaW5wdXQge1xcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhIHtcXG4gICAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVwiLFwiLm1pbmltYWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JvbGwteSB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5wb2ludGVyIHtcXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5tLXItYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tLWwtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucC15LTUwIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucC14LTEwMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cmwgPSAnJztcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuaGVhZGVycyA9IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9O1xuICAgIHRoaXMuYm9keSA9ICcnO1xuICB9XG5cbiAgYXN5bmMgZ2V0KCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHRoaXMudXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB0aGlzLnBhcmFtc1trZXldKSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIHBvc3QoKSB7XG4gICAgYXdhaXQgZmV0Y2goXG5cbiAgICAgIHRoaXMudXJsLFxuXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICB9LFxuXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBzZXQgY2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIGNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCB7IHNyYzogY2hhcmFjdGVyLmltYWdlIH0pO1xuXG4gICAgY29uc3QgY2FyZEJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wgcC0xMCcpO1xuXG4gICAgY29uc3QgY2FyZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWhlYWRlciBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nKTtcbiAgICBjb25zdCBzcGFuTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIGNoYXJhY3Rlci5uYW1lKTtcbiAgICBjb25zdCBzcGFuSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGlrZSBtYXRlcmlhbC1pY29ucyBwb2ludGVyJywge30sICdmYXZvcml0ZV9ib3JkZXInKTtcbiAgICBjYXJkSGVhZGVyLmFwcGVuZChzcGFuTmFtZSwgc3Bhbkljb24pO1xuXG4gICAgY29uc3Qgc3Bhbkxpa2VzID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdmbGV4LXJvdyBqdXN0aWZ5LWVuZCcsIHt9LCBgJHtjaGFyYWN0ZXIubGlrZXN9IExpa2VzYCk7XG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1yb3cganVzdGlmeS1jZW50ZXInKTtcbiAgICBjb25zdCBidXR0b25Db21tZW50cyA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdtaW5pbWFsIHBvaW50ZXIgcC15LTUgcC14LTEwIG0tdC0yNScsIHsgdHlwZTogJ2J1dHRvbicgfSwgJ0NvbW1lbnRzJyk7XG4gICAgYnV0dG9uRGl2LmFwcGVuZChidXR0b25Db21tZW50cyk7XG5cbiAgICBjYXJkQm9keS5hcHBlbmQoY2FyZEhlYWRlciwgc3Bhbkxpa2VzLCBidXR0b25EaXYpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcmRJbWFnZSwgY2FyZEJvZHkpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGxpa2VzID0gMCwgZGVzY3JpcHRpb24sIGltYWdlLCB1cmwpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpa2VzID0gbGlrZXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxufSIsImltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIH1cblxuICBidWlsZChjaGFyYWN0ZXJzKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhjaGFyYWN0ZXJzKS5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2FyZHMucHVzaChuZXcgQ2FyZChjaGFyYWN0ZXIpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFwcGVuZCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoLi4udGhpcy5jYXJkcyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMsIHRvZ2dsZSB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5pbXBvcnQgTWFydmVsQVBJIGZyb20gJy4vTWFydmVsQVBJLmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL0ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLmpzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZSA9IG5ldyBNYXJ2ZWxBUEkoKTtcbiAgICB0aGlzLmludm9sdmVtZW50ID0gbmV3IEludm9sdmVtZW50QVBJKCk7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gW107XG4gICAgdGhpcy5hcGlMaWtlcyA9IFtdO1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHt9O1xuICAgIHRoaXMubGlrZXMgPSB7fTtcbiAgICB0aGlzLml0ZW1JZCA9IDA7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSAwO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldEFQSURhdGEoKTtcbiAgICB0aGlzLm9iamVjdGlmeUFQSURhdGEoKTtcbiAgICB0aGlzLmhhbmRsZUNvdW50ZXIoKTtcbiAgICB0aGlzLnBvcHVsYXRlR3JpZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFQSURhdGEoKSB7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy5iYXNlLmdldENoYXJhY3RlcnMoKTtcbiAgICB0aGlzLmFwaUxpa2VzID0gYXdhaXQgdGhpcy5pbnZvbHZlbWVudC5nZXRMaWtlcygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5QVBJRGF0YSgpIHtcbiAgICB0aGlzLm9iamVjdGlmeUxpa2VzKCk7XG4gICAgdGhpcy5vYmplY3RpZnlDaGFyYWN0ZXJzKCk7XG4gIH1cblxuICBvYmplY3RpZnlMaWtlcygpIHtcbiAgICB0aGlzLmFwaUxpa2VzLmZvckVhY2goKGFwaUxpa2UpID0+IHtcbiAgICAgIHRoaXMubGlrZXNbYXBpTGlrZS5pdGVtX2lkXSA9IGFwaUxpa2UubGlrZXM7XG4gICAgfSk7XG4gIH1cblxuICBvYmplY3RpZnlDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycy5mb3JFYWNoKChhcGlDaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2hhcmFjdGVyc1thcGlDaGFyYWN0ZXIubmFtZV0gPSBuZXcgQ2hhcmFjdGVyKFxuICAgICAgICBhcGlDaGFyYWN0ZXIuaWQsXG4gICAgICAgIGFwaUNoYXJhY3Rlci5uYW1lLFxuICAgICAgICB0aGlzLmxpa2VzW2FwaUNoYXJhY3Rlci5pZF0sXG4gICAgICAgIGFwaUNoYXJhY3Rlci5kZXNjcmlwdGlvbixcbiAgICAgICAgYCR7YXBpQ2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2FwaUNoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWAsXG4gICAgICAgIGFwaUNoYXJhY3Rlci51cmxzWzBdLnVybCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDb3VudGVyKCkge1xuICAgIHRoaXMuc2V0Q291bnRlcigpO1xuICAgIHRoaXMuZGlzcGxheUNvdW50ZXIoKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSB0aGlzLmFwaUNoYXJhY3RlcnMubGVuZ3RoO1xuICB9XG5cbiAgZGlzcGxheUNvdW50ZXIoKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYScpO1xuICAgIGNoYXJhY3RlcnNNZW51LmlubmVySFRNTCA9IGBDaGFyYWN0ZXJzICgke3RoaXMuY2hhcmFjdGVyc0NvdW50fSlgO1xuICB9XG5cbiAgcG9wdWxhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZCgnZ3JpZCcpO1xuICAgIGdyaWQuYnVpbGQodGhpcy5jaGFyYWN0ZXJzKS5hcHBlbmQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Db21tZW50LWJ0bicpO1xuXG4gICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwKCk7XG4gICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIGNvbW1lbnRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcHVwLmluaXQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIGxpa2VCdXR0b25zLFxuICAgICAge1xuICAgICAgICBjbGljazogKGUpID0+IHRoaXMubGlrZUNoYXJhY3RlcihlKSxcbiAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHRvZ2dsZShlLnRhcmdldCwgJ2lubmVySFRNTCcsIFsnZmF2b3JpdGUnLCAnZmF2b3JpdGVfYm9yZGVyJ10pLFxuICAgICAgICBtb3VzZWxlYXZlOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBsaWtlQ2hhcmFjdGVyKGUpIHtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsTGlrZXMoZS50YXJnZXQpO1xuICAgIHRoaXMuaW52b2x2ZW1lbnQucG9zdExpa2UodGhpcy5pdGVtSWQpO1xuICB9XG5cbiAgdXBkYXRlTG9jYWxMaWtlcyhlbGVtZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG4gICAgY29uc3QgbGlrZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMuaXRlbUlkID0gdGhpcy5jaGFyYWN0ZXJzW25hbWVdLmlkO1xuXG4gICAgdGhpcy5saWtlc1t0aGlzLml0ZW1JZF0gKz0gMTtcbiAgICB0aGlzLmNoYXJhY3RlcnNbbmFtZV0ubGlrZXMgKz0gMTtcblxuICAgIGxpa2VFbGVtZW50LmlubmVySFRNTCA9IGAke3RoaXMubGlrZXNbdGhpcy5pdGVtSWRdfSBMaWtlc2A7XG4gIH1cbn1cbiIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSBleHRlbmRzIEFQSSB7XG4gIGFzeW5jIHBvc3RMaWtlKGl0ZW1JZCkge1xuICAgIHN1cGVyLnVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFGalZ6WmJmUnFXZHZybllFd2g2L2xpa2VzJyk7XG5cbiAgICBzdXBlci5ib2R5ID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH07XG5cbiAgICBhd2FpdCBzdXBlci5wb3N0KCk7XG4gIH1cblxuICBhc3luYyBnZXRMaWtlcygpIHtcbiAgICBzdXBlci51cmwgPSBuZXcgVVJMKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xRmpWelpiZlJxV2R2cm5ZRXdoNi9saWtlcycpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn0iLCJpbXBvcnQgQVBJIGZyb20gJy4vQVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFydmVsQVBJIGV4dGVuZHMgQVBJIHtcbiAgYXN5bmMgZ2V0Q2hhcmFjdGVycygpIHtcbiAgICBzdXBlci51cmwgPSBuZXcgVVJMKCdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMvY2hhcmFjdGVycycpO1xuXG4gICAgc3VwZXIucGFyYW1zID0ge1xuICAgICAgYXBpa2V5OiAnODZhZjRhMTc0OWQ3NDRmNGY2YzY0M2M1Yzg3YTRmM2MnLFxuICAgICAgbGltaXQ6ICcxMCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdXBlci5nZXQoKTtcblxuICAgIHJldHVybiBkYXRhLmRhdGEucmVzdWx0cztcbiAgfVxufSIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBpbml0KCkge1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2luZy1idG4nKTtcbiAgICBsZXQgcG9wdXBTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgY2xvc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIHRoZSBjbG9zaW5nIGJ1dHRvbicpO1xuICAgICAgY29uc29sZS5sb2cocG9wdXBTZWN0aW9uKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocG9wdXBTZWN0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjbG9zaW5nQnV0dG9uKTtcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIGxldCBjbG9zaW5nQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdjbG9zaW5nLWJ0biBqdXN0aWZ5LWVuZCcsXG4gICAgICB7fSxcbiAgICAgICcmdGltZXM7J1xuICAgICk7XG5cbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vdGVycmlnZW4tY2RuLWRldi5tYXJ2ZWwuY29tL2NvbnRlbnQvcHJvZC8xeC8wMTJzY3dfb25zX2NyZF8wMi5qcGcnLFxuICAgIH0pO1xuICAgIGxldCBoMiA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsIHt9LCAncG9wdXAgdGl0bGUnKTtcbiAgICBsZXQgc3Bhbmljb24gPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgJ21hdGVyaWFsLWljb25zIGZsZXgtY29sIGp1c3RpZnktZW5kJyxcbiAgICAgIHt9LFxuICAgICAgJ2Zhdm9yaXRlX2JvcmRlcidcbiAgICApO1xuICAgIGxldCBzcGFuTGlrZXMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCAnMCBMaWtlcycpO1xuXG4gICAgbGV0IGRldGFpbHMxID0gY3JlYXRlRWxlbWVudCgncCcsICcnLCB7fSwgJ3N1cGVyIHBvd2VyOm1hZ2ljJyk7XG4gICAgbGV0IGRldGFpbHMyID0gY3JlYXRlRWxlbWVudCgncCcsICcnLCB7fSwgJ2FnZTozMCcpO1xuICAgIGxldCBkZXRhaWxzRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2RldGFpbHMnKTtcbiAgICBkZXRhaWxzRGl2LmFwcGVuZChkZXRhaWxzMSwgZGV0YWlsczIpO1xuICAgIGxldCBjb21tZW50VXNlck5hbWUgPSBjcmVhdGVFbGVtZW50KCdoNicsICcnLCB7fSwgJ3VzZXIgbmFtZScpO1xuICAgIGxldCBjb21tZW50Q29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywge30sICdjb21tZW50IHNvbXRoaW5nJyk7XG4gICAgbGV0IGNvbW1lbnREaXYgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAnY29tbWVudHMgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGp1c3RpZnktY2VudGVyIHAteS01MCdcbiAgICApO1xuICAgIGNvbW1lbnREaXYuYXBwZW5kKGNvbW1lbnRVc2VyTmFtZSwgY29tbWVudENvbnRlbnQpO1xuICAgIGxldCBmb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsICdmbGV4LWNvbCcpO1xuICAgIGxldCBmb3JtaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICcnLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ3lvdXJuYW1lJyxcbiAgICB9KTtcbiAgICBsZXQgdGV4dGFyZWEgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICcnLCB7XG4gICAgICBpZDogJ3R4dGlkJyxcbiAgICAgIG5hbWU6ICd0eHRuYW1lJyxcbiAgICAgIHJvd3M6ICc0JyxcbiAgICAgIGNvbHM6ICc1MCcsXG4gICAgICBtYXhsZW5ndGg6ICcyMDAnLFxuICAgICAgcGxhY2Vob2xkZXI6ICd0ZXh0JyxcbiAgICB9KTtcbiAgICBsZXQgY29tbWVudEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICcnLCB7fSwgJ2NvbW1lbnQnKTtcbiAgICBmb3JtLmFwcGVuZChmb3JtaGVhZGVyLCBpbnB1dCwgdGV4dGFyZWEsIGNvbW1lbnRCdG4pO1xuICAgIGxldCBwb3B1cFNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ3BvcHVwIGZsZXgtY29sJyk7XG5cbiAgICBwb3B1cFNlY3Rpb24uYXBwZW5kKFxuICAgICAgY2xvc2luZ0J0bixcbiAgICAgIGltZyxcbiAgICAgIGgyLFxuICAgICAgc3Bhbmljb24sXG4gICAgICBzcGFuTGlrZXMsXG4gICAgICBkZXRhaWxzRGl2LFxuICAgICAgY29tbWVudERpdixcbiAgICAgIGZvcm1cbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcHVwU2VjdGlvbik7XG4gIH1cbn1cbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGNsYXNzTmFtZXMgPSAnJywgYXR0cmlidXRlcyA9IHt9LCBpbm5lckhUTUwgPSAnJywgcHJvcGVydGllcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgaWYgKGNsYXNzTmFtZXMpIGVsZW1lbnRPYmplY3QuY2xhc3NMaXN0LmFkZCguLi4oY2xhc3NOYW1lcy5zcGxpdCgnICcpKSk7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3Quc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgZWxlbWVudE9iamVjdFtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgfSk7XG4gIGVsZW1lbnRPYmplY3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICByZXR1cm4gZWxlbWVudE9iamVjdDtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChlbGVtZW50cywgbGlzdGVuZXJzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudCwgbGlzdGVuZXJdKSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgc3RhdGVzKSA9PiB7XG4gIHRhcmdldFtwcm9wZXJ0eV0gPSAodGFyZ2V0W3Byb3BlcnR5XSA9PT0gc3RhdGVzWzBdID8gc3RhdGVzWzFdIDogc3RhdGVzWzBdKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZExpc3RlbmVycywgdG9nZ2xlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxldCBob21lID0gbmV3IEhvbWUoKTtcbiAgaG9tZS5pbml0KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=