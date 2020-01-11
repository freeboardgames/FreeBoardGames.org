(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unherit"],{

/***/ "./node_modules/unherit/index.js":
/*!***************************************!*\
  !*** ./node_modules/unherit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")

module.exports = unherit

// Create a custom constructor which can be modified without affecting the
// original class.
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  // Clone values.
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  // Constructor accepting a single argument, which itself is an `arguments`
  // object.
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  // Constructor accepting variadic arguments.
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLGdEQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyw2REFBVTs7QUFFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiODgwNDMxMzUwNTRiYmRmZmEzYmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaGVyaXRcblxuLy8gQ3JlYXRlIGEgY3VzdG9tIGNvbnN0cnVjdG9yIHdoaWNoIGNhbiBiZSBtb2RpZmllZCB3aXRob3V0IGFmZmVjdGluZyB0aGVcbi8vIG9yaWdpbmFsIGNsYXNzLlxuZnVuY3Rpb24gdW5oZXJpdChTdXBlcikge1xuICB2YXIgcmVzdWx0XG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaW5oZXJpdHMoT2YsIFN1cGVyKVxuICBpbmhlcml0cyhGcm9tLCBPZilcblxuICAvLyBDbG9uZSB2YWx1ZXMuXG4gIHJlc3VsdCA9IE9mLnByb3RvdHlwZVxuXG4gIGZvciAoa2V5IGluIHJlc3VsdCkge1xuICAgIHZhbHVlID0gcmVzdWx0W2tleV1cblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9ICdjb25jYXQnIGluIHZhbHVlID8gdmFsdWUuY29uY2F0KCkgOiB4dGVuZCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2ZcblxuICAvLyBDb25zdHJ1Y3RvciBhY2NlcHRpbmcgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGl0c2VsZiBpcyBhbiBgYXJndW1lbnRzYFxuICAvLyBvYmplY3QuXG4gIGZ1bmN0aW9uIEZyb20ocGFyYW1ldGVycykge1xuICAgIHJldHVybiBTdXBlci5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKVxuICB9XG5cbiAgLy8gQ29uc3RydWN0b3IgYWNjZXB0aW5nIHZhcmlhZGljIGFyZ3VtZW50cy5cbiAgZnVuY3Rpb24gT2YoKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9mKSkge1xuICAgICAgcmV0dXJuIG5ldyBGcm9tKGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9