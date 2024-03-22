/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/handleProjectInput.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/handleProjectInput.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* select {
    border: 1px solid black;
    padding: 5px;
}

dialog {
    padding: 20px 30px;

    .close-modal {
        position: absolute;
        top: 5%;
        right: 5%;
        width: 30px;
    }

}

.form-wrapper {
    grid-column: 1 / 2; 
    border-right: 1px solid gray;
    height: calc(100vh - var(--header-height));
    width: 250px;
    padding: 30px 20px;
    z-index: 2;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    input {
        background: rgb(218 218 218);
        width: 150px;
        margin: 10px;
    }
}

@media screen and (max-width: 1024px) {
    .form-wrapper {
        width: 100%;
        height: auto;
        box-shadow: 0 6px .5rem rgb(230, 230, 230);
    }

    form input {
        width: 200px;
    }

    select {
        width: 200px;
    }
} */`, "",{"version":3,"sources":["webpack://./src/css/handleProjectInput.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAsDG","sourcesContent":["/* select {\n    border: 1px solid black;\n    padding: 5px;\n}\n\ndialog {\n    padding: 20px 30px;\n\n    .close-modal {\n        position: absolute;\n        top: 5%;\n        right: 5%;\n        width: 30px;\n    }\n\n}\n\n.form-wrapper {\n    grid-column: 1 / 2; \n    border-right: 1px solid gray;\n    height: calc(100vh - var(--header-height));\n    width: 250px;\n    padding: 30px 20px;\n    z-index: 2;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n\n    input {\n        background: rgb(218 218 218);\n        width: 150px;\n        margin: 10px;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .form-wrapper {\n        width: 100%;\n        height: auto;\n        box-shadow: 0 6px .5rem rgb(230, 230, 230);\n    }\n\n    form input {\n        width: 200px;\n    }\n\n    select {\n        width: 200px;\n    }\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ffff8794;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    height: 100vh;
    width: 300px;
    text-align: center;
    padding: 15px;
    z-index: 999;

    i {
        font-size: 1.1rem;
        margin-right: 5px;
    }

    h1 {
        position: absolute;
        top: 2%;
        left: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 200;
        margin: 20px 10px;
        
    }

    .open-button {
        display: none;
        transform: translateX(-50%);
        animation: bounce .5s infinite linear;
    }

    .close-button {
        display: none;
    }

    nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 80px;

        button {
            display: flex;
            background: transparent;
            color: var(--button-bg);
            border-radius: 0;
            letter-spacing: 4px;
            width: 100%;
            padding-left: 15px;
        }

        button:hover {
            background: var(--button-bg);
            color: #fff;
        }
    }

    footer {
        position: fixed;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        bottom: 3%;

        button {
            background: transparent;
            color: var(--button-bg);
            border-radius: 0;
            letter-spacing: 4px;
            width: 100%;
            padding-left: 15px;
            margin-bottom: 30px;
        }

        button:hover {
            color: #fff;
        }
    }
}




@media screen and (max-width: 1024px) {
    header {
        position: fixed;
        background: hsla(60, 100%, 80%, 0.582);
        backdrop-filter: blur(10px);
        width: 250px;
        height: 100vh;
        transform: translateX(-100%);
        transition: transform .4s ease-out;

        .open-button {
            display: block;
            position: fixed;
            top: 3%;
            right: -22%;
            opacity: 1;

            i {
                font-size: 1.5rem;
            }
        }

        .close-button {
            display: block;
            position: absolute;
            top: 2%;
            right: 5%;
            font-size: 1.5rem;
            opacity: 0;

            i {
                font-size: 1.5rem;
            }
        }
    }

    header.open {
        transform: translateX(0);

        span {
            opacity: 0;
            position: fixed;
            right: -10%;
        }

        .close-button {
            opacity: 1;
        }
    }

    h1 {
        font-size: 1.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;;IAEZ;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;;IAErB;;IAEA;QACI,aAAa;QACb,2BAA2B;QAC3B,qCAAqC;IACzC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,gBAAgB;;QAEhB;YACI,aAAa;YACb,uBAAuB;YACvB,uBAAuB;YACvB,gBAAgB;YAChB,mBAAmB;YACnB,WAAW;YACX,kBAAkB;QACtB;;QAEA;YACI,4BAA4B;YAC5B,WAAW;QACf;IACJ;;IAEA;QACI,eAAe;QACf,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,uBAAuB;QACvB,UAAU;;QAEV;YACI,uBAAuB;YACvB,uBAAuB;YACvB,gBAAgB;YAChB,mBAAmB;YACnB,WAAW;YACX,kBAAkB;YAClB,mBAAmB;QACvB;;QAEA;YACI,WAAW;QACf;IACJ;AACJ;;;;;AAKA;IACI;QACI,eAAe;QACf,sCAAsC;QACtC,2BAA2B;QAC3B,YAAY;QACZ,aAAa;QACb,4BAA4B;QAC5B,kCAAkC;;QAElC;YACI,cAAc;YACd,eAAe;YACf,OAAO;YACP,WAAW;YACX,UAAU;;YAEV;gBACI,iBAAiB;YACrB;QACJ;;QAEA;YACI,cAAc;YACd,kBAAkB;YAClB,OAAO;YACP,SAAS;YACT,iBAAiB;YACjB,UAAU;;YAEV;gBACI,iBAAiB;YACrB;QACJ;IACJ;;IAEA;QACI,wBAAwB;;QAExB;YACI,UAAU;YACV,eAAe;YACf,WAAW;QACf;;QAEA;YACI,UAAU;QACd;IACJ;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');\n\nheader {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background: #ffff8794;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    height: 100vh;\n    width: 300px;\n    text-align: center;\n    padding: 15px;\n    z-index: 999;\n\n    i {\n        font-size: 1.1rem;\n        margin-right: 5px;\n    }\n\n    h1 {\n        position: absolute;\n        top: 2%;\n        left: 2%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.3rem;\n        font-weight: 200;\n        margin: 20px 10px;\n        \n    }\n\n    .open-button {\n        display: none;\n        transform: translateX(-50%);\n        animation: bounce .5s infinite linear;\n    }\n\n    .close-button {\n        display: none;\n    }\n\n    nav {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin-top: 80px;\n\n        button {\n            display: flex;\n            background: transparent;\n            color: var(--button-bg);\n            border-radius: 0;\n            letter-spacing: 4px;\n            width: 100%;\n            padding-left: 15px;\n        }\n\n        button:hover {\n            background: var(--button-bg);\n            color: #fff;\n        }\n    }\n\n    footer {\n        position: fixed;\n        display: flex;\n        flex-direction: column-reverse;\n        align-items: center;\n        justify-content: center;\n        bottom: 3%;\n\n        button {\n            background: transparent;\n            color: var(--button-bg);\n            border-radius: 0;\n            letter-spacing: 4px;\n            width: 100%;\n            padding-left: 15px;\n            margin-bottom: 30px;\n        }\n\n        button:hover {\n            color: #fff;\n        }\n    }\n}\n\n\n\n\n@media screen and (max-width: 1024px) {\n    header {\n        position: fixed;\n        background: hsla(60, 100%, 80%, 0.582);\n        backdrop-filter: blur(10px);\n        width: 250px;\n        height: 100vh;\n        transform: translateX(-100%);\n        transition: transform .4s ease-out;\n\n        .open-button {\n            display: block;\n            position: fixed;\n            top: 3%;\n            right: -22%;\n            opacity: 1;\n\n            i {\n                font-size: 1.5rem;\n            }\n        }\n\n        .close-button {\n            display: block;\n            position: absolute;\n            top: 2%;\n            right: 5%;\n            font-size: 1.5rem;\n            opacity: 0;\n\n            i {\n                font-size: 1.5rem;\n            }\n        }\n    }\n\n    header.open {\n        transform: translateX(0);\n\n        span {\n            opacity: 0;\n            position: fixed;\n            right: -10%;\n        }\n\n        .close-button {\n            opacity: 1;\n        }\n    }\n\n    h1 {\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/homeContent.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/homeContent.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(
      165deg,
      rgba(255, 255, 2, 0.716),
      rgba(254, 254, 161, 0.587),
      rgba(240, 240, 232, 0.594)
    );
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    overflow: hidden;

    h1 {
      margin: 0 20px;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-30%) rotate(15deg);
      z-index: -1;
    }

    button {
      border-radius: 0;
      width: 150px;
    }
  }

  h1 {
    font-family: "", sans-serif;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-size: 3rem;
    font-weight: 200;
  }

  img {
    margin: 5cap;
    width: 400px;
  }
}

@media only screen and (max-width: 1024px) {
  .hero img {
    width: 250px;
  }

  .banner {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: 2.3rem;
    }

    img {
      width: 400px;
      bottom: 0;
    }

    button {
      margin-top: 30px;
    }
  }

  .hero-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;

    p {
      text-align: center;
      margin-top: 10px;
    }
  }
};


`, "",{"version":3,"sources":["webpack://./src/css/homeContent.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb;IACE,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB;;;;;KAKC;IACD,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;;IAEhB;MACE,cAAc;IAChB;;IAEA;MACE,kBAAkB;MAClB,MAAM;MACN,QAAQ;MACR,yCAAyC;MACzC,WAAW;IACb;;IAEA;MACE,gBAAgB;MAChB,YAAY;IACd;EACF;;EAEA;IACE,2BAA2B;IAC3B,wCAAwC;IACxC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB;MACE,kBAAkB;MAClB,iBAAiB;IACnB;;IAEA;MACE,YAAY;MACZ,SAAS;IACX;;IAEA;MACE,gBAAgB;IAClB;EACF;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;;IAEb;MACE,kBAAkB;MAClB,gBAAgB;IAClB;EACF;AACF","sourcesContent":[".hero {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n\n  .banner {\n    position: relative;\n    display: flex;\n    align-items: center;\n    background: linear-gradient(\n      165deg,\n      rgba(255, 255, 2, 0.716),\n      rgba(254, 254, 161, 0.587),\n      rgba(240, 240, 232, 0.594)\n    );\n    width: 100%;\n    height: 100%;\n    margin-bottom: 30px;\n    overflow: hidden;\n\n    h1 {\n      margin: 0 20px;\n    }\n\n    img {\n      position: absolute;\n      top: 0;\n      right: 0;\n      transform: translateY(-30%) rotate(15deg);\n      z-index: -1;\n    }\n\n    button {\n      border-radius: 0;\n      width: 150px;\n    }\n  }\n\n  h1 {\n    font-family: \"\", sans-serif;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    font-size: 3rem;\n    font-weight: 200;\n  }\n\n  img {\n    margin: 5cap;\n    width: 400px;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .hero img {\n    width: 250px;\n  }\n\n  .banner {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    h1 {\n      text-align: center;\n      font-size: 2.3rem;\n    }\n\n    img {\n      width: 400px;\n      bottom: 0;\n    }\n\n    button {\n      margin-top: 30px;\n    }\n  }\n\n  .hero-content-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 20px;\n\n    p {\n      text-align: center;\n      margin-top: 10px;\n    }\n  }\n};\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/renderProjects.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/renderProjects.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.project-container {
    position: relative;
    display: flex;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0 0rem .8rem #afafaf;
    border-radius: 10px;
    width: 100%;
    height: 300px;
    padding: 50px 20px;
    margin: 15px;
    overflow: hidden;

    h1 {
        padding-left: 10px;
        border-radius: 7px;
        z-index: 2;
    }

    .pin-icon {
        position: absolute;
        top: 3%;
        right: 50%;
        font-size: 1.2rem;
        transform: rotate(-40deg);
    }

    ul {
        max-width: 100%;
    }

    img {
        position: absolute;
        top: -5%;
        left: -7%;
        padding: 1px;
        margin-left: 10px;
        width: 350px;
    }

    p {
        font-size: .9rem;
        color: #4f4f4f;
        margin: 10px;
    }

    span {
        font-size: .9rem;
        color: #4f4f4f;;
    }

    button {
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 10px;
    }

    .icons-container {
        position: absolute;
        top: 5%;
        right: 5%;

        & button {
            border: none;
            border-radius: 5px;
            width: 30px;
            padding: 5px;
            margin: 10px;
            cursor: pointer; 
            transition: background .3s;
        }

        button:hover {
            background:va;
            color: #fff;
        }
    }
}

.project-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
    gap: 40px;
    max-height: 100%;
    width: 100%;
    padding: 20px;
}



@keyframes growUp {
    0% {
        transform: scale(.2);
    }
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 1024px) {
    .project-container {
        height: auto;

        img {
            width: 150px;
        }
    }


    .project-wrapper {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-items: center;
        gap: 15px;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/renderProjects.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;IAChC,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;;IAEhB;QACI,kBAAkB;QAClB,kBAAkB;QAClB,UAAU;IACd;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,UAAU;QACV,iBAAiB;QACjB,yBAAyB;IAC7B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,YAAY;QACZ,iBAAiB;QACjB,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,cAAc;QACd,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;;QAET;YACI,YAAY;YACZ,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,YAAY;YACZ,eAAe;YACf,0BAA0B;QAC9B;;QAEA;YACI,aAAa;YACb,WAAW;QACf;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,aAAa;AACjB;;;;AAIA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,YAAY;;QAEZ;YACI,YAAY;QAChB;IACJ;;;IAGA;QACI,4DAA4D;QAC5D,qBAAqB;QACrB,SAAS;IACb;AACJ","sourcesContent":[".project-container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    background: #ffffff;\n    box-shadow: 0 0rem .8rem #afafaf;\n    border-radius: 10px;\n    width: 100%;\n    height: 300px;\n    padding: 50px 20px;\n    margin: 15px;\n    overflow: hidden;\n\n    h1 {\n        padding-left: 10px;\n        border-radius: 7px;\n        z-index: 2;\n    }\n\n    .pin-icon {\n        position: absolute;\n        top: 3%;\n        right: 50%;\n        font-size: 1.2rem;\n        transform: rotate(-40deg);\n    }\n\n    ul {\n        max-width: 100%;\n    }\n\n    img {\n        position: absolute;\n        top: -5%;\n        left: -7%;\n        padding: 1px;\n        margin-left: 10px;\n        width: 350px;\n    }\n\n    p {\n        font-size: .9rem;\n        color: #4f4f4f;\n        margin: 10px;\n    }\n\n    span {\n        font-size: .9rem;\n        color: #4f4f4f;;\n    }\n\n    button {\n        border: none;\n        border-radius: 5px;\n        padding: 5px;\n        margin: 10px;\n    }\n\n    .icons-container {\n        position: absolute;\n        top: 5%;\n        right: 5%;\n\n        & button {\n            border: none;\n            border-radius: 5px;\n            width: 30px;\n            padding: 5px;\n            margin: 10px;\n            cursor: pointer; \n            transition: background .3s;\n        }\n\n        button:hover {\n            background:va;\n            color: #fff;\n        }\n    }\n}\n\n.project-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));\n    gap: 40px;\n    max-height: 100%;\n    width: 100%;\n    padding: 20px;\n}\n\n\n\n@keyframes growUp {\n    0% {\n        transform: scale(.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .project-container {\n        height: auto;\n\n        img {\n            width: 150px;\n        }\n    }\n\n\n    .project-wrapper {\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        justify-items: center;\n        gap: 15px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/renderTodo.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/renderTodo.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: var(--dropshadow);
    list-style: none;
    max-width: 100%;
    max-height: 300px;
    overflow-y: scroll;
    padding: 15px;
    margin-top: 15px;

    div {
        .date {
            color: gray;
            font-style: italic;
            font-size: .9rem;
            letter-spacing: 1px;
            margin-top: 20px;
        }
    }

    & button {
        width: 30px;
        height: 30px;
        padding: 9px;
        cursor: pointer;
    }

    dialog {
        width: 320px;
        height: 150px;
        padding: 30px;
        border-radius: 20px;
        overflow-x: hidden;

        div {
            display: flex;
            justify-content: space-between;
            margin: 20px;

            & button {
                text-align: center;
                width: 80px;
                height: 30px;
                margin: 0 15px;
            }
        }
    }
}

.todo-container {
    box-shadow: inset 0 0.5rem 1rem #ccc;
    border-radius: 10px;
    width: 100%;
    height: auto;
    min-height: 100%;
    margin-top: 30px;
    padding: 20px 40px;
    overflow-x: scroll;


    #add-task {
        position: fixed;
        bottom: 5%;
        right: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        filter: drop-shadow(var(--dropshadow));
    }

    .back-btn {
        position: absolute;
        top: 3%;
        right: 3%;
        border-radius: 50%;
        filter: drop-shadow(2px 3px 2px rgb(152, 152, 152));
        width: 40px;
        height: 40px;
        padding: 0;
    }

    button:hover {
        transform: scale(.5rem);
    }
}

#app .input-modal {
    width: 350px;
    height: 200px;
    padding: 20px 10px;

    textarea {
        height: 85px;
        width: 330px;
        margin-bottom: 10px;
        padding: 5px;
    }

    button {
        margin-right: 20px;
    }
}

