"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login */ \"(app-pages-browser)/./src/components/Login.js\");\n/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignUp */ \"(app-pages-browser)/./src/components/SignUp.js\");\n/* harmony import */ var _components_JoinGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/JoinGame.js */ \"(app-pages-browser)/./src/components/JoinGame.js\");\n/* harmony import */ var stream_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stream-chat */ \"(app-pages-browser)/./node_modules/stream-chat/dist/browser.es.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _game_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.tsx */ \"(app-pages-browser)/./src/app/game.tsx\");\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/components/Chat/Chat.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ \"(app-pages-browser)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);\n//import \"./globals.css\";\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// dotenv.config({path: \"../.env\"});\n// const test = process.env.REACT_APP_API_KEY;\n// const api_key = process.env.REACT_APP_API_KEY;\nfunction App() {\n    _s();\n    const api_key = \"zs4xxgfzmt7p\";\n    //console.log(process.env);\n    //const api_key = process.env.REACT_APP_API_KEY;\n    // console.log(\"API KEY:\", api_key);\n    // console.log(\"TEST:\", test);\n    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    const token = cookies.get(\"token\");\n    const client = stream_chat__WEBPACK_IMPORTED_MODULE_4__.StreamChat.getInstance(api_key);\n    const [isAuth, setIsAuth] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    if (token) {\n        client.connectUser({\n            id: cookies.get(\"userId\"),\n            name: cookies.get(\"username\"),\n            hashedPass: cookies.get(\"hashedPass\")\n        }, token).then((user)=>{\n            setIsAuth(true);\n            console.log(user);\n        });\n    }\n    const logOut = ()=>{\n        cookies.remove(\"token\");\n        cookies.remove(\"userId\");\n        cookies.remove(\"hashedPass\");\n        cookies.remove(\"username\");\n        client.disconnectUser();\n        setIsAuth(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(stream_chat_react__WEBPACK_IMPORTED_MODULE_9__.Chat, {\n            client: client,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logOut,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JoinGame_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n            lineNumber: 50,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"signup/login\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    setIsAuth: setIsAuth\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    setIsAuth: setIsAuth\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n            lineNumber: 55,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kobe/Desktop/PersonalProjects/TicTacToeFull/client/src/app/page.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"DqdCCbSY4jGAQyUn9kW3N8Ks0Ig=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlCOzs7QUFHZTtBQUNFO0FBQ087QUFDVjtBQUNBO0FBQ047QUFDRTtBQUNJO0FBQ1g7QUFDNUIsb0NBQW9DO0FBQ3BDLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFFakQsU0FBU1M7O0lBQ0wsTUFBTUMsVUFBVTtJQUNoQiwyQkFBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsTUFBTUMsVUFBVSxJQUFJUCx3REFBT0E7SUFDM0IsTUFBTVEsUUFBUUQsUUFBUUUsR0FBRyxDQUFDO0lBQzFCLE1BQU1DLFNBQVNYLG1EQUFVQSxDQUFDWSxXQUFXLENBQUNMO0lBQ3RDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxJQUFHTyxPQUFPO1FBQ05FLE9BQU9JLFdBQVcsQ0FBQztZQUNmQyxJQUFJUixRQUFRRSxHQUFHLENBQUM7WUFDaEJPLE1BQU1ULFFBQVFFLEdBQUcsQ0FBQztZQUNsQlEsWUFBWVYsUUFBUUUsR0FBRyxDQUFDO1FBQzVCLEdBQ0FELE9BQ0VVLElBQUksQ0FBQyxDQUFDQztZQUNKTixVQUFVO1lBQ1ZPLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUNBLE1BQU1HLFNBQVM7UUFDWGYsUUFBUWdCLE1BQU0sQ0FBQztRQUNmaEIsUUFBUWdCLE1BQU0sQ0FBQztRQUNmaEIsUUFBUWdCLE1BQU0sQ0FBQztRQUNmaEIsUUFBUWdCLE1BQU0sQ0FBQztRQUNmYixPQUFPYyxjQUFjO1FBQ3JCWCxVQUFVO0lBQ2Q7SUFDQSxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDVmQsdUJBQ0csOERBQUNULG1EQUFJQTtZQUFDTyxRQUFRQTs7OEJBQ1YsOERBQUNpQjtvQkFBT0MsU0FBU047OEJBQVE7Ozs7Ozs4QkFDekIsOERBQUN4QiwrREFBUUE7Ozs7Ozs7Ozs7aUNBR2IsOERBQUMyQjtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQzdCLDBEQUFNQTtvQkFBQ2dCLFdBQVdBOzs7Ozs7OEJBQ25CLDhEQUFDakIseURBQUtBO29CQUFDaUIsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RDO0dBN0NTUjtLQUFBQTtBQStDVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIjtcblwidXNlIGNsaWVudFwiOyAvL3RoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50XG5cbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduVXBcIjtcbmltcG9ydCBKb2luR2FtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Kb2luR2FtZS5qc1wiO1xuaW1wb3J0IHtTdHJlYW1DaGF0fSBmcm9tIFwic3RyZWFtLWNoYXRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaWNUYWNUb2UgZnJvbSBcIi4vZ2FtZS50c3hcIjtcbmltcG9ydCB7Q2hhdH0gZnJvbSBcInN0cmVhbS1jaGF0LXJlYWN0XCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbi8vIGRvdGVudi5jb25maWcoe3BhdGg6IFwiLi4vLmVudlwifSk7XG4vLyBjb25zdCB0ZXN0ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVk7XG4vLyBjb25zdCBhcGlfa2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBhcGlfa2V5ID0gXCJ6czR4eGdmem10N3BcIjtcbiAgICAvL2NvbnNvbGUubG9nKHByb2Nlc3MuZW52KTtcbiAgICAvL2NvbnN0IGFwaV9rZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFQSSBLRVk6XCIsIGFwaV9rZXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDpcIiwgdGVzdCk7XG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xuICAgIGNvbnN0IGNsaWVudCA9IFN0cmVhbUNoYXQuZ2V0SW5zdGFuY2UoYXBpX2tleSk7XG4gICAgY29uc3QgW2lzQXV0aCwgc2V0SXNBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBpZih0b2tlbikge1xuICAgICAgICBjbGllbnQuY29ubmVjdFVzZXIoe1xuICAgICAgICAgICAgaWQ6IGNvb2tpZXMuZ2V0KFwidXNlcklkXCIpLFxuICAgICAgICAgICAgbmFtZTogY29va2llcy5nZXQoXCJ1c2VybmFtZVwiKSxcbiAgICAgICAgICAgIGhhc2hlZFBhc3M6IGNvb2tpZXMuZ2V0KFwiaGFzaGVkUGFzc1wiKSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9rZW5cbiAgICAgICAgKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0F1dGgodHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgY29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcbiAgICAgICAgY29va2llcy5yZW1vdmUoXCJ1c2VySWRcIik7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKFwiaGFzaGVkUGFzc1wiKTtcbiAgICAgICAgY29va2llcy5yZW1vdmUoXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgY2xpZW50LmRpc2Nvbm5lY3RVc2VyKCk7XG4gICAgICAgIHNldElzQXV0aChmYWxzZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgICAge2lzQXV0aCA/IChcbiAgICAgICAgICAgICAgICA8Q2hhdCBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEpvaW5HYW1lLz5cbiAgICAgICAgICAgICAgICA8L0NoYXQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduVXAgc2V0SXNBdXRoPXtzZXRJc0F1dGh9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIHNldElzQXV0aD17c2V0SXNBdXRofS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIkxvZ2luIiwiU2lnblVwIiwiSm9pbkdhbWUiLCJTdHJlYW1DaGF0IiwiQ29va2llcyIsInVzZVN0YXRlIiwiVGljVGFjVG9lIiwiQ2hhdCIsImRvdGVudiIsIkFwcCIsImFwaV9rZXkiLCJjb29raWVzIiwidG9rZW4iLCJnZXQiLCJjbGllbnQiLCJnZXRJbnN0YW5jZSIsImlzQXV0aCIsInNldElzQXV0aCIsImNvbm5lY3RVc2VyIiwiaWQiLCJuYW1lIiwiaGFzaGVkUGFzcyIsInRoZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImxvZ091dCIsInJlbW92ZSIsImRpc2Nvbm5lY3RVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});