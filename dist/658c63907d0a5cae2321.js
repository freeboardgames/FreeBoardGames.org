(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.mdast-add-list-metadata"],{

/***/ "./node_modules/mdast-add-list-metadata/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-add-list-metadata/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js");

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtYWRkLWxpc3QtbWV0YWRhdGEvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUJBQXVCLG1CQUFPLENBQUMsa0ZBQTBCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI2NThjNjM5MDdkMGE1Y2FlMjMyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB2aXNpdFdpdGhQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJyk7XG5cbmZ1bmN0aW9uIGFkZExpc3RNZXRhZGF0YSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhc3QpIHtcbiAgICB2aXNpdFdpdGhQYXJlbnRzKGFzdCwgJ2xpc3QnLCBmdW5jdGlvbiAobGlzdE5vZGUsIHBhcmVudHMpIHtcbiAgICAgIHZhciBkZXB0aCA9IDAsIGksIG47XG4gICAgICBmb3IgKGkgPSAwLCBuID0gcGFyZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaWYgKHBhcmVudHNbaV0udHlwZSA9PT0gJ2xpc3QnKSBkZXB0aCArPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMCwgbiA9IGxpc3ROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBsaXN0Tm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgY2hpbGQuaW5kZXggPSBpO1xuICAgICAgICBjaGlsZC5vcmRlcmVkID0gbGlzdE5vZGUub3JkZXJlZDtcbiAgICAgIH1cbiAgICAgIGxpc3ROb2RlLmRlcHRoID0gZGVwdGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFzdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRMaXN0TWV0YWRhdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9