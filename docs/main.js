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

  async setEventListeners() {
    const commentBtn = document.querySelectorAll('.Comment-btn');
    const apiCharacters = await this.base.getCharacters();
    let popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_5__.default();
    commentBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        let name = apiCharacters[index].name;
        let image = this.characters[name].image;
        popup.init(image, name, apiCharacters[index].description);
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
  constructor() {
    this.characterName = '';
  }

  init(image, name, description) {
    this.build(image, name, description);
    this.setEventListener();
  }

  async setEventListener() {
    let closingButton = document.querySelector('.closing-btn');
    let popupSection = document.querySelector('.popup');
    closingButton.addEventListener('click', () => {
      document.body.removeChild(popupSection);
    });
  }

  build(image, name, description) {
    let closingBtn = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      'span',
      'closing-btn justify-end',
      {},
      '&times;'
    );

    let img = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', '', {
      src: image,
    });
    let h2 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', {}, name);

    let details1 = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '', {}, `description : ${description}`);
    let detailsDiv = (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'details');
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

    popupSection.append(closingBtn, img, h2, detailsDiv, commentDiv, form);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtrUEFDeUg7d0xBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUhBQXlILGtCQUFrQjtBQUMzSTtBQUNBLGlEQUFpRCxrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLDRCQUE0QixHQUFHLHNCQUFzQixtQ0FBbUMsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsb0JBQW9CLGdDQUFnQyxHQUFHLGNBQWMscUJBQXFCLDBCQUEwQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxhQUFhLHVCQUF1Qix3QkFBd0IsR0FBRyxhQUFhLHNCQUFzQix5QkFBeUIsR0FBRyxhQUFhLHFCQUFxQix3QkFBd0IsR0FBRyxjQUFjLHdCQUF3Qix5QkFBeUIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsaUJBQWlCLGtEQUFrRCxxQkFBcUIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsWUFBWSxxQkFBcUIsV0FBVyxHQUFHLGNBQWMsY0FBYyxHQUFHLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsZUFBZSxHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxVQUFVLHVCQUF1QixHQUFHLGNBQWMsb0RBQW9ELHdCQUF3QixnQ0FBZ0MsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsd0JBQXdCLGtCQUFrQixpQ0FBaUMsR0FBRyxpQ0FBaUMsaUJBQWlCLEdBQUcsaURBQWlELGVBQWUsR0FBRywyQkFBMkIsNEJBQTRCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxjQUFjLHVCQUF1QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixXQUFXLHFHQUFxRyxHQUFHLG9CQUFvQixjQUFjLHdHQUF3RyxHQUFHLFlBQVksdUJBQXVCLGdDQUFnQyxZQUFZLGNBQWMsZUFBZSxnQkFBZ0IsMkJBQTJCLGlCQUFpQiwyQkFBMkIsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsR0FBRyxjQUFjLGVBQWUsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsWUFBWSxnQkFBZ0Isb0JBQW9CLGNBQWMsR0FBRyxPQUFPLGlLQUFpSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxpQ0FBaUMsa0JBQWtCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyxzQkFBc0IsbUNBQW1DLEdBQUcsa0JBQWtCLDhCQUE4QixHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRywyQkFBMkIsMkJBQTJCLGtGQUFrRixtQkFBbUIsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLGlCQUFpQixnREFBZ0QscUJBQXFCLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLFlBQVkscUJBQXFCLFdBQVcsV0FBVyxnQkFBZ0IsV0FBVyxxQkFBcUIsbUJBQW1CLHFCQUFxQixTQUFTLE9BQU8sYUFBYSxxQkFBcUIsT0FBTyxLQUFLLEdBQUcsVUFBVSx1QkFBdUIsYUFBYSxzREFBc0QsMEJBQTBCLGtDQUFrQyxlQUFlLGtDQUFrQyw4QkFBOEIsZUFBZSx3QkFBd0IsdUNBQXVDLFNBQVMsd0JBQXdCLHVCQUF1Qiw2QkFBNkIsdUJBQXVCLFdBQVcsU0FBUyxrQkFBa0Isa0NBQWtDLHFCQUFxQixrQ0FBa0MsV0FBVyxTQUFTLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHVCQUF1QixzQkFBc0IseUNBQXlDLGlDQUFpQyxpQ0FBaUMsMkNBQTJDLFlBQVksT0FBTyxLQUFLLDJCQUEyQix5QkFBeUIsS0FBSyxhQUFhLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQixLQUFLLG9CQUFvQixhQUFhLDJKQUEySixLQUFLLG1CQUFtQixnQkFBZ0IsOEpBQThKLEtBQUssR0FBRyxZQUFZLHVCQUF1QixnQ0FBZ0MsWUFBWSxjQUFjLGVBQWUsZ0JBQWdCLDJCQUEyQixpQkFBaUIsMkJBQTJCLGtCQUFrQixvQkFBb0IscUJBQXFCLHNCQUFzQixLQUFLLFNBQVMsaUJBQWlCLHFCQUFxQixLQUFLLFFBQVEscUJBQXFCLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxlQUFlLFVBQVUseUJBQXlCLE9BQU8sS0FBSyxVQUFVLGFBQWEsdUJBQXVCLE9BQU8sa0JBQWtCLHVCQUF1QixPQUFPLEtBQUssR0FBRyxZQUFZLGdCQUFnQixvQkFBb0IsY0FBYyxHQUFHLGFBQWEscUJBQXFCLDBCQUEwQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxjQUFjLGFBQWEsc0JBQXNCLEtBQUssR0FBRyxlQUFlLHVCQUF1QixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxZQUFZLHFCQUFxQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLGFBQWEsdUJBQXVCLHdCQUF3QixHQUFHLGFBQWEsc0JBQXNCLHlCQUF5QixHQUFHLGFBQWEscUJBQXFCLHdCQUF3QixHQUFHLGNBQWMsd0JBQXdCLHlCQUF5QixHQUFHLHFCQUFxQjtBQUMzeFE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7MEJDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OzBCQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRXZlLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSw4TEFBa0c7QUFDbEcsMEtBQXdGO0FBQ3hGLHdMQUErRjtBQUMvRiw4TkFBa0g7QUFDbEgsZ05BQTJHO0FBQzNHLGdOQUEyRztBQUMzRyw4UkFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7Ozt3T0FJNEY7QUFDcEgsT0FBTyxpRUFBZSx5SEFBTyxJQUFJLGdJQUFjLEdBQUcsZ0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OzswQkMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OzswQkNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7OzBCQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OzswQkNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEOzs7Ozs7Ozs7OzBCQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7Ozs7OzswQkMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7Ozs7OEJDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztrQkMvQjZDOzs4QkFFOUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBEQUFhOztBQUVsQyxzQkFBc0IsMERBQWEsY0FBYyxzQkFBc0I7O0FBRXZFLHFCQUFxQiwwREFBYTs7QUFFbEMsdUJBQXVCLDBEQUFhO0FBQ3BDLHFCQUFxQiwwREFBYSxlQUFlO0FBQ2pELHFCQUFxQiwwREFBYSwwQ0FBMEM7QUFDNUU7O0FBRUEsc0JBQXNCLDBEQUFhLG1DQUFtQyxLQUFLLGlCQUFpQjs7QUFFNUYsc0JBQXNCLDBEQUFhO0FBQ25DLDJCQUEyQiwwREFBYSxvREFBb0QsZ0JBQWdCO0FBQzVHOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs4QkMvQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OzBEQ1Q2Qjs7OEJBRWQ7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDeEJvRDs4RUFDYjtrR0FDVTs4RUFDVjswREFDVjs4REFDRTs7OEJBRWhCO0FBQ2Y7QUFDQSxvQkFBb0Isa0RBQVM7QUFDN0IsMkJBQTJCLHVEQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEIsR0FBRyxpQ0FBaUM7QUFDM0U7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxxQkFBcUI7QUFDbkU7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsSUFBSSx5REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQU07QUFDakMsMkJBQTJCLG1EQUFNO0FBQ2pDLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3NEQ2pIMkI7OzhCQUVaLDZCQUE2Qiw0Q0FBRztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3NEQ3BCMkI7OzhCQUVaLHdCQUF3Qiw0Q0FBRztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7a0JDZjZDOzs4QkFFOUI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHFCQUFxQiwwREFBYTtBQUNsQztBQUNBO0FBQ0EsUUFBUTtBQUNSLGNBQWM7QUFDZDs7QUFFQSxjQUFjLDBEQUFhO0FBQzNCO0FBQ0EsS0FBSztBQUNMLGFBQWEsMERBQWEsYUFBYTs7QUFFdkMsbUJBQW1CLDBEQUFhLFlBQVksbUJBQW1CLFlBQVk7QUFDM0UscUJBQXFCLDBEQUFhO0FBQ2xDO0FBQ0EsMEJBQTBCLDBEQUFhLGFBQWE7QUFDcEQseUJBQXlCLDBEQUFhLFlBQVk7QUFDbEQscUJBQXFCLDBEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBYTtBQUM1QixxQkFBcUIsMERBQWE7QUFDbEMsZ0JBQWdCLDBEQUFhO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLDBEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsMERBQWEsaUJBQWlCO0FBQ25EO0FBQ0EsdUJBQXVCLDBEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUEsb0VBQW9FLGlDQUFpQztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztrQkFFK0M7Ozs7Ozs7VUN6Qi9DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7O3dEQ040QjswREFDQzs7QUFFN0I7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvR3JpZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9JbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL01hcnZlbEFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLm1pbmltYWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JvbGwteSB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5wb2ludGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wLXktNTAge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wLXgtMTAwIHtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGFyay1ncmV5LWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5oZWFkZXIgbmF2IHtcXG4gIGdhcDogMzBweDtcXG59XFxuaGVhZGVyIG5hdiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyIG5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbmhlYWRlciBuYXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm1haW4gLmdyaWQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxNTBweCk7XFxuICBncmlkLWdhcDogNTBweCA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg4cHgpO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgaW1nIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIC5jYXJkLWhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgLmNhcmQtaGVhZGVyIC5tYXRlcmlhbC1pY29ucyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIGJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5tYWluIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5tYWluIC5mYWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gLmZhZGUtYmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcXG59XFxubWFpbiAuZmFkZS1hZnRlciB7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMTAwJSk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0b3A6IDMlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5wb3B1cCAuY2xvc2luZy1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXAgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnBvcHVwIGgyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ucG9wdXAgLmRldGFpbHMge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5wb3B1cCAuY29tbWVudHMgaDYge1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuLnBvcHVwIGZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbi5wb3B1cCBmb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3V0aWxpdGllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBQ2pDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QURvQ0Y7O0FDakNBO0VBQ0Usa0JBQUE7QURvQ0Y7O0FDakNBO0VBQ0Usa0JBQUE7QURvQ0Y7O0FDaENFO0VBQ0UsZUFBQTtBRG1DSjs7QUMvQkE7RUFDRSxrQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxpQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxnQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEa0NGOztBQy9CQTtFQUNFLGFBQUE7QURrQ0Y7O0FDL0JBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRGtDRjs7QUMvQkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEa0NGOztBQy9CQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURrQ0Y7O0FDL0JBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBRGtDRjs7QUF2RkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUEwRkY7O0FBdkZBO0VBQ0UseUJBQUE7QUEwRkY7O0FBdkZBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBMEZGO0FBeEZFO0VBQ0UsU0FBQTtBQTBGSjtBQXhGSTtFQUNFLFlBQUE7QUEwRk47QUF4Rk07RUFDRSxVQUFBO0FBMEZSO0FBdEZJO0VBQ0UsWUFBQTtBQXdGTjs7QUFuRkE7RUFDRSxrQkFBQTtBQXNGRjtBQXBGRTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQXNGSjtBQXBGSTtFQUNFLHlCQUFBO0FBc0ZOO0FBbkZNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBcUZSO0FBbEZNO0VBQ0UsWUFBQTtBQW9GUjtBQWxGUTtFQUNFLFVBQUE7QUFvRlY7QUFoRk07RUFDRSx1QkFBQTtBQWtGUjtBQWhGUTtFQUNFLHFCQUFBO0FBa0ZWO0FBakVFO0VBQ0Usa0JBQUE7QUFtRUo7QUFoRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtFSjtBQS9ERTtFQUNFLE1BQUE7RUFDQSxnR0FDRTtBQWdFTjtBQXhERTtFQUNFLFNBQUE7RUFDQSxtR0FDRTtBQXlETjs7QUFoREE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBbURGO0FBbERFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBb0RKO0FBbERFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFvREo7QUFsREU7RUFDRSxjQUFBO0FBb0RKO0FBbERFO0VBQ0UsY0FBQTtBQW9ESjtBQWpESTtFQUNFLGdCQUFBO0FBbUROO0FBL0NJO0VBQ0UsY0FBQTtBQWlETjtBQTlDSTtFQUNFLGNBQUE7QUFnRE47O0FBM0NBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBOENGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblwiLFwiQGltcG9ydCAnbGF5b3V0LnNjc3MnO1xcbkBpbXBvcnQgJ3V0aWxpdGllcy5zY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG5cXG4gIG5hdiB7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgYSB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTUwcHgpO1xcbiAgICBncmlkLWdhcDogNTBweCA1MHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5jYXJkLWhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAvLyAmOmFmdGVyIHtcXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAvLyAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIC8vICAgYm90dG9tOiAwO1xcbiAgICAgIC8vICAgcmlnaHQ6IDA7XFxuICAgICAgLy8gICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwIDA7XFxuICAgICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAvLyAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIC8vIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5mYWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC5mYWRlLWJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byB0b3AsXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXFxuICAgICAgICAxMDAlXFxuICAgICAgKTtcXG4gIH1cXG5cXG4gIC5mYWRlLWFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIGJvdHRvbSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcXG4gICAgICAgIDEwMCVcXG4gICAgICApO1xcbiAgfVxcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdG9wOiAzJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLmNsb3NpbmctYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgaDIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gIC5kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICB9XFxuICAuY29tbWVudHMge1xcbiAgICBoNiB7XFxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcXG4gICAgfVxcbiAgfVxcbiAgZm9ybSB7XFxuICAgIGlucHV0IHtcXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgcGFkZGluZzogMC4zZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cIixcIi5taW5pbWFsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Nyb2xsLXkge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9pbnRlciB7XFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXJsID0gJyc7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLmhlYWRlcnMgPSB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgfVxuXG4gIGFzeW5jIGdldCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLnVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdGhpcy5wYXJhbXNba2V5XSkpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBwb3N0KCkge1xuICAgIGF3YWl0IGZldGNoKFxuXG4gICAgICB0aGlzLnVybCxcblxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmJvZHkpLFxuICAgICAgfSxcblxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gJyc7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgc2V0IGNoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgeyBzcmM6IGNoYXJhY3Rlci5pbWFnZSB9KTtcblxuICAgIGNvbnN0IGNhcmRCb2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIHAtMTAnKTtcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1oZWFkZXIgZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBjaGFyYWN0ZXIubmFtZSk7XG4gICAgY29uc3Qgc3Bhbkljb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xpa2UgbWF0ZXJpYWwtaWNvbnMgcG9pbnRlcicsIHt9LCAnZmF2b3JpdGVfYm9yZGVyJyk7XG4gICAgY2FyZEhlYWRlci5hcHBlbmQoc3Bhbk5hbWUsIHNwYW5JY29uKTtcblxuICAgIGNvbnN0IHNwYW5MaWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnZmxleC1yb3cganVzdGlmeS1lbmQnLCB7fSwgYCR7Y2hhcmFjdGVyLmxpa2VzfSBMaWtlc2ApO1xuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29tbWVudHMgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWluaW1hbCBwb2ludGVyIHAteS01IHAteC0xMCBtLXQtMjUnLCB7IHR5cGU6ICdidXR0b24nIH0sICdDb21tZW50cycpO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmQoYnV0dG9uQ29tbWVudHMpO1xuXG4gICAgY2FyZEJvZHkuYXBwZW5kKGNhcmRIZWFkZXIsIHNwYW5MaWtlcywgYnV0dG9uRGl2KTtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChjYXJkSW1hZ2UsIGNhcmRCb2R5KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsaWtlcyA9IDAsIGRlc2NyaXB0aW9uLCBpbWFnZSwgdXJsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcblxuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIH1cblxuICBidWlsZChjaGFyYWN0ZXJzKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhjaGFyYWN0ZXJzKS5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2FyZHMucHVzaChuZXcgQ2FyZChjaGFyYWN0ZXIpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFwcGVuZCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoLi4udGhpcy5jYXJkcyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMsIHRvZ2dsZSB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5pbXBvcnQgTWFydmVsQVBJIGZyb20gJy4vTWFydmVsQVBJLmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL0ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLmpzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZSA9IG5ldyBNYXJ2ZWxBUEkoKTtcbiAgICB0aGlzLmludm9sdmVtZW50ID0gbmV3IEludm9sdmVtZW50QVBJKCk7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gW107XG4gICAgdGhpcy5hcGlMaWtlcyA9IFtdO1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHt9O1xuICAgIHRoaXMubGlrZXMgPSB7fTtcbiAgICB0aGlzLml0ZW1JZCA9IDA7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSAwO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldEFQSURhdGEoKTtcbiAgICB0aGlzLm9iamVjdGlmeUFQSURhdGEoKTtcbiAgICB0aGlzLmhhbmRsZUNvdW50ZXIoKTtcbiAgICB0aGlzLnBvcHVsYXRlR3JpZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFQSURhdGEoKSB7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy5iYXNlLmdldENoYXJhY3RlcnMoKTtcbiAgICB0aGlzLmFwaUxpa2VzID0gYXdhaXQgdGhpcy5pbnZvbHZlbWVudC5nZXRMaWtlcygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5QVBJRGF0YSgpIHtcbiAgICB0aGlzLm9iamVjdGlmeUxpa2VzKCk7XG4gICAgdGhpcy5vYmplY3RpZnlDaGFyYWN0ZXJzKCk7XG4gIH1cblxuICBvYmplY3RpZnlMaWtlcygpIHtcbiAgICB0aGlzLmFwaUxpa2VzLmZvckVhY2goKGFwaUxpa2UpID0+IHtcbiAgICAgIHRoaXMubGlrZXNbYXBpTGlrZS5pdGVtX2lkXSA9IGFwaUxpa2UubGlrZXM7XG4gICAgfSk7XG4gIH1cblxuICBvYmplY3RpZnlDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycy5mb3JFYWNoKChhcGlDaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2hhcmFjdGVyc1thcGlDaGFyYWN0ZXIubmFtZV0gPSBuZXcgQ2hhcmFjdGVyKFxuICAgICAgICBhcGlDaGFyYWN0ZXIuaWQsXG4gICAgICAgIGFwaUNoYXJhY3Rlci5uYW1lLFxuICAgICAgICB0aGlzLmxpa2VzW2FwaUNoYXJhY3Rlci5pZF0sXG4gICAgICAgIGFwaUNoYXJhY3Rlci5kZXNjcmlwdGlvbixcbiAgICAgICAgYCR7YXBpQ2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2FwaUNoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWAsXG4gICAgICAgIGFwaUNoYXJhY3Rlci51cmxzWzBdLnVybCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDb3VudGVyKCkge1xuICAgIHRoaXMuc2V0Q291bnRlcigpO1xuICAgIHRoaXMuZGlzcGxheUNvdW50ZXIoKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSB0aGlzLmFwaUNoYXJhY3RlcnMubGVuZ3RoO1xuICB9XG5cbiAgZGlzcGxheUNvdW50ZXIoKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYScpO1xuICAgIGNoYXJhY3RlcnNNZW51LmlubmVySFRNTCA9IGBDaGFyYWN0ZXJzICgke3RoaXMuY2hhcmFjdGVyc0NvdW50fSlgO1xuICB9XG5cbiAgcG9wdWxhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZCgnZ3JpZCcpO1xuICAgIGdyaWQuYnVpbGQodGhpcy5jaGFyYWN0ZXJzKS5hcHBlbmQoKTtcbiAgfVxuXG4gIGFzeW5jIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tbWVudC1idG4nKTtcbiAgICBjb25zdCBhcGlDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy5iYXNlLmdldENoYXJhY3RlcnMoKTtcbiAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXAoKTtcbiAgICBjb21tZW50QnRuLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBhcGlDaGFyYWN0ZXJzW2luZGV4XS5uYW1lO1xuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLmNoYXJhY3RlcnNbbmFtZV0uaW1hZ2U7XG4gICAgICAgIHBvcHVwLmluaXQoaW1hZ2UsIG5hbWUsIGFwaUNoYXJhY3RlcnNbaW5kZXhdLmRlc2NyaXB0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIGxpa2VCdXR0b25zLFxuICAgICAge1xuICAgICAgICBjbGljazogKGUpID0+IHRoaXMubGlrZUNoYXJhY3RlcihlKSxcbiAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHRvZ2dsZShlLnRhcmdldCwgJ2lubmVySFRNTCcsIFsnZmF2b3JpdGUnLCAnZmF2b3JpdGVfYm9yZGVyJ10pLFxuICAgICAgICBtb3VzZWxlYXZlOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBsaWtlQ2hhcmFjdGVyKGUpIHtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsTGlrZXMoZS50YXJnZXQpO1xuICAgIHRoaXMuaW52b2x2ZW1lbnQucG9zdExpa2UodGhpcy5pdGVtSWQpO1xuICB9XG5cbiAgdXBkYXRlTG9jYWxMaWtlcyhlbGVtZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG4gICAgY29uc3QgbGlrZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMuaXRlbUlkID0gdGhpcy5jaGFyYWN0ZXJzW25hbWVdLmlkO1xuXG4gICAgdGhpcy5saWtlc1t0aGlzLml0ZW1JZF0gKz0gMTtcbiAgICB0aGlzLmNoYXJhY3RlcnNbbmFtZV0ubGlrZXMgKz0gMTtcblxuICAgIGxpa2VFbGVtZW50LmlubmVySFRNTCA9IGAke3RoaXMubGlrZXNbdGhpcy5pdGVtSWRdfSBMaWtlc2A7XG4gIH1cbn1cbiIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSBleHRlbmRzIEFQSSB7XG4gIGFzeW5jIHBvc3RMaWtlKGl0ZW1JZCkge1xuICAgIHN1cGVyLnVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFGalZ6WmJmUnFXZHZybllFd2g2L2xpa2VzJyk7XG5cbiAgICBzdXBlci5ib2R5ID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH07XG5cbiAgICBhd2FpdCBzdXBlci5wb3N0KCk7XG4gIH1cblxuICBhc3luYyBnZXRMaWtlcygpIHtcbiAgICBzdXBlci51cmwgPSBuZXcgVVJMKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xRmpWelpiZlJxV2R2cm5ZRXdoNi9saWtlcycpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJ2ZWxBUEkgZXh0ZW5kcyBBUEkge1xuICBhc3luYyBnZXRDaGFyYWN0ZXJzKCkge1xuICAgIHN1cGVyLnVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzJyk7XG5cbiAgICBzdXBlci5wYXJhbXMgPSB7XG4gICAgICBhcGlrZXk6ICc4NmFmNGExNzQ5ZDc0NGY0ZjZjNjQzYzVjODdhNGYzYycsXG4gICAgICBsaW1pdDogJzEwJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGEuZGF0YS5yZXN1bHRzO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJOYW1lID0gJyc7XG4gIH1cblxuICBpbml0KGltYWdlLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuYnVpbGQoaW1hZ2UsIG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG4gIGFzeW5jIHNldEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgbGV0IGNsb3NpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2luZy1idG4nKTtcbiAgICBsZXQgcG9wdXBTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgY2xvc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocG9wdXBTZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkKGltYWdlLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCBjbG9zaW5nQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgICdjbG9zaW5nLWJ0biBqdXN0aWZ5LWVuZCcsXG4gICAgICB7fSxcbiAgICAgICcmdGltZXM7J1xuICAgICk7XG5cbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHtcbiAgICAgIHNyYzogaW1hZ2UsXG4gICAgfSk7XG4gICAgbGV0IGgyID0gY3JlYXRlRWxlbWVudCgnaDInLCAnJywge30sIG5hbWUpO1xuXG4gICAgbGV0IGRldGFpbHMxID0gY3JlYXRlRWxlbWVudCgncCcsICcnLCB7fSwgYGRlc2NyaXB0aW9uIDogJHtkZXNjcmlwdGlvbn1gKTtcbiAgICBsZXQgZGV0YWlsc0RpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkZXRhaWxzJyk7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmQoZGV0YWlsczEpO1xuICAgIGxldCBjb21tZW50VXNlck5hbWUgPSBjcmVhdGVFbGVtZW50KCdoNicsICcnLCB7fSwgJ3VzZXIgbmFtZScpO1xuICAgIGxldCBjb21tZW50Q29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywge30sICdjb21tZW50IHNvbXRoaW5nJyk7XG4gICAgbGV0IGNvbW1lbnREaXYgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAnY29tbWVudHMgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGp1c3RpZnktY2VudGVyIHAteS01MCdcbiAgICApO1xuICAgIGNvbW1lbnREaXYuYXBwZW5kKGNvbW1lbnRVc2VyTmFtZSwgY29tbWVudENvbnRlbnQpO1xuICAgIGxldCBmb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsICdmbGV4LWNvbCcpO1xuICAgIGxldCBmb3JtaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICcnLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ3lvdXJuYW1lJyxcbiAgICB9KTtcbiAgICBsZXQgdGV4dGFyZWEgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICcnLCB7XG4gICAgICBpZDogJ3R4dGlkJyxcbiAgICAgIG5hbWU6ICd0eHRuYW1lJyxcbiAgICAgIHJvd3M6ICc0JyxcbiAgICAgIGNvbHM6ICc1MCcsXG4gICAgICBtYXhsZW5ndGg6ICcyMDAnLFxuICAgICAgcGxhY2Vob2xkZXI6ICd0ZXh0JyxcbiAgICB9KTtcbiAgICBsZXQgY29tbWVudEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICcnLCB7fSwgJ2NvbW1lbnQnKTtcbiAgICBmb3JtLmFwcGVuZChmb3JtaGVhZGVyLCBpbnB1dCwgdGV4dGFyZWEsIGNvbW1lbnRCdG4pO1xuICAgIGxldCBwb3B1cFNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ3BvcHVwIGZsZXgtY29sJyk7XG5cbiAgICBwb3B1cFNlY3Rpb24uYXBwZW5kKGNsb3NpbmdCdG4sIGltZywgaDIsIGRldGFpbHNEaXYsIGNvbW1lbnREaXYsIGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcHVwU2VjdGlvbik7XG4gIH1cbn1cbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGNsYXNzTmFtZXMgPSAnJywgYXR0cmlidXRlcyA9IHt9LCBpbm5lckhUTUwgPSAnJywgcHJvcGVydGllcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgaWYgKGNsYXNzTmFtZXMpIGVsZW1lbnRPYmplY3QuY2xhc3NMaXN0LmFkZCguLi4oY2xhc3NOYW1lcy5zcGxpdCgnICcpKSk7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3Quc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgZWxlbWVudE9iamVjdFtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgfSk7XG4gIGVsZW1lbnRPYmplY3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICByZXR1cm4gZWxlbWVudE9iamVjdDtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChlbGVtZW50cywgbGlzdGVuZXJzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudCwgbGlzdGVuZXJdKSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgc3RhdGVzKSA9PiB7XG4gIHRhcmdldFtwcm9wZXJ0eV0gPSAodGFyZ2V0W3Byb3BlcnR5XSA9PT0gc3RhdGVzWzBdID8gc3RhdGVzWzFdIDogc3RhdGVzWzBdKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZExpc3RlbmVycywgdG9nZ2xlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbGV0IGhvbWUgPSBuZXcgSG9tZSgpO1xuICBob21lLmluaXQoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==