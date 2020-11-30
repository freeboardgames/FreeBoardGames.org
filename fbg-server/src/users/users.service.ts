import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { NewUserInput } from './gql/NewUserInput.gql';
import { User } from './gql/User.gql';
import { UserEntity } from '../users/db/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntityToUser } from './UserUtil';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  /** Creates a new user, returns its id. */
  async newUser(user: NewUserInput): Promise<number> {
    this.checkValidUser(user);
    const userEntity = new UserEntity();
    userEntity.nickname = user.nickname;
    await this.usersRepository.insert(userEntity);
    return userEntity.id;
  }

  /** Gets a user DTO by id. */
  async getById(id: number): Promise<User> {
    const userEntity = await this.getUserEntity(id);
    return userEntityToUser(userEntity);
  }

  /** Gets a user DB entity by id. */
  async getUserEntity(id: number): Promise<UserEntity> {
    const userEntity = await this.usersRepository.findOne(id);
    if (!userEntity) {
      throw new HttpException(
        `User id "${id}" does not exist.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return userEntity;
  }

  /** Updates user information. */
  async updateUser(userId: number, user: NewUserInput): Promise<void> {
    this.checkValidUser(user);
    const partialEntity = new UserEntity();
    partialEntity.nickname = user.nickname;
    await this.usersRepository.update(userId, partialEntity);
  }

  /** Update user's information. */
  private checkValidUser(user: NewUserInput) {
    if (!user) {
      throw new HttpException('User is required', HttpStatus.BAD_REQUEST);
    }
    if (!user.nickname || user.nickname.length < 1) {
      throw new HttpException(
        `Invalid nickname: ${user.nickname}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
