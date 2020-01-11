(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ "./src/App/Game/GameInfo.tsx":
/*!***********************************!*\
  !*** ./src/App/Game/GameInfo.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameCard */ "./src/App/Game/GameCard.tsx");
/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _GameInstructions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameInstructions */ "./src/App/Game/GameInstructions.tsx");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../games */ "./src/games/index.ts");
/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MessagePageClass */ "./src/App/MessagePageClass.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var GameInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameInfo, _React$Component);

  function GameInfo() {
    _classCallCheck(this, GameInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameInfo).apply(this, arguments));
  }

  _createClass(GameInfo, [{
    key: "render",
    value: function render() {
      var gameCode = this.props.match.params.gameCode;
      var gameDef = _games__WEBPACK_IMPORTED_MODULE_5__["GAMES_MAP"][gameCode];

      if (!gameDef) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: 'error',
          message: 'Game Not Found'
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCard__WEBPACK_IMPORTED_MODULE_2__["GameCard"], {
        game: gameDef
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameModePicker__WEBPACK_IMPORTED_MODULE_3__["GameModePicker"], {
        gameDef: gameDef
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameInstructions__WEBPACK_IMPORTED_MODULE_4__["GameInstructions"], {
        gameDef: gameDef
      }));
    }
  }]);

  return GameInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GameInfo);

/***/ }),

/***/ "./src/App/Game/GameInstructions.tsx":
/*!*******************************************!*\
  !*** ./src/App/Game/GameInstructions.tsx ***!
  \*******************************************/
