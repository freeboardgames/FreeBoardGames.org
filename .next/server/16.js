exports.ids = [16];
exports.modules = {

/***/ "./src/games/seabattle/ai.ts":
/*!***********************************!*\
  !*** ./src/games/seabattle/ai.ts ***!
  \***********************************/
/*! exports provided: SeabattleBot, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeabattleBot", function() { return SeabattleBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/seabattle/game.ts");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shuffle-array */ "shuffle-array");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_1__);
function cov_j6hb4vjqv() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/ai.ts";
  var hash = "7290addc126aa92d130533cfc11256b3d86b0931";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 28
        },
        end: {
          line: 20,
          column: 82
        }
      },
      "2": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 60
        }
      },
      "3": {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 24,
          column: 62
        }
      },
      "4": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 27
        }
      },
      "5": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 53
        }
      },
      "6": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 48
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 101
        }
      },
      "8": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 107
        }
      },
      "9": {
        start: {
          line: 40,
          column: 19
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "10": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 103
        }
      },
      "11": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "12": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "13": {
        start: {
          line: 47,
          column: 31
        },
        end: {
          line: 47,
          column: 79
        }
      },
      "14": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "15": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 66
        }
      },
      "16": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 52
        }
      },
      "17": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 42
        }
      },
      "18": {
        start: {
          line: 61,
          column: 17
        },
        end: {
          line: 61,
          column: 55
        }
      },
      "19": {
        start: {
          line: 61,
          column: 42
        },
        end: {
          line: 61,
          column: 54
        }
      },
      "20": {
        start: {
          line: 62,
          column: 17
        },
        end: {
          line: 62,
          column: 55
        }
      },
      "21": {
        start: {
          line: 62,
          column: 42
        },
        end: {
          line: 62,
          column: 54
        }
      },
      "22": {
        start: {
          line: 64,
          column: 19
        },
        end: {
          line: 64,
          column: 65
        }
      },
      "23": {
        start: {
          line: 65,
          column: 19
        },
        end: {
          line: 65,
          column: 65
        }
      },
      "24": {
        start: {
          line: 66,
          column: 22
        },
        end: {
          line: 66,
          column: 77
        }
      },
      "25": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 70,
          column: 7
        }
      },
      "26": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 28
        }
      },
      "27": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 96
        }
      },
      "28": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 19
        }
      },
      "29": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "30": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "31": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 20
        }
      },
      "32": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 16
        }
      },
      "33": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 97,
          column: 7
        }
      },
      "34": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 74
        }
      },
      "35": {
        start: {
          line: 101,
          column: 52
        },
        end: {
          line: 101,
          column: 72
        }
      },
      "36": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 73
        }
      },
      "37": {
        start: {
          line: 105,
          column: 49
        },
        end: {
          line: 105,
          column: 63
        }
      },
      "38": {
        start: {
          line: 109,
          column: 38
        },
        end: {
          line: 109,
          column: 40
        }
      },
      "39": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 114,
          column: 5
        }
      },
      "40": {
        start: {
          line: 110,
          column: 17
        },
        end: {
          line: 110,
          column: 18
        }
      },
      "41": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 113,
          column: 7
        }
      },
      "42": {
        start: {
          line: 111,
          column: 19
        },
        end: {
          line: 111,
          column: 20
        }
      },
      "43": {
        start: {
          line: 112,
          column: 8
        },
        end: {
          line: 112,
          column: 40
        }
      },
      "44": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 54
        }
      },
      "45": {
        start: {
          line: 119,
          column: 18
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "46": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 112
        }
      },
      "47": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 30
        }
      },
      "48": {
        start: {
          line: 127,
          column: 33
        },
        end: {
          line: 133,
          column: 1
        }
      },
      "49": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 131,
          column: 6
        }
      },
      "50": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 138,
          column: 5
        }
      },
      "51": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 50
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 53
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 47
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 52
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 103
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 70
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 60
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 61,
            column: 31
          },
          end: {
            line: 61,
            column: 32
          }
        },
        loc: {
          start: {
            line: 61,
            column: 42
          },
          end: {
            line: 61,
            column: 54
          }
        },
        line: 61
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 62,
            column: 31
          },
          end: {
            line: 62,
            column: 32
          }
        },
        loc: {
          start: {
            line: 62,
            column: 42
          },
          end: {
            line: 62,
            column: 54
          }
        },
        line: 62
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        loc: {
          start: {
            line: 73,
            column: 24
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 73
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 46
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 77
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 50
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 61
          },
          end: {
            line: 98,
            column: 3
          }
        },
        line: 91
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        loc: {
          start: {
            line: 100,
            column: 55
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 100
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 101,
            column: 33
          },
          end: {
            line: 101,
            column: 34
          }
        },
        loc: {
          start: {
            line: 101,
            column: 52
          },
          end: {
            line: 101,
            column: 72
          }
        },
        line: 101
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 104,
            column: 3
          }
        },
        loc: {
          start: {
            line: 104,
            column: 44
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 104
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 105,
            column: 32
          },
          end: {
            line: 105,
            column: 33
          }
        },
        loc: {
          start: {
            line: 105,
            column: 49
          },
          end: {
            line: 105,
            column: 63
          }
        },
        line: 105
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 40
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 108
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 47
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 118
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 120,
            column: 7
          }
        },
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 112
          }
        },
        line: 121
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 128,
            column: 11
          }
        },
        loc: {
          start: {
            line: 128,
            column: 16
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 128
      },
      "20": {
        name: "sleep",
        decl: {
          start: {
            line: 135,
            column: 9
          },
          end: {
            line: 135,
            column: 14
          }
        },
        loc: {
          start: {
            line: 135,
            column: 37
          },
          end: {
            line: 139,
            column: 1
          }
        },
        line: 135
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 136,
            column: 21
          },
          end: {
            line: 136,
            column: 22
          }
        },
        loc: {
          start: {
            line: 136,
            column: 34
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 136
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 52
          },
          end: {
            line: 24,
            column: 55
          }
        }, {
          start: {
            line: 24,
            column: 58
          },
          end: {
            line: 24,
            column: 62
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 103
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 41
          }
        }, {
          start: {
            line: 42,
            column: 45
          },
          end: {
            line: 42,
            column: 63
          }
        }, {
          start: {
            line: 42,
            column: 67
          },
          end: {
            line: 42,
            column: 103
          }
        }],
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }, {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }],
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }, {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }],
        line: 48
      },
      "5": {
        loc: {
          start: {
            line: 66,
            column: 22
          },
          end: {
            line: 66,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 66,
            column: 46
          },
          end: {
            line: 66,
            column: 60
          }
        }, {
          start: {
            line: 66,
            column: 63
          },
          end: {
            line: 66,
            column: 77
          }
        }],
        line: 66
      },
      "6": {
        loc: {
          start: {
            line: 74,
            column: 11
          },
          end: {
            line: 74,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 74,
            column: 11
          },
          end: {
            line: 74,
            column: 17
          }
        }, {
          start: {
            line: 74,
            column: 21
          },
          end: {
            line: 74,
            column: 27
          }
        }],
        line: 74
      },
      "7": {
        loc: {
          start: {
            line: 78,
            column: 11
          },
          end: {
            line: 78,
            column: 95
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 11
          },
          end: {
            line: 78,
            column: 34
          }
        }, {
          start: {
            line: 78,
            column: 38
          },
          end: {
            line: 78,
            column: 61
          }
        }, {
          start: {
            line: 78,
            column: 65
          },
          end: {
            line: 78,
            column: 95
          }
        }],
        line: 78
      },
      "8": {
        loc: {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }],
        line: 84
      },
      "9": {
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 112
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 58
          }
        }, {
          start: {
            line: 121,
            column: 62
          },
          end: {
            line: 121,
            column: 85
          }
        }, {
          start: {
            line: 121,
            column: 89
          },
          end: {
            line: 121,
            column: 112
          }
        }],
        line: 121
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
      "51": 0
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
      "21": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0],
      "9": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7290addc126aa92d130533cfc11256b3d86b0931"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_j6hb4vjqv = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_j6hb4vjqv();


