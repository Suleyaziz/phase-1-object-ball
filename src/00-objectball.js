function gameObject() {
  return {
    home: {
        team:"Brooklyn Nets"  ,
        colors:  "Black, White" ,
        players: {
            "Alan Anderson":{
                 "number": 0 ,
                 "shoe": 16,
                 "points": 22,
                "rebounds": 12,
                  "assists": 12,
                  "steals": 3,
                  "blocks": 1,
                  "slamDunks": 1,

            },
            "Reggie Evans": {
                "number": 30 ,
                 "shoe": 14,
                 "points": 12,
                "rebounds": 12,
                  "assists": 12,
                  "steals": 12,
                  "blocks": 12,
                  "slamDunks": 7,

            },

            "Brook Lopez": {
                "number": 11 ,
                 "shoe": 17,
                 "points": 17,
                "rebounds": 19,
                  "assists": 10,
                  "steals": 3,
                  "blocks": 1,
                  "slamDunks": 15,

            },
            "Mason Plumlee": {
                "number": 1 ,
                 "shoe": 19,
                 "points": 26,
                "rebounds": 12,
                  "assists": 6,
                  "steals": 3,
                  "blocks": 8,
                  "slamDunks": 5,

            },
            "Jason Terry": {
                "number": 31,
                 "shoe": 15,
                 "points": 19,
                "rebounds": 2,
                  "assists": 2,
                  "steals": 4,
                  "blocks": 11,
                  "slamDunks": 1,
},


        }
            

      

    }, 
    
    away:{
        team:"Charlotte Hornets"  ,
        colors:  "Turquoise, Purple" ,
        players: {
            "Jeff Adrien":{
                 "number": 4 ,
                 "shoe": 18,
                 "points": 10,
                "rebounds": 1,
                  "assists": 1,
                  "steals": 2,
                  "blocks": 7,
                  "slamDunks": 2,

            },
            "Bismak Biyombo": {
                "number": 0 ,
                 "shoe": 16,
                 "points": 12,
                "rebounds": 4,
                  "assists": 7,
                  "steals": 7,
                  "blocks": 15,
                  "slamDunks": 10,

            },

            "DeSagna Diop": {
                "number": 2,
                 "shoe": 14,
                 "points": 24,
                "rebounds": 12,
                  "assists": 12,
                  "steals": 4,
                  "blocks": 5,
                  "slamDunks": 5,

            },
            "Ben Gordon": {
                "number": 8,
                 "shoe": 15,
                 "points": 33,
                "rebounds": 3,
                  "assists": 2,
                  "steals": 1,
                  "blocks": 1,
                  "slamDunks": 0,

            },
            "Brendan Haywood": {
                "number": 33,
                 "shoe": 15,
                 "points": 6,
                "rebounds": 12,
                  "assists": 12,
                  "steals": 22,
                  "blocks": 5,
                  "slamDunks": 12,
},


      },

    }

    
};
}
function homeTeamName(){
    let object = gameObject();
    return object["home"]["teamName"];

};
function numPointsScored(playerName) {
    const game = gameObject(); 
    
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].points;
        }
    }
    
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].points;
        }
    }
    
    return `${playerName} not found on either team`;
}
function shoeSize(playerName) {
    const game = gameObject(); 
    
    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player].shoe;
        }
    }
    
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player].shoe;
        }
    }
    
    return `${playerName} not found on either team`;
}
function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.team === teamName) {
        return game.home.colors;
    } else if (game.away.team === teamName) {
        return game.away.colors;
    }
    
    return `${teamName} not found`;
}
    console.log(teamColors("Brooklyn Nets"));

    function teamNames(){
        const game = gameObject();
  return [game.home.team, game.away.team];
    };
    function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];
  
  if (game.home.team === teamName) {
    for (const player in game.home.players) {
      numbers.push(game.home.players[player].number);
    }
  } 
  else if (game.away.team === teamName) {
    for (const player in game.away.players) {
      numbers.push(game.away.players[player].number);
    }
  }
  
  return numbers;
}
    console.log(playerNumbers("Brooklyn Nets"))
    function playerStats(playerName){
        const { home, away } = gameObject();
  const allPlayers = { ...home.players, ...away.players };
  return allPlayers[playerName];
    };

console.log(playerStats("Alan Anderson"))
function bigShoeRebounds() {
  const { home, away } = gameObject();
  const allPlayers = { ...home.players, ...away.players };
  
  let playerWithBiggestShoe = null;
  let largestShoeSize = 0;
  
  for (const playerName in allPlayers) {
    const player = allPlayers[playerName];
    if (player.shoe > largestShoeSize) {
      largestShoeSize = player.shoe;
      playerWithBiggestShoe = player;
    }
  }
  
  return playerWithBiggestShoe.rebounds;
}
console.log(bigShoeRebounds())

