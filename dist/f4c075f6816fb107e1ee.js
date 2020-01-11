(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[1],{

/***/ "./src/App/Game/GameDarkSublayout.tsx":
/*!********************************************!*\
  !*** ./src/App/Game/GameDarkSublayout.tsx ***!
  \********************************************/
/*! exports provided: GameDarkSublayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDarkSublayout", function() { return GameDarkSublayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/fbg_logo_white_48.png */ "./src/App/media/fbg_logo_white_48.png");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var GameDarkSublayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameDarkSublayout, _React$Component);

  function GameDarkSublayout(props) {
    var _this;

    _classCallCheck(this, GameDarkSublayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameDarkSublayout).call(this, props));

    _this._openOptionsMenu = function (event) {
      _this.setState({
        menuAnchorEl: event.currentTarget
      });
    };

    _this._closeOptionsMenu = function () {
      _this.setState({
        menuAnchorEl: null
      });
    };

    _this._wrapOnClick = function (onClickFunc) {
      return function () {
        // close menu, call onClickFunc
        _this._closeOptionsMenu();

        onClickFunc();
      };
    };

    _this._getOptionsMenuItems = function () {
      if (!_this.props.optionsMenuItems) {
        return;
      }

      var menuAnchorEl = _this.state.menuAnchorEl;

      var menuItems = _this.props.optionsMenuItems().map(function (option, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: "option-".concat(index),
          onClick: _this._wrapOnClick(option.onClick)
        }, option.text);
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "simple-menu",
        anchorEl: menuAnchorEl,
        open: Boolean(menuAnchorEl),
        onClose: _this._closeOptionsMenu
      }, menuItems);
    };

    document.body.style.backgroundColor = 'black';
    _this.state = {
      menuAnchorEl: null
    };
    return _this;
  }

  _createClass(GameDarkSublayout, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.backgroundColor = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'fixed',
          top: '0',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/",
        style: {
          float: 'left',
          textDecoration: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "FreeBoardGame.org",
        style: {
          float: 'left',
          paddingRight: '16px'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          float: 'left',
          paddingTop: '14px',
          color: 'white'
        }
      }, "FreeBoardGame.org")), this._getOptionsMenuButton(), this._getOptionsMenuItems())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'fixed',
          width: '100%',
          maxWidth: '500px',
          color: 'white',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }, this.props.children));
    }
  }, {
    key: "_getOptionsMenuButton",
    value: function _getOptionsMenuButton() {
      if (this.props.optionsMenuItems) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: this._openOptionsMenu,
          "aria-label": "Open options",
          variant: "outlined",
          style: {
            margin: '8px',
            float: 'right'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: {
            color: 'white'
          }
        }));
      }
    }
  }]);

  return GameDarkSublayout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Game/GameLayout.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/GameLayout.tsx ***!
  \*************************************/
/*! exports provided: GameLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLayout", function() { return GameLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameOver */ "./src/App/Game/GameOver.tsx");
/* harmony import */ var _GameDarkSublayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameDarkSublayout */ "./src/App/Game/GameDarkSublayout.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var GameLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameLayout, _React$Component);

  function GameLayout() {
    _classCallCheck(this, GameLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameLayout).apply(this, arguments));
  }

  _createClass(GameLayout, [{
    key: "render",
    value: function render() {
      if (this.props.gameOver) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameOver__WEBPACK_IMPORTED_MODULE_1__["GameOver"], {
          result: this.props.gameOver,
          gameArgs: this.props.gameArgs,
          extraCardContent: this.props.extraCardContent
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameDarkSublayout__WEBPACK_IMPORTED_MODULE_2__["GameDarkSublayout"], {
          optionsMenuItems: this.props.optionsMenuItems
        }, this.props.children);
      }
    }
  }]);

  return GameLayout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Game/GameOver.tsx":
/*!***********************************!*\
  !*** ./src/App/Game/GameOver.tsx ***!
  \***********************************/
/*! exports provided: GameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOver", function() { return GameOver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _GamesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GamesList */ "./src/App/GamesList.tsx");
/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Replay */ "./node_modules/@material-ui/icons/Replay.js");
/* harmony import */ var _material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Lobby/LobbyService */ "./src/App/Lobby/LobbyService.ts");
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











