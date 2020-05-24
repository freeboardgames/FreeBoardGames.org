module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/play/[gameCode].js": 0
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/components/App/FreeBoardGamesBar.tsx":
/*!**************************************************!*\
  !*** ./src/components/App/FreeBoardGamesBar.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/fbg_logo_white_48.png */ "./src/components/App/media/fbg_logo_white_48.png");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_2dv2upfyf8() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/FreeBoardGamesBar.tsx";
  var hash = "afd4f59865d8ea972d1f1d12bb1ed1dfc590fb0c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/FreeBoardGamesBar.tsx",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 26
        },
        end: {
          line: 14,
          column: 63
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "2": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 23,
          column: 8
        }
      },
      "3": {
        start: {
          line: 26,
          column: 21
        },
        end: {
          line: 26,
          column: 85
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 60,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 21
          },
          end: {
            line: 26,
            column: 85
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 67
          },
          end: {
            line: 26,
            column: 75
          }
        }, {
          start: {
            line: 26,
            column: 78
          },
          end: {
            line: 26,
            column: 85
          }
        }],
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "afd4f59865d8ea972d1f1d12bb1ed1dfc590fb0c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2dv2upfyf8 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2dv2upfyf8();







class FreeBoardGamesBar extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  render() {
    cov_2dv2upfyf8().f[0]++;
    const isProdChannel = (cov_2dv2upfyf8().s[0]++, false);
    let appBarStyle;
    let versionInfo;
    cov_2dv2upfyf8().s[1]++;

    if (!isProdChannel) {
      cov_2dv2upfyf8().b[0][0]++;
      cov_2dv2upfyf8().s[2]++;
      versionInfo = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        "data-test-id": "gitrev",
        variant: "h6",
        style: {
          color: 'white',
          marginLeft: 'auto'
        }
      }, "fdb7a6f");
    } else {
      cov_2dv2upfyf8().b[0][1]++;
    }

    const maxWidth = (cov_2dv2upfyf8().s[3]++, this.props.FEATURE_FLAG_readyForDesktopView ? (cov_2dv2upfyf8().b[1][0]++, '1200px') : (cov_2dv2upfyf8().b[1][1]++, '500px'));
    cov_2dv2upfyf8().s[4]++;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "sticky",
      style: appBarStyle
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/"
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("img", {
      style: {
        marginRight: '8px',
        height: '48px'
      },
      src: _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "FbG"
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      component: "h1",
      variant: "h6",
      style: {
        color: 'white'
      }
    }, "FreeBoardGames.org"), versionInfo))))), __jsx("div", {
      style: {
        maxWidth,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FreeBoardGamesBar);

/***/ }),

/***/ "./src/components/App/Game/GameCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/App/Game/GameCard.tsx ***!
  \**********************************************/
/*! exports provided: GameCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCard", function() { return GameCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_9y2z4ug2t() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameCard.tsx";
  var hash = "2ffd1282d54655a5409d00c196866dbec52b0d84";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameCard.tsx",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 25
        },
        end: {
          line: 14,
          column: 29
        }
      },
      "1": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "2": {
        start: {
          line: 16,
          column: 46
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "3": {
        start: {
          line: 25,
          column: 48
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "4": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "5": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 88
        }
      },
      "6": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 40
        }
      },
      "7": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 51,
          column: 8
        }
      },
      "8": {
        start: {
          line: 53,
          column: 28
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "9": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 88,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }],
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 53,
            column: 28
          },
          end: {
            line: 61,
            column: 5
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 56,
            column: 19
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 60,
            column: 19
          }
        }],
        line: 53
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2ffd1282d54655a5409d00c196866dbec52b0d84"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_9y2z4ug2t = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_9y2z4ug2t();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class GameCard extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  render() {
    cov_9y2z4ug2t().f[0]++;
    let navigateButton = (cov_9y2z4ug2t().s[0]++, null);
    const image = (cov_9y2z4ug2t().s[1]++, this.props.game.imageURL);
    const mainDivStyle = (cov_9y2z4ug2t().s[2]++, {
      position: 'relative',
      height: '250px',
      width: '100%',
      backgroundPosition: 'left center',
      backgroundColor: image[0],
      backgroundImage: `url(${image.src})`,
      backgroundSize: 'cover'
    });
    const baseBadgeStyle = (cov_9y2z4ug2t().s[3]++, {
      position: 'absolute',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: '0px 8px',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: 'black',
      textDecoration: 'none'
    });
    cov_9y2z4ug2t().s[4]++;

    if (this.props.isLink) {
      cov_9y2z4ug2t().b[0][0]++;
      cov_9y2z4ug2t().s[5]++;
      mainDivStyle.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
      cov_9y2z4ug2t().s[6]++;
      mainDivStyle.borderRadius = '8px';
      cov_9y2z4ug2t().s[7]++;
      navigateButton = __jsx("div", {
        style: _objectSpread({}, baseBadgeStyle, {
          bottom: '12px',
          right: '8px',
          borderRadius: '32px',
          padding: '0'
        })
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {
        "aria-label": "Next"
      }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
    } else {
      cov_9y2z4ug2t().b[0][1]++;
    }

    const gameNameHeading = (cov_9y2z4ug2t().s[8]++, this.props.isLink ? (cov_9y2z4ug2t().b[1][0]++, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutterBottom: false,
      variant: "h4",
      component: "h2",
      style: {
        fontWeight: 300
      }
    }, "Play ", this.props.game.name)) : (cov_9y2z4ug2t().b[1][1]++, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutterBottom: false,
      variant: "h4",
      component: "h1",
      style: {
        fontWeight: 300
      }
    }, this.props.game.name)));
    cov_9y2z4ug2t().s[9]++;
    return __jsx("div", {
      style: mainDivStyle,
      "data-test-id": `gamecard-${this.props.game.code}`
    }, __jsx("div", {
      style: _objectSpread({}, baseBadgeStyle, {
        top: '12px',
        left: '8px',
        paddingTop: '4px',
        maxWidth: '500px'
      })
    }, gameNameHeading), __jsx("div", {
      style: _objectSpread({}, baseBadgeStyle, {
        bottom: '12px',
        left: '8px'
      })
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutterBottom: false,
      variant: "overline",
      component: "h5"
    }, this.props.game.description)), navigateButton);
  }

}

/***/ }),

/***/ "./src/components/App/Game/GameInstructionsText.tsx":
/*!**********************************************************!*\
  !*** ./src/components/App/Game/GameInstructionsText.tsx ***!
  \**********************************************************/
/*! exports provided: GameInstructionsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInstructionsText", function() { return GameInstructionsText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_2qmc82fy72() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameInstructionsText.tsx";
  var hash = "e984983b08ce4ee534f12fbab5bd7ae9730662da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameInstructionsText.tsx",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 13,
          column: 56
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 18
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 14,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 14,
            column: 21
          }
        }, {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 14,
            column: 43
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e984983b08ce4ee534f12fbab5bd7ae9730662da"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2qmc82fy72 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2qmc82fy72();




class GameInstructionsText extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  render() {
    cov_2qmc82fy72().f[0]++;
    const instructions = (cov_2qmc82fy72().s[0]++, this.props.gameDef.instructions);
    cov_2qmc82fy72().s[1]++;

    if ((cov_2qmc82fy72().b[1][0]++, !instructions) || (cov_2qmc82fy72().b[1][1]++, !instructions.text)) {
      cov_2qmc82fy72().b[0][0]++;
      cov_2qmc82fy72().s[2]++;
      return null;
    } else {
      cov_2qmc82fy72().b[0][1]++;
    }

    cov_2qmc82fy72().s[3]++;
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginBottom: 16
      }
    }, __jsx("div", {
      style: {
        padding: '0 8px'
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "body1",
      component: "div"
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
      linkTarget: "_blank",
      source: instructions.text
    }))));
  }

}

/***/ }),

/***/ "./src/components/App/Game/GameInstructionsVideo.tsx":
/*!***********************************************************!*\
  !*** ./src/components/App/Game/GameInstructionsVideo.tsx ***!
  \***********************************************************/
/*! exports provided: GameInstructionsVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInstructionsVideo", function() { return GameInstructionsVideo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_2ju62awrz2() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameInstructionsVideo.tsx";
  var hash = "f5bfe34d15e275fc418d8f16bf9c4d5c8b53d61b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameInstructionsVideo.tsx",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 56
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 18
        }
      },
      "3": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 39,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 21
          }
        }, {
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 12,
            column: 46
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f5bfe34d15e275fc418d8f16bf9c4d5c8b53d61b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2ju62awrz2 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2ju62awrz2();


class GameInstructionsVideo extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  render() {
    cov_2ju62awrz2().f[0]++;
    const instructions = (cov_2ju62awrz2().s[0]++, this.props.gameDef.instructions);
    cov_2ju62awrz2().s[1]++;

    if ((cov_2ju62awrz2().b[1][0]++, !instructions) || (cov_2ju62awrz2().b[1][1]++, !instructions.videoId)) {
      cov_2ju62awrz2().b[0][0]++;
      cov_2ju62awrz2().s[2]++;
      return null;
    } else {
      cov_2ju62awrz2().b[0][1]++;
    }

    cov_2ju62awrz2().s[3]++;
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginBottom: 16,
        maxWidth: '1200px'
      }
    }, __jsx("div", {
      style: {
        position: 'relative',
        maxWidth: '1200px',
        maxHeight: '360px',
        paddingBottom: '56.25%',
        paddingTop: 30,
        height: 0,
        overflow: 'hidden'
      }
    }, __jsx("iframe", {
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
      src: `https://www.youtube.com/embed/${instructions.videoId}`,
      allowFullScreen: true,
      frameBorder: "0"
    })));
  }

}

/***/ }),

/***/ "./src/components/App/Game/GameModePicker.tsx":
/*!****************************************************!*\
  !*** ./src/components/App/Game/GameModePicker.tsx ***!
  \****************************************************/
