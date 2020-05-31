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
    const newRoom = await service.getRoom(room.id);
    expect(newRoom.userMemberships).toEqual([
      { isCreator: true, user: { id: bobId, nickname: 'bob' } },
    ]);
  });

  it('should have user after checkin', async () => {
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
    const result = await service.checkin(aliceId, room.id);
    expect(result.userMemberships.length).toEqual(2);
  });

  it('should not allow room to go over capacity', async () => {
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
    await service.checkin(aliceId, room.id);

    const joeId = await usersService.newUser({ nickname: 'joe' });
    const result = service.checkin(joeId, room.id);
    await expect(result).rejects.toThrow();
  });

  it('should checkin successfully', async () => {
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
    await service.checkin(aliceId, room.id);
    const newRoom = await service.getRoom(room.id);
    expect(newRoom.userMemberships.length).toEqual(2);
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
    await service.checkin(aliceId, room.id);
    const roomId = await matchService.startMatch(room.id, bobId);
    const visit = await service.checkin(aliceId, room.id);
    expect(roomId).toEqual(visit.matchId);
  });
});
