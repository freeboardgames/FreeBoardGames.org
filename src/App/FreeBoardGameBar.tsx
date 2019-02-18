import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
        <a href="/">
          <AppBar
            position="static"
            style={{
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Toolbar>
              <img style={{ marginRight: '3px' }} src="/logo/fbg_logo_white_48.png" alt="FbG" />
              <Typography>
                FreeBoardGame.org
                </Typography>
            </Toolbar>
          </AppBar>
        </a>
        <div style={{ height: '64px' }} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
