var gameList = {
    games: ['Contra', 'Mario', 'NFS'],
    displayGames: function () {
        console.log("Games List:", this.games);
    },
    addGames: function (game) {
        this.games.push(game);
        this.displayGames();
    },
    changeGame: function (position, newName) {
        this.games[position] = newName;
        this.displayGames();
    },
    deleteGame: function (position) {
        this.games.splice(position, 1);
        this.displayGames();
    }
}

gameList.displayGames();
gameList.addGames('Spiderman');
gameList.changeGame(2, 'NFS Most Wanted');
gameList.deleteGame(gameList.games.length - 1);