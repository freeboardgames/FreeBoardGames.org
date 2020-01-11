(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/games/cornerus/Controls.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/games/cornerus/Controls.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._19bl1geSJcc8H5GYM3ULLL {\n  text-align: center;\n}\n\n._19bl1geSJcc8H5GYM3ULLL * {\n  color: white;\n}\n\n._19bl1geSJcc8H5GYM3ULLL ._1mtykFU3lUJmpW6cgPHXWk {\n  color: red;\n}\n", ""]);
// Exports
exports.locals = {
	"Controls": "_19bl1geSJcc8H5GYM3ULLL",
	"disabled": "_1mtykFU3lUJmpW6cgPHXWk"
};

/***/ }),

/***/ "./src/games/cornerus/Controls.css":
/*!*****************************************!*\
  !*** ./src/games/cornerus/Controls.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Controls.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/cornerus/Controls.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Controls.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/cornerus/Controls.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Controls.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/cornerus/Controls.css");

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

/***/ "./src/games/cornerus/Controls.tsx":
/*!*****************************************!*\
  !*** ./src/games/cornerus/Controls.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/games/cornerus/game.ts");
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces */ "./src/games/cornerus/pieces.ts");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_RotateLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/RotateLeft */ "./node_modules/@material-ui/icons/RotateLeft.js");
/* harmony import */ var _material_ui_icons_RotateLeft__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RotateLeft__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_RotateRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/RotateRight */ "./node_modules/@material-ui/icons/RotateRight.js");
/* harmony import */ var _material_ui_icons_RotateRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RotateRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Flip */ "./node_modules/@material-ui/icons/Flip.js");
/* harmony import */ var _material_ui_icons_Flip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Flip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _Controls_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Controls.css */ "./src/games/cornerus/Controls.css");
/* harmony import */ var _Controls_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Controls_css__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Controls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls() {
    var _this;

    _classCallCheck(this, Controls);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Controls).apply(this, arguments));
    _this._flipY = _this.flipY.bind(_assertThisInitialized(_this));
    _this._flipX = _this.flipX.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Controls, [{
    key: "rotate",
    value: function rotate(n) {
      var data = Object(_game__WEBPACK_IMPORTED_MODULE_1__["rotatePiece"])(this.props.piece.data);

      for (var i = 0; i < n - 1; i++) {
        data = Object(_game__WEBPACK_IMPORTED_MODULE_1__["rotatePiece"])(data);
      }

      this.props.modifyPiece(Object.assign({}, this.props.piece, {
        transform: Object.assign({}, this.props.piece.transform, {
          rotation: (this.props.piece.transform.rotation + n) % 4
        }),
        data: data
      }));
    }
  }, {
    key: "flipY",
    value: function flipY() {
      this.props.modifyPiece(Object.assign({}, this.props.piece, {
        transform: Object.assign({}, this.props.piece.transform, {
          flipY: !this.props.piece.transform.flipY,
          rotation: this.props.piece.transform.rotation % 2 === 0 ? this.props.piece.transform.rotation : (this.props.piece.transform.rotation + 2) % 4
        }),
        data: Object(_game__WEBPACK_IMPORTED_MODULE_1__["flipPieceY"])(this.props.piece.data)
      }));
    }
  }, {
    key: "flipX",
    value: function flipX() {
      this.props.modifyPiece(Object.assign({}, this.props.piece, {
        transform: Object.assign({}, this.props.piece.transform, {
          flipX: !this.props.piece.transform.flipX,
          rotation: this.props.piece.transform.rotation % 2 === 0 ? this.props.piece.transform.rotation : (this.props.piece.transform.rotation + 2) % 4
        }),
        data: Object(_game__WEBPACK_IMPORTED_MODULE_1__["flipPieceX"])(this.props.piece.data)
      }));
    }
  }, {
    key: "select",
    value: function select(offset) {
      var playerID = Object(_game__WEBPACK_IMPORTED_MODULE_1__["getPlayer"])(this.props.ctx, this.props.ctx.currentPlayer);
      var index = (this.props.piece.index + offset) % this.props.G.players[playerID].pieces.length;
      this.props.modifyPiece(Object.assign({}, this.props.piece, {
        index: index,
        data: _pieces__WEBPACK_IMPORTED_MODULE_2__["pieces"][this.props.G.players[playerID].pieces[index]],
        transform: Object.assign({}, this.props.piece.transform, {
          flipX: false,
          flipY: false,
          rotation: 0
        })
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Controls_css__WEBPACK_IMPORTED_MODULE_10___default.a.Controls
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.rotate(3);
        },
        id: "rotate-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_RotateLeft__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.rotate(1);
        },
        id: "rotate-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_RotateRight__WEBPACK_IMPORTED_MODULE_5___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this._flipY,
        style: {
          transform: 'rotate(90deg)'
        },
        id: "flip-y"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this._flipX,
        id: "flip-x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.select(_this2.props.G.players[Object(_game__WEBPACK_IMPORTED_MODULE_1__["getPlayer"])(_this2.props.ctx, _this2.props.ctx.currentPlayer)].pieces.length - 1);
        },
        id: "select-prev"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.select(1);
        },
        id: "select-next"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.props.placePiece,
        id: "place",
        disabled: !this.props.validTransform,
        style: {
          opacity: this.props.validTransform ? 1 : 0.5
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default.a, null)));
    }
  }]);

  return Controls;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/games/cornerus/board.tsx":
/*!**************************************!*\
  !*** ./src/games/cornerus/board.tsx ***!
  \**************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/ui */ "./node_modules/@freeboardgame.org/boardgame.io/ui.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/games/cornerus/game.ts");
