"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-subtokenize";
exports.ids = ["vendor-chunks/micromark-util-subtokenize"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-subtokenize/dev/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-util-subtokenize/dev/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtokenize: () => (/* binding */ subtokenize)\n/* harmony export */ });\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/**\n * @typedef {import('micromark-util-types').Chunk} Chunk\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Token} Token\n */ \n\n\n/**\n * Tokenize subcontent.\n *\n * @param {Array<Event>} events\n *   List of events.\n * @returns {boolean}\n *   Whether subtokens were found.\n */ // eslint-disable-next-line complexity\nfunction subtokenize(events) {\n    /** @type {Record<string, number>} */ const jumps = {};\n    let index = -1;\n    /** @type {Event} */ let event;\n    /** @type {number | undefined} */ let lineIndex;\n    /** @type {number} */ let otherIndex;\n    /** @type {Event} */ let otherEvent;\n    /** @type {Array<Event>} */ let parameters;\n    /** @type {Array<Event>} */ let subevents;\n    /** @type {boolean | undefined} */ let more;\n    while(++index < events.length){\n        while(index in jumps){\n            index = jumps[index];\n        }\n        event = events[index];\n        // Add a hook for the GFM tasklist extension, which needs to know if text\n        // is in the first content of a list item.\n        if (index && event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.chunkFlow && events[index - 1][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefix) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(event[1]._tokenizer, \"expected `_tokenizer` on subtokens\");\n            subevents = event[1]._tokenizer.events;\n            otherIndex = 0;\n            if (otherIndex < subevents.length && subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank) {\n                otherIndex += 2;\n            }\n            if (otherIndex < subevents.length && subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content) {\n                while(++otherIndex < subevents.length){\n                    if (subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content) {\n                        break;\n                    }\n                    if (subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.chunkText) {\n                        subevents[otherIndex][1]._isInFirstContentOfListItem = true;\n                        otherIndex++;\n                    }\n                }\n            }\n        }\n        // Enter.\n        if (event[0] === \"enter\") {\n            if (event[1].contentType) {\n                Object.assign(jumps, subcontent(events, index));\n                index = jumps[index];\n                more = true;\n            }\n        } else if (event[1]._container) {\n            otherIndex = index;\n            lineIndex = undefined;\n            while(otherIndex--){\n                otherEvent = events[otherIndex];\n                if (otherEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding || otherEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank) {\n                    if (otherEvent[0] === \"enter\") {\n                        if (lineIndex) {\n                            events[lineIndex][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank;\n                        }\n                        otherEvent[1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding;\n                        lineIndex = otherIndex;\n                    }\n                } else {\n                    break;\n                }\n            }\n            if (lineIndex) {\n                // Fix position.\n                event[1].end = Object.assign({}, events[lineIndex][1].start);\n                // Switch container exit w/ line endings.\n                parameters = events.slice(lineIndex, index);\n                parameters.unshift(event);\n                (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, lineIndex, index - lineIndex + 1, parameters);\n            }\n        }\n    }\n    return !more;\n}\n/**\n * Tokenize embedded tokens.\n *\n * @param {Array<Event>} events\n * @param {number} eventIndex\n * @returns {Record<string, number>}\n */ function subcontent(events, eventIndex) {\n    const token = events[eventIndex][1];\n    const context = events[eventIndex][2];\n    let startPosition = eventIndex - 1;\n    /** @type {Array<number>} */ const startPositions = [];\n    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(token.contentType, \"expected `contentType` on subtokens\");\n    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);\n    const childEvents = tokenizer.events;\n    /** @type {Array<[number, number]>} */ const jumps = [];\n    /** @type {Record<string, number>} */ const gaps = {};\n    /** @type {Array<Chunk>} */ let stream;\n    /** @type {Token | undefined} */ let previous;\n    let index = -1;\n    /** @type {Token | undefined} */ let current = token;\n    let adjust = 0;\n    let start = 0;\n    const breaks = [\n        start\n    ];\n    // Loop forward through the linked tokens to pass them in order to the\n    // subtokenizer.\n    while(current){\n        // Find the position of the event for this token.\n        while(events[++startPosition][1] !== current){\n        // Empty.\n        }\n        (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(!previous || current.previous === previous, \"expected previous to match\");\n        (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(!previous || previous.next === current, \"expected next to match\");\n        startPositions.push(startPosition);\n        if (!current._tokenizer) {\n            stream = context.sliceStream(current);\n            if (!current.next) {\n                stream.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof);\n            }\n            if (previous) {\n                tokenizer.defineSkip(current.start);\n            }\n            if (current._isInFirstContentOfListItem) {\n                tokenizer._gfmTasklistFirstContentOfListItem = true;\n            }\n            tokenizer.write(stream);\n            if (current._isInFirstContentOfListItem) {\n                tokenizer._gfmTasklistFirstContentOfListItem = undefined;\n            }\n        }\n        // Unravel the next token.\n        previous = current;\n        current = current.next;\n    }\n    // Now, loop back through all events (and linked tokens), to figure out which\n    // parts belong where.\n    current = token;\n    while(++index < childEvents.length){\n        if (// Find a void token that includes a break.\n        childEvents[index][0] === \"exit\" && childEvents[index - 1][0] === \"enter\" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(current, \"expected a current token\");\n            start = index + 1;\n            breaks.push(start);\n            // Help GC.\n            current._tokenizer = undefined;\n            current.previous = undefined;\n            current = current.next;\n        }\n    }\n    // Help GC.\n    tokenizer.events = [];\n    // If there’s one more token (which is the cases for lines that end in an\n    // EOF), that’s perfect: the last point we found starts it.\n    // If there isn’t then make sure any remaining content is added to it.\n    if (current) {\n        // Help GC.\n        current._tokenizer = undefined;\n        current.previous = undefined;\n        (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(!current.next, \"expected no next token\");\n    } else {\n        breaks.pop();\n    }\n    // Now splice the events from the subtokenizer into the current events,\n    // moving back to front so that splice indices aren’t affected.\n    index = breaks.length;\n    while(index--){\n        const slice = childEvents.slice(breaks[index], breaks[index + 1]);\n        const start = startPositions.pop();\n        (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(start !== undefined, \"expected a start position when splicing\");\n        jumps.unshift([\n            start,\n            start + slice.length - 1\n        ]);\n        (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, start, 2, slice);\n    }\n    index = -1;\n    while(++index < jumps.length){\n        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];\n        adjust += jumps[index][1] - jumps[index][0] - 1;\n    }\n    return gaps;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc3VidG9rZW5pemUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Q0FJQyxHQUU0QztBQUNLO0FBQ2Y7QUFFbkM7Ozs7Ozs7Q0FPQyxHQUNELHNDQUFzQztBQUMvQixTQUFTSyxZQUFZQyxNQUFNO0lBQ2hDLG1DQUFtQyxHQUNuQyxNQUFNQyxRQUFRLENBQUM7SUFDZixJQUFJQyxRQUFRLENBQUM7SUFDYixrQkFBa0IsR0FDbEIsSUFBSUM7SUFDSiwrQkFBK0IsR0FDL0IsSUFBSUM7SUFDSixtQkFBbUIsR0FDbkIsSUFBSUM7SUFDSixrQkFBa0IsR0FDbEIsSUFBSUM7SUFDSix5QkFBeUIsR0FDekIsSUFBSUM7SUFDSix5QkFBeUIsR0FDekIsSUFBSUM7SUFDSixnQ0FBZ0MsR0FDaEMsSUFBSUM7SUFFSixNQUFPLEVBQUVQLFFBQVFGLE9BQU9VLE1BQU0sQ0FBRTtRQUM5QixNQUFPUixTQUFTRCxNQUFPO1lBQ3JCQyxRQUFRRCxLQUFLLENBQUNDLE1BQU07UUFDdEI7UUFFQUMsUUFBUUgsTUFBTSxDQUFDRSxNQUFNO1FBRXJCLHlFQUF5RTtRQUN6RSwwQ0FBMEM7UUFDMUMsSUFDRUEsU0FDQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQ1EsSUFBSSxLQUFLZix3REFBS0EsQ0FBQ2dCLFNBQVMsSUFDakNaLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDUyxJQUFJLEtBQUtmLHdEQUFLQSxDQUFDaUIsY0FBYyxFQUNsRDtZQUNBZiwwQ0FBTUEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUUsQ0FBQ1csVUFBVSxFQUFFO1lBQzVCTixZQUFZTCxLQUFLLENBQUMsRUFBRSxDQUFDVyxVQUFVLENBQUNkLE1BQU07WUFDdENLLGFBQWE7WUFFYixJQUNFQSxhQUFhRyxVQUFVRSxNQUFNLElBQzdCRixTQUFTLENBQUNILFdBQVcsQ0FBQyxFQUFFLENBQUNNLElBQUksS0FBS2Ysd0RB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QU0sRUFBRXlDLE1BQU0sQ0FBQ3pDLFFBQVEsRUFBRTtRQUNoRSxNQUFNeUIsUUFBUU8sZUFBZWtCLEdBQUc7UUFDaEN0RCwwQ0FBTUEsQ0FBQzZCLFVBQVVILFdBQVc7UUFDNUJ2QixNQUFNNEIsT0FBTyxDQUFDO1lBQUNGO1lBQU9BLFFBQVFDLE1BQU1sQixNQUFNLEdBQUc7U0FBRTtRQUMvQ2hCLDhEQUFNQSxDQUFDTSxRQUFRMkIsT0FBTyxHQUFHQztJQUMzQjtJQUVBMUIsUUFBUSxDQUFDO0lBRVQsTUFBTyxFQUFFQSxRQUFRRCxNQUFNUyxNQUFNLENBQUU7UUFDN0I0QixJQUFJLENBQUNJLFNBQVN6QyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBR3dDLFNBQVN6QyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUFFO1FBQ3pEd0MsVUFBVXpDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsR0FBR0QsS0FBSyxDQUFDQyxNQUFNLENBQUMsRUFBRSxHQUFHO0lBQ2hEO0lBRUEsT0FBT29DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc3VidG9rZW5pemUvZGV2L2luZGV4LmpzP2UxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNodW5rfSBDaHVua1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FdmVudH0gRXZlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKi9cblxuaW1wb3J0IHtzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5pbXBvcnQge2NvZGVzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcblxuLyoqXG4gKiBUb2tlbml6ZSBzdWJjb250ZW50LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8RXZlbnQ+fSBldmVudHNcbiAqICAgTGlzdCBvZiBldmVudHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBzdWJ0b2tlbnMgd2VyZSBmb3VuZC5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0b2tlbml6ZShldmVudHMpIHtcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSAqL1xuICBjb25zdCBqdW1wcyA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7RXZlbnR9ICovXG4gIGxldCBldmVudFxuICAvKiogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGxpbmVJbmRleFxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgbGV0IG90aGVySW5kZXhcbiAgLyoqIEB0eXBlIHtFdmVudH0gKi9cbiAgbGV0IG90aGVyRXZlbnRcbiAgLyoqIEB0eXBlIHtBcnJheTxFdmVudD59ICovXG4gIGxldCBwYXJhbWV0ZXJzXG4gIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICBsZXQgc3ViZXZlbnRzXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IG1vcmVcblxuICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICB3aGlsZSAoaW5kZXggaW4ganVtcHMpIHtcbiAgICAgIGluZGV4ID0ganVtcHNbaW5kZXhdXG4gICAgfVxuXG4gICAgZXZlbnQgPSBldmVudHNbaW5kZXhdXG5cbiAgICAvLyBBZGQgYSBob29rIGZvciB0aGUgR0ZNIHRhc2tsaXN0IGV4dGVuc2lvbiwgd2hpY2ggbmVlZHMgdG8ga25vdyBpZiB0ZXh0XG4gICAgLy8gaXMgaW4gdGhlIGZpcnN0IGNvbnRlbnQgb2YgYSBsaXN0IGl0ZW0uXG4gICAgaWYgKFxuICAgICAgaW5kZXggJiZcbiAgICAgIGV2ZW50WzFdLnR5cGUgPT09IHR5cGVzLmNodW5rRmxvdyAmJlxuICAgICAgZXZlbnRzW2luZGV4IC0gMV1bMV0udHlwZSA9PT0gdHlwZXMubGlzdEl0ZW1QcmVmaXhcbiAgICApIHtcbiAgICAgIGFzc2VydChldmVudFsxXS5fdG9rZW5pemVyLCAnZXhwZWN0ZWQgYF90b2tlbml6ZXJgIG9uIHN1YnRva2VucycpXG4gICAgICBzdWJldmVudHMgPSBldmVudFsxXS5fdG9rZW5pemVyLmV2ZW50c1xuICAgICAgb3RoZXJJbmRleCA9IDBcblxuICAgICAgaWYgKFxuICAgICAgICBvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCAmJlxuICAgICAgICBzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gdHlwZXMubGluZUVuZGluZ0JsYW5rXG4gICAgICApIHtcbiAgICAgICAgb3RoZXJJbmRleCArPSAyXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3RoZXJJbmRleCA8IHN1YmV2ZW50cy5sZW5ndGggJiZcbiAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09IHR5cGVzLmNvbnRlbnRcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoKytvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gdHlwZXMuY29udGVudCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLnR5cGUgPT09IHR5cGVzLmNodW5rVGV4dCkge1xuICAgICAgICAgICAgc3ViZXZlbnRzW290aGVySW5kZXhdWzFdLl9pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgICAgICAgIG90aGVySW5kZXgrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVudGVyLlxuICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKGV2ZW50WzFdLmNvbnRlbnRUeXBlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oanVtcHMsIHN1YmNvbnRlbnQoZXZlbnRzLCBpbmRleCkpXG4gICAgICAgIGluZGV4ID0ganVtcHNbaW5kZXhdXG4gICAgICAgIG1vcmUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIC8vIEV4aXQuXG4gICAgZWxzZSBpZiAoZXZlbnRbMV0uX2NvbnRhaW5lcikge1xuICAgICAgb3RoZXJJbmRleCA9IGluZGV4XG4gICAgICBsaW5lSW5kZXggPSB1bmRlZmluZWRcblxuICAgICAgd2hpbGUgKG90aGVySW5kZXgtLSkge1xuICAgICAgICBvdGhlckV2ZW50ID0gZXZlbnRzW290aGVySW5kZXhdXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGluZUVuZGluZyB8fFxuICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9PT0gdHlwZXMubGluZUVuZGluZ0JsYW5rXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChvdGhlckV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgICAgICAgIGV2ZW50c1tsaW5lSW5kZXhdWzFdLnR5cGUgPSB0eXBlcy5saW5lRW5kaW5nQmxhbmtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID0gdHlwZXMubGluZUVuZGluZ1xuICAgICAgICAgICAgbGluZUluZGV4ID0gb3RoZXJJbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5lSW5kZXgpIHtcbiAgICAgICAgLy8gRml4IHBvc2l0aW9uLlxuICAgICAgICBldmVudFsxXS5lbmQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbbGluZUluZGV4XVsxXS5zdGFydClcblxuICAgICAgICAvLyBTd2l0Y2ggY29udGFpbmVyIGV4aXQgdy8gbGluZSBlbmRpbmdzLlxuICAgICAgICBwYXJhbWV0ZXJzID0gZXZlbnRzLnNsaWNlKGxpbmVJbmRleCwgaW5kZXgpXG4gICAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChldmVudClcbiAgICAgICAgc3BsaWNlKGV2ZW50cywgbGluZUluZGV4LCBpbmRleCAtIGxpbmVJbmRleCArIDEsIHBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICFtb3JlXG59XG5cbi8qKlxuICogVG9rZW5pemUgZW1iZWRkZWQgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8RXZlbnQ+fSBldmVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBldmVudEluZGV4XG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn1cbiAqL1xuZnVuY3Rpb24gc3ViY29udGVudChldmVudHMsIGV2ZW50SW5kZXgpIHtcbiAgY29uc3QgdG9rZW4gPSBldmVudHNbZXZlbnRJbmRleF1bMV1cbiAgY29uc3QgY29udGV4dCA9IGV2ZW50c1tldmVudEluZGV4XVsyXVxuICBsZXQgc3RhcnRQb3NpdGlvbiA9IGV2ZW50SW5kZXggLSAxXG4gIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSBbXVxuICBhc3NlcnQodG9rZW4uY29udGVudFR5cGUsICdleHBlY3RlZCBgY29udGVudFR5cGVgIG9uIHN1YnRva2VucycpXG4gIGNvbnN0IHRva2VuaXplciA9XG4gICAgdG9rZW4uX3Rva2VuaXplciB8fCBjb250ZXh0LnBhcnNlclt0b2tlbi5jb250ZW50VHlwZV0odG9rZW4uc3RhcnQpXG4gIGNvbnN0IGNoaWxkRXZlbnRzID0gdG9rZW5pemVyLmV2ZW50c1xuICAvKiogQHR5cGUge0FycmF5PFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICBjb25zdCBqdW1wcyA9IFtdXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gKi9cbiAgY29uc3QgZ2FwcyA9IHt9XG4gIC8qKiBAdHlwZSB7QXJyYXk8Q2h1bms+fSAqL1xuICBsZXQgc3RyZWFtXG4gIC8qKiBAdHlwZSB7VG9rZW4gfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge1Rva2VuIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgY3VycmVudCA9IHRva2VuXG4gIGxldCBhZGp1c3QgPSAwXG4gIGxldCBzdGFydCA9IDBcbiAgY29uc3QgYnJlYWtzID0gW3N0YXJ0XVxuXG4gIC8vIExvb3AgZm9yd2FyZCB0aHJvdWdoIHRoZSBsaW5rZWQgdG9rZW5zIHRvIHBhc3MgdGhlbSBpbiBvcmRlciB0byB0aGVcbiAgLy8gc3VidG9rZW5pemVyLlxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIC8vIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBldmVudCBmb3IgdGhpcyB0b2tlbi5cbiAgICB3aGlsZSAoZXZlbnRzWysrc3RhcnRQb3NpdGlvbl1bMV0gIT09IGN1cnJlbnQpIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH1cblxuICAgIGFzc2VydChcbiAgICAgICFwcmV2aW91cyB8fCBjdXJyZW50LnByZXZpb3VzID09PSBwcmV2aW91cyxcbiAgICAgICdleHBlY3RlZCBwcmV2aW91cyB0byBtYXRjaCdcbiAgICApXG4gICAgYXNzZXJ0KCFwcmV2aW91cyB8fCBwcmV2aW91cy5uZXh0ID09PSBjdXJyZW50LCAnZXhwZWN0ZWQgbmV4dCB0byBtYXRjaCcpXG5cbiAgICBzdGFydFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pXG5cbiAgICBpZiAoIWN1cnJlbnQuX3Rva2VuaXplcikge1xuICAgICAgc3RyZWFtID0gY29udGV4dC5zbGljZVN0cmVhbShjdXJyZW50KVxuXG4gICAgICBpZiAoIWN1cnJlbnQubmV4dCkge1xuICAgICAgICBzdHJlYW0ucHVzaChjb2Rlcy5lb2YpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICB0b2tlbml6ZXIuZGVmaW5lU2tpcChjdXJyZW50LnN0YXJ0KVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudC5faXNJbkZpcnN0Q29udGVudE9mTGlzdEl0ZW0pIHtcbiAgICAgICAgdG9rZW5pemVyLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRva2VuaXplci53cml0ZShzdHJlYW0pXG5cbiAgICAgIGlmIChjdXJyZW50Ll9pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSkge1xuICAgICAgICB0b2tlbml6ZXIuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVucmF2ZWwgdGhlIG5leHQgdG9rZW4uXG4gICAgcHJldmlvdXMgPSBjdXJyZW50XG4gICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICB9XG5cbiAgLy8gTm93LCBsb29wIGJhY2sgdGhyb3VnaCBhbGwgZXZlbnRzIChhbmQgbGlua2VkIHRva2VucyksIHRvIGZpZ3VyZSBvdXQgd2hpY2hcbiAgLy8gcGFydHMgYmVsb25nIHdoZXJlLlxuICBjdXJyZW50ID0gdG9rZW5cblxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkRXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIC8vIEZpbmQgYSB2b2lkIHRva2VuIHRoYXQgaW5jbHVkZXMgYSBicmVhay5cbiAgICAgIGNoaWxkRXZlbnRzW2luZGV4XVswXSA9PT0gJ2V4aXQnICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleCAtIDFdWzBdID09PSAnZW50ZXInICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gY2hpbGRFdmVudHNbaW5kZXggLSAxXVsxXS50eXBlICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0uc3RhcnQubGluZSAhPT0gY2hpbGRFdmVudHNbaW5kZXhdWzFdLmVuZC5saW5lXG4gICAgKSB7XG4gICAgICBhc3NlcnQoY3VycmVudCwgJ2V4cGVjdGVkIGEgY3VycmVudCB0b2tlbicpXG4gICAgICBzdGFydCA9IGluZGV4ICsgMVxuICAgICAgYnJlYWtzLnB1c2goc3RhcnQpXG4gICAgICAvLyBIZWxwIEdDLlxuICAgICAgY3VycmVudC5fdG9rZW5pemVyID0gdW5kZWZpbmVkXG4gICAgICBjdXJyZW50LnByZXZpb3VzID0gdW5kZWZpbmVkXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscCBHQy5cbiAgdG9rZW5pemVyLmV2ZW50cyA9IFtdXG5cbiAgLy8gSWYgdGhlcmXigJlzIG9uZSBtb3JlIHRva2VuICh3aGljaCBpcyB0aGUgY2FzZXMgZm9yIGxpbmVzIHRoYXQgZW5kIGluIGFuXG4gIC8vIEVPRiksIHRoYXTigJlzIHBlcmZlY3Q6IHRoZSBsYXN0IHBvaW50IHdlIGZvdW5kIHN0YXJ0cyBpdC5cbiAgLy8gSWYgdGhlcmUgaXNu4oCZdCB0aGVuIG1ha2Ugc3VyZSBhbnkgcmVtYWluaW5nIGNvbnRlbnQgaXMgYWRkZWQgdG8gaXQuXG4gIGlmIChjdXJyZW50KSB7XG4gICAgLy8gSGVscCBHQy5cbiAgICBjdXJyZW50Ll90b2tlbml6ZXIgPSB1bmRlZmluZWRcbiAgICBjdXJyZW50LnByZXZpb3VzID0gdW5kZWZpbmVkXG4gICAgYXNzZXJ0KCFjdXJyZW50Lm5leHQsICdleHBlY3RlZCBubyBuZXh0IHRva2VuJylcbiAgfSBlbHNlIHtcbiAgICBicmVha3MucG9wKClcbiAgfVxuXG4gIC8vIE5vdyBzcGxpY2UgdGhlIGV2ZW50cyBmcm9tIHRoZSBzdWJ0b2tlbml6ZXIgaW50byB0aGUgY3VycmVudCBldmVudHMsXG4gIC8vIG1vdmluZyBiYWNrIHRvIGZyb250IHNvIHRoYXQgc3BsaWNlIGluZGljZXMgYXJlbuKAmXQgYWZmZWN0ZWQuXG4gIGluZGV4ID0gYnJlYWtzLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgY29uc3Qgc2xpY2UgPSBjaGlsZEV2ZW50cy5zbGljZShicmVha3NbaW5kZXhdLCBicmVha3NbaW5kZXggKyAxXSlcbiAgICBjb25zdCBzdGFydCA9IHN0YXJ0UG9zaXRpb25zLnBvcCgpXG4gICAgYXNzZXJ0KHN0YXJ0ICE9PSB1bmRlZmluZWQsICdleHBlY3RlZCBhIHN0YXJ0IHBvc2l0aW9uIHdoZW4gc3BsaWNpbmcnKVxuICAgIGp1bXBzLnVuc2hpZnQoW3N0YXJ0LCBzdGFydCArIHNsaWNlLmxlbmd0aCAtIDFdKVxuICAgIHNwbGljZShldmVudHMsIHN0YXJ0LCAyLCBzbGljZSlcbiAgfVxuXG4gIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGp1bXBzLmxlbmd0aCkge1xuICAgIGdhcHNbYWRqdXN0ICsganVtcHNbaW5kZXhdWzBdXSA9IGFkanVzdCArIGp1bXBzW2luZGV4XVsxXVxuICAgIGFkanVzdCArPSBqdW1wc1tpbmRleF1bMV0gLSBqdW1wc1tpbmRleF1bMF0gLSAxXG4gIH1cblxuICByZXR1cm4gZ2Fwc1xufVxuIl0sIm5hbWVzIjpbInNwbGljZSIsImNvZGVzIiwidHlwZXMiLCJvayIsImFzc2VydCIsInN1YnRva2VuaXplIiwiZXZlbnRzIiwianVtcHMiLCJpbmRleCIsImV2ZW50IiwibGluZUluZGV4Iiwib3RoZXJJbmRleCIsIm90aGVyRXZlbnQiLCJwYXJhbWV0ZXJzIiwic3ViZXZlbnRzIiwibW9yZSIsImxlbmd0aCIsInR5cGUiLCJjaHVua0Zsb3ciLCJsaXN0SXRlbVByZWZpeCIsIl90b2tlbml6ZXIiLCJsaW5lRW5kaW5nQmxhbmsiLCJjb250ZW50IiwiY2h1bmtUZXh0IiwiX2lzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtIiwiY29udGVudFR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdWJjb250ZW50IiwiX2NvbnRhaW5lciIsInVuZGVmaW5lZCIsImxpbmVFbmRpbmciLCJlbmQiLCJzdGFydCIsInNsaWNlIiwidW5zaGlmdCIsImV2ZW50SW5kZXgiLCJ0b2tlbiIsImNvbnRleHQiLCJzdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbnMiLCJ0b2tlbml6ZXIiLCJwYXJzZXIiLCJjaGlsZEV2ZW50cyIsImdhcHMiLCJzdHJlYW0iLCJwcmV2aW91cyIsImN1cnJlbnQiLCJhZGp1c3QiLCJicmVha3MiLCJuZXh0IiwicHVzaCIsInNsaWNlU3RyZWFtIiwiZW9mIiwiZGVmaW5lU2tpcCIsIl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW0iLCJ3cml0ZSIsImxpbmUiLCJwb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-subtokenize/dev/index.js\n");

/***/ })

};
;