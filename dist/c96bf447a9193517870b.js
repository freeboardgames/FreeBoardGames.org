(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.is-alphanumerical"],{

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFudW1lcmljYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsc0RBQVk7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYzk2YmY0NDdhOTE5MzUxNzg3MGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhbnVtZXJpY2FsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhbHBoYW51bWVyaWNhbC5cbmZ1bmN0aW9uIGFscGhhbnVtZXJpY2FsKGNoYXJhY3Rlcikge1xuICByZXR1cm4gYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgfHwgZGVjaW1hbChjaGFyYWN0ZXIpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9