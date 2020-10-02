import * as React from 'react';
import IPlayer from './player';

import { ButtonComponent } from './ButtonComponent';

import css from './PlayerStack.css';

export interface IPlayerStackProps {
  playerIndex: number;
  player: IPlayer;
  revealCard?: (playerIndex: number) => void;
}

export class PlayerStack extends React.Component<IPlayerStackProps, {}> {
  _revealCard = (playerIndex: number) => {
    if (!this.props.revealCard) {
      return;
    }

    this.props.revealCard(playerIndex);
  };

  render() {
    return (
      <div className={css.playerStack}>
        Player {this.props.playerIndex} stack ({this.props.player.stack.length})
        <ButtonComponent click={() => this._revealCard(this.props.playerIndex)} disabled={!this.props.revealCard}>
          Reveal
        </ButtonComponent>
      </div>
    );
  }
}
