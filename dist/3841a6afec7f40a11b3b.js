(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.remark-parse"],{

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "./node_modules/unherit/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var Parser = __webpack_require__(/*! ./lib/parser.js */ "./node_modules/remark-parse/lib/parser.js");

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/block-elements.json":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/block-elements.json ***!
  \***********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"address\",\"article\",\"aside\",\"base\",\"basefont\",\"blockquote\",\"body\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dialog\",\"dir\",\"div\",\"dl\",\"dt\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"legend\",\"li\",\"link\",\"main\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noframes\",\"ol\",\"optgroup\",\"option\",\"p\",\"param\",\"pre\",\"section\",\"source\",\"title\",\"summary\",\"table\",\"tbody\",\"td\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\"]");

/***/ }),

/***/ "./node_modules/remark-parse/lib/decode.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var entities = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/defaults.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/defaults.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements.json */ "./node_modules/remark-parse/lib/block-elements.json")
};


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/break.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/break.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/code-inline.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/delete.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/emphasis.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/escape.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/link.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/link.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/strong.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/tag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/url.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/url.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/parse.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/parse.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var removePosition = __webpack_require__(/*! unist-util-remove-position */ "./node_modules/unist-util-remove-position/index.js");

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = {line: 1, column: 1, offset: 0};
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/parser.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/parser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var toggle = __webpack_require__(/*! state-toggle */ "./node_modules/state-toggle/index.js");
var vfileLocation = __webpack_require__(/*! vfile-location */ "./node_modules/vfile-location/index.js");
var unescape = __webpack_require__(/*! ./unescape */ "./node_modules/remark-parse/lib/unescape.js");
var decode = __webpack_require__(/*! ./decode */ "./node_modules/remark-parse/lib/decode.js");
var tokenizer = __webpack_require__(/*! ./tokenizer */ "./node_modules/remark-parse/lib/tokenizer.js");

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(/*! ./set-options */ "./node_modules/remark-parse/lib/set-options.js");
proto.parse = __webpack_require__(/*! ./parse */ "./node_modules/remark-parse/lib/parse.js");

/* Expose `defaults`. */
proto.options = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
  newline: __webpack_require__(/*! ./tokenize/newline */ "./node_modules/remark-parse/lib/tokenize/newline.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "./node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "./node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "./node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "./node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "./node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "./node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "./node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "./node_modules/remark-parse/lib/tokenize/html-block.js"),
  footnote: __webpack_require__(/*! ./tokenize/footnote-definition */ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "./node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "./node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "./node_modules/remark-parse/lib/tokenize/paragraph.js")
};

proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "./node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "./node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "./node_modules/remark-parse/lib/tokenize/url.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "./node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "./node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "./node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "./node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "./node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "./node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "./node_modules/remark-parse/lib/tokenize/code-inline.js"),
  break: __webpack_require__(/*! ./tokenize/break */ "./node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "./node_modules/remark-parse/lib/tokenize/text.js")
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/set-options.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/set-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var escapes = __webpack_require__(/*! markdown-escapes */ "./node_modules/markdown-escapes/index.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error(
      'Invalid value `' + options + '` ' +
      'for setting `options`'
    );
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (
      whitespace(character) ||
      character === C_GT ||
      character === C_AT_SIGN ||
      (character === ':' && value.charAt(index + 1) === C_SLASH)
    ) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (
      character !== ':' ||
      value.charAt(index + 1) !== C_SLASH
    ) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {text: tokenizers.text};

  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers = tokenizers;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/break.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "./node_modules/remark-parse/lib/locate/break.js");

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({type: 'break'});
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character === C_NEWLINE ||
      character === C_TILDE ||
      character === C_TICK
    ) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (
      character === C_SPACE &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/code-inline */ "./node_modules/remark-parse/lib/locate/code-inline.js");

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/definition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false});

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT &&
    character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE &&
    !whitespace(character);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/delete.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/delete */ "./node_modules/remark-parse/lib/locate/delete.js");

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (
    !self.options.gfm ||
    value.charAt(0) !== C_TILDE ||
    value.charAt(1) !== C_TILDE ||
    whitespace(value.charAt(2))
  ) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_TILDE &&
      previous === C_TILDE &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var word = __webpack_require__(/*! is-word-character */ "./node_modules/is-word-character/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/emphasis */ "./node_modules/remark-parse/lib/locate/emphasis.js");

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/escape.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "./node_modules/remark-parse/lib/locate/escape.js");

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {type: 'break'};
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/footnote-definition.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (
    value.charAt(index) !== C_BRACKET_OPEN ||
    value.charAt(index + 1) !== C_CARET
  ) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (
    !depth ||
    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
  ) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (
    !settings.pedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (
      character !== C_SPACE &&
      character !== C_TAB &&
      character !== C_HASH
    ) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Za-z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
  ];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");
var tag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (
    !alphabetical(character) &&
    character !== '?' &&
    character !== '!' &&
    character !== '/'
  ) {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
    /* In GFM mode, brackets in code still count.
     * In all other modes, they don’t.  This empty
     * block prevents the next statements are
     * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {nonTerminated: false});

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/list.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
var getIndent = __webpack_require__(/*! ../util/get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");
var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "./node_modules/remark-parse/lib/util/remove-indentation.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - (size % TAB_SIZE);
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ?
    LIST_ORDERED_COMMONMARK_MARKERS :
    LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - (size % TAB_SIZE);
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - (size % TAB_SIZE);
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (
      currentMarker === C_ASTERISK ||
      currentMarker === C_UNDERSCORE ||
      currentMarker === C_DASH
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
      value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) +
      lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/newline.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (
        self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0)))
      )
    ) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/reference.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  /* Inline footnotes cannot have an identifier. */
  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/strong.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/strong */ "./node_modules/remark-parse/lib/locate/strong.js");

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (
    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
    value.charAt(++index) !== character
  ) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(prev))
    ) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/table.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {type: 'tableRow', children: []};

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (
    character !== C_ASTERISK &&
    character !== C_DASH &&
    character !== C_UNDERSCORE
  ) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (
      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
      (!character || character === C_NEWLINE)
    ) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({type: 'thematicBreak'});
    } else {
      return;
    }
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/url.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/url */ "./node_modules/remark-parse/lib/locate/url.js");

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      character === ')' ||
      character === ']'
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {nonTerminated: false}),
    children: content
  });
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line ||
      end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          (!method.notInList || !self.inList) &&
          (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /* Update line, column, and offset based on
     * `value`. */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /* Get the current position. */
    function now() {
      var pos = {line: line, column: column};

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /* Store position information for a node. */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this ' +
            'warning on http://git.io/vg5Ft'
          ),
          now()
        );
      }
    }

    /* Mark position and patch `node.position`. */
    function position() {
      var before = now();

      return update;

      /* Add the position to a node. */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (
        prev &&
        node.type === prev.type &&
        node.type in MERGEABLE_NODES &&
        mergeable(prev) &&
        mergeable(node)
      ) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /* Test the position, after eating, and reverse
       * to a not-eaten state. */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/unescape.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/unescape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/get-indentation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/* Gets indentation information for a line. */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return {indent: indent, stops: stops};
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/util/html.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/html.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
  openTag + '|' +
  closeTag + '|' +
  comment + '|' +
  processing + '|' +
  declaration + '|' +
  cdata +
')');