/*! exports provided: GameMode, GameModePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMode", function() { return GameMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModePicker", function() { return GameModePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Android */ "@material-ui/icons/Android");
/* harmony import */ var _material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Wifi */ "@material-ui/icons/Wifi");
/* harmony import */ var _material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Lobby/LobbyService */ "./src/components/App/Lobby/LobbyService.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_29rc35ldig() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameModePicker.tsx";
  var hash = "6ceffb234a0eb65ba9f0e9cbd689f19dc9122bd3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameModePicker.tsx",
    statementMap: {
      "0": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 17
        }
      },
      "1": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 65,
          column: 6
        }
      },
      "2": {
        start: {
          line: 69,
          column: 18
        },
        end: {
          line: 69,
          column: 20
        }
      },
      "3": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 72,
          column: 5
        }
      },
      "4": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 38
        }
      },
      "5": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 80,
          column: 6
        }
      },
      "6": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 103,
          column: 5
        }
      },
      "7": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 32
        }
      },
      "8": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 67
        }
      },
      "9": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 31
        }
      },
      "10": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 14
        }
      },
      "11": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 31
        }
      },
      "12": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 95,
          column: 77
        }
      },
      "13": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 29
        }
      },
      "14": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 14
        }
      },
      "15": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 32
        }
      },
      "16": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 100,
          column: 71
        }
      },
      "17": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 101,
          column: 28
        }
      },
      "18": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 102,
          column: 14
        }
      },
      "19": {
        start: {
          line: 104,
          column: 22
        },
        end: {
          line: 104,
          column: 46
        }
      },
      "20": {
        start: {
          line: 105,
          column: 18
        },
        end: {
          line: 105,
          column: 24
        }
      },
      "21": {
        start: {
          line: 106,
          column: 16
        },
        end: {
          line: 106,
          column: 25
        }
      },
      "22": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 112,
          column: 5
        }
      },
      "23": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 24
        }
      },
      "24": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 26
        }
      },
      "25": {
        start: {
          line: 110,
          column: 11
        },
        end: {
          line: 112,
          column: 5
        }
      },
      "26": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 26
        }
      },
      "27": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 145,
          column: 5
        }
      },
      "28": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 127,
          column: 8
        }
      },
      "29": {
        start: {
          line: 129,
          column: 23
        },
        end: {
          line: 129,
          column: 42
        }
      },
      "30": {
        start: {
          line: 130,
          column: 23
        },
        end: {
          line: 130,
          column: 34
        }
      },
      "31": {
        start: {
          line: 131,
          column: 17
        },
        end: {
          line: 131,
          column: 28
        }
      },
      "32": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 144,
          column: 8
        }
      },
      "33": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 157,
          column: 6
        }
      },
      "34": {
        start: {
          line: 160,
          column: 20
        },
        end: {
          line: 176,
          column: 3
        }
      },
      "35": {
        start: {
          line: 160,
          column: 45
        },
        end: {
          line: 176,
          column: 3
        }
      },
      "36": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 63
        }
      },
      "37": {
        start: {
          line: 163,
          column: 21
        },
        end: {
          line: 163,
          column: 44
        }
      },
      "38": {
        start: {
          line: 164,
          column: 23
        },
        end: {
          line: 164,
          column: 52
        }
      },
      "39": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 175,
          column: 6
        }
      },
      "40": {
        start: {
          line: 169,
          column: 8
        },
        end: {
          line: 169,
          column: 54
        }
      },
      "41": {
        start: {
          line: 173,
          column: 8
        },
        end: {
          line: 173,
          column: 91
        }
      },
      "42": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 179,
          column: 57
        }
      },
      "43": {
        start: {
          line: 183,
          column: 4
        },
        end: {
          line: 187,
          column: 5
        }
      },
      "44": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 186,
          column: 7
        }
      },
      "45": {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 185,
          column: 112
        }
      },
      "46": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "47": {
        start: {
          line: 189,
          column: 24
        },
        end: {
          line: 189,
          column: 38
        }
      },
      "48": {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 196,
          column: 7
        }
      },
      "49": {
        start: {
          line: 191,
          column: 23
        },
        end: {
          line: 191,
          column: 60
        }
      },
      "50": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 54
        }
      },
      "51": {
        start: {
          line: 193,
          column: 13
        },
        end: {
          line: 196,
          column: 7
        }
      },
      "52": {
        start: {
          line: 194,
          column: 25
        },
        end: {
          line: 194,
          column: 64
        }
      },
      "53": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 58
        }
      },
      "54": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 198,
          column: 16
        }
      },
      "55": {
        start: {
          line: 202,
          column: 20
        },
        end: {
          line: 202,
          column: 22
        }
      },
      "56": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 209,
          column: 5
        }
      },
      "57": {
        start: {
          line: 203,
          column: 17
        },
        end: {
          line: 203,
          column: 27
        }
      },
      "58": {
        start: {
          line: 204,
          column: 6
        },
        end: {
          line: 208,
          column: 8
        }
      },
      "59": {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 217,
          column: 6
        }
      },
      "60": {
        start: {
          line: 220,
          column: 28
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "61": {
        start: {
          line: 221,
          column: 43
        },
        end: {
          line: 226,
          column: 5
        }
      },
      "62": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 227,
          column: 67
        }
      },
      "63": {
        start: {
          line: 228,
          column: 4
        },
        end: {
          line: 228,
          column: 28
        }
      },
      "64": {
        start: {
          line: 232,
          column: 18
        },
        end: {
          line: 232,
          column: 47
        }
      },
      "65": {
        start: {
          line: 233,
          column: 4
        },
        end: {
          line: 246,
          column: 6
        }
      },
      "66": {
        start: {
          line: 249,
          column: 24
        },
        end: {
          line: 258,
          column: 3
        }
      },
      "67": {
        start: {
          line: 249,
          column: 44
        },
        end: {
          line: 258,
          column: 3
        }
      },
      "68": {
        start: {
          line: 250,
          column: 43
        },
        end: {
          line: 255,
          column: 5
        }
      },
      "69": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 256,
          column: 37
        }
      },
      "70": {
        start: {
          line: 257,
          column: 4
        },
        end: {
          line: 257,
          column: 28
        }
      },
      "71": {
        start: {
          line: 261,
          column: 32
        },
        end: {
          line: 273,
          column: 6
        }
      },
      "72": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 262,
          column: 12
        }
      },
      "73": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 272,
          column: 8
        }
      },
      "74": {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 286,
          column: 6
        }
      },
      "75": {
        start: {
          line: 290,
          column: 30
        },
        end: {
          line: 290,
          column: 61
        }
      },
      "76": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 291,
          column: 55
        }
      },
      "77": {
        start: {
          line: 294,
          column: 26
        },
        end: {
          line: 303,
          column: 3
        }
      },
      "78": {
        start: {
          line: 294,
          column: 58
        },
        end: {
          line: 303,
          column: 3
        }
      },
      "79": {
        start: {
          line: 295,
          column: 43
        },
        end: {
          line: 300,
          column: 5
        }
      },
      "80": {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 301,
          column: 37
        }
      },
      "81": {
        start: {
          line: 302,
          column: 4
        },
        end: {
          line: 302,
          column: 28
        }
      },
      "82": {
        start: {
          line: 306,
          column: 17
        },
        end: {
          line: 306,
          column: 26
        }
      },
      "83": {
        start: {
          line: 308,
          column: 4
        },
        end: {
          line: 329,
          column: 5
        }
      },
      "84": {
        start: {
          line: 310,
          column: 8
        },
        end: {
          line: 319,
          column: 9
        }
      },
      "85": {
        start: {
          line: 311,
          column: 10
        },
        end: {
          line: 314,
          column: 12
        }
      },
      "86": {
        start: {
          line: 315,
          column: 10
        },
        end: {
          line: 315,
          column: 16
        }
      },
      "87": {
        start: {
          line: 317,
          column: 10
        },
        end: {
          line: 317,
          column: 89
        }
      },
      "88": {
        start: {
          line: 318,
          column: 10
        },
        end: {
          line: 318,
          column: 16
        }
      },
      "89": {
        start: {
          line: 321,
          column: 8
        },
        end: {
          line: 321,
          column: 90
        }
      },
      "90": {
        start: {
          line: 322,
          column: 8
        },
        end: {
          line: 322,
          column: 14
        }
      },
      "91": {
        start: {
          line: 324,
          column: 8
        },
        end: {
          line: 327,
          column: 10
        }
      },
      "92": {
        start: {
          line: 328,
          column: 8
        },
        end: {
          line: 328,
          column: 14
        }
      },
      "93": {
        start: {
          line: 330,
          column: 4
        },
        end: {
          line: 330,
          column: 21
        }
      },
      "94": {
        start: {
          line: 333,
          column: 21
        },
        end: {
          line: 333,
          column: 52
        }
      },
      "95": {
        start: {
          line: 334,
          column: 4
        },
        end: {
          line: 334,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 43
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 59
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 11
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 68
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        loc: {
          start: {
            line: 83,
            column: 32
          },
          end: {
            line: 158,
            column: 3
          }
        },
        line: 83
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 160,
            column: 20
          },
          end: {
            line: 160,
            column: 21
          }
        },
        loc: {
          start: {
            line: 160,
            column: 45
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 160
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 160,
            column: 45
          },
          end: {
            line: 160,
            column: 46
          }
        },
        loc: {
          start: {
            line: 160,
            column: 51
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 160
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 167,
            column: 7
          }
        },
        loc: {
          start: {
            line: 167,
            column: 18
          },
          end: {
            line: 170,
            column: 7
          }
        },
        line: 167
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 7
          }
        },
        loc: {
          start: {
            line: 171,
            column: 12
          },
          end: {
            line: 174,
            column: 7
          }
        },
        line: 171
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        loc: {
          start: {
            line: 178,
            column: 50
          },
          end: {
            line: 180,
            column: 3
          }
        },
        line: 178
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 182,
            column: 2
          },
          end: {
            line: 182,
            column: 3
          }
        },
        loc: {
          start: {
            line: 182,
            column: 37
          },
          end: {
            line: 199,
            column: 3
          }
        },
        line: 182
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 201,
            column: 2
          },
          end: {
            line: 201,
            column: 3
          }
        },
        loc: {
          start: {
            line: 201,
            column: 87
          },
          end: {
            line: 218,
            column: 3
          }
        },
        line: 201
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 220,
            column: 28
          },
          end: {
            line: 220,
            column: 29
          }
        },
        loc: {
          start: {
            line: 220,
            column: 44
          },
          end: {
            line: 229,
            column: 3
          }
        },
        line: 220
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        },
        loc: {
          start: {
            line: 231,
            column: 77
          },
          end: {
            line: 247,
            column: 3
          }
        },
        line: 231
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 249,
            column: 24
          },
          end: {
            line: 249,
            column: 25
          }
        },
        loc: {
          start: {
            line: 249,
            column: 44
          },
          end: {
            line: 258,
            column: 3
          }
        },
        line: 249
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 249,
            column: 44
          },
          end: {
            line: 249,
            column: 45
          }
        },
        loc: {
          start: {
            line: 249,
            column: 75
          },
          end: {
            line: 258,
            column: 3
          }
        },
        line: 249
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 260,
            column: 2
          },
          end: {
            line: 260,
            column: 3
          }
        },
        loc: {
          start: {
            line: 260,
            column: 83
          },
          end: {
            line: 287,
            column: 3
          }
        },
        line: 260
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 261,
            column: 53
          },
          end: {
            line: 261,
            column: 54
          }
        },
        loc: {
          start: {
            line: 261,
            column: 70
          },
          end: {
            line: 273,
            column: 5
          }
        },
        line: 261
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 289,
            column: 2
          },
          end: {
            line: 289,
            column: 3
          }
        },
        loc: {
          start: {
            line: 289,
            column: 42
          },
          end: {
            line: 292,
            column: 3
          }
        },
        line: 289
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 294,
            column: 26
          },
          end: {
            line: 294,
            column: 27
          }
        },
        loc: {
          start: {
            line: 294,
            column: 58
          },
          end: {
            line: 303,
            column: 3
          }
        },
        line: 294
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 294,
            column: 58
          },
          end: {
            line: 294,
            column: 59
          }
        },
        loc: {
          start: {
            line: 294,
            column: 64
          },
          end: {
            line: 303,
            column: 3
          }
        },
        line: 294
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 305,
            column: 2
          },
          end: {
            line: 305,
            column: 3
          }
        },
        loc: {
          start: {
            line: 305,
            column: 32
          },
          end: {
            line: 331,
            column: 3
          }
        },
        line: 305
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 332,
            column: 2
          },
          end: {
            line: 332,
            column: 3
          }
        },
        loc: {
          start: {
            line: 332,
            column: 39
          },
          end: {
            line: 335,
            column: 3
          }
        },
        line: 332
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 92,
            column: 14
          }
        }, {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 97,
            column: 14
          }
        }, {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 102,
            column: 14
          }
        }],
        line: 87
      },
      "1": {
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 112,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 112,
            column: 5
          }
        }, {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 112,
            column: 5
          }
        }],
        line: 107
      },
      "2": {
        loc: {
          start: {
            line: 110,
            column: 11
          },
          end: {
            line: 112,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 11
          },
          end: {
            line: 112,
            column: 5
          }
        }, {
          start: {
            line: 110,
            column: 11
          },
          end: {
            line: 112,
            column: 5
          }
        }],
        line: 110
      },
      "3": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        }, {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        }],
        line: 115
      },
      "4": {
        loc: {
          start: {
            line: 179,
            column: 11
          },
          end: {
            line: 179,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 179,
            column: 11
          },
          end: {
            line: 179,
            column: 51
          }
        }, {
          start: {
            line: 179,
            column: 55
          },
          end: {
            line: 179,
            column: 56
          }
        }],
        line: 179
      },
      "5": {
        loc: {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        }, {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        }],
        line: 183
      },
      "6": {
        loc: {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 186,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 186,
            column: 7
          }
        }, {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 186,
            column: 7
          }
        }],
        line: 184
      },
      "7": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        }, {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        }],
        line: 188
      },
      "8": {
        loc: {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 196,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 196,
            column: 7
          }
        }, {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 196,
            column: 7
          }
        }],
        line: 190
      },
      "9": {
        loc: {
          start: {
            line: 193,
            column: 13
          },
          end: {
            line: 196,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 193,
            column: 13
          },
          end: {
            line: 196,
            column: 7
          }
        }, {
          start: {
            line: 193,
            column: 13
          },
          end: {
            line: 196,
            column: 7
          }
        }],
        line: 193
      },
      "10": {
        loc: {
          start: {
            line: 308,
            column: 4
          },
          end: {
            line: 329,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 309,
            column: 6
          },
          end: {
            line: 319,
            column: 9
          }
        }, {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 322,
            column: 14
          }
        }, {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 328,
            column: 14
          }
        }],
        line: 308
      },
      "11": {
        loc: {
          start: {
            line: 310,
            column: 8
          },
          end: {
            line: 319,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 310,
            column: 8
          },
          end: {
            line: 319,
            column: 9
          }
        }, {
          start: {
            line: 310,
            column: 8
          },
          end: {
            line: 319,
            column: 9
          }
        }],
        line: 310
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {
      "0": [0, 0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0, 0],
      "11": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6ceffb234a0eb65ba9f0e9cbd689f19dc9122bd3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_29rc35ldig = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_29rc35ldig();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















let GameMode;

(function (GameMode) {
  GameMode["AI"] = "AI";
  GameMode["OnlineFriend"] = "online";
  GameMode["LocalFriend"] = "local";
})(GameMode || (GameMode = {}));

class GameModePicker extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  constructor(props) {
    cov_29rc35ldig().f[0]++;
    cov_29rc35ldig().s[0]++;
    super(props);

    _defineProperty(this, "_playOnlineGame", (cov_29rc35ldig().s[34]++, info => {
      cov_29rc35ldig().f[3]++;
      cov_29rc35ldig().s[35]++;
      return () => {
        cov_29rc35ldig().f[4]++;
        cov_29rc35ldig().s[36]++;
        // second param was e: any
        this.setState(_objectSpread({}, this.state, {
          playButtonDisabled: true
        }));
        const gameCode = (cov_29rc35ldig().s[37]++, this.props.gameDef.code);
        const numPlayers = (cov_29rc35ldig().s[38]++, this._getExtraInfoValue(info)); // `/room/new/${this.props.gameDef.code}/${this._getExtraInfoValue(info)}`,

        cov_29rc35ldig().s[39]++;
        _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_17__["LobbyService"].newRoom(gameCode, numPlayers).then(roomID => {
          cov_29rc35ldig().f[5]++;
          cov_29rc35ldig().s[40]++;
          // we use .replace instead of .push so that the browser back button works correctly
          next_router__WEBPACK_IMPORTED_MODULE_18___default.a.replace(`/room/${gameCode}/${roomID}`);
        }, () => {
          cov_29rc35ldig().f[6]++;
          cov_29rc35ldig().s[41]++;
          // was _err => { ...
          this.setState(_objectSpread({}, this.state, {
            playButtonError: true,
            playButtonDisabled: false
          }));
        });
      };
    }));

    _defineProperty(this, "_handleNumPlayersSelect", (cov_29rc35ldig().s[60]++, event => {
      cov_29rc35ldig().f[10]++;
      const newState = (cov_29rc35ldig().s[61]++, _objectSpread({}, this.state, {
        extraInfo: _objectSpread({}, this.state.extraInfo)
      }));
      cov_29rc35ldig().s[62]++;
      newState.extraInfo[GameMode.OnlineFriend] = event.target.value;
      cov_29rc35ldig().s[63]++;
      this.setState(newState);
    }));

    _defineProperty(this, "_handleSliderChange", (cov_29rc35ldig().s[66]++, mode => {
      cov_29rc35ldig().f[12]++;
      cov_29rc35ldig().s[67]++;
      return (event, value) => {
        cov_29rc35ldig().f[13]++;
        const newState = (cov_29rc35ldig().s[68]++, _objectSpread({}, this.state, {
          extraInfo: _objectSpread({}, this.state.extraInfo)
        }));
        cov_29rc35ldig().s[69]++;
        newState.extraInfo[mode] = value;
        cov_29rc35ldig().s[70]++;
        this.setState(newState);
      };
    }));

    _defineProperty(this, "_handleClickSelection", (cov_29rc35ldig().s[77]++, (mode, value) => {
      cov_29rc35ldig().f[17]++;
      cov_29rc35ldig().s[78]++;
      return () => {
        cov_29rc35ldig().f[18]++;
        const newState = (cov_29rc35ldig().s[79]++, _objectSpread({}, this.state, {
          extraInfo: _objectSpread({}, this.state.extraInfo)
        }));
        cov_29rc35ldig().s[80]++;
        newState.extraInfo[mode] = value;
        cov_29rc35ldig().s[81]++;
        this.setState(newState);
      };
    }));

    cov_29rc35ldig().s[1]++;
    this.state = {
      playButtonDisabled: false,
      playButtonError: false,
      extraInfo: {
        online: this.props.gameDef.minPlayers
      }
    };
  }

  render() {
    cov_29rc35ldig().f[1]++;
    const modes = (cov_29rc35ldig().s[2]++, []);
    cov_29rc35ldig().s[3]++;

    for (const mode of this.props.gameDef.modes) {
      cov_29rc35ldig().s[4]++;
      modes.push(this._getCard(mode));
    }

    cov_29rc35ldig().s[5]++;
    return __jsx("div", {
      style: {
        marginTop: '8px',
        maxWidth: '500px'
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      variant: "h6",
      component: "h2",
      style: {
        marginBottom: '16px'
      }
    }, "Choose game mode"), __jsx("div", null, modes));
  }

  _getCard(info) {
    cov_29rc35ldig().f[2]++;
    let title;
    let description;
    let icon;
    cov_29rc35ldig().s[6]++;

    switch (info.mode) {
      case GameMode.AI:
        cov_29rc35ldig().b[0][0]++;
        cov_29rc35ldig().s[7]++;
        title = 'Computer (AI)';
        cov_29rc35ldig().s[8]++;
        description = 'Play against the computer in your browser.';
        cov_29rc35ldig().s[9]++;
        icon = __jsx(_material_ui_icons_Android__WEBPACK_IMPORTED_MODULE_1___default.a, null);
        cov_29rc35ldig().s[10]++;
        break;

      case GameMode.LocalFriend:
        cov_29rc35ldig().b[0][1]++;
        cov_29rc35ldig().s[11]++;
        title = 'Local Friend';
        cov_29rc35ldig().s[12]++;
        description = 'Share your device and play against a friend locally.';
        cov_29rc35ldig().s[13]++;
        icon = __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_2___default.a, null);
        cov_29rc35ldig().s[14]++;
        break;

      case GameMode.OnlineFriend:
        cov_29rc35ldig().b[0][2]++;
        cov_29rc35ldig().s[15]++;
        title = 'Online Friend';
        cov_29rc35ldig().s[16]++;
        description = 'Share a link and play against a friend online.';
        cov_29rc35ldig().s[17]++;
        icon = __jsx(_material_ui_icons_Wifi__WEBPACK_IMPORTED_MODULE_3___default.a, null);
        cov_29rc35ldig().s[18]++;
        break;
    }

    const extraInfo = (cov_29rc35ldig().s[19]++, this._getExtraInfo(info));
    let btnText = (cov_29rc35ldig().s[20]++, 'Play');
    let color = (cov_29rc35ldig().s[21]++, 'primary'); // FIXME: couldn't find the type

    cov_29rc35ldig().s[22]++;

    if (this.state.playButtonError) {
      cov_29rc35ldig().b[1][0]++;
      cov_29rc35ldig().s[23]++;
      btnText = 'Error';
      cov_29rc35ldig().s[24]++;
      color = 'secondary';
    } else {
      cov_29rc35ldig().b[1][1]++;
      cov_29rc35ldig().s[25]++;

      if (this.state.playButtonDisabled) {
        cov_29rc35ldig().b[2][0]++;
        cov_29rc35ldig().s[26]++;
        btnText = 'Loading';
      } else {
        cov_29rc35ldig().b[2][1]++;
      }
    } // const color = this.state.playButtonError ? 'secondary' : 'primary';


    let button;
    cov_29rc35ldig().s[27]++;

    if (info.mode === GameMode.OnlineFriend) {
      cov_29rc35ldig().b[3][0]++;
      cov_29rc35ldig().s[28]++;
      button = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        "data-testid": "playButton",
        variant: "contained",
        color: color,
        style: {
          marginLeft: 'auto'
        },
        onClick: this._playOnlineGame(info),
        disabled: this.state.playButtonDisabled
      }, btnText);
    } else {
      cov_29rc35ldig().b[3][1]++;
      const linkInfo = (cov_29rc35ldig().s[29]++, this._getLink(info));
      const linkHref = (cov_29rc35ldig().s[30]++, linkInfo[0]),
            linkAs = (cov_29rc35ldig().s[31]++, linkInfo[1]);
      cov_29rc35ldig().s[32]++;
      button = __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        href: linkHref,
        as: linkAs
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        "data-testid": `playbutton-${this.props.gameDef.code}-${info.mode}`,
        component: 'a',
        variant: "contained",
        color: "primary",
        style: {
          marginLeft: 'auto'
        }
      }, "Play"));
    }

    cov_29rc35ldig().s[33]++;
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: title,
      style: {
        margin: '0 0 16px 0'
      }
    }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8___default.a, {
      avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default.a, {
        "aria-label": title
      }, icon),
      title: title
    }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      component: "p"
    }, description)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, null, extraInfo, button));
  }

  _getExtraInfoValue(info) {
    cov_29rc35ldig().f[7]++;
    cov_29rc35ldig().s[42]++;
    return (cov_29rc35ldig().b[4][0]++, this.state.extraInfo[info.mode]) || (cov_29rc35ldig().b[4][1]++, 1);
  }

  _getExtraInfo(info) {
    cov_29rc35ldig().f[8]++;
    cov_29rc35ldig().s[43]++;

    if (info.mode == GameMode.OnlineFriend) {
      cov_29rc35ldig().b[5][0]++;
      cov_29rc35ldig().s[44]++;

      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {
        cov_29rc35ldig().b[6][0]++;
        cov_29rc35ldig().s[45]++;
        return this._getExtraInfoNumPlayers(info, this.props.gameDef.minPlayers, this.props.gameDef.maxPlayers);
      } else {
        cov_29rc35ldig().b[6][1]++;
      }
    } else {
      cov_29rc35ldig().b[5][1]++;
    }

    cov_29rc35ldig().s[46]++;

    if (info.extraInfo) {
      cov_29rc35ldig().b[7][0]++;
      const extraInfo = (cov_29rc35ldig().s[47]++, info.extraInfo);
      cov_29rc35ldig().s[48]++;

      if (extraInfo.type === 'slider') {
        cov_29rc35ldig().b[8][0]++;
        const slider = (cov_29rc35ldig().s[49]++, extraInfo);
        cov_29rc35ldig().s[50]++;
        return this._getExtraInfoSlider(info, slider);
      } else {
        cov_29rc35ldig().b[8][1]++;
        cov_29rc35ldig().s[51]++;

        if (extraInfo.type === 'dropdown') {
          cov_29rc35ldig().b[9][0]++;
          const dropdown = (cov_29rc35ldig().s[52]++, extraInfo);
          cov_29rc35ldig().s[53]++;
          return this._getExtraInfoDropdown(info, dropdown);
        } else {
          cov_29rc35ldig().b[9][1]++;
        }
      }
    } else {
      cov_29rc35ldig().b[7][1]++;
    }

    cov_29rc35ldig().s[54]++;
    return null;
  }

  _getExtraInfoNumPlayers(info, minPlayers, maxPlayers) {
    cov_29rc35ldig().f[9]++;
    const options = (cov_29rc35ldig().s[55]++, []);
    cov_29rc35ldig().s[56]++;

    for (let i = (cov_29rc35ldig().s[57]++, minPlayers); i <= maxPlayers; i++) {
      cov_29rc35ldig().s[58]++;
      options.push(__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
        value: i,
        key: i
      }, i, " Players"));
    }

    cov_29rc35ldig().s[59]++;
    return __jsx("div", {
      style: {
        marginBottom: '8px'
      }
    }, __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        position: 'relative',
        top: '8px',
        padding: '0 8px'
      }
    }), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: this._getExtraInfoValue(info),
      onChange: this._handleNumPlayersSelect
    }, options));
  }

  _getExtraInfoSlider(info, slider) {
    cov_29rc35ldig().f[11]++;
    const value = (cov_29rc35ldig().s[64]++, this._getExtraInfoValue(info));
    cov_29rc35ldig().s[65]++;
    return __jsx("div", {
      style: {
        margin: '8px',
        width: '80%'
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
      id: "label",
      style: {
        marginBottom: '8px'
      }
    }, "Difficulty ", value, "/", slider.max), __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_9___default.a, {
      value: value,
      min: slider.min,
      max: slider.max,
      step: 1,
      onChange: this._handleSliderChange(info.mode)
    }));
  }

  _getExtraInfoDropdown(info, dropdown) {
    cov_29rc35ldig().f[14]++;
    const list = (cov_29rc35ldig().s[71]++, dropdown.options.map((option, idx) => {
      cov_29rc35ldig().f[15]++;
      cov_29rc35ldig().s[72]++;
      idx++;
      cov_29rc35ldig().s[73]++;
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this._handleClickSelection(info.mode, idx),
        key: option,
        value: option,
        selected: this._getExtraInfoValue(info) === idx
      }, option);
    }));
    cov_29rc35ldig().s[74]++;
    return __jsx("div", null, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_12___default.a, {
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex'
      }
    }, list));
  }

  _getNumOfCardsToDisplay(cardsToDisplay) {
    cov_29rc35ldig().f[16]++;
    const numberOfGameModes = (cov_29rc35ldig().s[75]++, this.props.gameDef.modes.length);
    cov_29rc35ldig().s[76]++;
    return Math.max(cardsToDisplay, numberOfGameModes);
  }

  _getLink(info) {
    cov_29rc35ldig().f[19]++;
    const mode = (cov_29rc35ldig().s[82]++, info.mode);
    let hrefAndAs;
    cov_29rc35ldig().s[83]++;

    switch (mode) {
      case GameMode.AI:
        cov_29rc35ldig().b[10][0]++;
        cov_29rc35ldig().s[84]++;

        if (info.extraInfo) {
          cov_29rc35ldig().b[11][0]++;
          cov_29rc35ldig().s[85]++;
          hrefAndAs = ['/play/[gameCode]/[mode]/[aiLevel]', `/play/${this.props.gameDef.code}/AI/${this._getExtraInfoValue(info)}`];
          cov_29rc35ldig().s[86]++;
          break;
        } else {
          cov_29rc35ldig().b[11][1]++;
          cov_29rc35ldig().s[87]++;
          hrefAndAs = ['/play/[gameCode]/[mode]', `/play/${this.props.gameDef.code}/AI`];
          cov_29rc35ldig().s[88]++;
          break;
        }

      case GameMode.LocalFriend:
        cov_29rc35ldig().b[10][1]++;
        cov_29rc35ldig().s[89]++;
        hrefAndAs = ['/play/[gameCode]/[mode]', `/play/${this.props.gameDef.code}/local`];
        cov_29rc35ldig().s[90]++;
        break;

      case GameMode.OnlineFriend:
        cov_29rc35ldig().b[10][2]++;
        cov_29rc35ldig().s[91]++;
        hrefAndAs = ['/room/new/[gameCode]/[numPlayers]', `/room/new/${this.props.gameDef.code}/${this._getExtraInfoValue(info)}`];
        cov_29rc35ldig().s[92]++;
        break;
    }

    cov_29rc35ldig().s[93]++;
    return hrefAndAs;
  }

  static async getInitialProps(router) {
    cov_29rc35ldig().f[20]++;
    const gameCode = (cov_29rc35ldig().s[94]++, router.query.gameCode);
    cov_29rc35ldig().s[95]++;
    return {
      gameCode
    };
  }

}

