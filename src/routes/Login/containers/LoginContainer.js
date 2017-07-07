import { connect } from 'react-redux'
import { login } from '../modules/login'

import Login from '../components/Login'

const mapDispatchToProps = {
  login
}

const mapStateToProps = (state) => ({
  ...state.login,
  disconnected: state.connection.disconnected,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