class SeabattleBot {
  async play(state, playerID) {
    cov_j6hb4vjqv().f[0]++;
    cov_j6hb4vjqv().s[0]++;

    if (state.ctx.phase === 'setup') {
      cov_j6hb4vjqv().b[0][0]++;
      const shipPositions = (cov_j6hb4vjqv().s[1]++, Object(_game__WEBPACK_IMPORTED_MODULE_0__["generateRandomShips"])(parseInt(state.ctx.currentPlayer)));
      cov_j6hb4vjqv().s[2]++;
      return this.makeSetShipsMove(shipPositions, playerID);
    } else {
      cov_j6hb4vjqv().b[0][1]++;
      // if this is the first turn for our AI, wait only 500ms.  Else 2500ms
      const sleepMs = (cov_j6hb4vjqv().s[3]++, state.G.salvos.length === 0 ? (cov_j6hb4vjqv().b[1][0]++, 500) : (cov_j6hb4vjqv().b[1][1]++, 2500));
      cov_j6hb4vjqv().s[4]++;
      await sleep(sleepMs);
      const cell = (cov_j6hb4vjqv().s[5]++, this.generateMove(playerID, state));
      cov_j6hb4vjqv().s[6]++;
      return this.makeSalvoMove(cell, playerID);
    }
  }

  makeSetShipsMove(ships, playerID) {
    cov_j6hb4vjqv().f[1]++;
    cov_j6hb4vjqv().s[7]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'setShips',
          args: [ships],
          playerID
        }
      }
    };
  }

  makeSalvoMove(cell, playerID) {
    cov_j6hb4vjqv().f[2]++;
    cov_j6hb4vjqv().s[8]++;
    return {
      action: {
        type: 'MAKE_MOVE',
        payload: {
          type: 'salvo',
          args: [cell.x, cell.y],
          playerID
        }
      }
    };
  }

  generateMove(playerID, state) {
    cov_j6hb4vjqv().f[3]++;
    const salvos = (cov_j6hb4vjqv().s[9]++, state.G.salvos.filter(salvo => {
      cov_j6hb4vjqv().f[4]++;
      cov_j6hb4vjqv().s[10]++;
      return (cov_j6hb4vjqv().b[2][0]++, salvo.player === Number(playerID)) && (cov_j6hb4vjqv().b[2][1]++, salvo.hit === true) && (cov_j6hb4vjqv().b[2][2]++, typeof salvo.hitShip !== 'undefined');
    }));
    cov_j6hb4vjqv().s[11]++;

    for (const salvo of salvos) {
      cov_j6hb4vjqv().s[12]++;

      // if we have already fired salvos, see if we've hit any ships that remain unsunk
      if (!this.isShipSunk(state, salvo.hitShip)) {
        cov_j6hb4vjqv().b[3][0]++;
        const otherHitSalvos = (cov_j6hb4vjqv().s[13]++, this.getOtherSalvosHitShip(state, salvo.hitShip));
        cov_j6hb4vjqv().s[14]++;

        if (otherHitSalvos.length >= 2) {
          cov_j6hb4vjqv().b[4][0]++;
          cov_j6hb4vjqv().s[15]++;
          // we have hit this ship at least twice, so we can make an intelligent move
          return this.getNextShipFoundMove(state, otherHitSalvos);
        } else {
          cov_j6hb4vjqv().b[4][1]++;
        } // no other salvos for the same ship were hit, so hit a random neighbor


        cov_j6hb4vjqv().s[16]++;
        return this.getRandomNeighbor(state, salvo);
      } else {
        cov_j6hb4vjqv().b[3][1]++;
      }
    } // generate a random move


    cov_j6hb4vjqv().s[17]++;
    return this.generateRandomMove(state);
  }

  getNextShipFoundMove(state, hitSalvos) {
    cov_j6hb4vjqv().f[5]++;
    const xMap = (cov_j6hb4vjqv().s[18]++, hitSalvos.map(salvo => {
      cov_j6hb4vjqv().f[6]++;
      cov_j6hb4vjqv().s[19]++;
      return salvo.cell.x;
    }));
    const yMap = (cov_j6hb4vjqv().s[20]++, hitSalvos.map(salvo => {
      cov_j6hb4vjqv().f[7]++;
      cov_j6hb4vjqv().s[21]++;
      return salvo.cell.y;
    }));
    const minPos = (cov_j6hb4vjqv().s[22]++, {
      x: Math.min(...xMap),
      y: Math.min(...yMap)
    });
    const maxPos = (cov_j6hb4vjqv().s[23]++, {
      x: Math.max(...xMap),
      y: Math.max(...yMap)
    });
    const direction = (cov_j6hb4vjqv().s[24]++, maxPos.x === minPos.x ? (cov_j6hb4vjqv().b[5][0]++, {
      x: 0,
      y: 1
    }) : (cov_j6hb4vjqv().b[5][1]++, {
      x: 1,
      y: 0
    }));
    cov_j6hb4vjqv().s[25]++;
    return this.anyValidMove(state, [{
      x: minPos.x - direction.x,
      y: minPos.y - direction.y
    }, {
      x: maxPos.x + direction.x,
      y: maxPos.y + direction.y
    }]);
  }

  isInBounds(x) {
    cov_j6hb4vjqv().f[8]++;
    cov_j6hb4vjqv().s[26]++;
    return (cov_j6hb4vjqv().b[6][0]++, x >= 0) && (cov_j6hb4vjqv().b[6][1]++, x <= 9);
  }

  isValidMove(state, cell) {
    cov_j6hb4vjqv().f[9]++;
    cov_j6hb4vjqv().s[27]++;
    return (cov_j6hb4vjqv().b[7][0]++, this.isInBounds(cell.x)) && (cov_j6hb4vjqv().b[7][1]++, this.isInBounds(cell.y)) && (cov_j6hb4vjqv().b[7][2]++, this.isUniqueMove(state, cell));
  }

  anyValidMove(state, moves) {
    cov_j6hb4vjqv().f[10]++;
    cov_j6hb4vjqv().s[28]++;
    shuffle_array__WEBPACK_IMPORTED_MODULE_1___default()(moves); // ONLY source of randomness

    cov_j6hb4vjqv().s[29]++;

    for (const move of moves) {
      cov_j6hb4vjqv().s[30]++;

      if (this.isValidMove(state, move)) {
        cov_j6hb4vjqv().b[8][0]++;
        cov_j6hb4vjqv().s[31]++;
        return move;
      } else {
        cov_j6hb4vjqv().b[8][1]++;
      }
    }

    cov_j6hb4vjqv().s[32]++;
    return null;
  }

  getRandomNeighbor(state, salvo) {
    cov_j6hb4vjqv().f[11]++;
    cov_j6hb4vjqv().s[33]++;
    return this.anyValidMove(state, [{
      x: salvo.cell.x - 1,
      y: salvo.cell.y
    }, {
      x: salvo.cell.x,
      y: salvo.cell.y - 1
    }, {
      x: salvo.cell.x + 1,
      y: salvo.cell.y
    }, {
      x: salvo.cell.x,
      y: salvo.cell.y + 1
    }]);
  }

  getOtherSalvosHitShip(state, id) {
    cov_j6hb4vjqv().f[12]++;
    cov_j6hb4vjqv().s[34]++;
    return state.G.salvos.filter(salvo => {
      cov_j6hb4vjqv().f[13]++;
      cov_j6hb4vjqv().s[35]++;
      return salvo.hitShip === id;
    });
  }

  isShipSunk(state, id) {
    cov_j6hb4vjqv().f[14]++;
    cov_j6hb4vjqv().s[36]++;
    return state.G.ships.filter(ship => {
      cov_j6hb4vjqv().f[15]++;
      cov_j6hb4vjqv().s[37]++;
      return ship.id === id;
    })[0].sunk;
  }

  generateRandomMove(state) {
    cov_j6hb4vjqv().f[16]++;
    const allPossibleMoves = (cov_j6hb4vjqv().s[38]++, []);
    cov_j6hb4vjqv().s[39]++;

    for (let x = (cov_j6hb4vjqv().s[40]++, 0); x <= 9; x++) {
      cov_j6hb4vjqv().s[41]++;

      for (let y = (cov_j6hb4vjqv().s[42]++, 0); y <= 9; y++) {
        cov_j6hb4vjqv().s[43]++;
        allPossibleMoves.push({
          x,
          y
        });
      }
    }

    cov_j6hb4vjqv().s[44]++;
    return this.anyValidMove(state, allPossibleMoves);
  }

  isUniqueMove(state, cell) {
    cov_j6hb4vjqv().f[17]++;
    const moves = (cov_j6hb4vjqv().s[45]++, state.G.salvos.filter(salvo => {
      cov_j6hb4vjqv().f[18]++;
      cov_j6hb4vjqv().s[46]++;
      return (cov_j6hb4vjqv().b[9][0]++, salvo.player === parseInt(state.ctx.currentPlayer)) && (cov_j6hb4vjqv().b[9][1]++, salvo.cell.x === cell.x) && (cov_j6hb4vjqv().b[9][2]++, salvo.cell.y === cell.y);
    }));
    cov_j6hb4vjqv().s[47]++;
    return moves.length === 0;
  }

}
const config = (cov_j6hb4vjqv().s[48]++, {
  bgioAI: () => {
    cov_j6hb4vjqv().f[19]++;
    cov_j6hb4vjqv().s[49]++;
    return {
      bot: SeabattleBot
    };
  }
});

