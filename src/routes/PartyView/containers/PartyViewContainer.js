import { connect } from 'react-redux'
import { down, connectToParty } from '../modules/party'

import PartyView from '../components/PartyView'

const mapDispatchToProps = {
  down, connectToParty
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.email,
  info: state.party.info,
  matches: state.party.matches,
  games: state.party.games,
  downMapping: state.party.downMapping,
  token: state.auth.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyView)
