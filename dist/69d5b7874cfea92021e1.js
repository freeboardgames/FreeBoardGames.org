(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[5],{

/***/ "./src/games/takesix/card.ts":
/*!***********************************!*\
  !*** ./src/games/takesix/card.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(num, value, owner) {
  _classCallCheck(this, Card);

  this.number = num;
  this.value = value;
  this.owner = owner;
};



/***/ }),

/***/ "./src/games/takesix/game.ts":
/*!***********************************!*\
  !*** ./src/games/takesix/game.ts ***!
  \***********************************/
/*! exports provided: isAllowedDeck, getCards, selectCard, getScoreBoard, selectDeck, TakeSixGame, TakeSixGameForTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowedDeck", function() { return isAllowedDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCards", function() { return getCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCard", function() { return selectCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreBoard", function() { return getScoreBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDeck", function() { return selectDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSixGame", function() { return TakeSixGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSixGameForTest", function() { return TakeSixGameForTest; });
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/core */ "./node_modules/@freeboardgame.org/boardgame.io/core.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/games/takesix/card.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/games/takesix/player.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





function sortCards(a, b) {
  return a.number - b.number;
}

function isAllowedDeck(G, deckId, playerID) {
  var _getCards = getCards(G, playerID),
      card = _getCards.card,
      lastCards = _getCards.lastCards;

  if (card.number < lastCards[0].number) {
    return true;
  }

  var diffs = G.decks.map(function (deck) {
    return card.number - deck[deck.length - 1].number;
  });
  var min = Number.MAX_SAFE_INTEGER;
  var minIndex = 0;
  diffs.forEach(function (diff, index) {
    if (diff > 0 && diff < min) {
      min = diff;
      minIndex = index;
    }
  });
  return minIndex === deckId;
}
function getCards(G, playerID) {
  var lastCards = G.decks.map(function (deck) {
    return deck[deck.length - 1];
  }).sort(sortCards);
  var card = G.players[playerID].selectedCard;
  return {
    card: card,
    lastCards: lastCards
  };
}

function moveToHand(G, ctx, card, deckId) {
  return Object.assign({}, G, {
    players: Object.values(Object.assign({}, G.players, _defineProperty({}, ctx.playerID, Object.assign({}, G.players[ctx.playerID], {
      penaltyCards: [].concat(_toConsumableArray(G.players[ctx.playerID].penaltyCards), _toConsumableArray(G.decks[deckId]))
    })))),
    decks: Object.values(Object.assign({}, G.decks, _defineProperty({}, deckId, [card])))
  });
}

