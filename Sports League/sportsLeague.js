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

function computeRanks(totalNumberOfTeams, games) {
    const scores = Array(totalNumberOfTeams)
      .fill(0)
      .map((_, i) => ({ team: i, points: 0, scoreDiff: 0, goalsScored: 0 }));

  
    games.forEach(([teamA, teamB, goalA, goalB]) => {
      scores[teamA].scoreDiff += goalA - goalB;
      scores[teamA].goalsScored += goalA;
  
      scores[teamB].scoreDiff += goalB - goalA;
      scores[teamB].goalsScored += goalB;
  
      if (goalA > goalB) {
        scores[teamA].points += 2;
      } else if (goalA === goalB) {
        scores[teamA].points++;
        scores[teamB].points++;
      } else {
        scores[teamB].points += 2;
      }
    });
  
    scores.sort(compareTeam);
  
    const tiedTeams = new Map();
    tiedTeams.set(scores[0].team, scores[0]);
    let rank = 1;
    for (let i = 1; i < scores.length; i++) {
      if (compareTeam(scores[i - 1], scores[i]) !== 0) {
        if (tiedTeams.size === 1) {
          scores[i - 1].rank = rank;
        } else {
          handleTies(games, tiedTeams, rank);
        }
        rank += tiedTeams.size;
        tiedTeams.clear();
      }
      tiedTeams.set(scores[i].team, scores[i]);
    }
    
    function handleTies(games, tiedTeams, rank) {
      const subGames = games
        .filter(([teamA, teamB]) => tiedTeams.has(teamA) && tiedTeams.has(teamB))
        .map(([teamA, teamB, goalA, goalB]) => {
          const teamAPosition = Array.from(tiedTeams.keys()).findIndex(
            (x) => x === teamA
          );
          const teamBPosition = Array.from(tiedTeams.keys()).findIndex(
            (x) => x === teamB
          );
          return [teamAPosition, teamBPosition, goalA, goalB];
        });
      const nextRanks = computeRanks(tiedTeams.size, subGames);
      Array.from(tiedTeams.values()).forEach((score, i) => {
        score.rank = rank + nextRanks[i] - 1;
      });
    }
  
    if (tiedTeams.size === 1 || tiedTeams.size === totalNumberOfTeams) {
      Array.from(tiedTeams.values()).forEach((score) => {
        score.rank = rank;
      });
    } else {
      handleTies(games, tiedTeams, rank);
    }
  
    return scores
      .sort((scoreA, scoreB) => scoreA.team - scoreB.team)
      .map((score) => score.rank);
}
  
function compareTeam(a, b) {
if (a.points !== b.points) {
    return b.points - a.points;
}
if (a.scoreDiff !== b.scoreDiff) {
    return b.scoreDiff - a.scoreDiff;
}
return b.goalsScored - a.goalsScored;
}

const games = [[ 0, 5, 1, 1 ],
                 [ 1, 4, 3, 1 ],
                 [ 2, 3, 2, 2 ],
                 [ 1, 5, 1, 2 ],
                 [ 2, 0, 1, 1 ],
                 [ 3, 4, 3, 2 ],
                 [ 2, 5, 3, 1 ],
                 [ 3, 1, 0, 1 ],
                 [ 4, 0, 2, 1 ],
                 [ 3, 5, 0, 0 ],
                 [ 4, 2, 0, 1 ],
                 [ 0, 1, 1, 2 ],
                 [ 4, 5, 2, 0 ],
                 [ 0, 3, 3, 2 ],
                 [ 1, 2, 0, 0 ]];
console.log(computeRanks(6, games));
