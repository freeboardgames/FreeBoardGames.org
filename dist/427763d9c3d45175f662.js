(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[26],{

/***/ "./src/games/takesix/ai.ts":
/*!*********************************!*\
  !*** ./src/games/takesix/ai.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/takesix/game.ts");
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



var TakeSixBot =
/*#__PURE__*/
function () {
  function TakeSixBot() {
    _classCallCheck(this, TakeSixBot);
  }

  _createClass(TakeSixBot, [{
    key: "play",
    value: function play(state, playerID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var randomCard, deckId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(state.ctx.phase === 'CARD_SELECT')) {
                  _context.next = 5;
                  break;
                }

                randomCard = Math.floor(state.G.players[playerID].cards.length * Math.random());
                return _context.abrupt("return", this.makeSelectCardMove(randomCard, playerID));

              case 5:
                deckId = this.getBestDeck(state.G, playerID);
                return _context.abrupt("return", this.makeSelectDeckMove(deckId, playerID));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getBestDeck",
    value: function getBestDeck(G, playerID) {
      var _getCards = Object(_game__WEBPACK_IMPORTED_MODULE_0__["getCards"])(G, playerID),
          card = _getCards.card,
          lastCards = _getCards.lastCards;

      if (card.number < lastCards[0].number) {
        return G.decks.map(function (deck, i) {
          return {
            value: deck.reduce(function (acc, card) {
              return acc + card.value;
            }, 0),
            id: i
          };
        }, 0).sort(function (a, b) {
          return a.value - b.value;
        })[0].id;
      } else {
        return G.decks.findIndex(function (deck, i) {
          return Object(_game__WEBPACK_IMPORTED_MODULE_0__["isAllowedDeck"])(G, i, playerID);
        });
      }
    }
  }, {
    key: "makeSelectCardMove",
    value: function makeSelectCardMove(cardId, playerID) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'selectCard',
            args: [cardId],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "makeSelectDeckMove",
    value: function makeSelectDeckMove(deckId, playerID) {
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'selectDeck',
            args: [deckId],
            playerID: playerID
          }
        }
      };
    }
  }]);

  return TakeSixBot;
}();

