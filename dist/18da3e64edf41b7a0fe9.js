(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[17],{

/***/ "./src/games/tictactoe/Shapes.tsx":
/*!****************************************!*\
  !*** ./src/games/tictactoe/Shapes.tsx ***!
  \****************************************/
/*! exports provided: Cross, Circle, Lines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return Cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lines", function() { return Lines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var boldLineStyle = {
  strokeWidth: 0.1
};
var lineStyle = {
  stroke: 'white',
  strokeWidth: 0.025
};
var Cross = function Cross(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    className: "cross",
    key: "cross".concat(props.x, ",").concat(props.y)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
    x1: props.x + 0.25,
    y1: props.y + 0.25,
    x2: props.x + 0.75,
    y2: props.y + 0.75,
    stroke: "red",
    style: boldLineStyle
  }), ",", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
    x1: props.x + 0.75,
    y1: props.y + 0.25,
    x2: props.x + 0.25,
    y2: props.y + 0.75,
    stroke: "red",
    style: boldLineStyle
  }));
};
var Circle = function Circle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    key: "circle".concat(props.x, ",").concat(props.y),
    cx: props.x + 0.5,
    cy: props.y + 0.5,
    r: ".25",
    fill: "none",
    stroke: "lime",
    style: boldLineStyle
  });
};
var Lines = [react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  key: "line1",
  x1: "1",
  y1: "0",
  x2: "1",
  y2: "3",
  style: lineStyle
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  key: "line2",
  x1: "2",
  y1: "0",
  x2: "2",
  y2: "3",
  style: lineStyle
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  key: "line3",
  x1: "0",
  y1: "1",
  x2: "3",
  y2: "1",
  style: lineStyle
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  key: "line4",
  x1: "0",
  y1: "2",
  x2: "3",
  y2: "2",
  style: lineStyle
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  key: "line5",
  x1: "0",
  y1: "1",
  x2: "3",
  y2: "1",
  style: lineStyle
})];

/***/ }),

/***/ "./src/games/tictactoe/board.tsx":
/*!***************************************!*\
  !*** ./src/games/tictactoe/board.tsx ***!
  \***************************************/
/*! exports provided: Board, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _Shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shapes */ "./src/games/tictactoe/Shapes.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
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
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */





var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));

    _this.onClick = function (id) {
      return function () {
        if (_this.isActive(id)) {
          _this.props.moves.clickCell(id);

          if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_4__["isAIGame"])(_this.props.gameArgs)) {
            setTimeout(_this.props.step, 250);
          }
        }
      };
    };

    return _this;
  }

  _createClass(Board, [{
    key: "isActive",
    value: function isActive(id) {
      return this.props.isActive && this.props.G.cells[id] === null;
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_4__["isOnlineGame"])(this.props.gameArgs)) {
        if (this.props.ctx.currentPlayer === this.props.playerID) {
          return 'YOUR TURN';
        } else {
          return 'Waiting for opponent...';
        }
      } else {
        // Local or AI game
        switch (this.props.ctx.currentPlayer) {
          case '0':
            return "Red's turn";

          case '1':
            return "Green's turn";
        }
      }
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_4__["isOnlineGame"])(this.props.gameArgs)) {
        // Online game
        if (this.props.ctx.gameover.winner !== undefined) {
          if (this.props.ctx.gameover.winner === this.props.playerID) {
            return 'you won';
          } else {
            return 'you lost';
          }
        } else {
          return 'draw';
        }
      } else if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_4__["isAIGame"])(this.props.gameArgs)) {
        switch (this.props.ctx.gameover.winner) {
          case '0':
            return 'you won';

          case '1':
            return 'you lost';

          case undefined:
            return 'draw';
        }
      } else {
        // Local game
        switch (this.props.ctx.gameover.winner) {
          case '0':
            return 'red won';

          case '1':
            return 'green won';

          case undefined:
            return 'draw';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          extraCardContent: this._getGameOverBoard(),
          gameArgs: this.props.gameArgs
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, this._getBoard());
    }
  }, {
    key: "_getCells",
    value: function _getCells() {
      var cells = [];

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var id = 3 * i + j;
          cells.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
            key: "".concat(id),
            x: i,
            y: j,
            width: "1",
            height: "1",
            fill: "black",
            onClick: this.onClick(id)
          }));
          var overlay = void 0;

          if (this.props.G.cells[id] === '0') {
            overlay = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Shapes__WEBPACK_IMPORTED_MODULE_2__["Cross"], {
              x: i,
              y: j,
              key: "cross".concat(id)
            });
          } else if (this.props.G.cells[id] === '1') {
            overlay = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Shapes__WEBPACK_IMPORTED_MODULE_2__["Circle"], {
              x: i,
              y: j,
              key: "circle".concat(id)
            });
          }

          if (overlay) {
            cells.push(overlay);
          }
        }
      }

      return cells;
    }
  }, {
    key: "_getBoard",
    value: function _getBoard() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 3 3"
      }, this._getCells(), _Shapes__WEBPACK_IMPORTED_MODULE_2__["Lines"]));
    }
  }, {
    key: "_getGameOverBoard",
    value: function _getGameOverBoard() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
        width: "50%",
        height: "50%",
        viewBox: "0 0 3 3"
      }, this._getCells(), _Shapes__WEBPACK_IMPORTED_MODULE_2__["Lines"]));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/games/tictactoe/config.ts":
