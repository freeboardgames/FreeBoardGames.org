(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/boardgame.io/dist/esm/core.js":
/*!****************************************************!*\
  !*** ./node_modules/boardgame.io/dist/esm/core.js ***!
  \****************************************************/
/*! exports provided: ActivePlayers, INVALID_MOVE, Stage, TurnOrder, PlayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerView", function() { return PlayerView; });
/* harmony import */ var _reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer-b8b81041.js */ "./node_modules/boardgame.io/dist/esm/reducer-b8b81041.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivePlayers", function() { return _reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_MOVE", function() { return _reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TurnOrder", function() { return _reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["T"]; });

/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");




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
    var r = Object(_reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["k"])({}, G);

    if (r.secret !== undefined) {
      delete r.secret;
    }

    if (r.players) {
      r.players = Object(_reducer_b8b81041_js__WEBPACK_IMPORTED_MODULE_0__["b"])({}, playerID, r.players[playerID]);
    }

    return r;
  }
};




/***/ }),

/***/ "./node_modules/boardgame.io/dist/esm/reducer-b8b81041.js":
/*!****************************************************************!*\
  !*** ./node_modules/boardgame.io/dist/esm/reducer-b8b81041.js ***!
  \****************************************************************/
/*! exports provided: A, C, E, F, G, I, M, R, S, T, U, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CreateGameReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Enhance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return INVALID_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MAKE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TurnOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return alea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _possibleConstructorReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return gameEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EnhanceCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return redo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return makeMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GAME_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _toConsumableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ActivePlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _assertThisInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UNDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return _objectWithoutProperties; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
const MAKE_MOVE = 'MAKE_MOVE';
const GAME_EVENT = 'GAME_EVENT';
const REDO = 'REDO';
const RESET = 'RESET';
const SYNC = 'SYNC';
const UNDO = 'UNDO';
const UPDATE = 'UPDATE';
const PLUGIN = 'PLUGIN';

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
const makeMove = (type, args, playerID, credentials) => ({
    type: MAKE_MOVE,
    payload: { type, args, playerID, credentials },
});
/**
 * Generate a game event to be dispatched to the flow reducer.
 *
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */
const gameEvent = (type, args, playerID, credentials) => ({
    type: GAME_EVENT,
    payload: { type, args, playerID, credentials },
});
/**
 * Generate an automatic game event that is a side-effect of a move.
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */
const automaticGameEvent = (type, args, playerID, credentials) => ({
    type: GAME_EVENT,
    payload: { type, args, playerID, credentials },
    automatic: true,
});
const sync = (info) => ({
    type: SYNC,
    state: info.state,
    log: info.log,
    initialState: info.initialState,
    clientOnly: true,
});
/**
 * Used to update the Redux store's state in response to
 * an action coming from another player.
 * @param {object} state - The state to restore.
 * @param {Array} deltalog - A log delta.
 */
const update = (state, deltalog) => ({
    type: UPDATE,
    state,
    deltalog,
    clientOnly: true,
});
/**
 * Used to reset the game state.
 * @param {object} state - The initial state.
 */
const reset = (state) => ({
    type: RESET,
    state,
    clientOnly: true,
});
/**
 * Used to undo the last move.
 */
const undo = () => ({
    type: UNDO,
});
/**
 * Used to redo the last undone move.
 */
const redo = () => ({
    type: REDO,
});
/**
 * Allows plugins to define their own actions and intercept them.
 */
const plugin = (type, args, playerID, credentials) => ({
    type: PLUGIN,
    payload: { type, args, playerID, credentials },
});

var ActionCreators = /*#__PURE__*/Object.freeze({
  makeMove: makeMove,
  gameEvent: gameEvent,
  automaticGameEvent: automaticGameEvent,
  sync: sync,
  update: update,
  reset: reset,
  undo: undo,
  redo: redo,
  plugin: plugin
});

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
  name: 'plugin-immer',
  fnWrap: function fnWrap(move) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(move);
  }
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
  function Random(state) {
    _classCallCheck(this, Random);

    // If we are on the client, the seed is not present.
    // Just use a temporary seed to execute the move without
    // crashing it. The move state itself is discarded,
    // so the actual value doesn't matter.
    this.state = state;
    this.used = false;
  }

  _createClass(Random, [{
    key: "isUsed",
    value: function isUsed() {
      return this.used;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
    /**
     * Generate a random number.
     */

  }, {
    key: "_random",
    value: function _random() {
      this.used = true;
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
      this.state = _objectSpread2({}, R, {
        prngstate: fn.state()
      });
      return number;
    }
  }, {
    key: "api",
    value: function api() {
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

      return _objectSpread2({}, predefined, {
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
        },
        _obj: this
      });
    }
  }]);

  return Random;
}();
/**
 * Generates a new seed from the current date / time.
 */

Random.seed = function () {
  return (+new Date()).toString(36).slice(-10);
};

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var PluginRandom = {
    name: 'random',
    noClient: ({ api }) => {
        return api._obj.isUsed();
    },
    flush: ({ api }) => {
        return api._obj.getState();
    },
    api: ({ data }) => {
        const random = new Random(data);
        return random.api();
    },
    setup: ({ game }) => {
        let seed = game.seed;
        if (seed === undefined) {
            seed = Random.seed();
        }
        return { seed };
    },
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
    key: "api",
    value: function api(ctx) {
      var _this = this;

      var events = {};
      var phase = ctx.phase,
          turn = ctx.turn;
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
              args: args,
              phase: phase,
              turn: turn
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
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      events._obj = this;
      return events;
    }
  }, {
    key: "isUsed",
    value: function isUsed() {
      return this.dispatch.length > 0;
    }
    /**
     * Updates ctx with the triggered events.
     * @param {object} state - The state object { G, ctx }.
     */

  }, {
    key: "update",
    value: function update(state) {
      for (var i = 0; i < this.dispatch.length; i++) {
        var item = this.dispatch[i]; // If the turn already ended some other way,
        // don't try to end the turn again.

        if (item.key === 'endTurn' && item.turn !== state.ctx.turn) {
          continue;
        } // If the phase already ended some other way,
        // don't try to end the phase again.


        if ((item.key === 'endPhase' || item.key === 'setPhase') && item.phase !== state.ctx.phase) {
          continue;
        }

        var action = automaticGameEvent(item.key, item.args, this.playerID);
        state = _objectSpread2({}, state, {}, this.flow.processEvent(state, action));
      }

      return state;
    }
  }]);

  return Events;
}();

/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var PluginEvents = {
    name: 'events',
    noClient: ({ api }) => {
        return api._obj.isUsed();
    },
    flushRaw: ({ state, api }) => {
        return api._obj.update(state);
    },
    api: ({ game, playerID, ctx }) => {
        return new Events(game.flow, playerID).api(ctx);
    },
};

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * List of plugins that are always added.
 */
const DEFAULT_PLUGINS = [PluginImmer, PluginRandom, PluginEvents];
/**
 * Allow plugins to intercept actions and process them.
 */
const ProcessAction = (state, action, opts) => {
    opts.game.plugins
        .filter(plugin => plugin.action !== undefined)
        .filter(plugin => plugin.name === action.payload.type)
        .forEach(plugin => {
        const name = plugin.name;
        const pluginState = state.plugins[name] || { data: {} };
        const data = plugin.action(pluginState.data, action.payload);
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: { ...pluginState, data },
            },
        };
    });
    return state;
};
/**
 * The API's created by various plugins are stored in the plugins
 * section of the state object:
 *
 * {
 *   G: {},
 *   ctx: {},
 *   plugins: {
 *     plugin-a: {
 *       data: {},  // this is generated by the plugin at Setup / Flush.
 *       api: {},   // this is ephemeral and generated by Enhance.
 *     }
 *   }
 * }
 *
 * This function takes these API's and stuffs them back into
 * ctx for consumption inside a move function or hook.
 */
const EnhanceCtx = (state) => {
    let ctx = { ...state.ctx };
    const plugins = state.plugins || {};
    Object.entries(plugins).forEach(([name, { api }]) => {
        ctx[name] = api;
    });
    return ctx;
};
/**
 * Applies the provided plugins to the given move / flow function.
 *
 * @param {function} fn - The move function or trigger to apply the plugins to.
 * @param {object} plugins - The list of plugins.
 */
const FnWrap = (fn, plugins) => {
    const reducer = (acc, { fnWrap }) => fnWrap(acc, plugins);
    return [...DEFAULT_PLUGINS, ...plugins]
        .filter(plugin => plugin.fnWrap !== undefined)
        .reduce(reducer, fn);
};
/**
 * Allows the plugin to generate its initial state.
 */
const Setup = (state, opts) => {
    [...DEFAULT_PLUGINS, ...opts.game.plugins]
        .filter(plugin => plugin.setup !== undefined)
        .forEach(plugin => {
        const name = plugin.name;
        const data = plugin.setup({
            G: state.G,
            ctx: state.ctx,
            game: opts.game,
        });
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: { data },
            },
        };
    });
    return state;
};
/**
 * Invokes the plugin before a move or event.
 * The API that the plugin generates is stored inside
 * the `plugins` section of the state (which is subsequently
 * merged into ctx).
 */
const Enhance = (state, opts) => {
    [...DEFAULT_PLUGINS, ...opts.game.plugins]
        .filter(plugin => plugin.api !== undefined)
        .forEach(plugin => {
        const name = plugin.name;
        const pluginState = state.plugins[name] || { data: {} };
        const api = plugin.api({
            G: state.G,
            ctx: state.ctx,
            data: pluginState.data,
            game: opts.game,
        });
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: { ...pluginState, api },
            },
        };
    });
    return state;
};
/**
 * Allows plugins to update their state after a move / event.
 */
const Flush = (state, opts) => {
    [...DEFAULT_PLUGINS, ...opts.game.plugins].forEach(plugin => {
        const name = plugin.name;
        const pluginState = state.plugins[name] || { data: {} };
        if (plugin.flush) {
            const newData = plugin.flush({
                G: state.G,
                ctx: state.ctx,
                game: opts.game,
                api: pluginState.api,
                data: pluginState.data,
            });
            state = {
                ...state,
                plugins: {
                    ...state.plugins,
                    [plugin.name]: { data: newData },
                },
            };
        }
        else if (plugin.flushRaw) {
            state = plugin.flushRaw({
                state,
                game: opts.game,
                api: pluginState.api,
                data: pluginState.data,
            });
            // Remove everything other than data.
            const data = state.plugins[name].data;
            state = {
                ...state,
                plugins: {
                    ...state.plugins,
                    [plugin.name]: { data },
                },
            };
        }
    });
    return state;
};
/**
 * Allows plugins to indicate if they should not be materialized on the client.
 * This will cause the client to discard the state update and wait for the
 * master instead.
 */
const NoClient = (state, opts) => {
    return [...DEFAULT_PLUGINS, ...opts.game.plugins]
        .filter(plugin => plugin.noClient !== undefined)
        .map(plugin => {
        const name = plugin.name;
        const pluginState = state.plugins[name];
        if (pluginState) {
            return plugin.noClient({
                G: state.G,
                ctx: state.ctx,
                game: opts.game,
                api: pluginState.api,
                data: pluginState.data,
            });
        }
        return false;
    })
        .some(value => value === true);
};

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var production = "development" === 'production';
var logfn = production ? function () {} : console.log;
var errorfn = console.error;
function info(msg) {
  logfn("INFO: ".concat(msg));
}
function error(error) {
  errorfn('ERROR:', error);
}

/**
 * Event to change the active players (and their stages) in the current turn.
 */

function SetActivePlayersEvent(state, _playerID, arg) {
  return _objectSpread2({}, state, {
    ctx: SetActivePlayers(state.ctx, arg)
  });
}
function SetActivePlayers(ctx, arg) {
  var _prevActivePlayers = ctx._prevActivePlayers;

  var _nextActivePlayers = arg.next || null;

  if (arg.revert) {
    _prevActivePlayers = _prevActivePlayers.concat({
      activePlayers: ctx.activePlayers,
      _activePlayersMoveLimit: ctx._activePlayersMoveLimit,
      _activePlayersNumMoves: ctx._activePlayersNumMoves
    });
  } else {
    _prevActivePlayers = [];
  }

  var activePlayers = {};
  var _activePlayersMoveLimit = {};

  if (Array.isArray(arg)) {
    var value = {};
    arg.forEach(function (v) {
      return value[v] = Stage.NULL;
    });
    activePlayers = value;
  }

  if (arg.currentPlayer !== undefined) {
    ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, ctx.currentPlayer, arg.currentPlayer);
  }

  if (arg.others !== undefined) {
    for (var i = 0; i < ctx.playOrder.length; i++) {
      var id = ctx.playOrder[i];

      if (id !== ctx.currentPlayer) {
        ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, id, arg.others);
      }
    }
  }

  if (arg.all !== undefined) {
    for (var _i = 0; _i < ctx.playOrder.length; _i++) {
      var _id = ctx.playOrder[_i];
      ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, _id, arg.all);
    }
  }

  if (arg.value) {
    for (var _id2 in arg.value) {
      ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, _id2, arg.value[_id2]);
    }
  }

  if (arg.moveLimit) {
    for (var _id3 in activePlayers) {
      if (_activePlayersMoveLimit[_id3] === undefined) {
        _activePlayersMoveLimit[_id3] = arg.moveLimit;
      }
    }
  }

  if (Object.keys(activePlayers).length == 0) {
    activePlayers = null;
  }

  if (Object.keys(_activePlayersMoveLimit).length == 0) {
    _activePlayersMoveLimit = null;
  }

  var _activePlayersNumMoves = {};

  for (var _id4 in activePlayers) {
    _activePlayersNumMoves[_id4] = 0;
  }

  return _objectSpread2({}, ctx, {
    activePlayers: activePlayers,
    _activePlayersMoveLimit: _activePlayersMoveLimit,
    _activePlayersNumMoves: _activePlayersNumMoves,
    _prevActivePlayers: _prevActivePlayers,
    _nextActivePlayers: _nextActivePlayers
  });
}
/**
 * Update activePlayers, setting it to previous, next or null values
 * when it becomes empty.
 * @param {Object} ctx
 */

function UpdateActivePlayersOnceEmpty(ctx) {
  var _ctx = ctx,
      activePlayers = _ctx.activePlayers,
      _activePlayersMoveLimit = _ctx._activePlayersMoveLimit,
      _activePlayersNumMoves = _ctx._activePlayersNumMoves,
      _prevActivePlayers = _ctx._prevActivePlayers;

  if (activePlayers && Object.keys(activePlayers).length == 0) {
    if (ctx._nextActivePlayers) {
      ctx = SetActivePlayers(ctx, ctx._nextActivePlayers);
      var _ctx2 = ctx;
      activePlayers = _ctx2.activePlayers;
      _activePlayersMoveLimit = _ctx2._activePlayersMoveLimit;
      _activePlayersNumMoves = _ctx2._activePlayersNumMoves;
      _prevActivePlayers = _ctx2._prevActivePlayers;
    } else if (_prevActivePlayers.length > 0) {
      var lastIndex = _prevActivePlayers.length - 1;
      var _prevActivePlayers$la = _prevActivePlayers[lastIndex];
      activePlayers = _prevActivePlayers$la.activePlayers;
      _activePlayersMoveLimit = _prevActivePlayers$la._activePlayersMoveLimit;
      _activePlayersNumMoves = _prevActivePlayers$la._activePlayersNumMoves;
      _prevActivePlayers = _prevActivePlayers.slice(0, lastIndex);
    } else {
      activePlayers = null;
      _activePlayersMoveLimit = null;
    }
  }

  return _objectSpread2({}, ctx, {
    activePlayers: activePlayers,
    _activePlayersMoveLimit: _activePlayersMoveLimit,
    _activePlayersNumMoves: _activePlayersNumMoves,
    _prevActivePlayers: _prevActivePlayers
  });
}
/**
 * Apply an active player argument to the given player ID
 * @param {Object} activePlayers
 * @param {Object} _activePlayersMoveLimit
 * @param {String} playerID The player to apply the parameter to
 * @param {(String|Object)} arg An active player argument
 */

function ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, playerID, arg) {
  if (_typeof(arg) !== 'object' || arg === Stage.NULL) {
    arg = {
      stage: arg
    };
  }

  if (arg.stage !== undefined) {
    activePlayers[playerID] = arg.stage;
    if (arg.moveLimit) _activePlayersMoveLimit[playerID] = arg.moveLimit;
  }
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
 * Called at the start of a turn to initialize turn order state.
 *
 * TODO: This is called inside StartTurn, which is called from
 * both UpdateTurn and StartPhase (so it's called at the beginning
 * of a new phase as well as between turns). We should probably
 * split it into two.
 *
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 */


function InitTurnOrderState(G, ctx, turn) {
  var order = turn.order;

  var playOrder = _toConsumableArray(new Array(ctx.numPlayers)).map(function (d, i) {
    return i + '';
  });

  if (order.playOrder !== undefined) {
    playOrder = order.playOrder(G, ctx);
  }

  var playOrderPos = order.first(G, ctx);
  var currentPlayer = getCurrentPlayer(playOrder, playOrderPos);
  ctx = _objectSpread2({}, ctx, {
    currentPlayer: currentPlayer,
    playOrderPos: playOrderPos,
    playOrder: playOrder
  });
  ctx = SetActivePlayers(ctx, turn.activePlayers || {});
  return ctx;
}
/**
 * Called at the end of each turn to update the turn order state.
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 * @param {string} endTurnArg - An optional argument to endTurn that
                                may specify the next player.
 */

function UpdateTurnOrderState(G, ctx, turn, endTurnArg) {
  var order = turn.order;
  var playOrderPos = ctx.playOrderPos;
  var currentPlayer = ctx.currentPlayer;
  var endPhase = false;

  if (endTurnArg && endTurnArg !== true) {
    if (_typeof(endTurnArg) !== 'object') {
      error("invalid argument to endTurn: ".concat(endTurnArg));
    }

    Object.keys(endTurnArg).forEach(function (arg) {
      switch (arg) {
        case 'remove':
          currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
          break;

        case 'next':
          playOrderPos = ctx.playOrder.indexOf(endTurnArg.next);
          currentPlayer = endTurnArg.next;
          break;

        default:
          error("invalid argument to endTurn: ".concat(arg));
      }
    });
  } else {
    var t = order.next(G, ctx);

    if (t === undefined) {
      endPhase = true;
    } else {
      playOrderPos = t;
      currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
    }
  }

  ctx = _objectSpread2({}, ctx, {
    playOrderPos: playOrderPos,
    currentPlayer: currentPlayer
  });
  return {
    endPhase: endPhase,
    ctx: ctx
  };
}
/**
 * Set of different turn orders possible in a phase.
 * These are meant to be passed to the `turn` setting
 * in the flow objects.
 *
 * Each object defines the first player when the phase / game
 * begins, and also a function `next` to determine who the
 * next player is when the turn ends.
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
      return ctx.turn === 0 ? ctx.playOrderPos : (ctx.playOrderPos + 1) % ctx.playOrder.length;
    },
    next: function next(G, ctx) {
      return (ctx.playOrderPos + 1) % ctx.playOrder.length;
    }
  },

  /**
   * RESET
   *
   * Similar to DEFAULT, but starts from 0 each time.
   */
  RESET: {
    first: function first() {
      return 0;
    },
    next: function next(G, ctx) {
      return (ctx.playOrderPos + 1) % ctx.playOrder.length;
    }
  },

  /**
   * CONTINUE
   *
   * Similar to DEFAULT, but starts with the player who ended the last phase.
   */
  CONTINUE: {
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
  }
};
var Stage = {
  NULL: null
};
var ActivePlayers = {
  /**
   * ALL
   *
   * The turn stays with one player, but any player can play (in any order)
   * until the phase ends.
   */
  ALL: {
    all: Stage.NULL
  },

  /**
   * ALL_ONCE
   *
   * The turn stays with one player, but any player can play (once, and in any order).
   * This is typically used in a phase where you want to elicit a response
   * from every player in the game.
   */
  ALL_ONCE: {
    all: Stage.NULL,
    moveLimit: 1
  },

  /**
   * OTHERS
   *
   * The turn stays with one player, and every *other* player can play (in any order)
   * until the phase ends.
   */
  OTHERS: {
    others: Stage.NULL
  },

  /**
   * OTHERS_ONCE
   *
   * The turn stays with one player, and every *other* player can play (once, and in any order).
   * This is typically used in a phase where you want to elicit a response
   * from every *other* player in the game.
   */
  OTHERS_ONCE: {
    others: Stage.NULL,
    moveLimit: 1
  }
};

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * Flow
 *
 * Creates a reducer that updates ctx (analogous to how moves update G).
 */
