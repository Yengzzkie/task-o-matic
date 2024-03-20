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
    font-family: 'kalam', sans-serif;
    height: 100vh;
    width: 300px;
    text-align: center;
    padding: 15px;
    z-index: 2;

    .open-button {
        display: none;
        font-size: 1.5rem;
        transform: translateX(-50%);
        animation: bounce .5s infinite linear;
    }

    .close-button {
        display: none;
    }

    nav {
        display: flex;
        flex-direction: column;

        button {
            letter-spacing: 5px;
            width: 130px;
            border-radius: 0;
        }
    }
}

h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    margin-top: 20px;
    
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
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,UAAU;;IAEV;QACI,aAAa;QACb,iBAAiB;QACjB,2BAA2B;QAC3B,qCAAqC;IACzC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;;QAEtB;YACI,mBAAmB;YACnB,YAAY;YACZ,gBAAgB;QACpB;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;;AAEpB;;;AAGA;IACI;QACI,eAAe;QACf,sCAAsC;QACtC,2BAA2B;QAC3B,YAAY;QACZ,aAAa;QACb,4BAA4B;QAC5B,kCAAkC;;QAElC;YACI,cAAc;YACd,eAAe;YACf,OAAO;YACP,WAAW;YACX,UAAU;QACd;;QAEA;YACI,cAAc;YACd,kBAAkB;YAClB,OAAO;YACP,SAAS;YACT,iBAAiB;YACjB,UAAU;QACd;IACJ;;IAEA;QACI,wBAAwB;;QAExB;YACI,UAAU;YACV,eAAe;YACf,WAAW;QACf;;QAEA;YACI,UAAU;QACd;IACJ;;IAEA;QACI,sBAAsB;QACtB,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');\n\nheader {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background: #ffff8794;\n    font-family: 'kalam', sans-serif;\n    height: 100vh;\n    width: 300px;\n    text-align: center;\n    padding: 15px;\n    z-index: 2;\n\n    .open-button {\n        display: none;\n        font-size: 1.5rem;\n        transform: translateX(-50%);\n        animation: bounce .5s infinite linear;\n    }\n\n    .close-button {\n        display: none;\n    }\n\n    nav {\n        display: flex;\n        flex-direction: column;\n\n        button {\n            letter-spacing: 5px;\n            width: 130px;\n            border-radius: 0;\n        }\n    }\n}\n\nh1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.5rem;\n    margin-top: 20px;\n    \n}\n\n\n@media screen and (max-width: 1024px) {\n    header {\n        position: fixed;\n        background: hsla(60, 100%, 80%, 0.582);\n        backdrop-filter: blur(10px);\n        width: 250px;\n        height: 100vh;\n        transform: translateX(-100%);\n        transition: transform .4s ease-out;\n\n        .open-button {\n            display: block;\n            position: fixed;\n            top: 2%;\n            right: -17%;\n            opacity: 1;\n        }\n\n        .close-button {\n            display: block;\n            position: absolute;\n            top: 2%;\n            right: 5%;\n            font-size: 1.5rem;\n            opacity: 0;\n        }\n    }\n\n    header.open {\n        transform: translateX(0);\n\n        span {\n            opacity: 0;\n            position: fixed;\n            right: -10%;\n        }\n\n        .close-button {\n            opacity: 1;\n        }\n    }\n\n    h1 {\n        align-self: flex-start;\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
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

    img {
        margin: 5cap;
        width: 400px;
    }
}