function sleep(milliseconds) {
  cov_j6hb4vjqv().f[20]++;
  cov_j6hb4vjqv().s[50]++;
  return new Promise(resolve => {
    cov_j6hb4vjqv().f[21]++;
    cov_j6hb4vjqv().s[51]++;
    setTimeout(resolve, milliseconds);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/seabattle/game.ts":
/*!*************************************!*\
  !*** ./src/games/seabattle/game.ts ***!
  \*************************************/
/*! exports provided: playerView, SeabattleGame, generateRandomShips, validateShips, getCellVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerView", function() { return playerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeabattleGame", function() { return SeabattleGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomShips", function() { return generateRandomShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateShips", function() { return validateShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellVector", function() { return getCellVector; });
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boardgame.io/core */ "boardgame.io/core");
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
function cov_2rmfy6gvhj() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/game.ts";
  var hash = "106f2512b460b9a2154489996c028fb2dd27e1ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 32,
          column: 36
        },
        end: {
          line: 32,
          column: 48
        }
      },
      "1": {
        start: {
          line: 33,
          column: 54
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "2": {
        start: {
          line: 40,
          column: 26
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "3": {
        start: {
          line: 41,
          column: 17
        },
        end: {
          line: 41,
          column: 39
        }
      },
      "4": {
        start: {
          line: 42,
          column: 25
        },
        end: {
          line: 42,
          column: 86
        }
      },
      "5": {
        start: {
          line: 42,
          column: 50
        },
        end: {
          line: 42,
          column: 85
        }
      },
      "6": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "7": {
        start: {
          line: 50,
          column: 17
        },
        end: {
          line: 50,
          column: 43
        }
      },
      "8": {
        start: {
          line: 51,
          column: 21
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "9": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "10": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 38
        }
      },
      "11": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 49
        }
      },
      "12": {
        start: {
          line: 60,
          column: 17
        },
        end: {
          line: 60,
          column: 43
        }
      },
      "13": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 63
        }
      },
      "14": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 112
        }
      },
      "15": {
        start: {
          line: 64,
          column: 31
        },
        end: {
          line: 64,
          column: 98
        }
      },
      "16": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "17": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 20
        }
      },
      "18": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "19": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 83
        }
      },
      "20": {
        start: {
          line: 72,
          column: 15
        },
        end: {
          line: 72,
          column: 33
        }
      },
      "21": {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 31
        }
      },
      "22": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 77,
          column: 3
        }
      },
      "23": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 65
        }
      },
      "24": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 82,
          column: 4
        }
      },
      "25": {
        start: {
          line: 85,
          column: 40
        },
        end: {
          line: 125,
          column: 1
        }
      },
      "26": {
        start: {
          line: 88,
          column: 33
        },
        end: {
          line: 91,
          column: 3
        }
      },
      "27": {
        start: {
          line: 101,
          column: 10
        },
        end: {
          line: 103,
          column: 11
        }
      },
      "28": {
        start: {
          line: 102,
          column: 12
        },
        end: {
          line: 102,
          column: 34
        }
      },
      "29": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 119,
          column: 5
        }
      },
      "30": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 115,
          column: 7
        }
      },
      "31": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 114,
          column: 31
        }
      },
      "32": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "33": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 31
        }
      },
      "34": {
        start: {
          line: 131,
          column: 2
        },
        end: {
          line: 140,
          column: 49
        }
      },
      "35": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 16
        }
      },
      "36": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 139,
          column: 5
        }
      },
      "37": {
        start: {
          line: 134,
          column: 28
        },
        end: {
          line: 134,
          column: 55
        }
      },
      "38": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 138,
          column: 7
        }
      },
      "39": {
        start: {
          line: 135,
          column: 19
        },
        end: {
          line: 135,
          column: 20
        }
      },
      "40": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 36
        }
      },
      "41": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 63
        }
      },
      "42": {
        start: {
          line: 141,
          column: 2
        },
        end: {
          line: 141,
          column: 16
        }
      },
      "43": {
        start: {
          line: 146,
          column: 22
        },
        end: {
          line: 152,
          column: 3
        }
      },
      "44": {
        start: {
          line: 153,
          column: 2
        },
        end: {
          line: 155,
          column: 3
        }
      },
      "45": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 60
        }
      },
      "46": {
        start: {
          line: 156,
          column: 2
        },
        end: {
          line: 160,
          column: 3
        }
      },
      "47": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 159,
          column: 5
        }
      },
      "48": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 158,
          column: 24
        }
      },
      "49": {
        start: {
          line: 161,
          column: 2
        },
        end: {
          line: 161,
          column: 25
        }
      },
      "50": {
        start: {
          line: 166,
          column: 2
        },
        end: {
          line: 170,
          column: 3
        }
      },
      "51": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "52": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 168,
          column: 19
        }
      },
      "53": {
        start: {
          line: 171,
          column: 2
        },
        end: {
          line: 171,
          column: 14
        }
      },
      "54": {
        start: {
          line: 175,
          column: 22
        },
        end: {
          line: 175,
          column: 66
        }
      },
      "55": {
        start: {
          line: 176,
          column: 20
        },
        end: {
          line: 176,
          column: 53
        }
      },
      "56": {
        start: {
          line: 177,
          column: 22
        },
        end: {
          line: 177,
          column: 60
        }
      },
      "57": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 186,
          column: 3
        }
      },
      "58": {
        start: {
          line: 178,
          column: 15
        },
        end: {
          line: 178,
          column: 16
        }
      },
      "59": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 185,
          column: 5
        }
      },
      "60": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 50
        }
      },
      "61": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 50
        }
      },
      "62": {
        start: {
          line: 187,
          column: 2
        },
        end: {
          line: 187,
          column: 14
        }
      },
      "63": {
        start: {
          line: 191,
          column: 2
        },
        end: {
          line: 191,
          column: 43
        }
      },
      "64": {
        start: {
          line: 195,
          column: 2
        },
        end: {
          line: 197,
          column: 4
        }
      },
      "65": {
        start: {
          line: 196,
          column: 14
        },
        end: {
          line: 196,
          column: 108
        }
      },
      "66": {
        start: {
          line: 196,
          column: 42
        },
        end: {
          line: 196,
          column: 74
        }
      },
      "67": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 201,
          column: 59
        }
      },
      "68": {
        start: {
          line: 201,
          column: 30
        },
        end: {
          line: 201,
          column: 50
        }
      },
      "69": {
        start: {
          line: 210,
          column: 22
        },
        end: {
          line: 210,
          column: 67
        }
      },
      "70": {
        start: {
          line: 210,
          column: 49
        },
        end: {
          line: 210,
          column: 66
        }
      },
      "71": {
        start: {
          line: 211,
          column: 43
        },
        end: {
          line: 211,
          column: 67
        }
      },
      "72": {
        start: {
          line: 212,
          column: 2
        },
        end: {
          line: 217,
          column: 3
        }
      },
      "73": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 215,
          column: 5
        }
      },
      "74": {
        start: {
          line: 214,
          column: 6
        },
        end: {
          line: 214,
          column: 71
        }
      },
      "75": {
        start: {
          line: 216,
          column: 4
        },
        end: {
          line: 216,
          column: 20
        }
      },
      "76": {
        start: {
          line: 218,
          column: 2
        },
        end: {
          line: 222,
          column: 3
        }
      },
      "77": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 221,
          column: 5
        }
      },
      "78": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 220,
          column: 61
        }
      },
      "79": {
        start: {
          line: 223,
          column: 2
        },
        end: {
          line: 223,
          column: 25
        }
      },
      "80": {
        start: {
          line: 227,
          column: 17
        },
        end: {
          line: 227,
          column: 56
        }
      },
      "81": {
        start: {
          line: 227,
          column: 44
        },
        end: {
          line: 227,
          column: 55
        }
      },
      "82": {
        start: {
          line: 228,
          column: 2
        },
        end: {
          line: 232,
          column: 3
        }
      },
      "83": {
        start: {
          line: 229,
          column: 4
        },
        end: {
          line: 231,
          column: 5
        }
      },
      "84": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 92
        }
      },
      "85": {
        start: {
          line: 233,
          column: 2
        },
        end: {
          line: 233,
          column: 25
        }
      },
      "86": {
        start: {
          line: 237,
          column: 2
        },
        end: {
          line: 259,
          column: 3
        }
      },
      "87": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 240,
          column: 5
        }
      },
      "88": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 239,
          column: 15
        }
      },
      "89": {
        start: {
          line: 241,
          column: 27
        },
        end: {
          line: 241,
          column: 40
        }
      },
      "90": {
        start: {
          line: 242,
          column: 26
        },
        end: {
          line: 242,
          column: 69
        }
      },
      "91": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 250,
          column: 5
        }
      },
      "92": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 67
        }
      },
      "93": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 258,
          column: 5
        }
      },
      "94": {
        start: {
          line: 251,
          column: 17
        },
        end: {
          line: 251,
          column: 18
        }
      },
      "95": {
        start: {
          line: 252,
          column: 19
        },
        end: {
          line: 252,
          column: 32
        }
      },
      "96": {
        start: {
          line: 253,
          column: 24
        },
        end: {
          line: 253,
          column: 54
        }
      },
      "97": {
        start: {
          line: 254,
          column: 6
        },
        end: {
          line: 256,
          column: 7
        }
      },
      "98": {
        start: {
          line: 255,
          column: 8
        },
        end: {
          line: 255,
          column: 67
        }
      },
      "99": {
        start: {
          line: 257,
          column: 6
        },
        end: {
          line: 257,
          column: 23
        }
      },
      "100": {
        start: {
          line: 260,
          column: 2
        },
        end: {
          line: 260,
          column: 25
        }
      },
      "101": {
        start: {
          line: 264,
          column: 2
        },
        end: {
          line: 264,
          column: 40
        }
      },
      "102": {
        start: {
          line: 268,
          column: 45
        },
        end: {
          line: 268,
          column: 47
        }
      },
      "103": {
        start: {
          line: 269,
          column: 2
        },
        end: {
          line: 274,
          column: 3
        }
      },
      "104": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 272,
          column: 5
        }
      },
      "105": {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 66
        }
      },
      "106": {
        start: {
          line: 273,
          column: 4
        },
        end: {
          line: 273,
          column: 28
        }
      },
      "107": {
        start: {
          line: 275,
          column: 2
        },
        end: {
          line: 275,
          column: 25
        }
      },
      "108": {
        start: {
          line: 279,
          column: 2
        },
        end: {
          line: 285,
          column: 3
        }
      },
      "109": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 284,
          column: 5
        }
      },
      "110": {
        start: {
          line: 281,
          column: 6
        },
        end: {
          line: 283,
          column: 7
        }
      },
      "111": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 282,
          column: 63
        }
      },
      "112": {
        start: {
          line: 286,
          column: 2
        },
        end: {
          line: 286,
          column: 25
        }
      },
      "113": {
        start: {
          line: 290,
          column: 63
        },
        end: {
          line: 290,
          column: 65
        }
      },
      "114": {
        start: {
          line: 291,
          column: 2
        },
        end: {
          line: 301,
          column: 3
        }
      },
      "115": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 300,
          column: 5
        }
      },
      "116": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 295,
          column: 7
        }
      },
      "117": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 31
        }
      },
      "118": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 298,
          column: 7
        }
      },
      "119": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 297,
          column: 61
        }
      },
      "120": {
        start: {
          line: 299,
          column: 6
        },
        end: {
          line: 299,
          column: 39
        }
      },
      "121": {
        start: {
          line: 302,
          column: 2
        },
        end: {
          line: 302,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 40,
            column: 26
          },
          end: {
            line: 40,
            column: 27
          }
        },
        loc: {
          start: {
            line: 40,
            column: 96
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 40
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 40
          },
          end: {
            line: 42,
            column: 41
          }
        },
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 85
          }
        },
        line: 42
      },
      "2": {
        name: "setShips",
        decl: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 49,
            column: 17
          }
        },
        loc: {
          start: {
            line: 49,
            column: 69
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 49
      },
      "3": {
        name: "salvo",
        decl: {
          start: {
            line: 59,
            column: 9
          },
          end: {
            line: 59,
            column: 14
          }
        },
        loc: {
          start: {
            line: 59,
            column: 68
          },
          end: {
            line: 83,
            column: 1
          }
        },
        line: 59
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 20
          },
          end: {
            line: 64,
            column: 21
          }
        },
        loc: {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 98
          }
        },
        line: 64
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 88,
            column: 9
          },
          end: {
            line: 88,
            column: 10
          }
        },
        loc: {
          start: {
            line: 88,
            column: 33
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 88
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 100,
            column: 16
          },
          end: {
            line: 100,
            column: 17
          }
        },
        loc: {
          start: {
            line: 100,
            column: 28
          },
          end: {
            line: 104,
            column: 9
          }
        },
        line: 100
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 111,
            column: 9
          },
          end: {
            line: 111,
            column: 10
          }
        },
        loc: {
          start: {
            line: 111,
            column: 21
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 111
      },
      "8": {
        name: "generateRandomShips",
        decl: {
          start: {
            line: 128,
            column: 16
          },
          end: {
            line: 128,
            column: 35
          }
        },
        loc: {
          start: {
            line: 128,
            column: 61
          },
          end: {
            line: 142,
            column: 1
          }
        },
        line: 128
      },
      "9": {
        name: "validateShips",
        decl: {
          start: {
            line: 145,
            column: 16
          },
          end: {
            line: 145,
            column: 29
          }
        },
        loc: {
          start: {
            line: 145,
            column: 87
          },
          end: {
            line: 162,
            column: 1
          }
        },
        line: 145
      },
      "10": {
        name: "checkAllShipsSunk",
        decl: {
          start: {
            line: 165,
            column: 9
          },
          end: {
            line: 165,
            column: 26
          }
        },
        loc: {
          start: {
            line: 165,
            column: 68
          },
          end: {
            line: 172,
            column: 1
          }
        },
        line: 165
      },
      "11": {
        name: "randomlyGetShip",
        decl: {
          start: {
            line: 174,
            column: 9
          },
          end: {
            line: 174,
            column: 24
          }
        },
        loc: {
          start: {
            line: 174,
            column: 78
          },
          end: {
            line: 188,
            column: 1
          }
        },
        line: 174
      },
      "12": {
        name: "getRandomInt",
        decl: {
          start: {
            line: 190,
            column: 9
          },
          end: {
            line: 190,
            column: 21
          }
        },
        loc: {
          start: {
            line: 190,
            column: 43
          },
          end: {
            line: 192,
            column: 1
          }
        },
        line: 190
      },
      "13": {
        name: "findShipWithCell",
        decl: {
          start: {
            line: 194,
            column: 9
          },
          end: {
            line: 194,
            column: 25
          }
        },
        loc: {
          start: {
            line: 194,
            column: 79
          },
          end: {
            line: 198,
            column: 1
          }
        },
        line: 194
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        loc: {
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 108
          }
        },
        line: 196
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 196,
            column: 35
          },
          end: {
            line: 196,
            column: 36
          }
        },
        loc: {
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 74
          }
        },
        line: 196
      },
      "16": {
        name: "countShipHits",
        decl: {
          start: {
            line: 200,
            column: 9
          },
          end: {
            line: 200,
            column: 22
          }
        },
        loc: {
          start: {
            line: 200,
            column: 65
          },
          end: {
            line: 202,
            column: 1
          }
        },
        line: 200
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 201,
            column: 23
          },
          end: {
            line: 201,
            column: 24
          }
        },
        loc: {
          start: {
            line: 201,
            column: 30
          },
          end: {
            line: 201,
            column: 50
          }
        },
        line: 201
      },
      "18": {
        name: "validateShipsCount",
        decl: {
          start: {
            line: 209,
            column: 9
          },
          end: {
            line: 209,
            column: 27
          }
        },
        loc: {
          start: {
            line: 209,
            column: 68
          },
          end: {
            line: 224,
            column: 1
          }
        },
        line: 209
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 210,
            column: 32
          },
          end: {
            line: 210,
            column: 33
          }
        },
        loc: {
          start: {
            line: 210,
            column: 49
          },
          end: {
            line: 210,
            column: 66
          }
        },
        line: 210
      },
      "20": {
        name: "validateShipsOwnership",
        decl: {
          start: {
            line: 226,
            column: 9
          },
          end: {
            line: 226,
            column: 31
          }
        },
        loc: {
          start: {
            line: 226,
            column: 88
          },
          end: {
            line: 234,
            column: 1
          }
        },
        line: 226
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 227,
            column: 27
          },
          end: {
            line: 227,
            column: 28
          }
        },
        loc: {
          start: {
            line: 227,
            column: 44
          },
          end: {
            line: 227,
            column: 55
          }
        },
        line: 227
      },
      "22": {
        name: "validateShipsContinuity",
        decl: {
          start: {
            line: 236,
            column: 9
          },
          end: {
            line: 236,
            column: 32
          }
        },
        loc: {
          start: {
            line: 236,
            column: 73
          },
          end: {
            line: 261,
            column: 1
          }
        },
        line: 236
      },
      "23": {
        name: "getCellVector",
        decl: {
          start: {
            line: 263,
            column: 16
          },
          end: {
            line: 263,
            column: 29
          }
        },
        loc: {
          start: {
            line: 263,
            column: 57
          },
          end: {
            line: 265,
            column: 1
          }
        },
        line: 263
      },
      "24": {
        name: "validateShipsHaveUniqueIDs",
        decl: {
          start: {
            line: 267,
            column: 9
          },
          end: {
            line: 267,
            column: 35
          }
        },
        loc: {
          start: {
            line: 267,
            column: 76
          },
          end: {
            line: 276,
            column: 1
          }
        },
        line: 267
      },
      "25": {
        name: "validateShipsNotOutOfBounds",
        decl: {
          start: {
            line: 278,
            column: 9
          },
          end: {
            line: 278,
            column: 36
          }
        },
        loc: {
          start: {
            line: 278,
            column: 77
          },
          end: {
            line: 287,
            column: 1
          }
        },
        line: 278
      },
      "26": {
        name: "validateShipsNotOverlapping",
        decl: {
          start: {
            line: 289,
            column: 9
          },
          end: {
            line: 289,
            column: 36
          }
        },
        loc: {
          start: {
            line: 289,
            column: 77
          },
          end: {
            line: 303,
            column: 1
          }
        },
        line: 289
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 72
          }
        }, {
          start: {
            line: 42,
            column: 76
          },
          end: {
            line: 42,
            column: 85
          }
        }],
        line: 42
      },
      "1": {
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }, {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }],
        line: 52
      },
      "2": {
        loc: {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 54
          }
        }, {
          start: {
            line: 64,
            column: 58
          },
          end: {
            line: 64,
            column: 76
          }
        }, {
          start: {
            line: 64,
            column: 80
          },
          end: {
            line: 64,
            column: 98
          }
        }],
        line: 64
      },
      "3": {
        loc: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }, {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }],
        line: 65
      },
      "4": {
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }, {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }],
        line: 68
      },
      "5": {
        loc: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        }, {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        }],
        line: 75
      },
      "6": {
        loc: {
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        }, {
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        }],
        line: 101
      },
      "7": {
        loc: {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        }, {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        }],
        line: 112
      },
      "8": {
        loc: {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        }, {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        }],
        line: 113
      },
      "9": {
        loc: {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        }, {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        }],
        line: 116
      },
      "10": {
        loc: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        }, {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        }],
        line: 153
      },
      "11": {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        }, {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        }],
        line: 157
      },
      "12": {
        loc: {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }, {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }],
        line: 167
      },
      "13": {
        loc: {
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 30
          }
        }, {
          start: {
            line: 167,
            column: 34
          },
          end: {
            line: 167,
            column: 44
          }
        }],
        line: 167
      },
      "14": {
        loc: {
          start: {
            line: 176,
            column: 20
          },
          end: {
            line: 176,
            column: 53
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 176,
            column: 44
          },
          end: {
            line: 176,
            column: 47
          }
        }, {
          start: {
            line: 176,
            column: 50
          },
          end: {
            line: 176,
            column: 53
          }
        }],
        line: 176
      },
      "15": {
        loc: {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }, {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }],
        line: 179
      },
      "16": {
        loc: {
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 108
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 82
          }
        }, {
          start: {
            line: 196,
            column: 86
          },
          end: {
            line: 196,
            column: 108
          }
        }],
        line: 196
      },
      "17": {
        loc: {
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 56
          }
        }, {
          start: {
            line: 196,
            column: 60
          },
          end: {
            line: 196,
            column: 74
          }
        }],
        line: 196
      },
      "18": {
        loc: {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }, {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }],
        line: 213
      },
      "19": {
        loc: {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        }, {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        }],
        line: 219
      },
      "20": {
        loc: {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 229
      },
      "21": {
        loc: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        }, {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        }],
        line: 238
      },
      "22": {
        loc: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        }, {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        }],
        line: 243
      },
      "23": {
        loc: {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 246,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 245,
            column: 9
          },
          end: {
            line: 245,
            column: 33
          }
        }, {
          start: {
            line: 245,
            column: 37
          },
          end: {
            line: 245,
            column: 61
          }
        }, {
          start: {
            line: 246,
            column: 9
          },
          end: {
            line: 246,
            column: 33
          }
        }, {
          start: {
            line: 246,
            column: 37
          },
          end: {
            line: 246,
            column: 61
          }
        }],
        line: 245
      },
      "24": {
        loc: {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        }, {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        }],
        line: 254
      },
      "25": {
        loc: {
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 34
          }
        }, {
          start: {
            line: 254,
            column: 38
          },
          end: {
            line: 254,
            column: 62
          }
        }],
        line: 254
      },
      "26": {
        loc: {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        }, {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        }],
        line: 270
      },
      "27": {
        loc: {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        }, {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        }],
        line: 281
      },
      "28": {
        loc: {
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 281,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 281,
            column: 20
          }
        }, {
          start: {
            line: 281,
            column: 24
          },
          end: {
            line: 281,
            column: 34
          }
        }, {
          start: {
            line: 281,
            column: 38
          },
          end: {
            line: 281,
            column: 48
          }
        }, {
          start: {
            line: 281,
            column: 52
          },
          end: {
            line: 281,
            column: 62
          }
        }],
        line: 281
      },
      "29": {
        loc: {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }, {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }],
        line: 293
      },
      "30": {
        loc: {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        }, {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        }],
        line: 296
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
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0
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
      "26": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
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
      "23": [0, 0, 0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0, 0, 0],
      "29": [0, 0],
      "30": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "106f2512b460b9a2154489996c028fb2dd27e1ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2rmfy6gvhj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2rmfy6gvhj();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const VALID_SHIPS_SIZES = (cov_2rmfy6gvhj().s[0]++, [5, 4, 3, 2]);
