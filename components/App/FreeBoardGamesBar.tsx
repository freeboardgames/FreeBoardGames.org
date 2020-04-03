import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FbgLogo from './media/fbg_logo_white_48.png';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import LoginForm from './Auth/LoginForm';

interface FBGBarProps {
  FEATURE_FLAG_readyForDesktopView?: boolean;
}

interface FBGBarState {
  loginFormOpen: boolean;
}

class FreeBoardGamesBar extends React.Component<FBGBarProps, FBGBarState> {
  constructor(props: FBGBarProps) {
    super(props);
    this.state = { loginFormOpen: false };
  }

  render() {
    const maxWidth = this.props.FEATURE_FLAG_readyForDesktopView ? '1200px' : '500px';

    const WhiteButton = withStyles({ root: { color: 'white' } })(Button);

    return (
      <React.Fragment>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AppBar position="sticky">
            <Link href="/">
              <a style={{ textDecoration: 'none' }}>
                <Toolbar>
                  <img style={{ marginRight: '12px', height: '48px' }} src={FbgLogo} alt="FbG" />
                  <Typography component="h1" variant="h6" style={{ color: 'white' }}>
                    FreeBoardGames.org
                  </Typography>
                  <WhiteButton style={{ marginLeft: 'auto' }} onClick={this._openLoginForm}>
                    Log in
                  </WhiteButton>
                </Toolbar>
              </a>
            </Link>
          </AppBar>
        </div>
        <div
          style={{
            maxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {this.state.loginFormOpen && <LoginForm />}
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }

  _openLoginForm = () => {
    this.setState((oldState) => {
      return { ...oldState, loginFormOpen: true };
    });
  };
}

export default FreeBoardGamesBar;
