import Enzyme from 'enzyme';
import { GameInstructionsVideo } from './GameInstructionsVideo';
import { IGameDef } from 'games';
import { GameMode } from './GameModePicker';

const gameDef: IGameDef = {
  code: 'foogame',
  description: 'foodescription',
  descriptionTag: 'foodescriptiontag',
  name: 'foogame',
  imageURL: { src: 'fooimage', 0: 'fooimage' },
  minPlayers: 2,
  maxPlayers: 2,
  config: jest.fn(),
  modes: [{ mode: GameMode.LocalFriend }],
};

let comp: Enzyme.ReactWrapper;

beforeEach(() => {
  comp = Enzyme.mount(<GameInstructionsVideo gameDef={gameDef} />);
});

it('should not contain video', () => {
  expect(comp.find('iframe').length).toEqual(0);
});

it('should contain video', () => {
  comp.setProps({ gameDef: { ...gameDef, instructions: { videoId: 'foo' } } });
  expect(comp.find('iframe').length).toEqual(1);
});
