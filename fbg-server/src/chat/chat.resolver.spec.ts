import { Test, TestingModule } from '@nestjs/testing';
import { ChatResolver } from './chat.resolver';
import { ChatModule } from './chat.module';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
import { FakeDbModule } from '../testing/dbUtil';
import { closeDbConnection } from '../testing/dbUtil';

describe('Chat Resolver', () => {
  let module: TestingModule;
  let resolver: ChatResolver;

  afterAll(async () => {
    closeDbConnection(module);
  });

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [FakeDbModule, UsersModule, RoomsModule, ChatModule],
    }).compile();

    resolver = module.get<ChatResolver>(ChatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
