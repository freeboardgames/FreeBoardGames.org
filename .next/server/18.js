exports.ids = [18];
exports.modules = {

/***/ "./src/games/tictactoe/ai.ts":
/*!***********************************!*\
  !*** ./src/games/tictactoe/ai.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/ai */ "boardgame.io/ai");
/* harmony import */ var boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__);
function cov_q65kpg81() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/ai.ts";
  var hash = "63b1f20091f6176ced1c1c4d265d21047637270c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/ai.ts",
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
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 56
        }
      },
      "13": {
        start: {
          line: 34,
          column: 26
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "14": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "15": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 51,
          column: 8
        }
      },
      "16": {
        start: {
          line: 42,
          column: 26
        },
        end: {
          line: 42,
          column: 28
        }
      },
      "17": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 47,
          column: 13
        }
      },
      "18": {
        start: {
          line: 43,
          column: 25
        },
        end: {
          line: 43,
          column: 26
        }
      },
      "19": {
        start: {
          line: 44,
          column: 14
        },
        end: {
          line: 46,
          column: 15
        }
      },
      "20": {
        start: {
          line: 45,
          column: 16
        },
        end: {
          line: 45,
          column: 61
        }
      },
      "21": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 25
        }
      },
      "22": {
        start: {
          line: 52,
          column: 11
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "23": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 40
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
            line: 32,
            column: 3
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 35,
            column: 11
          }
        },
        loc: {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 35
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 21
          },
          end: {
            line: 41,
            column: 22
          }
        },
        loc: {
          start: {
            line: 41,
            column: 33
          },
          end: {
            line: 49,
            column: 11
          }
        },
        line: 41
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
            line: 36,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        }],
        line: 36
      },
      "2": {
        loc: {
          start: {
            line: 44,
            column: 14
          },
          end: {
            line: 46,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 14
          },
          end: {
            line: 46,
            column: 15
          }
        }, {
          start: {
            line: 44,
            column: 14
          },
          end: {
            line: 46,
            column: 15
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 52,
            column: 11
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 11
          },
          end: {
            line: 55,
            column: 5
          }
        }, {
          start: {
            line: 52,
            column: 11
          },
          end: {
            line: 55,
            column: 5
          }
        }],
        line: 52
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
    hash: "63b1f20091f6176ced1c1c4d265d21047637270c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_q65kpg81 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_q65kpg81();


class TictactoeRandomBot {
  async play(state, playerID) {
    cov_q65kpg81().f[0]++;
    const cell = (cov_q65kpg81().s[0]++, this.generateRandomMove(state));
    cov_q65kpg81().s[1]++;
    return this.makeMove(playerID, cell);
  }

  generateRandomMove(state) {
    cov_q65kpg81().f[1]++;
    const freeCellsIndexes = (cov_q65kpg81().s[2]++, []);
    const cells = (cov_q65kpg81().s[3]++, state.G.cells);
    cov_q65kpg81().s[4]++;

    for (let i = (cov_q65kpg81().s[5]++, 0); i < cells.length; i++) {
      cov_q65kpg81().s[6]++;

      if (cells[i] === null) {
        cov_q65kpg81().b[0][0]++;
        cov_q65kpg81().s[7]++;
        freeCellsIndexes.push(i);
      } else {
        cov_q65kpg81().b[0][1]++;
      }
    }

    const randIndex = (cov_q65kpg81().s[8]++, this.randomNumber(0, freeCellsIndexes.length - 1));
    const cell = (cov_q65kpg81().s[9]++, freeCellsIndexes[randIndex]);
    cov_q65kpg81().s[10]++;
    return cell;
  }

  makeMove(playerID, cell) {
    cov_q65kpg81().f[2]++;
    cov_q65kpg81().s[11]++;
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
    cov_q65kpg81().f[3]++;
    cov_q65kpg81().s[12]++;
    // return Math.floor(Math.random() * (max - min + 1) + min);  // https://github.com/babel/minify/issues/904
    return Math.random() * (max - min + 1) + min << 0;
  }

}

const config = (cov_q65kpg81().s[13]++, {
  bgioAI: level => {
    cov_q65kpg81().f[4]++;
    cov_q65kpg81().s[14]++;

    if (level === '2') {
      cov_q65kpg81().b[1][0]++;
      cov_q65kpg81().s[15]++;
      // Hard
      return {
        type: boardgame_io_ai__WEBPACK_IMPORTED_MODULE_0__["MCTSBot"],
        ai: {
          enumerate: G => {
            cov_q65kpg81().f[5]++;
            const moves = (cov_q65kpg81().s[16]++, []);
            cov_q65kpg81().s[17]++;

            for (let i = (cov_q65kpg81().s[18]++, 0); i < 9; i++) {
              cov_q65kpg81().s[19]++;

              if (G.cells[i] === null) {
                cov_q65kpg81().b[2][0]++;
                cov_q65kpg81().s[20]++;
                moves.push({
                  move: 'clickCell',
                  args: [i]
                });
              } else {
                cov_q65kpg81().b[2][1]++;
              }
            }

            cov_q65kpg81().s[21]++;
            return moves;
          }
        }
      };
    } else {
      cov_q65kpg81().b[1][1]++;
      cov_q65kpg81().s[22]++;

      if (level === '1') {
        cov_q65kpg81().b[3][0]++;
        cov_q65kpg81().s[23]++;
        // Easy
        return {
          ai: TictactoeRandomBot
        };
      } else {
        cov_q65kpg81().b[3][1]++;
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

};;
//# sourceMappingURL=18.js.map