const VALID_SHIPS_COUNT = (cov_2rmfy6gvhj().s[1]++, {
  5: 1,
  4: 1,
  3: 2,
  2: 1
});
cov_2rmfy6gvhj().s[2]++;
const playerView = (G, ctx, playerID) => {
  cov_2rmfy6gvhj().f[0]++;
  const player = (cov_2rmfy6gvhj().s[3]++, parseInt(playerID, 10));
  const ships = (cov_2rmfy6gvhj().s[4]++, G.ships.filter(ship => {
    cov_2rmfy6gvhj().f[1]++;
    cov_2rmfy6gvhj().s[5]++;
    return (cov_2rmfy6gvhj().b[0][0]++, ship.player === player) || (cov_2rmfy6gvhj().b[0][1]++, ship.sunk);
  }));
  cov_2rmfy6gvhj().s[6]++;
  return _objectSpread({}, G, {
    ships
  });
};

function setShips(G, ctx, ships) {
  cov_2rmfy6gvhj().f[2]++;
  const player = (cov_2rmfy6gvhj().s[7]++, parseInt(ctx.playerID, 10));
  const validation = (cov_2rmfy6gvhj().s[8]++, validateShips(ships, player));
  cov_2rmfy6gvhj().s[9]++;

  if (!validation.valid) {
    cov_2rmfy6gvhj().b[1][0]++;
    cov_2rmfy6gvhj().s[10]++;
    throw new Error(validation.error);
  } else {
    cov_2rmfy6gvhj().b[1][1]++;
  }

  cov_2rmfy6gvhj().s[11]++;
  return _objectSpread({}, G, {
    ships: [...G.ships, ...ships]
  });
}

