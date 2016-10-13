import { connect } from 'react-redux'
import { sendMessage } from '../modules/message.js'
import TurnHUD from '../components/TurnHUD'

const mapDispatchToProps = {
  sendMessage
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(mapStateToProps, mapDispatchToProps)(TurnHUD)
