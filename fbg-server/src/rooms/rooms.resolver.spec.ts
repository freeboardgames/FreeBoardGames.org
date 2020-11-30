import { Test, TestingModule } from '@nestjs/testing';
import { RoomsResolver } from './rooms.resolver';
import { RoomsModule } from './rooms.module';
import { MatchModule } from '../match/match.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule } from '../testing/dbUtil';

describe('Rooms Resolver', () => {
  let resolver: RoomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FakeDbModule, RoomsModule, MatchModule, UsersModule],
    }).compile();

    resolver = module.get<RoomsResolver>(RoomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
