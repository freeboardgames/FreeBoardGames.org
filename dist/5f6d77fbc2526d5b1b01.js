(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[22],{

/***/ "./src/About/About.tsx":
/*!*****************************!*\
  !*** ./src/About/About.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ttag */ "./node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["about.credits"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["about.contributors"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["about.p"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["about.header"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_1__["default"], null, this._getAboutCard(), this._getContributorsCard(), this._getCreditsCard());
    }
  }, {
    key: "_getAboutCard",
    value: function _getAboutCard() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: '16px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h5",
        component: "h2"
      }, Object(ttag__WEBPACK_IMPORTED_MODULE_9__["t"])(_templateObject())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        component: "p"
      }, Object(ttag__WEBPACK_IMPORTED_MODULE_9__["t"])(_templateObject2()))));
    }
  }, {
    key: "_getContributorsCard",
    value: function _getContributorsCard() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: '16px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h5",
        component: "h2"
      }, Object(ttag__WEBPACK_IMPORTED_MODULE_9__["t"])(_templateObject3())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "flamecoals"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://github.com/flamecoals"
      }, "GitHub")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "JasonHarrison"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://www.jasonharrison.us/?from=freeboardgame.org"
      }, "Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://github.com/jasonharrison"
      }, "GitHub")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "JosefKuchar"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "http://josefkuchar.com"
      }, "Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://github.com/JosefKuchar"
      }, "GitHub")))));
    }
  }, {
    key: "_getCreditsCard",
    value: function _getCreditsCard() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: '16px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h5",
        component: "h2"
      }, Object(ttag__WEBPACK_IMPORTED_MODULE_9__["t"])(_templateObject4())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Chess move sound by SpliceSound"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://freesound.org/people/SpliceSound/sounds/218333/"
      }, "freesound.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Seabattle hit sound by fridobeck"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://freesound.org/people/fridobeck/sounds/191694/"
      }, "freesound.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Seabattle hit sound by qubodup"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://freesound.org/people/qubodup/sounds/182429/"
      }, "freesound.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Seabattle miss sound by InspectorJ"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://freesound.org/people/InspectorJ/sounds/352103/"
      }, "freesound.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Seabattle miss sound by CGEffex"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://freesound.org/people/CGEffex/sounds/98335/"
      }, "freesound.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "Blox font (used in logo) by Brian Kent"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small",
        color: "primary",
        href: "https://www.dafont.com/blox.font"
      }, "dafont.com")))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWJvdXQvQWJvdXQudHN4Il0sIm5hbWVzIjpbIkFib3V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJlZUJvYXJkR2FtZUJhciIsIl9nZXRBYm91dENhcmQiLCJfZ2V0Q29udHJpYnV0b3JzQ2FyZCIsIl9nZXRDcmVkaXRzQ2FyZCIsIkNhcmQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIkNhcmRDb250ZW50IiwiVHlwb2dyYXBoeSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJ0IiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwicHJpbWFyeSIsIkJ1dHRvbiIsInNpemUiLCJjb2xvciIsImhyZWYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxhQUFRQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CQyw2REFBcEIsRUFBc0MsSUFBdEMsRUFDSixLQUFLQyxhQUFMLEVBREksRUFFSixLQUFLQyxvQkFBTCxFQUZJLEVBR0osS0FBS0MsZUFBTCxFQUhJLENBQVI7QUFJSDs7O29DQUNlO0FBQ1osYUFBUUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkssOERBQXBCLEVBQTBCO0FBQUVDLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWI7QUFBVCxPQUExQixFQUNKUiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CUSxxRUFBcEIsRUFBaUMsSUFBakMsRUFDSVQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlMsb0VBQXBCLEVBQWdDO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxpQkFBUyxFQUFFO0FBQTVCLE9BQWhDLEVBQW9FQyw4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QyxhQUFOLENBQW9CZSxzRUFBcEIsRUFBa0M7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBbEMsQ0FESixFQUVJakIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmlCLGdFQUFwQixFQUE0QjtBQUFFQyxZQUFJLEVBQUUsT0FBUjtBQUFpQkMsYUFBSyxFQUFFLFNBQXhCO0FBQW1DQyxZQUFJLEVBQUU7QUFBekMsT0FBNUIsRUFBaUksZUFBakksQ0FGSixDQVZKLEVBYUlyQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CYyxrRUFBcEIsRUFBOEIsSUFBOUIsRUFDSWYsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmUsc0VBQXBCLEVBQWtDO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQWxDLENBREosRUFFSWpCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JpQixnRUFBcEIsRUFBNEI7QUFBRUMsWUFBSSxFQUFFLE9BQVI7QUFBaUJDLGFBQUssRUFBRSxTQUF4QjtBQUFtQ0MsWUFBSSxFQUFFO0FBQXpDLE9BQTVCLEVBQTZILGVBQTdILENBRkosQ0FiSixFQWdCSXJCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JjLGtFQUFwQixFQUE4QixJQUE5QixFQUNJZiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZSxzRUFBcEIsRUFBa0M7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBbEMsQ0FESixFQUVJakIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmlCLGdFQUFwQixFQUE0QjtBQUFFQyxZQUFJLEVBQUUsT0FBUjtBQUFpQkMsYUFBSyxFQUFFLFNBQXhCO0FBQW1DQyxZQUFJLEVBQUU7QUFBekMsT0FBNUIsRUFBMkcsWUFBM0csQ0FGSixDQWhCSixDQUZKLENBREksQ0FBUjtBQXNCSDs7OztFQXJEZXJCLDRDQUFLLENBQUNzQixTOztBQXVEWHZCLG9FQUFmLEUiLCJmaWxlIjoiNWY2ZDc3ZmJjMjUyNmQ1YjFiMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZyZWVCb2FyZEdhbWVCYXIgZnJvbSAnLi4vQXBwL0ZyZWVCb2FyZEdhbWVCYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyB0IH0gZnJvbSAndHRhZyc7XG5jbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJlZUJvYXJkR2FtZUJhciwgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuX2dldEFib3V0Q2FyZCgpLFxuICAgICAgICAgICAgdGhpcy5fZ2V0Q29udHJpYnV0b3JzQ2FyZCgpLFxuICAgICAgICAgICAgdGhpcy5fZ2V0Q3JlZGl0c0NhcmQoKSkpO1xuICAgIH1cbiAgICBfZ2V0QWJvdXRDYXJkKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBzdHlsZTogeyBtYXJnaW5Ub3A6ICcxNnB4JyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIsIGNvbXBvbmVudDogXCJoMlwiIH0sIHQgYGFib3V0LmhlYWRlcmApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyBjb21wb25lbnQ6IFwicFwiIH0sIHQgYGFib3V0LnBgKSkpKTtcbiAgICB9XG4gICAgX2dldENvbnRyaWJ1dG9yc0NhcmQoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogJzE2cHgnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDVcIiwgY29tcG9uZW50OiBcImgyXCIgfSwgdCBgYWJvdXQuY29udHJpYnV0b3JzYCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogXCJmbGFtZWNvYWxzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vZmxhbWVjb2Fsc1wiIH0sIFwiR2l0SHViXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IFwiSmFzb25IYXJyaXNvblwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJzbWFsbFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGhyZWY6IFwiaHR0cHM6Ly93d3cuamFzb25oYXJyaXNvbi51cy8/ZnJvbT1mcmVlYm9hcmRnYW1lLm9yZ1wiIH0sIFwiV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwic21hbGxcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbmhhcnJpc29uXCIgfSwgXCJHaXRIdWJcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogXCJKb3NlZkt1Y2hhclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJzbWFsbFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGhyZWY6IFwiaHR0cDovL2pvc2Vma3VjaGFyLmNvbVwiIH0sIFwiV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwic21hbGxcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NlZkt1Y2hhclwiIH0sIFwiR2l0SHViXCIpKSkpKSk7XG4gICAgfVxuICAgIF9nZXRDcmVkaXRzQ2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAnMTZweCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiLCBjb21wb25lbnQ6IFwiaDJcIiB9LCB0IGBhYm91dC5jcmVkaXRzYCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogXCJDaGVzcyBtb3ZlIHNvdW5kIGJ5IFNwbGljZVNvdW5kXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL1NwbGljZVNvdW5kL3NvdW5kcy8yMTgzMzMvXCIgfSwgXCJmcmVlc291bmQub3JnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IFwiU2VhYmF0dGxlIGhpdCBzb3VuZCBieSBmcmlkb2JlY2tcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwic21hbGxcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBocmVmOiBcImh0dHBzOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvZnJpZG9iZWNrL3NvdW5kcy8xOTE2OTQvXCIgfSwgXCJmcmVlc291bmQub3JnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IFwiU2VhYmF0dGxlIGhpdCBzb3VuZCBieSBxdWJvZHVwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3F1Ym9kdXAvc291bmRzLzE4MjQyOS9cIiB9LCBcImZyZWVzb3VuZC5vcmdcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogXCJTZWFiYXR0bGUgbWlzcyBzb3VuZCBieSBJbnNwZWN0b3JKXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL0luc3BlY3Rvckovc291bmRzLzM1MjEwMy9cIiB9LCBcImZyZWVzb3VuZC5vcmdcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbVRleHQsIHsgcHJpbWFyeTogXCJTZWFiYXR0bGUgbWlzcyBzb3VuZCBieSBDR0VmZmV4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL0NHRWZmZXgvc291bmRzLzk4MzM1L1wiIH0sIFwiZnJlZXNvdW5kLm9yZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiBcIkJsb3ggZm9udCAodXNlZCBpbiBsb2dvKSBieSBCcmlhbiBLZW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBzaXplOiBcInNtYWxsXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgaHJlZjogXCJodHRwczovL3d3dy5kYWZvbnQuY29tL2Jsb3guZm9udFwiIH0sIFwiZGFmb250LmNvbVwiKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==