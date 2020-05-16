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

const FBG_NICKNAME_KEY = 'fbgNickname';
const FBG_USER_TOKEN_KEY = 'fbgUserToken';
export interface IPlayerInRoom {
  playerID: number;
  name: string;
}
export class LobbyService {
  public static async getMatch(matchId: string): Promise<Match> {
    const response = await request
      .get(`${AddressHelper.getFbgServerAddress()}/match/${matchId}`)
      .set('Authorization', this.getAuthHeader());

    return response.body;
  }

  public static async newRoom(dispatch: Dispatch<SyncUserAction>, gameCode: string, capacity: number): Promise<string> {
    const room: Room = { gameCode, capacity, isPublic: false };
    let response: request.Response;
    try {
      response = await request
        .post(`${AddressHelper.getFbgServerAddress()}/rooms/new`)
        .set('Authorization', this.getAuthHeader())
        .send({
          room,
        });
    } catch (e) {
      if (e.response.statusCode === 400) {
        this.invalidateUserAuth();
        dispatch(this.getSyncUserAction());
      }
    }

    return response.body.roomId;
  }

  public static async renameUser(newName: string): Promise<void> {
    alert(`under construction, ${newName}!`);
    /*const playerCredential: IPlayerCredential = this.getCredential(player.roomID);
    await request.post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({
      playerID: player.playerID,
      credentials: playerCredential.credential,
      newName,
    });*/
  }

  public static async checkin(roomId: string): Promise<CheckinRoomResponse> {
    const checkinRoomRequest: CheckinRoomRequest = { roomId };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/rooms/checkin`)
      .set('Authorization', this.getAuthHeader())
      .send({
        ...checkinRoomRequest,
      });

    return response.body;
  }

  public static async getPlayAgainNextRoom(gameCode: string, roomID: string, numPlayers: number): Promise<void> {
    alert(`under construction, ${gameCode}, ${roomID}, ${numPlayers}!`);
    /*
    const playerCredential: IPlayerCredential = this.getCredential(roomID);
    const response = await request
      .post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${roomID}/playAgain`)
      .send({ playerID: playerCredential.playerID, credentials: playerCredential.credential, numPlayers });
    return response.body.nextRoomID;*/
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

  /** sends user's nickname to backend.  backend returns the jwt token.  */
  public static async newUser(nickname: string): Promise<string> {
    const response = await request.post(`${AddressHelper.getFbgServerAddress()}/users/new`).send({
      user: { nickname },
    });
    const jwtToken = response.body.jwtPayload;
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);
    return response.body;
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
