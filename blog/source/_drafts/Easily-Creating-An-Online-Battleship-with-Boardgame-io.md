---
title: Easily Creating An Online Battleship with Boardgame.io
date: 2018-08-25 20:04:56
tags: battleship
---

If you've ever tried to create an online game before, you probably spent a good chunk of your time dealing with networking, state management, user login, and other overhead. Fear not: in this article you will learn how to use the [boardgame.io](http://boardgame.io) framework so that you can focus on creating the game instead. In the end I will also show how to publish the game to [turnato.com](https://turnato.com), which takes care of hosting it for you.

![battleship](https://upload.wikimedia.org/wikipedia/commons/c/c9/Flickr_-_Official_U.S._Navy_Imagery_-_Sailors_play_%22Battleship%22_aboard_a_carrier..jpg)

We will be creating an online version of [Battleship](https://en.wikipedia.org/wiki/Battleship_%28game%29), a classic multiplayer game which is simple but still really fun to play with friends :). The backend will be taken care of for us by boardgame.io, and we will only need to worry about the game rules and the user interface. For the user interface, I will be focusing on mobile devices, and we will be using [ReactJS](https://reactjs.org/), a modern JavaScript framework that can run almost everywhere (mobile phones, tablets, computers, etc).


# Setting up

Make sure you have [npm](https://www.npmjs.com/) installed, and execute this command to setup a blank ReactJS app:

``npx create-react-app battleship``

In order to make sure it works, navigate to the newly created folder and run the server:

``cd battleship``
``npm start``

It should open a browser window saying "Welcome to React". Success :).

Now, let's install boardgame.io:

``npm install boardgame.io --save``

This should be enough for setting up! Now let's start creating the game :D.

# Coding game rules

## Data structures

> "Bad programmers worry about the code. Good programmers worry about data structures and their relationships." -- Linus Torvalds

Even before writing a single line of code, let's think about how we are going to store the relevant data for coding the game rules. The state of the game can be represented with:

- Each user's ships, each one using one or more cells.
- The position of each user's salvos.

Given this basic information, we are be able to calculate what to display each user at any given time. Another important feature is that we can't allow players to know the position of their opponent's ships, so we must leverage [Boardgame.io's secret state](http://boardgame.io/#/secret-state).  In order to use *SecretState*, we will need to write our own ``StripSecrets`` to show only the cells of ships that were hit. 

Therefore, the whole game state can be represented in JSON like this:
```javascript
{
  ships: [
    {player: 0, cells: [{x: 5, y: 4}, {x: 5, y: 5}]},
    {player: 0, cells: [{x: 7, y: 7}, {x: 8, y: 7}]},
    {player: 1, cells: [{x: 1, y: 1}, {x: 2, y: 1}]},
    {player: 1, cells: [{x: 3, y: 3}, {x: 4, y: 3}]}
  ],
  salvos: [{player: 0, x: 0, y: 0, hit: false, sunk: false}] 
}
```

The above example would mean that player 0 sees this board:

|   | A | B | C | D | E | F | G | H | I | J |
| - | - | - | - | - | - | - | - | - | - | - |
| 0 |   |   |   |   |   |   |   |   |   |   |
| 1 |   |   |   |   |   |   |   |   |   |   |
| 2 |   |   |   |   |   |   |   |   |   |   |
| 3 |   |   |   |   |   |   |   |   |   |   |
| 4 |   |   |   |   |   | o |   |   |   |   |
| 5 |   |   |   |   |   | o |   |   |   |   |
| 6 |   |   |   |   |   |   |   |   |   |   |
| 7 |   |   |   |   |   |   |   | o | o |   |
| 8 |   |   |   |   |   |   |   |   |   |   |
| 9 |   |   |   |   |   |   |   |   |   |   | |

And the opponent board that player 0 sees (M means miss):

|   | A | B | C | D | E | F | G | H | I | J |
| - | - | - | - | - | - | - | - | - | - | - |
| 0 | M |   |   |   |   |   |   |   |   |   |
| 1 |   |   |   |   |   |   |   |   |   |   |
| 2 |   |   |   |   |   |   |   |   |   |   |
| 3 |   |   |   |   |   |   |   |   |   |   |
| 4 |   |   |   |   |   |   |   |   |   |   |
| 5 |   |   |   |   |   |   |   |   |   |   |
| 6 |   |   |   |   |   |   |   |   |   |   |
| 7 |   |   |   |   |   |   |   |   |   |   |
| 8 |   |   |   |   |   |   |   |   |   |   |
| 9 |   |   |   |   |   |   |   |   |   |   | |

Player 1 sees this board:

|   | A | B | C | D | E | F | G | H | I | J |
| - | - | - | - | - | - | - | - | - | - | - |
| 0 | M |   |   |   |   |   |   |   |   |   |
| 1 |   | o | o |   |   |   |   |   |   |   |
| 2 |   |   |   |   |   |   |   |   |   |   |
| 3 |   |   |   | o | o |   |   |   |   |   |
| 4 |   |   |   |   |   |   |   |   |   |   |
| 5 |   |   |   |   |   |   |   |   |   |   |
| 6 |   |   |   |   |   |   |   |   |   |   |
| 7 |   |   |   |   |   |   |   |   |   |   |
| 8 |   |   |   |   |   |   |   |   |   |   |
| 9 |   |   |   |   |   |   |   |   |   |   | |

And the opponent board would show blank for player 1, as no salvo has been shot yet. Because it's the second turn, it's player 1's turn to select a cell and shoot.

In addition to defining the state, we also need to define the actions that will change the state. Here is a list:
- ``SET_SHIPS``: In the first turn, a player must do this action.  Payload contains the list of chips positions.
- ``SALVO``: Shoots a given cell, it will add to the list of salvos on the state.

## Setting up ships

As a good practice, let's start writing failing tests of what we expect the rules to be. Let's first scaffold what will hold the rules.

Create a file ``src/BattleshipGame.js`` with this content:
```javascript
import { Game } from 'boardgame.io/core';

const BattleshipGame = Game({
  setup: () => ({ ships: [], salvos: [] }),

  moves: {
    setShips(G, ctx, ships) {
      return { ...G };
    },
    salvo(G, ctx, x, y) {
      return { ...G };
    },
  },
});

export default BattleshipGame;```

Now let's write the tests on ``src/BattleshipGame.test.js`` to simulate setting up ships:
```javascript
A
B
C
```

We are using ``chai``, so let's install it:

``npm install chai --save-dev``

And run the test:

``npm run test``


## Implementing rules
