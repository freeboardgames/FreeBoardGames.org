import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { Room } from '../dto/rooms/Room';

describe('RoomsService', () => {
  let module: TestingModule;
  let service: RoomsService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a room successfully', async () => {
    const room: Room = { capacity: 2, gameCode: 'checkers', isPublic: false };
    const id = await service.newRooom(room);
    const newRoom = await service.getRoom(id);
    expect(newRoom).toEqual({ id, users: [], ...room });
  });
});
