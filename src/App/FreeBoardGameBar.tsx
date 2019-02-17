import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component<{}, {}> {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = 'white';
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div
          style={{
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <a href="/">
            <AppBar
              style={{
                position: 'fixed',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              title="FreeBoardGame.org"
              iconElementLeft={
                <img style={{ marginRight: '3px' }} src="/logo/fbg_logo_white_48.png" alt="FbG" />}
            />
          </a>
          <div style={{ height: '64px' }} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
