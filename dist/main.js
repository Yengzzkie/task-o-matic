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
            closeModal(); //close the modal
            location.reload(); //then reloads the page
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

    confirmBtn.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLHNKQUFzSixxQ0FBcUMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLG9CQUFvQixzQkFBc0IsT0FBTyxLQUFLLG1CQUFtQiwwQkFBMEIsbUNBQW1DLGlEQUFpRCxtQkFBbUIseUJBQXlCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixlQUFlLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLE9BQU8sR0FBRywyQ0FBMkMscUJBQXFCLHNCQUFzQix1QkFBdUIscURBQXFELE9BQU8sb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQix1QkFBdUIsT0FBTyxJQUFJLHFCQUFxQjtBQUNybUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsSUFBSSxrQkFBa0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkZBQTZGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFNBQVMsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLDZDQUE2Qyx5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUNBQXVDLDBCQUEwQixrQkFBa0Isb0JBQW9CLHlCQUF5QixtQkFBbUIsdUJBQXVCLFlBQVksNkJBQTZCLDZCQUE2QixxQkFBcUIsT0FBTyxtQkFBbUIsNkJBQTZCLGtCQUFrQixxQkFBcUIsNEJBQTRCLG9DQUFvQyxPQUFPLFlBQVksMEJBQTBCLE9BQU8sYUFBYSw2QkFBNkIsbUJBQW1CLG9CQUFvQix1QkFBdUIsNEJBQTRCLHVCQUF1QixPQUFPLFdBQVcsMkJBQTJCLHlCQUF5Qix1QkFBdUIsT0FBTyxjQUFjLDJCQUEyQiwwQkFBMEIsT0FBTyxnQkFBZ0IsdUJBQXVCLDZCQUE2Qix1QkFBdUIsdUJBQXVCLE9BQU8sMEJBQTBCLDZCQUE2QixrQkFBa0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIsaUNBQWlDLDBCQUEwQiwyQkFBMkIsMkJBQTJCLCtCQUErQix5Q0FBeUMsV0FBVywwQkFBMEIsNEJBQTRCLDBCQUEwQixXQUFXLE9BQU8sR0FBRyxzQkFBc0Isb0JBQW9CLGlFQUFpRSxnQkFBZ0IsdUJBQXVCLGtCQUFrQixvQkFBb0IsR0FBRywyQkFBMkIsVUFBVSwrQkFBK0IsT0FBTyxZQUFZLDhCQUE4QixPQUFPLEdBQUcsMkNBQTJDLDBCQUEwQix1QkFBdUIsaUJBQWlCLDJCQUEyQixXQUFXLE9BQU8sNEJBQTRCLHVFQUF1RSxnQ0FBZ0Msb0JBQW9CLE9BQU8sR0FBRyxtQkFBbUI7QUFDbGtHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxZQUFZLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxX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LGNBQWMsbUVBQVcsS0FBSyx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9ob21lQ29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvcmVuZGVyUHJvamVjdHMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3M/ZjYyZiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzcz9lNjQ4Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3M/NzNiOCIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hvbWVDb250ZW50LmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3JlbmRlclRvZG8uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3dhcm5pbmdNb2RhbC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG5cbiAgICAuY2xvc2UtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTggMjE4IDIxOCk7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IC41cmVtIHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNER1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFxuICAgIC5jbG9zZS1tb2RhbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE4IDIxOCAyMTgpO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAuZm9ybS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggLjVyZW0gcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIlO1xuICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAub3Blbi1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMyU7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDYwLCAxMDAlLCA4MCUsIDAuNTgyKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZS1vdXQ7XG5cbiAgICAgICAgLm9wZW4tYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjIlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoZWFkZXIub3BlbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDogLTEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZOztJQUVaO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCOztJQUVyQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0IscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGdCQUFnQjs7UUFFaEI7WUFDSSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSw0QkFBNEI7WUFDNUIsV0FBVztRQUNmO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLFVBQVU7O1FBRVY7WUFDSSx1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxXQUFXO1FBQ2Y7SUFDSjtBQUNKOzs7OztBQUtBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osYUFBYTtRQUNiLDRCQUE0QjtRQUM1QixrQ0FBa0M7O1FBRWxDO1lBQ0ksY0FBYztZQUNkLGVBQWU7WUFDZixPQUFPO1lBQ1AsV0FBVztZQUNYLFVBQVU7O1lBRVY7Z0JBQ0ksaUJBQWlCO1lBQ3JCO1FBQ0o7O1FBRUE7WUFDSSxjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLE9BQU87WUFDUCxTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLFVBQVU7O1lBRVY7Z0JBQ0ksaUJBQWlCO1lBQ3JCO1FBQ0o7SUFDSjs7SUFFQTtRQUNJLHdCQUF3Qjs7UUFFeEI7WUFDSSxVQUFVO1lBQ1YsZUFBZTtZQUNmLFdBQVc7UUFDZjs7UUFFQTtZQUNJLFVBQVU7UUFDZDtJQUNKOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHotaW5kZXg6IDk5OTtcXG5cXG4gICAgaSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMiU7XFxuICAgICAgICBsZWZ0OiAyJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm9wZW4tYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICBhbmltYXRpb246IGJvdW5jZSAuNXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGJvdHRvbTogMyU7XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDYwLCAxMDAlLCA4MCUsIDAuNTgyKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLW91dDtcXG5cXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMyU7XFxuICAgICAgICAgICAgcmlnaHQ6IC0yMiU7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG5cXG4gICAgICAgICAgICBpIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogMiU7XFxuICAgICAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgICAgICAgICAgaSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBoZWFkZXIub3BlbiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICByaWdodDogLTEwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5iYW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTY1ZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMiwgMC43MTYpLFxuICAgICAgcmdiYSgyNTQsIDI1NCwgMTYxLCAwLjU4NyksXG4gICAgICByZ2JhKDI0MCwgMjQwLCAyMzIsIDAuNTk0KVxuICAgICk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGgxIHtcbiAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKSByb3RhdGUoMTVkZWcpO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbjogNWNhcDtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlcm8gaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICAuYmFubmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5oZXJvLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn07XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWVDb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7O0VBRWI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjs7Ozs7S0FLQztJQUNELFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjs7SUFFaEI7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLE1BQU07TUFDTixRQUFRO01BQ1IseUNBQXlDO01BQ3pDLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QjtNQUNFLGtCQUFrQjtNQUNsQixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxZQUFZO01BQ1osU0FBUztJQUNYOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7O0lBRWI7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIC5iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAxNjVkZWcsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMiwgMC43MTYpLFxcbiAgICAgIHJnYmEoMjU0LCAyNTQsIDE2MSwgMC41ODcpLFxcbiAgICAgIHJnYmEoMjQwLCAyNDAsIDIzMiwgMC41OTQpXFxuICAgICk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGgxIHtcXG4gICAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpIHJvdGF0ZSgxNWRlZyk7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIlxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWFyZ2luOiA1Y2FwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVybyBpbWcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuXFxuICAuYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmhlcm8tY29udGVudC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgfVxcbn07XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcmVtIC44cmVtICNhZmFmYWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLnBpbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMlO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTUlO1xuICAgICAgICBsZWZ0OiAtNyU7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICByaWdodDogNSU7XG5cbiAgICAgICAgJiBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDp2YTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDFmciwgMWZyKSk7XG4gICAgZ2FwOiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuXG5cbkBrZXlmcmFtZXMgZ3Jvd1VwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAucHJvamVjdC13cmFwcGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3JlbmRlclByb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFVBQVU7UUFDVixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUzs7UUFFVDtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLDBCQUEwQjtRQUM5Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixXQUFXO1FBQ2Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7O1FBRVo7WUFDSSxZQUFZO1FBQ2hCO0lBQ0o7OztJQUdBO1FBQ0ksNERBQTREO1FBQzVELHFCQUFxQjtRQUNyQixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDByZW0gLjhyZW0gI2FmYWZhZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBoMSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgIC5waW4taWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgcmlnaHQ6IDUwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogLTUlO1xcbiAgICAgICAgbGVmdDogLTclO1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmljb25zLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcblxcbiAgICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxZnIsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgZGl2IHtcbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGRpYWxvZyB7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgICAgICAgICAmIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuNXJlbSAxcmVtICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cblxuICAgICNhZGQtdGFzayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgcmlnaHQ6IDMlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLWRyb3BzaGFkb3cpKTtcbiAgICB9XG5cbiAgICAuYmFjay1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIHJpZ2h0OiAzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKSk7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XG4gICAgfVxufVxuXG4jYXBwIC5pbnB1dC1tb2RhbCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbmRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAuM3M7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICNhcHAgLmlucHV0LW1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvOyBcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCO1FBQ0k7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1FBQ3BCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLFlBQVk7O1lBRVo7Z0JBQ0ksa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osY0FBYztZQUNsQjtRQUNKO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7OztJQUdsQjtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YsU0FBUztRQUNULGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULGtCQUFrQjtRQUNsQixtREFBbUQ7UUFDbkQsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQjtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG5cXG4gICAgZGl2IHtcXG4gICAgICAgIC5kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xcblxcbiAgICAgICAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjVyZW0gMXJlbSAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXG5cXG4gICAgI2FkZC10YXNrIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgICByaWdodDogMyU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLWRyb3BzaGFkb3cpKTtcXG4gICAgfVxcblxcbiAgICAuYmFjay1idG4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzJTtcXG4gICAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpKTtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XFxuICAgIH1cXG59XFxuXFxuI2FwcCAuaW5wdXQtbW9kYWwge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXG4gICAgdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB9XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbmltYXRpb246IHNjYWxlVXAgLjNzO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGVVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICNhcHAgLmlucHV0LW1vZGFsIHtcXG4gICAgICAgIG1hcmdpbjogMjAwcHggYXV0bzsgXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndhcm5pbmctbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7O0lBRWI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndhcm5pbmctbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL3JlbmRlclRvZG8uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaG9tZUNvbnRlbnQuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiByZ2IoMjQ0LCAyNTIsIDI1NSk7XG4gIC0teWVsbG93OiByZ2IoMjUyLCAyMjgsIDkwKTtcbiAgLS1uZW9uLWdyZWVuOiByZ2IoMTA0LCAyNTUsIDEwKTtcbiAgLS1idXR0b24tYmc6ICMyZTJlMmU7XG4gIC0taGVhZGVyLWhlaWdodDogODVweDtcbiAgLS1kcm9wc2hhZG93OiAycHggM3B4IDJweCByZ2IoMTUyLCAxNTIsIDE1Mik7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jYXBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiNpbnB1dC1tb2RhbCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG59XG5cbiNkaWFsb2ctd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTBweCAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAjYXBwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7O0VBRW5CO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY3NzL3JlbmRlclByb2plY3RzLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvcmVuZGVyVG9kby5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY3NzL2hlYWRlci5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY3NzL2hvbWVDb250ZW50LmNzc1xcXCI7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiByZ2IoMjQ0LCAyNTIsIDI1NSk7XFxuICAtLXllbGxvdzogcmdiKDI1MiwgMjI4LCA5MCk7XFxuICAtLW5lb24tZ3JlZW46IHJnYigxMDQsIDI1NSwgMTApO1xcbiAgLS1idXR0b24tYmc6ICMyZTJlMmU7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDg1cHg7XFxuICAtLWRyb3BzaGFkb3c6IDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI2FwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2lucHV0LW1vZGFsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgfVxcbn1cXG5cXG4jZGlhbG9nLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogNXB4IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2FwcCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclByb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyUHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclRvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJUb2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93YXJuaW5nTW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93YXJuaW5nTW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGNsZWFyREIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkaWFsb2dXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy13cmFwcGVyJyk7XG4gICAgY29uc3QgY2xlYXJEYXRhV2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xlYXJEYXRhTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbW9kYWwnKTtcblxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2xlYXJEYXRhV2FybmluZy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmlhbmdsZS1leGNsYW1hdGlvblwiPjwvaT4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgZGF0YT8gVGhpcyBpcyBpcnJldmVyc2libGUuYDtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrLU9cXCctTWF0aWMnO1xuICAgIGhhbWJ1cmdlci5jbGFzc05hbWUgPSAnb3Blbi1idXR0b24nO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZS1idXR0b24nO1xuICAgIGhhbWJ1cmdlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXJcIj48L2k+YDtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtbGVmdFwiPjwvaT5gO1xuICAgIGNsZWFyREIuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCI+PC9pPiBEZWxldGUgQWxsIERhdGFgO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgQWxsIFJpZ2h0cyBSZXNlcnZlZCB8IFllbmd6emtpZSBEemlnblRlY2jCqWA7XG4gICAgXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL2hhbWJ1cmdlciBvcGVuIGV2ZW50IGxpc3RlbmVyIGZvciBtb2JpbGUgc2NyZWVuc1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmF2YmFyKSAvL2hhbWJ1cmdlciBjbG9zZSBldmVudCBsaXN0ZW5lciBmb3IgbW9iaWxlIHNjcmVlbnNcblxuICAgIGZ1bmN0aW9uIGNsb3NlTmF2YmFyKCkgeyAvL2hhbWJ1cmdlciBjbG9zZSBmdW5jdGlvblxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIH1cblxuICAgIGNsZWFyREIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRGF0YU1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjbGVhclN0b3JhZ2UoKTtcbiAgICB9KTsgLy9ldmVudCBsaXN0ZW5lciBmb3IgY2xlYXIgc3RvcmFnZSBidXR0b25cblxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHsgLy9mdW5jdGlvbiBmb3IgY2xlYXJpbmcgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjbGVhckRhdGFNb2RhbC5zaG93TW9kYWwoKTsgLy9vcGVucyB0aGUgZGVsZXRpb24gbW9kYWxcblxuICAgICAgICBkaWFsb2dXcmFwcGVyLmFwcGVuZChjbGVhckRhdGFXYXJuaW5nLCBjb25maXJtQnRuLCBjYW5jZWxCdG4pXG4gICAgICAgIGNsZWFyRGF0YU1vZGFsLmFwcGVuZChkaWFsb2dXcmFwcGVyKTtcblxuICAgICAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL2NvbmZpcm1zIGRlbGV0aW9uIG9mIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTsgLy9jYWxscyB0aGlzIGZ1bmN0aW9uIHRvIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGRpYWxvZ1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7IC8vZW1wdGllcyB0aGUgZGlhbG9nIHdyYXBwZXJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTsgLy9jbG9zZSB0aGUgbW9kYWxcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvL3RoZW4gcmVsb2FkcyB0aGUgcGFnZVxuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vY2FuY2VscyBcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTsgLy9hbmQgY2xvc2UgbW9kYWwgZm9yIGRhdGEgZGVsZXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICBjbGVhckRhdGFNb2RhbC5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIGNsZWFyRGF0YU1vZGFsLmFwcGVuZChjbGVhckRhdGFXYXJuaW5nLCBjb25maXJtQnRuLCBjYW5jZWxCdG4pO1xuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhhbWJ1cmdlciwgY2xvc2UpXG4gICAgZm9vdGVyRWxlbWVudC5hcHBlbmQoY2xlYXJEQik7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSwgZm9vdGVyRWxlbWVudCk7XG5cblxuXG4gICAgcmV0dXJuIHsgaGVhZGVyRWxlbWVudCB9O1xufSIsImltcG9ydCBub3Rlc1BORyBmcm9tIFwiLi4vYXNzZXRzL25vdGVzLnBuZ1wiO1xuaW1wb3J0IGJhbm5lclBORyBmcm9tIFwiLi4vYXNzZXRzL2Jhbm5lci1pbWFnZS5wbmdcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi4vbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lQ29udGVudCgpIHtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiYW5uZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBnZXRTdGFydGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdXNlcm5hbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbW9kYWxcIik7XG4gIGNvbnN0IGRpYWxvZ1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZy13cmFwcGVyXCIpO1xuICBjb25zdCBnZXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJhbm5lckltYWdlLnNyYyA9IGJhbm5lclBORztcbiAgaGVyb0ltYWdlLnNyYyA9IG5vdGVzUE5HO1xuICBiYW5uZXIuY2xhc3NOYW1lID0gXCJiYW5uZXJcIjtcbiAgaGVyb1dyYXBwZXIuY2xhc3NOYW1lID0gXCJoZXJvLWNvbnRlbnQtd3JhcHBlclwiO1xuICB1c2VyTmFtZS5jbGFzc05hbWUgPSBcImdyZWV0aW5nXCI7XG4gIGhlcm8uY2xhc3NOYW1lID0gXCJoZXJvXCI7XG4gIGdldFN0YXJ0ZWRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOb3Rlc1wiO1xuICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2stTyctTWF0aWNcIjtcbiAgc2xvZ2FuLnRleHRDb250ZW50ID1cbiAgICBcIkVmZm9ydGxlc3MgTm90ZS10YWtpbmcsIEFueXRpbWUsIEFueXdoZXJlIHdpdGggVGFzay1PJy1NYXRpY1wiO1xuXG4gIGdldFN0YXJ0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RzKTtcblxuICBmdW5jdGlvbiBjaGVja1VzZXJuYW1lKCkge1xuICAgIC8vb24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpKSB7XG4gICAgICAvL3RoZW4gY2hlY2tzIGlmIGEgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZSwgaWYgbm90XG4gICAgICBnZXROYW1lTW9kYWwoKTsgLy9jYWxscyB0aGUgZ2V0TmFtZU1vZGFsIGZ1bmN0aW9uIHRvIGdldCBhbiBpbnB1dCBmcm9tIHRoZSB1c2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGEgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHMsIHNldCB0aGUgdXNlcm5hbWUgdGV4dCBjb250ZW50IHRvIGEgZ3JlZXRpbmdcbiAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gYEhlbGxvLCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIil9LCBsZXQncyBnZXQgc3RhcnRlZCFgO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5hbWVNb2RhbCgpIHtcbiAgICB1c2VybmFtZU1vZGFsLnNob3dNb2RhbCgpO1xuICAgIHVzZXJuYW1lTW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGdldE5hbWUudGV4dENvbnRlbnQgPSBcIlRvIGdldCBzdGFydGVkLCBwbGVhc2UgZW50ZXIgeW91ciBuYW1lXCI7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuXG4gICAgICBpZiAodXNlcm5hbWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpOyAvL2FmdGVyIHNldHRpbmcgdGhlIHVzZXJuYW1lIGluIHRoZSBsb2NhbCBzdG9yYWdlLFxuICAgICAgICB1c2VybmFtZU1vZGFsLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHVzZXJuYW1lLlwiKTsgLy9pZiBhIHVzZXIgY2FuY2VscyB0aGUgbW9kYWwsIHdpbGwgdHJpZ2dlciBhbiBhbGVydCB0byBlbnRlciBhIG5hbWVcbiAgICAgIH1cbiAgICAgIGRpYWxvZ1dyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNoZWNrVXNlcm5hbWUoKTsgLy9jYWxsIHRoZSBjaGVja1VzZXJuYW1lIGFnYWluIHRvIGRpc3BsYXkgdGhlIHVzZXJOYW1lIHRleHRDb250ZW50IHdpdGggdGhlIHVzZXIncyBuYW1lXG4gICAgfSk7XG5cbiAgICBkaWFsb2dXcmFwcGVyLmFwcGVuZChnZXROYW1lLCB1c2VybmFtZUlucHV0LCBjb25maXJtQnRuKTtcbiAgICB1c2VybmFtZU1vZGFsLmFwcGVuZChkaWFsb2dXcmFwcGVyKTtcbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoKTtcbiAgYmFubmVyLmFwcGVuZCh1c2VyTmFtZSwgZ2V0U3RhcnRlZEJ0biwgYmFubmVySW1hZ2UpO1xuICBoZXJvV3JhcHBlci5hcHBlbmQoaGVyb1RpdGxlLCBzbG9nYW4sIGhlcm9JbWFnZSk7XG4gIGhlcm8uYXBwZW5kKGJhbm5lciwgaGVyb1dyYXBwZXIpO1xuXG4gIHJldHVybiBoZXJvO1xufVxuIiwiaW1wb3J0IHBlcnNvbmFsUE5HIGZyb20gJy4uL2Fzc2V0cy9wZXJzb25hbC5wbmcnO1xuaW1wb3J0IHJlYWRQTkcgZnJvbSAnLi4vYXNzZXRzL2Jvb2sucG5nJztcbmltcG9ydCB3b3JrUE5HIGZyb20gJy4uL2Fzc2V0cy93b3JrLnBuZyc7XG5pbXBvcnQgaGVhbHRoUE5HIGZyb20gJy4uL2Fzc2V0cy9oZWFsdGgucG5nJztcbmltcG9ydCBzb2NpYWxQTkcgZnJvbSAnLi4vYXNzZXRzL3NvY2lhbC5wbmcnO1xuaW1wb3J0IGhvYmJpZXNQTkcgZnJvbSAnLi4vYXNzZXRzL2hvYmJ5LnBuZyc7XG5pbXBvcnQgZmluYW5jZVBORyBmcm9tICcuLi9hc3NldHMvZmluYW5jZS5wbmcnO1xuaW1wb3J0IGdyb2NlcnlQTkcgZnJvbSAnLi4vYXNzZXRzL2dyb2NlcnkucG5nJztcbmltcG9ydCBvdGhlclBORyBmcm9tICcuLi9hc3NldHMvb3RoZXIucG5nJztcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlBlcnNvbmFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVyc29uYWwgc3R1ZmZcIixcbiAgICBpbWFnZTogcGVyc29uYWxQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHsgdGl0bGU6IFwiV29ya1wiLCBkZXNjcmlwdGlvbjogXCJHbyB0byB3b3JrXCIsIGltYWdlOiB3b3JrUE5HLCB0b2RvOiBbXSB9LFxuICB7XG4gICAgdGl0bGU6IFwiR3JvY2VyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0b2NrIHVwIHRob3NlIHNoZWx2ZXNcIixcbiAgICBpbWFnZTogZ3JvY2VyeVBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAgeyB0aXRsZTogXCJFZHVjYXRpb25cIiwgZGVzY3JpcHRpb246IFwiUmVhZCBzb21lIGJvb2tzXCIsIGltYWdlOiByZWFkUE5HLCB0b2RvOiBbXSB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGVhbHRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGVhbHRoeSBMaXZpbmdcIixcbiAgICBpbWFnZTogaGVhbHRoUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU29jaWFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55dGhpbmcgYWJvdXQgc29jaWFsaXppbmdcIixcbiAgICBpbWFnZTogc29jaWFsUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSG9iYmllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueXRoaW5nIGFib3V0IGhvYmJpZXNcIixcbiAgICBpbWFnZTogaG9iYmllc1BORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZpbmFuY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgYWJvdXQgbW9uZXlcIixcbiAgICBpbWFnZTogZmluYW5jZVBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk90aGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3RoZXIgc3R1ZmYgeW91IG1heSB0aGluayBvZlwiLFxuICAgIGltYWdlOiBvdGhlclBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3REYXRhLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgcmVuZGVyVG9kbyBmcm9tICcuL3JlbmRlclRvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcblxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgLy8gSWYgbm90LCBzZXQgaXQgd2l0aCB0aGUgcHJvamVjdHMgZGF0YVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NvbnRhaW5zIHRoZSBpbnB1dCBmb3JtXG5cbiAgcHJvamVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LXdyYXBwZXJcIjtcbiAgYXBwLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXJzIHRoZSBjb250ZW50cyBldmVyeXRpbWUgYSBuZXcgcHJvamVjdCBpcyBhZGRlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiBwcm9qZWN0c1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGRlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyBjb25zdCB0YXNrQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwaW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBvcGVuUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIHByb2plY3RJbWFnZS5zcmMgPSBwcm9qZWN0LmltYWdlO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNvbnRhaW5lclwiO1xuICAgIGljb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaWNvbnMtY29udGFpbmVyXCI7XG4gICAgcGluSWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1tYXAtcGluXCI+PC9pPmA7XG4gICAgcGluSWNvbi5jbGFzc05hbWUgPSAncGluLWljb24nO1xuICAgIG9wZW5Qcm9qZWN0QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZm9sZGVyLW9wZW5cIj48L2k+YDtcbiAgICAvLyB0YXNrQ291bnRlci5pbm5lckhUTUwgPSBudW1PZlRhc2tzLmxlbmd0aCA+IDAgPyBgXCJZb3UgaGF2ZSAke251bU9mVGFza3MubGVuZ3RofSB0YXNrcyBpbiB0aGlzIHByb2plY3RcImAgOiBgQWxsIHRhc2tzIGFyZSBjbGVhcmVkYDtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICBkZXNjQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdERlc2NyaXB0aW9uO1xuXG4gICAgLy8gKioqKioqKioqKioqKioqKipFWFBFUklNRU5UQUwqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIG9wZW5Qcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBpbmRleDsgLy8gQ2FwdHVyZSB0aGUgY3VycmVudCBwcm9qZWN0IGluZGV4XG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIHJlbmRlclRvZG8ocHJvamVjdEluZGV4KTtcbiAgICAgIHVsLmFwcGVuZChsaSlcbiAgICAgIGFwcC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGFwcC5hcHBlbmQodWwpO1xuICAgIH0pO1xuLy8gKioqKioqKioqKioqKioqKipFWFBFUklNRU5UQUwqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgaWNvbnNDb250YWluZXIuYXBwZW5kKG9wZW5Qcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW1hZ2UsIHBpbkljb24sIGljb25zQ29udGFpbmVyLCB0aXRsZUNvbnRhaW5lciwgZGVzY0NvbnRhaW5lcik7XG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgIGFwcC5hcHBlbmQocHJvamVjdFdyYXBwZXIpO1xuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFdyYXBwZXI7XG59IiwiaW1wb3J0IFwiLi4vY3NzL3JlbmRlclRvZG8uY3NzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcmVuZGVyUHJvamVjdHMuanNcIjtcbmltcG9ydCB3YXJuaW5nTW9kYWwgZnJvbSBcIi4vd2FybmluZ01vZGFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRvZG8oaW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpbmRleF07IC8vZ2V0IHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdHNcblxuICAvL3RoaXMgYmxvY2sgYmVsb3cgYXJlIGFsbCB0aGUgdmFyaWFibGVzXG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBvcGVuTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHRhc2tzID0gcHJvamVjdC50b2RvO1xuXG4gIC8vdGhpcyBibG9jayBiZWxvdyBhcmUgdGhlIHZhcmlhYmxlIHRleHQgYXNzaWdubWVudCwgc2VwYXJhdGluZyB0aGVtIGZyb20gdGhlIHZhcmlhYmxlcyB0byBhdm9pZCBjb25mdXNpb25cblxuICBpbnB1dE1vZGFsLmNsYXNzTmFtZSA9IFwiaW5wdXQtbW9kYWxcIjtcbiAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgY2xvc2VNb2RhbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIHRvZG9Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0b2RvLWNvbnRhaW5lclwiO1xuICBvcGVuTW9kYWxCdG4uaW5uZXJIVE1MID1cbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWRkX25vdGVzPC9zcGFuPic7XG4gIG9wZW5Nb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPic7XG4gIGJhY2tCdG4uY2xhc3NOYW1lID0gXCJiYWNrLWJ0blwiO1xuICBjYXRlZ29yeVRpdGxlLmlubmVySFRNTCA9IGAke3Byb2plY3QudGl0bGV9IE5vdGVzIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPm1lbnVfYm9vazwvc3Bhbj5gO1xuXG4gIG9wZW5Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlucHV0TW9kYWwuc2hvd01vZGFsKCk7XG4gIH0pO1xuXG4gIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbnB1dE1vZGFsLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xuXG4gIC8vbWFpbiBmdW5jdGlvbiBpbiBhZGRpbmcgbmV3IHRhc2tzXG4gIGZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc3QgdG9kb0lucHV0VmFsdWUgPSB0b2RvSW5wdXQudmFsdWU7XG5cbiAgICBpZiAoIXRvZG9JbnB1dFZhbHVlKSB7XG4gICAgICB3YXJuaW5nTW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBwb3N0ZWREYXRlID0gYCR7bmV3RGF0ZS5nZXRGdWxsWWVhcigpfS0ke25ld0RhdGUuZ2V0TW9udGgoKX0tJHtuZXdEYXRlLmdldERhdGUoKX0gLyAke25ld0RhdGUuZ2V0SG91cnMoKX06JHtuZXdEYXRlLmdldE1pbnV0ZXMoKX06JHtuZXdEYXRlLmdldFNlY29uZHMoKX1gO1xuICAgICAgdGFza3MucHVzaCh7IHRvZG86IHRvZG9JbnB1dFZhbHVlLCBkYXRlOiBwb3N0ZWREYXRlIH0pO1xuICAgICAgcHJvamVjdC50b2RvID0gdGFza3M7IC8vIFVwZGF0ZSB0aGUgcHJvamVjdCdzIHRvZG8gYXJyYXkgd2l0aCB0aGUgdXBkYXRlZCB0YXNrc1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyAvL3N0b3JlIHRoZSBuZXcgYWRkZWQgdGFza3MgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAgIHJlbmRlclRvZG8oaW5kZXgpOyAvL3RoZW4gcmUtcmVuZGVyIHRoZSBhcnJheSBieSBjYWxsaW5nIHJlbmRlclRvZG8gZnVuY3Rpb24gd2hpY2ggY29udGFpbnMgdGhlIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSBmdW5jdGlvblxuXG4gICAgICBjb25zdCBsYXN0VGFzayA9IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc29sZS5sb2coXCJUb2RvOlwiLCBsYXN0VGFzay50b2RvKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZTpcIiwgbGFzdFRhc2suZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gIH0pOyAvL3JlLXJlbmRlcnMgdGhlIHByb2plY3RzIHdoZW4gdGhlIGJhY2sgYnV0dG9uIGlzIGNsaWNrZWRcblxuICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgYXBwIGVsZW1lbnQgdG8gcHJldmVudCBkdXBsaWNhdGluZyBvZiBjb250ZW50cyBvbiByZS1yZW5kZXJcbiAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSB0b2RvIGFycmF5IG9mIHRoZSBwcm9qZWN0IGFuZCBjcmVhdGUgbGlzdCBpdGVtcyBmb3IgZWFjaCB0b2RvXG4gIHRhc2tzLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9Qcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGF0ZVByb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3BlbkRlbGV0ZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlTW9kYWxDb25maXJtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrc1tpbmRleF07XG5cbiAgICBvcGVuRGVsZXRlTW9kYWxCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCI+PC9pPic7XG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiQ29uZmlybVwiO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgZGVsZXRlTW9kYWxDb25maXJtYXRpb24udGV4dENvbnRlbnQgPSBcIkFyZSB5b3UgZG9uZSB3aXRoIHRoaXMgdGFzaz9cIjtcbiAgICB0b2RvUHJvcC50ZXh0Q29udGVudCA9IHRvZG9JdGVtLnRvZG87XG4gICAgZGF0ZVByb3AudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kYXRlO1xuICAgIGRhdGVQcm9wLmNsYXNzTmFtZSA9IFwiZGF0ZVwiO1xuXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb3AsIGRhdGVQcm9wKTtcbiAgICBsaS5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJbmRleCkge1xuICAgICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7IC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIHRoZSB0YXNrcyBhcnJheVxuICAgICAgcHJvamVjdC50b2RvID0gdGFza3M7IC8vIFVwZGF0ZSB0aGUgcHJvamVjdCdzIHRvZG8gYXJyYXkgd2l0aCB0aGUgdXBkYXRlZCB0YXNrc1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyAvLyBVcGRhdGUgbG9jYWxTdG9yYWdlIHdpdGggdGhlIHVwZGF0ZWQgcHJvamVjdHNcblxuICAgICAgLy8gUmVtb3ZlIHRoZSB0YXNrJ3MgY29ycmVzcG9uZGluZyBsaXN0IGl0ZW0gZnJvbSB0aGUgRE9NXG4gICAgICB1bC5yZW1vdmVDaGlsZCh1bC5jaGlsZE5vZGVzW3Rhc2tJbmRleF0pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSB0YXNrcywgcmVtb3ZlIHRoZSBkaWFsb2cgZWxlbWVudCBhbmQgcmUtcmVuZGVyIG9ubHkgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbnB1dE1vZGFsLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkaWFsb2dcbiAgICAgICAgaW5wdXRNb2RhbC5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBkaWFsb2cgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTsgLy8gUmUtcmVuZGVyIG9ubHkgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5EZWxldGVNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy9vcGVucyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBtb2RhbFxuICAgICAgZGVsZXRlTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vY2xvc2VzIHRoZSBkZWxldGUgY29uZmlybWF0aW9uIG1vZGFsXG4gICAgICBkZWxldGVNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gSW5zaWRlIHRoZSBmb3JFYWNoIGxvb3AgdG8gY3JlYXRlIGRlbGV0ZSBidXR0b25zIGZvciBlYWNoIHRhc2tcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmluZGV4T2YodG9kb0l0ZW0pOyAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgdGFzayB0byByZW1vdmVcbiAgICAgIHJlbW92ZVRhc2sodGFza0luZGV4KTsgLy8gQ2FsbCB0aGUgcmVtb3ZlVGFzayBmdW5jdGlvbiB3aXRoIHRoZSBpbmRleCB0byByZW1vdmVcbiAgICB9KTtcblxuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKGRlbGV0ZUJ0biwgY2FuY2VsQnRuKTtcbiAgICBkZWxldGVNb2RhbC5hcHBlbmQoZGVsZXRlTW9kYWxDb25maXJtYXRpb24sIGJ1dHRvbldyYXBwZXIpO1xuICAgIGxpLmFwcGVuZChvcGVuRGVsZXRlTW9kYWxCdG4sIGRlbGV0ZU1vZGFsKTtcbiAgICB1bC5hcHBlbmQobGkpO1xuICB9KTtcblxuICAvLyBBcHBlbmQgdGhlIHVub3JkZXJlZCBsaXN0IHRvIHRoZSBhcHAgZWxlbWVudFxuICBpbnB1dE1vZGFsLmFwcGVuZCh0b2RvSW5wdXQsIGFkZFRvZG9CdG4sIGNsb3NlTW9kYWxCdG4pO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZChjYXRlZ29yeVRpdGxlLCB1bCwgb3Blbk1vZGFsQnRuLCBiYWNrQnRuKTtcbiAgYXBwLmFwcGVuZCh0b2RvQ29udGFpbmVyLCBpbnB1dE1vZGFsKTtcbn1cbiIsImltcG9ydCAnLi4vY3NzL3dhcm5pbmdNb2RhbC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nTW9kYWwoKSB7XG4gIGNvbnN0IHdhcm5pbmdNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGNvbnN0IHdhcm5pbmdEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgd2FybmluZ0Nsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB3YXJuaW5nTW9kYWwuY2xhc3NOYW1lID0gJ3dhcm5pbmctbW9kYWwnO1xuICB3YXJuaW5nQ2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gIHdhcm5pbmdEaWFsb2cudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIHVwIHRoZSB0ZXh0IGZpZWxkLCBkbyBub3QgcHJvY3Jhc3RpbmF0ZSFcIjtcblxuICB3YXJuaW5nQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3YXJuaW5nTW9kYWwuY2xvc2UoKTtcbiAgfSk7XG5cbiAgd2FybmluZ01vZGFsLmFwcGVuZCh3YXJuaW5nRGlhbG9nLCB3YXJuaW5nQ2xvc2VCdG4pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZCh3YXJuaW5nTW9kYWwpO1xuXG4gIHdhcm5pbmdNb2RhbC5zaG93TW9kYWwoKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMnO1xuaW1wb3J0IGhlYWRlckNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hvbWVDb250ZW50LmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHsgaGVhZGVyRWxlbWVudCB9ID0gaGVhZGVyQ29udGVudCgpO1xuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVyRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBhcHAuYXBwZW5kKG5ld0NvbnRlbnQpXG5cbiAgICByZXR1cm4gYXBwO1xufVxuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWVCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaG91c2VcIj48L2k+IEhvbWVgO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVDb250ZW50KGhvbWVDb250ZW50KCkpXG59KVxuXG5jb25zdCBub3Rlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpO1xubm90ZXNCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYWxpZ24tbGVmdFwiPjwvaT4gTXkgTm90ZXNgO1xubm90ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29udGVudChyZW5kZXJQcm9qZWN0cygpKVxufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucycpO1xuaW5zdHJ1Y3Rpb25zQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlcnNvbi1jaGFsa2JvYXJkXCI+PC9pPiBJbnN0cnVjdGlvbnNgO1xuaW5zdHJ1Y3Rpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRlbnQoaG9tZUNvbnRlbnQoKSlcbn0pXG5cbnJlbmRlcigpO1xudXBkYXRlQ29udGVudChob21lQ29udGVudCgpKTsgLy9jYWxscyBob21lQ29udGVudCBvbiBwYWdlIGxvYWQgYXMgZGVmYXVsdCBsYW5kaW5nIHBhZ2UiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=