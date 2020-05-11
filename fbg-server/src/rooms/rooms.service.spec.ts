import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { UsersService } from '../users/users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { Room } from '../dto/rooms/Room';
import { Connection } from 'typeorm';
import { MatchModule } from '../match/match.module';

describe('RoomsService', () => {
  let module: TestingModule;
  let service: RoomsService;
  let usersService: UsersService;
  let connection: Connection;

  beforeAll(async () => {
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
});
