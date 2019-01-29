class board {

    setArrays() {
        let colors = {};
        colors.red = [1, 7, 14, 21, 27, 33, 39, 46, 52, 58, 64, 71, 77, 83, 89, 96, 103, 109, 115, 121, 127, 133];
        colors.orange = [5, 12, 18, 25, 31, 37, 44, 50, 56, 62, 68, 75, 81, 87, 94, 100, 107, 113, 119, 125, 131];
        colors.yellow = [3, 10, 16, 23, 29, 35, 41, 48, 54, 60, 66, 73, 79, 85, 91, 98, 105, 111, 117, 123, 129];
        colors.green = [6, 13, 19, 26, 32, 38, 45, 51, 57, 63, 70, 76, 82, 88, 95, 101, 108, 114, 120, 126, 132];
        colors.blue = [4, 11, 17, 24, 30, 36, 43, 49, 55, 61, 67, 74, 80, 86, 93, 99, 106, 112, 118, 124, 130];
        colors.violet = [2, 8, 15, 22, 28, 34, 40, 47, 53, 59, 65, 72, 78, 84, 90, 97, 104, 110, 116, 122, 128];
        return colors;
    }

    get makeBoard() {
        let r, o, y, g, b, v;
        let board = [];
        r = "r";
        o = "o";
        y = "y";
        g = "g";
        b = "b";
        v = "v";
        let colors = this.setArrays();
        for (let i = 0; i < 134; i++) {
            if (i === 0) {
                board[i] = "start";
            } else if (colors.red.indexOf(i) > -1) {
                board[i] = r;
            } else if (colors.orange.indexOf(i) > -1) {
                board[i] = o;
            } else if (colors.yellow.indexOf(i) > -1) {
                board[i] = y;
            } else if (colors.green.indexOf(i) > -1) {
                board[i] = g;
            } else if (colors.blue.indexOf(i) > -1) {
                board[i] = b;
            } else if (colors.violet.indexOf(i) > -1) {
                board[i] = v;
            } else if (i === 9) {
                board[i] = "ginger";
            } else if (i === 20) {
                board[i] = "cane";
            } else if (i === 42) {
                board[i] = "gumdrop";
            } else if (i === 69) {
                board[i] = "nutt";
            } else if (i === 92) {
                board[i] = "lolly";
            } else if (i === 102) {
                board[i] = "frostine";
            } else {
                board[i] = "unk";
            }
        }
        return board;
    }

    getMoveValue(player, card) {
        //take the player position and the card drawn and determine how many spaces need to be moved.
        let pos = player.location;
        let newPos, breakDelay;

        if (player.stuck) {
            player.stuck = false;
            newPos = pos;
        } else {
            let specialSpaceIndex = this.specialSpaces.indexOf(card);
            if (specialSpaceIndex != "-1") {
                newPos = this.spaces.indexOf(card);
            } else {
                if (card === card.toUpperCase()) {
                    breakDelay = true;
                    card = card.toLowerCase();
                }
                for (let i = pos + 1; i < (this.spaces.length + 1); i++) {
                    if (this.spaces[i] === card) {
                        if (!breakDelay) {
                            newPos = i;
                            break;
                        } else {
                            breakDelay = false;
                        }
                    }
                }
            }

            //This is the Gumdrop Pass
            if (newPos === 35) {
                newPos = 45;
            }

            //This is the Rainbow Trail
            if (newPos === 5) {
                newPos = 59;
            }

            if (newPos === 46 || newPos === 86 || newPos === 117) {
                //console.log(player.name + " will be stuck next turn");
                player.stuck = true;
            }
        }

        if (newPos - pos || newPos === pos) {
            return newPos - pos;
        } else {
            return ((this.spaces.length) - pos);
        }

    }

    constructor() {
        this.spaces = this.makeBoard;
        this.specialSpaces = ["ginger", "cane", "gumdrop", "nutt", "lolly", "frostine"];
    }
}

//let X = new board();
//console.log(X.getMoveValue(45, "r", false));
module.exports = board;