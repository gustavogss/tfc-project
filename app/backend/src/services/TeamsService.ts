import StatusCodes from '../enums/statusCode';
import ConflitError from '../erros/ConflitError';
import Team from '../database/models/TeamModel';
import Messages from '../enums/messages';

export default class TeamsService {
  static async getAll() {
    const teams = await Team.findAll();
    return teams;
  }

  static async getById(id: number) {
    const team = await Team.findOne({ where: { id } });

    if (!team) {
      throw new ConflitError(
        StatusCodes.NOT_FOUND,
        Messages.TEAM_NOT_FOUND,
      );
    }
    return team;
  }
}
