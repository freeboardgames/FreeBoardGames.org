import { connect } from 'react-redux'
import { sendClick } from '../modules/checkerGameState'
import CheckerGame from '../components/CheckerGame'

const mapDispatchToProps = {
  sendClick
}

const mapStateToProps = (state) => ({
  state: state.checkerGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckerGame)
