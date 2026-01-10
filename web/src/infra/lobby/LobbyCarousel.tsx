import React, { useState, useEffect } from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay } from './GameCardWithOverlay';
import { gql, useSubscription } from '@apollo/client';
import { GetLobbyQuery, GetLobbyQueryVariables } from 'gqlTypes/generated';
import { Typography, CircularProgress } from '@mui/material';
import { getGroupedRoomsDisplay, orderCurrentGameFirst } from './LobbyUtil';
import { NewRoomModal } from './NewRoomModal';
import { LobbyService } from 'infra/common/services/LobbyService';
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

const LobbyCarousel: React.FC<Props> = ({ t, game }) => {
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [lobby, setLobby] = useState<GetLobbyQuery['lobby'] | undefined>();

  const { data: subscriptionData } = useSubscription(LOBBIES_SUBSCRIPTION);

  useEffect(() => {
    _loadLobby();
  }, []);

  const hasNewRoomCard = () => {
    return game && game.modes.map((modeInfo) => modeInfo.mode).includes(GameMode.OnlineFriend);
  };

  const renderCarouselContent = (lobby: GetLobbyQuery['lobby']) => {
    if (loading) {
      return <CircularProgress className={css.carouselCenter} />;
    } else if (error) {
      return (
        <Typography component="h2" variant="body2" className={css.message}>
          {t('error')}
        </Typography>
      );
    }
    return (
      <>
        {renderCards(lobby)}
        {hasNewRoomCard() ? <NewRoomCard newRoomModal={_toggleNewRoomModal} /> : null}
      </>
    );
  };

  const renderCards = (lobby: GetLobbyQuery['lobby']) => {
    const grouped = getGroupedRoomsDisplay(lobby);
    const result = [];
    const roomsEntries = orderCurrentGameFirst(grouped, game?.code);

    for (const [gameCode, rooms] of roomsEntries) {
      result.push(
        <div key={gameCode} className={css.cardWrapper}>
          <GameCardWithOverlay rooms={rooms} game={getGameDefinition(gameCode)} />
        </div>,
      );
    }
    return result;
  };

  const _toggleNewRoomModal = () => {
    setShowNewRoomModal(!showNewRoomModal);
  };

  const _loadLobby = () => {
    LobbyService.getLobby().then(
      (queryResult: GetLobbyQuery) => {
        setLoading(false);
        setLobby(queryResult.lobby);
      },
      (error) => {
        setLoading(false);
        setError(error);
      },
    );
  };

  if (!hasNewRoomCard() && (loading || error)) {
    return null;
  }

  const currentLobby = subscriptionData?.lobbyMutated || lobby;
  if (!hasNewRoomCard() && currentLobby && currentLobby.rooms.length === 0) {
    return null;
  }

  return (
    <div className={css.wrapper}>
      {showNewRoomModal && (
        <NewRoomModal game={game} handleClickaway={_toggleNewRoomModal} />
      )}
      <div className={css.title}>
        <Typography display="inline" component="h2" variant="h6">
          {t('public_rooms')}
        </Typography>
      </div>
      <Carousel>{currentLobby ? renderCarouselContent(currentLobby) : null}</Carousel>
    </div>
  );
};

const enhance = withTranslation('LobbyCarousel');

export default enhance(LobbyCarousel);
