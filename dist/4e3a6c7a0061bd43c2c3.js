(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.vfile-location"],{

/***/ "./node_modules/vfile-location/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vfile-location/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

// Factory to get the line and column-based `position` for `offset` in the bound
// indices.
function offsetToPositionFactory(indices) {
  return offsetToPosition

  // Get the line and column-based `position` for `offset` in the bound indices.
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

// Factory to get the `offset` for a line and column-based `position` in the
// bound indices.
function positionToOffsetFactory(indices) {
  return positionToOffset

  // Get the `offset` for a line and column-based `position` in the bound
  // indices.
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

// Get indices of line-breaks in `value`.
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsImZpbGUiOiI0ZTNhNmM3YTAwNjFiZDQzYzJjMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuZnVuY3Rpb24gZmFjdG9yeShmaWxlKSB7XG4gIHZhciBjb250ZW50cyA9IGluZGljZXMoU3RyaW5nKGZpbGUpKVxuXG4gIHJldHVybiB7XG4gICAgdG9Qb3NpdGlvbjogb2Zmc2V0VG9Qb3NpdGlvbkZhY3RvcnkoY29udGVudHMpLFxuICAgIHRvT2Zmc2V0OiBwb3NpdGlvblRvT2Zmc2V0RmFjdG9yeShjb250ZW50cylcbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCB0aGUgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgZm9yIGBvZmZzZXRgIGluIHRoZSBib3VuZFxuLy8gaW5kaWNlcy5cbmZ1bmN0aW9uIG9mZnNldFRvUG9zaXRpb25GYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIG9mZnNldFRvUG9zaXRpb25cblxuICAvLyBHZXQgdGhlIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGZvciBgb2Zmc2V0YCBpbiB0aGUgYm91bmQgaW5kaWNlcy5cbiAgZnVuY3Rpb24gb2Zmc2V0VG9Qb3NpdGlvbihvZmZzZXQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aFxuXG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoaW5kaWNlc1tpbmRleF0gPiBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiBpbmRleCArIDEsXG4gICAgICAgICAgY29sdW1uOiBvZmZzZXQgLSAoaW5kaWNlc1tpbmRleCAtIDFdIHx8IDApICsgMSxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuLy8gRmFjdG9yeSB0byBnZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZVxuLy8gYm91bmQgaW5kaWNlcy5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9PZmZzZXRGYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIHBvc2l0aW9uVG9PZmZzZXRcblxuICAvLyBHZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZSBib3VuZFxuICAvLyBpbmRpY2VzLlxuICBmdW5jdGlvbiBwb3NpdGlvblRvT2Zmc2V0KHBvc2l0aW9uKSB7XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi5saW5lXG4gICAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLmNvbHVtblxuXG4gICAgaWYgKCFpc05hTihsaW5lKSAmJiAhaXNOYU4oY29sdW1uKSAmJiBsaW5lIC0gMSBpbiBpbmRpY2VzKSB7XG4gICAgICByZXR1cm4gKGluZGljZXNbbGluZSAtIDJdIHx8IDApICsgY29sdW1uIC0gMSB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIC0xXG4gIH1cbn1cblxuLy8gR2V0IGluZGljZXMgb2YgbGluZS1icmVha3MgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGluZGljZXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIHJlc3VsdC5wdXNoKGluZGV4ICsgMSlcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSlcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKHZhbHVlLmxlbmd0aCArIDEpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==