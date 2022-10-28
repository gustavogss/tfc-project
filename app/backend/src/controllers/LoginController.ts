import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import LoginService from '../services/LoginService';

export default class UserController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await LoginService.login({ email, password });
    return res.status(StatusCode.OK).json({ token });
  }

  static async validate(req: Request, res: Response) {
    const { authorization: token } = req.headers;
    const role = await LoginService.validate(token);
    return res.status(StatusCode.OK).json({ role });
  }
}
