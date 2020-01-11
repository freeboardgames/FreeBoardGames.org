(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[23],{

/***/ "./src/games/checkers/ai.ts":
/*!**********************************!*\
  !*** ./src/games/checkers/ai.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/checkers/game.ts");
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



var CheckersRandomBot =
/*#__PURE__*/
function () {
  function CheckersRandomBot() {
    _classCallCheck(this, CheckersRandomBot);
  }

  _createClass(CheckersRandomBot, [{
    key: "play",
    value: function play(state, playerID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var moves, move;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                moves = state.G.jumping !== null ? Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID, state.G.jumping) : Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID);
                move = moves[Math.floor(Math.random() * moves.length)];
                return _context.abrupt("return", this.makeMove(playerID, move));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "makeMove",
    value: function makeMove(playerID, move) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'move',
            args: [move.from, move.to],
            playerID: playerID
          }
        }
      };
    }
  }]);

  return CheckersRandomBot;
}();

var config = {
  bgioAI: function bgioAI() {
    return {
      bot: CheckersRandomBot
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlY2tlcnMvYWkudHMiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkNoZWNrZXJzUmFuZG9tQm90Iiwic3RhdGUiLCJwbGF5ZXJJRCIsIm1vdmVzIiwiRyIsImp1bXBpbmciLCJnZXRWYWxpZE1vdmVzIiwibW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm1ha2VNb3ZlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhcmdzIiwiZnJvbSIsInRvIiwiY29uZmlnIiwiYmdpb0FJIiwiYm90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFNBQU8sS0FBS0QsQ0FBQyxLQUFLQSxDQUFDLEdBQUdFLE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRUMsWUFBSSxDQUFDTixTQUFTLENBQUNPLElBQVYsQ0FBZUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLGNBQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDM0YsYUFBU0MsUUFBVCxDQUFrQkosS0FBbEIsRUFBeUI7QUFBRSxVQUFJO0FBQUVDLFlBQUksQ0FBQ04sU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQkssS0FBbkIsQ0FBRCxDQUFKO0FBQWtDLE9BQXhDLENBQXlDLE9BQU9HLENBQVAsRUFBVTtBQUFFTCxjQUFNLENBQUNLLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzlGLGFBQVNGLElBQVQsQ0FBY0ksTUFBZCxFQUFzQjtBQUFFQSxZQUFNLENBQUNDLElBQVAsR0FBY1QsT0FBTyxDQUFDUSxNQUFNLENBQUNMLEtBQVIsQ0FBckIsR0FBc0MsSUFBSU4sQ0FBSixDQUFNLFVBQVVHLE9BQVYsRUFBbUI7QUFBRUEsZUFBTyxDQUFDUSxNQUFNLENBQUNMLEtBQVIsQ0FBUDtBQUF3QixPQUFuRCxFQUFxRE8sSUFBckQsQ0FBMERSLFNBQTFELEVBQXFFSyxRQUFyRSxDQUF0QztBQUF1SDs7QUFDL0lILFFBQUksQ0FBQyxDQUFDTixTQUFTLEdBQUdBLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQmhCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFMsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FQRDs7QUFRQTs7SUFDTU8saUI7Ozs7Ozs7Ozt5QkFDR0MsSyxFQUFPQyxRLEVBQVU7QUFDbEIsYUFBT3BCLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQjtBQUFBO0FBQUEsOEJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QnFCLHFCQUQ2QixHQUNyQkYsS0FBSyxDQUFDRyxDQUFOLENBQVFDLE9BQVIsS0FBb0IsSUFBcEIsR0FBMkJDLDJEQUFhLENBQUNMLEtBQUssQ0FBQ0csQ0FBUCxFQUFVRixRQUFWLEVBQW9CRCxLQUFLLENBQUNHLENBQU4sQ0FBUUMsT0FBNUIsQ0FBeEMsR0FBK0VDLDJEQUFhLENBQUNMLEtBQUssQ0FBQ0csQ0FBUCxFQUFVRixRQUFWLENBRHZFO0FBRTdCSyxvQkFGNkIsR0FFdEJKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlAsS0FBSyxDQUFDUSxNQUFqQyxDQUFELENBRmlCO0FBQUEsaURBRzVCLEtBQUtDLFFBQUwsQ0FBY1YsUUFBZCxFQUF3QkssSUFBeEIsQ0FINEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdkIsRUFBaEI7QUFLSDs7OzZCQUNRTCxRLEVBQVVLLEksRUFBTTtBQUNyQixhQUFPO0FBQUVNLGNBQU0sRUFBRTtBQUFFQyxjQUFJLEVBQUUsV0FBUjtBQUFxQkMsaUJBQU8sRUFBRTtBQUFFRCxnQkFBSSxFQUFFLE1BQVI7QUFBZ0JFLGdCQUFJLEVBQUUsQ0FBQ1QsSUFBSSxDQUFDVSxJQUFOLEVBQVlWLElBQUksQ0FBQ1csRUFBakIsQ0FBdEI7QUFBNENoQixvQkFBUSxFQUFSQTtBQUE1QztBQUE5QjtBQUFWLE9BQVA7QUFDSDs7Ozs7O0FBRUwsSUFBTWlCLE1BQU0sR0FBRztBQUNYQyxRQUFNLEVBQUUsa0JBQU07QUFDVixXQUFPO0FBQ0hDLFNBQUcsRUFBRXJCO0FBREYsS0FBUDtBQUdIO0FBTFUsQ0FBZjtBQU9lbUIscUVBQWYsRSIsImZpbGUiOiJkN2VlNzQwZWUxYzFmMDFlNDgwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0VmFsaWRNb3ZlcyB9IGZyb20gJy4vZ2FtZSc7XG5jbGFzcyBDaGVja2Vyc1JhbmRvbUJvdCB7XG4gICAgcGxheShzdGF0ZSwgcGxheWVySUQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVzID0gc3RhdGUuRy5qdW1waW5nICE9PSBudWxsID8gZ2V0VmFsaWRNb3ZlcyhzdGF0ZS5HLCBwbGF5ZXJJRCwgc3RhdGUuRy5qdW1waW5nKSA6IGdldFZhbGlkTW92ZXMoc3RhdGUuRywgcGxheWVySUQpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZU1vdmUocGxheWVySUQsIG1vdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFrZU1vdmUocGxheWVySUQsIG1vdmUpIHtcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiB7IHR5cGU6ICdNQUtFX01PVkUnLCBwYXlsb2FkOiB7IHR5cGU6ICdtb3ZlJywgYXJnczogW21vdmUuZnJvbSwgbW92ZS50b10sIHBsYXllcklEIH0gfSB9O1xuICAgIH1cbn1cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBiZ2lvQUk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvdDogQ2hlY2tlcnNSYW5kb21Cb3QsXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9