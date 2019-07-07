const express = require('express');

let teamLineup = require('./assets/fixtures/team.json');

var app = express();
var cors = require('cors')
app.use(cors())

let generatedTeam = false;

createRandomStats = () => {
  return{
    gameId: parseInt(Math.random() * (4 - 1) + 1),
    home: {
      score: parseInt(Math.random() * (4)),
      shots: parseInt(Math.random() * (20 - 4) + 4),
      yellowCards: parseInt(Math.random() * (5)),
      redCards: parseInt(Math.random() * (2)),
      corners: parseInt(Math.random() * (14 - 4) + 4),
      fouls: parseInt(Math.random() * (24 - 4) + 4),
      offsides: parseInt(Math.random() * (7 - 2) + 2),
      possession: parseInt(Math.random() * (50 - 35) + 35),
      passAccuracy: parseInt(Math.random() * (95 - 70) + 70),
    },
    away: {
      score: parseInt(Math.random() * (4)),
      shots: parseInt(Math.random() * (20 - 4) + 4),
      yellowCards: parseInt(Math.random() * (5)),
      redCards: parseInt(Math.random() * (2)),
      corners: parseInt(Math.random() * (14 - 4) + 4),
      fouls: parseInt(Math.random() * (24 - 4) + 4),
      offsides: parseInt(Math.random() * (7 - 2) + 2),
      possession: parseInt(Math.random() * (50 - 35) + 35),
      passAccuracy: parseInt(Math.random() * (95 - 70) + 70),
    }

  }
}

createRandomGames = () => {
  return [
    {
      leagueName: 'League 1',
      games: [
        {
          gameId: 11,
          homeTeam: 'Team 1A home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 1A away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        },
        {
          gameId: 12,
          homeTeam: 'Team 1B home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 1B away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        },
        {
          gameId: 13,
          homeTeam: 'Team 1C home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 1C away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        }
      ]
    },
    {
      leagueName: 'League 2',
      games: [
        {
          gameId: 21,
          homeTeam: 'Team 2A home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 2A away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        },
        {
          gameId: 22,
          homeTeam: 'Team 2B home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 2B away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        },
        {
          gameId: 23,
          homeTeam: 'Team 2C home',
          homeTeamScore:  parseInt(Math.random() * (4)),
          awayTeam: 'Team 2C away',
          awayTeamScore:  parseInt(Math.random() * (4)),
          m:  parseInt(Math.random() * (95 - 70) + 70) + '\''
        }
      ]
    },

  ]
}

app.get('/', (req, res) => {
  res.send('Hello Express')
});

app.get('/home', (req, res) => {

  res.send(teamLineup);
});

app.get('/away', (req, res) => {
  res.send(teamLineup);
})

app.get('/stats', (req, res) => {
  res.send(createRandomStats());
})

app.get('/live', (req, res) => {
  res.send(createRandomGames());
})

app.get('/getGameData', (req, res) => {
  res.send({
    stats: createRandomStats(),
    teams: {
      homeTeam: teamLineup,
      awayTeam: teamLineup
    },
  });
})

app.listen(process.env.PORT || 8080);