/*! exports provided: GameInstructions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInstructions", function() { return GameInstructions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GameInstructions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameInstructions, _React$Component);

  function GameInstructions() {
    _classCallCheck(this, GameInstructions);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameInstructions).apply(this, arguments));
  }

  _createClass(GameInstructions, [{
    key: "render",
    value: function render() {
      var instructions = this.props.gameDef.instructions;
      var text = null;

      if (instructions.text) {
        text = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          linkTarget: "_blank",
          source: instructions.text
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          marginBottom: 16
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'relative',
          paddingBottom: '56.25%',
          paddingTop: 30,
          height: 0,
          overflow: 'hidden'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        "data-testid": 'gameinstructionsvideo',
        style: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        },
        width: "500",
        height: "360",
        src: "https://www.youtube.com/embed/".concat(instructions.videoId),
        allowFullScreen: true,
        frameBorder: "0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0 8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        component: "div"
      }, text)));
    }
  }]);

  return GameInstructions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWUvR2FtZUluZm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lSW5zdHJ1Y3Rpb25zLnRzeCJdLCJuYW1lcyI6WyJHYW1lSW5mbyIsImdhbWVDb2RlIiwicHJvcHMiLCJtYXRjaCIsInBhcmFtcyIsImdhbWVEZWYiLCJHQU1FU19NQVAiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNZXNzYWdlUGFnZUNsYXNzIiwidHlwZSIsIm1lc3NhZ2UiLCJGcmVlQm9hcmRHYW1lQmFyIiwiR2FtZUNhcmQiLCJnYW1lIiwiR2FtZU1vZGVQaWNrZXIiLCJHYW1lSW5zdHJ1Y3Rpb25zIiwiQ29tcG9uZW50IiwiaW5zdHJ1Y3Rpb25zIiwidGV4dCIsIlJlYWN0TWFya2Rvd24iLCJsaW5rVGFyZ2V0Iiwic291cmNlIiwiQ2FyZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImhlaWdodCIsIm92ZXJmbG93Iiwid2lkdGgiLCJ0b3AiLCJsZWZ0Iiwic3JjIiwidmlkZW9JZCIsImFsbG93RnVsbFNjcmVlbiIsImZyYW1lQm9yZGVyIiwicGFkZGluZyIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLFE7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxVQUFNQyxRQUFRLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkgsUUFBekM7QUFDQSxVQUFNSSxPQUFPLEdBQUdDLGdEQUFTLENBQUNMLFFBQUQsQ0FBekI7O0FBQ0EsVUFBSSxDQUFDSSxPQUFMLEVBQWM7QUFDVixlQUFPRSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyx5REFBcEIsRUFBc0M7QUFBRUMsY0FBSSxFQUFFLE9BQVI7QUFBaUJDLGlCQUFPLEVBQUU7QUFBMUIsU0FBdEMsQ0FBUDtBQUNIOztBQUNELGFBQVFKLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JJLHlEQUFwQixFQUFzQyxJQUF0QyxFQUNKTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CSyxrREFBcEIsRUFBOEI7QUFBRUMsWUFBSSxFQUFFVDtBQUFSLE9BQTlCLENBREksRUFFSkUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQk8sOERBQXBCLEVBQW9DO0FBQUVWLGVBQU8sRUFBRUE7QUFBWCxPQUFwQyxDQUZJLEVBR0pFLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JRLGtFQUFwQixFQUFzQztBQUFFWCxlQUFPLEVBQUVBO0FBQVgsT0FBdEMsQ0FISSxDQUFSO0FBSUg7Ozs7RUFYa0JFLDRDQUFLLENBQUNVLFM7O0FBYWRqQix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1nQixnQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNhO0FBQ0wsVUFBTUUsWUFBWSxHQUFHLEtBQUtoQixLQUFMLENBQVdHLE9BQVgsQ0FBbUJhLFlBQXhDO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0EsVUFBSUQsWUFBWSxDQUFDQyxJQUFqQixFQUF1QjtBQUNuQkEsWUFBSSxHQUFHWiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CWSxxREFBcEIsRUFBbUM7QUFBRUMsb0JBQVUsRUFBRSxRQUFkO0FBQXdCQyxnQkFBTSxFQUFFSixZQUFZLENBQUNDO0FBQTdDLFNBQW5DLENBQVA7QUFDSDs7QUFDRCxhQUFRWiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZSw4REFBcEIsRUFBMEI7QUFBRUMsYUFBSyxFQUFFO0FBQUVDLHNCQUFZLEVBQUU7QUFBaEI7QUFBVCxPQUExQixFQUNKbEIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFZ0IsYUFBSyxFQUFFO0FBQUVFLGtCQUFRLEVBQUUsVUFBWjtBQUF3QkMsdUJBQWEsRUFBRSxRQUF2QztBQUFpREMsb0JBQVUsRUFBRSxFQUE3RDtBQUFpRUMsZ0JBQU0sRUFBRSxDQUF6RTtBQUE0RUMsa0JBQVEsRUFBRTtBQUF0RjtBQUFULE9BQTNCLEVBQ0l2Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLFFBQXBCLEVBQThCO0FBQUUsdUJBQWUsdUJBQWpCO0FBQTBDZ0IsYUFBSyxFQUFFO0FBQUVPLGVBQUssRUFBRSxNQUFUO0FBQWlCRixnQkFBTSxFQUFFLE1BQXpCO0FBQWlDSCxrQkFBUSxFQUFFLFVBQTNDO0FBQXVETSxhQUFHLEVBQUUsQ0FBNUQ7QUFBK0RDLGNBQUksRUFBRTtBQUFyRSxTQUFqRDtBQUEySEYsYUFBSyxFQUFFLEtBQWxJO0FBQXlJRixjQUFNLEVBQUUsS0FBako7QUFBd0pLLFdBQUcsMENBQW1DaEIsWUFBWSxDQUFDaUIsT0FBaEQsQ0FBM0o7QUFBc05DLHVCQUFlLEVBQUUsSUFBdk87QUFBNk9DLG1CQUFXLEVBQUU7QUFBMVAsT0FBOUIsQ0FESixDQURJLEVBR0o5Qiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVnQixhQUFLLEVBQUU7QUFBRWMsaUJBQU8sRUFBRTtBQUFYO0FBQVQsT0FBM0IsRUFDSS9CLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IrQixvRUFBcEIsRUFBZ0M7QUFBRUMsZUFBTyxFQUFFLE9BQVg7QUFBb0JDLGlCQUFTLEVBQUU7QUFBL0IsT0FBaEMsRUFBd0V0QixJQUF4RSxDQURKLENBSEksQ0FBUjtBQUtIO0FBWkw7O0FBQUE7QUFBQSxFQUFzQ1osNENBQUssQ0FBQ1UsU0FBNUMsRSIsImZpbGUiOiJlMzkwOGI3NjQxZTk5ZTUzMTM5My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRnJlZUJvYXJkR2FtZUJhciBmcm9tICcuLi9GcmVlQm9hcmRHYW1lQmFyJztcbmltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSAnLi9HYW1lQ2FyZCc7XG5pbXBvcnQgeyBHYW1lTW9kZVBpY2tlciB9IGZyb20gJy4vR2FtZU1vZGVQaWNrZXInO1xuaW1wb3J0IHsgR2FtZUluc3RydWN0aW9ucyB9IGZyb20gJy4vR2FtZUluc3RydWN0aW9ucyc7XG5pbXBvcnQgeyBHQU1FU19NQVAgfSBmcm9tICcuLi8uLi9nYW1lcyc7XG5pbXBvcnQgTWVzc2FnZVBhZ2VDbGFzcyBmcm9tICcuLi9NZXNzYWdlUGFnZUNsYXNzJztcbmNsYXNzIEdhbWVJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVDb2RlID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuZ2FtZUNvZGU7XG4gICAgICAgIGNvbnN0IGdhbWVEZWYgPSBHQU1FU19NQVBbZ2FtZUNvZGVdO1xuICAgICAgICBpZiAoIWdhbWVEZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2VQYWdlQ2xhc3MsIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ0dhbWUgTm90IEZvdW5kJyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJlZUJvYXJkR2FtZUJhciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZUNhcmQsIHsgZ2FtZTogZ2FtZURlZiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZU1vZGVQaWNrZXIsIHsgZ2FtZURlZjogZ2FtZURlZiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FtZUluc3RydWN0aW9ucywgeyBnYW1lRGVmOiBnYW1lRGVmIH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgR2FtZUluZm87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmV4cG9ydCBjbGFzcyBHYW1lSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IHRoaXMucHJvcHMuZ2FtZURlZi5pbnN0cnVjdGlvbnM7XG4gICAgICAgIGxldCB0ZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKGluc3RydWN0aW9ucy50ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0ID0gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdE1hcmtkb3duLCB7IGxpbmtUYXJnZXQ6IFwiX2JsYW5rXCIsIHNvdXJjZTogaW5zdHJ1Y3Rpb25zLnRleHQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxNiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIHBhZGRpbmdCb3R0b206ICc1Ni4yNSUnLCBwYWRkaW5nVG9wOiAzMCwgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgeyBcImRhdGEtdGVzdGlkXCI6ICdnYW1laW5zdHJ1Y3Rpb25zdmlkZW8nLCBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9LCB3aWR0aDogXCI1MDBcIiwgaGVpZ2h0OiBcIjM2MFwiLCBzcmM6IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2luc3RydWN0aW9ucy52aWRlb0lkfWAsIGFsbG93RnVsbFNjcmVlbjogdHJ1ZSwgZnJhbWVCb3JkZXI6IFwiMFwiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAnMCA4cHgnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MlwiLCBjb21wb25lbnQ6IFwiZGl2XCIgfSwgdGV4dCkpKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==