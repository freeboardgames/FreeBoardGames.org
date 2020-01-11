(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.scheduler"],{

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.13.6
 * scheduler-tracing.development.js
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

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.
var enableSchedulerTracing = true;

// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var DEFAULT_THREAD_ID = 0;

// Counters used to generate unique IDs.
var interactionIDCounter = 0;
var threadIDCounter = 0;

// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
exports.__interactionsRef = null;

// Listener(s) to notify when interactions begin and end.
exports.__subscriberRef = null;

if (enableSchedulerTracing) {
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}

function unstable_clear(callback) {
  if (!enableSchedulerTracing) {
    return callback();
  }

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}

function unstable_getCurrent() {
  if (!enableSchedulerTracing) {
    return null;
  } else {
    return exports.__interactionsRef.current;
  }
}

function unstable_getThreadID() {
  return ++threadIDCounter;
}

function unstable_trace(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracing) {
    return callback();
  }

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };

  var prevInteractions = exports.__interactionsRef.current;

  // Traced interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.
  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;

  var subscriber = exports.__subscriberRef.current;
  var returnValue = void 0;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTraced(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--;

          // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.
          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}

function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracing) {
    return callback;
  }

  var wrappedInteractions = exports.__interactionsRef.current;

  var subscriber = exports.__subscriberRef.current;
  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  }

  // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.
  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });

  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;

    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue = void 0;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true;

        // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.
        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;
