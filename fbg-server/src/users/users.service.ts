import { Injectable } from '@nestjs/common';
import { User } from '../dto/users/User';
import { UserEntity } from '../users/db/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) { }

  async newUser(user: User): Promise<string> {
    const userEntity = new UserEntity();
    userEntity.nickname = user.nickname;
    await this.usersRepository.insert(userEntity);
    return userEntity.id;
  }

  async getById(id: string): Promise<User | undefined> {
    const userEntity = await this.usersRepository.findOne(id);
    const user: User = { id: userEntity.id, nickname: userEntity.nickname };
    return user;
  }
}
