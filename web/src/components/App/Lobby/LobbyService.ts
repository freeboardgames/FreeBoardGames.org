import AddressHelper from '../Helpers/AddressHelper';
import request from 'superagent';
import SSRHelper from '../Helpers/SSRHelper';
import { ActionNames, SyncUserAction } from '../../../redux/actions';
import { Room } from 'dto/rooms/Room';
import { CheckinRoomRequest } from 'dto/rooms/CheckinRoomRequest';
import { ReduxUserState } from 'redux/definitions';
import { CheckinRoomResponse } from 'dto/rooms/CheckinRoomResponse';
import { Match } from 'dto/match/Match';
import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import { UpdateUserRequest } from 'dto/users/UpdateUserRequest';
import { NextRoomRequest } from 'dto/match/NextRoomRequest';

const FBG_NICKNAME_KEY = 'fbgNickname';
const FBG_USER_TOKEN_KEY = 'fbgUserToken';
export interface IPlayerInRoom {
  playerID: number;
  name: string;
}
export class LobbyService {
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
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/users/new`)
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send({
        user: { nickname },
      });
    const jwtToken = response.body.jwtPayload;
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);
    return response.body;
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
  public static async newRoom(dispatch: Dispatch<SyncUserAction>, gameCode: string, capacity: number): Promise<string> {
    const room: Room = { gameCode, capacity, isPublic: false };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/rooms/new`)
      .set('Authorization', this.getAuthHeader())
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send({
        room,
      })
      .catch(this.catchUnauthorized(dispatch));
    return response.body.roomId;
  }

  // TODO test
  // TODO are we checking auth?
  public static async renameUser(dispatch: Dispatch<SyncUserAction>, newName: string): Promise<void> {
    const updateUserRequest: UpdateUserRequest = { user: { nickname: newName } };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/users/update`)
      .set('Authorization', this.getAuthHeader())
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send(updateUserRequest)
      .catch(this.catchUnauthorized(dispatch));

    return response.body;
    /*const playerCredential: IPlayerCredential = this.getCredential(player.roomID);
    await request.post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({
      playerID: player.playerID,
      credentials: playerCredential.credential,
      newName,
    });*/
  }

  public static async checkin(dispatch: Dispatch<SyncUserAction>, roomId: string): Promise<CheckinRoomResponse> {
    const checkinRoomRequest: CheckinRoomRequest = { roomId };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/rooms/checkin`)
      .set('Authorization', this.getAuthHeader())
      .set('CSRF-Token', Cookies.get('XSRF-TOKEN'))
      .send({
        ...checkinRoomRequest,
      })
      .catch(this.catchUnauthorized(dispatch));

    return response.body;
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

  private static getAuthHeader() {
    if (this.getUserToken()) {
      const jwtToken = this.getUserToken() || '';
      return `Bearer ${jwtToken}`;
    }
  }
}
