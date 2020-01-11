(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[3],{

/***/ "./src/common/Scoreboard.tsx":
/*!***********************************!*\
  !*** ./src/common/Scoreboard.tsx ***!
  \***********************************/
/*! exports provided: Scoreboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scoreboard", function() { return Scoreboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Scoreboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scoreboard, _React$Component);

  function Scoreboard() {
    _classCallCheck(this, Scoreboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scoreboard).apply(this, arguments));
  }

  _createClass(Scoreboard, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "scoreboard"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Rank"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Player"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, this.props.scoreName || 'Score'))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, this.props.scoreboard.map(function (score, i) {
        var style = {};

        if (score.playerID.toString() === _this.props.playerID) {
          style = {
            background: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_6___default.a[200]
          };
        }

        var name = _this.props.players.find(function (player) {
          return player.playerID.toString() === score.playerID;
        }).name;

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: score.playerID,
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, "#", i + 1), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, name), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], null, score.score));
      }))));
    }
  }]);

  return Scoreboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Njb3JlYm9hcmQudHN4Il0sIm5hbWVzIjpbIlNjb3JlYm9hcmQiLCJSZWFjdCIsImNsYXNzTmFtZSIsIlRhYmxlIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJwcm9wcyIsInNjb3JlTmFtZSIsIlRhYmxlQm9keSIsInNjb3JlYm9hcmQiLCJtYXAiLCJzY29yZSIsImkiLCJzdHlsZSIsInBsYXllcklEIiwidG9TdHJpbmciLCJiYWNrZ3JvdW5kIiwiZ3JleSIsIm5hbWUiLCJwbGF5ZXJzIiwiZmluZCIsInBsYXllciIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ2E7QUFBQTs7QUFDTCxhQUFRQyxtREFBQSxDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBM0IsRUFDSkQsbURBQUEsQ0FBb0JFLCtEQUFwQixFQUEyQixJQUEzQixFQUNJRixtREFBQSxDQUFvQkcsbUVBQXBCLEVBQStCLElBQS9CLEVBQ0lILG1EQUFBLENBQW9CSSxrRUFBcEIsRUFBOEIsSUFBOUIsRUFDSUosbURBQUEsQ0FBb0JLLG1FQUFwQixFQUErQixJQUEvQixFQUFxQyxNQUFyQyxDQURKLEVBRUlMLG1EQUFBLENBQW9CSyxtRUFBcEIsRUFBK0IsSUFBL0IsRUFBcUMsUUFBckMsQ0FGSixFQUdJTCxtREFBQSxDQUFvQkssbUVBQXBCLEVBQStCLElBQS9CLEVBQXFDLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixPQUE3RCxDQUhKLENBREosQ0FESixFQU1JUCxtREFBQSxDQUFvQlEsbUVBQXBCLEVBQStCLElBQS9CLEVBQXFDLEtBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDekUsWUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsWUFBSUYsS0FBSyxDQUFDRyxRQUFOLENBQWVDLFFBQWYsT0FBOEIsS0FBSSxDQUFDVCxLQUFMLENBQVdRLFFBQTdDLEVBQXVEO0FBQ25ERCxlQUFLLEdBQUc7QUFDSkcsc0JBQVUsRUFBRUMsb0VBQUksQ0FBQyxHQUFEO0FBRFosV0FBUjtBQUdIOztBQUNELFlBQU1DLElBQUksR0FBRyxLQUFJLENBQUNaLEtBQUwsQ0FBV2EsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsTUFBTTtBQUFBLGlCQUFJQSxNQUFNLENBQUNQLFFBQVAsQ0FBZ0JDLFFBQWhCLE9BQStCSixLQUFLLENBQUNHLFFBQXpDO0FBQUEsU0FBOUIsRUFBaUZJLElBQTlGOztBQUNBLGVBQVFsQixtREFBQSxDQUFvQkksa0VBQXBCLEVBQThCO0FBQUVrQixhQUFHLEVBQUVYLEtBQUssQ0FBQ0csUUFBYjtBQUF1QkQsZUFBSyxFQUFFQTtBQUE5QixTQUE5QixFQUNKYixtREFBQSxDQUFvQkssbUVBQXBCLEVBQStCLElBQS9CLEVBQ0ksR0FESixFQUVJTyxDQUFDLEdBQUcsQ0FGUixDQURJLEVBSUpaLG1EQUFBLENBQW9CSyxtRUFBcEIsRUFBK0IsSUFBL0IsRUFBcUNhLElBQXJDLENBSkksRUFLSmxCLG1EQUFBLENBQW9CSyxtRUFBcEIsRUFBK0IsSUFBL0IsRUFBcUNNLEtBQUssQ0FBQ0EsS0FBM0MsQ0FMSSxDQUFSO0FBTUgsT0Fkb0MsQ0FBckMsQ0FOSixDQURJLENBQVI7QUFzQkg7QUF4Qkw7O0FBQUE7QUFBQSxFQUFnQ1gsK0NBQWhDLEUiLCJmaWxlIjoiZmU4NWI1ZjQ2NTQ5OTg3MzMxYWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBncmV5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmV5JztcbmV4cG9ydCBjbGFzcyBTY29yZWJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY29yZWJvYXJkXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUhlYWQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVSb3csIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlQ2VsbCwgbnVsbCwgXCJSYW5rXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIG51bGwsIFwiUGxheWVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIG51bGwsIHRoaXMucHJvcHMuc2NvcmVOYW1lIHx8ICdTY29yZScpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUJvZHksIG51bGwsIHRoaXMucHJvcHMuc2NvcmVib2FyZC5tYXAoKHNjb3JlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUucGxheWVySUQudG9TdHJpbmcoKSA9PT0gdGhpcy5wcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleVsyMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy5wbGF5ZXJzLmZpbmQocGxheWVyID0+IHBsYXllci5wbGF5ZXJJRC50b1N0cmluZygpID09PSBzY29yZS5wbGF5ZXJJRCkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlUm93LCB7IGtleTogc2NvcmUucGxheWVySUQsIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIG51bGwsIG5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIG51bGwsIHNjb3JlLnNjb3JlKSkpO1xuICAgICAgICAgICAgICAgIH0pKSkpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9