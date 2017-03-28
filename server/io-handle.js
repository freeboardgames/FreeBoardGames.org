const turnatoLogin = require('./turnato-login.js');
const partiesHandle = require('./parties-handle.js');
const partyHandle = require('./party-handle.js').partyHandle;
const downHandle = require('./party-handle.js').downHandle;
const matchJoinHandle = require('./match-handle.js').matchJoinHandle;
const loginHandle = require('./login-handle.js');

var ioHandle = (db, socket, dispatchRoom, dispatch) => {
  console.log('Client connected');
  var user = null;
  socket.on('login', (token) => {
    try {
      user = turnatoLogin.getLoggedUser(token);
    } catch (err) {
      console.error(err)
    }
  });
  socket.on('socketIoMiddleware', (message) => {
    try {
      if (message.type == 'LOGIN_REQUEST') {
        loginHandle(socket, dispatch, db, message.email, message.password)
      }
      if (!user)
        return;
      switch (message.type) {
        case 'PARTIES_REQUEST':
          partiesHandle(socket, dispatch, db, user);
          break;
        case 'PARTY_REQUEST':
          partyHandle(socket, dispatch, db, user, message.code);
          break;
        case 'DOWN_REQUEST':
          downHandle(socket, dispatchRoom, dispatch, db, user,
            message.party, message.game);
          break;
        case 'MATCH_JOIN_REQUEST':
          matchJoinHandle(socket, dispatchRoom, dispatch, db, user,
            message.match_code);
          break;
        default:
          console.log('UNKNOWN: ' + message.type)
          break;
      }
    } catch (err) {
      console.error(err)
    }
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
}

module.exports = ioHandle
