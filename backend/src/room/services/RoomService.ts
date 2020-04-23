import { RoomDb } from '../../db/RoomDb';
import { Room, NewRoomResponse, NewRoomResponseStatus } from '../../../../common/dto/Room';
import { UserDb } from '../../db/UserDb';

export class RoomService {
  public static async newRoom(userDbEntity: UserDb, room: Room) {
    const roomDbEntity = new RoomDb();
    roomDbEntity.capacity = room.capacity;
    roomDbEntity.gameCode = room.gameCode;
    roomDbEntity.unlisted = room.unlisted;
    roomDbEntity.users = [userDbEntity];

    await roomDbEntity.save();
    const response: NewRoomResponse = { status: NewRoomResponseStatus.Success, room: roomDbEntity };
    return response;
  }

  public static async listRooms() {
    const roomsFromDb = await RoomDb.find({
      where: { unlisted: false },
      relations: ['users'],
    });
    const rooms = roomsFromDb.map((room) => {
      const { capacity, gameCode } = room;
      const users = room.users || [];
      return { capacity, gameCode, users };
    });
    return rooms;
  }

  public static async getRoom(id: number) {
    // room is retrieved with users who joined most recently being first in the users array
    const room = await RoomDb.findOne({
      where: { id },
      relations: ['users'],
    });
    return room;
  }

  public static async isUserInRoom(room: RoomDb, user: UserDb) {
    const usersInRoom = room.users.map((user) => user.id);
    const userID = user.id;
    return usersInRoom.includes(userID);
  }

  public static async joinRoom(room: RoomDb, user: UserDb) {
    room.users.push(user);
    await room.save();
  }
}