dialog {
    border-radius: 15px;
    border: none;
    margin: auto;
    animation: scaleUp .3s;
}

dialog::backdrop {
    backdrop-filter: blur(5px);
}

@keyframes scaleUp {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 1024px) {
    #app .input-modal {
        margin: 200px auto; 
        width: 350px;
        height: 200px;
        padding: 20px 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/renderTodo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;;IAEhB;QACI;YACI,WAAW;YACX,kBAAkB;YAClB,gBAAgB;YAChB,mBAAmB;YACnB,gBAAgB;QACpB;IACJ;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,aAAa;QACb,mBAAmB;QACnB,kBAAkB;;QAElB;YACI,aAAa;YACb,8BAA8B;YAC9B,YAAY;;YAEZ;gBACI,kBAAkB;gBAClB,WAAW;gBACX,YAAY;gBACZ,cAAc;YAClB;QACJ;IACJ;AACJ;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;;;IAGlB;QACI,eAAe;QACf,UAAU;QACV,SAAS;QACT,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,sCAAsC;IAC1C;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;QACT,kBAAkB;QAClB,mDAAmD;QACnD,WAAW;QACX,YAAY;QACZ,UAAU;IACd;;IAEA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB;QACI,YAAY;QACZ,YAAY;QACZ,mBAAmB;QACnB,YAAY;IAChB;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,qBAAqB;IACzB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,YAAY;QACZ,aAAa;QACb,kBAAkB;IACtB;AACJ","sourcesContent":["li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 10px;\n    box-shadow: var(--dropshadow);\n    list-style: none;\n    max-width: 100%;\n    max-height: 300px;\n    overflow-y: scroll;\n    padding: 15px;\n    margin-top: 15px;\n\n    div {\n        .date {\n            color: gray;\n            font-style: italic;\n            font-size: .9rem;\n            letter-spacing: 1px;\n            margin-top: 20px;\n        }\n    }\n\n    & button {\n        width: 30px;\n        height: 30px;\n        padding: 9px;\n        cursor: pointer;\n    }\n\n    dialog {\n        width: 320px;\n        height: 150px;\n        padding: 30px;\n        border-radius: 20px;\n        overflow-x: hidden;\n\n        div {\n            display: flex;\n            justify-content: space-between;\n            margin: 20px;\n\n            & button {\n                text-align: center;\n                width: 80px;\n                height: 30px;\n                margin: 0 15px;\n            }\n        }\n    }\n}\n\n.todo-container {\n    box-shadow: inset 0 0.5rem 1rem #ccc;\n    border-radius: 10px;\n    width: 100%;\n    height: auto;\n    min-height: 100%;\n    margin-top: 30px;\n    padding: 20px 40px;\n    overflow-x: scroll;\n\n\n    #add-task {\n        position: fixed;\n        bottom: 5%;\n        right: 3%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        filter: drop-shadow(var(--dropshadow));\n    }\n\n    .back-btn {\n        position: absolute;\n        top: 3%;\n        right: 3%;\n        border-radius: 50%;\n        filter: drop-shadow(2px 3px 2px rgb(152, 152, 152));\n        width: 40px;\n        height: 40px;\n        padding: 0;\n    }\n\n    button:hover {\n        transform: scale(.5rem);\n    }\n}\n\n#app .input-modal {\n    width: 350px;\n    height: 200px;\n    padding: 20px 10px;\n\n    textarea {\n        height: 85px;\n        width: 330px;\n        margin-bottom: 10px;\n        padding: 5px;\n    }\n\n    button {\n        margin-right: 20px;\n    }\n}\n\ndialog {\n    border-radius: 15px;\n    border: none;\n    margin: auto;\n    animation: scaleUp .3s;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n@keyframes scaleUp {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    #app .input-modal {\n        margin: 200px auto; \n        width: 350px;\n        height: 200px;\n        padding: 20px 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/warningModal.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/warningModal.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.warning-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 160px;
    width: 300px;
    padding: 20px;

    button {
        margin: 20px 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/warningModal.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;;IAEb;QACI,cAAc;IAClB;AACJ","sourcesContent":[".warning-modal {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 160px;\n    width: 300px;\n    padding: 20px;\n\n    button {\n        margin: 20px 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_handleProjectInput_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/handleProjectInput.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/handleProjectInput.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_renderProjects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/renderProjects.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/renderProjects.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_renderTodo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/renderTodo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/renderTodo.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_homeContent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/homeContent.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/homeContent.css");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_handleProjectInput_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_renderProjects_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_renderTodo_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_header_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_homeContent_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-background: rgb(244, 252, 255);
  --yellow: rgb(252, 228, 90);
  --neon-green: rgb(104, 255, 10);
  --button-bg: #2e2e2e;
  --header-height: 85px;
  --dropshadow: 2px 3px 2px rgb(152, 152, 152);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  position: relative;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background: var(--light-background);
  background-size: cover;
  max-height: 100vh;
  overflow-y: auto;
}

#app {
  position: relative;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  letter-spacing: 2px;
  width: 100%;
  height: 100vh;
}

#input-modal {
  width: 300px;
  min-height: 150px;
  height: fit-content;

  button {
    width: 100%;
    margin: 5px 0;
  }
}

#dialog-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
}

