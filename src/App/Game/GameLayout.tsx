import * as React from 'react';
import { GameOver } from './GameOver';
import { GameDarkSublayout } from './GameDarkSublayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';

interface IGameLayoutProps {
  children?: React.ReactNode;
  gameOver?: string;
}

export class GameLayout extends React.Component<IGameLayoutProps, {}> {
  render() {
    if (this.props.gameOver) {
      return (<GameOver result={this.props.gameOver} />);
    } else {
      return (
        <MuiThemeProvider>
          <div
            style={{
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'fixed',
            }}
          >
            <a href="/">
              <img
                style={{
                  maxWidth: '500px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                src="/logo/fbg_logo_white_48.png"
                alt="FbG"
              />
            </a>
            <Typography
              variant="title"
              gutterBottom={true}
              style={{
                marginTop: '16px',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: 'white',
              }}
            >
              FreeBoardGame.org
            </Typography>
            <div style={{ height: '64px' }} />
          </div>
          <GameDarkSublayout>
            {this.props.children}
          </GameDarkSublayout>
        </MuiThemeProvider>
      );
    }
  }
}
