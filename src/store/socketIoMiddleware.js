var socket = io();
var middlewareDispatch = null;
socket.on('socketIoMiddleware', (message) => {
  if (middlewareDispatch)
    middlewareDispatch(message);
});

export default (middlewareAPI) => (next) => (action) => {
  if (action.type == 'AUTH_SUCCESS') {
    socket.emit('login', action.payload.token);
  }
  if (action.type.indexOf('_REQUEST') > -1) {
    socket.emit('socketIoMiddleware', action);
  }
  middlewareDispatch = middlewareAPI.dispatch;
  return next(action);
}
