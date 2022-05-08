import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay } from './GameCardWithOverlay';
import { gql } from 'apollo-boost';
import { GetLobby, GetLobby_lobby } from 'gqlTypes/GetLobby';
import { Typography, CircularProgress } from '@material-ui/core';
import { getGroupedRoomsDisplay, orderCurrentGameFirst } from './LobbyUtil';
import { NewRoomModal } from './NewRoomModal';
import { LobbyService } from 'infra/common/services/LobbyService';
import { Subscription } from '@apollo/react-components';
import css from './LobbyCarousel.module.css';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { getGameDefinition } from 'infra/game';
import { NewRoomCard } from './NewRoomCard';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';

export const LOBBIES_SUBSCRIPTION = gql`
  subscription SubscribeToLobby {
    lobbyMutated {
      rooms {
        id
        gameCode
        capacity
        userMemberships {
          isCreator
          position
        }
      }
    }
  }
`;

interface Props extends Pick<WithTranslation, 't'> {
  game?: IGameDef;
}

interface State {
  showNewRoomModal: boolean;
  loading: boolean;
  error?: string;
  lobby?: GetLobby_lobby;
}

class LobbyCarousel extends React.Component<Props, State> {
  state: State = { showNewRoomModal: false, loading: true };

  componentDidMount() {
    this._loadLobby();
  }

  hasNewRoomCard() {
    return this.props.game && this.props.game.modes.map((modeInfo) => modeInfo.mode).includes(GameMode.OnlineFriend);
  }

  render() {
    if (!this.hasNewRoomCard() && (this.state.loading || this.state.error)) {
      return null;
    }

    return (
      <Subscription subscription={LOBBIES_SUBSCRIPTION}>
        {(resp) => {
          const { t } = this.props;
          const lobby = resp.data?.lobbyMutated || this.state.lobby;
          if (!this.hasNewRoomCard() && lobby.rooms.length === 0) {
            return null;
          }
          return (
            <div className={css.wrapper}>
              {this.state.showNewRoomModal && (
                <NewRoomModal game={this.props.game} handleClickaway={this._toggleNewRoomModal} />
              )}
              <div className={css.title}>
                <Typography display="inline" component="h2" variant="h6">
                  {t('public_rooms')}
                </Typography>
              </div>
              <Carousel>{this.renderCarouselContent(lobby)}</Carousel>
            </div>
          );
        }}
      </Subscription>
    );
  }

  renderCarouselContent(lobby: GetLobby_lobby) {
    const { t } = this.props;

    if (this.state.loading) {
      return <CircularProgress className={css.carouselCenter} />;
    } else if (this.state.error) {
      return (
        <Typography component="h2" variant="body2" className={css.message}>
          {t('error')}
        </Typography>
      );
    }
    return (
      <>
        {this.renderCards(lobby)}
        {this.hasNewRoomCard() ? <NewRoomCard newRoomModal={this._toggleNewRoomModal} /> : null}
      </>
    );
  }

  renderCards(lobby: GetLobby_lobby) {
    const grouped = getGroupedRoomsDisplay(lobby);
    const result = [];
    const roomsEntries = orderCurrentGameFirst(grouped, this.props.game?.code);

    for (const [gameCode, rooms] of roomsEntries) {
      result.push(
        <div key={gameCode} className={css.cardWrapper}>
          <GameCardWithOverlay rooms={rooms} game={getGameDefinition(gameCode)} />
        </div>,
      );
    }
    return result;
  }

  _toggleNewRoomModal = () => {
    this.setState((prevState) => ({ ...prevState, showNewRoomModal: !prevState.showNewRoomModal }));
  };

  _loadLobby = () => {
    LobbyService.getLobby().then(
      (queryResult: GetLobby) => {
        this.setState({ loading: false, lobby: queryResult.lobby });
      },
      (error) => {
        this.setState({ loading: false, error });
      },
    );
  };
}

const enhance = withTranslation('LobbyCarousel');

export default enhance(LobbyCarousel);