function salvo(G, ctx, x, y) {
  cov_2rmfy6gvhj().f[3]++;
  const player = (cov_2rmfy6gvhj().s[12]++, parseInt(ctx.playerID, 10));
  const shipIndex = (cov_2rmfy6gvhj().s[13]++, findShipWithCell(G.ships, {
    x,
    y
  }, player)); // Do not allow the same cells to be shot twice

  const uniqueMove = (cov_2rmfy6gvhj().s[14]++, G.salvos.filter(salvo => {
    cov_2rmfy6gvhj().f[4]++;
    cov_2rmfy6gvhj().s[15]++;
    return (cov_2rmfy6gvhj().b[2][0]++, salvo.player === player) && (cov_2rmfy6gvhj().b[2][1]++, salvo.cell.x === x) && (cov_2rmfy6gvhj().b[2][2]++, salvo.cell.y === y);
  }).length === 0);
  cov_2rmfy6gvhj().s[16]++;

  if (!uniqueMove) {
    cov_2rmfy6gvhj().b[3][0]++;
    cov_2rmfy6gvhj().s[17]++;
    return _objectSpread({}, G);
  } else {
    cov_2rmfy6gvhj().b[3][1]++;
  }

  cov_2rmfy6gvhj().s[18]++;

  if (shipIndex === -1) {
    cov_2rmfy6gvhj().b[4][0]++;
    cov_2rmfy6gvhj().s[19]++;
    // Miss
    return _objectSpread({}, G, {
      salvos: [...G.salvos, {
        player,
        hit: false,
        cell: {
          x,
          y
        }
      }]
    });
  } else {
    cov_2rmfy6gvhj().b[4][1]++;
  }

  const ship = (cov_2rmfy6gvhj().s[20]++, G.ships[shipIndex]); // Hit

  const newShips = (cov_2rmfy6gvhj().s[21]++, [...G.ships]);
  cov_2rmfy6gvhj().s[22]++;

  if (countShipHits(G.salvos, ship.id) + 1 === ship.cells.length) {
    cov_2rmfy6gvhj().b[5][0]++;
    cov_2rmfy6gvhj().s[23]++;
    newShips[shipIndex] = _objectSpread({}, newShips[shipIndex], {
      sunk: true
    });
  } else {
    cov_2rmfy6gvhj().b[5][1]++;
  }

  cov_2rmfy6gvhj().s[24]++;
  return _objectSpread({}, G, {
    ships: newShips,
    salvos: [...G.salvos, {
      player,
      hit: true,
      cell: {
        x,
        y
      },
      hitShip: ship.id
    }]
  });
}

