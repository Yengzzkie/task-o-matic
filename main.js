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
        margin-right: 5px;
    }

    /* .banner {
        position: relative;
        top: 0;
        left: 0;
        background: linear-gradient(45deg, rgb(81, 154, 223), rgb(175, 215, 239));
        border: 1px solid black;
        height: 200px;
        width: 100%;
    } */

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
        font-size: 1.2rem;
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
            top: 2%;
            right: -17%;
            opacity: 1;
        }

        .close-button {
            display: block;
            position: absolute;
            top: 2%;
            right: 5%;
            font-size: 1.5rem;
            opacity: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;;IAEZ;QACI,iBAAiB;IACrB;;IAEA;;;;;;;;OAQG;;IAEH;QACI,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;;IAErB;;IAEA;QACI,aAAa;QACb,iBAAiB;QACjB,2BAA2B;QAC3B,qCAAqC;IACzC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;QACX,gBAAgB;;QAEhB;YACI,aAAa;YACb,uBAAuB;YACvB,uBAAuB;YACvB,gBAAgB;YAChB,mBAAmB;YACnB,WAAW;YACX,kBAAkB;QACtB;;QAEA;YACI,4BAA4B;YAC5B,WAAW;QACf;IACJ;;IAEA;QACI,eAAe;QACf,UAAU;IACd;AACJ;;;;;AAKA;IACI;QACI,eAAe;QACf,sCAAsC;QACtC,2BAA2B;QAC3B,YAAY;QACZ,aAAa;QACb,4BAA4B;QAC5B,kCAAkC;;QAElC;YACI,cAAc;YACd,eAAe;YACf,OAAO;YACP,WAAW;YACX,UAAU;QACd;;QAEA;YACI,cAAc;YACd,kBAAkB;YAClB,OAAO;YACP,SAAS;YACT,iBAAiB;YACjB,UAAU;QACd;IACJ;;IAEA;QACI,wBAAwB;;QAExB;YACI,UAAU;YACV,eAAe;YACf,WAAW;QACf;;QAEA;YACI,UAAU;QACd;IACJ;;IAEA;QACI,sBAAsB;QACtB,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');\n\nheader {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background: #ffff8794;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    height: 100vh;\n    width: 300px;\n    text-align: center;\n    padding: 15px;\n    z-index: 999;\n\n    i {\n        margin-right: 5px;\n    }\n\n    /* .banner {\n        position: relative;\n        top: 0;\n        left: 0;\n        background: linear-gradient(45deg, rgb(81, 154, 223), rgb(175, 215, 239));\n        border: 1px solid black;\n        height: 200px;\n        width: 100%;\n    } */\n\n    h1 {\n        position: absolute;\n        top: 2%;\n        left: 2%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-size: 1.3rem;\n        font-weight: 200;\n        margin: 20px 10px;\n        \n    }\n\n    .open-button {\n        display: none;\n        font-size: 1.2rem;\n        transform: translateX(-50%);\n        animation: bounce .5s infinite linear;\n    }\n\n    .close-button {\n        display: none;\n    }\n\n    nav {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin-top: 80px;\n\n        button {\n            display: flex;\n            background: transparent;\n            color: var(--button-bg);\n            border-radius: 0;\n            letter-spacing: 4px;\n            width: 100%;\n            padding-left: 15px;\n        }\n\n        button:hover {\n            background: var(--button-bg);\n            color: #fff;\n        }\n    }\n\n    footer {\n        position: fixed;\n        bottom: 3%;\n    }\n}\n\n\n\n\n@media screen and (max-width: 1024px) {\n    header {\n        position: fixed;\n        background: hsla(60, 100%, 80%, 0.582);\n        backdrop-filter: blur(10px);\n        width: 250px;\n        height: 100vh;\n        transform: translateX(-100%);\n        transition: transform .4s ease-out;\n\n        .open-button {\n            display: block;\n            position: fixed;\n            top: 2%;\n            right: -17%;\n            opacity: 1;\n        }\n\n        .close-button {\n            display: block;\n            position: absolute;\n            top: 2%;\n            right: 5%;\n            font-size: 1.5rem;\n            opacity: 0;\n        }\n    }\n\n    header.open {\n        transform: translateX(0);\n\n        span {\n            opacity: 0;\n            position: fixed;\n            right: -10%;\n        }\n\n        .close-button {\n            opacity: 1;\n        }\n    }\n\n    h1 {\n        align-self: flex-start;\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    font-family: "", sans-serif;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 20px;
  }

  img {
    margin: 5cap;
    width: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .hero img {
    width: 250px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/homeContent.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;;EAEZ;IACE,2BAA2B;IAC3B,wCAAwC;IACxC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":[".hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n\n  h1 {\n    font-family: \"\", sans-serif;\n    font-family: \"IBM Plex Sans\", sans-serif;\n    font-style: normal;\n    font-size: 3rem;\n    font-weight: 200;\n    margin-bottom: 20px;\n  }\n\n  img {\n    margin: 5cap;\n    width: 400px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .hero img {\n    width: 250px;\n  }\n}\n"],"sourceRoot":""}]);
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
    background: #ffffff;
    box-shadow: 0 0rem .8rem #afafaf;
    border-radius: 10px;
    width: 100%;
    max-height: 300px;
    padding: 50px 20px;
    margin: 15px;

    h1 {
        padding-left: 10px;
        border-radius: 7px;
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
        padding: 1px;

        margin-left: 10px;
        width: 35px;
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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
    }


    .project-wrapper {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-items: center;
        gap: 15px;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/renderProjects.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;IAChC,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;;IAEZ;QACI,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,UAAU;QACV,iBAAiB;QACjB,yBAAyB;IAC7B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,YAAY;;QAEZ,iBAAiB;QACjB,WAAW;IACf;;IAEA;QACI,gBAAgB;QAChB,cAAc;QACd,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;;QAET;YACI,YAAY;YACZ,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,YAAY;YACZ,eAAe;YACf,0BAA0B;QAC9B;;QAEA;YACI,aAAa;YACb,WAAW;QACf;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,aAAa;AACjB;;;;AAIA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;;;IAGA;QACI,4DAA4D;QAC5D,qBAAqB;QACrB,SAAS;IACb;AACJ","sourcesContent":[".project-container {\n    position: relative;\n    background: #ffffff;\n    box-shadow: 0 0rem .8rem #afafaf;\n    border-radius: 10px;\n    width: 100%;\n    max-height: 300px;\n    padding: 50px 20px;\n    margin: 15px;\n\n    h1 {\n        padding-left: 10px;\n        border-radius: 7px;\n    }\n\n    .pin-icon {\n        position: absolute;\n        top: 3%;\n        right: 50%;\n        font-size: 1.2rem;\n        transform: rotate(-40deg);\n    }\n\n    ul {\n        max-width: 100%;\n    }\n\n    img {\n        padding: 1px;\n\n        margin-left: 10px;\n        width: 35px;\n    }\n\n    p {\n        font-size: .9rem;\n        color: #4f4f4f;\n        margin: 10px;\n    }\n\n    span {\n        font-size: .9rem;\n        color: #4f4f4f;;\n    }\n\n    button {\n        border: none;\n        border-radius: 5px;\n        padding: 5px;\n        margin: 10px;\n    }\n\n    .icons-container {\n        position: absolute;\n        top: 5%;\n        right: 5%;\n\n        & button {\n            border: none;\n            border-radius: 5px;\n            width: 30px;\n            padding: 5px;\n            margin: 10px;\n            cursor: pointer; \n            transition: background .3s;\n        }\n\n        button:hover {\n            background:va;\n            color: #fff;\n        }\n    }\n}\n\n.project-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 40px;\n    max-height: 100%;\n    width: 100%;\n    padding: 20px;\n}\n\n\n\n@keyframes growUp {\n    0% {\n        transform: scale(.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .project-container {\n        height: auto;\n    }\n\n\n    .project-wrapper {\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        justify-items: center;\n        gap: 15px;\n    }\n}"],"sourceRoot":""}]);
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
    overflow-x: scroll;
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
    box-shadow: 0 0.5rem 1rem #ccc;
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
}`, "",{"version":3,"sources":["webpack://./src/css/renderTodo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;;IAEhB;QACI;YACI,WAAW;YACX,kBAAkB;YAClB,gBAAgB;YAChB,mBAAmB;YACnB,gBAAgB;QACpB;IACJ;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,aAAa;QACb,mBAAmB;QACnB,kBAAkB;;QAElB;YACI,aAAa;YACb,8BAA8B;YAC9B,YAAY;;YAEZ;gBACI,kBAAkB;gBAClB,WAAW;gBACX,YAAY;gBACZ,cAAc;YAClB;QACJ;IACJ;AACJ;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;;;IAGlB;QACI,eAAe;QACf,UAAU;QACV,SAAS;QACT,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,sCAAsC;IAC1C;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;QACT,kBAAkB;QAClB,mDAAmD;QACnD,WAAW;QACX,YAAY;QACZ,UAAU;IACd;;IAEA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB;QACI,YAAY;QACZ,YAAY;QACZ,mBAAmB;QACnB,YAAY;IAChB;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,qBAAqB;IACzB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,YAAY;QACZ,aAAa;QACb,kBAAkB;IACtB;AACJ","sourcesContent":["li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 10px;\n    box-shadow: var(--dropshadow);\n    list-style: none;\n    max-width: 100%;\n    max-height: 300px;\n    overflow-x: scroll;\n    padding: 15px;\n    margin-top: 15px;\n\n    div {\n        .date {\n            color: gray;\n            font-style: italic;\n            font-size: .9rem;\n            letter-spacing: 1px;\n            margin-top: 20px;\n        }\n    }\n\n    & button {\n        width: 30px;\n        height: 30px;\n        padding: 9px;\n        cursor: pointer;\n    }\n\n    dialog {\n        width: 320px;\n        height: 150px;\n        padding: 30px;\n        border-radius: 20px;\n        overflow-x: hidden;\n\n        div {\n            display: flex;\n            justify-content: space-between;\n            margin: 20px;\n\n            & button {\n                text-align: center;\n                width: 80px;\n                height: 30px;\n                margin: 0 15px;\n            }\n        }\n    }\n}\n\n.todo-container {\n    box-shadow: 0 0.5rem 1rem #ccc;\n    width: 100%;\n    height: auto;\n    min-height: 100%;\n    margin-top: 30px;\n    padding: 20px 40px;\n    overflow-x: scroll;\n\n\n    #add-task {\n        position: fixed;\n        bottom: 5%;\n        right: 3%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        filter: drop-shadow(var(--dropshadow));\n    }\n\n    .back-btn {\n        position: absolute;\n        top: 3%;\n        right: 3%;\n        border-radius: 50%;\n        filter: drop-shadow(2px 3px 2px rgb(152, 152, 152));\n        width: 40px;\n        height: 40px;\n        padding: 0;\n    }\n\n    button:hover {\n        transform: scale(.5rem);\n    }\n}\n\n#app .input-modal {\n    width: 350px;\n    height: 200px;\n    padding: 20px 10px;\n\n    textarea {\n        height: 85px;\n        width: 330px;\n        margin-bottom: 10px;\n        padding: 5px;\n    }\n\n    button {\n        margin-right: 20px;\n    }\n}\n\ndialog {\n    border-radius: 15px;\n    border: none;\n    margin: auto;\n    animation: scaleUp .3s;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n@keyframes scaleUp {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    #app .input-modal {\n        margin: 200px auto; \n        width: 350px;\n        height: 200px;\n        padding: 20px 10px;\n    }\n}"],"sourceRoot":""}]);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    letter-spacing: 2px;
    width: 100%;
    height: 100vh;
    padding: 50px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAOA;IACI,sCAAsC;IACtC,2BAA2B;IAC3B,+BAA+B;IAC/B,oBAAoB;IACpB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,oDAAoD;IACpD,mCAAmC;IACnC,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,sBAAsB;QACtB,aAAa;IACjB;AACJ","sourcesContent":["@import './css/handleProjectInput.css';\n@import './css/renderProjects.css';\n@import './css/renderTodo.css';\n@import './css/header.css';\n@import './css/homeContent.css';\n@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n:root {\n    --light-background: rgb(244, 252, 255);\n    --yellow: rgb(252, 228, 90);\n    --neon-green: rgb(104, 255, 10);\n    --button-bg: #2e2e2e;\n    --header-height: 85px;\n    --dropshadow: 2px 3px 2px rgb(152, 152, 152);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    position: relative;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n    background: var(--light-background);\n    background-size: cover;\n    max-height: 100vh;\n    overflow-y: auto;\n}\n\n#app {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow-y: auto;\n    letter-spacing: 2px;\n    width: 100%;\n    height: 100vh;\n    padding: 50px;\n}\n\nbutton {\n    background: var(--button-bg);\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    width: 100px;\n    padding: 10px 3px;\n    cursor: pointer;\n    transition: all .5s;\n}\n\nbutton:hover {\n    background: red;\n}\n\nbutton:active {\n    transform: scale(.9);\n}\n\ninput {\n    padding: 5px 3px;\n    border: 1px solid black;\n}\n\n@media screen and (max-width: 1024px) {\n    body {\n        flex-direction: column;\n    }\n\n    #app {\n        flex-direction: column;\n        padding: 20px;\n    }\n}"],"sourceRoot":""}]);
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


function homeContent() {
    const hero = document.createElement('div');
    hero.className = 'hero';
    const heroTitle = document.createElement('h1');
    const slogan = document.createElement('p');

    const heroImage = new Image();
    heroImage.src = _assets_notes_png__WEBPACK_IMPORTED_MODULE_0__;

    heroTitle.textContent = 'Task-O\'-Matic';
    slogan.textContent = 'Effortless Note-taking, Anytime, Anywhere with Task-O\'-Matic';

    hero.append(heroTitle, slogan, heroImage,)

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
    titleContainer.append(projectTitle, projectImage);
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
    projectContainer.append(pinIcon, iconsContainer, titleContainer, descContainer);
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

module.exports = __webpack_require__.p + "dd419b47b03ce6ecde20.png";

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

module.exports = __webpack_require__.p + "7ffcf71e4876d305875c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLHNKQUFzSixxQ0FBcUMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLG9CQUFvQixzQkFBc0IsT0FBTyxLQUFLLG1CQUFtQiwwQkFBMEIsbUNBQW1DLGlEQUFpRCxtQkFBbUIseUJBQXlCLGlCQUFpQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixlQUFlLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLE9BQU8sR0FBRywyQ0FBMkMscUJBQXFCLHNCQUFzQix1QkFBdUIscURBQXFELE9BQU8sb0JBQW9CLHVCQUF1QixPQUFPLGdCQUFnQix1QkFBdUIsT0FBTyxJQUFJLHFCQUFxQjtBQUNybUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsSUFBSSxrQkFBa0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxTQUFTLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUs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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQ1Q7QUFDRztBQUM3Qjs7QUFFdEI7QUFDQTtBQUNBLFlBQVksZ0JBQWdCLEVBQUUsOERBQWE7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0VBQWM7QUFDaEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBLGNBQWMsbUVBQVcsS0FBSyx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9ob21lQ29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvcmVuZGVyUHJvamVjdHMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3M/ZjYyZiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzcz9lNjQ4Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL3dhcm5pbmdNb2RhbC5jc3M/NzNiOCIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hvbWVDb250ZW50LmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3JlbmRlclRvZG8uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3dhcm5pbmdNb2RhbC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG5cbiAgICAuY2xvc2UtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTggMjE4IDIxOCk7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IC41cmVtIHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNER1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFxuICAgIC5jbG9zZS1tb2RhbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE4IDIxOCAyMTgpO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAuZm9ybS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggLjVyZW0gcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XG4gICAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLyogLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYig4MSwgMTU0LCAyMjMpLCByZ2IoMTc1LCAyMTUsIDIzOSkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfSAqL1xuXG4gICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMiU7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMyU7XG4gICAgfVxufVxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGhzbGEoNjAsIDEwMCUsIDgwJSwgMC41ODIpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLW91dDtcblxuICAgICAgICAub3Blbi1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDIlO1xuICAgICAgICAgICAgcmlnaHQ6IC0xNyU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMiU7XG4gICAgICAgICAgICByaWdodDogNSU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoZWFkZXIub3BlbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDogLTEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZOztJQUVaO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBOzs7Ozs7OztPQVFHOztJQUVIO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0IscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGdCQUFnQjs7UUFFaEI7WUFDSSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSw0QkFBNEI7WUFDNUIsV0FBVztRQUNmO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0o7Ozs7O0FBS0E7SUFDSTtRQUNJLGVBQWU7UUFDZixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLGtDQUFrQzs7UUFFbEM7WUFDSSxjQUFjO1lBQ2QsZUFBZTtZQUNmLE9BQU87WUFDUCxXQUFXO1lBQ1gsVUFBVTtRQUNkOztRQUVBO1lBQ0ksY0FBYztZQUNkLGtCQUFrQjtZQUNsQixPQUFPO1lBQ1AsU0FBUztZQUNULGlCQUFpQjtZQUNqQixVQUFVO1FBQ2Q7SUFDSjs7SUFFQTtRQUNJLHdCQUF3Qjs7UUFFeEI7WUFDSSxVQUFVO1lBQ1YsZUFBZTtZQUNmLFdBQVc7UUFDZjs7UUFFQTtZQUNJLFVBQVU7UUFDZDtJQUNKOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbGFtOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmY4Nzk0O1xcbiAgICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB6LWluZGV4OiA5OTk7XFxuXFxuICAgIGkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLyogLmJhbm5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoODEsIDE1NCwgMjIzKSwgcmdiKDE3NSwgMjE1LCAyMzkpKTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9ICovXFxuXFxuICAgIGgxIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMiU7XFxuICAgICAgICBsZWZ0OiAyJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm9wZW4tYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3R0b206IDMlO1xcbiAgICB9XFxufVxcblxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgYmFja2dyb3VuZDogaHNsYSg2MCwgMTAwJSwgODAlLCAwLjU4Mik7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZS1vdXQ7XFxuXFxuICAgICAgICAub3Blbi1idXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDIlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAtMTclO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2xvc2UtYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAyJTtcXG4gICAgICAgICAgICByaWdodDogNSU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBoZWFkZXIub3BlbiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICByaWdodDogLTEwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbjogNWNhcDtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5oZXJvIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZUNvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7O0VBRVo7SUFDRSwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXJnaW46IDVjYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVybyBpbWcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDByZW0gLjhyZW0gI2FmYWZhZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG5cbiAgICBoMSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIH1cblxuICAgIC5waW4taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbnMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICByaWdodDogNSU7XG5cbiAgICAgICAgJiBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDp2YTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5cblxuQGtleWZyYW1lcyBncm93VXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuXG4gICAgLnByb2plY3Qtd3JhcHBlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTs7SUFFWjtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFVBQVU7UUFDVixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7O1FBRVosaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUzs7UUFFVDtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLDBCQUEwQjtRQUM5Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixXQUFXO1FBQ2Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7OztJQUdBO1FBQ0ksNERBQTREO1FBQzVELHFCQUFxQjtRQUNyQixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMHJlbSAuOHJlbSAjYWZhZmFmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcblxcbiAgICBoMSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIH1cXG5cXG4gICAgLnBpbi1pY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMyU7XFxuICAgICAgICByaWdodDogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcblxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0Zjs7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICAuaWNvbnMtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuXFxuICAgICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dmE7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuXFxuQGtleWZyYW1lcyBncm93VXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3Qtd3JhcHBlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICBkaXYge1xuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZGlhbG9nIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAgICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gI2NjYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cblxuICAgICNhZGQtdGFzayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgcmlnaHQ6IDMlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLWRyb3BzaGFkb3cpKTtcbiAgICB9XG5cbiAgICAuYmFjay1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIHJpZ2h0OiAzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKSk7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XG4gICAgfVxufVxuXG4jYXBwIC5pbnB1dC1tb2RhbCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbmRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAuM3M7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICNhcHAgLmlucHV0LW1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvOyBcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCO1FBQ0k7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1FBQ3BCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLFlBQVk7O1lBRVo7Z0JBQ0ksa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osY0FBYztZQUNsQjtRQUNKO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7O0lBR2xCO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixTQUFTO1FBQ1QsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG1EQUFtRDtRQUNuRCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcblxcbiAgICBkaXYge1xcbiAgICAgICAgLmRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBkaWFsb2cge1xcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XFxuXFxuICAgICAgICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtICNjY2M7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcblxcbiAgICAjYWRkLXRhc2sge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgYm90dG9tOiA1JTtcXG4gICAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tZHJvcHNoYWRvdykpO1xcbiAgICB9XFxuXFxuICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggM3B4IDJweCByZ2IoMTUyLCAxNTIsIDE1MikpO1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41cmVtKTtcXG4gICAgfVxcbn1cXG5cXG4jYXBwIC5pbnB1dC1tb2RhbCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgICBoZWlnaHQ6IDg1cHg7XFxuICAgICAgICB3aWR0aDogMzMwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAuM3M7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZVVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgI2FwcCAuaW5wdXQtbW9kYWwge1xcbiAgICAgICAgbWFyZ2luOiAyMDBweCBhdXRvOyBcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2FybmluZy1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2FybmluZ01vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTs7SUFFYjtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2FybmluZy1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvcmVuZGVyVG9kby5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9ob21lQ29udGVudC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI0NCwgMjUyLCAyNTUpO1xuICAgIC0teWVsbG93OiByZ2IoMjUyLCAyMjgsIDkwKTtcbiAgICAtLW5lb24tZ3JlZW46IHJnYigxMDQsIDI1NSwgMTApO1xuICAgIC0tYnV0dG9uLWJnOiAjMmUyZTJlO1xuICAgIC0taGVhZGVyLWhlaWdodDogODVweDtcbiAgICAtLWRyb3BzaGFkb3c6IDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNhcHAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XG59XG5cbmlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAjYXBwIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtJQUNJLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9EQUFvRDtJQUNwRCxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzJztcXG5AaW1wb3J0ICcuL2Nzcy9yZW5kZXJUb2RvLmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvaGVhZGVyLmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvaG9tZUNvbnRlbnQuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI0NCwgMjUyLCAyNTUpO1xcbiAgICAtLXllbGxvdzogcmdiKDI1MiwgMjI4LCA5MCk7XFxuICAgIC0tbmVvbi1ncmVlbjogcmdiKDEwNCwgMjU1LCAxMCk7XFxuICAgIC0tYnV0dG9uLWJnOiAjMmUyZTJlO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDg1cHg7XFxuICAgIC0tZHJvcHNoYWRvdzogMnB4IDNweCAycHggcmdiKDE1MiwgMTUyLCAxNTIpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNhcHAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJnKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDVweCAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICNhcHAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyUHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyVG9kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclRvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdNb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrLU9cXCctTWF0aWMnO1xuICAgIGhhbWJ1cmdlci5jbGFzc05hbWUgPSAnb3Blbi1idXR0b24nO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZS1idXR0b24nO1xuICAgIGhhbWJ1cmdlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXJcIj48L2k+YDtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtbGVmdFwiPjwvaT5gO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgQWxsIFJpZ2h0cyBSZXNlcnZlZCB8IFllbmd6emtpZSBEemlnblRlY2jCqWA7XG4gICAgXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmF2YmFyKVxuXG5cbiAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlLCBmb290ZXJFbGVtZW50KTtcbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZChoYW1idXJnZXIsIGNsb3NlKVxuXG5cblxuICAgIHJldHVybiB7IGhlYWRlckVsZW1lbnQgfTtcbn0iLCJpbXBvcnQgbm90ZXNQTkcgZnJvbSAnLi4vYXNzZXRzL25vdGVzLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBub3Rlc1BORztcblxuICAgIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrLU9cXCctTWF0aWMnO1xuICAgIHNsb2dhbi50ZXh0Q29udGVudCA9ICdFZmZvcnRsZXNzIE5vdGUtdGFraW5nLCBBbnl0aW1lLCBBbnl3aGVyZSB3aXRoIFRhc2stT1xcJy1NYXRpYyc7XG5cbiAgICBoZXJvLmFwcGVuZChoZXJvVGl0bGUsIHNsb2dhbiwgaGVyb0ltYWdlLClcblxuICAgIHJldHVybiBoZXJvO1xufSIsImltcG9ydCBwZXJzb25hbFBORyBmcm9tICcuLi9hc3NldHMvcGVyc29uYWwucG5nJztcbmltcG9ydCByZWFkUE5HIGZyb20gJy4uL2Fzc2V0cy9ib29rLnBuZyc7XG5pbXBvcnQgd29ya1BORyBmcm9tICcuLi9hc3NldHMvd29yay5wbmcnO1xuaW1wb3J0IGhlYWx0aFBORyBmcm9tICcuLi9hc3NldHMvaGVhbHRoLnBuZyc7XG5pbXBvcnQgc29jaWFsUE5HIGZyb20gJy4uL2Fzc2V0cy9zb2NpYWwucG5nJztcbmltcG9ydCBob2JiaWVzUE5HIGZyb20gJy4uL2Fzc2V0cy9ob2JieS5wbmcnO1xuaW1wb3J0IGZpbmFuY2VQTkcgZnJvbSAnLi4vYXNzZXRzL2ZpbmFuY2UucG5nJztcbmltcG9ydCBncm9jZXJ5UE5HIGZyb20gJy4uL2Fzc2V0cy9ncm9jZXJ5LnBuZyc7XG5pbXBvcnQgb3RoZXJQTkcgZnJvbSAnLi4vYXNzZXRzL290aGVyLnBuZyc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQZXJzb25hbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbmFsIHN0dWZmXCIsXG4gICAgaW1hZ2U6IHBlcnNvbmFsUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7IHRpdGxlOiBcIldvcmtcIiwgZGVzY3JpcHRpb246IFwiR28gdG8gd29ya1wiLCBpbWFnZTogd29ya1BORywgdG9kbzogW10gfSxcbiAgeyB0aXRsZTogXCJTdHVkeVwiLCBkZXNjcmlwdGlvbjogXCJSZWFkIHNvbWUgYm9va3NcIiwgaW1hZ2U6IHJlYWRQTkcsIHRvZG86IFtdIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIZWFsdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZWFsdGh5IExpdmluZ1wiLFxuICAgIGltYWdlOiBoZWFsdGhQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTb2NpYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnl0aGluZyBhYm91dCBzb2NpYWxpemluZ1wiLFxuICAgIGltYWdlOiBzb2NpYWxQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIb2JiaWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55dGhpbmcgYWJvdXQgaG9iYmllc1wiLFxuICAgIGltYWdlOiBob2JiaWVzUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmluYW5jZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCBhYm91dCBtb25leVwiLFxuICAgIGltYWdlOiBmaW5hbmNlUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR3JvY2VyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0b2NrIHVwIHRob3NlIHNoZWx2ZXNcIixcbiAgICBpbWFnZTogZ3JvY2VyeVBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk90aGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3RoZXIgc3R1ZmYgeW91IG1heSB0aGluayBvZlwiLFxuICAgIGltYWdlOiBvdGhlclBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3REYXRhLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgcmVuZGVyVG9kbyBmcm9tICcuL3JlbmRlclRvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcblxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgLy8gSWYgbm90LCBzZXQgaXQgd2l0aCB0aGUgcHJvamVjdHMgZGF0YVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NvbnRhaW5zIHRoZSBpbnB1dCBmb3JtXG4gIFxuICBwcm9qZWN0V3JhcHBlci5jbGFzc05hbWUgPSBcInByb2plY3Qtd3JhcHBlclwiO1xuICBhcHAuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhcnMgdGhlIGNvbnRlbnRzIGV2ZXJ5dGltZSBhIG5ldyBwcm9qZWN0IGlzIGFkZGVkIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHByb2plY3RzXG5cbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIGNvbnN0IHRhc2tDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHBpbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wZW5Qcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgcHJvamVjdEltYWdlLnNyYyA9IHByb2plY3QuaW1hZ2U7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc05hbWUgPSBcInByb2plY3QtY29udGFpbmVyXCI7XG4gICAgaWNvbnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJpY29ucy1jb250YWluZXJcIjtcbiAgICBwaW5JY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLW1hcC1waW5cIj48L2k+YDtcbiAgICBwaW5JY29uLmNsYXNzTmFtZSA9ICdwaW4taWNvbic7XG4gICAgb3BlblByb2plY3RCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1mb2xkZXItb3BlblwiPjwvaT5gO1xuICAgIC8vIHRhc2tDb3VudGVyLmlubmVySFRNTCA9IG51bU9mVGFza3MubGVuZ3RoID4gMCA/IGBcIllvdSBoYXZlICR7bnVtT2ZUYXNrcy5sZW5ndGh9IHRhc2tzIGluIHRoaXMgcHJvamVjdFwiYCA6IGBBbGwgdGFza3MgYXJlIGNsZWFyZWRgO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIHByb2plY3RJbWFnZSk7XG4gICAgZGVzY0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBvcGVuUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gaW5kZXg7IC8vIENhcHR1cmUgdGhlIGN1cnJlbnQgcHJvamVjdCBpbmRleFxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICByZW5kZXJUb2RvKHByb2plY3RJbmRleCk7XG4gICAgICB1bC5hcHBlbmQobGkpXG4gICAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgICBhcHAuYXBwZW5kKHVsKTtcbiAgICB9KTtcbi8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGljb25zQ29udGFpbmVyLmFwcGVuZChvcGVuUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocGluSWNvbiwgaWNvbnNDb250YWluZXIsIHRpdGxlQ29udGFpbmVyLCBkZXNjQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gICAgYXBwLmFwcGVuZChwcm9qZWN0V3JhcHBlcik7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbn0iLCJpbXBvcnQgXCIuLi9jc3MvcmVuZGVyVG9kby5jc3NcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHdhcm5pbmdNb2RhbCBmcm9tIFwiLi93YXJuaW5nTW9kYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVG9kbyhpbmRleCkge1xuICBjb25zdCBwcm9qZWN0c0pTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdHNKU09OKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2luZGV4XTsgLy9nZXQgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0c1xuXG4gIC8vdGhpcyBibG9jayBiZWxvdyBhcmUgYWxsIHRoZSB2YXJpYWJsZXNcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IGlucHV0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRvZG87XG5cbiAgLy90aGlzIGJsb2NrIGJlbG93IGFyZSB0aGUgdmFyaWFibGUgdGV4dCBhc3NpZ25tZW50LCBzZXBhcmF0aW5nIHRoZW0gZnJvbSB0aGUgdmFyaWFibGVzIHRvIGF2b2lkIGNvbmZ1c2lvblxuXG4gIGlucHV0TW9kYWwuY2xhc3NOYW1lID0gXCJpbnB1dC1tb2RhbFwiO1xuICBhZGRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBjbG9zZU1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgdG9kb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvZG8tY29udGFpbmVyXCI7XG4gIG9wZW5Nb2RhbEJ0bi5pbm5lckhUTUwgPVxuICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGRfbm90ZXM8L3NwYW4+JztcbiAgb3Blbk1vZGFsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2tcIik7XG4gIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+JztcbiAgYmFja0J0bi5jbGFzc05hbWUgPSBcImJhY2stYnRuXCI7XG4gIGNhdGVnb3J5VGl0bGUuaW5uZXJIVE1MID0gYCR7cHJvamVjdC50aXRsZX0gTm90ZXMgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+bWVudV9ib29rPC9zcGFuPmA7XG5cbiAgb3Blbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXRNb2RhbC5zaG93TW9kYWwoKTtcbiAgfSk7XG5cbiAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlucHV0TW9kYWwuY2xvc2UoKTtcbiAgfSk7XG5cbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG5cbiAgLy9tYWluIGZ1bmN0aW9uIGluIGFkZGluZyBuZXcgdGFza3NcbiAgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0b2RvSW5wdXRWYWx1ZSA9IHRvZG9JbnB1dC52YWx1ZTtcblxuICAgIGlmICghdG9kb0lucHV0VmFsdWUpIHtcbiAgICAgIHdhcm5pbmdNb2RhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHBvc3RlZERhdGUgPSBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LSR7bmV3RGF0ZS5nZXRNb250aCgpfS0ke25ld0RhdGUuZ2V0RGF0ZSgpfSAvICR7bmV3RGF0ZS5nZXRIb3VycygpfToke25ld0RhdGUuZ2V0TWludXRlcygpfToke25ld0RhdGUuZ2V0U2Vjb25kcygpfWA7XG4gICAgICB0YXNrcy5wdXNoKHsgdG9kbzogdG9kb0lucHV0VmFsdWUsIGRhdGU6IHBvc3RlZERhdGUgfSk7XG4gICAgICBwcm9qZWN0LnRvZG8gPSB0YXNrczsgLy8gVXBkYXRlIHRoZSBwcm9qZWN0J3MgdG9kbyBhcnJheSB3aXRoIHRoZSB1cGRhdGVkIHRhc2tzXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IC8vc3RvcmUgdGhlIG5ldyBhZGRlZCB0YXNrcyB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAgcmVuZGVyVG9kbyhpbmRleCk7IC8vdGhlbiByZS1yZW5kZXIgdGhlIGFycmF5IGJ5IGNhbGxpbmcgcmVuZGVyVG9kbyBmdW5jdGlvbiB3aGljaCBjb250YWlucyB0aGUgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIGZ1bmN0aW9uXG5cbiAgICAgIGNvbnN0IGxhc3RUYXNrID0gdGFza3NbdGFza3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zb2xlLmxvZyhcIlRvZG86XCIsIGxhc3RUYXNrLnRvZG8pO1xuICAgICAgY29uc29sZS5sb2coXCJEYXRlOlwiLCBsYXN0VGFzay5kYXRlKTtcbiAgICB9XG4gIH1cblxuICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgfSk7IC8vcmUtcmVuZGVycyB0aGUgcHJvamVjdHMgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgY2xpY2tlZFxuXG4gIC8vIENsZWFyIHRoZSBleGlzdGluZyBjb250ZW50IGluIHRoZSBhcHAgZWxlbWVudCB0byBwcmV2ZW50IGR1cGxpY2F0aW5nIG9mIGNvbnRlbnRzIG9uIHJlLXJlbmRlclxuICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHRvZG8gYXJyYXkgb2YgdGhlIHByb2plY3QgYW5kIGNyZWF0ZSBsaXN0IGl0ZW1zIGZvciBlYWNoIHRvZG9cbiAgdGFza3MuZm9yRWFjaCgodG9kb0l0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkYXRlUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBvcGVuRGVsZXRlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVNb2RhbENvbmZpcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IHRhc2tzW2luZGV4XTtcblxuICAgIG9wZW5EZWxldGVNb2RhbEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIj48L2k+JztcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJDb25maXJtXCI7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBkZWxldGVNb2RhbENvbmZpcm1hdGlvbi50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBkb25lIHdpdGggdGhpcyB0YXNrP1wiO1xuICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdG9kb0l0ZW0udG9kbztcbiAgICBkYXRlUHJvcC50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmRhdGU7XG4gICAgZGF0ZVByb3AuY2xhc3NOYW1lID0gXCJkYXRlXCI7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvUHJvcCwgZGF0ZVByb3ApO1xuICAgIGxpLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0luZGV4KSB7XG4gICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTsgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIHRhc2tzIGFycmF5XG4gICAgICBwcm9qZWN0LnRvZG8gPSB0YXNrczsgLy8gVXBkYXRlIHRoZSBwcm9qZWN0J3MgdG9kbyBhcnJheSB3aXRoIHRoZSB1cGRhdGVkIHRhc2tzXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBwcm9qZWN0c1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIHRhc2sncyBjb3JyZXNwb25kaW5nIGxpc3QgaXRlbSBmcm9tIHRoZSBET01cbiAgICAgIHVsLnJlbW92ZUNoaWxkKHVsLmNoaWxkTm9kZXNbdGFza0luZGV4XSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIHRhc2tzLCByZW1vdmUgdGhlIGRpYWxvZyBlbGVtZW50IGFuZCByZS1yZW5kZXIgb25seSB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlucHV0TW9kYWwuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRpYWxvZ1xuICAgICAgICBpbnB1dE1vZGFsLnJlbW92ZSgpOyAvLyBSZW1vdmUgdGhlIGRpYWxvZyBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgICAgICByZW5kZXJQcm9qZWN0cygpOyAvLyBSZS1yZW5kZXIgb25seSB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkRlbGV0ZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL29wZW5zIHRoZSBkZWxldGUgY29uZmlybWF0aW9uIG1vZGFsXG4gICAgICBkZWxldGVNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy9jbG9zZXMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gbW9kYWxcbiAgICAgIGRlbGV0ZU1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBJbnNpZGUgdGhlIGZvckVhY2ggbG9vcCB0byBjcmVhdGUgZGVsZXRlIGJ1dHRvbnMgZm9yIGVhY2ggdGFza1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuaW5kZXhPZih0b2RvSXRlbSk7IC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSB0YXNrIHRvIHJlbW92ZVxuICAgICAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpOyAvLyBDYWxsIHRoZSByZW1vdmVUYXNrIGZ1bmN0aW9uIHdpdGggdGhlIGluZGV4IHRvIHJlbW92ZVxuICAgIH0pO1xuXG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmQoZGVsZXRlQnRuLCBjYW5jZWxCdG4pO1xuICAgIGRlbGV0ZU1vZGFsLmFwcGVuZChkZWxldGVNb2RhbENvbmZpcm1hdGlvbiwgYnV0dG9uV3JhcHBlcik7XG4gICAgbGkuYXBwZW5kKG9wZW5EZWxldGVNb2RhbEJ0biwgZGVsZXRlTW9kYWwpO1xuICAgIHVsLmFwcGVuZChsaSk7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCB0aGUgdW5vcmRlcmVkIGxpc3QgdG8gdGhlIGFwcCBlbGVtZW50XG4gIGlucHV0TW9kYWwuYXBwZW5kKHRvZG9JbnB1dCwgYWRkVG9kb0J0biwgY2xvc2VNb2RhbEJ0bik7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kKGNhdGVnb3J5VGl0bGUsIHVsLCBvcGVuTW9kYWxCdG4sIGJhY2tCdG4pO1xuICBhcHAuYXBwZW5kKHRvZG9Db250YWluZXIsIGlucHV0TW9kYWwpO1xufVxuIiwiaW1wb3J0ICcuLi9jc3Mvd2FybmluZ01vZGFsLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmdNb2RhbCgpIHtcbiAgY29uc3Qgd2FybmluZ01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgY29uc3Qgd2FybmluZ0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB3YXJuaW5nQ2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHdhcm5pbmdNb2RhbC5jbGFzc05hbWUgPSAnd2FybmluZy1tb2RhbCc7XG4gIHdhcm5pbmdDbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgd2FybmluZ0RpYWxvZy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZpbGwgdXAgdGhlIHRleHQgZmllbGQsIGRvIG5vdCBwcm9jcmFzdGluYXRlIVwiO1xuXG4gIHdhcm5pbmdDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdhcm5pbmdNb2RhbC5jbG9zZSgpO1xuICB9KTtcblxuICB3YXJuaW5nTW9kYWwuYXBwZW5kKHdhcm5pbmdEaWFsb2csIHdhcm5pbmdDbG9zZUJ0bik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHdhcm5pbmdNb2RhbCk7XG5cbiAgd2FybmluZ01vZGFsLnNob3dNb2RhbCgpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qcyc7XG5pbXBvcnQgaGVhZGVyQ29udGVudCBmcm9tICcuL21vZHVsZXMvaGVhZGVyLmpzJztcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL21vZHVsZXMvaG9tZUNvbnRlbnQuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgY29uc3QgeyBoZWFkZXJFbGVtZW50IH0gPSBoZWFkZXJDb250ZW50KCk7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIGFwcC5pbm5lckhUTUwgPSAnJztcblxuICAgIGFwcC5hcHBlbmQobmV3Q29udGVudClcblxuICAgIHJldHVybiBhcHA7XG59XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuaG9tZUJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ob3VzZVwiPjwvaT4gSG9tZWA7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRlbnQoaG9tZUNvbnRlbnQoKSlcbn0pXG5cbmNvbnN0IG5vdGVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG5ub3Rlc0J0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbGlnbi1sZWZ0XCI+PC9pPiBNeSBOb3Rlc2A7XG5ub3Rlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVDb250ZW50KHJlbmRlclByb2plY3RzKCkpXG59KVxuXG5jb25zdCBpbnN0cnVjdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zJyk7XG5pbnN0cnVjdGlvbnNCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVyc29uLWNoYWxrYm9hcmRcIj48L2k+IEluc3RydWN0aW9uc2A7XG5pbnN0cnVjdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29udGVudChob21lQ29udGVudCgpKVxufSlcblxucmVuZGVyKCk7XG51cGRhdGVDb250ZW50KGhvbWVDb250ZW50KCkpOyAvL2NhbGxzIGhvbWVDb250ZW50IG9uIHBhZ2UgbG9hZCBhcyBkZWZhdWx0IGxhbmRpbmcgcGFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==