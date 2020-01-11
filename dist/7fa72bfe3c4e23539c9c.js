(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Board.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/games/ninemensmorris/Board.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".GtfxFj5dUuz-ADAY6LPyj {\n  color: white;\n  text-align: center;\n}\n", ""]);
// Exports
exports.locals = {
	"Status": "GtfxFj5dUuz-ADAY6LPyj"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Field.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/games/ninemensmorris/Field.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._3rC69tFWgeFwY13IBMP36V {\r\n  transition: transform 0.5s;\r\n  animation: _2_3ivpIutupq7rRWGS7u3F 0.5s;\r\n}\r\n\r\n._1KPJmvJ_CZ7hSCitAxaG0j {\r\n  box-sizing: border-box;\r\n  margin-top: 10px;\r\n  padding: 0 10px;\r\n}\r\n\r\n@keyframes _2_3ivpIutupq7rRWGS7u3F {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n", ""]);
// Exports
exports.locals = {
	"Piece": "_3rC69tFWgeFwY13IBMP36V",
	"fadein": "_2_3ivpIutupq7rRWGS7u3F",
	"Field": "_1KPJmvJ_CZ7hSCitAxaG0j"
};

/***/ }),

/***/ "./src/games/ninemensmorris/Board.css":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/Board.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Board.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Board.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Board.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/games/ninemensmorris/Field.css":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/Field.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Field.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Field.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Field.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/ninemensmorris/Field.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/games/ninemensmorris/Field.tsx":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/Field.tsx ***!
  \********************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.css */ "./src/games/ninemensmorris/Field.css");
/* harmony import */ var _Field_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Field_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var COORDS = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
var CONNECTORS = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22];
var RADIUS = 10;
var PIECE_RADIUS = 25;
var SIZE = 500;
var DISTANCE = 0.3;
var Field =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    var _this;

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));

    _this._selectPoint = function (i) {
      return function () {
        return _this.props.selectPoint(i);
      };
    };

    return _this;
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        viewBox: "-250 -250 500 500",
        className: _Field_css__WEBPACK_IMPORTED_MODULE_1___default.a.Field,
        pointerEvents: "visible"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        strokeWidth: "4",
        stroke: "#cccccc"
      }, this.getLines()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        fill: "#cccccc"
      }, this.getCircles()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, this.getPieces()));
    }
  }, {
    key: "getPointsCoords",
    value: function getPointsCoords() {
      var result = [];

      var _loop = function _loop(i) {
        var multiplier = (SIZE / 2 - PIECE_RADIUS) * (1 - i * DISTANCE);
        COORDS.forEach(function (coord, j) {
          var cx = coord[0] * multiplier;
          var cy = coord[1] * multiplier;
          var key = 8 * i + j;
          result.push({
            cx: cx,
            cy: cy,
            key: key
          });
        });
      };

      for (var i = 0; i < 3; i++) {
        _loop(i);
      }

      return result;
    }
  }, {
    key: "getPieces",
    value: function getPieces() {
      var _this2 = this;

      var coords = this.getPointsCoords();
      return this.props.points.map(function (point, i) {
        if (point.piece === null) {
          return null;
        }

        var scale = i === _this2.props.selected ? 1.2 : 1;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          r: PIECE_RADIUS,
          key: point.piece.key,
          fill: point.piece.player === '0' ? 'white' : _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_2___default.a[500],
          onClick: _this2._selectPoint(i),
          className: "".concat(_Field_css__WEBPACK_IMPORTED_MODULE_1___default.a.Piece, " Piece"),
          style: {
            transform: "translate(".concat(coords[i].cx, "px, ").concat(coords[i].cy, "px) scale(").concat(scale, ")")
          }
        });
      });
    }
  }, {
    key: "getCircles",
    value: function getCircles() {
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.getPointsCoords()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p = _step.value;
          result.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
            cx: p.cx,
            cy: p.cy,
            r: RADIUS,
            key: p.key
          }));
          result.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
            cx: p.cx,
            cy: p.cy,
            r: PIECE_RADIUS,
            onClick: this._selectPoint(p.key),
            className: "ClickableCircle",
            key: "".concat(p.key, "clickable"),
            fill: "none"
          }));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }, {
    key: "getLines",
    value: function getLines() {
      var _this3 = this;

      var coords = this.getPointsCoords();
      return CONNECTORS.map(function (i) {
        return _this3.props.points[i].connections.map(function (connection) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
            x1: coords[i].cx,
            y1: coords[i].cy,
            x2: coords[connection].cx,
            y2: coords[connection].cy,
            key: i * 100 + connection
          });
        });
      });
    }
  }]);

  return Field;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/games/ninemensmorris/board.tsx":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/board.tsx ***!
  \********************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./src/games/ninemensmorris/Field.tsx");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/games/ninemensmorris/game.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Board.css */ "./src/games/ninemensmorris/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    _this.state = {
      selected: null
    };

    _this._selectPoint = function (id) {
      if (_this.props.playerID !== _this.props.ctx.currentPlayer && !Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_6__["isLocalGame"])(_this.props.gameArgs)) {
        return;
      }

      if (_this.props.G.haveToRemovePiece) {
        _this.props.moves.removePiece(id);
      } else if (_this.props.ctx.phase === _game__WEBPACK_IMPORTED_MODULE_3__["Phase"].Place) {
        _this.props.moves.placePiece(id);
      } else if (_this.state.selected === null) {
        if (_this.props.G.points[id].piece !== null && _this.props.G.points[id].piece.player === _this.props.ctx.currentPlayer) {
          _this.setState({
            selected: id
          });
        }
      } else {
        _this.props.moves.movePiece(_this.state.selected, id);

        _this.setState({
          selected: null
        });
      }
    };

    return _this;
  }

  _createClass(Board, [{
    key: "_getStatus",
    value: function _getStatus() {
      if (!this.props.gameArgs) {
        return;
      }

      var prefix = '';

      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_6__["isLocalGame"])(this.props.gameArgs)) {
        prefix = this.props.ctx.currentPlayer === '0' ? '[WHITE]' : '[RED]';
      }

      if (this.props.ctx.currentPlayer !== this.props.playerID && !Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_6__["isLocalGame"])(this.props.gameArgs)) {
        return 'Waiting for opponent...';
      } else if (this.props.G.haveToRemovePiece) {
        return "".concat(prefix, " REMOVE PIECE");
      }

      if (this.props.ctx.phase === _game__WEBPACK_IMPORTED_MODULE_3__["Phase"].Place) {
        return "".concat(prefix, " PLACE PIECE");
      } else {
        return "".concat(prefix, " MOVE PIECE");
      }
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_6__["isOnlineGame"])(this.props.gameArgs) || Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_6__["isAIGame"])(this.props.gameArgs)) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        if (this.props.ctx.gameover.winner === '0') {
          return 'white won';
        } else {
          return 'red won';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          gameArgs: this.props.gameArgs
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h5",
        className: _Board_css__WEBPACK_IMPORTED_MODULE_5___default.a.Status
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        points: this.props.G.points,
        selectPoint: this._selectPoint,
        selected: this.state.selected
      }));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/games/ninemensmorris/config.ts":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/config.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/ninemensmorris/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/ninemensmorris/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["NineMensMorrisGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/ninemensmorris/game.ts":
