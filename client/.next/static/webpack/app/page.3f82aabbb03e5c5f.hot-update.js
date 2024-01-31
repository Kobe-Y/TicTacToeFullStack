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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/context/ChatContext.js\");\n/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stream-chat-react */ \"(app-pages-browser)/./node_modules/stream-chat-react/dist/components/Channel/Channel.js\");\n/* harmony import */ var _GameDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameDriver */ \"(app-pages-browser)/./src/components/GameDriver.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction JoinGame() {\n    _s();\n    const [rivalUsername, setRivalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { client } = (0,stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext)();\n    const [channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [singlePlayer, setSinglePlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const createChannel = async ()=>{\n        const response = await client.queryUsers({\n            name: {\n                $eq: rivalUsername\n            }\n        });\n        if (response.users.length == 0) {\n            alert(\"User not found\");\n        }\n        ; //does this need return?\n        const newChannel = await client.channel(\"messaging\", {\n            members: [\n                client.userID,\n                response.users[0].id\n            ]\n        });\n        await newChannel.watch();\n        setChannel(newChannel);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: channel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(stream_chat_react__WEBPACK_IMPORTED_MODULE_4__.Channel, {\n            channel: channel,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameDriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                channel: channel\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this) : singlePlayer ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameDriver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                singlePlayer: singlePlayer\n            }, void 0, false, {\n                fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"joinGame\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Create Game \"\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Username of rival...\",\n                            onChange: (event)=>{\n                                setRivalUsername(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: createChannel,\n                            children: \"Join/Start Game\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"botButton\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSinglePlayer(true),\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kobe/Desktop/backend/client/src/components/JoinGame.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(JoinGame, \"K1IzubOvG0rShKEJJ1D+zi7oSQU=\", false, function() {\n    return [\n        stream_chat_react__WEBPACK_IMPORTED_MODULE_3__.useChatContext\n    ];\n});\n_c = JoinGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinGame);\nvar _c;\n$RefreshReg$(_c, \"JoinGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNzQjtBQUN0QjtBQUV0QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUNPLE1BQU0sRUFBQyxHQUFHTixpRUFBY0E7SUFDL0IsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1ZLGdCQUFnQjtRQUNsQixNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLFVBQVUsQ0FBQztZQUFDQyxNQUFNO2dCQUFDQyxLQUFNWDtZQUFhO1FBQUM7UUFDckUsSUFBR1EsU0FBU0ksS0FBSyxDQUFDQyxNQUFNLElBQUUsR0FBRTtZQUFDQyxNQUFNO1FBQWlCO1VBQUcsd0JBQXdCO1FBQy9FLE1BQU1DLGFBQWEsTUFBTWIsT0FBT0MsT0FBTyxDQUFDLGFBQWE7WUFDakRhLFNBQVM7Z0JBQUNkLE9BQU9lLE1BQU07Z0JBQUVULFNBQVNJLEtBQUssQ0FBQyxFQUFFLENBQUNNLEVBQUU7YUFBQztRQUNsRDtRQUNBLE1BQU1ILFdBQVdJLEtBQUs7UUFDdEJmLFdBQVdXO0lBQ2Y7SUFDQSxxQkFDSTtrQkFDQ1osd0JBQ0csOERBQUNOLHNEQUFPQTtZQUFDTSxTQUFXQTtzQkFDaEIsNEVBQUNMLG1EQUFVQTtnQkFBQ0ssU0FBV0E7Ozs7Ozs7Ozs7bUJBSTNCRSw2QkFDQTtzQkFDSSw0RUFBQ1AsbURBQVVBO2dCQUFDTyxjQUFjQTs7Ozs7OzBDQUsxQjs7OEJBQ0EsOERBQUNlO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQU1DLGFBQVk7NEJBQXVCQyxVQUFVLENBQUNDO2dDQUNqRHpCLGlCQUFpQnlCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDbkM7Ozs7OztzQ0FFSiw4REFBQ0M7NEJBQU9DLFNBQVN2QjtzQ0FBZTs7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ2E7b0JBQUlDLFdBQVU7OEJBQ1AsNEVBQUNRO3dCQUFPQyxTQUFVLElBQUt4QixnQkFBZ0I7a0NBQU87Ozs7Ozs7Ozs7Ozs7O0FBU3RFO0dBaERTUDs7UUFFWUgsNkRBQWNBOzs7S0FGMUJHO0FBaURULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0pvaW5HYW1lLmpzP2UyMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2hhdENvbnRleHQsIENoYW5uZWwgfSBmcm9tIFwic3RyZWFtLWNoYXQtcmVhY3RcIjtcbmltcG9ydCBHYW1lRHJpdmVyIGZyb20gXCIuL0dhbWVEcml2ZXJcIjtcblxuZnVuY3Rpb24gSm9pbkdhbWUoKSB7XG4gICAgY29uc3QgW3JpdmFsVXNlcm5hbWUsIHNldFJpdmFsVXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3Qge2NsaWVudH0gPSB1c2VDaGF0Q29udGV4dCgpO1xuICAgIGNvbnN0IFtjaGFubmVsLCBzZXRDaGFubmVsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzaW5nbGVQbGF5ZXIsIHNldFNpbmdsZVBsYXllcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnlVc2Vycyh7bmFtZTogeyRlcSA6IHJpdmFsVXNlcm5hbWV9fSk7XG4gICAgICAgIGlmKHJlc3BvbnNlLnVzZXJzLmxlbmd0aD09MCl7YWxlcnQoXCJVc2VyIG5vdCBmb3VuZFwiKX07IC8vZG9lcyB0aGlzIG5lZWQgcmV0dXJuP1xuICAgICAgICBjb25zdCBuZXdDaGFubmVsID0gYXdhaXQgY2xpZW50LmNoYW5uZWwoXCJtZXNzYWdpbmdcIiwge1xuICAgICAgICAgICAgbWVtYmVyczogW2NsaWVudC51c2VySUQsIHJlc3BvbnNlLnVzZXJzWzBdLmlkXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IG5ld0NoYW5uZWwud2F0Y2goKTtcbiAgICAgICAgc2V0Q2hhbm5lbChuZXdDaGFubmVsKTtcbiAgICB9O1xuICAgIHJldHVybiggXG4gICAgICAgIDw+XG4gICAgICAgIHtjaGFubmVsID8gKCAvL0lGIENIQU5ORUwgSVMgVFJVRVxuICAgICAgICAgICAgPENoYW5uZWwgY2hhbm5lbCA9IHtjaGFubmVsfT5cbiAgICAgICAgICAgICAgICA8R2FtZURyaXZlciBjaGFubmVsID0ge2NoYW5uZWx9Lz5cbiAgICAgICAgICAgIDwvQ2hhbm5lbD5cbiAgICAgICAgKVxuICAgICAgICA6ICggLy9lbHNlIGlmXG4gICAgICAgICAgICBzaW5nbGVQbGF5ZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxHYW1lRHJpdmVyIHNpbmdsZVBsYXllcj17c2luZ2xlUGxheWVyfS8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgIFxuICAgICAgICAgOiAoIC8vZWxzZVxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2luR2FtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+Q3JlYXRlIEdhbWUgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb2Ygcml2YWwuLi5cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSaXZhbFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlQ2hhbm5lbH0+Sm9pbi9TdGFydCBHYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RCdXR0b25cIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKT0+IHNldFNpbmdsZVBsYXllcih0cnVlKX0+UGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgXG4gICAgICAgIH1cblxuICAgICAgICA8Lz5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSm9pbkdhbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDaGF0Q29udGV4dCIsIkNoYW5uZWwiLCJHYW1lRHJpdmVyIiwiSm9pbkdhbWUiLCJyaXZhbFVzZXJuYW1lIiwic2V0Uml2YWxVc2VybmFtZSIsImNsaWVudCIsImNoYW5uZWwiLCJzZXRDaGFubmVsIiwic2luZ2xlUGxheWVyIiwic2V0U2luZ2xlUGxheWVyIiwiY3JlYXRlQ2hhbm5lbCIsInJlc3BvbnNlIiwicXVlcnlVc2VycyIsIm5hbWUiLCIkZXEiLCJ1c2VycyIsImxlbmd0aCIsImFsZXJ0IiwibmV3Q2hhbm5lbCIsIm1lbWJlcnMiLCJ1c2VySUQiLCJpZCIsIndhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/JoinGame.js\n"));

/***/ })

});