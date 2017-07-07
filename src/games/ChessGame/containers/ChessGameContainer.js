import { connect } from 'react-redux'
import { sendClick, joinMatch, leaveMatch } from '../modules/chessGameState'
import ChessGame from '../components/ChessGame'

const mapDispatchToProps = {
  sendClick, joinMatch, leaveMatch
}

const mapStateToProps = (state) => ({
  state: state.chessGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame)
