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
            console.log("No games found. Please add a game first.")
        } else {
            this.games[position].gameTitle = gameTitle;
            this.displayGames();
        }
    },
    deleteGame: function (position) {
        if (this.games[position] === undefined) {
            console.log("No games found. Please add a game first.")
        } else {
            this.games.splice(position, 1);
        }

        this.displayGames();
    },
    toggleSold: function (position) {
        if (this.games[position] === undefined) {
            console.log("No games found. Please add a game first.")
        } else {
            var sold = this.games[position]
            sold.gameSold = !sold.gameSold;
        }

        this.displayGames();
    },
    toggleAll: function () {
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

gameList.displayGames();
gameList.addGame('Mario');
gameList.addGame('GTA: San Andreas');
gameList.addGame('Counter Strike: Global Offensive');
gameList.addGame('Angry Birds');
gameList.changeGame(0, 'NFS');
gameList.toggleSold(0);
gameList.toggleAll();