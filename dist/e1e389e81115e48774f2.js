(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unist-util-stringify-position"],{

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  /* Position. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  /* Point. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  /* ? */
  return null
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlMWUzODllODExMTVlNDg3NzRmMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIC8qIE5vdGhpbmcuICovXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvKiBOb2RlLiAqL1xuICBpZiAob3duLmNhbGwodmFsdWUsICdwb3NpdGlvbicpIHx8IG93bi5jYWxsKHZhbHVlLCAndHlwZScpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlLnBvc2l0aW9uKVxuICB9XG5cbiAgLyogUG9zaXRpb24uICovXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3N0YXJ0JykgfHwgb3duLmNhbGwodmFsdWUsICdlbmQnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZSlcbiAgfVxuXG4gIC8qIFBvaW50LiAqL1xuICBpZiAob3duLmNhbGwodmFsdWUsICdsaW5lJykgfHwgb3duLmNhbGwodmFsdWUsICdjb2x1bW4nKSkge1xuICAgIHJldHVybiBwb2ludCh2YWx1ZSlcbiAgfVxuXG4gIC8qID8gKi9cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcG9pbnQocG9pbnQpIHtcbiAgaWYgKCFwb2ludCB8fCB0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnKSB7XG4gICAgcG9pbnQgPSB7fVxuICB9XG5cbiAgcmV0dXJuIGluZGV4KHBvaW50LmxpbmUpICsgJzonICsgaW5kZXgocG9pbnQuY29sdW1uKVxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgaWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICBwb3MgPSB7fVxuICB9XG5cbiAgcmV0dXJuIHBvaW50KHBvcy5zdGFydCkgKyAnLScgKyBwb2ludChwb3MuZW5kKVxufVxuXG5mdW5jdGlvbiBpbmRleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==