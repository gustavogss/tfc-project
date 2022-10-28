import formatLeaderboardAway, { ILeaderboardAwayData } from '../utils/leaderboardAway';
import formatLeaderboardHome, { ILeaderboardData } from '../utils/leaderboardHome';
import Match from '../database/models/MatcheModel';
import Team from '../database/models/TeamModel';
import sortLeaderboards from '../utils/leaderboard';

export default class LeaderboardService {
  static async getAllHome() {
    const result = await Team.findAll({
      attributes: ['teamName'],
      include: [
        {
          model: Match,
          as: 'teamHome',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false },
        },
      ],
    });

    const formatedResult = formatLeaderboardHome(result as unknown as ILeaderboardData[]);
    return formatedResult;
  }

  static async getAllAway() {
    const result = await Team.findAll({
      attributes: ['teamName'],
      include: [
        {
          model: Match,
          as: 'teamAway',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false },
        },
      ],
    });

    const formatedResult = formatLeaderboardAway(result as unknown as ILeaderboardAwayData[]);
    return formatedResult;
  }

  static async getAll() {
    const home = await this.getAllHome();
    const away = await this.getAllAway();
    const result = sortLeaderboards({ home, away });
    return result;
  }
}
