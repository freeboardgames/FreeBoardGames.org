(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[25],{

/***/ "./src/games/seabattle/ai.ts":
/*!***********************************!*\
  !*** ./src/games/seabattle/ai.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/seabattle/game.ts");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shuffle-array */ "./node_modules/shuffle-array/index.js");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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




var SeabattleBot =
/*#__PURE__*/
function () {
  function SeabattleBot() {
    _classCallCheck(this, SeabattleBot);
  }

  _createClass(SeabattleBot, [{
    key: "play",
    value: function play(state, playerID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var shipPositions, cell;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(state.ctx.phase === 'setup')) {
                  _context.next = 5;
                  break;
                }

                shipPositions = Object(_game__WEBPACK_IMPORTED_MODULE_0__["generateRandomShips"])(1);
                return _context.abrupt("return", this.makeSetShipsMove(shipPositions, playerID));

              case 5:
                cell = this.generateMove(playerID, state);
                return _context.abrupt("return", this.makeSalvoMove(cell, playerID));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "makeSetShipsMove",
    value: function makeSetShipsMove(ships, playerID) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'setShips',
            args: [ships],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "makeSalvoMove",
    value: function makeSalvoMove(cell, playerID) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'salvo',
            args: [cell.x, cell.y],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "generateMove",
    value: function generateMove(playerID, state) {
      var salvos = state.G.salvos.filter(function (salvo) {
        return salvo.player === Number(playerID) && salvo.hit === true && typeof salvo.hitShip !== 'undefined';
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = salvos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var salvo = _step.value;

          // if we have already fired salvos, see if we've hit any ships that remain unsunk
          if (!this.isShipSunk(state, salvo.hitShip)) {
            var otherHitSalvos = this.getOtherSalvosHitShip(state, salvo.hitShip);

            if (otherHitSalvos.length >= 2) {
              // we have hit this ship at least twice, so we can make an intelligent move
              return this.getNextShipFoundMove(state, otherHitSalvos);
            } // no other salvos for the same ship were hit, so hit a random neighbor


            return this.getRandomNeighbor(state, salvo);
          }
        } // generate a random move

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

      return this.generateRandomMove(state);
    }
  }, {
    key: "getNextShipFoundMove",
    value: function getNextShipFoundMove(state, hitSalvos) {
      var xMap = hitSalvos.map(function (salvo) {
        return salvo.cell.x;
      });
      var yMap = hitSalvos.map(function (salvo) {
        return salvo.cell.y;
      });
      var minPos = {
        x: Math.min.apply(Math, _toConsumableArray(xMap)),
        y: Math.min.apply(Math, _toConsumableArray(yMap))
      };
      var maxPos = {
        x: Math.max.apply(Math, _toConsumableArray(xMap)),
        y: Math.max.apply(Math, _toConsumableArray(yMap))
      };
      var direction = maxPos.x === minPos.x ? {
        x: 0,
        y: 1
      } : {
        x: 1,
        y: 0
      };
      return this.anyValidMove(state, [{
        x: minPos.x - direction.x,
        y: minPos.y - direction.y
      }, {
        x: maxPos.x + direction.x,
        y: maxPos.y + direction.y
      }]);
    }
  }, {
    key: "isInBounds",
    value: function isInBounds(x) {
      return x >= 0 && x <= 9;
    }
  }, {
    key: "isValidMove",
    value: function isValidMove(state, cell) {
      return this.isInBounds(cell.x) && this.isInBounds(cell.y) && this.isUniqueMove(state, cell);
    }
  }, {
    key: "anyValidMove",
    value: function anyValidMove(state, moves) {
      shuffle_array__WEBPACK_IMPORTED_MODULE_1___default()(moves); // ONLY source of randomness

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = moves[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var move = _step2.value;

          if (this.isValidMove(state, move)) {
            return move;
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

      return null;
    }
  }, {
    key: "getRandomNeighbor",
    value: function getRandomNeighbor(state, salvo) {
      return this.anyValidMove(state, [{
        x: salvo.cell.x - 1,
        y: salvo.cell.y
      }, {
        x: salvo.cell.x,
        y: salvo.cell.y - 1
      }, {
        x: salvo.cell.x + 1,
        y: salvo.cell.y
      }, {
        x: salvo.cell.x,
        y: salvo.cell.y + 1
      }]);
    }
  }, {
    key: "getOtherSalvosHitShip",
    value: function getOtherSalvosHitShip(state, id) {
      return state.G.salvos.filter(function (salvo) {
        return salvo.hitShip === id;
      });
    }
  }, {
    key: "isShipSunk",
    value: function isShipSunk(state, id) {
      return state.G.ships.filter(function (ship) {
        return ship.id === id;
      })[0].sunk;
    }
  }, {
    key: "generateRandomMove",
    value: function generateRandomMove(state) {
      var allPossibleMoves = [];

      for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <= 9; y++) {
          allPossibleMoves.push({
            x: x,
            y: y
          });
        }
      }

      return this.anyValidMove(state, allPossibleMoves);
    }
  }, {
    key: "isUniqueMove",
    value: function isUniqueMove(state, cell) {
      var moves = state.G.salvos.filter(function (salvo) {
        return salvo.player === 1 && salvo.cell.x === cell.x && salvo.cell.y === cell.y;
      });
      return moves.length === 0;
    }
  }]);

  return SeabattleBot;
}();

var config = {
  bgioAI: function bgioAI() {
    return {
      bot: SeabattleBot
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvc2VhYmF0dGxlL2FpLnRzIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJTZWFiYXR0bGVCb3QiLCJzdGF0ZSIsInBsYXllcklEIiwiY3R4IiwicGhhc2UiLCJzaGlwUG9zaXRpb25zIiwiZ2VuZXJhdGVSYW5kb21TaGlwcyIsIm1ha2VTZXRTaGlwc01vdmUiLCJjZWxsIiwiZ2VuZXJhdGVNb3ZlIiwibWFrZVNhbHZvTW92ZSIsInNoaXBzIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhcmdzIiwieCIsInkiLCJzYWx2b3MiLCJHIiwiZmlsdGVyIiwic2Fsdm8iLCJwbGF5ZXIiLCJOdW1iZXIiLCJoaXQiLCJoaXRTaGlwIiwiaXNTaGlwU3VuayIsIm90aGVySGl0U2Fsdm9zIiwiZ2V0T3RoZXJTYWx2b3NIaXRTaGlwIiwibGVuZ3RoIiwiZ2V0TmV4dFNoaXBGb3VuZE1vdmUiLCJnZXRSYW5kb21OZWlnaGJvciIsImdlbmVyYXRlUmFuZG9tTW92ZSIsImhpdFNhbHZvcyIsInhNYXAiLCJtYXAiLCJ5TWFwIiwibWluUG9zIiwiTWF0aCIsIm1pbiIsIm1heFBvcyIsIm1heCIsImRpcmVjdGlvbiIsImFueVZhbGlkTW92ZSIsImlzSW5Cb3VuZHMiLCJpc1VuaXF1ZU1vdmUiLCJtb3ZlcyIsInNodWZmbGUiLCJtb3ZlIiwiaXNWYWxpZE1vdmUiLCJpZCIsInNoaXAiLCJzdW5rIiwiYWxsUG9zc2libGVNb3ZlcyIsInB1c2giLCJjb25maWciLCJiZ2lvQUkiLCJib3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJ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V0FBdEI7QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBSzBCLFlBQUwsQ0FBa0IxQyxLQUFsQixFQUF5Qm9ELGdCQUF6QixDQUFQO0FBQ0g7OztpQ0FDWXBELEssRUFBT08sSSxFQUFNO0FBQ3RCLFVBQU1zQyxLQUFLLEdBQUc3QyxLQUFLLENBQUNrQixDQUFOLENBQVFELE1BQVIsQ0FBZUUsTUFBZixDQUFzQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLENBQWpCLElBQXNCRCxLQUFLLENBQUNiLElBQU4sQ0FBV1EsQ0FBWCxLQUFpQlIsSUFBSSxDQUFDUSxDQUE1QyxJQUFpREssS0FBSyxDQUFDYixJQUFOLENBQVdTLENBQVgsS0FBaUJULElBQUksQ0FBQ1MsQ0FBbEY7QUFBQSxPQUF0QixDQUFkO0FBQ0EsYUFBTzZCLEtBQUssQ0FBQ2pCLE1BQU4sS0FBaUIsQ0FBeEI7QUFDSDs7Ozs7O0FBRUwsSUFBTTBCLE1BQU0sR0FBRztBQUNYQyxRQUFNLEVBQUUsa0JBQU07QUFDVixXQUFPO0FBQ0hDLFNBQUcsRUFBRXpEO0FBREYsS0FBUDtBQUdIO0FBTFUsQ0FBZjtBQU9ldUQscUVBQWYsRSIsImZpbGUiOiI4ZjgzNzlmMmFlY2JiZWNhMzlmYS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21TaGlwcyB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2h1ZmZsZSBmcm9tICdzaHVmZmxlLWFycmF5JztcbmNsYXNzIFNlYWJhdHRsZUJvdCB7XG4gICAgcGxheShzdGF0ZSwgcGxheWVySUQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jdHgucGhhc2UgPT09ICdzZXR1cCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwUG9zaXRpb25zID0gZ2VuZXJhdGVSYW5kb21TaGlwcygxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlU2V0U2hpcHNNb3ZlKHNoaXBQb3NpdGlvbnMsIHBsYXllcklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdlbmVyYXRlTW92ZShwbGF5ZXJJRCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VTYWx2b01vdmUoY2VsbCwgcGxheWVySUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFrZVNldFNoaXBzTW92ZShzaGlwcywgcGxheWVySUQpIHtcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiB7IHR5cGU6ICdNQUtFX01PVkUnLCBwYXlsb2FkOiB7IHR5cGU6ICdzZXRTaGlwcycsIGFyZ3M6IFtzaGlwc10sIHBsYXllcklEIH0gfSB9O1xuICAgIH1cbiAgICBtYWtlU2Fsdm9Nb3ZlKGNlbGwsIHBsYXllcklEKSB7XG4gICAgICAgIHJldHVybiB7IGFjdGlvbjogeyB0eXBlOiAnTUFLRV9NT1ZFJywgcGF5bG9hZDogeyB0eXBlOiAnc2Fsdm8nLCBhcmdzOiBbY2VsbC54LCBjZWxsLnldLCBwbGF5ZXJJRCB9IH0gfTtcbiAgICB9XG4gICAgZ2VuZXJhdGVNb3ZlKHBsYXllcklELCBzdGF0ZSkge1xuICAgICAgICBjb25zdCBzYWx2b3MgPSBzdGF0ZS5HLnNhbHZvcy5maWx0ZXIoKHNhbHZvKSA9PiBzYWx2by5wbGF5ZXIgPT09IE51bWJlcihwbGF5ZXJJRCkgJiYgc2Fsdm8uaGl0ID09PSB0cnVlICYmIHR5cGVvZiBzYWx2by5oaXRTaGlwICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIGZvciAoY29uc3Qgc2Fsdm8gb2Ygc2Fsdm9zKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFscmVhZHkgZmlyZWQgc2Fsdm9zLCBzZWUgaWYgd2UndmUgaGl0IGFueSBzaGlwcyB0aGF0IHJlbWFpbiB1bnN1bmtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NoaXBTdW5rKHN0YXRlLCBzYWx2by5oaXRTaGlwKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVySGl0U2Fsdm9zID0gdGhpcy5nZXRPdGhlclNhbHZvc0hpdFNoaXAoc3RhdGUsIHNhbHZvLmhpdFNoaXApO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlckhpdFNhbHZvcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGhpdCB0aGlzIHNoaXAgYXQgbGVhc3QgdHdpY2UsIHNvIHdlIGNhbiBtYWtlIGFuIGludGVsbGlnZW50IG1vdmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmV4dFNoaXBGb3VuZE1vdmUoc3RhdGUsIG90aGVySGl0U2Fsdm9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm8gb3RoZXIgc2Fsdm9zIGZvciB0aGUgc2FtZSBzaGlwIHdlcmUgaGl0LCBzbyBoaXQgYSByYW5kb20gbmVpZ2hib3JcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21OZWlnaGJvcihzdGF0ZSwgc2Fsdm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgcmFuZG9tIG1vdmVcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSYW5kb21Nb3ZlKHN0YXRlKTtcbiAgICB9XG4gICAgZ2V0TmV4dFNoaXBGb3VuZE1vdmUoc3RhdGUsIGhpdFNhbHZvcykge1xuICAgICAgICBjb25zdCB4TWFwID0gaGl0U2Fsdm9zLm1hcChzYWx2byA9PiBzYWx2by5jZWxsLngpO1xuICAgICAgICBjb25zdCB5TWFwID0gaGl0U2Fsdm9zLm1hcChzYWx2byA9PiBzYWx2by5jZWxsLnkpO1xuICAgICAgICBjb25zdCBtaW5Qb3MgPSB7IHg6IE1hdGgubWluKC4uLnhNYXApLCB5OiBNYXRoLm1pbiguLi55TWFwKSB9O1xuICAgICAgICBjb25zdCBtYXhQb3MgPSB7IHg6IE1hdGgubWF4KC4uLnhNYXApLCB5OiBNYXRoLm1heCguLi55TWFwKSB9O1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBtYXhQb3MueCA9PT0gbWluUG9zLnggPyB7IHg6IDAsIHk6IDEgfSA6IHsgeDogMSwgeTogMCB9O1xuICAgICAgICByZXR1cm4gdGhpcy5hbnlWYWxpZE1vdmUoc3RhdGUsIFtcbiAgICAgICAgICAgIHsgeDogbWluUG9zLnggLSBkaXJlY3Rpb24ueCwgeTogbWluUG9zLnkgLSBkaXJlY3Rpb24ueSB9LFxuICAgICAgICAgICAgeyB4OiBtYXhQb3MueCArIGRpcmVjdGlvbi54LCB5OiBtYXhQb3MueSArIGRpcmVjdGlvbi55IH0sXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBpc0luQm91bmRzKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IDk7XG4gICAgfVxuICAgIGlzVmFsaWRNb3ZlKHN0YXRlLCBjZWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5Cb3VuZHMoY2VsbC54KSAmJiB0aGlzLmlzSW5Cb3VuZHMoY2VsbC55KSAmJiB0aGlzLmlzVW5pcXVlTW92ZShzdGF0ZSwgY2VsbCk7XG4gICAgfVxuICAgIGFueVZhbGlkTW92ZShzdGF0ZSwgbW92ZXMpIHtcbiAgICAgICAgc2h1ZmZsZShtb3Zlcyk7IC8vIE9OTFkgc291cmNlIG9mIHJhbmRvbW5lc3NcbiAgICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIG1vdmVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTW92ZShzdGF0ZSwgbW92ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0UmFuZG9tTmVpZ2hib3Ioc3RhdGUsIHNhbHZvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFueVZhbGlkTW92ZShzdGF0ZSwgW1xuICAgICAgICAgICAgeyB4OiBzYWx2by5jZWxsLnggLSAxLCB5OiBzYWx2by5jZWxsLnkgfSxcbiAgICAgICAgICAgIHsgeDogc2Fsdm8uY2VsbC54LCB5OiBzYWx2by5jZWxsLnkgLSAxIH0sXG4gICAgICAgICAgICB7IHg6IHNhbHZvLmNlbGwueCArIDEsIHk6IHNhbHZvLmNlbGwueSB9LFxuICAgICAgICAgICAgeyB4OiBzYWx2by5jZWxsLngsIHk6IHNhbHZvLmNlbGwueSArIDEgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGdldE90aGVyU2Fsdm9zSGl0U2hpcChzdGF0ZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLkcuc2Fsdm9zLmZpbHRlcigoc2Fsdm8pID0+IHNhbHZvLmhpdFNoaXAgPT09IGlkKTtcbiAgICB9XG4gICAgaXNTaGlwU3VuayhzdGF0ZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLkcuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLmlkID09PSBpZClbMF0uc3VuaztcbiAgICB9XG4gICAgZ2VuZXJhdGVSYW5kb21Nb3ZlKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gOTsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA5OyB5KyspIHtcbiAgICAgICAgICAgICAgICBhbGxQb3NzaWJsZU1vdmVzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFueVZhbGlkTW92ZShzdGF0ZSwgYWxsUG9zc2libGVNb3Zlcyk7XG4gICAgfVxuICAgIGlzVW5pcXVlTW92ZShzdGF0ZSwgY2VsbCkge1xuICAgICAgICBjb25zdCBtb3ZlcyA9IHN0YXRlLkcuc2Fsdm9zLmZpbHRlcigoc2Fsdm8pID0+IHNhbHZvLnBsYXllciA9PT0gMSAmJiBzYWx2by5jZWxsLnggPT09IGNlbGwueCAmJiBzYWx2by5jZWxsLnkgPT09IGNlbGwueSk7XG4gICAgICAgIHJldHVybiBtb3Zlcy5sZW5ndGggPT09IDA7XG4gICAgfVxufVxuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9BSTogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm90OiBTZWFiYXR0bGVCb3QsXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9