button {
  background: var(--button-bg);
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100px;
  padding: 10px 3px;
  cursor: pointer;
  transition: all 0.5s;
}

button:hover {
  background: red;
}

button:active {
  transform: scale(0.9);
}

input {
  padding: 5px 3px;
  border: 1px solid black;
}

@media screen and (max-width: 1024px) {
  body {
    flex-direction: column;
  }

  #app {
    flex-direction: column;
    /* padding: 20px; */
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAOA;EACE,sCAAsC;EACtC,2BAA2B;EAC3B,+BAA+B;EAC/B,oBAAoB;EACpB,qBAAqB;EACrB,4CAA4C;AAC9C;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oDAAoD;EACpD,mCAAmC;EACnC,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;;EAEnB;IACE,WAAW;IACX,aAAa;EACf;AACF;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;AACF","sourcesContent":["@import \"./css/handleProjectInput.css\";\n@import \"./css/renderProjects.css\";\n@import \"./css/renderTodo.css\";\n@import \"./css/header.css\";\n@import \"./css/homeContent.css\";\n@import url(\"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap\");\n\n:root {\n  --light-background: rgb(244, 252, 255);\n  --yellow: rgb(252, 228, 90);\n  --neon-green: rgb(104, 255, 10);\n  --button-bg: #2e2e2e;\n  --header-height: 85px;\n  --dropshadow: 2px 3px 2px rgb(152, 152, 152);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  position: relative;\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\n  background: var(--light-background);\n  background-size: cover;\n  max-height: 100vh;\n  overflow-y: auto;\n}\n\n#app {\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  overflow-y: auto;\n  letter-spacing: 2px;\n  width: 100%;\n  height: 100vh;\n}\n\n#input-modal {\n  width: 300px;\n  min-height: 150px;\n  height: fit-content;\n\n  button {\n    width: 100%;\n    margin: 5px 0;\n  }\n}\n\n#dialog-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1.5rem;\n}\n\nbutton {\n  background: var(--button-bg);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  width: 100px;\n  padding: 10px 3px;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\nbutton:hover {\n  background: red;\n}\n\nbutton:active {\n  transform: scale(0.9);\n}\n\ninput {\n  padding: 5px 3px;\n  border: 1px solid black;\n}\n\n@media screen and (max-width: 1024px) {\n  body {\n    flex-direction: column;\n  }\n\n  #app {\n    flex-direction: column;\n    /* padding: 20px; */\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/renderProjects.css":
/*!************************************!*\
  !*** ./src/css/renderProjects.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_renderProjects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./renderProjects.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/renderProjects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_renderProjects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_renderProjects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_renderProjects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_renderProjects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/renderTodo.css":
/*!********************************!*\
  !*** ./src/css/renderTodo.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_renderTodo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./renderTodo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/renderTodo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_renderTodo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_renderTodo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_renderTodo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_renderTodo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/warningModal.css":
/*!**********************************!*\
  !*** ./src/css/warningModal.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_warningModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./warningModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/warningModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_warningModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_warningModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_warningModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_warningModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerContent)
/* harmony export */ });
function headerContent() {
    const header = document.querySelector('header');
    const headerTitle = document.createElement('h1');
    const headerElement = document.createElement('div');
    const footerElement = document.createElement('footer');
    const hamburger = document.createElement('span');
    const close = document.createElement('p');
    const clearDB = document.createElement('button');
    const dialogWrapper = document.getElementById('dialog-wrapper');
    const clearDataWarning = document.createElement('span');
    const confirmBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const clearDataModal = document.getElementById('input-modal');

    confirmBtn.textContent = 'Confirm';
    cancelBtn.textContent = 'Cancel';
    clearDataWarning.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Are you sure you want to delete all data? This is irreversible.`;
    headerTitle.textContent = 'Task-O\'-Matic';
    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    clearDB.innerHTML = `<i class="fa-solid fa-trash-can"></i> Delete All Data`;
    footerElement.textContent = `All Rights Reserved | Yengzzkie DzignTech©`;
    
    hamburger.addEventListener('click', () => { //hamburger open event listener for mobile screens
        header.classList.add('open');
    })

    close.addEventListener('click', closeNavbar) //hamburger close event listener for mobile screens

    function closeNavbar() { //hamburger close function
        header.classList.remove('open');
    }

    clearDB.addEventListener('click', () => {
        clearDataModal.innerHTML = '';
        clearStorage();
    }); //event listener for clear storage button

    function clearStorage() { //function for clearing local storage
        clearDataModal.showModal(); //opens the deletion modal

        dialogWrapper.append(clearDataWarning, confirmBtn, cancelBtn)
        clearDataModal.append(dialogWrapper);

        confirmBtn.addEventListener('click', () => { //confirms deletion of data from local storage
            localStorage.clear(); //calls this function to delete from local storage
            dialogWrapper.innerHTML = ''; //empties the dialog wrapper
            closeModal(); //then close the modal
        });

        cancelBtn.addEventListener('click', () => { //cancels 
            closeModal(); //and close modal for data deletion
        })
    }

    function closeModal() {
        clearDataModal.close();
    }

    // clearDataModal.append(clearDataWarning, confirmBtn, cancelBtn);
    headerElement.append(hamburger, close)
    footerElement.append(clearDB);
    header.append(headerTitle, footerElement);



    return { headerElement };
}

/***/ }),

/***/ "./src/modules/homeContent.js":
/*!************************************!*\
  !*** ./src/modules/homeContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _assets_notes_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/notes.png */ "./src/assets/notes.png");
/* harmony import */ var _assets_banner_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/banner-image.png */ "./src/assets/banner-image.png");
/* harmony import */ var _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/renderProjects.js */ "./src/modules/renderProjects.js");




function homeContent() {
  const hero = document.createElement("div");
  const heroTitle = document.createElement("h1");
  const slogan = document.createElement("p");
  const heroImage = new Image();
  const bannerImage = new Image();
  const banner = document.createElement("div");
  const heroWrapper = document.createElement("div");
  const userName = document.createElement("h1");
  const getStartedBtn = document.createElement("button");
  const usernameModal = document.getElementById("input-modal");
  const dialogWrapper = document.getElementById("dialog-wrapper");
  const getName = document.createElement("span");
  const usernameInput = document.createElement("input");
  const confirmBtn = document.createElement("button");

  bannerImage.src = _assets_banner_image_png__WEBPACK_IMPORTED_MODULE_1__;
  heroImage.src = _assets_notes_png__WEBPACK_IMPORTED_MODULE_0__;
  banner.className = "banner";
  heroWrapper.className = "hero-content-wrapper";
  userName.className = "greeting";
  hero.className = "hero";
  getStartedBtn.textContent = "Add Notes";
  heroTitle.textContent = "Task-O'-Matic";
  slogan.textContent =
    "Effortless Note-taking, Anytime, Anywhere with Task-O'-Matic";

  getStartedBtn.addEventListener("click", _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

  function checkUsername() {
    //on initial page load, this function is called
    if (!localStorage.getItem("username")) {
      //then checks if a username already exists in local storage, if not
      getNameModal(); //calls the getNameModal function to get an input from the user
    } else {
      // if a username already exists, set the username text content to a greeting
      userName.textContent = `Hello, ${localStorage.getItem("username")}, let's get started!`;
    }
  }

  function getNameModal() {
    usernameModal.showModal();
    usernameModal.innerHTML = "";

    getName.textContent = "To get started, please enter your name";
    confirmBtn.textContent = "Confirm";

    confirmBtn.addEventListener("click", (event) => {
      const username = usernameInput.value;

      if (username.trim() !== "") {
        localStorage.setItem("username", username); //after setting the username in the local storage,
        usernameModal.close();
      } else {
        alert("Please enter a username."); //if a user cancels the modal, will trigger an alert to enter a name
      }
      dialogWrapper.innerHTML = "";
      checkUsername(); //call the checkUsername again to display the userName textContent with the user's name
    });

    dialogWrapper.append(getName, usernameInput, confirmBtn);
    usernameModal.append(dialogWrapper);
  }

  checkUsername();
  banner.append(userName, getStartedBtn, bannerImage);
  heroWrapper.append(heroTitle, slogan, heroImage);
  hero.append(banner, heroWrapper);

  return hero;
}


