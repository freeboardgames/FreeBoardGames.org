import AddressHelper from '../helpers/AddressHelper';
import SSRHelper from '../helpers/SSRHelper';
import { ActionNames, SyncUserAction } from '../redux/actions';
import { ReduxUserState } from 'infra/common/redux/definitions';
import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import { ApolloClient, ApolloError, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NewUser, NewUserVariables } from 'gqlTypes/NewUser';
import { NewRoom, NewRoomVariables } from 'gqlTypes/NewRoom';
import { SendMessage, SendMessageVariables } from 'gqlTypes/SendMessage';
import { GetMatch, GetMatchVariables } from 'gqlTypes/GetMatch';
import { GetLobby } from 'gqlTypes/GetLobby';
import { StartMatch, StartMatchVariables } from 'gqlTypes/StartMatch';
import { NextRoom, NextRoomVariables } from 'gqlTypes/NextRoom';
import gql from 'graphql-tag.macro';
import { JoinRoom, JoinRoomVariables } from 'gqlTypes/JoinRoom';
import { RemoveUserFromRoom, RemoveUserFromRoomVariables } from 'gqlTypes/RemoveUserFromRoom';
import { MoveUserUp, MoveUserUpVariables } from 'gqlTypes/MoveUserUp';
import { UpdateRoomInput } from 'gqlTypes/globalTypes';

const FBG_NICKNAME_KEY = 'fbgNickname2';
const FBG_USER_TOKEN_KEY = 'fbgUserToken2';

const httpLink = createHttpLink({
  uri: AddressHelper.getGraphQLServerAddress(),
});

export class LobbyService {
  private static catchUnauthorizedGql = (dispatch: Dispatch<SyncUserAction>) => (e: ApolloError) => {
    if (e.graphQLErrors.find((error) => error.extensions.exception.status === 401)) {
      // invalidate the user's auth and adjust our store accordingly:
      LobbyService.invalidateUserAuth();
      dispatch(LobbyService.getSyncUserAction());
    }
    throw e;
  };

  /** sends user's nickname to backend.  backend returns the jwt token.  */
  public static async newUser(nickname: string): Promise<string> {
    const client = this.getClient();
    const result = await client.mutate<NewUser, NewUserVariables>({
      mutation: gql`
        mutation NewUser($user: NewUserInput!) {
          newUser(user: $user) {
            jwtToken
          }
        }
      `,
      variables: { user: { nickname } },
    });

    const jwtToken = result.data.newUser.jwtToken;
    this.setNickname(nickname);
    this.setJwt(jwtToken);

    return jwtToken;
  }

  public static async setNickname(nickname: string) {
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
  }

