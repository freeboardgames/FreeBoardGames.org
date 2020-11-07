import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SoupOfLettersGame } from './game';
import {Board} from './board';
import { GameMode } from 'gamesShared/definitions/mode';


let wrapper: Enzyme.ReactWrapper;
let client;
let instance: any;
let state0: any;

const updateGameProps = () => {
  const state = client.store.getState();
  wrapper.setProps({ G: state.G, ctx: state.ctx, moves: client.moves });
};

describe('SoupOfLetters UI', () => {

    beforeEach(()=>{
        client = Client({
            game: SoupOfLettersGame,
          });
        state0 = client.store.getState();
        wrapper = Enzyme.mount(
          <Board
            G={state0.G}
            ctx={state0.ctx}
            moves={client.moves}
            playerID={'0'}
            gameArgs={{
              gameCode: 'soupofletters',
              mode: GameMode.LocalFriend,
              players: [
                { playerID: 0, name: 'Player A' },
                { playerID: 1, name: 'Player B' },
              ],
            }}
          />,
        );
        instance = wrapper.instance();

    });

    it('should show all the characters mentioned in the puzzel', () => {

        expect(wrapper.text()).toContain('Turn Player 1'); 
        expect(wrapper.text()).toContain('seconds');

        for(let r of state0.G.puzzle){
            for(let c of r){
                expect(wrapper.text()).toContain(c);
            }
        }

    }); 

    it('should change turn when timer fires', () => {

      instance._checkTimeOut(0); 
      updateGameProps(); 

      expect(wrapper.text()).toContain('Turn Player 2'); 
    });

    it('should change player when word is selected', () => {

      // start with player 1 
      expect(wrapper.text()).toContain('Turn Player 1'); 
      
      instance._wordFound(state0.G.solution[0])
      updateGameProps();
      expect(wrapper.text()).toContain('Turn Player 2'); 

    }); 

    it('should declare draw', () => {

      state0.G.solution.forEach((s) => {
        instance._wordFound(s)
        updateGameProps();
      });

      expect(wrapper.text()).toContain('draw'); 
    });

    it('should declare player 1 as the winner', () => {
      state0.G.solution.forEach((s, idx) => {
        if (idx !== state0.G.solution.length - 1){
          instance._wordFound(s)
          updateGameProps();
        }
      });
      instance._checkTimeOut(0);
      instance._wordFound(state0.G.solution[state0.G.solution.length - 1])
      updateGameProps();

      expect(wrapper.text()).toContain('Player 1 (red) won!'); 

    });

    it('should highlight the clicked letter', () => {

      // get main board and simulate click
      const touchBoard = wrapper.find('[data-testid="sol-main-touch-board"]').at(0);
      touchBoard.simulate('click', {
        clientX: 0, 
        clientY: 0, 
        target: {
          getBoundingClientRect: () => {console.log('was called ...'); return {left:0, top:0, width:10, height:10 }}
        }});
      updateGameProps(); 

      // check if first letter is clicked
      const letter00 = wrapper.find('[data-testid="letter-sqr-0-0"]').at(0);
      expect(letter00.prop('fill')).toEqual('#f44336');
    }); 


    it('should mark the selected word in red', () => {

    }); 
    



});