import getAsync from './Async';
import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
require('@testing-library/jest-dom/extend-expect');

it('should render loading page', () => {
  const AboutAsync = getAsync('About', () => import('../About/About'));
  const { getByText } = render(
    <MemoryRouter initialIndex={0} initialEntries={['/About']}>
      <AboutAsync />
    </MemoryRouter>,
  );
  expect(getByText(/Loading About/)).toBeInTheDocument();
});

it('should render error page', async () => {
  const AboutAsync = getAsync('About', () => Promise.reject(new Error('error')));
  const { getByText } = render(
    <MemoryRouter initialIndex={0} initialEntries={['/About']}>
      <AboutAsync />
    </MemoryRouter>,
  );
  const wrapper = await waitForElement(() => getByText(/Error/));
  expect(wrapper).toHaveTextContent('Error Loading About Page');
});
