import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay } from './GameCardWithOverlay';
import { gql } from 'apollo-boost';
import { GetLobby, GetLobby_lobby } from 'gqlTypes/GetLobby';
import { GAMES_MAP } from 'games';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { getGroupedRoomsDisplay } from './LobbyUtil';
import { NewRoomModal } from './NewRoomModal';
import { LobbyService } from 'infra/common/services/LobbyService';
import { Subscription } from '@apollo/react-components';
import css from './LobbyCarousel.css';

const LOBBIES_SUBSCRIPTION = gql`
  subscription SubscribeToLobby {
    lobbyMutated {
      rooms {
        id
        gameCode
        capacity
        userMemberships {
          isCreator
        }
      }
    }
  }
`;

interface Props { }

interface State {
  showNewRoomModal: boolean;
  loading: boolean;
  error?: string;
  lobby?: GetLobby_lobby;
}

export default class LobbyCarousel extends React.Component<Props, State> {
  state: State = { showNewRoomModal: false, loading: true };

  componentDidMount() {
    LobbyService.getLobby().then(
      (queryResult: GetLobby) => {
        this.setState({ loading: false, lobby: queryResult.lobby });
      },
      (error) => {
        this.setState({ loading: false, error });
      },
    );
  }

  render() {
    return (
      <div className={css.wrapper}>
        {this.state.showNewRoomModal && <NewRoomModal handleClickaway={this._toggleNewRoomModal} />}
        <Typography display="inline" component="h2" variant="h6" style={{ margin: '16px 0', marginLeft: '6px' }}>
          Public rooms
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ float: 'right' }}
          startIcon={<AddIcon />}
          onClick={this._toggleNewRoomModal}
        >
          New Room
        </Button>
        {this.renderCarousel()}
      </div>
    );
  }

  renderCarousel() {
    if (this.state.loading) {
      return (
        <Carousel>
          <CircularProgress className={css.carouselCenter} />
        </Carousel>
      );
    } else if (this.state.error) {
      return <Typography component="h2" variant="body2" className={css.errorMessage} >
        An error happened loading the lobby, try reloading.
      </Typography>;
    }
    return (
      <Subscription subscription={LOBBIES_SUBSCRIPTION}>
        {(resp) => {
          const lobby = resp.data?.lobbyMutated || this.state.lobby;
          if (lobby.rooms.length === 0) {
            return (
              <Typography component="h2" variant="body2" className={css.errorMessage}>
                No public room available, click on &quot;New Room&quot; and create one!
              </Typography>
            );
          }
          return <Carousel>{this.renderCards(lobby)}</Carousel>;
        }}
      </Subscription>
    );
  }

  renderCards(lobby: GetLobby_lobby) {
    const grouped = getGroupedRoomsDisplay(lobby);
    const result = [];
    for (const [gameCode, rooms] of Object.entries(grouped)) {
      result.push(
        <div key={gameCode} style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
          <GameCardWithOverlay rooms={rooms} game={GAMES_MAP[gameCode]} />
        </div>,
      );
    }
    return result;
  }

  _toggleNewRoomModal = () => {
    this.setState((prevState) => ({ ...prevState, showNewRoomModal: !prevState.showNewRoomModal }));
  };
}
