(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/GamesList.tsx":
/*!*******************************!*\
  !*** ./src/App/GamesList.tsx ***!
  \*******************************/
/*! exports provided: GamesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesList", function() { return GamesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games */ "./src/games/index.ts");
/* harmony import */ var _App_Game_GameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App/Game/GameCard */ "./src/App/Game/GameCard.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var GamesList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GamesList, _React$Component);

  function GamesList() {
    _classCallCheck(this, GamesList);

    return _possibleConstructorReturn(this, _getPrototypeOf(GamesList).apply(this, arguments));
  }

  _createClass(GamesList, [{
    key: "render",
    value: function render() {
      // GAMES
      var gamesList = _games__WEBPACK_IMPORTED_MODULE_1__["GAMES_LIST"].map(function (game) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: '/g/' + game.code,
          key: game.code,
          style: {
            textDecoration: 'none'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_Game_GameCard__WEBPACK_IMPORTED_MODULE_2__["GameCard"], {
          game: game,
          isLink: true
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: '8px 0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h6",
        style: {
          marginBottom: '16px'
        }
      }, "Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: '0 4px'
        }
      }, gamesList));
    }
  }]);

  return GamesList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWVzTGlzdC50c3giXSwibmFtZXMiOlsiR2FtZXNMaXN0IiwiZ2FtZXNMaXN0IiwiR0FNRVNfTElTVCIsIm1hcCIsImdhbWUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJMaW5rIiwidG8iLCJjb2RlIiwia2V5Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdhbWVDYXJkIiwiaXNMaW5rIiwibWFyZ2luIiwiVHlwb2dyYXBoeSIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ2E7QUFDTDtBQUNBLFVBQU1DLFNBQVMsR0FBR0MsaURBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSxlQUFLQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyxxREFBcEIsRUFBMEI7QUFBRUMsWUFBRSxFQUFFLFFBQVFKLElBQUksQ0FBQ0ssSUFBbkI7QUFBeUJDLGFBQUcsRUFBRU4sSUFBSSxDQUFDSyxJQUFuQztBQUF5Q0UsZUFBSyxFQUFFO0FBQUVDLDBCQUFjLEVBQUU7QUFBbEI7QUFBaEQsU0FBMUIsRUFDdENQLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JPLDJEQUFwQixFQUE4QjtBQUFFVCxjQUFJLEVBQUVBLElBQVI7QUFBY1UsZ0JBQU0sRUFBRTtBQUF0QixTQUE5QixDQURzQyxDQUFMO0FBQUEsT0FBbkIsQ0FBbEI7QUFFQSxhQUFRVCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQUVLLGFBQUssRUFBRTtBQUFFSSxnQkFBTSxFQUFFO0FBQVY7QUFBVCxPQUEzQixFQUNKViw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CVSxvRUFBcEIsRUFBZ0M7QUFBRUMsZUFBTyxFQUFFLElBQVg7QUFBaUJOLGFBQUssRUFBRTtBQUFFTyxzQkFBWSxFQUFFO0FBQWhCO0FBQXhCLE9BQWhDLEVBQW9GLE9BQXBGLENBREksRUFFSmIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFSyxhQUFLLEVBQUU7QUFBRUksZ0JBQU0sRUFBRTtBQUFWO0FBQVQsT0FBM0IsRUFBMkRkLFNBQTNELENBRkksQ0FBUjtBQUdIO0FBUkw7O0FBQUE7QUFBQSxFQUErQkksNENBQUssQ0FBQ2MsU0FBckMsRSIsImZpbGUiOiI0ZDA2NGI1ODZlNTA3MjExMzI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHQU1FU19MSVNUIH0gZnJvbSAnLi4vZ2FtZXMnO1xuaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tICcuLi9BcHAvR2FtZS9HYW1lQ2FyZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmV4cG9ydCBjbGFzcyBHYW1lc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gR0FNRVNcbiAgICAgICAgY29uc3QgZ2FtZXNMaXN0ID0gR0FNRVNfTElTVC5tYXAoZ2FtZSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiAnL2cvJyArIGdhbWUuY29kZSwga2V5OiBnYW1lLmNvZGUsIHN0eWxlOiB7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lQ2FyZCwgeyBnYW1lOiBnYW1lLCBpc0xpbms6IHRydWUgfSkpKSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzhweCAwJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNlwiLCBzdHlsZTogeyBtYXJnaW5Cb3R0b206ICcxNnB4JyB9IH0sIFwiR2FtZXNcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCA0cHgnIH0gfSwgZ2FtZXNMaXN0KSkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=