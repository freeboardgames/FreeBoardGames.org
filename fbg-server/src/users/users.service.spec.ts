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
    const nickname = 'foo';
    const id = await service.newUser({ nickname });
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });

  it('should throw error for short nickname', async () => {
    const nickname = '';
    const newUserId = service.newUser({ nickname });
    await expect(newUserId).rejects.toThrow();
  });

  it('should throw error for long nickname', async () => {
    const nickname = '0123456789012345';
    const newUserId = service.newUser({ nickname });
    await expect(newUserId).rejects.toThrow();
  });

  it('should throw error for non-alphanumerical nickname', async () => {
    const nickname = 'hi!';
    const newUserId = service.newUser({ nickname });
    await expect(newUserId).rejects.toThrow();
  });

  it('should return undefined if user does not exist', async () => {
    const user = service.getById(-123);
    await expect(user).rejects.toThrow();
  });

  it('should update nickname correctly', async () => {
    const oldNickname = 'foo';
    const id = await service.newUser({ nickname: oldNickname });
    const nickname = 'bar';
    await service.updateUser(id, { nickname });
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });
});
