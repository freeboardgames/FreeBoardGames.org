import { connect } from 'react-redux';
import { requestGameInfo } from '../modules/game';

import GameView from '../components/GameView';

const mapDispatchToProps = {
    requestGameInfo
};

const mapStateToProps = (state) => ({
    info: state.game.info,
    loading: state.game.loading,
    token: state.auth.token,
    disconnected: state.connection.disconnected,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
