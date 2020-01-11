(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.react-markdown"],{

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-markdown/lib/ast-to-react.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type];
  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column].join('-');

  if (typeof renderer !== 'function' && typeof renderer !== 'string' && !isReactFragment(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
}

function isReactFragment(renderer) {
  return React.Fragment && React.Fragment === renderer;
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isTagRenderer = typeof renderer === 'string'; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isTagRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = mergeNodeChildren(node, parsedChildren);
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  if (node.loose) {
    return node.children;
  }

  if (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose) {
    return node.children;
  }

  return unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;

/***/ }),

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/get-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/react-markdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");

var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var addListMetadata = __webpack_require__(/*! mdast-add-list-metadata */ "./node_modules/mdast-add-list-metadata/index.js");

var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "./node_modules/react-markdown/lib/plugins/naive-html.js");

var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "./node_modules/react-markdown/lib/plugins/disallow-node.js");

var astToReact = __webpack_require__(/*! ./ast-to-react */ "./node_modules/react-markdown/lib/ast-to-react.js");

var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "./node_modules/react-markdown/lib/wrap-table-rows.js");

var getDefinitions = __webpack_require__(/*! ./get-definitions */ "./node_modules/react-markdown/lib/get-definitions.js");

var uriTransformer = __webpack_require__(/*! ./uri-transformer */ "./node_modules/react-markdown/lib/uri-transformer.js");

var defaultRenderers = __webpack_require__(/*! ./renderers */ "./node_modules/react-markdown/lib/renderers.js");

var symbols = __webpack_require__(/*! ./symbols */ "./node_modules/react-markdown/lib/symbols.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';
  var parserOptions = props.parserOptions;

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var plugins = [[parse, parserOptions]].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());
  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });
  var astPlugins = determineAstPlugins(props);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, rawAst);
  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (item) {
    var plugin = Array.isArray(item) ? item[0] : item;
    return plugin.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: [],
  parserOptions: {}
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array,
  parserOptions: PropTypes.object
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),