@media screen and (max-width: 1024px) {
    .hero img {
        width: 250px;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/homeContent.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;;IAEZ;QACI,YAAY;QACZ,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;AACJ","sourcesContent":[".hero {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n\n    img {\n        margin: 5cap;\n        width: 400px;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .hero img {\n        width: 250px;\n    }\n}"],"sourceRoot":""}]);
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

    .due-date {
        position: absolute;
        font-style: italic;
        bottom: 3%;
        right: 5%;
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
            background: red;
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
}`, "",{"version":3,"sources":["webpack://./src/css/renderProjects.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;IAChC,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;;IAEZ;QACI,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,UAAU;QACV,iBAAiB;QACjB,yBAAyB;IAC7B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,YAAY;;QAEZ,iBAAiB;QACjB,WAAW;IACf;;IAEA;QACI,gBAAgB;QAChB,cAAc;QACd,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,cAAc;IAClB;;IAEA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,UAAU;QACV,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,SAAS;;QAET;YACI,YAAY;YACZ,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,YAAY;YACZ,eAAe;YACf,0BAA0B;QAC9B;;QAEA;YACI,eAAe;YACf,WAAW;QACf;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,aAAa;AACjB;;;;AAIA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;;;IAGA;QACI,4DAA4D;QAC5D,qBAAqB;QACrB,SAAS;IACb;AACJ","sourcesContent":[".project-container {\n    position: relative;\n    background: #ffffff;\n    box-shadow: 0 0rem .8rem #afafaf;\n    border-radius: 10px;\n    width: 100%;\n    max-height: 300px;\n    padding: 50px 20px;\n    margin: 15px;\n\n    h1 {\n        padding-left: 10px;\n        border-radius: 7px;\n    }\n\n    .pin-icon {\n        position: absolute;\n        top: 3%;\n        right: 50%;\n        font-size: 1.2rem;\n        transform: rotate(-40deg);\n    }\n\n    ul {\n        max-width: 100%;\n    }\n\n    img {\n        padding: 1px;\n\n        margin-left: 10px;\n        width: 35px;\n    }\n\n    p {\n        font-size: .9rem;\n        color: #4f4f4f;\n        margin: 10px;\n    }\n\n    span {\n        font-size: .9rem;\n        color: #4f4f4f;;\n    }\n\n    .due-date {\n        position: absolute;\n        font-style: italic;\n        bottom: 3%;\n        right: 5%;\n    }\n\n    button {\n        border: none;\n        border-radius: 5px;\n        padding: 5px;\n        margin: 10px;\n    }\n\n    .icons-container {\n        position: absolute;\n        top: 5%;\n        right: 5%;\n\n        & button {\n            border: none;\n            border-radius: 5px;\n            width: 30px;\n            padding: 5px;\n            margin: 10px;\n            cursor: pointer; \n            transition: background .3s;\n        }\n\n        button:hover {\n            background: red;\n            color: #fff;\n        }\n    }\n}\n\n.project-wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 40px;\n    max-height: 100%;\n    width: 100%;\n    padding: 20px;\n}\n\n\n\n@keyframes growUp {\n    0% {\n        transform: scale(.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    .project-container {\n        height: auto;\n    }\n\n\n    .project-wrapper {\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        justify-items: center;\n        gap: 15px;\n    }\n}"],"sourceRoot":""}]);
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
    padding: 15px;
    margin-top: 15px;

    button {
        width: 30px;
        cursor: pointer;
    }
}

span {
    max-width: 100%;
    margin-left: 15px;
}

.todo-container {
    box-shadow: 0 0.5rem 1rem #ccc;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    padding: 20px;

    button:hover {
        transform: scale(.5rem);
    }

    #add-task {
        position: fixed;
        bottom: 5%;
        right: 7%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        filter: drop-shadow(var(--dropshadow));
    }

    .back-btn {
        position: absolute;
        top: 3%;
        right: 0;
        border-radius: 50%;
        filter: drop-shadow(2px 3px 2px rgb(152, 152, 152));
        width: 40px;
        height: 40px;
        padding: 0;
    }
}

dialog {
    border-radius: 5px;
    border: none;
    height: 150px;
    margin: auto;
    padding: 15px;
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

`, "",{"version":3,"sources":["webpack://./src/css/renderTodo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,gBAAgB;;IAEhB;QACI,WAAW;QACX,eAAe;IACnB;AACJ;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;;IAEb;QACI,uBAAuB;IAC3B;;IAEA;QACI,eAAe;QACf,UAAU;QACV,SAAS;QACT,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,sCAAsC;IAC1C;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,kBAAkB;QAClB,mDAAmD;QACnD,WAAW;QACX,YAAY;QACZ,UAAU;IACd;AACJ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,qBAAqB;IACzB;IACA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 10px;\n    box-shadow: var(--dropshadow);\n    list-style: none;\n    max-width: 100%;\n    padding: 15px;\n    margin-top: 15px;\n\n    button {\n        width: 30px;\n        cursor: pointer;\n    }\n}\n\nspan {\n    max-width: 100%;\n    margin-left: 15px;\n}\n\n.todo-container {\n    box-shadow: 0 0.5rem 1rem #ccc;\n    width: 100%;\n    height: 100%;\n    margin-top: 30px;\n    padding: 20px;\n\n    button:hover {\n        transform: scale(.5rem);\n    }\n\n    #add-task {\n        position: fixed;\n        bottom: 5%;\n        right: 7%;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        filter: drop-shadow(var(--dropshadow));\n    }\n\n    .back-btn {\n        position: absolute;\n        top: 3%;\n        right: 0;\n        border-radius: 50%;\n        filter: drop-shadow(2px 3px 2px rgb(152, 152, 152));\n        width: 40px;\n        height: 40px;\n        padding: 0;\n    }\n}\n\ndialog {\n    border-radius: 5px;\n    border: none;\n    height: 150px;\n    margin: auto;\n    padding: 15px;\n    animation: scaleUp .3s;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(5px);\n}\n\n@keyframes scaleUp {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
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
    padding: 5px 3px;
    margin: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAOA;IACI,sCAAsC;IACtC,2BAA2B;IAC3B,+BAA+B;IAC/B,oBAAoB;IACpB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,oDAAoD;IACpD,mCAAmC;IACnC,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,sBAAsB;QACtB,aAAa;IACjB;AACJ","sourcesContent":["@import './css/handleProjectInput.css';\n@import './css/renderProjects.css';\n@import './css/renderTodo.css';\n@import './css/header.css';\n@import './css/homeContent.css';\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n    --light-background: rgb(244, 252, 255);\n    --yellow: rgb(252, 228, 90);\n    --neon-green: rgb(104, 255, 10);\n    --button-bg: #2e2e2e;\n    --header-height: 85px;\n    --dropshadow: 2px 3px 2px rgb(152, 152, 152);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    position: relative;\n    font-family: 'Poppins', Arial, Helvetica, sans-serif;\n    background: var(--light-background);\n    background-size: cover;\n    max-height: 100vh;\n    overflow-y: auto;\n}\n\n#app {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    overflow-y: auto;\n    letter-spacing: 2px;\n    width: 100%;\n    height: 100vh;\n    padding: 50px;\n}\n\nbutton {\n    background: var(--button-bg);\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    width: 100px;\n    padding: 5px 3px;\n    margin: 10px;\n    cursor: pointer;\n    transition: all .5s;\n}\n\nbutton:hover {\n    background: red;\n}\n\nbutton:active {\n    transform: scale(.9);\n}\n\ninput {\n    padding: 5px 3px;\n    border: 1px solid black;\n}\n\n@media screen and (max-width: 1024px) {\n    body {\n        flex-direction: column;\n    }\n\n    #app {\n        flex-direction: column;\n        padding: 20px;\n    }\n}"],"sourceRoot":""}]);
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
    const headerElement = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const hamburger = document.createElement('span');
    const close = document.createElement('p');

    hamburger.className = 'open-button';
    close.className = 'close-button';
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`;
    close.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;

    headerTitle.textContent = 'Task-O\'-Matic';
    
    hamburger.addEventListener('click', () => {
        header.classList.add('open');
    })

    close.addEventListener('click', closeNavbar)


    function closeNavbar() {
        header.classList.remove('open');
    }

    headerElement.append(headerTitle, hamburger, close)



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
    const projectContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const openProjectBtn = document.createElement('button');
    
    projectContainer.className = "project-container";
    iconsContainer.className = "icons-container";

    iconsContainer.append(openProjectBtn);

    if (index === _projectData_js__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1) {
      projectContainer.classList.add("active");
    }

    const projectImage = new Image();
    projectImage.src = project.image;

    const projectTitle = project.title;
    const projectDescription = project.description;
    const projectDate = project.date;
    const numOfTasks = project.todo;
    const titleContainer = document.createElement("h1");
    const descContainer = document.createElement("p");
    const dateContainer = document.createElement('span');
    const taskCounter = document.createElement('span');
    const pinIcon = document.createElement('span');
    
    pinIcon.innerHTML = `<i class="fa-sharp fa-solid fa-map-pin"></i>`;
    pinIcon.className = 'pin-icon';
    dateContainer.className = 'due-date';
    openProjectBtn.innerHTML = `<i class="fa-regular fa-folder-open"></i>`;
    taskCounter.innerHTML = numOfTasks.length > 0 ? `"You have ${numOfTasks.length} tasks in this project"` : `All tasks are cleared`;
    titleContainer.append(projectTitle, projectImage);
    descContainer.textContent = projectDescription;
    dateContainer.textContent = !projectDate ? `Due date not set` : `Due date: ${projectDate}`;
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

    projectContainer.append(pinIcon, iconsContainer, titleContainer, descContainer, taskCounter, dateContainer);
    projectWrapper.appendChild(projectContainer);
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


// import { projects } from "./projectData.js";

function renderTodo(index) {
    const projectsJSON = localStorage.getItem('projects');
    const projects = JSON.parse(projectsJSON);
    const project = projects[index]; //get the index of the projects

    //this block below are all the variables
    const app = document.getElementById('app');
    const inputModal = document.createElement('dialog')
    const todoContainer = document.createElement('div');
    const todoInput = document.createElement('input');
    const addTodoBtn = document.createElement('button');
    const closeModalBtn = document.createElement('button');
    const openModalBtn = document.createElement('button');
    const backBtn = document.createElement('button');
    const ul = document.createElement('ul');
    const tasks = project.todo;

    //this block below are the variable text assignment, separating them from the variables to avoid confusion
    addTodoBtn.textContent = 'Add Task';
    closeModalBtn.textContent = 'Cancel';
    todoContainer.className = 'todo-container';
    openModalBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    openModalBtn.setAttribute('id', 'add-task');
    backBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    backBtn.className = 'back-btn'

    openModalBtn.addEventListener('click', () => {
      inputModal.showModal();
    })

    closeModalBtn.addEventListener('click', () => {
      inputModal.close();
    })

    addTodoBtn.addEventListener('click', addTask);

  function addTask() {
    console.log("Adding task...");
    const todoInputValue = todoInput.value;
    tasks.push(todoInputValue); 
    // Update the project's todo array with the updated tasks
    project.todo = tasks;
    console.log("Updated project:", project); // Log the updated project
    localStorage.setItem('projects', JSON.stringify(projects)); //store the new added tasks to the local storage
    console.log("Projects stored in localStorage:", localStorage.getItem('projects')); // Log the projects stored in localStorage
    renderTodo(index); //then re-render the array by calling renderTodo function which contains the loadProjectsFromLocalStorage() function
    console.log('New task added') //adds new tasks inside the project
  }
    backBtn.addEventListener('click', () => {
      (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }); //re-renders the projects when the back button is clicked
  
    // Clear the existing content in the app element
    app.innerHTML = '';
    
    // Iterate through the todo array of the project and create list items for each todo
    tasks.forEach((todoItem, index) => {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const taskToDelete = tasks[index]

        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        li.textContent = todoItem;

        function removeTask(taskIndex) {
          tasks.splice(taskIndex, 1); // Remove the task from the tasks array
          project.todo = tasks; // Update the project's todo array with the updated tasks
          localStorage.setItem('projects', JSON.stringify(projects)); // Update localStorage with the updated projects
      
          // Remove the task's corresponding list item from the DOM
          ul.removeChild(ul.childNodes[taskIndex]);
      
          // If there are no more tasks, remove the dialog element and re-render only the current project
          if (tasks.length === 0) {
              inputModal.close(); // Close the dialog
              inputModal.remove(); // Remove the dialog element from the DOM
              (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Re-render only the current project
          }
      }
      
      // Inside the forEach loop where you create delete buttons for each task
      deleteBtn.addEventListener('click', () => {
          const taskIndex = tasks.indexOf(todoItem); // Find the index of the task to remove
          removeTask(taskIndex); // Call the removeTask function with the index to remove
      });
      

        li.append(deleteBtn);
        ul.append(li);
    });

    // Append the unordered list to the app element
    inputModal.append(todoInput, addTodoBtn, closeModalBtn)
    todoContainer.append(ul, openModalBtn, backBtn)
    app.append(todoContainer, inputModal);
}

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
homeBtn.addEventListener('click', () => {
    updateContent((0,_modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
})

const notesBtn = document.getElementById('notes');
notesBtn.addEventListener('click', () => {
    updateContent((0,_modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
})

render();
updateContent((0,_modules_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFNBQVMsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFL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Oi8vcXVlc3Rlci8uL3NyYy9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvY3NzL2hvbWVDb250ZW50LmNzcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9jc3MvcmVuZGVyVG9kby5jc3MiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3M/ZjYyZiIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2Nzcy9yZW5kZXJUb2RvLmNzcz9lNjQ4Iiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvaG9tZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci8uL3NyYy9tb2R1bGVzL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3F1ZXN0ZXIvLi9zcmMvbW9kdWxlcy9yZW5kZXJQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL21vZHVsZXMvcmVuZGVyVG9kby5qcyIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3F1ZXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVlc3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9xdWVzdGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9xdWVzdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuZGlhbG9nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG5cbiAgICAuY2xvc2UtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTggMjE4IDIxOCk7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IC41cmVtIHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNER1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFxuICAgIC5jbG9zZS1tb2RhbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgcmlnaHQ6IDUlO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE4IDIxOCAyMTgpO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAuZm9ybS13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggLjVyZW0gcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XG4gICAgZm9udC1mYW1pbHk6ICdrYWxhbScsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmgxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIFxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZDogaHNsYSg2MCwgMTAwJSwgODAlLCAwLjU4Mik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2Utb3V0O1xuXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMiU7XG4gICAgICAgICAgICByaWdodDogLTE3JTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhlYWRlci5vcGVuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTs7SUFFVjtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLHFDQUFxQztJQUN6Qzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCOztRQUV0QjtZQUNJLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osZ0JBQWdCO1FBQ3BCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLHNDQUFzQztRQUN0QywyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGFBQWE7UUFDYiw0QkFBNEI7UUFDNUIsa0NBQWtDOztRQUVsQztZQUNJLGNBQWM7WUFDZCxlQUFlO1lBQ2YsT0FBTztZQUNQLFdBQVc7WUFDWCxVQUFVO1FBQ2Q7O1FBRUE7WUFDSSxjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLE9BQU87WUFDUCxTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLFVBQVU7UUFDZDtJQUNKOztJQUVBO1FBQ0ksd0JBQXdCOztRQUV4QjtZQUNJLFVBQVU7WUFDVixlQUFlO1lBQ2YsV0FBVztRQUNmOztRQUVBO1lBQ0ksVUFBVTtRQUNkO0lBQ0o7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW06d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjg3OTQ7XFxuICAgIGZvbnQtZmFtaWx5OiAna2FsYW0nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgLm9wZW4tYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIC41cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDYwLCAxMDAlLCA4MCUsIDAuNTgyKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLW91dDtcXG5cXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMiU7XFxuICAgICAgICAgICAgcmlnaHQ6IC0xNyU7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDIlO1xcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhlYWRlci5vcGVuIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiA1Y2FwO1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaGVybyBpbWcge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lQ29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTs7SUFFWjtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVybyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBtYXJnaW46IDVjYXA7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5oZXJvIGltZyB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHJlbSAuOHJlbSAjYWZhZmFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgIG1hcmdpbjogMTVweDtcblxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgfVxuXG4gICAgLnBpbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMlO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG5cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBjb2xvcjogIzRmNGY0Zjs7XG4gICAgfVxuXG4gICAgLmR1ZS1kYXRlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGJvdHRvbTogMyU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuXG4gICAgLmljb25zLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgcmlnaHQ6IDUlO1xuXG4gICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5cblxuQGtleWZyYW1lcyBncm93VXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuXG4gICAgLnByb2plY3Qtd3JhcHBlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTs7SUFFWjtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFVBQVU7UUFDVixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7O1FBRVosaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUzs7UUFFVDtZQUNJLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLDBCQUEwQjtRQUM5Qjs7UUFFQTtZQUNJLGVBQWU7WUFDZixXQUFXO1FBQ2Y7SUFDSjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7OztJQUdBO1FBQ0ksNERBQTREO1FBQzVELHFCQUFxQjtRQUNyQixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMHJlbSAuOHJlbSAjYWZhZmFmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcblxcbiAgICBoMSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIH1cXG5cXG4gICAgLnBpbi1pY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMyU7XFxuICAgICAgICByaWdodDogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcblxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgICAgICBjb2xvcjogIzRmNGY0Zjs7XFxuICAgIH1cXG5cXG4gICAgLmR1ZS1kYXRlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGJvdHRvbTogMyU7XFxuICAgICAgICByaWdodDogNSU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcblxcbiAgICAuaWNvbnMtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNSU7XFxuICAgICAgICByaWdodDogNSU7XFxuXFxuICAgICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC13cmFwcGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbnNwYW4ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtICNjY2M7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjVyZW0pO1xuICAgIH1cblxuICAgICNhZGQtdGFzayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgcmlnaHQ6IDclO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tZHJvcHNoYWRvdykpO1xuICAgIH1cblxuICAgIC5iYWNrLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggM3B4IDJweCByZ2IoMTUyLCAxNTIsIDE1MikpO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuZGlhbG9nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYW5pbWF0aW9uOiBzY2FsZVVwIC4zcztcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVVcCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3JlbmRlclRvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYjtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixtREFBbUQ7UUFDbkQsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5zcGFuIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAjY2NjO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2FkZC10YXNrIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgICByaWdodDogNyU7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3codmFyKC0tZHJvcHNoYWRvdykpO1xcbiAgICB9XFxuXFxuICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKSk7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYW5pbWF0aW9uOiBzY2FsZVVwIC4zcztcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGFuZGxlUHJvamVjdElucHV0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvcmVuZGVyVG9kby5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9ob21lQ29udGVudC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI0NCwgMjUyLCAyNTUpO1xuICAgIC0teWVsbG93OiByZ2IoMjUyLCAyMjgsIDkwKTtcbiAgICAtLW5lb24tZ3JlZW46IHJnYigxMDQsIDI1NSwgMTApO1xuICAgIC0tYnV0dG9uLWJnOiAjMmUyZTJlO1xuICAgIC0taGVhZGVyLWhlaWdodDogODVweDtcbiAgICAtLWRyb3BzaGFkb3c6IDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNhcHAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJnKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1cHggM3B4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xufVxuXG5pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgI2FwcCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7SUFDSSxzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvREFBb0Q7SUFDcEQsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vY3NzL2hhbmRsZVByb2plY3RJbnB1dC5jc3MnO1xcbkBpbXBvcnQgJy4vY3NzL3JlbmRlclByb2plY3RzLmNzcyc7XFxuQGltcG9ydCAnLi9jc3MvcmVuZGVyVG9kby5jc3MnO1xcbkBpbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xcbkBpbXBvcnQgJy4vY3NzL2hvbWVDb250ZW50LmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNDQsIDI1MiwgMjU1KTtcXG4gICAgLS15ZWxsb3c6IHJnYigyNTIsIDIyOCwgOTApO1xcbiAgICAtLW5lb24tZ3JlZW46IHJnYigxMDQsIDI1NSwgMTApO1xcbiAgICAtLWJ1dHRvbi1iZzogIzJlMmUyZTtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA4NXB4O1xcbiAgICAtLWRyb3BzaGFkb3c6IDJweCAzcHggMnB4IHJnYigxNTIsIDE1MiwgMTUyKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggM3B4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgI2FwcCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJQcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlbmRlclByb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJUb2RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyVG9kby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGhhbWJ1cmdlci5jbGFzc05hbWUgPSAnb3Blbi1idXR0b24nO1xuICAgIGNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZS1idXR0b24nO1xuICAgIGhhbWJ1cmdlci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXJcIj48L2k+YDtcbiAgICBjbG9zZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtbGVmdFwiPjwvaT5gO1xuXG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVGFzay1PXFwnLU1hdGljJztcbiAgICBcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgfSlcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VOYXZiYXIpXG5cblxuICAgIGZ1bmN0aW9uIGNsb3NlTmF2YmFyKCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIH1cblxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlclRpdGxlLCBoYW1idXJnZXIsIGNsb3NlKVxuXG5cblxuICAgIHJldHVybiB7IGhlYWRlckVsZW1lbnQgfTtcbn0iLCJpbXBvcnQgbm90ZXNQTkcgZnJvbSAnLi4vYXNzZXRzL25vdGVzLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBub3Rlc1BORztcblxuICAgIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrLU9cXCctTWF0aWMnO1xuICAgIHNsb2dhbi50ZXh0Q29udGVudCA9ICdFZmZvcnRsZXNzIE5vdGUtdGFraW5nLCBBbnl0aW1lLCBBbnl3aGVyZSB3aXRoIFRhc2stT1xcJy1NYXRpYyc7XG5cbiAgICBoZXJvLmFwcGVuZChoZXJvVGl0bGUsIHNsb2dhbiwgaGVyb0ltYWdlLClcblxuICAgIHJldHVybiBoZXJvO1xufSIsImltcG9ydCBwZXJzb25hbFBORyBmcm9tICcuLi9hc3NldHMvcGVyc29uYWwucG5nJztcbmltcG9ydCByZWFkUE5HIGZyb20gJy4uL2Fzc2V0cy9ib29rLnBuZyc7XG5pbXBvcnQgd29ya1BORyBmcm9tICcuLi9hc3NldHMvd29yay5wbmcnO1xuaW1wb3J0IGhlYWx0aFBORyBmcm9tICcuLi9hc3NldHMvaGVhbHRoLnBuZyc7XG5pbXBvcnQgc29jaWFsUE5HIGZyb20gJy4uL2Fzc2V0cy9zb2NpYWwucG5nJztcbmltcG9ydCBob2JiaWVzUE5HIGZyb20gJy4uL2Fzc2V0cy9ob2JieS5wbmcnO1xuaW1wb3J0IGZpbmFuY2VQTkcgZnJvbSAnLi4vYXNzZXRzL2ZpbmFuY2UucG5nJztcbmltcG9ydCBncm9jZXJ5UE5HIGZyb20gJy4uL2Fzc2V0cy9ncm9jZXJ5LnBuZyc7XG5pbXBvcnQgb3RoZXJQTkcgZnJvbSAnLi4vYXNzZXRzL290aGVyLnBuZyc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQZXJzb25hbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbmFsIHN0dWZmXCIsXG4gICAgaW1hZ2U6IHBlcnNvbmFsUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7IHRpdGxlOiBcIldvcmtcIiwgZGVzY3JpcHRpb246IFwiR28gdG8gd29ya1wiLCBpbWFnZTogd29ya1BORywgdG9kbzogW10gfSxcbiAgeyB0aXRsZTogXCJTdHVkeVwiLCBkZXNjcmlwdGlvbjogXCJSZWFkIHNvbWUgYm9va3NcIiwgaW1hZ2U6IHJlYWRQTkcsIHRvZG86IFtdIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIZWFsdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZWFsdGh5IExpdmluZ1wiLFxuICAgIGltYWdlOiBoZWFsdGhQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTb2NpYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnl0aGluZyBhYm91dCBzb2NpYWxpemluZ1wiLFxuICAgIGltYWdlOiBzb2NpYWxQTkcsXG4gICAgdG9kbzogW10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIb2JiaWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55dGhpbmcgYWJvdXQgaG9iYmllc1wiLFxuICAgIGltYWdlOiBob2JiaWVzUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmluYW5jZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCBhYm91dCBtb25leVwiLFxuICAgIGltYWdlOiBmaW5hbmNlUE5HLFxuICAgIHRvZG86IFtdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR3JvY2VyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0b2NrIHVwIHRob3NlIHNoZWx2ZXNcIixcbiAgICBpbWFnZTogZ3JvY2VyeVBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk90aGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3RoZXIgc3R1ZmYgeW91IG1heSB0aGluayBvZlwiLFxuICAgIGltYWdlOiBvdGhlclBORyxcbiAgICB0b2RvOiBbXSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3REYXRhLmpzXCI7XG5pbXBvcnQgXCIuLi9jc3MvcmVuZGVyUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgcmVuZGVyVG9kbyBmcm9tICcuL3JlbmRlclRvZG8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcblxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgLy8gSWYgbm90LCBzZXQgaXQgd2l0aCB0aGUgcHJvamVjdHMgZGF0YVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY29udGFpbnMgdGhlIGlucHV0IGZvcm1cbiAgcHJvamVjdFdyYXBwZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LXdyYXBwZXJcIjtcblxuICBhcHAuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhcnMgdGhlIGNvbnRlbnRzIGV2ZXJ5dGltZSBhIG5ldyBwcm9qZWN0IGlzIGFkZGVkIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHByb2plY3RzXG5cbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3BlblByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jb250YWluZXJcIjtcbiAgICBpY29uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImljb25zLWNvbnRhaW5lclwiO1xuXG4gICAgaWNvbnNDb250YWluZXIuYXBwZW5kKG9wZW5Qcm9qZWN0QnRuKTtcblxuICAgIGlmIChpbmRleCA9PT0gcHJvamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3RJbWFnZS5zcmMgPSBwcm9qZWN0LmltYWdlO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC50aXRsZTtcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHByb2plY3REYXRlID0gcHJvamVjdC5kYXRlO1xuICAgIGNvbnN0IG51bU9mVGFza3MgPSBwcm9qZWN0LnRvZG87XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgdGFza0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcGluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBcbiAgICBwaW5JY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLW1hcC1waW5cIj48L2k+YDtcbiAgICBwaW5JY29uLmNsYXNzTmFtZSA9ICdwaW4taWNvbic7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZHVlLWRhdGUnO1xuICAgIG9wZW5Qcm9qZWN0QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZm9sZGVyLW9wZW5cIj48L2k+YDtcbiAgICB0YXNrQ291bnRlci5pbm5lckhUTUwgPSBudW1PZlRhc2tzLmxlbmd0aCA+IDAgPyBgXCJZb3UgaGF2ZSAke251bU9mVGFza3MubGVuZ3RofSB0YXNrcyBpbiB0aGlzIHByb2plY3RcImAgOiBgQWxsIHRhc2tzIGFyZSBjbGVhcmVkYDtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0SW1hZ2UpO1xuICAgIGRlc2NDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgZGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICFwcm9qZWN0RGF0ZSA/IGBEdWUgZGF0ZSBub3Qgc2V0YCA6IGBEdWUgZGF0ZTogJHtwcm9qZWN0RGF0ZX1gO1xuICAgIC8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBvcGVuUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gaW5kZXg7IC8vIENhcHR1cmUgdGhlIGN1cnJlbnQgcHJvamVjdCBpbmRleFxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICByZW5kZXJUb2RvKHByb2plY3RJbmRleCk7XG4gICAgICB1bC5hcHBlbmQobGkpXG4gICAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG4gICAgICBhcHAuYXBwZW5kKHVsKTtcbiAgICB9KTtcbi8vICoqKioqKioqKioqKioqKioqRVhQRVJJTUVOVEFMKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHBpbkljb24sIGljb25zQ29udGFpbmVyLCB0aXRsZUNvbnRhaW5lciwgZGVzY0NvbnRhaW5lciwgdGFza0NvdW50ZXIsIGRhdGVDb250YWluZXIpO1xuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIGFwcC5hcHBlbmQocHJvamVjdFdyYXBwZXIpO1xuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFdyYXBwZXI7XG59IiwiaW1wb3J0ICcuLi9jc3MvcmVuZGVyVG9kby5jc3MnO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vcmVuZGVyUHJvamVjdHMuanMnO1xuLy8gaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvKGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdHNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2luZGV4XTsgLy9nZXQgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0c1xuXG4gICAgLy90aGlzIGJsb2NrIGJlbG93IGFyZSBhbGwgdGhlIHZhcmlhYmxlc1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRvZG87XG5cbiAgICAvL3RoaXMgYmxvY2sgYmVsb3cgYXJlIHRoZSB2YXJpYWJsZSB0ZXh0IGFzc2lnbm1lbnQsIHNlcGFyYXRpbmcgdGhlbSBmcm9tIHRoZSB2YXJpYWJsZXMgdG8gYXZvaWQgY29uZnVzaW9uXG4gICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgY2xvc2VNb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NOYW1lID0gJ3RvZG8tY29udGFpbmVyJztcbiAgICBvcGVuTW9kYWxCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuY2lsXCI+PC9pPidcbiAgICBvcGVuTW9kYWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzaycpO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+JztcbiAgICBiYWNrQnRuLmNsYXNzTmFtZSA9ICdiYWNrLWJ0bidcblxuICAgIG9wZW5Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlucHV0TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSlcblxuICAgIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpbnB1dE1vZGFsLmNsb3NlKCk7XG4gICAgfSlcblxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRhc2suLi5cIik7XG4gICAgY29uc3QgdG9kb0lucHV0VmFsdWUgPSB0b2RvSW5wdXQudmFsdWU7XG4gICAgdGFza3MucHVzaCh0b2RvSW5wdXRWYWx1ZSk7IFxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvamVjdCdzIHRvZG8gYXJyYXkgd2l0aCB0aGUgdXBkYXRlZCB0YXNrc1xuICAgIHByb2plY3QudG9kbyA9IHRhc2tzO1xuICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCBwcm9qZWN0OlwiLCBwcm9qZWN0KTsgLy8gTG9nIHRoZSB1cGRhdGVkIHByb2plY3RcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyAvL3N0b3JlIHRoZSBuZXcgYWRkZWQgdGFza3MgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zb2xlLmxvZyhcIlByb2plY3RzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2U6XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTsgLy8gTG9nIHRoZSBwcm9qZWN0cyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgcmVuZGVyVG9kbyhpbmRleCk7IC8vdGhlbiByZS1yZW5kZXIgdGhlIGFycmF5IGJ5IGNhbGxpbmcgcmVuZGVyVG9kbyBmdW5jdGlvbiB3aGljaCBjb250YWlucyB0aGUgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIGZ1bmN0aW9uXG4gICAgY29uc29sZS5sb2coJ05ldyB0YXNrIGFkZGVkJykgLy9hZGRzIG5ldyB0YXNrcyBpbnNpZGUgdGhlIHByb2plY3RcbiAgfVxuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pOyAvL3JlLXJlbmRlcnMgdGhlIHByb2plY3RzIHdoZW4gdGhlIGJhY2sgYnV0dG9uIGlzIGNsaWNrZWRcbiAgXG4gICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGNvbnRlbnQgaW4gdGhlIGFwcCBlbGVtZW50XG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgdG9kbyBhcnJheSBvZiB0aGUgcHJvamVjdCBhbmQgY3JlYXRlIGxpc3QgaXRlbXMgZm9yIGVhY2ggdG9kb1xuICAgIHRhc2tzLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrc1tpbmRleF1cblxuICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCI+PC9pPic7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gdG9kb0l0ZW07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTsgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIHRhc2tzIGFycmF5XG4gICAgICAgICAgcHJvamVjdC50b2RvID0gdGFza3M7IC8vIFVwZGF0ZSB0aGUgcHJvamVjdCdzIHRvZG8gYXJyYXkgd2l0aCB0aGUgdXBkYXRlZCB0YXNrc1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBwcm9qZWN0c1xuICAgICAgXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0YXNrJ3MgY29ycmVzcG9uZGluZyBsaXN0IGl0ZW0gZnJvbSB0aGUgRE9NXG4gICAgICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuY2hpbGROb2Rlc1t0YXNrSW5kZXhdKTtcbiAgICAgIFxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIHRhc2tzLCByZW1vdmUgdGhlIGRpYWxvZyBlbGVtZW50IGFuZCByZS1yZW5kZXIgb25seSB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBpbnB1dE1vZGFsLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkaWFsb2dcbiAgICAgICAgICAgICAgaW5wdXRNb2RhbC5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBkaWFsb2cgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTsgLy8gUmUtcmVuZGVyIG9ubHkgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gSW5zaWRlIHRoZSBmb3JFYWNoIGxvb3Agd2hlcmUgeW91IGNyZWF0ZSBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCB0YXNrXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuaW5kZXhPZih0b2RvSXRlbSk7IC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSB0YXNrIHRvIHJlbW92ZVxuICAgICAgICAgIHJlbW92ZVRhc2sodGFza0luZGV4KTsgLy8gQ2FsbCB0aGUgcmVtb3ZlVGFzayBmdW5jdGlvbiB3aXRoIHRoZSBpbmRleCB0byByZW1vdmVcbiAgICAgIH0pO1xuICAgICAgXG5cbiAgICAgICAgbGkuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgICAgIHVsLmFwcGVuZChsaSk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHVub3JkZXJlZCBsaXN0IHRvIHRoZSBhcHAgZWxlbWVudFxuICAgIGlucHV0TW9kYWwuYXBwZW5kKHRvZG9JbnB1dCwgYWRkVG9kb0J0biwgY2xvc2VNb2RhbEJ0bilcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh1bCwgb3Blbk1vZGFsQnRuLCBiYWNrQnRuKVxuICAgIGFwcC5hcHBlbmQodG9kb0NvbnRhaW5lciwgaW5wdXRNb2RhbCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcmVuZGVyUHJvamVjdHMuanMnO1xuaW1wb3J0IGhlYWRlckNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hvbWVDb250ZW50LmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHsgaGVhZGVyRWxlbWVudCB9ID0gaGVhZGVyQ29udGVudCgpO1xuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVyRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBhcHAuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBhcHAuYXBwZW5kKG5ld0NvbnRlbnQpXG5cbiAgICByZXR1cm4gYXBwO1xufVxuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29udGVudChob21lQ29udGVudCgpKVxufSlcblxuY29uc3Qgbm90ZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcbm5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRlbnQocmVuZGVyUHJvamVjdHMoKSlcbn0pXG5cbnJlbmRlcigpO1xudXBkYXRlQ29udGVudChob21lQ29udGVudCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=