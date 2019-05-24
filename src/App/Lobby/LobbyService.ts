import AddressHelper from '../AddressHelper';
import request from 'superagent';

export interface IPlayerInRoom {
  playerID: number;
  name: string;
  credential?: string;
}

export interface IRoomMetadata {
  gameCode: string;
  roomID: string;
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
    const newRoom: INewRoom = { room, initialPlayer };
    return newRoom;
  }

  public static async joinRoom(room: IRoomMetadata, player: IPlayerInRoom): Promise<string> {
    const response = await request
      .post(`${AddressHelper.getServerAddress()}/games/${room.gameCode}/${room.roomID}/join`)
      .send({
        playerID: player.playerID,
        playerName: player.name,
      });
    return response.body.playerCredential;
  }
}
