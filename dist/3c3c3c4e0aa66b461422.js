(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/games/takesix/CardComponent.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/games/takesix/CardComponent.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@keyframes _1xLN_sVMkGhcluLDKmhjij {\n  0% {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.hPKAN6neFNaXIYl6Cobl4 {\n  float: left;\n  color: black;\n  cursor: pointer;\n  max-width: 65px;\n  width: 20%;\n\tanimation: _1xLN_sVMkGhcluLDKmhjij 1.5s;\n}\n", ""]);
// Exports
exports.locals = {
	"Card": "hPKAN6neFNaXIYl6Cobl4",
	"bounceIn": "_1xLN_sVMkGhcluLDKmhjij"
};

/***/ }),

/***/ "./src/games/takesix/CardComponent.css":
/*!*********************************************!*\
  !*** ./src/games/takesix/CardComponent.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./CardComponent.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/takesix/CardComponent.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./CardComponent.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/takesix/CardComponent.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./CardComponent.css */ "./node_modules/css-loader/dist/cjs.js?!./src/games/takesix/CardComponent.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/games/takesix/CardComponent.tsx":
/*!*********************************************!*\
  !*** ./src/games/takesix/CardComponent.tsx ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComponent.css */ "./src/games/takesix/CardComponent.css");
/* harmony import */ var _CardComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardComponent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CardComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardComponent, _React$Component);

  function CardComponent() {
    _classCallCheck(this, CardComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardComponent).apply(this, arguments));
  }

  _createClass(CardComponent, [{
    key: "render",
    value: function render() {
      var values = {
        1: '#ffffff',
        2: '#3498db',
        3: '#f1c40f',
        5: '#e74c3c',
        7: '#8e44ad'
      };
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        onClick: this.props.click,
        className: _CardComponent_css__WEBPACK_IMPORTED_MODULE_1___default.a.Card,
        style: {
          background: values[this.props.card.value]
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "CardValue",
        style: {
          textAlign: 'center',
          lineHeight: '20px'
        },
        variant: "body2"
      }, this.props.card.value), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "CardNumber",
        style: {
          textAlign: 'center',
          lineHeight: '45px',
          verticalAlign: 'middle'
        },
        variant: "h4"
      }, this.props.card.number));
    }
  }]);

  return CardComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/games/takesix/Decks.tsx":
/*!*************************************!*\
  !*** ./src/games/takesix/Decks.tsx ***!
  \*************************************/
/*! exports provided: Decks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decks", function() { return Decks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/games/takesix/game.ts");
/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardComponent */ "./src/games/takesix/CardComponent.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Decks =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Decks, _React$Component);

  function Decks() {
    var _this;

    _classCallCheck(this, Decks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Decks).apply(this, arguments));

    _this._selectDeck = function (i) {
      return function () {
        return _this.props.selectDeck(i);
      };
    };

    return _this;
  }

  _createClass(Decks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, this.props.G.decks.map(function (deck, i) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "DeckRow",
          key: i,
          onClick: _this2._selectDeck(i),
          style: {
            marginBottom: '4px',
            opacity: _this2.getOpacity(i)
          }
        }, deck.map(function (card) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            key: card.number
          }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CardComponent__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], {
            card: card
          }));
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          style: {
            clear: 'both'
          }
        }));
      }));
    }
  }, {
    key: "getOpacity",
    value: function getOpacity(id) {
      var _this3 = this;

      if (this.props.ctx.phase === 'CARD_SELECT' || !this.props.ctx.actionPlayers.some(function (player) {
        return player === _this3.props.playerID;
      })) {
        return 1;
      }

      if (Object(_game__WEBPACK_IMPORTED_MODULE_1__["isAllowedDeck"])(this.props.G, id, this.props.playerID)) {
        return 1;
      } else {
        return 0.2;
      }
    }
  }]);

  return Decks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/games/takesix/PlayerHand.tsx":
/*!******************************************!*\
  !*** ./src/games/takesix/PlayerHand.tsx ***!
  \******************************************/
