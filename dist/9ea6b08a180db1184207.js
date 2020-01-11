(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.normalize-scroll-left"],{

/***/ "./node_modules/normalize-scroll-left/esm/main.js":
/*!********************************************************!*\
  !*** ./node_modules/normalize-scroll-left/esm/main.js ***!
  \********************************************************/
/*! exports provided: _setScrollType, detectScrollType, getNormalizedScrollLeft, setNormalizedScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setScrollType", function() { return _setScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectScrollType", function() { return detectScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedScrollLeft", function() { return getNormalizedScrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNormalizedScrollLeft", function() { return setNormalizedScrollLeft; });
// Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var cachedType;
function _setScrollType(type) {
    cachedType = type;
}
// Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (!inDOM || !window.document.body) {
        return 'indeterminate';
    }
    var dummy = window.document.createElement('div');
    dummy.appendChild(document.createTextNode('ABCD'));
    dummy.dir = 'rtl';
    dummy.style.fontSize = '14px';
    dummy.style.width = '4px';
    dummy.style.height = '1px';
    dummy.style.position = 'absolute';
    dummy.style.top = '-1000px';
    dummy.style.overflow = 'scroll';
    document.body.appendChild(dummy);
    cachedType = 'reverse';
    if (dummy.scrollLeft > 0) {
        cachedType = 'default';
    }
    else {
        dummy.scrollLeft = 1;
        if (dummy.scrollLeft === 0) {
            cachedType = 'negative';
        }
    }
    document.body.removeChild(dummy);
    return cachedType;
}
// Based on https://stackoverflow.com/a/24394376
function getNormalizedScrollLeft(element, direction) {
    var scrollLeft = element.scrollLeft;
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return Number.NaN;
    }
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
    }
    return scrollLeft;
}
function setNormalizedScrollLeft(element, scrollLeft, direction) {
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        element.scrollLeft = scrollLeft;
        return;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return;
    }
    switch (type) {
        case 'negative':
            element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
            break;
        case 'reverse':
            element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
            break;
        default:
            element.scrollLeft = scrollLeft;
            break;
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXNjcm9sbC1sZWZ0L2VzbS9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjllYTZiMDhhMTgwZGIxMTg0MjA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9kb20taGVscGVycy9ibG9iL21hc3Rlci9zcmMvdXRpbC9pbkRPTS5qc1xyXG52YXIgaW5ET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xyXG52YXIgY2FjaGVkVHlwZTtcclxuZXhwb3J0IGZ1bmN0aW9uIF9zZXRTY3JvbGxUeXBlKHR5cGUpIHtcclxuICAgIGNhY2hlZFR5cGUgPSB0eXBlO1xyXG59XHJcbi8vIEJhc2VkIG9uIHRoZSBqcXVlcnkgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9vdGhyZWUvanF1ZXJ5LnJ0bC1zY3JvbGwtdHlwZVxyXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsVHlwZSgpIHtcclxuICAgIGlmIChjYWNoZWRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFR5cGU7XHJcbiAgICB9XHJcbiAgICBpZiAoIWluRE9NIHx8ICF3aW5kb3cuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIHJldHVybiAnaW5kZXRlcm1pbmF0ZSc7XHJcbiAgICB9XHJcbiAgICB2YXIgZHVtbXkgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkdW1teS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQUJDRCcpKTtcclxuICAgIGR1bW15LmRpciA9ICdydGwnO1xyXG4gICAgZHVtbXkuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICBkdW1teS5zdHlsZS53aWR0aCA9ICc0cHgnO1xyXG4gICAgZHVtbXkuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XHJcbiAgICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkdW1teS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBkdW1teS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICBjYWNoZWRUeXBlID0gJ3JldmVyc2UnO1xyXG4gICAgaWYgKGR1bW15LnNjcm9sbExlZnQgPiAwKSB7XHJcbiAgICAgICAgY2FjaGVkVHlwZSA9ICdkZWZhdWx0JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGR1bW15LnNjcm9sbExlZnQgPSAxO1xyXG4gICAgICAgIGlmIChkdW1teS5zY3JvbGxMZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNhY2hlZFR5cGUgPSAnbmVnYXRpdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZHVtbXkpO1xyXG4gICAgcmV0dXJuIGNhY2hlZFR5cGU7XHJcbn1cclxuLy8gQmFzZWQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI0Mzk0Mzc2XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdChlbGVtZW50LCBkaXJlY3Rpb24pIHtcclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxyXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcclxuICAgICAgICByZXR1cm4gc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHZhciB0eXBlID0gZGV0ZWN0U2Nyb2xsVHlwZSgpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdpbmRldGVybWluYXRlJykge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuTmFOO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIGNhc2UgJ3JldmVyc2UnOlxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjcm9sbExlZnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIHNjcm9sbExlZnQsIGRpcmVjdGlvbikge1xyXG4gICAgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxyXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcclxuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB0eXBlID0gZGV0ZWN0U2Nyb2xsVHlwZSgpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdpbmRldGVybWluYXRlJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5jbGllbnRXaWR0aCAtIGVsZW1lbnQuc2Nyb2xsV2lkdGggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZXZlcnNlJzpcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9