import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { UsersService } from '../users/users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { Room } from '../dto/rooms/Room';
import { Connection } from 'typeorm';
import { MatchModule } from '../match/match.module';
import { query } from 'express';

describe('RoomsService', () => {
  let module: TestingModule;
  let service: RoomsService;
  let usersService: UsersService;
  let connection: Connection;

  beforeAll(async () => {
    jest.resetAllMocks();
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    service = module.get<RoomsService>(RoomsService);
    connection = module.get<Connection>(Connection);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a room successfully', async () => {
    const room: Room = { capacity: 2, gameCode: 'checkers', isPublic: false };
    const id = await service.newRoom(room);
    const newRoom = await service.getRoom(id);
    expect(newRoom).toEqual({ id, users: [], ...room });
  });

  it('should join room successfully', async () => {
    const roomId = await service.newRoom({
      capacity: 2,
      gameCode: 'checkers',
      isPublic: false,
    });
    const userId = await usersService.newUser({ nickname: 'foo' });
    await service.checkin(userId, roomId);
    const newRoom = await service.getRoom(roomId);
    expect(newRoom.users).toEqual([{ id: userId, nickname: 'foo' }]);
  });

  it('should start match', async() => {
    const startMatchMock = jest.fn();
    (service as any).startMatch = startMatchMock;

    const {roomId, userId} = await getRoomAndUser();
    await service.checkin(userId, roomId);

    // second player joins; capacity is 2, so match starts
    const user2Id = await usersService.newUser({ nickname: 'bar' });
    await service.checkin(user2Id, roomId);

    expect(startMatchMock).toHaveBeenCalled();
  })

  // TODO Fix this test
  it.skip('should return match ID when a match has already started', async() => {
    const createBgioMatchMock = jest.fn().mockResolvedValue('foomatchID');
    (service as any).createBgioMatch = createBgioMatchMock;

    const {roomId, userId} = await getRoomAndUser();
    await service.checkin(userId, roomId);

    const user2Id = await usersService.newUser({ nickname: 'bar' });
    await service.checkin(user2Id, roomId);

    const user3Id = await usersService.newUser({ nickname: 'bar' });
    // FIXME UpdateValuesMissingError: Cannot perform update query because update values are not defined. Call "qb.set(...)" method to specify updated values.
    await service.checkin(user3Id, roomId);
  });

  async function getRoomAndUser() {
    const roomId = await service.newRoom({
      capacity: 2,
      gameCode: 'checkers',
      isPublic: false,
    });
    const userId = await usersService.newUser({ nickname: 'foo' });
    return {roomId, userId};
  }
});
