import { connect } from 'react-redux';
import { sendClick, joinMatch, leaveMatch, resign } from '../modules/checkerGameState';
import CheckerGame from '../components/CheckerGame';

const mapDispatchToProps = {
    sendClick, joinMatch, leaveMatch, resign
};

const mapStateToProps = (state) => ({
    state: state.checkerGameState
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckerGame);
