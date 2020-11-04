import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SoupOfLettersGame } from './game';
import {Board} from './board';
import { GameMode } from 'gamesShared/definitions/mode';


let wrapper: Enzyme.ReactWrapper;
let client;
let instance: any;
let state0: any;

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

        expect(wrapper.text()).toContain('Turn Player'); 
        expect(wrapper.text()).toContain('seconds');

        for(let r of state0.G.puzzle){
            for(let c of r){
                expect(wrapper.text()).toContain(c);
            }
        }

    }); 

    it('should show game over', () => {

    }); 





});