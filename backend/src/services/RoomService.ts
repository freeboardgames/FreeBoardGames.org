import { Room, RoomDbEntity } from '../entities/Room';

class RoomService {
  public static async newRoom(room: Room) {
    const roomDbEntity = new RoomDbEntity();
    roomDbEntity.capacity = room.capacity;
    roomDbEntity.gameCode = room.gameCode;
    await roomDbEntity.save();
    return roomDbEntity;
  }
}

export default RoomService;