  public static async setJwt(jwtToken: string) {
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);
  }

  public static async getMatch(dispatch: Dispatch<SyncUserAction>, matchId: string): Promise<GetMatch> {
    const client = this.getClient();
    const result = await client
      .query<GetMatch, GetMatchVariables>({
        query: gql`
          query GetMatch($matchId: String!) {
            match(id: $matchId) {
              gameCode
              bgioServerUrl
              bgioMatchId
              bgioSecret
              bgioPlayerId
              playerMemberships {
                user {
                  id
                  nickname
                }
              }
            }
          }
        `,
        variables: { matchId },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
    return result.data;
  }
  public static async startMatch(
    dispatch: Dispatch<SyncUserAction>,
    roomId: string,
    rawSetupData?: unknown,
  ): Promise<string> {
    const client = this.getClient();
    const setupData = rawSetupData ? JSON.stringify(rawSetupData) : '';
    const result = await client
      .mutate<StartMatch, StartMatchVariables>({
        mutation: gql`
          mutation StartMatch($roomId: String!, $setupData: String!) {
            startMatch(roomId: $roomId, setupData: $setupData)
          }
        `,
        variables: { roomId, setupData },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
    return result.data.startMatch;
  }

  public static async newRoom(
    dispatch: Dispatch<SyncUserAction>,
    gameCode: string,
    capacity: number,
    isPublic: boolean = false,
  ): Promise<NewRoom> {
    const client = this.getClient();
    const result = await client
      .mutate<NewRoom, NewRoomVariables>({
        mutation: gql`
          mutation NewRoom($room: NewRoomInput!) {
            newRoom(room: $room) {
              roomId
            }
          }
        `,
        variables: { room: { gameCode, capacity, isPublic } },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
    return result.data;
  }

  public static async renameUser(dispatch: Dispatch<SyncUserAction>, nickname: string): Promise<void> {
    const client = this.getClient();
    await client
      .mutate({
        mutation: gql`
          mutation UpdateUser($user: NewUserInput!) {
            updateUser(user: $user)
          }
        `,
        variables: { user: { nickname } },
      })
      .catch(this.catchUnauthorizedGql(dispatch));

    const payload: ReduxUserState = { ready: true, loggedIn: true, nickname };
    dispatch({ type: ActionNames.SyncUser, payload });
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
  }

  public static async updateRoom(dispatch: Dispatch<SyncUserAction>, room: UpdateRoomInput): Promise<void> {
    const client = this.getClient();
    await client
      .mutate({
        mutation: gql`
          mutation UpdateRoom($room: UpdateRoomInput!) {
            updateRoom(room: $room)
          }
        `,
        variables: { room },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
  }

  public static async joinRoom(dispatch: Dispatch<SyncUserAction>, roomId: string): Promise<JoinRoom> {
    const client = this.getClient();
    const result = await client
      .mutate<JoinRoom, JoinRoomVariables>({
        mutation: gql`
          mutation JoinRoom($roomId: String!) {
            joinRoom(roomId: $roomId) {
              gameCode
              capacity
              isPublic
              matchId
              userId
              userMemberships {
                isCreator
                user {
                  id
                  nickname
                }
              }
            }
          }
        `,
        variables: { roomId },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
    return result.data;
  }

  public static async leaveRoom(dispatch: Dispatch<SyncUserAction>, roomId: string): Promise<void> {
    const client = this.getClient();
    await client
      .mutate({
        mutation: gql`
          mutation LeaveRoom($roomId: String!) {
            leaveRoom(roomId: $roomId)
          }
        `,
        variables: { roomId },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
  }

  public static async removeUser(
    dispatch: Dispatch<SyncUserAction>,
    userIdToBeRemoved: number,
    roomId: string,
  ): Promise<void> {
    const client = this.getClient();
    await client
      .mutate<RemoveUserFromRoom, RemoveUserFromRoomVariables>({
        mutation: gql`
          mutation RemoveUserFromRoom($roomId: String!, $userIdToBeRemoved: Int!) {
            removeFromRoom(userIdToBeRemoved: $userIdToBeRemoved, roomId: $roomId)
          }
        `,
        variables: { roomId, userIdToBeRemoved },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
  }

  public static async moveUpUser(
    dispatch: Dispatch<SyncUserAction>,
    userIdToBeMovedUp: number,
    roomId: string,
  ): Promise<void> {
    const client = this.getClient();
    await client
      .mutate<MoveUserUp, MoveUserUpVariables>({
        mutation: gql`
          mutation MoveUserUp($roomId: String!, $userIdToBeMovedUp: Int!) {
            moveUserUp(userIdToBeMovedUp: $userIdToBeMovedUp, roomId: $roomId)
          }
        `,
        variables: { roomId, userIdToBeMovedUp },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
  }

  // TODO dispatch/catchUnauthorized
  public static async getPlayAgainNextRoom(matchId: string): Promise<string> {
    const client = this.getClient();
    const result = await client.mutate<NextRoom, NextRoomVariables>({
      mutation: gql`
        mutation NextRoom($matchId: String!) {
          nextRoom(matchId: $matchId)
        }
      `,
      variables: { matchId },
    });
    return result.data.nextRoom;
  }

  public static async getLobby() {
    const client = this.getClient();
    const result = await client.query<GetLobby, {}>({
      query: gql`
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
      `,
    });
    return result.data;
  }

  public static async sendMessage(
    dispatch: Dispatch<SyncUserAction>,
    channelType: 'room' | 'match',
    channelId: string,
    message: string,
  ): Promise<Boolean> {
    const client = this.getClient();
    const result = await client
      .mutate<SendMessage, SendMessageVariables>({
        mutation: gql`
          mutation SendMessage($channelType: String!, $channelId: String!, $message: String!) {
            sendMessage(message: { channelType: $channelType, channelId: $channelId, message: $message })
          }
        `,
        variables: { channelType, channelId, message },
      })
      .catch(this.catchUnauthorizedGql(dispatch));
    return result.data.sendMessage;
  }

  public static getUserToken() {
    if (!SSRHelper.isSSR()) {
      return localStorage.getItem(FBG_USER_TOKEN_KEY);
    }
  }

  public static getNickname(): string {
    if (!SSRHelper.isSSR()) {
      return localStorage.getItem(FBG_NICKNAME_KEY);
    }
  }

  public static getSyncUserAction(): SyncUserAction {
    let payload: ReduxUserState;
    if (LobbyService.getNickname() && LobbyService.getUserToken()) {
      const nickname = LobbyService.getNickname();
      payload = { ready: true, loggedIn: true, nickname };
    } else {
      payload = { ready: true, loggedIn: false };
    }
    return { type: ActionNames.SyncUser, payload };
  }

  public static invalidateUserAuth() {
    localStorage.removeItem(FBG_NICKNAME_KEY);
    localStorage.removeItem(FBG_USER_TOKEN_KEY);
  }

  public static getClient() {
    const authLink = setContext((_, { headers }) => {
      const jwtToken = this.getUserToken() || '';
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: jwtToken ? `Bearer ${jwtToken}` : '',
          'CSRF-Token': Cookies.get('XSRF-TOKEN'),
        },
      };
    });
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    return client;
  }

  private static getAuthHeader() {
    if (this.getUserToken()) {
      const jwtToken = this.getUserToken() || '';
      return `Bearer ${jwtToken}`;
    }
  }
}
