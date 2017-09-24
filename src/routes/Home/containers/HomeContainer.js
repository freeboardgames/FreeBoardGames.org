import { connect } from 'react-redux';
import { requestHome } from '../modules/home';

import Home from '../components/Home';

const mapDispatchToProps = {
  requestHome
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  parties: state.home.parties,
  games: state.home.games,
  matches: state.home.matches,
  disconnected: state.connection.disconnected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
