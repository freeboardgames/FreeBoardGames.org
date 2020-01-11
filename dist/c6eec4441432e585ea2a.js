(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[11],{

/***/ "./src/games/chess/board.tsx":
/*!***********************************!*\
  !*** ./src/games/chess/board.tsx ***!
  \***********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chessjswrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chessjswrapper */ "./src/games/chess/chessjswrapper.ts");
/* harmony import */ var _common_Checkerboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Checkerboard */ "./src/common/Checkerboard.tsx");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/ui */ "./node_modules/@freeboardgame.org/boardgame.io/ui.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _pieces_bishop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pieces/bishop */ "./src/games/chess/pieces/bishop.tsx");
/* harmony import */ var _pieces_king__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pieces/king */ "./src/games/chess/pieces/king.tsx");
/* harmony import */ var _pieces_knight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pieces/knight */ "./src/games/chess/pieces/knight.tsx");
/* harmony import */ var _pieces_pawn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pieces/pawn */ "./src/games/chess/pieces/pawn.tsx");
/* harmony import */ var _pieces_queen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pieces/queen */ "./src/games/chess/pieces/queen.tsx");
/* harmony import */ var _pieces_rook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pieces/rook */ "./src/games/chess/pieces/rook.tsx");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sound */ "./src/games/chess/sound.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */














var COL_NAMES = 'abcdefgh';
var HIGHLIGHTED_COLOR = 'green';
var MOVABLE_COLOR = 'palegreen';
var MOVED_COLOR = '#CCE5FF';
var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    _this.chess = Object(_chessjswrapper__WEBPACK_IMPORTED_MODULE_1__["default"])();
    _this.state = {
      selected: '',
      highlighted: '',
      dragged: '',
      soundEnabled: true
    };

    _this._click = function (coords) {
      var square = coords.square;

      if (!_this.props.isActive) {
        return;
      }

      if (!_this.state.selected && _this._isSelectable(square)) {
        _this.setState(Object.assign({}, _this.state, {
          selected: square,
          highlighted: square
        }));
      } else if (_this.state.selected) {
        _this._tryMove(_this.state.selected, square);
      }
    };

    _this._shouldDrag = function (coords) {
      var x = coords.x;
      var y = coords.y;
      var square = Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_2__["cartesianToAlgebraic"])(x, y);

      var result = _this.props.isActive && _this._isSelectable(square);

      if (result) {
        _this.setState(Object.assign({}, _this.state, {
          dragged: _this._getInitialCell(square)
        }));

        return true;
      }
    };

    _this._onDrag = function (data) {
      var x = data.x;
      var y = data.y;
      var originalX = data.originalX;
      var originalY = data.originalY;

      if (Math.sqrt(Math.pow(x - originalX, 2) + Math.pow(y - originalY, 2)) > 0.2) {
        _this.setState(Object.assign({}, _this.state, {
          selected: _this._getSquare(originalX, originalY),
          highlighted: _this._getSquare(x, y)
        }));
      } else {
        _this.setState(Object.assign({}, _this.state, {
          selected: '',
          highlighted: ''
        }));
      }
    };

    _this._onDrop = function (coords) {
      var x = coords.x;
      var y = coords.y;

      if (_this.state.selected) {
        _this.setState(Object.assign({}, _this.state, {
          dragged: ''
        }));

        _this._tryMove(_this.state.selected, _this._getSquare(x, y));
      }
    };

    _this._setSoundPref = function (soundEnabled) {
      _this.setState(function (oldState) {
        return Object.assign({}, oldState, {
          soundEnabled: soundEnabled
        });
      });
    };

    _this._toggleSoundPref = function () {
      _this._setSoundPref(!_this._getSoundPref());
    };

    _this._getSoundPref = function () {
      return _this.state.soundEnabled;
    };

    _this._getOptionsMenuItems = function () {
      var curSoundPref = _this._getSoundPref();

      var newSoundPref = !curSoundPref;
      var option = {
        onClick: _this._toggleSoundPref,
        text: "".concat(newSoundPref ? 'Enable' : 'Disable', " sound")
      };
      var options = [option];
      return options;
    };

    return _this;
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      if (this.props.G.pgn) {
        this.chess.load_pgn(this.props.G.pgn);
      }

      if (this.props.ctx.gameover) {
        var gameOverBoard = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '50%',
            height: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_2__["Checkerboard"], {
          invert: this.getPlayer() === 'b',
          onClick: function onClick() {
            return undefined;
          }
        }, this._getPieces()));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_4__["GameLayout"], {
          gameOver: this._getGameOver(),
          gameArgs: this.props.gameArgs,
          extraCardContent: gameOverBoard
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_4__["GameLayout"], {
        optionsMenuItems: this._getOptionsMenuItems
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_2__["Checkerboard"], {
        invert: this.getPlayer() === 'b',
        highlightedSquares: this._getHighlightedSquares(),
        onClick: this._click
      }, this._getPieces())));
    }
  }, {
    key: "getPlayer",
    value: function getPlayer() {
      if (this.props.playerID === '1') {
        return 'b';
      } else {
        return 'w';
      }
    }
  }, {
    key: "_tryMove",
    value: function _tryMove(from, to) {
      var moves = this._getMoves(); // check if this is a valid move


      var move = moves.find(function (m) {
        return m.from === from && m.to === to;
      });

      if (move) {
        // actually make the move
        this.props.moves.move(move.san);

        if (this._getSoundPref()) {
          Object(_sound__WEBPACK_IMPORTED_MODULE_12__["playSound"])();
        }

        if (this.props.gameArgs && this.props.gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__["GameMode"].AI) {
          this.props.step();
        }
      } // clear the selection and highlighted piece


      this.setState(Object.assign({}, this.state, {
        selected: '',
        highlighted: ''
      }));
    }
  }, {
    key: "_getHighlightedSquares",
    value: function _getHighlightedSquares() {
      var result = {};

      var history = this._fixHistory(this.chess.history({
        verbose: true
      }));

      if (history.length > 0) {
        var lastMove = history[history.length - 1];

        if (this._getCurrentPlayer() !== lastMove.color) {
          result[lastMove.from] = MOVED_COLOR;
          result[lastMove.to] = MOVED_COLOR;
        }
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._getMoves()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var move = _step.value;
          result[move.to] = MOVABLE_COLOR;
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

      if (this.state.highlighted) {
        result[this.state.highlighted] = HIGHLIGHTED_COLOR;
      }

      return result;
    }
  }, {
    key: "_getSquare",
    value: function _getSquare(x, y) {
      return Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_2__["cartesianToAlgebraic"])(this._getInRange(x), this._getInRange(y));
    }
  }, {
    key: "_getInRange",
    value: function _getInRange(x) {
      return Math.max(Math.min(Math.round(x), 7), 0);
    }
  }, {
    key: "_getPieces",
    value: function _getPieces() {
      var dragged = [];
      var result = [];

      for (var y = 1; y <= 8; y++) {
        for (var x = 0; x < 8; x++) {
          var square = COL_NAMES[x] + y;
          var piece = this.chess.get(square);

          if (piece) {
            var token = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_3__["Token"], {
              draggable: true,
              shouldDrag: this._shouldDrag,
              onDrag: this._onDrag,
              onDrop: this._onDrop,
              square: square,
              animate: true,
              key: this._getInitialCell(square)
            }, this._getPieceByTypeAndColor(piece.type, piece.color));

            if (square === this.state.dragged) {
              result.push(token);
            } else {
              dragged.push(token);
            }
          }
        }
      }

      return dragged.concat(result);
    }
  }, {
    key: "_getPieceByTypeAndColor",
    value: function _getPieceByTypeAndColor(type, color) {
      switch (type) {
        case 'b':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_bishop__WEBPACK_IMPORTED_MODULE_6__["default"], {
            color: color
          });

        case 'k':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_king__WEBPACK_IMPORTED_MODULE_7__["default"], {
            color: color
          });

        case 'n':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_knight__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: color
          });

        case 'p':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_pawn__WEBPACK_IMPORTED_MODULE_9__["default"], {
            color: color
          });

        case 'q':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_queen__WEBPACK_IMPORTED_MODULE_10__["default"], {
            color: color
          });

        case 'r':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pieces_rook__WEBPACK_IMPORTED_MODULE_11__["default"], {
            color: color
          });
      }
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      var gameArgs = this.props.gameArgs;
      var mode = gameArgs.mode;

      if (mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__["GameMode"].OnlineFriend || mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__["GameMode"].AI) {
        if (this.props.ctx.gameover === this.getPlayer()) {
          return 'you won';
        } else if (this.props.ctx.gameover === 'd') {
          return 'draw';
        } else {
          return 'you lost';
        }
      } else {
        // Local game
        switch (this.props.ctx.gameover) {
          case 'w':
            return 'white won';

          case 'b':
            return 'black won';

          case 'd':
            return 'draw';
        }
      }
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      // Online Multiplayer
      if (this.props.gameArgs && this.props.gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__["GameMode"].OnlineFriend) {
        if (this.chess.in_check()) {
          return 'CHECK';
        }

        if (this.chess.turn() === this.getPlayer()) {
          return 'YOUR TURN';
        } else {
          return 'Waiting for opponent...';
        }
      } else {
        // Local game
        if (this.chess.in_check()) {
          return 'CHECK';
        }

        switch (this.chess.turn()) {
          case 'w':
            return "White's turn";

          case 'b':
            return "Black's turn";
        }
      }
    }
  }, {
    key: "_getInitialCell",
    value: function _getInitialCell(square) {
      var history = this._fixHistory(this.chess.history({
        verbose: true
      }));

      var lastSeen = square;

      for (var i = history.length - 1; i >= 0; i--) {
        var move = history[i];

        if (lastSeen === move.to) {
          lastSeen = move.from;
        }
      }

      return lastSeen;
    } // Castling only contains one move, leading to wrong initial cell.

  }, {
    key: "_fixHistory",
    value: function _fixHistory(history) {
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = history[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var move = _step2.value;
          var newMove = null;

          if (move.san === 'O-O-O') {
            if (move.color === 'w') {
              newMove = {
                from: 'a1',
                to: 'd1'
              };
            } else {
              newMove = {
                from: 'a8',
                to: 'd8'
              };
            }
          } else if (move.san === 'O-O') {
            if (move.color === 'w') {
              newMove = {
                from: 'h1',
                to: 'f1'
              };
            } else {
              newMove = {
                from: 'h8',
                to: 'f8'
              };
            }
          }

          result.push(move);

          if (newMove) {
            result.push(newMove);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  }, {
    key: "_isSelectable",
    value: function _isSelectable(square) {
      var piece = this.chess.get(square);
      return piece && piece.color === this._getCurrentPlayer() && this.chess.moves({
        square: square
      }).length > 0;
    }
  }, {
    key: "_getCurrentPlayer",
    value: function _getCurrentPlayer() {
      if (this.props.ctx.currentPlayer === '0') {
        return 'w';
      } else {
        return 'b';
      }
    }
  }, {
    key: "_getMoves",
    value: function _getMoves() {
      if (!this.state.selected) {
        return [];
      }

      return this.chess.moves({
        verbose: true,
        square: this.state.selected
      });
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/games/chess/chessjswrapper.ts":
/*!*******************************************!*\
  !*** ./src/games/chess/chessjswrapper.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChessFn; });
var ChessPkg = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js"); // tslint:disable-line


function ChessFn() {
  var chess = null;

  if (ChessPkg.Chess) {
    chess = new ChessPkg.Chess();
  } else {
    chess = new ChessPkg();
  }

  return chess;
}

/***/ }),

/***/ "./src/games/chess/config.ts":
/*!***********************************!*\
  !*** ./src/games/chess/config.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/chess/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/chess/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["ChessGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"],
  debug: false
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/chess/game.ts":
/*!*********************************!*\
  !*** ./src/games/chess/game.ts ***!
  \*********************************/
/*! exports provided: getWinner, ChessGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinner", function() { return getWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessGame", function() { return ChessGame; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chessjswrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chessjswrapper */ "./src/games/chess/chessjswrapper.ts");
/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


function getWinner(chess) {
  if (chess.game_over()) {
    if (chess.in_draw() || chess.in_threefold_repetition() || chess.insufficient_material() || chess.in_stalemate()) {
      return 'd';
    } else {
      if (chess.turn() === 'w') {
        return 'b';
      } else {
        return 'w';
      }
    }
  }
}
var ChessGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])({
  name: 'chess',
  setup: function setup() {
    return {
      pgn: '',
      fen: ''
    };
  },
  moves: {
    move: function move(G, ctx, san) {
      var chess = Object(_chessjswrapper__WEBPACK_IMPORTED_MODULE_1__["default"])();
      chess.load_pgn(G.pgn);
      chess.move(san, {
        sloppy: true
      });
      return {
        pgn: chess.pgn(),
        fen: chess.fen()
      };
    }
  },
  flow: {
    movesPerTurn: 1,
    endGameIf: function endGameIf(G) {
      var chess = Object(_chessjswrapper__WEBPACK_IMPORTED_MODULE_1__["default"])();
      chess.load_pgn(G.pgn);
      return getWinner(chess);
    }
  }
});

/***/ }),

/***/ "./src/games/chess/media/move.mp3":
/*!****************************************!*\
  !*** ./src/games/chess/media/move.mp3 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4221f331e7bdaed82268a19b2ec2212.mp3";

/***/ }),

/***/ "./src/games/chess/pieces/bishop.tsx":
/*!*******************************************!*\
  !*** ./src/games/chess/pieces/bishop.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var Bishop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bishop, _React$Component);

  function Bishop() {
    _classCallCheck(this, Bishop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bishop).apply(this, arguments));
  }

  _createClass(Bishop, [{
    key: "render",
    value: function render() {
      var primaryColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
      var secondaryColor = this.props.color === 'b' ? '#FFFFFF' : '#000000';
      var path1 = "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43\n    32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99\n    36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53\n    9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z";
      var path2 = "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30\n    30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5\n    C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5\n    15,32 z";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(.022222,.022222)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: {
          opacity: 1,
          fill: 'none',
          fillRule: 'evenodd',
          fillOpacity: 1,
          stroke: '#000000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: {
          fill: primaryColor,
          stroke: '#000000',
          strokeLinecap: 'butt'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path1
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path2
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
        style: {
          fill: 'none',
          stroke: secondaryColor,
          strokeLinejoin: 'miter'
        }
      })));
    }
  }]);

  return Bishop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Bishop.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Bishop);

/***/ }),