function Flow({ moves, phases, endIf, onEnd, turn, events, plugins, }) {
    // Attach defaults.
    if (moves === undefined) {
        moves = {};
    }
    if (events === undefined) {
        events = {};
    }
    if (plugins === undefined) {
        plugins = [];
    }
    if (phases === undefined) {
        phases = {};
    }
    if (!endIf)
        endIf = () => undefined;
    if (!onEnd)
        onEnd = G => G;
    if (!turn)
        turn = {};
    const phaseMap = { ...phases };
    if ('' in phaseMap) {
        error('cannot specify phase with empty name');
    }
    phaseMap[''] = {};
    let moveMap = {};
    let moveNames = new Set();
    let startingPhase = null;
    Object.keys(moves).forEach(name => moveNames.add(name));
    const HookWrapper = (fn) => {
        const withPlugins = FnWrap(fn, plugins);
        return (state) => {
            const ctxWithAPI = EnhanceCtx(state);
            return withPlugins(state.G, ctxWithAPI);
        };
    };
    const TriggerWrapper = (endIf) => {
        return (state) => {
            let ctxWithAPI = EnhanceCtx(state);
            return endIf(state.G, ctxWithAPI);
        };
    };
    const wrapped = {
        onEnd: HookWrapper(onEnd),
        endIf: TriggerWrapper(endIf),
    };
    for (let phase in phaseMap) {
        const conf = phaseMap[phase];
        if (conf.start === true) {
            startingPhase = phase;
        }
        if (conf.moves !== undefined) {
            for (let move of Object.keys(conf.moves)) {
                moveMap[phase + '.' + move] = conf.moves[move];
                moveNames.add(move);
            }
        }
        if (conf.endIf === undefined) {
            conf.endIf = () => undefined;
        }
        if (conf.onBegin === undefined) {
            conf.onBegin = G => G;
        }
        if (conf.onEnd === undefined) {
            conf.onEnd = G => G;
        }
        if (conf.turn === undefined) {
            conf.turn = turn;
        }
        if (conf.turn.order === undefined) {
            conf.turn.order = TurnOrder.DEFAULT;
        }
        if (conf.turn.onBegin === undefined) {
            conf.turn.onBegin = G => G;
        }
        if (conf.turn.onEnd === undefined) {
            conf.turn.onEnd = G => G;
        }
        if (conf.turn.endIf === undefined) {
            conf.turn.endIf = () => false;
        }
        if (conf.turn.onMove === undefined) {
            conf.turn.onMove = G => G;
        }
        if (conf.turn.stages === undefined) {
            conf.turn.stages = {};
        }
        for (const stage in conf.turn.stages) {
            const stageConfig = conf.turn.stages[stage];
            const moves = stageConfig.moves || {};
            for (let move of Object.keys(moves)) {
                let key = phase + '.' + stage + '.' + move;
                moveMap[key] = moves[move];
                moveNames.add(move);
            }
        }
        conf.wrapped = {
            onBegin: HookWrapper(conf.onBegin),
            onEnd: HookWrapper(conf.onEnd),
            endIf: TriggerWrapper(conf.endIf),
        };
        conf.turn.wrapped = {
            onMove: HookWrapper(conf.turn.onMove),
            onBegin: HookWrapper(conf.turn.onBegin),
            onEnd: HookWrapper(conf.turn.onEnd),
            endIf: TriggerWrapper(conf.turn.endIf),
        };
    }
    function GetPhase(ctx) {
        return ctx.phase ? phaseMap[ctx.phase] : phaseMap[''];
    }
    function OnMove(s) {
        return s;
    }
    function Process(state, events) {
        const phasesEnded = new Set();
        const turnsEnded = new Set();
        for (let i = 0; i < events.length; i++) {
            const { fn, arg, ...rest } = events[i];
            // Detect a loop of EndPhase calls.
            // This could potentially even be an infinite loop
            // if the endIf condition of each phase blindly
            // returns true. The moment we detect a single
            // loop, we just bail out of all phases.
            if (fn === EndPhase) {
                turnsEnded.clear();
                const phase = state.ctx.phase;
                if (phasesEnded.has(phase)) {
                    const ctx = { ...state.ctx, phase: null };
                    return { ...state, ctx };
                }
                phasesEnded.add(phase);
            }
            // Process event.
            let next = [];
            state = fn(state, {
                ...rest,
                arg,
                next,
            });
            if (fn === EndGame) {
                break;
            }
            // Check if we should end the game.
            const shouldEndGame = ShouldEndGame(state);
            if (shouldEndGame) {
                events.push({
                    fn: EndGame,
                    arg: shouldEndGame,
                    turn: state.ctx.turn,
                    phase: state.ctx.phase,
                    automatic: true,
                });
                continue;
            }
            // Check if we should end the phase.
            const shouldEndPhase = ShouldEndPhase(state);
            if (shouldEndPhase) {
                events.push({
                    fn: EndPhase,
                    arg: shouldEndPhase,
                    turn: state.ctx.turn,
                    phase: state.ctx.phase,
                    automatic: true,
                });
                continue;
            }
            // Check if we should end the turn.
            if (fn === OnMove) {
                const shouldEndTurn = ShouldEndTurn(state);
                if (shouldEndTurn) {
                    events.push({
                        fn: EndTurn,
                        arg: shouldEndTurn,
                        turn: state.ctx.turn,
                        phase: state.ctx.phase,
                        automatic: true,
                    });
                    continue;
                }
            }
            events.push(...next);
        }
        return state;
    }
    ///////////
    // Start //
    ///////////
    function StartGame(state, { next }) {
        next.push({ fn: StartPhase });
        return state;
    }
    function StartPhase(state, { next }) {
        let { G, ctx } = state;
        const conf = GetPhase(ctx);
        // Run any phase setup code provided by the user.
        G = conf.wrapped.onBegin(state);
        next.push({ fn: StartTurn });
        return { ...state, G, ctx };
    }
    function StartTurn(state, { currentPlayer }) {
        let { G, ctx } = state;
        const conf = GetPhase(ctx);
        // Initialize the turn order state.
        if (currentPlayer) {
            ctx = { ...ctx, currentPlayer };
            if (conf.turn.activePlayers) {
                ctx = SetActivePlayers(ctx, conf.turn.activePlayers);
            }
        }
        else {
            // This is only called at the beginning of the phase
            // when there is no currentPlayer yet.
            ctx = InitTurnOrderState(G, ctx, conf.turn);
        }
        const turn = ctx.turn + 1;
        ctx = { ...ctx, turn, numMoves: 0, _prevActivePlayers: [] };
        G = conf.turn.wrapped.onBegin({ ...state, G, ctx });
        const _undo = [{ G, ctx }];
        return { ...state, G, ctx, _undo, _redo: [] };
    }
    ////////////
    // Update //
    ////////////
    function UpdatePhase(state, { arg, next, phase }) {
        const conf = GetPhase({ phase });
        let { ctx } = state;
        if (arg && arg.next) {
            if (arg.next in phaseMap) {
                ctx = { ...ctx, phase: arg.next };
            }
            else {
                error('invalid phase: ' + arg.next);
                return state;
            }
        }
        else if (conf.next !== undefined) {
            ctx = { ...ctx, phase: conf.next };
        }
        else {
            ctx = { ...ctx, phase: null };
        }
        state = { ...state, ctx };
        // Start the new phase.
        next.push({ fn: StartPhase });
        return state;
    }
    function UpdateTurn(state, { arg, currentPlayer, next }) {
        let { G, ctx } = state;
        const conf = GetPhase(ctx);
        // Update turn order state.
        const { endPhase, ctx: newCtx } = UpdateTurnOrderState(G, { ...ctx, currentPlayer }, conf.turn, arg);
        ctx = newCtx;
        state = { ...state, G, ctx };
        if (endPhase) {
            next.push({ fn: EndPhase, turn: ctx.turn, phase: ctx.phase });
        }
        else {
            next.push({ fn: StartTurn, currentPlayer: ctx.currentPlayer });
        }
        return state;
    }
    function UpdateStage(state, { arg, playerID }) {
        if (typeof arg === 'string') {
            arg = { stage: arg };
        }
        let { ctx } = state;
        let { activePlayers, _activePlayersMoveLimit, _activePlayersNumMoves, } = ctx;
        if (arg.stage) {
            if (activePlayers === null) {
                activePlayers = {};
            }
            activePlayers[playerID] = arg.stage;
            _activePlayersNumMoves[playerID] = 0;
            if (arg.moveLimit) {
                if (_activePlayersMoveLimit === null) {
                    _activePlayersMoveLimit = {};
                }
                _activePlayersMoveLimit[playerID] = arg.moveLimit;
            }
        }
        ctx = {
            ...ctx,
            activePlayers,
            _activePlayersMoveLimit,
            _activePlayersNumMoves,
        };
        return { ...state, ctx };
    }
    ///////////////
    // ShouldEnd //
    ///////////////
    function ShouldEndGame(state) {
        return wrapped.endIf(state);
    }
    function ShouldEndPhase(state) {
        const conf = GetPhase(state.ctx);
        return conf.wrapped.endIf(state);
    }
    function ShouldEndTurn(state) {
        const conf = GetPhase(state.ctx);
        // End the turn if the required number of moves has been made.
        const currentPlayerMoves = state.ctx.numMoves || 0;
        if (conf.turn.moveLimit && currentPlayerMoves >= conf.turn.moveLimit) {
            return true;
        }
        return conf.turn.wrapped.endIf(state);
    }
    /////////
    // End //
    /////////
    function EndGame(state, { arg, phase }) {
        state = EndPhase(state, { phase });
        if (arg === undefined) {
            arg = true;
        }
        state = { ...state, ctx: { ...state.ctx, gameover: arg } };
        // Run game end hook.
        const G = wrapped.onEnd(state);
        return { ...state, G };
    }
    function EndPhase(state, { arg, next, turn, automatic }) {
        // End the turn first.
        state = EndTurn(state, { turn, force: true });
        let G = state.G;
        let ctx = state.ctx;
        if (next) {
            next.push({ fn: UpdatePhase, arg, phase: ctx.phase });
        }
        // If we aren't in a phase, there is nothing else to do.
        if (ctx.phase === null) {
            return state;
        }
        // Run any cleanup code for the phase that is about to end.
        const conf = GetPhase(ctx);
        G = conf.wrapped.onEnd(state);
        // Reset the phase.
        ctx = { ...ctx, phase: null };
        // Add log entry.
        const action = gameEvent('endPhase', arg);
        const logEntry = {
            action,
            _stateID: state._stateID,
            turn: state.ctx.turn,
            phase: state.ctx.phase,
        };
        if (automatic) {
            logEntry.automatic = true;
        }
        const deltalog = [...state.deltalog, logEntry];
        return { ...state, G, ctx, deltalog };
    }
    function EndTurn(state, { arg, next, turn, force, automatic, playerID }) {
        // This is not the turn that EndTurn was originally
        // called for. The turn was probably ended some other way.
        if (turn !== state.ctx.turn) {
            return state;
        }
        let { G, ctx } = state;
        const conf = GetPhase(ctx);
        // Prevent ending the turn if moveLimit hasn't been reached.
        const currentPlayerMoves = ctx.numMoves || 0;
        if (!force &&
            conf.turn.moveLimit &&
            currentPlayerMoves < conf.turn.moveLimit) {
            info(`cannot end turn before making ${conf.turn.moveLimit} moves`);
            return state;
        }
        // Run turn-end triggers.
        G = conf.turn.wrapped.onEnd(state);
        if (next) {
            next.push({ fn: UpdateTurn, arg, currentPlayer: ctx.currentPlayer });
        }
        // Reset activePlayers.
        ctx = { ...ctx, activePlayers: null };
        // Remove player from playerOrder
        if (arg && arg.remove) {
            playerID = playerID || ctx.currentPlayer;
            const playOrder = ctx.playOrder.filter(i => i != playerID);
            const playOrderPos = ctx.playOrderPos > playOrder.length - 1 ? 0 : ctx.playOrderPos;
            ctx = { ...ctx, playOrder, playOrderPos };
            if (playOrder.length === 0) {
                next.push({ fn: EndPhase, turn: ctx.turn, phase: ctx.phase });
                return state;
            }
        }
        // Add log entry.
        const action = gameEvent('endTurn', arg);
        const logEntry = {
            action,
            _stateID: state._stateID,
            turn: state.ctx.turn,
            phase: state.ctx.phase,
        };
        if (automatic) {
            logEntry.automatic = true;
        }
        const deltalog = [...(state.deltalog || []), logEntry];
        return { ...state, G, ctx, deltalog, _undo: [], _redo: [] };
    }
    function EndStage(state, { arg, next, automatic, playerID }) {
        playerID = playerID || state.ctx.currentPlayer;
        let { ctx } = state;
        let { activePlayers, _activePlayersMoveLimit } = ctx;
        const playerInStage = activePlayers !== null && playerID in activePlayers;
        if (!arg && playerInStage) {
            const conf = GetPhase(ctx);
            const stage = conf.turn.stages[activePlayers[playerID]];
            if (stage && stage.next)
                arg = stage.next;
        }
        if (next && arg) {
            next.push({ fn: UpdateStage, arg, playerID });
        }
        // If player isn’t in a stage, there is nothing else to do.
        if (!playerInStage)
            return state;
        // Remove player from activePlayers.
        activePlayers = Object.keys(activePlayers)
            .filter(id => id !== playerID)
            .reduce((obj, key) => {
            obj[key] = activePlayers[key];
            return obj;
        }, {});
        if (_activePlayersMoveLimit) {
            // Remove player from _activePlayersMoveLimit.
            _activePlayersMoveLimit = Object.keys(_activePlayersMoveLimit)
                .filter(id => id !== playerID)
                .reduce((obj, key) => {
                obj[key] = _activePlayersMoveLimit[key];
                return obj;
            }, {});
        }
        ctx = UpdateActivePlayersOnceEmpty({
            ...ctx,
            activePlayers,
            _activePlayersMoveLimit,
        });
        // Add log entry.
        const action = gameEvent('endStage', arg);
        const logEntry = {
            action,
            _stateID: state._stateID,
            turn: state.ctx.turn,
            phase: state.ctx.phase,
        };
        if (automatic) {
            logEntry.automatic = true;
        }
        const deltalog = [...(state.deltalog || []), logEntry];
        return { ...state, ctx, deltalog };
    }
    /**
     * Retrieves the relevant move that can be played by playerID.
     *
     * If ctx.activePlayers is set (i.e. one or more players are in some stage),
     * then it attempts to find the move inside the stages config for
     * that turn. If the stage for a player is '', then the player is
     * allowed to make a move (as determined by the phase config), but
     * isn't restricted to a particular set as defined in the stage config.
     *
     * If not, it then looks for the move inside the phase.
     *
     * If it doesn't find the move there, it looks at the global move definition.
     *
     * @param {object} ctx
     * @param {string} name
     * @param {string} playerID
     */
    function GetMove(ctx, name, playerID) {
        const conf = GetPhase(ctx);
        const stages = conf.turn.stages;
        const { activePlayers } = ctx;
        if (activePlayers &&
            activePlayers[playerID] !== undefined &&
            activePlayers[playerID] !== Stage.NULL &&
            stages[activePlayers[playerID]] !== undefined &&
            stages[activePlayers[playerID]].moves !== undefined) {
            // Check if moves are defined for the player's stage.
            const stage = stages[activePlayers[playerID]];
            const moves = stage.moves;
            if (name in moves) {
                return moves[name];
            }
        }
        else if (conf.moves) {
            // Check if moves are defined for the current phase.
            if (name in conf.moves) {
                return conf.moves[name];
            }
        }
        else if (name in moves) {
            // Check for the move globally.
            return moves[name];
        }
        return null;
    }
    function ProcessMove(state, action) {
        let conf = GetPhase(state.ctx);
        let { ctx } = state;
        let { _activePlayersNumMoves } = ctx;
        const { playerID } = action;
        if (ctx.activePlayers)
            _activePlayersNumMoves[playerID]++;
        let numMoves = state.ctx.numMoves;
        if (playerID == state.ctx.currentPlayer) {
            numMoves++;
        }
        state = {
            ...state,
            ctx: {
                ...ctx,
                numMoves,
                _activePlayersNumMoves,
            },
        };
        if (ctx._activePlayersMoveLimit &&
            _activePlayersNumMoves[playerID] >= ctx._activePlayersMoveLimit[playerID]) {
            state = EndStage(state, { playerID, automatic: true });
        }
        const G = conf.turn.wrapped.onMove(state);
        state = { ...state, G };
        // Update undo / redo state.
        const undo = state._undo || [];
        const moveType = action.type;
        state = {
            ...state,
            _undo: [...undo, { G: state.G, ctx: state.ctx, moveType }],
            _redo: [],
        };
        let events = [{ fn: OnMove }];
        return Process(state, events);
    }
    function SetStageEvent(state, playerID, arg) {
        return Process(state, [{ fn: EndStage, arg, playerID }]);
    }
    function EndStageEvent(state, playerID) {
        return Process(state, [{ fn: EndStage, playerID }]);
    }
    function SetPhaseEvent(state, _playerID, newPhase) {
        return Process(state, [
            {
                fn: EndPhase,
                phase: state.ctx.phase,
                turn: state.ctx.turn,
                arg: { next: newPhase },
            },
        ]);
    }
    function EndPhaseEvent(state) {
        return Process(state, [
            { fn: EndPhase, phase: state.ctx.phase, turn: state.ctx.turn },
        ]);
    }
    function EndTurnEvent(state, _playerID, arg) {
        return Process(state, [
            { fn: EndTurn, turn: state.ctx.turn, phase: state.ctx.phase, arg },
        ]);
    }
    function PassEvent(state, _playerID, arg) {
        return Process(state, [
            {
                fn: EndTurn,
                turn: state.ctx.turn,
                phase: state.ctx.phase,
                force: true,
                arg,
            },
        ]);
    }
    function EndGameEvent(state, _playerID, arg) {
        return Process(state, [
            { fn: EndGame, turn: state.ctx.turn, phase: state.ctx.phase, arg },
        ]);
    }
    const eventHandlers = {
        endStage: EndStageEvent,
        setStage: SetStageEvent,
        endTurn: EndTurnEvent,
        pass: PassEvent,
        endPhase: EndPhaseEvent,
        setPhase: SetPhaseEvent,
        endGame: EndGameEvent,
        setActivePlayers: SetActivePlayersEvent,
    };
    let enabledEventNames = [];
    if (events.endTurn !== false) {
        enabledEventNames.push('endTurn');
    }
    if (events.pass !== false) {
        enabledEventNames.push('pass');
    }
    if (events.endPhase !== false) {
        enabledEventNames.push('endPhase');
    }
    if (events.setPhase !== false) {
        enabledEventNames.push('setPhase');
    }
    if (events.endGame !== false) {
        enabledEventNames.push('endGame');
    }
    if (events.setActivePlayers !== false) {
        enabledEventNames.push('setActivePlayers');
    }
    if (events.endStage !== false) {
        enabledEventNames.push('endStage');
    }
    if (events.setStage !== false) {
        enabledEventNames.push('setStage');
    }
    function ProcessEvent(state, action) {
        const { type, playerID, args } = action.payload;
        if (eventHandlers.hasOwnProperty(type)) {
            const eventArgs = [state, playerID].concat(args);
            return eventHandlers[type].apply({}, eventArgs);
        }
        return state;
    }
    function IsPlayerActive(_G, ctx, playerID) {
        if (ctx.activePlayers) {
            return playerID in ctx.activePlayers;
        }
        return ctx.currentPlayer === playerID;
    }
    return {
        ctx: (numPlayers) => ({
            numPlayers,
            turn: 0,
            currentPlayer: '0',
            playOrder: [...new Array(numPlayers)].map((_d, i) => i + ''),
            playOrderPos: 0,
            phase: startingPhase,
            activePlayers: null,
        }),
        init: (state) => {
            return Process(state, [{ fn: StartGame }]);
        },
        isPlayerActive: IsPlayerActive,
        eventHandlers,
        eventNames: Object.keys(eventHandlers),
        enabledEventNames,
        moveMap,
        moveNames: [...moveNames.values()],
        processMove: ProcessMove,
        processEvent: ProcessEvent,
        getMove: GetMove,
    };
}

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
function IsProcessed(game) {
    return game.processMove !== undefined;
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
 */
function Game(game) {
    // The Game() function has already been called on this
    // config object, so just pass it through.
    if (IsProcessed(game)) {
        return game;
    }
    if (game.name === undefined)
        game.name = 'default';
    if (game.setup === undefined)
        game.setup = () => ({});
    if (game.moves === undefined)
        game.moves = {};
    if (game.playerView === undefined)
        game.playerView = G => G;
    if (game.plugins === undefined)
        game.plugins = [];
    game.plugins.forEach(plugin => {
        if (plugin.name === undefined) {
            throw new Error('Plugin missing name attribute');
        }
        if (plugin.name.includes(' ')) {
            throw new Error(plugin.name + ': Plugin name must not include spaces');
        }
    });
    if (game.name.includes(' ')) {
        throw new Error(game.name + ': Game name must not include spaces');
    }
    const flow = Flow(game);
    return {
        ...game,
        flow,
        moveNames: flow.moveNames,
        pluginNames: game.plugins.map(p => p.name),
        processMove: (state, action) => {
            let moveFn = flow.getMove(state.ctx, action.type, action.playerID);
            if (IsLongFormMove(moveFn)) {
                moveFn = moveFn.move;
            }
            if (moveFn instanceof Function) {
                const fn = FnWrap(moveFn, game.plugins);
                const ctxWithAPI = {
                    ...EnhanceCtx(state),
                    playerID: action.playerID,
                };
                let args = [state.G, ctxWithAPI];
                if (action.args !== undefined) {
                    args = args.concat(action.args);
                }
                return fn(...args);
            }
            error(`invalid move object: ${action.type}`);
            return state.G;
        },
    };
}
function IsLongFormMove(move) {
    return move instanceof Object && move.move !== undefined;
}

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * Returns true if a move can be undone.
 */
const CanUndoMove = (G, ctx, move) => {
    function HasUndoable(move) {
        return move.undoable !== undefined;
    }
    function IsFunction(undoable) {
        return undoable instanceof Function;
    }
    if (!HasUndoable(move)) {
        return true;
    }
    if (IsFunction(move.undoable)) {
        return move.undoable(G, ctx);
    }
    return move.undoable;
};
/**
 * Moves can return this when they want to indicate
 * that the combination of arguments is illegal and
 * the move ought to be discarded.
 */
const INVALID_MOVE = 'INVALID_MOVE';
/**
 * CreateGameReducer
 *
 * Creates the main game state reducer.
 */
function CreateGameReducer({ game, isClient, }) {
    game = Game(game);
    /**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */
    return (state = null, action) => {
        switch (action.type) {
            case GAME_EVENT: {
                state = { ...state, deltalog: [] };
                // Process game events only on the server.
                // These events like `endTurn` typically
                // contain code that may rely on secret state
                // and cannot be computed on the client.
                if (isClient) {
                    return state;
                }
                // Disallow events once the game is over.
                if (state.ctx.gameover !== undefined) {
                    error(`cannot call event after game end`);
                    return state;
                }
                // Ignore the event if the player isn't active.
                if (action.payload.playerID !== null &&
                    action.payload.playerID !== undefined &&
                    !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
                    error(`disallowed event: ${action.payload.type}`);
                    return state;
                }
                // Execute plugins.
                state = Enhance(state, { game, isClient: false });
                // Process event.
                let newState = game.flow.processEvent(state, action);
                // Execute plugins.
                newState = Flush(newState, { game, isClient: false });
                return { ...newState, _stateID: state._stateID + 1 };
            }
            case MAKE_MOVE: {
                state = { ...state, deltalog: [] };
                // Check whether the move is allowed at this time.
                const move = game.flow.getMove(state.ctx, action.payload.type, action.payload.playerID || state.ctx.currentPlayer);
                if (move === null) {
                    error(`disallowed move: ${action.payload.type}`);
                    return state;
                }
                // Don't run move on client if move says so.
                if (isClient && move.client === false) {
                    return state;
                }
                // Disallow moves once the game is over.
                if (state.ctx.gameover !== undefined) {
                    error(`cannot make move after game end`);
                    return state;
                }
                // Ignore the move if the player isn't active.
                if (action.payload.playerID !== null &&
                    action.payload.playerID !== undefined &&
                    !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
                    error(`disallowed move: ${action.payload.type}`);
                    return state;
                }
                // Execute plugins.
                state = Enhance(state, {
                    game,
                    isClient,
                });
                // Process the move.
                let G = game.processMove(state, action.payload);
                // The game declared the move as invalid.
                if (G === INVALID_MOVE) {
                    error(`invalid move: ${action.payload.type} args: ${action.payload.args}`);
                    return state;
                }
                // Create a log entry for this move.
                let logEntry = {
                    action,
                    _stateID: state._stateID,
                    turn: state.ctx.turn,
                    phase: state.ctx.phase,
                };
                if (move.redact === true) {
                    logEntry.redact = true;
                }
                const newState = {
                    ...state,
                    G,
                    deltalog: [logEntry],
                    _stateID: state._stateID + 1,
                };
                // Some plugin indicated that it is not suitable to be
                // materialized on the client (and must wait for the server
                // response instead).
                if (isClient && NoClient(newState, { game })) {
                    return state;
                }
                state = newState;
                // If we're on the client, just process the move
                // and no triggers in multiplayer mode.
                // These will be processed on the server, which
                // will send back a state update.
                if (isClient) {
                    state = Flush(state, {
                        game,
                        isClient: true,
                    });
                    return state;
                }
                // Allow the flow reducer to process any triggers that happen after moves.
                state = game.flow.processMove(state, action.payload);
                state = Flush(state, { game });
                return state;
            }
            case RESET:
            case UPDATE:
            case SYNC: {
                return action.state;
            }
            case UNDO: {
                const { _undo, _redo } = state;
                if (_undo.length < 2) {
                    return state;
                }
                const last = _undo[_undo.length - 1];
                const restore = _undo[_undo.length - 2];
                // Only allow undoable moves to be undone.
                const lastMove = game.flow.getMove(state.ctx, last.moveType, state.ctx.currentPlayer);
                if (!CanUndoMove(state.G, state.ctx, lastMove)) {
                    return state;
                }
                return {
                    ...state,
                    G: restore.G,
                    ctx: restore.ctx,
                    _undo: _undo.slice(0, _undo.length - 1),
                    _redo: [last, ..._redo],
                };
            }
            case REDO: {
                const { _undo, _redo } = state;
                if (_redo.length == 0) {
                    return state;
                }
                const first = _redo[0];
                return {
                    ...state,
                    G: first.G,
                    ctx: first.ctx,
                    _undo: [..._undo, first],
                    _redo: _redo.slice(1),
                };
            }
            case PLUGIN: {
                return ProcessAction(state, action, { game });
            }
            default: {
                return state;
            }
        }
    };
}




/***/ }),

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: produce, setAutoFreeze, setUseProxies, applyPatches, Immer, original, isDraft, isDraftable, nothing, immerable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return Immer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return isDraftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return DRAFTABLE; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : defineProperty({}, "immer-nothing", true);

var DRAFTABLE = typeof Symbol !== "undefined" ? Symbol("immer-draftable") : "__$immer_draftable";

var DRAFT_STATE = typeof Symbol !== "undefined" ? Symbol("immer-state") : "__$immer_state";

function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}

function isDraftable(value) {
    if (!value || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    if (!proto || proto === Object.prototype) return true;
    return !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE];
}