/***/ }),

/***/ "./src/components/App/Helpers/AddressHelper.ts":
/*!*****************************************************!*\
  !*** ./src/components/App/Helpers/AddressHelper.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressHelper; });
/* harmony import */ var _SSRHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSRHelper */ "./src/components/App/Helpers/SSRHelper.ts");
function cov_urjvbt9q1() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Helpers/AddressHelper.ts";
  var hash = "bca3c5fa5a41e46f5cdeb7cb16babcd938bbf57c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Helpers/AddressHelper.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 8,
          column: 5
        }
      },
      "1": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 86
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 40
          }
        }, {
          start: {
            line: 7,
            column: 44
          },
          end: {
            line: 7,
            column: 85
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bca3c5fa5a41e46f5cdeb7cb16babcd938bbf57c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_urjvbt9q1 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_urjvbt9q1();

class AddressHelper {
  /** Gets bgio host:port address. */
  static getServerAddress() {
    cov_urjvbt9q1().f[0]++;
    cov_urjvbt9q1().s[0]++;

    if (!_SSRHelper__WEBPACK_IMPORTED_MODULE_0__["default"].isSSR()) {
      cov_urjvbt9q1().b[0][0]++;
      cov_urjvbt9q1().s[1]++;
      return (cov_urjvbt9q1().b[1][0]++, undefined) || (cov_urjvbt9q1().b[1][1]++, `http://${window.location.hostname}:8001`);
    } else {
      cov_urjvbt9q1().b[0][1]++;
    }
  }

}

/***/ }),

/***/ "./src/components/App/Helpers/SSRHelper.ts":
/*!*************************************************!*\
  !*** ./src/components/App/Helpers/SSRHelper.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SSRHelper; });
function cov_142zs1q03m() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Helpers/SSRHelper.ts";
  var hash = "577c64e31cb3f40ae55d6b633e1053e1acaed3ac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Helpers/SSRHelper.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 3,
            column: 3
          }
        },
        loc: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 5,
            column: 3
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "577c64e31cb3f40ae55d6b633e1053e1acaed3ac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_142zs1q03m = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_142zs1q03m();
// Returns true if SSR is rendering the page, else false.
class SSRHelper {
  static isSSR() {
    cov_142zs1q03m().f[0]++;
    cov_142zs1q03m().s[0]++;
    return true;
  }

}

/***/ }),

/***/ "./src/components/App/Lobby/LobbyService.ts":
/*!**************************************************!*\
  !*** ./src/components/App/Lobby/LobbyService.ts ***!
  \**************************************************/
