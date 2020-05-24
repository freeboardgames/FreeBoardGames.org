exports.ids = [19];
exports.modules = {

/***/ "./src/games/tictactoeplus/ai.ts":
/*!***************************************!*\
  !*** ./src/games/tictactoeplus/ai.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/ai */ "boardgame.io/ai");
/* harmony import */ var boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__);
function cov_1dqko1elzv() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoeplus/ai.ts";
  var hash = "e1527b8e73eb1620ea69964f84c38009debca713";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoeplus/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 11,
          column: 47
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 41
        }
      },
      "2": {
        start: {
          line: 15,
          column: 29
        },
        end: {
          line: 15,
          column: 31
        }
      },
      "3": {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "5": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 18
        }
      },
      "6": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "7": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "8": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 71
        }
      },
      "9": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 44
        }
      },
      "10": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 16
        }
      },
      "11": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 101
        }
      },
      "12": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 61
        }
      },
      "13": {
        start: {
          line: 33,
          column: 26
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "14": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "15": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 50,
          column: 8
        }
      },
      "16": {
        start: {
          line: 41,
          column: 26
        },
        end: {
          line: 41,
          column: 28
        }
      },
      "17": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 46,
          column: 13
        }
      },
      "18": {
        start: {
          line: 42,
          column: 25
        },
        end: {
          line: 42,
          column: 26
        }
      },
      "19": {
        start: {
          line: 43,
          column: 14
        },
        end: {
          line: 45,
          column: 15
        }
      },
      "20": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 61
        }
      },
      "21": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 25
        }
      },
      "22": {
        start: {
          line: 51,
          column: 11
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "23": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 55,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 50
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 43
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
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
            column: 41
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 10
          },
          end: {
            line: 34,
            column: 11
          }
        },
        loc: {
          start: {
            line: 34,
            column: 29
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 21
          },
          end: {
            line: 40,
            column: 22
          }
        },
        loc: {
          start: {
            line: 40,
            column: 33
          },
          end: {
            line: 48,
            column: 11
          }
        },
        line: 40
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        }],
        line: 35
      },
      "2": {
        loc: {
          start: {
            line: 43,
            column: 14
          },
          end: {
            line: 45,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 14
          },
          end: {
            line: 45,
            column: 15
          }
        }, {
          start: {
            line: 43,
            column: 14
          },
          end: {
            line: 45,
            column: 15
          }
        }],
        line: 43
      },
      "3": {
        loc: {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 56,
            column: 5
          }
        }, {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 56,
            column: 5
          }
        }],
        line: 51
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
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e1527b8e73eb1620ea69964f84c38009debca713"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1dqko1elzv = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1dqko1elzv();


class TictactoeRandomBot {
  async play(state, playerID) {
    cov_1dqko1elzv().f[0]++;
    const cell = (cov_1dqko1elzv().s[0]++, this.generateRandomMove(state));
    cov_1dqko1elzv().s[1]++;
    return this.makeMove(playerID, cell);
  }

  generateRandomMove(state) {
    cov_1dqko1elzv().f[1]++;
    const freeCellsIndexes = (cov_1dqko1elzv().s[2]++, []);
    const cells = (cov_1dqko1elzv().s[3]++, state.G.cells);
    cov_1dqko1elzv().s[4]++;

    for (let i = (cov_1dqko1elzv().s[5]++, 0); i < cells.length; i++) {
      cov_1dqko1elzv().s[6]++;

      if (cells[i] === null) {
        cov_1dqko1elzv().b[0][0]++;
        cov_1dqko1elzv().s[7]++;
        freeCellsIndexes.push(i);
      } else {
        cov_1dqko1elzv().b[0][1]++;
      }
    }

    const randIndex = (cov_1dqko1elzv().s[8]++, this.randomNumber(0, freeCellsIndexes.length - 1));
    const cell = (cov_1dqko1elzv().s[9]++, freeCellsIndexes[randIndex]);
    cov_1dqko1elzv().s[10]++;
    return cell;
  }

  makeMove(playerID, cell) {
    cov_1dqko1elzv().f[2]++;
    cov_1dqko1elzv().s[11]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'clickCell',
          args: [cell],
          playerID
        }
      }
    };
  }

  randomNumber(min, max) {
    cov_1dqko1elzv().f[3]++;
    cov_1dqko1elzv().s[12]++;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

const config = (cov_1dqko1elzv().s[13]++, {
  bgioAI: level => {
    cov_1dqko1elzv().f[4]++;
    cov_1dqko1elzv().s[14]++;

    if (level === '2') {
      cov_1dqko1elzv().b[1][0]++;
      cov_1dqko1elzv().s[15]++;
      // Hard
      return {
        type: boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__["MCTSBot"],
        ai: {
          enumerate: G => {
            cov_1dqko1elzv().f[5]++;
            const moves = (cov_1dqko1elzv().s[16]++, []);
            cov_1dqko1elzv().s[17]++;

            for (let i = (cov_1dqko1elzv().s[18]++, 0); i < 16; i++) {
              cov_1dqko1elzv().s[19]++;

              if (G.cells[i] === null) {
                cov_1dqko1elzv().b[2][0]++;
                cov_1dqko1elzv().s[20]++;
                moves.push({
                  move: 'clickCell',
                  args: [i]
                });
              } else {
                cov_1dqko1elzv().b[2][1]++;
              }
            }

            cov_1dqko1elzv().s[21]++;
            return moves;
          }
        }
      };
    } else {
      cov_1dqko1elzv().b[1][1]++;
      cov_1dqko1elzv().s[22]++;

      if (level === '1') {
        cov_1dqko1elzv().b[3][0]++;
        cov_1dqko1elzv().s[23]++;
        // Easy
        return {
          bot: TictactoeRandomBot
        };
      } else {
        cov_1dqko1elzv().b[3][1]++;
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

};;
//# sourceMappingURL=19.js.map