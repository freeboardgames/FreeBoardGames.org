import Enzyme from 'enzyme';
import { getPageMetadata } from './metadata';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const TITLE_PREFIX = 'FreeBoardGame.org - ';

describe('Metadata', () => {
  it('should show metadata correctly', () => {
    let metadata;

    // PAGES_METADATA
    metadata = getPageMetadata('/');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Play Free Board Games Online');
    expect(metadata.description).to.contain('in your browser for free. Compete against');

    metadata = getPageMetadata('/about');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('About Us');
    expect(metadata.description).to.contain('a free and');

    // getGamesPageMetadata()
    metadata = getPageMetadata('/g/chess');
    expect(metadata.title).to.contain(TITLE_PREFIX);

    expect(metadata.title).to.contain('Chess');
    expect(metadata.description).to.contain('chess');

    // DEFAULT_METADATA
    metadata = getPageMetadata('/blah');
    expect(metadata.title).to.contain('FreeBoardGame');
    expect(metadata.description).to.contain('Play board games in your browser for free.');
  });
});
