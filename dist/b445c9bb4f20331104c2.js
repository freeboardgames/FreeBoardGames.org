(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.react-cookies"],{

/***/ "./node_modules/react-cookies/build/cookie.js":
/*!****************************************************!*\
  !*** ./node_modules/react-cookies/build/cookie.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.load = load;
exports.loadAll = loadAll;
exports.select = select;
exports.save = save;
exports.remove = remove;
exports.setRawCookie = setRawCookie;
exports.plugToRequest = plugToRequest;

var _cookie = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_NODE = typeof document === 'undefined' || typeof process !== 'undefined' && process.env && "development" === 'test';
var _rawCookie = {};
var _res = void 0;

function _isResWritable() {
  return _res && !_res.headersSent;
}

function load(name, doNotParse) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
  var cookieVal = cookies && cookies[name];

  if (typeof doNotParse === 'undefined') {
    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (err) {
      // Not serialized object
    }
  }

  return cookieVal;
}

function loadAll(doNotParse) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
  var cookieVal = cookies;

  if (typeof doNotParse === 'undefined') {
    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (err) {
      // Not serialized object
    }
  }

  return cookieVal;
}

function select(regex) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);

  if (!cookies) {
    return {};
  }

  if (!regex) {
    return cookies;
  }

  return Object.keys(cookies).reduce(function (accumulator, name) {
    if (!regex.test(name)) {
      return accumulator;
    }

    var newCookie = {};
    newCookie[name] = cookies[name];
    return (0, _objectAssign2.default)({}, accumulator, newCookie);
  }, {});
}

function save(name, val, opt) {
  _rawCookie[name] = val;

  // Allow you to work with cookies as objects.
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    _rawCookie[name] = JSON.stringify(val);
  }

  // Cookies only work in the browser
  if (!IS_NODE) {
    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
  }

  if (_isResWritable() && _res.cookie) {
    _res.cookie(name, val, opt);
  }
}

function remove(name, opt) {
  delete _rawCookie[name];

  if (typeof opt === 'undefined') {
    opt = {};
  } else if (typeof opt === 'string') {
    // Will be deprecated in future versions
    opt = { path: opt };
  } else {
    // Prevent mutation of opt below
    opt = (0, _objectAssign2.default)({}, opt);
  }

  if (typeof document !== 'undefined') {
    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
    opt.maxAge = 0;
    document.cookie = _cookie2.default.serialize(name, '', opt);
  }

  if (_isResWritable() && _res.clearCookie) {
    _res.clearCookie(name, opt);
  }
}

function setRawCookie(rawCookie) {
  if (rawCookie) {
    _rawCookie = _cookie2.default.parse(rawCookie);
  } else {
    _rawCookie = {};
  }
}

function plugToRequest(req, res) {
  if (req.cookie) {
    _rawCookie = req.cookie;
  } else if (req.cookies) {
    _rawCookie = req.cookies;
  } else if (req.headers && req.headers.cookie) {
    setRawCookie(req.headers.cookie);
  } else {
    _rawCookie = {};
  }

  _res = res;

  return function unplug() {
    _res = null;
    _rawCookie = {};
  };
}

exports.default = {
  setRawCookie: setRawCookie,
  load: load,
  loadAll: loadAll,
  select: select,
  save: save,
  remove: remove,
  plugToRequest: plugToRequest
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29va2llcy9idWlsZC9jb29raWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsOENBQVE7O0FBRTlCOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLDREQUFlOztBQUUzQzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0dBQWtHLGFBQW9CO0FBQ3RIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QztBQUN6QyxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYjQ0NWM5YmI0ZjIwMzMxMTA0YzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMubG9hZEFsbCA9IGxvYWRBbGw7XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuc2V0UmF3Q29va2llID0gc2V0UmF3Q29va2llO1xuZXhwb3J0cy5wbHVnVG9SZXF1ZXN0ID0gcGx1Z1RvUmVxdWVzdDtcblxudmFyIF9jb29raWUgPSByZXF1aXJlKCdjb29raWUnKTtcblxudmFyIF9jb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29va2llKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJU19OT0RFID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcbnZhciBfcmF3Q29va2llID0ge307XG52YXIgX3JlcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2lzUmVzV3JpdGFibGUoKSB7XG4gIHJldHVybiBfcmVzICYmICFfcmVzLmhlYWRlcnNTZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkKG5hbWUsIGRvTm90UGFyc2UpIHtcbiAgdmFyIGNvb2tpZXMgPSBJU19OT0RFID8gX3Jhd0Nvb2tpZSA6IF9jb29raWUyLmRlZmF1bHQucGFyc2UoZG9jdW1lbnQuY29va2llKTtcbiAgdmFyIGNvb2tpZVZhbCA9IGNvb2tpZXMgJiYgY29va2llc1tuYW1lXTtcblxuICBpZiAodHlwZW9mIGRvTm90UGFyc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9Ob3RQYXJzZSA9ICFjb29raWVWYWwgfHwgY29va2llVmFsWzBdICE9PSAneycgJiYgY29va2llVmFsWzBdICE9PSAnWyc7XG4gIH1cblxuICBpZiAoIWRvTm90UGFyc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29va2llVmFsID0gSlNPTi5wYXJzZShjb29raWVWYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gTm90IHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb2tpZVZhbDtcbn1cblxuZnVuY3Rpb24gbG9hZEFsbChkb05vdFBhcnNlKSB7XG4gIHZhciBjb29raWVzID0gSVNfTk9ERSA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSk7XG4gIHZhciBjb29raWVWYWwgPSBjb29raWVzO1xuXG4gIGlmICh0eXBlb2YgZG9Ob3RQYXJzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb05vdFBhcnNlID0gIWNvb2tpZVZhbCB8fCBjb29raWVWYWxbMF0gIT09ICd7JyAmJiBjb29raWVWYWxbMF0gIT09ICdbJztcbiAgfVxuXG4gIGlmICghZG9Ob3RQYXJzZSkge1xuICAgIHRyeSB7XG4gICAgICBjb29raWVWYWwgPSBKU09OLnBhcnNlKGNvb2tpZVZhbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBOb3Qgc2VyaWFsaXplZCBvYmplY3RcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29va2llVmFsO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QocmVnZXgpIHtcbiAgdmFyIGNvb2tpZXMgPSBJU19OT0RFID8gX3Jhd0Nvb2tpZSA6IF9jb29raWUyLmRlZmF1bHQucGFyc2UoZG9jdW1lbnQuY29va2llKTtcblxuICBpZiAoIWNvb2tpZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoIXJlZ2V4KSB7XG4gICAgcmV0dXJuIGNvb2tpZXM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoY29va2llcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgbmFtZSkge1xuICAgIGlmICghcmVnZXgudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cblxuICAgIHZhciBuZXdDb29raWUgPSB7fTtcbiAgICBuZXdDb29raWVbbmFtZV0gPSBjb29raWVzW25hbWVdO1xuICAgIHJldHVybiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIGFjY3VtdWxhdG9yLCBuZXdDb29raWUpO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHNhdmUobmFtZSwgdmFsLCBvcHQpIHtcbiAgX3Jhd0Nvb2tpZVtuYW1lXSA9IHZhbDtcblxuICAvLyBBbGxvdyB5b3UgdG8gd29yayB3aXRoIGNvb2tpZXMgYXMgb2JqZWN0cy5cbiAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBfcmF3Q29va2llW25hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgfVxuXG4gIC8vIENvb2tpZXMgb25seSB3b3JrIGluIHRoZSBicm93c2VyXG4gIGlmICghSVNfTk9ERSkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQuc2VyaWFsaXplKG5hbWUsIF9yYXdDb29raWVbbmFtZV0sIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNvb2tpZSkge1xuICAgIF9yZXMuY29va2llKG5hbWUsIHZhbCwgb3B0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUobmFtZSwgb3B0KSB7XG4gIGRlbGV0ZSBfcmF3Q29va2llW25hbWVdO1xuXG4gIGlmICh0eXBlb2Ygb3B0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdCA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIGZ1dHVyZSB2ZXJzaW9uc1xuICAgIG9wdCA9IHsgcGF0aDogb3B0IH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUHJldmVudCBtdXRhdGlvbiBvZiBvcHQgYmVsb3dcbiAgICBvcHQgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG9wdCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSk7XG4gICAgb3B0Lm1heEFnZSA9IDA7XG4gICAgZG9jdW1lbnQuY29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5zZXJpYWxpemUobmFtZSwgJycsIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNsZWFyQ29va2llKSB7XG4gICAgX3Jlcy5jbGVhckNvb2tpZShuYW1lLCBvcHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFJhd0Nvb2tpZShyYXdDb29raWUpIHtcbiAgaWYgKHJhd0Nvb2tpZSkge1xuICAgIF9yYXdDb29raWUgPSBfY29va2llMi5kZWZhdWx0LnBhcnNlKHJhd0Nvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsdWdUb1JlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5jb29raWUpIHtcbiAgICBfcmF3Q29va2llID0gcmVxLmNvb2tpZTtcbiAgfSBlbHNlIGlmIChyZXEuY29va2llcykge1xuICAgIF9yYXdDb29raWUgPSByZXEuY29va2llcztcbiAgfSBlbHNlIGlmIChyZXEuaGVhZGVycyAmJiByZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICBzZXRSYXdDb29raWUocmVxLmhlYWRlcnMuY29va2llKTtcbiAgfSBlbHNlIHtcbiAgICBfcmF3Q29va2llID0ge307XG4gIH1cblxuICBfcmVzID0gcmVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiB1bnBsdWcoKSB7XG4gICAgX3JlcyA9IG51bGw7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNldFJhd0Nvb2tpZTogc2V0UmF3Q29va2llLFxuICBsb2FkOiBsb2FkLFxuICBsb2FkQWxsOiBsb2FkQWxsLFxuICBzZWxlY3Q6IHNlbGVjdCxcbiAgc2F2ZTogc2F2ZSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIHBsdWdUb1JlcXVlc3Q6IHBsdWdUb1JlcXVlc3Rcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==