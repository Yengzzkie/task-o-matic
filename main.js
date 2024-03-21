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
        bottom: 3%;
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
        align-self: flex-start;
        font-size: 1.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;;IAEZ;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;;IAErB;;IAEA;QACI,aAAa;QACb,2BAA2B;QAC3B,qCAAqC;IACzC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,gBAAgB;;QAEhB;YACI,aAAa;YACb,uBAAuB;YACvB,uBAAuB;YACvB,gBAAgB;YAChB,mBAAmB;YACnB,WAAW;YACX,kBAAkB;QACtB;;QAEA;YACI,4BAA4B;YAC5B,WAAW;QACf;IACJ;;IAEA;QACI,eAAe;QACf,UAAU;IACd;AACJ;;;;;AAKA;IACI;QACI,eAAe;QACf,sCAAsC;QACtC,2BAA2B;QAC3B,YAAY;QACZ,aAAa;QACb,4BAA4B;QAC5B,kCAAkC;;QAElC;YACI,cAAc;YACd,eAAe;YACf,OAAO;YACP,WAAW;YACX,UAAU;;YAEV;gBACI,iBAAiB;YACrB;QACJ;;QAEA;YACI,cAAc;YACd,kBAAkB;YAClB,OAAO;YACP,SAAS;YACT,iBAAiB;YACjB,UAAU;;YAEV;gBACI,iBAAiB;YACrB;QACJ;IACJ;;IAEA;QACI,wBAAwB;;QAExB;YACI,UAAU;YACV,eAAe;YACf,WAAW;QACf;;QAEA;YACI,UAAU;QACd;IACJ;;IAEA;QACI,sBAAsB;QACtB,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');\n\nheader {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background: #ffff8794;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    height: 100vh;\n    width: 300px;\n    text-align: center;\n    padding: 15px;\n    z-index: 999;\n\n    i {\n        font-size: 1.1rem;\n        margin-right: 5px;\n    }\n\n    h1 {\n        position: absolute;\n        top: 2%;\n        left: 2%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.3rem;\n        font-weight: 200;\n        margin: 20px 10px;\n        \n    }\n\n    .open-button {\n        display: none;\n        transform: translateX(-50%);\n        animation: bounce .5s infinite linear;\n    }\n\n    .close-button {\n        display: none;\n    }\n\n    nav {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin-top: 80px;\n\n        button {\n            display: flex;\n            background: transparent;\n            color: var(--button-bg);\n            border-radius: 0;\n            letter-spacing: 4px;\n            width: 100%;\n            padding-left: 15px;\n        }\n\n        button:hover {\n            background: var(--button-bg);\n            color: #fff;\n        }\n    }\n\n    footer {\n        position: fixed;\n        bottom: 3%;\n    }\n}\n\n\n\n\n@media screen and (max-width: 1024px) {\n    header {\n        position: fixed;\n        background: hsla(60, 100%, 80%, 0.582);\n        backdrop-filter: blur(10px);\n        width: 250px;\n        height: 100vh;\n        transform: translateX(-100%);\n        transition: transform .4s ease-out;\n\n        .open-button {\n            display: block;\n            position: fixed;\n            top: 3%;\n            right: -22%;\n            opacity: 1;\n\n            i {\n                font-size: 1.5rem;\n            }\n        }\n\n        .close-button {\n            display: block;\n            position: absolute;\n            top: 2%;\n            right: 5%;\n            font-size: 1.5rem;\n            opacity: 0;\n\n            i {\n                font-size: 1.5rem;\n            }\n        }\n    }\n\n    header.open {\n        transform: translateX(0);\n\n        span {\n            opacity: 0;\n            position: fixed;\n            right: -10%;\n        }\n\n        .close-button {\n            opacity: 1;\n        }\n    }\n\n    h1 {\n        align-self: flex-start;\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
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
    background: linear-gradient(165deg, rgba(255, 255, 2, 0.716), rgba(254, 254, 161, 0.587), rgba(240, 240, 232, 0.594));
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    padding: 30px;
    overflow: hidden;

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
      margin-left: 30px;
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

.user-modal {
  width: 300px;
  height: 150px;
}

