(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.trim-trailing-lines"],{

/***/ "./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

var line = '\n'

// Remove final newline characters from `value`.
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    // Empty
  }

  return val.slice(0, index + 1)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiODhjZmIyZGNkYzI2ZjZhNTZkNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0cmltVHJhaWxpbmdMaW5lc1xuXG52YXIgbGluZSA9ICdcXG4nXG5cbi8vIFJlbW92ZSBmaW5hbCBuZXdsaW5lIGNoYXJhY3RlcnMgZnJvbSBgdmFsdWVgLlxuZnVuY3Rpb24gdHJpbVRyYWlsaW5nTGluZXModmFsdWUpIHtcbiAgdmFyIHZhbCA9IFN0cmluZyh2YWx1ZSlcbiAgdmFyIGluZGV4ID0gdmFsLmxlbmd0aFxuXG4gIHdoaWxlICh2YWwuY2hhckF0KC0taW5kZXgpID09PSBsaW5lKSB7XG4gICAgLy8gRW1wdHlcbiAgfVxuXG4gIHJldHVybiB2YWwuc2xpY2UoMCwgaW5kZXggKyAxKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==