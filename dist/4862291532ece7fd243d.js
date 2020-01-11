(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.qrcode.react"],{

/***/ "./node_modules/qrcode.react/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode.react/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"); // qr.js doesn't handle error level of zero (M) so we need to do it right,
// thus the deep require.


var QRCodeImpl = __webpack_require__(/*! qr.js/lib/QRCode */ "./node_modules/qr.js/lib/QRCode.js");

var ErrorCorrectLevel = __webpack_require__(/*! qr.js/lib/ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js"); // Convert from UTF-16, forcing the use of byte-mode encoding in our QR Code.
// This allows us to encode Hanji, Kanji, emoji, etc. Ideally we'd do more
// detection and not resort to byte-mode if possible, but we're trading off
// a smaller library for a smaller amount of data we can potentially encode.
// Based on http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/


function convertStr(str) {
  var out = '';

  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);

    if (charcode < 0x0080) {
      out += String.fromCharCode(charcode);
    } else if (charcode < 0x0800) {
      out += String.fromCharCode(0xc0 | charcode >> 6);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      out += String.fromCharCode(0xe0 | charcode >> 12);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else {
      // This is a surrogate pair, so we'll reconsitute the pieces and work
      // from that
      i++;
      charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      out += String.fromCharCode(0xf0 | charcode >> 18);
      out += String.fromCharCode(0x80 | charcode >> 12 & 0x3f);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    }
  }

  return out;
}

var DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false
};
var PROP_TYPES = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  includeMargin: PropTypes.bool
};
var MARGIN_SIZE = 4;

function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      } // end of row, clean up or skip


      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return;
        }

        if (start === null) {
          // Just a single dark module.
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          // Otherwise finish the current line.
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }

        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
} // For canvas we're going to switch our drawing mode based on whether or not
// the environment supports Path2D. We only need the constructor to be
// supported, but Edge doesn't actually support the path (string) type
// argument. Luckily it also doesn't support the addPath() method. We can
// treat that as the same thing.


var SUPPORTS_PATH2D = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }

  return true;
}();

var QRCodeCanvas =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(QRCodeCanvas, _React$PureComponent);

  function QRCodeCanvas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QRCodeCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QRCodeCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_canvas", void 0);

    return _this;
  }

  _createClass(QRCodeCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$props = this.props,
          value = _this$props.value,
          size = _this$props.size,
          level = _this$props.level,
          bgColor = _this$props.bgColor,
          fgColor = _this$props.fgColor,
          includeMargin = _this$props.includeMargin; // We'll use type===-1 to force QRCode to automatically pick the best type

      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();

      if (this._canvas != null) {
        var canvas = this._canvas;
        var ctx = canvas.getContext('2d');

        if (!ctx) {
          return;
        }

        var cells = qrcode.modules;

        if (cells === null) {
          return;
        }

        var margin = includeMargin ? MARGIN_SIZE : 0;
        var numCells = cells.length + margin * 2; // We're going to scale this so that the number of drawable units
        // matches the number of cells. This avoids rounding issues, but does
        // result in some potentially unwanted single pixel issues between
        // blocks, only in environments that don't support Path2D.

        var pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        var scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale); // Draw solid background, only paint dark modules.

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;

        if (SUPPORTS_PATH2D) {
          // $FlowFixMe: Path2D c'tor doesn't support args yet.
          ctx.fill(new Path2D(generatePath(cells, margin)));
        } else {
          cells.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          value = _this$props2.value,
          size = _this$props2.size,
          level = _this$props2.level,
          bgColor = _this$props2.bgColor,
          fgColor = _this$props2.fgColor,
          style = _this$props2.style,
          includeMargin = _this$props2.includeMargin,
          otherProps = _objectWithoutProperties(_this$props2, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin"]);

      var canvasStyle = _objectSpread({
        height: size,
        width: size
      }, style);

      return React.createElement("canvas", _extends({
        style: canvasStyle,
        height: size,
        width: size,
        ref: function ref(_ref) {
          return _this2._canvas = _ref;
        }
      }, otherProps));
    }
  }]);

  return QRCodeCanvas;
}(React.PureComponent);

_defineProperty(QRCodeCanvas, "defaultProps", DEFAULT_PROPS);

_defineProperty(QRCodeCanvas, "propTypes", PROP_TYPES);

var QRCodeSVG =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(QRCodeSVG, _React$PureComponent2);

  function QRCodeSVG() {
    _classCallCheck(this, QRCodeSVG);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRCodeSVG).apply(this, arguments));
  }

  _createClass(QRCodeSVG, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          level = _this$props3.level,
          bgColor = _this$props3.bgColor,
          fgColor = _this$props3.fgColor,
          includeMargin = _this$props3.includeMargin,
          otherProps = _objectWithoutProperties(_this$props3, ["value", "size", "level", "bgColor", "fgColor", "includeMargin"]); // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();
      var cells = qrcode.modules;

      if (cells === null) {
        return null;
      }

      var margin = includeMargin ? MARGIN_SIZE : 0; // Drawing strategy: instead of a rect per module, we're going to create a
      // single path for the dark modules and layer that on top of a light rect,
      // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
      // way faster than DOM ops.
      // For level 1, 441 nodes -> 2
      // For level 40, 31329 -> 2

      var fgPath = generatePath(cells, margin);
      var numCells = cells.length + margin * 2;
      return React.createElement("svg", _extends({
        shapeRendering: "crispEdges",
        height: size,
        width: size,
        viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
      }, otherProps), React.createElement("path", {
        fill: bgColor,
        d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
      }), React.createElement("path", {
        fill: fgColor,
        d: fgPath
      }));
    }
  }]);

  return QRCodeSVG;
}(React.PureComponent);

_defineProperty(QRCodeSVG, "defaultProps", DEFAULT_PROPS);

_defineProperty(QRCodeSVG, "propTypes", PROP_TYPES);

var QRCode = function QRCode(props) {
  var renderAs = props.renderAs,
      otherProps = _objectWithoutProperties(props, ["renderAs"]);

  var Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
  return React.createElement(Component, otherProps);
};

QRCode.defaultProps = _objectSpread({
  renderAs: 'canvas'
}, DEFAULT_PROPS);
module.exports = QRCode;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXJjb2RlLnJlYWN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRTNULGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELG1DQUFtQywwREFBMEQsc0ZBQXNGLGdFQUFnRSxFQUFFLEdBQUcsRUFBRSxpQ0FBaUMsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRS9kLHFEQUFxRCwrQkFBK0IsOERBQThELFlBQVksb0NBQW9DLDZEQUE2RCxZQUFZLDZCQUE2QixPQUFPLDJCQUEyQiwwQ0FBMEMsd0VBQXdFLDJCQUEyQixFQUFFLEVBQUUsZUFBZTs7QUFFMWUsMERBQTBELCtCQUErQixpQkFBaUIsc0NBQXNDLFlBQVksWUFBWSx1QkFBdUIsT0FBTyxxQkFBcUIsMENBQTBDLDJCQUEyQixFQUFFLGVBQWU7O0FBRWpULGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FB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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHdCIiwiZmlsZSI6IjQ4NjIyOTE1MzJlY2U3ZmQyNDNkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpOyAvLyBxci5qcyBkb2Vzbid0IGhhbmRsZSBlcnJvciBsZXZlbCBvZiB6ZXJvIChNKSBzbyB3ZSBuZWVkIHRvIGRvIGl0IHJpZ2h0LFxuLy8gdGh1cyB0aGUgZGVlcCByZXF1aXJlLlxuXG5cbnZhciBRUkNvZGVJbXBsID0gcmVxdWlyZSgncXIuanMvbGliL1FSQ29kZScpO1xuXG52YXIgRXJyb3JDb3JyZWN0TGV2ZWwgPSByZXF1aXJlKCdxci5qcy9saWIvRXJyb3JDb3JyZWN0TGV2ZWwnKTsgLy8gQ29udmVydCBmcm9tIFVURi0xNiwgZm9yY2luZyB0aGUgdXNlIG9mIGJ5dGUtbW9kZSBlbmNvZGluZyBpbiBvdXIgUVIgQ29kZS5cbi8vIFRoaXMgYWxsb3dzIHVzIHRvIGVuY29kZSBIYW5qaSwgS2FuamksIGVtb2ppLCBldGMuIElkZWFsbHkgd2UnZCBkbyBtb3JlXG4vLyBkZXRlY3Rpb24gYW5kIG5vdCByZXNvcnQgdG8gYnl0ZS1tb2RlIGlmIHBvc3NpYmxlLCBidXQgd2UncmUgdHJhZGluZyBvZmZcbi8vIGEgc21hbGxlciBsaWJyYXJ5IGZvciBhIHNtYWxsZXIgYW1vdW50IG9mIGRhdGEgd2UgY2FuIHBvdGVudGlhbGx5IGVuY29kZS5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9qb25pc2Fsb25lbi5jb20vMjAxMi9mcm9tLXV0Zi0xNi10by11dGYtOC1pbi1qYXZhc2NyaXB0L1xuXG5cbmZ1bmN0aW9uIGNvbnZlcnRTdHIoc3RyKSB7XG4gIHZhciBvdXQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGFyY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGNoYXJjb2RlIDwgMHgwMDgwKSB7XG4gICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyY29kZSk7XG4gICAgfSBlbHNlIGlmIChjaGFyY29kZSA8IDB4MDgwMCkge1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhjMCB8IGNoYXJjb2RlID4+IDYpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlICYgMHgzZik7XG4gICAgfSBlbHNlIGlmIChjaGFyY29kZSA8IDB4ZDgwMCB8fCBjaGFyY29kZSA+PSAweGUwMDApIHtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTAgfCBjaGFyY29kZSA+PiAxMik7XG4gICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDgwIHwgY2hhcmNvZGUgPj4gNiAmIDB4M2YpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlICYgMHgzZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBzdXJyb2dhdGUgcGFpciwgc28gd2UnbGwgcmVjb25zaXR1dGUgdGhlIHBpZWNlcyBhbmQgd29ya1xuICAgICAgLy8gZnJvbSB0aGF0XG4gICAgICBpKys7XG4gICAgICBjaGFyY29kZSA9IDB4MTAwMDAgKyAoKGNoYXJjb2RlICYgMHgzZmYpIDw8IDEwIHwgc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNmZik7XG4gICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwIHwgY2hhcmNvZGUgPj4gMTgpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlID4+IDEyICYgMHgzZik7XG4gICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDgwIHwgY2hhcmNvZGUgPj4gNiAmIDB4M2YpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlICYgMHgzZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxudmFyIERFRkFVTFRfUFJPUFMgPSB7XG4gIHNpemU6IDEyOCxcbiAgbGV2ZWw6ICdMJyxcbiAgYmdDb2xvcjogJyNGRkZGRkYnLFxuICBmZ0NvbG9yOiAnIzAwMDAwMCcsXG4gIGluY2x1ZGVNYXJnaW46IGZhbHNlXG59O1xudmFyIFBST1BfVFlQRVMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxldmVsOiBQcm9wVHlwZXMub25lT2YoWydMJywgJ00nLCAnUScsICdIJ10pLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmZ0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlTWFyZ2luOiBQcm9wVHlwZXMuYm9vbFxufTtcbnZhciBNQVJHSU5fU0laRSA9IDQ7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChtb2R1bGVzKSB7XG4gIHZhciBtYXJnaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBvcHMgPSBbXTtcbiAgbW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHkpIHtcbiAgICB2YXIgc3RhcnQgPSBudWxsO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCB4KSB7XG4gICAgICBpZiAoIWNlbGwgJiYgc3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTTAgMGg3djFIMHogaW5qZWN0cyB0aGUgc3BhY2Ugd2l0aCB0aGUgbW92ZSBhbmQgZHJvcHMgdGhlIGNvbW1hLFxuICAgICAgICAvLyBzYXZpbmcgYSBjaGFyIHBlciBvcGVyYXRpb25cbiAgICAgICAgb3BzLnB1c2goXCJNXCIuY29uY2F0KHN0YXJ0ICsgbWFyZ2luLCBcIiBcIikuY29uY2F0KHkgKyBtYXJnaW4sIFwiaFwiKS5jb25jYXQoeCAtIHN0YXJ0LCBcInYxSFwiKS5jb25jYXQoc3RhcnQgKyBtYXJnaW4sIFwielwiKSk7XG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBlbmQgb2Ygcm93LCBjbGVhbiB1cCBvciBza2lwXG5cblxuICAgICAgaWYgKHggPT09IHJvdy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICghY2VsbCkge1xuICAgICAgICAgIC8vIFdlIHdvdWxkIGhhdmUgY2xvc2VkIHRoZSBvcCBhYm92ZSBhbHJlYWR5IHNvIHRoaXMgY2FuIG9ubHkgbWVhblxuICAgICAgICAgIC8vIDIrIGxpZ2h0IG1vZHVsZXMgaW4gYSByb3cuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gSnVzdCBhIHNpbmdsZSBkYXJrIG1vZHVsZS5cbiAgICAgICAgICBvcHMucHVzaChcIk1cIi5jb25jYXQoeCArIG1hcmdpbiwgXCIsXCIpLmNvbmNhdCh5ICsgbWFyZ2luLCBcIiBoMXYxSFwiKS5jb25jYXQoeCArIG1hcmdpbiwgXCJ6XCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgZmluaXNoIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgb3BzLnB1c2goXCJNXCIuY29uY2F0KHN0YXJ0ICsgbWFyZ2luLCBcIixcIikuY29uY2F0KHkgKyBtYXJnaW4sIFwiIGhcIikuY29uY2F0KHggKyAxIC0gc3RhcnQsIFwidjFIXCIpLmNvbmNhdChzdGFydCArIG1hcmdpbiwgXCJ6XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNlbGwgJiYgc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnQgPSB4O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9wcy5qb2luKCcnKTtcbn0gLy8gRm9yIGNhbnZhcyB3ZSdyZSBnb2luZyB0byBzd2l0Y2ggb3VyIGRyYXdpbmcgbW9kZSBiYXNlZCBvbiB3aGV0aGVyIG9yIG5vdFxuLy8gdGhlIGVudmlyb25tZW50IHN1cHBvcnRzIFBhdGgyRC4gV2Ugb25seSBuZWVkIHRoZSBjb25zdHJ1Y3RvciB0byBiZVxuLy8gc3VwcG9ydGVkLCBidXQgRWRnZSBkb2Vzbid0IGFjdHVhbGx5IHN1cHBvcnQgdGhlIHBhdGggKHN0cmluZykgdHlwZVxuLy8gYXJndW1lbnQuIEx1Y2tpbHkgaXQgYWxzbyBkb2Vzbid0IHN1cHBvcnQgdGhlIGFkZFBhdGgoKSBtZXRob2QuIFdlIGNhblxuLy8gdHJlYXQgdGhhdCBhcyB0aGUgc2FtZSB0aGluZy5cblxuXG52YXIgU1VQUE9SVFNfUEFUSDJEID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIG5ldyBQYXRoMkQoKS5hZGRQYXRoKG5ldyBQYXRoMkQoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0oKTtcblxudmFyIFFSQ29kZUNhbnZhcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFFSQ29kZUNhbnZhcywgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFFSQ29kZUNhbnZhcygpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRUkNvZGVDYW52YXMpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoUVJDb2RlQ2FudmFzKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2NhbnZhc1wiLCB2b2lkIDApO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFFSQ29kZUNhbnZhcywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMuc2l6ZSxcbiAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgIGJnQ29sb3IgPSBfdGhpcyRwcm9wcy5iZ0NvbG9yLFxuICAgICAgICAgIGZnQ29sb3IgPSBfdGhpcyRwcm9wcy5mZ0NvbG9yLFxuICAgICAgICAgIGluY2x1ZGVNYXJnaW4gPSBfdGhpcyRwcm9wcy5pbmNsdWRlTWFyZ2luOyAvLyBXZSdsbCB1c2UgdHlwZT09PS0xIHRvIGZvcmNlIFFSQ29kZSB0byBhdXRvbWF0aWNhbGx5IHBpY2sgdGhlIGJlc3QgdHlwZVxuXG4gICAgICB2YXIgcXJjb2RlID0gbmV3IFFSQ29kZUltcGwoLTEsIEVycm9yQ29ycmVjdExldmVsW2xldmVsXSk7XG4gICAgICBxcmNvZGUuYWRkRGF0YShjb252ZXJ0U3RyKHZhbHVlKSk7XG4gICAgICBxcmNvZGUubWFrZSgpO1xuXG4gICAgICBpZiAodGhpcy5fY2FudmFzICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuX2NhbnZhcztcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGlmICghY3R4KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNlbGxzID0gcXJjb2RlLm1vZHVsZXM7XG5cbiAgICAgICAgaWYgKGNlbGxzID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7XG4gICAgICAgIHZhciBudW1DZWxscyA9IGNlbGxzLmxlbmd0aCArIG1hcmdpbiAqIDI7IC8vIFdlJ3JlIGdvaW5nIHRvIHNjYWxlIHRoaXMgc28gdGhhdCB0aGUgbnVtYmVyIG9mIGRyYXdhYmxlIHVuaXRzXG4gICAgICAgIC8vIG1hdGNoZXMgdGhlIG51bWJlciBvZiBjZWxscy4gVGhpcyBhdm9pZHMgcm91bmRpbmcgaXNzdWVzLCBidXQgZG9lc1xuICAgICAgICAvLyByZXN1bHQgaW4gc29tZSBwb3RlbnRpYWxseSB1bndhbnRlZCBzaW5nbGUgcGl4ZWwgaXNzdWVzIGJldHdlZW5cbiAgICAgICAgLy8gYmxvY2tzLCBvbmx5IGluIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnQgUGF0aDJELlxuXG4gICAgICAgIHZhciBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy53aWR0aCA9IHNpemUgKiBwaXhlbFJhdGlvO1xuICAgICAgICB2YXIgc2NhbGUgPSBzaXplIC8gbnVtQ2VsbHMgKiBwaXhlbFJhdGlvO1xuICAgICAgICBjdHguc2NhbGUoc2NhbGUsIHNjYWxlKTsgLy8gRHJhdyBzb2xpZCBiYWNrZ3JvdW5kLCBvbmx5IHBhaW50IGRhcmsgbW9kdWxlcy5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdDb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIG51bUNlbGxzLCBudW1DZWxscyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBmZ0NvbG9yO1xuXG4gICAgICAgIGlmIChTVVBQT1JUU19QQVRIMkQpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lOiBQYXRoMkQgYyd0b3IgZG9lc24ndCBzdXBwb3J0IGFyZ3MgeWV0LlxuICAgICAgICAgIGN0eC5maWxsKG5ldyBQYXRoMkQoZ2VuZXJhdGVQYXRoKGNlbGxzLCBtYXJnaW4pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbHMuZm9yRWFjaChmdW5jdGlvbiAocm93LCByZHgpIHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBjZHgpIHtcbiAgICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY2R4ICsgbWFyZ2luLCByZHggKyBtYXJnaW4sIDEsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMyLnZhbHVlLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczIuc2l6ZSxcbiAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzMi5sZXZlbCxcbiAgICAgICAgICBiZ0NvbG9yID0gX3RoaXMkcHJvcHMyLmJnQ29sb3IsXG4gICAgICAgICAgZmdDb2xvciA9IF90aGlzJHByb3BzMi5mZ0NvbG9yLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIGluY2x1ZGVNYXJnaW4gPSBfdGhpcyRwcm9wczIuaW5jbHVkZU1hcmdpbixcbiAgICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1widmFsdWVcIiwgXCJzaXplXCIsIFwibGV2ZWxcIiwgXCJiZ0NvbG9yXCIsIFwiZmdDb2xvclwiLCBcInN0eWxlXCIsIFwiaW5jbHVkZU1hcmdpblwiXSk7XG5cbiAgICAgIHZhciBjYW52YXNTdHlsZSA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHdpZHRoOiBzaXplXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIF9leHRlbmRzKHtcbiAgICAgICAgc3R5bGU6IGNhbnZhc1N0eWxlLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fY2FudmFzID0gX3JlZjtcbiAgICAgICAgfVxuICAgICAgfSwgb3RoZXJQcm9wcykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRUkNvZGVDYW52YXM7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoUVJDb2RlQ2FudmFzLCBcImRlZmF1bHRQcm9wc1wiLCBERUZBVUxUX1BST1BTKTtcblxuX2RlZmluZVByb3BlcnR5KFFSQ29kZUNhbnZhcywgXCJwcm9wVHlwZXNcIiwgUFJPUF9UWVBFUyk7XG5cbnZhciBRUkNvZGVTVkcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoUVJDb2RlU1ZHLCBfUmVhY3QkUHVyZUNvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIFFSQ29kZVNWRygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUVJDb2RlU1ZHKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUVJDb2RlU1ZHKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhRUkNvZGVTVkcsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMy52YWx1ZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMzLnNpemUsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczMubGV2ZWwsXG4gICAgICAgICAgYmdDb2xvciA9IF90aGlzJHByb3BzMy5iZ0NvbG9yLFxuICAgICAgICAgIGZnQ29sb3IgPSBfdGhpcyRwcm9wczMuZmdDb2xvcixcbiAgICAgICAgICBpbmNsdWRlTWFyZ2luID0gX3RoaXMkcHJvcHMzLmluY2x1ZGVNYXJnaW4sXG4gICAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczMsIFtcInZhbHVlXCIsIFwic2l6ZVwiLCBcImxldmVsXCIsIFwiYmdDb2xvclwiLCBcImZnQ29sb3JcIiwgXCJpbmNsdWRlTWFyZ2luXCJdKTsgLy8gV2UnbGwgdXNlIHR5cGU9PT0tMSB0byBmb3JjZSBRUkNvZGUgdG8gYXV0b21hdGljYWxseSBwaWNrIHRoZSBiZXN0IHR5cGVcblxuXG4gICAgICB2YXIgcXJjb2RlID0gbmV3IFFSQ29kZUltcGwoLTEsIEVycm9yQ29ycmVjdExldmVsW2xldmVsXSk7XG4gICAgICBxcmNvZGUuYWRkRGF0YShjb252ZXJ0U3RyKHZhbHVlKSk7XG4gICAgICBxcmNvZGUubWFrZSgpO1xuICAgICAgdmFyIGNlbGxzID0gcXJjb2RlLm1vZHVsZXM7XG5cbiAgICAgIGlmIChjZWxscyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7IC8vIERyYXdpbmcgc3RyYXRlZ3k6IGluc3RlYWQgb2YgYSByZWN0IHBlciBtb2R1bGUsIHdlJ3JlIGdvaW5nIHRvIGNyZWF0ZSBhXG4gICAgICAvLyBzaW5nbGUgcGF0aCBmb3IgdGhlIGRhcmsgbW9kdWxlcyBhbmQgbGF5ZXIgdGhhdCBvbiB0b3Agb2YgYSBsaWdodCByZWN0LFxuICAgICAgLy8gZm9yIGEgdG90YWwgb2YgMiBET00gbm9kZXMuIFdlIHBheSBhIGJpdCBtb3JlIGluIHN0cmluZyBjb25jYXQgYnV0IHRoYXQnc1xuICAgICAgLy8gd2F5IGZhc3RlciB0aGFuIERPTSBvcHMuXG4gICAgICAvLyBGb3IgbGV2ZWwgMSwgNDQxIG5vZGVzIC0+IDJcbiAgICAgIC8vIEZvciBsZXZlbCA0MCwgMzEzMjkgLT4gMlxuXG4gICAgICB2YXIgZmdQYXRoID0gZ2VuZXJhdGVQYXRoKGNlbGxzLCBtYXJnaW4pO1xuICAgICAgdmFyIG51bUNlbGxzID0gY2VsbHMubGVuZ3RoICsgbWFyZ2luICogMjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICAgICAgc2hhcGVSZW5kZXJpbmc6IFwiY3Jpc3BFZGdlc1wiLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCBcIi5jb25jYXQobnVtQ2VsbHMsIFwiIFwiKS5jb25jYXQobnVtQ2VsbHMpXG4gICAgICB9LCBvdGhlclByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBmaWxsOiBiZ0NvbG9yLFxuICAgICAgICBkOiBcIk0wLDAgaFwiLmNvbmNhdChudW1DZWxscywgXCJ2XCIpLmNvbmNhdChudW1DZWxscywgXCJIMHpcIilcbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgIGZpbGw6IGZnQ29sb3IsXG4gICAgICAgIGQ6IGZnUGF0aFxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRUkNvZGVTVkc7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoUVJDb2RlU1ZHLCBcImRlZmF1bHRQcm9wc1wiLCBERUZBVUxUX1BST1BTKTtcblxuX2RlZmluZVByb3BlcnR5KFFSQ29kZVNWRywgXCJwcm9wVHlwZXNcIiwgUFJPUF9UWVBFUyk7XG5cbnZhciBRUkNvZGUgPSBmdW5jdGlvbiBRUkNvZGUocHJvcHMpIHtcbiAgdmFyIHJlbmRlckFzID0gcHJvcHMucmVuZGVyQXMsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJyZW5kZXJBc1wiXSk7XG5cbiAgdmFyIENvbXBvbmVudCA9IHJlbmRlckFzID09PSAnc3ZnJyA/IFFSQ29kZVNWRyA6IFFSQ29kZUNhbnZhcztcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBvdGhlclByb3BzKTtcbn07XG5cblFSQ29kZS5kZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgcmVuZGVyQXM6ICdjYW52YXMnXG59LCBERUZBVUxUX1BST1BTKTtcbm1vZHVsZS5leHBvcnRzID0gUVJDb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=