function original(value) {
    if (value && value[DRAFT_STATE]) {
        return value[DRAFT_STATE].base;
    }
    // otherwise return undefined
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;

function shallowCopy(base) {
    var invokeGetters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (Array.isArray(base)) return base.slice();
    var clone = Object.create(Object.getPrototypeOf(base));
    ownKeys(base).forEach(function (key) {
        if (key === DRAFT_STATE) {
            return; // Never copy over draft state.
        }
        var desc = Object.getOwnPropertyDescriptor(base, key);
        if (desc.get) {
            if (!invokeGetters) {
                throw new Error("Immer drafts cannot have computed properties");
            }
            desc.value = desc.get.call(base);
        }
        if (desc.enumerable) {
            clone[key] = desc.value;
        } else {
            Object.defineProperty(clone, key, {
                value: desc.value,
                writable: true,
                configurable: true
            });
        }
    });
    return clone;
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i], value);
        }
    } else {
        ownKeys(value).forEach(function (key) {
            return cb(key, value[key], value);
        });
    }
}

function isEnumerable(base, prop) {
    return Object.getOwnPropertyDescriptor(base, prop).enumerable;
}

function has(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

// @ts-check

var descriptors = {};

// For nested produce calls:
var scopes = [];
var currentScope = function currentScope() {
    return scopes[scopes.length - 1];
};

function willFinalize(result, baseDraft, needPatches) {
    var scope = currentScope();
    scope.forEach(function (state) {
        return state.finalizing = true;
    });
    if (result === undefined || result === baseDraft) {
        if (needPatches) markChangesRecursively(baseDraft);
        // This is faster when we don't care about which attributes changed.
        markChangesSweep(scope);
    }
}

function createDraft(base, parent) {
    var isArray = Array.isArray(base);
    var draft = clonePotentialDraft(base);
    each(draft, function (prop) {
        proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
    });

    // See "proxy.js" for property documentation.
    var state = {
        scope: parent ? parent.scope : currentScope(),
        modified: false,
        finalizing: false, // es5 only
        finalized: false,
        assigned: {},
        parent: parent,
        base: base,
        draft: draft,
        copy: null,
        revoke: revoke,
        revoked: false // es5 only
    };

    createHiddenProperty(draft, DRAFT_STATE, state);
    state.scope.push(state);
    return draft;
}

function revoke() {
    this.revoked = true;
}

function source(state) {
    return state.copy || state.base;
}

function _get(state, prop) {
    assertUnrevoked(state);
    var value = source(state)[prop];
    // Drafts are only created for proxyable values that exist in the base state.
    if (!state.finalizing && value === state.base[prop] && isDraftable(value)) {
        prepareCopy(state);
        return state.copy[prop] = createDraft(value, state);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnrevoked(state);
    state.assigned[prop] = true;
    if (!state.modified) {
        if (is(source(state)[prop], value)) return;
        markChanged(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged(state.parent);
    }
}

function prepareCopy(state) {
    if (!state.copy) state.copy = clonePotentialDraft(state.base);
}

function clonePotentialDraft(base) {
    var state = base && base[DRAFT_STATE];
    if (state) {
        state.finalizing = true;
        var draft = shallowCopy(state.draft, true);
        state.finalizing = false;
        return draft;
    }
    return shallowCopy(base);
}

function proxyProperty(draft, prop, enumerable) {
    var desc = descriptors[prop];
    if (desc) {
        desc.enumerable = enumerable;
    } else {
        descriptors[prop] = desc = {
            configurable: true,
            enumerable: enumerable,
            get: function get$$1() {
                return _get(this[DRAFT_STATE], prop);
            },
            set: function set$$1(value) {
                _set(this[DRAFT_STATE], prop, value);
            }
        };
    }
    Object.defineProperty(draft, prop, desc);
}

function assertUnrevoked(state) {
    if (state.revoked === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(source(state)));
}

// This looks expensive, but only proxies are visited, and only objects without known changes are scanned.
function markChangesSweep(scope) {
    // The natural order of drafts in the `scope` array is based on when they
    // were accessed. By processing drafts in reverse natural order, we have a
    // better chance of processing leaf nodes first. When a leaf node is known to
    // have changed, we can avoid any traversal of its ancestor nodes.
    for (var i = scope.length - 1; i >= 0; i--) {
        var state = scope[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged(state);
            } else if (hasObjectChanges(state)) markChanged(state);
        }
    }
}

function markChangesRecursively(object) {
    if (!object || (typeof object === "undefined" ? "undefined" : _typeof(object)) !== "object") return;
    var state = object[DRAFT_STATE];
    if (!state) return;
    var base = state.base,
        draft = state.draft,
        assigned = state.assigned;

    if (!Array.isArray(object)) {
        // Look for added keys.
        Object.keys(draft).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (base[key] === undefined && !has(base, key)) {
                assigned[key] = true;
                markChanged(state);
            } else if (!assigned[key]) {
                // Only untouched properties trigger recursion.
                markChangesRecursively(draft[key]);
            }
        });
        // Look for removed keys.
        Object.keys(base).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (draft[key] === undefined && !has(draft, key)) {
                assigned[key] = false;
                markChanged(state);
            }
        });
    } else if (hasArrayChanges(state)) {
        markChanged(state);
        assigned.length = true;
        if (draft.length < base.length) {
            for (var i = draft.length; i < base.length; i++) {
                assigned[i] = false;
            }
        } else {
            for (var _i = base.length; _i < draft.length; _i++) {
                assigned[_i] = true;
            }
        }
        for (var _i2 = 0; _i2 < draft.length; _i2++) {
            // Only untouched indices trigger recursion.
            if (assigned[_i2] === undefined) markChangesRecursively(draft[_i2]);
        }
    }
}

function hasObjectChanges(state) {
    var base = state.base,
        draft = state.draft;

    // Search for added keys. Start at the back, because non-numeric keys
    // are ordered by time of definition on the object.

    var keys = Object.keys(draft);
    for (var i = keys.length - 1; i >= 0; i--) {
        // The `undefined` check is a fast path for pre-existing keys.
        if (base[keys[i]] === undefined && !has(base, keys[i])) {
            return true;
        }
    }

    // Since no keys have been added, we can compare lengths to know if an
    // object has been deleted.
    return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
    var draft = state.draft;

    if (draft.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}



var legacyProxy = Object.freeze({
	scopes: scopes,
	currentScope: currentScope,
	willFinalize: willFinalize,
	createDraft: createDraft
});

// @ts-check

// For nested produce calls:
var scopes$1 = [];
var currentScope$1 = function currentScope() {
    return scopes$1[scopes$1.length - 1];
};

// Do nothing before being finalized.
function willFinalize$1() {}

function createDraft$1(base, parent) {
    var state = {
        // Track which produce call this is associated with.
        scope: parent ? parent.scope : currentScope$1(),
        // True for both shallow and deep changes.
        modified: false,
        // Used during finalization.
        finalized: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned: {},
        // The parent draft state.
        parent: parent,
        // The base state.
        base: base,
        // The base proxy.
        draft: null,
        // Any property proxies.
        drafts: {},
        // The base copy with any updated values.
        copy: null,
        // Called by the `produce` function.
        revoke: null
    };

    var _ref = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps),
        revoke = _ref.revoke,
        proxy = _ref.proxy;

    state.draft = proxy;
    state.revoke = revoke;

    state.scope.push(state);
    return proxy;
}

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source$1(target);
    },
    ownKeys: function ownKeys$$1(target) {
        return Reflect.ownKeys(source$1(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: function defineProperty() {
        throw new Error("Object.defineProperty() cannot be used on an Immer draft"); // prettier-ignore
    },
    getPrototypeOf: function getPrototypeOf(target) {
        return Object.getPrototypeOf(target.base);
    },
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function (state, prop) {
    if (isNaN(parseInt(prop))) {
        throw new Error("Immer only supports deleting array indices"); // prettier-ignore
    }
    return objectTraps.deleteProperty.call(this, state[0], prop);
};
arrayTraps.set = function (state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) {
        throw new Error("Immer only supports setting array indices and the 'length' property"); // prettier-ignore
    }
    return objectTraps.set.call(this, state[0], prop, value);
};

function source$1(state) {
    return state.copy || state.base;
}

function get$1(state, prop) {
    if (prop === DRAFT_STATE) return state;
    var drafts = state.drafts;

    // Check for existing draft in unmodified state.

    if (!state.modified && has(drafts, prop)) {
        return drafts[prop];
    }

    var value = source$1(state)[prop];
    if (state.finalized || !isDraftable(value)) return value;

    // Check for existing draft in modified state.
    if (state.modified) {
        // Assigned values are never drafted. This catches any drafts we created, too.
        if (value !== state.base[prop]) return value;
        // Store drafts on the copy (when one exists).
        drafts = state.copy;
    }

    return drafts[prop] = createDraft$1(value, state);
}

function set$1(state, prop, value) {
    if (!state.modified) {
        // Optimize based on value's truthiness. Truthy values are guaranteed to
        // never be undefined, so we can avoid the `in` operator. Lastly, truthy
        // values may be drafts, but falsy values are never drafts.
        var isUnchanged = value ? is(state.base[prop], value) || value === state.drafts[prop] : is(state.base[prop], value) && prop in state.base;
        if (isUnchanged) return true;
        markChanged$1(state);
    }
    state.assigned[prop] = true;
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (state.base[prop] !== undefined || prop in state.base) {
        state.assigned[prop] = false;
        markChanged$1(state);
    }
    if (state.copy) delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = source$1(state);
    var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (desc) {
        desc.writable = true;
        desc.configurable = !Array.isArray(owner) || prop !== "length";
    }
    return desc;
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = assign(shallowCopy(state.base), state.drafts);
        state.drafts = null;
        if (state.parent) markChanged$1(state.parent);
    }
}

var modernProxy = Object.freeze({
	scopes: scopes$1,
	currentScope: currentScope$1,
	willFinalize: willFinalize$1,
	createDraft: createDraft$1
});

function generatePatches(state, basePath, patches, inversePatches) {
    Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy,
        assigned = state.assigned;

    var minLength = Math.min(base.length, copy.length);

    // Look for replaced indices.
    for (var i = 0; i < minLength; i++) {
        if (assigned[i] && base[i] !== copy[i]) {
            var path = basePath.concat(i);
            patches.push({ op: "replace", path: path, value: copy[i] });
            inversePatches.push({ op: "replace", path: path, value: base[i] });
        }
    }

    // Did the array expand?
    if (minLength < copy.length) {
        for (var _i = minLength; _i < copy.length; _i++) {
            patches.push({
                op: "add",
                path: basePath.concat(_i),
                value: copy[_i]
            });
        }
        inversePatches.push({
            op: "replace",
            path: basePath.concat("length"),
            value: base.length
        });
    }

    // ...or did it shrink?
    else if (minLength < base.length) {
            patches.push({
                op: "replace",
                path: basePath.concat("length"),
                value: copy.length
            });
            for (var _i2 = minLength; _i2 < base.length; _i2++) {
                inversePatches.push({
                    op: "add",
                    path: basePath.concat(_i2),
                    value: base[_i2]
                });
            }
        }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy;

    each(state.assigned, function (key, assignedValue) {
        var origValue = base[key];
        var value = copy[key];
        var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
        if (origValue === value && op === "replace") return;
        var path = basePath.concat(key);
        patches.push(op === "remove" ? { op: op, path: path } : { op: op, path: path, value: value });
        inversePatches.push(op === "add" ? { op: "remove", path: path } : op === "remove" ? { op: "add", path: path, value: origValue } : { op: "replace", path: path, value: origValue });
    });
}

function applyPatches(draft, patches) {
    for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var path = patch.path;

        if (path.length === 0 && patch.op === "replace") {
            draft = patch.value;
        } else {
            var base = draft;
            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {
                base = base[path[_i3]];
                if (!base || (typeof base === "undefined" ? "undefined" : _typeof(base)) !== "object") throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); // prettier-ignore
            }
            var key = path[path.length - 1];
            switch (patch.op) {
                case "replace":
                case "add":
                    // TODO: add support is not extensive, it does not support insertion or `-` atm!
                    base[key] = patch.value;
                    break;
                case "remove":
                    if (Array.isArray(base)) {
                        if (key !== base.length - 1) throw new Error("Only the last index of an array can be removed, index: " + key + ", length: " + base.length); // prettier-ignore
                        base.length -= 1;
                    } else {
                        delete base[key];
                    }
                    break;
                default:
                    throw new Error("Unsupported patch operation: " + patch.op);
            }
        }
    }
    return draft;
}

function verifyMinified() {}

var configDefaults = {
    useProxies: typeof Proxy !== "undefined" && typeof Reflect !== "undefined",
    autoFreeze: typeof process !== "undefined" ? "development" !== "production" : verifyMinified.name === "verifyMinified",
    onAssign: null,
    onDelete: null,
    onCopy: null
};

var Immer = function () {
    function Immer(config) {
        classCallCheck(this, Immer);

        assign(this, configDefaults, config);
        this.setUseProxies(this.useProxies);
        this.produce = this.produce.bind(this);
    }

    createClass(Immer, [{
        key: "produce",
        value: function produce(base, recipe, patchListener) {
            var _this = this;

            // curried invocation
            if (typeof base === "function" && typeof recipe !== "function") {
                var defaultBase = recipe;
                recipe = base;

                // prettier-ignore
                return function () {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBase;
                    return _this.produce(base, function (draft) {
                        var _recipe;

                        return (_recipe = recipe).call.apply(_recipe, [draft, draft].concat(args));
                    });
                };
            }

            // prettier-ignore
            {
                if (typeof recipe !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
                if (patchListener !== undefined && typeof patchListener !== "function") throw new Error("the third argument of a producer should not be set or a function");
            }

            var result = void 0;
            // Only create proxies for plain objects/arrays.
            if (!isDraftable(base)) {
                result = recipe(base);
                if (result === undefined) return base;
            }
            // The given value must be proxied.
            else {
                    this.scopes.push([]);
                    var baseDraft = this.createDraft(base);
                    try {
                        result = recipe.call(baseDraft, baseDraft);
                        this.willFinalize(result, baseDraft, !!patchListener);

                        // Never generate patches when no listener exists.
                        var patches = patchListener && [],
                            inversePatches = patchListener && [];

                        // Finalize the modified draft...
                        if (result === undefined || result === baseDraft) {
                            result = this.finalize(baseDraft, [], patches, inversePatches);
                        }
                        // ...or use a replacement value.
                        else {
                                // Users must never modify the draft _and_ return something else.
                                if (baseDraft[DRAFT_STATE].modified) throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore

                                // Finalize the replacement in case it contains (or is) a subset of the draft.
                                if (isDraftable(result)) result = this.finalize(result);

                                if (patchListener) {
                                    patches.push({
                                        op: "replace",
                                        path: [],
                                        value: result
                                    });
                                    inversePatches.push({
                                        op: "replace",
                                        path: [],
                                        value: base
                                    });
                                }
                            }
                    } finally {
                        this.currentScope().forEach(function (state) {
                            return state.revoke();
                        });
                        this.scopes.pop();
                    }
                    patchListener && patchListener(patches, inversePatches);
                }
            // Normalize the result.
            return result === NOTHING ? undefined : result;
        }
    }, {
        key: "setAutoFreeze",
        value: function setAutoFreeze(value) {
            this.autoFreeze = value;
        }
    }, {
        key: "setUseProxies",
        value: function setUseProxies(value) {
            this.useProxies = value;
            assign(this, value ? modernProxy : legacyProxy);
        }
    }, {
        key: "applyPatches",
        value: function applyPatches$$1(base, patches) {
            // Mutate the base state when a draft is passed.
            if (isDraft(base)) {
                return applyPatches(base, patches);
            }
            // Otherwise, produce a copy of the base state.
            return this.produce(base, function (draft) {
                return applyPatches(draft, patches);
            });
        }
        /**
         * @internal
         * Finalize a draft, returning either the unmodified base state or a modified
         * copy of the base state.
         */

    }, {
        key: "finalize",
        value: function finalize(draft, path, patches, inversePatches) {
            var _this2 = this;

            var state = draft[DRAFT_STATE];
            if (!state) {
                if (Object.isFrozen(draft)) return draft;
                return this.finalizeTree(draft);
            }
            // Never finalize drafts owned by an outer scope.
            if (state.scope !== this.currentScope()) {
                return draft;
            }
            if (!state.modified) return state.base;
            if (!state.finalized) {
                state.finalized = true;
                this.finalizeTree(state.draft, path, patches, inversePatches);
                if (this.onDelete) {
                    // The `assigned` object is unreliable with ES5 drafts.
                    if (this.useProxies) {
                        var assigned = state.assigned;

                        for (var prop in assigned) {
                            if (!assigned[prop]) this.onDelete(state, prop);
                        }
                    } else {
                        var base = state.base,
                            copy = state.copy;

                        each(base, function (prop) {
                            if (!has(copy, prop)) _this2.onDelete(state, prop);
                        });
                    }
                }
                if (this.onCopy) this.onCopy(state);

                // Nested producers must never auto-freeze their result,
                // because it may contain drafts from parent producers.
                if (this.autoFreeze && this.scopes.length === 1) {
                    Object.freeze(state.copy);
                }

                if (patches) generatePatches(state, path, patches, inversePatches);
            }
            return state.copy;
        }
        /**
         * @internal
         * Finalize all drafts in the given state tree.
         */

    }, {
        key: "finalizeTree",
        value: function finalizeTree(root, path, patches, inversePatches) {
            var _this3 = this;

            var state = root[DRAFT_STATE];
            if (state) {
                if (!this.useProxies) {
                    state.finalizing = true;
                    state.copy = shallowCopy(state.draft, true);
                    state.finalizing = false;
                }
                root = state.copy;
            }

            var onAssign = this.onAssign;

            var finalizeProperty = function finalizeProperty(prop, value, parent) {
                if (value === parent) {
                    throw Error("Immer forbids circular references");
                }

                // The only possible draft (in the scope of a `finalizeTree` call) is the `root` object.
                var inDraft = !!state && parent === root;

                if (isDraft(value)) {
                    value =
                    // Patches are never generated for assigned properties.
                    patches && inDraft && !state.assigned[prop] ? _this3.finalize(value, path.concat(prop), patches, inversePatches) // prettier-ignore
                    : _this3.finalize(value);

                    // Preserve non-enumerable properties.
                    if (Array.isArray(parent) || isEnumerable(parent, prop)) {
                        parent[prop] = value;
                    } else {
                        Object.defineProperty(parent, prop, { value: value });
                    }

                    // Unchanged drafts are never passed to the `onAssign` hook.
                    if (inDraft && value === state.base[prop]) return;
                }
                // Unchanged draft properties are ignored.
                else if (inDraft && is(value, state.base[prop])) {
                        return;
                    }
                    // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
                    else if (isDraftable(value) && !Object.isFrozen(value)) {
                            each(value, finalizeProperty);
                        }

                if (inDraft && onAssign) {
                    onAssign(state, prop, value);
                }
            };

            each(root, finalizeProperty);
            return root;
        }
    }]);
    return Immer;
}();

var immer = new Immer();

/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */
var produce = immer.produce;
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */
var setAutoFreeze = immer.setAutoFreeze.bind(immer);

/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */
var setUseProxies = immer.setUseProxies.bind(immer);

/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
var applyPatches$1 = immer.applyPatches.bind(immer);


/* harmony default export */ __webpack_exports__["default"] = (produce);
//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/shuffle-array/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shuffle-array/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
};