/***/ }),

/***/ "./src/modules/projectData.js":
/*!************************************!*\
  !*** ./src/modules/projectData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _assets_personal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/personal.png */ "./src/assets/personal.png");
/* harmony import */ var _assets_book_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/book.png */ "./src/assets/book.png");
/* harmony import */ var _assets_work_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/work.png */ "./src/assets/work.png");
/* harmony import */ var _assets_health_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/health.png */ "./src/assets/health.png");
/* harmony import */ var _assets_social_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/social.png */ "./src/assets/social.png");
/* harmony import */ var _assets_hobby_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/hobby.png */ "./src/assets/hobby.png");
/* harmony import */ var _assets_finance_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/finance.png */ "./src/assets/finance.png");
/* harmony import */ var _assets_grocery_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/grocery.png */ "./src/assets/grocery.png");
/* harmony import */ var _assets_other_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/other.png */ "./src/assets/other.png");










let projects = [
  {
    title: "Personal",
    description: "Personal stuff",
    image: _assets_personal_png__WEBPACK_IMPORTED_MODULE_0__,
    todo: [],
  },
  { title: "Work", description: "Go to work", image: _assets_work_png__WEBPACK_IMPORTED_MODULE_2__, todo: [] },
  {
    title: "Grocery",
    description: "Stock up those shelves",
    image: _assets_grocery_png__WEBPACK_IMPORTED_MODULE_7__,
    todo: [],
  },
  { title: "Education", description: "Read some books", image: _assets_book_png__WEBPACK_IMPORTED_MODULE_1__, todo: [] },
  {
    title: "Health",
    description: "Healthy Living",
    image: _assets_health_png__WEBPACK_IMPORTED_MODULE_3__,
    todo: [],
  },
  {
    title: "Social",
    description: "Anything about socializing",
    image: _assets_social_png__WEBPACK_IMPORTED_MODULE_4__,
    todo: [],
  },
  {
    title: "Hobbies",
    description: "Anything about hobbies",
    image: _assets_hobby_png__WEBPACK_IMPORTED_MODULE_5__,
    todo: [],
  },
  {
    title: "Finance",
    description: "All about money",
    image: _assets_finance_png__WEBPACK_IMPORTED_MODULE_6__,
    todo: [],
  },
  {
    title: "Other",
    description: "Other stuff you may think of",
    image: _assets_other_png__WEBPACK_IMPORTED_MODULE_8__,
    todo: [],
  },
];


/***/ }),

/***/ "./src/modules/renderProjects.js":
/*!***************************************!*\
  !*** ./src/modules/renderProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projectData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectData.js */ "./src/modules/projectData.js");
/* harmony import */ var _css_renderProjects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/renderProjects.css */ "./src/css/renderProjects.css");
/* harmony import */ var _renderTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTodo.js */ "./src/modules/renderTodo.js");




function renderProjects() {

  if (!localStorage.getItem('projects')) {
    // If not, set it with the projects data
    localStorage.setItem('projects', JSON.stringify(_projectData_js__WEBPACK_IMPORTED_MODULE_0__.projects));
  }

  const app = document.getElementById("app");
  const projectWrapper = document.createElement("div"); //contains the input form

  projectWrapper.className = "project-wrapper";
  app.innerHTML = ""; //clears the contents everytime a new project is added to avoid duplication of projects

  _projectData_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {
    const projectImage = new Image();
    const projectTitle = project.title;
    const projectDescription = project.description;
    const titleContainer = document.createElement("h1");
    const descContainer = document.createElement("p");
    // const taskCounter = document.createElement('span');
    const pinIcon = document.createElement('span');
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const openProjectBtn = document.createElement('button');
    
    projectImage.src = project.image;
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";
    pinIcon.innerHTML = `<i class="fa-sharp fa-solid fa-map-pin"></i>`;
    pinIcon.className = 'pin-icon';
    openProjectBtn.innerHTML = `<i class="fa-regular fa-folder-open"></i>`;
    // taskCounter.innerHTML = numOfTasks.length > 0 ? `"You have ${numOfTasks.length} tasks in this project"` : `All tasks are cleared`;
    titleContainer.append(projectTitle);
    descContainer.textContent = projectDescription;

    // *****************EXPERIMENTAL**************************
    openProjectBtn.addEventListener("click", () => {
      const projectIndex = index; // Capture the current project index
      const ul = document.createElement('ul');

      (0,_renderTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectIndex);
      ul.append(li)
      app.innerHTML = '';
      app.append(ul);
    });
// *****************EXPERIMENTAL**************************

    iconsContainer.append(openProjectBtn);
    projectContainer.append(projectImage, pinIcon, iconsContainer, titleContainer, descContainer);
    projectWrapper.append(projectContainer);
    app.append(projectWrapper);
  });

  return projectWrapper;
}

/***/ }),

/***/ "./src/modules/renderTodo.js":
/*!***********************************!*\
  !*** ./src/modules/renderTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _css_renderTodo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/renderTodo.css */ "./src/css/renderTodo.css");
/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects.js */ "./src/modules/renderProjects.js");
/* harmony import */ var _warningModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warningModal.js */ "./src/modules/warningModal.js");




function renderTodo(index) {
  const projectsJSON = localStorage.getItem("projects");
  const projects = JSON.parse(projectsJSON);
  const project = projects[index]; //get the index of the projects

  //this block below are all the variables
  const app = document.getElementById("app");
  const inputModal = document.createElement("dialog");
  const todoContainer = document.createElement("div");
  const todoInput = document.createElement("textarea");
  const addTodoBtn = document.createElement("button");
  const closeModalBtn = document.createElement("button");
  const openModalBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const ul = document.createElement("ul");
  const categoryTitle = document.createElement("h1");
  const tasks = project.todo;

  //this block below are the variable text assignment, separating them from the variables to avoid confusion

  inputModal.className = "input-modal";
  addTodoBtn.textContent = "Add Task";
  closeModalBtn.textContent = "Cancel";
  todoContainer.className = "todo-container";
  openModalBtn.innerHTML =
    '<span class="material-symbols-outlined">add_notes</span>';
  openModalBtn.setAttribute("id", "add-task");
  backBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  backBtn.className = "back-btn";
  categoryTitle.innerHTML = `${project.title} Notes <span class="material-symbols-outlined">menu_book</span>`;

  openModalBtn.addEventListener("click", () => {
    inputModal.showModal();
  });

  closeModalBtn.addEventListener("click", () => {
    inputModal.close();
  });

  addTodoBtn.addEventListener("click", addTask);

  //main function in adding new tasks
  function addTask() {
    const todoInputValue = todoInput.value;

    if (!todoInputValue) {
      (0,_warningModal_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else {
      const newDate = new Date();
      const postedDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()} / ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
      tasks.push({ todo: todoInputValue, date: postedDate });
      project.todo = tasks; // Update the project's todo array with the updated tasks
      localStorage.setItem("projects", JSON.stringify(projects)); //store the new added tasks to the local storage
      renderTodo(index); //then re-render the array by calling renderTodo function which contains the loadProjectsFromLocalStorage() function

      const lastTask = tasks[tasks.length - 1];
      console.log("Todo:", lastTask.todo);
      console.log("Date:", lastTask.date);
    }
  }

  backBtn.addEventListener("click", () => {
    (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }); //re-renders the projects when the back button is clicked

  // Clear the existing content in the app element to prevent duplicating of contents on re-render
  app.innerHTML = "";

  // Iterate through the todo array of the project and create list items for each todo
  tasks.forEach((todoItem, index) => {
    const li = document.createElement("li");
    const todoContainer = document.createElement("div");
    const todoProp = document.createElement("p");
    const dateProp = document.createElement("p");
    const deleteModal = document.createElement("dialog");
    const buttonWrapper = document.createElement("div");
    const openDeleteModalBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const deleteModalConfirmation = document.createElement("span");
    const taskToDelete = tasks[index];

    openDeleteModalBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.innerHTML = "Confirm";
    cancelBtn.textContent = "Cancel";
    deleteModalConfirmation.textContent = "Are you done with this task?";
    todoProp.textContent = todoItem.todo;
    dateProp.textContent = todoItem.date;
    dateProp.className = "date";

    todoContainer.append(todoProp, dateProp);
    li.append(todoContainer);

    function removeTask(taskIndex) {
      tasks.splice(taskIndex, 1); // Remove the task from the tasks array
      project.todo = tasks; // Update the project's todo array with the updated tasks
      localStorage.setItem("projects", JSON.stringify(projects)); // Update localStorage with the updated projects

      // Remove the task's corresponding list item from the DOM
      ul.removeChild(ul.childNodes[taskIndex]);

      // If there are no more tasks, remove the dialog element and re-render only the current project
      if (tasks.length === 0) {
        inputModal.close(); // Close the dialog
        inputModal.remove(); // Remove the dialog element from the DOM
        (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Re-render only the current project
      }
    }

    openDeleteModalBtn.addEventListener("click", () => {
      //opens the delete confirmation modal
      deleteModal.showModal();
    });

    cancelBtn.addEventListener("click", () => {
      //closes the delete confirmation modal
      deleteModal.close();
    });

    // Inside the forEach loop to create delete buttons for each task
    deleteBtn.addEventListener("click", () => {
      const taskIndex = tasks.indexOf(todoItem); // Find the index of the task to remove
      removeTask(taskIndex); // Call the removeTask function with the index to remove
    });

    buttonWrapper.append(deleteBtn, cancelBtn);
    deleteModal.append(deleteModalConfirmation, buttonWrapper);
    li.append(openDeleteModalBtn, deleteModal);
    ul.append(li);
  });

  // Append the unordered list to the app element
  inputModal.append(todoInput, addTodoBtn, closeModalBtn);
  todoContainer.append(categoryTitle, ul, openModalBtn, backBtn);
  app.append(todoContainer, inputModal);
}


/***/ }),

/***/ "./src/modules/warningModal.js":
/*!*************************************!*\
  !*** ./src/modules/warningModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warningModal)
/* harmony export */ });
/* harmony import */ var _css_warningModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/warningModal.css */ "./src/css/warningModal.css");


