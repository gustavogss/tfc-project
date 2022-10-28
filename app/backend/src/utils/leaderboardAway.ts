interface ITeamData {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface ILeaderboardAwayData {
  teamName: string;
  teamAway: ITeamData[];
}

const sumTotalPoints = (acc: number, curr: ITeamData) => {
  if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 3;
  if (curr.awayTeamGoals < curr.homeTeamGoals) return acc;
  return acc + 1;
};

const countWins = (acc: number, curr: ITeamData) => {
  if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;
  return acc;
};

const countDraws = (acc: number, curr: ITeamData) => {
  if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
  return acc;
};

const countLosses = (acc: number, curr: ITeamData) => {
  if (curr.awayTeamGoals < curr.homeTeamGoals) return acc + 1;
  return acc;
};

const countGoals = (acc: number, curr: ITeamData) => acc + curr.awayTeamGoals;

const countGoalsOwn = (acc: number, curr: ITeamData) => acc + curr.homeTeamGoals;

const countGoalsBalance = (teamAway: ITeamData[]) => {
  const goals = teamAway.reduce(countGoals, 0);
  const goalsOwn = teamAway.reduce(countGoalsOwn, 0);
  return goals - goalsOwn;
};

const calculateEfficiency = (teamAway: ITeamData[]) => {
  const totalPoints = teamAway.reduce(sumTotalPoints, 0);
  const totalGames = teamAway.length;
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return Number(efficiency.toFixed(2));
};

const formatLeaderboardAway = (data: ILeaderboardAwayData[]) => {
  const result = data.map((team) => ({
    name: team.teamName,
    totalPoints: team.teamAway.reduce(sumTotalPoints, 0),
    totalGames: team.teamAway.length,
    totalVictories: team.teamAway.reduce(countWins, 0),
    totalDraws: team.teamAway.reduce(countDraws, 0),
    totalLosses: team.teamAway.reduce(countLosses, 0),
    goalsFavor: team.teamAway.reduce(countGoals, 0),
    goalsOwn: team.teamAway.reduce(countGoalsOwn, 0),
    goalsBalance: countGoalsBalance(team.teamAway),
    efficiency: calculateEfficiency(team.teamAway),
  }));

  result.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);

  return result;
};

export default formatLeaderboardAway;
