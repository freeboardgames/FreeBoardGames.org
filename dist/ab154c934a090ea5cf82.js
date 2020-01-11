(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.vfile-message"],{

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVosZ0JBQWdCLG1CQUFPLENBQUMsNEZBQStCOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHlCQUF5QjtBQUNyQyxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImFiMTU0YzkzNGEwOTBlYTVjZjgyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gVk1lc3NhZ2VcblxuLy8gSW5oZXJpdCBmcm9tIGBFcnJvciNgLlxuZnVuY3Rpb24gVk1lc3NhZ2VQcm90b3R5cGUoKSB7fVxuVk1lc3NhZ2VQcm90b3R5cGUucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlXG5WTWVzc2FnZS5wcm90b3R5cGUgPSBuZXcgVk1lc3NhZ2VQcm90b3R5cGUoKVxuXG4vLyBNZXNzYWdlIHByb3BlcnRpZXMuXG52YXIgcHJvdG8gPSBWTWVzc2FnZS5wcm90b3R5cGVcblxucHJvdG8uZmlsZSA9ICcnXG5wcm90by5uYW1lID0gJydcbnByb3RvLnJlYXNvbiA9ICcnXG5wcm90by5tZXNzYWdlID0gJydcbnByb3RvLnN0YWNrID0gJydcbnByb3RvLmZhdGFsID0gbnVsbFxucHJvdG8uY29sdW1uID0gbnVsbFxucHJvdG8ubGluZSA9IG51bGxcblxuLy8gQ29uc3RydWN0IGEgbmV3IFZNZXNzYWdlLlxuLy9cbi8vIE5vdGU6IFdlIGNhbm5vdCBpbnZva2UgYEVycm9yYCBvbiB0aGUgY3JlYXRlZCBjb250ZXh0LCBhcyB0aGF0IGFkZHMgcmVhZG9ubHlcbi8vIGBsaW5lYCBhbmQgYGNvbHVtbmAgYXR0cmlidXRlcyBvbiBTYWZhcmkgOSwgdGh1cyB0aHJvd2luZyBhbmQgZmFpbGluZyB0aGVcbi8vIGRhdGEuXG5mdW5jdGlvbiBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIHBhcnRzXG4gIHZhciByYW5nZVxuICB2YXIgbG9jYXRpb25cblxuICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG9yaWdpbiA9IHBvc2l0aW9uXG4gICAgcG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBwYXJ0cyA9IHBhcnNlT3JpZ2luKG9yaWdpbilcbiAgcmFuZ2UgPSBzdHJpbmdpZnkocG9zaXRpb24pIHx8ICcxOjEnXG5cbiAgbG9jYXRpb24gPSB7XG4gICAgc3RhcnQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9LFxuICAgIGVuZDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH1cbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5wb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucG9zaXRpb25cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIC8vIFBvc2l0aW9uLlxuICAgIGlmIChwb3NpdGlvbi5zdGFydCkge1xuICAgICAgbG9jYXRpb24gPSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGxvY2F0aW9uLnN0YXJ0ID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpZiAocmVhc29uLnN0YWNrKSB7XG4gICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIHJlYXNvbiA9IHJlYXNvbi5tZXNzYWdlXG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cbiAgdGhpcy5uYW1lID0gcmFuZ2VcbiAgdGhpcy5yZWFzb24gPSByZWFzb25cbiAgdGhpcy5saW5lID0gcG9zaXRpb24gPyBwb3NpdGlvbi5saW5lIDogbnVsbFxuICB0aGlzLmNvbHVtbiA9IHBvc2l0aW9uID8gcG9zaXRpb24uY29sdW1uIDogbnVsbFxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zb3VyY2UgPSBwYXJ0c1swXVxuICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT3JpZ2luKG9yaWdpbikge1xuICB2YXIgcmVzdWx0ID0gW251bGwsIG51bGxdXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFswXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==