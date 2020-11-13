import * as React from 'react';
import IPlayer from './player';

import css from './PlayerStacks.css';
import { PlayerStack } from './PlayerStack';

export interface IPlayerStacksProps {
  players: IPlayer[];
  revealCard: (playerId: string) => void;
}

export class PlayerStacks extends React.Component<IPlayerStacksProps, {}> {
  render() {
    return <div className={css.playerStacks}>{this.renderStacks()}</div>;
  }

  renderStacks() {
    return this.props.players.map((p, i) => this.renderStack(p, i));
  }

  renderStack(player: IPlayer, playerIndex: number) {
    return (
      <PlayerStack
        key={playerIndex}
        playerId={player.id}
        stackSize={player.stack.length}
        revealCard={player.stack.length > 0 ? this.props.revealCard : null}
        cardStyle={player.cardStyle}
      ></PlayerStack>
    );
  }
}
