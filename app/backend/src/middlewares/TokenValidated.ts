import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/statusCode';
import Messages from '../enums/messages';
import ConflitError from '../erros/ConflitError';
import generateToken from '../auth/jwt';

export default class TokenValidated {
  static validate(req: Request, _res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new ConflitError(
        StatusCodes.BAD_REQUEST,
        Messages.TOKEN_INVALID,
      );
    }
    generateToken.decode(token);
    next();
  }
}