const SeabattleGame = (cov_2rmfy6gvhj().s[25]++, {
  name: 'seabattle',
  setup: () => {
    cov_2rmfy6gvhj().f[5]++;
    cov_2rmfy6gvhj().s[26]++;
    return {
      ships: [],
      salvos: []
    };
  },
  phases: {
    setup: {
      moves: {
        setShips
      },
      next: 'play',
      start: true,
      turn: {
        activePlayers: boardgame_io_core__WEBPACK_IMPORTED_MODULE_0__["ActivePlayers"].ALL_ONCE,
        onMove: (_, ctx) => {
          cov_2rmfy6gvhj().f[6]++;
          cov_2rmfy6gvhj().s[27]++;

          if (ctx.activePlayers === null) {
            cov_2rmfy6gvhj().b[6][0]++;
            cov_2rmfy6gvhj().s[28]++;
            ctx.events.endPhase();
          } else {
            cov_2rmfy6gvhj().b[6][1]++;
          }
        }
      }
    },
    play: {
      moves: {
        salvo
      }
    }
  },
  endIf: (G, ctx) => {
    cov_2rmfy6gvhj().f[7]++;
    cov_2rmfy6gvhj().s[29]++;

    if (ctx.phase === 'play') {
      cov_2rmfy6gvhj().b[7][0]++;
      cov_2rmfy6gvhj().s[30]++;

      if (checkAllShipsSunk(G.ships, 0)) {
        cov_2rmfy6gvhj().b[8][0]++;
        cov_2rmfy6gvhj().s[31]++;
        return {
          winner: '1'
        };
      } else {
        cov_2rmfy6gvhj().b[8][1]++;
      }

      cov_2rmfy6gvhj().s[32]++;

      if (checkAllShipsSunk(G.ships, 1)) {
        cov_2rmfy6gvhj().b[9][0]++;
        cov_2rmfy6gvhj().s[33]++;
        return {
          winner: '0'
        };
      } else {
        cov_2rmfy6gvhj().b[9][1]++;
      }
    } else {
      cov_2rmfy6gvhj().b[7][1]++;
    }
  },
  turn: {
    moveLimit: 1
  },
  playerView
}); // Helper function for generating random ships positioning.

