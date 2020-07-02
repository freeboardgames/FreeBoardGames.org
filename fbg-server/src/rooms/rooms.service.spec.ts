import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { UsersService } from '../users/users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { Connection } from 'typeorm';
import { MatchModule } from '../match/match.module';
import { HttpService } from '@nestjs/common';
import { MatchService } from '../match/match.service';
import { NewRoomInput } from './gql/NewRoomInput.gql';

describe('RoomsService', () => {
  let module: TestingModule;
  let service: RoomsService;
  let usersService: UsersService;
  let matchService: MatchService;
  let connection: Connection;
  let httpService: HttpService;

  beforeAll(async () => {
    jest.resetAllMocks();
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    service = module.get<RoomsService>(RoomsService);
    connection = module.get<Connection>(Connection);
    httpService = module.get<HttpService>(HttpService);
    matchService = module.get<MatchService>(MatchService);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a room successfully', async () => {
    const room: NewRoomInput = {
      capacity: 2,
      gameCode: 'checkers',
      isPublic: false,
    };
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const newRoom = await service.newRoom(room, bobId);
    expect(newRoom).toMatchObject({ ...room });
  });

  it('should join room for creator successfully', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships).toMatchObject([
      { isCreator: true, user: { id: bobId, nickname: 'bob' } },
    ]);
  });

  it('should have user after joining', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    const result = await service.joinRoom(aliceId, room.id);
    expect(result.userMemberships.length).toEqual(2);
  });

  it('should ignore join if over capacity', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);

    const joeId = await usersService.newUser({ nickname: 'joe' });
    const result = await service.joinRoom(joeId, room.id);
    expect(result.id).toEqual(room.id);
  });

  it('should ignore joining twice', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);

    const result = await service.joinRoom(aliceId, room.id);
    expect(result.id).toEqual(room.id);
  });

  it('should joinRoom successfully', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(2);
  });

  it('should leaveRoom successfully', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    await service.leaveRoom(aliceId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(1);
  });

  it('should remove from room successfully', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    await service.removeFromRoom(bobId, aliceId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(1);
  });

  it('should not allow non-owner to remove from room', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    const result = service.removeFromRoom(aliceId, bobId, room.id);
    await expect(result).rejects.toThrow();
  });

  it('should not leaveRoom after match started', async () => {
    const promiseMock = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve({ data: { gameID: 'bgioGameId' } }))
      .mockReturnValueOnce(
        Promise.resolve({ data: { playerCredentials: '1stSecret' } }),
      )
      .mockReturnValueOnce(
        Promise.resolve({ data: { playerCredentials: '2ndSecret' } }),
      );
    jest
      .spyOn(httpService, 'post')
      .mockReturnValue({ toPromise: promiseMock } as any);
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    await matchService.startMatch(room.id, bobId);
    const leave = await service.leaveRoom(aliceId, room.id);
    expect(leave.userMemberships.length).toEqual(2);
  });

  it('should give ownership to next person on the room after leaving', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    await service.leaveRoom(bobId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(1);
    expect(newRoom.userMemberships[0].user.nickname).toEqual('alice');
    expect(newRoom.userMemberships[0].isCreator).toEqual(true);
  });

  it('should give ownership to joining person if empty', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.leaveRoom(bobId, room.id);
    await service.joinRoom(aliceId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(1);
    expect(newRoom.userMemberships[0].user.nickname).toEqual('alice');
    expect(newRoom.userMemberships[0].isCreator).toEqual(true);
  });

  it('should give the match id after creation', async () => {
    const promiseMock = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve({ data: { gameID: 'bgioGameId' } }))
      .mockReturnValueOnce(
        Promise.resolve({ data: { playerCredentials: '1stSecret' } }),
      )
      .mockReturnValueOnce(
        Promise.resolve({ data: { playerCredentials: '2ndSecret' } }),
      );
    jest
      .spyOn(httpService, 'post')
      .mockReturnValue({ toPromise: promiseMock } as any);
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 2,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    await service.joinRoom(aliceId, room.id);
    const roomId = await matchService.startMatch(room.id, bobId);
    const visit = await service.joinRoom(aliceId, room.id);
    expect(roomId).toEqual(visit.match.id);
  });
});
