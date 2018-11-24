var gameList = {
    games: [],
    addGame: function (gameTitle) {
        if (this.games.gameTitle !== gameTitle || gameTitle) {
            if (gameTitle.length > 0) {
                this.games.push({
                    gameTitle: gameTitle,
                    gameSold: false
                })
            } else if (gameTitle.length === 0) {
                console.log('Add Game: Please enter a name.');
            }
        }
    },
    changeGame: function (position, gameTitle) {
        if (position && gameTitle) {
            this.games[position].gameTitle = gameTitle;
        }
        if (!gameTitle && !position) {
            console.log('Change Game: Please enter a name and number');
        } else if (!gameTitle) {
            console.log('Change Game: Please enter a name');
        } else if (!position) {
            console.log('Change Game: Please enter a number');
        }
    },
    deleteGame: function (position) {
        if (this.games[position] === undefined) {
            console.log("Delete Game: This game does not exist.")
        } else {
            this.games.splice(position, 1);
        }
    },
    deleteAllGames: function () {
        this.games = [];
    },
    toggleSold: function (position) {
        if (this.games[position] === undefined) {
            console.log("Toggle Sold: This game does not exist.")
        } else {
            var sold = this.games[position]
            sold.gameSold = !sold.gameSold;
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
    }
}

gameList.addGame('Mario');
gameList.addGame('GTA: San Andreas');
gameList.addGame('Counter Strike: Global Offensive');
gameList.addGame('Angry Birds');

var handlers = {
    addGame: function () {
        var addGameInput = document.getElementById('add-game-input');
        gameList.addGame(addGameInput.value);
        addGameInput.value = '';
        view.displayGames();
        view.disableButtons();
    },
    changeGame: function () {
        var changeGamePosition = document.getElementById('change-game-position-input');
        var changeGameTitle = document.getElementById('change-game-title-input');
        gameList.changeGame(changeGamePosition.value, changeGameTitle.value);
        changeGamePosition.value = '';
        changeGameTitle.value = '';
        view.displayGames();
    },
    deleteGame: function () {
        var deleteGameInput = document.getElementById('delete-game-position-input');
        if (!deleteGameInput.value) {
            deleteGameInput.value = 0;
        }
        if (deleteGameInput.value.length > 0) {
            gameList.deleteGame(deleteGameInput.value);
            deleteGameInput.value = '';
        } else {
            console.log('Please enter a value');
        }
        view.displayGames();
        view.disableButtons();
    },
    deleteAllGames: function () {
        gameList.deleteAllGames();
        view.displayGames();
        view.disableButtons();
    },
    toggleSold: function () {
        var toggleSoldGamePosition = document.getElementById('toggle-sold-position-input');
        var toggleSoldGameBtn = document.getElementById('toggle-sold-game-btn');
        gameList.toggleSold(toggleSoldGamePosition.value);
        toggleSoldGamePosition.value = '';
        view.displayGames();
    },
    toggleAllGames: function () {
        var toggleAllSoldGamesBtn = document.getElementById('toggle-all-sold-games-btn');
        gameList.toggleAllGames();
        view.displayGames();
    }
}

var view = {
    displayGames: function () {
        var gamesUl = document.getElementById('games-list');
        gamesUl.innerHTML = '';
        gameList.games.forEach(function (game) {
            var gamesLi = document.createElement('li');
            if (game.gameSold) {
                gamesLi.textContent = "(x) " + game.gameTitle;
            } else {
                gamesLi.textContent = "( ) " + game.gameTitle;
            }
            gamesUl.appendChild(gamesLi);
        });
    },
    disableButtons: function () {
        var allBtns = Array.from(document.querySelectorAll('button'));
        var allBtnsExceptAddGame = allBtns.filter(function (btn) {
            return btn.textContent.indexOf("Add Game") === -1;
        });
        allBtnsExceptAddGame.forEach(function (btn) {
            if (gameList.games.length === 0) {
                btn.disabled = true;
                this.emptyListText();
            } else {
                btn.disabled = false;
            }
        }, this);
    },
    emptyListText: function () {
        var gamesUl = document.getElementById('games-list');
        gamesUl.innerHTML = 'Game Store is empty. Please add a game first';
    }
}

view.disableButtons();
view.displayGames();