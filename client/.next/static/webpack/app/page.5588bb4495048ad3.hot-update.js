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

/***/ "(app-pages-browser)/./src/components/GameDriver.js":
/*!**************************************!*\
  !*** ./src/components/GameDriver.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/game */ \"(app-pages-browser)/./src/app/game.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction GameDriver(param) {\n    let { channel } = param;\n    _s();\n    const [playersJoined, setPlayersJoined] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(channel.state.watcher_count === 2);\n    channel.on(\"user.watching.start\", (event)=>{\n        setPlayersJoined(event.watcher_count === 2);\n    });\n    if (!playersJoined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \" Waiting for other player to join...\"\n        }, void 0, false, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/GameDriver.js\",\n            lineNumber: 11,\n            columnNumber: 17\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/GameDriver.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kobe/Desktop/backend/client/src/components/GameDriver.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(GameDriver, \"9i+2S8tHutNX12JAhreaxBnXwZ8=\");\n_c = GameDriver;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDriver);\nvar _c;\n$RefreshReg$(_c, \"GameDriver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0dhbWVEcml2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNUO0FBRS9CLFNBQVNHLFdBQVcsS0FBUztRQUFULEVBQUNDLE9BQU8sRUFBQyxHQUFUOztJQUNoQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQ0csUUFBUUcsS0FBSyxDQUFDQyxhQUFhLEtBQUs7SUFFbkZKLFFBQVFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQ0M7UUFDL0JKLGlCQUFpQkksTUFBTUYsYUFBYSxLQUFLO0lBQzdDO0lBQ0EsSUFBSSxDQUFDSCxlQUFlO1FBQ2hCLHFCQUFRLDhEQUFDTTtzQkFBSTs7Ozs7O0lBQ2pCO0lBQ0EscUJBQ0ksOERBQUNBO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNWLGlEQUFJQTs7Ozs7Ozs7OztBQUtqQjtHQWhCU0M7S0FBQUE7QUFrQlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZURyaXZlci5qcz83NGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2FwcC9nYW1lXCI7XG5cbmZ1bmN0aW9uIEdhbWVEcml2ZXIoe2NoYW5uZWx9KSB7XG4gICAgY29uc3QgW3BsYXllcnNKb2luZWQsIHNldFBsYXllcnNKb2luZWRdID0gdXNlU3RhdGUoY2hhbm5lbC5zdGF0ZS53YXRjaGVyX2NvdW50ID09PSAyKTtcblxuICAgIGNoYW5uZWwub24oXCJ1c2VyLndhdGNoaW5nLnN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBzZXRQbGF5ZXJzSm9pbmVkKGV2ZW50LndhdGNoZXJfY291bnQgPT09IDIpXG4gICAgfSk7XG4gICAgaWYgKCFwbGF5ZXJzSm9pbmVkKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj4gV2FpdGluZyBmb3Igb3RoZXIgcGxheWVyIHRvIGpvaW4uLi48L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxHYW1lIC8+XG4gICAgICAgICAgICB7LypjaGF0Ki99XG4gICAgICAgICAgICB7LypleGl0IGdhbWUqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZURyaXZlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdhbWUiLCJHYW1lRHJpdmVyIiwiY2hhbm5lbCIsInBsYXllcnNKb2luZWQiLCJzZXRQbGF5ZXJzSm9pbmVkIiwic3RhdGUiLCJ3YXRjaGVyX2NvdW50Iiwib24iLCJldmVudCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/GameDriver.js\n"));

/***/ })

});