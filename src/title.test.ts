import * as Enzyme from 'enzyme';
import { getPageTitle } from './title';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Title', () => {
  it('should show chess title correctly', () => {
    const title = getPageTitle('/g/chess');
    expect(title).to.equal('FreeBoardGame.org - Play Free Chess Online');
  });
});
