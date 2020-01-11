(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[6],{

/***/ "./src/common/Checkerboard.tsx":
/*!*************************************!*\
  !*** ./src/common/Checkerboard.tsx ***!
  \*************************************/
/*! exports provided: Checkerboard, algebraicToCartesian, cartesianToAlgebraic, applyInvertion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkerboard", function() { return Checkerboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "algebraicToCartesian", function() { return algebraicToCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianToAlgebraic", function() { return cartesianToAlgebraic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyInvertion", function() { return applyInvertion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/ui */ "./node_modules/@freeboardgame.org/boardgame.io/ui.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


/**
 * Checkerboard
 *
 * Component that will show a configurable checker board for games like
 * chess, checkers and others. The vertical columns of squares are labeled
 * with letters from a to z, while the rows are labeled with numbers, starting
 * with 1.
 *
 * Props:
 *   onClick - On Click Callback, (row, col) of the square passed as argument.
 *   primaryColor - Primary color, #d18b47 by default.
 *   secondaryColor - Secondary color, #ffce9e by default.
 *   colorMap - Object of object having cell names as key and colors as values.
 *   Ex: { 'c5': 'red' } colors cells c5 with red.
 *
 * Usage:
 *
 * <Checkerboard>
 *   <Token square={'c5'}>
 *     <Knight color='dark' />
 *   </Token>
 * </Checkerboard>
 */

var NUM_COLS = 8;
var NUM_ROWS = 8;
var Checkerboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkerboard, _React$Component);

  function Checkerboard() {
    var _this;

    _classCallCheck(this, Checkerboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkerboard).apply(this, arguments));
    _this._onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Checkerboard, [{
    key: "onClick",
    value: function onClick(coords) {
      var x = coords.x,
          y = coords.y;
      this.props.onClick({
        square: cartesianToAlgebraic(x, y, this.props.invert)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Convert the square="" prop to x and y.
      var tokens = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child) {
        if (child.props.square) {
          var square = child.props.square;

          var _algebraicToCartesian = algebraicToCartesian(square, _this2.props.invert),
              x = _algebraicToCartesian.x,
              y = _algebraicToCartesian.y;

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
            x: x,
            y: y
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, applyInvertion({
            x: child.props.x,
            y: child.props.y
          }, _this2.props.invert));
        }
      }); // Build colorMap with checkerboard pattern.

      var colorMap = {};

      for (var x = 0; x < NUM_COLS; x++) {
        for (var y = 0; y < NUM_ROWS; y++) {
          var key = "".concat(x, ",").concat(y);
          var color = this.props.secondaryColor;

          if ((x + y) % 2 === 0) {
            color = this.props.primaryColor;
          }

          colorMap[key] = color;
        }
      } // Add highlighted squares.


      for (var _i = 0, _Object$keys = Object.keys(this.props.highlightedSquares); _i < _Object$keys.length; _i++) {
        var square = _Object$keys[_i];

        var _algebraicToCartesian2 = algebraicToCartesian(square, this.props.invert),
            _x = _algebraicToCartesian2.x,
            _y = _algebraicToCartesian2.y;

        var _key = "".concat(_x, ",").concat(_y);

        colorMap[_key] = this.props.highlightedSquares[square];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        rows: NUM_ROWS,
        cols: NUM_COLS,
        style: this.props.style,
        onClick: this._onClick,
        colorMap: colorMap
      }, tokens);
    }
  }]);

  return Checkerboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Checkerboard.defaultProps = {
  invert: false,
  primaryColor: '#ffce9e',
  secondaryColor: '#d18b47',
  highlightedSquares: {},
  style: {}
};
/**
 * Given an algebraic notation, returns x and y values.
 * Example: A1 returns { x: 0, y: 0 }
 */

function algebraicToCartesian(square, invert) {
  var regexp = /([A-Za-z])([0-9]+)/g;
  var match = regexp.exec(square);

  if (match == null) {
    throw Error('Invalid square provided: ' + square);
  }

  var colSymbol = match[1].toLowerCase();
  var col = colSymbol.charCodeAt(0) - 'a'.charCodeAt(0);
  var row = parseInt(match[2], 10);

  if (invert) {
    return {
      x: NUM_COLS - col - 1,
      y: row - 1
    };
  } else {
    return {
      x: col,
      y: NUM_ROWS - row
    };
  }
}
/**
 * Given an x and y values, returns algebraic notation.
 * Example: 0, 0 returns A1
 */

