import getAsync from './Async';
import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

it('should render loading page', () => {
  const AboutAsync = getAsync('About', () => import('../About/About'));
  const wrapper = Enzyme.mount(
    <MemoryRouter initialIndex={0} initialEntries={['/About']}>
      <AboutAsync />
    </MemoryRouter>,
  );
  expect(wrapper.html()).to.contain('Loading About Page');
});

it('should render error page', () => {
  const AboutAsync = getAsync('About', () => Promise.reject(new Error('error')));
  const wrapper = Enzyme.mount(
    <MemoryRouter initialIndex={0} initialEntries={['/About']}>
      <AboutAsync />
    </MemoryRouter>,
  );
  setImmediate(() => {
    expect(wrapper.html()).to.contain('Error Loading');
  });
});