/* harmony import */ var _common_Scoreboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Scoreboard */ "./src/common/Scoreboard.tsx");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ "./node_modules/@material-ui/core/colors/lightGreen.js");
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Controls */ "./src/games/cornerus/Controls.tsx");
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pieces */ "./src/games/cornerus/pieces.ts");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));
    _this._endGame = _this.endGame.bind(_assertThisInitialized(_this));
    _this._modifyPiece = _this.modifyPiece.bind(_assertThisInitialized(_this));
    _this._placePiece = _this.placePiece.bind(_assertThisInitialized(_this));

    _this._onDrop = function (coords) {
      var x = Math.round(coords.x);
      var y = Math.round(coords.y);
      var transform = Object.assign({}, _this.state.piece.transform, {
        x: x,
        y: y
      });
      var positions = Object(_game__WEBPACK_IMPORTED_MODULE_3__["getAllPositions"])(_this.state.piece.data, transform);

      if (positions.every(function (pos) {
        return Object(_game__WEBPACK_IMPORTED_MODULE_3__["inBounds"])(pos.x, pos.y);
      })) {
        _this.setState(Object.assign({}, _this.state, {
          piece: Object.assign({}, _this.state.piece, {
            transform: transform
          }),
          validTransform: _this.isTransformValid(_this.state.piece.data, transform)
        }));
      }
    };

    _this._getOptionsMenuItems = function () {
      var option = {
        onClick: _this._endGame,
        text: "End game"
      };
      var options = [option];
      return options;
    };

    _this.state = {
      piece: {
        transform: {
          x: 10,
          y: 10,
          rotation: 0,
          flipX: false,
          flipY: false
        },
        index: 0,
        data: _pieces__WEBPACK_IMPORTED_MODULE_12__["pieces"][0]
      },
      validTransform: false
    };
    return _this;
  }

  _createClass(Board, [{
    key: "endGame",
    value: function endGame() {
      this.props.moves.endGame();
    }
  }, {
    key: "modifyPiece",
    value: function modifyPiece(piece) {
      this.setState(Object.assign({}, this.state, {
        piece: piece,
        validTransform: this.isTransformValid(piece.data, piece.transform)
      }));
    }
  }, {
    key: "placePiece",
    value: function placePiece() {
      this.props.moves.placePiece(this.state.piece.index, this.state.piece.transform);
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      var _this2 = this;

      var scoreboard = this.props.ctx.gameover.scoreboard;

      if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
        return 'draw';
      } else {
        if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_13__["isLocalGame"])(this.props.gameArgs)) {
          return scoreboard[0].score > scoreboard[1].score ? 'blue/yellow won' : 'red/green won';
        } else {
          if (scoreboard[0].score === scoreboard.find(function (rank) {
            return rank.playerID === _this2.props.playerID;
          }).score) {
            return 'you won';
          } else {
            return 'you lost';
          }
        }
      }
    }
  }, {
    key: "_getScoreBoard",
    value: function _getScoreBoard() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Scoreboard__WEBPACK_IMPORTED_MODULE_4__["Scoreboard"], {
        scoreboard: this.props.ctx.gameover.scoreboard,
        playerID: this.props.playerID,
        players: this.props.gameArgs.players
      });
    }
  }, {
    key: "isTransformValid",
    value: function isTransformValid(data, transform) {
      return Object(_game__WEBPACK_IMPORTED_MODULE_3__["getValidPositions"])(this.props.G, this.props.ctx, data, transform, Object(_game__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])(this.props.ctx, this.props.ctx.currentPlayer)) !== null;
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      if (!this.props.gameArgs) {
        return;
      }

      var message = '';

      if (this.props.gameArgs) {
        var player;

        switch (this.props.ctx.currentPlayer) {
          case '0':
            {
              player = 'Blue/yellow';
              break;
            }

          case '1':
            {
              player = 'Red/green';
              break;
            }
        }

        message = "".concat(player, "'s turn");
      } else if (this.props.ctx.currentPlayer === this.props.playerID && !Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_13__["isLocalGame"])(this.props.gameArgs)) {
        message = 'Place piece';
      } else if (this.props.ctx.currentPlayer !== this.props.playerID && !Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_13__["isLocalGame"])(this.props.gameArgs)) {
        message = 'Waiting for opponent...';
      }

      return message;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.ctx.turn !== this.props.ctx.turn) {
        var transform = Object.assign({}, this.state.piece.transform, {
          flipX: false,
          flipY: false,
          rotation: 0,
          x: 10,
          y: 10
        });
        var data = _pieces__WEBPACK_IMPORTED_MODULE_12__["pieces"][this.props.G.players[Object(_game__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])(this.props.ctx, this.props.ctx.currentPlayer)].pieces[0]];
        this.setState(Object.assign({}, this.state, {
          piece: Object.assign({}, this.state.piece, {
            index: 0,
            transform: transform,
            data: data
          }),
          validTransform: this.isTransformValid(data, transform)
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          extraCardContent: this._getScoreBoard(),
          gameArgs: this.props.gameArgs
        });
      }

      var colors = [_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8___default.a, _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_6___default.a, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_5___default.a, _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_7___default.a];
      var colorMap = this.getColorMap(colors);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
        optionsMenuItems: this._getOptionsMenuItems
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        rows: 20,
        cols: 20,
        onClick: function onClick() {
          return null;
        },
        colorMap: colorMap
      }, Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_13__["isLocalGame"])(this.props.gameArgs) || this.props.ctx.currentPlayer === this.props.playerID ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__["Token"], {
        x: this.state.piece.transform.x,
        y: this.state.piece.transform.y,
        draggable: true,
        shouldDrag: function shouldDrag() {
          return true;
        },
        onDrop: this._onDrop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        fill: colors[Object(_game__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])(this.props.ctx, this.props.ctx.currentPlayer)][600],
        opacity: 0.9
      }, this.state.piece.data.map(function (square, index) {
        return {
          square: square,
          index: index
        };
      }).filter(function (piece) {
        return piece.square;
      }).map(function (piece) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
          x: piece.index % Math.sqrt(_this3.state.piece.data.length),
          y: Math.floor(piece.index / Math.sqrt(_this3.state.piece.data.length)),
          width: "1",
          height: "1",
          key: piece.index
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        width: "50",
        height: "50",
        x: "-25",
        y: "-25",
        fill: "none",
        style: {
          pointerEvents: 'all'
        }
      }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Controls__WEBPACK_IMPORTED_MODULE_11__["default"], {
        placePiece: this._placePiece,
        modifyPiece: this._modifyPiece,
        validTransform: this.state.validTransform,
        piece: this.state.piece,
        G: this.props.G,
        ctx: this.props.ctx
      })));
    }
  }, {
    key: "getColorMap",
    value: function getColorMap(colors) {
      var colorMap = {};
      this.props.G.board.map(function (square, index) {
        return {
          square: square,
          index: index
        };
      }).forEach(function (piece) {
        var x = piece.index % 20;
        var y = Math.floor(piece.index / 20);
        var key = "".concat(x, ",").concat(y);
        var color = _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9___default.a[800];

        if (piece.square !== null) {
          if ((x + y) % 2 === 0) {
            color = colors[piece.square][700];
          } else {
            color = colors[piece.square][600];
          }
        } else if (x === 0 && y === 0) {
          color = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_8___default.a[400];
        } else if (x === 19 && y === 0) {
          color = _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_6___default.a[400];
        } else if (x === 19 && y === 19) {
          color = _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_5___default.a[400];
        } else if (x === 0 && y === 19) {
          color = _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_7___default.a[400];
        } else if ((x + y) % 2 === 0) {
          color = _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_9___default.a[900];
        }

        colorMap[key] = color;
      });
      return colorMap;
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/games/cornerus/config.ts":
/*!**************************************!*\
  !*** ./src/games/cornerus/config.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/cornerus/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/cornerus/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["CornerusGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/cornerus/game.ts":
/*!************************************!*\
  !*** ./src/games/cornerus/game.ts ***!
  \************************************/
/*! exports provided: getXY, getPosition, inBounds, getPlayer, isFirstTurn, getScoreBoard, rotatePiece, flipPieceY, flipPieceX, getAllPositions, getValidPositions, placePiece, endGame, CornerusGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXY", function() { return getXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBounds", function() { return inBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer", function() { return getPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstTurn", function() { return isFirstTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreBoard", function() { return getScoreBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatePiece", function() { return rotatePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipPieceY", function() { return flipPieceY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipPieceX", function() { return flipPieceX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPositions", function() { return getAllPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidPositions", function() { return getValidPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placePiece", function() { return placePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endGame", function() { return endGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerusGame", function() { return CornerusGame; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces */ "./src/games/cornerus/pieces.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getXY(position, size) {
  return {
    x: position % size,
    y: Math.floor(position / size)
  };
}
function getPosition(x, y) {
  return x + y * 20;
}
function inBounds(x, y) {
  return x >= 0 && x < 20 && y >= 0 && y < 20;
} // Map real playerID to 'fake' one

function getPlayer(ctx, playerID) {
  var numMoves = ctx.stats.phase.numMoves[playerID];

  if (ctx.numPlayers === 2) {
    if (playerID === '0') {
      return numMoves % 2 === 1 ? '1' : '0';
    } else {
      return numMoves % 2 === 1 ? '3' : '2';
    }
  } else if (ctx.numPlayers === 3) {
    return (ctx.turn + 1) % 4 === 0 ? '3' : playerID;
  } else {
    return playerID;
  }
}
function isFirstTurn(ctx) {
  var numMoves = ctx.stats.phase.numMoves[ctx.playerID];

  if (ctx.numPlayers === 2) {
    return typeof numMoves === 'undefined' || numMoves === 1;
  } else if (ctx.numPlayers === 3) {
    return typeof numMoves === 'undefined' || ctx.turn === 3;
  } else {
    return typeof numMoves === 'undefined';
  }
}
function getScoreBoard(G, ctx) {
  var scoreboard = G.players.map(function (player, i) {
    return {
      playerID: i.toString(),
      score: player.pieces.reduce(function (acc, piece) {
        return acc - _pieces__WEBPACK_IMPORTED_MODULE_1__["pieces"][piece].filter(function (square) {
          return square;
        }).length;
      }, 0)
    };
  });

  if (ctx.numPlayers === 2) {
    return [{
      playerID: '0',
      score: scoreboard[0].score + scoreboard[1].score
    }, {
      playerID: '1',
      score: scoreboard[2].score + scoreboard[3].score
    }].sort(function (a, b) {
      return b.score - a.score;
    });
  } else if (ctx.numPlayers === 3) {
    return scoreboard.filter(function (_, i) {
      return i !== 3;
    }).sort(function (a, b) {
      return b.score - a.score;
    });
  } else {
    return scoreboard.sort(function (a, b) {
      return b.score - a.score;
    });
  }
}
function rotatePiece(squares) {
  var size = Math.sqrt(squares.length);
  var rotated = new Array(squares.length);

  for (var n = 0; n < squares.length; n++) {
    var x = n % size;
    var y = Math.floor(n / size);
    rotated[n] = squares[(size - x - 1) * size + y];
  }

  return rotated;
}
function flipPieceY(squares) {
  var size = Math.sqrt(squares.length);
  var flipped = new Array(squares.length);

  for (var n = 0; n < squares.length; n++) {
    flipped[n] = squares[n + size * (size - Math.floor(n / size) * 2 - 1)];
  }

  return flipped;
}
function flipPieceX(squares) {
  var size = Math.sqrt(squares.length);
  var flipped = new Array(squares.length);

  for (var n = 0; n < squares.length; n++) {
    flipped[n] = squares[n + size - n % size * 2 - 1];
  }

  return flipped;
}

function playerEnded(G, ctx) {
  var player = G.players[getPlayer(ctx, ctx.currentPlayer)];
  return player.end || player.pieces.length === 0;
}

var corners = [[0, 0], [19, 0], [19, 19], [0, 19]];
function getAllPositions(piece, transform) {
  return piece.map(function (square, index) {
    return {
      square: square,
      index: index
    };
  }).filter(function (piece) {
    return piece.square;
  }).map(function (square) {
    var _getXY = getXY(square.index, Math.sqrt(piece.length)),
        x = _getXY.x,
        y = _getXY.y;

    return {
      x: x + transform.x,
      y: y + transform.y
    };
  }).sort(function (a, b) {
    return getPosition(b.x, b.y) - getPosition(a.x, a.y);
  });
}
function getValidPositions(G, ctx, piece, transform, playerID) {
  var positions = getAllPositions(piece, transform);

  if (positions.some(function (pos) {
    return !inBounds(pos.x, pos.y);
  }) || // Check if piece is on board
  positions.some( // Check if squares don't touch with edges
  function (pos) {
    return G.board[getPosition(pos.x, pos.y)] !== null || positions.some(function (pos) {
      return [[-1, 0], [1, 0], [0, -1], [0, 1]].some(function (dir) {
        return inBounds(pos.x + dir[0], pos.y + dir[1]) && G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID;
      });
    });
  }) || !positions.some(function (pos) {
    return [[-1, -1], [1, -1], [-1, 1], [1, 1]].some(function (dir) {
      return inBounds(pos.x + dir[0], pos.y + dir[1]) && G.board[getPosition(pos.x + dir[0], pos.y + dir[1])] === playerID;
    });
  }) && (!isFirstTurn(ctx) || !positions.some(function (pos) {
    return pos.x === corners[playerID][0] && pos.y === corners[playerID][1];
  }))) {
    return null;
  }

  return positions;
}
function placePiece(G, ctx, id, transform) {
  var playerID = getPlayer(ctx, ctx.playerID);
  var piece = _pieces__WEBPACK_IMPORTED_MODULE_1__["pieces"][G.players[playerID].pieces[id]];

  if (transform.flipX) {
    piece = flipPieceX(piece);
  }

  if (transform.flipY) {
    piece = flipPieceY(piece);
  }

  for (var i = 0; i < transform.rotation; i++) {
    piece = rotatePiece(piece);
  }

  var positions = getValidPositions(G, ctx, piece, transform, playerID);

  if (positions === null) {
    return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  }

  return Object.assign({}, G, {
    board: G.board.map(function (square, i) {
      if (positions.length > 0 && i === getPosition(positions[positions.length - 1].x, positions[positions.length - 1].y)) {
        positions.pop();
        return playerID;
      } else {
        return square;
      }
    }),
    players: Object.values(Object.assign({}, G.players, _defineProperty({}, playerID, Object.assign({}, G.players[playerID], {
      pieces: G.players[playerID].pieces.filter(function (_, i) {
        return i !== id;
      })
    }))))
  });
}
function endGame(G, ctx) {
  return Object.assign({}, G, {
    players: Object.values(Object.assign({}, G.players, _defineProperty({}, getPlayer(ctx, ctx.playerID), Object.assign({}, G.players[getPlayer(ctx, ctx.playerID)], {
      end: true
    }))))
  });
}
var GameConfig = {
  name: 'cornerus',
  flow: {
    movesPerTurn: 1,
    turnOrder: _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["TurnOrder"].CUSTOM_FROM('turnOrder'),
    endGameIf: function endGameIf(G, ctx) {
      if (!G.players.some(function (player) {
        return !player.end && player.pieces.length > 0;
      })) {
        return {
          scoreboard: getScoreBoard(G, ctx)
        };
      }
    },
    onTurnBegin: function onTurnBegin(G, ctx) {
      if (playerEnded(G, ctx)) {
        do {
          ctx.stats.phase.numMoves[ctx.currentPlayer] += 1;
          ctx.playOrderPos = (ctx.playOrderPos + 1) % ctx.playOrder.length;
          ctx.currentPlayer = ctx.playOrder[ctx.playOrderPos];
          ctx.actionPlayers = [ctx.currentPlayer];
          ctx.turn++;
        } while (playerEnded(G, ctx));

        ctx.events.endTurn();
      }
    }
  },
  moves: {
    placePiece: placePiece,
    endGame: endGame
  },
  setup: function setup(ctx) {
    var turnOrders = [['0', '1'], ['0', '1', '2', '0', '0', '1', '2', '1', '0', '1', '2', '2'], ['0', '1', '2', '3']];
    return {
      board: Array(400).fill(null),
      players: Array(4).fill(0).map(function () {
        return {
          end: false,
          pieces: Array(_pieces__WEBPACK_IMPORTED_MODULE_1__["pieces"].length).fill(0).map(function (_, i) {
            return i;
          })
        };
      }),
      turnOrder: turnOrders[ctx.numPlayers - 2]
    };
  }
};
var CornerusGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])(GameConfig);