/***/ "./src/games/chess/pieces/king.tsx":
/*!*****************************************!*\
  !*** ./src/games/chess/pieces/king.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var King =
/*#__PURE__*/
function (_React$Component) {
  _inherits(King, _React$Component);

  function King() {
    _classCallCheck(this, King);

    return _possibleConstructorReturn(this, _getPrototypeOf(King).apply(this, arguments));
  }

  _createClass(King, [{
    key: "render",
    value: function render() {
      var primaryColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
      var secondaryColor = this.props.color === 'b' ? '#FFFFFF' : '#000000';
      var path1 = "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18\n                   22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14\n                   6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85";
      var path2 = "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12\n                   22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25";
      var path3 = "M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5\n                   38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16\n                   9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z";
      var extra = null;

      if (this.props.color === 'b') {
        extra = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: path1,
          style: {
            fill: 'none',
            stroke: '#ffffff'
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(.022222,.022222)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: {
          fill: 'none',
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 22.5,11.63 L 22.5,6",
        style: {
          fill: 'none',
          stroke: '#000000',
          strokeLinejoin: 'miter'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 20,8 L 25,8",
        style: {
          fill: 'none',
          stroke: '#000000',
          strokeLinejoin: 'miter'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path2,
        style: {
          fill: primaryColor,
          stroke: secondaryColor,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path3,
        style: {
          fill: primaryColor,
          stroke: '#000000'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 11.5,30 C 17,27 27,27 32.5,30",
        style: {
          fill: 'none',
          stroke: secondaryColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5",
        style: {
          fill: 'none',
          stroke: secondaryColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 11.5,37 C 17,34 27,34 32.5,37",
        style: {
          fill: 'none',
          stroke: secondaryColor
        }
      }), extra));
    }
  }]);

  return King;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

King.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (King);

/***/ }),

/***/ "./src/games/chess/pieces/knight.tsx":
/*!*******************************************!*\
  !*** ./src/games/chess/pieces/knight.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var Knight =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Knight, _React$Component);

  function Knight() {
    _classCallCheck(this, Knight);

    return _possibleConstructorReturn(this, _getPrototypeOf(Knight).apply(this, arguments));
  }

  _createClass(Knight, [{
    key: "render",
    value: function render() {
      var primaryColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
      var secondaryColor = this.props.color === 'b' ? '#FFFFFF' : '#000000';
      var extra = null;
      var path1 = "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49\n    32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L\n    37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5\n    L 24.55,10.4 z";
      var path2 = "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34\n    11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30\n    5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506\n    13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008\n    21,7 C 22,7 22,10 22,10";

      if (this.props.color === 'b') {
        extra = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: path1,
          style: {
            fill: '#ffffff',
            stroke: 'none'
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(.022222,.022222)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: {
          opacity: 1,
          fill: 'none',
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
        style: {
          fill: primaryColor,
          stroke: '#000000'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path2,
        style: {
          fill: primaryColor,
          stroke: '#000000'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
        style: {
          fill: secondaryColor,
          stroke: secondaryColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
        style: {
          fill: secondaryColor,
          stroke: secondaryColor
        }
      }), extra));
    }
  }]);

  return Knight;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Knight.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Knight);

/***/ }),

/***/ "./src/games/chess/pieces/pawn.tsx":
/*!*****************************************!*\
  !*** ./src/games/chess/pieces/pawn.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var Pawn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pawn, _React$Component);

  function Pawn() {
    _classCallCheck(this, Pawn);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pawn).apply(this, arguments));
  }

  _createClass(Pawn, [{
    key: "render",
    value: function render() {
      var primaryColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
      var path1 = "M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71\n    18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84\n    17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58\n    29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59\n    27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(.022222,.022222)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path1,
        style: {
          opacity: 1,
          fill: primaryColor,
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: '#000000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }));
    }
  }]);

  return Pawn;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Pawn.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/games/chess/pieces/queen.tsx":
/*!******************************************!*\
  !*** ./src/games/chess/pieces/queen.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var Queen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Queen, _React$Component);

  function Queen() {
    _classCallCheck(this, Queen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Queen).apply(this, arguments));
  }

  _createClass(Queen, [{
    key: "render",
    value: function render() {
      var primaryColor = this.props.color === 'b' ? '#000000' : '#FFFFFF';
      var secondaryColor = this.props.color === 'b' ? '#FFFFFF' : '#000000';
      var path1 = "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L\n    25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z";
      var path2 = "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5\n    10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5\n    35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28\n    36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(.022222,.022222)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: {
          opacity: 1,
          fill: primaryColor,
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",
        transform: "translate(-1,-1)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",
        transform: "translate(15.5,-5.5)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",
        transform: "translate(32,-1)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",
        transform: "translate(7,-4.5)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z",
        transform: "translate(24,-4)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path1,
        style: {
          strokeLinecap: 'butt'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: path2,
        style: {
          strokeLinecap: 'butt'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 11.5,30 C 15,29 30,29 33.5,30",
        style: {
          fill: 'none',
          stroke: secondaryColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5",
        style: {
          fill: 'none',
          stroke: secondaryColor
        }
      })));
    }
  }]);

  return Queen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Queen.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Queen);

/***/ }),

/***/ "./src/games/chess/pieces/rook.tsx":
/*!*****************************************!*\
  !*** ./src/games/chess/pieces/rook.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



var Rook =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rook, _React$Component);

  function Rook() {
    _classCallCheck(this, Rook);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rook).apply(this, arguments));
  }

  _createClass(Rook, [{
    key: "render",
    value: function render() {
      if (this.props.color === 'b') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          transform: "scale(.022222,.022222)"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          style: {
            opacity: 1,
            fill: '#000000',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#000000',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ",
          style: {
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 12,35.5 L 33,35.5 L 33,35.5",
          style: {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 13,31.5 L 32,31.5",
          style: {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 14,29.5 L 31,29.5",
          style: {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 14,16.5 L 31,16.5",
          style: {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 11,14 L 34,14",
          style: {
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 1,
            strokeLinejoin: 'miter'
          }
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          transform: "scale(.022222,.022222)"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          style: {
            opacity: 1,
            fill: '#ffffff',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#000000',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
          style: {
            strokeLinecap: 'butt'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 34,14 L 31,17 L 14,17 L 11,14"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
          style: {
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M 11,14 L 34,14",
          style: {
            fill: 'none',
            stroke: '#000000',
            strokeLinejoin: 'miter'
          }
        })));
      }
    }
  }]);

  return Rook;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Rook.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Rook);

/***/ }),

/***/ "./src/games/chess/sound.ts":
/*!**********************************!*\
  !*** ./src/games/chess/sound.ts ***!
  \**********************************/
/*! exports provided: playSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSound", function() { return playSound; });
/* harmony import */ var _media_move_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/move.mp3 */ "./src/games/chess/media/move.mp3");
/* harmony import */ var _media_move_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_move_mp3__WEBPACK_IMPORTED_MODULE_0__);

