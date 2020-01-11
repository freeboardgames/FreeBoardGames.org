(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.ttag"],{

/***/ "./node_modules/ttag/dist/ttag.js":
/*!****************************************!*\
  !*** ./node_modules/ttag/dist/ttag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function pluralFnBody(n){return"return args[+ ("+n+")];"}Object.defineProperty(exports,"__esModule",{value:!0});var localeRegExp=/(\w+)[-_].*/;function tryGetLangData(n,a){if(a[n])return a[n];var t=n.match(localeRegExp);if(!t)throw new Error("Can't find lang or lcale with code "+n);return a[t[1]]}var fnCache={};function createPluralFunc(n){var a=fnCache[n];return a||(a=new Function("n","args",pluralFnBody(n)),fnCache[n]=a),a}var DATA={ach:"2;n>1",af:"2;n!=1",ak:"2;n>1",am:"2;n>1",an:"2;n!=1",ar:"6;n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5",arn:"2;n>1",ast:"2;n!=1",ay:"1;0",az:"2;n!=1",be:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",bg:"2;n!=1",bn:"2;n!=1",bo:"1;0",br:"2;n>1",brx:"2;n!=1",bs:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ca:"2;n!=1",cgg:"1;0",cs:"3;n==1?0:(n>=2&&n<=4)?1:2",csb:"3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",cy:"4;n==1?0:n==2?1:(n!=8&&n!=11)?2:3",da:"2;n!=1",de:"2;n!=1",doi:"2;n!=1",dz:"1;0",el:"2;n!=1",en:"2;n!=1",eo:"2;n!=1",es:"2;n!=1",et:"2;n!=1",eu:"2;n!=1",fa:"1;0",ff:"2;n!=1",fi:"2;n!=1",fil:"2;n>1",fo:"2;n!=1",fr:"2;n>1",fur:"2;n!=1",fy:"2;n!=1",ga:"5;n==1?0:n==2?1:n<7?2:n<11?3:4",gd:"4;(n==1||n==11)?0:(n==2||n==12)?1:(n>2&&n<20)?2:3",gl:"2;n!=1",gu:"2;n!=1",gun:"2;n>1",ha:"2;n!=1",he:"2;n!=1",hi:"2;n!=1",hne:"2;n!=1",hr:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",hu:"2;n!=1",hy:"2;n!=1",id:"1;0",is:"2;n%10!=1||n%100==11",it:"2;n!=1",ja:"1;0",jbo:"1;0",jv:"2;n!==0",ka:"1;0",kk:"1;0",km:"1;0",kn:"2;n!=1",ko:"1;0",ku:"2;n!=1",kw:"4;n==1?0:n==2?1:n==3?2:3",ky:"1;0",lb:"2;n!=1",ln:"2;n>1",lo:"1;0",lt:"3;n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2",lv:"3;n%10==1&&n%100!=11?0:n!=0?1:2",mai:"2;n!=1",mfe:"2;n>1",mg:"2;n>1",mi:"2;n>1",mk:"2;n==1||n%10==1?0:1",ml:"2;n!=1",mn:"2;n!=1",mni:"2;n!=1",mnk:"3;n==0?0:n==1?1:2",mr:"2;n!=1",ms:"1;0",mt:"4;n==1?0:n==0||(n%100>1&&n%100<11)?1:(n%100>10&&n%100<20)?2:3",my:"1;0",nah:"2;n!=1",nap:"2;n!=1",nb:"2;n!=1",ne:"2;n!=1",nl:"2;n!=1",nn:"2;n!=1",no:"2;n!=1",nso:"2;n!=1",oc:"2;n>1",or:"2;n!=1",pa:"2;n!=1",pap:"2;n!=1",pl:"3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",pms:"2;n!=1",ps:"2;n!=1",pt:"2;n!=1",rm:"2;n!=1",ro:"3;n==1?0:(n==0||(n%100>0&&n%100<20))?1:2",ru:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",rw:"2;n!=1",sah:"1;0",sat:"2;n!=1",sco:"2;n!=1",sd:"2;n!=1",se:"2;n!=1",si:"2;n!=1",sk:"3;n==1?0:(n>=2&&n<=4)?1:2",sl:"4;n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0",so:"2;n!=1",son:"2;n!=1",sq:"2;n!=1",sr:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",su:"1;0",sv:"2;n!=1",sw:"2;n!=1",ta:"2;n!=1",te:"2;n!=1",tg:"2;n>1",th:"1;0",ti:"2;n>1",tk:"2;n!=1",tr:"2;n>1",tt:"1;0",ug:"1;0",uk:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ur:"2;n!=1",uz:"2;n>1",vi:"1;0",wa:"2;n>1",wo:"1;0",yo:"2;n!=1",zh:"1;0"};function getFormula(n){return tryGetLangData(n,DATA).split(";")[1]}function getNPlurals(n){var a=tryGetLangData(n,DATA);return parseInt(a.split(";")[0],10)}function getPluralFunc(n){return createPluralFunc(getFormula(n))}function hasLang(n){try{return tryGetLangData(n,DATA),!0}catch(n){return!1}}function getAvailLangs(){return Object.keys(DATA)}exports.getFormula=getFormula,exports.getNPlurals=getNPlurals,exports.getPluralFunc=getPluralFunc,exports.hasLang=hasLang,exports.getAvailLangs=getAvailLangs;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMsgid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return msgid2Orig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return buildStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return buildArr; });
/* unused harmony export makePluralFunc */
/* unused harmony export getPluralFunc */
/* harmony export (immutable) */ __webpack_exports__["g"] = transformTranslateObj;
/* harmony export (immutable) */ __webpack_exports__["h"] = transformCompactObj;
/* harmony export (immutable) */ __webpack_exports__["a"] = dedentStr;
/* harmony export (immutable) */ __webpack_exports__["f"] = getPluralFnForTrans;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dedent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dedent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dedent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var getMsgid = function getMsgid(str, exprs) {
  return str.reduce(function (s, l, i) {
    return s + l + (exprs[i] !== undefined && "${".concat(i, "}") || '');
  }, '');
};

var removeSpaces = function removeSpaces(str) {
  return str.replace(/\s/g, '');
};

var mem = {};

var memoize1 = function memoize1(f) {
  return function (arg) {
    if (mem[arg]) {
      return mem[arg];
    }

    mem[arg] = f(arg);
    return mem[arg];
  };
};

var reg = function reg(i) {
  return new RegExp("\\$\\{(?:[\\s]+?|\\s?)".concat(i, "(?:[\\s]+?|\\s?)}"));
};

var memReg = memoize1(reg);
var msgid2Orig = function msgid2Orig(id, exprs) {
  return exprs.reduce(function (r, expr, i) {
    return r.replace(memReg(i), expr);
  }, id);
};
var buildStr = function buildStr(strs, exprs) {
  return strs.reduce(function (r, s, i) {
    return r + s + (exprs[i] !== undefined ? exprs[i] : '');
  }, '');
};
var buildArr = function buildArr(strs, exprs) {
  return strs.reduce(function (r, s, i) {
    return exprs[i] !== undefined ? r.concat(s, exprs[i]) : r.concat(s);
  }, []);
};

function pluralFnBody(pluralStr) {
  return "return args[+ (".concat(pluralStr, ")];");
}

var fnCache = {};
function makePluralFunc(pluralStr) {
  /* eslint-disable no-new-func */
  var fn = fnCache[pluralStr];

  if (!fn) {
    fn = new Function('n', 'args', pluralFnBody(pluralStr));
    fnCache[pluralStr] = fn;
  }

  return fn;
}
var pluralRegex = /\splural ?=?([\s\S]*);?/;
function getPluralFunc(headers) {
  var pluralFn = pluralRegex.exec(headers['plural-forms'])[1];

  if (pluralFn[pluralFn.length - 1] === ';') {
    pluralFn = pluralFn.slice(0, -1);
  }

  return pluralFn;
}
var variableREG = /\$\{\s*([.\w+\[\]])*\s*\}/g;

function getObjectKeys(obj) {
  var keys = [];

  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
}

function replaceVariables(str, obj) {
  return str.replace(variableREG, function (variable) {
    return "${".concat(obj[removeSpaces(variable)], "}");
  });
}

function getVariablesMap(msgid) {
  var variableNumberMap = {};
  var variables = msgid.match(variableREG);
  if (!variables) return null;

  for (var i = 0; i < variables.length; i++) {
    variableNumberMap[removeSpaces(variables[i])] = i;
  }

  return variableNumberMap;
}

function transformTranslate(translate) {
  var variableNumberMap = getVariablesMap(translate.msgid);

  if (!variableNumberMap) {
    return translate;
  }

  var msgid = replaceVariables(translate.msgid, variableNumberMap);
  var newTranslate = {
    msgid: msgid
  };

  if (translate.msgid_plural) {
    newTranslate.msgid_plural = replaceVariables(translate.msgid_plural, variableNumberMap);
  }

  newTranslate.msgstr = [];
  var transStrs = translate.msgstr;

  for (var i = 0; i < transStrs.length; i++) {
    newTranslate.msgstr.push(replaceVariables(transStrs[i], variableNumberMap));
  }

  newTranslate.comments = translate.comments;
  return newTranslate;
}

function transformTranslateObj(translateObj) {
  var newTranslations = {};
  var transKeys = getObjectKeys(translateObj.translations);

  for (var i = 0; i < transKeys.length; i++) {
    var key = transKeys[i];
    var translation = translateObj.translations[key];
    var newTranslation = {};
    var msgids = getObjectKeys(translation);

    for (var j = 0; j < msgids.length; j++) {
      var msgid = msgids[j];
      var newTranslate = transformTranslate(translation[msgid]);
      newTranslation[newTranslate.msgid] = newTranslate;
    }

    newTranslations[key] = newTranslation;
  }

  translateObj.translations = newTranslations;
  return translateObj;
}

function transformCompactTranslate(msgid, translations) {
  var variableNumberMap = getVariablesMap(msgid);

  if (!variableNumberMap) {
    return [msgid, translations];
  }

  var newMsgid = replaceVariables(msgid, variableNumberMap);
  var newTranslations = translations.map(function (trans) {
    return replaceVariables(trans, variableNumberMap);
  });
  return [newMsgid, newTranslations];
}

