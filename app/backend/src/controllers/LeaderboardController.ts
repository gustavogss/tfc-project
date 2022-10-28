import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import LeaderboardService from '../services/LeaderBoardService';

export default class LeaderboardController {
  static async getAllHome(req: Request, res: Response) {
    const result = await LeaderboardService.getAllHome();
    return res.status(StatusCode.OK).json(result);
  }

  static async getAllAway(req: Request, res: Response) {
    const result = await LeaderboardService.getAllAway();
    return res.status(StatusCode.OK).json(result);
  }

  static async getAll(req: Request, res: Response) {
    const result = await LeaderboardService.getAll();
    return res.status(StatusCode.OK).json(result);
  }
}
