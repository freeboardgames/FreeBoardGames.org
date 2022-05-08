import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { UsersService } from '../users/users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { MatchModule } from '../match/match.module';
import { HttpService } from '@nestjs/common';
import { MatchService } from '../match/match.service';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { PubSub } from 'graphql-subscriptions';
import { FBG_PUB_SUB } from '../internal/FbgPubSubModule';

describe('RoomsService', () => {
  let module: TestingModule;
  let service: RoomsService;
  let usersService: UsersService;
  let matchService: MatchService;
  let httpService: HttpService;
  let pubSub: PubSub;

  beforeAll(async () => {
    jest.resetAllMocks();
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    service = module.get<RoomsService>(RoomsService);
    httpService = module.get<HttpService>(HttpService);
    matchService = module.get<MatchService>(MatchService);
    pubSub = module.get<PubSub>(FBG_PUB_SUB);
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

  it('should move up user successfully', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    let room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const aliceId = await usersService.newUser({ nickname: 'alice' });

    await service.joinRoom(aliceId, room.id);
    room = await service.getRoomEntity(room.id);
    expect(room.userMemberships.length).toEqual(2);
    expect(room.userMemberships[0].position).toEqual(1);
    expect(room.userMemberships[0].user.id).toEqual(bobId);
    expect(room.userMemberships[1].position).toEqual(2);
    expect(room.userMemberships[1].user.id).toEqual(aliceId);

    await service.moveUserUp(bobId, aliceId, room.id);
    const newRoom = await service.getRoomEntity(room.id);
    expect(newRoom.userMemberships.length).toEqual(2);
    expect(newRoom.userMemberships[0].position).toEqual(1);
    expect(newRoom.userMemberships[0].user.id).toEqual(aliceId);;
    expect(newRoom.userMemberships[1].position).toEqual(2);
    expect(newRoom.userMemberships[1].user.id).toEqual(bobId);
  });

  it('should notify about new room capacity and game', async () => {
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const room = await service.newRoom(
      {
        capacity: 3,
        gameCode: 'checkers',
        isPublic: false,
      },
      bobId,
    );
    const newCapacity = 5;
    const newGameCode = 'chess';
    jest.clearAllMocks();
    const publish = jest.spyOn(pubSub, 'publish');
    await service.updateRoom(bobId, { roomId: room.id, capacity: newCapacity, gameCode: newGameCode});

    const args = publish.mock.calls[0];
    expect(args[0]).toEqual(`room/${room.id}`);
    expect(args[1].roomMutated.capacity).toEqual(newCapacity);
    expect(args[1].roomMutated.gameCode).toEqual(newGameCode);
  });

  it('should notify about new room capacity and game', async () => {
    const room: NewRoomInput = {
      capacity: 2,
      gameCode: 'checkers',
      isPublic: true,
    };
    const bobId = await usersService.newUser({ nickname: 'bob' });
    jest.clearAllMocks();
    const post = jest.spyOn(httpService, 'post').mockImplementation(() => ({ toPromise: () => Promise.resolve() }) as any);
    const webhookUrl = "https://foo";
    process.env.DISCORD_LETS_PLAY_WEBHOOK = webhookUrl;

    await service.newRoom(room, bobId);

    delete process.env.DISCORD_LETS_PLAY_WEBHOOK;

    const args = post.mock.calls[0];
    expect(args[0]).toEqual(webhookUrl);
    expect(args[1].embeds[0].title).toContain('bob');
    expect(args[1].embeds[0].description).toContain('bob');
  });

  it('should notify that about a user update succesfully', async () => {
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
    jest.clearAllMocks();
    const publish = jest.spyOn(pubSub, 'publish');
    await usersService.updateUser(aliceId, { nickname: 'Alice'});
    await service.notifyUserUpdated(aliceId);

    const args = publish.mock.calls[0];
    expect(args[0]).toEqual(`room/${room.id}`);
    expect(args[1].roomMutated.userMemberships[1].user.nickname).toEqual('Alice');
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
      .mockReturnValueOnce(Promise.resolve({ data: { matchID: 'bgioGameId' } }))
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
      .mockReturnValueOnce(Promise.resolve({ data: { matchID: 'bgioGameId' } }))
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
