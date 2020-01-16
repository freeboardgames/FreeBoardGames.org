import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FbgLogo from './media/fbg_logo_white_48.png';
import Link from 'next/link';

class App extends React.Component<{}, {}> {
  render() {
    const isProdChannel = process.env.CHANNEL === 'production';
    let appBarStyle;
    let versionInfo;

    if (!isProdChannel) {
      appBarStyle = { background: 'red' };
      versionInfo = (
        <Typography data-test-id="gitrev" variant="h6" style={{ color: 'white', marginLeft: 'auto' }}>
          {process.env.VERSION}
        </Typography>
      );
    }

    return (
      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <AppBar position="sticky" style={appBarStyle}>
          <Link href="/">
            <a style={{ textDecoration: 'none' }}>
              <Toolbar>
                <img style={{ marginRight: '8px', height: '48px' }} src={FbgLogo} alt="FbG" />
                <Typography variant="h6" style={{ color: 'white' }}>
                  FreeBoardGames.org
                </Typography>
                {versionInfo}
              </Toolbar>
            </a>
          </Link>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
