import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { UsersService } from '../users/users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { Room } from '../dto/rooms/Room';
import { Connection, AdvancedConsoleLogger } from 'typeorm';
import { MatchModule } from '../match/match.module';
import { query } from 'express';
import { HttpService } from '@nestjs/common';
import { MatchService } from '../match/match.service';

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

  it('should start match', async () => {
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
    const roomId = await service.newRoom({
      capacity: 2,
      gameCode: 'checkers',
      isPublic: false,
    });
    const user1 = await usersService.newUser({ nickname: 'foo' });
    await service.checkin(user1, roomId);
    // second player joins; capacity is 2, so match starts
    const user2 = await usersService.newUser({ nickname: 'bar' });

    const checkinResponse = await service.checkin(user2, roomId);
    const match = await matchService.getMatchEntity(checkinResponse.matchId);

    expect(match.bgioMatchId).toEqual('bgioGameId');
    expect(match.playerMemberships[0].bgioSecret).toEqual('1stSecret');
    expect(match.playerMemberships[1].bgioSecret).toEqual('2ndSecret');
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
    const roomId = await service.newRoom({
      capacity: 2,
      gameCode: 'checkers',
      isPublic: false,
    });
    const user1 = await usersService.newUser({ nickname: 'foo' });
    await service.checkin(user1, roomId);
    // second player joins; capacity is 2, so match starts
    const user2 = await usersService.newUser({ nickname: 'bar' });

    const creation = await service.checkin(user2, roomId);
    const visit = await service.checkin(user1, roomId);
    expect(creation.matchId).toEqual(visit.matchId);
  });
});
