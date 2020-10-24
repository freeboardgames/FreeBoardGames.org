import React, { ChangeEvent } from 'react';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { Card, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { GAMES_LIST, GAMES_MAP } from 'games';
import css from './NewRoomModal.css';
import { OccupancySelect } from 'infra/common/components/game/OccupancySelect';
import NicknameRequired from 'infra/common/components/auth/NicknameRequired';
import { LobbyService } from 'infra/common/services/LobbyService';
import Router from 'next/router';
import getMessagePage from 'infra/common/components/alert/MessagePage';

interface NewRoomModalProps {
  handleClickaway: () => void;
}

interface NewRoomModalState {
  gameCode?: string;
  occupancy?: number;
  loading: boolean;
  error: boolean;
}

export class NewRoomModal extends React.Component<NewRoomModalProps, NewRoomModalState> {
  state = { gameCode: undefined, occupancy: undefined, loading: false, error: false };

  render() {
    return (
      <NicknameRequired skipFbgBar={true}>
        <AlertLayer>
          <Card className={css.Card}>{this.renderCardContent()}</Card>
        </AlertLayer>
      </NicknameRequired>
    );
  }

  _changeGame = (e: ChangeEvent<{ value: string }>) => {
    this.setState({ gameCode: e.target.value, occupancy: undefined });
  };

  renderCardContent() {
    if (this.state.loading) {
      return getMessagePage('loading', 'Loading...', true);
    }
    if (this.state.error) {
      return getMessagePage('error', 'Error while creating room', true);
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
    const gamesMenuItems = GAMES_LIST.map((gameDef) => (
      <MenuItem value={gameDef.code} key={gameDef.code}>
        {gameDef.name}
      </MenuItem>
    ));

    return (
      <FormControl>
        <InputLabel id="game-select-label">Select a game</InputLabel>
        <Select
          className={css.GameSelect}
          labelId="game-select-label"
          value={this.state.gameCode || ''}
          onChange={this._changeGame}
        >
          {gamesMenuItems}
        </Select>
      </FormControl>
    );
  }

  _changeOccupancy = (e: ChangeEvent<{ value: number }>) => {
    this.setState({ occupancy: e.target.value });
  };

  renderOccupancySelect() {
    if (!this.state.gameCode) {
      return;
    }
    const game = GAMES_MAP[this.state.gameCode];
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
          disabled={!this.state.gameCode}
          onClick={this._createRoom}
        >
          Create
        </Button>
      </div>
    );
  }

  _createRoom = () => {
    this.setState({ loading: true });
    const occupancy = this.state.occupancy || GAMES_MAP[this.state.gameCode].minPlayers;
    LobbyService.newRoom((this.props as any).dispatch, this.state.gameCode, occupancy, true).then(
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
