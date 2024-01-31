"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(ssr)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   stringify: () => (/* binding */ stringify)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration for `stringify`.\n * @property {boolean} [padLeft=true]\n *   Whether to pad a space before a token.\n * @property {boolean} [padRight=false]\n *   Whether to pad a space after a token.\n */ /**\n * @typedef {Options} StringifyOptions\n *   Please use `StringifyOptions` instead.\n */ /**\n * Parse comma-separated tokens to an array.\n *\n * @param {string} value\n *   Comma-separated tokens.\n * @returns {Array<string>}\n *   List of tokens.\n */ function parse(value) {\n    /** @type {Array<string>} */ const tokens = [];\n    const input = String(value || \"\");\n    let index = input.indexOf(\",\");\n    let start = 0;\n    /** @type {boolean} */ let end = false;\n    while(!end){\n        if (index === -1) {\n            index = input.length;\n            end = true;\n        }\n        const token = input.slice(start, index).trim();\n        if (token || !end) {\n            tokens.push(token);\n        }\n        start = index + 1;\n        index = input.indexOf(\",\", start);\n    }\n    return tokens;\n}\n/**\n * Serialize an array of strings or numbers to comma-separated tokens.\n *\n * @param {Array<string|number>} values\n *   List of tokens.\n * @param {Options} [options]\n *   Configuration for `stringify` (optional).\n * @returns {string}\n *   Comma-separated tokens.\n */ function stringify(values, options) {\n    const settings = options || {};\n    // Ensure the last empty entry is seen.\n    const input = values[values.length - 1] === \"\" ? [\n        ...values,\n        \"\"\n    ] : values;\n    return input.join((settings.padRight ? \" \" : \"\") + \",\" + (settings.padLeft === false ? \"\" : \" \")).trim();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0NBT0MsR0FFRDs7O0NBR0MsR0FFRDs7Ozs7OztDQU9DLEdBQ00sU0FBU0EsTUFBTUMsS0FBSztJQUN6QiwwQkFBMEIsR0FDMUIsTUFBTUMsU0FBUyxFQUFFO0lBQ2pCLE1BQU1DLFFBQVFDLE9BQU9ILFNBQVM7SUFDOUIsSUFBSUksUUFBUUYsTUFBTUcsT0FBTyxDQUFDO0lBQzFCLElBQUlDLFFBQVE7SUFDWixvQkFBb0IsR0FDcEIsSUFBSUMsTUFBTTtJQUVWLE1BQU8sQ0FBQ0EsSUFBSztRQUNYLElBQUlILFVBQVUsQ0FBQyxHQUFHO1lBQ2hCQSxRQUFRRixNQUFNTSxNQUFNO1lBQ3BCRCxNQUFNO1FBQ1I7UUFFQSxNQUFNRSxRQUFRUCxNQUFNUSxLQUFLLENBQUNKLE9BQU9GLE9BQU9PLElBQUk7UUFFNUMsSUFBSUYsU0FBUyxDQUFDRixLQUFLO1lBQ2pCTixPQUFPVyxJQUFJLENBQUNIO1FBQ2Q7UUFFQUgsUUFBUUYsUUFBUTtRQUNoQkEsUUFBUUYsTUFBTUcsT0FBTyxDQUFDLEtBQUtDO0lBQzdCO0lBRUEsT0FBT0w7QUFDVDtBQUVBOzs7Ozs7Ozs7Q0FTQyxHQUNNLFNBQVNZLFVBQVVDLE1BQU0sRUFBRUMsT0FBTztJQUN2QyxNQUFNQyxXQUFXRCxXQUFXLENBQUM7SUFFN0IsdUNBQXVDO0lBQ3ZDLE1BQU1iLFFBQVFZLE1BQU0sQ0FBQ0EsT0FBT04sTUFBTSxHQUFHLEVBQUUsS0FBSyxLQUFLO1dBQUlNO1FBQVE7S0FBRyxHQUFHQTtJQUVuRSxPQUFPWixNQUNKZSxJQUFJLENBQ0gsQ0FBQ0QsU0FBU0UsUUFBUSxHQUFHLE1BQU0sRUFBQyxJQUMxQixNQUNDRixDQUFBQSxTQUFTRyxPQUFPLEtBQUssUUFBUSxLQUFLLEdBQUUsR0FFeENSLElBQUk7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9jb21tYS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzPzQ5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBzdHJpbmdpZnlgLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbcGFkTGVmdD10cnVlXVxuICogICBXaGV0aGVyIHRvIHBhZCBhIHNwYWNlIGJlZm9yZSBhIHRva2VuLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbcGFkUmlnaHQ9ZmFsc2VdXG4gKiAgIFdoZXRoZXIgdG8gcGFkIGEgc3BhY2UgYWZ0ZXIgYSB0b2tlbi5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPcHRpb25zfSBTdHJpbmdpZnlPcHRpb25zXG4gKiAgIFBsZWFzZSB1c2UgYFN0cmluZ2lmeU9wdGlvbnNgIGluc3RlYWQuXG4gKi9cblxuLyoqXG4gKiBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBDb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuICogQHJldHVybnMge0FycmF5PHN0cmluZz59XG4gKiAgIExpc3Qgb2YgdG9rZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICBjb25zdCB0b2tlbnMgPSBbXVxuICBjb25zdCBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCAnJylcbiAgbGV0IGluZGV4ID0gaW5wdXQuaW5kZXhPZignLCcpXG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgZW5kID0gZmFsc2VcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSBpbnB1dC5zbGljZShzdGFydCwgaW5kZXgpLnRyaW0oKVxuXG4gICAgaWYgKHRva2VuIHx8ICFlbmQpIHtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cblxuICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSBpbnB1dC5pbmRleE9mKCcsJywgc3RhcnQpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgbnVtYmVycyB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nfG51bWJlcj59IHZhbHVlc1xuICogICBMaXN0IG9mIHRva2Vucy5cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBzdHJpbmdpZnlgIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBDb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcywgb3B0aW9ucykge1xuICBjb25zdCBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgY29uc3QgaW5wdXQgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSAnJyA/IFsuLi52YWx1ZXMsICcnXSA6IHZhbHVlc1xuXG4gIHJldHVybiBpbnB1dFxuICAgIC5qb2luKFxuICAgICAgKHNldHRpbmdzLnBhZFJpZ2h0ID8gJyAnIDogJycpICtcbiAgICAgICAgJywnICtcbiAgICAgICAgKHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gJycgOiAnICcpXG4gICAgKVxuICAgIC50cmltKClcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZSIsInZhbHVlIiwidG9rZW5zIiwiaW5wdXQiLCJTdHJpbmciLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInRva2VuIiwic2xpY2UiLCJ0cmltIiwicHVzaCIsInN0cmluZ2lmeSIsInZhbHVlcyIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImpvaW4iLCJwYWRSaWdodCIsInBhZExlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;