import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay } from './GameCardWithOverlay';
import { gql } from 'apollo-boost';
import { GetLobby } from 'gqlTypes/GetLobby';
import { useQuery } from '@apollo/react-hooks';
import { GAMES_MAP } from 'games';
import { Typography } from '@material-ui/core';
import { getGroupedRoomsDisplay } from './LobbyUtil';

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
    const grouped = getGroupedRoomsDisplay(this.props.data.lobby);
    console.log(JSON.stringify(grouped));
    const gameCards = grouped.map((rooms, index) => {
      return (
        <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
          <GameCardWithOverlay
            rooms={rooms}
            game={GAMES_MAP[rooms[0].gameCode]}
            onClick={() => console.log('todo: would join')}
            key={index}
          />
        </div>
      );
    });
    return (
      <>
        <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
          Play now
        </Typography>
        <Carousel>{gameCards}</Carousel>
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
