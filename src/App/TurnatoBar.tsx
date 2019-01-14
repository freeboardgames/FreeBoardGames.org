import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
          style={{maxWidth: '500px',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}
        >
        <a href="/">
          <AppBar
            style={{position: 'fixed',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'}}
            title="Turnato"
            iconElementLeft={
              <img
               src={logo}
               style={{color: 'white', width: '32px',
                       height: '32px', marginTop: '8px'}}
               alt="Turnato logo."
              />}
          />
        </a>
        <div style={{height: '64px'}} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
