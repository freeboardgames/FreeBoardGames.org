/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server_fbg": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + {"0":"842598af5b175817496d","1":"7746c62e78ad1fdc09d5","2":"267d3d56b9109ad8995b","3":"ab9febd1180e86bdae91","4":"38e759d35db879a1a38d","5":"695b992ddfef7b2e55e6","6":"345b19ae439f7171bb0e","7":"670af1a10e772ba30c4e","8":"097a821b947f57486abb","9":"b234b6c978a97ec531e1","10":"1e7c2f92da80a0c5fa89","11":"880888892a16dd8fca11","12":"7565addeef27db65cfc2","13":"1659bb260c2d10f51b67","14":"ccbd641923ce38c1adf1","15":"535d40b7812d4abf27fc","16":"2fa2a1df09ff8218e22f","17":"e10cf6ba0a9bd4ce290a","18":"318e59cb43f60804f592"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server_fbg.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n sync recursive ^\\.\\/.*\\.po\\.json$":
/*!**************************************!*\
  !*** ./i18n sync ^\.\/.*\.po\.json$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./cs.po.json\": \"./i18n/cs.po.json\",\n\t\"./en.po.json\": \"./i18n/en.po.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./i18n sync recursive ^\\\\.\\\\/.*\\\\.po\\\\.json$\";\n\n//# sourceURL=webpack:///./i18n_sync_^\\.\\/.*\\.po\\.json$?");

/***/ }),

/***/ "./i18n/cs.po.json":
/*!*************************!*\
  !*** ./i18n/cs.po.json ***!
  \*************************/
/*! exports provided: charset, headers, translations, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"charset\\\":\\\"utf-8\\\",\\\"headers\\\":{\\\"content-type\\\":\\\"text/plain; charset=utf-8\\\",\\\"plural-forms\\\":\\\"nplurals = 3; plural = (n == 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);\\\",\\\"language\\\":\\\"cs\\\",\\\"mime-version\\\":\\\"1.0\\\",\\\"content-transfer-encoding\\\":\\\"8bit\\\"},\\\"translations\\\":{\\\"\\\":{\\\"\\\":{\\\"msgid\\\":\\\"\\\",\\\"msgstr\\\":[\\\"Content-Type: text/plain; charset=utf-8\\\\nPlural-Forms: nplurals = 3; plural = (n == 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);\\\\nLanguage: cs\\\\nmime-version: 1.0\\\\nContent-Transfer-Encoding: 8bit\\\\n\\\"]},\\\"messagePage.goHome\\\":{\\\"msgid\\\":\\\"messagePage.goHome\\\",\\\"msgstr\\\":[\\\"Domů\\\"]},\\\"about.header\\\":{\\\"msgid\\\":\\\"about.header\\\",\\\"msgstr\\\":[\\\"Informace o FreeBoardGame.org\\\"]},\\\"about.p\\\":{\\\"msgid\\\":\\\"about.p\\\",\\\"msgstr\\\":[\\\"FreeBoardGame.org je bezplatná (svobodná) platforma pro deskové hry přizpůsobená pro mobilní telefony. Její cíl je popularizovat deskové hry a umožnit jejich snadné hraní s přáteli, dokonce i z daleka.\\\"]},\\\"about.contributors\\\":{\\\"msgid\\\":\\\"about.contributors\\\",\\\"msgstr\\\":[\\\"Přispěvatelé\\\"]},\\\"about.credits\\\":{\\\"msgid\\\":\\\"about.credits\\\",\\\"msgstr\\\":[\\\"Kredity\\\"]}}}}\");\n\n//# sourceURL=webpack:///./i18n/cs.po.json?");

/***/ }),

/***/ "./i18n/en.po.json":
/*!*************************!*\
  !*** ./i18n/en.po.json ***!
  \*************************/
/*! exports provided: charset, headers, translations, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"charset\\\":\\\"utf-8\\\",\\\"headers\\\":{\\\"content-type\\\":\\\"text/plain; charset=utf-8\\\",\\\"plural-forms\\\":\\\"nplurals = 2; plural = (n != 1);\\\",\\\"language\\\":\\\"en\\\",\\\"mime-version\\\":\\\"1.0\\\",\\\"content-transfer-encoding\\\":\\\"8bit\\\"},\\\"translations\\\":{\\\"\\\":{\\\"\\\":{\\\"msgid\\\":\\\"\\\",\\\"msgstr\\\":[\\\"Content-Type: text/plain; charset=utf-8\\\\nPlural-Forms: nplurals = 2; plural = (n != 1);\\\\nLanguage: en\\\\nmime-version: 1.0\\\\nContent-Transfer-Encoding: 8bit\\\\n\\\"]},\\\"about.header\\\":{\\\"msgid\\\":\\\"about.header\\\",\\\"msgstr\\\":[\\\"About FreeBoardGame.org\\\"]},\\\"about.contributors\\\":{\\\"msgid\\\":\\\"about.contributors\\\",\\\"msgstr\\\":[\\\"Contributors\\\"]},\\\"about.credits\\\":{\\\"msgid\\\":\\\"about.credits\\\",\\\"msgstr\\\":[\\\"Credits\\\"]},\\\"about.p\\\":{\\\"msgid\\\":\\\"about.p\\\",\\\"msgstr\\\":[\\\"FreeBoardGame.org is a free (as in freedom), mobile-first, board game platform. Its goal is to popularize board games and to make them easy to play with friends, even from afar.\\\"]},\\\"messagePage.goHome\\\":{\\\"msgid\\\":\\\"messagePage.goHome\\\",\\\"msgstr\\\":[\\\"Go Home\\\"]}}}}\");\n\n//# sourceURL=webpack:///./i18n/en.po.json?");

/***/ }),

/***/ "./src/About/AboutAsync.tsx":
/*!**********************************!*\
  !*** ./src/About/AboutAsync.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Async */ \"./src/App/Async.tsx\");\n\nconst AboutAsync = Object(_App_Async__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('About', () => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./About */ \"./src/About/About.tsx\")));\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutAsync);\n\n//# sourceURL=webpack:///./src/About/AboutAsync.tsx?");

/***/ }),

/***/ "./src/App/App.tsx":
/*!*************************!*\
  !*** ./src/App/App.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game_GameInfoAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/GameInfoAsync */ \"./src/App/Game/GameInfoAsync.tsx\");\n/* harmony import */ var _Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/GameAsync */ \"./src/App/Game/GameAsync.tsx\");\n/* harmony import */ var _Lobby_NewRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lobby/NewRoom */ \"./src/App/Lobby/NewRoom.tsx\");\n/* harmony import */ var _Lobby_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lobby/Room */ \"./src/App/Lobby/Room.tsx\");\n/* harmony import */ var _Home_HomeAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Home/HomeAsync */ \"./src/Home/HomeAsync.tsx\");\n/* harmony import */ var _About_AboutAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../About/AboutAsync */ \"./src/About/AboutAsync.tsx\");\n/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessagePage */ \"./src/App/MessagePage.tsx\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../metadata */ \"./src/metadata.ts\");\n/* harmony import */ var _Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Helpers/SSRHelper */ \"./src/App/Helpers/SSRHelper.ts\");\n/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollToTop */ \"./src/App/ScrollToTop.tsx\");\n/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ttag */ \"ttag\");\n/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nreact_ga__WEBPACK_IMPORTED_MODULE_9___default.a.initialize('UA-105391878-1');\nconst SUPPORTED_LOCALES = ['en', 'cs'];\n\nconst withScrollToTop = WrappedComponent => {\n  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props)));\n    }\n\n  }\n\n  return Wrapper;\n};\n\nconst withGA = WrappedComponent => {\n  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    render() {\n      if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__[\"default\"].isSSR()) {\n        react_ga__WEBPACK_IMPORTED_MODULE_9___default.a.set({\n          page: window.location.pathname\n        });\n        react_ga__WEBPACK_IMPORTED_MODULE_9___default.a.pageview(window.location.pathname);\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props));\n    }\n\n  }\n\n  return Wrapper;\n};\n\nconst withI18n = WrappedComponent => {\n  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    render() {\n      let locale = this.props.match.params.locale;\n\n      if (locale === 'en' || locale && !(locale in SUPPORTED_LOCALES)) {\n        const ErrorPage = withWrappers(Object(_MessagePage__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('error', 'Invalid Locale')); // pass newProps instead of this.props to avoid an infinite-loop (because of this.props.match.params.locale)\n\n        const newProps = Object.assign({}, this.props, {\n          match: {\n            params: {\n              locale: ''\n            }\n          }\n        });\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, Object.assign({}, newProps));\n      }\n\n      locale = locale || 'en';\n\n      const translationsObj = __webpack_require__(\"./i18n sync recursive ^\\\\.\\\\/.*\\\\.po\\\\.json$\")(`./${locale}.po.json`);\n\n      Object(ttag__WEBPACK_IMPORTED_MODULE_13__[\"addLocale\"])(locale, translationsObj);\n      Object(ttag__WEBPACK_IMPORTED_MODULE_13__[\"useLocale\"])(locale);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props));\n    }\n\n  }\n\n  return Wrapper;\n};\n\nconst withWrappers = WrappedComponent => {\n  return withScrollToTop(withI18n(withGA(WrappedComponent)));\n};\n\nconst BASEPATH = '/:locale([A-Za-z]{2})?';\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_11__[\"default\"].isSSR()) {\n      document.title = Object(_metadata__WEBPACK_IMPORTED_MODULE_10__[\"getPageMetadata\"])(window.location.pathname).title;\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: BASEPATH,\n      component: withWrappers(_Home_HomeAsync__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: `${BASEPATH}/about`,\n      component: withWrappers(_About_AboutAsync__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: `${BASEPATH}/g/:gameCode`,\n      component: withWrappers(_Game_GameInfoAsync__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: `${BASEPATH}/g/:gameCode/:mode`,\n      component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: `${BASEPATH}/g/:gameCode/:mode/:aiLevel`,\n      component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: `${BASEPATH}/g/:gameCode/:mode/:matchCode/:playerID`,\n      component: withWrappers(_Game_GameAsync__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: `${BASEPATH}/room/new/:gameCode/:numPlayers`,\n      exact: true,\n      component: withWrappers(_Lobby_NewRoom__WEBPACK_IMPORTED_MODULE_4__[\"NewRoom\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: `${BASEPATH}/room/:gameCode/:roomID`,\n      exact: true,\n      component: withWrappers(_Lobby_Room__WEBPACK_IMPORTED_MODULE_5__[\"Room\"])\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      component: withWrappers(Object(_MessagePage__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('error', 'Not Found'))\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/App/App.tsx?");

/***/ }),

