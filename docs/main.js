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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0dyaWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9Ib21lLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9NYXJ2ZWxBUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LWV2ZW5seSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1pbmltYWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JvbGwteSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucG9pbnRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tLXItYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tLWwtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wLXktNTAge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wLXgtMTAwIHtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGFyay1ncmV5LWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcbmhlYWRlciBuYXYge1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5oZWFkZXIgbmF2IGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG59XFxuLnBvcHVwID4gZGl2IHtcXG4gIGdhcDogMjBweDtcXG59XFxuLnBvcHVwID4gZGl2IHNlY3Rpb24ge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucG9wdXAgaDIsXFxuLnBvcHVwIGgzIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5wb3B1cCBpbWcge1xcbiAgd2lkdGg6IDgwdmg7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG4ucG9wdXAgcCxcXG4ucG9wdXAgc3BhbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ucG9wdXAgLm1hdGVyaWFsLWljb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucG9wdXAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxuICBnYXA6IDVweDtcXG4gIG1heC1oZWlnaHQ6IDcycHg7XFxufVxcbi5wb3B1cCAuY29tbWVudC1yb3cge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5wb3B1cCAuY29tbWVudC1yb3cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLnBvcHVwIC5jb21tZW50LXJvdyBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogNDUlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLnBvcHVwIGlucHV0LFxcbi5wb3B1cCB0ZXh0YXJlYSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnBvcHVwIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm1haW4gLmdyaWQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxNTBweCk7XFxuICBncmlkLWdhcDogNTBweCA1MHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg4cHgpO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgaW1nIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xcbn1cXG5tYWluIC5ncmlkIC5jYXJkIC5jYXJkLWhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgLmNhcmQtaGVhZGVyIC5tYXRlcmlhbC1pY29ucyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5tYWluIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5tYWluIC5mYWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gLmZhZGUtYmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcXG59XFxubWFpbiAuZmFkZS1hZnRlciB7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMTAwJSk7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2xheW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdXRpbGl0aWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QUN6Q0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FENENGOztBQ3pDQTtFQUNFLGtCQUFBO0FENENGOztBQ3pDQTtFQUNFLGdCQUFBO0FENENGOztBQ3hDRTtFQUNFLGVBQUE7QUQyQ0o7O0FDdkNBO0VBQ0Usa0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsaUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsbUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsZ0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0Usa0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsZ0JBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxhQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUQwQ0Y7O0FBM0dBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FBOEdGOztBQTNHQTtFQUNFLHlCQUFBO0FBOEdGOztBQTNHQTtFQUNFLFlBQUE7QUE4R0Y7QUE1R0U7RUFDRSxVQUFBO0FBOEdKOztBQTFHQTtFQUNFLHVCQUFBO0FBNkdGO0FBM0dFO0VBQ0UscUJBQUE7QUE2R0o7O0FBekdBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBNEdGO0FBMUdFO0VBQ0UsU0FBQTtBQTRHSjtBQTFHSTtFQUNFLFlBQUE7QUE0R047O0FBdkdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUEwR0Y7QUF4R0U7RUFDRSxTQUFBO0FBMEdKO0FBeEdJO0VBQ0UsU0FBQTtBQTBHTjtBQXRHRTs7RUFFRSxVQUFBO0FBd0dKO0FBckdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXVHSjtBQXBHRTs7RUFFRSxnQkFBQTtBQXNHSjtBQW5HRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFxR0o7QUFsR0U7RUFDRSxRQUFBO0VBQ0EsZ0JBQUE7QUFvR0o7QUFqR0U7RUFDRSxTQUFBO0FBbUdKO0FBaEdNO0VBQ0UsVUFBQTtBQWtHUjtBQS9GTTtFQUNFLFVBQUE7QUFpR1I7QUE5Rk07RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFnR1I7QUEzRkU7O0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE2Rko7QUExRkU7RUFDRSxZQUFBO0FBNEZKOztBQXhGQTtFQUNFLGtCQUFBO0FBMkZGO0FBekZFO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBMkZKO0FBekZJO0VBQ0UseUJBQUE7QUEyRk47QUF4Rk07RUFDRSxhQUFBO0VBQ0EsNEJBQUE7QUEwRlI7QUF2Rk07RUFDRSxZQUFBO0FBeUZSO0FBdkZRO0VBQ0UsVUFBQTtBQXlGVjtBQXhFRTtFQUNFLGtCQUFBO0FBMEVKO0FBdkVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF5RUo7QUF0RUU7RUFDRSxNQUFBO0VBQ0EsZ0dBQ0U7QUF1RU47QUEvREU7RUFDRSxTQUFBO0VBQ0EsbUdBQ0U7QUFnRU47O0FBdkRBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBMERGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5qdXN0aWZ5LWV2ZW5seSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXCIsXCJAaW1wb3J0ICdsYXlvdXQuc2Nzcyc7XFxuQGltcG9ydCAndXRpbGl0aWVzLnNjc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhcmstZ3JleS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcblxcbiAgbmF2IHtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuXFxuICAmID4gZGl2IHtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBzZWN0aW9uIHtcXG4gICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDgwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxuICAgIGhlaWdodDogODB2aDtcXG4gIH1cXG5cXG4gIHAsXFxuICBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG5cXG4gIC5jb21tZW50cy1jb250YWluZXIge1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWF4LWhlaWdodDogNzJweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXJvdyB7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgc3BhbiB7XFxuICAgICAgJjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtY2hpbGQoMykge1xcbiAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBpbnB1dCxcXG4gIHRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTUwcHgpO1xcbiAgICBncmlkLWdhcDogNTBweCA1MHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5jYXJkLWhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAvLyAmOmFmdGVyIHtcXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAvLyAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIC8vICAgYm90dG9tOiAwO1xcbiAgICAgIC8vICAgcmlnaHQ6IDA7XFxuICAgICAgLy8gICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwIDA7XFxuICAgICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAvLyAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIC8vIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5mYWRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC5mYWRlLWJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byB0b3AsXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXFxuICAgICAgICAxMDAlXFxuICAgICAgKTtcXG4gIH1cXG5cXG4gIC5mYWRlLWFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIGJvdHRvbSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcXG4gICAgICAgIDEwMCVcXG4gICAgICApO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblwiLFwiLm1pbmltYWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zY3JvbGwteSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucG9pbnRlciB7XFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4ubS1yLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubS1sLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucC15LTUwIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucC14LTEwMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cmwgPSAnJztcbiAgICB0aGlzLnBhcmFtcyA9ICcnO1xuICAgIHRoaXMuaGVhZGVycyA9IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9O1xuICAgIHRoaXMuYm9keSA9ICcnO1xuICB9XG5cbiAgYXN5bmMgZ2V0KCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHRoaXMudXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB0aGlzLnBhcmFtc1trZXldKSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIHBvc3QoKSB7XG4gICAgYXdhaXQgZmV0Y2goXG5cbiAgICAgIHRoaXMudXJsLFxuXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICB9LFxuXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBzZXQgY2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIGNhcmQnKTtcblxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCB7IHNyYzogY2hhcmFjdGVyLmltYWdlIH0pO1xuXG4gICAgY29uc3QgY2FyZEJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wgcC0xMCcpO1xuXG4gICAgY29uc3QgY2FyZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWhlYWRlciBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nKTtcbiAgICBjb25zdCBzcGFuTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIGNoYXJhY3Rlci5uYW1lKTtcbiAgICBjb25zdCBzcGFuSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnbGlrZSBtYXRlcmlhbC1pY29ucyBwb2ludGVyJywge30sICdmYXZvcml0ZV9ib3JkZXInKTtcbiAgICBjYXJkSGVhZGVyLmFwcGVuZChzcGFuTmFtZSwgc3Bhbkljb24pO1xuXG4gICAgY29uc3Qgc3Bhbkxpa2VzID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdmbGV4LXJvdyBqdXN0aWZ5LWVuZCcsIHt9LCBgJHtjaGFyYWN0ZXIubGlrZXN9IExpa2VzYCk7XG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1yb3cganVzdGlmeS1jZW50ZXInKTtcbiAgICBjb25zdCBidXR0b25Db21tZW50cyA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdDb21tZW50LWJ0biBtaW5pbWFsIHBvaW50ZXIgcC15LTUgcC14LTEwIG0tdC0yNScsIHsgdHlwZTogJ2J1dHRvbicgfSwgJ0NvbW1lbnRzJyk7XG4gICAgYnV0dG9uRGl2LmFwcGVuZChidXR0b25Db21tZW50cyk7XG5cbiAgICBjYXJkQm9keS5hcHBlbmQoY2FyZEhlYWRlciwgc3Bhbkxpa2VzLCBidXR0b25EaXYpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcmRJbWFnZSwgY2FyZEJvZHkpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGxpa2VzID0gMCwgZGVzY3JpcHRpb24sIGltYWdlLCB1cmwpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpa2VzID0gbGlrZXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxufSIsImltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIH1cblxuICBidWlsZChjaGFyYWN0ZXJzKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhjaGFyYWN0ZXJzKS5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2FyZHMucHVzaChuZXcgQ2FyZChjaGFyYWN0ZXIpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFwcGVuZCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoLi4udGhpcy5jYXJkcyk7XG4gIH1cbn0iLCJpbXBvcnQgeyBhZGRMaXN0ZW5lcnMsIHRvZ2dsZSB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5pbXBvcnQgTWFydmVsQVBJIGZyb20gJy4vTWFydmVsQVBJLmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL0ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLmpzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZSA9IG5ldyBNYXJ2ZWxBUEkoKTtcbiAgICB0aGlzLmludm9sdmVtZW50ID0gbmV3IEludm9sdmVtZW50QVBJKCk7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gW107XG4gICAgdGhpcy5hcGlMaWtlcyA9IFtdO1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHt9O1xuICAgIHRoaXMubGlrZXMgPSB7fTtcbiAgICB0aGlzLml0ZW1JZCA9IDA7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSAwO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldEFQSURhdGEoKTtcbiAgICB0aGlzLm9iamVjdGlmeUFQSURhdGEoKTtcbiAgICB0aGlzLmhhbmRsZUNvdW50ZXIoKTtcbiAgICB0aGlzLnBvcHVsYXRlR3JpZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFQSURhdGEoKSB7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy5iYXNlLmdldENoYXJhY3RlcnMoKTtcbiAgICB0aGlzLmFwaUxpa2VzID0gYXdhaXQgdGhpcy5pbnZvbHZlbWVudC5nZXRMaWtlcygpO1xuICB9XG5cbiAgb2JqZWN0aWZ5QVBJRGF0YSgpIHtcbiAgICB0aGlzLm9iamVjdGlmeUxpa2VzKCk7XG4gICAgdGhpcy5vYmplY3RpZnlDaGFyYWN0ZXJzKCk7XG4gIH1cblxuICBvYmplY3RpZnlMaWtlcygpIHtcbiAgICB0aGlzLmFwaUxpa2VzLmZvckVhY2goKGFwaUxpa2UpID0+IHtcbiAgICAgIHRoaXMubGlrZXNbYXBpTGlrZS5pdGVtX2lkXSA9IGFwaUxpa2UubGlrZXM7XG4gICAgfSk7XG4gIH1cblxuICBvYmplY3RpZnlDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMuYXBpQ2hhcmFjdGVycy5mb3JFYWNoKChhcGlDaGFyYWN0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2hhcmFjdGVyc1thcGlDaGFyYWN0ZXIubmFtZV0gPSBuZXcgQ2hhcmFjdGVyKFxuICAgICAgICBhcGlDaGFyYWN0ZXIuaWQsXG4gICAgICAgIGFwaUNoYXJhY3Rlci5uYW1lLFxuICAgICAgICB0aGlzLmxpa2VzW2FwaUNoYXJhY3Rlci5pZF0sXG4gICAgICAgIGFwaUNoYXJhY3Rlci5kZXNjcmlwdGlvbixcbiAgICAgICAgYCR7YXBpQ2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2FwaUNoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWAsXG4gICAgICAgIGFwaUNoYXJhY3Rlci51cmxzWzBdLnVybCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDb3VudGVyKCkge1xuICAgIHRoaXMuc2V0Q291bnRlcigpO1xuICAgIHRoaXMuZGlzcGxheUNvdW50ZXIoKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJzQ291bnQgPSB0aGlzLmFwaUNoYXJhY3RlcnMubGVuZ3RoO1xuICB9XG5cbiAgZGlzcGxheUNvdW50ZXIoKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYScpO1xuICAgIGNoYXJhY3RlcnNNZW51LmlubmVySFRNTCA9IGBDaGFyYWN0ZXJzICgke3RoaXMuY2hhcmFjdGVyc0NvdW50fSlgO1xuICB9XG5cbiAgcG9wdWxhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZCgnZ3JpZCcpO1xuICAgIGdyaWQuYnVpbGQodGhpcy5jaGFyYWN0ZXJzKS5hcHBlbmQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNvbW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNvbW1lbnQtYnRuJyk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgY29tbWVudEJ1dHRvbnMsXG4gICAgICB7XG4gICAgICAgIGNsaWNrOiAoZSkgPT4gdGhpcy5vcGVuTW9kYWwoZSksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBsaWtlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XG4gICAgYWRkTGlzdGVuZXJzKFxuICAgICAgbGlrZUJ1dHRvbnMsXG4gICAgICB7XG4gICAgICAgIGNsaWNrOiAoZSkgPT4gdGhpcy5saWtlQ2hhcmFjdGVyKGUpLFxuICAgICAgICBtb3VzZWVudGVyOiAoZSkgPT4gdG9nZ2xlKGUudGFyZ2V0LCAnaW5uZXJIVE1MJywgWydmYXZvcml0ZScsICdmYXZvcml0ZV9ib3JkZXInXSksXG4gICAgICAgIG1vdXNlbGVhdmU6IChlKSA9PiB0b2dnbGUoZS50YXJnZXQsICdpbm5lckhUTUwnLCBbJ2Zhdm9yaXRlJywgJ2Zhdm9yaXRlX2JvcmRlciddKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChlKSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lckhUTUw7XG4gICAgY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAodGhpcy5jaGFyYWN0ZXJzW25hbWVdKTtcbiAgICBwb3B1cC5pbml0KCk7XG4gIH1cblxuICBsaWtlQ2hhcmFjdGVyKGUpIHtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsTGlrZXMoZS50YXJnZXQpO1xuICAgIHRoaXMuaW52b2x2ZW1lbnQucG9zdExpa2UodGhpcy5pdGVtSWQpO1xuICB9XG5cbiAgdXBkYXRlTG9jYWxMaWtlcyhlbGVtZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG4gICAgY29uc3QgbGlrZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMuaXRlbUlkID0gdGhpcy5jaGFyYWN0ZXJzW25hbWVdLmlkO1xuXG4gICAgdGhpcy5saWtlc1t0aGlzLml0ZW1JZF0gKz0gMTtcbiAgICB0aGlzLmNoYXJhY3RlcnNbbmFtZV0ubGlrZXMgKz0gMTtcblxuICAgIGxpa2VFbGVtZW50LmlubmVySFRNTCA9IGAke3RoaXMubGlrZXNbdGhpcy5pdGVtSWRdfSBMaWtlc2A7XG4gIH1cbn1cbiIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSBleHRlbmRzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iYXNlID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFGalZ6WmJmUnFXZHZybllFd2g2JztcbiAgfVxuXG4gIGFzeW5jIGdldExpa2VzKCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2xpa2VzYCk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3VwZXIuZ2V0KCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKGl0ZW1JZCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2NvbW1lbnRzYCk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBkYXRhLnJldmVyc2UoKTtcbiAgfVxuXG4gIGFzeW5jIHBvc3RMaWtlKGl0ZW1JZCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2xpa2VzYCk7XG5cbiAgICBzdXBlci5ib2R5ID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH07XG5cbiAgICBhd2FpdCBzdXBlci5wb3N0KCk7XG4gIH1cblxuICBhc3luYyBwb3N0Q29tbWVudChpdGVtSWQsIHVzZXJOYW1lLCBjb21tZW50Q29udGVudCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2NvbW1lbnRzYCk7XG5cbiAgICB0aGlzLmJvZHkgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICBjb21tZW50OiBjb21tZW50Q29udGVudCxcbiAgICB9O1xuXG4gICAgYXdhaXQgc3VwZXIucG9zdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgQVBJIGZyb20gJy4vQVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFydmVsQVBJIGV4dGVuZHMgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhc2UgPSAnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljJztcbiAgfVxuXG4gIGFzeW5jIGdldENoYXJhY3RlcnMoKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vY2hhcmFjdGVyc2ApO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBhcGlrZXk6ICc4NmFmNGExNzQ5ZDc0NGY0ZjZjNjQzYzVjODdhNGYzYycsXG4gICAgICBsaW1pdDogJzEwMCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdXBlci5nZXQoKTtcblxuICAgIHJldHVybiBkYXRhLmRhdGEucmVzdWx0cztcbiAgfVxufSIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL0ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2xpYnJhcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIHRoaXMuaW52b2x2ZW1lbnQgPSBuZXcgSW52b2x2ZW1lbnRBUEkoKTtcbiAgICB0aGlzLmFwaUNvbW1lbnRzID0gW107XG4gICAgdGhpcy5jb21tZW50c0NvdW50ID0gMDtcbiAgICB0aGlzLmNvbW1lbnRGaWVsZHMgPSBbXTtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRDb21tZW50cygpO1xuICAgIHRoaXMuc2V0Q291bnRlcigpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cygpIHtcbiAgICB0aGlzLmFwaUNvbW1lbnRzID0gYXdhaXQgdGhpcy5pbnZvbHZlbWVudC5nZXRDb21tZW50cyh0aGlzLmNoYXJhY3Rlci5pZCk7XG4gIH1cblxuICBzZXRDb3VudGVyKCkge1xuICAgIHRoaXMuY29tbWVudHNDb3VudCA9IHRoaXMuYXBpQ29tbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAncG9wdXAgZmxleC1yb3cnKTtcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnY2xvc2UgbWF0ZXJpYWwtaWNvbnMgcG9pbnRlciBtLXQtMTAgbS1yLTEwJywge30sICdjbG9zZScpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wnKTtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsICcnLCB7IHNyYzogdGhpcy5jaGFyYWN0ZXIuaW1hZ2UgfSk7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlKTtcblxuICAgIGNvbnN0IG5vbkltYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2ZsZXgtY29sIGp1c3RpZnktZXZlbmx5IHAtMTAnKTtcblxuICAgIC8vIERFVEFJTFMgU0VDVElPTlxuXG4gICAgY29uc3QgZGV0YWlsc1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2ZsZXgtY29sJyk7XG5cbiAgICBjb25zdCBuYW1lID0gY3JlYXRlRWxlbWVudCgnaDInLCAnc2VsZi1jZW50ZXInLCB7fSwgdGhpcy5jaGFyYWN0ZXIubmFtZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdwJywgJycsIHt9LCBgJHt0aGlzLmNoYXJhY3Rlci5kZXNjcmlwdGlvbn1gIHx8ICdObyBkZXNjcmlwdGlvbiBhdmFpbGFibGUgZnJvbSBBUEkuJyk7XG5cbiAgICBjb25zdCBkaXZVcmwgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1cmwgPSBjcmVhdGVFbGVtZW50KCdhJywgJ21pbmltYWwnLCB7IGhyZWY6IHRoaXMuY2hhcmFjdGVyLnVybCwgdGFyZ2V0OiAnX2JsYW5rJyB9LCAnUmVhZCBtb3JlJyk7XG4gICAgZGl2VXJsLmFwcGVuZCh1cmwpO1xuXG4gICAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKG5hbWUsIGRlc2NyaXB0aW9uLCBkaXZVcmwpO1xuXG4gICAgLy8gQ09NTUVOVFMgU0VDVElPTlxuXG4gICAgY29uc3QgY29tbWVudHNTZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgY29tbWVudHNIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMycsICdjb21tZW50cy1oZWFkZXIgc2VsZi1jZW50ZXInLCB7fSwgYENvbW1lbnRzICgke3RoaXMuY29tbWVudHNDb3VudH0pYCk7XG5cbiAgICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb21tZW50cy1jb250YWluZXIgZmxleC1jb2wgc2Nyb2xsLXknKTtcblxuICAgIHRoaXMuYXBpQ29tbWVudHMuZm9yRWFjaCgoYXBpQ29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudFJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb21tZW50LXJvdyBmbGV4LXJvdycpO1xuICAgICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIGFwaUNvbW1lbnQuY3JlYXRpb25fZGF0ZSk7XG4gICAgICBjb25zdCB1c2VyID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgYXBpQ29tbWVudC51c2VybmFtZSk7XG4gICAgICBjb25zdCBjb21tZW50ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgYXBpQ29tbWVudC5jb21tZW50KTtcbiAgICAgIGNvbW1lbnRSb3cuYXBwZW5kKGRhdGUsIHVzZXIsIGNvbW1lbnQpO1xuICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kKGNvbW1lbnRSb3cpO1xuICAgIH0pO1xuXG4gICAgY29tbWVudHNTZWN0aW9uLmFwcGVuZChjb21tZW50c0hlYWRlciwgY29tbWVudHNDb250YWluZXIpO1xuXG4gICAgLy8gRk9STSBTRUNUSU9OXG5cbiAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnZmxleC1jb2wnKTtcblxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMycsICdzZWxmLWNlbnRlcicsIHt9LCAnQWRkIGEgY29tbWVudCcpO1xuXG4gICAgLy8gbGV0IGZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgJ2ZsZXgtY29sJyk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICdjb21tZW50LWZpZWxkIHAteS01IHAteC0xMCcsIHsgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ1lvdXIgbmFtZScsIG1heGxlbmd0aDogJzEwJyB9KTtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgJ2NvbW1lbnQtZmllbGQgcC15LTUgcC14LTEwJywge1xuICAgICAgaWQ6ICd0eHRpZCcsXG4gICAgICBuYW1lOiAndHh0bmFtZScsXG4gICAgICByb3dzOiAnMScsXG4gICAgICBjb2xzOiAnNTAnLFxuICAgICAgbWF4bGVuZ3RoOiAnNTAnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdZb3VyIGluc2lnaHRzJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzZWxmLWNlbnRlcicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdtaW5pbWFsIHBvaW50ZXIgcC15LTUgcC14LTEwJywge30sICdDb21tZW50Jyk7XG4gICAgZGl2QnV0dG9uLmFwcGVuZChidXR0b24pO1xuXG4gICAgLy8gZm9ybS5hcHBlbmQoaW5wdXQsIHRleHRhcmVhLCBkaXZCdXR0b24pO1xuICAgIGZvcm1TZWN0aW9uLmFwcGVuZChmb3JtSGVhZGVyLCBpbnB1dCwgdGV4dGFyZWEsIGRpdkJ1dHRvbik7XG5cbiAgICAvLyBQQVJFTlRTXG5cbiAgICBub25JbWFnZUNvbnRhaW5lci5hcHBlbmQoZGV0YWlsc1NlY3Rpb24sIGNvbW1lbnRzU2VjdGlvbiwgZm9ybVNlY3Rpb24pO1xuXG4gICAgbW9kYWwuYXBwZW5kKGNsb3NlSWNvbiwgaW1hZ2VDb250YWluZXIsIG5vbkltYWdlQ29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpKTtcblxuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAgYnV0dG9uJyk7XG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ29tbWVudCgpKTtcbiAgfVxuXG4gIGhhbmRsZUNvbW1lbnQoKSB7XG4gICAgdGhpcy5nZXRDb21tZW50RmllbGRzKCk7XG4gICAgdGhpcy5wb3N0Q29tbWVudCgpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxDb21tZW50cygpO1xuICAgIHRoaXMucmVzZXRDb21tZW50RmllbGRzKCk7XG4gIH1cblxuICBnZXRDb21tZW50RmllbGRzKCkge1xuICAgIHRoaXMuY29tbWVudEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWZpZWxkJyk7XG4gIH1cblxuICBwb3N0Q29tbWVudCgpIHtcbiAgICB0aGlzLmludm9sdmVtZW50LnBvc3RDb21tZW50KFxuICAgICAgdGhpcy5jaGFyYWN0ZXIuaWQsXG4gICAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMF0udmFsdWUsXG4gICAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMV0udmFsdWUsXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0Q29tbWVudEZpZWxkcygpIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuY29tbWVudEZpZWxkcykuZm9yRWFjaCgoY29tbWVudEZpZWxkKSA9PiB7IGNvbW1lbnRGaWVsZC52YWx1ZSA9ICcnOyB9KTtcbiAgICB0aGlzLmNvbW1lbnRGaWVsZHNbMF0uZm9jdXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsQ29tbWVudHMoKSB7XG4gICAgdGhpcy5jb21tZW50c0NvdW50ICs9IDE7XG5cbiAgICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWhlYWRlcicpO1xuICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHt0aGlzLmNvbW1lbnRzQ291bnR9KWA7XG5cbiAgICBjb25zdCBjb21tZW50Um93ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnQtcm93IGZsZXgtcm93Jyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnJywge30sIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpO1xuICAgIGNvbnN0IHVzZXIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCB0aGlzLmNvbW1lbnRGaWVsZHNbMF0udmFsdWUpO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCB0aGlzLmNvbW1lbnRGaWVsZHNbMV0udmFsdWUpO1xuICAgIGNvbW1lbnRSb3cuYXBwZW5kKGRhdGUsIHVzZXIsIGNvbW1lbnQpO1xuXG4gICAgY29tbWVudHNDb250YWluZXIucHJlcGVuZChjb21tZW50Um93KTtcbiAgfVxufVxuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VHlwZSwgY2xhc3NOYW1lcyA9ICcnLCBhdHRyaWJ1dGVzID0ge30sIGlubmVySFRNTCA9ICcnLCBwcm9wZXJ0aWVzID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBpZiAoY2xhc3NOYW1lcykgZWxlbWVudE9iamVjdC5jbGFzc0xpc3QuYWRkKC4uLihjbGFzc05hbWVzLnNwbGl0KCcgJykpKTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgZWxlbWVudE9iamVjdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICB9KTtcbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBlbGVtZW50T2JqZWN0W3Byb3BlcnR5XSA9IHByb3BlcnRpZXNbcHJvcGVydHldO1xuICB9KTtcbiAgZWxlbWVudE9iamVjdC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHJldHVybiBlbGVtZW50T2JqZWN0O1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKGVsZW1lbnRzLCBsaXN0ZW5lcnMpID0+IHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGxpc3RlbmVycykuZm9yRWFjaCgoW2V2ZW50LCBsaXN0ZW5lcl0pID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZSA9ICh0YXJnZXQsIHByb3BlcnR5LCBzdGF0ZXMpID0+IHtcbiAgdGFyZ2V0W3Byb3BlcnR5XSA9ICh0YXJnZXRbcHJvcGVydHldID09PSBzdGF0ZXNbMF0gPyBzdGF0ZXNbMV0gOiBzdGF0ZXNbMF0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkTGlzdGVuZXJzLCB0b2dnbGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUuanMnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBob21lID0gbmV3IEhvbWUoKTtcbiAgaG9tZS5pbml0KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=