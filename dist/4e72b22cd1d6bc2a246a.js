(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.worker-loader"],{

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29ya2VyLWxvYWRlci9kaXN0L3dvcmtlcnMvSW5saW5lV29ya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IjRlNzJiMjJjZDFkNmJjMmEyNDZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMzQzOTEzL2hvdy10by1jcmVhdGUtYS13ZWItd29ya2VyLWZyb20tYS1zdHJpbmdcblxudmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY29udGVudCwgdXJsKSB7XG4gIHRyeSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBibG9iO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBCbG9iQnVpbGRlciA9IERlcHJlY2F0ZWQsIGJ1dCB3aWRlbHkgaW1wbGVtZW50ZWRcbiAgICAgICAgdmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG5cbiAgICAgICAgYmxvYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuXG4gICAgICAgIGJsb2IuYXBwZW5kKGNvbnRlbnQpO1xuXG4gICAgICAgIGJsb2IgPSBibG9iLmdldEJsb2IoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gVGhlIHByb3Bvc2VkIEFQSVxuICAgICAgICBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBXb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5ldyBXb3JrZXIoJ2RhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRlbnQpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0lubGluZSB3b3JrZXIgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgV29ya2VyKHVybCk7XG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==