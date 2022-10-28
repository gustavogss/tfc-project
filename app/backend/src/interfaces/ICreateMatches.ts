export interface IMatchGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default interface ICreateMatches extends IMatchGoals {
  homeTeam: string;
  awayTeam: string;
}
