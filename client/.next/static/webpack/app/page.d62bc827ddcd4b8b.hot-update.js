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

/***/ "(app-pages-browser)/./src/components/JoinGame.js":
/*!************************************!*\
  !*** ./src/components/JoinGame.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/context/ChatContext.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction JoinGame() {\n    _s();\n    const [rivalUsername, setRivalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { client } = (0,stream_chat_react__WEBPACK_IMPORTED_MODULE_2__.useChatContext)();\n    const createChannel = async ()=>{\n        const response = await client.queryUsers({\n            name: {\n                $eq: rivalUsername\n            }\n        });\n        if (response.users.length == 0) {\n            alert(\"User not found\");\n        }\n        ; //does this need return?\n        const newChannel = await client.channel;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"joinGame\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Create Game \"\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Username of rival...\",\n                onChange: (event)=>{\n                    setRivalUsername(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createChannel,\n                children: \"Join/Start Game\"\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(JoinGame, \"0ztr5cHlLGJJU7G/RT+0VR/uZdQ=\", false, function() {\n    return [\n        stream_chat_react__WEBPACK_IMPORTED_MODULE_2__.useChatContext\n    ];\n});\n_c = JoinGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinGame);\nvar _c;\n$RefreshReg$(_c, \"JoinGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFDYTtBQUVuRCxTQUFTRzs7SUFDTCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUNLLE1BQU0sRUFBQyxHQUFHSixpRUFBY0E7SUFDL0IsTUFBTUssZ0JBQWdCO1FBQ2xCLE1BQU1DLFdBQVcsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1lBQUNDLE1BQU07Z0JBQUNDLEtBQU1QO1lBQWE7UUFBQztRQUNyRSxJQUFHSSxTQUFTSSxLQUFLLENBQUNDLE1BQU0sSUFBRSxHQUFFO1lBQUNDLE1BQU07UUFBaUI7VUFBRyx3QkFBd0I7UUFDL0UsTUFBTUMsYUFBYSxNQUFNVCxPQUFPVSxPQUFPO0lBQzNDO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsYUFBWTtnQkFBdUJDLFVBQVUsQ0FBQ0M7b0JBQ2pEbEIsaUJBQWlCa0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO2dCQUNuQzs7Ozs7OzBCQUVKLDhEQUFDQztnQkFBT0MsU0FBU3BCOzBCQUFlOzs7Ozs7Ozs7Ozs7QUFJNUM7R0FuQlNKOztRQUVZRCw2REFBY0E7OztLQUYxQkM7QUFvQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSm9pbkdhbWUuanM/ZTIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDaGF0Q29udGV4dCB9IGZyb20gXCJzdHJlYW0tY2hhdC1yZWFjdFwiO1xuXG5mdW5jdGlvbiBKb2luR2FtZSgpIHtcbiAgICBjb25zdCBbcml2YWxVc2VybmFtZSwgc2V0Uml2YWxVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCB7Y2xpZW50fSA9IHVzZUNoYXRDb250ZXh0KCk7XG4gICAgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnlVc2Vycyh7bmFtZTogeyRlcSA6IHJpdmFsVXNlcm5hbWV9fSk7XG4gICAgICAgIGlmKHJlc3BvbnNlLnVzZXJzLmxlbmd0aD09MCl7YWxlcnQoXCJVc2VyIG5vdCBmb3VuZFwiKX07IC8vZG9lcyB0aGlzIG5lZWQgcmV0dXJuP1xuICAgICAgICBjb25zdCBuZXdDaGFubmVsID0gYXdhaXQgY2xpZW50LmNoYW5uZWxcbiAgICB9O1xuICAgIHJldHVybiggXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9pbkdhbWVcIj5cbiAgICAgICAgICAgIDxoND5DcmVhdGUgR2FtZSA8L2g0PlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb2Ygcml2YWwuLi5cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Uml2YWxVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUNoYW5uZWx9PkpvaW4vU3RhcnQgR2FtZTwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSm9pbkdhbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDaGF0Q29udGV4dCIsIkpvaW5HYW1lIiwicml2YWxVc2VybmFtZSIsInNldFJpdmFsVXNlcm5hbWUiLCJjbGllbnQiLCJjcmVhdGVDaGFubmVsIiwicmVzcG9uc2UiLCJxdWVyeVVzZXJzIiwibmFtZSIsIiRlcSIsInVzZXJzIiwibGVuZ3RoIiwiYWxlcnQiLCJuZXdDaGFubmVsIiwiY2hhbm5lbCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/JoinGame.js\n"));

/***/ })

});