@media screen and (max-width: 1024px) {
  .hero img {
    width: 250px;
  }

  .banner {
    flex-direction: column;

    img {
      width: 400px;
      bottom: 0;
    }

    button {
      margin-top: 30px;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/homeContent.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb;IACE,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qHAAqH;IACrH,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,gBAAgB;;IAEhB;MACE,kBAAkB;MAClB,MAAM;MACN,QAAQ;MACR,yCAAyC;MACzC,WAAW;IACb;;IAEA;MACE,gBAAgB;MAChB,YAAY;MACZ,iBAAiB;IACnB;EACF;;EAEA;IACE,2BAA2B;IAC3B,wCAAwC;IACxC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,sBAAsB;;IAEtB;MACE,YAAY;MACZ,SAAS;IACX;;IAEA;MACE,gBAAgB;IAClB;EACF;AACF","sourcesContent":[".hero {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n\n  .banner {\n    position: relative;\n    display: flex;\n    align-items: center;\n    background: linear-gradient(165deg, rgba(255, 255, 2, 0.716), rgba(254, 254, 161, 0.587), rgba(240, 240, 232, 0.594));\n    width: 100%;\n    height: 100%;\n    margin-bottom: 30px;\n    padding: 30px;\n    overflow: hidden;\n\n    img {\n      position: absolute;\n      top: 0;\n      right: 0;\n      transform: translateY(-30%) rotate(15deg);\n      z-index: -1;\n    }\n\n    button {\n      border-radius: 0;\n      width: 150px;\n      margin-left: 30px;\n    }\n  }\n\n  h1 {\n    font-family: \"\", sans-serif;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    font-size: 3rem;\n    font-weight: 200;\n  }\n\n  img {\n    margin: 5cap;\n    width: 400px;\n  }\n}\n\n.user-modal {\n  width: 300px;\n  height: 150px;\n}\n\n@media screen and (max-width: 1024px) {\n  .hero img {\n    width: 250px;\n  }\n\n  .banner {\n    flex-direction: column;\n\n    img {\n      width: 400px;\n      bottom: 0;\n    }\n\n    button {\n      margin-top: 30px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background: var(--light-background);
    background-size: cover;
    max-height: 100vh;
    overflow-y: auto;
}

#app {
    position: relative;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    letter-spacing: 2px;
    width: 100%;
    height: 100vh;
    /* padding: 50px; */
}

button {
    background: var(--button-bg);
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 100px;
    padding: 10px 3px;
    cursor: pointer;
    transition: all .5s;
}

button:hover {
    background: red;
}

button:active {
    transform: scale(.9);
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
        padding: 20px;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAOA;IACI,sCAAsC;IACtC,2BAA2B;IAC3B,+BAA+B;IAC/B,oBAAoB;IACpB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,oDAAoD;IACpD,mCAAmC;IACnC,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,sBAAsB;QACtB,aAAa;IACjB;AACJ","sourcesContent":["@import './css/handleProjectInput.css';\n@import './css/renderProjects.css';\n@import './css/renderTodo.css';\n@import './css/header.css';\n@import './css/homeContent.css';\n@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n:root {\n    --light-background: rgb(244, 252, 255);\n    --yellow: rgb(252, 228, 90);\n    --neon-green: rgb(104, 255, 10);\n    --button-bg: #2e2e2e;\n    --header-height: 85px;\n    --dropshadow: 2px 3px 2px rgb(152, 152, 152);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    position: relative;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n    background: var(--light-background);\n    background-size: cover;\n    max-height: 100vh;\n    overflow-y: auto;\n}\n\n#app {\n    position: relative;\n    /* display: flex; */\n    flex-direction: column;\n    justify-content: center;\n    overflow-y: auto;\n    letter-spacing: 2px;\n    width: 100%;\n    height: 100vh;\n    /* padding: 50px; */\n}\n\nbutton {\n    background: var(--button-bg);\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    width: 100px;\n    padding: 10px 3px;\n    cursor: pointer;\n    transition: all .5s;\n}\n\nbutton:hover {\n    background: red;\n}\n\nbutton:active {\n    transform: scale(.9);\n}\n\ninput {\n    padding: 5px 3px;\n    border: 1px solid black;\n}\n\n@media screen and (max-width: 1024px) {\n    body {\n        flex-direction: column;\n    }\n\n    #app {\n        flex-direction: column;\n        padding: 20px;\n    }\n}"],"sourceRoot":""}]);
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

    headerTitle.textContent = 'Task-O\'-Matic';
    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    footerElement.textContent = `All Rights Reserved | Yengzzkie DzignTech©`;
    
    hamburger.addEventListener('click', () => {
        header.classList.add('open');
    })

    close.addEventListener('click', closeNavbar)


    function closeNavbar() {
        header.classList.remove('open');
    }

    header.append(headerTitle, footerElement);
    headerElement.append(hamburger, close)



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
    const hero = document.createElement('div');
    const heroTitle = document.createElement('h1');
    const slogan = document.createElement('p');
    const heroImage = new Image();
    const bannerImage = new Image();
    const banner = document.createElement('div')
    const userName = document.createElement('h1')
    const getStartedBtn = document.createElement('button');
    const usernameModal = document.createElement('dialog');

    bannerImage.src = _assets_banner_image_png__WEBPACK_IMPORTED_MODULE_1__;
    heroImage.src = _assets_notes_png__WEBPACK_IMPORTED_MODULE_0__;
    banner.className = 'banner';
    userName.className = 'greeting';
    usernameModal.className = 'user-modal';
    hero.className = 'hero';
    getStartedBtn.textContent = 'Add Notes';
    heroTitle.textContent = 'Task-O\'-Matic';
    slogan.textContent = 'Effortless Note-taking, Anytime, Anywhere with Task-O\'-Matic';
    document.body.append(usernameModal);

    getStartedBtn.addEventListener('click', _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    

    function checkUsername() { //on initial page load, this function is called
        if (!localStorage.getItem('username')) { //then checks if a username already exists in local storage, if not
        getNameModal(); //calls the getNameModal function to get an input from the user
        } else { // if a username already exists, set the username text content to a greeting
            userName.textContent = `Hello, ${localStorage.getItem('username')}, let's get started!`;
        }
    }

    function getNameModal() { 
        usernameModal.showModal();
        const usernameInput = document.createElement('input');
        const confirmBtn = document.createElement('button');

        confirmBtn.textContent = 'Confirm';

        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const username = usernameInput.value

            if (username.trim() !== '') {
                localStorage.setItem('username', username); //after setting the username in the local storage,
                usernameModal.close();
            } else {
                alert('Please enter a username.');
            }

            checkUsername(); //call the checkUsername again to display the userName textContent with the user's name
        })

        usernameModal.append(usernameInput, confirmBtn)
    }

    checkUsername();
    banner.append(userName, getStartedBtn, bannerImage)
    hero.append(banner, heroTitle, slogan, heroImage)

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
  { title: "Study", description: "Read some books", image: _assets_book_png__WEBPACK_IMPORTED_MODULE_1__, todo: [] },
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
    title: "Grocery",
    description: "Stock up those shelves",
    image: _assets_grocery_png__WEBPACK_IMPORTED_MODULE_7__,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLHNKQUFzSixxQ0FBcUMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLG9CQUFvQixzQkFBc0IsT0FBTyxLQUFLLG1CQUFtQiwwQkFBMEIsbUNBQW1DLGlEQUFpRCxtQkFBbUIseUJBQXlCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixlQUFlLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLE9BQU8sR0FBRywyQ0FBMkMscUJBQXFCLHNCQUFzQix1QkFBdUIscURBQXFELE9BQU8sb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQix1QkFBdUIsT0FBTyxJQUFJLHFCQUFxQjtBQUNybUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsSUFBSSxrQkFBa0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssU0FBUyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLGFBQWEsTUFBTSxNQUFN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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQ1Q7QUFDRztBQUM3Qjs7QUFFdEI7QUFDQTtBQUNBLFlBQVksZ0JBQWdCLEVBQUUsOERBQWE7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0VBQWM7QUFDaEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBLGNBQWMsbUVBQVcsS0FBSyx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9ob21lQ29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvcmVuZGVyUHJvamVjdHMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3M/ZjYyZiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzcz9lNjQ4Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3M/NzNiOCIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hvbWVDb250ZW50LmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3JlbmRlclRvZG8uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3dhcm5pbmdNb2RhbC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG5cbiAgICAuY2xvc2UtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTggMjE4IDIxOCk7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IC41cmVtIHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNER1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFxuICAgIC5jbG9zZS1tb2RhbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE4IDIxOCAyMTgpO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAuZm9ybS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggLjVyZW0gcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIlO1xuICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAub3Blbi1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMyU7XG4gICAgfVxufVxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGhzbGEoNjAsIDEwMCUsIDgwJSwgMC41ODIpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLW91dDtcblxuICAgICAgICAub3Blbi1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDMlO1xuICAgICAgICAgICAgcmlnaHQ6IC0yMiU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIlO1xuICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhlYWRlci5vcGVuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7O0lBRVo7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixxQ0FBcUM7SUFDekM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCOztRQUVoQjtZQUNJLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLDRCQUE0QjtZQUM1QixXQUFXO1FBQ2Y7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSjs7Ozs7QUFLQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLHNDQUFzQztRQUN0QywyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGFBQWE7UUFDYiw0QkFBNEI7UUFDNUIsa0NBQWtDOztRQUVsQztZQUNJLGNBQWM7WUFDZCxlQUFlO1lBQ2YsT0FBTztZQUNQLFdBQVc7WUFDWCxVQUFVOztZQUVWO2dCQUNJLGlCQUFpQjtZQUNyQjtRQUNKOztRQUVBO1lBQ0ksY0FBYztZQUNkLGtCQUFrQjtZQUNsQixPQUFPO1lBQ1AsU0FBUztZQUNULGlCQUFpQjtZQUNqQixVQUFVOztZQUVWO2dCQUNJLGlCQUFpQjtZQUNyQjtRQUNKO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7O1FBRXhCO1lBQ0ksVUFBVTtZQUNWLGVBQWU7WUFDZixXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxVQUFVO1FBQ2Q7SUFDSjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmODc5NDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogOTk5O1xcblxcbiAgICBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAyJTtcXG4gICAgICAgIGxlZnQ6IDIlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAub3Blbi1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3R0b206IDMlO1xcbiAgICB9XFxufVxcblxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgYmFja2dyb3VuZDogaHNsYSg2MCwgMTAwJSwgODAlLCAwLjU4Mik7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZS1vdXQ7XFxuXFxuICAgICAgICAub3Blbi1idXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAtMjIlO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuXFxuICAgICAgICAgICAgaSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDIlO1xcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcblxcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyLm9wZW4ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgcmlnaHQ6IC0xMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2xvc2UtYnV0dG9uIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyLCAwLjcxNiksIHJnYmEoMjU0LCAyNTQsIDE2MSwgMC41ODcpLCByZ2JhKDI0MCwgMjQwLCAyMzIsIDAuNTk0KSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpIHJvdGF0ZSgxNWRlZyk7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW46IDVjYXA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5cbi51c2VyLW1vZGFsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlcm8gaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICAuYmFubmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lQ29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhOztFQUViO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCO01BQ0Usa0JBQWtCO01BQ2xCLE1BQU07TUFDTixRQUFRO01BQ1IseUNBQXlDO01BQ3pDLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osaUJBQWlCO0lBQ25CO0VBQ0Y7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCOztJQUV0QjtNQUNFLFlBQVk7TUFDWixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgLmJhbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2NWRlZywgcmdiYSgyNTUsIDI1NSwgMiwgMC43MTYpLCByZ2JhKDI1NCwgMjU0LCAxNjEsIDAuNTg3KSwgcmdiYSgyNDAsIDI0MCwgMjMyLCAwLjU5NCkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpIHJvdGF0ZSgxNWRlZyk7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIlxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWFyZ2luOiA1Y2FwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxufVxcblxcbi51c2VyLW1vZGFsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmhlcm8gaW1nIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLmJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcmVtIC44cmVtICNhZmFmYWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLnBpbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMlO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTUlO1xuICAgICAgICBsZWZ0OiAtNyU7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICByaWdodDogNSU7XG5cbiAgICAgICAgJiBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDp2YTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDFmciwgMWZyKSk7XG4gICAgZ2FwOiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuXG5cbkBrZXlmcmFtZXMgZ3Jvd1VwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAucHJvamVjdC13cmFwcGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3JlbmRlclByb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFVBQVU7UUFDVixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUzs7UUFFVDtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLDBCQUEwQjtRQUM5Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixXQUFXO1FBQ2Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7O1FBRVo7WUFDSSxZQUFZO1FBQ2hCO0lBQ0o7OztJQUdBO1FBQ0ksNERBQTREO1FBQzVELHFCQUFxQjtRQUNyQixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDByZW0gLjhyZW0gI2FmYWZhZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBoMSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgIC5waW4taWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgcmlnaHQ6IDUwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogLTUlO1xcbiAgICAgICAgbGVmdDogLTclO1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmljb25zLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcblxcbiAgICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxZnIsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgZGl2IHtcbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGRpYWxvZyB7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgICAgICAgICAmIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuNXJlbSAxcmVtICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cblxuICAgICNhZGQtdGFzayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgcmlnaHQ6IDMlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLWRyb3BzaGFkb3cpKTtcbiAgICB9XG5cbiAgICAuYmFjay1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIHJpZ2h0OiAzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKSk7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XG4gICAgfVxufVxuXG4jYXBwIC5pbnB1dC1tb2RhbCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbmRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAuM3M7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICNhcHAgLmlucHV0LW1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvOyBcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCO1FBQ0k7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1FBQ3BCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLFlBQVk7O1lBRVo7Z0JBQ0ksa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osY0FBYztZQUNsQjtRQUNKO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7OztJQUdsQjtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YsU0FBUztRQUNULGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULGtCQUFrQjtRQUNsQixtREFBbUQ7UUFDbkQsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQjtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG5cXG4gICAgZGl2IHtcXG4gICAgICAgIC5kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xcblxcbiAgICAgICAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjVyZW0gMXJlbSAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXG5cXG4gICAgI2FkZC10YXNrIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgICByaWdodDogMyU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLWRyb3BzaGFkb3cpKTtcXG4gICAgfVxcblxcbiAgICAuYmFjay1idG4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzJTtcXG4gICAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpKTtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XFxuICAgIH1cXG59XFxuXFxuI2FwcCAuaW5wdXQtbW9kYWwge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG5cXG4gICAgdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB9XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbmltYXRpb246IHNjYWxlVXAgLjNzO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGVVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICNhcHAgLmlucHV0LW1vZGFsIHtcXG4gICAgICAgIG1hcmdpbjogMjAwcHggYXV0bzsgXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndhcm5pbmctbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7O0lBRWI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndhcm5pbmctbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL3JlbmRlclRvZG8uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaG9tZUNvbnRlbnQuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNDQsIDI1MiwgMjU1KTtcbiAgICAtLXllbGxvdzogcmdiKDI1MiwgMjI4LCA5MCk7XG4gICAgLS1uZW9uLWdyZWVuOiByZ2IoMTA0LCAyNTUsIDEwKTtcbiAgICAtLWJ1dHRvbi1iZzogIzJlMmUyZTtcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDg1cHg7XG4gICAgLS1kcm9wc2hhZG93OiAycHggM3B4IDJweCByZ2IoMTUyLCAxNTIsIDE1Mik7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jYXBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJnKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xufVxuXG5pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgI2FwcCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7SUFDSSxzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvREFBb0Q7SUFDcEQsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzJztcXG5AaW1wb3J0ICcuL2Nzcy9yZW5kZXJUb2RvLmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvaGVhZGVyLmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvaG9tZUNvbnRlbnQuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI0NCwgMjUyLCAyNTUpO1xcbiAgICAtLXllbGxvdzogcmdiKDI1MiwgMjI4LCA5MCk7XFxuICAgIC0tbmVvbi1ncmVlbjogcmdiKDEwNCwgMjU1LCAxMCk7XFxuICAgIC0tYnV0dG9uLWJnOiAjMmUyZTJlO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDg1cHg7XFxuICAgIC0tZHJvcHNoYWRvdzogMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNhcHAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogcGFkZGluZzogNTBweDsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDVweCAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICNhcHAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyUHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyVG9kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclRvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrLU9cXCctTWF0aWMnO1xuICAgIGhhbWJ1cmdlci5jbGFzc05hbWUgPSAnb3Blbi1idXR0b24nO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZS1idXR0b24nO1xuICAgIGhhbWJ1cmdlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXJcIj48L2k+YDtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtbGVmdFwiPjwvaT5gO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgQWxsIFJpZ2h0cyBSZXNlcnZlZCB8IFllbmd6emtpZSBEemlnblRlY2jCqWA7XG4gICAgXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmF2YmFyKVxuXG5cbiAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlLCBmb290ZXJFbGVtZW50KTtcbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZChoYW1idXJnZXIsIGNsb3NlKVxuXG5cblxuICAgIHJldHVybiB7IGhlYWRlckVsZW1lbnQgfTtcbn0iLCJpbXBvcnQgbm90ZXNQTkcgZnJvbSAnLi4vYXNzZXRzL25vdGVzLnBuZyc7XG5pbXBvcnQgYmFubmVyUE5HIGZyb20gJy4uL2Fzc2V0cy9iYW5uZXItaW1hZ2UucG5nJztcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuLi9tb2R1bGVzL3JlbmRlclByb2plY3RzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb25zdCBnZXRTdGFydGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdXNlcm5hbWVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuXG4gICAgYmFubmVySW1hZ2Uuc3JjID0gYmFubmVyUE5HO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBub3Rlc1BORztcbiAgICBiYW5uZXIuY2xhc3NOYW1lID0gJ2Jhbm5lcic7XG4gICAgdXNlck5hbWUuY2xhc3NOYW1lID0gJ2dyZWV0aW5nJztcbiAgICB1c2VybmFtZU1vZGFsLmNsYXNzTmFtZSA9ICd1c2VyLW1vZGFsJztcbiAgICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBnZXRTdGFydGVkQnRuLnRleHRDb250ZW50ID0gJ0FkZCBOb3Rlcyc7XG4gICAgaGVyb1RpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2stT1xcJy1NYXRpYyc7XG4gICAgc2xvZ2FuLnRleHRDb250ZW50ID0gJ0VmZm9ydGxlc3MgTm90ZS10YWtpbmcsIEFueXRpbWUsIEFueXdoZXJlIHdpdGggVGFzay1PXFwnLU1hdGljJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh1c2VybmFtZU1vZGFsKTtcblxuICAgIGdldFN0YXJ0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJQcm9qZWN0cyk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJuYW1lKCkgeyAvL29uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpKSB7IC8vdGhlbiBjaGVja3MgaWYgYSB1c2VybmFtZSBhbHJlYWR5IGV4aXN0cyBpbiBsb2NhbCBzdG9yYWdlLCBpZiBub3RcbiAgICAgICAgZ2V0TmFtZU1vZGFsKCk7IC8vY2FsbHMgdGhlIGdldE5hbWVNb2RhbCBmdW5jdGlvbiB0byBnZXQgYW4gaW5wdXQgZnJvbSB0aGUgdXNlclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBhIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzLCBzZXQgdGhlIHVzZXJuYW1lIHRleHQgY29udGVudCB0byBhIGdyZWV0aW5nXG4gICAgICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGBIZWxsbywgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKX0sIGxldCdzIGdldCBzdGFydGVkIWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYW1lTW9kYWwoKSB7IFxuICAgICAgICB1c2VybmFtZU1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG5cbiAgICAgICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZVxuXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lKTsgLy9hZnRlciBzZXR0aW5nIHRoZSB1c2VybmFtZSBpbiB0aGUgbG9jYWwgc3RvcmFnZSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB1c2VybmFtZS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2tVc2VybmFtZSgpOyAvL2NhbGwgdGhlIGNoZWNrVXNlcm5hbWUgYWdhaW4gdG8gZGlzcGxheSB0aGUgdXNlck5hbWUgdGV4dENvbnRlbnQgd2l0aCB0aGUgdXNlcidzIG5hbWVcbiAgICAgICAgfSlcblxuICAgICAgICB1c2VybmFtZU1vZGFsLmFwcGVuZCh1c2VybmFtZUlucHV0LCBjb25maXJtQnRuKVxuICAgIH1cblxuICAgIGNoZWNrVXNlcm5hbWUoKTtcbiAgICBiYW5uZXIuYXBwZW5kKHVzZXJOYW1lLCBnZXRTdGFydGVkQnRuLCBiYW5uZXJJbWFnZSlcbiAgICBoZXJvLmFwcGVuZChiYW5uZXIsIGhlcm9UaXRsZSwgc2xvZ2FuLCBoZXJvSW1hZ2UpXG5cbiAgICByZXR1cm4gaGVybztcbn0iLCJpbXBvcnQgcGVyc29uYWxQTkcgZnJvbSAnLi4vYXNzZXRzL3BlcnNvbmFsLnBuZyc7XG5pbXBvcnQgcmVhZFBORyBmcm9tICcuLi9hc3NldHMvYm9vay5wbmcnO1xuaW1wb3J0IHdvcmtQTkcgZnJvbSAnLi4vYXNzZXRzL3dvcmsucG5nJztcbmltcG9ydCBoZWFsdGhQTkcgZnJvbSAnLi4vYXNzZXRzL2hlYWx0aC5wbmcnO1xuaW1wb3J0IHNvY2lhbFBORyBmcm9tICcuLi9hc3NldHMvc29jaWFsLnBuZyc7XG5pbXBvcnQgaG9iYmllc1BORyBmcm9tICcuLi9hc3NldHMvaG9iYnkucG5nJztcbmltcG9ydCBmaW5hbmNlUE5HIGZyb20gJy4uL2Fzc2V0cy9maW5hbmNlLnBuZyc7XG5pbXBvcnQgZ3JvY2VyeVBORyBmcm9tICcuLi9hc3NldHMvZ3JvY2VyeS5wbmcnO1xuaW1wb3J0IG90aGVyUE5HIGZyb20gJy4uL2Fzc2V0cy9vdGhlci5wbmcnO1xuXG5leHBvcnQgbGV0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUGVyc29uYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25hbCBzdHVmZlwiLFxuICAgIGltYWdlOiBwZXJzb25hbFBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAgeyB0aXRsZTogXCJXb3JrXCIsIGRlc2NyaXB0aW9uOiBcIkdvIHRvIHdvcmtcIiwgaW1hZ2U6IHdvcmtQTkcsIHRvZG86IFtdIH0sXG4gIHsgdGl0bGU6IFwiU3R1ZHlcIiwgZGVzY3JpcHRpb246IFwiUmVhZCBzb21lIGJvb2tzXCIsIGltYWdlOiByZWFkUE5HLCB0b2RvOiBbXSB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGVhbHRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGVhbHRoeSBMaXZpbmdcIixcbiAgICBpbWFnZTogaGVhbHRoUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU29jaWFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55dGhpbmcgYWJvdXQgc29jaWFsaXppbmdcIixcbiAgICBpbWFnZTogc29jaWFsUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSG9iYmllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueXRoaW5nIGFib3V0IGhvYmJpZXNcIixcbiAgICBpbWFnZTogaG9iYmllc1BORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZpbmFuY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgYWJvdXQgbW9uZXlcIixcbiAgICBpbWFnZTogZmluYW5jZVBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkdyb2NlcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdG9jayB1cCB0aG9zZSBzaGVsdmVzXCIsXG4gICAgaW1hZ2U6IGdyb2NlcnlQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPdGhlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk90aGVyIHN0dWZmIHlvdSBtYXkgdGhpbmsgb2ZcIixcbiAgICBpbWFnZTogb3RoZXJQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3JlbmRlclByb2plY3RzLmNzc1wiO1xuaW1wb3J0IHJlbmRlclRvZG8gZnJvbSAnLi9yZW5kZXJUb2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG5cbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgIC8vIElmIG5vdCwgc2V0IGl0IHdpdGggdGhlIHByb2plY3RzIGRhdGFcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG5cbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jb250YWlucyB0aGUgaW5wdXQgZm9ybVxuXG4gIHByb2plY3RXcmFwcGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC13cmFwcGVyXCI7XG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFycyB0aGUgY29udGVudHMgZXZlcnl0aW1lIGEgbmV3IHByb2plY3QgaXMgYWRkZWQgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcHJvamVjdHNcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBkZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gY29uc3QgdGFza0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcGluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3BlblByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBwcm9qZWN0SW1hZ2Uuc3JjID0gcHJvamVjdC5pbWFnZTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jb250YWluZXJcIjtcbiAgICBpY29uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImljb25zLWNvbnRhaW5lclwiO1xuICAgIHBpbkljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbWFwLXBpblwiPjwvaT5gO1xuICAgIHBpbkljb24uY2xhc3NOYW1lID0gJ3Bpbi1pY29uJztcbiAgICBvcGVuUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWZvbGRlci1vcGVuXCI+PC9pPmA7XG4gICAgLy8gdGFza0NvdW50ZXIuaW5uZXJIVE1MID0gbnVtT2ZUYXNrcy5sZW5ndGggPiAwID8gYFwiWW91IGhhdmUgJHtudW1PZlRhc2tzLmxlbmd0aH0gdGFza3MgaW4gdGhpcyBwcm9qZWN0XCJgIDogYEFsbCB0YXNrcyBhcmUgY2xlYXJlZGA7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgZGVzY0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBvcGVuUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gaW5kZXg7IC8vIENhcHR1cmUgdGhlIGN1cnJlbnQgcHJvamVjdCBpbmRleFxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICByZW5kZXJUb2RvKHByb2plY3RJbmRleCk7XG4gICAgICB1bC5hcHBlbmQobGkpXG4gICAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgICBhcHAuYXBwZW5kKHVsKTtcbiAgICB9KTtcbi8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGljb25zQ29udGFpbmVyLmFwcGVuZChvcGVuUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdEltYWdlLCBwaW5JY29uLCBpY29uc0NvbnRhaW5lciwgdGl0bGVDb250YWluZXIsIGRlc2NDb250YWluZXIpO1xuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBhcHAuYXBwZW5kKHByb2plY3RXcmFwcGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RXcmFwcGVyO1xufSIsImltcG9ydCBcIi4uL2Nzcy9yZW5kZXJUb2RvLmNzc1wiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3JlbmRlclByb2plY3RzLmpzXCI7XG5pbXBvcnQgd2FybmluZ01vZGFsIGZyb20gXCIuL3dhcm5pbmdNb2RhbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvKGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShwcm9qZWN0c0pTT04pO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdOyAvL2dldCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3RzXG5cbiAgLy90aGlzIGJsb2NrIGJlbG93IGFyZSBhbGwgdGhlIHZhcmlhYmxlc1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgY29uc3QgaW5wdXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3QudG9kbztcblxuICAvL3RoaXMgYmxvY2sgYmVsb3cgYXJlIHRoZSB2YXJpYWJsZSB0ZXh0IGFzc2lnbm1lbnQsIHNlcGFyYXRpbmcgdGhlbSBmcm9tIHRoZSB2YXJpYWJsZXMgdG8gYXZvaWQgY29uZnVzaW9uXG5cbiAgaW5wdXRNb2RhbC5jbGFzc05hbWUgPSBcImlucHV0LW1vZGFsXCI7XG4gIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIGNsb3NlTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG9kby1jb250YWluZXJcIjtcbiAgb3Blbk1vZGFsQnRuLmlubmVySFRNTCA9XG4gICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZF9ub3Rlczwvc3Bhbj4nO1xuICBvcGVuTW9kYWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFza1wiKTtcbiAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4nO1xuICBiYWNrQnRuLmNsYXNzTmFtZSA9IFwiYmFjay1idG5cIjtcbiAgY2F0ZWdvcnlUaXRsZS5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LnRpdGxlfSBOb3RlcyA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5tZW51X2Jvb2s8L3NwYW4+YDtcblxuICBvcGVuTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbnB1dE1vZGFsLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXRNb2RhbC5jbG9zZSgpO1xuICB9KTtcblxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcblxuICAvL21haW4gZnVuY3Rpb24gaW4gYWRkaW5nIG5ldyB0YXNrc1xuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IHRvZG9JbnB1dFZhbHVlID0gdG9kb0lucHV0LnZhbHVlO1xuXG4gICAgaWYgKCF0b2RvSW5wdXRWYWx1ZSkge1xuICAgICAgd2FybmluZ01vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgcG9zdGVkRGF0ZSA9IGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXdEYXRlLmdldE1vbnRoKCl9LSR7bmV3RGF0ZS5nZXREYXRlKCl9IC8gJHtuZXdEYXRlLmdldEhvdXJzKCl9OiR7bmV3RGF0ZS5nZXRNaW51dGVzKCl9OiR7bmV3RGF0ZS5nZXRTZWNvbmRzKCl9YDtcbiAgICAgIHRhc2tzLnB1c2goeyB0b2RvOiB0b2RvSW5wdXRWYWx1ZSwgZGF0ZTogcG9zdGVkRGF0ZSB9KTtcbiAgICAgIHByb2plY3QudG9kbyA9IHRhc2tzOyAvLyBVcGRhdGUgdGhlIHByb2plY3QncyB0b2RvIGFycmF5IHdpdGggdGhlIHVwZGF0ZWQgdGFza3NcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgLy9zdG9yZSB0aGUgbmV3IGFkZGVkIHRhc2tzIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICByZW5kZXJUb2RvKGluZGV4KTsgLy90aGVuIHJlLXJlbmRlciB0aGUgYXJyYXkgYnkgY2FsbGluZyByZW5kZXJUb2RvIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIHRoZSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkgZnVuY3Rpb25cblxuICAgICAgY29uc3QgbGFzdFRhc2sgPSB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVG9kbzpcIiwgbGFzdFRhc2sudG9kbyk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGU6XCIsIGxhc3RUYXNrLmRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9KTsgLy9yZS1yZW5kZXJzIHRoZSBwcm9qZWN0cyB3aGVuIHRoZSBiYWNrIGJ1dHRvbiBpcyBjbGlja2VkXG5cbiAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGNvbnRlbnQgaW4gdGhlIGFwcCBlbGVtZW50IHRvIHByZXZlbnQgZHVwbGljYXRpbmcgb2YgY29udGVudHMgb24gcmUtcmVuZGVyXG4gIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgdG9kbyBhcnJheSBvZiB0aGUgcHJvamVjdCBhbmQgY3JlYXRlIGxpc3QgaXRlbXMgZm9yIGVhY2ggdG9kb1xuICB0YXNrcy5mb3JFYWNoKCh0b2RvSXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRhdGVQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wZW5EZWxldGVNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFza3NbaW5kZXhdO1xuXG4gICAgb3BlbkRlbGV0ZU1vZGFsQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT4nO1xuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkNvbmZpcm1cIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uLnRleHRDb250ZW50ID0gXCJBcmUgeW91IGRvbmUgd2l0aCB0aGlzIHRhc2s/XCI7XG4gICAgdG9kb1Byb3AudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50b2RvO1xuICAgIGRhdGVQcm9wLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZGF0ZTtcbiAgICBkYXRlUHJvcC5jbGFzc05hbWUgPSBcImRhdGVcIjtcblxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9wLCBkYXRlUHJvcCk7XG4gICAgbGkuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpOyAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgdGFza3MgYXJyYXlcbiAgICAgIHByb2plY3QudG9kbyA9IHRhc2tzOyAvLyBVcGRhdGUgdGhlIHByb2plY3QncyB0b2RvIGFycmF5IHdpdGggdGhlIHVwZGF0ZWQgdGFza3NcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSB3aXRoIHRoZSB1cGRhdGVkIHByb2plY3RzXG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgdGFzaydzIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtIGZyb20gdGhlIERPTVxuICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuY2hpbGROb2Rlc1t0YXNrSW5kZXhdKTtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG1vcmUgdGFza3MsIHJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnQgYW5kIHJlLXJlbmRlciBvbmx5IHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5wdXRNb2RhbC5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGlhbG9nXG4gICAgICAgIGlucHV0TW9kYWwucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7IC8vIFJlLXJlbmRlciBvbmx5IHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuRGVsZXRlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vb3BlbnMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gbW9kYWxcbiAgICAgIGRlbGV0ZU1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL2Nsb3NlcyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBtb2RhbFxuICAgICAgZGVsZXRlTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIEluc2lkZSB0aGUgZm9yRWFjaCBsb29wIHRvIGNyZWF0ZSBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCB0YXNrXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5pbmRleE9mKHRvZG9JdGVtKTsgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIHRhc2sgdG8gcmVtb3ZlXG4gICAgICByZW1vdmVUYXNrKHRhc2tJbmRleCk7IC8vIENhbGwgdGhlIHJlbW92ZVRhc2sgZnVuY3Rpb24gd2l0aCB0aGUgaW5kZXggdG8gcmVtb3ZlXG4gICAgfSk7XG5cbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZChkZWxldGVCdG4sIGNhbmNlbEJ0bik7XG4gICAgZGVsZXRlTW9kYWwuYXBwZW5kKGRlbGV0ZU1vZGFsQ29uZmlybWF0aW9uLCBidXR0b25XcmFwcGVyKTtcbiAgICBsaS5hcHBlbmQob3BlbkRlbGV0ZU1vZGFsQnRuLCBkZWxldGVNb2RhbCk7XG4gICAgdWwuYXBwZW5kKGxpKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kIHRoZSB1bm9yZGVyZWQgbGlzdCB0byB0aGUgYXBwIGVsZW1lbnRcbiAgaW5wdXRNb2RhbC5hcHBlbmQodG9kb0lucHV0LCBhZGRUb2RvQnRuLCBjbG9zZU1vZGFsQnRuKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlUaXRsZSwgdWwsIG9wZW5Nb2RhbEJ0biwgYmFja0J0bik7XG4gIGFwcC5hcHBlbmQodG9kb0NvbnRhaW5lciwgaW5wdXRNb2RhbCk7XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy93YXJuaW5nTW9kYWwuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZ01vZGFsKCkge1xuICBjb25zdCB3YXJuaW5nTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBjb25zdCB3YXJuaW5nRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHdhcm5pbmdDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgd2FybmluZ01vZGFsLmNsYXNzTmFtZSA9ICd3YXJuaW5nLW1vZGFsJztcbiAgd2FybmluZ0Nsb3NlQnRuLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICB3YXJuaW5nRGlhbG9nLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCB1cCB0aGUgdGV4dCBmaWVsZCwgZG8gbm90IHByb2NyYXN0aW5hdGUhXCI7XG5cbiAgd2FybmluZ0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2FybmluZ01vZGFsLmNsb3NlKCk7XG4gIH0pO1xuXG4gIHdhcm5pbmdNb2RhbC5hcHBlbmQod2FybmluZ0RpYWxvZywgd2FybmluZ0Nsb3NlQnRuKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQod2FybmluZ01vZGFsKTtcblxuICB3YXJuaW5nTW9kYWwuc2hvd01vZGFsKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlclByb2plY3RzLmpzJztcbmltcG9ydCBoZWFkZXJDb250ZW50IGZyb20gJy4vbW9kdWxlcy9oZWFkZXIuanMnO1xuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vbW9kdWxlcy9ob21lQ29udGVudC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCB7IGhlYWRlckVsZW1lbnQgfSA9IGhlYWRlckNvbnRlbnQoKTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuXG4gICAgYXBwLmFwcGVuZChuZXdDb250ZW50KVxuXG4gICAgcmV0dXJuIGFwcDtcbn1cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5ob21lQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhvdXNlXCI+PC9pPiBIb21lYDtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29udGVudChob21lQ29udGVudCgpKVxufSlcblxuY29uc3Qgbm90ZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcbm5vdGVzQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFsaWduLWxlZnRcIj48L2k+IE15IE5vdGVzYDtcbm5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRlbnQocmVuZGVyUHJvamVjdHMoKSlcbn0pXG5cbmNvbnN0IGluc3RydWN0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnMnKTtcbmluc3RydWN0aW9uc0J0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZXJzb24tY2hhbGtib2FyZFwiPjwvaT4gSW5zdHJ1Y3Rpb25zYDtcbmluc3RydWN0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVDb250ZW50KGhvbWVDb250ZW50KCkpXG59KVxuXG5yZW5kZXIoKTtcbnVwZGF0ZUNvbnRlbnQoaG9tZUNvbnRlbnQoKSk7IC8vY2FsbHMgaG9tZUNvbnRlbnQgb24gcGFnZSBsb2FkIGFzIGRlZmF1bHQgbGFuZGluZyBwYWdlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9