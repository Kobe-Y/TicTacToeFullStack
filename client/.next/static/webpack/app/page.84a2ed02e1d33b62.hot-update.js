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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login */ \"(app-pages-browser)/./src/components/Login.js\");\n/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignUp */ \"(app-pages-browser)/./src/components/SignUp.js\");\n/* harmony import */ var stream_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-chat */ \"(app-pages-browser)/./node_modules/stream-chat/dist/browser.es.js\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _game_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.tsx */ \"(app-pages-browser)/./src/app/game.tsx\");\n//import \"./globals.css\";\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    console.log(\"HERE\");\n    const api_key = \"zs4xxgfzmt7p\";\n    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n    const token = cookies.get(\"token\");\n    const client = stream_chat__WEBPACK_IMPORTED_MODULE_3__.StreamChat.getInstance(api_key);\n    const [isAuth, setIsAuth] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    if (token) {\n        client.connectUser({\n            id: cookies.get(\"userId\"),\n            name: cookies.get(\"username\"),\n            hashedPass: cookies.get(\"hashedPass\")\n        }, token).then((user)=>{\n            setIsAuth(true);\n            console.log(user);\n        });\n    }\n    const logOut = ()=>{\n        cookies.remove(\"token\");\n        cookies.remove(\"userId\");\n        cookies.remove(\"hashedPass\");\n        cookies.remove(\"username\");\n        client.disconnectUser();\n        setIsAuth(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logOut,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n            lineNumber: 42,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"signup/login\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    setIsAuth: setIsAuth\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    setIsAuth: setIsAuth\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n            lineNumber: 47,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kobe/Desktop/backend/client/src/app/page.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"DqdCCbSY4jGAQyUn9kW3N8Ks0Ig=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5QkFBeUI7OztBQUdlO0FBQ0U7QUFDSDtBQUNBO0FBQ047QUFDRTtBQUNIO0FBRWhDLFNBQVNPOztJQUNMQyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFVBQVUsSUFBSVIsd0RBQU9BO0lBQzNCLE1BQU1TLFFBQVFELFFBQVFFLEdBQUcsQ0FBQztJQUMxQixNQUFNQyxTQUFTWixtREFBVUEsQ0FBQ2EsV0FBVyxDQUFDTDtJQUN0QyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDckMsSUFBR1EsT0FBTztRQUNORSxPQUFPSSxXQUFXLENBQUM7WUFDZkMsSUFBSVIsUUFBUUUsR0FBRyxDQUFDO1lBQ2hCTyxNQUFNVCxRQUFRRSxHQUFHLENBQUM7WUFDbEJRLFlBQVlWLFFBQVFFLEdBQUcsQ0FBQztRQUM1QixHQUNBRCxPQUNFVSxJQUFJLENBQUMsQ0FBQ0M7WUFDSk4sVUFBVTtZQUNWVCxRQUFRQyxHQUFHLENBQUNjO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNQyxTQUFTO1FBQ1hiLFFBQVFjLE1BQU0sQ0FBQztRQUNmZCxRQUFRYyxNQUFNLENBQUM7UUFDZmQsUUFBUWMsTUFBTSxDQUFDO1FBQ2ZkLFFBQVFjLE1BQU0sQ0FBQztRQUNmWCxPQUFPWSxjQUFjO1FBQ3JCVCxVQUFVO0lBQ2Q7SUFDQSxxQkFDSSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDVlosdUJBQ0csOERBQUNXOzs4QkFDRyw4REFBQ0U7b0JBQU9DLFNBQVNOOzhCQUFROzs7Ozs7OEJBQ3pCLDhEQUFDbkIsaURBQVNBOzs7Ozs7Ozs7O2lDQUdkLDhEQUFDc0I7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUMzQiwwREFBTUE7b0JBQUNnQixXQUFXQTs7Ozs7OzhCQUNuQiw4REFBQ2pCLHlEQUFLQTtvQkFBQ2lCLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QztHQTFDU1Y7S0FBQUE7QUE0Q1QsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5cInVzZSBjbGllbnRcIjsgLy90aGlzIGlzIGEgY2xpZW50IGNvbXBvbmVudFxuXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnblVwXCI7XG5pbXBvcnQge1N0cmVhbUNoYXR9IGZyb20gXCJzdHJlYW0tY2hhdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpY1RhY1RvZSBmcm9tIFwiLi9nYW1lLnRzeFwiO1xuaW1wb3J0IHtDSEFUfSBmcm9tIFwic3RyZWFtLWNoYXRcIlxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc29sZS5sb2coXCJIRVJFXCIpO1xuICAgIGNvbnN0IGFwaV9rZXkgPSBcInpzNHh4Z2Z6bXQ3cFwiO1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcbiAgICBjb25zdCBjbGllbnQgPSBTdHJlYW1DaGF0LmdldEluc3RhbmNlKGFwaV9rZXkpO1xuICAgIGNvbnN0IFtpc0F1dGgsIHNldElzQXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgaWYodG9rZW4pIHtcbiAgICAgICAgY2xpZW50LmNvbm5lY3RVc2VyKHtcbiAgICAgICAgICAgIGlkOiBjb29raWVzLmdldChcInVzZXJJZFwiKSxcbiAgICAgICAgICAgIG5hbWU6IGNvb2tpZXMuZ2V0KFwidXNlcm5hbWVcIiksXG4gICAgICAgICAgICBoYXNoZWRQYXNzOiBjb29raWVzLmdldChcImhhc2hlZFBhc3NcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuXG4gICAgICAgICkudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgICAgc2V0SXNBdXRoKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKFwidXNlcklkXCIpO1xuICAgICAgICBjb29raWVzLnJlbW92ZShcImhhc2hlZFBhc3NcIik7XG4gICAgICAgIGNvb2tpZXMucmVtb3ZlKFwidXNlcm5hbWVcIik7XG4gICAgICAgIGNsaWVudC5kaXNjb25uZWN0VXNlcigpO1xuICAgICAgICBzZXRJc0F1dGgoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgIHtpc0F1dGggPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dPdXR9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VGljVGFjVG9lLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25VcCBzZXRJc0F1dGg9e3NldElzQXV0aH0vPlxuICAgICAgICAgICAgICAgICAgICA8TG9naW4gc2V0SXNBdXRoPXtzZXRJc0F1dGh9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9ICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiTG9naW4iLCJTaWduVXAiLCJTdHJlYW1DaGF0IiwiQ29va2llcyIsInVzZVN0YXRlIiwiVGljVGFjVG9lIiwiQ0hBVCIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJhcGlfa2V5IiwiY29va2llcyIsInRva2VuIiwiZ2V0IiwiY2xpZW50IiwiZ2V0SW5zdGFuY2UiLCJpc0F1dGgiLCJzZXRJc0F1dGgiLCJjb25uZWN0VXNlciIsImlkIiwibmFtZSIsImhhc2hlZFBhc3MiLCJ0aGVuIiwidXNlciIsImxvZ091dCIsInJlbW92ZSIsImRpc2Nvbm5lY3RVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});