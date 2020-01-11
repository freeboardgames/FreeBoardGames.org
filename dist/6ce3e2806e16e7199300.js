(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unist-util-is"],{

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNmNlM2UyODA2ZTE2ZTcxOTkzMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0XG5cbmZ1bmN0aW9uIGNvbnZlcnQodGVzdCkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb2tcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gKCdsZW5ndGgnIGluIHRlc3QgPyBhbnlGYWN0b3J5IDogbWF0Y2hlc0ZhY3RvcnkpKHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVzdFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBbGwodGVzdHMpIHtcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgbGVuZ3RoID0gdGVzdHMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRzW2luZGV4XSA9IGNvbnZlcnQodGVzdHNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuLy8gVXRpbGl0eSBhc3NlcnQgZWFjaCBwcm9wZXJ0eSBpbiBgdGVzdGAgaXMgcmVwcmVzZW50ZWQgaW4gYG5vZGVgLCBhbmQgZWFjaFxuLy8gdmFsdWVzIGFyZSBzdHJpY3RseSBlcXVhbC5cbmZ1bmN0aW9uIG1hdGNoZXNGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKG5vZGUpIHtcbiAgICB2YXIga2V5XG5cbiAgICBmb3IgKGtleSBpbiB0ZXN0KSB7XG4gICAgICBpZiAobm9kZVtrZXldICE9PSB0ZXN0W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBhbnlGYWN0b3J5KHRlc3RzKSB7XG4gIHZhciBjaGVja3MgPSBjb252ZXJ0QWxsKHRlc3RzKVxuICB2YXIgbGVuZ3RoID0gY2hlY2tzLmxlbmd0aFxuXG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcygpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUudHlwZSA9PT0gdGVzdClcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iXSwic291cmNlUm9vdCI6IiJ9