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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/context/ChatContext.js\");\n/* harmony import */ var _gameDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameDriver */ \"(app-pages-browser)/./src/components/gameDriver.js\");\n/* harmony import */ var _gameDriver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gameDriver__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction JoinGame() {\n    _s();\n    const [rivalUsername, setRivalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { client } = (0,stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext)();\n    const [channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const createChannel = async ()=>{\n        const response = await client.queryUsers({\n            name: {\n                $eq: rivalUsername\n            }\n        });\n        if (response.users.length == 0) {\n            alert(\"User not found\");\n        }\n        ; //does this need return?\n        const newChannel = await client.channel(\"messaging\", {\n            members: [\n                client.userID,\n                response.users[0].id\n            ]\n        });\n        await newChannel.watch();\n        setChannel(newChannel);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: channel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"gameDriver\", {}, void 0, false, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"joinGame\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Create Game \"\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Username of rival...\",\n                    onChange: (event)=>{\n                        setRivalUsername(event.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createChannel,\n                    children: \"Join/Start Game\"\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(JoinGame, \"DuPanb36mnyyRGh7sM0/rbPqAoc=\", false, function() {\n    return [\n        stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext\n    ];\n});\n_c = JoinGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinGame);\nvar _c;\n$RefreshReg$(_c, \"JoinGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNhO0FBQ2Q7QUFFckMsU0FBU0k7O0lBQ0wsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxFQUFDTSxNQUFNLEVBQUMsR0FBR0wsaUVBQWNBO0lBQy9CLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNUyxnQkFBZ0I7UUFDbEIsTUFBTUMsV0FBVyxNQUFNSixPQUFPSyxVQUFVLENBQUM7WUFBQ0MsTUFBTTtnQkFBQ0MsS0FBTVQ7WUFBYTtRQUFDO1FBQ3JFLElBQUdNLFNBQVNJLEtBQUssQ0FBQ0MsTUFBTSxJQUFFLEdBQUU7WUFBQ0MsTUFBTTtRQUFpQjtVQUFHLHdCQUF3QjtRQUMvRSxNQUFNQyxhQUFhLE1BQU1YLE9BQU9DLE9BQU8sQ0FBQyxhQUFhO1lBQ2pEVyxTQUFTO2dCQUFDWixPQUFPYSxNQUFNO2dCQUFFVCxTQUFTSSxLQUFLLENBQUMsRUFBRSxDQUFDTSxFQUFFO2FBQUM7UUFDbEQ7UUFDQSxNQUFNSCxXQUFXSSxLQUFLO1FBQ3RCYixXQUFXUztJQUNmO0lBQ0EscUJBQ0k7a0JBQ0NWLHdCQUNELDhEQUFDTDs7OztpQ0FHRyw4REFBQ29CO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFBTUMsYUFBWTtvQkFBdUJDLFVBQVUsQ0FBQ0M7d0JBQ2pEdkIsaUJBQWlCdUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO29CQUNuQzs7Ozs7OzhCQUVKLDhEQUFDQztvQkFBT0MsU0FBU3ZCOzhCQUFlOzs7Ozs7Ozs7Ozs7O0FBTWhEO0dBL0JTTjs7UUFFWUYsNkRBQWNBOzs7S0FGMUJFO0FBZ0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzP2UyMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2hhdENvbnRleHQgfSBmcm9tIFwic3RyZWFtLWNoYXQtcmVhY3RcIjtcbmltcG9ydCBnYW1lRHJpdmVyIGZyb20gXCIuL2dhbWVEcml2ZXJcIlxuXG5mdW5jdGlvbiBKb2luR2FtZSgpIHtcbiAgICBjb25zdCBbcml2YWxVc2VybmFtZSwgc2V0Uml2YWxVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCB7Y2xpZW50fSA9IHVzZUNoYXRDb250ZXh0KCk7XG4gICAgY29uc3QgW2NoYW5uZWwsIHNldENoYW5uZWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnlVc2Vycyh7bmFtZTogeyRlcSA6IHJpdmFsVXNlcm5hbWV9fSk7XG4gICAgICAgIGlmKHJlc3BvbnNlLnVzZXJzLmxlbmd0aD09MCl7YWxlcnQoXCJVc2VyIG5vdCBmb3VuZFwiKX07IC8vZG9lcyB0aGlzIG5lZWQgcmV0dXJuP1xuICAgICAgICBjb25zdCBuZXdDaGFubmVsID0gYXdhaXQgY2xpZW50LmNoYW5uZWwoXCJtZXNzYWdpbmdcIiwge1xuICAgICAgICAgICAgbWVtYmVyczogW2NsaWVudC51c2VySUQsIHJlc3BvbnNlLnVzZXJzWzBdLmlkXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IG5ld0NoYW5uZWwud2F0Y2goKTtcbiAgICAgICAgc2V0Q2hhbm5lbChuZXdDaGFubmVsKTtcbiAgICB9O1xuICAgIHJldHVybiggXG4gICAgICAgIDw+XG4gICAgICAgIHtjaGFubmVsID8gKFxuICAgICAgICA8Z2FtZURyaXZlci8+XG4gICAgICAgIClcbiAgICAgICAgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvaW5HYW1lXCI+XG4gICAgICAgICAgICAgICAgPGg0PkNyZWF0ZSBHYW1lIDwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb2Ygcml2YWwuLi5cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJpdmFsVXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVDaGFubmVsfT5Kb2luL1N0YXJ0IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSm9pbkdhbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDaGF0Q29udGV4dCIsImdhbWVEcml2ZXIiLCJKb2luR2FtZSIsInJpdmFsVXNlcm5hbWUiLCJzZXRSaXZhbFVzZXJuYW1lIiwiY2xpZW50IiwiY2hhbm5lbCIsInNldENoYW5uZWwiLCJjcmVhdGVDaGFubmVsIiwicmVzcG9uc2UiLCJxdWVyeVVzZXJzIiwibmFtZSIsIiRlcSIsInVzZXJzIiwibGVuZ3RoIiwiYWxlcnQiLCJuZXdDaGFubmVsIiwibWVtYmVycyIsInVzZXJJRCIsImlkIiwid2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/JoinGame.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/gameDriver.js":
/*!**************************************!*\
  !*** ./src/components/gameDriver.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});