import { UserDBEntity } from './entities/UserDBEntity';
import * as bcrypt from 'bcrypt';

export enum RESULT_CODE {
  UNKNOWN_EMAIL = 0,
  BAD_PASSWORD = 1,
  SUCCESS = 2,
}

const SALT_ROUNDS = 10;

export default class User {
  constructor(public email: string) {}

  /** Returns true if the given password is correct, else false. */
  async checkPassword(password: string) {
    const user = await UserDBEntity.findOne({ email: this.email });
    if (!user) {
      return RESULT_CODE.UNKNOWN_EMAIL;
    }
    const passwordHash = user.passwordHash;
    const isCorrectPassword = bcrypt.compareSync(password, passwordHash);
    if (!isCorrectPassword) {
      return RESULT_CODE.BAD_PASSWORD;
    }
    return RESULT_CODE.SUCCESS;
  }

  /** Adds a user to the database with the given password. */
  async addUser(password: string) {
    let userCreated = false;
    const existingUser = await UserDBEntity.findOne({ email: this.email });
    if (!existingUser) {
      const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);
      const user = new UserDBEntity();
      user.passwordHash = passwordHash;
      await user.save();
      userCreated = true;
    }
    return userCreated;
  }
}
