import AddressHelper from '../Helpers/AddressHelper';
import request from 'superagent';
import SSRHelper from '../Helpers/SSRHelper';

const FBG_CREDENTIALS_KEY = 'fbgCredentials';
const FBG_NICKNAME_KEY = 'fbgNickname';

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
  public static async newRoom(gameCode: string, numPlayers: number): Promise<string> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${gameCode}/create`)
      .send({ numPlayers });
    const roomID = response.body.gameID;
    return roomID;
  }

  public static async joinRoom(gameCode: string, player: IPlayerInRoom): Promise<void> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${gameCode}/${player.roomID}/join`)
      .send({
        playerID: player.playerID,
        playerName: player.name,
      });
    const credential = response.body.playerCredentials;
    this.setCredential(player, credential);
  }

  public static async renameUser(gameCode: string, player: IPlayerInRoom, newName: string): Promise<void> {
    const playerCredential: IPlayerCredential = this.getCredential(player.roomID);
    await request.post(`${AddressHelper.getServerAddress()}/games/${gameCode}/${player.roomID}/rename`).send({
      playerID: player.playerID,
      playerCredentials: playerCredential.credential,
      newName,
    });
  }

  public static async getRoomMetadata(gameCode: string, roomID: string): Promise<IRoomMetadata> {
    const response = await request.get(`${AddressHelper.getServerAddress()}/games/${gameCode}/${roomID}`);
    const body = response.body;
    const players: IPlayerInRoom[] = body.players
      .filter((player: any) => player.name)
      .map((player: any) => ({
        playerID: player.id,
        name: player.name,
        roomID,
      }));
    const playerCredential: IPlayerCredential = this.getCredential(roomID);
    let currentUser;
    if (playerCredential) {
      currentUser = players.find((player: any) => player.playerID === playerCredential.playerID);
    }
    return { players, gameCode, roomID, currentUser, numberOfPlayers: body.players.length };
  }

  public static async getPlayAgainNextRoom(gameCode: string, roomID: string, numPlayers: number): Promise<string> {
    const playerCredential: IPlayerCredential = this.getCredential(roomID);
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${gameCode}/${roomID}/playAgain`)
      .send({ playerID: playerCredential.playerID, credentials: playerCredential.credential, numPlayers });
    return response.body.nextRoomID;
  }

  public static getNickname(): string {
    if (!SSRHelper.isSSR()) {
      return localStorage.getItem(FBG_NICKNAME_KEY);
    }
  }

  public static setNickname(name: string): void {
    localStorage.setItem(FBG_NICKNAME_KEY, name);
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
}
