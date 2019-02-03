import * as React from 'react';
import { GameOver } from './GameOver';
import { GameDarkSublayout } from './GameDarkSublayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <GameDarkSublayout>
            {this.props.children}
          </GameDarkSublayout>
        </MuiThemeProvider>
      );
    }
  }
}
