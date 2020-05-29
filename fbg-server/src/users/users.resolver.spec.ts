import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { UsersModule } from './users.module';
import { UsersResolver } from './users.resolver';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';
import { RoomsModule } from '../rooms/rooms.module';
import { MatchModule } from '../match/match.module';

describe('UsersController', () => {
  let module: TestingModule;
  let controller: UsersResolver;
  let service: UsersService;
  let jwtService: JwtService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    controller = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should give invalid nickname', async () => {
    const nickname = '';

    const result = controller.newUser({ nickname });

    await expect(result).rejects.toThrow();
  });

  it('should create user succesfully', async () => {
    const nickname = 'foo user';
    const result = await controller.newUser({ nickname });
    const jwtToken: JwtPayload = jwtService.decode(result.jwtToken) as any;
    const id = jwtToken.userId;
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });
});
