import Enzyme from 'enzyme';
import { getPageMetadata } from './metadata';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const TITLE_PREFIX = 'FreeBoardGame.org - ';

describe('Metadata', () => {
  it('should show metadata correctly', () => {
    let metadata;
    metadata = getPageMetadata('/');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Play Free Board Games Online');
    expect(metadata.description).to.contain('in your browser for free. Compete against');

    metadata = getPageMetadata('/g/chess');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Play Free Chess Online');
    expect(metadata.description).to.contain('game of chess');

    metadata = getPageMetadata('/g/chess/local');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Locally');
    expect(metadata.description).to.contain('same device');

    metadata = getPageMetadata('/g/chess/online');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Online Friend');
    expect(metadata.description).to.contain('online friend');

    metadata = getPageMetadata('/g/seabattle');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Free Seabattle');
    expect(metadata.description).to.contain('sink ships');

    metadata = getPageMetadata('/g/seabattle/online');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('Online Friend');
    expect(metadata.description).to.contain('online friend');

    metadata = getPageMetadata('/about');
    expect(metadata.title).to.contain(TITLE_PREFIX);
    expect(metadata.title).to.contain('About Us');
    expect(metadata.description).to.contain('a free and');
  });
});