/*! exports provided: LobbyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyService", function() { return LobbyService; });
/* harmony import */ var _Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/AddressHelper */ "./src/components/App/Helpers/AddressHelper.ts");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/SSRHelper */ "./src/components/App/Helpers/SSRHelper.ts");
function cov_s9oy57fma() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Lobby/LobbyService.ts";
  var hash = "d87474fd8cee8be6d3067d4dee8ec030b8421943";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Lobby/LobbyService.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 44
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 38
        }
      },
      "2": {
        start: {
          line: 33,
          column: 21
        },
        end: {
          line: 35,
          column: 27
        }
      },
      "3": {
        start: {
          line: 36,
          column: 19
        },
        end: {
          line: 36,
          column: 39
        }
      },
      "4": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 18
        }
      },
      "5": {
        start: {
          line: 42,
          column: 21
        },
        end: {
          line: 47,
          column: 8
        }
      },
      "6": {
        start: {
          line: 48,
          column: 23
        },
        end: {
          line: 48,
          column: 54
        }
      },
      "7": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 43
        }
      },
      "8": {
        start: {
          line: 53,
          column: 48
        },
        end: {
          line: 53,
          column: 81
        }
      },
      "9": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 58,
          column: 7
        }
      },
      "10": {
        start: {
          line: 62,
          column: 21
        },
        end: {
          line: 62,
          column: 105
        }
      },
      "11": {
        start: {
          line: 63,
          column: 17
        },
        end: {
          line: 63,
          column: 30
        }
      },
      "12": {
        start: {
          line: 64,
          column: 37
        },
        end: {
          line: 70,
          column: 9
        }
      },
      "13": {
        start: {
          line: 65,
          column: 31
        },
        end: {
          line: 65,
          column: 42
        }
      },
      "14": {
        start: {
          line: 66,
          column: 29
        },
        end: {
          line: 70,
          column: 7
        }
      },
      "15": {
        start: {
          line: 71,
          column: 48
        },
        end: {
          line: 71,
          column: 74
        }
      },
      "16": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "17": {
        start: {
          line: 74,
          column: 6
        },
        end: {
          line: 74,
          column: 97
        }
      },
      "18": {
        start: {
          line: 74,
          column: 50
        },
        end: {
          line: 74,
          column: 95
        }
      },
      "19": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 92
        }
      },
      "20": {
        start: {
          line: 80,
          column: 48
        },
        end: {
          line: 80,
          column: 74
        }
      },
      "21": {
        start: {
          line: 81,
          column: 21
        },
        end: {
          line: 83,
          column: 106
        }
      },
      "22": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 36
        }
      },
      "23": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 90,
          column: 5
        }
      },
      "24": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 89,
          column: 52
        }
      },
      "25": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 49
        }
      },
      "26": {
        start: {
          line: 99,
          column: 44
        },
        end: {
          line: 99,
          column: 97
        }
      },
      "27": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 102,
          column: 5
        }
      },
      "28": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 33
        }
      },
      "29": {
        start: {
          line: 106,
          column: 41
        },
        end: {
          line: 106,
          column: 94
        }
      },
      "30": {
        start: {
          line: 107,
          column: 27
        },
        end: {
          line: 107,
          column: 42
        }
      },
      "31": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 78
        }
      },
      "32": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 78
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 85
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 32
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 87
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 41
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        loc: {
          start: {
            line: 52,
            column: 106
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 3
          }
        },
        loc: {
          start: {
            line: 61,
            column: 96
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 61
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 14
          },
          end: {
            line: 65,
            column: 15
          }
        },
        loc: {
          start: {
            line: 65,
            column: 31
          },
          end: {
            line: 65,
            column: 42
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 66,
            column: 11
          },
          end: {
            line: 66,
            column: 12
          }
        },
        loc: {
          start: {
            line: 66,
            column: 29
          },
          end: {
            line: 70,
            column: 7
          }
        },
        line: 66
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 74,
            column: 33
          },
          end: {
            line: 74,
            column: 34
          }
        },
        loc: {
          start: {
            line: 74,
            column: 50
          },
          end: {
            line: 74,
            column: 95
          }
        },
        line: 74
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 79,
            column: 3
          }
        },
        loc: {
          start: {
            line: 79,
            column: 114
          },
          end: {
            line: 85,
            column: 3
          }
        },
        line: 79
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 87,
            column: 3
          }
        },
        loc: {
          start: {
            line: 87,
            column: 38
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 87
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        loc: {
          start: {
            line: 93,
            column: 48
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 93
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 77
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 97
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        loc: {
          start: {
            line: 105,
            column: 79
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 105
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }, {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }],
        line: 73
      },
      "1": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        }, {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        }],
        line: 88
      },
      "2": {
        loc: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        }, {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        }],
        line: 100
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d87474fd8cee8be6d3067d4dee8ec030b8421943"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_s9oy57fma = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_s9oy57fma();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FBG_CREDENTIALS_KEY = (cov_s9oy57fma().s[0]++, 'fbgCredentials');
const FBG_NICKNAME_KEY = (cov_s9oy57fma().s[1]++, 'fbgNickname');
class LobbyService {
  static async newRoom(gameCode, numPlayers) {
    cov_s9oy57fma().f[0]++;
    const response = (cov_s9oy57fma().s[2]++, await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress()}/games/${gameCode}/create`).send({
      numPlayers
    }));
    const roomID = (cov_s9oy57fma().s[3]++, response.body.gameID);
    cov_s9oy57fma().s[4]++;
    return roomID; // return 'foo';
  }

  static async joinRoom(gameCode, player) {
    cov_s9oy57fma().f[1]++;
    const response = (cov_s9oy57fma().s[5]++, await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress()}/games/${gameCode}/${player.roomID}/join`).send({
      playerID: player.playerID,
      playerName: player.name
    }));
    const credential = (cov_s9oy57fma().s[6]++, response.body.playerCredentials);
    cov_s9oy57fma().s[7]++;
    this.setCredential(player, credential);
  }

  static async renameUser(gameCode, player, newName) {
    cov_s9oy57fma().f[2]++;
    const playerCredential = (cov_s9oy57fma().s[8]++, this.getCredential(player.roomID));
    cov_s9oy57fma().s[9]++;
    await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({
      playerID: player.playerID,
      credentials: playerCredential.credential,
      newName
    });
  }

  static async getRoomMetadata(gameCode, roomID) {
    cov_s9oy57fma().f[3]++;
    const response = (cov_s9oy57fma().s[10]++, await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress()}/games/${gameCode}/${roomID}`));
    const body = (cov_s9oy57fma().s[11]++, response.body);
    const players = (cov_s9oy57fma().s[12]++, body.players.filter(player => {
      cov_s9oy57fma().f[4]++;
      cov_s9oy57fma().s[13]++;
      return player.name;
    }).map(player => {
      cov_s9oy57fma().f[5]++;
      cov_s9oy57fma().s[14]++;
      return {
        playerID: player.id,
        name: player.name,
        roomID
      };
    }));
    const playerCredential = (cov_s9oy57fma().s[15]++, this.getCredential(roomID));
    let currentUser;
    cov_s9oy57fma().s[16]++;

    if (playerCredential) {
      cov_s9oy57fma().b[0][0]++;
      cov_s9oy57fma().s[17]++;
      currentUser = players.find(player => {
        cov_s9oy57fma().f[6]++;
        cov_s9oy57fma().s[18]++;
        return player.playerID === playerCredential.playerID;
      });
    } else {
      cov_s9oy57fma().b[0][1]++;
    }

    cov_s9oy57fma().s[19]++;
    return {
      players,
      gameCode,
      roomID,
      currentUser,
      numberOfPlayers: body.players.length
    };
  }

  static async getPlayAgainNextRoom(gameCode, roomID, numPlayers) {
    cov_s9oy57fma().f[7]++;
    const playerCredential = (cov_s9oy57fma().s[20]++, this.getCredential(roomID));
    const response = (cov_s9oy57fma().s[21]++, await superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_Helpers_AddressHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getServerAddress()}/games/${gameCode}/${roomID}/playAgain`).send({
      playerID: playerCredential.playerID,
      credentials: playerCredential.credential,
      numPlayers
    }));
    cov_s9oy57fma().s[22]++;
    return response.body.nextRoomID;
  }

  static getNickname() {
    cov_s9oy57fma().f[8]++;
    cov_s9oy57fma().s[23]++;

    if (!_Helpers_SSRHelper__WEBPACK_IMPORTED_MODULE_2__["default"].isSSR()) {
      cov_s9oy57fma().b[1][0]++;
      cov_s9oy57fma().s[24]++;
      return localStorage.getItem(FBG_NICKNAME_KEY);
    } else {
      cov_s9oy57fma().b[1][1]++;
    }
  }

  static setNickname(name) {
    cov_s9oy57fma().f[9]++;
    cov_s9oy57fma().s[25]++;
    localStorage.setItem(FBG_NICKNAME_KEY, name);
  }

  static getCredential(roomID) {
    cov_s9oy57fma().f[10]++;
    // return an empty IPlayerInRoom object if the player's identity is for another room
    const credentials = (cov_s9oy57fma().s[26]++, JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY)));
    cov_s9oy57fma().s[27]++;

    if (credentials) {
      cov_s9oy57fma().b[2][0]++;
      cov_s9oy57fma().s[28]++;
      return credentials[roomID];
    } else {
      cov_s9oy57fma().b[2][1]++;
    }
  }

  static setCredential(player, credential) {
    cov_s9oy57fma().f[11]++;
    const existing = (cov_s9oy57fma().s[29]++, JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY)));
    const newCredentials = (cov_s9oy57fma().s[30]++, _objectSpread({}, existing));
    cov_s9oy57fma().s[31]++;
    newCredentials[player.roomID] = {
      credential,
      playerID: player.playerID
    };
    cov_s9oy57fma().s[32]++;
    localStorage.setItem(FBG_CREDENTIALS_KEY, JSON.stringify(newCredentials));
  }

}

/***/ }),

/***/ "./src/components/App/media/fbg_logo_white_48.png":
/*!********************************************************!*\
  !*** ./src/components/App/media/fbg_logo_white_48.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Breadcrumbs.tsx":
/*!****************************************!*\
  !*** ./src/components/Breadcrumbs.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_1qlpqw3mko() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/Breadcrumbs.tsx";
  var hash = "fb35b630d4b099de592cd8e2abe45a0b30ea8324";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/Breadcrumbs.tsx",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "Breadcrumbs",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 35
          }
        },
        loc: {
          start: {
            line: 4,
            column: 66
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fb35b630d4b099de592cd8e2abe45a0b30ea8324"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1qlpqw3mko = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1qlpqw3mko();


function Breadcrumbs(props) {
  cov_1qlpqw3mko().f[0]++;
  cov_1qlpqw3mko().s[0]++;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbJsonLd"], props);
}

/***/ }),

/***/ "./src/components/DesktopMobileView.tsx":
/*!**********************************************!*\
  !*** ./src/components/DesktopMobileView.tsx ***!
  \**********************************************/
/*! exports provided: DesktopView, MobileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopView", function() { return DesktopView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileView", function() { return MobileView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useWindowDimensions */ "./src/hooks/useWindowDimensions.ts");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-detect */ "mobile-detect");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_1jre50uwcf() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/DesktopMobileView.tsx";
  var hash = "0f0b32a919beacee3d27852a9b0e92630e49b411";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/DesktopMobileView.tsx",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 32
        },
        end: {
          line: 11,
          column: 35
        }
      },
      "1": {
        start: {
          line: 14,
          column: 26
        },
        end: {
          line: 14,
          column: 106
        }
      },
      "2": {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 41
        }
      },
      "3": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 49
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 20,
          column: 15
        },
        end: {
          line: 20,
          column: 48
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 51
        }
      },
      "7": {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 23,
          column: 74
        }
      },
      "8": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 45
        }
      },
      "9": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 24
        }
      },
      "10": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "11": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "12": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "13": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 16
        }
      },
      "14": {
        start: {
          line: 37,
          column: 26
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "15": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "16": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "17": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "isMobile",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 17
          }
        },
        loc: {
          start: {
            line: 13,
            column: 49
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 28
          }
        },
        loc: {
          start: {
            line: 29,
            column: 62
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 26
          },
          end: {
            line: 37,
            column: 27
          }
        },
        loc: {
          start: {
            line: 37,
            column: 61
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 106
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 57
          }
        }, {
          start: {
            line: 14,
            column: 61
          },
          end: {
            line: 14,
            column: 106
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 7
          },
          end: {
            line: 18,
            column: 17
          }
        }, {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 18,
            column: 36
          }
        }, {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 18,
            column: 56
          }
        }],
        line: 18
      },
      "3": {
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 34
          }
        }, {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 21,
            column: 50
          }
        }],
        line: 21
      },
      "4": {
        loc: {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 47
          }
        }, {
          start: {
            line: 23,
            column: 51
          },
          end: {
            line: 23,
            column: 74
          }
        }],
        line: 23
      },
      "5": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        }],
        line: 30
      },
      "6": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        }, {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        }],
        line: 38
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0f0b32a919beacee3d27852a9b0e92630e49b411"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1jre50uwcf = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1jre50uwcf();



const DEFAULT_THRESHOLD_WIDTH = (cov_1jre50uwcf().s[0]++, 550);

function isMobile(props) {
  var _document;

  cov_1jre50uwcf().f[0]++;
  const hasJssSSRStyles = (cov_1jre50uwcf().s[1]++, (cov_1jre50uwcf().b[0][0]++, typeof document !== 'undefined') && (cov_1jre50uwcf().b[0][1]++, !!((_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('#jss-server-side'))));
  let width = (cov_1jre50uwcf().s[2]++, Object(hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__["default"])().width);
  const isBrowser = (cov_1jre50uwcf().s[3]++, false);
  let isMobileResult;
  cov_1jre50uwcf().s[4]++;

  if (((cov_1jre50uwcf().b[2][0]++, !isBrowser) || (cov_1jre50uwcf().b[2][1]++, hasJssSSRStyles)) && (cov_1jre50uwcf().b[2][2]++, props.userAgent)) {
    cov_1jre50uwcf().b[1][0]++;
    // keep the isDesktop() return uniform if JSS styles exist
    const md = (cov_1jre50uwcf().s[5]++, new mobile_detect__WEBPACK_IMPORTED_MODULE_2___default.a(props.userAgent));
    cov_1jre50uwcf().s[6]++;
    isMobileResult = (cov_1jre50uwcf().b[3][0]++, !!md.mobile()) && (cov_1jre50uwcf().b[3][1]++, !md.tablet());
  } else {
    cov_1jre50uwcf().b[1][1]++;
    const thresholdWidth = (cov_1jre50uwcf().s[7]++, (cov_1jre50uwcf().b[4][0]++, props.thresholdWidth) || (cov_1jre50uwcf().b[4][1]++, DEFAULT_THRESHOLD_WIDTH));
    cov_1jre50uwcf().s[8]++;
    isMobileResult = width <= thresholdWidth;
  }

  cov_1jre50uwcf().s[9]++;
  return isMobileResult;
}

cov_1jre50uwcf().s[10]++;
const DesktopView = props => {
  cov_1jre50uwcf().f[1]++;
  cov_1jre50uwcf().s[11]++;

  if (!isMobile(props)) {
    cov_1jre50uwcf().b[5][0]++;
    cov_1jre50uwcf().s[12]++;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
  } else {
    cov_1jre50uwcf().b[5][1]++;
    cov_1jre50uwcf().s[13]++;
    return null;
  }
};
cov_1jre50uwcf().s[14]++;
const MobileView = props => {
  cov_1jre50uwcf().f[2]++;
  cov_1jre50uwcf().s[15]++;

  if (isMobile(props)) {
    cov_1jre50uwcf().b[6][0]++;
    cov_1jre50uwcf().s[16]++;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
  } else {
    cov_1jre50uwcf().b[6][1]++;
    cov_1jre50uwcf().s[17]++;
    return null;
  }
};

/***/ }),

/***/ "./src/components/SEO.tsx":
/*!********************************!*\
  !*** ./src/components/SEO.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_2oi4xcan0() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/SEO.tsx";
  var hash = "d8f95192e379578de59b0a4df27b542b9e479234";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/SEO.tsx",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 33
        },
        end: {
          line: 12,
          column: 86
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 18
        }
      },
      "2": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 53
        }
      },
      "4": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 27
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "6": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 35
        }
      },
      "7": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "8": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 32
        }
      },
      "9": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "getDefaultValues",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 25
          }
        },
        loc: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "SEO",
        decl: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 16,
            column: 27
          }
        },
        loc: {
          start: {
            line: 16,
            column: 60
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        }],
        line: 21
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d8f95192e379578de59b0a4df27b542b9e479234"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2oi4xcan0 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2oi4xcan0();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* istanbul ignore next */

const GLOBAL_NOINDEX = true;

function getDefaultValues() {
  cov_2oi4xcan0().f[0]++;
  const defaults = (cov_2oi4xcan0().s[0]++, {
    noindex: GLOBAL_NOINDEX,
    nofollow: GLOBAL_NOINDEX
  });
  cov_2oi4xcan0().s[1]++;
  return defaults;
}

function SEO(props) {
  cov_2oi4xcan0().f[1]++;
  cov_2oi4xcan0().s[2]++;

  if (props.overrideTitle) {
    cov_2oi4xcan0().b[0][0]++;
    cov_2oi4xcan0().s[3]++;
    props = _objectSpread({}, props, {
      title: props.overrideTitle
    });
  } else {
    cov_2oi4xcan0().b[0][1]++;
    let title = (cov_2oi4xcan0().s[4]++, props.title);
    cov_2oi4xcan0().s[5]++;

    if (!props.title) {
      cov_2oi4xcan0().b[1][0]++;
      cov_2oi4xcan0().s[6]++;
      title = `FreeBoardGames.org`;
    } else {
      cov_2oi4xcan0().b[1][1]++;
      cov_2oi4xcan0().s[7]++;
      title += ` - FreeBoardGames.org`;
    }

    cov_2oi4xcan0().s[8]++;
    props = _objectSpread({}, props, {
      title
    });
  }

  cov_2oi4xcan0().s[9]++;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], _extends({}, getDefaultValues(), props));
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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/checkers/instructions.md");
function cov_1zlxlw2el7() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/checkers/index.ts";
  var hash = "913d5285839f57193f967160cb2869f29ac73001";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/checkers/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 41
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "3": {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 21,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 10
          },
          end: {
            line: 20,
            column: 11
          }
        },
        loc: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 34
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 12
          },
          end: {
            line: 21,
            column: 13
          }
        },
        loc: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 32
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "913d5285839f57193f967160cb2869f29ac73001"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1zlxlw2el7 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1zlxlw2el7();
const Thumbnail = (cov_1zlxlw2el7().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/checkers/media/thumbnail.png?lqip-colors"));


const checkersGameDef = (cov_1zlxlw2el7().s[1]++, {
  code: 'checkers',
  name: 'Checkers',
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Classic game of Checkers',
  descriptionTag: `Play Checkers (also known as Draughts) locally
  or online against friends!`,
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_1zlxlw2el7().f[0]++;
    cov_1zlxlw2el7().s[2]++;
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/checkers/config.ts"));
  },
  aiConfig: () => {
    cov_1zlxlw2el7().f[1]++;
    cov_1zlxlw2el7().s[3]++;
    return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/checkers/ai.ts"));
  }
});

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