/***/ "./src/App/Async.tsx":
/*!***************************!*\
  !*** ./src/App/Async.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagePage */ \"./src/App/MessagePage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getAsync = (name, resolve) => react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: resolve,\n  loading: props => {\n    let Message;\n\n    if (props.error) {\n      Message = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('error', `Error Loading ${name} Page.`);\n    } else {\n      Message = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('loading', `Loading ${name} Page...`);\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Message, null);\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAsync);\n\n//# sourceURL=webpack:///./src/App/Async.tsx?");

/***/ }),

/***/ "./src/App/FreeBoardGameBar.tsx":
/*!**************************************!*\
  !*** ./src/App/FreeBoardGameBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/fbg_logo_white_48.png */ \"./src/App/media/fbg_logo_white_48.png\");\n/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentWillMount() {\n    if (typeof window !== 'undefined') {\n      document.body.style.backgroundColor = 'white';\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        maxWidth: '500px',\n        marginLeft: 'auto',\n        marginRight: 'auto'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"/\",\n      style: {\n        textDecoration: 'none'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      position: \"sticky\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      style: {\n        marginRight: '8px',\n        height: '48px'\n      },\n      src: _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n      alt: \"FbG\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      variant: \"h6\",\n      style: {\n        color: 'white'\n      }\n    }, \"FreeBoardGame.org\")))), this.props.children);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App/FreeBoardGameBar.tsx?");

/***/ }),

/***/ "./src/App/Game/AlertLayer.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/AlertLayer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass AlertLayer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const mainStyle = {\n      position: 'absolute',\n      left: 0,\n      top: 0,\n      background: 'rgba(255,255,255,.85)',\n      right: 0,\n      height: '100%',\n      zIndex: 9001,\n      display: 'block',\n      textAlign: 'center'\n    };\n    const alignStyle = {\n      transform: 'translateX(-50%) translateY(-50%)',\n      left: '50%',\n      top: '50%',\n      position: 'absolute'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: mainStyle\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: alignStyle\n    }, this.props.children));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlertLayer);\n\n//# sourceURL=webpack:///./src/App/Game/AlertLayer.tsx?");

/***/ }),

/***/ "./src/App/Game/Enhancers/ReactGAEnhancer.ts":
/*!***************************************************!*\
  !*** ./src/App/Game/Enhancers/ReactGAEnhancer.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ReactGAEnhancerEvent = gameArgs => () => next => action => {\n  if (action.type !== 'UPDATE') {\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({\n      category: 'ReactGAEnhancer',\n      label: gameArgs.gameCode,\n      action: action.type\n    });\n  }\n\n  return next(action);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactGAEnhancerEvent);\n\n//# sourceURL=webpack:///./src/App/Game/Enhancers/ReactGAEnhancer.ts?");

/***/ }),

/***/ "./src/App/Game/Enhancers/index.ts":
/*!*****************************************!*\
  !*** ./src/App/Game/Enhancers/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReactGAEnhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactGAEnhancer */ \"./src/App/Game/Enhancers/ReactGAEnhancer.ts\");\n\nconst defaultEnhancers = [_ReactGAEnhancer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultEnhancers);\n\n//# sourceURL=webpack:///./src/App/Game/Enhancers/index.ts?");

/***/ }),

/***/ "./src/App/Game/FacebookIcon.tsx":
/*!***************************************!*\
  !*** ./src/App/Game/FacebookIcon.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ \"@material-ui/core/SvgIcon\");\n/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass FacebookIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: \"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\"\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FacebookIcon);\n\n//# sourceURL=webpack:///./src/App/Game/FacebookIcon.tsx?");

/***/ }),

/***/ "./src/App/Game/Game.tsx":
/*!*******************************!*\
  !*** ./src/App/Game/Game.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @freeboardgame.org/boardgame.io/react */ \"@freeboardgame.org/boardgame.io/react\");\n/* harmony import */ var _freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../games */ \"./src/games/index.ts\");\n/* harmony import */ var _GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameBoardWrapper */ \"./src/App/Game/GameBoardWrapper.tsx\");\n/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MessagePage */ \"./src/App/MessagePage.tsx\");\n/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MessagePageClass */ \"./src/App/MessagePageClass.tsx\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Enhancers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Enhancers */ \"./src/App/Game/Enhancers/index.ts\");\n/* harmony import */ var _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Helpers/AddressHelper */ \"./src/App/Helpers/AddressHelper.ts\");\n/* harmony import */ var _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Lobby/LobbyService */ \"./src/App/Lobby/LobbyService.ts\");\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading: true\n    };\n\n    if (this.props.room) {\n      this.mode = _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].OnlineFriend;\n      this.gameCode = this.props.room.gameCode;\n      this.currentUser = this.props.room.currentUser;\n    } else {\n      this.mode = this.props.match.params.mode;\n      this.loadAI = this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].AI && typeof window !== 'undefined';\n      this.gameCode = this.props.match.params.gameCode;\n    }\n\n    this.gameDef = _games__WEBPACK_IMPORTED_MODULE_2__[\"GAMES_MAP\"][this.gameCode];\n  }\n\n  clear() {\n    this.setState({\n      loading: true\n    });\n  }\n\n  load() {\n    if (this.gameDef) {\n      let aiPromise = Promise.resolve({});\n\n      if (this.loadAI) {\n        aiPromise = this.gameDef.aiConfig();\n      }\n\n      return Promise.all([this.gameDef.config(), aiPromise]).then(promises => {\n        this.setState(() => ({\n          config: promises[0].default,\n          ai: this.loadAI ? promises[1].default : null,\n          loading: false\n        }));\n      }, () => {\n        this.setState({\n          loading: false\n        });\n      });\n    } else {\n      this.setState({\n        loading: false\n      });\n      return Promise.resolve();\n    }\n  }\n\n  componentDidMount() {\n    if (this.gameDef) {\n      this.promise = this.load();\n    }\n  }\n\n  componentWillUnmount() {\n    this.clear();\n  }\n\n  render() {\n    let aiLevel, matchCode, playerID, credentials;\n\n    if (this.props.match) {\n      aiLevel = this.props.match.params.aiLevel;\n      matchCode = this.props.match.params.matchCode;\n      playerID = this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].AI ? '0' : this.props.match.params.playerID;\n    } else {\n      credentials = _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_10__[\"LobbyService\"].getCredential(this.props.room.roomID).credential;\n      playerID = this.currentUser.playerID.toString();\n      matchCode = this.props.room.roomID;\n    }\n\n    if (!this.gameDef) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        type: 'error',\n        message: 'Game Not Found'\n      });\n    }\n\n    const validGameModes = this.gameDef.modes.map(mode => mode.mode.toLowerCase());\n\n    if (!validGameModes.includes(this.mode.toLowerCase())) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        type: 'error',\n        message: 'Invalid Game Mode'\n      });\n    }\n\n    if (!this.state.loading && this.state.config) {\n      const gameArgs = {\n        gameCode: this.gameCode,\n        mode: this.mode,\n        credentials,\n        matchCode,\n        players: this._getPlayers(),\n        playerID\n      };\n      const clientConfig = {\n        game: this.state.config.bgioGame,\n        debug: this.state.config.debug || false,\n        loading: Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('loading', 'Connecting...'),\n        board: Object(_GameBoardWrapper__WEBPACK_IMPORTED_MODULE_3__[\"gameBoardWrapper\"])({\n          board: this.state.config.bgioBoard,\n          gameArgs\n        }),\n        credentials,\n        gameID: matchCode\n      };\n      const allEnhancers = this.state.config.enhancers ? this.state.config.enhancers.concat(_Enhancers__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) : _Enhancers__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      const enhancers = allEnhancers.map(enhancer => enhancer(gameArgs));\n      clientConfig.enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_7__[\"applyMiddleware\"])(...enhancers);\n      const ai = this.state.ai;\n\n      if (this.loadAI && ai) {\n        clientConfig.ai = ai.bgioAI(aiLevel);\n      }\n\n      if (this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].OnlineFriend) {\n        clientConfig.multiplayer = {\n          server: _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getServerAddress()\n        };\n      }\n\n      const App = Object(_freeboardgame_org_boardgame_io_react__WEBPACK_IMPORTED_MODULE_1__[\"Client\"])(clientConfig);\n\n      if (this.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].OnlineFriend) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {\n          gameID: matchCode,\n          playerID: playerID,\n          credentials: credentials\n        });\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {\n          gameID: matchCode,\n          playerID: playerID\n        });\n      }\n    } else if (this.state.loading) {\n      const LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('loading', `Downloading ${this.gameDef.name}...`);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);\n    } else {\n      const ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('error', `Failed to download ${this.gameDef.name}.`);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);\n    }\n  }\n\n  _getPlayers() {\n    switch (this.mode) {\n      case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].OnlineFriend:\n        return this.props.room.players;\n\n      case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].AI:\n        return [{\n          playerID: 0,\n          name: 'You',\n          roomID: ''\n        }, {\n          playerID: 1,\n          name: 'Computer',\n          roomID: ''\n        }];\n\n      case _GameModePicker__WEBPACK_IMPORTED_MODULE_4__[\"GameMode\"].LocalFriend:\n        return [{\n          playerID: 0,\n          name: 'Player 1',\n          roomID: ''\n        }, {\n          playerID: 1,\n          name: 'Player 2',\n          roomID: ''\n        }];\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/Game.tsx?");

/***/ }),

/***/ "./src/App/Game/GameAsync.tsx":
/*!************************************!*\
  !*** ./src/App/Game/GameAsync.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Async */ \"./src/App/Async.tsx\");\n\nconst GameAsync = Object(_Async__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Game', () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Game */ \"./src/App/Game/Game.tsx\")));\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameAsync);\n\n//# sourceURL=webpack:///./src/App/Game/GameAsync.tsx?");

/***/ }),

/***/ "./src/App/Game/GameBoardWrapper.tsx":
/*!*******************************************!*\
  !*** ./src/App/Game/GameBoardWrapper.tsx ***!
  \*******************************************/
/*! exports provided: gameBoardWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardWrapper\", function() { return gameBoardWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AlertLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertLayer */ \"./src/App/Game/AlertLayer.tsx\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction gameBoardWrapper(args) {\n  class Board extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    render() {\n      const props = Object.assign({}, this.props, {\n        gameArgs: args.gameArgs\n      });\n      const child = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(args.board, props);\n      let alert;\n\n      if (!this.props.isConnected) {\n        alert = this._getConnectionLost();\n      }\n\n      if (!alert) {\n        return child;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: '100%',\n          height: '100%'\n        }\n      }, child, alert);\n    }\n\n    _getConnectionLost() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        variant: \"h4\"\n      }, \"Connection lost\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        variant: \"body1\"\n      }, \"Trying to connect...\"));\n    }\n\n  }\n\n  return Board;\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameBoardWrapper.tsx?");

/***/ }),

/***/ "./src/App/Game/GameCard.tsx":
/*!***********************************!*\
  !*** ./src/App/Game/GameCard.tsx ***!
  \***********************************/
