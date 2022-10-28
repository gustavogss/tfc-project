import * as bcryptjs from 'bcryptjs';
import StatusCodes from '../enums/statusCode';
import Messages from '../enums/messages';
import ConflitError from './ConflitError';

export default class PasswordError {
  static encrypt(password: string) {
    const salt = bcryptjs.genSaltSync(10);
    const encryptedPassword = bcryptjs.hashSync(password, salt);
    return encryptedPassword;
  }

  static check(password: string, passwordDb: string): void {
    const match = bcryptjs
      .compareSync(password, passwordDb) || password === passwordDb;

    if (!match) {
      throw new ConflitError(
        StatusCodes.UNAUTHORIZED,
        Messages.EMAIL_OR_PASSWORD_INVALID,
      );
    }
  }
}