function generateRandomShips(player) {
  cov_2rmfy6gvhj().f[8]++;
  let result;
  let shipID;
  cov_2rmfy6gvhj().s[34]++;

  do {
    cov_2rmfy6gvhj().s[35]++;
    result = [];
    cov_2rmfy6gvhj().s[36]++;

    for (const shipSize of VALID_SHIPS_SIZES) {
      const count = (cov_2rmfy6gvhj().s[37]++, VALID_SHIPS_COUNT[shipSize]);
      cov_2rmfy6gvhj().s[38]++;

      for (let i = (cov_2rmfy6gvhj().s[39]++, 0); i < count; i++) {
        cov_2rmfy6gvhj().s[40]++;
        shipID = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
        cov_2rmfy6gvhj().s[41]++;
        result.push(randomlyGetShip(player, shipSize, shipID));
      }
    }
  } while (!validateShips(result, player).valid);

  cov_2rmfy6gvhj().s[42]++;
  return result;
} // Wheather a setup is valid or not.

function validateShips(ships, player) {
  cov_2rmfy6gvhj().f[9]++;
  const validations = (cov_2rmfy6gvhj().s[43]++, [validateShipsCount(ships), validateShipsContinuity(ships), validateShipsNotOutOfBounds(ships), validateShipsNotOverlapping(ships), validateShipsHaveUniqueIDs(ships)]);
  cov_2rmfy6gvhj().s[44]++;

  if (player !== undefined) {
    cov_2rmfy6gvhj().b[10][0]++;
    cov_2rmfy6gvhj().s[45]++;
    validations.push(validateShipsOwnership(player, ships));
  } else {
    cov_2rmfy6gvhj().b[10][1]++;
  }

  cov_2rmfy6gvhj().s[46]++;

  for (const validation of validations) {
    cov_2rmfy6gvhj().s[47]++;

    if (!validation.valid) {
      cov_2rmfy6gvhj().b[11][0]++;
      cov_2rmfy6gvhj().s[48]++;
      return validation;
    } else {
      cov_2rmfy6gvhj().b[11][1]++;
    }
  }

  cov_2rmfy6gvhj().s[49]++;
  return {
    valid: true
  };
} // PRIVATE FUNCTIONS

function checkAllShipsSunk(ships, player) {
  cov_2rmfy6gvhj().f[10]++;
  cov_2rmfy6gvhj().s[50]++;

  for (const ship of ships) {
    cov_2rmfy6gvhj().s[51]++;

    if ((cov_2rmfy6gvhj().b[13][0]++, ship.player === player) && (cov_2rmfy6gvhj().b[13][1]++, !ship.sunk)) {
      cov_2rmfy6gvhj().b[12][0]++;
      cov_2rmfy6gvhj().s[52]++;
      return false;
    } else {
      cov_2rmfy6gvhj().b[12][1]++;
    }
  }

  cov_2rmfy6gvhj().s[53]++;
  return true;
}

function randomlyGetShip(player, shipSize, id) {
  cov_2rmfy6gvhj().f[11]++;
  const cell = (cov_2rmfy6gvhj().s[54]++, {
    x: getRandomInt(10),
    y: getRandomInt(10)
  });
  const direction = (cov_2rmfy6gvhj().s[55]++, getRandomInt(2) === 1 ? (cov_2rmfy6gvhj().b[14][0]++, 'H') : (cov_2rmfy6gvhj().b[14][1]++, 'V'));
  const ship = (cov_2rmfy6gvhj().s[56]++, {
    player,
    cells: [],
    sunk: false,
    id
  });
  cov_2rmfy6gvhj().s[57]++;

  for (let i = (cov_2rmfy6gvhj().s[58]++, 0); i < shipSize; i++) {
    cov_2rmfy6gvhj().s[59]++;

    if (direction === 'H') {
      cov_2rmfy6gvhj().b[15][0]++;
      cov_2rmfy6gvhj().s[60]++;
      // Constant y
      ship.cells.push(_objectSpread({}, cell, {
        x: cell.x + i
      }));
    } else {
      cov_2rmfy6gvhj().b[15][1]++;
      cov_2rmfy6gvhj().s[61]++;
      // Constant x
      ship.cells.push(_objectSpread({}, cell, {
        y: cell.y + i
      }));
    }
  }

  cov_2rmfy6gvhj().s[62]++;
  return ship;
}

function getRandomInt(max) {
  cov_2rmfy6gvhj().f[12]++;
  cov_2rmfy6gvhj().s[63]++;
  return Math.random() * max << 0 << 0; // https://github.com/babel/minify/issues/904
}

function findShipWithCell(ships, cell, player) {
  cov_2rmfy6gvhj().f[13]++;
  cov_2rmfy6gvhj().s[64]++;
  return ships.findIndex(ship => {
    cov_2rmfy6gvhj().f[14]++;
    cov_2rmfy6gvhj().s[65]++;
    return (cov_2rmfy6gvhj().b[16][0]++, ship.cells.findIndex(c => {
      cov_2rmfy6gvhj().f[15]++;
      cov_2rmfy6gvhj().s[66]++;
      return (cov_2rmfy6gvhj().b[17][0]++, c.x === cell.x) && (cov_2rmfy6gvhj().b[17][1]++, c.y === cell.y);
    }) !== -1) && (cov_2rmfy6gvhj().b[16][1]++, ship.player !== player);
  });
}

function countShipHits(salvos, shipId) {
  cov_2rmfy6gvhj().f[16]++;
  cov_2rmfy6gvhj().s[67]++;
  return salvos.filter(s => {
    cov_2rmfy6gvhj().f[17]++;
    cov_2rmfy6gvhj().s[68]++;
    return s.hitShip === shipId;
  }).length;
}

