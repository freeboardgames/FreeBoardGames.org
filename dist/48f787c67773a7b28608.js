(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.jss-plugin-default-unit"],{

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    if (options[prop]) {
      return "" + value + options[prop];
    }

    if (units[prop]) {
      return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQvZGlzdC9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBdUM7O0FBRXZDLFNBQVMsb0RBQWdCO0FBQ3pCLFNBQVMsb0RBQWdCO0FBQ3pCLGNBQWMsb0RBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFQUFDIiwiZmlsZSI6IjQ4Zjc4N2M2Nzc3M2E3YjI4NjA4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzQ1NTVE9NU3VwcG9ydCB9IGZyb20gJ2pzcyc7XG5cbnZhciBweCA9IGhhc0NTU1RPTVN1cHBvcnQgPyB3aW5kb3cuQ1NTLnB4IDogJ3B4JztcbnZhciBtcyA9IGhhc0NTU1RPTVN1cHBvcnQgPyB3aW5kb3cuQ1NTLm1zIDogJ21zJztcbnZhciBwZXJjZW50ID0gaGFzQ1NTVE9NU3VwcG9ydCA/IHdpbmRvdy5DU1MucGVyY2VudCA6ICclJztcbi8qKlxuICogR2VuZXJhdGVkIGpzcy1wbHVnaW4tZGVmYXVsdC11bml0IENTUyBwcm9wZXJ0eSB1bml0c1xuICpcbiAqIEB0eXBlIG9iamVjdFxuICovXG5cbnZhciBkZWZhdWx0VW5pdHMgPSB7XG4gIC8vIEFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICdhbmltYXRpb24tZGVsYXknOiBtcyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbic6IG1zLFxuICAvLyBCYWNrZ3JvdW5kIHByb3BlcnRpZXNcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IHB4LFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogcHgsXG4gICdiYWNrZ3JvdW5kLXNpemUnOiBweCxcbiAgLy8gQm9yZGVyIFByb3BlcnRpZXNcbiAgYm9yZGVyOiBweCxcbiAgJ2JvcmRlci1ib3R0b20nOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJzogcHgsXG4gICdib3JkZXItbGVmdCc6IHB4LFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1yaWdodCc6IHB4LFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJzogcHgsXG4gICdib3JkZXItdG9wJzogcHgsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXdpZHRoJzogcHgsXG4gIC8vIE1hcmdpbiBwcm9wZXJ0aWVzXG4gIG1hcmdpbjogcHgsXG4gICdtYXJnaW4tYm90dG9tJzogcHgsXG4gICdtYXJnaW4tbGVmdCc6IHB4LFxuICAnbWFyZ2luLXJpZ2h0JzogcHgsXG4gICdtYXJnaW4tdG9wJzogcHgsXG4gIC8vIFBhZGRpbmcgcHJvcGVydGllc1xuICBwYWRkaW5nOiBweCxcbiAgJ3BhZGRpbmctYm90dG9tJzogcHgsXG4gICdwYWRkaW5nLWxlZnQnOiBweCxcbiAgJ3BhZGRpbmctcmlnaHQnOiBweCxcbiAgJ3BhZGRpbmctdG9wJzogcHgsXG4gIC8vIE1hc2sgcHJvcGVydGllc1xuICAnbWFzay1wb3NpdGlvbi14JzogcHgsXG4gICdtYXNrLXBvc2l0aW9uLXknOiBweCxcbiAgJ21hc2stc2l6ZSc6IHB4LFxuICAvLyBXaWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAgaGVpZ2h0OiBweCxcbiAgd2lkdGg6IHB4LFxuICAnbWluLWhlaWdodCc6IHB4LFxuICAnbWF4LWhlaWdodCc6IHB4LFxuICAnbWluLXdpZHRoJzogcHgsXG4gICdtYXgtd2lkdGgnOiBweCxcbiAgLy8gUG9zaXRpb24gcHJvcGVydGllc1xuICBib3R0b206IHB4LFxuICBsZWZ0OiBweCxcbiAgdG9wOiBweCxcbiAgcmlnaHQ6IHB4LFxuICAvLyBTaGFkb3cgcHJvcGVydGllc1xuICAnYm94LXNoYWRvdyc6IHB4LFxuICAndGV4dC1zaGFkb3cnOiBweCxcbiAgLy8gQ29sdW1uIHByb3BlcnRpZXNcbiAgJ2NvbHVtbi1nYXAnOiBweCxcbiAgJ2NvbHVtbi1ydWxlJzogcHgsXG4gICdjb2x1bW4tcnVsZS13aWR0aCc6IHB4LFxuICAnY29sdW1uLXdpZHRoJzogcHgsXG4gIC8vIEZvbnQgYW5kIHRleHQgcHJvcGVydGllc1xuICAnZm9udC1zaXplJzogcHgsXG4gICdmb250LXNpemUtZGVsdGEnOiBweCxcbiAgJ2xldHRlci1zcGFjaW5nJzogcHgsXG4gICd0ZXh0LWluZGVudCc6IHB4LFxuICAndGV4dC1zdHJva2UnOiBweCxcbiAgJ3RleHQtc3Ryb2tlLXdpZHRoJzogcHgsXG4gICd3b3JkLXNwYWNpbmcnOiBweCxcbiAgLy8gTW90aW9uIHByb3BlcnRpZXNcbiAgbW90aW9uOiBweCxcbiAgJ21vdGlvbi1vZmZzZXQnOiBweCxcbiAgLy8gT3V0bGluZSBwcm9wZXJ0aWVzXG4gIG91dGxpbmU6IHB4LFxuICAnb3V0bGluZS1vZmZzZXQnOiBweCxcbiAgJ291dGxpbmUtd2lkdGgnOiBweCxcbiAgLy8gUGVyc3BlY3RpdmUgcHJvcGVydGllc1xuICBwZXJzcGVjdGl2ZTogcHgsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICd0cmFuc2Zvcm0tb3JpZ2luJzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXknOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi16JzogcGVyY2VudCxcbiAgLy8gVHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICd0cmFuc2l0aW9uLWRlbGF5JzogbXMsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogbXMsXG4gIC8vIEFsaWdubWVudCBwcm9wZXJ0aWVzXG4gICd2ZXJ0aWNhbC1hbGlnbic6IHB4LFxuICAnZmxleC1iYXNpcyc6IHB4LFxuICAvLyBTb21lIHJhbmRvbSBwcm9wZXJ0aWVzXG4gICdzaGFwZS1tYXJnaW4nOiBweCxcbiAgc2l6ZTogcHgsXG4gIC8vIEdyaWQgcHJvcGVydGllc1xuICBncmlkOiBweCxcbiAgJ2dyaWQtZ2FwJzogcHgsXG4gICdncmlkLXJvdy1nYXAnOiBweCxcbiAgJ2dyaWQtY29sdW1uLWdhcCc6IHB4LFxuICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnOiBweCxcbiAgJ2dyaWQtYXV0by1yb3dzJzogcHgsXG4gICdncmlkLWF1dG8tY29sdW1ucyc6IHB4LFxuICAvLyBOb3QgZXhpc3RpbmcgcHJvcGVydGllcy5cbiAgLy8gVXNlZCB0byBhdm9pZCBpc3N1ZXMgd2l0aCBqc3MtcGx1Z2luLWV4cGFuZCBpbnRlZ3JhdGlvbi5cbiAgJ2JveC1zaGFkb3cteCc6IHB4LFxuICAnYm94LXNoYWRvdy15JzogcHgsXG4gICdib3gtc2hhZG93LWJsdXInOiBweCxcbiAgJ2JveC1zaGFkb3ctc3ByZWFkJzogcHgsXG4gICdmb250LWxpbmUtaGVpZ2h0JzogcHgsXG4gICd0ZXh0LXNoYWRvdy14JzogcHgsXG4gICd0ZXh0LXNoYWRvdy15JzogcHgsXG4gICd0ZXh0LXNoYWRvdy1ibHVyJzogcHhcbn07XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBvYmplY3QgYW5kIGFkZHMgYSBjYW1lbCBjYXNlZCBwcm9wZXJ0eSB2ZXJzaW9uLlxuICovXG5mdW5jdGlvbiBhZGRDYW1lbENhc2VkVmVyc2lvbihvYmopIHtcbiAgdmFyIHJlZ0V4cCA9IC8oLVthLXpdKS9nO1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICByZXR1cm4gc3RyWzFdLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW19rZXldID0gb2JqW19rZXldO1xuICAgIG5ld09ialtfa2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG52YXIgdW5pdHMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihkZWZhdWx0VW5pdHMpO1xuLyoqXG4gKiBSZWN1cnNpdmUgZGVlcCBzdHlsZSBwYXNzaW5nIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBpdGVyYXRlKHByb3AsIHZhbHVlW2ldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgZm9yICh2YXIgaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbX2lubmVyUHJvcF0gPSBpdGVyYXRlKHByb3AgKyBcIi1cIiArIF9pbm5lclByb3AsIHZhbHVlW19pbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGlmIChvcHRpb25zW3Byb3BdKSB7XG4gICAgICByZXR1cm4gXCJcIiArIHZhbHVlICsgb3B0aW9uc1twcm9wXTtcbiAgICB9XG5cbiAgICBpZiAodW5pdHNbcHJvcF0pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdW5pdHNbcHJvcF0gPT09ICdmdW5jdGlvbicgPyB1bml0c1twcm9wXSh2YWx1ZSkudG9TdHJpbmcoKSA6IFwiXCIgKyB2YWx1ZSArIHVuaXRzW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBZGQgdW5pdCB0byBudW1lcmljIHZhbHVlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRVbml0KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBjYW1lbENhc2VkT3B0aW9ucyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKG9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgc3R5bGVbcHJvcF0gPSBpdGVyYXRlKHByb3AsIHN0eWxlW3Byb3BdLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiBpdGVyYXRlKHByb3AsIHZhbHVlLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRVbml0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==