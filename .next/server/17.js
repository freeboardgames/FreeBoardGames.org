exports.ids = [17];
exports.modules = {

/***/ "./src/games/takesix/ai.ts":
/*!*********************************!*\
  !*** ./src/games/takesix/ai.ts ***!
  \*********************************/
/*! exports provided: TakeSixBot, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSixBot", function() { return TakeSixBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/takesix/game.ts");
function cov_2insq324cv() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/takesix/ai.ts";
  var hash = "d42cc8ee4b671337da1fe8f594258b5ff23c5fec";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/takesix/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "2": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 93
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 59
        }
      },
      "4": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "5": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 55
        }
      },
      "6": {
        start: {
          line: 24,
          column: 32
        },
        end: {
          line: 24,
          column: 53
        }
      },
      "7": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "8": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 28,
          column: 49
        }
      },
      "9": {
        start: {
          line: 27,
          column: 27
        },
        end: {
          line: 27,
          column: 92
        }
      },
      "10": {
        start: {
          line: 27,
          column: 63
        },
        end: {
          line: 27,
          column: 79
        }
      },
      "11": {
        start: {
          line: 28,
          column: 24
        },
        end: {
          line: 28,
          column: 41
        }
      },
      "12": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 75
        }
      },
      "13": {
        start: {
          line: 30,
          column: 44
        },
        end: {
          line: 30,
          column: 73
        }
      },
      "14": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 104
        }
      },
      "15": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 104
        }
      },
      "16": {
        start: {
          line: 43,
          column: 33
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "17": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 22
        }
      },
      "18": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "19": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 50
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 14
          }
        },
        loc: {
          start: {
            line: 27,
            column: 27
          },
          end: {
            line: 27,
            column: 92
          }
        },
        line: 27
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 48
          },
          end: {
            line: 27,
            column: 49
          }
        },
        loc: {
          start: {
            line: 27,
            column: 63
          },
          end: {
            line: 27,
            column: 79
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 28,
            column: 14
          },
          end: {
            line: 28,
            column: 15
          }
        },
        loc: {
          start: {
            line: 28,
            column: 24
          },
          end: {
            line: 28,
            column: 41
          }
        },
        line: 28
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 30,
            column: 31
          },
          end: {
            line: 30,
            column: 32
          }
        },
        loc: {
          start: {
            line: 30,
            column: 44
          },
          end: {
            line: 30,
            column: 73
          }
        },
        line: 30
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 55
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 34
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 55
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 38
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 44,
            column: 11
          }
        },
        loc: {
          start: {
            line: 44,
            column: 16
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 44
      },
      "9": {
        name: "sleep",
        decl: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 49,
            column: 14
          }
        },
        loc: {
          start: {
            line: 49,
            column: 37
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 49
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 50,
            column: 21
          },
          end: {
            line: 50,
            column: 22
          }
        },
        loc: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 50
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 25
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d42cc8ee4b671337da1fe8f594258b5ff23c5fec"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2insq324cv = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2insq324cv();

class TakeSixBot {
  async play(state, playerID) {
    cov_2insq324cv().f[0]++;
    cov_2insq324cv().s[0]++;
    await sleep(300);
    cov_2insq324cv().s[1]++;

    if (state.ctx.phase === 'CARD_SELECT') {
      cov_2insq324cv().b[0][0]++;
      // const randomCard = Math.floor(state.G.players[playerID as any].cards.length * Math.random());  // https://github.com/babel/minify/issues/904
      const randomCard = (cov_2insq324cv().s[2]++, state.G.players[playerID].cards.length * Math.random() << 0);
      cov_2insq324cv().s[3]++;
      return this.makeSelectCardMove(randomCard, playerID);
    } else {
      cov_2insq324cv().b[0][1]++;
      const deckId = (cov_2insq324cv().s[4]++, this.getBestDeck(state.G, playerID));
      cov_2insq324cv().s[5]++;
      return this.makeSelectDeckMove(deckId, playerID);
    }
  }

  getBestDeck(G, playerID) {
    cov_2insq324cv().f[1]++;
    const {
      card,
      lastCards
    } = (cov_2insq324cv().s[6]++, Object(_game__WEBPACK_IMPORTED_MODULE_0__["getCards"])(G, playerID));
    cov_2insq324cv().s[7]++;

    if (card.number < lastCards[0].number) {
      cov_2insq324cv().b[1][0]++;
      cov_2insq324cv().s[8]++;
      return G.decks.map((deck, i) => {
        cov_2insq324cv().f[2]++;
        cov_2insq324cv().s[9]++;
        return {
          value: deck.reduce((acc, card) => {
            cov_2insq324cv().f[3]++;
            cov_2insq324cv().s[10]++;
            return acc + card.value;
          }, 0),
          id: i
        };
      }, 0).sort((a, b) => {
        cov_2insq324cv().f[4]++;
        cov_2insq324cv().s[11]++;
        return a.value - b.value;
      })[0].id;
    } else {
      cov_2insq324cv().b[1][1]++;
      cov_2insq324cv().s[12]++;
      return G.decks.findIndex((deck, i) => {
        cov_2insq324cv().f[5]++;
        cov_2insq324cv().s[13]++;
        return Object(_game__WEBPACK_IMPORTED_MODULE_0__["isAllowedDeck"])(G, i, playerID);
      });
    }
  }

  makeSelectCardMove(cardId, playerID) {
    cov_2insq324cv().f[6]++;
    cov_2insq324cv().s[14]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'selectCard',
          args: [cardId],
          playerID
        }
      }
    };
  }

  makeSelectDeckMove(deckId, playerID) {
    cov_2insq324cv().f[7]++;
    cov_2insq324cv().s[15]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'selectDeck',
          args: [deckId],
          playerID
        }
      }
    };
  }

}
const config = (cov_2insq324cv().s[16]++, {
  bgioAI: () => {
    cov_2insq324cv().f[8]++;
    cov_2insq324cv().s[17]++;
    return TakeSixBot;
  }
});

function sleep(milliseconds) {
  cov_2insq324cv().f[9]++;
  cov_2insq324cv().s[18]++;
  return new Promise(resolve => {
    cov_2insq324cv().f[10]++;
    cov_2insq324cv().s[19]++;
    setTimeout(resolve, milliseconds);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (config);

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
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/core */ "boardgame.io/core");
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
function cov_2q1hr4437t() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/takesix/game.ts";
  var hash = "74ceab7b19722f8eca237a99470c0a7098ba15d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/takesix/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 29
        }
      },
      "1": {
        start: {
          line: 23,
          column: 30
        },
        end: {
          line: 23,
          column: 51
        }
      },
      "2": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 16
        }
      },
      "4": {
        start: {
          line: 27,
          column: 26
        },
        end: {
          line: 27,
          column: 91
        }
      },
      "5": {
        start: {
          line: 27,
          column: 48
        },
        end: {
          line: 27,
          column: 90
        }
      },
      "6": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 35
        }
      },
      "7": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 29,
          column: 18
        }
      },
      "8": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "9": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "10": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 17
        }
      },
      "11": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 23
        }
      },
      "12": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 29
        }
      },
      "13": {
        start: {
          line: 40,
          column: 20
        },
        end: {
          line: 40,
          column: 80
        }
      },
      "14": {
        start: {
          line: 40,
          column: 42
        },
        end: {
          line: 40,
          column: 63
        }
      },
      "15": {
        start: {
          line: 41,
          column: 15
        },
        end: {
          line: 41,
          column: 54
        }
      },
      "16": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 40
        }
      },
      "17": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 59,
          column: 4
        }
      },
      "18": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 65,
          column: 3
        }
      },
      "19": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 24
        }
      },
      "20": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 76,
          column: 4
        }
      },
      "21": {
        start: {
          line: 73,
          column: 73
        },
        end: {
          line: 73,
          column: 85
        }
      },
      "22": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 85,
          column: 39
        }
      },
      "23": {
        start: {
          line: 81,
          column: 25
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "24": {
        start: {
          line: 83,
          column: 55
        },
        end: {
          line: 83,
          column: 71
        }
      },
      "25": {
        start: {
          line: 85,
          column: 20
        },
        end: {
          line: 85,
          column: 37
        }
      },
      "26": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 91,
          column: 3
        }
      },
      "27": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 24
        }
      },
      "28": {
        start: {
          line: 92,
          column: 30
        },
        end: {
          line: 92,
          column: 55
        }
      },
      "29": {
        start: {
          line: 96,
          column: 2
        },
        end: {
          line: 98,
          column: 3
        }
      },
      "30": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 40
        }
      },
      "31": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 107,
          column: 4
        }
      },
      "32": {
        start: {
          line: 110,
          column: 30
        },
        end: {
          line: 215,
          column: 1
        }
      },
      "33": {
        start: {
          line: 119,
          column: 30
        },
        end: {
          line: 119,
          column: 76
        }
      },
      "34": {
        start: {
          line: 119,
          column: 56
        },
        end: {
          line: 119,
          column: 75
        }
      },
      "35": {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 120,
          column: 38
        }
      },
      "36": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 124,
          column: 10
        }
      },
      "37": {
        start: {
          line: 123,
          column: 49
        },
        end: {
          line: 123,
          column: 59
        }
      },
      "38": {
        start: {
          line: 123,
          column: 76
        },
        end: {
          line: 123,
          column: 92
        }
      },
      "39": {
        start: {
          line: 130,
          column: 10
        },
        end: {
          line: 132,
          column: 11
        }
      },
      "40": {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 34
        }
      },
      "41": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 143,
          column: 9
        }
      },
      "42": {
        start: {
          line: 142,
          column: 10
        },
        end: {
          line: 142,
          column: 23
        }
      },
      "43": {
        start: {
          line: 148,
          column: 32
        },
        end: {
          line: 148,
          column: 43
        }
      },
      "44": {
        start: {
          line: 149,
          column: 23
        },
        end: {
          line: 149,
          column: 24
        }
      },
      "45": {
        start: {
          line: 151,
          column: 12
        },
        end: {
          line: 153,
          column: 13
        }
      },
      "46": {
        start: {
          line: 152,
          column: 14
        },
        end: {
          line: 152,
          column: 42
        }
      },
      "47": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 167,
          column: 5
        }
      },
      "48": {
        start: {
          line: 161,
          column: 25
        },
        end: {
          line: 161,
          column: 41
        }
      },
      "49": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 166,
          column: 7
        }
      },
      "50": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 30
        }
      },
      "51": {
        start: {
          line: 165,
          column: 8
        },
        end: {
          line: 165,
          column: 61
        }
      },
      "52": {
        start: {
          line: 177,
          column: 17
        },
        end: {
          line: 191,
          column: 5
        }
      },
      "53": {
        start: {
          line: 179,
          column: 20
        },
        end: {
          line: 179,
          column: 21
        }
      },
      "54": {
        start: {
          line: 180,
          column: 8
        },
        end: {
          line: 188,
          column: 9
        }
      },
      "55": {
        start: {
          line: 181,
          column: 10
        },
        end: {
          line: 181,
          column: 20
        }
      },
      "56": {
        start: {
          line: 182,
          column: 15
        },
        end: {
          line: 188,
          column: 9
        }
      },
      "57": {
        start: {
          line: 183,
          column: 10
        },
        end: {
          line: 183,
          column: 20
        }
      },
      "58": {
        start: {
          line: 184,
          column: 15
        },
        end: {
          line: 188,
          column: 9
        }
      },
      "59": {
        start: {
          line: 185,
          column: 10
        },
        end: {
          line: 185,
          column: 20
        }
      },
      "60": {
        start: {
          line: 186,
          column: 15
        },
        end: {
          line: 188,
          column: 9
        }
      },
      "61": {
        start: {
          line: 187,
          column: 10
        },
        end: {
          line: 187,
          column: 20
        }
      },
      "62": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 53
        }
      },
      "63": {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 213,
          column: 6
        }
      },
      "64": {
        start: {
          line: 197,
          column: 19
        },
        end: {
          line: 197,
          column: 29
        }
      },
      "65": {
        start: {
          line: 199,
          column: 23
        },
        end: {
          line: 199,
          column: 29
        }
      },
      "66": {
        start: {
          line: 200,
          column: 64
        },
        end: {
          line: 210,
          column: 7
        }
      },
      "67": {
        start: {
          line: 204,
          column: 25
        },
        end: {
          line: 204,
          column: 35
        }
      },
      "68": {
        start: {
          line: 205,
          column: 12
        },
        end: {
          line: 205,
          column: 27
        }
      },
      "69": {
        start: {
          line: 206,
          column: 12
        },
        end: {
          line: 206,
          column: 24
        }
      },
      "70": {
        start: {
          line: 217,
          column: 27
        },
        end: {
          line: 217,
          column: 37
        }
      },
      "71": {
        start: {
          line: 218,
          column: 34
        },
        end: {
          line: 221,
          column: 2
        }
      },
      "72": {
        start: {
          line: 218,
          column: 54
        },
        end: {
          line: 221,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "sortCards",
        decl: {
          start: {
            line: 18,
            column: 9
          },
          end: {
            line: 18,
            column: 18
          }
        },
        loc: {
          start: {
            line: 18,
            column: 37
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "isAllowedDeck",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 29
          }
        },
        loc: {
          start: {
            line: 22,
            column: 80
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 38
          },
          end: {
            line: 27,
            column: 39
          }
        },
        loc: {
          start: {
            line: 27,
            column: 48
          },
          end: {
            line: 27,
            column: 90
          }
        },
        line: 27
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 17
          }
        },
        loc: {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 30
      },
      "4": {
        name: "getCards",
        decl: {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 39,
            column: 24
          }
        },
        loc: {
          start: {
            line: 39,
            column: 61
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 39
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 32
          },
          end: {
            line: 40,
            column: 33
          }
        },
        loc: {
          start: {
            line: 40,
            column: 42
          },
          end: {
            line: 40,
            column: 63
          }
        },
        line: 40
      },
      "6": {
        name: "moveToHand",
        decl: {
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 45,
            column: 19
          }
        },
        loc: {
          start: {
            line: 45,
            column: 75
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 45
      },
      "7": {
        name: "selectCard",
        decl: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 62,
            column: 26
          }
        },
        loc: {
          start: {
            line: 62,
            column: 66
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 62
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 73,
            column: 59
          },
          end: {
            line: 73,
            column: 60
          }
        },
        loc: {
          start: {
            line: 73,
            column: 73
          },
          end: {
            line: 73,
            column: 85
          }
        },
        line: 73
      },
      "9": {
        name: "getScoreBoard",
        decl: {
          start: {
            line: 79,
            column: 16
          },
          end: {
            line: 79,
            column: 29
          }
        },
        loc: {
          start: {
            line: 79,
            column: 47
          },
          end: {
            line: 86,
            column: 1
          }
        },
        line: 79
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 9
          },
          end: {
            line: 81,
            column: 10
          }
        },
        loc: {
          start: {
            line: 81,
            column: 25
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 83,
            column: 40
          },
          end: {
            line: 83,
            column: 41
          }
        },
        loc: {
          start: {
            line: 83,
            column: 55
          },
          end: {
            line: 83,
            column: 71
          }
        },
        line: 83
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 85,
            column: 11
          }
        },
        loc: {
          start: {
            line: 85,
            column: 20
          },
          end: {
            line: 85,
            column: 37
          }
        },
        line: 85
      },
      "13": {
        name: "selectDeck",
        decl: {
          start: {
            line: 88,
            column: 16
          },
          end: {
            line: 88,
            column: 26
          }
        },
        loc: {
          start: {
            line: 88,
            column: 66
          },
          end: {
            line: 108,
            column: 1
          }
        },
        line: 88
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 118,
            column: 13
          },
          end: {
            line: 118,
            column: 14
          }
        },
        loc: {
          start: {
            line: 118,
            column: 24
          },
          end: {
            line: 125,
            column: 7
          }
        },
        line: 118
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 119,
            column: 44
          },
          end: {
            line: 119,
            column: 45
          }
        },
        loc: {
          start: {
            line: 119,
            column: 56
          },
          end: {
            line: 119,
            column: 75
          }
        },
        line: 119
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 123,
            column: 39
          },
          end: {
            line: 123,
            column: 40
          }
        },
        loc: {
          start: {
            line: 123,
            column: 49
          },
          end: {
            line: 123,
            column: 59
          }
        },
        line: 123
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 123,
            column: 65
          },
          end: {
            line: 123,
            column: 66
          }
        },
        loc: {
          start: {
            line: 123,
            column: 76
          },
          end: {
            line: 123,
            column: 92
          }
        },
        line: 123
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 129,
            column: 16
          },
          end: {
            line: 129,
            column: 17
          }
        },
        loc: {
          start: {
            line: 129,
            column: 28
          },
          end: {
            line: 133,
            column: 9
          }
        },
        line: 129
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 140,
            column: 13
          },
          end: {
            line: 140,
            column: 14
          }
        },
        loc: {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 144,
            column: 7
          }
        },
        line: 140
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 148,
            column: 21
          },
          end: {
            line: 148,
            column: 22
          }
        },
        loc: {
          start: {
            line: 148,
            column: 32
          },
          end: {
            line: 148,
            column: 43
          }
        },
        line: 148
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 149,
            column: 17
          },
          end: {
            line: 149,
            column: 18
          }
        },
        loc: {
          start: {
            line: 149,
            column: 23
          },
          end: {
            line: 149,
            column: 24
          }
        },
        line: 149
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 150,
            column: 16
          },
          end: {
            line: 150,
            column: 17
          }
        },
        loc: {
          start: {
            line: 150,
            column: 28
          },
          end: {
            line: 154,
            column: 11
          }
        },
        line: 150
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 159,
            column: 9
          },
          end: {
            line: 159,
            column: 10
          }
        },
        loc: {
          start: {
            line: 159,
            column: 20
          },
          end: {
            line: 168,
            column: 3
          }
        },
        line: 159
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 175,
            column: 9
          },
          end: {
            line: 175,
            column: 10
          }
        },
        loc: {
          start: {
            line: 175,
            column: 22
          },
          end: {
            line: 214,
            column: 3
          }
        },
        line: 175
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 178,
            column: 33
          },
          end: {
            line: 178,
            column: 34
          }
        },
        loc: {
          start: {
            line: 178,
            column: 43
          },
          end: {
            line: 190,
            column: 7
          }
        },
        line: 178
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 197,
            column: 13
          },
          end: {
            line: 197,
            column: 14
          }
        },
        loc: {
          start: {
            line: 197,
            column: 19
          },
          end: {
            line: 197,
            column: 29
          }
        },
        line: 197
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 199,
            column: 13
          },
          end: {
            line: 199,
            column: 14
          }
        },
        loc: {
          start: {
            line: 199,
            column: 23
          },
          end: {
            line: 199,
            column: 29
          }
        },
        line: 199
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 200,
            column: 53
          },
          end: {
            line: 200,
            column: 54
          }
        },
        loc: {
          start: {
            line: 200,
            column: 64
          },
          end: {
            line: 210,
            column: 7
          }
        },
        line: 200
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 203,
            column: 15
          },
          end: {
            line: 203,
            column: 16
          }
        },
        loc: {
          start: {
            line: 203,
            column: 21
          },
          end: {
            line: 207,
            column: 11
          }
        },
        line: 203
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 218,
            column: 34
          },
          end: {
            line: 218,
            column: 35
          }
        },
        loc: {
          start: {
            line: 218,
            column: 54
          },
          end: {
            line: 221,
            column: 1
          }
        },
        line: 218
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 16
          }
        }, {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 31,
            column: 30
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        }, {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        }],
        line: 63
      },
      "4": {
        loc: {
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 63,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 63,
            column: 12
          }
        }, {
          start: {
            line: 63,
            column: 16
          },
          end: {
            line: 63,
            column: 65
          }
        }],
        line: 63
      },
      "5": {
        loc: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        }, {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        }],
        line: 89
      },
      "6": {
        loc: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        }, {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        }],
        line: 96
      },
      "7": {
        loc: {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 39
          }
        }, {
          start: {
            line: 96,
            column: 43
          },
          end: {
            line: 96,
            column: 67
          }
        }],
        line: 96
      },
      "8": {
        loc: {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        }, {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        }],
        line: 130
      },
      "9": {
        loc: {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        }, {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        }],
        line: 141
      },
      "10": {
        loc: {
          start: {
            line: 151,
            column: 12
          },
          end: {
            line: 153,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 151,
            column: 12
          },
          end: {
            line: 153,
            column: 13
          }
        }, {
          start: {
            line: 151,
            column: 12
          },
          end: {
            line: 153,
            column: 13
          }
        }],
        line: 151
      },
      "11": {
        loc: {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        }, {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        }],
        line: 160
      },
      "12": {
        loc: {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        }, {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        }],
        line: 162
      },
      "13": {
        loc: {
          start: {
            line: 180,
            column: 8
          },
          end: {
            line: 188,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 8
          },
          end: {
            line: 188,
            column: 9
          }
        }, {
          start: {
            line: 180,
            column: 8
          },
          end: {
            line: 188,
            column: 9
          }
        }],
        line: 180
      },
      "14": {
        loc: {
          start: {
            line: 182,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 182,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }, {
          start: {
            line: 182,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }],
        line: 182
      },
      "15": {
        loc: {
          start: {
            line: 184,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 184,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }, {
          start: {
            line: 184,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }],
        line: 184
      },
      "16": {
        loc: {
          start: {
            line: 186,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 186,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }, {
          start: {
            line: 186,
            column: 15
          },
          end: {
            line: 188,
            column: 9
          }
        }],
        line: 186
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "74ceab7b19722f8eca237a99470c0a7098ba15d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2q1hr4437t = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2q1hr4437t();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function sortCards(a, b) {
  cov_2q1hr4437t().f[0]++;
  cov_2q1hr4437t().s[0]++;
  return a.number - b.number;
}

function isAllowedDeck(G, deckId, playerID) {
  cov_2q1hr4437t().f[1]++;
  const {
    card,
    lastCards
  } = (cov_2q1hr4437t().s[1]++, getCards(G, playerID));
  cov_2q1hr4437t().s[2]++;

  if (card.number < lastCards[0].number) {
    cov_2q1hr4437t().b[0][0]++;
    cov_2q1hr4437t().s[3]++;
    return true;
  } else {
    cov_2q1hr4437t().b[0][1]++;
  }

  const diffs = (cov_2q1hr4437t().s[4]++, G.decks.map(deck => {
    cov_2q1hr4437t().f[2]++;
    cov_2q1hr4437t().s[5]++;
    return card.number - deck[deck.length - 1].number;
  }));
  let min = (cov_2q1hr4437t().s[6]++, Number.MAX_SAFE_INTEGER);
  let minIndex = (cov_2q1hr4437t().s[7]++, 0);
  cov_2q1hr4437t().s[8]++;
  diffs.forEach((diff, index) => {
    cov_2q1hr4437t().f[3]++;
    cov_2q1hr4437t().s[9]++;

    if ((cov_2q1hr4437t().b[2][0]++, diff > 0) && (cov_2q1hr4437t().b[2][1]++, diff < min)) {
      cov_2q1hr4437t().b[1][0]++;
      cov_2q1hr4437t().s[10]++;
      min = diff;
      cov_2q1hr4437t().s[11]++;
      minIndex = index;
    } else {
      cov_2q1hr4437t().b[1][1]++;
    }
  });
  cov_2q1hr4437t().s[12]++;
  return minIndex === deckId;
}
function getCards(G, playerID) {
  cov_2q1hr4437t().f[4]++;
  const lastCards = (cov_2q1hr4437t().s[13]++, G.decks.map(deck => {
    cov_2q1hr4437t().f[5]++;
    cov_2q1hr4437t().s[14]++;
    return deck[deck.length - 1];
  }).sort(sortCards));
  const card = (cov_2q1hr4437t().s[15]++, G.players[playerID].selectedCard);
  cov_2q1hr4437t().s[16]++;
  return {
    card,
    lastCards: lastCards
  };
}

function moveToHand(G, ctx, card, deckId) {
  cov_2q1hr4437t().f[6]++;
  cov_2q1hr4437t().s[17]++;
  return _objectSpread({}, G, {
    players: Object.values(_objectSpread({}, G.players, {
      [ctx.playerID]: _objectSpread({}, G.players[ctx.playerID], {
        penaltyCards: [...G.players[ctx.playerID].penaltyCards, ...G.decks[deckId]]
      })
    })),
    decks: Object.values(_objectSpread({}, G.decks, {
      [deckId]: [card]
    }))
  });
}

function selectCard(G, ctx, id) {
  cov_2q1hr4437t().f[7]++;
  cov_2q1hr4437t().s[18]++;

  if ((cov_2q1hr4437t().b[4][0]++, id < 0) || (cov_2q1hr4437t().b[4][1]++, id >= G.players[ctx.playerID].cards.length)) {
    cov_2q1hr4437t().b[3][0]++;
    cov_2q1hr4437t().s[19]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_2q1hr4437t().b[3][1]++;
  }

  cov_2q1hr4437t().s[20]++;
  return _objectSpread({}, G, {
    players: Object.values(_objectSpread({}, G.players, {
      [ctx.playerID]: _objectSpread({}, G.players[ctx.playerID], {
        selectedCard: G.players[ctx.playerID].cards[id],
        // Set card as selected
        cards: G.players[ctx.playerID].cards.filter((_, index) => {
          cov_2q1hr4437t().f[8]++;
          cov_2q1hr4437t().s[21]++;
          return index !== id;
        }) // Remove card from player's deck

      })
    }))
  });
}
function getScoreBoard(G) {
  cov_2q1hr4437t().f[9]++;
  cov_2q1hr4437t().s[22]++;
  return G.players.map((player, i) => {
    cov_2q1hr4437t().f[10]++;
    cov_2q1hr4437t().s[23]++;
    return {
      playerID: i.toString(),
      score: player.penaltyCards.reduce((acc, card) => {
        cov_2q1hr4437t().f[11]++;
        cov_2q1hr4437t().s[24]++;
        return acc + card.value;
      }, 0)
    };
  }).sort((a, b) => {
    cov_2q1hr4437t().f[12]++;
    cov_2q1hr4437t().s[25]++;
    return a.score - b.score;
  });
}
function selectDeck(G, ctx, id) {
  cov_2q1hr4437t().f[13]++;
  cov_2q1hr4437t().s[26]++;

  if (!isAllowedDeck(G, id, ctx.playerID)) {
    cov_2q1hr4437t().b[5][0]++;
    cov_2q1hr4437t().s[27]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_2q1hr4437t().b[5][1]++;
  }

  const {
    card,
    lastCards
  } = (cov_2q1hr4437t().s[28]++, getCards(G, ctx.playerID)); // Card is lower than every in deck OR
  // card is #6 move all cards from deck to player's hand

  cov_2q1hr4437t().s[29]++;

  if ((cov_2q1hr4437t().b[7][0]++, card.number < lastCards[0].number) || (cov_2q1hr4437t().b[7][1]++, G.decks[id].length === 5)) {
    cov_2q1hr4437t().b[6][0]++;
    cov_2q1hr4437t().s[30]++;
    return moveToHand(G, ctx, card, id);
  } else {
    cov_2q1hr4437t().b[6][1]++;
  } // Append card


  cov_2q1hr4437t().s[31]++;
  return _objectSpread({}, G, {
    decks: Object.values(_objectSpread({}, G.decks, {
      [id]: [...G.decks[id], card]
    }))
  });
}
const GameConfig = (cov_2q1hr4437t().s[32]++, {
  name: 'takesix',
  phases: {
    // Everyone needs to select card
    CARD_SELECT: {
      moves: {
        selectCard
      },
      next: 'DECK_SELECT',
      // Determine player order
      onEnd: G => {
        cov_2q1hr4437t().f[14]++;
        const selectedCards = (cov_2q1hr4437t().s[33]++, G.players.map(player => {
          cov_2q1hr4437t().f[15]++;
          cov_2q1hr4437t().s[34]++;
          return player.selectedCard;
        }));
        cov_2q1hr4437t().s[35]++;
        selectedCards.sort(sortCards);
        cov_2q1hr4437t().s[36]++;
        return _objectSpread({}, G, {
          cardOrder: selectedCards.map(card => {
            cov_2q1hr4437t().f[16]++;
            cov_2q1hr4437t().s[37]++;
            return card.owner;
          }).map(owner => {
            cov_2q1hr4437t().f[17]++;
            cov_2q1hr4437t().s[38]++;
            return owner.toString();
          })
        });
      },
      start: true,
      turn: {
        activePlayers: boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["ActivePlayers"].ALL_ONCE,
        onMove: (_, ctx) => {
          cov_2q1hr4437t().f[18]++;
          cov_2q1hr4437t().s[39]++;

          if (ctx.activePlayers === null) {
            cov_2q1hr4437t().b[8][0]++;
            cov_2q1hr4437t().s[40]++;
            ctx.events.endPhase();
          } else {
            cov_2q1hr4437t().b[8][1]++;
          }
        }
      }
    },
    // Select deck
    DECK_SELECT: {
      moves: {
        selectDeck
      },
      next: 'CARD_SELECT',
      onEnd: G => {
        cov_2q1hr4437t().f[19]++;
        cov_2q1hr4437t().s[41]++;

        if (G.players[0].cards.length === 0) {
          cov_2q1hr4437t().b[9][0]++;
          cov_2q1hr4437t().s[42]++;
          G.end = true;
        } else {
          cov_2q1hr4437t().b[9][1]++;
        }
      },
      turn: {
        moveLimit: 1,
        order: {
          playOrder: G => {
            cov_2q1hr4437t().f[20]++;
            cov_2q1hr4437t().s[43]++;
            return G.cardOrder;
          },
          first: () => {
            cov_2q1hr4437t().f[21]++;
            cov_2q1hr4437t().s[44]++;
            return 0;
          },
          next: (_, ctx) => {
            cov_2q1hr4437t().f[22]++;
            cov_2q1hr4437t().s[45]++;

            if (ctx.playOrderPos < ctx.playOrder.length - 1) {
              cov_2q1hr4437t().b[10][0]++;
              cov_2q1hr4437t().s[46]++;
              return ctx.playOrderPos + 1;
            } else {
              cov_2q1hr4437t().b[10][1]++;
            }
          }
        }
      }
    }
  },
  endIf: G => {
    cov_2q1hr4437t().f[23]++;
    cov_2q1hr4437t().s[47]++;

    if (G.end === true) {
      cov_2q1hr4437t().b[11][0]++;
      const scoreboard = (cov_2q1hr4437t().s[48]++, getScoreBoard(G));
      cov_2q1hr4437t().s[49]++;

      if (scoreboard[0].score === scoreboard[1].score) {
        cov_2q1hr4437t().b[12][0]++;
        cov_2q1hr4437t().s[50]++;
        return {
          draw: true
        };
      } else {
        cov_2q1hr4437t().b[12][1]++;
        cov_2q1hr4437t().s[51]++;
        return {
          winner: scoreboard[0].playerID.toString()
        };
      }
    } else {
      cov_2q1hr4437t().b[11][1]++;
    }
  },
  events: {
    endTurn: false,
    endGame: false,
    endPhase: false
  },
  // playerView: PlayerView.STRIP_SECRETS,
  setup: ctx => {
    cov_2q1hr4437t().f[24]++;
    // Generate deck
    const deck = (cov_2q1hr4437t().s[52]++, ctx.random.Shuffle(new Array(104).fill(0).map((_, i) => {
      cov_2q1hr4437t().f[25]++;
      let value = (cov_2q1hr4437t().s[53]++, 1);
      cov_2q1hr4437t().s[54]++;

      if ((i + 1) % 55 === 0) {
        cov_2q1hr4437t().b[13][0]++;
        cov_2q1hr4437t().s[55]++;
        value = 7;
      } else {
        cov_2q1hr4437t().b[13][1]++;
        cov_2q1hr4437t().s[56]++;

        if ((i + 1) % 11 === 0) {
          cov_2q1hr4437t().b[14][0]++;
          cov_2q1hr4437t().s[57]++;
          value = 5;
        } else {
          cov_2q1hr4437t().b[14][1]++;
          cov_2q1hr4437t().s[58]++;

          if ((i + 1) % 10 === 0) {
            cov_2q1hr4437t().b[15][0]++;
            cov_2q1hr4437t().s[59]++;
            value = 3;
          } else {
            cov_2q1hr4437t().b[15][1]++;
            cov_2q1hr4437t().s[60]++;

            if ((i + 1) % 5 === 0) {
              cov_2q1hr4437t().b[16][0]++;
              cov_2q1hr4437t().s[61]++;
              value = 2;
            } else {
              cov_2q1hr4437t().b[16][1]++;
            }
          }
        }
      }

      cov_2q1hr4437t().s[62]++;
      return {
        number: i + 1,
        value,
        owner: null
      };
    }))); // Set initial state

    cov_2q1hr4437t().s[63]++;
    return {
      decks: new Array(4).fill(0).map(() => {
        cov_2q1hr4437t().f[26]++;
        cov_2q1hr4437t().s[64]++;
        return deck.pop();
      }).sort(sortCards).map(card => {
        cov_2q1hr4437t().f[27]++;
        cov_2q1hr4437t().s[65]++;
        return [card];
      }),
      players: new Array(ctx.numPlayers).fill(0).map((_, i) => {
        cov_2q1hr4437t().f[28]++;
        cov_2q1hr4437t().s[66]++;
        return {
          cards: new Array(10).fill(0).map(() => {
            cov_2q1hr4437t().f[29]++;
            const card = (cov_2q1hr4437t().s[67]++, deck.pop());
            cov_2q1hr4437t().s[68]++;
            card.owner = i;
            cov_2q1hr4437t().s[69]++;
            return card;
          }).sort(sortCards),
          penaltyCards: []
        };
      }),
      cardOrder: [],
      end: false
    };
  }
});
const TakeSixGame = (cov_2q1hr4437t().s[70]++, GameConfig);
cov_2q1hr4437t().s[71]++;
const TakeSixGameForTest = override => {
  cov_2q1hr4437t().f[30]++;
  cov_2q1hr4437t().s[72]++;
  return _objectSpread({}, GameConfig, {}, override);
};

/***/ })

};;
//# sourceMappingURL=17.js.map