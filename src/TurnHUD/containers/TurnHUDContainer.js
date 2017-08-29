import { connect } from 'react-redux';
import { sendMessage, savePushSubscription } from '../modules/message.js';
import TurnHUD from '../components/TurnHUD';

const mapDispatchToProps = {
    sendMessage,
    savePushSubscription
};

const mapStateToProps = (state) => ({
    messages: state.turnHUD.messages,
    disconnected: state.connection.disconnected,
    sendingMessage: state.connection.sendingMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(TurnHUD);
