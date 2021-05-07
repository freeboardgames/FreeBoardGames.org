import React from 'react';
import Typography from '@material-ui/core/Typography';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import { LobbyService } from '../common/services/LobbyService';
import { connect } from 'react-redux';
import { ReduxState, ReduxUserState } from 'infra/common/redux/definitions';
import NicknameRequired from '../common/components/auth/NicknameRequired';
import { Dispatch } from 'redux';
import { GameModePickerCard } from './GameModePickerCard';
import { compose } from 'recompose';
import { Router, withTranslation, WithTranslation } from 'infra/i18n';
import { room } from 'infra/navigation';

interface IGameModePickerInnerProps extends Pick<WithTranslation, 't'> {
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface IGameModePickerOutterProps {
  gameDef: IGameDef;
}

interface IGameModePickerProps extends IGameModePickerInnerProps, IGameModePickerOutterProps {}

interface IGameModePickerState {
  onlinePlayRequested: number;
  playButtonError: boolean;
  playButtonDisabled: boolean;
}

export class GameModePickerInternal extends React.Component<IGameModePickerProps, IGameModePickerState> {
  state = {
    onlinePlayRequested: 0,
    playButtonDisabled: false,
    playButtonError: false,
  };

  render() {
    const cards = [];
    for (const info of this.props.gameDef.modes) {
      cards.push(
        <GameModePickerCard
          gameDef={this.props.gameDef}
          info={info}
          playButtonDisabled={this.state.playButtonDisabled}
          playButtonError={this.state.playButtonError}
          playOnlineGameCallback={this._playOnlineGame}
          key={info.mode}
        />,
      );
    }
    const modePicker = (
      <div style={{ marginTop: '8px', maxWidth: '500px' }}>
        <Typography variant="h6" component="h2" style={{ marginBottom: '16px' }}>
          {this.props.t('choose_game_mode')}
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

  _playOnlineGame = (info: IGameModeInfo, numPlayers: number) => () => {
    if (!this.props.user.loggedIn) {
      this.setState({ onlinePlayRequested: numPlayers });
      return;
    }
    this.setState({ playButtonDisabled: true });
    const gameCode = this.props.gameDef.code;
    LobbyService.newRoom((this.props as any).dispatch, gameCode, numPlayers).then(
      (response) => {
        // we use .replace instead of .push so that the browser back button works correctly
        Router.replace(room(response.newRoom.roomId));
      },
      () => {
        this.setState({ playButtonError: true, playButtonDisabled: false });
      },
    );
  };

  static async getInitialProps({ query }) {
    const gameCode = query.gameCode as string;
    return { gameCode };
  }
}

/* istanbul ignore next */
const mapStateToProps = (state: ReduxState) => ({
  user: { ...state.user },
});

const enhance = compose<IGameModePickerInnerProps, IGameModePickerOutterProps>(
  withTranslation('GameModePicker'),
  connect(mapStateToProps),
);

export const GameModePicker = enhance(GameModePickerInternal);
