(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unist-util-remove-position"],{

/***/ "./node_modules/unist-util-remove-position/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/unist-util-remove-position/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")

module.exports = removePosition

function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOTA5ZGQ0NzhhM2YwYWNhMWExM2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlUG9zaXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlUG9zaXRpb24obm9kZSwgZm9yY2UpIHtcbiAgdmlzaXQobm9kZSwgZm9yY2UgPyBoYXJkIDogc29mdClcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gaGFyZChub2RlKSB7XG4gIGRlbGV0ZSBub2RlLnBvc2l0aW9uXG59XG5cbmZ1bmN0aW9uIHNvZnQobm9kZSkge1xuICBub2RlLnBvc2l0aW9uID0gdW5kZWZpbmVkXG59XG4iXSwic291cmNlUm9vdCI6IiJ9