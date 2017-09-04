import { connect } from 'react-redux';
import { newUser } from '../modules/login';

import Login from '../components/Login';

const mapDispatchToProps = {
  newUser
};

const mapStateToProps = (state) => ({
  ...state.login,
  disconnected: state.connection.disconnected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
