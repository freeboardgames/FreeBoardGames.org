(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.is-word-character"],{

/***/ "./node_modules/is-word-character/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-word-character/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

// Check if the given character code, or the character code at the first
// character, is a word character.
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOWM2NDM5OTAwMTRiZDYyMDMxMGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkQ2hhcmFjdGVyXG5cbnZhciBmcm9tQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciByZSA9IC9cXHcvXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhIHdvcmQgY2hhcmFjdGVyLlxuZnVuY3Rpb24gd29yZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIHJlLnRlc3QoXG4gICAgdHlwZW9mIGNoYXJhY3RlciA9PT0gJ251bWJlcicgPyBmcm9tQ29kZShjaGFyYWN0ZXIpIDogY2hhcmFjdGVyLmNoYXJBdCgwKVxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9