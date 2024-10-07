/*
Description
You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, 
a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following 
criteria to arrange the teams:

Points
Scoring differential (the difference between goals scored and those conceded) Goals scored
First you sort the teams by their points. 
If two or more teams reached the same number of points, the second criteria comes into play and so on. 

Finally, if all criteria are the same, a tiebreaker rule 'head-to-head' decides the order. This means that you arrange the tied 
teams by considering only the games between these teams. Again you use the criteria 'points', 'scoring differential', 
'goals scored' and the tiebreaker rule 'head-to-head' on these games. This process could repeat as long as the tiebracker rule 
finds any difference. Otherwise the tied teams share the place.

Input
number: Number of teams in your league.
games: An array of arrays. Each item represents a played game with an array of 
four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
Output
positions: An array of positions. The i-th item should be the position of the i-th team in your league.
Example
number = 6
games = [[0, 5, 1, 1],   // Team 0 - Team 5 => 1:1
         [1, 4, 3, 1],   // Team 1 - Team 4 => 3:1
         [2, 3, 2, 2],   // Team 2 - Team 3 => 2:2
         [1, 5, 1, 2],   // Team 1 - Team 5 => 1:2
         [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
         [3, 4, 3, 2],   // Team 3 - Team 4 => 3:2
         [2, 5, 3, 1],   // Team 2 - Team 5 => 3:1
         [3, 1, 0, 1],   // Team 3 - Team 1 => 0:1
         [4, 0, 2, 1],   // Team 4 - Team 0 => 2:1
         [3, 5, 0, 0],   // Team 3 - Team 5 => 0:0
         [4, 2, 0, 1],   // Team 4 - Team 2 => 0:1
         [0, 1, 1, 2],   // Team 0 - Team 1 => 1:2
         [4, 5, 2, 0],   // Team 4 - Team 5 => 2:0
         [0, 3, 3, 2],   // Team 0 - Team 3 => 3:2
         [1, 2, 0, 0]]   // Team 1   - Team 2 => 0:0
         
*/

const sportsLeague = (numberOfTeams, arrGames) => {
    /* 
        First I need to create the team object acording with the numberOfTeams
    */
   const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
        teams.push({
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalsDifference: 0,
        });
    }
    // console.log(teams)

    /* Get data from the array games to update the tems array object*/
    for (const [teamA, teamB, teamAGoals, teamBGoals] of arrGames) {
        // console.log(`Team ${teamA} played with Team ${teamB} teamA scored ${teamAGoals} and teamB scored ${teamBGoals}`)
        if (teamAGoals > teamBGoals) {
            teams[teamA].points += 2;
        } else if (teamBGoals > teamAGoals) {
            teams[teamB].points += 2;
        } else {
            teams[teamA].points += 1;
            teams[teamB].points += 1;
        }
    
        teams[teamA].goalsFor += teamAGoals;
        teams[teamA].goalsAgainst += teamBGoals;

        teams[teamB].goalsFor = teamBGoals;
        teams[[teamB]].goalsAgainst = teamAGoals;

        teams[teamA].goalsDifference = teams[teamA].goalsFor - teams[teamA].goalsAgainst
        teams[teamB].goalsDifference = teams[teamB].goalsFor - teams[teamB].goalsAgainst

    }

    teams.sort((teamA, teamB) => {
        if (teamB.points !== teamA.points) return teamB.points - teamA.points;
        if (teamB.goalsDifference !== teamA.goalsDifference) return teamB.goalsDifference - teamA.goalsDifference;
        if (teamB.goalsFor !== teamA.goalsFor) return teamB.goalsFor - teamA.goalsFor;
    });
    console.log(teams)
    

    /* 
      Order Criteria 
      1 - Points (goals scored - goals conceded)
      2 - Scoring differential
      3 - Goals scored
      4  - Tiebreaker rule 'head-to-head' on these games.
    */
    // Discover how much point each tem has  
    
    // First you sort the teams by their points. 
  }
  
const games = 
    [
        [0, 5, 1, 1],   // Team 0 - Team 5 => 1:1
        [1, 4, 3, 1],   // Team 1 - Team 4 => 3:1
        [2, 3, 2, 2],   // Team 2 - Team 3 => 2:2
        [1, 5, 1, 2],   // Team 1 - Team 5 => 1:2
        [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
        [3, 4, 3, 2],   // Team 3 - Team 4 => 3:2
        [2, 5, 3, 1],   // Team 2 - Team 5 => 3:1
        [3, 1, 0, 1],   // Team 3 - Team 1 => 0:1
        [4, 0, 2, 1],   // Team 4 - Team 0 => 2:1
        [3, 5, 0, 0],   // Team 3 - Team 5 => 0:0
        [4, 2, 0, 1],   // Team 4 - Team 2 => 0:1
        [0, 1, 1, 2],   // Team 0 - Team 1 => 1:2
        [4, 5, 2, 0],   // Team 4 - Team 5 => 2:0
        [0, 3, 3, 2],   // Team 0 - Team 3 => 3:2
        [1, 2, 0, 0]
    ];

sportsLeague(6, games);
  
  
  
  
  
  
  
  
  
  
  