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
      limit: '20',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9DYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvR3JpZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9JbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL01hcnZlbEFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktZXZlbmx5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWluaW1hbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcm9sbC15IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wb2ludGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm0tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm0tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnAteS01MCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnAteC0xMDAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXJrLWdyZXktYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG59XFxuaGVhZGVyIG5hdiB7XFxuICBnYXA6IDMwcHg7XFxufVxcbmhlYWRlciBuYXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbn1cXG4ucG9wdXAgPiBkaXYge1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ucG9wdXAgPiBkaXYgc2VjdGlvbiB7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wb3B1cCBoMixcXG4ucG9wdXAgaDMge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnBvcHVwIGltZyB7XFxuICB3aWR0aDogODB2aDtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcbi5wb3B1cCBwLFxcbi5wb3B1cCBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5wb3B1cCAubWF0ZXJpYWwtaWNvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5wb3B1cCAuY29tbWVudHMtY29udGFpbmVyIHtcXG4gIGdhcDogNXB4O1xcbiAgbWF4LWhlaWdodDogNzJweDtcXG59XFxuLnBvcHVwIC5jb21tZW50LXJvdyB7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wb3B1cCAuY29tbWVudC1yb3cgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLnBvcHVwIC5jb21tZW50LXJvdyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4ucG9wdXAgLmNvbW1lbnQtcm93IHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiA0NSU7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4ucG9wdXAgaW5wdXQsXFxuLnBvcHVwIHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucG9wdXAgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbiAuZ3JpZCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE1MHB4KTtcXG4gIGdyaWQtZ2FwOiA1MHB4IDUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODhweCk7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XFxufVxcbm1haW4gLmdyaWQgLmNhcmQgLmNhcmQtaGVhZGVyIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZ3JpZCAuY2FyZCAuY2FyZC1oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbm1haW4gOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbm1haW4gLmZhZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiAuZmFkZS1iZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDEwMCUpO1xcbn1cXG5tYWluIC5mYWRlLWFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAxMDAlKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL191dGlsaXRpZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLDhCQUFBO0FDRUY7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBQ3pDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUQ0Q0Y7O0FDekNBO0VBQ0Usa0JBQUE7QUQ0Q0Y7O0FDekNBO0VBQ0UsZ0JBQUE7QUQ0Q0Y7O0FDeENFO0VBQ0UsZUFBQTtBRDJDSjs7QUN2Q0E7RUFDRSxrQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxpQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxnQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxrQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxnQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGFBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBRDBDRjs7QUEzR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUE4R0Y7O0FBM0dBO0VBQ0UseUJBQUE7QUE4R0Y7O0FBM0dBO0VBQ0UsWUFBQTtBQThHRjtBQTVHRTtFQUNFLFVBQUE7QUE4R0o7O0FBMUdBO0VBQ0UsdUJBQUE7QUE2R0Y7QUEzR0U7RUFDRSxxQkFBQTtBQTZHSjs7QUF6R0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUE0R0Y7QUExR0U7RUFDRSxTQUFBO0FBNEdKO0FBMUdJO0VBQ0UsWUFBQTtBQTRHTjs7QUF2R0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQTBHRjtBQXhHRTtFQUNFLFNBQUE7QUEwR0o7QUF4R0k7RUFDRSxTQUFBO0FBMEdOO0FBdEdFOztFQUVFLFVBQUE7QUF3R0o7QUFyR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBdUdKO0FBcEdFOztFQUVFLGdCQUFBO0FBc0dKO0FBbkdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQXFHSjtBQWxHRTtFQUNFLFFBQUE7RUFDQSxnQkFBQTtBQW9HSjtBQWpHRTtFQUNFLFNBQUE7QUFtR0o7QUFoR007RUFDRSxVQUFBO0FBa0dSO0FBL0ZNO0VBQ0UsVUFBQTtBQWlHUjtBQTlGTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQWdHUjtBQTNGRTs7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZGSjtBQTFGRTtFQUNFLFlBQUE7QUE0Rko7O0FBeEZBO0VBQ0Usa0JBQUE7QUEyRkY7QUF6RkU7RUFDRSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUEyRko7QUF6Rkk7RUFDRSx5QkFBQTtBQTJGTjtBQXhGTTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtBQTBGUjtBQXZGTTtFQUNFLFlBQUE7QUF5RlI7QUF2RlE7RUFDRSxVQUFBO0FBeUZWO0FBeEVFO0VBQ0Usa0JBQUE7QUEwRUo7QUF2RUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXlFSjtBQXRFRTtFQUNFLE1BQUE7RUFDQSxnR0FDRTtBQXVFTjtBQS9ERTtFQUNFLFNBQUE7RUFDQSxtR0FDRTtBQWdFTjs7QUF2REE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUEwREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktZXZlbmx5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIkBpbXBvcnQgJ2xheW91dC5zY3NzJztcXG5AaW1wb3J0ICd1dGlsaXRpZXMuc2Nzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGFyay1ncmV5LWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuXFxuICBuYXYge1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG5cXG4gICYgPiBkaXYge1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHNlY3Rpb24ge1xcbiAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogODB2aDtcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgfVxcblxcbiAgcCxcXG4gIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcblxcbiAgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3MnB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtcm93IHtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBzcGFuIHtcXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGlucHV0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxNTBweCk7XFxuICAgIGdyaWQtZ2FwOiA1MHB4IDUwcHg7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4OHB4KTtcXG5cXG4gICAgLmNhcmQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XFxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcXG4gICAgICB9XFxuXFxuICAgICAgLmNhcmQtaGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC8vICY6YWZ0ZXIge1xcbiAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIC8vICAgY29udGVudDogJyc7XFxuICAgICAgLy8gICBib3R0b206IDA7XFxuICAgICAgLy8gICByaWdodDogMDtcXG4gICAgICAvLyAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDAgMDtcXG4gICAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgLy8gICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIC8vICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgLy8gfVxcbiAgICB9XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmZhZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgLmZhZGUtYmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIHRvcCxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcXG4gICAgICAgIDEwMCVcXG4gICAgICApO1xcbiAgfVxcblxcbiAgLmZhZGUtYWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gYm90dG9tLFxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxcbiAgICAgICAgMTAwJVxcbiAgICAgICk7XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXCIsXCIubWluaW1hbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNjcm9sbC15IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wb2ludGVyIHtcXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5tLXItYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tLWwtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wLXktNTAge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wLXgtMTAwIHtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVybCA9ICcnO1xuICAgIHRoaXMucGFyYW1zID0gJyc7XG4gICAgdGhpcy5oZWFkZXJzID0geyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH07XG4gICAgdGhpcy5ib2R5ID0gJyc7XG4gIH1cblxuICBhc3luYyBnZXQoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5wYXJhbXMpLmZvckVhY2goKGtleSkgPT4gdGhpcy51cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHRoaXMucGFyYW1zW2tleV0pKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgcG9zdCgpIHtcbiAgICBhd2FpdCBmZXRjaChcblxuICAgICAgdGhpcy51cmwsXG5cbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgIH0sXG5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIHNldCBjaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wgY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZEltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHsgc3JjOiBjaGFyYWN0ZXIuaW1hZ2UgfSk7XG5cbiAgICBjb25zdCBjYXJkQm9keSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCBwLTEwJyk7XG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtaGVhZGVyIGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbicpO1xuICAgIGNvbnN0IHNwYW5OYW1lID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgY2hhcmFjdGVyLm5hbWUpO1xuICAgIGNvbnN0IHNwYW5JY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdsaWtlIG1hdGVyaWFsLWljb25zIHBvaW50ZXInLCB7fSwgJ2Zhdm9yaXRlX2JvcmRlcicpO1xuICAgIGNhcmRIZWFkZXIuYXBwZW5kKHNwYW5OYW1lLCBzcGFuSWNvbik7XG5cbiAgICBjb25zdCBzcGFuTGlrZXMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2ZsZXgtcm93IGp1c3RpZnktZW5kJywge30sIGAke2NoYXJhY3Rlci5saWtlc30gTGlrZXNgKTtcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbW1lbnRzID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0NvbW1lbnQtYnRuIG1pbmltYWwgcG9pbnRlciBwLXktNSBwLXgtMTAgbS10LTI1JywgeyB0eXBlOiAnYnV0dG9uJyB9LCAnQ29tbWVudHMnKTtcbiAgICBidXR0b25EaXYuYXBwZW5kKGJ1dHRvbkNvbW1lbnRzKTtcblxuICAgIGNhcmRCb2R5LmFwcGVuZChjYXJkSGVhZGVyLCBzcGFuTGlrZXMsIGJ1dHRvbkRpdik7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FyZEltYWdlLCBjYXJkQm9keSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgbGlrZXMgPSAwLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHVybCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGlrZXMgPSBsaWtlcztcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gJyc7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuICB9XG5cbiAgc2V0IGNsYXNzTmFtZShjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgfVxuXG4gIGJ1aWxkKGNoYXJhY3RlcnMpIHtcbiAgICBPYmplY3QudmFsdWVzKGNoYXJhY3RlcnMpLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICAgICAgdGhpcy5jYXJkcy5wdXNoKG5ldyBDYXJkKGNoYXJhY3RlcikpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXBwZW5kKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCguLi50aGlzLmNhcmRzKTtcbiAgfVxufSIsImltcG9ydCB7IGFkZExpc3RlbmVycywgdG9nZ2xlIH0gZnJvbSAnLi9saWJyYXJ5LmpzJztcbmltcG9ydCBNYXJ2ZWxBUEkgZnJvbSAnLi9NYXJ2ZWxBUEkuanMnO1xuaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQuanMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlID0gbmV3IE1hcnZlbEFQSSgpO1xuICAgIHRoaXMuaW52b2x2ZW1lbnQgPSBuZXcgSW52b2x2ZW1lbnRBUEkoKTtcbiAgICB0aGlzLmFwaUNoYXJhY3RlcnMgPSBbXTtcbiAgICB0aGlzLmFwaUxpa2VzID0gW107XG4gICAgdGhpcy5jaGFyYWN0ZXJzID0ge307XG4gICAgdGhpcy5saWtlcyA9IHt9O1xuICAgIHRoaXMuaXRlbUlkID0gMDtcbiAgICB0aGlzLmNoYXJhY3RlcnNDb3VudCA9IDA7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuZ2V0QVBJRGF0YSgpO1xuICAgIHRoaXMub2JqZWN0aWZ5QVBJRGF0YSgpO1xuICAgIHRoaXMuaGFuZGxlQ291bnRlcigpO1xuICAgIHRoaXMucG9wdWxhdGVHcmlkKCk7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYXN5bmMgZ2V0QVBJRGF0YSgpIHtcbiAgICB0aGlzLmFwaUNoYXJhY3RlcnMgPSBhd2FpdCB0aGlzLmJhc2UuZ2V0Q2hhcmFjdGVycygpO1xuICAgIHRoaXMuYXBpTGlrZXMgPSBhd2FpdCB0aGlzLmludm9sdmVtZW50LmdldExpa2VzKCk7XG4gIH1cblxuICBvYmplY3RpZnlBUElEYXRhKCkge1xuICAgIHRoaXMub2JqZWN0aWZ5TGlrZXMoKTtcbiAgICB0aGlzLm9iamVjdGlmeUNoYXJhY3RlcnMoKTtcbiAgfVxuXG4gIG9iamVjdGlmeUxpa2VzKCkge1xuICAgIHRoaXMuYXBpTGlrZXMuZm9yRWFjaCgoYXBpTGlrZSkgPT4ge1xuICAgICAgdGhpcy5saWtlc1thcGlMaWtlLml0ZW1faWRdID0gYXBpTGlrZS5saWtlcztcbiAgICB9KTtcbiAgfVxuXG4gIG9iamVjdGlmeUNoYXJhY3RlcnMoKSB7XG4gICAgdGhpcy5hcGlDaGFyYWN0ZXJzLmZvckVhY2goKGFwaUNoYXJhY3RlcikgPT4ge1xuICAgICAgdGhpcy5jaGFyYWN0ZXJzW2FwaUNoYXJhY3Rlci5uYW1lXSA9IG5ldyBDaGFyYWN0ZXIoXG4gICAgICAgIGFwaUNoYXJhY3Rlci5pZCxcbiAgICAgICAgYXBpQ2hhcmFjdGVyLm5hbWUsXG4gICAgICAgIHRoaXMubGlrZXNbYXBpQ2hhcmFjdGVyLmlkXSxcbiAgICAgICAgYXBpQ2hhcmFjdGVyLmRlc2NyaXB0aW9uLFxuICAgICAgICBgJHthcGlDaGFyYWN0ZXIudGh1bWJuYWlsLnBhdGh9LiR7YXBpQ2hhcmFjdGVyLnRodW1ibmFpbC5leHRlbnNpb259YCxcbiAgICAgICAgYXBpQ2hhcmFjdGVyLnVybHNbMF0udXJsLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNvdW50ZXIoKSB7XG4gICAgdGhpcy5zZXRDb3VudGVyKCk7XG4gICAgdGhpcy5kaXNwbGF5Q291bnRlcigpO1xuICB9XG5cbiAgc2V0Q291bnRlcigpIHtcbiAgICB0aGlzLmNoYXJhY3RlcnNDb3VudCA9IHRoaXMuYXBpQ2hhcmFjdGVycy5sZW5ndGg7XG4gIH1cblxuICBkaXNwbGF5Q291bnRlcigpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBhJyk7XG4gICAgY2hhcmFjdGVyc01lbnUuaW5uZXJIVE1MID0gYENoYXJhY3RlcnMgKCR7dGhpcy5jaGFyYWN0ZXJzQ291bnR9KWA7XG4gIH1cblxuICBwb3B1bGF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKCdncmlkJyk7XG4gICAgZ3JpZC5idWlsZCh0aGlzLmNoYXJhY3RlcnMpLmFwcGVuZCgpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tbWVudC1idG4nKTtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICBjb21tZW50QnV0dG9ucyxcbiAgICAgIHtcbiAgICAgICAgY2xpY2s6IChlKSA9PiB0aGlzLm9wZW5Nb2RhbChlKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcbiAgICBhZGRMaXN0ZW5lcnMoXG4gICAgICBsaWtlQnV0dG9ucyxcbiAgICAgIHtcbiAgICAgICAgY2xpY2s6IChlKSA9PiB0aGlzLmxpa2VDaGFyYWN0ZXIoZSksXG4gICAgICAgIG1vdXNlZW50ZXI6IChlKSA9PiB0b2dnbGUoZS50YXJnZXQsICdpbm5lckhUTUwnLCBbJ2Zhdm9yaXRlJywgJ2Zhdm9yaXRlX2JvcmRlciddKSxcbiAgICAgICAgbW91c2VsZWF2ZTogKGUpID0+IHRvZ2dsZShlLnRhcmdldCwgJ2lubmVySFRNTCcsIFsnZmF2b3JpdGUnLCAnZmF2b3JpdGVfYm9yZGVyJ10pLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb3Blbk1vZGFsKGUpIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgICBjb25zdCBwb3B1cCA9IG5ldyBQb3B1cCh0aGlzLmNoYXJhY3RlcnNbbmFtZV0pO1xuICAgIHBvcHVwLmluaXQoKTtcbiAgfVxuXG4gIGxpa2VDaGFyYWN0ZXIoZSkge1xuICAgIHRoaXMudXBkYXRlTG9jYWxMaWtlcyhlLnRhcmdldCk7XG4gICAgdGhpcy5pbnZvbHZlbWVudC5wb3N0TGlrZSh0aGlzLml0ZW1JZCk7XG4gIH1cblxuICB1cGRhdGVMb2NhbExpa2VzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICBjb25zdCBsaWtlRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy5pdGVtSWQgPSB0aGlzLmNoYXJhY3RlcnNbbmFtZV0uaWQ7XG5cbiAgICB0aGlzLmxpa2VzW3RoaXMuaXRlbUlkXSA9IHRoaXMubGlrZXNbdGhpcy5pdGVtSWRdICsgMSB8fCAxO1xuICAgIHRoaXMuY2hhcmFjdGVyc1tuYW1lXS5saWtlcyA9IHRoaXMubGlrZXNbdGhpcy5pdGVtSWRdO1xuXG4gICAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGhpcy5saWtlc1t0aGlzLml0ZW1JZF19IExpa2VzYDtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIGV4dGVuZHMgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhc2UgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMUZqVnpaYmZScVdkdnJuWUV3aDYnO1xuICB9XG5cbiAgYXN5bmMgZ2V0TGlrZXMoKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vbGlrZXNgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdXBlci5nZXQoKTtcbiAgICBcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKGl0ZW1JZCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2NvbW1lbnRzYCk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBkYXRhLnJldmVyc2UoKTtcbiAgfVxuXG4gIGFzeW5jIHBvc3RMaWtlKGl0ZW1JZCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2xpa2VzYCk7XG5cbiAgICBzdXBlci5ib2R5ID0ge1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH07XG5cbiAgICBhd2FpdCBzdXBlci5wb3N0KCk7XG4gIH1cblxuICBhc3luYyBwb3N0Q29tbWVudChpdGVtSWQsIHVzZXJOYW1lLCBjb21tZW50Q29udGVudCkge1xuICAgIHRoaXMudXJsID0gbmV3IFVSTChgJHt0aGlzLmJhc2V9L2NvbW1lbnRzYCk7XG5cbiAgICB0aGlzLmJvZHkgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICBjb21tZW50OiBjb21tZW50Q29udGVudCxcbiAgICB9O1xuXG4gICAgYXdhaXQgc3VwZXIucG9zdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgQVBJIGZyb20gJy4vQVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFydmVsQVBJIGV4dGVuZHMgQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhc2UgPSAnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljJztcbiAgfVxuXG4gIGFzeW5jIGdldENoYXJhY3RlcnMoKSB7XG4gICAgdGhpcy51cmwgPSBuZXcgVVJMKGAke3RoaXMuYmFzZX0vY2hhcmFjdGVyc2ApO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBhcGlrZXk6ICc4NmFmNGExNzQ5ZDc0NGY0ZjZjNjQzYzVjODdhNGYzYycsXG4gICAgICBsaW1pdDogJzIwJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN1cGVyLmdldCgpO1xuXG4gICAgcmV0dXJuIGRhdGEuZGF0YS5yZXN1bHRzO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbGlicmFyeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgdGhpcy5pbnZvbHZlbWVudCA9IG5ldyBJbnZvbHZlbWVudEFQSSgpO1xuICAgIHRoaXMuYXBpQ29tbWVudHMgPSBbXTtcbiAgICB0aGlzLmNvbW1lbnRzQ291bnQgPSAwO1xuICAgIHRoaXMuY29tbWVudEZpZWxkcyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgdGhpcy5zZXRDb3VudGVyKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKCkge1xuICAgIHRoaXMuYXBpQ29tbWVudHMgPSBhd2FpdCB0aGlzLmludm9sdmVtZW50LmdldENvbW1lbnRzKHRoaXMuY2hhcmFjdGVyLmlkKTtcbiAgfVxuXG4gIHNldENvdW50ZXIoKSB7XG4gICAgdGhpcy5jb21tZW50c0NvdW50ID0gdGhpcy5hcGlDb21tZW50cy5sZW5ndGg7XG4gIH1cblxuICBidWlsZCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwb3B1cCBmbGV4LXJvdycpO1xuXG4gICAgY29uc3QgY2xvc2VJY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdjbG9zZSBtYXRlcmlhbC1pY29ucyBwb2ludGVyIG0tdC0xMCBtLXItMTAnLCB7fSwgJ2Nsb3NlJyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmbGV4LWNvbCcpO1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJycsIHsgc3JjOiB0aGlzLmNoYXJhY3Rlci5pbWFnZSB9KTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xuXG4gICAgY29uc3Qgbm9uSW1hZ2VDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZmxleC1jb2wganVzdGlmeS1ldmVubHkgcC0xMCcpO1xuXG4gICAgLy8gREVUQUlMUyBTRUNUSU9OXG5cbiAgICBjb25zdCBkZXRhaWxzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnZmxleC1jb2wnKTtcblxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdzZWxmLWNlbnRlcicsIHt9LCB0aGlzLmNoYXJhY3Rlci5uYW1lKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywge30sIGAke3RoaXMuY2hhcmFjdGVyLmRlc2NyaXB0aW9ufWAgfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZSBmcm9tIEFQSS4nKTtcblxuICAgIGNvbnN0IGRpdlVybCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVybCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCAnbWluaW1hbCcsIHsgaHJlZjogdGhpcy5jaGFyYWN0ZXIudXJsLCB0YXJnZXQ6ICdfYmxhbmsnIH0sICdSZWFkIG1vcmUnKTtcbiAgICBkaXZVcmwuYXBwZW5kKHVybCk7XG5cbiAgICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQobmFtZSwgZGVzY3JpcHRpb24sIGRpdlVybCk7XG5cbiAgICAvLyBDT01NRU5UUyBTRUNUSU9OXG5cbiAgICBjb25zdCBjb21tZW50c1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2ZsZXgtY29sJyk7XG5cbiAgICBjb25zdCBjb21tZW50c0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ2NvbW1lbnRzLWhlYWRlciBzZWxmLWNlbnRlcicsIHt9LCBgQ29tbWVudHMgKCR7dGhpcy5jb21tZW50c0NvdW50fSlgKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnRzLWNvbnRhaW5lciBmbGV4LWNvbCBzY3JvbGwteScpO1xuXG4gICAgdGhpcy5hcGlDb21tZW50cy5mb3JFYWNoKChhcGlDb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50Um93ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbW1lbnQtcm93IGZsZXgtcm93Jyk7XG4gICAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgYXBpQ29tbWVudC5jcmVhdGlvbl9kYXRlKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBhcGlDb21tZW50LnVzZXJuYW1lKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBhcGlDb21tZW50LmNvbW1lbnQpO1xuICAgICAgY29tbWVudFJvdy5hcHBlbmQoZGF0ZSwgdXNlciwgY29tbWVudCk7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmQoY29tbWVudFJvdyk7XG4gICAgfSk7XG5cbiAgICBjb21tZW50c1NlY3Rpb24uYXBwZW5kKGNvbW1lbnRzSGVhZGVyLCBjb21tZW50c0NvbnRhaW5lcik7XG5cbiAgICAvLyBGT1JNIFNFQ1RJT05cblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3NlbGYtY2VudGVyJywge30sICdBZGQgYSBjb21tZW50Jyk7XG5cbiAgICAvLyBsZXQgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnZmxleC1jb2wnKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2NvbW1lbnQtZmllbGQgcC15LTUgcC14LTEwJywgeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnWW91ciBuYW1lJywgbWF4bGVuZ3RoOiAnMTAnIH0pO1xuICAgIGNvbnN0IHRleHRhcmVhID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCAnY29tbWVudC1maWVsZCBwLXktNSBwLXgtMTAnLCB7XG4gICAgICBpZDogJ3R4dGlkJyxcbiAgICAgIG5hbWU6ICd0eHRuYW1lJyxcbiAgICAgIHJvd3M6ICcxJyxcbiAgICAgIGNvbHM6ICc1MCcsXG4gICAgICBtYXhsZW5ndGg6ICc1MCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ1lvdXIgaW5zaWdodHMnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NlbGYtY2VudGVyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ21pbmltYWwgcG9pbnRlciBwLXktNSBwLXgtMTAnLCB7fSwgJ0NvbW1lbnQnKTtcbiAgICBkaXZCdXR0b24uYXBwZW5kKGJ1dHRvbik7XG5cbiAgICAvLyBmb3JtLmFwcGVuZChpbnB1dCwgdGV4dGFyZWEsIGRpdkJ1dHRvbik7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kKGZvcm1IZWFkZXIsIGlucHV0LCB0ZXh0YXJlYSwgZGl2QnV0dG9uKTtcblxuICAgIC8vIFBBUkVOVFNcblxuICAgIG5vbkltYWdlQ29udGFpbmVyLmFwcGVuZChkZXRhaWxzU2VjdGlvbiwgY29tbWVudHNTZWN0aW9uLCBmb3JtU2VjdGlvbik7XG5cbiAgICBtb2RhbC5hcHBlbmQoY2xvc2VJY29uLCBpbWFnZUNvbnRhaW5lciwgbm9uSW1hZ2VDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCkpO1xuXG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCBidXR0b24nKTtcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDb21tZW50KCkpO1xuICB9XG5cbiAgaGFuZGxlQ29tbWVudCgpIHtcbiAgICB0aGlzLmdldENvbW1lbnRGaWVsZHMoKTtcbiAgICBpZiAoQXJyYXkuZnJvbSh0aGlzLmNvbW1lbnRGaWVsZHMpLmV2ZXJ5KChjb21tZW50RmllbGQpID0+IGNvbW1lbnRGaWVsZC52YWx1ZSAhPT0gJycpKSB7XG4gICAgICB0aGlzLnBvc3RDb21tZW50KCk7XG4gICAgICB0aGlzLnVwZGF0ZUxvY2FsQ29tbWVudHMoKTtcbiAgICAgIHRoaXMucmVzZXRDb21tZW50RmllbGRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tbWVudEZpZWxkcygpIHtcbiAgICB0aGlzLmNvbW1lbnRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1maWVsZCcpO1xuICB9XG5cbiAgcG9zdENvbW1lbnQoKSB7XG4gICAgdGhpcy5pbnZvbHZlbWVudC5wb3N0Q29tbWVudChcbiAgICAgIHRoaXMuY2hhcmFjdGVyLmlkLFxuICAgICAgdGhpcy5jb21tZW50RmllbGRzWzBdLnZhbHVlLFxuICAgICAgdGhpcy5jb21tZW50RmllbGRzWzFdLnZhbHVlLFxuICAgICk7XG4gIH1cblxuICByZXNldENvbW1lbnRGaWVsZHMoKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmNvbW1lbnRGaWVsZHMpLmZvckVhY2goKGNvbW1lbnRGaWVsZCkgPT4geyBjb21tZW50RmllbGQudmFsdWUgPSAnJzsgfSk7XG4gICAgdGhpcy5jb21tZW50RmllbGRzWzBdLmZvY3VzKCk7XG4gIH1cblxuICB1cGRhdGVMb2NhbENvbW1lbnRzKCkge1xuICAgIHRoaXMuY29tbWVudHNDb3VudCArPSAxO1xuXG4gICAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb21tZW50c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1oZWFkZXInKTtcbiAgICBjb21tZW50c0hlYWRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7dGhpcy5jb21tZW50c0NvdW50fSlgO1xuXG4gICAgY29uc3QgY29tbWVudFJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb21tZW50LXJvdyBmbGV4LXJvdycpO1xuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJycsIHt9LCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICBjb25zdCB1c2VyID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgdGhpcy5jb21tZW50RmllbGRzWzBdLnZhbHVlKTtcbiAgICBjb25zdCBjb21tZW50ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICcnLCB7fSwgdGhpcy5jb21tZW50RmllbGRzWzFdLnZhbHVlKTtcbiAgICBjb21tZW50Um93LmFwcGVuZChkYXRlLCB1c2VyLCBjb21tZW50KTtcblxuICAgIGNvbW1lbnRzQ29udGFpbmVyLnByZXBlbmQoY29tbWVudFJvdyk7XG4gIH1cbn1cbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGNsYXNzTmFtZXMgPSAnJywgYXR0cmlidXRlcyA9IHt9LCBpbm5lckhUTUwgPSAnJywgcHJvcGVydGllcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgaWYgKGNsYXNzTmFtZXMpIGVsZW1lbnRPYmplY3QuY2xhc3NMaXN0LmFkZCguLi4oY2xhc3NOYW1lcy5zcGxpdCgnICcpKSk7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgIGVsZW1lbnRPYmplY3Quc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgZWxlbWVudE9iamVjdFtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgfSk7XG4gIGVsZW1lbnRPYmplY3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICByZXR1cm4gZWxlbWVudE9iamVjdDtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChlbGVtZW50cywgbGlzdGVuZXJzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudCwgbGlzdGVuZXJdKSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgc3RhdGVzKSA9PiB7XG4gIHRhcmdldFtwcm9wZXJ0eV0gPSAodGFyZ2V0W3Byb3BlcnR5XSA9PT0gc3RhdGVzWzBdID8gc3RhdGVzWzFdIDogc3RhdGVzWzBdKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZExpc3RlbmVycywgdG9nZ2xlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgaG9tZSA9IG5ldyBIb21lKCk7XG4gIGhvbWUuaW5pdCgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9