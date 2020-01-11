(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.nanoid"],{

/***/ "./node_modules/nanoid/format.js":
/*!***************************************!*\
  !*** ./node_modules/nanoid/format.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Secure random string generator with custom alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param {generator} random The random bytes generator.
 * @param {string} alphabet Symbols to be used in new random string.
 * @param {size} size The number of symbols in new random string.
 *
 * @return {string} Random string.
 *
 * @example
 * const format = require('nanoid/format')
 *
 * function random (size) {
 *   const result = []
 *   for (let i = 0; i < size; i++) {
 *     result.push(randomByte())
 *   }
 *   return result
 * }
 *
 * format(random, "abcdef", 5) //=> "fbaef"
 *
 * @name format
 * @function
 */
module.exports = function (random, alphabet, size) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  var step = Math.ceil(1.6 * mask * size / alphabet.length)
  size = +size

  var id = ''
  while (true) {
    var bytes = random(step)
    for (var i = 0; i < step; i++) {
      var byte = bytes[i] & mask
      if (alphabet[byte]) {
        id += alphabet[byte]
        if (id.length === size) return id
      }
    }
  }
}

/**
 * @callback generator
 * @param {number} bytes The number of bytes to generate.
 * @return {number[]} Random bytes.
 */


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFub2lkL2Zvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckIiLCJmaWxlIjoiYjYzM2YzNTMzMmE2ZDA2NjZjYjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNlY3VyZSByYW5kb20gc3RyaW5nIGdlbmVyYXRvciB3aXRoIGN1c3RvbSBhbHBoYWJldC5cbiAqXG4gKiBBbHBoYWJldCBtdXN0IGNvbnRhaW4gMjU2IHN5bWJvbHMgb3IgbGVzcy4gT3RoZXJ3aXNlLCB0aGUgZ2VuZXJhdG9yXG4gKiB3aWxsIG5vdCBiZSBzZWN1cmUuXG4gKlxuICogQHBhcmFtIHtnZW5lcmF0b3J9IHJhbmRvbSBUaGUgcmFuZG9tIGJ5dGVzIGdlbmVyYXRvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhbHBoYWJldCBTeW1ib2xzIHRvIGJlIHVzZWQgaW4gbmV3IHJhbmRvbSBzdHJpbmcuXG4gKiBAcGFyYW0ge3NpemV9IHNpemUgVGhlIG51bWJlciBvZiBzeW1ib2xzIGluIG5ldyByYW5kb20gc3RyaW5nLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gUmFuZG9tIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZm9ybWF0ID0gcmVxdWlyZSgnbmFub2lkL2Zvcm1hdCcpXG4gKlxuICogZnVuY3Rpb24gcmFuZG9tIChzaXplKSB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gKiAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gKiAgICAgcmVzdWx0LnB1c2gocmFuZG9tQnl0ZSgpKVxuICogICB9XG4gKiAgIHJldHVybiByZXN1bHRcbiAqIH1cbiAqXG4gKiBmb3JtYXQocmFuZG9tLCBcImFiY2RlZlwiLCA1KSAvLz0+IFwiZmJhZWZcIlxuICpcbiAqIEBuYW1lIGZvcm1hdFxuICogQGZ1bmN0aW9uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJhbmRvbSwgYWxwaGFiZXQsIHNpemUpIHtcbiAgdmFyIG1hc2sgPSAoMiA8PCBNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSAtIDFcbiAgdmFyIHN0ZXAgPSBNYXRoLmNlaWwoMS42ICogbWFzayAqIHNpemUgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHNpemUgPSArc2l6ZVxuXG4gIHZhciBpZCA9ICcnXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGJ5dGVzID0gcmFuZG9tKHN0ZXApXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspIHtcbiAgICAgIHZhciBieXRlID0gYnl0ZXNbaV0gJiBtYXNrXG4gICAgICBpZiAoYWxwaGFiZXRbYnl0ZV0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZV1cbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIGdlbmVyYXRvclxuICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gZ2VuZXJhdGUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gUmFuZG9tIGJ5dGVzLlxuICovXG4iXSwic291cmNlUm9vdCI6IiJ9