/***/ "./src/games/checkers/media/thumbnail.png?lqip-colors":
/*!************************************************************!*\
  !*** ./src/games/checkers/media/thumbnail.png?lqip-colors ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAIAAADYySIZAAAEHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI1MCIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MDAiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjI1MCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMTktMDctMTBUMTQ6MDY6MzMrMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDctMTBUMTQ6MDY6MzMrMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAg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", "palette": ["#fccc9c","#d48c45","#7c4c1c","#944c04","#7c4c1c","#6b4218"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/chess/instructions.md");
function cov_1tmq2hsh50() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/chess/index.ts";
  var hash = "7af5f9ebc8caf6d9cd8499948db54ff16196015f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/chess/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 7,
          column: 38
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "2": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 34
        }
      },
      "3": {
        start: {
          line: 32,
          column: 18
        },
        end: {
          line: 32,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 10
          },
          end: {
            line: 31,
            column: 11
          }
        },
        loc: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 34
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 32,
            column: 13
          }
        },
        loc: {
          start: {
            line: 32,
            column: 18
          },
          end: {
            line: 32,
            column: 32
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7af5f9ebc8caf6d9cd8499948db54ff16196015f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1tmq2hsh50 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1tmq2hsh50();
const Thumbnail = (cov_1tmq2hsh50().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/chess/media/thumbnail.png?lqip-colors"));


const chessGameDef = (cov_1tmq2hsh50().s[1]++, {
  code: 'chess',
  name: 'Chess',
  imageURL: Thumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI,
    extraInfo: {
      type: 'slider',
      min: 1,
      max: 8
    }
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'International Rules',
  descriptionTag: `Play an online Chess game in your browser against a\
 top chess computer. You can set the computer level from 1 to 8,\
 from easy to grandmaster. You can also easily share a link and play\
 chess with a friend online, or you can share your device and play\
 with a friend locally !`,
  instructions: {
    videoId: 'fKxG8KjH1Qg',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_1tmq2hsh50().f[0]++;
    cov_1tmq2hsh50().s[2]++;
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/chess/config.ts"));
  },
  aiConfig: () => {
    cov_1tmq2hsh50().f[1]++;
    cov_1tmq2hsh50().s[3]++;
    return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/chess/ai.ts"));
  }
});

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

/***/ "./src/games/chess/media/thumbnail.png?lqip-colors":
/*!*********************************************************!*\
  !*** ./src/games/chess/media/thumbnail.png?lqip-colors ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-5223b499ab2dc00c5876723e7e8b620e.png", "palette": ["#fccc9c","#d48c4c","#4b3e34","#b0937a","#6c4426","#944c04"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/cornerus/instructions.md");
function cov_13y87mwycg() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/cornerus/index.ts";
  var hash = "73d23a458def072dcfe71abd789f1a38e98aaa32";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/cornerus/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 41
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "2": {
        start: {
          line: 29,
          column: 16
        },
        end: {
          line: 29,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 11
          }
        },
        loc: {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 34
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "73d23a458def072dcfe71abd789f1a38e98aaa32"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_13y87mwycg = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_13y87mwycg();
const Thumbnail = (cov_13y87mwycg().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/cornerus/media/thumbnail.png?lqip-colors"));


const cornerusGameDef = (cov_13y87mwycg().s[1]++, {
  code: 'cornerus',
  name: 'Cornerus',
  imageURL: Thumbnail,
  modes: [
  /*
          {
              mode: GameMode.AI,
              extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
          },*/
  {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'Similar to Blokus',
  descriptionTag: `Play Cornerus, a free online game similar\
 to Blokus. You can play multi-player online or\
 share your device and play locally against a friend.`,
  instructions: {
    videoId: 'Yw8pK6Ak5oE',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_13y87mwycg().f[0]++;
    cov_13y87mwycg().s[2]++;
    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/cornerus/config.ts"));
  } // aiConfig: () => import('./ai'),

});

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

/***/ "./src/games/cornerus/media/thumbnail.png?lqip-colors":
/*!************************************************************!*\
  !*** ./src/games/cornerus/media/thumbnail.png?lqip-colors ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAIAAADYySIZAAAEHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI1MCIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MDAiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjI1MCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMTktMDctMDJUMjA6Mjg6MzgrMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDctMDJUMjA6Mjg6MzgrMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAg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", "palette": ["#434444","#2574b2","#749c4c","#edde44","#2c9cf4","#8b800d"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/fourinarow/instructions.md");
function cov_ko69yxani() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/fourinarow/index.ts";
  var hash = "70d639338fb101abc5d22b59b01d3cf296b9c305";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/fourinarow/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 43
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 34
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "70d639338fb101abc5d22b59b01d3cf296b9c305"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_ko69yxani = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_ko69yxani();
const Thumbnail = (cov_ko69yxani().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/fourinarow/media/thumbnail.png?lqip-colors"));


const fourinarowGameDef = (cov_ko69yxani().s[1]++, {
  code: 'fourinarow',
  name: 'Four in a Row',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'Also Known as Connect Four',
  descriptionTag: `Play Four in a Row for free.  You can play\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    videoId: 'utXzIFEVPjA',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_ko69yxani().f[0]++;
    cov_ko69yxani().s[2]++;
    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/fourinarow/config.ts"));
  }
});

/***/ }),

/***/ "./src/games/fourinarow/instructions.md":
/*!**********************************************!*\
  !*** ./src/games/fourinarow/instructions.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping \none colored disc from the top into a seven-column, six-row vertically suspended grid.\nThe pieces fall straight down, occupying the lowest available space within the column.\n\nThe objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.\n");

/***/ }),

/***/ "./src/games/fourinarow/media/thumbnail.png?lqip-colors":
/*!**************************************************************!*\
  !*** ./src/games/fourinarow/media/thumbnail.png?lqip-colors ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-49a38b4ee22a4cd9f97ab0cd12faff55.png", "palette": ["#2695f4","#a7a7a7","#3c3c3c","#f47c74","#7c8484","#06467e"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

/***/ }),

/***/ "./src/games/hangman/index.ts":
/*!************************************!*\
  !*** ./src/games/hangman/index.ts ***!
  \************************************/
/*! exports provided: hangmanGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hangmanGameDef", function() { return hangmanGameDef; });
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/hangman/instructions.md");
function cov_13zs0ezjx() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/hangman/index.ts";
  var hash = "c4b8fe1b4575567f124201bcd5449100e6a59751";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/hangman/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 40
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 19,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 10
          },
          end: {
            line: 19,
            column: 11
          }
        },
        loc: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 34
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c4b8fe1b4575567f124201bcd5449100e6a59751"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_13zs0ezjx = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_13zs0ezjx();
const Thumbnail = (cov_13zs0ezjx().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/hangman/media/thumbnail.png?lqip-colors"));


const hangmanGameDef = (cov_13zs0ezjx().s[1]++, {
  code: 'hangman',
  name: 'Hangman',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'A Classic Game',
  descriptionTag: `Play Hangman for free online. You can either play a multi-player game against a friend online, or share your device and play locally against a friend.`,
  instructions: {
    videoId: 'leW9ZotUVYo',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_13zs0ezjx().f[0]++;
    cov_13zs0ezjx().s[2]++;
    return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/hangman/config.ts"));
  }
});

/***/ }),

/***/ "./src/games/hangman/instructions.md":
/*!*******************************************!*\
  !*** ./src/games/hangman/instructions.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Hangman is a well known two-player game. A player is asked to guess a word, given only its length and a hint. The player tries to guess the characters in the word and is allowed to make up to 10 incorrect guesses. If the player guesses the word correctly, the final score is the ratio of the number of correct guesses and the total number of guesses made. If more than 10 incorrect guesses were made, the final score is zero. \n");

/***/ }),

/***/ "./src/games/hangman/media/thumbnail.png?lqip-colors":
/*!***********************************************************!*\
  !*** ./src/games/hangman/media/thumbnail.png?lqip-colors ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-06809142379f779a7d542ede2ec37cd6.png", "palette": ["#04e474","#75a890","#bde0c8","#fc5376","#145484","#4c3c34"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var _tictactoeplus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tictactoeplus */ "./src/games/tictactoeplus/index.ts");
