import React from 'react';
import css from './GamePickerModal.css';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { Card } from '@material-ui/core';
import { IGameDef } from 'gamesShared/definitions/game';
import { GamesList } from './GamesList';

interface GamePickerModalProps {
  gamePickedCallback: (game: IGameDef) => void;
}

export class GamePickerModal extends React.Component<GamePickerModalProps, {}> {
  render() {
    return (
      <AlertLayer>
        <Card className={css.Card}>
          <h2>Pick a game</h2>
          <div className={css.GamesList}>
            <GamesList hideHeader={true} gamePickedCallback={this.props.gamePickedCallback} />
          </div>
        </Card>
      </AlertLayer>
    );
  }
}