/*!******************************************!*\
  !*** ./src/games/ninemensmorris/game.ts ***!
  \******************************************/
/*! exports provided: Phase, placePiece, movePiece, removePiece, NineMensMorrisGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase", function() { return Phase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placePiece", function() { return placePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePiece", function() { return movePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePiece", function() { return removePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NineMensMorrisGame", function() { return NineMensMorrisGame; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/games/ninemensmorris/point.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/games/ninemensmorris/player.ts");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece */ "./src/games/ninemensmorris/piece.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Phase;

(function (Phase) {
  Phase["Place"] = "Place";
  Phase["Move"] = "Move";
})(Phase || (Phase = {}));

var millsPositions = [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 0], [8, 9, 10], [10, 11, 12], [12, 13, 14], [14, 15, 8], [16, 17, 18], [18, 19, 20], [20, 21, 22], [22, 23, 16], [1, 9, 17], [3, 11, 19], [5, 13, 21], [7, 15, 23]];

function getMills(G) {
  return millsPositions.map(function (positions) {
    return G.points[positions[0]].piece !== null && G.points[positions[1]].piece !== null && G.points[positions[2]].piece !== null && G.points[positions[0]].piece.player === G.points[positions[1]].piece.player && G.points[positions[1]].piece.player === G.points[positions[2]].piece.player ? G.points[positions[0]].piece.player : null;
  });
}

function isTherePieceOutsideMill(G, ctx) {
  var points = G.points.map(function (point) {
    return {
      data: point,
      safe: true
    };
  });
  G.mills.map(function (mill, index) {
    return {
      owner: mill,
      index: index
    };
  }).filter(function (mill) {
    return mill.owner !== null && mill.owner !== ctx.playerID;
  }).forEach(function (mill) {
    return millsPositions[mill.index].forEach(function (position) {
      points[position].safe = false;
    });
  });
  return points.some(function (point) {
    return point.data.piece !== null && point.safe && point.data.piece.player !== ctx.playerID;
  });
}

