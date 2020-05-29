import AddressHelper from '../Helpers/AddressHelper';
import request from 'superagent';
import SSRHelper from '../Helpers/SSRHelper';
import { ActionNames, SyncUserAction } from '../../../redux/actions';
import { ReduxUserState } from 'redux/definitions';
import { Match } from 'dto/match/Match';
import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import { NextRoomRequest } from 'dto/match/NextRoomRequest';
import { ApolloClient, ApolloError } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NewUser, NewUserVariables } from 'gqlTypes/NewUser';
import { NewRoom, NewRoomVariables } from 'gqlTypes/NewRoom';
import gql from 'graphql-tag';
import { CheckinRoom, CheckinRoomVariables } from 'gqlTypes/CheckinRoom';

const FBG_NICKNAME_KEY = 'fbgNickname';
const FBG_USER_TOKEN_KEY = 'fbgUserToken';

const httpLink = createHttpLink({
  uri: AddressHelper.getGraphQLServerAddress(),
});

export interface IPlayerInRoom {
  playerID: number;
  name: string;
}
export class LobbyService {
  private static catchUnauthorizedGql = (dispatch: Dispatch<SyncUserAction>) => (e: ApolloError) => {
    if (e.graphQLErrors.find((error) => error.extensions.exception.status === 401)) {
      // invalidate the user's auth and adjust our store accordingly:
      LobbyService.invalidateUserAuth();
      dispatch(LobbyService.getSyncUserAction());
    }
    throw e;
  };

  private static catchUnauthorized = (dispatch: Dispatch<SyncUserAction>) => (e: request.ResponseError) => {
    if (e.response.unauthorized) {
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
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);

    return jwtToken;
  }

  public static async setNickname(nickname: string) {
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
  }

  public static async setJwt(jwtToken: string) {
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);
  }

  public static async getMatch(dispatch: Dispatch<SyncUserAction>, matchId: string): Promise<Match> {
    const response = await request
      .get(`${AddressHelper.getFbgServerAddress()}/match/${matchId}`)
      .set('Authorization', this.getAuthHeader())
      .catch(this.catchUnauthorized(dispatch));

    return response.body;
  }

  public static async startMatch(dispatch: Dispatch<SyncUserAction>, roomId: string): Promise<void> {
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/match/start`)
      .set('Authorization', this.getAuthHeader())
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send({
        roomId,
      })
      .catch(this.catchUnauthorized(dispatch));
    return response.body;
  }

  public static async newRoom(
    dispatch: Dispatch<SyncUserAction>,
    gameCode: string,
    capacity: number,
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
        variables: { room: { gameCode, capacity, isPublic: false } },
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

    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
  }

  public static async checkin(dispatch: Dispatch<SyncUserAction>, roomId: string): Promise<CheckinRoom> {
    const client = this.getClient();
    const result = await client
      .mutate<CheckinRoom, CheckinRoomVariables>({
        mutation: gql`
          mutation CheckinRoom($roomId: String!) {
            checkinRoom(roomId: $roomId) {
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

  // TODO dispatch/catchUnauthorized
  public static async getPlayAgainNextRoom(matchId: string): Promise<string> {
    const playAgainRequest: NextRoomRequest = { matchId };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/match`)
      .set('Authorization', this.getAuthHeader())
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send(playAgainRequest);

    return response.text;
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