/*! exports provided: GameCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameCard\", function() { return GameCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"@material-ui/icons/NavigateNext\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass GameCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    let navigateButton = null;\n    const mainDivStyle = {\n      marginBottom: '16px',\n      position: 'relative',\n      height: '250px',\n      width: '100%',\n      backgroundPosition: 'left center',\n      backgroundImage: `url(${this.props.game.imageURL})`\n    };\n    const baseBadgeStyle = {\n      position: 'absolute',\n      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',\n      padding: '0px 8px',\n      borderRadius: '8px',\n      backgroundColor: 'white'\n    };\n\n    if (this.props.isLink) {\n      mainDivStyle.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';\n      mainDivStyle.borderRadius = '8px';\n      navigateButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: Object.assign({}, baseBadgeStyle, {\n          bottom: '12px',\n          right: '8px',\n          borderRadius: '32px',\n          padding: '0'\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        \"aria-label\": \"Next\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, null)));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: mainDivStyle\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: Object.assign({}, baseBadgeStyle, {\n        top: '12px',\n        left: '8px',\n        paddingTop: '4px'\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      gutterBottom: false,\n      variant: \"h4\",\n      component: \"h4\",\n      style: {\n        fontWeight: 300\n      }\n    }, this.props.game.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: Object.assign({}, baseBadgeStyle, {\n        bottom: '12px',\n        left: '8px'\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      gutterBottom: false,\n      variant: \"overline\",\n      component: \"p\"\n    }, this.props.game.description)), navigateButton);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameCard.tsx?");

/***/ }),

/***/ "./src/App/Game/GameInfoAsync.tsx":
/*!****************************************!*\
  !*** ./src/App/Game/GameInfoAsync.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Async */ \"./src/App/Async.tsx\");\n\nconst GameInfoAsync = Object(_Async__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Game Info', () => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./GameInfo */ \"./src/App/Game/GameInfo.tsx\")));\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameInfoAsync);\n\n//# sourceURL=webpack:///./src/App/Game/GameInfoAsync.tsx?");

/***/ }),

/***/ "./src/App/Game/GameModePicker.tsx":
/*!*****************************************!*\
  !*** ./src/App/Game/GameModePicker.tsx ***!
  \*****************************************/
/*! exports provided: GameMode, GameModePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameMode\", function() { return GameMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameModePicker\", function() { return GameModePicker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Android */ \"@material-ui/icons/Android\");\n/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Group */ \"@material-ui/icons/Group\");\n/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Wifi */ \"@material-ui/icons/Wifi\");\n/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slider */ \"@material-ui/core/Slider\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuList */ \"@material-ui/core/MenuList\");\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar GameMode;\n\n(function (GameMode) {\n  GameMode[\"AI\"] = \"AI\";\n  GameMode[\"OnlineFriend\"] = \"online\";\n  GameMode[\"LocalFriend\"] = \"local\";\n})(GameMode || (GameMode = {}));\n\nclass GameModePicker extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this._getLink = to => react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__[\"Link\"], Object.assign({\n        to: to,\n        rel: \"nofollow\"\n      }, props, {\n        ref: ref\n      }));\n    });\n\n    this._handleNumPlayersSelect = event => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[GameMode.OnlineFriend] = event.target.value;\n      this.setState(newState);\n    };\n\n    this._handleSliderChange = mode => (event, value) => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[mode] = value;\n      this.setState(newState);\n    };\n\n    this._handleClickSelection = (mode, value) => () => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[mode] = value;\n      this.setState(newState);\n    };\n\n    this.state = {\n      extraInfo: {\n        online: this.props.gameDef.minPlayers\n      }\n    };\n  }\n\n  render() {\n    const modes = [];\n\n    for (const mode of this.props.gameDef.modes) {\n      modes.push(this._getCard(mode));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      variant: \"subtitle1\",\n      style: {\n        marginBottom: '16px'\n      }\n    }, \"Choose game mode\"), modes);\n  }\n\n  _getCard(info) {\n    let title;\n    let description;\n    let icon;\n\n    switch (info.mode) {\n      case GameMode.AI:\n        title = 'Computer (AI)';\n        description = 'Play against the computer in your browser.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default.a, null);\n        break;\n\n      case GameMode.LocalFriend:\n        title = 'Local Friend';\n        description = 'Share your device and play against a friend locally.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default.a, null);\n        break;\n\n      case GameMode.OnlineFriend:\n        title = 'Online Friend';\n        description = 'Share a link and play against a friend online.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default.a, null);\n        break;\n    }\n\n    const extraInfo = this._getExtraInfo(info);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      key: title,\n      style: {\n        marginBottom: '16px'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        \"aria-label\": title\n      }, icon),\n      title: title\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      component: \"p\"\n    }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, null, extraInfo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {\n      \"data-testid\": \"playButton\",\n      component: this._getLink(this._getUrl(info)),\n      variant: \"contained\",\n      color: \"primary\",\n      style: {\n        marginLeft: 'auto'\n      }\n    }, \"Play\")));\n  }\n\n  _getExtraInfoValue(info) {\n    return this.state.extraInfo[info.mode] || 1;\n  }\n\n  _getExtraInfo(info) {\n    if (info.mode == GameMode.OnlineFriend) {\n      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {\n        return this._getExtraInfoNumPlayers(info, this.props.gameDef.minPlayers, this.props.gameDef.maxPlayers);\n      }\n    }\n\n    if (info.extraInfo) {\n      const extraInfo = info.extraInfo;\n\n      if (extraInfo.type === 'slider') {\n        const slider = extraInfo;\n        return this._getExtraInfoSlider(info, slider);\n      } else if (extraInfo.type === 'dropdown') {\n        const dropdown = extraInfo;\n        return this._getExtraInfoDropdown(info, dropdown);\n      }\n    }\n\n    return null;\n  }\n\n  _getExtraInfoNumPlayers(info, minPlayers, maxPlayers) {\n    const options = [];\n\n    for (let i = minPlayers; i <= maxPlayers; i++) {\n      options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        value: i,\n        key: i\n      }, i, \" Players\"));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        marginBottom: '8px'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      style: {\n        position: 'relative',\n        top: '8px',\n        padding: '0 8px'\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default.a, {\n      value: this._getExtraInfoValue(info),\n      onChange: this._handleNumPlayersSelect\n    }, options));\n  }\n\n  _getExtraInfoSlider(info, slider) {\n    const value = this._getExtraInfoValue(info);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        marginBottom: '18px',\n        width: '80%'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      id: \"label\",\n      style: {\n        marginBottom: '8px'\n      }\n    }, \"Difficulty \", value, \"/\", slider.max), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      value: value,\n      min: slider.min,\n      max: slider.max,\n      step: 1,\n      onChange: this._handleSliderChange(info.mode)\n    }));\n  }\n\n  _getExtraInfoDropdown(info, dropdown) {\n    const list = dropdown.options.map((option, idx) => {\n      idx++;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        onClick: this._handleClickSelection(info.mode, idx),\n        key: option,\n        value: option,\n        selected: this._getExtraInfoValue(info) === idx\n      }, option);\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      style: {\n        paddingTop: 0,\n        paddingBottom: 0,\n        display: 'flex'\n      }\n    }, list));\n  }\n\n  _getUrl(info) {\n    const mode = info.mode;\n\n    switch (mode) {\n      case GameMode.AI:\n        if (info.extraInfo) {\n          return `/g/${this.props.gameDef.code}/AI/${this._getExtraInfoValue(info)}`;\n        } else {\n          return `/g/${this.props.gameDef.code}/AI`;\n        }\n\n      case GameMode.LocalFriend:\n        return `/g/${this.props.gameDef.code}/local`;\n\n      case GameMode.OnlineFriend:\n        return `/room/new/${this.props.gameDef.code}/${this._getExtraInfoValue(info)}`;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameModePicker.tsx?");

/***/ }),

/***/ "./src/App/Game/GameSharing.tsx":
/*!**************************************!*\
  !*** ./src/App/Game/GameSharing.tsx ***!
  \**************************************/
/*! exports provided: GameSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSharing\", function() { return GameSharing; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ \"@material-ui/icons/Email\");\n/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ \"@material-ui/icons/FileCopy\");\n/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FacebookIcon */ \"./src/App/Game/FacebookIcon.tsx\");\n/* harmony import */ var _QrCodeIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./QrCodeIcon */ \"./src/App/Game/QrCodeIcon.tsx\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! copy-to-clipboard */ \"copy-to-clipboard\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"@material-ui/core/Tooltip\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _AlertLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AlertLayer */ \"./src/App/Game/AlertLayer.tsx\");\n/* harmony import */ var _Lobby_QrCodePopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Lobby/QrCodePopup */ \"./src/App/Lobby/QrCodePopup.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass GameSharing extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showingQrCode: false\n    };\n    this.sendEmailCallback = this.sendEmail.bind(this);\n    this.shareFacebookCallback = this.shareFacebook.bind(this);\n    this.copyClipboardCallback = this.copyClipboard.bind(this);\n    this.showQrCodeCallback = this.showQrCode.bind(this);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.state.showingQrCode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertLayer__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lobby_QrCodePopup__WEBPACK_IMPORTED_MODULE_16__[\"QrCodePopup\"], {\n      url: this._getLink(),\n      toggleQrCode: this.showQrCodeCallback\n    })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      style: {\n        paddingBottom: '16px'\n      },\n      variant: \"h5\",\n      component: \"h2\"\n    }, \"Invite Your Friends\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default.a, {\n      style: {\n        width: '100%'\n      },\n      defaultValue: this._getLink(),\n      label: \"Link\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      title: \"Send link by e-mail\",\n      \"aria-label\": \"E-mail\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      onClick: this.sendEmailCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      title: \"Share on Facebook\",\n      \"aria-label\": \"Facebook\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      onClick: this.shareFacebookCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      title: \"Show QR code\",\n      \"aria-label\": \"QR code\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      onClick: this.showQrCodeCallback\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QrCodeIcon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: this.copyClipboardCallback,\n      style: {\n        marginLeft: 'auto'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      \"aria-label\": \"Copy\",\n      style: {\n        marginRight: '8px'\n      }\n    }), \"Copy Link\"))));\n  }\n\n  sendEmail() {\n    react_ga__WEBPACK_IMPORTED_MODULE_12___default.a.event({\n      category: 'GameSharing',\n      action: 'sendEmail',\n      label: this.props.gameCode\n    });\n    location.assign('mailto:?body=' + this._getLink());\n  }\n\n  shareFacebook() {\n    react_ga__WEBPACK_IMPORTED_MODULE_12___default.a.event({\n      category: 'GameSharing',\n      action: 'shareFacebook',\n      label: this.props.gameCode\n    });\n    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));\n  }\n\n  copyClipboard() {\n    react_ga__WEBPACK_IMPORTED_MODULE_12___default.a.event({\n      category: 'GameSharing',\n      action: 'copyClipboard',\n      label: this.props.gameCode\n    });\n    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default()(this._getLink());\n    alert('Link copied to clipboard');\n  }\n\n  showQrCode() {\n    react_ga__WEBPACK_IMPORTED_MODULE_12___default.a.event({\n      category: 'GameSharing',\n      action: 'showQrCode',\n      label: this.props.gameCode\n    });\n\n    this._toggleShowingQrCode();\n  }\n\n  _toggleShowingQrCode() {\n    if (!this.state.showingQrCode) {\n      window.scrollTo(0, 0);\n    }\n\n    this.setState(oldState => Object.assign({}, oldState, {\n      showingQrCode: !this.state.showingQrCode\n    }));\n  }\n\n  _getLink() {\n    const origin = window.location.origin;\n    const gameCode = this.props.gameCode;\n    const roomID = this.props.roomID;\n    return `${origin}/room/${gameCode}/${roomID}`;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameSharing.tsx?");

