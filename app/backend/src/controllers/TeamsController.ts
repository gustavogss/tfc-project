import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  static async getAll(_req: Request, res: Response) {
    const teams = await TeamsService.getAll();
    return res.status(StatusCode.OK).json(teams);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamsService.getById(Number(id));
    return res.status(StatusCode.OK).json(team);
  }
}
