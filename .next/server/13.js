exports.ids = [13];
exports.modules = {

/***/ "./src/games/chess/ai.ts":
/*!*******************************!*\
  !*** ./src/games/chess/ai.ts ***!
  \*******************************/
/*! exports provided: StockfishBot, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockfishBot", function() { return StockfishBot; });
/* harmony import */ var _stockfish8_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockfish8.worker */ "./src/games/chess/stockfish8.worker.js");
/* harmony import */ var _stockfish8_worker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stockfish8_worker__WEBPACK_IMPORTED_MODULE_0__);
function cov_1v48fgq7z7() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/chess/ai.ts";
  var hash = "4187e1c7329916b16f95c9b28b41d2e80cbdaf6d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/chess/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 9,
          column: 64
        }
      },
      "1": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "2": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 16
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 40
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 25
        }
      },
      "5": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 37
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "7": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 36,
          column: 8
        }
      },
      "8": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 30
        }
      },
      "9": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 35,
          column: 9
        }
      },
      "10": {
        start: {
          line: 34,
          column: 10
        },
        end: {
          line: 34,
          column: 37
        }
      },
      "11": {
        start: {
          line: 37,
          column: 18
        },
        end: {
          line: 37,
          column: 57
        }
      },
      "12": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 59
        }
      },
      "13": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "14": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 41
        }
      },
      "15": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 39
        }
      },
      "16": {
        start: {
          line: 44,
          column: 20
        },
        end: {
          line: 44,
          column: 44
        }
      },
      "17": {
        start: {
          line: 45,
          column: 23
        },
        end: {
          line: 45,
          column: 50
        }
      },
      "18": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 58
        }
      },
      "19": {
        start: {
          line: 52,
          column: 14
        },
        end: {
          line: 52,
          column: 29
        }
      },
      "20": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "21": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 29
        }
      },
      "22": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "23": {
        start: {
          line: 62,
          column: 19
        },
        end: {
          line: 62,
          column: 60
        }
      },
      "24": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 58
        }
      },
      "25": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 16
        }
      },
      "26": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 96
        }
      },
      "27": {
        start: {
          line: 74,
          column: 26
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "28": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 29
        }
      },
      "29": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 46
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 30,
            column: 30
          }
        },
        loc: {
          start: {
            line: 30,
            column: 42
          },
          end: {
            line: 47,
            column: 5
          }
        },
        line: 30
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 31,
            column: 30
          },
          end: {
            line: 31,
            column: 31
          }
        },
        loc: {
          start: {
            line: 31,
            column: 46
          },
          end: {
            line: 36,
            column: 7
          }
        },
        line: 31
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 30
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 54
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 32
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 60
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 69,
            column: 3
          }
        },
        loc: {
          start: {
            line: 69,
            column: 43
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 69
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 75,
            column: 10
          },
          end: {
            line: 75,
            column: 11
          }
        },
        loc: {
          start: {
            line: 75,
            column: 29
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 75
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }, {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }],
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 33,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 33,
            column: 15
          }
        }, {
          start: {
            line: 33,
            column: 19
          },
          end: {
            line: 33,
            column: 43
          }
        }],
        line: 33
      },
      "2": {
        loc: {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        }, {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        }],
        line: 39
      },
      "3": {
        loc: {
          start: {
            line: 54,
            column: 14
          },
          end: {
            line: 54,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 54,
            column: 23
          },
          end: {
            line: 54,
            column: 28
          }
        }],
        line: 54
      },
      "4": {
        loc: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        }, {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        }],
        line: 55
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }, {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }],
        line: 61
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
      "29": 0
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
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4187e1c7329916b16f95c9b28b41d2e80cbdaf6d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1v48fgq7z7 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1v48fgq7z7();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const LVL_MOVETIMES = (cov_1v48fgq7z7().s[0]++, [100, 200, 300, 400, 600, 800, 1000, 2000]);
const LVL_DEPTHS = (cov_1v48fgq7z7().s[1]++, [1, 1, 2, 3, 5, 8, 13, 22]);
let botLevel = (cov_1v48fgq7z7().s[2]++, 1);

class Stockfish {
  constructor() {
    _defineProperty(this, "worker", void 0);

    cov_1v48fgq7z7().f[0]++;
    cov_1v48fgq7z7().s[3]++;
    this.worker = new _stockfish8_worker__WEBPACK_IMPORTED_MODULE_0___default.a();
  }

  start() {
    cov_1v48fgq7z7().f[1]++;
    cov_1v48fgq7z7().s[4]++;
    this.send('isready');
  }

