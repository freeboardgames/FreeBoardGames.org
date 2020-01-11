(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.tiny-warning"],{

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxtQkFBbUIsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVlLHNFQUFPLEVBQUMiLCJmaWxlIjoiMWEzYzM3YTk1YTUzMjk4NmNlYmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=