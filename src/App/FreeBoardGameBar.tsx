import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Typography from '@material-ui/core/Typography';

let logo: any = null;
if (typeof window !== 'undefined') {
  logo = require('./logo.svg'); // tslint:disable-line
}

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
                <Typography
                  component="h2"
                  style={{ fontFamily: 'Blox2', color: 'black' }}
                >
                  FbG
                </Typography>
              }
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
