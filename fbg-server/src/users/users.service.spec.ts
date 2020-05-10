import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { UsersModule } from './users.module';
import { RoomsModule } from '../rooms/rooms.module';

describe('UsersService', () => {
  let module: TestingModule;
  let service: UsersService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule],
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
    const user = service.getById('I dont exist');
    await expect(user).rejects.toThrow();
  });
});
