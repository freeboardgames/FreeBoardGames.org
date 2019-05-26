import AddressHelper from '../AddressHelper';
import request from 'superagent';

export interface IPlayerCredential {
  rooms: IPlayerCredential[];
}

export interface IPlayerInRoom {
  playerID: number;
  name?: string;
  credential?: string;
  roomID: string;
}

export interface IRoomMetadata {
  gameCode?: string;
  roomID: string;
  players?: IPlayerInRoom[];  // everyone listed
  // want to know if person is the player
  // new field?
}

export interface INewRoom {
  room: IRoomMetadata;
  initialPlayer: IPlayerInRoom;
}

export class LobbyService {
  public static async newRoom(gameCode: string): Promise<INewRoom> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${gameCode}/create`)
      .send({ numPlayers: 2 });
    const roomID = response.body.gameID;
    const room: IRoomMetadata = { gameCode, roomID };
    const initialPlayer: IPlayerInRoom = { playerID: 0, name: 'J', roomID };
    return roomID;
  }

  public static async joinRoom(room: IRoomMetadata, player: IPlayerInRoom): Promise<IRoomMetadata> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${room.gameCode}/${room.roomID}/join`)
      .send({
        playerID: this.genPlayerID(room),  // gen player id automatically
        playerName: player.name,
      });
    const credential = response.body.playerCredentials;
    player.credential = credential;
    this.setCredential(player);
    const response2 = await request
      .get(`${AddressHelper.getServerAddress()}/games/${room.gameCode}/${room.roomID}`);
    const newRoom: IRoomMetadata = response.body;
    return newRoom;
  }

  public static async getRoomMetadata(gameCode: string, roomID: string): Promise<IRoomMetadata> {
    const response = await request
      .get(`${AddressHelper.getServerAddress()}/games/${gameCode}/${roomID}`);
    const roomMetadata: IRoomMetadata = response.body;
    return roomMetadata;
  }

  public static async isRoomReady(room: IRoomMetadata): Promise<boolean> {
    const roomMetadata: IRoomMetadata = await this.getRoomMetadata(room);
    const players = roomMetadata.players;
    const playersWithNames: any = [];
    for (const player of players) {
      if (player.name) {
        playersWithNames.push(player);
      }
    }
    return playersWithNames.length === 2;
  }

  public static getNickname(): string {
    return localStorage.getItem('fbgNickname');
  }

  public static getCredential(roomID: string): IPlayerInRoom {
    // return an empty IPlayerInRoom object if the player's identity is for another room
    const credential = localStorage.getItem('fbgCredential');
    let player: IPlayerInRoom;
    if (credential) {
      const decodedPlayer: IPlayerInRoom = JSON.parse(credential);
      if (decodedPlayer.roomID === roomID) {
        player = decodedPlayer;
      }
    }
    return player;
  }

  public static setCredential(credential: IPlayerInRoom): void {
    localStorage.setItem('fbgCredential', JSON.stringify(credential));
  }

  public static genPlayerID(room: IRoomMetadata): number {
    const players = room.players;
    const playersWithNames: any = [];
    for (const player of players) {
      if (player.name) {
        playersWithNames.push(player);
      }
    }
    return playersWithNames.length - 1;
  }
}