/* harmony import */ var _fourinarow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fourinarow */ "./src/games/fourinarow/index.ts");
/* harmony import */ var _zooparade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zooparade */ "./src/games/zooparade/index.ts");
/* harmony import */ var _secretcodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./secretcodes */ "./src/games/secretcodes/index.ts");
/* harmony import */ var _hangman__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hangman */ "./src/games/hangman/index.ts");
function cov_10vxu141xk() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/index.ts";
  var hash = "0017b500ebe83dd38b9c48f55032fefa4d00170e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 38
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "1": {
        start: {
          line: 35,
          column: 38
        },
        end: {
          line: 49,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0017b500ebe83dd38b9c48f55032fefa4d00170e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_10vxu141xk = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_10vxu141xk();












 // Add new games here

const GAMES_MAP = (cov_10vxu141xk().s[0]++, {
  zooparade: _zooparade__WEBPACK_IMPORTED_MODULE_10__["zooParadeGameDef"],
  chess: _chess__WEBPACK_IMPORTED_MODULE_0__["chessGameDef"],
  seabattle: _seabattle__WEBPACK_IMPORTED_MODULE_1__["seabattleGameDef"],
  tictactoe: _tictactoe__WEBPACK_IMPORTED_MODULE_2__["tictactoeGameDef"],
  takesix: _takesix__WEBPACK_IMPORTED_MODULE_3__["takesixGameDef"],
  cornerus: _cornerus__WEBPACK_IMPORTED_MODULE_7__["cornerusGameDef"],
  ninemensmorris: _ninemensmorris__WEBPACK_IMPORTED_MODULE_4__["ninemensmorrisGameDef"],
  checkers: _checkers__WEBPACK_IMPORTED_MODULE_5__["checkersGameDef"],
  reversi: _reversi__WEBPACK_IMPORTED_MODULE_6__["reversiGameDef"],
  tictactoeplus: _tictactoeplus__WEBPACK_IMPORTED_MODULE_8__["tictactoeplusGameDef"],
  fourinarow: _fourinarow__WEBPACK_IMPORTED_MODULE_9__["fourinarowGameDef"],
  secretcodes: _secretcodes__WEBPACK_IMPORTED_MODULE_11__["secretcodesGameDef"],
  hangman: _hangman__WEBPACK_IMPORTED_MODULE_12__["hangmanGameDef"]
}); // Order roughly by popularity.
// See https://stats.freeboardgames.org

const GAMES_LIST = (cov_10vxu141xk().s[1]++, [GAMES_MAP.zooparade, GAMES_MAP.takesix, GAMES_MAP.chess, GAMES_MAP.secretcodes, GAMES_MAP.seabattle, GAMES_MAP.tictactoe, GAMES_MAP.fourinarow, GAMES_MAP.checkers, GAMES_MAP.cornerus, GAMES_MAP.tictactoeplus, GAMES_MAP.reversi, GAMES_MAP.ninemensmorris, GAMES_MAP.hangman]); // No need to edit below

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/ninemensmorris/instructions.md");
function cov_1gsu8ymhy7() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/ninemensmorris/index.ts";
  var hash = "62c4181000a3373273077a364f0c201f4bb37f5e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/ninemensmorris/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 47
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "2": {
        start: {
          line: 29,
          column: 16
        },
        end: {
          line: 29,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 11
          }
        },
        loc: {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 34
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "62c4181000a3373273077a364f0c201f4bb37f5e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1gsu8ymhy7 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1gsu8ymhy7();
const Thumbnail = (cov_1gsu8ymhy7().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/ninemensmorris/media/thumbnail.png?lqip-colors"));


const ninemensmorrisGameDef = (cov_1gsu8ymhy7().s[1]++, {
  code: 'ninemensmorris',
  name: 'Nine Mens Morris',
  imageURL: Thumbnail,
  modes: [
  /*
      {
          mode: GameMode.AI,
          extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },*/
  {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 2,
  description: 'Also Known as Mills',
  descriptionTag: `Play Nine Men's Morris, a free online game also\
 known as Mills. You can play multi-player or with your friend\
 locally!`,
  instructions: {
    videoId: 'zvbIKOHIkRE',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_1gsu8ymhy7().f[0]++;
    cov_1gsu8ymhy7().s[2]++;
    return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/ninemensmorris/config.ts"));
  } // aiConfig: () => import('./ai'),

});

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

/***/ "./src/games/ninemensmorris/media/thumbnail.png?lqip-colors":
/*!******************************************************************!*\
  !*** ./src/games/ninemensmorris/media/thumbnail.png?lqip-colors ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-afcb23a52efa05813de3becce2250bc5.png", "palette": ["#f34434","#7c7c7c","#571813","#c4c4c4","#3c3c3c","#f78b81"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/reversi/instructions.md");
function cov_jigpfqnww() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/reversi/index.ts";
  var hash = "0ff9144b7d08258d58fac34a51f300d2ec78c5a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/reversi/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 40
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "3": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 34
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 32
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0ff9144b7d08258d58fac34a51f300d2ec78c5a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_jigpfqnww = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_jigpfqnww();
const Thumbnail = (cov_jigpfqnww().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/reversi/media/thumbnail.png?lqip-colors"));


const reversiGameDef = (cov_jigpfqnww().s[1]++, {
  code: 'reversi',
  name: 'Reversi',
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'Similar to Rollit and Othello',
  descriptionTag: `Play Reversi, a free online game similar\
 to Rollit and Othello. You can play multi-player online or \
 share your device and play locally against a friend.`,
  instructions: {
    videoId: 'hC1sgDNrqq0',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_jigpfqnww().f[0]++;
    cov_jigpfqnww().s[2]++;
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/reversi/config.ts"));
  },
  aiConfig: () => {
    cov_jigpfqnww().f[1]++;
    cov_jigpfqnww().s[3]++;
    return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/reversi/ai.ts"));
  }
});

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

/***/ "./src/games/reversi/media/thumbnail.png?lqip-colors":
/*!***********************************************************!*\
  !*** ./src/games/reversi/media/thumbnail.png?lqip-colors ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAIAAADYySIZAAAEHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjUwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI1MCIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MDAiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjI1MCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMTktMDYtMjNUMTc6MjQ6MjArMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDYtMjNUMTc6MjQ6MjArMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAg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", "palette": ["#f24434","#fcec3c","#62482f","#7ca44c","#523329","#8f1409"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/seabattle/instructions.md");
function cov_il3m23o1() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/index.ts";
  var hash = "468b962ed719272ed4c5e1d1ca8865a81f26f55a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 42
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "3": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 34
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 32
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "468b962ed719272ed4c5e1d1ca8865a81f26f55a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_il3m23o1 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_il3m23o1();
const Thumbnail = (cov_il3m23o1().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/seabattle/media/thumbnail.png?lqip-colors"));


const seabattleGameDef = (cov_il3m23o1().s[1]++, {
  code: 'seabattle',
  name: 'Sea Battle',
  imageURL: Thumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }],
  description: 'Similar to Battleship',
  descriptionTag: `Play Sea Battle, a free online game similar\
 to Battleship. You can play single-player against the computer\
 or multi-player against a friend online.`,
  instructions: {
    videoId: 'q0qpQ8doUp8',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_il3m23o1().f[0]++;
    cov_il3m23o1().s[2]++;
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/seabattle/config.ts"));
  },
  aiConfig: () => {
    cov_il3m23o1().f[1]++;
    cov_il3m23o1().s[3]++;
    return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/seabattle/ai.ts"));
  }
});

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

/***/ "./src/games/seabattle/media/thumbnail.png?lqip-colors":
/*!*************************************************************!*\
  !*** ./src/games/seabattle/media/thumbnail.png?lqip-colors ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-b14b46c1846c8b5b97d078f4ef1e1809.png", "palette": ["#051e2f","#2e4250","#bcbcbc","#546c84","#87c6f2","#1893e6"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

/***/ }),

/***/ "./src/games/secretcodes/index.ts":
/*!****************************************!*\
  !*** ./src/games/secretcodes/index.ts ***!
  \****************************************/
/*! exports provided: secretcodesGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretcodesGameDef", function() { return secretcodesGameDef; });
/* harmony import */ var _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/secretcodes/instructions.md");
function cov_t3yv1o290() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/secretcodes/index.ts";
  var hash = "362bc5730d221b14205ed03d84c404be1f3f824b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/secretcodes/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 44
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 34
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "362bc5730d221b14205ed03d84c404be1f3f824b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_t3yv1o290 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_t3yv1o290();
const Thumbnail = (cov_t3yv1o290().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/secretcodes/media/thumbnail.png?lqip-colors"));


const secretcodesGameDef = (cov_t3yv1o290().s[1]++, {
  code: 'secretcodes',
  name: 'Secret Codes',
  imageURL: Thumbnail,
  modes: [{
    mode: _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }, {
    mode: _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }],
  minPlayers: 4,
  maxPlayers: 20,
  description: 'Similar to Codenames',
  descriptionTag: `Play Secret Codes, a free online game\
 similar to the board game Codenames! You can play multi-player\
 from four and up to twenty players online!`,
  instructions: {
    videoId: 'zQVHkl8oQEU',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_t3yv1o290().f[0]++;
    cov_t3yv1o290().s[2]++;
    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/secretcodes/config.ts"));
  }
});

/***/ }),

/***/ "./src/games/secretcodes/instructions.md":
/*!***********************************************!*\
  !*** ./src/games/secretcodes/instructions.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Secret codes is a game similar to codenames. The game has two teams, blue and red, and withing each team there is a leader.\n\nOnly the leaders know which cards need to be selected by their teammates. However, leaders can only give a word and a number as a clue to their team\n\nThe objective is for the rest of the team to figure out all their secret words before the competing team does. And they need to be careful, choosing a black card will lead to immediately losing the game!");

/***/ }),

/***/ "./src/games/secretcodes/media/thumbnail.png?lqip-colors":
/*!***************************************************************!*\
  !*** ./src/games/secretcodes/media/thumbnail.png?lqip-colors ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-dd5d948db9ea9c4eb7078a51cc7936f8.png", "palette": ["#f45c5c","#147c9c","#9fd2c0","#58b0ad","#fc7c7c","#116b87"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/takesix/instructions.md");
function cov_1m5rjxs1tu() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/takesix/index.ts";
  var hash = "54c648cf9cf1abe881712560986fa72325f82313";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/takesix/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 40
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "3": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 34
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 32
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "54c648cf9cf1abe881712560986fa72325f82313"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1m5rjxs1tu = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1m5rjxs1tu();
const Thumbnail = (cov_1m5rjxs1tu().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/takesix/media/thumbnail.png?lqip-colors"));


const takesixGameDef = (cov_1m5rjxs1tu().s[1]++, {
  code: 'takesix',
  name: 'Take 6!',
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }],
  minPlayers: 2,
  maxPlayers: 10,
  description: 'Similar To 6 Nimmt!',
  descriptionTag: `Play Take 6!, a free online game similar\
 to 6 Nimmt. You can play multi-player from two and up to\
 ten players online!`,
  instructions: {
    videoId: 'fF0lnDygoes',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_1m5rjxs1tu().f[0]++;
    cov_1m5rjxs1tu().s[2]++;
    return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/takesix/config.ts"));
  },
  aiConfig: () => {
    cov_1m5rjxs1tu().f[1]++;
    cov_1m5rjxs1tu().s[3]++;
    return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/takesix/ai.ts"));
  }
});

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

/***/ "./src/games/takesix/media/thumbnail.png?lqip-colors":
/*!***********************************************************!*\
  !*** ./src/games/takesix/media/thumbnail.png?lqip-colors ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-f49c0fd2f1f6fc2aabfb8f46927ae2f2.png", "palette": ["#040404","#e2b70d","#e44c3c","#747ca4","#786c14","#861d12"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

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
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/tictactoe/instructions.md");
function cov_zzikxhsim() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/index.ts";
  var hash = "55fcd16e8a947d1e3e7e839abf3edac79f36006f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 7,
          column: 42
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "2": {
        start: {
          line: 30,
          column: 16
        },
        end: {
          line: 30,
          column: 34
        }
      },
      "3": {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 31,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 30,
            column: 10
          },
          end: {
            line: 30,
            column: 11
          }
        },
        loc: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 34
          }
        },
        line: 30
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 13
          }
        },
        loc: {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 31,
            column: 32
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "55fcd16e8a947d1e3e7e839abf3edac79f36006f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_zzikxhsim = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_zzikxhsim();
const Thumbnail = (cov_zzikxhsim().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/tictactoe/media/thumbnail.png?lqip-colors"));


const tictactoeGameDef = (cov_zzikxhsim().s[1]++, {
  code: 'tictactoe',
  name: 'Tic-Tac-Toe',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI,
    extraInfo: {
      type: 'dropdown',
      options: ['Easy', 'Hard']
    }
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'A Classic Game',
  descriptionTag: `Play Tic-Tac-Toe (also called Noughts and Crosses) for\
 free online. You can either play a single-player game against the computer,\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    videoId: 'USEjXNCTvcc',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_zzikxhsim().f[0]++;
    cov_zzikxhsim().s[2]++;
    return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/tictactoe/config.ts"));
  },
  aiConfig: () => {
    cov_zzikxhsim().f[1]++;
    cov_zzikxhsim().s[3]++;
    return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/tictactoe/ai.ts"));
  }
});

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

/***/ "./src/games/tictactoe/media/thumbnail.png?lqip-colors":
/*!*************************************************************!*\
  !*** ./src/games/tictactoe/media/thumbnail.png?lqip-colors ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-376f6c205eadc2c03c42a1a234193a74.png", "palette": ["#8d8d8d","#fb041c","#583b3d","#096315","#7c7c7c","#fc7c88"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

/***/ }),

/***/ "./src/games/tictactoeplus/index.ts":
/*!******************************************!*\
  !*** ./src/games/tictactoeplus/index.ts ***!
  \******************************************/
/*! exports provided: tictactoeplusGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tictactoeplusGameDef", function() { return tictactoeplusGameDef; });
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/tictactoeplus/instructions.md");
function cov_zu4f3k0y1() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoeplus/index.ts";
  var hash = "a5dee86870469cefedf5c4cc953f5367002248ff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoeplus/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 46
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "2": {
        start: {
          line: 28,
          column: 16
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "3": {
        start: {
          line: 29,
          column: 18
        },
        end: {
          line: 29,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 11
          }
        },
        loc: {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 34
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 13
          }
        },
        loc: {
          start: {
            line: 29,
            column: 18
          },
          end: {
            line: 29,
            column: 32
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a5dee86870469cefedf5c4cc953f5367002248ff"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_zu4f3k0y1 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_zu4f3k0y1();
const Thumbnail = (cov_zu4f3k0y1().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/tictactoeplus/media/thumbnail.png?lqip-colors"));


const tictactoeplusGameDef = (cov_zu4f3k0y1().s[1]++, {
  code: 'tictactoeplus',
  name: 'Tic-Tac-Toe-Plus',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: Thumbnail,
  modes: [{
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI,
    extraInfo: {
      type: 'dropdown',
      options: ['Easy', 'Hard']
    }
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  description: 'A new variant with a plus',
  descriptionTag: `Play Tic-Tac-Toe-Plus for\
 free online. You can either play a single-player game against the computer,\
 a multi-player game against a friend online, or share your device and play\
 locally against a friend.`,
  instructions: {
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_zu4f3k0y1().f[0]++;
    cov_zu4f3k0y1().s[2]++;
    return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/tictactoeplus/config.ts"));
  },
  aiConfig: () => {
    cov_zu4f3k0y1().f[1]++;
    cov_zu4f3k0y1().s[3]++;
    return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./ai */ "./src/games/tictactoeplus/ai.ts"));
  }
});

/***/ }),

/***/ "./src/games/tictactoeplus/instructions.md":
/*!*************************************************!*\
  !*** ./src/games/tictactoeplus/instructions.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Tic-Tac-Toe Plus (ttt+) is a 4x4 variant of the classic two-player Tic-Tac-Toe game.  While the 4x4 variant of Tic-Tac-Toe is considered to be biased and frequently lead to a draw, Tic-Tac-Toe **Plus** introduces a wildcard symbol (namely the *plus* symbol), which represents both a circle **and** a cross.\n\nEach time a player takes their turn, there is a 1-in-6 chance of a wildcard symbol being placed.  \n\nNote: The wildcard (the plus) can appear up to a maximum of three times per game.\n\n\n");

/***/ }),

