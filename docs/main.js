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
___CSS_LOADER_EXPORT___.push([module.id, ".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: auto;\n}\n\n.pointer:hover {\n  cursor: pointer;\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-b-10 {\n  margin-bottom: 10px;\n}\n\n.m-t-10 {\n  margin-top: 10px;\n}\n\n.m-r-10 {\n  margin-right: 10px;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: #202020;\n}\n\na {\n  color: white;\n}\na:hover {\n  color: red;\n}\n\nbutton {\n  border: 1px solid white;\n}\nbutton:hover {\n  background-color: red;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n}\nheader nav {\n  gap: 30px;\n}\nheader nav img {\n  height: 30px;\n}\n\n.popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #151515;\n}\n.popup > div {\n  gap: 20px;\n}\n.popup > div section {\n  gap: 10px;\n}\n.popup h2,\n.popup h3 {\n  color: red;\n}\n.popup img {\n  width: 80vh;\n  max-height: 80vh;\n  height: 80vh;\n}\n.popup p,\n.popup span {\n  font-weight: 400;\n}\n.popup .material-icons {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.popup .comments-container {\n  gap: 5px;\n  max-height: 72px;\n}\n.popup .comment-row {\n  gap: 10px;\n}\n.popup .comment-row span:nth-child(1) {\n  width: 20%;\n}\n.popup .comment-row span:nth-child(2) {\n  width: 25%;\n}\n.popup .comment-row span:nth-child(3) {\n  width: 45%;\n  overflow-wrap: break-word;\n}\n.popup input,\n.popup textarea {\n  outline: none;\n  color: black;\n  font-weight: 400;\n  font-size: 16px;\n}\n.popup textarea {\n  resize: none;\n}\n\nmain {\n  position: relative;\n}\nmain .grid {\n  grid-template-columns: repeat(auto-fill, 150px);\n  grid-gap: 50px 50px;\n  height: calc(100vh - 188px);\n}\nmain .grid .card {\n  background-color: #151515;\n}\nmain .grid .card img {\n  height: 150px;\n  border-bottom: 5px solid red;\n}\nmain .grid .card .card-header {\n  height: 50px;\n}\nmain .grid .card .card-header .material-icons {\n  color: red;\n}\nmain ::-webkit-scrollbar {\n  visibility: hidden;\n}\nmain .fade {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 50px;\n}\nmain .fade-before {\n  top: 0;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\nmain .fade-after {\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%);\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/scss/_layout.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_utilities.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;ACEF;;ADCA;EACE,aAAA;EACA,mBAAA;ACEF;;ADCA;EACE,aAAA;EACA,sBAAA;ACEF;;ADCA;EACE,mBAAA;ACEF;;ADCA;EACE,uBAAA;ACEF;;ADCA;EACE,8BAAA;ACEF;;ADCA;EACE,6BAAA;ACEF;;ADCA;EACE,yBAAA;ACEF;;ADCA;EACE,2BAAA;ACEF;;ADCA;EACE,kBAAA;ACEF;;ACzCA;EACE,gBAAA;EACA,qBAAA;AD4CF;;ACzCA;EACE,kBAAA;AD4CF;;ACzCA;EACE,gBAAA;AD4CF;;ACxCE;EACE,eAAA;AD2CJ;;ACvCA;EACE,kBAAA;AD0CF;;ACvCA;EACE,iBAAA;AD0CF;;ACvCA;EACE,mBAAA;AD0CF;;ACvCA;EACE,gBAAA;AD0CF;;ACvCA;EACE,kBAAA;AD0CF;;ACvCA;EACE,gBAAA;AD0CF;;ACvCA;EACE,gBAAA;EACA,mBAAA;AD0CF;;ACvCA;EACE,aAAA;AD0CF;;ACvCA;EACE,kBAAA;EACA,mBAAA;AD0CF;;ACvCA;EACE,iBAAA;EACA,oBAAA;AD0CF;;ACvCA;EACE,gBAAA;EACA,mBAAA;AD0CF;;ACvCA;EACE,mBAAA;EACA,oBAAA;AD0CF;;AA3GA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,2CAAA;EACA,gBAAA;AA8GF;;AA3GA;EACE,yBAAA;AA8GF;;AA3GA;EACE,YAAA;AA8GF;AA5GE;EACE,UAAA;AA8GJ;;AA1GA;EACE,uBAAA;AA6GF;AA3GE;EACE,qBAAA;AA6GJ;;AAzGA;EACE,gBAAA;EACA,MAAA;AA4GF;AA1GE;EACE,SAAA;AA4GJ;AA1GI;EACE,YAAA;AA4GN;;AAvGA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,yBAAA;AA0GF;AAxGE;EACE,SAAA;AA0GJ;AAxGI;EACE,SAAA;AA0GN;AAtGE;;EAEE,UAAA;AAwGJ;AArGE;EACE,WAAA;EACA,gBAAA;EACA,YAAA;AAuGJ;AApGE;;EAEE,gBAAA;AAsGJ;AAnGE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;AAqGJ;AAlGE;EACE,QAAA;EACA,gBAAA;AAoGJ;AAjGE;EACE,SAAA;AAmGJ;AAhGM;EACE,UAAA;AAkGR;AA/FM;EACE,UAAA;AAiGR;AA9FM;EACE,UAAA;EACA,yBAAA;AAgGR;AA3FE;;EAEE,aAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;AA6FJ;AA1FE;EACE,YAAA;AA4FJ;;AAxFA;EACE,kBAAA;AA2FF;AAzFE;EACE,+CAAA;EACA,mBAAA;EACA,2BAAA;AA2FJ;AAzFI;EACE,yBAAA;AA2FN;AAxFM;EACE,aAAA;EACA,4BAAA;AA0FR;AAvFM;EACE,YAAA;AAyFR;AAvFQ;EACE,UAAA;AAyFV;AAxEE;EACE,kBAAA;AA0EJ;AAvEE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AAyEJ;AAtEE;EACE,MAAA;EACA,gGACE;AAuEN;AA/DE;EACE,SAAA;EACA,mGACE;AAgEN;;AAvDA;EACE,WAAA;EACA,eAAA;EACA,SAAA;AA0DF","sourcesContent":[".grid {\n  display: grid;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.self-center {\n  align-self: center;\n}\n","@import 'layout.scss';\n@import 'utilities.scss';\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 700;\n}\n\n.dark-grey-bg {\n  background-color: rgb(32, 32, 32);\n}\n\na {\n  color: white;\n\n  &:hover {\n    color: red;\n  }\n}\n\nbutton {\n  border: 1px solid white;\n\n  &:hover {\n    background-color: red;\n  }\n}\n\nheader {\n  position: sticky;\n  top: 0;\n\n  nav {\n    gap: 30px;\n\n    img {\n      height: 30px;\n    }\n  }\n}\n\n.popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #151515;\n\n  & > div {\n    gap: 20px;\n\n    section {\n      gap: 10px;\n    }\n  }\n\n  h2,\n  h3 {\n    color: red;\n  }\n\n  img {\n    width: 80vh;\n    max-height: 80vh;\n    height: 80vh;\n  }\n\n  p,\n  span {\n    font-weight: 400;\n  }\n\n  .material-icons {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n\n  .comments-container {\n    gap: 5px;\n    max-height: 72px;\n  }\n\n  .comment-row {\n    gap: 10px;\n\n    span {\n      &:nth-child(1) {\n        width: 20%;\n      }\n\n      &:nth-child(2) {\n        width: 25%;\n      }\n\n      &:nth-child(3) {\n        width: 45%;\n        overflow-wrap: break-word;\n      }\n    }\n  }\n\n  input,\n  textarea {\n    outline: none;\n    color: black;\n    font-weight: 400;\n    font-size: 16px;\n  }\n\n  textarea {\n    resize: none;\n  }\n}\n\nmain {\n  position: relative;\n\n  .grid {\n    grid-template-columns: repeat(auto-fill, 150px);\n    grid-gap: 50px 50px;\n    height: calc(100vh - 188px);\n\n    .card {\n      background-color: #151515;\n      // position: relative;\n\n      img {\n        height: 150px;\n        border-bottom: 5px solid red;\n      }\n\n      .card-header {\n        height: 50px;\n\n        .material-icons {\n          color: red;\n        }\n      }\n\n      // &:after {\n      //   position: absolute;\n      //   content: '';\n      //   bottom: 0;\n      //   right: 0;\n      //   border-width: 10px 10px 0 0;\n      //   border-style: solid;\n      //   border-color: white;\n      //   border-top-color: transparent;\n      // }\n    }\n  }\n\n  ::-webkit-scrollbar {\n    visibility: hidden;\n  }\n\n  .fade {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 50px;\n  }\n\n  .fade-before {\n    top: 0;\n    background-image:\n      linear-gradient(\n        to top,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n\n  .fade-after {\n    bottom: 0;\n    background-image:\n      linear-gradient(\n        to bottom,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 0.9)\n        100%\n      );\n  }\n}\n\nfooter {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n",".minimal {\n  background: none;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.scroll-y {\n  overflow-y: auto;\n}\n\n.pointer {\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.m-r-auto {\n  margin-right: auto;\n}\n\n.m-l-auto {\n  margin-left: auto;\n}\n\n.m-b-10 {\n  margin-bottom: 10px;\n}\n\n.m-t-10 {\n  margin-top: 10px;\n}\n\n.m-r-10 {\n  margin-right: 10px;\n}\n\n.m-t-25 {\n  margin-top: 25px;\n}\n\n.p-y-5 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.p-y-50 {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n"],"sourceRoot":""}]);
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
    this.params = '';
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
    const commentButtons = document.querySelectorAll('.Comment-btn');
    (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(
      commentButtons,
      {
        click: (e) => this.openModal(e),
      },
    );

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

  openModal(e) {
    const name = e.target.parentElement.previousElementSibling
      .previousElementSibling.firstChild.innerHTML;
    const popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_5__.default(this.characters[name]);
    popup.init();
  }

  likeCharacter(e) {
    this.updateLocalLikes(e.target);
    this.involvement.postLike(this.itemId);
  }

  updateLocalLikes(element) {
    const name = element.previousElementSibling.innerHTML;
    const likeElement = element.parentElement.nextElementSibling;
    this.itemId = this.characters[name].id;

    this.likes[this.itemId] = this.likes[this.itemId] + 1 || 1;
    this.characters[name].likes = this.likes[this.itemId];

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
  constructor() {
    super();
    this.base = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6';
  }

  async getLikes() {
    this.url = new URL(`${this.base}/likes`);

    const data = await super.get();

    return data;
  }

  async getComments(itemId) {
    this.url = new URL(`${this.base}/comments`);

    this.params = {
      item_id: itemId,
    };

    const data = await super.get();

    if (data.error) return [];

    return data.reverse();
  }

  async postLike(itemId) {
    this.url = new URL(`${this.base}/likes`);

    super.body = {
      item_id: itemId,
    };

    await super.post();
  }

  async postComment(itemId, userName, commentContent) {
    this.url = new URL(`${this.base}/comments`);

    this.body = {
      item_id: itemId,
      username: userName,
      comment: commentContent,
    };

    await super.post();
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
  constructor() {
    super();
    this.base = 'https://gateway.marvel.com/v1/public';
  }

  async getCharacters() {
    this.url = new URL(`${this.base}/characters`);

    this.params = {
      apikey: '86af4a1749d744f4f6c643c5c87a4f3c',
      limit: '100',
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
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/js/InvolvementAPI.js");
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.js */ "./src/js/library.js");



class Popup {
  constructor(character) {
    this.character = character;
    this.involvement = new _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this.apiComments = [];
    this.commentsCount = 0;
    this.commentFields = [];
  }

  async init() {
    await this.getComments();
    this.setCounter();
    this.build();
    this.setEventListeners();
  }

  async getComments() {
    this.apiComments = await this.involvement.getComments(this.character.id);
  }

  setCounter() {
    this.commentsCount = this.apiComments.length;
  }

  build() {
    const modal = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'popup flex-row');

    const closeIcon = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', 'close material-icons pointer m-t-10 m-r-10', {}, 'close');

    const imageContainer = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'flex-col');
    const image = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', '', { src: this.character.image });
    imageContainer.append(image);

    const nonImageContainer = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'flex-col justify-evenly p-10');

    // DETAILS SECTION

    const detailsSection = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', 'flex-col');

    const name = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', 'self-center', {}, this.character.name);
    const description = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', '', {}, `${this.character.description}` || 'No description available from API.');

    const divUrl = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');
    const url = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', 'minimal', { href: this.character.url, target: '_blank' }, 'Read more');
    divUrl.append(url);

    detailsSection.append(name, description, divUrl);

    // COMMENTS SECTION

    const commentsSection = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', 'flex-col');

    const commentsHeader = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h3', 'comments-header self-center', {}, `Comments (${this.commentsCount})`);

    const commentsContainer = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'comments-container flex-col scroll-y');

    this.apiComments.forEach((apiComment) => {
      const commentRow = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'comment-row flex-row');
      const date = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, apiComment.creation_date);
      const user = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, apiComment.username);
      const comment = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, apiComment.comment);
      commentRow.append(date, user, comment);
      commentsContainer.append(commentRow);
    });

    commentsSection.append(commentsHeader, commentsContainer);

    // FORM SECTION

    const formSection = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', 'flex-col');

    const formHeader = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h3', 'self-center', {}, 'Add a comment');

    // let form = createElement('form', 'flex-col');
    const input = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', 'comment-field p-y-5 p-x-10', { type: 'text', placeholder: 'Your name', maxlength: '10' });
    const textarea = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('textarea', 'comment-field p-y-5 p-x-10', {
      id: 'txtid',
      name: 'txtname',
      rows: '1',
      cols: '50',
      maxlength: '50',
      placeholder: 'Your insights',
    });

    const divButton = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'self-center');
    const button = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', 'minimal pointer p-y-5 p-x-10', {}, 'Comment');
    divButton.append(button);

    // form.append(input, textarea, divButton);
    formSection.append(formHeader, input, textarea, divButton);

    // PARENTS

    nonImageContainer.append(detailsSection, commentsSection, formSection);

    modal.append(closeIcon, imageContainer, nonImageContainer);

    document.body.append(modal);
  }

  setEventListeners() {
    const closeButton = document.querySelector('.close');
    const modal = document.querySelector('.popup');
    closeButton.addEventListener('click', () => document.body.removeChild(modal));

    const commentButton = document.querySelector('.popup button');
    commentButton.addEventListener('click', () => this.handleComment());
  }

  handleComment() {
    this.getCommentFields();
    if (Array.from(this.commentFields).every((commentField) => commentField.value !== '')) {
      this.postComment();
      this.updateLocalComments();
      this.resetCommentFields();
    }
  }

  getCommentFields() {
    this.commentFields = document.querySelectorAll('.comment-field');
  }

  postComment() {
    this.involvement.postComment(
      this.character.id,
      this.commentFields[0].value,
      this.commentFields[1].value,
    );
  }

  resetCommentFields() {
    Array.from(this.commentFields).forEach((commentField) => { commentField.value = ''; });
    this.commentFields[0].focus();
  }

  updateLocalComments() {
    this.commentsCount += 1;

    const commentsContainer = document.querySelector('.comments-container');

    const commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerHTML = `Comments (${this.commentsCount})`;

    const commentRow = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'comment-row flex-row');
    const date = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, new Date().toISOString().slice(0, 10));
    const user = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, this.commentFields[0].value);
    const comment = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', {}, this.commentFields[1].value);
    commentRow.append(date, user, comment);

    commentsContainer.prepend(commentRow);
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
  const home = new _Home_js__WEBPACK_IMPORTED_MODULE_1__.default();
  home.init();
}

