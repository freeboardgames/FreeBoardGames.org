import Enzyme from 'enzyme';
import { getPageMetadata, getLangFromURL } from './metadata';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const TITLE_PREFIX = 'FreeBoardGame.org - ';

describe('Metadata', () => {
  it('should show metadata correctly', () => {
    let metadata;

    // PAGES_METADATA
    metadata = getPageMetadata('/');
    expect(metadata.title).to.equal('FreeBoardGame.org');
    expect(metadata.description).to.contain('Play board games in your browser for free');

    metadata = getPageMetadata('/about');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('FreeBoardGame.org - About Us');
    expect(metadata.description).to.contain('free and open-source software project.');

    // getGamesPageMetadata()
    metadata = getPageMetadata('/g/chess');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Play Free Chess Online');
    expect(metadata.description).to.contain('Play an online Chess game');

    // DEFAULT_METADATA
    metadata = getPageMetadata('/blah');
    expect(metadata.title).to.equal('FreeBoardGame.org');
    expect(metadata.description).to.contain('Play board games in your browser for free');

    // getLangFromURL()
    const lang = getLangFromURL('/pt/foo', { pt: {} });
    expect(lang).to.equal('pt');
  });
});
