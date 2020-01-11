(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[24],{

/***/ "./src/games/reversi/ai.ts":
/*!*********************************!*\
  !*** ./src/games/reversi/ai.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/reversi/game.ts");
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



var ReversiRandomBot =
/*#__PURE__*/
function () {
  function ReversiRandomBot() {
    _classCallCheck(this, ReversiRandomBot);
  }

  _createClass(ReversiRandomBot, [{
    key: "play",
    value: function play(state, playerID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var moves, move, x, y;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                moves = Array.from(Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID));
                move = moves[Math.floor(Math.random() * moves.length)];
                x = move % 8;
                y = Math.floor(move / 8);
                return _context.abrupt("return", this.makeMove(playerID, x, y));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "makeMove",
    value: function makeMove(playerID, x, y) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'placePiece',
            args: [x, y],
            playerID: playerID
          }
        }
      };
    }
  }]);

  return ReversiRandomBot;
}();

var config = {
  bgioAI: function bgioAI() {
    return {
      bot: ReversiRandomBot
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvcmV2ZXJzaS9haS50cyJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiUmV2ZXJzaVJhbmRvbUJvdCIsInN0YXRlIiwicGxheWVySUQiLCJtb3ZlcyIsIkFycmF5IiwiZnJvbSIsImdldFZhbGlkTW92ZXMiLCJHIiwibW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIngiLCJ5IiwibWFrZU1vdmUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImFyZ3MiLCJjb25maWciLCJiZ2lvQUkiLCJib3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsU0FBTyxLQUFLRCxDQUFDLEtBQUtBLENBQUMsR0FBR0UsT0FBVCxDQUFOLEVBQXlCLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFQyxZQUFJLENBQUNOLFNBQVMsQ0FBQ08sSUFBVixDQUFlRixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPRyxDQUFQLEVBQVU7QUFBRUwsY0FBTSxDQUFDSyxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUMsWUFBSSxDQUFDTixTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CSyxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLGNBQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLFlBQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFyQixHQUFzQyxJQUFJTixDQUFKLENBQU0sVUFBVUcsT0FBVixFQUFtQjtBQUFFQSxlQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFQO0FBQXdCLE9BQW5ELEVBQXFETyxJQUFyRCxDQUEwRFIsU0FBMUQsRUFBcUVLLFFBQXJFLENBQXRDO0FBQXVIOztBQUMvSUgsUUFBSSxDQUFDLENBQUNOLFNBQVMsR0FBR0EsU0FBUyxDQUFDYSxLQUFWLENBQWdCaEIsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlEUyxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVBEOztBQVFBOztJQUNNTyxnQjs7Ozs7Ozs7O3lCQUNHQyxLLEVBQU9DLFEsRUFBVTtBQUNsQixhQUFPcEIsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCO0FBQUE7QUFBQSw4QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCcUIscUJBRDZCLEdBQ3JCQyxLQUFLLENBQUNDLElBQU4sQ0FBV0MsMkRBQWEsQ0FBQ0wsS0FBSyxDQUFDTSxDQUFQLEVBQVVMLFFBQVYsQ0FBeEIsQ0FEcUI7QUFFN0JNLG9CQUY2QixHQUV0QkwsS0FBSyxDQUFDTSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCUixLQUFLLENBQUNTLE1BQWpDLENBQUQsQ0FGaUI7QUFHN0JDLGlCQUg2QixHQUd6QkwsSUFBSSxHQUFHLENBSGtCO0FBSTdCTSxpQkFKNkIsR0FJekJMLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFJLEdBQUcsQ0FBbEIsQ0FKeUI7QUFBQSxpREFLNUIsS0FBS08sUUFBTCxDQUFjYixRQUFkLEVBQXdCVyxDQUF4QixFQUEyQkMsQ0FBM0IsQ0FMNEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdkIsRUFBaEI7QUFPSDs7OzZCQUNRWixRLEVBQVVXLEMsRUFBR0MsQyxFQUFHO0FBQ3JCLGFBQU87QUFBRUUsY0FBTSxFQUFFO0FBQUVDLGNBQUksRUFBRSxXQUFSO0FBQXFCQyxpQkFBTyxFQUFFO0FBQUVELGdCQUFJLEVBQUUsWUFBUjtBQUFzQkUsZ0JBQUksRUFBRSxDQUFDTixDQUFELEVBQUlDLENBQUosQ0FBNUI7QUFBb0NaLG9CQUFRLEVBQVJBO0FBQXBDO0FBQTlCO0FBQVYsT0FBUDtBQUNIOzs7Ozs7QUFFTCxJQUFNa0IsTUFBTSxHQUFHO0FBQ1hDLFFBQU0sRUFBRSxrQkFBTTtBQUNWLFdBQU87QUFDSEMsU0FBRyxFQUFFdEI7QUFERixLQUFQO0FBR0g7QUFMVSxDQUFmO0FBT2VvQixxRUFBZixFIiwiZmlsZSI6IjIxODRmNTJlZjFmNGU5ODQ0ZTU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRWYWxpZE1vdmVzIH0gZnJvbSAnLi9nYW1lJztcbmNsYXNzIFJldmVyc2lSYW5kb21Cb3Qge1xuICAgIHBsYXkoc3RhdGUsIHBsYXllcklEKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlcyA9IEFycmF5LmZyb20oZ2V0VmFsaWRNb3ZlcyhzdGF0ZS5HLCBwbGF5ZXJJRCkpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc3QgeCA9IG1vdmUgJSA4O1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IobW92ZSAvIDgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZU1vdmUocGxheWVySUQsIHgsIHkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFrZU1vdmUocGxheWVySUQsIHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiB7IHR5cGU6ICdNQUtFX01PVkUnLCBwYXlsb2FkOiB7IHR5cGU6ICdwbGFjZVBpZWNlJywgYXJnczogW3gsIHldLCBwbGF5ZXJJRCB9IH0gfTtcbiAgICB9XG59XG5jb25zdCBjb25maWcgPSB7XG4gICAgYmdpb0FJOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3Q6IFJldmVyc2lSYW5kb21Cb3QsXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9