(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[19],{

/***/ "./src/Home/Header.tsx":
/*!*****************************!*\
  !*** ./src/Home/Header.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/QuestionAnswer */ "./node_modules/@material-ui/icons/QuestionAnswer.js");
/* harmony import */ var _material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Subject */ "./node_modules/@material-ui/icons/Subject.js");
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0 8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h6",
        gutterBottom: true,
        align: "center",
        style: {
          marginTop: '16px'
        }
      }, "Free as in freedom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "body2",
        gutterBottom: true,
        style: {
          marginTop: '16px'
        }
      }, "We at FreeBoardGame.org want to bring free games for everybody. Free as in \"free beer\" ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "and"), " as in \"freedom\". Not only do you get to enjoy free high quality games everywhere, but you also can study how they are made, change them, and contribute back to the community!"), this._links());
    }
  }, {
    key: "_links",
    value: function _links() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: 'center',
          marginTop: '4px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "https://github.com/freeboardgame/FreeBoardGame.org",
        target: "_blank",
        variant: "outlined",
        style: {
          margin: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: {
          marginRight: '4px'
        }
      }), "Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/blog",
        target: "_blank",
        variant: "outlined",
        style: {
          margin: '4px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          marginRight: '4px'
        }
      }), "Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "https://discord.gg/AaE6n3n",
        target: "_blank",
        variant: "outlined",
        style: {
          margin: '4px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginRight: '4px'
        }
      }), "Chat"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Home/Home.tsx":
/*!***************************!*\
  !*** ./src/Home/Home.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Home/Header.tsx");
/* harmony import */ var _App_GamesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/GamesList */ "./src/App/GamesList.tsx");
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







