import AddressHelper from '../Helpers/AddressHelper';
import request from 'superagent';
import SSRHelper from '../Helpers/SSRHelper';
import { Dispatch } from 'redux';
import { AuthData, ActionNames } from '../../../redux/actions';
import { Room } from 'dto/rooms/Room';
import { CheckinRoomRequest } from 'dto/rooms/CheckinRoomRequest';

const FBG_CREDENTIALS_KEY = 'fbgCredentials';
const FBG_NICKNAME_KEY = 'fbgNickname';
const FBG_USER_TOKEN_KEY = 'fbgUserToken';

export interface IPlayerInRoom {
  playerID: number;
  name?: string;
  roomID: string;
}

export interface IRoomMetadata {
  gameCode?: string;
  roomID: string;
  players?: IPlayerInRoom[]; // only active players
  currentUser?: IPlayerInRoom;
  numberOfPlayers: number;
}

export interface IPlayerCredential {
  playerID: number;
  credential: string;
}

export interface IStoredCredentials {
  [key: string]: IPlayerCredential;
}

export class LobbyService {
  public static async newRoom(gameCode: string, capacity: number) {
    const room: Room = { gameCode, capacity, isPublic: false };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/rooms/new`)
      .set('Authorization', this.getAuthHeader())
      .send({
        room,
      });

    return response.body.roomId;
  }

  public static async joinRoom(gameCode: string, player: IPlayerInRoom): Promise<void> {
    const response = await request
      .post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${player.roomID}/join`)
      .send({
        playerID: player.playerID,
        playerName: player.name,
      });
    const credential = response.body.playerCredentials;
    this.setCredential(player, credential);
  }

  public static async renameUser(gameCode: string, player: IPlayerInRoom, newName: string): Promise<void> {
    const playerCredential: IPlayerCredential = this.getCredential(player.roomID);
    await request.post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({
      playerID: player.playerID,
      credentials: playerCredential.credential,
      newName,
    });
  }

  public static async getRoomMetadata(roomId: string): Promise<Room> {
    const checkinRoomRequest: CheckinRoomRequest = { roomId };
    const response = await request
      .post(`${AddressHelper.getFbgServerAddress()}/rooms/checkin`)
      .set('Authorization', this.getAuthHeader())
      .send({
        ...checkinRoomRequest,
      });

    return response.body;
  }

  public static async getPlayAgainNextRoom(gameCode: string, roomID: string, numPlayers: number): Promise<string> {
    const playerCredential: IPlayerCredential = this.getCredential(roomID);
    const response = await request
      .post(`${AddressHelper.getBgioServerAddress()}/games/${gameCode}/${roomID}/playAgain`)
      .send({ playerID: playerCredential.playerID, credentials: playerCredential.credential, numPlayers });
    return response.body.nextRoomID;
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
  public static async newUser(dispatch: Dispatch, nickname: string): Promise<string> {
    const response = await request.post(`${AddressHelper.getFbgServerAddress()}/users/new`).send({
      user: { nickname },
    });
    const jwtToken = response.body.jwtPayload;
    localStorage.setItem(FBG_NICKNAME_KEY, nickname);
    localStorage.setItem(FBG_USER_TOKEN_KEY, jwtToken);
    const payload: AuthData = { ready: true, loggedIn: true, nickname };
    dispatch({ type: ActionNames.SyncUser, payload });
    return response.body;
  }

  public static getCredential(roomID: string): IPlayerCredential | undefined {
    // return an empty IPlayerInRoom object if the player's identity is for another room
    const credentials: IStoredCredentials = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));
    if (credentials) {
      return credentials[roomID];
    }
  }

  public static setCredential(player: IPlayerInRoom, credential: string): void {
    const existing: IStoredCredentials = JSON.parse(localStorage.getItem(FBG_CREDENTIALS_KEY));
    const newCredentials = { ...existing };
    newCredentials[player.roomID] = { credential, playerID: player.playerID };
    localStorage.setItem(FBG_CREDENTIALS_KEY, JSON.stringify(newCredentials));
  }

  public static async sync(dispatch: Dispatch): Promise<void> {
    const nickname = LobbyService.getNickname();
    let payload: AuthData;
    if (nickname) {
      payload = { ready: true, loggedIn: true, nickname };
    } else {
      payload = { ready: true, loggedIn: false };
    }
    dispatch({ type: ActionNames.SyncUser, payload });
  }

  private static getAuthHeader() {
    const jwtToken = this.getUserToken() || '';
    return `Bearer ${jwtToken}`;
  }
}