window.addEventListener('load', init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9HcmlkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvSG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvTWFydmVsQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5taW5pbWFsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Nyb2xsLXkge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucC15LTUwIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucC14LTEwMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhcmstZ3JleS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5oZWFkZXIgbmF2IHtcXG4gIGdhcDogMzBweDtcXG59XFxuaGVhZGVyIG5hdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxufVxcbi5wb3B1cCA+IGRpdiB7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5wb3B1cCA+IGRpdiBzZWN0aW9uIHtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBvcHVwIGgyLFxcbi5wb3B1cCBoMyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4ucG9wdXAgaW1nIHtcXG4gIHdpZHRoOiA4MHZoO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuLnBvcHVwIHAsXFxuLnBvcHVwIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnBvcHVwIC5tYXRlcmlhbC1pY29ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuLnBvcHVwIC5jb21tZW50cy1jb250YWluZXIge1xcbiAgZ2FwOiA1cHg7XFxuICBtYXgtaGVpZ2h0OiA3MnB4O1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBvcHVwIC5jb21tZW50LXJvdyBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5wb3B1cCAuY29tbWVudC1yb3cgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5wb3B1cCBpbnB1dCxcXG4ucG9wdXAgdGV4dGFyZWEge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wb3B1cCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5tYWluIC5ncmlkIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTUwcHgpO1xcbiAgZ3JpZC1nYXA6IDUwcHggNTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4OHB4KTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIGltZyB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCAuY2FyZC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIC5jYXJkLWhlYWRlciAubWF0ZXJpYWwtaWNvbnMge1xcbiAgY29sb3I6IHJlZDtcXG59XFxubWFpbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxubWFpbiAuZmFkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluIC5mYWRlLWJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMTAwJSk7XFxufVxcbm1haW4gLmZhZGUtYWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDEwMCUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3V0aWxpdGllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FDekNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRDRDRjs7QUN6Q0E7RUFDRSxrQkFBQTtBRDRDRjs7QUN6Q0E7RUFDRSxnQkFBQTtBRDRDRjs7QUN4Q0U7RUFDRSxlQUFBO0FEMkNKOztBQ3ZDQTtFQUNFLGtCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGlCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGtCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsYUFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FEMENGOztBQTNHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQThHRjs7QUEzR0E7RUFDRSx5QkFBQTtBQThHRjs7QUEzR0E7RUFDRSxZQUFBO0FBOEdGO0FBNUdFO0VBQ0UsVUFBQTtBQThHSjs7QUExR0E7RUFDRSx1QkFBQTtBQTZHRjtBQTNHRTtFQUNFLHFCQUFBO0FBNkdKOztBQXpHQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQTRHRjtBQTFHRTtFQUNFLFNBQUE7QUE0R0o7QUExR0k7RUFDRSxZQUFBO0FBNEdOOztBQXZHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBMEdGO0FBeEdFO0VBQ0UsU0FBQTtBQTBHSjtBQXhHSTtFQUNFLFNBQUE7QUEwR047QUF0R0U7O0VBRUUsVUFBQTtBQXdHSjtBQXJHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF1R0o7QUFwR0U7O0VBRUUsZ0JBQUE7QUFzR0o7QUFuR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBcUdKO0FBbEdFO0VBQ0UsUUFBQTtFQUNBLGdCQUFBO0FBb0dKO0FBakdFO0VBQ0UsU0FBQTtBQW1HSjtBQWhHTTtFQUNFLFVBQUE7QUFrR1I7QUEvRk07RUFDRSxVQUFBO0FBaUdSO0FBOUZNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBZ0dSO0FBM0ZFOztFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBNkZKO0FBMUZFO0VBQ0UsWUFBQTtBQTRGSjs7QUF4RkE7RUFDRSxrQkFBQTtBQTJGRjtBQXpGRTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQTJGSjtBQXpGSTtFQUNFLHlCQUFBO0FBMkZOO0FBeEZNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBMEZSO0FBdkZNO0VBQ0UsWUFBQTtBQXlGUjtBQXZGUTtFQUNFLFVBQUE7QUF5RlY7QUF4RUU7RUFDRSxrQkFBQTtBQTBFSjtBQXZFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeUVKO0FBdEVFO0VBQ0UsTUFBQTtFQUNBLGdHQUNFO0FBdUVOO0FBL0RFO0VBQ0UsU0FBQTtFQUNBLG1HQUNFO0FBZ0VOOztBQXZEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTBERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiLFwiQGltcG9ydCAnbGF5b3V0LnNjc3MnO1xcbkBpbXBvcnQgJ3V0aWxpdGllcy5zY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG5cXG4gIG5hdiB7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcblxcbiAgJiA+IGRpdiB7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA4MHZoO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICB9XFxuXFxuICBwLFxcbiAgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuY29tbWVudHMtY29udGFpbmVyIHtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDcycHg7XFxuICB9XFxuXFxuICAuY29tbWVudC1yb3cge1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE1MHB4KTtcXG4gICAgZ3JpZC1nYXA6IDUwcHggNTBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg4cHgpO1xcblxcbiAgICAuY2FyZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2FyZC1oZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLy8gJjphZnRlciB7XFxuICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgLy8gICBjb250ZW50OiAnJztcXG4gICAgICAvLyAgIGJvdHRvbTogMDtcXG4gICAgICAvLyAgIHJpZ2h0OiAwO1xcbiAgICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMCAwO1xcbiAgICAgIC8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAvLyAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgLy8gICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAvLyB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICAuZmFkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAuZmFkZS1iZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gdG9wLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxcbiAgICAgICAgMTAwJVxcbiAgICAgICk7XFxuICB9XFxuXFxuICAuZmFkZS1hZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byBib3R0b20sXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXFxuICAgICAgICAxMDAlXFxuICAgICAgKTtcXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cIixcIi5taW5pbWFsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Nyb2xsLXkge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXJsID0gJyc7XG4gICAgdGhpcy5wYXJhbXMgPSAnJztcbiAgICB0aGlzLmhlYWRlcnMgPSB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgfVxuXG4gIGFzeW5jIGdldCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLnVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdGhpcy5wYXJhbXNba2V5XSkpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBwb3N0KCkge1xuICAgIGF3YWl0IGZldGNoKFxuXG4gICAgICB0aGlzLnVybCxcblxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmJvZHkpLFxuICAgICAgfSxcblxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gJyc7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgc2V0IGNoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgeyBzcmM6IGNoYXJhY3Rlci5pbWFnZSB9KTtcblxuICAgIGNvbnN0IGNhcmRCb2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIHAtMTAnKTtcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1oZWFkZXIgZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBjaGFyYWN0ZXIubmFtZSk7XG4gICAgY29uc3Qgc3Bhbkljb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xpa2UgbWF0ZXJpYWwtaWNvbnMgcG9pbnRlcicsIHt9LCAnZmF2b3JpdGVfYm9yZGVyJyk7XG4gICAgY2FyZEhlYWRlci5hcHBlbmQoc3Bhbk5hbWUsIHNwYW5JY29uKTtcblxuICAgIGNvbnN0IHNwYW5MaWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnZmxleC1yb3cganVzdGlmeS1lbmQnLCB7fSwgYCR7Y2hhcmFjdGVyLmxpa2VzfSBMaWtlc2ApO1xuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29tbWVudHMgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnQ29tbWVudC1idG4gbWluaW1hbCBwb2ludGVyIHAteS01IHAteC0xMCBtLXQtMjUnLCB7IHR5cGU6ICdidXR0b24nIH0sICdDb21tZW50cycpO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmQoYnV0dG9uQ29tbWVudHMpO1xuXG4gICAgY2FyZEJvZHkuYXBwZW5kKGNhcmRIZWFkZXIsIHNwYW5MaWtlcywgYnV0dG9uRGl2KTtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChjYXJkSW1hZ2UsIGNhcmRCb2R5KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsaWtlcyA9IDAsIGRlc2NyaXB0aW9uLCBpbWFnZSwgdXJsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gIH1cblxuICBzZXQgY2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICB9XG5cbiAgYnVpbGQoY2hhcmFjdGVycykge1xuICAgIE9iamVjdC52YWx1ZXMoY2hhcmFjdGVycykuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzLnB1c2gobmV3IENhcmQoY2hhcmFjdGVyKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKC4uLnRoaXMuY2FyZHMpO1xuICB9XG59IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzLCB0b2dnbGUgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IE1hcnZlbEFQSSBmcm9tICcuL01hcnZlbEFQSS5qcyc7XG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZC5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2UgPSBuZXcgTWFydmVsQVBJKCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudCA9IG5ldyBJbnZvbHZlbWVudEFQSSgpO1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IFtdO1xuICAgIHRoaXMuYXBpTGlrZXMgPSBbXTtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB7fTtcbiAgICB0aGlzLmxpa2VzID0ge307XG4gICAgdGhpcy5pdGVtSWQgPSAwO1xuICAgIHRoaXMuY2hhcmFjdGVyc0NvdW50ID0gMDtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRBUElEYXRhKCk7XG4gICAgdGhpcy5vYmplY3RpZnlBUElEYXRhKCk7XG4gICAgdGhpcy5oYW5kbGVDb3VudGVyKCk7XG4gICAgdGhpcy5wb3B1bGF0ZUdyaWQoKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhc3luYyBnZXRBUElEYXRhKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IGF3YWl0IHRoaXMuYmFzZS5nZXRDaGFyYWN0ZXJzKCk7XG4gICAgdGhpcy5hcGlMaWtlcyA9IGF3YWl0IHRoaXMuaW52b2x2ZW1lbnQuZ2V0TGlrZXMoKTtcbiAgfVxuXG4gIG9iamVjdGlmeUFQSURhdGEoKSB7XG4gICAgdGhpcy5vYmplY3RpZnlMaWtlcygpO1xuICAgIHRoaXMub2JqZWN0aWZ5Q2hhcmFjdGVycygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5TGlrZXMoKSB7XG4gICAgdGhpcy5hcGlMaWtlcy5mb3JFYWNoKChhcGlMaWtlKSA9PiB7XG4gICAgICB0aGlzLmxpa2VzW2FwaUxpa2UuaXRlbV9pZF0gPSBhcGlMaWtlLmxpa2VzO1xuICAgIH0pO1xuICB9XG5cbiAgb2JqZWN0aWZ5Q2hhcmFjdGVycygpIHtcbiAgICB0aGlzLmFwaUNoYXJhY3RlcnMuZm9yRWFjaCgoYXBpQ2hhcmFjdGVyKSA9PiB7XG4gICAgICB0aGlzLmNoYXJhY3RlcnNbYXBpQ2hhcmFjdGVyLm5hbWVdID0gbmV3IENoYXJhY3RlcihcbiAgICAgICAgYXBpQ2hhcmFjdGVyLmlkLFxuICAgICAgICBhcGlDaGFyYWN0ZXIubmFtZSxcbiAgICAgICAgdGhpcy5saWtlc1thcGlDaGFyYWN0ZXIuaWRdLFxuICAgICAgICBhcGlDaGFyYWN0ZXIuZGVzY3JpcHRpb24sXG4gICAgICAgIGAke2FwaUNoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHthcGlDaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gLFxuICAgICAgICBhcGlDaGFyYWN0ZXIudXJsc1swXS51cmwsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ291bnRlcigpIHtcbiAgICB0aGlzLnNldENvdW50ZXIoKTtcbiAgICB0aGlzLmRpc3BsYXlDb3VudGVyKCk7XG4gIH1cblxuICBzZXRDb3VudGVyKCkge1xuICAgIHRoaXMuY2hhcmFjdGVyc0NvdW50ID0gdGhpcy5hcGlDaGFyYWN0ZXJzLmxlbmd0aDtcbiAgfVxuXG4gIGRpc3BsYXlDb3VudGVyKCkge1xuICAgIGNvbnN0IGNoYXJhY3RlcnNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGEnKTtcbiAgICBjaGFyYWN0ZXJzTWVudS5pbm5lckhUTUwgPSBgQ2hhcmFjdGVycyAoJHt0aGlzLmNoYXJhY3RlcnNDb3VudH0pYDtcbiAgfVxuXG4gIHBvcHVsYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQoJ2dyaWQnKTtcbiAgICBncmlkLmJ1aWxkKHRoaXMuY2hhcmFjdGVycykuYXBwZW5kKCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBjb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Db21tZW50LWJ0bicpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIGNvbW1lbnRCdXR0b25zLFxuICAgICAge1xuICAgICAgICBjbGljazogKGUpID0+IHRoaXMub3Blbk1vZGFsKGUpLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIGxpa2VCdXR0b25zLFxuICAgICAge1xuICAgICAgICBjbGljazogKGUpID0+IHRoaXMubGlrZUNoYXJhY3RlcihlKSxcbiAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHRvZ2dsZShlLnRhcmdldCwgJ2lubmVySFRNTCcsIFsnZmF2b3JpdGUnLCAnZmF2b3JpdGVfYm9yZGVyJ10pLFxuICAgICAgICBtb3VzZWxlYXZlOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBvcGVuTW9kYWwoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICAgIC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKHRoaXMuY2hhcmFjdGVyc1tuYW1lXSk7XG4gICAgcG9wdXAuaW5pdCgpO1xuICB9XG5cbiAgbGlrZUNoYXJhY3RlcihlKSB7XG4gICAgdGhpcy51cGRhdGVMb2NhbExpa2VzKGUudGFyZ2V0KTtcbiAgICB0aGlzLmludm9sdmVtZW50LnBvc3RMaWtlKHRoaXMuaXRlbUlkKTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsTGlrZXMoZWxlbWVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgIGNvbnN0IGxpa2VFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICB0aGlzLml0ZW1JZCA9IHRoaXMuY2hhcmFjdGVyc1tuYW1lXS5pZDtcblxuICAgIHRoaXMubGlrZXNbdGhpcy5pdGVtSWRdID0gdGhpcy5saWtlc1t0aGlzLml0ZW1JZF0gKyAxIHx8IDE7XG4gICAgdGhpcy5jaGFyYWN0ZXJzW25hbWVdLmxpa2VzID0gdGhpcy5saWtlc1t0aGlzLml0ZW1JZF07XG5cbiAgICBsaWtlRWxlbWVudC5pbm5lckhUTUwgPSBgJHt0aGlzLmxpa2VzW3RoaXMuaXRlbUlkXX0gTGlrZXNgO1xuICB9XG59XG4iLCJpbXBvcnQgQVBJIGZyb20gJy4vQVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBUEkgZXh0ZW5kcyBBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFzZSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xRmpWelpiZlJxV2R2cm5ZRXdoNic7XG4gIH1cblxuICBhc3luYyBnZXRMaWtlcygpIHtcbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoYCR7dGhpcy5iYXNlfS9saWtlc2ApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cyhpdGVtSWQpIHtcbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoYCR7dGhpcy5iYXNlfS9jb21tZW50c2ApO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdXBlci5nZXQoKTtcblxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gZGF0YS5yZXZlcnNlKCk7XG4gIH1cblxuICBhc3luYyBwb3N0TGlrZShpdGVtSWQpIHtcbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoYCR7dGhpcy5iYXNlfS9saWtlc2ApO1xuXG4gICAgc3VwZXIuYm9keSA9IHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICB9O1xuXG4gICAgYXdhaXQgc3VwZXIucG9zdCgpO1xuICB9XG5cbiAgYXN5bmMgcG9zdENvbW1lbnQoaXRlbUlkLCB1c2VyTmFtZSwgY29tbWVudENvbnRlbnQpIHtcbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoYCR7dGhpcy5iYXNlfS9jb21tZW50c2ApO1xuXG4gICAgdGhpcy5ib2R5ID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLFxuICAgICAgY29tbWVudDogY29tbWVudENvbnRlbnQsXG4gICAgfTtcblxuICAgIGF3YWl0IHN1cGVyLnBvc3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcnZlbEFQSSBleHRlbmRzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iYXNlID0gJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYyc7XG4gIH1cblxuICBhc3luYyBnZXRDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2NoYXJhY3RlcnNgKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgYXBpa2V5OiAnODZhZjRhMTc0OWQ3NDRmNGY2YzY0M2M1Yzg3YTRmM2MnLFxuICAgICAgbGltaXQ6ICcxMDAnLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3VwZXIuZ2V0KCk7XG5cbiAgICByZXR1cm4gZGF0YS5kYXRhLnJlc3VsdHM7XG4gIH1cbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB0aGlzLmludm9sdmVtZW50ID0gbmV3IEludm9sdmVtZW50QVBJKCk7XG4gICAgdGhpcy5hcGlDb21tZW50cyA9IFtdO1xuICAgIHRoaXMuY29tbWVudHNDb3VudCA9IDA7XG4gICAgdGhpcy5jb21tZW50RmllbGRzID0gW107XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICB0aGlzLnNldENvdW50ZXIoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q29tbWVudHMoKSB7XG4gICAgdGhpcy5hcGlDb21tZW50cyA9IGF3YWl0IHRoaXMuaW52b2x2ZW1lbnQuZ2V0Q29tbWVudHModGhpcy5jaGFyYWN0ZXIuaWQpO1xuICB9XG5cbiAgc2V0Q291bnRlcigpIHtcbiAgICB0aGlzLmNvbW1lbnRzQ291bnQgPSB0aGlzLmFwaUNvbW1lbnRzLmxlbmd0aDtcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3BvcHVwIGZsZXgtcm93Jyk7XG5cbiAgICBjb25zdCBjbG9zZUljb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2Nsb3NlIG1hdGVyaWFsLWljb25zIHBvaW50ZXIgbS10LTEwIG0tci0xMCcsIHt9LCAnY2xvc2UnKTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgeyBzcmM6IHRoaXMuY2hhcmFjdGVyLmltYWdlIH0pO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cbiAgICBjb25zdCBub25JbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBwLTEwJyk7XG5cbiAgICAvLyBERVRBSUxTIFNFQ1RJT05cblxuICAgIGNvbnN0IGRldGFpbHNTZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ3NlbGYtY2VudGVyJywge30sIHRoaXMuY2hhcmFjdGVyLm5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgncCcsICcnLCB7fSwgYCR7dGhpcy5jaGFyYWN0ZXIuZGVzY3JpcHRpb259YCB8fCAnTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlIGZyb20gQVBJLicpO1xuXG4gICAgY29uc3QgZGl2VXJsID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdXJsID0gY3JlYXRlRWxlbWVudCgnYScsICdtaW5pbWFsJywgeyBocmVmOiB0aGlzLmNoYXJhY3Rlci51cmwsIHRhcmdldDogJ19ibGFuaycgfSwgJ1JlYWQgbW9yZScpO1xuICAgIGRpdlVybC5hcHBlbmQodXJsKTtcblxuICAgIGRldGFpbHNTZWN0aW9uLmFwcGVuZChuYW1lLCBkZXNjcmlwdGlvbiwgZGl2VXJsKTtcblxuICAgIC8vIENPTU1FTlRTIFNFQ1RJT05cblxuICAgIGNvbnN0IGNvbW1lbnRzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnZmxleC1jb2wnKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnY29tbWVudHMtaGVhZGVyIHNlbGYtY2VudGVyJywge30sIGBDb21tZW50cyAoJHt0aGlzLmNvbW1lbnRzQ291bnR9KWApO1xuXG4gICAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29tbWVudHMtY29udGFpbmVyIGZsZXgtY29sIHNjcm9sbC15Jyk7XG5cbiAgICB0aGlzLmFwaUNvbW1lbnRzLmZvckVhY2goKGFwaUNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRSb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29tbWVudC1yb3cgZmxleC1yb3cnKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBhcGlDb21tZW50LmNyZWF0aW9uX2RhdGUpO1xuICAgICAgY29uc3QgdXNlciA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIGFwaUNvbW1lbnQudXNlcm5hbWUpO1xuICAgICAgY29uc3QgY29tbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIGFwaUNvbW1lbnQuY29tbWVudCk7XG4gICAgICBjb21tZW50Um93LmFwcGVuZChkYXRlLCB1c2VyLCBjb21tZW50KTtcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZChjb21tZW50Um93KTtcbiAgICB9KTtcblxuICAgIGNvbW1lbnRzU2VjdGlvbi5hcHBlbmQoY29tbWVudHNIZWFkZXIsIGNvbW1lbnRzQ29udGFpbmVyKTtcblxuICAgIC8vIEZPUk0gU0VDVElPTlxuXG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2ZsZXgtY29sJyk7XG5cbiAgICBjb25zdCBmb3JtSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnc2VsZi1jZW50ZXInLCB7fSwgJ0FkZCBhIGNvbW1lbnQnKTtcblxuICAgIC8vIGxldCBmb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsICdmbGV4LWNvbCcpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnY29tbWVudC1maWVsZCBwLXktNSBwLXgtMTAnLCB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdZb3VyIG5hbWUnLCBtYXhsZW5ndGg6ICcxMCcgfSk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICdjb21tZW50LWZpZWxkIHAteS01IHAteC0xMCcsIHtcbiAgICAgIGlkOiAndHh0aWQnLFxuICAgICAgbmFtZTogJ3R4dG5hbWUnLFxuICAgICAgcm93czogJzEnLFxuICAgICAgY29sczogJzUwJyxcbiAgICAgIG1heGxlbmd0aDogJzUwJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnWW91ciBpbnNpZ2h0cycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2VsZi1jZW50ZXInKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbWluaW1hbCBwb2ludGVyIHAteS01IHAteC0xMCcsIHt9LCAnQ29tbWVudCcpO1xuICAgIGRpdkJ1dHRvbi5hcHBlbmQoYnV0dG9uKTtcblxuICAgIC8vIGZvcm0uYXBwZW5kKGlucHV0LCB0ZXh0YXJlYSwgZGl2QnV0dG9uKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmQoZm9ybUhlYWRlciwgaW5wdXQsIHRleHRhcmVhLCBkaXZCdXR0b24pO1xuXG4gICAgLy8gUEFSRU5UU1xuXG4gICAgbm9uSW1hZ2VDb250YWluZXIuYXBwZW5kKGRldGFpbHNTZWN0aW9uLCBjb21tZW50c1NlY3Rpb24sIGZvcm1TZWN0aW9uKTtcblxuICAgIG1vZGFsLmFwcGVuZChjbG9zZUljb24sIGltYWdlQ29udGFpbmVyLCBub25JbWFnZUNvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKSk7XG5cbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwIGJ1dHRvbicpO1xuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZUNvbW1lbnQoKSk7XG4gIH1cblxuICBoYW5kbGVDb21tZW50KCkge1xuICAgIHRoaXMuZ2V0Q29tbWVudEZpZWxkcygpO1xuICAgIGlmIChBcnJheS5mcm9tKHRoaXMuY29tbWVudEZpZWxkcykuZXZlcnkoKGNvbW1lbnRGaWVsZCkgPT4gY29tbWVudEZpZWxkLnZhbHVlICE9PSAnJykpIHtcbiAgICAgIHRoaXMucG9zdENvbW1lbnQoKTtcbiAgICAgIHRoaXMudXBkYXRlTG9jYWxDb21tZW50cygpO1xuICAgICAgdGhpcy5yZXNldENvbW1lbnRGaWVsZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb21tZW50RmllbGRzKCkge1xuICAgIHRoaXMuY29tbWVudEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWZpZWxkJyk7XG4gIH1cblxuICBwb3N0Q29tbWVudCgpIHtcbiAgICB0aGlzLmludm9sdmVtZW50LnBvc3RDb21tZW50KFxuICAgICAgdGhpcy5jaGFyYWN0ZXIuaWQsXG4gICAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMF0udmFsdWUsXG4gICAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMV0udmFsdWUsXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0Q29tbWVudEZpZWxkcygpIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuY29tbWVudEZpZWxkcykuZm9yRWFjaCgoY29tbWVudEZpZWxkKSA9PiB7IGNvbW1lbnRGaWVsZC52YWx1ZSA9ICcnOyB9KTtcbiAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMF0uZm9jdXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsQ29tbWVudHMoKSB7XG4gICAgdGhpcy5jb21tZW50c0NvdW50ICs9IDE7XG5cbiAgICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWhlYWRlcicpO1xuICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHt0aGlzLmNvbW1lbnRzQ291bnR9KWA7XG5cbiAgICBjb25zdCBjb21tZW50Um93ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnQtcm93IGZsZXgtcm93Jyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpO1xuICAgIGNvbnN0IHVzZXIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCB0aGlzLmNvbW1lbnRGaWVsZHNbMF0udmFsdWUpO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCB0aGlzLmNvbW1lbnRGaWVsZHNbMV0udmFsdWUpO1xuICAgIGNvbW1lbnRSb3cuYXBwZW5kKGRhdGUsIHVzZXIsIGNvbW1lbnQpO1xuXG4gICAgY29tbWVudHNDb250YWluZXIucHJlcGVuZChjb21tZW50Um93KTtcbiAgfVxufVxuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VHlwZSwgY2xhc3NOYW1lcyA9ICcnLCBhdHRyaWJ1dGVzID0ge30sIGlubmVySFRNTCA9ICcnLCBwcm9wZXJ0aWVzID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBpZiAoY2xhc3NOYW1lcykgZWxlbWVudE9iamVjdC5jbGFzc0xpc3QuYWRkKC4uLihjbGFzc05hbWVzLnNwbGl0KCcgJykpKTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgZWxlbWVudE9iamVjdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICB9KTtcbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0W3Byb3BlcnR5XSA9IHByb3BlcnRpZXNbcHJvcGVydHldO1xuICB9KTtcbiAgZWxlbWVudE9iamVjdC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHJldHVybiBlbGVtZW50T2JqZWN0O1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKGVsZW1lbnRzLCBsaXN0ZW5lcnMpID0+IHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGxpc3RlbmVycykuZm9yRWFjaCgoW2V2ZW50LCBsaXN0ZW5lcl0pID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZSA9ICh0YXJnZXQsIHByb3BlcnR5LCBzdGF0ZXMpID0+IHtcbiAgdGFyZ2V0W3Byb3BlcnR5XSA9ICh0YXJnZXRbcHJvcGVydHldID09PSBzdGF0ZXNbMF0gPyBzdGF0ZXNbMV0gOiBzdGF0ZXNbMF0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkTGlzdGVuZXJzLCB0b2dnbGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUuanMnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBob21lID0gbmV3IEhvbWUoKTtcbiAgaG9tZS5pbml0KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=