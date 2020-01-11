(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15],{

/***/ "./src/games/fourinarow/Shapes.tsx":
/*!*****************************************!*\
  !*** ./src/games/fourinarow/Shapes.tsx ***!
  \*****************************************/
/*! exports provided: EmptyDisk, CircleGreen, CircleBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyDisk", function() { return EmptyDisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleGreen", function() { return CircleGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleBlue", function() { return CircleBlue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var diskRadius = 0.375;
var strokeWidth = 0.05;
var EmptyDisk = function EmptyDisk(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    key: "empty_circle".concat(props.x, ",").concat(props.y),
    cx: props.x + 0.5,
    cy: props.y + 0.5,
    r: diskRadius,
    fill: "rgb(250,250,250)",
    strokeWidth: strokeWidth,
    stroke: "#c4a870",
    onClick: props.onClick
  });
};
var CircleGreen = function CircleGreen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    key: "green_circle".concat(props.x, ",").concat(props.y),
    cx: props.x + 0.5,
    cy: props.y + 0.5,
    r: diskRadius,
    fill: "rgb(21, 255, 0)",
    strokeWidth: strokeWidth,
    stroke: "#c4a870"
  });
};
var CircleBlue = function CircleBlue(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    key: "blue_circle".concat(props.x, ",").concat(props.y),
    cx: props.x + 0.5,
    cy: props.y + 0.5,
    r: diskRadius,
    fill: "rgb(80, 80, 253)",
    strokeWidth: strokeWidth,
    stroke: "#c4a870"
  });
}; // function getGridLines() {
//   let lines: any = [];
//   // add all rows
//   for (let i = 0; i < numOfRows; i++) {
//     lines.push(<line key={`line_row_${i}`} x1="0" y1={`${i}`} x2={`${numOfColumns}`} y2={`${i}`} style={lineStyle} />);
//   }
//   // add all columns
//   for (let i = 0; i < numOfColumns; i++) {
//     lines.push(<line key={`line_col_${i}`} x1={`${i}`} y1="0" x2={`${i}`} y2={`${numOfColumns}`} style={lineStyle} />);
//   }
//   return lines;
// }
// export const Lines = getGridLines();

/***/ }),

/***/ "./src/games/fourinarow/board.tsx":
/*!****************************************!*\
  !*** ./src/games/fourinarow/board.tsx ***!
  \****************************************/
/*! exports provided: Board, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _Shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shapes */ "./src/games/fourinarow/Shapes.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/games/fourinarow/constants.ts");
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

    _this.onClick = function (id) {
      return function () {
        if (_this.isActive(id)) {
          _this.props.moves.selectColumn(id);

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
      var rowId = id % 10;
      var colId = Math.floor(id / 10);
      return this.props.isActive && this.props.G.grid[colId][rowId] === null;
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
        return _constants__WEBPACK_IMPORTED_MODULE_5__["localPlayerNames"][this.props.ctx.currentPlayer] + "'s turn";
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
            return _constants__WEBPACK_IMPORTED_MODULE_5__["localPlayerNames"]['0'] + ' won';

          case '1':
            return _constants__WEBPACK_IMPORTED_MODULE_5__["localPlayerNames"]['1'] + ' won';

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

      for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_5__["numOfColumns"]; i++) {
        for (var j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_5__["numOfRows"]; j++) {
          var id = 10 * i + j;
          cells.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
            key: "cell_".concat(id),
            x: i,
            y: j,
            width: "1",
            height: "1",
            fill: "#dac292",
            stroke: "#dac292",
            strokeWidth: "0.05"
          })); // cells.push(
          //   <circle
          //     key={`empty_${id}`}
          //     cx={i + 0.5}
          //     cy={j + 0.5}
          //     r=".375"
          //     fill="rgb(250,250,250)"
          //     strokeWidth="0.05"
          //     stroke="#c4a870"
          //     onClick={this.onClick(id)}
          //   />,
          // );

          cells.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Shapes__WEBPACK_IMPORTED_MODULE_2__["EmptyDisk"], {
            x: i,
            y: j,
            onClick: this.onClick(id)
          }));
          var overlay = void 0;

          if (this.props.G.grid[i][j] === '0') {
            overlay = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Shapes__WEBPACK_IMPORTED_MODULE_2__["CircleBlue"], {
              x: i,
              y: j
            });
          } else if (this.props.G.grid[i][j] === '1') {
            overlay = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Shapes__WEBPACK_IMPORTED_MODULE_2__["CircleGreen"], {
              x: i,
              y: j
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
        viewBox: "0 0 7 6"
      }, this._getCells()));
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
        viewBox: "0 0 7 6"
      }, this._getCells()));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/games/fourinarow/config.ts":
