(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.vfile"],{

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var replace = __webpack_require__(/*! replace-ext */ "./node_modules/replace-ext/index.js");
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js");
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/core.js");

module.exports = VFile;

var proto = VFile.prototype;

proto.message = message;
proto.info = info;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */
function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;

  this.messages.push(message);

  return message;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZpbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUFhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxxREFBTTtBQUN6QixjQUFjLG1CQUFPLENBQUMsd0RBQWE7QUFDbkMsYUFBYSxtQkFBTyxDQUFDLG9EQUFXOztBQUVoQzs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWU7QUFDZixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEthOztBQUViLGVBQWUsbUJBQU8sQ0FBQyw0REFBZTtBQUN0QyxZQUFZLG1CQUFPLENBQUMsK0NBQVc7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJmaWxlIjoiMmI0NjRhMzA3NjNlYTlhNWNiMmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHJlcGxhY2UgPSByZXF1aXJlKCdyZXBsYWNlLWV4dCcpO1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlO1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG52YXIgcHJvdG8gPSBWRmlsZS5wcm90b3R5cGU7XG5cbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5cbi8qIE9yZGVyIG9mIHNldHRpbmcgKGxlYXN0IHNwZWNpZmljIHRvIG1vc3QpLCB3ZSBuZWVkIHRoaXMgYmVjYXVzZVxuICogb3RoZXJ3aXNlIGB7c3RlbTogJ2EnLCBwYXRoOiAnfi9iLmpzJ31gIHdvdWxkIHRocm93LCBhcyBhIHBhdGhcbiAqIGlzIG5lZWRlZCBiZWZvcmUgYSBzdGVtIGNhbiBiZSBzZXQuICovXG52YXIgb3JkZXIgPSBbXG4gICdoaXN0b3J5JyxcbiAgJ3BhdGgnLFxuICAnYmFzZW5hbWUnLFxuICAnc3RlbScsXG4gICdleHRuYW1lJyxcbiAgJ2Rpcm5hbWUnXG5dO1xuXG4vKiBDb25zdHJ1Y3QgYSBuZXcgZmlsZS4gKi9cbmZ1bmN0aW9uIFZGaWxlKG9wdGlvbnMpIHtcbiAgdmFyIHByb3A7XG4gIHZhciBpbmRleDtcbiAgdmFyIGxlbmd0aDtcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7Y29udGVudHM6IG9wdGlvbnN9O1xuICB9IGVsc2UgaWYgKCdtZXNzYWdlJyBpbiBvcHRpb25zICYmICdtZXNzYWdlcycgaW4gb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZGaWxlKSkge1xuICAgIHJldHVybiBuZXcgVkZpbGUob3B0aW9ucyk7XG4gIH1cblxuICB0aGlzLmRhdGEgPSB7fTtcbiAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgdGhpcy5jd2QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4gIC8qIFNldCBwYXRoIHJlbGF0ZWQgcHJvcGVydGllcyBpbiB0aGUgY29ycmVjdCBvcmRlci4gKi9cbiAgaW5kZXggPSAtMTtcbiAgbGVuZ3RoID0gb3JkZXIubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJvcCA9IG9yZGVyW2luZGV4XTtcblxuICAgIGlmIChvd24uY2FsbChvcHRpb25zLCBwcm9wKSkge1xuICAgICAgdGhpc1twcm9wXSA9IG9wdGlvbnNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgLyogU2V0IG5vbi1wYXRoIHJlbGF0ZWQgcHJvcGVydGllcy4gKi9cbiAgZm9yIChwcm9wIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3JkZXIuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xuICAgIH1cbiAgfVxufVxuXG4vKiBBY2Nlc3MgZnVsbCBwYXRoIChgfi9pbmRleC5taW4uanNgKS4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3BhdGgnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHkocGF0aCwgJ3BhdGgnKTtcblxuICAgIGlmIChwYXRoICE9PSB0aGlzLnBhdGgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qIEFjY2VzcyBwYXJlbnQgcGF0aCAoYH5gKS4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2Rpcm5hbWUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZGlybmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChkaXJuYW1lKSB7XG4gICAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdkaXJuYW1lJyk7XG4gICAgdGhpcy5wYXRoID0gcGF0aC5qb2luKGRpcm5hbWUgfHwgJycsIHRoaXMuYmFzZW5hbWUpO1xuICB9XG59KTtcblxuLyogQWNjZXNzIGJhc2VuYW1lIChgaW5kZXgubWluLmpzYCkuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdiYXNlbmFtZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChiYXNlbmFtZSkge1xuICAgIGFzc2VydE5vbkVtcHR5KGJhc2VuYW1lLCAnYmFzZW5hbWUnKTtcbiAgICBhc3NlcnRQYXJ0KGJhc2VuYW1lLCAnYmFzZW5hbWUnKTtcbiAgICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBiYXNlbmFtZSk7XG4gIH1cbn0pO1xuXG4vKiBBY2Nlc3MgZXh0bmFtZSAoYC5qc2ApLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZXh0bmFtZScsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5leHRuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKGV4dG5hbWUpIHtcbiAgICB2YXIgZXh0ID0gZXh0bmFtZSB8fCAnJztcblxuICAgIGFzc2VydFBhcnQoZXh0LCAnZXh0bmFtZScpO1xuICAgIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZXh0bmFtZScpO1xuXG4gICAgaWYgKGV4dCkge1xuICAgICAgaWYgKGV4dC5jaGFyQXQoMCkgIT09ICcuJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBtdXN0IHN0YXJ0IHdpdGggYC5gJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChleHQuaW5kZXhPZignLicsIDEpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBjYW5ub3QgY29udGFpbiBtdWx0aXBsZSBkb3RzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoID0gcmVwbGFjZSh0aGlzLnBhdGgsIGV4dCk7XG4gIH1cbn0pO1xuXG4vKiBBY2Nlc3Mgc3RlbSAoYGluZGV4Lm1pbmApLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnc3RlbScsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgsIHRoaXMuZXh0bmFtZSkgOiB1bmRlZmluZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHN0ZW0pIHtcbiAgICBhc3NlcnROb25FbXB0eShzdGVtLCAnc3RlbScpO1xuICAgIGFzc2VydFBhcnQoc3RlbSwgJ3N0ZW0nKTtcbiAgICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBzdGVtICsgKHRoaXMuZXh0bmFtZSB8fCAnJykpO1xuICB9XG59KTtcblxuLyogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlsZS4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kaW5nKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuY29udGVudHMgfHwgJyc7XG4gIHJldHVybiBidWZmZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuLyogQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBhIHBhdGggKGkuZS4sIGRvZXNcbiAqIG5vdCBjb250YWluIGBwYXRoLnNlcGApLiAqL1xuZnVuY3Rpb24gYXNzZXJ0UGFydChwYXJ0LCBuYW1lKSB7XG4gIGlmIChwYXJ0LmluZGV4T2YocGF0aC5zZXApICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGEgcGF0aDogZGlkIG5vdCBleHBlY3QgYCcgKyBwYXRoLnNlcCArICdgJyk7XG4gIH1cbn1cblxuLyogQXNzZXJ0IHRoYXQgYHBhcnRgIGlzIG5vdCBlbXB0eS4gKi9cbmZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5KHBhcnQsIG5hbWUpIHtcbiAgaWYgKCFwYXJ0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgfVxufVxuXG4vKiBBc3NlcnQgYHBhdGhgIGV4aXN0cy4gKi9cbmZ1bmN0aW9uIGFzc2VydFBhdGgocGF0aCwgbmFtZSkge1xuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHRpbmcgYCcgKyBuYW1lICsgJ2AgcmVxdWlyZXMgYHBhdGhgIHRvIGJlIHNldCB0b28nKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVk1lc3NhZ2UgPSByZXF1aXJlKCd2ZmlsZS1tZXNzYWdlJyk7XG52YXIgVkZpbGUgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZTtcblxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlO1xuXG5wcm90by5tZXNzYWdlID0gbWVzc2FnZTtcbnByb3RvLmluZm8gPSBpbmZvO1xucHJvdG8uZmFpbCA9IGZhaWw7XG5cbi8qIFNsaWdodCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gIFJlbW92ZSBpbiB0aGUgZnV0dXJlLiAqL1xucHJvdG8ud2FybiA9IG1lc3NhZ2U7XG5cbi8qIENyZWF0ZSBhIG1lc3NhZ2Ugd2l0aCBgcmVhc29uYCBhdCBgcG9zaXRpb25gLlxuICogV2hlbiBhbiBlcnJvciBpcyBwYXNzZWQgaW4gYXMgYHJlYXNvbmAsIGNvcGllcyB0aGUgc3RhY2suICovXG5mdW5jdGlvbiBtZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgZmlsZVBhdGggPSB0aGlzLnBhdGg7XG4gIHZhciBtZXNzYWdlID0gbmV3IFZNZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbik7XG5cbiAgaWYgKGZpbGVQYXRoKSB7XG4gICAgbWVzc2FnZS5uYW1lID0gZmlsZVBhdGggKyAnOicgKyBtZXNzYWdlLm5hbWU7XG4gICAgbWVzc2FnZS5maWxlID0gZmlsZVBhdGg7XG4gIH1cblxuICBtZXNzYWdlLmZhdGFsID0gZmFsc2U7XG5cbiAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG4vKiBGYWlsLiBDcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSxcbiAqIGFuZCB0aHJvd3MgaXQuICovXG5mdW5jdGlvbiBmYWlsKCkge1xuICB2YXIgbWVzc2FnZSA9IHRoaXMubWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIG1lc3NhZ2UuZmF0YWwgPSB0cnVlO1xuXG4gIHRocm93IG1lc3NhZ2U7XG59XG5cbi8qIEluZm8uIENyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLFxuICogYW5kIG1hcmtzIHRoZSBmYXRhbGl0eSBhcyBudWxsLiAqL1xuZnVuY3Rpb24gaW5mbygpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBtZXNzYWdlLmZhdGFsID0gbnVsbDtcblxuICByZXR1cm4gbWVzc2FnZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=