(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unist-util-visit-parents"],{

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = visitParents

/* Visit. */
function visitParents(tree, type, visitor) {
  var stack = []

  if (typeof type === 'function') {
    visitor = type
    type = null
  }

  one(tree)

  /* Visit a single node. */
  function one(node) {
    var result

    if (!type || node.type === type) {
      result = visitor(node, stack.concat())
    }

    if (node.children && result !== false) {
      return all(node.children, node)
    }

    return result
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var length = children.length
    var index = -1
    var child

    stack.push(parent)

    while (++index < length) {
      child = children[index]

      if (child && one(child) === false) {
        return false
      }
    }

    stack.pop()

    return true
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMjNhZDVjODNjYjQ3NzZkMDBkM2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyogRXhwb3NlLiAqL1xubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxuLyogVmlzaXQuICovXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdHlwZSwgdmlzaXRvcikge1xuICB2YXIgc3RhY2sgPSBbXVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZpc2l0b3IgPSB0eXBlXG4gICAgdHlwZSA9IG51bGxcbiAgfVxuXG4gIG9uZSh0cmVlKVxuXG4gIC8qIFZpc2l0IGEgc2luZ2xlIG5vZGUuICovXG4gIGZ1bmN0aW9uIG9uZShub2RlKSB7XG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKCF0eXBlIHx8IG5vZGUudHlwZSA9PT0gdHlwZSkge1xuICAgICAgcmVzdWx0ID0gdmlzaXRvcihub2RlLCBzdGFjay5jb25jYXQoKSlcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYWxsKG5vZGUuY2hpbGRyZW4sIG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyogVmlzaXQgY2hpbGRyZW4gaW4gYHBhcmVudGAuICovXG4gIGZ1bmN0aW9uIGFsbChjaGlsZHJlbiwgcGFyZW50KSB7XG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGNoaWxkXG5cbiAgICBzdGFjay5wdXNoKHBhcmVudClcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgICBpZiAoY2hpbGQgJiYgb25lKGNoaWxkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKClcblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=