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
      if (apiCharacter.description !== '') {
        this.characters[apiCharacter.name] = new _Character_js__WEBPACK_IMPORTED_MODULE_3__.default(
          apiCharacter.id,
          apiCharacter.name,
          this.likes[apiCharacter.id],
          apiCharacter.description,
          `${apiCharacter.thumbnail.path}.${apiCharacter.thumbnail.extension}`,
          apiCharacter.urls[0].url,
        );
      }
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
      }
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
    const name = e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.innerHTML;
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
    const description = (0,_library_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', '', {}, `${this.character.description}` || 'No description available.');

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
    this.postComment();
    this.updateLocalComments();
    this.resetCommentFields();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9HcmlkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvSG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvTWFydmVsQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5taW5pbWFsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Nyb2xsLXkge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBvaW50ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucC15LTUwIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucC14LTEwMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhcmstZ3JleS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5oZWFkZXIgbmF2IHtcXG4gIGdhcDogMzBweDtcXG59XFxuaGVhZGVyIG5hdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxufVxcbi5wb3B1cCA+IGRpdiB7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5wb3B1cCA+IGRpdiBzZWN0aW9uIHtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBvcHVwIGgyLFxcbi5wb3B1cCBoMyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4ucG9wdXAgaW1nIHtcXG4gIHdpZHRoOiA4MHZoO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuLnBvcHVwIHAsXFxuLnBvcHVwIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnBvcHVwIC5tYXRlcmlhbC1pY29ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuLnBvcHVwIC5jb21tZW50cy1jb250YWluZXIge1xcbiAgZ2FwOiA1cHg7XFxuICBtYXgtaGVpZ2h0OiA3MnB4O1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBvcHVwIC5jb21tZW50LXJvdyBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5wb3B1cCAuY29tbWVudC1yb3cgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5wb3B1cCBpbnB1dCxcXG4ucG9wdXAgdGV4dGFyZWEge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wb3B1cCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5tYWluIC5ncmlkIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTUwcHgpO1xcbiAgZ3JpZC1nYXA6IDUwcHggNTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4OHB4KTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIGltZyB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCAuY2FyZC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIC5jYXJkLWhlYWRlciAubWF0ZXJpYWwtaWNvbnMge1xcbiAgY29sb3I6IHJlZDtcXG59XFxubWFpbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxubWFpbiAuZmFkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluIC5mYWRlLWJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMTAwJSk7XFxufVxcbm1haW4gLmZhZGUtYWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDEwMCUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3V0aWxpdGllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FDekNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRDRDRjs7QUN6Q0E7RUFDRSxrQkFBQTtBRDRDRjs7QUN6Q0E7RUFDRSxnQkFBQTtBRDRDRjs7QUN4Q0U7RUFDRSxlQUFBO0FEMkNKOztBQ3ZDQTtFQUNFLGtCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGlCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGtCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsYUFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FEMENGOztBQTNHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQThHRjs7QUEzR0E7RUFDRSx5QkFBQTtBQThHRjs7QUEzR0E7RUFDRSxZQUFBO0FBOEdGO0FBNUdFO0VBQ0UsVUFBQTtBQThHSjs7QUExR0E7RUFDRSx1QkFBQTtBQTZHRjtBQTNHRTtFQUNFLHFCQUFBO0FBNkdKOztBQXpHQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQTRHRjtBQTFHRTtFQUNFLFNBQUE7QUE0R0o7QUExR0k7RUFDRSxZQUFBO0FBNEdOOztBQXZHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBMEdGO0FBeEdFO0VBQ0UsU0FBQTtBQTBHSjtBQXhHSTtFQUNFLFNBQUE7QUEwR047QUF0R0U7O0VBRUUsVUFBQTtBQXdHSjtBQXJHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF1R0o7QUFwR0U7O0VBRUUsZ0JBQUE7QUFzR0o7QUFuR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBcUdKO0FBbEdFO0VBQ0UsUUFBQTtFQUNBLGdCQUFBO0FBb0dKO0FBakdFO0VBQ0UsU0FBQTtBQW1HSjtBQWhHTTtFQUNFLFVBQUE7QUFrR1I7QUEvRk07RUFDRSxVQUFBO0FBaUdSO0FBOUZNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBZ0dSO0FBM0ZFOztFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBNkZKO0FBMUZFO0VBQ0UsWUFBQTtBQTRGSjs7QUF4RkE7RUFDRSxrQkFBQTtBQTJGRjtBQXpGRTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQTJGSjtBQXpGSTtFQUNFLHlCQUFBO0FBMkZOO0FBeEZNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBMEZSO0FBdkZNO0VBQ0UsWUFBQTtBQXlGUjtBQXZGUTtFQUNFLFVBQUE7QUF5RlY7QUF4RUU7RUFDRSxrQkFBQTtBQTBFSjtBQXZFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeUVKO0FBdEVFO0VBQ0UsTUFBQTtFQUNBLGdHQUNFO0FBdUVOO0FBL0RFO0VBQ0UsU0FBQTtFQUNBLG1HQUNFO0FBZ0VOOztBQXZEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTBERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiLFwiQGltcG9ydCAnbGF5b3V0LnNjc3MnO1xcbkBpbXBvcnQgJ3V0aWxpdGllcy5zY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG5cXG4gIG5hdiB7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcblxcbiAgJiA+IGRpdiB7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgc2VjdGlvbiB7XFxuICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA4MHZoO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICB9XFxuXFxuICBwLFxcbiAgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuY29tbWVudHMtY29udGFpbmVyIHtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDcycHg7XFxuICB9XFxuXFxuICAuY29tbWVudC1yb3cge1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE1MHB4KTtcXG4gICAgZ3JpZC1nYXA6IDUwcHggNTBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg4cHgpO1xcblxcbiAgICAuY2FyZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2FyZC1oZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLy8gJjphZnRlciB7XFxuICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgLy8gICBjb250ZW50OiAnJztcXG4gICAgICAvLyAgIGJvdHRvbTogMDtcXG4gICAgICAvLyAgIHJpZ2h0OiAwO1xcbiAgICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMCAwO1xcbiAgICAgIC8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAvLyAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgLy8gICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAvLyB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICAuZmFkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAuZmFkZS1iZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gdG9wLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxcbiAgICAgICAgMTAwJVxcbiAgICAgICk7XFxuICB9XFxuXFxuICAuZmFkZS1hZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byBib3R0b20sXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXFxuICAgICAgICAxMDAlXFxuICAgICAgKTtcXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cIixcIi5taW5pbWFsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Nyb2xsLXkge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXJsID0gJyc7XG4gICAgdGhpcy5wYXJhbXMgPSAnJztcbiAgICB0aGlzLmhlYWRlcnMgPSB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgfVxuXG4gIGFzeW5jIGdldCgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLnVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdGhpcy5wYXJhbXNba2V5XSkpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBwb3N0KCkge1xuICAgIGF3YWl0IGZldGNoKFxuXG4gICAgICB0aGlzLnVybCxcblxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmJvZHkpLFxuICAgICAgfSxcblxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gJyc7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgc2V0IGNoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgeyBzcmM6IGNoYXJhY3Rlci5pbWFnZSB9KTtcblxuICAgIGNvbnN0IGNhcmRCb2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIHAtMTAnKTtcblxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZC1oZWFkZXIgZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBjaGFyYWN0ZXIubmFtZSk7XG4gICAgY29uc3Qgc3Bhbkljb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2xpa2UgbWF0ZXJpYWwtaWNvbnMgcG9pbnRlcicsIHt9LCAnZmF2b3JpdGVfYm9yZGVyJyk7XG4gICAgY2FyZEhlYWRlci5hcHBlbmQoc3Bhbk5hbWUsIHNwYW5JY29uKTtcblxuICAgIGNvbnN0IHNwYW5MaWtlcyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnZmxleC1yb3cganVzdGlmeS1lbmQnLCB7fSwgYCR7Y2hhcmFjdGVyLmxpa2VzfSBMaWtlc2ApO1xuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29tbWVudHMgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnQ29tbWVudC1idG4gbWluaW1hbCBwb2ludGVyIHAteS01IHAteC0xMCBtLXQtMjUnLCB7IHR5cGU6ICdidXR0b24nIH0sICdDb21tZW50cycpO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmQoYnV0dG9uQ29tbWVudHMpO1xuXG4gICAgY2FyZEJvZHkuYXBwZW5kKGNhcmRIZWFkZXIsIHNwYW5MaWtlcywgYnV0dG9uRGl2KTtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChjYXJkSW1hZ2UsIGNhcmRCb2R5KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsaWtlcyA9IDAsIGRlc2NyaXB0aW9uLCBpbWFnZSwgdXJsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gIH1cblxuICBzZXQgY2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICB9XG5cbiAgYnVpbGQoY2hhcmFjdGVycykge1xuICAgIE9iamVjdC52YWx1ZXMoY2hhcmFjdGVycykuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzLnB1c2gobmV3IENhcmQoY2hhcmFjdGVyKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKC4uLnRoaXMuY2FyZHMpO1xuICB9XG59IiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzLCB0b2dnbGUgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuaW1wb3J0IE1hcnZlbEFQSSBmcm9tICcuL01hcnZlbEFQSS5qcyc7XG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZC5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2UgPSBuZXcgTWFydmVsQVBJKCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudCA9IG5ldyBJbnZvbHZlbWVudEFQSSgpO1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IFtdO1xuICAgIHRoaXMuYXBpTGlrZXMgPSBbXTtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB7fTtcbiAgICB0aGlzLmxpa2VzID0ge307XG4gICAgdGhpcy5pdGVtSWQgPSAwO1xuICAgIHRoaXMuY2hhcmFjdGVyc0NvdW50ID0gMDtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRBUElEYXRhKCk7XG4gICAgdGhpcy5vYmplY3RpZnlBUElEYXRhKCk7XG4gICAgdGhpcy5oYW5kbGVDb3VudGVyKCk7XG4gICAgdGhpcy5wb3B1bGF0ZUdyaWQoKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhc3luYyBnZXRBUElEYXRhKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycyA9IGF3YWl0IHRoaXMuYmFzZS5nZXRDaGFyYWN0ZXJzKCk7XG4gICAgdGhpcy5hcGlMaWtlcyA9IGF3YWl0IHRoaXMuaW52b2x2ZW1lbnQuZ2V0TGlrZXMoKTtcbiAgfVxuXG4gIG9iamVjdGlmeUFQSURhdGEoKSB7XG4gICAgdGhpcy5vYmplY3RpZnlMaWtlcygpO1xuICAgIHRoaXMub2JqZWN0aWZ5Q2hhcmFjdGVycygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5TGlrZXMoKSB7XG4gICAgdGhpcy5hcGlMaWtlcy5mb3JFYWNoKChhcGlMaWtlKSA9PiB7XG4gICAgICB0aGlzLmxpa2VzW2FwaUxpa2UuaXRlbV9pZF0gPSBhcGlMaWtlLmxpa2VzO1xuICAgIH0pO1xuICB9XG5cbiAgb2JqZWN0aWZ5Q2hhcmFjdGVycygpIHtcbiAgICB0aGlzLmFwaUNoYXJhY3RlcnMuZm9yRWFjaCgoYXBpQ2hhcmFjdGVyKSA9PiB7XG4gICAgICBpZiAoYXBpQ2hhcmFjdGVyLmRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnNbYXBpQ2hhcmFjdGVyLm5hbWVdID0gbmV3IENoYXJhY3RlcihcbiAgICAgICAgICBhcGlDaGFyYWN0ZXIuaWQsXG4gICAgICAgICAgYXBpQ2hhcmFjdGVyLm5hbWUsXG4gICAgICAgICAgdGhpcy5saWtlc1thcGlDaGFyYWN0ZXIuaWRdLFxuICAgICAgICAgIGFwaUNoYXJhY3Rlci5kZXNjcmlwdGlvbixcbiAgICAgICAgICBgJHthcGlDaGFyYWN0ZXIudGh1bWJuYWlsLnBhdGh9LiR7YXBpQ2hhcmFjdGVyLnRodW1ibmFpbC5leHRlbnNpb259YCxcbiAgICAgICAgICBhcGlDaGFyYWN0ZXIudXJsc1swXS51cmwsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDb3VudGVyKCkge1xuICAgIHRoaXMuc2V0Q291bnRlcigpO1xuICAgIHRoaXMuZGlzcGxheUNvdW50ZXIoKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSB0aGlzLmFwaUNoYXJhY3RlcnMubGVuZ3RoO1xuICB9XG5cbiAgZGlzcGxheUNvdW50ZXIoKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYScpO1xuICAgIGNoYXJhY3RlcnNNZW51LmlubmVySFRNTCA9IGBDaGFyYWN0ZXJzICgke3RoaXMuY2hhcmFjdGVyc0NvdW50fSlgO1xuICB9XG5cbiAgcG9wdWxhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZCgnZ3JpZCcpO1xuICAgIGdyaWQuYnVpbGQodGhpcy5jaGFyYWN0ZXJzKS5hcHBlbmQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tbWVudC1idG4nKTtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICBjb21tZW50QnV0dG9ucyxcbiAgICAgIHtcbiAgICAgICAgY2xpY2s6IChlKSA9PiB0aGlzLm9wZW5Nb2RhbChlKSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICAgIGFkZExpc3RlbmVycyhcbiAgICAgIGxpa2VCdXR0b25zLFxuICAgICAge1xuICAgICAgICBjbGljazogKGUpID0+IHRoaXMubGlrZUNoYXJhY3RlcihlKSxcbiAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHRvZ2dsZShlLnRhcmdldCwgJ2lubmVySFRNTCcsIFsnZmF2b3JpdGUnLCAnZmF2b3JpdGVfYm9yZGVyJ10pLFxuICAgICAgICBtb3VzZWxlYXZlOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBvcGVuTW9kYWwoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICBjb25zdCBwb3B1cCA9IG5ldyBQb3B1cCh0aGlzLmNoYXJhY3RlcnNbbmFtZV0pO1xuICAgIHBvcHVwLmluaXQoKTtcbiAgfVxuXG4gIGxpa2VDaGFyYWN0ZXIoZSkge1xuICAgIHRoaXMudXBkYXRlTG9jYWxMaWtlcyhlLnRhcmdldCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudC5wb3N0TGlrZSh0aGlzLml0ZW1JZCk7XG4gIH1cblxuICB1cGRhdGVMb2NhbExpa2VzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICBjb25zdCBsaWtlRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy5pdGVtSWQgPSB0aGlzLmNoYXJhY3RlcnNbbmFtZV0uaWQ7XG5cbiAgICB0aGlzLmxpa2VzW3RoaXMuaXRlbUlkXSArPSAxO1xuICAgIHRoaXMuY2hhcmFjdGVyc1tuYW1lXS5saWtlcyArPSAxO1xuXG4gICAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGhpcy5saWtlc1t0aGlzLml0ZW1JZF19IExpa2VzYDtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIGV4dGVuZHMgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhc2UgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMUZqVnpaYmZScVdkdnJuWUV3aDYnO1xuICB9XG5cbiAgYXN5bmMgZ2V0TGlrZXMoKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vbGlrZXNgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdXBlci5nZXQoKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q29tbWVudHMoaXRlbUlkKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vY29tbWVudHNgKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3VwZXIuZ2V0KCk7XG5cbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIGRhdGEucmV2ZXJzZSgpO1xuICB9XG5cbiAgYXN5bmMgcG9zdExpa2UoaXRlbUlkKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vbGlrZXNgKTtcblxuICAgIHN1cGVyLmJvZHkgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgfTtcblxuICAgIGF3YWl0IHN1cGVyLnBvc3QoKTtcbiAgfVxuXG4gIGFzeW5jIHBvc3RDb21tZW50KGl0ZW1JZCwgdXNlck5hbWUsIGNvbW1lbnRDb250ZW50KSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vY29tbWVudHNgKTtcblxuICAgIHRoaXMuYm9keSA9IHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnRDb250ZW50LFxuICAgIH07XG5cbiAgICBhd2FpdCBzdXBlci5wb3N0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJ2ZWxBUEkgZXh0ZW5kcyBBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFzZSA9ICdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMnO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q2hhcmFjdGVycygpIHtcbiAgICB0aGlzLnVybCA9IG5ldyBVUkwoYCR7dGhpcy5iYXNlfS9jaGFyYWN0ZXJzYCk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIGFwaWtleTogJzg2YWY0YTE3NDlkNzQ0ZjRmNmM2NDNjNWM4N2E0ZjNjJyxcbiAgICAgIGxpbWl0OiAnMTAwJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGEuZGF0YS5yZXN1bHRzO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgdGhpcy5pbnZvbHZlbWVudCA9IG5ldyBJbnZvbHZlbWVudEFQSSgpO1xuICAgIHRoaXMuYXBpQ29tbWVudHMgPSBbXTtcbiAgICB0aGlzLmNvbW1lbnRzQ291bnQgPSAwO1xuICAgIHRoaXMuY29tbWVudEZpZWxkcyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgdGhpcy5zZXRDb3VudGVyKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKCkge1xuICAgIHRoaXMuYXBpQ29tbWVudHMgPSBhd2FpdCB0aGlzLmludm9sdmVtZW50LmdldENvbW1lbnRzKHRoaXMuY2hhcmFjdGVyLmlkKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jb21tZW50c0NvdW50ID0gdGhpcy5hcGlDb21tZW50cy5sZW5ndGg7XG4gIH1cblxuICBidWlsZCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwb3B1cCBmbGV4LXJvdycpO1xuXG4gICAgY29uc3QgY2xvc2VJY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdjbG9zZSBtYXRlcmlhbC1pY29ucyBwb2ludGVyIG0tdC0xMCBtLXItMTAnLCB7fSwgJ2Nsb3NlJyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCcpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHsgc3JjOiB0aGlzLmNoYXJhY3Rlci5pbWFnZSB9KTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xuXG4gICAgY29uc3Qgbm9uSW1hZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wganVzdGlmeS1ldmVubHkgcC0xMCcpO1xuXG4gICAgLy8gREVUQUlMUyBTRUNUSU9OXG5cbiAgICBjb25zdCBkZXRhaWxzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnZmxleC1jb2wnKTtcblxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdzZWxmLWNlbnRlcicsIHt9LCB0aGlzLmNoYXJhY3Rlci5uYW1lKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywge30sIGAke3RoaXMuY2hhcmFjdGVyLmRlc2NyaXB0aW9ufWAgfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZS4nKTtcblxuICAgIGNvbnN0IGRpdlVybCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVybCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCAnbWluaW1hbCcsIHsgaHJlZjogdGhpcy5jaGFyYWN0ZXIudXJsLCB0YXJnZXQ6ICdfYmxhbmsnIH0sICdSZWFkIG1vcmUnKTtcbiAgICBkaXZVcmwuYXBwZW5kKHVybCk7XG5cbiAgICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQobmFtZSwgZGVzY3JpcHRpb24sIGRpdlVybCk7XG5cbiAgICAvLyBDT01NRU5UUyBTRUNUSU9OXG5cbiAgICBjb25zdCBjb21tZW50c1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2ZsZXgtY29sJyk7XG5cbiAgICBjb25zdCBjb21tZW50c0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ2NvbW1lbnRzLWhlYWRlciBzZWxmLWNlbnRlcicsIHt9LCBgQ29tbWVudHMgKCR7dGhpcy5jb21tZW50c0NvdW50fSlgKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnRzLWNvbnRhaW5lciBmbGV4LWNvbCBzY3JvbGwteScpO1xuXG4gICAgdGhpcy5hcGlDb21tZW50cy5mb3JFYWNoKChhcGlDb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50Um93ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnQtcm93IGZsZXgtcm93Jyk7XG4gICAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgYXBpQ29tbWVudC5jcmVhdGlvbl9kYXRlKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBhcGlDb21tZW50LnVzZXJuYW1lKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBhcGlDb21tZW50LmNvbW1lbnQpO1xuICAgICAgY29tbWVudFJvdy5hcHBlbmQoZGF0ZSwgdXNlciwgY29tbWVudCk7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmQoY29tbWVudFJvdyk7XG4gICAgfSk7XG5cbiAgICBjb21tZW50c1NlY3Rpb24uYXBwZW5kKGNvbW1lbnRzSGVhZGVyLCBjb21tZW50c0NvbnRhaW5lcik7XG5cbiAgICAvLyBGT1JNIFNFQ1RJT05cblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3NlbGYtY2VudGVyJywge30sICdBZGQgYSBjb21tZW50Jyk7XG5cbiAgICAvLyBsZXQgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnZmxleC1jb2wnKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2NvbW1lbnQtZmllbGQgcC15LTUgcC14LTEwJywgeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnWW91ciBuYW1lJywgbWF4bGVuZ3RoOiAnMTAnIH0pO1xuICAgIGNvbnN0IHRleHRhcmVhID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCAnY29tbWVudC1maWVsZCBwLXktNSBwLXgtMTAnLCB7XG4gICAgICBpZDogJ3R4dGlkJyxcbiAgICAgIG5hbWU6ICd0eHRuYW1lJyxcbiAgICAgIHJvd3M6ICcxJyxcbiAgICAgIGNvbHM6ICc1MCcsXG4gICAgICBtYXhsZW5ndGg6ICc1MCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ1lvdXIgaW5zaWdodHMnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NlbGYtY2VudGVyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ21pbmltYWwgcG9pbnRlciBwLXktNSBwLXgtMTAnLCB7fSwgJ0NvbW1lbnQnKTtcbiAgICBkaXZCdXR0b24uYXBwZW5kKGJ1dHRvbik7XG5cbiAgICAvLyBmb3JtLmFwcGVuZChpbnB1dCwgdGV4dGFyZWEsIGRpdkJ1dHRvbik7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kKGZvcm1IZWFkZXIsIGlucHV0LCB0ZXh0YXJlYSwgZGl2QnV0dG9uKTtcblxuICAgIC8vIFBBUkVOVFNcblxuICAgIG5vbkltYWdlQ29udGFpbmVyLmFwcGVuZChkZXRhaWxzU2VjdGlvbiwgY29tbWVudHNTZWN0aW9uLCBmb3JtU2VjdGlvbik7XG5cbiAgICBtb2RhbC5hcHBlbmQoY2xvc2VJY29uLCBpbWFnZUNvbnRhaW5lciwgbm9uSW1hZ2VDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCkpO1xuXG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCBidXR0b24nKTtcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDb21tZW50KCkpO1xuICB9XG5cbiAgaGFuZGxlQ29tbWVudCgpIHtcbiAgICB0aGlzLmdldENvbW1lbnRGaWVsZHMoKTtcbiAgICB0aGlzLnBvc3RDb21tZW50KCk7XG4gICAgdGhpcy51cGRhdGVMb2NhbENvbW1lbnRzKCk7XG4gICAgdGhpcy5yZXNldENvbW1lbnRGaWVsZHMoKTtcbiAgfVxuXG4gIGdldENvbW1lbnRGaWVsZHMoKSB7XG4gICAgdGhpcy5jb21tZW50RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtZmllbGQnKTtcbiAgfVxuXG4gIHBvc3RDb21tZW50KCkge1xuICAgIHRoaXMuaW52b2x2ZW1lbnQucG9zdENvbW1lbnQoXG4gICAgICB0aGlzLmNoYXJhY3Rlci5pZCxcbiAgICAgIHRoaXMuY29tbWVudEZpZWxkc1swXS52YWx1ZSxcbiAgICAgIHRoaXMuY29tbWVudEZpZWxkc1sxXS52YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgcmVzZXRDb21tZW50RmllbGRzKCkge1xuICAgIEFycmF5LmZyb20odGhpcy5jb21tZW50RmllbGRzKS5mb3JFYWNoKChjb21tZW50RmllbGQpID0+IHsgY29tbWVudEZpZWxkLnZhbHVlID0gJyc7IH0pO1xuICAgIHRoaXMuY29tbWVudEZpZWxkc1swXS5mb2N1cygpO1xuICB9XG5cbiAgdXBkYXRlTG9jYWxDb21tZW50cygpIHtcbiAgICB0aGlzLmNvbW1lbnRzQ291bnQgKz0gMTtcblxuICAgIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29tbWVudHNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtaGVhZGVyJyk7XG4gICAgY29tbWVudHNIZWFkZXIuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke3RoaXMuY29tbWVudHNDb3VudH0pYDtcblxuICAgIGNvbnN0IGNvbW1lbnRSb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29tbWVudC1yb3cgZmxleC1yb3cnKTtcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgY29uc3QgdXNlciA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIHRoaXMuY29tbWVudEZpZWxkc1swXS52YWx1ZSk7XG4gICAgY29uc3QgY29tbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIHRoaXMuY29tbWVudEZpZWxkc1sxXS52YWx1ZSk7XG4gICAgY29tbWVudFJvdy5hcHBlbmQoZGF0ZSwgdXNlciwgY29tbWVudCk7XG5cbiAgICBjb21tZW50c0NvbnRhaW5lci5wcmVwZW5kKGNvbW1lbnRSb3cpO1xuICB9XG59XG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnRUeXBlLCBjbGFzc05hbWVzID0gJycsIGF0dHJpYnV0ZXMgPSB7fSwgaW5uZXJIVE1MID0gJycsIHByb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChjbGFzc05hbWVzKSBlbGVtZW50T2JqZWN0LmNsYXNzTGlzdC5hZGQoLi4uKGNsYXNzTmFtZXMuc3BsaXQoJyAnKSkpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gIH0pO1xuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3RbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gIH0pO1xuICBlbGVtZW50T2JqZWN0LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnRPYmplY3Q7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAoZWxlbWVudHMsIGxpc3RlbmVycykgPT4ge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnQsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlID0gKHRhcmdldCwgcHJvcGVydHksIHN0YXRlcykgPT4ge1xuICB0YXJnZXRbcHJvcGVydHldID0gKHRhcmdldFtwcm9wZXJ0eV0gPT09IHN0YXRlc1swXSA/IHN0YXRlc1sxXSA6IHN0YXRlc1swXSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhZGRMaXN0ZW5lcnMsIHRvZ2dsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuICBob21lLmluaXQoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==