/***/ }),

/***/ "./src/App/Game/QrCodeIcon.tsx":
/*!*************************************!*\
  !*** ./src/App/Game/QrCodeIcon.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ \"@material-ui/core/SvgIcon\");\n/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass QrCodeIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const path1 = `M76.5 280.5h51v51h-51v-51m204-153h51v102h-51v-102m-51 153h102v102h-51v-51h-51v-51m153 0h51v51h51v-51h51v51h-51v51h51v102h-51v51h-51v-51h-102v51h-51v-102h102v-51h51v-51h-51v-51m102 204v-102h-51v102h51m-102-408h153v153h-153v-153m51 51v51h51v-51h-51m-357-51h153v153h-153v-153m51 51v51h51v-51h-51m-51 255h153v153h-153v-153m51 51v51h51v-51zm0 0`;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      viewBox: \"0 0 612 612\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: path1\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QrCodeIcon);\n\n//# sourceURL=webpack:///./src/App/Game/QrCodeIcon.tsx?");

/***/ }),

/***/ "./src/App/Helpers/AddressHelper.ts":
/*!******************************************!*\
  !*** ./src/App/Helpers/AddressHelper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddressHelper; });\n/* harmony import */ var _SSRHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSRHelper */ \"./src/App/Helpers/SSRHelper.ts\");\n\nclass AddressHelper {\n  /** Gets bgio host:port address. */\n  static getServerAddress() {\n    if (!_SSRHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isSSR()) {\n      return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Helpers/AddressHelper.ts?");

/***/ }),

/***/ "./src/App/Helpers/SSRHelper.ts":
/*!**************************************!*\
  !*** ./src/App/Helpers/SSRHelper.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SSRHelper; });\n// Returns true if SSR is rendering the page, else false.\nclass SSRHelper {\n  static isSSR() {\n    return typeof window === 'undefined';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Helpers/SSRHelper.ts?");

/***/ }),

/***/ "./src/App/Lobby/ListPlayers.tsx":
/*!***************************************!*\
  !*** ./src/App/Lobby/ListPlayers.tsx ***!
  \***************************************/
/*! exports provided: ListPlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListPlayers\", function() { return ListPlayers; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccessTime */ \"@material-ui/icons/AccessTime\");\n/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass ListPlayers extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const metadata = this.props.roomMetadata;\n    const playersList = metadata.players.map((player, idx) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n        key: `player-${idx}`\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n        primary: player.name\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemSecondaryAction\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        \"data-testid\": \"editNickname\",\n        onClick: this.props.editNickname\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default.a, null))));\n    });\n    const waitingList = [];\n\n    for (let i = 0; i < metadata.numberOfPlayers - playersList.length; i++) {\n      waitingList.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n        key: `waiting-${i}`\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemAvatar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Waiting for player...\"))));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"List\"], {\n      subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListSubheader\"], null, \"Players\")\n    }, playersList, waitingList));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/ListPlayers.tsx?");

/***/ }),

/***/ "./src/App/Lobby/LobbyService.ts":
/*!***************************************!*\
  !*** ./src/App/Lobby/LobbyService.ts ***!
  \***************************************/
/*! exports provided: LobbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LobbyService\", function() { return LobbyService; });\n/* harmony import */ var _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/AddressHelper */ \"./src/App/Helpers/AddressHelper.ts\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ \"superagent\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/SSRHelper */ \"./src/App/Helpers/SSRHelper.ts\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\nconst FBG_CREDENTIALS_KEY = 'fbgCredentials';\nconst FBG_NICKNAME_KEY = 'fbgNickname';\nclass LobbyService {\n  static newRoom(gameCode, numPlayers) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const response = yield superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getServerAddress()}/games/${gameCode}/create`).send({\n        numPlayers\n      });\n      const roomID = response.body.gameID;\n      return roomID;\n    });\n  }\n\n  static joinRoom(gameCode, player) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const response = yield superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getServerAddress()}/games/${gameCode}/${player.roomID}/join`).send({\n        playerID: player.playerID,\n        playerName: player.name\n      });\n      const credential = response.body.playerCredentials;\n      this.setCredential(player, credential);\n    });\n  }\n\n  static renameUser(gameCode, player, newName) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const playerCredential = this.getCredential(player.roomID);\n      yield superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({\n        playerID: player.playerID,\n        playerCredentials: playerCredential.credential,\n        newName\n      });\n    });\n  }\n\n  static getRoomMetadata(gameCode, roomID) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const response = yield superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getServerAddress()}/games/${gameCode}/${roomID}`);\n      const body = response.body;\n      const players = body.players.filter(player => player.name).map(player => ({\n        playerID: player.id,\n        name: player.name,\n        roomID\n      }));\n      const playerCredential = this.getCredential(roomID);\n      let currentUser;\n\n      if (playerCredential) {\n        currentUser = players.find(player => player.playerID === playerCredential.playerID);\n      }\n\n      return {\n        players,\n        gameCode,\n        roomID,\n        currentUser,\n        numberOfPlayers: body.players.length\n      };\n    });\n  }\n\n  static getPlayAgainNextRoom(gameCode, roomID, numPlayers) {\n    return __awaiter(this, void 0, void 0, function* () {\n      const playerCredential = this.getCredential(roomID);\n      const response = yield superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getServerAddress()}/games/${gameCode}/${roomID}/playAgain`).send({\n        playerID: playerCredential.playerID,\n        credentials: playerCredential.credential,\n        numPlayers\n      });\n      return response.body.nextRoomID;\n    });\n  }\n\n  static getNickname() {\n    if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isSSR()) {\n      return localStorage.getItem(FBG_NICKNAME_KEY);\n    }\n  }\n\n  static setNickname(name) {\n    localStorage.setItem(FBG_NICKNAME_KEY, name);\n  }\n\n  static getCredential(roomID) {\n    // return an empty IPlayerInRoom object if the player's identity is for another room\n    const credentials = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));\n\n    if (credentials) {\n      return credentials[roomID];\n    }\n  }\n\n  static setCredential(player, credential) {\n    const existing = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));\n    const newCredentials = Object.assign({}, existing);\n    newCredentials[player.roomID] = {\n      credential,\n      playerID: player.playerID\n    };\n    localStorage.setItem(FBG_CREDENTIALS_KEY, JSON.stringify(newCredentials));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/LobbyService.ts?");

/***/ }),

/***/ "./src/App/Lobby/NewRoom.tsx":
/*!***********************************!*\
  !*** ./src/App/Lobby/NewRoom.tsx ***!
  \***********************************/
/*! exports provided: NewRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewRoom\", function() { return NewRoom; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MessagePage */ \"./src/App/MessagePage.tsx\");\n/* harmony import */ var _LobbyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LobbyService */ \"./src/App/Lobby/LobbyService.ts\");\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../games */ \"./src/games/index.ts\");\n\n\n\n\n/** Class responsible for creating a new room and redirecting to the correct URL. */\n\nclass NewRoom extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      error: false\n    };\n  }\n\n  componentDidMount() {\n    const gameCode = this.props.match.params.gameCode;\n    const numPlayers = this.props.match.params.numPlayers;\n\n    if (!(gameCode in _games__WEBPACK_IMPORTED_MODULE_3__[\"GAMES_MAP\"])) {\n      this.setState({\n        error: true\n      });\n      return;\n    }\n\n    _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].newRoom(gameCode, numPlayers).then(roomID => {\n      this.props.history.replace(`/room/${gameCode}/${roomID}`);\n    }, () => {\n      this.setState({\n        error: true\n      });\n    });\n  }\n\n  render() {\n    if (this.state.error) {\n      const ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('error', 'Failed to create room');\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);\n    }\n\n    const LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('loading', 'Creating room...');\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/NewRoom.tsx?");

/***/ }),

/***/ "./src/App/Lobby/NicknamePrompt.tsx":
/*!******************************************!*\
  !*** ./src/App/Lobby/NicknamePrompt.tsx ***!
  \******************************************/
/*! exports provided: NicknamePrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NicknamePrompt\", function() { return NicknamePrompt; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ \"@material-ui/core/ClickAwayListener\");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nclass NicknamePrompt extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      nameTextField: ''\n    };\n\n    this._setNicknameOnEnterButton = event => {\n      if (event.key === 'Enter' && this._nicknameIsValid()) {\n        this._onClick();\n      }\n    };\n\n    this._nicknameIsValid = () => {\n      const name = this.state.nameTextField;\n      return name && name.length > 0;\n    };\n\n    this._onClick = () => {\n      if (this._nicknameIsValid()) {\n        this.props.setNickname(this.state.nameTextField);\n      }\n    };\n\n    this._onChange = event => {\n      const nameTextField = event.target.value;\n      this.setState(oldState => {\n        return Object.assign({}, oldState, {\n          nameTextField\n        });\n      });\n    };\n\n    this._togglePrompt = () => {\n      if (this.props.togglePrompt) {\n        this.props.togglePrompt();\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      onClickAway: this._togglePrompt\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      style: {\n        marginTop: '16px',\n        whiteSpace: 'nowrap',\n        width: '250px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        textAlign: 'center'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: {\n        paddingTop: '16px'\n      },\n      variant: \"h5\",\n      component: \"h3\"\n    }, \"Enter Your Nickname\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      autoFocus: true,\n      type: \"text\",\n      defaultValue: this.props.nickname,\n      onChange: this._onChange,\n      onKeyPress: this._setNicknameOnEnterButton\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      variant: \"contained\",\n      color: \"primary\",\n      style: {\n        marginTop: '16px'\n      },\n      onClick: this._onClick,\n      disabled: !this._nicknameIsValid()\n    }, \"Set Nickname\")))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/NicknamePrompt.tsx?");

/***/ }),

/***/ "./src/App/Lobby/QrCodePopup.tsx":
/*!***************************************!*\
  !*** ./src/App/Lobby/QrCodePopup.tsx ***!
  \***************************************/
