import React, { ChangeEvent } from 'react';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { Card, Typography, Button } from '@material-ui/core';
import css from './NewRoomModal.module.css';
import { OccupancySelect } from 'infra/common/components/game/OccupancySelect';
import NicknameRequired from 'infra/common/components/auth/NicknameRequired';
import { LobbyService } from 'infra/common/services/LobbyService';
import { Router } from 'infra/i18n';
import getMessagePage from 'infra/common/components/alert/MessagePage';
import { IGameDef } from 'gamesShared/definitions/game';
import { GamePickerModal } from 'infra/common/components/game/GamePickerModal';

interface NewRoomModalProps {
  handleClickaway: () => void;
}

interface NewRoomModalState {
  game?: IGameDef;
  occupancy?: number;
  loading: boolean;
  error: boolean;
}

export class NewRoomModal extends React.Component<NewRoomModalProps, NewRoomModalState> {
  state = { game: undefined, occupancy: undefined, loading: false, error: false };

  render() {
    if (this.state.game) {
      return (
        <NicknameRequired skipFbgBar={true}>
          <AlertLayer onClickaway={this.props.handleClickaway}>
            <Card className={css.Card}>{this.renderCardContent()}</Card>
          </AlertLayer>
        </NicknameRequired>
      );
    } else {
      return <GamePickerModal gamePickedCallback={this._changeGame} />;
    }
  }

  _changeGame = (game?: IGameDef) => {
    if (game) {
      this.setState({ game, occupancy: undefined });
    } else {
      this.props.handleClickaway();
    }
  };

  renderCardContent() {
    if (this.state.loading) {
      return getMessagePage('loading', 'Loading...', true)();
    }
    if (this.state.error) {
      return getMessagePage('error', 'Error while creating room', true)();
    }
    return (
      <>
        <Typography className={css.Title} variant="h5" component="h3">
          New Room
        </Typography>
        {this.renderGameSelect()}
        {this.renderOccupancySelect()}
        {this.renderButtons()}
      </>
    );
  }

  renderGameSelect() {
    const name = this.state.game.name;
    return (
      <div>
        Game: <b>{name}</b>
      </div>
    );
  }

  _changeOccupancy = (e: ChangeEvent<{ value: number }>) => {
    this.setState({ occupancy: e.target.value });
  };

  renderOccupancySelect() {
    if (!this.state.game) {
      return;
    }
    const game = this.state.game;
    if (game.minPlayers === game.maxPlayers) {
      return;
    }
    return (
      <div className={css.OccupancyWrapper}>
        <OccupancySelect
          selectClassName={css.OccupancySelect}
          game={game}
          value={this.state.occupancy || game.minPlayers}
          onChange={this._changeOccupancy}
        />
      </div>
    );
  }

  renderButtons() {
    return (
      <div className={css.buttonsContainer}>
        <Button variant="contained" className={css.Button} onClick={this.props.handleClickaway}>
          Cancel
        </Button>
        <div className={css.buttonsSeparator}></div>
        <Button
          variant="contained"
          color="primary"
          className={css.Button}
          disabled={!this.state.game}
          onClick={this._createRoom}
        >
          Create
        </Button>
      </div>
    );
  }

  _createRoom = () => {
    this.setState({ loading: true });
    const occupancy = this.state.occupancy || this.state.game.minPlayers;
    LobbyService.newRoom((this.props as any).dispatch, this.state.game.code, occupancy, true).then(
      (response) => {
        // we use .replace instead of .push so that the browser back button works correctly
        Router.replace(`/room/${response.newRoom.roomId}`);
      },
      () => {
        this.setState({ loading: false, error: true });
      },
    );
  };
}
