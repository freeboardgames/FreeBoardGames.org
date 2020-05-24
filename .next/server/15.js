exports.ids = [15];
exports.modules = {

/***/ "./src/games/reversi/ai.ts":
/*!*********************************!*\
  !*** ./src/games/reversi/ai.ts ***!
  \*********************************/
/*! exports provided: ReversiRandomBot, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversiRandomBot", function() { return ReversiRandomBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/reversi/game.ts");
function cov_20xz5ql5by() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/reversi/ai.ts";
  var hash = "61c8e8e9b7ba9b3407a62d76dded88c8378f55c5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/reversi/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 62
        }
      },
      "1": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 59
        }
      },
      "2": {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 22
        }
      },
      "3": {
        start: {
          line: 16,
          column: 14
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 41
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 102
        }
      },
      "6": {
        start: {
          line: 24,
          column: 33
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "7": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 28,
          column: 6
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
            line: 18,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 51
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 10
          },
          end: {
            line: 25,
            column: 11
          }
        },
        loc: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 25
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "61c8e8e9b7ba9b3407a62d76dded88c8378f55c5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_20xz5ql5by = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_20xz5ql5by();

class ReversiRandomBot {
  async play(state, playerID) {
    cov_20xz5ql5by().f[0]++;
    const moves = (cov_20xz5ql5by().s[0]++, Array.from(Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID))); // const move = moves[Math.floor(Math.random() * moves.length)];  // https://github.com/babel/minify/issues/904

    const move = (cov_20xz5ql5by().s[1]++, moves[Math.random() * moves.length << 0]); // https://github.com/babel/minify/issues/904

    const x = (cov_20xz5ql5by().s[2]++, move % 8);
    const y = (cov_20xz5ql5by().s[3]++, Math.floor(move / 8));
    cov_20xz5ql5by().s[4]++;
    return this.makeMove(playerID, x, y);
  }

  makeMove(playerID, x, y) {
    cov_20xz5ql5by().f[1]++;
    cov_20xz5ql5by().s[5]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'placePiece',
          args: [x, y],
          playerID
        }
      }
    };
  }

}
const config = (cov_20xz5ql5by().s[6]++, {
  bgioAI: () => {
    cov_20xz5ql5by().f[2]++;
    cov_20xz5ql5by().s[7]++;
    return {
      bot: ReversiRandomBot
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/reversi/game.ts":
/*!***********************************!*\
  !*** ./src/games/reversi/game.ts ***!
  \***********************************/
/*! exports provided: getValidMoves, placePiece, getScoreBoard, ReversiGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidMoves", function() { return getValidMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placePiece", function() { return placePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreBoard", function() { return getScoreBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversiGame", function() { return ReversiGame; });
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/core */ "boardgame.io/core");
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
function cov_1dz9mwttqq() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/reversi/game.ts";
  var hash = "b818a05d471d35f93fec0d8f7a36bc6a739d69cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/reversi/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 44
        }
      },
      "2": {
        start: {
          line: 16,
          column: 32
        },
        end: {
          line: 16,
          column: 41
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "4": {
        start: {
          line: 18,
          column: 32
        },
        end: {
          line: 18,
          column: 52
        }
      },
      "5": {
        start: {
          line: 19,
          column: 23
        },
        end: {
          line: 19,
          column: 48
        }
      },
      "6": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "7": {
        start: {
          line: 21,
          column: 19
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "8": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 50,
          column: 9
        }
      },
      "9": {
        start: {
          line: 22,
          column: 21
        },
        end: {
          line: 22,
          column: 23
        }
      },
      "10": {
        start: {
          line: 23,
          column: 10
        },
        end: {
          line: 25,
          column: 11
        }
      },
      "11": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 21
        }
      },
      "12": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 26,
          column: 38
        }
      },
      "13": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "14": {
        start: {
          line: 30,
          column: 22
        },
        end: {
          line: 30,
          column: 27
        }
      },
      "15": {
        start: {
          line: 31,
          column: 22
        },
        end: {
          line: 31,
          column: 27
        }
      },
      "16": {
        start: {
          line: 32,
          column: 18
        },
        end: {
          line: 32,
          column: 19
        }
      },
      "17": {
        start: {
          line: 33,
          column: 28
        },
        end: {
          line: 33,
          column: 32
        }
      },
      "18": {
        start: {
          line: 35,
          column: 10
        },
        end: {
          line: 45,
          column: 11
        }
      },
      "19": {
        start: {
          line: 36,
          column: 29
        },
        end: {
          line: 36,
          column: 53
        }
      },
      "20": {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 40,
          column: 13
        }
      },
      "21": {
        start: {
          line: 38,
          column: 14
        },
        end: {
          line: 38,
          column: 29
        }
      },
      "22": {
        start: {
          line: 39,
          column: 14
        },
        end: {
          line: 39,
          column: 20
        }
      },
      "23": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 42,
          column: 16
        }
      },
      "24": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 43,
          column: 30
        }
      },
      "25": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 30
        }
      },
      "26": {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 49,
          column: 11
        }
      },
      "27": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 32
        }
      },
      "28": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "29": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 22
        }
      },
      "30": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 75,
          column: 7
        }
      },
      "31": {
        start: {
          line: 59,
          column: 32
        },
        end: {
          line: 59,
          column: 52
        }
      },
      "32": {
        start: {
          line: 60,
          column: 23
        },
        end: {
          line: 60,
          column: 44
        }
      },
      "33": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 74,
          column: 7
        }
      },
      "34": {
        start: {
          line: 62,
          column: 19
        },
        end: {
          line: 62,
          column: 21
        }
      },
      "35": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 73,
          column: 9
        }
      },
      "36": {
        start: {
          line: 63,
          column: 21
        },
        end: {
          line: 63,
          column: 23
        }
      },
      "37": {
        start: {
          line: 64,
          column: 10
        },
        end: {
          line: 66,
          column: 11
        }
      },
      "38": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 21
        }
      },
      "39": {
        start: {
          line: 68,
          column: 20
        },
        end: {
          line: 68,
          column: 38
        }
      },
      "40": {
        start: {
          line: 69,
          column: 20
        },
        end: {
          line: 69,
          column: 45
        }
      },
      "41": {
        start: {
          line: 70,
          column: 10
        },
        end: {
          line: 72,
          column: 11
        }
      },
      "42": {
        start: {
          line: 71,
          column: 12
        },
        end: {
          line: 71,
          column: 43
        }
      },
      "43": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 20
        }
      },
      "44": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 83,
          column: 3
        }
      },
      "45": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 24
        }
      },
      "46": {
        start: {
          line: 85,
          column: 26
        },
        end: {
          line: 85,
          column: 44
        }
      },
      "47": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "48": {
        start: {
          line: 86,
          column: 15
        },
        end: {
          line: 86,
          column: 17
        }
      },
      "49": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 110,
          column: 5
        }
      },
      "50": {
        start: {
          line: 87,
          column: 17
        },
        end: {
          line: 87,
          column: 19
        }
      },
      "51": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 90,
          column: 7
        }
      },
      "52": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 17
        }
      },
      "53": {
        start: {
          line: 92,
          column: 18
        },
        end: {
          line: 92,
          column: 23
        }
      },
      "54": {
        start: {
          line: 93,
          column: 19
        },
        end: {
          line: 93,
          column: 21
        }
      },
      "55": {
        start: {
          line: 94,
          column: 18
        },
        end: {
          line: 94,
          column: 23
        }
      },
      "56": {
        start: {
          line: 95,
          column: 18
        },
        end: {
          line: 95,
          column: 23
        }
      },
      "57": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 105,
          column: 7
        }
      },
      "58": {
        start: {
          line: 96,
          column: 19
        },
        end: {
          line: 96,
          column: 20
        }
      },
      "59": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 100,
          column: 9
        }
      },
      "60": {
        start: {
          line: 98,
          column: 10
        },
        end: {
          line: 98,
          column: 23
        }
      },
      "61": {
        start: {
          line: 99,
          column: 10
        },
        end: {
          line: 99,
          column: 16
        }
      },
      "62": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 101,
          column: 46
        }
      },
      "63": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 103,
          column: 26
        }
      },
      "64": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 26
        }
      },
      "65": {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 109,
          column: 7
        }
      },
      "66": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 108,
          column: 32
        }
      },
      "67": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 138,
          column: 3
        }
      },
      "68": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "69": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 121,
          column: 8
        }
      },
      "70": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 124,
          column: 24
        }
      },
      "71": {
        start: {
          line: 126,
          column: 4
        },
        end: {
          line: 126,
          column: 34
        }
      },
      "72": {
        start: {
          line: 126,
          column: 27
        },
        end: {
          line: 126,
          column: 32
        }
      },
      "73": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 137,
          column: 6
        }
      },
      "74": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 135,
          column: 9
        }
      },
      "75": {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 131,
          column: 24
        }
      },
      "76": {
        start: {
          line: 132,
          column: 10
        },
        end: {
          line: 132,
          column: 30
        }
      },
      "77": {
        start: {
          line: 134,
          column: 10
        },
        end: {
          line: 134,
          column: 23
        }
      },
      "78": {
        start: {
          line: 142,
          column: 19
        },
        end: {
          line: 142,
          column: 52
        }
      },
      "79": {
        start: {
          line: 143,
          column: 2
        },
        end: {
          line: 145,
          column: 52
        }
      },
      "80": {
        start: {
          line: 144,
          column: 23
        },
        end: {
          line: 144,
          column: 73
        }
      },
      "81": {
        start: {
          line: 145,
          column: 24
        },
        end: {
          line: 145,
          column: 50
        }
      },
      "82": {
        start: {
          line: 146,
          column: 2
        },
        end: {
          line: 146,
          column: 109
        }
      },
      "83": {
        start: {
          line: 146,
          column: 39
        },
        end: {
          line: 146,
          column: 72
        }
      },
      "84": {
        start: {
          line: 146,
          column: 90
        },
        end: {
          line: 146,
          column: 107
        }
      },
      "85": {
        start: {
          line: 149,
          column: 30
        },
        end: {
          line: 177,
          column: 1
        }
      },
      "86": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 157,
          column: 5
        }
      },
      "87": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 156,
          column: 51
        }
      },
      "88": {
        start: {
          line: 163,
          column: 17
        },
        end: {
          line: 163,
          column: 37
        }
      },
      "89": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 170,
          column: 5
        }
      },
      "90": {
        start: {
          line: 165,
          column: 6
        },
        end: {
          line: 165,
          column: 37
        }
      },
      "91": {
        start: {
          line: 166,
          column: 6
        },
        end: {
          line: 166,
          column: 37
        }
      },
      "92": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 168,
          column: 37
        }
      },
      "93": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 169,
          column: 37
        }
      },
      "94": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 35
        }
      },
      "95": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 172,
          column: 35
        }
      },
      "96": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 175,
          column: 6
        }
      },
      "97": {
        start: {
          line: 179,
          column: 27
        },
        end: {
          line: 179,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "toPosition",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 19
          }
        },
        loc: {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "inBounds",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 17
          }
        },
        loc: {
          start: {
            line: 11,
            column: 40
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      },
      "2": {
        name: "getValidMoves",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 29
          }
        },
        loc: {
          start: {
            line: 15,
            column: 55
          },
          end: {
            line: 78,
            column: 1
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 9
          },
          end: {
            line: 18,
            column: 10
          }
        },
        loc: {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 52
          }
        },
        line: 18
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 23
          },
          end: {
            line: 19,
            column: 48
          }
        },
        line: 19
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 20,
            column: 14
          }
        },
        loc: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 20
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 59,
            column: 9
          },
          end: {
            line: 59,
            column: 10
          }
        },
        loc: {
          start: {
            line: 59,
            column: 32
          },
          end: {
            line: 59,
            column: 52
          }
        },
        line: 59
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 60,
            column: 12
          },
          end: {
            line: 60,
            column: 13
          }
        },
        loc: {
          start: {
            line: 60,
            column: 23
          },
          end: {
            line: 60,
            column: 44
          }
        },
        line: 60
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 61,
            column: 13
          },
          end: {
            line: 61,
            column: 14
          }
        },
        loc: {
          start: {
            line: 61,
            column: 24
          },
          end: {
            line: 75,
            column: 5
          }
        },
        line: 61
      },
      "9": {
        name: "placePiece",
        decl: {
          start: {
            line: 80,
            column: 16
          },
          end: {
            line: 80,
            column: 26
          }
        },
        loc: {
          start: {
            line: 80,
            column: 71
          },
          end: {
            line: 139,
            column: 1
          }
        },
        line: 80
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 126,
            column: 17
          },
          end: {
            line: 126,
            column: 18
          }
        },
        loc: {
          start: {
            line: 126,
            column: 27
          },
          end: {
            line: 126,
            column: 32
          }
        },
        line: 126
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 129,
            column: 27
          },
          end: {
            line: 129,
            column: 28
          }
        },
        loc: {
          start: {
            line: 129,
            column: 41
          },
          end: {
            line: 136,
            column: 7
          }
        },
        line: 129
      },
      "12": {
        name: "getScoreBoard",
        decl: {
          start: {
            line: 141,
            column: 16
          },
          end: {
            line: 141,
            column: 29
          }
        },
        loc: {
          start: {
            line: 141,
            column: 52
          },
          end: {
            line: 147,
            column: 1
          }
        },
        line: 141
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 144,
            column: 12
          },
          end: {
            line: 144,
            column: 13
          }
        },
        loc: {
          start: {
            line: 144,
            column: 23
          },
          end: {
            line: 144,
            column: 73
          }
        },
        line: 144
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 145,
            column: 13
          },
          end: {
            line: 145,
            column: 14
          }
        },
        loc: {
          start: {
            line: 145,
            column: 24
          },
          end: {
            line: 145,
            column: 50
          }
        },
        line: 145
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 146,
            column: 24
          },
          end: {
            line: 146,
            column: 25
          }
        },
        loc: {
          start: {
            line: 146,
            column: 39
          },
          end: {
            line: 146,
            column: 72
          }
        },
        line: 146
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 146,
            column: 80
          },
          end: {
            line: 146,
            column: 81
          }
        },
        loc: {
          start: {
            line: 146,
            column: 90
          },
          end: {
            line: 146,
            column: 107
          }
        },
        line: 146
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 154,
            column: 9
          },
          end: {
            line: 154,
            column: 10
          }
        },
        loc: {
          start: {
            line: 154,
            column: 25
          },
          end: {
            line: 158,
            column: 3
          }
        },
        line: 154
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 162,
            column: 9
          },
          end: {
            line: 162,
            column: 10
          }
        },
        loc: {
          start: {
            line: 162,
            column: 22
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 162
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 15
          }
        }, {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 24
          }
        }, {
          start: {
            line: 12,
            column: 28
          },
          end: {
            line: 12,
            column: 34
          }
        }, {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 12,
            column: 43
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 25,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 25,
            column: 11
          }
        }, {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 25,
            column: 11
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 21
          }
        }, {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 23,
            column: 32
          }
        }],
        line: 23
      },
      "3": {
        loc: {
          start: {
            line: 35,
            column: 17
          },
          end: {
            line: 35,
            column: 90
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 17
          },
          end: {
            line: 35,
            column: 39
          }
        }, {
          start: {
            line: 35,
            column: 43
          },
          end: {
            line: 35,
            column: 90
          }
        }],
        line: 35
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        }, {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        }],
        line: 37
      },
      "5": {
        loc: {
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 49,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 49,
            column: 11
          }
        }, {
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 49,
            column: 11
          }
        }],
        line: 47
      },
      "6": {
        loc: {
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 47,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 47,
            column: 26
          }
        }, {
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 47,
            column: 35
          }
        }],
        line: 47
      },
      "7": {
        loc: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        }, {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        }],
        line: 54
      },
      "8": {
        loc: {
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 66,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 66,
            column: 11
          }
        }, {
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 66,
            column: 11
          }
        }],
        line: 64
      },
      "9": {
        loc: {
          start: {
            line: 64,
            column: 14
          },
          end: {
            line: 64,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 64,
            column: 14
          },
          end: {
            line: 64,
            column: 21
          }
        }, {
          start: {
            line: 64,
            column: 25
          },
          end: {
            line: 64,
            column: 32
          }
        }],
        line: 64
      },
      "10": {
        loc: {
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 72,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 72,
            column: 11
          }
        }, {
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 72,
            column: 11
          }
        }],
        line: 70
      },
      "11": {
        loc: {
          start: {
            line: 70,
            column: 14
          },
          end: {
            line: 70,
            column: 83
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 70,
            column: 14
          },
          end: {
            line: 70,
            column: 36
          }
        }, {
          start: {
            line: 70,
            column: 40
          },
          end: {
            line: 70,
            column: 83
          }
        }],
        line: 70
      },
      "12": {
        loc: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        }, {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        }],
        line: 81
      },
      "13": {
        loc: {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        }, {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        }],
        line: 88
      },
      "14": {
        loc: {
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 88,
            column: 28
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 88,
            column: 17
          }
        }, {
          start: {
            line: 88,
            column: 21
          },
          end: {
            line: 88,
            column: 28
          }
        }],
        line: 88
      },
      "15": {
        loc: {
          start: {
            line: 96,
            column: 22
          },
          end: {
            line: 96,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 96,
            column: 22
          },
          end: {
            line: 96,
            column: 44
          }
        }, {
          start: {
            line: 96,
            column: 48
          },
          end: {
            line: 96,
            column: 91
          }
        }],
        line: 96
      },
      "16": {
        loc: {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 100,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 100,
            column: 9
          }
        }, {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 100,
            column: 9
          }
        }],
        line: 97
      },
      "17": {
        loc: {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 7
          }
        }, {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 7
          }
        }],
        line: 107
      },
      "18": {
        loc: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 138,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 138,
            column: 3
          }
        }, {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 138,
            column: 3
          }
        }],
        line: 113
      },
      "19": {
        loc: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        }, {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        }],
        line: 114
      },
      "20": {
        loc: {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        }, {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        }],
        line: 130
      },
      "21": {
        loc: {
          start: {
            line: 130,
            column: 12
          },
          end: {
            line: 130,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 12
          },
          end: {
            line: 130,
            column: 30
          }
        }, {
          start: {
            line: 130,
            column: 34
          },
          end: {
            line: 130,
            column: 67
          }
        }],
        line: 130
      },
      "22": {
        loc: {
          start: {
            line: 144,
            column: 23
          },
          end: {
            line: 144,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 144,
            column: 23
          },
          end: {
            line: 144,
            column: 37
          }
        }, {
          start: {
            line: 144,
            column: 41
          },
          end: {
            line: 144,
            column: 73
          }
        }],
        line: 144
      },
      "23": {
        loc: {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        }, {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        }],
        line: 155
      },
      "24": {
        loc: {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        }, {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        }],
        line: 164
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
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0
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
      "18": 0
    },
    b: {
      "0": [0, 0, 0, 0],
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
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b818a05d471d35f93fec0d8f7a36bc6a739d69cc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1dz9mwttqq = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1dz9mwttqq();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function toPosition(x, y) {
  cov_1dz9mwttqq().f[0]++;
  cov_1dz9mwttqq().s[0]++;
  return y * 8 + x;
}

function inBounds(x, y) {
  cov_1dz9mwttqq().f[1]++;
  cov_1dz9mwttqq().s[1]++;
  return (cov_1dz9mwttqq().b[0][0]++, x >= 0) && (cov_1dz9mwttqq().b[0][1]++, x < 8) && (cov_1dz9mwttqq().b[0][2]++, y >= 0) && (cov_1dz9mwttqq().b[0][3]++, y < 8);
}

function getValidMoves(G, playerID) {
  cov_1dz9mwttqq().f[2]++;
  let validMoves = (cov_1dz9mwttqq().s[2]++, new Set());
  cov_1dz9mwttqq().s[3]++;
  G.points.map((player, position) => {
    cov_1dz9mwttqq().f[3]++;
    cov_1dz9mwttqq().s[4]++;
    return {
      player,
      position
    };
  }).filter(point => {
    cov_1dz9mwttqq().f[4]++;
    cov_1dz9mwttqq().s[5]++;
    return point.player === playerID;
  }).forEach(point => {
    cov_1dz9mwttqq().f[5]++;
    cov_1dz9mwttqq().s[6]++;

    for (let i = (cov_1dz9mwttqq().s[7]++, -1); i <= 1; i++) {
      cov_1dz9mwttqq().s[8]++;

      for (let j = (cov_1dz9mwttqq().s[9]++, -1); j <= 1; j++) {
        cov_1dz9mwttqq().s[10]++;

        if ((cov_1dz9mwttqq().b[2][0]++, i === 0) && (cov_1dz9mwttqq().b[2][1]++, j === 0)) {
          cov_1dz9mwttqq().b[1][0]++;
          cov_1dz9mwttqq().s[11]++;
          continue;
        } else {
          cov_1dz9mwttqq().b[1][1]++;
        }

        const x = (cov_1dz9mwttqq().s[12]++, point.position % 8); // const y = Math.floor(point.position / 8);  // https://github.com/babel/minify/issues/904

        const y = (cov_1dz9mwttqq().s[13]++, point.position / 8 << 0);
        let currX = (cov_1dz9mwttqq().s[14]++, x + i);
        let currY = (cov_1dz9mwttqq().s[15]++, y + j);
        let k = (cov_1dz9mwttqq().s[16]++, 1);
        let end = (cov_1dz9mwttqq().s[17]++, null);
        cov_1dz9mwttqq().s[18]++;

        while ((cov_1dz9mwttqq().b[3][0]++, inBounds(currX, currY)) && (cov_1dz9mwttqq().b[3][1]++, G.points[toPosition(currX, currY)] !== playerID)) {
          const position = (cov_1dz9mwttqq().s[19]++, toPosition(currX, currY));
          cov_1dz9mwttqq().s[20]++;

          if (G.points[position] === null) {
            cov_1dz9mwttqq().b[4][0]++;
            cov_1dz9mwttqq().s[21]++;
            end = position;
            cov_1dz9mwttqq().s[22]++;
            break;
          } else {
            cov_1dz9mwttqq().b[4][1]++;
          }

          cov_1dz9mwttqq().s[23]++;
          k++;
          cov_1dz9mwttqq().s[24]++;
          currX = x + i * k;
          cov_1dz9mwttqq().s[25]++;
          currY = y + j * k;
        }

        cov_1dz9mwttqq().s[26]++;

        if ((cov_1dz9mwttqq().b[6][0]++, end !== null) && (cov_1dz9mwttqq().b[6][1]++, k > 1)) {
          cov_1dz9mwttqq().b[5][0]++;
          cov_1dz9mwttqq().s[27]++;
          validMoves.add(end);
        } else {
          cov_1dz9mwttqq().b[5][1]++;
        }
      }
    }
  });
  cov_1dz9mwttqq().s[28]++;

  if (validMoves.size > 0) {
    cov_1dz9mwttqq().b[7][0]++;
    cov_1dz9mwttqq().s[29]++;
    return validMoves;
  } else {
    cov_1dz9mwttqq().b[7][1]++;
  }

  cov_1dz9mwttqq().s[30]++;
  G.points.map((player, position) => {
    cov_1dz9mwttqq().f[6]++;
    cov_1dz9mwttqq().s[31]++;
    return {
      player,
      position
    };
  }).filter(point => {
    cov_1dz9mwttqq().f[7]++;
    cov_1dz9mwttqq().s[32]++;
    return point.player === null;
  }).forEach(point => {
    cov_1dz9mwttqq().f[8]++;
    cov_1dz9mwttqq().s[33]++;

    for (let i = (cov_1dz9mwttqq().s[34]++, -1); i <= 1; i++) {
      cov_1dz9mwttqq().s[35]++;

      for (let j = (cov_1dz9mwttqq().s[36]++, -1); j <= 1; j++) {
        cov_1dz9mwttqq().s[37]++;

        if ((cov_1dz9mwttqq().b[9][0]++, i === 0) && (cov_1dz9mwttqq().b[9][1]++, j === 0)) {
          cov_1dz9mwttqq().b[8][0]++;
          cov_1dz9mwttqq().s[38]++;
          continue;
        } else {
          cov_1dz9mwttqq().b[8][1]++;
        }

        const x = (cov_1dz9mwttqq().s[39]++, point.position % 8);
        const y = (cov_1dz9mwttqq().s[40]++, point.position / 8 << 0); // https://github.com/babel/minify/issues/904

        cov_1dz9mwttqq().s[41]++;

        if ((cov_1dz9mwttqq().b[11][0]++, inBounds(x + i, y + j)) && (cov_1dz9mwttqq().b[11][1]++, G.points[toPosition(x + i, y + j)] !== null)) {
          cov_1dz9mwttqq().b[10][0]++;
          cov_1dz9mwttqq().s[42]++;
          validMoves.add(point.position);
        } else {
          cov_1dz9mwttqq().b[10][1]++;
        }
      }
    }
  });
  cov_1dz9mwttqq().s[43]++;
  return validMoves;
}
function placePiece(G, ctx, x, y) {
  cov_1dz9mwttqq().f[9]++;
  cov_1dz9mwttqq().s[44]++;

  if (G.points[toPosition(x, y)] !== null) {
    cov_1dz9mwttqq().b[12][0]++;
    cov_1dz9mwttqq().s[45]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_1dz9mwttqq().b[12][1]++;
  }

  let changed = (cov_1dz9mwttqq().s[46]++, [toPosition(x, y)]); // Changed positions

  cov_1dz9mwttqq().s[47]++;

  for (let i = (cov_1dz9mwttqq().s[48]++, -1); i <= 1; i++) {
    cov_1dz9mwttqq().s[49]++;

    for (let j = (cov_1dz9mwttqq().s[50]++, -1); j <= 1; j++) {
      cov_1dz9mwttqq().s[51]++;

      if ((cov_1dz9mwttqq().b[14][0]++, i === 0) && (cov_1dz9mwttqq().b[14][1]++, j === 0)) {
        cov_1dz9mwttqq().b[13][0]++;
        cov_1dz9mwttqq().s[52]++;
        continue;
      } else {
        cov_1dz9mwttqq().b[13][1]++;
      }

      let valid = (cov_1dz9mwttqq().s[53]++, false);
      let update = (cov_1dz9mwttqq().s[54]++, []);
      let currX = (cov_1dz9mwttqq().s[55]++, x + i);
      let currY = (cov_1dz9mwttqq().s[56]++, y + j);
      cov_1dz9mwttqq().s[57]++;

      for (let k = (cov_1dz9mwttqq().s[58]++, 2); (cov_1dz9mwttqq().b[15][0]++, inBounds(currX, currY)) && (cov_1dz9mwttqq().b[15][1]++, G.points[toPosition(currX, currY)] !== null); k++) {
        cov_1dz9mwttqq().s[59]++;

        if (G.points[toPosition(currX, currY)] === ctx.currentPlayer) {
          cov_1dz9mwttqq().b[16][0]++;
          cov_1dz9mwttqq().s[60]++;
          valid = true;
          cov_1dz9mwttqq().s[61]++;
          break;
        } else {
          cov_1dz9mwttqq().b[16][1]++;
        }

        cov_1dz9mwttqq().s[62]++;
        update.push(toPosition(currX, currY));
        cov_1dz9mwttqq().s[63]++;
        currX = x + i * k;
        cov_1dz9mwttqq().s[64]++;
        currY = y + j * k;
      }

      cov_1dz9mwttqq().s[65]++;

      if (valid) {
        cov_1dz9mwttqq().b[17][0]++;
        cov_1dz9mwttqq().s[66]++;
        changed.push(...update);
      } else {
        cov_1dz9mwttqq().b[17][1]++;
      }
    }
  }

  cov_1dz9mwttqq().s[67]++;

  if (changed.length === 1) {
    cov_1dz9mwttqq().b[18][0]++;
    cov_1dz9mwttqq().s[68]++;

    if (getValidMoves(G, ctx.playerID).has(toPosition(x, y))) {
      cov_1dz9mwttqq().b[19][0]++;
      cov_1dz9mwttqq().s[69]++;
      return _objectSpread({}, G, {
        points: Object.values(_objectSpread({}, G.points, {
          [toPosition(x, y)]: ctx.playerID
        }))
      });
    } else {
      cov_1dz9mwttqq().b[19][1]++;
    }

    cov_1dz9mwttqq().s[70]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_1dz9mwttqq().b[18][1]++;
    cov_1dz9mwttqq().s[71]++;
    changed.sort((a, b) => {
      cov_1dz9mwttqq().f[10]++;
      cov_1dz9mwttqq().s[72]++;
      return b - a;
    });
    cov_1dz9mwttqq().s[73]++;
    return _objectSpread({}, G, {
      points: G.points.map((point, i) => {
        cov_1dz9mwttqq().f[11]++;
        cov_1dz9mwttqq().s[74]++;

        if ((cov_1dz9mwttqq().b[21][0]++, changed.length > 0) && (cov_1dz9mwttqq().b[21][1]++, i === changed[changed.length - 1])) {
          cov_1dz9mwttqq().b[20][0]++;
          cov_1dz9mwttqq().s[75]++;
          changed.pop();
          cov_1dz9mwttqq().s[76]++;
          return ctx.playerID;
        } else {
          cov_1dz9mwttqq().b[20][1]++;
          cov_1dz9mwttqq().s[77]++;
          return point;
        }
      })
    });
  }
}
function getScoreBoard(G, ctx) {
  cov_1dz9mwttqq().f[12]++;
  let scoreBoard = (cov_1dz9mwttqq().s[78]++, new Array(ctx.numPlayers).fill(0));
  cov_1dz9mwttqq().s[79]++;
  G.points.filter(point => {
    cov_1dz9mwttqq().f[13]++;
    cov_1dz9mwttqq().s[80]++;
    return (cov_1dz9mwttqq().b[22][0]++, point !== null) && (cov_1dz9mwttqq().b[22][1]++, parseInt(point) < ctx.numPlayers);
  }).forEach(point => {
    cov_1dz9mwttqq().f[14]++;
    cov_1dz9mwttqq().s[81]++;
    return scoreBoard[point]++;
  });
  cov_1dz9mwttqq().s[82]++;
  return scoreBoard.map((score, i) => {
    cov_1dz9mwttqq().f[15]++;
    cov_1dz9mwttqq().s[83]++;
    return {
      playerID: i.toString(),
      score
    };
  }).sort((a, b) => {
    cov_1dz9mwttqq().f[16]++;
    cov_1dz9mwttqq().s[84]++;
    return b.score - a.score;
  });
}
const GameConfig = (cov_1dz9mwttqq().s[85]++, {
  name: 'reversi',
  turn: {
    moveLimit: 1
  },
  endIf: (G, ctx) => {
    cov_1dz9mwttqq().f[17]++;
    cov_1dz9mwttqq().s[86]++;

    if (!G.points.includes(null)) {
      cov_1dz9mwttqq().b[23][0]++;
      cov_1dz9mwttqq().s[87]++;
      return {
        scoreboard: getScoreBoard(G, ctx)
      };
    } else {
      cov_1dz9mwttqq().b[23][1]++;
    }
  },
  moves: {
    placePiece
  },
  setup: ctx => {
    cov_1dz9mwttqq().f[18]++;
    let points = (cov_1dz9mwttqq().s[88]++, Array(64).fill(null));
    cov_1dz9mwttqq().s[89]++;

    if (ctx.numPlayers === 2) {
      cov_1dz9mwttqq().b[24][0]++;
      cov_1dz9mwttqq().s[90]++;
      points[toPosition(4, 4)] = '1';
      cov_1dz9mwttqq().s[91]++;
      points[toPosition(4, 3)] = '2';
    } else {
      cov_1dz9mwttqq().b[24][1]++;
      cov_1dz9mwttqq().s[92]++;
      points[toPosition(4, 3)] = '1';
      cov_1dz9mwttqq().s[93]++;
      points[toPosition(4, 4)] = '2';
    }

    cov_1dz9mwttqq().s[94]++;
    points[toPosition(3, 3)] = '0';
    cov_1dz9mwttqq().s[95]++;
    points[toPosition(3, 4)] = '3';
    cov_1dz9mwttqq().s[96]++;
    return {
      points
    };
  }
});
const ReversiGame = (cov_1dz9mwttqq().s[97]++, GameConfig);

/***/ })

};;
//# sourceMappingURL=15.js.map