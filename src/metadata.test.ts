import * as Enzyme from 'enzyme';
import { getPageMetadata } from './metadata';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Metadata', () => {
  it('should show chess title correctly', () => {
    const metadata = getPageMetadata('/g/chess');
    expect(metadata.title).to.equal('FreeBoardGame.org - Play Free Chess Online');
  });
});
