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

gameList.addGame('Mario');
gameList.addGame('GTA: San Andreas');
gameList.addGame('Counter Strike: Global Offensive');
gameList.addGame('Angry Birds');

var handlers = {
    displayGames: function () {
        var displayGamesBtn = document.getElementById('display-games-btn');
        gameList.displayGames();
    },
    addGame: function () {
        var addGameInput = document.getElementById('add-game-input');
        gameList.addGame(addGameInput.value);
        addGameInput.value = '';
    },
    changeGame: function () {
        var changeGamePosition = document.getElementById('change-game-position-input');
        var changeGameTitle = document.getElementById('change-game-title-input');
        gameList.changeGame(changeGamePosition.value, changeGameTitle.value);
        changeGamePosition.value = '';
        changeGameTitle.value = '';
    },
    deleteGame: function () {
        var deleteGameInput = document.getElementById('delete-game-position-input');
        if (deleteGameInput.value.length > 0) {
            gameList.deleteGame(deleteGameInput.value);
            deleteGameInput.value = '';
        } else {
            console.log('Please enter a value');
        }
    },
    toggleSold: function () {
        var toggleSoldGamePosition = document.getElementById('toggle-sold-position-input');
        var toggleSoldGameBtn = document.getElementById('toggle-sold-game-btn');
        gameList.toggleSold(toggleSoldGamePosition.value);
        toggleSoldGamePosition.value = '';
    },
    toggleAllGames: function () {
        var toggleAllSoldGamesBtn = document.getElementById('toggle-all-sold-games-btn');
        gameList.toggleAllGames();
    }
}