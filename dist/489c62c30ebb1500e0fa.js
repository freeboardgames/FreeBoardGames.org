(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["index"],{

/***/ "./i18n sync recursive ^\\.\\/.*\\.po\\.json$":
/*!**************************************!*\
  !*** ./i18n sync ^\.\/.*\.po\.json$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cs.po.json": "./i18n/cs.po.json",
	"./en.po.json": "./i18n/en.po.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./i18n sync recursive ^\\.\\/.*\\.po\\.json$";

/***/ }),

/***/ "./i18n/cs.po.json":
/*!*************************!*\
  !*** ./i18n/cs.po.json ***!
  \*************************/
/*! exports provided: charset, headers, translations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"charset\":\"utf-8\",\"headers\":{\"content-type\":\"text/plain; charset=utf-8\",\"plural-forms\":\"nplurals = 3; plural = (n == 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);\",\"language\":\"cs\",\"mime-version\":\"1.0\",\"content-transfer-encoding\":\"8bit\"},\"translations\":{\"\":{\"\":{\"msgid\":\"\",\"msgstr\":[\"Content-Type: text/plain; charset=utf-8\\nPlural-Forms: nplurals = 3; plural = (n == 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);\\nLanguage: cs\\nmime-version: 1.0\\nContent-Transfer-Encoding: 8bit\\n\"]},\"messagePage.goHome\":{\"msgid\":\"messagePage.goHome\",\"msgstr\":[\"Domů\"]},\"about.header\":{\"msgid\":\"about.header\",\"msgstr\":[\"Informace o FreeBoardGame.org\"]},\"about.p\":{\"msgid\":\"about.p\",\"msgstr\":[\"FreeBoardGame.org je bezplatná (svobodná) platforma pro deskové hry přizpůsobená pro mobilní telefony. Její cíl je popularizovat deskové hry a umožnit jejich snadné hraní s přáteli, dokonce i z daleka.\"]},\"about.contributors\":{\"msgid\":\"about.contributors\",\"msgstr\":[\"Přispěvatelé\"]},\"about.credits\":{\"msgid\":\"about.credits\",\"msgstr\":[\"Kredity\"]}}}}");

/***/ }),

/***/ "./i18n/en.po.json":
/*!*************************!*\
  !*** ./i18n/en.po.json ***!
  \*************************/
/*! exports provided: charset, headers, translations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"charset\":\"utf-8\",\"headers\":{\"content-type\":\"text/plain; charset=utf-8\",\"plural-forms\":\"nplurals = 2; plural = (n != 1);\",\"language\":\"en\",\"mime-version\":\"1.0\",\"content-transfer-encoding\":\"8bit\"},\"translations\":{\"\":{\"\":{\"msgid\":\"\",\"msgstr\":[\"Content-Type: text/plain; charset=utf-8\\nPlural-Forms: nplurals = 2; plural = (n != 1);\\nLanguage: en\\nmime-version: 1.0\\nContent-Transfer-Encoding: 8bit\\n\"]},\"about.header\":{\"msgid\":\"about.header\",\"msgstr\":[\"About FreeBoardGame.org\"]},\"about.contributors\":{\"msgid\":\"about.contributors\",\"msgstr\":[\"Contributors\"]},\"about.credits\":{\"msgid\":\"about.credits\",\"msgstr\":[\"Credits\"]},\"about.p\":{\"msgid\":\"about.p\",\"msgstr\":[\"FreeBoardGame.org is a free (as in freedom), mobile-first, board game platform. Its goal is to popularize board games and to make them easy to play with friends, even from afar.\"]},\"messagePage.goHome\":{\"msgid\":\"messagePage.goHome\",\"msgstr\":[\"Go Home\"]}}}}");

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/About/AboutAsync.tsx":
/*!**********************************!*\
  !*** ./src/About/AboutAsync.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Async */ "./src/App/Async.tsx");

var AboutAsync = Object(_App_Async__WEBPACK_IMPORTED_MODULE_0__["default"])('About', function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./About */ "./src/About/About.tsx"));
});
/* harmony default export */ __webpack_exports__["default"] = (AboutAsync);

/***/ }),

/***/ "./src/App/App.tsx":
/*!*************************!*\
  !*** ./src/App/App.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Game_GameInfoAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/GameInfoAsync */ "./src/App/Game/GameInfoAsync.tsx");
/* harmony import */ var _Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/GameAsync */ "./src/App/Game/GameAsync.tsx");
/* harmony import */ var _Lobby_NewRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lobby/NewRoom */ "./src/App/Lobby/NewRoom.tsx");
/* harmony import */ var _Lobby_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lobby/Room */ "./src/App/Lobby/Room.tsx");
/* harmony import */ var _Home_HomeAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Home/HomeAsync */ "./src/Home/HomeAsync.tsx");
/* harmony import */ var _About_AboutAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../About/AboutAsync */ "./src/About/AboutAsync.tsx");
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ "./src/metadata.ts");
/* harmony import */ var _Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Helpers/SSRHelper */ "./src/App/Helpers/SSRHelper.ts");
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollToTop */ "./src/App/ScrollToTop.tsx");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ttag */ "./node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















react_ga__WEBPACK_IMPORTED_MODULE_9__["default"].initialize('UA-105391878-1');
var SUPPORTED_LOCALES = ['en', 'cs'];

var withScrollToTop = function withScrollToTop(WrappedComponent) {
  var Wrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper() {
      _classCallCheck(this, Wrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).apply(this, arguments));
    }

    _createClass(Wrapper, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props)));
      }
    }]);

    return Wrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Wrapper;
};

var withGA = function withGA(WrappedComponent) {
  var Wrapper =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Wrapper, _React$Component2);

    function Wrapper() {
      _classCallCheck(this, Wrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).apply(this, arguments));
    }

    _createClass(Wrapper, [{
      key: "render",
      value: function render() {
        if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__["default"].isSSR()) {
          react_ga__WEBPACK_IMPORTED_MODULE_9__["default"].set({
            page: window.location.pathname
          });
          react_ga__WEBPACK_IMPORTED_MODULE_9__["default"].pageview(window.location.pathname);
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props));
      }
    }]);

    return Wrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Wrapper;
};

var withI18n = function withI18n(WrappedComponent) {
  var Wrapper =
  /*#__PURE__*/
  function (_React$Component3) {
    _inherits(Wrapper, _React$Component3);

    function Wrapper() {
      _classCallCheck(this, Wrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).apply(this, arguments));
    }

    _createClass(Wrapper, [{
      key: "render",
      value: function render() {
        var locale = this.props.match.params.locale;

        if (locale === 'en' || locale && !(locale in SUPPORTED_LOCALES)) {
          var ErrorPage = withWrappers(Object(_MessagePage__WEBPACK_IMPORTED_MODULE_8__["default"])('error', 'Invalid Locale')); // pass newProps instead of this.props to avoid an infinite-loop (because of this.props.match.params.locale)

          var newProps = Object.assign({}, this.props, {
            match: {
              params: {
                locale: ''
              }
            }
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, Object.assign({}, newProps));
        }

        locale = locale || 'en';

        var translationsObj = __webpack_require__("./i18n sync recursive ^\\.\\/.*\\.po\\.json$")("./".concat(locale, ".po.json"));

        Object(ttag__WEBPACK_IMPORTED_MODULE_13__["addLocale"])(locale, translationsObj);
        Object(ttag__WEBPACK_IMPORTED_MODULE_13__["useLocale"])(locale);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props));
      }
    }]);

    return Wrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Wrapper;
};

var withWrappers = function withWrappers(WrappedComponent) {
  return withScrollToTop(withI18n(withGA(WrappedComponent)));
};

var BASEPATH = '/:locale([A-Za-z]{2})?';

var Main =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Main, _React$Component4);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__["default"].isSSR()) {
        document.title = Object(_metadata__WEBPACK_IMPORTED_MODULE_10__["getPageMetadata"])(window.location.pathname).title;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: BASEPATH,
        component: withWrappers(_Home_HomeAsync__WEBPACK_IMPORTED_MODULE_6__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "".concat(BASEPATH, "/about"),
        component: withWrappers(_About_AboutAsync__WEBPACK_IMPORTED_MODULE_7__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "".concat(BASEPATH, "/g/:gameCode"),
        component: withWrappers(_Game_GameInfoAsync__WEBPACK_IMPORTED_MODULE_2__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "".concat(BASEPATH, "/g/:gameCode/:mode"),
        component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "".concat(BASEPATH, "/g/:gameCode/:mode/:aiLevel"),
        component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "".concat(BASEPATH, "/g/:gameCode/:mode/:matchCode/:playerID"),
        component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__["default"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "".concat(BASEPATH, "/room/new/:gameCode/:numPlayers"),
        exact: true,
        component: withWrappers(_Lobby_NewRoom__WEBPACK_IMPORTED_MODULE_4__["NewRoom"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "".concat(BASEPATH, "/room/:gameCode/:roomID"),
        exact: true,
        component: withWrappers(_Lobby_Room__WEBPACK_IMPORTED_MODULE_5__["Room"])
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        component: withWrappers(Object(_MessagePage__WEBPACK_IMPORTED_MODULE_8__["default"])('error', 'Not Found'))
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/App/Async.tsx":
/*!***************************!*\
  !*** ./src/App/Async.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var getAsync = function getAsync(name, resolve) {
  return react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
    loader: resolve,
    loading: function loading(props) {
      var Message;

      if (props.error) {
        Message = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('error', "Error Loading ".concat(name, " Page."));
      } else {
        Message = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('loading', "Loading ".concat(name, " Page..."));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Message, null);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getAsync);

/***/ }),

/***/ "./src/App/FreeBoardGameBar.tsx":
/*!**************************************!*\
  !*** ./src/App/FreeBoardGameBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/fbg_logo_white_48.png */ "./src/App/media/fbg_logo_white_48.png");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        document.body.style.backgroundColor = 'white';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/",
        style: {
          textDecoration: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        position: "sticky"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          marginRight: '8px',
          height: '48px'
        },
        src: _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "FbG"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h6",
        style: {
          color: 'white'
        }
      }, "FreeBoardGame.org")))), this.props.children);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App/Game/AlertLayer.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/AlertLayer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AlertLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlertLayer, _React$Component);

  function AlertLayer() {
    _classCallCheck(this, AlertLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AlertLayer).apply(this, arguments));
  }

  _createClass(AlertLayer, [{
    key: "render",
    value: function render() {
      var mainStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        background: 'rgba(255,255,255,.85)',
        right: 0,
        height: '100%',
        zIndex: 9001,
        display: 'block',
        textAlign: 'center'
      };
      var alignStyle = {
        transform: 'translateX(-50%) translateY(-50%)',
        left: '50%',
        top: '50%',
        position: 'absolute'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: mainStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: alignStyle
      }, this.props.children));
    }
  }]);

  return AlertLayer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlertLayer);

/***/ }),

/***/ "./src/App/Game/Enhancers/ReactGAEnhancer.ts":
/*!***************************************************!*\
  !*** ./src/App/Game/Enhancers/ReactGAEnhancer.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");


var ReactGAEnhancerEvent = function ReactGAEnhancerEvent(gameArgs) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type !== 'UPDATE') {
          react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
            category: 'ReactGAEnhancer',
            label: gameArgs.gameCode,
            action: action.type
          });
        }

        return next(action);
      };
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ReactGAEnhancerEvent);

/***/ }),

/***/ "./src/App/Game/Enhancers/index.ts":
/*!*****************************************!*\
  !*** ./src/App/Game/Enhancers/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactGAEnhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactGAEnhancer */ "./src/App/Game/Enhancers/ReactGAEnhancer.ts");

var defaultEnhancers = [_ReactGAEnhancer__WEBPACK_IMPORTED_MODULE_0__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (defaultEnhancers);

/***/ }),

/***/ "./src/App/Game/FacebookIcon.tsx":
/*!***************************************!*\
  !*** ./src/App/Game/FacebookIcon.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FacebookIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FacebookIcon, _React$Component);

  function FacebookIcon() {
    _classCallCheck(this, FacebookIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(FacebookIcon).apply(this, arguments));
  }

  _createClass(FacebookIcon, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
      }));
    }
  }]);

  return FacebookIcon;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FacebookIcon);

/***/ }),

/***/ "./src/App/Game/Game.tsx":
/*!*******************************!*\
  !*** ./src/App/Game/Game.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/react */ "./node_modules/@freeboardgame.org/boardgame.io/react.js");
/* harmony import */ var _freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../games */ "./src/games/index.ts");
/* harmony import */ var _GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameBoardWrapper */ "./src/App/Game/GameBoardWrapper.tsx");
/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MessagePageClass */ "./src/App/MessagePageClass.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Enhancers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Enhancers */ "./src/App/Game/Enhancers/index.ts");
/* harmony import */ var _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Helpers/AddressHelper */ "./src/App/Helpers/AddressHelper.ts");
/* harmony import */ var _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Lobby/LobbyService */ "./src/App/Lobby/LobbyService.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Game =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, props));
    _this.state = {
      loading: true
    };

    if (_this.props.room) {
      _this.mode = _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].OnlineFriend;
      _this.gameCode = _this.props.room.gameCode;
      _this.currentUser = _this.props.room.currentUser;
    } else {
      _this.mode = _this.props.match.params.mode;
      _this.loadAI = _this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].AI && typeof window !== 'undefined';
      _this.gameCode = _this.props.match.params.gameCode;
    }

    _this.gameDef = _games__WEBPACK_IMPORTED_MODULE_2__["GAMES_MAP"][_this.gameCode];
    return _this;
  }

  _createClass(Game, [{
    key: "clear",
    value: function clear() {
      this.setState({
        loading: true
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;

      if (this.gameDef) {
        var aiPromise = Promise.resolve({});

        if (this.loadAI) {
          aiPromise = this.gameDef.aiConfig();
        }

        return Promise.all([this.gameDef.config(), aiPromise]).then(function (promises) {
          _this2.setState(function () {
            return {
              config: promises[0].default,
              ai: _this2.loadAI ? promises[1].default : null,
              loading: false
            };
          });
        }, function () {
          _this2.setState({
            loading: false
          });
        });
      } else {
        this.setState({
          loading: false
        });
        return Promise.resolve();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.gameDef) {
        this.promise = this.load();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var aiLevel, matchCode, playerID, credentials;

      if (this.props.match) {
        aiLevel = this.props.match.params.aiLevel;
        matchCode = this.props.match.params.matchCode;
        playerID = this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].AI ? '0' : this.props.match.params.playerID;
      } else {
        credentials = _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_10__["LobbyService"].getCredential(this.props.room.roomID).credential;
        playerID = this.currentUser.playerID.toString();
        matchCode = this.props.room.roomID;
      }

      if (!this.gameDef) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: 'error',
          message: 'Game Not Found'
        });
      }

      var validGameModes = this.gameDef.modes.map(function (mode) {
        return mode.mode.toLowerCase();
      });

      if (!validGameModes.includes(this.mode.toLowerCase())) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: 'error',
          message: 'Invalid Game Mode'
        });
      }

      if (!this.state.loading && this.state.config) {
        var gameArgs = {
          gameCode: this.gameCode,
          mode: this.mode,
          credentials: credentials,
          matchCode: matchCode,
          players: this._getPlayers(),
          playerID: playerID
        };
        var clientConfig = {
          game: this.state.config.bgioGame,
          debug: this.state.config.debug || false,
          loading: Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__["default"])('loading', 'Connecting...'),
          board: Object(_GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__["gameBoardWrapper"])({
            board: this.state.config.bgioBoard,
            gameArgs: gameArgs
          }),
          credentials: credentials,
          gameID: matchCode
        };
        var allEnhancers = this.state.config.enhancers ? this.state.config.enhancers.concat(_Enhancers__WEBPACK_IMPORTED_MODULE_8__["default"]) : _Enhancers__WEBPACK_IMPORTED_MODULE_8__["default"];
        var enhancers = allEnhancers.map(function (enhancer) {
          return enhancer(gameArgs);
        });
        clientConfig.enhancer = redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"].apply(void 0, _toConsumableArray(enhancers));
        var ai = this.state.ai;

        if (this.loadAI && ai) {
          clientConfig.ai = ai.bgioAI(aiLevel);
        }

        if (this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].OnlineFriend) {
          clientConfig.multiplayer = {
            server: _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getServerAddress()
          };
        }

        var App = Object(_freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__["Client"])(clientConfig);

        if (this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].OnlineFriend) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
            gameID: matchCode,
            playerID: playerID,
            credentials: credentials
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
            gameID: matchCode,
            playerID: playerID
          });
        }
      } else if (this.state.loading) {
        var LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__["default"])('loading', "Downloading ".concat(this.gameDef.name, "..."));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);
      } else {
        var ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__["default"])('error', "Failed to download ".concat(this.gameDef.name, "."));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);
      }
    }
  }, {
    key: "_getPlayers",
    value: function _getPlayers() {
      switch (this.mode) {
        case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].OnlineFriend:
          return this.props.room.players;

        case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].AI:
          return [{
            playerID: 0,
            name: 'You',
            roomID: ''
          }, {
            playerID: 1,
            name: 'Computer',
            roomID: ''
          }];

        case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__["GameMode"].LocalFriend:
          return [{
            playerID: 0,
            name: 'Player 1',
            roomID: ''
          }, {
            playerID: 1,
            name: 'Player 2',
            roomID: ''
          }];
      }
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/App/Game/GameAsync.tsx":
/*!************************************!*\
  !*** ./src/App/Game/GameAsync.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Async */ "./src/App/Async.tsx");

var GameAsync = Object(_Async__WEBPACK_IMPORTED_MODULE_0__["default"])('Game', function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Game */ "./src/App/Game/Game.tsx"));
});
/* harmony default export */ __webpack_exports__["default"] = (GameAsync);

/***/ }),

/***/ "./src/App/Game/GameBoardWrapper.tsx":
/*!*******************************************!*\
  !*** ./src/App/Game/GameBoardWrapper.tsx ***!
  \*******************************************/
/*! exports provided: gameBoardWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameBoardWrapper", function() { return gameBoardWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AlertLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertLayer */ "./src/App/Game/AlertLayer.tsx");
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




function gameBoardWrapper(args) {
  var Board =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board() {
      _classCallCheck(this, Board);

      return _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
    }

    _createClass(Board, [{
      key: "render",
      value: function render() {
        var props = Object.assign({}, this.props, {
          gameArgs: args.gameArgs
        });
        var child = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(args.board, props);
        var alert;

        if (!this.props.isConnected) {
          alert = this._getConnectionLost();
        }

        if (!alert) {
          return child;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: '100%',
            height: '100%'
          }
        }, child, alert);
      }
    }, {
      key: "_getConnectionLost",
      value: function _getConnectionLost() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "h4"
        }, "Connection lost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "body1"
        }, "Trying to connect..."));
      }
    }]);

    return Board;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Board;
}

/***/ }),

/***/ "./src/App/Game/GameCard.tsx":
/*!***********************************!*\
  !*** ./src/App/Game/GameCard.tsx ***!
  \***********************************/
/*! exports provided: GameCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCard", function() { return GameCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);
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





var GameCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameCard, _React$Component);

  function GameCard() {
    _classCallCheck(this, GameCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameCard).apply(this, arguments));
  }

  _createClass(GameCard, [{
    key: "render",
    value: function render() {
      var navigateButton = null;
      var mainDivStyle = {
        marginBottom: '16px',
        position: 'relative',
        height: '250px',
        width: '100%',
        backgroundPosition: 'left center',
        backgroundImage: "url(".concat(this.props.game.imageURL, ")")
      };
      var baseBadgeStyle = {
        position: 'absolute',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        padding: '0px 8px',
        borderRadius: '8px',
        backgroundColor: 'white'
      };

      if (this.props.isLink) {
        mainDivStyle.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
        mainDivStyle.borderRadius = '8px';
        navigateButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: Object.assign({}, baseBadgeStyle, {
            bottom: '12px',
            right: '8px',
            borderRadius: '32px',
            padding: '0'
          })
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          "aria-label": "Next"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: mainDivStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Object.assign({}, baseBadgeStyle, {
          top: '12px',
          left: '8px',
          paddingTop: '4px'
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gutterBottom: false,
        variant: "h4",
        component: "h4",
        style: {
          fontWeight: 300
        }
      }, this.props.game.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Object.assign({}, baseBadgeStyle, {
          bottom: '12px',
          left: '8px'
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gutterBottom: false,
        variant: "overline",
        component: "p"
      }, this.props.game.description)), navigateButton);
    }
  }]);

  return GameCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Game/GameInfoAsync.tsx":
/*!****************************************!*\
  !*** ./src/App/Game/GameInfoAsync.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Async */ "./src/App/Async.tsx");

var GameInfoAsync = Object(_Async__WEBPACK_IMPORTED_MODULE_0__["default"])('Game Info', function () {
  return Promise.all(/*! import() */[__webpack_require__.e("npm.remark-parse"), __webpack_require__.e("npm.react-markdown"), __webpack_require__.e("npm.parse-entities"), __webpack_require__.e("npm.trough"), __webpack_require__.e("npm.unist-util-visit"), __webpack_require__.e("npm.vfile"), __webpack_require__.e("npm.bail"), __webpack_require__.e("npm.character-entities-legacy"), __webpack_require__.e("npm.character-reference-invalid"), __webpack_require__.e("npm.collapse-white-space"), __webpack_require__.e("npm.extend"), __webpack_require__.e("npm.inherits"), __webpack_require__.e("npm.is-alphabetical"), __webpack_require__.e("npm.is-alphanumerical"), __webpack_require__.e("npm.is-buffer"), __webpack_require__.e("npm.is-decimal"), __webpack_require__.e("npm.is-hexadecimal"), __webpack_require__.e("npm.is-plain-obj"), __webpack_require__.e("npm.is-whitespace-character"), __webpack_require__.e("npm.is-word-character"), __webpack_require__.e("npm.markdown-escapes"), __webpack_require__.e("npm.mdast-add-list-metadata"), __webpack_require__.e("npm.path-browserify"), __webpack_require__.e("npm.repeat-string"), __webpack_require__.e("npm.replace-ext"), __webpack_require__.e("npm.state-toggle"), __webpack_require__.e("npm.trim-trailing-lines"), __webpack_require__.e("npm.trim"), __webpack_require__.e("npm.unherit"), __webpack_require__.e("npm.unified"), __webpack_require__.e("npm.unist-util-is"), __webpack_require__.e("npm.unist-util-remove-position"), __webpack_require__.e("npm.unist-util-stringify-position"), __webpack_require__.e("npm.unist-util-visit-parents"), __webpack_require__.e("npm.vfile-location"), __webpack_require__.e("npm.vfile-message"), __webpack_require__.e("npm.x-is-string"), __webpack_require__.e("npm.xtend"), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ./GameInfo */ "./src/App/Game/GameInfo.tsx"));
});
/* harmony default export */ __webpack_exports__["default"] = (GameInfoAsync);

/***/ }),

/***/ "./src/App/Game/GameModePicker.tsx":
/*!*****************************************!*\
  !*** ./src/App/Game/GameModePicker.tsx ***!
  \*****************************************/
/*! exports provided: GameMode, GameModePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMode", function() { return GameMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModePicker", function() { return GameModePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Android */ "./node_modules/@material-ui/icons/Android.js");
/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Wifi */ "./node_modules/@material-ui/icons/Wifi.js");
/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var GameMode;

(function (GameMode) {
  GameMode["AI"] = "AI";
  GameMode["OnlineFriend"] = "online";
  GameMode["LocalFriend"] = "local";
})(GameMode || (GameMode = {}));

var GameModePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameModePicker, _React$Component);

  function GameModePicker(props) {
    var _this;

    _classCallCheck(this, GameModePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameModePicker).call(this, props));

    _this._getLink = function (to) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], Object.assign({
          to: to,
          rel: "nofollow"
        }, props, {
          ref: ref
        }));
      });
    };

    _this._handleNumPlayersSelect = function (event) {
      var newState = Object.assign({}, _this.state, {
        extraInfo: Object.assign({}, _this.state.extraInfo)
      });
      newState.extraInfo[GameMode.OnlineFriend] = event.target.value;

      _this.setState(newState);
    };

    _this._handleSliderChange = function (mode) {
      return function (event, value) {
        var newState = Object.assign({}, _this.state, {
          extraInfo: Object.assign({}, _this.state.extraInfo)
        });
        newState.extraInfo[mode] = value;

        _this.setState(newState);
      };
    };

    _this._handleClickSelection = function (mode, value) {
      return function () {
        var newState = Object.assign({}, _this.state, {
          extraInfo: Object.assign({}, _this.state.extraInfo)
        });
        newState.extraInfo[mode] = value;

        _this.setState(newState);
      };
    };

    _this.state = {
      extraInfo: {
        online: _this.props.gameDef.minPlayers
      }
    };
    return _this;
  }

  _createClass(GameModePicker, [{
    key: "render",
    value: function render() {
      var modes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.gameDef.modes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mode = _step.value;
          modes.push(this._getCard(mode));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "subtitle1",
        style: {
          marginBottom: '16px'
        }
      }, "Choose game mode"), modes);
    }
  }, {
    key: "_getCard",
    value: function _getCard(info) {
      var title;
      var description;
      var icon;

      switch (info.mode) {
        case GameMode.AI:
          title = 'Computer (AI)';
          description = 'Play against the computer in your browser.';
          icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default.a, null);
          break;

        case GameMode.LocalFriend:
          title = 'Local Friend';
          description = 'Share your device and play against a friend locally.';
          icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default.a, null);
          break;

        case GameMode.OnlineFriend:
          title = 'Online Friend';
          description = 'Share a link and play against a friend online.';
          icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default.a, null);
          break;
      }

      var extraInfo = this._getExtraInfo(info);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: title,
        style: {
          marginBottom: '16px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          "aria-label": title
        }, icon),
        title: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: "p"
      }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, extraInfo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        "data-testid": "playButton",
        component: this._getLink(this._getUrl(info)),
        variant: "contained",
        color: "primary",
        style: {
          marginLeft: 'auto'
        }
      }, "Play")));
    }
  }, {
    key: "_getExtraInfoValue",
    value: function _getExtraInfoValue(info) {
      return this.state.extraInfo[info.mode] || 1;
    }
  }, {
    key: "_getExtraInfo",
    value: function _getExtraInfo(info) {
      if (info.mode == GameMode.OnlineFriend) {
        if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {
          return this._getExtraInfoNumPlayers(info, this.props.gameDef.minPlayers, this.props.gameDef.maxPlayers);
        }
      }

      if (info.extraInfo) {
        var extraInfo = info.extraInfo;

        if (extraInfo.type === 'slider') {
          var slider = extraInfo;
          return this._getExtraInfoSlider(info, slider);
        } else if (extraInfo.type === 'dropdown') {
          var dropdown = extraInfo;
          return this._getExtraInfoDropdown(info, dropdown);
        }
      }

      return null;
    }
  }, {
    key: "_getExtraInfoNumPlayers",
    value: function _getExtraInfoNumPlayers(info, minPlayers, maxPlayers) {
      var options = [];

      for (var i = minPlayers; i <= maxPlayers; i++) {
        options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
          value: i,
          key: i
        }, i, " Players"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginBottom: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          position: 'relative',
          top: '8px',
          padding: '0 8px'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: this._getExtraInfoValue(info),
        onChange: this._handleNumPlayersSelect
      }, options));
    }
  }, {
    key: "_getExtraInfoSlider",
    value: function _getExtraInfoSlider(info, slider) {
      var value = this._getExtraInfoValue(info);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginBottom: '18px',
          width: '80%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "label",
        style: {
          marginBottom: '8px'
        }
      }, "Difficulty ", value, "/", slider.max), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: value,
        min: slider.min,
        max: slider.max,
        step: 1,
        onChange: this._handleSliderChange(info.mode)
      }));
    }
  }, {
    key: "_getExtraInfoDropdown",
    value: function _getExtraInfoDropdown(info, dropdown) {
      var _this2 = this;

      var list = dropdown.options.map(function (option, idx) {
        idx++;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: _this2._handleClickSelection(info.mode, idx),
          key: option,
          value: option,
          selected: _this2._getExtraInfoValue(info) === idx
        }, option);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex'
        }
      }, list));
    }
  }, {
    key: "_getUrl",
    value: function _getUrl(info) {
      var mode = info.mode;

      switch (mode) {
        case GameMode.AI:
          if (info.extraInfo) {
            return "/g/".concat(this.props.gameDef.code, "/AI/").concat(this._getExtraInfoValue(info));
          } else {
            return "/g/".concat(this.props.gameDef.code, "/AI");
          }

        case GameMode.LocalFriend:
          return "/g/".concat(this.props.gameDef.code, "/local");

        case GameMode.OnlineFriend:
          return "/room/new/".concat(this.props.gameDef.code, "/").concat(this._getExtraInfoValue(info));
      }
    }
  }]);

  return GameModePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Game/GameSharing.tsx":
/*!**************************************!*\
  !*** ./src/App/Game/GameSharing.tsx ***!
  \**************************************/
/*! exports provided: GameSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSharing", function() { return GameSharing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "./node_modules/@material-ui/icons/FileCopy.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FacebookIcon */ "./src/App/Game/FacebookIcon.tsx");
/* harmony import */ var _QrCodeIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./QrCodeIcon */ "./src/App/Game/QrCodeIcon.tsx");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _AlertLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AlertLayer */ "./src/App/Game/AlertLayer.tsx");
/* harmony import */ var _Lobby_QrCodePopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Lobby/QrCodePopup */ "./src/App/Lobby/QrCodePopup.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var GameSharing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameSharing, _React$Component);

  function GameSharing(props) {
    var _this;

    _classCallCheck(this, GameSharing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameSharing).call(this, props));
    _this.state = {
      showingQrCode: false
    };
    _this.sendEmailCallback = _this.sendEmail.bind(_assertThisInitialized(_this));
    _this.shareFacebookCallback = _this.shareFacebook.bind(_assertThisInitialized(_this));
    _this.copyClipboardCallback = _this.copyClipboard.bind(_assertThisInitialized(_this));
    _this.showQrCodeCallback = _this.showQrCode.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GameSharing, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.showingQrCode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lobby_QrCodePopup__WEBPACK_IMPORTED_MODULE_16__["QrCodePopup"], {
        url: this._getLink(),
        toggleQrCode: this.showQrCodeCallback
      })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          paddingBottom: '16px'
        },
        variant: "h5",
        component: "h2"
      }, "Invite Your Friends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: '100%'
        },
        defaultValue: this._getLink(),
        label: "Link"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Send link by e-mail",
        "aria-label": "E-mail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: this.sendEmailCallback
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Share on Facebook",
        "aria-label": "Facebook"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: this.shareFacebookCallback
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Show QR code",
        "aria-label": "QR code"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: this.showQrCodeCallback
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QrCodeIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "contained",
        color: "primary",
        onClick: this.copyClipboardCallback,
        style: {
          marginLeft: 'auto'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default.a, {
        "aria-label": "Copy",
        style: {
          marginRight: '8px'
        }
      }), "Copy Link"))));
    }
  }, {
    key: "sendEmail",
    value: function sendEmail() {
      react_ga__WEBPACK_IMPORTED_MODULE_12__["default"].event({
        category: 'GameSharing',
        action: 'sendEmail',
        label: this.props.gameCode
      });
      location.assign('mailto:?body=' + this._getLink());
    }
  }, {
    key: "shareFacebook",
    value: function shareFacebook() {
      react_ga__WEBPACK_IMPORTED_MODULE_12__["default"].event({
        category: 'GameSharing',
        action: 'shareFacebook',
        label: this.props.gameCode
      });
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));
    }
  }, {
    key: "copyClipboard",
    value: function copyClipboard() {
      react_ga__WEBPACK_IMPORTED_MODULE_12__["default"].event({
        category: 'GameSharing',
        action: 'copyClipboard',
        label: this.props.gameCode
      });
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default()(this._getLink());
      alert('Link copied to clipboard');
    }
  }, {
    key: "showQrCode",
    value: function showQrCode() {
      react_ga__WEBPACK_IMPORTED_MODULE_12__["default"].event({
        category: 'GameSharing',
        action: 'showQrCode',
        label: this.props.gameCode
      });

      this._toggleShowingQrCode();
    }
  }, {
    key: "_toggleShowingQrCode",
    value: function _toggleShowingQrCode() {
      var _this2 = this;

      if (!this.state.showingQrCode) {
        window.scrollTo(0, 0);
      }

      this.setState(function (oldState) {
        return Object.assign({}, oldState, {
          showingQrCode: !_this2.state.showingQrCode
        });
      });
    }
  }, {
    key: "_getLink",
    value: function _getLink() {
      var origin = window.location.origin;
      var gameCode = this.props.gameCode;
      var roomID = this.props.roomID;
      return "".concat(origin, "/room/").concat(gameCode, "/").concat(roomID);
    }
  }]);

  return GameSharing;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Game/QrCodeIcon.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/QrCodeIcon.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var QrCodeIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QrCodeIcon, _React$Component);

  function QrCodeIcon() {
    _classCallCheck(this, QrCodeIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(QrCodeIcon).apply(this, arguments));
  }

  _createClass(QrCodeIcon, [{
    key: "render",
    value: function render() {
      var path1 = "M76.5 280.5h51v51h-51v-51m204-153h51v102h-51v-102m-51 153h102v102h-51v-51h-51v-51m153 0h51v51h51v-51h51v51h-51v51h51v102h-51v51h-51v-51h-102v51h-51v-102h102v-51h51v-51h-51v-51m102 204v-102h-51v102h51m-102-408h153v153h-153v-153m51 51v51h51v-51h-51m-357-51h153v153h-153v-153m51 51v51h51v-51h-51m-51 255h153v153h-153v-153m51 51v51h51v-51zm0 0";
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
        viewBox: "0 0 612 612"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: path1
      }));
    }
  }]);

  return QrCodeIcon;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QrCodeIcon);

/***/ }),

/***/ "./src/App/Helpers/AddressHelper.ts":
/*!******************************************!*\
  !*** ./src/App/Helpers/AddressHelper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressHelper; });
/* harmony import */ var _SSRHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSRHelper */ "./src/App/Helpers/SSRHelper.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AddressHelper =
/*#__PURE__*/
function () {
  function AddressHelper() {
    _classCallCheck(this, AddressHelper);
  }

  _createClass(AddressHelper, null, [{
    key: "getServerAddress",

    /** Gets bgio host:port address. */
    value: function getServerAddress() {
      if (!_SSRHelper__WEBPACK_IMPORTED_MODULE_0__["default"].isSSR()) {
        return  false || "http://".concat(window.location.hostname, ":8001");
      }
    }
  }]);

  return AddressHelper;
}();



/***/ }),

/***/ "./src/App/Helpers/SSRHelper.ts":
/*!**************************************!*\
  !*** ./src/App/Helpers/SSRHelper.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SSRHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Returns true if SSR is rendering the page, else false.
var SSRHelper =
/*#__PURE__*/
function () {
  function SSRHelper() {
    _classCallCheck(this, SSRHelper);
  }

  _createClass(SSRHelper, null, [{
    key: "isSSR",
    value: function isSSR() {
      return typeof window === 'undefined';
    }
  }]);

  return SSRHelper;
}();



/***/ }),

/***/ "./src/App/Lobby/ListPlayers.tsx":
/*!***************************************!*\
  !*** ./src/App/Lobby/ListPlayers.tsx ***!
  \***************************************/
/*! exports provided: ListPlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPlayers", function() { return ListPlayers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccessTime */ "./node_modules/@material-ui/icons/AccessTime.js");
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ListPlayers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListPlayers, _React$Component);

  function ListPlayers() {
    _classCallCheck(this, ListPlayers);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListPlayers).apply(this, arguments));
  }

  _createClass(ListPlayers, [{
    key: "render",
    value: function render() {
      var _this = this;

      var metadata = this.props.roomMetadata;
      var playersList = metadata.players.map(function (player, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
          key: "player-".concat(idx)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
          primary: player.name
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemSecondaryAction"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          "data-testid": "editNickname",
          onClick: _this.props.editNickname
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
      });
      var waitingList = [];

      for (var i = 0; i < metadata.numberOfPlayers - playersList.length; i++) {
        waitingList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
          key: "waiting-".concat(i)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Waiting for player..."))));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
        subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListSubheader"], null, "Players")
      }, playersList, waitingList));
    }
  }]);

  return ListPlayers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Lobby/LobbyService.ts":
/*!***************************************!*\
  !*** ./src/App/Lobby/LobbyService.ts ***!
  \***************************************/
/*! exports provided: LobbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyService", function() { return LobbyService; });
/* harmony import */ var _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/AddressHelper */ "./src/App/Helpers/AddressHelper.ts");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/SSRHelper */ "./src/App/Helpers/SSRHelper.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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




var FBG_CREDENTIALS_KEY = 'fbgCredentials';
var FBG_NICKNAME_KEY = 'fbgNickname';
var LobbyService =
/*#__PURE__*/
function () {
  function LobbyService() {
    _classCallCheck(this, LobbyService);
  }

  _createClass(LobbyService, null, [{
    key: "newRoom",
    value: function newRoom(gameCode, numPlayers) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var response, roomID;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress(), "/games/").concat(gameCode, "/create")).send({
                  numPlayers: numPlayers
                });

              case 2:
                response = _context.sent;
                roomID = response.body.gameID;
                return _context.abrupt("return", roomID);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "joinRoom",
    value: function joinRoom(gameCode, player) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var response, credential;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress(), "/games/").concat(gameCode, "/").concat(player.roomID, "/join")).send({
                  playerID: player.playerID,
                  playerName: player.name
                });

              case 2:
                response = _context2.sent;
                credential = response.body.playerCredentials;
                this.setCredential(player, credential);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "renameUser",
    value: function renameUser(gameCode, player, newName) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var playerCredential;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                playerCredential = this.getCredential(player.roomID);
                _context3.next = 3;
                return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress(), "/games/").concat(gameCode, "/").concat(player.roomID, "/rename")).send({
                  playerID: player.playerID,
                  playerCredentials: playerCredential.credential,
                  newName: newName
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getRoomMetadata",
    value: function getRoomMetadata(gameCode, roomID) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var response, body, players, playerCredential, currentUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress(), "/games/").concat(gameCode, "/").concat(roomID));

              case 2:
                response = _context4.sent;
                body = response.body;
                players = body.players.filter(function (player) {
                  return player.name;
                }).map(function (player) {
                  return {
                    playerID: player.id,
                    name: player.name,
                    roomID: roomID
                  };
                });
                playerCredential = this.getCredential(roomID);

                if (playerCredential) {
                  currentUser = players.find(function (player) {
                    return player.playerID === playerCredential.playerID;
                  });
                }

                return _context4.abrupt("return", {
                  players: players,
                  gameCode: gameCode,
                  roomID: roomID,
                  currentUser: currentUser,
                  numberOfPlayers: body.players.length
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "getPlayAgainNextRoom",
    value: function getPlayAgainNextRoom(gameCode, roomID, numPlayers) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var playerCredential, response;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                playerCredential = this.getCredential(roomID);
                _context5.next = 3;
                return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress(), "/games/").concat(gameCode, "/").concat(roomID, "/playAgain")).send({
                  playerID: playerCredential.playerID,
                  credentials: playerCredential.credential,
                  numPlayers: numPlayers
                });

              case 3:
                response = _context5.sent;
                return _context5.abrupt("return", response.body.nextRoomID);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "getNickname",
    value: function getNickname() {
      if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__["default"].isSSR()) {
        return localStorage.getItem(FBG_NICKNAME_KEY);
      }
    }
  }, {
    key: "setNickname",
    value: function setNickname(name) {
      localStorage.setItem(FBG_NICKNAME_KEY, name);
    }
  }, {
    key: "getCredential",
    value: function getCredential(roomID) {
      // return an empty IPlayerInRoom object if the player's identity is for another room
      var credentials = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));

      if (credentials) {
        return credentials[roomID];
      }
    }
  }, {
    key: "setCredential",
    value: function setCredential(player, credential) {
      var existing = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));
      var newCredentials = Object.assign({}, existing);
      newCredentials[player.roomID] = {
        credential: credential,
        playerID: player.playerID
      };
      localStorage.setItem(FBG_CREDENTIALS_KEY, JSON.stringify(newCredentials));
    }
  }]);

  return LobbyService;
}();

/***/ }),

/***/ "./src/App/Lobby/NewRoom.tsx":
/*!***********************************!*\
  !*** ./src/App/Lobby/NewRoom.tsx ***!
  \***********************************/
/*! exports provided: NewRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoom", function() { return NewRoom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var _LobbyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LobbyService */ "./src/App/Lobby/LobbyService.ts");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../games */ "./src/games/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/** Class responsible for creating a new room and redirecting to the correct URL. */

var NewRoom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewRoom, _React$Component);

  function NewRoom() {
    var _this;

    _classCallCheck(this, NewRoom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewRoom).apply(this, arguments));
    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(NewRoom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var gameCode = this.props.match.params.gameCode;
      var numPlayers = this.props.match.params.numPlayers;

      if (!(gameCode in _games__WEBPACK_IMPORTED_MODULE_3__["GAMES_MAP"])) {
        this.setState({
          error: true
        });
        return;
      }

      _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].newRoom(gameCode, numPlayers).then(function (roomID) {
        _this2.props.history.replace("/room/".concat(gameCode, "/").concat(roomID));
      }, function () {
        _this2.setState({
          error: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        var ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('error', 'Failed to create room');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);
      }

      var LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('loading', 'Creating room...');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);
    }
  }]);

  return NewRoom;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Lobby/NicknamePrompt.tsx":
/*!******************************************!*\
  !*** ./src/App/Lobby/NicknamePrompt.tsx ***!
  \******************************************/
/*! exports provided: NicknamePrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NicknamePrompt", function() { return NicknamePrompt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var NicknamePrompt =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NicknamePrompt, _React$Component);

  function NicknamePrompt() {
    var _this;

    _classCallCheck(this, NicknamePrompt);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NicknamePrompt).apply(this, arguments));
    _this.state = {
      nameTextField: ''
    };

    _this._setNicknameOnEnterButton = function (event) {
      if (event.key === 'Enter' && _this._nicknameIsValid()) {
        _this._onClick();
      }
    };

    _this._nicknameIsValid = function () {
      var name = _this.state.nameTextField;
      return name && name.length > 0;
    };

    _this._onClick = function () {
      if (_this._nicknameIsValid()) {
        _this.props.setNickname(_this.state.nameTextField);
      }
    };

    _this._onChange = function (event) {
      var nameTextField = event.target.value;

      _this.setState(function (oldState) {
        return Object.assign({}, oldState, {
          nameTextField: nameTextField
        });
      });
    };

    _this._togglePrompt = function () {
      if (_this.props.togglePrompt) {
        _this.props.togglePrompt();
      }
    };

    return _this;
  }

  _createClass(NicknamePrompt, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClickAway: this._togglePrompt
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          marginTop: '16px',
          whiteSpace: 'nowrap',
          width: '250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          paddingTop: '16px'
        },
        variant: "h5",
        component: "h3"
      }, "Enter Your Nickname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        autoFocus: true,
        type: "text",
        defaultValue: this.props.nickname,
        onChange: this._onChange,
        onKeyPress: this._setNicknameOnEnterButton
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "contained",
        color: "primary",
        style: {
          marginTop: '16px'
        },
        onClick: this._onClick,
        disabled: !this._nicknameIsValid()
      }, "Set Nickname")))));
    }
  }]);

  return NicknamePrompt;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Lobby/QrCodePopup.tsx":
/*!***************************************!*\
  !*** ./src/App/Lobby/QrCodePopup.tsx ***!
  \***************************************/
/*! exports provided: QrCodePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodePopup", function() { return QrCodePopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var QrCode = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");

var QrCodePopup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QrCodePopup, _React$Component);

  function QrCodePopup() {
    _classCallCheck(this, QrCodePopup);

    return _possibleConstructorReturn(this, _getPrototypeOf(QrCodePopup).apply(this, arguments));
  }

  _createClass(QrCodePopup, [{
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        boxSizing: 'border-box',
        padding: '16px',
        height: 'auto',
        display: 'block'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClickAway: this.props.toggleQrCode
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          marginBottom: '16px',
          whiteSpace: 'nowrap',
          marginLeft: 'auto',
          width: '80vw',
          maxWidth: '450px',
          marginRight: 'auto',
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          paddingTop: '16px'
        },
        variant: "h5",
        component: "h3"
      }, "Scan QR code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QrCode, {
        value: this.props.url,
        size: 500,
        style: style,
        renderAs: "svg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "contained",
        color: "primary",
        style: {
          marginBottom: '16px'
        },
        onClick: this.props.toggleQrCode
      }, "Done")));
    }
  }]);

  return QrCodePopup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/Lobby/Room.tsx":
/*!********************************!*\
  !*** ./src/App/Lobby/Room.tsx ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MessagePage */ "./src/App/MessagePage.tsx");
/* harmony import */ var _LobbyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LobbyService */ "./src/App/Lobby/LobbyService.ts");
/* harmony import */ var _Game_AlertLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Game/AlertLayer */ "./src/App/Game/AlertLayer.tsx");
/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _Game_GameSharing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Game/GameSharing */ "./src/App/Game/GameSharing.tsx");
/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Game/Game */ "./src/App/Game/Game.tsx");
/* harmony import */ var _ListPlayers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListPlayers */ "./src/App/Lobby/ListPlayers.tsx");
/* harmony import */ var _Game_GameCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Game/GameCard */ "./src/App/Game/GameCard.tsx");
/* harmony import */ var _games_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../games/index */ "./src/games/index.ts");
/* harmony import */ var _NicknamePrompt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NicknamePrompt */ "./src/App/Lobby/NicknamePrompt.tsx");
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












var Room =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room, _React$Component);

  function Room() {
    var _this;

    _classCallCheck(this, Room);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Room).apply(this, arguments));
    _this.state = {
      error: '',
      loading: true,
      gameReady: false,
      editingName: false
    };

    _this.updateMetadata = function () {
      var _this$props$match$par = _this.props.match.params,
          gameCode = _this$props$match$par.gameCode,
          roomID = _this$props$match$par.roomID;

      if (!_LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].getNickname()) {
        return;
      }

      _this.promise = _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].getRoomMetadata(gameCode, roomID).then(function (metadata) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var player;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (metadata.currentUser) {
                    _context.next = 5;
                    break;
                  }

                  player = {
                    playerID: metadata.players.length,
                    roomID: roomID,
                    name: _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].getNickname()
                  };
                  _context.next = 4;
                  return _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].joinRoom(gameCode, player);

                case 4:
                  return _context.abrupt("return", _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].getRoomMetadata(gameCode, roomID));

                case 5:
                  return _context.abrupt("return", metadata);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }).then(function (metadata) {
        if (metadata.numberOfPlayers === metadata.players.length) {
          _this.setState(function (oldState) {
            return Object.assign({}, oldState, {
              gameReady: true
            });
          });

          _this._stopTimer();
        }

        _this.setState(function (oldState) {
          return Object.assign({}, oldState, {
            roomMetadata: metadata,
            loading: false
          });
        });

        if (!_this.state.gameReady) {
          setTimeout(function () {
            return _this.updateMetadata();
          }, 2000);
        }

        return metadata;
      }, function () {
        var error = 'Failed to fetch room metadata.';

        _this.setState(function (oldState) {
          return Object.assign({}, oldState, {
            error: error
          });
        });
      });
    };

    _this._getNamePrompt = function (name) {
      var togglePrompt = _this.state.editingName ? _this._toggleEditingName : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NicknamePrompt__WEBPACK_IMPORTED_MODULE_10__["NicknamePrompt"], {
        setNickname: _this._setNickname,
        nickname: name,
        togglePrompt: togglePrompt
      });
    };

    _this._toggleEditingName = function () {
      _this.setState(function (oldState) {
        return Object.assign({}, oldState, {
          editingName: !_this.state.editingName
        });
      });
    };

    _this._setNickname = function (nickname) {
      _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].setNickname(nickname);

      if (_this.state.editingName) {
        var room = _this.state.roomMetadata;
        _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].renameUser(room.gameCode, room.currentUser, nickname);

        _this._toggleEditingName();
      }

      _this.updateMetadata();
    };

    _this._stopTimer = function () {
      clearInterval(_this.timer);
      _this.timer = null;
    };

    _this._getGameSharing = function () {
      var _this$props$match$par2 = _this.props.match.params,
          gameCode = _this$props$match$par2.gameCode,
          roomID = _this$props$match$par2.roomID;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_GameSharing__WEBPACK_IMPORTED_MODULE_5__["GameSharing"], {
        gameCode: gameCode,
        roomID: roomID,
        roomMetadata: _this.state.roomMetadata
      });
    };

    return _this;
  }

  _createClass(Room, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMetadata();
    }
  }, {
    key: "render",
    value: function render() {
      var LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('loading', 'Loading...');
      var nickname = _LobbyService__WEBPACK_IMPORTED_MODULE_2__["LobbyService"].getNickname();

      if (typeof window === 'undefined') {
        // SSR
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);
      }

      if (!nickname) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__["default"], null, this._getNamePrompt());
      }

      if (this.state.error) {
        var ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__["default"])('error', this.state.error);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);
      }

      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);
      }

      if (this.state.gameReady) {
        var room = this.state.roomMetadata;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_Game__WEBPACK_IMPORTED_MODULE_6__["default"], {
          room: room
        });
      }

      var nicknamePrompt = this.state.editingName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_AlertLayer__WEBPACK_IMPORTED_MODULE_3__["default"], null, this._getNamePrompt(this.state.roomMetadata.currentUser.name)) : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__["default"], null, nicknamePrompt, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_GameCard__WEBPACK_IMPORTED_MODULE_8__["GameCard"], {
        game: _games_index__WEBPACK_IMPORTED_MODULE_9__["GAMES_MAP"][this.state.roomMetadata.gameCode]
      }), this._getGameSharing(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListPlayers__WEBPACK_IMPORTED_MODULE_7__["ListPlayers"], {
        roomMetadata: this.state.roomMetadata,
        editNickname: this._toggleEditingName
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._stopTimer();
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/App/MessagePage.tsx":
/*!*********************************!*\
  !*** ./src/App/MessagePage.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagePageClass */ "./src/App/MessagePageClass.tsx");



var getMessagePage = function getMessagePage(type, message) {
  return function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: type,
      message: message
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getMessagePage);

/***/ }),

/***/ "./src/App/MessagePageClass.tsx":
/*!**************************************!*\
  !*** ./src/App/MessagePageClass.tsx ***!
  \**************************************/
/*! exports provided: MessagePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreeBoardGameBar */ "./src/App/FreeBoardGameBar.tsx");
/* harmony import */ var _media_SvgError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/SvgError */ "./src/App/media/SvgError.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Status */ "./src/App/Status.ts");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ttag */ "./node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["messagePage.goHome"]);

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










var MessagePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessagePage, _React$Component);

  function MessagePage(props) {
    var _this;

    _classCallCheck(this, MessagePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessagePage).call(this, props));
    _this.requestID = null;

    _this._animate = function (now) {
      return function () {
        if (_this.requestID) {
          var elapsed = now - _this.state.startTime;
          var linkHidden = elapsed < 5000;

          _this.setState(Object.assign({}, _this.state, {
            linkHidden: linkHidden
          }));

          if (linkHidden) {
            _this.requestID = window.requestAnimationFrame(_this._animate(Date.now()));
          }
        }
      };
    };

    _this.state = {
      linkHidden: props.type !== 'error',
      startTime: Date.now()
    };

    if (typeof window !== 'undefined' && props.type !== 'error') {
      _this.requestID = window.requestAnimationFrame(_this._animate(Date.now()));
    }

    return _this;
  }

  _createClass(MessagePage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.requestID) {
        window.cancelAnimationFrame(this.requestID);
        this.requestID = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var icon;
      var linkHome;
      var status;

      if (this.props.type === 'error') {
        status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Status__WEBPACK_IMPORTED_MODULE_7__["default"], {
          code: "404"
        });
        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_media_SvgError__WEBPACK_IMPORTED_MODULE_5__["default"], {
          style: {
            height: '128px'
          }
        });
      } else {
        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      }

      if (!this.state.linkHidden) {
        var goHomeText = this.props.message === 'Invalid Locale' ? 'Go Home' : Object(ttag__WEBPACK_IMPORTED_MODULE_8__["t"])(_templateObject());
        linkHome = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/",
          variant: "outlined",
          style: {
            margin: '8px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2___default.a, {
          style: {
            marginRight: '8px'
          }
        }), goHomeText);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          paddingTop: '16px',
          textAlign: 'center'
        }
      }, status, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          paddingTop: '16px'
        }
      }, this.props.message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), linkHome)));
    }
  }]);

  return MessagePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (MessagePage);

/***/ }),

/***/ "./src/App/ScrollToTop.tsx":
/*!*********************************!*\
  !*** ./src/App/ScrollToTop.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ScrollToTop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollToTop, _React$Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ScrollToTop);

/***/ }),

/***/ "./src/App/Status.ts":
/*!***************************!*\
  !*** ./src/App/Status.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Status =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Status, _React$Component);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, _getPrototypeOf(Status).apply(this, arguments));
  }

  _createClass(Status, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.status = this.props.code;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Status));

/***/ }),

/***/ "./src/App/media/SvgError.tsx":
/*!************************************!*\
  !*** ./src/App/media/SvgError.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SvgError = function SvgError(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1 1",
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0.2",
    y1: "0.2",
    x2: "0.8",
    y2: "0.8",
    stroke: "black",
    strokeWidth: "0.05"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0.8",
    y1: "0.2",
    x2: "0.2",
    y2: "0.8",
    stroke: "black",
    strokeWidth: "0.05"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgError);

/***/ }),

/***/ "./src/App/media/fbg_logo_white_48.png":
/*!*********************************************!*\
  !*** ./src/App/media/fbg_logo_white_48.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5830bdd1611d0a8d9978cb5320b49dc2.png";

/***/ }),

/***/ "./src/Home/HomeAsync.tsx":
/*!********************************!*\
  !*** ./src/Home/HomeAsync.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Async */ "./src/App/Async.tsx");

var HomeAsync = Object(_App_Async__WEBPACK_IMPORTED_MODULE_0__["default"])('Home', function () {
  return Promise.all(/*! import() */[__webpack_require__.e("npm.material-ui"), __webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./Home */ "./src/Home/Home.tsx"));
});
/* harmony default export */ __webpack_exports__["default"] = (HomeAsync);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/App */ "./src/App/App.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(app, document.getElementById('root'));

if (true) {
  module.hot.accept();
}

/***/ }),

/***/ "./src/games/checkers/index.ts":
/*!*************************************!*\
  !*** ./src/games/checkers/index.ts ***!
  \*************************************/
/*! exports provided: checkersGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkersGameDef", function() { return checkersGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/checkers/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/checkers/instructions.md");



var checkersGameDef = {
  code: 'checkers',
  name: 'Checkers',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Classic game of Checkers',
  descriptionTag: "Play Checkers (also known as Draughts) locally\n  or online against friends!",
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.tweenjs"), __webpack_require__.e("npm.react-dragtastic"), __webpack_require__.e("npm.three"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/checkers/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e(7), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/checkers/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/checkers/instructions.md":
/*!********************************************!*\
  !*** ./src/games/checkers/instructions.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Checkers is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side.\n\nEach player starts with twelve pieces. The player with white pieces always makes the first move. Normal pieces can move only diagonally towards the opponent's side, while kings can move in any direction. A player can remove an opponent's piece from the board by jumping over it.\n\nIn order to jump, the next diagonal square after the opponent piece must be empty. If the player has more than one possible jump, these jumps can be executed in a single turn. A piece becomes a king if a piece reaches the last row towards the opponent. The game ends when no more pieces or moves are possible for a player.\n");

/***/ }),

/***/ "./src/games/checkers/media/thumbnail.png":
/*!************************************************!*\
  !*** ./src/games/checkers/media/thumbnail.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3cf14a4ca96099684a4bc0c6b2c5d98a.png";

/***/ }),

/***/ "./src/games/chess/index.ts":
/*!**********************************!*\
  !*** ./src/games/chess/index.ts ***!
  \**********************************/
/*! exports provided: chessGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chessGameDef", function() { return chessGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/chess/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/chess/instructions.md");



var chessGameDef = {
  code: 'chess',
  name: 'Chess',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI,
    extraInfo: {
      type: 'slider',
      min: 1,
      max: 8
    }
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend
  }],
  description: 'International Rules',
  descriptionTag: "Play an online Chess game in your browser against a top chess computer. You can set the computer level from 1 to 8, from easy to grandmaster. You can also easily share a link and play chess with a friend online, or you can share your device and play with a friend locally !",
  instructions: {
    videoId: 'fKxG8KjH1Qg',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.tweenjs"), __webpack_require__.e("npm.react-dragtastic"), __webpack_require__.e("npm.three"), __webpack_require__.e("npm.chess.js"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/chess/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.worker-loader"), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/chess/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/chess/instructions.md":
/*!*****************************************!*\
  !*** ./src/games/chess/instructions.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Chess is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side.\n\nEach player starts with sixteen pieces: eight pawns, two knights, two bishops, two rooks, one queen and one king. The player with white pieces always makes the first move.\n\nThe goal of the game is for each player to try and checkmate the king of the opponent.\nCheckmate is a game position in which a player's king is threatened with capture and there is no way to remove the threat. Checkmating the opponent wins the game.\n\n[Click here for the allowed moves of each piece.](https://www.chessusa.com/chess-rules.html)\n");

/***/ }),

/***/ "./src/games/chess/media/thumbnail.png":
/*!*********************************************!*\
  !*** ./src/games/chess/media/thumbnail.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5223b499ab2dc00c5876723e7e8b620e.png";

/***/ }),

/***/ "./src/games/cornerus/index.ts":
/*!*************************************!*\
  !*** ./src/games/cornerus/index.ts ***!
  \*************************************/
/*! exports provided: cornerusGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cornerusGameDef", function() { return cornerusGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/cornerus/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/cornerus/instructions.md");



var cornerusGameDef = {
  code: 'cornerus',
  name: 'Cornerus',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  modes: [
  /*
          {
              mode: GameMode.AI,
              extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
          },*/
  {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'Similar to Blokus',
  descriptionTag: "Play Cornerus, a free online game similar to Blokus. You can play multi-player online or share your device and play locally against a friend.",
  instructions: {
    videoId: 'Yw8pK6Ak5oE',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.tweenjs"), __webpack_require__.e("npm.react-dragtastic"), __webpack_require__.e("npm.three"), __webpack_require__.e("npm.style-loader"), __webpack_require__.e("npm.css-loader"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/cornerus/config.ts"));
  }
};

/***/ }),

/***/ "./src/games/cornerus/instructions.md":
/*!********************************************!*\
  !*** ./src/games/cornerus/instructions.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Similarly to Blokus, this game allows two to four players. In the case of only two or three players, two colors will be assigned to a single player.\n\nEach color has 21 tiles with distinct shapes, and the objective is to cover as much of the board as possible. The first piece must be placed on the corner of the board assigned to that color.\n\nAll subsequent pieces must share a corner with at least one piece of the same color. Sharing an edge is only allowed if the pieces are not of the same color. The game ends when nobody can make a move.\n");

/***/ }),

/***/ "./src/games/cornerus/media/thumbnail.png":
/*!************************************************!*\
  !*** ./src/games/cornerus/media/thumbnail.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3705be86cd972a5e626188fd20d94e37.png";

/***/ }),

/***/ "./src/games/fourinarow/index.ts":
/*!***************************************!*\
  !*** ./src/games/fourinarow/index.ts ***!
  \***************************************/
/*! exports provided: fourinarowGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourinarowGameDef", function() { return fourinarowGameDef; });
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/fourinarow/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/fourinarow/instructions.md");
 // import { IGameModeExtraInfoDropdown } from '../../App/Game/GameModePicker';



var fourinarowGameDef = {
  code: 'fourinarow',
  name: 'Connect 4',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  modes: [// {
  //   mode: GameMode.AI,
  //   extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
  // },
  {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'Also know as Four-in-a-Row',
  descriptionTag: "Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.",
  instructions: {
    videoId: 'utXzIFEVPjA',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/fourinarow/config.ts"));
  }
};

/***/ }),

/***/ "./src/games/fourinarow/instructions.md":
/*!**********************************************!*\
  !*** ./src/games/fourinarow/instructions.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.\n");

/***/ }),

/***/ "./src/games/fourinarow/media/thumbnail.png":
/*!**************************************************!*\
  !*** ./src/games/fourinarow/media/thumbnail.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "002ff773b57d1ba5022c800091ff30a4.png";

/***/ }),

/***/ "./src/games/index.ts":
/*!****************************!*\
  !*** ./src/games/index.ts ***!
  \****************************/
/*! exports provided: GAMES_MAP, GAMES_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMES_MAP", function() { return GAMES_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMES_LIST", function() { return GAMES_LIST; });
/* harmony import */ var _chess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess */ "./src/games/chess/index.ts");
/* harmony import */ var _seabattle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seabattle */ "./src/games/seabattle/index.ts");
/* harmony import */ var _tictactoe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tictactoe */ "./src/games/tictactoe/index.ts");
/* harmony import */ var _takesix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./takesix */ "./src/games/takesix/index.ts");
/* harmony import */ var _ninemensmorris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ninemensmorris */ "./src/games/ninemensmorris/index.ts");
/* harmony import */ var _checkers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkers */ "./src/games/checkers/index.ts");
/* harmony import */ var _reversi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reversi */ "./src/games/reversi/index.ts");
/* harmony import */ var _cornerus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cornerus */ "./src/games/cornerus/index.ts");
/* harmony import */ var _fourinarow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fourinarow */ "./src/games/fourinarow/index.ts");








 // Add new games here

var GAMES_MAP = {
  chess: _chess__WEBPACK_IMPORTED_MODULE_0__["chessGameDef"],
  seabattle: _seabattle__WEBPACK_IMPORTED_MODULE_1__["seabattleGameDef"],
  tictactoe: _tictactoe__WEBPACK_IMPORTED_MODULE_2__["tictactoeGameDef"],
  takesix: _takesix__WEBPACK_IMPORTED_MODULE_3__["takesixGameDef"],
  cornerus: _cornerus__WEBPACK_IMPORTED_MODULE_7__["cornerusGameDef"],
  ninemensmorris: _ninemensmorris__WEBPACK_IMPORTED_MODULE_4__["ninemensmorrisGameDef"],
  checkers: _checkers__WEBPACK_IMPORTED_MODULE_5__["checkersGameDef"],
  reversi: _reversi__WEBPACK_IMPORTED_MODULE_6__["reversiGameDef"],
  fourinarow: _fourinarow__WEBPACK_IMPORTED_MODULE_8__["fourinarowGameDef"]
};
var GAMES_LIST = [GAMES_MAP.chess, GAMES_MAP.ninemensmorris, GAMES_MAP.reversi, GAMES_MAP.takesix, GAMES_MAP.checkers, GAMES_MAP.cornerus, GAMES_MAP.seabattle, GAMES_MAP.tictactoe, GAMES_MAP.fourinarow];

/***/ }),

/***/ "./src/games/ninemensmorris/index.ts":
/*!*******************************************!*\
  !*** ./src/games/ninemensmorris/index.ts ***!
  \*******************************************/
/*! exports provided: ninemensmorrisGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ninemensmorrisGameDef", function() { return ninemensmorrisGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/ninemensmorris/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/ninemensmorris/instructions.md");



var ninemensmorrisGameDef = {
  code: 'ninemensmorris',
  name: 'Nine Mens Morris',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  modes: [
  /*
      {
          mode: GameMode.AI,
          extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },*/
  {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Also Known as Mills',
  descriptionTag: "Play Nine Men's Morris, a free online game also known as Mills. You can play multi-player or with your friend locally!",
  instructions: {
    videoId: 'zvbIKOHIkRE',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.style-loader"), __webpack_require__.e("npm.css-loader"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/ninemensmorris/config.ts"));
  }
};

/***/ }),

/***/ "./src/games/ninemensmorris/instructions.md":
/*!**************************************************!*\
  !*** ./src/games/ninemensmorris/instructions.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Nine Men's Morris is a classic two-player board game.\n\nIn the first phase of the game, each player has to place pieces on empty slots. If a player places three pieces in a line, they form a \"mill\", and they can remove an opponent's piece from the board. The first phase ends when all pieces are placed.\n\nIn the second phase, each player can move a piece to an adjacent point, as long as the adjacent point is empty (no jumping). As in the first phase, forming a mill removes one opponent's piece.\n\nThe game ends when a player only has two pieces left.\n");

/***/ }),

/***/ "./src/games/ninemensmorris/media/thumbnail.png":
/*!******************************************************!*\
  !*** ./src/games/ninemensmorris/media/thumbnail.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "afcb23a52efa05813de3becce2250bc5.png";

/***/ }),

/***/ "./src/games/reversi/index.ts":
/*!************************************!*\
  !*** ./src/games/reversi/index.ts ***!
  \************************************/
/*! exports provided: reversiGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversiGameDef", function() { return reversiGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/reversi/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/reversi/instructions.md");



var reversiGameDef = {
  code: 'reversi',
  name: 'Reversi',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'Similar to Rollit and Othello',
  descriptionTag: "Play Reversi, a free online game similar to Rollit and Othello. You can play multi-player online or  share your device and play locally against a friend.",
  instructions: {
    videoId: 'hC1sgDNrqq0',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.tweenjs"), __webpack_require__.e("npm.react-dragtastic"), __webpack_require__.e("npm.three"), __webpack_require__.e("npm.style-loader"), __webpack_require__.e("npm.css-loader"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(8), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/reversi/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e(8), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/reversi/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/reversi/instructions.md":
/*!*******************************************!*\
  !*** ./src/games/reversi/instructions.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Similar to Rolit, this game is a variation of Reversi that allows up to 4 players. There are up to four colors, and each player controls one color.\n\nThe objective of the game is to own more squares than all of your opponents. In order to do so, each player can place a piece on an empty square as long as it captures enemy pieces.\n\nEnemy pieces can be captured by placing a piece diagonally, horizontally or vertically from an existing piece of the same color.\n\nThe game ends when there are no more possible moves, which in most cases is when the board is full.\n");

/***/ }),

/***/ "./src/games/reversi/media/thumbnail.png":
/*!***********************************************!*\
  !*** ./src/games/reversi/media/thumbnail.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e8d7779d2e316647ab0f06315db4b0b.png";

/***/ }),

/***/ "./src/games/seabattle/index.ts":
/*!**************************************!*\
  !*** ./src/games/seabattle/index.ts ***!
  \**************************************/
/*! exports provided: seabattleGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seabattleGameDef", function() { return seabattleGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/seabattle/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/seabattle/instructions.md");



var seabattleGameDef = {
  code: 'seabattle',
  name: 'Sea Battle',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }],
  description: 'Similar to Battleship',
  descriptionTag: "Play Sea Battle, a free online game similar to Battleship. You can play single-player against the computer or multi-player against a friend online.",
  instructions: {
    videoId: 'q0qpQ8doUp8',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.tweenjs"), __webpack_require__.e("npm.react-dragtastic"), __webpack_require__.e("npm.three"), __webpack_require__.e("npm.shortid"), __webpack_require__.e("npm.nanoid"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(9), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/seabattle/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.shortid"), __webpack_require__.e("npm.nanoid"), __webpack_require__.e("npm.shuffle-array"), __webpack_require__.e(9), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/seabattle/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/seabattle/instructions.md":
/*!*********************************************!*\
  !*** ./src/games/seabattle/instructions.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Sea Battle is primarily a guessing game for two players.  It is played on ruled grids on which each player's convoy of ships are concealed from the other player.  Players alternate turns firing servos at the other player's ships, and the objective of the game is to destroy the opposing player's entire fleet.\n");

/***/ }),

/***/ "./src/games/seabattle/media/thumbnail.png":
/*!*************************************************!*\
  !*** ./src/games/seabattle/media/thumbnail.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b14b46c1846c8b5b97d078f4ef1e1809.png";

/***/ }),

/***/ "./src/games/takesix/index.ts":
/*!************************************!*\
  !*** ./src/games/takesix/index.ts ***!
  \************************************/
/*! exports provided: takesixGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takesixGameDef", function() { return takesixGameDef; });
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/takesix/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/takesix/instructions.md");



var takesixGameDef = {
  code: 'takesix',
  name: 'Take 6!',
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].AI
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__["GameMode"].OnlineFriend
  }],
  minPlayers: 2,
  maxPlayers: 10,
  description: 'Similar To 6 Nimmt!',
  descriptionTag: "Play Take 6!, a free online game similar to 6 Nimmt. You can play multi-player from two and up to ten players online!",
  instructions: {
    videoId: 'fF0lnDygoes',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e("npm.style-loader"), __webpack_require__.e("npm.css-loader"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/takesix/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e(5), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/takesix/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/takesix/instructions.md":
/*!*******************************************!*\
  !*** ./src/games/takesix/instructions.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Take 6! is a game that can play from two to ten players. The objective of the game is to score as few penalty points as possible.\n\nThe board starts with one card in each of the four rows. Then, at the beginning of each turn, all players choose the card they wish to play from their hand at the same time. These cards must be placed in the row that ends with the highest number that is still below each card number.\n\nHowever, if this row already has five cards, the player has to take all 6 cards (hence \"Take 6!\"). Taking these cards adds their penalty points to the player's score. A player must also take cards if the selected card is lower than the last cards in all rows. The game ends when all players have played their cards.\n");

/***/ }),

/***/ "./src/games/takesix/media/thumbnail.png":
/*!***********************************************!*\
  !*** ./src/games/takesix/media/thumbnail.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f49c0fd2f1f6fc2aabfb8f46927ae2f2.png";

/***/ }),

/***/ "./src/games/tictactoe/index.ts":
/*!**************************************!*\
  !*** ./src/games/tictactoe/index.ts ***!
  \**************************************/
/*! exports provided: tictactoeGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tictactoeGameDef", function() { return tictactoeGameDef; });
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/thumbnail.png */ "./src/games/tictactoe/media/thumbnail.png");
/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ "./src/games/tictactoe/instructions.md");



var tictactoeGameDef = {
  code: 'tictactoe',
  name: 'Tic-Tac-Toe',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  modes: [{
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI,
    extraInfo: {
      type: 'dropdown',
      options: ['Easy', 'Hard']
    }
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'A Classic Game',
  descriptionTag: "Play Tic-Tac-Toe (also called Noughts and Crosses) for  free online. You can either do a single-player game against the computer, a multi-player game against a friend online or share your device and play locally against a friend.",
  instructions: {
    videoId: 'USEjXNCTvcc',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  config: function config() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e("npm.material-ui"), __webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/tictactoe/config.ts"));
  },
  aiConfig: function aiConfig() {
    return Promise.all(/*! import() */[__webpack_require__.e("npm.freeboardgame.org"), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/tictactoe/ai.ts"));
  }
};

/***/ }),

/***/ "./src/games/tictactoe/instructions.md":
/*!*********************************************!*\
  !*** ./src/games/tictactoe/instructions.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Tic-tac-toe is a classic two-player game. This game has a 3x3 grid, and in their turn, each player places their marker (X or O) on a cell in this grid.\n\nIn order to win, a player has to complete a full horizontal, vertical, or diagonal line with their marker. If all cells are filled and no player managed to do this, it is a draw.\n");

/***/ }),

/***/ "./src/games/tictactoe/media/thumbnail.png":
/*!*************************************************!*\
  !*** ./src/games/tictactoe/media/thumbnail.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "376f6c205eadc2c03c42a1a234193a74.png";

/***/ }),

/***/ "./src/metadata.ts":
/*!*************************!*\
  !*** ./src/metadata.ts ***!
  \*************************/
/*! exports provided: getPageMetadata, getBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageMetadata", function() { return getPageMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreadcrumbs", function() { return getBreadcrumbs; });
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games */ "./src/games/index.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var TITLE_PREFIX = 'FreeBoardGame.org - ';
var URL_BASE = 'https://FreeBoardGame.org';
var DEFAULT_METADATA = {
  title: 'FreeBoardGame.org',
  description: "Play board games in your browser for free. Compete against your online friends or play locally. Free and open-source software project.",
  noindex: true
}; // Most specific URLs MUST come first.

var PAGES_METADATA = [{
  name: 'About Us',
  title: TITLE_PREFIX + 'About Us',
  description: 'About FreeBoardGame.org, a free and open-source software project.',
  url: new RegExp('^/about', 'i'),
  link: URL_BASE + '/about'
}, {
  title: TITLE_PREFIX + 'Play Free Board Games Online',
  description: "Play board games in your browser for free. Compete against your online friends or play locally. Free and open-source software project.",
  url: new RegExp('^/$', 'i')
}];

function getGamesPageMetadata() {
  return _games__WEBPACK_IMPORTED_MODULE_0__["GAMES_LIST"].map(function (gameDef) {
    return {
      name: "Play ".concat(gameDef.name),
      title: TITLE_PREFIX + "Play ".concat(gameDef.name, ", ").concat(gameDef.description),
      description: gameDef.descriptionTag,
      url: new RegExp("^/g/".concat(gameDef.code, "$"), 'i'),
      link: "".concat(URL_BASE, "/g/").concat(gameDef.code)
    };
  });
}
/** Given a URL, gets its title. */


var getPageMetadata = function getPageMetadata(url) {
  var allPagesMetadata = [].concat(PAGES_METADATA, _toConsumableArray(getGamesPageMetadata()));
  var metadata = allPagesMetadata.find(function (meta) {
    return meta.url.test(url);
  });

  if (!metadata) {
    return DEFAULT_METADATA;
  }

  return metadata;
};
var getBreadcrumbs = function getBreadcrumbs(url) {
  if (url === '/') {
    var gamePagesMetadata = getGamesPageMetadata();
    var pageElements = gamePagesMetadata.filter(function (pageMetadata) {
      return pageMetadata.name && pageMetadata.link; // check if we have both .name and .link
    }).map(function (pageMetadata) {
      return "<a itemprop=\"url\" href=\"".concat(pageMetadata.link, "\">").concat(pageMetadata.name, "</a>");
    });
    return pageElements.join('\n');
  }
};

/***/ }),