/***/ "./src/games/tictactoeplus/media/thumbnail.png?lqip-colors":
/*!*****************************************************************!*\
  !*** ./src/games/tictactoeplus/media/thumbnail.png?lqip-colors ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAIAAADYySIZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABj5SURBVHhe7Z09stzG1YYRKmBwA/9lVmaFdwfmDqyAubkDcwdiyMBVcuSUXsEnRU6ljKGYKTQDVykkq7wAfW9Nj26NgBmg0T/nHEw/T52iyBEGaLw88xAXaGAmAAAAaMPXX3/98wn95vwS9IfYXSB2GAja3QVid4HYYSBodxeI3QVih4Gg3V0gdheIHQaCdneB2F0gdhgI2t0FYneB2GEgaHcXiN0FYoeBoN1dIHYXiB0GgnZ3gdhdIHYYCNrdBWJ3gdhhIGh3F4jdBWKHgaDdXSB2F4gdBoJ2d4HYXSB2GAja3QVid4HYYSBodxeI3QVih4Gg3V0gdheIHQaCdneB2F0gdhgI2t0FYneB2GEgaHcXiN0FYoeBoN1dIHYXiB0GgnZ3gdhdIHYYCNrdBWJ3gdhhIGh3F4jdBWKHgaDdXSB2F4gdBoJ2d4HYXSB2GAja3QVid+EwsX8+TX+epr9N01ca9DR9d6r/TNPPp1/TH/W6/q+W0ZJaHp54OP83LjYjNG53Yk8cxjL3RfTYH0/K/uEk8b2ld+m9WsPgfDFNP03Tq/OfIqKxaYQaZ28s253Yn4humTslaOx/maa30/Rx4euy0nq0Nq1zQP50+gCnHPQzTUA0qjQ8jVOj7YpZuxP7JUEtc++Ei/2vv5xs6VFas9Y/Dn+8UEyqaKJ5UkwqjVZj7odNuxP7jHCWGYNAsT8/nTe/7LlOpa1oW3ePPq5X/5mMI5qZYlJpzP1EY9DuxL4kkGVGIkTsj1Zavyxt8Y5Px99STKoIormqmFT9RNO73Yn9KiEsk82zF28eXv17vbTMeenA+Meuzc6azLIO0Gv7WVdMKl/RrCgmlcb/+/OyLena7sR+C3/L7EHu/t0//7deWua8dGA8Y3/wOGBflsYQf8paPvpwbiomlZdoNhWT6scOounX7sS+gqdl9oPca3ksneDYozSS+zhFo4+lPpyzvVspe9FkKiZVc9F0andiX8fNMkUg9yqet5vm2Ko0nqNfZf1sp2JSWU7E1rZmW98s7ZH2qxU92p3YN/GxTCnIvZyXi06KUxrbodl1gPZUNgeSEcbWqd2JfR0Hy1SA3AuJbPZU+L0HQUbVr92JfQVry9SB3Et4vmijsvo0Td+f6l/T9Pr0a/rjbLHiOvr5mWiiiTOeru1O7LcwtUw1yH03j3Xn2T+cJP7leWVraBktqeVna8gvjfPo11fjfLDjjET0bndiv4qdZVqA3PfxUDE3RqYuU63epffO1pZZGu3R50dG+HiHUowwaHdiX2JkmUYg932UzWeXmuuf3Ks1fLtYc05pzEfH90MeTTHCpt2JfYaRZRqB3Hfwj0Unbdb71ie+tTatc7aVzdLIj47XRz2gYoSZZYj9ErPYm4Dccym4iKoD9k4UnKU5+sVVYf+Bj6kYYWkZYn/CMvZ6kHsue0/I9L65Y+8NHXdwckZYfuzDKkYYW4bYE8axV4Lcs9h12P4pbzJMPdqKtjXb+krdwcG7sPnwR1aMsLcMsQv72GtA7lnsmiFjY/aEtjXb+kppL+6D3goIrhjhYhlid4m9GOS+za6bUS0ftZHYdX7m6LetPtFPBPEVI7wsQ+wusZeB3LfJfAKqqt8V1HXyr69qX+6GHjo4hGKEo2WI3SX2ApD7BvmH7e/P7/Ahf37k3Ry8i7ZSOIpihK9liN0l9r0g9w3yD4p9b/TPv+Tr9eNFJ1qp4UCKEe6WIfbzS4FB7htkPkYmgjEz/x3SHt0Z9YI4lmJEBMsQe3CQ+xr5h8P1TxeoR2OYjepW3cecyEtqNHE4xYggliH2yCD3NTKfNxDn5v7DDbghZbL4v8UrOeWrGBHHMsQeFuS+RuY8mQiH7YnHxdiu1j3NmbmkTDR7y10xIpRliD0myP0mmWc5PpwXj0Lm89/j/IPUlt6iiaAYEc0yxB4Q5H6TzJs/o53iyDwzY3kbrTH9RBNEMSKgZYi9Cc9evJFwm9Rv/v7fmcqXpWVm7youjfy8D61pH/vrRZNdrWiWzPw3SXt3x/QQTRzFCAPLFEDs9ciSM/8W128XrywrZ5nM0sjP+9Ca9rFnyj0gsxFerfuWu2grmlCKEQaWKYPYK0HuS9rHnjNtPNoJ90TOafc7u5XpKq1EE00xwsAyxRB7Dch9SfvYv19027K0TECOO/Lm1IsmoGKEgWVqIPZikPuS9rEj9/ugRjQxFSMMLFMJsZeB3Je0jz3nwQMx7wbKmTBzfw8hWKHslhm9KywGlqmH2AtA7kvaxz7ruasV87LkcS8F94BDSBeIvQzkvqR97LOGu1rIPTg1ikkVUzQGlqmB2ItB7kvax84596NTr5hUAUVjYJliiL0G5L6kfezI/dC0UkyqaKIxsEwZxF4Jcl/SPvZvF622rJhfOZ3zvLP7nufeVjGpQonGwDIFEHs9yH1J+9iPe+Z6NsKrFfNqQRN6KCZVHNEYWGYvxN4Eni2zpH3smXKP9sUXmV8wcq9y76eYVEFEY2CZXRB7QCTcmcqXpWXOSwemfeyZX43NUyHj0FsxqSKIJpRliD0myP0mB/3ii8wvGPH9Ou8elCmGrwSqhNjDgtzXONwXXxz0C0bqKVNMkkXNe70IYhlijwxyXyPzFEec89eZ1wliPjWhmHpNHE40ESxD7MFB7mtkfvHFxxgH7xpDzvNwVPd0wr2VII4lGnfLEPv5pcAg9w0+LRrrakWYNp7zAHqV9uhuaKuGA4nG1zLE7hL7XpD7Bjm3MqXyPXjPPNuu0h7dBz2kcBTROFqG2F1iLwC5b5A5IVL1zfkdPny3GM+t0h7dAf10cAjReFmG2F1iLwO5b/CQfWZG5XWh8u1iJLdK+6I9Ojq9RRBfNC6WIXaX2ItB7tvkH7yr7I+Lgw+vOTYKCC4ae8sQu7CPvQbknkXmhPdUlvcHZd5pleoOprdbfvgji8bYMsSeMI69EuSexa6j449WftdWMuc+pjr6DEj7j31Y0VhahtifsIy9HuSeS85D0i+r9wmQXf/eqI7+AHevD3xM0ZhZhtgvMYu9Ccg9l8ynLV5Wv79/rXm2rc2K9vTKXfh+1AOKxsYyxD7DJvZWIPcdZN4ldFnftJ7/rrVpnbOtbNahv5ojwoc8mmgM2p3Yl1hYph3IfQcP0/R+0Uk59fb03kq0hvwpj5elMR+XOB/vUKLp3e7EfhULy7QDue9j17T3y/o4TV+VHsXrXXrvrmunT/Whxb8rXoT6YIs44+na7sR+CyPLNAK57+ax1O+pftBY86bTaBktqeVna8gvjdNm3k4PoikmEWRU/dqd2Fews0wLkHsJe2eq3KrvTvXN6cA8lX6fXpwtWVbHnfsYUzGJCGPr1O7Evo6pZapB7oVkPjndsY77LamfTdOPi93ZrFfnd1ugbc22vlnaI+1XK3q0O7FvYm2ZOpB7OZH9flyzJ36/UzQ2B4+X7DqQ1L5ojxrSqd2JfR0Hy1SA3Kt4WXf+vUdpPL3vn7JBH8vM74O1V0wiUzTNFSP6tTuxr+BjmVKQey2V11fb1qGvoC75Y4ZovBST2BSNxt9cMaJruxP7LdwsUwRyb0Dx/Pe2pTEcd9bjLdZF46uYxIpoNHKNvwe9253Yr+Jpmf08e/FG7l4vLXNeOjDOscuqBfevNqxD34O6zi3RRFBM4qpo+ilGGLQ7sS9xtsyohIj9+f7ni9WXtnjo58bkoI/rT7/e6ziKScxEo9H2U4ywaXdinxHCMuMRKPaXO5//Xlzayn1cO83hTxeiiaaYxJNoNE6Ntitm7U7slwSyzEiEi/1VzwutWrPl/OIgfHH6AEfecY1NI9Q4e2PZ7sT+RDjLjEHE2B9ObfftQs01pbVpnfd34TST+DtuM0Ljdif2RETLDED02L88XfMsO12jd+m9R/8eJWgIlnGB2F04TOyPp0Pv16f6/lSX0yj1+/RiWkBL3tO8dWgFlnGB2F0gdhgI2t0FYneB2GEgaHcXiN0FYoeBoN1dIHYXiB0GgnZ3gdhdIHYYCNrdBWJ3gdhhIGh3F4jdBWKHgaDdXSB2F4gdBoJ2d4HYXSB2GAja3QVid4HYYSBodxeI3QVih4Gg3V0gdheIHQaCdneB2F0gdhgI2t0FYneB2GEgaHcXiN0FYoeBoN1dIHYXiB0GgnZ3gdhdIHYYCNrdBWJ3gdhhIGh3F4jdBWKHgaDdXSB2F4gdBoJ2d4HYXSB2GAja3QVid4HYYSBodxeI3QVi9+Q12PLu3bvU7vrN+SXoD7G7QOwunOWeogcAgPsAuQMA3CFnuZ+P48EKflB1gdhdIHYXznIHY7jE5AKxu0DsMBC0uwvE7gKxw0DQ7i4QuwvEDgNBu7tA7C4QOwwE7e4CsbtA7DAQtLsLxO4CscNA0O4uELsLxA4DQbu7QOwuEDsMBO3uArG7QOwwELS7C8TuArHDQNDuLhC7C8QOA0G7u0DsLhA7DATt7gKxu0DsMBC0uwvE7gKxw0DQ7i4QuwvEDgNBu7tA7C4QOwwE7e4CsbtA7DAQtLsLxO4CscNA0O4uELsLxA4DQbu7QOwuEDsMBO3uArG7QOwwELS7C8TuArHDQNDuLhC7C8QOq3w+TX+epr9N01dqlmn67lT/maafT7+mP+p1/V8toyW1fGAO0+7EDtUQO1zj8eSOH0422Vt6l96rNcQjersTewsezv+Ni80Io3c7mPKXaXo7TR8X4igrrUdr0zrDELTdib0dX0zTT9P06vyniGhsGqHG2Zug3Q7W/PWXn/p7lNas9QcgXLsTe1OS2dPex/S7RpWGZ+D3cN0O1jw/ncBNHde1tBVty5VA7U7srfn8wuypovn9yeypNNqu10oCdTtY82jll8vSFv3OC4dod2LvgCx59UegOH6fmT2VxtzP7yG6HRzQX/es0SzLqdn8253YO3DL7Kki+P2q2VP187t/t+/h2Ys3D6/+vV5a5rw0XOfB48hxWRqD+bQGz3Yn9j6xr5s9la/fV8yeSuP/w3nZlnh2+37k7t/983/rpWXOS8MV9LN52Uy7HqWR2J4rcGt3Yu8Tu5y4afZUXn7fNHuqHzv43a3bi0DudTxvN9+uVWk8hpf7fNqd2PvELhvKibM9Wyl7v2eaPVVzv/t0eynIvYKXi26KUxqbCQ7tTux9Yv9sp9lTWfp9l9lTaY+0X61w6PYKkHspkRWTykQ01u1O7Cc6xV5gT5WN3yOMzbrb60DuRegH8FkTldWnafr+VP+aptenX9MfZ4sVV/8TBabtTuy/0C/2mH4PMirTbq8Gue/nse6E74eTTb48r2wNLaMltfxsDfmlcXa+0GfX7sR+QdfYo/k9znjsur0FyH0nDxWTNKSMss+83qX3ztaWWRptz4l6Ru1O7L+md+xxfBpnJMKo2xuB3HdSNrFajqi/rUJr+Hax5pzSmLth1O7E/msMYo9g1VBmF0bd3gjkvod/LPpos963PgOrtWmds61slkbeB4t2J/YFNpbxdWs0swub2FuB3LPRx3vWR5ulI8dOFJwuaCu7X+je7sR+DTPLeBk2oNmFWexNQO7Z7D0z0LvR9rZ/n7ME3dud2K9haZm9e5yq5u/BfouZWMZeD3LPY9fx46e8WRn1aCva1mzrK9XhKLJvuxP7DYwtY2nbsGYXxrFXgtzz2DVVw0YxCW1rtvWV0l60pm+7E/sN7C1j49zIZhf2sdeA3DPYdVekWaM9sesD0fr+yY7tTuy3cbHMrj1+qvy/md7rr8cl9mKQewaZT8lT9buUt07+hT7tS1M6tjux38bLMv38G9/swiv2MpD7FvnHj+/P7/Ahf6Je06PIXu1O7Ks4WqaHhQ9hduEYewHIfYv8o7POd5xvkH/tselxbq92J/ZVfC3T1sVHMbvwjX0vyH2LzOeZNP3oFpIpRO1RO3q1O7Gv4m6ZVkY+kNmFe+y7QO6r5B+X1d/mXo/GMBvVrWo3Oa9LuxP7FhEsU+/lY5ldRIg9H+S+SuaN793uMt+N+YC7tDuxbxHEMjV2PpzZRZDYM0Huq2RO2Ihw/Jh4XIztarWbvNGl3Yl9iziWKXP0N4tXcsrX7CJO7Dkg99tk/rj94bx4FDIfRN7IjO3bndgzCGWZMr/vLXezi1Cxb4Lcb5N5F2KckwOJzFMEje7nbN/uxJ5BNMv09nsEs4tosa+D3G/zetFiV6vRx7UZmXLU3rWgfbsTewYBLdPP70HMLgxif/bijYTbpH7z9//OVL4sLTN7V3Fp5Od9OACZlgnIbIRX6+hyD8hshFfrfuUuevg9jtmFQeyy5My/xfXbxSvLylkmszTy8z4cgJz5y9HO/CZyzv82miHevt2JPQMDy5TR1u+hzC4MYkfuJuR8Hb6WCYjhyNu3O7FnYGCZYlr5PZrZhUHsyN0ELJNB+3Yn9gwMLFNDvd8Dml0YxI7cTci5Az7anI1EzsyNRnfDt293Ys/AwDKV1Pg9ptmFQezI3YRZx12tRtfHGmN4TbJ9u88GebWIPbzcRdmdSnpXWAxiR+4mzJruamEZ5P4Ecr+AI/cykLsJnPzNoH27E3sGBpapocbsqWL63SB25G4ClsmgfbsTewYGlimm3uypAvrdIHbkbsK3i3ZbVofvPm5AzoO3wk64JvYMDCxTRiuzp4rmd4PYkbsJhqdQGzMb4dVqdNq6fbsTewYGlimgrdlThfK7QezI3YRMy7T7BoY2ZH7TxdHlTuxtY6+mh9lTxfG7Qew8W8aEzO9ojjbnOme2tSrs4wmJPQMDy+yin9lTBfF7tNjXkXBnKl+WljkvPRbm38DQhsxvumj0vdLt253YMwhlmd5mTxXB76Fi3wS5r2L7DQwNMP+miy7tTuxbxLFMmdn5JiYDkPsqmT9rNzqR2oDME9btzml0aXdi3yKIZcrMnhxd814vgsSeCXJfJfMbGD7GOIrUGHIezKJq900XXdqd2LeIYJl6Ox/O7xFizwe5b/Fp0VxXq9H85SpynoSu0h61o1e7E/sq7pZp5eVj+d099l0g9y1y7qlJ5XsUqa3PxnOrtEft6NXuxL6Kr2XaGvlAfveNfS/IfYvMmXkq38fZfbcYz63SHrWjV7sT+yqOlunh4qP43TH2ApD7Fg/ZpwhU7a6Y7ePtYiS3SvuiPWpHr3Yn9lW8LNPPwofwu1fsZSD3DPKPIlVND9CycB1ex3Yn9tu4WKa3f+P73SX2YpB7Hpkzr1M1ulEli8xbflK1m2f9RN92J/Yb2FvGxrzB/W4few3IPY9dh2kfrUSjrWROwkvVbireE33bndhvYGwZS+dG9rtx7JUg92xyntZ9Wb1PFOwSn6rPM9C7tzuxX8PSMva2Det3y9jrQe7ZZD7277L6NYDWPNvWZvV5jGL3dif2a5hZxsuzMf1uFnsTkPseMm9XuaxvWk/E1toKHszR7WYfi3Yn9gU2lvE1bEC/28TeCuS+h4dper/oppx6e3pvJVpD/ty7y9KYu2HR7sS+wCD2CG6N5neLbm8Hct+JPur5868v6+M0fVV6OKl36b27LuI91YcWgruNUbsT+6/pHXscq4byu1G3NwK57+exVDSpflCP5M3r0DJaUsvP1pBfGmfnCSR27U7sF3SNPZRPRZzx2HV7C5B7EXunTNyq7071zekIMZV+n16cLVlWHSbhzTBtd2L/hX6xRzN7IsioTLu9GuReSuYjvB3L5HHn1u1O7Cc6xR7T7IkIY7Pu9jqQewWRRWOiGOHQ7sTeJ/bPpunHxQ5tlo3ZEwV+1x5pv1rh0O0VIPc6XtadCO5RGk/vG3ku8Gl3Yu8T+x92+t3S7Ildfte+aI8a4tPtpSD3aiov9LUtjaTzpbwZbu1O7H1ilw0zv+vb3uyJTL83N7tw6/YikHsLHkonYrctjaHn9LureLY7sfeJ/fMMv3uZPbHpd42/udmFZ7fvB7k3Qh/vghspG1a3myHXcW53Yu8T+7rffc2eWPG7Rl52Y8Mmzt2+k2cv3sjd66VlzkvDBs/3P+iqvrTFPg8wySFEuxN7B275PYLZE1f93s/sIkS3gycvdz6IvLi0FcOLeFcJ1O7E3hpZ8qdf73ocsydmftdo+5ldBOp28ER91++Kn9Yc43MWrt2JvSlfXPg9xq7P0ajS8DROjbYr4bod3Hg4tV7+F/nnlNamdZpfwbtFxHYn9qYkv2vvw6KxGZhdROx28OfL08W3svMGepfe2/+m9gKitzuxtyDMP2o3sRlh9G4HZx5PRxqvT/X9qS7n8+n36cW0gJa0nUC9l8O0O7FDNcQOA0G7u0DsLhA7DATt7gKxu0DsMBC0uwvE7gKxw0DQ7i4QuwvEDgNBu7tA7C4QOwwE7e4CsbtA7DAQtLsLxO4CscNA0O4uELsLxA4DQbu7QOwuEDsMBO3uArG7QOwwELS7C8TuArHDQNDuLhC7C8QOA0G7u0DsLhA7DATt7gKxu0DsMBC0uwvE7gKxw0DQ7i4QuwvEDgNBu7tA7C4QOwwE7e4CsbtA7DAQtLsLxO4CscNA0O4uELsLxA4DQbu7QOwuEDsMBO3uArG7QOwwELS7C8TuArF78hpseffuXWp3/eb8EvSH2F0gdgdev/5/oKDSFlakmDIAAAAASUVORK5CYII=", "palette": ["#04e704","#939393","#1a1818","#0c5688","#029602","#7cfc7c"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

/***/ }),

