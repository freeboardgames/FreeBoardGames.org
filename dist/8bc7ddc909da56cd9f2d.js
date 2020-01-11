(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[27],{

/***/ "./src/games/tictactoe/ai.ts":
/*!***********************************!*\
  !*** ./src/games/tictactoe/ai.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeboardgame_org_boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/ai */ "./node_modules/@freeboardgame.org/boardgame.io/ai.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__);
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



var TictactoeRandomBot =
/*#__PURE__*/
function () {
  function TictactoeRandomBot() {
    _classCallCheck(this, TictactoeRandomBot);
  }

  _createClass(TictactoeRandomBot, [{
    key: "play",
    value: function play(state, playerID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var cell;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cell = this.generateRandomMove(state);
                return _context.abrupt("return", this.makeMove(playerID, cell));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "generateRandomMove",
    value: function generateRandomMove(state) {
      var freeCellsIndexes = [];
      var cells = state.G.cells;

      for (var i = 0; i < cells.length; i++) {
        if (cells[i] === null) {
          freeCellsIndexes.push(i);
        }
      }

      var randIndex = this.randomNumber(0, freeCellsIndexes.length - 1);
      var cell = freeCellsIndexes[randIndex];
      return cell;
    }
  }, {
    key: "makeMove",
    value: function makeMove(playerID, cell) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'clickCell',
            args: [cell],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "randomNumber",
    value: function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }]);

  return TictactoeRandomBot;
}();

var config = {
  bgioAI: function bgioAI(level) {
    if (level === '2') {
      // Hard
      return Object(_freeboardgame_org_boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__["AI"])({
        enumerate: function enumerate(G) {
          var moves = [];

          for (var i = 0; i < 9; i++) {
            if (G.cells[i] === null) {
              moves.push({
                move: 'clickCell',
                args: [i]
              });
            }
          }

          return moves;
        }
      });
    } else if (level === '1') {
      // Easy
      return {
        bot: TictactoeRandomBot
      };
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGljdGFjdG9lL2FpLnRzIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJUaWN0YWN0b2VSYW5kb21Cb3QiLCJzdGF0ZSIsInBsYXllcklEIiwiY2VsbCIsImdlbmVyYXRlUmFuZG9tTW92ZSIsIm1ha2VNb3ZlIiwiZnJlZUNlbGxzSW5kZXhlcyIsImNlbGxzIiwiRyIsImkiLCJsZW5ndGgiLCJwdXNoIiwicmFuZEluZGV4IiwicmFuZG9tTnVtYmVyIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhcmdzIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uZmlnIiwiYmdpb0FJIiwibGV2ZWwiLCJBSSIsImVudW1lcmF0ZSIsIm1vdmVzIiwibW92ZSIsImJvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsU0FBTyxLQUFLRCxDQUFDLEtBQUtBLENBQUMsR0FBR0UsT0FBVCxDQUFOLEVBQXlCLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFQyxZQUFJLENBQUNOLFNBQVMsQ0FBQ08sSUFBVixDQUFlRixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPRyxDQUFQLEVBQVU7QUFBRUwsY0FBTSxDQUFDSyxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUMsWUFBSSxDQUFDTixTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CSyxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLGNBQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLFlBQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFyQixHQUFzQyxJQUFJTixDQUFKLENBQU0sVUFBVUcsT0FBVixFQUFtQjtBQUFFQSxlQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFQO0FBQXdCLE9BQW5ELEVBQXFETyxJQUFyRCxDQUEwRFIsU0FBMUQsRUFBcUVLLFFBQXJFLENBQXRDO0FBQXVIOztBQUMvSUgsUUFBSSxDQUFDLENBQUNOLFNBQVMsR0FBR0EsU0FBUyxDQUFDYSxLQUFWLENBQWdCaEIsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlEUyxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVBEOztBQVFBOztJQUNNTyxrQjs7Ozs7Ozs7O3lCQUNHQyxLLEVBQU9DLFEsRUFBVTtBQUNsQixhQUFPcEIsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCO0FBQUE7QUFBQSw4QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCcUIsb0JBRDZCLEdBQ3RCLEtBQUtDLGtCQUFMLENBQXdCSCxLQUF4QixDQURzQjtBQUFBLGlEQUU1QixLQUFLSSxRQUFMLENBQWNILFFBQWQsRUFBd0JDLElBQXhCLENBRjRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXZCLEVBQWhCO0FBSUg7Ozt1Q0FDa0JGLEssRUFBTztBQUN0QixVQUFNSyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLFVBQU1DLEtBQUssR0FBR04sS0FBSyxDQUFDTyxDQUFOLENBQVFELEtBQXRCOztBQUNBLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxZQUFJRixLQUFLLENBQUNFLENBQUQsQ0FBTCxLQUFhLElBQWpCLEVBQXVCO0FBQ25CSCwwQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0JGLENBQXRCO0FBQ0g7QUFDSjs7QUFDRCxVQUFNRyxTQUFTLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixDQUFsQixFQUFxQlAsZ0JBQWdCLENBQUNJLE1BQWpCLEdBQTBCLENBQS9DLENBQWxCO0FBQ0EsVUFBTVAsSUFBSSxHQUFHRyxnQkFBZ0IsQ0FBQ00sU0FBRCxDQUE3QjtBQUNBLGFBQU9ULElBQVA7QUFDSDs7OzZCQUNRRCxRLEVBQVVDLEksRUFBTTtBQUNyQixhQUFPO0FBQUVXLGNBQU0sRUFBRTtBQUFFQyxjQUFJLEVBQUUsV0FBUjtBQUFxQkMsaUJBQU8sRUFBRTtBQUFFRCxnQkFBSSxFQUFFLFdBQVI7QUFBcUJFLGdCQUFJLEVBQUUsQ0FBQ2QsSUFBRCxDQUEzQjtBQUFtQ0Qsb0JBQVEsRUFBUkE7QUFBbkM7QUFBOUI7QUFBVixPQUFQO0FBQ0g7OztpQ0FDWWdCLEcsRUFBS0MsRyxFQUFLO0FBQ25CLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJILEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0g7Ozs7OztBQUVMLElBQU1LLE1BQU0sR0FBRztBQUNYQyxRQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBVztBQUNmLFFBQUlBLEtBQUssS0FBSyxHQUFkLEVBQW1CO0FBQ2Y7QUFDQSxhQUFPQyw2RUFBRSxDQUFDO0FBQ05DLGlCQUFTLEVBQUUsbUJBQUNuQixDQUFELEVBQU87QUFDZCxjQUFNb0IsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsZUFBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixnQkFBSUQsQ0FBQyxDQUFDRCxLQUFGLENBQVFFLENBQVIsTUFBZSxJQUFuQixFQUF5QjtBQUNyQm1CLG1CQUFLLENBQUNqQixJQUFOLENBQVc7QUFBRWtCLG9CQUFJLEVBQUUsV0FBUjtBQUFxQlosb0JBQUksRUFBRSxDQUFDUixDQUFEO0FBQTNCLGVBQVg7QUFDSDtBQUNKOztBQUNELGlCQUFPbUIsS0FBUDtBQUNIO0FBVEssT0FBRCxDQUFUO0FBV0gsS0FiRCxNQWNLLElBQUlILEtBQUssS0FBSyxHQUFkLEVBQW1CO0FBQ3BCO0FBQ0EsYUFBTztBQUNISyxXQUFHLEVBQUU5QjtBQURGLE9BQVA7QUFHSDtBQUNKO0FBdEJVLENBQWY7QUF3QmV1QixxRUFBZixFIiwiZmlsZSI6IjhiYzdkZGM5MDlkYTU2Y2Q5ZjJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBBSSB9IGZyb20gJ0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vYWknO1xuY2xhc3MgVGljdGFjdG9lUmFuZG9tQm90IHtcbiAgICBwbGF5KHN0YXRlLCBwbGF5ZXJJRCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Nb3ZlKHN0YXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VNb3ZlKHBsYXllcklELCBjZWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdlbmVyYXRlUmFuZG9tTW92ZShzdGF0ZSkge1xuICAgICAgICBjb25zdCBmcmVlQ2VsbHNJbmRleGVzID0gW107XG4gICAgICAgIGNvbnN0IGNlbGxzID0gc3RhdGUuRy5jZWxscztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZnJlZUNlbGxzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmRJbmRleCA9IHRoaXMucmFuZG9tTnVtYmVyKDAsIGZyZWVDZWxsc0luZGV4ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBmcmVlQ2VsbHNJbmRleGVzW3JhbmRJbmRleF07XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBtYWtlTW92ZShwbGF5ZXJJRCwgY2VsbCkge1xuICAgICAgICByZXR1cm4geyBhY3Rpb246IHsgdHlwZTogJ01BS0VfTU9WRScsIHBheWxvYWQ6IHsgdHlwZTogJ2NsaWNrQ2VsbCcsIGFyZ3M6IFtjZWxsXSwgcGxheWVySUQgfSB9IH07XG4gICAgfVxuICAgIHJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG59XG5jb25zdCBjb25maWcgPSB7XG4gICAgYmdpb0FJOiAobGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKGxldmVsID09PSAnMicpIHtcbiAgICAgICAgICAgIC8vIEhhcmRcbiAgICAgICAgICAgIHJldHVybiBBSSh7XG4gICAgICAgICAgICAgICAgZW51bWVyYXRlOiAoRykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEcuY2VsbHNbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKHsgbW92ZTogJ2NsaWNrQ2VsbCcsIGFyZ3M6IFtpXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsID09PSAnMScpIHtcbiAgICAgICAgICAgIC8vIEVhc3lcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYm90OiBUaWN0YWN0b2VSYW5kb21Cb3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9