function warningModal() {
  const warningModal = document.createElement("dialog");
  const warningDialog = document.createElement("span");
  const warningCloseBtn = document.createElement("button");

  warningModal.className = 'warning-modal';
  warningCloseBtn.textContent = "Close";
  warningDialog.textContent = "Please fill up the text field, do not procrastinate!";

  warningCloseBtn.addEventListener("click", () => {
    warningModal.close();
  });

  warningModal.append(warningDialog, warningCloseBtn);
  document.body.append(warningModal);

  warningModal.showModal();
};

/***/ }),

/***/ "./src/assets/banner-image.png":
/*!*************************************!*\
  !*** ./src/assets/banner-image.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8585c05242e269e7a413.png";

/***/ }),

/***/ "./src/assets/book.png":
/*!*****************************!*\
  !*** ./src/assets/book.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f39cf3d24666a2d379a.png";

/***/ }),

/***/ "./src/assets/finance.png":
/*!********************************!*\
  !*** ./src/assets/finance.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b967229c9851525e0cc4.png";

/***/ }),

/***/ "./src/assets/grocery.png":
/*!********************************!*\
  !*** ./src/assets/grocery.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "426b74aa2296b7feaf07.png";

/***/ }),

/***/ "./src/assets/health.png":
/*!*******************************!*\
  !*** ./src/assets/health.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "259bc1382c5390028f6c.png";

/***/ }),

/***/ "./src/assets/hobby.png":
/*!******************************!*\
  !*** ./src/assets/hobby.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78592079e87a7ced8771.png";

/***/ }),

/***/ "./src/assets/notes.png":
/*!******************************!*\
  !*** ./src/assets/notes.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a353fc64589aa8ee0872.png";

/***/ }),

/***/ "./src/assets/other.png":
/*!******************************!*\
  !*** ./src/assets/other.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76284ccbdc6c5fb8894c.png";

/***/ }),

/***/ "./src/assets/personal.png":
/*!*********************************!*\
  !*** ./src/assets/personal.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28ec5b21f8dfee4198ff.png";

/***/ }),

/***/ "./src/assets/social.png":
/*!*******************************!*\
  !*** ./src/assets/social.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f964b2c6527259de503.png";

/***/ }),

/***/ "./src/assets/work.png":
/*!*****************************!*\
  !*** ./src/assets/work.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e14b0bb3d0624bcc8e9b.png";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderProjects.js */ "./src/modules/renderProjects.js");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homeContent.js */ "./src/modules/homeContent.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





