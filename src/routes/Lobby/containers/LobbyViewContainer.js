import { connect } from 'react-redux'
import { joinLobby } from '../modules/lobby'

import LobbyView from '../components/LobbyView'

const mapDispatchToProps = {
  joinLobby
}

const mapStateToProps = (state) => ({
  lobby: state.lobby,
  token: state.auth.token,
  disconnected: state.connection.disconnected,
})

export default connect(mapStateToProps, mapDispatchToProps)(LobbyView)
