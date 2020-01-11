(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.immer"],{

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: default, Immer, applyPatches, createDraft, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return Immer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return createDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return finishDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return DRAFTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return isDraftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
var obj;
var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : ( obj = {}, obj["immer-nothing"] = true, obj );
var DRAFTABLE = typeof Symbol !== "undefined" && Symbol.for ? Symbol.for("immer-draftable") : "__$immer_draftable";
var DRAFT_STATE = typeof Symbol !== "undefined" && Symbol.for ? Symbol.for("immer-state") : "__$immer_state";
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value || typeof value !== "object") { return false; }
  if (Array.isArray(value)) { return true; }
  var proto = Object.getPrototypeOf(value);
  if (!proto || proto === Object.prototype) { return true; }
  return !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE];
}
function original(value) {
  if (value && value[DRAFT_STATE]) {
    return value[DRAFT_STATE].base;
  } // otherwise return undefined

}
var assign = Object.assign || function assign(target, value) {
  for (var key in value) {
    if (has(value, key)) {
      target[key] = value[key];
    }
  }

  return target;
};
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) { return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); } : Object.getOwnPropertyNames;
function shallowCopy(base, invokeGetters) {
  if ( invokeGetters === void 0 ) invokeGetters = false;

  if (Array.isArray(base)) { return base.slice(); }
  var clone = Object.create(Object.getPrototypeOf(base));
  ownKeys(base).forEach(function (key) {
    if (key === DRAFT_STATE) {
      return; // Never copy over draft state.
    }

    var desc = Object.getOwnPropertyDescriptor(base, key);
    var value = desc.value;

    if (desc.get) {
      if (!invokeGetters) {
        throw new Error("Immer drafts cannot have computed properties");
      }

      value = desc.get.call(base);
    }

    if (desc.enumerable) {
      clone[key] = value;
    } else {
      Object.defineProperty(clone, key, {
        value: value,
        writable: true,
        configurable: true
      });
    }
  });
  return clone;
}
function each(value, cb) {
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) { cb(i, value[i], value); }
  } else {
    ownKeys(value).forEach(function (key) { return cb(key, value[key], value); });
  }
}
function isEnumerable(base, prop) {
  var desc = Object.getOwnPropertyDescriptor(base, prop);
  return !!desc && desc.enumerable;
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

/** Each scope represents a `produce` call. */

var ImmerScope = function ImmerScope(parent) {
  this.drafts = [];
  this.parent = parent; // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.

  this.canAutoFreeze = true; // To avoid prototype lookups:

  this.patches = null;
};

ImmerScope.prototype.usePatches = function usePatches (patchListener) {
  if (patchListener) {
    this.patches = [];
    this.inversePatches = [];
    this.patchListener = patchListener;
  }
};

ImmerScope.prototype.revoke = function revoke$1 () {
  this.leave();
  this.drafts.forEach(revoke);
  this.drafts = null; // Make draft-related methods throw.
};

ImmerScope.prototype.leave = function leave () {
  if (this === ImmerScope.current) {
    ImmerScope.current = this.parent;
  }
};
ImmerScope.current = null;

ImmerScope.enter = function () {
  return this.current = new ImmerScope(this.current);
};

function revoke(draft) {
  draft[DRAFT_STATE].revoke();
}

// but share them all instead

var descriptors = {};
function willFinalize(scope, result, isReplaced) {
  scope.drafts.forEach(function (draft) {
    draft[DRAFT_STATE].finalizing = true;
  });

  if (!isReplaced) {
    if (scope.patches) {
      markChangesRecursively(scope.drafts[0]);
    } // This is faster when we don't care about which attributes changed.


    markChangesSweep(scope.drafts);
  } // When a child draft is returned, look for changes.
  else if (isDraft(result) && result[DRAFT_STATE].scope === scope) {
      markChangesSweep(scope.drafts);
    }
}
function createProxy(base, parent) {
  var isArray = Array.isArray(base);
  var draft = clonePotentialDraft(base);
  each(draft, function (prop) {
    proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
  }); // See "proxy.js" for property documentation.

  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    scope: scope,
    modified: false,
    finalizing: false,
    // es5 only
    finalized: false,
    assigned: {},
    parent: parent,
    base: base,
    draft: draft,
    copy: null,
    revoke: revoke$1,
    revoked: false // es5 only

  };
  createHiddenProperty(draft, DRAFT_STATE, state);
  scope.drafts.push(draft);
  return draft;
}

function revoke$1() {
  this.revoked = true;
}

function source(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek(draft, prop) {
  var state = draft[DRAFT_STATE];

  if (state && !state.finalizing) {
    state.finalizing = true;
    var value = draft[prop];
    state.finalizing = false;
    return value;
  }

  return draft[prop];
}

function get(state, prop) {
  assertUnrevoked(state);
  var value = peek(source(state), prop);
  if (state.finalizing) { return value; } // Create a draft if the value is unmodified.

  if (value === peek(state.base, prop) && isDraftable(value)) {
    prepareCopy(state);
    return state.copy[prop] = createProxy(value, state);
  }

  return value;
}

function set(state, prop, value) {
  assertUnrevoked(state);
  state.assigned[prop] = true;

  if (!state.modified) {
    if (is(value, peek(source(state), prop))) { return; }
    markChanged(state);
    prepareCopy(state);
  }

  state.copy[prop] = value;
}

function markChanged(state) {
  if (!state.modified) {
    state.modified = true;
    if (state.parent) { markChanged(state.parent); }
  }
}

function prepareCopy(state) {
  if (!state.copy) { state.copy = clonePotentialDraft(state.base); }
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

      get: function get$1() {
        return get(this[DRAFT_STATE], prop);
      },

      set: function set$1(value) {
        set(this[DRAFT_STATE], prop, value);
      }

    };
  }

  Object.defineProperty(draft, prop, desc);
}

function assertUnrevoked(state) {
  if (state.revoked === true) { throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(source(state))); }
} // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.


function markChangesSweep(drafts) {
  // The natural order of drafts in the `scope` array is based on when they
  // were accessed. By processing drafts in reverse natural order, we have a
  // better chance of processing leaf nodes first. When a leaf node is known to
  // have changed, we can avoid any traversal of its ancestor nodes.
  for (var i = drafts.length - 1; i >= 0; i--) {
    var state = drafts[i][DRAFT_STATE];

    if (!state.modified) {
      if (Array.isArray(state.base)) {
        if (hasArrayChanges(state)) { markChanged(state); }
      } else if (hasObjectChanges(state)) { markChanged(state); }
    }
  }
}

function markChangesRecursively(object) {
  if (!object || typeof object !== "object") { return; }
  var state = object[DRAFT_STATE];
  if (!state) { return; }
  var base = state.base;
  var draft = state.draft;
  var assigned = state.assigned;

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
    }); // Look for removed keys.

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
      for (var i = draft.length; i < base.length; i++) { assigned[i] = false; }
    } else {
      for (var i$1 = base.length; i$1 < draft.length; i$1++) { assigned[i$1] = true; }
    }

    for (var i$2 = 0; i$2 < draft.length; i$2++) {
      // Only untouched indices trigger recursion.
      if (assigned[i$2] === undefined) { markChangesRecursively(draft[i$2]); }
    }
  }
}

function hasObjectChanges(state) {
  var base = state.base;
  var draft = state.draft; // Search for added keys and changed keys. Start at the back, because
  // non-numeric keys are ordered by time of definition on the object.

  var keys = Object.keys(draft);

  for (var i = keys.length - 1; i >= 0; i--) {
    var key = keys[i];
    var baseValue = base[key]; // The `undefined` check is a fast path for pre-existing keys.

    if (baseValue === undefined && !has(base, key)) {
      return true;
    } // Once a base key is deleted, future changes go undetected, because its
    // descriptor is erased. This branch detects any missed changes.
    else {
        var value = draft[key];
        var state$1 = value && value[DRAFT_STATE];

        if (state$1 ? state$1.base !== baseValue : !is(value, baseValue)) {
          return true;
        }
      }
  } // At this point, no keys were added or changed.
  // Compare key count to determine if keys were deleted.


  return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
  var draft = state.draft;
  if (draft.length !== state.base.length) { return true; } // See #116
  // If we first shorten the length, our array interceptors will be removed.
  // If after that new items are added, result in the same original length,
  // those last items will have no intercepting property.
  // So if there is no own descriptor on the last position, we know that items were removed and added
  // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
  // the last one

  var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

  if (descriptor && !descriptor.get) { return true; } // For all other cases, we don't have to compare, as they would have been picked up by the index setters

  return false;
}

function createHiddenProperty(target, prop, value) {
  Object.defineProperty(target, prop, {
    value: value,
    enumerable: false,
    writable: true
  });
}

var legacyProxy = /*#__PURE__*/Object.freeze({
    willFinalize: willFinalize,
    createProxy: createProxy
});

function willFinalize$1() {}
function createProxy$1(base, parent) {
  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    // Track which produce call this is associated with.
    scope: scope,
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
  var ref = Array.isArray(base) ? // [state] is used for arrays, to make sure the proxy is array-ish and not violate invariants,
  // although state itself is an object
  Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);
  var revoke = ref.revoke;
  var proxy = ref.proxy;
  state.draft = proxy;
  state.revoke = revoke;
  scope.drafts.push(proxy);
  return proxy;
}
var objectTraps = {
  get: get$1,

  has: function has(target, prop) {
    return prop in source$1(target);
  },

  ownKeys: function ownKeys(target) {
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
}; // returns the object we should be reading the current value from, which is base, until some change has been made


function source$1(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek$1(draft, prop) {
  var state = draft[DRAFT_STATE];
  var desc = Reflect.getOwnPropertyDescriptor(state ? source$1(state) : draft, prop);
  return desc && desc.value;
}

function get$1(state, prop) {
  if (prop === DRAFT_STATE) { return state; }
  var drafts = state.drafts; // Check for existing draft in unmodified state.

  if (!state.modified && has(drafts, prop)) {
    return drafts[prop];
  }

  var value = source$1(state)[prop];

  if (state.finalized || !isDraftable(value)) {
    return value;
  } // Check for existing draft in modified state.


  if (state.modified) {
    // Assigned values are never drafted. This catches any drafts we created, too.
    if (value !== peek$1(state.base, prop)) { return value; } // Store drafts on the copy (when one exists).

    drafts = state.copy;
  }

  return drafts[prop] = createProxy$1(value, state);
}

function set$1(state, prop, value) {
  if (!state.modified) {
    var baseValue = peek$1(state.base, prop); // Optimize based on value's truthiness. Truthy values are guaranteed to
    // never be undefined, so we can avoid the `in` operator. Lastly, truthy
    // values may be drafts, but falsy values are never drafts.

    var isUnchanged = value ? is(baseValue, value) || value === state.drafts[prop] : is(baseValue, value) && prop in state.base;
    if (isUnchanged) { return true; }
    markChanged$1(state);
  }

  state.assigned[prop] = true;
  state.copy[prop] = value;
  return true;
}

function deleteProperty(state, prop) {
  // The `undefined` check is a fast path for pre-existing keys.
  if (peek$1(state.base, prop) !== undefined || prop in state.base) {
    state.assigned[prop] = false;
    markChanged$1(state);
  }

  if (state.copy) { delete state.copy[prop]; }
  return true;
} // Note: We never coerce `desc.value` into an Immer draft, because we can't make
// the same guarantee in ES5 mode.


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
    if (state.parent) { markChanged$1(state.parent); }
  }
}

