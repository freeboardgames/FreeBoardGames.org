import { Test, TestingModule } from '@nestjs/testing';
import { MatchService } from './match.service';
import { MatchModule } from './match.module';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MatchEntity } from './db/Match.entity';
import { Repository } from 'typeorm';
import { MatchMembershipEntity } from './db/MatchMembership.entity';
import { UsersService } from '../users/users.service';
import { RoomsService } from '../rooms/rooms.service';

describe('MatchService', () => {
  let module: TestingModule;
  let service: MatchService;
  let usersService: UsersService;
  let roomsService: RoomsService;
  let matchRepository: Repository<MatchEntity>;
  let matchMembershipRepository: Repository<MatchMembershipEntity>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    service = module.get<MatchService>(MatchService);
    usersService = module.get<UsersService>(UsersService);
    roomsService = module.get<RoomsService>(RoomsService);
    matchRepository = module.get(getRepositoryToken(MatchEntity));
    matchMembershipRepository = module.get(
      getRepositoryToken(MatchMembershipEntity),
    );
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get match succesfully', async () => {
    const matchEntity = new MatchEntity();
    matchEntity.id = 'fooMock';
    matchEntity.gameCode = 'chess';
    matchEntity.bgioServerInternalUrl = 'fooInternalUrl';
    matchEntity.bgioServerExternalUrl = 'fooExternalUrl';
    matchEntity.bgioMatchId = 'fooMatchId';
    await matchRepository.save(matchEntity);
    const aliceId = await usersService.newUser({ nickname: 'alice' });
    const alice = await usersService.getUserEntity(aliceId);
    const aliceMatchMembership = new MatchMembershipEntity();
    aliceMatchMembership.user = alice;
    aliceMatchMembership.match = matchEntity;
    aliceMatchMembership.bgioSecret = 'aliceSecret';
    aliceMatchMembership.bgioPlayerId = 1;
    await matchMembershipRepository.save(aliceMatchMembership);
    const bobId = await usersService.newUser({ nickname: 'bob' });
    const bob = await usersService.getUserEntity(bobId);
    const bobMatchMembership = new MatchMembershipEntity();
    bobMatchMembership.user = bob;
    bobMatchMembership.match = matchEntity;
    bobMatchMembership.bgioSecret = 'bobSecret';
    bobMatchMembership.bgioPlayerId = 0;
    await matchMembershipRepository.save(bobMatchMembership);

    const match = await service.getMatch('fooMock', aliceId);

    expect(match).toEqual({
      gameCode: 'chess',
      bgioServerUrl: 'fooExternalUrl',
      bgioMatchId: 'fooMatchId',
      bgioSecret: 'aliceSecret',
      bgioPlayerId: '1',
      players: [
        { id: bobId, nickname: 'bob' },
        { id: aliceId, nickname: 'alice' },
      ],
    });
  });

  it('should get next room succesfully', async () => {
    const capacity = 2;
    const gameCode = 'chess';
    const isPublic = false;
    const matchEntity = new MatchEntity();
    matchEntity.id = 'fooMock2';
    matchEntity.gameCode = gameCode;
    matchEntity.bgioServerInternalUrl = 'fooInternalUrl';
    matchEntity.bgioServerExternalUrl = 'fooExternalUrl';
    matchEntity.bgioMatchId = 'fooMatchId';
    const room = await roomsService.newRoom({ capacity, gameCode, isPublic });
    matchEntity.room = await roomsService.getShallowRoomEntity(room.id);
    await matchRepository.save(matchEntity);

    const newRoomId = await service.getNextRoom('fooMock2');
    const sameRoomId = await service.getNextRoom('fooMock2');

    const newRoom = await roomsService.getRoom(newRoomId);
    expect(newRoom).toMatchObject({ capacity, gameCode, isPublic });
    expect(sameRoomId).toEqual(newRoomId);
  });
});
