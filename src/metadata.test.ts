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
    expect(metadata.title).to.equal(TITLE_PREFIX + 'metadata.about.title');
    expect(metadata.description).to.equal('metadata.index.description');

    metadata = getPageMetadata('/about');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.equal(TITLE_PREFIX + 'metadata.about.title');
    expect(metadata.description).to.equal('metadata.about.description');

    // getGamesPageMetadata()
    metadata = getPageMetadata('/g/chess');
    expect(metadata.title).to.equal(TITLE_PREFIX + 'metadata.gameTemplate.title');
    expect(metadata.description).to.contain('metadata.chess.descriptionTag');

    // DEFAULT_METADATA
    metadata = getPageMetadata('/blah');
    expect(metadata.title).to.equal('metadata.default.title');
    expect(metadata.description).to.equal('metadata.default.description');

    // getLangFromURL()
    const lang = getLangFromURL('/pt/foo', { pt: {} });
    expect(lang).to.equal('pt');
  });
});