/*!***************************************!*\
  !*** ./src/games/tictactoe/config.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/tictactoe/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/tictactoe/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["TictactoeGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/tictactoe/game.ts":
/*!*************************************!*\
  !*** ./src/games/tictactoe/game.ts ***!
  \*************************************/
/*! exports provided: isVictory, TictactoeGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVictory", function() { return isVictory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TictactoeGame", function() { return TictactoeGame; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function isVictory(cells) {
  var positions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var _i = 0, _positions = positions; _i < _positions.length; _i++) {
    var pos = _positions[_i];
    var symbol = cells[pos[0]];
    var winner = symbol;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = pos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        if (cells[i] !== symbol) {
          winner = null;
          break;
        }
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

    if (winner != null) {
      return true;
    }
  }

  return false;
}
var TictactoeGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])({
  name: 'tictactoe',
  setup: function setup() {
    return {
      cells: Array(9).fill(null)
    };
  },
  moves: {
    clickCell: function clickCell(G, ctx, id) {
      var cells = _toConsumableArray(G.cells);

      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
        return Object.assign({}, G, {
          cells: cells
        });
      }
    }
  },
  flow: {
    movesPerTurn: 1,
    endGameIf: function endGameIf(G, ctx) {
      if (isVictory(G.cells)) {
        return {
          winner: ctx.currentPlayer
        };
      }

      if (G.cells.filter(function (c) {
        return c === null;
      }).length === 0) {
        return {
          draw: true
        };
      }
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGljdGFjdG9lL1NoYXBlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3RpY3RhY3RvZS9ib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3RpY3RhY3RvZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3RpY3RhY3RvZS9nYW1lLnRzIl0sIm5hbWVzIjpbImJvbGRMaW5lU3R5bGUiLCJzdHJva2VXaWR0aCIsImxpbmVTdHlsZSIsInN0cm9rZSIsIkNyb3NzIiwicHJvcHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsImtleSIsIngiLCJ5IiwieDEiLCJ5MSIsIngyIiwieTIiLCJzdHlsZSIsIkNpcmNsZSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsIkxpbmVzIiwiQm9hcmQiLCJhcmd1bWVudHMiLCJvbkNsaWNrIiwiaWQiLCJpc0FjdGl2ZSIsIm1vdmVzIiwiY2xpY2tDZWxsIiwiaXNBSUdhbWUiLCJnYW1lQXJncyIsInNldFRpbWVvdXQiLCJzdGVwIiwiRyIsImNlbGxzIiwiaXNPbmxpbmVHYW1lIiwiY3R4IiwiY3VycmVudFBsYXllciIsInBsYXllcklEIiwiZ2FtZW92ZXIiLCJ3aW5uZXIiLCJ1bmRlZmluZWQiLCJHYW1lTGF5b3V0IiwiZ2FtZU92ZXIiLCJfZ2V0R2FtZU92ZXIiLCJleHRyYUNhcmRDb250ZW50IiwiX2dldEdhbWVPdmVyQm9hcmQiLCJfZ2V0Qm9hcmQiLCJpIiwiaiIsInB1c2giLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJsYXkiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsInRleHRBbGlnbiIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiX2dldFN0YXR1cyIsInZpZXdCb3giLCJfZ2V0Q2VsbHMiLCJjb25maWciLCJiZ2lvR2FtZSIsIlRpY3RhY3RvZUdhbWUiLCJiZ2lvQm9hcmQiLCJpc1ZpY3RvcnkiLCJwb3NpdGlvbnMiLCJwb3MiLCJzeW1ib2wiLCJHYW1lIiwibmFtZSIsInNldHVwIiwiQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJmbG93IiwibW92ZXNQZXJUdXJuIiwiZW5kR2FtZUlmIiwiZmlsdGVyIiwiYyIsImxlbmd0aCIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQU1BLGFBQWEsR0FBRztBQUNsQkMsYUFBVyxFQUFFO0FBREssQ0FBdEI7QUFHQSxJQUFNQyxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLE9BRE07QUFFZEYsYUFBVyxFQUFFO0FBRkMsQ0FBbEI7QUFJTyxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsU0FBUUMsbURBQUEsQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRUMsYUFBUyxFQUFFLE9BQWI7QUFBc0JDLE9BQUcsaUJBQVVILEtBQUssQ0FBQ0ksQ0FBaEIsY0FBcUJKLEtBQUssQ0FBQ0ssQ0FBM0I7QUFBekIsR0FBekIsRUFDSkosbURBQUEsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRUssTUFBRSxFQUFFTixLQUFLLENBQUNJLENBQU4sR0FBVSxJQUFoQjtBQUFzQkcsTUFBRSxFQUFFUCxLQUFLLENBQUNLLENBQU4sR0FBVSxJQUFwQztBQUEwQ0csTUFBRSxFQUFFUixLQUFLLENBQUNJLENBQU4sR0FBVSxJQUF4RDtBQUE4REssTUFBRSxFQUFFVCxLQUFLLENBQUNLLENBQU4sR0FBVSxJQUE1RTtBQUFrRlAsVUFBTSxFQUFFLEtBQTFGO0FBQWlHWSxTQUFLLEVBQUVmO0FBQXhHLEdBQTVCLENBREksRUFFSixHQUZJLEVBR0pNLG1EQUFBLENBQW9CLE1BQXBCLEVBQTRCO0FBQUVLLE1BQUUsRUFBRU4sS0FBSyxDQUFDSSxDQUFOLEdBQVUsSUFBaEI7QUFBc0JHLE1BQUUsRUFBRVAsS0FBSyxDQUFDSyxDQUFOLEdBQVUsSUFBcEM7QUFBMENHLE1BQUUsRUFBRVIsS0FBSyxDQUFDSSxDQUFOLEdBQVUsSUFBeEQ7QUFB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UmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgYm9sZExpbmVTdHlsZSA9IHtcbiAgICBzdHJva2VXaWR0aDogMC4xLFxufTtcbmNvbnN0IGxpbmVTdHlsZSA9IHtcbiAgICBzdHJva2U6ICd3aGl0ZScsXG4gICAgc3Ryb2tlV2lkdGg6IDAuMDI1LFxufTtcbmV4cG9ydCBjb25zdCBDcm9zcyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgeyBjbGFzc05hbWU6IFwiY3Jvc3NcIiwga2V5OiBgY3Jvc3Mke3Byb3BzLnh9LCR7cHJvcHMueX1gIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHsgeDE6IHByb3BzLnggKyAwLjI1LCB5MTogcHJvcHMueSArIDAuMjUsIHgyOiBwcm9wcy54ICsgMC43NSwgeTI6IHByb3BzLnkgKyAwLjc1LCBzdHJva2U6IFwicmVkXCIsIHN0eWxlOiBib2xkTGluZVN0eWxlIH0pLFxuICAgICAgICBcIixcIixcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwgeyB4MTogcHJvcHMueCArIDAuNzUsIHkxOiBwcm9wcy55ICsgMC4yNSwgeDI6IHByb3BzLnggKyAwLjI1LCB5MjogcHJvcHMueSArIDAuNzUsIHN0cm9rZTogXCJyZWRcIiwgc3R5bGU6IGJvbGRMaW5lU3R5bGUgfSkpKTtcbn07XG5leHBvcnQgY29uc3QgQ2lyY2xlID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsga2V5OiBgY2lyY2xlJHtwcm9wcy54fSwke3Byb3BzLnl9YCwgY3g6IHByb3BzLnggKyAwLjUsIGN5OiBwcm9wcy55ICsgMC41LCByOiBcIi4yNVwiLCBmaWxsOiBcIm5vbmVcIiwgc3Ryb2tlOiBcImxpbWVcIiwgc3R5bGU6IGJvbGRMaW5lU3R5bGUgfSkpO1xufTtcbmV4cG9ydCBjb25zdCBMaW5lcyA9IFtcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7IGtleTogXCJsaW5lMVwiLCB4MTogXCIxXCIsIHkxOiBcIjBcIiwgeDI6IFwiMVwiLCB5MjogXCIzXCIsIHN0eWxlOiBsaW5lU3R5bGUgfSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwgeyBrZXk6IFwibGluZTJcIiwgeDE6IFwiMlwiLCB5MTogXCIwXCIsIHgyOiBcIjJcIiwgeTI6IFwiM1wiLCBzdHlsZTogbGluZVN0eWxlIH0pLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHsga2V5OiBcImxpbmUzXCIsIHgxOiBcIjBcIiwgeTE6IFwiMVwiLCB4MjogXCIzXCIsIHkyOiBcIjFcIiwgc3R5bGU6IGxpbmVTdHlsZSB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7IGtleTogXCJsaW5lNFwiLCB4MTogXCIwXCIsIHkxOiBcIjJcIiwgeDI6IFwiM1wiLCB5MjogXCIyXCIsIHN0eWxlOiBsaW5lU3R5bGUgfSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVcIiwgeyBrZXk6IFwibGluZTVcIiwgeDE6IFwiMFwiLCB5MTogXCIxXCIsIHgyOiBcIjNcIiwgeTI6IFwiMVwiLCBzdHlsZTogbGluZVN0eWxlIH0pLFxuXTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnMuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTGF5b3V0JztcbmltcG9ydCB7IENpcmNsZSwgQ3Jvc3MsIExpbmVzIH0gZnJvbSAnLi9TaGFwZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBpc09ubGluZUdhbWUsIGlzQUlHYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2dhbWVNb2RlJztcbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMub25DbGljayA9IChpZCkgPT4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoaWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3Zlcy5jbGlja0NlbGwoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0FJR2FtZSh0aGlzLnByb3BzLmdhbWVBcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucHJvcHMuc3RlcCwgMjUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlzQWN0aXZlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzQWN0aXZlICYmIHRoaXMucHJvcHMuRy5jZWxsc1tpZF0gPT09IG51bGw7XG4gICAgfVxuICAgIF9nZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmIChpc09ubGluZUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyID09PSB0aGlzLnByb3BzLnBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdZT1VSIFRVUk4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXYWl0aW5nIGZvciBvcHBvbmVudC4uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2NhbCBvciBBSSBnYW1lXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY3R4LmN1cnJlbnRQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVkJ3MgdHVyblwiO1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmVlbidzIHR1cm5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0R2FtZU92ZXIoKSB7XG4gICAgICAgIGlmIChpc09ubGluZUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgIC8vIE9ubGluZSBnYW1lXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyID09PSB0aGlzLnByb3BzLnBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneW91IHdvbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSBsb3N0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RyYXcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyLndpbm5lcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSB3b24nO1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSBsb3N0JztcbiAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkcmF3JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvY2FsIGdhbWVcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncmVkIHdvbic7XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZ3JlZW4gd29uJztcbiAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkcmF3JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgZ2FtZU92ZXI6IHRoaXMuX2dldEdhbWVPdmVyKCksIGV4dHJhQ2FyZENvbnRlbnQ6IHRoaXMuX2dldEdhbWVPdmVyQm9hcmQoKSwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIG51bGwsIHRoaXMuX2dldEJvYXJkKCkpO1xuICAgIH1cbiAgICBfZ2V0Q2VsbHMoKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gMyAqIGkgKyBqO1xuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyBrZXk6IGAke2lkfWAsIHg6IGksIHk6IGosIHdpZHRoOiBcIjFcIiwgaGVpZ2h0OiBcIjFcIiwgZmlsbDogXCJibGFja1wiLCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2soaWQpIH0pKTtcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxheTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5HLmNlbGxzW2lkXSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KENyb3NzLCB7IHg6IGksIHk6IGosIGtleTogYGNyb3NzJHtpZH1gIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLkcuY2VsbHNbaWRdID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2lyY2xlLCB7IHg6IGksIHk6IGosIGtleTogYGNpcmNsZSR7aWR9YCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHMucHVzaChvdmVybGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cbiAgICBfZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiwgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH0gfSwgdGhpcy5fZ2V0U3RhdHVzKCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogXCIwIDAgMyAzXCIgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDZWxscygpLFxuICAgICAgICAgICAgICAgIExpbmVzKSkpO1xuICAgIH1cbiAgICBfZ2V0R2FtZU92ZXJCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiwgdmlld0JveDogXCIwIDAgMyAzXCIgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRDZWxscygpLFxuICAgICAgICAgICAgICAgIExpbmVzKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IHsgVGljdGFjdG9lR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9HYW1lOiBUaWN0YWN0b2VHYW1lLFxuICAgIGJnaW9Cb2FyZDogQm9hcmQsXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICovXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9jb3JlJztcbmV4cG9ydCBmdW5jdGlvbiBpc1ZpY3RvcnkoY2VsbHMpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1dO1xuICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBjZWxsc1twb3NbMF1dO1xuICAgICAgICBsZXQgd2lubmVyID0gc3ltYm9sO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcG9zKSB7XG4gICAgICAgICAgICBpZiAoY2VsbHNbaV0gIT09IHN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHdpbm5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbm5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY29uc3QgVGljdGFjdG9lR2FtZSA9IEdhbWUoe1xuICAgIG5hbWU6ICd0aWN0YWN0b2UnLFxuICAgIHNldHVwOiAoKSA9PiAoe1xuICAgICAgICBjZWxsczogQXJyYXkoOSkuZmlsbChudWxsKSxcbiAgICB9KSxcbiAgICBtb3Zlczoge1xuICAgICAgICBjbGlja0NlbGwoRywgY3R4LCBpZCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBbLi4uRy5jZWxsc107XG4gICAgICAgICAgICBpZiAoY2VsbHNbaWRdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaWRdID0gY3R4LmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgY2VsbHMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBmbG93OiB7XG4gICAgICAgIG1vdmVzUGVyVHVybjogMSxcbiAgICAgICAgZW5kR2FtZUlmOiAoRywgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWaWN0b3J5KEcuY2VsbHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lubmVyOiBjdHguY3VycmVudFBsYXllciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEcuY2VsbHMuZmlsdGVyKChjKSA9PiBjID09PSBudWxsKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkcmF3OiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==