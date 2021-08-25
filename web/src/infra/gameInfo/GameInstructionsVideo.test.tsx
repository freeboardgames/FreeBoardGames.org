import Enzyme from 'enzyme';
import { GameInstructionsVideo } from './GameInstructionsVideo';

describe('GameInstructionsVideo', () => {
  it('should contain video', () => {
    const comp = Enzyme.mount(<GameInstructionsVideo videoId={'foo'} />);
    expect(comp.find('button').length).toEqual(1);
  });
});