/*! exports provided: QrCodePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QrCodePopup\", function() { return QrCodePopup; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ \"@material-ui/core/ClickAwayListener\");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst QrCode = __webpack_require__(/*! qrcode.react */ \"qrcode.react\");\n\nclass QrCodePopup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const style = {\n      width: '100%',\n      boxSizing: 'border-box',\n      padding: '16px',\n      height: 'auto',\n      display: 'block'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      onClickAway: this.props.toggleQrCode\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      style: {\n        marginBottom: '16px',\n        whiteSpace: 'nowrap',\n        marginLeft: 'auto',\n        width: '80vw',\n        maxWidth: '450px',\n        marginRight: 'auto',\n        textAlign: 'center'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: {\n        paddingTop: '16px'\n      },\n      variant: \"h5\",\n      component: \"h3\"\n    }, \"Scan QR code\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QrCode, {\n      value: this.props.url,\n      size: 500,\n      style: style,\n      renderAs: \"svg\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      variant: \"contained\",\n      color: \"primary\",\n      style: {\n        marginBottom: '16px'\n      },\n      onClick: this.props.toggleQrCode\n    }, \"Done\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/QrCodePopup.tsx?");

/***/ }),

/***/ "./src/App/Lobby/Room.tsx":
/*!********************************!*\
  !*** ./src/App/Lobby/Room.tsx ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Room\", function() { return Room; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MessagePage */ \"./src/App/MessagePage.tsx\");\n/* harmony import */ var _LobbyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LobbyService */ \"./src/App/Lobby/LobbyService.ts\");\n/* harmony import */ var _Game_AlertLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Game/AlertLayer */ \"./src/App/Game/AlertLayer.tsx\");\n/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FreeBoardGameBar */ \"./src/App/FreeBoardGameBar.tsx\");\n/* harmony import */ var _Game_GameSharing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Game/GameSharing */ \"./src/App/Game/GameSharing.tsx\");\n/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Game/Game */ \"./src/App/Game/Game.tsx\");\n/* harmony import */ var _ListPlayers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListPlayers */ \"./src/App/Lobby/ListPlayers.tsx\");\n/* harmony import */ var _Game_GameCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Game/GameCard */ \"./src/App/Game/GameCard.tsx\");\n/* harmony import */ var _games_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../games/index */ \"./src/games/index.ts\");\n/* harmony import */ var _NicknamePrompt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NicknamePrompt */ \"./src/App/Lobby/NicknamePrompt.tsx\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\n\n\n\n\n\n\n\n\nclass Room extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      error: '',\n      loading: true,\n      gameReady: false,\n      editingName: false\n    };\n\n    this.updateMetadata = () => {\n      const {\n        gameCode,\n        roomID\n      } = this.props.match.params;\n\n      if (!_LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].getNickname()) {\n        return;\n      }\n\n      this.promise = _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].getRoomMetadata(gameCode, roomID).then(metadata => __awaiter(this, void 0, void 0, function* () {\n        if (!metadata.currentUser) {\n          const player = {\n            playerID: metadata.players.length,\n            roomID,\n            name: _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].getNickname()\n          };\n          yield _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].joinRoom(gameCode, player);\n          return _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].getRoomMetadata(gameCode, roomID);\n        }\n\n        return metadata;\n      })).then(metadata => {\n        if (metadata.numberOfPlayers === metadata.players.length) {\n          this.setState(oldState => Object.assign({}, oldState, {\n            gameReady: true\n          }));\n\n          this._stopTimer();\n        }\n\n        this.setState(oldState => Object.assign({}, oldState, {\n          roomMetadata: metadata,\n          loading: false\n        }));\n\n        if (!this.state.gameReady) {\n          setTimeout(() => this.updateMetadata(), 2000);\n        }\n\n        return metadata;\n      }, () => {\n        const error = 'Failed to fetch room metadata.';\n        this.setState(oldState => Object.assign({}, oldState, {\n          error\n        }));\n      });\n    };\n\n    this._getNamePrompt = name => {\n      const togglePrompt = this.state.editingName ? this._toggleEditingName : null;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NicknamePrompt__WEBPACK_IMPORTED_MODULE_10__[\"NicknamePrompt\"], {\n        setNickname: this._setNickname,\n        nickname: name,\n        togglePrompt: togglePrompt\n      });\n    };\n\n    this._toggleEditingName = () => {\n      this.setState(oldState => Object.assign({}, oldState, {\n        editingName: !this.state.editingName\n      }));\n    };\n\n    this._setNickname = nickname => {\n      _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].setNickname(nickname);\n\n      if (this.state.editingName) {\n        const room = this.state.roomMetadata;\n        _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].renameUser(room.gameCode, room.currentUser, nickname);\n\n        this._toggleEditingName();\n      }\n\n      this.updateMetadata();\n    };\n\n    this._stopTimer = () => {\n      clearInterval(this.timer);\n      this.timer = null;\n    };\n\n    this._getGameSharing = () => {\n      const {\n        gameCode,\n        roomID\n      } = this.props.match.params;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_GameSharing__WEBPACK_IMPORTED_MODULE_5__[\"GameSharing\"], {\n        gameCode: gameCode,\n        roomID: roomID,\n        roomMetadata: this.state.roomMetadata\n      });\n    };\n  }\n\n  componentDidMount() {\n    this.updateMetadata();\n  }\n\n  render() {\n    const LoadingPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('loading', 'Loading...');\n    const nickname = _LobbyService__WEBPACK_IMPORTED_MODULE_2__[\"LobbyService\"].getNickname();\n\n    if (typeof window === 'undefined') {\n      // SSR\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);\n    }\n\n    if (!nickname) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, this._getNamePrompt());\n    }\n\n    if (this.state.error) {\n      const ErrorPage = Object(_MessagePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('error', this.state.error);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorPage, null);\n    }\n\n    if (this.state.loading) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingPage, null);\n    }\n\n    if (this.state.gameReady) {\n      const room = this.state.roomMetadata;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_Game__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        room: room\n      });\n    }\n\n    const nicknamePrompt = this.state.editingName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_AlertLayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, this._getNamePrompt(this.state.roomMetadata.currentUser.name)) : null;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, nicknamePrompt, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_GameCard__WEBPACK_IMPORTED_MODULE_8__[\"GameCard\"], {\n      game: _games_index__WEBPACK_IMPORTED_MODULE_9__[\"GAMES_MAP\"][this.state.roomMetadata.gameCode]\n    }), this._getGameSharing(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListPlayers__WEBPACK_IMPORTED_MODULE_7__[\"ListPlayers\"], {\n      roomMetadata: this.state.roomMetadata,\n      editNickname: this._toggleEditingName\n    }));\n  }\n\n  componentWillUnmount() {\n    this._stopTimer();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Lobby/Room.tsx?");

/***/ }),

/***/ "./src/App/MessagePage.tsx":
/*!*********************************!*\
  !*** ./src/App/MessagePage.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagePageClass */ \"./src/App/MessagePageClass.tsx\");\n\n\n\nconst getMessagePage = (type, message) => {\n  return () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePageClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      type: type,\n      message: message\n    });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getMessagePage);\n\n//# sourceURL=webpack:///./src/App/MessagePage.tsx?");

/***/ }),

/***/ "./src/App/MessagePageClass.tsx":
/*!**************************************!*\
  !*** ./src/App/MessagePageClass.tsx ***!
  \**************************************/
/*! exports provided: MessagePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessagePage\", function() { return MessagePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"@material-ui/core/CircularProgress\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreeBoardGameBar */ \"./src/App/FreeBoardGameBar.tsx\");\n/* harmony import */ var _media_SvgError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/SvgError */ \"./src/App/media/SvgError.tsx\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Status */ \"./src/App/Status.ts\");\n/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ttag */ \"ttag\");\n/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nclass MessagePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.requestID = null;\n\n    this._animate = now => () => {\n      if (this.requestID) {\n        const elapsed = now - this.state.startTime;\n        const linkHidden = elapsed < 5000;\n        this.setState(Object.assign({}, this.state, {\n          linkHidden\n        }));\n\n        if (linkHidden) {\n          this.requestID = window.requestAnimationFrame(this._animate(Date.now()));\n        }\n      }\n    };\n\n    this.state = {\n      linkHidden: props.type !== 'error',\n      startTime: Date.now()\n    };\n\n    if (typeof window !== 'undefined' && props.type !== 'error') {\n      this.requestID = window.requestAnimationFrame(this._animate(Date.now()));\n    }\n  }\n\n  componentWillUnmount() {\n    if (this.requestID) {\n      window.cancelAnimationFrame(this.requestID);\n      this.requestID = null;\n    }\n  }\n\n  render() {\n    let icon;\n    let linkHome;\n    let status;\n\n    if (this.props.type === 'error') {\n      status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        code: \"404\"\n      });\n      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_media_SvgError__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: {\n          height: '128px'\n        }\n      });\n    } else {\n      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, null);\n    }\n\n    if (!this.state.linkHidden) {\n      const goHomeText = this.props.message === 'Invalid Locale' ? 'Go Home' : ttag__WEBPACK_IMPORTED_MODULE_8__[\"t\"]`messagePage.goHome`;\n      linkHome = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/\",\n        variant: \"outlined\",\n        style: {\n          margin: '8px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        style: {\n          marginRight: '8px'\n        }\n      }), goHomeText);\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FreeBoardGameBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        paddingTop: '16px',\n        textAlign: 'center'\n      }\n    }, status, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      variant: \"h6\",\n      gutterBottom: true,\n      style: {\n        paddingTop: '16px'\n      }\n    }, this.props.message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), linkHome)));\n  }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessagePage);\n\n//# sourceURL=webpack:///./src/App/MessagePageClass.tsx?");

/***/ }),

/***/ "./src/App/ScrollToTop.tsx":
/*!*********************************!*\
  !*** ./src/App/ScrollToTop.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ScrollToTop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    window.scrollTo(0, 0);\n  }\n\n  render() {\n    return this.props.children;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollToTop);\n\n//# sourceURL=webpack:///./src/App/ScrollToTop.tsx?");

/***/ }),

/***/ "./src/App/Status.ts":
/*!***************************!*\
  !*** ./src/App/Status.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Status extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentWillMount() {\n    if (this.props.staticContext) {\n      this.props.staticContext.status = this.props.code;\n    }\n  }\n\n  render() {\n    return null;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Status));\n\n//# sourceURL=webpack:///./src/App/Status.ts?");

/***/ }),