/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
module.exports = shuffle;


/***/ }),

/***/ "./src/games/seabattle/ai.ts":
/*!***********************************!*\
  !*** ./src/games/seabattle/ai.ts ***!
  \***********************************/
/*! exports provided: SeabattleBot, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeabattleBot", function() { return SeabattleBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "./src/games/seabattle/game.ts");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shuffle-array */ "./node_modules/shuffle-array/index.js");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_5__);





function cov_j6hb4vjqv() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/ai.ts";
  var hash = "7290addc126aa92d130533cfc11256b3d86b0931";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/ai.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 28
        },
        end: {
          line: 20,
          column: 82
        }
      },
      "2": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 60
        }
      },
      "3": {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 24,
          column: 62
        }
      },
      "4": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 27
        }
      },
      "5": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 53
        }
      },
      "6": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 48
        }
      },
      "7": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 101
        }
      },
      "8": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 107
        }
      },
      "9": {
        start: {
          line: 40,
          column: 19
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "10": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 103
        }
      },
      "11": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "12": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "13": {
        start: {
          line: 47,
          column: 31
        },
        end: {
          line: 47,
          column: 79
        }
      },
      "14": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "15": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 66
        }
      },
      "16": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 52
        }
      },
      "17": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 42
        }
      },
      "18": {
        start: {
          line: 61,
          column: 17
        },
        end: {
          line: 61,
          column: 55
        }
      },
      "19": {
        start: {
          line: 61,
          column: 42
        },
        end: {
          line: 61,
          column: 54
        }
      },
      "20": {
        start: {
          line: 62,
          column: 17
        },
        end: {
          line: 62,
          column: 55
        }
      },
      "21": {
        start: {
          line: 62,
          column: 42
        },
        end: {
          line: 62,
          column: 54
        }
      },
      "22": {
        start: {
          line: 64,
          column: 19
        },
        end: {
          line: 64,
          column: 65
        }
      },
      "23": {
        start: {
          line: 65,
          column: 19
        },
        end: {
          line: 65,
          column: 65
        }
      },
      "24": {
        start: {
          line: 66,
          column: 22
        },
        end: {
          line: 66,
          column: 77
        }
      },
      "25": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 70,
          column: 7
        }
      },
      "26": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 28
        }
      },
      "27": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 96
        }
      },
      "28": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 19
        }
      },
      "29": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "30": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "31": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 20
        }
      },
      "32": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 16
        }
      },
      "33": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 97,
          column: 7
        }
      },
      "34": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 74
        }
      },
      "35": {
        start: {
          line: 101,
          column: 52
        },
        end: {
          line: 101,
          column: 72
        }
      },
      "36": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 73
        }
      },
      "37": {
        start: {
          line: 105,
          column: 49
        },
        end: {
          line: 105,
          column: 63
        }
      },
      "38": {
        start: {
          line: 109,
          column: 38
        },
        end: {
          line: 109,
          column: 40
        }
      },
      "39": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 114,
          column: 5
        }
      },
      "40": {
        start: {
          line: 110,
          column: 17
        },
        end: {
          line: 110,
          column: 18
        }
      },
      "41": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 113,
          column: 7
        }
      },
      "42": {
        start: {
          line: 111,
          column: 19
        },
        end: {
          line: 111,
          column: 20
        }
      },
      "43": {
        start: {
          line: 112,
          column: 8
        },
        end: {
          line: 112,
          column: 40
        }
      },
      "44": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 54
        }
      },
      "45": {
        start: {
          line: 119,
          column: 18
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "46": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 112
        }
      },
      "47": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 30
        }
      },
      "48": {
        start: {
          line: 127,
          column: 33
        },
        end: {
          line: 133,
          column: 1
        }
      },
      "49": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 131,
          column: 6
        }
      },
      "50": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 138,
          column: 5
        }
      },
      "51": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 50
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 53
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 47
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 52
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 103
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 70
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 60
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 61,
            column: 31
          },
          end: {
            line: 61,
            column: 32
          }
        },
        loc: {
          start: {
            line: 61,
            column: 42
          },
          end: {
            line: 61,
            column: 54
          }
        },
        line: 61
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 62,
            column: 31
          },
          end: {
            line: 62,
            column: 32
          }
        },
        loc: {
          start: {
            line: 62,
            column: 42
          },
          end: {
            line: 62,
            column: 54
          }
        },
        line: 62
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        loc: {
          start: {
            line: 73,
            column: 24
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 73
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 46
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 77
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 50
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 61
          },
          end: {
            line: 98,
            column: 3
          }
        },
        line: 91
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        loc: {
          start: {
            line: 100,
            column: 55
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 100
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 101,
            column: 33
          },
          end: {
            line: 101,
            column: 34
          }
        },
        loc: {
          start: {
            line: 101,
            column: 52
          },
          end: {
            line: 101,
            column: 72
          }
        },
        line: 101
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 104,
            column: 3
          }
        },
        loc: {
          start: {
            line: 104,
            column: 44
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 104
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 105,
            column: 32
          },
          end: {
            line: 105,
            column: 33
          }
        },
        loc: {
          start: {
            line: 105,
            column: 49
          },
          end: {
            line: 105,
            column: 63
          }
        },
        line: 105
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 40
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 108
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 47
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 118
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 120,
            column: 7
          }
        },
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 112
          }
        },
        line: 121
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 128,
            column: 11
          }
        },
        loc: {
          start: {
            line: 128,
            column: 16
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 128
      },
      "20": {
        name: "sleep",
        decl: {
          start: {
            line: 135,
            column: 9
          },
          end: {
            line: 135,
            column: 14
          }
        },
        loc: {
          start: {
            line: 135,
            column: 37
          },
          end: {
            line: 139,
            column: 1
          }
        },
        line: 135
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 136,
            column: 21
          },
          end: {
            line: 136,
            column: 22
          }
        },
        loc: {
          start: {
            line: 136,
            column: 34
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 136
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 52
          },
          end: {
            line: 24,
            column: 55
          }
        }, {
          start: {
            line: 24,
            column: 58
          },
          end: {
            line: 24,
            column: 62
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 103
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 41
          }
        }, {
          start: {
            line: 42,
            column: 45
          },
          end: {
            line: 42,
            column: 63
          }
        }, {
          start: {
            line: 42,
            column: 67
          },
          end: {
            line: 42,
            column: 103
          }
        }],
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }, {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }],
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }, {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }],
        line: 48
      },
      "5": {
        loc: {
          start: {
            line: 66,
            column: 22
          },
          end: {
            line: 66,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 66,
            column: 46
          },
          end: {
            line: 66,
            column: 60
          }
        }, {
          start: {
            line: 66,
            column: 63
          },
          end: {
            line: 66,
            column: 77
          }
        }],
        line: 66
      },
      "6": {
        loc: {
          start: {
            line: 74,
            column: 11
          },
          end: {
            line: 74,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 74,
            column: 11
          },
          end: {
            line: 74,
            column: 17
          }
        }, {
          start: {
            line: 74,
            column: 21
          },
          end: {
            line: 74,
            column: 27
          }
        }],
        line: 74
      },
      "7": {
        loc: {
          start: {
            line: 78,
            column: 11
          },
          end: {
            line: 78,
            column: 95
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 11
          },
          end: {
            line: 78,
            column: 34
          }
        }, {
          start: {
            line: 78,
            column: 38
          },
          end: {
            line: 78,
            column: 61
          }
        }, {
          start: {
            line: 78,
            column: 65
          },
          end: {
            line: 78,
            column: 95
          }
        }],
        line: 78
      },
      "8": {
        loc: {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }],
        line: 84
      },
      "9": {
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 112
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 58
          }
        }, {
          start: {
            line: 121,
            column: 62
          },
          end: {
            line: 121,
            column: 85
          }
        }, {
          start: {
            line: 121,
            column: 89
          },
          end: {
            line: 121,
            column: 112
          }
        }],
        line: 121
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
      "51": 0
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
      "20": 0,
      "21": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0],
      "9": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7290addc126aa92d130533cfc11256b3d86b0931"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_j6hb4vjqv = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_j6hb4vjqv();

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var SeabattleBot = /*#__PURE__*/function () {
  function SeabattleBot() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SeabattleBot);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SeabattleBot, [{
    key: "play",
    value: function play(state, playerID) {
      var shipPositions, sleepMs, cell;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function play$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cov_j6hb4vjqv().f[0]++;
              cov_j6hb4vjqv().s[0]++;

              if (!(state.ctx.phase === 'setup')) {
                _context.next = 9;
                break;
              }

              cov_j6hb4vjqv().b[0][0]++;
              shipPositions = (cov_j6hb4vjqv().s[1]++, Object(_game__WEBPACK_IMPORTED_MODULE_4__["generateRandomShips"])(parseInt(state.ctx.currentPlayer)));
              cov_j6hb4vjqv().s[2]++;
              return _context.abrupt("return", this.makeSetShipsMove(shipPositions, playerID));

            case 9:
              cov_j6hb4vjqv().b[0][1]++;
              // if this is the first turn for our AI, wait only 500ms.  Else 2500ms
              sleepMs = (cov_j6hb4vjqv().s[3]++, state.G.salvos.length === 0 ? (cov_j6hb4vjqv().b[1][0]++, 500) : (cov_j6hb4vjqv().b[1][1]++, 2500));
              cov_j6hb4vjqv().s[4]++;
              _context.next = 14;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(sleep(sleepMs));

            case 14:
              cell = (cov_j6hb4vjqv().s[5]++, this.generateMove(playerID, state));
              cov_j6hb4vjqv().s[6]++;
              return _context.abrupt("return", this.makeSalvoMove(cell, playerID));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "makeSetShipsMove",
    value: function makeSetShipsMove(ships, playerID) {
      cov_j6hb4vjqv().f[1]++;
      cov_j6hb4vjqv().s[7]++;
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'setShips',
            args: [ships],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "makeSalvoMove",
    value: function makeSalvoMove(cell, playerID) {
      cov_j6hb4vjqv().f[2]++;
      cov_j6hb4vjqv().s[8]++;
      return {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'salvo',
            args: [cell.x, cell.y],
            playerID: playerID
          }
        }
      };
    }
  }, {
    key: "generateMove",
    value: function generateMove(playerID, state) {
      cov_j6hb4vjqv().f[3]++;
      var salvos = (cov_j6hb4vjqv().s[9]++, state.G.salvos.filter(function (salvo) {
        cov_j6hb4vjqv().f[4]++;
        cov_j6hb4vjqv().s[10]++;
        return (cov_j6hb4vjqv().b[2][0]++, salvo.player === Number(playerID)) && (cov_j6hb4vjqv().b[2][1]++, salvo.hit === true) && (cov_j6hb4vjqv().b[2][2]++, typeof salvo.hitShip !== 'undefined');
      }));
      cov_j6hb4vjqv().s[11]++;

      var _iterator = _createForOfIteratorHelper(salvos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var salvo = _step.value;
          cov_j6hb4vjqv().s[12]++;

          // if we have already fired salvos, see if we've hit any ships that remain unsunk
          if (!this.isShipSunk(state, salvo.hitShip)) {
            cov_j6hb4vjqv().b[3][0]++;
            var otherHitSalvos = (cov_j6hb4vjqv().s[13]++, this.getOtherSalvosHitShip(state, salvo.hitShip));
            cov_j6hb4vjqv().s[14]++;

            if (otherHitSalvos.length >= 2) {
              cov_j6hb4vjqv().b[4][0]++;
              cov_j6hb4vjqv().s[15]++;
              // we have hit this ship at least twice, so we can make an intelligent move
              return this.getNextShipFoundMove(state, otherHitSalvos);
            } else {
              cov_j6hb4vjqv().b[4][1]++;
            } // no other salvos for the same ship were hit, so hit a random neighbor


            cov_j6hb4vjqv().s[16]++;
            return this.getRandomNeighbor(state, salvo);
          } else {
            cov_j6hb4vjqv().b[3][1]++;
          }
        } // generate a random move

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      cov_j6hb4vjqv().s[17]++;
      return this.generateRandomMove(state);
    }
  }, {
    key: "getNextShipFoundMove",
    value: function getNextShipFoundMove(state, hitSalvos) {
      cov_j6hb4vjqv().f[5]++;
      var xMap = (cov_j6hb4vjqv().s[18]++, hitSalvos.map(function (salvo) {
        cov_j6hb4vjqv().f[6]++;
        cov_j6hb4vjqv().s[19]++;
        return salvo.cell.x;
      }));
      var yMap = (cov_j6hb4vjqv().s[20]++, hitSalvos.map(function (salvo) {
        cov_j6hb4vjqv().f[7]++;
        cov_j6hb4vjqv().s[21]++;
        return salvo.cell.y;
      }));
      var minPos = (cov_j6hb4vjqv().s[22]++, {
        x: Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xMap)),
        y: Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(yMap))
      });
      var maxPos = (cov_j6hb4vjqv().s[23]++, {
        x: Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xMap)),
        y: Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(yMap))
      });
      var direction = (cov_j6hb4vjqv().s[24]++, maxPos.x === minPos.x ? (cov_j6hb4vjqv().b[5][0]++, {
        x: 0,
        y: 1
      }) : (cov_j6hb4vjqv().b[5][1]++, {
        x: 1,
        y: 0
      }));
      cov_j6hb4vjqv().s[25]++;
      return this.anyValidMove(state, [{
        x: minPos.x - direction.x,
        y: minPos.y - direction.y
      }, {
        x: maxPos.x + direction.x,
        y: maxPos.y + direction.y
      }]);
    }
  }, {
    key: "isInBounds",
    value: function isInBounds(x) {
      cov_j6hb4vjqv().f[8]++;
      cov_j6hb4vjqv().s[26]++;
      return (cov_j6hb4vjqv().b[6][0]++, x >= 0) && (cov_j6hb4vjqv().b[6][1]++, x <= 9);
    }
  }, {
    key: "isValidMove",
    value: function isValidMove(state, cell) {
      cov_j6hb4vjqv().f[9]++;
      cov_j6hb4vjqv().s[27]++;
      return (cov_j6hb4vjqv().b[7][0]++, this.isInBounds(cell.x)) && (cov_j6hb4vjqv().b[7][1]++, this.isInBounds(cell.y)) && (cov_j6hb4vjqv().b[7][2]++, this.isUniqueMove(state, cell));
    }
  }, {
    key: "anyValidMove",
    value: function anyValidMove(state, moves) {
      cov_j6hb4vjqv().f[10]++;
      cov_j6hb4vjqv().s[28]++;
      shuffle_array__WEBPACK_IMPORTED_MODULE_5___default()(moves); // ONLY source of randomness

      cov_j6hb4vjqv().s[29]++;

      var _iterator2 = _createForOfIteratorHelper(moves),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var move = _step2.value;
          cov_j6hb4vjqv().s[30]++;

          if (this.isValidMove(state, move)) {
            cov_j6hb4vjqv().b[8][0]++;
            cov_j6hb4vjqv().s[31]++;
            return move;
          } else {
            cov_j6hb4vjqv().b[8][1]++;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      cov_j6hb4vjqv().s[32]++;
      return null;
    }
  }, {
    key: "getRandomNeighbor",
    value: function getRandomNeighbor(state, salvo) {
      cov_j6hb4vjqv().f[11]++;
      cov_j6hb4vjqv().s[33]++;
      return this.anyValidMove(state, [{
        x: salvo.cell.x - 1,
        y: salvo.cell.y
      }, {
        x: salvo.cell.x,
        y: salvo.cell.y - 1
      }, {
        x: salvo.cell.x + 1,
        y: salvo.cell.y
      }, {
        x: salvo.cell.x,
        y: salvo.cell.y + 1
      }]);
    }
  }, {
    key: "getOtherSalvosHitShip",
    value: function getOtherSalvosHitShip(state, id) {
      cov_j6hb4vjqv().f[12]++;
      cov_j6hb4vjqv().s[34]++;
      return state.G.salvos.filter(function (salvo) {
        cov_j6hb4vjqv().f[13]++;
        cov_j6hb4vjqv().s[35]++;
        return salvo.hitShip === id;
      });
    }
  }, {
    key: "isShipSunk",
    value: function isShipSunk(state, id) {
      cov_j6hb4vjqv().f[14]++;
      cov_j6hb4vjqv().s[36]++;
      return state.G.ships.filter(function (ship) {
        cov_j6hb4vjqv().f[15]++;
        cov_j6hb4vjqv().s[37]++;
        return ship.id === id;
      })[0].sunk;
    }
  }, {
    key: "generateRandomMove",
    value: function generateRandomMove(state) {
      cov_j6hb4vjqv().f[16]++;
      var allPossibleMoves = (cov_j6hb4vjqv().s[38]++, []);
      cov_j6hb4vjqv().s[39]++;

      for (var x = (cov_j6hb4vjqv().s[40]++, 0); x <= 9; x++) {
        cov_j6hb4vjqv().s[41]++;

        for (var y = (cov_j6hb4vjqv().s[42]++, 0); y <= 9; y++) {
          cov_j6hb4vjqv().s[43]++;
          allPossibleMoves.push({
            x: x,
            y: y
          });
        }
      }

      cov_j6hb4vjqv().s[44]++;
      return this.anyValidMove(state, allPossibleMoves);
    }
  }, {
    key: "isUniqueMove",
    value: function isUniqueMove(state, cell) {
      cov_j6hb4vjqv().f[17]++;
      var moves = (cov_j6hb4vjqv().s[45]++, state.G.salvos.filter(function (salvo) {
        cov_j6hb4vjqv().f[18]++;
        cov_j6hb4vjqv().s[46]++;
        return (cov_j6hb4vjqv().b[9][0]++, salvo.player === parseInt(state.ctx.currentPlayer)) && (cov_j6hb4vjqv().b[9][1]++, salvo.cell.x === cell.x) && (cov_j6hb4vjqv().b[9][2]++, salvo.cell.y === cell.y);
      }));
      cov_j6hb4vjqv().s[47]++;
      return moves.length === 0;
    }
  }]);

  return SeabattleBot;
}();
var config = (cov_j6hb4vjqv().s[48]++, {
  bgioAI: function bgioAI() {
    cov_j6hb4vjqv().f[19]++;
    cov_j6hb4vjqv().s[49]++;
    return {
      bot: SeabattleBot
    };
  }
});

