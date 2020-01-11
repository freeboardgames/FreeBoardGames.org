(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.trough"],{

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHJvdWdoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cm91Z2gvd3JhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLGdEQUFXOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzMzUzNjI5ODczMzcyODZiMzhlOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gdHJvdWdoXG5cbnRyb3VnaC53cmFwID0gd3JhcFxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG4vLyBDcmVhdGUgbmV3IG1pZGRsZXdhcmUuXG5mdW5jdGlvbiB0cm91Z2goKSB7XG4gIHZhciBmbnMgPSBbXVxuICB2YXIgbWlkZGxld2FyZSA9IHt9XG5cbiAgbWlkZGxld2FyZS5ydW4gPSBydW5cbiAgbWlkZGxld2FyZS51c2UgPSB1c2VcblxuICByZXR1cm4gbWlkZGxld2FyZVxuXG4gIC8vIFJ1biBgZm5zYC4gIExhc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBsZXRpb24gaGFuZGxlci5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGlucHV0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKVxuICAgIHZhciBkb25lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKHR5cGVvZiBkb25lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uIGFzIGxhc3QgYXJndW1lbnQsIG5vdCAnICsgZG9uZSlcbiAgICB9XG5cbiAgICBuZXh0LmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuXG4gICAgLy8gUnVuIHRoZSBuZXh0IGBmbmAsIGlmIGFueS5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgdmFyIGZuID0gZm5zWysraW5kZXhdXG4gICAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgICB2YXIgdmFsdWVzID0gcGFyYW1zLnNsaWNlKDEpXG4gICAgICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgICB2YXIgcG9zID0gLTFcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBkb25lKGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgbm9uLW51bGx5IGlucHV0IGludG8gdmFsdWVzLlxuICAgICAgd2hpbGUgKCsrcG9zIDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbcG9zXSA9PT0gbnVsbCB8fCB2YWx1ZXNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWVzW3Bvc10gPSBpbnB1dFtwb3NdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQgPSB2YWx1ZXNcblxuICAgICAgLy8gTmV4dCBvciBkb25lLlxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHdyYXAoZm4sIG5leHQpLmFwcGx5KG51bGwsIGlucHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZS5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYGZuYCB0byB0aGUgbGlzdC5cbiAgZnVuY3Rpb24gdXNlKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgZm5gIHRvIGJlIGEgZnVuY3Rpb24sIG5vdCAnICsgZm4pXG4gICAgfVxuXG4gICAgZm5zLnB1c2goZm4pXG5cbiAgICByZXR1cm4gbWlkZGxld2FyZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbi8vIFdyYXAgYGZuYC5cbi8vIENhbiBiZSBzeW5jIG9yIGFzeW5jOyByZXR1cm4gYSBwcm9taXNlLCByZWNlaXZlIGEgY29tcGxldGlvbiBoYW5kbGVyLCByZXR1cm5cbi8vIG5ldyB2YWx1ZXMgYW5kIGVycm9ycy5cbmZ1bmN0aW9uIHdyYXAoZm4sIGNhbGxiYWNrKSB7XG4gIHZhciBpbnZva2VkXG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICBmdW5jdGlvbiB3cmFwcGVkKCkge1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICB2YXIgY2FsbGJhY2sgPSBmbi5sZW5ndGggPiBwYXJhbXMubGVuZ3RoXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwYXJhbXMucHVzaChkb25lKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmbi5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFdlbGwsIHRoaXMgaXMgcXVpdGUgdGhlIHBpY2tsZS5cbiAgICAgIC8vIGBmbmAgcmVjZWl2ZWQgYSBjYWxsYmFjayBhbmQgaW52b2tlZCBpdCAodGh1cyBjb250aW51aW5nIHRoZSBwaXBlbGluZSksXG4gICAgICAvLyBidXQgbGF0ZXIgYWxzbyB0aHJldyBhbiBlcnJvci5cbiAgICAgIC8vIFdl4oCZcmUgbm90IGFib3V0IHRvIHJlc3RhcnQgdGhlIHBpcGVsaW5lIGFnYWluLCBzbyB0aGUgb25seSB0aGluZyBsZWZ0XG4gICAgICAvLyB0byBkbyBpcyB0byB0aHJvdyB0aGUgdGhpbmcgaW5zdGVhZC5cbiAgICAgIGlmIChjYWxsYmFjayAmJiBpbnZva2VkKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb25lKGVycm9yKVxuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKHRoZW4sIGRvbmUpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRvbmUocmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbihyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBuZXh0YCwgb25seSBvbmNlLlxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmICghaW52b2tlZCkge1xuICAgICAgaW52b2tlZCA9IHRydWVcblxuICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgZG9uZWAgd2l0aCBvbmUgdmFsdWUuXG4gIC8vIFRyYWNrcyBpZiBhbiBlcnJvciBpcyBwYXNzZWQsIHRvby5cbiAgZnVuY3Rpb24gdGhlbih2YWx1ZSkge1xuICAgIGRvbmUobnVsbCwgdmFsdWUpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=