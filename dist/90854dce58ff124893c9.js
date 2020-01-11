(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/common/ScoreBadges.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/common/ScoreBadges.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sAiivASp6xi_5IYwSOaPa {\n  margin-left: 4px;\n  border-radius: 5px;\n  padding: 4px;\n  float: left;\n  border: 2px solid;\n}\n\n.sAiivASp6xi_5IYwSOaPa ._--8DzeSuwNbSjnt3jYah2 {\n  padding-right: 8px;\n}\n\n.sAiivASp6xi_5IYwSOaPa p {\n  display: inline;\n}\n\n.bv9XYbQ29_Obkjnbkdnz6 {\n  font-weight: bold;\n}\n", ""]);
// Exports
exports.locals = {
	"ScoreBadge": "sAiivASp6xi_5IYwSOaPa",
	"Nickname": "_--8DzeSuwNbSjnt3jYah2",
	"Self": "bv9XYbQ29_Obkjnbkdnz6"
};

/***/ }),

/***/ "./src/common/ScoreBadges.css":
/*!************************************!*\
  !*** ./src/common/ScoreBadges.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!./ScoreBadges.css */ "./node_modules/css-loader/dist/cjs.js?!./src/common/ScoreBadges.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!./ScoreBadges.css */ "./node_modules/css-loader/dist/cjs.js?!./src/common/ScoreBadges.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!./ScoreBadges.css */ "./node_modules/css-loader/dist/cjs.js?!./src/common/ScoreBadges.css");

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

/***/ "./src/common/ScoreBadges.tsx":
/*!************************************!*\
  !*** ./src/common/ScoreBadges.tsx ***!
  \************************************/
/*! exports provided: ScoreBadges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBadges", function() { return ScoreBadges; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreBadges.css */ "./src/common/ScoreBadges.css");
/* harmony import */ var _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1__);
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




