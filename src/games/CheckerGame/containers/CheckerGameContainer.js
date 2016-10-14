import { connect } from 'react-redux'
import { selectPiece, movePiece, releasePiece } from '../modules/checkerSelectedPiece.js'
import CheckerGame from '../components/CheckerGame'

const mapDispatchToProps = {
  selectPiece,
  movePiece,
  releasePiece
}

const mapStateToProps = (state) => ({
  boardState: state.checkerGameState,
  selectedPiece: state.checkerSelectedPiece
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckerGame)
