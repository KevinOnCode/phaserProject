'use strict'

class deck {

    get getNewDeck () {
        let deck = [];
        //A Deck has:
        //  6 singles of each color
        //  4 doubles of Red, Yello, Blue and Voilet
        //  3 doubles of  Orange and Green
        //  6 special character teleport cards
        for (let i = 0; i < 6; i++) {
            deck.push("r", "o", "y", "g", "b", "v");
            if (i < 4) {
                deck.push("R", "Y", "B", "V");
            }
            if (i < 3) {
                deck.push("O", "G");
            }
        }

        deck.push("frostine", "cane", "gumdrop", "lolly", "nutt", "ginger")
        return deck;
    }

    shuffleDeck (array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    drawCard(){
        // take a card off the top of the deck.
        // If there are no cards create a new deck and take the top card from that.
        let ret = this.cards.pop()
        if(!ret){
            console.log("All cards have been drawn, reshuffeling");
            this.cards = this.getNewDeck;
            ret = this.cards.pop();
        }
        return ret;
    }

    constructor() {
        this.cards = this.getNewDeck;
        this.cards = this.shuffleDeck(this.cards);
    }

}

module.exports = deck;