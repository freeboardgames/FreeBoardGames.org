webpackJsonp([1],{

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(357);
	
	var _checkerGameState = __webpack_require__(380);
	
	var _CheckerGame = __webpack_require__(381);
	
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

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.CLICK = undefined;
	
	var _defineProperty2 = __webpack_require__(300);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(276);
	
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

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CheckerGame = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CheckerBoard = __webpack_require__(382);
	
	var _CheckerBoard2 = _interopRequireDefault(_CheckerBoard);
	
	var _CheckerPiece = __webpack_require__(392);
	
	var _CheckerPiece2 = _interopRequireDefault(_CheckerPiece);
	
	__webpack_require__(393);
	
	var _TurnHUDContainer = __webpack_require__(395);
	
	var _TurnHUDContainer2 = _interopRequireDefault(_TurnHUDContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	*/
	var CheckerGame = exports.CheckerGame = function CheckerGame(_ref) {
	  var state = _ref.state;
	  var sendClick = _ref.sendClick;
	
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

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(349);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(383);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	__webpack_require__(390);
	
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

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(384);

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroup
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(26);
	
	var React = __webpack_require__(25);
	
	var ReactTransitionGroup = __webpack_require__(385);
	var ReactCSSTransitionGroupChild = __webpack_require__(387);
	
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
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',
	
	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },
	
	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },
	
	  render: function () {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(26);
	
	var React = __webpack_require__(25);
	var ReactInstanceMap = __webpack_require__(142);
	var ReactTransitionChildMapping = __webpack_require__(386);
	
	var emptyFunction = __webpack_require__(34);
	
	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping;
	    if (true) {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    }
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
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (true) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (true) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (true) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = _assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
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
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(151);
	
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

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(25);
	var ReactDOM = __webpack_require__(58);
	
	var CSSCore = __webpack_require__(388);
	var ReactTransitionEvents = __webpack_require__(389);
	
	var onlyChild = __webpack_require__(56);
	
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
	    var node = ReactDOM.findDOMNode(this);
	
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

/***/ 388:
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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(72);
	
	var getVendorPrefixedEventName = __webpack_require__(132);
	
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

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(391);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(375)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(391, function() {
				var newContent = __webpack_require__(391);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(374)();
	// imports
	
	
	// module
	exports.push([module.id, ".example-enter{opacity:.01}.example-enter.example-enter-active{opacity:1;transition:opacity .5s ease-in}.example-leave{opacity:1}.example-leave.example-leave-active{opacity:.01;transition:opacity .2s ease-in}", "", {"version":3,"sources":["/./src/games/CheckerGame/components/src/games/CheckerGame/components/CheckerBoard.scss"],"names":[],"mappings":"AAAA,eACE,WAAc,CACf,oCAGC,UAAW,8BACuB,CACnC,eAGC,SAAW,CACZ,oCAGC,YAAc,8BACoB,CACnC","file":"CheckerBoard.scss","sourcesContent":[".example-enter {\n  opacity: 0.01;\n}\n\n.example-enter.example-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in;\n}\n\n.example-leave {\n  opacity: 1;\n}\n\n.example-leave.example-leave-active {\n  opacity: 0.01;\n  transition: opacity 200ms ease-in;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(276);
	
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

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(394);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(375)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(394, function() {
				var newContent = __webpack_require__(394);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(374)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"CheckerGame.scss","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(357);
	
	var _message = __webpack_require__(396);
	
	var _TurnHUD = __webpack_require__(397);
	
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

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.SEND_MESSAGE = undefined;
	
	var _defineProperty2 = __webpack_require__(300);
	
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

/***/ 397:
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
	  var _ref$playerName = _ref.playerName;
	  var playerName = _ref$playerName === undefined ? 'test' : _ref$playerName;
	  var _ref$playerColor = _ref.playerColor;
	  var playerColor = _ref$playerColor === undefined ? 'red' : _ref$playerColor;
	  var _ref$action = _ref.action;
	  var action = _ref$action === undefined ? 'PLAY' : _ref$action;
	  var _ref$isUserTurn = _ref.isUserTurn;
	  var isUserTurn = _ref$isUserTurn === undefined ? false : _ref$isUserTurn;
	  var messages = _ref.messages;
	  var sendMessage = _ref.sendMessage;
	
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

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(349);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.requireAuthentication = requireAuthentication;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(357);
	
	var _reactRouter = __webpack_require__(212);
	
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
	                    this.props.isAuthenticated === true ? _react2.default.createElement(Component, this.props) : null
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
//# sourceMappingURL=1.checker.85e4367058af20ce0196.js.map