import { connect } from 'react-redux'
import { sendClick, joinMatch } from '../modules/chessGameState'
import ChessGame from '../components/ChessGame'

const mapDispatchToProps = {
  sendClick, joinMatch
}

const mapStateToProps = (state) => ({
  state: state.chessGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame)
