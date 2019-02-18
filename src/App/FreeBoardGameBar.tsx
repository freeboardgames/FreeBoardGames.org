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
        <a href="/" style={{ textDecoration: 'none' }}>
          <AppBar position="static">
            <Toolbar>
              <img style={{ marginRight: '8px', height: '48px' }} src="/logo/fbg_logo_white_48.png" alt="FbG" />
              <Typography variant="title" style={{ color: 'white' }}>
                FreeBoardGame.org
              </Typography>
            </Toolbar>
          </AppBar>
        </a>
        {this.props.children}
      </div>
    );
  }
}

export default App;
