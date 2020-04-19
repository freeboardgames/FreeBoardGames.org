import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FbgLogo from './media/fbg_logo_white_48.png';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import NicknamePrompt from 'components/Lobby/NicknamePrompt';
import Cookies from 'js-cookie';

interface Props {
  FEATURE_FLAG_readyForDesktopView?: boolean;
  nicknameRequired?: boolean;
}

interface State {
  loginFormOpen: boolean;
  nickname: string;
}

class FreeBoardGamesBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    if (props.nicknameRequired) {
      const nickname = Cookies.get('nickname') || '';
      const token = Cookies.get('token') || '';
      this.state = { loginFormOpen: !nickname || !token, nickname };
    } else {
      this.state = { loginFormOpen: false, nickname: '' };
    }
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
            <Toolbar>
              <Link href="/">
                <a style={{ display: 'contents', textDecoration: 'none' }}>
                  <img style={{ paddingRight: '12px', height: '48px' }} src={FbgLogo} alt="FbG" />
                  <Typography component="h1" variant="h6" style={{ color: 'white', padding: '8px' }}>
                    FreeBoardGames.org
                  </Typography>
                </a>
              </Link>
              {this.props.nicknameRequired && (
                <WhiteButton
                  data-testid={'loginorprofilebutton'}
                  style={{ marginLeft: 'auto' }}
                  onClick={this._openNicknamePrompt}
                >
                  {this.state.nickname}
                </WhiteButton>
              )}
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            maxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          data-testid={'childrenDiv'}
        >
          {this.state.loginFormOpen && (
            <NicknamePrompt
              nickname={this.state.nickname}
              setNickname={this._setNickname}
              closePrompt={this._closeNicknamePrompt}
            />
          )}
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }

  _setNickname = (nickname: string, token: string) => {
    Cookies.set('nickname', nickname, { sameSite: 'strict' });
    Cookies.set('token', token, { sameSite: 'strict' });
    this.setState((oldState) => ({ ...oldState, nickname }));
  };

  _openNicknamePrompt = () => {
    this.setState((oldState) => {
      return { ...oldState, loginFormOpen: true };
    });
  };

  _closeNicknamePrompt = () => {
    this.setState((oldState) => {
      return { ...oldState, loginFormOpen: false };
    });
  };
}

export default FreeBoardGamesBar;
