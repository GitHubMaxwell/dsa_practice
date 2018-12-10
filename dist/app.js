(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _UHF_Footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UHF/Footer.js */ "./src/components/UHF/Footer.js");
/* harmony import */ var _Dashboard_Dashboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/Dashboard.js */ "./src/components/Dashboard/Dashboard.js");

 // import Menu from "./Menu.js";


 // maybe the code splitting in index.js messing up routes?

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      current: "????"
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _Dashboard_Dashboard_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UHF_Footer_js__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
  }

}

/***/ }),

/***/ "./src/components/Dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/Dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Dashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "lg-heading"
  }, "DSA Practice"));
}

/***/ }),

/***/ "./src/components/UHF/Footer.js":
/*!**************************************!*\
  !*** ./src/components/UHF/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // change footer to class component to handle state

function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "universal-footer"
  }, "Copyright \xA9 2018");
}

/***/ })

}]);
//# sourceMappingURL=app.js.map