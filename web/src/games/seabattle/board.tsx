import React from 'react';

import { ShipsPlacement } from './ShipsPlacement';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { ISalvo, IShip } from './game';
import { Battle } from './Battle';
import { Radar } from './Radar';
import Typography from '@material-ui/core/Typography';
import { IOptionsItems } from 'gamesShared/components/fbg/GameDarkSublayout';
import { isAIGame } from 'gamesShared/helpers/gameMode';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

interface IBoardOutterProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
  gameArgs?: IGameArgs;
  step?: any;
}

interface IBoardState {
  soundEnabled: boolean;
}

export class BoardInternal extends React.Component<IBoardInnerProps & IBoardOutterProps, IBoardState> {
  constructor(props: IBoardInnerProps & IBoardOutterProps, state: IBoardState) {
    super(props, state);
    this.state = {
      soundEnabled: true,
    };
  }

  render() {
    const ctx = this.props.ctx;
    if (ctx.gameover) {
      const result =
        ctx.gameover.winner === this.props.playerID
          ? this.props.translate('you_won')
          : this.props.translate('you_lost');
      const player = Number(this.props.playerID);
      const otherPlayer = player === 0 ? 1 : 0;
      const salvos: ISalvo[] = this.props.G.salvos.filter((salvo: ISalvo) => salvo.player === player);
      const ships: IShip[] = this.props.G.ships.filter((ship: any) => ship.player === otherPlayer);
      const extraCardContent = (
        <div>
          <Typography variant="h6" align="center" style={{ marginTop: '0px', marginBottom: '16px' }}>
            {this.props.translate('your_opponent_s_board')}
          </Typography>
          <Radar player={player} ships={ships} salvos={salvos} editable={false} />
        </div>
      );
      return <GameLayout gameOver={result} extraCardContent={extraCardContent} gameArgs={this.props.gameArgs} />;
    }
    let child;
    if (
      ctx.phase === 'setup' &&
      this.props.playerID !== null &&
      ctx.activePlayers !== null &&
      Object.keys(ctx.activePlayers).includes(this.props.playerID)
    ) {
      child = <ShipsPlacement playerID={this.props.playerID} setShips={this._setShips} />;
    } else if (ctx.phase === 'setup') {
      child = (
        <Typography variant="h4" style={{ color: 'white' }}>
          {this.props.translate('waiting_for_opponent')}
        </Typography>
      );
    } else {
      child = (
        <Battle
          ctx={ctx}
          G={this.props.G}
          moves={this.props.moves}
          playerID={this.props.playerID}
          currentPlayer={ctx.currentPlayer}
          isAIGame={isAIGame(this.props.gameArgs)}
          getSoundPref={this._getSoundPref}
        />
      );
    }
    return (
      <GameLayout optionsMenuItems={this._getOptionsMenuItems} gameArgs={this.props.gameArgs} avoidOverscrollReload>
        {child}
      </GameLayout>
    );
  }

  _setSoundPref = (soundEnabled: boolean) => {
    this.setState((oldState) => {
      return { ...oldState, soundEnabled };
    });
  };

  _toggleSoundPref = () => {
    this._setSoundPref(!this._getSoundPref());
  };

  _getSoundPref = () => {
    return this.state.soundEnabled;
  };

  _getOptionsMenuItems = () => {
    const curSoundPref = this._getSoundPref();
    const newSoundPref = !curSoundPref;
    const option: IOptionsItems = {
      onClick: this._toggleSoundPref,
      text: newSoundPref ? this.props.translate('enable_sound') : this.props.translate('disable_sound'),
    };
    const options = [option];
    return options;
  };

  _setShips = (ships: IShip[]) => {
    this.props.moves.setShips(ships);
  };
}

const enhance = compose<IBoardInnerProps, IBoardOutterProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