function selectCard(G, ctx, id) {
  if (id < 0 || id >= G.players[ctx.playerID].cards.length) {
    return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  }

  return Object.assign({}, G, {
    players: Object.values(Object.assign({}, G.players, _defineProperty({}, ctx.playerID, Object.assign({}, G.players[ctx.playerID], {
      selectedCard: G.players[ctx.playerID].cards.find(function (_, index) {
        return index === id;
      }),
      cards: G.players[ctx.playerID].cards.filter(function (_, index) {
        return index !== id;
      })
    }))))
  });
}
function getScoreBoard(G) {
  return G.players.map(function (player, i) {
    return {
      playerID: i.toString(),
      score: player.penaltyCards.reduce(function (acc, card) {
        return acc + card.value;
      }, 0)
    };
  }).sort(function (a, b) {
    return a.score - b.score;
  });
}
function selectDeck(G, ctx, id) {
  if (!isAllowedDeck(G, id, ctx.playerID)) {
    return _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  }

  var _getCards2 = getCards(G, ctx.playerID),
      card = _getCards2.card,
      lastCards = _getCards2.lastCards; // Card is lower than every in deck OR
  // card is #6 move all cards from deck to player's hand


  if (card.number < lastCards[0].number || G.decks[id].length === 5) {
    return moveToHand(G, ctx, card, id);
  } // Append card


  return Object.assign({}, G, {
    decks: Object.values(Object.assign({}, G.decks, _defineProperty({}, id, [].concat(_toConsumableArray(G.decks[id]), [card]))))
  });
}
var GameConfig = {
  name: 'takesix',
  flow: {
    endTurn: false,
    endPhase: false,
    endGame: false,
    startingPhase: 'CARD_SELECT',
    phases: {
      // Everyone needs to select card
      CARD_SELECT: {
        allowedMoves: ['selectCard'],
        turnOrder: _freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["TurnOrder"].ANY_ONCE,
        next: 'DECK_SELECT',
        // Determine player order
        onPhaseEnd: function onPhaseEnd(G) {
          var selectedCards = G.players.map(function (player) {
            return player.selectedCard;
          });
          selectedCards.sort(sortCards);
          return Object.assign({}, G, {
            cardOrder: selectedCards.map(function (card) {
              return card.owner;
            }).map(function (owner) {
              return owner.toString();
            })
          });
        }
      },
      // Select deck
      DECK_SELECT: {
        allowedMoves: ['selectDeck'],
        next: 'CARD_SELECT',
        // Implement CUSTOM_FROM_ONCE
        turnOrder: {
          playOrder: function playOrder(G) {
            return G.cardOrder;
          },
          first: function first() {
            return 0;
          },
          next: function next(_, ctx) {
            if (ctx.playOrderPos < ctx.playOrder.length - 1) {
              return ctx.playOrderPos + 1;
            }
          }
        },
        onMove: function onMove(_, ctx) {
          ctx.events.endTurn();
        },
        onPhaseEnd: function onPhaseEnd(G) {
          if (G.players[0].cards.length === 0) {
            G.end = true;
          }
        }
      }
    },
    endGameIf: function endGameIf(G) {
      if (G.end === true) {
        var scoreboard = getScoreBoard(G);

        if (scoreboard[0].score === scoreboard[1].score) {
          return {
            draw: true
          };
        } else {
          return {
            winner: scoreboard[0].playerID.toString()
          };
        }
      }
    }
  },
  // playerView: PlayerView.STRIP_SECRETS,
  setup: function setup(ctx) {
    // Generate deck
    var deck = ctx.random.Shuffle(new Array(104).fill(0).map(function (_, i) {
      var value = 1;

      if ((i + 1) % 55 === 0) {
        value = 7;
      } else if ((i + 1) % 11 === 0) {
        value = 5;
      } else if ((i + 1) % 10 === 0) {
        value = 3;
      } else if ((i + 1) % 5 === 0) {
        value = 2;
      }

      return new _card__WEBPACK_IMPORTED_MODULE_1__["default"](i + 1, value, null);
    })); // Set initial state

    return {
      decks: new Array(4).fill(0).map(function () {
        return deck.pop();
      }).sort(sortCards).map(function (card) {
        return [card];
      }),
      players: new Array(ctx.numPlayers).fill(0).map(function (_, i) {
        return new _player__WEBPACK_IMPORTED_MODULE_2__["default"](new Array(10).fill(0).map(function () {
          var card = deck.pop();
          card.owner = i;
          return card;
        }).sort(sortCards), null);
      }),
      cardOrder: [],
      end: false
    };
  },
  moves: {
    selectCard: selectCard,
    selectDeck: selectDeck
  }
};
var TakeSixGame = Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])(GameConfig);
var TakeSixGameForTest = function TakeSixGameForTest(override) {
  return Object(_freeboardgame_org_boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["Game"])(Object.assign({}, GameConfig, override));
};

/***/ }),

