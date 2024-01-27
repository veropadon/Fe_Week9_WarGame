
 class Card {

    constructor( suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}




class Deck { 
        constructor() {
            this.cards = [];
        }
    
    

        // Create 52 cards deck 
        createDeck() {
            let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
            let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
            let values= [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
            for(let suit of suits) {
                for(let i = 0; i< ranks.length; i++) {
                    this.cards.push( new Card(suit,ranks[i], values[i]));
                }
            
            }

        }
        
    
    
        // Shuffle the deck 
        shuffleDeck() {
            for(let i = this.cards.length -1; i >0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            
        }
    
    }
}


    // Represent Player 

    class Player {
        constructor(name) {
            this.name = name;
            this.hand = [];
            this.score = 0;

        }

        

        drawCard(deck) {
          this.hand.push(deck.cards.shift());

        }

        // Play a card 
        playCard(){
            return this.hand.shift();

        }

        // Increment Score 

        addPoint(){
            this.score++;

        }
    }

        // Initialize players, deck,and deal cards

        const player1 = new Player("Player 1");
        const player2 = new Player("Player 2");
        const deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();


// First, deal the cards to each player
for (let i = 0; i < 26; i++) {
    player1.drawCard(deck);
    player2.drawCard(deck);
}

// Then, start the game loop
for (let i = 0; i < 26; i++) {
    let card1 = player1.playCard();
    let card2 = player2.playCard();

    if (card1.value > card2.value) {
        player1.addPoint();
    } else if (card1.value < card2.value) {
        player2.addPoint();
    }
    // Ties are ignored
}

// Determine and display the winner
let winner = player1.score > player2.score ? player1.name : (player2.score > player1.score ? player2.name : "Tie");
console.log(`Winner is ${winner}!`);
console.log(`Scores:\n${player1.name}: ${player1.score}, \n${player2.name}: ${player2.score}`);

          
    

 
        

          
        
    

    
    
    
