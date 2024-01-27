# Card Game Project

## Overview
This project is a simple card game implemented in JavaScript. It illustrates object-oriented programming concepts using classes such as `Card`, `Deck`, `Player`, and incorporates game logic to simulate a card-based game where players draw from a shuffled deck and compete to have the highest card in each round.

## Features
- **Card Class**: Represents a single card with suit, rank, and value.
- **Deck Class**: Represents a collection of cards. Includes methods to create a standard 52-card deck and to shuffle the deck.
- **Player Class**: Represents a player with methods to draw cards, play cards, and score points.
- **Game Logic**: Facilitates the game flow where players draw cards, compare card values, and score points to determine a winner.

## How to Run
1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/en/) installed on your system to run JavaScript code outside a browser.
2. **Installation**:
    ```bash
    git clone https://github.com/yourusername/card-game-project.git
    cd card-game-project
    ```
3. **Running the Game**:
    ```bash
    node game.js # assuming your main game file is named game.js
    ```

## Testing
This project includes unit tests to ensure the functionality of the deck shuffling and card drawing mechanisms.
- **Running Tests**:
    ```bash
    npm test # make sure you have a testing framework like Mocha installed
    ```
