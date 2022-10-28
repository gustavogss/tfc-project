import StatusCode from '../enums/statusCode';
import ConflitError from '../erros/ConflitError';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatcheModel';
import ICreateMatch, { IMatchGoals } from '../interfaces/ICreateMatches';
import Messages from '../enums/messages';

export default class MatchesService {
  static async getAll() {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  static async getAllInProgress() {
    const matches = await Match.findAll({
      where: { inProgress: true },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  static async getAllFinished() {
    const matches = await Match.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  static async verifyIfTeamExists(teamId: string) {
    const team = await Team.findByPk(teamId);
    if (!team) {
      throw new ConflitError(
        StatusCode.NOT_FOUND,
        Messages.TEAM_NO_SUCH_ID,
      );
    }
  }

  static async create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: ICreateMatch) {
    if (homeTeam === awayTeam) {
      throw new ConflitError(
        StatusCode.UNPROCESSABLE_ENTITY,
        Messages.TWO_MATCH_EQUAL,
      );
    }

    await Promise.all([this.verifyIfTeamExists(homeTeam), this.verifyIfTeamExists(awayTeam)]);
    const match = await Match.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    });
    return match;
  }

  static async finish(id: string) {
    const match = await Match.findByPk(id);
    if (!match) {
      throw new ConflitError(
        StatusCode.NOT_FOUND,
        Messages.MATCH_NOT_FOUND,
      );
    }
    await Match.update({ inProgress: false }, { where: { id } });
  }

  static async update(id: string, { homeTeamGoals, awayTeamGoals }: IMatchGoals) {
    const match = await Match.findByPk(id);
    if (!match) {
      throw new ConflitError(
        StatusCode.NOT_FOUND,
        Messages.MATCH_NOT_FOUND,
      );
    }
    await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
