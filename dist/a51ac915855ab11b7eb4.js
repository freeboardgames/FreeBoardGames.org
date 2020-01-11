(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/games/reversi/Board.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/games/reversi/Board.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._20PIlBsDQ5s9n2E_jgngot {\n  transition: fill 0.5s;\n  animation: _1ohriwsn1zR5654nOpWv0H 0.5s;\n}\n\n@keyframes _1ohriwsn1zR5654nOpWv0H {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n", ""]);
// Exports
exports.locals = {
	"Piece": "_20PIlBsDQ5s9n2E_jgngot",
	"fadeIn": "_1ohriwsn1zR5654nOpWv0H"
};

/***/ }),

/***/ "./src/games/reversi/Board.css":
/*!*************************************!*\
  !*** ./src/games/reversi/Board.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/reversi/Board.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/reversi/Board.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/reversi/Board.css");

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

/***/ "./src/games/reversi/board.tsx":
/*!*************************************!*\
  !*** ./src/games/reversi/board.tsx ***!
  \*************************************/
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/games/reversi/game.ts");
/* harmony import */ var _common_Scoreboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Scoreboard */ "./src/common/Scoreboard.tsx");
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _common_ScoreBadges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ScoreBadges */ "./src/common/ScoreBadges.tsx");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Board.css */ "./src/games/reversi/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "./node_modules/@material-ui/core/colors/yellow.js");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ "./node_modules/@material-ui/core/colors/lightGreen.js");
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
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

















