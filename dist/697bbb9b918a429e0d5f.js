(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.react-dragtastic"],{

/***/ "./node_modules/react-dragtastic/build/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-dragtastic/build/index.es.js ***!
  \*********************************************************/
/*! exports provided: DragComponent, Draggable, Droppable, DragState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragComponent", function() { return DragComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return Droppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragState", function() { return DragState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var initialState = {
  x: 0,
  y: 0,
  isDragging: false,
  startingX: 0,
  startingY: 0,
  currentlyDraggingId: null,
  currentlyHoveredDroppableId: null,
  currentlyHoveredDroppableAccepts: null,
  data: null,
  type: null
};

var Store = function () {
  function Store() {
    classCallCheck(this, Store);
    this._state = initialState;
    this._callbacks = [];
  }

  Store.prototype.update = function update(payload) {
    this._state = _extends({}, this._state, payload);
    this._callbacks.forEach(function (callback) {
      return callback();
    });
  };

  Store.prototype.reset = function reset() {
    this.update(initialState);
  };

  Store.prototype.subscribe = function subscribe(callback) {
    var _this = this;

    this._callbacks = [].concat(this._callbacks, [callback]);
    return function () {
      _this._callbacks = _this._callbacks.filter(function (f) {
        return f !== callback;
      });
    };
  };

  Store.prototype.getState = function getState() {
    return this._state;
  };

  return Store;
}();

var dndStore = new Store();

var getId = function getId() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var noop = function noop() {};

var DragComponent = function (_React$Component) {
  inherits(DragComponent, _React$Component);

  function DragComponent() {
    var _temp, _this, _ret;

    classCallCheck(this, DragComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = dndStore.getState(), _this.shouldComponentUpdate = function (nextProps, nextState) {
      if (nextProps !== _this.props) {
        return true;
      } else {
        if (nextProps.subscribeTo) {
          var shouldUpdate = false;
          var i = 0;
          while (i < nextProps.subscribeTo.length - 1) {
            if (_this.state[nextProps.subscribeTo[i]] !== nextState[nextProps.subscribeTo[i]]) {
              shouldUpdate = true;
              i = nextProps.length;
            } else {
              i++;
            }
          }
          return shouldUpdate;
        } else {
          if (nextState !== _this.state) {
            return true;
          } else {
            return false;
          }
        }
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  DragComponent.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unsubscribe = dndStore.subscribe(function () {
      _this2.setState(dndStore.getState());
    });
  };

  DragComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  DragComponent.prototype.render = function render() {
    var state = this.state;
    var accepts = state.currentlyHoveredDroppableAccepts;
    var isOverDroppable = typeof state.currentlyHoveredDroppableId === "string";

    return (this.props.alwaysRender || state.isDragging && state.currentlyDraggingId === this.props.for) && this.props.children(_extends({}, state, {
      isOverAccepted: isOverDroppable ? accepts !== null ? Array.isArray(accepts) ? accepts.includes(state.type) : state.type === accepts : true : false
    }));
  };

  return DragComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DragComponent.defaultProps = {
  for: "",
  alwaysRender: false,
  subscribeTo: null
};


DragComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  for: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  alwaysRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  subscribeTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var Draggable = function (_React$Component) {
  inherits(Draggable, _React$Component);

  function Draggable() {
    var _temp, _this, _ret;

    classCallCheck(this, Draggable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      startCoordinate: null,
      storeState: _extends({}, dndStore.getState(), { isActive: false })
    }, _this.startDragDelay = function (e) {
      var x = void 0;
      var y = void 0;
      if ("ontouchstart" in window && e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        e.preventDefault();
        x = e.clientX;
        y = e.clientY;
      }
      dndStore.update({
        startingX: x,
        startingY: y
      });
      _this.setState({ startCoordinate: { x: x, y: y } });
      document.addEventListener("mouseup", _this.endDragDelay);
      document.addEventListener("mousemove", _this.checkDragDelay);
      document.addEventListener("touchend", _this.endDragDelay);
      document.addEventListener("touchmove", _this.checkDragDelay);
    }, _this.checkDragDelay = function (e) {
      var x = void 0;
      var y = void 0;
      if ("ontouchstart" in window && e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        e.preventDefault();
        x = e.clientX;
        y = e.clientY;
      }
      var a = Math.abs(_this.state.startCoordinate.x - x);
      var b = Math.abs(_this.state.startCoordinate.y - y);
      var distance = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
      var dragDistance = _this.props.delay;
      if (distance >= dragDistance) {
        _this.endDragDelay();
        if ("ontouchstart" in window && e.touches) {
          _this.startMobileDrag(e);
        } else {
          _this.startDrag(e);
        }
      }
    }, _this.endDragDelay = function () {
      document.removeEventListener("mouseup", _this.endDragDelay);
      document.removeEventListener("mousemove", _this.checkDragDelay);
      document.removeEventListener("touchend", _this.endDragDelay);
      document.removeEventListener("touchmove", _this.checkDragDelay);
      _this.setState({ startCoordinate: null });
    }, _this.startDrag = function (e) {
      dndStore.update({
        isDragging: true,
        startingX: e.clientX,
        startingY: e.clientY,
        x: e.clientX,
        y: e.clientY,
        currentlyDraggingId: _this.props.id,
        data: _this.props.data,
        type: _this.props.type
      });
      _this.props.onDragStart(dndStore.getState().data);
      window.addEventListener("mouseup", _this.stopDrag);
      window.addEventListener("mousemove", _this.updateCoordinates);
    }, _this.startMobileDrag = function (e) {
      _this.props.onDragStart(dndStore.getState().data);
      var touch = e.touches[0];
      dndStore.update({
        isDragging: true,
        startingX: touch.clientX,
        startingY: touch.clientY,
        x: touch.clientX,
        y: touch.clientY,
        currentlyDraggingId: _this.props.id,
        data: _this.props.data,
        type: _this.props.type
      });
      window.addEventListener("touchend", _this.stopDrag);
      window.addEventListener("touchmove", _this.updateMobileCoordinates);
    }, _this.stopDrag = function (e) {
      _this.props.onDragEnd(dndStore.getState().data);
      dndStore.reset();
      window.removeEventListener("mouseup", _this.stopDrag);
      window.removeEventListener("mousemove", _this.updateCoordinates);
      window.removeEventListener("touchend", _this.stopDrag);
      window.removeEventListener("touchmove", _this.updateMobileCoordinates);
    }, _this.updateCoordinates = function (e) {
      dndStore.update({
        x: e.clientX,
        y: e.clientY
      });
      _this.props.onDrag();
    }, _this.updateMobileCoordinates = function (e) {
      var touch = e.touches[0];
      dndStore.update({
        x: touch.clientX,
        y: touch.clientY
      });
      _this.props.onDrag();
    }, _this.shouldComponentUpdate = function (nextProps, nextState) {
      if (nextProps !== _this.props) {
        return true;
      } else {
        if (nextProps.subscribeTo) {
          var shouldUpdate = false;
          var i = 0;
          while (i < nextProps.subscribeTo.length - 1) {
            if (_this.state[nextProps.subscribeTo[i]] !== nextState[nextProps.subscribeTo[i]]) {
              shouldUpdate = true;
              i = nextProps.length;
            } else {
              i++;
            }
          }
          return shouldUpdate;
        } else {
          if (nextState !== _this.state) {
            return true;
          } else {
            return false;
          }
        }
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  Draggable.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unsubscribe = dndStore.subscribe(function () {
      var state = dndStore.getState();
      _this2.setState({
        storeState: _extends({}, state, {
          isActive: state.currentlyDraggingId === _this2.props.id
        })
      });
    });
  };

  Draggable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  Draggable.prototype.render = function render() {
    var state = this.state.storeState;
    return this.props.children(_extends({}, state, {
      events: {
        onMouseDown: this.startDragDelay,
        onTouchStart: this.startDragDelay
      }
    }));
  };

  return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Draggable.defaultProps = {
  id: getId(),
  data: null,
  type: null,
  delay: 8,
  onDragStart: noop,
  onDrag: noop,
  onDragEnd: noop,
  subscribeTo: null
};


Draggable.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  subscribeTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var Droppable = function (_React$Component) {
  inherits(Droppable, _React$Component);

  function Droppable() {
    var _temp, _this, _ret;

    classCallCheck(this, Droppable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, dndStore.getState(), { isOver: false }), _this.setOver = function () {
      if (dndStore.getState().isDragging) {
        dndStore.update({
          currentlyHoveredDroppableId: _this.props.id,
          currentlyHoveredDroppableAccepts: _this.props.accepts
        });
        _this.props.onDragEnter();
      }
    }, _this.setOut = function () {
      if (dndStore.getState().isDragging) {
        dndStore.update({
          currentlyHoveredDroppableId: null,
          currentlyHoveredDroppableAccepts: null
        });
        _this.props.onDragLeave();
      }
    }, _this.onDrop = function () {
      var _store$getState = dndStore.getState(),
          data = _store$getState.data,
          type = _store$getState.type,
          isDragging = _store$getState.isDragging;

      if (isDragging) {
        if (Array.isArray(_this.props.accepts)) {
          if (_this.props.accepts.includes(type)) {
            _this.props.onDrop(data);
          }
        } else {
          if (type === _this.props.accepts) {
            _this.props.onDrop(data);
          }
        }
      }
    }, _this.shouldComponentUpdate = function (nextProps, nextState) {
      if (nextProps !== _this.props) {
        return true;
      } else {
        if (nextProps.subscribeTo) {
          var shouldUpdate = false;
          var i = 0;
          while (i < nextProps.subscribeTo.length - 1) {
            if (_this.state[nextProps.subscribeTo[i]] !== nextState[nextProps.subscribeTo[i]]) {
              shouldUpdate = true;
              i = nextProps.length;
            } else {
              i++;
            }
          }
          return shouldUpdate;
        } else {
          if (nextState !== _this.state) {
            return true;
          } else {
            return false;
          }
        }
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  Droppable.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unsubscribe = dndStore.subscribe(function () {
      var state = dndStore.getState();
      _this2.setState(_extends({}, state, {
        isOver: state.currentlyHoveredDroppableId === _this2.props.id,
        willAccept: Array.isArray(_this2.props.accepts) ? _this2.props.accepts.includes(state.type) : _this2.props.accepts === state.type
      }));
    });
  };

  Droppable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  Droppable.prototype.render = function render() {
    var state = this.state;
    return this.props.children(_extends({}, state, {
      events: {
        onMouseEnter: this.setOver,
        onMouseLeave: this.setOut,
        onMouseUp: this.onDrop
      }
    }));
  };

  return Droppable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Droppable.defaultProps = {
  id: getId(),
  accepts: null,
  onDragEnter: noop,
  onDragLeave: noop,
  onDrop: noop,
  subscribeTo: null
};


Droppable.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  accepts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  subscribeTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var DragState = function (_React$Component) {
  inherits(DragState, _React$Component);

  function DragState() {
    var _temp, _this, _ret;

    classCallCheck(this, DragState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = dndStore.getState(), _this.shouldComponentUpdate = function (nextProps, nextState) {
      if (nextProps !== _this.props) {
        return true;
      } else {
        if (nextProps.subscribeTo) {
          var shouldUpdate = false;
          var i = 0;
          while (i < nextProps.subscribeTo.length - 1) {
            if (_this.state[nextProps.subscribeTo[i]] !== nextState[nextProps.subscribeTo[i]]) {
              shouldUpdate = true;
              i = nextProps.length;
            } else {
              i++;
            }
          }
          return shouldUpdate;
        } else {
          if (nextState !== _this.state) {
            return true;
          } else {
            return false;
          }
        }
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  DragState.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unsubscribe = dndStore.subscribe(function () {
      _this2.setState(dndStore.getState());
    });
  };

  DragState.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  DragState.prototype.render = function render() {
    var children = this.props.children;

    return children(_extends({}, this.state));
  };

  return DragState;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DragState.defaultProps = {
  subscribeTo: null
};


DragState.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  subscribeTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJhZ3Rhc3RpYy9idWlsZC9pbmRleC5lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0M7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FB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QUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxpREFBUztBQUNyQixlQUFlLGlEQUFTO0FBQ3hCOztBQUUwRCIsImZpbGUiOiI2OTdiYmI5YjkxOGE0MjllMGQ1Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cblxuXG5cblxuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBpc0RyYWdnaW5nOiBmYWxzZSxcbiAgc3RhcnRpbmdYOiAwLFxuICBzdGFydGluZ1k6IDAsXG4gIGN1cnJlbnRseURyYWdnaW5nSWQ6IG51bGwsXG4gIGN1cnJlbnRseUhvdmVyZWREcm9wcGFibGVJZDogbnVsbCxcbiAgY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUFjY2VwdHM6IG51bGwsXG4gIGRhdGE6IG51bGwsXG4gIHR5cGU6IG51bGxcbn07XG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RvcmUpO1xuICAgIHRoaXMuX3N0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgU3RvcmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5fc3RhdGUsIHBheWxvYWQpO1xuICAgIHRoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgU3RvcmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy51cGRhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfTtcblxuICBTdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdLmNvbmNhdCh0aGlzLl9jYWxsYmFja3MsIFtjYWxsYmFja10pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fY2FsbGJhY2tzID0gX3RoaXMuX2NhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYgIT09IGNhbGxiYWNrO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBTdG9yZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIFN0b3JlO1xufSgpO1xuXG52YXIgZG5kU3RvcmUgPSBuZXcgU3RvcmUoKTtcblxudmFyIGdldElkID0gZnVuY3Rpb24gZ2V0SWQoKSB7XG4gIHZhciB0ZXh0ID0gJyc7XG4gIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBEcmFnQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoRHJhZ0NvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJhZ0NvbXBvbmVudCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0NvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IGRuZFN0b3JlLmdldFN0YXRlKCksIF90aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgaWYgKG5leHRQcm9wcyAhPT0gX3RoaXMucHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV4dFByb3BzLnN1YnNjcmliZVRvKSB7XG4gICAgICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSA8IG5leHRQcm9wcy5zdWJzY3JpYmVUby5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGVbbmV4dFByb3BzLnN1YnNjcmliZVRvW2ldXSAhPT0gbmV4dFN0YXRlW25leHRQcm9wcy5zdWJzY3JpYmVUb1tpXV0pIHtcbiAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaSA9IG5leHRQcm9wcy5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5leHRTdGF0ZSAhPT0gX3RoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIERyYWdDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZG5kU3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZShkbmRTdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICB9KTtcbiAgfTtcblxuICBEcmFnQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfTtcblxuICBEcmFnQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgYWNjZXB0cyA9IHN0YXRlLmN1cnJlbnRseUhvdmVyZWREcm9wcGFibGVBY2NlcHRzO1xuICAgIHZhciBpc092ZXJEcm9wcGFibGUgPSB0eXBlb2Ygc3RhdGUuY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkID09PSBcInN0cmluZ1wiO1xuXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmFsd2F5c1JlbmRlciB8fCBzdGF0ZS5pc0RyYWdnaW5nICYmIHN0YXRlLmN1cnJlbnRseURyYWdnaW5nSWQgPT09IHRoaXMucHJvcHMuZm9yKSAmJiB0aGlzLnByb3BzLmNoaWxkcmVuKF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgaXNPdmVyQWNjZXB0ZWQ6IGlzT3ZlckRyb3BwYWJsZSA/IGFjY2VwdHMgIT09IG51bGwgPyBBcnJheS5pc0FycmF5KGFjY2VwdHMpID8gYWNjZXB0cy5pbmNsdWRlcyhzdGF0ZS50eXBlKSA6IHN0YXRlLnR5cGUgPT09IGFjY2VwdHMgOiB0cnVlIDogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdDb21wb25lbnQ7XG59KENvbXBvbmVudCk7XG5cbkRyYWdDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBmb3I6IFwiXCIsXG4gIGFsd2F5c1JlbmRlcjogZmFsc2UsXG4gIHN1YnNjcmliZVRvOiBudWxsXG59O1xuXG5cbkRyYWdDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgYWx3YXlzUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3Vic2NyaWJlVG86IFByb3BUeXBlcy5hcnJheVxufTtcblxudmFyIERyYWdnYWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKERyYWdnYWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJhZ2dhYmxlKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnZ2FibGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydENvb3JkaW5hdGU6IG51bGwsXG4gICAgICBzdG9yZVN0YXRlOiBfZXh0ZW5kcyh7fSwgZG5kU3RvcmUuZ2V0U3RhdGUoKSwgeyBpc0FjdGl2ZTogZmFsc2UgfSlcbiAgICB9LCBfdGhpcy5zdGFydERyYWdEZWxheSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgeCA9IHZvaWQgMDtcbiAgICAgIHZhciB5ID0gdm9pZCAwO1xuICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93ICYmIGUudG91Y2hlcykge1xuICAgICAgICB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgeCA9IGUuY2xpZW50WDtcbiAgICAgICAgeSA9IGUuY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGRuZFN0b3JlLnVwZGF0ZSh7XG4gICAgICAgIHN0YXJ0aW5nWDogeCxcbiAgICAgICAgc3RhcnRpbmdZOiB5XG4gICAgICB9KTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc3RhcnRDb29yZGluYXRlOiB7IHg6IHgsIHk6IHkgfSB9KTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF90aGlzLmVuZERyYWdEZWxheSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF90aGlzLmNoZWNrRHJhZ0RlbGF5KTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBfdGhpcy5lbmREcmFnRGVsYXkpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBfdGhpcy5jaGVja0RyYWdEZWxheSk7XG4gICAgfSwgX3RoaXMuY2hlY2tEcmFnRGVsYXkgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHggPSB2b2lkIDA7XG4gICAgICB2YXIgeSA9IHZvaWQgMDtcbiAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdyAmJiBlLnRvdWNoZXMpIHtcbiAgICAgICAgeCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHggPSBlLmNsaWVudFg7XG4gICAgICAgIHkgPSBlLmNsaWVudFk7XG4gICAgICB9XG4gICAgICB2YXIgYSA9IE1hdGguYWJzKF90aGlzLnN0YXRlLnN0YXJ0Q29vcmRpbmF0ZS54IC0geCk7XG4gICAgICB2YXIgYiA9IE1hdGguYWJzKF90aGlzLnN0YXRlLnN0YXJ0Q29vcmRpbmF0ZS55IC0geSk7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhhLCAyKSArIE1hdGgucG93KGIsIDIpKSk7XG4gICAgICB2YXIgZHJhZ0Rpc3RhbmNlID0gX3RoaXMucHJvcHMuZGVsYXk7XG4gICAgICBpZiAoZGlzdGFuY2UgPj0gZHJhZ0Rpc3RhbmNlKSB7XG4gICAgICAgIF90aGlzLmVuZERyYWdEZWxheSgpO1xuICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cgJiYgZS50b3VjaGVzKSB7XG4gICAgICAgICAgX3RoaXMuc3RhcnRNb2JpbGVEcmFnKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnN0YXJ0RHJhZyhlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF90aGlzLmVuZERyYWdEZWxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF90aGlzLmVuZERyYWdEZWxheSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF90aGlzLmNoZWNrRHJhZ0RlbGF5KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBfdGhpcy5lbmREcmFnRGVsYXkpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBfdGhpcy5jaGVja0RyYWdEZWxheSk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0Q29vcmRpbmF0ZTogbnVsbCB9KTtcbiAgICB9LCBfdGhpcy5zdGFydERyYWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG5kU3RvcmUudXBkYXRlKHtcbiAgICAgICAgaXNEcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgc3RhcnRpbmdYOiBlLmNsaWVudFgsXG4gICAgICAgIHN0YXJ0aW5nWTogZS5jbGllbnRZLFxuICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgICAgY3VycmVudGx5RHJhZ2dpbmdJZDogX3RoaXMucHJvcHMuaWQsXG4gICAgICAgIGRhdGE6IF90aGlzLnByb3BzLmRhdGEsXG4gICAgICAgIHR5cGU6IF90aGlzLnByb3BzLnR5cGVcbiAgICAgIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25EcmFnU3RhcnQoZG5kU3RvcmUuZ2V0U3RhdGUoKS5kYXRhKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfdGhpcy5zdG9wRHJhZyk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBfdGhpcy51cGRhdGVDb29yZGluYXRlcyk7XG4gICAgfSwgX3RoaXMuc3RhcnRNb2JpbGVEcmFnID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KGRuZFN0b3JlLmdldFN0YXRlKCkuZGF0YSk7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICBkbmRTdG9yZS51cGRhdGUoe1xuICAgICAgICBpc0RyYWdnaW5nOiB0cnVlLFxuICAgICAgICBzdGFydGluZ1g6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgIHN0YXJ0aW5nWTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgeDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgeTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgY3VycmVudGx5RHJhZ2dpbmdJZDogX3RoaXMucHJvcHMuaWQsXG4gICAgICAgIGRhdGE6IF90aGlzLnByb3BzLmRhdGEsXG4gICAgICAgIHR5cGU6IF90aGlzLnByb3BzLnR5cGVcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBfdGhpcy5zdG9wRHJhZyk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBfdGhpcy51cGRhdGVNb2JpbGVDb29yZGluYXRlcyk7XG4gICAgfSwgX3RoaXMuc3RvcERyYWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMucHJvcHMub25EcmFnRW5kKGRuZFN0b3JlLmdldFN0YXRlKCkuZGF0YSk7XG4gICAgICBkbmRTdG9yZS5yZXNldCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF90aGlzLnN0b3BEcmFnKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF90aGlzLnVwZGF0ZUNvb3JkaW5hdGVzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgX3RoaXMuc3RvcERyYWcpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgX3RoaXMudXBkYXRlTW9iaWxlQ29vcmRpbmF0ZXMpO1xuICAgIH0sIF90aGlzLnVwZGF0ZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRuZFN0b3JlLnVwZGF0ZSh7XG4gICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uRHJhZygpO1xuICAgIH0sIF90aGlzLnVwZGF0ZU1vYmlsZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgIGRuZFN0b3JlLnVwZGF0ZSh7XG4gICAgICAgIHg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgIHk6IHRvdWNoLmNsaWVudFlcbiAgICAgIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25EcmFnKCk7XG4gICAgfSwgX3RoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzICE9PSBfdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc3Vic2NyaWJlVG8pIHtcbiAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHdoaWxlIChpIDwgbmV4dFByb3BzLnN1YnNjcmliZVRvLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZVtuZXh0UHJvcHMuc3Vic2NyaWJlVG9baV1dICE9PSBuZXh0U3RhdGVbbmV4dFByb3BzLnN1YnNjcmliZVRvW2ldXSkge1xuICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBpID0gbmV4dFByb3BzLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV4dFN0YXRlICE9PSBfdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgRHJhZ2dhYmxlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRuZFN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBkbmRTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgc3RvcmVTdGF0ZTogX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNBY3RpdmU6IHN0YXRlLmN1cnJlbnRseURyYWdnaW5nSWQgPT09IF90aGlzMi5wcm9wcy5pZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRHJhZ2dhYmxlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfTtcblxuICBEcmFnZ2FibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlLnN0b3JlU3RhdGU7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuc3RhcnREcmFnRGVsYXksXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5zdGFydERyYWdEZWxheVxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRHJhZ2dhYmxlO1xufShDb21wb25lbnQpO1xuXG5EcmFnZ2FibGUuZGVmYXVsdFByb3BzID0ge1xuICBpZDogZ2V0SWQoKSxcbiAgZGF0YTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgZGVsYXk6IDgsXG4gIG9uRHJhZ1N0YXJ0OiBub29wLFxuICBvbkRyYWc6IG5vb3AsXG4gIG9uRHJhZ0VuZDogbm9vcCxcbiAgc3Vic2NyaWJlVG86IG51bGxcbn07XG5cblxuRHJhZ2dhYmxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgb25EcmFnU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWc6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWdFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdWJzY3JpYmVUbzogUHJvcFR5cGVzLmFycmF5XG59O1xuXG52YXIgRHJvcHBhYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoRHJvcHBhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wcGFibGUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3BwYWJsZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBkbmRTdG9yZS5nZXRTdGF0ZSgpLCB7IGlzT3ZlcjogZmFsc2UgfSksIF90aGlzLnNldE92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG5kU3RvcmUuZ2V0U3RhdGUoKS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRuZFN0b3JlLnVwZGF0ZSh7XG4gICAgICAgICAgY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkOiBfdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgICBjdXJyZW50bHlIb3ZlcmVkRHJvcHBhYmxlQWNjZXB0czogX3RoaXMucHJvcHMuYWNjZXB0c1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMucHJvcHMub25EcmFnRW50ZXIoKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5zZXRPdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG5kU3RvcmUuZ2V0U3RhdGUoKS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRuZFN0b3JlLnVwZGF0ZSh7XG4gICAgICAgICAgY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkOiBudWxsLFxuICAgICAgICAgIGN1cnJlbnRseUhvdmVyZWREcm9wcGFibGVBY2NlcHRzOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUgPSBkbmRTdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGRhdGEgPSBfc3RvcmUkZ2V0U3RhdGUuZGF0YSxcbiAgICAgICAgICB0eXBlID0gX3N0b3JlJGdldFN0YXRlLnR5cGUsXG4gICAgICAgICAgaXNEcmFnZ2luZyA9IF9zdG9yZSRnZXRTdGF0ZS5pc0RyYWdnaW5nO1xuXG4gICAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfdGhpcy5wcm9wcy5hY2NlcHRzKSkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5hY2NlcHRzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkRyb3AoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlID09PSBfdGhpcy5wcm9wcy5hY2NlcHRzKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkRyb3AoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzICE9PSBfdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc3Vic2NyaWJlVG8pIHtcbiAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHdoaWxlIChpIDwgbmV4dFByb3BzLnN1YnNjcmliZVRvLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZVtuZXh0UHJvcHMuc3Vic2NyaWJlVG9baV1dICE9PSBuZXh0U3RhdGVbbmV4dFByb3BzLnN1YnNjcmliZVRvW2ldXSkge1xuICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBpID0gbmV4dFByb3BzLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV4dFN0YXRlICE9PSBfdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgRHJvcHBhYmxlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRuZFN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBkbmRTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgX3RoaXMyLnNldFN0YXRlKF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc092ZXI6IHN0YXRlLmN1cnJlbnRseUhvdmVyZWREcm9wcGFibGVJZCA9PT0gX3RoaXMyLnByb3BzLmlkLFxuICAgICAgICB3aWxsQWNjZXB0OiBBcnJheS5pc0FycmF5KF90aGlzMi5wcm9wcy5hY2NlcHRzKSA/IF90aGlzMi5wcm9wcy5hY2NlcHRzLmluY2x1ZGVzKHN0YXRlLnR5cGUpIDogX3RoaXMyLnByb3BzLmFjY2VwdHMgPT09IHN0YXRlLnR5cGVcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBEcm9wcGFibGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9O1xuXG4gIERyb3BwYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLnNldE92ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5zZXRPdXQsXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5vbkRyb3BcbiAgICAgIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3BwYWJsZTtcbn0oQ29tcG9uZW50KTtcblxuRHJvcHBhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IGdldElkKCksXG4gIGFjY2VwdHM6IG51bGwsXG4gIG9uRHJhZ0VudGVyOiBub29wLFxuICBvbkRyYWdMZWF2ZTogbm9vcCxcbiAgb25Ecm9wOiBub29wLFxuICBzdWJzY3JpYmVUbzogbnVsbFxufTtcblxuXG5Ecm9wcGFibGUucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhY2NlcHRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EcmFnRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWdMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN1YnNjcmliZVRvOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbnZhciBEcmFnU3RhdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhEcmFnU3RhdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyYWdTdGF0ZSgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ1N0YXRlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0gZG5kU3RvcmUuZ2V0U3RhdGUoKSwgX3RoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzICE9PSBfdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc3Vic2NyaWJlVG8pIHtcbiAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHdoaWxlIChpIDwgbmV4dFByb3BzLnN1YnNjcmliZVRvLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZVtuZXh0UHJvcHMuc3Vic2NyaWJlVG9baV1dICE9PSBuZXh0U3RhdGVbbmV4dFByb3BzLnN1YnNjcmliZVRvW2ldXSkge1xuICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBpID0gbmV4dFByb3BzLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV4dFN0YXRlICE9PSBfdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgRHJhZ1N0YXRlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRuZFN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoZG5kU3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRHJhZ1N0YXRlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfTtcblxuICBEcmFnU3RhdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlKSk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdTdGF0ZTtcbn0oQ29tcG9uZW50KTtcblxuRHJhZ1N0YXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3Vic2NyaWJlVG86IG51bGxcbn07XG5cblxuRHJhZ1N0YXRlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1YnNjcmliZVRvOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCB7IERyYWdDb21wb25lbnQsIERyYWdnYWJsZSwgRHJvcHBhYmxlLCBEcmFnU3RhdGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=