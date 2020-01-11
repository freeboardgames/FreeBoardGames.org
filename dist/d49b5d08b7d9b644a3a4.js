(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.markdown-escapes"],{

/***/ "./node_modules/markdown-escapes/index.js":
/*!************************************************!*\
  !*** ./node_modules/markdown-escapes/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

// Get markdown escapes.
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFya2Rvd24tZXNjYXBlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJkNDliNWQwOGI3ZDliNjQ0YTNhNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZXNcblxudmFyIGRlZmF1bHRzID0gW1xuICAnXFxcXCcsXG4gICdgJyxcbiAgJyonLFxuICAneycsXG4gICd9JyxcbiAgJ1snLFxuICAnXScsXG4gICcoJyxcbiAgJyknLFxuICAnIycsXG4gICcrJyxcbiAgJy0nLFxuICAnLicsXG4gICchJyxcbiAgJ18nLFxuICAnPidcbl1cblxudmFyIGdmbSA9IGRlZmF1bHRzLmNvbmNhdChbJ34nLCAnfCddKVxuXG52YXIgY29tbW9ubWFyayA9IGdmbS5jb25jYXQoW1xuICAnXFxuJyxcbiAgJ1wiJyxcbiAgJyQnLFxuICAnJScsXG4gICcmJyxcbiAgXCInXCIsXG4gICcsJyxcbiAgJy8nLFxuICAnOicsXG4gICc7JyxcbiAgJzwnLFxuICAnPScsXG4gICc/JyxcbiAgJ0AnLFxuICAnXidcbl0pXG5cbmVzY2FwZXMuZGVmYXVsdCA9IGRlZmF1bHRzXG5lc2NhcGVzLmdmbSA9IGdmbVxuZXNjYXBlcy5jb21tb25tYXJrID0gY29tbW9ubWFya1xuXG4vLyBHZXQgbWFya2Rvd24gZXNjYXBlcy5cbmZ1bmN0aW9uIGVzY2FwZXMob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHNldHRpbmdzLmNvbW1vbm1hcmspIHtcbiAgICByZXR1cm4gY29tbW9ubWFya1xuICB9XG5cbiAgcmV0dXJuIHNldHRpbmdzLmdmbSA/IGdmbSA6IGRlZmF1bHRzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9