function validateShipsCount(ships) {
  cov_2rmfy6gvhj().f[18]++;
  const shipsLength = (cov_2rmfy6gvhj().s[69]++, ships.map(ship => {
    cov_2rmfy6gvhj().f[19]++;
    cov_2rmfy6gvhj().s[70]++;
    return ship.cells.length;
  }));
  const count = (cov_2rmfy6gvhj().s[71]++, _objectSpread({}, VALID_SHIPS_COUNT));
  cov_2rmfy6gvhj().s[72]++;

  for (const length of shipsLength) {
    cov_2rmfy6gvhj().s[73]++;

    if (!(length in count)) {
      cov_2rmfy6gvhj().b[18][0]++;
      cov_2rmfy6gvhj().s[74]++;
      return {
        valid: false,
        error: `Invalid ship length: ${length}`
      };
    } else {
      cov_2rmfy6gvhj().b[18][1]++;
    }

    cov_2rmfy6gvhj().s[75]++;
    count[length]--;
  }

  cov_2rmfy6gvhj().s[76]++;

  for (const length of Object.values(count)) {
    cov_2rmfy6gvhj().s[77]++;

    if (length !== 0) {
      cov_2rmfy6gvhj().b[19][0]++;
      cov_2rmfy6gvhj().s[78]++;
      return {
        valid: false,
        error: 'Invalid ships sizes.'
      };
    } else {
      cov_2rmfy6gvhj().b[19][1]++;
    }
  }

  cov_2rmfy6gvhj().s[79]++;
  return {
    valid: true
  };
}

function validateShipsOwnership(player, ships) {
  cov_2rmfy6gvhj().f[20]++;
  const owners = (cov_2rmfy6gvhj().s[80]++, ships.map(ship => {
    cov_2rmfy6gvhj().f[21]++;
    cov_2rmfy6gvhj().s[81]++;
    return ship.player;
  }));
  cov_2rmfy6gvhj().s[82]++;

  for (const owner of owners) {
    cov_2rmfy6gvhj().s[83]++;

    if (owner !== player) {
      cov_2rmfy6gvhj().b[20][0]++;
      cov_2rmfy6gvhj().s[84]++;
      return {
        valid: false,
        error: `Invalid player owner: ${owner} should be: ${player}`
      };
    } else {
      cov_2rmfy6gvhj().b[20][1]++;
    }
  }

  cov_2rmfy6gvhj().s[85]++;
  return {
    valid: true
  };
}

function validateShipsContinuity(ships) {
  cov_2rmfy6gvhj().f[22]++;
  cov_2rmfy6gvhj().s[86]++;

  for (const ship of ships) {
    cov_2rmfy6gvhj().s[87]++;

    if (ship.cells.length < 2) {
      cov_2rmfy6gvhj().b[21][0]++;
      cov_2rmfy6gvhj().s[88]++;
      continue;
    } else {
      cov_2rmfy6gvhj().b[21][1]++;
    }

    let lastICell = (cov_2rmfy6gvhj().s[89]++, ship.cells[0]);
    const vector = (cov_2rmfy6gvhj().s[90]++, getCellVector(ship.cells[1], ship.cells[0]));
    cov_2rmfy6gvhj().s[91]++;

    if (!((cov_2rmfy6gvhj().b[23][0]++, Math.abs(vector.x) === 1) && (cov_2rmfy6gvhj().b[23][1]++, Math.abs(vector.y) === 0) || (cov_2rmfy6gvhj().b[23][2]++, Math.abs(vector.x) === 0) && (cov_2rmfy6gvhj().b[23][3]++, Math.abs(vector.y) === 1))) {
      cov_2rmfy6gvhj().b[22][0]++;
      cov_2rmfy6gvhj().s[92]++;
      return {
        valid: false,
        error: `IShip is not spaced right!`
      };
    } else {
      cov_2rmfy6gvhj().b[22][1]++;
    }

    cov_2rmfy6gvhj().s[93]++;

    for (let i = (cov_2rmfy6gvhj().s[94]++, 1); i < ship.cells.length; i++) {
      const cell = (cov_2rmfy6gvhj().s[95]++, ship.cells[i]);
      const newVector = (cov_2rmfy6gvhj().s[96]++, getCellVector(cell, lastICell));
      cov_2rmfy6gvhj().s[97]++;

      if ((cov_2rmfy6gvhj().b[25][0]++, newVector.x !== vector.x) || (cov_2rmfy6gvhj().b[25][1]++, newVector.y !== vector.y)) {
        cov_2rmfy6gvhj().b[24][0]++;
        cov_2rmfy6gvhj().s[98]++;
        return {
          valid: false,
          error: `IShip is not continuous!`
        };
      } else {
        cov_2rmfy6gvhj().b[24][1]++;
      }

      cov_2rmfy6gvhj().s[99]++;
      lastICell = cell;
    }
  }

  cov_2rmfy6gvhj().s[100]++;
  return {
    valid: true
  };
}

function getCellVector(a, b) {
  cov_2rmfy6gvhj().f[23]++;
  cov_2rmfy6gvhj().s[101]++;
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function validateShipsHaveUniqueIDs(ships) {
  cov_2rmfy6gvhj().f[24]++;
  const usedIDs = (cov_2rmfy6gvhj().s[102]++, {});
  cov_2rmfy6gvhj().s[103]++;

  for (const ship of ships) {
    cov_2rmfy6gvhj().s[104]++;

    if (usedIDs[ship.id]) {
      cov_2rmfy6gvhj().b[26][0]++;
      cov_2rmfy6gvhj().s[105]++;
      return {
        valid: false,
        error: `IShip IDs are not unique!`
      };
    } else {
      cov_2rmfy6gvhj().b[26][1]++;
    }

    cov_2rmfy6gvhj().s[106]++;
    usedIDs[ship.id] = true;
  }

  cov_2rmfy6gvhj().s[107]++;
  return {
    valid: true
  };
}

function validateShipsNotOutOfBounds(ships) {
  cov_2rmfy6gvhj().f[25]++;
  cov_2rmfy6gvhj().s[108]++;

  for (const ship of ships) {
    cov_2rmfy6gvhj().s[109]++;

    for (const cell of ship.cells) {
      cov_2rmfy6gvhj().s[110]++;

      if ((cov_2rmfy6gvhj().b[28][0]++, cell.x < 0) || (cov_2rmfy6gvhj().b[28][1]++, cell.x > 9) || (cov_2rmfy6gvhj().b[28][2]++, cell.y < 0) || (cov_2rmfy6gvhj().b[28][3]++, cell.y > 9)) {
        cov_2rmfy6gvhj().b[27][0]++;
        cov_2rmfy6gvhj().s[111]++;
        return {
          valid: false,
          error: `IShip out of bounds!`
        };
      } else {
        cov_2rmfy6gvhj().b[27][1]++;
      }
    }
  }

  cov_2rmfy6gvhj().s[112]++;
  return {
    valid: true
  };
}

function validateShipsNotOverlapping(ships) {
  cov_2rmfy6gvhj().f[26]++;
  const cellsUsed = (cov_2rmfy6gvhj().s[113]++, {});
  cov_2rmfy6gvhj().s[114]++;

  for (const ship of ships) {
    cov_2rmfy6gvhj().s[115]++;

    for (const cell of ship.cells) {
      cov_2rmfy6gvhj().s[116]++;

      if (!(cell.x in cellsUsed)) {
        cov_2rmfy6gvhj().b[29][0]++;
        cov_2rmfy6gvhj().s[117]++;
        cellsUsed[cell.x] = {};
      } else {
        cov_2rmfy6gvhj().b[29][1]++;
      }

      cov_2rmfy6gvhj().s[118]++;

      if (cellsUsed[cell.x][cell.y]) {
        cov_2rmfy6gvhj().b[30][0]++;
        cov_2rmfy6gvhj().s[119]++;
        return {
          valid: false,
          error: `Overlapping ships!`
        };
      } else {
        cov_2rmfy6gvhj().b[30][1]++;
      }

      cov_2rmfy6gvhj().s[120]++;
      cellsUsed[cell.x][cell.y] = true;
    }
  }

  cov_2rmfy6gvhj().s[121]++;
  return {
    valid: true
  };
}

/***/ })

};;
//# sourceMappingURL=16.js.map