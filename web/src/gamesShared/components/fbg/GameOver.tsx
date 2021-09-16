import React from 'react';
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GamesList } from 'infra/common/components/game/GamesList';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import getMessagePage from 'infra/common/factories/MessagePage';
import { LobbyService } from 'infra/common/services/LobbyService';
import { Router, WithTranslation, withTranslation } from 'infra/i18n';
import { room } from 'infra/navigation';
import { compose } from 'recompose';

export interface IGameOverInnerProps extends WithTranslation {}

export interface IGameOverOutterProps {
  result: string;
  gameArgs?: IGameArgs;
  extraCardContent?: React.ReactNode;
}

export interface IGameOverState {
  loading: boolean;
}

export class GameOverInternal extends React.Component<IGameOverInnerProps & IGameOverOutterProps, {}> {
  state = { loading: false };
  render() {
    if (this.state.loading) {
      const Page = getMessagePage('loading', 'Loading...');
      return <Page />;
    }
    let playAgain;
    const extraCardContent = this._getExtraCardContent();
    if (this.props.gameArgs) {
      playAgain = (
        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={this._playAgainHandle}
            variant="outlined"
            style={{ marginRight: 'auto', marginLeft: 'auto', marginBottom: '24px' }}
          >
            <ReplayIcon style={{ marginRight: '8px' }} />
            {this.props.t('play_again')}
          </Button>
        </div>
      );
    }
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <Typography
          variant="h6"
          gutterBottom={true}
          align="center"
          style={{ marginTop: '16px' }}
          data-testid={'gameOverText'}
        >
          {this.props.t('game_over', { result: this.props.result })}
        </Typography>
        {playAgain}
        {extraCardContent}
        <GamesList />
      </FreeBoardGamesBar>
    );
  }
  _getExtraCardContent = () => {
    if (!this.props.extraCardContent) {
      return null;
    }
    const otherPlayerCard = (
      <div style={{ paddingBottom: '12px', maxWidth: '500px', margin: 'auto' }}>{this.props.extraCardContent}</div>
    );
    return otherPlayerCard;
  };

  _playAgainHandle = async () => {
    const { i18n } = this.props;
    const args = this.props.gameArgs;

    if (args.mode === GameMode.AI || args.mode === GameMode.LocalFriend) {
      Router.push(window.location.pathname);
    } else {
      this.setState({ loading: true });
      const matchId = Router.query.matchId as string;
      const nextRoomId = await LobbyService.getPlayAgainNextRoom(matchId);
      Router.push(room(nextRoomId)(i18n.language));
    }
  };
}

const enhance = compose<IGameOverInnerProps, IGameOverOutterProps>(withTranslation('GameOver'));

export const GameOver = enhance(GameOverInternal);
