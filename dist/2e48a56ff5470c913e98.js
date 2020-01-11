(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.shuffle-array"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2h1ZmZsZS1hcnJheS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjJlNDhhNTZmZjU0NzBjOTEzZTk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJhbmRvbWl6ZSB0aGUgb3JkZXIgb2YgdGhlIGVsZW1lbnRzIGluIGEgZ2l2ZW4gYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgLSBUaGUgZ2l2ZW4gYXJyYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb3B5XSAtIFNldHMgaWYgc2hvdWxkIHJldHVybiBhIHNodWZmbGVkIGNvcHkgb2YgdGhlIGdpdmVuIGFycmF5LiBCeSBkZWZhdWx0IGl0J3MgYSBmYWxzeSB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnJuZ10gLSBTcGVjaWZpZXMgYSBjdXN0b20gcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNodWZmbGUoYXJyLCBvcHRpb25zKSB7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NodWZmbGUgZXhwZWN0IGFuIGFycmF5IGFzIHBhcmFtZXRlci4nKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjb2xsZWN0aW9uID0gYXJyLFxuICAgICAgbGVuID0gYXJyLmxlbmd0aCxcbiAgICAgIHJuZyA9IG9wdGlvbnMucm5nIHx8IE1hdGgucmFuZG9tLFxuICAgICAgcmFuZG9tLFxuICAgICAgdGVtcDtcblxuICBpZiAob3B0aW9ucy5jb3B5ID09PSB0cnVlKSB7XG4gICAgY29sbGVjdGlvbiA9IGFyci5zbGljZSgpO1xuICB9XG5cbiAgd2hpbGUgKGxlbikge1xuICAgIHJhbmRvbSA9IE1hdGguZmxvb3Iocm5nKCkgKiBsZW4pO1xuICAgIGxlbiAtPSAxO1xuICAgIHRlbXAgPSBjb2xsZWN0aW9uW2xlbl07XG4gICAgY29sbGVjdGlvbltsZW5dID0gY29sbGVjdGlvbltyYW5kb21dO1xuICAgIGNvbGxlY3Rpb25bcmFuZG9tXSA9IHRlbXA7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbjtcbn07XG5cbi8qKlxuICogUGljayBvbmUgb3IgbW9yZSByYW5kb20gZWxlbWVudHMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgLSBUaGUgZ2l2ZW4gYXJyYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnBpY2tzXSAtIFNwZWNpZmllcyBob3cgbWFueSByYW5kb20gZWxlbWVudHMgeW91IHdhbnQgdG8gcGljay4gQnkgZGVmYXVsdCBpdCBwaWNrcyAxLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMucm5nXSAtIFNwZWNpZmllcyBhIGN1c3RvbSByYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbnNodWZmbGUucGljayA9IGZ1bmN0aW9uKGFyciwgb3B0aW9ucykge1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaHVmZmxlLnBpY2soKSBleHBlY3QgYW4gYXJyYXkgYXMgcGFyYW1ldGVyLicpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZyA9IG9wdGlvbnMucm5nIHx8IE1hdGgucmFuZG9tLFxuICAgICAgcGlja3MgPSBvcHRpb25zLnBpY2tzIHx8IDE7XG5cbiAgaWYgKHR5cGVvZiBwaWNrcyA9PT0gJ251bWJlcicgJiYgcGlja3MgIT09IDEpIHtcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aCxcbiAgICAgICAgY29sbGVjdGlvbiA9IGFyci5zbGljZSgpLFxuICAgICAgICByYW5kb20gPSBbXSxcbiAgICAgICAgaW5kZXg7XG5cbiAgICB3aGlsZSAocGlja3MgJiYgbGVuKSB7XG4gICAgICBpbmRleCA9IE1hdGguZmxvb3Iocm5nKCkgKiBsZW4pO1xuICAgICAgcmFuZG9tLnB1c2goY29sbGVjdGlvbltpbmRleF0pO1xuICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgbGVuIC09IDE7XG4gICAgICBwaWNrcyAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb207XG4gIH1cblxuICByZXR1cm4gYXJyW01hdGguZmxvb3Iocm5nKCkgKiBhcnIubGVuZ3RoKV07XG59O1xuXG4vKipcbiAqIEV4cG9zZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHNodWZmbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9