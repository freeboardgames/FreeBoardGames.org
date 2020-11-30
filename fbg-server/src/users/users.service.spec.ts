import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { UsersModule } from './users.module';
import { RoomsModule } from '../rooms/rooms.module';
import { MatchModule } from '../match/match.module';

describe('UsersService', () => {
  let module: TestingModule;
  let service: UsersService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user correctly', async () => {
    const nickname = 'foo nick';
    const id = await service.newUser({ nickname });
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });

  it('should return undefined if user does not exist', async () => {
    const user = service.getById(-123);
    await expect(user).rejects.toThrow();
  });

  it('should update nickname correctly', async () => {
    const oldNickname = 'foo nick';
    const id = await service.newUser({ nickname: oldNickname });
    const nickname = 'bar nick';
    await service.updateUser(id, { nickname });
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });
});
