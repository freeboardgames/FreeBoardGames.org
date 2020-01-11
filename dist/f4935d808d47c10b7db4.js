(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.parse-entities"],{

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZS1lbnRpdGllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUUsK0JBQStCO0FBQy9CLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Qlk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLHNGQUEyQjtBQUNoRCxjQUFjLG1CQUFPLENBQUMsMEZBQTZCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQyxzREFBWTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDMUMscUJBQXFCLG1CQUFPLENBQUMsb0VBQW1CO0FBQ2hELG1CQUFtQixtQkFBTyxDQUFDLCtFQUFpQjs7QUFFNUM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyx3QkFBd0I7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImY0OTM1ZDgwOGQ0N2MxMGI3ZGI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBpbnZhbGlkID0gcmVxdWlyZSgnY2hhcmFjdGVyLXJlZmVyZW5jZS1pbnZhbGlkJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGVjb2RlRW50aXR5ID0gcmVxdWlyZSgnLi9kZWNvZGUtZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUVudGl0aWVzXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciBub29wID0gRnVuY3Rpb24ucHJvdG90eXBlXG5cbi8vIERlZmF1bHQgc2V0dGluZ3MuXG52YXIgZGVmYXVsdHMgPSB7XG4gIHdhcm5pbmc6IG51bGwsXG4gIHJlZmVyZW5jZTogbnVsbCxcbiAgdGV4dDogbnVsbCxcbiAgd2FybmluZ0NvbnRleHQ6IG51bGwsXG4gIHJlZmVyZW5jZUNvbnRleHQ6IG51bGwsXG4gIHRleHRDb250ZXh0OiBudWxsLFxuICBwb3NpdGlvbjoge30sXG4gIGFkZGl0aW9uYWw6IG51bGwsXG4gIGF0dHJpYnV0ZTogZmFsc2UsXG4gIG5vblRlcm1pbmF0ZWQ6IHRydWVcbn1cblxuLy8gQ2hhcmFjdGVycy5cbnZhciB0YWIgPSA5IC8vICdcXHQnXG52YXIgbGluZUZlZWQgPSAxMCAvLyAnXFxuJ1xudmFyIGZvcm1GZWVkID0gMTIgLy8gICdcXGYnXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAgJyYnXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gICc8J1xudmFyIGVxdWFsc1RvID0gNjEgLy8gICc9J1xudmFyIG51bWJlclNpZ24gPSAzNSAvLyAgJyMnXG52YXIgdXBwZXJjYXNlWCA9IDg4IC8vICAnWCdcbnZhciBsb3dlcmNhc2VYID0gMTIwIC8vICAneCdcbnZhciByZXBsYWNlbWVudENoYXJhY3RlciA9IDY1NTMzIC8vICfvv70nXG5cbi8vIFJlZmVyZW5jZSB0eXBlcy5cbnZhciBuYW1lID0gJ25hbWVkJ1xudmFyIGhleGEgPSAnaGV4YWRlY2ltYWwnXG52YXIgZGVjaSA9ICdkZWNpbWFsJ1xuXG4vLyBNYXAgb2YgYmFzZXMuXG52YXIgYmFzZXMgPSB7fVxuXG5iYXNlc1toZXhhXSA9IDE2XG5iYXNlc1tkZWNpXSA9IDEwXG5cbi8vIE1hcCBvZiB0eXBlcyB0byB0ZXN0cy5cbi8vIEVhY2ggdHlwZSBvZiBjaGFyYWN0ZXIgcmVmZXJlbmNlIGFjY2VwdHMgZGlmZmVyZW50IGNoYXJhY3RlcnMuXG4vLyBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlY3Qgd2hldGhlciBhIHJlZmVyZW5jZSBoYXMgZW5kZWQgKGFzIHRoZSBzZW1pY29sb25cbi8vIGlzIG5vdCBzdHJpY3RseSBuZWVkZWQpLlxudmFyIHRlc3RzID0ge31cblxudGVzdHNbbmFtZV0gPSBhbHBoYW51bWVyaWNhbFxudGVzdHNbZGVjaV0gPSBkZWNpbWFsXG50ZXN0c1toZXhhXSA9IGhleGFkZWNpbWFsXG5cbi8vIFdhcm5pbmcgdHlwZXMuXG52YXIgbmFtZWROb3RUZXJtaW5hdGVkID0gMVxudmFyIG51bWVyaWNOb3RUZXJtaW5hdGVkID0gMlxudmFyIG5hbWVkRW1wdHkgPSAzXG52YXIgbnVtZXJpY0VtcHR5ID0gNFxudmFyIG5hbWVkVW5rbm93biA9IDVcbnZhciBudW1lcmljRGlzYWxsb3dlZCA9IDZcbnZhciBudW1lcmljUHJvaGliaXRlZCA9IDdcblxuLy8gV2FybmluZyBtZXNzYWdlcy5cbnZhciBtZXNzYWdlcyA9IHt9XG5cbm1lc3NhZ2VzW25hbWVkTm90VGVybWluYXRlZF0gPVxuICAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbnVtZXJpY05vdFRlcm1pbmF0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbmFtZWRFbXB0eV0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbnVtZXJpY0VtcHR5XSA9ICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW25hbWVkVW5rbm93bl0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSBrbm93bidcbm1lc3NhZ2VzW251bWVyaWNEaXNhbGxvd2VkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBkaXNhbGxvd2VkJ1xubWVzc2FnZXNbbnVtZXJpY1Byb2hpYml0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIFVuaWNvZGUgcmFuZ2UnXG5cbi8vIFdyYXAgdG8gZW5zdXJlIGNsZWFuIHBhcmFtZXRlcnMgYXJlIGdpdmVuIHRvIGBwYXJzZWAuXG5mdW5jdGlvbiBwYXJzZUVudGl0aWVzKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHt9XG4gIHZhciBvcHRpb25cbiAgdmFyIGtleVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBvcHRpb24gPSBvcHRpb25zW2tleV1cbiAgICBzZXR0aW5nc1trZXldID1cbiAgICAgIG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzW2tleV0gOiBvcHRpb25cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgc2V0dGluZ3MucG9zaXRpb24uc3RhcnQpIHtcbiAgICBzZXR0aW5ncy5pbmRlbnQgPSBzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgW11cbiAgICBzZXR0aW5ncy5wb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0XG4gIH1cblxuICByZXR1cm4gcGFyc2UodmFsdWUsIHNldHRpbmdzKVxufVxuXG4vLyBQYXJzZSBlbnRpdGllcy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpIHtcbiAgdmFyIGFkZGl0aW9uYWwgPSBzZXR0aW5ncy5hZGRpdGlvbmFsXG4gIHZhciBub25UZXJtaW5hdGVkID0gc2V0dGluZ3Mubm9uVGVybWluYXRlZFxuICB2YXIgaGFuZGxlVGV4dCA9IHNldHRpbmdzLnRleHRcbiAgdmFyIGhhbmRsZVJlZmVyZW5jZSA9IHNldHRpbmdzLnJlZmVyZW5jZVxuICB2YXIgaGFuZGxlV2FybmluZyA9IHNldHRpbmdzLndhcm5pbmdcbiAgdmFyIHRleHRDb250ZXh0ID0gc2V0dGluZ3MudGV4dENvbnRleHRcbiAgdmFyIHJlZmVyZW5jZUNvbnRleHQgPSBzZXR0aW5ncy5yZWZlcmVuY2VDb250ZXh0XG4gIHZhciB3YXJuaW5nQ29udGV4dCA9IHNldHRpbmdzLndhcm5pbmdDb250ZXh0XG4gIHZhciBwb3MgPSBzZXR0aW5ncy5wb3NpdGlvblxuICB2YXIgaW5kZW50ID0gc2V0dGluZ3MuaW5kZW50IHx8IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGluZXMgPSAtMVxuICB2YXIgY29sdW1uID0gcG9zLmNvbHVtbiB8fCAxXG4gIHZhciBsaW5lID0gcG9zLmxpbmUgfHwgMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGVudGl0eUNoYXJhY3RlcnNcbiAgdmFyIG5hbWVkRW50aXR5XG4gIHZhciB0ZXJtaW5hdGVkXG4gIHZhciBjaGFyYWN0ZXJzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlZmVyZW5jZVxuICB2YXIgZm9sbG93aW5nXG4gIHZhciB3YXJuaW5nXG4gIHZhciByZWFzb25cbiAgdmFyIG91dHB1dFxuICB2YXIgZW50aXR5XG4gIHZhciBiZWdpblxuICB2YXIgc3RhcnRcbiAgdmFyIHR5cGVcbiAgdmFyIHRlc3RcbiAgdmFyIHByZXZcbiAgdmFyIG5leHRcbiAgdmFyIGRpZmZcbiAgdmFyIGVuZFxuXG4gIGlmICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRpdGlvbmFsID0gYWRkaXRpb25hbC5jaGFyQ29kZUF0KDApXG4gIH1cblxuICAvLyBDYWNoZSB0aGUgY3VycmVudCBwb2ludC5cbiAgcHJldiA9IG5vdygpXG5cbiAgLy8gV3JhcCBgaGFuZGxlV2FybmluZ2AuXG4gIHdhcm5pbmcgPSBoYW5kbGVXYXJuaW5nID8gcGFyc2VFcnJvciA6IG5vb3BcblxuICAvLyBFbnN1cmUgdGhlIGFsZ29yaXRobSB3YWxrcyBvdmVyIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIHRoZSBlbmQgKGluY2x1c2l2ZSkuXG4gIGluZGV4LS1cbiAgbGVuZ3RoKytcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgd2FzIGEgbmV3bGluZS5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgY29sdW1uID0gaW5kZW50W2xpbmVzXSB8fCAxXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGFtcGVyc2FuZCkge1xuICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZGVwZW5kcyBvbiB0aGUgaWRlbnRpdHkgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgaWYgKFxuICAgICAgICBmb2xsb3dpbmcgPT09IHRhYiB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxpbmVGZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gZm9ybUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBzcGFjZSB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGFtcGVyc2FuZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxlc3NUaGFuIHx8XG4gICAgICAgIGZvbGxvd2luZyAhPT0gZm9sbG93aW5nIHx8XG4gICAgICAgIChhZGRpdGlvbmFsICYmIGZvbGxvd2luZyA9PT0gYWRkaXRpb25hbClcbiAgICAgICkge1xuICAgICAgICAvLyBOb3QgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICAgICAgICAvLyBObyBjaGFyYWN0ZXJzIGFyZSBjb25zdW1lZCwgYW5kIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGFuIGVycm9yLCBlaXRoZXIuXG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGJlZ2luID0gc3RhcnRcbiAgICAgIGVuZCA9IHN0YXJ0XG5cbiAgICAgIGlmIChmb2xsb3dpbmcgPT09IG51bWJlclNpZ24pIHtcbiAgICAgICAgLy8gTnVtZXJpY2FsIGVudGl0eS5cbiAgICAgICAgZW5kID0gKytiZWdpblxuXG4gICAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZnVydGhlciBkZXBlbmRzIG9uIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gdXBwZXJjYXNlWCB8fCBmb2xsb3dpbmcgPT09IGxvd2VyY2FzZVgpIHtcbiAgICAgICAgICAvLyBBU0NJSSBoZXggZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBoZXhhXG4gICAgICAgICAgZW5kID0gKytiZWdpblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFTQ0lJIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gZGVjaVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOYW1lZCBlbnRpdHkuXG4gICAgICAgIHR5cGUgPSBuYW1lXG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSAnJ1xuICAgICAgZW50aXR5ID0gJydcbiAgICAgIGNoYXJhY3RlcnMgPSAnJ1xuICAgICAgdGVzdCA9IHRlc3RzW3R5cGVdXG4gICAgICBlbmQtLVxuXG4gICAgICB3aGlsZSAoKytlbmQgPCBsZW5ndGgpIHtcbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKCF0ZXN0KGZvbGxvd2luZykpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVycyArPSBmcm9tQ2hhckNvZGUoZm9sbG93aW5nKVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBtYXRjaCBhIGxlZ2FjeSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIHNvLCB3ZSBjYWNoZSB0aGF0IGFzIHRoZSBsYXN0IHZpYWJsZSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBkbyBub3QgbmVlZCB0byB3YWxrIGJhY2t3YXJkcyBsYXRlci5cbiAgICAgICAgaWYgKHR5cGUgPT09IG5hbWUgJiYgb3duLmNhbGwobGVnYWN5LCBjaGFyYWN0ZXJzKSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbGVnYWN5W2NoYXJhY3RlcnNdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGVybWluYXRlZCA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gc2VtaWNvbG9uXG5cbiAgICAgIGlmICh0ZXJtaW5hdGVkKSB7XG4gICAgICAgIGVuZCsrXG5cbiAgICAgICAgbmFtZWRFbnRpdHkgPSB0eXBlID09PSBuYW1lID8gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIDogZmFsc2VcblxuICAgICAgICBpZiAobmFtZWRFbnRpdHkpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IG5hbWVkRW50aXR5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGlmZiA9IDEgKyBlbmQgLSBzdGFydFxuXG4gICAgICBpZiAoIXRlcm1pbmF0ZWQgJiYgIW5vblRlcm1pbmF0ZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgICAgIC8vIEFuIGVtcHR5IChwb3NzaWJsZSkgZW50aXR5IGlzIHZhbGlkLCB1bmxlc3MgaXTigJlzIG51bWVyaWMgKHRodXMgYW5cbiAgICAgICAgLy8gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFuIG9jdG90aG9ycCkuXG4gICAgICAgIGlmICh0eXBlICE9PSBuYW1lKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljRW1wdHksIGRpZmYpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyBBbiBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW55dGhpbmcgdW5rbm93biwgYW5kIG5vdCB0ZXJtaW5hdGVkLCBpc1xuICAgICAgICAvLyBpbnZhbGlkLlxuICAgICAgICBpZiAodGVybWluYXRlZCAmJiAhZW50aXR5KSB7XG4gICAgICAgICAgd2FybmluZyhuYW1lZFVua25vd24sIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmVzIHNvbWV0aGluZyBhZnRlciBhbiBlbnRpdHkgbmFtZSB3aGljaCBpcyBub3Qga25vd24sIGNhcFxuICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAgaWYgKGVudGl0eUNoYXJhY3RlcnMgIT09IGNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGVuZCA9IGJlZ2luICsgZW50aXR5Q2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgIGRpZmYgPSAxICsgZW5kIC0gYmVnaW5cbiAgICAgICAgICAgIHRlcm1pbmF0ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgbm90IHRlcm1pbmF0ZWQsIHdhcm4uXG4gICAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgICByZWFzb24gPSBlbnRpdHlDaGFyYWN0ZXJzID8gbmFtZWROb3RUZXJtaW5hdGVkIDogbmFtZWRFbXB0eVxuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgICAgICAgIGlmIChmb2xsb3dpbmcgPT09IGVxdWFsc1RvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhbnVtZXJpY2FsKGZvbGxvd2luZykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZSA9IGVudGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgLy8gQWxsIG5vbi10ZXJtaW5hdGVkIG51bWVyaWMgZW50aXRpZXMgYXJlIG5vdCByZW5kZXJlZCwgYW5kIHRyaWdnZXIgYVxuICAgICAgICAgIC8vIHdhcm5pbmcuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljTm90VGVybWluYXRlZCwgZGlmZilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGVybWluYXRlZCBhbmQgbnVtYmVyLCBwYXJzZSBhcyBlaXRoZXIgaGV4YWRlY2ltYWwgb3IgZGVjaW1hbC5cbiAgICAgICAgcmVmZXJlbmNlID0gcGFyc2VJbnQoY2hhcmFjdGVycywgYmFzZXNbdHlwZV0pXG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBwcm9oaWJpdGVkLCBhbmQgcmVwbGFjZVxuICAgICAgICAvLyB3aXRoIHJlcGxhY2VtZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKHByb2hpYml0ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY1Byb2hpYml0ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gZnJvbUNoYXJDb2RlKHJlcGxhY2VtZW50Q2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZW5jZSBpbiBpbnZhbGlkKSB7XG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBkaXNhbGxvd2VkLCBhbmQgcmVwbGFjZVxuICAgICAgICAgIC8vIGJ5IGFuIGFsdGVybmF0aXZlLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gaW52YWxpZFtyZWZlcmVuY2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUGFyc2UgdGhlIG51bWJlci5cbiAgICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgICAgICAgaWYgKGRpc2FsbG93ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdHJpbmdpZnkgdGhlIG51bWJlci5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlID4gMHhmZmZmKSB7XG4gICAgICAgICAgICByZWZlcmVuY2UgLT0gMHgxMDAwMFxuICAgICAgICAgICAgb3V0cHV0ICs9IGZyb21DaGFyQ29kZSgocmVmZXJlbmNlID4+PiAoMTAgJiAweDNmZikpIHwgMHhkODAwKVxuICAgICAgICAgICAgcmVmZXJlbmNlID0gMHhkYzAwIHwgKHJlZmVyZW5jZSAmIDB4M2ZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlZmVyZW5jZSA9IG91dHB1dCArIGZyb21DaGFyQ29kZShyZWZlcmVuY2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm91bmQgaXQhXG4gICAgICAvLyBGaXJzdCBlYXQgdGhlIHF1ZXVlZCBjaGFyYWN0ZXJzIGFzIG5vcm1hbCB0ZXh0LCB0aGVuIGVhdCBhbiBlbnRpdHkuXG4gICAgICBpZiAocmVmZXJlbmNlKSB7XG4gICAgICAgIGZsdXNoKClcblxuICAgICAgICBwcmV2ID0gbm93KClcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICAgIGNvbHVtbiArPSBlbmQgLSBzdGFydCArIDFcbiAgICAgICAgcmVzdWx0LnB1c2gocmVmZXJlbmNlKVxuICAgICAgICBuZXh0ID0gbm93KClcbiAgICAgICAgbmV4dC5vZmZzZXQrK1xuXG4gICAgICAgIGlmIChoYW5kbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBoYW5kbGVSZWZlcmVuY2UuY2FsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICB7c3RhcnQ6IHByZXYsIGVuZDogbmV4dH0sXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gbmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgY291bGQgbm90IGZpbmQgYSByZWZlcmVuY2UsIHF1ZXVlIHRoZSBjaGVja2VkIGNoYXJhY3RlcnMgKGFzXG4gICAgICAgIC8vIG5vcm1hbCBjaGFyYWN0ZXJzKSwgYW5kIG1vdmUgdGhlIHBvaW50ZXIgdG8gdGhlaXIgZW5kLlxuICAgICAgICAvLyBUaGlzIGlzIHBvc3NpYmxlIGJlY2F1c2Ugd2UgY2FuIGJlIGNlcnRhaW4gbmVpdGhlciBuZXdsaW5lcyBub3JcbiAgICAgICAgLy8gYW1wZXJzYW5kcyBhcmUgaW5jbHVkZWQuXG4gICAgICAgIGNoYXJhY3RlcnMgPSB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyc1xuICAgICAgICBjb2x1bW4gKz0gY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBhbnl0aGluZyBvdGhlciB0aGFuIGFuIGFtcGVyc2FuZCwgaW5jbHVkaW5nIG5ld2xpbmVzIGFuZCBFT0YuXG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gMTAgLy8gTGluZSBmZWVkXG4gICAgICApIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxpbmVzKytcbiAgICAgICAgY29sdW1uID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsdXNoKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHJlZHVjZWQgbm9kZXMsIGFuZCBhbnkgcG9zc2libGUgd2FybmluZ3MuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICAvLyBHZXQgY3VycmVudCBwb3NpdGlvbi5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICBvZmZzZXQ6IGluZGV4ICsgKHBvcy5vZmZzZXQgfHwgMClcbiAgICB9XG4gIH1cblxuICAvLyDigJxUaHJvd+KAnSBhIHBhcnNlLWVycm9yOiBhIHdhcm5pbmcuXG4gIGZ1bmN0aW9uIHBhcnNlRXJyb3IoY29kZSwgb2Zmc2V0KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbm93KClcblxuICAgIHBvc2l0aW9uLmNvbHVtbiArPSBvZmZzZXRcbiAgICBwb3NpdGlvbi5vZmZzZXQgKz0gb2Zmc2V0XG5cbiAgICBoYW5kbGVXYXJuaW5nLmNhbGwod2FybmluZ0NvbnRleHQsIG1lc3NhZ2VzW2NvZGVdLCBwb3NpdGlvbiwgY29kZSlcbiAgfVxuXG4gIC8vIEZsdXNoIGBxdWV1ZWAgKG5vcm1hbCB0ZXh0KS5cbiAgLy8gTWFjcm8gaW52b2tlZCBiZWZvcmUgZWFjaCBlbnRpdHkgYW5kIGF0IHRoZSBlbmQgb2YgYHZhbHVlYC5cbiAgLy8gRG9lcyBub3RoaW5nIHdoZW4gYHF1ZXVlYCBpcyBlbXB0eS5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICByZXN1bHQucHVzaChxdWV1ZSlcblxuICAgICAgaWYgKGhhbmRsZVRleHQpIHtcbiAgICAgICAgaGFuZGxlVGV4dC5jYWxsKHRleHRDb250ZXh0LCBxdWV1ZSwge3N0YXJ0OiBwcmV2LCBlbmQ6IG5vdygpfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSB1bmljb2RlIHJhbmdlLlxuZnVuY3Rpb24gcHJvaGliaXRlZChjb2RlKSB7XG4gIHJldHVybiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHx8IGNvZGUgPiAweDEwZmZmZlxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBkaXNhbGxvd2VkLlxuZnVuY3Rpb24gZGlzYWxsb3dlZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMHgwMDAxICYmIGNvZGUgPD0gMHgwMDA4KSB8fFxuICAgIGNvZGUgPT09IDB4MDAwYiB8fFxuICAgIChjb2RlID49IDB4MDAwZCAmJiBjb2RlIDw9IDB4MDAxZikgfHxcbiAgICAoY29kZSA+PSAweDAwN2YgJiYgY29kZSA8PSAweDAwOWYpIHx8XG4gICAgKGNvZGUgPj0gMHhmZGQwICYmIGNvZGUgPD0gMHhmZGVmKSB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZmIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmVcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==