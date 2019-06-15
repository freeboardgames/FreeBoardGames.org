import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FbgLogo from './media/fbg_logo_white_48.png';

class App extends React.Component<{}, {}> {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = 'white';
    }
  }
  render() {
    return (
      <div
        style={{
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <AppBar position="sticky">
            <Toolbar>
              <img style={{ marginRight: '8px', height: '48px' }} src={FbgLogo} alt="FbG" />
              <Typography variant="h6" style={{ color: 'white' }}>
                FreeBoardGame.org
              </Typography>
            </Toolbar>
          </AppBar>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