/***/ }),

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/interrupt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/normalize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "./node_modules/collapse-white-space/index.js");

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var getIndent = __webpack_require__(/*! ./get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(
        index in stops ? stops[index] + 1 : 0
      );
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3NldC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2F1dG8tbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2JyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtZmVuY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2Zvb3Rub3RlLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaGVhZGluZy1hdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaGVhZGluZy1zZXRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9odG1sLWlubGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvbmV3bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3N0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9nZXQtaW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYixjQUFjLG1CQUFPLENBQUMsZ0RBQVM7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLGdEQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxrRUFBaUI7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGdEQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxD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VyxtQkFBTyxDQUFDLHdFQUFxQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzNPYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsNERBQWU7QUFDcEMsV0FBVyxtQkFBTyxDQUFDLHdFQUFxQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFYixpQkFBaUIsbUJBQU8sQ0FBQyxnRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLG9GQUF1Qjs7QUFFNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMvR2E7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQXlCO0FBQ2xELGdCQUFnQixtQkFBTyxDQUFDLDRFQUFtQjs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxxQkFBcUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDclJhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGdGQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsMEVBQWtCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNEYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsMENBQU07QUFDekIsV0FBVyxtQkFBTyxDQUFDLG9FQUFtQjtBQUN0QyxpQkFBaUIsbUJBQU8sQ0FBQyxnRkFBeUI7QUFDbEQsYUFBYSxtQkFBTyxDQUFDLDhFQUFvQjs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDBFQUFrQjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQXlCO0FBQ2xELGdCQUFnQixtQkFBTyxDQUFDLDRFQUFtQjs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLEVBQUU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3hMYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVJYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzFHYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBYzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REOzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxhQUFhLG1CQUFPLENBQUMsb0VBQWU7QUFDcEMsVUFBVSxtQkFBTyxDQUFDLGtFQUFjOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7Ozs7Ozs7Ozs7Ozs7QUNyRGE7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyxzRUFBZ0I7O0FBRXJDO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0VBQXdFLHFCQUFxQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2WWE7O0FBRWI7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLDBDQUFNO0FBQ3pCLGFBQWEsbUJBQU8sQ0FBQyw0REFBZTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsZ0JBQWdCLG1CQUFPLENBQUMsd0ZBQXlCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLDhGQUE0QjtBQUN2RCxnQkFBZ0IsbUJBQU8sQ0FBQyw0RUFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxJQUFJO0FBQ3hEO0FBQ0EscUNBQXFDLElBQUk7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDelFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3pEYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0I7QUFDbEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQXlCO0FBQ2xELGFBQWEsbUJBQU8sQ0FBQyxvRUFBZTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQy9JYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFVYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ2E7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNhOztBQUViLHlCQUF5QixtQkFBTyxDQUFDLDBFQUFzQjs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViLFdBQVcsbUJBQU8sQ0FBQywwQ0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsNERBQWU7QUFDcEMsZ0JBQWdCLG1CQUFPLENBQUMsa0ZBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjM4NDFhNmFmZWM3ZjQwYTExYjNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdW5oZXJpdCA9IHJlcXVpcmUoJ3VuaGVyaXQnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG52YXIgUGFyc2VyID0gcmVxdWlyZSgnLi9saWIvcGFyc2VyLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG5wYXJzZS5QYXJzZXIgPSBQYXJzZXI7XG5cbmZ1bmN0aW9uIHBhcnNlKG9wdGlvbnMpIHtcbiAgdmFyIExvY2FsID0gdW5oZXJpdChQYXJzZXIpO1xuICBMb2NhbC5wcm90b3R5cGUub3B0aW9ucyA9IHh0ZW5kKExvY2FsLnByb3RvdHlwZS5vcHRpb25zLCB0aGlzLmRhdGEoJ3NldHRpbmdzJyksIG9wdGlvbnMpO1xuICB0aGlzLlBhcnNlciA9IExvY2FsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xudmFyIGVudGl0aWVzID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuXG4vKiBGYWN0b3J5IHRvIGNyZWF0ZSBhbiBlbnRpdHkgZGVjb2Rlci4gKi9cbmZ1bmN0aW9uIGZhY3RvcnkoY3R4KSB7XG4gIGRlY29kZXIucmF3ID0gZGVjb2RlUmF3O1xuXG4gIHJldHVybiBkZWNvZGVyO1xuXG4gIC8qIE5vcm1hbGl6ZSBgcG9zaXRpb25gIHRvIGFkZCBhbiBgaW5kZW50YC4gKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHBvc2l0aW9uKSB7XG4gICAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0O1xuICAgIHZhciBsaW5lID0gcG9zaXRpb24ubGluZTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICB3aGlsZSAoKytsaW5lKSB7XG4gICAgICBpZiAoIShsaW5lIGluIG9mZnNldHMpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaCgob2Zmc2V0c1tsaW5lXSB8fCAwKSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogcG9zaXRpb24sXG4gICAgICBpbmRlbnQ6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICAvKiBIYW5kbGUgYSB3YXJuaW5nLlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9wYXJzZS1lbnRpdGllc1xuICAgKiBmb3IgdGhlIHdhcm5pbmdzLiAqL1xuICBmdW5jdGlvbiBoYW5kbGVXYXJuaW5nKHJlYXNvbiwgcG9zaXRpb24sIGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN0eC5maWxlLm1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbik7XG4gIH1cblxuICAvKiBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byB0ZXh0LW5vZGVzLiAqL1xuICBmdW5jdGlvbiBkZWNvZGVyKHZhbHVlLCBwb3NpdGlvbiwgaGFuZGxlcikge1xuICAgIGVudGl0aWVzKHZhbHVlLCB7XG4gICAgICBwb3NpdGlvbjogbm9ybWFsaXplKHBvc2l0aW9uKSxcbiAgICAgIHdhcm5pbmc6IGhhbmRsZVdhcm5pbmcsXG4gICAgICB0ZXh0OiBoYW5kbGVyLFxuICAgICAgcmVmZXJlbmNlOiBoYW5kbGVyLFxuICAgICAgdGV4dENvbnRleHQ6IGN0eCxcbiAgICAgIHJlZmVyZW5jZUNvbnRleHQ6IGN0eFxuICAgIH0pO1xuICB9XG5cbiAgLyogRGVjb2RlIGB2YWx1ZWAgKGF0IGBwb3NpdGlvbmApIGludG8gYSBzdHJpbmcuICovXG4gIGZ1bmN0aW9uIGRlY29kZVJhdyh2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZW50aXRpZXModmFsdWUsIHh0ZW5kKG9wdGlvbnMsIHtcbiAgICAgIHBvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLFxuICAgICAgd2FybmluZzogaGFuZGxlV2FybmluZ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIGdmbTogdHJ1ZSxcbiAgY29tbW9ubWFyazogZmFsc2UsXG4gIGZvb3Rub3RlczogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgYmxvY2tzOiByZXF1aXJlKCcuL2Jsb2NrLWVsZW1lbnRzLmpzb24nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGZyb21JbmRleCk7XG5cbiAgd2hpbGUgKGluZGV4ID4gZnJvbUluZGV4KSB7XG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCAtIDEpICE9PSAnICcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGluZGV4LS07XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlO1xuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignYCcsIGZyb21JbmRleCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlO1xuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignfn4nLCBmcm9tSW5kZXgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKicsIGZyb21JbmRleCk7XG4gIHZhciB1bmRlcnNjb3JlID0gdmFsdWUuaW5kZXhPZignXycsIGZyb21JbmRleCk7XG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrO1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlzaztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdcXFxcJywgZnJvbUluZGV4KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsaW5rID0gdmFsdWUuaW5kZXhPZignWycsIGZyb21JbmRleCk7XG4gIHZhciBpbWFnZSA9IHZhbHVlLmluZGV4T2YoJyFbJywgZnJvbUluZGV4KTtcblxuICBpZiAoaW1hZ2UgPT09IC0xKSB7XG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICAvKiBMaW5rIGNhbiBuZXZlciBiZSBgLTFgIGlmIGFuIGltYWdlIGlzIGZvdW5kLCBzbyB3ZSBkb27igJl0IG5lZWRcbiAgICogdG8gY2hlY2sgZm9yIHRoYXQgOikgKi9cbiAgcmV0dXJuIGxpbmsgPCBpbWFnZSA/IGxpbmsgOiBpbWFnZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBhc3RlcmlzayA9IHZhbHVlLmluZGV4T2YoJyoqJywgZnJvbUluZGV4KTtcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfXycsIGZyb21JbmRleCk7XG5cbiAgaWYgKHVuZGVyc2NvcmUgPT09IC0xKSB7XG4gICAgcmV0dXJuIGFzdGVyaXNrO1xuICB9XG5cbiAgaWYgKGFzdGVyaXNrID09PSAtMSkge1xuICAgIHJldHVybiB1bmRlcnNjb3JlO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVyc2NvcmUgPCBhc3RlcmlzayA/IHVuZGVyc2NvcmUgOiBhc3Rlcmlzaztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCc8JywgZnJvbUluZGV4KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbnZhciBQUk9UT0NPTFMgPSBbJ2h0dHBzOi8vJywgJ2h0dHA6Ly8nLCAnbWFpbHRvOiddO1xuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgbGVuZ3RoID0gUFJPVE9DT0xTLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBtaW4gPSAtMTtcbiAgdmFyIHBvc2l0aW9uO1xuXG4gIGlmICghdGhpcy5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZS5pbmRleE9mKFBST1RPQ09MU1tpbmRleF0sIGZyb21JbmRleCk7XG5cbiAgICBpZiAocG9zaXRpb24gIT09IC0xICYmIChwb3NpdGlvbiA8IG1pbiB8fCBtaW4gPT09IC0xKSkge1xuICAgICAgbWluID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcbnZhciByZW1vdmVQb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcmVtb3ZlLXBvc2l0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBFWFBSRVNTSU9OX0xJTkVfQlJFQUtTID0gL1xcclxcbnxcXHIvZztcblxuLyogUGFyc2UgdGhlIGJvdW5kIGZpbGUuICovXG5mdW5jdGlvbiBwYXJzZSgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdmFsdWUgPSBTdHJpbmcoc2VsZi5maWxlKTtcbiAgdmFyIHN0YXJ0ID0ge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfTtcbiAgdmFyIGNvbnRlbnQgPSB4dGVuZChzdGFydCk7XG4gIHZhciBub2RlO1xuXG4gIC8qIENsZWFuIG5vbi11bml4IG5ld2xpbmVzOiBgXFxyXFxuYCBhbmQgYFxccmAgYXJlIGFsbFxuICAgKiBjaGFuZ2VkIHRvIGBcXG5gLiAgVGhpcyBzaG91bGQgbm90IGFmZmVjdCBwb3NpdGlvbmFsXG4gICAqIGluZm9ybWF0aW9uLiAqL1xuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoRVhQUkVTU0lPTl9MSU5FX0JSRUFLUywgQ19ORVdMSU5FKTtcblxuICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcblxuICAgIGNvbnRlbnQuY29sdW1uKys7XG4gICAgY29udGVudC5vZmZzZXQrKztcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogJ3Jvb3QnLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplQmxvY2sodmFsdWUsIGNvbnRlbnQpLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IHNlbGYuZW9mIHx8IHh0ZW5kKHN0YXJ0KVxuICAgIH1cbiAgfTtcblxuICBpZiAoIXNlbGYub3B0aW9ucy5wb3NpdGlvbikge1xuICAgIHJlbW92ZVBvc2l0aW9uKG5vZGUsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG52YXIgdG9nZ2xlID0gcmVxdWlyZSgnc3RhdGUtdG9nZ2xlJyk7XG52YXIgdmZpbGVMb2NhdGlvbiA9IHJlcXVpcmUoJ3ZmaWxlLWxvY2F0aW9uJyk7XG52YXIgdW5lc2NhcGUgPSByZXF1aXJlKCcuL3VuZXNjYXBlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciB0b2tlbml6ZXIgPSByZXF1aXJlKCcuL3Rva2VuaXplcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcblxuZnVuY3Rpb24gUGFyc2VyKGRvYywgZmlsZSkge1xuICB0aGlzLmZpbGUgPSBmaWxlO1xuICB0aGlzLm9mZnNldCA9IHt9O1xuICB0aGlzLm9wdGlvbnMgPSB4dGVuZCh0aGlzLm9wdGlvbnMpO1xuICB0aGlzLnNldE9wdGlvbnMoe30pO1xuXG4gIHRoaXMuaW5MaXN0ID0gZmFsc2U7XG4gIHRoaXMuaW5CbG9jayA9IGZhbHNlO1xuICB0aGlzLmluTGluayA9IGZhbHNlO1xuICB0aGlzLmF0U3RhcnQgPSB0cnVlO1xuXG4gIHRoaXMudG9PZmZzZXQgPSB2ZmlsZUxvY2F0aW9uKGZpbGUpLnRvT2Zmc2V0O1xuICB0aGlzLnVuZXNjYXBlID0gdW5lc2NhcGUodGhpcywgJ2VzY2FwZScpO1xuICB0aGlzLmRlY29kZSA9IGRlY29kZSh0aGlzKTtcbn1cblxudmFyIHByb3RvID0gUGFyc2VyLnByb3RvdHlwZTtcblxuLyogRXhwb3NlIGNvcmUuICovXG5wcm90by5zZXRPcHRpb25zID0gcmVxdWlyZSgnLi9zZXQtb3B0aW9ucycpO1xucHJvdG8ucGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cbi8qIEV4cG9zZSBgZGVmYXVsdHNgLiAqL1xucHJvdG8ub3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyogRW50ZXIgYW5kIGV4aXQgaGVscGVycy4gKi9cbnByb3RvLmV4aXRTdGFydCA9IHRvZ2dsZSgnYXRTdGFydCcsIHRydWUpO1xucHJvdG8uZW50ZXJMaXN0ID0gdG9nZ2xlKCdpbkxpc3QnLCBmYWxzZSk7XG5wcm90by5lbnRlckxpbmsgPSB0b2dnbGUoJ2luTGluaycsIGZhbHNlKTtcbnByb3RvLmVudGVyQmxvY2sgPSB0b2dnbGUoJ2luQmxvY2snLCBmYWxzZSk7XG5cbi8qIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgcGFyYWdyYXBoOlxuICpcbiAqIGBgYG1hcmtkb3duXG4gKiBBIHBhcmFncmFwaCwgZm9sbG93ZWQgYnkgYSB0aGVtYXRpYyBicmVhay5cbiAqIF9fX1xuICogYGBgXG4gKlxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ1cbiAqIHRoZSBwYXJhZ3JhcGguICovXG5wcm90by5pbnRlcnJ1cHRQYXJhZ3JhcGggPSBbXG4gIFsndGhlbWF0aWNCcmVhayddLFxuICBbJ2F0eEhlYWRpbmcnXSxcbiAgWydmZW5jZWRDb2RlJ10sXG4gIFsnYmxvY2txdW90ZSddLFxuICBbJ2h0bWwnXSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dLFxuICBbJ2Zvb3Rub3RlJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl07XG5cbi8qIE5vZGVzIHRoYXQgY2FuIGludGVydXB0IGEgbGlzdDpcbiAqXG4gKiBgYGBtYXJrZG93blxuICogLSBPbmVcbiAqIF9fX1xuICogYGBgXG4gKlxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSB0aGVtYXRpYyBicmVhayDigJxpbnRlcnVwdHPigJ1cbiAqIHRoZSBsaXN0LiAqL1xucHJvdG8uaW50ZXJydXB0TGlzdCA9IFtcbiAgWydhdHhIZWFkaW5nJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2ZlbmNlZENvZGUnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZm9vdG5vdGUnLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXTtcblxuLyogTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBibG9ja3F1b3RlOlxuICpcbiAqIGBgYG1hcmtkb3duXG4gKiA+IEEgcGFyYWdyYXBoLlxuICogX19fXG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnVxuICogdGhlIGJsb2NrcXVvdGUuICovXG5wcm90by5pbnRlcnJ1cHRCbG9ja3F1b3RlID0gW1xuICBbJ2luZGVudGVkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnYXR4SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnc2V0ZXh0SGVhZGluZycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsndGhlbWF0aWNCcmVhaycsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnaHRtbCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnbGlzdCcsIHtjb21tb25tYXJrOiB0cnVlfV0sXG4gIFsnZGVmaW5pdGlvbicsIHtjb21tb25tYXJrOiBmYWxzZX1dLFxuICBbJ2Zvb3Rub3RlJywge2NvbW1vbm1hcms6IGZhbHNlfV1cbl07XG5cbi8qIEhhbmRsZXJzLiAqL1xucHJvdG8uYmxvY2tUb2tlbml6ZXJzID0ge1xuICBuZXdsaW5lOiByZXF1aXJlKCcuL3Rva2VuaXplL25ld2xpbmUnKSxcbiAgaW5kZW50ZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQnKSxcbiAgZmVuY2VkQ29kZTogcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLWZlbmNlZCcpLFxuICBibG9ja3F1b3RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2Jsb2NrcXVvdGUnKSxcbiAgYXR4SGVhZGluZzogcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eCcpLFxuICB0aGVtYXRpY0JyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL3RoZW1hdGljLWJyZWFrJyksXG4gIGxpc3Q6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGlzdCcpLFxuICBzZXRleHRIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctc2V0ZXh0JyksXG4gIGh0bWw6IHJlcXVpcmUoJy4vdG9rZW5pemUvaHRtbC1ibG9jaycpLFxuICBmb290bm90ZTogcmVxdWlyZSgnLi90b2tlbml6ZS9mb290bm90ZS1kZWZpbml0aW9uJyksXG4gIGRlZmluaXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVmaW5pdGlvbicpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90b2tlbml6ZS90YWJsZScpLFxuICBwYXJhZ3JhcGg6IHJlcXVpcmUoJy4vdG9rZW5pemUvcGFyYWdyYXBoJylcbn07XG5cbnByb3RvLmlubGluZVRva2VuaXplcnMgPSB7XG4gIGVzY2FwZTogcmVxdWlyZSgnLi90b2tlbml6ZS9lc2NhcGUnKSxcbiAgYXV0b0xpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvYXV0by1saW5rJyksXG4gIHVybDogcmVxdWlyZSgnLi90b2tlbml6ZS91cmwnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWlubGluZScpLFxuICBsaW5rOiByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmsnKSxcbiAgcmVmZXJlbmNlOiByZXF1aXJlKCcuL3Rva2VuaXplL3JlZmVyZW5jZScpLFxuICBzdHJvbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvc3Ryb25nJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL3Rva2VuaXplL2VtcGhhc2lzJyksXG4gIGRlbGV0aW9uOiByZXF1aXJlKCcuL3Rva2VuaXplL2RlbGV0ZScpLFxuICBjb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5saW5lJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL3Rva2VuaXplL2JyZWFrJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGV4dCcpXG59O1xuXG4vKiBFeHBvc2UgcHJlY2VkZW5jZS4gKi9cbnByb3RvLmJsb2NrTWV0aG9kcyA9IGtleXMocHJvdG8uYmxvY2tUb2tlbml6ZXJzKTtcbnByb3RvLmlubGluZU1ldGhvZHMgPSBrZXlzKHByb3RvLmlubGluZVRva2VuaXplcnMpO1xuXG4vKiBUb2tlbml6ZXJzLiAqL1xucHJvdG8udG9rZW5pemVCbG9jayA9IHRva2VuaXplcignYmxvY2snKTtcbnByb3RvLnRva2VuaXplSW5saW5lID0gdG9rZW5pemVyKCdpbmxpbmUnKTtcbnByb3RvLnRva2VuaXplRmFjdG9yeSA9IHRva2VuaXplcjtcblxuLyogR2V0IGFsbCBrZXlzIGluIGB2YWx1ZWAuICovXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcblxuICBmb3IgKGtleSBpbiB2YWx1ZSkge1xuICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xudmFyIGVzY2FwZXMgPSByZXF1aXJlKCdtYXJrZG93bi1lc2NhcGVzJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0T3B0aW9ucztcblxuZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGN1cnJlbnQgPSBzZWxmLm9wdGlvbnM7XG4gIHZhciBrZXk7XG4gIHZhciB2YWx1ZTtcblxuICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnSW52YWxpZCB2YWx1ZSBgJyArIG9wdGlvbnMgKyAnYCAnICtcbiAgICAgICdmb3Igc2V0dGluZyBgb3B0aW9uc2AnXG4gICAgKTtcbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgdmFsdWUgPSBvcHRpb25zW2tleV07XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGtleSAhPT0gJ2Jsb2NrcycgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHx8XG4gICAgICAoa2V5ID09PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGAnICsgdmFsdWUgKyAnYCBmb3Igc2V0dGluZyBgb3B0aW9ucy4nICsga2V5ICsgJ2AnKTtcbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHNlbGYuZXNjYXBlID0gZXNjYXBlcyhvcHRpb25zKTtcblxuICByZXR1cm4gc2VsZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJyk7XG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF1dG9MaW5rO1xuYXV0b0xpbmsubG9jYXRvciA9IGxvY2F0ZTtcbmF1dG9MaW5rLm5vdEluTGluayA9IHRydWU7XG5cbnZhciBDX0xUID0gJzwnO1xudmFyIENfR1QgPSAnPic7XG52YXIgQ19BVF9TSUdOID0gJ0AnO1xudmFyIENfU0xBU0ggPSAnLyc7XG52YXIgTUFJTFRPID0gJ21haWx0bzonO1xudmFyIE1BSUxUT19MRU5HVEggPSBNQUlMVE8ubGVuZ3RoO1xuXG4vKiBUb2tlbmlzZSBhIGxpbmsuICovXG5mdW5jdGlvbiBhdXRvTGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGY7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIGluZGV4O1xuICB2YXIgcXVldWU7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBoYXNBdENoYXJhY3RlcjtcbiAgdmFyIGxpbms7XG4gIHZhciBub3c7XG4gIHZhciBjb250ZW50O1xuICB2YXIgdG9rZW5pemVycztcbiAgdmFyIGV4aXQ7XG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gQ19MVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlbGYgPSB0aGlzO1xuICBzdWJ2YWx1ZSA9ICcnO1xuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIGluZGV4ID0gMDtcbiAgcXVldWUgPSAnJztcbiAgaGFzQXRDaGFyYWN0ZXIgPSBmYWxzZTtcbiAgbGluayA9ICcnO1xuXG4gIGluZGV4Kys7XG4gIHN1YnZhbHVlID0gQ19MVDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgd2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IENfR1QgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gQ19BVF9TSUdOIHx8XG4gICAgICAoY2hhcmFjdGVyID09PSAnOicgJiYgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IENfU0xBU0gpXG4gICAgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsaW5rICs9IHF1ZXVlO1xuICBxdWV1ZSA9ICcnO1xuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIGxpbmsgKz0gY2hhcmFjdGVyO1xuICBpbmRleCsrO1xuXG4gIGlmIChjaGFyYWN0ZXIgPT09IENfQVRfU0lHTikge1xuICAgIGhhc0F0Q2hhcmFjdGVyID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgIT09ICc6JyB8fFxuICAgICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IENfU0xBU0hcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rICs9IENfU0xBU0g7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8IGNoYXJhY3RlciA9PT0gQ19HVCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gIGlmICghcXVldWUgfHwgY2hhcmFjdGVyICE9PSBDX0dUKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsaW5rICs9IHF1ZXVlO1xuICBjb250ZW50ID0gbGluaztcbiAgc3VidmFsdWUgKz0gbGluayArIGNoYXJhY3RlcjtcbiAgbm93ID0gZWF0Lm5vdygpO1xuICBub3cuY29sdW1uKys7XG4gIG5vdy5vZmZzZXQrKztcblxuICBpZiAoaGFzQXRDaGFyYWN0ZXIpIHtcbiAgICBpZiAobGluay5zbGljZSgwLCBNQUlMVE9fTEVOR1RIKS50b0xvd2VyQ2FzZSgpID09PSBNQUlMVE8pIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cihNQUlMVE9fTEVOR1RIKTtcbiAgICAgIG5vdy5jb2x1bW4gKz0gTUFJTFRPX0xFTkdUSDtcbiAgICAgIG5vdy5vZmZzZXQgKz0gTUFJTFRPX0xFTkdUSDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluayA9IE1BSUxUTyArIGxpbms7XG4gICAgfVxuICB9XG5cbiAgLyogVGVtcG9yYXJpbHkgcmVtb3ZlIGFsbCB0b2tlbml6ZXJzIGV4Y2VwdCB0ZXh0IGluIGF1dG9saW5rcy4gKi9cbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVycztcbiAgc2VsZi5pbmxpbmVUb2tlbml6ZXJzID0ge3RleHQ6IHRva2VuaXplcnMudGV4dH07XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKCk7XG5cbiAgY29udGVudCA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KTtcblxuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB0b2tlbml6ZXJzO1xuICBleGl0KCk7XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6IGRlY29kZShsaW5rLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY29udGVudFxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJyk7XG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3F1b3RlO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfR1QgPSAnPic7XG5cbi8qIFRva2VuaXNlIGEgYmxvY2txdW90ZS4gKi9cbmZ1bmN0aW9uIGJsb2NrcXVvdGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG9mZnNldHMgPSBzZWxmLm9mZnNldDtcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVycztcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0QmxvY2txdW90ZTtcbiAgdmFyIG5vdyA9IGVhdC5ub3coKTtcbiAgdmFyIGN1cnJlbnRMaW5lID0gbm93LmxpbmU7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIGNvbnRlbnRzID0gW107XG4gIHZhciBpbmRlbnRzID0gW107XG4gIHZhciBhZGQ7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciByZXN0O1xuICB2YXIgbmV4dEluZGV4O1xuICB2YXIgY29udGVudDtcbiAgdmFyIGxpbmU7XG4gIHZhciBzdGFydEluZGV4O1xuICB2YXIgcHJlZml4ZWQ7XG4gIHZhciBleGl0O1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19HVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSwgaW5kZXgpO1xuICAgIHN0YXJ0SW5kZXggPSBpbmRleDtcbiAgICBwcmVmaXhlZCA9IGZhbHNlO1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIG5leHRJbmRleCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiYgY2hhcmFjdGVyICE9PSBDX1RBQikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gQ19HVCkge1xuICAgICAgaW5kZXgrKztcbiAgICAgIHByZWZpeGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4O1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dEluZGV4KTtcblxuICAgIGlmICghcHJlZml4ZWQgJiYgIXRyaW0oY29udGVudCkpIHtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghcHJlZml4ZWQpIHtcbiAgICAgIHJlc3QgPSB2YWx1ZS5zbGljZShpbmRleCk7XG5cbiAgICAgIC8qIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlXG4gICAgICAgKiBibG9jay4gKi9cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCByZXN0LCB0cnVlXSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gY29udGVudCA6IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleCk7XG5cbiAgICBpbmRlbnRzLnB1c2goaW5kZXggLSBzdGFydEluZGV4KTtcbiAgICB2YWx1ZXMucHVzaChsaW5lKTtcbiAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxO1xuICB9XG5cbiAgaW5kZXggPSAtMTtcbiAgbGVuZ3RoID0gaW5kZW50cy5sZW5ndGg7XG4gIGFkZCA9IGVhdCh2YWx1ZXMuam9pbihDX05FV0xJTkUpKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbY3VycmVudExpbmVdID0gKG9mZnNldHNbY3VycmVudExpbmVdIHx8IDApICsgaW5kZW50c1tpbmRleF07XG4gICAgY3VycmVudExpbmUrKztcbiAgfVxuXG4gIGV4aXQgPSBzZWxmLmVudGVyQmxvY2soKTtcbiAgY29udGVudHMgPSBzZWxmLnRva2VuaXplQmxvY2soY29udGVudHMuam9pbihDX05FV0xJTkUpLCBub3cpO1xuICBleGl0KCk7XG5cbiAgcmV0dXJuIGFkZCh7XG4gICAgdHlwZTogJ2Jsb2NrcXVvdGUnLFxuICAgIGNoaWxkcmVuOiBjb250ZW50c1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcmRCcmVhaztcbmhhcmRCcmVhay5sb2NhdG9yID0gbG9jYXRlO1xuXG52YXIgTUlOX0JSRUFLX0xFTkdUSCA9IDI7XG5cbmZ1bmN0aW9uIGhhcmRCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBxdWV1ZSA9ICcnO1xuICB2YXIgY2hhcmFjdGVyO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG4gICAgICBpZiAoaW5kZXggPCBNSU5fQlJFQUtfTEVOR1RIKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuXG4gICAgICByZXR1cm4gZWF0KHF1ZXVlKSh7dHlwZTogJ2JyZWFrJ30pO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgIT09ICcgJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmZW5jZWRDb2RlO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfVElMREUgPSAnfic7XG52YXIgQ19USUNLID0gJ2AnO1xuXG52YXIgTUlOX0ZFTkNFX0NPVU5UID0gMztcbnZhciBDT0RFX0lOREVOVF9DT1VOVCA9IDQ7XG5cbmZ1bmN0aW9uIGZlbmNlZENvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNldHRpbmdzID0gc2VsZi5vcHRpb25zO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBmZW5jZUNvdW50O1xuICB2YXIgbWFya2VyO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgZmxhZztcbiAgdmFyIHF1ZXVlO1xuICB2YXIgY29udGVudDtcbiAgdmFyIGV4ZGVudGVkQ29udGVudDtcbiAgdmFyIGNsb3Npbmc7XG4gIHZhciBleGRlbnRlZENsb3Npbmc7XG4gIHZhciBpbmRlbnQ7XG4gIHZhciBub3c7XG5cbiAgaWYgKCFzZXR0aW5ncy5nZm0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBFYXQgaW5pdGlhbCBzcGFjaW5nLiAqL1xuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGluZGVudCA9IGluZGV4O1xuXG4gIC8qIEVhdCB0aGUgZmVuY2UuICovXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gQ19USUxERSAmJiBjaGFyYWN0ZXIgIT09IENfVElDSykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluZGV4Kys7XG4gIG1hcmtlciA9IGNoYXJhY3RlcjtcbiAgZmVuY2VDb3VudCA9IDE7XG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgZmVuY2VDb3VudCsrO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoZmVuY2VDb3VudCA8IE1JTl9GRU5DRV9DT1VOVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIEVhdCBzcGFjaW5nIGJlZm9yZSBmbGFnLiAqL1xuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIC8qIEVhdCBmbGFnLiAqL1xuICBmbGFnID0gJyc7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09IENfVElMREUgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gQ19USUNLXG4gICAgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1NQQUNFIHx8IGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhZyArPSBxdWV1ZSArIGNoYXJhY3RlcjtcbiAgICAgIHF1ZXVlID0gJyc7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgaWYgKGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIgIT09IENfTkVXTElORSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKTtcbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoO1xuXG4gIHN1YnZhbHVlICs9IGZsYWc7XG4gIGZsYWcgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShmbGFnKSwgbm93KTtcblxuICBpZiAocXVldWUpIHtcbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgfVxuXG4gIHF1ZXVlID0gJyc7XG4gIGNsb3NpbmcgPSAnJztcbiAgZXhkZW50ZWRDbG9zaW5nID0gJyc7XG4gIGNvbnRlbnQgPSAnJztcbiAgZXhkZW50ZWRDb250ZW50ID0gJyc7XG5cbiAgLyogRWF0IGNvbnRlbnQuICovXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgY29udGVudCArPSBjbG9zaW5nO1xuICAgIGV4ZGVudGVkQ29udGVudCArPSBleGRlbnRlZENsb3Npbmc7XG4gICAgY2xvc2luZyA9ICcnO1xuICAgIGV4ZGVudGVkQ2xvc2luZyA9ICcnO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FKSB7XG4gICAgICBjb250ZW50ICs9IGNoYXJhY3RlcjtcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyogQWRkIHRoZSBuZXdsaW5lIHRvIGBzdWJ2YWx1ZWAgaWYgaXRzIHRoZSBmaXJzdFxuICAgICAqIGNoYXJhY3Rlci4gIE90aGVyd2lzZSwgYWRkIGl0IHRvIHRoZSBgY2xvc2luZ2BcbiAgICAgKiBxdWV1ZS4gKi9cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgY2xvc2luZyArPSBjaGFyYWN0ZXI7XG4gICAgICBleGRlbnRlZENsb3NpbmcgKz0gY2hhcmFjdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgcXVldWUgPSAnJztcbiAgICBpbmRleCsrO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGNsb3NpbmcgKz0gcXVldWU7XG4gICAgZXhkZW50ZWRDbG9zaW5nICs9IHF1ZXVlLnNsaWNlKGluZGVudCk7XG5cbiAgICBpZiAocXVldWUubGVuZ3RoID49IENPREVfSU5ERU5UX0NPVU5UKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZTtcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWU7XG5cbiAgICBpZiAocXVldWUubGVuZ3RoIDwgZmVuY2VDb3VudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcXVldWUgPSAnJztcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlcjtcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgY2xvc2luZztcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2NvZGUnLFxuICAgIGxhbmc6IGZsYWcgfHwgbnVsbCxcbiAgICB2YWx1ZTogdHJpbShleGRlbnRlZENvbnRlbnQpXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50ZWRDb2RlO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xuXG52YXIgQ09ERV9JTkRFTlRfQ09VTlQgPSA0O1xudmFyIENPREVfSU5ERU5UID0gcmVwZWF0KENfU1BBQ0UsIENPREVfSU5ERU5UX0NPVU5UKTtcblxuLyogVG9rZW5pc2UgaW5kZW50ZWQgY29kZS4gKi9cbmZ1bmN0aW9uIGluZGVudGVkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZSA9ICcnO1xuICB2YXIgY29udGVudCA9ICcnO1xuICB2YXIgc3VidmFsdWVRdWV1ZSA9ICcnO1xuICB2YXIgY29udGVudFF1ZXVlID0gJyc7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBibGFua1F1ZXVlO1xuICB2YXIgaW5kZW50O1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChpbmRlbnQpIHtcbiAgICAgIGluZGVudCA9IGZhbHNlO1xuXG4gICAgICBzdWJ2YWx1ZSArPSBzdWJ2YWx1ZVF1ZXVlO1xuICAgICAgY29udGVudCArPSBjb250ZW50UXVldWU7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlID0gJyc7XG4gICAgICBjb250ZW50UXVldWUgPSAnJztcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXI7XG4gICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXI7XG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRRdWV1ZSA9IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIHN1YnZhbHVlUXVldWUgPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgY29udGVudCArPSBjaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBDX1NQQUNFICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAzKSA9PT0gY2hhcmFjdGVyXG4gICAgKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IENPREVfSU5ERU5UO1xuICAgICAgaW5kZXggKz0gMztcbiAgICAgIGluZGVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsYW5rUXVldWUgPSAnJztcblxuICAgICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gQ19UQUIgfHwgY2hhcmFjdGVyID09PSBDX1NQQUNFKSB7XG4gICAgICAgIGJsYW5rUXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfTkVXTElORSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VidmFsdWVRdWV1ZSArPSBibGFua1F1ZXVlICsgY2hhcmFjdGVyO1xuICAgICAgY29udGVudFF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGVudCkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgIGxhbmc6IG51bGwsXG4gICAgICB2YWx1ZTogdHJpbShjb250ZW50KVxuICAgIH0pO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvY29kZS1pbmxpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmxpbmVDb2RlO1xuaW5saW5lQ29kZS5sb2NhdG9yID0gbG9jYXRlO1xuXG52YXIgQ19USUNLID0gJ2AnO1xuXG4vKiBUb2tlbmlzZSBpbmxpbmUgY29kZS4gKi9cbmZ1bmN0aW9uIGlubGluZUNvZGUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBxdWV1ZSA9ICcnO1xuICB2YXIgdGlja1F1ZXVlID0gJyc7XG4gIHZhciBjb250ZW50UXVldWU7XG4gIHZhciBzdWJxdWV1ZTtcbiAgdmFyIGNvdW50O1xuICB2YXIgb3BlbmluZ0NvdW50O1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBmb3VuZDtcbiAgdmFyIG5leHQ7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IENfVElDSykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gQ19USUNLO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgPSBxdWV1ZTtcbiAgb3BlbmluZ0NvdW50ID0gaW5kZXg7XG4gIHF1ZXVlID0gJyc7XG4gIG5leHQgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICBjb3VudCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gbmV4dDtcbiAgICBuZXh0ID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMSk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1RJQ0spIHtcbiAgICAgIGNvdW50Kys7XG4gICAgICB0aWNrUXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ICYmIG5leHQgIT09IENfVElDSykge1xuICAgICAgaWYgKGNvdW50ID09PSBvcGVuaW5nQ291bnQpIHtcbiAgICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyB0aWNrUXVldWU7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IHRpY2tRdWV1ZTtcbiAgICAgIHRpY2tRdWV1ZSA9ICcnO1xuICAgIH1cblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaWYgKG9wZW5pbmdDb3VudCAlIDIgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb250ZW50UXVldWUgPSAnJztcbiAgc3VicXVldWUgPSAnJztcbiAgbGVuZ3RoID0gcXVldWUubGVuZ3RoO1xuICBpbmRleCA9IC0xO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gcXVldWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJxdWV1ZSkge1xuICAgICAgaWYgKGNvbnRlbnRRdWV1ZSkge1xuICAgICAgICBjb250ZW50UXVldWUgKz0gc3VicXVldWU7XG4gICAgICB9XG5cbiAgICAgIHN1YnF1ZXVlID0gJyc7XG4gICAgfVxuXG4gICAgY29udGVudFF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnaW5saW5lQ29kZScsXG4gICAgdmFsdWU6IGNvbnRlbnRRdWV1ZVxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbjtcbmRlZmluaXRpb24ubm90SW5MaXN0ID0gdHJ1ZTtcbmRlZmluaXRpb24ubm90SW5CbG9jayA9IHRydWU7XG5cbnZhciBDX0RPVUJMRV9RVU9URSA9ICdcIic7XG52YXIgQ19TSU5HTEVfUVVPVEUgPSAnXFwnJztcbnZhciBDX0JBQ0tTTEFTSCA9ICdcXFxcJztcbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19CUkFDS0VUX09QRU4gPSAnWyc7XG52YXIgQ19CUkFDS0VUX0NMT1NFID0gJ10nO1xudmFyIENfUEFSRU5fT1BFTiA9ICcoJztcbnZhciBDX1BBUkVOX0NMT1NFID0gJyknO1xudmFyIENfQ09MT04gPSAnOic7XG52YXIgQ19MVCA9ICc8JztcbnZhciBDX0dUID0gJz4nO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcms7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZSA9ICcnO1xuICB2YXIgYmVmb3JlVVJMO1xuICB2YXIgYmVmb3JlVGl0bGU7XG4gIHZhciBxdWV1ZTtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIHRlc3Q7XG4gIHZhciBpZGVudGlmaWVyO1xuICB2YXIgdXJsO1xuICB2YXIgdGl0bGU7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiYgY2hhcmFjdGVyICE9PSBDX1RBQikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5kZXgrKztcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICBxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JSQUNLRVRfQ0xPU0UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoXG4gICAgIXF1ZXVlIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19CUkFDS0VUX0NMT1NFIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IENfQ09MT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWRlbnRpZmllciA9IHF1ZXVlO1xuICBzdWJ2YWx1ZSArPSBxdWV1ZSArIENfQlJBQ0tFVF9DTE9TRSArIENfQ09MT047XG4gIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoO1xuICBxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgIT09IENfVEFCICYmXG4gICAgICBjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiZcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FXG4gICAgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIHF1ZXVlID0gJyc7XG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlO1xuXG4gIGlmIChjaGFyYWN0ZXIgPT09IENfTFQpIHtcbiAgICBpbmRleCsrO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoIWlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIpIHtcbiAgICAgIHN1YnZhbHVlICs9IENfTFQgKyBxdWV1ZSArIGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5kZXggLT0gcXVldWUubGVuZ3RoICsgMTtcbiAgICAgIHF1ZXVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKCFpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWU7XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXJsID0gcXVldWU7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19UQUIgJiZcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJlxuICAgICAgY2hhcmFjdGVyICE9PSBDX05FV0xJTkVcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgdGVzdCA9IG51bGw7XG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gQ19ET1VCTEVfUVVPVEUpIHtcbiAgICB0ZXN0ID0gQ19ET1VCTEVfUVVPVEU7XG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX1NJTkdMRV9RVU9URSkge1xuICAgIHRlc3QgPSBDX1NJTkdMRV9RVU9URTtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfUEFSRU5fT1BFTikge1xuICAgIHRlc3QgPSBDX1BBUkVOX0NMT1NFO1xuICB9XG5cbiAgaWYgKCF0ZXN0KSB7XG4gICAgcXVldWUgPSAnJztcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aDtcbiAgfSBlbHNlIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoO1xuICAgIHF1ZXVlID0gJyc7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfTkVXTElORSkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfTkVXTElORSB8fCBjaGFyYWN0ZXIgPT09IHRlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBDX05FV0xJTkU7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IHRlc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlO1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gICAgdGl0bGUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1RBQiAmJiBjaGFyYWN0ZXIgIT09IENfU1BBQ0UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IENfTkVXTElORSkge1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGJlZm9yZVVSTCA9IGVhdChiZWZvcmVVUkwpLnRlc3QoKS5lbmQ7XG4gICAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgYmVmb3JlVVJMLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KTtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmQ7XG4gICAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICAgIHR5cGU6ICdkZWZpbml0aW9uJyxcbiAgICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKSxcbiAgICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KTtcbiAgfVxufVxuXG4vKiBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIGVuY2xvc2VkIFVSSS4gKi9cbmZ1bmN0aW9uIGlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBjaGFyYWN0ZXIgIT09IENfR1QgJiZcbiAgICBjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9PUEVOICYmXG4gICAgY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfQ0xPU0U7XG59XG5cbmlzRW5jbG9zZWRVUkxDaGFyYWN0ZXIuZGVsaW1pdGVyID0gQ19HVDtcblxuLyogQ2hlY2sgaWYgYGNoYXJhY3RlcmAgY2FuIGJlIGluc2lkZSBhbiB1bmNsb3NlZCBVUkkuICovXG5mdW5jdGlvbiBpc1VuY2xvc2VkVVJMQ2hhcmFjdGVyKGNoYXJhY3Rlcikge1xuICByZXR1cm4gY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfT1BFTiAmJlxuICAgIGNoYXJhY3RlciAhPT0gQ19CUkFDS0VUX0NMT1NFICYmXG4gICAgIXdoaXRlc3BhY2UoY2hhcmFjdGVyKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9kZWxldGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpa2V0aHJvdWdoO1xuc3RyaWtldGhyb3VnaC5sb2NhdG9yID0gbG9jYXRlO1xuXG52YXIgQ19USUxERSA9ICd+JztcbnZhciBET1VCTEUgPSAnfn4nO1xuXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFyYWN0ZXIgPSAnJztcbiAgdmFyIHByZXZpb3VzID0gJyc7XG4gIHZhciBwcmVjZWRpbmcgPSAnJztcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBpbmRleDtcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIG5vdztcblxuICBpZiAoXG4gICAgIXNlbGYub3B0aW9ucy5nZm0gfHxcbiAgICB2YWx1ZS5jaGFyQXQoMCkgIT09IENfVElMREUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoMSkgIT09IENfVElMREUgfHxcbiAgICB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdCgyKSlcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5kZXggPSAxO1xuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIG5vdyA9IGVhdC5ub3coKTtcbiAgbm93LmNvbHVtbiArPSAyO1xuICBub3cub2Zmc2V0ICs9IDI7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBDX1RJTERFICYmXG4gICAgICBwcmV2aW91cyA9PT0gQ19USUxERSAmJlxuICAgICAgKCFwcmVjZWRpbmcgfHwgIXdoaXRlc3BhY2UocHJlY2VkaW5nKSlcbiAgICApIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoRE9VQkxFICsgc3VidmFsdWUgKyBET1VCTEUpKHtcbiAgICAgICAgdHlwZTogJ2RlbGV0ZScsXG4gICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHN1YnZhbHVlLCBub3cpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBwcmV2aW91cztcbiAgICBwcmVjZWRpbmcgPSBwcmV2aW91cztcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlcjtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKTtcbnZhciB3b3JkID0gcmVxdWlyZSgnaXMtd29yZC1jaGFyYWN0ZXInKTtcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZW1waGFzaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXBoYXNpcztcbmVtcGhhc2lzLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBDX0FTVEVSSVNLID0gJyonO1xudmFyIENfVU5ERVJTQ09SRSA9ICdfJztcblxuZnVuY3Rpb24gZW1waGFzaXMoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIHZhciBub3c7XG4gIHZhciBwZWRhbnRpYztcbiAgdmFyIG1hcmtlcjtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBwcmV2O1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfQVNURVJJU0sgJiYgY2hhcmFjdGVyICE9PSBDX1VOREVSU0NPUkUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpYztcbiAgc3VidmFsdWUgPSBjaGFyYWN0ZXI7XG4gIG1hcmtlciA9IGNoYXJhY3RlcjtcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICBpbmRleCsrO1xuICBxdWV1ZSA9ICcnO1xuICBjaGFyYWN0ZXIgPSAnJztcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXYgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlciAmJiAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXYpKSkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgaWYgKCF0cmltKHF1ZXVlKSB8fCBwcmV2ID09PSBtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBlZGFudGljICYmIG1hcmtlciA9PT0gQ19VTkRFUlNDT1JFICYmIHdvcmQoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHF1ZXVlICs9IG1hcmtlcjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbm93ID0gZWF0Lm5vdygpO1xuICAgICAgICBub3cuY29sdW1uKys7XG4gICAgICAgIG5vdy5vZmZzZXQrKztcblxuICAgICAgICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUgKyBtYXJrZXIpKHtcbiAgICAgICAgICB0eXBlOiAnZW1waGFzaXMnLFxuICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKHF1ZXVlLCBub3cpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBtYXJrZXI7XG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09ICdcXFxcJykge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvZXNjYXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlO1xuZXNjYXBlLmxvY2F0b3IgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGVzY2FwZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgbm9kZTtcblxuICBpZiAodmFsdWUuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSk7XG5cbiAgICBpZiAoc2VsZi5lc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpICE9PSAtMSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgICAgbm9kZSA9IHt0eXBlOiAnYnJlYWsnfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBjaGFyYWN0ZXJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdCgnXFxcXCcgKyBjaGFyYWN0ZXIpKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmb290bm90ZURlZmluaXRpb247XG5mb290bm90ZURlZmluaXRpb24ubm90SW5MaXN0ID0gdHJ1ZTtcbmZvb3Rub3RlRGVmaW5pdGlvbi5ub3RJbkJsb2NrID0gdHJ1ZTtcblxudmFyIENfQkFDS1NMQVNIID0gJ1xcXFwnO1xudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfVEFCID0gJ1xcdCc7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX0JSQUNLRVRfT1BFTiA9ICdbJztcbnZhciBDX0JSQUNLRVRfQ0xPU0UgPSAnXSc7XG52YXIgQ19DQVJFVCA9ICdeJztcbnZhciBDX0NPTE9OID0gJzonO1xuXG52YXIgRVhQUkVTU0lPTl9JTklUSUFMX1RBQiA9IC9eKCB7NH18XFx0KT8vZ207XG5cbmZ1bmN0aW9uIGZvb3Rub3RlRGVmaW5pdGlvbihlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgb2Zmc2V0cyA9IHNlbGYub2Zmc2V0O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIG5vdztcbiAgdmFyIGN1cnJlbnRMaW5lO1xuICB2YXIgY29udGVudDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgc3VicXVldWU7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBpZGVudGlmaWVyO1xuICB2YXIgYWRkO1xuICB2YXIgZXhpdDtcblxuICBpZiAoIXNlbGYub3B0aW9ucy5mb290bm90ZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbmRleCA9IDA7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgc3VidmFsdWUgPSAnJztcbiAgbm93ID0gZWF0Lm5vdygpO1xuICBjdXJyZW50TGluZSA9IG5vdy5saW5lO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoXG4gICAgdmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19CUkFDS0VUX09QRU4gfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gQ19DQVJFVFxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBDX0JSQUNLRVRfT1BFTiArIENfQ0FSRVQ7XG4gIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoO1xuICBxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JSQUNLRVRfQ0xPU0UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoXG4gICAgIXF1ZXVlIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19CUkFDS0VUX0NMT1NFIHx8XG4gICAgdmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IENfQ09MT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWRlbnRpZmllciA9IG5vcm1hbGl6ZShxdWV1ZSk7XG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgQ19CUkFDS0VUX0NMT1NFICsgQ19DT0xPTjtcbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfVEFCICYmIGNoYXJhY3RlciAhPT0gQ19TUEFDRSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIHF1ZXVlID0gJyc7XG4gIGNvbnRlbnQgPSAnJztcbiAgc3VicXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICBzdWJxdWV1ZSA9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfTkVXTElORSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBzdWJxdWV1ZTtcbiAgICAgIHN1YnF1ZXVlID0gJyc7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gc3VicXVldWU7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlO1xuICAgICAgcXVldWUgPSAnJztcbiAgICB9XG5cbiAgICBjb250ZW50ICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgc3VidmFsdWUgKz0gY29udGVudDtcblxuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKEVYUFJFU1NJT05fSU5JVElBTF9UQUIsIGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgb2Zmc2V0c1tjdXJyZW50TGluZV0gPSAob2Zmc2V0c1tjdXJyZW50TGluZV0gfHwgMCkgKyBsaW5lLmxlbmd0aDtcbiAgICBjdXJyZW50TGluZSsrO1xuXG4gICAgcmV0dXJuICcnO1xuICB9KTtcblxuICBhZGQgPSBlYXQoc3VidmFsdWUpO1xuXG4gIGV4aXQgPSBzZWxmLmVudGVyQmxvY2soKTtcbiAgY29udGVudCA9IHNlbGYudG9rZW5pemVCbG9jayhjb250ZW50LCBub3cpO1xuICBleGl0KCk7XG5cbiAgcmV0dXJuIGFkZCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlRGVmaW5pdGlvbicsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBjaGlsZHJlbjogY29udGVudFxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBhdHhIZWFkaW5nO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfSEFTSCA9ICcjJztcblxudmFyIE1BWF9BVFhfQ09VTlQgPSA2O1xuXG5mdW5jdGlvbiBhdHhIZWFkaW5nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzZXR0aW5ncyA9IHNlbGYub3B0aW9ucztcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDE7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgbm93ID0gZWF0Lm5vdygpO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGNvbnRlbnQgPSAnJztcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgZGVwdGg7XG5cbiAgLyogRWF0IGluaXRpYWwgc3BhY2luZy4gKi9cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgLyogRWF0IGhhc2hlcy4gKi9cbiAgZGVwdGggPSAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDw9IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX0hBU0gpIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgZGVwdGgrKztcbiAgfVxuXG4gIGlmIChkZXB0aCA+IE1BWF9BVFhfQ09VTlQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgIWRlcHRoIHx8XG4gICAgKCFzZXR0aW5ncy5wZWRhbnRpYyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gQ19IQVNIKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxO1xuXG4gIC8qIEVhdCBpbnRlcm1lZGlhdGUgd2hpdGUtc3BhY2UuICovXG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgLyogRXhpdCB3aGVuIG5vdCBpbiBwZWRhbnRpYyBtb2RlIHdpdGhvdXQgc3BhY2luZy4gKi9cbiAgaWYgKFxuICAgICFzZXR0aW5ncy5wZWRhbnRpYyAmJlxuICAgIHF1ZXVlLmxlbmd0aCA9PT0gMCAmJlxuICAgIGNoYXJhY3RlciAmJlxuICAgIGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qIEVhdCBjb250ZW50LiAqL1xuICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgcXVldWUgPSAnJztcbiAgY29udGVudCA9ICcnO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiZcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19UQUIgJiZcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19IQVNIXG4gICAgKSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgICAgcXVldWUgPSAnJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UgfHwgY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IENfSEFTSCkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIHdoaWxlIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UgfHwgY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIGluZGV4LS07XG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZTtcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldGV4dEhlYWRpbmc7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19FUVVBTFMgPSAnPSc7XG52YXIgQ19EQVNIID0gJy0nO1xuXG52YXIgTUFYX0hFQURJTkdfSU5ERU5UID0gMztcblxuLyogTWFwIG9mIGNoYXJhY3RlcnMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFyayBzZXRleHRcbiAqIGhlYWRlcnMsIG1hcHBpbmcgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBkZXB0aC4gKi9cbnZhciBTRVRFWFRfTUFSS0VSUyA9IHt9O1xuXG5TRVRFWFRfTUFSS0VSU1tDX0VRVUFMU10gPSAxO1xuU0VURVhUX01BUktFUlNbQ19EQVNIXSA9IDI7XG5cbmZ1bmN0aW9uIHNldGV4dEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG5vdyA9IGVhdC5ub3coKTtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBzdWJ2YWx1ZSA9ICcnO1xuICB2YXIgY29udGVudDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgbWFya2VyO1xuICB2YXIgZGVwdGg7XG5cbiAgLyogRWF0IGluaXRpYWwgaW5kZW50YXRpb24uICovXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UgfHwgaW5kZXggPj0gTUFYX0hFQURJTkdfSU5ERU5UKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgLyogRWF0IGNvbnRlbnQuICovXG4gIGNvbnRlbnQgPSAnJztcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1NQQUNFIHx8IGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBxdWV1ZSArIGNoYXJhY3RlcjtcbiAgICAgIHF1ZXVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgbm93LmNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIG5vdy5vZmZzZXQgKz0gc3VidmFsdWUubGVuZ3RoO1xuICBzdWJ2YWx1ZSArPSBjb250ZW50ICsgcXVldWU7XG5cbiAgLyogRW5zdXJlIHRoZSBjb250ZW50IGlzIGZvbGxvd2VkIGJ5IGEgbmV3bGluZSBhbmQgYVxuICAgKiB2YWxpZCBtYXJrZXIuICovXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcbiAgbWFya2VyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfTkVXTElORSB8fCAhU0VURVhUX01BUktFUlNbbWFya2VyXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcblxuICAvKiBFYXQgU2V0ZXh0LWxpbmUuICovXG4gIHF1ZXVlID0gbWFya2VyO1xuICBkZXB0aCA9IFNFVEVYVF9NQVJLRVJTW21hcmtlcl07XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBDX05FV0xJTkUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbmRleC0tO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlKSh7XG4gICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3BlbkNsb3NlVGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykub3BlbkNsb3NlVGFnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrSFRNTDtcblxudmFyIENfVEFCID0gJ1xcdCc7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX0xUID0gJzwnO1xuXG5mdW5jdGlvbiBibG9ja0hUTUwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGJsb2NrcyA9IHNlbGYub3B0aW9ucy5ibG9ja3M7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBuZXh0O1xuICB2YXIgbGluZTtcbiAgdmFyIG9mZnNldDtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGNvdW50O1xuICB2YXIgc2VxdWVuY2U7XG4gIHZhciBzdWJ2YWx1ZTtcblxuICB2YXIgc2VxdWVuY2VzID0gW1xuICAgIFsvXjwoc2NyaXB0fHByZXxzdHlsZSkoPz0oXFxzfD58JCkpL2ksIC88XFwvKHNjcmlwdHxwcmV8c3R5bGUpPi9pLCB0cnVlXSxcbiAgICBbL148IS0tLywgLy0tPi8sIHRydWVdLFxuICAgIFsvXjxcXD8vLCAvXFw/Pi8sIHRydWVdLFxuICAgIFsvXjwhW0EtWmEtel0vLCAvPi8sIHRydWVdLFxuICAgIFsvXjwhXFxbQ0RBVEFcXFsvLCAvXFxdXFxdPi8sIHRydWVdLFxuICAgIFtuZXcgUmVnRXhwKCdePC8/KCcgKyBibG9ja3Muam9pbignfCcpICsgJykoPz0oXFxcXHN8Lz8+fCQpKScsICdpJyksIC9eJC8sIHRydWVdLFxuICAgIFtuZXcgUmVnRXhwKG9wZW5DbG9zZVRhZy5zb3VyY2UgKyAnXFxcXHMqJCcpLCAvXiQvLCBmYWxzZV1cbiAgXTtcblxuICAvKiBFYXQgaW5pdGlhbCBzcGFjaW5nLiAqL1xuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19UQUIgJiYgY2hhcmFjdGVyICE9PSBDX1NQQUNFKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IENfTFQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBuZXh0ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUsIGluZGV4ICsgMSk7XG4gIG5leHQgPSBuZXh0ID09PSAtMSA/IGxlbmd0aCA6IG5leHQ7XG4gIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCwgbmV4dCk7XG4gIG9mZnNldCA9IC0xO1xuICBjb3VudCA9IHNlcXVlbmNlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsrb2Zmc2V0IDwgY291bnQpIHtcbiAgICBpZiAoc2VxdWVuY2VzW29mZnNldF1bMF0udGVzdChsaW5lKSkge1xuICAgICAgc2VxdWVuY2UgPSBzZXF1ZW5jZXNbb2Zmc2V0XTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2VxdWVuY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHNlcXVlbmNlWzJdO1xuICB9XG5cbiAgaW5kZXggPSBuZXh0O1xuXG4gIGlmICghc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgbmV4dCA9IHZhbHVlLmluZGV4T2YoQ19ORVdMSU5FLCBpbmRleCArIDEpO1xuICAgICAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dDtcbiAgICAgIGxpbmUgPSB2YWx1ZS5zbGljZShpbmRleCArIDEsIG5leHQpO1xuXG4gICAgICBpZiAoc2VxdWVuY2VbMV0udGVzdChsaW5lKSkge1xuICAgICAgICBpZiAobGluZSkge1xuICAgICAgICAgIGluZGV4ID0gbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbmRleCA9IG5leHQ7XG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleCk7XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJyk7XG52YXIgdGFnID0gcmVxdWlyZSgnLi4vdXRpbC9odG1sJykudGFnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUhUTUw7XG5pbmxpbmVIVE1MLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBFWFBSRVNTSU9OX0hUTUxfTElOS19PUEVOID0gL148YSAvaTtcbnZhciBFWFBSRVNTSU9OX0hUTUxfTElOS19DTE9TRSA9IC9ePFxcL2E+L2k7XG5cbmZ1bmN0aW9uIGlubGluZUhUTUwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIHN1YnZhbHVlO1xuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09ICc8JyB8fCBsZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDEpO1xuXG4gIGlmIChcbiAgICAhYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgJiZcbiAgICBjaGFyYWN0ZXIgIT09ICc/JyAmJlxuICAgIGNoYXJhY3RlciAhPT0gJyEnICYmXG4gICAgY2hhcmFjdGVyICE9PSAnLydcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5tYXRjaCh0YWcpO1xuXG4gIGlmICghc3VidmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBub3QgdXNlZCB5ZXQuICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN1YnZhbHVlID0gc3VidmFsdWVbMF07XG5cbiAgaWYgKCFzZWxmLmluTGluayAmJiBFWFBSRVNTSU9OX0hUTUxfTElOS19PUEVOLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHNlbGYuaW5MaW5rICYmIEVYUFJFU1NJT05fSFRNTF9MSU5LX0NMT1NFLnRlc3Qoc3VidmFsdWUpKSB7XG4gICAgc2VsZi5pbkxpbmsgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAnaHRtbCcsIHZhbHVlOiBzdWJ2YWx1ZX0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2xpbmsnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaW5rO1xubGluay5sb2NhdG9yID0gbG9jYXRlO1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBDX0JBQ0tTTEFTSCA9ICdcXFxcJztcbnZhciBDX0JSQUNLRVRfT1BFTiA9ICdbJztcbnZhciBDX0JSQUNLRVRfQ0xPU0UgPSAnXSc7XG52YXIgQ19QQVJFTl9PUEVOID0gJygnO1xudmFyIENfUEFSRU5fQ0xPU0UgPSAnKSc7XG52YXIgQ19MVCA9ICc8JztcbnZhciBDX0dUID0gJz4nO1xudmFyIENfVElDSyA9ICdgJztcbnZhciBDX0RPVUJMRV9RVU9URSA9ICdcIic7XG52YXIgQ19TSU5HTEVfUVVPVEUgPSAnXFwnJztcblxuLyogTWFwIG9mIGNoYXJhY3RlcnMsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIG1hcmsgbGlua1xuICogYW5kIGltYWdlIHRpdGxlcy4gKi9cbnZhciBMSU5LX01BUktFUlMgPSB7fTtcblxuTElOS19NQVJLRVJTW0NfRE9VQkxFX1FVT1RFXSA9IENfRE9VQkxFX1FVT1RFO1xuTElOS19NQVJLRVJTW0NfU0lOR0xFX1FVT1RFXSA9IENfU0lOR0xFX1FVT1RFO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFyayBsaW5rXG4gKiBhbmQgaW1hZ2UgdGl0bGVzIGluIGNvbW1vbm1hcmstbW9kZS4gKi9cbnZhciBDT01NT05NQVJLX0xJTktfTUFSS0VSUyA9IHt9O1xuXG5DT01NT05NQVJLX0xJTktfTUFSS0VSU1tDX0RPVUJMRV9RVU9URV0gPSBDX0RPVUJMRV9RVU9URTtcbkNPTU1PTk1BUktfTElOS19NQVJLRVJTW0NfU0lOR0xFX1FVT1RFXSA9IENfU0lOR0xFX1FVT1RFO1xuQ09NTU9OTUFSS19MSU5LX01BUktFUlNbQ19QQVJFTl9PUEVOXSA9IENfUEFSRU5fQ0xPU0U7XG5cbmZ1bmN0aW9uIGxpbmsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMCk7XG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpYztcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFyaztcbiAgdmFyIGdmbSA9IHNlbGYub3B0aW9ucy5nZm07XG4gIHZhciBjbG9zZWQ7XG4gIHZhciBjb3VudDtcbiAgdmFyIG9wZW5pbmc7XG4gIHZhciBiZWZvcmVVUkw7XG4gIHZhciBiZWZvcmVUaXRsZTtcbiAgdmFyIHN1YnF1ZXVlO1xuICB2YXIgaGFzTWFya2VyO1xuICB2YXIgbWFya2VycztcbiAgdmFyIGlzSW1hZ2U7XG4gIHZhciBjb250ZW50O1xuICB2YXIgbWFya2VyO1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgdGl0bGU7XG4gIHZhciBkZXB0aDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgdXJsO1xuICB2YXIgbm93O1xuICB2YXIgZXhpdDtcbiAgdmFyIG5vZGU7XG5cbiAgLyogRGV0ZWN0IHdoZXRoZXIgdGhpcyBpcyBhbiBpbWFnZS4gKi9cbiAgaWYgKGNoYXJhY3RlciA9PT0gJyEnKSB7XG4gICAgaXNJbWFnZSA9IHRydWU7XG4gICAgc3VidmFsdWUgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICB9XG5cbiAgLyogRWF0IHRoZSBvcGVuaW5nLiAqL1xuICBpZiAoY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfT1BFTikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIEV4aXQgd2hlbiB0aGlzIGlzIGEgbGluayBhbmQgd2XigJlyZSBhbHJlYWR5IGluc2lkZVxuICAgKiBhIGxpbmsuICovXG4gIGlmICghaXNJbWFnZSAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgcXVldWUgPSAnJztcbiAgaW5kZXgrKztcblxuICAvKiBFYXQgdGhlIGNvbnRlbnQuICovXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgbm93ID0gZWF0Lm5vdygpO1xuICBkZXB0aCA9IDA7XG5cbiAgbm93LmNvbHVtbiArPSBpbmRleDtcbiAgbm93Lm9mZnNldCArPSBpbmRleDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICAgIHN1YnF1ZXVlID0gY2hhcmFjdGVyO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19USUNLKSB7XG4gICAgICAvKiBJbmxpbmUtY29kZSBpbiBsaW5rIGNvbnRlbnQuICovXG4gICAgICBjb3VudCA9IDE7XG5cbiAgICAgIHdoaWxlICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gQ19USUNLKSB7XG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSBjb3VudDtcbiAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gb3BlbmluZykge1xuICAgICAgICBvcGVuaW5nID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgIC8qIEFsbG93IGJyYWNrZXRzIHRvIGJlIGVzY2FwZWQuICovXG4gICAgICBpbmRleCsrO1xuICAgICAgc3VicXVldWUgKz0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICAvKiBJbiBHRk0gbW9kZSwgYnJhY2tldHMgaW4gY29kZSBzdGlsbCBjb3VudC5cbiAgICAgKiBJbiBhbGwgb3RoZXIgbW9kZXMsIHRoZXkgZG9u4oCZdC4gIFRoaXMgZW1wdHlcbiAgICAgKiBibG9jayBwcmV2ZW50cyB0aGUgbmV4dCBzdGF0ZW1lbnRzIGFyZVxuICAgICAqIGVudGVyZWQuICovXG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgICBkZXB0aCsrO1xuICAgIH0gZWxzZSBpZiAoKCFvcGVuaW5nIHx8IGdmbSkgJiYgY2hhcmFjdGVyID09PSBDX0JSQUNLRVRfQ0xPU0UpIHtcbiAgICAgIGlmIChkZXB0aCkge1xuICAgICAgICBkZXB0aC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogQWxsb3cgd2hpdGUtc3BhY2UgYmV0d2VlbiBjb250ZW50IGFuZFxuICAgICAgICAgKiB1cmwgaW4gR0ZNIG1vZGUuICovXG4gICAgICAgIGlmICghcGVkYW50aWMpIHtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCArIDEpO1xuXG4gICAgICAgICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgIT09IENfUEFSRU5fT1BFTikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IENfUEFSRU5fT1BFTjtcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgaW5kZXgrKztcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBzdWJxdWV1ZTtcbiAgICBzdWJxdWV1ZSA9ICcnO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICAvKiBFYXQgdGhlIGNvbnRlbnQgY2xvc2luZy4gKi9cbiAgaWYgKCFjbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250ZW50ID0gcXVldWU7XG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgc3VicXVldWU7XG4gIGluZGV4Kys7XG5cbiAgLyogRWF0IHdoaXRlLXNwYWNlLiAqL1xuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgLyogRWF0IHRoZSBVUkwuICovXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIG1hcmtlcnMgPSBjb21tb25tYXJrID8gQ09NTU9OTUFSS19MSU5LX01BUktFUlMgOiBMSU5LX01BUktFUlM7XG4gIHF1ZXVlID0gJyc7XG4gIGJlZm9yZVVSTCA9IHN1YnZhbHVlO1xuXG4gIGlmIChjaGFyYWN0ZXIgPT09IENfTFQpIHtcbiAgICBpbmRleCsrO1xuICAgIGJlZm9yZVVSTCArPSBDX0xUO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBDX0dUKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tbW9ubWFyayAmJiBjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19HVCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IENfTFQgKyBxdWV1ZSArIENfR1Q7XG4gICAgdXJsID0gcXVldWU7XG4gICAgaW5kZXgrKztcbiAgfSBlbHNlIHtcbiAgICBjaGFyYWN0ZXIgPSBudWxsO1xuICAgIHN1YnF1ZXVlID0gJyc7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChzdWJxdWV1ZSAmJiBvd24uY2FsbChtYXJrZXJzLCBjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGlmICghcGVkYW50aWMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfUEFSRU5fT1BFTikge1xuICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX1BBUkVOX0NMT1NFKSB7XG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUgKz0gc3VicXVldWU7XG4gICAgICAgIHN1YnF1ZXVlID0gJyc7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBDX0JBQ0tTTEFTSDtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICB9XG5cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gcXVldWU7XG4gICAgdXJsID0gcXVldWU7XG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvKiBFYXQgd2hpdGUtc3BhY2UuICovXG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIHN1YnZhbHVlICs9IHF1ZXVlO1xuXG4gIC8qIEVhdCB0aGUgdGl0bGUuICovXG4gIGlmIChxdWV1ZSAmJiBvd24uY2FsbChtYXJrZXJzLCBjaGFyYWN0ZXIpKSB7XG4gICAgaW5kZXgrKztcbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgcXVldWUgPSAnJztcbiAgICBtYXJrZXIgPSBtYXJrZXJzW2NoYXJhY3Rlcl07XG4gICAgYmVmb3JlVGl0bGUgPSBzdWJ2YWx1ZTtcblxuICAgIC8qIEluIGNvbW1vbm1hcmstbW9kZSwgdGhpbmdzIGFyZSBwcmV0dHkgZWFzeTogdGhlXG4gICAgICogbWFya2VyIGNhbm5vdCBvY2N1ciBpbnNpZGUgdGhlIHRpdGxlLlxuICAgICAqXG4gICAgICogTm9uLWNvbW1vbm1hcmsgZG9lcywgaG93ZXZlciwgc3VwcG9ydCBuZXN0ZWRcbiAgICAgKiBkZWxpbWl0ZXJzLiAqL1xuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICAgICAgcXVldWUgKz0gQ19CQUNLU0xBU0g7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aXRsZSA9IHF1ZXVlO1xuICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJxdWV1ZSA9ICcnO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBpZiAoaGFzTWFya2VyKSB7XG4gICAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZTtcbiAgICAgICAgICAgIHN1YnF1ZXVlID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFzTWFya2VyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghaGFzTWFya2VyKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19QQVJFTl9DTE9TRSkge1xuICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyICsgc3VicXVldWU7XG4gICAgICAgICAgdGl0bGUgPSBxdWV1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyICsgc3VicXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgICAgICAgc3VicXVldWUgPSAnJztcbiAgICAgICAgICBoYXNNYXJrZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlLmNoYXJBdChpbmRleCkgIT09IENfUEFSRU5fQ0xPU0UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN1YnZhbHVlICs9IENfUEFSRU5fQ0xPU0U7XG5cbiAgdXJsID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodXJsKSwgZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZCwge25vblRlcm1pbmF0ZWQ6IGZhbHNlfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgYmVmb3JlVGl0bGUgPSBlYXQoYmVmb3JlVGl0bGUpLnRlc3QoKS5lbmQ7XG4gICAgdGl0bGUgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh0aXRsZSksIGJlZm9yZVRpdGxlKTtcbiAgfVxuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogaXNJbWFnZSA/ICdpbWFnZScgOiAnbGluaycsXG4gICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgdXJsOiB1cmxcbiAgfTtcblxuICBpZiAoaXNJbWFnZSkge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKTtcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpO1xuICAgIGV4aXQoKTtcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtcGFyYW1zICovXG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpO1xudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvZ2V0LWluZGVudGF0aW9uJyk7XG52YXIgcmVtb3ZlSW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9yZW1vdmUtaW5kZW50YXRpb24nKTtcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3Q7XG5cbnZhciBDX0FTVEVSSVNLID0gJyonO1xudmFyIENfVU5ERVJTQ09SRSA9ICdfJztcbnZhciBDX1BMVVMgPSAnKyc7XG52YXIgQ19EQVNIID0gJy0nO1xudmFyIENfRE9UID0gJy4nO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1BBUkVOX0NMT1NFID0gJyknO1xudmFyIENfWF9MT1dFUiA9ICd4JztcblxudmFyIFRBQl9TSVpFID0gNDtcbnZhciBFWFBSRVNTSU9OX0xPT1NFX0xJU1RfSVRFTSA9IC9cXG5cXG4oPyFcXHMqJCkvO1xudmFyIEVYUFJFU1NJT05fVEFTS19JVEVNID0gL15cXFsoWyBcXHRdfHh8WCldWyBcXHRdLztcbnZhciBFWFBSRVNTSU9OX0JVTExFVCA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKSggezEsNH0oPyEgKXwgfFxcdHwkfCg/PVxcbikpKFteXFxuXSopLztcbnZhciBFWFBSRVNTSU9OX1BFREFOVElDX0JVTExFVCA9IC9eKFsgXFx0XSopKFsqKy1dfFxcZCtbLildKShbIFxcdF0rKS87XG52YXIgRVhQUkVTU0lPTl9JTklUSUFMX0lOREVOVCA9IC9eKCB7MSw0fXxcXHQpPy9nbTtcblxuLyogTWFwIG9mIGNoYXJhY3RlcnMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFya1xuICogbGlzdC1pdGVtcy4gKi9cbnZhciBMSVNUX1VOT1JERVJFRF9NQVJLRVJTID0ge307XG5cbkxJU1RfVU5PUkRFUkVEX01BUktFUlNbQ19BU1RFUklTS10gPSB0cnVlO1xuTElTVF9VTk9SREVSRURfTUFSS0VSU1tDX1BMVVNdID0gdHJ1ZTtcbkxJU1RfVU5PUkRFUkVEX01BUktFUlNbQ19EQVNIXSA9IHRydWU7XG5cbi8qIE1hcCBvZiBjaGFyYWN0ZXJzIHdoaWNoIGNhbiBiZSB1c2VkIHRvIG1hcmtcbiAqIGxpc3QtaXRlbXMgYWZ0ZXIgYSBkaWdpdC4gKi9cbnZhciBMSVNUX09SREVSRURfTUFSS0VSUyA9IHt9O1xuXG5MSVNUX09SREVSRURfTUFSS0VSU1tDX0RPVF0gPSB0cnVlO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycyB3aGljaCBjYW4gYmUgdXNlZCB0byBtYXJrXG4gKiBsaXN0LWl0ZW1zIGFmdGVyIGEgZGlnaXQuICovXG52YXIgTElTVF9PUkRFUkVEX0NPTU1PTk1BUktfTUFSS0VSUyA9IHt9O1xuXG5MSVNUX09SREVSRURfQ09NTU9OTUFSS19NQVJLRVJTW0NfRE9UXSA9IHRydWU7XG5MSVNUX09SREVSRURfQ09NTU9OTUFSS19NQVJLRVJTW0NfUEFSRU5fQ0xPU0VdID0gdHJ1ZTtcblxuZnVuY3Rpb24gbGlzdChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrO1xuICB2YXIgcGVkYW50aWMgPSBzZWxmLm9wdGlvbnMucGVkYW50aWM7XG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnM7XG4gIHZhciBpbnRlcnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0TGlzdDtcbiAgdmFyIG1hcmtlcnM7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBzdGFydCA9IG51bGw7XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgb3JkZXJlZDtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIG1hcmtlcjtcbiAgdmFyIG5leHRJbmRleDtcbiAgdmFyIHN0YXJ0SW5kZXg7XG4gIHZhciBwcmVmaXhlZDtcbiAgdmFyIGN1cnJlbnRNYXJrZXI7XG4gIHZhciBjb250ZW50O1xuICB2YXIgbGluZTtcbiAgdmFyIHByZXZFbXB0eTtcbiAgdmFyIGVtcHR5O1xuICB2YXIgaXRlbXM7XG4gIHZhciBhbGxMaW5lcztcbiAgdmFyIGVtcHR5TGluZXM7XG4gIHZhciBpdGVtO1xuICB2YXIgZW50ZXJUb3A7XG4gIHZhciBleGl0QmxvY2txdW90ZTtcbiAgdmFyIGlzTG9vc2U7XG4gIHZhciBub2RlO1xuICB2YXIgbm93O1xuICB2YXIgZW5kO1xuICB2YXIgaW5kZW50ZWQ7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICBzaXplICs9IFRBQl9TSVpFIC0gKHNpemUgJSBUQUJfU0laRSk7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgIHNpemUrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChzaXplID49IFRBQl9TSVpFKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICBtYXJrZXJzID0gY29tbW9ubWFyayA/XG4gICAgTElTVF9PUkRFUkVEX0NPTU1PTk1BUktfTUFSS0VSUyA6XG4gICAgTElTVF9PUkRFUkVEX01BUktFUlM7XG5cbiAgaWYgKExJU1RfVU5PUkRFUkVEX01BUktFUlNbY2hhcmFjdGVyXSA9PT0gdHJ1ZSkge1xuICAgIG1hcmtlciA9IGNoYXJhY3RlcjtcbiAgICBvcmRlcmVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgb3JkZXJlZCA9IHRydWU7XG4gICAgcXVldWUgPSAnJztcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghcXVldWUgfHwgbWFya2Vyc1tjaGFyYWN0ZXJdICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhcnQgPSBwYXJzZUludChxdWV1ZSwgMTApO1xuICAgIG1hcmtlciA9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcblxuICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbmRleCA9IDA7XG4gIGl0ZW1zID0gW107XG4gIGFsbExpbmVzID0gW107XG4gIGVtcHR5TGluZXMgPSBbXTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBuZXh0SW5kZXggPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSwgaW5kZXgpO1xuICAgIHN0YXJ0SW5kZXggPSBpbmRleDtcbiAgICBwcmVmaXhlZCA9IGZhbHNlO1xuICAgIGluZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIGVuZCA9IGluZGV4ICsgVEFCX1NJWkU7XG4gICAgc2l6ZSA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICAgIHNpemUgKz0gVEFCX1NJWkUgLSAoc2l6ZSAlIFRBQl9TSVpFKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX1NQQUNFKSB7XG4gICAgICAgIHNpemUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChzaXplID49IFRBQl9TSVpFKSB7XG4gICAgICBpbmRlbnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gJiYgc2l6ZSA+PSBpdGVtLmluZGVudCkge1xuICAgICAgaW5kZW50ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgY3VycmVudE1hcmtlciA9IG51bGw7XG5cbiAgICBpZiAoIWluZGVudGVkKSB7XG4gICAgICBpZiAoTElTVF9VTk9SREVSRURfTUFSS0VSU1tjaGFyYWN0ZXJdID09PSB0cnVlKSB7XG4gICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHNpemUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlID0gJyc7XG5cbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgICAgIGlmICghZGVjaW1hbChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgaWYgKHF1ZXVlICYmIG1hcmtlcnNbY2hhcmFjdGVyXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgc2l6ZSArPSBxdWV1ZS5sZW5ndGggKyAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgICAgICBzaXplICs9IFRBQl9TSVpFIC0gKHNpemUgJSBUQUJfU0laRSk7XG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICBlbmQgPSBpbmRleCArIFRBQl9TSVpFO1xuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZCAmJiB2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICBpbmRleCAtPSBUQUJfU0laRSAtIDE7XG4gICAgICAgICAgICBzaXplIC09IFRBQl9TSVpFIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyICE9PSBDX05FV0xJTkUgJiYgY2hhcmFjdGVyICE9PSAnJykge1xuICAgICAgICAgIGN1cnJlbnRNYXJrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyICE9PSBjdXJyZW50TWFya2VyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmVmaXhlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29tbW9ubWFyayAmJiAhaW5kZW50ZWQgJiYgdmFsdWUuY2hhckF0KHN0YXJ0SW5kZXgpID09PSBDX1NQQUNFKSB7XG4gICAgICAgIGluZGVudGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoY29tbW9ubWFyayAmJiBpdGVtKSB7XG4gICAgICAgIGluZGVudGVkID0gc2l6ZSA+PSBpdGVtLmluZGVudCB8fCBzaXplID4gVEFCX1NJWkU7XG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gZmFsc2U7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgfVxuXG4gICAgbGluZSA9IHZhbHVlLnNsaWNlKHN0YXJ0SW5kZXgsIG5leHRJbmRleCk7XG4gICAgY29udGVudCA9IHN0YXJ0SW5kZXggPT09IGluZGV4ID8gbGluZSA6IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gQ19BU1RFUklTSyB8fFxuICAgICAgY3VycmVudE1hcmtlciA9PT0gQ19VTkRFUlNDT1JFIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSBDX0RBU0hcbiAgICApIHtcbiAgICAgIGlmICh0b2tlbml6ZXJzLnRoZW1hdGljQnJlYWsuY2FsbChzZWxmLCBlYXQsIGxpbmUsIHRydWUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByZXZFbXB0eSA9IGVtcHR5O1xuICAgIGVtcHR5ID0gIXRyaW0oY29udGVudCkubGVuZ3RoO1xuXG4gICAgaWYgKGluZGVudGVkICYmIGl0ZW0pIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKTtcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpO1xuICAgICAgZW1wdHlMaW5lcyA9IFtdO1xuICAgIH0gZWxzZSBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGlmIChlbXB0eUxpbmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpdGVtLnZhbHVlLnB1c2goJycpO1xuICAgICAgICBpdGVtLnRyYWlsID0gZW1wdHlMaW5lcy5jb25jYXQoKTtcbiAgICAgIH1cblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdmFsdWU6IFtsaW5lXSxcbiAgICAgICAgaW5kZW50OiBzaXplLFxuICAgICAgICB0cmFpbDogW11cbiAgICAgIH07XG5cbiAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKTtcbiAgICAgIGVtcHR5TGluZXMgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGVtcHR5KSB7XG4gICAgICBpZiAocHJldkVtcHR5KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbXB0eUxpbmVzLnB1c2gobGluZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2RW1wdHkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIGxpbmUsIHRydWVdKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpO1xuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSk7XG4gICAgICBlbXB0eUxpbmVzID0gW107XG4gICAgfVxuXG4gICAgaW5kZXggPSBuZXh0SW5kZXggKyAxO1xuICB9XG5cbiAgbm9kZSA9IGVhdChhbGxMaW5lcy5qb2luKENfTkVXTElORSkpLnJlc2V0KHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgb3JkZXJlZDogb3JkZXJlZCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgbG9vc2U6IG51bGwsXG4gICAgY2hpbGRyZW46IFtdXG4gIH0pO1xuXG4gIGVudGVyVG9wID0gc2VsZi5lbnRlckxpc3QoKTtcbiAgZXhpdEJsb2NrcXVvdGUgPSBzZWxmLmVudGVyQmxvY2soKTtcbiAgaXNMb29zZSA9IGZhbHNlO1xuICBpbmRleCA9IC0xO1xuICBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpdGVtID0gaXRlbXNbaW5kZXhdLnZhbHVlLmpvaW4oQ19ORVdMSU5FKTtcbiAgICBub3cgPSBlYXQubm93KCk7XG5cbiAgICBpdGVtID0gZWF0KGl0ZW0pKGxpc3RJdGVtKHNlbGYsIGl0ZW0sIG5vdyksIG5vZGUpO1xuXG4gICAgaWYgKGl0ZW0ubG9vc2UpIHtcbiAgICAgIGlzTG9vc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udHJhaWwuam9pbihDX05FV0xJTkUpO1xuXG4gICAgaWYgKGluZGV4ICE9PSBsZW5ndGggLSAxKSB7XG4gICAgICBpdGVtICs9IENfTkVXTElORTtcbiAgICB9XG5cbiAgICBlYXQoaXRlbSk7XG4gIH1cblxuICBlbnRlclRvcCgpO1xuICBleGl0QmxvY2txdW90ZSgpO1xuXG4gIG5vZGUubG9vc2UgPSBpc0xvb3NlO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBsaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXQ7XG4gIHZhciBmbiA9IGN0eC5vcHRpb25zLnBlZGFudGljID8gcGVkYW50aWNMaXN0SXRlbSA6IG5vcm1hbExpc3RJdGVtO1xuICB2YXIgY2hlY2tlZCA9IG51bGw7XG4gIHZhciB0YXNrO1xuICB2YXIgaW5kZW50O1xuXG4gIHZhbHVlID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICBpZiAoY3R4Lm9wdGlvbnMuZ2ZtKSB7XG4gICAgdGFzayA9IHZhbHVlLm1hdGNoKEVYUFJFU1NJT05fVEFTS19JVEVNKTtcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICBpbmRlbnQgPSB0YXNrWzBdLmxlbmd0aDtcbiAgICAgIGNoZWNrZWQgPSB0YXNrWzFdLnRvTG93ZXJDYXNlKCkgPT09IENfWF9MT1dFUjtcbiAgICAgIG9mZnNldHNbcG9zaXRpb24ubGluZV0gKz0gaW5kZW50O1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShpbmRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICBsb29zZTogRVhQUkVTU0lPTl9MT09TRV9MSVNUX0lURU0udGVzdCh2YWx1ZSkgfHxcbiAgICAgIHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSA9PT0gQ19ORVdMSU5FLFxuICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgY2hpbGRyZW46IGN0eC50b2tlbml6ZUJsb2NrKHZhbHVlLCBwb3NpdGlvbilcbiAgfTtcbn1cblxuLyogQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIG92ZXJseSBzaW1wbGUgbWVjaGFuaWNzLiAqL1xuZnVuY3Rpb24gcGVkYW50aWNMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXQ7XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZTtcblxuICAvKiBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LiAqL1xuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoRVhQUkVTU0lPTl9QRURBTlRJQ19CVUxMRVQsIHJlcGxhY2VyKTtcblxuICAvKiBUaGUgaW5pdGlhbCBsaW5lIHdhcyBhbHNvIG1hdGNoZWQgYnkgdGhlIGJlbG93LCBzb1xuICAgKiB3ZSByZXNldCB0aGUgYGxpbmVgLiAqL1xuICBsaW5lID0gcG9zaXRpb24ubGluZTtcblxuICByZXR1cm4gdmFsdWUucmVwbGFjZShFWFBSRVNTSU9OX0lOSVRJQUxfSU5ERU5ULCByZXBsYWNlcik7XG5cbiAgLyogQSBzaW1wbGUgcmVwbGFjZXIgd2hpY2ggcmVtb3ZlZCBhbGwgbWF0Y2hlcyxcbiAgICogYW5kIGFkZHMgdGhlaXIgbGVuZ3RoIHRvIGBvZmZzZXRgLiAqL1xuICBmdW5jdGlvbiByZXBsYWNlcigkMCkge1xuICAgIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArICQwLmxlbmd0aDtcbiAgICBsaW5lKys7XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyogQ3JlYXRlIGEgbGlzdC1pdGVtIHVzaW5nIHNhbmUgbWVjaGFuaWNzLiAqL1xuZnVuY3Rpb24gbm9ybWFsTGlzdEl0ZW0oY3R4LCB2YWx1ZSwgcG9zaXRpb24pIHtcbiAgdmFyIG9mZnNldHMgPSBjdHgub2Zmc2V0O1xuICB2YXIgbGluZSA9IHBvc2l0aW9uLmxpbmU7XG4gIHZhciBtYXg7XG4gIHZhciBidWxsZXQ7XG4gIHZhciByZXN0O1xuICB2YXIgbGluZXM7XG4gIHZhciB0cmltbWVkTGluZXM7XG4gIHZhciBpbmRleDtcbiAgdmFyIGxlbmd0aDtcblxuICAvKiBSZW1vdmUgdGhlIGxpc3QtaXRlbeKAmXMgYnVsbGV0LiAqL1xuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoRVhQUkVTU0lPTl9CVUxMRVQsIHJlcGxhY2VyKTtcblxuICBsaW5lcyA9IHZhbHVlLnNwbGl0KENfTkVXTElORSk7XG5cbiAgdHJpbW1lZExpbmVzID0gcmVtb3ZlSW5kZW50KHZhbHVlLCBnZXRJbmRlbnQobWF4KS5pbmRlbnQpLnNwbGl0KENfTkVXTElORSk7XG5cbiAgLyogV2UgcmVwbGFjZWQgdGhlIGluaXRpYWwgYnVsbGV0IHdpdGggc29tZXRoaW5nXG4gICAqIGVsc2UgYWJvdmUsIHdoaWNoIHdhcyB1c2VkIHRvIHRyaWNrXG4gICAqIGByZW1vdmVJbmRlbnRhdGlvbmAgaW50byByZW1vdmluZyBzb21lIG1vcmVcbiAgICogY2hhcmFjdGVycyB3aGVuIHBvc3NpYmxlLiAgSG93ZXZlciwgdGhhdCBjb3VsZFxuICAgKiByZXN1bHQgaW4gdGhlIGluaXRpYWwgbGluZSB0byBiZSBzdHJpcHBlZCBtb3JlXG4gICAqIHRoYW4gaXQgc2hvdWxkIGJlLiAqL1xuICB0cmltbWVkTGluZXNbMF0gPSByZXN0O1xuXG4gIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArIGJ1bGxldC5sZW5ndGg7XG4gIGxpbmUrKztcblxuICBpbmRleCA9IDA7XG4gIGxlbmd0aCA9IGxpbmVzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIG9mZnNldHNbbGluZV0gPSAob2Zmc2V0c1tsaW5lXSB8fCAwKSArXG4gICAgICBsaW5lc1tpbmRleF0ubGVuZ3RoIC0gdHJpbW1lZExpbmVzW2luZGV4XS5sZW5ndGg7XG4gICAgbGluZSsrO1xuICB9XG5cbiAgcmV0dXJuIHRyaW1tZWRMaW5lcy5qb2luKENfTkVXTElORSk7XG5cbiAgZnVuY3Rpb24gcmVwbGFjZXIoJDAsICQxLCAkMiwgJDMsICQ0KSB7XG4gICAgYnVsbGV0ID0gJDEgKyAkMiArICQzO1xuICAgIHJlc3QgPSAkNDtcblxuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHRoZSBmaXJzdCBuaW5lIG51bWJlcmVkIGxpc3QgaXRlbXNcbiAgICAgKiBjYW4gaW5kZW50IHdpdGggYW4gZXh0cmEgc3BhY2UuICBUaGF0IGlzLCB3aGVuXG4gICAgICogdGhlIGJ1bGxldCBkaWQgbm90IHJlY2VpdmUgYW4gZXh0cmEgZmluYWwgc3BhY2UuICovXG4gICAgaWYgKE51bWJlcigkMikgPCAxMCAmJiBidWxsZXQubGVuZ3RoICUgMiA9PT0gMSkge1xuICAgICAgJDIgPSBDX1NQQUNFICsgJDI7XG4gICAgfVxuXG4gICAgbWF4ID0gJDEgKyByZXBlYXQoQ19TUEFDRSwgJDIubGVuZ3RoKSArICQzO1xuXG4gICAgcmV0dXJuIG1heCArIHJlc3Q7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ld2xpbmU7XG5cbi8qIFRva2VuaXNlIG5ld2xpbmUuICovXG5mdW5jdGlvbiBuZXdsaW5lKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApO1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciBxdWV1ZTtcbiAgdmFyIGluZGV4O1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09ICdcXG4nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbmRleCA9IDE7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgc3VidmFsdWUgPSBjaGFyYWN0ZXI7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuICAgICAgc3VidmFsdWUgKz0gcXVldWU7XG4gICAgICBxdWV1ZSA9ICcnO1xuICAgIH1cblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBlYXQoc3VidmFsdWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKTtcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpO1xudmFyIHRyaW1UcmFpbGluZ0xpbmVzID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpO1xudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyYWdyYXBoO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xuXG52YXIgVEFCX1NJWkUgPSA0O1xuXG4vKiBUb2tlbmlzZSBwYXJhZ3JhcGguICovXG5mdW5jdGlvbiBwYXJhZ3JhcGgoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNldHRpbmdzID0gc2VsZi5vcHRpb25zO1xuICB2YXIgY29tbW9ubWFyayA9IHNldHRpbmdzLmNvbW1vbm1hcms7XG4gIHZhciBnZm0gPSBzZXR0aW5ncy5nZm07XG4gIHZhciB0b2tlbml6ZXJzID0gc2VsZi5ibG9ja1Rva2VuaXplcnM7XG4gIHZhciBpbnRlcnJ1cHRvcnMgPSBzZWxmLmludGVycnVwdFBhcmFncmFwaDtcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUpO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB2YXIgcG9zaXRpb247XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIHNpemU7XG4gIHZhciBub3c7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgLyogRWF0IGV2ZXJ5dGhpbmcgaWYgdGhlcmXigJlzIG5vIGZvbGxvd2luZyBuZXdsaW5lLiAqL1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gbGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLyogU3RvcCBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgTkVXTElORS4gKi9cbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4ICsgMSkgPT09IENfTkVXTElORSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLyogSW4gY29tbW9ubWFyay1tb2RlLCBmb2xsb3dpbmcgaW5kZW50ZWQgbGluZXNcbiAgICAgKiBhcmUgcGFydCBvZiB0aGUgcGFyYWdyYXBoLiAqL1xuICAgIGlmIChjb21tb25tYXJrKSB7XG4gICAgICBzaXplID0gMDtcbiAgICAgIHBvc2l0aW9uID0gaW5kZXggKyAxO1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHBvc2l0aW9uKTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgICAgIHNpemUgPSBUQUJfU0laRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICBzaXplKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA+PSBUQUJfU0laRSkge1xuICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoQ19ORVdMSU5FLCBpbmRleCArIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSk7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZm9sbG93aW5nIGNvZGUgY29udGFpbnMgYSBwb3NzaWJsZVxuICAgICAqIGJsb2NrLiAqL1xuICAgIGlmIChpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBzZWxmLCBbZWF0LCBzdWJ2YWx1ZSwgdHJ1ZV0pKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBCcmVhayBpZiB0aGUgZm9sbG93aW5nIGxpbmUgc3RhcnRzIGEgbGlzdCwgd2hlblxuICAgICAqIGFscmVhZHkgaW4gYSBsaXN0LCBvciB3aGVuIGluIGNvbW1vbm1hcmssIG9yIHdoZW5cbiAgICAgKiBpbiBnZm0gbW9kZSBhbmQgdGhlIGJ1bGxldCBpcyAqbm90KiBudW1lcmljLiAqL1xuICAgIGlmIChcbiAgICAgIHRva2VuaXplcnMubGlzdC5jYWxsKHNlbGYsIGVhdCwgc3VidmFsdWUsIHRydWUpICYmXG4gICAgICAoXG4gICAgICAgIHNlbGYuaW5MaXN0IHx8XG4gICAgICAgIGNvbW1vbm1hcmsgfHxcbiAgICAgICAgKGdmbSAmJiAhZGVjaW1hbCh0cmltLmxlZnQoc3VidmFsdWUpLmNoYXJBdCgwKSkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IGluZGV4O1xuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUsIGluZGV4ICsgMSk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xICYmIHRyaW0odmFsdWUuc2xpY2UocG9zaXRpb24sIGluZGV4KSkgPT09ICcnKSB7XG4gICAgICBpbmRleCA9IHBvc2l0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmRleCk7XG5cbiAgaWYgKHRyaW0oc3VidmFsdWUpID09PSAnJykge1xuICAgIGVhdChzdWJ2YWx1ZSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpO1xuICBzdWJ2YWx1ZSA9IHRyaW1UcmFpbGluZ0xpbmVzKHN1YnZhbHVlKTtcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVmZXJlbmNlO1xucmVmZXJlbmNlLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBUX0xJTksgPSAnbGluayc7XG52YXIgVF9JTUFHRSA9ICdpbWFnZSc7XG52YXIgVF9GT09UTk9URSA9ICdmb290bm90ZSc7XG52YXIgUkVGRVJFTkNFX1RZUEVfU0hPUlRDVVQgPSAnc2hvcnRjdXQnO1xudmFyIFJFRkVSRU5DRV9UWVBFX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xudmFyIFJFRkVSRU5DRV9UWVBFX0ZVTEwgPSAnZnVsbCc7XG52YXIgQ19DQVJFVCA9ICdeJztcbnZhciBDX0JBQ0tTTEFTSCA9ICdcXFxcJztcbnZhciBDX0JSQUNLRVRfT1BFTiA9ICdbJztcbnZhciBDX0JSQUNLRVRfQ0xPU0UgPSAnXSc7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KDApO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGludHJvID0gJyc7XG4gIHZhciB0eXBlID0gVF9MSU5LO1xuICB2YXIgcmVmZXJlbmNlVHlwZSA9IFJFRkVSRU5DRV9UWVBFX1NIT1JUQ1VUO1xuICB2YXIgY29udGVudDtcbiAgdmFyIGlkZW50aWZpZXI7XG4gIHZhciBub3c7XG4gIHZhciBub2RlO1xuICB2YXIgZXhpdDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgYnJhY2tldGVkO1xuICB2YXIgZGVwdGg7XG5cbiAgLyogQ2hlY2sgd2hldGhlciB3ZeKAmXJlIGVhdGluZyBhbiBpbWFnZS4gKi9cbiAgaWYgKGNoYXJhY3RlciA9PT0gJyEnKSB7XG4gICAgdHlwZSA9IFRfSU1BR0U7XG4gICAgaW50cm8gPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICB9XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbmRleCsrO1xuICBpbnRybyArPSBjaGFyYWN0ZXI7XG4gIHF1ZXVlID0gJyc7XG5cbiAgLyogQ2hlY2sgd2hldGhlciB3ZeKAmXJlIGVhdGluZyBhIGZvb3Rub3RlLiAqL1xuICBpZiAoc2VsZi5vcHRpb25zLmZvb3Rub3RlcyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBDX0NBUkVUKSB7XG4gICAgLyogRXhpdCBpZiBgIVteYCBpcyBmb3VuZCwgc28gdGhlIGAhYCB3aWxsIGJlIHNlZW4gYXMgdGV4dCBhZnRlciB0aGlzLFxuICAgICAqIGFuZCB3ZeKAmWxsIGVudGVyIHRoaXMgZnVuY3Rpb24gYWdhaW4gd2hlbiBgW15gIGlzIGZvdW5kLiAqL1xuICAgIGlmICh0eXBlID09PSBUX0lNQUdFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW50cm8gKz0gQ19DQVJFVDtcbiAgICBpbmRleCsrO1xuICAgIHR5cGUgPSBUX0ZPT1ROT1RFO1xuICB9XG5cbiAgLyogRWF0IHRoZSB0ZXh0LiAqL1xuICBkZXB0aCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgICBicmFja2V0ZWQgPSB0cnVlO1xuICAgICAgZGVwdGgrKztcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX0NMT1NFKSB7XG4gICAgICBpZiAoIWRlcHRoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZXB0aC0tO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICBxdWV1ZSArPSBDX0JBQ0tTTEFTSDtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHN1YnZhbHVlID0gcXVldWU7XG4gIGNvbnRlbnQgPSBxdWV1ZTtcbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICBpZiAoY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfQ0xPU0UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbmRleCsrO1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgLyogSW5saW5lIGZvb3Rub3RlcyBjYW5ub3QgaGF2ZSBhbiBpZGVudGlmaWVyLiAqL1xuICBpZiAodHlwZSAhPT0gVF9GT09UTk9URSAmJiBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgaWRlbnRpZmllciA9ICcnO1xuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JSQUNLRVRfT1BFTiB8fCBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgICAgaWRlbnRpZmllciArPSBDX0JBQ0tTTEFTSDtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBpZGVudGlmaWVyICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgcmVmZXJlbmNlVHlwZSA9IGlkZW50aWZpZXIgPyBSRUZFUkVOQ0VfVFlQRV9GVUxMIDogUkVGRVJFTkNFX1RZUEVfQ09MTEFQU0VEO1xuICAgICAgcXVldWUgKz0gaWRlbnRpZmllciArIGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkZW50aWZpZXIgPSAnJztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgICBxdWV1ZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXIgPSBjb250ZW50O1xuICB9XG5cbiAgLyogQnJhY2tldHMgY2Fubm90IGJlIGluc2lkZSB0aGUgaWRlbnRpZmllci4gKi9cbiAgaWYgKHJlZmVyZW5jZVR5cGUgIT09IFJFRkVSRU5DRV9UWVBFX0ZVTEwgJiYgYnJhY2tldGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgPSBpbnRybyArIHN1YnZhbHVlO1xuXG4gIGlmICh0eXBlID09PSBUX0xJTksgJiYgc2VsZi5pbkxpbmspIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFRfRk9PVE5PVEUgJiYgY29udGVudC5pbmRleE9mKCcgJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlJyxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSlcbiAgICB9KTtcbiAgfVxuXG4gIG5vdyA9IGVhdC5ub3coKTtcbiAgbm93LmNvbHVtbiArPSBpbnRyby5sZW5ndGg7XG4gIG5vdy5vZmZzZXQgKz0gaW50cm8ubGVuZ3RoO1xuICBpZGVudGlmaWVyID0gcmVmZXJlbmNlVHlwZSA9PT0gUkVGRVJFTkNFX1RZUEVfRlVMTCA/IGlkZW50aWZpZXIgOiBjb250ZW50O1xuXG4gIG5vZGUgPSB7XG4gICAgdHlwZTogdHlwZSArICdSZWZlcmVuY2UnLFxuICAgIGlkZW50aWZpZXI6IG5vcm1hbGl6ZShpZGVudGlmaWVyKVxuICB9O1xuXG4gIGlmICh0eXBlID09PSBUX0xJTksgfHwgdHlwZSA9PT0gVF9JTUFHRSkge1xuICAgIG5vZGUucmVmZXJlbmNlVHlwZSA9IHJlZmVyZW5jZVR5cGU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gVF9MSU5LKSB7XG4gICAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKCk7XG4gICAgbm9kZS5jaGlsZHJlbiA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgbm93KTtcbiAgICBleGl0KCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gVF9JTUFHRSkge1xuICAgIG5vZGUuYWx0ID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUoY29udGVudCksIG5vdykgfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKG5vZGUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKTtcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvc3Ryb25nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3Ryb25nO1xuc3Ryb25nLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBDX0FTVEVSSVNLID0gJyonO1xudmFyIENfVU5ERVJTQ09SRSA9ICdfJztcblxuZnVuY3Rpb24gc3Ryb25nKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICB2YXIgbm93O1xuICB2YXIgcGVkYW50aWM7XG4gIHZhciBtYXJrZXI7XG4gIHZhciBxdWV1ZTtcbiAgdmFyIHN1YnZhbHVlO1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgcHJldjtcblxuICBpZiAoXG4gICAgKGNoYXJhY3RlciAhPT0gQ19BU1RFUklTSyAmJiBjaGFyYWN0ZXIgIT09IENfVU5ERVJTQ09SRSkgfHxcbiAgICB2YWx1ZS5jaGFyQXQoKytpbmRleCkgIT09IGNoYXJhY3RlclxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpYztcbiAgbWFya2VyID0gY2hhcmFjdGVyO1xuICBzdWJ2YWx1ZSA9IG1hcmtlciArIG1hcmtlcjtcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICBpbmRleCsrO1xuICBxdWV1ZSA9ICcnO1xuICBjaGFyYWN0ZXIgPSAnJztcblxuICBpZiAocGVkYW50aWMgJiYgd2hpdGVzcGFjZSh2YWx1ZS5jaGFyQXQoaW5kZXgpKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHByZXYgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciA9PT0gbWFya2VyICYmXG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gbWFya2VyICYmXG4gICAgICAoIXBlZGFudGljIHx8ICF3aGl0ZXNwYWNlKHByZXYpKVxuICAgICkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMik7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KCk7XG4gICAgICAgIG5vdy5jb2x1bW4gKz0gMjtcbiAgICAgICAgbm93Lm9mZnNldCArPSAyO1xuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIHN1YnZhbHVlKSh7XG4gICAgICAgICAgdHlwZTogJ3N0cm9uZycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwZWRhbnRpYyAmJiBjaGFyYWN0ZXIgPT09ICdcXFxcJykge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZTtcblxudmFyIENfQkFDS1NMQVNIID0gJ1xcXFwnO1xudmFyIENfVElDSyA9ICdgJztcbnZhciBDX0RBU0ggPSAnLSc7XG52YXIgQ19QSVBFID0gJ3wnO1xudmFyIENfQ09MT04gPSAnOic7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xuXG52YXIgTUlOX1RBQkxFX0NPTFVNTlMgPSAxO1xudmFyIE1JTl9UQUJMRV9ST1dTID0gMjtcblxudmFyIFRBQkxFX0FMSUdOX0xFRlQgPSAnbGVmdCc7XG52YXIgVEFCTEVfQUxJR05fQ0VOVEVSID0gJ2NlbnRlcic7XG52YXIgVEFCTEVfQUxJR05fUklHSFQgPSAncmlnaHQnO1xudmFyIFRBQkxFX0FMSUdOX05PTkUgPSBudWxsO1xuXG5mdW5jdGlvbiB0YWJsZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgaW5kZXg7XG4gIHZhciBhbGlnbm1lbnRzO1xuICB2YXIgYWxpZ25tZW50O1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciByb3c7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBsaW5lcztcbiAgdmFyIHF1ZXVlO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgaGFzRGFzaDtcbiAgdmFyIGFsaWduO1xuICB2YXIgY2VsbDtcbiAgdmFyIHByZWFtYmxlO1xuICB2YXIgY291bnQ7XG4gIHZhciBvcGVuaW5nO1xuICB2YXIgbm93O1xuICB2YXIgcG9zaXRpb247XG4gIHZhciBsaW5lQ291bnQ7XG4gIHZhciBsaW5lO1xuICB2YXIgcm93cztcbiAgdmFyIHRhYmxlO1xuICB2YXIgbGluZUluZGV4O1xuICB2YXIgcGlwZUluZGV4O1xuICB2YXIgZmlyc3Q7XG5cbiAgLyogRXhpdCB3aGVuIG5vdCBpbiBnZm0tbW9kZS4gKi9cbiAgaWYgKCFzZWxmLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogR2V0IHRoZSByb3dzLlxuICAgKiBEZXRlY3RpbmcgdGFibGVzIHNvb24gaXMgaGFyZCwgc28gdGhlcmUgYXJlIHNvbWVcbiAgICogY2hlY2tzIGZvciBwZXJmb3JtYW5jZSBoZXJlLCBzdWNoIGFzIHRoZSBtaW5pbXVtXG4gICAqIG51bWJlciBvZiByb3dzLCBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzIGluIHRoZVxuICAgKiBhbGlnbm1lbnQgcm93LiAqL1xuICBpbmRleCA9IDA7XG4gIGxpbmVDb3VudCA9IDA7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDE7XG4gIGxpbmVzID0gW107XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbGluZUluZGV4ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUsIGluZGV4KTtcbiAgICBwaXBlSW5kZXggPSB2YWx1ZS5pbmRleE9mKENfUElQRSwgaW5kZXggKyAxKTtcblxuICAgIGlmIChsaW5lSW5kZXggPT09IC0xKSB7XG4gICAgICBsaW5lSW5kZXggPSB2YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHBpcGVJbmRleCA9PT0gLTEgfHwgcGlwZUluZGV4ID4gbGluZUluZGV4KSB7XG4gICAgICBpZiAobGluZUNvdW50IDwgTUlOX1RBQkxFX1JPV1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsaW5lcy5wdXNoKHZhbHVlLnNsaWNlKGluZGV4LCBsaW5lSW5kZXgpKTtcbiAgICBsaW5lQ291bnQrKztcbiAgICBpbmRleCA9IGxpbmVJbmRleCArIDE7XG4gIH1cblxuICAvKiBQYXJzZSB0aGUgYWxpZ25tZW50IHJvdy4gKi9cbiAgc3VidmFsdWUgPSBsaW5lcy5qb2luKENfTkVXTElORSk7XG4gIGFsaWdubWVudHMgPSBsaW5lcy5zcGxpY2UoMSwgMSlbMF0gfHwgW107XG4gIGluZGV4ID0gMDtcbiAgbGVuZ3RoID0gYWxpZ25tZW50cy5sZW5ndGg7XG4gIGxpbmVDb3VudC0tO1xuICBhbGlnbm1lbnQgPSBmYWxzZTtcbiAgYWxpZ24gPSBbXTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBhbGlnbm1lbnRzLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1BJUEUpIHtcbiAgICAgIGhhc0Rhc2ggPSBudWxsO1xuXG4gICAgICBpZiAoYWxpZ25tZW50ID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbi5wdXNoKGFsaWdubWVudCk7XG4gICAgICAgIGFsaWdubWVudCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmaXJzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX0RBU0gpIHtcbiAgICAgIGhhc0Rhc2ggPSB0cnVlO1xuICAgICAgYWxpZ25tZW50ID0gYWxpZ25tZW50IHx8IFRBQkxFX0FMSUdOX05PTkU7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfQ09MT04pIHtcbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IFRBQkxFX0FMSUdOX0xFRlQpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gVEFCTEVfQUxJR05fQ0VOVEVSO1xuICAgICAgfSBlbHNlIGlmIChoYXNEYXNoICYmIGFsaWdubWVudCA9PT0gVEFCTEVfQUxJR05fTk9ORSkge1xuICAgICAgICBhbGlnbm1lbnQgPSBUQUJMRV9BTElHTl9SSUdIVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWdubWVudCA9IFRBQkxFX0FMSUdOX0xFRlQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgIT09IGZhbHNlKSB7XG4gICAgYWxpZ24ucHVzaChhbGlnbm1lbnQpO1xuICB9XG5cbiAgLyogRXhpdCB3aGVuIHdpdGhvdXQgZW5vdWdoIGNvbHVtbnMuICovXG4gIGlmIChhbGlnbi5sZW5ndGggPCBNSU5fVEFCTEVfQ09MVU1OUykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogUGFyc2UgdGhlIHJvd3MuICovXG4gIHBvc2l0aW9uID0gLTE7XG4gIHJvd3MgPSBbXTtcblxuICB0YWJsZSA9IGVhdChzdWJ2YWx1ZSkucmVzZXQoe1xuICAgIHR5cGU6ICd0YWJsZScsXG4gICAgYWxpZ246IGFsaWduLFxuICAgIGNoaWxkcmVuOiByb3dzXG4gIH0pO1xuXG4gIHdoaWxlICgrK3Bvc2l0aW9uIDwgbGluZUNvdW50KSB7XG4gICAgbGluZSA9IGxpbmVzW3Bvc2l0aW9uXTtcbiAgICByb3cgPSB7dHlwZTogJ3RhYmxlUm93JywgY2hpbGRyZW46IFtdfTtcblxuICAgIC8qIEVhdCBhIG5ld2xpbmUgY2hhcmFjdGVyIHdoZW4gdGhpcyBpcyBub3QgdGhlXG4gICAgICogZmlyc3Qgcm93LiAqL1xuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgZWF0KENfTkVXTElORSk7XG4gICAgfVxuXG4gICAgLyogRWF0IHRoZSByb3cuICovXG4gICAgZWF0KGxpbmUpLnJlc2V0KHJvdywgdGFibGUpO1xuXG4gICAgbGVuZ3RoID0gbGluZS5sZW5ndGggKyAxO1xuICAgIGluZGV4ID0gMDtcbiAgICBxdWV1ZSA9ICcnO1xuICAgIGNlbGwgPSAnJztcbiAgICBwcmVhbWJsZSA9IHRydWU7XG4gICAgY291bnQgPSBudWxsO1xuICAgIG9wZW5pbmcgPSBudWxsO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSBsaW5lLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfVEFCIHx8IGNoYXJhY3RlciA9PT0gQ19TUEFDRSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnJyB8fCBjaGFyYWN0ZXIgPT09IENfUElQRSkge1xuICAgICAgICBpZiAocHJlYW1ibGUpIHtcbiAgICAgICAgICBlYXQoY2hhcmFjdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY2hhcmFjdGVyICYmIG9wZW5pbmcpIHtcbiAgICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoKGNlbGwgfHwgY2hhcmFjdGVyKSAmJiAhcHJlYW1ibGUpIHtcbiAgICAgICAgICAgIHN1YnZhbHVlID0gY2VsbDtcblxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlLnNsaWNlKDAsIHF1ZXVlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIHF1ZXVlID0gcXVldWUuY2hhckF0KHF1ZXVlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnZhbHVlICs9IHF1ZXVlO1xuICAgICAgICAgICAgICAgIHF1ZXVlID0gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm93ID0gZWF0Lm5vdygpO1xuXG4gICAgICAgICAgICBlYXQoc3VidmFsdWUpKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlQ2VsbCcsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNlbGwsIG5vdylcbiAgICAgICAgICAgIH0sIHJvdyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWF0KHF1ZXVlICsgY2hhcmFjdGVyKTtcblxuICAgICAgICAgIHF1ZXVlID0gJyc7XG4gICAgICAgICAgY2VsbCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocXVldWUpIHtcbiAgICAgICAgICBjZWxsICs9IHF1ZXVlO1xuICAgICAgICAgIHF1ZXVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCAmJiBpbmRleCAhPT0gbGVuZ3RoIC0gMikge1xuICAgICAgICAgIGNlbGwgKz0gbGluZS5jaGFyQXQoaW5kZXggKyAxKTtcbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19USUNLKSB7XG4gICAgICAgICAgY291bnQgPSAxO1xuXG4gICAgICAgICAgd2hpbGUgKGxpbmUuY2hhckF0KGluZGV4ICsgMSkgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgY2VsbCArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW9wZW5pbmcpIHtcbiAgICAgICAgICAgIG9wZW5pbmcgPSBjb3VudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IG9wZW5pbmcpIHtcbiAgICAgICAgICAgIG9wZW5pbmcgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmVhbWJsZSA9IGZhbHNlO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICAvKiBFYXQgdGhlIGFsaWdubWVudCByb3cuICovXG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgZWF0KENfTkVXTElORSArIGFsaWdubWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0O1xuXG5mdW5jdGlvbiB0ZXh0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBtZXRob2RzO1xuICB2YXIgdG9rZW5pemVycztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciBwb3NpdGlvbjtcbiAgdmFyIHRva2VuaXplcjtcbiAgdmFyIG5hbWU7XG4gIHZhciBtaW47XG4gIHZhciBub3c7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBtZXRob2RzID0gc2VsZi5pbmxpbmVNZXRob2RzO1xuICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcbiAgdG9rZW5pemVycyA9IHNlbGYuaW5saW5lVG9rZW5pemVycztcbiAgaW5kZXggPSAtMTtcbiAgbWluID0gdmFsdWUubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdO1xuXG4gICAgaWYgKG5hbWUgPT09ICd0ZXh0JyB8fCAhdG9rZW5pemVyc1tuYW1lXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdG9rZW5pemVyID0gdG9rZW5pemVyc1tuYW1lXS5sb2NhdG9yO1xuXG4gICAgaWYgKCF0b2tlbml6ZXIpIHtcbiAgICAgIGVhdC5maWxlLmZhaWwoJ01pc3NpbmcgbG9jYXRvcjogYCcgKyBuYW1lICsgJ2AnKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbiA9IHRva2VuaXplci5jYWxsKHNlbGYsIHZhbHVlLCAxKTtcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgcG9zaXRpb24gPCBtaW4pIHtcbiAgICAgIG1pbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgbWluKTtcbiAgbm93ID0gZWF0Lm5vdygpO1xuXG4gIHNlbGYuZGVjb2RlKHN1YnZhbHVlLCBub3csIGZ1bmN0aW9uIChjb250ZW50LCBwb3NpdGlvbiwgc291cmNlKSB7XG4gICAgZWF0KHNvdXJjZSB8fCBjb250ZW50KSh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWx1ZTogY29udGVudFxuICAgIH0pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB0aGVtYXRpY0JyZWFrO1xuXG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfQVNURVJJU0sgPSAnKic7XG52YXIgQ19VTkRFUlNDT1JFID0gJ18nO1xudmFyIENfREFTSCA9ICctJztcblxudmFyIFRIRU1BVElDX0JSRUFLX01BUktFUl9DT1VOVCA9IDM7XG5cbmZ1bmN0aW9uIHRoZW1hdGljQnJlYWsoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMTtcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBtYXJrZXI7XG4gIHZhciBtYXJrZXJDb3VudDtcbiAgdmFyIHF1ZXVlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfVEFCICYmIGNoYXJhY3RlciAhPT0gQ19TUEFDRSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgaWYgKFxuICAgIGNoYXJhY3RlciAhPT0gQ19BU1RFUklTSyAmJlxuICAgIGNoYXJhY3RlciAhPT0gQ19EQVNIICYmXG4gICAgY2hhcmFjdGVyICE9PSBDX1VOREVSU0NPUkVcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWFya2VyID0gY2hhcmFjdGVyO1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIG1hcmtlckNvdW50ID0gMTtcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBtYXJrZXIpIHtcbiAgICAgIG1hcmtlckNvdW50Kys7XG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIG1hcmtlcjtcbiAgICAgIHF1ZXVlID0gJyc7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbWFya2VyQ291bnQgPj0gVEhFTUFUSUNfQlJFQUtfTUFSS0VSX0NPVU5UICYmXG4gICAgICAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IENfTkVXTElORSlcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlO1xuXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ3RoZW1hdGljQnJlYWsnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlY29kZSA9IHJlcXVpcmUoJ3BhcnNlLWVudGl0aWVzJyk7XG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL3VybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcbnVybC5sb2NhdG9yID0gbG9jYXRlO1xudXJsLm5vdEluTGluayA9IHRydWU7XG5cbnZhciBDX0JSQUNLRVRfT1BFTiA9ICdbJztcbnZhciBDX0JSQUNLRVRfQ0xPU0UgPSAnXSc7XG52YXIgQ19QQVJFTl9PUEVOID0gJygnO1xudmFyIENfUEFSRU5fQ0xPU0UgPSAnKSc7XG52YXIgQ19MVCA9ICc8JztcbnZhciBDX0FUX1NJR04gPSAnQCc7XG5cbnZhciBIVFRQX1BST1RPQ09MID0gJ2h0dHA6Ly8nO1xudmFyIEhUVFBTX1BST1RPQ09MID0gJ2h0dHBzOi8vJztcbnZhciBNQUlMVE9fUFJPVE9DT0wgPSAnbWFpbHRvOic7XG5cbnZhciBQUk9UT0NPTFMgPSBbXG4gIEhUVFBfUFJPVE9DT0wsXG4gIEhUVFBTX1BST1RPQ09MLFxuICBNQUlMVE9fUFJPVE9DT0xcbl07XG5cbnZhciBQUk9UT0NPTFNfTEVOR1RIID0gUFJPVE9DT0xTLmxlbmd0aDtcblxuZnVuY3Rpb24gdXJsKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIGNvbnRlbnQ7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBpbmRleDtcbiAgdmFyIHBvc2l0aW9uO1xuICB2YXIgcHJvdG9jb2w7XG4gIHZhciBtYXRjaDtcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgcGFyZW5Db3VudDtcbiAgdmFyIG5leHRDaGFyYWN0ZXI7XG4gIHZhciBleGl0O1xuXG4gIGlmICghc2VsZi5vcHRpb25zLmdmbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN1YnZhbHVlID0gJyc7XG4gIGluZGV4ID0gLTE7XG4gIGxlbmd0aCA9IFBST1RPQ09MU19MRU5HVEg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcm90b2NvbCA9IFBST1RPQ09MU1tpbmRleF07XG4gICAgbWF0Y2ggPSB2YWx1ZS5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpO1xuXG4gICAgaWYgKG1hdGNoLnRvTG93ZXJDYXNlKCkgPT09IHByb3RvY29sKSB7XG4gICAgICBzdWJ2YWx1ZSA9IG1hdGNoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzdWJ2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoO1xuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHF1ZXVlID0gJyc7XG4gIHBhcmVuQ291bnQgPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAod2hpdGVzcGFjZShjaGFyYWN0ZXIpIHx8IGNoYXJhY3RlciA9PT0gQ19MVCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSAnLicgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gJywnIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09ICc6JyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnOycgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gJ1wiJyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnXFwnJyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnKScgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gJ10nXG4gICAgKSB7XG4gICAgICBuZXh0Q2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMSk7XG5cbiAgICAgIGlmICghbmV4dENoYXJhY3RlciB8fCB3aGl0ZXNwYWNlKG5leHRDaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfUEFSRU5fT1BFTiB8fCBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgICBwYXJlbkNvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19QQVJFTl9DTE9TRSB8fCBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgcGFyZW5Db3VudC0tO1xuXG4gICAgICBpZiAocGFyZW5Db3VudCA8IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgKz0gcXVldWU7XG4gIGNvbnRlbnQgPSBzdWJ2YWx1ZTtcblxuICBpZiAocHJvdG9jb2wgPT09IE1BSUxUT19QUk9UT0NPTCkge1xuICAgIHBvc2l0aW9uID0gcXVldWUuaW5kZXhPZihDX0FUX1NJR04pO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cihNQUlMVE9fUFJPVE9DT0wubGVuZ3RoKTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJMaW5rKCk7XG4gIGNvbnRlbnQgPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIGVhdC5ub3coKSk7XG4gIGV4aXQoKTtcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogZGVjb2RlKHN1YnZhbHVlLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KSxcbiAgICBjaGlsZHJlbjogY29udGVudFxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuXG52YXIgTUVSR0VBQkxFX05PREVTID0ge1xuICB0ZXh0OiBtZXJnZVRleHQsXG4gIGJsb2NrcXVvdGU6IG1lcmdlQmxvY2txdW90ZVxufTtcblxuLyogQ2hlY2sgd2hldGhlciBhIG5vZGUgaXMgbWVyZ2VhYmxlIHdpdGggYWRqYWNlbnQgbm9kZXMuICovXG5mdW5jdGlvbiBtZXJnZWFibGUobm9kZSkge1xuICB2YXIgc3RhcnQ7XG4gIHZhciBlbmQ7XG5cbiAgaWYgKG5vZGUudHlwZSAhPT0gJ3RleHQnIHx8ICFub2RlLnBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGFydCA9IG5vZGUucG9zaXRpb24uc3RhcnQ7XG4gIGVuZCA9IG5vZGUucG9zaXRpb24uZW5kO1xuXG4gIC8qIE9ubHkgbWVyZ2Ugbm9kZXMgd2hpY2ggb2NjdXB5IHRoZSBzYW1lIHNpemUgYXMgdGhlaXJcbiAgICogYHZhbHVlYC4gKi9cbiAgcmV0dXJuIHN0YXJ0LmxpbmUgIT09IGVuZC5saW5lIHx8XG4gICAgICBlbmQuY29sdW1uIC0gc3RhcnQuY29sdW1uID09PSBub2RlLnZhbHVlLmxlbmd0aDtcbn1cblxuLyogTWVyZ2UgdHdvIHRleHQgbm9kZXM6IGBub2RlYCBpbnRvIGBwcmV2YC4gKi9cbmZ1bmN0aW9uIG1lcmdlVGV4dChwcmV2LCBub2RlKSB7XG4gIHByZXYudmFsdWUgKz0gbm9kZS52YWx1ZTtcblxuICByZXR1cm4gcHJldjtcbn1cblxuLyogTWVyZ2UgdHdvIGJsb2NrcXVvdGVzOiBgbm9kZWAgaW50byBgcHJldmAsIHVubGVzcyBpblxuICogQ29tbW9uTWFyayBtb2RlLiAqL1xuZnVuY3Rpb24gbWVyZ2VCbG9ja3F1b3RlKHByZXYsIG5vZGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jb21tb25tYXJrKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcmV2LmNoaWxkcmVuID0gcHJldi5jaGlsZHJlbi5jb25jYXQobm9kZS5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIHByZXY7XG59XG5cbi8qIENvbnN0cnVjdCBhIHRva2VuaXplci4gIFRoaXMgY3JlYXRlcyBib3RoXG4gKiBgdG9rZW5pemVJbmxpbmVgIGFuZCBgdG9rZW5pemVCbG9ja2AuICovXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcmV0dXJuIHRva2VuaXplO1xuXG4gIC8qIFRva2VuaXplciBmb3IgYSBib3VuZCBgdHlwZWAuICovXG4gIGZ1bmN0aW9uIHRva2VuaXplKHZhbHVlLCBsb2NhdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgb2Zmc2V0ID0gc2VsZi5vZmZzZXQ7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBtZXRob2RzID0gc2VsZlt0eXBlICsgJ01ldGhvZHMnXTtcbiAgICB2YXIgdG9rZW5pemVycyA9IHNlbGZbdHlwZSArICdUb2tlbml6ZXJzJ107XG4gICAgdmFyIGxpbmUgPSBsb2NhdGlvbi5saW5lO1xuICAgIHZhciBjb2x1bW4gPSBsb2NhdGlvbi5jb2x1bW47XG4gICAgdmFyIGluZGV4O1xuICAgIHZhciBsZW5ndGg7XG4gICAgdmFyIG1ldGhvZDtcbiAgICB2YXIgbmFtZTtcbiAgICB2YXIgbWF0Y2hlZDtcbiAgICB2YXIgdmFsdWVMZW5ndGg7XG5cbiAgICAvKiBUcmltIHdoaXRlIHNwYWNlIG9ubHkgbGluZXMuICovXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9XG5cbiAgICAvKiBFeHBvc2Ugb24gYGVhdGAuICovXG4gICAgZWF0Lm5vdyA9IG5vdztcbiAgICBlYXQuZmlsZSA9IHNlbGYuZmlsZTtcblxuICAgIC8qIFN5bmMgaW5pdGlhbCBvZmZzZXQuICovXG4gICAgdXBkYXRlUG9zaXRpb24oJycpO1xuXG4gICAgLyogSXRlcmF0ZSBvdmVyIGB2YWx1ZWAsIGFuZCBpdGVyYXRlIG92ZXIgYWxsXG4gICAgICogdG9rZW5pemVycy4gIFdoZW4gb25lIGVhdHMgc29tZXRoaW5nLCByZS1pdGVyYXRlXG4gICAgICogd2l0aCB0aGUgcmVtYWluaW5nIHZhbHVlLiAgSWYgbm8gdG9rZW5pemVyIGVhdHMsXG4gICAgICogc29tZXRoaW5nIGZhaWxlZCAoc2hvdWxkIG5vdCBoYXBwZW4pIGFuZCBhblxuICAgICAqIGV4Y2VwdGlvbiBpcyB0aHJvd24uICovXG4gICAgd2hpbGUgKHZhbHVlKSB7XG4gICAgICBpbmRleCA9IC0xO1xuICAgICAgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGg7XG4gICAgICBtYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIG5hbWUgPSBtZXRob2RzW2luZGV4XTtcbiAgICAgICAgbWV0aG9kID0gdG9rZW5pemVyc1tuYW1lXTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgbWV0aG9kICYmXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCFtZXRob2Qub25seUF0U3RhcnQgfHwgc2VsZi5hdFN0YXJ0KSAmJlxuICAgICAgICAgICghbWV0aG9kLm5vdEluTGlzdCB8fCAhc2VsZi5pbkxpc3QpICYmXG4gICAgICAgICAgKCFtZXRob2Qubm90SW5CbG9jayB8fCAhc2VsZi5pbkJsb2NrKSAmJlxuICAgICAgICAgICghbWV0aG9kLm5vdEluTGluayB8fCAhc2VsZi5pbkxpbmspXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgbWV0aG9kLmFwcGx5KHNlbGYsIFtlYXQsIHZhbHVlXSk7XG5cbiAgICAgICAgICBtYXRjaGVkID0gdmFsdWVMZW5ndGggIT09IHZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgc2VsZi5maWxlLmZhaWwobmV3IEVycm9yKCdJbmZpbml0ZSBsb29wJyksIGVhdC5ub3coKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5lb2YgPSBub3coKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG5cbiAgICAvKiBVcGRhdGUgbGluZSwgY29sdW1uLCBhbmQgb2Zmc2V0IGJhc2VkIG9uXG4gICAgICogYHZhbHVlYC4gKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IC0xO1xuICAgICAgdmFyIGluZGV4ID0gc3VidmFsdWUuaW5kZXhPZignXFxuJyk7XG5cbiAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGluZSsrO1xuICAgICAgICBsYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nLCBpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICBjb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gc3VidmFsdWUubGVuZ3RoIC0gbGFzdEluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAobGluZSBpbiBvZmZzZXQpIHtcbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb2x1bW4gKz0gb2Zmc2V0W2xpbmVdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA8PSBvZmZzZXRbbGluZV0pIHtcbiAgICAgICAgICBjb2x1bW4gPSBvZmZzZXRbbGluZV0gKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogR2V0IG9mZnNldC4gIENhbGxlZCBiZWZvcmUgdGhlIGZpcnN0IGNoYXJhY3RlciBpc1xuICAgICAqIGVhdGVuIHRvIHJldHJpZXZlIHRoZSByYW5nZSdzIG9mZnNldHMuICovXG4gICAgZnVuY3Rpb24gZ2V0T2Zmc2V0KCkge1xuICAgICAgdmFyIGluZGVudGF0aW9uID0gW107XG4gICAgICB2YXIgcG9zID0gbGluZSArIDE7XG5cbiAgICAgIC8qIERvbmUuICBDYWxsZWQgd2hlbiB0aGUgbGFzdCBjaGFyYWN0ZXIgaXNcbiAgICAgICAqIGVhdGVuIHRvIHJldHJpZXZlIHRoZSByYW5nZeKAmXMgb2Zmc2V0cy4gKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gbGluZSArIDE7XG5cbiAgICAgICAgd2hpbGUgKHBvcyA8IGxhc3QpIHtcbiAgICAgICAgICBpbmRlbnRhdGlvbi5wdXNoKChvZmZzZXRbcG9zXSB8fCAwKSArIDEpO1xuXG4gICAgICAgICAgcG9zKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZW50YXRpb247XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbi4gKi9cbiAgICBmdW5jdGlvbiBub3coKSB7XG4gICAgICB2YXIgcG9zID0ge2xpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1ufTtcblxuICAgICAgcG9zLm9mZnNldCA9IHNlbGYudG9PZmZzZXQocG9zKTtcblxuICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG5cbiAgICAvKiBTdG9yZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBub2RlLiAqL1xuICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IG5vdygpO1xuICAgIH1cblxuICAgIC8qIFRocm93IHdoZW4gYSB2YWx1ZSBpcyBpbmNvcnJlY3RseSBlYXRlbi5cbiAgICAgKiBUaGlzIHNob3VsZG7igJl0IGhhcHBlbiBidXQgd2lsbCB0aHJvdyBvbiBuZXcsXG4gICAgICogaW5jb3JyZWN0IHJ1bGVzLiAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRWF0KHN1YnZhbHVlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMCwgc3VidmFsdWUubGVuZ3RoKSAhPT0gc3VidmFsdWUpIHtcbiAgICAgICAgLyogQ2FwdHVyZSBzdGFjay10cmFjZS4gKi9cbiAgICAgICAgc2VsZi5maWxlLmZhaWwoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0luY29ycmVjdGx5IGVhdGVuIHZhbHVlOiBwbGVhc2UgcmVwb3J0IHRoaXMgJyArXG4gICAgICAgICAgICAnd2FybmluZyBvbiBodHRwOi8vZ2l0LmlvL3ZnNUZ0J1xuICAgICAgICAgICksXG4gICAgICAgICAgbm93KClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBNYXJrIHBvc2l0aW9uIGFuZCBwYXRjaCBgbm9kZS5wb3NpdGlvbmAuICovXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICB2YXIgYmVmb3JlID0gbm93KCk7XG5cbiAgICAgIHJldHVybiB1cGRhdGU7XG5cbiAgICAgIC8qIEFkZCB0aGUgcG9zaXRpb24gdG8gYSBub2RlLiAqL1xuICAgICAgZnVuY3Rpb24gdXBkYXRlKG5vZGUsIGluZGVudCkge1xuICAgICAgICB2YXIgcHJldiA9IG5vZGUucG9zaXRpb247XG4gICAgICAgIHZhciBzdGFydCA9IHByZXYgPyBwcmV2LnN0YXJ0IDogYmVmb3JlO1xuICAgICAgICB2YXIgY29tYmluZWQgPSBbXTtcbiAgICAgICAgdmFyIG4gPSBwcmV2ICYmIHByZXYuZW5kLmxpbmU7XG4gICAgICAgIHZhciBsID0gYmVmb3JlLmxpbmU7XG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydCk7XG5cbiAgICAgICAgLyogSWYgdGhlcmUgd2FzIGFscmVhZHkgYSBgcG9zaXRpb25gLCB0aGlzXG4gICAgICAgICAqIG5vZGUgd2FzIG1lcmdlZC4gIEZpeGluZyBgc3RhcnRgIHdhc27igJl0XG4gICAgICAgICAqIGhhcmQsIGJ1dCB0aGUgaW5kZW50IGlzIGRpZmZlcmVudC5cbiAgICAgICAgICogRXNwZWNpYWxseSBiZWNhdXNlIHNvbWUgaW5mb3JtYXRpb24sIHRoZVxuICAgICAgICAgKiBpbmRlbnQgYmV0d2VlbiBgbmAgYW5kIGBsYCB3YXNu4oCZdFxuICAgICAgICAgKiB0cmFja2VkLiAgTHVja2lseSwgdGhhdCBzcGFjZSBpc1xuICAgICAgICAgKiAoc2hvdWxkIGJlPykgZW1wdHksIHNvIHdlIGNhbiBzYWZlbHlcbiAgICAgICAgICogY2hlY2sgZm9yIGl0IG5vdy4gKi9cbiAgICAgICAgaWYgKHByZXYgJiYgaW5kZW50ICYmIHByZXYuaW5kZW50KSB7XG4gICAgICAgICAgY29tYmluZWQgPSBwcmV2LmluZGVudDtcblxuICAgICAgICAgIGlmIChuIDwgbCkge1xuICAgICAgICAgICAgd2hpbGUgKCsrbiA8IGwpIHtcbiAgICAgICAgICAgICAgY29tYmluZWQucHVzaCgob2Zmc2V0W25dIHx8IDApICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbWJpbmVkLnB1c2goYmVmb3JlLmNvbHVtbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZW50ID0gY29tYmluZWQuY29uY2F0KGluZGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnBvc2l0aW9uLmluZGVudCA9IGluZGVudCB8fCBbXTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBBZGQgYG5vZGVgIHRvIGBwYXJlbnRgcyBjaGlsZHJlbiBvciB0byBgdG9rZW5zYC5cbiAgICAgKiBQZXJmb3JtcyBtZXJnZXMgd2hlcmUgcG9zc2libGUuICovXG4gICAgZnVuY3Rpb24gYWRkKG5vZGUsIHBhcmVudCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogdG9rZW5zO1xuICAgICAgdmFyIHByZXYgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2ICYmXG4gICAgICAgIG5vZGUudHlwZSA9PT0gcHJldi50eXBlICYmXG4gICAgICAgIG5vZGUudHlwZSBpbiBNRVJHRUFCTEVfTk9ERVMgJiZcbiAgICAgICAgbWVyZ2VhYmxlKHByZXYpICYmXG4gICAgICAgIG1lcmdlYWJsZShub2RlKVxuICAgICAgKSB7XG4gICAgICAgIG5vZGUgPSBNRVJHRUFCTEVfTk9ERVNbbm9kZS50eXBlXS5jYWxsKHNlbGYsIHByZXYsIG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSAhPT0gcHJldikge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5hdFN0YXJ0ICYmIHRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2VsZi5leGl0U3RhcnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGBzdWJ2YWx1ZWAgZnJvbSBgdmFsdWVgLlxuICAgICAqIGBzdWJ2YWx1ZWAgbXVzdCBiZSBhdCB0aGUgc3RhcnQgb2YgYHZhbHVlYC4gKi9cbiAgICBmdW5jdGlvbiBlYXQoc3VidmFsdWUpIHtcbiAgICAgIHZhciBpbmRlbnQgPSBnZXRPZmZzZXQoKTtcbiAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgICAgdmFyIGN1cnJlbnQgPSBub3coKTtcblxuICAgICAgdmFsaWRhdGVFYXQoc3VidmFsdWUpO1xuXG4gICAgICBhcHBseS5yZXNldCA9IHJlc2V0O1xuICAgICAgcmVzZXQudGVzdCA9IHRlc3Q7XG4gICAgICBhcHBseS50ZXN0ID0gdGVzdDtcblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoc3VidmFsdWUubGVuZ3RoKTtcblxuICAgICAgdXBkYXRlUG9zaXRpb24oc3VidmFsdWUpO1xuXG4gICAgICBpbmRlbnQgPSBpbmRlbnQoKTtcblxuICAgICAgcmV0dXJuIGFwcGx5O1xuXG4gICAgICAvKiBBZGQgdGhlIGdpdmVuIGFyZ3VtZW50cywgYWRkIGBwb3NpdGlvbmAgdG9cbiAgICAgICAqIHRoZSByZXR1cm5lZCBub2RlLCBhbmQgcmV0dXJuIHRoZSBub2RlLiAqL1xuICAgICAgZnVuY3Rpb24gYXBwbHkobm9kZSwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwb3MoYWRkKHBvcyhub2RlKSwgcGFyZW50KSwgaW5kZW50KTtcbiAgICAgIH1cblxuICAgICAgLyogRnVuY3Rpb25zIGp1c3QgbGlrZSBhcHBseSwgYnV0IHJlc2V0cyB0aGVcbiAgICAgICAqIGNvbnRlbnQ6ICB0aGUgbGluZSBhbmQgY29sdW1uIGFyZSByZXZlcnNlZCxcbiAgICAgICAqIGFuZCB0aGUgZWF0ZW4gdmFsdWUgaXMgcmUtYWRkZWQuXG4gICAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igbm9kZXMgd2l0aCBhIHNpbmdsZVxuICAgICAgICogdHlwZSBvZiBjb250ZW50LCBzdWNoIGFzIGxpc3RzIGFuZCB0YWJsZXMuXG4gICAgICAgKiBTZWUgYGFwcGx5YCBhYm92ZSBmb3Igd2hhdCBwYXJhbWV0ZXJzIGFyZVxuICAgICAgICogZXhwZWN0ZWQuICovXG4gICAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcHBseS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmU7XG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uO1xuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG5cbiAgICAgIC8qIFRlc3QgdGhlIHBvc2l0aW9uLCBhZnRlciBlYXRpbmcsIGFuZCByZXZlcnNlXG4gICAgICAgKiB0byBhIG5vdC1lYXRlbiBzdGF0ZS4gKi9cbiAgICAgIGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwb3Moe30pO1xuXG4gICAgICAgIGxpbmUgPSBjdXJyZW50LmxpbmU7XG4gICAgICAgIGNvbHVtbiA9IGN1cnJlbnQuY29sdW1uO1xuICAgICAgICB2YWx1ZSA9IHN1YnZhbHVlICsgdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5wb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuXG4vKiBGYWN0b3J5IHRvIGRlLWVzY2FwZSBhIHZhbHVlLCBiYXNlZCBvbiBhIGxpc3QgYXQgYGtleWBcbiAqIGluIGBjdHhgLiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjdHgsIGtleSkge1xuICByZXR1cm4gdW5lc2NhcGU7XG5cbiAgLyogRGUtZXNjYXBlIGEgc3RyaW5nIHVzaW5nIHRoZSBleHByZXNzaW9uIGF0IGBrZXlgXG4gICAqIGluIGBjdHhgLiAqL1xuICBmdW5jdGlvbiB1bmVzY2FwZSh2YWx1ZSkge1xuICAgIHZhciBwcmV2ID0gMDtcbiAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCdcXFxcJyk7XG4gICAgdmFyIGVzY2FwZSA9IGN0eFtrZXldO1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgIHZhciBjaGFyYWN0ZXI7XG5cbiAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXYsIGluZGV4KSk7XG4gICAgICBwcmV2ID0gaW5kZXggKyAxO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KHByZXYpO1xuXG4gICAgICAvKiBJZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlciBpcyBub3QgYSB2YWxpZCBlc2NhcGUsXG4gICAgICAgKiBhZGQgdGhlIHNsYXNoLiAqL1xuICAgICAgaWYgKCFjaGFyYWN0ZXIgfHwgZXNjYXBlLmluZGV4T2YoY2hhcmFjdGVyKSA9PT0gLTEpIHtcbiAgICAgICAgcXVldWUucHVzaCgnXFxcXCcpO1xuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcXFwnLCBwcmV2KTtcbiAgICB9XG5cbiAgICBxdWV1ZS5wdXNoKHZhbHVlLnNsaWNlKHByZXYpKTtcblxuICAgIHJldHVybiBxdWV1ZS5qb2luKCcnKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycywgYW5kIHRoZWlyIGNvbHVtbiBsZW5ndGgsXG4gKiB3aGljaCBjYW4gYmUgdXNlZCBhcyBpbmRlbnRhdGlvbi4gKi9cbnZhciBjaGFyYWN0ZXJzID0geycgJzogMSwgJ1xcdCc6IDR9O1xuXG4vKiBHZXRzIGluZGVudGF0aW9uIGluZm9ybWF0aW9uIGZvciBhIGxpbmUuICovXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgaW5kZW50ID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIHZhciBzdG9wcyA9IHt9O1xuICB2YXIgc2l6ZTtcblxuICB3aGlsZSAoY2hhcmFjdGVyIGluIGNoYXJhY3RlcnMpIHtcbiAgICBzaXplID0gY2hhcmFjdGVyc1tjaGFyYWN0ZXJdO1xuXG4gICAgaW5kZW50ICs9IHNpemU7XG5cbiAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgIGluZGVudCA9IE1hdGguZmxvb3IoaW5kZW50IC8gc2l6ZSkgKiBzaXplO1xuICAgIH1cblxuICAgIHN0b3BzW2luZGVudF0gPSBpbmRleDtcblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7aW5kZW50OiBpbmRlbnQsIHN0b3BzOiBzdG9wc307XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdHRyaWJ1dGVOYW1lID0gJ1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qJztcbnZhciB1bnF1b3RlZCA9ICdbXlwiXFwnPTw+YFxcXFx1MDAwMC1cXFxcdTAwMjBdKyc7XG52YXIgc2luZ2xlUXVvdGVkID0gJ1xcJ1teXFwnXSpcXCcnO1xudmFyIGRvdWJsZVF1b3RlZCA9ICdcIlteXCJdKlwiJztcbnZhciBhdHRyaWJ1dGVWYWx1ZSA9ICcoPzonICsgdW5xdW90ZWQgKyAnfCcgKyBzaW5nbGVRdW90ZWQgKyAnfCcgKyBkb3VibGVRdW90ZWQgKyAnKSc7XG52YXIgYXR0cmlidXRlID0gJyg/OlxcXFxzKycgKyBhdHRyaWJ1dGVOYW1lICsgJyg/OlxcXFxzKj1cXFxccyonICsgYXR0cmlidXRlVmFsdWUgKyAnKT8pJztcbnZhciBvcGVuVGFnID0gJzxbQS1aYS16XVtBLVphLXowLTlcXFxcLV0qJyArIGF0dHJpYnV0ZSArICcqXFxcXHMqXFxcXC8/Pic7XG52YXIgY2xvc2VUYWcgPSAnPFxcXFwvW0EtWmEtel1bQS1aYS16MC05XFxcXC1dKlxcXFxzKj4nO1xudmFyIGNvbW1lbnQgPSAnPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPic7XG52YXIgcHJvY2Vzc2luZyA9ICc8Wz9dLio/Wz9dPic7XG52YXIgZGVjbGFyYXRpb24gPSAnPCFbQS1aYS16XStcXFxccytbXj5dKj4nO1xudmFyIGNkYXRhID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPic7XG5cbmV4cG9ydHMub3BlbkNsb3NlVGFnID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuVGFnICsgJ3wnICsgY2xvc2VUYWcgKyAnKScpO1xuXG5leHBvcnRzLnRhZyA9IG5ldyBSZWdFeHAoJ14oPzonICtcbiAgb3BlblRhZyArICd8JyArXG4gIGNsb3NlVGFnICsgJ3wnICtcbiAgY29tbWVudCArICd8JyArXG4gIHByb2Nlc3NpbmcgKyAnfCcgK1xuICBkZWNsYXJhdGlvbiArICd8JyArXG4gIGNkYXRhICtcbicpJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJydXB0O1xuXG5mdW5jdGlvbiBpbnRlcnJ1cHQoaW50ZXJydXB0b3JzLCB0b2tlbml6ZXJzLCBjdHgsIHBhcmFtcykge1xuICB2YXIgYm9vbHMgPSBbJ3BlZGFudGljJywgJ2NvbW1vbm1hcmsnXTtcbiAgdmFyIGNvdW50ID0gYm9vbHMubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gaW50ZXJydXB0b3JzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBpbnRlcnJ1cHRvcjtcbiAgdmFyIGNvbmZpZztcbiAgdmFyIGZuO1xuICB2YXIgb2Zmc2V0O1xuICB2YXIgYm9vbDtcbiAgdmFyIGlnbm9yZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGludGVycnVwdG9yID0gaW50ZXJydXB0b3JzW2luZGV4XTtcbiAgICBjb25maWcgPSBpbnRlcnJ1cHRvclsxXSB8fCB7fTtcbiAgICBmbiA9IGludGVycnVwdG9yWzBdO1xuICAgIG9mZnNldCA9IC0xO1xuICAgIGlnbm9yZSA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKCsrb2Zmc2V0IDwgY291bnQpIHtcbiAgICAgIGJvb2wgPSBib29sc1tvZmZzZXRdO1xuXG4gICAgICBpZiAoY29uZmlnW2Jvb2xdICE9PSB1bmRlZmluZWQgJiYgY29uZmlnW2Jvb2xdICE9PSBjdHgub3B0aW9uc1tib29sXSkge1xuICAgICAgICBpZ25vcmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaWdub3JlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW5pemVyc1tmbl0uYXBwbHkoY3R4LCBwYXJhbXMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb2xsYXBzZVdoaXRlU3BhY2UgPSByZXF1aXJlKCdjb2xsYXBzZS13aGl0ZS1zcGFjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcblxuLyogTm9ybWFsaXplIGFuIGlkZW50aWZpZXIuICBDb2xsYXBzZXMgbXVsdGlwbGUgd2hpdGUgc3BhY2VcbiAqIGNoYXJhY3RlcnMgaW50byBhIHNpbmdsZSBzcGFjZSwgYW5kIHJlbW92ZXMgY2FzaW5nLiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiBjb2xsYXBzZVdoaXRlU3BhY2UodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcbnZhciBnZXRJbmRlbnQgPSByZXF1aXJlKCcuL2dldC1pbmRlbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGVudGF0aW9uO1xuXG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xuXG4vKiBSZW1vdmUgdGhlIG1pbmltdW0gaW5kZW50IGZyb20gZXZlcnkgbGluZSBpbiBgdmFsdWVgLlxuICogU3VwcG9ydHMgYm90aCB0YWIsIHNwYWNlZCwgYW5kIG1peGVkIGluZGVudGF0aW9uIChhc1xuICogd2VsbCBhcyBwb3NzaWJsZSkuICovXG5mdW5jdGlvbiBpbmRlbnRhdGlvbih2YWx1ZSwgbWF4aW11bSkge1xuICB2YXIgdmFsdWVzID0gdmFsdWUuc3BsaXQoQ19ORVdMSU5FKTtcbiAgdmFyIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aCArIDE7XG4gIHZhciBtaW5JbmRlbnQgPSBJbmZpbml0eTtcbiAgdmFyIG1hdHJpeCA9IFtdO1xuICB2YXIgaW5kZXg7XG4gIHZhciBpbmRlbnRhdGlvbjtcbiAgdmFyIHN0b3BzO1xuICB2YXIgcGFkZGluZztcblxuICB2YWx1ZXMudW5zaGlmdChyZXBlYXQoQ19TUEFDRSwgbWF4aW11bSkgKyAnIScpO1xuXG4gIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgaW5kZW50YXRpb24gPSBnZXRJbmRlbnQodmFsdWVzW3Bvc2l0aW9uXSk7XG5cbiAgICBtYXRyaXhbcG9zaXRpb25dID0gaW5kZW50YXRpb24uc3RvcHM7XG5cbiAgICBpZiAodHJpbSh2YWx1ZXNbcG9zaXRpb25dKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQpIHtcbiAgICAgIGlmIChpbmRlbnRhdGlvbi5pbmRlbnQgPiAwICYmIGluZGVudGF0aW9uLmluZGVudCA8IG1pbkluZGVudCkge1xuICAgICAgICBtaW5JbmRlbnQgPSBpbmRlbnRhdGlvbi5pbmRlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbkluZGVudCA9IEluZmluaXR5O1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobWluSW5kZW50ICE9PSBJbmZpbml0eSkge1xuICAgIHBvc2l0aW9uID0gdmFsdWVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChwb3NpdGlvbi0tKSB7XG4gICAgICBzdG9wcyA9IG1hdHJpeFtwb3NpdGlvbl07XG4gICAgICBpbmRleCA9IG1pbkluZGVudDtcblxuICAgICAgd2hpbGUgKGluZGV4ICYmICEoaW5kZXggaW4gc3RvcHMpKSB7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHJpbSh2YWx1ZXNbcG9zaXRpb25dKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbWluSW5kZW50ICYmXG4gICAgICAgIGluZGV4ICE9PSBtaW5JbmRlbnRcbiAgICAgICkge1xuICAgICAgICBwYWRkaW5nID0gQ19UQUI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWRkaW5nID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlc1twb3NpdGlvbl0gPSBwYWRkaW5nICsgdmFsdWVzW3Bvc2l0aW9uXS5zbGljZShcbiAgICAgICAgaW5kZXggaW4gc3RvcHMgPyBzdG9wc1tpbmRleF0gKyAxIDogMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWx1ZXMuc2hpZnQoKTtcblxuICByZXR1cm4gdmFsdWVzLmpvaW4oQ19ORVdMSU5FKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=