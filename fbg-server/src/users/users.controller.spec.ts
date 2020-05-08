import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FakeDbModule, closeDbConnection } from '../testing/dbUtil';
import { UsersModule } from './users.module';
import { UsersController } from './users.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';

describe('UsersController', () => {
  let module: TestingModule;
  let controller: UsersController;
  let service: UsersService;
  let jwtService: JwtService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
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
    const nickname = 'x';

    const result = controller.newUser({ user: { nickname } });

    expect(result).rejects.toThrow();
  });

  it('should create user succesfully', async () => {
    const nickname = 'foo user';
    const result = await controller.newUser({ user: { nickname } });
    const jwtPayload: JwtPayload = jwtService.decode(result.jwtPayload) as any;
    const id = jwtPayload.userId;
    const user = await service.getById(id);
    expect(user).toEqual({ id, nickname });
  });
});
