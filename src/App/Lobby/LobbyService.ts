import AddressHelper from '../AddressHelper';
import request from 'superagent';

export interface IPlayerInRoom {
  playerID: number;
  name: string;
  credential?: string;
}

export interface IRoomMetadata {
  gameCode?: string;
  roomID: string;
  players?: IPlayerInRoom[];
  ready?: boolean;
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
    const initialPlayer: IPlayerInRoom = { playerID: 0, name: 'J' };
    const credential = await this.joinRoom(room, initialPlayer);
    initialPlayer.credential = credential;
    localStorage.setItem('fbgCredential', JSON.stringify(initialPlayer));
    return roomID;
  }

  public static async joinRoom(room: IRoomMetadata, player: IPlayerInRoom): Promise<string> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${room.gameCode}/${room.roomID}/join`)
      .send({
        playerID: player.playerID,
        playerName: player.name,
      });
    return response.body.playerCredentials;
  }

  public static async roomMetadata(room: IRoomMetadata): Promise<IRoomMetadata> {
    const response = await request
      .get(`${AddressHelper.getServerAddress()}/games/${room.gameCode}/${room.roomID}`);
    const roomMetadata: IRoomMetadata = response.body;
    return roomMetadata;
  }

  public static async roomReady(room: IRoomMetadata): Promise<boolean> {
    const roomMetadata: IRoomMetadata = await this.roomMetadata(room);
    const players = roomMetadata.players;
    const playersWithNames: any = [];
    for (const player of players) {
      if (player.name) {
        playersWithNames.push(player);
      }
    }
    return playersWithNames.length === 2;
  }
}