/***/ 0:
/*!*******************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8000 (webpack)/hot/dev-server.js ./src/app.tsx ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gaurav/Desktop/board_games_dev/FreeBoardGame.org/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8000 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8000");
__webpack_require__(/*! /home/gaurav/Desktop/board_games_dev/FreeBoardGame.org/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! /home/gaurav/Desktop/board_games_dev/FreeBoardGame.org/src/app.tsx */"./src/app.tsx");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","npm.freeboardgame.org","npm.material-ui","npm.core-js","npm.babel","npm.react-ga","npm.engine.io-client","npm.react-transition-group","npm.webpack-dev-server","npm.qr.js","npm.socket.io-client","npm.superagent","npm.webpack","npm.socket.io-parser","npm.html-entities","npm.prop-types","npm.scheduler","npm.dom-helpers","npm.engine.io-parser","npm.querystring-es3","npm.has-binary2","npm.path-to-regexp","npm.react-dom","npm.react-is","npm.react","npm.symbol-observable","npm.ttag","npm.url","npm.after","npm.ansi-html","npm.ansi-regex","npm.arraybuffer.slice","npm.babel-polyfill","npm.backo2","npm.base64-arraybuffer","npm.base64-js","npm.blob","npm.buffer","npm.clsx","npm.component-bind","npm.component-emitter","npm.component-inherit","npm.convert-css-length","npm.cookie","npm.copy-to-clipboard","npm.css-vendor","npm.deepmerge","npm.events","npm.fast-safe-stringify","npm.flatted","npm.gud","npm.has-cors","npm.history","npm.hoist-non-react-statics","npm.hyphenate-style-name","npm.ieee754","npm.immer","npm.indexof","npm.is-in-browser","npm.isarray","npm.jss-plugin-camel-case","npm.jss-plugin-default-unit","npm.jss-plugin-global","npm.jss-plugin-nested","npm.jss-plugin-props-sort","npm.jss-plugin-rule-value-function","npm.jss-plugin-vendor-prefixer","npm.jss","npm.loglevel","npm.mini-create-react-context","npm.mousetrap","npm.ms","npm.node-libs-browser","npm.normalize-scroll-left","npm.object-assign","npm.parseqs","npm.parseuri","npm.popper.js","npm.process","npm.qrcode.react","npm.react-cookies","npm.react-loadable","npm.react-router-dom","npm.react-router","npm.redux","npm.regenerator-runtime","npm.resolve-pathname","npm.sockjs-client","npm.strip-ansi","npm.tiny-invariant","npm.tiny-warning","npm.to-array","npm.toggle-selection","npm.value-equal","npm.warning","npm.yeast"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuIHN5bmMgXlxcLlxcLy4qXFwucG9cXC5qc29uJCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvQWJvdXQvQWJvdXRBc3luYy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvQXN5bmMudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvRnJlZUJvYXJkR2FtZUJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9HYW1lL0FsZXJ0TGF5ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9FbmhhbmNlcnMvUmVhY3RHQUVuaGFuY2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9FbmhhbmNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9HYW1lL0ZhY2Vib29rSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9HYW1lL0dhbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lQXN5bmMudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lQm9hcmRXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWUvR2FtZUNhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lSW5mb0FzeW5jLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0dhbWUvR2FtZU1vZGVQaWNrZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvR2FtZS9HYW1lU2hhcmluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9HYW1lL1FyQ29kZUljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvSGVscGVycy9BZGRyZXNzSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcHAvSGVscGVycy9TU1JIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Mb2JieS9MaXN0UGxheWVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Mb2JieS9Mb2JieVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Mb2JieS9OZXdSb29tLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0xvYmJ5L05pY2tuYW1lUHJvbXB0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0xvYmJ5L1FyQ29kZVBvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwL0xvYmJ5L1Jvb20udHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvTWVzc2FnZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAvTWVzc2FnZVBhZ2VDbGFzcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9TY3JvbGxUb1RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9TdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9tZWRpYS9TdmdFcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9tZWRpYS9mYmdfbG9nb193aGl0ZV80OC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvbWUvSG9tZUFzeW5jLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlY2tlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZWNrZXJzL2luc3RydWN0aW9ucy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlY2tlcnMvbWVkaWEvdGh1bWJuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL2luc3RydWN0aW9ucy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvbWVkaWEvdGh1bWJuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2Nvcm5lcnVzL2luc3RydWN0aW9ucy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY29ybmVydXMvbWVkaWEvdGh1bWJuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvZm91cmluYXJvdy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvZm91cmluYXJvdy9pbnN0cnVjdGlvbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2ZvdXJpbmFyb3cvbWVkaWEvdGh1bWJuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL25pbmVtZW5zbW9ycmlzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9uaW5lbWVuc21vcnJpcy9pbnN0cnVjdGlvbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL25pbmVtZW5zbW9ycmlzL21lZGlhL3RodW1ibmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3JldmVyc2kvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3JldmVyc2kvaW5zdHJ1Y3Rpb25zLm1kIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9yZXZlcnNpL21lZGlhL3RodW1ibmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3NlYWJhdHRsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvc2VhYmF0dGxlL2luc3RydWN0aW9ucy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvc2VhYmF0dGxlL21lZGlhL3RodW1ibmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3Rha2VzaXgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3Rha2VzaXgvaW5zdHJ1Y3Rpb25zLm1kIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy90YWtlc2l4L21lZGlhL3RodW1ibmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL3RpY3RhY3RvZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGljdGFjdG9lL2luc3RydWN0aW9ucy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvdGljdGFjdG9lL21lZGlhL3RodW1ibmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFkYXRhLnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiQWJvdXRBc3luYyIsImdldEFzeW5jIiwiUmVhY3RHQSIsImluaXRpYWxpemUiLCJTVVBQT1JURURfTE9DQUxFUyIsIndpdGhTY3JvbGxUb1RvcCIsIldyYXBwZWRDb21wb25lbnQiLCJXcmFwcGVyIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiU2Nyb2xsVG9Ub3AiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9wcyIsIkNvbXBvbmVudCIsIndpdGhHQSIsIlNTUkhlbHBlciIsImlzU1NSIiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsIndpdGhJMThuIiwibG9jYWxlIiwibWF0Y2giLCJwYXJhbXMiLCJFcnJvclBhZ2UiLCJ3aXRoV3JhcHBlcnMiLCJnZXRNZXNzYWdlUGFnZSIsIm5ld1Byb3BzIiwidHJhbnNsYXRpb25zT2JqIiwicmVxdWlyZSIsImFkZExvY2FsZSIsInVzZUxvY2FsZSIsIkJBU0VQQVRIIiwiTWFpbiIsImRvY3VtZW50IiwidGl0bGUiLCJnZXRQYWdlTWV0YWRhdGEiLCJTd2l0Y2giLCJSb3V0ZSIsImV4YWN0IiwicGF0aCIsImNvbXBvbmVudCIsIkhvbWUiLCJBYm91dCIsIkdhbWVJbmZvIiwiR2FtZSIsIk5ld1Jvb20iLCJSb29tIiwibmFtZSIsInJlc29sdmUiLCJMb2FkYWJsZSIsImxvYWRlciIsImxvYWRpbmciLCJNZXNzYWdlIiwiZXJyb3IiLCJBcHAiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIkxpbmsiLCJ0byIsInRleHREZWNvcmF0aW9uIiwiQXBwQmFyIiwicG9zaXRpb24iLCJUb29sYmFyIiwiaGVpZ2h0Iiwic3JjIiwiRmJnTG9nbyIsImFsdCIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50IiwiY29sb3IiLCJjaGlsZHJlbiIsIkFsZXJ0TGF5ZXIiLCJtYWluU3R5bGUiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZCIsInJpZ2h0IiwiekluZGV4IiwiZGlzcGxheSIsInRleHRBbGlnbiIsImFsaWduU3R5bGUiLCJ0cmFuc2Zvcm0iLCJSZWFjdEdBRW5oYW5jZXJFdmVudCIsImdhbWVBcmdzIiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJldmVudCIsImNhdGVnb3J5IiwibGFiZWwiLCJnYW1lQ29kZSIsImRlZmF1bHRFbmhhbmNlcnMiLCJSZWFjdEdBRW5oYW5jZXIiLCJGYWNlYm9va0ljb24iLCJTdmdJY29uIiwiZCIsInN0YXRlIiwicm9vbSIsIm1vZGUiLCJHYW1lTW9kZSIsIk9ubGluZUZyaWVuZCIsImN1cnJlbnRVc2VyIiwibG9hZEFJIiwiQUkiLCJnYW1lRGVmIiwiR0FNRVNfTUFQIiwic2V0U3RhdGUiLCJhaVByb21pc2UiLCJQcm9taXNlIiwiYWlDb25maWciLCJhbGwiLCJjb25maWciLCJ0aGVuIiwicHJvbWlzZXMiLCJkZWZhdWx0IiwiYWkiLCJwcm9taXNlIiwibG9hZCIsImNsZWFyIiwiYWlMZXZlbCIsIm1hdGNoQ29kZSIsInBsYXllcklEIiwiY3JlZGVudGlhbHMiLCJMb2JieVNlcnZpY2UiLCJnZXRDcmVkZW50aWFsIiwicm9vbUlEIiwiY3JlZGVudGlhbCIsInRvU3RyaW5nIiwiTWVzc2FnZVBhZ2VDbGFzcyIsIm1lc3NhZ2UiLCJ2YWxpZEdhbWVNb2RlcyIsIm1vZGVzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInBsYXllcnMiLCJfZ2V0UGxheWVycyIsImNsaWVudENvbmZpZyIsImdhbWUiLCJiZ2lvR2FtZSIsImRlYnVnIiwiYm9hcmQiLCJnYW1lQm9hcmRXcmFwcGVyIiwiYmdpb0JvYXJkIiwiZ2FtZUlEIiwiYWxsRW5oYW5jZXJzIiwiZW5oYW5jZXJzIiwiY29uY2F0IiwiREVGQVVMVF9FTkhBTkNFUlMiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsImJnaW9BSSIsIm11bHRpcGxheWVyIiwic2VydmVyIiwiQWRkcmVzc0hlbHBlciIsImdldFNlcnZlckFkZHJlc3MiLCJDbGllbnQiLCJMb2FkaW5nUGFnZSIsIkxvY2FsRnJpZW5kIiwiR2FtZUFzeW5jIiwiYXJncyIsIkJvYXJkIiwiY2hpbGQiLCJhbGVydCIsImlzQ29ubmVjdGVkIiwiX2dldENvbm5lY3Rpb25Mb3N0Iiwid2lkdGgiLCJHYW1lQ2FyZCIsIm5hdmlnYXRlQnV0dG9uIiwibWFpbkRpdlN0eWxlIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VVUkwiLCJiYXNlQmFkZ2VTdHlsZSIsImJveFNoYWRvdyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpc0xpbmsiLCJib3R0b20iLCJJY29uQnV0dG9uIiwiTmF2aWdhdGVOZXh0SWNvbiIsInBhZGRpbmdUb3AiLCJndXR0ZXJCb3R0b20iLCJmb250V2VpZ2h0IiwiZGVzY3JpcHRpb24iLCJHYW1lSW5mb0FzeW5jIiwiR2FtZU1vZGVQaWNrZXIiLCJfZ2V0TGluayIsImZvcndhcmRSZWYiLCJyZWYiLCJyZWwiLCJfaGFuZGxlTnVtUGxheWVyc1NlbGVjdCIsIm5ld1N0YXRlIiwiZXh0cmFJbmZvIiwidGFyZ2V0IiwidmFsdWUiLCJfaGFuZGxlU2xpZGVyQ2hhbmdlIiwiX2hhbmRsZUNsaWNrU2VsZWN0aW9uIiwib25saW5lIiwibWluUGxheWVycyIsInB1c2giLCJfZ2V0Q2FyZCIsImluZm8iLCJpY29uIiwiQW5kcm9pZEljb24iLCJHcm91cEljb24iLCJXaWZpSWNvbiIsIl9nZXRFeHRyYUluZm8iLCJDYXJkIiwia2V5IiwiQ2FyZEhlYWRlciIsImF2YXRhciIsIkF2YXRhciIsIkNhcmRDb250ZW50IiwiQ2FyZEFjdGlvbnMiLCJCdXR0b24iLCJfZ2V0VXJsIiwibWF4UGxheWVycyIsIl9nZXRFeHRyYUluZm9OdW1QbGF5ZXJzIiwic2xpZGVyIiwiX2dldEV4dHJhSW5mb1NsaWRlciIsImRyb3Bkb3duIiwiX2dldEV4dHJhSW5mb0Ryb3Bkb3duIiwib3B0aW9ucyIsImkiLCJNZW51SXRlbSIsIlBlcnNvbkljb24iLCJTZWxlY3QiLCJfZ2V0RXh0cmFJbmZvVmFsdWUiLCJvbkNoYW5nZSIsImlkIiwibWF4IiwiU2xpZGVyIiwibWluIiwic3RlcCIsImxpc3QiLCJvcHRpb24iLCJpZHgiLCJvbkNsaWNrIiwic2VsZWN0ZWQiLCJNZW51TGlzdCIsInBhZGRpbmdCb3R0b20iLCJjb2RlIiwiR2FtZVNoYXJpbmciLCJzaG93aW5nUXJDb2RlIiwic2VuZEVtYWlsQ2FsbGJhY2siLCJzZW5kRW1haWwiLCJiaW5kIiwic2hhcmVGYWNlYm9va0NhbGxiYWNrIiwic2hhcmVGYWNlYm9vayIsImNvcHlDbGlwYm9hcmRDYWxsYmFjayIsImNvcHlDbGlwYm9hcmQiLCJzaG93UXJDb2RlQ2FsbGJhY2siLCJzaG93UXJDb2RlIiwiUXJDb2RlUG9wdXAiLCJ1cmwiLCJ0b2dnbGVRckNvZGUiLCJUZXh0RmllbGQiLCJkZWZhdWx0VmFsdWUiLCJUb29sdGlwIiwiRW1haWxJY29uIiwiUXJDb2RlSWNvbiIsIkNvbnRlbnRDb3B5SWNvbiIsIm9wZW4iLCJlbmNvZGVVUkkiLCJjb3B5IiwiX3RvZ2dsZVNob3dpbmdRckNvZGUiLCJzY3JvbGxUbyIsIm9sZFN0YXRlIiwib3JpZ2luIiwicGF0aDEiLCJ2aWV3Qm94IiwicHJvY2VzcyIsImhvc3RuYW1lIiwiTGlzdFBsYXllcnMiLCJtZXRhZGF0YSIsInJvb21NZXRhZGF0YSIsInBsYXllcnNMaXN0IiwicGxheWVyIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUF2YXRhciIsIkxpc3RJdGVtVGV4dCIsInByaW1hcnkiLCJMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiIsImVkaXROaWNrbmFtZSIsIkVkaXRJY29uIiwid2FpdGluZ0xpc3QiLCJudW1iZXJPZlBsYXllcnMiLCJsZW5ndGgiLCJBY2Nlc3NUaW1lSWNvbiIsIkxpc3QiLCJzdWJoZWFkZXIiLCJMaXN0U3ViaGVhZGVyIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsImFwcGx5IiwiRkJHX0NSRURFTlRJQUxTX0tFWSIsIkZCR19OSUNLTkFNRV9LRVkiLCJudW1QbGF5ZXJzIiwicmVxdWVzdCIsInBvc3QiLCJzZW5kIiwicmVzcG9uc2UiLCJwbGF5ZXJOYW1lIiwicGxheWVyQ3JlZGVudGlhbHMiLCJzZXRDcmVkZW50aWFsIiwibmV3TmFtZSIsInBsYXllckNyZWRlbnRpYWwiLCJnZXQiLCJmaWx0ZXIiLCJmaW5kIiwibmV4dFJvb21JRCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXhpc3RpbmciLCJuZXdDcmVkZW50aWFscyIsInN0cmluZ2lmeSIsImFyZ3VtZW50cyIsIm5ld1Jvb20iLCJoaXN0b3J5IiwicmVwbGFjZSIsIk5pY2tuYW1lUHJvbXB0IiwibmFtZVRleHRGaWVsZCIsIl9zZXROaWNrbmFtZU9uRW50ZXJCdXR0b24iLCJfbmlja25hbWVJc1ZhbGlkIiwiX29uQ2xpY2siLCJzZXROaWNrbmFtZSIsIl9vbkNoYW5nZSIsIl90b2dnbGVQcm9tcHQiLCJ0b2dnbGVQcm9tcHQiLCJDbGlja0F3YXlMaXN0ZW5lciIsIm9uQ2xpY2tBd2F5IiwibWFyZ2luVG9wIiwid2hpdGVTcGFjZSIsImF1dG9Gb2N1cyIsIm5pY2tuYW1lIiwib25LZXlQcmVzcyIsImRpc2FibGVkIiwiUXJDb2RlIiwiYm94U2l6aW5nIiwic2l6ZSIsInJlbmRlckFzIiwiZ2FtZVJlYWR5IiwiZWRpdGluZ05hbWUiLCJ1cGRhdGVNZXRhZGF0YSIsImdldE5pY2tuYW1lIiwiZ2V0Um9vbU1ldGFkYXRhIiwiam9pblJvb20iLCJfc3RvcFRpbWVyIiwic2V0VGltZW91dCIsIl9nZXROYW1lUHJvbXB0IiwiX3RvZ2dsZUVkaXRpbmdOYW1lIiwiX3NldE5pY2tuYW1lIiwicmVuYW1lVXNlciIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsIl9nZXRHYW1lU2hhcmluZyIsIkZyZWVCb2FyZEdhbWVCYXIiLCJuaWNrbmFtZVByb21wdCIsIk1lc3NhZ2VQYWdlIiwicmVxdWVzdElEIiwiX2FuaW1hdGUiLCJub3ciLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwibGlua0hpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkRhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxpbmtIb21lIiwic3RhdHVzIiwiU3RhdHVzIiwiU3ZnRXJyb3IiLCJDaXJjdWxhclByb2dyZXNzIiwiZ29Ib21lVGV4dCIsInQiLCJocmVmIiwibWFyZ2luIiwiSG9tZUljb24iLCJzdGF0aWNDb250ZXh0Iiwid2l0aFJvdXRlciIsIngxIiwieTEiLCJ4MiIsInkyIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJIb21lQXN5bmMiLCJhcHAiLCJCcm93c2VyUm91dGVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsImNoZWNrZXJzR2FtZURlZiIsIlRodW1ibmFpbCIsImRlc2NyaXB0aW9uVGFnIiwiaW5zdHJ1Y3Rpb25zIiwidmlkZW9JZCIsInRleHQiLCJjaGVzc0dhbWVEZWYiLCJDaGVzc1RodW1ibmFpbCIsImNvcm5lcnVzR2FtZURlZiIsImZvdXJpbmFyb3dHYW1lRGVmIiwiRm91ckluQVJvd1RodW1ibmFpbCIsImNoZXNzIiwic2VhYmF0dGxlIiwic2VhYmF0dGxlR2FtZURlZiIsInRpY3RhY3RvZSIsInRpY3RhY3RvZUdhbWVEZWYiLCJ0YWtlc2l4IiwidGFrZXNpeEdhbWVEZWYiLCJjb3JuZXJ1cyIsIm5pbmVtZW5zbW9ycmlzIiwibmluZW1lbnNtb3JyaXNHYW1lRGVmIiwiY2hlY2tlcnMiLCJyZXZlcnNpIiwicmV2ZXJzaUdhbWVEZWYiLCJmb3VyaW5hcm93IiwiR0FNRVNfTElTVCIsIlNlYWJhdHRsZVRodW1ibmFpbCIsIlRpY1RhY1RvZVRodW1ibmFpbCIsIlRJVExFX1BSRUZJWCIsIlVSTF9CQVNFIiwiREVGQVVMVF9NRVRBREFUQSIsIm5vaW5kZXgiLCJQQUdFU19NRVRBREFUQSIsIlJlZ0V4cCIsImxpbmsiLCJnZXRHYW1lc1BhZ2VNZXRhZGF0YSIsImFsbFBhZ2VzTWV0YWRhdGEiLCJtZXRhIiwidGVzdCIsImdldEJyZWFkY3J1bWJzIiwiZ2FtZVBhZ2VzTWV0YWRhdGEiLCJwYWdlRWxlbWVudHMiLCJwYWdlTWV0YWRhdGEiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0U7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLDBEQUFRLENBQUMsT0FBRCxFQUFVO0FBQUEsU0FBTSxzSEFBTjtBQUFBLENBQVYsQ0FBM0I7QUFDZUQseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TUFBTTZMLGdCQUFnQixhQUFPSixjQUFQLHFCQUEwQkcsb0JBQW9CLEVBQTlDLEVBQXRCO0FBQ0EsTUFBTXhLLFFBQVEsR0FBR3lLLGdCQUFnQixDQUFDN0gsSUFBakIsQ0FBc0IsVUFBQThILElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUM5TCxHQUFMLENBQVMrTCxJQUFULENBQWMvTCxHQUFkLENBQUo7QUFBQSxHQUExQixDQUFqQjs7QUFDQSxNQUFJLENBQUNvQixRQUFMLEVBQWU7QUFDWCxXQUFPbUssZ0JBQVA7QUFDSDs7QUFDRCxTQUFPbkssUUFBUDtBQUNILENBUE07QUFRQSxJQUFNNEssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDaE0sR0FBRCxFQUFTO0FBQ25DLE1BQUlBLEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQ2IsUUFBTWlNLGlCQUFpQixHQUFHTCxvQkFBb0IsRUFBOUM7QUFDQSxRQUFNTSxZQUFZLEdBQUdELGlCQUFpQixDQUNqQ2xJLE1BRGdCLENBQ1QsVUFBQ29JLFlBQUQsRUFBa0I7QUFDMUIsYUFBT0EsWUFBWSxDQUFDeFosSUFBYixJQUFxQndaLFlBQVksQ0FBQ1IsSUFBekMsQ0FEMEIsQ0FDcUI7QUFDbEQsS0FIb0IsRUFJaEJ2VCxHQUpnQixDQUlaLFVBQUMrVCxZQUFELEVBQWtCO0FBQ3ZCLGtEQUFrQ0EsWUFBWSxDQUFDUixJQUEvQyxnQkFBd0RRLFlBQVksQ0FBQ3haLElBQXJFO0FBQ0gsS0FOb0IsQ0FBckI7QUFPQSxXQUFPdVosWUFBWSxDQUFDRSxJQUFiLENBQWtCLElBQWxCLENBQVA7QUFDSDtBQUNKLENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDUCxlIiwiZmlsZSI6IjQ4OWM2MmMzMGViYjE1MDBlMGZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NzLnBvLmpzb25cIjogXCIuL2kxOG4vY3MucG8uanNvblwiLFxuXHRcIi4vZW4ucG8uanNvblwiOiBcIi4vaTE4bi9lbi5wby5qc29uXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vaTE4biBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5wb1xcXFwuanNvbiRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IGdldEFzeW5jIGZyb20gJy4uL0FwcC9Bc3luYyc7XG5jb25zdCBBYm91dEFzeW5jID0gZ2V0QXN5bmMoJ0Fib3V0JywgKCkgPT4gaW1wb3J0KCcuL0Fib3V0JykpO1xuZXhwb3J0IGRlZmF1bHQgQWJvdXRBc3luYztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgR2FtZUluZm8gZnJvbSAnLi9HYW1lL0dhbWVJbmZvQXN5bmMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lL0dhbWVBc3luYyc7XG5pbXBvcnQgeyBOZXdSb29tIH0gZnJvbSAnLi9Mb2JieS9OZXdSb29tJztcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL0xvYmJ5L1Jvb20nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZS9Ib21lQXN5bmMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL0Fib3V0L0Fib3V0QXN5bmMnO1xuaW1wb3J0IGdldE1lc3NhZ2VQYWdlIGZyb20gJy4vTWVzc2FnZVBhZ2UnO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuaW1wb3J0IHsgZ2V0UGFnZU1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEnO1xuaW1wb3J0IFNTUkhlbHBlciBmcm9tICcuL0hlbHBlcnMvU1NSSGVscGVyJztcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tICcuL1Njcm9sbFRvVG9wJztcbmltcG9ydCB7IGFkZExvY2FsZSwgdXNlTG9jYWxlIH0gZnJvbSAndHRhZyc7XG5SZWFjdEdBLmluaXRpYWxpemUoJ1VBLTEwNTM5MTg3OC0xJyk7XG5jb25zdCBTVVBQT1JURURfTE9DQUxFUyA9IFsnZW4nLCAnY3MnXTtcbmNvbnN0IHdpdGhTY3JvbGxUb1RvcCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxUb1RvcCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBXcmFwcGVyO1xufTtcbmNvbnN0IHdpdGhHQSA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGlmICghU1NSSGVscGVyLmlzU1NSKCkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICAgICAgICAgICAgICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59O1xuY29uc3Qgd2l0aEkxOG4gPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGNsYXNzIFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJyB8fCAobG9jYWxlICYmICEobG9jYWxlIGluIFNVUFBPUlRFRF9MT0NBTEVTKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBFcnJvclBhZ2UgPSB3aXRoV3JhcHBlcnMoZ2V0TWVzc2FnZVBhZ2UoJ2Vycm9yJywgJ0ludmFsaWQgTG9jYWxlJykpO1xuICAgICAgICAgICAgICAgIC8vIHBhc3MgbmV3UHJvcHMgaW5zdGVhZCBvZiB0aGlzLnByb3BzIHRvIGF2b2lkIGFuIGluZmluaXRlLWxvb3AgKGJlY2F1c2Ugb2YgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubG9jYWxlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBtYXRjaDogeyBwYXJhbXM6IHsgbG9jYWxlOiAnJyB9IH0gfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JQYWdlLCBPYmplY3QuYXNzaWduKHt9LCBuZXdQcm9wcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICdlbic7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnNPYmogPSByZXF1aXJlKGAuLi8uLi9pMThuLyR7bG9jYWxlfS5wby5qc29uYCk7XG4gICAgICAgICAgICBhZGRMb2NhbGUobG9jYWxlLCB0cmFuc2xhdGlvbnNPYmopO1xuICAgICAgICAgICAgdXNlTG9jYWxlKGxvY2FsZSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59O1xuY29uc3Qgd2l0aFdyYXBwZXJzID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gd2l0aFNjcm9sbFRvVG9wKHdpdGhJMThuKHdpdGhHQShXcmFwcGVkQ29tcG9uZW50KSkpO1xufTtcbmNvbnN0IEJBU0VQQVRIID0gJy86bG9jYWxlKFtBLVphLXpdezJ9KT8nO1xuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIVNTUkhlbHBlci5pc1NTUigpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGdldFBhZ2VNZXRhZGF0YSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLnRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBCQVNFUEFUSCwgY29tcG9uZW50OiB3aXRoV3JhcHBlcnMoSG9tZSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBgJHtCQVNFUEFUSH0vYWJvdXRgLCBjb21wb25lbnQ6IHdpdGhXcmFwcGVycyhBYm91dCkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBgJHtCQVNFUEFUSH0vZy86Z2FtZUNvZGVgLCBjb21wb25lbnQ6IHdpdGhXcmFwcGVycyhHYW1lSW5mbykgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBgJHtCQVNFUEFUSH0vZy86Z2FtZUNvZGUvOm1vZGVgLCBjb21wb25lbnQ6IHdpdGhXcmFwcGVycyhHYW1lKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IGAke0JBU0VQQVRIfS9nLzpnYW1lQ29kZS86bW9kZS86YWlMZXZlbGAsIGNvbXBvbmVudDogd2l0aFdyYXBwZXJzKEdhbWUpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogYCR7QkFTRVBBVEh9L2cvOmdhbWVDb2RlLzptb2RlLzptYXRjaENvZGUvOnBsYXllcklEYCwgY29tcG9uZW50OiB3aXRoV3JhcHBlcnMoR2FtZSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IGAke0JBU0VQQVRIfS9yb29tL25ldy86Z2FtZUNvZGUvOm51bVBsYXllcnNgLCBleGFjdDogdHJ1ZSwgY29tcG9uZW50OiB3aXRoV3JhcHBlcnMoTmV3Um9vbSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IGAke0JBU0VQQVRIfS9yb29tLzpnYW1lQ29kZS86cm9vbUlEYCwgZXhhY3Q6IHRydWUsIGNvbXBvbmVudDogd2l0aFdyYXBwZXJzKFJvb20pIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgY29tcG9uZW50OiB3aXRoV3JhcHBlcnMoZ2V0TWVzc2FnZVBhZ2UoJ2Vycm9yJywgJ05vdCBGb3VuZCcpKSB9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IGdldE1lc3NhZ2VQYWdlIGZyb20gJy4vTWVzc2FnZVBhZ2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IGdldEFzeW5jID0gKG5hbWUsIHJlc29sdmUpID0+IExvYWRhYmxlKHtcbiAgICBsb2FkZXI6IHJlc29sdmUsXG4gICAgbG9hZGluZzogKHByb3BzKSA9PiB7XG4gICAgICAgIGxldCBNZXNzYWdlO1xuICAgICAgICBpZiAocHJvcHMuZXJyb3IpIHtcbiAgICAgICAgICAgIE1lc3NhZ2UgPSBnZXRNZXNzYWdlUGFnZSgnZXJyb3InLCBgRXJyb3IgTG9hZGluZyAke25hbWV9IFBhZ2UuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBNZXNzYWdlID0gZ2V0TWVzc2FnZVBhZ2UoJ2xvYWRpbmcnLCBgTG9hZGluZyAke25hbWV9IFBhZ2UuLi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCBudWxsKTtcbiAgICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCBnZXRBc3luYztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEZiZ0xvZ28gZnJvbSAnLi9tZWRpYS9mYmdfbG9nb193aGl0ZV80OC5wbmcnO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyB0bzogXCIvXCIsIHN0eWxlOiB7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwQmFyLCB7IHBvc2l0aW9uOiBcInN0aWNreVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbGJhciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzdHlsZTogeyBtYXJnaW5SaWdodDogJzhweCcsIGhlaWdodDogJzQ4cHgnIH0sIHNyYzogRmJnTG9nbywgYWx0OiBcIkZiR1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDZcIiwgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSB9LCBcIkZyZWVCb2FyZEdhbWUub3JnXCIpKSkpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jbGFzcyBBbGVydExheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW5TdHlsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LC44NSknLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTAwMSxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhbGlnblN0eWxlID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogbWFpblN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IGFsaWduU3R5bGUgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbGVydExheWVyO1xuIiwiaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuY29uc3QgUmVhY3RHQUVuaGFuY2VyRXZlbnQgPSAoZ2FtZUFyZ3MpID0+ICgpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlICE9PSAnVVBEQVRFJykge1xuICAgICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnUmVhY3RHQUVuaGFuY2VyJyxcbiAgICAgICAgICAgIGxhYmVsOiBnYW1lQXJncy5nYW1lQ29kZSxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLnR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0R0FFbmhhbmNlckV2ZW50O1xuIiwiaW1wb3J0IFJlYWN0R0FFbmhhbmNlciBmcm9tICcuL1JlYWN0R0FFbmhhbmNlcic7XG5jb25zdCBkZWZhdWx0RW5oYW5jZXJzID0gW1JlYWN0R0FFbmhhbmNlcl07XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RW5oYW5jZXJzO1xuIiwiaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY2xhc3MgRmFjZWJvb2tJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTdmdJY29uLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0xNywyVjJIMTdWNkgxNUMxNC4zMSw2IDE0LDYuODEgMTQsNy41VjEwSDE0TDE3LDEwVjE0SDE0VjIySDEwVjE0SDdWMTBIMTBWNkE0LDQgMCAwLDEgMTQsMkgxN1pcIiB9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvL3JlYWN0JztcbmltcG9ydCB7IEdBTUVTX01BUCB9IGZyb20gJy4uLy4uL2dhbWVzJztcbmltcG9ydCB7IGdhbWVCb2FyZFdyYXBwZXIgfSBmcm9tICcuL0dhbWVCb2FyZFdyYXBwZXInO1xuaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tICcuL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBnZXRNZXNzYWdlUGFnZSBmcm9tICcuLi9NZXNzYWdlUGFnZSc7XG5pbXBvcnQgTWVzc2FnZVBhZ2VDbGFzcyBmcm9tICcuLi9NZXNzYWdlUGFnZUNsYXNzJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBERUZBVUxUX0VOSEFOQ0VSUyBmcm9tICcuL0VuaGFuY2Vycyc7XG5pbXBvcnQgQWRkcmVzc0hlbHBlciBmcm9tICcuLi9IZWxwZXJzL0FkZHJlc3NIZWxwZXInO1xuaW1wb3J0IHsgTG9iYnlTZXJ2aWNlIH0gZnJvbSAnLi4vTG9iYnkvTG9iYnlTZXJ2aWNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJvb20pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IEdhbWVNb2RlLk9ubGluZUZyaWVuZDtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvZGUgPSB0aGlzLnByb3BzLnJvb20uZ2FtZUNvZGU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wcm9wcy5yb29tLmN1cnJlbnRVc2VyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubW9kZTtcbiAgICAgICAgICAgIHRoaXMubG9hZEFJID0gdGhpcy5tb2RlID09PSBHYW1lTW9kZS5BSSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvZGUgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5nYW1lQ29kZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVEZWYgPSBHQU1FU19NQVBbdGhpcy5nYW1lQ29kZV07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lRGVmKSB7XG4gICAgICAgICAgICBsZXQgYWlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRBSSkge1xuICAgICAgICAgICAgICAgIGFpUHJvbWlzZSA9IHRoaXMuZ2FtZURlZi5haUNvbmZpZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLmdhbWVEZWYuY29uZmlnKCksIGFpUHJvbWlzZV0pLnRoZW4oKHByb21pc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHByb21pc2VzWzBdLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIGFpOiB0aGlzLmxvYWRBSSA/IHByb21pc2VzWzFdLmRlZmF1bHQgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lRGVmKSB7XG4gICAgICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLmxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBhaUxldmVsLCBtYXRjaENvZGUsIHBsYXllcklELCBjcmVkZW50aWFscztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gpIHtcbiAgICAgICAgICAgIGFpTGV2ZWwgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5haUxldmVsO1xuICAgICAgICAgICAgbWF0Y2hDb2RlID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWF0Y2hDb2RlO1xuICAgICAgICAgICAgcGxheWVySUQgPSB0aGlzLm1vZGUgPT09IEdhbWVNb2RlLkFJID8gJzAnIDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucGxheWVySUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjcmVkZW50aWFscyA9IExvYmJ5U2VydmljZS5nZXRDcmVkZW50aWFsKHRoaXMucHJvcHMucm9vbS5yb29tSUQpLmNyZWRlbnRpYWw7XG4gICAgICAgICAgICBwbGF5ZXJJRCA9IHRoaXMuY3VycmVudFVzZXIucGxheWVySUQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG1hdGNoQ29kZSA9IHRoaXMucHJvcHMucm9vbS5yb29tSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdhbWVEZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2VQYWdlQ2xhc3MsIHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ0dhbWUgTm90IEZvdW5kJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWxpZEdhbWVNb2RlcyA9IHRoaXMuZ2FtZURlZi5tb2Rlcy5tYXAobW9kZSA9PiBtb2RlLm1vZGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGlmICghdmFsaWRHYW1lTW9kZXMuaW5jbHVkZXModGhpcy5tb2RlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlUGFnZUNsYXNzLCB7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdJbnZhbGlkIEdhbWUgTW9kZScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgdGhpcy5zdGF0ZS5jb25maWcpIHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVBcmdzID0ge1xuICAgICAgICAgICAgICAgIGdhbWVDb2RlOiB0aGlzLmdhbWVDb2RlLFxuICAgICAgICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBtYXRjaENvZGUsXG4gICAgICAgICAgICAgICAgcGxheWVyczogdGhpcy5fZ2V0UGxheWVycygpLFxuICAgICAgICAgICAgICAgIHBsYXllcklELFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLnN0YXRlLmNvbmZpZy5iZ2lvR2FtZSxcbiAgICAgICAgICAgICAgICBkZWJ1ZzogdGhpcy5zdGF0ZS5jb25maWcuZGVidWcgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZ2V0TWVzc2FnZVBhZ2UoJ2xvYWRpbmcnLCAnQ29ubmVjdGluZy4uLicpLFxuICAgICAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmRXcmFwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ6IHRoaXMuc3RhdGUuY29uZmlnLmJnaW9Cb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUFyZ3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgZ2FtZUlEOiBtYXRjaENvZGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYWxsRW5oYW5jZXJzID0gdGhpcy5zdGF0ZS5jb25maWcuZW5oYW5jZXJzXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmNvbmZpZy5lbmhhbmNlcnMuY29uY2F0KERFRkFVTFRfRU5IQU5DRVJTKVxuICAgICAgICAgICAgICAgIDogREVGQVVMVF9FTkhBTkNFUlM7XG4gICAgICAgICAgICBjb25zdCBlbmhhbmNlcnMgPSBhbGxFbmhhbmNlcnMubWFwKChlbmhhbmNlcikgPT4gZW5oYW5jZXIoZ2FtZUFyZ3MpKTtcbiAgICAgICAgICAgIGNsaWVudENvbmZpZy5lbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5lbmhhbmNlcnMpO1xuICAgICAgICAgICAgY29uc3QgYWkgPSB0aGlzLnN0YXRlLmFpO1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZEFJICYmIGFpKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLmFpID0gYWkuYmdpb0FJKGFpTGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gR2FtZU1vZGUuT25saW5lRnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50Q29uZmlnLm11bHRpcGxheWVyID0geyBzZXJ2ZXI6IEFkZHJlc3NIZWxwZXIuZ2V0U2VydmVyQWRkcmVzcygpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBBcHAgPSBDbGllbnQoY2xpZW50Q29uZmlnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IEdhbWVNb2RlLk9ubGluZUZyaWVuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgeyBnYW1lSUQ6IG1hdGNoQ29kZSwgcGxheWVySUQ6IHBsYXllcklELCBjcmVkZW50aWFsczogY3JlZGVudGlhbHMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHsgZ2FtZUlEOiBtYXRjaENvZGUsIHBsYXllcklEOiBwbGF5ZXJJRCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IExvYWRpbmdQYWdlID0gZ2V0TWVzc2FnZVBhZ2UoJ2xvYWRpbmcnLCBgRG93bmxvYWRpbmcgJHt0aGlzLmdhbWVEZWYubmFtZX0uLi5gKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdQYWdlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IEVycm9yUGFnZSA9IGdldE1lc3NhZ2VQYWdlKCdlcnJvcicsIGBGYWlsZWQgdG8gZG93bmxvYWQgJHt0aGlzLmdhbWVEZWYubmFtZX0uYCk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvclBhZ2UsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRQbGF5ZXJzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICAgICAgY2FzZSBHYW1lTW9kZS5PbmxpbmVGcmllbmQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucm9vbS5wbGF5ZXJzO1xuICAgICAgICAgICAgY2FzZSBHYW1lTW9kZS5BSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gW3sgcGxheWVySUQ6IDAsIG5hbWU6ICdZb3UnLCByb29tSUQ6ICcnIH0sIHsgcGxheWVySUQ6IDEsIG5hbWU6ICdDb21wdXRlcicsIHJvb21JRDogJycgfV07XG4gICAgICAgICAgICBjYXNlIEdhbWVNb2RlLkxvY2FsRnJpZW5kOlxuICAgICAgICAgICAgICAgIHJldHVybiBbeyBwbGF5ZXJJRDogMCwgbmFtZTogJ1BsYXllciAxJywgcm9vbUlEOiAnJyB9LCB7IHBsYXllcklEOiAxLCBuYW1lOiAnUGxheWVyIDInLCByb29tSUQ6ICcnIH1dO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGdldEFzeW5jIGZyb20gJy4uL0FzeW5jJztcbmNvbnN0IEdhbWVBc3luYyA9IGdldEFzeW5jKCdHYW1lJywgKCkgPT4gaW1wb3J0KCcuL0dhbWUnKSk7XG5leHBvcnQgZGVmYXVsdCBHYW1lQXN5bmM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsZXJ0TGF5ZXIgZnJvbSAnLi9BbGVydExheWVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuZXhwb3J0IGZ1bmN0aW9uIGdhbWVCb2FyZFdyYXBwZXIoYXJncykge1xuICAgIGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGdhbWVBcmdzOiBhcmdzLmdhbWVBcmdzIH0pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KGFyZ3MuYm9hcmQsIHByb3BzKTtcbiAgICAgICAgICAgIGxldCBhbGVydDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ID0gdGhpcy5fZ2V0Q29ubmVjdGlvbkxvc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWxlcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9IH0sXG4gICAgICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICAgICAgYWxlcnQpKTtcbiAgICAgICAgfVxuICAgICAgICBfZ2V0Q29ubmVjdGlvbkxvc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnRMYXllciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNFwiIH0sIFwiQ29ubmVjdGlvbiBsb3N0XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIgfSwgXCJUcnlpbmcgdG8gY29ubmVjdC4uLlwiKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCb2FyZDtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBOYXZpZ2F0ZU5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5leHBvcnQgY2xhc3MgR2FtZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdmlnYXRlQnV0dG9uID0gbnVsbDtcbiAgICAgICAgY29uc3QgbWFpbkRpdlN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzI1MHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdsZWZ0IGNlbnRlcicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnByb3BzLmdhbWUuaW1hZ2VVUkx9KWAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJhc2VCYWRnZVN0eWxlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCknLFxuICAgICAgICAgICAgcGFkZGluZzogJzBweCA4cHgnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNMaW5rKSB7XG4gICAgICAgICAgICBtYWluRGl2U3R5bGUuYm94U2hhZG93ID0gJzAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKSc7XG4gICAgICAgICAgICBtYWluRGl2U3R5bGUuYm9yZGVyUmFkaXVzID0gJzhweCc7XG4gICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvbiA9IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGJhc2VCYWRnZVN0eWxlLCB7IGJvdHRvbTogJzEycHgnLCByaWdodDogJzhweCcsIGJvcmRlclJhZGl1czogJzMycHgnLCBwYWRkaW5nOiAnMCcgfSkgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgXCJhcmlhLWxhYmVsXCI6IFwiTmV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGVOZXh0SWNvbiwgbnVsbCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IG1haW5EaXZTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBiYXNlQmFkZ2VTdHlsZSwgeyB0b3A6ICcxMnB4JywgbGVmdDogJzhweCcsIHBhZGRpbmdUb3A6ICc0cHgnIH0pIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IGd1dHRlckJvdHRvbTogZmFsc2UsIHZhcmlhbnQ6IFwiaDRcIiwgY29tcG9uZW50OiBcImg0XCIsIHN0eWxlOiB7IGZvbnRXZWlnaHQ6IDMwMCB9IH0sIHRoaXMucHJvcHMuZ2FtZS5uYW1lKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGJhc2VCYWRnZVN0eWxlLCB7IGJvdHRvbTogJzEycHgnLCBsZWZ0OiAnOHB4JyB9KSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyBndXR0ZXJCb3R0b206IGZhbHNlLCB2YXJpYW50OiBcIm92ZXJsaW5lXCIsIGNvbXBvbmVudDogXCJwXCIgfSwgdGhpcy5wcm9wcy5nYW1lLmRlc2NyaXB0aW9uKSksXG4gICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvbikpO1xuICAgIH1cbn1cbiIsImltcG9ydCBnZXRBc3luYyBmcm9tICcuLi9Bc3luYyc7XG5jb25zdCBHYW1lSW5mb0FzeW5jID0gZ2V0QXN5bmMoJ0dhbWUgSW5mbycsICgpID0+IGltcG9ydCgnLi9HYW1lSW5mbycpKTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVJbmZvQXN5bmM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuZHJvaWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BbmRyb2lkJztcbmltcG9ydCBHcm91cEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dyb3VwJztcbmltcG9ydCBXaWZpSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2lmaSc7XG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgdmFyIEdhbWVNb2RlO1xuKGZ1bmN0aW9uIChHYW1lTW9kZSkge1xuICAgIEdhbWVNb2RlW1wiQUlcIl0gPSBcIkFJXCI7XG4gICAgR2FtZU1vZGVbXCJPbmxpbmVGcmllbmRcIl0gPSBcIm9ubGluZVwiO1xuICAgIEdhbWVNb2RlW1wiTG9jYWxGcmllbmRcIl0gPSBcImxvY2FsXCI7XG59KShHYW1lTW9kZSB8fCAoR2FtZU1vZGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIEdhbWVNb2RlUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuX2dldExpbmsgPSAodG8pID0+IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogdG8sIHJlbDogXCJub2ZvbGxvd1wiIH0sIHByb3BzLCB7IHJlZjogcmVmIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU51bVBsYXllcnNTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBleHRyYUluZm86IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXh0cmFJbmZvKSB9KTtcbiAgICAgICAgICAgIG5ld1N0YXRlLmV4dHJhSW5mb1tHYW1lTW9kZS5PbmxpbmVGcmllbmRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZVNsaWRlckNoYW5nZSA9IChtb2RlKSA9PiAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgZXh0cmFJbmZvOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4dHJhSW5mbykgfSk7XG4gICAgICAgICAgICBuZXdTdGF0ZS5leHRyYUluZm9bbW9kZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVDbGlja1NlbGVjdGlvbiA9IChtb2RlLCB2YWx1ZSkgPT4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IGV4dHJhSW5mbzogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5leHRyYUluZm8pIH0pO1xuICAgICAgICAgICAgbmV3U3RhdGUuZXh0cmFJbmZvW21vZGVdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZXh0cmFJbmZvOiB7IG9ubGluZTogdGhpcy5wcm9wcy5nYW1lRGVmLm1pblBsYXllcnMgfSB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbW9kZSBvZiB0aGlzLnByb3BzLmdhbWVEZWYubW9kZXMpIHtcbiAgICAgICAgICAgIG1vZGVzLnB1c2godGhpcy5fZ2V0Q2FyZChtb2RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJzdWJ0aXRsZTFcIiwgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAnMTZweCcgfSB9LCBcIkNob29zZSBnYW1lIG1vZGVcIiksXG4gICAgICAgICAgICBtb2RlcykpO1xuICAgIH1cbiAgICBfZ2V0Q2FyZChpbmZvKSB7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgaWNvbjtcbiAgICAgICAgc3dpdGNoIChpbmZvLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZU1vZGUuQUk6XG4gICAgICAgICAgICAgICAgdGl0bGUgPSAnQ29tcHV0ZXIgKEFJKSc7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnUGxheSBhZ2FpbnN0IHRoZSBjb21wdXRlciBpbiB5b3VyIGJyb3dzZXIuJztcbiAgICAgICAgICAgICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChBbmRyb2lkSWNvbiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVNb2RlLkxvY2FsRnJpZW5kOlxuICAgICAgICAgICAgICAgIHRpdGxlID0gJ0xvY2FsIEZyaWVuZCc7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnU2hhcmUgeW91ciBkZXZpY2UgYW5kIHBsYXkgYWdhaW5zdCBhIGZyaWVuZCBsb2NhbGx5Lic7XG4gICAgICAgICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXBJY29uLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZU1vZGUuT25saW5lRnJpZW5kOlxuICAgICAgICAgICAgICAgIHRpdGxlID0gJ09ubGluZSBGcmllbmQnO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ1NoYXJlIGEgbGluayBhbmQgcGxheSBhZ2FpbnN0IGEgZnJpZW5kIG9ubGluZS4nO1xuICAgICAgICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZmlJY29uLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRyYUluZm8gPSB0aGlzLl9nZXRFeHRyYUluZm8oaW5mbyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IGtleTogdGl0bGUsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogJzE2cHgnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZEhlYWRlciwgeyBhdmF0YXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCB7IFwiYXJpYS1sYWJlbFwiOiB0aXRsZSB9LCBpY29uKSwgdGl0bGU6IHRpdGxlIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgY29tcG9uZW50OiBcInBcIiB9LCBkZXNjcmlwdGlvbikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQWN0aW9ucywgbnVsbCxcbiAgICAgICAgICAgICAgICBleHRyYUluZm8sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgXCJkYXRhLXRlc3RpZFwiOiBcInBsYXlCdXR0b25cIiwgY29tcG9uZW50OiB0aGlzLl9nZXRMaW5rKHRoaXMuX2dldFVybChpbmZvKSksIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgc3R5bGU6IHsgbWFyZ2luTGVmdDogJ2F1dG8nIH0gfSwgXCJQbGF5XCIpKSkpO1xuICAgIH1cbiAgICBfZ2V0RXh0cmFJbmZvVmFsdWUoaW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHRyYUluZm9baW5mby5tb2RlXSB8fCAxO1xuICAgIH1cbiAgICBfZ2V0RXh0cmFJbmZvKGluZm8pIHtcbiAgICAgICAgaWYgKGluZm8ubW9kZSA9PSBHYW1lTW9kZS5PbmxpbmVGcmllbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmdhbWVEZWYubWluUGxheWVycyA8IHRoaXMucHJvcHMuZ2FtZURlZi5tYXhQbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEV4dHJhSW5mb051bVBsYXllcnMoaW5mbywgdGhpcy5wcm9wcy5nYW1lRGVmLm1pblBsYXllcnMsIHRoaXMucHJvcHMuZ2FtZURlZi5tYXhQbGF5ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5mby5leHRyYUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhSW5mbyA9IGluZm8uZXh0cmFJbmZvO1xuICAgICAgICAgICAgaWYgKGV4dHJhSW5mby50eXBlID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGV4dHJhSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RXh0cmFJbmZvU2xpZGVyKGluZm8sIHNsaWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChleHRyYUluZm8udHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZXh0cmFJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRFeHRyYUluZm9Ecm9wZG93bihpbmZvLCBkcm9wZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIF9nZXRFeHRyYUluZm9OdW1QbGF5ZXJzKGluZm8sIG1pblBsYXllcnMsIG1heFBsYXllcnMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gbWluUGxheWVyczsgaSA8PSBtYXhQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IHZhbHVlOiBpLCBrZXk6IGkgfSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIFwiIFBsYXllcnNcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogJzhweCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQZXJzb25JY29uLCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICc4cHgnLCBwYWRkaW5nOiAnMCA4cHgnIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogdGhpcy5fZ2V0RXh0cmFJbmZvVmFsdWUoaW5mbyksIG9uQ2hhbmdlOiB0aGlzLl9oYW5kbGVOdW1QbGF5ZXJzU2VsZWN0IH0sIG9wdGlvbnMpKSk7XG4gICAgfVxuICAgIF9nZXRFeHRyYUluZm9TbGlkZXIoaW5mbywgc2xpZGVyKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0RXh0cmFJbmZvVmFsdWUoaW5mbyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogJzE4cHgnLCB3aWR0aDogJzgwJScgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IGlkOiBcImxhYmVsXCIsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogJzhweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiRGlmZmljdWx0eSBcIixcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBcIi9cIixcbiAgICAgICAgICAgICAgICBzbGlkZXIubWF4KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVyLCB7IHZhbHVlOiB2YWx1ZSwgbWluOiBzbGlkZXIubWluLCBtYXg6IHNsaWRlci5tYXgsIHN0ZXA6IDEsIG9uQ2hhbmdlOiB0aGlzLl9oYW5kbGVTbGlkZXJDaGFuZ2UoaW5mby5tb2RlKSB9KSkpO1xuICAgIH1cbiAgICBfZ2V0RXh0cmFJbmZvRHJvcGRvd24oaW5mbywgZHJvcGRvd24pIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRyb3Bkb3duLm9wdGlvbnMubWFwKChvcHRpb24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsgb25DbGljazogdGhpcy5faGFuZGxlQ2xpY2tTZWxlY3Rpb24oaW5mby5tb2RlLCBpZHgpLCBrZXk6IG9wdGlvbiwgdmFsdWU6IG9wdGlvbiwgc2VsZWN0ZWQ6IHRoaXMuX2dldEV4dHJhSW5mb1ZhbHVlKGluZm8pID09PSBpZHggfSwgb3B0aW9uKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIH0gfSwgbGlzdCkpKTtcbiAgICB9XG4gICAgX2dldFVybChpbmZvKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBpbmZvLm1vZGU7XG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSBHYW1lTW9kZS5BSTpcbiAgICAgICAgICAgICAgICBpZiAoaW5mby5leHRyYUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAvZy8ke3RoaXMucHJvcHMuZ2FtZURlZi5jb2RlfS9BSS8ke3RoaXMuX2dldEV4dHJhSW5mb1ZhbHVlKGluZm8pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYC9nLyR7dGhpcy5wcm9wcy5nYW1lRGVmLmNvZGV9L0FJYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEdhbWVNb2RlLkxvY2FsRnJpZW5kOlxuICAgICAgICAgICAgICAgIHJldHVybiBgL2cvJHt0aGlzLnByb3BzLmdhbWVEZWYuY29kZX0vbG9jYWxgO1xuICAgICAgICAgICAgY2FzZSBHYW1lTW9kZS5PbmxpbmVGcmllbmQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvcm9vbS9uZXcvJHt0aGlzLnByb3BzLmdhbWVEZWYuY29kZX0vJHt0aGlzLl9nZXRFeHRyYUluZm9WYWx1ZShpbmZvKX1gO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBFbWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsJztcbmltcG9ydCBDb250ZW50Q29weUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbGVDb3B5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuL0ZhY2Vib29rSWNvbic7XG5pbXBvcnQgUXJDb2RlSWNvbiBmcm9tICcuL1FyQ29kZUljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgQWxlcnRMYXllciBmcm9tICcuL0FsZXJ0TGF5ZXInO1xuaW1wb3J0IHsgUXJDb2RlUG9wdXAgfSBmcm9tICcuLi9Mb2JieS9RckNvZGVQb3B1cCc7XG5leHBvcnQgY2xhc3MgR2FtZVNoYXJpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2hvd2luZ1FyQ29kZTogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5zZW5kRW1haWxDYWxsYmFjayA9IHRoaXMuc2VuZEVtYWlsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hhcmVGYWNlYm9va0NhbGxiYWNrID0gdGhpcy5zaGFyZUZhY2Vib29rLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29weUNsaXBib2FyZENhbGxiYWNrID0gdGhpcy5jb3B5Q2xpcGJvYXJkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd1FyQ29kZUNhbGxiYWNrID0gdGhpcy5zaG93UXJDb2RlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dpbmdRckNvZGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydExheWVyLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXJDb2RlUG9wdXAsIHsgdXJsOiB0aGlzLl9nZXRMaW5rKCksIHRvZ2dsZVFyQ29kZTogdGhpcy5zaG93UXJDb2RlQ2FsbGJhY2sgfSkpKSA6IG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206ICcxNnB4JyB9LCB2YXJpYW50OiBcImg1XCIsIGNvbXBvbmVudDogXCJoMlwiIH0sIFwiSW52aXRlIFlvdXIgRnJpZW5kc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJyB9LCBkZWZhdWx0VmFsdWU6IHRoaXMuX2dldExpbmsoKSwgbGFiZWw6IFwiTGlua1wiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRBY3Rpb25zLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgdGl0bGU6IFwiU2VuZCBsaW5rIGJ5IGUtbWFpbFwiLCBcImFyaWEtbGFiZWxcIjogXCJFLW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IG9uQ2xpY2s6IHRoaXMuc2VuZEVtYWlsQ2FsbGJhY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVtYWlsSWNvbiwgbnVsbCkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IHRpdGxlOiBcIlNoYXJlIG9uIEZhY2Vib29rXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkZhY2Vib29rXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBvbkNsaWNrOiB0aGlzLnNoYXJlRmFjZWJvb2tDYWxsYmFjayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFjZWJvb2tJY29uLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgdGl0bGU6IFwiU2hvdyBRUiBjb2RlXCIsIFwiYXJpYS1sYWJlbFwiOiBcIlFSIGNvZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IG9uQ2xpY2s6IHRoaXMuc2hvd1FyQ29kZUNhbGxiYWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRckNvZGVJY29uLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6IHRoaXMuY29weUNsaXBib2FyZENhbGxiYWNrLCBzdHlsZTogeyBtYXJnaW5MZWZ0OiAnYXV0bycgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50Q29weUljb24sIHsgXCJhcmlhLWxhYmVsXCI6IFwiQ29weVwiLCBzdHlsZTogeyBtYXJnaW5SaWdodDogJzhweCcgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29weSBMaW5rXCIpKSkpKTtcbiAgICB9XG4gICAgc2VuZEVtYWlsKCkge1xuICAgICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnR2FtZVNoYXJpbmcnLFxuICAgICAgICAgICAgYWN0aW9uOiAnc2VuZEVtYWlsJyxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmdhbWVDb2RlLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYXRpb24uYXNzaWduKCdtYWlsdG86P2JvZHk9JyArIHRoaXMuX2dldExpbmsoKSk7XG4gICAgfVxuICAgIHNoYXJlRmFjZWJvb2soKSB7XG4gICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdHYW1lU2hhcmluZycsXG4gICAgICAgICAgICBhY3Rpb246ICdzaGFyZUZhY2Vib29rJyxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmdhbWVDb2RlLFxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyBlbmNvZGVVUkkodGhpcy5fZ2V0TGluaygpKSk7XG4gICAgfVxuICAgIGNvcHlDbGlwYm9hcmQoKSB7XG4gICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdHYW1lU2hhcmluZycsXG4gICAgICAgICAgICBhY3Rpb246ICdjb3B5Q2xpcGJvYXJkJyxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmdhbWVDb2RlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29weSh0aGlzLl9nZXRMaW5rKCkpO1xuICAgICAgICBhbGVydCgnTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkJyk7XG4gICAgfVxuICAgIHNob3dRckNvZGUoKSB7XG4gICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdHYW1lU2hhcmluZycsXG4gICAgICAgICAgICBhY3Rpb246ICdzaG93UXJDb2RlJyxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmdhbWVDb2RlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlU2hvd2luZ1FyQ29kZSgpO1xuICAgIH1cbiAgICBfdG9nZ2xlU2hvd2luZ1FyQ29kZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dpbmdRckNvZGUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+IChPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZSwgeyBzaG93aW5nUXJDb2RlOiAhdGhpcy5zdGF0ZS5zaG93aW5nUXJDb2RlIH0pKSk7XG4gICAgfVxuICAgIF9nZXRMaW5rKCkge1xuICAgICAgICBjb25zdCBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgICBjb25zdCBnYW1lQ29kZSA9IHRoaXMucHJvcHMuZ2FtZUNvZGU7XG4gICAgICAgIGNvbnN0IHJvb21JRCA9IHRoaXMucHJvcHMucm9vbUlEO1xuICAgICAgICByZXR1cm4gYCR7b3JpZ2lufS9yb29tLyR7Z2FtZUNvZGV9LyR7cm9vbUlEfWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY2xhc3MgUXJDb2RlSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXRoMSA9IGBNNzYuNSAyODAuNWg1MXY1MWgtNTF2LTUxbTIwNC0xNTNoNTF2MTAyaC01MXYtMTAybS01MSAxNTNoMTAydjEwMmgtNTF2LTUxaC01MXYtNTFtMTUzIDBoNTF2NTFoNTF2LTUxaDUxdjUxaC01MXY1MWg1MXYxMDJoLTUxdjUxaC01MXYtNTFoLTEwMnY1MWgtNTF2LTEwMmgxMDJ2LTUxaDUxdi01MWgtNTF2LTUxbTEwMiAyMDR2LTEwMmgtNTF2MTAyaDUxbS0xMDItNDA4aDE1M3YxNTNoLTE1M3YtMTUzbTUxIDUxdjUxaDUxdi01MWgtNTFtLTM1Ny01MWgxNTN2MTUzaC0xNTN2LTE1M201MSA1MXY1MWg1MXYtNTFoLTUxbS01MSAyNTVoMTUzdjE1M2gtMTUzdi0xNTNtNTEgNTF2NTFoNTF2LTUxem0wIDBgO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgeyB2aWV3Qm94OiBcIjAgMCA2MTIgNjEyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogcGF0aDEgfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBRckNvZGVJY29uO1xuIiwiaW1wb3J0IFNTUkhlbHBlciBmcm9tICcuL1NTUkhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzSGVscGVyIHtcbiAgICAvKiogR2V0cyBiZ2lvIGhvc3Q6cG9ydCBhZGRyZXNzLiAqL1xuICAgIHN0YXRpYyBnZXRTZXJ2ZXJBZGRyZXNzKCkge1xuICAgICAgICBpZiAoIVNTUkhlbHBlci5pc1NTUigpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuQkdJT19TRVJWRVJfVVJMIHx8IGBodHRwOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OjgwMDFgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gUmV0dXJucyB0cnVlIGlmIFNTUiBpcyByZW5kZXJpbmcgdGhlIHBhZ2UsIGVsc2UgZmFsc2UuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTU1JIZWxwZXIge1xuICAgIHN0YXRpYyBpc1NTUigpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJztcbmltcG9ydCBBY2Nlc3NUaW1lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjZXNzVGltZSc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsIEF2YXRhciwgTGlzdEl0ZW1UZXh0LCBMaXN0U3ViaGVhZGVyLCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5leHBvcnQgY2xhc3MgTGlzdFBsYXllcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLnByb3BzLnJvb21NZXRhZGF0YTtcbiAgICAgICAgY29uc3QgcGxheWVyc0xpc3QgPSBtZXRhZGF0YS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBrZXk6IGBwbGF5ZXItJHtpZHh9YCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1BdmF0YXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQZXJzb25JY29uLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IHBsYXllci5uYW1lIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IFwiZGF0YS10ZXN0aWRcIjogXCJlZGl0Tmlja25hbWVcIiwgb25DbGljazogdGhpcy5wcm9wcy5lZGl0Tmlja25hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdEljb24sIG51bGwpKSkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdhaXRpbmdMaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0YWRhdGEubnVtYmVyT2ZQbGF5ZXJzIC0gcGxheWVyc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHdhaXRpbmdMaXN0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBrZXk6IGB3YWl0aW5nLSR7aX1gIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbUF2YXRhciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFjY2Vzc1RpbWVJY29uLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCBcIldhaXRpbmcgZm9yIHBsYXllci4uLlwiKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdCwgeyBzdWJoZWFkZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFN1YmhlYWRlciwgbnVsbCwgXCJQbGF5ZXJzXCIpIH0sXG4gICAgICAgICAgICAgICAgcGxheWVyc0xpc3QsXG4gICAgICAgICAgICAgICAgd2FpdGluZ0xpc3QpKSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQWRkcmVzc0hlbHBlciBmcm9tICcuLi9IZWxwZXJzL0FkZHJlc3NIZWxwZXInO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG5pbXBvcnQgU1NSSGVscGVyIGZyb20gJy4uL0hlbHBlcnMvU1NSSGVscGVyJztcbmNvbnN0IEZCR19DUkVERU5USUFMU19LRVkgPSAnZmJnQ3JlZGVudGlhbHMnO1xuY29uc3QgRkJHX05JQ0tOQU1FX0tFWSA9ICdmYmdOaWNrbmFtZSc7XG5leHBvcnQgY2xhc3MgTG9iYnlTZXJ2aWNlIHtcbiAgICBzdGF0aWMgbmV3Um9vbShnYW1lQ29kZSwgbnVtUGxheWVycykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgLnBvc3QoYCR7QWRkcmVzc0hlbHBlci5nZXRTZXJ2ZXJBZGRyZXNzKCl9L2dhbWVzLyR7Z2FtZUNvZGV9L2NyZWF0ZWApXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBudW1QbGF5ZXJzIH0pO1xuICAgICAgICAgICAgY29uc3Qgcm9vbUlEID0gcmVzcG9uc2UuYm9keS5nYW1lSUQ7XG4gICAgICAgICAgICByZXR1cm4gcm9vbUlEO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGpvaW5Sb29tKGdhbWVDb2RlLCBwbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgcmVxdWVzdFxuICAgICAgICAgICAgICAgIC5wb3N0KGAke0FkZHJlc3NIZWxwZXIuZ2V0U2VydmVyQWRkcmVzcygpfS9nYW1lcy8ke2dhbWVDb2RlfS8ke3BsYXllci5yb29tSUR9L2pvaW5gKVxuICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJJRDogcGxheWVyLnBsYXllcklELFxuICAgICAgICAgICAgICAgIHBsYXllck5hbWU6IHBsYXllci5uYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFsID0gcmVzcG9uc2UuYm9keS5wbGF5ZXJDcmVkZW50aWFscztcbiAgICAgICAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbChwbGF5ZXIsIGNyZWRlbnRpYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHJlbmFtZVVzZXIoZ2FtZUNvZGUsIHBsYXllciwgbmV3TmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ3JlZGVudGlhbCA9IHRoaXMuZ2V0Q3JlZGVudGlhbChwbGF5ZXIucm9vbUlEKTtcbiAgICAgICAgICAgIHlpZWxkIHJlcXVlc3QucG9zdChgJHtBZGRyZXNzSGVscGVyLmdldFNlcnZlckFkZHJlc3MoKX0vZ2FtZXMvJHtnYW1lQ29kZX0vJHtwbGF5ZXIucm9vbUlEfS9yZW5hbWVgKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJJRDogcGxheWVyLnBsYXllcklELFxuICAgICAgICAgICAgICAgIHBsYXllckNyZWRlbnRpYWxzOiBwbGF5ZXJDcmVkZW50aWFsLmNyZWRlbnRpYWwsXG4gICAgICAgICAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFJvb21NZXRhZGF0YShnYW1lQ29kZSwgcm9vbUlEKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHJlcXVlc3QuZ2V0KGAke0FkZHJlc3NIZWxwZXIuZ2V0U2VydmVyQWRkcmVzcygpfS9nYW1lcy8ke2dhbWVDb2RlfS8ke3Jvb21JRH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSByZXNwb25zZS5ib2R5O1xuICAgICAgICAgICAgY29uc3QgcGxheWVycyA9IGJvZHkucGxheWVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLm5hbWUpXG4gICAgICAgICAgICAgICAgLm1hcCgocGxheWVyKSA9PiAoe1xuICAgICAgICAgICAgICAgIHBsYXllcklEOiBwbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcGxheWVyLm5hbWUsXG4gICAgICAgICAgICAgICAgcm9vbUlELFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ3JlZGVudGlhbCA9IHRoaXMuZ2V0Q3JlZGVudGlhbChyb29tSUQpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRVc2VyO1xuICAgICAgICAgICAgaWYgKHBsYXllckNyZWRlbnRpYWwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlciA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIucGxheWVySUQgPT09IHBsYXllckNyZWRlbnRpYWwucGxheWVySUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgcGxheWVycywgZ2FtZUNvZGUsIHJvb21JRCwgY3VycmVudFVzZXIsIG51bWJlck9mUGxheWVyczogYm9keS5wbGF5ZXJzLmxlbmd0aCB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFBsYXlBZ2Fpbk5leHRSb29tKGdhbWVDb2RlLCByb29tSUQsIG51bVBsYXllcnMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNyZWRlbnRpYWwgPSB0aGlzLmdldENyZWRlbnRpYWwocm9vbUlEKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgcmVxdWVzdFxuICAgICAgICAgICAgICAgIC5wb3N0KGAke0FkZHJlc3NIZWxwZXIuZ2V0U2VydmVyQWRkcmVzcygpfS9nYW1lcy8ke2dhbWVDb2RlfS8ke3Jvb21JRH0vcGxheUFnYWluYClcbiAgICAgICAgICAgICAgICAuc2VuZCh7IHBsYXllcklEOiBwbGF5ZXJDcmVkZW50aWFsLnBsYXllcklELCBjcmVkZW50aWFsczogcGxheWVyQ3JlZGVudGlhbC5jcmVkZW50aWFsLCBudW1QbGF5ZXJzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHkubmV4dFJvb21JRDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROaWNrbmFtZSgpIHtcbiAgICAgICAgaWYgKCFTU1JIZWxwZXIuaXNTU1IoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKEZCR19OSUNLTkFNRV9LRVkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzZXROaWNrbmFtZShuYW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEZCR19OSUNLTkFNRV9LRVksIG5hbWUpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q3JlZGVudGlhbChyb29tSUQpIHtcbiAgICAgICAgLy8gcmV0dXJuIGFuIGVtcHR5IElQbGF5ZXJJblJvb20gb2JqZWN0IGlmIHRoZSBwbGF5ZXIncyBpZGVudGl0eSBpcyBmb3IgYW5vdGhlciByb29tXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShGQkdfQ1JFREVOVElBTFNfS0VZKSk7XG4gICAgICAgIGlmIChjcmVkZW50aWFscykge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWRlbnRpYWxzW3Jvb21JRF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHNldENyZWRlbnRpYWwocGxheWVyLCBjcmVkZW50aWFsKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShGQkdfQ1JFREVOVElBTFNfS0VZKSk7XG4gICAgICAgIGNvbnN0IG5ld0NyZWRlbnRpYWxzID0gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcpO1xuICAgICAgICBuZXdDcmVkZW50aWFsc1twbGF5ZXIucm9vbUlEXSA9IHsgY3JlZGVudGlhbCwgcGxheWVySUQ6IHBsYXllci5wbGF5ZXJJRCB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShGQkdfQ1JFREVOVElBTFNfS0VZLCBKU09OLnN0cmluZ2lmeShuZXdDcmVkZW50aWFscykpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0TWVzc2FnZVBhZ2UgZnJvbSAnLi4vTWVzc2FnZVBhZ2UnO1xuaW1wb3J0IHsgTG9iYnlTZXJ2aWNlIH0gZnJvbSAnLi9Mb2JieVNlcnZpY2UnO1xuaW1wb3J0IHsgR0FNRVNfTUFQIH0gZnJvbSAnLi4vLi4vZ2FtZXMnO1xuLyoqIENsYXNzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBhIG5ldyByb29tIGFuZCByZWRpcmVjdGluZyB0byB0aGUgY29ycmVjdCBVUkwuICovXG5leHBvcnQgY2xhc3MgTmV3Um9vbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiBmYWxzZSB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZUNvZGUgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5nYW1lQ29kZTtcbiAgICAgICAgY29uc3QgbnVtUGxheWVycyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm51bVBsYXllcnM7XG4gICAgICAgIGlmICghKGdhbWVDb2RlIGluIEdBTUVTX01BUCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBMb2JieVNlcnZpY2UubmV3Um9vbShnYW1lQ29kZSwgbnVtUGxheWVycykudGhlbihyb29tSUQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9yb29tLyR7Z2FtZUNvZGV9LyR7cm9vbUlEfWApO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBFcnJvclBhZ2UgPSBnZXRNZXNzYWdlUGFnZSgnZXJyb3InLCAnRmFpbGVkIHRvIGNyZWF0ZSByb29tJyk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvclBhZ2UsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IExvYWRpbmdQYWdlID0gZ2V0TWVzc2FnZVBhZ2UoJ2xvYWRpbmcnLCAnQ3JlYXRpbmcgcm9vbS4uLicpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwgbnVsbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmV4cG9ydCBjbGFzcyBOaWNrbmFtZVByb21wdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG5hbWVUZXh0RmllbGQ6ICcnIH07XG4gICAgICAgIHRoaXMuX3NldE5pY2tuYW1lT25FbnRlckJ1dHRvbiA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiB0aGlzLl9uaWNrbmFtZUlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbmlja25hbWVJc1ZhbGlkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuc3RhdGUubmFtZVRleHRGaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBuYW1lICYmIG5hbWUubGVuZ3RoID4gMDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uaWNrbmFtZUlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Tmlja25hbWUodGhpcy5zdGF0ZS5uYW1lVGV4dEZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVUZXh0RmllbGQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2xkU3RhdGUsIHsgbmFtZVRleHRGaWVsZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl90b2dnbGVQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb21wdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDbGlja0F3YXlMaXN0ZW5lciwgeyBvbkNsaWNrQXdheTogdGhpcy5fdG9nZ2xlUHJvbXB0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgc3R5bGU6IHsgcGFkZGluZ1RvcDogJzE2cHgnIH0sIHZhcmlhbnQ6IFwiaDVcIiwgY29tcG9uZW50OiBcImgzXCIgfSwgXCJFbnRlciBZb3VyIE5pY2tuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkLCB7IGF1dG9Gb2N1czogdHJ1ZSwgdHlwZTogXCJ0ZXh0XCIsIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5uaWNrbmFtZSwgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlLCBvbktleVByZXNzOiB0aGlzLl9zZXROaWNrbmFtZU9uRW50ZXJCdXR0b24gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBzdHlsZTogeyBtYXJnaW5Ub3A6ICcxNnB4JyB9LCBvbkNsaWNrOiB0aGlzLl9vbkNsaWNrLCBkaXNhYmxlZDogIXRoaXMuX25pY2tuYW1lSXNWYWxpZCgpIH0sIFwiU2V0IE5pY2tuYW1lXCIpKSkpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xuY29uc3QgUXJDb2RlID0gcmVxdWlyZSgncXJjb2RlLnJlYWN0Jyk7XG5leHBvcnQgY2xhc3MgUXJDb2RlUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDbGlja0F3YXlMaXN0ZW5lciwgeyBvbkNsaWNrQXdheTogdGhpcy5wcm9wcy50b2dnbGVRckNvZGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc0NTBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgeyBzdHlsZTogeyBwYWRkaW5nVG9wOiAnMTZweCcgfSwgdmFyaWFudDogXCJoNVwiLCBjb21wb25lbnQ6IFwiaDNcIiB9LCBcIlNjYW4gUVIgY29kZVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFFyQ29kZSwgeyB2YWx1ZTogdGhpcy5wcm9wcy51cmwsIHNpemU6IDUwMCwgc3R5bGU6IHN0eWxlLCByZW5kZXJBczogXCJzdmdcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogJzE2cHgnIH0sIG9uQ2xpY2s6IHRoaXMucHJvcHMudG9nZ2xlUXJDb2RlIH0sIFwiRG9uZVwiKSkpKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0TWVzc2FnZVBhZ2UgZnJvbSAnLi4vTWVzc2FnZVBhZ2UnO1xuaW1wb3J0IHsgTG9iYnlTZXJ2aWNlIH0gZnJvbSAnLi9Mb2JieVNlcnZpY2UnO1xuaW1wb3J0IEFsZXJ0TGF5ZXIgZnJvbSAnLi4vR2FtZS9BbGVydExheWVyJztcbmltcG9ydCBGcmVlQm9hcmRHYW1lQmFyIGZyb20gJy4uL0ZyZWVCb2FyZEdhbWVCYXInO1xuaW1wb3J0IHsgR2FtZVNoYXJpbmcgfSBmcm9tICcuLi9HYW1lL0dhbWVTaGFyaW5nJztcbmltcG9ydCBHYW1lIGZyb20gJy4uL0dhbWUvR2FtZSc7XG5pbXBvcnQgeyBMaXN0UGxheWVycyB9IGZyb20gJy4vTGlzdFBsYXllcnMnO1xuaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tICcuLi9HYW1lL0dhbWVDYXJkJztcbmltcG9ydCB7IEdBTUVTX01BUCB9IGZyb20gJy4uLy4uL2dhbWVzL2luZGV4JztcbmltcG9ydCB7IE5pY2tuYW1lUHJvbXB0IH0gZnJvbSAnLi9OaWNrbmFtZVByb21wdCc7XG5leHBvcnQgY2xhc3MgUm9vbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiAnJywgbG9hZGluZzogdHJ1ZSwgZ2FtZVJlYWR5OiBmYWxzZSwgZWRpdGluZ05hbWU6IGZhbHNlIH07XG4gICAgICAgIHRoaXMudXBkYXRlTWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGdhbWVDb2RlLCByb29tSUQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICAgICAgaWYgKCFMb2JieVNlcnZpY2UuZ2V0Tmlja25hbWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IExvYmJ5U2VydmljZS5nZXRSb29tTWV0YWRhdGEoZ2FtZUNvZGUsIHJvb21JRClcbiAgICAgICAgICAgICAgICAudGhlbigobWV0YWRhdGEpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGFkYXRhLmN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcklEOiBtZXRhZGF0YS5wbGF5ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb21JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IExvYmJ5U2VydmljZS5nZXROaWNrbmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBMb2JieVNlcnZpY2Uuam9pblJvb20oZ2FtZUNvZGUsIHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMb2JieVNlcnZpY2UuZ2V0Um9vbU1ldGFkYXRhKGdhbWVDb2RlLCByb29tSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1ldGFkYXRhLm51bWJlck9mUGxheWVycyA9PT0gbWV0YWRhdGEucGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvbGRTdGF0ZSA9PiAoT2JqZWN0LmFzc2lnbih7fSwgb2xkU3RhdGUsIHsgZ2FtZVJlYWR5OiB0cnVlIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+IChPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZSwgeyByb29tTWV0YWRhdGE6IG1ldGFkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KSkpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5nYW1lUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZU1ldGFkYXRhKCksIDIwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSAnRmFpbGVkIHRvIGZldGNoIHJvb20gbWV0YWRhdGEuJztcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+IChPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZSwgeyBlcnJvciB9KSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldE5hbWVQcm9tcHQgPSAobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlUHJvbXB0ID0gdGhpcy5zdGF0ZS5lZGl0aW5nTmFtZSA/IHRoaXMuX3RvZ2dsZUVkaXRpbmdOYW1lIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE5pY2tuYW1lUHJvbXB0LCB7IHNldE5pY2tuYW1lOiB0aGlzLl9zZXROaWNrbmFtZSwgbmlja25hbWU6IG5hbWUsIHRvZ2dsZVByb21wdDogdG9nZ2xlUHJvbXB0IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl90b2dnbGVFZGl0aW5nTmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2xkU3RhdGUgPT4gKE9iamVjdC5hc3NpZ24oe30sIG9sZFN0YXRlLCB7IGVkaXRpbmdOYW1lOiAhdGhpcy5zdGF0ZS5lZGl0aW5nTmFtZSB9KSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXROaWNrbmFtZSA9IChuaWNrbmFtZSkgPT4ge1xuICAgICAgICAgICAgTG9iYnlTZXJ2aWNlLnNldE5pY2tuYW1lKG5pY2tuYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRpbmdOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vbSA9IHRoaXMuc3RhdGUucm9vbU1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIExvYmJ5U2VydmljZS5yZW5hbWVVc2VyKHJvb20uZ2FtZUNvZGUsIHJvb20uY3VycmVudFVzZXIsIG5pY2tuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVFZGl0aW5nTmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVNZXRhZGF0YSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zdG9wVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldEdhbWVTaGFyaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBnYW1lQ29kZSwgcm9vbUlEIH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWVTaGFyaW5nLCB7IGdhbWVDb2RlOiBnYW1lQ29kZSwgcm9vbUlEOiByb29tSUQsIHJvb21NZXRhZGF0YTogdGhpcy5zdGF0ZS5yb29tTWV0YWRhdGEgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1ldGFkYXRhKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgTG9hZGluZ1BhZ2UgPSBnZXRNZXNzYWdlUGFnZSgnbG9hZGluZycsICdMb2FkaW5nLi4uJyk7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gTG9iYnlTZXJ2aWNlLmdldE5pY2tuYW1lKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gU1NSXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuaWNrbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJlZUJvYXJkR2FtZUJhciwgbnVsbCwgdGhpcy5fZ2V0TmFtZVByb21wdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc3QgRXJyb3JQYWdlID0gZ2V0TWVzc2FnZVBhZ2UoJ2Vycm9yJywgdGhpcy5zdGF0ZS5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvclBhZ2UsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdQYWdlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nYW1lUmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb20gPSB0aGlzLnN0YXRlLnJvb21NZXRhZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbWUsIHsgcm9vbTogcm9vbSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuaWNrbmFtZVByb21wdCA9IHRoaXMuc3RhdGUuZWRpdGluZ05hbWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydExheWVyLCBudWxsLCB0aGlzLl9nZXROYW1lUHJvbXB0KHRoaXMuc3RhdGUucm9vbU1ldGFkYXRhLmN1cnJlbnRVc2VyLm5hbWUpKSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJlZUJvYXJkR2FtZUJhciwgbnVsbCxcbiAgICAgICAgICAgIG5pY2tuYW1lUHJvbXB0LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lQ2FyZCwgeyBnYW1lOiBHQU1FU19NQVBbdGhpcy5zdGF0ZS5yb29tTWV0YWRhdGEuZ2FtZUNvZGVdIH0pLFxuICAgICAgICAgICAgdGhpcy5fZ2V0R2FtZVNoYXJpbmcoKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBsYXllcnMsIHsgcm9vbU1ldGFkYXRhOiB0aGlzLnN0YXRlLnJvb21NZXRhZGF0YSwgZWRpdE5pY2tuYW1lOiB0aGlzLl90b2dnbGVFZGl0aW5nTmFtZSB9KSkpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc3RvcFRpbWVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZXNzYWdlUGFnZUNsYXNzIGZyb20gJy4vTWVzc2FnZVBhZ2VDbGFzcyc7XG5jb25zdCBnZXRNZXNzYWdlUGFnZSA9ICh0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZVBhZ2VDbGFzcywgeyB0eXBlOiB0eXBlLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TWVzc2FnZVBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEZyZWVCb2FyZEdhbWVCYXIgZnJvbSAnLi9GcmVlQm9hcmRHYW1lQmFyJztcbmltcG9ydCBTdmdFcnJvciBmcm9tICcuL21lZGlhL1N2Z0Vycm9yJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuL1N0YXR1cyc7XG5pbXBvcnQgeyB0IH0gZnJvbSAndHRhZyc7XG5leHBvcnQgY2xhc3MgTWVzc2FnZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SUQgPSBudWxsO1xuICAgICAgICB0aGlzLl9hbmltYXRlID0gKG5vdykgPT4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVxdWVzdElEKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHRoaXMuc3RhdGUuc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtIaWRkZW4gPSBlbGFwc2VkIDwgNTAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgbGlua0hpZGRlbiB9KSk7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGUoRGF0ZS5ub3coKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmtIaWRkZW46IHByb3BzLnR5cGUgIT09ICdlcnJvcicsXG4gICAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBwcm9wcy50eXBlICE9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZShEYXRlLm5vdygpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RJRCkge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElEKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElEID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpY29uO1xuICAgICAgICBsZXQgbGlua0hvbWU7XG4gICAgICAgIGxldCBzdGF0dXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdHVzLCB7IGNvZGU6IFwiNDA0XCIgfSk7XG4gICAgICAgICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChTdmdFcnJvciwgeyBzdHlsZTogeyBoZWlnaHQ6ICcxMjhweCcgfSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KENpcmN1bGFyUHJvZ3Jlc3MsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5saW5rSGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBnb0hvbWVUZXh0ID0gdGhpcy5wcm9wcy5tZXNzYWdlID09PSAnSW52YWxpZCBMb2NhbGUnID8gJ0dvIEhvbWUnIDogdCBgbWVzc2FnZVBhZ2UuZ29Ib21lYDtcbiAgICAgICAgICAgIGxpbmtIb21lID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGhyZWY6IFwiL1wiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIHN0eWxlOiB7IG1hcmdpbjogJzhweCcgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9tZUljb24sIHsgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6ICc4cHgnIH0gfSksXG4gICAgICAgICAgICAgICAgZ29Ib21lVGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGcmVlQm9hcmRHYW1lQmFyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBhZGRpbmdUb3A6ICcxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDZcIiwgZ3V0dGVyQm90dG9tOiB0cnVlLCBzdHlsZTogeyBwYWRkaW5nVG9wOiAnMTZweCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBsaW5rSG9tZSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY2xhc3MgU2Nyb2xsVG9Ub3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3A7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuY2xhc3MgU3RhdHVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXRpY0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhdGljQ29udGV4dC5zdGF0dXMgPSB0aGlzLnByb3BzLmNvZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFN0YXR1cyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgU3ZnRXJyb3IgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgdmlld0JveDogXCIwIDAgMSAxXCIsIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHsgeDE6IFwiMC4yXCIsIHkxOiBcIjAuMlwiLCB4MjogXCIwLjhcIiwgeTI6IFwiMC44XCIsIHN0cm9rZTogXCJibGFja1wiLCBzdHJva2VXaWR0aDogXCIwLjA1XCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lXCIsIHsgeDE6IFwiMC44XCIsIHkxOiBcIjAuMlwiLCB4MjogXCIwLjJcIiwgeTI6IFwiMC44XCIsIHN0cm9rZTogXCJibGFja1wiLCBzdHJva2VXaWR0aDogXCIwLjA1XCIgfSkpKSk7XG5leHBvcnQgZGVmYXVsdCBTdmdFcnJvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU4MzBiZGQxNjExZDBhOGQ5OTc4Y2I1MzIwYjQ5ZGMyLnBuZ1wiOyIsImltcG9ydCBnZXRBc3luYyBmcm9tICcuLi9BcHAvQXN5bmMnO1xuY29uc3QgSG9tZUFzeW5jID0gZ2V0QXN5bmMoJ0hvbWUnLCAoKSA9PiBpbXBvcnQoJy4vSG9tZScpKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVBc3luYztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC9BcHAnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuY29uc3QgYXBwID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJvd3NlclJvdXRlciwgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpKTtcblJlYWN0RE9NLnJlbmRlcihhcHAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuIiwiaW1wb3J0IFRodW1ibmFpbCBmcm9tICcuL21lZGlhL3RodW1ibmFpbC5wbmcnO1xuaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTW9kZVBpY2tlcic7XG5pbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb25zLm1kJztcbmV4cG9ydCBjb25zdCBjaGVja2Vyc0dhbWVEZWYgPSB7XG4gICAgY29kZTogJ2NoZWNrZXJzJyxcbiAgICBuYW1lOiAnQ2hlY2tlcnMnLFxuICAgIGltYWdlVVJMOiBUaHVtYm5haWwsXG4gICAgbW9kZXM6IFt7IG1vZGU6IEdhbWVNb2RlLkFJIH0sIHsgbW9kZTogR2FtZU1vZGUuT25saW5lRnJpZW5kIH0sIHsgbW9kZTogR2FtZU1vZGUuTG9jYWxGcmllbmQgfV0sXG4gICAgbWluUGxheWVyczogMixcbiAgICBtYXhQbGF5ZXJzOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBnYW1lIG9mIENoZWNrZXJzJyxcbiAgICBkZXNjcmlwdGlvblRhZzogYFBsYXkgQ2hlY2tlcnMgKGFsc28ga25vd24gYXMgRHJhdWdodHMpIGxvY2FsbHlcbiAgb3Igb25saW5lIGFnYWluc3QgZnJpZW5kcyFgLFxuICAgIGluc3RydWN0aW9uczoge1xuICAgICAgICB2aWRlb0lkOiAneUZyQU4tTEZaUlUnLFxuICAgICAgICB0ZXh0OiBpbnN0cnVjdGlvbnMsXG4gICAgfSxcbiAgICBjb25maWc6ICgpID0+IGltcG9ydCgnLi9jb25maWcnKSxcbiAgICBhaUNvbmZpZzogKCkgPT4gaW1wb3J0KCcuL2FpJyksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJDaGVja2VycyBpcyBhIGJvYXJkIGdhbWUgZm9yIHR3byBwbGF5ZXJzLiBJdCBpcyBwbGF5ZWQgaW4gYSBzcXVhcmUgYm9hcmQsIG1hZGUgb2YgNjQgc21hbGxlciBzcXVhcmVzLCB3aXRoIGVpZ2h0IHNxdWFyZXMgb24gZWFjaCBzaWRlLlxcblxcbkVhY2ggcGxheWVyIHN0YXJ0cyB3aXRoIHR3ZWx2ZSBwaWVjZXMuIFRoZSBwbGF5ZXIgd2l0aCB3aGl0ZSBwaWVjZXMgYWx3YXlzIG1ha2VzIHRoZSBmaXJzdCBtb3ZlLiBOb3JtYWwgcGllY2VzIGNhbiBtb3ZlIG9ubHkgZGlhZ29uYWxseSB0b3dhcmRzIHRoZSBvcHBvbmVudCdzIHNpZGUsIHdoaWxlIGtpbmdzIGNhbiBtb3ZlIGluIGFueSBkaXJlY3Rpb24uIEEgcGxheWVyIGNhbiByZW1vdmUgYW4gb3Bwb25lbnQncyBwaWVjZSBmcm9tIHRoZSBib2FyZCBieSBqdW1waW5nIG92ZXIgaXQuXFxuXFxuSW4gb3JkZXIgdG8ganVtcCwgdGhlIG5leHQgZGlhZ29uYWwgc3F1YXJlIGFmdGVyIHRoZSBvcHBvbmVudCBwaWVjZSBtdXN0IGJlIGVtcHR5LiBJZiB0aGUgcGxheWVyIGhhcyBtb3JlIHRoYW4gb25lIHBvc3NpYmxlIGp1bXAsIHRoZXNlIGp1bXBzIGNhbiBiZSBleGVjdXRlZCBpbiBhIHNpbmdsZSB0dXJuLiBBIHBpZWNlIGJlY29tZXMgYSBraW5nIGlmIGEgcGllY2UgcmVhY2hlcyB0aGUgbGFzdCByb3cgdG93YXJkcyB0aGUgb3Bwb25lbnQuIFRoZSBnYW1lIGVuZHMgd2hlbiBubyBtb3JlIHBpZWNlcyBvciBtb3ZlcyBhcmUgcG9zc2libGUgZm9yIGEgcGxheWVyLlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2NmMTRhNGNhOTYwOTk2ODRhNGJjMGM2YjJjNWQ5OGEucG5nXCI7IiwiaW1wb3J0IENoZXNzVGh1bWJuYWlsIGZyb20gJy4vbWVkaWEvdGh1bWJuYWlsLnBuZyc7XG5pbXBvcnQgeyBHYW1lTW9kZSB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBpbnN0cnVjdGlvbnMgZnJvbSAnLi9pbnN0cnVjdGlvbnMubWQnO1xuZXhwb3J0IGNvbnN0IGNoZXNzR2FtZURlZiA9IHtcbiAgICBjb2RlOiAnY2hlc3MnLFxuICAgIG5hbWU6ICdDaGVzcycsXG4gICAgaW1hZ2VVUkw6IENoZXNzVGh1bWJuYWlsLFxuICAgIG1pblBsYXllcnM6IDIsXG4gICAgbWF4UGxheWVyczogMixcbiAgICBtb2RlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBHYW1lTW9kZS5BSSxcbiAgICAgICAgICAgIGV4dHJhSW5mbzogeyB0eXBlOiAnc2xpZGVyJywgbWluOiAxLCBtYXg6IDggfSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5PbmxpbmVGcmllbmQgfSxcbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5Mb2NhbEZyaWVuZCB9LFxuICAgIF0sXG4gICAgZGVzY3JpcHRpb246ICdJbnRlcm5hdGlvbmFsIFJ1bGVzJyxcbiAgICBkZXNjcmlwdGlvblRhZzogYFBsYXkgYW4gb25saW5lIENoZXNzIGdhbWUgaW4geW91ciBicm93c2VyIGFnYWluc3QgYVxcXG4gdG9wIGNoZXNzIGNvbXB1dGVyLiBZb3UgY2FuIHNldCB0aGUgY29tcHV0ZXIgbGV2ZWwgZnJvbSAxIHRvIDgsXFxcbiBmcm9tIGVhc3kgdG8gZ3JhbmRtYXN0ZXIuIFlvdSBjYW4gYWxzbyBlYXNpbHkgc2hhcmUgYSBsaW5rIGFuZCBwbGF5XFxcbiBjaGVzcyB3aXRoIGEgZnJpZW5kIG9ubGluZSwgb3IgeW91IGNhbiBzaGFyZSB5b3VyIGRldmljZSBhbmQgcGxheVxcXG4gd2l0aCBhIGZyaWVuZCBsb2NhbGx5ICFgLFxuICAgIGluc3RydWN0aW9uczoge1xuICAgICAgICB2aWRlb0lkOiAnZkt4RzhLakgxUWcnLFxuICAgICAgICB0ZXh0OiBpbnN0cnVjdGlvbnMsXG4gICAgfSxcbiAgICBjb25maWc6ICgpID0+IGltcG9ydCgnLi9jb25maWcnKSxcbiAgICBhaUNvbmZpZzogKCkgPT4gaW1wb3J0KCcuL2FpJyksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJDaGVzcyBpcyBhIGJvYXJkIGdhbWUgZm9yIHR3byBwbGF5ZXJzLiBJdCBpcyBwbGF5ZWQgaW4gYSBzcXVhcmUgYm9hcmQsIG1hZGUgb2YgNjQgc21hbGxlciBzcXVhcmVzLCB3aXRoIGVpZ2h0IHNxdWFyZXMgb24gZWFjaCBzaWRlLlxcblxcbkVhY2ggcGxheWVyIHN0YXJ0cyB3aXRoIHNpeHRlZW4gcGllY2VzOiBlaWdodCBwYXducywgdHdvIGtuaWdodHMsIHR3byBiaXNob3BzLCB0d28gcm9va3MsIG9uZSBxdWVlbiBhbmQgb25lIGtpbmcuIFRoZSBwbGF5ZXIgd2l0aCB3aGl0ZSBwaWVjZXMgYWx3YXlzIG1ha2VzIHRoZSBmaXJzdCBtb3ZlLlxcblxcblRoZSBnb2FsIG9mIHRoZSBnYW1lIGlzIGZvciBlYWNoIHBsYXllciB0byB0cnkgYW5kIGNoZWNrbWF0ZSB0aGUga2luZyBvZiB0aGUgb3Bwb25lbnQuXFxuQ2hlY2ttYXRlIGlzIGEgZ2FtZSBwb3NpdGlvbiBpbiB3aGljaCBhIHBsYXllcidzIGtpbmcgaXMgdGhyZWF0ZW5lZCB3aXRoIGNhcHR1cmUgYW5kIHRoZXJlIGlzIG5vIHdheSB0byByZW1vdmUgdGhlIHRocmVhdC4gQ2hlY2ttYXRpbmcgdGhlIG9wcG9uZW50IHdpbnMgdGhlIGdhbWUuXFxuXFxuW0NsaWNrIGhlcmUgZm9yIHRoZSBhbGxvd2VkIG1vdmVzIG9mIGVhY2ggcGllY2UuXShodHRwczovL3d3dy5jaGVzc3VzYS5jb20vY2hlc3MtcnVsZXMuaHRtbClcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUyMjNiNDk5YWIyZGMwMGM1ODc2NzIzZTdlOGI2MjBlLnBuZ1wiOyIsImltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi9tZWRpYS90aHVtYm5haWwucG5nJztcbmltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZU1vZGVQaWNrZXInO1xuaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9ucy5tZCc7XG5leHBvcnQgY29uc3QgY29ybmVydXNHYW1lRGVmID0ge1xuICAgIGNvZGU6ICdjb3JuZXJ1cycsXG4gICAgbmFtZTogJ0Nvcm5lcnVzJyxcbiAgICBpbWFnZVVSTDogVGh1bWJuYWlsLFxuICAgIG1vZGVzOiBbXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiBHYW1lTW9kZS5BSSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFJbmZvOiB7IHR5cGU6ICdzbGlkZXInLCBtaW46IDEsIG1heDogOCB9IGFzIElHYW1lTW9kZUV4dHJhSW5mb1NsaWRlcixcbiAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgIHsgbW9kZTogR2FtZU1vZGUuT25saW5lRnJpZW5kIH0sXG4gICAgICAgIHsgbW9kZTogR2FtZU1vZGUuTG9jYWxGcmllbmQgfSxcbiAgICBdLFxuICAgIG1pblBsYXllcnM6IDIsXG4gICAgbWF4UGxheWVyczogNCxcbiAgICBkZXNjcmlwdGlvbjogJ1NpbWlsYXIgdG8gQmxva3VzJyxcbiAgICBkZXNjcmlwdGlvblRhZzogYFBsYXkgQ29ybmVydXMsIGEgZnJlZSBvbmxpbmUgZ2FtZSBzaW1pbGFyXFxcbiB0byBCbG9rdXMuIFlvdSBjYW4gcGxheSBtdWx0aS1wbGF5ZXIgb25saW5lIG9yXFxcbiBzaGFyZSB5b3VyIGRldmljZSBhbmQgcGxheSBsb2NhbGx5IGFnYWluc3QgYSBmcmllbmQuYCxcbiAgICBpbnN0cnVjdGlvbnM6IHtcbiAgICAgICAgdmlkZW9JZDogJ1l3OHBLNkFrNW9FJyxcbiAgICAgICAgdGV4dDogaW5zdHJ1Y3Rpb25zLFxuICAgIH0sXG4gICAgY29uZmlnOiAoKSA9PiBpbXBvcnQoJy4vY29uZmlnJyksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJTaW1pbGFybHkgdG8gQmxva3VzLCB0aGlzIGdhbWUgYWxsb3dzIHR3byB0byBmb3VyIHBsYXllcnMuIEluIHRoZSBjYXNlIG9mIG9ubHkgdHdvIG9yIHRocmVlIHBsYXllcnMsIHR3byBjb2xvcnMgd2lsbCBiZSBhc3NpZ25lZCB0byBhIHNpbmdsZSBwbGF5ZXIuXFxuXFxuRWFjaCBjb2xvciBoYXMgMjEgdGlsZXMgd2l0aCBkaXN0aW5jdCBzaGFwZXMsIGFuZCB0aGUgb2JqZWN0aXZlIGlzIHRvIGNvdmVyIGFzIG11Y2ggb2YgdGhlIGJvYXJkIGFzIHBvc3NpYmxlLiBUaGUgZmlyc3QgcGllY2UgbXVzdCBiZSBwbGFjZWQgb24gdGhlIGNvcm5lciBvZiB0aGUgYm9hcmQgYXNzaWduZWQgdG8gdGhhdCBjb2xvci5cXG5cXG5BbGwgc3Vic2VxdWVudCBwaWVjZXMgbXVzdCBzaGFyZSBhIGNvcm5lciB3aXRoIGF0IGxlYXN0IG9uZSBwaWVjZSBvZiB0aGUgc2FtZSBjb2xvci4gU2hhcmluZyBhbiBlZGdlIGlzIG9ubHkgYWxsb3dlZCBpZiB0aGUgcGllY2VzIGFyZSBub3Qgb2YgdGhlIHNhbWUgY29sb3IuIFRoZSBnYW1lIGVuZHMgd2hlbiBub2JvZHkgY2FuIG1ha2UgYSBtb3ZlLlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzcwNWJlODZjZDk3MmE1ZTYyNjE4OGZkMjBkOTRlMzcucG5nXCI7IiwiaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTW9kZVBpY2tlcic7XG4vLyBpbXBvcnQgeyBJR2FtZU1vZGVFeHRyYUluZm9Ecm9wZG93biB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBGb3VySW5BUm93VGh1bWJuYWlsIGZyb20gJy4vbWVkaWEvdGh1bWJuYWlsLnBuZyc7XG5pbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb25zLm1kJztcbmV4cG9ydCBjb25zdCBmb3VyaW5hcm93R2FtZURlZiA9IHtcbiAgICBjb2RlOiAnZm91cmluYXJvdycsXG4gICAgbmFtZTogJ0Nvbm5lY3QgNCcsXG4gICAgbWluUGxheWVyczogMixcbiAgICBtYXhQbGF5ZXJzOiAyLFxuICAgIGltYWdlVVJMOiBGb3VySW5BUm93VGh1bWJuYWlsLFxuICAgIG1vZGVzOiBbXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBtb2RlOiBHYW1lTW9kZS5BSSxcbiAgICAgICAgLy8gICBleHRyYUluZm86IHsgdHlwZTogJ2Ryb3Bkb3duJywgb3B0aW9uczogWydFYXN5JywgJ0hhcmQnXSB9IGFzIElHYW1lTW9kZUV4dHJhSW5mb0Ryb3Bkb3duLFxuICAgICAgICAvLyB9LFxuICAgICAgICB7IG1vZGU6IEdhbWVNb2RlLk9ubGluZUZyaWVuZCB9LFxuICAgICAgICB7IG1vZGU6IEdhbWVNb2RlLkxvY2FsRnJpZW5kIH0sXG4gICAgXSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsc28ga25vdyBhcyBGb3VyLWluLWEtUm93JyxcbiAgICBkZXNjcmlwdGlvblRhZzogYENvbm5lY3QgRm91ciBpcyBhIHR3by1wbGF5ZXIgY29ubmVjdGlvbiBnYW1lIGluIHdoaWNoIHRoZSBwbGF5ZXJzIGZpcnN0IGNob29zZSBhIGNvbG9yIGFuZCB0aGVuIHRha2UgdHVybnMgZHJvcHBpbmcgb25lIGNvbG9yZWQgZGlzYyBmcm9tIHRoZSB0b3AgaW50byBhIHNldmVuLWNvbHVtbiwgc2l4LXJvdyB2ZXJ0aWNhbGx5IHN1c3BlbmRlZCBncmlkLiBUaGUgcGllY2VzIGZhbGwgc3RyYWlnaHQgZG93biwgb2NjdXB5aW5nIHRoZSBsb3dlc3QgYXZhaWxhYmxlIHNwYWNlIHdpdGhpbiB0aGUgY29sdW1uLiBUaGUgb2JqZWN0aXZlIG9mIHRoZSBnYW1lIGlzIHRvIGJlIHRoZSBmaXJzdCB0byBmb3JtIGEgaG9yaXpvbnRhbCwgdmVydGljYWwsIG9yIGRpYWdvbmFsIGxpbmUgb2YgZm91ciBvZiBvbmUncyBvd24gZGlzY3MuYCxcbiAgICBpbnN0cnVjdGlvbnM6IHtcbiAgICAgICAgdmlkZW9JZDogJ3V0WHpJRkVWUGpBJyxcbiAgICAgICAgdGV4dDogaW5zdHJ1Y3Rpb25zLFxuICAgIH0sXG4gICAgY29uZmlnOiAoKSA9PiBpbXBvcnQoJy4vY29uZmlnJyksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJDb25uZWN0IEZvdXIgaXMgYSB0d28tcGxheWVyIGNvbm5lY3Rpb24gZ2FtZSBpbiB3aGljaCB0aGUgcGxheWVycyBmaXJzdCBjaG9vc2UgYSBjb2xvciBhbmQgdGhlbiB0YWtlIHR1cm5zIGRyb3BwaW5nIG9uZSBjb2xvcmVkIGRpc2MgZnJvbSB0aGUgdG9wIGludG8gYSBzZXZlbi1jb2x1bW4sIHNpeC1yb3cgdmVydGljYWxseSBzdXNwZW5kZWQgZ3JpZC4gVGhlIHBpZWNlcyBmYWxsIHN0cmFpZ2h0IGRvd24sIG9jY3VweWluZyB0aGUgbG93ZXN0IGF2YWlsYWJsZSBzcGFjZSB3aXRoaW4gdGhlIGNvbHVtbi4gVGhlIG9iamVjdGl2ZSBvZiB0aGUgZ2FtZSBpcyB0byBiZSB0aGUgZmlyc3QgdG8gZm9ybSBhIGhvcml6b250YWwsIHZlcnRpY2FsLCBvciBkaWFnb25hbCBsaW5lIG9mIGZvdXIgb2Ygb25lJ3Mgb3duIGRpc2NzLlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDAyZmY3NzNiNTdkMWJhNTAyMmM4MDAwOTFmZjMwYTQucG5nXCI7IiwiaW1wb3J0IHsgY2hlc3NHYW1lRGVmIH0gZnJvbSAnLi9jaGVzcyc7XG5pbXBvcnQgeyBzZWFiYXR0bGVHYW1lRGVmIH0gZnJvbSAnLi9zZWFiYXR0bGUnO1xuaW1wb3J0IHsgdGljdGFjdG9lR2FtZURlZiB9IGZyb20gJy4vdGljdGFjdG9lJztcbmltcG9ydCB7IHRha2VzaXhHYW1lRGVmIH0gZnJvbSAnLi90YWtlc2l4JztcbmltcG9ydCB7IG5pbmVtZW5zbW9ycmlzR2FtZURlZiB9IGZyb20gJy4vbmluZW1lbnNtb3JyaXMnO1xuaW1wb3J0IHsgY2hlY2tlcnNHYW1lRGVmIH0gZnJvbSAnLi9jaGVja2Vycyc7XG5pbXBvcnQgeyByZXZlcnNpR2FtZURlZiB9IGZyb20gJy4vcmV2ZXJzaSc7XG5pbXBvcnQgeyBjb3JuZXJ1c0dhbWVEZWYgfSBmcm9tICcuL2Nvcm5lcnVzJztcbmltcG9ydCB7IGZvdXJpbmFyb3dHYW1lRGVmIH0gZnJvbSAnLi9mb3VyaW5hcm93Jztcbi8vIEFkZCBuZXcgZ2FtZXMgaGVyZVxuZXhwb3J0IGNvbnN0IEdBTUVTX01BUCA9IHtcbiAgICBjaGVzczogY2hlc3NHYW1lRGVmLFxuICAgIHNlYWJhdHRsZTogc2VhYmF0dGxlR2FtZURlZixcbiAgICB0aWN0YWN0b2U6IHRpY3RhY3RvZUdhbWVEZWYsXG4gICAgdGFrZXNpeDogdGFrZXNpeEdhbWVEZWYsXG4gICAgY29ybmVydXM6IGNvcm5lcnVzR2FtZURlZixcbiAgICBuaW5lbWVuc21vcnJpczogbmluZW1lbnNtb3JyaXNHYW1lRGVmLFxuICAgIGNoZWNrZXJzOiBjaGVja2Vyc0dhbWVEZWYsXG4gICAgcmV2ZXJzaTogcmV2ZXJzaUdhbWVEZWYsXG4gICAgZm91cmluYXJvdzogZm91cmluYXJvd0dhbWVEZWYsXG59O1xuZXhwb3J0IGNvbnN0IEdBTUVTX0xJU1QgPSBbXG4gICAgR0FNRVNfTUFQLmNoZXNzLFxuICAgIEdBTUVTX01BUC5uaW5lbWVuc21vcnJpcyxcbiAgICBHQU1FU19NQVAucmV2ZXJzaSxcbiAgICBHQU1FU19NQVAudGFrZXNpeCxcbiAgICBHQU1FU19NQVAuY2hlY2tlcnMsXG4gICAgR0FNRVNfTUFQLmNvcm5lcnVzLFxuICAgIEdBTUVTX01BUC5zZWFiYXR0bGUsXG4gICAgR0FNRVNfTUFQLnRpY3RhY3RvZSxcbiAgICBHQU1FU19NQVAuZm91cmluYXJvdyxcbl07XG4iLCJpbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4vbWVkaWEvdGh1bWJuYWlsLnBuZyc7XG5pbXBvcnQgeyBHYW1lTW9kZSB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBpbnN0cnVjdGlvbnMgZnJvbSAnLi9pbnN0cnVjdGlvbnMubWQnO1xuZXhwb3J0IGNvbnN0IG5pbmVtZW5zbW9ycmlzR2FtZURlZiA9IHtcbiAgICBjb2RlOiAnbmluZW1lbnNtb3JyaXMnLFxuICAgIG5hbWU6ICdOaW5lIE1lbnMgTW9ycmlzJyxcbiAgICBpbWFnZVVSTDogVGh1bWJuYWlsLFxuICAgIG1vZGVzOiBbXG4gICAgICAgIC8qXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kZTogR2FtZU1vZGUuQUksXG4gICAgICAgICAgICAgICAgZXh0cmFJbmZvOiB7IHR5cGU6ICdzbGlkZXInLCBtaW46IDEsIG1heDogOCB9IGFzIElHYW1lTW9kZUV4dHJhSW5mb1NsaWRlcixcbiAgICAgICAgICAgIH0sKi9cbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5PbmxpbmVGcmllbmQgfSxcbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5Mb2NhbEZyaWVuZCB9LFxuICAgIF0sXG4gICAgbWluUGxheWVyczogMixcbiAgICBtYXhQbGF5ZXJzOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQWxzbyBLbm93biBhcyBNaWxscycsXG4gICAgZGVzY3JpcHRpb25UYWc6IGBQbGF5IE5pbmUgTWVuJ3MgTW9ycmlzLCBhIGZyZWUgb25saW5lIGdhbWUgYWxzb1xcXG4ga25vd24gYXMgTWlsbHMuIFlvdSBjYW4gcGxheSBtdWx0aS1wbGF5ZXIgb3Igd2l0aCB5b3VyIGZyaWVuZFxcXG4gbG9jYWxseSFgLFxuICAgIGluc3RydWN0aW9uczoge1xuICAgICAgICB2aWRlb0lkOiAnenZiSUtPSElrUkUnLFxuICAgICAgICB0ZXh0OiBpbnN0cnVjdGlvbnMsXG4gICAgfSxcbiAgICBjb25maWc6ICgpID0+IGltcG9ydCgnLi9jb25maWcnKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcIk5pbmUgTWVuJ3MgTW9ycmlzIGlzIGEgY2xhc3NpYyB0d28tcGxheWVyIGJvYXJkIGdhbWUuXFxuXFxuSW4gdGhlIGZpcnN0IHBoYXNlIG9mIHRoZSBnYW1lLCBlYWNoIHBsYXllciBoYXMgdG8gcGxhY2UgcGllY2VzIG9uIGVtcHR5IHNsb3RzLiBJZiBhIHBsYXllciBwbGFjZXMgdGhyZWUgcGllY2VzIGluIGEgbGluZSwgdGhleSBmb3JtIGEgXFxcIm1pbGxcXFwiLCBhbmQgdGhleSBjYW4gcmVtb3ZlIGFuIG9wcG9uZW50J3MgcGllY2UgZnJvbSB0aGUgYm9hcmQuIFRoZSBmaXJzdCBwaGFzZSBlbmRzIHdoZW4gYWxsIHBpZWNlcyBhcmUgcGxhY2VkLlxcblxcbkluIHRoZSBzZWNvbmQgcGhhc2UsIGVhY2ggcGxheWVyIGNhbiBtb3ZlIGEgcGllY2UgdG8gYW4gYWRqYWNlbnQgcG9pbnQsIGFzIGxvbmcgYXMgdGhlIGFkamFjZW50IHBvaW50IGlzIGVtcHR5IChubyBqdW1waW5nKS4gQXMgaW4gdGhlIGZpcnN0IHBoYXNlLCBmb3JtaW5nIGEgbWlsbCByZW1vdmVzIG9uZSBvcHBvbmVudCdzIHBpZWNlLlxcblxcblRoZSBnYW1lIGVuZHMgd2hlbiBhIHBsYXllciBvbmx5IGhhcyB0d28gcGllY2VzIGxlZnQuXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZmNiMjNhNTJlZmEwNTgxM2RlM2JlY2NlMjI1MGJjNS5wbmdcIjsiLCJpbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4vbWVkaWEvdGh1bWJuYWlsLnBuZyc7XG5pbXBvcnQgeyBHYW1lTW9kZSB9IGZyb20gJy4uLy4uL0FwcC9HYW1lL0dhbWVNb2RlUGlja2VyJztcbmltcG9ydCBpbnN0cnVjdGlvbnMgZnJvbSAnLi9pbnN0cnVjdGlvbnMubWQnO1xuZXhwb3J0IGNvbnN0IHJldmVyc2lHYW1lRGVmID0ge1xuICAgIGNvZGU6ICdyZXZlcnNpJyxcbiAgICBuYW1lOiAnUmV2ZXJzaScsXG4gICAgaW1hZ2VVUkw6IFRodW1ibmFpbCxcbiAgICBtb2RlczogW3sgbW9kZTogR2FtZU1vZGUuQUkgfSwgeyBtb2RlOiBHYW1lTW9kZS5PbmxpbmVGcmllbmQgfSwgeyBtb2RlOiBHYW1lTW9kZS5Mb2NhbEZyaWVuZCB9XSxcbiAgICBtaW5QbGF5ZXJzOiAyLFxuICAgIG1heFBsYXllcnM6IDQsXG4gICAgZGVzY3JpcHRpb246ICdTaW1pbGFyIHRvIFJvbGxpdCBhbmQgT3RoZWxsbycsXG4gICAgZGVzY3JpcHRpb25UYWc6IGBQbGF5IFJldmVyc2ksIGEgZnJlZSBvbmxpbmUgZ2FtZSBzaW1pbGFyXFxcbiB0byBSb2xsaXQgYW5kIE90aGVsbG8uIFlvdSBjYW4gcGxheSBtdWx0aS1wbGF5ZXIgb25saW5lIG9yIFxcXG4gc2hhcmUgeW91ciBkZXZpY2UgYW5kIHBsYXkgbG9jYWxseSBhZ2FpbnN0IGEgZnJpZW5kLmAsXG4gICAgaW5zdHJ1Y3Rpb25zOiB7XG4gICAgICAgIHZpZGVvSWQ6ICdoQzFzZ0ROcnFxMCcsXG4gICAgICAgIHRleHQ6IGluc3RydWN0aW9ucyxcbiAgICB9LFxuICAgIGNvbmZpZzogKCkgPT4gaW1wb3J0KCcuL2NvbmZpZycpLFxuICAgIGFpQ29uZmlnOiAoKSA9PiBpbXBvcnQoJy4vYWknKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcIlNpbWlsYXIgdG8gUm9saXQsIHRoaXMgZ2FtZSBpcyBhIHZhcmlhdGlvbiBvZiBSZXZlcnNpIHRoYXQgYWxsb3dzIHVwIHRvIDQgcGxheWVycy4gVGhlcmUgYXJlIHVwIHRvIGZvdXIgY29sb3JzLCBhbmQgZWFjaCBwbGF5ZXIgY29udHJvbHMgb25lIGNvbG9yLlxcblxcblRoZSBvYmplY3RpdmUgb2YgdGhlIGdhbWUgaXMgdG8gb3duIG1vcmUgc3F1YXJlcyB0aGFuIGFsbCBvZiB5b3VyIG9wcG9uZW50cy4gSW4gb3JkZXIgdG8gZG8gc28sIGVhY2ggcGxheWVyIGNhbiBwbGFjZSBhIHBpZWNlIG9uIGFuIGVtcHR5IHNxdWFyZSBhcyBsb25nIGFzIGl0IGNhcHR1cmVzIGVuZW15IHBpZWNlcy5cXG5cXG5FbmVteSBwaWVjZXMgY2FuIGJlIGNhcHR1cmVkIGJ5IHBsYWNpbmcgYSBwaWVjZSBkaWFnb25hbGx5LCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseSBmcm9tIGFuIGV4aXN0aW5nIHBpZWNlIG9mIHRoZSBzYW1lIGNvbG9yLlxcblxcblRoZSBnYW1lIGVuZHMgd2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBwb3NzaWJsZSBtb3Zlcywgd2hpY2ggaW4gbW9zdCBjYXNlcyBpcyB3aGVuIHRoZSBib2FyZCBpcyBmdWxsLlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2U4ZDc3NzlkMmUzMTY2NDdhYjBmMDYzMTVkYjRiMGIucG5nXCI7IiwiaW1wb3J0IFNlYWJhdHRsZVRodW1ibmFpbCBmcm9tICcuL21lZGlhL3RodW1ibmFpbC5wbmcnO1xuaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tICcuLi8uLi9BcHAvR2FtZS9HYW1lTW9kZVBpY2tlcic7XG5pbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb25zLm1kJztcbmV4cG9ydCBjb25zdCBzZWFiYXR0bGVHYW1lRGVmID0ge1xuICAgIGNvZGU6ICdzZWFiYXR0bGUnLFxuICAgIG5hbWU6ICdTZWEgQmF0dGxlJyxcbiAgICBpbWFnZVVSTDogU2VhYmF0dGxlVGh1bWJuYWlsLFxuICAgIG1pblBsYXllcnM6IDIsXG4gICAgbWF4UGxheWVyczogMixcbiAgICBtb2RlczogW3sgbW9kZTogR2FtZU1vZGUuQUkgfSwgeyBtb2RlOiBHYW1lTW9kZS5PbmxpbmVGcmllbmQgfV0sXG4gICAgZGVzY3JpcHRpb246ICdTaW1pbGFyIHRvIEJhdHRsZXNoaXAnLFxuICAgIGRlc2NyaXB0aW9uVGFnOiBgUGxheSBTZWEgQmF0dGxlLCBhIGZyZWUgb25saW5lIGdhbWUgc2ltaWxhclxcXG4gdG8gQmF0dGxlc2hpcC4gWW91IGNhbiBwbGF5IHNpbmdsZS1wbGF5ZXIgYWdhaW5zdCB0aGUgY29tcHV0ZXJcXFxuIG9yIG11bHRpLXBsYXllciBhZ2FpbnN0IGEgZnJpZW5kIG9ubGluZS5gLFxuICAgIGluc3RydWN0aW9uczoge1xuICAgICAgICB2aWRlb0lkOiAncTBxcFE4ZG9VcDgnLFxuICAgICAgICB0ZXh0OiBpbnN0cnVjdGlvbnMsXG4gICAgfSxcbiAgICBjb25maWc6ICgpID0+IGltcG9ydCgnLi9jb25maWcnKSxcbiAgICBhaUNvbmZpZzogKCkgPT4gaW1wb3J0KCcuL2FpJyksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJTZWEgQmF0dGxlIGlzIHByaW1hcmlseSBhIGd1ZXNzaW5nIGdhbWUgZm9yIHR3byBwbGF5ZXJzLiAgSXQgaXMgcGxheWVkIG9uIHJ1bGVkIGdyaWRzIG9uIHdoaWNoIGVhY2ggcGxheWVyJ3MgY29udm95IG9mIHNoaXBzIGFyZSBjb25jZWFsZWQgZnJvbSB0aGUgb3RoZXIgcGxheWVyLiAgUGxheWVycyBhbHRlcm5hdGUgdHVybnMgZmlyaW5nIHNlcnZvcyBhdCB0aGUgb3RoZXIgcGxheWVyJ3Mgc2hpcHMsIGFuZCB0aGUgb2JqZWN0aXZlIG9mIHRoZSBnYW1lIGlzIHRvIGRlc3Ryb3kgdGhlIG9wcG9zaW5nIHBsYXllcidzIGVudGlyZSBmbGVldC5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIxNGI0NmMxODQ2YzhiNWI5N2QwNzhmNGVmMWUxODA5LnBuZ1wiOyIsImltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi9tZWRpYS90aHVtYm5haWwucG5nJztcbmltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZU1vZGVQaWNrZXInO1xuaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9ucy5tZCc7XG5leHBvcnQgY29uc3QgdGFrZXNpeEdhbWVEZWYgPSB7XG4gICAgY29kZTogJ3Rha2VzaXgnLFxuICAgIG5hbWU6ICdUYWtlIDYhJyxcbiAgICBpbWFnZVVSTDogVGh1bWJuYWlsLFxuICAgIG1vZGVzOiBbeyBtb2RlOiBHYW1lTW9kZS5BSSB9LCB7IG1vZGU6IEdhbWVNb2RlLk9ubGluZUZyaWVuZCB9XSxcbiAgICBtaW5QbGF5ZXJzOiAyLFxuICAgIG1heFBsYXllcnM6IDEwLFxuICAgIGRlc2NyaXB0aW9uOiAnU2ltaWxhciBUbyA2IE5pbW10IScsXG4gICAgZGVzY3JpcHRpb25UYWc6IGBQbGF5IFRha2UgNiEsIGEgZnJlZSBvbmxpbmUgZ2FtZSBzaW1pbGFyXFxcbiB0byA2IE5pbW10LiBZb3UgY2FuIHBsYXkgbXVsdGktcGxheWVyIGZyb20gdHdvIGFuZCB1cCB0b1xcXG4gdGVuIHBsYXllcnMgb25saW5lIWAsXG4gICAgaW5zdHJ1Y3Rpb25zOiB7XG4gICAgICAgIHZpZGVvSWQ6ICdmRjBsbkR5Z29lcycsXG4gICAgICAgIHRleHQ6IGluc3RydWN0aW9ucyxcbiAgICB9LFxuICAgIGNvbmZpZzogKCkgPT4gaW1wb3J0KCcuL2NvbmZpZycpLFxuICAgIGFpQ29uZmlnOiAoKSA9PiBpbXBvcnQoJy4vYWknKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcIlRha2UgNiEgaXMgYSBnYW1lIHRoYXQgY2FuIHBsYXkgZnJvbSB0d28gdG8gdGVuIHBsYXllcnMuIFRoZSBvYmplY3RpdmUgb2YgdGhlIGdhbWUgaXMgdG8gc2NvcmUgYXMgZmV3IHBlbmFsdHkgcG9pbnRzIGFzIHBvc3NpYmxlLlxcblxcblRoZSBib2FyZCBzdGFydHMgd2l0aCBvbmUgY2FyZCBpbiBlYWNoIG9mIHRoZSBmb3VyIHJvd3MuIFRoZW4sIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCB0dXJuLCBhbGwgcGxheWVycyBjaG9vc2UgdGhlIGNhcmQgdGhleSB3aXNoIHRvIHBsYXkgZnJvbSB0aGVpciBoYW5kIGF0IHRoZSBzYW1lIHRpbWUuIFRoZXNlIGNhcmRzIG11c3QgYmUgcGxhY2VkIGluIHRoZSByb3cgdGhhdCBlbmRzIHdpdGggdGhlIGhpZ2hlc3QgbnVtYmVyIHRoYXQgaXMgc3RpbGwgYmVsb3cgZWFjaCBjYXJkIG51bWJlci5cXG5cXG5Ib3dldmVyLCBpZiB0aGlzIHJvdyBhbHJlYWR5IGhhcyBmaXZlIGNhcmRzLCB0aGUgcGxheWVyIGhhcyB0byB0YWtlIGFsbCA2IGNhcmRzIChoZW5jZSBcXFwiVGFrZSA2IVxcXCIpLiBUYWtpbmcgdGhlc2UgY2FyZHMgYWRkcyB0aGVpciBwZW5hbHR5IHBvaW50cyB0byB0aGUgcGxheWVyJ3Mgc2NvcmUuIEEgcGxheWVyIG11c3QgYWxzbyB0YWtlIGNhcmRzIGlmIHRoZSBzZWxlY3RlZCBjYXJkIGlzIGxvd2VyIHRoYW4gdGhlIGxhc3QgY2FyZHMgaW4gYWxsIHJvd3MuIFRoZSBnYW1lIGVuZHMgd2hlbiBhbGwgcGxheWVycyBoYXZlIHBsYXllZCB0aGVpciBjYXJkcy5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY0OWMwZmQyZjFmNmZjMmFhYmZiOGY0NjkyN2FlMmYyLnBuZ1wiOyIsImltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi4vLi4vQXBwL0dhbWUvR2FtZU1vZGVQaWNrZXInO1xuaW1wb3J0IFRpY1RhY1RvZVRodW1ibmFpbCBmcm9tICcuL21lZGlhL3RodW1ibmFpbC5wbmcnO1xuaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9ucy5tZCc7XG5leHBvcnQgY29uc3QgdGljdGFjdG9lR2FtZURlZiA9IHtcbiAgICBjb2RlOiAndGljdGFjdG9lJyxcbiAgICBuYW1lOiAnVGljLVRhYy1Ub2UnLFxuICAgIG1pblBsYXllcnM6IDIsXG4gICAgbWF4UGxheWVyczogMixcbiAgICBpbWFnZVVSTDogVGljVGFjVG9lVGh1bWJuYWlsLFxuICAgIG1vZGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IEdhbWVNb2RlLkFJLFxuICAgICAgICAgICAgZXh0cmFJbmZvOiB7IHR5cGU6ICdkcm9wZG93bicsIG9wdGlvbnM6IFsnRWFzeScsICdIYXJkJ10gfSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5PbmxpbmVGcmllbmQgfSxcbiAgICAgICAgeyBtb2RlOiBHYW1lTW9kZS5Mb2NhbEZyaWVuZCB9LFxuICAgIF0sXG4gICAgZGVzY3JpcHRpb246ICdBIENsYXNzaWMgR2FtZScsXG4gICAgZGVzY3JpcHRpb25UYWc6IGBQbGF5IFRpYy1UYWMtVG9lIChhbHNvIGNhbGxlZCBOb3VnaHRzIGFuZCBDcm9zc2VzKSBmb3IgXFxcbiBmcmVlIG9ubGluZS4gWW91IGNhbiBlaXRoZXIgZG8gYSBzaW5nbGUtcGxheWVyIGdhbWUgYWdhaW5zdCB0aGUgY29tcHV0ZXIsXFxcbiBhIG11bHRpLXBsYXllciBnYW1lIGFnYWluc3QgYSBmcmllbmQgb25saW5lIG9yIHNoYXJlIHlvdXIgZGV2aWNlIGFuZCBwbGF5XFxcbiBsb2NhbGx5IGFnYWluc3QgYSBmcmllbmQuYCxcbiAgICBpbnN0cnVjdGlvbnM6IHtcbiAgICAgICAgdmlkZW9JZDogJ1VTRWpYTkNUdmNjJyxcbiAgICAgICAgdGV4dDogaW5zdHJ1Y3Rpb25zLFxuICAgIH0sXG4gICAgY29uZmlnOiAoKSA9PiBpbXBvcnQoJy4vY29uZmlnJyksXG4gICAgYWlDb25maWc6ICgpID0+IGltcG9ydCgnLi9haScpLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiVGljLXRhYy10b2UgaXMgYSBjbGFzc2ljIHR3by1wbGF5ZXIgZ2FtZS4gVGhpcyBnYW1lIGhhcyBhIDN4MyBncmlkLCBhbmQgaW4gdGhlaXIgdHVybiwgZWFjaCBwbGF5ZXIgcGxhY2VzIHRoZWlyIG1hcmtlciAoWCBvciBPKSBvbiBhIGNlbGwgaW4gdGhpcyBncmlkLlxcblxcbkluIG9yZGVyIHRvIHdpbiwgYSBwbGF5ZXIgaGFzIHRvIGNvbXBsZXRlIGEgZnVsbCBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgb3IgZGlhZ29uYWwgbGluZSB3aXRoIHRoZWlyIG1hcmtlci4gSWYgYWxsIGNlbGxzIGFyZSBmaWxsZWQgYW5kIG5vIHBsYXllciBtYW5hZ2VkIHRvIGRvIHRoaXMsIGl0IGlzIGEgZHJhdy5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3NmY2YzIwNWVhZGMyYzAzYzQyYTFhMjM0MTkzYTc0LnBuZ1wiOyIsImltcG9ydCB7IEdBTUVTX0xJU1QgfSBmcm9tICcuL2dhbWVzJztcbmNvbnN0IFRJVExFX1BSRUZJWCA9ICdGcmVlQm9hcmRHYW1lLm9yZyAtICc7XG5jb25zdCBVUkxfQkFTRSA9ICdodHRwczovL0ZyZWVCb2FyZEdhbWUub3JnJztcbmNvbnN0IERFRkFVTFRfTUVUQURBVEEgPSB7XG4gICAgdGl0bGU6ICdGcmVlQm9hcmRHYW1lLm9yZycsXG4gICAgZGVzY3JpcHRpb246IGBQbGF5IGJvYXJkIGdhbWVzIGluIHlvdXIgYnJvd3NlciBmb3IgZnJlZS4gXFxcbkNvbXBldGUgYWdhaW5zdCB5b3VyIG9ubGluZSBmcmllbmRzIG9yIHBsYXkgbG9jYWxseS4gRnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgcHJvamVjdC5gLFxuICAgIG5vaW5kZXg6IHRydWUsXG59O1xuLy8gTW9zdCBzcGVjaWZpYyBVUkxzIE1VU1QgY29tZSBmaXJzdC5cbmNvbnN0IFBBR0VTX01FVEFEQVRBID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0Fib3V0IFVzJyxcbiAgICAgICAgdGl0bGU6IFRJVExFX1BSRUZJWCArICdBYm91dCBVcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWJvdXQgRnJlZUJvYXJkR2FtZS5vcmcsIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgcHJvamVjdC4nLFxuICAgICAgICB1cmw6IG5ldyBSZWdFeHAoJ14vYWJvdXQnLCAnaScpLFxuICAgICAgICBsaW5rOiBVUkxfQkFTRSArICcvYWJvdXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogVElUTEVfUFJFRklYICsgJ1BsYXkgRnJlZSBCb2FyZCBHYW1lcyBPbmxpbmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFBsYXkgYm9hcmQgZ2FtZXMgaW4geW91ciBicm93c2VyIGZvciBmcmVlLiBcXFxuQ29tcGV0ZSBhZ2FpbnN0IHlvdXIgb25saW5lIGZyaWVuZHMgb3IgcGxheSBsb2NhbGx5LiBGcmVlIGFuZCBvcGVuLXNvdXJjZSBzb2Z0d2FyZSBwcm9qZWN0LmAsXG4gICAgICAgIHVybDogbmV3IFJlZ0V4cCgnXi8kJywgJ2knKSxcbiAgICB9LFxuXTtcbmZ1bmN0aW9uIGdldEdhbWVzUGFnZU1ldGFkYXRhKCkge1xuICAgIHJldHVybiBHQU1FU19MSVNULm1hcChnYW1lRGVmID0+ICh7XG4gICAgICAgIG5hbWU6IGBQbGF5ICR7Z2FtZURlZi5uYW1lfWAsXG4gICAgICAgIHRpdGxlOiBUSVRMRV9QUkVGSVggKyBgUGxheSAke2dhbWVEZWYubmFtZX0sICR7Z2FtZURlZi5kZXNjcmlwdGlvbn1gLFxuICAgICAgICBkZXNjcmlwdGlvbjogZ2FtZURlZi5kZXNjcmlwdGlvblRhZyxcbiAgICAgICAgdXJsOiBuZXcgUmVnRXhwKGBeL2cvJHtnYW1lRGVmLmNvZGV9JGAsICdpJyksXG4gICAgICAgIGxpbms6IGAke1VSTF9CQVNFfS9nLyR7Z2FtZURlZi5jb2RlfWAsXG4gICAgfSkpO1xufVxuLyoqIEdpdmVuIGEgVVJMLCBnZXRzIGl0cyB0aXRsZS4gKi9cbmV4cG9ydCBjb25zdCBnZXRQYWdlTWV0YWRhdGEgPSAodXJsKSA9PiB7XG4gICAgY29uc3QgYWxsUGFnZXNNZXRhZGF0YSA9IFsuLi5QQUdFU19NRVRBREFUQSwgLi4uZ2V0R2FtZXNQYWdlTWV0YWRhdGEoKV07XG4gICAgY29uc3QgbWV0YWRhdGEgPSBhbGxQYWdlc01ldGFkYXRhLmZpbmQobWV0YSA9PiBtZXRhLnVybC50ZXN0KHVybCkpO1xuICAgIGlmICghbWV0YWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfTUVUQURBVEE7XG4gICAgfVxuICAgIHJldHVybiBtZXRhZGF0YTtcbn07XG5leHBvcnQgY29uc3QgZ2V0QnJlYWRjcnVtYnMgPSAodXJsKSA9PiB7XG4gICAgaWYgKHVybCA9PT0gJy8nKSB7XG4gICAgICAgIGNvbnN0IGdhbWVQYWdlc01ldGFkYXRhID0gZ2V0R2FtZXNQYWdlTWV0YWRhdGEoKTtcbiAgICAgICAgY29uc3QgcGFnZUVsZW1lbnRzID0gZ2FtZVBhZ2VzTWV0YWRhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKHBhZ2VNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2VNZXRhZGF0YS5uYW1lICYmIHBhZ2VNZXRhZGF0YS5saW5rOyAvLyBjaGVjayBpZiB3ZSBoYXZlIGJvdGggLm5hbWUgYW5kIC5saW5rXG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChwYWdlTWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGEgaXRlbXByb3A9XCJ1cmxcIiBocmVmPVwiJHtwYWdlTWV0YWRhdGEubGlua31cIj4ke3BhZ2VNZXRhZGF0YS5uYW1lfTwvYT5gO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhZ2VFbGVtZW50cy5qb2luKCdcXG4nKTtcbiAgICB9XG59O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==