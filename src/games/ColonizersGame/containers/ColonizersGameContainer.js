import { connect } from 'react-redux';
// import { sendClick, joinMatch, leaveMatch, resign } from '../modules/chessGameState';
import ColonizersGame from '../components/ColonizersGame';

const mapDispatchToProps = {
  // sendClick, joinMatch, leaveMatch, resign
};

const mapStateToProps = (state) => ({
  state: state.colonizersGameState
});

export default connect(mapStateToProps, mapDispatchToProps)(ColonizersGame);