var sound;
var playSound = function playSound() {
  if (!sound) {
    sound = new Audio(_media_move_mp3__WEBPACK_IMPORTED_MODULE_0___default.a);
  }

  sound.play();
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvYm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9jaGVzc2pzd3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9tZWRpYS9tb3ZlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2Jpc2hvcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9raW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2tuaWdodC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9wYXduLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL3F1ZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL3Jvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9zb3VuZC50cyJdLCJuYW1lcyI6WyJDT0xfTkFNRVMiLCJISUdITElHSFRFRF9DT0xPUiIsIk1PVkFCTEVfQ09MT1IiLCJNT1ZFRF9DT0xPUiIsIkJvYXJkIiwiYXJndW1lbnRzIiwiY2hlc3MiLCJDaGVzcyIsInN0YXRlIiwic2VsZWN0ZWQiLCJoaWdobGlnaHRlZCIsImRyYWdnZWQiLCJzb3VuZEVuYWJsZWQiLCJfY2xpY2siLCJjb29yZHMiLCJzcXVhcmUiLCJwcm9wcyIsImlzQWN0aXZlIiwiX2lzU2VsZWN0YWJsZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3RyeU1vdmUiLCJfc2hvdWxkRHJhZyIsIngiLCJ5IiwiY2FydGVzaWFuVG9BbGdlYnJhaWMiLCJyZXN1bHQiLCJfZ2V0SW5pdGlhbENlbGwiLCJfb25EcmFnIiwiZGF0YSIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsIk1hdGgiLCJzcXJ0IiwicG93IiwiX2dldFNxdWFyZSIsIl9vbkRyb3AiLCJfc2V0U291bmRQcmVmIiwib2xkU3RhdGUiLCJfdG9nZ2xlU291bmRQcmVmIiwiX2dldFNvdW5kUHJlZiIsIl9nZXRPcHRpb25zTWVudUl0ZW1zIiwiY3VyU291bmRQcmVmIiwibmV3U291bmRQcmVmIiwib3B0aW9uIiwib25DbGljayIsInRleHQiLCJvcHRpb25zIiwiRyIsInBnbiIsImxvYWRfcGduIiwiY3R4IiwiZ2FtZW92ZXIiLCJnYW1lT3ZlckJvYXJkIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIkNoZWNrZXJib2FyZCIsImludmVydCIsImdldFBsYXllciIsInVuZGVmaW5lZCIsIl9nZXRQaWVjZXMiLCJHYW1lTGF5b3V0IiwiZ2FtZU92ZXIiLCJfZ2V0R2FtZU92ZXIiLCJnYW1lQXJncyIsImV4dHJhQ2FyZENvbnRlbnQiLCJvcHRpb25zTWVudUl0ZW1zIiwiVHlwb2dyYXBoeSIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsIl9nZXRTdGF0dXMiLCJoaWdobGlnaHRlZFNxdWFyZXMiLCJfZ2V0SGlnaGxpZ2h0ZWRTcXVhcmVzIiwicGxheWVySUQiLCJmcm9tIiwidG8iLCJtb3ZlcyIsIl9nZXRNb3ZlcyIsIm1vdmUiLCJmaW5kIiwibSIsInNhbiIsInBsYXlTb3VuZCIsIm1vZGUiLCJHYW1lTW9kZSIsIkFJIiwic3RlcCIsImhpc3RvcnkiLCJfZml4SGlzdG9yeSIsInZlcmJvc2UiLCJsZW5ndGgiLCJsYXN0TW92ZSIsIl9nZXRDdXJyZW50UGxheWVyIiwiX2dldEluUmFuZ2UiLCJtYXgiLCJtaW4iLCJyb3VuZCIsInBpZWNlIiwiZ2V0IiwidG9rZW4iLCJUb2tlbiIsImRyYWdnYWJsZSIsInNob3VsZERyYWciLCJvbkRyYWciLCJvbkRyb3AiLCJhbmltYXRlIiwia2V5IiwiX2dldFBpZWNlQnlUeXBlQW5kQ29sb3IiLCJ0eXBlIiwicHVzaCIsImNvbmNhdCIsIkJpc2hvcCIsIktpbmciLCJLbmlnaHQiLCJQYXduIiwiUXVlZW4iLCJSb29rIiwiT25saW5lRnJpZW5kIiwiaW5fY2hlY2siLCJ0dXJuIiwibGFzdFNlZW4iLCJpIiwibmV3TW92ZSIsImN1cnJlbnRQbGF5ZXIiLCJDb21wb25lbnQiLCJDaGVzc1BrZyIsInJlcXVpcmUiLCJDaGVzc0ZuIiwiY29uZmlnIiwiYmdpb0dhbWUiLCJDaGVzc0dhbWUiLCJiZ2lvQm9hcmQiLCJDaGVzc0JvYXJkIiwiZGVidWciLCJnZXRXaW5uZXIiLCJnYW1lX292ZXIiLCJpbl9kcmF3IiwiaW5fdGhyZWVmb2xkX3JlcGV0aXRpb24iLCJpbnN1ZmZpY2llbnRfbWF0ZXJpYWwiLCJpbl9zdGFsZW1hdGUiLCJHYW1lIiwibmFtZSIsInNldHVwIiwiZmVuIiwic2xvcHB5IiwiZmxvdyIsIm1vdmVzUGVyVHVybiIsImVuZEdhbWVJZiIsInByaW1hcnlDb2xvciIsInNlY29uZGFyeUNvbG9yIiwicGF0aDEiLCJwYXRoMiIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJmaWxsIiwiZmlsbFJ1bGUiLCJmaWxsT3BhY2l0eSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZU9wYWNpdHkiLCJkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicGF0aDMiLCJleHRyYSIsInNvdW5kIiwiQXVkaW8iLCJNb3ZlU291bmQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsT0FBMUI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDTyxJQUFNQyxLQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1YsZ0ZBQVNDLFNBQVQ7QUFDQSxVQUFLQyxLQUFMLEdBQWFDLCtEQUFLLEVBQWxCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRSxFQUREO0FBRVRDLGlCQUFXLEVBQUUsRUFGSjtBQUdUQyxhQUFPLEVBQUUsRUFIQTtBQUlUQyxrQkFBWSxFQUFFO0FBSkwsS0FBYjs7QUFNQSxVQUFLQyxNQUFMLEdBQWMsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsVUFDZEMsTUFEYyxHQUNIRCxNQURHLENBQ2RDLE1BRGM7O0FBRXRCLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLE1BQUtULEtBQUwsQ0FBV0MsUUFBWixJQUF3QixNQUFLUyxhQUFMLENBQW1CSCxNQUFuQixDQUE1QixFQUF3RDtBQUNwRCxjQUFLSSxRQUFMLENBQWNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBS2IsS0FBdkIsRUFBOEI7QUFBRUMsa0JBQVEsRUFBRU0sTUFBWjtBQUFvQkwscUJBQVcsRUFBRUs7QUFBakMsU0FBOUIsQ0FBZDtBQUNILE9BRkQsTUFHSyxJQUFJLE1BQUtQLEtBQUwsQ0FBV0MsUUFBZixFQUF5QjtBQUMxQixjQUFLYSxRQUFMLENBQWMsTUFBS2QsS0FBTCxDQUFXQyxRQUF6QixFQUFtQ00sTUFBbkM7QUFDSDtBQUNKLEtBWEQ7O0FBWUEsVUFBS1EsV0FBTCxHQUFtQixVQUFDVCxNQUFELEVBQVk7QUFDM0IsVUFBTVUsQ0FBQyxHQUFHVixNQUFNLENBQUNVLENBQWpCO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHWCxNQUFNLENBQUNXLENBQWpCO0FBQ0EsVUFBTVYsTUFBTSxHQUFHVyxpRkFBb0IsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLENBQW5DOztBQUNBLFVBQU1FLE1BQU0sR0FBRyxNQUFLWCxLQUFMLENBQVdDLFFBQVgsSUFBdUIsTUFBS0MsYUFBTCxDQUFtQkgsTUFBbkIsQ0FBdEM7O0FBQ0EsVUFBSVksTUFBSixFQUFZO0FBQ1IsY0FBS1IsUUFBTCxDQUFjQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQUtiLEtBQXZCLEVBQThCO0FBQUVHLGlCQUFPLEVBQUUsTUFBS2lCLGVBQUwsQ0FBcUJiLE1BQXJCO0FBQVgsU0FBOUIsQ0FBZDs7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKLEtBVEQ7O0FBVUEsVUFBS2MsT0FBTCxHQUFlLFVBQUNDLElBQUQsRUFBVTtBQUNyQixVQUFNTixDQUFDLEdBQUdNLElBQUksQ0FBQ04sQ0FBZjtBQUNBLFVBQU1DLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFmO0FBQ0EsVUFBTU0sU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQXZCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNFLFNBQXZCOztBQUNBLFVBQUlDLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLEdBQUwsQ0FBVVgsQ0FBQyxHQUFHTyxTQUFkLEVBQTBCLENBQTFCLElBQStCRSxJQUFJLENBQUNFLEdBQUwsQ0FBVVYsQ0FBQyxHQUFHTyxTQUFkLEVBQTBCLENBQTFCLENBQXpDLElBQXlFLEdBQTdFLEVBQWtGO0FBQzlFLGNBQUtiLFFBQUwsQ0FBY0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFLYixLQUF2QixFQUE4QjtBQUFFQyxrQkFBUSxFQUFFLE1BQUsyQixVQUFMLENBQWdCTCxTQUFoQixFQUEyQkMsU0FBM0IsQ0FBWjtBQUFtRHRCLHFCQUFXLEVBQUUsTUFBSzBCLFVBQUwsQ0FBZ0JaLENBQWhCLEVBQW1CQyxDQUFuQjtBQUFoRSxTQUE5QixDQUFkO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsY0FBS04sUUFBTCxDQUFjQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQUtiLEtBQXZCLEVBQThCO0FBQUVDLGtCQUFRLEVBQUUsRUFBWjtBQUFnQkMscUJBQVcsRUFBRTtBQUE3QixTQUE5QixDQUFkO0FBQ0g7QUFDSixLQVhEOztBQVlBLFVBQUsyQixPQUFMLEdBQWUsVUFBQ3ZCLE1BQUQsRUFBWTtBQUN2QixVQUFNVSxDQUFDLEdBQUdWLE1BQU0sQ0FBQ1UsQ0FBakI7QUFDQSxVQUFNQyxDQUFDLEdBQUdYLE1BQU0sQ0FBQ1csQ0FBakI7O0FBQ0EsVUFBSSxNQUFLakIsS0FBTCxDQUFXQyxRQUFmLEVBQXlCO0FBQ3JCLGNBQUtVLFFBQUwsQ0FBY0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFLYixLQUF2QixFQUE4QjtBQUFFRyxpQkFBTyxFQUFFO0FBQVgsU0FBOUIsQ0FBZDs7QUFDQSxjQUFLVyxRQUFMLENBQWMsTUFBS2QsS0FBTCxDQUFXQyxRQUF6QixFQUFtQyxNQUFLMkIsVUFBTCxDQUFnQlosQ0FBaEIsRUFBbUJDLENBQW5CLENBQW5DO0FBQ0g7QUFDSixLQVBEOztBQVFBLFVBQUthLGFBQUwsR0FBcUIsVUFBQzFCLFlBQUQsRUFBa0I7QUFDbkMsWUFBS08sUUFBTCxDQUFjLFVBQUFvQixRQUFRLEVBQUk7QUFDdEIsZUFBT25CLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JrQixRQUFsQixFQUE0QjtBQUFFM0Isc0JBQVksRUFBWkE7QUFBRixTQUE1QixDQUFQO0FBQ0gsT0FGRDtBQUdILEtBSkQ7O0FBS0EsVUFBSzRCLGdCQUFMLEdBQXdCLFlBQU07QUFDMUIsWUFBS0YsYUFBTCxDQUFtQixDQUFDLE1BQUtHLGFBQUwsRUFBcEI7QUFDSCxLQUZEOztBQUdBLFVBQUtBLGFBQUwsR0FBcUIsWUFBTTtBQUN2QixhQUFPLE1BQUtqQyxLQUFMLENBQVdJLFlBQWxCO0FBQ0gsS0FGRDs7QUFHQSxVQUFLOEIsb0JBQUwsR0FBNEIsWUFBTTtBQUM5QixVQUFNQyxZQUFZLEdBQUcsTUFBS0YsYUFBTCxFQUFyQjs7QUFDQSxVQUFNRyxZQUFZLEdBQUcsQ0FBQ0QsWUFBdEI7QUFDQSxVQUFNRSxNQUFNLEdBQUc7QUFDWEMsZUFBTyxFQUFFLE1BQUtOLGdCQURIO0FBRVhPLFlBQUksWUFBS0gsWUFBWSxHQUFHLFFBQUgsR0FBYyxTQUEvQjtBQUZPLE9BQWY7QUFJQSxVQUFNSSxPQUFPLEdBQUcsQ0FBQ0gsTUFBRCxDQUFoQjtBQUNBLGFBQU9HLE9BQVA7QUFDSCxLQVREOztBQTlEVTtBQXdFYjs7QUF6RUw7QUFBQTtBQUFBLDZCQTBFYTtBQUNMLFVBQUksS0FBS2hDLEtBQUwsQ0FBV2lDLENBQVgsQ0FBYUMsR0FBakIsRUFBc0I7QUFDbEIsYUFBSzVDLEtBQUwsQ0FBVzZDLFFBQVgsQ0FBb0IsS0FBS25DLEtBQUwsQ0FBV2lDLENBQVgsQ0FBYUMsR0FBakM7QUFDSDs7QUFDRCxVQUFJLEtBQUtsQyxLQUFMLENBQVdvQyxHQUFYLENBQWVDLFFBQW5CLEVBQTZCO0FBQ3pCLFlBQU1DLGFBQWEsR0FBSUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxLQUFUO0FBQWdCQyxrQkFBTSxFQUFFLEtBQXhCO0FBQStCQyxzQkFBVSxFQUFFLE1BQTNDO0FBQW1EQyx1QkFBVyxFQUFFO0FBQWhFO0FBQVQsU0FBM0IsRUFDbkJOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JNLGlFQUFwQixFQUFrQztBQUFFQyxnQkFBTSxFQUFFLEtBQUtDLFNBQUwsT0FBcUIsR0FBL0I7QUFBb0NsQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1tQixTQUFOO0FBQUE7QUFBN0MsU0FBbEMsRUFBa0csS0FBS0MsVUFBTCxFQUFsRyxDQURtQixDQUF2QjtBQUVBLGVBQVFYLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JXLCtEQUFwQixFQUFnQztBQUFFQyxrQkFBUSxFQUFFLEtBQUtDLFlBQUwsRUFBWjtBQUFpQ0Msa0JBQVEsRUFBRSxLQUFLdEQsS0FBTCxDQUFXc0QsUUFBdEQ7QUFBZ0VDLDBCQUFnQixFQUFFakI7QUFBbEYsU0FBaEMsQ0FBUjtBQUNIOztBQUNELGFBQVFDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JXLCtEQUFwQixFQUFnQztBQUFFSyx3QkFBZ0IsRUFBRSxLQUFLOUI7QUFBekIsT0FBaEMsRUFDSmEsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQixJQUEzQixFQUNJRCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CaUIscUVBQXBCLEVBQWdDO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCakIsYUFBSyxFQUFFO0FBQUVrQixtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGVBQUssRUFBRSxPQUE5QjtBQUF1Q0Msc0JBQVksRUFBRTtBQUFyRDtBQUF4QixPQUFoQyxFQUF5SCxLQUFLQyxVQUFMLEVBQXpILENBREosRUFFSXZCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JNLGlFQUFwQixFQUFrQztBQUFFQyxjQUFNLEVBQUUsS0FBS0MsU0FBTCxPQUFxQixHQUEvQjtBQUFvQ2UsMEJBQWtCLEVBQUUsS0FBS0Msc0JBQUwsRUFBeEQ7QUFBdUZsQyxlQUFPLEVBQUUsS0FBS2pDO0FBQXJHLE9BQWxDLEVBQWlKLEtBQUtxRCxVQUFMLEVBQWpKLENBRkosQ0FESSxDQUFSO0FBSUg7QUF2Rkw7QUFBQTtBQUFBLGdDQXdGZ0I7QUFDUixVQUFJLEtBQUtsRCxLQUFMLENBQVdpRSxRQUFYLEtBQXdCLEdBQTVCLEVBQWlDO0FBQzdCLGVBQU8sR0FBUDtBQUNILE9BRkQsTUFHSztBQUNELGVBQU8sR0FBUDtBQUNIO0FBQ0o7QUEvRkw7QUFBQTtBQUFBLDZCQWdHYUMsSUFoR2IsRUFnR21CQyxFQWhHbkIsRUFnR3VCO0FBQ2YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFNBQUwsRUFBZCxDQURlLENBRWY7OztBQUNBLFVBQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ04sSUFBRixLQUFXQSxJQUFYLElBQW1CTSxDQUFDLENBQUNMLEVBQUYsS0FBU0EsRUFBaEM7QUFBQSxPQUFaLENBQWI7O0FBQ0EsVUFBSUcsSUFBSixFQUFVO0FBQ047QUFDQSxhQUFLdEUsS0FBTCxDQUFXb0UsS0FBWCxDQUFpQkUsSUFBakIsQ0FBc0JBLElBQUksQ0FBQ0csR0FBM0I7O0FBQ0EsWUFBSSxLQUFLaEQsYUFBTCxFQUFKLEVBQTBCO0FBQ3RCaUQsbUVBQVM7QUFDWjs7QUFDRCxZQUFJLEtBQUsxRSxLQUFMLENBQVdzRCxRQUFYLElBQXVCLEtBQUt0RCxLQUFMLENBQVdzRCxRQUFYLENBQW9CcUIsSUFBcEIsS0FBNkJDLGlFQUFRLENBQUNDLEVBQWpFLEVBQXFFO0FBQ2pFLGVBQUs3RSxLQUFMLENBQVc4RSxJQUFYO0FBQ0g7QUFDSixPQWJjLENBY2Y7OztBQUNBLFdBQUszRSxRQUFMLENBQWNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS2IsS0FBdkIsRUFBOEI7QUFBRUMsZ0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxtQkFBVyxFQUFFO0FBQTdCLE9BQTlCLENBQWQ7QUFDSDtBQWhITDtBQUFBO0FBQUEsNkNBaUg2QjtBQUNyQixVQUFNaUIsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsVUFBTW9FLE9BQU8sR0FBRyxLQUFLQyxXQUFMLENBQWlCLEtBQUsxRixLQUFMLENBQVd5RixPQUFYLENBQW1CO0FBQUVFLGVBQU8sRUFBRTtBQUFYLE9BQW5CLENBQWpCLENBQWhCOztBQUNBLFVBQUlGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQixZQUFNQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDRyxNQUFSLEdBQWlCLENBQWxCLENBQXhCOztBQUNBLFlBQUksS0FBS0UsaUJBQUwsT0FBNkJELFFBQVEsQ0FBQ3ZCLEtBQTFDLEVBQWlEO0FBQzdDakQsZ0JBQU0sQ0FBQ3dFLFFBQVEsQ0FBQ2pCLElBQVYsQ0FBTixHQUF3Qi9FLFdBQXhCO0FBQ0F3QixnQkFBTSxDQUFDd0UsUUFBUSxDQUFDaEIsRUFBVixDQUFOLEdBQXNCaEYsV0FBdEI7QUFDSDtBQUNKOztBQVRvQjtBQUFBO0FBQUE7O0FBQUE7QUFVckIsNkJBQW1CLEtBQUtrRixTQUFMLEVBQW5CLDhIQUFxQztBQUFBLGNBQTFCQyxJQUEwQjtBQUNqQzNELGdCQUFNLENBQUMyRCxJQUFJLENBQUNILEVBQU4sQ0FBTixHQUFrQmpGLGFBQWxCO0FBQ0g7QUFab0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhckIsVUFBSSxLQUFLTSxLQUFMLENBQVdFLFdBQWYsRUFBNEI7QUFDeEJpQixjQUFNLENBQUMsS0FBS25CLEtBQUwsQ0FBV0UsV0FBWixDQUFOLEdBQWlDVCxpQkFBakM7QUFDSDs7QUFDRCxhQUFPMEIsTUFBUDtBQUNIO0FBbElMO0FBQUE7QUFBQSwrQkFtSWVILENBbklmLEVBbUlrQkMsQ0FuSWxCLEVBbUlxQjtBQUNiLGFBQU9DLGlGQUFvQixDQUFDLEtBQUsyRSxXQUFMLENBQWlCN0UsQ0FBakIsQ0FBRCxFQUFzQixLQUFLNkUsV0FBTCxDQUFpQjVFLENBQWpCLENBQXRCLENBQTNCO0FBQ0g7QUFySUw7QUFBQTtBQUFBLGdDQXNJZ0JELENBdEloQixFQXNJbUI7QUFDWCxhQUFPUyxJQUFJLENBQUNxRSxHQUFMLENBQVNyRSxJQUFJLENBQUNzRSxHQUFMLENBQVN0RSxJQUFJLENBQUN1RSxLQUFMLENBQVdoRixDQUFYLENBQVQsRUFBd0IsQ0FBeEIsQ0FBVCxFQUFxQyxDQUFyQyxDQUFQO0FBQ0g7QUF4SUw7QUFBQTtBQUFBLGlDQXlJaUI7QUFDVCxVQUFNYixPQUFPLEdBQUcsRUFBaEI7QUFDQSxVQUFNZ0IsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLGFBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixjQUFNVCxNQUFNLEdBQUdmLFNBQVMsQ0FBQ3dCLENBQUQsQ0FBVCxHQUFlQyxDQUE5QjtBQUNBLGNBQU1nRixLQUFLLEdBQUcsS0FBS25HLEtBQUwsQ0FBV29HLEdBQVgsQ0FBZTNGLE1BQWYsQ0FBZDs7QUFDQSxjQUFJMEYsS0FBSixFQUFXO0FBQ1AsZ0JBQU1FLEtBQUssR0FBSXBELDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvRCx3RUFBcEIsRUFBMkI7QUFBRUMsdUJBQVMsRUFBRSxJQUFiO0FBQW1CQyx3QkFBVSxFQUFFLEtBQUt2RixXQUFwQztBQUFpRHdGLG9CQUFNLEVBQUUsS0FBS2xGLE9BQTlEO0FBQXVFbUYsb0JBQU0sRUFBRSxLQUFLM0UsT0FBcEY7QUFBNkZ0QixvQkFBTSxFQUFFQSxNQUFyRztBQUE2R2tHLHFCQUFPLEVBQUUsSUFBdEg7QUFBNEhDLGlCQUFHLEVBQUUsS0FBS3RGLGVBQUwsQ0FBcUJiLE1BQXJCO0FBQWpJLGFBQTNCLEVBQTRMLEtBQUtvRyx1QkFBTCxDQUE2QlYsS0FBSyxDQUFDVyxJQUFuQyxFQUF5Q1gsS0FBSyxDQUFDN0IsS0FBL0MsQ0FBNUwsQ0FBZjs7QUFDQSxnQkFBSTdELE1BQU0sS0FBSyxLQUFLUCxLQUFMLENBQVdHLE9BQTFCLEVBQW1DO0FBQy9CZ0Isb0JBQU0sQ0FBQzBGLElBQVAsQ0FBWVYsS0FBWjtBQUNILGFBRkQsTUFHSztBQUNEaEcscUJBQU8sQ0FBQzBHLElBQVIsQ0FBYVYsS0FBYjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNELGFBQU9oRyxPQUFPLENBQUMyRyxNQUFSLENBQWUzRixNQUFmLENBQVA7QUFDSDtBQTVKTDtBQUFBO0FBQUEsNENBNko0QnlGLElBN0o1QixFQTZKa0N4QyxLQTdKbEMsRUE2SnlDO0FBQ2pDLGNBQVF3QyxJQUFSO0FBQ0ksYUFBSyxHQUFMO0FBQ0ksaUJBQU83RCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK0Qsc0RBQXBCLEVBQTRCO0FBQUUzQyxpQkFBSyxFQUFFQTtBQUFULFdBQTVCLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU9yQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ0Usb0RBQXBCLEVBQTBCO0FBQUU1QyxpQkFBSyxFQUFFQTtBQUFULFdBQTFCLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU9yQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CaUUsc0RBQXBCLEVBQTRCO0FBQUU3QyxpQkFBSyxFQUFFQTtBQUFULFdBQTVCLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU9yQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Ca0Usb0RBQXBCLEVBQTBCO0FBQUU5QyxpQkFBSyxFQUFFQTtBQUFULFdBQTFCLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU9yQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CbUUsc0RBQXBCLEVBQTJCO0FBQUUvQyxpQkFBSyxFQUFFQTtBQUFULFdBQTNCLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU9yQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0UscURBQXBCLEVBQTBCO0FBQUVoRCxpQkFBSyxFQUFFQTtBQUFULFdBQTFCLENBQVA7QUFaUjtBQWNIO0FBNUtMO0FBQUE7QUFBQSxtQ0E2S21CO0FBQ1gsVUFBTU4sUUFBUSxHQUFHLEtBQUt0RCxLQUFMLENBQVdzRCxRQUE1QjtBQUNBLFVBQU1xQixJQUFJLEdBQUdyQixRQUFRLENBQUNxQixJQUF0Qjs7QUFDQSxVQUFJQSxJQUFJLEtBQUtDLGlFQUFRLENBQUNpQyxZQUFsQixJQUFrQ2xDLElBQUksS0FBS0MsaUVBQVEsQ0FBQ0MsRUFBeEQsRUFBNEQ7QUFDeEQsWUFBSSxLQUFLN0UsS0FBTCxDQUFXb0MsR0FBWCxDQUFlQyxRQUFmLEtBQTRCLEtBQUtXLFNBQUwsRUFBaEMsRUFBa0Q7QUFDOUMsaUJBQU8sU0FBUDtBQUNILFNBRkQsTUFHSyxJQUFJLEtBQUtoRCxLQUFMLENBQVdvQyxHQUFYLENBQWVDLFFBQWYsS0FBNEIsR0FBaEMsRUFBcUM7QUFDdEMsaUJBQU8sTUFBUDtBQUNILFNBRkksTUFHQTtBQUNELGlCQUFPLFVBQVA7QUFDSDtBQUNKLE9BVkQsTUFXSztBQUNEO0FBQ0EsZ0JBQVEsS0FBS3JDLEtBQUwsQ0FBV29DLEdBQVgsQ0FBZUMsUUFBdkI7QUFDSSxlQUFLLEdBQUw7QUFDSSxtQkFBTyxXQUFQOztBQUNKLGVBQUssR0FBTDtBQUNJLG1CQUFPLFdBQVA7O0FBQ0osZUFBSyxHQUFMO0FBQ0ksbUJBQU8sTUFBUDtBQU5SO0FBUUg7QUFDSjtBQXRNTDtBQUFBO0FBQUEsaUNBdU1pQjtBQUNUO0FBQ0EsVUFBSSxLQUFLckMsS0FBTCxDQUFXc0QsUUFBWCxJQUF1QixLQUFLdEQsS0FBTCxDQUFXc0QsUUFBWCxDQUFvQnFCLElBQXBCLEtBQTZCQyxpRUFBUSxDQUFDaUMsWUFBakUsRUFBK0U7QUFDM0UsWUFBSSxLQUFLdkgsS0FBTCxDQUFXd0gsUUFBWCxFQUFKLEVBQTJCO0FBQ3ZCLGlCQUFPLE9BQVA7QUFDSDs7QUFDRCxZQUFJLEtBQUt4SCxLQUFMLENBQVd5SCxJQUFYLE9BQXNCLEtBQUsvRCxTQUFMLEVBQTFCLEVBQTRDO0FBQ3hDLGlCQUFPLFdBQVA7QUFDSCxTQUZELE1BR0s7QUFDRCxpQkFBTyx5QkFBUDtBQUNIO0FBQ0osT0FWRCxNQVdLO0FBQ0Q7QUFDQSxZQUFJLEtBQUsxRCxLQUFMLENBQVd3SCxRQUFYLEVBQUosRUFBMkI7QUFDdkIsaUJBQU8sT0FBUDtBQUNIOztBQUNELGdCQUFRLEtBQUt4SCxLQUFMLENBQVd5SCxJQUFYLEVBQVI7QUFDSSxlQUFLLEdBQUw7QUFDSSxtQkFBTyxjQUFQOztBQUNKLGVBQUssR0FBTDtBQUNJLG1CQUFPLGNBQVA7QUFKUjtBQU1IO0FBQ0o7QUFoT0w7QUFBQTtBQUFBLG9DQWlPb0JoSCxNQWpPcEIsRUFpTzRCO0FBQ3BCLFVBQU1nRixPQUFPLEdBQUcsS0FBS0MsV0FBTCxDQUFpQixLQUFLMUYsS0FBTCxDQUFXeUYsT0FBWCxDQUFtQjtBQUFFRSxlQUFPLEVBQUU7QUFBWCxPQUFuQixDQUFqQixDQUFoQjs7QUFDQSxVQUFJK0IsUUFBUSxHQUFHakgsTUFBZjs7QUFDQSxXQUFLLElBQUlrSCxDQUFDLEdBQUdsQyxPQUFPLENBQUNHLE1BQVIsR0FBaUIsQ0FBOUIsRUFBaUMrQixDQUFDLElBQUksQ0FBdEMsRUFBeUNBLENBQUMsRUFBMUMsRUFBOEM7QUFDMUMsWUFBTTNDLElBQUksR0FBR1MsT0FBTyxDQUFDa0MsQ0FBRCxDQUFwQjs7QUFDQSxZQUFJRCxRQUFRLEtBQUsxQyxJQUFJLENBQUNILEVBQXRCLEVBQTBCO0FBQ3RCNkMsa0JBQVEsR0FBRzFDLElBQUksQ0FBQ0osSUFBaEI7QUFDSDtBQUNKOztBQUNELGFBQU84QyxRQUFQO0FBQ0gsS0EzT0wsQ0E0T0k7O0FBNU9KO0FBQUE7QUFBQSxnQ0E2T2dCakMsT0E3T2hCLEVBNk95QjtBQUNqQixVQUFNcEUsTUFBTSxHQUFHLEVBQWY7QUFEaUI7QUFBQTtBQUFBOztBQUFBO0FBRWpCLDhCQUFtQm9FLE9BQW5CLG1JQUE0QjtBQUFBLGNBQWpCVCxJQUFpQjtBQUN4QixjQUFJNEMsT0FBTyxHQUFHLElBQWQ7O0FBQ0EsY0FBSTVDLElBQUksQ0FBQ0csR0FBTCxLQUFhLE9BQWpCLEVBQTBCO0FBQ3RCLGdCQUFJSCxJQUFJLENBQUNWLEtBQUwsS0FBZSxHQUFuQixFQUF3QjtBQUNwQnNELHFCQUFPLEdBQUc7QUFBRWhELG9CQUFJLEVBQUUsSUFBUjtBQUFjQyxrQkFBRSxFQUFFO0FBQWxCLGVBQVY7QUFDSCxhQUZELE1BR0s7QUFDRCtDLHFCQUFPLEdBQUc7QUFBRWhELG9CQUFJLEVBQUUsSUFBUjtBQUFjQyxrQkFBRSxFQUFFO0FBQWxCLGVBQVY7QUFDSDtBQUNKLFdBUEQsTUFRSyxJQUFJRyxJQUFJLENBQUNHLEdBQUwsS0FBYSxLQUFqQixFQUF3QjtBQUN6QixnQkFBSUgsSUFBSSxDQUFDVixLQUFMLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEJzRCxxQkFBTyxHQUFHO0FBQUVoRCxvQkFBSSxFQUFFLElBQVI7QUFBY0Msa0JBQUUsRUFBRTtBQUFsQixlQUFWO0FBQ0gsYUFGRCxNQUdLO0FBQ0QrQyxxQkFBTyxHQUFHO0FBQUVoRCxvQkFBSSxFQUFFLElBQVI7QUFBY0Msa0JBQUUsRUFBRTtBQUFsQixlQUFWO0FBQ0g7QUFDSjs7QUFDRHhELGdCQUFNLENBQUMwRixJQUFQLENBQVkvQixJQUFaOztBQUNBLGNBQUk0QyxPQUFKLEVBQWE7QUFDVHZHLGtCQUFNLENBQUMwRixJQUFQLENBQVlhLE9BQVo7QUFDSDtBQUNKO0FBeEJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlCakIsYUFBT3ZHLE1BQVA7QUFDSDtBQXZRTDtBQUFBO0FBQUEsa0NBd1FrQlosTUF4UWxCLEVBd1EwQjtBQUNsQixVQUFNMEYsS0FBSyxHQUFHLEtBQUtuRyxLQUFMLENBQVdvRyxHQUFYLENBQWUzRixNQUFmLENBQWQ7QUFDQSxhQUFPMEYsS0FBSyxJQUFJQSxLQUFLLENBQUM3QixLQUFOLEtBQWdCLEtBQUt3QixpQkFBTCxFQUF6QixJQUFxRCxLQUFLOUYsS0FBTCxDQUFXOEUsS0FBWCxDQUFpQjtBQUFFckUsY0FBTSxFQUFOQTtBQUFGLE9BQWpCLEVBQTZCbUYsTUFBN0IsR0FBc0MsQ0FBbEc7QUFDSDtBQTNRTDtBQUFBO0FBQUEsd0NBNFF3QjtBQUNoQixVQUFJLEtBQUtsRixLQUFMLENBQVdvQyxHQUFYLENBQWUrRSxhQUFmLEtBQWlDLEdBQXJDLEVBQTBDO0FBQ3RDLGVBQU8sR0FBUDtBQUNILE9BRkQsTUFHSztBQUNELGVBQU8sR0FBUDtBQUNIO0FBQ0o7QUFuUkw7QUFBQTtBQUFBLGdDQW9SZ0I7QUFDUixVQUFJLENBQUMsS0FBSzNILEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDdEIsZUFBTyxFQUFQO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLSCxLQUFMLENBQVc4RSxLQUFYLENBQWlCO0FBQ3BCYSxlQUFPLEVBQUUsSUFEVztBQUVwQmxGLGNBQU0sRUFBRSxLQUFLUCxLQUFMLENBQVdDO0FBRkMsT0FBakIsQ0FBUDtBQUlIO0FBNVJMOztBQUFBO0FBQUEsRUFBMkI4Qyw0Q0FBSyxDQUFDNkUsU0FBakMsRTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQSxJQUFNQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBeEIsQyxDQUFzQzs7O0FBQ3ZCLFNBQVNDLE9BQVQsR0FBbUI7QUFDOUIsTUFBSWpJLEtBQUssR0FBRyxJQUFaOztBQUNBLE1BQUkrSCxRQUFRLENBQUM5SCxLQUFiLEVBQW9CO0FBQ2hCRCxTQUFLLEdBQUcsSUFBSStILFFBQVEsQ0FBQzlILEtBQWIsRUFBUjtBQUNILEdBRkQsTUFHSztBQUNERCxTQUFLLEdBQUcsSUFBSStILFFBQUosRUFBUjtBQUNIOztBQUNELFNBQU8vSCxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU1rSSxNQUFNLEdBQUc7QUFDWEMsVUFBUSxFQUFFQywrQ0FEQztBQUVYQyxXQUFTLEVBQUVDLDRDQUZBO0FBR1hDLE9BQUssRUFBRTtBQUhJLENBQWY7QUFLZUwscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ08sU0FBU00sU0FBVCxDQUFtQnhJLEtBQW5CLEVBQTBCO0FBQzdCLE1BQUlBLEtBQUssQ0FBQ3lJLFNBQU4sRUFBSixFQUF1QjtBQUNuQixRQUFJekksS0FBSyxDQUFDMEksT0FBTixNQUFtQjFJLEtBQUssQ0FBQzJJLHVCQUFOLEVBQW5CLElBQXNEM0ksS0FBSyxDQUFDNEkscUJBQU4sRUFBdEQsSUFBdUY1SSxLQUFLLENBQUM2SSxZQUFOLEVBQTNGLEVBQWlIO0FBQzdHLGFBQU8sR0FBUDtBQUNILEtBRkQsTUFHSztBQUNELFVBQUk3SSxLQUFLLENBQUN5SCxJQUFOLE9BQWlCLEdBQXJCLEVBQTBCO0FBQ3RCLGVBQU8sR0FBUDtBQUNILE9BRkQsTUFHSztBQUNELGVBQU8sR0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ00sSUFBTVcsU0FBUyxHQUFHVSxpRkFBSSxDQUFDO0FBQzFCQyxNQUFJLEVBQUUsT0FEb0I7QUFFMUJDLE9BQUssRUFBRTtBQUFBLFdBQU87QUFBRXBHLFNBQUcsRUFBRSxFQUFQO0FBQVdxRyxTQUFHLEVBQUU7QUFBaEIsS0FBUDtBQUFBLEdBRm1CO0FBRzFCbkUsT0FBSyxFQUFFO0FBQ0hFLFFBREcsZ0JBQ0VyQyxDQURGLEVBQ0tHLEdBREwsRUFDVXFDLEdBRFYsRUFDZTtBQUNkLFVBQU1uRixLQUFLLEdBQUdDLCtEQUFLLEVBQW5CO0FBQ0FELFdBQUssQ0FBQzZDLFFBQU4sQ0FBZUYsQ0FBQyxDQUFDQyxHQUFqQjtBQUNBNUMsV0FBSyxDQUFDZ0YsSUFBTixDQUFXRyxHQUFYLEVBQWdCO0FBQUUrRCxjQUFNLEVBQUU7QUFBVixPQUFoQjtBQUNBLGFBQU87QUFBRXRHLFdBQUcsRUFBRTVDLEtBQUssQ0FBQzRDLEdBQU4sRUFBUDtBQUFvQnFHLFdBQUcsRUFBRWpKLEtBQUssQ0FBQ2lKLEdBQU47QUFBekIsT0FBUDtBQUNIO0FBTkUsR0FIbUI7QUFXMUJFLE1BQUksRUFBRTtBQUNGQyxnQkFBWSxFQUFFLENBRFo7QUFFRkMsYUFBUyxFQUFFLG1CQUFDMUcsQ0FBRCxFQUFPO0FBQ2QsVUFBTTNDLEtBQUssR0FBR0MsK0RBQUssRUFBbkI7QUFDQUQsV0FBSyxDQUFDNkMsUUFBTixDQUFlRixDQUFDLENBQUNDLEdBQWpCO0FBQ0EsYUFBTzRGLFNBQVMsQ0FBQ3hJLEtBQUQsQ0FBaEI7QUFDSDtBQU5DO0FBWG9CLENBQUQsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUN4QlAsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7Ozs7Ozs7QUFPQTtBQUNBOztJQUNNaUgsTTs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLFVBQU1xQyxZQUFZLEdBQUcsS0FBSzVJLEtBQUwsQ0FBVzRELEtBQVgsS0FBcUIsR0FBckIsR0FBMkIsU0FBM0IsR0FBdUMsU0FBNUQ7QUFDQSxVQUFNaUYsY0FBYyxHQUFHLEtBQUs3SSxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXJCLEdBQTJCLFNBQTNCLEdBQXVDLFNBQTlEO0FBQ0EsVUFBTWtGLEtBQUssc1JBQVg7QUFJQSxVQUFNQyxLQUFLLHFOQUFYO0FBSUEsYUFBUXhHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRXdHLGlCQUFTLEVBQUU7QUFBYixPQUF6QixFQUNKekcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFQyxhQUFLLEVBQUU7QUFDMUJ3RyxpQkFBTyxFQUFFLENBRGlCO0FBRTFCQyxjQUFJLEVBQUUsTUFGb0I7QUFHMUJDLGtCQUFRLEVBQUUsU0FIZ0I7QUFJMUJDLHFCQUFXLEVBQUUsQ0FKYTtBQUsxQkMsZ0JBQU0sRUFBRSxTQUxrQjtBQU0xQkMscUJBQVcsRUFBRSxHQU5hO0FBTzFCQyx1QkFBYSxFQUFFLE9BUFc7QUFRMUJDLHdCQUFjLEVBQUUsT0FSVTtBQVMxQkMsMEJBQWdCLEVBQUUsQ0FUUTtBQVUxQkMseUJBQWUsRUFBRSxNQVZTO0FBVzFCQyx1QkFBYSxFQUFFO0FBWFc7QUFBVCxPQUF6QixFQWFJcEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFQyxhQUFLLEVBQUU7QUFDMUJ5RyxjQUFJLEVBQUVOLFlBRG9CO0FBRTFCUyxnQkFBTSxFQUFFLFNBRmtCO0FBRzFCRSx1QkFBYSxFQUFFO0FBSFc7QUFBVCxPQUF6QixFQUtJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFZDtBQUFMLE9BQTVCLENBTEosRUFNSXZHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRWI7QUFBTCxPQUE1QixDQU5KLEVBT0l4Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUU7QUFBTCxPQUE1QixDQVBKLENBYkosRUFxQklySCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsNkVBQUw7QUFBb0ZuSCxhQUFLLEVBQUU7QUFDL0d5RyxjQUFJLEVBQUUsTUFEeUc7QUFFL0dHLGdCQUFNLEVBQUVSLGNBRnVHO0FBRy9HVyx3QkFBYyxFQUFFO0FBSCtGO0FBQTNGLE9BQTVCLENBckJKLENBREksQ0FBUjtBQTJCSDs7OztFQXZDZ0JqSCw0Q0FBSyxDQUFDNkUsUzs7QUF5QzNCYixNQUFNLENBQUNzRCxTQUFQLEdBQW1CO0FBQ2ZqRyxPQUFLLEVBQUVrRyxpREFBUyxDQUFDQztBQURGLENBQW5CO0FBR2V4RCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTs7Ozs7OztBQU9BO0FBQ0E7O0lBQ01DLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxVQUFNb0MsWUFBWSxHQUFHLEtBQUs1SSxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXJCLEdBQTJCLFNBQTNCLEdBQXVDLFNBQTVEO0FBQ0EsVUFBTWlGLGNBQWMsR0FBRyxLQUFLN0ksS0FBTCxDQUFXNEQsS0FBWCxLQUFxQixHQUFyQixHQUEyQixTQUEzQixHQUF1QyxTQUE5RDtBQUNBLFVBQU1rRixLQUFLLDBNQUFYO0FBR0EsVUFBTUMsS0FBSyxrSkFBWDtBQUVBLFVBQU1pQixLQUFLLDJPQUFYO0FBR0EsVUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsVUFBSSxLQUFLakssS0FBTCxDQUFXNEQsS0FBWCxLQUFxQixHQUF6QixFQUE4QjtBQUMxQnFHLGFBQUssR0FBSTFILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRWQsS0FBTDtBQUFZckcsZUFBSyxFQUFFO0FBQ2hEeUcsZ0JBQUksRUFBRSxNQUQwQztBQUVoREcsa0JBQU0sRUFBRTtBQUZ3QztBQUFuQixTQUE1QixDQUFUO0FBSUg7O0FBQ0QsYUFBUTlHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRXdHLGlCQUFTLEVBQUU7QUFBYixPQUF6QixFQUNKekcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFQyxhQUFLLEVBQUU7QUFDMUJ5RyxjQUFJLEVBQUUsTUFEb0I7QUFFMUJFLHFCQUFXLEVBQUUsQ0FGYTtBQUcxQkQsa0JBQVEsRUFBRSxTQUhnQjtBQUkxQkUsZ0JBQU0sRUFBRSxTQUprQjtBQUsxQkMscUJBQVcsRUFBRSxHQUxhO0FBTTFCQyx1QkFBYSxFQUFFLE9BTlc7QUFPMUJDLHdCQUFjLEVBQUUsT0FQVTtBQVExQkMsMEJBQWdCLEVBQUUsQ0FSUTtBQVMxQkMseUJBQWUsRUFBRSxNQVRTO0FBVTFCQyx1QkFBYSxFQUFFO0FBVlc7QUFBVCxPQUF6QixFQVlJcEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFLHVCQUFMO0FBQThCbkgsYUFBSyxFQUFFO0FBQ3pEeUcsY0FBSSxFQUFFLE1BRG1EO0FBRXpERyxnQkFBTSxFQUFFLFNBRmlEO0FBR3pERyx3QkFBYyxFQUFFO0FBSHlDO0FBQXJDLE9BQTVCLENBWkosRUFpQklqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsZUFBTDtBQUFzQm5ILGFBQUssRUFBRTtBQUNqRHlHLGNBQUksRUFBRSxNQUQyQztBQUVqREcsZ0JBQU0sRUFBRSxTQUZ5QztBQUdqREcsd0JBQWMsRUFBRTtBQUhpQztBQUE3QixPQUE1QixDQWpCSixFQXNCSWpILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRWIsS0FBTDtBQUFZdEcsYUFBSyxFQUFFO0FBQ3ZDeUcsY0FBSSxFQUFFTixZQURpQztBQUV2Q1MsZ0JBQU0sRUFBRVIsY0FGK0I7QUFHdkNVLHVCQUFhLEVBQUUsTUFId0I7QUFJdkNDLHdCQUFjLEVBQUU7QUFKdUI7QUFBbkIsT0FBNUIsQ0F0QkosRUE0QklqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUVJLEtBQUw7QUFBWXZILGFBQUssRUFBRTtBQUN2Q3lHLGNBQUksRUFBRU4sWUFEaUM7QUFFdkNTLGdCQUFNLEVBQUU7QUFGK0I7QUFBbkIsT0FBNUIsQ0E1QkosRUFnQ0k5Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsaUNBQUw7QUFBd0NuSCxhQUFLLEVBQUU7QUFBRXlHLGNBQUksRUFBRSxNQUFSO0FBQWdCRyxnQkFBTSxFQUFFUjtBQUF4QjtBQUEvQyxPQUE1QixDQWhDSixFQWlDSXRHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRSx5Q0FBTDtBQUFnRG5ILGFBQUssRUFBRTtBQUFFeUcsY0FBSSxFQUFFLE1BQVI7QUFBZ0JHLGdCQUFNLEVBQUVSO0FBQXhCO0FBQXZELE9BQTVCLENBakNKLEVBa0NJdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFLGlDQUFMO0FBQXdDbkgsYUFBSyxFQUFFO0FBQUV5RyxjQUFJLEVBQUUsTUFBUjtBQUFnQkcsZ0JBQU0sRUFBRVI7QUFBeEI7QUFBL0MsT0FBNUIsQ0FsQ0osRUFtQ0lvQixLQW5DSixDQURJLENBQVI7QUFxQ0g7Ozs7RUF4RGMxSCw0Q0FBSyxDQUFDNkUsUzs7QUEwRHpCWixJQUFJLENBQUNxRCxTQUFMLEdBQWlCO0FBQ2JqRyxPQUFLLEVBQUVrRyxpREFBUyxDQUFDQztBQURKLENBQWpCO0FBR2V2RCxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTs7Ozs7OztBQU9BO0FBQ0E7O0lBQ01DLE07Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxVQUFNbUMsWUFBWSxHQUFHLEtBQUs1SSxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXJCLEdBQTJCLFNBQTNCLEdBQXVDLFNBQTVEO0FBQ0EsVUFBTWlGLGNBQWMsR0FBRyxLQUFLN0ksS0FBTCxDQUFXNEQsS0FBWCxLQUFxQixHQUFyQixHQUEyQixTQUEzQixHQUF1QyxTQUE5RDtBQUNBLFVBQUlxRyxLQUFLLEdBQUcsSUFBWjtBQUNBLFVBQU1uQixLQUFLLHNQQUFYO0FBSUEsVUFBTUMsS0FBSywwVUFBWDs7QUFLQSxVQUFJLEtBQUsvSSxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXpCLEVBQThCO0FBQzFCcUcsYUFBSyxHQUFJMUgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFZCxLQUFMO0FBQVlyRyxlQUFLLEVBQUU7QUFDaER5RyxnQkFBSSxFQUFFLFNBRDBDO0FBRWhERyxrQkFBTSxFQUFFO0FBRndDO0FBQW5CLFNBQTVCLENBQVQ7QUFJSDs7QUFDRCxhQUFROUcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFd0csaUJBQVMsRUFBRTtBQUFiLE9BQXpCLEVBQ0p6Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEdBQXBCLEVBQXlCO0FBQUVDLGFBQUssRUFBRTtBQUMxQndHLGlCQUFPLEVBQUUsQ0FEaUI7QUFFMUJDLGNBQUksRUFBRSxNQUZvQjtBQUcxQkUscUJBQVcsRUFBRSxDQUhhO0FBSTFCRCxrQkFBUSxFQUFFLFNBSmdCO0FBSzFCRSxnQkFBTSxFQUFFLFNBTGtCO0FBTTFCQyxxQkFBVyxFQUFFLEdBTmE7QUFPMUJDLHVCQUFhLEVBQUUsT0FQVztBQVExQkMsd0JBQWMsRUFBRSxPQVJVO0FBUzFCQywwQkFBZ0IsRUFBRSxDQVRRO0FBVTFCQyx5QkFBZSxFQUFFLE1BVlM7QUFXMUJDLHVCQUFhLEVBQUU7QUFYVztBQUFULE9BQXpCLEVBYUlwSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsK0RBQUw7QUFBc0VuSCxhQUFLLEVBQUU7QUFDakd5RyxjQUFJLEVBQUVOLFlBRDJGO0FBRWpHUyxnQkFBTSxFQUFFO0FBRnlGO0FBQTdFLE9BQTVCLENBYkosRUFpQkk5Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUViLEtBQUw7QUFBWXRHLGFBQUssRUFBRTtBQUN2Q3lHLGNBQUksRUFBRU4sWUFEaUM7QUFFdkNTLGdCQUFNLEVBQUU7QUFGK0I7QUFBbkIsT0FBNUIsQ0FqQkosRUFxQkk5Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsZ0VBQUw7QUFBdUVuSCxhQUFLLEVBQUU7QUFDbEd5RyxjQUFJLEVBQUVMLGNBRDRGO0FBRWxHUSxnQkFBTSxFQUFFUjtBQUYwRjtBQUE5RSxPQUE1QixDQXJCSixFQXlCSXRHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRSwrREFBTDtBQUFzRVosaUJBQVMsRUFBRSwyQ0FBakY7QUFBOEh2RyxhQUFLLEVBQUU7QUFDekp5RyxjQUFJLEVBQUVMLGNBRG1KO0FBRXpKUSxnQkFBTSxFQUFFUjtBQUZpSjtBQUFySSxPQUE1QixDQXpCSixFQTZCSW9CLEtBN0JKLENBREksQ0FBUjtBQStCSDs7OztFQW5EZ0IxSCw0Q0FBSyxDQUFDNkUsUzs7QUFxRDNCWCxNQUFNLENBQUNvRCxTQUFQLEdBQW1CO0FBQ2ZqRyxPQUFLLEVBQUVrRyxpREFBUyxDQUFDQztBQURGLENBQW5CO0FBR2V0RCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTs7Ozs7OztBQU9BO0FBQ0E7O0lBQ01DLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxVQUFNa0MsWUFBWSxHQUFHLEtBQUs1SSxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXJCLEdBQTJCLFNBQTNCLEdBQXVDLFNBQTVEO0FBQ0EsVUFBTWtGLEtBQUssZ1hBQVg7QUFLQSxhQUFRdkcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFd0csaUJBQVMsRUFBRTtBQUFiLE9BQXpCLEVBQ0p6Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUVkLEtBQUw7QUFBWXJHLGFBQUssRUFBRTtBQUN2Q3dHLGlCQUFPLEVBQUUsQ0FEOEI7QUFFdkNDLGNBQUksRUFBRU4sWUFGaUM7QUFHdkNRLHFCQUFXLEVBQUUsQ0FIMEI7QUFJdkNELGtCQUFRLEVBQUUsU0FKNkI7QUFLdkNFLGdCQUFNLEVBQUUsU0FMK0I7QUFNdkNDLHFCQUFXLEVBQUUsR0FOMEI7QUFPdkNDLHVCQUFhLEVBQUUsT0FQd0I7QUFRdkNDLHdCQUFjLEVBQUUsT0FSdUI7QUFTdkNDLDBCQUFnQixFQUFFLENBVHFCO0FBVXZDQyx5QkFBZSxFQUFFLE1BVnNCO0FBV3ZDQyx1QkFBYSxFQUFFO0FBWHdCO0FBQW5CLE9BQTVCLENBREksQ0FBUjtBQWNIOzs7O0VBdEJjcEgsNENBQUssQ0FBQzZFLFM7O0FBd0J6QlYsSUFBSSxDQUFDbUQsU0FBTCxHQUFpQjtBQUNiakcsT0FBSyxFQUFFa0csaURBQVMsQ0FBQ0M7QUFESixDQUFqQjtBQUdlckQsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7Ozs7Ozs7QUFPQTtBQUNBOztJQUNNQyxLOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsVUFBTWlDLFlBQVksR0FBRyxLQUFLNUksS0FBTCxDQUFXNEQsS0FBWCxLQUFxQixHQUFyQixHQUEyQixTQUEzQixHQUF1QyxTQUE1RDtBQUNBLFVBQU1pRixjQUFjLEdBQUcsS0FBSzdJLEtBQUwsQ0FBVzRELEtBQVgsS0FBcUIsR0FBckIsR0FBMkIsU0FBM0IsR0FBdUMsU0FBOUQ7QUFDQSxVQUFNa0YsS0FBSyx1SUFBWDtBQUVBLFVBQU1DLEtBQUssbVNBQVg7QUFJQSxhQUFReEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QjtBQUFFd0csaUJBQVMsRUFBRTtBQUFiLE9BQXpCLEVBQ0p6Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEdBQXBCLEVBQXlCO0FBQUVDLGFBQUssRUFBRTtBQUMxQndHLGlCQUFPLEVBQUUsQ0FEaUI7QUFFMUJDLGNBQUksRUFBRU4sWUFGb0I7QUFHMUJRLHFCQUFXLEVBQUUsQ0FIYTtBQUkxQkQsa0JBQVEsRUFBRSxTQUpnQjtBQUsxQkUsZ0JBQU0sRUFBRSxTQUxrQjtBQU0xQkMscUJBQVcsRUFBRSxHQU5hO0FBTzFCQyx1QkFBYSxFQUFFLE9BUFc7QUFRMUJDLHdCQUFjLEVBQUUsT0FSVTtBQVMxQkMsMEJBQWdCLEVBQUUsQ0FUUTtBQVUxQkMseUJBQWUsRUFBRSxNQVZTO0FBVzFCQyx1QkFBYSxFQUFFO0FBWFc7QUFBVCxPQUF6QixFQWFJcEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFLDhDQUFMO0FBQXFEWixpQkFBUyxFQUFFO0FBQWhFLE9BQTVCLENBYkosRUFjSXpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRSw4Q0FBTDtBQUFxRFosaUJBQVMsRUFBRTtBQUFoRSxPQUE1QixDQWRKLEVBZUl6Ryw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsOENBQUw7QUFBcURaLGlCQUFTLEVBQUU7QUFBaEUsT0FBNUIsQ0FmSixFQWdCSXpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRSw4Q0FBTDtBQUFxRFosaUJBQVMsRUFBRTtBQUFoRSxPQUE1QixDQWhCSixFQWlCSXpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRSw4Q0FBTDtBQUFxRFosaUJBQVMsRUFBRTtBQUFoRSxPQUE1QixDQWpCSixFQWtCSXpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFNBQUMsRUFBRWQsS0FBTDtBQUFZckcsYUFBSyxFQUFFO0FBQUU4Ryx1QkFBYSxFQUFFO0FBQWpCO0FBQW5CLE9BQTVCLENBbEJKLEVBbUJJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFYixLQUFMO0FBQVl0RyxhQUFLLEVBQUU7QUFBRThHLHVCQUFhLEVBQUU7QUFBakI7QUFBbkIsT0FBNUIsQ0FuQkosRUFvQkloSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxTQUFDLEVBQUUsaUNBQUw7QUFBd0NuSCxhQUFLLEVBQUU7QUFDbkV5RyxjQUFJLEVBQUUsTUFENkQ7QUFFbkVHLGdCQUFNLEVBQUVSO0FBRjJEO0FBQS9DLE9BQTVCLENBcEJKLEVBd0JJdEcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsU0FBQyxFQUFFLHFDQUFMO0FBQTRDbkgsYUFBSyxFQUFFO0FBQ3ZFeUcsY0FBSSxFQUFFLE1BRGlFO0FBRXZFRyxnQkFBTSxFQUFFUjtBQUYrRDtBQUFuRCxPQUE1QixDQXhCSixDQURJLENBQVI7QUE2Qkg7Ozs7RUF2Q2V0Ryw0Q0FBSyxDQUFDNkUsUzs7QUF5QzFCVCxLQUFLLENBQUNrRCxTQUFOLEdBQWtCO0FBQ2RqRyxPQUFLLEVBQUVrRyxpREFBUyxDQUFDQztBQURILENBQWxCO0FBR2VwRCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTs7Ozs7OztBQU9BO0FBQ0E7O0lBQ01DLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxVQUFJLEtBQUs1RyxLQUFMLENBQVc0RCxLQUFYLEtBQXFCLEdBQXpCLEVBQThCO0FBQzFCLGVBQVFyQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEdBQXBCLEVBQXlCO0FBQUV3RyxtQkFBUyxFQUFFO0FBQWIsU0FBekIsRUFDSnpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRUMsZUFBSyxFQUFFO0FBQzFCd0csbUJBQU8sRUFBRSxDQURpQjtBQUUxQkMsZ0JBQUksRUFBRSxTQUZvQjtBQUcxQkUsdUJBQVcsRUFBRSxDQUhhO0FBSTFCRCxvQkFBUSxFQUFFLFNBSmdCO0FBSzFCRSxrQkFBTSxFQUFFLFNBTGtCO0FBTTFCQyx1QkFBVyxFQUFFLEdBTmE7QUFPMUJDLHlCQUFhLEVBQUUsT0FQVztBQVExQkMsMEJBQWMsRUFBRSxPQVJVO0FBUzFCQyw0QkFBZ0IsRUFBRSxDQVRRO0FBVTFCQywyQkFBZSxFQUFFLE1BVlM7QUFXMUJDLHlCQUFhLEVBQUU7QUFYVztBQUFULFNBQXpCLEVBYUlwSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUseUNBQUw7QUFBZ0RuSCxlQUFLLEVBQUU7QUFBRThHLHlCQUFhLEVBQUU7QUFBakI7QUFBdkQsU0FBNUIsQ0FiSixFQWNJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFLHNEQUFMO0FBQTZEbkgsZUFBSyxFQUFFO0FBQUU4Ryx5QkFBYSxFQUFFO0FBQWpCO0FBQXBFLFNBQTVCLENBZEosRUFlSWhILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSw0Q0FBTDtBQUFtRG5ILGVBQUssRUFBRTtBQUFFOEcseUJBQWEsRUFBRTtBQUFqQjtBQUExRCxTQUE1QixDQWZKLEVBZ0JJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFLHNEQUFMO0FBQTZEbkgsZUFBSyxFQUFFO0FBQ3hGOEcseUJBQWEsRUFBRSxNQUR5RTtBQUV4RkMsMEJBQWMsRUFBRTtBQUZ3RTtBQUFwRSxTQUE1QixDQWhCSixFQW9CSWpILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSxrREFBTDtBQUF5RG5ILGVBQUssRUFBRTtBQUFFOEcseUJBQWEsRUFBRTtBQUFqQjtBQUFoRSxTQUE1QixDQXBCSixFQXFCSWhILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSxzR0FBTDtBQUE2R25ILGVBQUssRUFBRTtBQUFFOEcseUJBQWEsRUFBRTtBQUFqQjtBQUFwSCxTQUE1QixDQXJCSixFQXNCSWhILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSwrQkFBTDtBQUFzQ25ILGVBQUssRUFBRTtBQUNqRXlHLGdCQUFJLEVBQUUsTUFEMkQ7QUFFakVHLGtCQUFNLEVBQUUsU0FGeUQ7QUFHakVDLHVCQUFXLEVBQUUsQ0FIb0Q7QUFJakVFLDBCQUFjLEVBQUU7QUFKaUQ7QUFBN0MsU0FBNUIsQ0F0QkosRUE0QklqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUscUJBQUw7QUFBNEJuSCxlQUFLLEVBQUU7QUFDdkR5RyxnQkFBSSxFQUFFLE1BRGlEO0FBRXZERyxrQkFBTSxFQUFFLFNBRitDO0FBR3ZEQyx1QkFBVyxFQUFFLENBSDBDO0FBSXZERSwwQkFBYyxFQUFFO0FBSnVDO0FBQW5DLFNBQTVCLENBNUJKLEVBa0NJakgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFLHFCQUFMO0FBQTRCbkgsZUFBSyxFQUFFO0FBQ3ZEeUcsZ0JBQUksRUFBRSxNQURpRDtBQUV2REcsa0JBQU0sRUFBRSxTQUYrQztBQUd2REMsdUJBQVcsRUFBRSxDQUgwQztBQUl2REUsMEJBQWMsRUFBRTtBQUp1QztBQUFuQyxTQUE1QixDQWxDSixFQXdDSWpILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSxxQkFBTDtBQUE0Qm5ILGVBQUssRUFBRTtBQUN2RHlHLGdCQUFJLEVBQUUsTUFEaUQ7QUFFdkRHLGtCQUFNLEVBQUUsU0FGK0M7QUFHdkRDLHVCQUFXLEVBQUUsQ0FIMEM7QUFJdkRFLDBCQUFjLEVBQUU7QUFKdUM7QUFBbkMsU0FBNUIsQ0F4Q0osRUE4Q0lqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUsaUJBQUw7QUFBd0JuSCxlQUFLLEVBQUU7QUFDbkR5RyxnQkFBSSxFQUFFLE1BRDZDO0FBRW5ERyxrQkFBTSxFQUFFLFNBRjJDO0FBR25EQyx1QkFBVyxFQUFFLENBSHNDO0FBSW5ERSwwQkFBYyxFQUFFO0FBSm1DO0FBQS9CLFNBQTVCLENBOUNKLENBREksQ0FBUjtBQXFESCxPQXRERCxNQXVESztBQUNELGVBQVFqSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEdBQXBCLEVBQXlCO0FBQUV3RyxtQkFBUyxFQUFFO0FBQWIsU0FBekIsRUFDSnpHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRUMsZUFBSyxFQUFFO0FBQzFCd0csbUJBQU8sRUFBRSxDQURpQjtBQUUxQkMsZ0JBQUksRUFBRSxTQUZvQjtBQUcxQkUsdUJBQVcsRUFBRSxDQUhhO0FBSTFCRCxvQkFBUSxFQUFFLFNBSmdCO0FBSzFCRSxrQkFBTSxFQUFFLFNBTGtCO0FBTTFCQyx1QkFBVyxFQUFFLEdBTmE7QUFPMUJDLHlCQUFhLEVBQUUsT0FQVztBQVExQkMsMEJBQWMsRUFBRSxPQVJVO0FBUzFCQyw0QkFBZ0IsRUFBRSxDQVRRO0FBVTFCQywyQkFBZSxFQUFFLE1BVlM7QUFXMUJDLHlCQUFhLEVBQUU7QUFYVztBQUFULFNBQXpCLEVBYUlwSCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUseUNBQUw7QUFBZ0RuSCxlQUFLLEVBQUU7QUFBRThHLHlCQUFhLEVBQUU7QUFBakI7QUFBdkQsU0FBNUIsQ0FiSixFQWNJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFLDRDQUFMO0FBQW1EbkgsZUFBSyxFQUFFO0FBQUU4Ryx5QkFBYSxFQUFFO0FBQWpCO0FBQTFELFNBQTVCLENBZEosRUFlSWhILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRW9ILFdBQUMsRUFBRSwyRkFBTDtBQUFrR25ILGVBQUssRUFBRTtBQUFFOEcseUJBQWEsRUFBRTtBQUFqQjtBQUF6RyxTQUE1QixDQWZKLEVBZ0JJaEgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFO0FBQUwsU0FBNUIsQ0FoQkosRUFpQklySCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUscUNBQUw7QUFBNENuSCxlQUFLLEVBQUU7QUFDdkU4Ryx5QkFBYSxFQUFFLE1BRHdEO0FBRXZFQywwQkFBYyxFQUFFO0FBRnVEO0FBQW5ELFNBQTVCLENBakJKLEVBcUJJakgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFb0gsV0FBQyxFQUFFO0FBQUwsU0FBNUIsQ0FyQkosRUFzQklySCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVvSCxXQUFDLEVBQUUsaUJBQUw7QUFBd0JuSCxlQUFLLEVBQUU7QUFDbkR5RyxnQkFBSSxFQUFFLE1BRDZDO0FBRW5ERyxrQkFBTSxFQUFFLFNBRjJDO0FBR25ERywwQkFBYyxFQUFFO0FBSG1DO0FBQS9CLFNBQTVCLENBdEJKLENBREksQ0FBUjtBQTRCSDtBQUNKOzs7O0VBdkZjakgsNENBQUssQ0FBQzZFLFM7O0FBeUZ6QlIsSUFBSSxDQUFDaUQsU0FBTCxHQUFpQjtBQUNiakcsT0FBSyxFQUFFa0csaURBQVMsQ0FBQ0M7QUFESixDQUFqQjtBQUdlbkQsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFJc0QsS0FBSjtBQUNPLElBQU14RixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzNCLE1BQUksQ0FBQ3dGLEtBQUwsRUFBWTtBQUNSQSxTQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVQyxzREFBVixDQUFSO0FBQ0g7O0FBQ0RGLE9BQUssQ0FBQ0csSUFBTjtBQUNILENBTE0sQyIsImZpbGUiOiJjNmVlYzQ0NDE0MzJlNTg1ZWEyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOCBUaGUgQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pbyBBdXRob3JzLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZXNzIGZyb20gJy4vY2hlc3Nqc3dyYXBwZXInO1xuaW1wb3J0IHsgQ2hlY2tlcmJvYXJkLCBjYXJ0ZXNpYW5Ub0FsZ2VicmFpYywgfSBmcm9tICcuLi8uLi9jb21tb24vQ2hlY2tlcmJvYXJkJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby91aSc7XG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZUxheW91dCc7XG5pbXBvcnQgeyBHYW1lTW9kZSB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBCaXNob3AgZnJvbSAnLi9waWVjZXMvYmlzaG9wJztcbmltcG9ydCBLaW5nIGZyb20gJy4vcGllY2VzL2tpbmcnO1xuaW1wb3J0IEtuaWdodCBmcm9tICcuL3BpZWNlcy9rbmlnaHQnO1xuaW1wb3J0IFBhd24gZnJvbSAnLi9waWVjZXMvcGF3bic7XG5pbXBvcnQgUXVlZW4gZnJvbSAnLi9waWVjZXMvcXVlZW4nO1xuaW1wb3J0IFJvb2sgZnJvbSAnLi9waWVjZXMvcm9vayc7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICcuL3NvdW5kJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuY29uc3QgQ09MX05BTUVTID0gJ2FiY2RlZmdoJztcbmNvbnN0IEhJR0hMSUdIVEVEX0NPTE9SID0gJ2dyZWVuJztcbmNvbnN0IE1PVkFCTEVfQ09MT1IgPSAncGFsZWdyZWVuJztcbmNvbnN0IE1PVkVEX0NPTE9SID0gJyNDQ0U1RkYnO1xuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jaGVzcyA9IENoZXNzKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJycsXG4gICAgICAgICAgICBoaWdobGlnaHRlZDogJycsXG4gICAgICAgICAgICBkcmFnZ2VkOiAnJyxcbiAgICAgICAgICAgIHNvdW5kRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2xpY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHNxdWFyZSB9ID0gY29vcmRzO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkICYmIHRoaXMuX2lzU2VsZWN0YWJsZShzcXVhcmUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IHNlbGVjdGVkOiBzcXVhcmUsIGhpZ2hsaWdodGVkOiBzcXVhcmUgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyeU1vdmUodGhpcy5zdGF0ZS5zZWxlY3RlZCwgc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2hvdWxkRHJhZyA9IChjb29yZHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjb29yZHMueDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjb29yZHMueTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGNhcnRlc2lhblRvQWxnZWJyYWljKHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiB0aGlzLl9pc1NlbGVjdGFibGUoc3F1YXJlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgZHJhZ2dlZDogdGhpcy5fZ2V0SW5pdGlhbENlbGwoc3F1YXJlKSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29uRHJhZyA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gZGF0YS54O1xuICAgICAgICAgICAgY29uc3QgeSA9IGRhdGEueTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsWCA9IGRhdGEub3JpZ2luYWxYO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxZID0gZGF0YS5vcmlnaW5hbFk7XG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KE1hdGgucG93KCh4IC0gb3JpZ2luYWxYKSwgMikgKyBNYXRoLnBvdygoeSAtIG9yaWdpbmFsWSksIDIpKSA+IDAuMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBzZWxlY3RlZDogdGhpcy5fZ2V0U3F1YXJlKG9yaWdpbmFsWCwgb3JpZ2luYWxZKSwgaGlnaGxpZ2h0ZWQ6IHRoaXMuX2dldFNxdWFyZSh4LCB5KSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgc2VsZWN0ZWQ6ICcnLCBoaWdobGlnaHRlZDogJycgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vbkRyb3AgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gY29vcmRzLng7XG4gICAgICAgICAgICBjb25zdCB5ID0gY29vcmRzLnk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBkcmFnZ2VkOiAnJyB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5TW92ZSh0aGlzLnN0YXRlLnNlbGVjdGVkLCB0aGlzLl9nZXRTcXVhcmUoeCwgeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXRTb3VuZFByZWYgPSAoc291bmRFbmFibGVkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2xkU3RhdGUsIHsgc291bmRFbmFibGVkIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3RvZ2dsZVNvdW5kUHJlZiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NldFNvdW5kUHJlZighdGhpcy5fZ2V0U291bmRQcmVmKCkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTb3VuZFByZWYgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3VuZEVuYWJsZWQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldE9wdGlvbnNNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJTb3VuZFByZWYgPSB0aGlzLl9nZXRTb3VuZFByZWYoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NvdW5kUHJlZiA9ICFjdXJTb3VuZFByZWY7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5fdG9nZ2xlU291bmRQcmVmLFxuICAgICAgICAgICAgICAgIHRleHQ6IGAke25ld1NvdW5kUHJlZiA/ICdFbmFibGUnIDogJ0Rpc2FibGUnfSBzb3VuZGAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtvcHRpb25dO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRy5wZ24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlc3MubG9hZF9wZ24odGhpcy5wcm9wcy5HLnBnbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyKSB7XG4gICAgICAgICAgICBjb25zdCBnYW1lT3ZlckJvYXJkID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyB3aWR0aDogJzUwJScsIGhlaWdodDogJzUwJScsIG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2VyYm9hcmQsIHsgaW52ZXJ0OiB0aGlzLmdldFBsYXllcigpID09PSAnYicsIG9uQ2xpY2s6ICgpID0+IHVuZGVmaW5lZCB9LCB0aGlzLl9nZXRQaWVjZXMoKSkpKTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lTGF5b3V0LCB7IGdhbWVPdmVyOiB0aGlzLl9nZXRHYW1lT3ZlcigpLCBnYW1lQXJnczogdGhpcy5wcm9wcy5nYW1lQXJncywgZXh0cmFDYXJkQ29udGVudDogZ2FtZU92ZXJCb2FyZCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgb3B0aW9uc01lbnVJdGVtczogdGhpcy5fZ2V0T3B0aW9uc01lbnVJdGVtcyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIsIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9IH0sIHRoaXMuX2dldFN0YXR1cygpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrZXJib2FyZCwgeyBpbnZlcnQ6IHRoaXMuZ2V0UGxheWVyKCkgPT09ICdiJywgaGlnaGxpZ2h0ZWRTcXVhcmVzOiB0aGlzLl9nZXRIaWdobGlnaHRlZFNxdWFyZXMoKSwgb25DbGljazogdGhpcy5fY2xpY2sgfSwgdGhpcy5fZ2V0UGllY2VzKCkpKSkpO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnBsYXllcklEID09PSAnMScpIHtcbiAgICAgICAgICAgIHJldHVybiAnYic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICB9XG4gICAgfVxuICAgIF90cnlNb3ZlKGZyb20sIHRvKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5fZ2V0TW92ZXMoKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBhIHZhbGlkIG1vdmVcbiAgICAgICAgY29uc3QgbW92ZSA9IG1vdmVzLmZpbmQobSA9PiBtLmZyb20gPT09IGZyb20gJiYgbS50byA9PT0gdG8pO1xuICAgICAgICBpZiAobW92ZSkge1xuICAgICAgICAgICAgLy8gYWN0dWFsbHkgbWFrZSB0aGUgbW92ZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3Zlcy5tb3ZlKG1vdmUuc2FuKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9nZXRTb3VuZFByZWYoKSkge1xuICAgICAgICAgICAgICAgIHBsYXlTb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2FtZUFyZ3MgJiYgdGhpcy5wcm9wcy5nYW1lQXJncy5tb2RlID09PSBHYW1lTW9kZS5BSSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RlcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIHRoZSBzZWxlY3Rpb24gYW5kIGhpZ2hsaWdodGVkIHBpZWNlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBzZWxlY3RlZDogJycsIGhpZ2hsaWdodGVkOiAnJyB9KSk7XG4gICAgfVxuICAgIF9nZXRIaWdobGlnaHRlZFNxdWFyZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5fZml4SGlzdG9yeSh0aGlzLmNoZXNzLmhpc3RvcnkoeyB2ZXJib3NlOiB0cnVlIH0pKTtcbiAgICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdE1vdmUgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAodGhpcy5fZ2V0Q3VycmVudFBsYXllcigpICE9PSBsYXN0TW92ZS5jb2xvcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtsYXN0TW92ZS5mcm9tXSA9IE1PVkVEX0NPTE9SO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtsYXN0TW92ZS50b10gPSBNT1ZFRF9DT0xPUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgdGhpcy5fZ2V0TW92ZXMoKSkge1xuICAgICAgICAgICAgcmVzdWx0W21vdmUudG9dID0gTU9WQUJMRV9DT0xPUjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgcmVzdWx0W3RoaXMuc3RhdGUuaGlnaGxpZ2h0ZWRdID0gSElHSExJR0hURURfQ09MT1I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX2dldFNxdWFyZSh4LCB5KSB7XG4gICAgICAgIHJldHVybiBjYXJ0ZXNpYW5Ub0FsZ2VicmFpYyh0aGlzLl9nZXRJblJhbmdlKHgpLCB0aGlzLl9nZXRJblJhbmdlKHkpKTtcbiAgICB9XG4gICAgX2dldEluUmFuZ2UoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oTWF0aC5yb3VuZCh4KSwgNyksIDApO1xuICAgIH1cbiAgICBfZ2V0UGllY2VzKCkge1xuICAgICAgICBjb25zdCBkcmFnZ2VkID0gW107XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB5ID0gMTsgeSA8PSA4OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgODsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gQ09MX05BTUVTW3hdICsgeTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWVjZSA9IHRoaXMuY2hlc3MuZ2V0KHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9rZW4sIHsgZHJhZ2dhYmxlOiB0cnVlLCBzaG91bGREcmFnOiB0aGlzLl9zaG91bGREcmFnLCBvbkRyYWc6IHRoaXMuX29uRHJhZywgb25Ecm9wOiB0aGlzLl9vbkRyb3AsIHNxdWFyZTogc3F1YXJlLCBhbmltYXRlOiB0cnVlLCBrZXk6IHRoaXMuX2dldEluaXRpYWxDZWxsKHNxdWFyZSkgfSwgdGhpcy5fZ2V0UGllY2VCeVR5cGVBbmRDb2xvcihwaWVjZS50eXBlLCBwaWVjZS5jb2xvcikpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNxdWFyZSA9PT0gdGhpcy5zdGF0ZS5kcmFnZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmFnZ2VkLmNvbmNhdChyZXN1bHQpO1xuICAgIH1cbiAgICBfZ2V0UGllY2VCeVR5cGVBbmRDb2xvcih0eXBlLCBjb2xvcikge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEJpc2hvcCwgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChLaW5nLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEtuaWdodCwgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICBjYXNlICdwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQYXduLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZWVuLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvb2ssIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRHYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc3QgZ2FtZUFyZ3MgPSB0aGlzLnByb3BzLmdhbWVBcmdzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2FtZUFyZ3MubW9kZTtcbiAgICAgICAgaWYgKG1vZGUgPT09IEdhbWVNb2RlLk9ubGluZUZyaWVuZCB8fCBtb2RlID09PSBHYW1lTW9kZS5BSSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyID09PSB0aGlzLmdldFBsYXllcigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd5b3Ugd29uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyID09PSAnZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RyYXcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd5b3UgbG9zdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2NhbCBnYW1lXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnd2hpdGUgd29uJztcbiAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdibGFjayB3b24nO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RyYXcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRTdGF0dXMoKSB7XG4gICAgICAgIC8vIE9ubGluZSBNdWx0aXBsYXllclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5nYW1lQXJncyAmJiB0aGlzLnByb3BzLmdhbWVBcmdzLm1vZGUgPT09IEdhbWVNb2RlLk9ubGluZUZyaWVuZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlc3MuaW5fY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ0hFQ0snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlc3MudHVybigpID09PSB0aGlzLmdldFBsYXllcigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdZT1VSIFRVUk4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXYWl0aW5nIGZvciBvcHBvbmVudC4uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2NhbCBnYW1lXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVzcy5pbl9jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDSEVDSyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY2hlc3MudHVybigpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIldoaXRlJ3MgdHVyblwiO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCbGFjaydzIHR1cm5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0SW5pdGlhbENlbGwoc3F1YXJlKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLl9maXhIaXN0b3J5KHRoaXMuY2hlc3MuaGlzdG9yeSh7IHZlcmJvc2U6IHRydWUgfSkpO1xuICAgICAgICBsZXQgbGFzdFNlZW4gPSBzcXVhcmU7XG4gICAgICAgIGZvciAobGV0IGkgPSBoaXN0b3J5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gaGlzdG9yeVtpXTtcbiAgICAgICAgICAgIGlmIChsYXN0U2VlbiA9PT0gbW92ZS50bykge1xuICAgICAgICAgICAgICAgIGxhc3RTZWVuID0gbW92ZS5mcm9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXN0U2VlbjtcbiAgICB9XG4gICAgLy8gQ2FzdGxpbmcgb25seSBjb250YWlucyBvbmUgbW92ZSwgbGVhZGluZyB0byB3cm9uZyBpbml0aWFsIGNlbGwuXG4gICAgX2ZpeEhpc3RvcnkoaGlzdG9yeSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgIGxldCBuZXdNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtb3ZlLnNhbiA9PT0gJ08tTy1PJykge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlLmNvbG9yID09PSAndycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TW92ZSA9IHsgZnJvbTogJ2ExJywgdG86ICdkMScgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01vdmUgPSB7IGZyb206ICdhOCcsIHRvOiAnZDgnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobW92ZS5zYW4gPT09ICdPLU8nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdmUuY29sb3IgPT09ICd3Jykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNb3ZlID0geyBmcm9tOiAnaDEnLCB0bzogJ2YxJyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TW92ZSA9IHsgZnJvbTogJ2g4JywgdG86ICdmOCcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChtb3ZlKTtcbiAgICAgICAgICAgIGlmIChuZXdNb3ZlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3TW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX2lzU2VsZWN0YWJsZShzcXVhcmUpIHtcbiAgICAgICAgY29uc3QgcGllY2UgPSB0aGlzLmNoZXNzLmdldChzcXVhcmUpO1xuICAgICAgICByZXR1cm4gcGllY2UgJiYgcGllY2UuY29sb3IgPT09IHRoaXMuX2dldEN1cnJlbnRQbGF5ZXIoKSAmJiB0aGlzLmNoZXNzLm1vdmVzKHsgc3F1YXJlIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIF9nZXRDdXJyZW50UGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllciA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdiJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0TW92ZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoZXNzLm1vdmVzKHtcbiAgICAgICAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICAgICAgICBzcXVhcmU6IHRoaXMuc3RhdGUuc2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IENoZXNzUGtnID0gcmVxdWlyZSgnY2hlc3MuanMnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlc3NGbigpIHtcbiAgICBsZXQgY2hlc3MgPSBudWxsO1xuICAgIGlmIChDaGVzc1BrZy5DaGVzcykge1xuICAgICAgICBjaGVzcyA9IG5ldyBDaGVzc1BrZy5DaGVzcygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hlc3MgPSBuZXcgQ2hlc3NQa2coKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoZXNzO1xufVxuIiwiaW1wb3J0IHsgQ2hlc3NHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IEJvYXJkIGFzIENoZXNzQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBiZ2lvR2FtZTogQ2hlc3NHYW1lLFxuICAgIGJnaW9Cb2FyZDogQ2hlc3NCb2FyZCxcbiAgICBkZWJ1ZzogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE4IFRoZSBAZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqL1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vY29yZSc7XG5pbXBvcnQgQ2hlc3MgZnJvbSAnLi9jaGVzc2pzd3JhcHBlcic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyKGNoZXNzKSB7XG4gICAgaWYgKGNoZXNzLmdhbWVfb3ZlcigpKSB7XG4gICAgICAgIGlmIChjaGVzcy5pbl9kcmF3KCkgfHwgY2hlc3MuaW5fdGhyZWVmb2xkX3JlcGV0aXRpb24oKSB8fCBjaGVzcy5pbnN1ZmZpY2llbnRfbWF0ZXJpYWwoKSB8fCBjaGVzcy5pbl9zdGFsZW1hdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaGVzcy50dXJuKCkgPT09ICd3Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IENoZXNzR2FtZSA9IEdhbWUoe1xuICAgIG5hbWU6ICdjaGVzcycsXG4gICAgc2V0dXA6ICgpID0+ICh7IHBnbjogJycsIGZlbjogJycgfSksXG4gICAgbW92ZXM6IHtcbiAgICAgICAgbW92ZShHLCBjdHgsIHNhbikge1xuICAgICAgICAgICAgY29uc3QgY2hlc3MgPSBDaGVzcygpO1xuICAgICAgICAgICAgY2hlc3MubG9hZF9wZ24oRy5wZ24pO1xuICAgICAgICAgICAgY2hlc3MubW92ZShzYW4sIHsgc2xvcHB5OiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgcGduOiBjaGVzcy5wZ24oKSwgZmVuOiBjaGVzcy5mZW4oKSB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZmxvdzoge1xuICAgICAgICBtb3Zlc1BlclR1cm46IDEsXG4gICAgICAgIGVuZEdhbWVJZjogKEcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZXNzID0gQ2hlc3MoKTtcbiAgICAgICAgICAgIGNoZXNzLmxvYWRfcGduKEcucGduKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRXaW5uZXIoY2hlc3MpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE0MjIxZjMzMWU3YmRhZWQ4MjI2OGExOWIyZWMyMjEyLm1wM1wiOyIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5jbGFzcyBCaXNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeUNvbG9yID0gdGhpcy5wcm9wcy5jb2xvciA9PT0gJ2InID8gJyMwMDAwMDAnIDogJyNGRkZGRkYnO1xuICAgICAgICBjb25zdCBzZWNvbmRhcnlDb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPT09ICdiJyA/ICcjRkZGRkZGJyA6ICcjMDAwMDAwJztcbiAgICAgICAgY29uc3QgcGF0aDEgPSBgTSA5LDM2IEMgMTIuMzksMzUuMDMgMTkuMTEsMzYuNDMgMjIuNSwzNCBDIDI1Ljg5LDM2LjQzXG4gICAgMzIuNjEsMzUuMDMgMzYsMzYgQyAzNiwzNiAzNy42NSwzNi41NCAzOSwzOCBDIDM4LjMyLDM4Ljk3IDM3LjM1LDM4Ljk5XG4gICAgMzYsMzguNSBDIDMyLjYxLDM3LjUzIDI1Ljg5LDM4Ljk2IDIyLjUsMzcuNSBDIDE5LjExLDM4Ljk2IDEyLjM5LDM3LjUzXG4gICAgOSwzOC41IEMgNy42NDYsMzguOTkgNi42NzcsMzguOTcgNiwzOCBDIDcuMzU0LDM2LjA2IDksMzYgOSwzNiB6YDtcbiAgICAgICAgY29uc3QgcGF0aDIgPSBgTSAxNSwzMiBDIDE3LjUsMzQuNSAyNy41LDM0LjUgMzAsMzIgQyAzMC41LDMwLjUgMzAsMzBcbiAgICAzMCwzMCBDIDMwLDI3LjUgMjcuNSwyNiAyNy41LDI2IEMgMzMsMjQuNSAzMy41LDE0LjUgMjIuNSwxMC41XG4gICAgQyAxMS41LDE0LjUgMTIsMjQuNSAxNy41LDI2IEMgMTcuNSwyNiAxNSwyNy41IDE1LDMwIEMgMTUsMzAgMTQuNSwzMC41XG4gICAgMTUsMzIgemA7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyB0cmFuc2Zvcm06IFwic2NhbGUoLjAyMjIyMiwuMDIyMjIyKVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU6ICdldmVub2RkJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDEgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDIgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDI1IDggQSAyLjUgMi41IDAgMSAxICAyMCw4IEEgMi41IDIuNSAwIDEgMSAgMjUgOCB6XCIgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDE3LjUsMjYgTCAyNy41LDI2IE0gMTUsMzAgTCAzMCwzMCBNIDIyLjUsMTUuNSBMIDIyLjUsMjAuNSBNIDIwLDE4IEwgMjUsMThcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc2Vjb25kYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSB9KSkpKTtcbiAgICB9XG59XG5CaXNob3AucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbmV4cG9ydCBkZWZhdWx0IEJpc2hvcDtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5jbGFzcyBLaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlDb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPT09ICdiJyA/ICcjMDAwMDAwJyA6ICcjRkZGRkZGJztcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5Q29sb3IgPSB0aGlzLnByb3BzLmNvbG9yID09PSAnYicgPyAnI0ZGRkZGRicgOiAnIzAwMDAwMCc7XG4gICAgICAgIGNvbnN0IHBhdGgxID0gYE0gMzIsMjkuNSBDIDMyLDI5LjUgNDAuNSwyNS41IDM4LjAzLDE5Ljg1IEMgMzQuMTUsMTQgMjUsMThcbiAgICAgICAgICAgICAgICAgICAyMi41LDI0LjUgTCAyMi41MSwyNi42IEwgMjIuNSwyNC41IEMgMjAsMTggOS45MDYsMTRcbiAgICAgICAgICAgICAgICAgICA2Ljk5NywxOS44NSBDIDQuNSwyNS41IDExLjg1LDI4Ljg1IDExLjg1LDI4Ljg1YDtcbiAgICAgICAgY29uc3QgcGF0aDIgPSBgTSAyMi41LDI1IEMgMjIuNSwyNSAyNywxNy41IDI1LjUsMTQuNSBDIDI1LjUsMTQuNSAyNC41LDEyXG4gICAgICAgICAgICAgICAgICAgMjIuNSwxMiBDIDIwLjUsMTIgMTkuNSwxNC41IDE5LjUsMTQuNSBDIDE4LDE3LjUgMjIuNSwyNSAyMi41LDI1YDtcbiAgICAgICAgY29uc3QgcGF0aDMgPSBgTSAxMS41LDM3IEMgMTcsNDAuNSAyNyw0MC41IDMyLjUsMzcgTCAzMi41LDMwIEMgMzIuNSwzMCA0MS41LDI1LjVcbiAgICAgICAgICAgICAgICAgICAzOC41LDE5LjUgQyAzNC41LDEzIDI1LDE2IDIyLjUsMjMuNSBMIDIyLjUsMjcgTCAyMi41LDIzLjUgQyAxOSwxNlxuICAgICAgICAgICAgICAgICAgIDkuNSwxMyA2LjUsMTkuNSBDIDMuNSwyNS41IDExLjUsMjkuNSAxMS41LDI5LjUgTCAxMS41LDM3IHpgO1xuICAgICAgICBsZXQgZXh0cmEgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xvciA9PT0gJ2InKSB7XG4gICAgICAgICAgICBleHRyYSA9IChSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IHBhdGgxLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyB0cmFuc2Zvcm06IFwic2NhbGUoLjAyMjIyMiwuMDIyMjIyKVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlOiAnZXZlbm9kZCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDIyLjUsMTEuNjMgTCAyMi41LDZcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMjAsOCBMIDI1LDhcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBwYXRoMiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc2Vjb25kYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IHBhdGgzLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogcHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMTEuNSwzMCBDIDE3LDI3IDI3LDI3IDMyLjUsMzBcIiwgc3R5bGU6IHsgZmlsbDogJ25vbmUnLCBzdHJva2U6IHNlY29uZGFyeUNvbG9yIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMTEuNSwzMy41IEMgMTcsMzAuNSAyNywzMC41IDMyLjUsMzMuNVwiLCBzdHlsZTogeyBmaWxsOiAnbm9uZScsIHN0cm9rZTogc2Vjb25kYXJ5Q29sb3IgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxMS41LDM3IEMgMTcsMzQgMjcsMzQgMzIuNSwzN1wiLCBzdHlsZTogeyBmaWxsOiAnbm9uZScsIHN0cm9rZTogc2Vjb25kYXJ5Q29sb3IgfSB9KSxcbiAgICAgICAgICAgICAgICBleHRyYSkpKTtcbiAgICB9XG59XG5LaW5nLnByb3BUeXBlcyA9IHtcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5leHBvcnQgZGVmYXVsdCBLaW5nO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmNsYXNzIEtuaWdodCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcmltYXJ5Q29sb3IgPSB0aGlzLnByb3BzLmNvbG9yID09PSAnYicgPyAnIzAwMDAwMCcgOiAnI0ZGRkZGRic7XG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUNvbG9yID0gdGhpcy5wcm9wcy5jb2xvciA9PT0gJ2InID8gJyNGRkZGRkYnIDogJyMwMDAwMDAnO1xuICAgICAgICBsZXQgZXh0cmEgPSBudWxsO1xuICAgICAgICBjb25zdCBwYXRoMSA9IGBNIDI0LjU1LDEwLjQgTCAyNC4xLDExLjg1IEwgMjQuNiwxMiBDIDI3Ljc1LDEzIDMwLjI1LDE0LjQ5XG4gICAgMzIuNSwxOC43NSBDIDM0Ljc1LDIzLjAxIDM1Ljc1LDI5LjA2IDM1LjI1LDM5IEwgMzUuMiwzOS41IEwgMzcuNDUsMzkuNSBMXG4gICAgMzcuNSwzOSBDIDM4LDI4Ljk0IDM2LjYyLDIyLjE1IDM0LjI1LDE3LjY2IEMgMzEuODgsMTMuMTcgMjguNDYsMTEuMDIgMjUuMDYsMTAuNVxuICAgIEwgMjQuNTUsMTAuNCB6YDtcbiAgICAgICAgY29uc3QgcGF0aDIgPSBgTSAyNCwxOCBDIDI0LjM4LDIwLjkxIDE4LjQ1LDI1LjM3IDE2LDI3IEMgMTMsMjkgMTMuMTgsMzEuMzRcbiAgICAxMSwzMSBDIDkuOTU4LDMwLjA2IDEyLjQxLDI3Ljk2IDExLDI4IEMgMTAsMjggMTEuMTksMjkuMjMgMTAsMzAgQyA5LDMwXG4gICAgNS45OTcsMzEgNiwyNiBDIDYsMjQgMTIsMTQgMTIsMTQgQyAxMiwxNCAxMy44OSwxMi4xIDE0LDEwLjUgQyAxMy4yNyw5LjUwNlxuICAgIDEzLjUsOC41IDEzLjUsNy41IEMgMTQuNSw2LjUgMTYuNSwxMCAxNi41LDEwIEwgMTguNSwxMCBDIDE4LjUsMTAgMTkuMjgsOC4wMDhcbiAgICAyMSw3IEMgMjIsNyAyMiwxMCAyMiwxMGA7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbG9yID09PSAnYicpIHtcbiAgICAgICAgICAgIGV4dHJhID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDEsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IHRyYW5zZm9ybTogXCJzY2FsZSguMDIyMjIyLC4wMjIyMjIpXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU6ICdldmVub2RkJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMjIsMTAgQyAzMi41LDExIDM4LjUsMTggMzgsMzkgTCAxNSwzOSBDIDE1LDMwIDI1LDMyLjUgMjMsMThcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBwcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSA5LjUgMjUuNSBBIDAuNSAwLjUgMCAxIDEgOC41LDI1LjUgQSAwLjUgMC41IDAgMSAxIDkuNSAyNS41IHpcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHNlY29uZGFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzZWNvbmRhcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxNSAxNS41IEEgMC41IDEuNSAwIDEgMSAgMTQsMTUuNSBBIDAuNSAxLjUgMCAxIDEgIDE1IDE1LjUgelwiLCB0cmFuc2Zvcm06IFwibWF0cml4KDAuODY2LDAuNSwtMC41LDAuODY2LDkuNjkzLC01LjE3MylcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHNlY29uZGFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzZWNvbmRhcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBleHRyYSkpKTtcbiAgICB9XG59XG5LbmlnaHQucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbmV4cG9ydCBkZWZhdWx0IEtuaWdodDtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5jbGFzcyBQYXduIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlDb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPT09ICdiJyA/ICcjMDAwMDAwJyA6ICcjRkZGRkZGJztcbiAgICAgICAgY29uc3QgcGF0aDEgPSBgTSAyMiw5IEMgMTkuNzksOSAxOCwxMC43OSAxOCwxMyBDIDE4LDEzLjg5IDE4LjI5LDE0LjcxXG4gICAgMTguNzgsMTUuMzggQyAxNi44MywxNi41IDE1LjUsMTguNTkgMTUuNSwyMSBDIDE1LjUsMjMuMDMgMTYuNDQsMjQuODRcbiAgICAxNy45MSwyNi4wMyBDIDE0LjkxLDI3LjA5IDEwLjUsMzEuNTggMTAuNSwzOS41IEwgMzMuNSwzOS41IEMgMzMuNSwzMS41OFxuICAgIDI5LjA5LDI3LjA5IDI2LjA5LDI2LjAzIEMgMjcuNTYsMjQuODQgMjguNSwyMy4wMyAyOC41LDIxIEMgMjguNSwxOC41OVxuICAgIDI3LjE3LDE2LjUgMjUuMjIsMTUuMzggQyAyNS43MSwxNC43MSAyNiwxMy44OSAyNiwxMyBDIDI2LDEwLjc5IDI0LjIxLDkgMjIsOSB6YDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IHRyYW5zZm9ybTogXCJzY2FsZSguMDIyMjIyLC4wMjIyMjIpXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDEsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlOiAnbm9uemVybycsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgfSB9KSkpO1xuICAgIH1cbn1cblBhd24ucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbmV4cG9ydCBkZWZhdWx0IFBhd247XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuY2xhc3MgUXVlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeUNvbG9yID0gdGhpcy5wcm9wcy5jb2xvciA9PT0gJ2InID8gJyMwMDAwMDAnIDogJyNGRkZGRkYnO1xuICAgICAgICBjb25zdCBzZWNvbmRhcnlDb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPT09ICdiJyA/ICcjRkZGRkZGJyA6ICcjMDAwMDAwJztcbiAgICAgICAgY29uc3QgcGF0aDEgPSBgTSA5LDI2IEMgMTcuNSwyNC41IDMwLDI0LjUgMzYsMjYgTCAzOCwxNCBMIDMxLDI1IEwgMzEsMTEgTFxuICAgIDI1LjUsMjQuNSBMIDIyLjUsOS41IEwgMTkuNSwyNC41IEwgMTQsMTAuNSBMIDE0LDI1IEwgNywxNCBMIDksMjYgemA7XG4gICAgICAgIGNvbnN0IHBhdGgyID0gYE0gOSwyNiBDIDksMjggMTAuNSwyOCAxMS41LDMwIEMgMTIuNSwzMS41IDEyLjUsMzEgMTIsMzMuNSBDIDEwLjUsMzQuNVxuICAgIDEwLjUsMzYgMTAuNSwzNiBDIDksMzcuNSAxMSwzOC41IDExLDM4LjUgQyAxNy41LDM5LjUgMjcuNSwzOS41IDM0LDM4LjUgQyAzNCwzOC41XG4gICAgMzUuNSwzNy41IDM0LDM2IEMgMzQsMzYgMzQuNSwzNC41IDMzLDMzLjUgQyAzMi41LDMxIDMyLjUsMzEuNSAzMy41LDMwIEMgMzQuNSwyOFxuICAgIDM2LDI4IDM2LDI2IEMgMjcuNSwyNC41IDE3LjUsMjQuNSA5LDI2IHpgO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgdHJhbnNmb3JtOiBcInNjYWxlKC4wMjIyMjIsLjAyMjIyMilcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBwcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZTogJ2V2ZW5vZGQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSA5IDEzIEEgMiAyIDAgMSAxICA1LDEzIEEgMiAyIDAgMSAxICA5IDEzIHpcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMSwtMSlcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSA5IDEzIEEgMiAyIDAgMSAxICA1LDEzIEEgMiAyIDAgMSAxICA5IDEzIHpcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxNS41LC01LjUpXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gOSAxMyBBIDIgMiAwIDEgMSAgNSwxMyBBIDIgMiAwIDEgMSAgOSAxMyB6XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMzIsLTEpXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gOSAxMyBBIDIgMiAwIDEgMSAgNSwxMyBBIDIgMiAwIDEgMSAgOSAxMyB6XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNywtNC41KVwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDkgMTMgQSAyIDIgMCAxIDEgIDUsMTMgQSAyIDIgMCAxIDEgIDkgMTMgelwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDI0LC00KVwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDEsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDIsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDExLjUsMzAgQyAxNSwyOSAzMCwyOSAzMy41LDMwXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHNlY29uZGFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDEyLDMzLjUgQyAxOCwzMi41IDI3LDMyLjUgMzMsMzMuNVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzZWNvbmRhcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgfSB9KSkpKTtcbiAgICB9XG59XG5RdWVlbi5wcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuZXhwb3J0IGRlZmF1bHQgUXVlZW47XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuY2xhc3MgUm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xvciA9PT0gJ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgdHJhbnNmb3JtOiBcInNjYWxlKC4wMjIyMjIsLjAyMjIyMilcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlOiAnZXZlbm9kZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDksMzkgTCAzNiwzOSBMIDM2LDM2IEwgOSwzNiBMIDksMzkgeiBcIiwgc3R5bGU6IHsgc3Ryb2tlTGluZWNhcDogJ2J1dHQnIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDEyLjUsMzIgTCAxNCwyOS41IEwgMzEsMjkuNSBMIDMyLjUsMzIgTCAxMi41LDMyIHogXCIsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxMiwzNiBMIDEyLDMyIEwgMzMsMzIgTCAzMywzNiBMIDEyLDM2IHogXCIsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxNCwyOS41IEwgMTQsMTYuNSBMIDMxLDE2LjUgTCAzMSwyOS41IEwgMTQsMjkuNSB6IFwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDE0LDE2LjUgTCAxMSwxNCBMIDM0LDE0IEwgMzEsMTYuNSBMIDE0LDE2LjUgeiBcIiwgc3R5bGU6IHsgc3Ryb2tlTGluZWNhcDogJ2J1dHQnIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDExLDE0IEwgMTEsOSBMIDE1LDkgTCAxNSwxMSBMIDIwLDExIEwgMjAsOSBMIDI1LDkgTCAyNSwxMSBMIDMwLDExIEwgMzAsOSBMIDM0LDkgTCAzNCwxNCBMIDExLDE0IHogXCIsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxMiwzNS41IEwgMzMsMzUuNSBMIDMzLDM1LjVcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxMywzMS41IEwgMzIsMzEuNVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDE0LDI5LjUgTCAzMSwyOS41XCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiAnbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMTQsMTYuNSBMIDMxLDE2LjVcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAxMSwxNCBMIDM0LDE0XCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiAnbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyB0cmFuc2Zvcm06IFwic2NhbGUoLjAyMjIyMiwuMDIyMjIyKVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU6ICdldmVub2RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gOSwzOSBMIDM2LDM5IEwgMzYsMzYgTCA5LDM2IEwgOSwzOSB6IFwiLCBzdHlsZTogeyBzdHJva2VMaW5lY2FwOiAnYnV0dCcgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMTIsMzYgTCAxMiwzMiBMIDMzLDMyIEwgMzMsMzYgTCAxMiwzNiB6IFwiLCBzdHlsZTogeyBzdHJva2VMaW5lY2FwOiAnYnV0dCcgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0gMTEsMTQgTCAxMSw5IEwgMTUsOSBMIDE1LDExIEwgMjAsMTEgTCAyMCw5IEwgMjUsOSBMIDI1LDExIEwgMzAsMTEgTCAzMCw5IEwgMzQsOSBMIDM0LDE0XCIsIHN0eWxlOiB7IHN0cm9rZUxpbmVjYXA6ICdidXR0JyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAzNCwxNCBMIDMxLDE3IEwgMTQsMTcgTCAxMSwxNFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAzMSwxNyBMIDMxLDI5LjUgTCAxNCwyOS41IEwgMTQsMTdcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTSAzMSwyOS41IEwgMzIuNSwzMiBMIDEyLjUsMzIgTCAxNCwyOS41XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNIDExLDE0IEwgMzQsMTRcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuUm9vay5wcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuZXhwb3J0IGRlZmF1bHQgUm9vaztcbiIsImltcG9ydCBNb3ZlU291bmQgZnJvbSAnLi9tZWRpYS9tb3ZlLm1wMyc7XG5sZXQgc291bmQ7XG5leHBvcnQgY29uc3QgcGxheVNvdW5kID0gKCkgPT4ge1xuICAgIGlmICghc291bmQpIHtcbiAgICAgICAgc291bmQgPSBuZXcgQXVkaW8oTW92ZVNvdW5kKTtcbiAgICB9XG4gICAgc291bmQucGxheSgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=