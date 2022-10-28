import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../enums/statusCode';
import loginSchema from '../schemas/login.schema';
import ConflitError from '../erros/ConflitError';

export default class LoginValidate {
  static login(req: Request, _res: Response, next: NextFunction) {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw new ConflitError(
        StatusCodes.BAD_REQUEST,
        error.message,
      );
    }
    next();
  }
}