  send(message) {
    cov_1v48fgq7z7().f[2]++;
    cov_1v48fgq7z7().s[5]++;
    this.worker.postMessage(message);
  }

  async getMove(fen) {
    cov_1v48fgq7z7().f[3]++;
    cov_1v48fgq7z7().s[6]++;
    return await new Promise(resolve => {
      cov_1v48fgq7z7().f[4]++;
      cov_1v48fgq7z7().s[7]++;

      this.worker.onmessage = event => {
        cov_1v48fgq7z7().f[5]++;
        const msg = (cov_1v48fgq7z7().s[8]++, event.data);
        cov_1v48fgq7z7().s[9]++;

        if ((cov_1v48fgq7z7().b[1][0]++, msg) && (cov_1v48fgq7z7().b[1][1]++, msg.includes('bestmove'))) {
          cov_1v48fgq7z7().b[0][0]++;
          cov_1v48fgq7z7().s[10]++;
          resolve(msg.split(' ')[1]);
        } else {
          cov_1v48fgq7z7().b[0][1]++;
        }
      };

      const lvl = (cov_1v48fgq7z7().s[11]++, Math.round((botLevel - 1) * 20.0 / 7));
      cov_1v48fgq7z7().s[12]++;
      this.send(`setoption name Skill Level value ${lvl}`);
      cov_1v48fgq7z7().s[13]++;

      if (fen !== '') {
        cov_1v48fgq7z7().b[2][0]++;
        cov_1v48fgq7z7().s[14]++;
        this.send(`position fen ${fen}`);
      } else {
        cov_1v48fgq7z7().b[2][1]++;
        cov_1v48fgq7z7().s[15]++;
        this.send('position startpos');
      }

      const depth = (cov_1v48fgq7z7().s[16]++, LVL_DEPTHS[botLevel - 1]);
      const movetime = (cov_1v48fgq7z7().s[17]++, LVL_MOVETIMES[botLevel - 1]);
      cov_1v48fgq7z7().s[18]++;
      this.send(`go depth ${depth} movetime ${movetime}`);
    });
  }

}

class StockfishBot {
  constructor(isTest = (cov_1v48fgq7z7().b[3][0]++, false)) {
    _defineProperty(this, "stockfish", (cov_1v48fgq7z7().s[19]++, new Stockfish()));

    cov_1v48fgq7z7().f[6]++;
    cov_1v48fgq7z7().s[20]++;

    if (!isTest) {
      cov_1v48fgq7z7().b[4][0]++;
      cov_1v48fgq7z7().s[21]++;
      this.stockfish.start();
    } else {
      cov_1v48fgq7z7().b[4][1]++;
    }
  }

  async play(state) {
    cov_1v48fgq7z7().f[7]++;
    cov_1v48fgq7z7().s[22]++;

    if (!state.ctx.gameover) {
      cov_1v48fgq7z7().b[5][0]++;
      const move = (cov_1v48fgq7z7().s[23]++, await this.stockfish.getMove(state.G.fen));
      cov_1v48fgq7z7().s[24]++;
      return this.makeMove(move, state.ctx.currentPlayer);
    } else {
      cov_1v48fgq7z7().b[5][1]++;
      cov_1v48fgq7z7().s[25]++;
      return {};
    }
  }

  makeMove(move, playerID) {
    cov_1v48fgq7z7().f[8]++;
    cov_1v48fgq7z7().s[26]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'move',
          args: [move],
          playerID
        }
      }
    };
  }

}
const config = (cov_1v48fgq7z7().s[27]++, {
  bgioAI: level => {
    cov_1v48fgq7z7().f[9]++;
    cov_1v48fgq7z7().s[28]++;
    botLevel = Number(level);
    cov_1v48fgq7z7().s[29]++;
    return StockfishBot;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/chess/stockfish8.worker.js":
/*!**********************************************!*\
  !*** ./src/games/chess/stockfish8.worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cov_1b2kqsbm1r() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/chess/stockfish8.worker.js";
  var hash = "431e787c638a8decd7e4c7335f5aad598df8a3a4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/chess/stockfish8.worker.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 3,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 73
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 17
          },
          end: {
            line: 1,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1,
            column: 28
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "431e787c638a8decd7e4c7335f5aad598df8a3a4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1b2kqsbm1r = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1b2kqsbm1r();
cov_1b2kqsbm1r().s[0]++;

module.exports = function () {
  cov_1b2kqsbm1r().f[0]++;
  cov_1b2kqsbm1r().s[1]++;
  return new Worker("/_next/" + "static/86413aa837e28d1f7509.worker.js");
};

/***/ })

};;
//# sourceMappingURL=13.js.map