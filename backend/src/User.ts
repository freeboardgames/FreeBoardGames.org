import { UserDBEntity } from './entities/UserDBEntity';
import * as bcrypt from 'bcrypt';

export enum AUTH_RESULT_CODE {
  SUCCESS,
  UNKNOWN_EMAIL,
  BAD_PASSWORD,
}

export enum REG_RESULT_CODE {
  SUCCESS,
  NON_UNIQ_EMAIL,
  NON_UNIQ_USERNAME,
  WEAK_PASSWORD,
}

const SALT_ROUNDS = 10;

export default class User {
  username: string;

  constructor(username: string) {
    this.username = username.toLowerCase();
  }

  async getDBEntity() {
    return await UserDBEntity.findOne({ username: this.username });
  }

  /** Returns true if the given password is correct, else false. */
  async checkPassword(password: string) {
    const user = await UserDBEntity.findOne({ username: this.username });
    if (!user) {
      return AUTH_RESULT_CODE.UNKNOWN_EMAIL;
    }
    const passwordHash = user.passwordHash;
    const isCorrectPassword = bcrypt.compareSync(password, passwordHash);
    if (!isCorrectPassword) {
      return AUTH_RESULT_CODE.BAD_PASSWORD;
    }
    return AUTH_RESULT_CODE.SUCCESS;
  }

  /** Adds a user to the database with the given password. */
  async addUser(rawEmail: string, password: string) {
    const usernameExists = await UserDBEntity.findOne({ username: this.username });
    if (usernameExists) {
      return REG_RESULT_CODE.NON_UNIQ_EMAIL;
    }

    const email = rawEmail.toLowerCase();

    const emailExists = await UserDBEntity.findOne({ email });
    if (emailExists) {
      return REG_RESULT_CODE.NON_UNIQ_EMAIL;
    }

    const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);
    const user = new UserDBEntity();
    user.username = this.username;
    user.email = rawEmail;
    user.passwordHash = passwordHash;
    await user.save();
    return REG_RESULT_CODE.SUCCESS;
  }
}
