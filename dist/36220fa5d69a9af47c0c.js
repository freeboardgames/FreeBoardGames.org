(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.replace-ext"],{

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVwbGFjZS1leHQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxxREFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzNjIyMGZhNWQ2OWE5YWY0N2MwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFeHQobnBhdGgsIGV4dCkge1xuICBpZiAodHlwZW9mIG5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIGlmIChucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICB2YXIgbkZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShucGF0aCwgcGF0aC5leHRuYW1lKG5wYXRoKSkgKyBleHQ7XG4gIHJldHVybiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG5wYXRoKSwgbkZpbGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlRXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==