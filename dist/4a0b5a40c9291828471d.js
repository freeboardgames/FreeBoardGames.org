(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[2],{

/***/ "./src/common/gameMode.ts":
/*!********************************!*\
  !*** ./src/common/gameMode.ts ***!
  \********************************/
/*! exports provided: isLocalGame, isOnlineGame, isAIGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalGame", function() { return isLocalGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnlineGame", function() { return isOnlineGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAIGame", function() { return isAIGame; });
/* harmony import */ var _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Game/GameModePicker */ "./src/App/Game/GameModePicker.tsx");

function isLocalGame(gameArgs) {
  return gameArgs && gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend;
}
function isOnlineGame(gameArgs) {
  return gameArgs && gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend;
}
function isAIGame(gameArgs) {
  return gameArgs && gameArgs.mode === _App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2dhbWVNb2RlLnRzIl0sIm5hbWVzIjpbImlzTG9jYWxHYW1lIiwiZ2FtZUFyZ3MiLCJtb2RlIiwiR2FtZU1vZGUiLCJMb2NhbEZyaWVuZCIsImlzT25saW5lR2FtZSIsIk9ubGluZUZyaWVuZCIsImlzQUlHYW1lIiwiQUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUNsQyxTQUFPQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQkMsaUVBQVEsQ0FBQ0MsV0FBOUM7QUFDSDtBQUNNLFNBQVNDLFlBQVQsQ0FBc0JKLFFBQXRCLEVBQWdDO0FBQ25DLFNBQU9BLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEtBQWtCQyxpRUFBUSxDQUFDRyxZQUE5QztBQUNIO0FBQ00sU0FBU0MsUUFBVCxDQUFrQk4sUUFBbEIsRUFBNEI7QUFDL0IsU0FBT0EsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsS0FBa0JDLGlFQUFRLENBQUNLLEVBQTlDO0FBQ0gsQyIsImZpbGUiOiI0YTBiNWE0MGM5MjkxODI4NDcxZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVNb2RlIH0gZnJvbSAnLi4vQXBwL0dhbWUvR2FtZU1vZGVQaWNrZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxHYW1lKGdhbWVBcmdzKSB7XG4gICAgcmV0dXJuIGdhbWVBcmdzICYmIGdhbWVBcmdzLm1vZGUgPT09IEdhbWVNb2RlLkxvY2FsRnJpZW5kO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT25saW5lR2FtZShnYW1lQXJncykge1xuICAgIHJldHVybiBnYW1lQXJncyAmJiBnYW1lQXJncy5tb2RlID09PSBHYW1lTW9kZS5PbmxpbmVGcmllbmQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBSUdhbWUoZ2FtZUFyZ3MpIHtcbiAgICByZXR1cm4gZ2FtZUFyZ3MgJiYgZ2FtZUFyZ3MubW9kZSA9PT0gR2FtZU1vZGUuQUk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9