function placePiece(G, ctx, position) {
  if (G.points[position].piece !== null || G.haveToRemovePiece) {
    return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  }

  var newG = Object.assign({}, G, {
    points: Object.values(Object.assign({}, G.points, _defineProperty({}, position, Object.assign({}, G.points[position], {
      piece: new _piece__WEBPACK_IMPORTED_MODULE_3__["default"](ctx.playerID, G.piecesPlaced)
    })))),
    piecesPlaced: G.piecesPlaced + 1
  });
  var newMills = getMills(newG);
  return Object.assign({}, newG, {
    mills: newMills,
    haveToRemovePiece: G.mills.some(function (mill, index) {
      return mill !== ctx.playerID && newMills[index] === ctx.playerID;
    })
  });
}
function movePiece(G, ctx, position, newPosition) {
  var _Object$assign2;

  if (G.points[position].piece === null || G.points[position].piece.player !== ctx.playerID || // Check if player owns this piece // Check if piece exists
  G.points[newPosition].piece !== null || // Check if point isn't already occupied
  G.haveToRemovePiece || // Check if player has to remove piece
  !G.points[position].connections.some(function (connection) {
    return connection === newPosition;
  }) && // Check if connection exists
  G.players[ctx.playerID].lostPieces < 6 // Ignore the check if player has < 4 pieces
  ) {
      return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
    }

  var newG = Object.assign({}, G, {
    points: Object.values(Object.assign({}, G.points, (_Object$assign2 = {}, _defineProperty(_Object$assign2, position, Object.assign({}, G.points[position], {
      piece: null
    })), _defineProperty(_Object$assign2, newPosition, Object.assign({}, G.points[newPosition], {
      piece: G.points[position].piece
    })), _Object$assign2)))
  });
  var newMills = getMills(newG);
  return Object.assign({}, newG, {
    mills: newMills,
    haveToRemovePiece: G.mills.some(function (mill, index) {
      return mill !== ctx.playerID && newMills[index] === ctx.playerID;
    })
  });
}
function removePiece(G, ctx, position) {
  if (!G.haveToRemovePiece || // Check if player is allowed
  G.points[position].piece === null || // Check if piece exists
  G.points[position].piece.player === ctx.playerID || // Check if doesn't player own this piece
  G.mills.map(function (mill, index) {
    return {
      owner: mill,
      index: index
    };
  }).filter(function (mill) {
    return mill.owner !== null && mill.owner !== ctx.playerID;
  }).some(function (mill) {
    return millsPositions[mill.index].some(function (pos) {
      return pos === position;
    });
  }) && isTherePieceOutsideMill(G, ctx)) {
    return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  }

  var secondPlayerId = G.players.findIndex(function (_, i) {
    return ctx.playerID !== i.toString();
  });
  var newG = Object.assign({}, G, {
    points: Object.values(Object.assign({}, G.points, _defineProperty({}, position, Object.assign({}, G.points[position], {
      piece: null
    })))),
    players: Object.values(Object.assign({}, G.players, _defineProperty({}, secondPlayerId, {
      lostPieces: G.players[secondPlayerId].lostPieces + 1
    }))),
    haveToRemovePiece: false
  });
  return Object.assign({}, newG, {
    mills: getMills(newG)
  });
}
var GameConfig = {
  name: 'ninemensmorris',
  flow: {
    startingPhase: Phase.Place,
    phases: {
      Place: {
        allowedMoves: ['placePiece', 'removePiece'],
        next: Phase.Move,
        endPhaseIf: function endPhaseIf(G) {
          return G.piecesPlaced === 18;
        }
      },
      Move: {
        allowedMoves: ['movePiece', 'removePiece']
      }
    },
    onMove: function onMove(G, ctx) {
      if (!G.haveToRemovePiece) {
        ctx.events.endTurn();
      }
    },
    onTurnBegin: function onTurnBegin(G, ctx) {
      if (ctx.phase === Phase.Move && !G.haveToRemovePiece && G.players[ctx.currentPlayer].lostPieces < 6 && !G.points.filter(function (point) {
        return point.piece !== null && point.piece.player === ctx.currentPlayer;
      }).some(function (point) {
        return point.connections.some(function (connection) {
          return G.points[connection].piece === null;
        });
      })) {
        ctx.events.endGame({
          winner: G.players.findIndex(function (_, i) {
            return i.toString() !== ctx.currentPlayer;
          }).toString()
        });
      }
    },
    endGameIf: function endGameIf(G) {
      if (G.players.some(function (player) {
        return player.lostPieces === 7;
      })) {
        return {
          winner: G.players.findIndex(function (player) {
            return player.lostPieces !== 7;
          }).toString()
        };
      }
    }
  },
  moves: {
    placePiece: placePiece,
    movePiece: movePiece,
    removePiece: removePiece
  },
  setup: function setup(ctx) {
    /* 00-------01-------02
     * |        |         |
     * |  08----09----10  |
     * |  |     |      |  |
     * |  |  16-17-18  |  |
     * |  |  |      |  |  |
     * 07-15-23    19-11-03
     * |  |  |      |  |  |
     * |  |  22-21-20  |  |
     * |  |     |      |  |
     * |  14----13----12  |
     * |        |         |
     * 06-------05-------04
     */
    var points = new Array(24).fill(0).map(function () {
      return new _point__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }); // Connect "circles"

    points.forEach(function (point, i) {
      var prev = i % 8 === 0 ? i + 7 : i - 1;
      var next = (i + 1) % 8 === 0 ? i - 7 : i + 1;
      point.connections.push(prev, next);
    }); // Connect junctions

    for (var i = 1; i < 9; i += 2) {
      points[i].connections.push(i + 8);
      points[i + 8].connections.push(i, i + 16);
      points[i + 16].connections.push(i + 8);
    }

    var players = new Array(ctx.numPlayers).fill(0).map(function () {
      return new _player__WEBPACK_IMPORTED_MODULE_2__["default"]();
    });
    return {
      points: points,
      players: players,
      mills: new Array(16).fill(null),
      piecesPlaced: 0,
      haveToRemovePiece: false
    };
  }
};
var NineMensMorrisGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])(GameConfig);

/***/ }),

/***/ "./src/games/ninemensmorris/piece.ts":
/*!*******************************************!*\
  !*** ./src/games/ninemensmorris/piece.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piece; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function Piece(player, key) {
  _classCallCheck(this, Piece);

  this.player = player;
  this.key = key;
};



/***/ }),

/***/ "./src/games/ninemensmorris/player.ts":
/*!********************************************!*\
  !*** ./src/games/ninemensmorris/player.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  this.lostPieces = 0;
};



/***/ }),

