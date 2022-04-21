import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { ChatModule } from './chat.module';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule } from '../testing/dbUtil';
import { UsersService } from '../users/users.service';
import { RoomsService } from '../rooms/rooms.service';
import { MatchService } from '../match/match.service';
import { PubSub } from 'graphql-subscriptions';
import { closeDbConnection } from '../testing/dbUtil';
import { HttpService } from '@nestjs/common';
import { FBG_PUB_SUB } from '../internal/FbgPubSubModule';

describe('ChatService', () => {
  let module: TestingModule;
  let service: ChatService;
  let roomsService: RoomsService;
  let matchService: MatchService;
  let usersService: UsersService;
  let pubSub: PubSub;
  let httpService: HttpService;

  afterAll(async () => {
    closeDbConnection(module);
  });

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, ChatModule],
    }).compile();

    service = module.get<ChatService>(ChatService);
    usersService = module.get<UsersService>(UsersService);
    roomsService = module.get<RoomsService>(RoomsService);
    matchService = module.get<MatchService>(MatchService);
    httpService = module.get<HttpService>(HttpService);
    pubSub = module.get<PubSub>(FBG_PUB_SUB);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('room', () => {
    let bobId, room, aliceId, channelId;
    const channelType = 'room';
    beforeAll(async () => {
      bobId = await usersService.newUser({ nickname: 'bob' });
      room = await roomsService.newRoom(
        {
          capacity: 2,
          gameCode: 'checkers',
          isPublic: true,
        },
        bobId,
      );
      channelId = room.id;
      aliceId = await usersService.newUser({ nickname: 'alice' });
      await roomsService.joinRoom(aliceId, room.id);
    });

    it('should throw error for user not present', async () => {
      const message = 'Hello, bob!';
      const joeId = await usersService.newUser({ nickname: 'joe' });
      const result = service.sendMessage(joeId, { channelType, channelId, message });

      await expect(result).rejects.toThrow();
    });

    it('should transmit a message succesfully', async () => {
      const message = 'Hello, bob!';
      jest.clearAllMocks();
      const publish = jest.spyOn(pubSub, 'publish');
      await service.sendMessage(aliceId, { channelType, channelId, message });

      const args = publish.mock.calls[0];
      expect(args[0]).toEqual(`chat/room/${room.id}`);
      expect(args[1].chatMutated.userNickname).toEqual('alice');
      expect(args[1].chatMutated.message).toEqual(message);
    });

    it('should block bad words', async () => {
      const message = 'Fuck!';
      jest.clearAllMocks();
      const publish = jest.spyOn(pubSub, 'publish');
      await service.sendMessage(aliceId, { channelType, channelId, message });

      const args = publish.mock.calls[0];
      expect(args[1].chatMutated.message).toEqual('****!');
    });
  });

  describe('match', () => {
    let bobId, matchId, aliceId, channelId;
    const channelType = 'match';
    beforeAll(async () => {
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
      bobId = await usersService.newUser({ nickname: 'bob' });
      const room = await roomsService.newRoom(
        {
          capacity: 2,
          gameCode: 'checkers',
          isPublic: true,
        },
        bobId,
      );
      aliceId = await usersService.newUser({ nickname: 'alice' });
      await roomsService.joinRoom(aliceId, room.id);
      matchId = await matchService.startMatch(room.id, bobId);
      channelId = matchId;
    });

    it('should throw error for user not present', async () => {
      const message = 'Hello, bob!';
      const joeId = await usersService.newUser({ nickname: 'joe' });
      const result = service.sendMessage(joeId, { channelType, channelId, message });

      await expect(result).rejects.toThrow();
    });

    it('should transmit a message succesfully', async () => {
      const message = 'Hello, bob!';
      jest.clearAllMocks();
      const publish = jest.spyOn(pubSub, 'publish');
      await service.sendMessage(aliceId, { channelType, channelId, message });

      const args = publish.mock.calls[0];
      expect(args[0]).toEqual(`chat/match/${matchId}`);
      expect(args[1].chatMutated.userNickname).toEqual('alice');
      expect(args[1].chatMutated.message).toEqual(message);
    });
  })
});
