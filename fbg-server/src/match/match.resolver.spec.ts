import { Test, TestingModule } from '@nestjs/testing';
import { MatchResolver } from './match.resolver';
import { MatchModule } from './match.module';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule } from '../testing/dbUtil';

describe('Match Resolver', () => {
  let resolver: MatchResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, MatchModule],
    }).compile();

    resolver = module.get<MatchResolver>(MatchResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
