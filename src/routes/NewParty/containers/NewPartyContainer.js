import { connect } from 'react-redux'
import { newParty } from '../modules/newParty'

import NewParty from '../components/NewParty'

const mapDispatchToProps = {
  newParty
}

const mapStateToProps = (state) => ({
  ...state.newParty
})

export default connect(mapStateToProps, mapDispatchToProps)(NewParty)
