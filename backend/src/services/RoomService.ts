import { RoomDbEntity } from '../entities/Room';
import { Room, NewRoomResponse, NewRoomResponseStatus } from '../../../common/dto/Room';
import { UserDbEntity } from '../entities/User';

export class RoomService {
  public static async newRoom(userDbEntity: UserDbEntity, room: Room) {
    const roomDbEntity = new RoomDbEntity();
    roomDbEntity.capacity = room.capacity;
    roomDbEntity.gameCode = room.gameCode;
    roomDbEntity.unlisted = room.unlisted;
    roomDbEntity.users = [userDbEntity];

    await roomDbEntity.save();
    const response: NewRoomResponse = { status: NewRoomResponseStatus.Success, room: roomDbEntity };
    return response;
  }

  public static async listRooms() {
    const roomsFromDb = await RoomDbEntity.find({
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
    const room = await RoomDbEntity.findOne({
      where: { id },
      relations: ['users'],
    });
    return room;
  }

  // private static async convertDbToDto(RoomDbEn
}
