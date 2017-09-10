import { connect } from 'react-redux';
import { sendMessage, savePushSubscription } from '../modules/message.js';
import TurnHUD from '../components/TurnHUD';

const mapDispatchToProps = {
  sendMessage,
  savePushSubscription
};

// TODO(felizardo): Separate match info from state.
const mapStateToProps = (state) => ({
  messages: state.turnHUD.messages,
  matchInfo: state.turnHUD.matchInfo,
  disconnected: state.connection.disconnected,
  sendingMessage: state.connection.sendingMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(TurnHUD);