/***/ "./src/games/takesix/player.ts":
/*!*************************************!*\
  !*** ./src/games/takesix/player.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(cards, selectedCard) {
  _classCallCheck(this, Player);

  this.cards = cards;
  this.selectedCard = selectedCard;
  this.penaltyCards = [];
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy90YWtlc2l4L2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3Rha2VzaXgvcGxheWVyLnRzIl0sIm5hbWVzIjpbIkNhcmQiLCJudW0iLCJ2YWx1ZSIsIm93bmVyIiwibnVtYmVyIiwic29ydENhcmRzIiwiYSIsImIiLCJpc0FsbG93ZWREZWNrIiwiRyIsImRlY2tJZCIsInBsYXllcklEIiwiZ2V0Q2FyZHMiLCJjYXJkIiwibGFzdENhcmRzIiwiZGlmZnMiLCJkZWNrcyIsIm1hcCIsImRlY2siLCJsZW5ndGgiLCJtaW4iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluSW5kZXgiLCJmb3JFYWNoIiwiZGlmZiIsImluZGV4Iiwic29ydCIsInBsYXllcnMiLCJzZWxlY3RlZENhcmQiLCJtb3ZlVG9IYW5kIiwiY3R4IiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWVzIiwicGVuYWx0eUNhcmRzIiwic2VsZWN0Q2FyZCIsImlkIiwiY2FyZHMiLCJJTlZBTElEX01PVkUiLCJmaW5kIiwiXyIsImZpbHRlciIsImdldFNjb3JlQm9hcmQiLCJwbGF5ZXIiLCJpIiwidG9TdHJpbmciLCJzY29yZSIsInJlZHVjZSIsImFjYyIsInNlbGVjdERlY2siLCJHYW1lQ29uZmlnIiwibmFtZSIsImZsb3ciLCJlbmRUdXJuIiwiZW5kUGhhc2UiLCJlbmRHYW1lIiwic3RhcnRpbmdQaGFzZSIsInBoYXNlcyIsIkNBUkRfU0VMRUNUIiwiYWxsb3dlZE1vdmVzIiwidHVybk9yZGVyIiwiVHVybk9yZGVyIiwiQU5ZX09OQ0UiLCJuZXh0Iiwib25QaGFzZUVuZCIsInNlbGVjdGVkQ2FyZHMiLCJjYXJkT3JkZXIiLCJERUNLX1NFTEVDVCIsInBsYXlPcmRlciIsImZpcnN0IiwicGxheU9yZGVyUG9zIiwib25Nb3ZlIiwiZXZlbnRzIiwiZW5kIiwiZW5kR2FtZUlmIiwic2NvcmVib2FyZCIsImRyYXciLCJ3aW5uZXIiLCJzZXR1cCIsInJhbmRvbSIsIlNodWZmbGUiLCJBcnJheSIsImZpbGwiLCJwb3AiLCJudW1QbGF5ZXJzIiwiUGxheWVyIiwibW92ZXMiLCJUYWtlU2l4R2FtZSIsIkdhbWUiLCJUYWtlU2l4R2FtZUZvclRlc3QiLCJvdmVycmlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEksR0FDakIsY0FBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzNCLE9BQUtDLE1BQUwsR0FBY0gsR0FBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xMO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRSxTQUFULENBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckIsU0FBT0QsQ0FBQyxDQUFDRixNQUFGLEdBQVdHLENBQUMsQ0FBQ0gsTUFBcEI7QUFDSDs7QUFDTSxTQUFTSSxhQUFULENBQXVCQyxDQUF2QixFQUEwQkMsTUFBMUIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQUEsa0JBQ25CQyxRQUFRLENBQUNILENBQUQsRUFBSUUsUUFBSixDQURXO0FBQUEsTUFDdkNFLElBRHVDLGFBQ3ZDQSxJQUR1QztBQUFBLE1BQ2pDQyxTQURpQyxhQUNqQ0EsU0FEaUM7O0FBRS9DLE1BQUlELElBQUksQ0FBQ1QsTUFBTCxHQUFjVSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFWLE1BQS9CLEVBQXVDO0FBQ25DLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQU1XLEtBQUssR0FBR04sQ0FBQyxDQUFDTyxLQUFGLENBQVFDLEdBQVIsQ0FBWSxVQUFBQyxJQUFJO0FBQUEsV0FBSUwsSUFBSSxDQUFDVCxNQUFMLEdBQWNjLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZixD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VixLQUFMLEdBQWEwQyxDQUFiO0FBQ0EsaUJBQU9oQyxJQUFQO0FBQ0gsU0FObUUsRUFPL0RjLElBUCtELENBTzFEdEIsU0FQMEQsQ0FBWCxFQU9uQyxJQVBtQyxDQUFWO0FBQUEsT0FBdEMsQ0FOTjtBQWNIOEQsZUFBUyxFQUFFLEVBZFI7QUFlSE8sU0FBRyxFQUFFO0FBZkYsS0FBUDtBQWlCSCxHQTdGYztBQThGZmEsT0FBSyxFQUFFO0FBQ0huRCxjQUFVLEVBQVZBLFVBREc7QUFFSGMsY0FBVSxFQUFWQTtBQUZHO0FBOUZRLENBQW5CO0FBbUdPLElBQU1zQyxXQUFXLEdBQUdDLGlGQUFJLENBQUN0QyxVQUFELENBQXhCO0FBQ0EsSUFBTXVDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWNGLGlGQUFJLENBQUN6RCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCa0IsVUFBbEIsRUFBOEJ3QyxRQUE5QixDQUFELENBQWxCO0FBQUEsQ0FBM0IsQzs7Ozs7Ozs7Ozs7Ozs7OztJQzdKY0wsTSxHQUNqQixnQkFBWWhELEtBQVosRUFBbUJULFlBQW5CLEVBQWlDO0FBQUE7O0FBQzdCLE9BQUtTLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtULFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsT0FBS00sWUFBTCxHQUFvQixFQUFwQjtBQUNILEMiLCJmaWxlIjoiNjlkNWI3ODc0Y2ZlYTkyMDIxZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihudW0sIHZhbHVlLCBvd25lcikge1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSwgVHVybk9yZGVyLCBJTlZBTElEX01PVkUgfSBmcm9tICdAZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvL2NvcmUnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuZnVuY3Rpb24gc29ydENhcmRzKGEsIGIpIHtcbiAgICByZXR1cm4gYS5udW1iZXIgLSBiLm51bWJlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93ZWREZWNrKEcsIGRlY2tJZCwgcGxheWVySUQpIHtcbiAgICBjb25zdCB7IGNhcmQsIGxhc3RDYXJkcyB9ID0gZ2V0Q2FyZHMoRywgcGxheWVySUQpO1xuICAgIGlmIChjYXJkLm51bWJlciA8IGxhc3RDYXJkc1swXS5udW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGRpZmZzID0gRy5kZWNrcy5tYXAoZGVjayA9PiBjYXJkLm51bWJlciAtIGRlY2tbZGVjay5sZW5ndGggLSAxXS5udW1iZXIpO1xuICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBsZXQgbWluSW5kZXggPSAwO1xuICAgIGRpZmZzLmZvckVhY2goKGRpZmYsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChkaWZmID4gMCAmJiBkaWZmIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSBkaWZmO1xuICAgICAgICAgICAgbWluSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW5JbmRleCA9PT0gZGVja0lkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRzKEcsIHBsYXllcklEKSB7XG4gICAgY29uc3QgbGFzdENhcmRzID0gRy5kZWNrcy5tYXAoZGVjayA9PiBkZWNrW2RlY2subGVuZ3RoIC0gMV0pLnNvcnQoc29ydENhcmRzKTtcbiAgICBjb25zdCBjYXJkID0gRy5wbGF5ZXJzW3BsYXllcklEXS5zZWxlY3RlZENhcmQ7XG4gICAgcmV0dXJuIHsgY2FyZDogY2FyZCwgbGFzdENhcmRzOiBsYXN0Q2FyZHMgfTtcbn1cbmZ1bmN0aW9uIG1vdmVUb0hhbmQoRywgY3R4LCBjYXJkLCBkZWNrSWQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgRywgeyBwbGF5ZXJzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcucGxheWVycywgeyBbY3R4LnBsYXllcklEXTogT2JqZWN0LmFzc2lnbih7fSwgRy5wbGF5ZXJzW2N0eC5wbGF5ZXJJRF0sIHsgcGVuYWx0eUNhcmRzOiBbLi4uRy5wbGF5ZXJzW2N0eC5wbGF5ZXJJRF0ucGVuYWx0eUNhcmRzLCAuLi5HLmRlY2tzW2RlY2tJZF1dIH0pIH0pKSwgZGVja3M6IE9iamVjdC52YWx1ZXMoT2JqZWN0LmFzc2lnbih7fSwgRy5kZWNrcywgeyBbZGVja0lkXTogW2NhcmRdIH0pKSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RDYXJkKEcsIGN0eCwgaWQpIHtcbiAgICBpZiAoaWQgPCAwIHx8IGlkID49IEcucGxheWVyc1tjdHgucGxheWVySURdLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gSU5WQUxJRF9NT1ZFO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgRywgeyBwbGF5ZXJzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcucGxheWVycywgeyBbY3R4LnBsYXllcklEXTogT2JqZWN0LmFzc2lnbih7fSwgRy5wbGF5ZXJzW2N0eC5wbGF5ZXJJRF0sIHsgc2VsZWN0ZWRDYXJkOiBHLnBsYXllcnNbY3R4LnBsYXllcklEXS5jYXJkcy5maW5kKChfLCBpbmRleCkgPT4gaW5kZXggPT09IGlkKSwgY2FyZHM6IEcucGxheWVyc1tjdHgucGxheWVySURdLmNhcmRzLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpZCkgfSkgfSkpIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjb3JlQm9hcmQoRykge1xuICAgIHJldHVybiBHLnBsYXllcnNcbiAgICAgICAgLm1hcCgocGxheWVyLCBpKSA9PiAoe1xuICAgICAgICBwbGF5ZXJJRDogaS50b1N0cmluZygpLFxuICAgICAgICBzY29yZTogcGxheWVyLnBlbmFsdHlDYXJkcy5yZWR1Y2UoKGFjYywgY2FyZCkgPT4gYWNjICsgY2FyZC52YWx1ZSwgMCksXG4gICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RGVjayhHLCBjdHgsIGlkKSB7XG4gICAgaWYgKCFpc0FsbG93ZWREZWNrKEcsIGlkLCBjdHgucGxheWVySUQpKSB7XG4gICAgICAgIHJldHVybiBJTlZBTElEX01PVkU7XG4gICAgfVxuICAgIGNvbnN0IHsgY2FyZCwgbGFzdENhcmRzIH0gPSBnZXRDYXJkcyhHLCBjdHgucGxheWVySUQpO1xuICAgIC8vIENhcmQgaXMgbG93ZXIgdGhhbiBldmVyeSBpbiBkZWNrIE9SXG4gICAgLy8gY2FyZCBpcyAjNiBtb3ZlIGFsbCBjYXJkcyBmcm9tIGRlY2sgdG8gcGxheWVyJ3MgaGFuZFxuICAgIGlmIChjYXJkLm51bWJlciA8IGxhc3RDYXJkc1swXS5udW1iZXIgfHwgRy5kZWNrc1tpZF0ubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHJldHVybiBtb3ZlVG9IYW5kKEcsIGN0eCwgY2FyZCwgaWQpO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgY2FyZFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBHLCB7IGRlY2tzOiBPYmplY3QudmFsdWVzKE9iamVjdC5hc3NpZ24oe30sIEcuZGVja3MsIHsgW2lkXTogWy4uLkcuZGVja3NbaWRdLCBjYXJkXSB9KSkgfSk7XG59XG5jb25zdCBHYW1lQ29uZmlnID0ge1xuICAgIG5hbWU6ICd0YWtlc2l4JyxcbiAgICBmbG93OiB7XG4gICAgICAgIGVuZFR1cm46IGZhbHNlLFxuICAgICAgICBlbmRQaGFzZTogZmFsc2UsXG4gICAgICAgIGVuZEdhbWU6IGZhbHNlLFxuICAgICAgICBzdGFydGluZ1BoYXNlOiAnQ0FSRF9TRUxFQ1QnLFxuICAgICAgICBwaGFzZXM6IHtcbiAgICAgICAgICAgIC8vIEV2ZXJ5b25lIG5lZWRzIHRvIHNlbGVjdCBjYXJkXG4gICAgICAgICAgICBDQVJEX1NFTEVDVDoge1xuICAgICAgICAgICAgICAgIGFsbG93ZWRNb3ZlczogWydzZWxlY3RDYXJkJ10sXG4gICAgICAgICAgICAgICAgdHVybk9yZGVyOiBUdXJuT3JkZXIuQU5ZX09OQ0UsXG4gICAgICAgICAgICAgICAgbmV4dDogJ0RFQ0tfU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgcGxheWVyIG9yZGVyXG4gICAgICAgICAgICAgICAgb25QaGFzZUVuZDogKEcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXJkcyA9IEcucGxheWVycy5tYXAocGxheWVyID0+IHBsYXllci5zZWxlY3RlZENhcmQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENhcmRzLnNvcnQoc29ydENhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIHsgY2FyZE9yZGVyOiBzZWxlY3RlZENhcmRzLm1hcChjYXJkID0+IGNhcmQub3duZXIpLm1hcChvd25lciA9PiBvd25lci50b1N0cmluZygpKSB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFNlbGVjdCBkZWNrXG4gICAgICAgICAgICBERUNLX1NFTEVDVDoge1xuICAgICAgICAgICAgICAgIGFsbG93ZWRNb3ZlczogWydzZWxlY3REZWNrJ10sXG4gICAgICAgICAgICAgICAgbmV4dDogJ0NBUkRfU0VMRUNUJyxcbiAgICAgICAgICAgICAgICAvLyBJbXBsZW1lbnQgQ1VTVE9NX0ZST01fT05DRVxuICAgICAgICAgICAgICAgIHR1cm5PcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBwbGF5T3JkZXI6IChHKSA9PiBHLmNhcmRPcmRlcixcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q6ICgpID0+IDAsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IChfLCBjdHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgucGxheU9yZGVyUG9zIDwgY3R4LnBsYXlPcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3ZlOiAoXywgY3R4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5ldmVudHMuZW5kVHVybigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25QaGFzZUVuZDogKEcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEcucGxheWVyc1swXS5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEcuZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlbmRHYW1lSWY6IChHKSA9PiB7XG4gICAgICAgICAgICBpZiAoRy5lbmQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZWJvYXJkID0gZ2V0U2NvcmVCb2FyZChHKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmVib2FyZFswXS5zY29yZSA9PT0gc2NvcmVib2FyZFsxXS5zY29yZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkcmF3OiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB3aW5uZXI6IHNjb3JlYm9hcmRbMF0ucGxheWVySUQudG9TdHJpbmcoKSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIHBsYXllclZpZXc6IFBsYXllclZpZXcuU1RSSVBfU0VDUkVUUyxcbiAgICBzZXR1cDogKGN0eCkgPT4ge1xuICAgICAgICAvLyBHZW5lcmF0ZSBkZWNrXG4gICAgICAgIGNvbnN0IGRlY2sgPSBjdHgucmFuZG9tLlNodWZmbGUobmV3IEFycmF5KDEwNCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IDE7XG4gICAgICAgICAgICBpZiAoKGkgKyAxKSAlIDU1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGkgKyAxKSAlIDExID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGkgKyAxKSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGkgKyAxKSAlIDUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IENhcmQoaSArIDEsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVja3M6IG5ldyBBcnJheSg0KVxuICAgICAgICAgICAgICAgIC5maWxsKDApXG4gICAgICAgICAgICAgICAgLm1hcCgoKSA9PiBkZWNrLnBvcCgpKVxuICAgICAgICAgICAgICAgIC5zb3J0KHNvcnRDYXJkcylcbiAgICAgICAgICAgICAgICAubWFwKGNhcmQgPT4gW2NhcmRdKSxcbiAgICAgICAgICAgIHBsYXllcnM6IG5ldyBBcnJheShjdHgubnVtUGxheWVycykuZmlsbCgwKS5tYXAoKF8sIGkpID0+IG5ldyBQbGF5ZXIobmV3IEFycmF5KDEwKVxuICAgICAgICAgICAgICAgIC5maWxsKDApXG4gICAgICAgICAgICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgY2FyZC5vd25lciA9IGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KHNvcnRDYXJkcyksIG51bGwpKSxcbiAgICAgICAgICAgIGNhcmRPcmRlcjogW10sXG4gICAgICAgICAgICBlbmQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW92ZXM6IHtcbiAgICAgICAgc2VsZWN0Q2FyZCxcbiAgICAgICAgc2VsZWN0RGVjayxcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCBUYWtlU2l4R2FtZSA9IEdhbWUoR2FtZUNvbmZpZyk7XG5leHBvcnQgY29uc3QgVGFrZVNpeEdhbWVGb3JUZXN0ID0gKG92ZXJyaWRlKSA9PiBHYW1lKE9iamVjdC5hc3NpZ24oe30sIEdhbWVDb25maWcsIG92ZXJyaWRlKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBzZWxlY3RlZENhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcyA9IGNhcmRzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZCA9IHNlbGVjdGVkQ2FyZDtcbiAgICAgICAgdGhpcy5wZW5hbHR5Q2FyZHMgPSBbXTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9