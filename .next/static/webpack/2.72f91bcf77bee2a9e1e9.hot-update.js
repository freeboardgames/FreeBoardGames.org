webpackHotUpdate(2,{

/***/ "./src/games/zooparade/board.tsx":
/*!***************************************!*\
  !*** ./src/games/zooparade/board.tsx ***!
  \***************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/App/Game/GameLayout */ "./src/components/App/Game/GameLayout.tsx");
/* harmony import */ var _components_bhand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bhand */ "./src/games/zooparade/components/bhand.tsx");
/* harmony import */ var _components_btrash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/btrash */ "./src/games/zooparade/components/btrash.tsx");
/* harmony import */ var _components_bpiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bpiles */ "./src/games/zooparade/components/bpiles.tsx");
/* harmony import */ var _components_btoken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/btoken */ "./src/games/zooparade/components/btoken.tsx");
/* harmony import */ var _components_bdeck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bdeck */ "./src/games/zooparade/components/bdeck.tsx");
/* harmony import */ var _components_bbuttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bbuttons */ "./src/games/zooparade/components/bbuttons.tsx");
/* harmony import */ var _components_bnamebadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bnamebadge */ "./src/games/zooparade/components/bnamebadge.tsx");
/* harmony import */ var _components_blog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/blog */ "./src/games/zooparade/components/blog.tsx");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5__["createElement"];