/***/ }),

/***/ "./src/games/cornerus/pieces.ts":
/*!**************************************!*\
  !*** ./src/games/cornerus/pieces.ts ***!
  \**************************************/
/*! exports provided: pieces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieces", function() { return pieces; });
var pieces = [[true], [false, false, true, true], [true, true, false, true], [true, true, true, true], [false, false, false, true, true, true, false, false, false], [false, true, false, true, true, true, false, false, false], [false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false], [false, false, true, true, true, true, false, false, false], [false, true, true, true, true, false, false, false, false], [false, false, false, false, true, false, false, false, true, true, true, true, false, false, false, false], [false, true, false, false, true, false, true, true, true], [true, false, false, true, false, false, true, true, true], [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false], [false, false, true, true, true, true, true, false, false], [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false], [true, false, false, true, true, false, true, true, false], [false, true, true, true, true, false, true, false, false], [true, true, false, true, false, false, true, true, false], [false, true, true, true, true, false, false, true, false], [false, true, false, true, true, true, false, true, false], [false, false, false, false, false, true, false, false, true, true, true, true, false, false, false, false]];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvQ29udHJvbHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jb3JuZXJ1cy9Db250cm9scy5jc3M/YTg4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvQ29udHJvbHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jb3JuZXJ1cy9ib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2Nvcm5lcnVzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvcGllY2VzLnRzIl0sIm5hbWVzIjpbIkNvbnRyb2xzIiwiYXJndW1lbnRzIiwiX2ZsaXBZIiwiZmxpcFkiLCJiaW5kIiwiX2ZsaXBYIiwiZmxpcFgiLCJuIiwiZGF0YSIsInJvdGF0ZVBpZWNlIiwicHJvcHMiLCJwaWVjZSIsImkiLCJtb2RpZnlQaWVjZSIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwiZmxpcFBpZWNlWSIsImZsaXBQaWVjZVgiLCJvZmZzZXQiLCJwbGF5ZXJJRCIsImdldFBsYXllciIsImN0eCIsImN1cnJlbnRQbGF5ZXIiLCJpbmRleCIsIkciLCJwbGF5ZXJzIiwicGllY2VzIiwibGVuZ3RoIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJyb3RhdGUiLCJpZCIsIlJvdGF0ZUxlZnQiLCJSb3RhdGVSaWdodCIsInN0eWxlIiwiRmxpcCIsInNlbGVjdCIsIkNoZXZyb25MZWZ0IiwiQ2hldnJvblJpZ2h0IiwicGxhY2VQaWVjZSIsImRpc2FibGVkIiwidmFsaWRUcmFuc2Zvcm0iLCJvcGFjaXR5IiwiRG9uZSIsIkNvbXBvbmVudCIsIkJvYXJkIiwiX2VuZEdhbWUiLCJlbmRHYW1lIiwiX21vZGlmeVBpZWNlIiwiX3BsYWNlUGllY2UiLCJfb25Ecm9wIiwiY29vcmRzIiwieCIsIk1hdGgiLCJyb3VuZCIsInkiLCJzdGF0ZSIsInBvc2l0aW9ucyIsImdldEFsbFBvc2l0aW9ucyIsImV2ZXJ5IiwicG9zIiwiaW5Cb3VuZHMiLCJzZXRTdGF0ZSIsImlzVHJhbnNmb3JtVmFsaWQiLCJfZ2V0T3B0aW9uc01lbnVJdGVtcyIsIm9wdGlvbiIsInRleHQiLCJvcHRpb25zIiwibW92ZXMiLCJzY29yZWJvYXJkIiwiZ2FtZW92ZXIiLCJzY29yZSIsImlzTG9jYWxHYW1lIiwiZ2FtZUFyZ3MiLCJmaW5kIiwicmFuayIsIlNjb3JlYm9hcmQiLCJnZXRWYWxpZFBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJwbGF5ZXIiLCJwcmV2UHJvcHMiLCJ0dXJuIiwiR2FtZUxheW91dCIsImdhbWVPdmVyIiwiX2dldEdhbWVPdmVyIiwiZXh0cmFDYXJkQ29udGVudCIsIl9nZXRTY29yZUJvYXJkIiwiY29sb3JzIiwiYmx1ZSIsInllbGxvdyIsInJlZCIsImdyZWVuIiwiY29sb3JNYXAiLCJnZXRDb2xvck1hcCIsIm9wdGlvbnNNZW51SXRlbXMiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsInRleHRBbGlnbiIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiX2dldFN0YXR1cyIsIkdyaWQiLCJyb3dzIiwiY29scyIsIlRva2VuIiwiZHJhZ2dhYmxlIiwic2hvdWxkRHJhZyIsIm9uRHJvcCIsImZpbGwiLCJtYXAiLCJzcXVhcmUiLCJmaWx0ZXIiLCJzcXJ0IiwiZmxvb3IiLCJ3aWR0aCIsImhlaWdodCIsImtleSIsInBvaW50ZXJFdmVudHMiLCJib2FyZCIsImZvckVhY2giLCJncmV5IiwiY29uZmlnIiwiYmdpb0dhbWUiLCJDb3JuZXJ1c0dhbWUiLCJiZ2lvQm9hcmQiLCJnZXRYWSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFBvc2l0aW9uIiwibnVtTW92ZXMiLCJzdGF0cyIsInBoYXNlIiwibnVtUGxheWVycyIsImlzRmlyc3RUdXJuIiwiZ2V0U2NvcmVCb2FyZCIsInRvU3RyaW5nIiwicmVkdWNlIiwiYWNjIiwic29ydCIsImEiLCJiIiwiXyIsInNxdWFyZXMiLCJyb3RhdGVkIiwiQXJyYXkiLCJmbGlwcGVkIiwicGxheWVyRW5kZWQiLCJlbmQiLCJjb3JuZXJzIiwic29tZSIsImRpciIsIklOVkFMSURfTU9WRSIsInBvcCIsInZhbHVlcyIsIkdhbWVDb25maWciLCJuYW1lIiwiZmxvdyIsIm1vdmVzUGVyVHVybiIsInR1cm5PcmRlciIsIlR1cm5PcmRlciIsIkNVU1RPTV9GUk9NIiwiZW5kR2FtZUlmIiwib25UdXJuQmVnaW4iLCJwbGF5T3JkZXJQb3MiLCJwbGF5T3JkZXIiLCJhY3Rpb25QbGF5ZXJzIiwiZXZlbnRzIiwiZW5kVHVybiIsInNldHVwIiwidHVybk9yZGVycyIsIkdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLEdBQUcsZ0NBQWdDLGlCQUFpQixHQUFHLHVEQUF1RCxlQUFlLEdBQUc7QUFDM007QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd0pBQXlFOztBQUUvRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsd0pBQXlFO0FBQzVGLG1CQUFtQixtQkFBTyxDQUFDLHdKQUF5RTs7QUFFcEcsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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S0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLElBQXBDLEVBQTBDLEtBQTFDLEVBQWlELEtBQWpELEVBQXdELElBQXhELEVBQThELElBQTlELEVBQW9FLElBQXBFLEVBQTBFLElBQTFFLEVBQWdGLEtBQWhGLEVBQXVGLEtBQXZGLEVBQThGLEtBQTlGLEVBQXFHLEtBQXJHLENBL0NrQixDQUFmLEMiLCJmaWxlIjoiMThkNmY0NTNhMDA2NTVjNzQ0YjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5fMTlibDFnZVNKY2M4SDVHWU0zVUxMTCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5fMTlibDFnZVNKY2M4SDVHWU0zVUxMTCAqIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLl8xOWJsMWdlU0pjYzhINUdZTTNVTExMIC5fMW10eWtGVTNsVUptcFc2Y2dQSFhXayB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiQ29udHJvbHNcIjogXCJfMTlibDFnZVNKY2M4SDVHWU0zVUxMTFwiLFxuXHRcImRpc2FibGVkXCI6IFwiXzFtdHlrRlUzbFVKbXBXNmNnUEhYV2tcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vQ29udHJvbHMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Db250cm9scy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Db250cm9scy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcm90YXRlUGllY2UsIGZsaXBQaWVjZVksIGZsaXBQaWVjZVgsIGdldFBsYXllciB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBwaWVjZXMgfSBmcm9tICcuL3BpZWNlcyc7XG5pbXBvcnQgRG9uZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZSc7XG5pbXBvcnQgUm90YXRlTGVmdCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUm90YXRlTGVmdCc7XG5pbXBvcnQgUm90YXRlUmlnaHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JvdGF0ZVJpZ2h0JztcbmltcG9ydCBGbGlwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GbGlwJztcbmltcG9ydCBDaGV2cm9uTGVmdCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnQnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGNzcyBmcm9tICcuL0NvbnRyb2xzLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2ZsaXBZID0gdGhpcy5mbGlwWS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9mbGlwWCA9IHRoaXMuZmxpcFguYmluZCh0aGlzKTtcbiAgICB9XG4gICAgcm90YXRlKG4pIHtcbiAgICAgICAgbGV0IGRhdGEgPSByb3RhdGVQaWVjZSh0aGlzLnByb3BzLnBpZWNlLmRhdGEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGEgPSByb3RhdGVQaWVjZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm1vZGlmeVBpZWNlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucGllY2UsIHsgdHJhbnNmb3JtOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybSwgeyByb3RhdGlvbjogKHRoaXMucHJvcHMucGllY2UudHJhbnNmb3JtLnJvdGF0aW9uICsgbikgJSA0IH0pLCBkYXRhIH0pKTtcbiAgICB9XG4gICAgZmxpcFkoKSB7XG4gICAgICAgIHRoaXMucHJvcHMubW9kaWZ5UGllY2UoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5waWVjZSwgeyB0cmFuc2Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucGllY2UudHJhbnNmb3JtLCB7IGZsaXBZOiAhdGhpcy5wcm9wcy5waWVjZS50cmFuc2Zvcm0uZmxpcFksIHJvdGF0aW9uOiB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvbiAlIDIgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvblxuICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvbiArIDIpICUgNCB9KSwgZGF0YTogZmxpcFBpZWNlWSh0aGlzLnByb3BzLnBpZWNlLmRhdGEpIH0pKTtcbiAgICB9XG4gICAgZmxpcFgoKSB7XG4gICAgICAgIHRoaXMucHJvcHMubW9kaWZ5UGllY2UoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5waWVjZSwgeyB0cmFuc2Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucGllY2UudHJhbnNmb3JtLCB7IGZsaXBYOiAhdGhpcy5wcm9wcy5waWVjZS50cmFuc2Zvcm0uZmxpcFgsIHJvdGF0aW9uOiB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvbiAlIDIgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvblxuICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybS5yb3RhdGlvbiArIDIpICUgNCB9KSwgZGF0YTogZmxpcFBpZWNlWCh0aGlzLnByb3BzLnBpZWNlLmRhdGEpIH0pKTtcbiAgICB9XG4gICAgc2VsZWN0KG9mZnNldCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJJRCA9IGdldFBsYXllcih0aGlzLnByb3BzLmN0eCwgdGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllcik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKHRoaXMucHJvcHMucGllY2UuaW5kZXggKyBvZmZzZXQpICUgdGhpcy5wcm9wcy5HLnBsYXllcnNbcGxheWVySURdLnBpZWNlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucHJvcHMubW9kaWZ5UGllY2UoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5waWVjZSwgeyBpbmRleCwgZGF0YTogcGllY2VzW3RoaXMucHJvcHMuRy5wbGF5ZXJzW3BsYXllcklEXS5waWVjZXNbaW5kZXhdXSwgdHJhbnNmb3JtOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnBpZWNlLnRyYW5zZm9ybSwgeyBmbGlwWDogZmFsc2UsIGZsaXBZOiBmYWxzZSwgcm90YXRpb246IDAgfSkgfSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY3NzLkNvbnRyb2xzIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgb25DbGljazogKCkgPT4gdGhpcy5yb3RhdGUoMyksIGlkOiBcInJvdGF0ZS1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdGF0ZUxlZnQsIG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBvbkNsaWNrOiAoKSA9PiB0aGlzLnJvdGF0ZSgxKSwgaWQ6IFwicm90YXRlLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdGF0ZVJpZ2h0LCBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgb25DbGljazogdGhpcy5fZmxpcFksIHN0eWxlOiB7IHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknIH0sIGlkOiBcImZsaXAteVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGlwLCBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgb25DbGljazogdGhpcy5fZmxpcFgsIGlkOiBcImZsaXAteFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGlwLCBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgb25DbGljazogKCkgPT4gdGhpcy5zZWxlY3QodGhpcy5wcm9wcy5HLnBsYXllcnNbZ2V0UGxheWVyKHRoaXMucHJvcHMuY3R4LCB0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyKV0ucGllY2VzLmxlbmd0aCAtIDEpLCBpZDogXCJzZWxlY3QtcHJldlwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGV2cm9uTGVmdCwgbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IG9uQ2xpY2s6ICgpID0+IHRoaXMuc2VsZWN0KDEpLCBpZDogXCJzZWxlY3QtbmV4dFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGV2cm9uUmlnaHQsIG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBvbkNsaWNrOiB0aGlzLnByb3BzLnBsYWNlUGllY2UsIGlkOiBcInBsYWNlXCIsIGRpc2FibGVkOiAhdGhpcy5wcm9wcy52YWxpZFRyYW5zZm9ybSwgc3R5bGU6IHsgb3BhY2l0eTogdGhpcy5wcm9wcy52YWxpZFRyYW5zZm9ybSA/IDEgOiAwLjUgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9uZSwgbnVsbCkpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTGF5b3V0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvL3VpJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby91aSc7XG5pbXBvcnQgeyBnZXRQbGF5ZXIsIGdldFZhbGlkUG9zaXRpb25zLCBpbkJvdW5kcywgZ2V0QWxsUG9zaXRpb25zIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IFNjb3JlYm9hcmQgfSBmcm9tICcuLi8uLi9jb21tb24vU2NvcmVib2FyZCc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuaW1wb3J0IHllbGxvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMveWVsbG93JztcbmltcG9ydCBncmVlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvbGlnaHRHcmVlbic7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgZ3JleSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JleSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzJztcbmltcG9ydCB7IHBpZWNlcyB9IGZyb20gJy4vcGllY2VzJztcbmltcG9ydCB7IGlzTG9jYWxHYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2dhbWVNb2RlJztcbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLl9lbmRHYW1lID0gdGhpcy5lbmRHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX21vZGlmeVBpZWNlID0gdGhpcy5tb2RpZnlQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9wbGFjZVBpZWNlID0gdGhpcy5wbGFjZVBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uRHJvcCA9IChjb29yZHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKGNvb3Jkcy54KTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKGNvb3Jkcy55KTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGllY2UudHJhbnNmb3JtLCB7IHgsIHkgfSk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBnZXRBbGxQb3NpdGlvbnModGhpcy5zdGF0ZS5waWVjZS5kYXRhLCB0cmFuc2Zvcm0pO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9ucy5ldmVyeShwb3MgPT4gaW5Cb3VuZHMocG9zLngsIHBvcy55KSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgcGllY2U6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGllY2UsIHsgdHJhbnNmb3JtIH0pLCB2YWxpZFRyYW5zZm9ybTogdGhpcy5pc1RyYW5zZm9ybVZhbGlkKHRoaXMuc3RhdGUucGllY2UuZGF0YSwgdHJhbnNmb3JtKSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldE9wdGlvbnNNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5fZW5kR2FtZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgRW5kIGdhbWVgLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbb3B0aW9uXTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGllY2U6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHsgeDogMTAsIHk6IDEwLCByb3RhdGlvbjogMCwgZmxpcFg6IGZhbHNlLCBmbGlwWTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBwaWVjZXNbMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsaWRUcmFuc2Zvcm06IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbmRHYW1lKCkge1xuICAgICAgICB0aGlzLnByb3BzLm1vdmVzLmVuZEdhbWUoKTtcbiAgICB9XG4gICAgbW9kaWZ5UGllY2UocGllY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IHBpZWNlLCB2YWxpZFRyYW5zZm9ybTogdGhpcy5pc1RyYW5zZm9ybVZhbGlkKHBpZWNlLmRhdGEsIHBpZWNlLnRyYW5zZm9ybSkgfSkpO1xuICAgIH1cbiAgICBwbGFjZVBpZWNlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm1vdmVzLnBsYWNlUGllY2UodGhpcy5zdGF0ZS5waWVjZS5pbmRleCwgdGhpcy5zdGF0ZS5waWVjZS50cmFuc2Zvcm0pO1xuICAgIH1cbiAgICBfZ2V0R2FtZU92ZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlYm9hcmQgPSB0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci5zY29yZWJvYXJkO1xuICAgICAgICBpZiAoc2NvcmVib2FyZFswXS5zY29yZSA9PT0gc2NvcmVib2FyZFtzY29yZWJvYXJkLmxlbmd0aCAtIDFdLnNjb3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RyYXcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTG9jYWxHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3JlYm9hcmRbMF0uc2NvcmUgPiBzY29yZWJvYXJkWzFdLnNjb3JlID8gJ2JsdWUveWVsbG93IHdvbicgOiAncmVkL2dyZWVuIHdvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmVib2FyZFswXS5zY29yZSA9PT0gc2NvcmVib2FyZC5maW5kKHJhbmsgPT4gcmFuay5wbGF5ZXJJRCA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd5b3Ugd29uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneW91IGxvc3QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U2NvcmVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNjb3JlYm9hcmQsIHsgc2NvcmVib2FyZDogdGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIuc2NvcmVib2FyZCwgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsIHBsYXllcnM6IHRoaXMucHJvcHMuZ2FtZUFyZ3MucGxheWVycyB9KSk7XG4gICAgfVxuICAgIGlzVHJhbnNmb3JtVmFsaWQoZGF0YSwgdHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiAoZ2V0VmFsaWRQb3NpdGlvbnModGhpcy5wcm9wcy5HLCB0aGlzLnByb3BzLmN0eCwgZGF0YSwgdHJhbnNmb3JtLCBnZXRQbGF5ZXIodGhpcy5wcm9wcy5jdHgsIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIpKSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIF9nZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5nYW1lQXJncykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmdhbWVBcmdzKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyID0gJ0JsdWUveWVsbG93JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJzEnOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllciA9ICdSZWQvZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0gYCR7cGxheWVyfSdzIHR1cm5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucHJvcHMucGxheWVySUQgJiYgIWlzTG9jYWxHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gJ1BsYWNlIHBpZWNlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyICE9PSB0aGlzLnByb3BzLnBsYXllcklEICYmICFpc0xvY2FsR2FtZSh0aGlzLnByb3BzLmdhbWVBcmdzKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdXYWl0aW5nIGZvciBvcHBvbmVudC4uLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5jdHgudHVybiAhPT0gdGhpcy5wcm9wcy5jdHgudHVybikge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5waWVjZS50cmFuc2Zvcm0sIHsgZmxpcFg6IGZhbHNlLCBmbGlwWTogZmFsc2UsIHJvdGF0aW9uOiAwLCB4OiAxMCwgeTogMTAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcGllY2VzW3RoaXMucHJvcHMuRy5wbGF5ZXJzW2dldFBsYXllcih0aGlzLnByb3BzLmN0eCwgdGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllcildLnBpZWNlc1swXV07XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgcGllY2U6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGllY2UsIHsgaW5kZXg6IDAsIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSB9KSwgdmFsaWRUcmFuc2Zvcm06IHRoaXMuaXNUcmFuc2Zvcm1WYWxpZChkYXRhLCB0cmFuc2Zvcm0pIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgZ2FtZU92ZXI6IHRoaXMuX2dldEdhbWVPdmVyKCksIGV4dHJhQ2FyZENvbnRlbnQ6IHRoaXMuX2dldFNjb3JlQm9hcmQoKSwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFtibHVlLCB5ZWxsb3csIHJlZCwgZ3JlZW5dO1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHRoaXMuZ2V0Q29sb3JNYXAoY29sb3JzKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgb3B0aW9uc01lbnVJdGVtczogdGhpcy5fZ2V0T3B0aW9uc01lbnVJdGVtcyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIsIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9IH0sIHRoaXMuX2dldFN0YXR1cygpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgcm93czogMjAsIGNvbHM6IDIwLCBvbkNsaWNrOiAoKSA9PiBudWxsLCBjb2xvck1hcDogY29sb3JNYXAgfSwgaXNMb2NhbEdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykgfHwgdGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFRva2VuLCB7IHg6IHRoaXMuc3RhdGUucGllY2UudHJhbnNmb3JtLngsIHk6IHRoaXMuc3RhdGUucGllY2UudHJhbnNmb3JtLnksIGRyYWdnYWJsZTogdHJ1ZSwgc2hvdWxkRHJhZzogKCkgPT4gdHJ1ZSwgb25Ecm9wOiB0aGlzLl9vbkRyb3AgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgZmlsbDogY29sb3JzW2dldFBsYXllcih0aGlzLnByb3BzLmN0eCwgdGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllcildWzYwMF0sIG9wYWNpdHk6IDAuOSB9LCB0aGlzLnN0YXRlLnBpZWNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChzcXVhcmUsIGluZGV4KSA9PiAoeyBzcXVhcmUsIGluZGV4IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGllY2UgPT4gcGllY2Uuc3F1YXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocGllY2UgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogcGllY2UuaW5kZXggJSBNYXRoLnNxcnQodGhpcy5zdGF0ZS5waWVjZS5kYXRhLmxlbmd0aCksIHk6IE1hdGguZmxvb3IocGllY2UuaW5kZXggLyBNYXRoLnNxcnQodGhpcy5zdGF0ZS5waWVjZS5kYXRhLmxlbmd0aCkpLCB3aWR0aDogXCIxXCIsIGhlaWdodDogXCIxXCIsIGtleTogcGllY2UuaW5kZXggfSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHdpZHRoOiBcIjUwXCIsIGhlaWdodDogXCI1MFwiLCB4OiBcIi0yNVwiLCB5OiBcIi0yNVwiLCBmaWxsOiBcIm5vbmVcIiwgc3R5bGU6IHsgcG9pbnRlckV2ZW50czogJ2FsbCcgfSB9KSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9scywgeyBwbGFjZVBpZWNlOiB0aGlzLl9wbGFjZVBpZWNlLCBtb2RpZnlQaWVjZTogdGhpcy5fbW9kaWZ5UGllY2UsIHZhbGlkVHJhbnNmb3JtOiB0aGlzLnN0YXRlLnZhbGlkVHJhbnNmb3JtLCBwaWVjZTogdGhpcy5zdGF0ZS5waWVjZSwgRzogdGhpcy5wcm9wcy5HLCBjdHg6IHRoaXMucHJvcHMuY3R4IH0pKSkpO1xuICAgIH1cbiAgICBnZXRDb2xvck1hcChjb2xvcnMpIHtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcy5HLmJvYXJkXG4gICAgICAgICAgICAubWFwKChzcXVhcmUsIGluZGV4KSA9PiAoeyBzcXVhcmUsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZvckVhY2gocGllY2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBpZWNlLmluZGV4ICUgMjA7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihwaWVjZS5pbmRleCAvIDIwKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke3h9LCR7eX1gO1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gZ3JleVs4MDBdO1xuICAgICAgICAgICAgaWYgKHBpZWNlLnNxdWFyZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICgoeCArIHkpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1twaWVjZS5zcXVhcmVdWzcwMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1twaWVjZS5zcXVhcmVdWzYwMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBibHVlWzQwMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4ID09PSAxOSAmJiB5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB5ZWxsb3dbNDAwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHggPT09IDE5ICYmIHkgPT09IDE5KSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSByZWRbNDAwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHggPT09IDAgJiYgeSA9PT0gMTkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IGdyZWVuWzQwMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoeCArIHkpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gZ3JleVs5MDBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3JNYXBba2V5XSA9IGNvbG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbG9yTWFwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvcm5lcnVzR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9HYW1lOiBDb3JuZXJ1c0dhbWUsXG4gICAgYmdpb0JvYXJkOiBCb2FyZCxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgeyBHYW1lLCBJTlZBTElEX01PVkUsIFR1cm5PcmRlciB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vY29yZSc7XG5pbXBvcnQgeyBwaWVjZXMgfSBmcm9tICcuL3BpZWNlcyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0WFkocG9zaXRpb24sIHNpemUpIHtcbiAgICByZXR1cm4geyB4OiBwb3NpdGlvbiAlIHNpemUsIHk6IE1hdGguZmxvb3IocG9zaXRpb24gLyBzaXplKSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4geCArIHkgKiAyMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbkJvdW5kcyh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgMjAgJiYgeSA+PSAwICYmIHkgPCAyMDtcbn1cbi8vIE1hcCByZWFsIHBsYXllcklEIHRvICdmYWtlJyBvbmVcbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5ZXIoY3R4LCBwbGF5ZXJJRCkge1xuICAgIGNvbnN0IG51bU1vdmVzID0gY3R4LnN0YXRzLnBoYXNlLm51bU1vdmVzW3BsYXllcklEXTtcbiAgICBpZiAoY3R4Lm51bVBsYXllcnMgPT09IDIpIHtcbiAgICAgICAgaWYgKHBsYXllcklEID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1Nb3ZlcyAlIDIgPT09IDEgPyAnMScgOiAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTW92ZXMgJSAyID09PSAxID8gJzMnIDogJzInO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGN0eC5udW1QbGF5ZXJzID09PSAzKSB7XG4gICAgICAgIHJldHVybiAoY3R4LnR1cm4gKyAxKSAlIDQgPT09IDAgPyAnMycgOiBwbGF5ZXJJRDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJJRDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGaXJzdFR1cm4oY3R4KSB7XG4gICAgY29uc3QgbnVtTW92ZXMgPSBjdHguc3RhdHMucGhhc2UubnVtTW92ZXNbY3R4LnBsYXllcklEXTtcbiAgICBpZiAoY3R4Lm51bVBsYXllcnMgPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW1Nb3ZlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgbnVtTW92ZXMgPT09IDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN0eC5udW1QbGF5ZXJzID09PSAzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbnVtTW92ZXMgPT09ICd1bmRlZmluZWQnIHx8IGN0eC50dXJuID09PSAzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW1Nb3ZlcyA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjb3JlQm9hcmQoRywgY3R4KSB7XG4gICAgY29uc3Qgc2NvcmVib2FyZCA9IEcucGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4gKHtcbiAgICAgICAgcGxheWVySUQ6IGkudG9TdHJpbmcoKSxcbiAgICAgICAgc2NvcmU6IHBsYXllci5waWVjZXMucmVkdWNlKChhY2MsIHBpZWNlKSA9PiBhY2MgLSBwaWVjZXNbcGllY2VdLmZpbHRlcihzcXVhcmUgPT4gc3F1YXJlKS5sZW5ndGgsIDApLFxuICAgIH0pKTtcbiAgICBpZiAoY3R4Lm51bVBsYXllcnMgPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgcGxheWVySUQ6ICcwJywgc2NvcmU6IHNjb3JlYm9hcmRbMF0uc2NvcmUgKyBzY29yZWJvYXJkWzFdLnNjb3JlIH0sXG4gICAgICAgICAgICB7IHBsYXllcklEOiAnMScsIHNjb3JlOiBzY29yZWJvYXJkWzJdLnNjb3JlICsgc2NvcmVib2FyZFszXS5zY29yZSB9LFxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3R4Lm51bVBsYXllcnMgPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3JlYm9hcmQuZmlsdGVyKChfLCBpKSA9PiBpICE9PSAzKS5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NvcmVib2FyZC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBpZWNlKHNxdWFyZXMpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5zcXJ0KHNxdWFyZXMubGVuZ3RoKTtcbiAgICBsZXQgcm90YXRlZCA9IG5ldyBBcnJheShzcXVhcmVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzcXVhcmVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGNvbnN0IHggPSBuICUgc2l6ZTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IobiAvIHNpemUpO1xuICAgICAgICByb3RhdGVkW25dID0gc3F1YXJlc1soc2l6ZSAtIHggLSAxKSAqIHNpemUgKyB5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdGF0ZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZmxpcFBpZWNlWShzcXVhcmVzKSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChzcXVhcmVzLmxlbmd0aCk7XG4gICAgbGV0IGZsaXBwZWQgPSBuZXcgQXJyYXkoc3F1YXJlcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgc3F1YXJlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBmbGlwcGVkW25dID0gc3F1YXJlc1tuICsgc2l6ZSAqIChzaXplIC0gTWF0aC5mbG9vcihuIC8gc2l6ZSkgKiAyIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gZmxpcHBlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmbGlwUGllY2VYKHNxdWFyZXMpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5zcXJ0KHNxdWFyZXMubGVuZ3RoKTtcbiAgICBsZXQgZmxpcHBlZCA9IG5ldyBBcnJheShzcXVhcmVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzcXVhcmVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGZsaXBwZWRbbl0gPSBzcXVhcmVzW24gKyBzaXplIC0gKG4gJSBzaXplKSAqIDIgLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIGZsaXBwZWQ7XG59XG5mdW5jdGlvbiBwbGF5ZXJFbmRlZChHLCBjdHgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBHLnBsYXllcnNbZ2V0UGxheWVyKGN0eCwgY3R4LmN1cnJlbnRQbGF5ZXIpXTtcbiAgICByZXR1cm4gcGxheWVyLmVuZCB8fCBwbGF5ZXIucGllY2VzLmxlbmd0aCA9PT0gMDtcbn1cbmNvbnN0IGNvcm5lcnMgPSBbWzAsIDBdLCBbMTksIDBdLCBbMTksIDE5XSwgWzAsIDE5XV07XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zaXRpb25zKHBpZWNlLCB0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gcGllY2VcbiAgICAgICAgLm1hcCgoc3F1YXJlLCBpbmRleCkgPT4gKHsgc3F1YXJlLCBpbmRleCB9KSlcbiAgICAgICAgLmZpbHRlcihwaWVjZSA9PiBwaWVjZS5zcXVhcmUpXG4gICAgICAgIC5tYXAoc3F1YXJlID0+IHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRYWShzcXVhcmUuaW5kZXgsIE1hdGguc3FydChwaWVjZS5sZW5ndGgpKTtcbiAgICAgICAgcmV0dXJuIHsgeDogeCArIHRyYW5zZm9ybS54LCB5OiB5ICsgdHJhbnNmb3JtLnkgfTtcbiAgICB9KVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gZ2V0UG9zaXRpb24oYi54LCBiLnkpIC0gZ2V0UG9zaXRpb24oYS54LCBhLnkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFBvc2l0aW9ucyhHLCBjdHgsIHBpZWNlLCB0cmFuc2Zvcm0sIHBsYXllcklEKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gZ2V0QWxsUG9zaXRpb25zKHBpZWNlLCB0cmFuc2Zvcm0pO1xuICAgIGlmIChwb3NpdGlvbnMuc29tZShwb3MgPT4gIWluQm91bmRzKHBvcy54LCBwb3MueSkpIHx8IC8vIENoZWNrIGlmIHBpZWNlIGlzIG9uIGJvYXJkXG4gICAgICAgIHBvc2l0aW9ucy5zb21lKFxuICAgICAgICAvLyBDaGVjayBpZiBzcXVhcmVzIGRvbid0IHRvdWNoIHdpdGggZWRnZXNcbiAgICAgICAgcG9zID0+IEcuYm9hcmRbZ2V0UG9zaXRpb24ocG9zLngsIHBvcy55KV0gIT09IG51bGwgfHxcbiAgICAgICAgICAgIHBvc2l0aW9ucy5zb21lKHBvcyA9PiBbWy0xLCAwXSwgWzEsIDBdLCBbMCwgLTFdLCBbMCwgMV1dLnNvbWUoZGlyID0+IGluQm91bmRzKHBvcy54ICsgZGlyWzBdLCBwb3MueSArIGRpclsxXSkgJiZcbiAgICAgICAgICAgICAgICBHLmJvYXJkW2dldFBvc2l0aW9uKHBvcy54ICsgZGlyWzBdLCBwb3MueSArIGRpclsxXSldID09PSBwbGF5ZXJJRCkpKSB8fFxuICAgICAgICAoIXBvc2l0aW9ucy5zb21lKChwb3MpID0+IFtbLTEsIC0xXSwgWzEsIC0xXSwgWy0xLCAxXSwgWzEsIDFdXS5zb21lKGRpciA9PiBpbkJvdW5kcyhwb3MueCArIGRpclswXSwgcG9zLnkgKyBkaXJbMV0pICYmIEcuYm9hcmRbZ2V0UG9zaXRpb24ocG9zLnggKyBkaXJbMF0sIHBvcy55ICsgZGlyWzFdKV0gPT09IHBsYXllcklEKSkgJiZcbiAgICAgICAgICAgICghaXNGaXJzdFR1cm4oY3R4KSB8fFxuICAgICAgICAgICAgICAgICFwb3NpdGlvbnMuc29tZShwb3MgPT4gcG9zLnggPT09IGNvcm5lcnNbcGxheWVySURdWzBdICYmIHBvcy55ID09PSBjb3JuZXJzW3BsYXllcklEXVsxXSkpKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVBpZWNlKEcsIGN0eCwgaWQsIHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IHBsYXllcklEID0gZ2V0UGxheWVyKGN0eCwgY3R4LnBsYXllcklEKTtcbiAgICBsZXQgcGllY2UgPSBwaWVjZXNbRy5wbGF5ZXJzW3BsYXllcklEXS5waWVjZXNbaWRdXTtcbiAgICBpZiAodHJhbnNmb3JtLmZsaXBYKSB7XG4gICAgICAgIHBpZWNlID0gZmxpcFBpZWNlWChwaWVjZSk7XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm0uZmxpcFkpIHtcbiAgICAgICAgcGllY2UgPSBmbGlwUGllY2VZKHBpZWNlKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFuc2Zvcm0ucm90YXRpb247IGkrKykge1xuICAgICAgICBwaWVjZSA9IHJvdGF0ZVBpZWNlKHBpZWNlKTtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb25zID0gZ2V0VmFsaWRQb3NpdGlvbnMoRywgY3R4LCBwaWVjZSwgdHJhbnNmb3JtLCBwbGF5ZXJJRCk7XG4gICAgaWYgKHBvc2l0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gSU5WQUxJRF9NT1ZFO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgRywgeyBib2FyZDogRy5ib2FyZC5tYXAoKHNxdWFyZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgaSA9PT0gZ2V0UG9zaXRpb24ocG9zaXRpb25zW3Bvc2l0aW9ucy5sZW5ndGggLSAxXS54LCBwb3NpdGlvbnNbcG9zaXRpb25zLmxlbmd0aCAtIDFdLnkpKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXJJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBwbGF5ZXJzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcucGxheWVycywgeyBbcGxheWVySURdOiBPYmplY3QuYXNzaWduKHt9LCBHLnBsYXllcnNbcGxheWVySURdLCB7IHBpZWNlczogRy5wbGF5ZXJzW3BsYXllcklEXS5waWVjZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpZCkgfSkgfSkpIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuZEdhbWUoRywgY3R4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgcGxheWVyczogT2JqZWN0LnZhbHVlcyhPYmplY3QuYXNzaWduKHt9LCBHLnBsYXllcnMsIHsgW2dldFBsYXllcihjdHgsIGN0eC5wbGF5ZXJJRCldOiBPYmplY3QuYXNzaWduKHt9LCBHLnBsYXllcnNbZ2V0UGxheWVyKGN0eCwgY3R4LnBsYXllcklEKV0sIHsgZW5kOiB0cnVlIH0pIH0pKSB9KTtcbn1cbmNvbnN0IEdhbWVDb25maWcgPSB7XG4gICAgbmFtZTogJ2Nvcm5lcnVzJyxcbiAgICBmbG93OiB7XG4gICAgICAgIG1vdmVzUGVyVHVybjogMSxcbiAgICAgICAgdHVybk9yZGVyOiBUdXJuT3JkZXIuQ1VTVE9NX0ZST00oJ3R1cm5PcmRlcicpLFxuICAgICAgICBlbmRHYW1lSWY6IChHLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmICghRy5wbGF5ZXJzLnNvbWUocGxheWVyID0+ICFwbGF5ZXIuZW5kICYmIHBsYXllci5waWVjZXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzY29yZWJvYXJkOiBnZXRTY29yZUJvYXJkKEcsIGN0eCkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UdXJuQmVnaW46IChHLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJFbmRlZChHLCBjdHgpKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdHguc3RhdHMucGhhc2UubnVtTW92ZXNbY3R4LmN1cnJlbnRQbGF5ZXJdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5wbGF5T3JkZXJQb3MgPSAoY3R4LnBsYXlPcmRlclBvcyArIDEpICUgY3R4LnBsYXlPcmRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jdXJyZW50UGxheWVyID0gY3R4LnBsYXlPcmRlcltjdHgucGxheU9yZGVyUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFjdGlvblBsYXllcnMgPSBbY3R4LmN1cnJlbnRQbGF5ZXJdO1xuICAgICAgICAgICAgICAgICAgICBjdHgudHVybisrO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHBsYXllckVuZGVkKEcsIGN0eCkpO1xuICAgICAgICAgICAgICAgIGN0eC5ldmVudHMuZW5kVHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW92ZXM6IHtcbiAgICAgICAgcGxhY2VQaWVjZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICB9LFxuICAgIHNldHVwOiAoY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHR1cm5PcmRlcnMgPSBbWycwJywgJzEnXSwgWycwJywgJzEnLCAnMicsICcwJywgJzAnLCAnMScsICcyJywgJzEnLCAnMCcsICcxJywgJzInLCAnMiddLCBbJzAnLCAnMScsICcyJywgJzMnXV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2FyZDogQXJyYXkoNDAwKS5maWxsKG51bGwpLFxuICAgICAgICAgICAgcGxheWVyczogQXJyYXkoNClcbiAgICAgICAgICAgICAgICAuZmlsbCgwKVxuICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBpZWNlczogQXJyYXkocGllY2VzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSksXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0dXJuT3JkZXI6IHR1cm5PcmRlcnNbY3R4Lm51bVBsYXllcnMgLSAyXSxcbiAgICAgICAgfTtcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCBDb3JuZXJ1c0dhbWUgPSBHYW1lKEdhbWVDb25maWcpO1xuIiwiZXhwb3J0IGNvbnN0IHBpZWNlcyA9IFtcbiAgICBbdHJ1ZV0sXG4gICAgW2ZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgW3RydWUsIHRydWUsIGZhbHNlLCB0cnVlXSxcbiAgICBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxuICAgIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxuICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWVdLFxuICAgIFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXG4gICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXG4gICAgW2ZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICBdLFxuICAgIFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0sXG4gICAgW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLFxuICAgIFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZV0sXG4gICAgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlXSxcbiAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9