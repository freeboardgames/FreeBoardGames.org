import { connect } from 'react-redux'
import { sendClick, joinMatch, leaveMatch } from '../modules/checkerGameState'
import CheckerGame from '../components/CheckerGame'

const mapDispatchToProps = {
  sendClick, joinMatch, leaveMatch
}

const mapStateToProps = (state) => ({
  state: state.checkerGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckerGame)
