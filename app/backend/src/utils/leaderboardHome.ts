interface ITeamData {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface ILeaderboardData {
  teamName: string;
  teamHome: ITeamData[];
}

const sumTotalPoints = (acc: number, curr: ITeamData) => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
  if (curr.homeTeamGoals < curr.awayTeamGoals) return acc;
  return acc + 1;
};

const countWins = (acc: number, curr: ITeamData) => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
  return acc;
};

const countDraws = (acc: number, curr: ITeamData) => {
  if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
  return acc;
};

const countLosses = (acc: number, curr: ITeamData) => {
  if (curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
  return acc;
};

const countGoals = (acc: number, curr: ITeamData) => acc + curr.homeTeamGoals;

const countGoalsOwn = (acc: number, curr: ITeamData) => acc + curr.awayTeamGoals;

const countGoalsBalance = (teamHome: ITeamData[]) => {
  const goals = teamHome.reduce(countGoals, 0);
  const goalsOwn = teamHome.reduce(countGoalsOwn, 0);
  return goals - goalsOwn;
};

const calculateEfficiency = (teamHome: ITeamData[]) => {
  const totalPoints = teamHome.reduce(sumTotalPoints, 0);
  const totalGames = teamHome.length;
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return Number(efficiency.toFixed(2));
};

const formatLeaderboardHome = (data: ILeaderboardData[]) => {
  const result = data.map((team) => ({
    name: team.teamName,
    totalPoints: team.teamHome.reduce(sumTotalPoints, 0),
    totalGames: team.teamHome.length,
    totalVictories: team.teamHome.reduce(countWins, 0),
    totalDraws: team.teamHome.reduce(countDraws, 0),
    totalLosses: team.teamHome.reduce(countLosses, 0),
    goalsFavor: team.teamHome.reduce(countGoals, 0),
    goalsOwn: team.teamHome.reduce(countGoalsOwn, 0),
    goalsBalance: countGoalsBalance(team.teamHome),
    efficiency: calculateEfficiency(team.teamHome),
  }));

  result.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);

  return result;
};

export default formatLeaderboardHome;
