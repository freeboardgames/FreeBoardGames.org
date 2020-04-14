import { Room, RoomDbEntity } from '../entities/Room';

export class RoomService {
  public static async newRoom(room: Room) {
    const roomDbEntity = new RoomDbEntity();
    roomDbEntity.capacity = room.capacity;
    roomDbEntity.gameCode = room.gameCode;
    roomDbEntity.unlisted = room.unlisted;

    await roomDbEntity.save();
    return roomDbEntity;
  }

  public static async listRooms() {
    const roomsFromDb = await RoomDbEntity.find({ where: { private: false } });
    const rooms = roomsFromDb.map((room) => {
      const { capacity, gameCode } = room;
      const users = room.users || [];
      return { capacity, gameCode, users };
    });
    return rooms;
  }
}