/***/ "./node_modules/react-markdown/lib/renderers.js":
/*!******************************************************!*\
  !*** ./node_modules/react-markdown/lib/renderers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  return supportsStringRender ? props.children : createElement('span', null, props.children);
}

function Root(props) {
  var useFragment = !props.className;
  var root = useFragment ? React.Fragment || 'div' : 'div';
  return createElement(root, useFragment ? null : props, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';

  if (props.escapeHtml) {
    var comp = React.Fragment || tag;
    return createElement(comp, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/symbols.js":
/*!****************************************************!*\
  !*** ./node_modules/react-markdown/lib/symbols.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/uri-transformer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2FzdC10by1yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2dldC1kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3BsdWdpbnMvZGlzYWxsb3ctbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3BsdWdpbnMvbmFpdmUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3JlYWN0LW1hcmtkb3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcmVuZGVyZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3VyaS10cmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3dyYXAtdGFibGUtcm93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLDRDQUFPOztBQUUzQixZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrR0FBK0c7O0FBRS9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDIiwiZmlsZSI6ImVjMGJlMGI1YTUyNmMyMDk3OTQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG5mdW5jdGlvbiBhc3RUb1JlYWN0KG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgdmFyIHJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlcnNbbm9kZS50eXBlXTtcbiAgdmFyIHBvcyA9IG5vZGUucG9zaXRpb24uc3RhcnQ7XG4gIHZhciBrZXkgPSBbbm9kZS50eXBlLCBwb3MubGluZSwgcG9zLmNvbHVtbl0uam9pbignLScpO1xuXG4gIGlmICh0eXBlb2YgcmVuZGVyZXIgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlbmRlcmVyICE9PSAnc3RyaW5nJyAmJiAhaXNSZWFjdEZyYWdtZW50KHJlbmRlcmVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmVyIGZvciB0eXBlIGBcIi5jb25jYXQobm9kZS50eXBlLCBcImAgbm90IGRlZmluZWQgb3IgaXMgbm90IHJlbmRlcmFibGVcIikpO1xuICB9XG5cbiAgdmFyIG5vZGVQcm9wcyA9IGdldE5vZGVQcm9wcyhub2RlLCBrZXksIG9wdGlvbnMsIHJlbmRlcmVyLCBwYXJlbnQsIGluZGV4KTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVuZGVyZXIsIG5vZGVQcm9wcywgbm9kZVByb3BzLmNoaWxkcmVuIHx8IHJlc29sdmVDaGlsZHJlbigpIHx8IHVuZGVmaW5lZCk7XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZE5vZGUsIGkpIHtcbiAgICAgIHJldHVybiBhc3RUb1JlYWN0KGNoaWxkTm9kZSwgb3B0aW9ucywge1xuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBwcm9wczogbm9kZVByb3BzXG4gICAgICB9LCBpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1JlYWN0RnJhZ21lbnQocmVuZGVyZXIpIHtcbiAgcmV0dXJuIFJlYWN0LkZyYWdtZW50ICYmIFJlYWN0LkZyYWdtZW50ID09PSByZW5kZXJlcjtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXMsIGNvbXBsZXhpdHlcblxuXG5mdW5jdGlvbiBnZXROb2RlUHJvcHMobm9kZSwga2V5LCBvcHRzLCByZW5kZXJlciwgcGFyZW50LCBpbmRleCkge1xuICB2YXIgcHJvcHMgPSB7XG4gICAga2V5OiBrZXlcbiAgfTtcbiAgdmFyIGlzVGFnUmVuZGVyZXIgPSB0eXBlb2YgcmVuZGVyZXIgPT09ICdzdHJpbmcnOyAvLyBgc291cmNlUG9zYCBpcyB0cnVlIGlmIHRoZSB1c2VyIHdhbnRzIHNvdXJjZSBpbmZvcm1hdGlvbiAobGluZS9jb2x1bW4gaW5mbyBmcm9tIG1hcmtkb3duIHNvdXJjZSlcblxuICBpZiAob3B0cy5zb3VyY2VQb3MgJiYgbm9kZS5wb3NpdGlvbikge1xuICAgIHByb3BzWydkYXRhLXNvdXJjZXBvcyddID0gZmxhdHRlblBvc2l0aW9uKG5vZGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKG9wdHMucmF3U291cmNlUG9zICYmICFpc1RhZ1JlbmRlcmVyKSB7XG4gICAgcHJvcHMuc291cmNlUG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICB9IC8vIElmIGBpbmNsdWRlTm9kZUluZGV4YCBpcyB0cnVlLCBwYXNzIG5vZGUgaW5kZXggaW5mbyB0byBhbGwgbm9uLXRhZyByZW5kZXJlcnNcblxuXG4gIGlmIChvcHRzLmluY2x1ZGVOb2RlSW5kZXggJiYgcGFyZW50Lm5vZGUgJiYgcGFyZW50Lm5vZGUuY2hpbGRyZW4gJiYgIWlzVGFnUmVuZGVyZXIpIHtcbiAgICBwcm9wcy5pbmRleCA9IHBhcmVudC5ub2RlLmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XG4gICAgcHJvcHMucGFyZW50Q2hpbGRDb3VudCA9IHBhcmVudC5ub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxuXG4gIHZhciByZWYgPSBub2RlLmlkZW50aWZpZXIgIT09IG51bGwgJiYgbm9kZS5pZGVudGlmaWVyICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZmluaXRpb25zW25vZGUuaWRlbnRpZmllcl0gfHwge30gOiBudWxsO1xuXG4gIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgY2FzZSAncm9vdCc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3B0cy5jbGFzc05hbWVcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0ZXh0JzpcbiAgICAgIHByb3BzLm5vZGVLZXkgPSBrZXk7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vZGUudmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hlYWRpbmcnOlxuICAgICAgcHJvcHMubGV2ZWwgPSBub2RlLmRlcHRoO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHByb3BzLnN0YXJ0ID0gbm9kZS5zdGFydDtcbiAgICAgIHByb3BzLm9yZGVyZWQgPSBub2RlLm9yZGVyZWQ7XG4gICAgICBwcm9wcy50aWdodCA9ICFub2RlLmxvb3NlO1xuICAgICAgcHJvcHMuZGVwdGggPSBub2RlLmRlcHRoO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaXN0SXRlbSc6XG4gICAgICBwcm9wcy5jaGVja2VkID0gbm9kZS5jaGVja2VkO1xuICAgICAgcHJvcHMudGlnaHQgPSAhbm9kZS5sb29zZTtcbiAgICAgIHByb3BzLm9yZGVyZWQgPSBub2RlLm9yZGVyZWQ7XG4gICAgICBwcm9wcy5pbmRleCA9IG5vZGUuaW5kZXg7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGdldExpc3RJdGVtQ2hpbGRyZW4obm9kZSwgcGFyZW50KS5tYXAoZnVuY3Rpb24gKGNoaWxkTm9kZSwgaSkge1xuICAgICAgICByZXR1cm4gYXN0VG9SZWFjdChjaGlsZE5vZGUsIG9wdHMsIHtcbiAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9LCBpKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdkZWZpbml0aW9uJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgaWRlbnRpZmllcjogbm9kZS5pZGVudGlmaWVyLFxuICAgICAgICB0aXRsZTogbm9kZS50aXRsZSxcbiAgICAgICAgdXJsOiBub2RlLnVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBsYW5ndWFnZTogbm9kZS5sYW5nICYmIG5vZGUubGFuZy5zcGxpdCgvXFxzLywgMSlbMF1cbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbmxpbmVDb2RlJzpcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9kZS52YWx1ZTtcbiAgICAgIHByb3BzLmlubGluZSA9IHRydWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICB0aXRsZTogbm9kZS50aXRsZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIHRhcmdldDogdHlwZW9mIG9wdHMubGlua1RhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMubGlua1RhcmdldChub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSkgOiBvcHRzLmxpbmtUYXJnZXQsXG4gICAgICAgIGhyZWY6IG9wdHMudHJhbnNmb3JtTGlua1VyaSA/IG9wdHMudHJhbnNmb3JtTGlua1VyaShub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSkgOiBub2RlLnVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgYWx0OiBub2RlLmFsdCB8fCB1bmRlZmluZWQsXG4gICAgICAgIHRpdGxlOiBub2RlLnRpdGxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgc3JjOiBvcHRzLnRyYW5zZm9ybUltYWdlVXJpID8gb3B0cy50cmFuc2Zvcm1JbWFnZVVyaShub2RlLnVybCwgbm9kZS5jaGlsZHJlbiwgbm9kZS50aXRsZSwgbm9kZS5hbHQpIDogbm9kZS51cmxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5rUmVmZXJlbmNlJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHh0ZW5kKHJlZiwge1xuICAgICAgICBocmVmOiBvcHRzLnRyYW5zZm9ybUxpbmtVcmkgPyBvcHRzLnRyYW5zZm9ybUxpbmtVcmkocmVmLmhyZWYpIDogcmVmLmhyZWZcbiAgICAgIH0pKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW1hZ2VSZWZlcmVuY2UnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBzcmM6IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkgJiYgcmVmLmhyZWYgPyBvcHRzLnRyYW5zZm9ybUltYWdlVXJpKHJlZi5ocmVmLCBub2RlLmNoaWxkcmVuLCByZWYudGl0bGUsIG5vZGUuYWx0KSA6IHJlZi5ocmVmLFxuICAgICAgICB0aXRsZTogcmVmLnRpdGxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYWx0OiBub2RlLmFsdCB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YWJsZSc6XG4gICAgY2FzZSAndGFibGVIZWFkJzpcbiAgICBjYXNlICd0YWJsZUJvZHknOlxuICAgICAgcHJvcHMuY29sdW1uQWxpZ25tZW50ID0gbm9kZS5hbGlnbjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGFibGVSb3cnOlxuICAgICAgcHJvcHMuaXNIZWFkZXIgPSBwYXJlbnQubm9kZS50eXBlID09PSAndGFibGVIZWFkJztcbiAgICAgIHByb3BzLmNvbHVtbkFsaWdubWVudCA9IHBhcmVudC5wcm9wcy5jb2x1bW5BbGlnbm1lbnQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RhYmxlQ2VsbCc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIGlzSGVhZGVyOiBwYXJlbnQucHJvcHMuaXNIZWFkZXIsXG4gICAgICAgIGFsaWduOiBwYXJlbnQucHJvcHMuY29sdW1uQWxpZ25tZW50W2luZGV4XVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3ZpcnR1YWxIdG1sJzpcbiAgICAgIHByb3BzLnRhZyA9IG5vZGUudGFnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdodG1sJzpcbiAgICAgIC8vIEB0b2RvIGZpbmQgYSBiZXR0ZXIgd2F5IHRoYW4gdGhpc1xuICAgICAgcHJvcHMuaXNCbG9jayA9IG5vZGUucG9zaXRpb24uc3RhcnQubGluZSAhPT0gbm9kZS5wb3NpdGlvbi5lbmQubGluZTtcbiAgICAgIHByb3BzLmVzY2FwZUh0bWwgPSBvcHRzLmVzY2FwZUh0bWw7XG4gICAgICBwcm9wcy5za2lwSHRtbCA9IG9wdHMuc2tpcEh0bWw7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhcnNlZEh0bWwnOlxuICAgICAge1xuICAgICAgICB2YXIgcGFyc2VkQ2hpbGRyZW47XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJzZWRDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGFzdFRvUmVhY3QoY2hpbGQsIG9wdHMsIHtcbiAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgICAgICB9LCBpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLmVzY2FwZUh0bWwgPSBvcHRzLmVzY2FwZUh0bWw7XG4gICAgICAgIHByb3BzLnNraXBIdG1sID0gb3B0cy5za2lwSHRtbDtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IG1lcmdlTm9kZUNoaWxkcmVuKG5vZGUsIHBhcnNlZENoaWxkcmVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywgeHRlbmQobm9kZSwge1xuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgIHBvc2l0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGlmICghaXNUYWdSZW5kZXJlciAmJiBub2RlLnZhbHVlKSB7XG4gICAgcHJvcHMudmFsdWUgPSBub2RlLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25EZWZpbmVkKHRhcmdldCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKHR5cGVvZiBhdHRyc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGFyZ2V0W2tleV0gPSBhdHRyc1trZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU5vZGVDaGlsZHJlbihub2RlLCBwYXJzZWRDaGlsZHJlbikge1xuICB2YXIgZWwgPSBub2RlLmVsZW1lbnQ7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgdmFyIEZyYWdtZW50ID0gUmVhY3QuRnJhZ21lbnQgfHwgJ2Rpdic7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGVsKTtcbiAgfVxuXG4gIGlmIChlbC5wcm9wcy5jaGlsZHJlbiB8fCBwYXJzZWRDaGlsZHJlbikge1xuICAgIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoZWwucHJvcHMuY2hpbGRyZW4pLmNvbmNhdChwYXJzZWRDaGlsZHJlbik7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgbnVsbCwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Qb3NpdGlvbihwb3MpIHtcbiAgcmV0dXJuIFtwb3Muc3RhcnQubGluZSwgJzonLCBwb3Muc3RhcnQuY29sdW1uLCAnLScsIHBvcy5lbmQubGluZSwgJzonLCBwb3MuZW5kLmNvbHVtbl0ubWFwKFN0cmluZykuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldExpc3RJdGVtQ2hpbGRyZW4obm9kZSwgcGFyZW50KSB7XG4gIGlmIChub2RlLmxvb3NlKSB7XG4gICAgcmV0dXJuIG5vZGUuY2hpbGRyZW47XG4gIH1cblxuICBpZiAocGFyZW50Lm5vZGUgJiYgbm9kZS5pbmRleCA+IDAgJiYgcGFyZW50Lm5vZGUuY2hpbGRyZW5bbm9kZS5pbmRleCAtIDFdLmxvb3NlKSB7XG4gICAgcmV0dXJuIG5vZGUuY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gdW53cmFwUGFyYWdyYXBocyhub2RlKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwUGFyYWdyYXBocyhub2RlKSB7XG4gIHJldHVybiBub2RlLmNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbiAoYXJyYXksIGNoaWxkKSB7XG4gICAgcmV0dXJuIGFycmF5LmNvbmNhdChjaGlsZC50eXBlID09PSAncGFyYWdyYXBoJyA/IGNoaWxkLmNoaWxkcmVuIHx8IFtdIDogW2NoaWxkXSk7XG4gIH0sIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3RUb1JlYWN0OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXREZWZpbml0aW9ucyhub2RlKSB7XG4gIHZhciBkZWZzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIChub2RlLmNoaWxkcmVuIHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24gKGRlZmluaXRpb25zLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSAnZGVmaW5pdGlvbicpIHtcbiAgICAgIGRlZmluaXRpb25zW2NoaWxkLmlkZW50aWZpZXJdID0ge1xuICAgICAgICBocmVmOiBjaGlsZC51cmwsXG4gICAgICAgIHRpdGxlOiBjaGlsZC50aXRsZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0RGVmaW5pdGlvbnMoY2hpbGQsIGRlZmluaXRpb25zKTtcbiAgfSwgZGVmcyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbmV4cG9ydHMub2ZUeXBlID0gZnVuY3Rpb24gKHR5cGVzLCBtb2RlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiB2aXNpdChub2RlLCB0eXBlLCBkaXNhbGxvdywgdHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzYWxsb3cobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHVudGFuZ2xlKG5vZGUsIGluZGV4LCBwYXJlbnQsIG1vZGUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5pZk5vdE1hdGNoID0gZnVuY3Rpb24gKGFsbG93Tm9kZSwgbW9kZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2aXNpdChub2RlLCBkaXNhbGxvdywgdHJ1ZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzYWxsb3cobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgJiYgIWFsbG93Tm9kZShub2RlLCBpbmRleCwgcGFyZW50KSkge1xuICAgICAgdW50YW5nbGUobm9kZSwgaW5kZXgsIHBhcmVudCwgbW9kZSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiB1bnRhbmdsZShub2RlLCBpbmRleCwgcGFyZW50LCBtb2RlKSB7XG4gIGlmIChtb2RlID09PSAncmVtb3ZlJykge1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09ICd1bndyYXAnKSB7XG4gICAgdmFyIGFyZ3MgPSBbaW5kZXgsIDFdO1xuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChub2RlLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHBhcmVudC5jaGlsZHJlbiwgYXJncyk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBOYWl2ZSwgc2ltcGxlIHBsdWdpbiB0byBtYXRjaCBpbmxpbmUgbm9kZXMgd2l0aG91dCBhdHRyaWJ1dGVzXG4gKiBUaGlzIGFsbG93cyBzYXkgPHN0cm9uZz5mb288L3N0cm9uZz4sIGJ1dCBub3QgPHN0cm9uZyBjbGFzcz1cInZlcnlcIj5mb288L3N0cm9uZz5cbiAqIEZvciBwcm9wZXIgSFRNTCBzdXBwb3J0LCB5b3UnbGwgd2FudCBhIGRpZmZlcmVudCBwbHVnaW5cbiAqKi9cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKTtcblxudmFyIHR5cGUgPSAndmlydHVhbEh0bWwnO1xudmFyIHNlbGZDbG9zaW5nUmUgPSAvXjwoYXJlYXxiYXNlfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8a2V5Z2VufGxpbmt8bWV0YXxwYXJhbXxzb3VyY2V8dHJhY2t8d2JyKVxccypcXC8/PiQvaTtcbnZhciBzaW1wbGVUYWdSZSA9IC9ePChcXC8/KShbYS16XSspXFxzKj4kLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHJlZSkge1xuICB2YXIgb3BlbjtcbiAgdmFyIGN1cnJlbnRQYXJlbnQ7XG4gIHZpc2l0KHRyZWUsICdodG1sJywgZnVuY3Rpb24gKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICBpZiAoY3VycmVudFBhcmVudCAhPT0gcGFyZW50KSB7XG4gICAgICBvcGVuID0gW107XG4gICAgICBjdXJyZW50UGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIHZhciBzZWxmQ2xvc2luZyA9IGdldFNlbGZDbG9zaW5nKG5vZGUpO1xuXG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHRhZzogc2VsZkNsb3NpbmcsXG4gICAgICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50ID0gZ2V0U2ltcGxlVGFnKG5vZGUsIHBhcmVudCk7XG5cbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGluZyA9IGZpbmRBbmRQdWxsKG9wZW4sIGN1cnJlbnQudGFnKTtcblxuICAgIGlmIChtYXRjaGluZykge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlydHVhbChjdXJyZW50LCBtYXRjaGluZywgcGFyZW50KSk7XG4gICAgfSBlbHNlIGlmICghY3VycmVudC5vcGVuaW5nKSB7XG4gICAgICBvcGVuLnB1c2goY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sIHRydWUgLy8gSXRlcmF0ZSBpbiByZXZlcnNlXG4gICk7XG4gIHJldHVybiB0cmVlO1xufTtcblxuZnVuY3Rpb24gZmluZEFuZFB1bGwob3BlbiwgbWF0Y2hpbmdUYWcpIHtcbiAgdmFyIGkgPSBvcGVuLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKG9wZW5baV0udGFnID09PSBtYXRjaGluZ1RhZykge1xuICAgICAgcmV0dXJuIG9wZW4uc3BsaWNlKGksIDEpWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0U2ltcGxlVGFnKG5vZGUsIHBhcmVudCkge1xuICB2YXIgbWF0Y2ggPSBub2RlLnZhbHVlLm1hdGNoKHNpbXBsZVRhZ1JlKTtcbiAgcmV0dXJuIG1hdGNoID8ge1xuICAgIHRhZzogbWF0Y2hbMl0sXG4gICAgb3BlbmluZzogIW1hdGNoWzFdLFxuICAgIG5vZGU6IG5vZGVcbiAgfSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxmQ2xvc2luZyhub2RlKSB7XG4gIHZhciBtYXRjaCA9IG5vZGUudmFsdWUubWF0Y2goc2VsZkNsb3NpbmdSZSk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZpcnR1YWwoZnJvbU5vZGUsIHRvTm9kZSwgcGFyZW50KSB7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihmcm9tTm9kZS5ub2RlKTtcbiAgdmFyIHRvSW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0b05vZGUubm9kZSk7XG4gIHZhciBleHRyYWN0ZWQgPSBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGZyb21JbmRleCwgdG9JbmRleCAtIGZyb21JbmRleCArIDEpO1xuICB2YXIgY2hpbGRyZW4gPSBleHRyYWN0ZWQuc2xpY2UoMSwgLTEpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHRhZzogZnJvbU5vZGUudGFnLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBzdGFydDogZnJvbU5vZGUubm9kZS5wb3NpdGlvbi5zdGFydCxcbiAgICAgIGVuZDogdG9Ob2RlLm5vZGUucG9zaXRpb24uZW5kLFxuICAgICAgaW5kZW50OiBbXVxuICAgIH1cbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciB1bmlmaWVkID0gcmVxdWlyZSgndW5pZmllZCcpO1xuXG52YXIgcGFyc2UgPSByZXF1aXJlKCdyZW1hcmstcGFyc2UnKTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIGFkZExpc3RNZXRhZGF0YSA9IHJlcXVpcmUoJ21kYXN0LWFkZC1saXN0LW1ldGFkYXRhJyk7XG5cbnZhciBuYWl2ZUh0bWwgPSByZXF1aXJlKCcuL3BsdWdpbnMvbmFpdmUtaHRtbCcpO1xuXG52YXIgZGlzYWxsb3dOb2RlID0gcmVxdWlyZSgnLi9wbHVnaW5zL2Rpc2FsbG93LW5vZGUnKTtcblxudmFyIGFzdFRvUmVhY3QgPSByZXF1aXJlKCcuL2FzdC10by1yZWFjdCcpO1xuXG52YXIgd3JhcFRhYmxlUm93cyA9IHJlcXVpcmUoJy4vd3JhcC10YWJsZS1yb3dzJyk7XG5cbnZhciBnZXREZWZpbml0aW9ucyA9IHJlcXVpcmUoJy4vZ2V0LWRlZmluaXRpb25zJyk7XG5cbnZhciB1cmlUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vdXJpLXRyYW5zZm9ybWVyJyk7XG5cbnZhciBkZWZhdWx0UmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIHN5bWJvbHMgPSByZXF1aXJlKCcuL3N5bWJvbHMnKTtcblxudmFyIGFsbFR5cGVzID0gT2JqZWN0LmtleXMoZGVmYXVsdFJlbmRlcmVycyk7XG5cbnZhciBSZWFjdE1hcmtkb3duID0gZnVuY3Rpb24gUmVhY3RNYXJrZG93bihwcm9wcykge1xuICB2YXIgc3JjID0gcHJvcHMuc291cmNlIHx8IHByb3BzLmNoaWxkcmVuIHx8ICcnO1xuICB2YXIgcGFyc2VyT3B0aW9ucyA9IHByb3BzLnBhcnNlck9wdGlvbnM7XG5cbiAgaWYgKHByb3BzLmFsbG93ZWRUeXBlcyAmJiBwcm9wcy5kaXNhbGxvd2VkVHlwZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgb25lIG9mIGBhbGxvd2VkVHlwZXNgIGFuZCBgZGlzYWxsb3dlZFR5cGVzYCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHJlbmRlcmVycyA9IHh0ZW5kKGRlZmF1bHRSZW5kZXJlcnMsIHByb3BzLnJlbmRlcmVycyk7XG4gIHZhciBwbHVnaW5zID0gW1twYXJzZSwgcGFyc2VyT3B0aW9uc11dLmNvbmNhdChwcm9wcy5wbHVnaW5zIHx8IFtdKTtcbiAgdmFyIHBhcnNlciA9IHBsdWdpbnMucmVkdWNlKGFwcGx5UGFyc2VyUGx1Z2luLCB1bmlmaWVkKCkpO1xuICB2YXIgcmF3QXN0ID0gcGFyc2VyLnBhcnNlKHNyYyk7XG4gIHZhciByZW5kZXJQcm9wcyA9IHh0ZW5kKHByb3BzLCB7XG4gICAgcmVuZGVyZXJzOiByZW5kZXJlcnMsXG4gICAgZGVmaW5pdGlvbnM6IGdldERlZmluaXRpb25zKHJhd0FzdClcbiAgfSk7XG4gIHZhciBhc3RQbHVnaW5zID0gZGV0ZXJtaW5lQXN0UGx1Z2lucyhwcm9wcyk7XG4gIHZhciBhc3QgPSBhc3RQbHVnaW5zLnJlZHVjZShmdW5jdGlvbiAobm9kZSwgcGx1Z2luKSB7XG4gICAgcmV0dXJuIHBsdWdpbihub2RlLCByZW5kZXJQcm9wcyk7XG4gIH0sIHJhd0FzdCk7XG4gIHJldHVybiBhc3RUb1JlYWN0KGFzdCwgcmVuZGVyUHJvcHMpO1xufTtcblxuZnVuY3Rpb24gYXBwbHlQYXJzZXJQbHVnaW4ocGFyc2VyLCBwbHVnaW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2luKSA/IHBhcnNlci51c2UuYXBwbHkocGFyc2VyLCBfdG9Db25zdW1hYmxlQXJyYXkocGx1Z2luKSkgOiBwYXJzZXIudXNlKHBsdWdpbik7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZUFzdFBsdWdpbnMocHJvcHMpIHtcbiAgdmFyIHBsdWdpbnMgPSBbd3JhcFRhYmxlUm93cywgYWRkTGlzdE1ldGFkYXRhKCldO1xuICB2YXIgZGlzYWxsb3dlZFR5cGVzID0gcHJvcHMuZGlzYWxsb3dlZFR5cGVzO1xuXG4gIGlmIChwcm9wcy5hbGxvd2VkVHlwZXMpIHtcbiAgICBkaXNhbGxvd2VkVHlwZXMgPSBhbGxUeXBlcy5maWx0ZXIoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlICE9PSAncm9vdCcgJiYgcHJvcHMuYWxsb3dlZFR5cGVzLmluZGV4T2YodHlwZSkgPT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHJlbW92YWxNZXRob2QgPSBwcm9wcy51bndyYXBEaXNhbGxvd2VkID8gJ3Vud3JhcCcgOiAncmVtb3ZlJztcblxuICBpZiAoZGlzYWxsb3dlZFR5cGVzICYmIGRpc2FsbG93ZWRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgcGx1Z2lucy5wdXNoKGRpc2FsbG93Tm9kZS5vZlR5cGUoZGlzYWxsb3dlZFR5cGVzLCByZW1vdmFsTWV0aG9kKSk7XG4gIH1cblxuICBpZiAocHJvcHMuYWxsb3dOb2RlKSB7XG4gICAgcGx1Z2lucy5wdXNoKGRpc2FsbG93Tm9kZS5pZk5vdE1hdGNoKHByb3BzLmFsbG93Tm9kZSwgcmVtb3ZhbE1ldGhvZCkpO1xuICB9XG5cbiAgdmFyIHJlbmRlckh0bWwgPSAhcHJvcHMuZXNjYXBlSHRtbCAmJiAhcHJvcHMuc2tpcEh0bWw7XG4gIHZhciBoYXNIdG1sUGFyc2VyID0gKHByb3BzLmFzdFBsdWdpbnMgfHwgW10pLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgcGx1Z2luID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICAgIHJldHVybiBwbHVnaW4uaWRlbnRpdHkgPT09IHN5bWJvbHMuSHRtbFBhcnNlcjtcbiAgfSk7XG5cbiAgaWYgKHJlbmRlckh0bWwgJiYgIWhhc0h0bWxQYXJzZXIpIHtcbiAgICBwbHVnaW5zLnB1c2gobmFpdmVIdG1sKTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcy5hc3RQbHVnaW5zID8gcGx1Z2lucy5jb25jYXQocHJvcHMuYXN0UGx1Z2lucykgOiBwbHVnaW5zO1xufVxuXG5SZWFjdE1hcmtkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVuZGVyZXJzOiB7fSxcbiAgZXNjYXBlSHRtbDogdHJ1ZSxcbiAgc2tpcEh0bWw6IGZhbHNlLFxuICBzb3VyY2VQb3M6IGZhbHNlLFxuICByYXdTb3VyY2VQb3M6IGZhbHNlLFxuICB0cmFuc2Zvcm1MaW5rVXJpOiB1cmlUcmFuc2Zvcm1lcixcbiAgYXN0UGx1Z2luczogW10sXG4gIHBsdWdpbnM6IFtdLFxuICBwYXJzZXJPcHRpb25zOiB7fVxufTtcblJlYWN0TWFya2Rvd24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIHJhd1NvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIGVzY2FwZUh0bWw6IFByb3BUeXBlcy5ib29sLFxuICBza2lwSHRtbDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93Tm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIGRpc2FsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIHRyYW5zZm9ybUxpbmtVcmk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBsaW5rVGFyZ2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0cmFuc2Zvcm1JbWFnZVVyaTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFzdFBsdWdpbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5mdW5jKSxcbiAgdW53cmFwRGlzYWxsb3dlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlbmRlcmVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGx1Z2luczogUHJvcFR5cGVzLmFycmF5LFxuICBwYXJzZXJPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuUmVhY3RNYXJrZG93bi50eXBlcyA9IGFsbFR5cGVzO1xuUmVhY3RNYXJrZG93bi5yZW5kZXJlcnMgPSBkZWZhdWx0UmVuZGVyZXJzO1xuUmVhY3RNYXJrZG93bi51cmlUcmFuc2Zvcm1lciA9IHVyaVRyYW5zZm9ybWVyO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdE1hcmtkb3duOyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIHN1cHBvcnRzU3RyaW5nUmVuZGVyID0gcGFyc2VJbnQoKFJlYWN0LnZlcnNpb24gfHwgJzE2Jykuc2xpY2UoMCwgMiksIDEwKSA+PSAxNjtcbnZhciBjcmVhdGVFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBicmVhazogJ2JyJyxcbiAgcGFyYWdyYXBoOiAncCcsXG4gIGVtcGhhc2lzOiAnZW0nLFxuICBzdHJvbmc6ICdzdHJvbmcnLFxuICB0aGVtYXRpY0JyZWFrOiAnaHInLFxuICBibG9ja3F1b3RlOiAnYmxvY2txdW90ZScsXG4gIGRlbGV0ZTogJ2RlbCcsXG4gIGxpbms6ICdhJyxcbiAgaW1hZ2U6ICdpbWcnLFxuICBsaW5rUmVmZXJlbmNlOiAnYScsXG4gIGltYWdlUmVmZXJlbmNlOiAnaW1nJyxcbiAgdGFibGU6IFNpbXBsZVJlbmRlcmVyLmJpbmQobnVsbCwgJ3RhYmxlJyksXG4gIHRhYmxlSGVhZDogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndGhlYWQnKSxcbiAgdGFibGVCb2R5OiBTaW1wbGVSZW5kZXJlci5iaW5kKG51bGwsICd0Ym9keScpLFxuICB0YWJsZVJvdzogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndHInKSxcbiAgdGFibGVDZWxsOiBUYWJsZUNlbGwsXG4gIHJvb3Q6IFJvb3QsXG4gIHRleHQ6IFRleHRSZW5kZXJlcixcbiAgbGlzdDogTGlzdCxcbiAgbGlzdEl0ZW06IExpc3RJdGVtLFxuICBkZWZpbml0aW9uOiBOdWxsUmVuZGVyZXIsXG4gIGhlYWRpbmc6IEhlYWRpbmcsXG4gIGlubGluZUNvZGU6IElubGluZUNvZGUsXG4gIGNvZGU6IENvZGVCbG9jayxcbiAgaHRtbDogSHRtbCxcbiAgdmlydHVhbEh0bWw6IFZpcnR1YWxIdG1sLFxuICBwYXJzZWRIdG1sOiBQYXJzZWRIdG1sXG59O1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIocHJvcHMpIHtcbiAgcmV0dXJuIHN1cHBvcnRzU3RyaW5nUmVuZGVyID8gcHJvcHMuY2hpbGRyZW4gOiBjcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBSb290KHByb3BzKSB7XG4gIHZhciB1c2VGcmFnbWVudCA9ICFwcm9wcy5jbGFzc05hbWU7XG4gIHZhciByb290ID0gdXNlRnJhZ21lbnQgPyBSZWFjdC5GcmFnbWVudCB8fCAnZGl2JyA6ICdkaXYnO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChyb290LCB1c2VGcmFnbWVudCA/IG51bGwgOiBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBTaW1wbGVSZW5kZXJlcih0YWcsIHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBUYWJsZUNlbGwocHJvcHMpIHtcbiAgdmFyIHN0eWxlID0gcHJvcHMuYWxpZ24gPyB7XG4gICAgdGV4dEFsaWduOiBwcm9wcy5hbGlnblxuICB9IDogdW5kZWZpbmVkO1xuICB2YXIgY29yZVByb3BzID0gZ2V0Q29yZVByb3BzKHByb3BzKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocHJvcHMuaXNIZWFkZXIgPyAndGgnIDogJ3RkJywgc3R5bGUgPyB4dGVuZCh7XG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNvcmVQcm9wcykgOiBjb3JlUHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gSGVhZGluZyhwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImhcIi5jb25jYXQocHJvcHMubGV2ZWwpLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgdmFyIGF0dHJzID0gZ2V0Q29yZVByb3BzKHByb3BzKTtcblxuICBpZiAocHJvcHMuc3RhcnQgIT09IG51bGwgJiYgcHJvcHMuc3RhcnQgIT09IDEpIHtcbiAgICBhdHRycy5zdGFydCA9IHByb3BzLnN0YXJ0LnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChwcm9wcy5vcmRlcmVkID8gJ29sJyA6ICd1bCcsIGF0dHJzLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHByb3BzKSB7XG4gIHZhciBjaGVja2JveCA9IG51bGw7XG5cbiAgaWYgKHByb3BzLmNoZWNrZWQgIT09IG51bGwpIHtcbiAgICB2YXIgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIGdldENvcmVQcm9wcyhwcm9wcyksIGNoZWNrYm94LCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIENvZGVCbG9jayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMubGFuZ3VhZ2UgJiYgXCJsYW5ndWFnZS1cIi5jb25jYXQocHJvcHMubGFuZ3VhZ2UpO1xuICB2YXIgY29kZSA9IGNyZWF0ZUVsZW1lbnQoJ2NvZGUnLCBjbGFzc05hbWUgPyB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSA6IG51bGwsIHByb3BzLnZhbHVlKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3ByZScsIGdldENvcmVQcm9wcyhwcm9wcyksIGNvZGUpO1xufVxuXG5mdW5jdGlvbiBJbmxpbmVDb2RlKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdjb2RlJywgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBIdG1sKHByb3BzKSB7XG4gIGlmIChwcm9wcy5za2lwSHRtbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHRhZyA9IHByb3BzLmlzQmxvY2sgPyAnZGl2JyA6ICdzcGFuJztcblxuICBpZiAocHJvcHMuZXNjYXBlSHRtbCkge1xuICAgIHZhciBjb21wID0gUmVhY3QuRnJhZ21lbnQgfHwgdGFnO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXAsIG51bGwsIHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIHZhciBub2RlUHJvcHMgPSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogcHJvcHMudmFsdWVcbiAgICB9XG4gIH07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgbm9kZVByb3BzKTtcbn1cblxuZnVuY3Rpb24gUGFyc2VkSHRtbChwcm9wcykge1xuICByZXR1cm4gcHJvcHNbJ2RhdGEtc291cmNlcG9zJ10gPyBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuZWxlbWVudCwge1xuICAgICdkYXRhLXNvdXJjZXBvcyc6IHByb3BzWydkYXRhLXNvdXJjZXBvcyddXG4gIH0pIDogcHJvcHMuZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gVmlydHVhbEh0bWwocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocHJvcHMudGFnLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIE51bGxSZW5kZXJlcigpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldENvcmVQcm9wcyhwcm9wcykge1xuICByZXR1cm4gcHJvcHNbJ2RhdGEtc291cmNlcG9zJ10gPyB7XG4gICAgJ2RhdGEtc291cmNlcG9zJzogcHJvcHNbJ2RhdGEtc291cmNlcG9zJ11cbiAgfSA6IHt9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSHRtbFBhcnNlciA9ICdfX1JNRF9IVE1MX1BBUlNFUl9fJztcbmV4cG9ydHMuSHRtbFBhcnNlciA9IHR5cGVvZiBTeW1ib2wgPT09ICd1bmRlZmluZWQnID8gSHRtbFBhcnNlciA6IFN5bWJvbChIdG1sUGFyc2VyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3RvY29scyA9IFsnaHR0cCcsICdodHRwcycsICdtYWlsdG8nLCAndGVsJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJpVHJhbnNmb3JtZXIodXJpKSB7XG4gIHZhciB1cmwgPSAodXJpIHx8ICcnKS50cmltKCk7XG4gIHZhciBmaXJzdCA9IHVybC5jaGFyQXQoMCk7XG5cbiAgaWYgKGZpcnN0ID09PSAnIycgfHwgZmlyc3QgPT09ICcvJykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgY29sb24gPSB1cmwuaW5kZXhPZignOicpO1xuXG4gIGlmIChjb2xvbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IHByb3RvY29scy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHByb3RvY29sID0gcHJvdG9jb2xzW2luZGV4XTtcblxuICAgIGlmIChjb2xvbiA9PT0gcHJvdG9jb2wubGVuZ3RoICYmIHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHByb3RvY29sKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gdXJsLmluZGV4T2YoJz8nKTtcblxuICBpZiAoaW5kZXggIT09IC0xICYmIGNvbG9uID4gaW5kZXgpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gIGlmIChpbmRleCAhPT0gLTEgJiYgY29sb24gPiBpbmRleCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblxuXG4gIHJldHVybiAnamF2YXNjcmlwdDp2b2lkKDApJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmlzaXQobm9kZSwgJ3RhYmxlJywgd3JhcCk7XG4gIHJldHVybiBub2RlO1xufTtcblxuZnVuY3Rpb24gd3JhcCh0YWJsZSkge1xuICB2YXIgY2hpbGRyZW4gPSB0YWJsZS5jaGlsZHJlbjtcbiAgdGFibGUuY2hpbGRyZW4gPSBbe1xuICAgIHR5cGU6ICd0YWJsZUhlYWQnLFxuICAgIGFsaWduOiB0YWJsZS5hbGlnbixcbiAgICBjaGlsZHJlbjogW2NoaWxkcmVuWzBdXSxcbiAgICBwb3NpdGlvbjogY2hpbGRyZW5bMF0ucG9zaXRpb25cbiAgfV07XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICB0YWJsZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHR5cGU6ICd0YWJsZUJvZHknLFxuICAgICAgYWxpZ246IHRhYmxlLmFsaWduLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLnNsaWNlKDEpLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgc3RhcnQ6IGNoaWxkcmVuWzFdLnBvc2l0aW9uLnN0YXJ0LFxuICAgICAgICBlbmQ6IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLnBvc2l0aW9uLmVuZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==