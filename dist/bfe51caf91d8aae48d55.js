(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.freeboardgame.org"],{

/***/ "./node_modules/@freeboardgame.org/boardgame.io/ai.js":
/*!************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/ai.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/ai.js */ "./node_modules/@freeboardgame.org/boardgame.io/dist/ai.js")


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/core.js":
/*!**************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/core.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/core.js */ "./node_modules/@freeboardgame.org/boardgame.io/dist/core.js")


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/dist/ai.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/dist/ai.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js"), __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js")) :
  undefined;
}(this, function (exports, flatted, produce) { 'use strict';

  produce = produce && produce.hasOwnProperty('default') ? produce['default'] : produce;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var MAKE_MOVE = 'MAKE_MOVE';
  var GAME_EVENT = 'GAME_EVENT';
  var REDO = 'REDO';
  var RESET = 'RESET';
  var SYNC = 'SYNC';
  var UNDO = 'UNDO';
  var UPDATE = 'UPDATE';

  // Inlined version of Alea from https://github.com/davidbau/seedrandom.

  /*
   * Copyright 2015 David Bau.
   *
   * Permission is hereby granted, free of charge,
   * to any person obtaining a copy of this software
   * and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge,
   * publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall
   * be included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */
  function Alea(seed) {
    var me = this,
        mash = Mash();

    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    }; // Apply the seeding algorithm from Baagoe.


    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);

    if (me.s0 < 0) {
      me.s0 += 1;
    }

    me.s1 -= mash(seed);

    if (me.s1 < 0) {
      me.s1 += 1;
    }

    me.s2 -= mash(seed);

    if (me.s2 < 0) {
      me.s2 += 1;
    }

    mash = null;
  }

  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function mash(data) {
      data = data.toString();

      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }

  function alea(seed, opts) {
    var xg = new Alea(seed),
        state = opts && opts.state,
        prng = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  /**
   * Random
   *
   * Calls that require a pseudorandom number generator.
   * Uses a seed from ctx, and also persists the PRNG
   * state in ctx so that moves can stay pure.
   */

  var Random =
  /*#__PURE__*/
  function () {
    /**
     * constructor
     * @param {object} ctx - The ctx object to initialize from.
     */
    function Random(ctx) {
      _classCallCheck(this, Random);

      // If we are on the client, the seed is not present.
      // Just use a temporary seed to execute the move without
      // crashing it. The move state itself is discarded,
      // so the actual value doesn't matter.
      this.state = ctx._random || {
        seed: '0'
      };
    }
    /**
     * Updates ctx with the PRNG state.
     * @param {object} ctx - The ctx object to update.
     */


    _createClass(Random, [{
      key: "update",
      value: function update(state) {
        var ctx = _objectSpread({}, state.ctx, {
          _random: this.state
        });

        return _objectSpread({}, state, {
          ctx: ctx
        });
      }
      /**
       * Attaches the Random API to ctx.
       * @param {object} ctx - The ctx object to attach to.
       */

    }, {
      key: "attach",
      value: function attach(ctx) {
        return _objectSpread({}, ctx, {
          random: this._api()
        });
      }
      /**
       * Generate a random number.
       */

    }, {
      key: "_random",
      value: function _random() {
        var R = this.state;
        var fn;

        if (R.prngstate === undefined) {
          // No call to a random function has been made.
          fn = new alea(R.seed, {
            state: true
          });
        } else {
          fn = new alea('', {
            state: R.prngstate
          });
        }

        var number = fn();
        this.state = _objectSpread({}, R, {
          prngstate: fn.state()
        });
        return number;
      }
    }, {
      key: "_api",
      value: function _api() {
        var random = this._random.bind(this);

        var SpotValue = {
          D4: 4,
          D6: 6,
          D8: 8,
          D10: 10,
          D12: 12,
          D20: 20
        }; // Generate functions for predefined dice values D4 - D20.

        var predefined = {};

        var _loop = function _loop(key) {
          var spotvalue = SpotValue[key];

          predefined[key] = function (diceCount) {
            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          };
        };

        for (var key in SpotValue) {
          _loop(key);
        }

        return _objectSpread({}, predefined, {
          /**
           * Roll a die of specified spot value.
           *
           * @param {number} spotvalue - The die dimension (default: 6).
           * @param {number} diceCount - number of dice to throw.
           *                             if not defined, defaults to 1 and returns the value directly.
           *                             if defined, returns an array containing the random dice values.
           */
          Die: function Die(spotvalue, diceCount) {
            if (spotvalue === undefined) {
              spotvalue = 6;
            }

            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          },

          /**
           * Generate a random number between 0 and 1.
           */
          Number: function Number() {
            return random();
          },

          /**
           * Shuffle an array.
           *
           * @param {Array} deck - The array to shuffle. Does not mutate
           *                       the input, but returns the shuffled array.
           */
          Shuffle: function Shuffle(deck) {
            var clone = deck.slice(0);
            var srcIndex = deck.length;
            var dstIndex = 0;
            var shuffled = new Array(srcIndex);

            while (srcIndex) {
              var randIndex = srcIndex * random() | 0;
              shuffled[dstIndex++] = clone[randIndex];
              clone[randIndex] = clone[--srcIndex];
            }

            return shuffled;
          }
        });
      }
    }]);

    return Random;
  }();
  /**
   * Removes the attached Random api from ctx.
   *
   * @param {object} ctx - The ctx object with the Random API attached.
   * @returns {object} A plain ctx object without the Random API.
   */

  Random.detach = function (ctx) {
    var random = ctx.random,
        rest = _objectWithoutProperties(ctx, ["random"]); // eslint-disable-line no-unused-vars


    return rest;
  };
  /**
   * Generates a new seed from the current date / time.
   */


  Random.seed = function () {
    return (+new Date()).toString(36).slice(-10);
  };

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Generate a move to be dispatched to the game move reducer.
   *
   * @param {string} type - The move type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var makeMove = function makeMove(type, args, playerID, credentials) {
    return {
      type: MAKE_MOVE,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      }
    };
  };
  /**
   * Generate a game event to be dispatched to the flow reducer.
   *
   * @param {string} type - The event type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var gameEvent = function gameEvent(type, args, playerID, credentials) {
    return {
      type: GAME_EVENT,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      }
    };
  };
  /**
   * Generate an automatic game event that is a side-effect of a move.
   * @param {string} type - The event type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var automaticGameEvent = function automaticGameEvent(type, args, playerID, credentials) {
    return {
      type: GAME_EVENT,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      },
      automatic: true
    };
  };

  /**
   * Events
   */

  var Events =
  /*#__PURE__*/
  function () {
    function Events(flow, playerID) {
      _classCallCheck(this, Events);

      this.flow = flow;
      this.playerID = playerID;
      this.dispatch = [];
    }
    /**
     * Attaches the Events API to ctx.
     * @param {object} ctx - The ctx object to attach to.
     */


    _createClass(Events, [{
      key: "attach",
      value: function attach(ctx) {
        var _this = this;

        var events = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var key = _step.value;

            events[key] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this.dispatch.push({
                key: key,
                args: args
              });
            };
          };

          for (var _iterator = this.flow.eventNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
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

        return _objectSpread({}, ctx, {
          events: events
        });
      }
      /**
       * Updates ctx with the triggered events.
       * @param {object} state - The state object { G, ctx }.
       */

    }, {
      key: "update",
      value: function update$$1(state) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.dispatch[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            var action = automaticGameEvent(item.key, item.args, this.playerID);
            state = _objectSpread({}, state, this.flow.processGameEvent(state, action));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return state;
      }
    }]);

    return Events;
  }();
  /**
   * Detaches the Events API from ctx.
   * @param {object} ctx - The ctx object to strip.
   */

  Events.detach = function (ctx) {
    var events = ctx.events,
        rest = _objectWithoutProperties(ctx, ["events"]); // eslint-disable-line no-unused-vars


    return rest;
  };

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  /**
   * Moves can return this when they want to indicate
   * that the combination of arguments is illegal and
   * the move ought to be discarded.
   */

  var INVALID_MOVE = 'INVALID_MOVE';
  /**
   * Context API to allow writing custom logs in games.
   */

  var GameLoggerCtxAPI =
  /*#__PURE__*/
  function () {
    function GameLoggerCtxAPI() {
      _classCallCheck(this, GameLoggerCtxAPI);

      this._payload = undefined;
    }

    _createClass(GameLoggerCtxAPI, [{
      key: "_api",
      value: function _api() {
        var _this = this;

        return {
          setPayload: function setPayload(payload) {
            _this._payload = payload;
          }
        };
      }
    }, {
      key: "attach",
      value: function attach(ctx$$1) {
        return _objectSpread({}, ctx$$1, {
          log: this._api()
        });
      }
    }, {
      key: "update",
      value: function update(state) {
        if (this._payload === undefined) {
          return state;
        } // attach the payload to the last log event


        var deltalog = state.deltalog;
        deltalog[deltalog.length - 1] = _objectSpread({}, deltalog[deltalog.length - 1], {
          payload: this._payload
        });
        this._payload = undefined;
        return _objectSpread({}, state, {
          deltalog: deltalog
        });
      }
    }], [{
      key: "detach",
      value: function detach(ctx$$1) {
        var log = ctx$$1.log,
            ctxWithoutLog = _objectWithoutProperties(ctx$$1, ["log"]); // eslint-disable-line no-unused-vars


        return ctxWithoutLog;
      }
    }]);

    return GameLoggerCtxAPI;
  }();
  /**
   * This class is used to attach/detach various utility objects
   * onto a ctx, without having to manually attach/detach them
   * all separately.
   */

  var ContextEnhancer =
  /*#__PURE__*/
  function () {
    function ContextEnhancer(ctx$$1, game, player) {
      _classCallCheck(this, ContextEnhancer);

      this.random = new Random(ctx$$1);
      this.events = new Events(game.flow, player);
      this.log = new GameLoggerCtxAPI();
    }

    _createClass(ContextEnhancer, [{
      key: "attachToContext",
      value: function attachToContext(ctx$$1) {
        var ctxWithAPI = this.random.attach(ctx$$1);
        ctxWithAPI = this.events.attach(ctxWithAPI);
        ctxWithAPI = this.log.attach(ctxWithAPI);
        return ctxWithAPI;
      }
    }, {
      key: "_update",
      value: function _update(state, updateEvents) {
        var newState = updateEvents ? this.events.update(state) : state;
        newState = this.random.update(newState);
        newState = this.log.update(newState);
        return newState;
      }
    }, {
      key: "updateAndDetach",
      value: function updateAndDetach(state, updateEvents) {
        var newState = this._update(state, updateEvents);

        newState.ctx = ContextEnhancer.detachAllFromContext(newState.ctx);
        return newState;
      }
    }], [{
      key: "detachAllFromContext",
      value: function detachAllFromContext(ctx$$1) {
        var ctxWithoutAPI = Random.detach(ctx$$1);
        ctxWithoutAPI = Events.detach(ctxWithoutAPI);
        ctxWithoutAPI = GameLoggerCtxAPI.detach(ctxWithoutAPI);
        return ctxWithoutAPI;
      }
    }]);

    return ContextEnhancer;
  }();
  /**
   * CreateGameReducer
   *
   * Creates the main game state reducer.
   * @param {...object} game - Return value of Game().
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
   */

  function CreateGameReducer(_ref2) {
    var game = _ref2.game,
        multiplayer = _ref2.multiplayer;

    /**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case GAME_EVENT:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Process game events only on the server.
            // These events like `endTurn` typically
            // contain code that may rely on secret state
            // and cannot be computed on the client.

            if (multiplayer) {
              return state;
            } // Ignore the event if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerCallEvent(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);
            state.ctx = apiCtx.attachToContext(state.ctx);
            var newState = game.flow.processGameEvent(state, action);
            newState = apiCtx.updateAndDetach(newState, true);
            return _objectSpread({}, newState, {
              _stateID: state._stateID + 1
            });
          }

        case MAKE_MOVE:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Check whether the game knows the move at all.

            if (!game.moveNames.includes(action.payload.type)) {
              return state;
            } // Ignore the move if it isn't allowed at this point.


            if (!game.flow.canMakeMove(state.G, state.ctx, action.payload.type)) {
              return state;
            } // Ignore the move if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerMakeMove(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var _apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);

            var ctxWithAPI = _apiCtx.attachToContext(state.ctx); // Process the move.


            var G$$1 = game.processMove(state.G, action.payload, ctxWithAPI);

            if (G$$1 === INVALID_MOVE) {
              // the game declared the move as invalid.
              return state;
            } // Create a log entry for this move.


            var logEntry = {
              action: action,
              _stateID: state._stateID,
              turn: state.ctx.turn,
              phase: state.ctx.phase
            }; // don't call into events here

            var _newState = _apiCtx.updateAndDetach(_objectSpread({}, state, {
              deltalog: [logEntry]
            }), false);

            var ctx$$1 = _newState.ctx; // Undo changes to G if the move should not run on the client.

            if (multiplayer && !game.flow.optimisticUpdate(G$$1, ctx$$1, action.payload)) {
              G$$1 = state.G;
            }

            state = _objectSpread({}, _newState, {
              G: G$$1,
              ctx: ctx$$1,
              _stateID: state._stateID + 1
            }); // If we're on the client, just process the move
            // and no triggers in multiplayer mode.
            // These will be processed on the server, which
            // will send back a state update.

            if (multiplayer) {
              return state;
            } // Allow the flow reducer to process any triggers that happen after moves.


            ctxWithAPI = _apiCtx.attachToContext(state.ctx);
            state = game.flow.processMove(_objectSpread({}, state, {
              ctx: ctxWithAPI
            }), action.payload);
            state = _apiCtx.updateAndDetach(state, true);
            state._undo[state._undo.length - 1].ctx = state.ctx;
            return state;
          }

        case RESET:
        case UPDATE:
        case SYNC:
          {
            return action.state;
          }

        case UNDO:
          {
            var _state = state,
                _undo = _state._undo,
                _redo = _state._redo;

            if (_undo.length < 2) {
              return state;
            }

            var last = _undo[_undo.length - 1];
            var restore = _undo[_undo.length - 2]; // Only allow undoable moves to be undone.

            if (!game.flow.canUndoMove(state.G, state.ctx, last.moveType)) {
              return state;
            }

            return _objectSpread({}, state, {
              G: restore.G,
              ctx: restore.ctx,
              _undo: _undo.slice(0, _undo.length - 1),
              _redo: [last].concat(_toConsumableArray(_redo))
            });
          }

        case REDO:
          {
            var _state2 = state,
                _undo2 = _state2._undo,
                _redo2 = _state2._redo;

            if (_redo2.length == 0) {
              return state;
            }

            var first = _redo2[0];
            return _objectSpread({}, state, {
              G: first.G,
              ctx: first.ctx,
              _undo: [].concat(_toConsumableArray(_undo2), [first]),
              _redo: _redo2.slice(1)
            });
          }

        default:
          {
            return state;
          }
      }
    };
  }

  var Bot =
  /*#__PURE__*/
  function () {
    function Bot(_ref2) {
      var _this = this;

      var enumerate = _ref2.enumerate,
          seed = _ref2.seed;

      _classCallCheck(this, Bot);

      _defineProperty(this, "enumerate", function (G, ctx, playerID) {
        var actions = _this.enumerateFn(G, ctx, playerID);

        return actions.map(function (a) {
          if (a.payload !== undefined) {
            return a;
          }

          if (a.move !== undefined) {
            return makeMove(a.move, a.args, playerID);
          }

          if (a.event !== undefined) {
            return gameEvent(a.event, a.args, playerID);
          }
        });
      });

      this.enumerateFn = enumerate;
      this.seed = seed;
    }

    _createClass(Bot, [{
      key: "random",
      value: function random(arg) {
        var number;

        if (this.seed !== undefined) {
          var r = null;

          if (this.prngstate) {
            r = new alea('', {
              state: this.prngstate
            });
          } else {
            r = new alea(this.seed, {
              state: true
            });
          }

          number = r();
          this.prngstate = r.state();
        } else {
          number = Math.random();
        }

        if (arg) {
          // eslint-disable-next-line unicorn/explicit-length-check
          if (arg.length) {
            var id = Math.floor(number * arg.length);
            return arg[id];
          } else {
            return Math.floor(number * arg);
          }
        }

        return number;
      }
    }]);

    return Bot;
  }();
  var RandomBot =
  /*#__PURE__*/
  function (_Bot) {
    _inherits(RandomBot, _Bot);

    function RandomBot() {
      _classCallCheck(this, RandomBot);

      return _possibleConstructorReturn(this, _getPrototypeOf(RandomBot).apply(this, arguments));
    }

    _createClass(RandomBot, [{
      key: "play",
      value: function play(_ref3, playerID) {
        var G = _ref3.G,
            ctx = _ref3.ctx;
        var moves = this.enumerate(G, ctx, playerID);
        return {
          action: this.random(moves)
        };
      }
    }]);

    return RandomBot;
  }(Bot);
  var MCTSBot =
  /*#__PURE__*/
  function (_Bot2) {
    _inherits(MCTSBot, _Bot2);

    function MCTSBot(_ref4) {
      var _this2;

      var enumerate = _ref4.enumerate,
          seed = _ref4.seed,
          objectives = _ref4.objectives,
          game = _ref4.game,
          iterations = _ref4.iterations,
          playoutDepth = _ref4.playoutDepth;

      _classCallCheck(this, MCTSBot);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MCTSBot).call(this, {
        enumerate: enumerate,
        seed: seed
      }));

      if (objectives === undefined) {
        objectives = function objectives() {
          return {};
        };
      }

      _this2.objectives = objectives;
      _this2.reducer = CreateGameReducer({
        game: game
      });
      _this2.iterations = iterations || 1000;
      _this2.playoutDepth = playoutDepth || 50;
      return _this2;
    }

    _createClass(MCTSBot, [{
      key: "createNode",
      value: function createNode(_ref5) {
        var state = _ref5.state,
            parentAction = _ref5.parentAction,
            parent = _ref5.parent,
            playerID = _ref5.playerID;
        var G = state.G,
            ctx = state.ctx;
        var actions = [];
        var objectives = [];

        if (playerID !== undefined) {
          actions = this.enumerate(G, ctx, playerID);
          objectives = this.objectives(G, ctx, playerID);
        } else {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = ctx.actionPlayers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _playerID = _step.value;
              actions = actions.concat(this.enumerate(G, ctx, _playerID));
              objectives = objectives.concat(this.objectives(G, ctx, _playerID));
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
        }

        return {
          // Game state at this node.
          state: state,
          // Parent of the node.
          parent: parent,
          // Move used to get to this node.
          parentAction: parentAction,
          // Unexplored actions.
          actions: actions,
          // Current objectives.
          objectives: objectives,
          // Children of the node.
          children: [],
          // Number of simulations that pass through this node.
          visits: 0,
          // Number of wins for this node.
          value: 0
        };
      }
    }, {
      key: "select",
      value: function select(node) {
        // This node has unvisited children.
        if (node.actions.length > 0) {
          return node;
        } // This is a terminal node.


        if (node.children.length == 0) {
          return node;
        }

        var selectedChild = null;
        var best = 0.0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;
            var childVisits = child.visits + Number.EPSILON;
            var uct = child.value / childVisits + Math.sqrt(2 * Math.log(node.visits) / childVisits);

            if (selectedChild == null || uct > best) {
              best = uct;
              selectedChild = child;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return this.select(selectedChild);
      }
    }, {
      key: "expand",
      value: function expand(node) {
        var actions = node.actions;

        if (actions.length == 0 || node.state.ctx.gameover !== undefined) {
          return node;
        }

        var id = this.random(actions.length);
        var action = actions[id];
        node.actions.splice(id, 1);
        var childState = this.reducer(node.state, action);
        var childNode = this.createNode({
          state: childState,
          parentAction: action,
          parent: node
        });
        node.children.push(childNode);
        return childNode;
      }
    }, {
      key: "playout",
      value: function playout(node) {
        var _this3 = this;

        var state = node.state;

        var _loop = function _loop(i) {
          var _state = state,
              G = _state.G,
              ctx = _state.ctx;

          var moves = _this3.enumerate(G, ctx, ctx.actionPlayers[0]); // Check if any objectives are met.


          var objectives = _this3.objectives(G, ctx);

          var score = Object.keys(objectives).reduce(function (score, key) {
            var objective = objectives[key];

            if (objective.checker(G, ctx)) {
              return score + objective.weight;
            }

            return score;
          }, 0.0); // If so, stop and return the score.

          if (score > 0) {
            return {
              v: {
                score: score
              }
            };
          }

          if (!moves || moves.length == 0) {
            return {
              v: undefined
            };
          }

          var id = _this3.random(moves.length);

          var childState = _this3.reducer(state, moves[id]);

          state = childState;
        };

        for (var i = 0; i < this.playoutDepth && state.ctx.gameover === undefined; i++) {
          var _ret = _loop(i);

          if (_typeof(_ret) === "object") return _ret.v;
        }

        return state.ctx.gameover;
      }
    }, {
      key: "backpropagate",
      value: function backpropagate(node) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        node.visits++;

        if (result.score !== undefined) {
          node.value += result.score;
        }

        if (result.draw === true) {
          node.value += 0.5;
        }

        if (node.parentAction && result.winner === node.parentAction.payload.playerID) {
          node.value++;
        }

        if (node.parent) {
          this.backpropagate(node.parent, result);
        }
      }
    }, {
      key: "play",
      value: function play(state, playerID) {
        var root = this.createNode({
          state: state,
          playerID: playerID
        });

        for (var i = 0; i < this.iterations; i++) {
          var leaf = this.select(root);
          var child = this.expand(leaf);
          var result = this.playout(child);
          this.backpropagate(child, result);
        }

        var selectedChild = null;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = root.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _child = _step3.value;

            if (selectedChild == null || _child.visits > selectedChild.visits) {
              selectedChild = _child;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var action = selectedChild && selectedChild.parentAction;
        var metadata = root;
        return {
          action: action,
          metadata: metadata
        };
      }
    }]);

    return MCTSBot;
  }(Bot);

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  function AI(_ref) {
    var bot = _ref.bot,
        enumerate = _ref.enumerate,
        visualize = _ref.visualize;

    if (!bot) {
      bot = MCTSBot;
    }

    return {
      bot: bot,
      enumerate: enumerate,
      visualize: visualize
    };
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  exports.AI = AI;
  exports.RandomBot = RandomBot;
  exports.MCTSBot = MCTSBot;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/dist/core.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/dist/core.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js"), __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js")) :
  undefined;
}(this, function (exports, produce, flatted) { 'use strict';

  produce = produce && produce.hasOwnProperty('default') ? produce['default'] : produce;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Plugin that allows using Immer to make immutable changes
   * to G by just mutating it.
   */

  var PluginImmer = {
    fnWrap: function fnWrap(move) {
      return produce(move);
    }
  };

  /**
   * List of plugins that are always added.
   */

  var DEFAULT_PLUGINS = [PluginImmer];
  /**
   * Applies the provided plugins to ctx before processing a move / event.
   *
   * @param {object} ctx - The ctx object.
   * @param {object} game - The game object.
   */

  var CtxPreMove = function CtxPreMove(ctx, game) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.ctx !== undefined;
    }).filter(function (plugin) {
      return plugin.ctx.preMove !== undefined;
    }).forEach(function (plugin) {
      ctx = plugin.ctx.preMove(ctx, game);
    });
    return ctx;
  };
  /**
   * Applies the provided plugins to G before processing a move / event.
   *
   * @param {object} G - The G object.
   * @param {object} game - The game object.
   */


  var GPreMove = function GPreMove(G, game) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.G !== undefined;
    }).filter(function (plugin) {
      return plugin.G.preMove !== undefined;
    }).forEach(function (plugin) {
      G = plugin.G.preMove(G, game);
    });
    return G;
  };
  /**
   * Postprocesses G after a move / event.
   *
   * @param {object} G - The G object.
   * @param {object} game - The game object.
   */


  var GPostMove = function GPostMove(G, game) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.G !== undefined;
    }).filter(function (plugin) {
      return plugin.G.postMove !== undefined;
    }).forEach(function (plugin) {
      G = plugin.G.postMove(G, game);
    });
    return G;
  };
  /**
   * Applies the provided plugins to the given move / flow function.
   *
   * @param {function} fn - The move function or trigger to apply the plugins to.
   * @param {object} game - The game object.
   */


  var FnWrap = function FnWrap(fn, game) {
    var reducer = function reducer(acc, _ref) {
      var fnWrap = _ref.fnWrap;
      return fnWrap(acc, game);
    };

    var g = [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.fnWrap !== undefined;
    }).reduce(reducer, fn);
    return function (G, ctx) {
      G = GPreMove(G, game);
      ctx = CtxPreMove(ctx, game);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      G = g.apply(void 0, [G, ctx].concat(args));
      G = GPostMove(G, game);
      return G;
    };
  };
  var G = {
    /**
     * Applies the provided plugins to G during game setup.
     *
     * @param {object} G - The G object.
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    setup: function setup(G, ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.G !== undefined;
      }).filter(function (plugin) {
        return plugin.G.setup !== undefined;
      }).forEach(function (plugin) {
        G = plugin.G.setup(G, ctx, game);
      });
      return G;
    },

    /**
     * Applies the provided plugins to G during the beginning of the phase.
     *
     * @param {object} G - The G object.
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    onPhaseBegin: function onPhaseBegin(G, ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.G !== undefined;
      }).filter(function (plugin) {
        return plugin.G.onPhaseBegin !== undefined;
      }).forEach(function (plugin) {
        G = plugin.G.onPhaseBegin(G, ctx, game);
      });
      return G;
    }
  };
  var ctx = {
    /**
     * Applies the provided plugins to ctx during game setup.
     *
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    setup: function setup(ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.ctx !== undefined;
      }).filter(function (plugin) {
        return plugin.ctx.setup !== undefined;
      }).forEach(function (plugin) {
        ctx = plugin.ctx.setup(ctx, game);
      });
      return ctx;
    },

    /**
     * Applies the provided plugins to ctx during the beginning of the phase.
     *
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    onPhaseBegin: function onPhaseBegin(ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.ctx !== undefined;
      }).filter(function (plugin) {
        return plugin.ctx.onPhaseBegin !== undefined;
      }).forEach(function (plugin) {
        ctx = plugin.ctx.onPhaseBegin(ctx, game);
      });
      return ctx;
    }
  };

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var DEV =  true || false;
  var logfn = DEV ? console.log : function () {};
  var errorfn = DEV ? console.error : function () {};
  function error(error) {
    errorfn('ERROR:', error);
  }

  /**
   * Standard move that simulates passing.
   *
   * Creates two objects in G:
   * passOrder - An array of playerIDs capturing passes in the pass order.
   * allPassed - Set to true when all players have passed.
   */

  var Pass = function Pass(G, ctx) {
    var passOrder = [];

    if (G.passOrder !== undefined) {
      passOrder = G.passOrder;
    }

    var playerID = ctx.playerID;
    passOrder = [].concat(_toConsumableArray(passOrder), [playerID]);
    G = _objectSpread({}, G, {
      passOrder: passOrder
    });

    if (passOrder.length >= ctx.numPlayers) {
      G = _objectSpread({}, G, {
        allPassed: true
      });
    }

    return G;
  };
  /**
   * Event to change the actionPlayers array.
   * @param {object} state - The game state.
   * @param {object} arg - An array of playerID's or <object> of:
   *   {
   *     value: (G, ctx) => [],        // function that returns an array of playerID's (optional if all is set)
   *
   *     all: true,        // set value to all playerID's
   *
   *     others: true,     // set value to all except currentPlayer.
   *
   *     once: true,       // players have one move
   *                       // (after which they're pruned from actionPlayers).
   *                       // The phase ends once actionPlayers becomes empty.
   *   }
   */

  function SetActionPlayersEvent(state, arg) {
    return _objectSpread({}, state, {
      ctx: setActionPlayers(state.G, state.ctx, arg)
    });
  }

  function setActionPlayers(G, ctx, arg) {
    var actionPlayers = [];

    if (arg.value) {
      actionPlayers = arg.value(G, ctx);
    }

    if (arg.all) {
      actionPlayers = _toConsumableArray(ctx.playOrder);
    }

    if (arg.others) {
      actionPlayers = _toConsumableArray(ctx.playOrder).filter(function (nr) {
        return nr !== ctx.currentPlayer;
      });
    }

    if (Array.isArray(arg)) {
      actionPlayers = arg;
    }

    return _objectSpread({}, ctx, {
      actionPlayers: actionPlayers,
      _actionPlayersOnce: arg.once || false
    });
  }
  /**
   * Converts a playOrderPos index into its value in playOrder.
   * @param {Array} playOrder - An array of player ID's.
   * @param {number} playOrderPos - An index into the above.
   */


  function getCurrentPlayer(playOrder, playOrderPos) {
    return playOrder[playOrderPos] + '';
  }
  /**
   * Called at the start of a phase to initialize turn order state.
   * @param {object} G - The game object G.
   * @param {object} ctx - The game object ctx.
   * @param {object} turnOrder - A turn order object for this phase.
   */


  function InitTurnOrderState(G, ctx, turnOrder) {
    var playOrder = _toConsumableArray(new Array(ctx.numPlayers)).map(function (d, i) {
      return i + '';
    });

    if (turnOrder.playOrder !== undefined) {
      playOrder = turnOrder.playOrder(G, ctx);
    }

    var playOrderPos = turnOrder.first(G, ctx);
    var currentPlayer = getCurrentPlayer(playOrder, playOrderPos);

    if (turnOrder.actionPlayers !== undefined) {
      ctx = setActionPlayers(G, ctx, turnOrder.actionPlayers);
    } else {
      ctx = _objectSpread({}, ctx, {
        actionPlayers: [currentPlayer]
      });
    }

    return _objectSpread({}, ctx, {
      currentPlayer: currentPlayer,
      playOrderPos: playOrderPos,
      playOrder: playOrder
    });
  }
  /**
   * Called at the end of each turn to update the turn order state.
   * @param {object} G - The game object G.
   * @param {object} ctx - The game object ctx.
   * @param {object} turnOrder - A turn order object for this phase.
   * @param {string} endTurnArg - An optional argument to endTurn that
                                  may specify the next player.
   */

  function UpdateTurnOrderState(G, ctx, turnOrder, endTurnArg) {
    var playOrderPos = ctx.playOrderPos;
    var currentPlayer = ctx.currentPlayer;
    var actionPlayers = ctx.actionPlayers;
    var endPhase = false;

    if (endTurnArg && endTurnArg !== true) {
      if (ctx.playOrder.includes(endTurnArg.next)) {
        playOrderPos = ctx.playOrder.indexOf(endTurnArg.next);
        currentPlayer = endTurnArg.next;
        actionPlayers = [currentPlayer];
      } else {
        error("invalid argument to endTurn: ".concat(endTurnArg));
      }
    } else {
      var t = turnOrder.next(G, ctx);

      if (t === undefined) {
        endPhase = true;
      } else {
        playOrderPos = t;
        currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);

        if (turnOrder.actionPlayers === undefined) {
          actionPlayers = [currentPlayer];
        }
      }
    }

    ctx = _objectSpread({}, ctx, {
      playOrderPos: playOrderPos,
      currentPlayer: currentPlayer,
      actionPlayers: actionPlayers
    });
    return {
      endPhase: endPhase,
      ctx: ctx
    };
  }
  /**
   * Set of different turn orders possible in a phase.
   * These are meant to be passed to the `turnOrder` setting
   * in the flow objects.
   *
   * Each object defines the first player when the phase / game
   * begins, and also a function `next` to determine who the
   * next player is when the turn ends.
   *
   * Objects can also contain an actionPlayers section which
   * is passed to SetActionPlayers above at the beginning of
   * the phase.
   *
   * The phase ends if next() returns undefined.
   */

  var TurnOrder = {
    /**
     * DEFAULT
     *
     * The default round-robin turn order.
     */
    DEFAULT: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        return (ctx.playOrderPos + 1) % ctx.playOrder.length;
      }
    },

    /**
     * ONCE
     *
     * Another round-robin turn order, but goes around just once.
     * The phase ends after all players have played.
     */
    ONCE: {
      first: function first() {
        return 0;
      },
      next: function next(G, ctx) {
        if (ctx.playOrderPos < ctx.playOrder.length - 1) {
          return ctx.playOrderPos + 1;
        }
      }
    },

    /**
     * ANY
     *
     * The turn stays with one player, but any player can play (in any order)
     * until the phase ends.
     */
    ANY: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        return ctx.playOrderPos;
      },
      actionPlayers: {
        all: true
      }
    },

    /**
     * ANY_ONCE
     *
     * The turn stays with one player, but any player can play (once, and in any order).
     * This is typically used in a phase where you want to elicit a response
     * from every player in the game.
     */
    ANY_ONCE: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        return ctx.playOrderPos;
      },
      actionPlayers: {
        all: true,
        once: true
      },
      endPhaseOnceDone: true
    },

    /**
     * OTHERS
     *
     * The turn stays with one player, and every *other* player can play (in any order)
     * until the phase ends.
     */
    OTHERS: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        return ctx.playOrderPos;
      },
      actionPlayers: {
        others: true
      }
    },

    /**
     * OTHERS_ONCE
     *
     * The turn stays with one player, and every *other* player can play (once, and in any order).
     * This is typically used in a phase where you want to elicit a response
     * from every *other* player in the game.
     */
    OTHERS_ONCE: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        return ctx.playOrderPos;
      },
      actionPlayers: {
        others: true,
        once: true
      },
      endPhaseOnceDone: true
    },

    /**
     * CUSTOM
     *
     * Identical to DEFAULT, but also sets playOrder at the
     * beginning of the phase.
     *
     * @param {Array} playOrder - The play order.
     */
    CUSTOM: function CUSTOM(_playOrder) {
      return {
        playOrder: function playOrder() {
          return _playOrder;
        },
        first: function first() {
          return 0;
        },
        next: function next(G, ctx) {
          return (ctx.playOrderPos + 1) % ctx.playOrder.length;
        }
      };
    },

    /**
     * CUSTOM_FROM
     *
     * Identical to DEFAULT, but also sets playOrder at the
     * beginning of the phase to a value specified by a field
     * in G.
     *
     * @param {string} playOrderField - Field in G.
     */
    CUSTOM_FROM: function CUSTOM_FROM(playOrderField) {
      return {
        playOrder: function playOrder(G) {
          return G[playOrderField];
        },
        first: function first() {
          return 0;
        },
        next: function next(G, ctx) {
          return (ctx.playOrderPos + 1) % ctx.playOrder.length;
        }
      };
    },

    /**
     * SKIP
     *
     * Round-robin, but skips over any players that have passed.
     * Meant to be used with Pass above.
     */
    SKIP: {
      first: function first(G, ctx) {
        return ctx.playOrderPos;
      },
      next: function next(G, ctx) {
        if (G.allPassed) return;
        var playOrderPos = ctx.playOrderPos;

        for (var i = 0; i < ctx.playOrder.length; i++) {
          playOrderPos = (playOrderPos + 1) % ctx.playOrder.length;

          if (!G.passOrder.includes(ctx.playOrder[playOrderPos] + '')) {
            return playOrderPos;
          }
        }
      }
    }
  };

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var MAKE_MOVE = 'MAKE_MOVE';
  var GAME_EVENT = 'GAME_EVENT';
  var REDO = 'REDO';
  var RESET = 'RESET';
  var SYNC = 'SYNC';
  var UNDO = 'UNDO';
  var UPDATE = 'UPDATE';

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Generate an automatic game event that is a side-effect of a move.
   * @param {string} type - The event type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var automaticGameEvent = function automaticGameEvent(type, args, playerID, credentials) {
    return {
      type: GAME_EVENT,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      },
      automatic: true
    };
  };

  // Inlined version of Alea from https://github.com/davidbau/seedrandom.

  /*
   * Copyright 2015 David Bau.
   *
   * Permission is hereby granted, free of charge,
   * to any person obtaining a copy of this software
   * and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge,
   * publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall
   * be included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */
  function Alea(seed) {
    var me = this,
        mash = Mash();

    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    }; // Apply the seeding algorithm from Baagoe.


    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);

    if (me.s0 < 0) {
      me.s0 += 1;
    }

    me.s1 -= mash(seed);

    if (me.s1 < 0) {
      me.s1 += 1;
    }

    me.s2 -= mash(seed);

    if (me.s2 < 0) {
      me.s2 += 1;
    }

    mash = null;
  }

  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function mash(data) {
      data = data.toString();

      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }

  function alea(seed, opts) {
    var xg = new Alea(seed),
        state = opts && opts.state,
        prng = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  /**
   * Random
   *
   * Calls that require a pseudorandom number generator.
   * Uses a seed from ctx, and also persists the PRNG
   * state in ctx so that moves can stay pure.
   */

  var Random =
  /*#__PURE__*/
  function () {
    /**
     * constructor
     * @param {object} ctx - The ctx object to initialize from.
     */
    function Random(ctx) {
      _classCallCheck(this, Random);

      // If we are on the client, the seed is not present.
      // Just use a temporary seed to execute the move without
      // crashing it. The move state itself is discarded,
      // so the actual value doesn't matter.
      this.state = ctx._random || {
        seed: '0'
      };
    }
    /**
     * Updates ctx with the PRNG state.
     * @param {object} ctx - The ctx object to update.
     */


    _createClass(Random, [{
      key: "update",
      value: function update(state) {
        var ctx = _objectSpread({}, state.ctx, {
          _random: this.state
        });

        return _objectSpread({}, state, {
          ctx: ctx
        });
      }
      /**
       * Attaches the Random API to ctx.
       * @param {object} ctx - The ctx object to attach to.
       */

    }, {
      key: "attach",
      value: function attach(ctx) {
        return _objectSpread({}, ctx, {
          random: this._api()
        });
      }
      /**
       * Generate a random number.
       */

    }, {
      key: "_random",
      value: function _random() {
        var R = this.state;
        var fn;

        if (R.prngstate === undefined) {
          // No call to a random function has been made.
          fn = new alea(R.seed, {
            state: true
          });
        } else {
          fn = new alea('', {
            state: R.prngstate
          });
        }

        var number = fn();
        this.state = _objectSpread({}, R, {
          prngstate: fn.state()
        });
        return number;
      }
    }, {
      key: "_api",
      value: function _api() {
        var random = this._random.bind(this);

        var SpotValue = {
          D4: 4,
          D6: 6,
          D8: 8,
          D10: 10,
          D12: 12,
          D20: 20
        }; // Generate functions for predefined dice values D4 - D20.

        var predefined = {};

        var _loop = function _loop(key) {
          var spotvalue = SpotValue[key];

          predefined[key] = function (diceCount) {
            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          };
        };

        for (var key in SpotValue) {
          _loop(key);
        }

        return _objectSpread({}, predefined, {
          /**
           * Roll a die of specified spot value.
           *
           * @param {number} spotvalue - The die dimension (default: 6).
           * @param {number} diceCount - number of dice to throw.
           *                             if not defined, defaults to 1 and returns the value directly.
           *                             if defined, returns an array containing the random dice values.
           */
          Die: function Die(spotvalue, diceCount) {
            if (spotvalue === undefined) {
              spotvalue = 6;
            }

            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          },

          /**
           * Generate a random number between 0 and 1.
           */
          Number: function Number() {
            return random();
          },

          /**
           * Shuffle an array.
           *
           * @param {Array} deck - The array to shuffle. Does not mutate
           *                       the input, but returns the shuffled array.
           */
          Shuffle: function Shuffle(deck) {
            var clone = deck.slice(0);
            var srcIndex = deck.length;
            var dstIndex = 0;
            var shuffled = new Array(srcIndex);

            while (srcIndex) {
              var randIndex = srcIndex * random() | 0;
              shuffled[dstIndex++] = clone[randIndex];
              clone[randIndex] = clone[--srcIndex];
            }

            return shuffled;
          }
        });
      }
    }]);

    return Random;
  }();
  /**
   * Removes the attached Random api from ctx.
   *
   * @param {object} ctx - The ctx object with the Random API attached.
   * @returns {object} A plain ctx object without the Random API.
   */

  Random.detach = function (ctx) {
    var random = ctx.random,
        rest = _objectWithoutProperties(ctx, ["random"]); // eslint-disable-line no-unused-vars


    return rest;
  };
  /**
   * Generates a new seed from the current date / time.
   */


  Random.seed = function () {
    return (+new Date()).toString(36).slice(-10);
  };

  /**
   * Events
   */

  var Events =
  /*#__PURE__*/
  function () {
    function Events(flow, playerID) {
      _classCallCheck(this, Events);

      this.flow = flow;
      this.playerID = playerID;
      this.dispatch = [];
    }
    /**
     * Attaches the Events API to ctx.
     * @param {object} ctx - The ctx object to attach to.
     */


    _createClass(Events, [{
      key: "attach",
      value: function attach(ctx) {
        var _this = this;

        var events = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var key = _step.value;

            events[key] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this.dispatch.push({
                key: key,
                args: args
              });
            };
          };

          for (var _iterator = this.flow.eventNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
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

        return _objectSpread({}, ctx, {
          events: events
        });
      }
      /**
       * Updates ctx with the triggered events.
       * @param {object} state - The state object { G, ctx }.
       */

    }, {
      key: "update",
      value: function update$$1(state) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.dispatch[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            var action = automaticGameEvent(item.key, item.args, this.playerID);
            state = _objectSpread({}, state, this.flow.processGameEvent(state, action));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return state;
      }
    }]);

    return Events;
  }();
  /**
   * Detaches the Events API from ctx.
   * @param {object} ctx - The ctx object to strip.
   */

  Events.detach = function (ctx) {
    var events = ctx.events,
        rest = _objectWithoutProperties(ctx, ["events"]); // eslint-disable-line no-unused-vars


    return rest;
  };

  /**
   * Moves can return this when they want to indicate
   * that the combination of arguments is illegal and
   * the move ought to be discarded.
   */

  var INVALID_MOVE = 'INVALID_MOVE';
  /**
   * Context API to allow writing custom logs in games.
   */

  var GameLoggerCtxAPI =
  /*#__PURE__*/
  function () {
    function GameLoggerCtxAPI() {
      _classCallCheck(this, GameLoggerCtxAPI);

      this._payload = undefined;
    }

    _createClass(GameLoggerCtxAPI, [{
      key: "_api",
      value: function _api() {
        var _this = this;

        return {
          setPayload: function setPayload(payload) {
            _this._payload = payload;
          }
        };
      }
    }, {
      key: "attach",
      value: function attach(ctx$$1) {
        return _objectSpread({}, ctx$$1, {
          log: this._api()
        });
      }
    }, {
      key: "update",
      value: function update(state) {
        if (this._payload === undefined) {
          return state;
        } // attach the payload to the last log event


        var deltalog = state.deltalog;
        deltalog[deltalog.length - 1] = _objectSpread({}, deltalog[deltalog.length - 1], {
          payload: this._payload
        });
        this._payload = undefined;
        return _objectSpread({}, state, {
          deltalog: deltalog
        });
      }
    }], [{
      key: "detach",
      value: function detach(ctx$$1) {
        var log = ctx$$1.log,
            ctxWithoutLog = _objectWithoutProperties(ctx$$1, ["log"]); // eslint-disable-line no-unused-vars


        return ctxWithoutLog;
      }
    }]);

    return GameLoggerCtxAPI;
  }();
  /**
   * This class is used to attach/detach various utility objects
   * onto a ctx, without having to manually attach/detach them
   * all separately.
   */

  var ContextEnhancer =
  /*#__PURE__*/
  function () {
    function ContextEnhancer(ctx$$1, game, player) {
      _classCallCheck(this, ContextEnhancer);

      this.random = new Random(ctx$$1);
      this.events = new Events(game.flow, player);
      this.log = new GameLoggerCtxAPI();
    }

    _createClass(ContextEnhancer, [{
      key: "attachToContext",
      value: function attachToContext(ctx$$1) {
        var ctxWithAPI = this.random.attach(ctx$$1);
        ctxWithAPI = this.events.attach(ctxWithAPI);
        ctxWithAPI = this.log.attach(ctxWithAPI);
        return ctxWithAPI;
      }
    }, {
      key: "_update",
      value: function _update(state, updateEvents) {
        var newState = updateEvents ? this.events.update(state) : state;
        newState = this.random.update(newState);
        newState = this.log.update(newState);
        return newState;
      }
    }, {
      key: "updateAndDetach",
      value: function updateAndDetach(state, updateEvents) {
        var newState = this._update(state, updateEvents);

        newState.ctx = ContextEnhancer.detachAllFromContext(newState.ctx);
        return newState;
      }
    }], [{
      key: "detachAllFromContext",
      value: function detachAllFromContext(ctx$$1) {
        var ctxWithoutAPI = Random.detach(ctx$$1);
        ctxWithoutAPI = Events.detach(ctxWithoutAPI);
        ctxWithoutAPI = GameLoggerCtxAPI.detach(ctxWithoutAPI);
        return ctxWithoutAPI;
      }
    }]);

    return ContextEnhancer;
  }();
  /**
   * InitializeGame
   *
   * Creates the initial game state.
   *
   * @param {...object} game - Return value of Game().
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
   */

  function InitializeGame(_ref) {
    var game = _ref.game,
        numPlayers = _ref.numPlayers,
        setupData = _ref.setupData;

    if (!numPlayers) {
      numPlayers = 2;
    }

    var ctx$$1 = game.flow.ctx(numPlayers);
    var seed = game.seed;

    if (seed === undefined) {
      seed = Random.seed();
    }

    ctx$$1._random = {
      seed: seed
    }; // Pass ctx through all the plugins that want to modify it.

    ctx$$1 = ctx.setup(ctx$$1, game); // Augment ctx with the enhancers (TODO: move these into plugins).

    var apiCtx = new ContextEnhancer(ctx$$1, game, ctx$$1.currentPlayer);
    var ctxWithAPI = apiCtx.attachToContext(ctx$$1);
    var initialG = game.setup(ctxWithAPI, setupData); // Pass G through all the plugins that want to modify it.

    initialG = G.setup(initialG, ctxWithAPI, game);
    var initial = {
      // User managed state.
      G: initialG,
      // Framework managed state.
      ctx: ctx$$1,
      // List of {G, ctx} pairs that can be undone.
      _undo: [],
      // List of {G, ctx} pairs that can be redone.
      _redo: [],
      // A monotonically non-decreasing ID to ensure that
      // state updates are only allowed from clients that
      // are at the same version that the server.
      _stateID: 0,
      // A snapshot of this object so that actions can be
      // replayed over it to view old snapshots.
      // TODO: This will no longer be necessary once the
      // log stops replaying actions (but reads the actual
      // game states instead).
      _initial: {}
    };
    var state = game.flow.init({
      G: initial.G,
      ctx: ctxWithAPI
    });
    initial.G = state.G;
    initial._undo = state._undo;
    state = apiCtx.updateAndDetach(state, true);
    initial.ctx = state.ctx;

    var deepCopy = function deepCopy(obj) {
      return flatted.parse(flatted.stringify(obj));
    };

    initial._initial = deepCopy(initial);
    return initial;
  }
  /**
   * CreateGameReducer
   *
   * Creates the main game state reducer.
   * @param {...object} game - Return value of Game().
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
   */

  function CreateGameReducer(_ref2) {
    var game = _ref2.game,
        multiplayer = _ref2.multiplayer;

    /**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case GAME_EVENT:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Process game events only on the server.
            // These events like `endTurn` typically
            // contain code that may rely on secret state
            // and cannot be computed on the client.

            if (multiplayer) {
              return state;
            } // Ignore the event if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerCallEvent(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);
            state.ctx = apiCtx.attachToContext(state.ctx);
            var newState = game.flow.processGameEvent(state, action);
            newState = apiCtx.updateAndDetach(newState, true);
            return _objectSpread({}, newState, {
              _stateID: state._stateID + 1
            });
          }

        case MAKE_MOVE:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Check whether the game knows the move at all.

            if (!game.moveNames.includes(action.payload.type)) {
              return state;
            } // Ignore the move if it isn't allowed at this point.


            if (!game.flow.canMakeMove(state.G, state.ctx, action.payload.type)) {
              return state;
            } // Ignore the move if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerMakeMove(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var _apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);

            var ctxWithAPI = _apiCtx.attachToContext(state.ctx); // Process the move.


            var G$$1 = game.processMove(state.G, action.payload, ctxWithAPI);

            if (G$$1 === INVALID_MOVE) {
              // the game declared the move as invalid.
              return state;
            } // Create a log entry for this move.


            var logEntry = {
              action: action,
              _stateID: state._stateID,
              turn: state.ctx.turn,
              phase: state.ctx.phase
            }; // don't call into events here

            var _newState = _apiCtx.updateAndDetach(_objectSpread({}, state, {
              deltalog: [logEntry]
            }), false);

            var ctx$$1 = _newState.ctx; // Undo changes to G if the move should not run on the client.

            if (multiplayer && !game.flow.optimisticUpdate(G$$1, ctx$$1, action.payload)) {
              G$$1 = state.G;
            }

            state = _objectSpread({}, _newState, {
              G: G$$1,
              ctx: ctx$$1,
              _stateID: state._stateID + 1
            }); // If we're on the client, just process the move
            // and no triggers in multiplayer mode.
            // These will be processed on the server, which
            // will send back a state update.

            if (multiplayer) {
              return state;
            } // Allow the flow reducer to process any triggers that happen after moves.


            ctxWithAPI = _apiCtx.attachToContext(state.ctx);
            state = game.flow.processMove(_objectSpread({}, state, {
              ctx: ctxWithAPI
            }), action.payload);
            state = _apiCtx.updateAndDetach(state, true);
            state._undo[state._undo.length - 1].ctx = state.ctx;
            return state;
          }

        case RESET:
        case UPDATE:
        case SYNC:
          {
            return action.state;
          }

        case UNDO:
          {
            var _state = state,
                _undo = _state._undo,
                _redo = _state._redo;

            if (_undo.length < 2) {
              return state;
            }

            var last = _undo[_undo.length - 1];
            var restore = _undo[_undo.length - 2]; // Only allow undoable moves to be undone.

            if (!game.flow.canUndoMove(state.G, state.ctx, last.moveType)) {
              return state;
            }

            return _objectSpread({}, state, {
              G: restore.G,
              ctx: restore.ctx,
              _undo: _undo.slice(0, _undo.length - 1),
              _redo: [last].concat(_toConsumableArray(_redo))
            });
          }

        case REDO:
          {
            var _state2 = state,
                _undo2 = _state2._undo,
                _redo2 = _state2._redo;

            if (_redo2.length == 0) {
              return state;
            }

            var first = _redo2[0];
            return _objectSpread({}, state, {
              G: first.G,
              ctx: first.ctx,
              _undo: [].concat(_toConsumableArray(_undo2), [first]),
              _redo: _redo2.slice(1)
            });
          }

        default:
          {
            return state;
          }
      }
    };
  }

  /**
   * Helper to create a reducer that manages ctx (with the
   * ability to also update G).
   *
   * You probably want to use FlowWithPhases below, but you might
   * need to use this directly if you are creating a very customized
   * game flow that it cannot handle.
   *
   * @param {...object} ctx - Function with the signature
   *                          numPlayers => ctx
   *                          that determines the initial value of ctx.
   * @param {...object} events - Object containing functions
   *                             named after events that this
   *                             reducer will handle. Each function
   *                             has the following signature:
   *                             ({G, ctx}) => {G, ctx}
   * @param {...object} enabledEvents - Map of eventName -> bool indicating
   *                                    which events are callable from the client
   *                                    or from within moves.
   * @param {...object} processMove - A function that's called whenever a move is made.
   *                                  (state, action, dispatch) => state.
   * @param {...object} optimisticUpdate - (G, ctx, move) => boolean
   *                                       Control whether a move should
   *                                       be executed optimistically on
   *                                       the client while waiting for
   *                                       the result of execution from
   *                                       the server.
   * @param {...object} canMakeMove - (G, ctx, moveName) => boolean
   *                                  Predicate to determine whether a
   *                                  particular move is allowed at
   *                                  this time.
   *
   * @param {...object} canUndoMove - (G, ctx, moveName) => boolean
   *                                  Predicate to determine whether a
   *                                  particular move is undoable at this
   *                                  time.
   *
   * @param {Array} redactedMoves - List of moves to be redacted
   *                                from the log.
   */

  function Flow(_ref) {
    var ctx$$1 = _ref.ctx,
        events = _ref.events,
        enabledEvents = _ref.enabledEvents,
        init = _ref.init,
        _processMove = _ref.processMove,
        optimisticUpdate = _ref.optimisticUpdate,
        _canMakeMove = _ref.canMakeMove,
        canUndoMove = _ref.canUndoMove,
        redactedMoves = _ref.redactedMoves;
    if (!ctx$$1) ctx$$1 = function ctx$$1() {
      return {};
    };
    if (!events) events = {};
    if (!enabledEvents) enabledEvents = {};
    if (!init) init = function init(state) {
      return state;
    };
    if (!_processMove) _processMove = function processMove(state) {
      return state;
    };
    if (!_canMakeMove) _canMakeMove = function canMakeMove() {
      return true;
    };
    if (!canUndoMove) canUndoMove = function canUndoMove() {
      return true;
    };

    if (optimisticUpdate === undefined) {
      optimisticUpdate = function optimisticUpdate() {
        return true;
      };
    }

    var dispatch = function dispatch(state, action) {
      var payload = action.payload;

      if (events.hasOwnProperty(payload.type)) {
        var context = {
          playerID: payload.playerID,
          dispatch: dispatch
        };
        var logEntry = {
          action: action,
          _stateID: state._stateID,
          turn: state.ctx.turn,
          phase: state.ctx.phase
        };
        var deltalog = [].concat(_toConsumableArray(state.deltalog || []), [logEntry]);
        state = _objectSpread({}, state, {
          deltalog: deltalog
        });
        var args = [state].concat(payload.args);
        return events[payload.type].apply(context, args);
      }

      return state;
    };

    return {
      ctx: ctx$$1,
      init: init,
      canUndoMove: canUndoMove,
      redactedMoves: redactedMoves,
      eventNames: Object.getOwnPropertyNames(events),
      enabledEventNames: Object.getOwnPropertyNames(enabledEvents),
      processMove: function processMove(state, action) {
        return _processMove(state, action, dispatch);
      },
      processGameEvent: function processGameEvent(state, action) {
        return dispatch(state, action, dispatch);
      },
      optimisticUpdate: optimisticUpdate,
      canPlayerCallEvent: function canPlayerCallEvent(G$$1, ctx$$1, playerID) {
        return ctx$$1.currentPlayer == playerID && ctx$$1.actionPlayers.includes(playerID);
      },
      canPlayerMakeMove: function canPlayerMakeMove(G$$1, ctx$$1, playerID) {
        var actionPlayers = ctx$$1.actionPlayers || [];
        return actionPlayers.includes(playerID);
      },
      canMakeMove: function canMakeMove(G$$1, ctx$$1, moveName) {
        // Disallow moves once the game is over.
        if (ctx$$1.gameover !== undefined) return false; // User-provided move validation.

        return _canMakeMove(G$$1, ctx$$1, moveName);
      }
    };
  }
  /**
   * FlowWithPhases
   *
   * A very customizable game flow that introduces phases to the
   * game. Each phase can be configured with:
   * - A custom turn order.
   * - Automatically executed setup / cleanup code.
   * - Custom phase end conditions.
   * - A move whitelist that disallows other moves during the phase.
   *
   * @param {...object} movesPerTurn - End the turn automatically after a certain number
   *                                   of moves (default: undefined, i.e. the turn does
   *                                   not automatically end after a certain number of moves).
   *
   * @param {...object} endTurnIf - The turn automatically ends if this
   *                                returns a truthy value
   *                                (checked after each move).
   *                                If the return value is { next: playerID },
   *                                that player is the next player
   *                                (instead of following the turn order).
   *                                (G, ctx) => boolean|object
   *
   * @param {...object} endGameIf - The game automatically ends if this function
   *                                returns anything (checked after each move).
   *                                The return value is available at ctx.gameover.
   *                                (G, ctx) => {}
   *
   * @param {...object} onTurnBegin - Any code to run when a turn begins.
   *                                 (G, ctx) => G
   *
   * @param {...object} onTurnEnd - Any code to run when a turn ends.
   *                                (G, ctx) => G
   *
   * @param {...object} onMove - Any code to run at the end of a move.
   *                             (G, ctx, { type: 'moveName', args: [] }) => G
   *
   * @param {...object} turnOrder - Customize the turn order (see turn-order.js).
   *
   * @param {...object} endTurn - Set to false to disable the `endTurn` event.
   *
   * @param {...object} endPhase - Set to false to disable the `endPhase` event.
   *
   * @param {...object} endGame - Set to true to enable the `endGame` event.
   *
   * @param {...object} setActionPlayers - Set to true to enable the `setActionPlayers` event.
   *
   * @param {...object} allowedMoves - List of moves that are allowed.
   *                                   This can be either a list of
   *                                   move names or a function with the
   *                                   signature (G, ctx) => [].
   *                                   (default: null, i.e. all moves are allowed).
   *
   * @param {...object} undoableMoves - List of moves that are undoable,
   *                                   (default: null, i.e. all moves are undoable).
   *
   * @param {Array} redactedMoves - List of moves to be redacted
   *                                from the log.
   *
   * @param {object} game - The game object.
   *
   * @param {...object} optimisticUpdate - (G, ctx, move) => boolean
   *                                       Control whether a move should
   *                                       be executed optimistically on
   *                                       the client while waiting for
   *                                       the result of execution from
   *                                       the server.
   *
   * @param {...object} phases - A map of phases in the game.
   *
   * Each phase is described by an object whose key is the phase name.
   *
   * All the properties below override their global equivalents
   * above whenever they are defined (i.e. the global setting
   * is used if a phase-specific setting is absent).
   *
   * {
   *   // Any setup code to run before the phase begins.
   *   onPhaseBegin: (G, ctx) => G,
   *
   *   // Any cleanup code to run after the phase ends.
   *   onPhaseEnd: (G, ctx) => G,
   *
   *   // The phase ends if this function returns a truthy value.
   *   // If the return value is of the form { next: 'phase name' }
   *   // then that will be chosen as the next phase.
   *   endPhaseIf: (G, ctx) => boolean|object,
   *
   *   Phase-specific options that override their global equivalents:
   *
   *   // A phase-specific endTurnIf.
   *   endTurnIf: (G, ctx) => boolean|object,
   *
   *   // A phase-specific endGameIf.
   *   endGameIf: (G, ctx) => {},
   *
   *   // A phase-specific onTurnBegin
   *   onTurnBegin: (G, ctx) => G,
   *
   *   // A phase-specific onTurnEnd.
   *   onTurnEnd: (G, ctx) => G,
   *
   *   // A phase-specific onMove.
   *   onMove - (G, ctx) => G,
   *
   *   // A phase-specific turnOrder.
   *   turnOrder: TurnOrder.DEFAULT,
   *
   *   // A phase-specific movesPerTurn.
   *   movesPerTurn: integer,
   *
   *   // List of moves or a function that returns a list of moves
   *   // that are allowed in this phase.
   *   allowedMoves: (G, ctx) => ['moveA', ...],
   *
   *   // List of moves that are undoable.
   *   undoableMoves: ['moveA', ...],
   * }
   */

  function FlowWithPhases(_ref2) {
    var phases = _ref2.phases,
        startingPhase = _ref2.startingPhase,
        movesPerTurn = _ref2.movesPerTurn,
        endTurnIf = _ref2.endTurnIf,
        endGameIf = _ref2.endGameIf,
        onTurnBegin = _ref2.onTurnBegin,
        onTurnEnd = _ref2.onTurnEnd,
        onMove = _ref2.onMove,
        turnOrder = _ref2.turnOrder,
        endTurn = _ref2.endTurn,
        endPhase = _ref2.endPhase,
        endGame = _ref2.endGame,
        setActionPlayers = _ref2.setActionPlayers,
        undoableMoves = _ref2.undoableMoves,
        allowedMoves = _ref2.allowedMoves,
        redactedMoves = _ref2.redactedMoves,
        _optimisticUpdate = _ref2.optimisticUpdate,
        game = _ref2.game;

    // Attach defaults.
    if (endPhase === undefined && phases) {
      endPhase = true;
    }

    if (endTurn === undefined) {
      endTurn = true;
    }

    if (endGame === undefined) {
      endGame = false;
    }

    if (setActionPlayers === undefined) {
      setActionPlayers = false;
    }

    if (_optimisticUpdate === undefined) {
      _optimisticUpdate = function optimisticUpdate() {
        return true;
      };
    }

    if (game === undefined) {
      game = {
        plugins: []
      };
    }

    if (!phases) phases = {};
    if (!startingPhase) startingPhase = 'default';
    if (!endTurnIf) endTurnIf = function endTurnIf() {
      return false;
    };
    if (!endGameIf) endGameIf = function endGameIf() {
      return undefined;
    };
    if (!onTurnBegin) onTurnBegin = function onTurnBegin(G$$1) {
      return G$$1;
    };
    if (!onTurnEnd) onTurnEnd = function onTurnEnd(G$$1) {
      return G$$1;
    };
    if (!onMove) onMove = function onMove(G$$1) {
      return G$$1;
    };
    if (!turnOrder) turnOrder = TurnOrder.DEFAULT;
    if (allowedMoves === undefined) allowedMoves = null;
    if (undoableMoves === undefined) undoableMoves = null;
    var phaseMap = phases;

    if ('default' in phaseMap) {
      error('cannot specify phase with name "default"');
    }

    phaseMap['default'] = {};

    for (var phase in phaseMap) {
      var conf = phaseMap[phase];

      if (conf.endPhaseIf === undefined) {
        conf.endPhaseIf = function () {
          return undefined;
        };
      }

      if (conf.onPhaseBegin === undefined) {
        conf.onPhaseBegin = function (G$$1) {
          return G$$1;
        };
      }

      conf.onPhaseBegin = FnWrap(conf.onPhaseBegin, game);

      if (conf.onPhaseEnd === undefined) {
        conf.onPhaseEnd = function (G$$1) {
          return G$$1;
        };
      }

      conf.onPhaseEnd = FnWrap(conf.onPhaseEnd, game);

      if (conf.movesPerTurn === undefined) {
        conf.movesPerTurn = movesPerTurn;
      }

      if (conf.endTurnIf === undefined) {
        conf.endTurnIf = endTurnIf;
      }

      if (conf.endGameIf === undefined) {
        conf.endGameIf = endGameIf;
      }

      if (conf.onTurnBegin === undefined) {
        conf.onTurnBegin = onTurnBegin;
      }

      conf.onTurnBegin = FnWrap(conf.onTurnBegin, game);

      if (conf.onTurnEnd === undefined) {
        conf.onTurnEnd = onTurnEnd;
      }

      conf.onTurnEnd = FnWrap(conf.onTurnEnd, game);

      if (conf.onMove === undefined) {
        conf.onMove = onMove;
      }

      conf.onMove = FnWrap(conf.onMove, game);

      if (conf.turnOrder === undefined) {
        conf.turnOrder = turnOrder;
      }

      if (conf.undoableMoves === undefined) {
        conf.undoableMoves = undoableMoves;
      }

      if (conf.allowedMoves === undefined) {
        conf.allowedMoves = allowedMoves;
      }

      if (typeof conf.allowedMoves !== 'function') {
        (function () {
          var t = conf.allowedMoves;

          conf.allowedMoves = function () {
            return t;
          };
        })();
      }
    }

    var shouldEndPhase = function shouldEndPhase(_ref3) {
      var G$$1 = _ref3.G,
          ctx$$1 = _ref3.ctx;
      var conf = phaseMap[ctx$$1.phase];
      return conf.endPhaseIf(G$$1, ctx$$1);
    };

    var shouldEndTurn = function shouldEndTurn(_ref4) {
      var G$$1 = _ref4.G,
          ctx$$1 = _ref4.ctx;
      var conf = phaseMap[ctx$$1.phase];
      var currentPlayerMoves = ctx$$1.stats.turn.numMoves[ctx$$1.currentPlayer] || 0;

      if (conf.movesPerTurn && currentPlayerMoves >= conf.movesPerTurn) {
        return true;
      }

      return conf.endTurnIf(G$$1, ctx$$1);
    }; // Helper to perform start-of-phase initialization.


    var startPhase = function startPhase(state, config) {
      var G$$1 = config.onPhaseBegin(state.G, state.ctx);
      var ctx$$1 = InitTurnOrderState(G$$1, state.ctx, config.turnOrder); // Allow plugins to modify G and ctx at the beginning of a phase.

      G$$1 = G.onPhaseBegin(G$$1, ctx$$1, game);
      ctx$$1 = ctx.onPhaseBegin(ctx$$1, game); // Reset stats.

      ctx$$1.stats = _objectSpread({}, ctx$$1.stats, {
        phase: _objectSpread({}, ctx$$1.stats.phase, {
          numMoves: {},
          allPlayed: false
        })
      });
      var allowedMoves = config.allowedMoves(G$$1, ctx$$1);
      return _objectSpread({}, state, {
        G: G$$1,
        ctx: _objectSpread({}, ctx$$1, {
          allowedMoves: allowedMoves
        })
      });
    };

    var startTurn = function startTurn(state, config) {
      var G$$1 = config.onTurnBegin(state.G, state.ctx);
      var plainCtx = ContextEnhancer.detachAllFromContext(state.ctx);
      var _undo = [{
        G: G$$1,
        ctx: plainCtx
      }];

      var ctx$$1 = _objectSpread({}, state.ctx);

      ctx$$1.allowedMoves = config.allowedMoves(G$$1, ctx$$1); // Reset stats.

      ctx$$1.stats = _objectSpread({}, ctx$$1.stats, {
        turn: _objectSpread({}, ctx$$1.stats.turn, {
          numMoves: {},
          allPlayed: false
        })
      });
      return _objectSpread({}, state, {
        G: G$$1,
        ctx: ctx$$1,
        _undo: _undo,
        _redo: []
      });
    };

    var startGame = function startGame(state) {
      if (!(state.ctx.phase in phaseMap)) {
        error('invalid startingPhase: ' + state.ctx.phase);
        return state;
      }

      var conf = phaseMap[state.ctx.phase];
      state = startPhase(state, conf);
      state = startTurn(state, conf);
      return state;
    };
    /**
     * endPhase (game event)
     *
     * Ends the current phase.
     * Also runs any phase cleanup code and setup code for the
     * next phase (if any).
     *
     * The next phase is chosen in a round-robin fashion, with the
     * option to override that by passing nextPhase.
     *
     * If this call results in a cycle, the phase is reset to
     * the default phase.
     */


    function endPhaseEvent(state, arg, visitedPhases) {
      var G$$1 = state.G;
      var ctx$$1 = state.ctx; // Run any cleanup code for the phase that is about to end.

      var conf = phaseMap[ctx$$1.phase];
      G$$1 = conf.onPhaseEnd(G$$1, ctx$$1);
      var gameover = conf.endGameIf(G$$1, ctx$$1);

      if (gameover !== undefined) {
        return _objectSpread({}, state, {
          G: G$$1,
          ctx: _objectSpread({}, ctx$$1, {
            gameover: gameover
          })
        });
      }

      var prevPhase = ctx$$1.phase; // Update the phase.

      if (arg && arg !== true) {
        if (arg.next in phaseMap) {
          ctx$$1 = _objectSpread({}, ctx$$1, {
            phase: arg.next,
            prevPhase: prevPhase
          });
        } else {
          error('invalid argument to endPhase: ' + arg);
        }
      } else if (conf.next !== undefined) {
        ctx$$1 = _objectSpread({}, ctx$$1, {
          phase: conf.next,
          prevPhase: prevPhase
        });
      } else {
        ctx$$1 = _objectSpread({}, ctx$$1, {
          phase: ctx$$1.prevPhase,
          prevPhase: prevPhase
        });
      } // Run any setup code for the new phase.


      state = startPhase(_objectSpread({}, state, {
        G: G$$1,
        ctx: ctx$$1
      }), phaseMap[ctx$$1.phase]);
      var origTurn = state.ctx.turn; // End the new phase automatically if necessary.
      // In order to avoid infinite loops, the `default`
      // phase is chosen as the next phase the moment we
      // end up at a phase that we've already visited when
      // we processed the endPhase event that kicked of this
      // chain of events.

      if (!visitedPhases) visitedPhases = {};

      if (ctx$$1.phase in visitedPhases) {
        state = this.dispatch(state, automaticGameEvent('endPhase', [{
          next: 'default'
        }, visitedPhases], this.playerID));
      } else {
        visitedPhases[ctx$$1.phase] = true;
        var end = shouldEndPhase(state);

        if (end) {
          state = this.dispatch(state, automaticGameEvent('endPhase', [end, visitedPhases], this.playerID));
        }
      } // End turn if endTurnIf returns something
      // (and the turn has not already been ended by a nested endPhase call).


      var endTurn = shouldEndTurn(state);

      if (endTurn && state.ctx.turn == origTurn) {
        state = this.dispatch(state, automaticGameEvent('endTurn', [endTurn], this.playerID));
      }

      return state;
    }
    /**
     * endTurn (game event)
     *
     * Ends the current turn.
     * Passes the turn to the next turn in a round-robin fashion.
     */


    function endTurnEvent(state, arg) {
      var _state = state,
          G$$1 = _state.G,
          ctx$$1 = _state.ctx;
      var conf = phaseMap[ctx$$1.phase]; // Prevent ending the turn if movesPerTurn haven't been made.

      var currentPlayerMoves = ctx$$1.stats.turn.numMoves[ctx$$1.currentPlayer] || 0;

      if (conf.movesPerTurn && currentPlayerMoves < conf.movesPerTurn) {
        return state;
      } // Run turn-end triggers.


      G$$1 = conf.onTurnEnd(G$$1, ctx$$1); // Update gameover.

      var gameover = conf.endGameIf(G$$1, ctx$$1);

      if (gameover !== undefined) {
        return _objectSpread({}, state, {
          G: G$$1,
          ctx: _objectSpread({}, ctx$$1, {
            gameover: gameover
          })
        });
      }

      var endPhase = false; // Update turn order state.

      {
        var _UpdateTurnOrderState = UpdateTurnOrderState(G$$1, ctx$$1, conf.turnOrder, arg),
            a = _UpdateTurnOrderState.endPhase,
            b = _UpdateTurnOrderState.ctx;

        endPhase = a;
        ctx$$1 = b;
      } // Update turn.

      var turn = ctx$$1.turn + 1; // Update state.

      ctx$$1 = _objectSpread({}, ctx$$1, {
        turn: turn
      });
      state = _objectSpread({}, state, {
        G: G$$1,
        ctx: ctx$$1
      }); // End phase if condition is met.

      var endPhaseArg = shouldEndPhase(state);

      if (endPhaseArg) {
        endPhase = true;
      }

      if (endPhase) {
        return this.dispatch(state, automaticGameEvent('endPhase', [endPhaseArg], this.playerID));
      }

      return startTurn(state, conf);
    }

    function endGameEvent(state, arg) {
      if (arg === undefined) {
        arg = true;
      }

      return _objectSpread({}, state, {
        ctx: _objectSpread({}, state.ctx, {
          gameover: arg
        })
      });
    }

    function updateStats(state, key, playerID) {
      var moves = (state.ctx.stats[key].numMoves[playerID] || 0) + 1;

      var numMoves = _objectSpread({}, state.ctx.stats[key].numMoves, _defineProperty({}, playerID, moves));

      var t = _objectSpread({}, state.ctx.stats[key], {
        numMoves: numMoves
      });

      if (Object.keys(numMoves).length == state.ctx.numPlayers) {
        t.allPlayed = true;
      }

      var stats = _objectSpread({}, state.ctx.stats, _defineProperty({}, key, t));

      var ctx$$1 = _objectSpread({}, state.ctx, {
        stats: stats
      });

      return _objectSpread({}, state, {
        ctx: ctx$$1
      });
    }

    function processMove(state, action, dispatch) {
      var conf = phaseMap[state.ctx.phase];
      state = updateStats(state, 'turn', action.playerID);
      state = updateStats(state, 'phase', action.playerID); // Update actionPlayers if _actionPlayersOnce is set.

      var actionPlayers = state.ctx.actionPlayers;
      var actionPlayersOnceDone = false;

      if (state.ctx._actionPlayersOnce) {
        var playerID = action.playerID;
        actionPlayers = actionPlayers.filter(function (id) {
          return id !== playerID;
        });

        if (actionPlayers.length == 0 && conf.turnOrder.endPhaseOnceDone) {
          actionPlayersOnceDone = true;
        }
      }

      state = _objectSpread({}, state, {
        ctx: _objectSpread({}, state.ctx, {
          actionPlayers: actionPlayers
        })
      });
      var G$$1 = conf.onMove(state.G, state.ctx, action);
      state = _objectSpread({}, state, {
        G: G$$1
      });
      var origTurn = state.ctx.turn;
      var gameover = conf.endGameIf(state.G, state.ctx); // End the phase automatically if endPhaseIf is true or if endGameIf returns.

      var endPhase = shouldEndPhase(state) || actionPlayersOnceDone;

      if (endPhase || gameover !== undefined) {
        state = dispatch(state, automaticGameEvent('endPhase', [endPhase], action.playerID)); // Update to the new phase configuration

        conf = phaseMap[state.ctx.phase];
      } // End the turn automatically if endTurnIf is true or if endGameIf returns.
      // (but not if endPhase above already ends the turn).


      var endTurn = shouldEndTurn(state);

      if (state.ctx.turn == origTurn && (endTurn || gameover !== undefined)) {
        state = dispatch(state, automaticGameEvent('endTurn', [endTurn], action.playerID));
      } // End the game automatically if endGameIf returns.


      if (gameover !== undefined) {
        return _objectSpread({}, state, {
          ctx: _objectSpread({}, state.ctx, {
            gameover: gameover
          })
        });
      } // Update allowedMoves.


      var allowedMoves = conf.allowedMoves(state.G, state.ctx);
      state = _objectSpread({}, state, {
        ctx: _objectSpread({}, state.ctx, {
          allowedMoves: allowedMoves
        })
      }); // Update undo / redo state.

      if (!endTurn) {
        var undo$$1 = state._undo || [];
        var moveType = action.type;
        var plainCtx = ContextEnhancer.detachAllFromContext(state.ctx);
        state = _objectSpread({}, state, {
          _undo: [].concat(_toConsumableArray(undo$$1), [{
            G: state.G,
            ctx: plainCtx,
            moveType: moveType
          }]),
          _redo: []
        });
      }

      return state;
    }

    var canMakeMove = function canMakeMove(G$$1, ctx$$1, moveName) {
      var conf = phaseMap[ctx$$1.phase];
      var moves = conf.allowedMoves(G$$1, ctx$$1);
      if (!moves) return true;
      return moves.includes(moveName);
    };

    var canUndoMove = function canUndoMove(G$$1, ctx$$1, moveName) {
      var conf = phaseMap[ctx$$1.phase];
      if (!conf.undoableMoves) return true;
      return conf.undoableMoves.includes(moveName);
    };

    var events = {
      endTurn: endTurnEvent,
      endPhase: endPhaseEvent,
      endGame: endGameEvent,
      setActionPlayers: SetActionPlayersEvent
    };
    var enabledEvents = {};

    if (endTurn) {
      enabledEvents['endTurn'] = true;
    }

    if (endPhase) {
      enabledEvents['endPhase'] = true;
    }

    if (endGame) {
      enabledEvents['endGame'] = true;
    }

    if (setActionPlayers) {
      enabledEvents['setActionPlayers'] = true;
    }

    return Flow({
      ctx: function ctx$$1(numPlayers) {
        return {
          numPlayers: numPlayers,
          turn: 0,
          currentPlayer: '0',
          actionPlayers: ['0'],
          currentPlayerMoves: 0,
          playOrder: _toConsumableArray(new Array(numPlayers)).map(function (d, i) {
            return i + '';
          }),
          playOrderPos: 0,
          stats: {
            turn: {
              numMoves: {}
            },
            phase: {
              numMoves: {}
            }
          },
          allPlayed: false,
          phase: startingPhase,
          prevPhase: 'default'
        };
      },
      init: function init(state) {
        return startGame(state);
      },
      optimisticUpdate: function optimisticUpdate(G$$1, ctx$$1, action) {
        // Some random code was executed.
        if (ctx$$1._random !== undefined && ctx$$1._random.prngstate !== undefined) {
          return false;
        }

        return _optimisticUpdate(G$$1, ctx$$1, action);
      },
      events: events,
      enabledEvents: enabledEvents,
      processMove: processMove,
      canMakeMove: canMakeMove,
      canUndoMove: canUndoMove,
      redactedMoves: redactedMoves
    });
  }

  /**
   * Game
   *
   * Helper to generate the game move reducer. The returned
   * reducer has the following signature:
   *
   * (G, action, ctx) => {}
   *
   * You can roll your own if you like, or use any Redux
   * addon to generate such a reducer.
   *
   * The convention used in this framework is to
   * have action.type contain the name of the move, and
   * action.args contain any additional arguments as an
   * Array.
   *
   * Game({
   *   name: 'tic-tac-toe',
   *
   *   setup: (numPlayers) => {
   *     const G = {...};
   *     return G;
   *   },
   *
   *   plugins: [plugin1, plugin2, ...],
   *
   *   moves: {
   *     'moveWithoutArgs': (G, ctx) => {
   *       return Object.assign({}, G, ...);
   *     },
   *     'moveWithArgs': (G, ctx, arg0, arg1) => {
   *       return Object.assign({}, G, ...);
   *     }
   *   },
   *
   *   playerView: (G, ctx, playerID) => { ... },
   *
   *   flow: {
   *     endGameIf: (G, ctx) => { ... },
   *     endTurnIf: (G, ctx) => { ... },
   *
   *     phases: {
   *       A: { onPhaseBegin: (G, ctx) => G, onPhaseEnd: (G, ctx) => G },
   *       B: { onPhaseBegin: (G, ctx) => G, onPhaseEnd: (G, ctx) => G },
   *       ...
   *     }
   *   },
   * })
   *
   * @param {...object} setup - Function that returns the initial state of G.
   *
   * @param {...object} moves - A dictionary of move functions.
   *
   * @param {...object} playerView - A function that returns a
   *                                 derivative of G tailored for
   *                                 the specified player.
   *
   * @param {...object} flow - Customize the flow of the game (see flow.js).
   *                           Must contain the return value of Flow().
   *                           If it contains any other object, it is presumed to be a
   *                           configuration object for FlowWithPhases().
   *
   * @param {...object} seed - Seed for the PRNG.
   *
   * @param {Array} plugins - List of plugins. Each plugin is an object like the following:
   *                          {
   *                            // Optional: Wraps a move / trigger function and returns
   *                            // the wrapped function. The wrapper can do anything
   *                            // it wants, but will typically be used to customize G.
   *                            fnWrap: (fn) => {
   *                              return (G, ctx, ...args) => {
   *                                G = preprocess(G);
   *                                G = fn(G, ctx, ...args);
   *                                G = postprocess(G);
   *                                return G;
   *                              };
   *                            },
   *
   *                            // Optional: Called during setup. Can be used to
   *                            // augment G with additional state during setup.
   *                            setup: (G, ctx) => G,
   *                          }
   */

  function Game(game) {
    if (game.name === undefined) game.name = 'default';
    if (game.setup === undefined) game.setup = function () {
      return {};
    };
    if (game.moves === undefined) game.moves = {};
    if (game.playerView === undefined) game.playerView = function (G$$1) {
      return G$$1;
    };
    if (game.plugins === undefined) game.plugins = [];

    if (!game.flow || game.flow.processGameEvent === undefined) {
      game.flow = FlowWithPhases(_objectSpread({
        game: game
      }, game.flow));
    }

    return _objectSpread({}, game, {
      moveNames: Object.getOwnPropertyNames(game.moves),
      processMove: function processMove(G$$1, action, ctx$$1) {
        if (game.moves.hasOwnProperty(action.type)) {
          var ctxWithPlayerID = _objectSpread({}, ctx$$1, {
            playerID: action.playerID
          });

          var args = [G$$1, ctxWithPlayerID].concat(action.args);
          var fn = FnWrap(game.moves[action.type], game);
          return fn.apply(void 0, _toConsumableArray(args));
        }

        return G$$1;
      }
    });
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  /**
   * PlayerView reducers.
   */
  var PlayerView = {
    /**
     * STRIP_SECRETS
     *
     * Reducer which removes a key named `secret` and
     * removes all the keys in `players`, except for the one
     * corresponding to the current playerID.
     */
    STRIP_SECRETS: function STRIP_SECRETS(G, ctx, playerID) {
      var r = _objectSpread({}, G);

      if (r.secret !== undefined) {
        delete r.secret;
      }

      if (r.players) {
        r.players = _defineProperty({}, playerID, r.players[playerID]);
      }

      return r;
    }
  };

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  exports.Game = Game;
  exports.InitializeGame = InitializeGame;
  exports.CreateGameReducer = CreateGameReducer;
  exports.Flow = Flow;
  exports.FlowWithPhases = FlowWithPhases;
  exports.TurnOrder = TurnOrder;
  exports.Pass = Pass;
  exports.PlayerView = PlayerView;
  exports.INVALID_MOVE = INVALID_MOVE;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/dist/react.js":
/*!********************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/dist/react.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js"), __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js"), __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js"), __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"), __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js"), __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js")) :
  undefined;
}(this, function (exports, React, PropTypes, Mousetrap, flatted, redux, io, produce, Cookies) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  Mousetrap = Mousetrap && Mousetrap.hasOwnProperty('default') ? Mousetrap['default'] : Mousetrap;
  io = io && io.hasOwnProperty('default') ? io['default'] : io;
  produce = produce && produce.hasOwnProperty('default') ? produce['default'] : produce;
  Cookies = Cookies && Cookies.hasOwnProperty('default') ? Cookies['default'] : Cookies;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  function AssignShortcuts(moveNames, eventNames, blacklist) {
    var shortcuts = {};
    var events = {};

    for (var name in moveNames) {
      events[name] = name;
    }

    for (var _name in eventNames) {
      events[_name] = _name;
    }

    var taken = {};

    for (var i = 0; i < blacklist.length; i++) {
      var c = blacklist[i];
      taken[c] = true;
    } // Try assigning the first char of each move as the shortcut.


    var t = taken;
    var canUseFirstChar = true;

    for (var _name2 in events) {
      var shortcut = _name2[0];

      if (t[shortcut]) {
        canUseFirstChar = false;
        break;
      }

      t[shortcut] = true;
      shortcuts[_name2] = shortcut;
    }

    if (canUseFirstChar) {
      return shortcuts;
    } // If those aren't unique, use a-z.


    t = taken;
    var next = 97;
    shortcuts = {};

    for (var _name3 in events) {
      var _shortcut = String.fromCharCode(next);

      while (t[_shortcut]) {
        next++;
        _shortcut = String.fromCharCode(next);
      }

      t[_shortcut] = true;
      shortcuts[_name3] = _shortcut;
    }

    return shortcuts;
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  var Item = function Item(props) {
    return React.createElement("div", {
      className: "gameinfo-item"
    }, React.createElement("strong", null, props.name, " "), React.createElement("div", null, JSON.stringify(props.value)));
  };

  Item.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any
  };
  var GameInfo = function GameInfo(props) {
    return React.createElement("section", {
      className: "gameinfo"
    }, React.createElement(Item, {
      name: "gameID",
      value: props.gameID
    }), React.createElement(Item, {
      name: "playerID",
      value: props.playerID
    }), React.createElement(Item, {
      name: "isActive",
      value: props.isActive
    }), props.isMultiplayer && React.createElement("span", null, React.createElement(Item, {
      name: "isConnected",
      value: props.isConnected
    }), React.createElement(Item, {
      name: "isMultiplayer",
      value: props.isMultiplayer
    })));
  };
  GameInfo.propTypes = {
    gameID: PropTypes.string,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isConnected: PropTypes.bool,
    isMultiplayer: PropTypes.bool
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.debug-ui {\n  text-align: left;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  background: #fefefe;\n  border-left: 1px solid #ddd;\n  box-shadow: -1px 0 10px #aaa;\n  position: absolute;\n  width: 300px;\n  right: 0;\n  top: 0;\n  height: 100%;\n  font-family: monospace;\n  font-size: 14px;\n}\n\n#debug-controls.docktop {\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  min-width: 500px;\n  top: 0;\n  right: 300px;\n  height: 50px;\n  background: #fff;\n  box-shadow: -3px 3px 3px #ccc;\n}\n\n@media only screen and (max-device-width: 750px) {\n  .debug-ui {\n    display: none;\n  }\n}\n\n.debug-ui .gameinfo {\n  background: #ddd;\n  position: fixed;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 285px;\n  margin-left: -20px;\n  margin-bottom: 0;\n  padding: 10px;\n}\n\n.debug-ui .gameinfo-item div {\n  float: right;\n  text-align: right;\n}\n\n.debug-ui .ai-visualization {\n  position: fixed;\n  opacity: 100%;\n  right: 300px;\n  height: 100%;\n  width: 100%;\n  max-width: 3000px;\n  background: #fafafa;\n  border-right: 1px solid #ddd;\n}\n\n.debug-ui .pane {\n  float: left;\n  padding: 20px;\n  box-sizing: border-box;\n  min-width: 300px;\n  max-width: 400px;\n  opacity: 0.8;\n}\n\n.debug-ui section {\n  margin-bottom: 20px;\n}\n\n.debug-ui textarea {\n  resize: none;\n}\n\n.debug-ui .move {\n  cursor: pointer;\n  margin-bottom: 10px;\n  color: #666;\n}\n\n.debug-ui .move:hover {\n  color: #333;\n}\n\n.debug-ui .move.active {\n  color: #111;\n  font-weight: bold;\n}\n\n.debug-ui .move-error {\n  color: #a00;\n  font-weight: bold;\n}\n\n.debug-ui .arg-field {\n  outline: none;\n  font-family: monospace;\n}\n\n.debug-ui .key {\n  margin-bottom: 5px;\n}\n\n.debug-ui .key-box {\n  display: inline-block;\n  cursor: pointer;\n  min-width: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #888;\n  background: #eee;\n  color: #444;\n}\n\n.debug-ui .key-box:hover {\n  background: #ddd;\n}\n\n.debug-ui .key.active .key-box {\n  background: #ddd;\n  border: 1px solid #999;\n  box-shadow: none;\n}\n\n.debug-ui .key-child {\n  display: inline-block;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.debug-ui .menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.debug-ui .menu .item {\n  cursor: pointer;\n  margin-top: -10px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  padding: 5px;\n  min-width: 50px;\n  text-align: center;\n}\n\n.debug-ui .menu .item.active {\n  font-weight: bold;\n  border-bottom: 3px solid #ccc;\n}\n\n.debug-ui .player-box {\n  display: flex;\n  flex-direction: row;\n}\n\n.debug-ui .player {\n  cursor: pointer;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  background: #eee;\n  border: 3px solid #fff;\n  box-sizing: content-box;\n}\n\n.debug-ui .player.current {\n  background: #555;\n  color: #eee;\n  font-weight: bold;\n}\n\n.debug-ui .player.active {\n  border: 3px solid #ff7f50;\n}\n";
  styleInject(css);

  /**
   * KeyboardShortcut
   *
   * Registers a keyboard shortcut to activate the
   * associated child component that is passed in.
   *
   * When the key is pressed, 'active' is set to true
   * in the prop passed to the child.
   */

  var KeyboardShortcut =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(KeyboardShortcut, _React$Component);

    function KeyboardShortcut() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, KeyboardShortcut);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KeyboardShortcut)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        active: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deactivate", function () {
        _this.setState({
          active: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "activate", function () {
        _this.setState({
          active: true
        });

        if (_this.props.onPress) {
          _this.props.onPress();

          _this.setState({
            active: false
          });
        }
      });

      return _this;
    }

    _createClass(KeyboardShortcut, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        Mousetrap.bind(this.props.value, function (e) {
          e.preventDefault();

          _this2.activate();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        Mousetrap.unbind(this.props.value);
      }
    }, {
      key: "render",
      value: function render() {
        var child = this.props.children;

        if (_typeof(this.props.children) === _typeof(this)) {
          child = React.cloneElement(this.props.children, {
            active: this.state.active,
            deactivate: this.deactivate,
            activate: this.activate
          });
        }

        var className = 'key';

        if (this.state.active) {
          className += ' active';
        }

        return React.createElement("div", {
          className: className
        }, React.createElement("div", {
          className: "key-box",
          onClick: this.activate
        }, this.props.value), React.createElement("div", {
          className: "key-child"
        }, child));
      }
    }]);

    return KeyboardShortcut;
  }(React.Component);

  _defineProperty(KeyboardShortcut, "propTypes", {
    value: PropTypes.string.isRequired,
    children: PropTypes.any,
    onPress: PropTypes.func
  });

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Controls that are triggered by keyboard shortcuts.
   */

  var Controls = function Controls(props) {
    var ai = null;

    if (props.step) {
      ai = [React.createElement(KeyboardShortcut, {
        key: "4",
        value: "4",
        onPress: props.step
      }, "step"), React.createElement(KeyboardShortcut, {
        key: "5",
        value: "5",
        onPress: props.simulate
      }, "simulate")];
    }

    var style = null;
    var className = 'controls';

    if (props.dockTop) {
      className += ' docktop';
    }

    if (props.help) {
      className += ' help';
    }

    var display = props.help && !props.dockTop ? 'block' : 'none';
    return React.createElement("section", {
      id: "debug-controls",
      style: style,
      className: className
    }, React.createElement(KeyboardShortcut, {
      value: "1",
      onPress: props.reset
    }, "reset"), React.createElement(KeyboardShortcut, {
      value: "2",
      onPress: props.save
    }, "save"), React.createElement(KeyboardShortcut, {
      value: "3",
      onPress: props.restore
    }, "restore"), ai, props.dockTop || React.createElement(KeyboardShortcut, {
      value: "?",
      onPress: props.toggleHelp
    }, "show more"), React.createElement("div", {
      className: "key",
      style: {
        display: display
      }
    }, React.createElement("div", {
      className: "key-box"
    }, "d"), " show/hide this pane"), React.createElement("div", {
      className: "key",
      style: {
        display: display
      }
    }, React.createElement("div", {
      className: "key-box"
    }, "l"), " show/hide log"), React.createElement("div", {
      className: "key",
      style: {
        display: display
      }
    }, React.createElement("div", {
      className: "key-box"
    }, "i"), " show/hide game info tab"), React.createElement("div", {
      className: "key",
      style: {
        display: display
      }
    }, React.createElement("div", {
      className: "key-box"
    }, "t"), " dock controls"));
  };
  Controls.propTypes = {
    help: PropTypes.bool,
    toggleHelp: PropTypes.func,
    step: PropTypes.func,
    simulate: PropTypes.func,
    reset: PropTypes.func,
    save: PropTypes.func,
    restore: PropTypes.func,
    dockTop: PropTypes.bool
  };

  /**
   * Component that renders information about the
   * players in the game (whose turn it is etc.).
   */

  var PlayerInfo =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PlayerInfo, _React$Component);

    function PlayerInfo() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, PlayerInfo);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (playerID) {
        var arg = playerID == _this.props.playerID ? null : playerID;

        _this.props.onClick(arg);
      });

      return _this;
    }

    _createClass(PlayerInfo, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var players = [];

        var _loop = function _loop(i) {
          var playerID = i + '';
          var className = 'player';

          if (playerID === _this2.props.ctx.currentPlayer) {
            className += ' current';
          }

          if (playerID === _this2.props.playerID) {
            className += ' active';
          }

          players.push(React.createElement("div", {
            className: className,
            key: i,
            onClick: function onClick() {
              return _this2.onClick(playerID);
            }
          }, playerID));
        };

        for (var i = 0; i < this.props.ctx.numPlayers; i++) {
          _loop(i);
        }

        return React.createElement("div", {
          className: "player-box"
        }, players);
      }
    }]);

    return PlayerInfo;
  }(React.Component);

  _defineProperty(PlayerInfo, "propTypes", {
    ctx: PropTypes.any.isRequired,
    playerID: PropTypes.any,
    onClick: PropTypes.func
  });

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var DEV =  true || false;
  var logfn = DEV ? console.log : function () {};
  var errorfn = DEV ? console.error : function () {};
  function error(error) {
    errorfn('ERROR:', error);
  }

  /**
   * DebugMove
   *
   * Component that allows the user to dispatch a move from
   * the debug pane. The user is presented with the textarea
   * to enter any additional arguments.
   */

  var DebugMove =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DebugMove, _React$Component);

    function DebugMove() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DebugMove);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DebugMove)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        error: ''
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (value) {
        var error$$1 = '';

        try {
          var argArray = new Function("return [".concat(value, "]"))();

          _this.props.fn.apply(_assertThisInitialized(_assertThisInitialized(_this)), argArray);
        } catch (error2) {
          error$$1 = '' + error2;
          error(error2);
        }

        _this.setState({
          error: error$$1,
          focus: false,
          enterArg: false
        });
      });

      return _this;
    }

    _createClass(DebugMove, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(KeyboardShortcut, {
          value: this.props.shortcut
        }, React.createElement(DebugMoveArgField, {
          name: this.props.name,
          onSubmit: this.onSubmit
        })), this.state.error ? React.createElement("span", {
          className: "move-error"
        }, this.state.error) : null);
      }
    }]);

    return DebugMove;
  }(React.Component);

  _defineProperty(DebugMove, "propTypes", {
    name: PropTypes.string.isRequired,
    shortcut: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired
  });

  var DebugMoveArgField =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(DebugMoveArgField, _React$Component2);

    function DebugMoveArgField() {
      var _getPrototypeOf3;

      var _this2;

      _classCallCheck(this, DebugMoveArgField);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DebugMoveArgField)).call.apply(_getPrototypeOf3, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onKeyDown", function (e) {
        if (e.key == 'Enter') {
          e.preventDefault();
          var value = _this2.span.innerText;

          _this2.props.onSubmit(value);

          _this2.span.innerText = '';

          _this2.props.deactivate();
        }

        if (e.key == 'Escape') {
          e.preventDefault();

          _this2.props.deactivate();
        }
      });

      return _this2;
    }

    _createClass(DebugMoveArgField, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.props.active) {
          this.span.focus();
        } else {
          this.span.blur();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var className = 'move';
        if (this.props.active) className += ' active';
        return React.createElement("div", {
          className: className,
          onClick: this.props.activate
        }, this.props.name, "(", React.createElement("span", {
          ref: function ref(r) {
            _this3.span = r;
          },
          className: "arg-field",
          onBlur: this.props.deactivate,
          onKeyDown: this.onKeyDown,
          contentEditable: true
        }), ")");
      }
    }]);

    return DebugMoveArgField;
  }(React.Component);

  _defineProperty(DebugMoveArgField, "propTypes", {
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    active: PropTypes.bool,
    activate: PropTypes.func,
    deactivate: PropTypes.func
  });

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var MAKE_MOVE = 'MAKE_MOVE';
  var GAME_EVENT = 'GAME_EVENT';
  var REDO = 'REDO';
  var RESET = 'RESET';
  var SYNC = 'SYNC';
  var UNDO = 'UNDO';
  var UPDATE = 'UPDATE';

  var css$1 = "/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.gamelog {\n  display: grid;\n  grid-template-columns: 30px 1fr 30px;\n  grid-auto-rows: auto;\n  grid-auto-flow: column;\n}\n\n.gamelog .turn-marker {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 1;\n  background: #555;\n  color: #eee;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #888;\n}\n\n.gamelog .log-event {\n  grid-column: 2;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #fff;\n  border: 1px dotted #ccc;\n  border-left: 5px solid #ccc;\n  padding: 5px;\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n  min-height: 25px;\n  line-height: 25px;\n}\n\n.gamelog .phase-marker {\n  grid-column: 3;\n  background: #555;\n  border: 1px solid #888;\n  color: #eee;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-orientation: sideways;\n  writing-mode: vertical-rl;\n  line-height: 30px;\n  width: 100%;\n}\n\n.gamelog.pinned .log-event {\n  opacity: 0.2;\n}\n\n.gamelog .log-event:hover {\n  border-style: solid;\n  background: #eee;\n}\n\n.gamelog .log-event.pinned {\n  border-style: solid;\n  background: #eee;\n  opacity: 1;\n}\n\n.gamelog div.player0 {\n  border-left-color: #ff851b;\n}\n\n.gamelog div.player1 {\n  border-left-color: #7fdbff;\n}\n\n.gamelog div.player2 {\n  border-left-color: #0074d9;\n}\n\n.gamelog div.player3 {\n  border-left-color: #39cccc;\n}\n\n.gamelog div.player4 {\n  border-left-color: #3d9970;\n}\n\n.gamelog div.player5 {\n  border-left-color: #2ecc40;\n}\n\n.gamelog div.player6 {\n  border-left-color: #01ff70;\n}\n\n.gamelog div.player7 {\n  border-left-color: #ffdc00;\n}\n\n.gamelog div.player8 {\n  border-left-color: #001f3f;\n}\n\n.gamelog div.player9 {\n  border-left-color: #ff4136;\n}\n\n.gamelog div.player10 {\n  border-left-color: #85144b;\n}\n\n.gamelog div.player11 {\n  border-left-color: #f012be;\n}\n\n.gamelog div.player12 {\n  border-left-color: #b10dc9;\n}\n\n.gamelog div.player13 {\n  border-left-color: #111111;\n}\n\n.gamelog div.player14 {\n  border-left-color: #aaaaaa;\n}\n\n.gamelog div.player15 {\n  border-left-color: #dddddd;\n}\n";
  styleInject(css$1);

  /**
   * Default component to render custom payload.
   */

  var CustomPayload = function CustomPayload(props) {
    var custompayload = props.payload !== undefined ? JSON.stringify(props.payload, null, 4) : '';
    return React.createElement("div", null, custompayload);
  };

  CustomPayload.propTypes = {
    payload: PropTypes.any
  };
  /**
   * LogEvent
   *
   * Logs a single action in the game.
   */

  var LogEvent = function LogEvent(props) {
    var action = props.action;
    var args = action.payload.args || [];
    var playerID = action.payload.playerID;
    var classNames = "log-event player".concat(playerID);

    if (props.pinned) {
      classNames += ' pinned';
    } // allow to pass in custom rendering component for custom payload


    var customPayload = props.payloadComponent !== undefined ? React.createElement(props.payloadComponent, {
      payload: props.payload
    }) : React.createElement(CustomPayload, {
      payload: props.payload
    });
    return React.createElement("div", {
      className: classNames,
      onClick: function onClick() {
        return props.onLogClick(props.logIndex);
      },
      onMouseEnter: function onMouseEnter() {
        return props.onMouseEnter(props.logIndex);
      },
      onMouseLeave: function onMouseLeave() {
        return props.onMouseLeave();
      }
    }, React.createElement("div", null, action.payload.type, "(", args.join(','), ")"), customPayload);
  };

  LogEvent.propTypes = {
    action: PropTypes.any.isRequired,
    logIndex: PropTypes.number.isRequired,
    onLogClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    pinned: PropTypes.bool,
    payload: PropTypes.object,
    payloadComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  };
  /**
   * TurnMarker
   *
   * The markers on the left of the log events that indicate
   * which turn the event belongs to.
   */

  var TurnMarker = function TurnMarker(props) {
    return React.createElement("div", {
      className: "turn-marker",
      style: {
        gridRow: 'span ' + props.numEvents
      }
    }, props.turn);
  };

  TurnMarker.propTypes = {
    turn: PropTypes.number.isRequired,
    numEvents: PropTypes.number.isRequired
  };
  /**
   * PhaseMarker
   *
   * The markers on the right of the log events that indicate
   * which phase the event belongs to.
   */

  var PhaseMarker = function PhaseMarker(props) {
    return React.createElement("div", {
      className: "phase-marker",
      style: {
        gridRow: 'span ' + props.numEvents
      }
    }, props.phase);
  };

  PhaseMarker.propTypes = {
    phase: PropTypes.string.isRequired,
    numEvents: PropTypes.number.isRequired
  };
  /**
   * GameLog
   *
   * Component to log the actions in the game.
   */

  var GameLog =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(GameLog, _React$Component);

    function GameLog() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GameLog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameLog)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        pinned: null
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rewind", function (logIndex) {
        var state = _this.props.initialState;

        for (var i = 0; i < _this.props.log.length; i++) {
          var action = _this.props.log[i].action;

          if (!action.automatic) {
            state = _this.props.reducer(state, action);
          }

          if (action.type == MAKE_MOVE) {
            if (logIndex == 0) {
              break;
            }

            logIndex--;
          }
        }

        return {
          G: state.G,
          ctx: state.ctx
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLogClick", function (logIndex) {
        _this.setState(function (o) {
          var state = _this.rewind(logIndex);

          var renderedLogEntries = _this.props.log.filter(function (e) {
            return e.action.type == MAKE_MOVE;
          });

          var metadata = renderedLogEntries[logIndex].action.payload.metadata;

          if (o.pinned === logIndex) {
            _this.props.onHover({
              logIndex: logIndex,
              state: state,
              metadata: undefined
            });

            return {
              pinned: null
            };
          }

          _this.props.onHover({
            logIndex: logIndex,
            state: state,
            metadata: metadata
          });

          return {
            pinned: logIndex
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (logIndex) {
        if (_this.state.pinned === null) {
          var state = _this.rewind(logIndex);

          _this.props.onHover({
            logIndex: logIndex,
            state: state
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
        if (_this.state.pinned === null) {
          _this.props.onHover({
            state: null
          });
        }
      });

      return _this;
    }

    _createClass(GameLog, [{
      key: "render",
      value: function render() {
        var log = [];
        var turns = [];
        var phases = [];
        var eventsInCurrentPhase = 0;
        var eventsInCurrentTurn = 0;
        var renderedLogEntries = this.props.log.filter(function (e) {
          return e.action.type == MAKE_MOVE;
        });

        for (var i = 0; i < renderedLogEntries.length; i++) {
          var _renderedLogEntries$i = renderedLogEntries[i],
              action = _renderedLogEntries$i.action,
              payload = _renderedLogEntries$i.payload,
              turn = _renderedLogEntries$i.turn,
              phase = _renderedLogEntries$i.phase;
          eventsInCurrentPhase++;
          eventsInCurrentTurn++;
          log.push(React.createElement(LogEvent, {
            key: i,
            pinned: i === this.state.pinned,
            logIndex: i,
            onLogClick: this.onLogClick,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            action: action,
            payload: payload,
            payloadComponent: this.props.payloadComponent
          }));

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].turn != turn) {
            turns.push(React.createElement(TurnMarker, {
              key: turns.length,
              turn: turn,
              numEvents: eventsInCurrentTurn
            }));
            eventsInCurrentTurn = 0;
          }

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].phase != phase) {
            phases.push(React.createElement(PhaseMarker, {
              key: phases.length,
              phase: phase,
              numEvents: eventsInCurrentPhase
            }));
            eventsInCurrentPhase = 0;
          }
        }

        var className = 'gamelog';

        if (this.state.pinned !== null) {
          className += ' pinned';
        }

        return React.createElement("div", {
          className: className
        }, turns, log, phases);
      }
    }]);

    return GameLog;
  }(React.Component);

  _defineProperty(GameLog, "propTypes", {
    onHover: PropTypes.func,
    reducer: PropTypes.func,
    initialState: PropTypes.any.isRequired,
    log: PropTypes.array.isRequired,
    payloadComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  });

  _defineProperty(GameLog, "defaultProps", {
    onHover: function onHover() {}
  });

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Generate a move to be dispatched to the game move reducer.
   *
   * @param {string} type - The move type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var makeMove = function makeMove(type, args, playerID, credentials) {
    return {
      type: MAKE_MOVE,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      }
    };
  };
  /**
   * Generate a game event to be dispatched to the flow reducer.
   *
   * @param {string} type - The event type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var gameEvent = function gameEvent(type, args, playerID, credentials) {
    return {
      type: GAME_EVENT,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      }
    };
  };
  /**
   * Generate an automatic game event that is a side-effect of a move.
   * @param {string} type - The event type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var automaticGameEvent = function automaticGameEvent(type, args, playerID, credentials) {
    return {
      type: GAME_EVENT,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      },
      automatic: true
    };
  };
  /**
   * Used to reset the Redux store's state on a sync.
   * @param {object} state - The state to restore.
   * @param {Array} log - The log to restore.
   */

  var sync = function sync(state, log) {
    return {
      type: SYNC,
      state: state,
      log: log,
      clientOnly: true
    };
  };
  /**
   * Used to update the Redux store's state in response to
   * an action coming from another player.
   * @param {object} state - The state to restore.
   * @param {Array} deltalog - A log delta.
   */

  var update = function update(state, deltalog) {
    return {
      type: UPDATE,
      state: state,
      deltalog: deltalog,
      clientOnly: true
    };
  };
  /**
   * Used to reset the game state.
   * @param {object} state - The initial state.
   */

  var reset = function reset(state) {
    return {
      type: RESET,
      state: state,
      clientOnly: true
    };
  };
  /**
   * Used to undo the last move.
   */

  var undo = function undo() {
    return {
      type: UNDO
    };
  };
  /**
   * Used to redo the last undone move.
   */

  var redo = function redo() {
    return {
      type: REDO
    };
  };

  var ActionCreators = /*#__PURE__*/Object.freeze({
    makeMove: makeMove,
    gameEvent: gameEvent,
    automaticGameEvent: automaticGameEvent,
    sync: sync,
    update: update,
    reset: reset,
    undo: undo,
    redo: redo
  });

  /**
   * Removes all the keys in ctx that begin with a _.
   */

  function SanitizeCtx(ctx) {
    var r = {};

    for (var key in ctx) {
      if (!key.startsWith('_')) {
        r[key] = ctx[key];
      }
    }

    return r;
  }
  /**
   * Debug
   *
   * Debug pane that displays the game state objects,
   * allows you to dispatch moves,
   * and allows you to save / restore from localStorage.
   */


  var Debug =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Debug, _React$Component);

    function Debug(props) {
      var _this;

      _classCallCheck(this, Debug);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Debug).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveState", function () {
        var json = flatted.stringify(_this.props.gamestate);
        window.localStorage.setItem('gamestate', json);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "restoreState", function () {
        var gamestateJSON = window.localStorage.getItem('gamestate');

        if (gamestateJSON !== null) {
          var gamestate = flatted.parse(gamestateJSON);

          _this.props.store.dispatch(sync(gamestate));
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickMain", function () {
        _this.setState({
          showLog: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickLog", function () {
        _this.setState({
          showLog: true
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleHelp", function () {
        _this.setState(function (oldstate) {
          return {
            help: !oldstate.help
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLogHover", function (_ref) {
        var state = _ref.state,
            metadata = _ref.metadata;

        _this.setState({
          AIMetadata: metadata
        });

        _this.props.overrideGameState(state);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "simulate", function () {
        var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
        var sleepTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var step = async function step() {
          for (var i = 0; i < iterations; i++) {
            var action = await _this.props.step();
            if (!action) break;
            await new Promise(function (resolve) {
              return setTimeout(resolve, sleepTimeout);
            });
          }
        };

        return step();
      });

      _this.shortcuts = AssignShortcuts(props.moves, props.events, 'dlit');
      _this.state = {
        showDebugUI: true,
        showLog: false,
        showGameInfo: props.showGameInfo,
        dockControls: props.dockControls,
        help: false,
        AIMetadata: null
      };
      return _this;
    }

    _createClass(Debug, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        Mousetrap.bind('d', function (e) {
          e.preventDefault();

          _this2.setState(function (old) {
            return {
              showDebugUI: !old.showDebugUI
            };
          });
        });
        Mousetrap.bind('l', function (e) {
          e.preventDefault();

          _this2.setState(function (old) {
            return {
              showLog: !old.showLog
            };
          });
        });
        Mousetrap.bind('i', function (e) {
          e.preventDefault();

          _this2.setState(function (old) {
            return {
              showGameInfo: !old.showGameInfo
            };
          });
        });
        Mousetrap.bind('t', function (e) {
          e.preventDefault();

          _this2.setState(function (old) {
            return {
              dockControls: !old.dockControls
            };
          });
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        Mousetrap.unbind('d');
        Mousetrap.unbind('l');
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.showDebugUI) {
          return null;
        }

        var moves = [];

        for (var name in this.props.moves) {
          var fn = this.props.moves[name];
          var shortcut = this.shortcuts[name];
          moves.push(React.createElement(DebugMove, {
            key: name,
            name: name,
            fn: fn,
            shortcut: shortcut
          }));
        }

        var events = [];

        for (var _name in this.props.events) {
          var _fn = this.props.events[_name];
          var _shortcut = this.shortcuts[_name];
          events.push(React.createElement(DebugMove, {
            key: _name,
            name: _name,
            fn: _fn,
            shortcut: _shortcut
          }));
        }

        var visualizeAI = this.state.AIMetadata && this.props.visualizeAI;
        var className = 'debug-ui';

        if (this.state.dockControls) {
          className += ' docktop';
        }

        return React.createElement("div", {
          className: className
        }, visualizeAI && React.createElement("div", {
          className: "ai-visualization"
        }, this.props.visualizeAI(this.state.AIMetadata)), React.createElement("div", {
          className: "pane"
        }, React.createElement("div", {
          className: "menu"
        }, React.createElement("div", {
          className: this.state.showLog ? 'item' : 'item active',
          onClick: this.onClickMain
        }, "Main"), React.createElement("div", {
          className: this.state.showLog ? 'item active' : 'item',
          onClick: this.onClickLog
        }, "Log")), this.state.showLog || React.createElement("span", null, this.state.showGameInfo && React.createElement(GameInfo, {
          gameID: this.props.gameID,
          playerID: this.props.playerID,
          isActive: this.props.gamestate.isActive,
          isConnected: this.props.gamestate.isConnected,
          isMultiplayer: this.props.isMultiplayer
        }), React.createElement(Controls, {
          dockTop: this.state.dockControls,
          help: this.state.help,
          toggleHelp: this.toggleHelp,
          step: this.props.step,
          simulate: this.simulate,
          reset: this.props.reset,
          save: this.saveState,
          restore: this.restoreState
        }), React.createElement("h3", null, "Players"), React.createElement(PlayerInfo, {
          ctx: this.props.gamestate.ctx,
          playerID: this.props.playerID,
          onClick: this.props.updatePlayerID
        }), React.createElement("h3", null, "Moves"), React.createElement("section", null, moves), React.createElement("h3", null, "Events"), React.createElement("section", null, events), React.createElement("section", null, React.createElement("pre", {
          className: "json"
        }, React.createElement("strong", null, "G"), ":", ' ', JSON.stringify(this.props.gamestate.G, null, 2))), React.createElement("section", null, React.createElement("pre", {
          className: "json"
        }, React.createElement("strong", null, "ctx"), ":", ' ', JSON.stringify(SanitizeCtx(this.props.gamestate.ctx), null, 2)))), this.state.showLog && React.createElement("section", null, React.createElement(GameLog, {
          onHover: this.onLogHover,
          reducer: this.props.reducer,
          log: this.props.gamestate.log,
          initialState: this.props.gamestate._initial
        }))));
      }
    }]);

    return Debug;
  }(React.Component);

  _defineProperty(Debug, "propTypes", {
    gamestate: PropTypes.shape({
      G: PropTypes.any.isRequired,
      ctx: PropTypes.any.isRequired,
      log: PropTypes.array.isRequired,
      isActive: PropTypes.bool,
      isConnected: PropTypes.bool,
      _initial: PropTypes.any.isRequired
    }),
    gameID: PropTypes.string.isRequired,
    playerID: PropTypes.string,
    isMultiplayer: PropTypes.bool,
    moves: PropTypes.any,
    events: PropTypes.any,
    restore: PropTypes.func,
    showLog: PropTypes.bool,
    store: PropTypes.any,
    step: PropTypes.func,
    reset: PropTypes.func,
    reducer: PropTypes.func,
    overrideGameState: PropTypes.func,
    visualizeAI: PropTypes.func,
    updateGameID: PropTypes.func,
    updatePlayerID: PropTypes.func,
    updateCredentials: PropTypes.func,
    showGameInfo: PropTypes.bool,
    dockControls: PropTypes.bool
  });

  _defineProperty(Debug, "defaultProps", {
    showGameInfo: true,
    dockControls: false
  });

  /**
   * SocketIO
   *
   * Transport interface that interacts with the Master via socket.io.
   */

  var SocketIO =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new Mutiplayer instance.
     * @param {object} socket - Override for unit tests.
     * @param {object} socketOpts - Options to pass to socket.io.
     * @param {string} gameID - The game ID to connect to.
     * @param {string} playerID - The player ID associated with this client.
     * @param {string} gameName - The game type (the `name` field in `Game`).
     * @param {string} numPlayers - The number of players.
     * @param {string} server - The game server in the form of 'hostname:port'. Defaults to the server serving the client if not provided.
     */
    function SocketIO() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          socket = _ref.socket,
          socketOpts = _ref.socketOpts,
          store = _ref.store,
          gameID = _ref.gameID,
          playerID = _ref.playerID,
          gameName = _ref.gameName,
          numPlayers = _ref.numPlayers,
          server = _ref.server;

      _classCallCheck(this, SocketIO);

      this.server = server;
      this.socket = socket;
      this.store = store;
      this.socketOpts = socketOpts;
      this.gameName = gameName || 'default';
      this.gameID = gameID || 'default';
      this.playerID = playerID || null;
      this.numPlayers = numPlayers || 2;
      this.gameID = this.gameName + ':' + this.gameID;
      this.isConnected = false;

      this.callback = function () {};
    }
    /**
     * Called when an action that has to be relayed to the
     * game master is made.
     */


    _createClass(SocketIO, [{
      key: "onAction",
      value: function onAction(state, action) {
        this.socket.emit('update', action, state._stateID, this.gameID, this.playerID);
      }
      /**
       * Connect to the server.
       */

    }, {
      key: "connect",
      value: function connect() {
        var _this = this;

        if (!this.socket) {
          if (this.server) {
            var server = this.server;

            if (server.search(/^https?:\/\//) == -1) {
              server = 'http://' + this.server;
            }

            if (server.substr(-1) != '/') {
              // add trailing slash if not already present
              server = server + '/';
            }

            this.socket = io(server + this.gameName, this.socketOpts);
          } else {
            this.socket = io('/' + this.gameName, this.socketOpts);
          }
        } // Called when another player makes a move and the
        // master broadcasts the update to other clients (including
        // this one).


        this.socket.on('update', function (gameID, state, deltalog) {
          var currentState = _this.store.getState();

          if (gameID == _this.gameID && state._stateID >= currentState._stateID) {
            var action = update(state, deltalog);

            _this.store.dispatch(action);
          }
        }); // Called when the client first connects to the master
        // and requests the current game state.

        this.socket.on('sync', function (gameID, state, log) {
          if (gameID == _this.gameID) {
            var action = sync(state, log);

            _this.store.dispatch(action);
          }
        }); // Initial sync to get game state.

        this.socket.emit('sync', this.gameID, this.playerID, this.numPlayers); // Keep track of connection status.

        this.socket.on('connect', function () {
          _this.isConnected = true;

          _this.callback();
        });
        this.socket.on('disconnect', function () {
          _this.isConnected = false;

          _this.callback();
        });
      }
      /**
       * Subscribe to connection state changes.
       */

    }, {
      key: "subscribe",
      value: function subscribe(fn) {
        this.callback = fn;
      }
      /**
       * Updates the game id.
       * @param {string} id - The new game id.
       */

    }, {
      key: "updateGameID",
      value: function updateGameID(id) {
        this.gameID = this.gameName + ':' + id;
        var action = reset(null);
        this.store.dispatch(action);

        if (this.socket) {
          this.socket.emit('sync', this.gameID, this.playerID, this.numPlayers);
        }
      }
      /**
       * Updates the player associated with this client.
       * @param {string} id - The new player id.
       */

    }, {
      key: "updatePlayerID",
      value: function updatePlayerID(id) {
        this.playerID = id;
        var action = reset(null);
        this.store.dispatch(action);

        if (this.socket) {
          this.socket.emit('sync', this.gameID, this.playerID, this.numPlayers);
        }
      }
    }]);

    return SocketIO;
  }();

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  /**
   * InMemory data storage.
   */
  var InMemory =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new InMemory storage.
     */
    function InMemory() {
      _classCallCheck(this, InMemory);

      this.games = new Map();
    }
    /**
     * Connect.
     * No-op for the InMemory instance.
     */


    _createClass(InMemory, [{
      key: "connect",
      value: function connect() {
        return;
      }
      /**
       * Write the game state to the in-memory object.
       * @param {string} id - The game id.
       * @param {object} store - A game state to persist.
       */

    }, {
      key: "set",
      value: function set(id, state) {
        return this.games.set(id, state);
      }
      /**
       * Read the game state from the in-memory object.
       * @param {string} id - The game id.
       * @returns {object} - A game state, or undefined
       *                     if no game is found with this id.
       */

    }, {
      key: "get",
      value: function get(id) {
        return this.games.get(id);
      }
      /**
       * Check if a particular game id exists.
       * @param {string} id - The game id.
       * @returns {boolean} - True if a game with this id exists.
       */

    }, {
      key: "has",
      value: function has(id) {
        return this.games.has(id);
      }
      /**
       * Remove the game state from the in-memory object.
       * @param {string} id - The game id.
       */

    }, {
      key: "remove",
      value: function remove(id) {
        if (!this.games.has(id)) return;
        this.games.delete(id);
      }
      /**
       * Return all keys.
       * @returns {array} - Array of keys (strings)
       */

    }, {
      key: "list",
      value: function list() {
        return _toConsumableArray(this.games.keys());
      }
    }]);

    return InMemory;
  }();

  // Inlined version of Alea from https://github.com/davidbau/seedrandom.

  /*
   * Copyright 2015 David Bau.
   *
   * Permission is hereby granted, free of charge,
   * to any person obtaining a copy of this software
   * and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge,
   * publish, distribute, sublicense, and/or sell copies of the
   * Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall
   * be included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */
  function Alea(seed) {
    var me = this,
        mash = Mash();

    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    }; // Apply the seeding algorithm from Baagoe.


    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);

    if (me.s0 < 0) {
      me.s0 += 1;
    }

    me.s1 -= mash(seed);

    if (me.s1 < 0) {
      me.s1 += 1;
    }

    me.s2 -= mash(seed);

    if (me.s2 < 0) {
      me.s2 += 1;
    }

    mash = null;
  }

  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function mash(data) {
      data = data.toString();

      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }

  function alea(seed, opts) {
    var xg = new Alea(seed),
        state = opts && opts.state,
        prng = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  /**
   * Random
   *
   * Calls that require a pseudorandom number generator.
   * Uses a seed from ctx, and also persists the PRNG
   * state in ctx so that moves can stay pure.
   */

  var Random =
  /*#__PURE__*/
  function () {
    /**
     * constructor
     * @param {object} ctx - The ctx object to initialize from.
     */
    function Random(ctx) {
      _classCallCheck(this, Random);

      // If we are on the client, the seed is not present.
      // Just use a temporary seed to execute the move without
      // crashing it. The move state itself is discarded,
      // so the actual value doesn't matter.
      this.state = ctx._random || {
        seed: '0'
      };
    }
    /**
     * Updates ctx with the PRNG state.
     * @param {object} ctx - The ctx object to update.
     */


    _createClass(Random, [{
      key: "update",
      value: function update(state) {
        var ctx = _objectSpread({}, state.ctx, {
          _random: this.state
        });

        return _objectSpread({}, state, {
          ctx: ctx
        });
      }
      /**
       * Attaches the Random API to ctx.
       * @param {object} ctx - The ctx object to attach to.
       */

    }, {
      key: "attach",
      value: function attach(ctx) {
        return _objectSpread({}, ctx, {
          random: this._api()
        });
      }
      /**
       * Generate a random number.
       */

    }, {
      key: "_random",
      value: function _random() {
        var R = this.state;
        var fn;

        if (R.prngstate === undefined) {
          // No call to a random function has been made.
          fn = new alea(R.seed, {
            state: true
          });
        } else {
          fn = new alea('', {
            state: R.prngstate
          });
        }

        var number = fn();
        this.state = _objectSpread({}, R, {
          prngstate: fn.state()
        });
        return number;
      }
    }, {
      key: "_api",
      value: function _api() {
        var random = this._random.bind(this);

        var SpotValue = {
          D4: 4,
          D6: 6,
          D8: 8,
          D10: 10,
          D12: 12,
          D20: 20
        }; // Generate functions for predefined dice values D4 - D20.

        var predefined = {};

        var _loop = function _loop(key) {
          var spotvalue = SpotValue[key];

          predefined[key] = function (diceCount) {
            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          };
        };

        for (var key in SpotValue) {
          _loop(key);
        }

        return _objectSpread({}, predefined, {
          /**
           * Roll a die of specified spot value.
           *
           * @param {number} spotvalue - The die dimension (default: 6).
           * @param {number} diceCount - number of dice to throw.
           *                             if not defined, defaults to 1 and returns the value directly.
           *                             if defined, returns an array containing the random dice values.
           */
          Die: function Die(spotvalue, diceCount) {
            if (spotvalue === undefined) {
              spotvalue = 6;
            }

            if (diceCount === undefined) {
              return Math.floor(random() * spotvalue) + 1;
            } else {
              return _toConsumableArray(new Array(diceCount).keys()).map(function () {
                return Math.floor(random() * spotvalue) + 1;
              });
            }
          },

          /**
           * Generate a random number between 0 and 1.
           */
          Number: function Number() {
            return random();
          },

          /**
           * Shuffle an array.
           *
           * @param {Array} deck - The array to shuffle. Does not mutate
           *                       the input, but returns the shuffled array.
           */
          Shuffle: function Shuffle(deck) {
            var clone = deck.slice(0);
            var srcIndex = deck.length;
            var dstIndex = 0;
            var shuffled = new Array(srcIndex);

            while (srcIndex) {
              var randIndex = srcIndex * random() | 0;
              shuffled[dstIndex++] = clone[randIndex];
              clone[randIndex] = clone[--srcIndex];
            }

            return shuffled;
          }
        });
      }
    }]);

    return Random;
  }();
  /**
   * Removes the attached Random api from ctx.
   *
   * @param {object} ctx - The ctx object with the Random API attached.
   * @returns {object} A plain ctx object without the Random API.
   */

  Random.detach = function (ctx) {
    var random = ctx.random,
        rest = _objectWithoutProperties(ctx, ["random"]); // eslint-disable-line no-unused-vars


    return rest;
  };
  /**
   * Generates a new seed from the current date / time.
   */


  Random.seed = function () {
    return (+new Date()).toString(36).slice(-10);
  };

  /**
   * Events
   */

  var Events =
  /*#__PURE__*/
  function () {
    function Events(flow, playerID) {
      _classCallCheck(this, Events);

      this.flow = flow;
      this.playerID = playerID;
      this.dispatch = [];
    }
    /**
     * Attaches the Events API to ctx.
     * @param {object} ctx - The ctx object to attach to.
     */


    _createClass(Events, [{
      key: "attach",
      value: function attach(ctx) {
        var _this = this;

        var events = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var key = _step.value;

            events[key] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this.dispatch.push({
                key: key,
                args: args
              });
            };
          };

          for (var _iterator = this.flow.eventNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
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

        return _objectSpread({}, ctx, {
          events: events
        });
      }
      /**
       * Updates ctx with the triggered events.
       * @param {object} state - The state object { G, ctx }.
       */

    }, {
      key: "update",
      value: function update$$1(state) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.dispatch[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            var action = automaticGameEvent(item.key, item.args, this.playerID);
            state = _objectSpread({}, state, this.flow.processGameEvent(state, action));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return state;
      }
    }]);

    return Events;
  }();
  /**
   * Detaches the Events API from ctx.
   * @param {object} ctx - The ctx object to strip.
   */

  Events.detach = function (ctx) {
    var events = ctx.events,
        rest = _objectWithoutProperties(ctx, ["events"]); // eslint-disable-line no-unused-vars


    return rest;
  };

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Plugin that allows using Immer to make immutable changes
   * to G by just mutating it.
   */

  var PluginImmer = {
    fnWrap: function fnWrap(move) {
      return produce(move);
    }
  };

  /**
   * List of plugins that are always added.
   */

  var DEFAULT_PLUGINS = [PluginImmer];
  var G = {
    /**
     * Applies the provided plugins to G during game setup.
     *
     * @param {object} G - The G object.
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    setup: function setup(G, ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.G !== undefined;
      }).filter(function (plugin) {
        return plugin.G.setup !== undefined;
      }).forEach(function (plugin) {
        G = plugin.G.setup(G, ctx, game);
      });
      return G;
    },

    /**
     * Applies the provided plugins to G during the beginning of the phase.
     *
     * @param {object} G - The G object.
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    onPhaseBegin: function onPhaseBegin(G, ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.G !== undefined;
      }).filter(function (plugin) {
        return plugin.G.onPhaseBegin !== undefined;
      }).forEach(function (plugin) {
        G = plugin.G.onPhaseBegin(G, ctx, game);
      });
      return G;
    }
  };
  var ctx = {
    /**
     * Applies the provided plugins to ctx during game setup.
     *
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    setup: function setup(ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.ctx !== undefined;
      }).filter(function (plugin) {
        return plugin.ctx.setup !== undefined;
      }).forEach(function (plugin) {
        ctx = plugin.ctx.setup(ctx, game);
      });
      return ctx;
    },

    /**
     * Applies the provided plugins to ctx during the beginning of the phase.
     *
     * @param {object} ctx - The ctx object.
     * @param {object} game - The game object.
     */
    onPhaseBegin: function onPhaseBegin(ctx, game) {
      [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
        return plugin.ctx !== undefined;
      }).filter(function (plugin) {
        return plugin.ctx.onPhaseBegin !== undefined;
      }).forEach(function (plugin) {
        ctx = plugin.ctx.onPhaseBegin(ctx, game);
      });
      return ctx;
    }
  };

  /**
   * Moves can return this when they want to indicate
   * that the combination of arguments is illegal and
   * the move ought to be discarded.
   */

  var INVALID_MOVE = 'INVALID_MOVE';
  /**
   * Context API to allow writing custom logs in games.
   */

  var GameLoggerCtxAPI =
  /*#__PURE__*/
  function () {
    function GameLoggerCtxAPI() {
      _classCallCheck(this, GameLoggerCtxAPI);

      this._payload = undefined;
    }

    _createClass(GameLoggerCtxAPI, [{
      key: "_api",
      value: function _api() {
        var _this = this;

        return {
          setPayload: function setPayload(payload) {
            _this._payload = payload;
          }
        };
      }
    }, {
      key: "attach",
      value: function attach(ctx$$1) {
        return _objectSpread({}, ctx$$1, {
          log: this._api()
        });
      }
    }, {
      key: "update",
      value: function update(state) {
        if (this._payload === undefined) {
          return state;
        } // attach the payload to the last log event


        var deltalog = state.deltalog;
        deltalog[deltalog.length - 1] = _objectSpread({}, deltalog[deltalog.length - 1], {
          payload: this._payload
        });
        this._payload = undefined;
        return _objectSpread({}, state, {
          deltalog: deltalog
        });
      }
    }], [{
      key: "detach",
      value: function detach(ctx$$1) {
        var log = ctx$$1.log,
            ctxWithoutLog = _objectWithoutProperties(ctx$$1, ["log"]); // eslint-disable-line no-unused-vars


        return ctxWithoutLog;
      }
    }]);

    return GameLoggerCtxAPI;
  }();
  /**
   * This class is used to attach/detach various utility objects
   * onto a ctx, without having to manually attach/detach them
   * all separately.
   */

  var ContextEnhancer =
  /*#__PURE__*/
  function () {
    function ContextEnhancer(ctx$$1, game, player) {
      _classCallCheck(this, ContextEnhancer);

      this.random = new Random(ctx$$1);
      this.events = new Events(game.flow, player);
      this.log = new GameLoggerCtxAPI();
    }

    _createClass(ContextEnhancer, [{
      key: "attachToContext",
      value: function attachToContext(ctx$$1) {
        var ctxWithAPI = this.random.attach(ctx$$1);
        ctxWithAPI = this.events.attach(ctxWithAPI);
        ctxWithAPI = this.log.attach(ctxWithAPI);
        return ctxWithAPI;
      }
    }, {
      key: "_update",
      value: function _update(state, updateEvents) {
        var newState = updateEvents ? this.events.update(state) : state;
        newState = this.random.update(newState);
        newState = this.log.update(newState);
        return newState;
      }
    }, {
      key: "updateAndDetach",
      value: function updateAndDetach(state, updateEvents) {
        var newState = this._update(state, updateEvents);

        newState.ctx = ContextEnhancer.detachAllFromContext(newState.ctx);
        return newState;
      }
    }], [{
      key: "detachAllFromContext",
      value: function detachAllFromContext(ctx$$1) {
        var ctxWithoutAPI = Random.detach(ctx$$1);
        ctxWithoutAPI = Events.detach(ctxWithoutAPI);
        ctxWithoutAPI = GameLoggerCtxAPI.detach(ctxWithoutAPI);
        return ctxWithoutAPI;
      }
    }]);

    return ContextEnhancer;
  }();
  /**
   * InitializeGame
   *
   * Creates the initial game state.
   *
   * @param {...object} game - Return value of Game().
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
   */

  function InitializeGame(_ref) {
    var game = _ref.game,
        numPlayers = _ref.numPlayers,
        setupData = _ref.setupData;

    if (!numPlayers) {
      numPlayers = 2;
    }

    var ctx$$1 = game.flow.ctx(numPlayers);
    var seed = game.seed;

    if (seed === undefined) {
      seed = Random.seed();
    }

    ctx$$1._random = {
      seed: seed
    }; // Pass ctx through all the plugins that want to modify it.

    ctx$$1 = ctx.setup(ctx$$1, game); // Augment ctx with the enhancers (TODO: move these into plugins).

    var apiCtx = new ContextEnhancer(ctx$$1, game, ctx$$1.currentPlayer);
    var ctxWithAPI = apiCtx.attachToContext(ctx$$1);
    var initialG = game.setup(ctxWithAPI, setupData); // Pass G through all the plugins that want to modify it.

    initialG = G.setup(initialG, ctxWithAPI, game);
    var initial = {
      // User managed state.
      G: initialG,
      // Framework managed state.
      ctx: ctx$$1,
      // List of {G, ctx} pairs that can be undone.
      _undo: [],
      // List of {G, ctx} pairs that can be redone.
      _redo: [],
      // A monotonically non-decreasing ID to ensure that
      // state updates are only allowed from clients that
      // are at the same version that the server.
      _stateID: 0,
      // A snapshot of this object so that actions can be
      // replayed over it to view old snapshots.
      // TODO: This will no longer be necessary once the
      // log stops replaying actions (but reads the actual
      // game states instead).
      _initial: {}
    };
    var state = game.flow.init({
      G: initial.G,
      ctx: ctxWithAPI
    });
    initial.G = state.G;
    initial._undo = state._undo;
    state = apiCtx.updateAndDetach(state, true);
    initial.ctx = state.ctx;

    var deepCopy = function deepCopy(obj) {
      return flatted.parse(flatted.stringify(obj));
    };

    initial._initial = deepCopy(initial);
    return initial;
  }
  /**
   * CreateGameReducer
   *
   * Creates the main game state reducer.
   * @param {...object} game - Return value of Game().
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
   */

  function CreateGameReducer(_ref2) {
    var game = _ref2.game,
        multiplayer = _ref2.multiplayer;

    /**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case GAME_EVENT:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Process game events only on the server.
            // These events like `endTurn` typically
            // contain code that may rely on secret state
            // and cannot be computed on the client.

            if (multiplayer) {
              return state;
            } // Ignore the event if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerCallEvent(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);
            state.ctx = apiCtx.attachToContext(state.ctx);
            var newState = game.flow.processGameEvent(state, action);
            newState = apiCtx.updateAndDetach(newState, true);
            return _objectSpread({}, newState, {
              _stateID: state._stateID + 1
            });
          }

        case MAKE_MOVE:
          {
            state = _objectSpread({}, state, {
              deltalog: []
            }); // Check whether the game knows the move at all.

            if (!game.moveNames.includes(action.payload.type)) {
              return state;
            } // Ignore the move if it isn't allowed at this point.


            if (!game.flow.canMakeMove(state.G, state.ctx, action.payload.type)) {
              return state;
            } // Ignore the move if the player isn't allowed to make it.


            if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.canPlayerMakeMove(state.G, state.ctx, action.payload.playerID)) {
              return state;
            }

            var _apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);

            var ctxWithAPI = _apiCtx.attachToContext(state.ctx); // Process the move.


            var G$$1 = game.processMove(state.G, action.payload, ctxWithAPI);

            if (G$$1 === INVALID_MOVE) {
              // the game declared the move as invalid.
              return state;
            } // Create a log entry for this move.


            var logEntry = {
              action: action,
              _stateID: state._stateID,
              turn: state.ctx.turn,
              phase: state.ctx.phase
            }; // don't call into events here

            var _newState = _apiCtx.updateAndDetach(_objectSpread({}, state, {
              deltalog: [logEntry]
            }), false);

            var ctx$$1 = _newState.ctx; // Undo changes to G if the move should not run on the client.

            if (multiplayer && !game.flow.optimisticUpdate(G$$1, ctx$$1, action.payload)) {
              G$$1 = state.G;
            }

            state = _objectSpread({}, _newState, {
              G: G$$1,
              ctx: ctx$$1,
              _stateID: state._stateID + 1
            }); // If we're on the client, just process the move
            // and no triggers in multiplayer mode.
            // These will be processed on the server, which
            // will send back a state update.

            if (multiplayer) {
              return state;
            } // Allow the flow reducer to process any triggers that happen after moves.


            ctxWithAPI = _apiCtx.attachToContext(state.ctx);
            state = game.flow.processMove(_objectSpread({}, state, {
              ctx: ctxWithAPI
            }), action.payload);
            state = _apiCtx.updateAndDetach(state, true);
            state._undo[state._undo.length - 1].ctx = state.ctx;
            return state;
          }

        case RESET:
        case UPDATE:
        case SYNC:
          {
            return action.state;
          }

        case UNDO:
          {
            var _state = state,
                _undo = _state._undo,
                _redo = _state._redo;

            if (_undo.length < 2) {
              return state;
            }

            var last = _undo[_undo.length - 1];
            var restore = _undo[_undo.length - 2]; // Only allow undoable moves to be undone.

            if (!game.flow.canUndoMove(state.G, state.ctx, last.moveType)) {
              return state;
            }

            return _objectSpread({}, state, {
              G: restore.G,
              ctx: restore.ctx,
              _undo: _undo.slice(0, _undo.length - 1),
              _redo: [last].concat(_toConsumableArray(_redo))
            });
          }

        case REDO:
          {
            var _state2 = state,
                _undo2 = _state2._undo,
                _redo2 = _state2._redo;

            if (_redo2.length == 0) {
              return state;
            }

            var first = _redo2[0];
            return _objectSpread({}, state, {
              G: first.G,
              ctx: first.ctx,
              _undo: [].concat(_toConsumableArray(_undo2), [first]),
              _redo: _redo2.slice(1)
            });
          }

        default:
          {
            return state;
          }
      }
    };
  }

  var GameMetadataKey = function GameMetadataKey(gameID) {
    return "".concat(gameID, ":metadata");
  };
  /**
   * Redact the log.
   *
   * @param {Array} redactedMoves - List of moves to redact.
   * @param {Array} log - The game log (or deltalog).
   * @param {String} playerID - The playerID that this log is
   *                            to be sent to.
   */


  function redactLog(redactedMoves, log, playerID) {
    if (redactedMoves === undefined || log === undefined) {
      return log;
    }

    return log.map(function (logEvent) {
      // filter for all other players and a spectator
      if (playerID !== null && +playerID === +logEvent.action.payload.playerID) {
        return logEvent;
      } // only filter moves


      if (logEvent.action.type !== 'MAKE_MOVE') {
        return logEvent;
      }

      var moveName = logEvent.action.payload.type;
      var filteredEvent = logEvent;

      if (redactedMoves.includes(moveName)) {
        var newPayload = _objectSpread({}, filteredEvent.action.payload, {
          args: undefined,
          argsRedacted: true
        });

        filteredEvent = _objectSpread({}, filteredEvent, {
          action: _objectSpread({}, filteredEvent.action, {
            payload: newPayload
          })
        });
      }

      return filteredEvent;
    });
  }
  /**
   * Verifies that the move came from a player with the
   * appropriate credentials.
   */

  var isActionFromAuthenticPlayer = function isActionFromAuthenticPlayer(_ref) {
    var action = _ref.action,
        gameMetadata = _ref.gameMetadata,
        playerID = _ref.playerID;

    if (!gameMetadata) {
      return true;
    }

    if (!action.payload) {
      return true;
    }

    var hasCredentials = Object.keys(gameMetadata.players).some(function (key) {
      return !!(gameMetadata.players[key] && gameMetadata.players[key].credentials);
    });

    if (!hasCredentials) {
      return true;
    }

    if (!action.payload.credentials) {
      return false;
    }

    if (action.payload.credentials !== gameMetadata.players[playerID].credentials) {
      return false;
    }

    return true;
  };
  /**
   * Master
   *
   * Class that runs the game and maintains the authoritative state.
   * It uses the transportAPI to communicate with clients and the
   * storageAPI to communicate with the database.
   */

  var Master =
  /*#__PURE__*/
  function () {
    function Master(game, storageAPI, transportAPI, auth) {
      _classCallCheck(this, Master);

      this.game = game;
      this.storageAPI = storageAPI;
      this.transportAPI = transportAPI;

      this.auth = function () {
        return true;
      };

      if (auth === true) {
        this.auth = isActionFromAuthenticPlayer;
      } else if (typeof auth === 'function') {
        this.auth = auth;
      }
    }
    /**
     * Called on each move / event made by the client.
     * Computes the new value of the game state and returns it
     * along with a deltalog.
     */


    _createClass(Master, [{
      key: "onUpdate",
      value: async function onUpdate(action, stateID, gameID, playerID) {
        var _this = this;

        var isActionAuthentic;

        if (this.executeSynchronously) {
          var gameMetadata = this.storageAPI.get(GameMetadataKey(gameID));
          isActionAuthentic = this.auth({
            action: action,
            gameMetadata: gameMetadata,
            gameID: gameID,
            playerID: playerID
          });
        } else {
          var _gameMetadata = await this.storageAPI.get(GameMetadataKey(gameID));

          isActionAuthentic = this.auth({
            action: action,
            gameMetadata: _gameMetadata,
            gameID: gameID,
            playerID: playerID
          });
        }

        if (!isActionAuthentic) {
          return {
            error: 'unauthorized action'
          };
        }

        var key = gameID;
        var state;

        if (this.executeSynchronously) {
          state = this.storageAPI.get(key);
        } else {
          state = await this.storageAPI.get(key);
        }

        if (state === undefined) {
          error("game not found, gameID=[".concat(key, "]"));
          return {
            error: 'game not found'
          };
        }

        var reducer = CreateGameReducer({
          game: this.game,
          numPlayers: state.ctx.numPlayers
        });
        var store = redux.createStore(reducer, state); // Only allow UNDO / REDO if there is exactly one player
        // that can make moves right now and the person doing the
        // action is that player.

        if (action.type == UNDO || action.type == REDO) {
          if (state.ctx.currentPlayer !== playerID || state.ctx.actionPlayers.length != 1 || state.ctx.actionPlayers[0] !== playerID) {
            error("playerID=[".concat(playerID, "] cannot undo / redo right now"));
            return;
          }
        } // Check whether the player is allowed to make the move.


        if (action.type == MAKE_MOVE && !this.game.flow.canPlayerMakeMove(state.G, state.ctx, playerID)) {
          error("move not processed - canPlayerMakeMove=false, playerID=[".concat(playerID, "]"));
          return;
        } // Check whether the player is allowed to call the event.


        if (action.type == GAME_EVENT && !this.game.flow.canPlayerCallEvent(state.G, state.ctx, playerID)) {
          error("event not processed - invalid playerID=[".concat(playerID, "]"));
          return;
        }

        if (state._stateID !== stateID) {
          error("invalid stateID, was=[".concat(stateID, "], expected=[").concat(state._stateID, "]"));
          return;
        }

        var log = store.getState().log || []; // Update server's version of the store.

        store.dispatch(action);
        state = store.getState();
        this.transportAPI.sendAll(function (playerID) {
          var filteredState = _objectSpread({}, state, {
            G: _this.game.playerView(state.G, state.ctx, playerID),
            ctx: _objectSpread({}, state.ctx, {
              _random: undefined
            }),
            log: undefined,
            deltalog: undefined,
            _undo: [],
            _redo: [],
            _initial: _objectSpread({}, state._initial, {
              _undo: [],
              _redo: []
            })
          });

          var log = redactLog(_this.game.flow.redactedMoves, state.deltalog, playerID);
          return {
            type: 'update',
            args: [gameID, filteredState, log]
          };
        }); // TODO: We currently attach the log back into the state
        // object before storing it, but this should probably
        // sit in a different part of the database eventually.

        log = [].concat(_toConsumableArray(log), _toConsumableArray(state.deltalog));

        var stateWithLog = _objectSpread({}, state, {
          log: log
        });

        if (this.executeSynchronously) {
          this.storageAPI.set(key, stateWithLog);
        } else {
          await this.storageAPI.set(key, stateWithLog);
        }
      }
      /**
       * Called when the client connects / reconnects.
       * Returns the latest game state and the entire log.
       */

    }, {
      key: "onSync",
      value: async function onSync(gameID, playerID, numPlayers) {
        var key = gameID;
        var state;

        if (this.executeSynchronously) {
          state = this.storageAPI.get(key);
        } else {
          state = await this.storageAPI.get(key);
        } // If the game doesn't exist, then create one on demand.
        // TODO: Move this out of the sync call.


        if (state === undefined) {
          state = InitializeGame({
            game: this.game,
            numPlayers: numPlayers
          });

          if (this.executeSynchronously) {
            this.storageAPI.set(key, state);
            state = this.storageAPI.get(key);
          } else {
            await this.storageAPI.set(key, state);
            state = await this.storageAPI.get(key);
          }
        }

        var filteredState = _objectSpread({}, state, {
          G: this.game.playerView(state.G, state.ctx, playerID),
          ctx: _objectSpread({}, state.ctx, {
            _random: undefined
          }),
          log: undefined,
          deltalog: undefined,
          _undo: [],
          _redo: [],
          _initial: _objectSpread({}, state._initial, {
            _undo: [],
            _redo: []
          })
        });

        var log = redactLog(this.game.flow.redactedMoves, state.log, playerID);
        this.transportAPI.send({
          playerID: playerID,
          type: 'sync',
          args: [gameID, filteredState, log]
        });
        return;
      }
    }]);

    return Master;
  }();

  /**
   * Creates a local version of the master that the client
   * can interact with.
   */

  function LocalMaster(game) {
    var clientCallbacks = {};

    var send = function send(_ref) {
      var type = _ref.type,
          playerID = _ref.playerID,
          args = _ref.args;
      var callback = clientCallbacks[playerID];

      if (callback !== undefined) {
        callback.apply(null, [type].concat(_toConsumableArray(args)));
      }
    };

    var sendAll = function sendAll(arg) {
      for (var playerID in clientCallbacks) {
        var _arg = arg(playerID),
            type = _arg.type,
            args = _arg.args;

        send({
          type: type,
          playerID: playerID,
          args: args
        });
      }
    };

    var master = new Master(game, new InMemory(), {
      send: send,
      sendAll: sendAll
    }, false);
    master.executeSynchronously = true;

    master.connect = function (gameID, playerID, callback) {
      clientCallbacks[playerID] = callback;
    };

    return master;
  }
  /**
   * Local
   *
   * Transport interface that embeds a GameMaster within it
   * that you can connect multiple clients to.
   */

  var Local =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new Mutiplayer instance.
     * @param {object} socket - Override for unit tests.
     * @param {object} socketOpts - Options to pass to socket.io.
     * @param {string} gameID - The game ID to connect to.
     * @param {string} playerID - The player ID associated with this client.
     * @param {string} gameName - The game type (the `name` field in `Game`).
     * @param {string} numPlayers - The number of players.
     * @param {string} server - The game server in the form of 'hostname:port'. Defaults to the server serving the client if not provided.
     */
    function Local(_ref2) {
      var master = _ref2.master,
          store = _ref2.store,
          gameID = _ref2.gameID,
          playerID = _ref2.playerID,
          gameName = _ref2.gameName,
          numPlayers = _ref2.numPlayers;

      _classCallCheck(this, Local);

      this.master = master;
      this.store = store;
      this.gameName = gameName || 'default';
      this.gameID = gameID || 'default';
      this.playerID = playerID || null;
      this.numPlayers = numPlayers || 2;
      this.gameID = this.gameName + ':' + this.gameID;
      this.isConnected = true;
    }
    /**
     * Called when another player makes a move and the
     * master broadcasts the update to other clients (including
     * this one).
     */


    _createClass(Local, [{
      key: "onUpdate",
      value: function onUpdate(gameID, state, deltalog) {
        var currentState = this.store.getState();

        if (gameID == this.gameID && state._stateID >= currentState._stateID) {
          var action = update(state, deltalog);
          this.store.dispatch(action);
        }
      }
      /**
       * Called when the client first connects to the master
       * and requests the current game state.
       */

    }, {
      key: "onSync",
      value: function onSync(gameID, state, log) {
        if (gameID == this.gameID) {
          var action = sync(state, log);
          this.store.dispatch(action);
        }
      }
      /**
       * Called when an action that has to be relayed to the
       * game master is made.
       */

    }, {
      key: "onAction",
      value: function onAction(state, action) {
        this.master.onUpdate(action, state._stateID, this.gameID, this.playerID);
      }
      /**
       * Connect to the server.
       */

    }, {
      key: "connect",
      value: function connect() {
        var _this = this;

        this.master.connect(this.gameID, this.playerID, function (type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (type == 'sync') {
            _this.onSync.apply(_this, args);
          }

          if (type == 'update') {
            _this.onUpdate.apply(_this, args);
          }
        });
        this.master.onSync(this.gameID, this.playerID, this.numPlayers);
      }
      /**
       * Subscribe to connection state changes.
       */

    }, {
      key: "subscribe",
      value: function subscribe() {}
      /**
       * Updates the game id.
       * @param {string} id - The new game id.
       */

    }, {
      key: "updateGameID",
      value: function updateGameID(id) {
        this.gameID = this.gameName + ':' + id;
        var action = reset(null);
        this.store.dispatch(action);
        this.master.onSync(this.gameID, this.playerID, this.numPlayers);
      }
      /**
       * Updates the player associated with this client.
       * @param {string} id - The new player id.
       */

    }, {
      key: "updatePlayerID",
      value: function updatePlayerID(id) {
        this.playerID = id;
        var action = reset(null);
        this.store.dispatch(action);
        this.master.onSync(this.gameID, this.playerID, this.numPlayers);
      }
    }]);

    return Local;
  }();

  var localMaster_ = null;
  /**
   * createDispatchers
   *
   * Create action dispatcher wrappers with bound playerID and credentials
   */

  function createDispatchers(storeActionType, innerActionNames, store, playerID, credentials, multiplayer) {
    return innerActionNames.reduce(function (dispatchers, name) {
      dispatchers[name] = function () {
        var assumedPlayerID = playerID; // In singleplayer mode, if the client does not have a playerID
        // associated with it, we attach the currentPlayer as playerID.

        if (!multiplayer && (playerID === null || playerID === undefined)) {
          var state = store.getState();
          assumedPlayerID = state.ctx.currentPlayer;
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        store.dispatch(ActionCreators[storeActionType](name, args, assumedPlayerID, credentials));
      };

      return dispatchers;
    }, {});
  }
  /**
   * createEventDispatchers
   *
   * Creates a set of dispatchers to dispatch game flow events.
   * @param {Array} eventNames - A list of event names.
   * @param {object} store - The Redux store to create dispatchers for.
   * @param {string} playerID - The ID of the player dispatching these events.
   * @param {string} credentials - A key indicating that the player is authorized to play.
   */


  var createEventDispatchers = createDispatchers.bind(null, 'gameEvent');
  /**
   * createMoveDispatchers
   *
   * Creates a set of dispatchers to make moves.
   * @param {Array} moveNames - A list of move names.
   * @param {object} store - The Redux store to create dispatchers for.
   * @param {string} playerID - The ID of the player dispatching these events.
   * @param {string} credentials - A key indicating that the player is authorized to play.
   */

  var createMoveDispatchers = createDispatchers.bind(null, 'makeMove');
  /**
   * Implementation of Client (see below).
   */

  var _ClientImpl =
  /*#__PURE__*/
  function () {
    function _ClientImpl(_ref) {
      var _this = this;

      var game = _ref.game,
          ai = _ref.ai,
          numPlayers = _ref.numPlayers,
          multiplayer = _ref.multiplayer,
          socketOpts = _ref.socketOpts,
          gameID = _ref.gameID,
          playerID = _ref.playerID,
          credentials = _ref.credentials,
          enhancer = _ref.enhancer;

      _classCallCheck(this, _ClientImpl);

      this.game = game;
      this.playerID = playerID;
      this.gameID = gameID;
      this.credentials = credentials;
      this.multiplayer = multiplayer;

      this.subscribeCallback = function () {};

      this.reducer = CreateGameReducer({
        game: game,
        numPlayers: numPlayers,
        multiplayer: multiplayer
      });

      if (ai !== undefined && multiplayer === undefined) {
        var bot = new ai.bot({
          game: game,
          enumerate: ai.enumerate
        });

        this.step = async function () {
          var state = _this.store.getState();

          var playerID = state.ctx.actionPlayers[0];

          var _ref2 = await bot.play(state, playerID),
              action = _ref2.action,
              metadata = _ref2.metadata;

          if (action) {
            action.payload.metadata = metadata;

            _this.store.dispatch(action);
          }

          return action;
        };
      }

      var initialState = null;

      if (multiplayer === undefined) {
        initialState = InitializeGame({
          game: game,
          numPlayers: numPlayers
        });
      }

      this.reset = function () {
        _this.store.dispatch(reset(initialState));
      };

      this.undo = function () {
        _this.store.dispatch(undo());
      };

      this.redo = function () {
        _this.store.dispatch(redo());
      };

      this.store = null;
      this.log = [];
      /**
       * Middleware that manages the log object.
       * Reducers generate deltalogs, which are log events
       * that are the result of application of a single action.
       * The master may also send back a deltalog or the entire
       * log depending on the type of request.
       * The middleware below takes care of all these cases while
       * managing the log object.
       */

      var LogMiddleware = function LogMiddleware(store) {
        return function (next) {
          return function (action) {
            var result = next(action);
            var state = store.getState();

            switch (action.type) {
              case MAKE_MOVE:
              case GAME_EVENT:
                {
                  var deltalog = state.deltalog;
                  _this.log = [].concat(_toConsumableArray(_this.log), _toConsumableArray(deltalog));
                  break;
                }

              case RESET:
                {
                  _this.log = [];
                  break;
                }

              case UPDATE:
                {
                  var id = -1;

                  if (_this.log.length > 0) {
                    id = _this.log[_this.log.length - 1]._stateID;
                  }

                  var _deltalog = action.deltalog || []; // Filter out actions that are already present
                  // in the current log. This may occur when the
                  // client adds an entry to the log followed by
                  // the update from the master here.


                  _deltalog = _deltalog.filter(function (l) {
                    return l._stateID > id;
                  });
                  _this.log = [].concat(_toConsumableArray(_this.log), _toConsumableArray(_deltalog));
                  break;
                }

              case SYNC:
                {
                  _this.log = action.log || [];
                  break;
                }
            }

            return result;
          };
        };
      };
      /**
       * Middleware that intercepts actions and sends them to the master,
       * which keeps the authoritative version of the state.
       */


      var TransportMiddleware = function TransportMiddleware(store) {
        return function (next) {
          return function (action) {
            var baseState = store.getState();
            var result = next(action);

            if (action.clientOnly != true) {
              _this.transport.onAction(baseState, action);
            }

            return result;
          };
        };
      };
      /**
       * Middleware that intercepts actions and invokes the subscription callback.
       */


      var SubscriptionMiddleware = function SubscriptionMiddleware() {
        return function (next) {
          return function (action) {
            var result = next(action);

            _this.subscribeCallback();

            return result;
          };
        };
      };

      if (enhancer !== undefined) {
        enhancer = redux.compose(redux.applyMiddleware(SubscriptionMiddleware, TransportMiddleware, LogMiddleware), enhancer);
      } else {
        enhancer = redux.applyMiddleware(SubscriptionMiddleware, TransportMiddleware, LogMiddleware);
      }

      this.store = redux.createStore(this.reducer, initialState, enhancer);
      this.transport = {
        isConnected: true,
        onAction: function onAction() {},
        subscribe: function subscribe() {},
        connect: function connect() {},
        updateGameID: function updateGameID() {},
        updatePlayerID: function updatePlayerID() {}
      };

      if (multiplayer !== undefined) {
        if (multiplayer === true) {
          multiplayer = {
            server: ''
          };
        }

        if (multiplayer.local === true) {
          if (localMaster_ === null || localMaster_.game !== game) {
            localMaster_ = new LocalMaster(game);
          }

          this.transport = new Local({
            master: localMaster_,
            store: this.store,
            gameID: gameID,
            playerID: playerID,
            gameName: game.name,
            numPlayers: numPlayers
          });
        } else if (multiplayer.server !== undefined) {
          this.transport = new SocketIO({
            store: this.store,
            gameID: gameID,
            playerID: playerID,
            gameName: game.name,
            numPlayers: numPlayers,
            server: multiplayer.server,
            socketOpts: socketOpts
          });
        } else if (multiplayer.transport !== undefined) {
          this.transport = new multiplayer.transport({
            store: this.store,
            gameID: gameID,
            playerID: playerID,
            gameName: game.name,
            numPlayers: numPlayers
          });
        } else {
          error('invalid multiplayer spec');
        }
      }

      this.createDispatchers();
    }

    _createClass(_ClientImpl, [{
      key: "subscribe",
      value: function subscribe(fn) {
        var _this2 = this;

        var callback = function callback() {
          return fn(_this2.getState());
        };

        this.transport.subscribe(callback);
        this.subscribeCallback = callback;
      }
    }, {
      key: "getState",
      value: function getState() {
        var state = this.store.getState(); // This is the state before a sync with the game master.

        if (state === null) {
          return state;
        } // isActive.


        var isActive = true;
        var canPlayerMakeMove = this.game.flow.canPlayerMakeMove(state.G, state.ctx, this.playerID);

        if (this.multiplayer && !canPlayerMakeMove) {
          isActive = false;
        }

        if (!this.multiplayer && this.playerID !== null && this.playerID !== undefined && !canPlayerMakeMove) {
          isActive = false;
        }

        if (state.ctx.gameover !== undefined) {
          isActive = false;
        } // Secrets are normally stripped on the server,
        // but we also strip them here so that game developers
        // can see their effects while prototyping.


        var G = this.game.playerView(state.G, state.ctx, this.playerID); // Combine into return value.

        var ret = _objectSpread({}, state, {
          isActive: isActive,
          G: G,
          log: this.log
        });

        var isConnected = this.transport.isConnected;
        ret = _objectSpread({}, ret, {
          isConnected: isConnected
        });
        return ret;
      }
    }, {
      key: "connect",
      value: function connect() {
        this.transport.connect();
      }
    }, {
      key: "createDispatchers",
      value: function createDispatchers() {
        this.moves = createMoveDispatchers(this.game.moveNames, this.store, this.playerID, this.credentials, this.multiplayer);
        this.events = createEventDispatchers(this.game.flow.enabledEventNames, this.store, this.playerID, this.credentials, this.multiplayer);
      }
    }, {
      key: "updatePlayerID",
      value: function updatePlayerID(playerID) {
        this.playerID = playerID;
        this.createDispatchers();
        this.transport.updatePlayerID(playerID);
      }
    }, {
      key: "updateGameID",
      value: function updateGameID(gameID) {
        this.gameID = gameID;
        this.createDispatchers();
        this.transport.updateGameID(gameID);
      }
    }, {
      key: "updateCredentials",
      value: function updateCredentials(credentials) {
        this.credentials = credentials;
        this.createDispatchers();
      }
    }]);

    return _ClientImpl;
  }();
  /**
   * Client
   *
   * boardgame.io JS client.
   *
   * @param {...object} game - The return value of `Game`.
   * @param {...object} numPlayers - The number of players.
   * @param {...object} multiplayer - Set to true or { server: '<host>:<port>' }
   *                                  to make a multiplayer client. The second
   *                                  syntax specifies a non-default socket server.
   * @param {...object} socketOpts - Options to pass to socket.io.
   * @param {...object} gameID - The gameID that you want to connect to.
   * @param {...object} playerID - The playerID associated with this client.
   * @param {...string} credentials - The authentication credentials associated with this client.
   *
   * Returns:
   *   A JS object that provides an API to interact with the
   *   game by dispatching moves and events.
   */


  function Client(opts) {
    return new _ClientImpl(opts);
  }

  /**
   * Client
   *
   * boardgame.io React client.
   *
   * @param {...object} game - The return value of `Game`.
   * @param {...object} numPlayers - The number of players.
   * @param {...object} board - The React component for the game.
   * @param {...object} loading - (optional) The React component for the loading state.
   * @param {...object} multiplayer - Set to true or { server: '<host>:<port>' }
   *                                  to make a multiplayer client. The second
   *                                  syntax specifies a non-default socket server.
   * @param {...object} debug - Enables the Debug UI.
   * @param {...object} enhancer - Optional enhancer to send to the Redux store
   *
   * Returns:
   *   A React component that wraps board and provides an
   *   API through props for it to interact with the framework
   *   and dispatch actions such as MAKE_MOVE, GAME_EVENT, RESET,
   *   UNDO and REDO.
   */

  function Client$1(opts) {
    var _class, _temp;

    var game = opts.game,
        numPlayers = opts.numPlayers,
        loading = opts.loading,
        board = opts.board,
        multiplayer = opts.multiplayer,
        ai = opts.ai,
        debug = opts.debug,
        enhancer = opts.enhancer; // Component that is displayed before the client has synced
    // with the game master.

    if (loading === undefined) {
      var Loading = function Loading() {
        return React.createElement("div", {
          className: "bgio-loading"
        }, "connecting...");
      };

      loading = Loading;
    }
    /*
     * WrappedBoard
     *
     * The main React component that wraps the passed in
     * board component and adds the API to its props.
     */


    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WrappedBoard, _React$Component);

      function WrappedBoard(props) {
        var _this;

        _classCallCheck(this, WrappedBoard);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedBoard).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          gameStateOverride: null
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateGameID", function (gameID) {
          _this.client.updateGameID(gameID);

          _this.gameID = gameID;

          _this.forceUpdate();
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePlayerID", function (playerID) {
          _this.client.updatePlayerID(playerID);

          _this.playerID = playerID;

          _this.forceUpdate();
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCredentials", function (credentials) {
          _this.client.updateCredentials(credentials);

          _this.credentials = credentials;

          _this.forceUpdate();
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "overrideGameState", function (state) {
          _this.setState({
            gameStateOverride: state
          });
        });

        _this.client = Client({
          game: game,
          ai: ai,
          numPlayers: numPlayers,
          multiplayer: multiplayer,
          gameID: props.gameID,
          playerID: props.playerID,
          credentials: props.credentials,
          enhancer: enhancer
        });
        _this.gameID = props.gameID;
        _this.playerID = props.playerID;
        _this.credentials = props.credentials;

        _this.client.subscribe(function () {
          return _this.forceUpdate();
        });

        return _this;
      }

      _createClass(WrappedBoard, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.gameID != prevProps.gameID) {
            this.updateGameID(this.props.gameID);
          }

          if (this.props.playerID != prevProps.playerID) {
            this.updatePlayerID(this.props.playerID);
          }

          if (this.props.credentials != prevProps.credentials) {
            this.updateCredentials(this.props.credentials);
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.client.connect();
        }
      }, {
        key: "render",
        value: function render() {
          var _board = null;
          var _debug = null;
          var state = this.client.getState();

          var _this$props = this.props,
              debugProp = _this$props.debug,
              rest = _objectWithoutProperties(_this$props, ["debug"]);

          if (this.state.gameStateOverride) {
            state = _objectSpread({}, state, this.state.gameStateOverride);
          }

          if (state === null) {
            return React.createElement(loading);
          }

          if (board) {
            _board = React.createElement(board, _objectSpread({}, state, rest, {
              isMultiplayer: multiplayer !== undefined,
              moves: this.client.moves,
              events: this.client.events,
              gameID: this.gameID,
              playerID: this.playerID,
              step: this.client.step,
              reset: this.client.reset,
              undo: this.client.undo,
              redo: this.client.redo
            }));
          }

          if (debug !== false && debugProp) {
            var showGameInfo = _typeof(debug) === 'object' && debug.showGameInfo;
            var dockControls = _typeof(debug) === 'object' && debug.dockControls;
            _debug = React.createElement(Debug, {
              gamestate: state,
              reducer: this.client.reducer,
              store: this.client.store,
              isMultiplayer: multiplayer !== undefined,
              moves: this.client.moves,
              events: this.client.events,
              gameID: this.gameID,
              playerID: this.playerID,
              credentials: this.credentials,
              step: this.client.step,
              reset: this.client.reset,
              undo: this.client.undo,
              redo: this.client.redo,
              visualizeAI: ai && ai.visualize,
              overrideGameState: this.overrideGameState,
              updateGameID: this.updateGameID,
              updatePlayerID: this.updatePlayerID,
              updateCredentials: this.updateCredentials,
              showGameInfo: showGameInfo,
              dockControls: dockControls
            });
          }

          return React.createElement("div", {
            className: "bgio-client"
          }, _debug, _board);
        }
      }]);

      return WrappedBoard;
    }(React.Component), _defineProperty(_class, "propTypes", {
      // The ID of a game to connect to.
      // Only relevant in multiplayer.
      gameID: PropTypes.string,
      // The ID of the player associated with this client.
      // Only relevant in multiplayer.
      playerID: PropTypes.string,
      // This client's authentication credentials.
      // Only relevant in multiplayer.
      credentials: PropTypes.string,
      // Enable / disable the Debug UI.
      debug: PropTypes.any
    }), _defineProperty(_class, "defaultProps", {
      gameID: 'default',
      playerID: null,
      credentials: null,
      debug: true
    }), _temp;
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var _LobbyConnectionImpl =
  /*#__PURE__*/
  function () {
    function _LobbyConnectionImpl(_ref) {
      var server = _ref.server,
          gameComponents = _ref.gameComponents,
          playerName = _ref.playerName,
          playerCredentials = _ref.playerCredentials;

      _classCallCheck(this, _LobbyConnectionImpl);

      this.gameComponents = gameComponents;
      this.playerName = playerName || 'Visitor';
      this.playerCredentials = playerCredentials;
      this.server = server;
      this.rooms = [];
    }

    _createClass(_LobbyConnectionImpl, [{
      key: "_baseUrl",
      value: function _baseUrl() {
        return "".concat(this.server || '', "/games");
      }
    }, {
      key: "refresh",
      value: async function refresh() {
        try {
          this.rooms.length = 0;
          var resp = await fetch(this._baseUrl());

          if (resp.status !== 200) {
            throw new Error('HTTP status ' + resp.status);
          }

          var json = await resp.json();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = json[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var gameName = _step.value;
              if (!this._getGameComponents(gameName)) continue;
              var gameResp = await fetch(this._baseUrl() + '/' + gameName);
              var gameJson = await gameResp.json();
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = gameJson.rooms[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var inst = _step2.value;
                  inst.gameName = gameName;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              this.rooms = this.rooms.concat(gameJson.rooms);
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
        } catch (error) {
          throw new Error('failed to retrieve list of games (' + error + ')');
        }
      }
    }, {
      key: "_getGameInstance",
      value: function _getGameInstance(gameID) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.rooms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var inst = _step3.value;
            if (inst['gameID'] === gameID) return inst;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "_getGameComponents",
      value: function _getGameComponents(gameName) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.gameComponents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var comp = _step4.value;
            if (comp.game.name === gameName) return comp;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }, {
      key: "_findPlayer",
      value: function _findPlayer(playerName) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = this.rooms[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var inst = _step5.value;
            if (inst.players.some(function (player) {
              return player.name === playerName;
            })) return inst;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }, {
      key: "join",
      value: async function join(gameName, gameID, playerID) {
        try {
          var inst = this._findPlayer(this.playerName);

          if (inst) {
            throw new Error('player has already joined ' + inst.gameID);
          }

          inst = this._getGameInstance(gameID);

          if (!inst) {
            throw new Error('game instance ' + gameID + ' not found');
          }

          var resp = await fetch(this._baseUrl() + '/' + gameName + '/' + gameID + '/join', {
            method: 'POST',
            body: JSON.stringify({
              playerID: playerID,
              playerName: this.playerName
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (resp.status !== 200) throw new Error('HTTP status ' + resp.status);
          var json = await resp.json();
          inst.players[Number.parseInt(playerID)].name = this.playerName;
          this.playerCredentials = json.playerCredentials;
        } catch (error) {
          throw new Error('failed to join room ' + gameID + ' (' + error + ')');
        }
      }
    }, {
      key: "leave",
      value: async function leave(gameName, gameID) {
        try {
          var inst = this._getGameInstance(gameID);

          if (!inst) throw new Error('game instance not found');
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = inst.players[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var player = _step6.value;

              if (player.name === this.playerName) {
                var resp = await fetch(this._baseUrl() + '/' + gameName + '/' + gameID + '/leave', {
                  method: 'POST',
                  body: JSON.stringify({
                    playerID: player.id,
                    credentials: this.playerCredentials
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

                if (resp.status !== 200) {
                  throw new Error('HTTP status ' + resp.status);
                }

                delete player.name;
                delete this.playerCredentials;
                return;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          throw new Error('player not found in room');
        } catch (error) {
          throw new Error('failed to leave room ' + gameID + ' (' + error + ')');
        }
      }
    }, {
      key: "disconnect",
      value: async function disconnect() {
        var inst = this._findPlayer(this.playerName);

        if (inst) {
          await this.leave(inst.gameName, inst.gameID);
        }

        this.rooms = [];
        this.playerName = 'Visitor';
      }
    }, {
      key: "create",
      value: async function create(gameName, numPlayers) {
        try {
          var comp = this._getGameComponents(gameName);

          if (!comp) throw new Error('game not found');
          if (numPlayers < comp.game.minPlayers || numPlayers > comp.game.maxPlayers) throw new Error('invalid number of players ' + numPlayers);
          var resp = await fetch(this._baseUrl() + '/' + gameName + '/create', {
            method: 'POST',
            body: JSON.stringify({
              numPlayers: numPlayers
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (resp.status !== 200) throw new Error('HTTP status ' + resp.status);
        } catch (error) {
          throw new Error('failed to create room for ' + gameName + ' (' + error + ')');
        }
      }
    }]);

    return _LobbyConnectionImpl;
  }();
  /**
   * LobbyConnection
   *
   * Lobby model.
   *
   * @param {string}   server - '<host>:<port>' of the server.
   * @param {Array}    gameComponents - A map of Board and Game objects for the supported games.
   * @param {string}   playerName - The name of the player.
   * @param {string}   playerCredentials - The credentials currently used by the player, if any.
   *
   * Returns:
   *   A JS object that synchronizes the list of running game instances with the server and provides an API to create/join/start instances.
   */


  function LobbyConnection(opts) {
    return new _LobbyConnectionImpl(opts);
  }

  var LobbyLoginForm =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LobbyLoginForm, _React$Component);

    function LobbyLoginForm() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LobbyLoginForm);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LobbyLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        playerName: _this.props.playerName,
        nameErrorMsg: ''
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickEnter", function () {
        if (_this.state.playerName === '') return;

        _this.props.onEnter(_this.state.playerName);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyPress", function (event) {
        if (event.key === 'Enter') {
          _this.onClickEnter();
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangePlayerName", function (event) {
        var name = event.target.value.trim();

        _this.setState({
          playerName: name,
          nameErrorMsg: name.length > 0 ? '' : 'empty player name'
        });
      });

      return _this;
    }

    _createClass(LobbyLoginForm, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement("p", {
          className: "phase-title"
        }, "Choose a player name:"), React.createElement("input", {
          type: "text",
          value: this.state.playerName,
          onChange: this.onChangePlayerName,
          onKeyPress: this.onKeyPress
        }), React.createElement("span", {
          className: "buttons"
        }, React.createElement("button", {
          className: "buttons",
          onClick: this.onClickEnter
        }, "Enter")), React.createElement("br", null), React.createElement("span", {
          className: "error-msg"
        }, this.state.nameErrorMsg, React.createElement("br", null)));
      }
    }]);

    return LobbyLoginForm;
  }(React.Component);

  _defineProperty(LobbyLoginForm, "propTypes", {
    playerName: PropTypes.string,
    onEnter: PropTypes.func.isRequired
  });

  _defineProperty(LobbyLoginForm, "defaultProps", {
    playerName: ''
  });

  var LobbyRoomInstance =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LobbyRoomInstance, _React$Component);

    function LobbyRoomInstance() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LobbyRoomInstance);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LobbyRoomInstance)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createSeat", function (player) {
        return player.name || '[free]';
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createInstanceButtons", function (inst) {
        var playerSeat = inst.players.find(function (player) {
          return player.name === _this.props.playerName;
        });
        var freeSeat = inst.players.find(function (player) {
          return !player.name;
        });

        if (playerSeat && freeSeat) {
          // already seated: waiting for game to start
          return React.createElement("button", {
            onClick: function onClick() {
              return _this.props.onClickLeave(inst.gameName, inst.gameID);
            }
          }, "Leave");
        }

        if (freeSeat) {
          // at least 1 seat is available
          return React.createElement("button", {
            onClick: function onClick() {
              return _this.props.onClickJoin(inst.gameName, inst.gameID, '' + freeSeat.id);
            }
          }, "Join");
        } // room is full


        if (playerSeat) {
          return React.createElement("button", {
            onClick: function onClick() {
              return _this.props.onClickPlay(inst.gameName, {
                gameID: inst.gameID,
                playerID: '' + playerSeat.id,
                numPlayers: inst.players.length
              });
            }
          }, "Play");
        } // allow spectating


        return React.createElement("button", {
          onClick: function onClick() {
            return _this.props.onClickPlay(inst.gameName, {
              gameID: inst.gameID,
              numPlayers: inst.players.length
            });
          }
        }, "Spectate");
      });

      return _this;
    }

    _createClass(LobbyRoomInstance, [{
      key: "render",
      value: function render() {
        var room = this.props.room;
        var status = 'OPEN';

        if (!room.players.find(function (player) {
          return !player.name;
        })) {
          status = 'RUNNING';
        }

        return React.createElement("tr", {
          key: 'line-' + room.gameID
        }, React.createElement("td", {
          key: 'cell-name-' + room.gameID
        }, room.gameName), React.createElement("td", {
          key: 'cell-status-' + room.gameID
        }, status), React.createElement("td", {
          key: 'cell-seats-' + room.gameID
        }, room.players.map(this._createSeat).join(', ')), React.createElement("td", {
          key: 'cell-buttons-' + room.gameID
        }, this._createInstanceButtons(room)));
      }
    }]);

    return LobbyRoomInstance;
  }(React.Component);

  _defineProperty(LobbyRoomInstance, "propTypes", {
    room: PropTypes.shape({
      gameName: PropTypes.string.isRequired,
      gameID: PropTypes.string.isRequired,
      players: PropTypes.array.isRequired
    }),
    playerName: PropTypes.string.isRequired,
    onClickJoin: PropTypes.func.isRequired,
    onClickLeave: PropTypes.func.isRequired,
    onClickPlay: PropTypes.func.isRequired
  });

  var LobbyCreateRoomForm =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LobbyCreateRoomForm, _React$Component);

    function LobbyCreateRoomForm(props) {
      var _this;

      _classCallCheck(this, LobbyCreateRoomForm);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LobbyCreateRoomForm).call(this, props));
      /* fix min and max number of players */

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        selectedGame: 0,
        numPlayers: 2
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createGameNameOption", function (game, idx) {
        return React.createElement("option", {
          key: 'name-option-' + idx,
          value: idx
        }, game.game.name);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createNumPlayersOption", function (idx) {
        return React.createElement("option", {
          key: 'num-option-' + idx,
          value: idx
        }, idx);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createNumPlayersRange", function (game) {
        return _toConsumableArray(new Array(game.maxPlayers + 1).keys()).slice(game.minPlayers);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeNumPlayers", function (event) {
        _this.setState({
          numPlayers: Number.parseInt(event.target.value)
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeSelectedGame", function (event) {
        var idx = Number.parseInt(event.target.value);

        _this.setState({
          selectedGame: idx,
          numPlayers: _this.props.games[idx].game.minPlayers
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickCreate", function () {
        _this.props.createGame(_this.props.games[_this.state.selectedGame].game.name, _this.state.numPlayers);
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = props.games[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var game = _step.value;
          var game_details = game.game;

          if (!game_details.minPlayers) {
            game_details.minPlayers = 1;
          }

          if (!game_details.maxPlayers) {
            game_details.maxPlayers = 4;
          }

          console.assert(game_details.maxPlayers >= game_details.minPlayers);
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

      _this.state = {
        selectedGame: 0,
        numPlayers: props.games[0].game.minPlayers
      };
      return _this;
    }

    _createClass(LobbyCreateRoomForm, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement("div", null, React.createElement("select", {
          value: this.state.selectedGame,
          onChange: function onChange(evt) {
            return _this2.onChangeSelectedGame(evt);
          }
        }, this.props.games.map(this._createGameNameOption)), React.createElement("span", null, "Players:"), React.createElement("select", {
          value: this.state.numPlayers,
          onChange: this.onChangeNumPlayers
        }, this._createNumPlayersRange(this.props.games[this.state.selectedGame].game).map(this._createNumPlayersOption)), React.createElement("span", {
          className: "buttons"
        }, React.createElement("button", {
          onClick: this.onClickCreate
        }, "Create")));
      }
    }]);

    return LobbyCreateRoomForm;
  }(React.Component);

  _defineProperty(LobbyCreateRoomForm, "propTypes", {
    games: PropTypes.array.isRequired,
    createGame: PropTypes.func.isRequired
  });

  var LobbyPhases = {
    ENTER: 'enter',
    PLAY: 'play',
    LIST: 'list'
  };
  /**
   * Lobby
   *
   * React lobby component.
   *
   * @param {Array}  gameComponents - An array of Board and Game objects for the supported games.
   * @param {string} lobbyServer - Address of the lobby server (for example 'localhost:8000').
   *                               If not set, defaults to the server that served the page.
   * @param {string} gameServer - Address of the game server (for example 'localhost:8001').
   *                              If not set, defaults to the server that served the page.
   * @param {function} clientFactory - Function that is used to create the game clients.
   * @param {bool}   debug - Enable debug information (default: false).
   *
   * Returns:
   *   A React component that provides a UI to create, list, join, leave, play or spectate game instances.
   */

  var Lobby =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Lobby, _React$Component);

    function Lobby(_props) {
      var _this;

      _classCallCheck(this, Lobby);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Lobby).call(this, _props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        phase: LobbyPhases.ENTER,
        playerName: 'Visitor',
        runningGame: null,
        errorMsg: '',
        credentialStore: {}
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createConnection", function (props) {
        var name = _this.state.playerName;
        _this.connection = LobbyConnection({
          server: props.lobbyServer,
          gameComponents: props.gameComponents,
          playerName: name,
          playerCredentials: _this.state.credentialStore[name]
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_updateCredentials", function (playerName, credentials) {
        _this.setState(function (prevState) {
          // clone store or componentDidUpdate will not be triggered
          var store = Object.assign({}, prevState.credentialStore);
          store[[playerName]] = credentials;
          return {
            credentialStore: store
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_updateConnection", async function () {
        await _this.connection.refresh();

        _this.forceUpdate();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_enterLobby", function (playerName) {
        _this.setState({
          playerName: playerName,
          phase: LobbyPhases.LIST
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_exitLobby", async function () {
        await _this.connection.disconnect();

        _this.setState({
          phase: LobbyPhases.ENTER,
          errorMsg: ''
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_createRoom", async function (gameName, numPlayers) {
        try {
          await _this.connection.create(gameName, numPlayers);
          await _this.connection.refresh(); // rerender

          _this.setState({});
        } catch (error) {
          _this.setState({
            errorMsg: error.message
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_joinRoom", async function (gameName, gameID, playerID) {
        try {
          await _this.connection.join(gameName, gameID, playerID);
          await _this.connection.refresh();

          _this._updateCredentials(_this.connection.playerName, _this.connection.playerCredentials);
        } catch (error) {
          _this.setState({
            errorMsg: error.message
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_leaveRoom", async function (gameName, gameID) {
        try {
          await _this.connection.leave(gameName, gameID);
          await _this.connection.refresh();

          _this._updateCredentials(_this.connection.playerName, _this.connection.playerCredentials);
        } catch (error) {
          _this.setState({
            errorMsg: error.message
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_startGame", function (gameName, gameOpts) {
        var gameCode = _this.connection._getGameComponents(gameName);

        if (!gameCode) {
          _this.setState({
            errorMsg: 'game ' + gameName + ' not supported'
          });

          return;
        }

        var multiplayer = undefined;

        if (gameOpts.numPlayers > 1) {
          if (_this.props.gameServer) {
            multiplayer = {
              server: _this.props.gameServer
            };
          } else {
            multiplayer = true;
          }
        }

        var app = _this.props.clientFactory({
          game: gameCode.game,
          board: gameCode.board,
          debug: _this.props.debug,
          multiplayer: multiplayer
        });

        var game = {
          app: app,
          gameID: gameOpts.gameID,
          playerID: gameOpts.numPlayers > 1 ? gameOpts.playerID : null,
          credentials: _this.connection.playerCredentials
        };

        _this.setState({
          phase: LobbyPhases.PLAY,
          runningGame: game
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_exitRoom", function () {
        _this.setState({
          phase: LobbyPhases.LIST,
          runningGame: null
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getPhaseVisibility", function (phase) {
        return _this.state.phase !== phase ? 'hidden' : 'phase';
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderRooms", function (rooms, playerName) {
        return rooms.map(function (room) {
          var gameID = room.gameID,
              gameName = room.gameName,
              players = room.players;
          return React.createElement(LobbyRoomInstance, {
            key: 'instance-' + gameID,
            room: {
              gameID: gameID,
              gameName: gameName,
              players: Object.values(players)
            },
            playerName: playerName,
            onClickJoin: _this._joinRoom,
            onClickLeave: _this._leaveRoom,
            onClickPlay: _this._startGame
          });
        });
      });

      _this._createConnection(_this.props);

      _this._updateConnection();

      return _this;
    }

    _createClass(Lobby, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var cookie = Cookies.load('lobbyState') || {};

        if (cookie.phase && cookie.phase === LobbyPhases.PLAY) {
          cookie.phase = LobbyPhases.LIST;
        }

        this.setState({
          phase: cookie.phase || LobbyPhases.ENTER,
          playerName: cookie.playerName || 'Visitor',
          credentialStore: cookie.credentialStore || {}
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var name = this.state.playerName;
        var creds = this.state.credentialStore[name];

        if (prevState.phase !== this.state.phase || prevState.credentialStore[name] !== creds || prevState.playerName !== name) {
          this._createConnection(this.props);

          this._updateConnection();

          var cookie = {
            phase: this.state.phase,
            playerName: name,
            credentialStore: this.state.credentialStore
          };
          Cookies.save('lobbyState', cookie, {
            path: '/'
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            gameComponents = _this$props.gameComponents,
            renderer = _this$props.renderer;
        var _this$state = this.state,
            errorMsg = _this$state.errorMsg,
            playerName = _this$state.playerName,
            phase = _this$state.phase,
            runningGame = _this$state.runningGame;

        if (renderer) {
          return renderer({
            errorMsg: errorMsg,
            gameComponents: gameComponents,
            rooms: this.connection.rooms,
            phase: phase,
            playerName: playerName,
            runningGame: runningGame,
            handleEnterLobby: this._enterLobby,
            handleExitLobby: this._exitLobby,
            handleCreateRoom: this._createRoom,
            handleJoinRoom: this._joinRoom,
            handleLeaveRoom: this._leaveRoom,
            handleExitRoom: this._exitRoom,
            handleRefreshRooms: this._updateConnection,
            handleStartGame: this._startGame
          });
        }

        return React.createElement("div", {
          id: "lobby-view",
          style: {
            padding: 50
          }
        }, React.createElement("div", {
          className: this._getPhaseVisibility(LobbyPhases.ENTER)
        }, React.createElement(LobbyLoginForm, {
          key: playerName,
          playerName: playerName,
          onEnter: this._enterLobby
        })), React.createElement("div", {
          className: this._getPhaseVisibility(LobbyPhases.LIST)
        }, React.createElement("p", null, "Welcome, ", playerName), React.createElement("div", {
          className: "phase-title",
          id: "game-creation"
        }, React.createElement("span", null, "Create a room:"), React.createElement(LobbyCreateRoomForm, {
          games: gameComponents,
          createGame: this._createRoom
        })), React.createElement("p", {
          className: "phase-title"
        }, "Join a room:"), React.createElement("div", {
          id: "instances"
        }, React.createElement("table", null, React.createElement("tbody", null, this.renderRooms(this.connection.rooms, playerName))), React.createElement("span", {
          className: "error-msg"
        }, errorMsg, React.createElement("br", null))), React.createElement("p", {
          className: "phase-title"
        }, "Rooms that become empty are automatically deleted.")), React.createElement("div", {
          className: this._getPhaseVisibility(LobbyPhases.PLAY)
        }, runningGame && React.createElement(runningGame.app, {
          gameID: runningGame.gameID,
          playerID: runningGame.playerID,
          credentials: runningGame.credentials
        }), React.createElement("div", {
          className: "buttons",
          id: "game-exit"
        }, React.createElement("button", {
          onClick: this._exitRoom
        }, "Exit game"))), React.createElement("div", {
          className: "buttons",
          id: "lobby-exit"
        }, React.createElement("button", {
          onClick: this._exitLobby
        }, "Exit lobby")));
      }
    }]);

    return Lobby;
  }(React.Component);

  _defineProperty(Lobby, "propTypes", {
    gameComponents: PropTypes.array.isRequired,
    lobbyServer: PropTypes.string,
    gameServer: PropTypes.string,
    debug: PropTypes.bool,
    clientFactory: PropTypes.func
  });

  _defineProperty(Lobby, "defaultProps", {
    debug: false,
    clientFactory: Client$1
  });

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  exports.Client = Client$1;
  exports.Lobby = Lobby;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/dist/ui.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/dist/ui.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js"), __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/src/Tween.js"), __webpack_require__(/*! react-dragtastic */ "./node_modules/react-dragtastic/build/index.es.js")) :
  undefined;
}(this, function (exports, React, PropTypes, THREE, TWEEN, reactDragtastic) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  TWEEN = TWEEN && TWEEN.hasOwnProperty('default') ? TWEEN['default'] : TWEEN;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var UIContext = React.createContext();

  /**
   * Root element of the React based 2D UI framework.
   */

  var UI =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(UI, _React$Component);

    function UI(props) {
      var _this;

      _classCallCheck(this, UI);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UI).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContext", function () {
        return {
          genID: function genID() {
            return _this._nextID++;
          }
        };
      });

      _this._nextID = 1;
      return _this;
    }

    _createClass(UI, [{
      key: "render",
      value: function render() {
        return React.createElement(UIContext.Provider, {
          value: this.getContext()
        }, React.createElement("div", {
          className: "bgio-ui"
        }, this.props.children));
      }
    }]);

    return UI;
  }(React.Component);

  _defineProperty(UI, "propTypes", {
    children: PropTypes.any
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".loader {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
  styleInject(css);

  /**
   * Root element of the React/threejs based 3D UI framework.
   */

  var UI$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(UI, _React$Component);

    function UI(props) {
      var _this;

      _classCallCheck(this, UI);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UI).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animate", function () {
        requestAnimationFrame(_this.animate);
        TWEEN.update();

        _this.renderer.render(_this.scene, _this.camera);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "add", function (obj, callback) {
        _this.childGroup.add(obj);

        if (callback !== undefined) {
          _this.callbacks_[obj.id] = callback;
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerCallback", function (obj, callback) {
        if (obj && callback) {
          _this.callbacks_[obj.id] = callback;
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContext", function () {
        return {
          three: true,
          add: _this.add,
          remove: function remove(obj) {
            return _this.scene.remove(obj);
          },
          scene: _this.scene,
          camera: _this.camera,
          regCall: _this.registerCallback
        };
      });

      _this.state = {
        isLoading: false
      };
      /**
       * Set of callbacks that children of this element pass via context.subscribeToMouseEvents
       * in order to receive mouse events that pertain to the objects that they manage.
       * @private
       */

      _this.callbacks_ = {};
      /**
       * Reference to the root div element.
       * @private
       */

      _this.ref_ = React.createRef(); // Set up scene.

      _this.scene = new THREE.Scene();
      _this.scene.background = new THREE.Color(0xffffff); // Set up renderer.

      _this.renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      _this.renderer.shadowMap.enabled = true;
      _this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      _this.renderer.setSize(_this.props.width, _this.props.height); // Set up camera.


      _this.camera = new THREE.PerspectiveCamera(45, _this.props.width / _this.props.height, 0.1, 1000);
      _this.camera.position.z = 7;
      _this.camera.position.y = 10;

      _this.camera.lookAt(new THREE.Vector3());

      _this.scene.add(_this.camera); // Set up lights.


      var ambientLight = new THREE.AmbientLight(0xffffff, 0.7);

      _this.scene.add(ambientLight);

      var light = new THREE.DirectionalLight(0x555555);
      light.position.y = 50;
      light.shadow.camera.left = -10;
      light.shadow.camera.bottom = -10;
      light.shadow.camera.right = 10;
      light.shadow.camera.top = 10;
      light.castShadow = true;

      _this.scene.add(light); // Set up ground.


      var geometry = new THREE.PlaneBufferGeometry(100, 100);
      var material = new THREE.MeshLambertMaterial({
        color: 0xffffff
      });
      var plane = new THREE.Mesh(geometry, material);
      plane.receiveShadow = true;
      plane.lookAt(plane.up);
      plane.position.y = -0.01;
      _this.plane = plane;

      _this.scene.add(plane);

      var helper = new THREE.GridHelper(2000, 2000);
      helper.material.opacity = 0.1;
      helper.material.transparent = true;

      _this.scene.add(helper);

      _this.childGroup = new THREE.Group();

      _this.scene.add(_this.childGroup); // set up loading screen


      _this.loader = React.createElement("div", {
        className: "loader"
      });

      THREE.DefaultLoadingManager.onStart = function () {
        _this.setState({
          isLoading: true
        });

        _this.ref_.current.removeChild(_this.renderer.domElement);

        console.log('Started loading file');
      };

      THREE.DefaultLoadingManager.onLoad = function () {
        _this.setState({
          isLoading: false
        });

        _this.ref_.current.appendChild(_this.renderer.domElement);

        console.log('Loading Complete!');
      };

      THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
        console.log('Loading file: ' + url + '\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
      };

      THREE.DefaultLoadingManager.onError = function (url) {
        console.log('There was an error loading: ' + url);
      };

      return _this;
    }

    _createClass(UI, [{
      key: "setupMouseEvents",
      value: function setupMouseEvents() {
        var _this2 = this;

        // List of objects currently being dragged.
        var dragging_ = []; // The 2D viewport co-ordinates of the mouse.

        var mouse = new THREE.Vector2(); // Raycaster that's used to calculate objects that the
        // mouse intersects.

        this.raycaster = new THREE.Raycaster();

        var getClickType = function getClickType(e) {
          if (e.which !== undefined) {
            switch (e.which) {
              case 1:
                return 'leftclick';

              case 2:
                return 'middleclick';

              case 3:
                return 'rightclick';
            }
          }

          if (e.button !== undefined) {
            switch (e.button) {
              case 0:
                return 'leftclick';

              case 1:
                return 'middleclick';

              case 2:
                return 'rightclick';
            }
          }
        };

        var dispatchMouseCallbacks = function dispatchMouseCallbacks(e, objects) {
          if (objects === undefined) {
            _this2.raycaster.setFromCamera(mouse, _this2.camera);

            objects = _this2.raycaster.intersectObjects(_this2.childGroup.children, true);
          }

          if (_this2.props.onMouseEvent) {
            _this2.props.onMouseEvent(e, objects);
          } // only intersect the nearest object.


          var obj = objects[0];

          if (obj) {
            e.point = obj.point;

            var current = _this2.childGroup.getObjectById(obj.object.id); // check parents until we hit a callback or hit the top level.


            while (current && current.parent && current.id != _this2.childGroup.id) {
              if (current.id in _this2.callbacks_) {
                _this2.callbacks_[current.id](e);

                break;
              }

              current = current.parent;
            }
          }
        };

        var onMouseDown = function onMouseDown(e) {
          var type = getClickType(e);

          _this2.raycaster.setFromCamera(mouse, _this2.camera);

          var objects = _this2.raycaster.intersectObjects(_this2.childGroup.children, true);

          if (type == 'leftclick') {
            dragging_ = objects.filter(function (obj) {
              return obj.object.userData.draggable && obj.object.userData.responsive;
            });
          } else {
            e = _objectSpread({}, e, {
              type: type
            });
          }

          dispatchMouseCallbacks(e, objects);

          if (dragging_.length > 0) {
            dragging_ = [dragging_[0]];
            dispatchMouseCallbacks(_objectSpread({}, e, {
              type: 'dragStart'
            }), dragging_);
          }
        };

        var onMouseUp = function onMouseUp(e) {
          _this2.raycaster.setFromCamera(mouse, _this2.camera);

          var objects = _this2.raycaster.intersectObjects(_this2.childGroup.children, true);

          dispatchMouseCallbacks(e, objects);

          if (dragging_.length > 0) {
            var droppable = objects.filter(function (obj) {
              return obj.object.userData.droppable && obj.object.userData.responsive;
            });

            if (droppable.length > 0) {
              var what = dragging_.map(function (o) {
                return o.object;
              });
              dispatchMouseCallbacks(_objectSpread({}, e, {
                type: 'drop',
                what: what
              }), droppable);
            }

            dispatchMouseCallbacks(_objectSpread({}, e, {
              type: 'dragEnd'
            }), dragging_);
            dragging_ = [];
          }
        };

        var onMouseMove = function onMouseMove(e) {
          var x = e.clientX;
          var y = e.clientY;
          var el = document.getElementById('bgio-canvas');
          var t = el;

          while (t) {
            if (t.offsetLeft) x -= t.offsetLeft;
            if (t.offsetTop) y -= t.offsetTop;
            t = t.offsetParent;
          }

          t = el;

          while (t) {
            if (t.scrollLeft) x += t.scrollLeft;
            if (t.scrollTop) y += t.scrollTop;
            t = t.parentNode;
          }

          mouse.x = x / _this2.props.width * 2 - 1;
          mouse.y = -(y / _this2.props.height) * 2 + 1;
          dispatchMouseCallbacks(e);

          _this2.raycaster.setFromCamera(mouse, _this2.camera);

          var r = _this2.raycaster.intersectObject(_this2.plane);

          if (r.length > 0) {
            var _e = _objectSpread({}, _e, {
              type: 'drag'
            });

            dragging_.forEach(function (obj) {
              _e.point = r[0].point;

              if (obj.object.id in _this2.callbacks_) {
                _this2.callbacks_[obj.object.id](_e);
              }

              if (obj.object.parent.id in _this2.callbacks_) {
                _this2.callbacks_[obj.object.parent.id](_e);
              }
            });
          }
        };

        var onMouseWheel = function onMouseWheel(e) {
          dispatchMouseCallbacks(e);

          if (e.defaultPrevented) {
            return;
          }

          if (e.wheelDelta > 0) {
            _this2.camera.zoom += 0.5;

            _this2.camera.updateProjectionMatrix();
          } else if (_this2.camera.zoom > 0.5) {
            _this2.camera.zoom -= 0.5;

            _this2.camera.updateProjectionMatrix();
          }

          e.preventDefault();
        };

        var root = this.ref_.current;
        root.addEventListener('mousemove', onMouseMove);
        root.addEventListener('wheel', onMouseWheel);
        root.addEventListener('mousedown', onMouseDown);
        root.addEventListener('mouseup', onMouseUp);
        root.addEventListener('click', dispatchMouseCallbacks);
        root.addEventListener('contextmenu', function (e) {
          return e.preventDefault();
        });
      }
    }, {
      key: "_initCanvas",
      value: function _initCanvas() {
        this.renderer.domElement.id = 'bgio-canvas';
        this.ref_.current.appendChild(this.renderer.domElement);
        this.setupMouseEvents();
        this.animate();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this._initCanvas();
      }
    }, {
      key: "render",
      value: function render() {
        var children = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, {
            three: true
          });
        });
        return React.createElement(UIContext.Provider, {
          value: this.getContext()
        }, React.createElement("div", {
          className: "bgio-ui",
          ref: this.ref_
        }, this.state.isLoading ? this.loader : children));
      }
    }]);

    return UI;
  }(React.Component);

  _defineProperty(UI$1, "propTypes", {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.any,
    onMouseEvent: PropTypes.func
  });

  _defineProperty(UI$1, "defaultProps", {
    width: 1024,
    height: 768
  });

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  /**
   * Root component of the UI framework.
   */

  var UI$2 = function UI$$1(props) {
    return props.three ? React.createElement(UI$1, props, props.children) : React.createElement(UI, props, props.children);
  };
  UI$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  var Logo = function Logo(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement("svg", {
      width: width || 128,
      height: height || 128,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 128 128"
    }, React.createElement("path", {
      d: "M64,120.37,15.27,92.28V35.91L64,7.82l48.73,28.09V92.28Z",
      fill: "#373748"
    }), React.createElement("path", {
      fill: "#000",
      d: "M64,124,12,94V34L64,4l52,30V94ZM18.33,90.37,64,116.74l45.67-26.37V37.63L64,11.26,18.33,37.63Z"
    }), React.createElement("path", {
      d: "M81.77,43.17c5.92,0,10.51,1.72,13.57,5.16,3.25,3.44,4.77,8.41,4.77,14.71q0,10.32-5.15,16.06c-3.44,3.82-8.22,5.73-14.53,5.73-5.92,0-10.51-1.72-13.56-5.35-3.25-3.63-4.78-8.6-4.78-15.29s1.72-12,5.16-15.67S75.46,43.17,81.77,43.17Zm-.57,5.16c-4.4,0-7.45,1.15-9.56,3.63s-3,6.31-3,11.66c0,5.73,1,9.74,3,12.42,2.11,2.48,5.16,3.82,9.56,3.82s7.64-1.34,9.74-3.82,3.25-6.5,3.25-11.85c0-5.54-1.15-9.55-3.25-12C88.65,49.48,85.59,48.33,81.2,48.33Z",
      fill: "#fff"
    }), React.createElement("path", {
      d: "M39.35,71.45l.19,12.8H33.43L33.62,72l-.19-28.48h6.11l-.19,27.9Z",
      fill: "#fff"
    }));
  };

  Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
  };

  var css$1 = "/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.bgio-card {\n  display: flex;\n  user-select: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 18px;\n  color: #ababab;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 6px;\n  border: 1px solid #cdcdcd;\n  width: 100px;\n  height: 140px;\n  overflow: hidden;\n  transition: transform 0.1s;\n}\n\n.bgio-card.placeholder {\n  cursor: default;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.bgio-card.accept {\n  transform: rotate(10deg);\n  box-shadow: 5px 5px 5px #ddd;\n}\n\n.bgio-card.reject {\n}\n\n.bgio-card__front,\n.bgio-card__back {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.bgio-card__back {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ababab' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  background-position: 2px 2px;\n  outline: 8px solid #eee;\n  outline-offset: -20px;\n}\n";
  styleInject(css$1);

  function GetDraggable(props, classNames, cardStyle, onClick) {
    /* eslint-disable-next-line react/display-name */
    return function (_ref) {
      var isActive = _ref.isActive,
          events = _ref.events;
      return React.createElement("div", _extends({
        className: classNames.join(' '),
        style: _objectSpread({}, props.style, cardStyle, {
          opacity: isActive ? 0 : 1,
          pointerEvents: isActive ? 'none' : 'all'
        }),
        onClick: onClick
      }, events), props.isFaceUp ? props.front : props.back);
    };
  }
  function GetDragComponent(props, classNames, ref, isOverAcceptedCallback) {
    /* eslint-disable-next-line react/display-name, react/prop-types */
    return function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          isOverAccepted = _ref2.isOverAccepted,
          currentlyHoveredDroppableId = _ref2.currentlyHoveredDroppableId;

      var classes = _toConsumableArray(classNames);
      /* eslint-disable-next-line react/prop-types */


      var content = props.back;
      isOverAcceptedCallback(isOverAccepted);
      /* eslint-disable-next-line react/prop-types */

      if (props.isFaceUp) {
        /* eslint-disable-next-line react/prop-types */
        content = props.front;
      }

      if (currentlyHoveredDroppableId !== null) {
        if (isOverAccepted) {
          classes.push('accept');
        } else {
          classes.push('reject');
        }
      }

      return React.createElement("div", {
        className: classes.join(' '),
        ref: ref,
        style: {
          cursor: 'pointer',
          borderWidth: 2,
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 2000000000,
          boxShadow: '5px 5px 5px #eee',
          left: x - 50,
          top: y - 70
        }
      }, content);
    };
  }
  /* eslint-enable */

  var CardImpl =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CardImpl, _React$Component);

    function CardImpl(props) {
      var _this;

      _classCallCheck(this, CardImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CardImpl).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
        _this.props.onClick(_this.props.data);
      });

      _this.id = props.context.genID();
      _this.dragComponentRef = React.createRef();
      _this.isOverAccepted = false;
      return _this;
    }

    _createClass(CardImpl, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var classNames = ['bgio-card'];

        if (this.props.className) {
          classNames.push(this.props.className);
        }

        var cardStyle = {};

        if (this.props.inDeck) {
          cardStyle = {
            position: 'absolute',
            zIndex: this.props.deckPosition
          };
        }

        return React.createElement("div", null, React.createElement(reactDragtastic.Draggable, {
          id: this.id,
          type: this.props.dragZone,
          data: this.props.data
        }, GetDraggable(this.props, classNames, cardStyle, this.onClick)), React.createElement(reactDragtastic.DragComponent, {
          for: this.id
        }, GetDragComponent(this.props, classNames, this.dragComponentRef, function (o) {
          return _this2.isOverAccepted = o;
        })));
      }
    }]);

    return CardImpl;
  }(React.Component);

  _defineProperty(CardImpl, "propTypes", {
    isFaceUp: PropTypes.bool,
    front: PropTypes.node,
    back: PropTypes.node,
    className: PropTypes.string,
    dragZone: PropTypes.string,
    style: PropTypes.any,
    onClick: PropTypes.func,
    context: PropTypes.any.isRequired,
    inDeck: PropTypes.bool,
    data: PropTypes.any,
    deckPosition: PropTypes.number
  });

  _defineProperty(CardImpl, "defaultProps", {
    onClick: function onClick() {},
    isFaceUp: false,
    dragZone: 'bgio-card',
    front: React.createElement("div", {
      className: "bgio-card__front"
    }, "Card"),
    back: React.createElement("div", {
      className: "bgio-card__back"
    }, React.createElement(Logo, {
      width: "48"
    }))
  });

  var Card = function Card(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(CardImpl, _extends({}, props, {
        context: context
      }));
    });
  };

  var CardImpl$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CardImpl, _React$Component);

    function CardImpl(props) {
      var _this;

      _classCallCheck(this, CardImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CardImpl).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEvent", function (e) {
        if (!_this.props.responsive) {
          return;
        }

        if (e.type == 'dragStart') {
          _this.obj.castShadow = true;
          new TWEEN.Tween(_this.obj.position).to({
            y: _this.originalY + 0.5
          }, 100).easing(TWEEN.Easing.Quadratic.Out).start();
        }

        if (e.type == 'dragEnd') {
          new TWEEN.Tween(_this.obj.position).to({
            y: _this.originalY
          }, 100).onComplete(function () {
            return _this.obj.castShadow = false;
          }).start();
        }

        if (e.type == 'drag') {
          _this.obj.position.x = e.point.x;
          _this.obj.position.z = e.point.z;
        }
      });

      _this.originalY = props.thickness / 2 - 0.0001;
      var geometry = new THREE.BoxGeometry(props.width, props.thickness, props.height);
      var opts = {
        color: 0x777777
      };

      if (props.image) {
        opts = {
          map: new THREE.TextureLoader().load(props.image)
        };
      }

      var material = new THREE.MeshLambertMaterial(opts);
      _this.obj = new THREE.Mesh(geometry, material);
      _this.obj.receiveShadow = true;
      _this.obj.position.y = _this.originalY;
      _this.obj.userData.draggable = props.draggable;
      _this.obj.userData.responsive = props.responsive;
      return _this;
    }

    _createClass(CardImpl, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.context.add(this.obj, this.onEvent);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.context.remove(this.obj);
      }
    }, {
      key: "render",
      value: function render() {
        this.obj.position.x = this.props.x + this.props.splayX;
        this.obj.position.z = this.props.z + this.props.splayZ;
        this.obj.position.y = this.originalY + this.props.splayY;
        return null;
      }
    }]);

    return CardImpl;
  }(React.Component);

  _defineProperty(CardImpl$1, "propTypes", {
    context: PropTypes.any.isRequired,
    image: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    thickness: PropTypes.number,
    responsive: PropTypes.bool,
    draggable: PropTypes.bool,
    x: PropTypes.number,
    z: PropTypes.number,
    splayX: PropTypes.number,
    splayY: PropTypes.number,
    splayZ: PropTypes.number
  });

  _defineProperty(CardImpl$1, "defaultProps", {
    responsive: true,
    draggable: true,
    splayX: 0,
    splayY: 0,
    splayZ: 0,
    x: 0,
    z: 0,
    width: 1,
    height: 1.5,
    thickness: 0.01
  });

  var Card$1 = function Card(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(CardImpl$1, _extends({}, props, {
        context: context
      }));
    });
  };

  var Card$2 = function Card$$1(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return context.three ? React.createElement(Card$1, _extends({}, props, {
        context: context
      })) : React.createElement(Card, _extends({}, props, {
        context: context
      }));
    });
  };
  Card$2.propTypes = {
    children: PropTypes.any
  };

  var css$2 = "/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.bgio-deck {\n  border: 1px dashed #ddd;\n  position: relative;\n  display: inline-flex;\n  border-radius: 6px;\n  padding: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-right: 20px;\n  width: 100px;\n  height: 140px;\n}\n";
  styleInject(css$2);

  var DeckImpl =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DeckImpl, _React$Component);

    function DeckImpl(props) {
      var _this;

      _classCallCheck(this, DeckImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DeckImpl).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
        var cards = React.Children.toArray(_this.props.children);
        var topCardProps = null;

        if (cards.length > 0) {
          topCardProps = cards[cards.length - 1].props;

          _this.props.onClick(topCardProps.data);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (cardData) {
        // Don't fire onDrop if the top card of this deck was
        // dragged away and then dropped back.
        var isChild = false;
        React.Children.forEach(_this.props.children, function (card) {
          if (cardData !== undefined && card.props.data === cardData) {
            isChild = true;
          }
        });

        if (!isChild) {
          _this.props.onDrop(cardData);
        }
      });

      _this.id = props.context.genID();
      return _this;
    }

    _createClass(DeckImpl, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var cardIndex = 0;
        var cards = React.Children.map(this.props.children, function (card) {
          return React.cloneElement(card, {
            dragZone: _this2.props.dragZone,
            inDeck: true,
            deckPosition: cardIndex++
          });
        });
        return React.createElement("div", {
          onClick: this.onClick
        }, React.createElement(reactDragtastic.Droppable, {
          accepts: this.props.dragZone,
          onDrop: this.onDrop
        }, function (_ref) {
          var events = _ref.events;
          return React.createElement("div", _extends({}, events, {
            className: _this2.props.className,
            style: {
              background: '#eee',
              marginRight: 20,
              padding: _this2.props.padding,
              position: 'relative',
              width: '100px',
              height: '140px',
              display: 'block',
              float: 'left'
            }
          }), cards);
        }));
      }
    }]);

    return DeckImpl;
  }(React.Component);

  _defineProperty(DeckImpl, "propTypes", {
    context: PropTypes.any,
    children: PropTypes.any,
    onClick: PropTypes.func,
    onDrop: PropTypes.func,
    splayWidth: PropTypes.number,
    dragZone: PropTypes.string,
    padding: PropTypes.number,
    className: PropTypes.string
  });

  _defineProperty(DeckImpl, "defaultProps", {
    padding: 10,
    splayWidth: 3,
    dragZone: 'bgio-card',
    onDrop: function onDrop() {},
    onClick: function onClick() {}
  });

  var Deck = function Deck(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(DeckImpl, _extends({}, props, {
        context: context
      }));
    });
  };

  var DeckImpl$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DeckImpl, _React$Component);

    function DeckImpl(props) {
      var _this;

      _classCallCheck(this, DeckImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DeckImpl).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        isHighlighted: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEvent", function (e) {
        if (e.type == 'drop') {
          e.what[0].position.x = -2;
          e.what[0].position.z = 0;
          e.what[0].position.y += 20 * 0.02;
        }
      });

      _this.originalY = props.thickness / 2 - 0.0001;
      var geometry = new THREE.BoxGeometry(props.width, props.thickness, props.height);
      var material = new THREE.MeshLambertMaterial({
        color: 0xcccccc
      });
      _this.obj = new THREE.Mesh(geometry, material);
      _this.obj.userData.droppable = true;
      _this.obj.userData.responsive = true;
      _this.obj.position.y = _this.originalY;
      return _this;
    }

    _createClass(DeckImpl, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.context.add(this.obj, this.onEvent);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.context.remove(this.obj);
      }
    }, {
      key: "render",
      value: function render() {
        this.obj.position.x = -2;
        var cards = [];

        for (var i = 0; i < 20; i++) {
          cards.push(React.createElement(Card$1, {
            key: i,
            responsive: false,
            x: -2,
            splayY: i * 0.02
          }));
        }

        return cards;
      }
    }]);

    return DeckImpl;
  }(React.Component);

  _defineProperty(DeckImpl$1, "propTypes", {
    context: PropTypes.any.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    thickness: PropTypes.number
  });

  _defineProperty(DeckImpl$1, "defaultProps", {
    width: 1,
    height: 1.5,
    thickness: 0.01
  });

  var Deck$1 = function Deck(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(DeckImpl$1, _extends({}, props, {
        context: context
      }));
    });
  };

  var Deck$2 = function Deck$$1(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return context.three ? React.createElement(Deck$1, _extends({}, props, {
        context: context
      })) : React.createElement(Deck, _extends({}, props, {
        context: context
      }));
    });
  };
  Deck$2.propTypes = {
    children: PropTypes.any
  };

  /**
   * Grid
   *
   * Component that will show children on a cartesian regular grid.
   *
   * Props:
   *   rows       - Number of rows (height) of the grid.
   *   cols       - Number of columns (width) of the grid.
   *   style      - CSS style of the Grid HTML element.
   *   colorMap   - A map from 'x,y' => color.
   *   onClick    - (x, y) => {}
   *                Called when a square is clicked.
   *   onMouseOver    - (x, y) => {}
   *                Called when a square is mouse over.
   *   onMouseOut    - (x, y) => {}
   *                Called when a square is mouse out.
   *
   * Usage:
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2}/>
   * </Grid>
   */

  var Grid =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Grid);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Grid)).call.apply(_getPrototypeOf2, [this].concat(_args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_svgRef", React.createRef());

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (args) {
        if (_this.props.onClick) {
          _this.props.onClick(args);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOver", function (args) {
        if (_this.props.onMouseOver) {
          _this.props.onMouseOver(args);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function (args) {
        if (_this.props.onMouseOut) {
          _this.props.onMouseOut(args);
        }
      });

      return _this;
    }

    _createClass(Grid, [{
      key: "_getCellColor",
      value: function _getCellColor(x, y) {
        var key = "".concat(x, ",").concat(y);
        var color = 'white';

        if (key in this.props.colorMap) {
          color = this.props.colorMap[key];
        }

        return color;
      }
    }, {
      key: "_getGrid",
      value: function _getGrid() {
        if (!this.props.outline) {
          return null;
        }

        var squares = [];

        for (var x = 0; x < this.props.cols; x++) {
          for (var y = 0; y < this.props.rows; y++) {
            squares.push(React.createElement(Square, {
              key: this.props.cols * y + x,
              style: {
                fill: this._getCellColor(x, y)
              },
              x: x,
              y: y,
              size: this.props.cellSize,
              onClick: this.onClick,
              onMouseOver: this.onMouseOver,
              onMouseOut: this.onMouseOut
            }));
          }
        }

        return squares;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var tokens = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, {
            template: Square,
            // Overwrites Token's onClick, onMouseOver, onMouseOut
            onClick: _this2.onClick,
            onMouseOver: _this2.onMouseOver,
            onMouseOut: _this2.onMouseOut,
            svgRef: _this2._svgRef
          });
        });
        return React.createElement("svg", {
          ref: this._svgRef,
          viewBox: '0 0 ' + this.props.cols + ' ' + this.props.rows,
          style: this.props.style
        }, React.createElement("g", null, this._getGrid()), tokens);
      }
    }]);

    return Grid;
  }(React.Component);
  /**
   * Square
   *
   * Component that renders a square inside a Grid.
   *
   * Props:
   *   x       - X coordinate on grid coordinates.
   *   y       - Y coordinate on grid coordinates.
   *   size    - Square size.
   *   style   - Custom styling.
   *   onClick - Invoked when a Square is clicked.
   *   onMouseOver - Invoked when a Square is mouse over.
   *   onMouseOut - Invoked when a Square is mouse out.
   *   eventListeners - Array of objects with name and callback
   *   for DOM events.
   *
   * Not meant to be used by the end user directly (use Token).
   * Also not exposed in the NPM.
   */

  _defineProperty(Grid, "propTypes", {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    outline: PropTypes.bool,
    style: PropTypes.object,
    colorMap: PropTypes.object,
    cellSize: PropTypes.number,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
  });

  _defineProperty(Grid, "defaultProps", {
    colorMap: {},
    outline: true,
    cellSize: 1
  });

  var Square =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Square, _React$Component2);

    function Square() {
      var _getPrototypeOf3;

      var _this3;

      _classCallCheck(this, Square);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Square)).call.apply(_getPrototypeOf3, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "_gRef", React.createRef());

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onClick", function (e) {
        _this3.props.onClick(_this3.getCoords(), e);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onMouseOver", function (e) {
        _this3.props.onMouseOver(_this3.getCoords(), e);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onMouseOut", function (e) {
        _this3.props.onMouseOut(_this3.getCoords(), e);
      });

      return _this3;
    }

    _createClass(Square, [{
      key: "getCoords",
      value: function getCoords() {
        return {
          x: this.props.x,
          y: this.props.y
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var element = this._gRef.current;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.props.eventListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;
            element.addEventListener(listener.name, listener.callback);
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
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var element = this._gRef.current;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.props.eventListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var listener = _step2.value;
            element.removeEventListener(listener.name, listener.callback);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var tx = this.props.x * this.props.size;
        var ty = this.props.y * this.props.size; // If no child, render a square.

        var children = React.createElement("rect", {
          style: this.props.style,
          width: this.props.size,
          height: this.props.size,
          x: 0,
          y: 0
        }); // If a child is passed, render child.

        if (this.props.children) {
          children = this.props.children;
        }

        return React.createElement("g", {
          ref: this._gRef,
          onClick: this.onClick,
          onMouseOver: this.onMouseOver,
          onMouseOut: this.onMouseOut,
          transform: "translate(".concat(tx, ", ").concat(ty, ")")
        }, children);
      }
    }]);

    return Square;
  }(React.Component);

  _defineProperty(Square, "propTypes", {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number,
    style: PropTypes.any,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    eventListeners: PropTypes.array,
    children: PropTypes.element
  });

  _defineProperty(Square, "defaultProps", {
    size: 1,
    x: 0,
    y: 0,
    style: {
      fill: '#fff'
    },
    eventListeners: []
  });

  /**
   * Grid
   *
   * Component that will show children on a cartesian regular grid.
   *
   * Props:
   *   rows       - Number of rows (height) of the grid.
   *   cols       - Number of columns (width) of the grid.
   *   cellSize   - Size of a square.
   *   thichness  - Thichness of a square.
   *   padding    - Padding between squares.
   *   colorMap   - A map from 'x,y' => color.
   *   onClick    - (x, y) => {}
   *                Called when a square is clicked.
   *   onMouseOver    - (x, y) => {}
   *                Called when a square is mouse over.
   *   onMouseOut    - (x, y) => {}
   *                Called when a square is mouse out.
   *
   * Usage:
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2}/>
   * </Grid>
   */

  var Grid$1 = function Grid(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(GridImpl, _extends({}, props, {
        context: context
      }));
    });
  };

  var GridImpl =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(GridImpl, _React$Component);

    function GridImpl(props) {
      var _this;

      _classCallCheck(this, GridImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GridImpl).call(this, props));
      _this.boardGroup = new THREE.Group();
      _this.tokenGroup = new THREE.Group();

      _this.boardGroup.add(_this.tokenGroup); // translate the board to center on (0,0,0)


      _this.boardGroup.translateX(-(_this.props.padding + _this.props.cellSize) * (_this.props.cols - 1) / 2);

      _this.boardGroup.translateZ(-(_this.props.padding + _this.props.cellSize) * (_this.props.rows - 1) / 2);

      return _this;
    }

    _createClass(GridImpl, [{
      key: "_getCellColor",
      value: function _getCellColor(x, y) {
        var key = "".concat(x, ",").concat(y);
        var color = '#777777';

        if (key in this.props.colorMap) {
          color = this.props.colorMap[key];
        }

        return color;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.remove(this.boardGroup);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        this.context = this.props.context;
        this.context.add(this.boardGroup); // when rerendering, render a new squareGroup

        this.boardGroup.remove(this.squareGroup);
        this.squareGroup = new THREE.Group();
        this.boardGroup.add(this.squareGroup); // add square base

        var _loop = function _loop(x) {
          var _loop2 = function _loop2(y) {
            var squareProps = {
              x: x,
              y: y,
              size: _this2.props.cellSize,
              color: _this2._getCellColor(x, y),
              padding: _this2.props.padding,
              thickness: _this2.props.thickness
            };
            var square = new Square$1(squareProps);

            _this2.squareGroup.add(square);

            var onEvent = function onEvent(e) {
              if (e.type == 'click') {
                if (_this2.props.onClick) _this2.props.onClick({
                  x: x,
                  y: y
                });
              } else if (e.type == 'mouseOver') {
                if (_this2.props.onMouseOver) _this2.props.onMouseOver({
                  x: x,
                  y: y
                });
              } else if (e.type == 'mouseOut') {
                if (_this2.props.onMouseOut) _this2.props.onMouseOut({
                  x: x,
                  y: y
                });
              }
            };

            _this2.context.regCall(square, onEvent);
          };

          for (var y = 0; y < _this2.props.rows; y++) {
            _loop2(y);
          }
        };

        for (var x = 0; x < this.props.cols; x++) {
          _loop(x);
        } // set tokens


        var tokens = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, {
            three: true,
            boardSize: _this2.props.cellSize,
            parent: _this2.tokenGroup,
            padding: _this2.props.padding,
            lift: _this2.props.thickness
          });
        });

        if (tokens) {
          return tokens;
        }

        return null;
      }
    }]);

    return GridImpl;
  }(React.Component);
  /**
   * Square
   *
   * Component that renders a square inside a Grid.
   *
   * Props
   *   x          - X coordinate on grid coordinates.
   *   y          - Y coordinate on grid coordinates.
   *   size       - Square size.
   *   color      - Color of the square
   *   thichness  - Thichness of a square.
   *   padding    - Padding between squares.
   *
   * Not meant to be used by the end user directly (use Token).
   * Also not exposed in the NPM.
   */


  _defineProperty(GridImpl, "propTypes", {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    cellSize: PropTypes.number,
    thickness: PropTypes.number,
    padding: PropTypes.number,
    colorMap: PropTypes.object,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    context: PropTypes.any,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
  });

  _defineProperty(GridImpl, "defaultProps", {
    colorMap: {},
    cellSize: 1,
    padding: 0.1,
    thickness: 0.1
  });

  var Square$1 =
  /*#__PURE__*/
  function (_THREE$Mesh) {
    _inherits(Square, _THREE$Mesh);

    function Square(props) {
      var _this3;

      _classCallCheck(this, Square);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this));
      _this3.userData = _objectSpread({
        responsive: true,
        draggable: false
      }, props);
      props = _this3.userData;
      _this3.geometry = new THREE.BoxBufferGeometry(props.size, props.thickness, props.size);
      _this3.material = new THREE.MeshLambertMaterial({
        color: props.color
      });
      _this3.receiveShadow = true;

      _this3.translateX(_this3.userData.x * (props.size + props.padding));

      _this3.translateZ(_this3.userData.y * (props.size + props.padding));

      _this3.translateY(_this3.userData.thickness / 2);

      return _this3;
    }

    return Square;
  }(THREE.Mesh);

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var Grid$2 = function Grid$$1(props) {
    return props.three ? React.createElement(Grid$1, props, props.children) : React.createElement(Grid, props, props.children);
  };
  Grid$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };
  var Square$2 = function Square$$1(props) {
    return props.three ? React.createElement(Square$1, props, props.children) : React.createElement(Square, props, props.children);
  };
  Square$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };

  /**
   * HexGrid
   *
   * Component to display a hex grid.
   * Reference: https://www.redblobgames.com/grids/hexagons/.
   *
   * We use cube co-ordinates (see reference).
   *
   * Props:
   *   levels     - The number of levels around the central hex.
   *   style      - CSS style of the HTML element.
   *
   * Usage:
   *
   * <HexGrid levels={5}>
   *   <Token x={0} y={0} z={0}/>
   * </HexGrid>
   */

  var HexGrid =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HexGrid, _React$Component);

    function HexGrid() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HexGrid);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HexGrid)).call.apply(_getPrototypeOf2, [this].concat(_args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_svgRef", React.createRef());

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (args) {
        if (_this.props.onClick) {
          _this.props.onClick(args);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOver", function (args) {
        if (_this.props.onMouseOver) {
          _this.props.onMouseOver(args);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function (args) {
        if (_this.props.onMouseOut) {
          _this.props.onMouseOut(args);
        }
      });

      return _this;
    }

    _createClass(HexGrid, [{
      key: "_getCellColor",
      value: function _getCellColor(x, y, z) {
        var key = "".concat(x, ",").concat(y, ",").concat(z);
        var color = 'white';

        if (key in this.props.colorMap) {
          color = this.props.colorMap[key];
        }

        return color;
      }
    }, {
      key: "_getGrid",
      value: function _getGrid() {
        if (!this.props.outline) {
          return null;
        }

        var hexes = [];
        var r = this.props.levels;

        for (var x = -r; x <= r; x++) {
          for (var y = -r; y <= r; y++) {
            var z = -x - y;
            if (Math.abs(z) > r) continue;
            hexes.push(React.createElement(Hex, {
              key: "".concat(x, ":").concat(y, ":").concat(z),
              style: {
                fill: this._getCellColor(x, y, z)
              },
              x: x,
              y: y,
              z: z,
              size: this.props.cellSize,
              onClick: this.onClick,
              onMouseOver: this.onMouseOver,
              onMouseOut: this.onMouseOut
            }));
          }
        }

        return hexes;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var tokens = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, {
            template: Hex,
            onClick: _this2.onClick,
            onMouseOver: _this2.onMouseOver,
            onMouseOut: _this2.onMouseOut,
            svgRef: _this2._svgRef
          });
        });
        var t = this.props.cellSize * this.props.levels * 2;
        return React.createElement("svg", {
          ref: this._svgRef,
          viewBox: -t + ' ' + -t + ' ' + 2 * t + ' ' + 2 * t,
          style: this.props.style
        }, React.createElement("g", null, this._getGrid()), tokens);
      }
    }]);

    return HexGrid;
  }(React.Component);
  /**
   * Hex (flat-topped).
   *
   * Component that renders a hexagon inside a HexGrid.
   *
   * Props:
   *   x       - X coordinate (cube coordinates).
   *   y       - Y coordinate (cube coordinates).
   *   z       - Z coordinate (cube coordinates).
   *   size    - Hex size.
   *   style   - Custom styling.
   *   onClick - Invoked when a Hex is clicked.
   *   onMouseOver - Invoked when a Hex is mouse over.
   *   onMouseOut - Invoked when a Hex is mouse out.
   *   eventListeners - Array of objects with name and callback
   *   for DOM events.
   *
   * Not meant to be used by the end user directly (use Token).
   * Also not exposed in the NPM.
   */

  _defineProperty(HexGrid, "propTypes", {
    levels: PropTypes.number.isRequired,
    outline: PropTypes.bool,
    style: PropTypes.object,
    colorMap: PropTypes.object,
    cellSize: PropTypes.number,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
  });

  _defineProperty(HexGrid, "defaultProps", {
    levels: 5,
    colorMap: {},
    outline: true,
    cellSize: 1
  });

  var Hex =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Hex, _React$Component2);

    function Hex(props) {
      var _this3;

      _classCallCheck(this, Hex);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Hex).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "_gRef", React.createRef());

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onClick", function (e) {
        _this3.props.onClick(_this3.getCoords(), e);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onMouseOver", function (e) {
        _this3.props.onMouseOver(_this3.getCoords(), e);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onMouseOut", function (e) {
        _this3.props.onMouseOut(_this3.getCoords(), e);
      });

      return _this3;
    }

    _createClass(Hex, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var element = this._gRef.current;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.props.eventListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;
            element.addEventListener(listener.name, listener.callback);
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
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var element = this._gRef.current;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.props.eventListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var listener = _step2.value;
            element.removeEventListener(listener.name, listener.callback);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: "getCoords",
      value: function getCoords() {
        return {
          x: this.props.x,
          y: this.props.y,
          z: this.props.z
        };
      }
    }, {
      key: "render",
      value: function render() {
        var tx = this.center.x;
        var ty = this.center.y; // If no child, render a hex.

        var children = React.createElement("polygon", {
          style: this.props.style,
          points: this.points,
          stroke: "#aaa",
          strokeWidth: 0.01
        }); // If a child is passed, render child.

        if (this.props.children) {
          children = this.props.children;
        }

        return React.createElement("g", {
          ref: this._gRef,
          onClick: this.onClick,
          onMouseOver: this.onMouseOver,
          onMouseOut: this.onMouseOut,
          transform: "translate(".concat(tx, ", ").concat(ty, ")")
        }, children);
      }
    }, {
      key: "width",
      get: function get() {
        return this.props.size * 2;
      }
    }, {
      key: "height",
      get: function get() {
        return (Math.sqrt(3) / 2 * this.width).toFixed(3);
      }
      /**
       * Get the co-ordinates of the hex center.
       */

    }, {
      key: "center",
      get: function get() {
        var q = this.props.x;
        var r = this.props.z;
        var x = this.props.size * 3 * q / 2.0;
        var y = this.props.size * Math.sqrt(3) * (r + q / 2.0);
        return {
          x: x,
          y: y
        };
      }
      /**
       * Get the points of the vertices.
       */

    }, {
      key: "points",
      get: function get() {
        //   b____c
        //   /    \
        // a/      \d
        //  \      /
        //   \____/
        //   f    e
        var s = this.props.size;
        var h = this.height;
        var xa = -s;
        var xb = -s / 2.0;
        var xc = +s / 2.0;
        var xd = +s;
        var xe = xc;
        var xf = xb;
        var ya = 0.0;
        var yb = h / 2.0;
        var yc = yb;
        var yd = ya;
        var ye = -h / 2.0;
        var yf = ye;
        var flatTop = ["".concat(xa, ",").concat(ya), "".concat(xb, ",").concat(yb), "".concat(xc, ",").concat(yc), "".concat(xd, ",").concat(yd), "".concat(xe, ",").concat(ye), "".concat(xf, ",").concat(yf)];
        return flatTop.join(' ');
      }
    }]);

    return Hex;
  }(React.Component);

  _defineProperty(Hex, "propTypes", {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    size: PropTypes.number,
    style: PropTypes.any,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    eventListeners: PropTypes.array,
    children: PropTypes.element
  });

  _defineProperty(Hex, "defaultProps", {
    size: 1,
    x: 0,
    y: 0,
    z: 0,
    style: {
      fill: '#fff'
    },
    eventListeners: []
  });

  var HexGrid$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HexGrid, _React$Component);

    function HexGrid() {
      _classCallCheck(this, HexGrid);

      return _possibleConstructorReturn(this, _getPrototypeOf(HexGrid).apply(this, arguments));
    }

    _createClass(HexGrid, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return HexGrid;
  }(React.Component); // Not yet implemented.

  var Hex$1 =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Hex, _React$Component2);

    function Hex() {
      _classCallCheck(this, Hex);

      return _possibleConstructorReturn(this, _getPrototypeOf(Hex).apply(this, arguments));
    }

    _createClass(Hex, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return Hex;
  }(React.Component);

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var Hex$2 = function Hex$$1(props) {
    return props.three ? React.createElement(Hex$1, props, props.children) : React.createElement(Hex, props, props.children);
  };
  Hex$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };
  var HexGrid$2 = function HexGrid$$1(props) {
    return props.three ? React.createElement(HexGrid$1, props, props.children) : React.createElement(HexGrid, props, props.children);
  };
  HexGrid$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var isSame = function isSame(a) {
    return function (b) {
      return a.x === b.x && a.y === b.y && a.z === b.z;
    };
  };

  var addPoint = function addPoint(a, b) {
    return {
      x: a.x + b.x,
      y: a.y + b.y,
      z: a.z + b.z
    };
  };

  var isContained = function isContained(a, points) {
    return points.some(isSame(a));
  };
  /**
   * Get neighbors
   *
   * A utility function which returns all neighbors for a point
   * expressed in cube coordinates
   *
   * Arguments:
   *   point      (Cube coorinates)
   *
   */


  var getAllNeighbors = function getAllNeighbors(point) {
    return [[1, -1, 0], [1, 0, -1], [0, 1, -1], [0, -1, 1], [-1, 1, 0], [-1, 0, 1]].map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
          dx = _ref4[0],
          dy = _ref4[1],
          dz = _ref4[2];

      return addPoint(point, {
        x: dx,
        y: dy,
        z: dz
      });
    });
  };
  /**
   * Get distance
   *
   * A utility function which calculates the distance between two
   * points expressed in cube coordinates
   *
   * Arguments:
   *   Two objects with:
   *   x       - X coordinate (cube coordinates)
   *   y       - Y coordinate (cube coordinates)
   *   z       - Z coordinate (cube coordinates)
   *
   */

  var getDistance = function getDistance(a, b) {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2;
  };
  /**
   * Get range
   *
   * A utility function which returns all points within a range
   * from the center
   *
   * Arguments:
   *   center    (Cube coordinates)
   *   distance  number
   *
   */

  var getRange = function getRange(center, distance) {
    var results = [];

    for (var x = -distance; x <= distance; x++) {
      var startY = Math.max(-distance, -x - distance);
      var stopY = Math.min(distance, -x + distance);

      for (var y = startY; y <= stopY; y++) {
        var z = -x - y;
        results.push(addPoint(center, {
          x: x,
          y: y,
          z: z
        }));
      }
    }

    return results;
  };
  /**
   * Get reachable
   *
   * A utility function which returns all reachable points given
   * a start, a movement distance, and a set of blocked points
   *
   * Arguments:
   *   start     point (Cube coordinates)
   *   movement  number
   *   blocked   array of blocked points (cube coordinates)
   *
   */

  var getReachable = function getReachable(start, movement, blocked) {
    var visited = [start];
    var fringes = [[start]];

    var _loop = function _loop(i) {
      fringes.push([]);
      fringes[i - 1].map(getAllNeighbors).reduce(function (prev, curr) {
        return prev.concat(curr);
      }, []).filter(function (neighbor) {
        return !isContained(neighbor, blocked.concat(visited));
      }).forEach(function (neighbor) {
        visited.push(neighbor);
        fringes[i].push(neighbor);
      });
    };

    for (var i = 1; i <= movement; i++) {
      _loop(i);
    }

    return visited;
  };
  var HexUtils = {
    getAllNeighbors: getAllNeighbors,
    getDistance: getDistance,
    getRange: getRange,
    getReachable: getReachable
  };

  /**
   * Token
   *
   * Component that represents a board game piece (or token).
   * Can be used by itself or with one of the grid systems
   * provided (Grid or HexGrid).
   *
   * A token renders as a square inside a Grid and a
   * hexagon inside a HexGrid. Additionally, you can pass
   * it a child if you want any other custom rendering.
   *
   * Props:
   *   x       - X coordinate on grid / hex grid.
   *   y       - Y coordinate on grid / hex grid.
   *   z       - Z coordinate on hex grid.
   *   animate - Changes in position are animated if true.
   *   animationDuration - Length of animation.
   *   onClick - Called when the token is clicked.
   *   onMouseOver - Called when the token is mouse over.
   *   onMouseOut - Called when the token is mouse out.
   *   draggable - Whether a Token is draggable or not.
   *   shouldDrag - Whether a draggable token should start drag.
   *   onDrag - Called when a token was dragged (moved).
   *            Parameter contain { x, y, originalX, originalY }.
   *   onDrop - Called when the token was dropped after dragging.
   *            Parameter contain { x, y, originalX, originalY }.
   *
   * Usage:
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2}/>
   * </Grid>
   *
   * <HexGrid>
   *   <Token x={1} y={2} z={-3}/>
   * </HexGrid>
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2}>
   *     <Knight color="white"/>
   *   </Token>
   * </Grid>
   */

  var Token =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Token, _React$Component);

    function Token(props) {
      var _this;

      _classCallCheck(this, Token);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Token).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_startDrag", function (e) {
        if (_this.props.draggable && _this.props.shouldDrag(_this.getCoords())) {
          e.preventDefault(); // Required for Safari/iOs.

          e = e.touches ? e.touches[0] : e;

          _this.setState(_objectSpread({}, _this.state, {
            dragged: {
              x: e.pageX,
              y: e.pageY
            }
          }));

          _this._addOrRemoveDragEventListeners(true);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_drag", function (e) {
        if (_this.state.dragged) {
          e.preventDefault(); // Required for Safari/iOs.

          e = e.touches ? e.touches[0] : e;

          var ctm = _this.props.svgRef.current.getScreenCTM().inverse();

          var deltaPageX = e.pageX - _this.state.dragged.x;
          var deltaPageY = e.pageY - _this.state.dragged.y;
          var deltaSvgX = ctm.a * deltaPageX + ctm.b * deltaPageY;
          var deltaSvgY = ctm.c * deltaPageX + ctm.d * deltaPageY;
          var x = _this.state.x + deltaSvgX;
          var y = _this.state.y + deltaSvgY;

          if (_this.props.onDrag) {
            _this.props.onDrag({
              x: x,
              y: y,
              originalX: _this.props.x,
              originalY: _this.props.y
            });
          }

          _this.setState(_objectSpread({}, _this.state, {
            x: x,
            y: y,
            dragged: {
              x: e.pageX,
              y: e.pageY
            }
          }));
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_endDrag", function (e) {
        if (_this.state.dragged) {
          e.preventDefault(); // Whether this is a drop or a click depends if the mouse moved after drag.
          // Android will issue very small drag events, so we need a distance.

          var dist = Math.sqrt(Math.pow(_this.state.x - _this.props.x, 2) + Math.pow(_this.state.y - _this.props.y, 2));

          if (dist > 0.2) {
            _this.props.onDrop({
              x: _this.state.x,
              y: _this.state.y,
              originalX: _this.props.x,
              originalY: _this.props.y
            });
          } else {
            _this.props.onClick({
              x: _this.state.x,
              y: _this.state.y
            });
          }

          _this.setState(_objectSpread({}, _this.state, {
            x: _this.props.x,
            y: _this.props.y,
            dragged: null
          }));

          _this._addOrRemoveDragEventListeners(false);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClick", function (param) {
        // Ignore onClick if the element is draggable, because desktops will
        // send both onClick and touch events, leading to duplication.
        // Whether this will be a click or a drop will be defined in _endDrag.
        if (!(_this.props.draggable && _this.props.shouldDrag(_this.getCoords()))) {
          _this.props.onClick(param);
        }
      });

      _this.state = _objectSpread({}, _this.getCoords(), {
        dragged: null,
        usingTouch: false
      });
      return _this;
    }

    _createClass(Token, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.dragged) {
          this._addOrRemoveDragEventListeners(false);
        }
      }
      /**
       * If there is a change in props, saves old x/y,
       * and current time. Starts animation.
       * @param {Object} nextProps Next props.
       */
      // eslint-disable-next-line react/no-deprecated

    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var oldCoord = this.getCoords();
        var newCoord = this.getCoords(nextProps); // Debounce.

        if (oldCoord.x == newCoord.x && oldCoord.y == newCoord.y) {
          return;
        }

        this.setState(_objectSpread({}, this.state, {
          originTime: Date.now(),
          originX: this.state.x,
          originY: this.state.y,
          originZ: this.state.z
        }));
        requestAnimationFrame(this._animate(Date.now()));
      }
      /**
       * Add or remove event listeners.
       * @param {boolean} shouldAdd If it should add (or remove) listeners.
       */

    }, {
      key: "_addOrRemoveDragEventListeners",
      value: function _addOrRemoveDragEventListeners(shouldAdd) {
        var svgEl = this.props.svgRef.current;
        if (!svgEl) return;
        var addOrRemoveEventListener = svgEl.addEventListener;

        if (!shouldAdd) {
          addOrRemoveEventListener = svgEl.removeEventListener;
        }

        addOrRemoveEventListener('touchmove', this._drag, {
          passive: false
        });
        addOrRemoveEventListener('mousemove', this._drag, {
          passive: false
        });
        addOrRemoveEventListener('mouseup', this._endDrag, {
          passive: false
        });
        addOrRemoveEventListener('mouseleave', this._endDrag, {
          passive: false
        });
        addOrRemoveEventListener('touchcancel', this._endDrag, {
          passive: false
        });
        addOrRemoveEventListener('touchleave', this._endDrag, {
          passive: false
        });
        addOrRemoveEventListener('touchend', this._endDrag, {
          passive: false
        });
      }
      /**
       * Recursively animates x and y.
       * @param {number} now Unix timestamp when this was called.
       */

    }, {
      key: "_animate",
      value: function _animate(now) {
        var _this2 = this;

        return function () {
          var elapsed = now - _this2.state.originTime;

          var svgCoord = _this2.getCoords();

          if (elapsed < _this2.props.animationDuration && _this2.props.animate) {
            var percentage = _this2._easeInOutCubic(elapsed, 0, 1, _this2.props.animationDuration);

            _this2.setState(_objectSpread({}, _this2.state, {
              x: (svgCoord.x - _this2.state.originX) * percentage + _this2.state.originX,
              y: (svgCoord.y - _this2.state.originY) * percentage + _this2.state.originY,
              z: (svgCoord.z - _this2.state.originZ) * percentage + _this2.state.originZ
            }));

            requestAnimationFrame(_this2._animate(Date.now()));
          } else {
            _this2.setState(_objectSpread({}, _this2.state, {
              x: svgCoord.x,
              y: svgCoord.y,
              z: svgCoord.z
            }));
          }
        }.bind(this);
      }
      /**
       * Gets SVG x/y/z coordinates.
       * @param {Object} props Props object to get coordinates from.
       * @return {Object} Object with x, y and z parameters.
       */

    }, {
      key: "getCoords",
      value: function getCoords() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        return {
          x: props.x,
          y: props.y,
          z: props.z
        };
      }
      /**
       * Returns animation easing value. See http://easings.net/#easeInOutCubic.
       * @param {number} t Current time.
       * @param {number} b Beginning value.
       * @param {number} c Final value.
       * @param {number} d Duration.
       */

    }, {
      key: "_easeInOutCubic",
      value: function _easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
      /**
       * Gets event listeners needed for drag and drop.
       */

    }, {
      key: "_eventListeners",
      value: function _eventListeners() {
        return [{
          name: 'mousedown',
          callback: this._startDrag
        }, {
          name: 'touchstart',
          callback: this._startDrag
        }];
      }
    }, {
      key: "render",
      value: function render() {
        var Component = this.props.template;
        return React.createElement(Component, {
          x: this.state.x,
          y: this.state.y,
          z: this.state.z,
          style: this.props.style,
          onClick: this._onClick,
          onMouseOver: this.props.onMouseOver,
          onMouseOut: this.props.onMouseOut,
          eventListeners: this._eventListeners()
        }, this.props.children);
      }
    }]);

    return Token;
  }(React.Component);

  _defineProperty(Token, "propTypes", {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    template: PropTypes.any,
    style: PropTypes.any,
    animate: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    children: PropTypes.element,
    animationDuration: PropTypes.number,
    draggable: PropTypes.bool,
    shouldDrag: PropTypes.func,
    onDrag: PropTypes.func,
    onDrop: PropTypes.func,
    svgRef: PropTypes.object
  });

  _defineProperty(Token, "defaultProps", {
    animationDuration: 750,
    template: Square
  });

  /**
   * Token
   *
   * Component that represents a board game piece (or token).
   * Can be used by itself or with one of the grid systems
   * provided (Grid or HexGrid).
   *
   * A token renders as a 3D Mesh. IF no mesh prop is passed.
   * It will render a white box on the grid.
   *
   * Props:
   *   x       - X coordinate on grid / hex grid.
   *   y       - Y coordinate on grid / hex grid.
   *   z       - Z coordinate on hex grid.
   *   onClick - Called when the token is clicked.
   *   onMouseOver - Called when the token is mouse over.
   *   onMouseOut - Called when the token is mouse out.
   *
   * Usage:
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2}/>
   * </Grid>
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2} size={0.5}/>
   * </Grid>
   *
   * <HexGrid>
   *   <Token x={1} y={2} z={-3}/>
   * </HexGrid>
   *
   * <Grid rows={8} cols={8}>
   *   <Token x={1} y={2} mesh={THREE.js 3D-Object}/>
   * </Grid>
   *
   */

  var Token$1 = function Token(props) {
    return React.createElement(UIContext.Consumer, null, function (context) {
      return React.createElement(TokenImpl, _extends({}, props, {
        context: context
      }));
    });
  };

  var TokenImpl =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TokenImpl, _React$Component);

    function TokenImpl(props) {
      var _this;

      _classCallCheck(this, TokenImpl);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenImpl).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_attachMesh", function (mesh) {
        var size = _this.size;
        var meshSize = new THREE.Vector3();
        var meshCenter = new THREE.Vector3();
        var bbox = new THREE.Box3().setFromObject(mesh);
        bbox.getSize(meshSize);
        bbox.getCenter(meshCenter); // determine the scale factor

        var scale = meshSize.z < meshSize.x ? meshSize.x : meshSize.z;
        scale = size / scale;
        mesh.scale.set(scale, scale, scale); // set the mesh to the ground

        if (_this.props.boardSize && _this.props.lift && _this.props.padding) {
          mesh.position.x = _this.props.x * (_this.props.boardSize + _this.props.padding);
          mesh.position.z = _this.props.y * (_this.props.boardSize + _this.props.padding);
          mesh.position.y = -bbox.min.y + _this.props.lift;
        } else {
          mesh.position.x = _this.props.x;
          mesh.position.z = _this.props.y;
          mesh.position.y = -bbox.min.y;
        }

        _this.parent.add(mesh); // register the event


        var onEvent = function onEvent(e) {
          if (e.type == 'click') {
            _this.props.onClick({
              x: _this.props.x,
              y: _this.props.y
            });
          } else if (e.type == 'mouseOver') {
            _this.props.onMouseOver({
              x: _this.props.x,
              y: _this.props.y
            });
          } else if (e.type == 'mouseOut') {
            _this.props.onMouseOut({
              x: _this.props.x,
              y: _this.props.y
            });
          }
        };

        _this.props.context.regCall(mesh, onEvent);
      });

      if (!props.size) {
        _this.size = props.boardSize;
      } else {
        _this.size = props.size;
      }

      if (props.parent) {
        _this.parent = props.parent;
      } else {
        _this.parent = props.context;
      }

      return _this;
    }

    _createClass(TokenImpl, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.parent.remove(this.prevMesh);
      }
    }, {
      key: "render",
      value: function render() {
        var mesh = this.props.mesh;
        if (this.prevMesh && this.prevMesh === mesh) return null;

        if (!mesh) {
          mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1 * 0.3, 1), new THREE.MeshLambertMaterial({
            color: '#eeeeee'
          }));

          this._attachMesh(mesh);
        } else if (mesh.isObject3D) {
          this._attachMesh(mesh);
        } else {
          console.error('Your input to tokens should be an three js 3d object');
        }

        this.parent.remove(this.prevMesh);
        this.prevMesh = mesh;
        return null;
      }
    }]);

    return TokenImpl;
  }(React.Component);

  _defineProperty(TokenImpl, "propTypes", {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    mesh: PropTypes.any,
    padding: PropTypes.number,
    size: PropTypes.number,
    lift: PropTypes.number,
    boardSize: PropTypes.number,
    parent: PropTypes.instanceOf(THREE.Object3D),
    context: PropTypes.object,
    animate: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    children: PropTypes.element,
    animationDuration: PropTypes.number
  });

  _defineProperty(TokenImpl, "defaultProps", {
    animationDuration: 750,
    size: 1,
    padding: 0.1,
    lift: 0.1
  });

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var Token$2 = function Token$$1(props) {
    return props.three ? React.createElement(Token$1, props, props.children) : React.createElement(Token, props, props.children);
  };
  Token$2.propTypes = {
    three: PropTypes.bool,
    children: PropTypes.any
  };

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  var MAKE_MOVE = 'MAKE_MOVE';

  var css$3 = "/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.gamelog {\n  display: grid;\n  grid-template-columns: 30px 1fr 30px;\n  grid-auto-rows: auto;\n  grid-auto-flow: column;\n}\n\n.gamelog .turn-marker {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 1;\n  background: #555;\n  color: #eee;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #888;\n}\n\n.gamelog .log-event {\n  grid-column: 2;\n  cursor: pointer;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #fff;\n  border: 1px dotted #ccc;\n  border-left: 5px solid #ccc;\n  padding: 5px;\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n  min-height: 25px;\n  line-height: 25px;\n}\n\n.gamelog .phase-marker {\n  grid-column: 3;\n  background: #555;\n  border: 1px solid #888;\n  color: #eee;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-orientation: sideways;\n  writing-mode: vertical-rl;\n  line-height: 30px;\n  width: 100%;\n}\n\n.gamelog.pinned .log-event {\n  opacity: 0.2;\n}\n\n.gamelog .log-event:hover {\n  border-style: solid;\n  background: #eee;\n}\n\n.gamelog .log-event.pinned {\n  border-style: solid;\n  background: #eee;\n  opacity: 1;\n}\n\n.gamelog div.player0 {\n  border-left-color: #ff851b;\n}\n\n.gamelog div.player1 {\n  border-left-color: #7fdbff;\n}\n\n.gamelog div.player2 {\n  border-left-color: #0074d9;\n}\n\n.gamelog div.player3 {\n  border-left-color: #39cccc;\n}\n\n.gamelog div.player4 {\n  border-left-color: #3d9970;\n}\n\n.gamelog div.player5 {\n  border-left-color: #2ecc40;\n}\n\n.gamelog div.player6 {\n  border-left-color: #01ff70;\n}\n\n.gamelog div.player7 {\n  border-left-color: #ffdc00;\n}\n\n.gamelog div.player8 {\n  border-left-color: #001f3f;\n}\n\n.gamelog div.player9 {\n  border-left-color: #ff4136;\n}\n\n.gamelog div.player10 {\n  border-left-color: #85144b;\n}\n\n.gamelog div.player11 {\n  border-left-color: #f012be;\n}\n\n.gamelog div.player12 {\n  border-left-color: #b10dc9;\n}\n\n.gamelog div.player13 {\n  border-left-color: #111111;\n}\n\n.gamelog div.player14 {\n  border-left-color: #aaaaaa;\n}\n\n.gamelog div.player15 {\n  border-left-color: #dddddd;\n}\n";
  styleInject(css$3);

  /**
   * Default component to render custom payload.
   */

  var CustomPayload = function CustomPayload(props) {
    var custompayload = props.payload !== undefined ? JSON.stringify(props.payload, null, 4) : '';
    return React.createElement("div", null, custompayload);
  };

  CustomPayload.propTypes = {
    payload: PropTypes.any
  };
  /**
   * LogEvent
   *
   * Logs a single action in the game.
   */

  var LogEvent = function LogEvent(props) {
    var action = props.action;
    var args = action.payload.args || [];
    var playerID = action.payload.playerID;
    var classNames = "log-event player".concat(playerID);

    if (props.pinned) {
      classNames += ' pinned';
    } // allow to pass in custom rendering component for custom payload


    var customPayload = props.payloadComponent !== undefined ? React.createElement(props.payloadComponent, {
      payload: props.payload
    }) : React.createElement(CustomPayload, {
      payload: props.payload
    });
    return React.createElement("div", {
      className: classNames,
      onClick: function onClick() {
        return props.onLogClick(props.logIndex);
      },
      onMouseEnter: function onMouseEnter() {
        return props.onMouseEnter(props.logIndex);
      },
      onMouseLeave: function onMouseLeave() {
        return props.onMouseLeave();
      }
    }, React.createElement("div", null, action.payload.type, "(", args.join(','), ")"), customPayload);
  };

  LogEvent.propTypes = {
    action: PropTypes.any.isRequired,
    logIndex: PropTypes.number.isRequired,
    onLogClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    pinned: PropTypes.bool,
    payload: PropTypes.object,
    payloadComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  };
  /**
   * TurnMarker
   *
   * The markers on the left of the log events that indicate
   * which turn the event belongs to.
   */

  var TurnMarker = function TurnMarker(props) {
    return React.createElement("div", {
      className: "turn-marker",
      style: {
        gridRow: 'span ' + props.numEvents
      }
    }, props.turn);
  };

  TurnMarker.propTypes = {
    turn: PropTypes.number.isRequired,
    numEvents: PropTypes.number.isRequired
  };
  /**
   * PhaseMarker
   *
   * The markers on the right of the log events that indicate
   * which phase the event belongs to.
   */

  var PhaseMarker = function PhaseMarker(props) {
    return React.createElement("div", {
      className: "phase-marker",
      style: {
        gridRow: 'span ' + props.numEvents
      }
    }, props.phase);
  };

  PhaseMarker.propTypes = {
    phase: PropTypes.string.isRequired,
    numEvents: PropTypes.number.isRequired
  };
  /**
   * GameLog
   *
   * Component to log the actions in the game.
   */

  var GameLog =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(GameLog, _React$Component);

    function GameLog() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GameLog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameLog)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        pinned: null
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rewind", function (logIndex) {
        var state = _this.props.initialState;

        for (var i = 0; i < _this.props.log.length; i++) {
          var action = _this.props.log[i].action;

          if (!action.automatic) {
            state = _this.props.reducer(state, action);
          }

          if (action.type == MAKE_MOVE) {
            if (logIndex == 0) {
              break;
            }

            logIndex--;
          }
        }

        return {
          G: state.G,
          ctx: state.ctx
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLogClick", function (logIndex) {
        _this.setState(function (o) {
          var state = _this.rewind(logIndex);

          var renderedLogEntries = _this.props.log.filter(function (e) {
            return e.action.type == MAKE_MOVE;
          });

          var metadata = renderedLogEntries[logIndex].action.payload.metadata;

          if (o.pinned === logIndex) {
            _this.props.onHover({
              logIndex: logIndex,
              state: state,
              metadata: undefined
            });

            return {
              pinned: null
            };
          }

          _this.props.onHover({
            logIndex: logIndex,
            state: state,
            metadata: metadata
          });

          return {
            pinned: logIndex
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (logIndex) {
        if (_this.state.pinned === null) {
          var state = _this.rewind(logIndex);

          _this.props.onHover({
            logIndex: logIndex,
            state: state
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
        if (_this.state.pinned === null) {
          _this.props.onHover({
            state: null
          });
        }
      });

      return _this;
    }

    _createClass(GameLog, [{
      key: "render",
      value: function render() {
        var log = [];
        var turns = [];
        var phases = [];
        var eventsInCurrentPhase = 0;
        var eventsInCurrentTurn = 0;
        var renderedLogEntries = this.props.log.filter(function (e) {
          return e.action.type == MAKE_MOVE;
        });

        for (var i = 0; i < renderedLogEntries.length; i++) {
          var _renderedLogEntries$i = renderedLogEntries[i],
              action = _renderedLogEntries$i.action,
              payload = _renderedLogEntries$i.payload,
              turn = _renderedLogEntries$i.turn,
              phase = _renderedLogEntries$i.phase;
          eventsInCurrentPhase++;
          eventsInCurrentTurn++;
          log.push(React.createElement(LogEvent, {
            key: i,
            pinned: i === this.state.pinned,
            logIndex: i,
            onLogClick: this.onLogClick,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            action: action,
            payload: payload,
            payloadComponent: this.props.payloadComponent
          }));

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].turn != turn) {
            turns.push(React.createElement(TurnMarker, {
              key: turns.length,
              turn: turn,
              numEvents: eventsInCurrentTurn
            }));
            eventsInCurrentTurn = 0;
          }

          if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].phase != phase) {
            phases.push(React.createElement(PhaseMarker, {
              key: phases.length,
              phase: phase,
              numEvents: eventsInCurrentPhase
            }));
            eventsInCurrentPhase = 0;
          }
        }

        var className = 'gamelog';

        if (this.state.pinned !== null) {
          className += ' pinned';
        }

        return React.createElement("div", {
          className: className
        }, turns, log, phases);
      }
    }]);

    return GameLog;
  }(React.Component);

  _defineProperty(GameLog, "propTypes", {
    onHover: PropTypes.func,
    reducer: PropTypes.func,
    initialState: PropTypes.any.isRequired,
    log: PropTypes.array.isRequired,
    payloadComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  });

  _defineProperty(GameLog, "defaultProps", {
    onHover: function onHover() {}
  });

  /*
   * Copyright 2017 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */

  exports.UI = UI$2;
  exports.Card = Card$2;
  exports.Deck = Deck$2;
  exports.Grid = Grid$2;
  exports.HexGrid = HexGrid$2;
  exports.Token = Token$2;
  exports.HexUtils = HexUtils;
  exports.GameLog = GameLog;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/react.js":
/*!***************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/react.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/react.js */ "./node_modules/@freeboardgame.org/boardgame.io/dist/react.js")


/***/ }),

/***/ "./node_modules/@freeboardgame.org/boardgame.io/ui.js":
/*!************************************************************!*\
  !*** ./node_modules/@freeboardgame.org/boardgame.io/ui.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/ui.js */ "./node_modules/@freeboardgame.org/boardgame.io/dist/ui.js")


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9haS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvL2Rpc3QvYWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vZGlzdC9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZnJlZWJvYXJkZ2FtZS5vcmcvYm9hcmRnYW1lLmlvL2Rpc3QvcmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmcmVlYm9hcmRnYW1lLm9yZy9ib2FyZGdhbWUuaW8vZGlzdC91aS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby9yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyZWVib2FyZGdhbWUub3JnL2JvYXJkZ2FtZS5pby91aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQywrRUFBYzs7Ozs7Ozs7Ozs7O0FDQXZDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUFnQjs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQ0EsRUFBRSxLQUE0RCxvQkFBb0IsbUJBQU8sQ0FBQyxvREFBUyxHQUFHLG1CQUFPLENBQUMsd0RBQU87QUFDckgsRUFBRSxTQUNnRjtBQUNsRixDQUFDLDZDQUE2Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLGdFQUFnRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBeUUsbUVBQW1FO0FBQzVJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRTs7O0FBR3JFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLDJEQUEyRDtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFLG1FQUFtRTtBQUM1STs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFD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YUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QiwyQ0FBMkMsNkJBQTZCO0FBQ3hFO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQSx3RUFBd0U7O0FBRXhFLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVSwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVUsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Es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WCxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLGdFQUFnRTtBQUNuSTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQywyQkFBMkI7QUFDM0IsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELGNBQWM7O0FBRTlELENBQUM7Ozs7Ozs7Ozs7OztBQ2pySkQ7QUFDQSxFQUFFLEtBQTRELG9CQUFvQixtQkFBTyxDQUFDLDRDQUFPLEdBQUcsbUJBQU8sQ0FBQyxzREFBWSxHQUFHLG1CQUFPLENBQUMseURBQU8sR0FBRyxtQkFBTyxDQUFDLHdFQUFtQixHQUFHLG1CQUFPLENBQUMsMkVBQWtCO0FBQ3JNLEVBQUUsU0FDc0k7QUFDeEksQ0FBQyw0RUFBNEU7O0FBRTdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7O0FBRW5FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsK0JBQStCO0FBQzlFOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxRQUFROztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsK0JBQStCLG9EQUFvRCxrQ0FBa0MsZ0JBQWdCLGlCQUFpQix1Q0FBdUMsR0FBRyxxQkFBcUIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUc7QUFDeFU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxvRUFBb0U7OztBQUdwRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOzs7QUFHcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOzs7QUFHN0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3Qzs7O0FBR3hDO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQix3Q0FBd0M7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7O0FBRUE7QUFDQTs7QUFFQSx5RUFBeUU7OztBQUd6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsZ0NBQWdDO0FBQ2hDO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhPQUE4TyxrQkFBa0Isc0JBQXNCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG1CQUFtQix1QkFBdUIsMkJBQTJCLDRCQUE0QixvQkFBb0IscUJBQXFCLHVCQUF1Qiw4QkFBOEIsaUJBQWlCLGtCQUFrQixxQkFBcUIsK0JBQStCLEdBQUcsNEJBQTRCLG9CQUFvQixlQUFlLHlCQUF5QixHQUFHLHVCQUF1Qiw2QkFBNkIsaUNBQWlDLEdBQUcsdUJBQXVCLEdBQUcsMENBQTBDLGdCQUFnQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLEdBQUcsc0JBQXNCLG11QkFBbXVCLGlDQUFpQyw0QkFBNEIsMEJBQTBCLEdBQUc7QUFDN3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRyxrQkFBa0I7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFD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cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L2FpLmpzXCIpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Rpc3QvY29yZS5qc1wiKVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdmbGF0dGVkJyksIHJlcXVpcmUoJ2ltbWVyJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdmbGF0dGVkJywgJ2ltbWVyJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5BSSA9IHt9LCBnbG9iYWwuRmxhdHRlZCwgZ2xvYmFsLmltbWVyKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBmbGF0dGVkLCBwcm9kdWNlKSB7ICd1c2Ugc3RyaWN0JztcblxuICBwcm9kdWNlID0gcHJvZHVjZSAmJiBwcm9kdWNlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBwcm9kdWNlWydkZWZhdWx0J10gOiBwcm9kdWNlO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICAgIHZhciBrZXksIGk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTcgVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIHZhciBNQUtFX01PVkUgPSAnTUFLRV9NT1ZFJztcbiAgdmFyIEdBTUVfRVZFTlQgPSAnR0FNRV9FVkVOVCc7XG4gIHZhciBSRURPID0gJ1JFRE8nO1xuICB2YXIgUkVTRVQgPSAnUkVTRVQnO1xuICB2YXIgU1lOQyA9ICdTWU5DJztcbiAgdmFyIFVORE8gPSAnVU5ETyc7XG4gIHZhciBVUERBVEUgPSAnVVBEQVRFJztcblxuICAvLyBJbmxpbmVkIHZlcnNpb24gb2YgQWxlYSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGJhdS9zZWVkcmFuZG9tLlxuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE1IERhdmlkIEJhdS5cbiAgICpcbiAgICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsXG4gICAqIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlXG4gICAqIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICAgKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbiAgICogd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuICAgKiBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gICAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICpcbiAgICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGxcbiAgICogYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gICAqXG4gICAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICAgKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICAgKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAgICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAgICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICAgKi9cbiAgZnVuY3Rpb24gQWxlYShzZWVkKSB7XG4gICAgdmFyIG1lID0gdGhpcyxcbiAgICAgICAgbWFzaCA9IE1hc2goKTtcblxuICAgIG1lLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuXG4gICAgICBtZS5zMCA9IG1lLnMxO1xuICAgICAgbWUuczEgPSBtZS5zMjtcbiAgICAgIHJldHVybiBtZS5zMiA9IHQgLSAobWUuYyA9IHQgfCAwKTtcbiAgICB9OyAvLyBBcHBseSB0aGUgc2VlZGluZyBhbGdvcml0aG0gZnJvbSBCYWFnb2UuXG5cblxuICAgIG1lLmMgPSAxO1xuICAgIG1lLnMwID0gbWFzaCgnICcpO1xuICAgIG1lLnMxID0gbWFzaCgnICcpO1xuICAgIG1lLnMyID0gbWFzaCgnICcpO1xuICAgIG1lLnMwIC09IG1hc2goc2VlZCk7XG5cbiAgICBpZiAobWUuczAgPCAwKSB7XG4gICAgICBtZS5zMCArPSAxO1xuICAgIH1cblxuICAgIG1lLnMxIC09IG1hc2goc2VlZCk7XG5cbiAgICBpZiAobWUuczEgPCAwKSB7XG4gICAgICBtZS5zMSArPSAxO1xuICAgIH1cblxuICAgIG1lLnMyIC09IG1hc2goc2VlZCk7XG5cbiAgICBpZiAobWUuczIgPCAwKSB7XG4gICAgICBtZS5zMiArPSAxO1xuICAgIH1cblxuICAgIG1hc2ggPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY29weShmLCB0KSB7XG4gICAgdC5jID0gZi5jO1xuICAgIHQuczAgPSBmLnMwO1xuICAgIHQuczEgPSBmLnMxO1xuICAgIHQuczIgPSBmLnMyO1xuICAgIHJldHVybiB0O1xuICB9XG5cbiAgZnVuY3Rpb24gTWFzaCgpIHtcbiAgICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgICB2YXIgbWFzaCA9IGZ1bmN0aW9uIG1hc2goZGF0YSkge1xuICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBoICo9IG47XG4gICAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgICBoIC09IG47XG4gICAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOyAvLyAyXjMyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIH07XG5cbiAgICByZXR1cm4gbWFzaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsZWEoc2VlZCwgb3B0cykge1xuICAgIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgICAgcHJuZyA9IHhnLm5leHQ7XG4gICAgcHJuZy5xdWljayA9IHBybmc7XG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGlmIChfdHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuXG4gICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29weSh4Zywge30pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJuZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5kb21cbiAgICpcbiAgICogQ2FsbHMgdGhhdCByZXF1aXJlIGEgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gICAqIFVzZXMgYSBzZWVkIGZyb20gY3R4LCBhbmQgYWxzbyBwZXJzaXN0cyB0aGUgUFJOR1xuICAgKiBzdGF0ZSBpbiBjdHggc28gdGhhdCBtb3ZlcyBjYW4gc3RheSBwdXJlLlxuICAgKi9cblxuICB2YXIgUmFuZG9tID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QgdG8gaW5pdGlhbGl6ZSBmcm9tLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJhbmRvbShjdHgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5kb20pO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGNsaWVudCwgdGhlIHNlZWQgaXMgbm90IHByZXNlbnQuXG4gICAgICAvLyBKdXN0IHVzZSBhIHRlbXBvcmFyeSBzZWVkIHRvIGV4ZWN1dGUgdGhlIG1vdmUgd2l0aG91dFxuICAgICAgLy8gY3Jhc2hpbmcgaXQuIFRoZSBtb3ZlIHN0YXRlIGl0c2VsZiBpcyBkaXNjYXJkZWQsXG4gICAgICAvLyBzbyB0aGUgYWN0dWFsIHZhbHVlIGRvZXNuJ3QgbWF0dGVyLlxuICAgICAgdGhpcy5zdGF0ZSA9IGN0eC5fcmFuZG9tIHx8IHtcbiAgICAgICAgc2VlZDogJzAnXG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGN0eCB3aXRoIHRoZSBQUk5HIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdCB0byB1cGRhdGUuXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSYW5kb20sIFt7XG4gICAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gICAgICAgIHZhciBjdHggPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5jdHgsIHtcbiAgICAgICAgICBfcmFuZG9tOiB0aGlzLnN0YXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGN0eDogY3R4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBdHRhY2hlcyB0aGUgUmFuZG9tIEFQSSB0byBjdHguXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QgdG8gYXR0YWNoIHRvLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXR0YWNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXR0YWNoKGN0eCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgY3R4LCB7XG4gICAgICAgICAgcmFuZG9tOiB0aGlzLl9hcGkoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JhbmRvbVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yYW5kb20oKSB7XG4gICAgICAgIHZhciBSID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdmFyIGZuO1xuXG4gICAgICAgIGlmIChSLnBybmdzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gTm8gY2FsbCB0byBhIHJhbmRvbSBmdW5jdGlvbiBoYXMgYmVlbiBtYWRlLlxuICAgICAgICAgIGZuID0gbmV3IGFsZWEoUi5zZWVkLCB7XG4gICAgICAgICAgICBzdGF0ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZuID0gbmV3IGFsZWEoJycsIHtcbiAgICAgICAgICAgIHN0YXRlOiBSLnBybmdzdGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG51bWJlciA9IGZuKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBSLCB7XG4gICAgICAgICAgcHJuZ3N0YXRlOiBmbi5zdGF0ZSgpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBpXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwaSgpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IHRoaXMuX3JhbmRvbS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHZhciBTcG90VmFsdWUgPSB7XG4gICAgICAgICAgRDQ6IDQsXG4gICAgICAgICAgRDY6IDYsXG4gICAgICAgICAgRDg6IDgsXG4gICAgICAgICAgRDEwOiAxMCxcbiAgICAgICAgICBEMTI6IDEyLFxuICAgICAgICAgIEQyMDogMjBcbiAgICAgICAgfTsgLy8gR2VuZXJhdGUgZnVuY3Rpb25zIGZvciBwcmVkZWZpbmVkIGRpY2UgdmFsdWVzIEQ0IC0gRDIwLlxuXG4gICAgICAgIHZhciBwcmVkZWZpbmVkID0ge307XG5cbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgICAgICAgdmFyIHNwb3R2YWx1ZSA9IFNwb3RWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgcHJlZGVmaW5lZFtrZXldID0gZnVuY3Rpb24gKGRpY2VDb3VudCkge1xuICAgICAgICAgICAgaWYgKGRpY2VDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogc3BvdHZhbHVlKSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBBcnJheShkaWNlQ291bnQpLmtleXMoKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIHNwb3R2YWx1ZSkgKyAxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBTcG90VmFsdWUpIHtcbiAgICAgICAgICBfbG9vcChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHByZWRlZmluZWQsIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBSb2xsIGEgZGllIG9mIHNwZWNpZmllZCBzcG90IHZhbHVlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3R2YWx1ZSAtIFRoZSBkaWUgZGltZW5zaW9uIChkZWZhdWx0OiA2KS5cbiAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZGljZUNvdW50IC0gbnVtYmVyIG9mIGRpY2UgdG8gdGhyb3cuXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIG5vdCBkZWZpbmVkLCBkZWZhdWx0cyB0byAxIGFuZCByZXR1cm5zIHRoZSB2YWx1ZSBkaXJlY3RseS5cbiAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgZGVmaW5lZCwgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByYW5kb20gZGljZSB2YWx1ZXMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgRGllOiBmdW5jdGlvbiBEaWUoc3BvdHZhbHVlLCBkaWNlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChzcG90dmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzcG90dmFsdWUgPSA2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGljZUNvdW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKCkgKiBzcG90dmFsdWUpICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkobmV3IEFycmF5KGRpY2VDb3VudCkua2V5cygpKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogc3BvdHZhbHVlKSArIDE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIE51bWJlcjogZnVuY3Rpb24gTnVtYmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbSgpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTaHVmZmxlIGFuIGFycmF5LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGVjayAtIFRoZSBhcnJheSB0byBzaHVmZmxlLiBEb2VzIG5vdCBtdXRhdGVcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgdGhlIGlucHV0LCBidXQgcmV0dXJucyB0aGUgc2h1ZmZsZWQgYXJyYXkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgU2h1ZmZsZTogZnVuY3Rpb24gU2h1ZmZsZShkZWNrKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSBkZWNrLnNsaWNlKDApO1xuICAgICAgICAgICAgdmFyIHNyY0luZGV4ID0gZGVjay5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZHN0SW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIHNodWZmbGVkID0gbmV3IEFycmF5KHNyY0luZGV4KTtcblxuICAgICAgICAgICAgd2hpbGUgKHNyY0luZGV4KSB7XG4gICAgICAgICAgICAgIHZhciByYW5kSW5kZXggPSBzcmNJbmRleCAqIHJhbmRvbSgpIHwgMDtcbiAgICAgICAgICAgICAgc2h1ZmZsZWRbZHN0SW5kZXgrK10gPSBjbG9uZVtyYW5kSW5kZXhdO1xuICAgICAgICAgICAgICBjbG9uZVtyYW5kSW5kZXhdID0gY2xvbmVbLS1zcmNJbmRleF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYW5kb207XG4gIH0oKTtcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGF0dGFjaGVkIFJhbmRvbSBhcGkgZnJvbSBjdHguXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdCB3aXRoIHRoZSBSYW5kb20gQVBJIGF0dGFjaGVkLlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBIHBsYWluIGN0eCBvYmplY3Qgd2l0aG91dCB0aGUgUmFuZG9tIEFQSS5cbiAgICovXG5cbiAgUmFuZG9tLmRldGFjaCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICB2YXIgcmFuZG9tID0gY3R4LnJhbmRvbSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhjdHgsIFtcInJhbmRvbVwiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH07XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBuZXcgc2VlZCBmcm9tIHRoZSBjdXJyZW50IGRhdGUgLyB0aW1lLlxuICAgKi9cblxuXG4gIFJhbmRvbS5zZWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkpLnRvU3RyaW5nKDM2KS5zbGljZSgtMTApO1xuICB9O1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICAvKipcbiAgICogR2VuZXJhdGUgYSBtb3ZlIHRvIGJlIGRpc3BhdGNoZWQgdG8gdGhlIGdhbWUgbW92ZSByZWR1Y2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBtb3ZlIHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBtYWtlTW92ZSA9IGZ1bmN0aW9uIG1ha2VNb3ZlKHR5cGUsIGFyZ3MsIHBsYXllcklELCBjcmVkZW50aWFscykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBNQUtFX01PVkUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgZ2FtZSBldmVudCB0byBiZSBkaXNwYXRjaGVkIHRvIHRoZSBmbG93IHJlZHVjZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBnYW1lRXZlbnQgPSBmdW5jdGlvbiBnYW1lRXZlbnQodHlwZSwgYXJncywgcGxheWVySUQsIGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEdBTUVfRVZFTlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEdlbmVyYXRlIGFuIGF1dG9tYXRpYyBnYW1lIGV2ZW50IHRoYXQgaXMgYSBzaWRlLWVmZmVjdCBvZiBhIG1vdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBhdXRvbWF0aWNHYW1lRXZlbnQgPSBmdW5jdGlvbiBhdXRvbWF0aWNHYW1lRXZlbnQodHlwZSwgYXJncywgcGxheWVySUQsIGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEdBTUVfRVZFTlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9LFxuICAgICAgYXV0b21hdGljOiB0cnVlXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRXZlbnRzXG4gICAqL1xuXG4gIHZhciBFdmVudHMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudHMoZmxvdywgcGxheWVySUQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHMpO1xuXG4gICAgICB0aGlzLmZsb3cgPSBmbG93O1xuICAgICAgdGhpcy5wbGF5ZXJJRCA9IHBsYXllcklEO1xuICAgICAgdGhpcy5kaXNwYXRjaCA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgRXZlbnRzIEFQSSB0byBjdHguXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGF0dGFjaCB0by5cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50cywgW3tcbiAgICAgIGtleTogXCJhdHRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdHRhY2goY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IHt9O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgZXZlbnRzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpcy5kaXNwYXRjaC5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5mbG93LmV2ZW50TmFtZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBjdHgsIHtcbiAgICAgICAgICBldmVudHM6IGV2ZW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlcyBjdHggd2l0aCB0aGUgdHJpZ2dlcmVkIGV2ZW50cy5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIFRoZSBzdGF0ZSBvYmplY3QgeyBHLCBjdHggfS5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMShzdGF0ZSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5kaXNwYXRjaFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXV0b21hdGljR2FtZUV2ZW50KGl0ZW0ua2V5LCBpdGVtLmFyZ3MsIHRoaXMucGxheWVySUQpO1xuICAgICAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwgdGhpcy5mbG93LnByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50cztcbiAgfSgpO1xuICAvKipcbiAgICogRGV0YWNoZXMgdGhlIEV2ZW50cyBBUEkgZnJvbSBjdHguXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdCB0byBzdHJpcC5cbiAgICovXG5cbiAgRXZlbnRzLmRldGFjaCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICB2YXIgZXZlbnRzID0gY3R4LmV2ZW50cyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhjdHgsIFtcImV2ZW50c1wiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH07XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG5cbiAgLyoqXG4gICAqIE1vdmVzIGNhbiByZXR1cm4gdGhpcyB3aGVuIHRoZXkgd2FudCB0byBpbmRpY2F0ZVxuICAgKiB0aGF0IHRoZSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgaXMgaWxsZWdhbCBhbmRcbiAgICogdGhlIG1vdmUgb3VnaHQgdG8gYmUgZGlzY2FyZGVkLlxuICAgKi9cblxuICB2YXIgSU5WQUxJRF9NT1ZFID0gJ0lOVkFMSURfTU9WRSc7XG4gIC8qKlxuICAgKiBDb250ZXh0IEFQSSB0byBhbGxvdyB3cml0aW5nIGN1c3RvbSBsb2dzIGluIGdhbWVzLlxuICAgKi9cblxuICB2YXIgR2FtZUxvZ2dlckN0eEFQSSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVMb2dnZXJDdHhBUEkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvZ2dlckN0eEFQSSk7XG5cbiAgICAgIHRoaXMuX3BheWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdhbWVMb2dnZXJDdHhBUEksIFt7XG4gICAgICBrZXk6IFwiX2FwaVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcGkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZXRQYXlsb2FkOiBmdW5jdGlvbiBzZXRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAgICAgICAgIF90aGlzLl9wYXlsb2FkID0gcGF5bG9hZDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImF0dGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaChjdHgkJDEpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgIGxvZzogdGhpcy5fYXBpKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fcGF5bG9hZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9IC8vIGF0dGFjaCB0aGUgcGF5bG9hZCB0byB0aGUgbGFzdCBsb2cgZXZlbnRcblxuXG4gICAgICAgIHZhciBkZWx0YWxvZyA9IHN0YXRlLmRlbHRhbG9nO1xuICAgICAgICBkZWx0YWxvZ1tkZWx0YWxvZy5sZW5ndGggLSAxXSA9IF9vYmplY3RTcHJlYWQoe30sIGRlbHRhbG9nW2RlbHRhbG9nLmxlbmd0aCAtIDFdLCB7XG4gICAgICAgICAgcGF5bG9hZDogdGhpcy5fcGF5bG9hZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGVsdGFsb2c6IGRlbHRhbG9nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImRldGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGxvZyA9IGN0eCQkMS5sb2csXG4gICAgICAgICAgICBjdHhXaXRob3V0TG9nID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGN0eCQkMSwgW1wibG9nXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRMb2c7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdhbWVMb2dnZXJDdHhBUEk7XG4gIH0oKTtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBhdHRhY2gvZGV0YWNoIHZhcmlvdXMgdXRpbGl0eSBvYmplY3RzXG4gICAqIG9udG8gYSBjdHgsIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IGF0dGFjaC9kZXRhY2ggdGhlbVxuICAgKiBhbGwgc2VwYXJhdGVseS5cbiAgICovXG5cbiAgdmFyIENvbnRleHRFbmhhbmNlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHRFbmhhbmNlcihjdHgkJDEsIGdhbWUsIHBsYXllcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRFbmhhbmNlcik7XG5cbiAgICAgIHRoaXMucmFuZG9tID0gbmV3IFJhbmRvbShjdHgkJDEpO1xuICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKGdhbWUuZmxvdywgcGxheWVyKTtcbiAgICAgIHRoaXMubG9nID0gbmV3IEdhbWVMb2dnZXJDdHhBUEkoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udGV4dEVuaGFuY2VyLCBbe1xuICAgICAga2V5OiBcImF0dGFjaFRvQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaFRvQ29udGV4dChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGN0eFdpdGhBUEkgPSB0aGlzLnJhbmRvbS5hdHRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMuZXZlbnRzLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMubG9nLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhBUEk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKHN0YXRlLCB1cGRhdGVFdmVudHMpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdXBkYXRlRXZlbnRzID8gdGhpcy5ldmVudHMudXBkYXRlKHN0YXRlKSA6IHN0YXRlO1xuICAgICAgICBuZXdTdGF0ZSA9IHRoaXMucmFuZG9tLnVwZGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5sb2cudXBkYXRlKG5ld1N0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVBbmREZXRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVBbmREZXRhY2goc3RhdGUsIHVwZGF0ZUV2ZW50cykge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLl91cGRhdGUoc3RhdGUsIHVwZGF0ZUV2ZW50cyk7XG5cbiAgICAgICAgbmV3U3RhdGUuY3R4ID0gQ29udGV4dEVuaGFuY2VyLmRldGFjaEFsbEZyb21Db250ZXh0KG5ld1N0YXRlLmN0eCk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJkZXRhY2hBbGxGcm9tQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbEZyb21Db250ZXh0KGN0eCQkMSkge1xuICAgICAgICB2YXIgY3R4V2l0aG91dEFQSSA9IFJhbmRvbS5kZXRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aG91dEFQSSA9IEV2ZW50cy5kZXRhY2goY3R4V2l0aG91dEFQSSk7XG4gICAgICAgIGN0eFdpdGhvdXRBUEkgPSBHYW1lTG9nZ2VyQ3R4QVBJLmRldGFjaChjdHhXaXRob3V0QVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRBUEk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbnRleHRFbmhhbmNlcjtcbiAgfSgpO1xuICAvKipcbiAgICogQ3JlYXRlR2FtZVJlZHVjZXJcbiAgICpcbiAgICogQ3JlYXRlcyB0aGUgbWFpbiBnYW1lIHN0YXRlIHJlZHVjZXIuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBnYW1lIC0gUmV0dXJuIHZhbHVlIG9mIEdhbWUoKS5cbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IG51bVBsYXllcnMgLSBUaGUgbnVtYmVyIG9mIHBsYXllcnMuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBtdWx0aXBsYXllciAtIFNldCB0byB0cnVlIGlmIHdlIGFyZSBpbiBhIG11bHRpcGxheWVyIGNsaWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gQ3JlYXRlR2FtZVJlZHVjZXIoX3JlZjIpIHtcbiAgICB2YXIgZ2FtZSA9IF9yZWYyLmdhbWUsXG4gICAgICAgIG11bHRpcGxheWVyID0gX3JlZjIubXVsdGlwbGF5ZXI7XG5cbiAgICAvKipcbiAgICAgKiBHYW1lUmVkdWNlclxuICAgICAqXG4gICAgICogUmVkdXggcmVkdWNlciB0aGF0IG1haW50YWlucyB0aGUgb3ZlcmFsbCBnYW1lIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIFRoZSBzdGF0ZSBiZWZvcmUgdGhlIGFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIC0gQSBSZWR1eCBhY3Rpb24uXG4gICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEdBTUVfRVZFTlQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBkZWx0YWxvZzogW11cbiAgICAgICAgICAgIH0pOyAvLyBQcm9jZXNzIGdhbWUgZXZlbnRzIG9ubHkgb24gdGhlIHNlcnZlci5cbiAgICAgICAgICAgIC8vIFRoZXNlIGV2ZW50cyBsaWtlIGBlbmRUdXJuYCB0eXBpY2FsbHlcbiAgICAgICAgICAgIC8vIGNvbnRhaW4gY29kZSB0aGF0IG1heSByZWx5IG9uIHNlY3JldCBzdGF0ZVxuICAgICAgICAgICAgLy8gYW5kIGNhbm5vdCBiZSBjb21wdXRlZCBvbiB0aGUgY2xpZW50LlxuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfSAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIHRoZSBwbGF5ZXIgaXNuJ3QgYWxsb3dlZCB0byBtYWtlIGl0LlxuXG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gbnVsbCAmJiBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gdW5kZWZpbmVkICYmICFnYW1lLmZsb3cuY2FuUGxheWVyQ2FsbEV2ZW50KHN0YXRlLkcsIHN0YXRlLmN0eCwgYWN0aW9uLnBheWxvYWQucGxheWVySUQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFwaUN0eCA9IG5ldyBDb250ZXh0RW5oYW5jZXIoc3RhdGUuY3R4LCBnYW1lLCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCk7XG4gICAgICAgICAgICBzdGF0ZS5jdHggPSBhcGlDdHguYXR0YWNoVG9Db250ZXh0KHN0YXRlLmN0eCk7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSBnYW1lLmZsb3cucHJvY2Vzc0dhbWVFdmVudChzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIG5ld1N0YXRlID0gYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChuZXdTdGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbmV3U3RhdGUsIHtcbiAgICAgICAgICAgICAgX3N0YXRlSUQ6IHN0YXRlLl9zdGF0ZUlEICsgMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTUFLRV9NT1ZFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgZGVsdGFsb2c6IFtdXG4gICAgICAgICAgICB9KTsgLy8gQ2hlY2sgd2hldGhlciB0aGUgZ2FtZSBrbm93cyB0aGUgbW92ZSBhdCBhbGwuXG5cbiAgICAgICAgICAgIGlmICghZ2FtZS5tb3ZlTmFtZXMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQudHlwZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfSAvLyBJZ25vcmUgdGhlIG1vdmUgaWYgaXQgaXNuJ3QgYWxsb3dlZCBhdCB0aGlzIHBvaW50LlxuXG5cbiAgICAgICAgICAgIGlmICghZ2FtZS5mbG93LmNhbk1ha2VNb3ZlKHN0YXRlLkcsIHN0YXRlLmN0eCwgYWN0aW9uLnBheWxvYWQudHlwZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfSAvLyBJZ25vcmUgdGhlIG1vdmUgaWYgdGhlIHBsYXllciBpc24ndCBhbGxvd2VkIHRvIG1ha2UgaXQuXG5cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnBsYXllcklEICE9PSBudWxsICYmIGFjdGlvbi5wYXlsb2FkLnBsYXllcklEICE9PSB1bmRlZmluZWQgJiYgIWdhbWUuZmxvdy5jYW5QbGF5ZXJNYWtlTW92ZShzdGF0ZS5HLCBzdGF0ZS5jdHgsIGFjdGlvbi5wYXlsb2FkLnBsYXllcklEKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfYXBpQ3R4ID0gbmV3IENvbnRleHRFbmhhbmNlcihzdGF0ZS5jdHgsIGdhbWUsIGFjdGlvbi5wYXlsb2FkLnBsYXllcklEKTtcblxuICAgICAgICAgICAgdmFyIGN0eFdpdGhBUEkgPSBfYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChzdGF0ZS5jdHgpOyAvLyBQcm9jZXNzIHRoZSBtb3ZlLlxuXG5cbiAgICAgICAgICAgIHZhciBHJCQxID0gZ2FtZS5wcm9jZXNzTW92ZShzdGF0ZS5HLCBhY3Rpb24ucGF5bG9hZCwgY3R4V2l0aEFQSSk7XG5cbiAgICAgICAgICAgIGlmIChHJCQxID09PSBJTlZBTElEX01PVkUpIHtcbiAgICAgICAgICAgICAgLy8gdGhlIGdhbWUgZGVjbGFyZWQgdGhlIG1vdmUgYXMgaW52YWxpZC5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfSAvLyBDcmVhdGUgYSBsb2cgZW50cnkgZm9yIHRoaXMgbW92ZS5cblxuXG4gICAgICAgICAgICB2YXIgbG9nRW50cnkgPSB7XG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICBfc3RhdGVJRDogc3RhdGUuX3N0YXRlSUQsXG4gICAgICAgICAgICAgIHR1cm46IHN0YXRlLmN0eC50dXJuLFxuICAgICAgICAgICAgICBwaGFzZTogc3RhdGUuY3R4LnBoYXNlXG4gICAgICAgICAgICB9OyAvLyBkb24ndCBjYWxsIGludG8gZXZlbnRzIGhlcmVcblxuICAgICAgICAgICAgdmFyIF9uZXdTdGF0ZSA9IF9hcGlDdHgudXBkYXRlQW5kRGV0YWNoKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIGRlbHRhbG9nOiBbbG9nRW50cnldXG4gICAgICAgICAgICB9KSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgY3R4JCQxID0gX25ld1N0YXRlLmN0eDsgLy8gVW5kbyBjaGFuZ2VzIHRvIEcgaWYgdGhlIG1vdmUgc2hvdWxkIG5vdCBydW4gb24gdGhlIGNsaWVudC5cblxuICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyICYmICFnYW1lLmZsb3cub3B0aW1pc3RpY1VwZGF0ZShHJCQxLCBjdHgkJDEsIGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICAgICAgICBHJCQxID0gc3RhdGUuRztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBfbmV3U3RhdGUsIHtcbiAgICAgICAgICAgICAgRzogRyQkMSxcbiAgICAgICAgICAgICAgY3R4OiBjdHgkJDEsXG4gICAgICAgICAgICAgIF9zdGF0ZUlEOiBzdGF0ZS5fc3RhdGVJRCArIDFcbiAgICAgICAgICAgIH0pOyAvLyBJZiB3ZSdyZSBvbiB0aGUgY2xpZW50LCBqdXN0IHByb2Nlc3MgdGhlIG1vdmVcbiAgICAgICAgICAgIC8vIGFuZCBubyB0cmlnZ2VycyBpbiBtdWx0aXBsYXllciBtb2RlLlxuICAgICAgICAgICAgLy8gVGhlc2Ugd2lsbCBiZSBwcm9jZXNzZWQgb24gdGhlIHNlcnZlciwgd2hpY2hcbiAgICAgICAgICAgIC8vIHdpbGwgc2VuZCBiYWNrIGEgc3RhdGUgdXBkYXRlLlxuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfSAvLyBBbGxvdyB0aGUgZmxvdyByZWR1Y2VyIHRvIHByb2Nlc3MgYW55IHRyaWdnZXJzIHRoYXQgaGFwcGVuIGFmdGVyIG1vdmVzLlxuXG5cbiAgICAgICAgICAgIGN0eFdpdGhBUEkgPSBfYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChzdGF0ZS5jdHgpO1xuICAgICAgICAgICAgc3RhdGUgPSBnYW1lLmZsb3cucHJvY2Vzc01vdmUoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgY3R4OiBjdHhXaXRoQVBJXG4gICAgICAgICAgICB9KSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgc3RhdGUgPSBfYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChzdGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzdGF0ZS5fdW5kb1tzdGF0ZS5fdW5kby5sZW5ndGggLSAxXS5jdHggPSBzdGF0ZS5jdHg7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUkVTRVQ6XG4gICAgICAgIGNhc2UgVVBEQVRFOlxuICAgICAgICBjYXNlIFNZTkM6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5zdGF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBVTkRPOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSBzdGF0ZSxcbiAgICAgICAgICAgICAgICBfdW5kbyA9IF9zdGF0ZS5fdW5kbyxcbiAgICAgICAgICAgICAgICBfcmVkbyA9IF9zdGF0ZS5fcmVkbztcblxuICAgICAgICAgICAgaWYgKF91bmRvLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFzdCA9IF91bmRvW191bmRvLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIHJlc3RvcmUgPSBfdW5kb1tfdW5kby5sZW5ndGggLSAyXTsgLy8gT25seSBhbGxvdyB1bmRvYWJsZSBtb3ZlcyB0byBiZSB1bmRvbmUuXG5cbiAgICAgICAgICAgIGlmICghZ2FtZS5mbG93LmNhblVuZG9Nb3ZlKHN0YXRlLkcsIHN0YXRlLmN0eCwgbGFzdC5tb3ZlVHlwZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgRzogcmVzdG9yZS5HLFxuICAgICAgICAgICAgICBjdHg6IHJlc3RvcmUuY3R4LFxuICAgICAgICAgICAgICBfdW5kbzogX3VuZG8uc2xpY2UoMCwgX3VuZG8ubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICAgIF9yZWRvOiBbbGFzdF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfcmVkbykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRURPOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUyID0gc3RhdGUsXG4gICAgICAgICAgICAgICAgX3VuZG8yID0gX3N0YXRlMi5fdW5kbyxcbiAgICAgICAgICAgICAgICBfcmVkbzIgPSBfc3RhdGUyLl9yZWRvO1xuXG4gICAgICAgICAgICBpZiAoX3JlZG8yLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gX3JlZG8yWzBdO1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIEc6IGZpcnN0LkcsXG4gICAgICAgICAgICAgIGN0eDogZmlyc3QuY3R4LFxuICAgICAgICAgICAgICBfdW5kbzogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdW5kbzIpLCBbZmlyc3RdKSxcbiAgICAgICAgICAgICAgX3JlZG86IF9yZWRvMi5zbGljZSgxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIEJvdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvdChfcmVmMikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGVudW1lcmF0ZSA9IF9yZWYyLmVudW1lcmF0ZSxcbiAgICAgICAgICBzZWVkID0gX3JlZjIuc2VlZDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvdCk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVudW1lcmF0ZVwiLCBmdW5jdGlvbiAoRywgY3R4LCBwbGF5ZXJJRCkge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IF90aGlzLmVudW1lcmF0ZUZuKEcsIGN0eCwgcGxheWVySUQpO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhLnBheWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGEubW92ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZU1vdmUoYS5tb3ZlLCBhLmFyZ3MsIHBsYXllcklEKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYS5ldmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZUV2ZW50KGEuZXZlbnQsIGEuYXJncywgcGxheWVySUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbnVtZXJhdGVGbiA9IGVudW1lcmF0ZTtcbiAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJvdCwgW3tcbiAgICAgIGtleTogXCJyYW5kb21cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByYW5kb20oYXJnKSB7XG4gICAgICAgIHZhciBudW1iZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHIgPSBudWxsO1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJuZ3N0YXRlKSB7XG4gICAgICAgICAgICByID0gbmV3IGFsZWEoJycsIHtcbiAgICAgICAgICAgICAgc3RhdGU6IHRoaXMucHJuZ3N0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IG5ldyBhbGVhKHRoaXMuc2VlZCwge1xuICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbnVtYmVyID0gcigpO1xuICAgICAgICAgIHRoaXMucHJuZ3N0YXRlID0gci5zdGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vZXhwbGljaXQtbGVuZ3RoLWNoZWNrXG4gICAgICAgICAgaWYgKGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IE1hdGguZmxvb3IobnVtYmVyICogYXJnLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gYXJnW2lkXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyICogYXJnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb3Q7XG4gIH0oKTtcbiAgdmFyIFJhbmRvbUJvdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Cb3QpIHtcbiAgICBfaW5oZXJpdHMoUmFuZG9tQm90LCBfQm90KTtcblxuICAgIGZ1bmN0aW9uIFJhbmRvbUJvdCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5kb21Cb3QpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFJhbmRvbUJvdCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJhbmRvbUJvdCwgW3tcbiAgICAgIGtleTogXCJwbGF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheShfcmVmMywgcGxheWVySUQpIHtcbiAgICAgICAgdmFyIEcgPSBfcmVmMy5HLFxuICAgICAgICAgICAgY3R4ID0gX3JlZjMuY3R4O1xuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLmVudW1lcmF0ZShHLCBjdHgsIHBsYXllcklEKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IHRoaXMucmFuZG9tKG1vdmVzKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYW5kb21Cb3Q7XG4gIH0oQm90KTtcbiAgdmFyIE1DVFNCb3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQm90Mikge1xuICAgIF9pbmhlcml0cyhNQ1RTQm90LCBfQm90Mik7XG5cbiAgICBmdW5jdGlvbiBNQ1RTQm90KF9yZWY0KSB7XG4gICAgICB2YXIgX3RoaXMyO1xuXG4gICAgICB2YXIgZW51bWVyYXRlID0gX3JlZjQuZW51bWVyYXRlLFxuICAgICAgICAgIHNlZWQgPSBfcmVmNC5zZWVkLFxuICAgICAgICAgIG9iamVjdGl2ZXMgPSBfcmVmNC5vYmplY3RpdmVzLFxuICAgICAgICAgIGdhbWUgPSBfcmVmNC5nYW1lLFxuICAgICAgICAgIGl0ZXJhdGlvbnMgPSBfcmVmNC5pdGVyYXRpb25zLFxuICAgICAgICAgIHBsYXlvdXREZXB0aCA9IF9yZWY0LnBsYXlvdXREZXB0aDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1DVFNCb3QpO1xuXG4gICAgICBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTUNUU0JvdCkuY2FsbCh0aGlzLCB7XG4gICAgICAgIGVudW1lcmF0ZTogZW51bWVyYXRlLFxuICAgICAgICBzZWVkOiBzZWVkXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChvYmplY3RpdmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2JqZWN0aXZlcyA9IGZ1bmN0aW9uIG9iamVjdGl2ZXMoKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfdGhpczIub2JqZWN0aXZlcyA9IG9iamVjdGl2ZXM7XG4gICAgICBfdGhpczIucmVkdWNlciA9IENyZWF0ZUdhbWVSZWR1Y2VyKHtcbiAgICAgICAgZ2FtZTogZ2FtZVxuICAgICAgfSk7XG4gICAgICBfdGhpczIuaXRlcmF0aW9ucyA9IGl0ZXJhdGlvbnMgfHwgMTAwMDtcbiAgICAgIF90aGlzMi5wbGF5b3V0RGVwdGggPSBwbGF5b3V0RGVwdGggfHwgNTA7XG4gICAgICByZXR1cm4gX3RoaXMyO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNQ1RTQm90LCBbe1xuICAgICAga2V5OiBcImNyZWF0ZU5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVOb2RlKF9yZWY1KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgICAgICAgcGFyZW50QWN0aW9uID0gX3JlZjUucGFyZW50QWN0aW9uLFxuICAgICAgICAgICAgcGFyZW50ID0gX3JlZjUucGFyZW50LFxuICAgICAgICAgICAgcGxheWVySUQgPSBfcmVmNS5wbGF5ZXJJRDtcbiAgICAgICAgdmFyIEcgPSBzdGF0ZS5HLFxuICAgICAgICAgICAgY3R4ID0gc3RhdGUuY3R4O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgb2JqZWN0aXZlcyA9IFtdO1xuXG4gICAgICAgIGlmIChwbGF5ZXJJRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWN0aW9ucyA9IHRoaXMuZW51bWVyYXRlKEcsIGN0eCwgcGxheWVySUQpO1xuICAgICAgICAgIG9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMoRywgY3R4LCBwbGF5ZXJJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjdHguYWN0aW9uUGxheWVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIF9wbGF5ZXJJRCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBhY3Rpb25zID0gYWN0aW9ucy5jb25jYXQodGhpcy5lbnVtZXJhdGUoRywgY3R4LCBfcGxheWVySUQpKTtcbiAgICAgICAgICAgICAgb2JqZWN0aXZlcyA9IG9iamVjdGl2ZXMuY29uY2F0KHRoaXMub2JqZWN0aXZlcyhHLCBjdHgsIF9wbGF5ZXJJRCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAvLyBHYW1lIHN0YXRlIGF0IHRoaXMgbm9kZS5cbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgLy8gUGFyZW50IG9mIHRoZSBub2RlLlxuICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgIC8vIE1vdmUgdXNlZCB0byBnZXQgdG8gdGhpcyBub2RlLlxuICAgICAgICAgIHBhcmVudEFjdGlvbjogcGFyZW50QWN0aW9uLFxuICAgICAgICAgIC8vIFVuZXhwbG9yZWQgYWN0aW9ucy5cbiAgICAgICAgICBhY3Rpb25zOiBhY3Rpb25zLFxuICAgICAgICAgIC8vIEN1cnJlbnQgb2JqZWN0aXZlcy5cbiAgICAgICAgICBvYmplY3RpdmVzOiBvYmplY3RpdmVzLFxuICAgICAgICAgIC8vIENoaWxkcmVuIG9mIHRoZSBub2RlLlxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAvLyBOdW1iZXIgb2Ygc2ltdWxhdGlvbnMgdGhhdCBwYXNzIHRocm91Z2ggdGhpcyBub2RlLlxuICAgICAgICAgIHZpc2l0czogMCxcbiAgICAgICAgICAvLyBOdW1iZXIgb2Ygd2lucyBmb3IgdGhpcyBub2RlLlxuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNlbGVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChub2RlKSB7XG4gICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgdW52aXNpdGVkIGNoaWxkcmVuLlxuICAgICAgICBpZiAobm9kZS5hY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSAvLyBUaGlzIGlzIGEgdGVybWluYWwgbm9kZS5cblxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0ZWRDaGlsZCA9IG51bGw7XG4gICAgICAgIHZhciBiZXN0ID0gMC4wO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gbm9kZS5jaGlsZHJlbltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNoaWxkVmlzaXRzID0gY2hpbGQudmlzaXRzICsgTnVtYmVyLkVQU0lMT047XG4gICAgICAgICAgICB2YXIgdWN0ID0gY2hpbGQudmFsdWUgLyBjaGlsZFZpc2l0cyArIE1hdGguc3FydCgyICogTWF0aC5sb2cobm9kZS52aXNpdHMpIC8gY2hpbGRWaXNpdHMpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZCA9PSBudWxsIHx8IHVjdCA+IGJlc3QpIHtcbiAgICAgICAgICAgICAgYmVzdCA9IHVjdDtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRDaGlsZCA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Qoc2VsZWN0ZWRDaGlsZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImV4cGFuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4cGFuZChub2RlKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gbm9kZS5hY3Rpb25zO1xuXG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PSAwIHx8IG5vZGUuc3RhdGUuY3R4LmdhbWVvdmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZCA9IHRoaXMucmFuZG9tKGFjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbnNbaWRdO1xuICAgICAgICBub2RlLmFjdGlvbnMuc3BsaWNlKGlkLCAxKTtcbiAgICAgICAgdmFyIGNoaWxkU3RhdGUgPSB0aGlzLnJlZHVjZXIobm9kZS5zdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgdmFyIGNoaWxkTm9kZSA9IHRoaXMuY3JlYXRlTm9kZSh7XG4gICAgICAgICAgc3RhdGU6IGNoaWxkU3RhdGUsXG4gICAgICAgICAgcGFyZW50QWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgcGFyZW50OiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicGxheW91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlvdXQobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgc3RhdGUgPSBub2RlLnN0YXRlO1xuXG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgICB2YXIgX3N0YXRlID0gc3RhdGUsXG4gICAgICAgICAgICAgIEcgPSBfc3RhdGUuRyxcbiAgICAgICAgICAgICAgY3R4ID0gX3N0YXRlLmN0eDtcblxuICAgICAgICAgIHZhciBtb3ZlcyA9IF90aGlzMy5lbnVtZXJhdGUoRywgY3R4LCBjdHguYWN0aW9uUGxheWVyc1swXSk7IC8vIENoZWNrIGlmIGFueSBvYmplY3RpdmVzIGFyZSBtZXQuXG5cblxuICAgICAgICAgIHZhciBvYmplY3RpdmVzID0gX3RoaXMzLm9iamVjdGl2ZXMoRywgY3R4KTtcblxuICAgICAgICAgIHZhciBzY29yZSA9IE9iamVjdC5rZXlzKG9iamVjdGl2ZXMpLnJlZHVjZShmdW5jdGlvbiAoc2NvcmUsIGtleSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdGl2ZSA9IG9iamVjdGl2ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKG9iamVjdGl2ZS5jaGVja2VyKEcsIGN0eCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjb3JlICsgb2JqZWN0aXZlLndlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgICAgICAgIH0sIDAuMCk7IC8vIElmIHNvLCBzdG9wIGFuZCByZXR1cm4gdGhlIHNjb3JlLlxuXG4gICAgICAgICAgaWYgKHNjb3JlID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdjoge1xuICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbW92ZXMgfHwgbW92ZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHY6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaWQgPSBfdGhpczMucmFuZG9tKG1vdmVzLmxlbmd0aCk7XG5cbiAgICAgICAgICB2YXIgY2hpbGRTdGF0ZSA9IF90aGlzMy5yZWR1Y2VyKHN0YXRlLCBtb3Zlc1tpZF0pO1xuXG4gICAgICAgICAgc3RhdGUgPSBjaGlsZFN0YXRlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5b3V0RGVwdGggJiYgc3RhdGUuY3R4LmdhbWVvdmVyID09PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgIHZhciBfcmV0ID0gX2xvb3AoaSk7XG5cbiAgICAgICAgICBpZiAoX3R5cGVvZihfcmV0KSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZS5jdHguZ2FtZW92ZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJhY2twcm9wYWdhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrcHJvcGFnYXRlKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIG5vZGUudmlzaXRzKys7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zY29yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbm9kZS52YWx1ZSArPSByZXN1bHQuc2NvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmRyYXcgPT09IHRydWUpIHtcbiAgICAgICAgICBub2RlLnZhbHVlICs9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnBhcmVudEFjdGlvbiAmJiByZXN1bHQud2lubmVyID09PSBub2RlLnBhcmVudEFjdGlvbi5wYXlsb2FkLnBsYXllcklEKSB7XG4gICAgICAgICAgbm9kZS52YWx1ZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5iYWNrcHJvcGFnYXRlKG5vZGUucGFyZW50LCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInBsYXlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KHN0YXRlLCBwbGF5ZXJJRCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlTm9kZSh7XG4gICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNlbGVjdChyb290KTtcbiAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmV4cGFuZChsZWFmKTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5wbGF5b3V0KGNoaWxkKTtcbiAgICAgICAgICB0aGlzLmJhY2twcm9wYWdhdGUoY2hpbGQsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0ZWRDaGlsZCA9IG51bGw7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSByb290LmNoaWxkcmVuW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2NoaWxkID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRDaGlsZCA9PSBudWxsIHx8IF9jaGlsZC52aXNpdHMgPiBzZWxlY3RlZENoaWxkLnZpc2l0cykge1xuICAgICAgICAgICAgICBzZWxlY3RlZENoaWxkID0gX2NoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9uID0gc2VsZWN0ZWRDaGlsZCAmJiBzZWxlY3RlZENoaWxkLnBhcmVudEFjdGlvbjtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gcm9vdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTUNUU0JvdDtcbiAgfShCb3QpO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICBmdW5jdGlvbiBBSShfcmVmKSB7XG4gICAgdmFyIGJvdCA9IF9yZWYuYm90LFxuICAgICAgICBlbnVtZXJhdGUgPSBfcmVmLmVudW1lcmF0ZSxcbiAgICAgICAgdmlzdWFsaXplID0gX3JlZi52aXN1YWxpemU7XG5cbiAgICBpZiAoIWJvdCkge1xuICAgICAgYm90ID0gTUNUU0JvdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm90OiBib3QsXG4gICAgICBlbnVtZXJhdGU6IGVudW1lcmF0ZSxcbiAgICAgIHZpc3VhbGl6ZTogdmlzdWFsaXplXG4gICAgfTtcbiAgfVxuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuXG4gIGV4cG9ydHMuQUkgPSBBSTtcbiAgZXhwb3J0cy5SYW5kb21Cb3QgPSBSYW5kb21Cb3Q7XG4gIGV4cG9ydHMuTUNUU0JvdCA9IE1DVFNCb3Q7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdpbW1lcicpLCByZXF1aXJlKCdmbGF0dGVkJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdpbW1lcicsICdmbGF0dGVkJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5Db3JlID0ge30sIGdsb2JhbC5pbW1lciwgZ2xvYmFsLkZsYXR0ZWQpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIHByb2R1Y2UsIGZsYXR0ZWQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHByb2R1Y2UgPSBwcm9kdWNlICYmIHByb2R1Y2UuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IHByb2R1Y2VbJ2RlZmF1bHQnXSA6IHByb2R1Y2U7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgICB2YXIga2V5LCBpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgLyoqXG4gICAqIFBsdWdpbiB0aGF0IGFsbG93cyB1c2luZyBJbW1lciB0byBtYWtlIGltbXV0YWJsZSBjaGFuZ2VzXG4gICAqIHRvIEcgYnkganVzdCBtdXRhdGluZyBpdC5cbiAgICovXG5cbiAgdmFyIFBsdWdpbkltbWVyID0ge1xuICAgIGZuV3JhcDogZnVuY3Rpb24gZm5XcmFwKG1vdmUpIHtcbiAgICAgIHJldHVybiBwcm9kdWNlKG1vdmUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTGlzdCBvZiBwbHVnaW5zIHRoYXQgYXJlIGFsd2F5cyBhZGRlZC5cbiAgICovXG5cbiAgdmFyIERFRkFVTFRfUExVR0lOUyA9IFtQbHVnaW5JbW1lcl07XG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBwcm92aWRlZCBwbHVnaW5zIHRvIGN0eCBiZWZvcmUgcHJvY2Vzc2luZyBhIG1vdmUgLyBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZ2FtZSAtIFRoZSBnYW1lIG9iamVjdC5cbiAgICovXG5cbiAgdmFyIEN0eFByZU1vdmUgPSBmdW5jdGlvbiBDdHhQcmVNb3ZlKGN0eCwgZ2FtZSkge1xuICAgIFtdLmNvbmNhdChERUZBVUxUX1BMVUdJTlMsIF90b0NvbnN1bWFibGVBcnJheShnYW1lLnBsdWdpbnMpKS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcmV0dXJuIHBsdWdpbi5jdHggIT09IHVuZGVmaW5lZDtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcmV0dXJuIHBsdWdpbi5jdHgucHJlTW92ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgY3R4ID0gcGx1Z2luLmN0eC5wcmVNb3ZlKGN0eCwgZ2FtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGN0eDtcbiAgfTtcbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gRyBiZWZvcmUgcHJvY2Vzc2luZyBhIG1vdmUgLyBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IEcgLSBUaGUgRyBvYmplY3QuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgKi9cblxuXG4gIHZhciBHUHJlTW92ZSA9IGZ1bmN0aW9uIEdQcmVNb3ZlKEcsIGdhbWUpIHtcbiAgICBbXS5jb25jYXQoREVGQVVMVF9QTFVHSU5TLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2FtZS5wbHVnaW5zKSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiBwbHVnaW4uRyAhPT0gdW5kZWZpbmVkO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luLkcucHJlTW92ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgRyA9IHBsdWdpbi5HLnByZU1vdmUoRywgZ2FtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIEc7XG4gIH07XG4gIC8qKlxuICAgKiBQb3N0cHJvY2Vzc2VzIEcgYWZ0ZXIgYSBtb3ZlIC8gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBHIC0gVGhlIEcgb2JqZWN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZ2FtZSAtIFRoZSBnYW1lIG9iamVjdC5cbiAgICovXG5cblxuICB2YXIgR1Bvc3RNb3ZlID0gZnVuY3Rpb24gR1Bvc3RNb3ZlKEcsIGdhbWUpIHtcbiAgICBbXS5jb25jYXQoREVGQVVMVF9QTFVHSU5TLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2FtZS5wbHVnaW5zKSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiBwbHVnaW4uRyAhPT0gdW5kZWZpbmVkO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luLkcucG9zdE1vdmUgIT09IHVuZGVmaW5lZDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIEcgPSBwbHVnaW4uRy5wb3N0TW92ZShHLCBnYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gRztcbiAgfTtcbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gdGhlIGdpdmVuIG1vdmUgLyBmbG93IGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBtb3ZlIGZ1bmN0aW9uIG9yIHRyaWdnZXIgdG8gYXBwbHkgdGhlIHBsdWdpbnMgdG8uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgKi9cblxuXG4gIHZhciBGbldyYXAgPSBmdW5jdGlvbiBGbldyYXAoZm4sIGdhbWUpIHtcbiAgICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uIHJlZHVjZXIoYWNjLCBfcmVmKSB7XG4gICAgICB2YXIgZm5XcmFwID0gX3JlZi5mbldyYXA7XG4gICAgICByZXR1cm4gZm5XcmFwKGFjYywgZ2FtZSk7XG4gICAgfTtcblxuICAgIHZhciBnID0gW10uY29uY2F0KERFRkFVTFRfUExVR0lOUywgX3RvQ29uc3VtYWJsZUFycmF5KGdhbWUucGx1Z2lucykpLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luLmZuV3JhcCAhPT0gdW5kZWZpbmVkO1xuICAgIH0pLnJlZHVjZShyZWR1Y2VyLCBmbik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChHLCBjdHgpIHtcbiAgICAgIEcgPSBHUHJlTW92ZShHLCBnYW1lKTtcbiAgICAgIGN0eCA9IEN0eFByZU1vdmUoY3R4LCBnYW1lKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgRyA9IGcuYXBwbHkodm9pZCAwLCBbRywgY3R4XS5jb25jYXQoYXJncykpO1xuICAgICAgRyA9IEdQb3N0TW92ZShHLCBnYW1lKTtcbiAgICAgIHJldHVybiBHO1xuICAgIH07XG4gIH07XG4gIHZhciBHID0ge1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gRyBkdXJpbmcgZ2FtZSBzZXR1cC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBHIC0gVGhlIEcgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ2FtZSAtIFRoZSBnYW1lIG9iamVjdC5cbiAgICAgKi9cbiAgICBzZXR1cDogZnVuY3Rpb24gc2V0dXAoRywgY3R4LCBnYW1lKSB7XG4gICAgICBbXS5jb25jYXQoREVGQVVMVF9QTFVHSU5TLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2FtZS5wbHVnaW5zKSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5HICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLkcuc2V0dXAgIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICBHID0gcGx1Z2luLkcuc2V0dXAoRywgY3R4LCBnYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIEc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gRyBkdXJpbmcgdGhlIGJlZ2lubmluZyBvZiB0aGUgcGhhc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gRyAtIFRoZSBHIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdhbWUgLSBUaGUgZ2FtZSBvYmplY3QuXG4gICAgICovXG4gICAgb25QaGFzZUJlZ2luOiBmdW5jdGlvbiBvblBoYXNlQmVnaW4oRywgY3R4LCBnYW1lKSB7XG4gICAgICBbXS5jb25jYXQoREVGQVVMVF9QTFVHSU5TLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2FtZS5wbHVnaW5zKSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5HICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLkcub25QaGFzZUJlZ2luICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgRyA9IHBsdWdpbi5HLm9uUGhhc2VCZWdpbihHLCBjdHgsIGdhbWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gRztcbiAgICB9XG4gIH07XG4gIHZhciBjdHggPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgcHJvdmlkZWQgcGx1Z2lucyB0byBjdHggZHVyaW5nIGdhbWUgc2V0dXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdhbWUgLSBUaGUgZ2FtZSBvYmplY3QuXG4gICAgICovXG4gICAgc2V0dXA6IGZ1bmN0aW9uIHNldHVwKGN0eCwgZ2FtZSkge1xuICAgICAgW10uY29uY2F0KERFRkFVTFRfUExVR0lOUywgX3RvQ29uc3VtYWJsZUFycmF5KGdhbWUucGx1Z2lucykpLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4uY3R4ICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLmN0eC5zZXR1cCAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIGN0eCA9IHBsdWdpbi5jdHguc2V0dXAoY3R4LCBnYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGN0eDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgcHJvdmlkZWQgcGx1Z2lucyB0byBjdHggZHVyaW5nIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBoYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgICAqL1xuICAgIG9uUGhhc2VCZWdpbjogZnVuY3Rpb24gb25QaGFzZUJlZ2luKGN0eCwgZ2FtZSkge1xuICAgICAgW10uY29uY2F0KERFRkFVTFRfUExVR0lOUywgX3RvQ29uc3VtYWJsZUFycmF5KGdhbWUucGx1Z2lucykpLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4uY3R4ICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLmN0eC5vblBoYXNlQmVnaW4gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICBjdHggPSBwbHVnaW4uY3R4Lm9uUGhhc2VCZWdpbihjdHgsIGdhbWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY3R4O1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIERFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICd0ZXN0JztcbiAgdmFyIGxvZ2ZuID0gREVWID8gY29uc29sZS5sb2cgOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIGVycm9yZm4gPSBERVYgPyBjb25zb2xlLmVycm9yIDogZnVuY3Rpb24gKCkge307XG4gIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7XG4gICAgZXJyb3JmbignRVJST1I6JywgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YW5kYXJkIG1vdmUgdGhhdCBzaW11bGF0ZXMgcGFzc2luZy5cbiAgICpcbiAgICogQ3JlYXRlcyB0d28gb2JqZWN0cyBpbiBHOlxuICAgKiBwYXNzT3JkZXIgLSBBbiBhcnJheSBvZiBwbGF5ZXJJRHMgY2FwdHVyaW5nIHBhc3NlcyBpbiB0aGUgcGFzcyBvcmRlci5cbiAgICogYWxsUGFzc2VkIC0gU2V0IHRvIHRydWUgd2hlbiBhbGwgcGxheWVycyBoYXZlIHBhc3NlZC5cbiAgICovXG5cbiAgdmFyIFBhc3MgPSBmdW5jdGlvbiBQYXNzKEcsIGN0eCkge1xuICAgIHZhciBwYXNzT3JkZXIgPSBbXTtcblxuICAgIGlmIChHLnBhc3NPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXNzT3JkZXIgPSBHLnBhc3NPcmRlcjtcbiAgICB9XG5cbiAgICB2YXIgcGxheWVySUQgPSBjdHgucGxheWVySUQ7XG4gICAgcGFzc09yZGVyID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXNzT3JkZXIpLCBbcGxheWVySURdKTtcbiAgICBHID0gX29iamVjdFNwcmVhZCh7fSwgRywge1xuICAgICAgcGFzc09yZGVyOiBwYXNzT3JkZXJcbiAgICB9KTtcblxuICAgIGlmIChwYXNzT3JkZXIubGVuZ3RoID49IGN0eC5udW1QbGF5ZXJzKSB7XG4gICAgICBHID0gX29iamVjdFNwcmVhZCh7fSwgRywge1xuICAgICAgICBhbGxQYXNzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBHO1xuICB9O1xuICAvKipcbiAgICogRXZlbnQgdG8gY2hhbmdlIHRoZSBhY3Rpb25QbGF5ZXJzIGFycmF5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBUaGUgZ2FtZSBzdGF0ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZyAtIEFuIGFycmF5IG9mIHBsYXllcklEJ3Mgb3IgPG9iamVjdD4gb2Y6XG4gICAqICAge1xuICAgKiAgICAgdmFsdWU6IChHLCBjdHgpID0+IFtdLCAgICAgICAgLy8gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIHBsYXllcklEJ3MgKG9wdGlvbmFsIGlmIGFsbCBpcyBzZXQpXG4gICAqXG4gICAqICAgICBhbGw6IHRydWUsICAgICAgICAvLyBzZXQgdmFsdWUgdG8gYWxsIHBsYXllcklEJ3NcbiAgICpcbiAgICogICAgIG90aGVyczogdHJ1ZSwgICAgIC8vIHNldCB2YWx1ZSB0byBhbGwgZXhjZXB0IGN1cnJlbnRQbGF5ZXIuXG4gICAqXG4gICAqICAgICBvbmNlOiB0cnVlLCAgICAgICAvLyBwbGF5ZXJzIGhhdmUgb25lIG1vdmVcbiAgICogICAgICAgICAgICAgICAgICAgICAgIC8vIChhZnRlciB3aGljaCB0aGV5J3JlIHBydW5lZCBmcm9tIGFjdGlvblBsYXllcnMpLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHBoYXNlIGVuZHMgb25jZSBhY3Rpb25QbGF5ZXJzIGJlY29tZXMgZW1wdHkuXG4gICAqICAgfVxuICAgKi9cblxuICBmdW5jdGlvbiBTZXRBY3Rpb25QbGF5ZXJzRXZlbnQoc3RhdGUsIGFyZykge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgY3R4OiBzZXRBY3Rpb25QbGF5ZXJzKHN0YXRlLkcsIHN0YXRlLmN0eCwgYXJnKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aW9uUGxheWVycyhHLCBjdHgsIGFyZykge1xuICAgIHZhciBhY3Rpb25QbGF5ZXJzID0gW107XG5cbiAgICBpZiAoYXJnLnZhbHVlKSB7XG4gICAgICBhY3Rpb25QbGF5ZXJzID0gYXJnLnZhbHVlKEcsIGN0eCk7XG4gICAgfVxuXG4gICAgaWYgKGFyZy5hbGwpIHtcbiAgICAgIGFjdGlvblBsYXllcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoY3R4LnBsYXlPcmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGFyZy5vdGhlcnMpIHtcbiAgICAgIGFjdGlvblBsYXllcnMgPSBfdG9Db25zdW1hYmxlQXJyYXkoY3R4LnBsYXlPcmRlcikuZmlsdGVyKGZ1bmN0aW9uIChucikge1xuICAgICAgICByZXR1cm4gbnIgIT09IGN0eC5jdXJyZW50UGxheWVyO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgYWN0aW9uUGxheWVycyA9IGFyZztcbiAgICB9XG5cbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgY3R4LCB7XG4gICAgICBhY3Rpb25QbGF5ZXJzOiBhY3Rpb25QbGF5ZXJzLFxuICAgICAgX2FjdGlvblBsYXllcnNPbmNlOiBhcmcub25jZSB8fCBmYWxzZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHBsYXlPcmRlclBvcyBpbmRleCBpbnRvIGl0cyB2YWx1ZSBpbiBwbGF5T3JkZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBsYXlPcmRlciAtIEFuIGFycmF5IG9mIHBsYXllciBJRCdzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcGxheU9yZGVyUG9zIC0gQW4gaW5kZXggaW50byB0aGUgYWJvdmUuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcihwbGF5T3JkZXIsIHBsYXlPcmRlclBvcykge1xuICAgIHJldHVybiBwbGF5T3JkZXJbcGxheU9yZGVyUG9zXSArICcnO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgYXQgdGhlIHN0YXJ0IG9mIGEgcGhhc2UgdG8gaW5pdGlhbGl6ZSB0dXJuIG9yZGVyIHN0YXRlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gRyAtIFRoZSBnYW1lIG9iamVjdCBHLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGdhbWUgb2JqZWN0IGN0eC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHR1cm5PcmRlciAtIEEgdHVybiBvcmRlciBvYmplY3QgZm9yIHRoaXMgcGhhc2UuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gSW5pdFR1cm5PcmRlclN0YXRlKEcsIGN0eCwgdHVybk9yZGVyKSB7XG4gICAgdmFyIHBsYXlPcmRlciA9IF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkoY3R4Lm51bVBsYXllcnMpKS5tYXAoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgIHJldHVybiBpICsgJyc7XG4gICAgfSk7XG5cbiAgICBpZiAodHVybk9yZGVyLnBsYXlPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5T3JkZXIgPSB0dXJuT3JkZXIucGxheU9yZGVyKEcsIGN0eCk7XG4gICAgfVxuXG4gICAgdmFyIHBsYXlPcmRlclBvcyA9IHR1cm5PcmRlci5maXJzdChHLCBjdHgpO1xuICAgIHZhciBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcihwbGF5T3JkZXIsIHBsYXlPcmRlclBvcyk7XG5cbiAgICBpZiAodHVybk9yZGVyLmFjdGlvblBsYXllcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY3R4ID0gc2V0QWN0aW9uUGxheWVycyhHLCBjdHgsIHR1cm5PcmRlci5hY3Rpb25QbGF5ZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4ID0gX29iamVjdFNwcmVhZCh7fSwgY3R4LCB7XG4gICAgICAgIGFjdGlvblBsYXllcnM6IFtjdXJyZW50UGxheWVyXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgY3VycmVudFBsYXllcjogY3VycmVudFBsYXllcixcbiAgICAgIHBsYXlPcmRlclBvczogcGxheU9yZGVyUG9zLFxuICAgICAgcGxheU9yZGVyOiBwbGF5T3JkZXJcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgZWFjaCB0dXJuIHRvIHVwZGF0ZSB0aGUgdHVybiBvcmRlciBzdGF0ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IEcgLSBUaGUgZ2FtZSBvYmplY3QgRy5cbiAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBnYW1lIG9iamVjdCBjdHguXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0dXJuT3JkZXIgLSBBIHR1cm4gb3JkZXIgb2JqZWN0IGZvciB0aGlzIHBoYXNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kVHVybkFyZyAtIEFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGVuZFR1cm4gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heSBzcGVjaWZ5IHRoZSBuZXh0IHBsYXllci5cbiAgICovXG5cbiAgZnVuY3Rpb24gVXBkYXRlVHVybk9yZGVyU3RhdGUoRywgY3R4LCB0dXJuT3JkZXIsIGVuZFR1cm5BcmcpIHtcbiAgICB2YXIgcGxheU9yZGVyUG9zID0gY3R4LnBsYXlPcmRlclBvcztcbiAgICB2YXIgY3VycmVudFBsYXllciA9IGN0eC5jdXJyZW50UGxheWVyO1xuICAgIHZhciBhY3Rpb25QbGF5ZXJzID0gY3R4LmFjdGlvblBsYXllcnM7XG4gICAgdmFyIGVuZFBoYXNlID0gZmFsc2U7XG5cbiAgICBpZiAoZW5kVHVybkFyZyAmJiBlbmRUdXJuQXJnICE9PSB0cnVlKSB7XG4gICAgICBpZiAoY3R4LnBsYXlPcmRlci5pbmNsdWRlcyhlbmRUdXJuQXJnLm5leHQpKSB7XG4gICAgICAgIHBsYXlPcmRlclBvcyA9IGN0eC5wbGF5T3JkZXIuaW5kZXhPZihlbmRUdXJuQXJnLm5leHQpO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gZW5kVHVybkFyZy5uZXh0O1xuICAgICAgICBhY3Rpb25QbGF5ZXJzID0gW2N1cnJlbnRQbGF5ZXJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoXCJpbnZhbGlkIGFyZ3VtZW50IHRvIGVuZFR1cm46IFwiLmNvbmNhdChlbmRUdXJuQXJnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ID0gdHVybk9yZGVyLm5leHQoRywgY3R4KTtcblxuICAgICAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbmRQaGFzZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5T3JkZXJQb3MgPSB0O1xuICAgICAgICBjdXJyZW50UGxheWVyID0gZ2V0Q3VycmVudFBsYXllcihjdHgucGxheU9yZGVyLCBwbGF5T3JkZXJQb3MpO1xuXG4gICAgICAgIGlmICh0dXJuT3JkZXIuYWN0aW9uUGxheWVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWN0aW9uUGxheWVycyA9IFtjdXJyZW50UGxheWVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eCA9IF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgcGxheU9yZGVyUG9zOiBwbGF5T3JkZXJQb3MsXG4gICAgICBjdXJyZW50UGxheWVyOiBjdXJyZW50UGxheWVyLFxuICAgICAgYWN0aW9uUGxheWVyczogYWN0aW9uUGxheWVyc1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBlbmRQaGFzZTogZW5kUGhhc2UsXG4gICAgICBjdHg6IGN0eFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNldCBvZiBkaWZmZXJlbnQgdHVybiBvcmRlcnMgcG9zc2libGUgaW4gYSBwaGFzZS5cbiAgICogVGhlc2UgYXJlIG1lYW50IHRvIGJlIHBhc3NlZCB0byB0aGUgYHR1cm5PcmRlcmAgc2V0dGluZ1xuICAgKiBpbiB0aGUgZmxvdyBvYmplY3RzLlxuICAgKlxuICAgKiBFYWNoIG9iamVjdCBkZWZpbmVzIHRoZSBmaXJzdCBwbGF5ZXIgd2hlbiB0aGUgcGhhc2UgLyBnYW1lXG4gICAqIGJlZ2lucywgYW5kIGFsc28gYSBmdW5jdGlvbiBgbmV4dGAgdG8gZGV0ZXJtaW5lIHdobyB0aGVcbiAgICogbmV4dCBwbGF5ZXIgaXMgd2hlbiB0aGUgdHVybiBlbmRzLlxuICAgKlxuICAgKiBPYmplY3RzIGNhbiBhbHNvIGNvbnRhaW4gYW4gYWN0aW9uUGxheWVycyBzZWN0aW9uIHdoaWNoXG4gICAqIGlzIHBhc3NlZCB0byBTZXRBY3Rpb25QbGF5ZXJzIGFib3ZlIGF0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICogdGhlIHBoYXNlLlxuICAgKlxuICAgKiBUaGUgcGhhc2UgZW5kcyBpZiBuZXh0KCkgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciBUdXJuT3JkZXIgPSB7XG4gICAgLyoqXG4gICAgICogREVGQVVMVFxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgcm91bmQtcm9iaW4gdHVybiBvcmRlci5cbiAgICAgKi9cbiAgICBERUZBVUxUOiB7XG4gICAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoRywgY3R4KSB7XG4gICAgICAgIHJldHVybiBjdHgucGxheU9yZGVyUG9zO1xuICAgICAgfSxcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoRywgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4LnBsYXlPcmRlclBvcyArIDEpICUgY3R4LnBsYXlPcmRlci5sZW5ndGg7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9OQ0VcbiAgICAgKlxuICAgICAqIEFub3RoZXIgcm91bmQtcm9iaW4gdHVybiBvcmRlciwgYnV0IGdvZXMgYXJvdW5kIGp1c3Qgb25jZS5cbiAgICAgKiBUaGUgcGhhc2UgZW5kcyBhZnRlciBhbGwgcGxheWVycyBoYXZlIHBsYXllZC5cbiAgICAgKi9cbiAgICBPTkNFOiB7XG4gICAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoRywgY3R4KSB7XG4gICAgICAgIGlmIChjdHgucGxheU9yZGVyUG9zIDwgY3R4LnBsYXlPcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3MgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFOWVxuICAgICAqXG4gICAgICogVGhlIHR1cm4gc3RheXMgd2l0aCBvbmUgcGxheWVyLCBidXQgYW55IHBsYXllciBjYW4gcGxheSAoaW4gYW55IG9yZGVyKVxuICAgICAqIHVudGlsIHRoZSBwaGFzZSBlbmRzLlxuICAgICAqL1xuICAgIEFOWToge1xuICAgICAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KEcsIGN0eCkge1xuICAgICAgICByZXR1cm4gY3R4LnBsYXlPcmRlclBvcztcbiAgICAgIH0sXG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KEcsIGN0eCkge1xuICAgICAgICByZXR1cm4gY3R4LnBsYXlPcmRlclBvcztcbiAgICAgIH0sXG4gICAgICBhY3Rpb25QbGF5ZXJzOiB7XG4gICAgICAgIGFsbDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBTllfT05DRVxuICAgICAqXG4gICAgICogVGhlIHR1cm4gc3RheXMgd2l0aCBvbmUgcGxheWVyLCBidXQgYW55IHBsYXllciBjYW4gcGxheSAob25jZSwgYW5kIGluIGFueSBvcmRlcikuXG4gICAgICogVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBpbiBhIHBoYXNlIHdoZXJlIHlvdSB3YW50IHRvIGVsaWNpdCBhIHJlc3BvbnNlXG4gICAgICogZnJvbSBldmVyeSBwbGF5ZXIgaW4gdGhlIGdhbWUuXG4gICAgICovXG4gICAgQU5ZX09OQ0U6IHtcbiAgICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChHLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3M7XG4gICAgICB9LFxuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChHLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3M7XG4gICAgICB9LFxuICAgICAgYWN0aW9uUGxheWVyczoge1xuICAgICAgICBhbGw6IHRydWUsXG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0sXG4gICAgICBlbmRQaGFzZU9uY2VEb25lOiB0cnVlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9USEVSU1xuICAgICAqXG4gICAgICogVGhlIHR1cm4gc3RheXMgd2l0aCBvbmUgcGxheWVyLCBhbmQgZXZlcnkgKm90aGVyKiBwbGF5ZXIgY2FuIHBsYXkgKGluIGFueSBvcmRlcilcbiAgICAgKiB1bnRpbCB0aGUgcGhhc2UgZW5kcy5cbiAgICAgKi9cbiAgICBPVEhFUlM6IHtcbiAgICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChHLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3M7XG4gICAgICB9LFxuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChHLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3M7XG4gICAgICB9LFxuICAgICAgYWN0aW9uUGxheWVyczoge1xuICAgICAgICBvdGhlcnM6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT1RIRVJTX09OQ0VcbiAgICAgKlxuICAgICAqIFRoZSB0dXJuIHN0YXlzIHdpdGggb25lIHBsYXllciwgYW5kIGV2ZXJ5ICpvdGhlciogcGxheWVyIGNhbiBwbGF5IChvbmNlLCBhbmQgaW4gYW55IG9yZGVyKS5cbiAgICAgKiBUaGlzIGlzIHR5cGljYWxseSB1c2VkIGluIGEgcGhhc2Ugd2hlcmUgeW91IHdhbnQgdG8gZWxpY2l0IGEgcmVzcG9uc2VcbiAgICAgKiBmcm9tIGV2ZXJ5ICpvdGhlciogcGxheWVyIGluIHRoZSBnYW1lLlxuICAgICAqL1xuICAgIE9USEVSU19PTkNFOiB7XG4gICAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoRywgY3R4KSB7XG4gICAgICAgIHJldHVybiBjdHgucGxheU9yZGVyUG9zO1xuICAgICAgfSxcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoRywgY3R4KSB7XG4gICAgICAgIHJldHVybiBjdHgucGxheU9yZGVyUG9zO1xuICAgICAgfSxcbiAgICAgIGFjdGlvblBsYXllcnM6IHtcbiAgICAgICAgb3RoZXJzOiB0cnVlLFxuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZW5kUGhhc2VPbmNlRG9uZTogdHJ1ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDVVNUT01cbiAgICAgKlxuICAgICAqIElkZW50aWNhbCB0byBERUZBVUxULCBidXQgYWxzbyBzZXRzIHBsYXlPcmRlciBhdCB0aGVcbiAgICAgKiBiZWdpbm5pbmcgb2YgdGhlIHBoYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGxheU9yZGVyIC0gVGhlIHBsYXkgb3JkZXIuXG4gICAgICovXG4gICAgQ1VTVE9NOiBmdW5jdGlvbiBDVVNUT00oX3BsYXlPcmRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxheU9yZGVyOiBmdW5jdGlvbiBwbGF5T3JkZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9wbGF5T3JkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdCgpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChHLCBjdHgpIHtcbiAgICAgICAgICByZXR1cm4gKGN0eC5wbGF5T3JkZXJQb3MgKyAxKSAlIGN0eC5wbGF5T3JkZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDVVNUT01fRlJPTVxuICAgICAqXG4gICAgICogSWRlbnRpY2FsIHRvIERFRkFVTFQsIGJ1dCBhbHNvIHNldHMgcGxheU9yZGVyIGF0IHRoZVxuICAgICAqIGJlZ2lubmluZyBvZiB0aGUgcGhhc2UgdG8gYSB2YWx1ZSBzcGVjaWZpZWQgYnkgYSBmaWVsZFxuICAgICAqIGluIEcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheU9yZGVyRmllbGQgLSBGaWVsZCBpbiBHLlxuICAgICAqL1xuICAgIENVU1RPTV9GUk9NOiBmdW5jdGlvbiBDVVNUT01fRlJPTShwbGF5T3JkZXJGaWVsZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxheU9yZGVyOiBmdW5jdGlvbiBwbGF5T3JkZXIoRykge1xuICAgICAgICAgIHJldHVybiBHW3BsYXlPcmRlckZpZWxkXTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KEcsIGN0eCkge1xuICAgICAgICAgIHJldHVybiAoY3R4LnBsYXlPcmRlclBvcyArIDEpICUgY3R4LnBsYXlPcmRlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNLSVBcbiAgICAgKlxuICAgICAqIFJvdW5kLXJvYmluLCBidXQgc2tpcHMgb3ZlciBhbnkgcGxheWVycyB0aGF0IGhhdmUgcGFzc2VkLlxuICAgICAqIE1lYW50IHRvIGJlIHVzZWQgd2l0aCBQYXNzIGFib3ZlLlxuICAgICAqL1xuICAgIFNLSVA6IHtcbiAgICAgIGZpcnN0OiBmdW5jdGlvbiBmaXJzdChHLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wbGF5T3JkZXJQb3M7XG4gICAgICB9LFxuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChHLCBjdHgpIHtcbiAgICAgICAgaWYgKEcuYWxsUGFzc2VkKSByZXR1cm47XG4gICAgICAgIHZhciBwbGF5T3JkZXJQb3MgPSBjdHgucGxheU9yZGVyUG9zO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3R4LnBsYXlPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBsYXlPcmRlclBvcyA9IChwbGF5T3JkZXJQb3MgKyAxKSAlIGN0eC5wbGF5T3JkZXIubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKCFHLnBhc3NPcmRlci5pbmNsdWRlcyhjdHgucGxheU9yZGVyW3BsYXlPcmRlclBvc10gKyAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5T3JkZXJQb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICB2YXIgTUFLRV9NT1ZFID0gJ01BS0VfTU9WRSc7XG4gIHZhciBHQU1FX0VWRU5UID0gJ0dBTUVfRVZFTlQnO1xuICB2YXIgUkVETyA9ICdSRURPJztcbiAgdmFyIFJFU0VUID0gJ1JFU0VUJztcbiAgdmFyIFNZTkMgPSAnU1lOQyc7XG4gIHZhciBVTkRPID0gJ1VORE8nO1xuICB2YXIgVVBEQVRFID0gJ1VQREFURSc7XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTcgVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbiBhdXRvbWF0aWMgZ2FtZSBldmVudCB0aGF0IGlzIGEgc2lkZS1lZmZlY3Qgb2YgYSBtb3ZlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0ge0FycmF5fSAgYXJncyAtIEFkZGl0aW9uYWwgYXJndW1lbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHBsYXllcklEIC0gVGhlIElEIG9mIHRoZSBwbGF5ZXIgbWFraW5nIHRoaXMgYWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGNyZWRlbnRpYWxzIC0gKG9wdGlvbmFsKSBUaGUgY3JlZGVudGlhbHMgZm9yIHRoZSBwbGF5ZXIgbWFraW5nIHRoaXMgYWN0aW9uLlxuICAgKi9cblxuICB2YXIgYXV0b21hdGljR2FtZUV2ZW50ID0gZnVuY3Rpb24gYXV0b21hdGljR2FtZUV2ZW50KHR5cGUsIGFyZ3MsIHBsYXllcklELCBjcmVkZW50aWFscykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBHQU1FX0VWRU5ULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICBwbGF5ZXJJRDogcGxheWVySUQsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBjcmVkZW50aWFsc1xuICAgICAgfSxcbiAgICAgIGF1dG9tYXRpYzogdHJ1ZVxuICAgIH07XG4gIH07XG5cbiAgLy8gSW5saW5lZCB2ZXJzaW9uIG9mIEFsZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRiYXUvc2VlZHJhbmRvbS5cblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNSBEYXZpZCBCYXUuXG4gICAqXG4gICAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLFxuICAgKiB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuICAgKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAgICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gICAqIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICAgKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gICAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gICAqXG4gICAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsXG4gICAqIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICAgKlxuICAgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICAgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gICAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICovXG4gIGZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICAgIHZhciBtZSA9IHRoaXMsXG4gICAgICAgIG1hc2ggPSBNYXNoKCk7XG5cbiAgICBtZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcblxuICAgICAgbWUuczAgPSBtZS5zMTtcbiAgICAgIG1lLnMxID0gbWUuczI7XG4gICAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gICAgfTsgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuXG5cbiAgICBtZS5jID0gMTtcbiAgICBtZS5zMCA9IG1hc2goJyAnKTtcbiAgICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgICBtZS5zMCAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMwIDwgMCkge1xuICAgICAgbWUuczAgKz0gMTtcbiAgICB9XG5cbiAgICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMxIDwgMCkge1xuICAgICAgbWUuczEgKz0gMTtcbiAgICB9XG5cbiAgICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMyIDwgMCkge1xuICAgICAgbWUuczIgKz0gMTtcbiAgICB9XG5cbiAgICBtYXNoID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICAgIHQuYyA9IGYuYztcbiAgICB0LnMwID0gZi5zMDtcbiAgICB0LnMxID0gZi5zMTtcbiAgICB0LnMyID0gZi5zMjtcbiAgICByZXR1cm4gdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1hc2goKSB7XG4gICAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gICAgdmFyIG1hc2ggPSBmdW5jdGlvbiBtYXNoKGRhdGEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1hc2g7XG4gIH1cblxuICBmdW5jdGlvbiBhbGVhKHNlZWQsIG9wdHMpIHtcbiAgICB2YXIgeGcgPSBuZXcgQWxlYShzZWVkKSxcbiAgICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICAgIHBybmcucXVpY2sgPSBwcm5nO1xuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAoX3R5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcblxuICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvcHkoeGcsIHt9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBybmc7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tXG4gICAqXG4gICAqIENhbGxzIHRoYXQgcmVxdWlyZSBhIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLlxuICAgKiBVc2VzIGEgc2VlZCBmcm9tIGN0eCwgYW5kIGFsc28gcGVyc2lzdHMgdGhlIFBSTkdcbiAgICogc3RhdGUgaW4gY3R4IHNvIHRoYXQgbW92ZXMgY2FuIHN0YXkgcHVyZS5cbiAgICovXG5cbiAgdmFyIFJhbmRvbSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGluaXRpYWxpemUgZnJvbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSYW5kb20oY3R4KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZG9tKTtcblxuICAgICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBjbGllbnQsIHRoZSBzZWVkIGlzIG5vdCBwcmVzZW50LlxuICAgICAgLy8gSnVzdCB1c2UgYSB0ZW1wb3Jhcnkgc2VlZCB0byBleGVjdXRlIHRoZSBtb3ZlIHdpdGhvdXRcbiAgICAgIC8vIGNyYXNoaW5nIGl0LiBUaGUgbW92ZSBzdGF0ZSBpdHNlbGYgaXMgZGlzY2FyZGVkLFxuICAgICAgLy8gc28gdGhlIGFjdHVhbCB2YWx1ZSBkb2Vzbid0IG1hdHRlci5cbiAgICAgIHRoaXMuc3RhdGUgPSBjdHguX3JhbmRvbSB8fCB7XG4gICAgICAgIHNlZWQ6ICcwJ1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBjdHggd2l0aCB0aGUgUFJORyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QgdG8gdXBkYXRlLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFuZG9tLCBbe1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgICAgICB2YXIgY3R4ID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgX3JhbmRvbTogdGhpcy5zdGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjdHg6IGN0eFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQXR0YWNoZXMgdGhlIFJhbmRvbSBBUEkgdG8gY3R4LlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGF0dGFjaCB0by5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImF0dGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaChjdHgpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgICAgIHJhbmRvbTogdGhpcy5fYXBpKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlci5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yYW5kb21cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmFuZG9tKCkge1xuICAgICAgICB2YXIgUiA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBmbjtcblxuICAgICAgICBpZiAoUi5wcm5nc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIE5vIGNhbGwgdG8gYSByYW5kb20gZnVuY3Rpb24gaGFzIGJlZW4gbWFkZS5cbiAgICAgICAgICBmbiA9IG5ldyBhbGVhKFIuc2VlZCwge1xuICAgICAgICAgICAgc3RhdGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbiA9IG5ldyBhbGVhKCcnLCB7XG4gICAgICAgICAgICBzdGF0ZTogUi5wcm5nc3RhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW1iZXIgPSBmbigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgUiwge1xuICAgICAgICAgIHBybmdzdGF0ZTogZm4uc3RhdGUoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwaVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcGkoKSB7XG4gICAgICAgIHZhciByYW5kb20gPSB0aGlzLl9yYW5kb20uYmluZCh0aGlzKTtcblxuICAgICAgICB2YXIgU3BvdFZhbHVlID0ge1xuICAgICAgICAgIEQ0OiA0LFxuICAgICAgICAgIEQ2OiA2LFxuICAgICAgICAgIEQ4OiA4LFxuICAgICAgICAgIEQxMDogMTAsXG4gICAgICAgICAgRDEyOiAxMixcbiAgICAgICAgICBEMjA6IDIwXG4gICAgICAgIH07IC8vIEdlbmVyYXRlIGZ1bmN0aW9ucyBmb3IgcHJlZGVmaW5lZCBkaWNlIHZhbHVlcyBENCAtIEQyMC5cblxuICAgICAgICB2YXIgcHJlZGVmaW5lZCA9IHt9O1xuXG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgICAgIHZhciBzcG90dmFsdWUgPSBTcG90VmFsdWVba2V5XTtcblxuICAgICAgICAgIHByZWRlZmluZWRba2V5XSA9IGZ1bmN0aW9uIChkaWNlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChkaWNlQ291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIHNwb3R2YWx1ZSkgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkoZGljZUNvdW50KS5rZXlzKCkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKCkgKiBzcG90dmFsdWUpICsgMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gU3BvdFZhbHVlKSB7XG4gICAgICAgICAgX2xvb3Aoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBwcmVkZWZpbmVkLCB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUm9sbCBhIGRpZSBvZiBzcGVjaWZpZWQgc3BvdCB2YWx1ZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90dmFsdWUgLSBUaGUgZGllIGRpbWVuc2lvbiAoZGVmYXVsdDogNikuXG4gICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGRpY2VDb3VudCAtIG51bWJlciBvZiBkaWNlIHRvIHRocm93LlxuICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBub3QgZGVmaW5lZCwgZGVmYXVsdHMgdG8gMSBhbmQgcmV0dXJucyB0aGUgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGRlZmluZWQsIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmFuZG9tIGRpY2UgdmFsdWVzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIERpZTogZnVuY3Rpb24gRGllKHNwb3R2YWx1ZSwgZGljZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoc3BvdHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc3BvdHZhbHVlID0gNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpY2VDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogc3BvdHZhbHVlKSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBBcnJheShkaWNlQ291bnQpLmtleXMoKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIHNwb3R2YWx1ZSkgKyAxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBOdW1iZXI6IGZ1bmN0aW9uIE51bWJlcigpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb20oKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2h1ZmZsZSBhbiBhcnJheS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRlY2sgLSBUaGUgYXJyYXkgdG8gc2h1ZmZsZS4gRG9lcyBub3QgbXV0YXRlXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnB1dCwgYnV0IHJldHVybnMgdGhlIHNodWZmbGVkIGFycmF5LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIFNodWZmbGU6IGZ1bmN0aW9uIFNodWZmbGUoZGVjaykge1xuICAgICAgICAgICAgdmFyIGNsb25lID0gZGVjay5zbGljZSgwKTtcbiAgICAgICAgICAgIHZhciBzcmNJbmRleCA9IGRlY2subGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBzaHVmZmxlZCA9IG5ldyBBcnJheShzcmNJbmRleCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChzcmNJbmRleCkge1xuICAgICAgICAgICAgICB2YXIgcmFuZEluZGV4ID0gc3JjSW5kZXggKiByYW5kb20oKSB8IDA7XG4gICAgICAgICAgICAgIHNodWZmbGVkW2RzdEluZGV4KytdID0gY2xvbmVbcmFuZEluZGV4XTtcbiAgICAgICAgICAgICAgY2xvbmVbcmFuZEluZGV4XSA9IGNsb25lWy0tc3JjSW5kZXhdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmFuZG9tO1xuICB9KCk7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBhdHRhY2hlZCBSYW5kb20gYXBpIGZyb20gY3R4LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3Qgd2l0aCB0aGUgUmFuZG9tIEFQSSBhdHRhY2hlZC5cbiAgICogQHJldHVybnMge29iamVjdH0gQSBwbGFpbiBjdHggb2JqZWN0IHdpdGhvdXQgdGhlIFJhbmRvbSBBUEkuXG4gICAqL1xuXG4gIFJhbmRvbS5kZXRhY2ggPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgdmFyIHJhbmRvbSA9IGN0eC5yYW5kb20sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoY3R4LCBbXCJyYW5kb21cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiByZXN0O1xuICB9O1xuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbmV3IHNlZWQgZnJvbSB0aGUgY3VycmVudCBkYXRlIC8gdGltZS5cbiAgICovXG5cblxuICBSYW5kb20uc2VlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpKS50b1N0cmluZygzNikuc2xpY2UoLTEwKTtcbiAgfTtcblxuICAvKipcbiAgICogRXZlbnRzXG4gICAqL1xuXG4gIHZhciBFdmVudHMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudHMoZmxvdywgcGxheWVySUQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHMpO1xuXG4gICAgICB0aGlzLmZsb3cgPSBmbG93O1xuICAgICAgdGhpcy5wbGF5ZXJJRCA9IHBsYXllcklEO1xuICAgICAgdGhpcy5kaXNwYXRjaCA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgRXZlbnRzIEFQSSB0byBjdHguXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGF0dGFjaCB0by5cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50cywgW3tcbiAgICAgIGtleTogXCJhdHRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdHRhY2goY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IHt9O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgZXZlbnRzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpcy5kaXNwYXRjaC5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5mbG93LmV2ZW50TmFtZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBjdHgsIHtcbiAgICAgICAgICBldmVudHM6IGV2ZW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlcyBjdHggd2l0aCB0aGUgdHJpZ2dlcmVkIGV2ZW50cy5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIFRoZSBzdGF0ZSBvYmplY3QgeyBHLCBjdHggfS5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMShzdGF0ZSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5kaXNwYXRjaFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXV0b21hdGljR2FtZUV2ZW50KGl0ZW0ua2V5LCBpdGVtLmFyZ3MsIHRoaXMucGxheWVySUQpO1xuICAgICAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwgdGhpcy5mbG93LnByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50cztcbiAgfSgpO1xuICAvKipcbiAgICogRGV0YWNoZXMgdGhlIEV2ZW50cyBBUEkgZnJvbSBjdHguXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdCB0byBzdHJpcC5cbiAgICovXG5cbiAgRXZlbnRzLmRldGFjaCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICB2YXIgZXZlbnRzID0gY3R4LmV2ZW50cyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhjdHgsIFtcImV2ZW50c1wiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vdmVzIGNhbiByZXR1cm4gdGhpcyB3aGVuIHRoZXkgd2FudCB0byBpbmRpY2F0ZVxuICAgKiB0aGF0IHRoZSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgaXMgaWxsZWdhbCBhbmRcbiAgICogdGhlIG1vdmUgb3VnaHQgdG8gYmUgZGlzY2FyZGVkLlxuICAgKi9cblxuICB2YXIgSU5WQUxJRF9NT1ZFID0gJ0lOVkFMSURfTU9WRSc7XG4gIC8qKlxuICAgKiBDb250ZXh0IEFQSSB0byBhbGxvdyB3cml0aW5nIGN1c3RvbSBsb2dzIGluIGdhbWVzLlxuICAgKi9cblxuICB2YXIgR2FtZUxvZ2dlckN0eEFQSSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVMb2dnZXJDdHhBUEkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvZ2dlckN0eEFQSSk7XG5cbiAgICAgIHRoaXMuX3BheWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdhbWVMb2dnZXJDdHhBUEksIFt7XG4gICAgICBrZXk6IFwiX2FwaVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcGkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZXRQYXlsb2FkOiBmdW5jdGlvbiBzZXRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAgICAgICAgIF90aGlzLl9wYXlsb2FkID0gcGF5bG9hZDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImF0dGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaChjdHgkJDEpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgIGxvZzogdGhpcy5fYXBpKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fcGF5bG9hZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9IC8vIGF0dGFjaCB0aGUgcGF5bG9hZCB0byB0aGUgbGFzdCBsb2cgZXZlbnRcblxuXG4gICAgICAgIHZhciBkZWx0YWxvZyA9IHN0YXRlLmRlbHRhbG9nO1xuICAgICAgICBkZWx0YWxvZ1tkZWx0YWxvZy5sZW5ndGggLSAxXSA9IF9vYmplY3RTcHJlYWQoe30sIGRlbHRhbG9nW2RlbHRhbG9nLmxlbmd0aCAtIDFdLCB7XG4gICAgICAgICAgcGF5bG9hZDogdGhpcy5fcGF5bG9hZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGVsdGFsb2c6IGRlbHRhbG9nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImRldGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGxvZyA9IGN0eCQkMS5sb2csXG4gICAgICAgICAgICBjdHhXaXRob3V0TG9nID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGN0eCQkMSwgW1wibG9nXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRMb2c7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdhbWVMb2dnZXJDdHhBUEk7XG4gIH0oKTtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBhdHRhY2gvZGV0YWNoIHZhcmlvdXMgdXRpbGl0eSBvYmplY3RzXG4gICAqIG9udG8gYSBjdHgsIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IGF0dGFjaC9kZXRhY2ggdGhlbVxuICAgKiBhbGwgc2VwYXJhdGVseS5cbiAgICovXG5cbiAgdmFyIENvbnRleHRFbmhhbmNlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHRFbmhhbmNlcihjdHgkJDEsIGdhbWUsIHBsYXllcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRFbmhhbmNlcik7XG5cbiAgICAgIHRoaXMucmFuZG9tID0gbmV3IFJhbmRvbShjdHgkJDEpO1xuICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKGdhbWUuZmxvdywgcGxheWVyKTtcbiAgICAgIHRoaXMubG9nID0gbmV3IEdhbWVMb2dnZXJDdHhBUEkoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udGV4dEVuaGFuY2VyLCBbe1xuICAgICAga2V5OiBcImF0dGFjaFRvQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaFRvQ29udGV4dChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGN0eFdpdGhBUEkgPSB0aGlzLnJhbmRvbS5hdHRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMuZXZlbnRzLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMubG9nLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhBUEk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKHN0YXRlLCB1cGRhdGVFdmVudHMpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdXBkYXRlRXZlbnRzID8gdGhpcy5ldmVudHMudXBkYXRlKHN0YXRlKSA6IHN0YXRlO1xuICAgICAgICBuZXdTdGF0ZSA9IHRoaXMucmFuZG9tLnVwZGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5sb2cudXBkYXRlKG5ld1N0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVBbmREZXRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVBbmREZXRhY2goc3RhdGUsIHVwZGF0ZUV2ZW50cykge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLl91cGRhdGUoc3RhdGUsIHVwZGF0ZUV2ZW50cyk7XG5cbiAgICAgICAgbmV3U3RhdGUuY3R4ID0gQ29udGV4dEVuaGFuY2VyLmRldGFjaEFsbEZyb21Db250ZXh0KG5ld1N0YXRlLmN0eCk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJkZXRhY2hBbGxGcm9tQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbEZyb21Db250ZXh0KGN0eCQkMSkge1xuICAgICAgICB2YXIgY3R4V2l0aG91dEFQSSA9IFJhbmRvbS5kZXRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aG91dEFQSSA9IEV2ZW50cy5kZXRhY2goY3R4V2l0aG91dEFQSSk7XG4gICAgICAgIGN0eFdpdGhvdXRBUEkgPSBHYW1lTG9nZ2VyQ3R4QVBJLmRldGFjaChjdHhXaXRob3V0QVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRBUEk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbnRleHRFbmhhbmNlcjtcbiAgfSgpO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZUdhbWVcbiAgICpcbiAgICogQ3JlYXRlcyB0aGUgaW5pdGlhbCBnYW1lIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZ2FtZSAtIFJldHVybiB2YWx1ZSBvZiBHYW1lKCkuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbXVsdGlwbGF5ZXIgLSBTZXQgdG8gdHJ1ZSBpZiB3ZSBhcmUgaW4gYSBtdWx0aXBsYXllciBjbGllbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEluaXRpYWxpemVHYW1lKF9yZWYpIHtcbiAgICB2YXIgZ2FtZSA9IF9yZWYuZ2FtZSxcbiAgICAgICAgbnVtUGxheWVycyA9IF9yZWYubnVtUGxheWVycyxcbiAgICAgICAgc2V0dXBEYXRhID0gX3JlZi5zZXR1cERhdGE7XG5cbiAgICBpZiAoIW51bVBsYXllcnMpIHtcbiAgICAgIG51bVBsYXllcnMgPSAyO1xuICAgIH1cblxuICAgIHZhciBjdHgkJDEgPSBnYW1lLmZsb3cuY3R4KG51bVBsYXllcnMpO1xuICAgIHZhciBzZWVkID0gZ2FtZS5zZWVkO1xuXG4gICAgaWYgKHNlZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VlZCA9IFJhbmRvbS5zZWVkKCk7XG4gICAgfVxuXG4gICAgY3R4JCQxLl9yYW5kb20gPSB7XG4gICAgICBzZWVkOiBzZWVkXG4gICAgfTsgLy8gUGFzcyBjdHggdGhyb3VnaCBhbGwgdGhlIHBsdWdpbnMgdGhhdCB3YW50IHRvIG1vZGlmeSBpdC5cblxuICAgIGN0eCQkMSA9IGN0eC5zZXR1cChjdHgkJDEsIGdhbWUpOyAvLyBBdWdtZW50IGN0eCB3aXRoIHRoZSBlbmhhbmNlcnMgKFRPRE86IG1vdmUgdGhlc2UgaW50byBwbHVnaW5zKS5cblxuICAgIHZhciBhcGlDdHggPSBuZXcgQ29udGV4dEVuaGFuY2VyKGN0eCQkMSwgZ2FtZSwgY3R4JCQxLmN1cnJlbnRQbGF5ZXIpO1xuICAgIHZhciBjdHhXaXRoQVBJID0gYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChjdHgkJDEpO1xuICAgIHZhciBpbml0aWFsRyA9IGdhbWUuc2V0dXAoY3R4V2l0aEFQSSwgc2V0dXBEYXRhKTsgLy8gUGFzcyBHIHRocm91Z2ggYWxsIHRoZSBwbHVnaW5zIHRoYXQgd2FudCB0byBtb2RpZnkgaXQuXG5cbiAgICBpbml0aWFsRyA9IEcuc2V0dXAoaW5pdGlhbEcsIGN0eFdpdGhBUEksIGdhbWUpO1xuICAgIHZhciBpbml0aWFsID0ge1xuICAgICAgLy8gVXNlciBtYW5hZ2VkIHN0YXRlLlxuICAgICAgRzogaW5pdGlhbEcsXG4gICAgICAvLyBGcmFtZXdvcmsgbWFuYWdlZCBzdGF0ZS5cbiAgICAgIGN0eDogY3R4JCQxLFxuICAgICAgLy8gTGlzdCBvZiB7RywgY3R4fSBwYWlycyB0aGF0IGNhbiBiZSB1bmRvbmUuXG4gICAgICBfdW5kbzogW10sXG4gICAgICAvLyBMaXN0IG9mIHtHLCBjdHh9IHBhaXJzIHRoYXQgY2FuIGJlIHJlZG9uZS5cbiAgICAgIF9yZWRvOiBbXSxcbiAgICAgIC8vIEEgbW9ub3RvbmljYWxseSBub24tZGVjcmVhc2luZyBJRCB0byBlbnN1cmUgdGhhdFxuICAgICAgLy8gc3RhdGUgdXBkYXRlcyBhcmUgb25seSBhbGxvd2VkIGZyb20gY2xpZW50cyB0aGF0XG4gICAgICAvLyBhcmUgYXQgdGhlIHNhbWUgdmVyc2lvbiB0aGF0IHRoZSBzZXJ2ZXIuXG4gICAgICBfc3RhdGVJRDogMCxcbiAgICAgIC8vIEEgc25hcHNob3Qgb2YgdGhpcyBvYmplY3Qgc28gdGhhdCBhY3Rpb25zIGNhbiBiZVxuICAgICAgLy8gcmVwbGF5ZWQgb3ZlciBpdCB0byB2aWV3IG9sZCBzbmFwc2hvdHMuXG4gICAgICAvLyBUT0RPOiBUaGlzIHdpbGwgbm8gbG9uZ2VyIGJlIG5lY2Vzc2FyeSBvbmNlIHRoZVxuICAgICAgLy8gbG9nIHN0b3BzIHJlcGxheWluZyBhY3Rpb25zIChidXQgcmVhZHMgdGhlIGFjdHVhbFxuICAgICAgLy8gZ2FtZSBzdGF0ZXMgaW5zdGVhZCkuXG4gICAgICBfaW5pdGlhbDoge31cbiAgICB9O1xuICAgIHZhciBzdGF0ZSA9IGdhbWUuZmxvdy5pbml0KHtcbiAgICAgIEc6IGluaXRpYWwuRyxcbiAgICAgIGN0eDogY3R4V2l0aEFQSVxuICAgIH0pO1xuICAgIGluaXRpYWwuRyA9IHN0YXRlLkc7XG4gICAgaW5pdGlhbC5fdW5kbyA9IHN0YXRlLl91bmRvO1xuICAgIHN0YXRlID0gYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChzdGF0ZSwgdHJ1ZSk7XG4gICAgaW5pdGlhbC5jdHggPSBzdGF0ZS5jdHg7XG5cbiAgICB2YXIgZGVlcENvcHkgPSBmdW5jdGlvbiBkZWVwQ29weShvYmopIHtcbiAgICAgIHJldHVybiBmbGF0dGVkLnBhcnNlKGZsYXR0ZWQuc3RyaW5naWZ5KG9iaikpO1xuICAgIH07XG5cbiAgICBpbml0aWFsLl9pbml0aWFsID0gZGVlcENvcHkoaW5pdGlhbCk7XG4gICAgcmV0dXJuIGluaXRpYWw7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZUdhbWVSZWR1Y2VyXG4gICAqXG4gICAqIENyZWF0ZXMgdGhlIG1haW4gZ2FtZSBzdGF0ZSByZWR1Y2VyLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZ2FtZSAtIFJldHVybiB2YWx1ZSBvZiBHYW1lKCkuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbXVsdGlwbGF5ZXIgLSBTZXQgdG8gdHJ1ZSBpZiB3ZSBhcmUgaW4gYSBtdWx0aXBsYXllciBjbGllbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENyZWF0ZUdhbWVSZWR1Y2VyKF9yZWYyKSB7XG4gICAgdmFyIGdhbWUgPSBfcmVmMi5nYW1lLFxuICAgICAgICBtdWx0aXBsYXllciA9IF9yZWYyLm11bHRpcGxheWVyO1xuXG4gICAgLyoqXG4gICAgICogR2FtZVJlZHVjZXJcbiAgICAgKlxuICAgICAqIFJlZHV4IHJlZHVjZXIgdGhhdCBtYWludGFpbnMgdGhlIG92ZXJhbGwgZ2FtZSBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBhY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiAtIEEgUmVkdXggYWN0aW9uLlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBHQU1FX0VWRU5UOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgZGVsdGFsb2c6IFtdXG4gICAgICAgICAgICB9KTsgLy8gUHJvY2VzcyBnYW1lIGV2ZW50cyBvbmx5IG9uIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgbGlrZSBgZW5kVHVybmAgdHlwaWNhbGx5XG4gICAgICAgICAgICAvLyBjb250YWluIGNvZGUgdGhhdCBtYXkgcmVseSBvbiBzZWNyZXQgc3RhdGVcbiAgICAgICAgICAgIC8vIGFuZCBjYW5ub3QgYmUgY29tcHV0ZWQgb24gdGhlIGNsaWVudC5cblxuICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBldmVudCBpZiB0aGUgcGxheWVyIGlzbid0IGFsbG93ZWQgdG8gbWFrZSBpdC5cblxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQucGxheWVySUQgIT09IG51bGwgJiYgYWN0aW9uLnBheWxvYWQucGxheWVySUQgIT09IHVuZGVmaW5lZCAmJiAhZ2FtZS5mbG93LmNhblBsYXllckNhbGxFdmVudChzdGF0ZS5HLCBzdGF0ZS5jdHgsIGFjdGlvbi5wYXlsb2FkLnBsYXllcklEKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhcGlDdHggPSBuZXcgQ29udGV4dEVuaGFuY2VyKHN0YXRlLmN0eCwgZ2FtZSwgYWN0aW9uLnBheWxvYWQucGxheWVySUQpO1xuICAgICAgICAgICAgc3RhdGUuY3R4ID0gYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChzdGF0ZS5jdHgpO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gZ2FtZS5mbG93LnByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IGFwaUN0eC51cGRhdGVBbmREZXRhY2gobmV3U3RhdGUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlLCB7XG4gICAgICAgICAgICAgIF9zdGF0ZUlEOiBzdGF0ZS5fc3RhdGVJRCArIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIE1BS0VfTU9WRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIGRlbHRhbG9nOiBbXVxuICAgICAgICAgICAgfSk7IC8vIENoZWNrIHdoZXRoZXIgdGhlIGdhbWUga25vd3MgdGhlIG1vdmUgYXQgYWxsLlxuXG4gICAgICAgICAgICBpZiAoIWdhbWUubW92ZU5hbWVzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBtb3ZlIGlmIGl0IGlzbid0IGFsbG93ZWQgYXQgdGhpcyBwb2ludC5cblxuXG4gICAgICAgICAgICBpZiAoIWdhbWUuZmxvdy5jYW5NYWtlTW92ZShzdGF0ZS5HLCBzdGF0ZS5jdHgsIGFjdGlvbi5wYXlsb2FkLnR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBtb3ZlIGlmIHRoZSBwbGF5ZXIgaXNuJ3QgYWxsb3dlZCB0byBtYWtlIGl0LlxuXG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gbnVsbCAmJiBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gdW5kZWZpbmVkICYmICFnYW1lLmZsb3cuY2FuUGxheWVyTWFrZU1vdmUoc3RhdGUuRywgc3RhdGUuY3R4LCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2FwaUN0eCA9IG5ldyBDb250ZXh0RW5oYW5jZXIoc3RhdGUuY3R4LCBnYW1lLCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCk7XG5cbiAgICAgICAgICAgIHZhciBjdHhXaXRoQVBJID0gX2FwaUN0eC5hdHRhY2hUb0NvbnRleHQoc3RhdGUuY3R4KTsgLy8gUHJvY2VzcyB0aGUgbW92ZS5cblxuXG4gICAgICAgICAgICB2YXIgRyQkMSA9IGdhbWUucHJvY2Vzc01vdmUoc3RhdGUuRywgYWN0aW9uLnBheWxvYWQsIGN0eFdpdGhBUEkpO1xuXG4gICAgICAgICAgICBpZiAoRyQkMSA9PT0gSU5WQUxJRF9NT1ZFKSB7XG4gICAgICAgICAgICAgIC8vIHRoZSBnYW1lIGRlY2xhcmVkIHRoZSBtb3ZlIGFzIGludmFsaWQuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gQ3JlYXRlIGEgbG9nIGVudHJ5IGZvciB0aGlzIG1vdmUuXG5cblxuICAgICAgICAgICAgdmFyIGxvZ0VudHJ5ID0ge1xuICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgX3N0YXRlSUQ6IHN0YXRlLl9zdGF0ZUlELFxuICAgICAgICAgICAgICB0dXJuOiBzdGF0ZS5jdHgudHVybixcbiAgICAgICAgICAgICAgcGhhc2U6IHN0YXRlLmN0eC5waGFzZVxuICAgICAgICAgICAgfTsgLy8gZG9uJ3QgY2FsbCBpbnRvIGV2ZW50cyBoZXJlXG5cbiAgICAgICAgICAgIHZhciBfbmV3U3RhdGUgPSBfYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBkZWx0YWxvZzogW2xvZ0VudHJ5XVxuICAgICAgICAgICAgfSksIGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIGN0eCQkMSA9IF9uZXdTdGF0ZS5jdHg7IC8vIFVuZG8gY2hhbmdlcyB0byBHIGlmIHRoZSBtb3ZlIHNob3VsZCBub3QgcnVuIG9uIHRoZSBjbGllbnQuXG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsYXllciAmJiAhZ2FtZS5mbG93Lm9wdGltaXN0aWNVcGRhdGUoRyQkMSwgY3R4JCQxLCBhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgRyQkMSA9IHN0YXRlLkc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgX25ld1N0YXRlLCB7XG4gICAgICAgICAgICAgIEc6IEckJDEsXG4gICAgICAgICAgICAgIGN0eDogY3R4JCQxLFxuICAgICAgICAgICAgICBfc3RhdGVJRDogc3RhdGUuX3N0YXRlSUQgKyAxXG4gICAgICAgICAgICB9KTsgLy8gSWYgd2UncmUgb24gdGhlIGNsaWVudCwganVzdCBwcm9jZXNzIHRoZSBtb3ZlXG4gICAgICAgICAgICAvLyBhbmQgbm8gdHJpZ2dlcnMgaW4gbXVsdGlwbGF5ZXIgbW9kZS5cbiAgICAgICAgICAgIC8vIFRoZXNlIHdpbGwgYmUgcHJvY2Vzc2VkIG9uIHRoZSBzZXJ2ZXIsIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIHNlbmQgYmFjayBhIHN0YXRlIHVwZGF0ZS5cblxuICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gQWxsb3cgdGhlIGZsb3cgcmVkdWNlciB0byBwcm9jZXNzIGFueSB0cmlnZ2VycyB0aGF0IGhhcHBlbiBhZnRlciBtb3Zlcy5cblxuXG4gICAgICAgICAgICBjdHhXaXRoQVBJID0gX2FwaUN0eC5hdHRhY2hUb0NvbnRleHQoc3RhdGUuY3R4KTtcbiAgICAgICAgICAgIHN0YXRlID0gZ2FtZS5mbG93LnByb2Nlc3NNb3ZlKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIGN0eDogY3R4V2l0aEFQSVxuICAgICAgICAgICAgfSksIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHN0YXRlID0gX2FwaUN0eC51cGRhdGVBbmREZXRhY2goc3RhdGUsIHRydWUpO1xuICAgICAgICAgICAgc3RhdGUuX3VuZG9bc3RhdGUuX3VuZG8ubGVuZ3RoIC0gMV0uY3R4ID0gc3RhdGUuY3R4O1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFJFU0VUOlxuICAgICAgICBjYXNlIFVQREFURTpcbiAgICAgICAgY2FzZSBTWU5DOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgVU5ETzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gc3RhdGUsXG4gICAgICAgICAgICAgICAgX3VuZG8gPSBfc3RhdGUuX3VuZG8sXG4gICAgICAgICAgICAgICAgX3JlZG8gPSBfc3RhdGUuX3JlZG87XG5cbiAgICAgICAgICAgIGlmIChfdW5kby5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxhc3QgPSBfdW5kb1tfdW5kby5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciByZXN0b3JlID0gX3VuZG9bX3VuZG8ubGVuZ3RoIC0gMl07IC8vIE9ubHkgYWxsb3cgdW5kb2FibGUgbW92ZXMgdG8gYmUgdW5kb25lLlxuXG4gICAgICAgICAgICBpZiAoIWdhbWUuZmxvdy5jYW5VbmRvTW92ZShzdGF0ZS5HLCBzdGF0ZS5jdHgsIGxhc3QubW92ZVR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIEc6IHJlc3RvcmUuRyxcbiAgICAgICAgICAgICAgY3R4OiByZXN0b3JlLmN0eCxcbiAgICAgICAgICAgICAgX3VuZG86IF91bmRvLnNsaWNlKDAsIF91bmRvLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgICBfcmVkbzogW2xhc3RdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3JlZG8pKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUkVETzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlMiA9IHN0YXRlLFxuICAgICAgICAgICAgICAgIF91bmRvMiA9IF9zdGF0ZTIuX3VuZG8sXG4gICAgICAgICAgICAgICAgX3JlZG8yID0gX3N0YXRlMi5fcmVkbztcblxuICAgICAgICAgICAgaWYgKF9yZWRvMi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmaXJzdCA9IF9yZWRvMlswXTtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBHOiBmaXJzdC5HLFxuICAgICAgICAgICAgICBjdHg6IGZpcnN0LmN0eCxcbiAgICAgICAgICAgICAgX3VuZG86IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3VuZG8yKSwgW2ZpcnN0XSksXG4gICAgICAgICAgICAgIF9yZWRvOiBfcmVkbzIuc2xpY2UoMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gY3JlYXRlIGEgcmVkdWNlciB0aGF0IG1hbmFnZXMgY3R4ICh3aXRoIHRoZVxuICAgKiBhYmlsaXR5IHRvIGFsc28gdXBkYXRlIEcpLlxuICAgKlxuICAgKiBZb3UgcHJvYmFibHkgd2FudCB0byB1c2UgRmxvd1dpdGhQaGFzZXMgYmVsb3csIGJ1dCB5b3UgbWlnaHRcbiAgICogbmVlZCB0byB1c2UgdGhpcyBkaXJlY3RseSBpZiB5b3UgYXJlIGNyZWF0aW5nIGEgdmVyeSBjdXN0b21pemVkXG4gICAqIGdhbWUgZmxvdyB0aGF0IGl0IGNhbm5vdCBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBjdHggLSBGdW5jdGlvbiB3aXRoIHRoZSBzaWduYXR1cmVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG51bVBsYXllcnMgPT4gY3R4XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGRldGVybWluZXMgdGhlIGluaXRpYWwgdmFsdWUgb2YgY3R4LlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZXZlbnRzIC0gT2JqZWN0IGNvbnRhaW5pbmcgZnVuY3Rpb25zXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lZCBhZnRlciBldmVudHMgdGhhdCB0aGlzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2VyIHdpbGwgaGFuZGxlLiBFYWNoIGZ1bmN0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXMgdGhlIGZvbGxvd2luZyBzaWduYXR1cmU6XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe0csIGN0eH0pID0+IHtHLCBjdHh9XG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBlbmFibGVkRXZlbnRzIC0gTWFwIG9mIGV2ZW50TmFtZSAtPiBib29sIGluZGljYXRpbmdcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGljaCBldmVudHMgYXJlIGNhbGxhYmxlIGZyb20gdGhlIGNsaWVudFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGZyb20gd2l0aGluIG1vdmVzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gcHJvY2Vzc01vdmUgLSBBIGZ1bmN0aW9uIHRoYXQncyBjYWxsZWQgd2hlbmV2ZXIgYSBtb3ZlIGlzIG1hZGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZSwgYWN0aW9uLCBkaXNwYXRjaCkgPT4gc3RhdGUuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBvcHRpbWlzdGljVXBkYXRlIC0gKEcsIGN0eCwgbW92ZSkgPT4gYm9vbGVhblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyb2wgd2hldGhlciBhIG1vdmUgc2hvdWxkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgZXhlY3V0ZWQgb3B0aW1pc3RpY2FsbHkgb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2xpZW50IHdoaWxlIHdhaXRpbmcgZm9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJlc3VsdCBvZiBleGVjdXRpb24gZnJvbVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBjYW5NYWtlTW92ZSAtIChHLCBjdHgsIG1vdmVOYW1lKSA9PiBib29sZWFuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWRpY2F0ZSB0byBkZXRlcm1pbmUgd2hldGhlciBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY3VsYXIgbW92ZSBpcyBhbGxvd2VkIGF0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGNhblVuZG9Nb3ZlIC0gKEcsIGN0eCwgbW92ZU5hbWUpID0+IGJvb2xlYW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlZGljYXRlIHRvIGRldGVybWluZSB3aGV0aGVyIGFcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljdWxhciBtb3ZlIGlzIHVuZG9hYmxlIGF0IHRoaXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcmVkYWN0ZWRNb3ZlcyAtIExpc3Qgb2YgbW92ZXMgdG8gYmUgcmVkYWN0ZWRcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gdGhlIGxvZy5cbiAgICovXG5cbiAgZnVuY3Rpb24gRmxvdyhfcmVmKSB7XG4gICAgdmFyIGN0eCQkMSA9IF9yZWYuY3R4LFxuICAgICAgICBldmVudHMgPSBfcmVmLmV2ZW50cyxcbiAgICAgICAgZW5hYmxlZEV2ZW50cyA9IF9yZWYuZW5hYmxlZEV2ZW50cyxcbiAgICAgICAgaW5pdCA9IF9yZWYuaW5pdCxcbiAgICAgICAgX3Byb2Nlc3NNb3ZlID0gX3JlZi5wcm9jZXNzTW92ZSxcbiAgICAgICAgb3B0aW1pc3RpY1VwZGF0ZSA9IF9yZWYub3B0aW1pc3RpY1VwZGF0ZSxcbiAgICAgICAgX2Nhbk1ha2VNb3ZlID0gX3JlZi5jYW5NYWtlTW92ZSxcbiAgICAgICAgY2FuVW5kb01vdmUgPSBfcmVmLmNhblVuZG9Nb3ZlLFxuICAgICAgICByZWRhY3RlZE1vdmVzID0gX3JlZi5yZWRhY3RlZE1vdmVzO1xuICAgIGlmICghY3R4JCQxKSBjdHgkJDEgPSBmdW5jdGlvbiBjdHgkJDEoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBpZiAoIWV2ZW50cykgZXZlbnRzID0ge307XG4gICAgaWYgKCFlbmFibGVkRXZlbnRzKSBlbmFibGVkRXZlbnRzID0ge307XG4gICAgaWYgKCFpbml0KSBpbml0ID0gZnVuY3Rpb24gaW5pdChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgaWYgKCFfcHJvY2Vzc01vdmUpIF9wcm9jZXNzTW92ZSA9IGZ1bmN0aW9uIHByb2Nlc3NNb3ZlKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgICBpZiAoIV9jYW5NYWtlTW92ZSkgX2Nhbk1ha2VNb3ZlID0gZnVuY3Rpb24gY2FuTWFrZU1vdmUoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGlmICghY2FuVW5kb01vdmUpIGNhblVuZG9Nb3ZlID0gZnVuY3Rpb24gY2FuVW5kb01vdmUoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGltaXN0aWNVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW1pc3RpY1VwZGF0ZSA9IGZ1bmN0aW9uIG9wdGltaXN0aWNVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHBheWxvYWQudHlwZSkpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgcGxheWVySUQ6IHBheWxvYWQucGxheWVySUQsXG4gICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgICAgIH07XG4gICAgICAgIHZhciBsb2dFbnRyeSA9IHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBfc3RhdGVJRDogc3RhdGUuX3N0YXRlSUQsXG4gICAgICAgICAgdHVybjogc3RhdGUuY3R4LnR1cm4sXG4gICAgICAgICAgcGhhc2U6IHN0YXRlLmN0eC5waGFzZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVsdGFsb2cgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlLmRlbHRhbG9nIHx8IFtdKSwgW2xvZ0VudHJ5XSk7XG4gICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkZWx0YWxvZzogZGVsdGFsb2dcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBhcmdzID0gW3N0YXRlXS5jb25jYXQocGF5bG9hZC5hcmdzKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50c1twYXlsb2FkLnR5cGVdLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBjdHg6IGN0eCQkMSxcbiAgICAgIGluaXQ6IGluaXQsXG4gICAgICBjYW5VbmRvTW92ZTogY2FuVW5kb01vdmUsXG4gICAgICByZWRhY3RlZE1vdmVzOiByZWRhY3RlZE1vdmVzLFxuICAgICAgZXZlbnROYW1lczogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXZlbnRzKSxcbiAgICAgIGVuYWJsZWRFdmVudE5hbWVzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlbmFibGVkRXZlbnRzKSxcbiAgICAgIHByb2Nlc3NNb3ZlOiBmdW5jdGlvbiBwcm9jZXNzTW92ZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfcHJvY2Vzc01vdmUoc3RhdGUsIGFjdGlvbiwgZGlzcGF0Y2gpO1xuICAgICAgfSxcbiAgICAgIHByb2Nlc3NHYW1lRXZlbnQ6IGZ1bmN0aW9uIHByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc3RhdGUsIGFjdGlvbiwgZGlzcGF0Y2gpO1xuICAgICAgfSxcbiAgICAgIG9wdGltaXN0aWNVcGRhdGU6IG9wdGltaXN0aWNVcGRhdGUsXG4gICAgICBjYW5QbGF5ZXJDYWxsRXZlbnQ6IGZ1bmN0aW9uIGNhblBsYXllckNhbGxFdmVudChHJCQxLCBjdHgkJDEsIHBsYXllcklEKSB7XG4gICAgICAgIHJldHVybiBjdHgkJDEuY3VycmVudFBsYXllciA9PSBwbGF5ZXJJRCAmJiBjdHgkJDEuYWN0aW9uUGxheWVycy5pbmNsdWRlcyhwbGF5ZXJJRCk7XG4gICAgICB9LFxuICAgICAgY2FuUGxheWVyTWFrZU1vdmU6IGZ1bmN0aW9uIGNhblBsYXllck1ha2VNb3ZlKEckJDEsIGN0eCQkMSwgcGxheWVySUQpIHtcbiAgICAgICAgdmFyIGFjdGlvblBsYXllcnMgPSBjdHgkJDEuYWN0aW9uUGxheWVycyB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGFjdGlvblBsYXllcnMuaW5jbHVkZXMocGxheWVySUQpO1xuICAgICAgfSxcbiAgICAgIGNhbk1ha2VNb3ZlOiBmdW5jdGlvbiBjYW5NYWtlTW92ZShHJCQxLCBjdHgkJDEsIG1vdmVOYW1lKSB7XG4gICAgICAgIC8vIERpc2FsbG93IG1vdmVzIG9uY2UgdGhlIGdhbWUgaXMgb3Zlci5cbiAgICAgICAgaWYgKGN0eCQkMS5nYW1lb3ZlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7IC8vIFVzZXItcHJvdmlkZWQgbW92ZSB2YWxpZGF0aW9uLlxuXG4gICAgICAgIHJldHVybiBfY2FuTWFrZU1vdmUoRyQkMSwgY3R4JCQxLCBtb3ZlTmFtZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRmxvd1dpdGhQaGFzZXNcbiAgICpcbiAgICogQSB2ZXJ5IGN1c3RvbWl6YWJsZSBnYW1lIGZsb3cgdGhhdCBpbnRyb2R1Y2VzIHBoYXNlcyB0byB0aGVcbiAgICogZ2FtZS4gRWFjaCBwaGFzZSBjYW4gYmUgY29uZmlndXJlZCB3aXRoOlxuICAgKiAtIEEgY3VzdG9tIHR1cm4gb3JkZXIuXG4gICAqIC0gQXV0b21hdGljYWxseSBleGVjdXRlZCBzZXR1cCAvIGNsZWFudXAgY29kZS5cbiAgICogLSBDdXN0b20gcGhhc2UgZW5kIGNvbmRpdGlvbnMuXG4gICAqIC0gQSBtb3ZlIHdoaXRlbGlzdCB0aGF0IGRpc2FsbG93cyBvdGhlciBtb3ZlcyBkdXJpbmcgdGhlIHBoYXNlLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbW92ZXNQZXJUdXJuIC0gRW5kIHRoZSB0dXJuIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgYSBjZXJ0YWluIG51bWJlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgbW92ZXMgKGRlZmF1bHQ6IHVuZGVmaW5lZCwgaS5lLiB0aGUgdHVybiBkb2VzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgYXV0b21hdGljYWxseSBlbmQgYWZ0ZXIgYSBjZXJ0YWluIG51bWJlciBvZiBtb3ZlcykuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBlbmRUdXJuSWYgLSBUaGUgdHVybiBhdXRvbWF0aWNhbGx5IGVuZHMgaWYgdGhpc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJucyBhIHRydXRoeSB2YWx1ZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoZWNrZWQgYWZ0ZXIgZWFjaCBtb3ZlKS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHRoZSByZXR1cm4gdmFsdWUgaXMgeyBuZXh0OiBwbGF5ZXJJRCB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBwbGF5ZXIgaXMgdGhlIG5leHQgcGxheWVyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5zdGVhZCBvZiBmb2xsb3dpbmcgdGhlIHR1cm4gb3JkZXIpLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEcsIGN0eCkgPT4gYm9vbGVhbnxvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGVuZEdhbWVJZiAtIFRoZSBnYW1lIGF1dG9tYXRpY2FsbHkgZW5kcyBpZiB0aGlzIGZ1bmN0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5zIGFueXRoaW5nIChjaGVja2VkIGFmdGVyIGVhY2ggbW92ZSkuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmV0dXJuIHZhbHVlIGlzIGF2YWlsYWJsZSBhdCBjdHguZ2FtZW92ZXIuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRywgY3R4KSA9PiB7fVxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gb25UdXJuQmVnaW4gLSBBbnkgY29kZSB0byBydW4gd2hlbiBhIHR1cm4gYmVnaW5zLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChHLCBjdHgpID0+IEdcbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IG9uVHVybkVuZCAtIEFueSBjb2RlIHRvIHJ1biB3aGVuIGEgdHVybiBlbmRzLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEcsIGN0eCkgPT4gR1xuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gb25Nb3ZlIC0gQW55IGNvZGUgdG8gcnVuIGF0IHRoZSBlbmQgb2YgYSBtb3ZlLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEcsIGN0eCwgeyB0eXBlOiAnbW92ZU5hbWUnLCBhcmdzOiBbXSB9KSA9PiBHXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSB0dXJuT3JkZXIgLSBDdXN0b21pemUgdGhlIHR1cm4gb3JkZXIgKHNlZSB0dXJuLW9yZGVyLmpzKS5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGVuZFR1cm4gLSBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYGVuZFR1cm5gIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZW5kUGhhc2UgLSBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYGVuZFBoYXNlYCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGVuZEdhbWUgLSBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgdGhlIGBlbmRHYW1lYCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IHNldEFjdGlvblBsYXllcnMgLSBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgdGhlIGBzZXRBY3Rpb25QbGF5ZXJzYCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGFsbG93ZWRNb3ZlcyAtIExpc3Qgb2YgbW92ZXMgdGhhdCBhcmUgYWxsb3dlZC5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgY2FuIGJlIGVpdGhlciBhIGxpc3Qgb2ZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUgbmFtZXMgb3IgYSBmdW5jdGlvbiB3aXRoIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlIChHLCBjdHgpID0+IFtdLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlZmF1bHQ6IG51bGwsIGkuZS4gYWxsIG1vdmVzIGFyZSBhbGxvd2VkKS5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IHVuZG9hYmxlTW92ZXMgLSBMaXN0IG9mIG1vdmVzIHRoYXQgYXJlIHVuZG9hYmxlLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlZmF1bHQ6IG51bGwsIGkuZS4gYWxsIG1vdmVzIGFyZSB1bmRvYWJsZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlZGFjdGVkTW92ZXMgLSBMaXN0IG9mIG1vdmVzIHRvIGJlIHJlZGFjdGVkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHRoZSBsb2cuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gb3B0aW1pc3RpY1VwZGF0ZSAtIChHLCBjdHgsIG1vdmUpID0+IGJvb2xlYW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250cm9sIHdoZXRoZXIgYSBtb3ZlIHNob3VsZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGV4ZWN1dGVkIG9wdGltaXN0aWNhbGx5IG9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNsaWVudCB3aGlsZSB3YWl0aW5nIGZvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXN1bHQgb2YgZXhlY3V0aW9uIGZyb21cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gcGhhc2VzIC0gQSBtYXAgb2YgcGhhc2VzIGluIHRoZSBnYW1lLlxuICAgKlxuICAgKiBFYWNoIHBoYXNlIGlzIGRlc2NyaWJlZCBieSBhbiBvYmplY3Qgd2hvc2Uga2V5IGlzIHRoZSBwaGFzZSBuYW1lLlxuICAgKlxuICAgKiBBbGwgdGhlIHByb3BlcnRpZXMgYmVsb3cgb3ZlcnJpZGUgdGhlaXIgZ2xvYmFsIGVxdWl2YWxlbnRzXG4gICAqIGFib3ZlIHdoZW5ldmVyIHRoZXkgYXJlIGRlZmluZWQgKGkuZS4gdGhlIGdsb2JhbCBzZXR0aW5nXG4gICAqIGlzIHVzZWQgaWYgYSBwaGFzZS1zcGVjaWZpYyBzZXR0aW5nIGlzIGFic2VudCkuXG4gICAqXG4gICAqIHtcbiAgICogICAvLyBBbnkgc2V0dXAgY29kZSB0byBydW4gYmVmb3JlIHRoZSBwaGFzZSBiZWdpbnMuXG4gICAqICAgb25QaGFzZUJlZ2luOiAoRywgY3R4KSA9PiBHLFxuICAgKlxuICAgKiAgIC8vIEFueSBjbGVhbnVwIGNvZGUgdG8gcnVuIGFmdGVyIHRoZSBwaGFzZSBlbmRzLlxuICAgKiAgIG9uUGhhc2VFbmQ6IChHLCBjdHgpID0+IEcsXG4gICAqXG4gICAqICAgLy8gVGhlIHBoYXNlIGVuZHMgaWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLlxuICAgKiAgIC8vIElmIHRoZSByZXR1cm4gdmFsdWUgaXMgb2YgdGhlIGZvcm0geyBuZXh0OiAncGhhc2UgbmFtZScgfVxuICAgKiAgIC8vIHRoZW4gdGhhdCB3aWxsIGJlIGNob3NlbiBhcyB0aGUgbmV4dCBwaGFzZS5cbiAgICogICBlbmRQaGFzZUlmOiAoRywgY3R4KSA9PiBib29sZWFufG9iamVjdCxcbiAgICpcbiAgICogICBQaGFzZS1zcGVjaWZpYyBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlaXIgZ2xvYmFsIGVxdWl2YWxlbnRzOlxuICAgKlxuICAgKiAgIC8vIEEgcGhhc2Utc3BlY2lmaWMgZW5kVHVybklmLlxuICAgKiAgIGVuZFR1cm5JZjogKEcsIGN0eCkgPT4gYm9vbGVhbnxvYmplY3QsXG4gICAqXG4gICAqICAgLy8gQSBwaGFzZS1zcGVjaWZpYyBlbmRHYW1lSWYuXG4gICAqICAgZW5kR2FtZUlmOiAoRywgY3R4KSA9PiB7fSxcbiAgICpcbiAgICogICAvLyBBIHBoYXNlLXNwZWNpZmljIG9uVHVybkJlZ2luXG4gICAqICAgb25UdXJuQmVnaW46IChHLCBjdHgpID0+IEcsXG4gICAqXG4gICAqICAgLy8gQSBwaGFzZS1zcGVjaWZpYyBvblR1cm5FbmQuXG4gICAqICAgb25UdXJuRW5kOiAoRywgY3R4KSA9PiBHLFxuICAgKlxuICAgKiAgIC8vIEEgcGhhc2Utc3BlY2lmaWMgb25Nb3ZlLlxuICAgKiAgIG9uTW92ZSAtIChHLCBjdHgpID0+IEcsXG4gICAqXG4gICAqICAgLy8gQSBwaGFzZS1zcGVjaWZpYyB0dXJuT3JkZXIuXG4gICAqICAgdHVybk9yZGVyOiBUdXJuT3JkZXIuREVGQVVMVCxcbiAgICpcbiAgICogICAvLyBBIHBoYXNlLXNwZWNpZmljIG1vdmVzUGVyVHVybi5cbiAgICogICBtb3Zlc1BlclR1cm46IGludGVnZXIsXG4gICAqXG4gICAqICAgLy8gTGlzdCBvZiBtb3ZlcyBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGxpc3Qgb2YgbW92ZXNcbiAgICogICAvLyB0aGF0IGFyZSBhbGxvd2VkIGluIHRoaXMgcGhhc2UuXG4gICAqICAgYWxsb3dlZE1vdmVzOiAoRywgY3R4KSA9PiBbJ21vdmVBJywgLi4uXSxcbiAgICpcbiAgICogICAvLyBMaXN0IG9mIG1vdmVzIHRoYXQgYXJlIHVuZG9hYmxlLlxuICAgKiAgIHVuZG9hYmxlTW92ZXM6IFsnbW92ZUEnLCAuLi5dLFxuICAgKiB9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIEZsb3dXaXRoUGhhc2VzKF9yZWYyKSB7XG4gICAgdmFyIHBoYXNlcyA9IF9yZWYyLnBoYXNlcyxcbiAgICAgICAgc3RhcnRpbmdQaGFzZSA9IF9yZWYyLnN0YXJ0aW5nUGhhc2UsXG4gICAgICAgIG1vdmVzUGVyVHVybiA9IF9yZWYyLm1vdmVzUGVyVHVybixcbiAgICAgICAgZW5kVHVybklmID0gX3JlZjIuZW5kVHVybklmLFxuICAgICAgICBlbmRHYW1lSWYgPSBfcmVmMi5lbmRHYW1lSWYsXG4gICAgICAgIG9uVHVybkJlZ2luID0gX3JlZjIub25UdXJuQmVnaW4sXG4gICAgICAgIG9uVHVybkVuZCA9IF9yZWYyLm9uVHVybkVuZCxcbiAgICAgICAgb25Nb3ZlID0gX3JlZjIub25Nb3ZlLFxuICAgICAgICB0dXJuT3JkZXIgPSBfcmVmMi50dXJuT3JkZXIsXG4gICAgICAgIGVuZFR1cm4gPSBfcmVmMi5lbmRUdXJuLFxuICAgICAgICBlbmRQaGFzZSA9IF9yZWYyLmVuZFBoYXNlLFxuICAgICAgICBlbmRHYW1lID0gX3JlZjIuZW5kR2FtZSxcbiAgICAgICAgc2V0QWN0aW9uUGxheWVycyA9IF9yZWYyLnNldEFjdGlvblBsYXllcnMsXG4gICAgICAgIHVuZG9hYmxlTW92ZXMgPSBfcmVmMi51bmRvYWJsZU1vdmVzLFxuICAgICAgICBhbGxvd2VkTW92ZXMgPSBfcmVmMi5hbGxvd2VkTW92ZXMsXG4gICAgICAgIHJlZGFjdGVkTW92ZXMgPSBfcmVmMi5yZWRhY3RlZE1vdmVzLFxuICAgICAgICBfb3B0aW1pc3RpY1VwZGF0ZSA9IF9yZWYyLm9wdGltaXN0aWNVcGRhdGUsXG4gICAgICAgIGdhbWUgPSBfcmVmMi5nYW1lO1xuXG4gICAgLy8gQXR0YWNoIGRlZmF1bHRzLlxuICAgIGlmIChlbmRQaGFzZSA9PT0gdW5kZWZpbmVkICYmIHBoYXNlcykge1xuICAgICAgZW5kUGhhc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlbmRUdXJuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFR1cm4gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlbmRHYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZEdhbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2V0QWN0aW9uUGxheWVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRBY3Rpb25QbGF5ZXJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKF9vcHRpbWlzdGljVXBkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIF9vcHRpbWlzdGljVXBkYXRlID0gZnVuY3Rpb24gb3B0aW1pc3RpY1VwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChnYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGdhbWUgPSB7XG4gICAgICAgIHBsdWdpbnM6IFtdXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghcGhhc2VzKSBwaGFzZXMgPSB7fTtcbiAgICBpZiAoIXN0YXJ0aW5nUGhhc2UpIHN0YXJ0aW5nUGhhc2UgPSAnZGVmYXVsdCc7XG4gICAgaWYgKCFlbmRUdXJuSWYpIGVuZFR1cm5JZiA9IGZ1bmN0aW9uIGVuZFR1cm5JZigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGlmICghZW5kR2FtZUlmKSBlbmRHYW1lSWYgPSBmdW5jdGlvbiBlbmRHYW1lSWYoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgaWYgKCFvblR1cm5CZWdpbikgb25UdXJuQmVnaW4gPSBmdW5jdGlvbiBvblR1cm5CZWdpbihHJCQxKSB7XG4gICAgICByZXR1cm4gRyQkMTtcbiAgICB9O1xuICAgIGlmICghb25UdXJuRW5kKSBvblR1cm5FbmQgPSBmdW5jdGlvbiBvblR1cm5FbmQoRyQkMSkge1xuICAgICAgcmV0dXJuIEckJDE7XG4gICAgfTtcbiAgICBpZiAoIW9uTW92ZSkgb25Nb3ZlID0gZnVuY3Rpb24gb25Nb3ZlKEckJDEpIHtcbiAgICAgIHJldHVybiBHJCQxO1xuICAgIH07XG4gICAgaWYgKCF0dXJuT3JkZXIpIHR1cm5PcmRlciA9IFR1cm5PcmRlci5ERUZBVUxUO1xuICAgIGlmIChhbGxvd2VkTW92ZXMgPT09IHVuZGVmaW5lZCkgYWxsb3dlZE1vdmVzID0gbnVsbDtcbiAgICBpZiAodW5kb2FibGVNb3ZlcyA9PT0gdW5kZWZpbmVkKSB1bmRvYWJsZU1vdmVzID0gbnVsbDtcbiAgICB2YXIgcGhhc2VNYXAgPSBwaGFzZXM7XG5cbiAgICBpZiAoJ2RlZmF1bHQnIGluIHBoYXNlTWFwKSB7XG4gICAgICBlcnJvcignY2Fubm90IHNwZWNpZnkgcGhhc2Ugd2l0aCBuYW1lIFwiZGVmYXVsdFwiJyk7XG4gICAgfVxuXG4gICAgcGhhc2VNYXBbJ2RlZmF1bHQnXSA9IHt9O1xuXG4gICAgZm9yICh2YXIgcGhhc2UgaW4gcGhhc2VNYXApIHtcbiAgICAgIHZhciBjb25mID0gcGhhc2VNYXBbcGhhc2VdO1xuXG4gICAgICBpZiAoY29uZi5lbmRQaGFzZUlmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZi5lbmRQaGFzZUlmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25mLm9uUGhhc2VCZWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmYub25QaGFzZUJlZ2luID0gZnVuY3Rpb24gKEckJDEpIHtcbiAgICAgICAgICByZXR1cm4gRyQkMTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uZi5vblBoYXNlQmVnaW4gPSBGbldyYXAoY29uZi5vblBoYXNlQmVnaW4sIGdhbWUpO1xuXG4gICAgICBpZiAoY29uZi5vblBoYXNlRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZi5vblBoYXNlRW5kID0gZnVuY3Rpb24gKEckJDEpIHtcbiAgICAgICAgICByZXR1cm4gRyQkMTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uZi5vblBoYXNlRW5kID0gRm5XcmFwKGNvbmYub25QaGFzZUVuZCwgZ2FtZSk7XG5cbiAgICAgIGlmIChjb25mLm1vdmVzUGVyVHVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmYubW92ZXNQZXJUdXJuID0gbW92ZXNQZXJUdXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZi5lbmRUdXJuSWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25mLmVuZFR1cm5JZiA9IGVuZFR1cm5JZjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmYuZW5kR2FtZUlmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZi5lbmRHYW1lSWYgPSBlbmRHYW1lSWY7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25mLm9uVHVybkJlZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZi5vblR1cm5CZWdpbiA9IG9uVHVybkJlZ2luO1xuICAgICAgfVxuXG4gICAgICBjb25mLm9uVHVybkJlZ2luID0gRm5XcmFwKGNvbmYub25UdXJuQmVnaW4sIGdhbWUpO1xuXG4gICAgICBpZiAoY29uZi5vblR1cm5FbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25mLm9uVHVybkVuZCA9IG9uVHVybkVuZDtcbiAgICAgIH1cblxuICAgICAgY29uZi5vblR1cm5FbmQgPSBGbldyYXAoY29uZi5vblR1cm5FbmQsIGdhbWUpO1xuXG4gICAgICBpZiAoY29uZi5vbk1vdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25mLm9uTW92ZSA9IG9uTW92ZTtcbiAgICAgIH1cblxuICAgICAgY29uZi5vbk1vdmUgPSBGbldyYXAoY29uZi5vbk1vdmUsIGdhbWUpO1xuXG4gICAgICBpZiAoY29uZi50dXJuT3JkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25mLnR1cm5PcmRlciA9IHR1cm5PcmRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmYudW5kb2FibGVNb3ZlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmYudW5kb2FibGVNb3ZlcyA9IHVuZG9hYmxlTW92ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25mLmFsbG93ZWRNb3ZlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmYuYWxsb3dlZE1vdmVzID0gYWxsb3dlZE1vdmVzO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmYuYWxsb3dlZE1vdmVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHQgPSBjb25mLmFsbG93ZWRNb3ZlcztcblxuICAgICAgICAgIGNvbmYuYWxsb3dlZE1vdmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkRW5kUGhhc2UgPSBmdW5jdGlvbiBzaG91bGRFbmRQaGFzZShfcmVmMykge1xuICAgICAgdmFyIEckJDEgPSBfcmVmMy5HLFxuICAgICAgICAgIGN0eCQkMSA9IF9yZWYzLmN0eDtcbiAgICAgIHZhciBjb25mID0gcGhhc2VNYXBbY3R4JCQxLnBoYXNlXTtcbiAgICAgIHJldHVybiBjb25mLmVuZFBoYXNlSWYoRyQkMSwgY3R4JCQxKTtcbiAgICB9O1xuXG4gICAgdmFyIHNob3VsZEVuZFR1cm4gPSBmdW5jdGlvbiBzaG91bGRFbmRUdXJuKF9yZWY0KSB7XG4gICAgICB2YXIgRyQkMSA9IF9yZWY0LkcsXG4gICAgICAgICAgY3R4JCQxID0gX3JlZjQuY3R4O1xuICAgICAgdmFyIGNvbmYgPSBwaGFzZU1hcFtjdHgkJDEucGhhc2VdO1xuICAgICAgdmFyIGN1cnJlbnRQbGF5ZXJNb3ZlcyA9IGN0eCQkMS5zdGF0cy50dXJuLm51bU1vdmVzW2N0eCQkMS5jdXJyZW50UGxheWVyXSB8fCAwO1xuXG4gICAgICBpZiAoY29uZi5tb3Zlc1BlclR1cm4gJiYgY3VycmVudFBsYXllck1vdmVzID49IGNvbmYubW92ZXNQZXJUdXJuKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZi5lbmRUdXJuSWYoRyQkMSwgY3R4JCQxKTtcbiAgICB9OyAvLyBIZWxwZXIgdG8gcGVyZm9ybSBzdGFydC1vZi1waGFzZSBpbml0aWFsaXphdGlvbi5cblxuXG4gICAgdmFyIHN0YXJ0UGhhc2UgPSBmdW5jdGlvbiBzdGFydFBoYXNlKHN0YXRlLCBjb25maWcpIHtcbiAgICAgIHZhciBHJCQxID0gY29uZmlnLm9uUGhhc2VCZWdpbihzdGF0ZS5HLCBzdGF0ZS5jdHgpO1xuICAgICAgdmFyIGN0eCQkMSA9IEluaXRUdXJuT3JkZXJTdGF0ZShHJCQxLCBzdGF0ZS5jdHgsIGNvbmZpZy50dXJuT3JkZXIpOyAvLyBBbGxvdyBwbHVnaW5zIHRvIG1vZGlmeSBHIGFuZCBjdHggYXQgdGhlIGJlZ2lubmluZyBvZiBhIHBoYXNlLlxuXG4gICAgICBHJCQxID0gRy5vblBoYXNlQmVnaW4oRyQkMSwgY3R4JCQxLCBnYW1lKTtcbiAgICAgIGN0eCQkMSA9IGN0eC5vblBoYXNlQmVnaW4oY3R4JCQxLCBnYW1lKTsgLy8gUmVzZXQgc3RhdHMuXG5cbiAgICAgIGN0eCQkMS5zdGF0cyA9IF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMS5zdGF0cywge1xuICAgICAgICBwaGFzZTogX29iamVjdFNwcmVhZCh7fSwgY3R4JCQxLnN0YXRzLnBoYXNlLCB7XG4gICAgICAgICAgbnVtTW92ZXM6IHt9LFxuICAgICAgICAgIGFsbFBsYXllZDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdmFyIGFsbG93ZWRNb3ZlcyA9IGNvbmZpZy5hbGxvd2VkTW92ZXMoRyQkMSwgY3R4JCQxKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICBHOiBHJCQxLFxuICAgICAgICBjdHg6IF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgIGFsbG93ZWRNb3ZlczogYWxsb3dlZE1vdmVzXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHN0YXJ0VHVybiA9IGZ1bmN0aW9uIHN0YXJ0VHVybihzdGF0ZSwgY29uZmlnKSB7XG4gICAgICB2YXIgRyQkMSA9IGNvbmZpZy5vblR1cm5CZWdpbihzdGF0ZS5HLCBzdGF0ZS5jdHgpO1xuICAgICAgdmFyIHBsYWluQ3R4ID0gQ29udGV4dEVuaGFuY2VyLmRldGFjaEFsbEZyb21Db250ZXh0KHN0YXRlLmN0eCk7XG4gICAgICB2YXIgX3VuZG8gPSBbe1xuICAgICAgICBHOiBHJCQxLFxuICAgICAgICBjdHg6IHBsYWluQ3R4XG4gICAgICB9XTtcblxuICAgICAgdmFyIGN0eCQkMSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmN0eCk7XG5cbiAgICAgIGN0eCQkMS5hbGxvd2VkTW92ZXMgPSBjb25maWcuYWxsb3dlZE1vdmVzKEckJDEsIGN0eCQkMSk7IC8vIFJlc2V0IHN0YXRzLlxuXG4gICAgICBjdHgkJDEuc3RhdHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBjdHgkJDEuc3RhdHMsIHtcbiAgICAgICAgdHVybjogX29iamVjdFNwcmVhZCh7fSwgY3R4JCQxLnN0YXRzLnR1cm4sIHtcbiAgICAgICAgICBudW1Nb3Zlczoge30sXG4gICAgICAgICAgYWxsUGxheWVkOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgRzogRyQkMSxcbiAgICAgICAgY3R4OiBjdHgkJDEsXG4gICAgICAgIF91bmRvOiBfdW5kbyxcbiAgICAgICAgX3JlZG86IFtdXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHN0YXJ0R2FtZSA9IGZ1bmN0aW9uIHN0YXJ0R2FtZShzdGF0ZSkge1xuICAgICAgaWYgKCEoc3RhdGUuY3R4LnBoYXNlIGluIHBoYXNlTWFwKSkge1xuICAgICAgICBlcnJvcignaW52YWxpZCBzdGFydGluZ1BoYXNlOiAnICsgc3RhdGUuY3R4LnBoYXNlKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29uZiA9IHBoYXNlTWFwW3N0YXRlLmN0eC5waGFzZV07XG4gICAgICBzdGF0ZSA9IHN0YXJ0UGhhc2Uoc3RhdGUsIGNvbmYpO1xuICAgICAgc3RhdGUgPSBzdGFydFR1cm4oc3RhdGUsIGNvbmYpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogZW5kUGhhc2UgKGdhbWUgZXZlbnQpXG4gICAgICpcbiAgICAgKiBFbmRzIHRoZSBjdXJyZW50IHBoYXNlLlxuICAgICAqIEFsc28gcnVucyBhbnkgcGhhc2UgY2xlYW51cCBjb2RlIGFuZCBzZXR1cCBjb2RlIGZvciB0aGVcbiAgICAgKiBuZXh0IHBoYXNlIChpZiBhbnkpLlxuICAgICAqXG4gICAgICogVGhlIG5leHQgcGhhc2UgaXMgY2hvc2VuIGluIGEgcm91bmQtcm9iaW4gZmFzaGlvbiwgd2l0aCB0aGVcbiAgICAgKiBvcHRpb24gdG8gb3ZlcnJpZGUgdGhhdCBieSBwYXNzaW5nIG5leHRQaGFzZS5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgY2FsbCByZXN1bHRzIGluIGEgY3ljbGUsIHRoZSBwaGFzZSBpcyByZXNldCB0b1xuICAgICAqIHRoZSBkZWZhdWx0IHBoYXNlLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBlbmRQaGFzZUV2ZW50KHN0YXRlLCBhcmcsIHZpc2l0ZWRQaGFzZXMpIHtcbiAgICAgIHZhciBHJCQxID0gc3RhdGUuRztcbiAgICAgIHZhciBjdHgkJDEgPSBzdGF0ZS5jdHg7IC8vIFJ1biBhbnkgY2xlYW51cCBjb2RlIGZvciB0aGUgcGhhc2UgdGhhdCBpcyBhYm91dCB0byBlbmQuXG5cbiAgICAgIHZhciBjb25mID0gcGhhc2VNYXBbY3R4JCQxLnBoYXNlXTtcbiAgICAgIEckJDEgPSBjb25mLm9uUGhhc2VFbmQoRyQkMSwgY3R4JCQxKTtcbiAgICAgIHZhciBnYW1lb3ZlciA9IGNvbmYuZW5kR2FtZUlmKEckJDEsIGN0eCQkMSk7XG5cbiAgICAgIGlmIChnYW1lb3ZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIEc6IEckJDEsXG4gICAgICAgICAgY3R4OiBfb2JqZWN0U3ByZWFkKHt9LCBjdHgkJDEsIHtcbiAgICAgICAgICAgIGdhbWVvdmVyOiBnYW1lb3ZlclxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldlBoYXNlID0gY3R4JCQxLnBoYXNlOyAvLyBVcGRhdGUgdGhlIHBoYXNlLlxuXG4gICAgICBpZiAoYXJnICYmIGFyZyAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoYXJnLm5leHQgaW4gcGhhc2VNYXApIHtcbiAgICAgICAgICBjdHgkJDEgPSBfb2JqZWN0U3ByZWFkKHt9LCBjdHgkJDEsIHtcbiAgICAgICAgICAgIHBoYXNlOiBhcmcubmV4dCxcbiAgICAgICAgICAgIHByZXZQaGFzZTogcHJldlBoYXNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3IoJ2ludmFsaWQgYXJndW1lbnQgdG8gZW5kUGhhc2U6ICcgKyBhcmcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvbmYubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0eCQkMSA9IF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgIHBoYXNlOiBjb25mLm5leHQsXG4gICAgICAgICAgcHJldlBoYXNlOiBwcmV2UGhhc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHgkJDEgPSBfb2JqZWN0U3ByZWFkKHt9LCBjdHgkJDEsIHtcbiAgICAgICAgICBwaGFzZTogY3R4JCQxLnByZXZQaGFzZSxcbiAgICAgICAgICBwcmV2UGhhc2U6IHByZXZQaGFzZVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gUnVuIGFueSBzZXR1cCBjb2RlIGZvciB0aGUgbmV3IHBoYXNlLlxuXG5cbiAgICAgIHN0YXRlID0gc3RhcnRQaGFzZShfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICBHOiBHJCQxLFxuICAgICAgICBjdHg6IGN0eCQkMVxuICAgICAgfSksIHBoYXNlTWFwW2N0eCQkMS5waGFzZV0pO1xuICAgICAgdmFyIG9yaWdUdXJuID0gc3RhdGUuY3R4LnR1cm47IC8vIEVuZCB0aGUgbmV3IHBoYXNlIGF1dG9tYXRpY2FsbHkgaWYgbmVjZXNzYXJ5LlxuICAgICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMsIHRoZSBgZGVmYXVsdGBcbiAgICAgIC8vIHBoYXNlIGlzIGNob3NlbiBhcyB0aGUgbmV4dCBwaGFzZSB0aGUgbW9tZW50IHdlXG4gICAgICAvLyBlbmQgdXAgYXQgYSBwaGFzZSB0aGF0IHdlJ3ZlIGFscmVhZHkgdmlzaXRlZCB3aGVuXG4gICAgICAvLyB3ZSBwcm9jZXNzZWQgdGhlIGVuZFBoYXNlIGV2ZW50IHRoYXQga2lja2VkIG9mIHRoaXNcbiAgICAgIC8vIGNoYWluIG9mIGV2ZW50cy5cblxuICAgICAgaWYgKCF2aXNpdGVkUGhhc2VzKSB2aXNpdGVkUGhhc2VzID0ge307XG5cbiAgICAgIGlmIChjdHgkJDEucGhhc2UgaW4gdmlzaXRlZFBoYXNlcykge1xuICAgICAgICBzdGF0ZSA9IHRoaXMuZGlzcGF0Y2goc3RhdGUsIGF1dG9tYXRpY0dhbWVFdmVudCgnZW5kUGhhc2UnLCBbe1xuICAgICAgICAgIG5leHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LCB2aXNpdGVkUGhhc2VzXSwgdGhpcy5wbGF5ZXJJRCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlzaXRlZFBoYXNlc1tjdHgkJDEucGhhc2VdID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVuZCA9IHNob3VsZEVuZFBoYXNlKHN0YXRlKTtcblxuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgc3RhdGUgPSB0aGlzLmRpc3BhdGNoKHN0YXRlLCBhdXRvbWF0aWNHYW1lRXZlbnQoJ2VuZFBoYXNlJywgW2VuZCwgdmlzaXRlZFBoYXNlc10sIHRoaXMucGxheWVySUQpKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBFbmQgdHVybiBpZiBlbmRUdXJuSWYgcmV0dXJucyBzb21ldGhpbmdcbiAgICAgIC8vIChhbmQgdGhlIHR1cm4gaGFzIG5vdCBhbHJlYWR5IGJlZW4gZW5kZWQgYnkgYSBuZXN0ZWQgZW5kUGhhc2UgY2FsbCkuXG5cblxuICAgICAgdmFyIGVuZFR1cm4gPSBzaG91bGRFbmRUdXJuKHN0YXRlKTtcblxuICAgICAgaWYgKGVuZFR1cm4gJiYgc3RhdGUuY3R4LnR1cm4gPT0gb3JpZ1R1cm4pIHtcbiAgICAgICAgc3RhdGUgPSB0aGlzLmRpc3BhdGNoKHN0YXRlLCBhdXRvbWF0aWNHYW1lRXZlbnQoJ2VuZFR1cm4nLCBbZW5kVHVybl0sIHRoaXMucGxheWVySUQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBlbmRUdXJuIChnYW1lIGV2ZW50KVxuICAgICAqXG4gICAgICogRW5kcyB0aGUgY3VycmVudCB0dXJuLlxuICAgICAqIFBhc3NlcyB0aGUgdHVybiB0byB0aGUgbmV4dCB0dXJuIGluIGEgcm91bmQtcm9iaW4gZmFzaGlvbi5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZW5kVHVybkV2ZW50KHN0YXRlLCBhcmcpIHtcbiAgICAgIHZhciBfc3RhdGUgPSBzdGF0ZSxcbiAgICAgICAgICBHJCQxID0gX3N0YXRlLkcsXG4gICAgICAgICAgY3R4JCQxID0gX3N0YXRlLmN0eDtcbiAgICAgIHZhciBjb25mID0gcGhhc2VNYXBbY3R4JCQxLnBoYXNlXTsgLy8gUHJldmVudCBlbmRpbmcgdGhlIHR1cm4gaWYgbW92ZXNQZXJUdXJuIGhhdmVuJ3QgYmVlbiBtYWRlLlxuXG4gICAgICB2YXIgY3VycmVudFBsYXllck1vdmVzID0gY3R4JCQxLnN0YXRzLnR1cm4ubnVtTW92ZXNbY3R4JCQxLmN1cnJlbnRQbGF5ZXJdIHx8IDA7XG5cbiAgICAgIGlmIChjb25mLm1vdmVzUGVyVHVybiAmJiBjdXJyZW50UGxheWVyTW92ZXMgPCBjb25mLm1vdmVzUGVyVHVybikge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9IC8vIFJ1biB0dXJuLWVuZCB0cmlnZ2Vycy5cblxuXG4gICAgICBHJCQxID0gY29uZi5vblR1cm5FbmQoRyQkMSwgY3R4JCQxKTsgLy8gVXBkYXRlIGdhbWVvdmVyLlxuXG4gICAgICB2YXIgZ2FtZW92ZXIgPSBjb25mLmVuZEdhbWVJZihHJCQxLCBjdHgkJDEpO1xuXG4gICAgICBpZiAoZ2FtZW92ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBHOiBHJCQxLFxuICAgICAgICAgIGN0eDogX29iamVjdFNwcmVhZCh7fSwgY3R4JCQxLCB7XG4gICAgICAgICAgICBnYW1lb3ZlcjogZ2FtZW92ZXJcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZFBoYXNlID0gZmFsc2U7IC8vIFVwZGF0ZSB0dXJuIG9yZGVyIHN0YXRlLlxuXG4gICAgICB7XG4gICAgICAgIHZhciBfVXBkYXRlVHVybk9yZGVyU3RhdGUgPSBVcGRhdGVUdXJuT3JkZXJTdGF0ZShHJCQxLCBjdHgkJDEsIGNvbmYudHVybk9yZGVyLCBhcmcpLFxuICAgICAgICAgICAgYSA9IF9VcGRhdGVUdXJuT3JkZXJTdGF0ZS5lbmRQaGFzZSxcbiAgICAgICAgICAgIGIgPSBfVXBkYXRlVHVybk9yZGVyU3RhdGUuY3R4O1xuXG4gICAgICAgIGVuZFBoYXNlID0gYTtcbiAgICAgICAgY3R4JCQxID0gYjtcbiAgICAgIH0gLy8gVXBkYXRlIHR1cm4uXG5cbiAgICAgIHZhciB0dXJuID0gY3R4JCQxLnR1cm4gKyAxOyAvLyBVcGRhdGUgc3RhdGUuXG5cbiAgICAgIGN0eCQkMSA9IF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICB0dXJuOiB0dXJuXG4gICAgICB9KTtcbiAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgRzogRyQkMSxcbiAgICAgICAgY3R4OiBjdHgkJDFcbiAgICAgIH0pOyAvLyBFbmQgcGhhc2UgaWYgY29uZGl0aW9uIGlzIG1ldC5cblxuICAgICAgdmFyIGVuZFBoYXNlQXJnID0gc2hvdWxkRW5kUGhhc2Uoc3RhdGUpO1xuXG4gICAgICBpZiAoZW5kUGhhc2VBcmcpIHtcbiAgICAgICAgZW5kUGhhc2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kUGhhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goc3RhdGUsIGF1dG9tYXRpY0dhbWVFdmVudCgnZW5kUGhhc2UnLCBbZW5kUGhhc2VBcmddLCB0aGlzLnBsYXllcklEKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGFydFR1cm4oc3RhdGUsIGNvbmYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZEdhbWVFdmVudChzdGF0ZSwgYXJnKSB7XG4gICAgICBpZiAoYXJnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgIGN0eDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgZ2FtZW92ZXI6IGFyZ1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdHMoc3RhdGUsIGtleSwgcGxheWVySUQpIHtcbiAgICAgIHZhciBtb3ZlcyA9IChzdGF0ZS5jdHguc3RhdHNba2V5XS5udW1Nb3Zlc1twbGF5ZXJJRF0gfHwgMCkgKyAxO1xuXG4gICAgICB2YXIgbnVtTW92ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5jdHguc3RhdHNba2V5XS5udW1Nb3ZlcywgX2RlZmluZVByb3BlcnR5KHt9LCBwbGF5ZXJJRCwgbW92ZXMpKTtcblxuICAgICAgdmFyIHQgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5jdHguc3RhdHNba2V5XSwge1xuICAgICAgICBudW1Nb3ZlczogbnVtTW92ZXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMobnVtTW92ZXMpLmxlbmd0aCA9PSBzdGF0ZS5jdHgubnVtUGxheWVycykge1xuICAgICAgICB0LmFsbFBsYXllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0cyA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmN0eC5zdGF0cywgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHQpKTtcblxuICAgICAgdmFyIGN0eCQkMSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLmN0eCwge1xuICAgICAgICBzdGF0czogc3RhdHNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgY3R4OiBjdHgkJDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NNb3ZlKHN0YXRlLCBhY3Rpb24sIGRpc3BhdGNoKSB7XG4gICAgICB2YXIgY29uZiA9IHBoYXNlTWFwW3N0YXRlLmN0eC5waGFzZV07XG4gICAgICBzdGF0ZSA9IHVwZGF0ZVN0YXRzKHN0YXRlLCAndHVybicsIGFjdGlvbi5wbGF5ZXJJRCk7XG4gICAgICBzdGF0ZSA9IHVwZGF0ZVN0YXRzKHN0YXRlLCAncGhhc2UnLCBhY3Rpb24ucGxheWVySUQpOyAvLyBVcGRhdGUgYWN0aW9uUGxheWVycyBpZiBfYWN0aW9uUGxheWVyc09uY2UgaXMgc2V0LlxuXG4gICAgICB2YXIgYWN0aW9uUGxheWVycyA9IHN0YXRlLmN0eC5hY3Rpb25QbGF5ZXJzO1xuICAgICAgdmFyIGFjdGlvblBsYXllcnNPbmNlRG9uZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGUuY3R4Ll9hY3Rpb25QbGF5ZXJzT25jZSkge1xuICAgICAgICB2YXIgcGxheWVySUQgPSBhY3Rpb24ucGxheWVySUQ7XG4gICAgICAgIGFjdGlvblBsYXllcnMgPSBhY3Rpb25QbGF5ZXJzLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICByZXR1cm4gaWQgIT09IHBsYXllcklEO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWN0aW9uUGxheWVycy5sZW5ndGggPT0gMCAmJiBjb25mLnR1cm5PcmRlci5lbmRQaGFzZU9uY2VEb25lKSB7XG4gICAgICAgICAgYWN0aW9uUGxheWVyc09uY2VEb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgIGN0eDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgYWN0aW9uUGxheWVyczogYWN0aW9uUGxheWVyc1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICB2YXIgRyQkMSA9IGNvbmYub25Nb3ZlKHN0YXRlLkcsIHN0YXRlLmN0eCwgYWN0aW9uKTtcbiAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgRzogRyQkMVxuICAgICAgfSk7XG4gICAgICB2YXIgb3JpZ1R1cm4gPSBzdGF0ZS5jdHgudHVybjtcbiAgICAgIHZhciBnYW1lb3ZlciA9IGNvbmYuZW5kR2FtZUlmKHN0YXRlLkcsIHN0YXRlLmN0eCk7IC8vIEVuZCB0aGUgcGhhc2UgYXV0b21hdGljYWxseSBpZiBlbmRQaGFzZUlmIGlzIHRydWUgb3IgaWYgZW5kR2FtZUlmIHJldHVybnMuXG5cbiAgICAgIHZhciBlbmRQaGFzZSA9IHNob3VsZEVuZFBoYXNlKHN0YXRlKSB8fCBhY3Rpb25QbGF5ZXJzT25jZURvbmU7XG5cbiAgICAgIGlmIChlbmRQaGFzZSB8fCBnYW1lb3ZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXRlID0gZGlzcGF0Y2goc3RhdGUsIGF1dG9tYXRpY0dhbWVFdmVudCgnZW5kUGhhc2UnLCBbZW5kUGhhc2VdLCBhY3Rpb24ucGxheWVySUQpKTsgLy8gVXBkYXRlIHRvIHRoZSBuZXcgcGhhc2UgY29uZmlndXJhdGlvblxuXG4gICAgICAgIGNvbmYgPSBwaGFzZU1hcFtzdGF0ZS5jdHgucGhhc2VdO1xuICAgICAgfSAvLyBFbmQgdGhlIHR1cm4gYXV0b21hdGljYWxseSBpZiBlbmRUdXJuSWYgaXMgdHJ1ZSBvciBpZiBlbmRHYW1lSWYgcmV0dXJucy5cbiAgICAgIC8vIChidXQgbm90IGlmIGVuZFBoYXNlIGFib3ZlIGFscmVhZHkgZW5kcyB0aGUgdHVybikuXG5cblxuICAgICAgdmFyIGVuZFR1cm4gPSBzaG91bGRFbmRUdXJuKHN0YXRlKTtcblxuICAgICAgaWYgKHN0YXRlLmN0eC50dXJuID09IG9yaWdUdXJuICYmIChlbmRUdXJuIHx8IGdhbWVvdmVyICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHN0YXRlID0gZGlzcGF0Y2goc3RhdGUsIGF1dG9tYXRpY0dhbWVFdmVudCgnZW5kVHVybicsIFtlbmRUdXJuXSwgYWN0aW9uLnBsYXllcklEKSk7XG4gICAgICB9IC8vIEVuZCB0aGUgZ2FtZSBhdXRvbWF0aWNhbGx5IGlmIGVuZEdhbWVJZiByZXR1cm5zLlxuXG5cbiAgICAgIGlmIChnYW1lb3ZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGN0eDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgICBnYW1lb3ZlcjogZ2FtZW92ZXJcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gVXBkYXRlIGFsbG93ZWRNb3Zlcy5cblxuXG4gICAgICB2YXIgYWxsb3dlZE1vdmVzID0gY29uZi5hbGxvd2VkTW92ZXMoc3RhdGUuRywgc3RhdGUuY3R4KTtcbiAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgY3R4OiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5jdHgsIHtcbiAgICAgICAgICBhbGxvd2VkTW92ZXM6IGFsbG93ZWRNb3Zlc1xuICAgICAgICB9KVxuICAgICAgfSk7IC8vIFVwZGF0ZSB1bmRvIC8gcmVkbyBzdGF0ZS5cblxuICAgICAgaWYgKCFlbmRUdXJuKSB7XG4gICAgICAgIHZhciB1bmRvJCQxID0gc3RhdGUuX3VuZG8gfHwgW107XG4gICAgICAgIHZhciBtb3ZlVHlwZSA9IGFjdGlvbi50eXBlO1xuICAgICAgICB2YXIgcGxhaW5DdHggPSBDb250ZXh0RW5oYW5jZXIuZGV0YWNoQWxsRnJvbUNvbnRleHQoc3RhdGUuY3R4KTtcbiAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIF91bmRvOiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHVuZG8kJDEpLCBbe1xuICAgICAgICAgICAgRzogc3RhdGUuRyxcbiAgICAgICAgICAgIGN0eDogcGxhaW5DdHgsXG4gICAgICAgICAgICBtb3ZlVHlwZTogbW92ZVR5cGVcbiAgICAgICAgICB9XSksXG4gICAgICAgICAgX3JlZG86IFtdXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgdmFyIGNhbk1ha2VNb3ZlID0gZnVuY3Rpb24gY2FuTWFrZU1vdmUoRyQkMSwgY3R4JCQxLCBtb3ZlTmFtZSkge1xuICAgICAgdmFyIGNvbmYgPSBwaGFzZU1hcFtjdHgkJDEucGhhc2VdO1xuICAgICAgdmFyIG1vdmVzID0gY29uZi5hbGxvd2VkTW92ZXMoRyQkMSwgY3R4JCQxKTtcbiAgICAgIGlmICghbW92ZXMpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIG1vdmVzLmluY2x1ZGVzKG1vdmVOYW1lKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhblVuZG9Nb3ZlID0gZnVuY3Rpb24gY2FuVW5kb01vdmUoRyQkMSwgY3R4JCQxLCBtb3ZlTmFtZSkge1xuICAgICAgdmFyIGNvbmYgPSBwaGFzZU1hcFtjdHgkJDEucGhhc2VdO1xuICAgICAgaWYgKCFjb25mLnVuZG9hYmxlTW92ZXMpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGNvbmYudW5kb2FibGVNb3Zlcy5pbmNsdWRlcyhtb3ZlTmFtZSk7XG4gICAgfTtcblxuICAgIHZhciBldmVudHMgPSB7XG4gICAgICBlbmRUdXJuOiBlbmRUdXJuRXZlbnQsXG4gICAgICBlbmRQaGFzZTogZW5kUGhhc2VFdmVudCxcbiAgICAgIGVuZEdhbWU6IGVuZEdhbWVFdmVudCxcbiAgICAgIHNldEFjdGlvblBsYXllcnM6IFNldEFjdGlvblBsYXllcnNFdmVudFxuICAgIH07XG4gICAgdmFyIGVuYWJsZWRFdmVudHMgPSB7fTtcblxuICAgIGlmIChlbmRUdXJuKSB7XG4gICAgICBlbmFibGVkRXZlbnRzWydlbmRUdXJuJ10gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlbmRQaGFzZSkge1xuICAgICAgZW5hYmxlZEV2ZW50c1snZW5kUGhhc2UnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGVuZEdhbWUpIHtcbiAgICAgIGVuYWJsZWRFdmVudHNbJ2VuZEdhbWUnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNldEFjdGlvblBsYXllcnMpIHtcbiAgICAgIGVuYWJsZWRFdmVudHNbJ3NldEFjdGlvblBsYXllcnMnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZsb3coe1xuICAgICAgY3R4OiBmdW5jdGlvbiBjdHgkJDEobnVtUGxheWVycykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG51bVBsYXllcnM6IG51bVBsYXllcnMsXG4gICAgICAgICAgdHVybjogMCxcbiAgICAgICAgICBjdXJyZW50UGxheWVyOiAnMCcsXG4gICAgICAgICAgYWN0aW9uUGxheWVyczogWycwJ10sXG4gICAgICAgICAgY3VycmVudFBsYXllck1vdmVzOiAwLFxuICAgICAgICAgIHBsYXlPcmRlcjogX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBBcnJheShudW1QbGF5ZXJzKSkubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSArICcnO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBsYXlPcmRlclBvczogMCxcbiAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgdHVybjoge1xuICAgICAgICAgICAgICBudW1Nb3Zlczoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaGFzZToge1xuICAgICAgICAgICAgICBudW1Nb3Zlczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsbFBsYXllZDogZmFsc2UsXG4gICAgICAgICAgcGhhc2U6IHN0YXJ0aW5nUGhhc2UsXG4gICAgICAgICAgcHJldlBoYXNlOiAnZGVmYXVsdCdcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGFydEdhbWUoc3RhdGUpO1xuICAgICAgfSxcbiAgICAgIG9wdGltaXN0aWNVcGRhdGU6IGZ1bmN0aW9uIG9wdGltaXN0aWNVcGRhdGUoRyQkMSwgY3R4JCQxLCBhY3Rpb24pIHtcbiAgICAgICAgLy8gU29tZSByYW5kb20gY29kZSB3YXMgZXhlY3V0ZWQuXG4gICAgICAgIGlmIChjdHgkJDEuX3JhbmRvbSAhPT0gdW5kZWZpbmVkICYmIGN0eCQkMS5fcmFuZG9tLnBybmdzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9vcHRpbWlzdGljVXBkYXRlKEckJDEsIGN0eCQkMSwgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgIGVuYWJsZWRFdmVudHM6IGVuYWJsZWRFdmVudHMsXG4gICAgICBwcm9jZXNzTW92ZTogcHJvY2Vzc01vdmUsXG4gICAgICBjYW5NYWtlTW92ZTogY2FuTWFrZU1vdmUsXG4gICAgICBjYW5VbmRvTW92ZTogY2FuVW5kb01vdmUsXG4gICAgICByZWRhY3RlZE1vdmVzOiByZWRhY3RlZE1vdmVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2FtZVxuICAgKlxuICAgKiBIZWxwZXIgdG8gZ2VuZXJhdGUgdGhlIGdhbWUgbW92ZSByZWR1Y2VyLiBUaGUgcmV0dXJuZWRcbiAgICogcmVkdWNlciBoYXMgdGhlIGZvbGxvd2luZyBzaWduYXR1cmU6XG4gICAqXG4gICAqIChHLCBhY3Rpb24sIGN0eCkgPT4ge31cbiAgICpcbiAgICogWW91IGNhbiByb2xsIHlvdXIgb3duIGlmIHlvdSBsaWtlLCBvciB1c2UgYW55IFJlZHV4XG4gICAqIGFkZG9uIHRvIGdlbmVyYXRlIHN1Y2ggYSByZWR1Y2VyLlxuICAgKlxuICAgKiBUaGUgY29udmVudGlvbiB1c2VkIGluIHRoaXMgZnJhbWV3b3JrIGlzIHRvXG4gICAqIGhhdmUgYWN0aW9uLnR5cGUgY29udGFpbiB0aGUgbmFtZSBvZiB0aGUgbW92ZSwgYW5kXG4gICAqIGFjdGlvbi5hcmdzIGNvbnRhaW4gYW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGFzIGFuXG4gICAqIEFycmF5LlxuICAgKlxuICAgKiBHYW1lKHtcbiAgICogICBuYW1lOiAndGljLXRhYy10b2UnLFxuICAgKlxuICAgKiAgIHNldHVwOiAobnVtUGxheWVycykgPT4ge1xuICAgKiAgICAgY29uc3QgRyA9IHsuLi59O1xuICAgKiAgICAgcmV0dXJuIEc7XG4gICAqICAgfSxcbiAgICpcbiAgICogICBwbHVnaW5zOiBbcGx1Z2luMSwgcGx1Z2luMiwgLi4uXSxcbiAgICpcbiAgICogICBtb3Zlczoge1xuICAgKiAgICAgJ21vdmVXaXRob3V0QXJncyc6IChHLCBjdHgpID0+IHtcbiAgICogICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIC4uLik7XG4gICAqICAgICB9LFxuICAgKiAgICAgJ21vdmVXaXRoQXJncyc6IChHLCBjdHgsIGFyZzAsIGFyZzEpID0+IHtcbiAgICogICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIEcsIC4uLik7XG4gICAqICAgICB9XG4gICAqICAgfSxcbiAgICpcbiAgICogICBwbGF5ZXJWaWV3OiAoRywgY3R4LCBwbGF5ZXJJRCkgPT4geyAuLi4gfSxcbiAgICpcbiAgICogICBmbG93OiB7XG4gICAqICAgICBlbmRHYW1lSWY6IChHLCBjdHgpID0+IHsgLi4uIH0sXG4gICAqICAgICBlbmRUdXJuSWY6IChHLCBjdHgpID0+IHsgLi4uIH0sXG4gICAqXG4gICAqICAgICBwaGFzZXM6IHtcbiAgICogICAgICAgQTogeyBvblBoYXNlQmVnaW46IChHLCBjdHgpID0+IEcsIG9uUGhhc2VFbmQ6IChHLCBjdHgpID0+IEcgfSxcbiAgICogICAgICAgQjogeyBvblBoYXNlQmVnaW46IChHLCBjdHgpID0+IEcsIG9uUGhhc2VFbmQ6IChHLCBjdHgpID0+IEcgfSxcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqICAgfSxcbiAgICogfSlcbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IHNldHVwIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBpbml0aWFsIHN0YXRlIG9mIEcuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBtb3ZlcyAtIEEgZGljdGlvbmFyeSBvZiBtb3ZlIGZ1bmN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IHBsYXllclZpZXcgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZhdGl2ZSBvZiBHIHRhaWxvcmVkIGZvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzcGVjaWZpZWQgcGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZmxvdyAtIEN1c3RvbWl6ZSB0aGUgZmxvdyBvZiB0aGUgZ2FtZSAoc2VlIGZsb3cuanMpLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIE11c3QgY29udGFpbiB0aGUgcmV0dXJuIHZhbHVlIG9mIEZsb3coKS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBpdCBjb250YWlucyBhbnkgb3RoZXIgb2JqZWN0LCBpdCBpcyBwcmVzdW1lZCB0byBiZSBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIEZsb3dXaXRoUGhhc2VzKCkuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBzZWVkIC0gU2VlZCBmb3IgdGhlIFBSTkcuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBsdWdpbnMgLSBMaXN0IG9mIHBsdWdpbnMuIEVhY2ggcGx1Z2luIGlzIGFuIG9iamVjdCBsaWtlIHRoZSBmb2xsb3dpbmc6XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsOiBXcmFwcyBhIG1vdmUgLyB0cmlnZ2VyIGZ1bmN0aW9uIGFuZCByZXR1cm5zXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB3cmFwcGVkIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBjYW4gZG8gYW55dGhpbmdcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgd2FudHMsIGJ1dCB3aWxsIHR5cGljYWxseSBiZSB1c2VkIHRvIGN1c3RvbWl6ZSBHLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbldyYXA6IChmbikgPT4ge1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoRywgY3R4LCAuLi5hcmdzKSA9PiB7XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHID0gcHJlcHJvY2VzcyhHKTtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEcgPSBmbihHLCBjdHgsIC4uLmFyZ3MpO1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRyA9IHBvc3Rwcm9jZXNzKEcpO1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEc7XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICpcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWw6IENhbGxlZCBkdXJpbmcgc2V0dXAuIENhbiBiZSB1c2VkIHRvXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1Z21lbnQgRyB3aXRoIGFkZGl0aW9uYWwgc3RhdGUgZHVyaW5nIHNldHVwLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR1cDogKEcsIGN0eCkgPT4gRyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICovXG5cbiAgZnVuY3Rpb24gR2FtZShnYW1lKSB7XG4gICAgaWYgKGdhbWUubmFtZSA9PT0gdW5kZWZpbmVkKSBnYW1lLm5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKGdhbWUuc2V0dXAgPT09IHVuZGVmaW5lZCkgZ2FtZS5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIGlmIChnYW1lLm1vdmVzID09PSB1bmRlZmluZWQpIGdhbWUubW92ZXMgPSB7fTtcbiAgICBpZiAoZ2FtZS5wbGF5ZXJWaWV3ID09PSB1bmRlZmluZWQpIGdhbWUucGxheWVyVmlldyA9IGZ1bmN0aW9uIChHJCQxKSB7XG4gICAgICByZXR1cm4gRyQkMTtcbiAgICB9O1xuICAgIGlmIChnYW1lLnBsdWdpbnMgPT09IHVuZGVmaW5lZCkgZ2FtZS5wbHVnaW5zID0gW107XG5cbiAgICBpZiAoIWdhbWUuZmxvdyB8fCBnYW1lLmZsb3cucHJvY2Vzc0dhbWVFdmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBnYW1lLmZsb3cgPSBGbG93V2l0aFBoYXNlcyhfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgZ2FtZTogZ2FtZVxuICAgICAgfSwgZ2FtZS5mbG93KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGdhbWUsIHtcbiAgICAgIG1vdmVOYW1lczogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZ2FtZS5tb3ZlcyksXG4gICAgICBwcm9jZXNzTW92ZTogZnVuY3Rpb24gcHJvY2Vzc01vdmUoRyQkMSwgYWN0aW9uLCBjdHgkJDEpIHtcbiAgICAgICAgaWYgKGdhbWUubW92ZXMuaGFzT3duUHJvcGVydHkoYWN0aW9uLnR5cGUpKSB7XG4gICAgICAgICAgdmFyIGN0eFdpdGhQbGF5ZXJJRCA9IF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgICAgcGxheWVySUQ6IGFjdGlvbi5wbGF5ZXJJRFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFyZ3MgPSBbRyQkMSwgY3R4V2l0aFBsYXllcklEXS5jb25jYXQoYWN0aW9uLmFyZ3MpO1xuICAgICAgICAgIHZhciBmbiA9IEZuV3JhcChnYW1lLm1vdmVzW2FjdGlvbi50eXBlXSwgZ2FtZSk7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBHJCQxO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG5cbiAgLyoqXG4gICAqIFBsYXllclZpZXcgcmVkdWNlcnMuXG4gICAqL1xuICB2YXIgUGxheWVyVmlldyA9IHtcbiAgICAvKipcbiAgICAgKiBTVFJJUF9TRUNSRVRTXG4gICAgICpcbiAgICAgKiBSZWR1Y2VyIHdoaWNoIHJlbW92ZXMgYSBrZXkgbmFtZWQgYHNlY3JldGAgYW5kXG4gICAgICogcmVtb3ZlcyBhbGwgdGhlIGtleXMgaW4gYHBsYXllcnNgLCBleGNlcHQgZm9yIHRoZSBvbmVcbiAgICAgKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHBsYXllcklELlxuICAgICAqL1xuICAgIFNUUklQX1NFQ1JFVFM6IGZ1bmN0aW9uIFNUUklQX1NFQ1JFVFMoRywgY3R4LCBwbGF5ZXJJRCkge1xuICAgICAgdmFyIHIgPSBfb2JqZWN0U3ByZWFkKHt9LCBHKTtcblxuICAgICAgaWYgKHIuc2VjcmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHIuc2VjcmV0O1xuICAgICAgfVxuXG4gICAgICBpZiAoci5wbGF5ZXJzKSB7XG4gICAgICAgIHIucGxheWVycyA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgcGxheWVySUQsIHIucGxheWVyc1twbGF5ZXJJRF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTcgVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG5cbiAgZXhwb3J0cy5HYW1lID0gR2FtZTtcbiAgZXhwb3J0cy5Jbml0aWFsaXplR2FtZSA9IEluaXRpYWxpemVHYW1lO1xuICBleHBvcnRzLkNyZWF0ZUdhbWVSZWR1Y2VyID0gQ3JlYXRlR2FtZVJlZHVjZXI7XG4gIGV4cG9ydHMuRmxvdyA9IEZsb3c7XG4gIGV4cG9ydHMuRmxvd1dpdGhQaGFzZXMgPSBGbG93V2l0aFBoYXNlcztcbiAgZXhwb3J0cy5UdXJuT3JkZXIgPSBUdXJuT3JkZXI7XG4gIGV4cG9ydHMuUGFzcyA9IFBhc3M7XG4gIGV4cG9ydHMuUGxheWVyVmlldyA9IFBsYXllclZpZXc7XG4gIGV4cG9ydHMuSU5WQUxJRF9NT1ZFID0gSU5WQUxJRF9NT1ZFO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncHJvcC10eXBlcycpLCByZXF1aXJlKCdtb3VzZXRyYXAnKSwgcmVxdWlyZSgnZmxhdHRlZCcpLCByZXF1aXJlKCdyZWR1eCcpLCByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50JyksIHJlcXVpcmUoJ2ltbWVyJyksIHJlcXVpcmUoJ3JlYWN0LWNvb2tpZXMnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0JywgJ3Byb3AtdHlwZXMnLCAnbW91c2V0cmFwJywgJ2ZsYXR0ZWQnLCAncmVkdXgnLCAnc29ja2V0LmlvLWNsaWVudCcsICdpbW1lcicsICdyZWFjdC1jb29raWVzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5DbGllbnQgPSB7fSwgZ2xvYmFsLlJlYWN0LCBnbG9iYWwuUHJvcFR5cGVzLCBnbG9iYWwuTW91c2V0cmFwLCBnbG9iYWwuRmxhdHRlZCwgZ2xvYmFsLlJlZHV4LCBnbG9iYWwuaW8sIGdsb2JhbC5pbW1lciwgZ2xvYmFsLkNvb2tpZXMpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIFJlYWN0LCBQcm9wVHlwZXMsIE1vdXNldHJhcCwgZmxhdHRlZCwgcmVkdXgsIGlvLCBwcm9kdWNlLCBDb29raWVzKSB7ICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdCA9IFJlYWN0ICYmIFJlYWN0Lmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBSZWFjdFsnZGVmYXVsdCddIDogUmVhY3Q7XG4gIFByb3BUeXBlcyA9IFByb3BUeXBlcyAmJiBQcm9wVHlwZXMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFByb3BUeXBlc1snZGVmYXVsdCddIDogUHJvcFR5cGVzO1xuICBNb3VzZXRyYXAgPSBNb3VzZXRyYXAgJiYgTW91c2V0cmFwLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBNb3VzZXRyYXBbJ2RlZmF1bHQnXSA6IE1vdXNldHJhcDtcbiAgaW8gPSBpbyAmJiBpby5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gaW9bJ2RlZmF1bHQnXSA6IGlvO1xuICBwcm9kdWNlID0gcHJvZHVjZSAmJiBwcm9kdWNlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBwcm9kdWNlWydkZWZhdWx0J10gOiBwcm9kdWNlO1xuICBDb29raWVzID0gQ29va2llcyAmJiBDb29raWVzLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBDb29raWVzWydkZWZhdWx0J10gOiBDb29raWVzO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICAgIHZhciBrZXksIGk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIGZ1bmN0aW9uIEFzc2lnblNob3J0Y3V0cyhtb3ZlTmFtZXMsIGV2ZW50TmFtZXMsIGJsYWNrbGlzdCkge1xuICAgIHZhciBzaG9ydGN1dHMgPSB7fTtcbiAgICB2YXIgZXZlbnRzID0ge307XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIG1vdmVOYW1lcykge1xuICAgICAgZXZlbnRzW25hbWVdID0gbmFtZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbmFtZSBpbiBldmVudE5hbWVzKSB7XG4gICAgICBldmVudHNbX25hbWVdID0gX25hbWU7XG4gICAgfVxuXG4gICAgdmFyIHRha2VuID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsYWNrbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBibGFja2xpc3RbaV07XG4gICAgICB0YWtlbltjXSA9IHRydWU7XG4gICAgfSAvLyBUcnkgYXNzaWduaW5nIHRoZSBmaXJzdCBjaGFyIG9mIGVhY2ggbW92ZSBhcyB0aGUgc2hvcnRjdXQuXG5cblxuICAgIHZhciB0ID0gdGFrZW47XG4gICAgdmFyIGNhblVzZUZpcnN0Q2hhciA9IHRydWU7XG5cbiAgICBmb3IgKHZhciBfbmFtZTIgaW4gZXZlbnRzKSB7XG4gICAgICB2YXIgc2hvcnRjdXQgPSBfbmFtZTJbMF07XG5cbiAgICAgIGlmICh0W3Nob3J0Y3V0XSkge1xuICAgICAgICBjYW5Vc2VGaXJzdENoYXIgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRbc2hvcnRjdXRdID0gdHJ1ZTtcbiAgICAgIHNob3J0Y3V0c1tfbmFtZTJdID0gc2hvcnRjdXQ7XG4gICAgfVxuXG4gICAgaWYgKGNhblVzZUZpcnN0Q2hhcikge1xuICAgICAgcmV0dXJuIHNob3J0Y3V0cztcbiAgICB9IC8vIElmIHRob3NlIGFyZW4ndCB1bmlxdWUsIHVzZSBhLXouXG5cblxuICAgIHQgPSB0YWtlbjtcbiAgICB2YXIgbmV4dCA9IDk3O1xuICAgIHNob3J0Y3V0cyA9IHt9O1xuXG4gICAgZm9yICh2YXIgX25hbWUzIGluIGV2ZW50cykge1xuICAgICAgdmFyIF9zaG9ydGN1dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dCk7XG5cbiAgICAgIHdoaWxlICh0W19zaG9ydGN1dF0pIHtcbiAgICAgICAgbmV4dCsrO1xuICAgICAgICBfc2hvcnRjdXQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHQpO1xuICAgICAgfVxuXG4gICAgICB0W19zaG9ydGN1dF0gPSB0cnVlO1xuICAgICAgc2hvcnRjdXRzW19uYW1lM10gPSBfc2hvcnRjdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3J0Y3V0cztcbiAgfVxuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuXG4gIHZhciBJdGVtID0gZnVuY3Rpb24gSXRlbShwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJnYW1laW5mby1pdGVtXCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHByb3BzLm5hbWUsIFwiIFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBKU09OLnN0cmluZ2lmeShwcm9wcy52YWx1ZSkpKTtcbiAgfTtcblxuICBJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbiAgfTtcbiAgdmFyIEdhbWVJbmZvID0gZnVuY3Rpb24gR2FtZUluZm8ocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImdhbWVpbmZvXCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgIG5hbWU6IFwiZ2FtZUlEXCIsXG4gICAgICB2YWx1ZTogcHJvcHMuZ2FtZUlEXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge1xuICAgICAgbmFtZTogXCJwbGF5ZXJJRFwiLFxuICAgICAgdmFsdWU6IHByb3BzLnBsYXllcklEXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge1xuICAgICAgbmFtZTogXCJpc0FjdGl2ZVwiLFxuICAgICAgdmFsdWU6IHByb3BzLmlzQWN0aXZlXG4gICAgfSksIHByb3BzLmlzTXVsdGlwbGF5ZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7XG4gICAgICBuYW1lOiBcImlzQ29ubmVjdGVkXCIsXG4gICAgICB2YWx1ZTogcHJvcHMuaXNDb25uZWN0ZWRcbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7XG4gICAgICBuYW1lOiBcImlzTXVsdGlwbGF5ZXJcIixcbiAgICAgIHZhbHVlOiBwcm9wcy5pc011bHRpcGxheWVyXG4gICAgfSkpKTtcbiAgfTtcbiAgR2FtZUluZm8ucHJvcFR5cGVzID0ge1xuICAgIGdhbWVJRDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGF5ZXJJRDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb25uZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzTXVsdGlwbGF5ZXI6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gICAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gICAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjc3MgPSBcIi8qXFxuICogQ29weXJpZ2h0IDIwMTcgVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXFxuICpcXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxcbiAqL1xcblxcbi5kZWJ1Zy11aSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcXG4gIGJveC1zaGFkb3c6IC0xcHggMCAxMHB4ICNhYWE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzAwcHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbiNkZWJ1Zy1jb250cm9scy5kb2NrdG9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICB0b3A6IDA7XFxuICByaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogLTNweCAzcHggM3B4ICNjY2M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc1MHB4KSB7XFxuICAuZGVidWctdWkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZGVidWctdWkgLmdhbWVpbmZvIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDI4NXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZWJ1Zy11aSAuZ2FtZWluZm8taXRlbSBkaXYge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5kZWJ1Zy11aSAuYWktdmlzdWFsaXphdGlvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgcmlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMwMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4uZGVidWctdWkgLnBhbmUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uZGVidWctdWkgc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGVidWctdWkgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGVidWctdWkgLm1vdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4uZGVidWctdWkgLm1vdmU6aG92ZXIge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5kZWJ1Zy11aSAubW92ZS5hY3RpdmUge1xcbiAgY29sb3I6ICMxMTE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlYnVnLXVpIC5tb3ZlLWVycm9yIHtcXG4gIGNvbG9yOiAjYTAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWJ1Zy11aSAuYXJnLWZpZWxkIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGVidWctdWkgLmtleSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5kZWJ1Zy11aSAua2V5LWJveCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM4ODg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5kZWJ1Zy11aSAua2V5LWJveDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG4uZGVidWctdWkgLmtleS5hY3RpdmUgLmtleS1ib3gge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGVidWctdWkgLmtleS1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlYnVnLXVpIC5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1Zy11aSAubWVudSAuaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZWJ1Zy11aSAubWVudSAuaXRlbS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NjYztcXG59XFxuXFxuLmRlYnVnLXVpIC5wbGF5ZXItYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGVidWctdWkgLnBsYXllciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmRlYnVnLXVpIC5wbGF5ZXIuY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgY29sb3I6ICNlZWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlYnVnLXVpIC5wbGF5ZXIuYWN0aXZlIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZjdmNTA7XFxufVxcblwiO1xuICBzdHlsZUluamVjdChjc3MpO1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZFNob3J0Y3V0XG4gICAqXG4gICAqIFJlZ2lzdGVycyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIGFjdGl2YXRlIHRoZVxuICAgKiBhc3NvY2lhdGVkIGNoaWxkIGNvbXBvbmVudCB0aGF0IGlzIHBhc3NlZCBpbi5cbiAgICpcbiAgICogV2hlbiB0aGUga2V5IGlzIHByZXNzZWQsICdhY3RpdmUnIGlzIHNldCB0byB0cnVlXG4gICAqIGluIHRoZSBwcm9wIHBhc3NlZCB0byB0aGUgY2hpbGQuXG4gICAqL1xuXG4gIHZhciBLZXlib2FyZFNob3J0Y3V0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhLZXlib2FyZFNob3J0Y3V0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEtleWJvYXJkU2hvcnRjdXQoKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5Ym9hcmRTaG9ydGN1dCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEtleWJvYXJkU2hvcnRjdXQpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJkZWFjdGl2YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImFjdGl2YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25QcmVzcykge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uUHJlc3MoKTtcblxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoS2V5Ym9hcmRTaG9ydGN1dCwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBNb3VzZXRyYXAuYmluZCh0aGlzLnByb3BzLnZhbHVlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIF90aGlzMi5hY3RpdmF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChfdHlwZW9mKHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSBfdHlwZW9mKHRoaXMpKSB7XG4gICAgICAgICAgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLmFjdGl2ZSxcbiAgICAgICAgICAgIGRlYWN0aXZhdGU6IHRoaXMuZGVhY3RpdmF0ZSxcbiAgICAgICAgICAgIGFjdGl2YXRlOiB0aGlzLmFjdGl2YXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2tleSc7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwia2V5LWJveFwiLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuYWN0aXZhdGVcbiAgICAgICAgfSwgdGhpcy5wcm9wcy52YWx1ZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJrZXktY2hpbGRcIlxuICAgICAgICB9LCBjaGlsZCkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBLZXlib2FyZFNob3J0Y3V0O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KEtleWJvYXJkU2hvcnRjdXQsIFwicHJvcFR5cGVzXCIsIHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uUHJlc3M6IFByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICAvKipcbiAgICogQ29udHJvbHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGJ5IGtleWJvYXJkIHNob3J0Y3V0cy5cbiAgICovXG5cbiAgdmFyIENvbnRyb2xzID0gZnVuY3Rpb24gQ29udHJvbHMocHJvcHMpIHtcbiAgICB2YXIgYWkgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLnN0ZXApIHtcbiAgICAgIGFpID0gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRTaG9ydGN1dCwge1xuICAgICAgICBrZXk6IFwiNFwiLFxuICAgICAgICB2YWx1ZTogXCI0XCIsXG4gICAgICAgIG9uUHJlc3M6IHByb3BzLnN0ZXBcbiAgICAgIH0sIFwic3RlcFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZFNob3J0Y3V0LCB7XG4gICAgICAgIGtleTogXCI1XCIsXG4gICAgICAgIHZhbHVlOiBcIjVcIixcbiAgICAgICAgb25QcmVzczogcHJvcHMuc2ltdWxhdGVcbiAgICAgIH0sIFwic2ltdWxhdGVcIildO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IG51bGw7XG4gICAgdmFyIGNsYXNzTmFtZSA9ICdjb250cm9scyc7XG5cbiAgICBpZiAocHJvcHMuZG9ja1RvcCkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgZG9ja3RvcCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhlbHApIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIGhlbHAnO1xuICAgIH1cblxuICAgIHZhciBkaXNwbGF5ID0gcHJvcHMuaGVscCAmJiAhcHJvcHMuZG9ja1RvcCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHtcbiAgICAgIGlkOiBcImRlYnVnLWNvbnRyb2xzXCIsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRTaG9ydGN1dCwge1xuICAgICAgdmFsdWU6IFwiMVwiLFxuICAgICAgb25QcmVzczogcHJvcHMucmVzZXRcbiAgICB9LCBcInJlc2V0XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkU2hvcnRjdXQsIHtcbiAgICAgIHZhbHVlOiBcIjJcIixcbiAgICAgIG9uUHJlc3M6IHByb3BzLnNhdmVcbiAgICB9LCBcInNhdmVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRTaG9ydGN1dCwge1xuICAgICAgdmFsdWU6IFwiM1wiLFxuICAgICAgb25QcmVzczogcHJvcHMucmVzdG9yZVxuICAgIH0sIFwicmVzdG9yZVwiKSwgYWksIHByb3BzLmRvY2tUb3AgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZFNob3J0Y3V0LCB7XG4gICAgICB2YWx1ZTogXCI/XCIsXG4gICAgICBvblByZXNzOiBwcm9wcy50b2dnbGVIZWxwXG4gICAgfSwgXCJzaG93IG1vcmVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImtleVwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogZGlzcGxheVxuICAgICAgfVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImtleS1ib3hcIlxuICAgIH0sIFwiZFwiKSwgXCIgc2hvdy9oaWRlIHRoaXMgcGFuZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwia2V5XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBkaXNwbGF5XG4gICAgICB9XG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwia2V5LWJveFwiXG4gICAgfSwgXCJsXCIpLCBcIiBzaG93L2hpZGUgbG9nXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJrZXlcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IGRpc3BsYXlcbiAgICAgIH1cbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJrZXktYm94XCJcbiAgICB9LCBcImlcIiksIFwiIHNob3cvaGlkZSBnYW1lIGluZm8gdGFiXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJrZXlcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IGRpc3BsYXlcbiAgICAgIH1cbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJrZXktYm94XCJcbiAgICB9LCBcInRcIiksIFwiIGRvY2sgY29udHJvbHNcIikpO1xuICB9O1xuICBDb250cm9scy5wcm9wVHlwZXMgPSB7XG4gICAgaGVscDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9nZ2xlSGVscDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3RlcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2ltdWxhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlc2V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXN0b3JlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb2NrVG9wOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgdGhhdCByZW5kZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZVxuICAgKiBwbGF5ZXJzIGluIHRoZSBnYW1lICh3aG9zZSB0dXJuIGl0IGlzIGV0Yy4pLlxuICAgKi9cblxuICB2YXIgUGxheWVySW5mbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUGxheWVySW5mbywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQbGF5ZXJJbmZvKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllckluZm8pO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihQbGF5ZXJJbmZvKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChwbGF5ZXJJRCkge1xuICAgICAgICB2YXIgYXJnID0gcGxheWVySUQgPT0gX3RoaXMucHJvcHMucGxheWVySUQgPyBudWxsIDogcGxheWVySUQ7XG5cbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhhcmcpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGxheWVySW5mbywgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwbGF5ZXJzID0gW107XG5cbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgIHZhciBwbGF5ZXJJRCA9IGkgKyAnJztcbiAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ3BsYXllcic7XG5cbiAgICAgICAgICBpZiAocGxheWVySUQgPT09IF90aGlzMi5wcm9wcy5jdHguY3VycmVudFBsYXllcikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY3VycmVudCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBsYXllcklEID09PSBfdGhpczIucHJvcHMucGxheWVySUQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGxheWVycy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uQ2xpY2socGxheWVySUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHBsYXllcklEKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmN0eC5udW1QbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICBfbG9vcChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGxheWVyLWJveFwiXG4gICAgICAgIH0sIHBsYXllcnMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQbGF5ZXJJbmZvO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KFBsYXllckluZm8sIFwicHJvcFR5cGVzXCIsIHtcbiAgICBjdHg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBwbGF5ZXJJRDogUHJvcFR5cGVzLmFueSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xuICB9KTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIERFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICd0ZXN0JztcbiAgdmFyIGxvZ2ZuID0gREVWID8gY29uc29sZS5sb2cgOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIGVycm9yZm4gPSBERVYgPyBjb25zb2xlLmVycm9yIDogZnVuY3Rpb24gKCkge307XG4gIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7XG4gICAgZXJyb3JmbignRVJST1I6JywgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYnVnTW92ZVxuICAgKlxuICAgKiBDb21wb25lbnQgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZGlzcGF0Y2ggYSBtb3ZlIGZyb21cbiAgICogdGhlIGRlYnVnIHBhbmUuIFRoZSB1c2VyIGlzIHByZXNlbnRlZCB3aXRoIHRoZSB0ZXh0YXJlYVxuICAgKiB0byBlbnRlciBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqL1xuXG4gIHZhciBEZWJ1Z01vdmUgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERlYnVnTW92ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEZWJ1Z01vdmUoKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVidWdNb3ZlKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoRGVidWdNb3ZlKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzdGF0ZVwiLCB7XG4gICAgICAgIGVycm9yOiAnJ1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvblN1Ym1pdFwiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGVycm9yJCQxID0gJyc7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYXJnQXJyYXkgPSBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gW1wiLmNvbmNhdCh2YWx1ZSwgXCJdXCIpKSgpO1xuXG4gICAgICAgICAgX3RoaXMucHJvcHMuZm4uYXBwbHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIGFyZ0FycmF5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IyKSB7XG4gICAgICAgICAgZXJyb3IkJDEgPSAnJyArIGVycm9yMjtcbiAgICAgICAgICBlcnJvcihlcnJvcjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOiBlcnJvciQkMSxcbiAgICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgICAgZW50ZXJBcmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGVidWdNb3ZlLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZFNob3J0Y3V0LCB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuc2hvcnRjdXRcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChEZWJ1Z01vdmVBcmdGaWVsZCwge1xuICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdFxuICAgICAgICB9KSksIHRoaXMuc3RhdGUuZXJyb3IgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIm1vdmUtZXJyb3JcIlxuICAgICAgICB9LCB0aGlzLnN0YXRlLmVycm9yKSA6IG51bGwpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEZWJ1Z01vdmU7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBfZGVmaW5lUHJvcGVydHkoRGVidWdNb3ZlLCBcInByb3BUeXBlc1wiLCB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNob3J0Y3V0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZm46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSk7XG5cbiAgdmFyIERlYnVnTW92ZUFyZ0ZpZWxkID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHMoRGVidWdNb3ZlQXJnRmllbGQsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIERlYnVnTW92ZUFyZ0ZpZWxkKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjM7XG5cbiAgICAgIHZhciBfdGhpczI7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWJ1Z01vdmVBcmdGaWVsZCk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YzID0gX2dldFByb3RvdHlwZU9mKERlYnVnTW92ZUFyZ0ZpZWxkKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YzLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSksIFwib25LZXlEb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzMi5zcGFuLmlubmVyVGV4dDtcblxuICAgICAgICAgIF90aGlzMi5wcm9wcy5vblN1Ym1pdCh2YWx1ZSk7XG5cbiAgICAgICAgICBfdGhpczIuc3Bhbi5pbm5lclRleHQgPSAnJztcblxuICAgICAgICAgIF90aGlzMi5wcm9wcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGVidWdNb3ZlQXJnRmllbGQsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnNwYW4uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNwYW4uYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdtb3ZlJztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSBjbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5hY3RpdmF0ZVxuICAgICAgICB9LCB0aGlzLnByb3BzLm5hbWUsIFwiKFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgX3RoaXMzLnNwYW4gPSByO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImFyZy1maWVsZFwiLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5wcm9wcy5kZWFjdGl2YXRlLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgICAgY29udGVudEVkaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pLCBcIilcIik7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERlYnVnTW92ZUFyZ0ZpZWxkO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KERlYnVnTW92ZUFyZ0ZpZWxkLCBcInByb3BUeXBlc1wiLCB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlYWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICB2YXIgTUFLRV9NT1ZFID0gJ01BS0VfTU9WRSc7XG4gIHZhciBHQU1FX0VWRU5UID0gJ0dBTUVfRVZFTlQnO1xuICB2YXIgUkVETyA9ICdSRURPJztcbiAgdmFyIFJFU0VUID0gJ1JFU0VUJztcbiAgdmFyIFNZTkMgPSAnU1lOQyc7XG4gIHZhciBVTkRPID0gJ1VORE8nO1xuICB2YXIgVVBEQVRFID0gJ1VQREFURSc7XG5cbiAgdmFyIGNzcyQxID0gXCIvKlxcbiAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xcbiAqXFxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cXG4gKi9cXG5cXG4uZ2FtZWxvZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmciAzMHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWxvZyAudHVybi1tYXJrZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG4uZ2FtZWxvZyAubG9nLWV2ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjY2M7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuXFxuLmdhbWVsb2cgLnBoYXNlLW1hcmtlciB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgY29sb3I6ICNlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiBzaWRld2F5cztcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZWxvZy5waW5uZWQgLmxvZy1ldmVudCB7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5nYW1lbG9nIC5sb2ctZXZlbnQ6aG92ZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5nYW1lbG9nIC5sb2ctZXZlbnQucGlubmVkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjAge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZjg1MWI7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIxIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjN2ZkYmZmO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMiB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzAwNzRkOTtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzOWNjY2M7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXI0IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjM2Q5OTcwO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyNSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzJlY2M0MDtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjYge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMWZmNzA7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXI3IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZkYzAwO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyOCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMWYzZjtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZjQxMzY7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIxMCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzg1MTQ0YjtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjExIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjAxMmJlO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMTIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNiMTBkYzk7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIxMyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzExMTExMTtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjE0IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYWFhYWFhO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMTUge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNkZGRkZGQ7XFxufVxcblwiO1xuICBzdHlsZUluamVjdChjc3MkMSk7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY29tcG9uZW50IHRvIHJlbmRlciBjdXN0b20gcGF5bG9hZC5cbiAgICovXG5cbiAgdmFyIEN1c3RvbVBheWxvYWQgPSBmdW5jdGlvbiBDdXN0b21QYXlsb2FkKHByb3BzKSB7XG4gICAgdmFyIGN1c3RvbXBheWxvYWQgPSBwcm9wcy5wYXlsb2FkICE9PSB1bmRlZmluZWQgPyBKU09OLnN0cmluZ2lmeShwcm9wcy5wYXlsb2FkLCBudWxsLCA0KSA6ICcnO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGN1c3RvbXBheWxvYWQpO1xuICB9O1xuXG4gIEN1c3RvbVBheWxvYWQucHJvcFR5cGVzID0ge1xuICAgIHBheWxvYWQ6IFByb3BUeXBlcy5hbnlcbiAgfTtcbiAgLyoqXG4gICAqIExvZ0V2ZW50XG4gICAqXG4gICAqIExvZ3MgYSBzaW5nbGUgYWN0aW9uIGluIHRoZSBnYW1lLlxuICAgKi9cblxuICB2YXIgTG9nRXZlbnQgPSBmdW5jdGlvbiBMb2dFdmVudChwcm9wcykge1xuICAgIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb247XG4gICAgdmFyIGFyZ3MgPSBhY3Rpb24ucGF5bG9hZC5hcmdzIHx8IFtdO1xuICAgIHZhciBwbGF5ZXJJRCA9IGFjdGlvbi5wYXlsb2FkLnBsYXllcklEO1xuICAgIHZhciBjbGFzc05hbWVzID0gXCJsb2ctZXZlbnQgcGxheWVyXCIuY29uY2F0KHBsYXllcklEKTtcblxuICAgIGlmIChwcm9wcy5waW5uZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMgKz0gJyBwaW5uZWQnO1xuICAgIH0gLy8gYWxsb3cgdG8gcGFzcyBpbiBjdXN0b20gcmVuZGVyaW5nIGNvbXBvbmVudCBmb3IgY3VzdG9tIHBheWxvYWRcblxuXG4gICAgdmFyIGN1c3RvbVBheWxvYWQgPSBwcm9wcy5wYXlsb2FkQ29tcG9uZW50ICE9PSB1bmRlZmluZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzLnBheWxvYWRDb21wb25lbnQsIHtcbiAgICAgIHBheWxvYWQ6IHByb3BzLnBheWxvYWRcbiAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ3VzdG9tUGF5bG9hZCwge1xuICAgICAgcGF5bG9hZDogcHJvcHMucGF5bG9hZFxuICAgIH0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5vbkxvZ0NsaWNrKHByb3BzLmxvZ0luZGV4KTtcbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm9uTW91c2VFbnRlcihwcm9wcy5sb2dJbmRleCk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5vbk1vdXNlTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGFjdGlvbi5wYXlsb2FkLnR5cGUsIFwiKFwiLCBhcmdzLmpvaW4oJywnKSwgXCIpXCIpLCBjdXN0b21QYXlsb2FkKTtcbiAgfTtcblxuICBMb2dFdmVudC5wcm9wVHlwZXMgPSB7XG4gICAgYWN0aW9uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgbG9nSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvbkxvZ0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGlubmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXlsb2FkOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBheWxvYWRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pXG4gIH07XG4gIC8qKlxuICAgKiBUdXJuTWFya2VyXG4gICAqXG4gICAqIFRoZSBtYXJrZXJzIG9uIHRoZSBsZWZ0IG9mIHRoZSBsb2cgZXZlbnRzIHRoYXQgaW5kaWNhdGVcbiAgICogd2hpY2ggdHVybiB0aGUgZXZlbnQgYmVsb25ncyB0by5cbiAgICovXG5cbiAgdmFyIFR1cm5NYXJrZXIgPSBmdW5jdGlvbiBUdXJuTWFya2VyKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInR1cm4tbWFya2VyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBncmlkUm93OiAnc3BhbiAnICsgcHJvcHMubnVtRXZlbnRzXG4gICAgICB9XG4gICAgfSwgcHJvcHMudHVybik7XG4gIH07XG5cbiAgVHVybk1hcmtlci5wcm9wVHlwZXMgPSB7XG4gICAgdHVybjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG51bUV2ZW50czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG4gIC8qKlxuICAgKiBQaGFzZU1hcmtlclxuICAgKlxuICAgKiBUaGUgbWFya2VycyBvbiB0aGUgcmlnaHQgb2YgdGhlIGxvZyBldmVudHMgdGhhdCBpbmRpY2F0ZVxuICAgKiB3aGljaCBwaGFzZSB0aGUgZXZlbnQgYmVsb25ncyB0by5cbiAgICovXG5cbiAgdmFyIFBoYXNlTWFya2VyID0gZnVuY3Rpb24gUGhhc2VNYXJrZXIocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicGhhc2UtbWFya2VyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBncmlkUm93OiAnc3BhbiAnICsgcHJvcHMubnVtRXZlbnRzXG4gICAgICB9XG4gICAgfSwgcHJvcHMucGhhc2UpO1xuICB9O1xuXG4gIFBoYXNlTWFya2VyLnByb3BUeXBlcyA9IHtcbiAgICBwaGFzZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG51bUV2ZW50czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG4gIC8qKlxuICAgKiBHYW1lTG9nXG4gICAqXG4gICAqIENvbXBvbmVudCB0byBsb2cgdGhlIGFjdGlvbnMgaW4gdGhlIGdhbWUuXG4gICAqL1xuXG4gIHZhciBHYW1lTG9nID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhHYW1lTG9nLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEdhbWVMb2coKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvZyk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEdhbWVMb2cpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHtcbiAgICAgICAgcGlubmVkOiBudWxsXG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInJld2luZFwiLCBmdW5jdGlvbiAobG9nSW5kZXgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMucHJvcHMuaW5pdGlhbFN0YXRlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMucHJvcHMubG9nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IF90aGlzLnByb3BzLmxvZ1tpXS5hY3Rpb247XG5cbiAgICAgICAgICBpZiAoIWFjdGlvbi5hdXRvbWF0aWMpIHtcbiAgICAgICAgICAgIHN0YXRlID0gX3RoaXMucHJvcHMucmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gTUFLRV9NT1ZFKSB7XG4gICAgICAgICAgICBpZiAobG9nSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9nSW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIEc6IHN0YXRlLkcsXG4gICAgICAgICAgY3R4OiBzdGF0ZS5jdHhcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25Mb2dDbGlja1wiLCBmdW5jdGlvbiAobG9nSW5kZXgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5yZXdpbmQobG9nSW5kZXgpO1xuXG4gICAgICAgICAgdmFyIHJlbmRlcmVkTG9nRW50cmllcyA9IF90aGlzLnByb3BzLmxvZy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmFjdGlvbi50eXBlID09IE1BS0VfTU9WRTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHJlbmRlcmVkTG9nRW50cmllc1tsb2dJbmRleF0uYWN0aW9uLnBheWxvYWQubWV0YWRhdGE7XG5cbiAgICAgICAgICBpZiAoby5waW5uZWQgPT09IGxvZ0luZGV4KSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkhvdmVyKHtcbiAgICAgICAgICAgICAgbG9nSW5kZXg6IGxvZ0luZGV4LFxuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG1ldGFkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwaW5uZWQ6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMucHJvcHMub25Ib3Zlcih7XG4gICAgICAgICAgICBsb2dJbmRleDogbG9nSW5kZXgsXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwaW5uZWQ6IGxvZ0luZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VFbnRlclwiLCBmdW5jdGlvbiAobG9nSW5kZXgpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLnBpbm5lZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnJld2luZChsb2dJbmRleCk7XG5cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkhvdmVyKHtcbiAgICAgICAgICAgIGxvZ0luZGV4OiBsb2dJbmRleCxcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VMZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5waW5uZWQgPT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkhvdmVyKHtcbiAgICAgICAgICAgIHN0YXRlOiBudWxsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdhbWVMb2csIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgbG9nID0gW107XG4gICAgICAgIHZhciB0dXJucyA9IFtdO1xuICAgICAgICB2YXIgcGhhc2VzID0gW107XG4gICAgICAgIHZhciBldmVudHNJbkN1cnJlbnRQaGFzZSA9IDA7XG4gICAgICAgIHZhciBldmVudHNJbkN1cnJlbnRUdXJuID0gMDtcbiAgICAgICAgdmFyIHJlbmRlcmVkTG9nRW50cmllcyA9IHRoaXMucHJvcHMubG9nLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmFjdGlvbi50eXBlID09IE1BS0VfTU9WRTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXJlZExvZ0VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgX3JlbmRlcmVkTG9nRW50cmllcyRpID0gcmVuZGVyZWRMb2dFbnRyaWVzW2ldLFxuICAgICAgICAgICAgICBhY3Rpb24gPSBfcmVuZGVyZWRMb2dFbnRyaWVzJGkuYWN0aW9uLFxuICAgICAgICAgICAgICBwYXlsb2FkID0gX3JlbmRlcmVkTG9nRW50cmllcyRpLnBheWxvYWQsXG4gICAgICAgICAgICAgIHR1cm4gPSBfcmVuZGVyZWRMb2dFbnRyaWVzJGkudHVybixcbiAgICAgICAgICAgICAgcGhhc2UgPSBfcmVuZGVyZWRMb2dFbnRyaWVzJGkucGhhc2U7XG4gICAgICAgICAgZXZlbnRzSW5DdXJyZW50UGhhc2UrKztcbiAgICAgICAgICBldmVudHNJbkN1cnJlbnRUdXJuKys7XG4gICAgICAgICAgbG9nLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChMb2dFdmVudCwge1xuICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgcGlubmVkOiBpID09PSB0aGlzLnN0YXRlLnBpbm5lZCxcbiAgICAgICAgICAgIGxvZ0luZGV4OiBpLFxuICAgICAgICAgICAgb25Mb2dDbGljazogdGhpcy5vbkxvZ0NsaWNrLFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBwYXlsb2FkQ29tcG9uZW50OiB0aGlzLnByb3BzLnBheWxvYWRDb21wb25lbnRcbiAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBpZiAoaSA9PSByZW5kZXJlZExvZ0VudHJpZXMubGVuZ3RoIC0gMSB8fCByZW5kZXJlZExvZ0VudHJpZXNbaSArIDFdLnR1cm4gIT0gdHVybikge1xuICAgICAgICAgICAgdHVybnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFR1cm5NYXJrZXIsIHtcbiAgICAgICAgICAgICAga2V5OiB0dXJucy5sZW5ndGgsXG4gICAgICAgICAgICAgIHR1cm46IHR1cm4sXG4gICAgICAgICAgICAgIG51bUV2ZW50czogZXZlbnRzSW5DdXJyZW50VHVyblxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZXZlbnRzSW5DdXJyZW50VHVybiA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGkgPT0gcmVuZGVyZWRMb2dFbnRyaWVzLmxlbmd0aCAtIDEgfHwgcmVuZGVyZWRMb2dFbnRyaWVzW2kgKyAxXS5waGFzZSAhPSBwaGFzZSkge1xuICAgICAgICAgICAgcGhhc2VzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChQaGFzZU1hcmtlciwge1xuICAgICAgICAgICAgICBrZXk6IHBoYXNlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHBoYXNlOiBwaGFzZSxcbiAgICAgICAgICAgICAgbnVtRXZlbnRzOiBldmVudHNJbkN1cnJlbnRQaGFzZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZXZlbnRzSW5DdXJyZW50UGhhc2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnZ2FtZWxvZyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGlubmVkICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xhc3NOYW1lICs9ICcgcGlubmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCB0dXJucywgbG9nLCBwaGFzZXMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBHYW1lTG9nO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KEdhbWVMb2csIFwicHJvcFR5cGVzXCIsIHtcbiAgICBvbkhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZWR1Y2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbml0aWFsU3RhdGU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBsb2c6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHBheWxvYWRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pXG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShHYW1lTG9nLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgb25Ib3ZlcjogZnVuY3Rpb24gb25Ib3ZlcigpIHt9XG4gIH0pO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICAvKipcbiAgICogR2VuZXJhdGUgYSBtb3ZlIHRvIGJlIGRpc3BhdGNoZWQgdG8gdGhlIGdhbWUgbW92ZSByZWR1Y2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBtb3ZlIHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBtYWtlTW92ZSA9IGZ1bmN0aW9uIG1ha2VNb3ZlKHR5cGUsIGFyZ3MsIHBsYXllcklELCBjcmVkZW50aWFscykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBNQUtFX01PVkUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgZ2FtZSBldmVudCB0byBiZSBkaXNwYXRjaGVkIHRvIHRoZSBmbG93IHJlZHVjZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBnYW1lRXZlbnQgPSBmdW5jdGlvbiBnYW1lRXZlbnQodHlwZSwgYXJncywgcGxheWVySUQsIGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEdBTUVfRVZFTlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEdlbmVyYXRlIGFuIGF1dG9tYXRpYyBnYW1lIGV2ZW50IHRoYXQgaXMgYSBzaWRlLWVmZmVjdCBvZiBhIG1vdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBhcmdzIC0gQWRkaXRpb25hbCBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcGxheWVySUQgLSBUaGUgSUQgb2YgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgY3JlZGVudGlhbHMgLSAob3B0aW9uYWwpIFRoZSBjcmVkZW50aWFscyBmb3IgdGhlIHBsYXllciBtYWtpbmcgdGhpcyBhY3Rpb24uXG4gICAqL1xuXG4gIHZhciBhdXRvbWF0aWNHYW1lRXZlbnQgPSBmdW5jdGlvbiBhdXRvbWF0aWNHYW1lRXZlbnQodHlwZSwgYXJncywgcGxheWVySUQsIGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEdBTUVfRVZFTlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzXG4gICAgICB9LFxuICAgICAgYXV0b21hdGljOiB0cnVlXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVzZXQgdGhlIFJlZHV4IHN0b3JlJ3Mgc3RhdGUgb24gYSBzeW5jLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBUaGUgc3RhdGUgdG8gcmVzdG9yZS5cbiAgICogQHBhcmFtIHtBcnJheX0gbG9nIC0gVGhlIGxvZyB0byByZXN0b3JlLlxuICAgKi9cblxuICB2YXIgc3luYyA9IGZ1bmN0aW9uIHN5bmMoc3RhdGUsIGxvZykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBTWU5DLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgbG9nOiBsb2csXG4gICAgICBjbGllbnRPbmx5OiB0cnVlXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIFVzZWQgdG8gdXBkYXRlIHRoZSBSZWR1eCBzdG9yZSdzIHN0YXRlIGluIHJlc3BvbnNlIHRvXG4gICAqIGFuIGFjdGlvbiBjb21pbmcgZnJvbSBhbm90aGVyIHBsYXllci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIC0gVGhlIHN0YXRlIHRvIHJlc3RvcmUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRlbHRhbG9nIC0gQSBsb2cgZGVsdGEuXG4gICAqL1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGUsIGRlbHRhbG9nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGRlbHRhbG9nOiBkZWx0YWxvZyxcbiAgICAgIGNsaWVudE9ubHk6IHRydWVcbiAgICB9O1xuICB9O1xuICAvKipcbiAgICogVXNlZCB0byByZXNldCB0aGUgZ2FtZSBzdGF0ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIC0gVGhlIGluaXRpYWwgc3RhdGUuXG4gICAqL1xuXG4gIHZhciByZXNldCA9IGZ1bmN0aW9uIHJlc2V0KHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJFU0VULFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgY2xpZW50T25seTogdHJ1ZVxuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBVc2VkIHRvIHVuZG8gdGhlIGxhc3QgbW92ZS5cbiAgICovXG5cbiAgdmFyIHVuZG8gPSBmdW5jdGlvbiB1bmRvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBVTkRPXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVkbyB0aGUgbGFzdCB1bmRvbmUgbW92ZS5cbiAgICovXG5cbiAgdmFyIHJlZG8gPSBmdW5jdGlvbiByZWRvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBSRURPXG4gICAgfTtcbiAgfTtcblxuICB2YXIgQWN0aW9uQ3JlYXRvcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgbWFrZU1vdmU6IG1ha2VNb3ZlLFxuICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50LFxuICAgIGF1dG9tYXRpY0dhbWVFdmVudDogYXV0b21hdGljR2FtZUV2ZW50LFxuICAgIHN5bmM6IHN5bmMsXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgcmVzZXQ6IHJlc2V0LFxuICAgIHVuZG86IHVuZG8sXG4gICAgcmVkbzogcmVkb1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgdGhlIGtleXMgaW4gY3R4IHRoYXQgYmVnaW4gd2l0aCBhIF8uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFNhbml0aXplQ3R4KGN0eCkge1xuICAgIHZhciByID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gY3R4KSB7XG4gICAgICBpZiAoIWtleS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgICAgcltrZXldID0gY3R4W2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgLyoqXG4gICAqIERlYnVnXG4gICAqXG4gICAqIERlYnVnIHBhbmUgdGhhdCBkaXNwbGF5cyB0aGUgZ2FtZSBzdGF0ZSBvYmplY3RzLFxuICAgKiBhbGxvd3MgeW91IHRvIGRpc3BhdGNoIG1vdmVzLFxuICAgKiBhbmQgYWxsb3dzIHlvdSB0byBzYXZlIC8gcmVzdG9yZSBmcm9tIGxvY2FsU3RvcmFnZS5cbiAgICovXG5cblxuICB2YXIgRGVidWcgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERlYnVnLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIERlYnVnKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWJ1Zyk7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKERlYnVnKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzYXZlU3RhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIganNvbiA9IGZsYXR0ZWQuc3RyaW5naWZ5KF90aGlzLnByb3BzLmdhbWVzdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXN0YXRlJywganNvbik7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInJlc3RvcmVTdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnYW1lc3RhdGVKU09OID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lc3RhdGUnKTtcblxuICAgICAgICBpZiAoZ2FtZXN0YXRlSlNPTiAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBnYW1lc3RhdGUgPSBmbGF0dGVkLnBhcnNlKGdhbWVzdGF0ZUpTT04pO1xuXG4gICAgICAgICAgX3RoaXMucHJvcHMuc3RvcmUuZGlzcGF0Y2goc3luYyhnYW1lc3RhdGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkNsaWNrTWFpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93TG9nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25DbGlja0xvZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93TG9nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJ0b2dnbGVIZWxwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKG9sZHN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlbHA6ICFvbGRzdGF0ZS5oZWxwXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTG9nSG92ZXJcIiwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgICAgIG1ldGFkYXRhID0gX3JlZi5tZXRhZGF0YTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgQUlNZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMucHJvcHMub3ZlcnJpZGVHYW1lU3RhdGUoc3RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzaW11bGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDAwMDtcbiAgICAgICAgdmFyIHNsZWVwVGltZW91dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwO1xuXG4gICAgICAgIHZhciBzdGVwID0gYXN5bmMgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGF3YWl0IF90aGlzLnByb3BzLnN0ZXAoKTtcbiAgICAgICAgICAgIGlmICghYWN0aW9uKSBicmVhaztcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHNsZWVwVGltZW91dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHN0ZXAoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5zaG9ydGN1dHMgPSBBc3NpZ25TaG9ydGN1dHMocHJvcHMubW92ZXMsIHByb3BzLmV2ZW50cywgJ2RsaXQnKTtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBzaG93RGVidWdVSTogdHJ1ZSxcbiAgICAgICAgc2hvd0xvZzogZmFsc2UsXG4gICAgICAgIHNob3dHYW1lSW5mbzogcHJvcHMuc2hvd0dhbWVJbmZvLFxuICAgICAgICBkb2NrQ29udHJvbHM6IHByb3BzLmRvY2tDb250cm9scyxcbiAgICAgICAgaGVscDogZmFsc2UsXG4gICAgICAgIEFJTWV0YWRhdGE6IG51bGxcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERlYnVnLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIE1vdXNldHJhcC5iaW5kKCdkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc2hvd0RlYnVnVUk6ICFvbGQuc2hvd0RlYnVnVUlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBNb3VzZXRyYXAuYmluZCgnbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uIChvbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHNob3dMb2c6ICFvbGQuc2hvd0xvZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE1vdXNldHJhcC5iaW5kKCdpJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc2hvd0dhbWVJbmZvOiAhb2xkLnNob3dHYW1lSW5mb1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE1vdXNldHJhcC5iaW5kKCd0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZG9ja0NvbnRyb2xzOiAhb2xkLmRvY2tDb250cm9sc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2QnKTtcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnbCcpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93RGVidWdVSSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vdmVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnByb3BzLm1vdmVzKSB7XG4gICAgICAgICAgdmFyIGZuID0gdGhpcy5wcm9wcy5tb3Zlc1tuYW1lXTtcbiAgICAgICAgICB2YXIgc2hvcnRjdXQgPSB0aGlzLnNob3J0Y3V0c1tuYW1lXTtcbiAgICAgICAgICBtb3Zlcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVidWdNb3ZlLCB7XG4gICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZm46IGZuLFxuICAgICAgICAgICAgc2hvcnRjdXQ6IHNob3J0Y3V0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIF9uYW1lIGluIHRoaXMucHJvcHMuZXZlbnRzKSB7XG4gICAgICAgICAgdmFyIF9mbiA9IHRoaXMucHJvcHMuZXZlbnRzW19uYW1lXTtcbiAgICAgICAgICB2YXIgX3Nob3J0Y3V0ID0gdGhpcy5zaG9ydGN1dHNbX25hbWVdO1xuICAgICAgICAgIGV2ZW50cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVidWdNb3ZlLCB7XG4gICAgICAgICAgICBrZXk6IF9uYW1lLFxuICAgICAgICAgICAgbmFtZTogX25hbWUsXG4gICAgICAgICAgICBmbjogX2ZuLFxuICAgICAgICAgICAgc2hvcnRjdXQ6IF9zaG9ydGN1dFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2aXN1YWxpemVBSSA9IHRoaXMuc3RhdGUuQUlNZXRhZGF0YSAmJiB0aGlzLnByb3BzLnZpc3VhbGl6ZUFJO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2RlYnVnLXVpJztcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NrQ29udHJvbHMpIHtcbiAgICAgICAgICBjbGFzc05hbWUgKz0gJyBkb2NrdG9wJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCB2aXN1YWxpemVBSSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYWktdmlzdWFsaXphdGlvblwiXG4gICAgICAgIH0sIHRoaXMucHJvcHMudmlzdWFsaXplQUkodGhpcy5zdGF0ZS5BSU1ldGFkYXRhKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJwYW5lXCJcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuc3RhdGUuc2hvd0xvZyA/ICdpdGVtJyA6ICdpdGVtIGFjdGl2ZScsXG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrTWFpblxuICAgICAgICB9LCBcIk1haW5cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zdGF0ZS5zaG93TG9nID8gJ2l0ZW0gYWN0aXZlJyA6ICdpdGVtJyxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tMb2dcbiAgICAgICAgfSwgXCJMb2dcIikpLCB0aGlzLnN0YXRlLnNob3dMb2cgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgdGhpcy5zdGF0ZS5zaG93R2FtZUluZm8gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lSW5mbywge1xuICAgICAgICAgIGdhbWVJRDogdGhpcy5wcm9wcy5nYW1lSUQsXG4gICAgICAgICAgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsXG4gICAgICAgICAgaXNBY3RpdmU6IHRoaXMucHJvcHMuZ2FtZXN0YXRlLmlzQWN0aXZlLFxuICAgICAgICAgIGlzQ29ubmVjdGVkOiB0aGlzLnByb3BzLmdhbWVzdGF0ZS5pc0Nvbm5lY3RlZCxcbiAgICAgICAgICBpc011bHRpcGxheWVyOiB0aGlzLnByb3BzLmlzTXVsdGlwbGF5ZXJcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbHMsIHtcbiAgICAgICAgICBkb2NrVG9wOiB0aGlzLnN0YXRlLmRvY2tDb250cm9scyxcbiAgICAgICAgICBoZWxwOiB0aGlzLnN0YXRlLmhlbHAsXG4gICAgICAgICAgdG9nZ2xlSGVscDogdGhpcy50b2dnbGVIZWxwLFxuICAgICAgICAgIHN0ZXA6IHRoaXMucHJvcHMuc3RlcCxcbiAgICAgICAgICBzaW11bGF0ZTogdGhpcy5zaW11bGF0ZSxcbiAgICAgICAgICByZXNldDogdGhpcy5wcm9wcy5yZXNldCxcbiAgICAgICAgICBzYXZlOiB0aGlzLnNhdmVTdGF0ZSxcbiAgICAgICAgICByZXN0b3JlOiB0aGlzLnJlc3RvcmVTdGF0ZVxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiUGxheWVyc1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChQbGF5ZXJJbmZvLCB7XG4gICAgICAgICAgY3R4OiB0aGlzLnByb3BzLmdhbWVzdGF0ZS5jdHgsXG4gICAgICAgICAgcGxheWVySUQ6IHRoaXMucHJvcHMucGxheWVySUQsXG4gICAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy51cGRhdGVQbGF5ZXJJRFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiTW92ZXNcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIG51bGwsIG1vdmVzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiRXZlbnRzXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBudWxsLCBldmVudHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwianNvblwiXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJHXCIpLCBcIjpcIiwgJyAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmdhbWVzdGF0ZS5HLCBudWxsLCAyKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwianNvblwiXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJjdHhcIiksIFwiOlwiLCAnICcsIEpTT04uc3RyaW5naWZ5KFNhbml0aXplQ3R4KHRoaXMucHJvcHMuZ2FtZXN0YXRlLmN0eCksIG51bGwsIDIpKSkpLCB0aGlzLnN0YXRlLnNob3dMb2cgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChHYW1lTG9nLCB7XG4gICAgICAgICAgb25Ib3ZlcjogdGhpcy5vbkxvZ0hvdmVyLFxuICAgICAgICAgIHJlZHVjZXI6IHRoaXMucHJvcHMucmVkdWNlcixcbiAgICAgICAgICBsb2c6IHRoaXMucHJvcHMuZ2FtZXN0YXRlLmxvZyxcbiAgICAgICAgICBpbml0aWFsU3RhdGU6IHRoaXMucHJvcHMuZ2FtZXN0YXRlLl9pbml0aWFsXG4gICAgICAgIH0pKSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEZWJ1ZztcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShEZWJ1ZywgXCJwcm9wVHlwZXNcIiwge1xuICAgIGdhbWVzdGF0ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIEc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgIGN0eDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgbG9nOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzQ29ubmVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIF9pbml0aWFsOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgICB9KSxcbiAgICBnYW1lSUQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwbGF5ZXJJRDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc011bHRpcGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb3ZlczogUHJvcFR5cGVzLmFueSxcbiAgICBldmVudHM6IFByb3BUeXBlcy5hbnksXG4gICAgcmVzdG9yZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0xvZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RvcmU6IFByb3BUeXBlcy5hbnksXG4gICAgc3RlcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG92ZXJyaWRlR2FtZVN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2aXN1YWxpemVBSTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXBkYXRlR2FtZUlEOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cGRhdGVQbGF5ZXJJRDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXBkYXRlQ3JlZGVudGlhbHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dHYW1lSW5mbzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZG9ja0NvbnRyb2xzOiBQcm9wVHlwZXMuYm9vbFxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoRGVidWcsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBzaG93R2FtZUluZm86IHRydWUsXG4gICAgZG9ja0NvbnRyb2xzOiBmYWxzZVxuICB9KTtcblxuICAvKipcbiAgICogU29ja2V0SU9cbiAgICpcbiAgICogVHJhbnNwb3J0IGludGVyZmFjZSB0aGF0IGludGVyYWN0cyB3aXRoIHRoZSBNYXN0ZXIgdmlhIHNvY2tldC5pby5cbiAgICovXG5cbiAgdmFyIFNvY2tldElPID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBNdXRpcGxheWVyIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb2NrZXQgLSBPdmVycmlkZSBmb3IgdW5pdCB0ZXN0cy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ja2V0T3B0cyAtIE9wdGlvbnMgdG8gcGFzcyB0byBzb2NrZXQuaW8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVJRCAtIFRoZSBnYW1lIElEIHRvIGNvbm5lY3QgdG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllcklEIC0gVGhlIHBsYXllciBJRCBhc3NvY2lhdGVkIHdpdGggdGhpcyBjbGllbnQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVOYW1lIC0gVGhlIGdhbWUgdHlwZSAodGhlIGBuYW1lYCBmaWVsZCBpbiBgR2FtZWApLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2ZXIgLSBUaGUgZ2FtZSBzZXJ2ZXIgaW4gdGhlIGZvcm0gb2YgJ2hvc3RuYW1lOnBvcnQnLiBEZWZhdWx0cyB0byB0aGUgc2VydmVyIHNlcnZpbmcgdGhlIGNsaWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU29ja2V0SU8oKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgc29ja2V0ID0gX3JlZi5zb2NrZXQsXG4gICAgICAgICAgc29ja2V0T3B0cyA9IF9yZWYuc29ja2V0T3B0cyxcbiAgICAgICAgICBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICAgICAgZ2FtZUlEID0gX3JlZi5nYW1lSUQsXG4gICAgICAgICAgcGxheWVySUQgPSBfcmVmLnBsYXllcklELFxuICAgICAgICAgIGdhbWVOYW1lID0gX3JlZi5nYW1lTmFtZSxcbiAgICAgICAgICBudW1QbGF5ZXJzID0gX3JlZi5udW1QbGF5ZXJzLFxuICAgICAgICAgIHNlcnZlciA9IF9yZWYuc2VydmVyO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SU8pO1xuXG4gICAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgdGhpcy5zb2NrZXRPcHRzID0gc29ja2V0T3B0cztcbiAgICAgIHRoaXMuZ2FtZU5hbWUgPSBnYW1lTmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgICB0aGlzLmdhbWVJRCA9IGdhbWVJRCB8fCAnZGVmYXVsdCc7XG4gICAgICB0aGlzLnBsYXllcklEID0gcGxheWVySUQgfHwgbnVsbDtcbiAgICAgIHRoaXMubnVtUGxheWVycyA9IG51bVBsYXllcnMgfHwgMjtcbiAgICAgIHRoaXMuZ2FtZUlEID0gdGhpcy5nYW1lTmFtZSArICc6JyArIHRoaXMuZ2FtZUlEO1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGFjdGlvbiB0aGF0IGhhcyB0byBiZSByZWxheWVkIHRvIHRoZVxuICAgICAqIGdhbWUgbWFzdGVyIGlzIG1hZGUuXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhTb2NrZXRJTywgW3tcbiAgICAgIGtleTogXCJvbkFjdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQWN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndXBkYXRlJywgYWN0aW9uLCBzdGF0ZS5fc3RhdGVJRCwgdGhpcy5nYW1lSUQsIHRoaXMucGxheWVySUQpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBDb25uZWN0IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc2VydmVyID0gdGhpcy5zZXJ2ZXI7XG5cbiAgICAgICAgICAgIGlmIChzZXJ2ZXIuc2VhcmNoKC9eaHR0cHM/OlxcL1xcLy8pID09IC0xKSB7XG4gICAgICAgICAgICAgIHNlcnZlciA9ICdodHRwOi8vJyArIHRoaXMuc2VydmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmVyLnN1YnN0cigtMSkgIT0gJy8nKSB7XG4gICAgICAgICAgICAgIC8vIGFkZCB0cmFpbGluZyBzbGFzaCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG4gICAgICAgICAgICAgIHNlcnZlciA9IHNlcnZlciArICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBpbyhzZXJ2ZXIgKyB0aGlzLmdhbWVOYW1lLCB0aGlzLnNvY2tldE9wdHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCcvJyArIHRoaXMuZ2FtZU5hbWUsIHRoaXMuc29ja2V0T3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIENhbGxlZCB3aGVuIGFub3RoZXIgcGxheWVyIG1ha2VzIGEgbW92ZSBhbmQgdGhlXG4gICAgICAgIC8vIG1hc3RlciBicm9hZGNhc3RzIHRoZSB1cGRhdGUgdG8gb3RoZXIgY2xpZW50cyAoaW5jbHVkaW5nXG4gICAgICAgIC8vIHRoaXMgb25lKS5cblxuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoZ2FtZUlELCBzdGF0ZSwgZGVsdGFsb2cpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICAgIGlmIChnYW1lSUQgPT0gX3RoaXMuZ2FtZUlEICYmIHN0YXRlLl9zdGF0ZUlEID49IGN1cnJlbnRTdGF0ZS5fc3RhdGVJRCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHVwZGF0ZShzdGF0ZSwgZGVsdGFsb2cpO1xuXG4gICAgICAgICAgICBfdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIENhbGxlZCB3aGVuIHRoZSBjbGllbnQgZmlyc3QgY29ubmVjdHMgdG8gdGhlIG1hc3RlclxuICAgICAgICAvLyBhbmQgcmVxdWVzdHMgdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZS5cblxuICAgICAgICB0aGlzLnNvY2tldC5vbignc3luYycsIGZ1bmN0aW9uIChnYW1lSUQsIHN0YXRlLCBsb2cpIHtcbiAgICAgICAgICBpZiAoZ2FtZUlEID09IF90aGlzLmdhbWVJRCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHN5bmMoc3RhdGUsIGxvZyk7XG5cbiAgICAgICAgICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgLy8gSW5pdGlhbCBzeW5jIHRvIGdldCBnYW1lIHN0YXRlLlxuXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N5bmMnLCB0aGlzLmdhbWVJRCwgdGhpcy5wbGF5ZXJJRCwgdGhpcy5udW1QbGF5ZXJzKTsgLy8gS2VlcCB0cmFjayBvZiBjb25uZWN0aW9uIHN0YXR1cy5cblxuICAgICAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICBfdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIF90aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBTdWJzY3JpYmUgdG8gY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBmbjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlcyB0aGUgZ2FtZSBpZC5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBuZXcgZ2FtZSBpZC5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUdhbWVJRFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUdhbWVJRChpZCkge1xuICAgICAgICB0aGlzLmdhbWVJRCA9IHRoaXMuZ2FtZU5hbWUgKyAnOicgKyBpZDtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHJlc2V0KG51bGwpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3luYycsIHRoaXMuZ2FtZUlELCB0aGlzLnBsYXllcklELCB0aGlzLm51bVBsYXllcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFVwZGF0ZXMgdGhlIHBsYXllciBhc3NvY2lhdGVkIHdpdGggdGhpcyBjbGllbnQuXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgbmV3IHBsYXllciBpZC5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVBsYXllcklEXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUGxheWVySUQoaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJRCA9IGlkO1xuICAgICAgICB2YXIgYWN0aW9uID0gcmVzZXQobnVsbCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzeW5jJywgdGhpcy5nYW1lSUQsIHRoaXMucGxheWVySUQsIHRoaXMubnVtUGxheWVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU29ja2V0SU87XG4gIH0oKTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cblxuICAvKipcbiAgICogSW5NZW1vcnkgZGF0YSBzdG9yYWdlLlxuICAgKi9cbiAgdmFyIEluTWVtb3J5ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBJbk1lbW9yeSBzdG9yYWdlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluTWVtb3J5KTtcblxuICAgICAgdGhpcy5nYW1lcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29ubmVjdC5cbiAgICAgKiBOby1vcCBmb3IgdGhlIEluTWVtb3J5IGluc3RhbmNlLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5NZW1vcnksIFt7XG4gICAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogV3JpdGUgdGhlIGdhbWUgc3RhdGUgdG8gdGhlIGluLW1lbW9yeSBvYmplY3QuXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgZ2FtZSBpZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdG9yZSAtIEEgZ2FtZSBzdGF0ZSB0byBwZXJzaXN0LlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lcy5zZXQoaWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmVhZCB0aGUgZ2FtZSBzdGF0ZSBmcm9tIHRoZSBpbi1tZW1vcnkgb2JqZWN0LlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gVGhlIGdhbWUgaWQuXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgZ2FtZSBzdGF0ZSwgb3IgdW5kZWZpbmVkXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgIGlmIG5vIGdhbWUgaXMgZm91bmQgd2l0aCB0aGlzIGlkLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVzLmdldChpZCk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIGEgcGFydGljdWxhciBnYW1lIGlkIGV4aXN0cy5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBnYW1lIGlkLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiBhIGdhbWUgd2l0aCB0aGlzIGlkIGV4aXN0cy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImhhc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lcy5oYXMoaWQpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIGdhbWUgc3RhdGUgZnJvbSB0aGUgaW4tbWVtb3J5IG9iamVjdC5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBnYW1lIGlkLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5nYW1lcy5oYXMoaWQpKSByZXR1cm47XG4gICAgICAgIHRoaXMuZ2FtZXMuZGVsZXRlKGlkKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJuIGFsbCBrZXlzLlxuICAgICAgICogQHJldHVybnMge2FycmF5fSAtIEFycmF5IG9mIGtleXMgKHN0cmluZ3MpXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsaXN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheSh0aGlzLmdhbWVzLmtleXMoKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluTWVtb3J5O1xuICB9KCk7XG5cbiAgLy8gSW5saW5lZCB2ZXJzaW9uIG9mIEFsZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRiYXUvc2VlZHJhbmRvbS5cblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNSBEYXZpZCBCYXUuXG4gICAqXG4gICAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLFxuICAgKiB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuICAgKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAgICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gICAqIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSxcbiAgICogcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICAgKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gICAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gICAqXG4gICAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsXG4gICAqIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICAgKlxuICAgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICAgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gICAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICovXG4gIGZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICAgIHZhciBtZSA9IHRoaXMsXG4gICAgICAgIG1hc2ggPSBNYXNoKCk7XG5cbiAgICBtZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcblxuICAgICAgbWUuczAgPSBtZS5zMTtcbiAgICAgIG1lLnMxID0gbWUuczI7XG4gICAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gICAgfTsgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuXG5cbiAgICBtZS5jID0gMTtcbiAgICBtZS5zMCA9IG1hc2goJyAnKTtcbiAgICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgICBtZS5zMCAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMwIDwgMCkge1xuICAgICAgbWUuczAgKz0gMTtcbiAgICB9XG5cbiAgICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMxIDwgMCkge1xuICAgICAgbWUuczEgKz0gMTtcbiAgICB9XG5cbiAgICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuXG4gICAgaWYgKG1lLnMyIDwgMCkge1xuICAgICAgbWUuczIgKz0gMTtcbiAgICB9XG5cbiAgICBtYXNoID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICAgIHQuYyA9IGYuYztcbiAgICB0LnMwID0gZi5zMDtcbiAgICB0LnMxID0gZi5zMTtcbiAgICB0LnMyID0gZi5zMjtcbiAgICByZXR1cm4gdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1hc2goKSB7XG4gICAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gICAgdmFyIG1hc2ggPSBmdW5jdGlvbiBtYXNoKGRhdGEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1hc2g7XG4gIH1cblxuICBmdW5jdGlvbiBhbGVhKHNlZWQsIG9wdHMpIHtcbiAgICB2YXIgeGcgPSBuZXcgQWxlYShzZWVkKSxcbiAgICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICAgIHBybmcucXVpY2sgPSBwcm5nO1xuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAoX3R5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcblxuICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvcHkoeGcsIHt9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBybmc7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tXG4gICAqXG4gICAqIENhbGxzIHRoYXQgcmVxdWlyZSBhIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLlxuICAgKiBVc2VzIGEgc2VlZCBmcm9tIGN0eCwgYW5kIGFsc28gcGVyc2lzdHMgdGhlIFBSTkdcbiAgICogc3RhdGUgaW4gY3R4IHNvIHRoYXQgbW92ZXMgY2FuIHN0YXkgcHVyZS5cbiAgICovXG5cbiAgdmFyIFJhbmRvbSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGluaXRpYWxpemUgZnJvbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSYW5kb20oY3R4KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZG9tKTtcblxuICAgICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBjbGllbnQsIHRoZSBzZWVkIGlzIG5vdCBwcmVzZW50LlxuICAgICAgLy8gSnVzdCB1c2UgYSB0ZW1wb3Jhcnkgc2VlZCB0byBleGVjdXRlIHRoZSBtb3ZlIHdpdGhvdXRcbiAgICAgIC8vIGNyYXNoaW5nIGl0LiBUaGUgbW92ZSBzdGF0ZSBpdHNlbGYgaXMgZGlzY2FyZGVkLFxuICAgICAgLy8gc28gdGhlIGFjdHVhbCB2YWx1ZSBkb2Vzbid0IG1hdHRlci5cbiAgICAgIHRoaXMuc3RhdGUgPSBjdHguX3JhbmRvbSB8fCB7XG4gICAgICAgIHNlZWQ6ICcwJ1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBjdHggd2l0aCB0aGUgUFJORyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QgdG8gdXBkYXRlLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFuZG9tLCBbe1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgICAgICB2YXIgY3R4ID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgX3JhbmRvbTogdGhpcy5zdGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjdHg6IGN0eFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQXR0YWNoZXMgdGhlIFJhbmRvbSBBUEkgdG8gY3R4LlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGF0dGFjaCB0by5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImF0dGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaChjdHgpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgICAgIHJhbmRvbTogdGhpcy5fYXBpKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlci5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yYW5kb21cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmFuZG9tKCkge1xuICAgICAgICB2YXIgUiA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBmbjtcblxuICAgICAgICBpZiAoUi5wcm5nc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIE5vIGNhbGwgdG8gYSByYW5kb20gZnVuY3Rpb24gaGFzIGJlZW4gbWFkZS5cbiAgICAgICAgICBmbiA9IG5ldyBhbGVhKFIuc2VlZCwge1xuICAgICAgICAgICAgc3RhdGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbiA9IG5ldyBhbGVhKCcnLCB7XG4gICAgICAgICAgICBzdGF0ZTogUi5wcm5nc3RhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW1iZXIgPSBmbigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgUiwge1xuICAgICAgICAgIHBybmdzdGF0ZTogZm4uc3RhdGUoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwaVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcGkoKSB7XG4gICAgICAgIHZhciByYW5kb20gPSB0aGlzLl9yYW5kb20uYmluZCh0aGlzKTtcblxuICAgICAgICB2YXIgU3BvdFZhbHVlID0ge1xuICAgICAgICAgIEQ0OiA0LFxuICAgICAgICAgIEQ2OiA2LFxuICAgICAgICAgIEQ4OiA4LFxuICAgICAgICAgIEQxMDogMTAsXG4gICAgICAgICAgRDEyOiAxMixcbiAgICAgICAgICBEMjA6IDIwXG4gICAgICAgIH07IC8vIEdlbmVyYXRlIGZ1bmN0aW9ucyBmb3IgcHJlZGVmaW5lZCBkaWNlIHZhbHVlcyBENCAtIEQyMC5cblxuICAgICAgICB2YXIgcHJlZGVmaW5lZCA9IHt9O1xuXG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgICAgIHZhciBzcG90dmFsdWUgPSBTcG90VmFsdWVba2V5XTtcblxuICAgICAgICAgIHByZWRlZmluZWRba2V5XSA9IGZ1bmN0aW9uIChkaWNlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChkaWNlQ291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIHNwb3R2YWx1ZSkgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkoZGljZUNvdW50KS5rZXlzKCkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKCkgKiBzcG90dmFsdWUpICsgMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gU3BvdFZhbHVlKSB7XG4gICAgICAgICAgX2xvb3Aoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBwcmVkZWZpbmVkLCB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUm9sbCBhIGRpZSBvZiBzcGVjaWZpZWQgc3BvdCB2YWx1ZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90dmFsdWUgLSBUaGUgZGllIGRpbWVuc2lvbiAoZGVmYXVsdDogNikuXG4gICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGRpY2VDb3VudCAtIG51bWJlciBvZiBkaWNlIHRvIHRocm93LlxuICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBub3QgZGVmaW5lZCwgZGVmYXVsdHMgdG8gMSBhbmQgcmV0dXJucyB0aGUgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGRlZmluZWQsIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmFuZG9tIGRpY2UgdmFsdWVzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIERpZTogZnVuY3Rpb24gRGllKHNwb3R2YWx1ZSwgZGljZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoc3BvdHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc3BvdHZhbHVlID0gNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpY2VDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogc3BvdHZhbHVlKSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KG5ldyBBcnJheShkaWNlQ291bnQpLmtleXMoKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIHNwb3R2YWx1ZSkgKyAxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBOdW1iZXI6IGZ1bmN0aW9uIE51bWJlcigpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb20oKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2h1ZmZsZSBhbiBhcnJheS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRlY2sgLSBUaGUgYXJyYXkgdG8gc2h1ZmZsZS4gRG9lcyBub3QgbXV0YXRlXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnB1dCwgYnV0IHJldHVybnMgdGhlIHNodWZmbGVkIGFycmF5LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIFNodWZmbGU6IGZ1bmN0aW9uIFNodWZmbGUoZGVjaykge1xuICAgICAgICAgICAgdmFyIGNsb25lID0gZGVjay5zbGljZSgwKTtcbiAgICAgICAgICAgIHZhciBzcmNJbmRleCA9IGRlY2subGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBzaHVmZmxlZCA9IG5ldyBBcnJheShzcmNJbmRleCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChzcmNJbmRleCkge1xuICAgICAgICAgICAgICB2YXIgcmFuZEluZGV4ID0gc3JjSW5kZXggKiByYW5kb20oKSB8IDA7XG4gICAgICAgICAgICAgIHNodWZmbGVkW2RzdEluZGV4KytdID0gY2xvbmVbcmFuZEluZGV4XTtcbiAgICAgICAgICAgICAgY2xvbmVbcmFuZEluZGV4XSA9IGNsb25lWy0tc3JjSW5kZXhdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmFuZG9tO1xuICB9KCk7XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBhdHRhY2hlZCBSYW5kb20gYXBpIGZyb20gY3R4LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3Qgd2l0aCB0aGUgUmFuZG9tIEFQSSBhdHRhY2hlZC5cbiAgICogQHJldHVybnMge29iamVjdH0gQSBwbGFpbiBjdHggb2JqZWN0IHdpdGhvdXQgdGhlIFJhbmRvbSBBUEkuXG4gICAqL1xuXG4gIFJhbmRvbS5kZXRhY2ggPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgdmFyIHJhbmRvbSA9IGN0eC5yYW5kb20sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoY3R4LCBbXCJyYW5kb21cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiByZXN0O1xuICB9O1xuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbmV3IHNlZWQgZnJvbSB0aGUgY3VycmVudCBkYXRlIC8gdGltZS5cbiAgICovXG5cblxuICBSYW5kb20uc2VlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpKS50b1N0cmluZygzNikuc2xpY2UoLTEwKTtcbiAgfTtcblxuICAvKipcbiAgICogRXZlbnRzXG4gICAqL1xuXG4gIHZhciBFdmVudHMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudHMoZmxvdywgcGxheWVySUQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHMpO1xuXG4gICAgICB0aGlzLmZsb3cgPSBmbG93O1xuICAgICAgdGhpcy5wbGF5ZXJJRCA9IHBsYXllcklEO1xuICAgICAgdGhpcy5kaXNwYXRjaCA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgRXZlbnRzIEFQSSB0byBjdHguXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0IHRvIGF0dGFjaCB0by5cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50cywgW3tcbiAgICAgIGtleTogXCJhdHRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdHRhY2goY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IHt9O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgZXZlbnRzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpcy5kaXNwYXRjaC5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5mbG93LmV2ZW50TmFtZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBjdHgsIHtcbiAgICAgICAgICBldmVudHM6IGV2ZW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlcyBjdHggd2l0aCB0aGUgdHJpZ2dlcmVkIGV2ZW50cy5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSAtIFRoZSBzdGF0ZSBvYmplY3QgeyBHLCBjdHggfS5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMShzdGF0ZSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5kaXNwYXRjaFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXV0b21hdGljR2FtZUV2ZW50KGl0ZW0ua2V5LCBpdGVtLmFyZ3MsIHRoaXMucGxheWVySUQpO1xuICAgICAgICAgICAgc3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwgdGhpcy5mbG93LnByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50cztcbiAgfSgpO1xuICAvKipcbiAgICogRGV0YWNoZXMgdGhlIEV2ZW50cyBBUEkgZnJvbSBjdHguXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdCB0byBzdHJpcC5cbiAgICovXG5cbiAgRXZlbnRzLmRldGFjaCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICB2YXIgZXZlbnRzID0gY3R4LmV2ZW50cyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhjdHgsIFtcImV2ZW50c1wiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH07XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIC8qKlxuICAgKiBQbHVnaW4gdGhhdCBhbGxvd3MgdXNpbmcgSW1tZXIgdG8gbWFrZSBpbW11dGFibGUgY2hhbmdlc1xuICAgKiB0byBHIGJ5IGp1c3QgbXV0YXRpbmcgaXQuXG4gICAqL1xuXG4gIHZhciBQbHVnaW5JbW1lciA9IHtcbiAgICBmbldyYXA6IGZ1bmN0aW9uIGZuV3JhcChtb3ZlKSB7XG4gICAgICByZXR1cm4gcHJvZHVjZShtb3ZlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgcGx1Z2lucyB0aGF0IGFyZSBhbHdheXMgYWRkZWQuXG4gICAqL1xuXG4gIHZhciBERUZBVUxUX1BMVUdJTlMgPSBbUGx1Z2luSW1tZXJdO1xuICB2YXIgRyA9IHtcbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBwcm92aWRlZCBwbHVnaW5zIHRvIEcgZHVyaW5nIGdhbWUgc2V0dXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gRyAtIFRoZSBHIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gVGhlIGN0eCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdhbWUgLSBUaGUgZ2FtZSBvYmplY3QuXG4gICAgICovXG4gICAgc2V0dXA6IGZ1bmN0aW9uIHNldHVwKEcsIGN0eCwgZ2FtZSkge1xuICAgICAgW10uY29uY2F0KERFRkFVTFRfUExVR0lOUywgX3RvQ29uc3VtYWJsZUFycmF5KGdhbWUucGx1Z2lucykpLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4uRyAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5HLnNldHVwICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgRyA9IHBsdWdpbi5HLnNldHVwKEcsIGN0eCwgZ2FtZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBHO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBwcm92aWRlZCBwbHVnaW5zIHRvIEcgZHVyaW5nIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBoYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IEcgLSBUaGUgRyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgICAqL1xuICAgIG9uUGhhc2VCZWdpbjogZnVuY3Rpb24gb25QaGFzZUJlZ2luKEcsIGN0eCwgZ2FtZSkge1xuICAgICAgW10uY29uY2F0KERFRkFVTFRfUExVR0lOUywgX3RvQ29uc3VtYWJsZUFycmF5KGdhbWUucGx1Z2lucykpLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4uRyAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5HLm9uUGhhc2VCZWdpbiAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIEcgPSBwbHVnaW4uRy5vblBoYXNlQmVnaW4oRywgY3R4LCBnYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIEc7XG4gICAgfVxuICB9O1xuICB2YXIgY3R4ID0ge1xuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gY3R4IGR1cmluZyBnYW1lIHNldHVwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIFRoZSBjdHggb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lIC0gVGhlIGdhbWUgb2JqZWN0LlxuICAgICAqL1xuICAgIHNldHVwOiBmdW5jdGlvbiBzZXR1cChjdHgsIGdhbWUpIHtcbiAgICAgIFtdLmNvbmNhdChERUZBVUxUX1BMVUdJTlMsIF90b0NvbnN1bWFibGVBcnJheShnYW1lLnBsdWdpbnMpKS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLmN0eCAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5jdHguc2V0dXAgIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICBjdHggPSBwbHVnaW4uY3R4LnNldHVwKGN0eCwgZ2FtZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjdHg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIHByb3ZpZGVkIHBsdWdpbnMgdG8gY3R4IGR1cmluZyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBwaGFzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBUaGUgY3R4IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ2FtZSAtIFRoZSBnYW1lIG9iamVjdC5cbiAgICAgKi9cbiAgICBvblBoYXNlQmVnaW46IGZ1bmN0aW9uIG9uUGhhc2VCZWdpbihjdHgsIGdhbWUpIHtcbiAgICAgIFtdLmNvbmNhdChERUZBVUxUX1BMVUdJTlMsIF90b0NvbnN1bWFibGVBcnJheShnYW1lLnBsdWdpbnMpKS5maWx0ZXIoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLmN0eCAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5jdHgub25QaGFzZUJlZ2luICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgY3R4ID0gcGx1Z2luLmN0eC5vblBoYXNlQmVnaW4oY3R4LCBnYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGN0eDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vdmVzIGNhbiByZXR1cm4gdGhpcyB3aGVuIHRoZXkgd2FudCB0byBpbmRpY2F0ZVxuICAgKiB0aGF0IHRoZSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgaXMgaWxsZWdhbCBhbmRcbiAgICogdGhlIG1vdmUgb3VnaHQgdG8gYmUgZGlzY2FyZGVkLlxuICAgKi9cblxuICB2YXIgSU5WQUxJRF9NT1ZFID0gJ0lOVkFMSURfTU9WRSc7XG4gIC8qKlxuICAgKiBDb250ZXh0IEFQSSB0byBhbGxvdyB3cml0aW5nIGN1c3RvbSBsb2dzIGluIGdhbWVzLlxuICAgKi9cblxuICB2YXIgR2FtZUxvZ2dlckN0eEFQSSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVMb2dnZXJDdHhBUEkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvZ2dlckN0eEFQSSk7XG5cbiAgICAgIHRoaXMuX3BheWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdhbWVMb2dnZXJDdHhBUEksIFt7XG4gICAgICBrZXk6IFwiX2FwaVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcGkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZXRQYXlsb2FkOiBmdW5jdGlvbiBzZXRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAgICAgICAgIF90aGlzLl9wYXlsb2FkID0gcGF5bG9hZDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImF0dGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaChjdHgkJDEpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGN0eCQkMSwge1xuICAgICAgICAgIGxvZzogdGhpcy5fYXBpKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fcGF5bG9hZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9IC8vIGF0dGFjaCB0aGUgcGF5bG9hZCB0byB0aGUgbGFzdCBsb2cgZXZlbnRcblxuXG4gICAgICAgIHZhciBkZWx0YWxvZyA9IHN0YXRlLmRlbHRhbG9nO1xuICAgICAgICBkZWx0YWxvZ1tkZWx0YWxvZy5sZW5ndGggLSAxXSA9IF9vYmplY3RTcHJlYWQoe30sIGRlbHRhbG9nW2RlbHRhbG9nLmxlbmd0aCAtIDFdLCB7XG4gICAgICAgICAgcGF5bG9hZDogdGhpcy5fcGF5bG9hZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGVsdGFsb2c6IGRlbHRhbG9nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImRldGFjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGxvZyA9IGN0eCQkMS5sb2csXG4gICAgICAgICAgICBjdHhXaXRob3V0TG9nID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGN0eCQkMSwgW1wibG9nXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRMb2c7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdhbWVMb2dnZXJDdHhBUEk7XG4gIH0oKTtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBhdHRhY2gvZGV0YWNoIHZhcmlvdXMgdXRpbGl0eSBvYmplY3RzXG4gICAqIG9udG8gYSBjdHgsIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IGF0dGFjaC9kZXRhY2ggdGhlbVxuICAgKiBhbGwgc2VwYXJhdGVseS5cbiAgICovXG5cbiAgdmFyIENvbnRleHRFbmhhbmNlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHRFbmhhbmNlcihjdHgkJDEsIGdhbWUsIHBsYXllcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRFbmhhbmNlcik7XG5cbiAgICAgIHRoaXMucmFuZG9tID0gbmV3IFJhbmRvbShjdHgkJDEpO1xuICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKGdhbWUuZmxvdywgcGxheWVyKTtcbiAgICAgIHRoaXMubG9nID0gbmV3IEdhbWVMb2dnZXJDdHhBUEkoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29udGV4dEVuaGFuY2VyLCBbe1xuICAgICAga2V5OiBcImF0dGFjaFRvQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaFRvQ29udGV4dChjdHgkJDEpIHtcbiAgICAgICAgdmFyIGN0eFdpdGhBUEkgPSB0aGlzLnJhbmRvbS5hdHRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMuZXZlbnRzLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgY3R4V2l0aEFQSSA9IHRoaXMubG9nLmF0dGFjaChjdHhXaXRoQVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhBUEk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKHN0YXRlLCB1cGRhdGVFdmVudHMpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdXBkYXRlRXZlbnRzID8gdGhpcy5ldmVudHMudXBkYXRlKHN0YXRlKSA6IHN0YXRlO1xuICAgICAgICBuZXdTdGF0ZSA9IHRoaXMucmFuZG9tLnVwZGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5sb2cudXBkYXRlKG5ld1N0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVBbmREZXRhY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVBbmREZXRhY2goc3RhdGUsIHVwZGF0ZUV2ZW50cykge1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLl91cGRhdGUoc3RhdGUsIHVwZGF0ZUV2ZW50cyk7XG5cbiAgICAgICAgbmV3U3RhdGUuY3R4ID0gQ29udGV4dEVuaGFuY2VyLmRldGFjaEFsbEZyb21Db250ZXh0KG5ld1N0YXRlLmN0eCk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJkZXRhY2hBbGxGcm9tQ29udGV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbEZyb21Db250ZXh0KGN0eCQkMSkge1xuICAgICAgICB2YXIgY3R4V2l0aG91dEFQSSA9IFJhbmRvbS5kZXRhY2goY3R4JCQxKTtcbiAgICAgICAgY3R4V2l0aG91dEFQSSA9IEV2ZW50cy5kZXRhY2goY3R4V2l0aG91dEFQSSk7XG4gICAgICAgIGN0eFdpdGhvdXRBUEkgPSBHYW1lTG9nZ2VyQ3R4QVBJLmRldGFjaChjdHhXaXRob3V0QVBJKTtcbiAgICAgICAgcmV0dXJuIGN0eFdpdGhvdXRBUEk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbnRleHRFbmhhbmNlcjtcbiAgfSgpO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZUdhbWVcbiAgICpcbiAgICogQ3JlYXRlcyB0aGUgaW5pdGlhbCBnYW1lIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZ2FtZSAtIFJldHVybiB2YWx1ZSBvZiBHYW1lKCkuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbXVsdGlwbGF5ZXIgLSBTZXQgdG8gdHJ1ZSBpZiB3ZSBhcmUgaW4gYSBtdWx0aXBsYXllciBjbGllbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEluaXRpYWxpemVHYW1lKF9yZWYpIHtcbiAgICB2YXIgZ2FtZSA9IF9yZWYuZ2FtZSxcbiAgICAgICAgbnVtUGxheWVycyA9IF9yZWYubnVtUGxheWVycyxcbiAgICAgICAgc2V0dXBEYXRhID0gX3JlZi5zZXR1cERhdGE7XG5cbiAgICBpZiAoIW51bVBsYXllcnMpIHtcbiAgICAgIG51bVBsYXllcnMgPSAyO1xuICAgIH1cblxuICAgIHZhciBjdHgkJDEgPSBnYW1lLmZsb3cuY3R4KG51bVBsYXllcnMpO1xuICAgIHZhciBzZWVkID0gZ2FtZS5zZWVkO1xuXG4gICAgaWYgKHNlZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VlZCA9IFJhbmRvbS5zZWVkKCk7XG4gICAgfVxuXG4gICAgY3R4JCQxLl9yYW5kb20gPSB7XG4gICAgICBzZWVkOiBzZWVkXG4gICAgfTsgLy8gUGFzcyBjdHggdGhyb3VnaCBhbGwgdGhlIHBsdWdpbnMgdGhhdCB3YW50IHRvIG1vZGlmeSBpdC5cblxuICAgIGN0eCQkMSA9IGN0eC5zZXR1cChjdHgkJDEsIGdhbWUpOyAvLyBBdWdtZW50IGN0eCB3aXRoIHRoZSBlbmhhbmNlcnMgKFRPRE86IG1vdmUgdGhlc2UgaW50byBwbHVnaW5zKS5cblxuICAgIHZhciBhcGlDdHggPSBuZXcgQ29udGV4dEVuaGFuY2VyKGN0eCQkMSwgZ2FtZSwgY3R4JCQxLmN1cnJlbnRQbGF5ZXIpO1xuICAgIHZhciBjdHhXaXRoQVBJID0gYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChjdHgkJDEpO1xuICAgIHZhciBpbml0aWFsRyA9IGdhbWUuc2V0dXAoY3R4V2l0aEFQSSwgc2V0dXBEYXRhKTsgLy8gUGFzcyBHIHRocm91Z2ggYWxsIHRoZSBwbHVnaW5zIHRoYXQgd2FudCB0byBtb2RpZnkgaXQuXG5cbiAgICBpbml0aWFsRyA9IEcuc2V0dXAoaW5pdGlhbEcsIGN0eFdpdGhBUEksIGdhbWUpO1xuICAgIHZhciBpbml0aWFsID0ge1xuICAgICAgLy8gVXNlciBtYW5hZ2VkIHN0YXRlLlxuICAgICAgRzogaW5pdGlhbEcsXG4gICAgICAvLyBGcmFtZXdvcmsgbWFuYWdlZCBzdGF0ZS5cbiAgICAgIGN0eDogY3R4JCQxLFxuICAgICAgLy8gTGlzdCBvZiB7RywgY3R4fSBwYWlycyB0aGF0IGNhbiBiZSB1bmRvbmUuXG4gICAgICBfdW5kbzogW10sXG4gICAgICAvLyBMaXN0IG9mIHtHLCBjdHh9IHBhaXJzIHRoYXQgY2FuIGJlIHJlZG9uZS5cbiAgICAgIF9yZWRvOiBbXSxcbiAgICAgIC8vIEEgbW9ub3RvbmljYWxseSBub24tZGVjcmVhc2luZyBJRCB0byBlbnN1cmUgdGhhdFxuICAgICAgLy8gc3RhdGUgdXBkYXRlcyBhcmUgb25seSBhbGxvd2VkIGZyb20gY2xpZW50cyB0aGF0XG4gICAgICAvLyBhcmUgYXQgdGhlIHNhbWUgdmVyc2lvbiB0aGF0IHRoZSBzZXJ2ZXIuXG4gICAgICBfc3RhdGVJRDogMCxcbiAgICAgIC8vIEEgc25hcHNob3Qgb2YgdGhpcyBvYmplY3Qgc28gdGhhdCBhY3Rpb25zIGNhbiBiZVxuICAgICAgLy8gcmVwbGF5ZWQgb3ZlciBpdCB0byB2aWV3IG9sZCBzbmFwc2hvdHMuXG4gICAgICAvLyBUT0RPOiBUaGlzIHdpbGwgbm8gbG9uZ2VyIGJlIG5lY2Vzc2FyeSBvbmNlIHRoZVxuICAgICAgLy8gbG9nIHN0b3BzIHJlcGxheWluZyBhY3Rpb25zIChidXQgcmVhZHMgdGhlIGFjdHVhbFxuICAgICAgLy8gZ2FtZSBzdGF0ZXMgaW5zdGVhZCkuXG4gICAgICBfaW5pdGlhbDoge31cbiAgICB9O1xuICAgIHZhciBzdGF0ZSA9IGdhbWUuZmxvdy5pbml0KHtcbiAgICAgIEc6IGluaXRpYWwuRyxcbiAgICAgIGN0eDogY3R4V2l0aEFQSVxuICAgIH0pO1xuICAgIGluaXRpYWwuRyA9IHN0YXRlLkc7XG4gICAgaW5pdGlhbC5fdW5kbyA9IHN0YXRlLl91bmRvO1xuICAgIHN0YXRlID0gYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChzdGF0ZSwgdHJ1ZSk7XG4gICAgaW5pdGlhbC5jdHggPSBzdGF0ZS5jdHg7XG5cbiAgICB2YXIgZGVlcENvcHkgPSBmdW5jdGlvbiBkZWVwQ29weShvYmopIHtcbiAgICAgIHJldHVybiBmbGF0dGVkLnBhcnNlKGZsYXR0ZWQuc3RyaW5naWZ5KG9iaikpO1xuICAgIH07XG5cbiAgICBpbml0aWFsLl9pbml0aWFsID0gZGVlcENvcHkoaW5pdGlhbCk7XG4gICAgcmV0dXJuIGluaXRpYWw7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZUdhbWVSZWR1Y2VyXG4gICAqXG4gICAqIENyZWF0ZXMgdGhlIG1haW4gZ2FtZSBzdGF0ZSByZWR1Y2VyLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gZ2FtZSAtIFJldHVybiB2YWx1ZSBvZiBHYW1lKCkuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbXVsdGlwbGF5ZXIgLSBTZXQgdG8gdHJ1ZSBpZiB3ZSBhcmUgaW4gYSBtdWx0aXBsYXllciBjbGllbnQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENyZWF0ZUdhbWVSZWR1Y2VyKF9yZWYyKSB7XG4gICAgdmFyIGdhbWUgPSBfcmVmMi5nYW1lLFxuICAgICAgICBtdWx0aXBsYXllciA9IF9yZWYyLm11bHRpcGxheWVyO1xuXG4gICAgLyoqXG4gICAgICogR2FtZVJlZHVjZXJcbiAgICAgKlxuICAgICAqIFJlZHV4IHJlZHVjZXIgdGhhdCBtYWludGFpbnMgdGhlIG92ZXJhbGwgZ2FtZSBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgLSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBhY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiAtIEEgUmVkdXggYWN0aW9uLlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBHQU1FX0VWRU5UOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgZGVsdGFsb2c6IFtdXG4gICAgICAgICAgICB9KTsgLy8gUHJvY2VzcyBnYW1lIGV2ZW50cyBvbmx5IG9uIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgbGlrZSBgZW5kVHVybmAgdHlwaWNhbGx5XG4gICAgICAgICAgICAvLyBjb250YWluIGNvZGUgdGhhdCBtYXkgcmVseSBvbiBzZWNyZXQgc3RhdGVcbiAgICAgICAgICAgIC8vIGFuZCBjYW5ub3QgYmUgY29tcHV0ZWQgb24gdGhlIGNsaWVudC5cblxuICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBldmVudCBpZiB0aGUgcGxheWVyIGlzbid0IGFsbG93ZWQgdG8gbWFrZSBpdC5cblxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQucGxheWVySUQgIT09IG51bGwgJiYgYWN0aW9uLnBheWxvYWQucGxheWVySUQgIT09IHVuZGVmaW5lZCAmJiAhZ2FtZS5mbG93LmNhblBsYXllckNhbGxFdmVudChzdGF0ZS5HLCBzdGF0ZS5jdHgsIGFjdGlvbi5wYXlsb2FkLnBsYXllcklEKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhcGlDdHggPSBuZXcgQ29udGV4dEVuaGFuY2VyKHN0YXRlLmN0eCwgZ2FtZSwgYWN0aW9uLnBheWxvYWQucGxheWVySUQpO1xuICAgICAgICAgICAgc3RhdGUuY3R4ID0gYXBpQ3R4LmF0dGFjaFRvQ29udGV4dChzdGF0ZS5jdHgpO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gZ2FtZS5mbG93LnByb2Nlc3NHYW1lRXZlbnQoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IGFwaUN0eC51cGRhdGVBbmREZXRhY2gobmV3U3RhdGUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlLCB7XG4gICAgICAgICAgICAgIF9zdGF0ZUlEOiBzdGF0ZS5fc3RhdGVJRCArIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIE1BS0VfTU9WRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIGRlbHRhbG9nOiBbXVxuICAgICAgICAgICAgfSk7IC8vIENoZWNrIHdoZXRoZXIgdGhlIGdhbWUga25vd3MgdGhlIG1vdmUgYXQgYWxsLlxuXG4gICAgICAgICAgICBpZiAoIWdhbWUubW92ZU5hbWVzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBtb3ZlIGlmIGl0IGlzbid0IGFsbG93ZWQgYXQgdGhpcyBwb2ludC5cblxuXG4gICAgICAgICAgICBpZiAoIWdhbWUuZmxvdy5jYW5NYWtlTW92ZShzdGF0ZS5HLCBzdGF0ZS5jdHgsIGFjdGlvbi5wYXlsb2FkLnR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gSWdub3JlIHRoZSBtb3ZlIGlmIHRoZSBwbGF5ZXIgaXNuJ3QgYWxsb3dlZCB0byBtYWtlIGl0LlxuXG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gbnVsbCAmJiBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCAhPT0gdW5kZWZpbmVkICYmICFnYW1lLmZsb3cuY2FuUGxheWVyTWFrZU1vdmUoc3RhdGUuRywgc3RhdGUuY3R4LCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2FwaUN0eCA9IG5ldyBDb250ZXh0RW5oYW5jZXIoc3RhdGUuY3R4LCBnYW1lLCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRCk7XG5cbiAgICAgICAgICAgIHZhciBjdHhXaXRoQVBJID0gX2FwaUN0eC5hdHRhY2hUb0NvbnRleHQoc3RhdGUuY3R4KTsgLy8gUHJvY2VzcyB0aGUgbW92ZS5cblxuXG4gICAgICAgICAgICB2YXIgRyQkMSA9IGdhbWUucHJvY2Vzc01vdmUoc3RhdGUuRywgYWN0aW9uLnBheWxvYWQsIGN0eFdpdGhBUEkpO1xuXG4gICAgICAgICAgICBpZiAoRyQkMSA9PT0gSU5WQUxJRF9NT1ZFKSB7XG4gICAgICAgICAgICAgIC8vIHRoZSBnYW1lIGRlY2xhcmVkIHRoZSBtb3ZlIGFzIGludmFsaWQuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gQ3JlYXRlIGEgbG9nIGVudHJ5IGZvciB0aGlzIG1vdmUuXG5cblxuICAgICAgICAgICAgdmFyIGxvZ0VudHJ5ID0ge1xuICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgX3N0YXRlSUQ6IHN0YXRlLl9zdGF0ZUlELFxuICAgICAgICAgICAgICB0dXJuOiBzdGF0ZS5jdHgudHVybixcbiAgICAgICAgICAgICAgcGhhc2U6IHN0YXRlLmN0eC5waGFzZVxuICAgICAgICAgICAgfTsgLy8gZG9uJ3QgY2FsbCBpbnRvIGV2ZW50cyBoZXJlXG5cbiAgICAgICAgICAgIHZhciBfbmV3U3RhdGUgPSBfYXBpQ3R4LnVwZGF0ZUFuZERldGFjaChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBkZWx0YWxvZzogW2xvZ0VudHJ5XVxuICAgICAgICAgICAgfSksIGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIGN0eCQkMSA9IF9uZXdTdGF0ZS5jdHg7IC8vIFVuZG8gY2hhbmdlcyB0byBHIGlmIHRoZSBtb3ZlIHNob3VsZCBub3QgcnVuIG9uIHRoZSBjbGllbnQuXG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsYXllciAmJiAhZ2FtZS5mbG93Lm9wdGltaXN0aWNVcGRhdGUoRyQkMSwgY3R4JCQxLCBhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgRyQkMSA9IHN0YXRlLkc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgX25ld1N0YXRlLCB7XG4gICAgICAgICAgICAgIEc6IEckJDEsXG4gICAgICAgICAgICAgIGN0eDogY3R4JCQxLFxuICAgICAgICAgICAgICBfc3RhdGVJRDogc3RhdGUuX3N0YXRlSUQgKyAxXG4gICAgICAgICAgICB9KTsgLy8gSWYgd2UncmUgb24gdGhlIGNsaWVudCwganVzdCBwcm9jZXNzIHRoZSBtb3ZlXG4gICAgICAgICAgICAvLyBhbmQgbm8gdHJpZ2dlcnMgaW4gbXVsdGlwbGF5ZXIgbW9kZS5cbiAgICAgICAgICAgIC8vIFRoZXNlIHdpbGwgYmUgcHJvY2Vzc2VkIG9uIHRoZSBzZXJ2ZXIsIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIHNlbmQgYmFjayBhIHN0YXRlIHVwZGF0ZS5cblxuICAgICAgICAgICAgaWYgKG11bHRpcGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH0gLy8gQWxsb3cgdGhlIGZsb3cgcmVkdWNlciB0byBwcm9jZXNzIGFueSB0cmlnZ2VycyB0aGF0IGhhcHBlbiBhZnRlciBtb3Zlcy5cblxuXG4gICAgICAgICAgICBjdHhXaXRoQVBJID0gX2FwaUN0eC5hdHRhY2hUb0NvbnRleHQoc3RhdGUuY3R4KTtcbiAgICAgICAgICAgIHN0YXRlID0gZ2FtZS5mbG93LnByb2Nlc3NNb3ZlKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIGN0eDogY3R4V2l0aEFQSVxuICAgICAgICAgICAgfSksIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHN0YXRlID0gX2FwaUN0eC51cGRhdGVBbmREZXRhY2goc3RhdGUsIHRydWUpO1xuICAgICAgICAgICAgc3RhdGUuX3VuZG9bc3RhdGUuX3VuZG8ubGVuZ3RoIC0gMV0uY3R4ID0gc3RhdGUuY3R4O1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFJFU0VUOlxuICAgICAgICBjYXNlIFVQREFURTpcbiAgICAgICAgY2FzZSBTWU5DOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgVU5ETzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gc3RhdGUsXG4gICAgICAgICAgICAgICAgX3VuZG8gPSBfc3RhdGUuX3VuZG8sXG4gICAgICAgICAgICAgICAgX3JlZG8gPSBfc3RhdGUuX3JlZG87XG5cbiAgICAgICAgICAgIGlmIChfdW5kby5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxhc3QgPSBfdW5kb1tfdW5kby5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciByZXN0b3JlID0gX3VuZG9bX3VuZG8ubGVuZ3RoIC0gMl07IC8vIE9ubHkgYWxsb3cgdW5kb2FibGUgbW92ZXMgdG8gYmUgdW5kb25lLlxuXG4gICAgICAgICAgICBpZiAoIWdhbWUuZmxvdy5jYW5VbmRvTW92ZShzdGF0ZS5HLCBzdGF0ZS5jdHgsIGxhc3QubW92ZVR5cGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgIEc6IHJlc3RvcmUuRyxcbiAgICAgICAgICAgICAgY3R4OiByZXN0b3JlLmN0eCxcbiAgICAgICAgICAgICAgX3VuZG86IF91bmRvLnNsaWNlKDAsIF91bmRvLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgICBfcmVkbzogW2xhc3RdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3JlZG8pKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUkVETzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlMiA9IHN0YXRlLFxuICAgICAgICAgICAgICAgIF91bmRvMiA9IF9zdGF0ZTIuX3VuZG8sXG4gICAgICAgICAgICAgICAgX3JlZG8yID0gX3N0YXRlMi5fcmVkbztcblxuICAgICAgICAgICAgaWYgKF9yZWRvMi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmaXJzdCA9IF9yZWRvMlswXTtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICBHOiBmaXJzdC5HLFxuICAgICAgICAgICAgICBjdHg6IGZpcnN0LmN0eCxcbiAgICAgICAgICAgICAgX3VuZG86IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3VuZG8yKSwgW2ZpcnN0XSksXG4gICAgICAgICAgICAgIF9yZWRvOiBfcmVkbzIuc2xpY2UoMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBHYW1lTWV0YWRhdGFLZXkgPSBmdW5jdGlvbiBHYW1lTWV0YWRhdGFLZXkoZ2FtZUlEKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGdhbWVJRCwgXCI6bWV0YWRhdGFcIik7XG4gIH07XG4gIC8qKlxuICAgKiBSZWRhY3QgdGhlIGxvZy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcmVkYWN0ZWRNb3ZlcyAtIExpc3Qgb2YgbW92ZXMgdG8gcmVkYWN0LlxuICAgKiBAcGFyYW0ge0FycmF5fSBsb2cgLSBUaGUgZ2FtZSBsb2cgKG9yIGRlbHRhbG9nKS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBsYXllcklEIC0gVGhlIHBsYXllcklEIHRoYXQgdGhpcyBsb2cgaXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgc2VudCB0by5cbiAgICovXG5cblxuICBmdW5jdGlvbiByZWRhY3RMb2cocmVkYWN0ZWRNb3ZlcywgbG9nLCBwbGF5ZXJJRCkge1xuICAgIGlmIChyZWRhY3RlZE1vdmVzID09PSB1bmRlZmluZWQgfHwgbG9nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBsb2c7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZy5tYXAoZnVuY3Rpb24gKGxvZ0V2ZW50KSB7XG4gICAgICAvLyBmaWx0ZXIgZm9yIGFsbCBvdGhlciBwbGF5ZXJzIGFuZCBhIHNwZWN0YXRvclxuICAgICAgaWYgKHBsYXllcklEICE9PSBudWxsICYmICtwbGF5ZXJJRCA9PT0gK2xvZ0V2ZW50LmFjdGlvbi5wYXlsb2FkLnBsYXllcklEKSB7XG4gICAgICAgIHJldHVybiBsb2dFdmVudDtcbiAgICAgIH0gLy8gb25seSBmaWx0ZXIgbW92ZXNcblxuXG4gICAgICBpZiAobG9nRXZlbnQuYWN0aW9uLnR5cGUgIT09ICdNQUtFX01PVkUnKSB7XG4gICAgICAgIHJldHVybiBsb2dFdmVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1vdmVOYW1lID0gbG9nRXZlbnQuYWN0aW9uLnBheWxvYWQudHlwZTtcbiAgICAgIHZhciBmaWx0ZXJlZEV2ZW50ID0gbG9nRXZlbnQ7XG5cbiAgICAgIGlmIChyZWRhY3RlZE1vdmVzLmluY2x1ZGVzKG1vdmVOYW1lKSkge1xuICAgICAgICB2YXIgbmV3UGF5bG9hZCA9IF9vYmplY3RTcHJlYWQoe30sIGZpbHRlcmVkRXZlbnQuYWN0aW9uLnBheWxvYWQsIHtcbiAgICAgICAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgICAgICAgYXJnc1JlZGFjdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZpbHRlcmVkRXZlbnQgPSBfb2JqZWN0U3ByZWFkKHt9LCBmaWx0ZXJlZEV2ZW50LCB7XG4gICAgICAgICAgYWN0aW9uOiBfb2JqZWN0U3ByZWFkKHt9LCBmaWx0ZXJlZEV2ZW50LmFjdGlvbiwge1xuICAgICAgICAgICAgcGF5bG9hZDogbmV3UGF5bG9hZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsdGVyZWRFdmVudDtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVmVyaWZpZXMgdGhhdCB0aGUgbW92ZSBjYW1lIGZyb20gYSBwbGF5ZXIgd2l0aCB0aGVcbiAgICogYXBwcm9wcmlhdGUgY3JlZGVudGlhbHMuXG4gICAqL1xuXG4gIHZhciBpc0FjdGlvbkZyb21BdXRoZW50aWNQbGF5ZXIgPSBmdW5jdGlvbiBpc0FjdGlvbkZyb21BdXRoZW50aWNQbGF5ZXIoX3JlZikge1xuICAgIHZhciBhY3Rpb24gPSBfcmVmLmFjdGlvbixcbiAgICAgICAgZ2FtZU1ldGFkYXRhID0gX3JlZi5nYW1lTWV0YWRhdGEsXG4gICAgICAgIHBsYXllcklEID0gX3JlZi5wbGF5ZXJJRDtcblxuICAgIGlmICghZ2FtZU1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaGFzQ3JlZGVudGlhbHMgPSBPYmplY3Qua2V5cyhnYW1lTWV0YWRhdGEucGxheWVycykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gISEoZ2FtZU1ldGFkYXRhLnBsYXllcnNba2V5XSAmJiBnYW1lTWV0YWRhdGEucGxheWVyc1trZXldLmNyZWRlbnRpYWxzKTtcbiAgICB9KTtcblxuICAgIGlmICghaGFzQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYWN0aW9uLnBheWxvYWQuY3JlZGVudGlhbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnBheWxvYWQuY3JlZGVudGlhbHMgIT09IGdhbWVNZXRhZGF0YS5wbGF5ZXJzW3BsYXllcklEXS5jcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICAvKipcbiAgICogTWFzdGVyXG4gICAqXG4gICAqIENsYXNzIHRoYXQgcnVucyB0aGUgZ2FtZSBhbmQgbWFpbnRhaW5zIHRoZSBhdXRob3JpdGF0aXZlIHN0YXRlLlxuICAgKiBJdCB1c2VzIHRoZSB0cmFuc3BvcnRBUEkgdG8gY29tbXVuaWNhdGUgd2l0aCBjbGllbnRzIGFuZCB0aGVcbiAgICogc3RvcmFnZUFQSSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBkYXRhYmFzZS5cbiAgICovXG5cbiAgdmFyIE1hc3RlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hc3RlcihnYW1lLCBzdG9yYWdlQVBJLCB0cmFuc3BvcnRBUEksIGF1dGgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXN0ZXIpO1xuXG4gICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgdGhpcy5zdG9yYWdlQVBJID0gc3RvcmFnZUFQSTtcbiAgICAgIHRoaXMudHJhbnNwb3J0QVBJID0gdHJhbnNwb3J0QVBJO1xuXG4gICAgICB0aGlzLmF1dGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcblxuICAgICAgaWYgKGF1dGggPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gaXNBY3Rpb25Gcm9tQXV0aGVudGljUGxheWVyO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXV0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gZWFjaCBtb3ZlIC8gZXZlbnQgbWFkZSBieSB0aGUgY2xpZW50LlxuICAgICAqIENvbXB1dGVzIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGdhbWUgc3RhdGUgYW5kIHJldHVybnMgaXRcbiAgICAgKiBhbG9uZyB3aXRoIGEgZGVsdGFsb2cuXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhNYXN0ZXIsIFt7XG4gICAgICBrZXk6IFwib25VcGRhdGVcIixcbiAgICAgIHZhbHVlOiBhc3luYyBmdW5jdGlvbiBvblVwZGF0ZShhY3Rpb24sIHN0YXRlSUQsIGdhbWVJRCwgcGxheWVySUQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgaXNBY3Rpb25BdXRoZW50aWM7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzbHkpIHtcbiAgICAgICAgICB2YXIgZ2FtZU1ldGFkYXRhID0gdGhpcy5zdG9yYWdlQVBJLmdldChHYW1lTWV0YWRhdGFLZXkoZ2FtZUlEKSk7XG4gICAgICAgICAgaXNBY3Rpb25BdXRoZW50aWMgPSB0aGlzLmF1dGgoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBnYW1lTWV0YWRhdGE6IGdhbWVNZXRhZGF0YSxcbiAgICAgICAgICAgIGdhbWVJRDogZ2FtZUlELFxuICAgICAgICAgICAgcGxheWVySUQ6IHBsYXllcklEXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9nYW1lTWV0YWRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBUEkuZ2V0KEdhbWVNZXRhZGF0YUtleShnYW1lSUQpKTtcblxuICAgICAgICAgIGlzQWN0aW9uQXV0aGVudGljID0gdGhpcy5hdXRoKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgZ2FtZU1ldGFkYXRhOiBfZ2FtZU1ldGFkYXRhLFxuICAgICAgICAgICAgZ2FtZUlEOiBnYW1lSUQsXG4gICAgICAgICAgICBwbGF5ZXJJRDogcGxheWVySURcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBY3Rpb25BdXRoZW50aWMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6ICd1bmF1dGhvcml6ZWQgYWN0aW9uJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZ2FtZUlEO1xuICAgICAgICB2YXIgc3RhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhlY3V0ZVN5bmNocm9ub3VzbHkpIHtcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RvcmFnZUFQSS5nZXQoa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZSA9IGF3YWl0IHRoaXMuc3RvcmFnZUFQSS5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXJyb3IoXCJnYW1lIG5vdCBmb3VuZCwgZ2FtZUlEPVtcIi5jb25jYXQoa2V5LCBcIl1cIikpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcjogJ2dhbWUgbm90IGZvdW5kJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVkdWNlciA9IENyZWF0ZUdhbWVSZWR1Y2VyKHtcbiAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgbnVtUGxheWVyczogc3RhdGUuY3R4Lm51bVBsYXllcnNcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdG9yZSA9IHJlZHV4LmNyZWF0ZVN0b3JlKHJlZHVjZXIsIHN0YXRlKTsgLy8gT25seSBhbGxvdyBVTkRPIC8gUkVETyBpZiB0aGVyZSBpcyBleGFjdGx5IG9uZSBwbGF5ZXJcbiAgICAgICAgLy8gdGhhdCBjYW4gbWFrZSBtb3ZlcyByaWdodCBub3cgYW5kIHRoZSBwZXJzb24gZG9pbmcgdGhlXG4gICAgICAgIC8vIGFjdGlvbiBpcyB0aGF0IHBsYXllci5cblxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT0gVU5ETyB8fCBhY3Rpb24udHlwZSA9PSBSRURPKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLmN0eC5jdXJyZW50UGxheWVyICE9PSBwbGF5ZXJJRCB8fCBzdGF0ZS5jdHguYWN0aW9uUGxheWVycy5sZW5ndGggIT0gMSB8fCBzdGF0ZS5jdHguYWN0aW9uUGxheWVyc1swXSAhPT0gcGxheWVySUQpIHtcbiAgICAgICAgICAgIGVycm9yKFwicGxheWVySUQ9W1wiLmNvbmNhdChwbGF5ZXJJRCwgXCJdIGNhbm5vdCB1bmRvIC8gcmVkbyByaWdodCBub3dcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBDaGVjayB3aGV0aGVyIHRoZSBwbGF5ZXIgaXMgYWxsb3dlZCB0byBtYWtlIHRoZSBtb3ZlLlxuXG5cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09IE1BS0VfTU9WRSAmJiAhdGhpcy5nYW1lLmZsb3cuY2FuUGxheWVyTWFrZU1vdmUoc3RhdGUuRywgc3RhdGUuY3R4LCBwbGF5ZXJJRCkpIHtcbiAgICAgICAgICBlcnJvcihcIm1vdmUgbm90IHByb2Nlc3NlZCAtIGNhblBsYXllck1ha2VNb3ZlPWZhbHNlLCBwbGF5ZXJJRD1bXCIuY29uY2F0KHBsYXllcklELCBcIl1cIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBDaGVjayB3aGV0aGVyIHRoZSBwbGF5ZXIgaXMgYWxsb3dlZCB0byBjYWxsIHRoZSBldmVudC5cblxuXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PSBHQU1FX0VWRU5UICYmICF0aGlzLmdhbWUuZmxvdy5jYW5QbGF5ZXJDYWxsRXZlbnQoc3RhdGUuRywgc3RhdGUuY3R4LCBwbGF5ZXJJRCkpIHtcbiAgICAgICAgICBlcnJvcihcImV2ZW50IG5vdCBwcm9jZXNzZWQgLSBpbnZhbGlkIHBsYXllcklEPVtcIi5jb25jYXQocGxheWVySUQsIFwiXVwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLl9zdGF0ZUlEICE9PSBzdGF0ZUlEKSB7XG4gICAgICAgICAgZXJyb3IoXCJpbnZhbGlkIHN0YXRlSUQsIHdhcz1bXCIuY29uY2F0KHN0YXRlSUQsIFwiXSwgZXhwZWN0ZWQ9W1wiKS5jb25jYXQoc3RhdGUuX3N0YXRlSUQsIFwiXVwiKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZyA9IHN0b3JlLmdldFN0YXRlKCkubG9nIHx8IFtdOyAvLyBVcGRhdGUgc2VydmVyJ3MgdmVyc2lvbiBvZiB0aGUgc3RvcmUuXG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydEFQSS5zZW5kQWxsKGZ1bmN0aW9uIChwbGF5ZXJJRCkge1xuICAgICAgICAgIHZhciBmaWx0ZXJlZFN0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIEc6IF90aGlzLmdhbWUucGxheWVyVmlldyhzdGF0ZS5HLCBzdGF0ZS5jdHgsIHBsYXllcklEKSxcbiAgICAgICAgICAgIGN0eDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuY3R4LCB7XG4gICAgICAgICAgICAgIF9yYW5kb206IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsb2c6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlbHRhbG9nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfdW5kbzogW10sXG4gICAgICAgICAgICBfcmVkbzogW10sXG4gICAgICAgICAgICBfaW5pdGlhbDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuX2luaXRpYWwsIHtcbiAgICAgICAgICAgICAgX3VuZG86IFtdLFxuICAgICAgICAgICAgICBfcmVkbzogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbG9nID0gcmVkYWN0TG9nKF90aGlzLmdhbWUuZmxvdy5yZWRhY3RlZE1vdmVzLCBzdGF0ZS5kZWx0YWxvZywgcGxheWVySUQpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlJyxcbiAgICAgICAgICAgIGFyZ3M6IFtnYW1lSUQsIGZpbHRlcmVkU3RhdGUsIGxvZ11cbiAgICAgICAgICB9O1xuICAgICAgICB9KTsgLy8gVE9ETzogV2UgY3VycmVudGx5IGF0dGFjaCB0aGUgbG9nIGJhY2sgaW50byB0aGUgc3RhdGVcbiAgICAgICAgLy8gb2JqZWN0IGJlZm9yZSBzdG9yaW5nIGl0LCBidXQgdGhpcyBzaG91bGQgcHJvYmFibHlcbiAgICAgICAgLy8gc2l0IGluIGEgZGlmZmVyZW50IHBhcnQgb2YgdGhlIGRhdGFiYXNlIGV2ZW50dWFsbHkuXG5cbiAgICAgICAgbG9nID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsb2cpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuZGVsdGFsb2cpKTtcblxuICAgICAgICB2YXIgc3RhdGVXaXRoTG9nID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBsb2c6IGxvZ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5leGVjdXRlU3luY2hyb25vdXNseSkge1xuICAgICAgICAgIHRoaXMuc3RvcmFnZUFQSS5zZXQoa2V5LCBzdGF0ZVdpdGhMb2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUFQSS5zZXQoa2V5LCBzdGF0ZVdpdGhMb2cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBjbGllbnQgY29ubmVjdHMgLyByZWNvbm5lY3RzLlxuICAgICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IGdhbWUgc3RhdGUgYW5kIHRoZSBlbnRpcmUgbG9nLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25TeW5jXCIsXG4gICAgICB2YWx1ZTogYXN5bmMgZnVuY3Rpb24gb25TeW5jKGdhbWVJRCwgcGxheWVySUQsIG51bVBsYXllcnMpIHtcbiAgICAgICAgdmFyIGtleSA9IGdhbWVJRDtcbiAgICAgICAgdmFyIHN0YXRlO1xuXG4gICAgICAgIGlmICh0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c2x5KSB7XG4gICAgICAgICAgc3RhdGUgPSB0aGlzLnN0b3JhZ2VBUEkuZ2V0KGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBUEkuZ2V0KGtleSk7XG4gICAgICAgIH0gLy8gSWYgdGhlIGdhbWUgZG9lc24ndCBleGlzdCwgdGhlbiBjcmVhdGUgb25lIG9uIGRlbWFuZC5cbiAgICAgICAgLy8gVE9ETzogTW92ZSB0aGlzIG91dCBvZiB0aGUgc3luYyBjYWxsLlxuXG5cbiAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGF0ZSA9IEluaXRpYWxpemVHYW1lKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIG51bVBsYXllcnM6IG51bVBsYXllcnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0aGlzLmV4ZWN1dGVTeW5jaHJvbm91c2x5KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VBUEkuc2V0KGtleSwgc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0b3JhZ2VBUEkuZ2V0KGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUFQSS5zZXQoa2V5LCBzdGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZSA9IGF3YWl0IHRoaXMuc3RvcmFnZUFQSS5nZXQoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsdGVyZWRTdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgRzogdGhpcy5nYW1lLnBsYXllclZpZXcoc3RhdGUuRywgc3RhdGUuY3R4LCBwbGF5ZXJJRCksXG4gICAgICAgICAgY3R4OiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZS5jdHgsIHtcbiAgICAgICAgICAgIF9yYW5kb206IHVuZGVmaW5lZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvZzogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlbHRhbG9nOiB1bmRlZmluZWQsXG4gICAgICAgICAgX3VuZG86IFtdLFxuICAgICAgICAgIF9yZWRvOiBbXSxcbiAgICAgICAgICBfaW5pdGlhbDogX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuX2luaXRpYWwsIHtcbiAgICAgICAgICAgIF91bmRvOiBbXSxcbiAgICAgICAgICAgIF9yZWRvOiBbXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBsb2cgPSByZWRhY3RMb2codGhpcy5nYW1lLmZsb3cucmVkYWN0ZWRNb3Zlcywgc3RhdGUubG9nLCBwbGF5ZXJJRCk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0QVBJLnNlbmQoe1xuICAgICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgICB0eXBlOiAnc3luYycsXG4gICAgICAgICAgYXJnczogW2dhbWVJRCwgZmlsdGVyZWRTdGF0ZSwgbG9nXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYXN0ZXI7XG4gIH0oKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvY2FsIHZlcnNpb24gb2YgdGhlIG1hc3RlciB0aGF0IHRoZSBjbGllbnRcbiAgICogY2FuIGludGVyYWN0IHdpdGguXG4gICAqL1xuXG4gIGZ1bmN0aW9uIExvY2FsTWFzdGVyKGdhbWUpIHtcbiAgICB2YXIgY2xpZW50Q2FsbGJhY2tzID0ge307XG5cbiAgICB2YXIgc2VuZCA9IGZ1bmN0aW9uIHNlbmQoX3JlZikge1xuICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgcGxheWVySUQgPSBfcmVmLnBsYXllcklELFxuICAgICAgICAgIGFyZ3MgPSBfcmVmLmFyZ3M7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBjbGllbnRDYWxsYmFja3NbcGxheWVySURdO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBbdHlwZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzKSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc2VuZEFsbCA9IGZ1bmN0aW9uIHNlbmRBbGwoYXJnKSB7XG4gICAgICBmb3IgKHZhciBwbGF5ZXJJRCBpbiBjbGllbnRDYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF9hcmcgPSBhcmcocGxheWVySUQpLFxuICAgICAgICAgICAgdHlwZSA9IF9hcmcudHlwZSxcbiAgICAgICAgICAgIGFyZ3MgPSBfYXJnLmFyZ3M7XG5cbiAgICAgICAgc2VuZCh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBwbGF5ZXJJRDogcGxheWVySUQsXG4gICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG1hc3RlciA9IG5ldyBNYXN0ZXIoZ2FtZSwgbmV3IEluTWVtb3J5KCksIHtcbiAgICAgIHNlbmQ6IHNlbmQsXG4gICAgICBzZW5kQWxsOiBzZW5kQWxsXG4gICAgfSwgZmFsc2UpO1xuICAgIG1hc3Rlci5leGVjdXRlU3luY2hyb25vdXNseSA9IHRydWU7XG5cbiAgICBtYXN0ZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChnYW1lSUQsIHBsYXllcklELCBjYWxsYmFjaykge1xuICAgICAgY2xpZW50Q2FsbGJhY2tzW3BsYXllcklEXSA9IGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICByZXR1cm4gbWFzdGVyO1xuICB9XG4gIC8qKlxuICAgKiBMb2NhbFxuICAgKlxuICAgKiBUcmFuc3BvcnQgaW50ZXJmYWNlIHRoYXQgZW1iZWRzIGEgR2FtZU1hc3RlciB3aXRoaW4gaXRcbiAgICogdGhhdCB5b3UgY2FuIGNvbm5lY3QgbXVsdGlwbGUgY2xpZW50cyB0by5cbiAgICovXG5cbiAgdmFyIExvY2FsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBNdXRpcGxheWVyIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb2NrZXQgLSBPdmVycmlkZSBmb3IgdW5pdCB0ZXN0cy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ja2V0T3B0cyAtIE9wdGlvbnMgdG8gcGFzcyB0byBzb2NrZXQuaW8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVJRCAtIFRoZSBnYW1lIElEIHRvIGNvbm5lY3QgdG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllcklEIC0gVGhlIHBsYXllciBJRCBhc3NvY2lhdGVkIHdpdGggdGhpcyBjbGllbnQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVOYW1lIC0gVGhlIGdhbWUgdHlwZSAodGhlIGBuYW1lYCBmaWVsZCBpbiBgR2FtZWApLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2ZXIgLSBUaGUgZ2FtZSBzZXJ2ZXIgaW4gdGhlIGZvcm0gb2YgJ2hvc3RuYW1lOnBvcnQnLiBEZWZhdWx0cyB0byB0aGUgc2VydmVyIHNlcnZpbmcgdGhlIGNsaWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gTG9jYWwoX3JlZjIpIHtcbiAgICAgIHZhciBtYXN0ZXIgPSBfcmVmMi5tYXN0ZXIsXG4gICAgICAgICAgc3RvcmUgPSBfcmVmMi5zdG9yZSxcbiAgICAgICAgICBnYW1lSUQgPSBfcmVmMi5nYW1lSUQsXG4gICAgICAgICAgcGxheWVySUQgPSBfcmVmMi5wbGF5ZXJJRCxcbiAgICAgICAgICBnYW1lTmFtZSA9IF9yZWYyLmdhbWVOYW1lLFxuICAgICAgICAgIG51bVBsYXllcnMgPSBfcmVmMi5udW1QbGF5ZXJzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWwpO1xuXG4gICAgICB0aGlzLm1hc3RlciA9IG1hc3RlcjtcbiAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICAgIHRoaXMuZ2FtZU5hbWUgPSBnYW1lTmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgICB0aGlzLmdhbWVJRCA9IGdhbWVJRCB8fCAnZGVmYXVsdCc7XG4gICAgICB0aGlzLnBsYXllcklEID0gcGxheWVySUQgfHwgbnVsbDtcbiAgICAgIHRoaXMubnVtUGxheWVycyA9IG51bVBsYXllcnMgfHwgMjtcbiAgICAgIHRoaXMuZ2FtZUlEID0gdGhpcy5nYW1lTmFtZSArICc6JyArIHRoaXMuZ2FtZUlEO1xuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFub3RoZXIgcGxheWVyIG1ha2VzIGEgbW92ZSBhbmQgdGhlXG4gICAgICogbWFzdGVyIGJyb2FkY2FzdHMgdGhlIHVwZGF0ZSB0byBvdGhlciBjbGllbnRzIChpbmNsdWRpbmdcbiAgICAgKiB0aGlzIG9uZSkuXG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhMb2NhbCwgW3tcbiAgICAgIGtleTogXCJvblVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uVXBkYXRlKGdhbWVJRCwgc3RhdGUsIGRlbHRhbG9nKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgaWYgKGdhbWVJRCA9PSB0aGlzLmdhbWVJRCAmJiBzdGF0ZS5fc3RhdGVJRCA+PSBjdXJyZW50U3RhdGUuX3N0YXRlSUQpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gdXBkYXRlKHN0YXRlLCBkZWx0YWxvZyk7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBjbGllbnQgZmlyc3QgY29ubmVjdHMgdG8gdGhlIG1hc3RlclxuICAgICAgICogYW5kIHJlcXVlc3RzIHRoZSBjdXJyZW50IGdhbWUgc3RhdGUuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvblN5bmNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN5bmMoZ2FtZUlELCBzdGF0ZSwgbG9nKSB7XG4gICAgICAgIGlmIChnYW1lSUQgPT0gdGhpcy5nYW1lSUQpIHtcbiAgICAgICAgICB2YXIgYWN0aW9uID0gc3luYyhzdGF0ZSwgbG9nKTtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGVkIHdoZW4gYW4gYWN0aW9uIHRoYXQgaGFzIHRvIGJlIHJlbGF5ZWQgdG8gdGhlXG4gICAgICAgKiBnYW1lIG1hc3RlciBpcyBtYWRlLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25BY3Rpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkFjdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMubWFzdGVyLm9uVXBkYXRlKGFjdGlvbiwgc3RhdGUuX3N0YXRlSUQsIHRoaXMuZ2FtZUlELCB0aGlzLnBsYXllcklEKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQ29ubmVjdCB0byB0aGUgc2VydmVyLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXN0ZXIuY29ubmVjdCh0aGlzLmdhbWVJRCwgdGhpcy5wbGF5ZXJJRCwgZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZSA9PSAnc3luYycpIHtcbiAgICAgICAgICAgIF90aGlzLm9uU3luYy5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGUgPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgIF90aGlzLm9uVXBkYXRlLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hc3Rlci5vblN5bmModGhpcy5nYW1lSUQsIHRoaXMucGxheWVySUQsIHRoaXMubnVtUGxheWVycyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFN1YnNjcmliZSB0byBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7fVxuICAgICAgLyoqXG4gICAgICAgKiBVcGRhdGVzIHRoZSBnYW1lIGlkLlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gVGhlIG5ldyBnYW1lIGlkLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlR2FtZUlEXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlR2FtZUlEKGlkKSB7XG4gICAgICAgIHRoaXMuZ2FtZUlEID0gdGhpcy5nYW1lTmFtZSArICc6JyArIGlkO1xuICAgICAgICB2YXIgYWN0aW9uID0gcmVzZXQobnVsbCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgdGhpcy5tYXN0ZXIub25TeW5jKHRoaXMuZ2FtZUlELCB0aGlzLnBsYXllcklELCB0aGlzLm51bVBsYXllcnMpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY2xpZW50LlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gVGhlIG5ldyBwbGF5ZXIgaWQuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVQbGF5ZXJJRFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcklEKGlkKSB7XG4gICAgICAgIHRoaXMucGxheWVySUQgPSBpZDtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHJlc2V0KG51bGwpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIHRoaXMubWFzdGVyLm9uU3luYyh0aGlzLmdhbWVJRCwgdGhpcy5wbGF5ZXJJRCwgdGhpcy5udW1QbGF5ZXJzKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTG9jYWw7XG4gIH0oKTtcblxuICB2YXIgbG9jYWxNYXN0ZXJfID0gbnVsbDtcbiAgLyoqXG4gICAqIGNyZWF0ZURpc3BhdGNoZXJzXG4gICAqXG4gICAqIENyZWF0ZSBhY3Rpb24gZGlzcGF0Y2hlciB3cmFwcGVycyB3aXRoIGJvdW5kIHBsYXllcklEIGFuZCBjcmVkZW50aWFsc1xuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVEaXNwYXRjaGVycyhzdG9yZUFjdGlvblR5cGUsIGlubmVyQWN0aW9uTmFtZXMsIHN0b3JlLCBwbGF5ZXJJRCwgY3JlZGVudGlhbHMsIG11bHRpcGxheWVyKSB7XG4gICAgcmV0dXJuIGlubmVyQWN0aW9uTmFtZXMucmVkdWNlKGZ1bmN0aW9uIChkaXNwYXRjaGVycywgbmFtZSkge1xuICAgICAgZGlzcGF0Y2hlcnNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3N1bWVkUGxheWVySUQgPSBwbGF5ZXJJRDsgLy8gSW4gc2luZ2xlcGxheWVyIG1vZGUsIGlmIHRoZSBjbGllbnQgZG9lcyBub3QgaGF2ZSBhIHBsYXllcklEXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCBpdCwgd2UgYXR0YWNoIHRoZSBjdXJyZW50UGxheWVyIGFzIHBsYXllcklELlxuXG4gICAgICAgIGlmICghbXVsdGlwbGF5ZXIgJiYgKHBsYXllcklEID09PSBudWxsIHx8IHBsYXllcklEID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgdmFyIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICBhc3N1bWVkUGxheWVySUQgPSBzdGF0ZS5jdHguY3VycmVudFBsYXllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9yc1tzdG9yZUFjdGlvblR5cGVdKG5hbWUsIGFyZ3MsIGFzc3VtZWRQbGF5ZXJJRCwgY3JlZGVudGlhbHMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkaXNwYXRjaGVycztcbiAgICB9LCB7fSk7XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcnNcbiAgICpcbiAgICogQ3JlYXRlcyBhIHNldCBvZiBkaXNwYXRjaGVycyB0byBkaXNwYXRjaCBnYW1lIGZsb3cgZXZlbnRzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBldmVudE5hbWVzIC0gQSBsaXN0IG9mIGV2ZW50IG5hbWVzLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgLSBUaGUgUmVkdXggc3RvcmUgdG8gY3JlYXRlIGRpc3BhdGNoZXJzIGZvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllcklEIC0gVGhlIElEIG9mIHRoZSBwbGF5ZXIgZGlzcGF0Y2hpbmcgdGhlc2UgZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3JlZGVudGlhbHMgLSBBIGtleSBpbmRpY2F0aW5nIHRoYXQgdGhlIHBsYXllciBpcyBhdXRob3JpemVkIHRvIHBsYXkuXG4gICAqL1xuXG5cbiAgdmFyIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcnMgPSBjcmVhdGVEaXNwYXRjaGVycy5iaW5kKG51bGwsICdnYW1lRXZlbnQnKTtcbiAgLyoqXG4gICAqIGNyZWF0ZU1vdmVEaXNwYXRjaGVyc1xuICAgKlxuICAgKiBDcmVhdGVzIGEgc2V0IG9mIGRpc3BhdGNoZXJzIHRvIG1ha2UgbW92ZXMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1vdmVOYW1lcyAtIEEgbGlzdCBvZiBtb3ZlIG5hbWVzLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgLSBUaGUgUmVkdXggc3RvcmUgdG8gY3JlYXRlIGRpc3BhdGNoZXJzIGZvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllcklEIC0gVGhlIElEIG9mIHRoZSBwbGF5ZXIgZGlzcGF0Y2hpbmcgdGhlc2UgZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3JlZGVudGlhbHMgLSBBIGtleSBpbmRpY2F0aW5nIHRoYXQgdGhlIHBsYXllciBpcyBhdXRob3JpemVkIHRvIHBsYXkuXG4gICAqL1xuXG4gIHZhciBjcmVhdGVNb3ZlRGlzcGF0Y2hlcnMgPSBjcmVhdGVEaXNwYXRjaGVycy5iaW5kKG51bGwsICdtYWtlTW92ZScpO1xuICAvKipcbiAgICogSW1wbGVtZW50YXRpb24gb2YgQ2xpZW50IChzZWUgYmVsb3cpLlxuICAgKi9cblxuICB2YXIgX0NsaWVudEltcGwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBfQ2xpZW50SW1wbChfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZ2FtZSA9IF9yZWYuZ2FtZSxcbiAgICAgICAgICBhaSA9IF9yZWYuYWksXG4gICAgICAgICAgbnVtUGxheWVycyA9IF9yZWYubnVtUGxheWVycyxcbiAgICAgICAgICBtdWx0aXBsYXllciA9IF9yZWYubXVsdGlwbGF5ZXIsXG4gICAgICAgICAgc29ja2V0T3B0cyA9IF9yZWYuc29ja2V0T3B0cyxcbiAgICAgICAgICBnYW1lSUQgPSBfcmVmLmdhbWVJRCxcbiAgICAgICAgICBwbGF5ZXJJRCA9IF9yZWYucGxheWVySUQsXG4gICAgICAgICAgY3JlZGVudGlhbHMgPSBfcmVmLmNyZWRlbnRpYWxzLFxuICAgICAgICAgIGVuaGFuY2VyID0gX3JlZi5lbmhhbmNlcjtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9DbGllbnRJbXBsKTtcblxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgIHRoaXMucGxheWVySUQgPSBwbGF5ZXJJRDtcbiAgICAgIHRoaXMuZ2FtZUlEID0gZ2FtZUlEO1xuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgdGhpcy5tdWx0aXBsYXllciA9IG11bHRpcGxheWVyO1xuXG4gICAgICB0aGlzLnN1YnNjcmliZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgIHRoaXMucmVkdWNlciA9IENyZWF0ZUdhbWVSZWR1Y2VyKHtcbiAgICAgICAgZ2FtZTogZ2FtZSxcbiAgICAgICAgbnVtUGxheWVyczogbnVtUGxheWVycyxcbiAgICAgICAgbXVsdGlwbGF5ZXI6IG11bHRpcGxheWVyXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFpICE9PSB1bmRlZmluZWQgJiYgbXVsdGlwbGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYm90ID0gbmV3IGFpLmJvdCh7XG4gICAgICAgICAgZ2FtZTogZ2FtZSxcbiAgICAgICAgICBlbnVtZXJhdGU6IGFpLmVudW1lcmF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0ZXAgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICAgIHZhciBwbGF5ZXJJRCA9IHN0YXRlLmN0eC5hY3Rpb25QbGF5ZXJzWzBdO1xuXG4gICAgICAgICAgdmFyIF9yZWYyID0gYXdhaXQgYm90LnBsYXkoc3RhdGUsIHBsYXllcklEKSxcbiAgICAgICAgICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uLFxuICAgICAgICAgICAgICBtZXRhZGF0YSA9IF9yZWYyLm1ldGFkYXRhO1xuXG4gICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQubWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICAgICAgX3RoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlID0gbnVsbDtcblxuICAgICAgaWYgKG11bHRpcGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gSW5pdGlhbGl6ZUdhbWUoe1xuICAgICAgICAgIGdhbWU6IGdhbWUsXG4gICAgICAgICAgbnVtUGxheWVyczogbnVtUGxheWVyc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc3RvcmUuZGlzcGF0Y2gocmVzZXQoaW5pdGlhbFN0YXRlKSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVuZG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKHVuZG8oKSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlZG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKHJlZG8oKSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgIHRoaXMubG9nID0gW107XG4gICAgICAvKipcbiAgICAgICAqIE1pZGRsZXdhcmUgdGhhdCBtYW5hZ2VzIHRoZSBsb2cgb2JqZWN0LlxuICAgICAgICogUmVkdWNlcnMgZ2VuZXJhdGUgZGVsdGFsb2dzLCB3aGljaCBhcmUgbG9nIGV2ZW50c1xuICAgICAgICogdGhhdCBhcmUgdGhlIHJlc3VsdCBvZiBhcHBsaWNhdGlvbiBvZiBhIHNpbmdsZSBhY3Rpb24uXG4gICAgICAgKiBUaGUgbWFzdGVyIG1heSBhbHNvIHNlbmQgYmFjayBhIGRlbHRhbG9nIG9yIHRoZSBlbnRpcmVcbiAgICAgICAqIGxvZyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVxdWVzdC5cbiAgICAgICAqIFRoZSBtaWRkbGV3YXJlIGJlbG93IHRha2VzIGNhcmUgb2YgYWxsIHRoZXNlIGNhc2VzIHdoaWxlXG4gICAgICAgKiBtYW5hZ2luZyB0aGUgbG9nIG9iamVjdC5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgTG9nTWlkZGxld2FyZSA9IGZ1bmN0aW9uIExvZ01pZGRsZXdhcmUoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgTUFLRV9NT1ZFOlxuICAgICAgICAgICAgICBjYXNlIEdBTUVfRVZFTlQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhbG9nID0gc3RhdGUuZGVsdGFsb2c7XG4gICAgICAgICAgICAgICAgICBfdGhpcy5sb2cgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmxvZyksIF90b0NvbnN1bWFibGVBcnJheShkZWx0YWxvZykpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgUkVTRVQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3RoaXMubG9nID0gW107XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2FzZSBVUERBVEU6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFyIGlkID0gLTE7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sb2cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZCA9IF90aGlzLmxvZ1tfdGhpcy5sb2cubGVuZ3RoIC0gMV0uX3N0YXRlSUQ7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHZhciBfZGVsdGFsb2cgPSBhY3Rpb24uZGVsdGFsb2cgfHwgW107IC8vIEZpbHRlciBvdXQgYWN0aW9ucyB0aGF0IGFyZSBhbHJlYWR5IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBjdXJyZW50IGxvZy4gVGhpcyBtYXkgb2NjdXIgd2hlbiB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGNsaWVudCBhZGRzIGFuIGVudHJ5IHRvIHRoZSBsb2cgZm9sbG93ZWQgYnlcbiAgICAgICAgICAgICAgICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgbWFzdGVyIGhlcmUuXG5cblxuICAgICAgICAgICAgICAgICAgX2RlbHRhbG9nID0gX2RlbHRhbG9nLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5fc3RhdGVJRCA+IGlkO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBfdGhpcy5sb2cgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmxvZyksIF90b0NvbnN1bWFibGVBcnJheShfZGVsdGFsb2cpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYXNlIFNZTkM6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3RoaXMubG9nID0gYWN0aW9uLmxvZyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogTWlkZGxld2FyZSB0aGF0IGludGVyY2VwdHMgYWN0aW9ucyBhbmQgc2VuZHMgdGhlbSB0byB0aGUgbWFzdGVyLFxuICAgICAgICogd2hpY2gga2VlcHMgdGhlIGF1dGhvcml0YXRpdmUgdmVyc2lvbiBvZiB0aGUgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICB2YXIgVHJhbnNwb3J0TWlkZGxld2FyZSA9IGZ1bmN0aW9uIFRyYW5zcG9ydE1pZGRsZXdhcmUoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBiYXNlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5jbGllbnRPbmx5ICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0Lm9uQWN0aW9uKGJhc2VTdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogTWlkZGxld2FyZSB0aGF0IGludGVyY2VwdHMgYWN0aW9ucyBhbmQgaW52b2tlcyB0aGUgc3Vic2NyaXB0aW9uIGNhbGxiYWNrLlxuICAgICAgICovXG5cblxuICAgICAgdmFyIFN1YnNjcmlwdGlvbk1pZGRsZXdhcmUgPSBmdW5jdGlvbiBTdWJzY3JpcHRpb25NaWRkbGV3YXJlKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcblxuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlQ2FsbGJhY2soKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgaWYgKGVuaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5oYW5jZXIgPSByZWR1eC5jb21wb3NlKHJlZHV4LmFwcGx5TWlkZGxld2FyZShTdWJzY3JpcHRpb25NaWRkbGV3YXJlLCBUcmFuc3BvcnRNaWRkbGV3YXJlLCBMb2dNaWRkbGV3YXJlKSwgZW5oYW5jZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5oYW5jZXIgPSByZWR1eC5hcHBseU1pZGRsZXdhcmUoU3Vic2NyaXB0aW9uTWlkZGxld2FyZSwgVHJhbnNwb3J0TWlkZGxld2FyZSwgTG9nTWlkZGxld2FyZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RvcmUgPSByZWR1eC5jcmVhdGVTdG9yZSh0aGlzLnJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdGhpcy50cmFuc3BvcnQgPSB7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBvbkFjdGlvbjogZnVuY3Rpb24gb25BY3Rpb24oKSB7fSxcbiAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7fSxcbiAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gY29ubmVjdCgpIHt9LFxuICAgICAgICB1cGRhdGVHYW1lSUQ6IGZ1bmN0aW9uIHVwZGF0ZUdhbWVJRCgpIHt9LFxuICAgICAgICB1cGRhdGVQbGF5ZXJJRDogZnVuY3Rpb24gdXBkYXRlUGxheWVySUQoKSB7fVxuICAgICAgfTtcblxuICAgICAgaWYgKG11bHRpcGxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG11bHRpcGxheWVyID09PSB0cnVlKSB7XG4gICAgICAgICAgbXVsdGlwbGF5ZXIgPSB7XG4gICAgICAgICAgICBzZXJ2ZXI6ICcnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdWx0aXBsYXllci5sb2NhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChsb2NhbE1hc3Rlcl8gPT09IG51bGwgfHwgbG9jYWxNYXN0ZXJfLmdhbWUgIT09IGdhbWUpIHtcbiAgICAgICAgICAgIGxvY2FsTWFzdGVyXyA9IG5ldyBMb2NhbE1hc3RlcihnYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBMb2NhbCh7XG4gICAgICAgICAgICBtYXN0ZXI6IGxvY2FsTWFzdGVyXyxcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAgZ2FtZUlEOiBnYW1lSUQsXG4gICAgICAgICAgICBwbGF5ZXJJRDogcGxheWVySUQsXG4gICAgICAgICAgICBnYW1lTmFtZTogZ2FtZS5uYW1lLFxuICAgICAgICAgICAgbnVtUGxheWVyczogbnVtUGxheWVyc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG11bHRpcGxheWVyLnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgU29ja2V0SU8oe1xuICAgICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBnYW1lSUQ6IGdhbWVJRCxcbiAgICAgICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgICAgIGdhbWVOYW1lOiBnYW1lLm5hbWUsXG4gICAgICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzLFxuICAgICAgICAgICAgc2VydmVyOiBtdWx0aXBsYXllci5zZXJ2ZXIsXG4gICAgICAgICAgICBzb2NrZXRPcHRzOiBzb2NrZXRPcHRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXVsdGlwbGF5ZXIudHJhbnNwb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBtdWx0aXBsYXllci50cmFuc3BvcnQoe1xuICAgICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBnYW1lSUQ6IGdhbWVJRCxcbiAgICAgICAgICAgIHBsYXllcklEOiBwbGF5ZXJJRCxcbiAgICAgICAgICAgIGdhbWVOYW1lOiBnYW1lLm5hbWUsXG4gICAgICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3IoJ2ludmFsaWQgbXVsdGlwbGF5ZXIgc3BlYycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlRGlzcGF0Y2hlcnMoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoX0NsaWVudEltcGwsIFt7XG4gICAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgIHJldHVybiBmbihfdGhpczIuZ2V0U3RhdGUoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50cmFuc3BvcnQuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTdGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7IC8vIFRoaXMgaXMgdGhlIHN0YXRlIGJlZm9yZSBhIHN5bmMgd2l0aCB0aGUgZ2FtZSBtYXN0ZXIuXG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9IC8vIGlzQWN0aXZlLlxuXG5cbiAgICAgICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNhblBsYXllck1ha2VNb3ZlID0gdGhpcy5nYW1lLmZsb3cuY2FuUGxheWVyTWFrZU1vdmUoc3RhdGUuRywgc3RhdGUuY3R4LCB0aGlzLnBsYXllcklEKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsYXllciAmJiAhY2FuUGxheWVyTWFrZU1vdmUpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxheWVyICYmIHRoaXMucGxheWVySUQgIT09IG51bGwgJiYgdGhpcy5wbGF5ZXJJRCAhPT0gdW5kZWZpbmVkICYmICFjYW5QbGF5ZXJNYWtlTW92ZSkge1xuICAgICAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUuY3R4LmdhbWVvdmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IC8vIFNlY3JldHMgYXJlIG5vcm1hbGx5IHN0cmlwcGVkIG9uIHRoZSBzZXJ2ZXIsXG4gICAgICAgIC8vIGJ1dCB3ZSBhbHNvIHN0cmlwIHRoZW0gaGVyZSBzbyB0aGF0IGdhbWUgZGV2ZWxvcGVyc1xuICAgICAgICAvLyBjYW4gc2VlIHRoZWlyIGVmZmVjdHMgd2hpbGUgcHJvdG90eXBpbmcuXG5cblxuICAgICAgICB2YXIgRyA9IHRoaXMuZ2FtZS5wbGF5ZXJWaWV3KHN0YXRlLkcsIHN0YXRlLmN0eCwgdGhpcy5wbGF5ZXJJRCk7IC8vIENvbWJpbmUgaW50byByZXR1cm4gdmFsdWUuXG5cbiAgICAgICAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgICAgIEc6IEcsXG4gICAgICAgICAgbG9nOiB0aGlzLmxvZ1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaXNDb25uZWN0ZWQgPSB0aGlzLnRyYW5zcG9ydC5pc0Nvbm5lY3RlZDtcbiAgICAgICAgcmV0ID0gX29iamVjdFNwcmVhZCh7fSwgcmV0LCB7XG4gICAgICAgICAgaXNDb25uZWN0ZWQ6IGlzQ29ubmVjdGVkXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjcmVhdGVEaXNwYXRjaGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXJzKCkge1xuICAgICAgICB0aGlzLm1vdmVzID0gY3JlYXRlTW92ZURpc3BhdGNoZXJzKHRoaXMuZ2FtZS5tb3ZlTmFtZXMsIHRoaXMuc3RvcmUsIHRoaXMucGxheWVySUQsIHRoaXMuY3JlZGVudGlhbHMsIHRoaXMubXVsdGlwbGF5ZXIpO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcnModGhpcy5nYW1lLmZsb3cuZW5hYmxlZEV2ZW50TmFtZXMsIHRoaXMuc3RvcmUsIHRoaXMucGxheWVySUQsIHRoaXMuY3JlZGVudGlhbHMsIHRoaXMubXVsdGlwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVQbGF5ZXJJRFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcklEKHBsYXllcklEKSB7XG4gICAgICAgIHRoaXMucGxheWVySUQgPSBwbGF5ZXJJRDtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwYXRjaGVycygpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC51cGRhdGVQbGF5ZXJJRChwbGF5ZXJJRCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUdhbWVJRFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUdhbWVJRChnYW1lSUQpIHtcbiAgICAgICAgdGhpcy5nYW1lSUQgPSBnYW1lSUQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRGlzcGF0Y2hlcnMoKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQudXBkYXRlR2FtZUlEKGdhbWVJRCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUNyZWRlbnRpYWxzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB0aGlzLmNyZWF0ZURpc3BhdGNoZXJzKCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIF9DbGllbnRJbXBsO1xuICB9KCk7XG4gIC8qKlxuICAgKiBDbGllbnRcbiAgICpcbiAgICogYm9hcmRnYW1lLmlvIEpTIGNsaWVudC5cbiAgICpcbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGdhbWUgLSBUaGUgcmV0dXJuIHZhbHVlIG9mIGBHYW1lYC5cbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IG51bVBsYXllcnMgLSBUaGUgbnVtYmVyIG9mIHBsYXllcnMuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBtdWx0aXBsYXllciAtIFNldCB0byB0cnVlIG9yIHsgc2VydmVyOiAnPGhvc3Q+Ojxwb3J0PicgfVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBtYWtlIGEgbXVsdGlwbGF5ZXIgY2xpZW50LiBUaGUgc2Vjb25kXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bnRheCBzcGVjaWZpZXMgYSBub24tZGVmYXVsdCBzb2NrZXQgc2VydmVyLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gc29ja2V0T3B0cyAtIE9wdGlvbnMgdG8gcGFzcyB0byBzb2NrZXQuaW8uXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBnYW1lSUQgLSBUaGUgZ2FtZUlEIHRoYXQgeW91IHdhbnQgdG8gY29ubmVjdCB0by5cbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IHBsYXllcklEIC0gVGhlIHBsYXllcklEIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNsaWVudC5cbiAgICogQHBhcmFtIHsuLi5zdHJpbmd9IGNyZWRlbnRpYWxzIC0gVGhlIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNsaWVudC5cbiAgICpcbiAgICogUmV0dXJuczpcbiAgICogICBBIEpTIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIEFQSSB0byBpbnRlcmFjdCB3aXRoIHRoZVxuICAgKiAgIGdhbWUgYnkgZGlzcGF0Y2hpbmcgbW92ZXMgYW5kIGV2ZW50cy5cbiAgICovXG5cblxuICBmdW5jdGlvbiBDbGllbnQob3B0cykge1xuICAgIHJldHVybiBuZXcgX0NsaWVudEltcGwob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xpZW50XG4gICAqXG4gICAqIGJvYXJkZ2FtZS5pbyBSZWFjdCBjbGllbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBnYW1lIC0gVGhlIHJldHVybiB2YWx1ZSBvZiBgR2FtZWAuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBudW1QbGF5ZXJzIC0gVGhlIG51bWJlciBvZiBwbGF5ZXJzLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gYm9hcmQgLSBUaGUgUmVhY3QgY29tcG9uZW50IGZvciB0aGUgZ2FtZS5cbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGxvYWRpbmcgLSAob3B0aW9uYWwpIFRoZSBSZWFjdCBjb21wb25lbnQgZm9yIHRoZSBsb2FkaW5nIHN0YXRlLlxuICAgKiBAcGFyYW0gey4uLm9iamVjdH0gbXVsdGlwbGF5ZXIgLSBTZXQgdG8gdHJ1ZSBvciB7IHNlcnZlcjogJzxob3N0Pjo8cG9ydD4nIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gbWFrZSBhIG11bHRpcGxheWVyIGNsaWVudC4gVGhlIHNlY29uZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW50YXggc3BlY2lmaWVzIGEgbm9uLWRlZmF1bHQgc29ja2V0IHNlcnZlci5cbiAgICogQHBhcmFtIHsuLi5vYmplY3R9IGRlYnVnIC0gRW5hYmxlcyB0aGUgRGVidWcgVUkuXG4gICAqIEBwYXJhbSB7Li4ub2JqZWN0fSBlbmhhbmNlciAtIE9wdGlvbmFsIGVuaGFuY2VyIHRvIHNlbmQgdG8gdGhlIFJlZHV4IHN0b3JlXG4gICAqXG4gICAqIFJldHVybnM6XG4gICAqICAgQSBSZWFjdCBjb21wb25lbnQgdGhhdCB3cmFwcyBib2FyZCBhbmQgcHJvdmlkZXMgYW5cbiAgICogICBBUEkgdGhyb3VnaCBwcm9wcyBmb3IgaXQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZnJhbWV3b3JrXG4gICAqICAgYW5kIGRpc3BhdGNoIGFjdGlvbnMgc3VjaCBhcyBNQUtFX01PVkUsIEdBTUVfRVZFTlQsIFJFU0VULFxuICAgKiAgIFVORE8gYW5kIFJFRE8uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENsaWVudCQxKG9wdHMpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHZhciBnYW1lID0gb3B0cy5nYW1lLFxuICAgICAgICBudW1QbGF5ZXJzID0gb3B0cy5udW1QbGF5ZXJzLFxuICAgICAgICBsb2FkaW5nID0gb3B0cy5sb2FkaW5nLFxuICAgICAgICBib2FyZCA9IG9wdHMuYm9hcmQsXG4gICAgICAgIG11bHRpcGxheWVyID0gb3B0cy5tdWx0aXBsYXllcixcbiAgICAgICAgYWkgPSBvcHRzLmFpLFxuICAgICAgICBkZWJ1ZyA9IG9wdHMuZGVidWcsXG4gICAgICAgIGVuaGFuY2VyID0gb3B0cy5lbmhhbmNlcjsgLy8gQ29tcG9uZW50IHRoYXQgaXMgZGlzcGxheWVkIGJlZm9yZSB0aGUgY2xpZW50IGhhcyBzeW5jZWRcbiAgICAvLyB3aXRoIHRoZSBnYW1lIG1hc3Rlci5cblxuICAgIGlmIChsb2FkaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBMb2FkaW5nID0gZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJiZ2lvLWxvYWRpbmdcIlxuICAgICAgICB9LCBcImNvbm5lY3RpbmcuLi5cIik7XG4gICAgICB9O1xuXG4gICAgICBsb2FkaW5nID0gTG9hZGluZztcbiAgICB9XG4gICAgLypcbiAgICAgKiBXcmFwcGVkQm9hcmRcbiAgICAgKlxuICAgICAqIFRoZSBtYWluIFJlYWN0IGNvbXBvbmVudCB0aGF0IHdyYXBzIHRoZSBwYXNzZWQgaW5cbiAgICAgKiBib2FyZCBjb21wb25lbnQgYW5kIGFkZHMgdGhlIEFQSSB0byBpdHMgcHJvcHMuXG4gICAgICovXG5cblxuICAgIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoV3JhcHBlZEJvYXJkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gV3JhcHBlZEJvYXJkKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JhcHBlZEJvYXJkKTtcblxuICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihXcmFwcGVkQm9hcmQpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic3RhdGVcIiwge1xuICAgICAgICAgIGdhbWVTdGF0ZU92ZXJyaWRlOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJ1cGRhdGVHYW1lSURcIiwgZnVuY3Rpb24gKGdhbWVJRCkge1xuICAgICAgICAgIF90aGlzLmNsaWVudC51cGRhdGVHYW1lSUQoZ2FtZUlEKTtcblxuICAgICAgICAgIF90aGlzLmdhbWVJRCA9IGdhbWVJRDtcblxuICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJ1cGRhdGVQbGF5ZXJJRFwiLCBmdW5jdGlvbiAocGxheWVySUQpIHtcbiAgICAgICAgICBfdGhpcy5jbGllbnQudXBkYXRlUGxheWVySUQocGxheWVySUQpO1xuXG4gICAgICAgICAgX3RoaXMucGxheWVySUQgPSBwbGF5ZXJJRDtcblxuICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJ1cGRhdGVDcmVkZW50aWFsc1wiLCBmdW5jdGlvbiAoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICBfdGhpcy5jbGllbnQudXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpO1xuXG4gICAgICAgICAgX3RoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblxuICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvdmVycmlkZUdhbWVTdGF0ZVwiLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lU3RhdGVPdmVycmlkZTogc3RhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY2xpZW50ID0gQ2xpZW50KHtcbiAgICAgICAgICBnYW1lOiBnYW1lLFxuICAgICAgICAgIGFpOiBhaSxcbiAgICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzLFxuICAgICAgICAgIG11bHRpcGxheWVyOiBtdWx0aXBsYXllcixcbiAgICAgICAgICBnYW1lSUQ6IHByb3BzLmdhbWVJRCxcbiAgICAgICAgICBwbGF5ZXJJRDogcHJvcHMucGxheWVySUQsXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHByb3BzLmNyZWRlbnRpYWxzLFxuICAgICAgICAgIGVuaGFuY2VyOiBlbmhhbmNlclxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuZ2FtZUlEID0gcHJvcHMuZ2FtZUlEO1xuICAgICAgICBfdGhpcy5wbGF5ZXJJRCA9IHByb3BzLnBsYXllcklEO1xuICAgICAgICBfdGhpcy5jcmVkZW50aWFscyA9IHByb3BzLmNyZWRlbnRpYWxzO1xuXG4gICAgICAgIF90aGlzLmNsaWVudC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhXcmFwcGVkQm9hcmQsIFt7XG4gICAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5nYW1lSUQgIT0gcHJldlByb3BzLmdhbWVJRCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lSUQodGhpcy5wcm9wcy5nYW1lSUQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBsYXllcklEICE9IHByZXZQcm9wcy5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJJRCh0aGlzLnByb3BzLnBsYXllcklEKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcmVkZW50aWFscyAhPSBwcmV2UHJvcHMuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3JlZGVudGlhbHModGhpcy5wcm9wcy5jcmVkZW50aWFscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5jbGllbnQuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgX2JvYXJkID0gbnVsbDtcbiAgICAgICAgICB2YXIgX2RlYnVnID0gbnVsbDtcbiAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmNsaWVudC5nZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgZGVidWdQcm9wID0gX3RoaXMkcHJvcHMuZGVidWcsXG4gICAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMsIFtcImRlYnVnXCJdKTtcblxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmdhbWVTdGF0ZU92ZXJyaWRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0YXRlLCB0aGlzLnN0YXRlLmdhbWVTdGF0ZU92ZXJyaWRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxvYWRpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChib2FyZCkge1xuICAgICAgICAgICAgX2JvYXJkID0gUmVhY3QuY3JlYXRlRWxlbWVudChib2FyZCwgX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHJlc3QsIHtcbiAgICAgICAgICAgICAgaXNNdWx0aXBsYXllcjogbXVsdGlwbGF5ZXIgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbW92ZXM6IHRoaXMuY2xpZW50Lm1vdmVzLFxuICAgICAgICAgICAgICBldmVudHM6IHRoaXMuY2xpZW50LmV2ZW50cyxcbiAgICAgICAgICAgICAgZ2FtZUlEOiB0aGlzLmdhbWVJRCxcbiAgICAgICAgICAgICAgcGxheWVySUQ6IHRoaXMucGxheWVySUQsXG4gICAgICAgICAgICAgIHN0ZXA6IHRoaXMuY2xpZW50LnN0ZXAsXG4gICAgICAgICAgICAgIHJlc2V0OiB0aGlzLmNsaWVudC5yZXNldCxcbiAgICAgICAgICAgICAgdW5kbzogdGhpcy5jbGllbnQudW5kbyxcbiAgICAgICAgICAgICAgcmVkbzogdGhpcy5jbGllbnQucmVkb1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWJ1ZyAhPT0gZmFsc2UgJiYgZGVidWdQcm9wKSB7XG4gICAgICAgICAgICB2YXIgc2hvd0dhbWVJbmZvID0gX3R5cGVvZihkZWJ1ZykgPT09ICdvYmplY3QnICYmIGRlYnVnLnNob3dHYW1lSW5mbztcbiAgICAgICAgICAgIHZhciBkb2NrQ29udHJvbHMgPSBfdHlwZW9mKGRlYnVnKSA9PT0gJ29iamVjdCcgJiYgZGVidWcuZG9ja0NvbnRyb2xzO1xuICAgICAgICAgICAgX2RlYnVnID0gUmVhY3QuY3JlYXRlRWxlbWVudChEZWJ1Zywge1xuICAgICAgICAgICAgICBnYW1lc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICByZWR1Y2VyOiB0aGlzLmNsaWVudC5yZWR1Y2VyLFxuICAgICAgICAgICAgICBzdG9yZTogdGhpcy5jbGllbnQuc3RvcmUsXG4gICAgICAgICAgICAgIGlzTXVsdGlwbGF5ZXI6IG11bHRpcGxheWVyICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG1vdmVzOiB0aGlzLmNsaWVudC5tb3ZlcyxcbiAgICAgICAgICAgICAgZXZlbnRzOiB0aGlzLmNsaWVudC5ldmVudHMsXG4gICAgICAgICAgICAgIGdhbWVJRDogdGhpcy5nYW1lSUQsXG4gICAgICAgICAgICAgIHBsYXllcklEOiB0aGlzLnBsYXllcklELFxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogdGhpcy5jcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgc3RlcDogdGhpcy5jbGllbnQuc3RlcCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHRoaXMuY2xpZW50LnJlc2V0LFxuICAgICAgICAgICAgICB1bmRvOiB0aGlzLmNsaWVudC51bmRvLFxuICAgICAgICAgICAgICByZWRvOiB0aGlzLmNsaWVudC5yZWRvLFxuICAgICAgICAgICAgICB2aXN1YWxpemVBSTogYWkgJiYgYWkudmlzdWFsaXplLFxuICAgICAgICAgICAgICBvdmVycmlkZUdhbWVTdGF0ZTogdGhpcy5vdmVycmlkZUdhbWVTdGF0ZSxcbiAgICAgICAgICAgICAgdXBkYXRlR2FtZUlEOiB0aGlzLnVwZGF0ZUdhbWVJRCxcbiAgICAgICAgICAgICAgdXBkYXRlUGxheWVySUQ6IHRoaXMudXBkYXRlUGxheWVySUQsXG4gICAgICAgICAgICAgIHVwZGF0ZUNyZWRlbnRpYWxzOiB0aGlzLnVwZGF0ZUNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICBzaG93R2FtZUluZm86IHNob3dHYW1lSW5mbyxcbiAgICAgICAgICAgICAgZG9ja0NvbnRyb2xzOiBkb2NrQ29udHJvbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJiZ2lvLWNsaWVudFwiXG4gICAgICAgICAgfSwgX2RlYnVnLCBfYm9hcmQpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBXcmFwcGVkQm9hcmQ7XG4gICAgfShSZWFjdC5Db21wb25lbnQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcInByb3BUeXBlc1wiLCB7XG4gICAgICAvLyBUaGUgSUQgb2YgYSBnYW1lIHRvIGNvbm5lY3QgdG8uXG4gICAgICAvLyBPbmx5IHJlbGV2YW50IGluIG11bHRpcGxheWVyLlxuICAgICAgZ2FtZUlEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgLy8gVGhlIElEIG9mIHRoZSBwbGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY2xpZW50LlxuICAgICAgLy8gT25seSByZWxldmFudCBpbiBtdWx0aXBsYXllci5cbiAgICAgIHBsYXllcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgLy8gVGhpcyBjbGllbnQncyBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscy5cbiAgICAgIC8vIE9ubHkgcmVsZXZhbnQgaW4gbXVsdGlwbGF5ZXIuXG4gICAgICBjcmVkZW50aWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIC8vIEVuYWJsZSAvIGRpc2FibGUgdGhlIERlYnVnIFVJLlxuICAgICAgZGVidWc6IFByb3BUeXBlcy5hbnlcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgICAgZ2FtZUlEOiAnZGVmYXVsdCcsXG4gICAgICBwbGF5ZXJJRDogbnVsbCxcbiAgICAgIGNyZWRlbnRpYWxzOiBudWxsLFxuICAgICAgZGVidWc6IHRydWVcbiAgICB9KSwgX3RlbXA7XG4gIH1cblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIF9Mb2JieUNvbm5lY3Rpb25JbXBsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gX0xvYmJ5Q29ubmVjdGlvbkltcGwoX3JlZikge1xuICAgICAgdmFyIHNlcnZlciA9IF9yZWYuc2VydmVyLFxuICAgICAgICAgIGdhbWVDb21wb25lbnRzID0gX3JlZi5nYW1lQ29tcG9uZW50cyxcbiAgICAgICAgICBwbGF5ZXJOYW1lID0gX3JlZi5wbGF5ZXJOYW1lLFxuICAgICAgICAgIHBsYXllckNyZWRlbnRpYWxzID0gX3JlZi5wbGF5ZXJDcmVkZW50aWFscztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9Mb2JieUNvbm5lY3Rpb25JbXBsKTtcblxuICAgICAgdGhpcy5nYW1lQ29tcG9uZW50cyA9IGdhbWVDb21wb25lbnRzO1xuICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gcGxheWVyTmFtZSB8fCAnVmlzaXRvcic7XG4gICAgICB0aGlzLnBsYXllckNyZWRlbnRpYWxzID0gcGxheWVyQ3JlZGVudGlhbHM7XG4gICAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICAgIHRoaXMucm9vbXMgPSBbXTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoX0xvYmJ5Q29ubmVjdGlvbkltcGwsIFt7XG4gICAgICBrZXk6IFwiX2Jhc2VVcmxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuc2VydmVyIHx8ICcnLCBcIi9nYW1lc1wiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVmcmVzaFwiLFxuICAgICAgdmFsdWU6IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5yb29tcy5sZW5ndGggPSAwO1xuICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2godGhpcy5fYmFzZVVybCgpKTtcblxuICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgc3RhdHVzICcgKyByZXNwLnN0YXR1cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGpzb24gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGpzb25bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgIHZhciBnYW1lTmFtZSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuX2dldEdhbWVDb21wb25lbnRzKGdhbWVOYW1lKSkgY29udGludWU7XG4gICAgICAgICAgICAgIHZhciBnYW1lUmVzcCA9IGF3YWl0IGZldGNoKHRoaXMuX2Jhc2VVcmwoKSArICcvJyArIGdhbWVOYW1lKTtcbiAgICAgICAgICAgICAgdmFyIGdhbWVKc29uID0gYXdhaXQgZ2FtZVJlc3AuanNvbigpO1xuICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gZ2FtZUpzb24ucm9vbXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpbnN0ID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgaW5zdC5nYW1lTmFtZSA9IGdhbWVOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnJvb21zID0gdGhpcy5yb29tcy5jb25jYXQoZ2FtZUpzb24ucm9vbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHJldHJpZXZlIGxpc3Qgb2YgZ2FtZXMgKCcgKyBlcnJvciArICcpJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2dldEdhbWVJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRHYW1lSW5zdGFuY2UoZ2FtZUlEKSB7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSB0aGlzLnJvb21zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgaW5zdCA9IF9zdGVwMy52YWx1ZTtcbiAgICAgICAgICAgIGlmIChpbnN0WydnYW1lSUQnXSA9PT0gZ2FtZUlEKSByZXR1cm4gaW5zdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXRHYW1lQ29tcG9uZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRHYW1lQ29tcG9uZW50cyhnYW1lTmFtZSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gdGhpcy5nYW1lQ29tcG9uZW50c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGNvbXAgPSBfc3RlcDQudmFsdWU7XG4gICAgICAgICAgICBpZiAoY29tcC5nYW1lLm5hbWUgPT09IGdhbWVOYW1lKSByZXR1cm4gY29tcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9maW5kUGxheWVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gdGhpcy5yb29tc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNTsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IChfc3RlcDUgPSBfaXRlcmF0b3I1Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGluc3QgPSBfc3RlcDUudmFsdWU7XG4gICAgICAgICAgICBpZiAoaW5zdC5wbGF5ZXJzLnNvbWUoZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICAgICAgICByZXR1cm4gcGxheWVyLm5hbWUgPT09IHBsYXllck5hbWU7XG4gICAgICAgICAgICB9KSkgcmV0dXJuIGluc3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yNSA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSAmJiBfaXRlcmF0b3I1LnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjUucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJqb2luXCIsXG4gICAgICB2YWx1ZTogYXN5bmMgZnVuY3Rpb24gam9pbihnYW1lTmFtZSwgZ2FtZUlELCBwbGF5ZXJJRCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbnN0ID0gdGhpcy5fZmluZFBsYXllcih0aGlzLnBsYXllck5hbWUpO1xuXG4gICAgICAgICAgaWYgKGluc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGxheWVyIGhhcyBhbHJlYWR5IGpvaW5lZCAnICsgaW5zdC5nYW1lSUQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluc3QgPSB0aGlzLl9nZXRHYW1lSW5zdGFuY2UoZ2FtZUlEKTtcblxuICAgICAgICAgIGlmICghaW5zdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnYW1lIGluc3RhbmNlICcgKyBnYW1lSUQgKyAnIG5vdCBmb3VuZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2godGhpcy5fYmFzZVVybCgpICsgJy8nICsgZ2FtZU5hbWUgKyAnLycgKyBnYW1lSUQgKyAnL2pvaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgcGxheWVySUQ6IHBsYXllcklELFxuICAgICAgICAgICAgICBwbGF5ZXJOYW1lOiB0aGlzLnBsYXllck5hbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcignSFRUUCBzdGF0dXMgJyArIHJlc3Auc3RhdHVzKTtcbiAgICAgICAgICB2YXIganNvbiA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICAgIGluc3QucGxheWVyc1tOdW1iZXIucGFyc2VJbnQocGxheWVySUQpXS5uYW1lID0gdGhpcy5wbGF5ZXJOYW1lO1xuICAgICAgICAgIHRoaXMucGxheWVyQ3JlZGVudGlhbHMgPSBqc29uLnBsYXllckNyZWRlbnRpYWxzO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIGpvaW4gcm9vbSAnICsgZ2FtZUlEICsgJyAoJyArIGVycm9yICsgJyknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsZWF2ZVwiLFxuICAgICAgdmFsdWU6IGFzeW5jIGZ1bmN0aW9uIGxlYXZlKGdhbWVOYW1lLCBnYW1lSUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5zdCA9IHRoaXMuX2dldEdhbWVJbnN0YW5jZShnYW1lSUQpO1xuXG4gICAgICAgICAgaWYgKCFpbnN0KSB0aHJvdyBuZXcgRXJyb3IoJ2dhbWUgaW5zdGFuY2Ugbm90IGZvdW5kJyk7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yNiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gaW5zdC5wbGF5ZXJzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA2OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gKF9zdGVwNiA9IF9pdGVyYXRvcjYubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlKSB7XG4gICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBfc3RlcDYudmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSB0aGlzLnBsYXllck5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzcCA9IGF3YWl0IGZldGNoKHRoaXMuX2Jhc2VVcmwoKSArICcvJyArIGdhbWVOYW1lICsgJy8nICsgZ2FtZUlEICsgJy9sZWF2ZScsIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJRDogcGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogdGhpcy5wbGF5ZXJDcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgc3RhdHVzICcgKyByZXNwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsYXllci5uYW1lO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBsYXllckNyZWRlbnRpYWxzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gdHJ1ZTtcbiAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNiA9IGVycjtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiAmJiBfaXRlcmF0b3I2LnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yNi5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGxheWVyIG5vdCBmb3VuZCBpbiByb29tJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gbGVhdmUgcm9vbSAnICsgZ2FtZUlEICsgJyAoJyArIGVycm9yICsgJyknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgICB2YWx1ZTogYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLl9maW5kUGxheWVyKHRoaXMucGxheWVyTmFtZSk7XG5cbiAgICAgICAgaWYgKGluc3QpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxlYXZlKGluc3QuZ2FtZU5hbWUsIGluc3QuZ2FtZUlEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9vbXMgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gJ1Zpc2l0b3InO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjcmVhdGVcIixcbiAgICAgIHZhbHVlOiBhc3luYyBmdW5jdGlvbiBjcmVhdGUoZ2FtZU5hbWUsIG51bVBsYXllcnMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgY29tcCA9IHRoaXMuX2dldEdhbWVDb21wb25lbnRzKGdhbWVOYW1lKTtcblxuICAgICAgICAgIGlmICghY29tcCkgdGhyb3cgbmV3IEVycm9yKCdnYW1lIG5vdCBmb3VuZCcpO1xuICAgICAgICAgIGlmIChudW1QbGF5ZXJzIDwgY29tcC5nYW1lLm1pblBsYXllcnMgfHwgbnVtUGxheWVycyA+IGNvbXAuZ2FtZS5tYXhQbGF5ZXJzKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbnVtYmVyIG9mIHBsYXllcnMgJyArIG51bVBsYXllcnMpO1xuICAgICAgICAgIHZhciByZXNwID0gYXdhaXQgZmV0Y2godGhpcy5fYmFzZVVybCgpICsgJy8nICsgZ2FtZU5hbWUgKyAnL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBudW1QbGF5ZXJzOiBudW1QbGF5ZXJzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgc3RhdHVzICcgKyByZXNwLnN0YXR1cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gY3JlYXRlIHJvb20gZm9yICcgKyBnYW1lTmFtZSArICcgKCcgKyBlcnJvciArICcpJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gX0xvYmJ5Q29ubmVjdGlvbkltcGw7XG4gIH0oKTtcbiAgLyoqXG4gICAqIExvYmJ5Q29ubmVjdGlvblxuICAgKlxuICAgKiBMb2JieSBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgc2VydmVyIC0gJzxob3N0Pjo8cG9ydD4nIG9mIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9ICAgIGdhbWVDb21wb25lbnRzIC0gQSBtYXAgb2YgQm9hcmQgYW5kIEdhbWUgb2JqZWN0cyBmb3IgdGhlIHN1cHBvcnRlZCBnYW1lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgcGxheWVyTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIHBsYXllckNyZWRlbnRpYWxzIC0gVGhlIGNyZWRlbnRpYWxzIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBwbGF5ZXIsIGlmIGFueS5cbiAgICpcbiAgICogUmV0dXJuczpcbiAgICogICBBIEpTIG9iamVjdCB0aGF0IHN5bmNocm9uaXplcyB0aGUgbGlzdCBvZiBydW5uaW5nIGdhbWUgaW5zdGFuY2VzIHdpdGggdGhlIHNlcnZlciBhbmQgcHJvdmlkZXMgYW4gQVBJIHRvIGNyZWF0ZS9qb2luL3N0YXJ0IGluc3RhbmNlcy5cbiAgICovXG5cblxuICBmdW5jdGlvbiBMb2JieUNvbm5lY3Rpb24ob3B0cykge1xuICAgIHJldHVybiBuZXcgX0xvYmJ5Q29ubmVjdGlvbkltcGwob3B0cyk7XG4gIH1cblxuICB2YXIgTG9iYnlMb2dpbkZvcm0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExvYmJ5TG9naW5Gb3JtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIExvYmJ5TG9naW5Gb3JtKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvYmJ5TG9naW5Gb3JtKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoTG9iYnlMb2dpbkZvcm0pKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHtcbiAgICAgICAgcGxheWVyTmFtZTogX3RoaXMucHJvcHMucGxheWVyTmFtZSxcbiAgICAgICAgbmFtZUVycm9yTXNnOiAnJ1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkNsaWNrRW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUucGxheWVyTmFtZSA9PT0gJycpIHJldHVybjtcblxuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKF90aGlzLnN0YXRlLnBsYXllck5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbktleVByZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgX3RoaXMub25DbGlja0VudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25DaGFuZ2VQbGF5ZXJOYW1lXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBsYXllck5hbWU6IG5hbWUsXG4gICAgICAgICAgbmFtZUVycm9yTXNnOiBuYW1lLmxlbmd0aCA+IDAgPyAnJyA6ICdlbXB0eSBwbGF5ZXIgbmFtZSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2JieUxvZ2luRm9ybSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGhhc2UtdGl0bGVcIlxuICAgICAgICB9LCBcIkNob29zZSBhIHBsYXllciBuYW1lOlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5wbGF5ZXJOYW1lLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZSxcbiAgICAgICAgICBvbktleVByZXNzOiB0aGlzLm9uS2V5UHJlc3NcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYnV0dG9uc1wiXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJidXR0b25zXCIsXG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrRW50ZXJcbiAgICAgICAgfSwgXCJFbnRlclwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvci1tc2dcIlxuICAgICAgICB9LCB0aGlzLnN0YXRlLm5hbWVFcnJvck1zZywgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExvYmJ5TG9naW5Gb3JtO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KExvYmJ5TG9naW5Gb3JtLCBcInByb3BUeXBlc1wiLCB7XG4gICAgcGxheWVyTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShMb2JieUxvZ2luRm9ybSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIHBsYXllck5hbWU6ICcnXG4gIH0pO1xuXG4gIHZhciBMb2JieVJvb21JbnN0YW5jZSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTG9iYnlSb29tSW5zdGFuY2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTG9iYnlSb29tSW5zdGFuY2UoKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9iYnlSb29tSW5zdGFuY2UpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihMb2JieVJvb21JbnN0YW5jZSkpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2NyZWF0ZVNlYXRcIiwgZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICByZXR1cm4gcGxheWVyLm5hbWUgfHwgJ1tmcmVlXSc7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9jcmVhdGVJbnN0YW5jZUJ1dHRvbnNcIiwgZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgdmFyIHBsYXllclNlYXQgPSBpbnN0LnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHBsYXllci5uYW1lID09PSBfdGhpcy5wcm9wcy5wbGF5ZXJOYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZyZWVTZWF0ID0gaW5zdC5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICAgIHJldHVybiAhcGxheWVyLm5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwbGF5ZXJTZWF0ICYmIGZyZWVTZWF0KSB7XG4gICAgICAgICAgLy8gYWxyZWFkeSBzZWF0ZWQ6IHdhaXRpbmcgZm9yIGdhbWUgdG8gc3RhcnRcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25DbGlja0xlYXZlKGluc3QuZ2FtZU5hbWUsIGluc3QuZ2FtZUlEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBcIkxlYXZlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyZWVTZWF0KSB7XG4gICAgICAgICAgLy8gYXQgbGVhc3QgMSBzZWF0IGlzIGF2YWlsYWJsZVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkNsaWNrSm9pbihpbnN0LmdhbWVOYW1lLCBpbnN0LmdhbWVJRCwgJycgKyBmcmVlU2VhdC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgXCJKb2luXCIpO1xuICAgICAgICB9IC8vIHJvb20gaXMgZnVsbFxuXG5cbiAgICAgICAgaWYgKHBsYXllclNlYXQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25DbGlja1BsYXkoaW5zdC5nYW1lTmFtZSwge1xuICAgICAgICAgICAgICAgIGdhbWVJRDogaW5zdC5nYW1lSUQsXG4gICAgICAgICAgICAgICAgcGxheWVySUQ6ICcnICsgcGxheWVyU2VhdC5pZCxcbiAgICAgICAgICAgICAgICBudW1QbGF5ZXJzOiBpbnN0LnBsYXllcnMubGVuZ3RoXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIFwiUGxheVwiKTtcbiAgICAgICAgfSAvLyBhbGxvdyBzcGVjdGF0aW5nXG5cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkNsaWNrUGxheShpbnN0LmdhbWVOYW1lLCB7XG4gICAgICAgICAgICAgIGdhbWVJRDogaW5zdC5nYW1lSUQsXG4gICAgICAgICAgICAgIG51bVBsYXllcnM6IGluc3QucGxheWVycy5sZW5ndGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXCJTcGVjdGF0ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExvYmJ5Um9vbUluc3RhbmNlLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJvb20gPSB0aGlzLnByb3BzLnJvb207XG4gICAgICAgIHZhciBzdGF0dXMgPSAnT1BFTic7XG5cbiAgICAgICAgaWYgKCFyb29tLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgICAgcmV0dXJuICFwbGF5ZXIubmFtZTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnUlVOTklORyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHtcbiAgICAgICAgICBrZXk6ICdsaW5lLScgKyByb29tLmdhbWVJRFxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuICAgICAgICAgIGtleTogJ2NlbGwtbmFtZS0nICsgcm9vbS5nYW1lSURcbiAgICAgICAgfSwgcm9vbS5nYW1lTmFtZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG4gICAgICAgICAga2V5OiAnY2VsbC1zdGF0dXMtJyArIHJvb20uZ2FtZUlEXG4gICAgICAgIH0sIHN0YXR1cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG4gICAgICAgICAga2V5OiAnY2VsbC1zZWF0cy0nICsgcm9vbS5nYW1lSURcbiAgICAgICAgfSwgcm9vbS5wbGF5ZXJzLm1hcCh0aGlzLl9jcmVhdGVTZWF0KS5qb2luKCcsICcpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHtcbiAgICAgICAgICBrZXk6ICdjZWxsLWJ1dHRvbnMtJyArIHJvb20uZ2FtZUlEXG4gICAgICAgIH0sIHRoaXMuX2NyZWF0ZUluc3RhbmNlQnV0dG9ucyhyb29tKSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMb2JieVJvb21JbnN0YW5jZTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShMb2JieVJvb21JbnN0YW5jZSwgXCJwcm9wVHlwZXNcIiwge1xuICAgIHJvb206IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBnYW1lTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ2FtZUlEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIHBsYXllck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrSm9pbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrTGVhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbGlja1BsYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSk7XG5cbiAgdmFyIExvYmJ5Q3JlYXRlUm9vbUZvcm0gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExvYmJ5Q3JlYXRlUm9vbUZvcm0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTG9iYnlDcmVhdGVSb29tRm9ybShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9iYnlDcmVhdGVSb29tRm9ybSk7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKExvYmJ5Q3JlYXRlUm9vbUZvcm0pLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICAgIC8qIGZpeCBtaW4gYW5kIG1heCBudW1iZXIgb2YgcGxheWVycyAqL1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic3RhdGVcIiwge1xuICAgICAgICBzZWxlY3RlZEdhbWU6IDAsXG4gICAgICAgIG51bVBsYXllcnM6IDJcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2NyZWF0ZUdhbWVOYW1lT3B0aW9uXCIsIGZ1bmN0aW9uIChnYW1lLCBpZHgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwge1xuICAgICAgICAgIGtleTogJ25hbWUtb3B0aW9uLScgKyBpZHgsXG4gICAgICAgICAgdmFsdWU6IGlkeFxuICAgICAgICB9LCBnYW1lLmdhbWUubmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9jcmVhdGVOdW1QbGF5ZXJzT3B0aW9uXCIsIGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwge1xuICAgICAgICAgIGtleTogJ251bS1vcHRpb24tJyArIGlkeCxcbiAgICAgICAgICB2YWx1ZTogaWR4XG4gICAgICAgIH0sIGlkeCk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9jcmVhdGVOdW1QbGF5ZXJzUmFuZ2VcIiwgZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkoZ2FtZS5tYXhQbGF5ZXJzICsgMSkua2V5cygpKS5zbGljZShnYW1lLm1pblBsYXllcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkNoYW5nZU51bVBsYXllcnNcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBudW1QbGF5ZXJzOiBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25DaGFuZ2VTZWxlY3RlZEdhbWVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpZHggPSBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRHYW1lOiBpZHgsXG4gICAgICAgICAgbnVtUGxheWVyczogX3RoaXMucHJvcHMuZ2FtZXNbaWR4XS5nYW1lLm1pblBsYXllcnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uQ2xpY2tDcmVhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5jcmVhdGVHYW1lKF90aGlzLnByb3BzLmdhbWVzW190aGlzLnN0YXRlLnNlbGVjdGVkR2FtZV0uZ2FtZS5uYW1lLCBfdGhpcy5zdGF0ZS5udW1QbGF5ZXJzKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcHJvcHMuZ2FtZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGdhbWUgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgZ2FtZV9kZXRhaWxzID0gZ2FtZS5nYW1lO1xuXG4gICAgICAgICAgaWYgKCFnYW1lX2RldGFpbHMubWluUGxheWVycykge1xuICAgICAgICAgICAgZ2FtZV9kZXRhaWxzLm1pblBsYXllcnMgPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2FtZV9kZXRhaWxzLm1heFBsYXllcnMpIHtcbiAgICAgICAgICAgIGdhbWVfZGV0YWlscy5tYXhQbGF5ZXJzID0gNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmFzc2VydChnYW1lX2RldGFpbHMubWF4UGxheWVycyA+PSBnYW1lX2RldGFpbHMubWluUGxheWVycyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZEdhbWU6IDAsXG4gICAgICAgIG51bVBsYXllcnM6IHByb3BzLmdhbWVzWzBdLmdhbWUubWluUGxheWVyc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTG9iYnlDcmVhdGVSb29tRm9ybSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkR2FtZSxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uQ2hhbmdlU2VsZWN0ZWRHYW1lKGV2dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnByb3BzLmdhbWVzLm1hcCh0aGlzLl9jcmVhdGVHYW1lTmFtZU9wdGlvbikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlBsYXllcnM6XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5udW1QbGF5ZXJzLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlTnVtUGxheWVyc1xuICAgICAgICB9LCB0aGlzLl9jcmVhdGVOdW1QbGF5ZXJzUmFuZ2UodGhpcy5wcm9wcy5nYW1lc1t0aGlzLnN0YXRlLnNlbGVjdGVkR2FtZV0uZ2FtZSkubWFwKHRoaXMuX2NyZWF0ZU51bVBsYXllcnNPcHRpb24pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJidXR0b25zXCJcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrQ3JlYXRlXG4gICAgICAgIH0sIFwiQ3JlYXRlXCIpKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExvYmJ5Q3JlYXRlUm9vbUZvcm07XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBfZGVmaW5lUHJvcGVydHkoTG9iYnlDcmVhdGVSb29tRm9ybSwgXCJwcm9wVHlwZXNcIiwge1xuICAgIGdhbWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBjcmVhdGVHYW1lOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pO1xuXG4gIHZhciBMb2JieVBoYXNlcyA9IHtcbiAgICBFTlRFUjogJ2VudGVyJyxcbiAgICBQTEFZOiAncGxheScsXG4gICAgTElTVDogJ2xpc3QnXG4gIH07XG4gIC8qKlxuICAgKiBMb2JieVxuICAgKlxuICAgKiBSZWFjdCBsb2JieSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9ICBnYW1lQ29tcG9uZW50cyAtIEFuIGFycmF5IG9mIEJvYXJkIGFuZCBHYW1lIG9iamVjdHMgZm9yIHRoZSBzdXBwb3J0ZWQgZ2FtZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2JieVNlcnZlciAtIEFkZHJlc3Mgb2YgdGhlIGxvYmJ5IHNlcnZlciAoZm9yIGV4YW1wbGUgJ2xvY2FsaG9zdDo4MDAwJykuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBzZXQsIGRlZmF1bHRzIHRvIHRoZSBzZXJ2ZXIgdGhhdCBzZXJ2ZWQgdGhlIHBhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lU2VydmVyIC0gQWRkcmVzcyBvZiB0aGUgZ2FtZSBzZXJ2ZXIgKGZvciBleGFtcGxlICdsb2NhbGhvc3Q6ODAwMScpLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBzZXQsIGRlZmF1bHRzIHRvIHRoZSBzZXJ2ZXIgdGhhdCBzZXJ2ZWQgdGhlIHBhZ2UuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsaWVudEZhY3RvcnkgLSBGdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBnYW1lIGNsaWVudHMuXG4gICAqIEBwYXJhbSB7Ym9vbH0gICBkZWJ1ZyAtIEVuYWJsZSBkZWJ1ZyBpbmZvcm1hdGlvbiAoZGVmYXVsdDogZmFsc2UpLlxuICAgKlxuICAgKiBSZXR1cm5zOlxuICAgKiAgIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgcHJvdmlkZXMgYSBVSSB0byBjcmVhdGUsIGxpc3QsIGpvaW4sIGxlYXZlLCBwbGF5IG9yIHNwZWN0YXRlIGdhbWUgaW5zdGFuY2VzLlxuICAgKi9cblxuICB2YXIgTG9iYnkgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExvYmJ5LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIExvYmJ5KF9wcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9iYnkpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihMb2JieSkuY2FsbCh0aGlzLCBfcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHtcbiAgICAgICAgcGhhc2U6IExvYmJ5UGhhc2VzLkVOVEVSLFxuICAgICAgICBwbGF5ZXJOYW1lOiAnVmlzaXRvcicsXG4gICAgICAgIHJ1bm5pbmdHYW1lOiBudWxsLFxuICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgIGNyZWRlbnRpYWxTdG9yZToge31cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2NyZWF0ZUNvbm5lY3Rpb25cIiwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3RoaXMuc3RhdGUucGxheWVyTmFtZTtcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbiA9IExvYmJ5Q29ubmVjdGlvbih7XG4gICAgICAgICAgc2VydmVyOiBwcm9wcy5sb2JieVNlcnZlcixcbiAgICAgICAgICBnYW1lQ29tcG9uZW50czogcHJvcHMuZ2FtZUNvbXBvbmVudHMsXG4gICAgICAgICAgcGxheWVyTmFtZTogbmFtZSxcbiAgICAgICAgICBwbGF5ZXJDcmVkZW50aWFsczogX3RoaXMuc3RhdGUuY3JlZGVudGlhbFN0b3JlW25hbWVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfdXBkYXRlQ3JlZGVudGlhbHNcIiwgZnVuY3Rpb24gKHBsYXllck5hbWUsIGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAvLyBjbG9uZSBzdG9yZSBvciBjb21wb25lbnREaWRVcGRhdGUgd2lsbCBub3QgYmUgdHJpZ2dlcmVkXG4gICAgICAgICAgdmFyIHN0b3JlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLmNyZWRlbnRpYWxTdG9yZSk7XG4gICAgICAgICAgc3RvcmVbW3BsYXllck5hbWVdXSA9IGNyZWRlbnRpYWxzO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVkZW50aWFsU3RvcmU6IHN0b3JlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl91cGRhdGVDb25uZWN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXdhaXQgX3RoaXMuY29ubmVjdGlvbi5yZWZyZXNoKCk7XG5cbiAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2VudGVyTG9iYnlcIiwgZnVuY3Rpb24gKHBsYXllck5hbWUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBsYXllck5hbWU6IHBsYXllck5hbWUsXG4gICAgICAgICAgcGhhc2U6IExvYmJ5UGhhc2VzLkxJU1RcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9leGl0TG9iYnlcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FpdCBfdGhpcy5jb25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGhhc2U6IExvYmJ5UGhhc2VzLkVOVEVSLFxuICAgICAgICAgIGVycm9yTXNnOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2NyZWF0ZVJvb21cIiwgYXN5bmMgZnVuY3Rpb24gKGdhbWVOYW1lLCBudW1QbGF5ZXJzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgX3RoaXMuY29ubmVjdGlvbi5jcmVhdGUoZ2FtZU5hbWUsIG51bVBsYXllcnMpO1xuICAgICAgICAgIGF3YWl0IF90aGlzLmNvbm5lY3Rpb24ucmVmcmVzaCgpOyAvLyByZXJlbmRlclxuXG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe30pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yTXNnOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2pvaW5Sb29tXCIsIGFzeW5jIGZ1bmN0aW9uIChnYW1lTmFtZSwgZ2FtZUlELCBwbGF5ZXJJRCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IF90aGlzLmNvbm5lY3Rpb24uam9pbihnYW1lTmFtZSwgZ2FtZUlELCBwbGF5ZXJJRCk7XG4gICAgICAgICAgYXdhaXQgX3RoaXMuY29ubmVjdGlvbi5yZWZyZXNoKCk7XG5cbiAgICAgICAgICBfdGhpcy5fdXBkYXRlQ3JlZGVudGlhbHMoX3RoaXMuY29ubmVjdGlvbi5wbGF5ZXJOYW1lLCBfdGhpcy5jb25uZWN0aW9uLnBsYXllckNyZWRlbnRpYWxzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvck1zZzogZXJyb3IubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9sZWF2ZVJvb21cIiwgYXN5bmMgZnVuY3Rpb24gKGdhbWVOYW1lLCBnYW1lSUQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBfdGhpcy5jb25uZWN0aW9uLmxlYXZlKGdhbWVOYW1lLCBnYW1lSUQpO1xuICAgICAgICAgIGF3YWl0IF90aGlzLmNvbm5lY3Rpb24ucmVmcmVzaCgpO1xuXG4gICAgICAgICAgX3RoaXMuX3VwZGF0ZUNyZWRlbnRpYWxzKF90aGlzLmNvbm5lY3Rpb24ucGxheWVyTmFtZSwgX3RoaXMuY29ubmVjdGlvbi5wbGF5ZXJDcmVkZW50aWFscyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3JNc2c6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfc3RhcnRHYW1lXCIsIGZ1bmN0aW9uIChnYW1lTmFtZSwgZ2FtZU9wdHMpIHtcbiAgICAgICAgdmFyIGdhbWVDb2RlID0gX3RoaXMuY29ubmVjdGlvbi5fZ2V0R2FtZUNvbXBvbmVudHMoZ2FtZU5hbWUpO1xuXG4gICAgICAgIGlmICghZ2FtZUNvZGUpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvck1zZzogJ2dhbWUgJyArIGdhbWVOYW1lICsgJyBub3Qgc3VwcG9ydGVkJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG11bHRpcGxheWVyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChnYW1lT3B0cy5udW1QbGF5ZXJzID4gMSkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5nYW1lU2VydmVyKSB7XG4gICAgICAgICAgICBtdWx0aXBsYXllciA9IHtcbiAgICAgICAgICAgICAgc2VydmVyOiBfdGhpcy5wcm9wcy5nYW1lU2VydmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtdWx0aXBsYXllciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFwcCA9IF90aGlzLnByb3BzLmNsaWVudEZhY3Rvcnkoe1xuICAgICAgICAgIGdhbWU6IGdhbWVDb2RlLmdhbWUsXG4gICAgICAgICAgYm9hcmQ6IGdhbWVDb2RlLmJvYXJkLFxuICAgICAgICAgIGRlYnVnOiBfdGhpcy5wcm9wcy5kZWJ1ZyxcbiAgICAgICAgICBtdWx0aXBsYXllcjogbXVsdGlwbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGdhbWUgPSB7XG4gICAgICAgICAgYXBwOiBhcHAsXG4gICAgICAgICAgZ2FtZUlEOiBnYW1lT3B0cy5nYW1lSUQsXG4gICAgICAgICAgcGxheWVySUQ6IGdhbWVPcHRzLm51bVBsYXllcnMgPiAxID8gZ2FtZU9wdHMucGxheWVySUQgOiBudWxsLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiBfdGhpcy5jb25uZWN0aW9uLnBsYXllckNyZWRlbnRpYWxzXG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBoYXNlOiBMb2JieVBoYXNlcy5QTEFZLFxuICAgICAgICAgIHJ1bm5pbmdHYW1lOiBnYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfZXhpdFJvb21cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGhhc2U6IExvYmJ5UGhhc2VzLkxJU1QsXG4gICAgICAgICAgcnVubmluZ0dhbWU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9nZXRQaGFzZVZpc2liaWxpdHlcIiwgZnVuY3Rpb24gKHBoYXNlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5waGFzZSAhPT0gcGhhc2UgPyAnaGlkZGVuJyA6ICdwaGFzZSc7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInJlbmRlclJvb21zXCIsIGZ1bmN0aW9uIChyb29tcywgcGxheWVyTmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vbXMubWFwKGZ1bmN0aW9uIChyb29tKSB7XG4gICAgICAgICAgdmFyIGdhbWVJRCA9IHJvb20uZ2FtZUlELFxuICAgICAgICAgICAgICBnYW1lTmFtZSA9IHJvb20uZ2FtZU5hbWUsXG4gICAgICAgICAgICAgIHBsYXllcnMgPSByb29tLnBsYXllcnM7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9iYnlSb29tSW5zdGFuY2UsIHtcbiAgICAgICAgICAgIGtleTogJ2luc3RhbmNlLScgKyBnYW1lSUQsXG4gICAgICAgICAgICByb29tOiB7XG4gICAgICAgICAgICAgIGdhbWVJRDogZ2FtZUlELFxuICAgICAgICAgICAgICBnYW1lTmFtZTogZ2FtZU5hbWUsXG4gICAgICAgICAgICAgIHBsYXllcnM6IE9iamVjdC52YWx1ZXMocGxheWVycylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXJOYW1lOiBwbGF5ZXJOYW1lLFxuICAgICAgICAgICAgb25DbGlja0pvaW46IF90aGlzLl9qb2luUm9vbSxcbiAgICAgICAgICAgIG9uQ2xpY2tMZWF2ZTogX3RoaXMuX2xlYXZlUm9vbSxcbiAgICAgICAgICAgIG9uQ2xpY2tQbGF5OiBfdGhpcy5fc3RhcnRHYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9jcmVhdGVDb25uZWN0aW9uKF90aGlzLnByb3BzKTtcblxuICAgICAgX3RoaXMuX3VwZGF0ZUNvbm5lY3Rpb24oKTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2JieSwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29va2llID0gQ29va2llcy5sb2FkKCdsb2JieVN0YXRlJykgfHwge307XG5cbiAgICAgICAgaWYgKGNvb2tpZS5waGFzZSAmJiBjb29raWUucGhhc2UgPT09IExvYmJ5UGhhc2VzLlBMQVkpIHtcbiAgICAgICAgICBjb29raWUucGhhc2UgPSBMb2JieVBoYXNlcy5MSVNUO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcGhhc2U6IGNvb2tpZS5waGFzZSB8fCBMb2JieVBoYXNlcy5FTlRFUixcbiAgICAgICAgICBwbGF5ZXJOYW1lOiBjb29raWUucGxheWVyTmFtZSB8fCAnVmlzaXRvcicsXG4gICAgICAgICAgY3JlZGVudGlhbFN0b3JlOiBjb29raWUuY3JlZGVudGlhbFN0b3JlIHx8IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLnN0YXRlLnBsYXllck5hbWU7XG4gICAgICAgIHZhciBjcmVkcyA9IHRoaXMuc3RhdGUuY3JlZGVudGlhbFN0b3JlW25hbWVdO1xuXG4gICAgICAgIGlmIChwcmV2U3RhdGUucGhhc2UgIT09IHRoaXMuc3RhdGUucGhhc2UgfHwgcHJldlN0YXRlLmNyZWRlbnRpYWxTdG9yZVtuYW1lXSAhPT0gY3JlZHMgfHwgcHJldlN0YXRlLnBsYXllck5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVDb25uZWN0aW9uKHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgdGhpcy5fdXBkYXRlQ29ubmVjdGlvbigpO1xuXG4gICAgICAgICAgdmFyIGNvb2tpZSA9IHtcbiAgICAgICAgICAgIHBoYXNlOiB0aGlzLnN0YXRlLnBoYXNlLFxuICAgICAgICAgICAgcGxheWVyTmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxTdG9yZTogdGhpcy5zdGF0ZS5jcmVkZW50aWFsU3RvcmVcbiAgICAgICAgICB9O1xuICAgICAgICAgIENvb2tpZXMuc2F2ZSgnbG9iYnlTdGF0ZScsIGNvb2tpZSwge1xuICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZ2FtZUNvbXBvbmVudHMgPSBfdGhpcyRwcm9wcy5nYW1lQ29tcG9uZW50cyxcbiAgICAgICAgICAgIHJlbmRlcmVyID0gX3RoaXMkcHJvcHMucmVuZGVyZXI7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBlcnJvck1zZyA9IF90aGlzJHN0YXRlLmVycm9yTXNnLFxuICAgICAgICAgICAgcGxheWVyTmFtZSA9IF90aGlzJHN0YXRlLnBsYXllck5hbWUsXG4gICAgICAgICAgICBwaGFzZSA9IF90aGlzJHN0YXRlLnBoYXNlLFxuICAgICAgICAgICAgcnVubmluZ0dhbWUgPSBfdGhpcyRzdGF0ZS5ydW5uaW5nR2FtZTtcblxuICAgICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyZXIoe1xuICAgICAgICAgICAgZXJyb3JNc2c6IGVycm9yTXNnLFxuICAgICAgICAgICAgZ2FtZUNvbXBvbmVudHM6IGdhbWVDb21wb25lbnRzLFxuICAgICAgICAgICAgcm9vbXM6IHRoaXMuY29ubmVjdGlvbi5yb29tcyxcbiAgICAgICAgICAgIHBoYXNlOiBwaGFzZSxcbiAgICAgICAgICAgIHBsYXllck5hbWU6IHBsYXllck5hbWUsXG4gICAgICAgICAgICBydW5uaW5nR2FtZTogcnVubmluZ0dhbWUsXG4gICAgICAgICAgICBoYW5kbGVFbnRlckxvYmJ5OiB0aGlzLl9lbnRlckxvYmJ5LFxuICAgICAgICAgICAgaGFuZGxlRXhpdExvYmJ5OiB0aGlzLl9leGl0TG9iYnksXG4gICAgICAgICAgICBoYW5kbGVDcmVhdGVSb29tOiB0aGlzLl9jcmVhdGVSb29tLFxuICAgICAgICAgICAgaGFuZGxlSm9pblJvb206IHRoaXMuX2pvaW5Sb29tLFxuICAgICAgICAgICAgaGFuZGxlTGVhdmVSb29tOiB0aGlzLl9sZWF2ZVJvb20sXG4gICAgICAgICAgICBoYW5kbGVFeGl0Um9vbTogdGhpcy5fZXhpdFJvb20sXG4gICAgICAgICAgICBoYW5kbGVSZWZyZXNoUm9vbXM6IHRoaXMuX3VwZGF0ZUNvbm5lY3Rpb24sXG4gICAgICAgICAgICBoYW5kbGVTdGFydEdhbWU6IHRoaXMuX3N0YXJ0R2FtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiBcImxvYmJ5LXZpZXdcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcGFkZGluZzogNTBcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5fZ2V0UGhhc2VWaXNpYmlsaXR5KExvYmJ5UGhhc2VzLkVOVEVSKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExvYmJ5TG9naW5Gb3JtLCB7XG4gICAgICAgICAga2V5OiBwbGF5ZXJOYW1lLFxuICAgICAgICAgIHBsYXllck5hbWU6IHBsYXllck5hbWUsXG4gICAgICAgICAgb25FbnRlcjogdGhpcy5fZW50ZXJMb2JieVxuICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5fZ2V0UGhhc2VWaXNpYmlsaXR5KExvYmJ5UGhhc2VzLkxJU1QpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiV2VsY29tZSwgXCIsIHBsYXllck5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicGhhc2UtdGl0bGVcIixcbiAgICAgICAgICBpZDogXCJnYW1lLWNyZWF0aW9uXCJcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJDcmVhdGUgYSByb29tOlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChMb2JieUNyZWF0ZVJvb21Gb3JtLCB7XG4gICAgICAgICAgZ2FtZXM6IGdhbWVDb21wb25lbnRzLFxuICAgICAgICAgIGNyZWF0ZUdhbWU6IHRoaXMuX2NyZWF0ZVJvb21cbiAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInBoYXNlLXRpdGxlXCJcbiAgICAgICAgfSwgXCJKb2luIGEgcm9vbTpcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiBcImluc3RhbmNlc1wiXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgdGhpcy5yZW5kZXJSb29tcyh0aGlzLmNvbm5lY3Rpb24ucm9vbXMsIHBsYXllck5hbWUpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3ItbXNnXCJcbiAgICAgICAgfSwgZXJyb3JNc2csIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInBoYXNlLXRpdGxlXCJcbiAgICAgICAgfSwgXCJSb29tcyB0aGF0IGJlY29tZSBlbXB0eSBhcmUgYXV0b21hdGljYWxseSBkZWxldGVkLlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5fZ2V0UGhhc2VWaXNpYmlsaXR5KExvYmJ5UGhhc2VzLlBMQVkpXG4gICAgICAgIH0sIHJ1bm5pbmdHYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQocnVubmluZ0dhbWUuYXBwLCB7XG4gICAgICAgICAgZ2FtZUlEOiBydW5uaW5nR2FtZS5nYW1lSUQsXG4gICAgICAgICAgcGxheWVySUQ6IHJ1bm5pbmdHYW1lLnBsYXllcklELFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiBydW5uaW5nR2FtZS5jcmVkZW50aWFsc1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImJ1dHRvbnNcIixcbiAgICAgICAgICBpZDogXCJnYW1lLWV4aXRcIlxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9leGl0Um9vbVxuICAgICAgICB9LCBcIkV4aXQgZ2FtZVwiKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYnV0dG9uc1wiLFxuICAgICAgICAgIGlkOiBcImxvYmJ5LWV4aXRcIlxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9leGl0TG9iYnlcbiAgICAgICAgfSwgXCJFeGl0IGxvYmJ5XCIpKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExvYmJ5O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KExvYmJ5LCBcInByb3BUeXBlc1wiLCB7XG4gICAgZ2FtZUNvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGxvYmJ5U2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdhbWVTZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVidWc6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWVudEZhY3Rvcnk6IFByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShMb2JieSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBjbGllbnRGYWN0b3J5OiBDbGllbnQkMVxuICB9KTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cblxuICBleHBvcnRzLkNsaWVudCA9IENsaWVudCQxO1xuICBleHBvcnRzLkxvYmJ5ID0gTG9iYnk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJyksIHJlcXVpcmUoJ3RocmVlJyksIHJlcXVpcmUoJ0B0d2VlbmpzL3R3ZWVuLmpzJyksIHJlcXVpcmUoJ3JlYWN0LWRyYWd0YXN0aWMnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0JywgJ3Byb3AtdHlwZXMnLCAndGhyZWUnLCAnQHR3ZWVuanMvdHdlZW4uanMnLCAncmVhY3QtZHJhZ3Rhc3RpYyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuVUkgPSB7fSwgZ2xvYmFsLlJlYWN0LCBnbG9iYWwuUHJvcFR5cGVzLCBnbG9iYWwuVEhSRUUsIGdsb2JhbC5UV0VFTiwgZ2xvYmFsLlJlYWN0RHJhZ3Rhc3RpYykpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgUmVhY3QsIFByb3BUeXBlcywgVEhSRUUsIFRXRUVOLCByZWFjdERyYWd0YXN0aWMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIFJlYWN0ID0gUmVhY3QgJiYgUmVhY3QuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcbiAgUHJvcFR5cGVzID0gUHJvcFR5cGVzICYmIFByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUHJvcFR5cGVzWydkZWZhdWx0J10gOiBQcm9wVHlwZXM7XG4gIFRXRUVOID0gVFdFRU4gJiYgVFdFRU4uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFRXRUVOWydkZWZhdWx0J10gOiBUV0VFTjtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gY2FsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIFVJQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICAvKipcbiAgICogUm9vdCBlbGVtZW50IG9mIHRoZSBSZWFjdCBiYXNlZCAyRCBVSSBmcmFtZXdvcmsuXG4gICAqL1xuXG4gIHZhciBVSSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVUksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVUkocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVJKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVUkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImdldENvbnRleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdlbklEOiBmdW5jdGlvbiBnZW5JRCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbmV4dElEKys7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9uZXh0SUQgPSAxO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhVSSwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHQoKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYmdpby11aVwiXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVUk7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBfZGVmaW5lUHJvcGVydHkoVUksIFwicHJvcFR5cGVzXCIsIHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxuICB9KTtcblxuICBmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICAgIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICAgIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNzcyA9IFwiLmxvYWRlciB7XFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiO1xuICBzdHlsZUluamVjdChjc3MpO1xuXG4gIC8qKlxuICAgKiBSb290IGVsZW1lbnQgb2YgdGhlIFJlYWN0L3RocmVlanMgYmFzZWQgM0QgVUkgZnJhbWV3b3JrLlxuICAgKi9cblxuICB2YXIgVUkkMSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVUksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVUkocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVJKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVUkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImFuaW1hdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMuYW5pbWF0ZSk7XG4gICAgICAgIFRXRUVOLnVwZGF0ZSgpO1xuXG4gICAgICAgIF90aGlzLnJlbmRlcmVyLnJlbmRlcihfdGhpcy5zY2VuZSwgX3RoaXMuY2FtZXJhKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiYWRkXCIsIGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgIF90aGlzLmNoaWxkR3JvdXAuYWRkKG9iaik7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBfdGhpcy5jYWxsYmFja3NfW29iai5pZF0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJyZWdpc3RlckNhbGxiYWNrXCIsIGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmogJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICBfdGhpcy5jYWxsYmFja3NfW29iai5pZF0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJnZXRDb250ZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aHJlZTogdHJ1ZSxcbiAgICAgICAgICBhZGQ6IF90aGlzLmFkZCxcbiAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zY2VuZS5yZW1vdmUob2JqKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjZW5lOiBfdGhpcy5zY2VuZSxcbiAgICAgICAgICBjYW1lcmE6IF90aGlzLmNhbWVyYSxcbiAgICAgICAgICByZWdDYWxsOiBfdGhpcy5yZWdpc3RlckNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFNldCBvZiBjYWxsYmFja3MgdGhhdCBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgcGFzcyB2aWEgY29udGV4dC5zdWJzY3JpYmVUb01vdXNlRXZlbnRzXG4gICAgICAgKiBpbiBvcmRlciB0byByZWNlaXZlIG1vdXNlIGV2ZW50cyB0aGF0IHBlcnRhaW4gdG8gdGhlIG9iamVjdHMgdGhhdCB0aGV5IG1hbmFnZS5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cblxuICAgICAgX3RoaXMuY2FsbGJhY2tzXyA9IHt9O1xuICAgICAgLyoqXG4gICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHJvb3QgZGl2IGVsZW1lbnQuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG5cbiAgICAgIF90aGlzLnJlZl8gPSBSZWFjdC5jcmVhdGVSZWYoKTsgLy8gU2V0IHVwIHNjZW5lLlxuXG4gICAgICBfdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgX3RoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweGZmZmZmZik7IC8vIFNldCB1cCByZW5kZXJlci5cblxuICAgICAgX3RoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgICBfdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cbiAgICAgIF90aGlzLnJlbmRlcmVyLnNldFNpemUoX3RoaXMucHJvcHMud2lkdGgsIF90aGlzLnByb3BzLmhlaWdodCk7IC8vIFNldCB1cCBjYW1lcmEuXG5cblxuICAgICAgX3RoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBfdGhpcy5wcm9wcy53aWR0aCAvIF90aGlzLnByb3BzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgIF90aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNztcbiAgICAgIF90aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMTA7XG5cbiAgICAgIF90aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG5cbiAgICAgIF90aGlzLnNjZW5lLmFkZChfdGhpcy5jYW1lcmEpOyAvLyBTZXQgdXAgbGlnaHRzLlxuXG5cbiAgICAgIHZhciBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjcpO1xuXG4gICAgICBfdGhpcy5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgICAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHg1NTU1NTUpO1xuICAgICAgbGlnaHQucG9zaXRpb24ueSA9IDUwO1xuICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTEwO1xuICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5ib3R0b20gPSAtMTA7XG4gICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTA7XG4gICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLnRvcCA9IDEwO1xuICAgICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG5cbiAgICAgIF90aGlzLnNjZW5lLmFkZChsaWdodCk7IC8vIFNldCB1cCBncm91bmQuXG5cblxuICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMTAwLCAxMDApO1xuICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHhmZmZmZmZcbiAgICAgIH0pO1xuICAgICAgdmFyIHBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIHBsYW5lLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgcGxhbmUubG9va0F0KHBsYW5lLnVwKTtcbiAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAtMC4wMTtcbiAgICAgIF90aGlzLnBsYW5lID0gcGxhbmU7XG5cbiAgICAgIF90aGlzLnNjZW5lLmFkZChwbGFuZSk7XG5cbiAgICAgIHZhciBoZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigyMDAwLCAyMDAwKTtcbiAgICAgIGhlbHBlci5tYXRlcmlhbC5vcGFjaXR5ID0gMC4xO1xuICAgICAgaGVscGVyLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuICAgICAgX3RoaXMuc2NlbmUuYWRkKGhlbHBlcik7XG5cbiAgICAgIF90aGlzLmNoaWxkR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcblxuICAgICAgX3RoaXMuc2NlbmUuYWRkKF90aGlzLmNoaWxkR3JvdXApOyAvLyBzZXQgdXAgbG9hZGluZyBzY3JlZW5cblxuXG4gICAgICBfdGhpcy5sb2FkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImxvYWRlclwiXG4gICAgICB9KTtcblxuICAgICAgVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMucmVmXy5jdXJyZW50LnJlbW92ZUNoaWxkKF90aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGVkIGxvYWRpbmcgZmlsZScpO1xuICAgICAgfTtcblxuICAgICAgVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMucmVmXy5jdXJyZW50LmFwcGVuZENoaWxkKF90aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIENvbXBsZXRlIScpO1xuICAgICAgfTtcblxuICAgICAgVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodXJsLCBpdGVtc0xvYWRlZCwgaXRlbXNUb3RhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmaWxlOiAnICsgdXJsICsgJ1xcbkxvYWRlZCAnICsgaXRlbXNMb2FkZWQgKyAnIG9mICcgKyBpdGVtc1RvdGFsICsgJyBmaWxlcy4nKTtcbiAgICAgIH07XG5cbiAgICAgIFRIUkVFLkRlZmF1bHRMb2FkaW5nTWFuYWdlci5vbkVycm9yID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmc6ICcgKyB1cmwpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhVSSwgW3tcbiAgICAgIGtleTogXCJzZXR1cE1vdXNlRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBNb3VzZUV2ZW50cygpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gTGlzdCBvZiBvYmplY3RzIGN1cnJlbnRseSBiZWluZyBkcmFnZ2VkLlxuICAgICAgICB2YXIgZHJhZ2dpbmdfID0gW107IC8vIFRoZSAyRCB2aWV3cG9ydCBjby1vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlLlxuXG4gICAgICAgIHZhciBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7IC8vIFJheWNhc3RlciB0aGF0J3MgdXNlZCB0byBjYWxjdWxhdGUgb2JqZWN0cyB0aGF0IHRoZVxuICAgICAgICAvLyBtb3VzZSBpbnRlcnNlY3RzLlxuXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuXG4gICAgICAgIHZhciBnZXRDbGlja1R5cGUgPSBmdW5jdGlvbiBnZXRDbGlja1R5cGUoZSkge1xuICAgICAgICAgIGlmIChlLndoaWNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsZWZ0Y2xpY2snO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pZGRsZWNsaWNrJztcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyaWdodGNsaWNrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZS5idXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3dpdGNoIChlLmJ1dHRvbikge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsZWZ0Y2xpY2snO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pZGRsZWNsaWNrJztcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyaWdodGNsaWNrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGRpc3BhdGNoTW91c2VDYWxsYmFja3MgPSBmdW5jdGlvbiBkaXNwYXRjaE1vdXNlQ2FsbGJhY2tzKGUsIG9iamVjdHMpIHtcbiAgICAgICAgICBpZiAob2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfdGhpczIucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIF90aGlzMi5jYW1lcmEpO1xuXG4gICAgICAgICAgICBvYmplY3RzID0gX3RoaXMyLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKF90aGlzMi5jaGlsZEdyb3VwLmNoaWxkcmVuLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm9uTW91c2VFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uTW91c2VFdmVudChlLCBvYmplY3RzKTtcbiAgICAgICAgICB9IC8vIG9ubHkgaW50ZXJzZWN0IHRoZSBuZWFyZXN0IG9iamVjdC5cblxuXG4gICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbMF07XG5cbiAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICBlLnBvaW50ID0gb2JqLnBvaW50O1xuXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IF90aGlzMi5jaGlsZEdyb3VwLmdldE9iamVjdEJ5SWQob2JqLm9iamVjdC5pZCk7IC8vIGNoZWNrIHBhcmVudHMgdW50aWwgd2UgaGl0IGEgY2FsbGJhY2sgb3IgaGl0IHRoZSB0b3AgbGV2ZWwuXG5cblxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudC5wYXJlbnQgJiYgY3VycmVudC5pZCAhPSBfdGhpczIuY2hpbGRHcm91cC5pZCkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudC5pZCBpbiBfdGhpczIuY2FsbGJhY2tzXykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5jYWxsYmFja3NfW2N1cnJlbnQuaWRdKGUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGdldENsaWNrVHlwZShlKTtcblxuICAgICAgICAgIF90aGlzMi5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgX3RoaXMyLmNhbWVyYSk7XG5cbiAgICAgICAgICB2YXIgb2JqZWN0cyA9IF90aGlzMi5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhfdGhpczIuY2hpbGRHcm91cC5jaGlsZHJlbiwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PSAnbGVmdGNsaWNrJykge1xuICAgICAgICAgICAgZHJhZ2dpbmdfID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqLm9iamVjdC51c2VyRGF0YS5kcmFnZ2FibGUgJiYgb2JqLm9iamVjdC51c2VyRGF0YS5yZXNwb25zaXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoTW91c2VDYWxsYmFja3MoZSwgb2JqZWN0cyk7XG5cbiAgICAgICAgICBpZiAoZHJhZ2dpbmdfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRyYWdnaW5nXyA9IFtkcmFnZ2luZ19bMF1dO1xuICAgICAgICAgICAgZGlzcGF0Y2hNb3VzZUNhbGxiYWNrcyhfb2JqZWN0U3ByZWFkKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdkcmFnU3RhcnQnXG4gICAgICAgICAgICB9KSwgZHJhZ2dpbmdfKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uTW91c2VVcCA9IGZ1bmN0aW9uIG9uTW91c2VVcChlKSB7XG4gICAgICAgICAgX3RoaXMyLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKG1vdXNlLCBfdGhpczIuY2FtZXJhKTtcblxuICAgICAgICAgIHZhciBvYmplY3RzID0gX3RoaXMyLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKF90aGlzMi5jaGlsZEdyb3VwLmNoaWxkcmVuLCB0cnVlKTtcblxuICAgICAgICAgIGRpc3BhdGNoTW91c2VDYWxsYmFja3MoZSwgb2JqZWN0cyk7XG5cbiAgICAgICAgICBpZiAoZHJhZ2dpbmdfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBkcm9wcGFibGUgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmoub2JqZWN0LnVzZXJEYXRhLmRyb3BwYWJsZSAmJiBvYmoub2JqZWN0LnVzZXJEYXRhLnJlc3BvbnNpdmU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRyb3BwYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciB3aGF0ID0gZHJhZ2dpbmdfLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvLm9iamVjdDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGRpc3BhdGNoTW91c2VDYWxsYmFja3MoX29iamVjdFNwcmVhZCh7fSwgZSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkcm9wJyxcbiAgICAgICAgICAgICAgICB3aGF0OiB3aGF0XG4gICAgICAgICAgICAgIH0pLCBkcm9wcGFibGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaE1vdXNlQ2FsbGJhY2tzKF9vYmplY3RTcHJlYWQoe30sIGUsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2RyYWdFbmQnXG4gICAgICAgICAgICB9KSwgZHJhZ2dpbmdfKTtcbiAgICAgICAgICAgIGRyYWdnaW5nXyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25Nb3VzZU1vdmUgPSBmdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgdmFyIHggPSBlLmNsaWVudFg7XG4gICAgICAgICAgdmFyIHkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnaW8tY2FudmFzJyk7XG4gICAgICAgICAgdmFyIHQgPSBlbDtcblxuICAgICAgICAgIHdoaWxlICh0KSB7XG4gICAgICAgICAgICBpZiAodC5vZmZzZXRMZWZ0KSB4IC09IHQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGlmICh0Lm9mZnNldFRvcCkgeSAtPSB0Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIHQgPSB0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ID0gZWw7XG5cbiAgICAgICAgICB3aGlsZSAodCkge1xuICAgICAgICAgICAgaWYgKHQuc2Nyb2xsTGVmdCkgeCArPSB0LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBpZiAodC5zY3JvbGxUb3ApIHkgKz0gdC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB0ID0gdC5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1vdXNlLnggPSB4IC8gX3RoaXMyLnByb3BzLndpZHRoICogMiAtIDE7XG4gICAgICAgICAgbW91c2UueSA9IC0oeSAvIF90aGlzMi5wcm9wcy5oZWlnaHQpICogMiArIDE7XG4gICAgICAgICAgZGlzcGF0Y2hNb3VzZUNhbGxiYWNrcyhlKTtcblxuICAgICAgICAgIF90aGlzMi5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgX3RoaXMyLmNhbWVyYSk7XG5cbiAgICAgICAgICB2YXIgciA9IF90aGlzMi5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KF90aGlzMi5wbGFuZSk7XG5cbiAgICAgICAgICBpZiAoci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgX2UgPSBfb2JqZWN0U3ByZWFkKHt9LCBfZSwge1xuICAgICAgICAgICAgICB0eXBlOiAnZHJhZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcmFnZ2luZ18uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIF9lLnBvaW50ID0gclswXS5wb2ludDtcblxuICAgICAgICAgICAgICBpZiAob2JqLm9iamVjdC5pZCBpbiBfdGhpczIuY2FsbGJhY2tzXykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5jYWxsYmFja3NfW29iai5vYmplY3QuaWRdKF9lKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvYmoub2JqZWN0LnBhcmVudC5pZCBpbiBfdGhpczIuY2FsbGJhY2tzXykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5jYWxsYmFja3NfW29iai5vYmplY3QucGFyZW50LmlkXShfZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gb25Nb3VzZVdoZWVsKGUpIHtcbiAgICAgICAgICBkaXNwYXRjaE1vdXNlQ2FsbGJhY2tzKGUpO1xuXG4gICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlLndoZWVsRGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBfdGhpczIuY2FtZXJhLnpvb20gKz0gMC41O1xuXG4gICAgICAgICAgICBfdGhpczIuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzMi5jYW1lcmEuem9vbSA+IDAuNSkge1xuICAgICAgICAgICAgX3RoaXMyLmNhbWVyYS56b29tIC09IDAuNTtcblxuICAgICAgICAgICAgX3RoaXMyLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByb290ID0gdGhpcy5yZWZfLmN1cnJlbnQ7XG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25Nb3VzZVdoZWVsKTtcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwYXRjaE1vdXNlQ2FsbGJhY2tzKTtcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pbml0Q2FudmFzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXRDYW52YXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9ICdiZ2lvLWNhbnZhcyc7XG4gICAgICAgIHRoaXMucmVmXy5jdXJyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2V0dXBNb3VzZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICB0aHJlZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVUlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dCgpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJiZ2lvLXVpXCIsXG4gICAgICAgICAgcmVmOiB0aGlzLnJlZl9cbiAgICAgICAgfSwgdGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyB0aGlzLmxvYWRlciA6IGNoaWxkcmVuKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFVJO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KFVJJDEsIFwicHJvcFR5cGVzXCIsIHtcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgb25Nb3VzZUV2ZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoVUkkMSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIHdpZHRoOiAxMDI0LFxuICAgIGhlaWdodDogNzY4XG4gIH0pO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuICAvKipcbiAgICogUm9vdCBjb21wb25lbnQgb2YgdGhlIFVJIGZyYW1ld29yay5cbiAgICovXG5cbiAgdmFyIFVJJDIgPSBmdW5jdGlvbiBVSSQkMShwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50aHJlZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVUkkMSwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVUksIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG4gIH07XG4gIFVJJDIucHJvcFR5cGVzID0ge1xuICAgIHRocmVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxuICB9O1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAyMDE4IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xuICAgKlxuICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZVxuICAgKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gICAqL1xuXG4gIHZhciBMb2dvID0gZnVuY3Rpb24gTG9nbyhfcmVmKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgd2lkdGg6IHdpZHRoIHx8IDEyOCxcbiAgICAgIGhlaWdodDogaGVpZ2h0IHx8IDEyOCxcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjggMTI4XCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBkOiBcIk02NCwxMjAuMzcsMTUuMjcsOTIuMjhWMzUuOTFMNjQsNy44Mmw0OC43MywyOC4wOVY5Mi4yOFpcIixcbiAgICAgIGZpbGw6IFwiIzM3Mzc0OFwiXG4gICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGZpbGw6IFwiIzAwMFwiLFxuICAgICAgZDogXCJNNjQsMTI0LDEyLDk0VjM0TDY0LDRsNTIsMzBWOTRaTTE4LjMzLDkwLjM3LDY0LDExNi43NGw0NS42Ny0yNi4zN1YzNy42M0w2NCwxMS4yNiwxOC4zMywzNy42M1pcIlxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBkOiBcIk04MS43Nyw0My4xN2M1LjkyLDAsMTAuNTEsMS43MiwxMy41Nyw1LjE2LDMuMjUsMy40NCw0Ljc3LDguNDEsNC43NywxNC43MXEwLDEwLjMyLTUuMTUsMTYuMDZjLTMuNDQsMy44Mi04LjIyLDUuNzMtMTQuNTMsNS43My01LjkyLDAtMTAuNTEtMS43Mi0xMy41Ni01LjM1LTMuMjUtMy42My00Ljc4LTguNi00Ljc4LTE1LjI5czEuNzItMTIsNS4xNi0xNS42N1M3NS40Niw0My4xNyw4MS43Nyw0My4xN1ptLS41Nyw1LjE2Yy00LjQsMC03LjQ1LDEuMTUtOS41NiwzLjYzcy0zLDYuMzEtMywxMS42NmMwLDUuNzMsMSw5Ljc0LDMsMTIuNDIsMi4xMSwyLjQ4LDUuMTYsMy44Miw5LjU2LDMuODJzNy42NC0xLjM0LDkuNzQtMy44MiwzLjI1LTYuNSwzLjI1LTExLjg1YzAtNS41NC0xLjE1LTkuNTUtMy4yNS0xMkM4OC42NSw0OS40OCw4NS41OSw0OC4zMyw4MS4yLDQ4LjMzWlwiLFxuICAgICAgZmlsbDogXCIjZmZmXCJcbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZDogXCJNMzkuMzUsNzEuNDVsLjE5LDEyLjhIMzMuNDNMMzMuNjIsNzJsLS4xOS0yOC40OGg2LjExbC0uMTksMjcuOVpcIixcbiAgICAgIGZpbGw6IFwiI2ZmZlwiXG4gICAgfSkpO1xuICB9O1xuXG4gIExvZ28ucHJvcFR5cGVzID0ge1xuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHZhciBjc3MkMSA9IFwiLypcXG4gKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcXG4gKlxcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXFxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXFxuICovXFxuXFxuLmJnaW8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2FiYWJhYjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcXG59XFxuXFxuLmJnaW8tY2FyZC5wbGFjZWhvbGRlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5iZ2lvLWNhcmQuYWNjZXB0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICNkZGQ7XFxufVxcblxcbi5iZ2lvLWNhcmQucmVqZWN0IHtcXG59XFxuXFxuLmJnaW8tY2FyZF9fZnJvbnQsXFxuLmJnaW8tY2FyZF9fYmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYmdpby1jYXJkX19iYWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCA2NCA2NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTggMTZjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMzMuNDE0LTZsNS45NS01Ljk1TDQ1Ljk1LjYzNiA0MCA2LjU4NiAzNC4wNS42MzYgMzIuNjM2IDIuMDUgMzguNTg2IDhsLTUuOTUgNS45NSAxLjQxNCAxLjQxNEw0MCA5LjQxNGw1Ljk1IDUuOTUgMS40MTQtMS40MTRMNDEuNDE0IDh6TTQwIDQ4YzQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04LTggMy41ODItOCA4IDMuNTgyIDggOCA4em0wLTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTkuNDE0IDQwbDUuOTUtNS45NS0xLjQxNC0xLjQxNEw4IDM4LjU4NmwtNS45NS01Ljk1TC42MzYgMzQuMDUgNi41ODYgNDBsLTUuOTUgNS45NSAxLjQxNCAxLjQxNEw4IDQxLjQxNGw1Ljk1IDUuOTUgMS40MTQtMS40MTRMOS40MTQgNDB6JyBmaWxsPSclMjNhYmFiYWInIGZpbGwtb3BhY2l0eT0nMC40JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDJweCAycHg7XFxuICBvdXRsaW5lOiA4cHggc29saWQgI2VlZTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMjBweDtcXG59XFxuXCI7XG4gIHN0eWxlSW5qZWN0KGNzcyQxKTtcblxuICBmdW5jdGlvbiBHZXREcmFnZ2FibGUocHJvcHMsIGNsYXNzTmFtZXMsIGNhcmRTdHlsZSwgb25DbGljaykge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICAgICAgZXZlbnRzID0gX3JlZi5ldmVudHM7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcy5qb2luKCcgJyksXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcy5zdHlsZSwgY2FyZFN0eWxlLCB7XG4gICAgICAgICAgb3BhY2l0eTogaXNBY3RpdmUgPyAwIDogMSxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBpc0FjdGl2ZSA/ICdub25lJyA6ICdhbGwnXG4gICAgICAgIH0pLFxuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICB9LCBldmVudHMpLCBwcm9wcy5pc0ZhY2VVcCA/IHByb3BzLmZyb250IDogcHJvcHMuYmFjayk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBHZXREcmFnQ29tcG9uZW50KHByb3BzLCBjbGFzc05hbWVzLCByZWYsIGlzT3ZlckFjY2VwdGVkQ2FsbGJhY2spIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lLCByZWFjdC9wcm9wLXR5cGVzICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHggPSBfcmVmMi54LFxuICAgICAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgICAgIGlzT3ZlckFjY2VwdGVkID0gX3JlZjIuaXNPdmVyQWNjZXB0ZWQsXG4gICAgICAgICAgY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkID0gX3JlZjIuY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IF90b0NvbnN1bWFibGVBcnJheShjbGFzc05hbWVzKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzICovXG5cblxuICAgICAgdmFyIGNvbnRlbnQgPSBwcm9wcy5iYWNrO1xuICAgICAgaXNPdmVyQWNjZXB0ZWRDYWxsYmFjayhpc092ZXJBY2NlcHRlZCk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG4gICAgICBpZiAocHJvcHMuaXNGYWNlVXApIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXMgKi9cbiAgICAgICAgY29udGVudCA9IHByb3BzLmZyb250O1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudGx5SG92ZXJlZERyb3BwYWJsZUlkICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc092ZXJBY2NlcHRlZCkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnYWNjZXB0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKCdyZWplY3QnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB6SW5kZXg6IDIwMDAwMDAwMDAsXG4gICAgICAgICAgYm94U2hhZG93OiAnNXB4IDVweCA1cHggI2VlZScsXG4gICAgICAgICAgbGVmdDogeCAtIDUwLFxuICAgICAgICAgIHRvcDogeSAtIDcwXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRlbnQpO1xuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHZhciBDYXJkSW1wbCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2FyZEltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2FyZEltcGwocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcmRJbXBsKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2FyZEltcGwpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uQ2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKF90aGlzLnByb3BzLmRhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmlkID0gcHJvcHMuY29udGV4dC5nZW5JRCgpO1xuICAgICAgX3RoaXMuZHJhZ0NvbXBvbmVudFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgX3RoaXMuaXNPdmVyQWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FyZEltcGwsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgY2xhc3NOYW1lcyA9IFsnYmdpby1jYXJkJ107XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYXJkU3R5bGUgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbkRlY2spIHtcbiAgICAgICAgICBjYXJkU3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy5kZWNrUG9zaXRpb25cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChyZWFjdERyYWd0YXN0aWMuRHJhZ2dhYmxlLCB7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5kcmFnWm9uZSxcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcbiAgICAgICAgfSwgR2V0RHJhZ2dhYmxlKHRoaXMucHJvcHMsIGNsYXNzTmFtZXMsIGNhcmRTdHlsZSwgdGhpcy5vbkNsaWNrKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3REcmFndGFzdGljLkRyYWdDb21wb25lbnQsIHtcbiAgICAgICAgICBmb3I6IHRoaXMuaWRcbiAgICAgICAgfSwgR2V0RHJhZ0NvbXBvbmVudCh0aGlzLnByb3BzLCBjbGFzc05hbWVzLCB0aGlzLmRyYWdDb21wb25lbnRSZWYsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5pc092ZXJBY2NlcHRlZCA9IG87XG4gICAgICAgIH0pKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhcmRJbXBsO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KENhcmRJbXBsLCBcInByb3BUeXBlc1wiLCB7XG4gICAgaXNGYWNlVXA6IFByb3BUeXBlcy5ib29sLFxuICAgIGZyb250OiBQcm9wVHlwZXMubm9kZSxcbiAgICBiYWNrOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHJhZ1pvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29udGV4dDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGluRGVjazogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFueSxcbiAgICBkZWNrUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXJcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KENhcmRJbXBsLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9LFxuICAgIGlzRmFjZVVwOiBmYWxzZSxcbiAgICBkcmFnWm9uZTogJ2JnaW8tY2FyZCcsXG4gICAgZnJvbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImJnaW8tY2FyZF9fZnJvbnRcIlxuICAgIH0sIFwiQ2FyZFwiKSxcbiAgICBiYWNrOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJiZ2lvLWNhcmRfX2JhY2tcIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9nbywge1xuICAgICAgd2lkdGg6IFwiNDhcIlxuICAgIH0pKVxuICB9KTtcblxuICB2YXIgQ2FyZCA9IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVSUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgQ2FyZEltcGwkMSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2FyZEltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2FyZEltcGwocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcmRJbXBsKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2FyZEltcGwpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uRXZlbnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5wcm9wcy5yZXNwb25zaXZlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PSAnZHJhZ1N0YXJ0Jykge1xuICAgICAgICAgIF90aGlzLm9iai5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oX3RoaXMub2JqLnBvc2l0aW9uKS50byh7XG4gICAgICAgICAgICB5OiBfdGhpcy5vcmlnaW5hbFkgKyAwLjVcbiAgICAgICAgICB9LCAxMDApLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dCkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2RyYWdFbmQnKSB7XG4gICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKF90aGlzLm9iai5wb3NpdGlvbikudG8oe1xuICAgICAgICAgICAgeTogX3RoaXMub3JpZ2luYWxZXG4gICAgICAgICAgfSwgMTAwKS5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vYmouY2FzdFNoYWRvdyA9IGZhbHNlO1xuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlID09ICdkcmFnJykge1xuICAgICAgICAgIF90aGlzLm9iai5wb3NpdGlvbi54ID0gZS5wb2ludC54O1xuICAgICAgICAgIF90aGlzLm9iai5wb3NpdGlvbi56ID0gZS5wb2ludC56O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub3JpZ2luYWxZID0gcHJvcHMudGhpY2tuZXNzIC8gMiAtIDAuMDAwMTtcbiAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShwcm9wcy53aWR0aCwgcHJvcHMudGhpY2tuZXNzLCBwcm9wcy5oZWlnaHQpO1xuICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgIGNvbG9yOiAweDc3Nzc3N1xuICAgICAgfTtcblxuICAgICAgaWYgKHByb3BzLmltYWdlKSB7XG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgbWFwOiBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQocHJvcHMuaW1hZ2UpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKG9wdHMpO1xuICAgICAgX3RoaXMub2JqID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIF90aGlzLm9iai5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgIF90aGlzLm9iai5wb3NpdGlvbi55ID0gX3RoaXMub3JpZ2luYWxZO1xuICAgICAgX3RoaXMub2JqLnVzZXJEYXRhLmRyYWdnYWJsZSA9IHByb3BzLmRyYWdnYWJsZTtcbiAgICAgIF90aGlzLm9iai51c2VyRGF0YS5yZXNwb25zaXZlID0gcHJvcHMucmVzcG9uc2l2ZTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FyZEltcGwsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250ZXh0LmFkZCh0aGlzLm9iaiwgdGhpcy5vbkV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250ZXh0LnJlbW92ZSh0aGlzLm9iaik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ueCA9IHRoaXMucHJvcHMueCArIHRoaXMucHJvcHMuc3BsYXlYO1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi56ID0gdGhpcy5wcm9wcy56ICsgdGhpcy5wcm9wcy5zcGxheVo7XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnkgPSB0aGlzLm9yaWdpbmFsWSArIHRoaXMucHJvcHMuc3BsYXlZO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FyZEltcGw7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBfZGVmaW5lUHJvcGVydHkoQ2FyZEltcGwkMSwgXCJwcm9wVHlwZXNcIiwge1xuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGhpY2tuZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlc3BvbnNpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRyYWdnYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB6OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNwbGF5WDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzcGxheVk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3BsYXlaOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShDYXJkSW1wbCQxLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgc3BsYXlYOiAwLFxuICAgIHNwbGF5WTogMCxcbiAgICBzcGxheVo6IDAsXG4gICAgeDogMCxcbiAgICB6OiAwLFxuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMS41LFxuICAgIHRoaWNrbmVzczogMC4wMVxuICB9KTtcblxuICB2YXIgQ2FyZCQxID0gZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRJbXBsJDEsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIENhcmQkMiA9IGZ1bmN0aW9uIENhcmQkJDEocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVSUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gY29udGV4dC50aHJlZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpIDogUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuICBDYXJkJDIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG5cbiAgdmFyIGNzcyQyID0gXCIvKlxcbiAqIENvcHlyaWdodCAyMDE3IFRoZSBib2FyZGdhbWUuaW8gQXV0aG9yc1xcbiAqXFxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cXG4gKi9cXG5cXG4uYmdpby1kZWNrIHtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxufVxcblwiO1xuICBzdHlsZUluamVjdChjc3MkMik7XG5cbiAgdmFyIERlY2tJbXBsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEZWNrSW1wbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEZWNrSW1wbChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVja0ltcGwpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihEZWNrSW1wbCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25DbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYXJkcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgdG9wQ2FyZFByb3BzID0gbnVsbDtcblxuICAgICAgICBpZiAoY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRvcENhcmRQcm9wcyA9IGNhcmRzW2NhcmRzLmxlbmd0aCAtIDFdLnByb3BzO1xuXG4gICAgICAgICAgX3RoaXMucHJvcHMub25DbGljayh0b3BDYXJkUHJvcHMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25Ecm9wXCIsIGZ1bmN0aW9uIChjYXJkRGF0YSkge1xuICAgICAgICAvLyBEb24ndCBmaXJlIG9uRHJvcCBpZiB0aGUgdG9wIGNhcmQgb2YgdGhpcyBkZWNrIHdhc1xuICAgICAgICAvLyBkcmFnZ2VkIGF3YXkgYW5kIHRoZW4gZHJvcHBlZCBiYWNrLlxuICAgICAgICB2YXIgaXNDaGlsZCA9IGZhbHNlO1xuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKF90aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2FyZCkge1xuICAgICAgICAgIGlmIChjYXJkRGF0YSAhPT0gdW5kZWZpbmVkICYmIGNhcmQucHJvcHMuZGF0YSA9PT0gY2FyZERhdGEpIHtcbiAgICAgICAgICAgIGlzQ2hpbGQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc0NoaWxkKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25Ecm9wKGNhcmREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmlkID0gcHJvcHMuY29udGV4dC5nZW5JRCgpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEZWNrSW1wbCwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjYXJkSW5kZXggPSAwO1xuICAgICAgICB2YXIgY2FyZHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNhcmQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNhcmQsIHtcbiAgICAgICAgICAgIGRyYWdab25lOiBfdGhpczIucHJvcHMuZHJhZ1pvbmUsXG4gICAgICAgICAgICBpbkRlY2s6IHRydWUsXG4gICAgICAgICAgICBkZWNrUG9zaXRpb246IGNhcmRJbmRleCsrXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3REcmFndGFzdGljLkRyb3BwYWJsZSwge1xuICAgICAgICAgIGFjY2VwdHM6IHRoaXMucHJvcHMuZHJhZ1pvbmUsXG4gICAgICAgICAgb25Ecm9wOiB0aGlzLm9uRHJvcFxuICAgICAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBldmVudHMgPSBfcmVmLmV2ZW50cztcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZXZlbnRzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IF90aGlzMi5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgcGFkZGluZzogX3RoaXMyLnByb3BzLnBhZGRpbmcsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTQwcHgnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksIGNhcmRzKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEZWNrSW1wbDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShEZWNrSW1wbCwgXCJwcm9wVHlwZXNcIiwge1xuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5hbnksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzcGxheVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRyYWdab25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShEZWNrSW1wbCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIHBhZGRpbmc6IDEwLFxuICAgIHNwbGF5V2lkdGg6IDMsXG4gICAgZHJhZ1pvbmU6ICdiZ2lvLWNhcmQnLFxuICAgIG9uRHJvcDogZnVuY3Rpb24gb25Ecm9wKCkge30sXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9XG4gIH0pO1xuXG4gIHZhciBEZWNrID0gZnVuY3Rpb24gRGVjayhwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERlY2tJbXBsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBEZWNrSW1wbCQxID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEZWNrSW1wbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEZWNrSW1wbChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVja0ltcGwpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihEZWNrSW1wbCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic3RhdGVcIiwge1xuICAgICAgICBpc0hpZ2hsaWdodGVkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkV2ZW50XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2Ryb3AnKSB7XG4gICAgICAgICAgZS53aGF0WzBdLnBvc2l0aW9uLnggPSAtMjtcbiAgICAgICAgICBlLndoYXRbMF0ucG9zaXRpb24ueiA9IDA7XG4gICAgICAgICAgZS53aGF0WzBdLnBvc2l0aW9uLnkgKz0gMjAgKiAwLjAyO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub3JpZ2luYWxZID0gcHJvcHMudGhpY2tuZXNzIC8gMiAtIDAuMDAwMTtcbiAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShwcm9wcy53aWR0aCwgcHJvcHMudGhpY2tuZXNzLCBwcm9wcy5oZWlnaHQpO1xuICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgICBjb2xvcjogMHhjY2NjY2NcbiAgICAgIH0pO1xuICAgICAgX3RoaXMub2JqID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgIF90aGlzLm9iai51c2VyRGF0YS5kcm9wcGFibGUgPSB0cnVlO1xuICAgICAgX3RoaXMub2JqLnVzZXJEYXRhLnJlc3BvbnNpdmUgPSB0cnVlO1xuICAgICAgX3RoaXMub2JqLnBvc2l0aW9uLnkgPSBfdGhpcy5vcmlnaW5hbFk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERlY2tJbXBsLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGV4dC5hZGQodGhpcy5vYmosIHRoaXMub25FdmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGV4dC5yZW1vdmUodGhpcy5vYmopO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnggPSAtMjtcbiAgICAgICAgdmFyIGNhcmRzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgY2FyZHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQkMSwge1xuICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICB4OiAtMixcbiAgICAgICAgICAgIHNwbGF5WTogaSAqIDAuMDJcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FyZHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERlY2tJbXBsO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KERlY2tJbXBsJDEsIFwicHJvcFR5cGVzXCIsIHtcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRoaWNrbmVzczogUHJvcFR5cGVzLm51bWJlclxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoRGVja0ltcGwkMSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMS41LFxuICAgIHRoaWNrbmVzczogMC4wMVxuICB9KTtcblxuICB2YXIgRGVjayQxID0gZnVuY3Rpb24gRGVjayhwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERlY2tJbXBsJDEsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIERlY2skMiA9IGZ1bmN0aW9uIERlY2skJDEocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVSUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gY29udGV4dC50aHJlZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjayQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpIDogUmVhY3QuY3JlYXRlRWxlbWVudChEZWNrLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuICBEZWNrJDIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG5cbiAgLyoqXG4gICAqIEdyaWRcbiAgICpcbiAgICogQ29tcG9uZW50IHRoYXQgd2lsbCBzaG93IGNoaWxkcmVuIG9uIGEgY2FydGVzaWFuIHJlZ3VsYXIgZ3JpZC5cbiAgICpcbiAgICogUHJvcHM6XG4gICAqICAgcm93cyAgICAgICAtIE51bWJlciBvZiByb3dzIChoZWlnaHQpIG9mIHRoZSBncmlkLlxuICAgKiAgIGNvbHMgICAgICAgLSBOdW1iZXIgb2YgY29sdW1ucyAod2lkdGgpIG9mIHRoZSBncmlkLlxuICAgKiAgIHN0eWxlICAgICAgLSBDU1Mgc3R5bGUgb2YgdGhlIEdyaWQgSFRNTCBlbGVtZW50LlxuICAgKiAgIGNvbG9yTWFwICAgLSBBIG1hcCBmcm9tICd4LHknID0+IGNvbG9yLlxuICAgKiAgIG9uQ2xpY2sgICAgLSAoeCwgeSkgPT4ge31cbiAgICogICAgICAgICAgICAgICAgQ2FsbGVkIHdoZW4gYSBzcXVhcmUgaXMgY2xpY2tlZC5cbiAgICogICBvbk1vdXNlT3ZlciAgICAtICh4LCB5KSA9PiB7fVxuICAgKiAgICAgICAgICAgICAgICBDYWxsZWQgd2hlbiBhIHNxdWFyZSBpcyBtb3VzZSBvdmVyLlxuICAgKiAgIG9uTW91c2VPdXQgICAgLSAoeCwgeSkgPT4ge31cbiAgICogICAgICAgICAgICAgICAgQ2FsbGVkIHdoZW4gYSBzcXVhcmUgaXMgbW91c2Ugb3V0LlxuICAgKlxuICAgKiBVc2FnZTpcbiAgICpcbiAgICogPEdyaWQgcm93cz17OH0gY29scz17OH0+XG4gICAqICAgPFRva2VuIHg9ezF9IHk9ezJ9Lz5cbiAgICogPC9HcmlkPlxuICAgKi9cblxuICB2YXIgR3JpZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoR3JpZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBHcmlkKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWQpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEdyaWQpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfc3ZnUmVmXCIsIFJlYWN0LmNyZWF0ZVJlZigpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uQ2xpY2tcIiwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VPdmVyXCIsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcikge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VPdmVyKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VPdXRcIiwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VPdXQpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlT3V0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhHcmlkLCBbe1xuICAgICAga2V5OiBcIl9nZXRDZWxsQ29sb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2VsbENvbG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KHgsIFwiLFwiKS5jb25jYXQoeSk7XG4gICAgICAgIHZhciBjb2xvciA9ICd3aGl0ZSc7XG5cbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnByb3BzLmNvbG9yTWFwKSB7XG4gICAgICAgICAgY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yTWFwW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXRHcmlkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEdyaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5vdXRsaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3F1YXJlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5wcm9wcy5jb2xzOyB4KyspIHtcbiAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMucHJvcHMucm93czsgeSsrKSB7XG4gICAgICAgICAgICBzcXVhcmVzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChTcXVhcmUsIHtcbiAgICAgICAgICAgICAga2V5OiB0aGlzLnByb3BzLmNvbHMgKiB5ICsgeCxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLl9nZXRDZWxsQ29sb3IoeCwgeSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5jZWxsU2l6ZSxcbiAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICAgICAgb25Nb3VzZU91dDogdGhpcy5vbk1vdXNlT3V0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNxdWFyZXM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRva2VucyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogU3F1YXJlLFxuICAgICAgICAgICAgLy8gT3ZlcndyaXRlcyBUb2tlbidzIG9uQ2xpY2ssIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0XG4gICAgICAgICAgICBvbkNsaWNrOiBfdGhpczIub25DbGljayxcbiAgICAgICAgICAgIG9uTW91c2VPdmVyOiBfdGhpczIub25Nb3VzZU92ZXIsXG4gICAgICAgICAgICBvbk1vdXNlT3V0OiBfdGhpczIub25Nb3VzZU91dCxcbiAgICAgICAgICAgIHN2Z1JlZjogX3RoaXMyLl9zdmdSZWZcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgICByZWY6IHRoaXMuX3N2Z1JlZixcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwICcgKyB0aGlzLnByb3BzLmNvbHMgKyAnICcgKyB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgdGhpcy5fZ2V0R3JpZCgpKSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR3JpZDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuICAvKipcbiAgICogU3F1YXJlXG4gICAqXG4gICAqIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBzcXVhcmUgaW5zaWRlIGEgR3JpZC5cbiAgICpcbiAgICogUHJvcHM6XG4gICAqICAgeCAgICAgICAtIFggY29vcmRpbmF0ZSBvbiBncmlkIGNvb3JkaW5hdGVzLlxuICAgKiAgIHkgICAgICAgLSBZIGNvb3JkaW5hdGUgb24gZ3JpZCBjb29yZGluYXRlcy5cbiAgICogICBzaXplICAgIC0gU3F1YXJlIHNpemUuXG4gICAqICAgc3R5bGUgICAtIEN1c3RvbSBzdHlsaW5nLlxuICAgKiAgIG9uQ2xpY2sgLSBJbnZva2VkIHdoZW4gYSBTcXVhcmUgaXMgY2xpY2tlZC5cbiAgICogICBvbk1vdXNlT3ZlciAtIEludm9rZWQgd2hlbiBhIFNxdWFyZSBpcyBtb3VzZSBvdmVyLlxuICAgKiAgIG9uTW91c2VPdXQgLSBJbnZva2VkIHdoZW4gYSBTcXVhcmUgaXMgbW91c2Ugb3V0LlxuICAgKiAgIGV2ZW50TGlzdGVuZXJzIC0gQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIG5hbWUgYW5kIGNhbGxiYWNrXG4gICAqICAgZm9yIERPTSBldmVudHMuXG4gICAqXG4gICAqIE5vdCBtZWFudCB0byBiZSB1c2VkIGJ5IHRoZSBlbmQgdXNlciBkaXJlY3RseSAodXNlIFRva2VuKS5cbiAgICogQWxzbyBub3QgZXhwb3NlZCBpbiB0aGUgTlBNLlxuICAgKi9cblxuICBfZGVmaW5lUHJvcGVydHkoR3JpZCwgXCJwcm9wVHlwZXNcIiwge1xuICAgIHJvd3M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29sb3JNYXA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2VsbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksIFByb3BUeXBlcy5lbGVtZW50XSlcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KEdyaWQsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBjb2xvck1hcDoge30sXG4gICAgb3V0bGluZTogdHJ1ZSxcbiAgICBjZWxsU2l6ZTogMVxuICB9KTtcblxuICB2YXIgU3F1YXJlID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHMoU3F1YXJlLCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBTcXVhcmUoKSB7XG4gICAgICB2YXIgX2dldFByb3RvdHlwZU9mMztcblxuICAgICAgdmFyIF90aGlzMztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNxdWFyZSk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YzID0gX2dldFByb3RvdHlwZU9mKFNxdWFyZSkpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMywgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpLCBcIl9nUmVmXCIsIFJlYWN0LmNyZWF0ZVJlZigpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKF90aGlzMy5nZXRDb29yZHMoKSwgZSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSwgXCJvbk1vdXNlT3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMucHJvcHMub25Nb3VzZU92ZXIoX3RoaXMzLmdldENvb3JkcygpLCBlKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpLCBcIm9uTW91c2VPdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uTW91c2VPdXQoX3RoaXMzLmdldENvb3JkcygpLCBlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXMzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTcXVhcmUsIFt7XG4gICAgICBrZXk6IFwiZ2V0Q29vcmRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHRoaXMucHJvcHMueCxcbiAgICAgICAgICB5OiB0aGlzLnByb3BzLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9nUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMucHJvcHMuZXZlbnRMaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci5uYW1lLCBsaXN0ZW5lci5jYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZ1JlZi5jdXJyZW50O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5wcm9wcy5ldmVudExpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyLm5hbWUsIGxpc3RlbmVyLmNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHR4ID0gdGhpcy5wcm9wcy54ICogdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICB2YXIgdHkgPSB0aGlzLnByb3BzLnkgKiB0aGlzLnByb3BzLnNpemU7IC8vIElmIG5vIGNoaWxkLCByZW5kZXIgYSBzcXVhcmUuXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemUsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUsXG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH0pOyAvLyBJZiBhIGNoaWxkIGlzIHBhc3NlZCwgcmVuZGVyIGNoaWxkLlxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICAgICAgICByZWY6IHRoaXMuX2dSZWYsXG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiB0aGlzLm9uTW91c2VPdmVyLFxuICAgICAgICAgIG9uTW91c2VPdXQ6IHRoaXMub25Nb3VzZU91dCxcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0eCwgXCIsIFwiKS5jb25jYXQodHksIFwiKVwiKVxuICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNxdWFyZTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShTcXVhcmUsIFwicHJvcFR5cGVzXCIsIHtcbiAgICB4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgeTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50TGlzdGVuZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShTcXVhcmUsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBzaXplOiAxLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBzdHlsZToge1xuICAgICAgZmlsbDogJyNmZmYnXG4gICAgfSxcbiAgICBldmVudExpc3RlbmVyczogW11cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdyaWRcbiAgICpcbiAgICogQ29tcG9uZW50IHRoYXQgd2lsbCBzaG93IGNoaWxkcmVuIG9uIGEgY2FydGVzaWFuIHJlZ3VsYXIgZ3JpZC5cbiAgICpcbiAgICogUHJvcHM6XG4gICAqICAgcm93cyAgICAgICAtIE51bWJlciBvZiByb3dzIChoZWlnaHQpIG9mIHRoZSBncmlkLlxuICAgKiAgIGNvbHMgICAgICAgLSBOdW1iZXIgb2YgY29sdW1ucyAod2lkdGgpIG9mIHRoZSBncmlkLlxuICAgKiAgIGNlbGxTaXplICAgLSBTaXplIG9mIGEgc3F1YXJlLlxuICAgKiAgIHRoaWNobmVzcyAgLSBUaGljaG5lc3Mgb2YgYSBzcXVhcmUuXG4gICAqICAgcGFkZGluZyAgICAtIFBhZGRpbmcgYmV0d2VlbiBzcXVhcmVzLlxuICAgKiAgIGNvbG9yTWFwICAgLSBBIG1hcCBmcm9tICd4LHknID0+IGNvbG9yLlxuICAgKiAgIG9uQ2xpY2sgICAgLSAoeCwgeSkgPT4ge31cbiAgICogICAgICAgICAgICAgICAgQ2FsbGVkIHdoZW4gYSBzcXVhcmUgaXMgY2xpY2tlZC5cbiAgICogICBvbk1vdXNlT3ZlciAgICAtICh4LCB5KSA9PiB7fVxuICAgKiAgICAgICAgICAgICAgICBDYWxsZWQgd2hlbiBhIHNxdWFyZSBpcyBtb3VzZSBvdmVyLlxuICAgKiAgIG9uTW91c2VPdXQgICAgLSAoeCwgeSkgPT4ge31cbiAgICogICAgICAgICAgICAgICAgQ2FsbGVkIHdoZW4gYSBzcXVhcmUgaXMgbW91c2Ugb3V0LlxuICAgKlxuICAgKiBVc2FnZTpcbiAgICpcbiAgICogPEdyaWQgcm93cz17OH0gY29scz17OH0+XG4gICAqICAgPFRva2VuIHg9ezF9IHk9ezJ9Lz5cbiAgICogPC9HcmlkPlxuICAgKi9cblxuICB2YXIgR3JpZCQxID0gZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWRJbXBsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBHcmlkSW1wbCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoR3JpZEltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gR3JpZEltcGwocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRJbXBsKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoR3JpZEltcGwpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICAgIF90aGlzLmJvYXJkR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgIF90aGlzLnRva2VuR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcblxuICAgICAgX3RoaXMuYm9hcmRHcm91cC5hZGQoX3RoaXMudG9rZW5Hcm91cCk7IC8vIHRyYW5zbGF0ZSB0aGUgYm9hcmQgdG8gY2VudGVyIG9uICgwLDAsMClcblxuXG4gICAgICBfdGhpcy5ib2FyZEdyb3VwLnRyYW5zbGF0ZVgoLShfdGhpcy5wcm9wcy5wYWRkaW5nICsgX3RoaXMucHJvcHMuY2VsbFNpemUpICogKF90aGlzLnByb3BzLmNvbHMgLSAxKSAvIDIpO1xuXG4gICAgICBfdGhpcy5ib2FyZEdyb3VwLnRyYW5zbGF0ZVooLShfdGhpcy5wcm9wcy5wYWRkaW5nICsgX3RoaXMucHJvcHMuY2VsbFNpemUpICogKF90aGlzLnByb3BzLnJvd3MgLSAxKSAvIDIpO1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdyaWRJbXBsLCBbe1xuICAgICAga2V5OiBcIl9nZXRDZWxsQ29sb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2VsbENvbG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KHgsIFwiLFwiKS5jb25jYXQoeSk7XG4gICAgICAgIHZhciBjb2xvciA9ICcjNzc3Nzc3JztcblxuICAgICAgICBpZiAoa2V5IGluIHRoaXMucHJvcHMuY29sb3JNYXApIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMucHJvcHMuY29sb3JNYXBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlbW92ZSh0aGlzLmJvYXJkR3JvdXApO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucHJvcHMuY29udGV4dDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZCh0aGlzLmJvYXJkR3JvdXApOyAvLyB3aGVuIHJlcmVuZGVyaW5nLCByZW5kZXIgYSBuZXcgc3F1YXJlR3JvdXBcblxuICAgICAgICB0aGlzLmJvYXJkR3JvdXAucmVtb3ZlKHRoaXMuc3F1YXJlR3JvdXApO1xuICAgICAgICB0aGlzLnNxdWFyZUdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIHRoaXMuYm9hcmRHcm91cC5hZGQodGhpcy5zcXVhcmVHcm91cCk7IC8vIGFkZCBzcXVhcmUgYmFzZVxuXG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHgpIHtcbiAgICAgICAgICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKHkpIHtcbiAgICAgICAgICAgIHZhciBzcXVhcmVQcm9wcyA9IHtcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgc2l6ZTogX3RoaXMyLnByb3BzLmNlbGxTaXplLFxuICAgICAgICAgICAgICBjb2xvcjogX3RoaXMyLl9nZXRDZWxsQ29sb3IoeCwgeSksXG4gICAgICAgICAgICAgIHBhZGRpbmc6IF90aGlzMi5wcm9wcy5wYWRkaW5nLFxuICAgICAgICAgICAgICB0aGlja25lc3M6IF90aGlzMi5wcm9wcy50aGlja25lc3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3F1YXJlID0gbmV3IFNxdWFyZSQxKHNxdWFyZVByb3BzKTtcblxuICAgICAgICAgICAgX3RoaXMyLnNxdWFyZUdyb3VwLmFkZChzcXVhcmUpO1xuXG4gICAgICAgICAgICB2YXIgb25FdmVudCA9IGZ1bmN0aW9uIG9uRXZlbnQoZSkge1xuICAgICAgICAgICAgICBpZiAoZS50eXBlID09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm9uQ2xpY2spIF90aGlzMi5wcm9wcy5vbkNsaWNrKHtcbiAgICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09ICdtb3VzZU92ZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5vbk1vdXNlT3ZlcikgX3RoaXMyLnByb3BzLm9uTW91c2VPdmVyKHtcbiAgICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09ICdtb3VzZU91dCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm9uTW91c2VPdXQpIF90aGlzMi5wcm9wcy5vbk1vdXNlT3V0KHtcbiAgICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF90aGlzMi5jb250ZXh0LnJlZ0NhbGwoc3F1YXJlLCBvbkV2ZW50KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBfdGhpczIucHJvcHMucm93czsgeSsrKSB7XG4gICAgICAgICAgICBfbG9vcDIoeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5wcm9wcy5jb2xzOyB4KyspIHtcbiAgICAgICAgICBfbG9vcCh4KTtcbiAgICAgICAgfSAvLyBzZXQgdG9rZW5zXG5cblxuICAgICAgICB2YXIgdG9rZW5zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHRocmVlOiB0cnVlLFxuICAgICAgICAgICAgYm9hcmRTaXplOiBfdGhpczIucHJvcHMuY2VsbFNpemUsXG4gICAgICAgICAgICBwYXJlbnQ6IF90aGlzMi50b2tlbkdyb3VwLFxuICAgICAgICAgICAgcGFkZGluZzogX3RoaXMyLnByb3BzLnBhZGRpbmcsXG4gICAgICAgICAgICBsaWZ0OiBfdGhpczIucHJvcHMudGhpY2tuZXNzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0b2tlbnMpIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdyaWRJbXBsO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG4gIC8qKlxuICAgKiBTcXVhcmVcbiAgICpcbiAgICogQ29tcG9uZW50IHRoYXQgcmVuZGVycyBhIHNxdWFyZSBpbnNpZGUgYSBHcmlkLlxuICAgKlxuICAgKiBQcm9wc1xuICAgKiAgIHggICAgICAgICAgLSBYIGNvb3JkaW5hdGUgb24gZ3JpZCBjb29yZGluYXRlcy5cbiAgICogICB5ICAgICAgICAgIC0gWSBjb29yZGluYXRlIG9uIGdyaWQgY29vcmRpbmF0ZXMuXG4gICAqICAgc2l6ZSAgICAgICAtIFNxdWFyZSBzaXplLlxuICAgKiAgIGNvbG9yICAgICAgLSBDb2xvciBvZiB0aGUgc3F1YXJlXG4gICAqICAgdGhpY2huZXNzICAtIFRoaWNobmVzcyBvZiBhIHNxdWFyZS5cbiAgICogICBwYWRkaW5nICAgIC0gUGFkZGluZyBiZXR3ZWVuIHNxdWFyZXMuXG4gICAqXG4gICAqIE5vdCBtZWFudCB0byBiZSB1c2VkIGJ5IHRoZSBlbmQgdXNlciBkaXJlY3RseSAodXNlIFRva2VuKS5cbiAgICogQWxzbyBub3QgZXhwb3NlZCBpbiB0aGUgTlBNLlxuICAgKi9cblxuXG4gIF9kZWZpbmVQcm9wZXJ0eShHcmlkSW1wbCwgXCJwcm9wVHlwZXNcIiwge1xuICAgIHJvd3M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY2VsbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGhpY2tuZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sb3JNYXA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5hbnksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSwgUHJvcFR5cGVzLmVsZW1lbnRdKVxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoR3JpZEltcGwsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBjb2xvck1hcDoge30sXG4gICAgY2VsbFNpemU6IDEsXG4gICAgcGFkZGluZzogMC4xLFxuICAgIHRoaWNrbmVzczogMC4xXG4gIH0pO1xuXG4gIHZhciBTcXVhcmUkMSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9USFJFRSRNZXNoKSB7XG4gICAgX2luaGVyaXRzKFNxdWFyZSwgX1RIUkVFJE1lc2gpO1xuXG4gICAgZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3F1YXJlKTtcblxuICAgICAgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNxdWFyZSkuY2FsbCh0aGlzKSk7XG4gICAgICBfdGhpczMudXNlckRhdGEgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxuICAgICAgfSwgcHJvcHMpO1xuICAgICAgcHJvcHMgPSBfdGhpczMudXNlckRhdGE7XG4gICAgICBfdGhpczMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkocHJvcHMuc2l6ZSwgcHJvcHMudGhpY2tuZXNzLCBwcm9wcy5zaXplKTtcbiAgICAgIF90aGlzMy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgICB9KTtcbiAgICAgIF90aGlzMy5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblxuICAgICAgX3RoaXMzLnRyYW5zbGF0ZVgoX3RoaXMzLnVzZXJEYXRhLnggKiAocHJvcHMuc2l6ZSArIHByb3BzLnBhZGRpbmcpKTtcblxuICAgICAgX3RoaXMzLnRyYW5zbGF0ZVooX3RoaXMzLnVzZXJEYXRhLnkgKiAocHJvcHMuc2l6ZSArIHByb3BzLnBhZGRpbmcpKTtcblxuICAgICAgX3RoaXMzLnRyYW5zbGF0ZVkoX3RoaXMzLnVzZXJEYXRhLnRoaWNrbmVzcyAvIDIpO1xuXG4gICAgICByZXR1cm4gX3RoaXMzO1xuICAgIH1cblxuICAgIHJldHVybiBTcXVhcmU7XG4gIH0oVEhSRUUuTWVzaCk7XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIHZhciBHcmlkJDIgPSBmdW5jdGlvbiBHcmlkJCQxKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRocmVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkJDEsIHByb3BzLCBwcm9wcy5jaGlsZHJlbikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG4gIH07XG4gIEdyaWQkMi5wcm9wVHlwZXMgPSB7XG4gICAgdGhyZWU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG4gIHZhciBTcXVhcmUkMiA9IGZ1bmN0aW9uIFNxdWFyZSQkMShwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50aHJlZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3F1YXJlJDEsIHByb3BzLCBwcm9wcy5jaGlsZHJlbikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFNxdWFyZSwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcbiAgU3F1YXJlJDIucHJvcFR5cGVzID0ge1xuICAgIHRocmVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxuICB9O1xuXG4gIC8qKlxuICAgKiBIZXhHcmlkXG4gICAqXG4gICAqIENvbXBvbmVudCB0byBkaXNwbGF5IGEgaGV4IGdyaWQuXG4gICAqIFJlZmVyZW5jZTogaHR0cHM6Ly93d3cucmVkYmxvYmdhbWVzLmNvbS9ncmlkcy9oZXhhZ29ucy8uXG4gICAqXG4gICAqIFdlIHVzZSBjdWJlIGNvLW9yZGluYXRlcyAoc2VlIHJlZmVyZW5jZSkuXG4gICAqXG4gICAqIFByb3BzOlxuICAgKiAgIGxldmVscyAgICAgLSBUaGUgbnVtYmVyIG9mIGxldmVscyBhcm91bmQgdGhlIGNlbnRyYWwgaGV4LlxuICAgKiAgIHN0eWxlICAgICAgLSBDU1Mgc3R5bGUgb2YgdGhlIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogVXNhZ2U6XG4gICAqXG4gICAqIDxIZXhHcmlkIGxldmVscz17NX0+XG4gICAqICAgPFRva2VuIHg9ezB9IHk9ezB9IHo9ezB9Lz5cbiAgICogPC9IZXhHcmlkPlxuICAgKi9cblxuICB2YXIgSGV4R3JpZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoSGV4R3JpZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBIZXhHcmlkKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhleEdyaWQpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEhleEdyaWQpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfc3ZnUmVmXCIsIFJlYWN0LmNyZWF0ZVJlZigpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uQ2xpY2tcIiwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VPdmVyXCIsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcikge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VPdmVyKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTW91c2VPdXRcIiwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VPdXQpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlT3V0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhIZXhHcmlkLCBbe1xuICAgICAga2V5OiBcIl9nZXRDZWxsQ29sb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2VsbENvbG9yKHgsIHksIHopIHtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KHgsIFwiLFwiKS5jb25jYXQoeSwgXCIsXCIpLmNvbmNhdCh6KTtcbiAgICAgICAgdmFyIGNvbG9yID0gJ3doaXRlJztcblxuICAgICAgICBpZiAoa2V5IGluIHRoaXMucHJvcHMuY29sb3JNYXApIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMucHJvcHMuY29sb3JNYXBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2dldEdyaWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0R3JpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLm91dGxpbmUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoZXhlcyA9IFtdO1xuICAgICAgICB2YXIgciA9IHRoaXMucHJvcHMubGV2ZWxzO1xuXG4gICAgICAgIGZvciAodmFyIHggPSAtcjsgeCA8PSByOyB4KyspIHtcbiAgICAgICAgICBmb3IgKHZhciB5ID0gLXI7IHkgPD0gcjsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgeiA9IC14IC0geTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh6KSA+IHIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaGV4ZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KEhleCwge1xuICAgICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KHgsIFwiOlwiKS5jb25jYXQoeSwgXCI6XCIpLmNvbmNhdCh6KSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLl9nZXRDZWxsQ29sb3IoeCwgeSwgeilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgejogeixcbiAgICAgICAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5jZWxsU2l6ZSxcbiAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICAgICAgb25Nb3VzZU91dDogdGhpcy5vbk1vdXNlT3V0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhleGVzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciB0b2tlbnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgdGVtcGxhdGU6IEhleCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMi5vbkNsaWNrLFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI6IF90aGlzMi5vbk1vdXNlT3ZlcixcbiAgICAgICAgICAgIG9uTW91c2VPdXQ6IF90aGlzMi5vbk1vdXNlT3V0LFxuICAgICAgICAgICAgc3ZnUmVmOiBfdGhpczIuX3N2Z1JlZlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnByb3BzLmNlbGxTaXplICogdGhpcy5wcm9wcy5sZXZlbHMgKiAyO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLl9zdmdSZWYsXG4gICAgICAgICAgdmlld0JveDogLXQgKyAnICcgKyAtdCArICcgJyArIDIgKiB0ICsgJyAnICsgMiAqIHQsXG4gICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgdGhpcy5fZ2V0R3JpZCgpKSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSGV4R3JpZDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuICAvKipcbiAgICogSGV4IChmbGF0LXRvcHBlZCkuXG4gICAqXG4gICAqIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBoZXhhZ29uIGluc2lkZSBhIEhleEdyaWQuXG4gICAqXG4gICAqIFByb3BzOlxuICAgKiAgIHggICAgICAgLSBYIGNvb3JkaW5hdGUgKGN1YmUgY29vcmRpbmF0ZXMpLlxuICAgKiAgIHkgICAgICAgLSBZIGNvb3JkaW5hdGUgKGN1YmUgY29vcmRpbmF0ZXMpLlxuICAgKiAgIHogICAgICAgLSBaIGNvb3JkaW5hdGUgKGN1YmUgY29vcmRpbmF0ZXMpLlxuICAgKiAgIHNpemUgICAgLSBIZXggc2l6ZS5cbiAgICogICBzdHlsZSAgIC0gQ3VzdG9tIHN0eWxpbmcuXG4gICAqICAgb25DbGljayAtIEludm9rZWQgd2hlbiBhIEhleCBpcyBjbGlja2VkLlxuICAgKiAgIG9uTW91c2VPdmVyIC0gSW52b2tlZCB3aGVuIGEgSGV4IGlzIG1vdXNlIG92ZXIuXG4gICAqICAgb25Nb3VzZU91dCAtIEludm9rZWQgd2hlbiBhIEhleCBpcyBtb3VzZSBvdXQuXG4gICAqICAgZXZlbnRMaXN0ZW5lcnMgLSBBcnJheSBvZiBvYmplY3RzIHdpdGggbmFtZSBhbmQgY2FsbGJhY2tcbiAgICogICBmb3IgRE9NIGV2ZW50cy5cbiAgICpcbiAgICogTm90IG1lYW50IHRvIGJlIHVzZWQgYnkgdGhlIGVuZCB1c2VyIGRpcmVjdGx5ICh1c2UgVG9rZW4pLlxuICAgKiBBbHNvIG5vdCBleHBvc2VkIGluIHRoZSBOUE0uXG4gICAqL1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShIZXhHcmlkLCBcInByb3BUeXBlc1wiLCB7XG4gICAgbGV2ZWxzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29sb3JNYXA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2VsbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksIFByb3BUeXBlcy5lbGVtZW50XSlcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KEhleEdyaWQsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBsZXZlbHM6IDUsXG4gICAgY29sb3JNYXA6IHt9LFxuICAgIG91dGxpbmU6IHRydWUsXG4gICAgY2VsbFNpemU6IDFcbiAgfSk7XG5cbiAgdmFyIEhleCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKEhleCwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gSGV4KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGV4KTtcblxuICAgICAgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEhleCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpLCBcIl9nUmVmXCIsIFJlYWN0LmNyZWF0ZVJlZigpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKF90aGlzMy5nZXRDb29yZHMoKSwgZSk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSwgXCJvbk1vdXNlT3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMucHJvcHMub25Nb3VzZU92ZXIoX3RoaXMzLmdldENvb3JkcygpLCBlKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpLCBcIm9uTW91c2VPdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uTW91c2VPdXQoX3RoaXMzLmdldENvb3JkcygpLCBlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXMzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhIZXgsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9nUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMucHJvcHMuZXZlbnRMaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci5uYW1lLCBsaXN0ZW5lci5jYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZ1JlZi5jdXJyZW50O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5wcm9wcy5ldmVudExpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyLm5hbWUsIGxpc3RlbmVyLmNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldENvb3Jkc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiB0aGlzLnByb3BzLngsXG4gICAgICAgICAgeTogdGhpcy5wcm9wcy55LFxuICAgICAgICAgIHo6IHRoaXMucHJvcHMuelxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciB0eCA9IHRoaXMuY2VudGVyLng7XG4gICAgICAgIHZhciB0eSA9IHRoaXMuY2VudGVyLnk7IC8vIElmIG5vIGNoaWxkLCByZW5kZXIgYSBoZXguXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInBvbHlnb25cIiwge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICAgICAgc3Ryb2tlOiBcIiNhYWFcIixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMVxuICAgICAgICB9KTsgLy8gSWYgYSBjaGlsZCBpcyBwYXNzZWQsIHJlbmRlciBjaGlsZC5cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLl9nUmVmLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLm9uTW91c2VPdXQsXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQodHgsIFwiLCBcIikuY29uY2F0KHR5LCBcIilcIilcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ3aWR0aFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNpemUgKiAyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJoZWlnaHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gKE1hdGguc3FydCgzKSAvIDIgKiB0aGlzLndpZHRoKS50b0ZpeGVkKDMpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIGNvLW9yZGluYXRlcyBvZiB0aGUgaGV4IGNlbnRlci5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNlbnRlclwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBxID0gdGhpcy5wcm9wcy54O1xuICAgICAgICB2YXIgciA9IHRoaXMucHJvcHMuejtcbiAgICAgICAgdmFyIHggPSB0aGlzLnByb3BzLnNpemUgKiAzICogcSAvIDIuMDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnByb3BzLnNpemUgKiBNYXRoLnNxcnQoMykgKiAociArIHEgLyAyLjApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIHBvaW50cyBvZiB0aGUgdmVydGljZXMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwb2ludHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAvLyAgIGJfX19fY1xuICAgICAgICAvLyAgIC8gICAgXFxcbiAgICAgICAgLy8gYS8gICAgICBcXGRcbiAgICAgICAgLy8gIFxcICAgICAgL1xuICAgICAgICAvLyAgIFxcX19fXy9cbiAgICAgICAgLy8gICBmICAgIGVcbiAgICAgICAgdmFyIHMgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgIHZhciBoID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHZhciB4YSA9IC1zO1xuICAgICAgICB2YXIgeGIgPSAtcyAvIDIuMDtcbiAgICAgICAgdmFyIHhjID0gK3MgLyAyLjA7XG4gICAgICAgIHZhciB4ZCA9ICtzO1xuICAgICAgICB2YXIgeGUgPSB4YztcbiAgICAgICAgdmFyIHhmID0geGI7XG4gICAgICAgIHZhciB5YSA9IDAuMDtcbiAgICAgICAgdmFyIHliID0gaCAvIDIuMDtcbiAgICAgICAgdmFyIHljID0geWI7XG4gICAgICAgIHZhciB5ZCA9IHlhO1xuICAgICAgICB2YXIgeWUgPSAtaCAvIDIuMDtcbiAgICAgICAgdmFyIHlmID0geWU7XG4gICAgICAgIHZhciBmbGF0VG9wID0gW1wiXCIuY29uY2F0KHhhLCBcIixcIikuY29uY2F0KHlhKSwgXCJcIi5jb25jYXQoeGIsIFwiLFwiKS5jb25jYXQoeWIpLCBcIlwiLmNvbmNhdCh4YywgXCIsXCIpLmNvbmNhdCh5YyksIFwiXCIuY29uY2F0KHhkLCBcIixcIikuY29uY2F0KHlkKSwgXCJcIi5jb25jYXQoeGUsIFwiLFwiKS5jb25jYXQoeWUpLCBcIlwiLmNvbmNhdCh4ZiwgXCIsXCIpLmNvbmNhdCh5ZildO1xuICAgICAgICByZXR1cm4gZmxhdFRvcC5qb2luKCcgJyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEhleDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShIZXgsIFwicHJvcFR5cGVzXCIsIHtcbiAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgejogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudExpc3RlbmVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudFxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoSGV4LCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgc2l6ZTogMSxcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMCxcbiAgICBzdHlsZToge1xuICAgICAgZmlsbDogJyNmZmYnXG4gICAgfSxcbiAgICBldmVudExpc3RlbmVyczogW11cbiAgfSk7XG5cbiAgdmFyIEhleEdyaWQkMSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoSGV4R3JpZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBIZXhHcmlkKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhleEdyaWQpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEhleEdyaWQpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhIZXhHcmlkLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEhleEdyaWQ7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTsgLy8gTm90IHlldCBpbXBsZW1lbnRlZC5cblxuICB2YXIgSGV4JDEgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhIZXgsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIEhleCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZXgpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEhleCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEhleCwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBIZXg7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxOCBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIEhleCQyID0gZnVuY3Rpb24gSGV4JCQxKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRocmVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChIZXgkMSwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGV4LCBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuICBIZXgkMi5wcm9wVHlwZXMgPSB7XG4gICAgdGhyZWU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG4gIHZhciBIZXhHcmlkJDIgPSBmdW5jdGlvbiBIZXhHcmlkJCQxKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRocmVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChIZXhHcmlkJDEsIHByb3BzLCBwcm9wcy5jaGlsZHJlbikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEhleEdyaWQsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG4gIH07XG4gIEhleEdyaWQkMi5wcm9wVHlwZXMgPSB7XG4gICAgdGhyZWU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIHZhciBpc1NhbWUgPSBmdW5jdGlvbiBpc1NhbWUoYSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55ICYmIGEueiA9PT0gYi56O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFkZFBvaW50ID0gZnVuY3Rpb24gYWRkUG9pbnQoYSwgYikge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBhLnggKyBiLngsXG4gICAgICB5OiBhLnkgKyBiLnksXG4gICAgICB6OiBhLnogKyBiLnpcbiAgICB9O1xuICB9O1xuXG4gIHZhciBpc0NvbnRhaW5lZCA9IGZ1bmN0aW9uIGlzQ29udGFpbmVkKGEsIHBvaW50cykge1xuICAgIHJldHVybiBwb2ludHMuc29tZShpc1NhbWUoYSkpO1xuICB9O1xuICAvKipcbiAgICogR2V0IG5laWdoYm9yc1xuICAgKlxuICAgKiBBIHV0aWxpdHkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbGwgbmVpZ2hib3JzIGZvciBhIHBvaW50XG4gICAqIGV4cHJlc3NlZCBpbiBjdWJlIGNvb3JkaW5hdGVzXG4gICAqXG4gICAqIEFyZ3VtZW50czpcbiAgICogICBwb2ludCAgICAgIChDdWJlIGNvb3JpbmF0ZXMpXG4gICAqXG4gICAqL1xuXG5cbiAgdmFyIGdldEFsbE5laWdoYm9ycyA9IGZ1bmN0aW9uIGdldEFsbE5laWdoYm9ycyhwb2ludCkge1xuICAgIHJldHVybiBbWzEsIC0xLCAwXSwgWzEsIDAsIC0xXSwgWzAsIDEsIC0xXSwgWzAsIC0xLCAxXSwgWy0xLCAxLCAwXSwgWy0xLCAwLCAxXV0ubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDMpLFxuICAgICAgICAgIGR4ID0gX3JlZjRbMF0sXG4gICAgICAgICAgZHkgPSBfcmVmNFsxXSxcbiAgICAgICAgICBkeiA9IF9yZWY0WzJdO1xuXG4gICAgICByZXR1cm4gYWRkUG9pbnQocG9pbnQsIHtcbiAgICAgICAgeDogZHgsXG4gICAgICAgIHk6IGR5LFxuICAgICAgICB6OiBkelxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiBHZXQgZGlzdGFuY2VcbiAgICpcbiAgICogQSB1dGlsaXR5IGZ1bmN0aW9uIHdoaWNoIGNhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvXG4gICAqIHBvaW50cyBleHByZXNzZWQgaW4gY3ViZSBjb29yZGluYXRlc1xuICAgKlxuICAgKiBBcmd1bWVudHM6XG4gICAqICAgVHdvIG9iamVjdHMgd2l0aDpcbiAgICogICB4ICAgICAgIC0gWCBjb29yZGluYXRlIChjdWJlIGNvb3JkaW5hdGVzKVxuICAgKiAgIHkgICAgICAgLSBZIGNvb3JkaW5hdGUgKGN1YmUgY29vcmRpbmF0ZXMpXG4gICAqICAgeiAgICAgICAtIFogY29vcmRpbmF0ZSAoY3ViZSBjb29yZGluYXRlcylcbiAgICpcbiAgICovXG5cbiAgdmFyIGdldERpc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGlzdGFuY2UoYSwgYikge1xuICAgIHJldHVybiAoTWF0aC5hYnMoYS54IC0gYi54KSArIE1hdGguYWJzKGEueSAtIGIueSkgKyBNYXRoLmFicyhhLnogLSBiLnopKSAvIDI7XG4gIH07XG4gIC8qKlxuICAgKiBHZXQgcmFuZ2VcbiAgICpcbiAgICogQSB1dGlsaXR5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYWxsIHBvaW50cyB3aXRoaW4gYSByYW5nZVxuICAgKiBmcm9tIHRoZSBjZW50ZXJcbiAgICpcbiAgICogQXJndW1lbnRzOlxuICAgKiAgIGNlbnRlciAgICAoQ3ViZSBjb29yZGluYXRlcylcbiAgICogICBkaXN0YW5jZSAgbnVtYmVyXG4gICAqXG4gICAqL1xuXG4gIHZhciBnZXRSYW5nZSA9IGZ1bmN0aW9uIGdldFJhbmdlKGNlbnRlciwgZGlzdGFuY2UpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgeCA9IC1kaXN0YW5jZTsgeCA8PSBkaXN0YW5jZTsgeCsrKSB7XG4gICAgICB2YXIgc3RhcnRZID0gTWF0aC5tYXgoLWRpc3RhbmNlLCAteCAtIGRpc3RhbmNlKTtcbiAgICAgIHZhciBzdG9wWSA9IE1hdGgubWluKGRpc3RhbmNlLCAteCArIGRpc3RhbmNlKTtcblxuICAgICAgZm9yICh2YXIgeSA9IHN0YXJ0WTsgeSA8PSBzdG9wWTsgeSsrKSB7XG4gICAgICAgIHZhciB6ID0gLXggLSB5O1xuICAgICAgICByZXN1bHRzLnB1c2goYWRkUG9pbnQoY2VudGVyLCB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5LFxuICAgICAgICAgIHo6IHpcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuICAvKipcbiAgICogR2V0IHJlYWNoYWJsZVxuICAgKlxuICAgKiBBIHV0aWxpdHkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbGwgcmVhY2hhYmxlIHBvaW50cyBnaXZlblxuICAgKiBhIHN0YXJ0LCBhIG1vdmVtZW50IGRpc3RhbmNlLCBhbmQgYSBzZXQgb2YgYmxvY2tlZCBwb2ludHNcbiAgICpcbiAgICogQXJndW1lbnRzOlxuICAgKiAgIHN0YXJ0ICAgICBwb2ludCAoQ3ViZSBjb29yZGluYXRlcylcbiAgICogICBtb3ZlbWVudCAgbnVtYmVyXG4gICAqICAgYmxvY2tlZCAgIGFycmF5IG9mIGJsb2NrZWQgcG9pbnRzIChjdWJlIGNvb3JkaW5hdGVzKVxuICAgKlxuICAgKi9cblxuICB2YXIgZ2V0UmVhY2hhYmxlID0gZnVuY3Rpb24gZ2V0UmVhY2hhYmxlKHN0YXJ0LCBtb3ZlbWVudCwgYmxvY2tlZCkge1xuICAgIHZhciB2aXNpdGVkID0gW3N0YXJ0XTtcbiAgICB2YXIgZnJpbmdlcyA9IFtbc3RhcnRdXTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgIGZyaW5nZXMucHVzaChbXSk7XG4gICAgICBmcmluZ2VzW2kgLSAxXS5tYXAoZ2V0QWxsTmVpZ2hib3JzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGN1cnIpO1xuICAgICAgfSwgW10pLmZpbHRlcihmdW5jdGlvbiAobmVpZ2hib3IpIHtcbiAgICAgICAgcmV0dXJuICFpc0NvbnRhaW5lZChuZWlnaGJvciwgYmxvY2tlZC5jb25jYXQodmlzaXRlZCkpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobmVpZ2hib3IpIHtcbiAgICAgICAgdmlzaXRlZC5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgZnJpbmdlc1tpXS5wdXNoKG5laWdoYm9yKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBtb3ZlbWVudDsgaSsrKSB7XG4gICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfTtcbiAgdmFyIEhleFV0aWxzID0ge1xuICAgIGdldEFsbE5laWdoYm9yczogZ2V0QWxsTmVpZ2hib3JzLFxuICAgIGdldERpc3RhbmNlOiBnZXREaXN0YW5jZSxcbiAgICBnZXRSYW5nZTogZ2V0UmFuZ2UsXG4gICAgZ2V0UmVhY2hhYmxlOiBnZXRSZWFjaGFibGVcbiAgfTtcblxuICAvKipcbiAgICogVG9rZW5cbiAgICpcbiAgICogQ29tcG9uZW50IHRoYXQgcmVwcmVzZW50cyBhIGJvYXJkIGdhbWUgcGllY2UgKG9yIHRva2VuKS5cbiAgICogQ2FuIGJlIHVzZWQgYnkgaXRzZWxmIG9yIHdpdGggb25lIG9mIHRoZSBncmlkIHN5c3RlbXNcbiAgICogcHJvdmlkZWQgKEdyaWQgb3IgSGV4R3JpZCkuXG4gICAqXG4gICAqIEEgdG9rZW4gcmVuZGVycyBhcyBhIHNxdWFyZSBpbnNpZGUgYSBHcmlkIGFuZCBhXG4gICAqIGhleGFnb24gaW5zaWRlIGEgSGV4R3JpZC4gQWRkaXRpb25hbGx5LCB5b3UgY2FuIHBhc3NcbiAgICogaXQgYSBjaGlsZCBpZiB5b3Ugd2FudCBhbnkgb3RoZXIgY3VzdG9tIHJlbmRlcmluZy5cbiAgICpcbiAgICogUHJvcHM6XG4gICAqICAgeCAgICAgICAtIFggY29vcmRpbmF0ZSBvbiBncmlkIC8gaGV4IGdyaWQuXG4gICAqICAgeSAgICAgICAtIFkgY29vcmRpbmF0ZSBvbiBncmlkIC8gaGV4IGdyaWQuXG4gICAqICAgeiAgICAgICAtIFogY29vcmRpbmF0ZSBvbiBoZXggZ3JpZC5cbiAgICogICBhbmltYXRlIC0gQ2hhbmdlcyBpbiBwb3NpdGlvbiBhcmUgYW5pbWF0ZWQgaWYgdHJ1ZS5cbiAgICogICBhbmltYXRpb25EdXJhdGlvbiAtIExlbmd0aCBvZiBhbmltYXRpb24uXG4gICAqICAgb25DbGljayAtIENhbGxlZCB3aGVuIHRoZSB0b2tlbiBpcyBjbGlja2VkLlxuICAgKiAgIG9uTW91c2VPdmVyIC0gQ2FsbGVkIHdoZW4gdGhlIHRva2VuIGlzIG1vdXNlIG92ZXIuXG4gICAqICAgb25Nb3VzZU91dCAtIENhbGxlZCB3aGVuIHRoZSB0b2tlbiBpcyBtb3VzZSBvdXQuXG4gICAqICAgZHJhZ2dhYmxlIC0gV2hldGhlciBhIFRva2VuIGlzIGRyYWdnYWJsZSBvciBub3QuXG4gICAqICAgc2hvdWxkRHJhZyAtIFdoZXRoZXIgYSBkcmFnZ2FibGUgdG9rZW4gc2hvdWxkIHN0YXJ0IGRyYWcuXG4gICAqICAgb25EcmFnIC0gQ2FsbGVkIHdoZW4gYSB0b2tlbiB3YXMgZHJhZ2dlZCAobW92ZWQpLlxuICAgKiAgICAgICAgICAgIFBhcmFtZXRlciBjb250YWluIHsgeCwgeSwgb3JpZ2luYWxYLCBvcmlnaW5hbFkgfS5cbiAgICogICBvbkRyb3AgLSBDYWxsZWQgd2hlbiB0aGUgdG9rZW4gd2FzIGRyb3BwZWQgYWZ0ZXIgZHJhZ2dpbmcuXG4gICAqICAgICAgICAgICAgUGFyYW1ldGVyIGNvbnRhaW4geyB4LCB5LCBvcmlnaW5hbFgsIG9yaWdpbmFsWSB9LlxuICAgKlxuICAgKiBVc2FnZTpcbiAgICpcbiAgICogPEdyaWQgcm93cz17OH0gY29scz17OH0+XG4gICAqICAgPFRva2VuIHg9ezF9IHk9ezJ9Lz5cbiAgICogPC9HcmlkPlxuICAgKlxuICAgKiA8SGV4R3JpZD5cbiAgICogICA8VG9rZW4geD17MX0geT17Mn0gej17LTN9Lz5cbiAgICogPC9IZXhHcmlkPlxuICAgKlxuICAgKiA8R3JpZCByb3dzPXs4fSBjb2xzPXs4fT5cbiAgICogICA8VG9rZW4geD17MX0geT17Mn0+XG4gICAqICAgICA8S25pZ2h0IGNvbG9yPVwid2hpdGVcIi8+XG4gICAqICAgPC9Ub2tlbj5cbiAgICogPC9HcmlkPlxuICAgKi9cblxuICB2YXIgVG9rZW4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRva2VuLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRva2VuKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb2tlbik7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFRva2VuKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfc3RhcnREcmFnXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5kcmFnZ2FibGUgJiYgX3RoaXMucHJvcHMuc2hvdWxkRHJhZyhfdGhpcy5nZXRDb29yZHMoKSkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFJlcXVpcmVkIGZvciBTYWZhcmkvaU9zLlxuXG4gICAgICAgICAgZSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XG5cbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5zdGF0ZSwge1xuICAgICAgICAgICAgZHJhZ2dlZDoge1xuICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgX3RoaXMuX2FkZE9yUmVtb3ZlRHJhZ0V2ZW50TGlzdGVuZXJzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9kcmFnXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5kcmFnZ2VkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBSZXF1aXJlZCBmb3IgU2FmYXJpL2lPcy5cblxuICAgICAgICAgIGUgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXG4gICAgICAgICAgdmFyIGN0bSA9IF90aGlzLnByb3BzLnN2Z1JlZi5jdXJyZW50LmdldFNjcmVlbkNUTSgpLmludmVyc2UoKTtcblxuICAgICAgICAgIHZhciBkZWx0YVBhZ2VYID0gZS5wYWdlWCAtIF90aGlzLnN0YXRlLmRyYWdnZWQueDtcbiAgICAgICAgICB2YXIgZGVsdGFQYWdlWSA9IGUucGFnZVkgLSBfdGhpcy5zdGF0ZS5kcmFnZ2VkLnk7XG4gICAgICAgICAgdmFyIGRlbHRhU3ZnWCA9IGN0bS5hICogZGVsdGFQYWdlWCArIGN0bS5iICogZGVsdGFQYWdlWTtcbiAgICAgICAgICB2YXIgZGVsdGFTdmdZID0gY3RtLmMgKiBkZWx0YVBhZ2VYICsgY3RtLmQgKiBkZWx0YVBhZ2VZO1xuICAgICAgICAgIHZhciB4ID0gX3RoaXMuc3RhdGUueCArIGRlbHRhU3ZnWDtcbiAgICAgICAgICB2YXIgeSA9IF90aGlzLnN0YXRlLnkgKyBkZWx0YVN2Z1k7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25EcmFnKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkRyYWcoe1xuICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgICBvcmlnaW5hbFg6IF90aGlzLnByb3BzLngsXG4gICAgICAgICAgICAgIG9yaWdpbmFsWTogX3RoaXMucHJvcHMueVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuc3RhdGUsIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgZHJhZ2dlZDoge1xuICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIl9lbmREcmFnXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5kcmFnZ2VkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBXaGV0aGVyIHRoaXMgaXMgYSBkcm9wIG9yIGEgY2xpY2sgZGVwZW5kcyBpZiB0aGUgbW91c2UgbW92ZWQgYWZ0ZXIgZHJhZy5cbiAgICAgICAgICAvLyBBbmRyb2lkIHdpbGwgaXNzdWUgdmVyeSBzbWFsbCBkcmFnIGV2ZW50cywgc28gd2UgbmVlZCBhIGRpc3RhbmNlLlxuXG4gICAgICAgICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuc3RhdGUueCAtIF90aGlzLnByb3BzLngsIDIpICsgTWF0aC5wb3coX3RoaXMuc3RhdGUueSAtIF90aGlzLnByb3BzLnksIDIpKTtcblxuICAgICAgICAgIGlmIChkaXN0ID4gMC4yKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkRyb3Aoe1xuICAgICAgICAgICAgICB4OiBfdGhpcy5zdGF0ZS54LFxuICAgICAgICAgICAgICB5OiBfdGhpcy5zdGF0ZS55LFxuICAgICAgICAgICAgICBvcmlnaW5hbFg6IF90aGlzLnByb3BzLngsXG4gICAgICAgICAgICAgIG9yaWdpbmFsWTogX3RoaXMucHJvcHMueVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soe1xuICAgICAgICAgICAgICB4OiBfdGhpcy5zdGF0ZS54LFxuICAgICAgICAgICAgICB5OiBfdGhpcy5zdGF0ZS55XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5zdGF0ZSwge1xuICAgICAgICAgICAgeDogX3RoaXMucHJvcHMueCxcbiAgICAgICAgICAgIHk6IF90aGlzLnByb3BzLnksXG4gICAgICAgICAgICBkcmFnZ2VkOiBudWxsXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgX3RoaXMuX2FkZE9yUmVtb3ZlRHJhZ0V2ZW50TGlzdGVuZXJzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJfb25DbGlja1wiLCBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgLy8gSWdub3JlIG9uQ2xpY2sgaWYgdGhlIGVsZW1lbnQgaXMgZHJhZ2dhYmxlLCBiZWNhdXNlIGRlc2t0b3BzIHdpbGxcbiAgICAgICAgLy8gc2VuZCBib3RoIG9uQ2xpY2sgYW5kIHRvdWNoIGV2ZW50cywgbGVhZGluZyB0byBkdXBsaWNhdGlvbi5cbiAgICAgICAgLy8gV2hldGhlciB0aGlzIHdpbGwgYmUgYSBjbGljayBvciBhIGRyb3Agd2lsbCBiZSBkZWZpbmVkIGluIF9lbmREcmFnLlxuICAgICAgICBpZiAoIShfdGhpcy5wcm9wcy5kcmFnZ2FibGUgJiYgX3RoaXMucHJvcHMuc2hvdWxkRHJhZyhfdGhpcy5nZXRDb29yZHMoKSkpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5zdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIF90aGlzLmdldENvb3JkcygpLCB7XG4gICAgICAgIGRyYWdnZWQ6IG51bGwsXG4gICAgICAgIHVzaW5nVG91Y2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9rZW4sIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJhZ2dlZCkge1xuICAgICAgICAgIHRoaXMuX2FkZE9yUmVtb3ZlRHJhZ0V2ZW50TGlzdGVuZXJzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBwcm9wcywgc2F2ZXMgb2xkIHgveSxcbiAgICAgICAqIGFuZCBjdXJyZW50IHRpbWUuIFN0YXJ0cyBhbmltYXRpb24uXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV4dFByb3BzIE5leHQgcHJvcHMuXG4gICAgICAgKi9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kZXByZWNhdGVkXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIG9sZENvb3JkID0gdGhpcy5nZXRDb29yZHMoKTtcbiAgICAgICAgdmFyIG5ld0Nvb3JkID0gdGhpcy5nZXRDb29yZHMobmV4dFByb3BzKTsgLy8gRGVib3VuY2UuXG5cbiAgICAgICAgaWYgKG9sZENvb3JkLnggPT0gbmV3Q29vcmQueCAmJiBvbGRDb29yZC55ID09IG5ld0Nvb3JkLnkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKF9vYmplY3RTcHJlYWQoe30sIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICBvcmlnaW5UaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIG9yaWdpblg6IHRoaXMuc3RhdGUueCxcbiAgICAgICAgICBvcmlnaW5ZOiB0aGlzLnN0YXRlLnksXG4gICAgICAgICAgb3JpZ2luWjogdGhpcy5zdGF0ZS56XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGUoRGF0ZS5ub3coKSkpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgb3IgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkQWRkIElmIGl0IHNob3VsZCBhZGQgKG9yIHJlbW92ZSkgbGlzdGVuZXJzLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FkZE9yUmVtb3ZlRHJhZ0V2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZE9yUmVtb3ZlRHJhZ0V2ZW50TGlzdGVuZXJzKHNob3VsZEFkZCkge1xuICAgICAgICB2YXIgc3ZnRWwgPSB0aGlzLnByb3BzLnN2Z1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN2Z0VsKSByZXR1cm47XG4gICAgICAgIHZhciBhZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIgPSBzdmdFbC5hZGRFdmVudExpc3RlbmVyO1xuXG4gICAgICAgIGlmICghc2hvdWxkQWRkKSB7XG4gICAgICAgICAgYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyID0gc3ZnRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fZHJhZywge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2RyYWcsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZW5kRHJhZywge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRPclJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9lbmREcmFnLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl9lbmREcmFnLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZE9yUmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hsZWF2ZScsIHRoaXMuX2VuZERyYWcsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkT3JSZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2VuZERyYWcsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmVjdXJzaXZlbHkgYW5pbWF0ZXMgeCBhbmQgeS5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub3cgVW5peCB0aW1lc3RhbXAgd2hlbiB0aGlzIHdhcyBjYWxsZWQuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlKG5vdykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlbGFwc2VkID0gbm93IC0gX3RoaXMyLnN0YXRlLm9yaWdpblRpbWU7XG5cbiAgICAgICAgICB2YXIgc3ZnQ29vcmQgPSBfdGhpczIuZ2V0Q29vcmRzKCk7XG5cbiAgICAgICAgICBpZiAoZWxhcHNlZCA8IF90aGlzMi5wcm9wcy5hbmltYXRpb25EdXJhdGlvbiAmJiBfdGhpczIucHJvcHMuYW5pbWF0ZSkge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBfdGhpczIuX2Vhc2VJbk91dEN1YmljKGVsYXBzZWQsIDAsIDEsIF90aGlzMi5wcm9wcy5hbmltYXRpb25EdXJhdGlvbik7XG5cbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZShfb2JqZWN0U3ByZWFkKHt9LCBfdGhpczIuc3RhdGUsIHtcbiAgICAgICAgICAgICAgeDogKHN2Z0Nvb3JkLnggLSBfdGhpczIuc3RhdGUub3JpZ2luWCkgKiBwZXJjZW50YWdlICsgX3RoaXMyLnN0YXRlLm9yaWdpblgsXG4gICAgICAgICAgICAgIHk6IChzdmdDb29yZC55IC0gX3RoaXMyLnN0YXRlLm9yaWdpblkpICogcGVyY2VudGFnZSArIF90aGlzMi5zdGF0ZS5vcmlnaW5ZLFxuICAgICAgICAgICAgICB6OiAoc3ZnQ29vcmQueiAtIF90aGlzMi5zdGF0ZS5vcmlnaW5aKSAqIHBlcmNlbnRhZ2UgKyBfdGhpczIuc3RhdGUub3JpZ2luWlxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMyLl9hbmltYXRlKERhdGUubm93KCkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKF9vYmplY3RTcHJlYWQoe30sIF90aGlzMi5zdGF0ZSwge1xuICAgICAgICAgICAgICB4OiBzdmdDb29yZC54LFxuICAgICAgICAgICAgICB5OiBzdmdDb29yZC55LFxuICAgICAgICAgICAgICB6OiBzdmdDb29yZC56XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEdldHMgU1ZHIHgveS96IGNvb3JkaW5hdGVzLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIG9iamVjdCB0byBnZXQgY29vcmRpbmF0ZXMgZnJvbS5cbiAgICAgICAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHdpdGggeCwgeSBhbmQgeiBwYXJhbWV0ZXJzLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Q29vcmRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogcHJvcHMueCxcbiAgICAgICAgICB5OiBwcm9wcy55LFxuICAgICAgICAgIHo6IHByb3BzLnpcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbmltYXRpb24gZWFzaW5nIHZhbHVlLiBTZWUgaHR0cDovL2Vhc2luZ3MubmV0LyNlYXNlSW5PdXRDdWJpYy5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0IEN1cnJlbnQgdGltZS5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiIEJlZ2lubmluZyB2YWx1ZS5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjIEZpbmFsIHZhbHVlLlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGQgRHVyYXRpb24uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZWFzZUluT3V0Q3ViaWNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZWFzZUluT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICB0IC89IGQgLyAyO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgIHQgLT0gMjtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogdCArIDIpICsgYjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyBldmVudCBsaXN0ZW5lcnMgbmVlZGVkIGZvciBkcmFnIGFuZCBkcm9wLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2V2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJyxcbiAgICAgICAgICBjYWxsYmFjazogdGhpcy5fc3RhcnREcmFnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBuYW1lOiAndG91Y2hzdGFydCcsXG4gICAgICAgICAgY2FsbGJhY2s6IHRoaXMuX3N0YXJ0RHJhZ1xuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy50ZW1wbGF0ZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB7XG4gICAgICAgICAgeDogdGhpcy5zdGF0ZS54LFxuICAgICAgICAgIHk6IHRoaXMuc3RhdGUueSxcbiAgICAgICAgICB6OiB0aGlzLnN0YXRlLnosXG4gICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgICAgb25DbGljazogdGhpcy5fb25DbGljayxcbiAgICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5wcm9wcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLnByb3BzLm9uTW91c2VPdXQsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnM6IHRoaXMuX2V2ZW50TGlzdGVuZXJzKClcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRva2VuO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KFRva2VuLCBcInByb3BUeXBlc1wiLCB7XG4gICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHo6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGVtcGxhdGU6IFByb3BUeXBlcy5hbnksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgYW5pbWF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkcmFnZ2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3VsZERyYWc6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRHJhZzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzdmdSZWY6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KFRva2VuLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDc1MCxcbiAgICB0ZW1wbGF0ZTogU3F1YXJlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUb2tlblxuICAgKlxuICAgKiBDb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGEgYm9hcmQgZ2FtZSBwaWVjZSAob3IgdG9rZW4pLlxuICAgKiBDYW4gYmUgdXNlZCBieSBpdHNlbGYgb3Igd2l0aCBvbmUgb2YgdGhlIGdyaWQgc3lzdGVtc1xuICAgKiBwcm92aWRlZCAoR3JpZCBvciBIZXhHcmlkKS5cbiAgICpcbiAgICogQSB0b2tlbiByZW5kZXJzIGFzIGEgM0QgTWVzaC4gSUYgbm8gbWVzaCBwcm9wIGlzIHBhc3NlZC5cbiAgICogSXQgd2lsbCByZW5kZXIgYSB3aGl0ZSBib3ggb24gdGhlIGdyaWQuXG4gICAqXG4gICAqIFByb3BzOlxuICAgKiAgIHggICAgICAgLSBYIGNvb3JkaW5hdGUgb24gZ3JpZCAvIGhleCBncmlkLlxuICAgKiAgIHkgICAgICAgLSBZIGNvb3JkaW5hdGUgb24gZ3JpZCAvIGhleCBncmlkLlxuICAgKiAgIHogICAgICAgLSBaIGNvb3JkaW5hdGUgb24gaGV4IGdyaWQuXG4gICAqICAgb25DbGljayAtIENhbGxlZCB3aGVuIHRoZSB0b2tlbiBpcyBjbGlja2VkLlxuICAgKiAgIG9uTW91c2VPdmVyIC0gQ2FsbGVkIHdoZW4gdGhlIHRva2VuIGlzIG1vdXNlIG92ZXIuXG4gICAqICAgb25Nb3VzZU91dCAtIENhbGxlZCB3aGVuIHRoZSB0b2tlbiBpcyBtb3VzZSBvdXQuXG4gICAqXG4gICAqIFVzYWdlOlxuICAgKlxuICAgKiA8R3JpZCByb3dzPXs4fSBjb2xzPXs4fT5cbiAgICogICA8VG9rZW4geD17MX0geT17Mn0vPlxuICAgKiA8L0dyaWQ+XG4gICAqXG4gICAqIDxHcmlkIHJvd3M9ezh9IGNvbHM9ezh9PlxuICAgKiAgIDxUb2tlbiB4PXsxfSB5PXsyfSBzaXplPXswLjV9Lz5cbiAgICogPC9HcmlkPlxuICAgKlxuICAgKiA8SGV4R3JpZD5cbiAgICogICA8VG9rZW4geD17MX0geT17Mn0gej17LTN9Lz5cbiAgICogPC9IZXhHcmlkPlxuICAgKlxuICAgKiA8R3JpZCByb3dzPXs4fSBjb2xzPXs4fT5cbiAgICogICA8VG9rZW4geD17MX0geT17Mn0gbWVzaD17VEhSRUUuanMgM0QtT2JqZWN0fS8+XG4gICAqIDwvR3JpZD5cbiAgICpcbiAgICovXG5cbiAgdmFyIFRva2VuJDEgPSBmdW5jdGlvbiBUb2tlbihwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVJQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRva2VuSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgVG9rZW5JbXBsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUb2tlbkltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVG9rZW5JbXBsKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb2tlbkltcGwpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihUb2tlbkltcGwpLmNhbGwodGhpcykpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiX2F0dGFjaE1lc2hcIiwgZnVuY3Rpb24gKG1lc2gpIHtcbiAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5zaXplO1xuICAgICAgICB2YXIgbWVzaFNpemUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICB2YXIgbWVzaENlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHZhciBiYm94ID0gbmV3IFRIUkVFLkJveDMoKS5zZXRGcm9tT2JqZWN0KG1lc2gpO1xuICAgICAgICBiYm94LmdldFNpemUobWVzaFNpemUpO1xuICAgICAgICBiYm94LmdldENlbnRlcihtZXNoQ2VudGVyKTsgLy8gZGV0ZXJtaW5lIHRoZSBzY2FsZSBmYWN0b3JcblxuICAgICAgICB2YXIgc2NhbGUgPSBtZXNoU2l6ZS56IDwgbWVzaFNpemUueCA/IG1lc2hTaXplLnggOiBtZXNoU2l6ZS56O1xuICAgICAgICBzY2FsZSA9IHNpemUgLyBzY2FsZTtcbiAgICAgICAgbWVzaC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7IC8vIHNldCB0aGUgbWVzaCB0byB0aGUgZ3JvdW5kXG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmJvYXJkU2l6ZSAmJiBfdGhpcy5wcm9wcy5saWZ0ICYmIF90aGlzLnByb3BzLnBhZGRpbmcpIHtcbiAgICAgICAgICBtZXNoLnBvc2l0aW9uLnggPSBfdGhpcy5wcm9wcy54ICogKF90aGlzLnByb3BzLmJvYXJkU2l6ZSArIF90aGlzLnByb3BzLnBhZGRpbmcpO1xuICAgICAgICAgIG1lc2gucG9zaXRpb24ueiA9IF90aGlzLnByb3BzLnkgKiAoX3RoaXMucHJvcHMuYm9hcmRTaXplICsgX3RoaXMucHJvcHMucGFkZGluZyk7XG4gICAgICAgICAgbWVzaC5wb3NpdGlvbi55ID0gLWJib3gubWluLnkgKyBfdGhpcy5wcm9wcy5saWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc2gucG9zaXRpb24ueCA9IF90aGlzLnByb3BzLng7XG4gICAgICAgICAgbWVzaC5wb3NpdGlvbi56ID0gX3RoaXMucHJvcHMueTtcbiAgICAgICAgICBtZXNoLnBvc2l0aW9uLnkgPSAtYmJveC5taW4ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnBhcmVudC5hZGQobWVzaCk7IC8vIHJlZ2lzdGVyIHRoZSBldmVudFxuXG5cbiAgICAgICAgdmFyIG9uRXZlbnQgPSBmdW5jdGlvbiBvbkV2ZW50KGUpIHtcbiAgICAgICAgICBpZiAoZS50eXBlID09ICdjbGljaycpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soe1xuICAgICAgICAgICAgICB4OiBfdGhpcy5wcm9wcy54LFxuICAgICAgICAgICAgICB5OiBfdGhpcy5wcm9wcy55XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PSAnbW91c2VPdmVyJykge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZU92ZXIoe1xuICAgICAgICAgICAgICB4OiBfdGhpcy5wcm9wcy54LFxuICAgICAgICAgICAgICB5OiBfdGhpcy5wcm9wcy55XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PSAnbW91c2VPdXQnKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlT3V0KHtcbiAgICAgICAgICAgICAgeDogX3RoaXMucHJvcHMueCxcbiAgICAgICAgICAgICAgeTogX3RoaXMucHJvcHMueVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnByb3BzLmNvbnRleHQucmVnQ2FsbChtZXNoLCBvbkV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXByb3BzLnNpemUpIHtcbiAgICAgICAgX3RoaXMuc2l6ZSA9IHByb3BzLmJvYXJkU2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNpemUgPSBwcm9wcy5zaXplO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMucGFyZW50KSB7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHByb3BzLnBhcmVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHByb3BzLmNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9rZW5JbXBsLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSh0aGlzLnByZXZNZXNoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgbWVzaCA9IHRoaXMucHJvcHMubWVzaDtcbiAgICAgICAgaWYgKHRoaXMucHJldk1lc2ggJiYgdGhpcy5wcmV2TWVzaCA9PT0gbWVzaCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKCFtZXNoKSB7XG4gICAgICAgICAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgxLCAxICogMC4zLCAxKSwgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6ICcjZWVlZWVlJ1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIHRoaXMuX2F0dGFjaE1lc2gobWVzaCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzaC5pc09iamVjdDNEKSB7XG4gICAgICAgICAgdGhpcy5fYXR0YWNoTWVzaChtZXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3VyIGlucHV0IHRvIHRva2VucyBzaG91bGQgYmUgYW4gdGhyZWUganMgM2Qgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUodGhpcy5wcmV2TWVzaCk7XG4gICAgICAgIHRoaXMucHJldk1lc2ggPSBtZXNoO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9rZW5JbXBsO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KFRva2VuSW1wbCwgXCJwcm9wVHlwZXNcIiwge1xuICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB6OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1lc2g6IFByb3BUeXBlcy5hbnksXG4gICAgcGFkZGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpZnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYm9hcmRTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhcmVudDogUHJvcFR5cGVzLmluc3RhbmNlT2YoVEhSRUUuT2JqZWN0M0QpLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYW5pbWF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlclxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoVG9rZW5JbXBsLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDc1MCxcbiAgICBzaXplOiAxLFxuICAgIHBhZGRpbmc6IDAuMSxcbiAgICBsaWZ0OiAwLjFcbiAgfSk7XG5cbiAgLypcbiAgICogQ29weXJpZ2h0IDIwMTggVGhlIGJvYXJkZ2FtZS5pbyBBdXRob3JzXG4gICAqXG4gICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXG4gICAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICAgKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAgICovXG4gIHZhciBUb2tlbiQyID0gZnVuY3Rpb24gVG9rZW4kJDEocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudGhyZWUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFRva2VuJDEsIHByb3BzLCBwcm9wcy5jaGlsZHJlbikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRva2VuLCBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuICBUb2tlbiQyLnByb3BUeXBlcyA9IHtcbiAgICB0aHJlZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cbiAgdmFyIE1BS0VfTU9WRSA9ICdNQUtFX01PVkUnO1xuXG4gIHZhciBjc3MkMyA9IFwiLypcXG4gKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcXG4gKlxcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlXFxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXFxuICovXFxuXFxuLmdhbWVsb2cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnIgMzBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVsb2cgLnR1cm4tbWFya2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICBjb2xvcjogI2VlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuLmdhbWVsb2cgLmxvZy1ldmVudCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjY2NjO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5nYW1lbG9nIC5waGFzZS1tYXJrZXIge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1vcmllbnRhdGlvbjogc2lkZXdheXM7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWVsb2cucGlubmVkIC5sb2ctZXZlbnQge1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uZ2FtZWxvZyAubG9nLWV2ZW50OmhvdmVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4uZ2FtZWxvZyAubG9nLWV2ZW50LnBpbm5lZCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIwIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY4NTFiO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzdmZGJmZjtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDc0ZDk7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIzIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzljY2NjO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyNCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzNkOTk3MDtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjUge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyZWNjNDA7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXI2IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDFmZjcwO1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyNyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZGMwMDtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjgge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDFmM2Y7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXI5IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY0MTM2O1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMTAge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM4NTE0NGI7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIxMSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2YwMTJiZTtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjEyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjEwZGM5O1xcbn1cXG5cXG4uZ2FtZWxvZyBkaXYucGxheWVyMTMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMTExMTE7XFxufVxcblxcbi5nYW1lbG9nIGRpdi5wbGF5ZXIxNCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2FhYWFhYTtcXG59XFxuXFxuLmdhbWVsb2cgZGl2LnBsYXllcjE1IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGRkZGRkO1xcbn1cXG5cIjtcbiAgc3R5bGVJbmplY3QoY3NzJDMpO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbXBvbmVudCB0byByZW5kZXIgY3VzdG9tIHBheWxvYWQuXG4gICAqL1xuXG4gIHZhciBDdXN0b21QYXlsb2FkID0gZnVuY3Rpb24gQ3VzdG9tUGF5bG9hZChwcm9wcykge1xuICAgIHZhciBjdXN0b21wYXlsb2FkID0gcHJvcHMucGF5bG9hZCAhPT0gdW5kZWZpbmVkID8gSlNPTi5zdHJpbmdpZnkocHJvcHMucGF5bG9hZCwgbnVsbCwgNCkgOiAnJztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjdXN0b21wYXlsb2FkKTtcbiAgfTtcblxuICBDdXN0b21QYXlsb2FkLnByb3BUeXBlcyA9IHtcbiAgICBwYXlsb2FkOiBQcm9wVHlwZXMuYW55XG4gIH07XG4gIC8qKlxuICAgKiBMb2dFdmVudFxuICAgKlxuICAgKiBMb2dzIGEgc2luZ2xlIGFjdGlvbiBpbiB0aGUgZ2FtZS5cbiAgICovXG5cbiAgdmFyIExvZ0V2ZW50ID0gZnVuY3Rpb24gTG9nRXZlbnQocHJvcHMpIHtcbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uO1xuICAgIHZhciBhcmdzID0gYWN0aW9uLnBheWxvYWQuYXJncyB8fCBbXTtcbiAgICB2YXIgcGxheWVySUQgPSBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJJRDtcbiAgICB2YXIgY2xhc3NOYW1lcyA9IFwibG9nLWV2ZW50IHBsYXllclwiLmNvbmNhdChwbGF5ZXJJRCk7XG5cbiAgICBpZiAocHJvcHMucGlubmVkKSB7XG4gICAgICBjbGFzc05hbWVzICs9ICcgcGlubmVkJztcbiAgICB9IC8vIGFsbG93IHRvIHBhc3MgaW4gY3VzdG9tIHJlbmRlcmluZyBjb21wb25lbnQgZm9yIGN1c3RvbSBwYXlsb2FkXG5cblxuICAgIHZhciBjdXN0b21QYXlsb2FkID0gcHJvcHMucGF5bG9hZENvbXBvbmVudCAhPT0gdW5kZWZpbmVkID8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wcy5wYXlsb2FkQ29tcG9uZW50LCB7XG4gICAgICBwYXlsb2FkOiBwcm9wcy5wYXlsb2FkXG4gICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEN1c3RvbVBheWxvYWQsIHtcbiAgICAgIHBheWxvYWQ6IHByb3BzLnBheWxvYWRcbiAgICB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICByZXR1cm4gcHJvcHMub25Mb2dDbGljayhwcm9wcy5sb2dJbmRleCk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5vbk1vdXNlRW50ZXIocHJvcHMubG9nSW5kZXgpO1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICByZXR1cm4gcHJvcHMub25Nb3VzZUxlYXZlKCk7XG4gICAgICB9XG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBhY3Rpb24ucGF5bG9hZC50eXBlLCBcIihcIiwgYXJncy5qb2luKCcsJyksIFwiKVwiKSwgY3VzdG9tUGF5bG9hZCk7XG4gIH07XG5cbiAgTG9nRXZlbnQucHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGxvZ0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25Mb2dDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBpbm5lZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGF5bG9hZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYXlsb2FkQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9O1xuICAvKipcbiAgICogVHVybk1hcmtlclxuICAgKlxuICAgKiBUaGUgbWFya2VycyBvbiB0aGUgbGVmdCBvZiB0aGUgbG9nIGV2ZW50cyB0aGF0IGluZGljYXRlXG4gICAqIHdoaWNoIHR1cm4gdGhlIGV2ZW50IGJlbG9uZ3MgdG8uXG4gICAqL1xuXG4gIHZhciBUdXJuTWFya2VyID0gZnVuY3Rpb24gVHVybk1hcmtlcihwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0dXJuLW1hcmtlclwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZ3JpZFJvdzogJ3NwYW4gJyArIHByb3BzLm51bUV2ZW50c1xuICAgICAgfVxuICAgIH0sIHByb3BzLnR1cm4pO1xuICB9O1xuXG4gIFR1cm5NYXJrZXIucHJvcFR5cGVzID0ge1xuICAgIHR1cm46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBudW1FdmVudHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuICAvKipcbiAgICogUGhhc2VNYXJrZXJcbiAgICpcbiAgICogVGhlIG1hcmtlcnMgb24gdGhlIHJpZ2h0IG9mIHRoZSBsb2cgZXZlbnRzIHRoYXQgaW5kaWNhdGVcbiAgICogd2hpY2ggcGhhc2UgdGhlIGV2ZW50IGJlbG9uZ3MgdG8uXG4gICAqL1xuXG4gIHZhciBQaGFzZU1hcmtlciA9IGZ1bmN0aW9uIFBoYXNlTWFya2VyKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInBoYXNlLW1hcmtlclwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZ3JpZFJvdzogJ3NwYW4gJyArIHByb3BzLm51bUV2ZW50c1xuICAgICAgfVxuICAgIH0sIHByb3BzLnBoYXNlKTtcbiAgfTtcblxuICBQaGFzZU1hcmtlci5wcm9wVHlwZXMgPSB7XG4gICAgcGhhc2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBudW1FdmVudHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuICAvKipcbiAgICogR2FtZUxvZ1xuICAgKlxuICAgKiBDb21wb25lbnQgdG8gbG9nIHRoZSBhY3Rpb25zIGluIHRoZSBnYW1lLlxuICAgKi9cblxuICB2YXIgR2FtZUxvZyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoR2FtZUxvZywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBHYW1lTG9nKCkge1xuICAgICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhbWVMb2cpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihHYW1lTG9nKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzdGF0ZVwiLCB7XG4gICAgICAgIHBpbm5lZDogbnVsbFxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJyZXdpbmRcIiwgZnVuY3Rpb24gKGxvZ0luZGV4KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnByb3BzLmluaXRpYWxTdGF0ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLnByb3BzLmxvZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBhY3Rpb24gPSBfdGhpcy5wcm9wcy5sb2dbaV0uYWN0aW9uO1xuXG4gICAgICAgICAgaWYgKCFhY3Rpb24uYXV0b21hdGljKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IF90aGlzLnByb3BzLnJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjdGlvbi50eXBlID09IE1BS0VfTU9WRSkge1xuICAgICAgICAgICAgaWYgKGxvZ0luZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvZ0luZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBHOiBzdGF0ZS5HLFxuICAgICAgICAgIGN0eDogc3RhdGUuY3R4XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uTG9nQ2xpY2tcIiwgZnVuY3Rpb24gKGxvZ0luZGV4KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMucmV3aW5kKGxvZ0luZGV4KTtcblxuICAgICAgICAgIHZhciByZW5kZXJlZExvZ0VudHJpZXMgPSBfdGhpcy5wcm9wcy5sb2cuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5hY3Rpb24udHlwZSA9PSBNQUtFX01PVkU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbWV0YWRhdGEgPSByZW5kZXJlZExvZ0VudHJpZXNbbG9nSW5kZXhdLmFjdGlvbi5wYXlsb2FkLm1ldGFkYXRhO1xuXG4gICAgICAgICAgaWYgKG8ucGlubmVkID09PSBsb2dJbmRleCkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25Ib3Zlcih7XG4gICAgICAgICAgICAgIGxvZ0luZGV4OiBsb2dJbmRleCxcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBtZXRhZGF0YTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcGlubmVkOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnByb3BzLm9uSG92ZXIoe1xuICAgICAgICAgICAgbG9nSW5kZXg6IGxvZ0luZGV4LFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGlubmVkOiBsb2dJbmRleFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbk1vdXNlRW50ZXJcIiwgZnVuY3Rpb24gKGxvZ0luZGV4KSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5waW5uZWQgPT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5yZXdpbmQobG9nSW5kZXgpO1xuXG4gICAgICAgICAgX3RoaXMucHJvcHMub25Ib3Zlcih7XG4gICAgICAgICAgICBsb2dJbmRleDogbG9nSW5kZXgsXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbk1vdXNlTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUucGlubmVkID09PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25Ib3Zlcih7XG4gICAgICAgICAgICBzdGF0ZTogbnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhHYW1lTG9nLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGxvZyA9IFtdO1xuICAgICAgICB2YXIgdHVybnMgPSBbXTtcbiAgICAgICAgdmFyIHBoYXNlcyA9IFtdO1xuICAgICAgICB2YXIgZXZlbnRzSW5DdXJyZW50UGhhc2UgPSAwO1xuICAgICAgICB2YXIgZXZlbnRzSW5DdXJyZW50VHVybiA9IDA7XG4gICAgICAgIHZhciByZW5kZXJlZExvZ0VudHJpZXMgPSB0aGlzLnByb3BzLmxvZy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5hY3Rpb24udHlwZSA9PSBNQUtFX01PVkU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVuZGVyZWRMb2dFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIF9yZW5kZXJlZExvZ0VudHJpZXMkaSA9IHJlbmRlcmVkTG9nRW50cmllc1tpXSxcbiAgICAgICAgICAgICAgYWN0aW9uID0gX3JlbmRlcmVkTG9nRW50cmllcyRpLmFjdGlvbixcbiAgICAgICAgICAgICAgcGF5bG9hZCA9IF9yZW5kZXJlZExvZ0VudHJpZXMkaS5wYXlsb2FkLFxuICAgICAgICAgICAgICB0dXJuID0gX3JlbmRlcmVkTG9nRW50cmllcyRpLnR1cm4sXG4gICAgICAgICAgICAgIHBoYXNlID0gX3JlbmRlcmVkTG9nRW50cmllcyRpLnBoYXNlO1xuICAgICAgICAgIGV2ZW50c0luQ3VycmVudFBoYXNlKys7XG4gICAgICAgICAgZXZlbnRzSW5DdXJyZW50VHVybisrO1xuICAgICAgICAgIGxvZy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9nRXZlbnQsIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIHBpbm5lZDogaSA9PT0gdGhpcy5zdGF0ZS5waW5uZWQsXG4gICAgICAgICAgICBsb2dJbmRleDogaSxcbiAgICAgICAgICAgIG9uTG9nQ2xpY2s6IHRoaXMub25Mb2dDbGljayxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgcGF5bG9hZENvbXBvbmVudDogdGhpcy5wcm9wcy5wYXlsb2FkQ29tcG9uZW50XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgaWYgKGkgPT0gcmVuZGVyZWRMb2dFbnRyaWVzLmxlbmd0aCAtIDEgfHwgcmVuZGVyZWRMb2dFbnRyaWVzW2kgKyAxXS50dXJuICE9IHR1cm4pIHtcbiAgICAgICAgICAgIHR1cm5zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChUdXJuTWFya2VyLCB7XG4gICAgICAgICAgICAgIGtleTogdHVybnMubGVuZ3RoLFxuICAgICAgICAgICAgICB0dXJuOiB0dXJuLFxuICAgICAgICAgICAgICBudW1FdmVudHM6IGV2ZW50c0luQ3VycmVudFR1cm5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGV2ZW50c0luQ3VycmVudFR1cm4gPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpID09IHJlbmRlcmVkTG9nRW50cmllcy5sZW5ndGggLSAxIHx8IHJlbmRlcmVkTG9nRW50cmllc1tpICsgMV0ucGhhc2UgIT0gcGhhc2UpIHtcbiAgICAgICAgICAgIHBoYXNlcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGhhc2VNYXJrZXIsIHtcbiAgICAgICAgICAgICAga2V5OiBwaGFzZXMubGVuZ3RoLFxuICAgICAgICAgICAgICBwaGFzZTogcGhhc2UsXG4gICAgICAgICAgICAgIG51bUV2ZW50czogZXZlbnRzSW5DdXJyZW50UGhhc2VcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGV2ZW50c0luQ3VycmVudFBoYXNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2dhbWVsb2cnO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBpbm5lZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHBpbm5lZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSwgdHVybnMsIGxvZywgcGhhc2VzKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR2FtZUxvZztcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShHYW1lTG9nLCBcInByb3BUeXBlc1wiLCB7XG4gICAgb25Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVkdWNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5pdGlhbFN0YXRlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgbG9nOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBwYXlsb2FkQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkoR2FtZUxvZywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIG9uSG92ZXI6IGZ1bmN0aW9uIG9uSG92ZXIoKSB7fVxuICB9KTtcblxuICAvKlxuICAgKiBDb3B5cmlnaHQgMjAxNyBUaGUgYm9hcmRnYW1lLmlvIEF1dGhvcnNcbiAgICpcbiAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGVcbiAgICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICAgKi9cblxuICBleHBvcnRzLlVJID0gVUkkMjtcbiAgZXhwb3J0cy5DYXJkID0gQ2FyZCQyO1xuICBleHBvcnRzLkRlY2sgPSBEZWNrJDI7XG4gIGV4cG9ydHMuR3JpZCA9IEdyaWQkMjtcbiAgZXhwb3J0cy5IZXhHcmlkID0gSGV4R3JpZCQyO1xuICBleHBvcnRzLlRva2VuID0gVG9rZW4kMjtcbiAgZXhwb3J0cy5IZXhVdGlscyA9IEhleFV0aWxzO1xuICBleHBvcnRzLkdhbWVMb2cgPSBHYW1lTG9nO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGlzdC9yZWFjdC5qc1wiKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L3VpLmpzXCIpXG4iXSwic291cmNlUm9vdCI6IiJ9