/***/ "./src/App/media/SvgError.tsx":
/*!************************************!*\
  !*** ./src/App/media/SvgError.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SvgError = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n  viewBox: \"0 0 1 1\",\n  style: props.style\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n  x1: \"0.2\",\n  y1: \"0.2\",\n  x2: \"0.8\",\n  y2: \"0.8\",\n  stroke: \"black\",\n  strokeWidth: \"0.05\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n  x1: \"0.8\",\n  y1: \"0.2\",\n  x2: \"0.2\",\n  y2: \"0.8\",\n  stroke: \"black\",\n  strokeWidth: \"0.05\"\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgError);\n\n//# sourceURL=webpack:///./src/App/media/SvgError.tsx?");

/***/ }),

/***/ "./src/App/media/fbg_logo_white_48.png":
/*!*********************************************!*\
  !*** ./src/App/media/fbg_logo_white_48.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5830bdd1611d0a8d9978cb5320b49dc2.png\";\n\n//# sourceURL=webpack:///./src/App/media/fbg_logo_white_48.png?");

/***/ }),

/***/ "./src/Home/HomeAsync.tsx":
/*!********************************!*\
  !*** ./src/Home/HomeAsync.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Async */ \"./src/App/Async.tsx\");\n\nconst HomeAsync = Object(_App_Async__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Home', () => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./Home */ \"./src/Home/Home.tsx\")));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeAsync);\n\n//# sourceURL=webpack:///./src/Home/HomeAsync.tsx?");

/***/ }),

/***/ "./src/games/checkers/index.ts":
/*!*************************************!*\
  !*** ./src/games/checkers/index.ts ***!
  \*************************************/
/*! exports provided: checkersGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkersGameDef\", function() { return checkersGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/checkers/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/checkers/instructions.md\");\n\n\n\nconst checkersGameDef = {\n  code: 'checkers',\n  name: 'Checkers',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].AI\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].LocalFriend\n  }],\n  minPlayers: 2,\n  maxPlayers: 2,\n  description: 'Classic game of Checkers',\n  descriptionTag: `Play Checkers (also known as Draughts) locally\n  or online against friends!`,\n  instructions: {\n    videoId: 'yFrAN-LFZRU',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/checkers/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/checkers/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/checkers/index.ts?");

/***/ }),

/***/ "./src/games/checkers/instructions.md":
/*!********************************************!*\
  !*** ./src/games/checkers/instructions.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Checkers is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side.\\n\\nEach player starts with twelve pieces. The player with white pieces always makes the first move. Normal pieces can move only diagonally towards the opponent's side, while kings can move in any direction. A player can remove an opponent's piece from the board by jumping over it.\\n\\nIn order to jump, the next diagonal square after the opponent piece must be empty. If the player has more than one possible jump, these jumps can be executed in a single turn. A piece becomes a king if a piece reaches the last row towards the opponent. The game ends when no more pieces or moves are possible for a player.\\n\");\n\n//# sourceURL=webpack:///./src/games/checkers/instructions.md?");

/***/ }),

/***/ "./src/games/checkers/media/thumbnail.png":
/*!************************************************!*\
  !*** ./src/games/checkers/media/thumbnail.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3cf14a4ca96099684a4bc0c6b2c5d98a.png\";\n\n//# sourceURL=webpack:///./src/games/checkers/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/chess/index.ts":
/*!**********************************!*\
  !*** ./src/games/chess/index.ts ***!
  \**********************************/
/*! exports provided: chessGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chessGameDef\", function() { return chessGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/chess/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/chess/instructions.md\");\n\n\n\nconst chessGameDef = {\n  code: 'chess',\n  name: 'Chess',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  minPlayers: 2,\n  maxPlayers: 2,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].AI,\n    extraInfo: {\n      type: 'slider',\n      min: 1,\n      max: 8\n    }\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].LocalFriend\n  }],\n  description: 'International Rules',\n  descriptionTag: `Play an online Chess game in your browser against a\\\n top chess computer. You can set the computer level from 1 to 8,\\\n from easy to grandmaster. You can also easily share a link and play\\\n chess with a friend online, or you can share your device and play\\\n with a friend locally !`,\n  instructions: {\n    videoId: 'fKxG8KjH1Qg',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/chess/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/chess/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/chess/index.ts?");

/***/ }),

/***/ "./src/games/chess/instructions.md":
/*!*****************************************!*\
  !*** ./src/games/chess/instructions.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Chess is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side.\\n\\nEach player starts with sixteen pieces: eight pawns, two knights, two bishops, two rooks, one queen and one king. The player with white pieces always makes the first move.\\n\\nThe goal of the game is for each player to try and checkmate the king of the opponent.\\nCheckmate is a game position in which a player's king is threatened with capture and there is no way to remove the threat. Checkmating the opponent wins the game.\\n\\n[Click here for the allowed moves of each piece.](https://www.chessusa.com/chess-rules.html)\\n\");\n\n//# sourceURL=webpack:///./src/games/chess/instructions.md?");

/***/ }),

/***/ "./src/games/chess/media/thumbnail.png":
/*!*********************************************!*\
  !*** ./src/games/chess/media/thumbnail.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5223b499ab2dc00c5876723e7e8b620e.png\";\n\n//# sourceURL=webpack:///./src/games/chess/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/cornerus/index.ts":
/*!*************************************!*\
  !*** ./src/games/cornerus/index.ts ***!
  \*************************************/
/*! exports provided: cornerusGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cornerusGameDef\", function() { return cornerusGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/cornerus/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/cornerus/instructions.md\");\n\n\n\nconst cornerusGameDef = {\n  code: 'cornerus',\n  name: 'Cornerus',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  modes: [\n  /*\n          {\n              mode: GameMode.AI,\n              extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,\n          },*/\n  {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].LocalFriend\n  }],\n  minPlayers: 2,\n  maxPlayers: 4,\n  description: 'Similar to Blokus',\n  descriptionTag: `Play Cornerus, a free online game similar\\\n to Blokus. You can play multi-player online or\\\n share your device and play locally against a friend.`,\n  instructions: {\n    videoId: 'Yw8pK6Ak5oE',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/cornerus/config.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/cornerus/index.ts?");

/***/ }),

/***/ "./src/games/cornerus/instructions.md":
/*!********************************************!*\
  !*** ./src/games/cornerus/instructions.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Similarly to Blokus, this game allows two to four players. In the case of only two or three players, two colors will be assigned to a single player.\\n\\nEach color has 21 tiles with distinct shapes, and the objective is to cover as much of the board as possible. The first piece must be placed on the corner of the board assigned to that color.\\n\\nAll subsequent pieces must share a corner with at least one piece of the same color. Sharing an edge is only allowed if the pieces are not of the same color. The game ends when nobody can make a move.\\n\");\n\n//# sourceURL=webpack:///./src/games/cornerus/instructions.md?");

/***/ }),

/***/ "./src/games/cornerus/media/thumbnail.png":
/*!************************************************!*\
  !*** ./src/games/cornerus/media/thumbnail.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3705be86cd972a5e626188fd20d94e37.png\";\n\n//# sourceURL=webpack:///./src/games/cornerus/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/fourinarow/index.ts":
/*!***************************************!*\
  !*** ./src/games/fourinarow/index.ts ***!
  \***************************************/
/*! exports provided: fourinarowGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fourinarowGameDef\", function() { return fourinarowGameDef; });\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/fourinarow/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/fourinarow/instructions.md\");\n // import { IGameModeExtraInfoDropdown } from '../../App/Game/GameModePicker';\n\n\n\nconst fourinarowGameDef = {\n  code: 'fourinarow',\n  name: 'Connect 4',\n  minPlayers: 2,\n  maxPlayers: 2,\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n  modes: [// {\n  //   mode: GameMode.AI,\n  //   extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,\n  // },\n  {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__[\"GameMode\"].LocalFriend\n  }],\n  description: 'Also know as Four-in-a-Row',\n  descriptionTag: `Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,\n  instructions: {\n    videoId: 'utXzIFEVPjA',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/fourinarow/config.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/fourinarow/index.ts?");

/***/ }),

/***/ "./src/games/fourinarow/instructions.md":
/*!**********************************************!*\
  !*** ./src/games/fourinarow/instructions.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.\\n\");\n\n//# sourceURL=webpack:///./src/games/fourinarow/instructions.md?");

/***/ }),

/***/ "./src/games/fourinarow/media/thumbnail.png":
/*!**************************************************!*\
  !*** ./src/games/fourinarow/media/thumbnail.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"002ff773b57d1ba5022c800091ff30a4.png\";\n\n//# sourceURL=webpack:///./src/games/fourinarow/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/index.ts":
/*!****************************!*\
  !*** ./src/games/index.ts ***!
  \****************************/
/*! exports provided: GAMES_MAP, GAMES_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMES_MAP\", function() { return GAMES_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMES_LIST\", function() { return GAMES_LIST; });\n/* harmony import */ var _chess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess */ \"./src/games/chess/index.ts\");\n/* harmony import */ var _seabattle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seabattle */ \"./src/games/seabattle/index.ts\");\n/* harmony import */ var _tictactoe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tictactoe */ \"./src/games/tictactoe/index.ts\");\n/* harmony import */ var _takesix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./takesix */ \"./src/games/takesix/index.ts\");\n/* harmony import */ var _ninemensmorris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ninemensmorris */ \"./src/games/ninemensmorris/index.ts\");\n/* harmony import */ var _checkers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkers */ \"./src/games/checkers/index.ts\");\n/* harmony import */ var _reversi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reversi */ \"./src/games/reversi/index.ts\");\n/* harmony import */ var _cornerus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cornerus */ \"./src/games/cornerus/index.ts\");\n/* harmony import */ var _fourinarow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fourinarow */ \"./src/games/fourinarow/index.ts\");\n\n\n\n\n\n\n\n\n // Add new games here\n\nconst GAMES_MAP = {\n  chess: _chess__WEBPACK_IMPORTED_MODULE_0__[\"chessGameDef\"],\n  seabattle: _seabattle__WEBPACK_IMPORTED_MODULE_1__[\"seabattleGameDef\"],\n  tictactoe: _tictactoe__WEBPACK_IMPORTED_MODULE_2__[\"tictactoeGameDef\"],\n  takesix: _takesix__WEBPACK_IMPORTED_MODULE_3__[\"takesixGameDef\"],\n  cornerus: _cornerus__WEBPACK_IMPORTED_MODULE_7__[\"cornerusGameDef\"],\n  ninemensmorris: _ninemensmorris__WEBPACK_IMPORTED_MODULE_4__[\"ninemensmorrisGameDef\"],\n  checkers: _checkers__WEBPACK_IMPORTED_MODULE_5__[\"checkersGameDef\"],\n  reversi: _reversi__WEBPACK_IMPORTED_MODULE_6__[\"reversiGameDef\"],\n  fourinarow: _fourinarow__WEBPACK_IMPORTED_MODULE_8__[\"fourinarowGameDef\"]\n};\nconst GAMES_LIST = [GAMES_MAP.chess, GAMES_MAP.ninemensmorris, GAMES_MAP.reversi, GAMES_MAP.takesix, GAMES_MAP.checkers, GAMES_MAP.cornerus, GAMES_MAP.seabattle, GAMES_MAP.tictactoe, GAMES_MAP.fourinarow];\n\n//# sourceURL=webpack:///./src/games/index.ts?");

