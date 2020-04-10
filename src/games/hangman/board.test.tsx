import React from 'react';
import { Board } from './board';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { GameMode } from 'components/App/Game/GameModePicker';
import { HangmanGame } from './game';
import { Client } from 'boardgame.io/client';
import {getInitialGameState} from './game.test';
import { Modal, Button } from '@material-ui/core';
import { exception } from 'react-ga';

Enzyme.configure({ adapter: new Adapter() });

// function to get a board 
function getEnzymeBoard(ctxDiff:any, gDiff:any, player:string, gameMode:GameMode, getClient?:boolean) {
    const client = Client({
        game: HangmanGame,
    });
    client.moves.clickCell = jest.fn();
    const state0 = client.store.getState();
    const state1 =  { ...state0, ctx: { ...state0.ctx, ...ctxDiff } };
    const state2 =  { ...state1, G: { ...state1.G, ...gDiff } };

    const comp = Enzyme.mount(
        <Board
          G={state2.G}
          ctx={state2.ctx}
          moves={client.moves}
          events={client.events}
          playerID={player}
          isActive={true}
          gameArgs={{
            gameCode:'hangman',
            mode:gameMode,
          }}
        />,
      );

    if (getClient) { 
        return {client, comp}; 
    } else {
        return comp;
    }
}

// Test Enter Word Prompt
test('Should show enter word', () => {
    const comp = getEnzymeBoard(
        {}, {}, '0', GameMode.OnlineFriend
    );    
    expect(comp.html()).toContain('Enter Word to Guess');
});

test('Should show enter word', () => {
    const comp = getEnzymeBoard(
        {}, {}, '1', GameMode.OnlineFriend
    );    
    expect(comp.html()).toContain('Waiting for the Opponent to Enter a Word for you ...');
});

test('Should show enter word', () => {
    const comp = getEnzymeBoard(
        {}, {}, '0', GameMode.LocalFriend
    );
    expect(comp.html()).toContain('Player 1: Enter Word');
});

//screen after entering words
test('Should ask player 0 to play', () => {
    let stateG = getInitialGameState('hangman','hangman');
    const comp = getEnzymeBoard(
        {}, stateG, '0', GameMode.LocalFriend
    );    
    expect(comp.html()).toContain("Player 1's Turn");
});

test('Should show player 0 his guess was CORRECT', () => {
    let stateG = getInitialGameState('hangman','hangman');
    stateG.status['0'].correctGuess = 'hangman';
    const comp = getEnzymeBoard(
        {}, stateG, '0', GameMode.LocalFriend
    );    
    expect(comp.html()).toContain("Your guess was CORRECT.");
    expect(comp.html()).toContain("Your score is");
});

test('Should show player 0 his guess was Incorrect', () => {
    let stateG = getInitialGameState('hangman','hangman');
    stateG.status['0'].wrongGuess = 'bcdefijkloztuwx';
    const comp = getEnzymeBoard(
        {}, stateG, '0', GameMode.LocalFriend
    );    
    expect(comp.html()).toContain("Your guess was INCORRECT.");
    expect(comp.html()).toContain("The word to be guessed was");
});


test('Should ask player 0 to play', () => {
    let stateG = getInitialGameState('hangman','hangman');
    const comp = getEnzymeBoard(
        {}, stateG, '0', GameMode.OnlineFriend
    );    
    expect(comp.html()).toContain("Your Turn");
});

test('Should ask player 1 to watch', () => {
    let stateG = getInitialGameState('hangman','hangman');
    const comp = getEnzymeBoard(
        {}, stateG, '1', GameMode.OnlineFriend
    );    
    expect(comp.html()).toContain("Opponent is Guessing");
});

// // should switch to player 1 
// test('Should press NEXT', () => {
//     let stateG = getInitialGameState('hangman','hangman');
//     stateG.status['0'].wrongGuess = 'bcdefijkloztuwx';
//     const {client, comp} = getEnzymeBoard(
//         {}, stateG, '0', GameMode.LocalFriend, true
//     );
//     //press the NEXT button
//     comp.find('#id_hangman_next').at(0).simulate('click'); 

//     //TODO @JASON: i would expect the player has changed to '1'
//     const clientState = client.store.getState();
//     expect(clientState.ctx.currentPlayer).toEqual('1');  
// });

// test number of guesses remaining 
test('Should show player 0 his guess was Incorrect', () => {
    let stateG = getInitialGameState('hangman','hangman');
    stateG.status['0'].wrongGuess = 'bcd';
    const comp = getEnzymeBoard(
        {}, stateG, '0', GameMode.LocalFriend
    );  
    expect(comp.html()).toContain("Guess Remaining: 7");
});

// Testing Win and Draw in Online Mode 
test('Should declare 0 as lost', () => {
  const comp = getEnzymeBoard(
      {gameover: { winner: '1' }}, {}, '0', GameMode.OnlineFriend
  );
  expect(comp.html()).toContain('you lost');
});

test('Should declare 1 as winner', () => {
    const comp = getEnzymeBoard(
        {gameover: { winner: '1' }}, {}, '1', GameMode.OnlineFriend
    );
    expect(comp.html()).toContain('you won');
  });

test('Should declare draw', () => {
    const comp = getEnzymeBoard(
        {gameover: { draw: true }}, {}, '0', GameMode.OnlineFriend
    );
    expect(comp.html()).toContain('draw');
  });


// Testing Win and Draw in Online Mode 
test('Should declare 0 as winner', () => {
    const comp = getEnzymeBoard(
        {gameover: { winner: '0' }}, {}, '1', GameMode.LocalFriend
    );
    expect(comp.html()).toContain('Player 1 won');
  });
  
test('Should declare 1 as lost', () => {
    const comp = getEnzymeBoard(
        {gameover: { winner: '0' }}, {}, '1', GameMode.LocalFriend
    );
    expect(comp.html()).toContain('Player 1 won');
});

test('Should declare draw', () => {
    const comp = getEnzymeBoard(
        {gameover: { draw: true }}, {}, '1', GameMode.LocalFriend
    );
    expect(comp.html()).toContain('draw');
});

