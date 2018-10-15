import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Radar } from './radar';
import { Token } from 'boardgame.io/ui';
import GameBar from '../../App/Game/GameBar';
import { GameSharing } from '../../App/Game/GameSharing';
import AlertLayer from '../../App/Game/AlertLayer';
import * as ReactGA from 'react-ga';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
}

function getBoard(matchCode: string) {
  class Board extends React.Component<IBoardProps, {}> {
    static propTypes = {
      G: PropTypes.any.isRequired,
      ctx: PropTypes.any.isRequired,
      moves: PropTypes.any.isRequired,
      playerID: PropTypes.string,
      isActive: PropTypes.bool,
      isConnected: PropTypes.bool,
    }; 
    state = {
      dismissedSharing: false,
    };
    _dismissSharing = this.dismissSharing.bind(this);
    render() {
      let alert = null;
      // TODO: Add connection layer?
      if (!this.state.dismissedSharing && matchCode &&
           this.props.playerID === '0') {
        alert = (
          <AlertLayer>
            <GameSharing
              gameCode={'seabattle'}
              matchCode={matchCode}
              playerID={this.props.playerID}
              onDismiss={this._dismissSharing}
            />
          </AlertLayer>
        );
      }
      return (
        <GameBar
         text={"Hello world"}
         backgroundColor={"black"}
         textColor={"white"}
         alert={alert}
        >
          <Radar
            style={{position: 'fixed', bottom: 0, maxWidth:'500px'}} />
        </GameBar>
      );
    }

    dismissSharing() {
      this.setState({
        ...this.state,
        dismissedSharing: true,
      });
    }
  }
  return Board;
}

export default getBoard;
