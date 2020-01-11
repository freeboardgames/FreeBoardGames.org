/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server_bgio": 0
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
/******/ 			var chunk = require("./" + {"0":"842598af5b175817496d","1":"7746c62e78ad1fdc09d5","2":"267d3d56b9109ad8995b","3":"ab9febd1180e86bdae91","4":"38e759d35db879a1a38d","5":"695b992ddfef7b2e55e6","6":"345b19ae439f7171bb0e","7":"670af1a10e772ba30c4e","8":"097a821b947f57486abb","9":"b234b6c978a97ec531e1","10":"1e7c2f92da80a0c5fa89","12":"7565addeef27db65cfc2","14":"ccbd641923ce38c1adf1","15":"535d40b7812d4abf27fc","16":"2fa2a1df09ff8218e22f","18":"318e59cb43f60804f592"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server_bgio.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/Game/GameModePicker.tsx":
/*!*****************************************!*\
  !*** ./src/App/Game/GameModePicker.tsx ***!
  \*****************************************/
/*! exports provided: GameMode, GameModePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameMode\", function() { return GameMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameModePicker\", function() { return GameModePicker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Android */ \"@material-ui/icons/Android\");\n/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Group */ \"@material-ui/icons/Group\");\n/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Wifi */ \"@material-ui/icons/Wifi\");\n/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ \"@material-ui/core/CardHeader\");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slider */ \"@material-ui/core/Slider\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuList */ \"@material-ui/core/MenuList\");\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar GameMode;\n\n(function (GameMode) {\n  GameMode[\"AI\"] = \"AI\";\n  GameMode[\"OnlineFriend\"] = \"online\";\n  GameMode[\"LocalFriend\"] = \"local\";\n})(GameMode || (GameMode = {}));\n\nclass GameModePicker extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this._getLink = to => react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__[\"Link\"], Object.assign({\n        to: to,\n        rel: \"nofollow\"\n      }, props, {\n        ref: ref\n      }));\n    });\n\n    this._handleNumPlayersSelect = event => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[GameMode.OnlineFriend] = event.target.value;\n      this.setState(newState);\n    };\n\n    this._handleSliderChange = mode => (event, value) => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[mode] = value;\n      this.setState(newState);\n    };\n\n    this._handleClickSelection = (mode, value) => () => {\n      const newState = Object.assign({}, this.state, {\n        extraInfo: Object.assign({}, this.state.extraInfo)\n      });\n      newState.extraInfo[mode] = value;\n      this.setState(newState);\n    };\n\n    this.state = {\n      extraInfo: {\n        online: this.props.gameDef.minPlayers\n      }\n    };\n  }\n\n  render() {\n    const modes = [];\n\n    for (const mode of this.props.gameDef.modes) {\n      modes.push(this._getCard(mode));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      variant: \"subtitle1\",\n      style: {\n        marginBottom: '16px'\n      }\n    }, \"Choose game mode\"), modes);\n  }\n\n  _getCard(info) {\n    let title;\n    let description;\n    let icon;\n\n    switch (info.mode) {\n      case GameMode.AI:\n        title = 'Computer (AI)';\n        description = 'Play against the computer in your browser.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default.a, null);\n        break;\n\n      case GameMode.LocalFriend:\n        title = 'Local Friend';\n        description = 'Share your device and play against a friend locally.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default.a, null);\n        break;\n\n      case GameMode.OnlineFriend:\n        title = 'Online Friend';\n        description = 'Share a link and play against a friend online.';\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default.a, null);\n        break;\n    }\n\n    const extraInfo = this._getExtraInfo(info);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      key: title,\n      style: {\n        marginBottom: '16px'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        \"aria-label\": title\n      }, icon),\n      title: title\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      component: \"p\"\n    }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, null, extraInfo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {\n      \"data-testid\": \"playButton\",\n      component: this._getLink(this._getUrl(info)),\n      variant: \"contained\",\n      color: \"primary\",\n      style: {\n        marginLeft: 'auto'\n      }\n    }, \"Play\")));\n  }\n\n  _getExtraInfoValue(info) {\n    return this.state.extraInfo[info.mode] || 1;\n  }\n\n  _getExtraInfo(info) {\n    if (info.mode == GameMode.OnlineFriend) {\n      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {\n        return this._getExtraInfoNumPlayers(info, this.props.gameDef.minPlayers, this.props.gameDef.maxPlayers);\n      }\n    }\n\n    if (info.extraInfo) {\n      const extraInfo = info.extraInfo;\n\n      if (extraInfo.type === 'slider') {\n        const slider = extraInfo;\n        return this._getExtraInfoSlider(info, slider);\n      } else if (extraInfo.type === 'dropdown') {\n        const dropdown = extraInfo;\n        return this._getExtraInfoDropdown(info, dropdown);\n      }\n    }\n\n    return null;\n  }\n\n  _getExtraInfoNumPlayers(info, minPlayers, maxPlayers) {\n    const options = [];\n\n    for (let i = minPlayers; i <= maxPlayers; i++) {\n      options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        value: i,\n        key: i\n      }, i, \" Players\"));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        marginBottom: '8px'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      style: {\n        position: 'relative',\n        top: '8px',\n        padding: '0 8px'\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default.a, {\n      value: this._getExtraInfoValue(info),\n      onChange: this._handleNumPlayersSelect\n    }, options));\n  }\n\n  _getExtraInfoSlider(info, slider) {\n    const value = this._getExtraInfoValue(info);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        marginBottom: '18px',\n        width: '80%'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      id: \"label\",\n      style: {\n        marginBottom: '8px'\n      }\n    }, \"Difficulty \", value, \"/\", slider.max), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      value: value,\n      min: slider.min,\n      max: slider.max,\n      step: 1,\n      onChange: this._handleSliderChange(info.mode)\n    }));\n  }\n\n  _getExtraInfoDropdown(info, dropdown) {\n    const list = dropdown.options.map((option, idx) => {\n      idx++;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        onClick: this._handleClickSelection(info.mode, idx),\n        key: option,\n        value: option,\n        selected: this._getExtraInfoValue(info) === idx\n      }, option);\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      style: {\n        paddingTop: 0,\n        paddingBottom: 0,\n        display: 'flex'\n      }\n    }, list));\n  }\n\n  _getUrl(info) {\n    const mode = info.mode;\n\n    switch (mode) {\n      case GameMode.AI:\n        if (info.extraInfo) {\n          return `/g/${this.props.gameDef.code}/AI/${this._getExtraInfoValue(info)}`;\n        } else {\n          return `/g/${this.props.gameDef.code}/AI`;\n        }\n\n      case GameMode.LocalFriend:\n        return `/g/${this.props.gameDef.code}/local`;\n\n      case GameMode.OnlineFriend:\n        return `/room/new/${this.props.gameDef.code}/${this._getExtraInfoValue(info)}`;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/App/Game/GameModePicker.tsx?");

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

/***/ "./src/server_bgio.tsx":
/*!*****************************!*\
  !*** ./src/server_bgio.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games */ \"./src/games/index.ts\");\n/* harmony import */ var koa_no_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-no-cache */ \"koa-no-cache\");\n/* harmony import */ var koa_no_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_no_cache__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\nconst cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\"); // tslint:disable-line\n\n\nconst {\n  Server\n} = __webpack_require__(/*! @freeboardgame.org/boardgame.io/server */ \"@freeboardgame.org/boardgame.io/server\"); // tslint:disable-line\n\n\nconst PORT = process.env.BGIO_PORT || 8001;\n\nconst startServer = () => __awaiter(undefined, void 0, void 0, function* () {\n  const configs = Promise.all(_games__WEBPACK_IMPORTED_MODULE_0__[\"GAMES_LIST\"].map(gameDef => gameDef.config()));\n  const games = (yield configs).map(config => config.default.bgioGame);\n  const server = Server({\n    games\n  });\n  server.app.use(koa_no_cache__WEBPACK_IMPORTED_MODULE_1___default()({\n    global: true\n  }));\n  server.app.use(cors());\n  server.run(PORT, () => {\n    console.log(`Serving boardgame.io at: http://0.0.0.0:${PORT}/`); // tslint:disable-line\n  });\n});\n\nstartServer();\n\n//# sourceURL=webpack:///./src/server_bgio.tsx?");

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

/***/ "@freeboardgame.org/boardgame.io/server":
/*!*********************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/server" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/server\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/server%22?");

/***/ }),

/***/ "@freeboardgame.org/boardgame.io/ui":
/*!*****************************************************!*\
  !*** external "@freeboardgame.org/boardgame.io/ui" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@freeboardgame.org/boardgame.io/ui\");\n\n//# sourceURL=webpack:///external_%22@freeboardgame.org/boardgame.io/ui%22?");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");\n\n//# sourceURL=webpack:///external_%22@koa/cors%22?");

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

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

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

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

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

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Done\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Done%22?");

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

/***/ "koa-no-cache":
/*!*******************************!*\
  !*** external "koa-no-cache" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-no-cache\");\n\n//# sourceURL=webpack:///external_%22koa-no-cache%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-ga\");\n\n//# sourceURL=webpack:///external_%22react-ga%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

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