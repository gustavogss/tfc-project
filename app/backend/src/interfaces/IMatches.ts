import Match from '../database/models/MatcheModel';

export default interface IMatches extends Match {
  teamHome: { teamName: string };
  teamAway: { teamName: string };
}
