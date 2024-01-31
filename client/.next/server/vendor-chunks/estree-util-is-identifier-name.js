"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/estree-util-is-identifier-name";
exports.ids = ["vendor-chunks/estree-util-is-identifier-name"];
exports.modules = {

/***/ "(ssr)/./node_modules/estree-util-is-identifier-name/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/estree-util-is-identifier-name/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cont: () => (/* binding */ cont),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [jsx=false]\n *   Support JSX identifiers (default: `false`).\n */ const startRe = /[$_\\p{ID_Start}]/u;\nconst contRe = /[$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u;\nconst contReJsx = /[-$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u;\nconst nameRe = /^[$_\\p{ID_Start}][$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u;\nconst nameReJsx = /^[$_\\p{ID_Start}][-$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u;\n/** @type {Options} */ const emptyOptions = {};\n/**\n * Checks if the given code point can start an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @returns {boolean}\n *   Whether `code` can start an identifier.\n */ // Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction start(code) {\n    return code ? startRe.test(String.fromCodePoint(code)) : false;\n}\n/**\n * Checks if the given code point can continue an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `code` can continue an identifier.\n */ // Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction cont(code, options) {\n    const settings = options || emptyOptions;\n    const re = settings.jsx ? contReJsx : contRe;\n    return code ? re.test(String.fromCodePoint(code)) : false;\n}\n/**\n * Checks if the given value is a valid identifier name.\n *\n * @param {string} name\n *   Identifier to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `name` can be an identifier.\n */ function name(name, options) {\n    const settings = options || emptyOptions;\n    const re = settings.jsx ? nameReJsx : nameRe;\n    return re.test(name);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXN0cmVlLXV0aWwtaXMtaWRlbnRpZmllci1uYW1lL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVELE1BQU1BLFVBQVU7QUFDaEIsTUFBTUMsU0FBUztBQUNmLE1BQU1DLFlBQVk7QUFDbEIsTUFBTUMsU0FBUztBQUNmLE1BQU1DLFlBQVk7QUFFbEIsb0JBQW9CLEdBQ3BCLE1BQU1DLGVBQWUsQ0FBQztBQUV0Qjs7Ozs7OztDQU9DLEdBQ0QsbUZBQW1GO0FBQzVFLFNBQVNDLE1BQU1DLElBQUk7SUFDeEIsT0FBT0EsT0FBT1AsUUFBUVEsSUFBSSxDQUFDQyxPQUFPQyxhQUFhLENBQUNILFNBQVM7QUFDM0Q7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDRCxtRkFBbUY7QUFDNUUsU0FBU0ksS0FBS0osSUFBSSxFQUFFSyxPQUFPO0lBQ2hDLE1BQU1DLFdBQVdELFdBQVdQO0lBQzVCLE1BQU1TLEtBQUtELFNBQVNFLEdBQUcsR0FBR2IsWUFBWUQ7SUFDdEMsT0FBT00sT0FBT08sR0FBR04sSUFBSSxDQUFDQyxPQUFPQyxhQUFhLENBQUNILFNBQVM7QUFDdEQ7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDTSxTQUFTUyxLQUFLQSxJQUFJLEVBQUVKLE9BQU87SUFDaEMsTUFBTUMsV0FBV0QsV0FBV1A7SUFDNUIsTUFBTVMsS0FBS0QsU0FBU0UsR0FBRyxHQUFHWCxZQUFZRDtJQUN0QyxPQUFPVyxHQUFHTixJQUFJLENBQUNRO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljdGFjdG9lLy4vbm9kZV9tb2R1bGVzL2VzdHJlZS11dGlsLWlzLWlkZW50aWZpZXItbmFtZS9saWIvaW5kZXguanM/NDFiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtqc3g9ZmFsc2VdXG4gKiAgIFN1cHBvcnQgSlNYIGlkZW50aWZpZXJzIChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5jb25zdCBzdGFydFJlID0gL1skX1xccHtJRF9TdGFydH1dL3VcbmNvbnN0IGNvbnRSZSA9IC9bJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XS91XG5jb25zdCBjb250UmVKc3ggPSAvWy0kX1xcdXsyMDBDfVxcdXsyMDBEfVxccHtJRF9Db250aW51ZX1dL3VcbmNvbnN0IG5hbWVSZSA9IC9eWyRfXFxwe0lEX1N0YXJ0fV1bJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XSokL3VcbmNvbnN0IG5hbWVSZUpzeCA9IC9eWyRfXFxwe0lEX1N0YXJ0fV1bLSRfXFx1ezIwMEN9XFx1ezIwMER9XFxwe0lEX0NvbnRpbnVlfV0qJC91XG5cbi8qKiBAdHlwZSB7T3B0aW9uc30gKi9cbmNvbnN0IGVtcHR5T3B0aW9ucyA9IHt9XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjb2RlIHBvaW50IGNhbiBzdGFydCBhbiBpZGVudGlmaWVyLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBjb2RlXG4gKiAgIENvZGUgcG9pbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgY29kZWAgY2FuIHN0YXJ0IGFuIGlkZW50aWZpZXIuXG4gKi9cbi8vIE5vdGU6IGB1bmRlZmluZWRgIGlzIHN1cHBvcnRlZCBzbyB5b3UgY2FuIHBhc3MgdGhlIHJlc3VsdCBmcm9tIGAnJy5jb2RlUG9pbnRBdGAuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA/IHN0YXJ0UmUudGVzdChTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlKSkgOiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gY29kZSBwb2ludCBjYW4gY29udGludWUgYW4gaWRlbnRpZmllci5cbiAqXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gY29kZVxuICogICBDb2RlIHBvaW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBjb2RlYCBjYW4gY29udGludWUgYW4gaWRlbnRpZmllci5cbiAqL1xuLy8gTm90ZTogYHVuZGVmaW5lZGAgaXMgc3VwcG9ydGVkIHNvIHlvdSBjYW4gcGFzcyB0aGUgcmVzdWx0IGZyb20gYCcnLmNvZGVQb2ludEF0YC5cbmV4cG9ydCBmdW5jdGlvbiBjb250KGNvZGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IGVtcHR5T3B0aW9uc1xuICBjb25zdCByZSA9IHNldHRpbmdzLmpzeCA/IGNvbnRSZUpzeCA6IGNvbnRSZVxuICByZXR1cm4gY29kZSA/IHJlLnRlc3QoU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSkpIDogZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgdmFsaWQgaWRlbnRpZmllciBuYW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiAgIElkZW50aWZpZXIgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYG5hbWVgIGNhbiBiZSBhbiBpZGVudGlmaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZShuYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgY29uc3QgcmUgPSBzZXR0aW5ncy5qc3ggPyBuYW1lUmVKc3ggOiBuYW1lUmVcbiAgcmV0dXJuIHJlLnRlc3QobmFtZSlcbn1cbiJdLCJuYW1lcyI6WyJzdGFydFJlIiwiY29udFJlIiwiY29udFJlSnN4IiwibmFtZVJlIiwibmFtZVJlSnN4IiwiZW1wdHlPcHRpb25zIiwic3RhcnQiLCJjb2RlIiwidGVzdCIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJjb250Iiwib3B0aW9ucyIsInNldHRpbmdzIiwicmUiLCJqc3giLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/estree-util-is-identifier-name/lib/index.js\n");

/***/ })

};
;