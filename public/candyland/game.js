let deckBuilder = require("./deck.js");
let boardBuilder = require("./board.js");
let playerBuilder = require("./player.js");

let numberOfGames = 1;
let deck = new deckBuilder();
let board = new boardBuilder();
let players = [];
let numberOfPlayers = 4;

for (let i = 0; i < numberOfPlayers; i++) {
    players.push(new playerBuilder());
    players[i].name = i;
}

let card, done;
let cnt = 0;

for (let gameCounter = 0; gameCounter < numberOfGames; gameCounter++) {
    while (!done) {
        cnt += 1;
        console.log("Turn " + cnt);
        for (i = 0; i < players.length; i++) {
            if (!players[i].stuck) {
                card = deck.drawCard();
                console.log(players[i].name + " has drawn " + card);
            } else {
                console.log(players[i].name + " is stuck");
            }
            move = board.getMoveValue(players[i], card);
            console.log("player moves " + move + " spaces.");
            players[i].movePlayer(move);
            if (players[i].location < 134) {
                console.log("player is now at space " + players[i].location + "\n");
            } else {
                console.log(players[i].name + " has won the game!!!\n");
                done = true;
                break;
            }
        }
    }
}
console.log("end");