function sleep(milliseconds) {
  cov_j6hb4vjqv().f[20]++;
  cov_j6hb4vjqv().s[50]++;
  return new Promise(function (resolve) {
    cov_j6hb4vjqv().f[21]++;
    cov_j6hb4vjqv().s[51]++;
    setTimeout(resolve, milliseconds);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/seabattle/game.ts":
/*!*************************************!*\
  !*** ./src/games/seabattle/game.ts ***!
  \*************************************/
/*! exports provided: playerView, SeabattleGame, generateRandomShips, validateShips, getCellVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerView", function() { return playerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeabattleGame", function() { return SeabattleGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomShips", function() { return generateRandomShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateShips", function() { return validateShips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellVector", function() { return getCellVector; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var boardgame_io_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! boardgame.io/core */ "./node_modules/boardgame.io/dist/esm/core.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);



function cov_2rmfy6gvhj() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/game.ts";
  var hash = "106f2512b460b9a2154489996c028fb2dd27e1ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/seabattle/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 32,
          column: 36
        },
        end: {
          line: 32,
          column: 48
        }
      },
      "1": {
        start: {
          line: 33,
          column: 54
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "2": {
        start: {
          line: 40,
          column: 26
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "3": {
        start: {
          line: 41,
          column: 17
        },
        end: {
          line: 41,
          column: 39
        }
      },
      "4": {
        start: {
          line: 42,
          column: 25
        },
        end: {
          line: 42,
          column: 86
        }
      },
      "5": {
        start: {
          line: 42,
          column: 50
        },
        end: {
          line: 42,
          column: 85
        }
      },
      "6": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "7": {
        start: {
          line: 50,
          column: 17
        },
        end: {
          line: 50,
          column: 43
        }
      },
      "8": {
        start: {
          line: 51,
          column: 21
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "9": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "10": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 38
        }
      },
      "11": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 49
        }
      },
      "12": {
        start: {
          line: 60,
          column: 17
        },
        end: {
          line: 60,
          column: 43
        }
      },
      "13": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 63
        }
      },
      "14": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 112
        }
      },
      "15": {
        start: {
          line: 64,
          column: 31
        },
        end: {
          line: 64,
          column: 98
        }
      },
      "16": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "17": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 20
        }
      },
      "18": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "19": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 83
        }
      },
      "20": {
        start: {
          line: 72,
          column: 15
        },
        end: {
          line: 72,
          column: 33
        }
      },
      "21": {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 31
        }
      },
      "22": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 77,
          column: 3
        }
      },
      "23": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 65
        }
      },
      "24": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 82,
          column: 4
        }
      },
      "25": {
        start: {
          line: 85,
          column: 40
        },
        end: {
          line: 125,
          column: 1
        }
      },
      "26": {
        start: {
          line: 88,
          column: 33
        },
        end: {
          line: 91,
          column: 3
        }
      },
      "27": {
        start: {
          line: 101,
          column: 10
        },
        end: {
          line: 103,
          column: 11
        }
      },
      "28": {
        start: {
          line: 102,
          column: 12
        },
        end: {
          line: 102,
          column: 34
        }
      },
      "29": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 119,
          column: 5
        }
      },
      "30": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 115,
          column: 7
        }
      },
      "31": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 114,
          column: 31
        }
      },
      "32": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "33": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 31
        }
      },
      "34": {
        start: {
          line: 131,
          column: 2
        },
        end: {
          line: 140,
          column: 49
        }
      },
      "35": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 16
        }
      },
      "36": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 139,
          column: 5
        }
      },
      "37": {
        start: {
          line: 134,
          column: 28
        },
        end: {
          line: 134,
          column: 55
        }
      },
      "38": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 138,
          column: 7
        }
      },
      "39": {
        start: {
          line: 135,
          column: 19
        },
        end: {
          line: 135,
          column: 20
        }
      },
      "40": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 36
        }
      },
      "41": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 63
        }
      },
      "42": {
        start: {
          line: 141,
          column: 2
        },
        end: {
          line: 141,
          column: 16
        }
      },
      "43": {
        start: {
          line: 146,
          column: 22
        },
        end: {
          line: 152,
          column: 3
        }
      },
      "44": {
        start: {
          line: 153,
          column: 2
        },
        end: {
          line: 155,
          column: 3
        }
      },
      "45": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 60
        }
      },
      "46": {
        start: {
          line: 156,
          column: 2
        },
        end: {
          line: 160,
          column: 3
        }
      },
      "47": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 159,
          column: 5
        }
      },
      "48": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 158,
          column: 24
        }
      },
      "49": {
        start: {
          line: 161,
          column: 2
        },
        end: {
          line: 161,
          column: 25
        }
      },
      "50": {
        start: {
          line: 166,
          column: 2
        },
        end: {
          line: 170,
          column: 3
        }
      },
      "51": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "52": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 168,
          column: 19
        }
      },
      "53": {
        start: {
          line: 171,
          column: 2
        },
        end: {
          line: 171,
          column: 14
        }
      },
      "54": {
        start: {
          line: 175,
          column: 22
        },
        end: {
          line: 175,
          column: 66
        }
      },
      "55": {
        start: {
          line: 176,
          column: 20
        },
        end: {
          line: 176,
          column: 53
        }
      },
      "56": {
        start: {
          line: 177,
          column: 22
        },
        end: {
          line: 177,
          column: 60
        }
      },
      "57": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 186,
          column: 3
        }
      },
      "58": {
        start: {
          line: 178,
          column: 15
        },
        end: {
          line: 178,
          column: 16
        }
      },
      "59": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 185,
          column: 5
        }
      },
      "60": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 50
        }
      },
      "61": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 50
        }
      },
      "62": {
        start: {
          line: 187,
          column: 2
        },
        end: {
          line: 187,
          column: 14
        }
      },
      "63": {
        start: {
          line: 191,
          column: 2
        },
        end: {
          line: 191,
          column: 43
        }
      },
      "64": {
        start: {
          line: 195,
          column: 2
        },
        end: {
          line: 197,
          column: 4
        }
      },
      "65": {
        start: {
          line: 196,
          column: 14
        },
        end: {
          line: 196,
          column: 108
        }
      },
      "66": {
        start: {
          line: 196,
          column: 42
        },
        end: {
          line: 196,
          column: 74
        }
      },
      "67": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 201,
          column: 59
        }
      },
      "68": {
        start: {
          line: 201,
          column: 30
        },
        end: {
          line: 201,
          column: 50
        }
      },
      "69": {
        start: {
          line: 210,
          column: 22
        },
        end: {
          line: 210,
          column: 67
        }
      },
      "70": {
        start: {
          line: 210,
          column: 49
        },
        end: {
          line: 210,
          column: 66
        }
      },
      "71": {
        start: {
          line: 211,
          column: 43
        },
        end: {
          line: 211,
          column: 67
        }
      },
      "72": {
        start: {
          line: 212,
          column: 2
        },
        end: {
          line: 217,
          column: 3
        }
      },
      "73": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 215,
          column: 5
        }
      },
      "74": {
        start: {
          line: 214,
          column: 6
        },
        end: {
          line: 214,
          column: 71
        }
      },
      "75": {
        start: {
          line: 216,
          column: 4
        },
        end: {
          line: 216,
          column: 20
        }
      },
      "76": {
        start: {
          line: 218,
          column: 2
        },
        end: {
          line: 222,
          column: 3
        }
      },
      "77": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 221,
          column: 5
        }
      },
      "78": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 220,
          column: 61
        }
      },
      "79": {
        start: {
          line: 223,
          column: 2
        },
        end: {
          line: 223,
          column: 25
        }
      },
      "80": {
        start: {
          line: 227,
          column: 17
        },
        end: {
          line: 227,
          column: 56
        }
      },
      "81": {
        start: {
          line: 227,
          column: 44
        },
        end: {
          line: 227,
          column: 55
        }
      },
      "82": {
        start: {
          line: 228,
          column: 2
        },
        end: {
          line: 232,
          column: 3
        }
      },
      "83": {
        start: {
          line: 229,
          column: 4
        },
        end: {
          line: 231,
          column: 5
        }
      },
      "84": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 92
        }
      },
      "85": {
        start: {
          line: 233,
          column: 2
        },
        end: {
          line: 233,
          column: 25
        }
      },
      "86": {
        start: {
          line: 237,
          column: 2
        },
        end: {
          line: 259,
          column: 3
        }
      },
      "87": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 240,
          column: 5
        }
      },
      "88": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 239,
          column: 15
        }
      },
      "89": {
        start: {
          line: 241,
          column: 27
        },
        end: {
          line: 241,
          column: 40
        }
      },
      "90": {
        start: {
          line: 242,
          column: 26
        },
        end: {
          line: 242,
          column: 69
        }
      },
      "91": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 250,
          column: 5
        }
      },
      "92": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 67
        }
      },
      "93": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 258,
          column: 5
        }
      },
      "94": {
        start: {
          line: 251,
          column: 17
        },
        end: {
          line: 251,
          column: 18
        }
      },
      "95": {
        start: {
          line: 252,
          column: 19
        },
        end: {
          line: 252,
          column: 32
        }
      },
      "96": {
        start: {
          line: 253,
          column: 24
        },
        end: {
          line: 253,
          column: 54
        }
      },
      "97": {
        start: {
          line: 254,
          column: 6
        },
        end: {
          line: 256,
          column: 7
        }
      },
      "98": {
        start: {
          line: 255,
          column: 8
        },
        end: {
          line: 255,
          column: 67
        }
      },
      "99": {
        start: {
          line: 257,
          column: 6
        },
        end: {
          line: 257,
          column: 23
        }
      },
      "100": {
        start: {
          line: 260,
          column: 2
        },
        end: {
          line: 260,
          column: 25
        }
      },
      "101": {
        start: {
          line: 264,
          column: 2
        },
        end: {
          line: 264,
          column: 40
        }
      },
      "102": {
        start: {
          line: 268,
          column: 45
        },
        end: {
          line: 268,
          column: 47
        }
      },
      "103": {
        start: {
          line: 269,
          column: 2
        },
        end: {
          line: 274,
          column: 3
        }
      },
      "104": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 272,
          column: 5
        }
      },
      "105": {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 66
        }
      },
      "106": {
        start: {
          line: 273,
          column: 4
        },
        end: {
          line: 273,
          column: 28
        }
      },
      "107": {
        start: {
          line: 275,
          column: 2
        },
        end: {
          line: 275,
          column: 25
        }
      },
      "108": {
        start: {
          line: 279,
          column: 2
        },
        end: {
          line: 285,
          column: 3
        }
      },
      "109": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 284,
          column: 5
        }
      },
      "110": {
        start: {
          line: 281,
          column: 6
        },
        end: {
          line: 283,
          column: 7
        }
      },
      "111": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 282,
          column: 63
        }
      },
      "112": {
        start: {
          line: 286,
          column: 2
        },
        end: {
          line: 286,
          column: 25
        }
      },
      "113": {
        start: {
          line: 290,
          column: 63
        },
        end: {
          line: 290,
          column: 65
        }
      },
      "114": {
        start: {
          line: 291,
          column: 2
        },
        end: {
          line: 301,
          column: 3
        }
      },
      "115": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 300,
          column: 5
        }
      },
      "116": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 295,
          column: 7
        }
      },
      "117": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 31
        }
      },
      "118": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 298,
          column: 7
        }
      },
      "119": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 297,
          column: 61
        }
      },
      "120": {
        start: {
          line: 299,
          column: 6
        },
        end: {
          line: 299,
          column: 39
        }
      },
      "121": {
        start: {
          line: 302,
          column: 2
        },
        end: {
          line: 302,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 40,
            column: 26
          },
          end: {
            line: 40,
            column: 27
          }
        },
        loc: {
          start: {
            line: 40,
            column: 96
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 40
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 40
          },
          end: {
            line: 42,
            column: 41
          }
        },
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 85
          }
        },
        line: 42
      },
      "2": {
        name: "setShips",
        decl: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 49,
            column: 17
          }
        },
        loc: {
          start: {
            line: 49,
            column: 69
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 49
      },
      "3": {
        name: "salvo",
        decl: {
          start: {
            line: 59,
            column: 9
          },
          end: {
            line: 59,
            column: 14
          }
        },
        loc: {
          start: {
            line: 59,
            column: 68
          },
          end: {
            line: 83,
            column: 1
          }
        },
        line: 59
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 20
          },
          end: {
            line: 64,
            column: 21
          }
        },
        loc: {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 98
          }
        },
        line: 64
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 88,
            column: 9
          },
          end: {
            line: 88,
            column: 10
          }
        },
        loc: {
          start: {
            line: 88,
            column: 33
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 88
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 100,
            column: 16
          },
          end: {
            line: 100,
            column: 17
          }
        },
        loc: {
          start: {
            line: 100,
            column: 28
          },
          end: {
            line: 104,
            column: 9
          }
        },
        line: 100
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 111,
            column: 9
          },
          end: {
            line: 111,
            column: 10
          }
        },
        loc: {
          start: {
            line: 111,
            column: 21
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 111
      },
      "8": {
        name: "generateRandomShips",
        decl: {
          start: {
            line: 128,
            column: 16
          },
          end: {
            line: 128,
            column: 35
          }
        },
        loc: {
          start: {
            line: 128,
            column: 61
          },
          end: {
            line: 142,
            column: 1
          }
        },
        line: 128
      },
      "9": {
        name: "validateShips",
        decl: {
          start: {
            line: 145,
            column: 16
          },
          end: {
            line: 145,
            column: 29
          }
        },
        loc: {
          start: {
            line: 145,
            column: 87
          },
          end: {
            line: 162,
            column: 1
          }
        },
        line: 145
      },
      "10": {
        name: "checkAllShipsSunk",
        decl: {
          start: {
            line: 165,
            column: 9
          },
          end: {
            line: 165,
            column: 26
          }
        },
        loc: {
          start: {
            line: 165,
            column: 68
          },
          end: {
            line: 172,
            column: 1
          }
        },
        line: 165
      },
      "11": {
        name: "randomlyGetShip",
        decl: {
          start: {
            line: 174,
            column: 9
          },
          end: {
            line: 174,
            column: 24
          }
        },
        loc: {
          start: {
            line: 174,
            column: 78
          },
          end: {
            line: 188,
            column: 1
          }
        },
        line: 174
      },
      "12": {
        name: "getRandomInt",
        decl: {
          start: {
            line: 190,
            column: 9
          },
          end: {
            line: 190,
            column: 21
          }
        },
        loc: {
          start: {
            line: 190,
            column: 43
          },
          end: {
            line: 192,
            column: 1
          }
        },
        line: 190
      },
      "13": {
        name: "findShipWithCell",
        decl: {
          start: {
            line: 194,
            column: 9
          },
          end: {
            line: 194,
            column: 25
          }
        },
        loc: {
          start: {
            line: 194,
            column: 79
          },
          end: {
            line: 198,
            column: 1
          }
        },
        line: 194
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        loc: {
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 108
          }
        },
        line: 196
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 196,
            column: 35
          },
          end: {
            line: 196,
            column: 36
          }
        },
        loc: {
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 74
          }
        },
        line: 196
      },
      "16": {
        name: "countShipHits",
        decl: {
          start: {
            line: 200,
            column: 9
          },
          end: {
            line: 200,
            column: 22
          }
        },
        loc: {
          start: {
            line: 200,
            column: 65
          },
          end: {
            line: 202,
            column: 1
          }
        },
        line: 200
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 201,
            column: 23
          },
          end: {
            line: 201,
            column: 24
          }
        },
        loc: {
          start: {
            line: 201,
            column: 30
          },
          end: {
            line: 201,
            column: 50
          }
        },
        line: 201
      },
      "18": {
        name: "validateShipsCount",
        decl: {
          start: {
            line: 209,
            column: 9
          },
          end: {
            line: 209,
            column: 27
          }
        },
        loc: {
          start: {
            line: 209,
            column: 68
          },
          end: {
            line: 224,
            column: 1
          }
        },
        line: 209
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 210,
            column: 32
          },
          end: {
            line: 210,
            column: 33
          }
        },
        loc: {
          start: {
            line: 210,
            column: 49
          },
          end: {
            line: 210,
            column: 66
          }
        },
        line: 210
      },
      "20": {
        name: "validateShipsOwnership",
        decl: {
          start: {
            line: 226,
            column: 9
          },
          end: {
            line: 226,
            column: 31
          }
        },
        loc: {
          start: {
            line: 226,
            column: 88
          },
          end: {
            line: 234,
            column: 1
          }
        },
        line: 226
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 227,
            column: 27
          },
          end: {
            line: 227,
            column: 28
          }
        },
        loc: {
          start: {
            line: 227,
            column: 44
          },
          end: {
            line: 227,
            column: 55
          }
        },
        line: 227
      },
      "22": {
        name: "validateShipsContinuity",
        decl: {
          start: {
            line: 236,
            column: 9
          },
          end: {
            line: 236,
            column: 32
          }
        },
        loc: {
          start: {
            line: 236,
            column: 73
          },
          end: {
            line: 261,
            column: 1
          }
        },
        line: 236
      },
      "23": {
        name: "getCellVector",
        decl: {
          start: {
            line: 263,
            column: 16
          },
          end: {
            line: 263,
            column: 29
          }
        },
        loc: {
          start: {
            line: 263,
            column: 57
          },
          end: {
            line: 265,
            column: 1
          }
        },
        line: 263
      },
      "24": {
        name: "validateShipsHaveUniqueIDs",
        decl: {
          start: {
            line: 267,
            column: 9
          },
          end: {
            line: 267,
            column: 35
          }
        },
        loc: {
          start: {
            line: 267,
            column: 76
          },
          end: {
            line: 276,
            column: 1
          }
        },
        line: 267
      },
      "25": {
        name: "validateShipsNotOutOfBounds",
        decl: {
          start: {
            line: 278,
            column: 9
          },
          end: {
            line: 278,
            column: 36
          }
        },
        loc: {
          start: {
            line: 278,
            column: 77
          },
          end: {
            line: 287,
            column: 1
          }
        },
        line: 278
      },
      "26": {
        name: "validateShipsNotOverlapping",
        decl: {
          start: {
            line: 289,
            column: 9
          },
          end: {
            line: 289,
            column: 36
          }
        },
        loc: {
          start: {
            line: 289,
            column: 77
          },
          end: {
            line: 303,
            column: 1
          }
        },
        line: 289
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 42,
            column: 72
          }
        }, {
          start: {
            line: 42,
            column: 76
          },
          end: {
            line: 42,
            column: 85
          }
        }],
        line: 42
      },
      "1": {
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }, {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }],
        line: 52
      },
      "2": {
        loc: {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 54
          }
        }, {
          start: {
            line: 64,
            column: 58
          },
          end: {
            line: 64,
            column: 76
          }
        }, {
          start: {
            line: 64,
            column: 80
          },
          end: {
            line: 64,
            column: 98
          }
        }],
        line: 64
      },
      "3": {
        loc: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }, {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }],
        line: 65
      },
      "4": {
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }, {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }],
        line: 68
      },
      "5": {
        loc: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        }, {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        }],
        line: 75
      },
      "6": {
        loc: {
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        }, {
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        }],
        line: 101
      },
      "7": {
        loc: {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        }, {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        }],
        line: 112
      },
      "8": {
        loc: {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        }, {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        }],
        line: 113
      },
      "9": {
        loc: {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        }, {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        }],
        line: 116
      },
      "10": {
        loc: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        }, {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        }],
        line: 153
      },
      "11": {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        }, {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        }],
        line: 157
      },
      "12": {
        loc: {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }, {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }],
        line: 167
      },
      "13": {
        loc: {
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 30
          }
        }, {
          start: {
            line: 167,
            column: 34
          },
          end: {
            line: 167,
            column: 44
          }
        }],
        line: 167
      },
      "14": {
        loc: {
          start: {
            line: 176,
            column: 20
          },
          end: {
            line: 176,
            column: 53
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 176,
            column: 44
          },
          end: {
            line: 176,
            column: 47
          }
        }, {
          start: {
            line: 176,
            column: 50
          },
          end: {
            line: 176,
            column: 53
          }
        }],
        line: 176
      },
      "15": {
        loc: {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }, {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }],
        line: 179
      },
      "16": {
        loc: {
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 108
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 196,
            column: 14
          },
          end: {
            line: 196,
            column: 82
          }
        }, {
          start: {
            line: 196,
            column: 86
          },
          end: {
            line: 196,
            column: 108
          }
        }],
        line: 196
      },
      "17": {
        loc: {
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 196,
            column: 42
          },
          end: {
            line: 196,
            column: 56
          }
        }, {
          start: {
            line: 196,
            column: 60
          },
          end: {
            line: 196,
            column: 74
          }
        }],
        line: 196
      },
      "18": {
        loc: {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }, {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }],
        line: 213
      },
      "19": {
        loc: {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        }, {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        }],
        line: 219
      },
      "20": {
        loc: {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 229
      },
      "21": {
        loc: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        }, {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        }],
        line: 238
      },
      "22": {
        loc: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        }, {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        }],
        line: 243
      },
      "23": {
        loc: {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 246,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 245,
            column: 9
          },
          end: {
            line: 245,
            column: 33
          }
        }, {
          start: {
            line: 245,
            column: 37
          },
          end: {
            line: 245,
            column: 61
          }
        }, {
          start: {
            line: 246,
            column: 9
          },
          end: {
            line: 246,
            column: 33
          }
        }, {
          start: {
            line: 246,
            column: 37
          },
          end: {
            line: 246,
            column: 61
          }
        }],
        line: 245
      },
      "24": {
        loc: {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        }, {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        }],
        line: 254
      },
      "25": {
        loc: {
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 34
          }
        }, {
          start: {
            line: 254,
            column: 38
          },
          end: {
            line: 254,
            column: 62
          }
        }],
        line: 254
      },
      "26": {
        loc: {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        }, {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        }],
        line: 270
      },
      "27": {
        loc: {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        }, {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        }],
        line: 281
      },
      "28": {
        loc: {
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 281,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 281,
            column: 20
          }
        }, {
          start: {
            line: 281,
            column: 24
          },
          end: {
            line: 281,
            column: 34
          }
        }, {
          start: {
            line: 281,
            column: 38
          },
          end: {
            line: 281,
            column: 48
          }
        }, {
          start: {
            line: 281,
            column: 52
          },
          end: {
            line: 281,
            column: 62
          }
        }],
        line: 281
      },
      "29": {
        loc: {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }, {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }],
        line: 293
      },
      "30": {
        loc: {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        }, {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        }],
        line: 296
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
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0
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
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0, 0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0, 0, 0],
      "29": [0, 0],
      "30": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "106f2512b460b9a2154489996c028fb2dd27e1ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2rmfy6gvhj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2rmfy6gvhj();

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var VALID_SHIPS_SIZES = (cov_2rmfy6gvhj().s[0]++, [5, 4, 3, 2]);
var VALID_SHIPS_COUNT = (cov_2rmfy6gvhj().s[1]++, {
  5: 1,
  4: 1,
  3: 2,
  2: 1
});
cov_2rmfy6gvhj().s[2]++;
var playerView = function playerView(G, ctx, playerID) {
  cov_2rmfy6gvhj().f[0]++;
  var player = (cov_2rmfy6gvhj().s[3]++, parseInt(playerID, 10));
  var ships = (cov_2rmfy6gvhj().s[4]++, G.ships.filter(function (ship) {
    cov_2rmfy6gvhj().f[1]++;
    cov_2rmfy6gvhj().s[5]++;
    return (cov_2rmfy6gvhj().b[0][0]++, ship.player === player) || (cov_2rmfy6gvhj().b[0][1]++, ship.sunk);
  }));
  cov_2rmfy6gvhj().s[6]++;
  return _objectSpread({}, G, {
    ships: ships
  });
};

