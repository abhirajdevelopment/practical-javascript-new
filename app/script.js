var gameList = {
    games: [],
    displayGames: function () {
        if (this.games.length === 0) {
            console.log("You have no games in your collection.");
        } else {
            console.log("Games List:");
            this.games.forEach(function (game) {
                if (game.gameSold) {
                    console.log("(x)", game.gameTitle);
                } else {
                    console.log("( )", game.gameTitle);
                }
            });
        }
        console.log("<----- End ----->");
    },
    addGame: function (gameTitle) {
        this.games.push({
            gameTitle: gameTitle,
            gameSold: false
        });

        this.displayGames();
    },
    changeGame: function (position, gameTitle) {
        if (this.games[position] === undefined) {
            console.log("This game does not exist.")
        } else {
            this.games[position].gameTitle = gameTitle;

            this.displayGames();
        }
    },
    deleteGame: function (position) {
        if (this.games[position] === undefined) {
            console.log("This game does not exist.")
        } else {
            this.games.splice(position, 1);
            this.displayGames();
        }
    },
    toggleSold: function (position) {
        if (this.games[position] === undefined) {
            console.log("This game does not exist.")
        } else {
            var sold = this.games[position]
            sold.gameSold = !sold.gameSold;
            this.displayGames();
        }
    },
    toggleAllGames: function () {
        var totalGames = this.games.length;
        var soldGames = 0;

        this.games.forEach(function (game) {
            if (game.gameSold === true) {
                soldGames++;
            }
        });

        this.games.forEach(function (game) {
            if (soldGames === totalGames) {
                game.gameSold = false;
            } else {
                game.gameSold = true;
            }
        });

        this.displayGames();
    }
}

// gameList.displayGames();
gameList.addGame('Mario');
gameList.addGame('GTA: San Andreas');
gameList.addGame('Counter Strike: Global Offensive');
gameList.addGame('Angry Birds');
gameList.changeGame(0, 'NFS');
// gameList.toggleSold(0);
// gameList.toggleAllGames();

var actions = document.getElementById('actions');

var gamesList = document.getElementById('games-list');

var displayGamesBtn = document.getElementById('display-games-btn');

var addGameInput = document.getElementById('add-game-input');
var addGameBtn = document.getElementById('add-game-btn');

var changeGamePosition = document.getElementById('change-game-position-input');
var changeGameTitle = document.getElementById('change-game-title-input');
var changeGameBtn = document.getElementById('change-game-btn');

var toggleSoldGamePosition = document.getElementById('toggle-sold-position-input');
var toggleSoldGameBtn = document.getElementById('toggle-sold-game-btn');

var toggleAllSoldGamesBtn = document.getElementById('toggle-all-sold-games-btn');

var deleteGameInput = document.getElementById('delete-game-position-input');
var deleteGameBtn = document.getElementById('delete-game-btn');

actions.addEventListener('click', function(e) {
    if(e.target.id === displayGamesBtn.id) {
        gameList.displayGames();
    }else if(e.target.id === addGameBtn.id) {
        gameList.addGame(addGameInput.value);
        addGameInput.value = '';
    } else if(e.target.id === changeGameBtn.id) {
        gameList.changeGame(changeGamePosition.value, changeGameTitle.value);
        changeGamePosition.value = '';
        changeGameTitle.value = '';
    } else if(e.target.id === toggleSoldGameBtn.id) {
        gameList.toggleSold(toggleSoldGamePosition.value);
        toggleSoldGamePosition.value = '';
    } else if(e.target.id === toggleAllSoldGamesBtn.id) {
        gameList.toggleAllGames();
    } else if(e.target.id === deleteGameBtn.id) {
        if(deleteGameInput.value.length > 0) {
            gameList.deleteGame(deleteGameInput.value);
            deleteGameInput.value = '';
        } else {
            console.log('Please enter a value');
        }
    }
});