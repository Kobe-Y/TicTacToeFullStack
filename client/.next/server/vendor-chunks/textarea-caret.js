/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/textarea-caret";
exports.ids = ["vendor-chunks/textarea-caret"];
exports.modules = {

/***/ "(ssr)/./node_modules/textarea-caret/index.js":
/*!**********************************************!*\
  !*** ./node_modules/textarea-caret/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/* jshint browser: true */ (function() {\n    // We'll copy the properties below into the mirror div.\n    // Note that some browsers, such as Firefox, do not concatenate properties\n    // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),\n    // so we have to list every single property explicitly.\n    var properties = [\n        \"direction\",\n        \"boxSizing\",\n        \"width\",\n        \"height\",\n        \"overflowX\",\n        \"overflowY\",\n        \"borderTopWidth\",\n        \"borderRightWidth\",\n        \"borderBottomWidth\",\n        \"borderLeftWidth\",\n        \"borderStyle\",\n        \"paddingTop\",\n        \"paddingRight\",\n        \"paddingBottom\",\n        \"paddingLeft\",\n        // https://developer.mozilla.org/en-US/docs/Web/CSS/font\n        \"fontStyle\",\n        \"fontVariant\",\n        \"fontWeight\",\n        \"fontStretch\",\n        \"fontSize\",\n        \"fontSizeAdjust\",\n        \"lineHeight\",\n        \"fontFamily\",\n        \"textAlign\",\n        \"textTransform\",\n        \"textIndent\",\n        \"textDecoration\",\n        \"letterSpacing\",\n        \"wordSpacing\",\n        \"tabSize\",\n        \"MozTabSize\"\n    ];\n    var isBrowser = \"undefined\" !== \"undefined\";\n    var isFirefox = isBrowser && window.mozInnerScreenX != null;\n    function getCaretCoordinates(element, position, options) {\n        if (!isBrowser) {\n            throw new Error(\"textarea-caret-position#getCaretCoordinates should only be called in a browser\");\n        }\n        var debug = options && options.debug || false;\n        if (debug) {\n            var el = document.querySelector(\"#input-textarea-caret-position-mirror-div\");\n            if (el) el.parentNode.removeChild(el);\n        }\n        // The mirror div will replicate the textarea's style\n        var div = document.createElement(\"div\");\n        div.id = \"input-textarea-caret-position-mirror-div\";\n        document.body.appendChild(div);\n        var style = div.style;\n        var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9\n        var isInput = element.nodeName === \"INPUT\";\n        // Default textarea styles\n        style.whiteSpace = \"pre-wrap\";\n        if (!isInput) style.wordWrap = \"break-word\"; // only for textarea-s\n        // Position off-screen\n        style.position = \"absolute\"; // required to return coordinates properly\n        if (!debug) style.visibility = \"hidden\"; // not 'display: none' because we want rendering\n        // Transfer the element's properties to the div\n        properties.forEach(function(prop) {\n            if (isInput && prop === \"lineHeight\") {\n                // Special case for <input>s because text is rendered centered and line height may be != height\n                style.lineHeight = computed.height;\n            } else {\n                style[prop] = computed[prop];\n            }\n        });\n        if (isFirefox) {\n            // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275\n            if (element.scrollHeight > parseInt(computed.height)) style.overflowY = \"scroll\";\n        } else {\n            style.overflow = \"hidden\"; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'\n        }\n        div.textContent = element.value.substring(0, position);\n        // The second special handling for input type=\"text\" vs textarea:\n        // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037\n        if (isInput) div.textContent = div.textContent.replace(/\\s/g, \"\\xa0\");\n        var span = document.createElement(\"span\");\n        // Wrapping must be replicated *exactly*, including when a long word gets\n        // onto the next line, with whitespace at the end of the line before (#7).\n        // The  *only* reliable way to do that is to copy the *entire* rest of the\n        // textarea's content into the <span> created at the caret position.\n        // For inputs, just '.' would be enough, but no need to bother.\n        span.textContent = element.value.substring(position) || \".\"; // || because a completely empty faux span doesn't render at all\n        div.appendChild(span);\n        var coordinates = {\n            top: span.offsetTop + parseInt(computed[\"borderTopWidth\"]),\n            left: span.offsetLeft + parseInt(computed[\"borderLeftWidth\"]),\n            height: parseInt(computed[\"lineHeight\"])\n        };\n        if (debug) {\n            span.style.backgroundColor = \"#aaa\";\n        } else {\n            document.body.removeChild(div);\n        }\n        return coordinates;\n    }\n    if ( true && typeof module.exports != \"undefined\") {\n        module.exports = getCaretCoordinates;\n    } else if (isBrowser) {\n        window.getCaretCoordinates = getCaretCoordinates;\n    }\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGV4dGFyZWEtY2FyZXQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCLEdBRXZCO0lBRUQsdURBQXVEO0lBQ3ZELDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsdURBQXVEO0lBQ3ZELElBQUlBLGFBQWE7UUFDZjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFFQSx3REFBd0Q7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBRUE7UUFDQTtRQUVBO1FBQ0E7S0FFRDtJQUVELElBQUlDLFlBQWEsZ0JBQWtCO0lBQ25DLElBQUlDLFlBQWFELGFBQWFFLE9BQU9DLGVBQWUsSUFBSTtJQUV4RCxTQUFTQyxvQkFBb0JDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPO1FBQ3JELElBQUksQ0FBQ1AsV0FBVztZQUNkLE1BQU0sSUFBSVEsTUFBTTtRQUNsQjtRQUVBLElBQUlDLFFBQVFGLFdBQVdBLFFBQVFFLEtBQUssSUFBSTtRQUN4QyxJQUFJQSxPQUFPO1lBQ1QsSUFBSUMsS0FBS0MsU0FBU0MsYUFBYSxDQUFDO1lBQ2hDLElBQUlGLElBQUlBLEdBQUdHLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDSjtRQUNwQztRQUVBLHFEQUFxRDtRQUNyRCxJQUFJSyxNQUFNSixTQUFTSyxhQUFhLENBQUM7UUFDakNELElBQUlFLEVBQUUsR0FBRztRQUNUTixTQUFTTyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0o7UUFFMUIsSUFBSUssUUFBUUwsSUFBSUssS0FBSztRQUNyQixJQUFJQyxXQUFXbkIsT0FBT29CLGdCQUFnQixHQUFHcEIsT0FBT29CLGdCQUFnQixDQUFDakIsV0FBV0EsUUFBUWtCLFlBQVksRUFBRywwQkFBMEI7UUFDN0gsSUFBSUMsVUFBVW5CLFFBQVFvQixRQUFRLEtBQUs7UUFFbkMsMEJBQTBCO1FBQzFCTCxNQUFNTSxVQUFVLEdBQUc7UUFDbkIsSUFBSSxDQUFDRixTQUNISixNQUFNTyxRQUFRLEdBQUcsY0FBZSxzQkFBc0I7UUFFeEQsc0JBQXNCO1FBQ3RCUCxNQUFNZCxRQUFRLEdBQUcsWUFBYSwwQ0FBMEM7UUFDeEUsSUFBSSxDQUFDRyxPQUNIVyxNQUFNUSxVQUFVLEdBQUcsVUFBVyxnREFBZ0Q7UUFFaEYsK0NBQStDO1FBQy9DN0IsV0FBVzhCLE9BQU8sQ0FBQyxTQUFVQyxJQUFJO1lBQy9CLElBQUlOLFdBQVdNLFNBQVMsY0FBYztnQkFDcEMsK0ZBQStGO2dCQUMvRlYsTUFBTVcsVUFBVSxHQUFHVixTQUFTVyxNQUFNO1lBQ3BDLE9BQU87Z0JBQ0xaLEtBQUssQ0FBQ1UsS0FBSyxHQUFHVCxRQUFRLENBQUNTLEtBQUs7WUFDOUI7UUFDRjtRQUVBLElBQUk3QixXQUFXO1lBQ2IsOEdBQThHO1lBQzlHLElBQUlJLFFBQVE0QixZQUFZLEdBQUdDLFNBQVNiLFNBQVNXLE1BQU0sR0FDakRaLE1BQU1lLFNBQVMsR0FBRztRQUN0QixPQUFPO1lBQ0xmLE1BQU1nQixRQUFRLEdBQUcsVUFBVyxzRUFBc0U7UUFDcEc7UUFFQXJCLElBQUlzQixXQUFXLEdBQUdoQyxRQUFRaUMsS0FBSyxDQUFDQyxTQUFTLENBQUMsR0FBR2pDO1FBQzdDLGlFQUFpRTtRQUNqRSxvR0FBb0c7UUFDcEcsSUFBSWtCLFNBQ0ZULElBQUlzQixXQUFXLEdBQUd0QixJQUFJc0IsV0FBVyxDQUFDRyxPQUFPLENBQUMsT0FBTztRQUVuRCxJQUFJQyxPQUFPOUIsU0FBU0ssYUFBYSxDQUFDO1FBQ2xDLHlFQUF5RTtRQUN6RSwwRUFBMEU7UUFDMUUsMEVBQTBFO1FBQzFFLG9FQUFvRTtRQUNwRSwrREFBK0Q7UUFDL0R5QixLQUFLSixXQUFXLEdBQUdoQyxRQUFRaUMsS0FBSyxDQUFDQyxTQUFTLENBQUNqQyxhQUFhLEtBQU0sZ0VBQWdFO1FBQzlIUyxJQUFJSSxXQUFXLENBQUNzQjtRQUVoQixJQUFJQyxjQUFjO1lBQ2hCQyxLQUFLRixLQUFLRyxTQUFTLEdBQUdWLFNBQVNiLFFBQVEsQ0FBQyxpQkFBaUI7WUFDekR3QixNQUFNSixLQUFLSyxVQUFVLEdBQUdaLFNBQVNiLFFBQVEsQ0FBQyxrQkFBa0I7WUFDNURXLFFBQVFFLFNBQVNiLFFBQVEsQ0FBQyxhQUFhO1FBQ3pDO1FBRUEsSUFBSVosT0FBTztZQUNUZ0MsS0FBS3JCLEtBQUssQ0FBQzJCLGVBQWUsR0FBRztRQUMvQixPQUFPO1lBQ0xwQyxTQUFTTyxJQUFJLENBQUNKLFdBQVcsQ0FBQ0M7UUFDNUI7UUFFQSxPQUFPMkI7SUFDVDtJQUVBLElBQUksS0FBaUIsSUFBZSxPQUFPTSxPQUFPQyxPQUFPLElBQUksYUFBYTtRQUN4RUQsT0FBT0MsT0FBTyxHQUFHN0M7SUFDbkIsT0FBTyxJQUFHSixXQUFXO1FBQ25CRSxPQUFPRSxtQkFBbUIsR0FBR0E7SUFDL0I7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy90ZXh0YXJlYS1jYXJldC9pbmRleC5qcz81ZTZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGpzaGludCBicm93c2VyOiB0cnVlICovXG5cbihmdW5jdGlvbiAoKSB7XG5cbi8vIFdlJ2xsIGNvcHkgdGhlIHByb3BlcnRpZXMgYmVsb3cgaW50byB0aGUgbWlycm9yIGRpdi5cbi8vIE5vdGUgdGhhdCBzb21lIGJyb3dzZXJzLCBzdWNoIGFzIEZpcmVmb3gsIGRvIG5vdCBjb25jYXRlbmF0ZSBwcm9wZXJ0aWVzXG4vLyBpbnRvIHRoZWlyIHNob3J0aGFuZCAoZS5nLiBwYWRkaW5nLXRvcCwgcGFkZGluZy1ib3R0b20gZXRjLiAtPiBwYWRkaW5nKSxcbi8vIHNvIHdlIGhhdmUgdG8gbGlzdCBldmVyeSBzaW5nbGUgcHJvcGVydHkgZXhwbGljaXRseS5cbnZhciBwcm9wZXJ0aWVzID0gW1xuICAnZGlyZWN0aW9uJywgIC8vIFJUTCBzdXBwb3J0XG4gICdib3hTaXppbmcnLFxuICAnd2lkdGgnLCAgLy8gb24gQ2hyb21lIGFuZCBJRSwgZXhjbHVkZSB0aGUgc2Nyb2xsYmFyLCBzbyB0aGUgbWlycm9yIGRpdiB3cmFwcyBleGFjdGx5IGFzIHRoZSB0ZXh0YXJlYSBkb2VzXG4gICdoZWlnaHQnLFxuICAnb3ZlcmZsb3dYJyxcbiAgJ292ZXJmbG93WScsICAvLyBjb3B5IHRoZSBzY3JvbGxiYXIgZm9yIElFXG5cbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclN0eWxlJyxcblxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdwYWRkaW5nTGVmdCcsXG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnRcbiAgJ2ZvbnRTdHlsZScsXG4gICdmb250VmFyaWFudCcsXG4gICdmb250V2VpZ2h0JyxcbiAgJ2ZvbnRTdHJldGNoJyxcbiAgJ2ZvbnRTaXplJyxcbiAgJ2ZvbnRTaXplQWRqdXN0JyxcbiAgJ2xpbmVIZWlnaHQnLFxuICAnZm9udEZhbWlseScsXG5cbiAgJ3RleHRBbGlnbicsXG4gICd0ZXh0VHJhbnNmb3JtJyxcbiAgJ3RleHRJbmRlbnQnLFxuICAndGV4dERlY29yYXRpb24nLCAgLy8gbWlnaHQgbm90IG1ha2UgYSBkaWZmZXJlbmNlLCBidXQgYmV0dGVyIGJlIHNhZmVcblxuICAnbGV0dGVyU3BhY2luZycsXG4gICd3b3JkU3BhY2luZycsXG5cbiAgJ3RhYlNpemUnLFxuICAnTW96VGFiU2l6ZSdcblxuXTtcblxudmFyIGlzQnJvd3NlciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG52YXIgaXNGaXJlZm94ID0gKGlzQnJvd3NlciAmJiB3aW5kb3cubW96SW5uZXJTY3JlZW5YICE9IG51bGwpO1xuXG5mdW5jdGlvbiBnZXRDYXJldENvb3JkaW5hdGVzKGVsZW1lbnQsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gIGlmICghaXNCcm93c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0ZXh0YXJlYS1jYXJldC1wb3NpdGlvbiNnZXRDYXJldENvb3JkaW5hdGVzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpbiBhIGJyb3dzZXInKTtcbiAgfVxuXG4gIHZhciBkZWJ1ZyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgaWYgKGRlYnVnKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXRleHRhcmVhLWNhcmV0LXBvc2l0aW9uLW1pcnJvci1kaXYnKTtcbiAgICBpZiAoZWwpIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9XG5cbiAgLy8gVGhlIG1pcnJvciBkaXYgd2lsbCByZXBsaWNhdGUgdGhlIHRleHRhcmVhJ3Mgc3R5bGVcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSAnaW5wdXQtdGV4dGFyZWEtY2FyZXQtcG9zaXRpb24tbWlycm9yLWRpdic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICB2YXIgc3R5bGUgPSBkaXYuc3R5bGU7XG4gIHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgOiBlbGVtZW50LmN1cnJlbnRTdHlsZTsgIC8vIGN1cnJlbnRTdHlsZSBmb3IgSUUgPCA5XG4gIHZhciBpc0lucHV0ID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJztcblxuICAvLyBEZWZhdWx0IHRleHRhcmVhIHN0eWxlc1xuICBzdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcbiAgaWYgKCFpc0lucHV0KVxuICAgIHN0eWxlLndvcmRXcmFwID0gJ2JyZWFrLXdvcmQnOyAgLy8gb25seSBmb3IgdGV4dGFyZWEtc1xuXG4gIC8vIFBvc2l0aW9uIG9mZi1zY3JlZW5cbiAgc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnOyAgLy8gcmVxdWlyZWQgdG8gcmV0dXJuIGNvb3JkaW5hdGVzIHByb3Blcmx5XG4gIGlmICghZGVidWcpXG4gICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nOyAgLy8gbm90ICdkaXNwbGF5OiBub25lJyBiZWNhdXNlIHdlIHdhbnQgcmVuZGVyaW5nXG5cbiAgLy8gVHJhbnNmZXIgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIHRvIHRoZSBkaXZcbiAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKGlzSW5wdXQgJiYgcHJvcCA9PT0gJ2xpbmVIZWlnaHQnKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDxpbnB1dD5zIGJlY2F1c2UgdGV4dCBpcyByZW5kZXJlZCBjZW50ZXJlZCBhbmQgbGluZSBoZWlnaHQgbWF5IGJlICE9IGhlaWdodFxuICAgICAgc3R5bGUubGluZUhlaWdodCA9IGNvbXB1dGVkLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVbcHJvcF0gPSBjb21wdXRlZFtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAvLyBGaXJlZm94IGxpZXMgYWJvdXQgdGhlIG92ZXJmbG93IHByb3BlcnR5IGZvciB0ZXh0YXJlYXM6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTk4NDI3NVxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcnNlSW50KGNvbXB1dGVkLmhlaWdodCkpXG4gICAgICBzdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAgLy8gZm9yIENocm9tZSB0byBub3QgcmVuZGVyIGEgc2Nyb2xsYmFyOyBJRSBrZWVwcyBvdmVyZmxvd1kgPSAnc2Nyb2xsJ1xuICB9XG5cbiAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24pO1xuICAvLyBUaGUgc2Vjb25kIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGlucHV0IHR5cGU9XCJ0ZXh0XCIgdnMgdGV4dGFyZWE6XG4gIC8vIHNwYWNlcyBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggbm9uLWJyZWFraW5nIHNwYWNlcyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDAyMDM1LzEyNjkwMzdcbiAgaWYgKGlzSW5wdXQpXG4gICAgZGl2LnRleHRDb250ZW50ID0gZGl2LnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnXFx1MDBhMCcpO1xuXG4gIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBXcmFwcGluZyBtdXN0IGJlIHJlcGxpY2F0ZWQgKmV4YWN0bHkqLCBpbmNsdWRpbmcgd2hlbiBhIGxvbmcgd29yZCBnZXRzXG4gIC8vIG9udG8gdGhlIG5leHQgbGluZSwgd2l0aCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYmVmb3JlICgjNykuXG4gIC8vIFRoZSAgKm9ubHkqIHJlbGlhYmxlIHdheSB0byBkbyB0aGF0IGlzIHRvIGNvcHkgdGhlICplbnRpcmUqIHJlc3Qgb2YgdGhlXG4gIC8vIHRleHRhcmVhJ3MgY29udGVudCBpbnRvIHRoZSA8c3Bhbj4gY3JlYXRlZCBhdCB0aGUgY2FyZXQgcG9zaXRpb24uXG4gIC8vIEZvciBpbnB1dHMsIGp1c3QgJy4nIHdvdWxkIGJlIGVub3VnaCwgYnV0IG5vIG5lZWQgdG8gYm90aGVyLlxuICBzcGFuLnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24pIHx8ICcuJzsgIC8vIHx8IGJlY2F1c2UgYSBjb21wbGV0ZWx5IGVtcHR5IGZhdXggc3BhbiBkb2Vzbid0IHJlbmRlciBhdCBhbGxcbiAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHZhciBjb29yZGluYXRlcyA9IHtcbiAgICB0b3A6IHNwYW4ub2Zmc2V0VG9wICsgcGFyc2VJbnQoY29tcHV0ZWRbJ2JvcmRlclRvcFdpZHRoJ10pLFxuICAgIGxlZnQ6IHNwYW4ub2Zmc2V0TGVmdCArIHBhcnNlSW50KGNvbXB1dGVkWydib3JkZXJMZWZ0V2lkdGgnXSksXG4gICAgaGVpZ2h0OiBwYXJzZUludChjb21wdXRlZFsnbGluZUhlaWdodCddKVxuICB9O1xuXG4gIGlmIChkZWJ1Zykge1xuICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhYWEnO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0Q2FyZXRDb29yZGluYXRlcztcbn0gZWxzZSBpZihpc0Jyb3dzZXIpIHtcbiAgd2luZG93LmdldENhcmV0Q29vcmRpbmF0ZXMgPSBnZXRDYXJldENvb3JkaW5hdGVzO1xufVxuXG59KCkpO1xuIl0sIm5hbWVzIjpbInByb3BlcnRpZXMiLCJpc0Jyb3dzZXIiLCJpc0ZpcmVmb3giLCJ3aW5kb3ciLCJtb3pJbm5lclNjcmVlblgiLCJnZXRDYXJldENvb3JkaW5hdGVzIiwiZWxlbWVudCIsInBvc2l0aW9uIiwib3B0aW9ucyIsIkVycm9yIiwiZGVidWciLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiY29tcHV0ZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwiaXNJbnB1dCIsIm5vZGVOYW1lIiwid2hpdGVTcGFjZSIsIndvcmRXcmFwIiwidmlzaWJpbGl0eSIsImZvckVhY2giLCJwcm9wIiwibGluZUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInBhcnNlSW50Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3ciLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInNwYW4iLCJjb29yZGluYXRlcyIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/textarea-caret/index.js\n");

/***/ })

};
;