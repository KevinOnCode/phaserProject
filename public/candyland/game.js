let deckBuilder = require("./deck.js");
let boardBuilder = require("./board.js");
let playerBuilder = require("./player.js");

let board = new boardBuilder();

let numberOfGames = 10000;
let players = [];

let numberOfPlayers = 4;
for (let i = 0; i < numberOfPlayers; i++) {
    players.push(new playerBuilder());
    players[i].name = i;
}

let card, done;
for (let gameCounter = 0; gameCounter < numberOfGames; gameCounter++) {
    let deck = new deckBuilder();
    let cnt = 0;
    for (let player of players) {
        player.location = 0;
        player.stuck = false;
    }
    let done = false;
    //console.log("LET GAME " + (gameCounter + 1) + " BEGIN");
    while (!done) {
        cnt += 1;
        //console.log("Turn " + cnt);
        for (i = 0; i < players.length; i++) {
            if (!players[i].stuck) {
                card = deck.drawCard();
                //console.log(players[i].name + " has drawn " + card);
            } else {
                //console.log(players[i].name + " is stuck");
            }
            move = board.getMoveValue(players[i], card);
            //console.log("player moves " + move + " spaces.");
            players[i].movePlayer(move);
            if (players[i].location < 134) {
                //console.log("player is now at space " + players[i].location + "\n");
            } else {
                //console.log(players[i].name + " has won the game!!!\n");
                players[i].playerWin();
                done = true;
                break;
            }
        }
    }
}
for (let player of players) {
    console.log(player.name + " has won " + player.playerWins + " games");
}
console.log("end");