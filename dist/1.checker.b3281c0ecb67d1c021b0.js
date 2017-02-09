webpackJsonp([1],{

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(369);
	
	var _checkerGameState = __webpack_require__(392);
	
	var _CheckerGame = __webpack_require__(393);
	
	var _CheckerGame2 = _interopRequireDefault(_CheckerGame);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  sendClick: _checkerGameState.sendClick
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    state: state.checkerGameState
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CheckerGame2.default);

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.CLICK = undefined;
	
	var _defineProperty2 = __webpack_require__(312);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.sendClick = sendClick;
	exports.default = messageReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var CLICK = exports.CLICK = 'CLICK';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function sendClick(x, y) {
	  return {
	    type: CLICK,
	    payload: { x: x,
	      y: y }
	  };
	}
	
	var actions = exports.actions = {
	  sendClick: sendClick
	};
	
	// ------------------------------------
	// FUNCTIONS
	// ------------------------------------
	function isValidCell(board, x, y) {
	  var boardHeight = board.length;
	  var boardWidth = board[0].length;
	  return x >= 0 && x < boardWidth && y >= 0 && y < boardHeight;
	}
	function calculateFeasible(board, x, y) {
	  var piece = board[y][x];
	  if (!piece) return [];
	  var feasible = [];
	  //UP OR DOWN
	  for (var directionY = -1; directionY <= 1; directionY += 2) {
	    if (directionY == 1 && piece.player == 1 && !piece.double) {
	      continue;
	    }
	    if (directionY == -1 && piece.player == 0 && !piece.double) {
	      continue;
	    }
	    //LEFT OR RIGHT
	    for (var directionX = -1; directionX <= 1; directionX += 2) {
	      //WALK
	      if (isValidCell(board, x + directionX, y + directionY) && !board[y + directionY][x + directionX]) {
	        feasible.push({ x: x + directionX, y: y + directionY, movement: 'WALK',
	          from: { x: x, y: y } });
	      }
	      //EAT
	      if (isValidCell(board, x + directionX, y + directionY) && isValidCell(board, x + 2 * directionX, y + 2 * directionY) && board[y + directionY][x + directionX] && board[y + directionY][x + directionX].player != piece.player && !board[y + 2 * directionY][x + 2 * directionX]) {
	        feasible.push({ movement: 'EAT',
	          x: x + 2 * directionX, y: y + 2 * directionY,
	          eaten: { x: x + directionX, y: y + directionY },
	          from: { x: x, y: y } });
	      }
	    }
	  }
	  return feasible;
	}
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, CLICK, function (state, action) {
	  var x = action.payload.x;
	  var y = action.payload.y;
	  if (state.feasible) {
	    for (var i = 0; i < state.feasible.length; i++) {
	      var f = state.feasible[i];
	      if (f.x == x && f.y == y) {
	        if (f.movement == 'WALK') {
	          state.board[y][x] = state.board[f.from.y][f.from.x];
	          state.board[f.from.y][f.from.x] = null;
	        } else if (f.movement = 'EAT') {
	          state.board[y][x] = state.board[f.from.y][f.from.x];
	          state.board[f.from.y][f.from.x] = null;
	          state.board[f.eaten.y][f.eaten.x] = null;
	        }
	        if ((y == 0 || y == state.board.length - 1) && !state.board[y][x].double) {
	          state.board[y][x].double = true;
	        }
	        break;
	      }
	    }
	    return (0, _extends3.default)({}, state, {
	      selected: null,
	      feasible: null
	    });
	  } else if (state.selected && state.selected.x == x && state.selected.y == y) {
	    return (0, _extends3.default)({}, state, {
	      selected: null,
	      feasible: null
	    });
	  } else {
	    var feasible = calculateFeasible(state.board, x, y);
	    if (feasible.length > 0) {
	      return (0, _extends3.default)({}, state, {
	        feasible: feasible,
	        selected: { x: x, y: y }
	      });
	    }
	  }
	  return state;
	});
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = { board: [[{ player: 0, key: 0 }, null, { player: 0, key: 1 }, null, { player: 0, key: 2 }, null, { player: 0, key: 3 }, null], [null, { player: 0, key: 4 }, null, { player: 0, key: 5 }, null, { player: 0, key: 6 }, null, { player: 0, key: 7 }], [{ player: 0, key: 8 }, null, { player: 0, key: 9 }, null, { player: 0, key: 10 }, null, { player: 0, key: 11 }, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, { player: 1, key: 12 }, null, { player: 1, key: 13 }, null, { player: 1, key: 14 }, null, { player: 1, key: 15 }], [{ player: 1, key: 16 }, null, { player: 1, key: 17 }, null, { player: 1, key: 18 }, null, { player: 1, key: 19 }, null], [null, { player: 1, key: 20 }, null, { player: 1, key: 21 }, null, { player: 1, key: 22 }, null, { player: 1, key: 23 }]],
	  selected: null,
	  feasible: null };
	function messageReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CheckerGame = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CheckerBoard = __webpack_require__(394);
	
	var _CheckerBoard2 = _interopRequireDefault(_CheckerBoard);
	
	var _CheckerPiece = __webpack_require__(409);
	
	var _CheckerPiece2 = _interopRequireDefault(_CheckerPiece);
	
	__webpack_require__(410);
	
	var _TurnHUDContainer = __webpack_require__(412);
	
	var _TurnHUDContainer2 = _interopRequireDefault(_TurnHUDContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	*/
	var CheckerGame = exports.CheckerGame = function CheckerGame(_ref) {
	  var state = _ref.state,
	      sendClick = _ref.sendClick;
	
	  var onClick = function onClick(x, y) {
	    return function () {
	      sendClick(x, y);
	    };
	  };
	  //Positioning pieces
	  var pieces = [];
	  var key = 0;
	  for (var j = 0; j < state.board.length; j++) {
	    var boardState_col = state.board[j];
	    for (var i = 0; i < boardState_col.length; i++) {
	      if (boardState_col[i]) {
	        var piece = boardState_col[i];
	        var color = "yellow";
	        if (piece.player == 0) {
	          color = "white";
	        }
	        pieces.push(_react2.default.createElement(_CheckerPiece2.default, { color: color, double: piece.double,
	          x: i, y: j, key: piece.key, onClick: onClick }));
	        key++;
	      }
	    }
	  }
	  return _react2.default.createElement(
	    'div',
	    { style: { backgroundColor: "black", height: "100%" } },
	    _react2.default.createElement(_TurnHUDContainer2.default, null),
	    _react2.default.createElement(
	      _CheckerBoard2.default,
	      {
	        feasible: state.feasible, selected: state.selected,
	        onClick: onClick,
	        key: '999' },
	      pieces
	    )
	  );
	};
	
	exports.default = CheckerGame;

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(320);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(325);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(326);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(327);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(361);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(395);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	__webpack_require__(407);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Checkerboard = function (_React$Component) {
	  (0, _inherits3.default)(Checkerboard, _React$Component);
	
	  function Checkerboard() {
	    (0, _classCallCheck3.default)(this, Checkerboard);
	    return (0, _possibleConstructorReturn3.default)(this, (Checkerboard.__proto__ || (0, _getPrototypeOf2.default)(Checkerboard)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Checkerboard, [{
	    key: 'render',
	    value: function render() {
	      // Add tiles
	      var rects = [];
	      var key = 0;
	      for (var j = 0; j < this.props.height; j++) {
	        for (var i = 0; i < this.props.width; i++) {
	          var color = this.props.secondaryColor;
	          if ((i + j) % 2 == 0) {
	            color = this.props.primaryColor;
	          }
	          for (var k in this.props.feasible) {
	            var f = this.props.feasible[k];
	            if (f.x == i && f.y == j) {
	              color = this.props.feasibleColor;
	            }
	          }
	          if (this.props.selected && this.props.selected.x == i && this.props.selected.y == j) {
	            color = this.props.selectedColor;
	          }
	          rects.push(_react2.default.createElement('rect', {
	            height: '1',
	            style: { fill: color },
	            width: '1',
	            x: i,
	            y: j,
	            key: key,
	            onClick: this.props.onClick(i, j) }));
	          key++;
	        };
	      };
	      return _react2.default.createElement(
	        'svg',
	        { style: { width: "100%", position: "fixed",
	            left: "0px", right: "0px", bottom: "0px",
	            maxWidth: "500px", marginLeft: "auto", marginRight: "auto" },
	          viewBox: "0 0 8 8",
	          id: 'CheckerBoard' },
	        _react2.default.createElement(
	          'g',
	          null,
	          rects
	        ),
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          {
	            transitionName: 'example',
	            transitionEnterTimeout: 500,
	            transitionLeaveTimeout: 200,
	            component: 'g' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	  return Checkerboard;
	}(_react2.default.Component);
	
	;
	
	Checkerboard.defaultProps = {
	  width: 8,
	  height: 8,
	  primaryColor: 'sienna',
	  secondaryColor: 'tan',
	  feasibleColor: 'palegreen',
	  feasible: {},
	  selected: null,
	  selectedColor: 'green'
	};
	
	exports.default = Checkerboard;

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(396);

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(26);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(25);
	
	var ReactTransitionGroup = __webpack_require__(397);
	var ReactCSSTransitionGroupChild = __webpack_require__(400);
	
	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	  };
	}
	
	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */
	
	var ReactCSSTransitionGroup = function (_React$Component) {
	  _inherits(ReactCSSTransitionGroup, _React$Component);
	
	  function ReactCSSTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactCSSTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      // We need to provide this childFactory so that
	      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	      // leave while it is leaving.
	      return React.createElement(ReactCSSTransitionGroupChild, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ReactCSSTransitionGroup.prototype.render = function render() {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  };
	
	  return ReactCSSTransitionGroup;
	}(React.Component);
	
	ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
	ReactCSSTransitionGroup.propTypes = {
	  transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	  transitionAppear: React.PropTypes.bool,
	  transitionEnter: React.PropTypes.bool,
	  transitionLeave: React.PropTypes.bool,
	  transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	  transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	  transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	};
	ReactCSSTransitionGroup.defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};
	
	
	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(26);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(25);
	var ReactTransitionChildMapping = __webpack_require__(398);
	
	var emptyFunction = __webpack_require__(34);
	
	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	
	var ReactTransitionGroup = function (_React$Component) {
	  _inherits(ReactTransitionGroup, _React$Component);
	
	  function ReactTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
	    }, _this.performAppear = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	
	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
	      } else {
	        _this._handleDoneAppearing(key);
	      }
	    }, _this._handleDoneAppearing = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performEnter = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	
	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
	      } else {
	        _this._handleDoneEntering(key);
	      }
	    }, _this._handleDoneEntering = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performLeave = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key);
	      }
	    }, _this._handleDoneLeaving = function (key) {
	      var component = _this.refs[key];
	
	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.performEnter(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _assign({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };
	
	  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  };
	
	  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  };
	
	  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  ReactTransitionGroup.prototype.render = function render() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	
	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return React.createElement(this.props.component, props, childrenToRender);
	  };
	
	  return ReactTransitionGroup;
	}(React.Component);
	
	ReactTransitionGroup.displayName = 'ReactTransitionGroup';
	ReactTransitionGroup.propTypes = {
	  component: React.PropTypes.any,
	  childFactory: React.PropTypes.func
	};
	ReactTransitionGroup.defaultProps = {
	  component: 'span',
	  childFactory: emptyFunction.thatReturnsArgument
	};
	
	
	module.exports = ReactTransitionGroup;

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(399);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }
	
	    if (true) {
	      return flattenChildren(children, selfDebugID);
	    }
	
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var KeyEscapeUtils = __webpack_require__(39);
	var traverseAllChildren = __webpack_require__(37);
	var warning = __webpack_require__(33);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && ({"NODE_ENV":"development"}) && ("development") === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(48);
	}
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
	  // We found a component instance.
	  if (traverseContext && typeof traverseContext === 'object') {
	    var result = traverseContext;
	    var keyUnique = result[name] === undefined;
	    if (true) {
	      if (!ReactComponentTreeHook) {
	        ReactComponentTreeHook = __webpack_require__(48);
	      }
	      if (!keyUnique) {
	         true ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
	      }
	    }
	    if (keyUnique && child != null) {
	      result[name] = child;
	    }
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children, selfDebugID) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	
	  if (true) {
	    traverseAllChildren(children, function (traverseContext, child, name) {
	      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
	    }, result);
	  } else {
	    traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  }
	  return result;
	}
	
	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(25);
	var ReactAddonsDOMDependencies = __webpack_require__(401);
	
	var CSSCore = __webpack_require__(405);
	var ReactTransitionEvents = __webpack_require__(406);
	
	var onlyChild = __webpack_require__(54);
	
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,
	
	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },
	
	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;
	
	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timeout);
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);
	
	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },
	
	  queueClassAndNode: function (className, node) {
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
	    }
	  },
	
	  flushClassNameAndNodeQueue: function () {
	    if (this.isMounted()) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        CSSCore.addClass(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function () {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  },
	
	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	
	    this.classNameAndNodeQueue.length = 0;
	  },
	
	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },
	
	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactDOM = __webpack_require__(56);
	
	exports.getReactDOM = function () {
	  return ReactDOM;
	};
	
	if (true) {
	  var ReactPerf;
	  var ReactTestUtils;
	
	  exports.getReactPerf = function () {
	    if (!ReactPerf) {
	      ReactPerf = __webpack_require__(402);
	    }
	    return ReactPerf;
	  };
	
	  exports.getReactTestUtils = function () {
	    if (!ReactTestUtils) {
	      ReactTestUtils = __webpack_require__(403);
	    }
	    return ReactTestUtils;
	  };
	}

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(26);
	
	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var ReactDebugTool = __webpack_require__(86);
	var warning = __webpack_require__(33);
	var alreadyWarned = false;
	
	function roundFloat(val) {
	  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	  var n = Math.pow(10, base);
	  return Math.floor(val * n) / n;
	}
	
	// Flow type definition of console.table is too strict right now, see
	// https://github.com/facebook/flow/pull/2353 for updates
	function consoleTable(table) {
	  console.table(table);
	}
	
	function warnInProduction() {
	  if (alreadyWarned) {
	    return;
	  }
	  alreadyWarned = true;
	  if (typeof console !== 'undefined') {
	    console.error('ReactPerf is not supported in the production builds of React. ' + 'To collect measurements, please use the development build of React instead.');
	  }
	}
	
	function getLastMeasurements() {
	  if (false) {
	    warnInProduction();
	    return [];
	  }
	
	  return ReactDebugTool.getFlushHistory();
	}
	
	function getExclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (false) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, timerType, applyUpdate) {
	    var displayName = treeSnapshot[instanceID].displayName;
	
	    var key = displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        counts: {},
	        durations: {},
	        totalDuration: 0
	      };
	    }
	    if (!stats.durations[timerType]) {
	      stats.durations[timerType] = 0;
	    }
	    if (!stats.counts[timerType]) {
	      stats.counts[timerType] = 0;
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      updateAggregatedStats(treeSnapshot, instanceID, timerType, function (stats) {
	        stats.totalDuration += duration;
	        stats.durations[timerType] += duration;
	        stats.counts[timerType]++;
	      });
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.totalDuration - a.totalDuration;
	  });
	}
	
	function getInclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (false) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc.displayName,
	        ownerID = _treeSnapshot$instanc.ownerID;
	
	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  var isCompositeByID = {};
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements;
	
	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      isCompositeByID[instanceID] = true;
	    });
	  });
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // As we traverse parents, only count inclusive time towards composites.
	        // We know something is a composite if its render() was called.
	        if (isCompositeByID[nextParentID]) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}
	
	function getWasted() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (false) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc2 = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc2.displayName,
	        ownerID = _treeSnapshot$instanc2.ownerID;
	
	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot,
	        operations = flush.operations;
	
	    var isDefinitelyNotWastedByID = {};
	
	    // Find host components associated with an operation in this batch.
	    // Mark all components in their parent tree as definitely not wasted.
	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID;
	
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        isDefinitelyNotWastedByID[nextParentID] = true;
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	
	    // Find composite components that rendered in this batch.
	    // These are potential candidates for being wasted renders.
	    var renderedCompositeIDs = {};
	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      renderedCompositeIDs[instanceID] = true;
	    });
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	
	      // If there was a DOM update below this component, or it has just been
	      // mounted, its render() is not considered wasted.
	      var updateCount = treeSnapshot[instanceID].updateCount;
	
	      if (isDefinitelyNotWastedByID[instanceID] || updateCount === 0) {
	        return;
	      }
	
	      // We consider this render() wasted.
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });
	
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // Any parents rendered during this batch are considered wasted
	        // unless we previously marked them as dirty.
	        var isWasted = renderedCompositeIDs[nextParentID] && !isDefinitelyNotWastedByID[nextParentID];
	        if (isWasted) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}
	
	function getOperations() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (false) {
	    warnInProduction();
	    return [];
	  }
	
	  var stats = [];
	  flushHistory.forEach(function (flush, flushIndex) {
	    var operations = flush.operations,
	        treeSnapshot = flush.treeSnapshot;
	
	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID,
	          type = operation.type,
	          payload = operation.payload;
	      var _treeSnapshot$instanc3 = treeSnapshot[instanceID],
	          displayName = _treeSnapshot$instanc3.displayName,
	          ownerID = _treeSnapshot$instanc3.ownerID;
	
	      var owner = treeSnapshot[ownerID];
	      var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	
	      stats.push({
	        flushIndex: flushIndex,
	        instanceID: instanceID,
	        key: key,
	        type: type,
	        ownerID: ownerID,
	        payload: payload
	      });
	    });
	  });
	  return stats;
	}
	
	function printExclusive(flushHistory) {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getExclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        totalDuration = item.totalDuration;
	
	    var renderCount = item.counts.render || 0;
	    var renderDuration = item.durations.render || 0;
	    return {
	      'Component': key,
	      'Total time (ms)': roundFloat(totalDuration),
	      'Instance count': instanceCount,
	      'Total render time (ms)': roundFloat(renderDuration),
	      'Average render time (ms)': renderCount ? roundFloat(renderDuration / renderCount) : undefined,
	      'Render count': renderCount,
	      'Total lifecycle time (ms)': roundFloat(totalDuration - renderDuration)
	    };
	  });
	  consoleTable(table);
	}
	
	function printInclusive(flushHistory) {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getInclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;
	
	    return {
	      'Owner > Component': key,
	      'Inclusive render time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}
	
	function printWasted(flushHistory) {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getWasted(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;
	
	    return {
	      'Owner > Component': key,
	      'Inclusive wasted time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}
	
	function printOperations(flushHistory) {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getOperations(flushHistory);
	  var table = stats.map(function (stat) {
	    return {
	      'Owner > Node': stat.key,
	      'Operation': stat.type,
	      'Payload': typeof stat.payload === 'object' ? JSON.stringify(stat.payload) : stat.payload,
	      'Flush index': stat.flushIndex,
	      'Owner Component ID': stat.ownerID,
	      'DOM Component ID': stat.instanceID
	    };
	  });
	  consoleTable(table);
	}
	
	var warnedAboutPrintDOM = false;
	function printDOM(measurements) {
	   true ? warning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.') : void 0;
	  warnedAboutPrintDOM = true;
	  return printOperations(measurements);
	}
	
	var warnedAboutGetMeasurementsSummaryMap = false;
	function getMeasurementsSummaryMap(measurements) {
	   true ? warning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.') : void 0;
	  warnedAboutGetMeasurementsSummaryMap = true;
	  return getWasted(measurements);
	}
	
	function start() {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  ReactDebugTool.beginProfiling();
	}
	
	function stop() {
	  if (false) {
	    warnInProduction();
	    return;
	  }
	
	  ReactDebugTool.endProfiling();
	}
	
	function isRunning() {
	  if (false) {
	    warnInProduction();
	    return false;
	  }
	
	  return ReactDebugTool.isProfiling();
	}
	
	var ReactPerfAnalysis = {
	  getLastMeasurements: getLastMeasurements,
	  getExclusive: getExclusive,
	  getInclusive: getInclusive,
	  getWasted: getWasted,
	  getOperations: getOperations,
	  printExclusive: printExclusive,
	  printInclusive: printInclusive,
	  printWasted: printWasted,
	  printOperations: printOperations,
	  start: start,
	  stop: stop,
	  isRunning: isRunning,
	  // Deprecated:
	  printDOM: printDOM,
	  getMeasurementsSummaryMap: getMeasurementsSummaryMap
	};
	
	module.exports = ReactPerfAnalysis;

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(58),
	    _assign = __webpack_require__(26);
	
	var EventConstants = __webpack_require__(379);
	var EventPluginHub = __webpack_require__(65);
	var EventPluginRegistry = __webpack_require__(66);
	var EventPropagators = __webpack_require__(64);
	var React = __webpack_require__(25);
	var ReactDOM = __webpack_require__(56);
	var ReactDOMComponentTree = __webpack_require__(57);
	var ReactBrowserEventEmitter = __webpack_require__(128);
	var ReactInstanceMap = __webpack_require__(139);
	var ReactUpdates = __webpack_require__(79);
	var SyntheticEvent = __webpack_require__(76);
	var ReactShallowRenderer = __webpack_require__(404);
	
	var findDOMNode = __webpack_require__(195);
	var invariant = __webpack_require__(30);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function Event(suffix) {}
	
	/**
	 * @class ReactTestUtils
	 */
	
	function findAllInRenderedTreeInternal(inst, test) {
	  if (!inst || !inst.getPublicInstance) {
	    return [];
	  }
	  var publicInst = inst.getPublicInstance();
	  var ret = test(publicInst) ? [publicInst] : [];
	  var currentElement = inst._currentElement;
	  if (ReactTestUtils.isDOMComponent(publicInst)) {
	    var renderedChildren = inst._renderedChildren;
	    var key;
	    for (key in renderedChildren) {
	      if (!renderedChildren.hasOwnProperty(key)) {
	        continue;
	      }
	      ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
	    }
	  } else if (React.isValidElement(currentElement) && typeof currentElement.type === 'function') {
	    ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
	  }
	  return ret;
	}
	
	/**
	 * Utilities for making it easy to test React components.
	 *
	 * See https://facebook.github.io/react/docs/test-utils.html
	 *
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function (element) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return ReactDOM.render(element, div);
	  },
	
	  isElement: function (element) {
	    return React.isValidElement(element);
	  },
	
	  isElementOfType: function (inst, convenienceConstructor) {
	    return React.isValidElement(inst) && inst.type === convenienceConstructor;
	  },
	
	  isDOMComponent: function (inst) {
	    return !!(inst && inst.nodeType === 1 && inst.tagName);
	  },
	
	  isDOMComponentElement: function (inst) {
	    return !!(inst && React.isValidElement(inst) && !!inst.tagName);
	  },
	
	  isCompositeComponent: function (inst) {
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      // Accessing inst.setState warns; just return false as that'll be what
	      // this returns when we have DOM nodes as refs directly
	      return false;
	    }
	    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
	  },
	
	  isCompositeComponentWithType: function (inst, type) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return false;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return constructor === type;
	  },
	
	  isCompositeComponentElement: function (inst) {
	    if (!React.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
	  },
	
	  isCompositeComponentElementWithType: function (inst, type) {
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
	  },
	
	  getRenderedChildOfCompositeComponent: function (inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },
	
	  findAllInRenderedTree: function (inst, test) {
	    if (!inst) {
	      return [];
	    }
	    !ReactTestUtils.isCompositeComponent(inst) ?  true ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : _prodInvariant('10') : void 0;
	    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function (root, classNames) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      if (ReactTestUtils.isDOMComponent(inst)) {
	        var className = inst.className;
	        if (typeof className !== 'string') {
	          // SVG, probably.
	          className = inst.getAttribute('class') || '';
	        }
	        var classList = className.split(/\s+/);
	
	        if (!Array.isArray(classNames)) {
	          !(classNames !== undefined) ?  true ? invariant(false, 'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.') : _prodInvariant('11') : void 0;
	          classNames = classNames.split(/\s+/);
	        }
	        return classNames.every(function (name) {
	          return classList.indexOf(name) !== -1;
	        });
	      }
	      return false;
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function (root, className) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for class:' + className);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function (root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function (root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for tag:' + tagName);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function (root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
	    });
	  },
	
	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function (root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for componentType:' + componentType);
	    }
	    return all[0];
	  },
	
	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function (module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || 'div';
	
	    module.prototype.render.mockImplementation(function () {
	      return React.createElement(mockTagName, null, this.props.children);
	    });
	
	    return this;
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on an `Element` node.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on the `ReactDOMComponent` `comp`.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
	   * @param {!ReactDOMComponent} comp
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function (topLevelType, comp, fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
	  },
	
	  nativeTouchData: function (x, y) {
	    return {
	      touches: [{ pageX: x, pageY: y }]
	    };
	  },
	
	  createRenderer: function () {
	    return new ReactShallowRenderer();
	  },
	
	  Simulate: null,
	  SimulateNative: {}
	};
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function (domComponentOrNode, eventData) {
	    var node;
	    !!React.isValidElement(domComponentOrNode) ?  true ? invariant(false, 'TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.') : _prodInvariant('14') : void 0;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = findDOMNode(domComponentOrNode);
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }
	
	    var dispatchConfig = EventPluginRegistry.eventNameDispatchConfigs[eventType];
	
	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    fakeNativeEvent.type = eventType.toLowerCase();
	
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(dispatchConfig, ReactDOMComponentTree.getInstanceFromNode(node), fakeNativeEvent, node);
	    // Since we aren't using pooling, always persist the event. This will make
	    // sure it's marked and won't warn when setting additional properties.
	    event.persist();
	    _assign(event, eventData);
	
	    if (dispatchConfig.phasedRegistrationNames) {
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	    } else {
	      EventPropagators.accumulateDirectDispatches(event);
	    }
	
	    ReactUpdates.batchedUpdates(function () {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue(true);
	    });
	  };
	}
	
	function buildSimulators() {
	  ReactTestUtils.Simulate = {};
	
	  var eventType;
	  for (eventType in EventPluginRegistry.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element|ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}
	
	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function () {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function () {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};
	
	buildSimulators();
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */
	
	function makeNativeSimulator(eventType) {
	  return function (domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    _assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
	    } else if (domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
	    }
	  };
	}
	
	Object.keys(topLevelTypes).forEach(function (eventType) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element|ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
	});
	
	module.exports = ReactTestUtils;

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(58),
	    _assign = __webpack_require__(26);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var React = __webpack_require__(25);
	var ReactDefaultInjection = __webpack_require__(61);
	var ReactCompositeComponent = __webpack_require__(142);
	var ReactReconciler = __webpack_require__(82);
	var ReactUpdates = __webpack_require__(79);
	
	var emptyObject = __webpack_require__(42);
	var getNextDebugID = __webpack_require__(150);
	var invariant = __webpack_require__(30);
	
	var NoopInternalComponent = function () {
	  function NoopInternalComponent(element) {
	    _classCallCheck(this, NoopInternalComponent);
	
	    this._renderedOutput = element;
	    this._currentElement = element;
	
	    if (true) {
	      this._debugID = getNextDebugID();
	    }
	  }
	
	  NoopInternalComponent.prototype.mountComponent = function mountComponent() {};
	
	  NoopInternalComponent.prototype.receiveComponent = function receiveComponent(element) {
	    this._renderedOutput = element;
	    this._currentElement = element;
	  };
	
	  NoopInternalComponent.prototype.unmountComponent = function unmountComponent() {};
	
	  NoopInternalComponent.prototype.getHostNode = function getHostNode() {
	    return undefined;
	  };
	
	  NoopInternalComponent.prototype.getPublicInstance = function getPublicInstance() {
	    return null;
	  };
	
	  return NoopInternalComponent;
	}();
	
	var ShallowComponentWrapper = function (element) {
	  // TODO: Consolidate with instantiateReactComponent
	  if (true) {
	    this._debugID = getNextDebugID();
	  }
	
	  this.construct(element);
	};
	_assign(ShallowComponentWrapper.prototype, ReactCompositeComponent, {
	  _constructComponent: ReactCompositeComponent._constructComponentWithoutOwner,
	  _instantiateReactComponent: function (element) {
	    return new NoopInternalComponent(element);
	  },
	  _replaceNodeWithMarkup: function () {},
	  _renderValidatedComponent: ReactCompositeComponent._renderValidatedComponentWithoutOwnerOrContext
	});
	
	function _batchedRender(renderer, element, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
	  renderer._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}
	
	var ReactShallowRenderer = function () {
	  function ReactShallowRenderer() {
	    _classCallCheck(this, ReactShallowRenderer);
	
	    this._instance = null;
	  }
	
	  ReactShallowRenderer.prototype.getMountedInstance = function getMountedInstance() {
	    return this._instance ? this._instance._instance : null;
	  };
	
	  ReactShallowRenderer.prototype.render = function render(element, context) {
	    // Ensure we've done the default injections. This might not be true in the
	    // case of a simple test that only requires React and the TestUtils in
	    // conjunction with an inline-requires transform.
	    ReactDefaultInjection.inject();
	
	    !React.isValidElement(element) ?  true ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : _prodInvariant('12', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : void 0;
	    !(typeof element.type !== 'string') ?  true ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.', element.type) : _prodInvariant('13', element.type) : void 0;
	
	    if (!context) {
	      context = emptyObject;
	    }
	    ReactUpdates.batchedUpdates(_batchedRender, this, element, context);
	
	    return this.getRenderOutput();
	  };
	
	  ReactShallowRenderer.prototype.getRenderOutput = function getRenderOutput() {
	    return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
	  };
	
	  ReactShallowRenderer.prototype.unmount = function unmount() {
	    if (this._instance) {
	      ReactReconciler.unmountComponent(this._instance, false);
	    }
	  };
	
	  ReactShallowRenderer.prototype._render = function _render(element, transaction, context) {
	    if (this._instance) {
	      ReactReconciler.receiveComponent(this._instance, element, transaction, context);
	    } else {
	      var instance = new ShallowComponentWrapper(element);
	      ReactReconciler.mountComponent(instance, transaction, null, null, context, 0);
	      this._instance = instance;
	    }
	  };
	
	  return ReactShallowRenderer;
	}();
	
	module.exports = ReactShallowRenderer;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var invariant = __webpack_require__(30);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }
	
	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	
	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }
	
	};
	
	module.exports = CSSCore;

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(71);
	
	var getVendorPrefixedEventName = __webpack_require__(130);
	
	var endEvents = [];
	
	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');
	
	  if (animEnd) {
	    endEvents.push(animEnd);
	  }
	
	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(408);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(387)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(408, function() {
				var newContent = __webpack_require__(408);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(386)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-enter{opacity:.01}.example-enter.example-enter-active{opacity:1;transition:opacity .5s ease-in}.example-leave{opacity:1}.example-leave.example-leave-active{opacity:.01;transition:opacity .2s ease-in}", "", {"version":3,"sources":["/./src/games/CheckerGame/components/src/games/CheckerGame/components/CheckerBoard.scss"],"names":[],"mappings":"AAAA,eACE,WAAc,CACf,oCAGC,UAAW,8BACuB,CACnC,eAGC,SAAW,CACZ,oCAGC,YAAc,8BACoB,CACnC","file":"CheckerBoard.scss","sourcesContent":[".example-enter {\n  opacity: 0.01;\n}\n\n.example-enter.example-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in;\n}\n\n.example-leave {\n  opacity: 1;\n}\n\n.example-leave.example-leave-active {\n  opacity: 0.01;\n  transition: opacity 200ms ease-in;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MOVE_TIME = 750;
	
	var CheckerPiece = _react2.default.createClass({
	  displayName: 'CheckerPiece',
	
	  componentWillMount: function componentWillMount() {
	    this.setState({
	      x: this.props.x,
	      y: this.props.y,
	      lastFrame: null,
	      stepX: 0,
	      stepY: 0,
	      animate: null
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.x != this.props.x || nextProps.y != this.props.y) {
	      this.setState((0, _extends3.default)({}, this.state, {
	        originTime: Date.now(),
	        originX: this.props.x,
	        originY: this.props.y
	      }));
	      if (nextProps.double && !this.props.double) {
	        new Audio('/success.wav').play();
	      } else if (Math.abs(nextProps.x - this.props.x) == 1) {
	        new Audio('/move2.mp3').play();
	      } else {
	        new Audio('/move.wav').play();
	      }
	      requestAnimationFrame(this.animate);
	    }
	  },
	  easeInOutCubic: function easeInOutCubic(t, b, c, d) {
	    t /= d / 2;
	    if (t < 1) return c / 2 * t * t * t + b;
	    t -= 2;
	    return c / 2 * (t * t * t + 2) + b;
	  },
	  animate: function animate() {
	    var elapsed = Date.now() - this.state.originTime;
	    if (elapsed < MOVE_TIME) {
	      var perc_done = this.easeInOutCubic(elapsed, 0, 1, MOVE_TIME);
	      this.setState((0, _extends3.default)({}, this.state, {
	        x: (this.props.x - this.state.originX) * perc_done + this.state.originX,
	        y: (this.props.y - this.state.originY) * perc_done + this.state.originY
	      }));
	      requestAnimationFrame(this.animate);
	    } else {
	      this.setState((0, _extends3.default)({}, this.state, {
	        x: this.props.x,
	        y: this.props.y
	      }));
	    }
	  },
	
	  render: function render() {
	    var star = null;
	    if (this.props.double == true) {
	      star = _react2.default.createElement('polygon', { stroke: '#000000', points: '50,33.034549713134766 53.87126159667969,44.171669006347656 65.65957641601562,44.411895751953125 56.263832092285156,51.535240173339844 59.67815017700195,62.820831298828125 50,56.086181640625 40.32184982299805,62.820831298828125 43.736167907714844,51.535240173339844 34.340423583984375,44.411895751953125 46.12873840332031,44.171669006347656 50,33.034549713134766 53.87126159667969,44.171669006347656 ', strokeWidth: '3', fill: '#000000', orient: 'point', r: '16.465452', shape: 'star', cy: '48.5', cx: '49' });
	    }
	    return _react2.default.createElement(
	      'g',
	      { transform: "translate(" + this.state.x + "," + this.state.y + ")", onClick: this.props.onClick(this.props.x, this.props.y) },
	      _react2.default.createElement(
	        'g',
	        { transform: 'scale(.01,.01)' },
	        _react2.default.createElement('ellipse', { ry: '45', rx: '45', cy: '50', cx: '50', strokeWidth: '0', stroke: '#000000', fill: this.props.color }),
	        _react2.default.createElement('ellipse', { ry: '35', rx: '35', cy: '50', cx: '50', strokeWidth: '5', stroke: '#000000', fill: this.props.color }),
	        _react2.default.createElement('ellipse', { ry: '20', rx: '20', cy: '50', cx: '50', strokeWidth: '3', stroke: '#000000', fill: this.props.color }),
	        star
	      )
	    );
	  }
	});
	
	exports.default = CheckerPiece;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(411);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(387)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(411, function() {
				var newContent = __webpack_require__(411);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(386)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"CheckerGame.scss","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(369);
	
	var _message = __webpack_require__(413);
	
	var _TurnHUD = __webpack_require__(414);
	
	var _TurnHUD2 = _interopRequireDefault(_TurnHUD);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  sendMessage: _message.sendMessage
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    messages: state.messages
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TurnHUD2.default);

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.SEND_MESSAGE = undefined;
	
	var _defineProperty2 = __webpack_require__(312);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	exports.sendMessage = sendMessage;
	exports.default = messageReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var SEND_MESSAGE = exports.SEND_MESSAGE = 'SEND_MESSAGE';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function sendMessage(playerName, playerColor, text) {
	  return {
	    type: SEND_MESSAGE,
	    payload: { playerName: playerName,
	      playerColor: playerColor,
	      text: text }
	  };
	}
	
	var actions = exports.actions = {
	  sendMessage: sendMessage
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, SEND_MESSAGE, function (state, action) {
	  state.push(action.payload);
	  return state.slice(0); //TODO: USAR LIBRARY THE IMMUTABLEs
	});
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = [];
	function messageReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TurnHUD = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TurnHUD = exports.TurnHUD = function TurnHUD(_ref) {
	  var _ref$playerName = _ref.playerName,
	      playerName = _ref$playerName === undefined ? 'test' : _ref$playerName,
	      _ref$playerColor = _ref.playerColor,
	      playerColor = _ref$playerColor === undefined ? 'red' : _ref$playerColor,
	      _ref$action = _ref.action,
	      action = _ref$action === undefined ? 'PLAY' : _ref$action,
	      _ref$isUserTurn = _ref.isUserTurn,
	      isUserTurn = _ref$isUserTurn === undefined ? false : _ref$isUserTurn,
	      messages = _ref.messages,
	      sendMessage = _ref.sendMessage;
	
	  var promptText = function promptText() {
	    var text = prompt('Say something');
	    if (text) {
	      sendMessage('vini', 'red', text);
	      console.log(text);
	    }
	  };
	  var messages_els = [];
	  for (var i = 0; i < messages.length; i++) {
	    var m = messages[i];
	    messages_els.push(_react2.default.createElement(
	      'p',
	      { style: { color: "white" } },
	      _react2.default.createElement(
	        'span',
	        { style: { color: m.playerColor } },
	        _react2.default.createElement(
	          'b',
	          null,
	          m.playerName
	        )
	      ),
	      ': ',
	      m.text
	    ));
	  }
	  return _react2.default.createElement(
	    'div',
	    { style: { width: "100%", position: "fixed",
	        left: "0px", right: "0px", top: "0px",
	        maxWidth: "500px", marginLeft: "auto", marginRight: "auto", zIndex: 999,
	        pointerEvents: "none" } },
	    _react2.default.createElement(
	      'svg',
	      { viewBox: '0 0 80 10' },
	      _react2.default.createElement(
	        'g',
	        null,
	        _react2.default.createElement('rect', { height: '10', width: '80', y: '0', x: '0', fill: 'white' }),
	        _react2.default.createElement('rect', { height: '10', width: '13.9', y: '0', x: '0', fill: 'white',
	          onClick: promptText, style: { pointerEvents: 'all' } }),
	        _react2.default.createElement('rect', { fillOpacity: '.1', height: '8.5', width: '.1', y: '.75', x: '14' }),
	        _react2.default.createElement(
	          'g',
	          { transform: 'matrix(.4 0 0 .4 69 .5)' },
	          _react2.default.createElement('path', { d: 'm9 16.2-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4-10.6 10.6z', fillOpacity: 1 })
	        ),
	        _react2.default.createElement(
	          'g',
	          { transform: 'matrix(.4 0 0 .4 2 .5)', onClick: promptText, style: { pointerEvents: 'all' } },
	          _react2.default.createElement('path', { d: 'm21.99 4c0-1.1-0.89-2-1.99-2h-16c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h14l4 4-0.01-18zm-3.99 10h-12v-2h12v2zm0-3h-12v-2h12v2zm0-3h-12v-2h12v2z' })
	        ),
	        _react2.default.createElement('rect', { fillOpacity: '.1', height: '8.5', width: '.1', y: '.75', x: '67' }),
	        _react2.default.createElement(
	          'text',
	          { fontFamily: 'sans-serif',
	            style: { textAnchor: "middle", textAlign: "center" } },
	          _react2.default.createElement(
	            'tspan',
	            { fontSize: '4px', x: '40', y: '9' },
	            action
	          )
	        ),
	        _react2.default.createElement(
	          'text',
	          { x: '40', fill: playerColor, fontFamily: 'sans-serif',
	            style: { textAnchor: "middle", textAlign: "center" } },
	          _react2.default.createElement(
	            'tspan',
	            { fontSize: '4px', y: '4px', x: '40' },
	            playerName
	          )
	        )
	      )
	    ),
	    messages_els
	  );
	};
	TurnHUD.propTypes = {
	  messages: _react2.default.PropTypes.array.isRequired,
	  sendMessage: _react2.default.PropTypes.func.isRequired
	};
	exports.default = TurnHUD;

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(320);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(325);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(326);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(327);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(361);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.requireAuthentication = requireAuthentication;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(369);
	
	var _reactRouter = __webpack_require__(224);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function requireAuthentication(Component) {
	    var AuthenticatedComponent = function (_React$Component) {
	        (0, _inherits3.default)(AuthenticatedComponent, _React$Component);
	
	        function AuthenticatedComponent() {
	            (0, _classCallCheck3.default)(this, AuthenticatedComponent);
	            return (0, _possibleConstructorReturn3.default)(this, (AuthenticatedComponent.__proto__ || (0, _getPrototypeOf2.default)(AuthenticatedComponent)).apply(this, arguments));
	        }
	
	        (0, _createClass3.default)(AuthenticatedComponent, [{
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                this.checkAuth();
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(nextProps) {
	                this.checkAuth();
	            }
	        }, {
	            key: 'checkAuth',
	            value: function checkAuth() {
	                if (!this.props.auth.isAuthenticated) {
	                    var redirectAfterLogin = this.props.location.pathname;
	                    _reactRouter.browserHistory.push('/login?next=' + redirectAfterLogin);
	                }
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    this.props.auth.isAuthenticated ? _react2.default.createElement(Component, this.props) : null
	                );
	            }
	        }]);
	        return AuthenticatedComponent;
	    }(_react2.default.Component);
	
	    var mapStateToProps = function mapStateToProps(state) {
	        return {
	            auth: state.auth
	        };
	    };
	
	    return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
	}

/***/ }

});
//# sourceMappingURL=1.checker.b3281c0ecb67d1c021b0.js.map