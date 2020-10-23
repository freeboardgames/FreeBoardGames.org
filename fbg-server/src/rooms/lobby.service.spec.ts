import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { MatchModule } from '../match/match.module';
import { LobbyService } from './lobby.service';
import { RoomEntity } from './db/Room.entity';

function roomIds(lobby: RoomEntity[]) {
  return lobby.map((room) => room.id);
}

describe('LobbyService', () => {
  let module: TestingModule;
  let service: LobbyService;
  let usersService: UsersService;
  let roomsService: RoomsService;

  beforeAll(async () => {
    jest.resetAllMocks();
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    roomsService = module.get<RoomsService>(RoomsService);
    service = module.get<LobbyService>(LobbyService);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should only show public rooms', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const privateRoom = await roomsService.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const publicRoom = await roomsService.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: true,
      },
      bobId,
    );
    const lobby = await service.getLobby();
    expect(roomIds(lobby)).toContain(publicRoom.id);
    expect(roomIds(lobby)).not.toContain(privateRoom.id);
  });

  it('should not show empty rooms', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await roomsService.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: true,
      },
      bobId,
    );
    await roomsService.leaveRoom(bobId, room.id);
    const lobby = await service.getLobby();
    expect(roomIds(lobby)).not.toContain(room.id);
  });

  it('should not show rooms when it is in full capacity', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await roomsService.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: true,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await roomsService.joinRoom(aliceId, room.id);

    const lobby = await service.getLobby();
    expect(roomIds(lobby)).not.toContain(room.id);
  });
});