function cartesianToAlgebraic(x, y, invert) {
  if (invert) {
    var colSymbol = String.fromCharCode(NUM_COLS - x - 1 + 'a'.charCodeAt(0));
    return colSymbol + (y + 1);
  } else {
    var _colSymbol = String.fromCharCode(x + 'a'.charCodeAt(0));

    return _colSymbol + (NUM_ROWS - y);
  }
}
function applyInvertion(coord, invert) {
  if (invert) {
    return {
      x: NUM_COLS - coord.x - 1,
      y: NUM_ROWS - coord.y - 1
    };
  }

  return coord;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NoZWNrZXJib2FyZC50c3giXSwibmFtZXMiOlsiTlVNX0NPTFMiLCJOVU1fUk9XUyIsIkNoZWNrZXJib2FyZCIsImFyZ3VtZW50cyIsIl9vbkNsaWNrIiwib25DbGljayIsImJpbmQiLCJjb29yZHMiLCJ4IiwieSIsInByb3BzIiwic3F1YXJlIiwiY2FydGVzaWFuVG9BbGdlYnJhaWMiLCJpbnZlcnQiLCJ0b2tlbnMiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJjaGlsZCIsImFsZ2VicmFpY1RvQ2FydGVzaWFuIiwiY2xvbmVFbGVtZW50IiwiYXBwbHlJbnZlcnRpb24iLCJjb2xvck1hcCIsImtleSIsImNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJPYmplY3QiLCJrZXlzIiwiaGlnaGxpZ2h0ZWRTcXVhcmVzIiwiY3JlYXRlRWxlbWVudCIsIkdyaWQiLCJyb3dzIiwiY29scyIsInN0eWxlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmVnZXhwIiwibWF0Y2giLCJleGVjIiwiRXJyb3IiLCJjb2xTeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImNvbCIsImNoYXJDb2RlQXQiLCJyb3ciLCJwYXJzZUludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNvb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFNQSxRQUFRLEdBQUcsQ0FBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBakI7QUFDTyxJQUFNQyxZQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsdUZBQVNDLFNBQVQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtDLE9BQUwsQ0FBYUMsSUFBYiwrQkFBaEI7QUFG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QXlCbkMsT0FBQyxFQUFFcUMsR0FBRyxHQUFHO0FBQWxDLEtBQVA7QUFDSCxHQUZELE1BR0s7QUFDRCxXQUFPO0FBQUV0QyxPQUFDLEVBQUVvQyxHQUFMO0FBQVVuQyxPQUFDLEVBQUVSLFFBQVEsR0FBRzZDO0FBQXhCLEtBQVA7QUFDSDtBQUNKO0FBQ0Q7Ozs7O0FBSU8sU0FBU2xDLG9CQUFULENBQThCSixDQUE5QixFQUFpQ0MsQ0FBakMsRUFBb0NJLE1BQXBDLEVBQTRDO0FBQy9DLE1BQUlBLE1BQUosRUFBWTtBQUNSLFFBQU02QixTQUFTLEdBQUdNLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmpELFFBQVEsR0FBR1EsQ0FBWCxHQUFlLENBQWYsR0FBbUIsSUFBSXFDLFVBQUosQ0FBZSxDQUFmLENBQXZDLENBQWxCO0FBQ0EsV0FBT0gsU0FBUyxJQUFJakMsQ0FBQyxHQUFHLENBQVIsQ0FBaEI7QUFDSCxHQUhELE1BSUs7QUFDRCxRQUFNaUMsVUFBUyxHQUFHTSxNQUFNLENBQUNDLFlBQVAsQ0FBb0J6QyxDQUFDLEdBQUcsSUFBSXFDLFVBQUosQ0FBZSxDQUFmLENBQXhCLENBQWxCOztBQUNBLFdBQU9ILFVBQVMsSUFBSXpDLFFBQVEsR0FBR1EsQ0FBZixDQUFoQjtBQUNIO0FBQ0o7QUFDTSxTQUFTYSxjQUFULENBQXdCNEIsS0FBeEIsRUFBK0JyQyxNQUEvQixFQUF1QztBQUMxQyxNQUFJQSxNQUFKLEVBQVk7QUFDUixXQUFPO0FBQUVMLE9BQUMsRUFBRVIsUUFBUSxHQUFHa0QsS0FBSyxDQUFDMUMsQ0FBakIsR0FBcUIsQ0FBMUI7QUFBNkJDLE9BQUMsRUFBRVIsUUFBUSxHQUFHaUQsS0FBSyxDQUFDekMsQ0FBakIsR0FBcUI7QUFBckQsS0FBUDtBQUNIOztBQUNELFNBQU95QyxLQUFQO0FBQ0gsQyIsImZpbGUiOiJjNGQ2NjI2ODQ2NGJkYWRlNDQzZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOCBUaGUgQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pbyBBdXRob3JzLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vdWknO1xuLyoqXG4gKiBDaGVja2VyYm9hcmRcbiAqXG4gKiBDb21wb25lbnQgdGhhdCB3aWxsIHNob3cgYSBjb25maWd1cmFibGUgY2hlY2tlciBib2FyZCBmb3IgZ2FtZXMgbGlrZVxuICogY2hlc3MsIGNoZWNrZXJzIGFuZCBvdGhlcnMuIFRoZSB2ZXJ0aWNhbCBjb2x1bW5zIG9mIHNxdWFyZXMgYXJlIGxhYmVsZWRcbiAqIHdpdGggbGV0dGVycyBmcm9tIGEgdG8geiwgd2hpbGUgdGhlIHJvd3MgYXJlIGxhYmVsZWQgd2l0aCBudW1iZXJzLCBzdGFydGluZ1xuICogd2l0aCAxLlxuICpcbiAqIFByb3BzOlxuICogICBvbkNsaWNrIC0gT24gQ2xpY2sgQ2FsbGJhY2ssIChyb3csIGNvbCkgb2YgdGhlIHNxdWFyZSBwYXNzZWQgYXMgYXJndW1lbnQuXG4gKiAgIHByaW1hcnlDb2xvciAtIFByaW1hcnkgY29sb3IsICNkMThiNDcgYnkgZGVmYXVsdC5cbiAqICAgc2Vjb25kYXJ5Q29sb3IgLSBTZWNvbmRhcnkgY29sb3IsICNmZmNlOWUgYnkgZGVmYXVsdC5cbiAqICAgY29sb3JNYXAgLSBPYmplY3Qgb2Ygb2JqZWN0IGhhdmluZyBjZWxsIG5hbWVzIGFzIGtleSBhbmQgY29sb3JzIGFzIHZhbHVlcy5cbiAqICAgRXg6IHsgJ2M1JzogJ3JlZCcgfSBjb2xvcnMgY2VsbHMgYzUgd2l0aCByZWQuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogPENoZWNrZXJib2FyZD5cbiAqICAgPFRva2VuIHNxdWFyZT17J2M1J30+XG4gKiAgICAgPEtuaWdodCBjb2xvcj0nZGFyaycgLz5cbiAqICAgPC9Ub2tlbj5cbiAqIDwvQ2hlY2tlcmJvYXJkPlxuICovXG5jb25zdCBOVU1fQ09MUyA9IDg7XG5jb25zdCBOVU1fUk9XUyA9IDg7XG5leHBvcnQgY2xhc3MgQ2hlY2tlcmJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fb25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBvbkNsaWNrKGNvb3Jkcykge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHsgc3F1YXJlOiBjYXJ0ZXNpYW5Ub0FsZ2VicmFpYyh4LCB5LCB0aGlzLnByb3BzLmludmVydCkgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3F1YXJlPVwiXCIgcHJvcCB0byB4IGFuZCB5LlxuICAgICAgICBjb25zdCB0b2tlbnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMuc3F1YXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gY2hpbGQucHJvcHMuc3F1YXJlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gYWxnZWJyYWljVG9DYXJ0ZXNpYW4oc3F1YXJlLCB0aGlzLnByb3BzLmludmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyB4LCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgYXBwbHlJbnZlcnRpb24oeyB4OiBjaGlsZC5wcm9wcy54LCB5OiBjaGlsZC5wcm9wcy55IH0sIHRoaXMucHJvcHMuaW52ZXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBCdWlsZCBjb2xvck1hcCB3aXRoIGNoZWNrZXJib2FyZCBwYXR0ZXJuLlxuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHt9O1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE5VTV9DT0xTOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTlVNX1JPV1M7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke3h9LCR7eX1gO1xuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuc2Vjb25kYXJ5Q29sb3I7XG4gICAgICAgICAgICAgICAgaWYgKCh4ICsgeSkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5wcm9wcy5wcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbG9yTWFwW2tleV0gPSBjb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaGlnaGxpZ2h0ZWQgc3F1YXJlcy5cbiAgICAgICAgZm9yIChjb25zdCBzcXVhcmUgb2YgT2JqZWN0LmtleXModGhpcy5wcm9wcy5oaWdobGlnaHRlZFNxdWFyZXMpKSB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGFsZ2VicmFpY1RvQ2FydGVzaWFuKHNxdWFyZSwgdGhpcy5wcm9wcy5pbnZlcnQpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0sJHt5fWA7XG4gICAgICAgICAgICBjb2xvck1hcFtrZXldID0gdGhpcy5wcm9wcy5oaWdobGlnaHRlZFNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyByb3dzOiBOVU1fUk9XUywgY29sczogTlVNX0NPTFMsIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLCBvbkNsaWNrOiB0aGlzLl9vbkNsaWNrLCBjb2xvck1hcDogY29sb3JNYXAgfSwgdG9rZW5zKSk7XG4gICAgfVxufVxuQ2hlY2tlcmJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnZlcnQ6IGZhbHNlLFxuICAgIHByaW1hcnlDb2xvcjogJyNmZmNlOWUnLFxuICAgIHNlY29uZGFyeUNvbG9yOiAnI2QxOGI0NycsXG4gICAgaGlnaGxpZ2h0ZWRTcXVhcmVzOiB7fSxcbiAgICBzdHlsZToge30sXG59O1xuLyoqXG4gKiBHaXZlbiBhbiBhbGdlYnJhaWMgbm90YXRpb24sIHJldHVybnMgeCBhbmQgeSB2YWx1ZXMuXG4gKiBFeGFtcGxlOiBBMSByZXR1cm5zIHsgeDogMCwgeTogMCB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGdlYnJhaWNUb0NhcnRlc2lhbihzcXVhcmUsIGludmVydCkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IC8oW0EtWmEtel0pKFswLTldKykvZztcbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4cC5leGVjKHNxdWFyZSk7XG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgc3F1YXJlIHByb3ZpZGVkOiAnICsgc3F1YXJlKTtcbiAgICB9XG4gICAgY29uc3QgY29sU3ltYm9sID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBjb2wgPSBjb2xTeW1ib2wuY2hhckNvZGVBdCgwKSAtICdhJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG4gICAgaWYgKGludmVydCkge1xuICAgICAgICByZXR1cm4geyB4OiBOVU1fQ09MUyAtIGNvbCAtIDEsIHk6IHJvdyAtIDEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHg6IGNvbCwgeTogTlVNX1JPV1MgLSByb3cgfTtcbiAgICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIHggYW5kIHkgdmFsdWVzLCByZXR1cm5zIGFsZ2VicmFpYyBub3RhdGlvbi5cbiAqIEV4YW1wbGU6IDAsIDAgcmV0dXJucyBBMVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FydGVzaWFuVG9BbGdlYnJhaWMoeCwgeSwgaW52ZXJ0KSB7XG4gICAgaWYgKGludmVydCkge1xuICAgICAgICBjb25zdCBjb2xTeW1ib2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE5VTV9DT0xTIC0geCAtIDEgKyAnYScuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgIHJldHVybiBjb2xTeW1ib2wgKyAoeSArIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY29sU3ltYm9sID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4ICsgJ2EnLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICByZXR1cm4gY29sU3ltYm9sICsgKE5VTV9ST1dTIC0geSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW52ZXJ0aW9uKGNvb3JkLCBpbnZlcnQpIHtcbiAgICBpZiAoaW52ZXJ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IE5VTV9DT0xTIC0gY29vcmQueCAtIDEsIHk6IE5VTV9ST1dTIC0gY29vcmQueSAtIDEgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==