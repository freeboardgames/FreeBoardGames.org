import { connect } from 'react-redux'
import { down, joinParty, leaveParty } from '../modules/party'

import PartyView from '../components/PartyView'

const mapDispatchToProps = {
  down, joinParty, leaveParty
}

const mapStateToProps = (state) => ({
  currentUser: state.auth._id,
  info: state.party.info,
  matches: state.party.matches,
  games: state.party.games,
  downMapping: state.party.downMapping,
  token: state.auth.token,
  disconnected: state.connection.disconnected,
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyView)