/***/ "./src/games/ninemensmorris/point.ts":
/*!*******************************************!*\
  !*** ./src/games/ninemensmorris/point.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point() {
  _classCallCheck(this, Point);

  this.connections = [];
  this.piece = null;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvbmluZW1lbnNtb3JyaXMvQm9hcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9uaW5lbWVuc21vcnJpcy9GaWVsZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL25pbmVtZW5zbW9ycmlzL0JvYXJkLmNzcz8xMTM3Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9uaW5lbWVuc21vcnJpcy9GaWVsZC5jc3M/NWVmYyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvbmluZW1lbnNtb3JyaXMvRmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9uaW5lbWVuc21vcnJpcy9ib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL25pbmVtZW5zbW9ycmlzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvbmluZW1lbnNtb3JyaXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvbmluZW1lbnNtb3JyaXMvcGllY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL25pbmVtZW5zbW9ycmlzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvbmluZW1lbnNtb3JyaXMvcG9pbnQudHMiXSwibmFtZXMiOlsiQ09PUkRTIiwiQ09OTkVDVE9SUyIsIlJBRElVUyIsIlBJRUNFX1JBRElVUyIsIlNJWkUiLCJESVNUQU5DRSIsIkZpZWxkIiwiYXJndW1lbnRzIiwiX3NlbGVjdFBvaW50IiwiaSIsInByb3BzIiwic2VsZWN0UG9pbnQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJjc3MiLCJwb2ludGVyRXZlbnRzIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJnZXRMaW5lcyIsImZpbGwiLCJnZXRDaXJjbGVzIiwiZ2V0UGllY2VzIiwicmVzdWx0IiwibXVsdGlwbGllciIsImZvckVhY2giLCJjb29yZCIsImoiLCJjeCIsImN5Iiwia2V5IiwicHVzaCIsImNvb3JkcyIsImdldFBvaW50c0Nvb3JkcyIsInBvaW50cyIsIm1hcCIsInBvaW50IiwicGllY2UiLCJzY2FsZSIsInNlbGVjdGVkIiwiciIsInBsYXllciIsInJlZCIsIm9uQ2xpY2siLCJQaWVjZSIsInN0eWxlIiwidHJhbnNmb3JtIiwicCIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiQ29tcG9uZW50IiwiQm9hcmQiLCJzdGF0ZSIsImlkIiwicGxheWVySUQiLCJjdHgiLCJjdXJyZW50UGxheWVyIiwiaXNMb2NhbEdhbWUiLCJnYW1lQXJncyIsIkciLCJoYXZlVG9SZW1vdmVQaWVjZSIsIm1vdmVzIiwicmVtb3ZlUGllY2UiLCJwaGFzZSIsIlBoYXNlIiwiUGxhY2UiLCJwbGFjZVBpZWNlIiwic2V0U3RhdGUiLCJtb3ZlUGllY2UiLCJwcmVmaXgiLCJpc09ubGluZUdhbWUiLCJpc0FJR2FtZSIsImdhbWVvdmVyIiwid2lubmVyIiwiR2FtZUxheW91dCIsImdhbWVPdmVyIiwiX2dldEdhbWVPdmVyIiwiVHlwb2dyYXBoeSIsInZhcmlhbnQiLCJTdGF0dXMiLCJfZ2V0U3RhdHVzIiwiY29uZmlnIiwiYmdpb0dhbWUiLCJOaW5lTWVuc01vcnJpc0dhbWUiLCJiZ2lvQm9hcmQiLCJtaWxsc1Bvc2l0aW9ucyIsImdldE1pbGxzIiwicG9zaXRpb25zIiwiaXNUaGVyZVBpZWNlT3V0c2lkZU1pbGwiLCJkYXRhIiwic2FmZSIsIm1pbGxzIiwibWlsbCIsImluZGV4Iiwib3duZXIiLCJmaWx0ZXIiLCJwb3NpdGlvbiIsInNvbWUiLCJJTlZBTElEX01PVkUiLCJuZXdHIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWVzIiwicGllY2VzUGxhY2VkIiwibmV3TWlsbHMiLCJuZXdQb3NpdGlvbiIsInBsYXllcnMiLCJsb3N0UGllY2VzIiwicG9zIiwic2Vjb25kUGxheWVySWQiLCJmaW5kSW5kZXgiLCJfIiwidG9TdHJpbmciLCJHYW1lQ29uZmlnIiwibmFtZSIsImZsb3ciLCJzdGFydGluZ1BoYXNlIiwicGhhc2VzIiwiYWxsb3dlZE1vdmVzIiwibmV4dCIsIk1vdmUiLCJlbmRQaGFzZUlmIiwib25Nb3ZlIiwiZXZlbnRzIiwiZW5kVHVybiIsIm9uVHVybkJlZ2luIiwiZW5kR2FtZSIsImVuZEdhbWVJZiIsInNldHVwIiwiQXJyYXkiLCJQb2ludCIsInByZXYiLCJudW1QbGF5ZXJzIiwiUGxheWVyIiwiR2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLDJCQUEyQixpQkFBaUIsdUJBQXVCLEdBQUc7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNOQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLGlDQUFpQyw4Q0FBOEMsS0FBSyxrQ0FBa0MsNkJBQTZCLHVCQUF1QixzQkFBc0IsS0FBSyw0Q0FBNEMsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLG1CQUFtQixPQUFPLEtBQUs7QUFDcFg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1BBLGNBQWMsbUJBQU8sQ0FBQyx3SkFBc0U7O0FBRTVGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQix3SkFBc0U7QUFDekYsbUJBQW1CLG1CQUFPLENBQUMsd0pBQXNFOztBQUVqRyxvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7O0FDM0NBLGNBQWMsbUJBQU8sQ0FB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T0FBS3RGLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLWCxLQUFMLEdBQWEsSUFBYjtBQUNILEMiLCJmaWxlIjoiN2ZhNzJiZmUzYzRlMjM1MzljOWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5HdGZ4Rmo1ZFV1ei1BREFZNkxQeWoge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiU3RhdHVzXCI6IFwiR3RmeEZqNWRVdXotQURBWTZMUHlqXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuXzNyQzY5dEZXZ2VGd1kxM0lCTVAzNlYge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxyXFxuICBhbmltYXRpb246IF8yXzNpdnBJdXR1cHE3clJXR1M3dTNGIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5fMUtQSm12Sl9DWjdoU0NpdEF4YUcwaiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBfMl8zaXZwSXV0dXBxN3JSV0dTN3UzRiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIlBpZWNlXCI6IFwiXzNyQzY5dEZXZ2VGd1kxM0lCTVAzNlZcIixcblx0XCJmYWRlaW5cIjogXCJfMl8zaXZwSXV0dXBxN3JSV0dTN3UzRlwiLFxuXHRcIkZpZWxkXCI6IFwiXzFLUEptdkpfQ1o3aFNDaXRBeGFHMGpcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vQm9hcmQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Cb2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Cb2FyZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vRmllbGQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9GaWVsZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9GaWVsZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuL0ZpZWxkLmNzcyc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuY29uc3QgQ09PUkRTID0gW1stMSwgLTFdLCBbMCwgLTFdLCBbMSwgLTFdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIDFdLCBbLTEsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IENPTk5FQ1RPUlMgPSBbMCwgMiwgNCwgNiwgOSwgMTEsIDEzLCAxNSwgMTYsIDE4LCAyMCwgMjJdO1xuY29uc3QgUkFESVVTID0gMTA7XG5jb25zdCBQSUVDRV9SQURJVVMgPSAyNTtcbmNvbnN0IFNJWkUgPSA1MDA7XG5jb25zdCBESVNUQU5DRSA9IDAuMztcbmV4cG9ydCBjbGFzcyBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdFBvaW50ID0gKGkpID0+ICgpID0+IHRoaXMucHJvcHMuc2VsZWN0UG9pbnQoaSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBcIi0yNTAgLTI1MCA1MDAgNTAwXCIsIGNsYXNzTmFtZTogY3NzLkZpZWxkLCBwb2ludGVyRXZlbnRzOiBcInZpc2libGVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyBzdHJva2VXaWR0aDogXCI0XCIsIHN0cm9rZTogXCIjY2NjY2NjXCIgfSwgdGhpcy5nZXRMaW5lcygpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgZmlsbDogXCIjY2NjY2NjXCIgfSwgdGhpcy5nZXRDaXJjbGVzKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgdGhpcy5nZXRQaWVjZXMoKSkpKTtcbiAgICB9XG4gICAgZ2V0UG9pbnRzQ29vcmRzKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoU0laRSAvIDIgLSBQSUVDRV9SQURJVVMpICogKDEgLSBpICogRElTVEFOQ0UpO1xuICAgICAgICAgICAgQ09PUkRTLmZvckVhY2goKGNvb3JkLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSBjb29yZFswXSAqIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3kgPSBjb29yZFsxXSAqIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gOCAqIGkgKyBqO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgY3gsIGN5LCBrZXkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRQaWVjZXMoKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0UG9pbnRzQ29vcmRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnBvaW50cy5tYXAoKHBvaW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9pbnQucGllY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gaSA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZCA/IDEuMiA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyByOiBQSUVDRV9SQURJVVMsIGtleTogcG9pbnQucGllY2Uua2V5LCBmaWxsOiBwb2ludC5waWVjZS5wbGF5ZXIgPT09ICcwJyA/ICd3aGl0ZScgOiByZWRbNTAwXSwgb25DbGljazogdGhpcy5fc2VsZWN0UG9pbnQoaSksIGNsYXNzTmFtZTogYCR7Y3NzLlBpZWNlfSBQaWVjZWAsIHN0eWxlOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke2Nvb3Jkc1tpXS5jeH1weCwgJHtjb29yZHNbaV0uY3l9cHgpIHNjYWxlKCR7c2NhbGV9KWAgfSB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaXJjbGVzKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuZ2V0UG9pbnRzQ29vcmRzKCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBjeDogcC5jeCwgY3k6IHAuY3ksIHI6IFJBRElVUywga2V5OiBwLmtleSB9KSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgY3g6IHAuY3gsIGN5OiBwLmN5LCByOiBQSUVDRV9SQURJVVMsIG9uQ2xpY2s6IHRoaXMuX3NlbGVjdFBvaW50KHAua2V5KSwgY2xhc3NOYW1lOiBcIkNsaWNrYWJsZUNpcmNsZVwiLCBrZXk6IGAke3Aua2V5fWNsaWNrYWJsZWAsIGZpbGw6IFwibm9uZVwiIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRMaW5lcygpIHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5nZXRQb2ludHNDb29yZHMoKTtcbiAgICAgICAgcmV0dXJuIENPTk5FQ1RPUlMubWFwKGkgPT4gdGhpcy5wcm9wcy5wb2ludHNbaV0uY29ubmVjdGlvbnMubWFwKGNvbm5lY3Rpb24gPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHsgeDE6IGNvb3Jkc1tpXS5jeCwgeTE6IGNvb3Jkc1tpXS5jeSwgeDI6IGNvb3Jkc1tjb25uZWN0aW9uXS5jeCwgeTI6IGNvb3Jkc1tjb25uZWN0aW9uXS5jeSwga2V5OiBpICogMTAwICsgY29ubmVjdGlvbiB9KSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVMYXlvdXQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL0ZpZWxkJztcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IGNzcyBmcm9tICcuL0JvYXJkLmNzcyc7XG5pbXBvcnQgeyBpc09ubGluZUdhbWUsIGlzQUlHYW1lLCBpc0xvY2FsR2FtZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9nYW1lTW9kZSc7XG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZDogbnVsbCB9O1xuICAgICAgICB0aGlzLl9zZWxlY3RQb2ludCA9IChpZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGxheWVySUQgIT09IHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgJiYgIWlzTG9jYWxHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuRy5oYXZlVG9SZW1vdmVQaWVjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubW92ZXMucmVtb3ZlUGllY2UoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5jdHgucGhhc2UgPT09IFBoYXNlLlBsYWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3Zlcy5wbGFjZVBpZWNlKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5HLnBvaW50c1tpZF0ucGllY2UgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5HLnBvaW50c1tpZF0ucGllY2UucGxheWVyID09PSB0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogaWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3Zlcy5tb3ZlUGllY2UodGhpcy5zdGF0ZS5zZWxlY3RlZCwgaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2dldFN0YXR1cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmdhbWVBcmdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZpeCA9ICcnO1xuICAgICAgICBpZiAoaXNMb2NhbEdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09ICcwJyA/ICdbV0hJVEVdJyA6ICdbUkVEXSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgIT09IHRoaXMucHJvcHMucGxheWVySUQgJiYgIWlzTG9jYWxHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1dhaXRpbmcgZm9yIG9wcG9uZW50Li4uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLkcuaGF2ZVRvUmVtb3ZlUGllY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwcmVmaXh9IFJFTU9WRSBQSUVDRWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LnBoYXNlID09PSBQaGFzZS5QbGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0gUExBQ0UgUElFQ0VgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0gTU9WRSBQSUVDRWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldEdhbWVPdmVyKCkge1xuICAgICAgICBpZiAoaXNPbmxpbmVHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpIHx8IGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyID09PSB0aGlzLnByb3BzLnBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd5b3Ugd29uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAneW91IGxvc3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyLndpbm5lciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd3aGl0ZSB3b24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZWQgd29uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZUxheW91dCwgeyBnYW1lT3ZlcjogdGhpcy5fZ2V0R2FtZU92ZXIoKSwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiLCBjbGFzc05hbWU6IGNzcy5TdGF0dXMgfSwgdGhpcy5fZ2V0U3RhdHVzKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBwb2ludHM6IHRoaXMucHJvcHMuRy5wb2ludHMsIHNlbGVjdFBvaW50OiB0aGlzLl9zZWxlY3RQb2ludCwgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWQgfSkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOaW5lTWVuc01vcnJpc0dhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBiZ2lvR2FtZTogTmluZU1lbnNNb3JyaXNHYW1lLFxuICAgIGJnaW9Cb2FyZDogQm9hcmQsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiaW1wb3J0IHsgR2FtZSwgSU5WQUxJRF9NT1ZFIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9jb3JlJztcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuZXhwb3J0IHZhciBQaGFzZTtcbihmdW5jdGlvbiAoUGhhc2UpIHtcbiAgICBQaGFzZVtcIlBsYWNlXCJdID0gXCJQbGFjZVwiO1xuICAgIFBoYXNlW1wiTW92ZVwiXSA9IFwiTW92ZVwiO1xufSkoUGhhc2UgfHwgKFBoYXNlID0ge30pKTtcbmNvbnN0IG1pbGxzUG9zaXRpb25zID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMiwgMywgNF0sXG4gICAgWzQsIDUsIDZdLFxuICAgIFs2LCA3LCAwXSxcbiAgICBbOCwgOSwgMTBdLFxuICAgIFsxMCwgMTEsIDEyXSxcbiAgICBbMTIsIDEzLCAxNF0sXG4gICAgWzE0LCAxNSwgOF0sXG4gICAgWzE2LCAxNywgMThdLFxuICAgIFsxOCwgMTksIDIwXSxcbiAgICBbMjAsIDIxLCAyMl0sXG4gICAgWzIyLCAyMywgMTZdLFxuICAgIFsxLCA5LCAxN10sXG4gICAgWzMsIDExLCAxOV0sXG4gICAgWzUsIDEzLCAyMV0sXG4gICAgWzcsIDE1LCAyM10sXG5dO1xuZnVuY3Rpb24gZ2V0TWlsbHMoRykge1xuICAgIHJldHVybiBtaWxsc1Bvc2l0aW9ucy5tYXAocG9zaXRpb25zID0+IEcucG9pbnRzW3Bvc2l0aW9uc1swXV0ucGllY2UgIT09IG51bGwgJiZcbiAgICAgICAgRy5wb2ludHNbcG9zaXRpb25zWzFdXS5waWVjZSAhPT0gbnVsbCAmJlxuICAgICAgICBHLnBvaW50c1twb3NpdGlvbnNbMl1dLnBpZWNlICE9PSBudWxsICYmXG4gICAgICAgIEcucG9pbnRzW3Bvc2l0aW9uc1swXV0ucGllY2UucGxheWVyID09PSBHLnBvaW50c1twb3NpdGlvbnNbMV1dLnBpZWNlLnBsYXllciAmJlxuICAgICAgICBHLnBvaW50c1twb3NpdGlvbnNbMV1dLnBpZWNlLnBsYXllciA9PT0gRy5wb2ludHNbcG9zaXRpb25zWzJdXS5waWVjZS5wbGF5ZXJcbiAgICAgICAgPyBHLnBvaW50c1twb3NpdGlvbnNbMF1dLnBpZWNlLnBsYXllclxuICAgICAgICA6IG51bGwpO1xufVxuZnVuY3Rpb24gaXNUaGVyZVBpZWNlT3V0c2lkZU1pbGwoRywgY3R4KSB7XG4gICAgbGV0IHBvaW50cyA9IEcucG9pbnRzLm1hcChwb2ludCA9PiAoeyBkYXRhOiBwb2ludCwgc2FmZTogdHJ1ZSB9KSk7XG4gICAgRy5taWxsc1xuICAgICAgICAubWFwKChtaWxsLCBpbmRleCkgPT4gKHsgb3duZXI6IG1pbGwsIGluZGV4IH0pKVxuICAgICAgICAuZmlsdGVyKG1pbGwgPT4gbWlsbC5vd25lciAhPT0gbnVsbCAmJiBtaWxsLm93bmVyICE9PSBjdHgucGxheWVySUQpXG4gICAgICAgIC5mb3JFYWNoKG1pbGwgPT4gbWlsbHNQb3NpdGlvbnNbbWlsbC5pbmRleF0uZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgIHBvaW50c1twb3NpdGlvbl0uc2FmZSA9IGZhbHNlO1xuICAgIH0pKTtcbiAgICByZXR1cm4gcG9pbnRzLnNvbWUocG9pbnQgPT4gcG9pbnQuZGF0YS5waWVjZSAhPT0gbnVsbCAmJiBwb2ludC5zYWZlICYmIHBvaW50LmRhdGEucGllY2UucGxheWVyICE9PSBjdHgucGxheWVySUQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGllY2UoRywgY3R4LCBwb3NpdGlvbikge1xuICAgIGlmIChHLnBvaW50c1twb3NpdGlvbl0ucGllY2UgIT09IG51bGwgfHwgRy5oYXZlVG9SZW1vdmVQaWVjZSkge1xuICAgICAgICByZXR1cm4gSU5WQUxJRF9NT1ZFO1xuICAgIH1cbiAgICBjb25zdCBuZXdHID0gT2JqZWN0LmFzc2lnbih7fSwgRywgeyBwb2ludHM6IE9iamVjdC52YWx1ZXMoT2JqZWN0LmFzc2lnbih7fSwgRy5wb2ludHMsIHsgW3Bvc2l0aW9uXTogT2JqZWN0LmFzc2lnbih7fSwgRy5wb2ludHNbcG9zaXRpb25dLCB7IHBpZWNlOiBuZXcgUGllY2UoY3R4LnBsYXllcklELCBHLnBpZWNlc1BsYWNlZCkgfSkgfSkpLCBwaWVjZXNQbGFjZWQ6IEcucGllY2VzUGxhY2VkICsgMSB9KTtcbiAgICBjb25zdCBuZXdNaWxscyA9IGdldE1pbGxzKG5ld0cpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBuZXdHLCB7IG1pbGxzOiBuZXdNaWxscywgaGF2ZVRvUmVtb3ZlUGllY2U6IEcubWlsbHMuc29tZSgobWlsbCwgaW5kZXgpID0+IG1pbGwgIT09IGN0eC5wbGF5ZXJJRCAmJiBuZXdNaWxsc1tpbmRleF0gPT09IGN0eC5wbGF5ZXJJRCkgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbW92ZVBpZWNlKEcsIGN0eCwgcG9zaXRpb24sIG5ld1Bvc2l0aW9uKSB7XG4gICAgaWYgKEcucG9pbnRzW3Bvc2l0aW9uXS5waWVjZSA9PT0gbnVsbCB8fFxuICAgICAgICBHLnBvaW50c1twb3NpdGlvbl0ucGllY2UucGxheWVyICE9PSBjdHgucGxheWVySUQgfHwgLy8gQ2hlY2sgaWYgcGxheWVyIG93bnMgdGhpcyBwaWVjZSAvLyBDaGVjayBpZiBwaWVjZSBleGlzdHNcbiAgICAgICAgRy5wb2ludHNbbmV3UG9zaXRpb25dLnBpZWNlICE9PSBudWxsIHx8IC8vIENoZWNrIGlmIHBvaW50IGlzbid0IGFscmVhZHkgb2NjdXBpZWRcbiAgICAgICAgRy5oYXZlVG9SZW1vdmVQaWVjZSB8fCAvLyBDaGVjayBpZiBwbGF5ZXIgaGFzIHRvIHJlbW92ZSBwaWVjZVxuICAgICAgICAoIUcucG9pbnRzW3Bvc2l0aW9uXS5jb25uZWN0aW9ucy5zb21lKGNvbm5lY3Rpb24gPT4gY29ubmVjdGlvbiA9PT0gbmV3UG9zaXRpb24pICYmIC8vIENoZWNrIGlmIGNvbm5lY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBHLnBsYXllcnNbY3R4LnBsYXllcklEXS5sb3N0UGllY2VzIDwgNikgLy8gSWdub3JlIHRoZSBjaGVjayBpZiBwbGF5ZXIgaGFzIDwgNCBwaWVjZXNcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIElOVkFMSURfTU9WRTtcbiAgICB9XG4gICAgY29uc3QgbmV3RyA9IE9iamVjdC5hc3NpZ24oe30sIEcsIHsgcG9pbnRzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcucG9pbnRzLCB7IFtwb3NpdGlvbl06IE9iamVjdC5hc3NpZ24oe30sIEcucG9pbnRzW3Bvc2l0aW9uXSwgeyBwaWVjZTogbnVsbCB9KSwgW25ld1Bvc2l0aW9uXTogT2JqZWN0LmFzc2lnbih7fSwgRy5wb2ludHNbbmV3UG9zaXRpb25dLCB7IHBpZWNlOiBHLnBvaW50c1twb3NpdGlvbl0ucGllY2UgfSkgfSkpIH0pO1xuICAgIGNvbnN0IG5ld01pbGxzID0gZ2V0TWlsbHMobmV3Ryk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld0csIHsgbWlsbHM6IG5ld01pbGxzLCBoYXZlVG9SZW1vdmVQaWVjZTogRy5taWxscy5zb21lKChtaWxsLCBpbmRleCkgPT4gbWlsbCAhPT0gY3R4LnBsYXllcklEICYmIG5ld01pbGxzW2luZGV4XSA9PT0gY3R4LnBsYXllcklEKSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQaWVjZShHLCBjdHgsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCFHLmhhdmVUb1JlbW92ZVBpZWNlIHx8IC8vIENoZWNrIGlmIHBsYXllciBpcyBhbGxvd2VkXG4gICAgICAgIEcucG9pbnRzW3Bvc2l0aW9uXS5waWVjZSA9PT0gbnVsbCB8fCAvLyBDaGVjayBpZiBwaWVjZSBleGlzdHNcbiAgICAgICAgRy5wb2ludHNbcG9zaXRpb25dLnBpZWNlLnBsYXllciA9PT0gY3R4LnBsYXllcklEIHx8IC8vIENoZWNrIGlmIGRvZXNuJ3QgcGxheWVyIG93biB0aGlzIHBpZWNlXG4gICAgICAgIChHLm1pbGxzXG4gICAgICAgICAgICAubWFwKChtaWxsLCBpbmRleCkgPT4gKHsgb3duZXI6IG1pbGwsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcihtaWxsID0+IG1pbGwub3duZXIgIT09IG51bGwgJiYgbWlsbC5vd25lciAhPT0gY3R4LnBsYXllcklEKVxuICAgICAgICAgICAgLnNvbWUobWlsbCA9PiBtaWxsc1Bvc2l0aW9uc1ttaWxsLmluZGV4XS5zb21lKHBvcyA9PiBwb3MgPT09IHBvc2l0aW9uKSkgJiZcbiAgICAgICAgICAgIGlzVGhlcmVQaWVjZU91dHNpZGVNaWxsKEcsIGN0eCkpKSB7XG4gICAgICAgIHJldHVybiBJTlZBTElEX01PVkU7XG4gICAgfVxuICAgIGNvbnN0IHNlY29uZFBsYXllcklkID0gRy5wbGF5ZXJzLmZpbmRJbmRleCgoXywgaSkgPT4gY3R4LnBsYXllcklEICE9PSBpLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IG5ld0cgPSBPYmplY3QuYXNzaWduKHt9LCBHLCB7IHBvaW50czogT2JqZWN0LnZhbHVlcyhPYmplY3QuYXNzaWduKHt9LCBHLnBvaW50cywgeyBbcG9zaXRpb25dOiBPYmplY3QuYXNzaWduKHt9LCBHLnBvaW50c1twb3NpdGlvbl0sIHsgcGllY2U6IG51bGwgfSkgfSkpLCBwbGF5ZXJzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcucGxheWVycywgeyBbc2Vjb25kUGxheWVySWRdOiB7XG4gICAgICAgICAgICAgICAgbG9zdFBpZWNlczogRy5wbGF5ZXJzW3NlY29uZFBsYXllcklkXS5sb3N0UGllY2VzICsgMSxcbiAgICAgICAgICAgIH0gfSkpLCBoYXZlVG9SZW1vdmVQaWVjZTogZmFsc2UgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld0csIHsgbWlsbHM6IGdldE1pbGxzKG5ld0cpIH0pO1xufVxuY29uc3QgR2FtZUNvbmZpZyA9IHtcbiAgICBuYW1lOiAnbmluZW1lbnNtb3JyaXMnLFxuICAgIGZsb3c6IHtcbiAgICAgICAgc3RhcnRpbmdQaGFzZTogUGhhc2UuUGxhY2UsXG4gICAgICAgIHBoYXNlczoge1xuICAgICAgICAgICAgUGxhY2U6IHtcbiAgICAgICAgICAgICAgICBhbGxvd2VkTW92ZXM6IFsncGxhY2VQaWVjZScsICdyZW1vdmVQaWVjZSddLFxuICAgICAgICAgICAgICAgIG5leHQ6IFBoYXNlLk1vdmUsXG4gICAgICAgICAgICAgICAgZW5kUGhhc2VJZjogKEcpID0+IEcucGllY2VzUGxhY2VkID09PSAxOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBNb3ZlOiB7XG4gICAgICAgICAgICAgICAgYWxsb3dlZE1vdmVzOiBbJ21vdmVQaWVjZScsICdyZW1vdmVQaWVjZSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3ZlOiAoRywgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIUcuaGF2ZVRvUmVtb3ZlUGllY2UpIHtcbiAgICAgICAgICAgICAgICBjdHguZXZlbnRzLmVuZFR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UdXJuQmVnaW46IChHLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdHgucGhhc2UgPT09IFBoYXNlLk1vdmUgJiZcbiAgICAgICAgICAgICAgICAhRy5oYXZlVG9SZW1vdmVQaWVjZSAmJlxuICAgICAgICAgICAgICAgIEcucGxheWVyc1tjdHguY3VycmVudFBsYXllcl0ubG9zdFBpZWNlcyA8IDYgJiZcbiAgICAgICAgICAgICAgICAhRy5wb2ludHNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwb2ludCA9PiBwb2ludC5waWVjZSAhPT0gbnVsbCAmJiBwb2ludC5waWVjZS5wbGF5ZXIgPT09IGN0eC5jdXJyZW50UGxheWVyKVxuICAgICAgICAgICAgICAgICAgICAuc29tZShwb2ludCA9PiBwb2ludC5jb25uZWN0aW9ucy5zb21lKGNvbm5lY3Rpb24gPT4gRy5wb2ludHNbY29ubmVjdGlvbl0ucGllY2UgPT09IG51bGwpKSkge1xuICAgICAgICAgICAgICAgIGN0eC5ldmVudHMuZW5kR2FtZSh7IHdpbm5lcjogRy5wbGF5ZXJzLmZpbmRJbmRleCgoXywgaSkgPT4gaS50b1N0cmluZygpICE9PSBjdHguY3VycmVudFBsYXllcikudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kR2FtZUlmOiAoRykgPT4ge1xuICAgICAgICAgICAgaWYgKEcucGxheWVycy5zb21lKHBsYXllciA9PiBwbGF5ZXIubG9zdFBpZWNlcyA9PT0gNykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aW5uZXI6IEcucGxheWVycy5maW5kSW5kZXgocGxheWVyID0+IHBsYXllci5sb3N0UGllY2VzICE9PSA3KS50b1N0cmluZygpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb3Zlczoge1xuICAgICAgICBwbGFjZVBpZWNlLFxuICAgICAgICBtb3ZlUGllY2UsXG4gICAgICAgIHJlbW92ZVBpZWNlLFxuICAgIH0sXG4gICAgc2V0dXA6IChjdHgpID0+IHtcbiAgICAgICAgLyogMDAtLS0tLS0tMDEtLS0tLS0tMDJcbiAgICAgICAgICogfCAgICAgICAgfCAgICAgICAgIHxcbiAgICAgICAgICogfCAgMDgtLS0tMDktLS0tMTAgIHxcbiAgICAgICAgICogfCAgfCAgICAgfCAgICAgIHwgIHxcbiAgICAgICAgICogfCAgfCAgMTYtMTctMTggIHwgIHxcbiAgICAgICAgICogfCAgfCAgfCAgICAgIHwgIHwgIHxcbiAgICAgICAgICogMDctMTUtMjMgICAgMTktMTEtMDNcbiAgICAgICAgICogfCAgfCAgfCAgICAgIHwgIHwgIHxcbiAgICAgICAgICogfCAgfCAgMjItMjEtMjAgIHwgIHxcbiAgICAgICAgICogfCAgfCAgICAgfCAgICAgIHwgIHxcbiAgICAgICAgICogfCAgMTQtLS0tMTMtLS0tMTIgIHxcbiAgICAgICAgICogfCAgICAgICAgfCAgICAgICAgIHxcbiAgICAgICAgICogMDYtLS0tLS0tMDUtLS0tLS0tMDRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IG5ldyBBcnJheSgyNCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IFBvaW50KCkpO1xuICAgICAgICAvLyBDb25uZWN0IFwiY2lyY2xlc1wiXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGkgJSA4ID09PSAwID8gaSArIDcgOiBpIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSAoaSArIDEpICUgOCA9PT0gMCA/IGkgLSA3IDogaSArIDE7XG4gICAgICAgICAgICBwb2ludC5jb25uZWN0aW9ucy5wdXNoKHByZXYsIG5leHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ29ubmVjdCBqdW5jdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpICs9IDIpIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5jb25uZWN0aW9ucy5wdXNoKGkgKyA4KTtcbiAgICAgICAgICAgIHBvaW50c1tpICsgOF0uY29ubmVjdGlvbnMucHVzaChpLCBpICsgMTYpO1xuICAgICAgICAgICAgcG9pbnRzW2kgKyAxNl0uY29ubmVjdGlvbnMucHVzaChpICsgOCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVycyA9IG5ldyBBcnJheShjdHgubnVtUGxheWVycykuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IFBsYXllcigpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvaW50cyxcbiAgICAgICAgICAgIHBsYXllcnMsXG4gICAgICAgICAgICBtaWxsczogbmV3IEFycmF5KDE2KS5maWxsKG51bGwpLFxuICAgICAgICAgICAgcGllY2VzUGxhY2VkOiAwLFxuICAgICAgICAgICAgaGF2ZVRvUmVtb3ZlUGllY2U6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IE5pbmVNZW5zTW9ycmlzR2FtZSA9IEdhbWUoR2FtZUNvbmZpZyk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBrZXkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9zdFBpZWNlcyA9IDA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGllY2UgPSBudWxsO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=