/*!****************************************!*\
  !*** ./src/games/fourinarow/config.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/fourinarow/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/fourinarow/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["ConnectFourGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/fourinarow/constants.ts":
/*!*******************************************!*\
  !*** ./src/games/fourinarow/constants.ts ***!
  \*******************************************/
/*! exports provided: numOfRows, numOfColumns, neededToWin, localPlayerNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numOfRows", function() { return numOfRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numOfColumns", function() { return numOfColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neededToWin", function() { return neededToWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localPlayerNames", function() { return localPlayerNames; });
var numOfRows = 6;
var numOfColumns = 7;
var neededToWin = 4;
var localPlayerNames = {
  '0': 'Blue',
  '1': 'Green'
};


/***/ }),

/***/ "./src/games/fourinarow/game.ts":
/*!**************************************!*\
  !*** ./src/games/fourinarow/game.ts ***!
  \**************************************/
/*! exports provided: isVictory, isDraw, generateGrid, ConnectFourGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVictory", function() { return isVictory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraw", function() { return isDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGrid", function() { return generateGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFourGame", function() { return ConnectFourGame; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/games/fourinarow/constants.ts");



function checkCellForVictory(grid, colId, rowId, player) {
  var fourCells = new Array(_constants__WEBPACK_IMPORTED_MODULE_1__["neededToWin"]); // check horizontally

  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["neededToWin"]; i++) {
    try {
      fourCells[i] = grid[colId][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }

  if (fourCells.every(function (val) {
    return val === player;
  })) {
    return true;
  } // check vertically


  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["neededToWin"]; i++) {
    try {
      fourCells[i] = grid[colId + i][rowId];
    } catch (e) {
      fourCells[i] = null;
    }
  }

  if (fourCells.every(function (val) {
    return val === player;
  })) {
    return true;
  } // check diagonally-downwards


  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["neededToWin"]; i++) {
    try {
      fourCells[i] = grid[colId + i][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }

  if (fourCells.every(function (val) {
    return val === player;
  })) {
    return true;
  } // check diagonally-upwards


  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["neededToWin"]; i++) {
    try {
      fourCells[i] = grid[colId - i][rowId + i];
    } catch (e) {
      fourCells[i] = null;
    }
  }

  if (fourCells.every(function (val) {
    return val === player;
  })) {
    return true;
  }
}

function isVictory(grid, player) {
  for (var colId = 0; colId < _constants__WEBPACK_IMPORTED_MODULE_1__["numOfColumns"]; colId++) {
    for (var rowId = 0; rowId < _constants__WEBPACK_IMPORTED_MODULE_1__["numOfRows"]; rowId++) {
      if (checkCellForVictory(grid, colId, rowId, player)) {
        return true;
      }
    }
  }

  return false;
}
function isDraw(grid) {
  for (var colIdx = _constants__WEBPACK_IMPORTED_MODULE_1__["numOfColumns"] - 1; colIdx >= 0; colIdx--) {
    for (var rowIdx = _constants__WEBPACK_IMPORTED_MODULE_1__["numOfRows"] - 1; rowIdx >= 0; rowIdx--) {
      if (grid[colIdx][rowIdx] === null) {
        return false;
      }
    }
  }

  return true;
}
function generateGrid() {
  var grid = {};

  for (var rowIdx = 0; rowIdx < _constants__WEBPACK_IMPORTED_MODULE_1__["numOfColumns"]; rowIdx++) {
    grid[rowIdx] = Array(_constants__WEBPACK_IMPORTED_MODULE_1__["numOfRows"]).fill(null);
  }

  return grid;
}
var ConnectFourGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])({
  name: 'ConnectFour',
  setup: function setup() {
    return {
      grid: generateGrid()
    };
  },
  moves: {
    selectColumn: function selectColumn(G, ctx, id) {
      var colId = Math.floor(id / 10);

      for (var rowID = _constants__WEBPACK_IMPORTED_MODULE_1__["numOfRows"] - 1; rowID >= 0; rowID--) {
        if (G.grid[colId][rowID] === null) {
          G.grid[colId][rowID] = ctx.currentPlayer;
          return;
        }
      } // return { ...G, grid };

    }
  },
  flow: {
    movesPerTurn: 1,
    endGameIf: function endGameIf(G, ctx) {
      if (isVictory(G.grid, ctx.currentPlayer)) {
        return {
          winner: ctx.currentPlayer
        };
      }

      if (isDraw(G.grid)) {
        return {
          draw: true
        };
      }
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvZm91cmluYXJvdy9TaGFwZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9mb3VyaW5hcm93L2JvYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvZm91cmluYXJvdy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2ZvdXJpbmFyb3cvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9mb3VyaW5hcm93L2dhbWUudHMiXSwibmFtZXMiOlsiZGlza1JhZGl1cyIsInN0cm9rZVdpZHRoIiwiRW1wdHlEaXNrIiwicHJvcHMiLCJSZWFjdCIsImtleSIsIngiLCJ5IiwiY3giLCJjeSIsInIiLCJmaWxsIiwic3Ryb2tlIiwib25DbGljayIsIkNpcmNsZUdyZWVuIiwiQ2lyY2xlQmx1ZSIsIkJvYXJkIiwiYXJndW1lbnRzIiwiaWQiLCJpc0FjdGl2ZSIsIm1vdmVzIiwic2VsZWN0Q29sdW1uIiwiaXNBSUdhbWUiLCJnYW1lQXJncyIsInNldFRpbWVvdXQiLCJzdGVwIiwicm93SWQiLCJjb2xJZCIsIk1hdGgiLCJmbG9vciIsIkciLCJncmlkIiwiaXNPbmxpbmVHYW1lIiwiY3R4IiwiY3VycmVudFBsYXllciIsInBsYXllcklEIiwibG9jYWxQbGF5ZXJOYW1lcyIsImdhbWVvdmVyIiwid2lubmVyIiwidW5kZWZpbmVkIiwiR2FtZUxheW91dCIsImdhbWVPdmVyIiwiX2dldEdhbWVPdmVyIiwiZXh0cmFDYXJkQ29udGVudCIsIl9nZXRHYW1lT3ZlckJvYXJkIiwiX2dldEJvYXJkIiwiY2VsbHMiLCJpIiwibnVtT2ZDb2x1bW5zIiwiaiIsIm51bU9mUm93cyIsInB1c2giLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJsYXkiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsInN0eWxlIiwidGV4dEFsaWduIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJfZ2V0U3RhdHVzIiwidmlld0JveCIsIl9nZXRDZWxscyIsImNvbmZpZyIsImJnaW9HYW1lIiwiQ29ubmVjdEZvdXJHYW1lIiwiYmdpb0JvYXJkIiwibmVlZGVkVG9XaW4iLCJjaGVja0NlbGxGb3JWaWN0b3J5IiwicGxheWVyIiwiZm91ckNlbGxzIiwiQXJyYXkiLCJlIiwiZXZlcnkiLCJ2YWwiLCJpc1ZpY3RvcnkiLCJpc0RyYXciLCJjb2xJZHgiLCJyb3dJZHgiLCJnZW5lcmF0ZUdyaWQiLCJHYW1lIiwibmFtZSIsInNldHVwIiwicm93SUQiLCJmbG93IiwibW92ZXNQZXJUdXJuIiwiZW5kR2FtZUlmIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHLEtBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ08sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDLFNBQVFDLG1EQUFBLENBQW9CLFFBQXBCLEVBQThCO0FBQUVDLE9BQUcsd0JBQWlCRixLQUFLLENBQUNHLENBQXZCLGNBQTRCSCxLQUFLLENBQUNJLENBQWxDLENBQUw7QUFBNENDLE1BQUUsRUFBRUwsS0FBSyxDQUFDRyxDQUFOLEdBQVUsR0FBMUQ7QUFBK0RHLE1BQUUsRUFBRU4sS0FBSyxDQUFDSSxDQUFOLEdBQVUsR0FBN0U7QUFBa0ZHLEtBQUMsRUFBRVYsVUFBckY7QUFBaUdXLFFBQUksRUFBRSxrQkFBdkc7QUFBMkhWLGVBQVcsRUFBRUEsV0FBeEk7QUFBcUpXLFVBQU0sRUFBRSxTQUE3SjtBQUF3S0MsV0FBTyxFQUFFVixLQUFLLENBQUNVO0FBQXZMLEdBQTlCLENBQVI7QUFDSCxDQUZNO0FBR0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1gsS0FBRCxFQUFXO0FBQ2xDLFNBQVFDLG1EQUFBLENBQW9CLFFBQXBCLEVBQThCO0FBQUVDLE9BQUcsd0JBQWlCRixLQUFLLENBQUNHLENBQXZCLGNBQTRCSCxL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QUwsQ0FBV1gsRUFBRSxHQUFHLEVBQWhCLENBQWQ7O0FBQ0EsV0FBSyxJQUFJa0UsS0FBSyxHQUFHbEMsb0RBQVMsR0FBRyxDQUE3QixFQUFnQ2tDLEtBQUssSUFBSSxDQUF6QyxFQUE0Q0EsS0FBSyxFQUFqRCxFQUFxRDtBQUNqRCxZQUFJdEQsQ0FBQyxDQUFDQyxJQUFGLENBQU9KLEtBQVAsRUFBY3lELEtBQWQsTUFBeUIsSUFBN0IsRUFBbUM7QUFDL0J0RCxXQUFDLENBQUNDLElBQUYsQ0FBT0osS0FBUCxFQUFjeUQsS0FBZCxJQUF1Qm5ELEdBQUcsQ0FBQ0MsYUFBM0I7QUFDQTtBQUNIO0FBQ0osT0FQb0IsQ0FRckI7O0FBQ0g7QUFWRSxHQUx5QjtBQWlCaENtRCxNQUFJLEVBQUU7QUFDRkMsZ0JBQVksRUFBRSxDQURaO0FBRUZDLGFBQVMsRUFBRSxtQkFBQ3pELENBQUQsRUFBSUcsR0FBSixFQUFZO0FBQ25CLFVBQUkyQyxTQUFTLENBQUM5QyxDQUFDLENBQUNDLElBQUgsRUFBU0UsR0FBRyxDQUFDQyxhQUFiLENBQWIsRUFBMEM7QUFDdEMsZUFBTztBQUFFSSxnQkFBTSxFQUFFTCxHQUFHLENBQUNDO0FBQWQsU0FBUDtBQUNIOztBQUNELFVBQUkyQyxNQUFNLENBQUMvQyxDQUFDLENBQUNDLElBQUgsQ0FBVixFQUFvQjtBQUNoQixlQUFPO0FBQUV5RCxjQUFJLEVBQUU7QUFBUixTQUFQO0FBQ0g7QUFDSjtBQVRDO0FBakIwQixDQUFELENBQTVCLEMiLCJmaWxlIjoiYThmOGQyM2M4NTM3NjZjYjgyZjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBkaXNrUmFkaXVzID0gMC4zNzU7XG5jb25zdCBzdHJva2VXaWR0aCA9IDAuMDU7XG5leHBvcnQgY29uc3QgRW1wdHlEaXNrID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsga2V5OiBgZW1wdHlfY2lyY2xlJHtwcm9wcy54fSwke3Byb3BzLnl9YCwgY3g6IHByb3BzLnggKyAwLjUsIGN5OiBwcm9wcy55ICsgMC41LCByOiBkaXNrUmFkaXVzLCBmaWxsOiBcInJnYigyNTAsMjUwLDI1MClcIiwgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLCBzdHJva2U6IFwiI2M0YTg3MFwiLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrIH0pKTtcbn07XG5leHBvcnQgY29uc3QgQ2lyY2xlR3JlZW4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBrZXk6IGBncmVlbl9jaXJjbGUke3Byb3BzLnh9LCR7cHJvcHMueX1gLCBjeDogcHJvcHMueCArIDAuNSwgY3k6IHByb3BzLnkgKyAwLjUsIHI6IGRpc2tSYWRpdXMsIGZpbGw6IFwicmdiKDIxLCAyNTUsIDApXCIsIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCwgc3Ryb2tlOiBcIiNjNGE4NzBcIiB9KSk7XG59O1xuZXhwb3J0IGNvbnN0IENpcmNsZUJsdWUgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBrZXk6IGBibHVlX2NpcmNsZSR7cHJvcHMueH0sJHtwcm9wcy55fWAsIGN4OiBwcm9wcy54ICsgMC41LCBjeTogcHJvcHMueSArIDAuNSwgcjogZGlza1JhZGl1cywgZmlsbDogXCJyZ2IoODAsIDgwLCAyNTMpXCIsIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCwgc3Ryb2tlOiBcIiNjNGE4NzBcIiB9KSk7XG59O1xuLy8gZnVuY3Rpb24gZ2V0R3JpZExpbmVzKCkge1xuLy8gICBsZXQgbGluZXM6IGFueSA9IFtdO1xuLy8gICAvLyBhZGQgYWxsIHJvd3Ncbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlJvd3M7IGkrKykge1xuLy8gICAgIGxpbmVzLnB1c2goPGxpbmUga2V5PXtgbGluZV9yb3dfJHtpfWB9IHgxPVwiMFwiIHkxPXtgJHtpfWB9IHgyPXtgJHtudW1PZkNvbHVtbnN9YH0geTI9e2Ake2l9YH0gc3R5bGU9e2xpbmVTdHlsZX0gLz4pO1xuLy8gICB9XG4vLyAgIC8vIGFkZCBhbGwgY29sdW1uc1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mQ29sdW1uczsgaSsrKSB7XG4vLyAgICAgbGluZXMucHVzaCg8bGluZSBrZXk9e2BsaW5lX2NvbF8ke2l9YH0geDE9e2Ake2l9YH0geTE9XCIwXCIgeDI9e2Ake2l9YH0geTI9e2Ake251bU9mQ29sdW1uc31gfSBzdHlsZT17bGluZVN0eWxlfSAvPik7XG4vLyAgIH1cbi8vICAgcmV0dXJuIGxpbmVzO1xuLy8gfVxuLy8gZXhwb3J0IGNvbnN0IExpbmVzID0gZ2V0R3JpZExpbmVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZUxheW91dCc7XG5pbXBvcnQgeyBFbXB0eURpc2ssIENpcmNsZUJsdWUsIENpcmNsZUdyZWVuIH0gZnJvbSAnLi9TaGFwZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBpc09ubGluZUdhbWUsIGlzQUlHYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2dhbWVNb2RlJztcbmltcG9ydCB7IG51bU9mQ29sdW1ucywgbnVtT2ZSb3dzLCBsb2NhbFBsYXllck5hbWVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKGlkKSA9PiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZShpZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1vdmVzLnNlbGVjdENvbHVtbihpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQUlHYW1lKHRoaXMucHJvcHMuZ2FtZUFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5wcm9wcy5zdGVwLCAyNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaXNBY3RpdmUoaWQpIHtcbiAgICAgICAgY29uc3Qgcm93SWQgPSBpZCAlIDEwO1xuICAgICAgICBjb25zdCBjb2xJZCA9IE1hdGguZmxvb3IoaWQgLyAxMCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzQWN0aXZlICYmIHRoaXMucHJvcHMuRy5ncmlkW2NvbElkXVtyb3dJZF0gPT09IG51bGw7XG4gICAgfVxuICAgIF9nZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmIChpc09ubGluZUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyID09PSB0aGlzLnByb3BzLnBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdZT1VSIFRVUk4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXYWl0aW5nIGZvciBvcHBvbmVudC4uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb2NhbCBvciBBSSBnYW1lXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxQbGF5ZXJOYW1lc1t0aGlzLnByb3BzLmN0eC5jdXJyZW50UGxheWVyXSArIFwiJ3MgdHVyblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRHYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKGlzT25saW5lR2FtZSh0aGlzLnByb3BzLmdhbWVBcmdzKSkge1xuICAgICAgICAgICAgLy8gT25saW5lIGdhbWVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIgPT09IHRoaXMucHJvcHMucGxheWVySUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd5b3Ugd29uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneW91IGxvc3QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZHJhdyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBSUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneW91IHdvbic7XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneW91IGxvc3QnO1xuICAgICAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RyYXcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9jYWwgZ2FtZVxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsUGxheWVyTmFtZXNbJzAnXSArICcgd29uJztcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsUGxheWVyTmFtZXNbJzEnXSArICcgd29uJztcbiAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkcmF3JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgZ2FtZU92ZXI6IHRoaXMuX2dldEdhbWVPdmVyKCksIGV4dHJhQ2FyZENvbnRlbnQ6IHRoaXMuX2dldEdhbWVPdmVyQm9hcmQoKSwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIG51bGwsIHRoaXMuX2dldEJvYXJkKCkpO1xuICAgIH1cbiAgICBfZ2V0Q2VsbHMoKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZDb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtT2ZSb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IDEwICogaSArIGo7XG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IGtleTogYGNlbGxfJHtpZH1gLCB4OiBpLCB5OiBqLCB3aWR0aDogXCIxXCIsIGhlaWdodDogXCIxXCIsIGZpbGw6IFwiI2RhYzI5MlwiLCBzdHJva2U6IFwiI2RhYzI5MlwiLCBzdHJva2VXaWR0aDogXCIwLjA1XCIgfSkpO1xuICAgICAgICAgICAgICAgIC8vIGNlbGxzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgLy8gICAgIGtleT17YGVtcHR5XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAvLyAgICAgY3g9e2kgKyAwLjV9XG4gICAgICAgICAgICAgICAgLy8gICAgIGN5PXtqICsgMC41fVxuICAgICAgICAgICAgICAgIC8vICAgICByPVwiLjM3NVwiXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpbGw9XCJyZ2IoMjUwLDI1MCwyNTApXCJcbiAgICAgICAgICAgICAgICAvLyAgICAgc3Ryb2tlV2lkdGg9XCIwLjA1XCJcbiAgICAgICAgICAgICAgICAvLyAgICAgc3Ryb2tlPVwiI2M0YTg3MFwiXG4gICAgICAgICAgICAgICAgLy8gICAgIG9uQ2xpY2s9e3RoaXMub25DbGljayhpZCl9XG4gICAgICAgICAgICAgICAgLy8gICAvPixcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eURpc2ssIHsgeDogaSwgeTogaiwgb25DbGljazogdGhpcy5vbkNsaWNrKGlkKSB9KSk7XG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsYXk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuRy5ncmlkW2ldW2pdID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2lyY2xlQmx1ZSwgeyB4OiBpLCB5OiBqIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLkcuZ3JpZFtpXVtqXSA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KENpcmNsZUdyZWVuLCB7IHg6IGksIHk6IGogfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzLnB1c2gob3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG4gICAgX2dldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIsIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9IH0sIHRoaXMuX2dldFN0YXR1cygpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHZpZXdCb3g6IFwiMCAwIDcgNlwiIH0sIHRoaXMuX2dldENlbGxzKCkpKSk7XG4gICAgfVxuICAgIF9nZXRHYW1lT3ZlckJvYXJkKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiLCB2aWV3Qm94OiBcIjAgMCA3IDZcIiB9LCB0aGlzLl9nZXRDZWxscygpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IHsgQ29ubmVjdEZvdXJHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5jb25zdCBjb25maWcgPSB7XG4gICAgYmdpb0dhbWU6IENvbm5lY3RGb3VyR2FtZSxcbiAgICBiZ2lvQm9hcmQ6IEJvYXJkLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImNvbnN0IG51bU9mUm93cyA9IDY7XG5jb25zdCBudW1PZkNvbHVtbnMgPSA3O1xuY29uc3QgbmVlZGVkVG9XaW4gPSA0O1xuY29uc3QgbG9jYWxQbGF5ZXJOYW1lcyA9IHtcbiAgICAnMCc6ICdCbHVlJyxcbiAgICAnMSc6ICdHcmVlbicsXG59O1xuZXhwb3J0IHsgbnVtT2ZSb3dzLCBudW1PZkNvbHVtbnMsIG5lZWRlZFRvV2luLCBsb2NhbFBsYXllck5hbWVzIH07XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9jb3JlJztcbmltcG9ydCB7IG51bU9mQ29sdW1ucywgbnVtT2ZSb3dzLCBuZWVkZWRUb1dpbiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmZ1bmN0aW9uIGNoZWNrQ2VsbEZvclZpY3RvcnkoZ3JpZCwgY29sSWQsIHJvd0lkLCBwbGF5ZXIpIHtcbiAgICBsZXQgZm91ckNlbGxzID0gbmV3IEFycmF5KG5lZWRlZFRvV2luKTtcbiAgICAvLyBjaGVjayBob3Jpem9udGFsbHlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5lZWRlZFRvV2luOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvdXJDZWxsc1tpXSA9IGdyaWRbY29sSWRdW3Jvd0lkICsgaV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZvdXJDZWxsc1tpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdXJDZWxscy5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgPT09IHBsYXllcjtcbiAgICB9KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVydGljYWxseVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVlZGVkVG9XaW47IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm91ckNlbGxzW2ldID0gZ3JpZFtjb2xJZCArIGldW3Jvd0lkXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZm91ckNlbGxzW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91ckNlbGxzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gcGxheWVyO1xuICAgIH0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjaGVjayBkaWFnb25hbGx5LWRvd253YXJkc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVlZGVkVG9XaW47IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm91ckNlbGxzW2ldID0gZ3JpZFtjb2xJZCArIGldW3Jvd0lkICsgaV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZvdXJDZWxsc1tpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdXJDZWxscy5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgPT09IHBsYXllcjtcbiAgICB9KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY2hlY2sgZGlhZ29uYWxseS11cHdhcmRzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWVkZWRUb1dpbjsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3VyQ2VsbHNbaV0gPSBncmlkW2NvbElkIC0gaV1bcm93SWQgKyBpXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZm91ckNlbGxzW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91ckNlbGxzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gcGxheWVyO1xuICAgIH0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZpY3RvcnkoZ3JpZCwgcGxheWVyKSB7XG4gICAgZm9yICh2YXIgY29sSWQgPSAwOyBjb2xJZCA8IG51bU9mQ29sdW1uczsgY29sSWQrKykge1xuICAgICAgICBmb3IgKHZhciByb3dJZCA9IDA7IHJvd0lkIDwgbnVtT2ZSb3dzOyByb3dJZCsrKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tDZWxsRm9yVmljdG9yeShncmlkLCBjb2xJZCwgcm93SWQsIHBsYXllcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNEcmF3KGdyaWQpIHtcbiAgICBmb3IgKHZhciBjb2xJZHggPSBudW1PZkNvbHVtbnMgLSAxOyBjb2xJZHggPj0gMDsgY29sSWR4LS0pIHtcbiAgICAgICAgZm9yICh2YXIgcm93SWR4ID0gbnVtT2ZSb3dzIC0gMTsgcm93SWR4ID49IDA7IHJvd0lkeC0tKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZFtjb2xJZHhdW3Jvd0lkeF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSB7fTtcbiAgICBmb3IgKHZhciByb3dJZHggPSAwOyByb3dJZHggPCBudW1PZkNvbHVtbnM7IHJvd0lkeCsrKSB7XG4gICAgICAgIGdyaWRbcm93SWR4XSA9IEFycmF5KG51bU9mUm93cykuZmlsbChudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG59XG5leHBvcnQgY29uc3QgQ29ubmVjdEZvdXJHYW1lID0gR2FtZSh7XG4gICAgbmFtZTogJ0Nvbm5lY3RGb3VyJyxcbiAgICBzZXR1cDogKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBncmlkOiBnZW5lcmF0ZUdyaWQoKSB9O1xuICAgIH0sXG4gICAgbW92ZXM6IHtcbiAgICAgICAgc2VsZWN0Q29sdW1uKEcsIGN0eCwgaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbElkID0gTWF0aC5mbG9vcihpZCAvIDEwKTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvd0lEID0gbnVtT2ZSb3dzIC0gMTsgcm93SUQgPj0gMDsgcm93SUQtLSkge1xuICAgICAgICAgICAgICAgIGlmIChHLmdyaWRbY29sSWRdW3Jvd0lEXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBHLmdyaWRbY29sSWRdW3Jvd0lEXSA9IGN0eC5jdXJyZW50UGxheWVyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIHsgLi4uRywgZ3JpZCB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZmxvdzoge1xuICAgICAgICBtb3Zlc1BlclR1cm46IDEsXG4gICAgICAgIGVuZEdhbWVJZjogKEcsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmljdG9yeShHLmdyaWQsIGN0eC5jdXJyZW50UGxheWVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpbm5lcjogY3R4LmN1cnJlbnRQbGF5ZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RyYXcoRy5ncmlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRyYXc6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9