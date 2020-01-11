(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.unified"],{

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */
var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js")
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js")
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js")
var string = __webpack_require__(/*! x-is-string */ "./node_modules/x-is-string/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")

/* Expose a frozen processor. */
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

/* Process pipeline. */
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file)
}

/* Function to create the first processor. */
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  /* Data management. */
  processor.data = data

  /* Lock. */
  processor.freeze = freeze

  /* Plug-ins. */
  processor.attachers = attachers
  processor.use = use

  /* API. */
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  /* Expose. */
  return processor

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      /* Get `key`. */
      return (own.call(namespace, key) && namespace[key]) || null
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    /* Get space. */
    return namespace
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser)) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler)) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return typeof value === 'function' && keys(value.prototype)
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key
  for (key in value) {
    return true
  }
  return false
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      [
        'Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ',
        'processor first, by invoking it: use `processor()` instead of ',
        '`processor`.'
      ].join('')
    )
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`')
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pZmllZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQSxhQUFhLG1CQUFPLENBQUMsOENBQVE7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLDBDQUFNO0FBQ3pCLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsOENBQVE7QUFDN0IsYUFBYSxtQkFBTyxDQUFDLHdEQUFhO0FBQ2xDLFlBQVksbUJBQU8sQ0FBQywwREFBYzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0YTE2MmVlMzkyYWE3YzRmNDEyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKiBEZXBlbmRlbmNpZXMuICovXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJylcbnZhciBiYWlsID0gcmVxdWlyZSgnYmFpbCcpXG52YXIgdmZpbGUgPSByZXF1aXJlKCd2ZmlsZScpXG52YXIgdHJvdWdoID0gcmVxdWlyZSgndHJvdWdoJylcbnZhciBzdHJpbmcgPSByZXF1aXJlKCd4LWlzLXN0cmluZycpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxuXG4vKiBFeHBvc2UgYSBmcm96ZW4gcHJvY2Vzc29yLiAqL1xubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkuZnJlZXplKClcblxudmFyIHNsaWNlID0gW10uc2xpY2VcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKiBQcm9jZXNzIHBpcGVsaW5lLiAqL1xudmFyIHBpcGVsaW5lID0gdHJvdWdoKClcbiAgLnVzZShwaXBlbGluZVBhcnNlKVxuICAudXNlKHBpcGVsaW5lUnVuKVxuICAudXNlKHBpcGVsaW5lU3RyaW5naWZ5KVxuXG5mdW5jdGlvbiBwaXBlbGluZVBhcnNlKHAsIGN0eCkge1xuICBjdHgudHJlZSA9IHAucGFyc2UoY3R4LmZpbGUpXG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lUnVuKHAsIGN0eCwgbmV4dCkge1xuICBwLnJ1bihjdHgudHJlZSwgY3R4LmZpbGUsIGRvbmUpXG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnRyZWUgPSB0cmVlXG4gICAgICBjdHguZmlsZSA9IGZpbGVcbiAgICAgIG5leHQoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVN0cmluZ2lmeShwLCBjdHgpIHtcbiAgY3R4LmZpbGUuY29udGVudHMgPSBwLnN0cmluZ2lmeShjdHgudHJlZSwgY3R4LmZpbGUpXG59XG5cbi8qIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmlyc3QgcHJvY2Vzc29yLiAqL1xuZnVuY3Rpb24gdW5pZmllZCgpIHtcbiAgdmFyIGF0dGFjaGVycyA9IFtdXG4gIHZhciB0cmFuc2Zvcm1lcnMgPSB0cm91Z2goKVxuICB2YXIgbmFtZXNwYWNlID0ge31cbiAgdmFyIGZyb3plbiA9IGZhbHNlXG4gIHZhciBmcmVlemVJbmRleCA9IC0xXG5cbiAgLyogRGF0YSBtYW5hZ2VtZW50LiAqL1xuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvKiBMb2NrLiAqL1xuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLyogUGx1Zy1pbnMuICovXG4gIHByb2Nlc3Nvci5hdHRhY2hlcnMgPSBhdHRhY2hlcnNcbiAgcHJvY2Vzc29yLnVzZSA9IHVzZVxuXG4gIC8qIEFQSS4gKi9cbiAgcHJvY2Vzc29yLnBhcnNlID0gcGFyc2VcbiAgcHJvY2Vzc29yLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuICBwcm9jZXNzb3IucnVuID0gcnVuXG4gIHByb2Nlc3Nvci5ydW5TeW5jID0gcnVuU3luY1xuICBwcm9jZXNzb3IucHJvY2VzcyA9IHByb2Nlc3NcbiAgcHJvY2Vzc29yLnByb2Nlc3NTeW5jID0gcHJvY2Vzc1N5bmNcblxuICAvKiBFeHBvc2UuICovXG4gIHJldHVybiBwcm9jZXNzb3JcblxuICAvKiBDcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGJhc2VkIG9uIHRoZSBwcm9jZXNzb3JcbiAgICogaW4gdGhlIGN1cnJlbnQgc2NvcGUuICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NvcigpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB1bmlmaWVkKClcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZGVzdGluYXRpb24udXNlLmFwcGx5KG51bGwsIGF0dGFjaGVyc1tpbmRleF0pXG4gICAgfVxuXG4gICAgZGVzdGluYXRpb24uZGF0YShleHRlbmQodHJ1ZSwge30sIG5hbWVzcGFjZSkpXG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25cbiAgfVxuXG4gIC8qIEZyZWV6ZTogdXNlZCB0byBzaWduYWwgYSBwcm9jZXNzb3IgdGhhdCBoYXMgZmluaXNoZWRcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIHRha2UgdW5pZmllZCBpdHNlbGYuICBJdOKAmXMgZnJvemVuLlxuICAgKiBQbHVnLWlucyBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGl0LiAgUmF0aGVyLCBpdCBzaG91bGRcbiAgICogYmUgZXh0ZW5kZWQsIGJ5IGludm9raW5nIGl0LCBiZWZvcmUgbW9kaWZ5aW5nIGl0LlxuICAgKlxuICAgKiBJbiBlc3NlbmNlLCBhbHdheXMgaW52b2tlIHRoaXMgd2hlbiBleHBvcnRpbmcgYVxuICAgKiBwcm9jZXNzb3IuICovXG4gIGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICB2YXIgdmFsdWVzXG4gICAgdmFyIHBsdWdpblxuICAgIHZhciBvcHRpb25zXG4gICAgdmFyIHRyYW5zZm9ybWVyXG5cbiAgICBpZiAoZnJvemVuKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrZnJlZXplSW5kZXggPCBhdHRhY2hlcnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZXMgPSBhdHRhY2hlcnNbZnJlZXplSW5kZXhdXG4gICAgICBwbHVnaW4gPSB2YWx1ZXNbMF1cbiAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMV1cbiAgICAgIHRyYW5zZm9ybWVyID0gbnVsbFxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWVzWzFdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybWVyID0gcGx1Z2luLmFwcGx5KHByb2Nlc3NvciwgdmFsdWVzLnNsaWNlKDEpKVxuXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy51c2UodHJhbnNmb3JtZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnJvemVuID0gdHJ1ZVxuICAgIGZyZWV6ZUluZGV4ID0gSW5maW5pdHlcblxuICAgIHJldHVybiBwcm9jZXNzb3JcbiAgfVxuXG4gIC8qIERhdGEgbWFuYWdlbWVudC5cbiAgICogR2V0dGVyIC8gc2V0dGVyIGZvciBwcm9jZXNzb3Itc3BlY2lmaWMgaW5mb3JtdGlvbi4gKi9cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0cmluZyhrZXkpKSB7XG4gICAgICAvKiBTZXQgYGtleWAuICovXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcblxuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvKiBHZXQgYGtleWAuICovXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8qIFNldCBzcGFjZS4gKi9cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8qIEdldCBzcGFjZS4gKi9cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvKiBQbHVnLWluIG1hbmFnZW1lbnQuXG4gICAqXG4gICAqIFBhc3MgaXQ6XG4gICAqICogICBhbiBhdHRhY2hlciBhbmQgb3B0aW9ucyxcbiAgICogKiAgIGEgcHJlc2V0LFxuICAgKiAqICAgYSBsaXN0IG9mIHByZXNldHMsIGF0dGFjaGVycywgYW5kIGFyZ3VtZW50cyAobGlzdFxuICAgKiAgICAgb2YgYXR0YWNoZXJzIGFuZCBvcHRpb25zKS4gKi9cbiAgZnVuY3Rpb24gdXNlKHZhbHVlKSB7XG4gICAgdmFyIHNldHRpbmdzXG5cbiAgICBhc3NlcnRVbmZyb3plbigndXNlJywgZnJvemVuKVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qIEVtcHR5ICovXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGxlbmd0aFxuICAgICAgdmFyIGluZGV4XG5cbiAgICAgIGlmIChwbHVnaW5zID09PSBudWxsIHx8IHBsdWdpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKiBFbXB0eSAqL1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICBsZW5ndGggPSBwbHVnaW5zLmxlbmd0aFxuICAgICAgICBpbmRleCA9IC0xXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhZGQocGx1Z2luc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBsaXN0IG9mIHBsdWdpbnMsIG5vdCBgJyArIHBsdWdpbnMgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbiwgdmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IGZpbmQocGx1Z2luKVxuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHBsYWluKGVudHJ5WzFdKSAmJiBwbGFpbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGV4dGVuZChlbnRyeVsxXSwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeVsxXSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2hlcnMucHVzaChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChwbHVnaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudHJ5XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZW50cnkgPSBhdHRhY2hlcnNbaW5kZXhdXG5cbiAgICAgIGlmIChlbnRyeVswXSA9PT0gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKVxuICAgKiBpbnRvIGEgVW5pc3Qgbm9kZSB1c2luZyB0aGUgYFBhcnNlcmAgb24gdGhlXG4gICAqIHByb2Nlc3Nvci4gKi9cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlcikpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8qIFJ1biB0cmFuc2Zvcm1zIG9uIGEgVW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGVcbiAgICogKGluIHN0cmluZyBvciBWRmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLiAqL1xuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgICAgIHRyZWUgPSB0cmVlIHx8IG5vZGVcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogUnVuIHRyYW5zZm9ybXMgb24gYSBVbmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZVxuICAgKiAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy4gKi9cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBydW4obm9kZSwgZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3J1blN5bmMnLCAncnVuJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbiAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICAgIHJlc3VsdCA9IHRyZWVcbiAgICB9XG4gIH1cblxuICAvKiBTdHJpbmdpZnkgYSBVbmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZVxuICAgKiAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgc3RyaW5nXG4gICAqIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IuICovXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeShub2RlLCBkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgQ29tcGlsZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgQ29tcGlsZXIgPSBwcm9jZXNzb3IuQ29tcGlsZXJcbiAgICBhc3NlcnRDb21waWxlcignc3RyaW5naWZ5JywgQ29tcGlsZXIpXG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuXG4gICAgaWYgKG5ld2FibGUoQ29tcGlsZXIpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBpbGVyKG5vZGUsIGZpbGUpLmNvbXBpbGUoKVxuICAgIH1cblxuICAgIHJldHVybiBDb21waWxlcihub2RlLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8qIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKVxuICAgKiBpbnRvIGEgVW5pc3Qgbm9kZSB1c2luZyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3NvcixcbiAgICogdGhlbiBydW4gdHJhbnNmb3JtcyBvbiB0aGF0IG5vZGUsIGFuZCBjb21waWxlIHRoZVxuICAgKiByZXN1bHRpbmcgbm9kZSB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLFxuICAgKiBhbmQgc3RvcmUgdGhhdCByZXN1bHQgb24gdGhlIFZGaWxlLiAqL1xuICBmdW5jdGlvbiBwcm9jZXNzKGRvYywgY2IpIHtcbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2VzcycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgICBwaXBlbGluZS5ydW4ocHJvY2Vzc29yLCB7ZmlsZTogZmlsZX0sIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFByb2Nlc3MgdGhlIGdpdmVuIGRvY3VtZW50IChpbiBzdHJpbmcgb3IgVkZpbGVcbiAgICogcmVwcmVzZW50YXRpb24pLCBzeW5jLiAqL1xuICBmdW5jdGlvbiBwcm9jZXNzU3luYyhkb2MpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciBmaWxlXG5cbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5Db21waWxlcilcbiAgICBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgcHJvY2VzcyhmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncHJvY2Vzc1N5bmMnLCAncHJvY2VzcycsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIGZpbGVcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vKiBDaGVjayBpZiBgZnVuY2AgaXMgYSBjb25zdHJ1Y3Rvci4gKi9cbmZ1bmN0aW9uIG5ld2FibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBrZXlzKHZhbHVlLnByb3RvdHlwZSlcbn1cblxuLyogQ2hlY2sgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3Qgd2l0aCBrZXlzLiAqL1xuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIga2V5XG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogQXNzZXJ0IGEgcGFyc2VyIGlzIGF2YWlsYWJsZS4gKi9cbmZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCBQYXJzZXIpIHtcbiAgaWYgKHR5cGVvZiBQYXJzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBQYXJzZXJgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgYSBjb21waWxlciBpcyBhdmFpbGFibGUuICovXG5mdW5jdGlvbiBhc3NlcnRDb21waWxlcihuYW1lLCBDb21waWxlcikge1xuICBpZiAodHlwZW9mIENvbXBpbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgQ29tcGlsZXJgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgdGhlIHByb2Nlc3NvciBpcyBub3QgZnJvemVuLiAqL1xuZnVuY3Rpb24gYXNzZXJ0VW5mcm96ZW4obmFtZSwgZnJvemVuKSB7XG4gIGlmIChmcm96ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBbXG4gICAgICAgICdDYW5ub3QgaW52b2tlIGAnICsgbmFtZSArICdgIG9uIGEgZnJvemVuIHByb2Nlc3Nvci5cXG5DcmVhdGUgYSBuZXcgJyxcbiAgICAgICAgJ3Byb2Nlc3NvciBmaXJzdCwgYnkgaW52b2tpbmcgaXQ6IHVzZSBgcHJvY2Vzc29yKClgIGluc3RlYWQgb2YgJyxcbiAgICAgICAgJ2Bwcm9jZXNzb3JgLidcbiAgICAgIF0uam9pbignJylcbiAgICApXG4gIH1cbn1cblxuLyogQXNzZXJ0IGBub2RlYCBpcyBhIFVuaXN0IG5vZGUuICovXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8ICFzdHJpbmcobm9kZS50eXBlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgdGhhdCBgY29tcGxldGVgIGlzIGB0cnVlYC4gKi9cbmZ1bmN0aW9uIGFzc2VydERvbmUobmFtZSwgYXN5bmNOYW1lLCBjb21wbGV0ZSkge1xuICBpZiAoIWNvbXBsZXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGZpbmlzaGVkIGFzeW5jLiBVc2UgYCcgKyBhc3luY05hbWUgKyAnYCBpbnN0ZWFkJ1xuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==