function render() {
    const header = document.querySelector('header');
    const { headerElement } = (0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    header.append(headerElement);
}

function updateContent(newContent) {
    const app = document.getElementById('app');
    app.innerHTML = '';

    app.append(newContent)

    return app;
}

const homeBtn = document.getElementById('home');
homeBtn.innerHTML = `<i class="fa-solid fa-house"></i> Home`;
homeBtn.addEventListener('click', () => {
    updateContent((0,_modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
})

const notesBtn = document.getElementById('notes');
notesBtn.innerHTML = `<i class="fa-solid fa-align-left"></i> My Notes`;
notesBtn.addEventListener('click', () => {
    updateContent((0,_modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
})

const instructionsBtn = document.getElementById('instructions');
instructionsBtn.innerHTML = `<i class="fa-solid fa-person-chalkboard"></i> Instructions`;
instructionsBtn.addEventListener('click', () => {
    updateContent((0,_modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
})

render();
updateContent((0,_modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])()); //calls homeContent on page load as default landing page
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLHNKQUFzSixxQ0FBcUMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLG9CQUFvQixzQkFBc0IsT0FBTyxLQUFLLG1CQUFtQiwwQkFBMEIsbUNBQW1DLGlEQUFpRCxtQkFBbUIseUJBQXlCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixlQUFlLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLE9BQU8sR0FBRywyQ0FBMkMscUJBQXFCLHNCQUFzQix1QkFBdUIscURBQXFELE9BQU8sb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQix1QkFBdUIsT0FBTyxJQUFJLHFCQUFxQjtBQUNybUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsSUFBSSxrQkFBa0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkZBQTZGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFNBQVMsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLDZDQUE2Qyx5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUNBQXVDLDBCQUEwQixrQkFBa0Isb0JBQW9CLHlCQUF5QixtQkFBbUIsdUJBQXVCLFlBQVksNkJBQTZCLDZCQUE2QixxQkFBcUIsT0FBTyxtQkFBbUIsNkJBQTZCLGtCQUFrQixxQkFBcUIsNEJBQTRCLG9DQUFvQyxPQUFPLFlBQVksMEJBQTBCLE9BQU8sYUFBYSw2QkFBNkIsbUJBQW1CLG9CQUFvQix1QkFBdUIsNEJBQTRCLHVCQUF1QixPQUFPLFdBQVcsMkJBQTJCLHlCQUF5Qix1QkFBdUIsT0FBTyxjQUFjLDJCQUEyQiwwQkFBMEIsT0FBTyxnQkFBZ0IsdUJBQXVCLDZCQUE2Qix1QkFBdUIsdUJBQXVCLE9BQU8sMEJBQTBCLDZCQUE2QixrQkFBa0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIsaUNBQWlDLDBCQUEwQiwyQkFBMkIsMkJBQTJCLCtCQUErQix5Q0FBeUMsV0FBVywwQkFBMEIsNEJBQTRCLDBCQUEwQixXQUFXLE9BQU8sR0FBRyxzQkFBc0Isb0JBQW9CLGlFQUFpRSxnQkFBZ0IsdUJBQXVCLGtCQUFrQixvQkFBb0IsR0FBRywyQkFBMkIsVUFBVSwrQkFBK0IsT0FBTyxZQUFZLDhCQUE4QixPQUFPLEdBQUcsMkNBQTJDLDBCQUEwQix1QkFBdUIsaUJBQWlCLDJCQUEyQixXQUFXLE9BQU8sNEJBQTRCLHVFQUF1RSxnQ0FBZ0Msb0JBQW9CLE9BQU8sR0FBRyxtQkFBbUI7QUFDbGtHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxZQUFZLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxX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QUFLLHdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL2hvbWVDb250ZW50LmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvcmVuZGVyVG9kby5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3Mvd2FybmluZ01vZGFsLmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3JlbmRlclByb2plY3RzLmNzcz9mNjJmIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzP2U2NDgiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3Mvd2FybmluZ01vZGFsLmNzcz83M2I4Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvaG9tZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyVG9kby5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvd2FybmluZ01vZGFsLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHNlbGVjdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5kaWFsb2cge1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcblxuICAgIC5jbG9zZS1tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbn1cblxuLmZvcm0td3JhcHBlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyBcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxOCAyMTggMjE4KTtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggLjVyZW0gcmdiKDIzMCwgMjMwLCAyMzApO1xuICAgIH1cblxuICAgIGZvcm0gaW5wdXQge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNlbGVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG5cXG4gICAgLmNsb3NlLW1vZGFsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcblxcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyBcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTggMjE4IDIxOCk7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mb3JtLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAuNXJlbSByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIH1cXG5cXG4gICAgZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0IHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmODc5NDtcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMiU7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICB9XG5cbiAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm90dG9tOiAzJTtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGhzbGEoNjAsIDEwMCUsIDgwJSwgMC41ODIpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLW91dDtcblxuICAgICAgICAub3Blbi1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDMlO1xuICAgICAgICAgICAgcmlnaHQ6IC0yMiU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIlO1xuICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhlYWRlci5vcGVuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7O0lBRVo7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixxQ0FBcUM7SUFDekM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCOztRQUVoQjtZQUNJLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLDRCQUE0QjtZQUM1QixXQUFXO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsVUFBVTs7UUFFVjtZQUNJLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJLFdBQVc7UUFDZjtJQUNKO0FBQ0o7Ozs7O0FBS0E7SUFDSTtRQUNJLGVBQWU7UUFDZixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLGtDQUFrQzs7UUFFbEM7WUFDSSxjQUFjO1lBQ2QsZUFBZTtZQUNmLE9BQU87WUFDUCxXQUFXO1lBQ1gsVUFBVTs7WUFFVjtnQkFDSSxpQkFBaUI7WUFDckI7UUFDSjs7UUFFQTtZQUNJLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsT0FBTztZQUNQLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsVUFBVTs7WUFFVjtnQkFDSSxpQkFBaUI7WUFDckI7UUFDSjtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCOztRQUV4QjtZQUNJLFVBQVU7WUFDVixlQUFlO1lBQ2YsV0FBVztRQUNmOztRQUVBO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmODc5NDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogOTk5O1xcblxcbiAgICBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAyJTtcXG4gICAgICAgIGxlZnQ6IDIlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAub3Blbi1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYm90dG9tOiAzJTtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGhzbGEoNjAsIDEwMCUsIDgwJSwgMC41ODIpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2Utb3V0O1xcblxcbiAgICAgICAgLm9wZW4tYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgdG9wOiAzJTtcXG4gICAgICAgICAgICByaWdodDogLTIyJTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcblxcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2xvc2UtYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAyJTtcXG4gICAgICAgICAgICByaWdodDogNSU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG5cXG4gICAgICAgICAgICBpIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhlYWRlci5vcGVuIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxNjVkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyLCAwLjcxNiksXG4gICAgICByZ2JhKDI1NCwgMjU0LCAxNjEsIDAuNTg3KSxcbiAgICAgIHJnYmEoMjQwLCAyNDAsIDIzMiwgMC41OTQpXG4gICAgKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpIHJvdGF0ZSgxNWRlZyk7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luOiA1Y2FwO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVybyBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuXG4gIC5iYW5uZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLmhlcm8tY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufTtcblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZUNvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTs7RUFFYjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25COzs7OztLQUtDO0lBQ0QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQjtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFFBQVE7TUFDUix5Q0FBeUM7TUFDekMsV0FBVztJQUNiOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTs7SUFFYjtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgLmJhbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDE2NWRlZyxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyLCAwLjcxNiksXFxuICAgICAgcmdiYSgyNTQsIDI1NCwgMTYxLCAwLjU4NyksXFxuICAgICAgcmdiYSgyNDAsIDI0MCwgMjMyLCAwLjU5NClcXG4gICAgKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgaDEge1xcbiAgICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSkgcm90YXRlKDE1ZGVnKTtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXJnaW46IDVjYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5oZXJvIGltZyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG5cXG4gIC5iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICBib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIHAge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICB9XFxufTtcXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDByZW0gLjhyZW0gI2FmYWZhZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaDEge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAucGluLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNSU7XG4gICAgICAgIGxlZnQ6IC03JTtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBjb2xvcjogIzRmNGY0Zjs7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIC5pY29ucy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcblxuICAgICAgICAmIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcm9qZWN0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMWZyLCAxZnIpKTtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5cblxuQGtleWZyYW1lcyBncm93VXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5wcm9qZWN0LXdyYXBwZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNXB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEI7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxTQUFTOztRQUVUO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1lBQ2YsMEJBQTBCO1FBQzlCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLFdBQVc7UUFDZjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTs7UUFFWjtZQUNJLFlBQVk7UUFDaEI7SUFDSjs7O0lBR0E7UUFDSSw0REFBNEQ7UUFDNUQscUJBQXFCO1FBQ3JCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMHJlbSAuOHJlbSAjYWZhZmFmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgLnBpbi1pY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMyU7XFxuICAgICAgICByaWdodDogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAtNSU7XFxuICAgICAgICBsZWZ0OiAtNyU7XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0Zjs7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICAuaWNvbnMtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuXFxuICAgICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dmE7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDFmciwgMWZyKSk7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcblxcbkBrZXlmcmFtZXMgZ3Jvd1VwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAucHJvamVjdC1jb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3Qtd3JhcHBlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICBkaXYge1xuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZGlhbG9nIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAgICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC41cmVtIDFyZW0gI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuXG4gICAgI2FkZC10YXNrIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDUlO1xuICAgICAgICByaWdodDogMyU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tZHJvcHNoYWRvdykpO1xuICAgIH1cblxuICAgIC5iYWNrLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgcmlnaHQ6IDMlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpKTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41cmVtKTtcbiAgICB9XG59XG5cbiNhcHAgLmlucHV0LW1vZGFsIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuZGlhbG9nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYW5pbWF0aW9uOiBzY2FsZVVwIC4zcztcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVVcCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI2FwcCAuaW5wdXQtbW9kYWwge1xuICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG87IFxuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjs7SUFFaEI7UUFDSTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixnQkFBZ0I7UUFDcEI7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsa0JBQWtCOztRQUVsQjtZQUNJLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsWUFBWTs7WUFFWjtnQkFDSSxrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixjQUFjO1lBQ2xCO1FBQ0o7SUFDSjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7O0lBR2xCO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixTQUFTO1FBQ1QsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG1EQUFtRDtRQUNuRCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcblxcbiAgICBkaXYge1xcbiAgICAgICAgLmRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBkaWFsb2cge1xcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XFxuXFxuICAgICAgICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuNXJlbSAxcmVtICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcblxcbiAgICAjYWRkLXRhc2sge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgYm90dG9tOiA1JTtcXG4gICAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tZHJvcHNoYWRvdykpO1xcbiAgICB9XFxuXFxuICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggM3B4IDJweCByZ2IoMTUyLCAxNTIsIDE1MikpO1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41cmVtKTtcXG4gICAgfVxcbn1cXG5cXG4jYXBwIC5pbnB1dC1tb2RhbCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgICBoZWlnaHQ6IDg1cHg7XFxuICAgICAgICB3aWR0aDogMzMwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAuM3M7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZVVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgI2FwcCAuaW5wdXQtbW9kYWwge1xcbiAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvOyBcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2FybmluZy1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2FybmluZ01vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTs7SUFFYjtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2FybmluZy1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvcmVuZGVyVG9kby5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9ob21lQ29udGVudC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNDQsIDI1MiwgMjU1KTtcbiAgLS15ZWxsb3c6IHJnYigyNTIsIDIyOCwgOTApO1xuICAtLW5lb24tZ3JlZW46IHJnYigxMDQsIDI1NSwgMTApO1xuICAtLWJ1dHRvbi1iZzogIzJlMmUyZTtcbiAgLS1oZWFkZXItaGVpZ2h0OiA4NXB4O1xuICAtLWRyb3BzaGFkb3c6IDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNhcHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI2lucHV0LW1vZGFsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbn1cblxuI2RpYWxvZy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICNhcHAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNFLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjs7RUFFbkI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Nzcy9yZW5kZXJUb2RvLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvaGVhZGVyLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvaG9tZUNvbnRlbnQuY3NzXFxcIjtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNDQsIDI1MiwgMjU1KTtcXG4gIC0teWVsbG93OiByZ2IoMjUyLCAyMjgsIDkwKTtcXG4gIC0tbmVvbi1ncmVlbjogcmdiKDEwNCwgMjU1LCAxMCk7XFxuICAtLWJ1dHRvbi1iZzogIzJlMmUyZTtcXG4gIC0taGVhZGVyLWhlaWdodDogODVweDtcXG4gIC0tZHJvcHNoYWRvdzogMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaW5wdXQtbW9kYWwge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICB9XFxufVxcblxcbiNkaWFsb2ctd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHggM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHggM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAjYXBwIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyUHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyVG9kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclRvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2xlYXJEQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRpYWxvZ1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLXdyYXBwZXInKTtcbiAgICBjb25zdCBjbGVhckRhdGFXYXJuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjbGVhckRhdGFNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1tb2RhbCcpO1xuXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjbGVhckRhdGFXYXJuaW5nLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyaWFuZ2xlLWV4Y2xhbWF0aW9uXCI+PC9pPiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBkYXRhPyBUaGlzIGlzIGlycmV2ZXJzaWJsZS5gO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2stT1xcJy1NYXRpYyc7XG4gICAgaGFtYnVyZ2VyLmNsYXNzTmFtZSA9ICdvcGVuLWJ1dHRvbic7XG4gICAgY2xvc2UuY2xhc3NOYW1lID0gJ2Nsb3NlLWJ1dHRvbic7XG4gICAgaGFtYnVyZ2VyLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJ1cmdlclwiPjwvaT5gO1xuICAgIGNsb3NlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1sZWZ0XCI+PC9pPmA7XG4gICAgY2xlYXJEQi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIj48L2k+IERlbGV0ZSBBbGwgRGF0YWA7XG4gICAgZm9vdGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGBBbGwgUmlnaHRzIFJlc2VydmVkIHwgWWVuZ3p6a2llIER6aWduVGVjaMKpYDtcbiAgICBcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vaGFtYnVyZ2VyIG9wZW4gZXZlbnQgbGlzdGVuZXIgZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgfSlcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VOYXZiYXIpIC8vaGFtYnVyZ2VyIGNsb3NlIGV2ZW50IGxpc3RlbmVyIGZvciBtb2JpbGUgc2NyZWVuc1xuXG4gICAgZnVuY3Rpb24gY2xvc2VOYXZiYXIoKSB7IC8vaGFtYnVyZ2VyIGNsb3NlIGZ1bmN0aW9uXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgY2xlYXJEQi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJEYXRhTW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNsZWFyU3RvcmFnZSgpO1xuICAgIH0pOyAvL2V2ZW50IGxpc3RlbmVyIGZvciBjbGVhciBzdG9yYWdlIGJ1dHRvblxuXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkgeyAvL2Z1bmN0aW9uIGZvciBjbGVhcmluZyBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGNsZWFyRGF0YU1vZGFsLnNob3dNb2RhbCgpOyAvL29wZW5zIHRoZSBkZWxldGlvbiBtb2RhbFxuXG4gICAgICAgIGRpYWxvZ1dyYXBwZXIuYXBwZW5kKGNsZWFyRGF0YVdhcm5pbmcsIGNvbmZpcm1CdG4sIGNhbmNlbEJ0bilcbiAgICAgICAgY2xlYXJEYXRhTW9kYWwuYXBwZW5kKGRpYWxvZ1dyYXBwZXIpO1xuXG4gICAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vY29uZmlybXMgZGVsZXRpb24gb2YgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpOyAvL2NhbGxzIHRoaXMgZnVuY3Rpb24gdG8gZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgZGlhbG9nV3JhcHBlci5pbm5lckhUTUwgPSAnJzsgLy9lbXB0aWVzIHRoZSBkaWFsb2cgd3JhcHBlclxuICAgICAgICAgICAgY2xvc2VNb2RhbCgpOyAvL3RoZW4gY2xvc2UgdGhlIG1vZGFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy9jYW5jZWxzIFxuICAgICAgICAgICAgY2xvc2VNb2RhbCgpOyAvL2FuZCBjbG9zZSBtb2RhbCBmb3IgZGF0YSBkZWxldGlvblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGNsZWFyRGF0YU1vZGFsLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJEYXRhTW9kYWwuYXBwZW5kKGNsZWFyRGF0YVdhcm5pbmcsIGNvbmZpcm1CdG4sIGNhbmNlbEJ0bik7XG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmQoaGFtYnVyZ2VyLCBjbG9zZSlcbiAgICBmb290ZXJFbGVtZW50LmFwcGVuZChjbGVhckRCKTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlLCBmb290ZXJFbGVtZW50KTtcblxuXG5cbiAgICByZXR1cm4geyBoZWFkZXJFbGVtZW50IH07XG59IiwiaW1wb3J0IG5vdGVzUE5HIGZyb20gXCIuLi9hc3NldHMvbm90ZXMucG5nXCI7XG5pbXBvcnQgYmFubmVyUE5HIGZyb20gXCIuLi9hc3NldHMvYmFubmVyLWltYWdlLnBuZ1wiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuLi9tb2R1bGVzL3JlbmRlclByb2plY3RzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb250ZW50KCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaGVyb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGdldFN0YXJ0ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB1c2VybmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1tb2RhbFwiKTtcbiAgY29uc3QgZGlhbG9nV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nLXdyYXBwZXJcIik7XG4gIGNvbnN0IGdldE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYmFubmVySW1hZ2Uuc3JjID0gYmFubmVyUE5HO1xuICBoZXJvSW1hZ2Uuc3JjID0gbm90ZXNQTkc7XG4gIGJhbm5lci5jbGFzc05hbWUgPSBcImJhbm5lclwiO1xuICBoZXJvV3JhcHBlci5jbGFzc05hbWUgPSBcImhlcm8tY29udGVudC13cmFwcGVyXCI7XG4gIHVzZXJOYW1lLmNsYXNzTmFtZSA9IFwiZ3JlZXRpbmdcIjtcbiAgaGVyby5jbGFzc05hbWUgPSBcImhlcm9cIjtcbiAgZ2V0U3RhcnRlZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5vdGVzXCI7XG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGFzay1PJy1NYXRpY1wiO1xuICBzbG9nYW4udGV4dENvbnRlbnQgPVxuICAgIFwiRWZmb3J0bGVzcyBOb3RlLXRha2luZywgQW55dGltZSwgQW55d2hlcmUgd2l0aCBUYXNrLU8nLU1hdGljXCI7XG5cbiAgZ2V0U3RhcnRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyUHJvamVjdHMpO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVXNlcm5hbWUoKSB7XG4gICAgLy9vbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWRcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpIHtcbiAgICAgIC8vdGhlbiBjaGVja3MgaWYgYSB1c2VybmFtZSBhbHJlYWR5IGV4aXN0cyBpbiBsb2NhbCBzdG9yYWdlLCBpZiBub3RcbiAgICAgIGdldE5hbWVNb2RhbCgpOyAvL2NhbGxzIHRoZSBnZXROYW1lTW9kYWwgZnVuY3Rpb24gdG8gZ2V0IGFuIGlucHV0IGZyb20gdGhlIHVzZXJcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYSB1c2VybmFtZSBhbHJlYWR5IGV4aXN0cywgc2V0IHRoZSB1c2VybmFtZSB0ZXh0IGNvbnRlbnQgdG8gYSBncmVldGluZ1xuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBgSGVsbG8sICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKX0sIGxldCdzIGdldCBzdGFydGVkIWA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZU1vZGFsKCkge1xuICAgIHVzZXJuYW1lTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgdXNlcm5hbWVNb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZ2V0TmFtZS50ZXh0Q29udGVudCA9IFwiVG8gZ2V0IHN0YXJ0ZWQsIHBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIjtcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcblxuICAgICAgaWYgKHVzZXJuYW1lLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTsgLy9hZnRlciBzZXR0aW5nIHRoZSB1c2VybmFtZSBpbiB0aGUgbG9jYWwgc3RvcmFnZSxcbiAgICAgICAgdXNlcm5hbWVNb2RhbC5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB1c2VybmFtZS5cIik7IC8vaWYgYSB1c2VyIGNhbmNlbHMgdGhlIG1vZGFsLCB3aWxsIHRyaWdnZXIgYW4gYWxlcnQgdG8gZW50ZXIgYSBuYW1lXG4gICAgICB9XG4gICAgICBkaWFsb2dXcmFwcGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjaGVja1VzZXJuYW1lKCk7IC8vY2FsbCB0aGUgY2hlY2tVc2VybmFtZSBhZ2FpbiB0byBkaXNwbGF5IHRoZSB1c2VyTmFtZSB0ZXh0Q29udGVudCB3aXRoIHRoZSB1c2VyJ3MgbmFtZVxuICAgIH0pO1xuXG4gICAgZGlhbG9nV3JhcHBlci5hcHBlbmQoZ2V0TmFtZSwgdXNlcm5hbWVJbnB1dCwgY29uZmlybUJ0bik7XG4gICAgdXNlcm5hbWVNb2RhbC5hcHBlbmQoZGlhbG9nV3JhcHBlcik7XG4gIH1cblxuICBjaGVja1VzZXJuYW1lKCk7XG4gIGJhbm5lci5hcHBlbmQodXNlck5hbWUsIGdldFN0YXJ0ZWRCdG4sIGJhbm5lckltYWdlKTtcbiAgaGVyb1dyYXBwZXIuYXBwZW5kKGhlcm9UaXRsZSwgc2xvZ2FuLCBoZXJvSW1hZ2UpO1xuICBoZXJvLmFwcGVuZChiYW5uZXIsIGhlcm9XcmFwcGVyKTtcblxuICByZXR1cm4gaGVybztcbn1cbiIsImltcG9ydCBwZXJzb25hbFBORyBmcm9tICcuLi9hc3NldHMvcGVyc29uYWwucG5nJztcbmltcG9ydCByZWFkUE5HIGZyb20gJy4uL2Fzc2V0cy9ib29rLnBuZyc7XG5pbXBvcnQgd29ya1BORyBmcm9tICcuLi9hc3NldHMvd29yay5wbmcnO1xuaW1wb3J0IGhlYWx0aFBORyBmcm9tICcuLi9hc3NldHMvaGVhbHRoLnBuZyc7XG5pbXBvcnQgc29jaWFsUE5HIGZyb20gJy4uL2Fzc2V0cy9zb2NpYWwucG5nJztcbmltcG9ydCBob2JiaWVzUE5HIGZyb20gJy4uL2Fzc2V0cy9ob2JieS5wbmcnO1xuaW1wb3J0IGZpbmFuY2VQTkcgZnJvbSAnLi4vYXNzZXRzL2ZpbmFuY2UucG5nJztcbmltcG9ydCBncm9jZXJ5UE5HIGZyb20gJy4uL2Fzc2V0cy9ncm9jZXJ5LnBuZyc7XG5pbXBvcnQgb3RoZXJQTkcgZnJvbSAnLi4vYXNzZXRzL290aGVyLnBuZyc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQZXJzb25hbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbmFsIHN0dWZmXCIsXG4gICAgaW1hZ2U6IHBlcnNvbmFsUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7IHRpdGxlOiBcIldvcmtcIiwgZGVzY3JpcHRpb246IFwiR28gdG8gd29ya1wiLCBpbWFnZTogd29ya1BORywgdG9kbzogW10gfSxcbiAge1xuICAgIHRpdGxlOiBcIkdyb2NlcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdG9jayB1cCB0aG9zZSBzaGVsdmVzXCIsXG4gICAgaW1hZ2U6IGdyb2NlcnlQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHsgdGl0bGU6IFwiRWR1Y2F0aW9uXCIsIGRlc2NyaXB0aW9uOiBcIlJlYWQgc29tZSBib29rc1wiLCBpbWFnZTogcmVhZFBORywgdG9kbzogW10gfSxcbiAge1xuICAgIHRpdGxlOiBcIkhlYWx0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhlYWx0aHkgTGl2aW5nXCIsXG4gICAgaW1hZ2U6IGhlYWx0aFBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNvY2lhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueXRoaW5nIGFib3V0IHNvY2lhbGl6aW5nXCIsXG4gICAgaW1hZ2U6IHNvY2lhbFBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkhvYmJpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnl0aGluZyBhYm91dCBob2JiaWVzXCIsXG4gICAgaW1hZ2U6IGhvYmJpZXNQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGaW5hbmNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsIGFib3V0IG1vbmV5XCIsXG4gICAgaW1hZ2U6IGZpbmFuY2VQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPdGhlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk90aGVyIHN0dWZmIHlvdSBtYXkgdGhpbmsgb2ZcIixcbiAgICBpbWFnZTogb3RoZXJQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3JlbmRlclByb2plY3RzLmNzc1wiO1xuaW1wb3J0IHJlbmRlclRvZG8gZnJvbSAnLi9yZW5kZXJUb2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG5cbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgIC8vIElmIG5vdCwgc2V0IGl0IHdpdGggdGhlIHByb2plY3RzIGRhdGFcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG5cbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jb250YWlucyB0aGUgaW5wdXQgZm9ybVxuXG4gIHByb2plY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC13cmFwcGVyXCI7XG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFycyB0aGUgY29udGVudHMgZXZlcnl0aW1lIGEgbmV3IHByb2plY3QgaXMgYWRkZWQgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcHJvamVjdHNcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBkZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gY29uc3QgdGFza0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcGluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3BlblByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBwcm9qZWN0SW1hZ2Uuc3JjID0gcHJvamVjdC5pbWFnZTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jb250YWluZXJcIjtcbiAgICBpY29uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImljb25zLWNvbnRhaW5lclwiO1xuICAgIHBpbkljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbWFwLXBpblwiPjwvaT5gO1xuICAgIHBpbkljb24uY2xhc3NOYW1lID0gJ3Bpbi1pY29uJztcbiAgICBvcGVuUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWZvbGRlci1vcGVuXCI+PC9pPmA7XG4gICAgLy8gdGFza0NvdW50ZXIuaW5uZXJIVE1MID0gbnVtT2ZUYXNrcy5sZW5ndGggPiAwID8gYFwiWW91IGhhdmUgJHtudW1PZlRhc2tzLmxlbmd0aH0gdGFza3MgaW4gdGhpcyBwcm9qZWN0XCJgIDogYEFsbCB0YXNrcyBhcmUgY2xlYXJlZGA7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgZGVzY0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBvcGVuUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gaW5kZXg7IC8vIENhcHR1cmUgdGhlIGN1cnJlbnQgcHJvamVjdCBpbmRleFxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICByZW5kZXJUb2RvKHByb2plY3RJbmRleCk7XG4gICAgICB1bC5hcHBlbmQobGkpXG4gICAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgICBhcHAuYXBwZW5kKHVsKTtcbiAgICB9KTtcbi8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGljb25zQ29udGFpbmVyLmFwcGVuZChvcGVuUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdEltYWdlLCBwaW5JY29uLCBpY29uc0NvbnRhaW5lciwgdGl0bGVDb250YWluZXIsIGRlc2NDb250YWluZXIpO1xuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBhcHAuYXBwZW5kKHByb2plY3RXcmFwcGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RXcmFwcGVyO1xufSIsImltcG9ydCBcIi4uL2Nzcy9yZW5kZXJUb2RvLmNzc1wiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3JlbmRlclByb2plY3RzLmpzXCI7XG5pbXBvcnQgd2FybmluZ01vZGFsIGZyb20gXCIuL3dhcm5pbmdNb2RhbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvKGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShwcm9qZWN0c0pTT04pO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdOyAvL2dldCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3RzXG5cbiAgLy90aGlzIGJsb2NrIGJlbG93IGFyZSBhbGwgdGhlIHZhcmlhYmxlc1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgY29uc3QgaW5wdXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3QudG9kbztcblxuICAvL3RoaXMgYmxvY2sgYmVsb3cgYXJlIHRoZSB2YXJpYWJsZSB0ZXh0IGFzc2lnbm1lbnQsIHNlcGFyYXRpbmcgdGhlbSBmcm9tIHRoZSB2YXJpYWJsZXMgdG8gYXZvaWQgY29uZnVzaW9uXG5cbiAgaW5wdXRNb2RhbC5jbGFzc05hbWUgPSBcImlucHV0LW1vZGFsXCI7XG4gIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIGNsb3NlTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG9kby1jb250YWluZXJcIjtcbiAgb3Blbk1vZGFsQnRuLmlubmVySFRNTCA9XG4gICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZF9ub3Rlczwvc3Bhbj4nO1xuICBvcGVuTW9kYWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcbiAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xuICBiYWNrQnRuLmNsYXNzTmFtZSA9IFwiYmFjay1idG5cIjtcbiAgY2F0ZWdvcnlUaXRsZS5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LnRpdGxlfSBOb3RlcyA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5tZW51X2Jvb2s8L3NwYW4+YDtcblxuICBvcGVuTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbnB1dE1vZGFsLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXRNb2RhbC5jbG9zZSgpO1xuICB9KTtcblxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcblxuICAvL21haW4gZnVuY3Rpb24gaW4gYWRkaW5nIG5ldyB0YXNrc1xuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IHRvZG9JbnB1dFZhbHVlID0gdG9kb0lucHV0LnZhbHVlO1xuXG4gICAgaWYgKCF0b2RvSW5wdXRWYWx1ZSkge1xuICAgICAgd2FybmluZ01vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgcG9zdGVkRGF0ZSA9IGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXdEYXRlLmdldE1vbnRoKCl9LSR7bmV3RGF0ZS5nZXREYXRlKCl9IC8gJHtuZXdEYXRlLmdldEhvdXJzKCl9OiR7bmV3RGF0ZS5nZXRNaW51dGVzKCl9OiR7bmV3RGF0ZS5nZXRTZWNvbmRzKCl9YDtcbiAgICAgIHRhc2tzLnB1c2goeyB0b2RvOiB0b2RvSW5wdXRWYWx1ZSwgZGF0ZTogcG9zdGVkRGF0ZSB9KTtcbiAgICAgIHByb2plY3QudG9kbyA9IHRhc2tzOyAvLyBVcGRhdGUgdGhlIHByb2plY3QncyB0b2RvIGFycmF5IHdpdGggdGhlIHVwZGF0ZWQgdGFza3NcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgLy9zdG9yZSB0aGUgbmV3IGFkZGVkIHRhc2tzIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICByZW5kZXJUb2RvKGluZGV4KTsgLy90aGVuIHJlLXJlbmRlciB0aGUgYXJyYXkgYnkgY2FsbGluZyByZW5kZXJUb2RvIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIHRoZSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkgZnVuY3Rpb25cblxuICAgICAgY29uc3QgbGFzdFRhc2sgPSB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVG9kbzpcIiwgbGFzdFRhc2sudG9kbyk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGU6XCIsIGxhc3RUYXNrLmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9KTsgLy9yZS1yZW5kZXJzIHRoZSBwcm9qZWN0cyB3aGVuIHRoZSBiYWNrIGJ1dHRvbiBpcyBjbGlja2VkXG5cbiAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGNvbnRlbnQgaW4gdGhlIGFwcCBlbGVtZW50IHRvIHByZXZlbnQgZHVwbGljYXRpbmcgb2YgY29udGVudHMgb24gcmUtcmVuZGVyXG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgdG9kbyBhcnJheSBvZiB0aGUgcHJvamVjdCBhbmQgY3JlYXRlIGxpc3QgaXRlbXMgZm9yIGVhY2ggdG9kb1xuICB0YXNrcy5mb3JFYWNoKCh0b2RvSXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRhdGVQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wZW5EZWxldGVNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFza3NbaW5kZXhdO1xuXG4gICAgb3BlbkRlbGV0ZU1vZGFsQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT4nO1xuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkNvbmZpcm1cIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uLnRleHRDb250ZW50ID0gXCJBcmUgeW91IGRvbmUgd2l0aCB0aGlzIHRhc2s/XCI7XG4gICAgdG9kb1Byb3AudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50b2RvO1xuICAgIGRhdGVQcm9wLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZGF0ZTtcbiAgICBkYXRlUHJvcC5jbGFzc05hbWUgPSBcImRhdGVcIjtcblxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9wLCBkYXRlUHJvcCk7XG4gICAgbGkuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpOyAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgdGFza3MgYXJyYXlcbiAgICAgIHByb2plY3QudG9kbyA9IHRhc2tzOyAvLyBVcGRhdGUgdGhlIHByb2plY3QncyB0b2RvIGFycmF5IHdpdGggdGhlIHVwZGF0ZWQgdGFza3NcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSB3aXRoIHRoZSB1cGRhdGVkIHByb2plY3RzXG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgdGFzaydzIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtIGZyb20gdGhlIERPTVxuICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuY2hpbGROb2Rlc1t0YXNrSW5kZXhdKTtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG1vcmUgdGFza3MsIHJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnQgYW5kIHJlLXJlbmRlciBvbmx5IHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5wdXRNb2RhbC5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGlhbG9nXG4gICAgICAgIGlucHV0TW9kYWwucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7IC8vIFJlLXJlbmRlciBvbmx5IHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuRGVsZXRlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vb3BlbnMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gbW9kYWxcbiAgICAgIGRlbGV0ZU1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL2Nsb3NlcyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBtb2RhbFxuICAgICAgZGVsZXRlTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIEluc2lkZSB0aGUgZm9yRWFjaCBsb29wIHRvIGNyZWF0ZSBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCB0YXNrXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5pbmRleE9mKHRvZG9JdGVtKTsgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIHRhc2sgdG8gcmVtb3ZlXG4gICAgICByZW1vdmVUYXNrKHRhc2tJbmRleCk7IC8vIENhbGwgdGhlIHJlbW92ZVRhc2sgZnVuY3Rpb24gd2l0aCB0aGUgaW5kZXggdG8gcmVtb3ZlXG4gICAgfSk7XG5cbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZChkZWxldGVCdG4sIGNhbmNlbEJ0bik7XG4gICAgZGVsZXRlTW9kYWwuYXBwZW5kKGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uLCBidXR0b25XcmFwcGVyKTtcbiAgICBsaS5hcHBlbmQob3BlbkRlbGV0ZU1vZGFsQnRuLCBkZWxldGVNb2RhbCk7XG4gICAgdWwuYXBwZW5kKGxpKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kIHRoZSB1bm9yZGVyZWQgbGlzdCB0byB0aGUgYXBwIGVsZW1lbnRcbiAgaW5wdXRNb2RhbC5hcHBlbmQodG9kb0lucHV0LCBhZGRUb2RvQnRuLCBjbG9zZU1vZGFsQnRuKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlUaXRsZSwgdWwsIG9wZW5Nb2RhbEJ0biwgYmFja0J0bik7XG4gIGFwcC5hcHBlbmQodG9kb0NvbnRhaW5lciwgaW5wdXRNb2RhbCk7XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy93YXJuaW5nTW9kYWwuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZ01vZGFsKCkge1xuICBjb25zdCB3YXJuaW5nTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBjb25zdCB3YXJuaW5nRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHdhcm5pbmdDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgd2FybmluZ01vZGFsLmNsYXNzTmFtZSA9ICd3YXJuaW5nLW1vZGFsJztcbiAgd2FybmluZ0Nsb3NlQnRuLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICB3YXJuaW5nRGlhbG9nLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCB1cCB0aGUgdGV4dCBmaWVsZCwgZG8gbm90IHByb2NyYXN0aW5hdGUhXCI7XG5cbiAgd2FybmluZ0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2FybmluZ01vZGFsLmNsb3NlKCk7XG4gIH0pO1xuXG4gIHdhcm5pbmdNb2RhbC5hcHBlbmQod2FybmluZ0RpYWxvZywgd2FybmluZ0Nsb3NlQnRuKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQod2FybmluZ01vZGFsKTtcblxuICB3YXJuaW5nTW9kYWwuc2hvd01vZGFsKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlclByb2plY3RzLmpzJztcbmltcG9ydCBoZWFkZXJDb250ZW50IGZyb20gJy4vbW9kdWxlcy9oZWFkZXIuanMnO1xuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vbW9kdWxlcy9ob21lQ29udGVudC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCB7IGhlYWRlckVsZW1lbnQgfSA9IGhlYWRlckNvbnRlbnQoKTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuXG4gICAgYXBwLmFwcGVuZChuZXdDb250ZW50KVxuXG4gICAgcmV0dXJuIGFwcDtcbn1cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5ob21lQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhvdXNlXCI+PC9pPiBIb21lYDtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29udGVudChob21lQ29udGVudCgpKVxufSlcblxuY29uc3Qgbm90ZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcbm5vdGVzQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFsaWduLWxlZnRcIj48L2k+IE15IE5vdGVzYDtcbm5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRlbnQocmVuZGVyUHJvamVjdHMoKSlcbn0pXG5cbmNvbnN0IGluc3RydWN0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnMnKTtcbmluc3RydWN0aW9uc0J0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZXJzb24tY2hhbGtib2FyZFwiPjwvaT4gSW5zdHJ1Y3Rpb25zYDtcbmluc3RydWN0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVDb250ZW50KGhvbWVDb250ZW50KCkpXG59KVxuXG5yZW5kZXIoKTtcbnVwZGF0ZUNvbnRlbnQoaG9tZUNvbnRlbnQoKSk7IC8vY2FsbHMgaG9tZUNvbnRlbnQgb24gcGFnZSBsb2FkIGFzIGRlZmF1bHQgbGFuZGluZyBwYWdlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9