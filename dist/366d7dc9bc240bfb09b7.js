(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.flatted"],{

/***/ "./node_modules/flatted/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flatted/esm/index.js ***!
  \*******************************************/
/*! exports provided: default, parse, stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
var Flatted = (function (Primitive, primitive) {

  /*!
   * ISC License
   *
   * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */

  var Flatted = {

    parse: function parse(text) {
      var input = JSON.parse(text, Primitives).map(primitives);
      var value = input[0];
      return typeof value === 'object' && value ?
              revive(input, new Set, value) : value;
    },

    stringify: function stringify(value) {
      for (var
        firstRun,
        known = new Map,
        input = [],
        output = [],
        i = +set(known, input, value),
        replace = function (key, value) {
          if (firstRun) return (firstRun = !firstRun), value;
          switch (typeof value) {
            case 'object':
              if (value === null) return value;
            case primitive:
              return known.get(value) || set(known, input, value);
          }
          return value;
        };
        i < input.length; i++
      ) {
        firstRun = true;
        output[i] = JSON.stringify(input[i], replace);
      }
      return '[' + output.join(',') + ']';
    }

  };

  return Flatted;

  function revive(input, parsed, output) {
    return Object.keys(output).reduce(
      function (output, key) {
        var value = output[key];
        if (value instanceof Primitive) {
          var tmp = input[value];
          if (typeof tmp === 'object' && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[key] = revive(input, parsed, tmp);
          } else {
            output[key] = tmp;
          }
        }
        return output;
      },
      output
    );
  }

  function set(known, input, value) {
    var index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  }

  function primitives(value) {
    return value instanceof Primitive ? Primitive(value) : value;
  }

  function Primitives(key, value) {
    return typeof value === primitive ? new Primitive(value) : value;
  }

}(String, 'string'));
/* harmony default export */ __webpack_exports__["default"] = (Flatted);
const parse = Flatted.parse;
const stringify = Flatted.stringify;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHRlZC9lc20vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNjLHNFQUFPLEVBQUM7QUFDaEI7QUFDQSIsImZpbGUiOiIzNjZkN2RjOWJjMjQwYmZiMDliNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGbGF0dGVkID0gKGZ1bmN0aW9uIChQcmltaXRpdmUsIHByaW1pdGl2ZSkge1xuXG4gIC8qIVxuICAgKiBJU0MgTGljZW5zZVxuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIDIwMTgsIEFuZHJlYSBHaWFtbWFyY2hpLCBAV2ViUmVmbGVjdGlvblxuICAgKlxuICAgKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAgICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICAgKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICAgKlxuICAgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG4gICAqIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuICAgKiBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG4gICAqIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAgKiBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRVxuICAgKiBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG4gICAqIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gICAqL1xuXG4gIHZhciBGbGF0dGVkID0ge1xuXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHRleHQpIHtcbiAgICAgIHZhciBpbnB1dCA9IEpTT04ucGFyc2UodGV4dCwgUHJpbWl0aXZlcykubWFwKHByaW1pdGl2ZXMpO1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbMF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSA/XG4gICAgICAgICAgICAgIHJldml2ZShpbnB1dCwgbmV3IFNldCwgdmFsdWUpIDogdmFsdWU7XG4gICAgfSxcblxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gICAgICBmb3IgKHZhclxuICAgICAgICBmaXJzdFJ1bixcbiAgICAgICAga25vd24gPSBuZXcgTWFwLFxuICAgICAgICBpbnB1dCA9IFtdLFxuICAgICAgICBvdXRwdXQgPSBbXSxcbiAgICAgICAgaSA9ICtzZXQoa25vd24sIGlucHV0LCB2YWx1ZSksXG4gICAgICAgIHJlcGxhY2UgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChmaXJzdFJ1bikgcmV0dXJuIChmaXJzdFJ1biA9ICFmaXJzdFJ1biksIHZhbHVlO1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgcHJpbWl0aXZlOlxuICAgICAgICAgICAgICByZXR1cm4ga25vd24uZ2V0KHZhbHVlKSB8fCBzZXQoa25vd24sIGlucHV0LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgaSA8IGlucHV0Lmxlbmd0aDsgaSsrXG4gICAgICApIHtcbiAgICAgICAgZmlyc3RSdW4gPSB0cnVlO1xuICAgICAgICBvdXRwdXRbaV0gPSBKU09OLnN0cmluZ2lmeShpbnB1dFtpXSwgcmVwbGFjZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gRmxhdHRlZDtcblxuICBmdW5jdGlvbiByZXZpdmUoaW5wdXQsIHBhcnNlZCwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG91dHB1dCkucmVkdWNlKFxuICAgICAgZnVuY3Rpb24gKG91dHB1dCwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG91dHB1dFtrZXldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUpIHtcbiAgICAgICAgICB2YXIgdG1wID0gaW5wdXRbdmFsdWVdO1xuICAgICAgICAgIGlmICh0eXBlb2YgdG1wID09PSAnb2JqZWN0JyAmJiAhcGFyc2VkLmhhcyh0bXApKSB7XG4gICAgICAgICAgICBwYXJzZWQuYWRkKHRtcCk7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IHJldml2ZShpbnB1dCwgcGFyc2VkLCB0bXApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IHRtcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH0sXG4gICAgICBvdXRwdXRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KGtub3duLCBpbnB1dCwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSBQcmltaXRpdmUoaW5wdXQucHVzaCh2YWx1ZSkgLSAxKTtcbiAgICBrbm93bi5zZXQodmFsdWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBwcmltaXRpdmVzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlID8gUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gUHJpbWl0aXZlcyhrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gcHJpbWl0aXZlID8gbmV3IFByaW1pdGl2ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG59KFN0cmluZywgJ3N0cmluZycpKTtcbmV4cG9ydCBkZWZhdWx0IEZsYXR0ZWQ7XG5leHBvcnQgY29uc3QgcGFyc2UgPSBGbGF0dGVkLnBhcnNlO1xuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IEZsYXR0ZWQuc3RyaW5naWZ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==