var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_GamesList__WEBPACK_IMPORTED_MODULE_3__["GamesList"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '12px',
          textAlign: 'center'
        }
      }, "Made with \u2665\xA0-\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/about"
      }, "About")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSG9tZS9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Ib21lL0hvbWUudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZyIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwiYWxpZ24iLCJtYXJnaW5Ub3AiLCJfbGlua3MiLCJ0ZXh0QWxpZ24iLCJCdXR0b24iLCJocmVmIiwidGFyZ2V0IiwibWFyZ2luIiwiQ29kZUljb24iLCJtYXJnaW5SaWdodCIsIlN1YmplY3RJY29uIiwiUXVlc3Rpb25BbnN3ZXJJY29uIiwiQ29tcG9uZW50IiwiSG9tZSIsIkZyZWVCb2FyZEdhbWVCYXIiLCJHYW1lc0xpc3QiLCJmb250U2l6ZSIsIkxpbmsiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxNOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFBUUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYO0FBQVQsT0FBM0IsRUFDSkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkcsb0VBQXBCLEVBQWdDO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxvQkFBWSxFQUFFLElBQS9CO0FBQXFDQyxhQUFLLEVBQUUsUUFBNUM7QUFBc0RMLGFBQUssRUFBRTtBQUFFTSxtQkFBUyxFQUFFO0FBQWI7QUFBN0QsT0FBaEMsRUFBc0gsb0JBQXRILENBREksRUFFSlIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkcsb0VBQXBCLEVBQWdDO0FBQUVDLGVBQU8sRUFBRSxPQUFYO0FBQW9CQyxvQkFBWSxFQUFFLElBQWxDO0FBQXdDSixhQUFLLEVBQUU7QUFBRU0sbUJBQVMsRUFBRTtBQUFiO0FBQS9DLE9BQWhDLEVBQ0ksMkZBREosRUFFSVIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQixLQUEvQixDQUZKLEVBR0ksbUxBSEosQ0FGSSxFQU1KLEtBQUtRLE1BQUwsRUFOSSxDQUFSO0FBT0g7Ozs2QkFDUTtBQUNMLGFBQVFULDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUMsYUFBSyxFQUFFO0FBQUVRLG1CQUFTLEVBQUUsUUFBYjtBQUF1QkYsbUJBQVMsRUFBRTtBQUFsQztBQUFULE9BQTNCLEVBQ0pSLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JVLGdFQUFwQixFQUE0QjtBQUFFQyxZQUFJLEVBQUUsb0RBQVI7QUFBOERDLGNBQU0sRUFBRSxRQUF0RTtBQUFnRlIsZUFBTyxFQUFFLFVBQXpGO0FBQXFHSCxhQUFLLEVBQUU7QUFBRVksZ0JBQU0sRUFBRTtBQUFWO0FBQTVHLE9BQTVCLEVBQ0lkLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JjLDhEQUFwQixFQUE4QjtBQUFFYixhQUFLLEVBQUU7QUFBRWMscUJBQVcsRUFBRTtBQUFmO0FBQVQsT0FBOUIsQ0FESixFQUVJLE1BRkosQ0FESSxFQUlKaEIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlUsZ0VBQXBCLEVBQTRCO0FBQUVDLFlBQUksRUFBRSxPQUFSO0FBQWlCQyxjQUFNLEVBQUUsUUFBekI7QUFBbUNSLGVBQU8sRUFBRSxVQUE1QztBQUF3REgsYUFBSyxFQUFFO0FBQUVZLGdCQUFNLEVBQUU7QUFBVjtBQUEvRCxPQUE1QixFQUNJZCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ0IsaUVBQXBCLEVBQWlDO0FBQUVmLGFBQUssRUFBRTtBQUFFYyxxQkFBVyxFQUFFO0FBQWY7QUFBVCxPQUFqQyxDQURKLEVBRUksTUFGSixDQUpJLEVBT0poQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CVSxnRUFBcEIsRUFBNEI7QUFBRUMsWUFBSSxFQUFFLDRCQUFSO0FBQXNDQyxjQUFNLEVBQUUsUUFBOUM7QUFBd0RSLGVBQU8sRUFBRSxVQUFqRTtBQUE2RUgsYUFBSyxFQUFFO0FBQUVZLGdCQUFNLEVBQUU7QUFBVjtBQUFwRixPQUE1QixFQUNJZCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CaUIsd0VBQXBCLEVBQXdDO0FBQUVoQixhQUFLLEVBQUU7QUFBRWMscUJBQVcsRUFBRTtBQUFmO0FBQVQsT0FBeEMsQ0FESixFQUVJLE1BRkosQ0FQSSxDQUFSO0FBVUg7Ozs7RUFyQmdCaEIsNENBQUssQ0FBQ21CLFM7O0FBdUJacEIscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNcUIsSTs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQVFwQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0IsNkRBQXBCLEVBQXNDLElBQXRDLEVBQ0pyQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRiwrQ0FBcEIsRUFBNEIsSUFBNUIsQ0FESSxFQUVKQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcUIsd0RBQXBCLEVBQStCLElBQS9CLENBRkksRUFHSnRCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUI7QUFBRUMsYUFBSyxFQUFFO0FBQUVxQixrQkFBUSxFQUFFLE1BQVo7QUFBb0JiLG1CQUFTLEVBQUU7QUFBL0I7QUFBVCxPQUF6QixFQUNJLDJCQURKLEVBRUlWLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J1QixxREFBcEIsRUFBMEI7QUFBRUMsVUFBRSxFQUFFO0FBQU4sT0FBMUIsRUFBNEMsT0FBNUMsQ0FGSixDQUhJLENBQVI7QUFNSDs7OztFQVJjekIsNENBQUssQ0FBQ21CLFM7O0FBVVZDLG1FQUFmLEUiLCJmaWxlIjoiMzAwNjlmN2JkYzc1NWRmNjQ2NTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENvZGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db2RlJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1F1ZXN0aW9uQW5zd2VyJztcbmltcG9ydCBTdWJqZWN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3ViamVjdCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAnMCA4cHgnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg2XCIsIGd1dHRlckJvdHRvbTogdHJ1ZSwgYWxpZ246IFwiY2VudGVyXCIsIHN0eWxlOiB7IG1hcmdpblRvcDogJzE2cHgnIH0gfSwgXCJGcmVlIGFzIGluIGZyZWVkb21cIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MlwiLCBndXR0ZXJCb3R0b206IHRydWUsIHN0eWxlOiB7IG1hcmdpblRvcDogJzE2cHgnIH0gfSxcbiAgICAgICAgICAgICAgICBcIldlIGF0IEZyZWVCb2FyZEdhbWUub3JnIHdhbnQgdG8gYnJpbmcgZnJlZSBnYW1lcyBmb3IgZXZlcnlib2R5LiBGcmVlIGFzIGluIFxcXCJmcmVlIGJlZXJcXFwiIFwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIFwiYW5kXCIpLFxuICAgICAgICAgICAgICAgIFwiIGFzIGluIFxcXCJmcmVlZG9tXFxcIi4gTm90IG9ubHkgZG8geW91IGdldCB0byBlbmpveSBmcmVlIGhpZ2ggcXVhbGl0eSBnYW1lcyBldmVyeXdoZXJlLCBidXQgeW91IGFsc28gY2FuIHN0dWR5IGhvdyB0aGV5IGFyZSBtYWRlLCBjaGFuZ2UgdGhlbSwgYW5kIGNvbnRyaWJ1dGUgYmFjayB0byB0aGUgY29tbXVuaXR5IVwiKSxcbiAgICAgICAgICAgIHRoaXMuX2xpbmtzKCkpKTtcbiAgICB9XG4gICAgX2xpbmtzKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc0cHgnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZyZWVib2FyZGdhbWUvRnJlZUJvYXJkR2FtZS5vcmdcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIHN0eWxlOiB7IG1hcmdpbjogJzhweCcgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29kZUljb24sIHsgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6ICc0cHgnIH0gfSksXG4gICAgICAgICAgICAgICAgXCJDb2RlXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgaHJlZjogXCIvYmxvZ1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgc3R5bGU6IHsgbWFyZ2luOiAnNHB4JyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJqZWN0SWNvbiwgeyBzdHlsZTogeyBtYXJnaW5SaWdodDogJzRweCcgfSB9KSxcbiAgICAgICAgICAgICAgICBcIkJsb2dcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBocmVmOiBcImh0dHBzOi8vZGlzY29yZC5nZy9BYUU2bjNuXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBzdHlsZTogeyBtYXJnaW46ICc0cHgnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uQW5zd2VySWNvbiwgeyBzdHlsZTogeyBtYXJnaW5SaWdodDogJzRweCcgfSB9KSxcbiAgICAgICAgICAgICAgICBcIkNoYXRcIikpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZyZWVCb2FyZEdhbWVCYXIgZnJvbSAnLi4vQXBwL0ZyZWVCb2FyZEdhbWVCYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBHYW1lc0xpc3QgfSBmcm9tICcuLi9BcHAvR2FtZXNMaXN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZyZWVCb2FyZEdhbWVCYXIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVzTGlzdCwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAnMTJweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgIFwiTWFkZSB3aXRoIFxcdTI2NjVcXHUwMEEwLVxcdTAwQTBcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL2Fib3V0XCIgfSwgXCJBYm91dFwiKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==