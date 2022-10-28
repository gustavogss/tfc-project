  export const matchesMock = [{
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },    
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    }];
  
    export const matchMockSent = {
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2
    }
    
    export const invalidMockSent = {
      "homeTeam": 16,
      "awayTeam": 16,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2
    }
    
    export const matchMockReturn = {
      "id": 49,
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    }

    export const  matchCreateMock = {
      "id": 40, 
      "teamName": "Botafogo-PB" 
    }

    export const matchUpdatedMock = {
      id: 1, 
      homeTeam: 1, 
      awayTeam: 2, 
      homeTeamGoals: 1, 
      awayTeamGoals: 2, 
      inProgress: true
   }