var config = {
  bgioAI: function bgioAI() {
    return {
      bot: TakeSixBot
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9haS50cyJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiVGFrZVNpeEJvdCIsInN0YXRlIiwicGxheWVySUQiLCJjdHgiLCJwaGFzZSIsInJhbmRvbUNhcmQiLCJNYXRoIiwiZmxvb3IiLCJHIiwicGxheWVycyIsImNhcmRzIiwibGVuZ3RoIiwicmFuZG9tIiwibWFrZVNlbGVjdENhcmRNb3ZlIiwiZGVja0lkIiwiZ2V0QmVzdERlY2siLCJtYWtlU2VsZWN0RGVja01vdmUiLCJnZXRDYXJkcyIsImNhcmQiLCJsYXN0Q2FyZHMiLCJudW1iZXIiLCJkZWNrcyIsIm1hcCIsImRlY2siLCJpIiwicmVkdWNlIiwiYWNjIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJmaW5kSW5kZXgiLCJpc0FsbG93ZWREZWNrIiwiY2FyZElkIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhcmdzIiwiY29uZmlnIiwiYmdpb0FJIiwiYm90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFNBQU8sS0FBS0QsQ0FBQyxLQUFLQSxDQUFDLEdBQUdFLE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRUMsWUFBSSxDQUFDTixTQUFTLENB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S0FBdEI7QUFBQSxTQUZILEVBRWdDLENBRmhDLEVBRW1Db0MsRUFGMUM7QUFHSCxPQUpELE1BS0s7QUFDRCxlQUFPbkIsQ0FBQyxDQUFDYSxLQUFGLENBQVFVLFNBQVIsQ0FBa0IsVUFBQ1IsSUFBRCxFQUFPQyxDQUFQO0FBQUEsaUJBQWFRLDJEQUFhLENBQUN4QixDQUFELEVBQUlnQixDQUFKLEVBQU90QixRQUFQLENBQTFCO0FBQUEsU0FBbEIsQ0FBUDtBQUNIO0FBQ0o7Ozt1Q0FDa0IrQixNLEVBQVEvQixRLEVBQVU7QUFDakMsYUFBTztBQUFFZ0MsY0FBTSxFQUFFO0FBQUVDLGNBQUksRUFBRSxXQUFSO0FBQXFCQyxpQkFBTyxFQUFFO0FBQUVELGdCQUFJLEVBQUUsWUFBUjtBQUFzQkUsZ0JBQUksRUFBRSxDQUFDSixNQUFELENBQTVCO0FBQXNDL0Isb0JBQVEsRUFBUkE7QUFBdEM7QUFBOUI7QUFBVixPQUFQO0FBQ0g7Ozt1Q0FDa0JZLE0sRUFBUVosUSxFQUFVO0FBQ2pDLGFBQU87QUFBRWdDLGNBQU0sRUFBRTtBQUFFQyxjQUFJLEVBQUUsV0FBUjtBQUFxQkMsaUJBQU8sRUFBRTtBQUFFRCxnQkFBSSxFQUFFLFlBQVI7QUFBc0JFLGdCQUFJLEVBQUUsQ0FBQ3ZCLE1BQUQsQ0FBNUI7QUFBc0NaLG9CQUFRLEVBQVJBO0FBQXRDO0FBQTlCO0FBQVYsT0FBUDtBQUNIOzs7Ozs7QUFFTCxJQUFNb0MsTUFBTSxHQUFHO0FBQ1hDLFFBQU0sRUFBRSxrQkFBTTtBQUNWLFdBQU87QUFDSEMsU0FBRyxFQUFFeEM7QUFERixLQUFQO0FBR0g7QUFMVSxDQUFmO0FBT2VzQyxxRUFBZixFIiwiZmlsZSI6IjQyNzc2M2Q5YzNkNDUxNzVmNjYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDYXJkcywgaXNBbGxvd2VkRGVjayB9IGZyb20gJy4vZ2FtZSc7XG5jbGFzcyBUYWtlU2l4Qm90IHtcbiAgICBwbGF5KHN0YXRlLCBwbGF5ZXJJRCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmN0eC5waGFzZSA9PT0gJ0NBUkRfU0VMRUNUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNhcmQgPSBNYXRoLmZsb29yKHN0YXRlLkcucGxheWVyc1twbGF5ZXJJRF0uY2FyZHMubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZVNlbGVjdENhcmRNb3ZlKHJhbmRvbUNhcmQsIHBsYXllcklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2tJZCA9IHRoaXMuZ2V0QmVzdERlY2soc3RhdGUuRywgcGxheWVySUQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VTZWxlY3REZWNrTW92ZShkZWNrSWQsIHBsYXllcklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEJlc3REZWNrKEcsIHBsYXllcklEKSB7XG4gICAgICAgIGNvbnN0IHsgY2FyZCwgbGFzdENhcmRzIH0gPSBnZXRDYXJkcyhHLCBwbGF5ZXJJRCk7XG4gICAgICAgIGlmIChjYXJkLm51bWJlciA8IGxhc3RDYXJkc1swXS5udW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBHLmRlY2tzXG4gICAgICAgICAgICAgICAgLm1hcCgoZGVjaywgaSkgPT4gKHsgdmFsdWU6IGRlY2sucmVkdWNlKChhY2MsIGNhcmQpID0+IGFjYyArIGNhcmQudmFsdWUsIDApLCBpZDogaSB9KSwgMClcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS52YWx1ZSAtIGIudmFsdWUpWzBdLmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEcuZGVja3MuZmluZEluZGV4KChkZWNrLCBpKSA9PiBpc0FsbG93ZWREZWNrKEcsIGksIHBsYXllcklEKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFrZVNlbGVjdENhcmRNb3ZlKGNhcmRJZCwgcGxheWVySUQpIHtcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiB7IHR5cGU6ICdNQUtFX01PVkUnLCBwYXlsb2FkOiB7IHR5cGU6ICdzZWxlY3RDYXJkJywgYXJnczogW2NhcmRJZF0sIHBsYXllcklEIH0gfSB9O1xuICAgIH1cbiAgICBtYWtlU2VsZWN0RGVja01vdmUoZGVja0lkLCBwbGF5ZXJJRCkge1xuICAgICAgICByZXR1cm4geyBhY3Rpb246IHsgdHlwZTogJ01BS0VfTU9WRScsIHBheWxvYWQ6IHsgdHlwZTogJ3NlbGVjdERlY2snLCBhcmdzOiBbZGVja0lkXSwgcGxheWVySUQgfSB9IH07XG4gICAgfVxufVxuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9BSTogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm90OiBUYWtlU2l4Qm90LFxuICAgICAgICB9O1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==