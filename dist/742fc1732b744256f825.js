(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[9],{

/***/ "./src/games/seabattle/game.ts":
/*!*************************************!*\
  !*** ./src/games/seabattle/game.ts ***!
  \*************************************/
/*! exports provided: playerView, SeabattleGame, generateRandomShips, validateShips, getCellVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerView", function() { return playerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeabattleGame", function() { return SeabattleGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomShips", function() { return generateRandomShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateShips", function() { return validateShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellVector", function() { return getCellVector; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var VALID_SHIPS_SIZES = [5, 4, 3, 2];
var VALID_SHIPS_COUNT = {
  5: 1,
  4: 1,
  3: 2,
  2: 1
};
var playerView = function playerView(G, ctx, playerID) {
  var player = parseInt(playerID, 10);
  var ships = G.ships.filter(function (ship) {
    return ship.player === player || ship.sunk;
  });
  return Object.assign({}, G, {
    ships: ships
  });
};
var SeabattleGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])({
  name: 'seabattle',
  setup: function setup() {
    return {
      ships: [],
      salvos: []
    };
  },
  moves: {
    setShips: function setShips(G, ctx, ships) {
      var player = parseInt(ctx.playerID, 10);
      var validation = validateShips(ships, player);

      if (!validation.valid) {
        throw new Error(validation.error);
      }

      return Object.assign({}, G, {
        ships: [].concat(_toConsumableArray(G.ships), _toConsumableArray(ships))
      });
    },
    salvo: function salvo(G, ctx, x, y) {
      var player = parseInt(ctx.playerID, 10);
      var shipIndex = findShipWithCell(G.ships, {
        x: x,
        y: y
      }, player); // Do not allow the same cells to be shot twice

      var uniqueMove = G.salvos.filter(function (salvo) {
        return salvo.player === player && salvo.cell.x === x && salvo.cell.y === y;
      }).length === 0;

      if (!uniqueMove) {
        return Object.assign({}, G);
      }

      if (shipIndex === -1) {
        // Miss
        return Object.assign({}, G, {
          salvos: [].concat(_toConsumableArray(G.salvos), [{
            player: player,
            hit: false,
            cell: {
              x: x,
              y: y
            }
          }])
        });
      }

      var ship = G.ships[shipIndex]; // Hit

      var newShips = _toConsumableArray(G.ships);

      if (countShipHits(G.salvos, ship.id) + 1 === ship.cells.length) {
        newShips[shipIndex] = Object.assign({}, newShips[shipIndex], {
          sunk: true
        });
      }

      return Object.assign({}, G, {
        ships: newShips,
        salvos: [].concat(_toConsumableArray(G.salvos), [{
          player: player,
          hit: true,
          cell: {
            x: x,
            y: y
          },
          hitShip: ship.id
        }])
      });
    }
  },
  flow: {
    startingPhase: 'setup',
    phases: {
      setup: {
        allowedMoves: ['setShips'],
        turnOrder: _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["TurnOrder"].ANY_ONCE,
        next: 'play'
      },
      play: {
        endGameIf: function endGameIf(G) {
          if (checkAllShipsSunk(G.ships, 0)) {
            return {
              winner: '1'
            };
          }

          if (checkAllShipsSunk(G.ships, 1)) {
            return {
              winner: '0'
            };
          }
        },
        allowedMoves: ['salvo'],
        movesPerTurn: 1
      }
    }
  },
  playerView: playerView
}); // Helper function for generating random ships positioning.

function generateRandomShips(player) {
  var result;
  var shipID;

  do {
    result = [];

    for (var _i = 0, _VALID_SHIPS_SIZES = VALID_SHIPS_SIZES; _i < _VALID_SHIPS_SIZES.length; _i++) {
      var shipSize = _VALID_SHIPS_SIZES[_i];
      var count = VALID_SHIPS_COUNT[shipSize];

      for (var i = 0; i < count; i++) {
        shipID = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
        result.push(randomlyGetShip(player, shipSize, shipID));
      }
    }
  } while (!validateShips(result, player).valid);

  return result;
} // Wheather a setup is valid or not.

function validateShips(ships, player) {
  var validations = [validateShipsCount(ships), validateShipsContinuity(ships), validateShipsNotOutOfBounds(ships), validateShipsNotOverlapping(ships), validateShipsHaveUniqueIDs(ships)];

  if (player !== undefined) {
    validations.push(validateShipsOwnership(player, ships));
  }

  for (var _i2 = 0, _validations = validations; _i2 < _validations.length; _i2++) {
    var validation = _validations[_i2];

    if (!validation.valid) {
      return validation;
    }
  }

  return {
    valid: true
  };
} // PRIVATE FUNCTIONS

function checkAllShipsSunk(ships, player) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ships[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ship = _step.value;

      if (ship.player === player && !ship.sunk) {
        return false;
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

  return true;
}

function randomlyGetShip(player, shipSize, id) {
  var cell = {
    x: getRandomInt(10),
    y: getRandomInt(10)
  };
  var direction = getRandomInt(2) === 1 ? 'H' : 'V';
  var ship = {
    player: player,
    cells: [],
    sunk: false,
    id: id
  };

  for (var i = 0; i < shipSize; i++) {
    if (direction === 'H') {
      // Constant y
      ship.cells.push(Object.assign({}, cell, {
        x: cell.x + i
      }));
    } else {
      // Constant x
      ship.cells.push(Object.assign({}, cell, {
        y: cell.y + i
      }));
    }
  }

  return ship;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function findShipWithCell(ships, cell, player) {
  return ships.findIndex(function (ship) {
    return ship.cells.findIndex(function (c) {
      return c.x === cell.x && c.y === cell.y;
    }) !== -1 && ship.player !== player;
  });
}

function countShipHits(salvos, shipId) {
  return salvos.filter(function (s) {
    return s.hitShip === shipId;
  }).length;
}

function validateShipsCount(ships) {
  var shipsLength = ships.map(function (ship) {
    return ship.cells.length;
  });
  var count = Object.assign({}, VALID_SHIPS_COUNT);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = shipsLength[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var length = _step2.value;

      if (!(length in count)) {
        return {
          valid: false,
          error: "Invalid ship length: ".concat(length)
        };
      }

      count[length]--;
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

  for (var _i3 = 0, _Object$values = Object.values(count); _i3 < _Object$values.length; _i3++) {
    var _length = _Object$values[_i3];

    if (_length !== 0) {
      return {
        valid: false,
        error: 'Invalid ships sizes.'
      };
    }
  }

  return {
    valid: true
  };
}

function validateShipsOwnership(player, ships) {
  var owners = ships.map(function (ship) {
    return ship.player;
  });
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = owners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var owner = _step3.value;

      if (owner !== player) {
        return {
          valid: false,
          error: "Invalid player owner: ".concat(owner, " should be: ").concat(player)
        };
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return {
    valid: true
  };
}

function validateShipsContinuity(ships) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = ships[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var ship = _step4.value;

      if (ship.cells.length < 2) {
        continue;
      }

      var lastICell = ship.cells[0];
      var vector = getCellVector(ship.cells[1], ship.cells[0]);

      if (!(Math.abs(vector.x) === 1 && Math.abs(vector.y) === 0 || Math.abs(vector.x) === 0 && Math.abs(vector.y) === 1)) {
        return {
          valid: false,
          error: "IShip is not spaced right!"
        };
      }

      for (var i = 1; i < ship.cells.length; i++) {
        var cell = ship.cells[i];
        var newVector = getCellVector(cell, lastICell);

        if (newVector.x !== vector.x || newVector.y !== vector.y) {
          return {
            valid: false,
            error: "IShip is not continuous!"
          };
        }

        lastICell = cell;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return {
    valid: true
  };
}

function getCellVector(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function validateShipsHaveUniqueIDs(ships) {
  var usedIDs = {};
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = ships[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var ship = _step5.value;

      if (usedIDs[ship.id]) {
        return {
          valid: false,
          error: "IShip IDs are not unique!"
        };
      }

      usedIDs[ship.id] = true;
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return {
    valid: true
  };
}

function validateShipsNotOutOfBounds(ships) {
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = ships[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var ship = _step6.value;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = ship.cells[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var cell = _step7.value;

          if (cell.x < 0 || cell.x > 9 || cell.y < 0 || cell.y > 9) {
            return {
              valid: false,
              error: "IShip out of bounds!"
            };
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return {
    valid: true
  };
}

function validateShipsNotOverlapping(ships) {
  var cellsUsed = {};
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = ships[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var ship = _step8.value;
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = ship.cells[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var cell = _step9.value;

          if (!(cell.x in cellsUsed)) {
            cellsUsed[cell.x] = {};
          }

          if (cellsUsed[cell.x][cell.y]) {
            return {
              valid: false,
              error: "Overlapping ships!"
            };
          }

          cellsUsed[cell.x][cell.y] = true;
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  return {
    valid: true
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvc2VhYmF0dGxlL2dhbWUudHMiXSwibmFtZXMiOlsiVkFMSURfU0hJUFNfU0laRVMiLCJWQUxJRF9TSElQU19DT1VOVCIsInBsYXllclZpZXciLCJHIiwiY3R4IiwicGxheWVySUQiLCJwbGF5ZXIiLCJwYXJzZUludCIsInNoaXBzIiwiZmlsdGVyIiwic2hpcCIsInN1bmsiLCJPYmplY3QiLCJhc3NpZ24iLCJTZWFiYXR0bGVHYW1lIiwiR2FtZSIsIm5hbWUiLCJzZXR1cCIsInNhbHZvcyIsIm1vdmVzIiwic2V0U2hpcHMiLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGVTaGlwcyIsInZhbGlkIiwiRXJyb3IiLCJlcnJvciIsInNhbHZvIiwieCIsInkiLCJzaGlwSW5kZXgiLCJmaW5kU2hpcFdpdGhDZWxsIiwidW5pcXVlTW92ZSIsImNlbGwiLCJsZW5ndGgiLCJoaXQiLCJuZXdTaGlwcyIsImNvdW50U2hpcEhpdHMiLCJpZCIsImNlbGxzIiwiaGl0U2hpcCIsImZsb3ciLCJzdGFydGluZ1BoYXNlIiwicGhhc2VzIiwiYWxsb3dlZE1vdmVzIiwidHVybk9yZGVyIiwiVHVybk9yZGVyIiwiQU5ZX09OQ0UiLCJuZXh0IiwicGxheSIsImVuZEdhbWVJZiIsImNoZWNrQWxsU2hpcHNTdW5rIiwid2lubmVyIiwibW92ZXNQZXJUdXJuIiwiZ2VuZXJhdGVSYW5kb21TaGlwcyIsInJlc3VsdCIsInNoaXBJRCIsInNoaXBTaXplIiwiY291bnQiLCJpIiwic2hvcnRpZCIsImdlbmVyYXRlIiwicHVzaCIsInJhbmRvbWx5R2V0U2hpcCIsInZhbGlkYXRpb25zIiwidmFsaWRhdGVTaGlwc0NvdW50IiwidmFsaWRhdGVTaGlwc0NvbnRpbnVpdHkiLCJ2YWxpZGF0ZVNoaXBzTm90T3V0T2ZCb3VuZHMiLCJ2YWxpZGF0ZVNoaXBzTm90T3ZlcmxhcHBpbmciLCJ2YWxpZGF0ZVNoaXBzSGF2ZVVuaXF1ZUlEcyIsInVuZGVmaW5lZCIsInZhbGlkYXRlU2hpcHNPd25lcnNoaXAiLCJnZXRSYW5kb21JbnQiLCJkaXJlY3Rpb24iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmaW5kSW5kZXgiLCJjIiwic2hpcElkIiwicyIsInNoaXBzTGVuZ3RoIiwibWFwIiwidmFsdWVzIiwib3duZXJzIiwib3duZXIiLCJsYXN0SUNlbGwiLCJ2ZWN0b3IiLCJnZXRDZWxsVmVjdG9yIiwiYWJzIiwibmV3VmVjdG9yIiwiYSIsImIiLCJ1c2VkSURzIiwiY2VsbHNVc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLGlCQUFpQixHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHO0FBQ3RCLEtBQUcsQ0FEbUI7QUFFdEIsS0FBRyxDQUZtQjtBQUd0QixLQUFHLENBSG1CO0FBSXRCLEtBQUc7QUFKbUIsQ0FBMUI7QUFNTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBU0MsUUFBVCxFQUFzQjtBQUM1QyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsUUFBRCxFQUFXLEVBQVgsQ0FBdkI7QUFDQSxNQUFNRyxLQUFLLEdBQUdMLENBQUMsQ0FBQ0ssS0FBRixDQUFRQyxNQUFSLENBQWUsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0osTUFBTCxLQUFnQkEsTUFBaEIsSUFBMEJJLElBQUksQ0FBQ0MsSUFBbkM7QUFBQSxHQUFuQixDQUFkO0FBQ0EsU0FBT0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlYsQ0FBbEIsRUFBcUI7QUFBRUssU0FBSyxFQUFMQTtBQUFGLEdBQXJCLENBQVA7QUFDSCxDQUpNO0FBS0EsSUFBTU0sYUFBYSxHQUFHQyxpRkFBSSxDQUFDO0FBQzlCQyxNQUFJLEVBQUUsV0FEd0I7QUFFOUJDLE9BQUssRUFBRTtBQUFB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IFR1cm5PcmRlciB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vY29yZSc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcbmNvbnN0IFZBTElEX1NISVBTX1NJWkVTID0gWzUsIDQsIDMsIDJdO1xuY29uc3QgVkFMSURfU0hJUFNfQ09VTlQgPSB7XG4gICAgNTogMSxcbiAgICA0OiAxLFxuICAgIDM6IDIsXG4gICAgMjogMSxcbn07XG5leHBvcnQgY29uc3QgcGxheWVyVmlldyA9IChHLCBjdHgsIHBsYXllcklEKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gcGFyc2VJbnQocGxheWVySUQsIDEwKTtcbiAgICBjb25zdCBzaGlwcyA9IEcuc2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5wbGF5ZXIgPT09IHBsYXllciB8fCBzaGlwLnN1bmspO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBHLCB7IHNoaXBzIH0pO1xufTtcbmV4cG9ydCBjb25zdCBTZWFiYXR0bGVHYW1lID0gR2FtZSh7XG4gICAgbmFtZTogJ3NlYWJhdHRsZScsXG4gICAgc2V0dXA6ICgpID0+ICh7XG4gICAgICAgIHNoaXBzOiBbXSxcbiAgICAgICAgc2Fsdm9zOiBbXSxcbiAgICB9KSxcbiAgICBtb3Zlczoge1xuICAgICAgICBzZXRTaGlwcyhHLCBjdHgsIHNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBwYXJzZUludChjdHgucGxheWVySUQsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZVNoaXBzKHNoaXBzLCBwbGF5ZXIpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbGlkYXRpb24uZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgc2hpcHM6IFsuLi5HLnNoaXBzLCAuLi5zaGlwc10gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhbHZvKEcsIGN0eCwgeCwgeSkge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gcGFyc2VJbnQoY3R4LnBsYXllcklELCAxMCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5kZXggPSBmaW5kU2hpcFdpdGhDZWxsKEcuc2hpcHMsIHsgeCwgeSB9LCBwbGF5ZXIpO1xuICAgICAgICAgICAgLy8gRG8gbm90IGFsbG93IHRoZSBzYW1lIGNlbGxzIHRvIGJlIHNob3QgdHdpY2VcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZU1vdmUgPSBHLnNhbHZvcy5maWx0ZXIoc2Fsdm8gPT4gc2Fsdm8ucGxheWVyID09PSBwbGF5ZXIgJiYgc2Fsdm8uY2VsbC54ID09PSB4ICYmIHNhbHZvLmNlbGwueSA9PT0geSkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgaWYgKCF1bmlxdWVNb3ZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBNaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgc2Fsdm9zOiBbLi4uRy5zYWx2b3MsIHsgcGxheWVyLCBoaXQ6IGZhbHNlLCBjZWxsOiB7IHgsIHkgfSB9XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBHLnNoaXBzW3NoaXBJbmRleF07XG4gICAgICAgICAgICAvLyBIaXRcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXBzID0gWy4uLkcuc2hpcHNdO1xuICAgICAgICAgICAgaWYgKGNvdW50U2hpcEhpdHMoRy5zYWx2b3MsIHNoaXAuaWQpICsgMSA9PT0gc2hpcC5jZWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdTaGlwc1tzaGlwSW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3U2hpcHNbc2hpcEluZGV4XSwgeyBzdW5rOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgc2hpcHM6IG5ld1NoaXBzLCBzYWx2b3M6IFsuLi5HLnNhbHZvcywgeyBwbGF5ZXIsIGhpdDogdHJ1ZSwgY2VsbDogeyB4LCB5IH0sIGhpdFNoaXA6IHNoaXAuaWQgfV0gfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBmbG93OiB7XG4gICAgICAgIHN0YXJ0aW5nUGhhc2U6ICdzZXR1cCcsXG4gICAgICAgIHBoYXNlczoge1xuICAgICAgICAgICAgc2V0dXA6IHtcbiAgICAgICAgICAgICAgICBhbGxvd2VkTW92ZXM6IFsnc2V0U2hpcHMnXSxcbiAgICAgICAgICAgICAgICB0dXJuT3JkZXI6IFR1cm5PcmRlci5BTllfT05DRSxcbiAgICAgICAgICAgICAgICBuZXh0OiAncGxheScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheToge1xuICAgICAgICAgICAgICAgIGVuZEdhbWVJZjogRyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbFNoaXBzU3VuayhHLnNoaXBzLCAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lubmVyOiAnMScgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxTaGlwc1N1bmsoRy5zaGlwcywgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHdpbm5lcjogJzAnIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbG93ZWRNb3ZlczogWydzYWx2byddLFxuICAgICAgICAgICAgICAgIG1vdmVzUGVyVHVybjogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwbGF5ZXJWaWV3LFxufSk7XG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgcmFuZG9tIHNoaXBzIHBvc2l0aW9uaW5nLlxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU2hpcHMocGxheWVyKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgc2hpcElEO1xuICAgIGRvIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcFNpemUgb2YgVkFMSURfU0hJUFNfU0laRVMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gVkFMSURfU0hJUFNfQ09VTlRbc2hpcFNpemVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2hpcElEID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbWx5R2V0U2hpcChwbGF5ZXIsIHNoaXBTaXplLCBzaGlwSUQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKCF2YWxpZGF0ZVNoaXBzKHJlc3VsdCwgcGxheWVyKS52YWxpZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIFdoZWF0aGVyIGEgc2V0dXAgaXMgdmFsaWQgb3Igbm90LlxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2hpcHMoc2hpcHMsIHBsYXllcikge1xuICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICB2YWxpZGF0ZVNoaXBzQ291bnQoc2hpcHMpLFxuICAgICAgICB2YWxpZGF0ZVNoaXBzQ29udGludWl0eShzaGlwcyksXG4gICAgICAgIHZhbGlkYXRlU2hpcHNOb3RPdXRPZkJvdW5kcyhzaGlwcyksXG4gICAgICAgIHZhbGlkYXRlU2hpcHNOb3RPdmVybGFwcGluZyhzaGlwcyksXG4gICAgICAgIHZhbGlkYXRlU2hpcHNIYXZlVW5pcXVlSURzKHNoaXBzKSxcbiAgICBdO1xuICAgIGlmIChwbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKHZhbGlkYXRlU2hpcHNPd25lcnNoaXAocGxheWVyLCBzaGlwcykpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcbiAgICAgICAgaWYgKCF2YWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSB9O1xufVxuLy8gUFJJVkFURSBGVU5DVElPTlNcbmZ1bmN0aW9uIGNoZWNrQWxsU2hpcHNTdW5rKHNoaXBzLCBwbGF5ZXIpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgaWYgKHNoaXAucGxheWVyID09PSBwbGF5ZXIgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcmFuZG9tbHlHZXRTaGlwKHBsYXllciwgc2hpcFNpemUsIGlkKSB7XG4gICAgY29uc3QgY2VsbCA9IHsgeDogZ2V0UmFuZG9tSW50KDEwKSwgeTogZ2V0UmFuZG9tSW50KDEwKSB9O1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldFJhbmRvbUludCgyKSA9PT0gMSA/ICdIJyA6ICdWJztcbiAgICBjb25zdCBzaGlwID0geyBwbGF5ZXIsIGNlbGxzOiBbXSwgc3VuazogZmFsc2UsIGlkIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdIJykge1xuICAgICAgICAgICAgLy8gQ29uc3RhbnQgeVxuICAgICAgICAgICAgc2hpcC5jZWxscy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGNlbGwsIHsgeDogY2VsbC54ICsgaSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBDb25zdGFudCB4XG4gICAgICAgICAgICBzaGlwLmNlbGxzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgY2VsbCwgeyB5OiBjZWxsLnkgKyBpIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcDtcbn1cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbn1cbmZ1bmN0aW9uIGZpbmRTaGlwV2l0aENlbGwoc2hpcHMsIGNlbGwsIHBsYXllcikge1xuICAgIHJldHVybiBzaGlwcy5maW5kSW5kZXgoc2hpcCA9PiBzaGlwLmNlbGxzLmZpbmRJbmRleChjID0+IGMueCA9PT0gY2VsbC54ICYmIGMueSA9PT0gY2VsbC55KSAhPT0gLTEgJiYgc2hpcC5wbGF5ZXIgIT09IHBsYXllcik7XG59XG5mdW5jdGlvbiBjb3VudFNoaXBIaXRzKHNhbHZvcywgc2hpcElkKSB7XG4gICAgcmV0dXJuIHNhbHZvcy5maWx0ZXIocyA9PiBzLmhpdFNoaXAgPT09IHNoaXBJZCkubGVuZ3RoO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVTaGlwc0NvdW50KHNoaXBzKSB7XG4gICAgY29uc3Qgc2hpcHNMZW5ndGggPSBzaGlwcy5tYXAoKHNoaXApID0+IHNoaXAuY2VsbHMubGVuZ3RoKTtcbiAgICBjb25zdCBjb3VudCA9IE9iamVjdC5hc3NpZ24oe30sIFZBTElEX1NISVBTX0NPVU5UKTtcbiAgICBmb3IgKGNvbnN0IGxlbmd0aCBvZiBzaGlwc0xlbmd0aCkge1xuICAgICAgICBpZiAoIShsZW5ndGggaW4gY291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGVycm9yOiBgSW52YWxpZCBzaGlwIGxlbmd0aDogJHtsZW5ndGh9YCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvdW50W2xlbmd0aF0tLTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsZW5ndGggb2YgT2JqZWN0LnZhbHVlcyhjb3VudCkpIHtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgc2hpcHMgc2l6ZXMuJyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXBzT3duZXJzaGlwKHBsYXllciwgc2hpcHMpIHtcbiAgICBjb25zdCBvd25lcnMgPSBzaGlwcy5tYXAoKHNoaXApID0+IHNoaXAucGxheWVyKTtcbiAgICBmb3IgKGNvbnN0IG93bmVyIG9mIG93bmVycykge1xuICAgICAgICBpZiAob3duZXIgIT09IHBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogYEludmFsaWQgcGxheWVyIG93bmVyOiAke293bmVyfSBzaG91bGQgYmU6ICR7cGxheWVyfWAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSB9O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVTaGlwc0NvbnRpbnVpdHkoc2hpcHMpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgaWYgKHNoaXAuY2VsbHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RJQ2VsbCA9IHNoaXAuY2VsbHNbMF07XG4gICAgICAgIGNvbnN0IHZlY3RvciA9IGdldENlbGxWZWN0b3Ioc2hpcC5jZWxsc1sxXSwgc2hpcC5jZWxsc1swXSk7XG4gICAgICAgIGlmICghKChNYXRoLmFicyh2ZWN0b3IueCkgPT09IDEgJiYgTWF0aC5hYnModmVjdG9yLnkpID09PSAwKSB8fFxuICAgICAgICAgICAgKE1hdGguYWJzKHZlY3Rvci54KSA9PT0gMCAmJiBNYXRoLmFicyh2ZWN0b3IueSkgPT09IDEpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogYElTaGlwIGlzIG5vdCBzcGFjZWQgcmlnaHQhYCB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHNoaXAuY2VsbHNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdWZWN0b3IgPSBnZXRDZWxsVmVjdG9yKGNlbGwsIGxhc3RJQ2VsbCk7XG4gICAgICAgICAgICBpZiAobmV3VmVjdG9yLnggIT09IHZlY3Rvci54IHx8IG5ld1ZlY3Rvci55ICE9PSB2ZWN0b3IueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3I6IGBJU2hpcCBpcyBub3QgY29udGludW91cyFgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SUNlbGwgPSBjZWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbFZlY3RvcihhLCBiKSB7XG4gICAgcmV0dXJuIHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcHNIYXZlVW5pcXVlSURzKHNoaXBzKSB7XG4gICAgY29uc3QgdXNlZElEcyA9IHt9O1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICBpZiAodXNlZElEc1tzaGlwLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogYElTaGlwIElEcyBhcmUgbm90IHVuaXF1ZSFgIH07XG4gICAgICAgIH1cbiAgICAgICAgdXNlZElEc1tzaGlwLmlkXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXBzTm90T3V0T2ZCb3VuZHMoc2hpcHMpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHNoaXAuY2VsbHMpIHtcbiAgICAgICAgICAgIGlmIChjZWxsLnggPCAwIHx8IGNlbGwueCA+IDkgfHwgY2VsbC55IDwgMCB8fCBjZWxsLnkgPiA5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogYElTaGlwIG91dCBvZiBib3VuZHMhYCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXBzTm90T3ZlcmxhcHBpbmcoc2hpcHMpIHtcbiAgICBjb25zdCBjZWxsc1VzZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHNoaXAuY2VsbHMpIHtcbiAgICAgICAgICAgIGlmICghKGNlbGwueCBpbiBjZWxsc1VzZWQpKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNVc2VkW2NlbGwueF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsc1VzZWRbY2VsbC54XVtjZWxsLnldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogYE92ZXJsYXBwaW5nIHNoaXBzIWAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGxzVXNlZFtjZWxsLnhdW2NlbGwueV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9