function transformCompactObj(compactObj) {
  var newObj = {
    headers: compactObj.headers
  };
  var newContexts = {};
  var keys = getObjectKeys(compactObj.contexts);

  for (var i = 0; i < keys.length; i++) {
    var ctx = keys[i];
    var newContext = {};
    var msgids = getObjectKeys(compactObj.contexts[ctx]);

    for (var j = 0; j < msgids.length; j++) {
      var msgid = msgids[j];
      var translations = compactObj.contexts[ctx][msgid];

      var _transformCompactTran = transformCompactTranslate(msgid, translations),
          _transformCompactTran2 = _slicedToArray(_transformCompactTran, 2),
          newMsgid = _transformCompactTran2[0],
          newTranslations = _transformCompactTran2[1];

      newContext[newMsgid] = newTranslations;
    }

    newContexts[ctx] = newContext;
  }

  newObj.contexts = newContexts;
  return newObj;
}
function dedentStr(rawStr) {
  if (!(typeof rawStr === 'string')) {
    return rawStr;
  }

  if (rawStr.indexOf('\n') === -1) {
    return rawStr;
  }

  return __WEBPACK_IMPORTED_MODULE_0_dedent___default()(rawStr);
}
function getPluralFnForTrans(config) {
  var headers = config.getCurrentLocaleHeaders();
  var language = headers.language | headers.Language;

  if (language) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__["getPluralFunc"])(language);
  }

  var pluralStr = getPluralFunc(headers);
  return makePluralFunc(pluralStr);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = validateLocaleCode;
/* harmony export (immutable) */ __webpack_exports__["f"] = validateLocaleData;
/* harmony export (immutable) */ __webpack_exports__["g"] = validateLocales;
/* harmony export (immutable) */ __webpack_exports__["a"] = validateNgettextMsgid;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateNgettextNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateNgettextPluralForms;
/* harmony export (immutable) */ __webpack_exports__["d"] = validateLang;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function validateLocale(locale, availLocales) {
  if (true) {
    if (!availLocales[locale]) {
      throw new Error("\n                    Locale '".concat(locale, "' is not found in config.\n                    useLocales accepts only existing locales. Use addLocale function before.\n                    Available locales: ").concat(JSON.stringify(availLocales)));
    }
  }
}

function validateLocaleCode(locale) {
  if (true) {
    if (typeof locale !== 'string') {
      throw new Error("Expected locale code to be a string but recieved ".concat(_typeof(locale), " insttead"));
    }
  }
}
function validateLocaleData(data) {
  if (true) {
    // eslint-disable-next-line
    var addLocaleDoc = 'https://ttag.js.org/docs/library-api.html#addlocale';

    if (!data) {
      throw new Error("\n            Locale data should not be empty.\n            see - ".concat(addLocaleDoc, "\n            "));
    }

    if (!data.headers) {
      throw new Error("\n            Locale data should contain headers \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
    }

    if (!data.headers['plural-forms'] && !data.headers['Plural-Forms']) {
      throw new Error("\n            Locale data.headers should contain 'Plural-Forms' attribute \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
    }

    if (!data.translations && !data.contexts) {
      throw new Error("\n            Locale data should contain translations or contexts property \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
    }

    if (data.translations && !Object.keys(data.translations).length) {
      throw new Error("\n            Locale data.translations should have at least 1 key\"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
    }

    if (data.contexts && !Object.keys(data.contexts).length) {
      throw new Error("\n            Locale data.contexts should have at least 1 key\"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
    }
  }
}
function validateLocales(locales, availLocales) {
  if (true) {
    if (!Array.isArray(locales)) {
      throw new Error('useLocales accepts only array as the first argument');
    }

    locales.forEach(function (locale) {
      return validateLocale(locale, availLocales);
    });
  }
}
function validateNgettextMsgid(str) {
  if (true) {
    var ngettextDoc = 'https://ttag.js.org/docs/ngettext.html';

    if (!(str.hasOwnProperty('_strs') && str.hasOwnProperty('_exprs'))) {
      throw new Error("The first argument for ngettext must be tagged with 'msgid' tag.\n                see - ".concat(ngettextDoc, ";\n                "));
    }
  }
}
function validateNgettextNumber(n) {
  if (true) {
    var ngettextDoc = 'https://ttag.js.org/docs/ngettext.html';

    if (!(typeof n === 'number')) {
      throw new Error("The last argument to ngettext - '".concat(n, "' expected to be a number. Got '").concat(_typeof(n), "' instead.\n                see - ").concat(ngettextDoc));
    }
  }
}
function validateNgettextPluralForms(expectedFormsCount, actualFormsCount) {
  if (true) {
    if (actualFormsCount !== expectedFormsCount) {
      throw new Error( // eslint-disable-next-line max-len
      "ngettext expects ".concat(expectedFormsCount, " for the current default locale, but received - ").concat(actualFormsCount, "."));
    }
  }
}
function validateLang(lang) {
  if (true) {
    var langs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__["getAvailLangs"])().join(',');

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__["hasLang"])(lang)) {
      throw new Error("Unknown lang code - ".concat(lang, ". Lang should be one of: ").concat(langs, "."));
    }
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Config;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__);



function Config() {
  var _this = this;

  var config = {
    locales: {},
    currentLocales: [],
    currentLocale: 'en',
    dedent: true,
    defaultLang: 'en'
  };

  this.addLocale = function (locale, localeData) {
    if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["e" /* validateLocaleCode */])(locale);
    if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["f" /* validateLocaleData */])(localeData);

    if (localeData.translations) {
      localeData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* transformTranslateObj */])(localeData);
    } else if (localeData.contexts) {
      localeData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["h" /* transformCompactObj */])(localeData);
    } else {
      throw new Error('Invalid locale data format');
    }

    config.locales[locale] = localeData;
  };

  this.setCurrentLocale = function (locale) {
    config.currentLocale = locale;
  };

  this.setDedent = function (dedent) {
    config.dedent = dedent;
  };

  this.setCurrentLocales = function (locales) {
    if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["g" /* validateLocales */])(locales, _this.getAvailLocales());
    config.currentLocales = locales;
  };

  this.getAvailLocales = function () {
    return config.locales;
  };

  this.getCurrentLocales = function () {
    return config.currentLocales;
  };

  this.getCurrentLocale = function () {
    return config.currentLocale;
  };

  this.isDedent = function () {
    return config.dedent;
  };

  this.setDefaultLang = function (lang) {
    config.defaultLang = lang;
  };

  this.getDefaultPluralFn = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__["getPluralFunc"])(config.defaultLang);
  };

  this.getDefaultPluralFormsCount = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__["getNPlurals"])(config.defaultLang);
  };

  this.getCurrentLocaleHeaders = function () {
    return config.locales[config.currentLocale].headers;
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["t"] = t;
/* harmony export (immutable) */ __webpack_exports__["jt"] = jt;
/* harmony export (immutable) */ __webpack_exports__["msgid"] = msgid;
/* harmony export (immutable) */ __webpack_exports__["gettext"] = gettext;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony export (immutable) */ __webpack_exports__["ngettext"] = ngettext;
/* harmony export (immutable) */ __webpack_exports__["addLocale"] = addLocale;
/* harmony export (immutable) */ __webpack_exports__["useLocale"] = useLocale;
/* harmony export (immutable) */ __webpack_exports__["setDedent"] = setDedent;
/* harmony export (immutable) */ __webpack_exports__["useLocales"] = useLocales;
/* harmony export (immutable) */ __webpack_exports__["setDefaultLang"] = setDefaultLang;
/* harmony export (immutable) */ __webpack_exports__["c"] = c;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);



var conf = new __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */]();

function Context(context) {
  if (true) {
    if (typeof context !== 'string') {
      throw new Error('String type is expected as a first ' + 'argument to c() function.');
    }
  }

  this.getContext = function () {
    return context;
  };
}

var getTransContext = function getTransContext(obj) {
  if (obj instanceof Context) {
    return obj.getContext();
  }

  return '';
};

function isFuzzy(translationObj) {
  return translationObj && translationObj.comments && translationObj.comments.flag === 'fuzzy';
}

function hasTranslations(msgstr) {
  if (!msgstr) return false;

  for (var i = 0; i < msgstr.length; i++) {
    if (!msgstr[i].length) return false;
  }

  return true;
}

function findTransObj(locale, str, ctx) {
  var locales = conf.getAvailLocales();
  var localeData = locales[locale];
  if (!localeData) return null; // verbose format

  if (localeData.translations) {
    var translations = localeData.translations[ctx] || localeData.translations[''];
    var translation = translations && translations[str];

    if (translation && !isFuzzy(translation) && hasTranslations(translation.msgstr)) {
      return translation.msgstr;
    }
  } // compact format


  if (localeData.contexts) {
    var _translations = localeData.contexts[ctx] || localeData.contexts[''];

    var _translation = _translations && _translations[str];

    if (_translation && hasTranslations(_translation)) {
      return _translation;
    }
  }

  return null;
}

function findTranslation(str, ctx) {
  var locales = conf.getCurrentLocales();

  if (locales.length) {
    for (var i = 0; i < locales.length; i++) {
      var translation = findTransObj(locales[i], str, ctx);

      if (translation) {
        conf.setCurrentLocale(locales[i]);
        return translation;
      }
    }
  }

  return findTransObj(conf.getCurrentLocale(), str, ctx);
}

var maybeDedent = function maybeDedent(str) {
  return conf.isDedent() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* dedentStr */])(str) : str;
};

