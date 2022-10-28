import { Request, Response } from 'express';
import Messages from '../enums/messages';
import StatusCode from '../enums/statusCode';
import MatchesService from '../services/MatchesServices';

export default class MatchesController {
  static async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress !== null && inProgress === 'false') {
      const matches = await MatchesService.getAllFinished();
      return res.status(StatusCode.OK).json(matches);
    }

    if (inProgress) {
      const matches = await MatchesService.getAllInProgress();
      return res.status(StatusCode.OK).json(matches);
    }
    const matches = await MatchesService.getAll();
    return res.status(StatusCode.OK).json(matches);
  }

  static async create(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const match = await MatchesService.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals,
    });
    return res.status(StatusCode.CREATE).json(match);
  }

  static async finish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finish(id);
    return res.status(StatusCode.OK).json({ message: Messages.FINISH_MATCH });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.update(id, { homeTeamGoals, awayTeamGoals });
    return res.status(StatusCode.OK).json({ message: Messages.UPDATED_MATCH });
  }
}
