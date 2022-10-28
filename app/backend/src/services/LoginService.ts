import StatusCodes from '../enums/statusCode';
import Messages from '../enums/messages';
import ILogin from '../interfaces/ILogin';
import ConflitError from '../erros/ConflitError';
import User from '../database/models/UserModel';
import PasswordHandler from '../erros/PasswordError';
import jwt from '../auth/jwt';

export default class UserService {
  static async findOne(email: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new ConflitError(
        StatusCodes.UNAUTHORIZED,
        Messages.EMAIL_OR_PASSWORD_INVALID,
      );
    }
    return user;
  }

  static async login({ email, password }: ILogin): Promise<string> {
    const user = await UserService.findOne(email);
    PasswordHandler.check(password, user.password);
    const token = jwt.sign({ email, password });
    return token;
  }

  static async validate(token: string | undefined) {
    if (!token) {
      throw new ConflitError(
        StatusCodes.UNAUTHORIZED,
        Messages.TOKEN_INVALID,
      );
    }

    const { email } = jwt.decode(token);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new ConflitError(
        StatusCodes.NOT_FOUND,
        Messages.USER_NOT_FOUND,
      );
    }
    return user.role;
  }
}
