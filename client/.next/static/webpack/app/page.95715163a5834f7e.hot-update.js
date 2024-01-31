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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/context/ChatContext.js\");\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/components/Channel/Channel.js\");\n/* harmony import */ var _GameDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameDriver */ \"(app-pages-browser)/./src/components/GameDriver.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction JoinGame() {\n    _s();\n    const [rivalUsername, setRivalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { client } = (0,stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext)();\n    const [channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [singlePlayer, setSinglePlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const createChannel = async ()=>{\n        const response = await client.queryUsers({\n            name: {\n                $eq: rivalUsername\n            }\n        });\n        if (response.users.length == 0) {\n            alert(\"User not found\");\n        }\n        ; //does this need return?\n        const newChannel = await client.channel(\"messaging\", {\n            members: [\n                client.userID,\n                response.users[0].id\n            ]\n        });\n        await newChannel.watch();\n        setChannel(newChannel);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: channel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(stream_chat_react__WEBPACK_IMPORTED_MODULE_4__.Channel, {\n            channel: channel,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameDriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                channel: channel\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"joinGame\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Create Game \"\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Username of rival...\",\n                            onChange: (event)=>{\n                                setRivalUsername(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: createChannel,\n                            children: \"Join/Start Game\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"botButton\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: setSinglePlayer(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(JoinGame, \"K1IzubOvG0rShKEJJ1D+zi7oSQU=\", false, function() {\n    return [\n        stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext\n    ];\n});\n_c = JoinGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinGame);\nvar _c;\n$RefreshReg$(_c, \"JoinGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNzQjtBQUN0QjtBQUV0QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUNPLE1BQU0sRUFBQyxHQUFHTixpRUFBY0E7SUFDL0IsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1ZLGdCQUFnQjtRQUNsQixNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLFVBQVUsQ0FBQztZQUFDQyxNQUFNO2dCQUFDQyxLQUFNWDtZQUFhO1FBQUM7UUFDckUsSUFBR1EsU0FBU0ksS0FBSyxDQUFDQyxNQUFNLElBQUUsR0FBRTtZQUFDQyxNQUFNO1FBQWlCO1VBQUcsd0JBQXdCO1FBQy9FLE1BQU1DLGFBQWEsTUFBTWIsT0FBT0MsT0FBTyxDQUFDLGFBQWE7WUFDakRhLFNBQVM7Z0JBQUNkLE9BQU9lLE1BQU07Z0JBQUVULFNBQVNJLEtBQUssQ0FBQyxFQUFFLENBQUNNLEVBQUU7YUFBQztRQUNsRDtRQUNBLE1BQU1ILFdBQVdJLEtBQUs7UUFDdEJmLFdBQVdXO0lBQ2Y7SUFDQSxxQkFDSTtrQkFDQ1osd0JBQ0csOERBQUNOLHNEQUFPQTtZQUFDTSxTQUFXQTtzQkFDaEIsNEVBQUNMLG1EQUFVQTtnQkFBQ0ssU0FBV0E7Ozs7Ozs7Ozs7aUNBSTNCOzs4QkFDQSw4REFBQ2lCO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQU1DLGFBQVk7NEJBQXVCQyxVQUFVLENBQUNDO2dDQUNqRHpCLGlCQUFpQnlCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDbkM7Ozs7OztzQ0FFSiw4REFBQ0M7NEJBQU9DLFNBQVN2QjtzQ0FBZTs7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ2E7b0JBQUlDLFdBQVU7OEJBQ1AsNEVBQUNRO3dCQUFPQyxTQUFTeEIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQU9yRDtHQXZDU1A7O1FBRVlILDZEQUFjQTs7O0tBRjFCRztBQXdDVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Kb2luR2FtZS5qcz9lMjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNoYXRDb250ZXh0LCBDaGFubmVsIH0gZnJvbSBcInN0cmVhbS1jaGF0LXJlYWN0XCI7XG5pbXBvcnQgR2FtZURyaXZlciBmcm9tIFwiLi9HYW1lRHJpdmVyXCI7XG5cbmZ1bmN0aW9uIEpvaW5HYW1lKCkge1xuICAgIGNvbnN0IFtyaXZhbFVzZXJuYW1lLCBzZXRSaXZhbFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHtjbGllbnR9ID0gdXNlQ2hhdENvbnRleHQoKTtcbiAgICBjb25zdCBbY2hhbm5lbCwgc2V0Q2hhbm5lbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2luZ2xlUGxheWVyLCBzZXRTaW5nbGVQbGF5ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNyZWF0ZUNoYW5uZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnF1ZXJ5VXNlcnMoe25hbWU6IHskZXEgOiByaXZhbFVzZXJuYW1lfX0pO1xuICAgICAgICBpZihyZXNwb25zZS51c2Vycy5sZW5ndGg9PTApe2FsZXJ0KFwiVXNlciBub3QgZm91bmRcIil9OyAvL2RvZXMgdGhpcyBuZWVkIHJldHVybj9cbiAgICAgICAgY29uc3QgbmV3Q2hhbm5lbCA9IGF3YWl0IGNsaWVudC5jaGFubmVsKFwibWVzc2FnaW5nXCIsIHtcbiAgICAgICAgICAgIG1lbWJlcnM6IFtjbGllbnQudXNlcklELCByZXNwb25zZS51c2Vyc1swXS5pZF0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBuZXdDaGFubmVsLndhdGNoKCk7XG4gICAgICAgIHNldENoYW5uZWwobmV3Q2hhbm5lbCk7XG4gICAgfTtcbiAgICByZXR1cm4oIFxuICAgICAgICA8PlxuICAgICAgICB7Y2hhbm5lbCA/ICggLy9JRiBDSEFOTkVMIElTIFRSVUVcbiAgICAgICAgICAgIDxDaGFubmVsIGNoYW5uZWwgPSB7Y2hhbm5lbH0+XG4gICAgICAgICAgICAgICAgPEdhbWVEcml2ZXIgY2hhbm5lbCA9IHtjaGFubmVsfS8+XG4gICAgICAgICAgICA8L0NoYW5uZWw+XG4gICAgICAgIClcbiAgICAgICAgOiAoIC8vZWxzZVxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9pbkdhbWVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Q3JlYXRlIEdhbWUgPC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvZiByaXZhbC4uLlwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Uml2YWxVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUNoYW5uZWx9PkpvaW4vU3RhcnQgR2FtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFNpbmdsZVBsYXllcih0cnVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIHt9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBKb2luR2FtZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNoYXRDb250ZXh0IiwiQ2hhbm5lbCIsIkdhbWVEcml2ZXIiLCJKb2luR2FtZSIsInJpdmFsVXNlcm5hbWUiLCJzZXRSaXZhbFVzZXJuYW1lIiwiY2xpZW50IiwiY2hhbm5lbCIsInNldENoYW5uZWwiLCJzaW5nbGVQbGF5ZXIiLCJzZXRTaW5nbGVQbGF5ZXIiLCJjcmVhdGVDaGFubmVsIiwicmVzcG9uc2UiLCJxdWVyeVVzZXJzIiwibmFtZSIsIiRlcSIsInVzZXJzIiwibGVuZ3RoIiwiYWxlcnQiLCJuZXdDaGFubmVsIiwibWVtYmVycyIsInVzZXJJRCIsImlkIiwid2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/JoinGame.js\n"));

/***/ })

});