function cov_1i6iwuas5o() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/zooparade/board.tsx";
  var hash = "b3dec08b7c6f5f1f7e53421ee332963f526daf4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/zooparade/board.tsx",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "1": {
        start: {
          line: 32,
          column: 13
        },
        end: {
          line: 32,
          column: 68
        }
      },
      "2": {
        start: {
          line: 33,
          column: 19
        },
        end: {
          line: 33,
          column: 66
        }
      },
      "3": {
        start: {
          line: 35,
          column: 16
        },
        end: {
          line: 35,
          column: 34
        }
      },
      "4": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 87
        }
      },
      "5": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 101,
          column: 6
        }
      },
      "6": {
        start: {
          line: 46,
          column: 34
        },
        end: {
          line: 46,
          column: 45
        }
      },
      "7": {
        start: {
          line: 47,
          column: 22
        },
        end: {
          line: 72,
          column: 25
        }
      },
      "8": {
        start: {
          line: 56,
          column: 73
        },
        end: {
          line: 56,
          column: 117
        }
      },
      "9": {
        start: {
          line: 57,
          column: 73
        },
        end: {
          line: 57,
          column: 117
        }
      },
      "10": {
        start: {
          line: 65,
          column: 60
        },
        end: {
          line: 65,
          column: 89
        }
      },
      "11": {
        start: {
          line: 66,
          column: 61
        },
        end: {
          line: 66,
          column: 93
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 11
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 30
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 35
          },
          end: {
            line: 45,
            column: 36
          }
        },
        loc: {
          start: {
            line: 45,
            column: 43
          },
          end: {
            line: 73,
            column: 17
          }
        },
        line: 45
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 56,
            column: 53
          },
          end: {
            line: 56,
            column: 54
          }
        },
        loc: {
          start: {
            line: 56,
            column: 72
          },
          end: {
            line: 56,
            column: 118
          }
        },
        line: 56
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 53
          },
          end: {
            line: 57,
            column: 54
          }
        },
        loc: {
          start: {
            line: 57,
            column: 72
          },
          end: {
            line: 57,
            column: 118
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 43
          },
          end: {
            line: 65,
            column: 44
          }
        },
        loc: {
          start: {
            line: 65,
            column: 59
          },
          end: {
            line: 65,
            column: 90
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 66,
            column: 44
          },
          end: {
            line: 66,
            column: 45
          }
        },
        loc: {
          start: {
            line: 66,
            column: 60
          },
          end: {
            line: 66,
            column: 94
          }
        },
        line: 66
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 13
          },
          end: {
            line: 32,
            column: 68
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 35
          },
          end: {
            line: 32,
            column: 64
          }
        }, {
          start: {
            line: 32,
            column: 67
          },
          end: {
            line: 32,
            column: 68
          }
        }],
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 19
          },
          end: {
            line: 33,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 33,
            column: 41
          },
          end: {
            line: 33,
            column: 60
          }
        }, {
          start: {
            line: 33,
            column: 63
          },
          end: {
            line: 33,
            column: 66
          }
        }],
        line: 33
      },
      "2": {
        loc: {
          start: {
            line: 53,
            column: 29
          },
          end: {
            line: 61,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 54,
            column: 30
          },
          end: {
            line: 54,
            column: 51
          }
        }, {
          start: {
            line: 56,
            column: 30
          },
          end: {
            line: 61,
            column: 41
          }
        }],
        line: 53
      },
      "3": {
        loc: {
          start: {
            line: 77,
            column: 18
          },
          end: {
            line: 83,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 79,
            column: 18
          },
          end: {
            line: 80,
            column: 29
          }
        }, {
          start: {
            line: 82,
            column: 18
          },
          end: {
            line: 83,
            column: 29
          }
        }],
        line: 77
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
      "11": 0
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
    hash: "b3dec08b7c6f5f1f7e53421ee332963f526daf4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1i6iwuas5o = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1i6iwuas5o();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var handStyle = (cov_1i6iwuas5o().s[0]++, {
  display: 'flex'
});
var Board = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Board, _React$Component);

  var _super = _createSuper(Board);

  function Board() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Board);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Board, [{
    key: "render",
    value: function render() {
      var _this = this;

      cov_1i6iwuas5o().f[0]++;
      var me = (cov_1i6iwuas5o().s[1]++, this.props.playerID ? (cov_1i6iwuas5o().b[0][0]++, parseInt(this.props.playerID)) : (cov_1i6iwuas5o().b[0][1]++, 1)); // TODO : Local Fix - defaults to player 1

      var playerID = (cov_1i6iwuas5o().s[2]++, this.props.playerID ? (cov_1i6iwuas5o().b[1][0]++, this.props.playerID) : (cov_1i6iwuas5o().b[1][1]++, "1")); // TODO : Local Fix

      var hands = (cov_1i6iwuas5o().s[3]++, this.props.G.hands);
      var rotatedHands = (cov_1i6iwuas5o().s[4]++, hands.slice(me + 1, hands.length).concat(hands.slice(0, me + 1)));
      cov_1i6iwuas5o().s[5]++;
      return __jsx(_components_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_6__["GameLayout"], {
        gameArgs: this.props.gameArgs,
        allowWiderScreen: true
      }, __jsx("div", {
        style: {
          display: 'flex'
        }
      }, __jsx("div", null, rotatedHands.map(function (hand) {
        cov_1i6iwuas5o().f[1]++;
        var index = (cov_1i6iwuas5o().s[6]++, hand.player);
        cov_1i6iwuas5o().s[7]++;
        return __jsx("div", {
          key: "Board" + index.toString(),
          style: handStyle
        }, __jsx(_components_bnamebadge__WEBPACK_IMPORTED_MODULE_13__["BNameBadge"], {
          name: _this.props.gameArgs.players[index].name,
          turn: index.toString() == _this.props.ctx.currentPlayer
        }), index === me ? (cov_1i6iwuas5o().b[2][0]++, __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, __jsx("hr", null), "Your Hand:")) : (cov_1i6iwuas5o().b[2][1]++, __jsx(_components_bbuttons__WEBPACK_IMPORTED_MODULE_12__["BButtons"], {
          onHintColor: function onHintColor(value) {
            cov_1i6iwuas5o().f[2]++;
            cov_1i6iwuas5o().s[8]++;

            _this.props.moves.moveHintColor(index, value);
          },
          onHintValue: function onHintValue(value) {
            cov_1i6iwuas5o().f[3]++;
            cov_1i6iwuas5o().s[9]++;

            _this.props.moves.moveHintValue(index, value);
          },
          myTurn: _this.props.ctx.currentPlayer === playerID,
          keyPropagation: "Board" + index.toString()
        })), __jsx(_components_bhand__WEBPACK_IMPORTED_MODULE_7__["BHand"], {
          hand: hand,
          me: me === index,
          onPlay: function onPlay(id) {
            cov_1i6iwuas5o().f[4]++;
            cov_1i6iwuas5o().s[10]++;

            _this.props.moves.movePlay(id);
          },
          onTrash: function onTrash(id) {
            cov_1i6iwuas5o().f[5]++;
            cov_1i6iwuas5o().s[11]++;

            _this.props.moves.moveDiscard(id);
          },
          myTurn: _this.props.ctx.currentPlayer === playerID,
          keyPropagation: "Board" + index.toString()
        }));
      })), __jsx("div", null, this.props.G.trash.length === 0 ? (cov_1i6iwuas5o().b[3][0]++, __jsx(_components_btrash__WEBPACK_IMPORTED_MODULE_8__["BTrash"], {
        card: null
      })) : (cov_1i6iwuas5o().b[3][1]++, __jsx(_components_btrash__WEBPACK_IMPORTED_MODULE_8__["BTrash"], {
        card: this.props.G.trash[this.props.G.trash.length - 1]
      })), __jsx(_components_btoken__WEBPACK_IMPORTED_MODULE_10__["BToken"], {
        treats: this.props.G.treats,
        countdown: this.props.G.countdown
      }), __jsx(_components_bdeck__WEBPACK_IMPORTED_MODULE_11__["BDeck"], {
        cardsLeft: this.props.G.deckindex
      })), __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '55px'
        }
      }, __jsx(_components_bpiles__WEBPACK_IMPORTED_MODULE_9__["BPiles"], {
        piles: this.props.G.piles,
        keyPropagation: "Board"
      })), __jsx("div", null, __jsx(_components_blog__WEBPACK_IMPORTED_MODULE_14__["BLog"], {
        lines: this.props.G.movelog,
        keyPropagation: "Board"
      }))));
    }
  }]);

  return Board;
}((react__WEBPACK_IMPORTED_MODULE_5__["Component"]));

/***/ })

})
//# sourceMappingURL=2.72f91bcf77bee2a9e1e9.hot-update.js.map