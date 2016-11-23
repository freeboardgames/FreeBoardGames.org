import { connect } from 'react-redux'
import { requestParties } from '../modules/parties'

import Home from '../components/Home'

const mapDispatchToProps = {
  requestParties
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  parties: state.parties.list,
  partiesLoading: state.parties.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