function setShips(G, ctx, ships) {
  cov_2rmfy6gvhj().f[2]++;
  var player = (cov_2rmfy6gvhj().s[7]++, parseInt(ctx.playerID, 10));
  var validation = (cov_2rmfy6gvhj().s[8]++, validateShips(ships, player));
  cov_2rmfy6gvhj().s[9]++;

  if (!validation.valid) {
    cov_2rmfy6gvhj().b[1][0]++;
    cov_2rmfy6gvhj().s[10]++;
    throw new Error(validation.error);
  } else {
    cov_2rmfy6gvhj().b[1][1]++;
  }

  cov_2rmfy6gvhj().s[11]++;
  return _objectSpread({}, G, {
    ships: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(G.ships), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ships))
  });
}

function salvo(G, ctx, x, y) {
  cov_2rmfy6gvhj().f[3]++;
  var player = (cov_2rmfy6gvhj().s[12]++, parseInt(ctx.playerID, 10));
  var shipIndex = (cov_2rmfy6gvhj().s[13]++, findShipWithCell(G.ships, {
    x: x,
    y: y
  }, player)); // Do not allow the same cells to be shot twice

  var uniqueMove = (cov_2rmfy6gvhj().s[14]++, G.salvos.filter(function (salvo) {
    cov_2rmfy6gvhj().f[4]++;
    cov_2rmfy6gvhj().s[15]++;
    return (cov_2rmfy6gvhj().b[2][0]++, salvo.player === player) && (cov_2rmfy6gvhj().b[2][1]++, salvo.cell.x === x) && (cov_2rmfy6gvhj().b[2][2]++, salvo.cell.y === y);
  }).length === 0);
  cov_2rmfy6gvhj().s[16]++;

  if (!uniqueMove) {
    cov_2rmfy6gvhj().b[3][0]++;
    cov_2rmfy6gvhj().s[17]++;
    return _objectSpread({}, G);
  } else {
    cov_2rmfy6gvhj().b[3][1]++;
  }

  cov_2rmfy6gvhj().s[18]++;

  if (shipIndex === -1) {
    cov_2rmfy6gvhj().b[4][0]++;
    cov_2rmfy6gvhj().s[19]++;
    // Miss
    return _objectSpread({}, G, {
      salvos: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(G.salvos), [{
        player: player,
        hit: false,
        cell: {
          x: x,
          y: y
        }
      }])
    });
  } else {
    cov_2rmfy6gvhj().b[4][1]++;
  }

  var ship = (cov_2rmfy6gvhj().s[20]++, G.ships[shipIndex]); // Hit

  var newShips = (cov_2rmfy6gvhj().s[21]++, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(G.ships));
  cov_2rmfy6gvhj().s[22]++;

  if (countShipHits(G.salvos, ship.id) + 1 === ship.cells.length) {
    cov_2rmfy6gvhj().b[5][0]++;
    cov_2rmfy6gvhj().s[23]++;
    newShips[shipIndex] = _objectSpread({}, newShips[shipIndex], {
      sunk: true
    });
  } else {
    cov_2rmfy6gvhj().b[5][1]++;
  }

  cov_2rmfy6gvhj().s[24]++;
  return _objectSpread({}, G, {
    ships: newShips,
    salvos: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(G.salvos), [{
      player: player,
      hit: true,
      cell: {
        x: x,
        y: y
      },
      hitShip: ship.id
    }])
  });
}