/***/ }),

/***/ "./src/games/ninemensmorris/index.ts":
/*!*******************************************!*\
  !*** ./src/games/ninemensmorris/index.ts ***!
  \*******************************************/
/*! exports provided: ninemensmorrisGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ninemensmorrisGameDef\", function() { return ninemensmorrisGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/ninemensmorris/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/ninemensmorris/instructions.md\");\n\n\n\nconst ninemensmorrisGameDef = {\n  code: 'ninemensmorris',\n  name: 'Nine Mens Morris',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  modes: [\n  /*\n      {\n          mode: GameMode.AI,\n          extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,\n      },*/\n  {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].LocalFriend\n  }],\n  minPlayers: 2,\n  maxPlayers: 2,\n  description: 'Also Known as Mills',\n  descriptionTag: `Play Nine Men's Morris, a free online game also\\\n known as Mills. You can play multi-player or with your friend\\\n locally!`,\n  instructions: {\n    videoId: 'zvbIKOHIkRE',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/ninemensmorris/config.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/ninemensmorris/index.ts?");

/***/ }),

/***/ "./src/games/ninemensmorris/instructions.md":
/*!**************************************************!*\
  !*** ./src/games/ninemensmorris/instructions.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Nine Men's Morris is a classic two-player board game.\\n\\nIn the first phase of the game, each player has to place pieces on empty slots. If a player places three pieces in a line, they form a \\\"mill\\\", and they can remove an opponent's piece from the board. The first phase ends when all pieces are placed.\\n\\nIn the second phase, each player can move a piece to an adjacent point, as long as the adjacent point is empty (no jumping). As in the first phase, forming a mill removes one opponent's piece.\\n\\nThe game ends when a player only has two pieces left.\\n\");\n\n//# sourceURL=webpack:///./src/games/ninemensmorris/instructions.md?");

/***/ }),

/***/ "./src/games/ninemensmorris/media/thumbnail.png":
/*!******************************************************!*\
  !*** ./src/games/ninemensmorris/media/thumbnail.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"afcb23a52efa05813de3becce2250bc5.png\";\n\n//# sourceURL=webpack:///./src/games/ninemensmorris/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/reversi/index.ts":
/*!************************************!*\
  !*** ./src/games/reversi/index.ts ***!
  \************************************/
/*! exports provided: reversiGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reversiGameDef\", function() { return reversiGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/reversi/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/reversi/instructions.md\");\n\n\n\nconst reversiGameDef = {\n  code: 'reversi',\n  name: 'Reversi',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].AI\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].LocalFriend\n  }],\n  minPlayers: 2,\n  maxPlayers: 4,\n  description: 'Similar to Rollit and Othello',\n  descriptionTag: `Play Reversi, a free online game similar\\\n to Rollit and Othello. You can play multi-player online or \\\n share your device and play locally against a friend.`,\n  instructions: {\n    videoId: 'hC1sgDNrqq0',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/reversi/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/reversi/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/reversi/index.ts?");

/***/ }),

/***/ "./src/games/reversi/instructions.md":
/*!*******************************************!*\
  !*** ./src/games/reversi/instructions.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Similar to Rolit, this game is a variation of Reversi that allows up to 4 players. There are up to four colors, and each player controls one color.\\n\\nThe objective of the game is to own more squares than all of your opponents. In order to do so, each player can place a piece on an empty square as long as it captures enemy pieces.\\n\\nEnemy pieces can be captured by placing a piece diagonally, horizontally or vertically from an existing piece of the same color.\\n\\nThe game ends when there are no more possible moves, which in most cases is when the board is full.\\n\");\n\n//# sourceURL=webpack:///./src/games/reversi/instructions.md?");

/***/ }),

/***/ "./src/games/reversi/media/thumbnail.png":
/*!***********************************************!*\
  !*** ./src/games/reversi/media/thumbnail.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7e8d7779d2e316647ab0f06315db4b0b.png\";\n\n//# sourceURL=webpack:///./src/games/reversi/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/seabattle/index.ts":
/*!**************************************!*\
  !*** ./src/games/seabattle/index.ts ***!
  \**************************************/
/*! exports provided: seabattleGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seabattleGameDef\", function() { return seabattleGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/seabattle/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/seabattle/instructions.md\");\n\n\n\nconst seabattleGameDef = {\n  code: 'seabattle',\n  name: 'Sea Battle',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  minPlayers: 2,\n  maxPlayers: 2,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].AI\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }],\n  description: 'Similar to Battleship',\n  descriptionTag: `Play Sea Battle, a free online game similar\\\n to Battleship. You can play single-player against the computer\\\n or multi-player against a friend online.`,\n  instructions: {\n    videoId: 'q0qpQ8doUp8',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/seabattle/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/seabattle/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/seabattle/index.ts?");

/***/ }),

/***/ "./src/games/seabattle/instructions.md":
/*!*********************************************!*\
  !*** ./src/games/seabattle/instructions.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Sea Battle is primarily a guessing game for two players.  It is played on ruled grids on which each player's convoy of ships are concealed from the other player.  Players alternate turns firing servos at the other player's ships, and the objective of the game is to destroy the opposing player's entire fleet.\\n\");\n\n//# sourceURL=webpack:///./src/games/seabattle/instructions.md?");

/***/ }),

/***/ "./src/games/seabattle/media/thumbnail.png":
/*!*************************************************!*\
  !*** ./src/games/seabattle/media/thumbnail.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b14b46c1846c8b5b97d078f4ef1e1809.png\";\n\n//# sourceURL=webpack:///./src/games/seabattle/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/takesix/index.ts":
/*!************************************!*\
  !*** ./src/games/takesix/index.ts ***!
  \************************************/
/*! exports provided: takesixGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"takesixGameDef\", function() { return takesixGameDef; });\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/takesix/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/takesix/instructions.md\");\n\n\n\nconst takesixGameDef = {\n  code: 'takesix',\n  name: 'Take 6!',\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_0___default.a,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].AI\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_1__[\"GameMode\"].OnlineFriend\n  }],\n  minPlayers: 2,\n  maxPlayers: 10,\n  description: 'Similar To 6 Nimmt!',\n  descriptionTag: `Play Take 6!, a free online game similar\\\n to 6 Nimmt. You can play multi-player from two and up to\\\n ten players online!`,\n  instructions: {\n    videoId: 'fF0lnDygoes',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/takesix/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/takesix/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/takesix/index.ts?");

/***/ }),

/***/ "./src/games/takesix/instructions.md":
/*!*******************************************!*\
  !*** ./src/games/takesix/instructions.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Take 6! is a game that can play from two to ten players. The objective of the game is to score as few penalty points as possible.\\n\\nThe board starts with one card in each of the four rows. Then, at the beginning of each turn, all players choose the card they wish to play from their hand at the same time. These cards must be placed in the row that ends with the highest number that is still below each card number.\\n\\nHowever, if this row already has five cards, the player has to take all 6 cards (hence \\\"Take 6!\\\"). Taking these cards adds their penalty points to the player's score. A player must also take cards if the selected card is lower than the last cards in all rows. The game ends when all players have played their cards.\\n\");\n\n//# sourceURL=webpack:///./src/games/takesix/instructions.md?");

/***/ }),

/***/ "./src/games/takesix/media/thumbnail.png":
/*!***********************************************!*\
  !*** ./src/games/takesix/media/thumbnail.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f49c0fd2f1f6fc2aabfb8f46927ae2f2.png\";\n\n//# sourceURL=webpack:///./src/games/takesix/media/thumbnail.png?");

/***/ }),

/***/ "./src/games/tictactoe/index.ts":
/*!**************************************!*\
  !*** ./src/games/tictactoe/index.ts ***!
  \**************************************/
/*! exports provided: tictactoeGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tictactoeGameDef\", function() { return tictactoeGameDef; });\n/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../App/Game/GameModePicker */ \"./src/App/Game/GameModePicker.tsx\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/thumbnail.png */ \"./src/games/tictactoe/media/thumbnail.png\");\n/* harmony import */ var _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.md */ \"./src/games/tictactoe/instructions.md\");\n\n\n\nconst tictactoeGameDef = {\n  code: 'tictactoe',\n  name: 'Tic-Tac-Toe',\n  minPlayers: 2,\n  maxPlayers: 2,\n  imageURL: _media_thumbnail_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n  modes: [{\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__[\"GameMode\"].AI,\n    extraInfo: {\n      type: 'dropdown',\n      options: ['Easy', 'Hard']\n    }\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__[\"GameMode\"].OnlineFriend\n  }, {\n    mode: _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__[\"GameMode\"].LocalFriend\n  }],\n  description: 'A Classic Game',\n  descriptionTag: `Play Tic-Tac-Toe (also called Noughts and Crosses) for \\\n free online. You can either do a single-player game against the computer,\\\n a multi-player game against a friend online or share your device and play\\\n locally against a friend.`,\n  instructions: {\n    videoId: 'USEjXNCTvcc',\n    text: _instructions_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  config: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./config */ \"./src/games/tictactoe/config.ts\")),\n  aiConfig: () => __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./ai */ \"./src/games/tictactoe/ai.ts\"))\n};\n\n//# sourceURL=webpack:///./src/games/tictactoe/index.ts?");

/***/ }),

/***/ "./src/games/tictactoe/instructions.md":
/*!*********************************************!*\
  !*** ./src/games/tictactoe/instructions.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Tic-tac-toe is a classic two-player game. This game has a 3x3 grid, and in their turn, each player places their marker (X or O) on a cell in this grid.\\n\\nIn order to win, a player has to complete a full horizontal, vertical, or diagonal line with their marker. If all cells are filled and no player managed to do this, it is a draw.\\n\");\n\n//# sourceURL=webpack:///./src/games/tictactoe/instructions.md?");

/***/ }),

/***/ "./src/games/tictactoe/media/thumbnail.png":
/*!*************************************************!*\
  !*** ./src/games/tictactoe/media/thumbnail.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"376f6c205eadc2c03c42a1a234193a74.png\";\n\n//# sourceURL=webpack:///./src/games/tictactoe/media/thumbnail.png?");

/***/ }),

/***/ "./src/metadata.ts":
/*!*************************!*\
  !*** ./src/metadata.ts ***!
  \*************************/
