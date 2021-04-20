import { Test, TestingModule } from '@nestjs/testing';
import { HealthzController } from './healthz.controller';
import { FakeDbModule, closeDbConnection } from './testing/dbUtil';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { MatchModule } from './match/match.module';

describe('Healthz Controller', () => {
  let controller: HealthzController;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
      controllers: [HealthzController],
    }).compile();

    controller = module.get<HealthzController>(HealthzController);
  });

  afterAll(async () => {
    closeDbConnection(module);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return OK', async () => {
    expect(await controller.healthz()).toEqual('OK');
  });
});