var modernProxy = /*#__PURE__*/Object.freeze({
    willFinalize: willFinalize$1,
    createProxy: createProxy$1
});

function generatePatches(state, basePath, patches, inversePatches) {
  Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
  var assign, assign$1;

  var base = state.base;
  var copy = state.copy;
  var assigned = state.assigned; // Reduce complexity by ensuring `base` is never longer.

  if (copy.length < base.length) {
    (assign = [copy, base], base = assign[0], copy = assign[1]);
    (assign$1 = [inversePatches, patches], patches = assign$1[0], inversePatches = assign$1[1]);
  }

  var delta = copy.length - base.length; // Find the first replaced index.

  var start = 0;

  while (base[start] === copy[start] && start < base.length) {
    ++start;
  } // Find the last replaced index. Search from the end to optimize splice patches.


  var end = base.length;

  while (end > start && base[end - 1] === copy[end + delta - 1]) {
    --end;
  } // Process replaced indices.


  for (var i = start; i < end; ++i) {
    if (assigned[i] && copy[i] !== base[i]) {
      var path = basePath.concat([i]);
      patches.push({
        op: "replace",
        path: path,
        value: copy[i]
      });
      inversePatches.push({
        op: "replace",
        path: path,
        value: base[i]
      });
    }
  }

  var useRemove = end != base.length;
  var replaceCount = patches.length; // Process added indices.

  for (var i$1 = end + delta - 1; i$1 >= end; --i$1) {
    var path$1 = basePath.concat([i$1]);
    patches[replaceCount + i$1 - end] = {
      op: "add",
      path: path$1,
      value: copy[i$1]
    };

    if (useRemove) {
      inversePatches.push({
        op: "remove",
        path: path$1
      });
    }
  } // One "replace" patch reverses all non-splicing "add" patches.


  if (!useRemove) {
    inversePatches.push({
      op: "replace",
      path: basePath.concat(["length"]),
      value: base.length
    });
  }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
  var base = state.base;
  var copy = state.copy;
  each(state.assigned, function (key, assignedValue) {
    var origValue = base[key];
    var value = copy[key];
    var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
    if (origValue === value && op === "replace") { return; }
    var path = basePath.concat(key);
    patches.push(op === "remove" ? {
      op: op,
      path: path
    } : {
      op: op,
      path: path,
      value: value
    });
    inversePatches.push(op === "add" ? {
      op: "remove",
      path: path
    } : op === "remove" ? {
      op: "add",
      path: path,
      value: origValue
    } : {
      op: "replace",
      path: path,
      value: origValue
    });
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

      for (var i$1 = 0; i$1 < path.length - 1; i$1++) {
        base = base[path[i$1]];
        if (!base || typeof base !== "object") { throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); } // prettier-ignore
      }

      var key = path[path.length - 1];

      switch (patch.op) {
        case "replace":
          base[key] = patch.value;
          break;

        case "add":
          if (Array.isArray(base)) {
            // TODO: support "foo/-" paths for appending to an array
            base.splice(key, 0, patch.value);
          } else {
            base[key] = patch.value;
          }

          break;

        case "remove":
          if (Array.isArray(base)) {
            base.splice(key, 1);
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
var Immer = function Immer(config) {
  assign(this, configDefaults, config);
  this.setUseProxies(this.useProxies);
  this.produce = this.produce.bind(this);
};

Immer.prototype.produce = function produce (base, recipe, patchListener) {
    var this$1 = this;

  // curried invocation
  if (typeof base === "function" && typeof recipe !== "function") {
    var defaultBase = recipe;
    recipe = base;
    var self = this;
    return function curriedProduce(base) {
        var this$1 = this;
        if ( base === void 0 ) base = defaultBase;
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

      return self.produce(base, function (draft) { return recipe.call.apply(recipe, [ this$1, draft ].concat( args )); }); // prettier-ignore
    };
  } // prettier-ignore


  {
    if (typeof recipe !== "function") {
      throw new Error("The first or second argument to `produce` must be a function");
    }

    if (patchListener !== undefined && typeof patchListener !== "function") {
      throw new Error("The third argument to `produce` must be a function or undefined");
    }
  }
  var result; // Only plain objects, arrays, and "immerable classes" are drafted.

  if (isDraftable(base)) {
    var scope = ImmerScope.enter();
    var proxy = this.createProxy(base);
    var hasError = true;

    try {
      result = recipe(proxy);
      hasError = false;
    } finally {
      // finally instead of catch + rethrow better preserves original stack
      if (hasError) { scope.revoke(); }else { scope.leave(); }
    }

    if (result instanceof Promise) {
      return result.then(function (result) {
        scope.usePatches(patchListener);
        return this$1.processResult(result, scope);
      }, function (error) {
        scope.revoke();
        throw error;
      });
    }

    scope.usePatches(patchListener);
    return this.processResult(result, scope);
  } else {
    result = recipe(base);
    if (result === undefined) { return base; }
    return result !== NOTHING ? result : undefined;
  }
};

Immer.prototype.createDraft = function createDraft (base) {
  if (!isDraftable(base)) {
    throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object"); // prettier-ignore
  }

  var scope = ImmerScope.enter();
  var proxy = this.createProxy(base);
  proxy[DRAFT_STATE].isManual = true;
  scope.leave();
  return proxy;
};

Immer.prototype.finishDraft = function finishDraft (draft, patchListener) {
  var state = draft && draft[DRAFT_STATE];

  if (!state || !state.isManual) {
    throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`"); // prettier-ignore
  }

  if (state.finalized) {
    throw new Error("The given draft is already finalized"); // prettier-ignore
  }

  var scope = state.scope;
  scope.usePatches(patchListener);
  return this.processResult(undefined, scope);
};

Immer.prototype.setAutoFreeze = function setAutoFreeze (value) {
  this.autoFreeze = value;
};

Immer.prototype.setUseProxies = function setUseProxies (value) {
  this.useProxies = value;
  assign(this, value ? modernProxy : legacyProxy);
};

Immer.prototype.applyPatches = function applyPatches$1 (base, patches) {
  // Mutate the base state when a draft is passed.
  if (isDraft(base)) {
    return applyPatches(base, patches);
  } // Otherwise, produce a copy of the base state.


  return this.produce(base, function (draft) { return applyPatches(draft, patches); });
};
/** @internal */


Immer.prototype.processResult = function processResult (result, scope) {
  var baseDraft = scope.drafts[0];
  var isReplaced = result !== undefined && result !== baseDraft;
  this.willFinalize(scope, result, isReplaced);

  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified) {
      scope.revoke();
      throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore
    }

    if (isDraftable(result)) {
      // Finalize the result in case it contains (or is) a subset of the draft.
      result = this.finalize(result, null, scope);
    }

    if (scope.patches) {
      scope.patches.push({
        op: "replace",
        path: [],
        value: result
      });
      scope.inversePatches.push({
        op: "replace",
        path: [],
        value: baseDraft[DRAFT_STATE].base
      });
    }
  } else {
    // Finalize the base draft.
    result = this.finalize(baseDraft, [], scope);
  }

  scope.revoke();

  if (scope.patches) {
    scope.patchListener(scope.patches, scope.inversePatches);
  }

  return result !== NOTHING ? result : undefined;
};
/**
 * @internal
 * Finalize a draft, returning either the unmodified base state or a modified
 * copy of the base state.
 */


Immer.prototype.finalize = function finalize (draft, path, scope) {
    var this$1 = this;

  var state = draft[DRAFT_STATE];

  if (!state) {
    if (Object.isFrozen(draft)) { return draft; }
    return this.finalizeTree(draft, null, scope);
  } // Never finalize drafts owned by another scope.


  if (state.scope !== scope) {
    return draft;
  }

  if (!state.modified) {
    return state.base;
  }

  if (!state.finalized) {
    state.finalized = true;
    this.finalizeTree(state.draft, path, scope);

    if (this.onDelete) {
      // The `assigned` object is unreliable with ES5 drafts.
      if (this.useProxies) {
        var assigned = state.assigned;

        for (var prop in assigned) {
          if (!assigned[prop]) { this.onDelete(state, prop); }
        }
      } else {
        var base = state.base;
          var copy = state.copy;
        each(base, function (prop) {
          if (!has(copy, prop)) { this$1.onDelete(state, prop); }
        });
      }
    }

    if (this.onCopy) {
      this.onCopy(state);
    } // At this point, all descendants of `state.copy` have been finalized,
    // so we can be sure that `scope.canAutoFreeze` is accurate.


    if (this.autoFreeze && scope.canAutoFreeze) {
      Object.freeze(state.copy);
    }

    if (path && scope.patches) {
      generatePatches(state, path, scope.patches, scope.inversePatches);
    }
  }

  return state.copy;
};
/**
 * @internal
 * Finalize all drafts in the given state tree.
 */


Immer.prototype.finalizeTree = function finalizeTree (root, rootPath, scope) {
    var this$1 = this;

  var state = root[DRAFT_STATE];

  if (state) {
    if (!this.useProxies) {
      // Create the final copy, with added keys and without deleted keys.
      state.copy = shallowCopy(state.draft, true);
    }

    root = state.copy;
  }

  var needPatches = !!rootPath && !!scope.patches;

  var finalizeProperty = function (prop, value, parent) {
    if (value === parent) {
      throw Error("Immer forbids circular references");
    } // In the `finalizeTree` method, only the `root` object may be a draft.


    var isDraftProp = !!state && parent === root;

    if (isDraft(value)) {
      var path = isDraftProp && needPatches && !state.assigned[prop] ? rootPath.concat(prop) : null; // Drafts owned by `scope` are finalized here.

      value = this$1.finalize(value, path, scope); // Drafts from another scope must prevent auto-freezing.

      if (isDraft(value)) {
        scope.canAutoFreeze = false;
      } // Preserve non-enumerable properties.


      if (Array.isArray(parent) || isEnumerable(parent, prop)) {
        parent[prop] = value;
      } else {
        Object.defineProperty(parent, prop, {
          value: value
        });
      } // Unchanged drafts are never passed to the `onAssign` hook.


      if (isDraftProp && value === state.base[prop]) { return; }
    } // Unchanged draft properties are ignored.
    else if (isDraftProp && is(value, state.base[prop])) {
        return;
      } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
      else if (isDraftable(value) && !Object.isFrozen(value)) {
          each(value, finalizeProperty);
        }

    if (isDraftProp && this$1.onAssign) {
      this$1.onAssign(state, prop, value);
    }
  };

  each(root, finalizeProperty);
  return root;
};

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
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */

var createDraft = immer.createDraft.bind(immer);
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */

var finishDraft = immer.finishDraft.bind(immer);

/* harmony default export */ __webpack_exports__["default"] = (produce);

//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEpBQTBKLGtGQUFrRixFQUFFO0FBQzlPO0FBQ0E7O0FBRUEsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCLE9BQU8sd0JBQXdCO0FBQ3BFLEdBQUc7QUFDSCwyQ0FBMkMsbUNBQW1DLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0QsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQSxvR0FBb0c7O0FBRXBHLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOzs7QUFHUCxzREFBc0QsUUFBUTtBQUM5RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxJQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsc0VBQU8sRUFBQztBQUN1SztBQUM5TCIsImZpbGUiOiJlMzk4OTIyYmY1YmUwOWY1YTc1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvYmo7XG52YXIgTk9USElORyA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2woXCJpbW1lci1ub3RoaW5nXCIpIDogKCBvYmogPSB7fSwgb2JqW1wiaW1tZXItbm90aGluZ1wiXSA9IHRydWUsIG9iaiApO1xudmFyIERSQUZUQUJMRSA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLmZvciA/IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIikgOiBcIl9fJGltbWVyX2RyYWZ0YWJsZVwiO1xudmFyIERSQUZUX1NUQVRFID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuZm9yID8gU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpIDogXCJfXyRpbW1lcl9zdGF0ZVwiO1xuZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhIXZhbHVlW0RSQUZUX1NUQVRFXTtcbn1cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHsgcmV0dXJuIHRydWU7IH1cbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKCFwcm90byB8fCBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSkgeyByZXR1cm4gdHJ1ZTsgfVxuICByZXR1cm4gISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhdmFsdWUuY29uc3RydWN0b3JbRFJBRlRBQkxFXTtcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB2YWx1ZVtEUkFGVF9TVEFURV0pIHtcbiAgICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2U7XG4gIH0gLy8gb3RoZXJ3aXNlIHJldHVybiB1bmRlZmluZWRcblxufVxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgdmFsdWUpIHtcbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKGhhcyh2YWx1ZSwga2V5KSkge1xuICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIG93bktleXMgPSB0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0Lm93bktleXMgPyBSZWZsZWN0Lm93bktleXMgOiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7IH0gOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UsIGludm9rZUdldHRlcnMpIHtcbiAgaWYgKCBpbnZva2VHZXR0ZXJzID09PSB2b2lkIDAgKSBpbnZva2VHZXR0ZXJzID0gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpIHsgcmV0dXJuIGJhc2Uuc2xpY2UoKTsgfVxuICB2YXIgY2xvbmUgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSk7XG4gIG93bktleXMoYmFzZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gRFJBRlRfU1RBVEUpIHtcbiAgICAgIHJldHVybjsgLy8gTmV2ZXIgY29weSBvdmVyIGRyYWZ0IHN0YXRlLlxuICAgIH1cblxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpO1xuICAgIHZhciB2YWx1ZSA9IGRlc2MudmFsdWU7XG5cbiAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgIGlmICghaW52b2tlR2V0dGVycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSBkZXNjLmdldC5jYWxsKGJhc2UpO1xuICAgIH1cblxuICAgIGlmIChkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsb25lLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5mdW5jdGlvbiBlYWNoKHZhbHVlLCBjYikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IGNiKGksIHZhbHVlW2ldLCB2YWx1ZSk7IH1cbiAgfSBlbHNlIHtcbiAgICBvd25LZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNiKGtleSwgdmFsdWVba2V5XSwgdmFsdWUpOyB9KTtcbiAgfVxufVxuZnVuY3Rpb24gaXNFbnVtZXJhYmxlKGJhc2UsIHByb3ApIHtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3ApO1xuICByZXR1cm4gISFkZXNjICYmIGRlc2MuZW51bWVyYWJsZTtcbn1cbmZ1bmN0aW9uIGhhcyh0aGluZywgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKTtcbn1cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuLyoqIEVhY2ggc2NvcGUgcmVwcmVzZW50cyBhIGBwcm9kdWNlYCBjYWxsLiAqL1xuXG52YXIgSW1tZXJTY29wZSA9IGZ1bmN0aW9uIEltbWVyU2NvcGUocGFyZW50KSB7XG4gIHRoaXMuZHJhZnRzID0gW107XG4gIHRoaXMucGFyZW50ID0gcGFyZW50OyAvLyBXaGVuZXZlciB0aGUgbW9kaWZpZWQgZHJhZnQgY29udGFpbnMgYSBkcmFmdCBmcm9tIGFub3RoZXIgc2NvcGUsIHdlXG4gIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG5cbiAgdGhpcy5jYW5BdXRvRnJlZXplID0gdHJ1ZTsgLy8gVG8gYXZvaWQgcHJvdG90eXBlIGxvb2t1cHM6XG5cbiAgdGhpcy5wYXRjaGVzID0gbnVsbDtcbn07XG5cbkltbWVyU2NvcGUucHJvdG90eXBlLnVzZVBhdGNoZXMgPSBmdW5jdGlvbiB1c2VQYXRjaGVzIChwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgdGhpcy5wYXRjaGVzID0gW107XG4gICAgdGhpcy5pbnZlcnNlUGF0Y2hlcyA9IFtdO1xuICAgIHRoaXMucGF0Y2hMaXN0ZW5lciA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn07XG5cbkltbWVyU2NvcGUucHJvdG90eXBlLnJldm9rZSA9IGZ1bmN0aW9uIHJldm9rZSQxICgpIHtcbiAgdGhpcy5sZWF2ZSgpO1xuICB0aGlzLmRyYWZ0cy5mb3JFYWNoKHJldm9rZSk7XG4gIHRoaXMuZHJhZnRzID0gbnVsbDsgLy8gTWFrZSBkcmFmdC1yZWxhdGVkIG1ldGhvZHMgdGhyb3cuXG59O1xuXG5JbW1lclNjb3BlLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uIGxlYXZlICgpIHtcbiAgaWYgKHRoaXMgPT09IEltbWVyU2NvcGUuY3VycmVudCkge1xuICAgIEltbWVyU2NvcGUuY3VycmVudCA9IHRoaXMucGFyZW50O1xuICB9XG59O1xuSW1tZXJTY29wZS5jdXJyZW50ID0gbnVsbDtcblxuSW1tZXJTY29wZS5lbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY3VycmVudCA9IG5ldyBJbW1lclNjb3BlKHRoaXMuY3VycmVudCk7XG59O1xuXG5mdW5jdGlvbiByZXZva2UoZHJhZnQpIHtcbiAgZHJhZnRbRFJBRlRfU1RBVEVdLnJldm9rZSgpO1xufVxuXG4vLyBidXQgc2hhcmUgdGhlbSBhbGwgaW5zdGVhZFxuXG52YXIgZGVzY3JpcHRvcnMgPSB7fTtcbmZ1bmN0aW9uIHdpbGxGaW5hbGl6ZShzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKSB7XG4gIHNjb3BlLmRyYWZ0cy5mb3JFYWNoKGZ1bmN0aW9uIChkcmFmdCkge1xuICAgIGRyYWZ0W0RSQUZUX1NUQVRFXS5maW5hbGl6aW5nID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFpc1JlcGxhY2VkKSB7XG4gICAgaWYgKHNjb3BlLnBhdGNoZXMpIHtcbiAgICAgIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoc2NvcGUuZHJhZnRzWzBdKTtcbiAgICB9IC8vIFRoaXMgaXMgZmFzdGVyIHdoZW4gd2UgZG9uJ3QgY2FyZSBhYm91dCB3aGljaCBhdHRyaWJ1dGVzIGNoYW5nZWQuXG5cblxuICAgIG1hcmtDaGFuZ2VzU3dlZXAoc2NvcGUuZHJhZnRzKTtcbiAgfSAvLyBXaGVuIGEgY2hpbGQgZHJhZnQgaXMgcmV0dXJuZWQsIGxvb2sgZm9yIGNoYW5nZXMuXG4gIGVsc2UgaWYgKGlzRHJhZnQocmVzdWx0KSAmJiByZXN1bHRbRFJBRlRfU1RBVEVdLnNjb3BlID09PSBzY29wZSkge1xuICAgICAgbWFya0NoYW5nZXNTd2VlcChzY29wZS5kcmFmdHMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KGJhc2UsIHBhcmVudCkge1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gIHZhciBkcmFmdCA9IGNsb25lUG90ZW50aWFsRHJhZnQoYmFzZSk7XG4gIGVhY2goZHJhZnQsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcHJveHlQcm9wZXJ0eShkcmFmdCwgcHJvcCwgaXNBcnJheSB8fCBpc0VudW1lcmFibGUoYmFzZSwgcHJvcCkpO1xuICB9KTsgLy8gU2VlIFwicHJveHkuanNcIiBmb3IgcHJvcGVydHkgZG9jdW1lbnRhdGlvbi5cblxuICB2YXIgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGUgOiBJbW1lclNjb3BlLmN1cnJlbnQ7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBzY29wZTogc2NvcGUsXG4gICAgbW9kaWZpZWQ6IGZhbHNlLFxuICAgIGZpbmFsaXppbmc6IGZhbHNlLFxuICAgIC8vIGVzNSBvbmx5XG4gICAgZmluYWxpemVkOiBmYWxzZSxcbiAgICBhc3NpZ25lZDoge30sXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgYmFzZTogYmFzZSxcbiAgICBkcmFmdDogZHJhZnQsXG4gICAgY29weTogbnVsbCxcbiAgICByZXZva2U6IHJldm9rZSQxLFxuICAgIHJldm9rZWQ6IGZhbHNlIC8vIGVzNSBvbmx5XG5cbiAgfTtcbiAgY3JlYXRlSGlkZGVuUHJvcGVydHkoZHJhZnQsIERSQUZUX1NUQVRFLCBzdGF0ZSk7XG4gIHNjb3BlLmRyYWZ0cy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG5mdW5jdGlvbiByZXZva2UkMSgpIHtcbiAgdGhpcy5yZXZva2VkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc291cmNlKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3B5IHx8IHN0YXRlLmJhc2U7XG59IC8vIEFjY2VzcyBhIHByb3BlcnR5IHdpdGhvdXQgY3JlYXRpbmcgYW4gSW1tZXIgZHJhZnQuXG5cblxuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICB2YXIgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG5cbiAgaWYgKHN0YXRlICYmICFzdGF0ZS5maW5hbGl6aW5nKSB7XG4gICAgc3RhdGUuZmluYWxpemluZyA9IHRydWU7XG4gICAgdmFyIHZhbHVlID0gZHJhZnRbcHJvcF07XG4gICAgc3RhdGUuZmluYWxpemluZyA9IGZhbHNlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBkcmFmdFtwcm9wXTtcbn1cblxuZnVuY3Rpb24gZ2V0KHN0YXRlLCBwcm9wKSB7XG4gIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gIHZhciB2YWx1ZSA9IHBlZWsoc291cmNlKHN0YXRlKSwgcHJvcCk7XG4gIGlmIChzdGF0ZS5maW5hbGl6aW5nKSB7IHJldHVybiB2YWx1ZTsgfSAvLyBDcmVhdGUgYSBkcmFmdCBpZiB0aGUgdmFsdWUgaXMgdW5tb2RpZmllZC5cblxuICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZSwgcHJvcCkgJiYgaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZS5jb3B5W3Byb3BdID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICBzdGF0ZS5hc3NpZ25lZFtwcm9wXSA9IHRydWU7XG5cbiAgaWYgKCFzdGF0ZS5tb2RpZmllZCkge1xuICAgIGlmIChpcyh2YWx1ZSwgcGVlayhzb3VyY2Uoc3RhdGUpLCBwcm9wKSkpIHsgcmV0dXJuOyB9XG4gICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRlLmNvcHlbcHJvcF0gPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZCkge1xuICAgIHN0YXRlLm1vZGlmaWVkID0gdHJ1ZTtcbiAgICBpZiAoc3RhdGUucGFyZW50KSB7IG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudCk7IH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHkpIHsgc3RhdGUuY29weSA9IGNsb25lUG90ZW50aWFsRHJhZnQoc3RhdGUuYmFzZSk7IH1cbn1cblxuZnVuY3Rpb24gY2xvbmVQb3RlbnRpYWxEcmFmdChiYXNlKSB7XG4gIHZhciBzdGF0ZSA9IGJhc2UgJiYgYmFzZVtEUkFGVF9TVEFURV07XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZmluYWxpemluZyA9IHRydWU7XG4gICAgdmFyIGRyYWZ0ID0gc2hhbGxvd0NvcHkoc3RhdGUuZHJhZnQsIHRydWUpO1xuICAgIHN0YXRlLmZpbmFsaXppbmcgPSBmYWxzZTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH1cblxuICByZXR1cm4gc2hhbGxvd0NvcHkoYmFzZSk7XG59XG5cbmZ1bmN0aW9uIHByb3h5UHJvcGVydHkoZHJhZnQsIHByb3AsIGVudW1lcmFibGUpIHtcbiAgdmFyIGRlc2MgPSBkZXNjcmlwdG9yc1twcm9wXTtcblxuICBpZiAoZGVzYykge1xuICAgIGRlc2MuZW51bWVyYWJsZSA9IGVudW1lcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRvcnNbcHJvcF0gPSBkZXNjID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZW51bWVyYWJsZSxcblxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzW0RSQUZUX1NUQVRFXSwgcHJvcCk7XG4gICAgICB9LFxuXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQxKHZhbHVlKSB7XG4gICAgICAgIHNldCh0aGlzW0RSQUZUX1NUQVRFXSwgcHJvcCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkcmFmdCwgcHJvcCwgZGVzYyk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZSkge1xuICBpZiAoc3RhdGUucmV2b2tlZCA9PT0gdHJ1ZSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICsgSlNPTi5zdHJpbmdpZnkoc291cmNlKHN0YXRlKSkpOyB9XG59IC8vIFRoaXMgbG9va3MgZXhwZW5zaXZlLCBidXQgb25seSBwcm94aWVzIGFyZSB2aXNpdGVkLCBhbmQgb25seSBvYmplY3RzIHdpdGhvdXQga25vd24gY2hhbmdlcyBhcmUgc2Nhbm5lZC5cblxuXG5mdW5jdGlvbiBtYXJrQ2hhbmdlc1N3ZWVwKGRyYWZ0cykge1xuICAvLyBUaGUgbmF0dXJhbCBvcmRlciBvZiBkcmFmdHMgaW4gdGhlIGBzY29wZWAgYXJyYXkgaXMgYmFzZWQgb24gd2hlbiB0aGV5XG4gIC8vIHdlcmUgYWNjZXNzZWQuIEJ5IHByb2Nlc3NpbmcgZHJhZnRzIGluIHJldmVyc2UgbmF0dXJhbCBvcmRlciwgd2UgaGF2ZSBhXG4gIC8vIGJldHRlciBjaGFuY2Ugb2YgcHJvY2Vzc2luZyBsZWFmIG5vZGVzIGZpcnN0LiBXaGVuIGEgbGVhZiBub2RlIGlzIGtub3duIHRvXG4gIC8vIGhhdmUgY2hhbmdlZCwgd2UgY2FuIGF2b2lkIGFueSB0cmF2ZXJzYWwgb2YgaXRzIGFuY2VzdG9yIG5vZGVzLlxuICBmb3IgKHZhciBpID0gZHJhZnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHN0YXRlID0gZHJhZnRzW2ldW0RSQUZUX1NUQVRFXTtcblxuICAgIGlmICghc3RhdGUubW9kaWZpZWQpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlLmJhc2UpKSB7XG4gICAgICAgIGlmIChoYXNBcnJheUNoYW5nZXMoc3RhdGUpKSB7IG1hcmtDaGFuZ2VkKHN0YXRlKTsgfVxuICAgICAgfSBlbHNlIGlmIChoYXNPYmplY3RDaGFuZ2VzKHN0YXRlKSkgeyBtYXJrQ2hhbmdlZChzdGF0ZSk7IH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0NoYW5nZXNSZWN1cnNpdmVseShvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIikgeyByZXR1cm47IH1cbiAgdmFyIHN0YXRlID0gb2JqZWN0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKCFzdGF0ZSkgeyByZXR1cm47IH1cbiAgdmFyIGJhc2UgPSBzdGF0ZS5iYXNlO1xuICB2YXIgZHJhZnQgPSBzdGF0ZS5kcmFmdDtcbiAgdmFyIGFzc2lnbmVkID0gc3RhdGUuYXNzaWduZWQ7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAvLyBMb29rIGZvciBhZGRlZCBrZXlzLlxuICAgIE9iamVjdC5rZXlzKGRyYWZ0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG4gICAgICBpZiAoYmFzZVtrZXldID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlLCBrZXkpKSB7XG4gICAgICAgIGFzc2lnbmVkW2tleV0gPSB0cnVlO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFhc3NpZ25lZFtrZXldKSB7XG4gICAgICAgIC8vIE9ubHkgdW50b3VjaGVkIHByb3BlcnRpZXMgdHJpZ2dlciByZWN1cnNpb24uXG4gICAgICAgIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoZHJhZnRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7IC8vIExvb2sgZm9yIHJlbW92ZWQga2V5cy5cblxuICAgIE9iamVjdC5rZXlzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cbiAgICAgIGlmIChkcmFmdFtrZXldID09PSB1bmRlZmluZWQgJiYgIWhhcyhkcmFmdCwga2V5KSkge1xuICAgICAgICBhc3NpZ25lZFtrZXldID0gZmFsc2U7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChoYXNBcnJheUNoYW5nZXMoc3RhdGUpKSB7XG4gICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIGFzc2lnbmVkLmxlbmd0aCA9IHRydWU7XG5cbiAgICBpZiAoZHJhZnQubGVuZ3RoIDwgYmFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSBkcmFmdC5sZW5ndGg7IGkgPCBiYXNlLmxlbmd0aDsgaSsrKSB7IGFzc2lnbmVkW2ldID0gZmFsc2U7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gYmFzZS5sZW5ndGg7IGkkMSA8IGRyYWZ0Lmxlbmd0aDsgaSQxKyspIHsgYXNzaWduZWRbaSQxXSA9IHRydWU7IH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpJDIgPSAwOyBpJDIgPCBkcmFmdC5sZW5ndGg7IGkkMisrKSB7XG4gICAgICAvLyBPbmx5IHVudG91Y2hlZCBpbmRpY2VzIHRyaWdnZXIgcmVjdXJzaW9uLlxuICAgICAgaWYgKGFzc2lnbmVkW2kkMl0gPT09IHVuZGVmaW5lZCkgeyBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KGRyYWZ0W2kkMl0pOyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc09iamVjdENoYW5nZXMoc3RhdGUpIHtcbiAgdmFyIGJhc2UgPSBzdGF0ZS5iYXNlO1xuICB2YXIgZHJhZnQgPSBzdGF0ZS5kcmFmdDsgLy8gU2VhcmNoIGZvciBhZGRlZCBrZXlzIGFuZCBjaGFuZ2VkIGtleXMuIFN0YXJ0IGF0IHRoZSBiYWNrLCBiZWNhdXNlXG4gIC8vIG5vbi1udW1lcmljIGtleXMgYXJlIG9yZGVyZWQgYnkgdGltZSBvZiBkZWZpbml0aW9uIG9uIHRoZSBvYmplY3QuXG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkcmFmdCk7XG5cbiAgZm9yICh2YXIgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYmFzZVZhbHVlID0gYmFzZVtrZXldOyAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXG4gICAgaWYgKGJhc2VWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICFoYXMoYmFzZSwga2V5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBPbmNlIGEgYmFzZSBrZXkgaXMgZGVsZXRlZCwgZnV0dXJlIGNoYW5nZXMgZ28gdW5kZXRlY3RlZCwgYmVjYXVzZSBpdHNcbiAgICAvLyBkZXNjcmlwdG9yIGlzIGVyYXNlZC4gVGhpcyBicmFuY2ggZGV0ZWN0cyBhbnkgbWlzc2VkIGNoYW5nZXMuXG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRyYWZ0W2tleV07XG4gICAgICAgIHZhciBzdGF0ZSQxID0gdmFsdWUgJiYgdmFsdWVbRFJBRlRfU1RBVEVdO1xuXG4gICAgICAgIGlmIChzdGF0ZSQxID8gc3RhdGUkMS5iYXNlICE9PSBiYXNlVmFsdWUgOiAhaXModmFsdWUsIGJhc2VWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9IC8vIEF0IHRoaXMgcG9pbnQsIG5vIGtleXMgd2VyZSBhZGRlZCBvciBjaGFuZ2VkLlxuICAvLyBDb21wYXJlIGtleSBjb3VudCB0byBkZXRlcm1pbmUgaWYga2V5cyB3ZXJlIGRlbGV0ZWQuXG5cblxuICByZXR1cm4ga2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGJhc2UpLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSB7XG4gIHZhciBkcmFmdCA9IHN0YXRlLmRyYWZ0O1xuICBpZiAoZHJhZnQubGVuZ3RoICE9PSBzdGF0ZS5iYXNlLmxlbmd0aCkgeyByZXR1cm4gdHJ1ZTsgfSAvLyBTZWUgIzExNlxuICAvLyBJZiB3ZSBmaXJzdCBzaG9ydGVuIHRoZSBsZW5ndGgsIG91ciBhcnJheSBpbnRlcmNlcHRvcnMgd2lsbCBiZSByZW1vdmVkLlxuICAvLyBJZiBhZnRlciB0aGF0IG5ldyBpdGVtcyBhcmUgYWRkZWQsIHJlc3VsdCBpbiB0aGUgc2FtZSBvcmlnaW5hbCBsZW5ndGgsXG4gIC8vIHRob3NlIGxhc3QgaXRlbXMgd2lsbCBoYXZlIG5vIGludGVyY2VwdGluZyBwcm9wZXJ0eS5cbiAgLy8gU28gaWYgdGhlcmUgaXMgbm8gb3duIGRlc2NyaXB0b3Igb24gdGhlIGxhc3QgcG9zaXRpb24sIHdlIGtub3cgdGhhdCBpdGVtcyB3ZXJlIHJlbW92ZWQgYW5kIGFkZGVkXG4gIC8vIE4uQi46IHNwbGljZSwgdW5zaGlmdCwgZXRjIG9ubHkgc2hpZnQgdmFsdWVzIGFyb3VuZCwgYnV0IG5vdCBwcm9wIGRlc2NyaXB0b3JzLCBzbyB3ZSBvbmx5IGhhdmUgdG8gY2hlY2tcbiAgLy8gdGhlIGxhc3Qgb25lXG5cbiAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRyYWZ0LCBkcmFmdC5sZW5ndGggLSAxKTsgLy8gZGVzY3JpcHRvciBjYW4gYmUgbnVsbCwgYnV0IG9ubHkgZm9yIG5ld2x5IGNyZWF0ZWQgc3BhcnNlIGFycmF5cywgZWcuIG5ldyBBcnJheSgxMClcblxuICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5nZXQpIHsgcmV0dXJuIHRydWU7IH0gLy8gRm9yIGFsbCBvdGhlciBjYXNlcywgd2UgZG9uJ3QgaGF2ZSB0byBjb21wYXJlLCBhcyB0aGV5IHdvdWxkIGhhdmUgYmVlbiBwaWNrZWQgdXAgYnkgdGhlIGluZGV4IHNldHRlcnNcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpZGRlblByb3BlcnR5KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KTtcbn1cblxudmFyIGxlZ2FjeVByb3h5ID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIHdpbGxGaW5hbGl6ZTogd2lsbEZpbmFsaXplLFxuICAgIGNyZWF0ZVByb3h5OiBjcmVhdGVQcm94eVxufSk7XG5cbmZ1bmN0aW9uIHdpbGxGaW5hbGl6ZSQxKCkge31cbmZ1bmN0aW9uIGNyZWF0ZVByb3h5JDEoYmFzZSwgcGFyZW50KSB7XG4gIHZhciBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZSA6IEltbWVyU2NvcGUuY3VycmVudDtcbiAgdmFyIHN0YXRlID0ge1xuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZTogc2NvcGUsXG4gICAgLy8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG4gICAgbW9kaWZpZWQ6IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWQ6IGZhbHNlLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGFzc2lnbmVkICh0cnVlKSBvciBkZWxldGVkIChmYWxzZSkuXG4gICAgYXNzaWduZWQ6IHt9LFxuICAgIC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZTogYmFzZSxcbiAgICAvLyBUaGUgYmFzZSBwcm94eS5cbiAgICBkcmFmdDogbnVsbCxcbiAgICAvLyBBbnkgcHJvcGVydHkgcHJveGllcy5cbiAgICBkcmFmdHM6IHt9LFxuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weTogbnVsbCxcbiAgICAvLyBDYWxsZWQgYnkgdGhlIGBwcm9kdWNlYCBmdW5jdGlvbi5cbiAgICByZXZva2U6IG51bGxcbiAgfTtcbiAgdmFyIHJlZiA9IEFycmF5LmlzQXJyYXkoYmFzZSkgPyAvLyBbc3RhdGVdIGlzIHVzZWQgZm9yIGFycmF5cywgdG8gbWFrZSBzdXJlIHRoZSBwcm94eSBpcyBhcnJheS1pc2ggYW5kIG5vdCB2aW9sYXRlIGludmFyaWFudHMsXG4gIC8vIGFsdGhvdWdoIHN0YXRlIGl0c2VsZiBpcyBhbiBvYmplY3RcbiAgUHJveHkucmV2b2NhYmxlKFtzdGF0ZV0sIGFycmF5VHJhcHMpIDogUHJveHkucmV2b2NhYmxlKHN0YXRlLCBvYmplY3RUcmFwcyk7XG4gIHZhciByZXZva2UgPSByZWYucmV2b2tlO1xuICB2YXIgcHJveHkgPSByZWYucHJveHk7XG4gIHN0YXRlLmRyYWZ0ID0gcHJveHk7XG4gIHN0YXRlLnJldm9rZSA9IHJldm9rZTtcbiAgc2NvcGUuZHJhZnRzLnB1c2gocHJveHkpO1xuICByZXR1cm4gcHJveHk7XG59XG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldDogZ2V0JDEsXG5cbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgaW4gc291cmNlJDEodGFyZ2V0KTtcbiAgfSxcblxuICBvd25LZXlzOiBmdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoc291cmNlJDEodGFyZ2V0KSk7XG4gIH0sXG5cbiAgc2V0OiBzZXQkMSxcbiAgZGVsZXRlUHJvcGVydHk6IGRlbGV0ZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblxuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICB9LFxuXG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldC5iYXNlKTtcbiAgfSxcblxuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICB9XG5cbn07XG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgZnVuY3Rpb24gKGtleSwgZm4pIHtcbiAgYXJyYXlUcmFwc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXVswXTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0pO1xuXG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24gKHN0YXRlLCBwcm9wKSB7XG4gIGlmIChpc05hTihwYXJzZUludChwcm9wKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICB9XG5cbiAgcmV0dXJuIG9iamVjdFRyYXBzLmRlbGV0ZVByb3BlcnR5LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3ApO1xufTtcblxuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbiAoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmIChwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICB9XG5cbiAgcmV0dXJuIG9iamVjdFRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wLCB2YWx1ZSk7XG59OyAvLyByZXR1cm5zIHRoZSBvYmplY3Qgd2Ugc2hvdWxkIGJlIHJlYWRpbmcgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSwgd2hpY2ggaXMgYmFzZSwgdW50aWwgc29tZSBjaGFuZ2UgaGFzIGJlZW4gbWFkZVxuXG5cbmZ1bmN0aW9uIHNvdXJjZSQxKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3B5IHx8IHN0YXRlLmJhc2U7XG59IC8vIEFjY2VzcyBhIHByb3BlcnR5IHdpdGhvdXQgY3JlYXRpbmcgYW4gSW1tZXIgZHJhZnQuXG5cblxuZnVuY3Rpb24gcGVlayQxKGRyYWZ0LCBwcm9wKSB7XG4gIHZhciBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgdmFyIGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSA/IHNvdXJjZSQxKHN0YXRlKSA6IGRyYWZ0LCBwcm9wKTtcbiAgcmV0dXJuIGRlc2MgJiYgZGVzYy52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0JDEoc3RhdGUsIHByb3ApIHtcbiAgaWYgKHByb3AgPT09IERSQUZUX1NUQVRFKSB7IHJldHVybiBzdGF0ZTsgfVxuICB2YXIgZHJhZnRzID0gc3RhdGUuZHJhZnRzOyAvLyBDaGVjayBmb3IgZXhpc3RpbmcgZHJhZnQgaW4gdW5tb2RpZmllZCBzdGF0ZS5cblxuICBpZiAoIXN0YXRlLm1vZGlmaWVkICYmIGhhcyhkcmFmdHMsIHByb3ApKSB7XG4gICAgcmV0dXJuIGRyYWZ0c1twcm9wXTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHNvdXJjZSQxKHN0YXRlKVtwcm9wXTtcblxuICBpZiAoc3RhdGUuZmluYWxpemVkIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIGRyYWZ0IGluIG1vZGlmaWVkIHN0YXRlLlxuXG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVkKSB7XG4gICAgLy8gQXNzaWduZWQgdmFsdWVzIGFyZSBuZXZlciBkcmFmdGVkLiBUaGlzIGNhdGNoZXMgYW55IGRyYWZ0cyB3ZSBjcmVhdGVkLCB0b28uXG4gICAgaWYgKHZhbHVlICE9PSBwZWVrJDEoc3RhdGUuYmFzZSwgcHJvcCkpIHsgcmV0dXJuIHZhbHVlOyB9IC8vIFN0b3JlIGRyYWZ0cyBvbiB0aGUgY29weSAod2hlbiBvbmUgZXhpc3RzKS5cblxuICAgIGRyYWZ0cyA9IHN0YXRlLmNvcHk7XG4gIH1cblxuICByZXR1cm4gZHJhZnRzW3Byb3BdID0gY3JlYXRlUHJveHkkMSh2YWx1ZSwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXQkMShzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZCkge1xuICAgIHZhciBiYXNlVmFsdWUgPSBwZWVrJDEoc3RhdGUuYmFzZSwgcHJvcCk7IC8vIE9wdGltaXplIGJhc2VkIG9uIHZhbHVlJ3MgdHJ1dGhpbmVzcy4gVHJ1dGh5IHZhbHVlcyBhcmUgZ3VhcmFudGVlZCB0b1xuICAgIC8vIG5ldmVyIGJlIHVuZGVmaW5lZCwgc28gd2UgY2FuIGF2b2lkIHRoZSBgaW5gIG9wZXJhdG9yLiBMYXN0bHksIHRydXRoeVxuICAgIC8vIHZhbHVlcyBtYXkgYmUgZHJhZnRzLCBidXQgZmFsc3kgdmFsdWVzIGFyZSBuZXZlciBkcmFmdHMuXG5cbiAgICB2YXIgaXNVbmNoYW5nZWQgPSB2YWx1ZSA/IGlzKGJhc2VWYWx1ZSwgdmFsdWUpIHx8IHZhbHVlID09PSBzdGF0ZS5kcmFmdHNbcHJvcF0gOiBpcyhiYXNlVmFsdWUsIHZhbHVlKSAmJiBwcm9wIGluIHN0YXRlLmJhc2U7XG4gICAgaWYgKGlzVW5jaGFuZ2VkKSB7IHJldHVybiB0cnVlOyB9XG4gICAgbWFya0NoYW5nZWQkMShzdGF0ZSk7XG4gIH1cblxuICBzdGF0ZS5hc3NpZ25lZFtwcm9wXSA9IHRydWU7XG4gIHN0YXRlLmNvcHlbcHJvcF0gPSB2YWx1ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wKSB7XG4gIC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG4gIGlmIChwZWVrJDEoc3RhdGUuYmFzZSwgcHJvcCkgIT09IHVuZGVmaW5lZCB8fCBwcm9wIGluIHN0YXRlLmJhc2UpIHtcbiAgICBzdGF0ZS5hc3NpZ25lZFtwcm9wXSA9IGZhbHNlO1xuICAgIG1hcmtDaGFuZ2VkJDEoc3RhdGUpO1xuICB9XG5cbiAgaWYgKHN0YXRlLmNvcHkpIHsgZGVsZXRlIHN0YXRlLmNvcHlbcHJvcF07IH1cbiAgcmV0dXJuIHRydWU7XG59IC8vIE5vdGU6IFdlIG5ldmVyIGNvZXJjZSBgZGVzYy52YWx1ZWAgaW50byBhbiBJbW1lciBkcmFmdCwgYmVjYXVzZSB3ZSBjYW4ndCBtYWtlXG4vLyB0aGUgc2FtZSBndWFyYW50ZWUgaW4gRVM1IG1vZGUuXG5cblxuZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHN0YXRlLCBwcm9wKSB7XG4gIHZhciBvd25lciA9IHNvdXJjZSQxKHN0YXRlKTtcbiAgdmFyIGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG5cbiAgaWYgKGRlc2MpIHtcbiAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICFBcnJheS5pc0FycmF5KG93bmVyKSB8fCBwcm9wICE9PSBcImxlbmd0aFwiO1xuICB9XG5cbiAgcmV0dXJuIGRlc2M7XG59XG5cbmZ1bmN0aW9uIG1hcmtDaGFuZ2VkJDEoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZCkge1xuICAgIHN0YXRlLm1vZGlmaWVkID0gdHJ1ZTtcbiAgICBzdGF0ZS5jb3B5ID0gYXNzaWduKHNoYWxsb3dDb3B5KHN0YXRlLmJhc2UpLCBzdGF0ZS5kcmFmdHMpO1xuICAgIHN0YXRlLmRyYWZ0cyA9IG51bGw7XG4gICAgaWYgKHN0YXRlLnBhcmVudCkgeyBtYXJrQ2hhbmdlZCQxKHN0YXRlLnBhcmVudCk7IH1cbiAgfVxufVxuXG52YXIgbW9kZXJuUHJveHkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgd2lsbEZpbmFsaXplOiB3aWxsRmluYWxpemUkMSxcbiAgICBjcmVhdGVQcm94eTogY3JlYXRlUHJveHkkMVxufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gIEFycmF5LmlzQXJyYXkoc3RhdGUuYmFzZSkgPyBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSA6IGdlbmVyYXRlT2JqZWN0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICB2YXIgYXNzaWduLCBhc3NpZ24kMTtcblxuICB2YXIgYmFzZSA9IHN0YXRlLmJhc2U7XG4gIHZhciBjb3B5ID0gc3RhdGUuY29weTtcbiAgdmFyIGFzc2lnbmVkID0gc3RhdGUuYXNzaWduZWQ7IC8vIFJlZHVjZSBjb21wbGV4aXR5IGJ5IGVuc3VyaW5nIGBiYXNlYCBpcyBuZXZlciBsb25nZXIuXG5cbiAgaWYgKGNvcHkubGVuZ3RoIDwgYmFzZS5sZW5ndGgpIHtcbiAgICAoYXNzaWduID0gW2NvcHksIGJhc2VdLCBiYXNlID0gYXNzaWduWzBdLCBjb3B5ID0gYXNzaWduWzFdKTtcbiAgICAoYXNzaWduJDEgPSBbaW52ZXJzZVBhdGNoZXMsIHBhdGNoZXNdLCBwYXRjaGVzID0gYXNzaWduJDFbMF0sIGludmVyc2VQYXRjaGVzID0gYXNzaWduJDFbMV0pO1xuICB9XG5cbiAgdmFyIGRlbHRhID0gY29weS5sZW5ndGggLSBiYXNlLmxlbmd0aDsgLy8gRmluZCB0aGUgZmlyc3QgcmVwbGFjZWQgaW5kZXguXG5cbiAgdmFyIHN0YXJ0ID0gMDtcblxuICB3aGlsZSAoYmFzZVtzdGFydF0gPT09IGNvcHlbc3RhcnRdICYmIHN0YXJ0IDwgYmFzZS5sZW5ndGgpIHtcbiAgICArK3N0YXJ0O1xuICB9IC8vIEZpbmQgdGhlIGxhc3QgcmVwbGFjZWQgaW5kZXguIFNlYXJjaCBmcm9tIHRoZSBlbmQgdG8gb3B0aW1pemUgc3BsaWNlIHBhdGNoZXMuXG5cblxuICB2YXIgZW5kID0gYmFzZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0ICYmIGJhc2VbZW5kIC0gMV0gPT09IGNvcHlbZW5kICsgZGVsdGEgLSAxXSkge1xuICAgIC0tZW5kO1xuICB9IC8vIFByb2Nlc3MgcmVwbGFjZWQgaW5kaWNlcy5cblxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgaWYgKGFzc2lnbmVkW2ldICYmIGNvcHlbaV0gIT09IGJhc2VbaV0pIHtcbiAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogXCJyZXBsYWNlXCIsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiBjb3B5W2ldXG4gICAgICB9KTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogXCJyZXBsYWNlXCIsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiBiYXNlW2ldXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdXNlUmVtb3ZlID0gZW5kICE9IGJhc2UubGVuZ3RoO1xuICB2YXIgcmVwbGFjZUNvdW50ID0gcGF0Y2hlcy5sZW5ndGg7IC8vIFByb2Nlc3MgYWRkZWQgaW5kaWNlcy5cblxuICBmb3IgKHZhciBpJDEgPSBlbmQgKyBkZWx0YSAtIDE7IGkkMSA+PSBlbmQ7IC0taSQxKSB7XG4gICAgdmFyIHBhdGgkMSA9IGJhc2VQYXRoLmNvbmNhdChbaSQxXSk7XG4gICAgcGF0Y2hlc1tyZXBsYWNlQ291bnQgKyBpJDEgLSBlbmRdID0ge1xuICAgICAgb3A6IFwiYWRkXCIsXG4gICAgICBwYXRoOiBwYXRoJDEsXG4gICAgICB2YWx1ZTogY29weVtpJDFdXG4gICAgfTtcblxuICAgIGlmICh1c2VSZW1vdmUpIHtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogXCJyZW1vdmVcIixcbiAgICAgICAgcGF0aDogcGF0aCQxXG4gICAgICB9KTtcbiAgICB9XG4gIH0gLy8gT25lIFwicmVwbGFjZVwiIHBhdGNoIHJldmVyc2VzIGFsbCBub24tc3BsaWNpbmcgXCJhZGRcIiBwYXRjaGVzLlxuXG5cbiAgaWYgKCF1c2VSZW1vdmUpIHtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBcInJlcGxhY2VcIixcbiAgICAgIHBhdGg6IGJhc2VQYXRoLmNvbmNhdChbXCJsZW5ndGhcIl0pLFxuICAgICAgdmFsdWU6IGJhc2UubGVuZ3RoXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPYmplY3RQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgdmFyIGJhc2UgPSBzdGF0ZS5iYXNlO1xuICB2YXIgY29weSA9IHN0YXRlLmNvcHk7XG4gIGVhY2goc3RhdGUuYXNzaWduZWQsIGZ1bmN0aW9uIChrZXksIGFzc2lnbmVkVmFsdWUpIHtcbiAgICB2YXIgb3JpZ1ZhbHVlID0gYmFzZVtrZXldO1xuICAgIHZhciB2YWx1ZSA9IGNvcHlba2V5XTtcbiAgICB2YXIgb3AgPSAhYXNzaWduZWRWYWx1ZSA/IFwicmVtb3ZlXCIgOiBrZXkgaW4gYmFzZSA/IFwicmVwbGFjZVwiIDogXCJhZGRcIjtcbiAgICBpZiAob3JpZ1ZhbHVlID09PSB2YWx1ZSAmJiBvcCA9PT0gXCJyZXBsYWNlXCIpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHBhdGggPSBiYXNlUGF0aC5jb25jYXQoa2V5KTtcbiAgICBwYXRjaGVzLnB1c2gob3AgPT09IFwicmVtb3ZlXCIgPyB7XG4gICAgICBvcDogb3AsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfSA6IHtcbiAgICAgIG9wOiBvcCxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKG9wID09PSBcImFkZFwiID8ge1xuICAgICAgb3A6IFwicmVtb3ZlXCIsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfSA6IG9wID09PSBcInJlbW92ZVwiID8ge1xuICAgICAgb3A6IFwiYWRkXCIsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgdmFsdWU6IG9yaWdWYWx1ZVxuICAgIH0gOiB7XG4gICAgICBvcDogXCJyZXBsYWNlXCIsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgdmFsdWU6IG9yaWdWYWx1ZVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlQYXRjaGVzKGRyYWZ0LCBwYXRjaGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXRjaCA9IHBhdGNoZXNbaV07XG4gICAgdmFyIHBhdGggPSBwYXRjaC5wYXRoO1xuXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgZHJhZnQgPSBwYXRjaC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJhc2UgPSBkcmFmdDtcblxuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcGF0aC5sZW5ndGggLSAxOyBpJDErKykge1xuICAgICAgICBiYXNlID0gYmFzZVtwYXRoW2kkMV1dO1xuICAgICAgICBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoLmpvaW4oXCIvXCIpKTsgfSAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIH1cblxuICAgICAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgICAgc3dpdGNoIChwYXRjaC5vcCkge1xuICAgICAgICBjYXNlIFwicmVwbGFjZVwiOlxuICAgICAgICAgIGJhc2Vba2V5XSA9IHBhdGNoLnZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBcImZvby8tXCIgcGF0aHMgZm9yIGFwcGVuZGluZyB0byBhbiBhcnJheVxuICAgICAgICAgICAgYmFzZS5zcGxpY2Uoa2V5LCAwLCBwYXRjaC52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2Vba2V5XSA9IHBhdGNoLnZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlKSkge1xuICAgICAgICAgICAgYmFzZS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGJhc2Vba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBwYXRjaC5vcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNaW5pZmllZCgpIHt9XG5cbnZhciBjb25maWdEZWZhdWx0cyA9IHtcbiAgdXNlUHJveGllczogdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiLFxuICBhdXRvRnJlZXplOiB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA6IHZlcmlmeU1pbmlmaWVkLm5hbWUgPT09IFwidmVyaWZ5TWluaWZpZWRcIixcbiAgb25Bc3NpZ246IG51bGwsXG4gIG9uRGVsZXRlOiBudWxsLFxuICBvbkNvcHk6IG51bGxcbn07XG52YXIgSW1tZXIgPSBmdW5jdGlvbiBJbW1lcihjb25maWcpIHtcbiAgYXNzaWduKHRoaXMsIGNvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xuICB0aGlzLnNldFVzZVByb3hpZXModGhpcy51c2VQcm94aWVzKTtcbiAgdGhpcy5wcm9kdWNlID0gdGhpcy5wcm9kdWNlLmJpbmQodGhpcyk7XG59O1xuXG5JbW1lci5wcm90b3R5cGUucHJvZHVjZSA9IGZ1bmN0aW9uIHByb2R1Y2UgKGJhc2UsIHJlY2lwZSwgcGF0Y2hMaXN0ZW5lcikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGN1cnJpZWQgaW52b2NhdGlvblxuICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgcmVjaXBlID0gYmFzZTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRQcm9kdWNlKGJhc2UpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgICAgIGlmICggYmFzZSA9PT0gdm9pZCAwICkgYmFzZSA9IGRlZmF1bHRCYXNlO1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICByZXR1cm4gc2VsZi5wcm9kdWNlKGJhc2UsIGZ1bmN0aW9uIChkcmFmdCkgeyByZXR1cm4gcmVjaXBlLmNhbGwuYXBwbHkocmVjaXBlLCBbIHRoaXMkMSwgZHJhZnQgXS5jb25jYXQoIGFyZ3MgKSk7IH0pOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICB9O1xuICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAge1xuICAgIGlmICh0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICB9XG4gIH1cbiAgdmFyIHJlc3VsdDsgLy8gT25seSBwbGFpbiBvYmplY3RzLCBhcnJheXMsIGFuZCBcImltbWVyYWJsZSBjbGFzc2VzXCIgYXJlIGRyYWZ0ZWQuXG5cbiAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgdmFyIHNjb3BlID0gSW1tZXJTY29wZS5lbnRlcigpO1xuICAgIHZhciBwcm94eSA9IHRoaXMuY3JlYXRlUHJveHkoYmFzZSk7XG4gICAgdmFyIGhhc0Vycm9yID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSByZWNpcGUocHJveHkpO1xuICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gZmluYWxseSBpbnN0ZWFkIG9mIGNhdGNoICsgcmV0aHJvdyBiZXR0ZXIgcHJlc2VydmVzIG9yaWdpbmFsIHN0YWNrXG4gICAgICBpZiAoaGFzRXJyb3IpIHsgc2NvcGUucmV2b2tlKCk7IH1lbHNlIHsgc2NvcGUubGVhdmUoKTsgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBzY29wZS51c2VQYXRjaGVzKHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcyQxLnByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgc2NvcGUucmV2b2tlKCk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2NvcGUudXNlUGF0Y2hlcyhwYXRjaExpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHJlY2lwZShiYXNlKTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIGJhc2U7IH1cbiAgICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG59O1xuXG5JbW1lci5wcm90b3R5cGUuY3JlYXRlRHJhZnQgPSBmdW5jdGlvbiBjcmVhdGVEcmFmdCAoYmFzZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiKTsgLy8gcHJldHRpZXItaWdub3JlXG4gIH1cblxuICB2YXIgc2NvcGUgPSBJbW1lclNjb3BlLmVudGVyKCk7XG4gIHZhciBwcm94eSA9IHRoaXMuY3JlYXRlUHJveHkoYmFzZSk7XG4gIHByb3h5W0RSQUZUX1NUQVRFXS5pc01hbnVhbCA9IHRydWU7XG4gIHNjb3BlLmxlYXZlKCk7XG4gIHJldHVybiBwcm94eTtcbn07XG5cbkltbWVyLnByb3RvdHlwZS5maW5pc2hEcmFmdCA9IGZ1bmN0aW9uIGZpbmlzaERyYWZ0IChkcmFmdCwgcGF0Y2hMaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG5cbiAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgfVxuXG4gIGlmIChzdGF0ZS5maW5hbGl6ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICB9XG5cbiAgdmFyIHNjb3BlID0gc3RhdGUuc2NvcGU7XG4gIHNjb3BlLnVzZVBhdGNoZXMocGF0Y2hMaXN0ZW5lcik7XG4gIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHQodW5kZWZpbmVkLCBzY29wZSk7XG59O1xuXG5JbW1lci5wcm90b3R5cGUuc2V0QXV0b0ZyZWV6ZSA9IGZ1bmN0aW9uIHNldEF1dG9GcmVlemUgKHZhbHVlKSB7XG4gIHRoaXMuYXV0b0ZyZWV6ZSA9IHZhbHVlO1xufTtcblxuSW1tZXIucHJvdG90eXBlLnNldFVzZVByb3hpZXMgPSBmdW5jdGlvbiBzZXRVc2VQcm94aWVzICh2YWx1ZSkge1xuICB0aGlzLnVzZVByb3hpZXMgPSB2YWx1ZTtcbiAgYXNzaWduKHRoaXMsIHZhbHVlID8gbW9kZXJuUHJveHkgOiBsZWdhY3lQcm94eSk7XG59O1xuXG5JbW1lci5wcm90b3R5cGUuYXBwbHlQYXRjaGVzID0gZnVuY3Rpb24gYXBwbHlQYXRjaGVzJDEgKGJhc2UsIHBhdGNoZXMpIHtcbiAgLy8gTXV0YXRlIHRoZSBiYXNlIHN0YXRlIHdoZW4gYSBkcmFmdCBpcyBwYXNzZWQuXG4gIGlmIChpc0RyYWZ0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKTtcbiAgfSAvLyBPdGhlcndpc2UsIHByb2R1Y2UgYSBjb3B5IG9mIHRoZSBiYXNlIHN0YXRlLlxuXG5cbiAgcmV0dXJuIHRoaXMucHJvZHVjZShiYXNlLCBmdW5jdGlvbiAoZHJhZnQpIHsgcmV0dXJuIGFwcGx5UGF0Y2hlcyhkcmFmdCwgcGF0Y2hlcyk7IH0pO1xufTtcbi8qKiBAaW50ZXJuYWwgKi9cblxuXG5JbW1lci5wcm90b3R5cGUucHJvY2Vzc1Jlc3VsdCA9IGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQgKHJlc3VsdCwgc2NvcGUpIHtcbiAgdmFyIGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c1swXTtcbiAgdmFyIGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdDtcbiAgdGhpcy53aWxsRmluYWxpemUoc2NvcGUsIHJlc3VsdCwgaXNSZXBsYWNlZCk7XG5cbiAgaWYgKGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5tb2RpZmllZCkge1xuICAgICAgc2NvcGUucmV2b2tlKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgfVxuXG4gICAgaWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcbiAgICAgIC8vIEZpbmFsaXplIHRoZSByZXN1bHQgaW4gY2FzZSBpdCBjb250YWlucyAob3IgaXMpIGEgc3Vic2V0IG9mIHRoZSBkcmFmdC5cbiAgICAgIHJlc3VsdCA9IHRoaXMuZmluYWxpemUocmVzdWx0LCBudWxsLCBzY29wZSk7XG4gICAgfVxuXG4gICAgaWYgKHNjb3BlLnBhdGNoZXMpIHtcbiAgICAgIHNjb3BlLnBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBcInJlcGxhY2VcIixcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHZhbHVlOiByZXN1bHRcbiAgICAgIH0pO1xuICAgICAgc2NvcGUuaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBcInJlcGxhY2VcIixcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHZhbHVlOiBiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5hbGl6ZSB0aGUgYmFzZSBkcmFmdC5cbiAgICByZXN1bHQgPSB0aGlzLmZpbmFsaXplKGJhc2VEcmFmdCwgW10sIHNjb3BlKTtcbiAgfVxuXG4gIHNjb3BlLnJldm9rZSgpO1xuXG4gIGlmIChzY29wZS5wYXRjaGVzKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcihzY29wZS5wYXRjaGVzLCBzY29wZS5pbnZlcnNlUGF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkO1xufTtcbi8qKlxuICogQGludGVybmFsXG4gKiBGaW5hbGl6ZSBhIGRyYWZ0LCByZXR1cm5pbmcgZWl0aGVyIHRoZSB1bm1vZGlmaWVkIGJhc2Ugc3RhdGUgb3IgYSBtb2RpZmllZFxuICogY29weSBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAqL1xuXG5cbkltbWVyLnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uIGZpbmFsaXplIChkcmFmdCwgcGF0aCwgc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIGlmIChPYmplY3QuaXNGcm96ZW4oZHJhZnQpKSB7IHJldHVybiBkcmFmdDsgfVxuICAgIHJldHVybiB0aGlzLmZpbmFsaXplVHJlZShkcmFmdCwgbnVsbCwgc2NvcGUpO1xuICB9IC8vIE5ldmVyIGZpbmFsaXplIGRyYWZ0cyBvd25lZCBieSBhbm90aGVyIHNjb3BlLlxuXG5cbiAgaWYgKHN0YXRlLnNjb3BlICE9PSBzY29wZSkge1xuICAgIHJldHVybiBkcmFmdDtcbiAgfVxuXG4gIGlmICghc3RhdGUubW9kaWZpZWQpIHtcbiAgICByZXR1cm4gc3RhdGUuYmFzZTtcbiAgfVxuXG4gIGlmICghc3RhdGUuZmluYWxpemVkKSB7XG4gICAgc3RhdGUuZmluYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbmFsaXplVHJlZShzdGF0ZS5kcmFmdCwgcGF0aCwgc2NvcGUpO1xuXG4gICAgaWYgKHRoaXMub25EZWxldGUpIHtcbiAgICAgIC8vIFRoZSBgYXNzaWduZWRgIG9iamVjdCBpcyB1bnJlbGlhYmxlIHdpdGggRVM1IGRyYWZ0cy5cbiAgICAgIGlmICh0aGlzLnVzZVByb3hpZXMpIHtcbiAgICAgICAgdmFyIGFzc2lnbmVkID0gc3RhdGUuYXNzaWduZWQ7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBhc3NpZ25lZCkge1xuICAgICAgICAgIGlmICghYXNzaWduZWRbcHJvcF0pIHsgdGhpcy5vbkRlbGV0ZShzdGF0ZSwgcHJvcCk7IH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSBzdGF0ZS5iYXNlO1xuICAgICAgICAgIHZhciBjb3B5ID0gc3RhdGUuY29weTtcbiAgICAgICAgZWFjaChiYXNlLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIGlmICghaGFzKGNvcHksIHByb3ApKSB7IHRoaXMkMS5vbkRlbGV0ZShzdGF0ZSwgcHJvcCk7IH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25Db3B5KSB7XG4gICAgICB0aGlzLm9uQ29weShzdGF0ZSk7XG4gICAgfSAvLyBBdCB0aGlzIHBvaW50LCBhbGwgZGVzY2VuZGFudHMgb2YgYHN0YXRlLmNvcHlgIGhhdmUgYmVlbiBmaW5hbGl6ZWQsXG4gICAgLy8gc28gd2UgY2FuIGJlIHN1cmUgdGhhdCBgc2NvcGUuY2FuQXV0b0ZyZWV6ZWAgaXMgYWNjdXJhdGUuXG5cblxuICAgIGlmICh0aGlzLmF1dG9GcmVlemUgJiYgc2NvcGUuY2FuQXV0b0ZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShzdGF0ZS5jb3B5KTtcbiAgICB9XG5cbiAgICBpZiAocGF0aCAmJiBzY29wZS5wYXRjaGVzKSB7XG4gICAgICBnZW5lcmF0ZVBhdGNoZXMoc3RhdGUsIHBhdGgsIHNjb3BlLnBhdGNoZXMsIHNjb3BlLmludmVyc2VQYXRjaGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGUuY29weTtcbn07XG4vKipcbiAqIEBpbnRlcm5hbFxuICogRmluYWxpemUgYWxsIGRyYWZ0cyBpbiB0aGUgZ2l2ZW4gc3RhdGUgdHJlZS5cbiAqL1xuXG5cbkltbWVyLnByb3RvdHlwZS5maW5hbGl6ZVRyZWUgPSBmdW5jdGlvbiBmaW5hbGl6ZVRyZWUgKHJvb3QsIHJvb3RQYXRoLCBzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBzdGF0ZSA9IHJvb3RbRFJBRlRfU1RBVEVdO1xuXG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICghdGhpcy51c2VQcm94aWVzKSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGZpbmFsIGNvcHksIHdpdGggYWRkZWQga2V5cyBhbmQgd2l0aG91dCBkZWxldGVkIGtleXMuXG4gICAgICBzdGF0ZS5jb3B5ID0gc2hhbGxvd0NvcHkoc3RhdGUuZHJhZnQsIHRydWUpO1xuICAgIH1cblxuICAgIHJvb3QgPSBzdGF0ZS5jb3B5O1xuICB9XG5cbiAgdmFyIG5lZWRQYXRjaGVzID0gISFyb290UGF0aCAmJiAhIXNjb3BlLnBhdGNoZXM7XG5cbiAgdmFyIGZpbmFsaXplUHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcCwgdmFsdWUsIHBhcmVudCkge1xuICAgIGlmICh2YWx1ZSA9PT0gcGFyZW50KSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiKTtcbiAgICB9IC8vIEluIHRoZSBgZmluYWxpemVUcmVlYCBtZXRob2QsIG9ubHkgdGhlIGByb290YCBvYmplY3QgbWF5IGJlIGEgZHJhZnQuXG5cblxuICAgIHZhciBpc0RyYWZ0UHJvcCA9ICEhc3RhdGUgJiYgcGFyZW50ID09PSByb290O1xuXG4gICAgaWYgKGlzRHJhZnQodmFsdWUpKSB7XG4gICAgICB2YXIgcGF0aCA9IGlzRHJhZnRQcm9wICYmIG5lZWRQYXRjaGVzICYmICFzdGF0ZS5hc3NpZ25lZFtwcm9wXSA/IHJvb3RQYXRoLmNvbmNhdChwcm9wKSA6IG51bGw7IC8vIERyYWZ0cyBvd25lZCBieSBgc2NvcGVgIGFyZSBmaW5hbGl6ZWQgaGVyZS5cblxuICAgICAgdmFsdWUgPSB0aGlzJDEuZmluYWxpemUodmFsdWUsIHBhdGgsIHNjb3BlKTsgLy8gRHJhZnRzIGZyb20gYW5vdGhlciBzY29wZSBtdXN0IHByZXZlbnQgYXV0by1mcmVlemluZy5cblxuICAgICAgaWYgKGlzRHJhZnQodmFsdWUpKSB7XG4gICAgICAgIHNjb3BlLmNhbkF1dG9GcmVlemUgPSBmYWxzZTtcbiAgICAgIH0gLy8gUHJlc2VydmUgbm9uLWVudW1lcmFibGUgcHJvcGVydGllcy5cblxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQpIHx8IGlzRW51bWVyYWJsZShwYXJlbnQsIHByb3ApKSB7XG4gICAgICAgIHBhcmVudFtwcm9wXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcmVudCwgcHJvcCwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gVW5jaGFuZ2VkIGRyYWZ0cyBhcmUgbmV2ZXIgcGFzc2VkIHRvIHRoZSBgb25Bc3NpZ25gIGhvb2suXG5cblxuICAgICAgaWYgKGlzRHJhZnRQcm9wICYmIHZhbHVlID09PSBzdGF0ZS5iYXNlW3Byb3BdKSB7IHJldHVybjsgfVxuICAgIH0gLy8gVW5jaGFuZ2VkIGRyYWZ0IHByb3BlcnRpZXMgYXJlIGlnbm9yZWQuXG4gICAgZWxzZSBpZiAoaXNEcmFmdFByb3AgJiYgaXModmFsdWUsIHN0YXRlLmJhc2VbcHJvcF0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gU2VhcmNoIG5ldyBvYmplY3RzIGZvciB1bmZpbmFsaXplZCBkcmFmdHMuIEZyb3plbiBvYmplY3RzIHNob3VsZCBuZXZlciBjb250YWluIGRyYWZ0cy5cbiAgICAgIGVsc2UgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSAmJiAhT2JqZWN0LmlzRnJvemVuKHZhbHVlKSkge1xuICAgICAgICAgIGVhY2godmFsdWUsIGZpbmFsaXplUHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICBpZiAoaXNEcmFmdFByb3AgJiYgdGhpcyQxLm9uQXNzaWduKSB7XG4gICAgICB0aGlzJDEub25Bc3NpZ24oc3RhdGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgZWFjaChyb290LCBmaW5hbGl6ZVByb3BlcnR5KTtcbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG52YXIgaW1tZXIgPSBuZXcgSW1tZXIoKTtcbi8qKlxuICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXG4gKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcbiAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cbiAqXG4gKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXG4gKlxuICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gKiBjb25zaWRlcmVkIHVuY29weWFibGUuXG4gKlxuICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZHVjZXIgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcbiAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICovXG5cbnZhciBwcm9kdWNlID0gaW1tZXIucHJvZHVjZTtcbi8qKlxuICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAqXG4gKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHNldEF1dG9GcmVlemUgPSBpbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xuLyoqXG4gKiBQYXNzIHRydWUgdG8gdXNlIHRoZSBFUzIwMTUgYFByb3h5YCBjbGFzcyB3aGVuIGNyZWF0aW5nIGRyYWZ0cywgd2hpY2ggaXNcbiAqIGFsd2F5cyBmYXN0ZXIgdGhhbiB1c2luZyBFUzUgcHJveGllcy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBmZWF0dXJlIGRldGVjdGlvbiBpcyB1c2VkLCBzbyBjYWxsaW5nIHRoaXMgaXMgcmFyZWx5IG5lY2Vzc2FyeS5cbiAqL1xuXG52YXIgc2V0VXNlUHJveGllcyA9IGltbWVyLnNldFVzZVByb3hpZXMuYmluZChpbW1lcik7XG4vKipcbiAqIEFwcGx5IGFuIGFycmF5IG9mIEltbWVyIHBhdGNoZXMgdG8gdGhlIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYSBwcm9kdWNlciwgd2hpY2ggbWVhbnMgY29weS1vbi13cml0ZSBpcyBpbiBlZmZlY3QuXG4gKi9cblxudmFyIGFwcGx5UGF0Y2hlcyQxID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xuLyoqXG4gKiBDcmVhdGUgYW4gSW1tZXIgZHJhZnQgZnJvbSB0aGUgZ2l2ZW4gYmFzZSBzdGF0ZSwgd2hpY2ggbWF5IGJlIGEgZHJhZnQgaXRzZWxmLlxuICogVGhlIGRyYWZ0IGNhbiBiZSBtb2RpZmllZCB1bnRpbCB5b3UgZmluYWxpemUgaXQgd2l0aCB0aGUgYGZpbmlzaERyYWZ0YCBmdW5jdGlvbi5cbiAqL1xuXG52YXIgY3JlYXRlRHJhZnQgPSBpbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbi8qKlxuICogRmluYWxpemUgYW4gSW1tZXIgZHJhZnQgZnJvbSBhIGBjcmVhdGVEcmFmdGAgY2FsbCwgcmV0dXJuaW5nIHRoZSBiYXNlIHN0YXRlXG4gKiAoaWYgbm8gY2hhbmdlcyB3ZXJlIG1hZGUpIG9yIGEgbW9kaWZpZWQgY29weS4gVGhlIGRyYWZ0IG11c3QgKm5vdCogYmVcbiAqIG11dGF0ZWQgYWZ0ZXJ3YXJkcy5cbiAqXG4gKiBQYXNzIGEgZnVuY3Rpb24gYXMgdGhlIDJuZCBhcmd1bWVudCB0byBnZW5lcmF0ZSBJbW1lciBwYXRjaGVzIGJhc2VkIG9uIHRoZVxuICogY2hhbmdlcyB0aGF0IHdlcmUgbWFkZS5cbiAqL1xuXG52YXIgZmluaXNoRHJhZnQgPSBpbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjZTtcbmV4cG9ydCB7IEltbWVyLCBhcHBseVBhdGNoZXMkMSBhcyBhcHBseVBhdGNoZXMsIGNyZWF0ZURyYWZ0LCBmaW5pc2hEcmFmdCwgRFJBRlRBQkxFIGFzIGltbWVyYWJsZSwgaXNEcmFmdCwgaXNEcmFmdGFibGUsIE5PVEhJTkcgYXMgbm90aGluZywgb3JpZ2luYWwsIHByb2R1Y2UsIHNldEF1dG9GcmVlemUsIHNldFVzZVByb3hpZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLm1vZHVsZS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=