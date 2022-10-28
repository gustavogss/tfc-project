import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import StatusCodes from '../enums/statusCode';
import Messages from '../enums/messages';
import ILogin from '../interfaces/ILogin';
import CustomError from '../erros/ConflitError';

export default class generateToken {
  static sign(payload: ILogin): string {
    return jwt.sign(payload, process.env.JWT_SECRET || 'secret');
  }

  static decode(token: string) {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      return data as ILogin;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          StatusCodes.UNAUTHORIZED,
          Messages.TOKEN_MUST_VALIDATED,
        );
      }
    }
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    return data as ILogin;
  }
}