var SeabattleGame = (cov_2rmfy6gvhj().s[25]++, {
  name: 'seabattle',
  setup: function setup() {
    cov_2rmfy6gvhj().f[5]++;
    cov_2rmfy6gvhj().s[26]++;
    return {
      ships: [],
      salvos: []
    };
  },
  phases: {
    setup: {
      moves: {
        setShips: setShips
      },
      next: 'play',
      start: true,
      turn: {
        activePlayers: boardgame_io_core__WEBPACK_IMPORTED_MODULE_2__["ActivePlayers"].ALL_ONCE,
        onMove: function onMove(_, ctx) {
          cov_2rmfy6gvhj().f[6]++;
          cov_2rmfy6gvhj().s[27]++;

          if (ctx.activePlayers === null) {
            cov_2rmfy6gvhj().b[6][0]++;
            cov_2rmfy6gvhj().s[28]++;
            ctx.events.endPhase();
          } else {
            cov_2rmfy6gvhj().b[6][1]++;
          }
        }
      }
    },
    play: {
      moves: {
        salvo: salvo
      }
    }
  },
  endIf: function endIf(G, ctx) {
    cov_2rmfy6gvhj().f[7]++;
    cov_2rmfy6gvhj().s[29]++;

    if (ctx.phase === 'play') {
      cov_2rmfy6gvhj().b[7][0]++;
      cov_2rmfy6gvhj().s[30]++;

      if (checkAllShipsSunk(G.ships, 0)) {
        cov_2rmfy6gvhj().b[8][0]++;
        cov_2rmfy6gvhj().s[31]++;
        return {
          winner: '1'
        };
      } else {
        cov_2rmfy6gvhj().b[8][1]++;
      }

      cov_2rmfy6gvhj().s[32]++;

      if (checkAllShipsSunk(G.ships, 1)) {
        cov_2rmfy6gvhj().b[9][0]++;
        cov_2rmfy6gvhj().s[33]++;
        return {
          winner: '0'
        };
      } else {
        cov_2rmfy6gvhj().b[9][1]++;
      }
    } else {
      cov_2rmfy6gvhj().b[7][1]++;
    }
  },
  turn: {
    moveLimit: 1
  },
  playerView: playerView
}); // Helper function for generating random ships positioning.

function generateRandomShips(player) {
  cov_2rmfy6gvhj().f[8]++;
  var result;
  var shipID;
  cov_2rmfy6gvhj().s[34]++;

  do {
    cov_2rmfy6gvhj().s[35]++;
    result = [];
    cov_2rmfy6gvhj().s[36]++;

    var _iterator = _createForOfIteratorHelper(VALID_SHIPS_SIZES),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var shipSize = _step.value;
        var count = (cov_2rmfy6gvhj().s[37]++, VALID_SHIPS_COUNT[shipSize]);
        cov_2rmfy6gvhj().s[38]++;

        for (var i = (cov_2rmfy6gvhj().s[39]++, 0); i < count; i++) {
          cov_2rmfy6gvhj().s[40]++;
          shipID = shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate();
          cov_2rmfy6gvhj().s[41]++;
          result.push(randomlyGetShip(player, shipSize, shipID));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } while (!validateShips(result, player).valid);

  cov_2rmfy6gvhj().s[42]++;
  return result;
} // Wheather a setup is valid or not.

function validateShips(ships, player) {
  cov_2rmfy6gvhj().f[9]++;
  var validations = (cov_2rmfy6gvhj().s[43]++, [validateShipsCount(ships), validateShipsContinuity(ships), validateShipsNotOutOfBounds(ships), validateShipsNotOverlapping(ships), validateShipsHaveUniqueIDs(ships)]);
  cov_2rmfy6gvhj().s[44]++;

  if (player !== undefined) {
    cov_2rmfy6gvhj().b[10][0]++;
    cov_2rmfy6gvhj().s[45]++;
    validations.push(validateShipsOwnership(player, ships));
  } else {
    cov_2rmfy6gvhj().b[10][1]++;
  }

  cov_2rmfy6gvhj().s[46]++;

  for (var _i = 0, _validations = validations; _i < _validations.length; _i++) {
    var validation = _validations[_i];
    cov_2rmfy6gvhj().s[47]++;

    if (!validation.valid) {
      cov_2rmfy6gvhj().b[11][0]++;
      cov_2rmfy6gvhj().s[48]++;
      return validation;
    } else {
      cov_2rmfy6gvhj().b[11][1]++;
    }
  }

  cov_2rmfy6gvhj().s[49]++;
  return {
    valid: true
  };
} // PRIVATE FUNCTIONS

function checkAllShipsSunk(ships, player) {
  cov_2rmfy6gvhj().f[10]++;
  cov_2rmfy6gvhj().s[50]++;

  var _iterator2 = _createForOfIteratorHelper(ships),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var ship = _step2.value;
      cov_2rmfy6gvhj().s[51]++;

      if ((cov_2rmfy6gvhj().b[13][0]++, ship.player === player) && (cov_2rmfy6gvhj().b[13][1]++, !ship.sunk)) {
        cov_2rmfy6gvhj().b[12][0]++;
        cov_2rmfy6gvhj().s[52]++;
        return false;
      } else {
        cov_2rmfy6gvhj().b[12][1]++;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  cov_2rmfy6gvhj().s[53]++;
  return true;
}

function randomlyGetShip(player, shipSize, id) {
  cov_2rmfy6gvhj().f[11]++;
  var cell = (cov_2rmfy6gvhj().s[54]++, {
    x: getRandomInt(10),
    y: getRandomInt(10)
  });
  var direction = (cov_2rmfy6gvhj().s[55]++, getRandomInt(2) === 1 ? (cov_2rmfy6gvhj().b[14][0]++, 'H') : (cov_2rmfy6gvhj().b[14][1]++, 'V'));
  var ship = (cov_2rmfy6gvhj().s[56]++, {
    player: player,
    cells: [],
    sunk: false,
    id: id
  });
  cov_2rmfy6gvhj().s[57]++;

  for (var i = (cov_2rmfy6gvhj().s[58]++, 0); i < shipSize; i++) {
    cov_2rmfy6gvhj().s[59]++;

    if (direction === 'H') {
      cov_2rmfy6gvhj().b[15][0]++;
      cov_2rmfy6gvhj().s[60]++;
      // Constant y
      ship.cells.push(_objectSpread({}, cell, {
        x: cell.x + i
      }));
    } else {
      cov_2rmfy6gvhj().b[15][1]++;
      cov_2rmfy6gvhj().s[61]++;
      // Constant x
      ship.cells.push(_objectSpread({}, cell, {
        y: cell.y + i
      }));
    }
  }

  cov_2rmfy6gvhj().s[62]++;
  return ship;
}

function getRandomInt(max) {
  cov_2rmfy6gvhj().f[12]++;
  cov_2rmfy6gvhj().s[63]++;
  return Math.random() * max << 0 << 0; // https://github.com/babel/minify/issues/904
}

function findShipWithCell(ships, cell, player) {
  cov_2rmfy6gvhj().f[13]++;
  cov_2rmfy6gvhj().s[64]++;
  return ships.findIndex(function (ship) {
    cov_2rmfy6gvhj().f[14]++;
    cov_2rmfy6gvhj().s[65]++;
    return (cov_2rmfy6gvhj().b[16][0]++, ship.cells.findIndex(function (c) {
      cov_2rmfy6gvhj().f[15]++;
      cov_2rmfy6gvhj().s[66]++;
      return (cov_2rmfy6gvhj().b[17][0]++, c.x === cell.x) && (cov_2rmfy6gvhj().b[17][1]++, c.y === cell.y);
    }) !== -1) && (cov_2rmfy6gvhj().b[16][1]++, ship.player !== player);
  });
}

function countShipHits(salvos, shipId) {
  cov_2rmfy6gvhj().f[16]++;
  cov_2rmfy6gvhj().s[67]++;
  return salvos.filter(function (s) {
    cov_2rmfy6gvhj().f[17]++;
    cov_2rmfy6gvhj().s[68]++;
    return s.hitShip === shipId;
  }).length;
}

function validateShipsCount(ships) {
  cov_2rmfy6gvhj().f[18]++;
  var shipsLength = (cov_2rmfy6gvhj().s[69]++, ships.map(function (ship) {
    cov_2rmfy6gvhj().f[19]++;
    cov_2rmfy6gvhj().s[70]++;
    return ship.cells.length;
  }));
  var count = (cov_2rmfy6gvhj().s[71]++, _objectSpread({}, VALID_SHIPS_COUNT));
  cov_2rmfy6gvhj().s[72]++;

  var _iterator3 = _createForOfIteratorHelper(shipsLength),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _length = _step3.value;
      cov_2rmfy6gvhj().s[73]++;

      if (!(_length in count)) {
        cov_2rmfy6gvhj().b[18][0]++;
        cov_2rmfy6gvhj().s[74]++;
        return {
          valid: false,
          error: "Invalid ship length: ".concat(_length)
        };
      } else {
        cov_2rmfy6gvhj().b[18][1]++;
      }

      cov_2rmfy6gvhj().s[75]++;
      count[_length]--;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  cov_2rmfy6gvhj().s[76]++;

  for (var _i2 = 0, _Object$values = Object.values(count); _i2 < _Object$values.length; _i2++) {
    var length = _Object$values[_i2];
    cov_2rmfy6gvhj().s[77]++;

    if (length !== 0) {
      cov_2rmfy6gvhj().b[19][0]++;
      cov_2rmfy6gvhj().s[78]++;
      return {
        valid: false,
        error: 'Invalid ships sizes.'
      };
    } else {
      cov_2rmfy6gvhj().b[19][1]++;
    }
  }

  cov_2rmfy6gvhj().s[79]++;
  return {
    valid: true
  };
}

function validateShipsOwnership(player, ships) {
  cov_2rmfy6gvhj().f[20]++;
  var owners = (cov_2rmfy6gvhj().s[80]++, ships.map(function (ship) {
    cov_2rmfy6gvhj().f[21]++;
    cov_2rmfy6gvhj().s[81]++;
    return ship.player;
  }));
  cov_2rmfy6gvhj().s[82]++;

  var _iterator4 = _createForOfIteratorHelper(owners),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var owner = _step4.value;
      cov_2rmfy6gvhj().s[83]++;

      if (owner !== player) {
        cov_2rmfy6gvhj().b[20][0]++;
        cov_2rmfy6gvhj().s[84]++;
        return {
          valid: false,
          error: "Invalid player owner: ".concat(owner, " should be: ").concat(player)
        };
      } else {
        cov_2rmfy6gvhj().b[20][1]++;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  cov_2rmfy6gvhj().s[85]++;
  return {
    valid: true
  };
}

function validateShipsContinuity(ships) {
  cov_2rmfy6gvhj().f[22]++;
  cov_2rmfy6gvhj().s[86]++;

  var _iterator5 = _createForOfIteratorHelper(ships),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var ship = _step5.value;
      cov_2rmfy6gvhj().s[87]++;

      if (ship.cells.length < 2) {
        cov_2rmfy6gvhj().b[21][0]++;
        cov_2rmfy6gvhj().s[88]++;
        continue;
      } else {
        cov_2rmfy6gvhj().b[21][1]++;
      }

      var lastICell = (cov_2rmfy6gvhj().s[89]++, ship.cells[0]);
      var vector = (cov_2rmfy6gvhj().s[90]++, getCellVector(ship.cells[1], ship.cells[0]));
      cov_2rmfy6gvhj().s[91]++;

      if (!((cov_2rmfy6gvhj().b[23][0]++, Math.abs(vector.x) === 1) && (cov_2rmfy6gvhj().b[23][1]++, Math.abs(vector.y) === 0) || (cov_2rmfy6gvhj().b[23][2]++, Math.abs(vector.x) === 0) && (cov_2rmfy6gvhj().b[23][3]++, Math.abs(vector.y) === 1))) {
        cov_2rmfy6gvhj().b[22][0]++;
        cov_2rmfy6gvhj().s[92]++;
        return {
          valid: false,
          error: "IShip is not spaced right!"
        };
      } else {
        cov_2rmfy6gvhj().b[22][1]++;
      }

      cov_2rmfy6gvhj().s[93]++;

      for (var i = (cov_2rmfy6gvhj().s[94]++, 1); i < ship.cells.length; i++) {
        var cell = (cov_2rmfy6gvhj().s[95]++, ship.cells[i]);
        var newVector = (cov_2rmfy6gvhj().s[96]++, getCellVector(cell, lastICell));
        cov_2rmfy6gvhj().s[97]++;

        if ((cov_2rmfy6gvhj().b[25][0]++, newVector.x !== vector.x) || (cov_2rmfy6gvhj().b[25][1]++, newVector.y !== vector.y)) {
          cov_2rmfy6gvhj().b[24][0]++;
          cov_2rmfy6gvhj().s[98]++;
          return {
            valid: false,
            error: "IShip is not continuous!"
          };
        } else {
          cov_2rmfy6gvhj().b[24][1]++;
        }

        cov_2rmfy6gvhj().s[99]++;
        lastICell = cell;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  cov_2rmfy6gvhj().s[100]++;
  return {
    valid: true
  };
}

function getCellVector(a, b) {
  cov_2rmfy6gvhj().f[23]++;
  cov_2rmfy6gvhj().s[101]++;
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

function validateShipsHaveUniqueIDs(ships) {
  cov_2rmfy6gvhj().f[24]++;
  var usedIDs = (cov_2rmfy6gvhj().s[102]++, {});
  cov_2rmfy6gvhj().s[103]++;

  var _iterator6 = _createForOfIteratorHelper(ships),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var ship = _step6.value;
      cov_2rmfy6gvhj().s[104]++;

      if (usedIDs[ship.id]) {
        cov_2rmfy6gvhj().b[26][0]++;
        cov_2rmfy6gvhj().s[105]++;
        return {
          valid: false,
          error: "IShip IDs are not unique!"
        };
      } else {
        cov_2rmfy6gvhj().b[26][1]++;
      }

      cov_2rmfy6gvhj().s[106]++;
      usedIDs[ship.id] = true;
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  cov_2rmfy6gvhj().s[107]++;
  return {
    valid: true
  };
}

function validateShipsNotOutOfBounds(ships) {
  cov_2rmfy6gvhj().f[25]++;
  cov_2rmfy6gvhj().s[108]++;

  var _iterator7 = _createForOfIteratorHelper(ships),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var ship = _step7.value;
      cov_2rmfy6gvhj().s[109]++;

      var _iterator8 = _createForOfIteratorHelper(ship.cells),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var cell = _step8.value;
          cov_2rmfy6gvhj().s[110]++;

          if ((cov_2rmfy6gvhj().b[28][0]++, cell.x < 0) || (cov_2rmfy6gvhj().b[28][1]++, cell.x > 9) || (cov_2rmfy6gvhj().b[28][2]++, cell.y < 0) || (cov_2rmfy6gvhj().b[28][3]++, cell.y > 9)) {
            cov_2rmfy6gvhj().b[27][0]++;
            cov_2rmfy6gvhj().s[111]++;
            return {
              valid: false,
              error: "IShip out of bounds!"
            };
          } else {
            cov_2rmfy6gvhj().b[27][1]++;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  cov_2rmfy6gvhj().s[112]++;
  return {
    valid: true
  };
}

function validateShipsNotOverlapping(ships) {
  cov_2rmfy6gvhj().f[26]++;
  var cellsUsed = (cov_2rmfy6gvhj().s[113]++, {});
  cov_2rmfy6gvhj().s[114]++;

  var _iterator9 = _createForOfIteratorHelper(ships),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var ship = _step9.value;
      cov_2rmfy6gvhj().s[115]++;

      var _iterator10 = _createForOfIteratorHelper(ship.cells),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var cell = _step10.value;
          cov_2rmfy6gvhj().s[116]++;

          if (!(cell.x in cellsUsed)) {
            cov_2rmfy6gvhj().b[29][0]++;
            cov_2rmfy6gvhj().s[117]++;
            cellsUsed[cell.x] = {};
          } else {
            cov_2rmfy6gvhj().b[29][1]++;
          }

          cov_2rmfy6gvhj().s[118]++;

          if (cellsUsed[cell.x][cell.y]) {
            cov_2rmfy6gvhj().b[30][0]++;
            cov_2rmfy6gvhj().s[119]++;
            return {
              valid: false,
              error: "Overlapping ships!"
            };
          } else {
            cov_2rmfy6gvhj().b[30][1]++;
          }

          cov_2rmfy6gvhj().s[120]++;
          cellsUsed[cell.x][cell.y] = true;
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  cov_2rmfy6gvhj().s[121]++;
  return {
    valid: true
  };
}

/***/ })

}]);
//# sourceMappingURL=14.js.map