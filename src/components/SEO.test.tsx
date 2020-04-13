import Enzyme from 'enzyme';
import SEO from './SEO';
import { NextSeo } from 'next-seo';

jest.mock('next-seo', () => ({
  NextSeo: jest.fn().mockReturnValue(null),
}));

import { mocked } from 'ts-jest/utils';

const mockedNextSeo = mocked(NextSeo, true);

beforeEach(() => {
  mockedNextSeo.mockReset();
  mockedNextSeo.mockReturnValue(null);
});

it('renders without props', () => {
  Enzyme.mount(<SEO />);
  const props = mockedNextSeo.mock.calls[0][0];
  expect(props.noindex).toBeTruthy();
  expect(props.nofollow).toBeTruthy();
  expect(props.title).toEqual('FreeBoardGames.org');
});

it('should append to title', () => {
  Enzyme.mount(<SEO title={'foo'} />);
  const props = mockedNextSeo.mock.calls[0][0];
  expect(props.title).toEqual('foo - FreeBoardGames.org');
});

it('should override title', () => {
  Enzyme.mount(<SEO overrideTitle={'foo'} />);
  const props = mockedNextSeo.mock.calls[0][0];
  expect(props.title).toEqual('foo');
});

// console.log((NextSeo as any).mock.calls);
// console.log(wrapper.props());
// console.log(wrapper.find(SEO).at(0).debug());