/***/ "./src/games/zooparade/index.ts":
/*!**************************************!*\
  !*** ./src/games/zooparade/index.ts ***!
  \**************************************/
/*! exports provided: zooParadeGameDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zooParadeGameDef", function() { return zooParadeGameDef; });
/* harmony import */ var _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _instructions_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.md */ "./src/games/zooparade/instructions.md");
function cov_18t7temb9g() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/zooparade/index.ts";
  var hash = "2b1e8b6b82efe5e6b8b0013e18cd8e654a7ccd5c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/zooparade/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 62
        }
      },
      "1": {
        start: {
          line: 6,
          column: 42
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 16
        },
        end: {
          line: 22,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 10
          },
          end: {
            line: 22,
            column: 11
          }
        },
        loc: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 34
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2b1e8b6b82efe5e6b8b0013e18cd8e654a7ccd5c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_18t7temb9g = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_18t7temb9g();
const Thumbnail = (cov_18t7temb9g().s[0]++, __webpack_require__(/*! ./media/thumbnail.png?lqip-colors */ "./src/games/zooparade/media/thumbnail.png?lqip-colors"));


const zooParadeGameDef = (cov_18t7temb9g().s[1]++, {
  code: 'zooparade',
  name: 'Zoo Parade',
  imageURL: Thumbnail,
  modes: [{
    mode: _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend
  }, {
    mode: _components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend
  }],
  minPlayers: 2,
  maxPlayers: 5,
  description: 'A cooperative game where the Team wins!',
  descriptionTag: `Tag for Zoo Parade TODO`,
  instructions: {
    videoId: 'LQ8iwNjBW_s',
    text: _instructions_md__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  config: () => {
    cov_18t7temb9g().f[0]++;
    cov_18t7temb9g().s[2]++;
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./config */ "./src/games/zooparade/config.ts"));
  }
});

/***/ }),

/***/ "./src/games/zooparade/instructions.md":
/*!*********************************************!*\
  !*** ./src/games/zooparade/instructions.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Zoo Parade is a coopoerative game for two to five players. This game combines perfectly the concepts of cooperation and partial information. The unique point: You know all cards, buy your own!\n\nThe game gets more difficult, the more players you are - but at the same time this is when its most fun!\n\nThank you for the [Art](https://www.freepik.com/free-vector/cute-zoo-animals-card-set_4855079.htm).");

/***/ }),

/***/ "./src/games/zooparade/media/thumbnail.png?lqip-colors":
/*!*************************************************************!*\
  !*** ./src/games/zooparade/media/thumbnail.png?lqip-colors ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lqip = { "src": "/_next/static/images/thumbnail-4428ff555bec5e85610fe43eb76246b9.png", "palette": ["#040404","#929f6b","#f2e77a","#bcb4a4","#faab2d","#4c240c"] }; module.exports = lqip.palette; module.exports = Object.assign(module.exports, lqip);

/***/ }),

/***/ "./src/hooks/useWindowDimensions.ts":
/*!******************************************!*\
  !*** ./src/hooks/useWindowDimensions.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function cov_2gr5onh2wh() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/hooks/useWindowDimensions.ts";
  var hash = "4f114065dc7cb63bff1107bea751cd3943287ae8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/hooks/useWindowDimensions.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 49
        }
      },
      "1": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 54
        }
      },
      "2": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 56
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "4": {
        start: {
          line: 17,
          column: 50
        },
        end: {
          line: 17,
          column: 81
        }
      },
      "5": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 27,
          column: 18
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "7": {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "8": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 51
        }
      },
      "9": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 54
        }
      },
      "10": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 70
        }
      },
      "11": {
        start: {
          line: 25,
          column: 19
        },
        end: {
          line: 25,
          column: 69
        }
      },
      "12": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "useWindowDimensions",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 43
          }
        },
        loc: {
          start: {
            line: 5,
            column: 46
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "getWindowDimensions",
        decl: {
          start: {
            line: 8,
            column: 11
          },
          end: {
            line: 8,
            column: 30
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 23,
            column: 7
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 25,
            column: 13
          },
          end: {
            line: 25,
            column: 14
          }
        },
        loc: {
          start: {
            line: 25,
            column: 19
          },
          end: {
            line: 25,
            column: 69
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 47
          }
        }, {
          start: {
            line: 9,
            column: 50
          },
          end: {
            line: 9,
            column: 54
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 31
          },
          end: {
            line: 10,
            column: 49
          }
        }, {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 10,
            column: 56
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4f114065dc7cb63bff1107bea751cd3943287ae8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2gr5onh2wh = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2gr5onh2wh();
// https://stackoverflow.com/a/59185109

function useWindowDimensions() {
  cov_2gr5onh2wh().f[0]++;
  const hasWindow = (cov_2gr5onh2wh().s[0]++, false);

  function getWindowDimensions() {
    cov_2gr5onh2wh().f[1]++;
    const width = (cov_2gr5onh2wh().s[1]++, hasWindow ? (cov_2gr5onh2wh().b[0][0]++, window.innerWidth) : (cov_2gr5onh2wh().b[0][1]++, null));
    const height = (cov_2gr5onh2wh().s[2]++, hasWindow ? (cov_2gr5onh2wh().b[1][0]++, window.innerHeight) : (cov_2gr5onh2wh().b[1][1]++, null));
    cov_2gr5onh2wh().s[3]++;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = (cov_2gr5onh2wh().s[4]++, Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions()));
  cov_2gr5onh2wh().s[5]++;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    cov_2gr5onh2wh().f[2]++;
    cov_2gr5onh2wh().s[6]++;

    if (hasWindow) {
      cov_2gr5onh2wh().b[2][0]++;
      cov_2gr5onh2wh().s[7]++;

      const handleResize = () => {
        cov_2gr5onh2wh().f[3]++;
        cov_2gr5onh2wh().s[8]++;
        setWindowDimensions(getWindowDimensions());
      };

      cov_2gr5onh2wh().s[9]++;
      window.addEventListener('resize', handleResize);
      cov_2gr5onh2wh().s[10]++;
      return () => {
        cov_2gr5onh2wh().f[4]++;
        cov_2gr5onh2wh().s[11]++;
        return window.removeEventListener('resize', handleResize);
      };
    } else {
      cov_2gr5onh2wh().b[2][1]++;
    }
  }, [hasWindow]);
  cov_2gr5onh2wh().s[12]++;
  return windowDimensions;
}

/***/ }),

/***/ "./src/pages/play/[gameCode]/GameInfo.tsx":
/*!************************************************!*\
  !*** ./src/pages/play/[gameCode]/GameInfo.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_App_FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/App/FreeBoardGamesBar */ "./src/components/App/FreeBoardGamesBar.tsx");
/* harmony import */ var components_App_Game_GameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App/Game/GameCard */ "./src/components/App/Game/GameCard.tsx");
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var components_App_Game_GameInstructionsVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/App/Game/GameInstructionsVideo */ "./src/components/App/Game/GameInstructionsVideo.tsx");
/* harmony import */ var games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! games */ "./src/games/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_with_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-with-error */ "next-with-error");
/* harmony import */ var next_with_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_with_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_SEO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SEO */ "./src/components/SEO.tsx");
/* harmony import */ var components_DesktopMobileView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/DesktopMobileView */ "./src/components/DesktopMobileView.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_App_Game_GameInstructionsText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/App/Game/GameInstructionsText */ "./src/components/App/Game/GameInstructionsText.tsx");
/* harmony import */ var components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Breadcrumbs */ "./src/components/Breadcrumbs.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_1xqyw92v30() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/pages/play/[gameCode]/GameInfo.tsx";
  var hash = "42c402f4e9cbbde21782ef65d35b250145e72ac5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/pages/play/[gameCode]/GameInfo.tsx",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 33
        },
        end: {
          line: 22,
          column: 36
        }
      },
      "1": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 26,
          column: 38
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 74,
          column: 6
        }
      },
      "3": {
        start: {
          line: 77,
          column: 21
        },
        end: {
          line: 77,
          column: 45
        }
      },
      "4": {
        start: {
          line: 78,
          column: 30
        },
        end: {
          line: 78,
          column: 49
        }
      },
      "5": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "6": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 36
        }
      },
      "7": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 55
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }, {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }],
        line: 79
      },
      "1": {
        loc: {
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 79,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 79,
            column: 16
          }
        }, {
          start: {
            line: 79,
            column: 20
          },
          end: {
            line: 79,
            column: 23
          }
        }],
        line: 79
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42c402f4e9cbbde21782ef65d35b250145e72ac5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1xqyw92v30 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1xqyw92v30();














const DESKTOP_MOBILE_THRESHOLD = (cov_1xqyw92v30().s[0]++, 768);

class GameInfo extends (react__WEBPACK_IMPORTED_MODULE_0___default.a.Component) {
  render() {
    cov_1xqyw92v30().f[0]++;
    const gameDef = (cov_1xqyw92v30().s[1]++, this.props.gameDef);
    cov_1xqyw92v30().s[2]++;
    return __jsx(components_App_FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      FEATURE_FLAG_readyForDesktopView: true
    }, __jsx(components_SEO__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: `Play ${gameDef.name}, ${gameDef.description}`,
      description: gameDef.descriptionTag
    }), __jsx(components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__["default"], {
      itemListElements: [{
        position: 1,
        name: 'Play',
        item: '/play'
      }, {
        position: 2,
        name: gameDef.name,
        item: this.props.asPath
      }]
    }), __jsx(components_DesktopMobileView__WEBPACK_IMPORTED_MODULE_9__["DesktopView"], {
      userAgent: this.props.userAgent,
      thresholdWidth: DESKTOP_MOBILE_THRESHOLD
    }, __jsx("div", {
      style: {
        padding: '18px 8px',
        display: 'flex'
      }
    }, __jsx("div", {
      style: {
        flex: '60%',
        paddingRight: '32px'
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h4",
      component: "h1"
    }, "Play ", gameDef.name), __jsx(components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_3__["GameModePicker"], {
      gameDef: gameDef
    })), __jsx("div", {
      style: {
        flex: '55%',
        padding: '8px'
      }
    }, __jsx(components_App_Game_GameCard__WEBPACK_IMPORTED_MODULE_2__["GameCard"], {
      game: gameDef
    }), __jsx("div", {
      style: {
        marginTop: '16px'
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p"
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
      linkTarget: "_blank",
      source: gameDef.instructions.text
    }))), __jsx("div", {
      style: {
        marginTop: '32px'
      }
    }, __jsx(components_App_Game_GameInstructionsVideo__WEBPACK_IMPORTED_MODULE_4__["GameInstructionsVideo"], {
      gameDef: gameDef
    }))))), __jsx(components_DesktopMobileView__WEBPACK_IMPORTED_MODULE_9__["MobileView"], {
      userAgent: this.props.userAgent,
      thresholdWidth: DESKTOP_MOBILE_THRESHOLD
    }, __jsx(components_App_Game_GameCard__WEBPACK_IMPORTED_MODULE_2__["GameCard"], {
      game: gameDef
    }), __jsx("div", {
      style: {
        padding: '8px'
      }
    }, __jsx(components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_3__["GameModePicker"], {
      gameDef: gameDef
    }), __jsx(components_App_Game_GameInstructionsVideo__WEBPACK_IMPORTED_MODULE_4__["GameInstructionsVideo"], {
      gameDef: gameDef
    }), __jsx(components_App_Game_GameInstructionsText__WEBPACK_IMPORTED_MODULE_12__["GameInstructionsText"], {
      gameDef: gameDef
    }))));
  }

  static async getInitialProps({
    res,
    query,
    asPath
  }) {
    cov_1xqyw92v30().f[1]++;
    const gameCode = (cov_1xqyw92v30().s[3]++, query.gameCode);
    const gameDef = (cov_1xqyw92v30().s[4]++, games__WEBPACK_IMPORTED_MODULE_5__["GAMES_MAP"][gameCode]);
    cov_1xqyw92v30().s[5]++;

    if ((cov_1xqyw92v30().b[1][0]++, !gameDef) && (cov_1xqyw92v30().b[1][1]++, res)) {
      cov_1xqyw92v30().b[0][0]++;
      cov_1xqyw92v30().s[6]++;
      return Object(next_with_error__WEBPACK_IMPORTED_MODULE_7__["generatePageError"])(404);
    } else {
      cov_1xqyw92v30().b[0][1]++;
    }

    cov_1xqyw92v30().s[7]++;
    return {
      gameDef,
      asPath
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(GameInfo));

/***/ }),

/***/ "./src/pages/play/[gameCode]/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/play/[gameCode]/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameInfo */ "./src/pages/play/[gameCode]/GameInfo.tsx");
function cov_8gco4uw6i() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/pages/play/[gameCode]/index.tsx";
  var hash = "95bec21303857e15610e834fd52160980dbf4755";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/pages/play/[gameCode]/index.tsx",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "95bec21303857e15610e834fd52160980dbf4755"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_8gco4uw6i = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_8gco4uw6i();

/* harmony default export */ __webpack_exports__["default"] = (_GameInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 4:
/*!***************************************************!*\
  !*** multi ./src/pages/play/[gameCode]/index.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/j/Documents/FreeBoardGames.org/src/pages/play/[gameCode]/index.tsx */"./src/pages/play/[gameCode]/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/colors/lightGreen":
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/lightGreen" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightGreen");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/colors/yellow":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/yellow" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/yellow");

/***/ }),

/***/ "@material-ui/icons/Android":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Android" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Android");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/Feedback":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Feedback" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Feedback");

/***/ }),

/***/ "@material-ui/icons/Flip":
/*!******************************************!*\
  !*** external "@material-ui/icons/Flip" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Flip");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/NavigateNext":
/*!**************************************************!*\
  !*** external "@material-ui/icons/NavigateNext" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/Replay":
/*!********************************************!*\
  !*** external "@material-ui/icons/Replay" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Replay");

/***/ }),

/***/ "@material-ui/icons/RotateLeft":
/*!************************************************!*\
  !*** external "@material-ui/icons/RotateLeft" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RotateLeft");

/***/ }),

/***/ "@material-ui/icons/RotateRight":
/*!*************************************************!*\
  !*** external "@material-ui/icons/RotateRight" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RotateRight");

/***/ }),

/***/ "@material-ui/icons/Wifi":
/*!******************************************!*\
  !*** external "@material-ui/icons/Wifi" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Wifi");

/***/ }),

/***/ "boardgame.io/ai":
/*!**********************************!*\
  !*** external "boardgame.io/ai" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("boardgame.io/ai");

/***/ }),

/***/ "boardgame.io/core":
/*!************************************!*\
  !*** external "boardgame.io/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("boardgame.io/core");

/***/ }),

/***/ "chess.js":
/*!***************************!*\
  !*** external "chess.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chess.js");

/***/ }),

/***/ "mobile-detect":
/*!********************************!*\
  !*** external "mobile-detect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next-with-error":
/*!**********************************!*\
  !*** external "next-with-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-error");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[gameCode].js.map