var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    _this._onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Board, [{
    key: "onClick",
    value: function onClick(coords) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_14__["isAIGame"])(this.props.gameArgs) && this.props.ctx.currentPlayer === '1')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return this.props.moves.placePiece(coords.x, coords.y);

              case 4:
                if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_14__["isAIGame"])(this.props.gameArgs) && this.props.ctx.currentPlayer === '1') {
                  setTimeout(function () {
                    return _this2.props.step();
                  }, 1000);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      var _this3 = this;

      var scoreboard = this.props.ctx.gameover.scoreboard;

      if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
        return 'draw';
      } else {
        if (scoreboard[0].score === scoreboard.find(function (rank) {
          return rank.playerID === _this3.props.playerID;
        }).score) {
          return 'you won';
        } else {
          return 'you lost';
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
    key: "isLocalGame",
    value: function isLocalGame() {
      return this.props.gameArgs && this.props.gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_5__["GameMode"].LocalFriend;
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      if (!this.props.gameArgs) {
        return;
      }

      var message = '';

      if (this.isLocalGame()) {
        var player;

        switch (this.props.ctx.currentPlayer) {
          case '0':
            {
              player = 'Red';
              break;
            }

          case '1':
            {
              player = 'Green';
              break;
            }
        }

        message = "".concat(player, "'s turn");
      } else if (this.props.ctx.currentPlayer === this.props.playerID && !this.isLocalGame()) {
        message = 'Place piece';
      } else if (this.props.ctx.currentPlayer !== this.props.playerID && !this.isLocalGame()) {
        message = 'Waiting for opponent...';
      }

      return message;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          extraCardContent: this._getScoreBoard(),
          gameArgs: this.props.gameArgs
        });
      }

      var colors = this.props.ctx.numPlayers !== 2 ? [_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[500], _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_9___default.a[500], _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10___default.a[500], _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11___default.a[500]] : [_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[500], _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10___default.a[500], _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_9___default.a[500], _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11___default.a[500]];
      var colorMap = this.getColorMap();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        rows: 8,
        cols: 8,
        onClick: this._onClick,
        colorMap: colorMap
      }, this.props.G.points.map(function (point, i) {
        return {
          player: point,
          position: i
        };
      }).filter(function (point) {
        return point.player !== null;
      }).map(function (point) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_freeboardgame_org_boardgame_io_ui__WEBPACK_IMPORTED_MODULE_2__["Token"], {
          animate: false,
          key: point.position,
          x: point.position % 8,
          y: Math.floor(point.position / 8)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
          width: "0.8",
          height: "0.8",
          x: "0.1",
          y: "0.1",
          style: {
            fill: colors[point.player]
          },
          className: _Board_css__WEBPACK_IMPORTED_MODULE_7___default.a.Piece
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ScoreBadges__WEBPACK_IMPORTED_MODULE_6__["ScoreBadges"], {
        scoreboard: Object(_game__WEBPACK_IMPORTED_MODULE_3__["getScoreBoard"])(this.props.G, this.props.ctx),
        playerID: this.props.playerID,
        players: this.props.gameArgs.players,
        colors: colors
      }));
    }
  }, {
    key: "getColorMap",
    value: function getColorMap() {
      var colorMap = {};

      for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
          var key = "".concat(x, ",").concat(y);
          var color = _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_12___default.a[800];

          if ((x + y) % 2 === 0) {
            color = _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_12___default.a[900];
          }

          colorMap[key] = color;
        }
      }

      return colorMap;
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/games/reversi/config.ts":
/*!*************************************!*\
  !*** ./src/games/reversi/config.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/reversi/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/reversi/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["ReversiGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvcmV2ZXJzaS9Cb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3JldmVyc2kvQm9hcmQuY3NzPzQ4MmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3JldmVyc2kvYm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9yZXZlcnNpL2NvbmZpZy50cyJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiQm9hcmQiLCJhcmd1bWVudHMiLCJfb25DbGljayIsIm9uQ2xpY2siLCJiaW5kIiwiY29vcmRzIiwiaXNBSUdhbWUiLCJwcm9wcyIsImdhbWVBcmdzIiwiY3R4IiwiY3VycmVudFBsYXllciIsIm1vdmVzIiwicGxhY2VQaWVjZSIsIngiLCJ5Iiwic2V0VGltZW91dCIsInNjb3JlYm9hcmQiLCJnYW1lb3ZlciIsInNjb3JlIiwibGVuZ3RoIiwiZmluZCIsInJhbmsiLCJwbGF5ZXJJRCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlNjb3JlYm9hcmQiLCJwbGF5ZXJzIiwibW9kZSIsIkdhbWVNb2RlIiwiTG9jYWxGcmllbmQiLCJtZXNzYWdlIiwiaXNMb2NhbEdhbWUiLCJwbGF5ZXIiLCJHYW1lTGF5b3V0IiwiZ2FtZU92ZXIiLCJfZ2V0R2FtZU92ZXIiLCJleHRyYUNhcmRDb250ZW50IiwiX2dldFNjb3JlQm9hcmQiLCJjb2xvcnMiLCJudW1QbGF5ZXJzIiwicmVkIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwiY29sb3JNYXAiLCJnZXRDb2xvck1hcCIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsIl9nZXRTdGF0dXMiLCJHcmlkIiwicm93cyIsImNvbHMiLCJHIiwicG9pbnRzIiwibWFwIiwicG9pbnQiLCJpIiwicG9zaXRpb24iLCJmaWx0ZXIiLCJUb2tlbiIsImFuaW1hdGUiLCJrZXkiLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJjbGFzc05hbWUiLCJjc3MiLCJQaWVjZSIsIlNjb3JlQmFkZ2VzIiwiZ2V0U2NvcmVCb2FyZCIsImdyZXkiLCJDb21wb25lbnQiLCJjb25maWciLCJiZ2lvR2FtZSIsIlJldmVyc2lHYW1lIiwiYmdpb0JvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLDBCQUEwQiw0Q0FBNEMsR0FBRyx3Q0FBd0MsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLGlCQUFpQixLQUFLLEdBQUc7QUFDdE87QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsaUpBQXNFOztBQUU1Riw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsaUpBQXNFO0FBQ3pGLG1CQUFtQixtQkFBTyxDQUFDLGlKQUFzRTs7QUFFakcsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0EsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FB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QXhCLEVBQTRCO0FBQ3hCLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixjQUFNbUQsR0FBRyxhQUFNcEQsQ0FBTixjQUFXQyxDQUFYLENBQVQ7QUFDQSxjQUFJb0MsS0FBSyxHQUFHMEIscUVBQUksQ0FBQyxHQUFELENBQWhCOztBQUNBLGNBQUksQ0FBQy9ELENBQUMsR0FBR0MsQ0FBTCxJQUFVLENBQVYsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJvQyxpQkFBSyxHQUFHMEIscUVBQUksQ0FBQyxHQUFELENBQVo7QUFDSDs7QUFDRGhDLGtCQUFRLENBQUNxQixHQUFELENBQVIsR0FBZ0JmLEtBQWhCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPTixRQUFQO0FBQ0g7QUE3Rkw7O0FBQUE7QUFBQSxFQUEyQnJCLDRDQUFLLENBQUNzRCxTQUFqQyxFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU1DLE1BQU0sR0FBRztBQUNYQyxVQUFRLEVBQUVDLGlEQURDO0FBRVhDLFdBQVMsRUFBRWpGLDRDQUFLQTtBQUZMLENBQWY7QUFJZThFLHFFQUFmLEUiLCJmaWxlIjoiYTUxYWM5MTU4NTVhYjExYjdlYjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5fMjBQSWxCc0RRNXM5bjJFX2pnbmdvdCB7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuNXM7XFxuICBhbmltYXRpb246IF8xb2hyaXdzbjF6UjU2NTRuT3BXdjBIIDAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgXzFvaHJpd3NuMXpSNTY1NG5PcFd2MEgge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJQaWVjZVwiOiBcIl8yMFBJbEJzRFE1czluMkVfamduZ290XCIsXG5cdFwiZmFkZUluXCI6IFwiXzFvaHJpd3NuMXpSNTY1NG5PcFd2MEhcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vQm9hcmQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Cb2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9Cb2FyZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZUxheW91dCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby91aSc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vdWknO1xuaW1wb3J0IHsgZ2V0U2NvcmVCb2FyZCB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBTY29yZWJvYXJkIH0gZnJvbSAnLi4vLi4vY29tbW9uL1Njb3JlYm9hcmQnO1xuaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTW9kZVBpY2tlcic7XG5pbXBvcnQgeyBTY29yZUJhZGdlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9TY29yZUJhZGdlcyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vQm9hcmQuY3NzJztcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XG5pbXBvcnQgeWVsbG93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy95ZWxsb3cnO1xuaW1wb3J0IGdyZWVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9saWdodEdyZWVuJztcbmltcG9ydCBibHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmV5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmV5JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgaXNBSUdhbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZ2FtZU1vZGUnO1xuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fb25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBvbkNsaWNrKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpICYmIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHRoaXMucHJvcHMubW92ZXMucGxhY2VQaWVjZShjb29yZHMueCwgY29vcmRzLnkpO1xuICAgICAgICAgICAgaWYgKGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpICYmIHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5zdGVwKCksIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldEdhbWVPdmVyKCkge1xuICAgICAgICBjb25zdCBzY29yZWJvYXJkID0gdGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIuc2NvcmVib2FyZDtcbiAgICAgICAgaWYgKHNjb3JlYm9hcmRbMF0uc2NvcmUgPT09IHNjb3JlYm9hcmRbc2NvcmVib2FyZC5sZW5ndGggLSAxXS5zY29yZSkge1xuICAgICAgICAgICAgcmV0dXJuICdkcmF3JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzY29yZWJvYXJkWzBdLnNjb3JlID09PSBzY29yZWJvYXJkLmZpbmQocmFuayA9PiByYW5rLnBsYXllcklEID09PSB0aGlzLnByb3BzLnBsYXllcklEKS5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAneW91IHdvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSBsb3N0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U2NvcmVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNjb3JlYm9hcmQsIHsgc2NvcmVib2FyZDogdGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIuc2NvcmVib2FyZCwgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsIHBsYXllcnM6IHRoaXMucHJvcHMuZ2FtZUFyZ3MucGxheWVycyB9KSk7XG4gICAgfVxuICAgIGlzTG9jYWxHYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5nYW1lQXJncyAmJiB0aGlzLnByb3BzLmdhbWVBcmdzLm1vZGUgPT09IEdhbWVNb2RlLkxvY2FsRnJpZW5kO1xuICAgIH1cbiAgICBfZ2V0U3RhdHVzKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZ2FtZUFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAodGhpcy5pc0xvY2FsR2FtZSgpKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyID0gJ1JlZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICcxJzoge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIgPSAnR3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0gYCR7cGxheWVyfSdzIHR1cm5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucHJvcHMucGxheWVySUQgJiYgIXRoaXMuaXNMb2NhbEdhbWUoKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdQbGFjZSBwaWVjZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllciAhPT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCAmJiAhdGhpcy5pc0xvY2FsR2FtZSgpKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gJ1dhaXRpbmcgZm9yIG9wcG9uZW50Li4uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lTGF5b3V0LCB7IGdhbWVPdmVyOiB0aGlzLl9nZXRHYW1lT3ZlcigpLCBleHRyYUNhcmRDb250ZW50OiB0aGlzLl9nZXRTY29yZUJvYXJkKCksIGdhbWVBcmdzOiB0aGlzLnByb3BzLmdhbWVBcmdzIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvcnMgPSB0aGlzLnByb3BzLmN0eC5udW1QbGF5ZXJzICE9PSAyXG4gICAgICAgICAgICA/IFtyZWRbNTAwXSwgeWVsbG93WzUwMF0sIGdyZWVuWzUwMF0sIGJsdWVbNTAwXV1cbiAgICAgICAgICAgIDogW3JlZFs1MDBdLCBncmVlbls1MDBdLCB5ZWxsb3dbNTAwXSwgYmx1ZVs1MDBdXTtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSB0aGlzLmdldENvbG9yTWFwKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lTGF5b3V0LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiwgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH0gfSwgdGhpcy5fZ2V0U3RhdHVzKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IHJvd3M6IDgsIGNvbHM6IDgsIG9uQ2xpY2s6IHRoaXMuX29uQ2xpY2ssIGNvbG9yTWFwOiBjb2xvck1hcCB9LCB0aGlzLnByb3BzLkcucG9pbnRzXG4gICAgICAgICAgICAgICAgLm1hcCgocG9pbnQsIGkpID0+ICh7IHBsYXllcjogcG9pbnQsIHBvc2l0aW9uOiBpIH0pKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIocG9pbnQgPT4gcG9pbnQucGxheWVyICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIC5tYXAocG9pbnQgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9rZW4sIHsgYW5pbWF0ZTogZmFsc2UsIGtleTogcG9pbnQucG9zaXRpb24sIHg6IHBvaW50LnBvc2l0aW9uICUgOCwgeTogTWF0aC5mbG9vcihwb2ludC5wb3NpdGlvbiAvIDgpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB3aWR0aDogXCIwLjhcIiwgaGVpZ2h0OiBcIjAuOFwiLCB4OiBcIjAuMVwiLCB5OiBcIjAuMVwiLCBzdHlsZTogeyBmaWxsOiBjb2xvcnNbcG9pbnQucGxheWVyXSB9LCBjbGFzc05hbWU6IGNzcy5QaWVjZSB9KSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNjb3JlQmFkZ2VzLCB7IHNjb3JlYm9hcmQ6IGdldFNjb3JlQm9hcmQodGhpcy5wcm9wcy5HLCB0aGlzLnByb3BzLmN0eCksIHBsYXllcklEOiB0aGlzLnByb3BzLnBsYXllcklELCBwbGF5ZXJzOiB0aGlzLnByb3BzLmdhbWVBcmdzLnBsYXllcnMsIGNvbG9yczogY29sb3JzIH0pKSk7XG4gICAgfVxuICAgIGdldENvbG9yTWFwKCkge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHt9O1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA4OyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHt4fSwke3l9YDtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBncmV5WzgwMF07XG4gICAgICAgICAgICAgICAgaWYgKCh4ICsgeSkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gZ3JleVs5MDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2xvck1hcFtrZXldID0gY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yTWFwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJldmVyc2lHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5jb25zdCBjb25maWcgPSB7XG4gICAgYmdpb0dhbWU6IFJldmVyc2lHYW1lLFxuICAgIGJnaW9Cb2FyZDogQm9hcmQsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==