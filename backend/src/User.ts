import { UserDbEntity } from 'entities/UserDbEntity';

export enum REG_RESULT_CODE {
  SUCCESS,
  NON_UNIQ_NICK,
}

export default class User {
  username: string;

  constructor(username: string) {
    this.username = username.toLowerCase();
  }

  async getDBEntity() {
    return await UserDbEntity.findOne({ username: this.username });
  }

  /** Returns true if the given password is correct, else false. */
  // async checkPassword(password: string) {
  //   const user = await UserDBEntity.findOne({ username: this.username });
  //   if (!user) {
  //     return AUTH_RESULT_CODE.UNKNOWN_EMAIL;
  //   }
  //   const passwordHash = user.passwordHash;
  //   const isCorrectPassword = bcrypt.compareSync(password, passwordHash);
  //   if (!isCorrectPassword) {
  //     return AUTH_RESULT_CODE.BAD_PASSWORD;
  //   }
  //   return AUTH_RESULT_CODE.SUCCESS;
  // }

  /** Adds a user to the database with the given password. */
  async regUser(nickname: string, password: string) {
    const nicknameExists = await UserDbEntity.findOne({nickname});
    if (nicknameExists) {
    }
    // const usernameExists = await UserDbEntity.findOne({ username: this.username });
  //   if (usernameExists) {
  //     return REG_RESULT_CODE.NON_UNIQ_EMAIL;
  //   }

  //   const email = rawEmail.toLowerCase();

  //   const emailExists = await UserDbEntity.findOne({ email });
  //   if (emailExists) {
  //     return REG_RESULT_CODE.NON_UNIQ_EMAIL;
  //   }

  //   const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);
  //   const user = new UserDbEntity();
  //   user.username = this.username;
  //   user.email = rawEmail;
  //   user.passwordHash = passwordHash;
  //   await user.save();
  //   return REG_RESULT_CODE.SUCCESS;
  // }
}