/*! exports provided: PlayerHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerHand", function() { return PlayerHand; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComponent */ "./src/games/takesix/CardComponent.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PlayerHand =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlayerHand, _React$Component);

  function PlayerHand() {
    var _this;

    _classCallCheck(this, PlayerHand);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayerHand).apply(this, arguments));

    _this._selectCard = function (i) {
      return function () {
        return _this.props.selectCard(i);
      };
    };

    return _this;
  }

  _createClass(PlayerHand, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          clear: 'both',
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          color: 'white'
        },
        variant: "body2"
      }, "Your hand")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          width: '100%'
        }
      }, this.props.G.players[this.props.playerID].cards.map(function (card, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CardComponent__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], {
          key: card.number,
          click: _this2._selectCard(index),
          card: card
        });
      })));
    }
  }]);

  return PlayerHand;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/games/takesix/board.tsx":
/*!*************************************!*\
  !*** ./src/games/takesix/board.tsx ***!
  \*************************************/
/*! exports provided: Board, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameLayout */ "./src/App/Game/GameLayout.tsx");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/games/takesix/game.ts");
/* harmony import */ var _Decks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decks */ "./src/games/takesix/Decks.tsx");
/* harmony import */ var _PlayerHand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerHand */ "./src/games/takesix/PlayerHand.tsx");
/* harmony import */ var _common_Scoreboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Scoreboard */ "./src/common/Scoreboard.tsx");
/* harmony import */ var _common_ScoreBadges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ScoreBadges */ "./src/common/ScoreBadges.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/gameMode */ "./src/common/gameMode.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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










