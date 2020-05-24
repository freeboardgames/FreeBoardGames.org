exports.ids = [14];
exports.modules = {

/***/ "./src/games/checkers/ai.ts":
/*!**********************************!*\
  !*** ./src/games/checkers/ai.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/checkers/game.ts");
function cov_bbezkls7h() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/checkers/ai.ts";
  var hash = "75609952d8a6093c82c67a81f05f048ad27b84f4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/checkers/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 117
        }
      },
      "1": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 64
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 41
        }
      },
      "3": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 110
        }
      },
      "4": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "5": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
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
            line: 17,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 42
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 11
          }
        },
        loc: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 13,
            column: 117
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 33
          },
          end: {
            line: 13,
            column: 82
          }
        }, {
          start: {
            line: 13,
            column: 85
          },
          end: {
            line: 13,
            column: 117
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "75609952d8a6093c82c67a81f05f048ad27b84f4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_bbezkls7h = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_bbezkls7h();


class CheckersRandomBot {
  async play(state, playerID) {
    cov_bbezkls7h().f[0]++;
    const moves = (cov_bbezkls7h().s[0]++, state.G.jumping !== null ? (cov_bbezkls7h().b[0][0]++, Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID, state.G.jumping)) : (cov_bbezkls7h().b[0][1]++, Object(_game__WEBPACK_IMPORTED_MODULE_0__["getValidMoves"])(state.G, playerID)));
    const move = (cov_bbezkls7h().s[1]++, moves[Math.floor(Math.random() * moves.length)]);
    cov_bbezkls7h().s[2]++;
    return this.makeMove(playerID, move);
  }

  makeMove(playerID, move) {
    cov_bbezkls7h().f[1]++;
    cov_bbezkls7h().s[3]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'move',
          args: [move.from, move.to],
          playerID
        }
      }
    };
  }

}

const config = (cov_bbezkls7h().s[4]++, {
  bgioAI: () => {
    cov_bbezkls7h().f[2]++;
    cov_bbezkls7h().s[5]++;
    return {
      bot: CheckersRandomBot
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/checkers/game.ts":
/*!************************************!*\
  !*** ./src/games/checkers/game.ts ***!
  \************************************/
/*! exports provided: INITIAL_BOARD, sumCoords, multiplyCoord, inBounds, toCoord, toIndex, areCoordsEqual, checkPosition, getValidMoves, move, CheckersGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_BOARD", function() { return INITIAL_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumCoords", function() { return sumCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyCoord", function() { return multiplyCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBounds", function() { return inBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCoord", function() { return toCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIndex", function() { return toIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areCoordsEqual", function() { return areCoordsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPosition", function() { return checkPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidMoves", function() { return getValidMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckersGame", function() { return CheckersGame; });
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/core */ "boardgame.io/core");
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
function cov_m37usqyvk() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/checkers/game.ts";
  var hash = "f9f7f2b66764e4755280cd59326ebff4c5a77528";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/checkers/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 113
        }
      },
      "1": {
        start: {
          line: 30,
          column: 62
        },
        end: {
          line: 30,
          column: 112
        }
      },
      "2": {
        start: {
          line: 32,
          column: 38
        },
        end: {
          line: 97,
          column: 1
        }
      },
      "3": {
        start: {
          line: 99,
          column: 17
        },
        end: {
          line: 108,
          column: 1
        }
      },
      "4": {
        start: {
          line: 110,
          column: 18
        },
        end: {
          line: 115,
          column: 1
        }
      },
      "5": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 118,
          column: 40
        }
      },
      "6": {
        start: {
          line: 122,
          column: 2
        },
        end: {
          line: 122,
          column: 62
        }
      },
      "7": {
        start: {
          line: 126,
          column: 2
        },
        end: {
          line: 126,
          column: 68
        }
      },
      "8": {
        start: {
          line: 130,
          column: 12
        },
        end: {
          line: 130,
          column: 24
        }
      },
      "9": {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 36
        }
      },
      "10": {
        start: {
          line: 132,
          column: 2
        },
        end: {
          line: 132,
          column: 18
        }
      },
      "11": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 136,
          column: 31
        }
      },
      "12": {
        start: {
          line: 140,
          column: 2
        },
        end: {
          line: 140,
          column: 36
        }
      },
      "13": {
        start: {
          line: 149,
          column: 15
        },
        end: {
          line: 149,
          column: 67
        }
      },
      "14": {
        start: {
          line: 150,
          column: 23
        },
        end: {
          line: 150,
          column: 25
        }
      },
      "15": {
        start: {
          line: 151,
          column: 15
        },
        end: {
          line: 151,
          column: 20
        }
      },
      "16": {
        start: {
          line: 153,
          column: 2
        },
        end: {
          line: 192,
          column: 3
        }
      },
      "17": {
        start: {
          line: 155,
          column: 25
        },
        end: {
          line: 155,
          column: 29
        }
      },
      "18": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 191,
          column: 5
        }
      },
      "19": {
        start: {
          line: 156,
          column: 17
        },
        end: {
          line: 156,
          column: 18
        }
      },
      "20": {
        start: {
          line: 157,
          column: 20
        },
        end: {
          line: 157,
          column: 59
        }
      },
      "21": {
        start: {
          line: 160,
          column: 6
        },
        end: {
          line: 162,
          column: 7
        }
      },
      "22": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 14
        }
      },
      "23": {
        start: {
          line: 164,
          column: 21
        },
        end: {
          line: 164,
          column: 44
        }
      },
      "24": {
        start: {
          line: 167,
          column: 6
        },
        end: {
          line: 169,
          column: 7
        }
      },
      "25": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 14
        }
      },
      "26": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 177,
          column: 7
        }
      },
      "27": {
        start: {
          line: 173,
          column: 8
        },
        end: {
          line: 175,
          column: 9
        }
      },
      "28": {
        start: {
          line: 174,
          column: 10
        },
        end: {
          line: 174,
          column: 16
        }
      },
      "29": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 176,
          column: 31
        }
      },
      "30": {
        start: {
          line: 179,
          column: 6
        },
        end: {
          line: 190,
          column: 7
        }
      },
      "31": {
        start: {
          line: 180,
          column: 8
        },
        end: {
          line: 180,
          column: 71
        }
      },
      "32": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 184,
          column: 9
        }
      },
      "33": {
        start: {
          line: 182,
          column: 10
        },
        end: {
          line: 182,
          column: 24
        }
      },
      "34": {
        start: {
          line: 183,
          column: 10
        },
        end: {
          line: 183,
          column: 16
        }
      },
      "35": {
        start: {
          line: 187,
          column: 8
        },
        end: {
          line: 189,
          column: 9
        }
      },
      "36": {
        start: {
          line: 188,
          column: 10
        },
        end: {
          line: 188,
          column: 16
        }
      },
      "37": {
        start: {
          line: 194,
          column: 2
        },
        end: {
          line: 194,
          column: 27
        }
      },
      "38": {
        start: {
          line: 198,
          column: 28
        },
        end: {
          line: 198,
          column: 30
        }
      },
      "39": {
        start: {
          line: 199,
          column: 20
        },
        end: {
          line: 199,
          column: 25
        }
      },
      "40": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 214,
          column: 3
        }
      },
      "41": {
        start: {
          line: 202,
          column: 4
        },
        end: {
          line: 209,
          column: 7
        }
      },
      "42": {
        start: {
          line: 203,
          column: 6
        },
        end: {
          line: 208,
          column: 7
        }
      },
      "43": {
        start: {
          line: 204,
          column: 22
        },
        end: {
          line: 204,
          column: 36
        }
      },
      "44": {
        start: {
          line: 205,
          column: 34
        },
        end: {
          line: 205,
          column: 74
        }
      },
      "45": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 34
        }
      },
      "46": {
        start: {
          line: 207,
          column: 8
        },
        end: {
          line: 207,
          column: 44
        }
      },
      "47": {
        start: {
          line: 211,
          column: 30
        },
        end: {
          line: 211,
          column: 85
        }
      },
      "48": {
        start: {
          line: 212,
          column: 4
        },
        end: {
          line: 212,
          column: 23
        }
      },
      "49": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 25
        }
      },
      "50": {
        start: {
          line: 216,
          column: 2
        },
        end: {
          line: 220,
          column: 3
        }
      },
      "51": {
        start: {
          line: 217,
          column: 4
        },
        end: {
          line: 217,
          column: 52
        }
      },
      "52": {
        start: {
          line: 217,
          column: 39
        },
        end: {
          line: 217,
          column: 50
        }
      },
      "53": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 219,
          column: 22
        }
      },
      "54": {
        start: {
          line: 224,
          column: 20
        },
        end: {
          line: 224,
          column: 33
        }
      },
      "55": {
        start: {
          line: 225,
          column: 18
        },
        end: {
          line: 225,
          column: 29
        }
      },
      "56": {
        start: {
          line: 226,
          column: 16
        },
        end: {
          line: 226,
          column: 34
        }
      },
      "57": {
        start: {
          line: 227,
          column: 20
        },
        end: {
          line: 227,
          column: 48
        }
      },
      "58": {
        start: {
          line: 229,
          column: 2
        },
        end: {
          line: 231,
          column: 3
        }
      },
      "59": {
        start: {
          line: 230,
          column: 4
        },
        end: {
          line: 230,
          column: 24
        }
      },
      "60": {
        start: {
          line: 233,
          column: 16
        },
        end: {
          line: 233,
          column: 111
        }
      },
      "61": {
        start: {
          line: 234,
          column: 15
        },
        end: {
          line: 234,
          column: 99
        }
      },
      "62": {
        start: {
          line: 234,
          column: 36
        },
        end: {
          line: 234,
          column: 98
        }
      },
      "63": {
        start: {
          line: 236,
          column: 2
        },
        end: {
          line: 238,
          column: 3
        }
      },
      "64": {
        start: {
          line: 237,
          column: 4
        },
        end: {
          line: 237,
          column: 24
        }
      },
      "65": {
        start: {
          line: 240,
          column: 17
        },
        end: {
          line: 240,
          column: 65
        }
      },
      "66": {
        start: {
          line: 241,
          column: 17
        },
        end: {
          line: 241,
          column: 51
        }
      },
      "67": {
        start: {
          line: 243,
          column: 19
        },
        end: {
          line: 261,
          column: 3
        }
      },
      "68": {
        start: {
          line: 246,
          column: 6
        },
        end: {
          line: 258,
          column: 7
        }
      },
      "69": {
        start: {
          line: 248,
          column: 10
        },
        end: {
          line: 248,
          column: 22
        }
      },
      "70": {
        start: {
          line: 250,
          column: 10
        },
        end: {
          line: 253,
          column: 12
        }
      },
      "71": {
        start: {
          line: 255,
          column: 10
        },
        end: {
          line: 255,
          column: 22
        }
      },
      "72": {
        start: {
          line: 257,
          column: 10
        },
        end: {
          line: 257,
          column: 24
        }
      },
      "73": {
        start: {
          line: 263,
          column: 2
        },
        end: {
          line: 265,
          column: 3
        }
      },
      "74": {
        start: {
          line: 264,
          column: 4
        },
        end: {
          line: 264,
          column: 16
        }
      },
      "75": {
        start: {
          line: 267,
          column: 18
        },
        end: {
          line: 273,
          column: 3
        }
      },
      "76": {
        start: {
          line: 274,
          column: 20
        },
        end: {
          line: 274,
          column: 62
        }
      },
      "77": {
        start: {
          line: 276,
          column: 2
        },
        end: {
          line: 281,
          column: 3
        }
      },
      "78": {
        start: {
          line: 277,
          column: 4
        },
        end: {
          line: 280,
          column: 6
        }
      },
      "79": {
        start: {
          line: 283,
          column: 2
        },
        end: {
          line: 283,
          column: 14
        }
      },
      "80": {
        start: {
          line: 286,
          column: 39
        },
        end: {
          line: 304,
          column: 1
        }
      },
      "81": {
        start: {
          line: 288,
          column: 20
        },
        end: {
          line: 288,
          column: 59
        }
      },
      "82": {
        start: {
          line: 295,
          column: 19
        },
        end: {
          line: 295,
          column: 20
        }
      },
      "83": {
        start: {
          line: 296,
          column: 29
        },
        end: {
          line: 296,
          column: 108
        }
      },
      "84": {
        start: {
          line: 300,
          column: 4
        },
        end: {
          line: 302,
          column: 5
        }
      },
      "85": {
        start: {
          line: 301,
          column: 6
        },
        end: {
          line: 301,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 30,
            column: 14
          },
          end: {
            line: 30,
            column: 15
          }
        },
        loc: {
          start: {
            line: 30,
            column: 62
          },
          end: {
            line: 30,
            column: 112
          }
        },
        line: 30
      },
      "1": {
        name: "sumCoords",
        decl: {
          start: {
            line: 117,
            column: 16
          },
          end: {
            line: 117,
            column: 25
          }
        },
        loc: {
          start: {
            line: 117,
            column: 48
          },
          end: {
            line: 119,
            column: 1
          }
        },
        line: 117
      },
      "2": {
        name: "multiplyCoord",
        decl: {
          start: {
            line: 121,
            column: 16
          },
          end: {
            line: 121,
            column: 29
          }
        },
        loc: {
          start: {
            line: 121,
            column: 65
          },
          end: {
            line: 123,
            column: 1
          }
        },
        line: 121
      },
      "3": {
        name: "inBounds",
        decl: {
          start: {
            line: 125,
            column: 16
          },
          end: {
            line: 125,
            column: 24
          }
        },
        loc: {
          start: {
            line: 125,
            column: 40
          },
          end: {
            line: 127,
            column: 1
          }
        },
        line: 125
      },
      "4": {
        name: "toCoord",
        decl: {
          start: {
            line: 129,
            column: 16
          },
          end: {
            line: 129,
            column: 23
          }
        },
        loc: {
          start: {
            line: 129,
            column: 50
          },
          end: {
            line: 133,
            column: 1
          }
        },
        line: 129
      },
      "5": {
        name: "toIndex",
        decl: {
          start: {
            line: 135,
            column: 16
          },
          end: {
            line: 135,
            column: 23
          }
        },
        loc: {
          start: {
            line: 135,
            column: 39
          },
          end: {
            line: 137,
            column: 1
          }
        },
        line: 135
      },
      "6": {
        name: "areCoordsEqual",
        decl: {
          start: {
            line: 139,
            column: 16
          },
          end: {
            line: 139,
            column: 30
          }
        },
        loc: {
          start: {
            line: 139,
            column: 53
          },
          end: {
            line: 141,
            column: 1
          }
        },
        line: 139
      },
      "7": {
        name: "checkPosition",
        decl: {
          start: {
            line: 143,
            column: 16
          },
          end: {
            line: 143,
            column: 29
          }
        },
        loc: {
          start: {
            line: 148,
            column: 39
          },
          end: {
            line: 195,
            column: 1
          }
        },
        line: 148
      },
      "8": {
        name: "getValidMoves",
        decl: {
          start: {
            line: 197,
            column: 16
          },
          end: {
            line: 197,
            column: 29
          }
        },
        loc: {
          start: {
            line: 197,
            column: 89
          },
          end: {
            line: 221,
            column: 1
          }
        },
        line: 197
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 202,
            column: 20
          },
          end: {
            line: 202,
            column: 21
          }
        },
        loc: {
          start: {
            line: 202,
            column: 38
          },
          end: {
            line: 209,
            column: 5
          }
        },
        line: 202
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 217,
            column: 29
          },
          end: {
            line: 217,
            column: 30
          }
        },
        loc: {
          start: {
            line: 217,
            column: 39
          },
          end: {
            line: 217,
            column: 50
          }
        },
        line: 217
      },
      "11": {
        name: "move",
        decl: {
          start: {
            line: 223,
            column: 16
          },
          end: {
            line: 223,
            column: 20
          }
        },
        loc: {
          start: {
            line: 223,
            column: 82
          },
          end: {
            line: 284,
            column: 1
          }
        },
        line: 223
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 234,
            column: 26
          },
          end: {
            line: 234,
            column: 27
          }
        },
        loc: {
          start: {
            line: 234,
            column: 36
          },
          end: {
            line: 234,
            column: 98
          }
        },
        line: 234
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 245,
            column: 23
          },
          end: {
            line: 245,
            column: 24
          }
        },
        loc: {
          start: {
            line: 245,
            column: 38
          },
          end: {
            line: 259,
            column: 5
          }
        },
        line: 245
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 288,
            column: 9
          },
          end: {
            line: 288,
            column: 10
          }
        },
        loc: {
          start: {
            line: 288,
            column: 20
          },
          end: {
            line: 288,
            column: 59
          }
        },
        line: 288
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 295,
            column: 13
          },
          end: {
            line: 295,
            column: 14
          }
        },
        loc: {
          start: {
            line: 295,
            column: 19
          },
          end: {
            line: 295,
            column: 20
          }
        },
        line: 295
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 296,
            column: 12
          },
          end: {
            line: 296,
            column: 13
          }
        },
        loc: {
          start: {
            line: 296,
            column: 29
          },
          end: {
            line: 296,
            column: 108
          }
        },
        line: 296
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 299,
            column: 9
          },
          end: {
            line: 299,
            column: 10
          }
        },
        loc: {
          start: {
            line: 299,
            column: 25
          },
          end: {
            line: 303,
            column: 3
          }
        },
        line: 299
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 126,
            column: 9
          },
          end: {
            line: 126,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 126,
            column: 9
          },
          end: {
            line: 126,
            column: 21
          }
        }, {
          start: {
            line: 126,
            column: 25
          },
          end: {
            line: 126,
            column: 36
          }
        }, {
          start: {
            line: 126,
            column: 40
          },
          end: {
            line: 126,
            column: 52
          }
        }, {
          start: {
            line: 126,
            column: 56
          },
          end: {
            line: 126,
            column: 67
          }
        }],
        line: 126
      },
      "1": {
        loc: {
          start: {
            line: 140,
            column: 9
          },
          end: {
            line: 140,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 140,
            column: 9
          },
          end: {
            line: 140,
            column: 20
          }
        }, {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 35
          }
        }],
        line: 140
      },
      "2": {
        loc: {
          start: {
            line: 149,
            column: 15
          },
          end: {
            line: 149,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 149,
            column: 30
          },
          end: {
            line: 149,
            column: 39
          }
        }, {
          start: {
            line: 149,
            column: 42
          },
          end: {
            line: 149,
            column: 67
          }
        }],
        line: 149
      },
      "3": {
        loc: {
          start: {
            line: 156,
            column: 20
          },
          end: {
            line: 156,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 156,
            column: 35
          },
          end: {
            line: 156,
            column: 39
          }
        }, {
          start: {
            line: 156,
            column: 42
          },
          end: {
            line: 156,
            column: 47
          }
        }],
        line: 156
      },
      "4": {
        loc: {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 162,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 162,
            column: 7
          }
        }, {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 162,
            column: 7
          }
        }],
        line: 160
      },
      "5": {
        loc: {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        }, {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        }],
        line: 167
      },
      "6": {
        loc: {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 167,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 167,
            column: 25
          }
        }, {
          start: {
            line: 167,
            column: 29
          },
          end: {
            line: 167,
            column: 57
          }
        }],
        line: 167
      },
      "7": {
        loc: {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 177,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 177,
            column: 7
          }
        }, {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 177,
            column: 7
          }
        }],
        line: 171
      },
      "8": {
        loc: {
          start: {
            line: 171,
            column: 10
          },
          end: {
            line: 171,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 171,
            column: 10
          },
          end: {
            line: 171,
            column: 25
          }
        }, {
          start: {
            line: 171,
            column: 29
          },
          end: {
            line: 171,
            column: 57
          }
        }],
        line: 171
      },
      "9": {
        loc: {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 175,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 175,
            column: 9
          }
        }, {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 175,
            column: 9
          }
        }],
        line: 173
      },
      "10": {
        loc: {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        }, {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        }],
        line: 179
      },
      "11": {
        loc: {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        }, {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        }],
        line: 181
      },
      "12": {
        loc: {
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 189,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 189,
            column: 9
          }
        }, {
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 189,
            column: 9
          }
        }],
        line: 187
      },
      "13": {
        loc: {
          start: {
            line: 201,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 201,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        }, {
          start: {
            line: 201,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        }],
        line: 201
      },
      "14": {
        loc: {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 208,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 208,
            column: 7
          }
        }, {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 208,
            column: 7
          }
        }],
        line: 203
      },
      "15": {
        loc: {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 203,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 203,
            column: 24
          }
        }, {
          start: {
            line: 203,
            column: 28
          },
          end: {
            line: 203,
            column: 55
          }
        }],
        line: 203
      },
      "16": {
        loc: {
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 207,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 207,
            column: 33
          }
        }, {
          start: {
            line: 207,
            column: 37
          },
          end: {
            line: 207,
            column: 43
          }
        }],
        line: 207
      },
      "17": {
        loc: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 220,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 220,
            column: 3
          }
        }, {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 220,
            column: 3
          }
        }],
        line: 216
      },
      "18": {
        loc: {
          start: {
            line: 227,
            column: 20
          },
          end: {
            line: 227,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 227,
            column: 43
          },
          end: {
            line: 227,
            column: 44
          }
        }, {
          start: {
            line: 227,
            column: 47
          },
          end: {
            line: 227,
            column: 48
          }
        }],
        line: 227
      },
      "19": {
        loc: {
          start: {
            line: 229,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 229,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        }, {
          start: {
            line: 229,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        }],
        line: 229
      },
      "20": {
        loc: {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 84
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 20
          }
        }, {
          start: {
            line: 229,
            column: 24
          },
          end: {
            line: 229,
            column: 55
          }
        }, {
          start: {
            line: 229,
            column: 59
          },
          end: {
            line: 229,
            column: 84
          }
        }],
        line: 229
      },
      "21": {
        loc: {
          start: {
            line: 233,
            column: 16
          },
          end: {
            line: 233,
            column: 111
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 233,
            column: 37
          },
          end: {
            line: 233,
            column: 67
          }
        }, {
          start: {
            line: 233,
            column: 70
          },
          end: {
            line: 233,
            column: 111
          }
        }],
        line: 233
      },
      "22": {
        loc: {
          start: {
            line: 234,
            column: 36
          },
          end: {
            line: 234,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 234,
            column: 36
          },
          end: {
            line: 234,
            column: 67
          }
        }, {
          start: {
            line: 234,
            column: 71
          },
          end: {
            line: 234,
            column: 98
          }
        }],
        line: 234
      },
      "23": {
        loc: {
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 238,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 238,
            column: 3
          }
        }, {
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 238,
            column: 3
          }
        }],
        line: 236
      },
      "24": {
        loc: {
          start: {
            line: 240,
            column: 17
          },
          end: {
            line: 240,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 240,
            column: 40
          },
          end: {
            line: 240,
            column: 60
          }
        }, {
          start: {
            line: 240,
            column: 63
          },
          end: {
            line: 240,
            column: 65
          }
        }],
        line: 240
      },
      "25": {
        loc: {
          start: {
            line: 241,
            column: 17
          },
          end: {
            line: 241,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 241,
            column: 17
          },
          end: {
            line: 241,
            column: 29
          }
        }, {
          start: {
            line: 241,
            column: 33
          },
          end: {
            line: 241,
            column: 51
          }
        }],
        line: 241
      },
      "26": {
        loc: {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 258,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 247,
            column: 8
          },
          end: {
            line: 248,
            column: 22
          }
        }, {
          start: {
            line: 249,
            column: 8
          },
          end: {
            line: 253,
            column: 12
          }
        }, {
          start: {
            line: 254,
            column: 8
          },
          end: {
            line: 255,
            column: 22
          }
        }, {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 257,
            column: 24
          }
        }],
        line: 246
      },
      "27": {
        loc: {
          start: {
            line: 263,
            column: 2
          },
          end: {
            line: 265,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 263,
            column: 2
          },
          end: {
            line: 265,
            column: 3
          }
        }, {
          start: {
            line: 263,
            column: 2
          },
          end: {
            line: 265,
            column: 3
          }
        }],
        line: 263
      },
      "28": {
        loc: {
          start: {
            line: 276,
            column: 2
          },
          end: {
            line: 281,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 276,
            column: 2
          },
          end: {
            line: 281,
            column: 3
          }
        }, {
          start: {
            line: 276,
            column: 2
          },
          end: {
            line: 281,
            column: 3
          }
        }],
        line: 276
      },
      "29": {
        loc: {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 26
          }
        }, {
          start: {
            line: 276,
            column: 30
          },
          end: {
            line: 276,
            column: 58
          }
        }],
        line: 276
      },
      "30": {
        loc: {
          start: {
            line: 296,
            column: 29
          },
          end: {
            line: 296,
            column: 108
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 296,
            column: 50
          },
          end: {
            line: 296,
            column: 89
          }
        }, {
          start: {
            line: 296,
            column: 92
          },
          end: {
            line: 296,
            column: 108
          }
        }],
        line: 296
      },
      "31": {
        loc: {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 302,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 302,
            column: 5
          }
        }, {
          start: {
            line: 300,
            column: 4
          },
          end: {
            line: 302,
            column: 5
          }
        }],
        line: 300
      },
      "32": {
        loc: {
          start: {
            line: 300,
            column: 25
          },
          end: {
            line: 300,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 300,
            column: 53
          },
          end: {
            line: 300,
            column: 56
          }
        }, {
          start: {
            line: 300,
            column: 59
          },
          end: {
            line: 300,
            column: 62
          }
        }],
        line: 300
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
      "85": 0
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
      "17": 0
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
      "20": [0, 0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0, 0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f9f7f2b66764e4755280cd59326ebff4c5a77528"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_m37usqyvk = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_m37usqyvk();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


cov_m37usqyvk().s[0]++;

const piece = (id, player) => {
  cov_m37usqyvk().f[0]++;
  cov_m37usqyvk().s[1]++;
  return {
    id,
    playerID: player.toString(),
    isKing: false
  };
};

const INITIAL_BOARD = (cov_m37usqyvk().s[2]++, [null, piece(0, 1), null, piece(1, 1), null, piece(2, 1), null, piece(3, 1), piece(4, 1), null, piece(5, 1), null, piece(6, 1), null, piece(7, 1), null, null, piece(8, 1), null, piece(9, 1), null, piece(10, 1), null, piece(11, 1), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, piece(12, 0), null, piece(13, 0), null, piece(14, 0), null, piece(15, 0), null, null, piece(16, 0), null, piece(17, 0), null, piece(18, 0), null, piece(19, 0), piece(20, 0), null, piece(21, 0), null, piece(22, 0), null, piece(23, 0), null]);
const MAN_DIRS = (cov_m37usqyvk().s[3]++, [[{
  x: -1,
  y: -1
}, {
  x: 1,
  y: -1
}], [{
  x: -1,
  y: 1
}, {
  x: 1,
  y: 1
}]]);
const KING_DIRS = (cov_m37usqyvk().s[4]++, [{
  x: -1,
  y: 1
}, {
  x: 1,
  y: 1
}, {
  x: -1,
  y: -1
}, {
  x: 1,
  y: -1
}]);
function sumCoords(a, b) {
  cov_m37usqyvk().f[1]++;
  cov_m37usqyvk().s[5]++;
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function multiplyCoord(coord, multiplier) {
  cov_m37usqyvk().f[2]++;
  cov_m37usqyvk().s[6]++;
  return {
    x: coord.x * multiplier,
    y: coord.y * multiplier
  };
}
function inBounds(coord) {
  cov_m37usqyvk().f[3]++;
  cov_m37usqyvk().s[7]++;
  return (cov_m37usqyvk().b[0][0]++, coord.x >= 0) && (cov_m37usqyvk().b[0][1]++, coord.x < 8) && (cov_m37usqyvk().b[0][2]++, coord.y >= 0) && (cov_m37usqyvk().b[0][3]++, coord.y < 8);
}
function toCoord(position) {
  cov_m37usqyvk().f[4]++;
  const x = (cov_m37usqyvk().s[8]++, position % 8);
  const y = (cov_m37usqyvk().s[9]++, Math.floor(position / 8));
  cov_m37usqyvk().s[10]++;
  return {
    x,
    y
  };
}
function toIndex(coord) {
  cov_m37usqyvk().f[5]++;
  cov_m37usqyvk().s[11]++;
  return coord.x + coord.y * 8;
}
function areCoordsEqual(a, b) {
  cov_m37usqyvk().f[6]++;
  cov_m37usqyvk().s[12]++;
  return (cov_m37usqyvk().b[1][0]++, a.x === b.x) && (cov_m37usqyvk().b[1][1]++, a.y === b.y);
}
function checkPosition(G, playerID, piece, coord) {
  cov_m37usqyvk().f[7]++;
  const dirs = (cov_m37usqyvk().s[13]++, piece.isKing ? (cov_m37usqyvk().b[2][0]++, KING_DIRS) : (cov_m37usqyvk().b[2][1]++, MAN_DIRS[playerID]));
  let moves = (cov_m37usqyvk().s[14]++, []);
  let jumped = (cov_m37usqyvk().s[15]++, false);
  cov_m37usqyvk().s[16]++;

  for (const dir of dirs) {
    // Look into all valid directions
    let opponentBefore = (cov_m37usqyvk().s[17]++, null);
    cov_m37usqyvk().s[18]++;

    for (let i = (cov_m37usqyvk().s[19]++, 1); piece.isKing ? (cov_m37usqyvk().b[3][0]++, true) : (cov_m37usqyvk().b[3][1]++, i < 3); i++) {
      const final = (cov_m37usqyvk().s[20]++, sumCoords(coord, multiplyCoord(dir, i))); // Break if move is out of bounds

      cov_m37usqyvk().s[21]++;

      if (!inBounds(final)) {
        cov_m37usqyvk().b[4][0]++;
        cov_m37usqyvk().s[22]++;
        break;
      } else {
        cov_m37usqyvk().b[4][1]++;
      }

      const moveTo = (cov_m37usqyvk().s[23]++, G.board[toIndex(final)]); // Break if we encounter our piece

      cov_m37usqyvk().s[24]++;

      if ((cov_m37usqyvk().b[6][0]++, moveTo !== null) && (cov_m37usqyvk().b[6][1]++, moveTo.playerID === playerID)) {
        cov_m37usqyvk().b[5][0]++;
        cov_m37usqyvk().s[25]++;
        break;
      } else {
        cov_m37usqyvk().b[5][1]++;
      }

      cov_m37usqyvk().s[26]++;

      if ((cov_m37usqyvk().b[8][0]++, moveTo !== null) && (cov_m37usqyvk().b[8][1]++, moveTo.playerID !== playerID)) {
        cov_m37usqyvk().b[7][0]++;
        cov_m37usqyvk().s[27]++;

        // If we already encountered opponent the directions is blocked
        if (opponentBefore) {
          cov_m37usqyvk().b[9][0]++;
          cov_m37usqyvk().s[28]++;
          break;
        } else {
          cov_m37usqyvk().b[9][1]++;
        }

        cov_m37usqyvk().s[29]++;
        opponentBefore = final;
      } else {
        cov_m37usqyvk().b[7][1]++;
      }

      cov_m37usqyvk().s[30]++;

      if (moveTo === null) {
        cov_m37usqyvk().b[10][0]++;
        cov_m37usqyvk().s[31]++;
        moves.push({
          from: coord,
          to: final,
          jumped: opponentBefore
        });
        cov_m37usqyvk().s[32]++;

        if (opponentBefore) {
          cov_m37usqyvk().b[11][0]++;
          cov_m37usqyvk().s[33]++;
          jumped = true;
          cov_m37usqyvk().s[34]++;
          break;
        } else {
          cov_m37usqyvk().b[11][1]++;
        } // If there is nothing and the piece isn't king there is no need to continue


        cov_m37usqyvk().s[35]++;

        if (!piece.isKing) {
          cov_m37usqyvk().b[12][0]++;
          cov_m37usqyvk().s[36]++;
          break;
        } else {
          cov_m37usqyvk().b[12][1]++;
        }
      } else {
        cov_m37usqyvk().b[10][1]++;
      }
    }
  }

  cov_m37usqyvk().s[37]++;
  return {
    moves,
    jumped
  };
}
function getValidMoves(G, playerID, jumping) {
  cov_m37usqyvk().f[8]++;
  let movesTotal = (cov_m37usqyvk().s[38]++, []);
  let jumpedTotal = (cov_m37usqyvk().s[39]++, false);
  cov_m37usqyvk().s[40]++;

  if (typeof jumping === 'undefined') {
    cov_m37usqyvk().b[13][0]++;
    cov_m37usqyvk().s[41]++;
    G.board.forEach((piece, index) => {
      cov_m37usqyvk().f[9]++;
      cov_m37usqyvk().s[42]++;

      if ((cov_m37usqyvk().b[15][0]++, piece !== null) && (cov_m37usqyvk().b[15][1]++, piece.playerID === playerID)) {
        cov_m37usqyvk().b[14][0]++;
        const coord = (cov_m37usqyvk().s[43]++, toCoord(index));
        const {
          moves,
          jumped
        } = (cov_m37usqyvk().s[44]++, checkPosition(G, playerID, piece, coord));
        cov_m37usqyvk().s[45]++;
        movesTotal.push(...moves);
        cov_m37usqyvk().s[46]++;
        jumpedTotal = (cov_m37usqyvk().b[16][0]++, jumpedTotal) || (cov_m37usqyvk().b[16][1]++, jumped);
      } else {
        cov_m37usqyvk().b[14][1]++;
      }
    });
  } else {
    cov_m37usqyvk().b[13][1]++;
    const {
      moves,
      jumped
    } = (cov_m37usqyvk().s[47]++, checkPosition(G, playerID, jumping.data, jumping.coord));
    cov_m37usqyvk().s[48]++;
    movesTotal = moves;
    cov_m37usqyvk().s[49]++;
    jumpedTotal = jumped;
  }

  cov_m37usqyvk().s[50]++;

  if (jumpedTotal) {
    cov_m37usqyvk().b[17][0]++;
    cov_m37usqyvk().s[51]++;
    return movesTotal.filter(move => {
      cov_m37usqyvk().f[10]++;
      cov_m37usqyvk().s[52]++;
      return move.jumped;
    });
  } else {
    cov_m37usqyvk().b[17][1]++;
    cov_m37usqyvk().s[53]++;
    return movesTotal;
  }
}
function move(G, ctx, from, to) {
  cov_m37usqyvk().f[11]++;
  const indexFrom = (cov_m37usqyvk().s[54]++, toIndex(from));
  const indexTo = (cov_m37usqyvk().s[55]++, toIndex(to));
  const piece = (cov_m37usqyvk().s[56]++, G.board[indexFrom]);
  const crownhead = (cov_m37usqyvk().s[57]++, ctx.playerID === '0' ? (cov_m37usqyvk().b[18][0]++, 0) : (cov_m37usqyvk().b[18][1]++, 7));
  cov_m37usqyvk().s[58]++;

  if ((cov_m37usqyvk().b[20][0]++, piece === null) || (cov_m37usqyvk().b[20][1]++, piece.playerID !== ctx.playerID) || (cov_m37usqyvk().b[20][2]++, G.board[indexTo] !== null)) {
    cov_m37usqyvk().b[19][0]++;
    cov_m37usqyvk().s[59]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_m37usqyvk().b[19][1]++;
  }

  const moves = (cov_m37usqyvk().s[60]++, G.jumping === null ? (cov_m37usqyvk().b[21][0]++, getValidMoves(G, ctx.playerID)) : (cov_m37usqyvk().b[21][1]++, getValidMoves(G, ctx.playerID, G.jumping)));
  const move = (cov_m37usqyvk().s[61]++, moves.find(move => {
    cov_m37usqyvk().f[12]++;
    cov_m37usqyvk().s[62]++;
    return (cov_m37usqyvk().b[22][0]++, areCoordsEqual(move.from, from)) && (cov_m37usqyvk().b[22][1]++, areCoordsEqual(move.to, to));
  }));
  cov_m37usqyvk().s[63]++;

  if (typeof move === 'undefined') {
    cov_m37usqyvk().b[23][0]++;
    cov_m37usqyvk().s[64]++;
    return boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["INVALID_MOVE"];
  } else {
    cov_m37usqyvk().b[23][1]++;
  }

  const jumped = (cov_m37usqyvk().s[65]++, move.jumped !== null ? (cov_m37usqyvk().b[24][0]++, toIndex(move.jumped)) : (cov_m37usqyvk().b[24][1]++, -1));
  const isKing = (cov_m37usqyvk().s[66]++, (cov_m37usqyvk().b[25][0]++, piece.isKing) || (cov_m37usqyvk().b[25][1]++, to.y === crownhead));
  const newG = (cov_m37usqyvk().s[67]++, _objectSpread({}, G, {
    board: G.board.map((square, i) => {
      cov_m37usqyvk().f[13]++;
      cov_m37usqyvk().s[68]++;

      switch (i) {
        case indexFrom:
          cov_m37usqyvk().b[26][0]++;
          cov_m37usqyvk().s[69]++;
          return null;

        case indexTo:
          cov_m37usqyvk().b[26][1]++;
          cov_m37usqyvk().s[70]++;
          return _objectSpread({}, piece, {
            isKing
          });

        case jumped:
          cov_m37usqyvk().b[26][2]++;
          cov_m37usqyvk().s[71]++;
          return null;

        default:
          cov_m37usqyvk().b[26][3]++;
          cov_m37usqyvk().s[72]++;
          return square;
      }
    }),
    jumping: null
  }));
  cov_m37usqyvk().s[73]++;

  if (move.jumped === null) {
    cov_m37usqyvk().b[27][0]++;
    cov_m37usqyvk().s[74]++;
    return newG;
  } else {
    cov_m37usqyvk().b[27][1]++;
  }

  const jumping = (cov_m37usqyvk().s[75]++, {
    data: _objectSpread({}, piece, {
      isKing
    }),
    coord: to
  });
  const postMoves = (cov_m37usqyvk().s[76]++, getValidMoves(newG, ctx.playerID, jumping));
  cov_m37usqyvk().s[77]++;

  if ((cov_m37usqyvk().b[29][0]++, postMoves.length > 0) && (cov_m37usqyvk().b[29][1]++, postMoves[0].jumped !== null)) {
    cov_m37usqyvk().b[28][0]++;
    cov_m37usqyvk().s[78]++;
    return _objectSpread({}, newG, {
      jumping
    });
  } else {
    cov_m37usqyvk().b[28][1]++;
  }

  cov_m37usqyvk().s[79]++;
  return newG;
}
const CheckersGame = (cov_m37usqyvk().s[80]++, {
  name: 'checkers',
  setup: () => {
    cov_m37usqyvk().f[14]++;
    cov_m37usqyvk().s[81]++;
    return {
      board: INITIAL_BOARD,
      jumping: null
    };
  },
  moves: {
    move
  },
  turn: {
    moveLimit: 1,
    order: {
      first: () => {
        cov_m37usqyvk().f[15]++;
        cov_m37usqyvk().s[82]++;
        return 0;
      },
      next: (G, ctx) => {
        cov_m37usqyvk().f[16]++;
        cov_m37usqyvk().s[83]++;
        return G.jumping === null ? (cov_m37usqyvk().b[30][0]++, (ctx.playOrderPos + 1) % ctx.numPlayers) : (cov_m37usqyvk().b[30][1]++, ctx.playOrderPos);
      }
    }
  },
  endIf: (G, ctx) => {
    cov_m37usqyvk().f[17]++;
    cov_m37usqyvk().s[84]++;

    if (getValidMoves(G, ctx.currentPlayer === '0' ? (cov_m37usqyvk().b[32][0]++, '1') : (cov_m37usqyvk().b[32][1]++, '0')).length === 0) {
      cov_m37usqyvk().b[31][0]++;
      cov_m37usqyvk().s[85]++;
      return {
        winner: ctx.currentPlayer
      };
    } else {
      cov_m37usqyvk().b[31][1]++;
    }
  }
});

/***/ })

};;
//# sourceMappingURL=14.js.map