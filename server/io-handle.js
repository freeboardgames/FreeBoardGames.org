const turnatoLogin = require('./turnato-login.js');
const homeHandle = require('./home-handle.js');
const joinPartyHandle = require('./party-handle.js').joinPartyHandle;
const leavePartyHandle = require('./party-handle.js').leavePartyHandle;
const downHandle = require('./party-handle.js').downHandle;
const joinMatchHandle = require('./match-handle.js').joinMatchHandle;
const leaveMatchHandle = require('./match-handle.js').leaveMatchHandle;
const matchActionRequest = require('./match-handle.js').matchActionRequest;
const newUserHandle = require('./new-user-handle.js');
const sendMessageHandle = require('./hud-handle.js').sendMessageHandle;
const savePushSubscriptionHandle = require('./hud-handle.js').savePushSubscriptionHandle;
const newPartyHandle = require('./newParty-handle.js');

var ioHandle = (db, socket, dispatchRoom, dispatch) => {
  var user = null;
  socket.on('login', (token) => {
    try {
      user = turnatoLogin.getLoggedUser(token);
    } catch (err) {
            console.error(err); // eslint-disable-line
    }
  });
  socket.on('socketIoMiddleware', (message, ackFn) => {
    if (ackFn) {
      ackFn();
    }
        console.log(message.type); // eslint-disable-line
    try {
      switch (message.type) {
      case 'NEW_USER_REQUEST':
        newUserHandle(socket, dispatch, db, message.nickname);
        return;
      case 'HOME_REQUEST':
        homeHandle(socket, dispatch, db, user);
        return;
      }
      if (!user) {
                console.log('LACK OF LOGIN, IGNORING: ' + message.type); // eslint-disable-line
        return;
      }
      switch (message.type) {
      case 'NEW_PARTY_REQUEST':
        newPartyHandle(socket, dispatch, db, user, message.name);
        break;
      case 'JOIN_PARTY_REQUEST':
        joinPartyHandle(socket, dispatchRoom, dispatch, db, user, message.code);
        break;
      case 'LEAVE_PARTY_REQUEST':
        leavePartyHandle(socket, dispatchRoom, dispatch, db, user, message.code);
        break;
      case 'DOWN_REQUEST':
        downHandle(socket, dispatchRoom, dispatch, db, user,
            message.party, message.game);
        break;
      case 'JOIN_MATCH_REQUEST':
        joinMatchHandle(socket, dispatchRoom, dispatch, db, user,
            message.match_code);
        break;
      case 'LEAVE_MATCH_REQUEST':
        leaveMatchHandle(socket, dispatchRoom, dispatch, db, user,
            message.match_code);
        break;
      case 'MATCH_ACTION_REQUEST':
        matchActionRequest(socket, dispatchRoom,
            dispatch, db, user, message.match_code, message);
        break;
      case 'SEND_MESSAGE_REQUEST':
        sendMessageHandle(socket, dispatchRoom, dispatch, db, user,
            message.payload.match_code, message);
        break;
      case 'SAVE_PUSH_SUBSCRIPTION_REQUEST':
        savePushSubscriptionHandle(socket, dispatchRoom, dispatch, db, user,
            message);
        break;
      default:
                console.log('UNKNOWN: ' + message.type); // eslint-disable-line
        break;
      }
    } catch (err) {
            console.error(err); // eslint-disable-line
    }
  });
    socket.on('disconnect', () => console.log('Client disconnected')); // eslint-disable-line
};

module.exports = ioHandle;
