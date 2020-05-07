import { Injectable } from '@nestjs/common';
import { User } from './definitions';

@Injectable()
export class UsersService {
  async newUser(user: User): Promise<string> {
    // TODO(flamecoals): Add database layer and save User.
    return 'fooId';
  }
  async getById(id: string): Promise<User | undefined> {
    // TODO(flamecoals): Add database layer and fetch User.
    return { id, nickname: 'foo' };
  }
}
