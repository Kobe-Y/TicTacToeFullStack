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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/context/ChatContext.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction JoinGame() {\n    _s();\n    const [rivalUsername, setRivalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { client } = (0,stream_chat_react__WEBPACK_IMPORTED_MODULE_2__.useChatContext)();\n    const createChannel = async ()=>{\n        const response = await client.queryUsers({\n            name: {\n                $eq: rivalUsername\n            }\n        });\n        if (response.users.length == 0) {\n            alert(\"User not found\");\n        }\n        ; //does this need return?\n        const newChannel = await client.channel(\"messaging\", {\n            members: [\n                client.userID,\n                response.users[0].id\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"joinGame\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Create Game \"\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Username of rival...\",\n                onChange: (event)=>{\n                    setRivalUsername(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createChannel,\n                children: \"Join/Start Game\"\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(JoinGame, \"0ztr5cHlLGJJU7G/RT+0VR/uZdQ=\", false, function() {\n    return [\n        stream_chat_react__WEBPACK_IMPORTED_MODULE_2__.useChatContext\n    ];\n});\n_c = JoinGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinGame);\nvar _c;\n$RefreshReg$(_c, \"JoinGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFDYTtBQUVuRCxTQUFTRzs7SUFDTCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUNLLE1BQU0sRUFBQyxHQUFHSixpRUFBY0E7SUFDL0IsTUFBTUssZ0JBQWdCO1FBQ2xCLE1BQU1DLFdBQVcsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1lBQUNDLE1BQU07Z0JBQUNDLEtBQU1QO1lBQWE7UUFBQztRQUNyRSxJQUFHSSxTQUFTSSxLQUFLLENBQUNDLE1BQU0sSUFBRSxHQUFFO1lBQUNDLE1BQU07UUFBaUI7VUFBRyx3QkFBd0I7UUFDL0UsTUFBTUMsYUFBYSxNQUFNVCxPQUFPVSxPQUFPLENBQUMsYUFBYTtZQUNqREMsU0FBUztnQkFBQ1gsT0FBT1ksTUFBTTtnQkFBRVYsU0FBU0ksS0FBSyxDQUFDLEVBQUUsQ0FBQ08sRUFBRTthQUFDO1FBQ2xEO0lBRUo7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxhQUFZO2dCQUF1QkMsVUFBVSxDQUFDQztvQkFDakRyQixpQkFBaUJxQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ25DOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFPQyxTQUFTdkI7MEJBQWU7Ozs7Ozs7Ozs7OztBQUk1QztHQXRCU0o7O1FBRVlELDZEQUFjQTs7O0tBRjFCQztBQXVCVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Kb2luR2FtZS5qcz9lMjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNoYXRDb250ZXh0IH0gZnJvbSBcInN0cmVhbS1jaGF0LXJlYWN0XCI7XG5cbmZ1bmN0aW9uIEpvaW5HYW1lKCkge1xuICAgIGNvbnN0IFtyaXZhbFVzZXJuYW1lLCBzZXRSaXZhbFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHtjbGllbnR9ID0gdXNlQ2hhdENvbnRleHQoKTtcbiAgICBjb25zdCBjcmVhdGVDaGFubmVsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5xdWVyeVVzZXJzKHtuYW1lOiB7JGVxIDogcml2YWxVc2VybmFtZX19KTtcbiAgICAgICAgaWYocmVzcG9uc2UudXNlcnMubGVuZ3RoPT0wKXthbGVydChcIlVzZXIgbm90IGZvdW5kXCIpfTsgLy9kb2VzIHRoaXMgbmVlZCByZXR1cm4/XG4gICAgICAgIGNvbnN0IG5ld0NoYW5uZWwgPSBhd2FpdCBjbGllbnQuY2hhbm5lbChcIm1lc3NhZ2luZ1wiLCB7XG4gICAgICAgICAgICBtZW1iZXJzOiBbY2xpZW50LnVzZXJJRCwgcmVzcG9uc2UudXNlcnNbMF0uaWRdLFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfTtcbiAgICByZXR1cm4oIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvaW5HYW1lXCI+XG4gICAgICAgICAgICA8aDQ+Q3JlYXRlIEdhbWUgPC9oND5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lIG9mIHJpdmFsLi4uXCIgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJpdmFsVXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGFubmVsfT5Kb2luL1N0YXJ0IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEpvaW5HYW1lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ2hhdENvbnRleHQiLCJKb2luR2FtZSIsInJpdmFsVXNlcm5hbWUiLCJzZXRSaXZhbFVzZXJuYW1lIiwiY2xpZW50IiwiY3JlYXRlQ2hhbm5lbCIsInJlc3BvbnNlIiwicXVlcnlVc2VycyIsIm5hbWUiLCIkZXEiLCJ1c2VycyIsImxlbmd0aCIsImFsZXJ0IiwibmV3Q2hhbm5lbCIsImNoYW5uZWwiLCJtZW1iZXJzIiwidXNlcklEIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/JoinGame.js\n"));

/***/ })

});