function t(strings) {
  var result = strings;

  if (strings && strings.reduce) {
    for (var _len = arguments.length, exprs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      exprs[_key - 1] = arguments[_key];
    }

    var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getMsgid */])(strings, exprs));
    var context = getTransContext(this);
    var trans = findTranslation(id, context);
    result = trans ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* msgid2Orig */])(trans[0], exprs) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* buildStr */])(strings, exprs);
  }

  return maybeDedent(result);
}
var separator = /(\${\s*\d+\s*})/g;
var slotIdRegexp = /\${\s*(\d+)\s*}/;
function jt(strings) {
  for (var _len2 = arguments.length, exprs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    exprs[_key2 - 1] = arguments[_key2];
  }

  if (strings && strings.reduce) {
    var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getMsgid */])(strings, exprs));
    var context = getTransContext(this);
    var trans = findTranslation(id, context);
    if (!trans) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* buildArr */])(strings, exprs); // splits string & capturing group into tokens
    //

    var translatedTokens = trans[0].split(separator);
    return translatedTokens.map(function (token) {
      var slotIdMatch = token.match(slotIdRegexp); // slotIdMatch is not null only when the token is a variable slot (${xx})

      return slotIdMatch ? exprs[+slotIdMatch[1]] : token;
    });
  }

  return strings;
}
function msgid(strings) {
  /* eslint-disable no-new-wrappers */
  if (strings && strings.reduce) {
    for (var _len3 = arguments.length, exprs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      exprs[_key3 - 1] = arguments[_key3];
    }

    var result = new String(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* buildStr */])(strings, exprs));
    result._strs = strings;
    result._exprs = exprs;
    return result;
  }

  return strings;
}
function gettext(id) {
  var context = getTransContext(this);
  var trans = findTranslation(id, context);
  return trans ? trans[0] : id;
}
var _ = gettext;
function ngettext() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["a" /* validateNgettextMsgid */])(args[0]);
  var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getMsgid */])(args[0]._strs, args[0]._exprs));
  var n = args[args.length - 1];
  if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["b" /* validateNgettextNumber */])(n);
  var forms = args.slice(1, -1);
  forms.unshift(args[0].toString());

  if (true) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["c" /* validateNgettextPluralForms */])(conf.getDefaultPluralFormsCount(), forms.length);
  }

  var trans = findTranslation(id, getTransContext(this));

  if (trans) {
    var _pluralFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* getPluralFnForTrans */])(conf);

    return maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* msgid2Orig */])(_pluralFn(n, trans), args[0]._exprs));
  }

  var pluralFn = conf.getDefaultPluralFn();
  return maybeDedent(pluralFn(n, forms));
}
function addLocale(locale, data) {
  conf.addLocale(locale, data);
}
function useLocale(locale) {
  conf.setCurrentLocale(locale);
}
function setDedent(value) {
  conf.setDedent(Boolean(value));
}
function useLocales(locales) {
  conf.setCurrentLocales(locales);
}
function setDefaultLang(lang) {
  if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["d" /* validateLang */])(lang);
  conf.setDefaultLang(lang);
}
function c(context) {
  var ctx = new Context(context);
  return {
    t: t.bind(ctx),
    jt: jt.bind(ctx),
    gettext: gettext.bind(ctx),
    ngettext: ngettext.bind(ctx)
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dedent(strings) {

  var raw = void 0;
  if (typeof strings === "string") {
    // dedent can be used as a plain function
    raw = [strings];
  } else {
    raw = strings.raw;
  }

  // first, perform interpolation
  var result = "";
  for (var i = 0; i < raw.length; i++) {
    result += raw[i].
    // join lines when there is a suppressed newline
    replace(/\\\n[ \t]*/g, "").

    // handle escaped backticks
    replace(/\\`/g, "`");

    if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
      result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
    }
  }

  // now strip indentation
  var lines = result.split("\n");
  var mindent = null;
  lines.forEach(function (l) {
    var m = l.match(/^(\s+)\S+/);
    if (m) {
      var indent = m[1].length;
      if (!mindent) {
        // this is the first indented line
        mindent = indent;
      } else {
        mindent = Math.min(mindent, indent);
      }
    }
  });

  if (mindent !== null) {
    result = lines.map(function (l) {
      return l[0] === " " ? l.slice(mindent) : l;
    }).join("\n");
  }

  // dedent eats leading and trailing whitespace too
  result = result.trim();

  // handle escaped newlines at the end to ensure they don't get stripped too
  return result.replace(/\\n/g, "\n");
}

if (true) {
  module.exports = dedent;
}


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/ttag/index.js":
/*!************************************!*\
  !*** ./node_modules/ttag/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */

if (false) {} else {
    module.exports = __webpack_require__(/*! ./dist/ttag.js */ "./node_modules/ttag/dist/ttag.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHRhZy9kaXN0L3R0YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R0YWcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxhQUtKO0FBQ0YsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGNBQWM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDhCQUE4QixFQUFFLDRDQUE0QyxTQUFTLEVBQUUsK0JBQStCLDZCQUE2QixvQkFBb0IsNEJBQTRCLCtEQUErRCxlQUFlLGVBQWUsNkJBQTZCLGlCQUFpQixzRUFBc0UsVUFBVSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxpRUFBaUUsWUFBWSxZQUFZLFNBQVMsWUFBWSx3RUFBd0UsWUFBWSxZQUFZLFNBQVMsWUFBWSxZQUFZLHdFQUF3RSxhQUFhLFNBQVMsZ0NBQWdDLDBEQUEwRCx1Q0FBdUMsWUFBWSxhQUFhLFlBQVksU0FBUyxZQUFZ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QTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDcnpCRDs7QUFFQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxxQkFBcUIsbUJBQU8sQ0FBQyx3REFBZ0I7QUFDN0MiLCJmaWxlIjoiNmQzMGM1ZDQ4YmNhYWY2OTNmZmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcGx1cmFsRm5Cb2R5KG4pe3JldHVyblwicmV0dXJuIGFyZ3NbKyAoXCIrbitcIildO1wifU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBsb2NhbGVSZWdFeHA9LyhcXHcrKVstX10uKi87ZnVuY3Rpb24gdHJ5R2V0TGFuZ0RhdGEobixhKXtpZihhW25dKXJldHVybiBhW25dO3ZhciB0PW4ubWF0Y2gobG9jYWxlUmVnRXhwKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBmaW5kIGxhbmcgb3IgbGNhbGUgd2l0aCBjb2RlIFwiK24pO3JldHVybiBhW3RbMV1dfXZhciBmbkNhY2hlPXt9O2Z1bmN0aW9uIGNyZWF0ZVBsdXJhbEZ1bmMobil7dmFyIGE9Zm5DYWNoZVtuXTtyZXR1cm4gYXx8KGE9bmV3IEZ1bmN0aW9uKFwiblwiLFwiYXJnc1wiLHBsdXJhbEZuQm9keShuKSksZm5DYWNoZVtuXT1hKSxhfXZhciBEQVRBPXthY2g6XCIyO24+MVwiLGFmOlwiMjtuIT0xXCIsYWs6XCIyO24+MVwiLGFtOlwiMjtuPjFcIixhbjpcIjI7biE9MVwiLGFyOlwiNjtuPT0wPzA6bj09MT8xOm49PTI/MjpuJTEwMD49MyYmbiUxMDA8PTEwPzM6biUxMDA+PTExPzQ6NVwiLGFybjpcIjI7bj4xXCIsYXN0OlwiMjtuIT0xXCIsYXk6XCIxOzBcIixhejpcIjI7biE9MVwiLGJlOlwiMztuJTEwPT0xJiZuJTEwMCE9MTE/MDpuJTEwPj0yJiZuJTEwPD00JiYobiUxMDA8MTB8fG4lMTAwPj0yMCk/MToyXCIsYmc6XCIyO24hPTFcIixibjpcIjI7biE9MVwiLGJvOlwiMTswXCIsYnI6XCIyO24+MVwiLGJyeDpcIjI7biE9MVwiLGJzOlwiMztuJTEwPT0xJiZuJTEwMCE9MTE/MDpuJTEwPj0yJiZuJTEwPD00JiYobiUxMDA8MTB8fG4lMTAwPj0yMCk/MToyXCIsY2E6XCIyO24hPTFcIixjZ2c6XCIxOzBcIixjczpcIjM7bj09MT8wOihuPj0yJiZuPD00KT8xOjJcIixjc2I6XCIzO249PTE/MDpuJTEwPj0yJiZuJTEwPD00JiYobiUxMDA8MTB8fG4lMTAwPj0yMCk/MToyXCIsY3k6XCI0O249PTE/MDpuPT0yPzE6KG4hPTgmJm4hPTExKT8yOjNcIixkYTpcIjI7biE9MVwiLGRlOlwiMjtuIT0xXCIsZG9pOlwiMjtuIT0xXCIsZHo6XCIxOzBcIixlbDpcIjI7biE9MVwiLGVuOlwiMjtuIT0xXCIsZW86XCIyO24hPTFcIixlczpcIjI7biE9MVwiLGV0OlwiMjtuIT0xXCIsZXU6XCIyO24hPTFcIixmYTpcIjE7MFwiLGZmOlwiMjtuIT0xXCIsZmk6XCIyO24hPTFcIixmaWw6XCIyO24+MVwiLGZvOlwiMjtuIT0xXCIsZnI6XCIyO24+MVwiLGZ1cjpcIjI7biE9MVwiLGZ5OlwiMjtuIT0xXCIsZ2E6XCI1O249PTE/MDpuPT0yPzE6bjw3PzI6bjwxMT8zOjRcIixnZDpcIjQ7KG49PTF8fG49PTExKT8wOihuPT0yfHxuPT0xMik/MToobj4yJiZuPDIwKT8yOjNcIixnbDpcIjI7biE9MVwiLGd1OlwiMjtuIT0xXCIsZ3VuOlwiMjtuPjFcIixoYTpcIjI7biE9MVwiLGhlOlwiMjtuIT0xXCIsaGk6XCIyO24hPTFcIixobmU6XCIyO24hPTFcIixocjpcIjM7biUxMD09MSYmbiUxMDAhPTExPzA6biUxMD49MiYmbiUxMDw9NCYmKG4lMTAwPDEwfHxuJTEwMD49MjApPzE6MlwiLGh1OlwiMjtuIT0xXCIsaHk6XCIyO24hPTFcIixpZDpcIjE7MFwiLGlzOlwiMjtuJTEwIT0xfHxuJTEwMD09MTFcIixpdDpcIjI7biE9MVwiLGphOlwiMTswXCIsamJvOlwiMTswXCIsanY6XCIyO24hPT0wXCIsa2E6XCIxOzBcIixrazpcIjE7MFwiLGttOlwiMTswXCIsa246XCIyO24hPTFcIixrbzpcIjE7MFwiLGt1OlwiMjtuIT0xXCIsa3c6XCI0O249PTE/MDpuPT0yPzE6bj09Mz8yOjNcIixreTpcIjE7MFwiLGxiOlwiMjtuIT0xXCIsbG46XCIyO24+MVwiLGxvOlwiMTswXCIsbHQ6XCIzO24lMTA9PTEmJm4lMTAwIT0xMT8wOm4lMTA+PTImJihuJTEwMDwxMHx8biUxMDA+PTIwKT8xOjJcIixsdjpcIjM7biUxMD09MSYmbiUxMDAhPTExPzA6biE9MD8xOjJcIixtYWk6XCIyO24hPTFcIixtZmU6XCIyO24+MVwiLG1nOlwiMjtuPjFcIixtaTpcIjI7bj4xXCIsbWs6XCIyO249PTF8fG4lMTA9PTE/MDoxXCIsbWw6XCIyO24hPTFcIixtbjpcIjI7biE9MVwiLG1uaTpcIjI7biE9MVwiLG1uazpcIjM7bj09MD8wOm49PTE/MToyXCIsbXI6XCIyO24hPTFcIixtczpcIjE7MFwiLG10OlwiNDtuPT0xPzA6bj09MHx8KG4lMTAwPjEmJm4lMTAwPDExKT8xOihuJTEwMD4xMCYmbiUxMDA8MjApPzI6M1wiLG15OlwiMTswXCIsbmFoOlwiMjtuIT0xXCIsbmFwOlwiMjtuIT0xXCIsbmI6XCIyO24hPTFcIixuZTpcIjI7biE9MVwiLG5sOlwiMjtuIT0xXCIsbm46XCIyO24hPTFcIixubzpcIjI7biE9MVwiLG5zbzpcIjI7biE9MVwiLG9jOlwiMjtuPjFcIixvcjpcIjI7biE9MVwiLHBhOlwiMjtuIT0xXCIscGFwOlwiMjtuIT0xXCIscGw6XCIzO249PTE/MDpuJTEwPj0yJiZuJTEwPD00JiYobiUxMDA8MTB8fG4lMTAwPj0yMCk/MToyXCIscG1zOlwiMjtuIT0xXCIscHM6XCIyO24hPTFcIixwdDpcIjI7biE9MVwiLHJtOlwiMjtuIT0xXCIscm86XCIzO249PTE/MDoobj09MHx8KG4lMTAwPjAmJm4lMTAwPDIwKSk/MToyXCIscnU6XCIzO24lMTA9PTEmJm4lMTAwIT0xMT8wOm4lMTA+PTImJm4lMTA8PTQmJihuJTEwMDwxMHx8biUxMDA+PTIwKT8xOjJcIixydzpcIjI7biE9MVwiLHNhaDpcIjE7MFwiLHNhdDpcIjI7biE9MVwiLHNjbzpcIjI7biE9MVwiLHNkOlwiMjtuIT0xXCIsc2U6XCIyO24hPTFcIixzaTpcIjI7biE9MVwiLHNrOlwiMztuPT0xPzA6KG4+PTImJm48PTQpPzE6MlwiLHNsOlwiNDtuJTEwMD09MT8xOm4lMTAwPT0yPzI6biUxMDA9PTN8fG4lMTAwPT00PzM6MFwiLHNvOlwiMjtuIT0xXCIsc29uOlwiMjtuIT0xXCIsc3E6XCIyO24hPTFcIixzcjpcIjM7biUxMD09MSYmbiUxMDAhPTExPzA6biUxMD49MiYmbiUxMDw9NCYmKG4lMTAwPDEwfHxuJTEwMD49MjApPzE6MlwiLHN1OlwiMTswXCIsc3Y6XCIyO24hPTFcIixzdzpcIjI7biE9MVwiLHRhOlwiMjtuIT0xXCIsdGU6XCIyO24hPTFcIix0ZzpcIjI7bj4xXCIsdGg6XCIxOzBcIix0aTpcIjI7bj4xXCIsdGs6XCIyO24hPTFcIix0cjpcIjI7bj4xXCIsdHQ6XCIxOzBcIix1ZzpcIjE7MFwiLHVrOlwiMztuJTEwPT0xJiZuJTEwMCE9MTE/MDpuJTEwPj0yJiZuJTEwPD00JiYobiUxMDA8MTB8fG4lMTAwPj0yMCk/MToyXCIsdXI6XCIyO24hPTFcIix1ejpcIjI7bj4xXCIsdmk6XCIxOzBcIix3YTpcIjI7bj4xXCIsd286XCIxOzBcIix5bzpcIjI7biE9MVwiLHpoOlwiMTswXCJ9O2Z1bmN0aW9uIGdldEZvcm11bGEobil7cmV0dXJuIHRyeUdldExhbmdEYXRhKG4sREFUQSkuc3BsaXQoXCI7XCIpWzFdfWZ1bmN0aW9uIGdldE5QbHVyYWxzKG4pe3ZhciBhPXRyeUdldExhbmdEYXRhKG4sREFUQSk7cmV0dXJuIHBhcnNlSW50KGEuc3BsaXQoXCI7XCIpWzBdLDEwKX1mdW5jdGlvbiBnZXRQbHVyYWxGdW5jKG4pe3JldHVybiBjcmVhdGVQbHVyYWxGdW5jKGdldEZvcm11bGEobikpfWZ1bmN0aW9uIGhhc0xhbmcobil7dHJ5e3JldHVybiB0cnlHZXRMYW5nRGF0YShuLERBVEEpLCEwfWNhdGNoKG4pe3JldHVybiExfX1mdW5jdGlvbiBnZXRBdmFpbExhbmdzKCl7cmV0dXJuIE9iamVjdC5rZXlzKERBVEEpfWV4cG9ydHMuZ2V0Rm9ybXVsYT1nZXRGb3JtdWxhLGV4cG9ydHMuZ2V0TlBsdXJhbHM9Z2V0TlBsdXJhbHMsZXhwb3J0cy5nZXRQbHVyYWxGdW5jPWdldFBsdXJhbEZ1bmMsZXhwb3J0cy5oYXNMYW5nPWhhc0xhbmcsZXhwb3J0cy5nZXRBdmFpbExhbmdzPWdldEF2YWlsTGFuZ3M7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRNc2dpZDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIG1zZ2lkMk9yaWc7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBidWlsZFN0cjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGJ1aWxkQXJyOyB9KTtcbi8qIHVudXNlZCBoYXJtb255IGV4cG9ydCBtYWtlUGx1cmFsRnVuYyAqL1xuLyogdW51c2VkIGhhcm1vbnkgZXhwb3J0IGdldFBsdXJhbEZ1bmMgKi9cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJnXCJdID0gdHJhbnNmb3JtVHJhbnNsYXRlT2JqO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImhcIl0gPSB0cmFuc2Zvcm1Db21wYWN0T2JqO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBkZWRlbnRTdHI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZlwiXSA9IGdldFBsdXJhbEZuRm9yVHJhbnM7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2RlZGVudF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfZGVkZW50X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfZGVkZW50X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fKTtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5cblxudmFyIGdldE1zZ2lkID0gZnVuY3Rpb24gZ2V0TXNnaWQoc3RyLCBleHBycykge1xuICByZXR1cm4gc3RyLnJlZHVjZShmdW5jdGlvbiAocywgbCwgaSkge1xuICAgIHJldHVybiBzICsgbCArIChleHByc1tpXSAhPT0gdW5kZWZpbmVkICYmIFwiJHtcIi5jb25jYXQoaSwgXCJ9XCIpIHx8ICcnKTtcbiAgfSwgJycpO1xufTtcblxudmFyIHJlbW92ZVNwYWNlcyA9IGZ1bmN0aW9uIHJlbW92ZVNwYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJycpO1xufTtcblxudmFyIG1lbSA9IHt9O1xuXG52YXIgbWVtb2l6ZTEgPSBmdW5jdGlvbiBtZW1vaXplMShmKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKG1lbVthcmddKSB7XG4gICAgICByZXR1cm4gbWVtW2FyZ107XG4gICAgfVxuXG4gICAgbWVtW2FyZ10gPSBmKGFyZyk7XG4gICAgcmV0dXJuIG1lbVthcmddO1xuICB9O1xufTtcblxudmFyIHJlZyA9IGZ1bmN0aW9uIHJlZyhpKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXFxcXCRcXFxceyg/OltcXFxcc10rP3xcXFxccz8pXCIuY29uY2F0KGksIFwiKD86W1xcXFxzXSs/fFxcXFxzPyl9XCIpKTtcbn07XG5cbnZhciBtZW1SZWcgPSBtZW1vaXplMShyZWcpO1xudmFyIG1zZ2lkMk9yaWcgPSBmdW5jdGlvbiBtc2dpZDJPcmlnKGlkLCBleHBycykge1xuICByZXR1cm4gZXhwcnMucmVkdWNlKGZ1bmN0aW9uIChyLCBleHByLCBpKSB7XG4gICAgcmV0dXJuIHIucmVwbGFjZShtZW1SZWcoaSksIGV4cHIpO1xuICB9LCBpZCk7XG59O1xudmFyIGJ1aWxkU3RyID0gZnVuY3Rpb24gYnVpbGRTdHIoc3RycywgZXhwcnMpIHtcbiAgcmV0dXJuIHN0cnMucmVkdWNlKGZ1bmN0aW9uIChyLCBzLCBpKSB7XG4gICAgcmV0dXJuIHIgKyBzICsgKGV4cHJzW2ldICE9PSB1bmRlZmluZWQgPyBleHByc1tpXSA6ICcnKTtcbiAgfSwgJycpO1xufTtcbnZhciBidWlsZEFyciA9IGZ1bmN0aW9uIGJ1aWxkQXJyKHN0cnMsIGV4cHJzKSB7XG4gIHJldHVybiBzdHJzLnJlZHVjZShmdW5jdGlvbiAociwgcywgaSkge1xuICAgIHJldHVybiBleHByc1tpXSAhPT0gdW5kZWZpbmVkID8gci5jb25jYXQocywgZXhwcnNbaV0pIDogci5jb25jYXQocyk7XG4gIH0sIFtdKTtcbn07XG5cbmZ1bmN0aW9uIHBsdXJhbEZuQm9keShwbHVyYWxTdHIpIHtcbiAgcmV0dXJuIFwicmV0dXJuIGFyZ3NbKyAoXCIuY29uY2F0KHBsdXJhbFN0ciwgXCIpXTtcIik7XG59XG5cbnZhciBmbkNhY2hlID0ge307XG5mdW5jdGlvbiBtYWtlUGx1cmFsRnVuYyhwbHVyYWxTdHIpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgdmFyIGZuID0gZm5DYWNoZVtwbHVyYWxTdHJdO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IG5ldyBGdW5jdGlvbignbicsICdhcmdzJywgcGx1cmFsRm5Cb2R5KHBsdXJhbFN0cikpO1xuICAgIGZuQ2FjaGVbcGx1cmFsU3RyXSA9IGZuO1xuICB9XG5cbiAgcmV0dXJuIGZuO1xufVxudmFyIHBsdXJhbFJlZ2V4ID0gL1xcc3BsdXJhbCA/PT8oW1xcc1xcU10qKTs/LztcbmZ1bmN0aW9uIGdldFBsdXJhbEZ1bmMoaGVhZGVycykge1xuICB2YXIgcGx1cmFsRm4gPSBwbHVyYWxSZWdleC5leGVjKGhlYWRlcnNbJ3BsdXJhbC1mb3JtcyddKVsxXTtcblxuICBpZiAocGx1cmFsRm5bcGx1cmFsRm4ubGVuZ3RoIC0gMV0gPT09ICc7Jykge1xuICAgIHBsdXJhbEZuID0gcGx1cmFsRm4uc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgcmV0dXJuIHBsdXJhbEZuO1xufVxudmFyIHZhcmlhYmxlUkVHID0gL1xcJFxce1xccyooWy5cXHcrXFxbXFxdXSkqXFxzKlxcfS9nO1xuXG5mdW5jdGlvbiBnZXRPYmplY3RLZXlzKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVZhcmlhYmxlcyhzdHIsIG9iaikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UodmFyaWFibGVSRUcsIGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiBcIiR7XCIuY29uY2F0KG9ialtyZW1vdmVTcGFjZXModmFyaWFibGUpXSwgXCJ9XCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFyaWFibGVzTWFwKG1zZ2lkKSB7XG4gIHZhciB2YXJpYWJsZU51bWJlck1hcCA9IHt9O1xuICB2YXIgdmFyaWFibGVzID0gbXNnaWQubWF0Y2godmFyaWFibGVSRUcpO1xuICBpZiAoIXZhcmlhYmxlcykgcmV0dXJuIG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXJpYWJsZU51bWJlck1hcFtyZW1vdmVTcGFjZXModmFyaWFibGVzW2ldKV0gPSBpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlTnVtYmVyTWFwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UcmFuc2xhdGUodHJhbnNsYXRlKSB7XG4gIHZhciB2YXJpYWJsZU51bWJlck1hcCA9IGdldFZhcmlhYmxlc01hcCh0cmFuc2xhdGUubXNnaWQpO1xuXG4gIGlmICghdmFyaWFibGVOdW1iZXJNYXApIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG5cbiAgdmFyIG1zZ2lkID0gcmVwbGFjZVZhcmlhYmxlcyh0cmFuc2xhdGUubXNnaWQsIHZhcmlhYmxlTnVtYmVyTWFwKTtcbiAgdmFyIG5ld1RyYW5zbGF0ZSA9IHtcbiAgICBtc2dpZDogbXNnaWRcbiAgfTtcblxuICBpZiAodHJhbnNsYXRlLm1zZ2lkX3BsdXJhbCkge1xuICAgIG5ld1RyYW5zbGF0ZS5tc2dpZF9wbHVyYWwgPSByZXBsYWNlVmFyaWFibGVzKHRyYW5zbGF0ZS5tc2dpZF9wbHVyYWwsIHZhcmlhYmxlTnVtYmVyTWFwKTtcbiAgfVxuXG4gIG5ld1RyYW5zbGF0ZS5tc2dzdHIgPSBbXTtcbiAgdmFyIHRyYW5zU3RycyA9IHRyYW5zbGF0ZS5tc2dzdHI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFuc1N0cnMubGVuZ3RoOyBpKyspIHtcbiAgICBuZXdUcmFuc2xhdGUubXNnc3RyLnB1c2gocmVwbGFjZVZhcmlhYmxlcyh0cmFuc1N0cnNbaV0sIHZhcmlhYmxlTnVtYmVyTWFwKSk7XG4gIH1cblxuICBuZXdUcmFuc2xhdGUuY29tbWVudHMgPSB0cmFuc2xhdGUuY29tbWVudHM7XG4gIHJldHVybiBuZXdUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRyYW5zbGF0ZU9iaih0cmFuc2xhdGVPYmopIHtcbiAgdmFyIG5ld1RyYW5zbGF0aW9ucyA9IHt9O1xuICB2YXIgdHJhbnNLZXlzID0gZ2V0T2JqZWN0S2V5cyh0cmFuc2xhdGVPYmoudHJhbnNsYXRpb25zKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSB0cmFuc0tleXNbaV07XG4gICAgdmFyIHRyYW5zbGF0aW9uID0gdHJhbnNsYXRlT2JqLnRyYW5zbGF0aW9uc1trZXldO1xuICAgIHZhciBuZXdUcmFuc2xhdGlvbiA9IHt9O1xuICAgIHZhciBtc2dpZHMgPSBnZXRPYmplY3RLZXlzKHRyYW5zbGF0aW9uKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbXNnaWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbXNnaWQgPSBtc2dpZHNbal07XG4gICAgICB2YXIgbmV3VHJhbnNsYXRlID0gdHJhbnNmb3JtVHJhbnNsYXRlKHRyYW5zbGF0aW9uW21zZ2lkXSk7XG4gICAgICBuZXdUcmFuc2xhdGlvbltuZXdUcmFuc2xhdGUubXNnaWRdID0gbmV3VHJhbnNsYXRlO1xuICAgIH1cblxuICAgIG5ld1RyYW5zbGF0aW9uc1trZXldID0gbmV3VHJhbnNsYXRpb247XG4gIH1cblxuICB0cmFuc2xhdGVPYmoudHJhbnNsYXRpb25zID0gbmV3VHJhbnNsYXRpb25zO1xuICByZXR1cm4gdHJhbnNsYXRlT2JqO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Db21wYWN0VHJhbnNsYXRlKG1zZ2lkLCB0cmFuc2xhdGlvbnMpIHtcbiAgdmFyIHZhcmlhYmxlTnVtYmVyTWFwID0gZ2V0VmFyaWFibGVzTWFwKG1zZ2lkKTtcblxuICBpZiAoIXZhcmlhYmxlTnVtYmVyTWFwKSB7XG4gICAgcmV0dXJuIFttc2dpZCwgdHJhbnNsYXRpb25zXTtcbiAgfVxuXG4gIHZhciBuZXdNc2dpZCA9IHJlcGxhY2VWYXJpYWJsZXMobXNnaWQsIHZhcmlhYmxlTnVtYmVyTWFwKTtcbiAgdmFyIG5ld1RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucy5tYXAoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXModHJhbnMsIHZhcmlhYmxlTnVtYmVyTWFwKTtcbiAgfSk7XG4gIHJldHVybiBbbmV3TXNnaWQsIG5ld1RyYW5zbGF0aW9uc107XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNvbXBhY3RPYmooY29tcGFjdE9iaikge1xuICB2YXIgbmV3T2JqID0ge1xuICAgIGhlYWRlcnM6IGNvbXBhY3RPYmouaGVhZGVyc1xuICB9O1xuICB2YXIgbmV3Q29udGV4dHMgPSB7fTtcbiAgdmFyIGtleXMgPSBnZXRPYmplY3RLZXlzKGNvbXBhY3RPYmouY29udGV4dHMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjdHggPSBrZXlzW2ldO1xuICAgIHZhciBuZXdDb250ZXh0ID0ge307XG4gICAgdmFyIG1zZ2lkcyA9IGdldE9iamVjdEtleXMoY29tcGFjdE9iai5jb250ZXh0c1tjdHhdKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbXNnaWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbXNnaWQgPSBtc2dpZHNbal07XG4gICAgICB2YXIgdHJhbnNsYXRpb25zID0gY29tcGFjdE9iai5jb250ZXh0c1tjdHhdW21zZ2lkXTtcblxuICAgICAgdmFyIF90cmFuc2Zvcm1Db21wYWN0VHJhbiA9IHRyYW5zZm9ybUNvbXBhY3RUcmFuc2xhdGUobXNnaWQsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgICAgX3RyYW5zZm9ybUNvbXBhY3RUcmFuMiA9IF9zbGljZWRUb0FycmF5KF90cmFuc2Zvcm1Db21wYWN0VHJhbiwgMiksXG4gICAgICAgICAgbmV3TXNnaWQgPSBfdHJhbnNmb3JtQ29tcGFjdFRyYW4yWzBdLFxuICAgICAgICAgIG5ld1RyYW5zbGF0aW9ucyA9IF90cmFuc2Zvcm1Db21wYWN0VHJhbjJbMV07XG5cbiAgICAgIG5ld0NvbnRleHRbbmV3TXNnaWRdID0gbmV3VHJhbnNsYXRpb25zO1xuICAgIH1cblxuICAgIG5ld0NvbnRleHRzW2N0eF0gPSBuZXdDb250ZXh0O1xuICB9XG5cbiAgbmV3T2JqLmNvbnRleHRzID0gbmV3Q29udGV4dHM7XG4gIHJldHVybiBuZXdPYmo7XG59XG5mdW5jdGlvbiBkZWRlbnRTdHIocmF3U3RyKSB7XG4gIGlmICghKHR5cGVvZiByYXdTdHIgPT09ICdzdHJpbmcnKSkge1xuICAgIHJldHVybiByYXdTdHI7XG4gIH1cblxuICBpZiAocmF3U3RyLmluZGV4T2YoJ1xcbicpID09PSAtMSkge1xuICAgIHJldHVybiByYXdTdHI7XG4gIH1cblxuICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2RlZGVudF9fX2RlZmF1bHQoKShyYXdTdHIpO1xufVxuZnVuY3Rpb24gZ2V0UGx1cmFsRm5Gb3JUcmFucyhjb25maWcpIHtcbiAgdmFyIGhlYWRlcnMgPSBjb25maWcuZ2V0Q3VycmVudExvY2FsZUhlYWRlcnMoKTtcbiAgdmFyIGxhbmd1YWdlID0gaGVhZGVycy5sYW5ndWFnZSB8IGhlYWRlcnMuTGFuZ3VhZ2U7XG5cbiAgaWYgKGxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fW1wiZ2V0UGx1cmFsRnVuY1wiXSkobGFuZ3VhZ2UpO1xuICB9XG5cbiAgdmFyIHBsdXJhbFN0ciA9IGdldFBsdXJhbEZ1bmMoaGVhZGVycyk7XG4gIHJldHVybiBtYWtlUGx1cmFsRnVuYyhwbHVyYWxTdHIpO1xufVxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZVwiXSA9IHZhbGlkYXRlTG9jYWxlQ29kZTtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJmXCJdID0gdmFsaWRhdGVMb2NhbGVEYXRhO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImdcIl0gPSB2YWxpZGF0ZUxvY2FsZXM7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IHZhbGlkYXRlTmdldHRleHRNc2dpZDtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJiXCJdID0gdmFsaWRhdGVOZ2V0dGV4dE51bWJlcjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJjXCJdID0gdmFsaWRhdGVOZ2V0dGV4dFBsdXJhbEZvcm1zO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRcIl0gPSB2YWxpZGF0ZUxhbmc7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3BsdXJhbF9mb3Jtc19kaXN0X21pbmltYWxfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3BsdXJhbF9mb3Jtc19kaXN0X21pbmltYWxfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX18pO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTG9jYWxlKGxvY2FsZSwgYXZhaWxMb2NhbGVzKSB7XG4gIGlmICh0cnVlKSB7XG4gICAgaWYgKCFhdmFpbExvY2FsZXNbbG9jYWxlXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICAgICAgICAgICAgICBMb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJyBpcyBub3QgZm91bmQgaW4gY29uZmlnLlxcbiAgICAgICAgICAgICAgICAgICAgdXNlTG9jYWxlcyBhY2NlcHRzIG9ubHkgZXhpc3RpbmcgbG9jYWxlcy4gVXNlIGFkZExvY2FsZSBmdW5jdGlvbiBiZWZvcmUuXFxuICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgbG9jYWxlczogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShhdmFpbExvY2FsZXMpKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTG9jYWxlQ29kZShsb2NhbGUpIHtcbiAgaWYgKHRydWUpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGxvY2FsZSBjb2RlIHRvIGJlIGEgc3RyaW5nIGJ1dCByZWNpZXZlZCBcIi5jb25jYXQoX3R5cGVvZihsb2NhbGUpLCBcIiBpbnN0dGVhZFwiKSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUxvY2FsZURhdGEoZGF0YSkge1xuICBpZiAodHJ1ZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHZhciBhZGRMb2NhbGVEb2MgPSAnaHR0cHM6Ly90dGFnLmpzLm9yZy9kb2NzL2xpYnJhcnktYXBpLmh0bWwjYWRkbG9jYWxlJztcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICAgICAgTG9jYWxlIGRhdGEgc2hvdWxkIG5vdCBiZSBlbXB0eS5cXG4gICAgICAgICAgICBzZWUgLSBcIi5jb25jYXQoYWRkTG9jYWxlRG9jLCBcIlxcbiAgICAgICAgICAgIFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhLmhlYWRlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgICAgIExvY2FsZSBkYXRhIHNob3VsZCBjb250YWluIGhlYWRlcnMgXFxcIlwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShkYXRhKSwgXCJcXFwiLlxcbiAgICAgICAgICAgIHNlZSAtIFwiKS5jb25jYXQoYWRkTG9jYWxlRG9jLCBcIlxcbiAgICAgICAgICAgIFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhLmhlYWRlcnNbJ3BsdXJhbC1mb3JtcyddICYmICFkYXRhLmhlYWRlcnNbJ1BsdXJhbC1Gb3JtcyddKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBMb2NhbGUgZGF0YS5oZWFkZXJzIHNob3VsZCBjb250YWluICdQbHVyYWwtRm9ybXMnIGF0dHJpYnV0ZSBcXFwiXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcIlxcXCIuXFxuICAgICAgICAgICAgc2VlIC0gXCIpLmNvbmNhdChhZGRMb2NhbGVEb2MsIFwiXFxuICAgICAgICAgICAgXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEudHJhbnNsYXRpb25zICYmICFkYXRhLmNvbnRleHRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBMb2NhbGUgZGF0YSBzaG91bGQgY29udGFpbiB0cmFuc2xhdGlvbnMgb3IgY29udGV4dHMgcHJvcGVydHkgXFxcIlwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShkYXRhKSwgXCJcXFwiLlxcbiAgICAgICAgICAgIHNlZSAtIFwiKS5jb25jYXQoYWRkTG9jYWxlRG9jLCBcIlxcbiAgICAgICAgICAgIFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHJhbnNsYXRpb25zICYmICFPYmplY3Qua2V5cyhkYXRhLnRyYW5zbGF0aW9ucykubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBMb2NhbGUgZGF0YS50cmFuc2xhdGlvbnMgc2hvdWxkIGhhdmUgYXQgbGVhc3QgMSBrZXlcXFwiXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcIlxcXCIuXFxuICAgICAgICAgICAgc2VlIC0gXCIpLmNvbmNhdChhZGRMb2NhbGVEb2MsIFwiXFxuICAgICAgICAgICAgXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jb250ZXh0cyAmJiAhT2JqZWN0LmtleXMoZGF0YS5jb250ZXh0cykubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBMb2NhbGUgZGF0YS5jb250ZXh0cyBzaG91bGQgaGF2ZSBhdCBsZWFzdCAxIGtleVxcXCJcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFwiXFxcIi5cXG4gICAgICAgICAgICBzZWUgLSBcIikuY29uY2F0KGFkZExvY2FsZURvYywgXCJcXG4gICAgICAgICAgICBcIikpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVMb2NhbGVzKGxvY2FsZXMsIGF2YWlsTG9jYWxlcykge1xuICBpZiAodHJ1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShsb2NhbGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMb2NhbGVzIGFjY2VwdHMgb25seSBhcnJheSBhcyB0aGUgZmlyc3QgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBsb2NhbGVzLmZvckVhY2goZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlTG9jYWxlKGxvY2FsZSwgYXZhaWxMb2NhbGVzKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVOZ2V0dGV4dE1zZ2lkKHN0cikge1xuICBpZiAodHJ1ZSkge1xuICAgIHZhciBuZ2V0dGV4dERvYyA9ICdodHRwczovL3R0YWcuanMub3JnL2RvY3MvbmdldHRleHQuaHRtbCc7XG5cbiAgICBpZiAoIShzdHIuaGFzT3duUHJvcGVydHkoJ19zdHJzJykgJiYgc3RyLmhhc093blByb3BlcnR5KCdfZXhwcnMnKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBmb3IgbmdldHRleHQgbXVzdCBiZSB0YWdnZWQgd2l0aCAnbXNnaWQnIHRhZy5cXG4gICAgICAgICAgICAgICAgc2VlIC0gXCIuY29uY2F0KG5nZXR0ZXh0RG9jLCBcIjtcXG4gICAgICAgICAgICAgICAgXCIpKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlTmdldHRleHROdW1iZXIobikge1xuICBpZiAodHJ1ZSkge1xuICAgIHZhciBuZ2V0dGV4dERvYyA9ICdodHRwczovL3R0YWcuanMub3JnL2RvY3MvbmdldHRleHQuaHRtbCc7XG5cbiAgICBpZiAoISh0eXBlb2YgbiA9PT0gJ251bWJlcicpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBhcmd1bWVudCB0byBuZ2V0dGV4dCAtICdcIi5jb25jYXQobiwgXCInIGV4cGVjdGVkIHRvIGJlIGEgbnVtYmVyLiBHb3QgJ1wiKS5jb25jYXQoX3R5cGVvZihuKSwgXCInIGluc3RlYWQuXFxuICAgICAgICAgICAgICAgIHNlZSAtIFwiKS5jb25jYXQobmdldHRleHREb2MpKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlTmdldHRleHRQbHVyYWxGb3JtcyhleHBlY3RlZEZvcm1zQ291bnQsIGFjdHVhbEZvcm1zQ291bnQpIHtcbiAgaWYgKHRydWUpIHtcbiAgICBpZiAoYWN0dWFsRm9ybXNDb3VudCAhPT0gZXhwZWN0ZWRGb3Jtc0NvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICBcIm5nZXR0ZXh0IGV4cGVjdHMgXCIuY29uY2F0KGV4cGVjdGVkRm9ybXNDb3VudCwgXCIgZm9yIHRoZSBjdXJyZW50IGRlZmF1bHQgbG9jYWxlLCBidXQgcmVjZWl2ZWQgLSBcIikuY29uY2F0KGFjdHVhbEZvcm1zQ291bnQsIFwiLlwiKSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUxhbmcobGFuZykge1xuICBpZiAodHJ1ZSkge1xuICAgIHZhciBsYW5ncyA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fW1wiZ2V0QXZhaWxMYW5nc1wiXSkoKS5qb2luKCcsJyk7XG5cbiAgICBpZiAoIV9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fW1wiaGFzTGFuZ1wiXSkobGFuZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gbGFuZyBjb2RlIC0gXCIuY29uY2F0KGxhbmcsIFwiLiBMYW5nIHNob3VsZCBiZSBvbmUgb2Y6IFwiKS5jb25jYXQobGFuZ3MsIFwiLlwiKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ29uZmlnO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX192YWxpZGF0aW9uX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fKTtcblxuXG5cbmZ1bmN0aW9uIENvbmZpZygpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgY29uZmlnID0ge1xuICAgIGxvY2FsZXM6IHt9LFxuICAgIGN1cnJlbnRMb2NhbGVzOiBbXSxcbiAgICBjdXJyZW50TG9jYWxlOiAnZW4nLFxuICAgIGRlZGVudDogdHJ1ZSxcbiAgICBkZWZhdWx0TGFuZzogJ2VuJ1xuICB9O1xuXG4gIHRoaXMuYWRkTG9jYWxlID0gZnVuY3Rpb24gKGxvY2FsZSwgbG9jYWxlRGF0YSkge1xuICAgIGlmICh0cnVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX192YWxpZGF0aW9uX19bXCJlXCIgLyogdmFsaWRhdGVMb2NhbGVDb2RlICovXSkobG9jYWxlKTtcbiAgICBpZiAodHJ1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdmFsaWRhdGlvbl9fW1wiZlwiIC8qIHZhbGlkYXRlTG9jYWxlRGF0YSAqL10pKGxvY2FsZURhdGEpO1xuXG4gICAgaWYgKGxvY2FsZURhdGEudHJhbnNsYXRpb25zKSB7XG4gICAgICBsb2NhbGVEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImdcIiAvKiB0cmFuc2Zvcm1UcmFuc2xhdGVPYmogKi9dKShsb2NhbGVEYXRhKTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZURhdGEuY29udGV4dHMpIHtcbiAgICAgIGxvY2FsZURhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiaFwiIC8qIHRyYW5zZm9ybUNvbXBhY3RPYmogKi9dKShsb2NhbGVEYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxvY2FsZSBkYXRhIGZvcm1hdCcpO1xuICAgIH1cblxuICAgIGNvbmZpZy5sb2NhbGVzW2xvY2FsZV0gPSBsb2NhbGVEYXRhO1xuICB9O1xuXG4gIHRoaXMuc2V0Q3VycmVudExvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICBjb25maWcuY3VycmVudExvY2FsZSA9IGxvY2FsZTtcbiAgfTtcblxuICB0aGlzLnNldERlZGVudCA9IGZ1bmN0aW9uIChkZWRlbnQpIHtcbiAgICBjb25maWcuZGVkZW50ID0gZGVkZW50O1xuICB9O1xuXG4gIHRoaXMuc2V0Q3VycmVudExvY2FsZXMgPSBmdW5jdGlvbiAobG9jYWxlcykge1xuICAgIGlmICh0cnVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX192YWxpZGF0aW9uX19bXCJnXCIgLyogdmFsaWRhdGVMb2NhbGVzICovXSkobG9jYWxlcywgX3RoaXMuZ2V0QXZhaWxMb2NhbGVzKCkpO1xuICAgIGNvbmZpZy5jdXJyZW50TG9jYWxlcyA9IGxvY2FsZXM7XG4gIH07XG5cbiAgdGhpcy5nZXRBdmFpbExvY2FsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5sb2NhbGVzO1xuICB9O1xuXG4gIHRoaXMuZ2V0Q3VycmVudExvY2FsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5jdXJyZW50TG9jYWxlcztcbiAgfTtcblxuICB0aGlzLmdldEN1cnJlbnRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5jdXJyZW50TG9jYWxlO1xuICB9O1xuXG4gIHRoaXMuaXNEZWRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5kZWRlbnQ7XG4gIH07XG5cbiAgdGhpcy5zZXREZWZhdWx0TGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgY29uZmlnLmRlZmF1bHRMYW5nID0gbGFuZztcbiAgfTtcblxuICB0aGlzLmdldERlZmF1bHRQbHVyYWxGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9wbHVyYWxfZm9ybXNfZGlzdF9taW5pbWFsX19bXCJnZXRQbHVyYWxGdW5jXCJdKShjb25maWcuZGVmYXVsdExhbmcpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RGVmYXVsdFBsdXJhbEZvcm1zQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfcGx1cmFsX2Zvcm1zX2Rpc3RfbWluaW1hbF9fW1wiZ2V0TlBsdXJhbHNcIl0pKGNvbmZpZy5kZWZhdWx0TGFuZyk7XG4gIH07XG5cbiAgdGhpcy5nZXRDdXJyZW50TG9jYWxlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29uZmlnLmxvY2FsZXNbY29uZmlnLmN1cnJlbnRMb2NhbGVdLmhlYWRlcnM7XG4gIH07XG59XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJ0XCJdID0gdDtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJqdFwiXSA9IGp0O1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcIm1zZ2lkXCJdID0gbXNnaWQ7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZ2V0dGV4dFwiXSA9IGdldHRleHQ7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiX1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF87IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcIm5nZXR0ZXh0XCJdID0gbmdldHRleHQ7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYWRkTG9jYWxlXCJdID0gYWRkTG9jYWxlO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcInVzZUxvY2FsZVwiXSA9IHVzZUxvY2FsZTtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJzZXREZWRlbnRcIl0gPSBzZXREZWRlbnQ7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1widXNlTG9jYWxlc1wiXSA9IHVzZUxvY2FsZXM7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wic2V0RGVmYXVsdExhbmdcIl0gPSBzZXREZWZhdWx0TGFuZztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJjXCJdID0gYztcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdmFsaWRhdGlvbl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbmZpZ19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXG5cbnZhciBjb25mID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29uZmlnX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcblxuZnVuY3Rpb24gQ29udGV4dChjb250ZXh0KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpbmcgdHlwZSBpcyBleHBlY3RlZCBhcyBhIGZpcnN0ICcgKyAnYXJndW1lbnQgdG8gYygpIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTtcbn1cblxudmFyIGdldFRyYW5zQ29udGV4dCA9IGZ1bmN0aW9uIGdldFRyYW5zQ29udGV4dChvYmopIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIENvbnRleHQpIHtcbiAgICByZXR1cm4gb2JqLmdldENvbnRleHQoKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG5cbmZ1bmN0aW9uIGlzRnV6enkodHJhbnNsYXRpb25PYmopIHtcbiAgcmV0dXJuIHRyYW5zbGF0aW9uT2JqICYmIHRyYW5zbGF0aW9uT2JqLmNvbW1lbnRzICYmIHRyYW5zbGF0aW9uT2JqLmNvbW1lbnRzLmZsYWcgPT09ICdmdXp6eSc7XG59XG5cbmZ1bmN0aW9uIGhhc1RyYW5zbGF0aW9ucyhtc2dzdHIpIHtcbiAgaWYgKCFtc2dzdHIpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZ3N0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmICghbXNnc3RyW2ldLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRUcmFuc09iaihsb2NhbGUsIHN0ciwgY3R4KSB7XG4gIHZhciBsb2NhbGVzID0gY29uZi5nZXRBdmFpbExvY2FsZXMoKTtcbiAgdmFyIGxvY2FsZURhdGEgPSBsb2NhbGVzW2xvY2FsZV07XG4gIGlmICghbG9jYWxlRGF0YSkgcmV0dXJuIG51bGw7IC8vIHZlcmJvc2UgZm9ybWF0XG5cbiAgaWYgKGxvY2FsZURhdGEudHJhbnNsYXRpb25zKSB7XG4gICAgdmFyIHRyYW5zbGF0aW9ucyA9IGxvY2FsZURhdGEudHJhbnNsYXRpb25zW2N0eF0gfHwgbG9jYWxlRGF0YS50cmFuc2xhdGlvbnNbJyddO1xuICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9ucyAmJiB0cmFuc2xhdGlvbnNbc3RyXTtcblxuICAgIGlmICh0cmFuc2xhdGlvbiAmJiAhaXNGdXp6eSh0cmFuc2xhdGlvbikgJiYgaGFzVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uLm1zZ3N0cikpIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbi5tc2dzdHI7XG4gICAgfVxuICB9IC8vIGNvbXBhY3QgZm9ybWF0XG5cblxuICBpZiAobG9jYWxlRGF0YS5jb250ZXh0cykge1xuICAgIHZhciBfdHJhbnNsYXRpb25zID0gbG9jYWxlRGF0YS5jb250ZXh0c1tjdHhdIHx8IGxvY2FsZURhdGEuY29udGV4dHNbJyddO1xuXG4gICAgdmFyIF90cmFuc2xhdGlvbiA9IF90cmFuc2xhdGlvbnMgJiYgX3RyYW5zbGF0aW9uc1tzdHJdO1xuXG4gICAgaWYgKF90cmFuc2xhdGlvbiAmJiBoYXNUcmFuc2xhdGlvbnMoX3RyYW5zbGF0aW9uKSkge1xuICAgICAgcmV0dXJuIF90cmFuc2xhdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZmluZFRyYW5zbGF0aW9uKHN0ciwgY3R4KSB7XG4gIHZhciBsb2NhbGVzID0gY29uZi5nZXRDdXJyZW50TG9jYWxlcygpO1xuXG4gIGlmIChsb2NhbGVzLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRyYW5zbGF0aW9uID0gZmluZFRyYW5zT2JqKGxvY2FsZXNbaV0sIHN0ciwgY3R4KTtcblxuICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIGNvbmYuc2V0Q3VycmVudExvY2FsZShsb2NhbGVzW2ldKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaW5kVHJhbnNPYmooY29uZi5nZXRDdXJyZW50TG9jYWxlKCksIHN0ciwgY3R4KTtcbn1cblxudmFyIG1heWJlRGVkZW50ID0gZnVuY3Rpb24gbWF5YmVEZWRlbnQoc3RyKSB7XG4gIHJldHVybiBjb25mLmlzRGVkZW50KCkgPyBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGRlZGVudFN0ciAqL10pKHN0cikgOiBzdHI7XG59O1xuXG5mdW5jdGlvbiB0KHN0cmluZ3MpIHtcbiAgdmFyIHJlc3VsdCA9IHN0cmluZ3M7XG5cbiAgaWYgKHN0cmluZ3MgJiYgc3RyaW5ncy5yZWR1Y2UpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZXhwcnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZXhwcnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBpZCA9IG1heWJlRGVkZW50KF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogZ2V0TXNnaWQgKi9dKShzdHJpbmdzLCBleHBycykpO1xuICAgIHZhciBjb250ZXh0ID0gZ2V0VHJhbnNDb250ZXh0KHRoaXMpO1xuICAgIHZhciB0cmFucyA9IGZpbmRUcmFuc2xhdGlvbihpZCwgY29udGV4dCk7XG4gICAgcmVzdWx0ID0gdHJhbnMgPyBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIG1zZ2lkMk9yaWcgKi9dKSh0cmFuc1swXSwgZXhwcnMpIDogX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImRcIiAvKiBidWlsZFN0ciAqL10pKHN0cmluZ3MsIGV4cHJzKTtcbiAgfVxuXG4gIHJldHVybiBtYXliZURlZGVudChyZXN1bHQpO1xufVxudmFyIHNlcGFyYXRvciA9IC8oXFwke1xccypcXGQrXFxzKn0pL2c7XG52YXIgc2xvdElkUmVnZXhwID0gL1xcJHtcXHMqKFxcZCspXFxzKn0vO1xuZnVuY3Rpb24ganQoc3RyaW5ncykge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV4cHJzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBleHByc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGlmIChzdHJpbmdzICYmIHN0cmluZ3MucmVkdWNlKSB7XG4gICAgdmFyIGlkID0gbWF5YmVEZWRlbnQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBnZXRNc2dpZCAqL10pKHN0cmluZ3MsIGV4cHJzKSk7XG4gICAgdmFyIGNvbnRleHQgPSBnZXRUcmFuc0NvbnRleHQodGhpcyk7XG4gICAgdmFyIHRyYW5zID0gZmluZFRyYW5zbGF0aW9uKGlkLCBjb250ZXh0KTtcbiAgICBpZiAoIXRyYW5zKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImVcIiAvKiBidWlsZEFyciAqL10pKHN0cmluZ3MsIGV4cHJzKTsgLy8gc3BsaXRzIHN0cmluZyAmIGNhcHR1cmluZyBncm91cCBpbnRvIHRva2Vuc1xuICAgIC8vXG5cbiAgICB2YXIgdHJhbnNsYXRlZFRva2VucyA9IHRyYW5zWzBdLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRUb2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgdmFyIHNsb3RJZE1hdGNoID0gdG9rZW4ubWF0Y2goc2xvdElkUmVnZXhwKTsgLy8gc2xvdElkTWF0Y2ggaXMgbm90IG51bGwgb25seSB3aGVuIHRoZSB0b2tlbiBpcyBhIHZhcmlhYmxlIHNsb3QgKCR7eHh9KVxuXG4gICAgICByZXR1cm4gc2xvdElkTWF0Y2ggPyBleHByc1src2xvdElkTWF0Y2hbMV1dIDogdG9rZW47XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5ncztcbn1cbmZ1bmN0aW9uIG1zZ2lkKHN0cmluZ3MpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LXdyYXBwZXJzICovXG4gIGlmIChzdHJpbmdzICYmIHN0cmluZ3MucmVkdWNlKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBleHBycyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBleHByc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IFN0cmluZyhfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiZFwiIC8qIGJ1aWxkU3RyICovXSkoc3RyaW5ncywgZXhwcnMpKTtcbiAgICByZXN1bHQuX3N0cnMgPSBzdHJpbmdzO1xuICAgIHJlc3VsdC5fZXhwcnMgPSBleHBycztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ3M7XG59XG5mdW5jdGlvbiBnZXR0ZXh0KGlkKSB7XG4gIHZhciBjb250ZXh0ID0gZ2V0VHJhbnNDb250ZXh0KHRoaXMpO1xuICB2YXIgdHJhbnMgPSBmaW5kVHJhbnNsYXRpb24oaWQsIGNvbnRleHQpO1xuICByZXR1cm4gdHJhbnMgPyB0cmFuc1swXSA6IGlkO1xufVxudmFyIF8gPSBnZXR0ZXh0O1xuZnVuY3Rpb24gbmdldHRleHQoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGlmICh0cnVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX192YWxpZGF0aW9uX19bXCJhXCIgLyogdmFsaWRhdGVOZ2V0dGV4dE1zZ2lkICovXSkoYXJnc1swXSk7XG4gIHZhciBpZCA9IG1heWJlRGVkZW50KF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogZ2V0TXNnaWQgKi9dKShhcmdzWzBdLl9zdHJzLCBhcmdzWzBdLl9leHBycykpO1xuICB2YXIgbiA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgaWYgKHRydWUpIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3ZhbGlkYXRpb25fX1tcImJcIiAvKiB2YWxpZGF0ZU5nZXR0ZXh0TnVtYmVyICovXSkobik7XG4gIHZhciBmb3JtcyA9IGFyZ3Muc2xpY2UoMSwgLTEpO1xuICBmb3Jtcy51bnNoaWZ0KGFyZ3NbMF0udG9TdHJpbmcoKSk7XG5cbiAgaWYgKHRydWUpIHtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX192YWxpZGF0aW9uX19bXCJjXCIgLyogdmFsaWRhdGVOZ2V0dGV4dFBsdXJhbEZvcm1zICovXSkoY29uZi5nZXREZWZhdWx0UGx1cmFsRm9ybXNDb3VudCgpLCBmb3Jtcy5sZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zID0gZmluZFRyYW5zbGF0aW9uKGlkLCBnZXRUcmFuc0NvbnRleHQodGhpcykpO1xuXG4gIGlmICh0cmFucykge1xuICAgIHZhciBfcGx1cmFsRm4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiZlwiIC8qIGdldFBsdXJhbEZuRm9yVHJhbnMgKi9dKShjb25mKTtcblxuICAgIHJldHVybiBtYXliZURlZGVudChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIG1zZ2lkMk9yaWcgKi9dKShfcGx1cmFsRm4obiwgdHJhbnMpLCBhcmdzWzBdLl9leHBycykpO1xuICB9XG5cbiAgdmFyIHBsdXJhbEZuID0gY29uZi5nZXREZWZhdWx0UGx1cmFsRm4oKTtcbiAgcmV0dXJuIG1heWJlRGVkZW50KHBsdXJhbEZuKG4sIGZvcm1zKSk7XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUobG9jYWxlLCBkYXRhKSB7XG4gIGNvbmYuYWRkTG9jYWxlKGxvY2FsZSwgZGF0YSk7XG59XG5mdW5jdGlvbiB1c2VMb2NhbGUobG9jYWxlKSB7XG4gIGNvbmYuc2V0Q3VycmVudExvY2FsZShsb2NhbGUpO1xufVxuZnVuY3Rpb24gc2V0RGVkZW50KHZhbHVlKSB7XG4gIGNvbmYuc2V0RGVkZW50KEJvb2xlYW4odmFsdWUpKTtcbn1cbmZ1bmN0aW9uIHVzZUxvY2FsZXMobG9jYWxlcykge1xuICBjb25mLnNldEN1cnJlbnRMb2NhbGVzKGxvY2FsZXMpO1xufVxuZnVuY3Rpb24gc2V0RGVmYXVsdExhbmcobGFuZykge1xuICBpZiAodHJ1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdmFsaWRhdGlvbl9fW1wiZFwiIC8qIHZhbGlkYXRlTGFuZyAqL10pKGxhbmcpO1xuICBjb25mLnNldERlZmF1bHRMYW5nKGxhbmcpO1xufVxuZnVuY3Rpb24gYyhjb250ZXh0KSB7XG4gIHZhciBjdHggPSBuZXcgQ29udGV4dChjb250ZXh0KTtcbiAgcmV0dXJuIHtcbiAgICB0OiB0LmJpbmQoY3R4KSxcbiAgICBqdDoganQuYmluZChjdHgpLFxuICAgIGdldHRleHQ6IGdldHRleHQuYmluZChjdHgpLFxuICAgIG5nZXR0ZXh0OiBuZ2V0dGV4dC5iaW5kKGN0eClcbiAgfTtcbn1cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIGRlZGVudChzdHJpbmdzKSB7XG5cbiAgdmFyIHJhdyA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgLy8gZGVkZW50IGNhbiBiZSB1c2VkIGFzIGEgcGxhaW4gZnVuY3Rpb25cbiAgICByYXcgPSBbc3RyaW5nc107XG4gIH0gZWxzZSB7XG4gICAgcmF3ID0gc3RyaW5ncy5yYXc7XG4gIH1cblxuICAvLyBmaXJzdCwgcGVyZm9ybSBpbnRlcnBvbGF0aW9uXG4gIHZhciByZXN1bHQgPSBcIlwiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCArPSByYXdbaV0uXG4gICAgLy8gam9pbiBsaW5lcyB3aGVuIHRoZXJlIGlzIGEgc3VwcHJlc3NlZCBuZXdsaW5lXG4gICAgcmVwbGFjZSgvXFxcXFxcblsgXFx0XSovZywgXCJcIikuXG5cbiAgICAvLyBoYW5kbGUgZXNjYXBlZCBiYWNrdGlja3NcbiAgICByZXBsYWNlKC9cXFxcYC9nLCBcImBcIik7XG5cbiAgICBpZiAoaSA8IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICByZXN1bHQgKz0gYXJndW1lbnRzLmxlbmd0aCA8PSBpICsgMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpICsgMV07XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHN0cmlwIGluZGVudGF0aW9uXG4gIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdChcIlxcblwiKTtcbiAgdmFyIG1pbmRlbnQgPSBudWxsO1xuICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgdmFyIG0gPSBsLm1hdGNoKC9eKFxccyspXFxTKy8pO1xuICAgIGlmIChtKSB7XG4gICAgICB2YXIgaW5kZW50ID0gbVsxXS5sZW5ndGg7XG4gICAgICBpZiAoIW1pbmRlbnQpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgZmlyc3QgaW5kZW50ZWQgbGluZVxuICAgICAgICBtaW5kZW50ID0gaW5kZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluZGVudCA9IE1hdGgubWluKG1pbmRlbnQsIGluZGVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAobWluZGVudCAhPT0gbnVsbCkge1xuICAgIHJlc3VsdCA9IGxpbmVzLm1hcChmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGxbMF0gPT09IFwiIFwiID8gbC5zbGljZShtaW5kZW50KSA6IGw7XG4gICAgfSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIC8vIGRlZGVudCBlYXRzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UgdG9vXG4gIHJlc3VsdCA9IHJlc3VsdC50cmltKCk7XG5cbiAgLy8gaGFuZGxlIGVzY2FwZWQgbmV3bGluZXMgYXQgdGhlIGVuZCB0byBlbnN1cmUgdGhleSBkb24ndCBnZXQgc3RyaXBwZWQgdG9vXG4gIHJldHVybiByZXN1bHQucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIik7XG59XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZGVkZW50O1xufVxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvdHRhZy5taW4uanMnKTtcbn0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvdHRhZy5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==