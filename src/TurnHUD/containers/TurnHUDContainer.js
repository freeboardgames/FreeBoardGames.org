import { connect } from 'react-redux'
import { sendMessage, savePushSubscription } from '../modules/message.js'
import TurnHUD from '../components/TurnHUD'

const mapDispatchToProps = {
  sendMessage,
  savePushSubscription
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(mapStateToProps, mapDispatchToProps)(TurnHUD)
