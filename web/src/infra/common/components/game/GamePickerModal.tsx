import React from 'react';
import css from './GamePickerModal.module.css';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { Card, Typography, Button } from '@material-ui/core';
import { IGameDef } from 'gamesShared/definitions/game';
import { GamesList } from './GamesList';

interface GamePickerModalProps {
  gamePickedCallback: (game?: IGameDef) => void;
}

export class GamePickerModal extends React.Component<GamePickerModalProps, {}> {
  render() {
    return (
      <AlertLayer onClickaway={this.props.gamePickedCallback}>
        <Card className={css.Card}>
          <Typography className={css.Title} variant="h5" component="h3">
            Pick a game
          </Typography>
          <div className={css.GamesList}>
            <GamesList hideHeader={true} gamePickedCallback={this.props.gamePickedCallback} />
          </div>
          {this.renderButton()}
        </Card>
      </AlertLayer>
    );
  }

  renderButton() {
    return (
      <div className={css.ButtonContainer}>
        <Button variant="contained" className={css.Button} onClick={this.dismiss}>
          Cancel
        </Button>
      </div>
    );
  }

  dismiss = () => {
    this.props.gamePickedCallback();
  };
}
