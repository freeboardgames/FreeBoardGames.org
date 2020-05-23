import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';
import { RoomsModule } from './rooms.module';
import { MatchModule } from '../match/match.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule } from '../testing/dbUtil';

describe('Rooms Controller', () => {
  let controller: RoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FakeDbModule, RoomsModule, MatchModule, UsersModule],
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