var ScoreBadges =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScoreBadges, _React$Component);

  function ScoreBadges() {
    _classCallCheck(this, ScoreBadges);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScoreBadges).apply(this, arguments));
  }

  _createClass(ScoreBadges, [{
    key: "render",
    value: function render() {
      var _this = this;

      var badges = this.props.scoreboard.map(function (score) {
        var nickname = _this.props.players.find(function (player) {
          return player.playerID.toString() === score.playerID;
        }).name;

        var isSelf = score.playerID.toString() === _this.props.playerID;

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1___default.a.ScoreBadge,
          key: score.playerID,
          style: {
            borderColor: _this.props.colors ? _this.props.colors[score.playerID] : 'white'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1___default.a.Nickname
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            color: 'white'
          },
          className: isSelf ? _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1___default.a.Self : undefined,
          variant: "body2"
        }, nickname)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            color: 'white'
          },
          className: isSelf ? _ScoreBadges_css__WEBPACK_IMPORTED_MODULE_1___default.a.Self : undefined,
          variant: "body2"
        }, score.score)));
      });
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          clear: 'left',
          paddingTop: '8px'
        }
      }, badges);
    }
  }]);

  return ScoreBadges;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Njb3JlQmFkZ2VzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Njb3JlQmFkZ2VzLmNzcz84MjdmIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vU2NvcmVCYWRnZXMudHN4Il0sIm5hbWVzIjpbIlNjb3JlQmFkZ2VzIiwiYmFkZ2VzIiwicHJvcHMiLCJzY29yZWJvYXJkIiwibWFwIiwic2NvcmUiLCJuaWNrbmFtZSIsInBsYXllcnMiLCJmaW5kIiwicGxheWVyIiwicGxheWVySUQiLCJ0b1N0cmluZyIsIm5hbWUiLCJpc1NlbGYiLCJSZWFjdCIsImNsYXNzTmFtZSIsImNzcyIsIlNjb3JlQmFkZ2UiLCJrZXkiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiY29sb3JzIiwiTmlja25hbWUiLCJUeXBvZ3JhcGh5IiwiY29sb3IiLCJTZWxmIiwidW5kZWZpbmVkIiwidmFyaWFudCIsImNsZWFyIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLDJCQUEyQixxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcsb0RBQW9ELHVCQUF1QixHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUc7QUFDaFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1BBLGNBQWMsbUJBQU8sQ0FBQyxtSkFBeUU7O0FBRS9GLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixtSkFBeUU7QUFDNUYsbUJBQW1CLG1CQUFPLENBQUMsbUpBQXlFOztBQUVwRyxvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ2E7QUFBQTs7QUFDTCxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxHQUF0QixDQUEwQixVQUFBQyxLQUFLLEVBQUk7QUFDOUMsWUFBTUMsUUFBUSxHQUFHLEtBQUksQ0FBQ0osS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixVQUFBQyxNQUFNO0FBQUEsaUJBQUlBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsT0FBK0JOLEtBQUssQ0FBQ0ssUUFBekM7QUFBQSxTQUE5QixFQUFpRkUsSUFBbEc7O0FBQ0EsWUFBTUMsTUFBTSxHQUFHUixLQUFLLENBQUNLLFFBQU4sQ0FBZUMsUUFBZixPQUE4QixLQUFJLENBQUNULEtBQUwsQ0FBV1EsUUFBeEQ7O0FBQ0EsZUFBUUksbURBQUEsQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUMsbUJBQVMsRUFBRUMsdURBQUcsQ0FBQ0MsVUFBakI7QUFBNkJDLGFBQUcsRUFBRWIsS0FBSyxDQUFDSyxRQUF4QztBQUFrRFMsZUFBSyxFQUFFO0FBQUVDLHVCQUFXLEVBQUUsS0FBSSxDQUFDbEIsS0FBTCxDQUFXbUIsTUFBWCxHQUFvQixLQUFJLENBQUNuQixLQUFMLENBQVdtQixNQUFYLENBQWtCaEIsS0FBSyxDQUFDSyxRQUF4QixDQUFwQixHQUF3RDtBQUF2RTtBQUF6RCxTQUEzQixFQUNKSSxtREFBQSxDQUFvQixNQUFwQixFQUE0QjtBQUFFQyxtQkFBUyxFQUFFQyx1REFBRyxDQUFDTTtBQUFqQixTQUE1QixFQUNJUixtREFBQSxDQUFvQlMsb0VBQXBCLEVBQWdDO0FBQUVKLGVBQUssRUFBRTtBQUFFSyxpQkFBSyxFQUFFO0FBQVQsV0FBVDtBQUE2QlQsbUJBQVMsRUFBRUYsTUFBTSxHQUFHRyx1REFBRyxDQUFDUyxJQUFQLEdBQWNDLFNBQTVEO0FBQXVFQyxpQkFBTyxFQUFFO0FBQWhGLFNBQWhDLEVBQTJIckIsUUFBM0gsQ0FESixDQURJLEVBR0pRLG1EQUFBLENBQW9CLE1BQXBCLEVBQTRCLElBQTVCLEVBQ0lBLG1EQUFBLENBQW9CUyxvRUFBcEIsRUFBZ0M7QUFBRUosZUFBSyxFQUFFO0FBQUVLLGlCQUFLLEVBQUU7QUFBVCxXQUFUO0FBQTZCVCxtQkFBUyxFQUFFRixNQUFNLEdBQUdHLHVEQUFHLENBQUNTLElBQVAsR0FBY0MsU0FBNUQ7QUFBdUVDLGlCQUFPLEVBQUU7QUFBaEYsU0FBaEMsRUFBMkh0QixLQUFLLENBQUNBLEtBQWpJLENBREosQ0FISSxDQUFSO0FBS0gsT0FSYyxDQUFmO0FBU0EsYUFBT1MsbURBQUEsQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUssYUFBSyxFQUFFO0FBQUVTLGVBQUssRUFBRSxNQUFUO0FBQWlCQyxvQkFBVSxFQUFFO0FBQTdCO0FBQVQsT0FBM0IsRUFBNEU1QixNQUE1RSxDQUFQO0FBQ0g7QUFaTDs7QUFBQTtBQUFBLEVBQWlDYSwrQ0FBakMsRSIsImZpbGUiOiI5MDg1NGRjZTU4ZmYxMjQ4OTNjOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNBaWl2QVNwNnhpXzVJWXdTT2FQYSB7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG59XFxuXFxuLnNBaWl2QVNwNnhpXzVJWXdTT2FQYSAuXy0tOER6ZVN1d05iU2pudDNqWWFoMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5zQWlpdkFTcDZ4aV81SVl3U09hUGEgcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5idjlYWWJRMjlfT2Jram5ia2RuejYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJTY29yZUJhZGdlXCI6IFwic0FpaXZBU3A2eGlfNUlZd1NPYVBhXCIsXG5cdFwiTmlja25hbWVcIjogXCJfLS04RHplU3V3TmJTam50M2pZYWgyXCIsXG5cdFwiU2VsZlwiOiBcImJ2OVhZYlEyOV9PYmtqbmJrZG56NlwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9TY29yZUJhZGdlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL1Njb3JlQmFkZ2VzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL1Njb3JlQmFkZ2VzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnLi9TY29yZUJhZGdlcy5jc3MnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5leHBvcnQgY2xhc3MgU2NvcmVCYWRnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYmFkZ2VzID0gdGhpcy5wcm9wcy5zY29yZWJvYXJkLm1hcChzY29yZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuaWNrbmFtZSA9IHRoaXMucHJvcHMucGxheWVycy5maW5kKHBsYXllciA9PiBwbGF5ZXIucGxheWVySUQudG9TdHJpbmcoKSA9PT0gc2NvcmUucGxheWVySUQpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGYgPSBzY29yZS5wbGF5ZXJJRC50b1N0cmluZygpID09PSB0aGlzLnByb3BzLnBsYXllcklEO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjc3MuU2NvcmVCYWRnZSwga2V5OiBzY29yZS5wbGF5ZXJJRCwgc3R5bGU6IHsgYm9yZGVyQ29sb3I6IHRoaXMucHJvcHMuY29sb3JzID8gdGhpcy5wcm9wcy5jb2xvcnNbc2NvcmUucGxheWVySURdIDogJ3doaXRlJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNzcy5OaWNrbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSwgY2xhc3NOYW1lOiBpc1NlbGYgPyBjc3MuU2VsZiA6IHVuZGVmaW5lZCwgdmFyaWFudDogXCJib2R5MlwiIH0sIG5pY2tuYW1lKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHN0eWxlOiB7IGNvbG9yOiAnd2hpdGUnIH0sIGNsYXNzTmFtZTogaXNTZWxmID8gY3NzLlNlbGYgOiB1bmRlZmluZWQsIHZhcmlhbnQ6IFwiYm9keTJcIiB9LCBzY29yZS5zY29yZSkpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGNsZWFyOiAnbGVmdCcsIHBhZGRpbmdUb3A6ICc4cHgnIH0gfSwgYmFkZ2VzKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9