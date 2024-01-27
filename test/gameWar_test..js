var expect = chai.expect;



describe('deckTest', function() {
    describe('#shuffleDeck()', function() {
        it('should shuffle the deck, changing the order of cards', function() {
            const deck = new Deck();
            deck.createDeck();
            const originalDeckString = JSON.stringify(deck.cards);
            deck.shuffleDeck();
            const shuffledDeckString = JSON.stringify(deck.cards);
            expect(originalDeckString).to.not.equal(shuffledDeckString);
        });

        it('should contain the same cards after shuffling', function() {
            const deck = new Deck();
            deck.createDeck();
            const originalDeck = [...deck.cards];
            deck.shuffleDeck();
            const shuffledDeck = deck.cards;
            expect(shuffledDeck).to.have.deep.members(originalDeck);
        });
    });
});
