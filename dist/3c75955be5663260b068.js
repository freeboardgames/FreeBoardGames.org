(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ "./src/games/checkers/board.tsx":
/*!**************************************!*\
  !*** ./src/games/checkers/board.tsx ***!
  \**************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/games/checkers/game.ts");
/* harmony import */ var _common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Checkerboard */ "./src/common/Checkerboard.tsx");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/ui */ "./node_modules/@freeboardgame.org/boardgame.io/ui.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};











function roundCoords(coords) {
  return {
    x: Math.round(coords.x),
    y: Math.round(coords.y)
  };
}

var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    _this.state = {
      selected: null,
      validMoves: Object(_game__WEBPACK_IMPORTED_MODULE_2__["getValidMoves"])(_this.props.G, _this.props.ctx.currentPlayer)
    };

    _this._isSelectable = function (coords) {
      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isOnlineGame"])(_this.props.gameArgs) && _this.props.playerID !== _this.props.ctx.currentPlayer) {
        return false;
      }

      return _this.state.validMoves.some(function (move) {
        return Object(_game__WEBPACK_IMPORTED_MODULE_2__["areCoordsEqual"])(move.from, coords);
      });
    };

    _this._onClick = function (coords) {
      var position = Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["algebraicToCartesian"])(coords.square);

      if (_this.state.selected === null && _this._isSelectable(position)) {
        _this.setState(Object.assign({}, _this.state, {
          selected: position
        }));
      } else {
        _this._move(position);
      }
    };

    _this._shouldDrag = function (coords) {
      return _this._isSelectable(Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["applyInvertion"])(coords, _this.isInverted()));
    };

    _this._onDrag = function (coords) {
      var x = coords.x;
      var y = coords.y;
      var originalX = coords.originalX;
      var originalY = coords.originalY;

      if (Math.sqrt(Math.pow(x - originalX, 2) + Math.pow(y - originalY, 2)) > 0.2) {
        _this.setState(Object.assign({}, _this.state, {
          selected: Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["applyInvertion"])({
            x: originalX,
            y: originalY
          }, _this.isInverted())
        }));
      } else {
        _this.setState(Object.assign({}, _this.state, {
          selected: null
        }));
      }
    };

    _this.stepAI = function () {
      setTimeout(function () {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.props.step();

                case 2:
                  if (this.props.ctx.currentPlayer === '1') {
                    this.stepAI();
                  }

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }, 1000);
    };

    _this._onDrop = function (coords) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.state.selected) {
                  this._move(Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["applyInvertion"])(roundCoords(coords), this.isInverted()));
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    };

    _this._move = function (coords) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.state.selected === null || coords === null)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.props.moves.move(this.state.selected, coords);

              case 4:
                this.setState(Object.assign({}, this.state, {
                  selected: null
                }));

                if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isAIGame"])(this.props.gameArgs) && this.props.ctx.currentPlayer === '1') {
                  this.stepAI();
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    };

    _this.getPieces = function () {
      return _this.props.G.board.map(function (piece, index) {
        return {
          data: piece,
          index: index
        };
      }).filter(function (piece) {
        return piece.data !== null;
      }).map(function (piece) {
        var _toCoord = Object(_game__WEBPACK_IMPORTED_MODULE_2__["toCoord"])(piece.index),
            x = _toCoord.x,
            y = _toCoord.y;

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_4__["Token"], {
          x: x,
          y: y,
          draggable: true,
          shouldDrag: _this._shouldDrag,
          onDrop: _this._onDrop,
          onDrag: _this._onDrag,
          animate: true,
          key: piece.data.id
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
          r: "0.4",
          fill: piece.data.playerID === '0' ? _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default.a[50] : _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default.a[900],
          cx: "0.5",
          cy: "0.5"
        }), piece.data.isKing ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
          r: "0.2",
          cx: "0.5",
          cy: "0.5",
          fill: piece.data.playerID === '1' ? _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default.a[800] : _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default.a[400]
        }) : null));
      });
    };

    return _this;
  }

  _createClass(Board, [{
    key: "isInverted",
    value: function isInverted() {
      return Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isOnlineGame"])(this.props.gameArgs) && this.props.playerID === '1';
    }
  }, {
    key: "_getHighlightedSquares",
    value: function _getHighlightedSquares() {
      var _this2 = this;

      var result = {};

      if (this.state.selected !== null) {
        result[Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["cartesianToAlgebraic"])(this.state.selected.x, this.state.selected.y, false)] = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_7___default.a[700];
        this.state.validMoves.filter(function (move) {
          return Object(_game__WEBPACK_IMPORTED_MODULE_2__["areCoordsEqual"])(_this2.state.selected, move.from);
        }).forEach(function (move) {
          result[Object(_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["cartesianToAlgebraic"])(move.to.x, move.to.y, false)] = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_7___default.a[500];
        });
      }

      return result;
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isOnlineGame"])(this.props.gameArgs)) {
        if (this.props.ctx.currentPlayer === this.props.playerID) {
          return 'Move piece';
        } else {
          return 'Waiting for opponent...';
        }
      } else {
        switch (this.props.ctx.currentPlayer) {
          case '0':
            return "White's turn";

          case '1':
            return "Black's turn";
        }
      }
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      var winner = this.props.ctx.gameover.winner;

      if (winner) {
        if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isLocalGame"])(this.props.gameArgs)) {
          if (winner === '0') {
            return 'white won';
          } else {
            return 'black won';
          }
        } else {
          if (winner === this.props.playerID) {
            return 'you won';
          } else {
            return 'you lost';
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.ctx.turn !== this.props.ctx.turn) {
        this.setState(Object.assign({}, this.state, {
          validMoves: this.props.G.jumping === null ? Object(_game__WEBPACK_IMPORTED_MODULE_2__["getValidMoves"])(this.props.G, this.props.ctx.currentPlayer) : Object(_game__WEBPACK_IMPORTED_MODULE_2__["getValidMoves"])(this.props.G, this.props.ctx.currentPlayer, this.props.G.jumping)
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          gameArgs: this.props.gameArgs
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Checkerboard__WEBPACK_IMPORTED_MODULE_3__["Checkerboard"], {
        onClick: this._onClick,
        invert: this.isInverted(),
        highlightedSquares: this._getHighlightedSquares()
      }, this.getPieces()));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/games/checkers/config.ts":
/*!**************************************!*\
  !*** ./src/games/checkers/config.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/checkers/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/checkers/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["CheckersGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlY2tlcnMvYm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVja2Vycy9jb25maWcudHMiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsInJvdW5kQ29vcmRzIiwiY29vcmRzIiwieCIsIk1hdGgiLCJyb3VuZCIsInkiLCJCb2FyZCIsImFyZ3VtZW50cyIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWxpZE1vdmVzIiwiZ2V0VmFsaWRNb3ZlcyIsInByb3BzIiwiRyIsImN0eCIsImN1cnJlbnRQbGF5ZXIiLCJfaXNTZWxlY3RhYmxlIiwiaXNPbmxpbmVHYW1lIiwiZ2FtZUFyZ3MiLCJwbGF5ZXJJRCIsInNvbWUiLCJtb3ZlIiwiYXJlQ29vcmRzRXF1YWwiLCJmcm9tIiwiX29uQ2xpY2siLCJwb3NpdGlvbiIsImFsZ2VicmFpY1RvQ2FydGVzaWFuIiwic3F1YXJlIiwic2V0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJfbW92ZSIsIl9zaG91bGREcmFnIiwiYXBwbHlJbnZlcnRpb24iLCJpc0ludmVydGVkIiwiX29uRHJhZyIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsInNxcnQiLCJwb3ciLCJzdGVwQUkiLCJzZXRUaW1lb3V0IiwiX29uRHJvcCIsIm1vdmVzIiwiaXNBSUdhbWUiLCJnZXRQaWVjZXMiLCJib2FyZCIsIm1hcCIsInBpZWNlIiwiaW5kZXgiLCJkYXRhIiwiZmlsdGVyIiwidG9Db29yZCIsIlJlYWN0IiwiVG9rZW4iLCJkcmFnZ2FibGUiLCJzaG91bGREcmFnIiwib25Ecm9wIiwib25EcmFnIiwiYW5pbWF0ZSIsImtleSIsImlkIiwiciIsImZpbGwiLCJncmV5IiwiY3giLCJjeSIsImlzS2luZyIsImNhcnRlc2lhblRvQWxnZWJyYWljIiwiYmx1ZSIsImZvckVhY2giLCJ0byIsIndpbm5lciIsImdhbWVvdmVyIiwiaXNMb2NhbEdhbWUiLCJwcmV2UHJvcHMiLCJ0dXJuIiwianVtcGluZyIsIkdhbWVMYXlvdXQiLCJnYW1lT3ZlciIsIl9nZXRHYW1lT3ZlciIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsIl9nZXRTdGF0dXMiLCJDaGVja2VyYm9hcmQiLCJvbkNsaWNrIiwiaW52ZXJ0IiwiaGlnaGxpZ2h0ZWRTcXVhcmVzIiwiX2dldEhpZ2hsaWdodGVkU3F1YXJlcyIsImNvbmZpZyIsImJnaW9HYW1lIiwiQ2hlY2tlcnNHYW1lIiwiYmdpb0JvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixTQUFPLEtBQUtELENBQUMsS0FBS0EsQ0FBQyxHQUFHRSxPQUFULENBQU4sRUFBeUIsVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkQsYUFBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUVDLFlBQUksQ0FBQ04sU0FBUyxDQUFDTyxJQUFWLENBQWVGLEtBQWYsQ0FBRCxDQUFKO0FBQThCLE9BQXBDLENBQXFDLE9BQU9HLENBQVAsRUFBVTtBQUFFTCxjQUFNLENBQUNLLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFQyxZQUFJLENBQUNOLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FB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SDs7QUFDRCxhQUFRbUMsbURBQUEsQ0FBb0J5QiwrREFBcEIsRUFBZ0MsSUFBaEMsRUFDSnpCLG1EQUFBLENBQW9CNEIsb0VBQXBCLEVBQWdDO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxlQUFLLEVBQUUsT0FBOUI7QUFBdUNDLHNCQUFZLEVBQUU7QUFBckQ7QUFBeEIsT0FBaEMsRUFBeUgsS0FBS0MsVUFBTCxFQUF6SCxDQURJLEVBRUpsQyxtREFBQSxDQUFvQm1DLGlFQUFwQixFQUFrQztBQUFFQyxlQUFPLEVBQUUsS0FBS2pFLFFBQWhCO0FBQTBCa0UsY0FBTSxFQUFFLEtBQUt4RCxVQUFMLEVBQWxDO0FBQXFEeUQsMEJBQWtCLEVBQUUsS0FBS0Msc0JBQUw7QUFBekUsT0FBbEMsRUFBNEksS0FBSy9DLFNBQUwsRUFBNUksQ0FGSSxDQUFSO0FBR0g7QUE3SUw7O0FBQUE7QUFBQSxFQUEyQlEsK0NBQTNCLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTXdDLE1BQU0sR0FBRztBQUNYQyxVQUFRLEVBQUVDLGtEQURDO0FBRVhDLFdBQVMsRUFBRTFGLDRDQUFLQTtBQUZMLENBQWY7QUFJZXVGLHFFQUFmLEUiLCJmaWxlIjoiM2M3NTk1NWJlNTY2MzI2MGIwNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTGF5b3V0JztcbmltcG9ydCB7IHRvQ29vcmQsIGdldFZhbGlkTW92ZXMsIGFyZUNvb3Jkc0VxdWFsIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IENoZWNrZXJib2FyZCwgYXBwbHlJbnZlcnRpb24sIGFsZ2VicmFpY1RvQ2FydGVzaWFuLCBjYXJ0ZXNpYW5Ub0FsZ2VicmFpYywgfSBmcm9tICcuLi8uLi9jb21tb24vQ2hlY2tlcmJvYXJkJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby91aSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBncmV5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmV5JztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcbmltcG9ydCB7IGlzT25saW5lR2FtZSwgaXNMb2NhbEdhbWUsIGlzQUlHYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2dhbWVNb2RlJztcbmZ1bmN0aW9uIHJvdW5kQ29vcmRzKGNvb3Jkcykge1xuICAgIHJldHVybiB7IHg6IE1hdGgucm91bmQoY29vcmRzLngpLCB5OiBNYXRoLnJvdW5kKGNvb3Jkcy55KSB9O1xufVxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiBudWxsLFxuICAgICAgICAgICAgdmFsaWRNb3ZlczogZ2V0VmFsaWRNb3Zlcyh0aGlzLnByb3BzLkcsIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPbmxpbmVHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpICYmIHRoaXMucHJvcHMucGxheWVySUQgIT09IHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWxpZE1vdmVzLnNvbWUobW92ZSA9PiBhcmVDb29yZHNFcXVhbChtb3ZlLmZyb20sIGNvb3JkcykpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vbkNsaWNrID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhbGdlYnJhaWNUb0NhcnRlc2lhbihjb29yZHMuc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBudWxsICYmIHRoaXMuX2lzU2VsZWN0YWJsZShwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgc2VsZWN0ZWQ6IHBvc2l0aW9uIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdmUocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zaG91bGREcmFnID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0YWJsZShhcHBseUludmVydGlvbihjb29yZHMsIHRoaXMuaXNJbnZlcnRlZCgpKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29uRHJhZyA9IChjb29yZHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjb29yZHMueDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjb29yZHMueTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsWCA9IGNvb3Jkcy5vcmlnaW5hbFg7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFkgPSBjb29yZHMub3JpZ2luYWxZO1xuICAgICAgICAgICAgaWYgKE1hdGguc3FydChNYXRoLnBvdygoeCAtIG9yaWdpbmFsWCksIDIpICsgTWF0aC5wb3coKHkgLSBvcmlnaW5hbFkpLCAyKSkgPiAwLjIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgc2VsZWN0ZWQ6IGFwcGx5SW52ZXJ0aW9uKHsgeDogb3JpZ2luYWxYLCB5OiBvcmlnaW5hbFkgfSwgdGhpcy5pc0ludmVydGVkKCkpIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBzZWxlY3RlZDogbnVsbCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RlcEFJID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5wcm9wcy5zdGVwKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBBSSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCAxMDAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fb25Ecm9wID0gKGNvb3JkcykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlKGFwcGx5SW52ZXJ0aW9uKHJvdW5kQ29vcmRzKGNvb3JkcyksIHRoaXMuaXNJbnZlcnRlZCgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tb3ZlID0gKGNvb3JkcykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IG51bGwgfHwgY29vcmRzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgdGhpcy5wcm9wcy5tb3Zlcy5tb3ZlKHRoaXMuc3RhdGUuc2VsZWN0ZWQsIGNvb3Jkcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgc2VsZWN0ZWQ6IG51bGwgfSkpO1xuICAgICAgICAgICAgaWYgKGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpICYmIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcEFJKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldFBpZWNlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLkcuYm9hcmRcbiAgICAgICAgICAgICAgICAubWFwKChwaWVjZSwgaW5kZXgpID0+ICh7IGRhdGE6IHBpZWNlLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHBpZWNlID0+IHBpZWNlLmRhdGEgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgLm1hcChwaWVjZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0b0Nvb3JkKHBpZWNlLmluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9rZW4sIHsgeDogeCwgeTogeSwgZHJhZ2dhYmxlOiB0cnVlLCBzaG91bGREcmFnOiB0aGlzLl9zaG91bGREcmFnLCBvbkRyb3A6IHRoaXMuX29uRHJvcCwgb25EcmFnOiB0aGlzLl9vbkRyYWcsIGFuaW1hdGU6IHRydWUsIGtleTogcGllY2UuZGF0YS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IHI6IFwiMC40XCIsIGZpbGw6IHBpZWNlLmRhdGEucGxheWVySUQgPT09ICcwJyA/IGdyZXlbNTBdIDogZ3JleVs5MDBdLCBjeDogXCIwLjVcIiwgY3k6IFwiMC41XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5kYXRhLmlzS2luZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgcjogXCIwLjJcIiwgY3g6IFwiMC41XCIsIGN5OiBcIjAuNVwiLCBmaWxsOiBwaWVjZS5kYXRhLnBsYXllcklEID09PSAnMScgPyBncmV5WzgwMF0gOiBncmV5WzQwMF0gfSkpIDogbnVsbCkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpc0ludmVydGVkKCkge1xuICAgICAgICByZXR1cm4gaXNPbmxpbmVHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpICYmIHRoaXMucHJvcHMucGxheWVySUQgPT09ICcxJztcbiAgICB9XG4gICAgX2dldEhpZ2hsaWdodGVkU3F1YXJlcygpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHRbY2FydGVzaWFuVG9BbGdlYnJhaWModGhpcy5zdGF0ZS5zZWxlY3RlZC54LCB0aGlzLnN0YXRlLnNlbGVjdGVkLnksIGZhbHNlKV0gPSBibHVlWzcwMF07XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZhbGlkTW92ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG1vdmUgPT4gYXJlQ29vcmRzRXF1YWwodGhpcy5zdGF0ZS5zZWxlY3RlZCwgbW92ZS5mcm9tKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChtb3ZlID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHRbY2FydGVzaWFuVG9BbGdlYnJhaWMobW92ZS50by54LCBtb3ZlLnRvLnksIGZhbHNlKV0gPSBibHVlWzUwMF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0U3RhdHVzKCkge1xuICAgICAgICBpZiAoaXNPbmxpbmVHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnTW92ZSBwaWVjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1dhaXRpbmcgZm9yIG9wcG9uZW50Li4uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJXaGl0ZSdzIHR1cm5cIjtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQmxhY2sncyB0dXJuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldEdhbWVPdmVyKCkge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXI7XG4gICAgICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgICAgIGlmIChpc0xvY2FsR2FtZSh0aGlzLnByb3BzLmdhbWVBcmdzKSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5uZXIgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3doaXRlIHdvbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2JsYWNrIHdvbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbm5lciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSB3b24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd5b3UgbG9zdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5jdHgudHVybiAhPT0gdGhpcy5wcm9wcy5jdHgudHVybikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IHZhbGlkTW92ZXM6IHRoaXMucHJvcHMuRy5qdW1waW5nID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZ2V0VmFsaWRNb3Zlcyh0aGlzLnByb3BzLkcsIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0VmFsaWRNb3Zlcyh0aGlzLnByb3BzLkcsIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIsIHRoaXMucHJvcHMuRy5qdW1waW5nKSB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgZ2FtZU92ZXI6IHRoaXMuX2dldEdhbWVPdmVyKCksIGdhbWVBcmdzOiB0aGlzLnByb3BzLmdhbWVBcmdzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lTGF5b3V0LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiwgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH0gfSwgdGhpcy5fZ2V0U3RhdHVzKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2VyYm9hcmQsIHsgb25DbGljazogdGhpcy5fb25DbGljaywgaW52ZXJ0OiB0aGlzLmlzSW52ZXJ0ZWQoKSwgaGlnaGxpZ2h0ZWRTcXVhcmVzOiB0aGlzLl9nZXRIaWdobGlnaHRlZFNxdWFyZXMoKSB9LCB0aGlzLmdldFBpZWNlcygpKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENoZWNrZXJzR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9HYW1lOiBDaGVja2Vyc0dhbWUsXG4gICAgYmdpb0JvYXJkOiBCb2FyZCxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9