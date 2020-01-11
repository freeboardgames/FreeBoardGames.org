(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.jss-plugin-props-sort"],{

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmVzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMkVBQVksRUFBQyIsImZpbGUiOiIxMTQ4Y2E1MWZhOTEyMDRiNDM3ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU29ydCBwcm9wcyBieSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGpzc1Byb3BzU29ydCgpIHtcbiAgdmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KHByb3AwLCBwcm9wMSkge1xuICAgIGlmIChwcm9wMC5sZW5ndGggPT09IHByb3AxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb3AwID4gcHJvcDEgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3AwLmxlbmd0aCAtIHByb3AxLmxlbmd0aDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSkuc29ydChzb3J0KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdTdHlsZVtwcm9wc1tpXV0gPSBzdHlsZVtwcm9wc1tpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdHlsZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc1Byb3BzU29ydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=