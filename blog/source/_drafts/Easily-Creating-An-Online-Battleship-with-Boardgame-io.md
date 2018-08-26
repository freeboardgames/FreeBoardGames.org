---
title: Easily Creating An Online Battleship with Boardgame.io
date: 2018-08-25 20:04:56
tags: battleship
---

If you ever tried to create an online game before, you probably spent a good chunk of your time dealing with networking, state management, user login and other overhead. Fear not, in this article you will learn how to use the [boardgame.io](http://boardgame.io) framework so you can focus on creating the game instead. In the end I will also show how to publish the game to [turnato.com](https://turnato.com), which takes care of hosting it for you.

![battleship](https://upload.wikimedia.org/wikipedia/commons/c/c9/Flickr_-_Official_U.S._Navy_Imagery_-_Sailors_play_%22Battleship%22_aboard_a_carrier..jpg)

We will be creating an online version of [Battleship](https://en.wikipedia.org/wiki/Battleship_%28game%29), a classic multiplayer game which is simple but still really fun to play with friends :). The backend will be taken care of for us by boardgame.io, and we will only need to worry about the game rules and the user interface. For the user interface, I will be focusing on mobile devices and we will be using [ReactJS](https://reactjs.org/), as it is a modern framework that can run almost everywhere (mobile phones, tablets, computers, etc).


# Setting up

Make sure you have [npm](https://www.npmjs.com/) installed, and execute this command to setup a blank ReactJS app:

``npx create-react-app battleship``

In order to make sure it works, navigate to the newly created folder and run the server:

``cd battleship``
``npm start``

It should open a browser window saying "Welcome to React". Success :).

Now, let's install boardgame.io:

``npm install boardgame.io --save``

This should be enough for setting up! Let's start creating the game :D.

# Coding game rules

## Data structures

> "Bad programmers worry about the code. Good programmers worry about data structures and their relationships." -- Linus Torvalds

Even before writing a single line of code, let's think about how we are going to store the relevant data for coding the game rules. The state of the game can be represented with:

- Which turn is (a turn finishes when the player has no action left).
- Each user's ships, each one using one or more cells.
- The position of each user's salvos.

Given this minimal information, we should be able to calculate what to display each user at any given time. Another important feature is that we can't allow each player to know where are the other player's ships, so we must leverage [Boardgame.io's secret state](http://boardgame.io/#/secret-state). 

Therefore, the whole game state can be represented in a JSON like this:
```javascript
{
  players: {
    0: {
      ships: [
        {cells: [{x: 5, y: 4}, {x: 5, y: 5}]},
        {cells: [{x: 7, y: 7}, {x: 8, y: 7}]}
      ]
    },
    1: {
      ships: [
        {cells: [{x: 1, y: 1}, {x: 2, y: 1}]},
        {cells: [{x: 3, y: 3}, {x: 4, y: 3}]}
      ]
    }
  },
  salvos: [{player: 0, x: 0, y: 0, hit: false}],
  turn: 3 
}
```
We need to store the ships position inside players -> 0 and players -> 1 in order to tell Boardgame.io that this information should only be given to the correct player. This way, the complete game state will only be known to the server and it will be impossible for anyone else to know about the opponent's ship position. This does not apply to the salvos which is public information for both players.
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

And that's the opponent board that player 0 sees (M means miss):

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

Player 1 sees the board below:

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

And the opponent board would show blank for player 1, as no salvo was shot yet. Because it is the second turn, it means player 1's has the turn to select a cell and shoot.

Besides defining the state, we also need to define the actions that will change the state. Here is a list:
- ``SET_SHIPS``: In the first turn, a player must do this action.  Payload contains the list of chips positions.
- ``SALVO``: Shoots a given cell, it will add to the list of salvos on the state.
- ``SALVO_RESULT``: An automatic response given by the server after receiving a salvo. It contains flags telling whether it was a hit or a miss, or whether the ship is sunk or not.
- ``GAME_OVER``: A response given by the server that the game is over and someone won :). 
