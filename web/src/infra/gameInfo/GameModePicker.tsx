import React from 'react';
import Typography from '@material-ui/core/Typography';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import { LobbyService } from '../common/services/LobbyService';
import Router from 'next/router';
import { connect } from 'react-redux';
import { ReduxState, ReduxUserState } from 'infra/common/redux/definitions';
import NicknameRequired from '../common/components/auth/NicknameRequired';
import { Dispatch } from 'redux';
import { GameModePickerCard } from './GameModePickerCard';

interface IGameModePickerProps {
  gameDef: IGameDef;
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface IGameModePickerState {
  onlinePlayRequested: number;
}

export class GameModePickerInternal extends React.Component<IGameModePickerProps, IGameModePickerState> {
  state = {
    onlinePlayRequested: 0
  };

  async render() {
    const cards = [];
    for (const info of this.props.gameDef.modes) {
      cards.push(<GameModePickerCard
        gameDef={this.props.gameDef}
        info={info}
        playOnlineGameCallback={this._playOnlineGame}
      />);
    }
    const modePicker = (
      <div style={{ marginTop: '8px', maxWidth: '500px' }}>
        <Typography variant="h6" component="h2" style={{ marginBottom: '16px' }}>
          Choose game mode
        </Typography>
        <div>{cards}</div>
      </div>
    );
    if (this.state.onlinePlayRequested) {
      const info = this.props.gameDef.modes.find((info) => info.mode === GameMode.OnlineFriend);
      return (
        <NicknameRequired renderAsPopup onSuccess={this._playOnlineGame(info, this.state.onlinePlayRequested)}>
          {modePicker}
        </NicknameRequired>
      );
    } else {
      return modePicker;
    }
  }

 _playOnlineGame = (info: IGameModeInfo, numPlayers: number) => async () => {
    if (!this.props.user.loggedIn) {
      this.setState({ onlinePlayRequested: numPlayers });
      return;
    }
    const gameCode = this.props.gameDef.code;
    const response = await LobbyService.newRoom((this.props as any).dispatch, gameCode, numPlayers);
    Router.replace(`/room/${response.newRoom.roomId}`);
  };

  static async getInitialProps(router) {
    const gameCode = router.query.gameCode as string;
    return { gameCode };
  }
}

/* istanbul ignore next */
const mapStateToProps = (state: ReduxState) => ({
  user: { ...state.user },
});

export const GameModePicker = connect(mapStateToProps)(GameModePickerInternal);
