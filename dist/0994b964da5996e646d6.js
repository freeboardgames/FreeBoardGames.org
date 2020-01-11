(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.react-loadable"],{

/***/ "./node_modules/react-loadable/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-loadable/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? undefined : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }
    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({ error: null, loading: true, timedOut: false });
        res = loadFn(opts.loader);
        _this._loadModule();
      };

      init();

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;
      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({ pastDelay: true });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({ pastDelay: true });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};


Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGFibGUvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYixvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZSxZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLE1BQTBDLEdBQUcsU0FBVyxXQUFXLHFCQUFtQjtBQUM3RjtBQUNBOztBQUVBO0FBQ0EscURBQXFELHFCQUFtQjtBQUN4RSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQyxTQUFTO0FBQ1Q7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMEIiLCJmaWxlIjoiMDk5NGI5NjRkYTU5OTZlNjQ2ZDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIEFMTF9JTklUSUFMSVpFUlMgPSBbXTtcbnZhciBSRUFEWV9JTklUSUFMSVpFUlMgPSBbXTtcblxuZnVuY3Rpb24gaXNXZWJwYWNrUmVhZHkoZ2V0TW9kdWxlSWRzKSB7XG4gIGlmICgodHlwZW9mIF9fd2VicGFja19tb2R1bGVzX18gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihfX3dlYnBhY2tfbW9kdWxlc19fKSkgIT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZ2V0TW9kdWxlSWRzKCkuZXZlcnkoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBtb2R1bGVJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gIT09IFwidW5kZWZpbmVkXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkKGxvYWRlcikge1xuICB2YXIgcHJvbWlzZSA9IGxvYWRlcigpO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGxvYWRlZDogbnVsbCxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRlLnByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGxvYWRlZCkge1xuICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBzdGF0ZS5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgcmV0dXJuIGxvYWRlZDtcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gbG9hZE1hcChvYmopIHtcbiAgdmFyIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDoge30sXG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICB0cnkge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbG9hZChvYmpba2V5XSk7XG5cbiAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgc3RhdGUubG9hZGVkW2tleV0gPSByZXN1bHQubG9hZGVkO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IHJlc3VsdC5lcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdC5wcm9taXNlKTtcblxuICAgICAgcmVzdWx0LnByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVybiByZXM7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmouZGVmYXVsdCA6IG9iajtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKGxvYWRlZCwgcHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShsb2FkZWQpLCBwcm9wcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRGbiwgb3B0aW9ucykge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICBpZiAoIW9wdGlvbnMubG9hZGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlYWN0LWxvYWRhYmxlIHJlcXVpcmVzIGEgYGxvYWRpbmdgIGNvbXBvbmVudFwiKTtcbiAgfVxuXG4gIHZhciBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgbG9hZGVyOiBudWxsLFxuICAgIGxvYWRpbmc6IG51bGwsXG4gICAgZGVsYXk6IDIwMCxcbiAgICB0aW1lb3V0OiBudWxsLFxuICAgIHJlbmRlcjogcmVuZGVyLFxuICAgIHdlYnBhY2s6IG51bGwsXG4gICAgbW9kdWxlczogbnVsbFxuICB9LCBvcHRpb25zKTtcblxuICB2YXIgcmVzID0gbnVsbDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghcmVzKSB7XG4gICAgICByZXMgPSBsb2FkRm4ob3B0cy5sb2FkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnByb21pc2U7XG4gIH1cblxuICBBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdCk7XG5cbiAgaWYgKHR5cGVvZiBvcHRzLndlYnBhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIFJFQURZX0lOSVRJQUxJWkVSUy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc1dlYnBhY2tSZWFkeShvcHRzLndlYnBhY2spKSB7XG4gICAgICAgIHJldHVybiBpbml0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhMb2FkYWJsZUNvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMb2FkYWJsZUNvbXBvbmVudChwcm9wcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvYWRhYmxlQ29tcG9uZW50KTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF90aGlzLnJldHJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBudWxsLCBsb2FkaW5nOiB0cnVlLCB0aW1lZE91dDogZmFsc2UgfSk7XG4gICAgICAgIHJlcyA9IGxvYWRGbihvcHRzLmxvYWRlcik7XG4gICAgICAgIF90aGlzLl9sb2FkTW9kdWxlKCk7XG4gICAgICB9O1xuXG4gICAgICBpbml0KCk7XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBlcnJvcjogcmVzLmVycm9yLFxuICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICB0aW1lZE91dDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHJlcy5sb2FkaW5nLFxuICAgICAgICBsb2FkZWQ6IHJlcy5sb2FkZWRcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgTG9hZGFibGVDb21wb25lbnQucHJlbG9hZCA9IGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgICByZXR1cm4gaW5pdCgpO1xuICAgIH07XG5cbiAgICBMb2FkYWJsZUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5fbW91bnRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9sb2FkTW9kdWxlKCk7XG4gICAgfTtcblxuICAgIExvYWRhYmxlQ29tcG9uZW50LnByb3RvdHlwZS5fbG9hZE1vZHVsZSA9IGZ1bmN0aW9uIF9sb2FkTW9kdWxlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRleHQubG9hZGFibGUgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICAgIG9wdHMubW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICAgICAgX3RoaXMyLmNvbnRleHQubG9hZGFibGUucmVwb3J0KG1vZHVsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXMubG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5kZWxheSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZiAob3B0cy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXN0RGVsYXk6IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHBhc3REZWxheTogdHJ1ZSB9KTtcbiAgICAgICAgICB9LCBvcHRzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdGltZWRPdXQ6IHRydWUgfSk7XG4gICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghX3RoaXMyLl9tb3VudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjogcmVzLmVycm9yLFxuICAgICAgICAgIGxvYWRlZDogcmVzLmxvYWRlZCxcbiAgICAgICAgICBsb2FkaW5nOiByZXMubG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpczIuX2NsZWFyVGltZW91dHMoKTtcbiAgICAgIH07XG5cbiAgICAgIHJlcy5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgTG9hZGFibGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9tb3VudGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgfTtcblxuICAgIExvYWRhYmxlQ29tcG9uZW50LnByb3RvdHlwZS5fY2xlYXJUaW1lb3V0cyA9IGZ1bmN0aW9uIF9jbGVhclRpbWVvdXRzKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICB9O1xuXG4gICAgTG9hZGFibGVDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcsIHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZyxcbiAgICAgICAgICBwYXN0RGVsYXk6IHRoaXMuc3RhdGUucGFzdERlbGF5LFxuICAgICAgICAgIHRpbWVkT3V0OiB0aGlzLnN0YXRlLnRpbWVkT3V0LFxuICAgICAgICAgIGVycm9yOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgICAgIHJldHJ5OiB0aGlzLnJldHJ5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yZW5kZXIodGhpcy5zdGF0ZS5sb2FkZWQsIHRoaXMucHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBMb2FkYWJsZUNvbXBvbmVudDtcbiAgfShSZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICAgIGxvYWRhYmxlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcmVwb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSwgX3RlbXA7XG59XG5cbmZ1bmN0aW9uIExvYWRhYmxlKG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBMb2FkYWJsZU1hcChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxvYWRhYmxlTWFwIHJlcXVpcmVzIGEgYHJlbmRlcihsb2FkZWQsIHByb3BzKWAgZnVuY3Rpb25cIik7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZE1hcCwgb3B0cyk7XG59XG5cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwO1xuXG52YXIgQ2FwdHVyZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoQ2FwdHVyZSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIENhcHR1cmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcHR1cmUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ2FwdHVyZS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkYWJsZToge1xuICAgICAgICByZXBvcnQ6IHRoaXMucHJvcHMucmVwb3J0XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBDYXB0dXJlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIENhcHR1cmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNhcHR1cmUucHJvcFR5cGVzID0ge1xuICByZXBvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5DYXB0dXJlLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBsb2FkYWJsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByZXBvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuXG5Mb2FkYWJsZS5DYXB0dXJlID0gQ2FwdHVyZTtcblxuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzKSB7XG4gIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gIHdoaWxlIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgdmFyIGluaXQgPSBpbml0aWFsaXplcnMucG9wKCk7XG4gICAgcHJvbWlzZXMucHVzaChpbml0KCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycyk7XG4gICAgfVxuICB9KTtcbn1cblxuTG9hZGFibGUucHJlbG9hZEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gIH0pO1xufTtcblxuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmUsIHJlc29sdmUpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9hZGFibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==