var GameOver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameOver, _React$Component);

  function GameOver() {
    var _this;

    _classCallCheck(this, GameOver);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameOver).apply(this, arguments));
    _this.state = {
      loading: false
    };

    _this._getExtraCardContent = function () {
      if (!_this.props.extraCardContent) {
        return null;
      }

      var otherPlayerCard = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          paddingBottom: '12px'
        }
      }, _this.props.extraCardContent);
      return otherPlayerCard;
    };

    _this._playAgainHandle = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var args, nextRoomId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                args = this.props.gameArgs;
                react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].event({
                  category: 'GameOver',
                  action: 'Clicked play again',
                  label: args.gameCode
                });

                if (!(args.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI || args.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend)) {
                  _context.next = 6;
                  break;
                }

                window.location.reload();
                _context.next = 11;
                break;

              case 6:
                this.setState({
                  loading: true
                });
                _context.next = 9;
                return _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_9__["LobbyService"].getPlayAgainNextRoom(args.gameCode, args.matchCode, args.players.length);

              case 9:
                nextRoomId = _context.sent;
                window.location.replace("/room/".concat(args.gameCode, "/").concat(nextRoomId));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    return _this;
  }

  _createClass(GameOver, [{
    key: "render",
    value: function render() {
      if (this.state.loading) {
        var Page = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_8__["default"])('loading', 'Loading...');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, null);
      }

      var playAgain;

      var extraCardContent = this._getExtraCardContent();

      if (this.props.gameArgs) {
        playAgain = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: this._playAgainHandle,
          variant: "outlined",
          style: {
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '24px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: {
            marginRight: '8px'
          }
        }), "Play Again"));
      }

      react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].event({
        category: 'GameOver',
        label: this.props.gameArgs.gameCode,
        action: this.props.result
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        gutterBottom: true,
        align: "center",
        style: {
          marginTop: '16px'
        }
      }, "Game Over, ", this.props.result, "!"), playAgain, extraCardContent, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GamesList__WEBPACK_IMPORTED_MODULE_2__["GamesList"], null));
    }
  }]);

  return GameOver;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWUvR2FtZURhcmtTdWJsYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWUvR2FtZU92ZXIudHN4Il0sIm5hbWVzIjpbIkdhbWVEYXJrU3VibGF5b3V0IiwicHJvcHMiLCJfb3Blbk9wdGlvbnNNZW51IiwiZXZlbnQiLCJzZXRTdGF0ZSIsIm1lbnVBbmNob3JFbCIsImN1cnJlbnRUYXJnZXQiLCJfY2xvc2VPcHRpb25zTWVudSIsIl93cmFwT25DbGljayIsIm9uQ2xpY2tGdW5jIiwiX2dldE9wdGlvbnNNZW51SXRlbXMiLCJvcHRpb25zTWVudUl0ZW1zIiwic3RhdGUiLCJtZW51SXRlbXMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk1lbnVJdGVtIiwia2V5Iiwib25DbGljayIsInRleHQiLCJNZW51IiwiaWQiLCJhbmNob3JFbCIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidW5kZWZpbmVkIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiTGluayIsInRvIiwiZmxvYXQiLCJ0ZXh0RGVjb3JhdGlvbiIsInNyYyIsIkZiZ0xvZ28iLCJhbHQiLCJwYWRkaW5nUmlnaHQiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsInBhZGRpbmdUb3AiLCJjb2xvciIsIl9nZXRPcHRpb25zTWVudUJ1dHRvbiIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIm1hcmdpbiIsIk1vcmVWZXJ0IiwiQ29tcG9uZW50IiwiR2FtZUxheW91dCIsImdhbWVPdmVyIiwiR2FtZU92ZXIiLCJyZXN1bHQiLCJnYW1lQXJncyIsImV4dHJhQ2FyZENvbnRlbnQiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiYXJndW1lbnRzIiwibG9hZGluZyIsIl9nZXRFeHRyYUNhcmRDb250ZW50Iiwib3RoZXJQbGF5ZXJDYXJkIiwicGFkZGluZ0JvdHRvbSIsIl9wbGF5QWdhaW5IYW5kbGUiLCJhcmdzIiwiUmVhY3RHQSIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJnYW1lQ29kZSIsIm1vZGUiLCJHYW1lTW9kZSIsIkFJIiwiTG9jYWxGcmllbmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkxvYmJ5U2VydmljZSIsImdldFBsYXlBZ2Fpbk5leHRSb29tIiwibWF0Y2hDb2RlIiwicGxheWVycyIsImxlbmd0aCIsIm5leHRSb29tSWQiLCJyZXBsYWNlIiwiUGFnZSIsImdldE1lc3NhZ2VQYWdlIiwicGxheUFnYWluIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiUmVwbGF5SWNvbiIsIkZyZWVCb2FyZEdhbWVCYXIiLCJhbGlnbiIsIm1hcmdpblRvcCIsIkdhbWVzTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsaUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiwyRkFBTUEsS0FBTjs7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixVQUFDQyxLQUFELEVBQVc7QUFDL0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLG9CQUFZLEVBQUVGLEtBQUssQ0FBQ0c7QUFBdEIsT0FBZDtB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LENBQVcrRDtBQUhULE9BQWQ7QUFLQSxhQUFRL0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmtHLHlEQUFwQixFQUFzQyxJQUF0QyxFQUNKbkcsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjhCLG9FQUFwQixFQUFnQztBQUFFQyxlQUFPLEVBQUUsSUFBWDtBQUFpQkMsb0JBQVksRUFBRSxJQUEvQjtBQUFxQ21FLGFBQUssRUFBRSxRQUE1QztBQUFzRHRGLGFBQUssRUFBRTtBQUFFdUYsbUJBQVMsRUFBRTtBQUFiO0FBQTdELE9BQWhDLEVBQ0ksYUFESixFQUVJLEtBQUtySCxLQUFMLENBQVcrRCxNQUZmLEVBR0ksR0FISixDQURJLEVBS0pnRCxTQUxJLEVBTUo5QyxnQkFOSSxFQU9KakQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnFHLG9EQUFwQixFQUErQixJQUEvQixDQVBJLENBQVI7QUFRSDtBQXRETDs7QUFBQTtBQUFBLEVBQThCdEcsNENBQUssQ0FBQzJDLFNBQXBDLEUiLCJmaWxlIjoiZjRjMDc1ZjY4MTZmYjEwN2UxZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRmJnTG9nbyBmcm9tICcuLi9tZWRpYS9mYmdfbG9nb193aGl0ZV80OC5wbmcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IE1vcmVWZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5leHBvcnQgY2xhc3MgR2FtZURhcmtTdWJsYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5fb3Blbk9wdGlvbnNNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudUFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jbG9zZU9wdGlvbnNNZW51ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVBbmNob3JFbDogbnVsbCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fd3JhcE9uQ2xpY2sgPSAob25DbGlja0Z1bmMpID0+ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNsb3NlIG1lbnUsIGNhbGwgb25DbGlja0Z1bmNcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlT3B0aW9uc01lbnUoKTtcbiAgICAgICAgICAgIG9uQ2xpY2tGdW5jKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldE9wdGlvbnNNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMub3B0aW9uc01lbnVJdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgbWVudUFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gdGhpcy5wcm9wcy5vcHRpb25zTWVudUl0ZW1zKCkubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogYG9wdGlvbi0ke2luZGV4fWAsIG9uQ2xpY2s6IHRoaXMuX3dyYXBPbkNsaWNrKG9wdGlvbi5vbkNsaWNrKSB9LCBvcHRpb24udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgeyBpZDogXCJzaW1wbGUtbWVudVwiLCBhbmNob3JFbDogbWVudUFuY2hvckVsLCBvcGVuOiBCb29sZWFuKG1lbnVBbmNob3JFbCksIG9uQ2xvc2U6IHRoaXMuX2Nsb3NlT3B0aW9uc01lbnUgfSwgbWVudUl0ZW1zKSk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVudUFuY2hvckVsOiBudWxsIH07XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyB0bzogXCIvXCIsIHN0eWxlOiB7IGZsb2F0OiAnbGVmdCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogRmJnTG9nbywgYWx0OiBcIkZyZWVCb2FyZEdhbWUub3JnXCIsIHN0eWxlOiB7IGZsb2F0OiAnbGVmdCcsIHBhZGRpbmdSaWdodDogJzE2cHgnIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNlwiLCBndXR0ZXJCb3R0b206IHRydWUsIHN0eWxlOiB7IGZsb2F0OiAnbGVmdCcsIHBhZGRpbmdUb3A6ICcxNHB4JywgY29sb3I6ICd3aGl0ZScgfSB9LCBcIkZyZWVCb2FyZEdhbWUub3JnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3B0aW9uc01lbnVCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3B0aW9uc01lbnVJdGVtcygpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgICAgICAgfSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSkpO1xuICAgIH1cbiAgICBfZ2V0T3B0aW9uc01lbnVCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnNNZW51SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogdGhpcy5fb3Blbk9wdGlvbnNNZW51LCBcImFyaWEtbGFiZWxcIjogXCJPcGVuIG9wdGlvbnNcIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBzdHlsZTogeyBtYXJnaW46ICc4cHgnLCBmbG9hdDogJ3JpZ2h0JyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb3JlVmVydCwgeyBzdHlsZTogeyBjb2xvcjogJ3doaXRlJyB9IH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2FtZU92ZXIgfSBmcm9tICcuL0dhbWVPdmVyJztcbmltcG9ydCB7IEdhbWVEYXJrU3VibGF5b3V0IH0gZnJvbSAnLi9HYW1lRGFya1N1YmxheW91dCc7XG5leHBvcnQgY2xhc3MgR2FtZUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nYW1lT3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVPdmVyLCB7IHJlc3VsdDogdGhpcy5wcm9wcy5nYW1lT3ZlciwgZ2FtZUFyZ3M6IHRoaXMucHJvcHMuZ2FtZUFyZ3MsIGV4dHJhQ2FyZENvbnRlbnQ6IHRoaXMucHJvcHMuZXh0cmFDYXJkQ29udGVudCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZURhcmtTdWJsYXlvdXQsIHsgb3B0aW9uc01lbnVJdGVtczogdGhpcy5wcm9wcy5vcHRpb25zTWVudUl0ZW1zIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi9HYW1lTW9kZVBpY2tlcic7XG5pbXBvcnQgeyBHYW1lc0xpc3QgfSBmcm9tICcuLi9HYW1lc0xpc3QnO1xuaW1wb3J0IEZyZWVCb2FyZEdhbWVCYXIgZnJvbSAnLi4vRnJlZUJvYXJkR2FtZUJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBSZXBsYXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBsYXknO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuaW1wb3J0IGdldE1lc3NhZ2VQYWdlIGZyb20gJy4uL01lc3NhZ2VQYWdlJztcbmltcG9ydCB7IExvYmJ5U2VydmljZSB9IGZyb20gJy4uL0xvYmJ5L0xvYmJ5U2VydmljZSc7XG5leHBvcnQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLl9nZXRFeHRyYUNhcmRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmV4dHJhQ2FyZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG90aGVyUGxheWVyQ2FyZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTJweCcgfSB9LCB0aGlzLnByb3BzLmV4dHJhQ2FyZENvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyUGxheWVyQ2FyZDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcGxheUFnYWluSGFuZGxlID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucHJvcHMuZ2FtZUFyZ3M7XG4gICAgICAgICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0dhbWVPdmVyJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdDbGlja2VkIHBsYXkgYWdhaW4nLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBhcmdzLmdhbWVDb2RlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXJncy5tb2RlID09PSBHYW1lTW9kZS5BSSB8fCBhcmdzLm1vZGUgPT09IEdhbWVNb2RlLkxvY2FsRnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFJvb21JZCA9IHlpZWxkIExvYmJ5U2VydmljZS5nZXRQbGF5QWdhaW5OZXh0Um9vbShhcmdzLmdhbWVDb2RlLCBhcmdzLm1hdGNoQ29kZSwgYXJncy5wbGF5ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9yb29tLyR7YXJncy5nYW1lQ29kZX0vJHtuZXh0Um9vbUlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBQYWdlID0gZ2V0TWVzc2FnZVBhZ2UoJ2xvYWRpbmcnLCAnTG9hZGluZy4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYXlBZ2FpbjtcbiAgICAgICAgY29uc3QgZXh0cmFDYXJkQ29udGVudCA9IHRoaXMuX2dldEV4dHJhQ2FyZENvbnRlbnQoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2FtZUFyZ3MpIHtcbiAgICAgICAgICAgIHBsYXlBZ2FpbiA9IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogdGhpcy5fcGxheUFnYWluSGFuZGxlLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAnYXV0bycsIG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luQm90dG9tOiAnMjRweCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlcGxheUljb24sIHsgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6ICc4cHgnIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFwiUGxheSBBZ2FpblwiKSkpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdHYW1lT3ZlcicsXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5nYW1lQXJncy5nYW1lQ29kZSxcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5wcm9wcy5yZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJlZUJvYXJkR2FtZUJhciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg2XCIsIGd1dHRlckJvdHRvbTogdHJ1ZSwgYWxpZ246IFwiY2VudGVyXCIsIHN0eWxlOiB7IG1hcmdpblRvcDogJzE2cHgnIH0gfSxcbiAgICAgICAgICAgICAgICBcIkdhbWUgT3ZlciwgXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgXCIhXCIpLFxuICAgICAgICAgICAgcGxheUFnYWluLFxuICAgICAgICAgICAgZXh0cmFDYXJkQ29udGVudCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZXNMaXN0LCBudWxsKSkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=