/*! exports provided: getPageMetadata, getBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPageMetadata\", function() { return getPageMetadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBreadcrumbs\", function() { return getBreadcrumbs; });\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games */ \"./src/games/index.ts\");\n\nconst TITLE_PREFIX = 'FreeBoardGame.org - ';\nconst URL_BASE = 'https://FreeBoardGame.org';\nconst DEFAULT_METADATA = {\n  title: 'FreeBoardGame.org',\n  description: `Play board games in your browser for free. \\\nCompete against your online friends or play locally. Free and open-source software project.`,\n  noindex: true\n}; // Most specific URLs MUST come first.\n\nconst PAGES_METADATA = [{\n  name: 'About Us',\n  title: TITLE_PREFIX + 'About Us',\n  description: 'About FreeBoardGame.org, a free and open-source software project.',\n  url: new RegExp('^/about', 'i'),\n  link: URL_BASE + '/about'\n}, {\n  title: TITLE_PREFIX + 'Play Free Board Games Online',\n  description: `Play board games in your browser for free. \\\nCompete against your online friends or play locally. Free and open-source software project.`,\n  url: new RegExp('^/$', 'i')\n}];\n\nfunction getGamesPageMetadata() {\n  return _games__WEBPACK_IMPORTED_MODULE_0__[\"GAMES_LIST\"].map(gameDef => ({\n    name: `Play ${gameDef.name}`,\n    title: TITLE_PREFIX + `Play ${gameDef.name}, ${gameDef.description}`,\n    description: gameDef.descriptionTag,\n    url: new RegExp(`^/g/${gameDef.code}$`, 'i'),\n    link: `${URL_BASE}/g/${gameDef.code}`\n  }));\n}\n/** Given a URL, gets its title. */\n\n\nconst getPageMetadata = url => {\n  const allPagesMetadata = [...PAGES_METADATA, ...getGamesPageMetadata()];\n  const metadata = allPagesMetadata.find(meta => meta.url.test(url));\n\n  if (!metadata) {\n    return DEFAULT_METADATA;\n  }\n\n  return metadata;\n};\nconst getBreadcrumbs = url => {\n  if (url === '/') {\n    const gamePagesMetadata = getGamesPageMetadata();\n    const pageElements = gamePagesMetadata.filter(pageMetadata => {\n      return pageMetadata.name && pageMetadata.link; // check if we have both .name and .link\n    }).map(pageMetadata => {\n      return `<a itemprop=\"url\" href=\"${pageMetadata.link}\">${pageMetadata.name}</a>`;\n    });\n    return pageElements.join('\\n');\n  }\n};\n\n//# sourceURL=webpack:///./src/metadata.ts?");

/***/ }),

/***/ "./src/server_fbg.tsx":
/*!****************************!*\
  !*** ./src/server_fbg.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata */ \"./src/metadata.ts\");\n/* harmony import */ var koa_no_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-no-cache */ \"koa-no-cache\");\n/* harmony import */ var koa_no_cache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_no_cache__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App/App */ \"./src/App/App.tsx\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\n\n\n\n\n\n\n\nconst server = new koa__WEBPACK_IMPORTED_MODULE_9___default.a();\n\nconst ENABLE_BREADCRUMBS = process.env.ENABLE_BREADCRUMBS === 'yes';\nconst HOST = '0.0.0.0';\nconst PORT = Number(process.env.FBG_PORT) || 8000;\nconst RESTRICTIVE_ROBOTS_TXT = ['User-agent: *', 'Disallow: /', ''].join('\\n');\nconst template = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync('./dist/layout.html', 'utf8');\n\nfunction renderHtml(layout, breadcrumbs, metadata, reactHtml) {\n  let result = layout;\n  result = result.replace('<title>FreeBoardGame.org</title>', `<title>${metadata.title}</title>`);\n\n  if (metadata.description) {\n    result = result.replace('<meta name=\"description\" content=\"\" />', `<meta name=\"description\" content=\"${metadata.description}\" />`);\n  } else {\n    result = result.replace('    <meta name=\"description\" content=\"\" />\\n', '');\n  }\n\n  if (!metadata.noindex) {\n    result = result.replace('    <meta name=\"robots\" content=\"noindex\" />\\n', '');\n  }\n\n  if (ENABLE_BREADCRUMBS && breadcrumbs) {\n    result = result.replace('<nav itemscope=\"itemscope\" itemtype=\"http://www.schema.org/SiteNavigationElement\"></nav>', '<nav itemscope=\"itemscope\" itemtype=\"http://www.schema.org/SiteNavigationElement\">\\n' + breadcrumbs + '\\n</nav>');\n  } else {\n    result = result.replace('<nav itemscope=\"itemscope\" itemtype=\"http://www.schema.org/SiteNavigationElement\"></nav>', '');\n  }\n\n  result = result.replace('<div id=\"root\"></div>', `<div id=\"root\">${reactHtml}</div>`);\n  return result;\n}\n\nconst renderSite = url => __awaiter(undefined, void 0, void 0, function* () {\n  const metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_6__[\"getPageMetadata\"])(url);\n  const breadcrumbs = Object(_metadata__WEBPACK_IMPORTED_MODULE_6__[\"getBreadcrumbs\"])(url);\n  const context = {};\n  const app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null));\n  yield react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.preloadAll();\n  const reactHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToStaticMarkup(app);\n  return {\n    status: context.status,\n    render: renderHtml(template, breadcrumbs, metadata, reactHtml)\n  };\n});\n\nconst startServer = () => __awaiter(undefined, void 0, void 0, function* () {\n  server.use(koa_no_cache__WEBPACK_IMPORTED_MODULE_7___default()({\n    global: true\n  }));\n  server.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./static', {\n    hidden: true\n  }));\n  server.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist'));\n  const router = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();\n  server.use(router.routes());\n  server.use(router.allowedMethods());\n  server.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {\n    if (ctx.request.path === '/robots.txt') {\n      if (ctx.request.hostname.toLowerCase() !== 'freeboardgame.org') {\n        ctx.response.body = RESTRICTIVE_ROBOTS_TXT;\n      }\n    } else {\n      yield next();\n    }\n  }));\n  server.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {\n    yield next();\n    const {\n      render,\n      status\n    } = yield renderSite(ctx.request.url);\n\n    if (status) {\n      ctx.response.status = Number(status);\n    }\n\n    ctx.response.body = render;\n  }));\n  server.listen(PORT, HOST, () => {\n    console.log(`Serving FreeBoardGame.org at: http://${HOST}:${PORT}/`); // tslint:disable-line\n  });\n});\n\nstartServer();\n\n//# sourceURL=webpack:///./src/server_fbg.tsx?");

/***/ }),

/***/ "@freeboardgame.org/boardgame.io/ai":
/*!*****************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/ai" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/ai\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/ai%22?");

/***/ }),

/***/ "@freeboardgame.org/boardgame.io/core":
/*!*******************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/core" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/core\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/core%22?");

/***/ }),

/***/ "@freeboardgame.org/boardgame.io/react":
/*!********************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/react" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/react\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/react%22?");

/***/ }),

/***/ "@freeboardgame.org/boardgame.io/ui":
/*!*****************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/ui" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/ui\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/ui%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardHeader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardHeader%22?");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CircularProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CircularProgress%22?");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ClickAwayListener\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ClickAwayListener%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuList\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuList%22?");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Select\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Select%22?");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Slider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Slider%22?");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/SvgIcon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/SvgIcon%22?");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Table\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Table%22?");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableBody\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableBody%22?");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableCell\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableCell%22?");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableHead\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableHead%22?");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TableRow\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TableRow%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tooltip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tooltip%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/blue\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/blue%22?");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/grey\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/grey%22?");

/***/ }),

/***/ "@material-ui/core/colors/lightGreen":
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/lightGreen" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/lightGreen\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/lightGreen%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/colors/yellow":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/yellow" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/yellow\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/yellow%22?");

/***/ }),

/***/ "@material-ui/icons/AccessTime":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccessTime" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccessTime\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccessTime%22?");

/***/ }),

/***/ "@material-ui/icons/Android":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Android" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Android\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Android%22?");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ChevronLeft\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ChevronLeft%22?");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ChevronRight\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ChevronRight%22?");

/***/ }),

/***/ "@material-ui/icons/Code":
/*!******************************************!*\
  !*** external "@material-ui/icons/Code" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Code\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Code%22?");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Done\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Done%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Email\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Email%22?");

/***/ }),

/***/ "@material-ui/icons/FileCopy":
/*!**********************************************!*\
  !*** external "@material-ui/icons/FileCopy" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/FileCopy\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/FileCopy%22?");

/***/ }),

/***/ "@material-ui/icons/Flip":
/*!******************************************!*\
  !*** external "@material-ui/icons/Flip" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Flip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Flip%22?");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Group\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Group%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/MoreVert\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/MoreVert%22?");

/***/ }),

/***/ "@material-ui/icons/NavigateNext":
/*!**************************************************!*\
  !*** external "@material-ui/icons/NavigateNext" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/NavigateNext\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/NavigateNext%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "@material-ui/icons/QuestionAnswer":
/*!****************************************************!*\
  !*** external "@material-ui/icons/QuestionAnswer" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/QuestionAnswer\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/QuestionAnswer%22?");

/***/ }),

/***/ "@material-ui/icons/Replay":
/*!********************************************!*\
  !*** external "@material-ui/icons/Replay" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Replay\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Replay%22?");

/***/ }),

/***/ "@material-ui/icons/RotateLeft":
/*!************************************************!*\
  !*** external "@material-ui/icons/RotateLeft" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/RotateLeft\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/RotateLeft%22?");

/***/ }),

/***/ "@material-ui/icons/RotateRight":
/*!*************************************************!*\
  !*** external "@material-ui/icons/RotateRight" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/RotateRight\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/RotateRight%22?");

/***/ }),

/***/ "@material-ui/icons/Subject":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Subject" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Subject\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Subject%22?");

/***/ }),

/***/ "@material-ui/icons/Wifi":
/*!******************************************!*\
  !*** external "@material-ui/icons/Wifi" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Wifi\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Wifi%22?");

/***/ }),

/***/ "chess.js":
/*!***************************!*\
  !*** external "chess.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chess.js\");\n\n//# sourceURL=webpack:///external_%22chess.js%22?");

/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"copy-to-clipboard\");\n\n//# sourceURL=webpack:///external_%22copy-to-clipboard%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-no-cache":
/*!*******************************!*\
  !*** external "koa-no-cache" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-no-cache\");\n\n//# sourceURL=webpack:///external_%22koa-no-cache%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qrcode.react\");\n\n//# sourceURL=webpack:///external_%22qrcode.react%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-ga\");\n\n//# sourceURL=webpack:///external_%22react-ga%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");\n\n//# sourceURL=webpack:///external_%22react-markdown%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");\n\n//# sourceURL=webpack:///external_%22shortid%22?");

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shuffle-array\");\n\n//# sourceURL=webpack:///external_%22shuffle-array%22?");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent\");\n\n//# sourceURL=webpack:///external_%22superagent%22?");

/***/ }),

/***/ "ttag":
/*!***********************!*\
  !*** external "ttag" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ttag\");\n\n//# sourceURL=webpack:///external_%22ttag%22?");

/***/ })

/******/ });