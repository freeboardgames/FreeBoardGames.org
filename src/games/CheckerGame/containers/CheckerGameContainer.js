import { connect } from 'react-redux'
import { sendClick, joinMatch } from '../modules/checkerGameState'
import CheckerGame from '../components/CheckerGame'

const mapDispatchToProps = {
  sendClick, joinMatch
}

const mapStateToProps = (state) => ({
  state: state.checkerGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckerGame)
