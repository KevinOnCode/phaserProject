'use strict';

class player {

    get location() {
        return this.playerLocation;
    }

    get name() {
        return this.PlayerName;
    }

    get stuck() {
        return this.playerStuck;
    }

    set location(newLocation) {
        this.playerLocation = newLocation;
    }

    set name(playerNumber) {
        this.PlayerName = "Player " + (playerNumber + 1);
    }

    set stuck(isStuck) {
        this.playerStuck = isStuck;
    }

    movePlayer(movement) {
        this.location = this.location + movement;
    }

    playerWin() {
        this.playerWins += 1;
    }

    constructor() {
        this.location = 0;
        this.stuck = false;
        this.playerWins = 0;
    }

}

module.exports = player;