var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    var _this;

    _classCallCheck(this, Board);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    _this.state = {
      aiSecondDeck: false
    };

    _this._selectCard = function (id) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this._canPlay() || this.props.ctx.phase !== 'CARD_SELECT')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.props.moves.selectCard(id);

                if (!Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isAIGame"])(this.props.gameArgs)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.props.step();

              case 6:
                if (this.props.ctx.currentPlayer === this.props.playerID) {
                  this.setState({
                    aiSecondDeck: true
                  });
                } else {
                  this.setState({
                    aiSecondDeck: false
                  });
                  setTimeout(function () {
                    _this2.props.step();
                  }, 1000);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    _this._selectDeck = function (id) {
      if (!_this._canPlay() || _this.props.ctx.phase !== 'DECK_SELECT' || !Object(_game__WEBPACK_IMPORTED_MODULE_2__["isAllowedDeck"])(_this.props.G, id, _this.props.playerID)) {
        return;
      }

      _this.props.moves.selectDeck(id);

      if (Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_8__["isAIGame"])(_this.props.gameArgs) && _this.state.aiSecondDeck) {
        setTimeout(function () {
          _this.props.step();
        }, 1000);
      }
    };

    return _this;
  }

  _createClass(Board, [{
    key: "_getStatus",
    value: function _getStatus() {
      if (!this.props.gameArgs) {
        return;
      }

      if (!this._canPlay()) {
        return 'Waiting for opponent...';
      }

      if (this.props.ctx.phase === 'CARD_SELECT') {
        return 'SELECT CARD';
      } else {
        return 'SELECT BOARD';
      }
    }
  }, {
    key: "_canPlay",
    value: function _canPlay() {
      var _this3 = this;

      return this.props.ctx.actionPlayers.some(function (player) {
        return player === _this3.props.playerID;
      });
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        return 'draw';
      }
    }
  }, {
    key: "_getScoreBoard",
    value: function _getScoreBoard() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Scoreboard__WEBPACK_IMPORTED_MODULE_5__["Scoreboard"], {
        scoreboard: Object(_game__WEBPACK_IMPORTED_MODULE_2__["getScoreBoard"])(this.props.G),
        playerID: this.props.playerID,
        players: this.props.gameArgs.players,
        scoreName: "Penalty points"
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.ctx.gameover) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], {
          gameOver: this._getGameOver(),
          extraCardContent: this._getScoreBoard(),
          gameArgs: this.props.gameArgs
        });
      }

      if (this.props.playerID === null) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", null)));
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_1__["GameLayout"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Decks__WEBPACK_IMPORTED_MODULE_3__["Decks"], {
        G: this.props.G,
        ctx: this.props.ctx,
        playerID: this.props.playerID,
        selectDeck: this._selectDeck
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PlayerHand__WEBPACK_IMPORTED_MODULE_4__["PlayerHand"], {
        G: this.props.G,
        playerID: this.props.playerID,
        selectCard: this._selectCard
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_ScoreBadges__WEBPACK_IMPORTED_MODULE_6__["ScoreBadges"], {
        scoreboard: Object(_game__WEBPACK_IMPORTED_MODULE_2__["getScoreBoard"])(this.props.G),
        playerID: this.props.playerID,
        players: this.props.gameArgs.players
      }));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/games/takesix/config.ts":
/*!*************************************!*\
  !*** ./src/games/takesix/config.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/takesix/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/takesix/board.tsx");


var config = {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["TakeSixGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"]
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9DYXJkQ29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9DYXJkQ29tcG9uZW50LmNzcz84MWEwIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy90YWtlc2l4L0NhcmRDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9nYW1lcy90YWtlc2l4L0RlY2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9QbGF5ZXJIYW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGFrZXNpeC9ib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3Rha2VzaXgvY29uZmlnLnRzIl0sIm5hbWVzIjpbIkNhcmRDb21wb25lbnQiLCJ2YWx1ZXMiLCJSZWFjdCIsIm9uQ2xpY2siLCJwcm9wcyIsImNsaWNrIiwiY2xhc3NOYW1lIiwiY3NzIiwiQ2FyZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNhcmQiLCJ2YWx1ZSIsIlR5cG9ncmFwaHkiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwidmFyaWFudCIsInZlcnRpY2FsQWxpZ24iLCJudW1iZXIiLCJEZWNrcyIsImFyZ3VtZW50cyIsIl9zZWxlY3REZWNrIiwiaSIsInNlbGVjdERlY2siLCJHIiwiZGVja3MiLCJtYXAiLCJkZWNrIiwia2V5IiwibWFyZ2luQm90dG9tIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJjbGVhciIsImlkIiwiY3R4IiwicGhhc2UiLCJhY3Rpb25QbGF5ZXJzIiwic29tZSIsInBsYXllciIsInBsYXllcklEIiwiaXNBbGxvd2VkRGVjayIsIlBsYXllckhhbmQiLCJfc2VsZWN0Q2FyZCIsInNlbGVjdENhcmQiLCJtYXJnaW5Ub3AiLCJjb2xvciIsIndpZHRoIiwicGxheWVycyIsImNhcmRzIiwiaW5kZXgiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIkJvYXJkIiwic3RhdGUiLCJhaVNlY29uZERlY2siLCJfY2FuUGxheSIsIm1vdmVzIiwiaXNBSUdhbWUiLCJnYW1lQXJncyIsImN1cnJlbnRQbGF5ZXIiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJnYW1lb3ZlciIsIndpbm5lciIsInVuZGVmaW5lZCIsIlNjb3JlYm9hcmQiLCJzY29yZWJvYXJkIiwiZ2V0U2NvcmVCb2FyZCIsInNjb3JlTmFtZSIsIkdhbWVMYXlvdXQiLCJnYW1lT3ZlciIsIl9nZXRHYW1lT3ZlciIsImV4dHJhQ2FyZENvbnRlbnQiLCJfZ2V0U2NvcmVCb2FyZCIsIl9nZXRTdGF0dXMiLCJTY29yZUJhZGdlcyIsImNvbmZpZyIsImJnaW9HYW1lIiwiVGFrZVNpeEdhbWUiLCJiZ2lvQm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyx1Q0FBdUMsUUFBUSw0QkFBNEIsaUJBQWlCLEtBQUssU0FBUyw0QkFBNEIsaUJBQWlCLEtBQUssVUFBVSwwQkFBMEIsS0FBSyxHQUFHLDRCQUE0QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsZUFBZSw0Q0FBNEMsR0FBRztBQUNsWTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxpS0FBOEU7O0FBRXBHLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixpS0FBOEU7QUFDakcsbUJBQW1CLG1CQUFPLENBQUMsaUtBQThFOztBQUV6RyxvREFBb0Qs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QUEzQjtBQXFGZWlFLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTXdCLE1BQU0sR0FBRztBQUNYQyxVQUFRLEVBQUVDLGlEQURDO0FBRVhDLFdBQVMsRUFBRTNCLDRDQUFLQTtBQUZMLENBQWY7QUFJZXdCLHFFQUFmLEUiLCJmaWxlIjoiM2MzYzNjNGUwYWE2NmI0NjE0MjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgXzF4TE5fc1ZNa0doY2x1TERLbWhqaWoge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmhQS0FONm5lRk5hWElZbDZDb2JsNCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogNjVweDtcXG4gIHdpZHRoOiAyMCU7XFxuXFx0YW5pbWF0aW9uOiBfMXhMTl9zVk1rR2hjbHVMREttaGppaiAxLjVzO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiQ2FyZFwiOiBcImhQS0FONm5lRk5hWElZbDZDb2JsNFwiLFxuXHRcImJvdW5jZUluXCI6IFwiXzF4TE5fc1ZNa0doY2x1TERLbWhqaWpcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vQ2FyZENvbXBvbmVudC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL0NhcmRDb21wb25lbnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vQ2FyZENvbXBvbmVudC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4vQ2FyZENvbXBvbmVudC5jc3MnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICAxOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAyOiAnIzM0OThkYicsXG4gICAgICAgICAgICAzOiAnI2YxYzQwZicsXG4gICAgICAgICAgICA1OiAnI2U3NGMzYycsXG4gICAgICAgICAgICA3OiAnIzhlNDRhZCcsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IG9uQ2xpY2s6IHRoaXMucHJvcHMuY2xpY2ssIGNsYXNzTmFtZTogY3NzLkNhcmQsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFsdWVzW3RoaXMucHJvcHMuY2FyZC52YWx1ZV0sXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiBcIkNhcmRWYWx1ZVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgICAgfSwgdmFyaWFudDogXCJib2R5MlwiIH0sIHRoaXMucHJvcHMuY2FyZC52YWx1ZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiBcIkNhcmROdW1iZXJcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzQ1cHgnLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICB9LCB2YXJpYW50OiBcImg0XCIgfSwgdGhpcy5wcm9wcy5jYXJkLm51bWJlcikpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0FsbG93ZWREZWNrIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL0NhcmRDb21wb25lbnQnO1xuZXhwb3J0IGNsYXNzIERlY2tzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0RGVjayA9IChpKSA9PiAoKSA9PiB0aGlzLnByb3BzLnNlbGVjdERlY2soaSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMuRy5kZWNrcy5tYXAoKGRlY2ssIGkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIkRlY2tSb3dcIiwga2V5OiBpLCBvbkNsaWNrOiB0aGlzLl9zZWxlY3REZWNrKGkpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzRweCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5nZXRPcGFjaXR5KGkpLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgZGVjay5tYXAoY2FyZCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogY2FyZC5udW1iZXIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRDb21wb25lbnQsIHsgY2FyZDogY2FyZCB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBjbGVhcjogJ2JvdGgnIH0gfSkpKSkpKTtcbiAgICB9XG4gICAgZ2V0T3BhY2l0eShpZCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHgucGhhc2UgPT09ICdDQVJEX1NFTEVDVCcgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmN0eC5hY3Rpb25QbGF5ZXJzLnNvbWUocGxheWVyID0+IHBsYXllciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FsbG93ZWREZWNrKHRoaXMucHJvcHMuRywgaWQsIHRoaXMucHJvcHMucGxheWVySUQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwLjI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9DYXJkQ29tcG9uZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuZXhwb3J0IGNsYXNzIFBsYXllckhhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9zZWxlY3RDYXJkID0gKGkpID0+ICgpID0+IHRoaXMucHJvcHMuc2VsZWN0Q2FyZChpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBjbGVhcjogJ2JvdGgnLCBtYXJnaW5Ub3A6ICc4cHgnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSwgdmFyaWFudDogXCJib2R5MlwiIH0sIFwiWW91ciBoYW5kXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIH0gfSwgdGhpcy5wcm9wcy5HLnBsYXllcnNbdGhpcy5wcm9wcy5wbGF5ZXJJRF0uY2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbXBvbmVudCwgeyBrZXk6IGNhcmQubnVtYmVyLCBjbGljazogdGhpcy5fc2VsZWN0Q2FyZChpbmRleCksIGNhcmQ6IGNhcmQgfSkpKSkpKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTGF5b3V0JztcbmltcG9ydCB7IGdldFNjb3JlQm9hcmQsIGlzQWxsb3dlZERlY2sgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgRGVja3MgfSBmcm9tICcuL0RlY2tzJztcbmltcG9ydCB7IFBsYXllckhhbmQgfSBmcm9tICcuL1BsYXllckhhbmQnO1xuaW1wb3J0IHsgU2NvcmVib2FyZCB9IGZyb20gJy4uLy4uL2NvbW1vbi9TY29yZWJvYXJkJztcbmltcG9ydCB7IFNjb3JlQmFkZ2VzIH0gZnJvbSAnLi4vLi4vY29tbW9uL1Njb3JlQmFkZ2VzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgaXNBSUdhbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZ2FtZU1vZGUnO1xuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYWlTZWNvbmREZWNrOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLl9zZWxlY3RDYXJkID0gKGlkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhblBsYXkoKSB8fCB0aGlzLnByb3BzLmN0eC5waGFzZSAhPT0gJ0NBUkRfU0VMRUNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMubW92ZXMuc2VsZWN0Q2FyZChpZCk7XG4gICAgICAgICAgICBpZiAoaXNBSUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnByb3BzLnN0ZXAoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHguY3VycmVudFBsYXllciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWlTZWNvbmREZWNrOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFpU2Vjb25kRGVjazogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdERlY2sgPSAoaWQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FuUGxheSgpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdHgucGhhc2UgIT09ICdERUNLX1NFTEVDVCcgfHxcbiAgICAgICAgICAgICAgICAhaXNBbGxvd2VkRGVjayh0aGlzLnByb3BzLkcsIGlkLCB0aGlzLnByb3BzLnBsYXllcklEKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMubW92ZXMuc2VsZWN0RGVjayhpZCk7XG4gICAgICAgICAgICBpZiAoaXNBSUdhbWUodGhpcy5wcm9wcy5nYW1lQXJncykgJiYgdGhpcy5zdGF0ZS5haVNlY29uZERlY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGVwKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIF9nZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5nYW1lQXJncykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FuUGxheSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1dhaXRpbmcgZm9yIG9wcG9uZW50Li4uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdHgucGhhc2UgPT09ICdDQVJEX1NFTEVDVCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnU0VMRUNUIENBUkQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdTRUxFQ1QgQk9BUkQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jYW5QbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdHguYWN0aW9uUGxheWVycy5zb21lKHBsYXllciA9PiBwbGF5ZXIgPT09IHRoaXMucHJvcHMucGxheWVySUQpO1xuICAgIH1cbiAgICBfZ2V0R2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyLndpbm5lciA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAneW91IHdvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3lvdSBsb3N0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnZHJhdyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldFNjb3JlQm9hcmQoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTY29yZWJvYXJkLCB7IHNjb3JlYm9hcmQ6IGdldFNjb3JlQm9hcmQodGhpcy5wcm9wcy5HKSwgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsIHBsYXllcnM6IHRoaXMucHJvcHMuZ2FtZUFyZ3MucGxheWVycywgc2NvcmVOYW1lOiBcIlBlbmFsdHkgcG9pbnRzXCIgfSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIHsgZ2FtZU92ZXI6IHRoaXMuX2dldEdhbWVPdmVyKCksIGV4dHJhQ2FyZENvbnRlbnQ6IHRoaXMuX2dldFNjb3JlQm9hcmQoKSwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnBsYXllcklEID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZUxheW91dCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgbnVsbCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVMYXlvdXQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiLCBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTZweCcgfSB9LCB0aGlzLl9nZXRTdGF0dXMoKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERlY2tzLCB7IEc6IHRoaXMucHJvcHMuRywgY3R4OiB0aGlzLnByb3BzLmN0eCwgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsIHNlbGVjdERlY2s6IHRoaXMuX3NlbGVjdERlY2sgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBsYXllckhhbmQsIHsgRzogdGhpcy5wcm9wcy5HLCBwbGF5ZXJJRDogdGhpcy5wcm9wcy5wbGF5ZXJJRCwgc2VsZWN0Q2FyZDogdGhpcy5fc2VsZWN0Q2FyZCB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NvcmVCYWRnZXMsIHsgc2NvcmVib2FyZDogZ2V0U2NvcmVCb2FyZCh0aGlzLnByb3BzLkcpLCBwbGF5ZXJJRDogdGhpcy5wcm9wcy5wbGF5ZXJJRCwgcGxheWVyczogdGhpcy5wcm9wcy5nYW1lQXJncy5wbGF5ZXJzIH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCJpbXBvcnQgeyBUYWtlU2l4R2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuY29uc3QgY29uZmlnID0ge1xuICAgIGJnaW9HYW1lOiBUYWtlU2l4R2FtZSxcbiAgICBiZ2lvQm9hcmQ6IEJvYXJkLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=