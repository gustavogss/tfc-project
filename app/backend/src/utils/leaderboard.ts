interface IData {
  home: ITeamData[];
  away: ITeamData[];
}

interface ITeamData {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

const calculateEfficiency = (home: ITeamData, away: ITeamData) => {
  const totalPoints = home.totalPoints + away.totalPoints;
  const totalGames = home.totalGames + away.totalGames;
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return Number(efficiency.toFixed(2));
};

const joinLeaderboards = ({ home, away }: IData) => {
  const result = home.map((team: ITeamData) => {
    const findAwayTeam = away
      .find((awayTeam: ITeamData) => awayTeam.name === team.name) as ITeamData;
    return {
      name: team.name,
      totalPoints: team.totalPoints + findAwayTeam.totalPoints,
      totalGames: team.totalGames + findAwayTeam.totalGames,
      totalVictories: team.totalVictories + findAwayTeam.totalVictories,
      totalDraws: team.totalDraws + findAwayTeam.totalDraws,
      totalLosses: team.totalLosses + findAwayTeam.totalLosses,
      goalsFavor: team.goalsFavor + findAwayTeam.goalsFavor,
      goalsOwn: team.goalsOwn + findAwayTeam.goalsOwn,
      goalsBalance: team.goalsBalance + findAwayTeam.goalsBalance,
      efficiency: calculateEfficiency(team, findAwayTeam),
    };
  });

  return result;
};

const joinAndSortLeaderboards = ({ home, away }: IData) => {
  const result = joinLeaderboards({ home, away });
  return result.sort((a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);
};

export default joinAndSortLeaderboards;