if (enableSchedulerTracing) {
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  if (enableSchedulerTracing) {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTraced: onInteractionTraced,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}

function unstable_unsubscribe(subscriber) {
  if (enableSchedulerTracing) {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTraced(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTraced(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_trace = unstable_trace;
exports.unstable_wrap = unstable_wrap;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.development.js
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

var enableSchedulerDebugging = false;

/* eslint-disable no-var */

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var maxSigned31BitInt = 1073741823;

// Times out immediately
var IMMEDIATE_PRIORITY_TIMEOUT = -1;
// Eventually times out
var USER_BLOCKING_PRIORITY = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000;
// Never times out
var IDLE_PRIORITY = maxSigned31BitInt;

// Callbacks are stored as a circular, doubly linked list.
var firstCallbackNode = null;

var currentDidTimeout = false;
// Pausing the scheduler is useful for debugging.
var isSchedulerPaused = false;

var currentPriorityLevel = NormalPriority;
var currentEventStartTime = -1;
var currentExpirationTime = -1;

// This is set when a callback is being executed, to prevent re-entrancy.
var isExecutingCallback = false;

var isHostCallbackScheduled = false;

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

function ensureHostCallbackIsScheduled() {
  if (isExecutingCallback) {
    // Don't schedule work yet; wait until the next time we yield.
    return;
  }
  // Schedule the host callback using the earliest expiration in the list.
  var expirationTime = firstCallbackNode.expirationTime;
  if (!isHostCallbackScheduled) {
    isHostCallbackScheduled = true;
  } else {
    // Cancel the existing host callback.
    cancelHostCallback();
  }
  requestHostCallback(flushWork, expirationTime);
}

function flushFirstCallback() {
  var flushedNode = firstCallbackNode;

  // Remove the node from the list before calling the callback. That way the
  // list is in a consistent state even if the callback throws.
  var next = firstCallbackNode.next;
  if (firstCallbackNode === next) {
    // This is the last callback in the list.
    firstCallbackNode = null;
    next = null;
  } else {
    var lastCallbackNode = firstCallbackNode.previous;
    firstCallbackNode = lastCallbackNode.next = next;
    next.previous = lastCallbackNode;
  }

  flushedNode.next = flushedNode.previous = null;

  // Now it's safe to call the callback.
  var callback = flushedNode.callback;
  var expirationTime = flushedNode.expirationTime;
  var priorityLevel = flushedNode.priorityLevel;
  var previousPriorityLevel = currentPriorityLevel;
  var previousExpirationTime = currentExpirationTime;
  currentPriorityLevel = priorityLevel;
  currentExpirationTime = expirationTime;
  var continuationCallback;
  try {
    continuationCallback = callback();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentExpirationTime = previousExpirationTime;
  }

  // A callback may return a continuation. The continuation should be scheduled
  // with the same priority and expiration as the just-finished callback.
  if (typeof continuationCallback === 'function') {
    var continuationNode = {
      callback: continuationCallback,
      priorityLevel: priorityLevel,
      expirationTime: expirationTime,
      next: null,
      previous: null
    };

    // Insert the new callback into the list, sorted by its expiration. This is
    // almost the same as the code in `scheduleCallback`, except the callback
    // is inserted into the list *before* callbacks of equal expiration instead
    // of after.
    if (firstCallbackNode === null) {
      // This is the first callback in the list.
      firstCallbackNode = continuationNode.next = continuationNode.previous = continuationNode;
    } else {
      var nextAfterContinuation = null;
      var node = firstCallbackNode;
      do {
        if (node.expirationTime >= expirationTime) {
          // This callback expires at or after the continuation. We will insert
          // the continuation *before* this callback.
          nextAfterContinuation = node;
          break;
        }
        node = node.next;
      } while (node !== firstCallbackNode);

      if (nextAfterContinuation === null) {
        // No equal or lower priority callback was found, which means the new
        // callback is the lowest priority callback in the list.
        nextAfterContinuation = firstCallbackNode;
      } else if (nextAfterContinuation === firstCallbackNode) {
        // The new callback is the highest priority callback in the list.
        firstCallbackNode = continuationNode;
        ensureHostCallbackIsScheduled();
      }

      var previous = nextAfterContinuation.previous;
      previous.next = nextAfterContinuation.previous = continuationNode;
      continuationNode.next = nextAfterContinuation;
      continuationNode.previous = previous;
    }
  }
}

function flushImmediateWork() {
  if (
  // Confirm we've exited the outer most event handler
  currentEventStartTime === -1 && firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority) {
    isExecutingCallback = true;
    try {
      do {
        flushFirstCallback();
      } while (
      // Keep flushing until there are no more immediate callbacks
      firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority);
    } finally {
      isExecutingCallback = false;
      if (firstCallbackNode !== null) {
        // There's still work remaining. Request another callback.
        ensureHostCallbackIsScheduled();
      } else {
        isHostCallbackScheduled = false;
      }
    }
  }
}

function flushWork(didTimeout) {
  // Exit right away if we're currently paused

  if (enableSchedulerDebugging && isSchedulerPaused) {
    return;
  }

  isExecutingCallback = true;
  var previousDidTimeout = currentDidTimeout;
  currentDidTimeout = didTimeout;
  try {
    if (didTimeout) {
      // Flush all the expired callbacks without yielding.
      while (firstCallbackNode !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        // TODO Wrap in feature flag
        // Read the current time. Flush all the callbacks that expire at or
        // earlier than that time. Then read the current time again and repeat.
        // This optimizes for as few performance.now calls as possible.
        var currentTime = exports.unstable_now();
        if (firstCallbackNode.expirationTime <= currentTime) {
          do {
            flushFirstCallback();
          } while (firstCallbackNode !== null && firstCallbackNode.expirationTime <= currentTime && !(enableSchedulerDebugging && isSchedulerPaused));
          continue;
        }
        break;
      }
    } else {
      // Keep flushing callbacks until we run out of time in the frame.
      if (firstCallbackNode !== null) {
        do {
          if (enableSchedulerDebugging && isSchedulerPaused) {
            break;
          }
          flushFirstCallback();
        } while (firstCallbackNode !== null && !shouldYieldToHost());
      }
    }
  } finally {
    isExecutingCallback = false;
    currentDidTimeout = previousDidTimeout;
    if (firstCallbackNode !== null) {
      // There's still work remaining. Request another callback.
      ensureHostCallbackIsScheduled();
    } else {
      isHostCallbackScheduled = false;
    }
    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;
    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_next(eventHandler) {
  var priorityLevel = void 0;
  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;
    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    var previousEventStartTime = currentEventStartTime;
    currentPriorityLevel = parentPriorityLevel;
    currentEventStartTime = exports.unstable_now();

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
      currentEventStartTime = previousEventStartTime;
      flushImmediateWork();
    }
  };
}

function unstable_scheduleCallback(callback, deprecated_options) {
  var startTime = currentEventStartTime !== -1 ? currentEventStartTime : exports.unstable_now();

  var expirationTime;
  if (typeof deprecated_options === 'object' && deprecated_options !== null && typeof deprecated_options.timeout === 'number') {
    // FIXME: Remove this branch once we lift expiration times out of React.
    expirationTime = startTime + deprecated_options.timeout;
  } else {
    switch (currentPriorityLevel) {
      case ImmediatePriority:
        expirationTime = startTime + IMMEDIATE_PRIORITY_TIMEOUT;
        break;
      case UserBlockingPriority:
        expirationTime = startTime + USER_BLOCKING_PRIORITY;
        break;
      case IdlePriority:
        expirationTime = startTime + IDLE_PRIORITY;
        break;
      case LowPriority:
        expirationTime = startTime + LOW_PRIORITY_TIMEOUT;
        break;
      case NormalPriority:
      default:
        expirationTime = startTime + NORMAL_PRIORITY_TIMEOUT;
    }
  }

  var newNode = {
    callback: callback,
    priorityLevel: currentPriorityLevel,
    expirationTime: expirationTime,
    next: null,
    previous: null
  };

  // Insert the new callback into the list, ordered first by expiration, then
  // by insertion. So the new callback is inserted any other callback with
  // equal expiration.
  if (firstCallbackNode === null) {
    // This is the first callback in the list.
    firstCallbackNode = newNode.next = newNode.previous = newNode;
    ensureHostCallbackIsScheduled();
  } else {
    var next = null;
    var node = firstCallbackNode;
    do {
      if (node.expirationTime > expirationTime) {
        // The new callback expires before this one.
        next = node;
        break;
      }
      node = node.next;
    } while (node !== firstCallbackNode);

    if (next === null) {
      // No callback with a later expiration was found, which means the new
      // callback has the latest expiration in the list.
      next = firstCallbackNode;
    } else if (next === firstCallbackNode) {
      // The new callback has the earliest expiration in the entire list.
      firstCallbackNode = newNode;
      ensureHostCallbackIsScheduled();
    }

    var previous = next.previous;
    previous.next = next.previous = newNode;
    newNode.next = next;
    newNode.previous = previous;
  }

  return newNode;
}

function unstable_pauseExecution() {
  isSchedulerPaused = true;
}

function unstable_continueExecution() {
  isSchedulerPaused = false;
  if (firstCallbackNode !== null) {
    ensureHostCallbackIsScheduled();
  }
}

function unstable_getFirstCallbackNode() {
  return firstCallbackNode;
}

function unstable_cancelCallback(callbackNode) {
  var next = callbackNode.next;
  if (next === null) {
    // Already cancelled.
    return;
  }

  if (next === callbackNode) {
    // This is the only scheduled callback. Clear the list.
    firstCallbackNode = null;
  } else {
    // Remove the callback from its position in the list.
    if (callbackNode === firstCallbackNode) {
      firstCallbackNode = next;
    }
    var previous = callbackNode.previous;
    previous.next = next;
    next.previous = previous;
  }

  callbackNode.next = callbackNode.previous = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

function unstable_shouldYield() {
  return !currentDidTimeout && (firstCallbackNode !== null && firstCallbackNode.expirationTime < currentExpirationTime || shouldYieldToHost());
}

// The remaining code is essentially a polyfill for requestIdleCallback. It
// works by scheduling a requestAnimationFrame, storing the time for the start
// of the frame, then scheduling a postMessage which gets scheduled after paint.
// Within the postMessage handler do as much work as possible until time + frame
// rate. By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated. We want to be using a
// consistent implementation.
var localDate = Date;

// This initialization code may run even on server environments if a component
// just imports ReactDOM (e.g. for findDOMNode). Some environments might not
// have setTimeout or clearTimeout. However, we always expect them to be defined
// on the client. https://github.com/facebook/react/pull/13088
var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;

// We don't expect either of these to necessarily be defined, but we will error
// later if they are missing on the client.
var localRequestAnimationFrame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : undefined;
var localCancelAnimationFrame = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : undefined;

// requestAnimationFrame does not run when the tab is in the background. If
// we're backgrounded we prefer for that work to happen so that the page
// continues to load in the background. So we also schedule a 'setTimeout' as
// a fallback.
// TODO: Need a better heuristic for backgrounded work.
var ANIMATION_FRAME_TIMEOUT = 100;
var rAFID;
var rAFTimeoutID;
var requestAnimationFrameWithTimeout = function (callback) {
  // schedule rAF and also a setTimeout
  rAFID = localRequestAnimationFrame(function (timestamp) {
    // cancel the setTimeout
    localClearTimeout(rAFTimeoutID);
    callback(timestamp);
  });
  rAFTimeoutID = localSetTimeout(function () {
    // cancel the requestAnimationFrame
    localCancelAnimationFrame(rAFID);
    callback(exports.unstable_now());
  }, ANIMATION_FRAME_TIMEOUT);
};

if (hasNativePerformanceNow) {
  var Performance = performance;
  exports.unstable_now = function () {
    return Performance.now();
  };
} else {
  exports.unstable_now = function () {
    return localDate.now();
  };
}

var requestHostCallback;
var cancelHostCallback;
var shouldYieldToHost;

var globalValue = null;
if (typeof window !== 'undefined') {
  globalValue = window;
} else if (typeof global !== 'undefined') {
  globalValue = global;
}

if (globalValue && globalValue._schedMock) {
  // Dynamic injection, only for testing purposes.
  var globalImpl = globalValue._schedMock;
  requestHostCallback = globalImpl[0];
  cancelHostCallback = globalImpl[1];
  shouldYieldToHost = globalImpl[2];
  exports.unstable_now = globalImpl[3];
} else if (
// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' ||
// Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _flushCallback = function (didTimeout) {
    if (_callback !== null) {
      try {
        _callback(didTimeout);
      } finally {
        _callback = null;
      }
    }
  };
  requestHostCallback = function (cb, ms) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0, false);
    }
  };
  cancelHostCallback = function () {
    _callback = null;
  };
  shouldYieldToHost = function () {
    return false;
  };
} else {
  if (typeof console !== 'undefined') {
    // TODO: Remove fb.me link
    if (typeof localRequestAnimationFrame !== 'function') {
      console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
    if (typeof localCancelAnimationFrame !== 'function') {
      console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
  }

  var scheduledHostCallback = null;
  var isMessageEventScheduled = false;
  var timeoutTime = -1;

  var isAnimationFrameScheduled = false;

  var isFlushingHostCallback = false;

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  shouldYieldToHost = function () {
    return frameDeadline <= exports.unstable_now();
  };

  // We use the postMessage trick to defer idle work until after the repaint.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = function (event) {
    isMessageEventScheduled = false;

    var prevScheduledCallback = scheduledHostCallback;
    var prevTimeoutTime = timeoutTime;
    scheduledHostCallback = null;
    timeoutTime = -1;

    var currentTime = exports.unstable_now();

    var didTimeout = false;
    if (frameDeadline - currentTime <= 0) {
      // There's no time left in this idle period. Check if the callback has
      // a timeout and whether it's been exceeded.
      if (prevTimeoutTime !== -1 && prevTimeoutTime <= currentTime) {
        // Exceeded the timeout. Invoke the callback even though there's no
        // time left.
        didTimeout = true;
      } else {
        // No timeout.
        if (!isAnimationFrameScheduled) {
          // Schedule another animation callback so we retry later.
          isAnimationFrameScheduled = true;
          requestAnimationFrameWithTimeout(animationTick);
        }
        // Exit without invoking the callback.
        scheduledHostCallback = prevScheduledCallback;
        timeoutTime = prevTimeoutTime;
        return;
      }
    }

    if (prevScheduledCallback !== null) {
      isFlushingHostCallback = true;
      try {
        prevScheduledCallback(didTimeout);
      } finally {
        isFlushingHostCallback = false;
      }
    }
  };

  var animationTick = function (rafTime) {
    if (scheduledHostCallback !== null) {
      // Eagerly schedule the next animation callback at the beginning of the
      // frame. If the scheduler queue is not empty at the end of the frame, it
      // will continue flushing inside that callback. If the queue *is* empty,
      // then it will exit immediately. Posting the callback at the start of the
      // frame ensures it's fired within the earliest possible frame. If we
      // waited until the end of the frame to post the callback, we risk the
      // browser skipping a frame and not firing the callback until the frame
      // after that.
      requestAnimationFrameWithTimeout(animationTick);
    } else {
      // No pending work. Exit.
      isAnimationFrameScheduled = false;
      return;
    }

    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If the calculated frame time gets lower than 8, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isMessageEventScheduled) {
      isMessageEventScheduled = true;
      port.postMessage(undefined);
    }
  };

  requestHostCallback = function (callback, absoluteTimeout) {
    scheduledHostCallback = callback;
    timeoutTime = absoluteTimeout;
    if (isFlushingHostCallback || absoluteTimeout < 0) {
      // Don't wait for the next frame. Continue working ASAP, in a new event.
      port.postMessage(undefined);
    } else if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger rIC as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      requestAnimationFrameWithTimeout(animationTick);
    }
  };

  cancelHostCallback = function () {
    scheduledHostCallback = null;
    isMessageEventScheduled = false;
    timeoutTime = -1;
  };
}

exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_IdlePriority = IdlePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_next = unstable_next;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_shouldYield = unstable_shouldYield;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
  })();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXItdHJhY2luZy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL3RyYWNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsOENBQThDLGNBQWM7O0FBRTVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0Esa0RBQWtEOzs7QUFHbEQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsOENBQThDLGNBQWM7O0FBRTVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUMxckJhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDZGQUFnQztBQUMzRDs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDZHQUF3QztBQUNuRSIsImZpbGUiOiIyMjZjZGEyODdkZWVjYzMzNjMwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4xMy42XG4gKiBzY2hlZHVsZXItdHJhY2luZy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBIZWxwcyBpZGVudGlmeSBzaWRlIGVmZmVjdHMgaW4gYmVnaW4tcGhhc2UgbGlmZWN5Y2xlIGhvb2tzIGFuZCBzZXRTdGF0ZSByZWR1Y2VyczpcblxuXG4vLyBJbiBzb21lIGNhc2VzLCBTdHJpY3RNb2RlIHNob3VsZCBhbHNvIGRvdWJsZS1yZW5kZXIgbGlmZWN5Y2xlcy5cbi8vIFRoaXMgY2FuIGJlIGNvbmZ1c2luZyBmb3IgdGVzdHMgdGhvdWdoLFxuLy8gQW5kIGl0IGNhbiBiZSBiYWQgZm9yIHBlcmZvcm1hbmNlIGluIHByb2R1Y3Rpb24uXG4vLyBUaGlzIGZlYXR1cmUgZmxhZyBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvcjpcblxuXG4vLyBUbyBwcmVzZXJ2ZSB0aGUgXCJQYXVzZSBvbiBjYXVnaHQgZXhjZXB0aW9uc1wiIGJlaGF2aW9yIG9mIHRoZSBkZWJ1Z2dlciwgd2Vcbi8vIHJlcGxheSB0aGUgYmVnaW4gcGhhc2Ugb2YgYSBmYWlsZWQgY29tcG9uZW50IGluc2lkZSBpbnZva2VHdWFyZGVkQ2FsbGJhY2suXG5cblxuLy8gV2FybiBhYm91dCBkZXByZWNhdGVkLCBhc3luYy11bnNhZmUgbGlmZWN5Y2xlczsgcmVsYXRlcyB0byBSRkMgIzY6XG5cblxuLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuXG4vLyBUcmFjZSB3aGljaCBpbnRlcmFjdGlvbnMgdHJpZ2dlciBlYWNoIGNvbW1pdC5cbnZhciBlbmFibGVTY2hlZHVsZXJUcmFjaW5nID0gdHJ1ZTtcblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cblxudmFyIERFRkFVTFRfVEhSRUFEX0lEID0gMDtcblxuLy8gQ291bnRlcnMgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzLlxudmFyIGludGVyYWN0aW9uSURDb3VudGVyID0gMDtcbnZhciB0aHJlYWRJRENvdW50ZXIgPSAwO1xuXG4vLyBTZXQgb2YgY3VycmVudGx5IHRyYWNlZCBpbnRlcmFjdGlvbnMuXG4vLyBJbnRlcmFjdGlvbnMgXCJzdGFja1wi4oCTXG4vLyBNZWFuaW5nIHRoYXQgbmV3bHkgdHJhY2VkIGludGVyYWN0aW9ucyBhcmUgYXBwZW5kZWQgdG8gdGhlIHByZXZpb3VzbHkgYWN0aXZlIHNldC5cbi8vIFdoZW4gYW4gaW50ZXJhY3Rpb24gZ29lcyBvdXQgb2Ygc2NvcGUsIHRoZSBwcmV2aW91cyBzZXQgKGlmIGFueSkgaXMgcmVzdG9yZWQuXG5leHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmID0gbnVsbDtcblxuLy8gTGlzdGVuZXIocykgdG8gbm90aWZ5IHdoZW4gaW50ZXJhY3Rpb25zIGJlZ2luIGFuZCBlbmQuXG5leHBvcnRzLl9fc3Vic2NyaWJlclJlZiA9IG51bGw7XG5cbmlmIChlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYgPSB7XG4gICAgY3VycmVudDogbmV3IFNldCgpXG4gIH07XG4gIGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfY2xlYXIoY2FsbGJhY2spIHtcbiAgaWYgKCFlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cblxuICB2YXIgcHJldkludGVyYWN0aW9ucyA9IGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudDtcbiAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gbmV3IFNldCgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gcHJldkludGVyYWN0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRDdXJyZW50KCkge1xuICBpZiAoIWVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldFRocmVhZElEKCkge1xuICByZXR1cm4gKyt0aHJlYWRJRENvdW50ZXI7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3RyYWNlKG5hbWUsIHRpbWVzdGFtcCwgY2FsbGJhY2spIHtcbiAgdmFyIHRocmVhZElEID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBERUZBVUxUX1RIUkVBRF9JRDtcblxuICBpZiAoIWVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuXG4gIHZhciBpbnRlcmFjdGlvbiA9IHtcbiAgICBfX2NvdW50OiAxLFxuICAgIGlkOiBpbnRlcmFjdGlvbklEQ291bnRlcisrLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgfTtcblxuICB2YXIgcHJldkludGVyYWN0aW9ucyA9IGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudDtcblxuICAvLyBUcmFjZWQgaW50ZXJhY3Rpb25zIHNob3VsZCBzdGFjay9hY2N1bXVsYXRlLlxuICAvLyBUbyBkbyB0aGF0LCBjbG9uZSB0aGUgY3VycmVudCBpbnRlcmFjdGlvbnMuXG4gIC8vIFRoZSBwcmV2aW91cyBzZXQgd2lsbCBiZSByZXN0b3JlZCB1cG9uIGNvbXBsZXRpb24uXG4gIHZhciBpbnRlcmFjdGlvbnMgPSBuZXcgU2V0KHByZXZJbnRlcmFjdGlvbnMpO1xuICBpbnRlcmFjdGlvbnMuYWRkKGludGVyYWN0aW9uKTtcbiAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gaW50ZXJhY3Rpb25zO1xuXG4gIHZhciBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcbiAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gIHRyeSB7XG4gICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblRyYWNlZChpbnRlcmFjdGlvbik7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gY2FsbGJhY2soKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdG9wcGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07XG5cbiAgICAgICAgICAvLyBJZiBubyBhc3luYyB3b3JrIHdhcyBzY2hlZHVsZWQgZm9yIHRoaXMgaW50ZXJhY3Rpb24sXG4gICAgICAgICAgLy8gTm90aWZ5IHN1YnNjcmliZXJzIHRoYXQgaXQncyBjb21wbGV0ZWQuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV93cmFwKGNhbGxiYWNrKSB7XG4gIHZhciB0aHJlYWRJRCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogREVGQVVMVF9USFJFQURfSUQ7XG5cbiAgaWYgKCFlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9XG5cbiAgdmFyIHdyYXBwZWRJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG5cbiAgdmFyIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgIHN1YnNjcmliZXIub25Xb3JrU2NoZWR1bGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgcGVuZGluZyBhc3luYyB3b3JrIGNvdW50IGZvciB0aGUgY3VycmVudCBpbnRlcmFjdGlvbnMuXG4gIC8vIFVwZGF0ZSBhZnRlciBjYWxsaW5nIHN1YnNjcmliZXJzIGluIGNhc2Ugb2YgZXJyb3IuXG4gIHdyYXBwZWRJbnRlcmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW50ZXJhY3Rpb24pIHtcbiAgICBpbnRlcmFjdGlvbi5fX2NvdW50Kys7XG4gIH0pO1xuXG4gIHZhciBoYXNSdW4gPSBmYWxzZTtcblxuICBmdW5jdGlvbiB3cmFwcGVkKCkge1xuICAgIHZhciBwcmV2SW50ZXJhY3Rpb25zID0gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHdyYXBwZWRJbnRlcmFjdGlvbnM7XG5cbiAgICBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdGFydGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBwcmV2SW50ZXJhY3Rpb25zO1xuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RvcHBlZCh3cmFwcGVkSW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFoYXNSdW4pIHtcbiAgICAgICAgLy8gV2Ugb25seSBleHBlY3QgYSB3cmFwcGVkIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uY2UsXG4gICAgICAgIC8vIEJ1dCBpbiB0aGUgZXZlbnQgdGhhdCBpdCdzIGV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNl4oCTXG4gICAgICAgIC8vIE9ubHkgZGVjcmVtZW50IHRoZSBvdXRzdGFuZGluZyBpbnRlcmFjdGlvbiBjb3VudHMgb25jZS5cbiAgICAgICAgaGFzUnVuID0gdHJ1ZTtcblxuICAgICAgICAvLyBVcGRhdGUgcGVuZGluZyBhc3luYyBjb3VudHMgZm9yIGFsbCB3cmFwcGVkIGludGVyYWN0aW9ucy5cbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgdGhlIGxhc3Qgc2NoZWR1bGVkIGFzeW5jIHdvcmsgZm9yIGFueSBvZiB0aGVtLFxuICAgICAgICAvLyBNYXJrIHRoZW0gYXMgY29tcGxldGVkLlxuICAgICAgICB3cmFwcGVkSW50ZXJhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgICAgICAgaW50ZXJhY3Rpb24uX19jb3VudC0tO1xuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cmFwcGVkLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzY3JpYmVyLm9uV29ya0NhbmNlbGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gVXBkYXRlIHBlbmRpbmcgYXN5bmMgY291bnRzIGZvciBhbGwgd3JhcHBlZCBpbnRlcmFjdGlvbnMuXG4gICAgICAvLyBJZiB0aGlzIHdhcyB0aGUgbGFzdCBzY2hlZHVsZWQgYXN5bmMgd29yayBmb3IgYW55IG9mIHRoZW0sXG4gICAgICAvLyBNYXJrIHRoZW0gYXMgY29tcGxldGVkLlxuICAgICAgd3JhcHBlZEludGVyYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcmFjdGlvbikge1xuICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07XG5cbiAgICAgICAgaWYgKHN1YnNjcmliZXIgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbnZhciBzdWJzY3JpYmVycyA9IG51bGw7XG5pZiAoZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgaWYgKGVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG5cbiAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgb25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQ6IG9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkLFxuICAgICAgICBvbkludGVyYWN0aW9uVHJhY2VkOiBvbkludGVyYWN0aW9uVHJhY2VkLFxuICAgICAgICBvbldvcmtDYW5jZWxlZDogb25Xb3JrQ2FuY2VsZWQsXG4gICAgICAgIG9uV29ya1NjaGVkdWxlZDogb25Xb3JrU2NoZWR1bGVkLFxuICAgICAgICBvbldvcmtTdGFydGVkOiBvbldvcmtTdGFydGVkLFxuICAgICAgICBvbldvcmtTdG9wcGVkOiBvbldvcmtTdG9wcGVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV91bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gIGlmIChlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuXG4gICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDApIHtcbiAgICAgIGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvbkludGVyYWN0aW9uVHJhY2VkKGludGVyYWN0aW9uKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25UcmFjZWQoaW50ZXJhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtTY2hlZHVsZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCkge1xuICB2YXIgZGlkQ2F0Y2hFcnJvciA9IGZhbHNlO1xuICB2YXIgY2F1Z2h0RXJyb3IgPSBudWxsO1xuXG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtTY2hlZHVsZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrU3RhcnRlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrU3RvcHBlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya1N0b3BwZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrQ2FuY2VsZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCkge1xuICB2YXIgZGlkQ2F0Y2hFcnJvciA9IGZhbHNlO1xuICB2YXIgY2F1Z2h0RXJyb3IgPSBudWxsO1xuXG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtDYW5jZWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5leHBvcnRzLnVuc3RhYmxlX2NsZWFyID0gdW5zdGFibGVfY2xlYXI7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnQgPSB1bnN0YWJsZV9nZXRDdXJyZW50O1xuZXhwb3J0cy51bnN0YWJsZV9nZXRUaHJlYWRJRCA9IHVuc3RhYmxlX2dldFRocmVhZElEO1xuZXhwb3J0cy51bnN0YWJsZV90cmFjZSA9IHVuc3RhYmxlX3RyYWNlO1xuZXhwb3J0cy51bnN0YWJsZV93cmFwID0gdW5zdGFibGVfd3JhcDtcbmV4cG9ydHMudW5zdGFibGVfc3Vic2NyaWJlID0gdW5zdGFibGVfc3Vic2NyaWJlO1xuZXhwb3J0cy51bnN0YWJsZV91bnN1YnNjcmliZSA9IHVuc3RhYmxlX3Vuc3Vic2NyaWJlO1xuICB9KSgpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjEzLjZcbiAqIHNjaGVkdWxlci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nID0gZmFsc2U7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuXG4vLyBUT0RPOiBVc2Ugc3ltYm9scz9cbnZhciBJbW1lZGlhdGVQcmlvcml0eSA9IDE7XG52YXIgVXNlckJsb2NraW5nUHJpb3JpdHkgPSAyO1xudmFyIE5vcm1hbFByaW9yaXR5ID0gMztcbnZhciBMb3dQcmlvcml0eSA9IDQ7XG52YXIgSWRsZVByaW9yaXR5ID0gNTtcblxuLy8gTWF4IDMxIGJpdCBpbnRlZ2VyLiBUaGUgbWF4IGludGVnZXIgc2l6ZSBpbiBWOCBmb3IgMzItYml0IHN5c3RlbXMuXG4vLyBNYXRoLnBvdygyLCAzMCkgLSAxXG4vLyAwYjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxudmFyIG1heFNpZ25lZDMxQml0SW50ID0gMTA3Mzc0MTgyMztcblxuLy8gVGltZXMgb3V0IGltbWVkaWF0ZWx5XG52YXIgSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQgPSAtMTtcbi8vIEV2ZW50dWFsbHkgdGltZXMgb3V0XG52YXIgVVNFUl9CTE9DS0lOR19QUklPUklUWSA9IDI1MDtcbnZhciBOT1JNQUxfUFJJT1JJVFlfVElNRU9VVCA9IDUwMDA7XG52YXIgTE9XX1BSSU9SSVRZX1RJTUVPVVQgPSAxMDAwMDtcbi8vIE5ldmVyIHRpbWVzIG91dFxudmFyIElETEVfUFJJT1JJVFkgPSBtYXhTaWduZWQzMUJpdEludDtcblxuLy8gQ2FsbGJhY2tzIGFyZSBzdG9yZWQgYXMgYSBjaXJjdWxhciwgZG91Ymx5IGxpbmtlZCBsaXN0LlxudmFyIGZpcnN0Q2FsbGJhY2tOb2RlID0gbnVsbDtcblxudmFyIGN1cnJlbnREaWRUaW1lb3V0ID0gZmFsc2U7XG4vLyBQYXVzaW5nIHRoZSBzY2hlZHVsZXIgaXMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG52YXIgaXNTY2hlZHVsZXJQYXVzZWQgPSBmYWxzZTtcblxudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG52YXIgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gLTE7XG52YXIgY3VycmVudEV4cGlyYXRpb25UaW1lID0gLTE7XG5cbi8vIFRoaXMgaXMgc2V0IHdoZW4gYSBjYWxsYmFjayBpcyBiZWluZyBleGVjdXRlZCwgdG8gcHJldmVudCByZS1lbnRyYW5jeS5cbnZhciBpc0V4ZWN1dGluZ0NhbGxiYWNrID0gZmFsc2U7XG5cbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xuXG52YXIgaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIGVuc3VyZUhvc3RDYWxsYmFja0lzU2NoZWR1bGVkKCkge1xuICBpZiAoaXNFeGVjdXRpbmdDYWxsYmFjaykge1xuICAgIC8vIERvbid0IHNjaGVkdWxlIHdvcmsgeWV0OyB3YWl0IHVudGlsIHRoZSBuZXh0IHRpbWUgd2UgeWllbGQuXG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFNjaGVkdWxlIHRoZSBob3N0IGNhbGxiYWNrIHVzaW5nIHRoZSBlYXJsaWVzdCBleHBpcmF0aW9uIGluIHRoZSBsaXN0LlxuICB2YXIgZXhwaXJhdGlvblRpbWUgPSBmaXJzdENhbGxiYWNrTm9kZS5leHBpcmF0aW9uVGltZTtcbiAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCkge1xuICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDYW5jZWwgdGhlIGV4aXN0aW5nIGhvc3QgY2FsbGJhY2suXG4gICAgY2FuY2VsSG9zdENhbGxiYWNrKCk7XG4gIH1cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmssIGV4cGlyYXRpb25UaW1lKTtcbn1cblxuZnVuY3Rpb24gZmx1c2hGaXJzdENhbGxiYWNrKCkge1xuICB2YXIgZmx1c2hlZE5vZGUgPSBmaXJzdENhbGxiYWNrTm9kZTtcblxuICAvLyBSZW1vdmUgdGhlIG5vZGUgZnJvbSB0aGUgbGlzdCBiZWZvcmUgY2FsbGluZyB0aGUgY2FsbGJhY2suIFRoYXQgd2F5IHRoZVxuICAvLyBsaXN0IGlzIGluIGEgY29uc2lzdGVudCBzdGF0ZSBldmVuIGlmIHRoZSBjYWxsYmFjayB0aHJvd3MuXG4gIHZhciBuZXh0ID0gZmlyc3RDYWxsYmFja05vZGUubmV4dDtcbiAgaWYgKGZpcnN0Q2FsbGJhY2tOb2RlID09PSBuZXh0KSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBjYWxsYmFjayBpbiB0aGUgbGlzdC5cbiAgICBmaXJzdENhbGxiYWNrTm9kZSA9IG51bGw7XG4gICAgbmV4dCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxhc3RDYWxsYmFja05vZGUgPSBmaXJzdENhbGxiYWNrTm9kZS5wcmV2aW91cztcbiAgICBmaXJzdENhbGxiYWNrTm9kZSA9IGxhc3RDYWxsYmFja05vZGUubmV4dCA9IG5leHQ7XG4gICAgbmV4dC5wcmV2aW91cyA9IGxhc3RDYWxsYmFja05vZGU7XG4gIH1cblxuICBmbHVzaGVkTm9kZS5uZXh0ID0gZmx1c2hlZE5vZGUucHJldmlvdXMgPSBudWxsO1xuXG4gIC8vIE5vdyBpdCdzIHNhZmUgdG8gY2FsbCB0aGUgY2FsbGJhY2suXG4gIHZhciBjYWxsYmFjayA9IGZsdXNoZWROb2RlLmNhbGxiYWNrO1xuICB2YXIgZXhwaXJhdGlvblRpbWUgPSBmbHVzaGVkTm9kZS5leHBpcmF0aW9uVGltZTtcbiAgdmFyIHByaW9yaXR5TGV2ZWwgPSBmbHVzaGVkTm9kZS5wcmlvcml0eUxldmVsO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHZhciBwcmV2aW91c0V4cGlyYXRpb25UaW1lID0gY3VycmVudEV4cGlyYXRpb25UaW1lO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRFeHBpcmF0aW9uVGltZSA9IGV4cGlyYXRpb25UaW1lO1xuICB2YXIgY29udGludWF0aW9uQ2FsbGJhY2s7XG4gIHRyeSB7XG4gICAgY29udGludWF0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjaygpO1xuICB9IGZpbmFsbHkge1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICAgIGN1cnJlbnRFeHBpcmF0aW9uVGltZSA9IHByZXZpb3VzRXhwaXJhdGlvblRpbWU7XG4gIH1cblxuICAvLyBBIGNhbGxiYWNrIG1heSByZXR1cm4gYSBjb250aW51YXRpb24uIFRoZSBjb250aW51YXRpb24gc2hvdWxkIGJlIHNjaGVkdWxlZFxuICAvLyB3aXRoIHRoZSBzYW1lIHByaW9yaXR5IGFuZCBleHBpcmF0aW9uIGFzIHRoZSBqdXN0LWZpbmlzaGVkIGNhbGxiYWNrLlxuICBpZiAodHlwZW9mIGNvbnRpbnVhdGlvbkNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGNvbnRpbnVhdGlvbk5vZGUgPSB7XG4gICAgICBjYWxsYmFjazogY29udGludWF0aW9uQ2FsbGJhY2ssXG4gICAgICBwcmlvcml0eUxldmVsOiBwcmlvcml0eUxldmVsLFxuICAgICAgZXhwaXJhdGlvblRpbWU6IGV4cGlyYXRpb25UaW1lLFxuICAgICAgbmV4dDogbnVsbCxcbiAgICAgIHByZXZpb3VzOiBudWxsXG4gICAgfTtcblxuICAgIC8vIEluc2VydCB0aGUgbmV3IGNhbGxiYWNrIGludG8gdGhlIGxpc3QsIHNvcnRlZCBieSBpdHMgZXhwaXJhdGlvbi4gVGhpcyBpc1xuICAgIC8vIGFsbW9zdCB0aGUgc2FtZSBhcyB0aGUgY29kZSBpbiBgc2NoZWR1bGVDYWxsYmFja2AsIGV4Y2VwdCB0aGUgY2FsbGJhY2tcbiAgICAvLyBpcyBpbnNlcnRlZCBpbnRvIHRoZSBsaXN0ICpiZWZvcmUqIGNhbGxiYWNrcyBvZiBlcXVhbCBleHBpcmF0aW9uIGluc3RlYWRcbiAgICAvLyBvZiBhZnRlci5cbiAgICBpZiAoZmlyc3RDYWxsYmFja05vZGUgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGNhbGxiYWNrIGluIHRoZSBsaXN0LlxuICAgICAgZmlyc3RDYWxsYmFja05vZGUgPSBjb250aW51YXRpb25Ob2RlLm5leHQgPSBjb250aW51YXRpb25Ob2RlLnByZXZpb3VzID0gY29udGludWF0aW9uTm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHRBZnRlckNvbnRpbnVhdGlvbiA9IG51bGw7XG4gICAgICB2YXIgbm9kZSA9IGZpcnN0Q2FsbGJhY2tOb2RlO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAobm9kZS5leHBpcmF0aW9uVGltZSA+PSBleHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgZXhwaXJlcyBhdCBvciBhZnRlciB0aGUgY29udGludWF0aW9uLiBXZSB3aWxsIGluc2VydFxuICAgICAgICAgIC8vIHRoZSBjb250aW51YXRpb24gKmJlZm9yZSogdGhpcyBjYWxsYmFjay5cbiAgICAgICAgICBuZXh0QWZ0ZXJDb250aW51YXRpb24gPSBub2RlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9IHdoaWxlIChub2RlICE9PSBmaXJzdENhbGxiYWNrTm9kZSk7XG5cbiAgICAgIGlmIChuZXh0QWZ0ZXJDb250aW51YXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgLy8gTm8gZXF1YWwgb3IgbG93ZXIgcHJpb3JpdHkgY2FsbGJhY2sgd2FzIGZvdW5kLCB3aGljaCBtZWFucyB0aGUgbmV3XG4gICAgICAgIC8vIGNhbGxiYWNrIGlzIHRoZSBsb3dlc3QgcHJpb3JpdHkgY2FsbGJhY2sgaW4gdGhlIGxpc3QuXG4gICAgICAgIG5leHRBZnRlckNvbnRpbnVhdGlvbiA9IGZpcnN0Q2FsbGJhY2tOb2RlO1xuICAgICAgfSBlbHNlIGlmIChuZXh0QWZ0ZXJDb250aW51YXRpb24gPT09IGZpcnN0Q2FsbGJhY2tOb2RlKSB7XG4gICAgICAgIC8vIFRoZSBuZXcgY2FsbGJhY2sgaXMgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgY2FsbGJhY2sgaW4gdGhlIGxpc3QuXG4gICAgICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gY29udGludWF0aW9uTm9kZTtcbiAgICAgICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZpb3VzID0gbmV4dEFmdGVyQ29udGludWF0aW9uLnByZXZpb3VzO1xuICAgICAgcHJldmlvdXMubmV4dCA9IG5leHRBZnRlckNvbnRpbnVhdGlvbi5wcmV2aW91cyA9IGNvbnRpbnVhdGlvbk5vZGU7XG4gICAgICBjb250aW51YXRpb25Ob2RlLm5leHQgPSBuZXh0QWZ0ZXJDb250aW51YXRpb247XG4gICAgICBjb250aW51YXRpb25Ob2RlLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsdXNoSW1tZWRpYXRlV29yaygpIHtcbiAgaWYgKFxuICAvLyBDb25maXJtIHdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXIgbW9zdCBldmVudCBoYW5kbGVyXG4gIGN1cnJlbnRFdmVudFN0YXJ0VGltZSA9PT0gLTEgJiYgZmlyc3RDYWxsYmFja05vZGUgIT09IG51bGwgJiYgZmlyc3RDYWxsYmFja05vZGUucHJpb3JpdHlMZXZlbCA9PT0gSW1tZWRpYXRlUHJpb3JpdHkpIHtcbiAgICBpc0V4ZWN1dGluZ0NhbGxiYWNrID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgZG8ge1xuICAgICAgICBmbHVzaEZpcnN0Q2FsbGJhY2soKTtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgLy8gS2VlcCBmbHVzaGluZyB1bnRpbCB0aGVyZSBhcmUgbm8gbW9yZSBpbW1lZGlhdGUgY2FsbGJhY2tzXG4gICAgICBmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCAmJiBmaXJzdENhbGxiYWNrTm9kZS5wcmlvcml0eUxldmVsID09PSBJbW1lZGlhdGVQcmlvcml0eSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRXhlY3V0aW5nQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgIGlmIChmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGVyZSdzIHN0aWxsIHdvcmsgcmVtYWluaW5nLiBSZXF1ZXN0IGFub3RoZXIgY2FsbGJhY2suXG4gICAgICAgIGVuc3VyZUhvc3RDYWxsYmFja0lzU2NoZWR1bGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoZGlkVGltZW91dCkge1xuICAvLyBFeGl0IHJpZ2h0IGF3YXkgaWYgd2UncmUgY3VycmVudGx5IHBhdXNlZFxuXG4gIGlmIChlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgJiYgaXNTY2hlZHVsZXJQYXVzZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc0V4ZWN1dGluZ0NhbGxiYWNrID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzRGlkVGltZW91dCA9IGN1cnJlbnREaWRUaW1lb3V0O1xuICBjdXJyZW50RGlkVGltZW91dCA9IGRpZFRpbWVvdXQ7XG4gIHRyeSB7XG4gICAgaWYgKGRpZFRpbWVvdXQpIHtcbiAgICAgIC8vIEZsdXNoIGFsbCB0aGUgZXhwaXJlZCBjYWxsYmFja3Mgd2l0aG91dCB5aWVsZGluZy5cbiAgICAgIHdoaWxlIChmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCAmJiAhKGVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyAmJiBpc1NjaGVkdWxlclBhdXNlZCkpIHtcbiAgICAgICAgLy8gVE9ETyBXcmFwIGluIGZlYXR1cmUgZmxhZ1xuICAgICAgICAvLyBSZWFkIHRoZSBjdXJyZW50IHRpbWUuIEZsdXNoIGFsbCB0aGUgY2FsbGJhY2tzIHRoYXQgZXhwaXJlIGF0IG9yXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGF0IHRpbWUuIFRoZW4gcmVhZCB0aGUgY3VycmVudCB0aW1lIGFnYWluIGFuZCByZXBlYXQuXG4gICAgICAgIC8vIFRoaXMgb3B0aW1pemVzIGZvciBhcyBmZXcgcGVyZm9ybWFuY2Uubm93IGNhbGxzIGFzIHBvc3NpYmxlLlxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgICBpZiAoZmlyc3RDYWxsYmFja05vZGUuZXhwaXJhdGlvblRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBmbHVzaEZpcnN0Q2FsbGJhY2soKTtcbiAgICAgICAgICB9IHdoaWxlIChmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCAmJiBmaXJzdENhbGxiYWNrTm9kZS5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZSAmJiAhKGVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyAmJiBpc1NjaGVkdWxlclBhdXNlZCkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBLZWVwIGZsdXNoaW5nIGNhbGxiYWNrcyB1bnRpbCB3ZSBydW4gb3V0IG9mIHRpbWUgaW4gdGhlIGZyYW1lLlxuICAgICAgaWYgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAoZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nICYmIGlzU2NoZWR1bGVyUGF1c2VkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hGaXJzdENhbGxiYWNrKCk7XG4gICAgICAgIH0gd2hpbGUgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsICYmICFzaG91bGRZaWVsZFRvSG9zdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgaXNFeGVjdXRpbmdDYWxsYmFjayA9IGZhbHNlO1xuICAgIGN1cnJlbnREaWRUaW1lb3V0ID0gcHJldmlvdXNEaWRUaW1lb3V0O1xuICAgIGlmIChmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhlcmUncyBzdGlsbCB3b3JrIHJlbWFpbmluZy4gUmVxdWVzdCBhbm90aGVyIGNhbGxiYWNrLlxuICAgICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gQmVmb3JlIGV4aXRpbmcsIGZsdXNoIGFsbCB0aGUgaW1tZWRpYXRlIHdvcmsgdGhhdCB3YXMgc2NoZWR1bGVkLlxuICAgIGZsdXNoSW1tZWRpYXRlV29yaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShwcmlvcml0eUxldmVsLCBldmVudEhhbmRsZXIpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgY2FzZSBMb3dQcmlvcml0eTpcbiAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHZhciBwcmV2aW91c0V2ZW50U3RhcnRUaW1lID0gY3VycmVudEV2ZW50U3RhcnRUaW1lO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRFdmVudFN0YXJ0VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZXZlbnRIYW5kbGVyKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gcHJldmlvdXNFdmVudFN0YXJ0VGltZTtcblxuICAgIC8vIEJlZm9yZSBleGl0aW5nLCBmbHVzaCBhbGwgdGhlIGltbWVkaWF0ZSB3b3JrIHRoYXQgd2FzIHNjaGVkdWxlZC5cbiAgICBmbHVzaEltbWVkaWF0ZVdvcmsoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9uZXh0KGV2ZW50SGFuZGxlcikge1xuICB2YXIgcHJpb3JpdHlMZXZlbCA9IHZvaWQgMDtcbiAgc3dpdGNoIChjdXJyZW50UHJpb3JpdHlMZXZlbCkge1xuICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgICAgLy8gU2hpZnQgZG93biB0byBub3JtYWwgcHJpb3JpdHlcbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBbnl0aGluZyBsb3dlciB0aGFuIG5vcm1hbCBwcmlvcml0eSBzaG91bGQgcmVtYWluIGF0IHRoZSBjdXJyZW50IGxldmVsLlxuICAgICAgcHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHZhciBwcmV2aW91c0V2ZW50U3RhcnRUaW1lID0gY3VycmVudEV2ZW50U3RhcnRUaW1lO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRFdmVudFN0YXJ0VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZXZlbnRIYW5kbGVyKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gcHJldmlvdXNFdmVudFN0YXJ0VGltZTtcblxuICAgIC8vIEJlZm9yZSBleGl0aW5nLCBmbHVzaCBhbGwgdGhlIGltbWVkaWF0ZSB3b3JrIHRoYXQgd2FzIHNjaGVkdWxlZC5cbiAgICBmbHVzaEltbWVkaWF0ZVdvcmsoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV93cmFwQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgdmFyIHBhcmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlzIGlzIGEgZm9yayBvZiBydW5XaXRoUHJpb3JpdHksIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlLlxuICAgIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICB2YXIgcHJldmlvdXNFdmVudFN0YXJ0VGltZSA9IGN1cnJlbnRFdmVudFN0YXJ0VGltZTtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHBhcmVudFByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgICBjdXJyZW50RXZlbnRTdGFydFRpbWUgPSBwcmV2aW91c0V2ZW50U3RhcnRUaW1lO1xuICAgICAgZmx1c2hJbW1lZGlhdGVXb3JrKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXByZWNhdGVkX29wdGlvbnMpIHtcbiAgdmFyIHN0YXJ0VGltZSA9IGN1cnJlbnRFdmVudFN0YXJ0VGltZSAhPT0gLTEgPyBjdXJyZW50RXZlbnRTdGFydFRpbWUgOiBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuXG4gIHZhciBleHBpcmF0aW9uVGltZTtcbiAgaWYgKHR5cGVvZiBkZXByZWNhdGVkX29wdGlvbnMgPT09ICdvYmplY3QnICYmIGRlcHJlY2F0ZWRfb3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwcmVjYXRlZF9vcHRpb25zLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgLy8gRklYTUU6IFJlbW92ZSB0aGlzIGJyYW5jaCBvbmNlIHdlIGxpZnQgZXhwaXJhdGlvbiB0aW1lcyBvdXQgb2YgUmVhY3QuXG4gICAgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyBkZXByZWNhdGVkX29wdGlvbnMudGltZW91dDtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQcmlvcml0eUxldmVsKSB7XG4gICAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgICAgICBleHBpcmF0aW9uVGltZSA9IHN0YXJ0VGltZSArIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgICAgIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgVVNFUl9CTE9DS0lOR19QUklPUklUWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgICAgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyBJRExFX1BSSU9SSVRZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgICAgIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgTE9XX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIG5ld05vZGUgPSB7XG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgIHByaW9yaXR5TGV2ZWw6IGN1cnJlbnRQcmlvcml0eUxldmVsLFxuICAgIGV4cGlyYXRpb25UaW1lOiBleHBpcmF0aW9uVGltZSxcbiAgICBuZXh0OiBudWxsLFxuICAgIHByZXZpb3VzOiBudWxsXG4gIH07XG5cbiAgLy8gSW5zZXJ0IHRoZSBuZXcgY2FsbGJhY2sgaW50byB0aGUgbGlzdCwgb3JkZXJlZCBmaXJzdCBieSBleHBpcmF0aW9uLCB0aGVuXG4gIC8vIGJ5IGluc2VydGlvbi4gU28gdGhlIG5ldyBjYWxsYmFjayBpcyBpbnNlcnRlZCBhbnkgb3RoZXIgY2FsbGJhY2sgd2l0aFxuICAvLyBlcXVhbCBleHBpcmF0aW9uLlxuICBpZiAoZmlyc3RDYWxsYmFja05vZGUgPT09IG51bGwpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBjYWxsYmFjayBpbiB0aGUgbGlzdC5cbiAgICBmaXJzdENhbGxiYWNrTm9kZSA9IG5ld05vZGUubmV4dCA9IG5ld05vZGUucHJldmlvdXMgPSBuZXdOb2RlO1xuICAgIGVuc3VyZUhvc3RDYWxsYmFja0lzU2NoZWR1bGVkKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5leHQgPSBudWxsO1xuICAgIHZhciBub2RlID0gZmlyc3RDYWxsYmFja05vZGU7XG4gICAgZG8ge1xuICAgICAgaWYgKG5vZGUuZXhwaXJhdGlvblRpbWUgPiBleHBpcmF0aW9uVGltZSkge1xuICAgICAgICAvLyBUaGUgbmV3IGNhbGxiYWNrIGV4cGlyZXMgYmVmb3JlIHRoaXMgb25lLlxuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH0gd2hpbGUgKG5vZGUgIT09IGZpcnN0Q2FsbGJhY2tOb2RlKTtcblxuICAgIGlmIChuZXh0ID09PSBudWxsKSB7XG4gICAgICAvLyBObyBjYWxsYmFjayB3aXRoIGEgbGF0ZXIgZXhwaXJhdGlvbiB3YXMgZm91bmQsIHdoaWNoIG1lYW5zIHRoZSBuZXdcbiAgICAgIC8vIGNhbGxiYWNrIGhhcyB0aGUgbGF0ZXN0IGV4cGlyYXRpb24gaW4gdGhlIGxpc3QuXG4gICAgICBuZXh0ID0gZmlyc3RDYWxsYmFja05vZGU7XG4gICAgfSBlbHNlIGlmIChuZXh0ID09PSBmaXJzdENhbGxiYWNrTm9kZSkge1xuICAgICAgLy8gVGhlIG5ldyBjYWxsYmFjayBoYXMgdGhlIGVhcmxpZXN0IGV4cGlyYXRpb24gaW4gdGhlIGVudGlyZSBsaXN0LlxuICAgICAgZmlyc3RDYWxsYmFja05vZGUgPSBuZXdOb2RlO1xuICAgICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXMgPSBuZXh0LnByZXZpb3VzO1xuICAgIHByZXZpb3VzLm5leHQgPSBuZXh0LnByZXZpb3VzID0gbmV3Tm9kZTtcbiAgICBuZXdOb2RlLm5leHQgPSBuZXh0O1xuICAgIG5ld05vZGUucHJldmlvdXMgPSBwcmV2aW91cztcbiAgfVxuXG4gIHJldHVybiBuZXdOb2RlO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbigpIHtcbiAgaXNTY2hlZHVsZXJQYXVzZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbigpIHtcbiAgaXNTY2hlZHVsZXJQYXVzZWQgPSBmYWxzZTtcbiAgaWYgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsKSB7XG4gICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZSgpIHtcbiAgcmV0dXJuIGZpcnN0Q2FsbGJhY2tOb2RlO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjayhjYWxsYmFja05vZGUpIHtcbiAgdmFyIG5leHQgPSBjYWxsYmFja05vZGUubmV4dDtcbiAgaWYgKG5leHQgPT09IG51bGwpIHtcbiAgICAvLyBBbHJlYWR5IGNhbmNlbGxlZC5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobmV4dCA9PT0gY2FsbGJhY2tOb2RlKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb25seSBzY2hlZHVsZWQgY2FsbGJhY2suIENsZWFyIHRoZSBsaXN0LlxuICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW1vdmUgdGhlIGNhbGxiYWNrIGZyb20gaXRzIHBvc2l0aW9uIGluIHRoZSBsaXN0LlxuICAgIGlmIChjYWxsYmFja05vZGUgPT09IGZpcnN0Q2FsbGJhY2tOb2RlKSB7XG4gICAgICBmaXJzdENhbGxiYWNrTm9kZSA9IG5leHQ7XG4gICAgfVxuICAgIHZhciBwcmV2aW91cyA9IGNhbGxiYWNrTm9kZS5wcmV2aW91cztcbiAgICBwcmV2aW91cy5uZXh0ID0gbmV4dDtcbiAgICBuZXh0LnByZXZpb3VzID0gcHJldmlvdXM7XG4gIH1cblxuICBjYWxsYmFja05vZGUubmV4dCA9IGNhbGxiYWNrTm9kZS5wcmV2aW91cyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsKCkge1xuICByZXR1cm4gY3VycmVudFByaW9yaXR5TGV2ZWw7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3Nob3VsZFlpZWxkKCkge1xuICByZXR1cm4gIWN1cnJlbnREaWRUaW1lb3V0ICYmIChmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCAmJiBmaXJzdENhbGxiYWNrTm9kZS5leHBpcmF0aW9uVGltZSA8IGN1cnJlbnRFeHBpcmF0aW9uVGltZSB8fCBzaG91bGRZaWVsZFRvSG9zdCgpKTtcbn1cblxuLy8gVGhlIHJlbWFpbmluZyBjb2RlIGlzIGVzc2VudGlhbGx5IGEgcG9seWZpbGwgZm9yIHJlcXVlc3RJZGxlQ2FsbGJhY2suIEl0XG4vLyB3b3JrcyBieSBzY2hlZHVsaW5nIGEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBzdG9yaW5nIHRoZSB0aW1lIGZvciB0aGUgc3RhcnRcbi8vIG9mIHRoZSBmcmFtZSwgdGhlbiBzY2hlZHVsaW5nIGEgcG9zdE1lc3NhZ2Ugd2hpY2ggZ2V0cyBzY2hlZHVsZWQgYWZ0ZXIgcGFpbnQuXG4vLyBXaXRoaW4gdGhlIHBvc3RNZXNzYWdlIGhhbmRsZXIgZG8gYXMgbXVjaCB3b3JrIGFzIHBvc3NpYmxlIHVudGlsIHRpbWUgKyBmcmFtZVxuLy8gcmF0ZS4gQnkgc2VwYXJhdGluZyB0aGUgaWRsZSBjYWxsIGludG8gYSBzZXBhcmF0ZSBldmVudCB0aWNrIHdlIGVuc3VyZSB0aGF0XG4vLyBsYXlvdXQsIHBhaW50IGFuZCBvdGhlciBicm93c2VyIHdvcmsgaXMgY291bnRlZCBhZ2FpbnN0IHRoZSBhdmFpbGFibGUgdGltZS5cbi8vIFRoZSBmcmFtZSByYXRlIGlzIGR5bmFtaWNhbGx5IGFkanVzdGVkLlxuXG4vLyBXZSBjYXB0dXJlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIGFueSBnbG9iYWwsIGluIGNhc2UgaXQgZ2V0cyBwb2x5ZmlsbGVkIGFmdGVyXG4vLyB0aGlzIG1vZHVsZSBpcyBpbml0aWFsbHkgZXZhbHVhdGVkLiBXZSB3YW50IHRvIGJlIHVzaW5nIGFcbi8vIGNvbnNpc3RlbnQgaW1wbGVtZW50YXRpb24uXG52YXIgbG9jYWxEYXRlID0gRGF0ZTtcblxuLy8gVGhpcyBpbml0aWFsaXphdGlvbiBjb2RlIG1heSBydW4gZXZlbiBvbiBzZXJ2ZXIgZW52aXJvbm1lbnRzIGlmIGEgY29tcG9uZW50XG4vLyBqdXN0IGltcG9ydHMgUmVhY3RET00gKGUuZy4gZm9yIGZpbmRET01Ob2RlKS4gU29tZSBlbnZpcm9ubWVudHMgbWlnaHQgbm90XG4vLyBoYXZlIHNldFRpbWVvdXQgb3IgY2xlYXJUaW1lb3V0LiBIb3dldmVyLCB3ZSBhbHdheXMgZXhwZWN0IHRoZW0gdG8gYmUgZGVmaW5lZFxuLy8gb24gdGhlIGNsaWVudC4gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMTMwODhcbnZhciBsb2NhbFNldFRpbWVvdXQgPSB0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFRpbWVvdXQgOiB1bmRlZmluZWQ7XG52YXIgbG9jYWxDbGVhclRpbWVvdXQgPSB0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nID8gY2xlYXJUaW1lb3V0IDogdW5kZWZpbmVkO1xuXG4vLyBXZSBkb24ndCBleHBlY3QgZWl0aGVyIG9mIHRoZXNlIHRvIG5lY2Vzc2FyaWx5IGJlIGRlZmluZWQsIGJ1dCB3ZSB3aWxsIGVycm9yXG4vLyBsYXRlciBpZiB0aGV5IGFyZSBtaXNzaW5nIG9uIHRoZSBjbGllbnQuXG52YXIgbG9jYWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogdW5kZWZpbmVkO1xudmFyIGxvY2FsQ2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicgPyBjYW5jZWxBbmltYXRpb25GcmFtZSA6IHVuZGVmaW5lZDtcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGRvZXMgbm90IHJ1biB3aGVuIHRoZSB0YWIgaXMgaW4gdGhlIGJhY2tncm91bmQuIElmXG4vLyB3ZSdyZSBiYWNrZ3JvdW5kZWQgd2UgcHJlZmVyIGZvciB0aGF0IHdvcmsgdG8gaGFwcGVuIHNvIHRoYXQgdGhlIHBhZ2Vcbi8vIGNvbnRpbnVlcyB0byBsb2FkIGluIHRoZSBiYWNrZ3JvdW5kLiBTbyB3ZSBhbHNvIHNjaGVkdWxlIGEgJ3NldFRpbWVvdXQnIGFzXG4vLyBhIGZhbGxiYWNrLlxuLy8gVE9ETzogTmVlZCBhIGJldHRlciBoZXVyaXN0aWMgZm9yIGJhY2tncm91bmRlZCB3b3JrLlxudmFyIEFOSU1BVElPTl9GUkFNRV9USU1FT1VUID0gMTAwO1xudmFyIHJBRklEO1xudmFyIHJBRlRpbWVvdXRJRDtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVXaXRoVGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAvLyBzY2hlZHVsZSByQUYgYW5kIGFsc28gYSBzZXRUaW1lb3V0XG4gIHJBRklEID0gbG9jYWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgIC8vIGNhbmNlbCB0aGUgc2V0VGltZW91dFxuICAgIGxvY2FsQ2xlYXJUaW1lb3V0KHJBRlRpbWVvdXRJRCk7XG4gICAgY2FsbGJhY2sodGltZXN0YW1wKTtcbiAgfSk7XG4gIHJBRlRpbWVvdXRJRCA9IGxvY2FsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gY2FuY2VsIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICBsb2NhbENhbmNlbEFuaW1hdGlvbkZyYW1lKHJBRklEKTtcbiAgICBjYWxsYmFjayhleHBvcnRzLnVuc3RhYmxlX25vdygpKTtcbiAgfSwgQU5JTUFUSU9OX0ZSQU1FX1RJTUVPVVQpO1xufTtcblxuaWYgKGhhc05hdGl2ZVBlcmZvcm1hbmNlTm93KSB7XG4gIHZhciBQZXJmb3JtYW5jZSA9IHBlcmZvcm1hbmNlO1xuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUGVyZm9ybWFuY2Uubm93KCk7XG4gIH07XG59IGVsc2Uge1xuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9jYWxEYXRlLm5vdygpO1xuICB9O1xufVxuXG52YXIgcmVxdWVzdEhvc3RDYWxsYmFjaztcbnZhciBjYW5jZWxIb3N0Q2FsbGJhY2s7XG52YXIgc2hvdWxkWWllbGRUb0hvc3Q7XG5cbnZhciBnbG9iYWxWYWx1ZSA9IG51bGw7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2xvYmFsVmFsdWUgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdsb2JhbFZhbHVlID0gZ2xvYmFsO1xufVxuXG5pZiAoZ2xvYmFsVmFsdWUgJiYgZ2xvYmFsVmFsdWUuX3NjaGVkTW9jaykge1xuICAvLyBEeW5hbWljIGluamVjdGlvbiwgb25seSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgdmFyIGdsb2JhbEltcGwgPSBnbG9iYWxWYWx1ZS5fc2NoZWRNb2NrO1xuICByZXF1ZXN0SG9zdENhbGxiYWNrID0gZ2xvYmFsSW1wbFswXTtcbiAgY2FuY2VsSG9zdENhbGxiYWNrID0gZ2xvYmFsSW1wbFsxXTtcbiAgc2hvdWxkWWllbGRUb0hvc3QgPSBnbG9iYWxJbXBsWzJdO1xuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGdsb2JhbEltcGxbM107XG59IGVsc2UgaWYgKFxuLy8gSWYgU2NoZWR1bGVyIHJ1bnMgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBpdCBmYWxscyBiYWNrIHRvIGEgbmFpdmVcbi8vIGltcGxlbWVudGF0aW9uIHVzaW5nIHNldFRpbWVvdXQuXG50eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuLy8gQ2hlY2sgaWYgTWVzc2FnZUNoYW5uZWwgaXMgc3VwcG9ydGVkLCB0b28uXG50eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICdmdW5jdGlvbicpIHtcbiAgLy8gSWYgdGhpcyBhY2NpZGVudGFsbHkgZ2V0cyBpbXBvcnRlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LCBlLmcuIEphdmFTY3JpcHRDb3JlLFxuICAvLyBmYWxsYmFjayB0byBhIG5haXZlIGltcGxlbWVudGF0aW9uLlxuICB2YXIgX2NhbGxiYWNrID0gbnVsbDtcbiAgdmFyIF9mbHVzaENhbGxiYWNrID0gZnVuY3Rpb24gKGRpZFRpbWVvdXQpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBfY2FsbGJhY2soZGlkVGltZW91dCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfY2FsbGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYiwgbXMpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAvLyBQcm90ZWN0IGFnYWluc3QgcmUtZW50cmFuY3kuXG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RIb3N0Q2FsbGJhY2ssIDAsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NhbGxiYWNrID0gY2I7XG4gICAgICBzZXRUaW1lb3V0KF9mbHVzaENhbGxiYWNrLCAwLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjYW5jZWxIb3N0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2NhbGxiYWNrID0gbnVsbDtcbiAgfTtcbiAgc2hvdWxkWWllbGRUb0hvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufSBlbHNlIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFRPRE86IFJlbW92ZSBmYi5tZSBsaW5rXG4gICAgaWYgKHR5cGVvZiBsb2NhbFJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBcIiArICdNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhICcgKyAncG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbG9jYWxDYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIFwiICsgJ01ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgJyArICdwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHMnKTtcbiAgICB9XG4gIH1cblxuICB2YXIgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gbnVsbDtcbiAgdmFyIGlzTWVzc2FnZUV2ZW50U2NoZWR1bGVkID0gZmFsc2U7XG4gIHZhciB0aW1lb3V0VGltZSA9IC0xO1xuXG4gIHZhciBpc0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgdmFyIGlzRmx1c2hpbmdIb3N0Q2FsbGJhY2sgPSBmYWxzZTtcblxuICB2YXIgZnJhbWVEZWFkbGluZSA9IDA7XG4gIC8vIFdlIHN0YXJ0IG91dCBhc3N1bWluZyB0aGF0IHdlIHJ1biBhdCAzMGZwcyBidXQgdGhlbiB0aGUgaGV1cmlzdGljIHRyYWNraW5nXG4gIC8vIHdpbGwgYWRqdXN0IHRoaXMgdmFsdWUgdG8gYSBmYXN0ZXIgZnBzIGlmIHdlIGdldCBtb3JlIGZyZXF1ZW50IGFuaW1hdGlvblxuICAvLyBmcmFtZXMuXG4gIHZhciBwcmV2aW91c0ZyYW1lVGltZSA9IDMzO1xuICB2YXIgYWN0aXZlRnJhbWVUaW1lID0gMzM7XG5cbiAgc2hvdWxkWWllbGRUb0hvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZyYW1lRGVhZGxpbmUgPD0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgfTtcblxuICAvLyBXZSB1c2UgdGhlIHBvc3RNZXNzYWdlIHRyaWNrIHRvIGRlZmVyIGlkbGUgd29yayB1bnRpbCBhZnRlciB0aGUgcmVwYWludC5cbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlzTWVzc2FnZUV2ZW50U2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgICB2YXIgcHJldlNjaGVkdWxlZENhbGxiYWNrID0gc2NoZWR1bGVkSG9zdENhbGxiYWNrO1xuICAgIHZhciBwcmV2VGltZW91dFRpbWUgPSB0aW1lb3V0VGltZTtcbiAgICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHRpbWVvdXRUaW1lID0gLTE7XG5cbiAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuXG4gICAgdmFyIGRpZFRpbWVvdXQgPSBmYWxzZTtcbiAgICBpZiAoZnJhbWVEZWFkbGluZSAtIGN1cnJlbnRUaW1lIDw9IDApIHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gdGltZSBsZWZ0IGluIHRoaXMgaWRsZSBwZXJpb2QuIENoZWNrIGlmIHRoZSBjYWxsYmFjayBoYXNcbiAgICAgIC8vIGEgdGltZW91dCBhbmQgd2hldGhlciBpdCdzIGJlZW4gZXhjZWVkZWQuXG4gICAgICBpZiAocHJldlRpbWVvdXRUaW1lICE9PSAtMSAmJiBwcmV2VGltZW91dFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgLy8gRXhjZWVkZWQgdGhlIHRpbWVvdXQuIEludm9rZSB0aGUgY2FsbGJhY2sgZXZlbiB0aG91Z2ggdGhlcmUncyBub1xuICAgICAgICAvLyB0aW1lIGxlZnQuXG4gICAgICAgIGRpZFRpbWVvdXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gdGltZW91dC5cbiAgICAgICAgaWYgKCFpc0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVkKSB7XG4gICAgICAgICAgLy8gU2NoZWR1bGUgYW5vdGhlciBhbmltYXRpb24gY2FsbGJhY2sgc28gd2UgcmV0cnkgbGF0ZXIuXG4gICAgICAgICAgaXNBbmltYXRpb25GcmFtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lV2l0aFRpbWVvdXQoYW5pbWF0aW9uVGljayk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXhpdCB3aXRob3V0IGludm9raW5nIHRoZSBjYWxsYmFjay5cbiAgICAgICAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gcHJldlNjaGVkdWxlZENhbGxiYWNrO1xuICAgICAgICB0aW1lb3V0VGltZSA9IHByZXZUaW1lb3V0VGltZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2U2NoZWR1bGVkQ2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGlzRmx1c2hpbmdIb3N0Q2FsbGJhY2sgPSB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJldlNjaGVkdWxlZENhbGxiYWNrKGRpZFRpbWVvdXQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZ0hvc3RDYWxsYmFjayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgYW5pbWF0aW9uVGljayA9IGZ1bmN0aW9uIChyYWZUaW1lKSB7XG4gICAgaWYgKHNjaGVkdWxlZEhvc3RDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgLy8gRWFnZXJseSBzY2hlZHVsZSB0aGUgbmV4dCBhbmltYXRpb24gY2FsbGJhY2sgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGVcbiAgICAgIC8vIGZyYW1lLiBJZiB0aGUgc2NoZWR1bGVyIHF1ZXVlIGlzIG5vdCBlbXB0eSBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZSwgaXRcbiAgICAgIC8vIHdpbGwgY29udGludWUgZmx1c2hpbmcgaW5zaWRlIHRoYXQgY2FsbGJhY2suIElmIHRoZSBxdWV1ZSAqaXMqIGVtcHR5LFxuICAgICAgLy8gdGhlbiBpdCB3aWxsIGV4aXQgaW1tZWRpYXRlbHkuIFBvc3RpbmcgdGhlIGNhbGxiYWNrIGF0IHRoZSBzdGFydCBvZiB0aGVcbiAgICAgIC8vIGZyYW1lIGVuc3VyZXMgaXQncyBmaXJlZCB3aXRoaW4gdGhlIGVhcmxpZXN0IHBvc3NpYmxlIGZyYW1lLiBJZiB3ZVxuICAgICAgLy8gd2FpdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIGZyYW1lIHRvIHBvc3QgdGhlIGNhbGxiYWNrLCB3ZSByaXNrIHRoZVxuICAgICAgLy8gYnJvd3NlciBza2lwcGluZyBhIGZyYW1lIGFuZCBub3QgZmlyaW5nIHRoZSBjYWxsYmFjayB1bnRpbCB0aGUgZnJhbWVcbiAgICAgIC8vIGFmdGVyIHRoYXQuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVXaXRoVGltZW91dChhbmltYXRpb25UaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gcGVuZGluZyB3b3JrLiBFeGl0LlxuICAgICAgaXNBbmltYXRpb25GcmFtZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0RnJhbWVUaW1lID0gcmFmVGltZSAtIGZyYW1lRGVhZGxpbmUgKyBhY3RpdmVGcmFtZVRpbWU7XG4gICAgaWYgKG5leHRGcmFtZVRpbWUgPCBhY3RpdmVGcmFtZVRpbWUgJiYgcHJldmlvdXNGcmFtZVRpbWUgPCBhY3RpdmVGcmFtZVRpbWUpIHtcbiAgICAgIGlmIChuZXh0RnJhbWVUaW1lIDwgOCkge1xuICAgICAgICAvLyBEZWZlbnNpdmUgY29kaW5nLiBXZSBkb24ndCBzdXBwb3J0IGhpZ2hlciBmcmFtZSByYXRlcyB0aGFuIDEyMGh6LlxuICAgICAgICAvLyBJZiB0aGUgY2FsY3VsYXRlZCBmcmFtZSB0aW1lIGdldHMgbG93ZXIgdGhhbiA4LCBpdCBpcyBwcm9iYWJseSBhIGJ1Zy5cbiAgICAgICAgbmV4dEZyYW1lVGltZSA9IDg7XG4gICAgICB9XG4gICAgICAvLyBJZiBvbmUgZnJhbWUgZ29lcyBsb25nLCB0aGVuIHRoZSBuZXh0IG9uZSBjYW4gYmUgc2hvcnQgdG8gY2F0Y2ggdXAuXG4gICAgICAvLyBJZiB0d28gZnJhbWVzIGFyZSBzaG9ydCBpbiBhIHJvdywgdGhlbiB0aGF0J3MgYW4gaW5kaWNhdGlvbiB0aGF0IHdlXG4gICAgICAvLyBhY3R1YWxseSBoYXZlIGEgaGlnaGVyIGZyYW1lIHJhdGUgdGhhbiB3aGF0IHdlJ3JlIGN1cnJlbnRseSBvcHRpbWl6aW5nLlxuICAgICAgLy8gV2UgYWRqdXN0IG91ciBoZXVyaXN0aWMgZHluYW1pY2FsbHkgYWNjb3JkaW5nbHkuIEZvciBleGFtcGxlLCBpZiB3ZSdyZVxuICAgICAgLy8gcnVubmluZyBvbiAxMjBoeiBkaXNwbGF5IG9yIDkwaHogVlIgZGlzcGxheS5cbiAgICAgIC8vIFRha2UgdGhlIG1heCBvZiB0aGUgdHdvIGluIGNhc2Ugb25lIG9mIHRoZW0gd2FzIGFuIGFub21hbHkgZHVlIHRvXG4gICAgICAvLyBtaXNzZWQgZnJhbWUgZGVhZGxpbmVzLlxuICAgICAgYWN0aXZlRnJhbWVUaW1lID0gbmV4dEZyYW1lVGltZSA8IHByZXZpb3VzRnJhbWVUaW1lID8gcHJldmlvdXNGcmFtZVRpbWUgOiBuZXh0RnJhbWVUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0ZyYW1lVGltZSA9IG5leHRGcmFtZVRpbWU7XG4gICAgfVxuICAgIGZyYW1lRGVhZGxpbmUgPSByYWZUaW1lICsgYWN0aXZlRnJhbWVUaW1lO1xuICAgIGlmICghaXNNZXNzYWdlRXZlbnRTY2hlZHVsZWQpIHtcbiAgICAgIGlzTWVzc2FnZUV2ZW50U2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYWJzb2x1dGVUaW1lb3V0KSB7XG4gICAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGltZW91dFRpbWUgPSBhYnNvbHV0ZVRpbWVvdXQ7XG4gICAgaWYgKGlzRmx1c2hpbmdIb3N0Q2FsbGJhY2sgfHwgYWJzb2x1dGVUaW1lb3V0IDwgMCkge1xuICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgdGhlIG5leHQgZnJhbWUuIENvbnRpbnVlIHdvcmtpbmcgQVNBUCwgaW4gYSBuZXcgZXZlbnQuXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIGlmICghaXNBbmltYXRpb25GcmFtZVNjaGVkdWxlZCkge1xuICAgICAgLy8gSWYgckFGIGRpZG4ndCBhbHJlYWR5IHNjaGVkdWxlIG9uZSwgd2UgbmVlZCB0byBzY2hlZHVsZSBhIGZyYW1lLlxuICAgICAgLy8gVE9ETzogSWYgdGhpcyByQUYgZG9lc24ndCBtYXRlcmlhbGl6ZSBiZWNhdXNlIHRoZSBicm93c2VyIHRocm90dGxlcywgd2VcbiAgICAgIC8vIG1pZ2h0IHdhbnQgdG8gc3RpbGwgaGF2ZSBzZXRUaW1lb3V0IHRyaWdnZXIgcklDIGFzIGEgYmFja3VwIHRvIGVuc3VyZVxuICAgICAgLy8gdGhhdCB3ZSBrZWVwIHBlcmZvcm1pbmcgd29yay5cbiAgICAgIGlzQW5pbWF0aW9uRnJhbWVTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lV2l0aFRpbWVvdXQoYW5pbWF0aW9uVGljayk7XG4gICAgfVxuICB9O1xuXG4gIGNhbmNlbEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICAgIGlzTWVzc2FnZUV2ZW50U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdGltZW91dFRpbWUgPSAtMTtcbiAgfTtcbn1cblxuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSA9IEltbWVkaWF0ZVByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSA9IFVzZXJCbG9ja2luZ1ByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSA9IE5vcm1hbFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSA9IHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2sgPSB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayA9IHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2sgPSB1bnN0YWJsZV93cmFwQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsID0gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw7XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkID0gdW5zdGFibGVfc2hvdWxkWWllbGQ7XG5leHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uID0gdW5zdGFibGVfY29udGludWVFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uID0gdW5zdGFibGVfcGF1c2VFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlID0gdW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci10cmFjaW5nLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9