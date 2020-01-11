(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.state-toggle"],{

/***/ "./node_modules/state-toggle/index.js":
/*!********************************************!*\
  !*** ./node_modules/state-toggle/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RhdGUtdG9nZ2xlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjNjZDg2MzVmOTg0ZTRhZjhkZjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBDb25zdHJ1Y3QgYSBzdGF0ZSBgdG9nZ2xlcmA6IGEgZnVuY3Rpb24gd2hpY2ggaW52ZXJzZXMgYHByb3BlcnR5YCBpbiBjb250ZXh0XG4vLyBiYXNlZCBvbiBpdHMgY3VycmVudCB2YWx1ZS5cbi8vIFRoZSBieSBgdG9nZ2xlcmAgcmV0dXJuZWQgZnVuY3Rpb24gcmVzdG9yZXMgdGhhdCB2YWx1ZS5cbmZ1bmN0aW9uIGZhY3Rvcnkoa2V5LCBzdGF0ZSwgY3R4KSB7XG4gIHJldHVybiBlbnRlclxuXG4gIGZ1bmN0aW9uIGVudGVyKCkge1xuICAgIHZhciBjb250ZXh0ID0gY3R4IHx8IHRoaXNcbiAgICB2YXIgY3VycmVudCA9IGNvbnRleHRba2V5XVxuXG4gICAgY29udGV4dFtrZXldID0gIXN0YXRlXG5cbiAgICByZXR1cm4gZXhpdFxuXG4gICAgZnVuY3Rpb24gZXhpdCgpIHtcbiAgICAgIGNvbnRleHRba2V5XSA9IGN1cnJlbnRcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=