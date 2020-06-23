import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay, RoomDisplay } from './GameCardWithOverlay';
import { gql } from 'apollo-boost';
import { GetLobby } from 'gqlTypes/GetLobby';
import { useQuery } from '@apollo/react-hooks';
import { GAMES_MAP } from 'games';
import { Typography } from '@material-ui/core';

const LOBBIES_QUERY = gql`
  query GetLobby {
    lobby {
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

interface Props {
  data: GetLobby;
  // loading: boolean;
  subscribeToRoomMutations: any;
}

export class LobbyCarousel extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.subscribeToRoomMutations();
  }

  render() {
    const rooms = this.props.data.lobby.rooms;
    const gameCards = rooms.map((room, index) => {
      const roomDataForDisplay: RoomDisplay = {
        capacity: room.capacity,
        id: room.id,
        name: 'name', // TODO
        occupancy: room.userMemberships.length,
      };
      return (
        <GameCardWithOverlay
          rooms={[roomDataForDisplay]}
          game={GAMES_MAP[room.gameCode]}
          onClick={() => console.log('todo: would join')}
          key={index}
        />
      );
    });
    return (
      <>
        <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
          Play now
        </Typography>
        <Carousel>
          <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>{gameCards}</div>
        </Carousel>
      </>
    );
  }
}

export default function LobbyCarouselWithData() {
  const { subscribeToMore, ...result } = useQuery<GetLobby>(LOBBIES_QUERY);
  if (!result.loading) {
    return (
      <LobbyCarousel
        subscribeToRoomMutations={() => {
          subscribeToMore({
            document: LOBBIES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              console.log('subdata', subscriptionData);
              return Object.assign({}, prev, {
                // FIXME
                lobby: { rooms: (subscriptionData.data as any).lobbyMutated.rooms },
              });
            },
          });
        }}
        data={result.data}
      />
    );
  }
  return null;
}
