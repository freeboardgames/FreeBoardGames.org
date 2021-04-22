import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Link } from './Link';

import { nextI18Next } from 'infra/i18n';
import { mocked } from 'ts-jest/utils';
import { LinkProps } from 'next/link';

jest.mock('infra/i18n/config', () => {
  const NextLink = jest.requireActual('next/link').default;
  return {
    nextI18Next: {
      Link: NextLink,
      useTranslation: jest.fn(),
    },
  };
});

const mockedNextI18Next = mocked(nextI18Next, true);

describe('Link', () => {
  describe('when translated route is available', () => {
    it('replaces the href property for it ', async () => {
      forGivenLanguage('pt');
      whenLinkGotRenderedWith({ href: '/play/bingo' });
      await thenLinkShouldHave({ href: '/jogar/bingo' });
    });
  });
});

function forGivenLanguage(language: string) {
  mockedNextI18Next.useTranslation.mockReturnValue({
    i18n: { language },
  } as ReturnType<typeof mockedNextI18Next.useTranslation>);
}

function whenLinkGotRenderedWith(props: Pick<LinkProps, 'href'>) {
  RTL.render(<Link {...props}>Play bingo</Link>);
}

async function thenLinkShouldHave(props: Pick<LinkProps, 'href'>) {
  await waitFor(() => {
    Object.entries(props).forEach(([key, value]) => {
      expect(screen.getByText('Play bingo')).toHaveAttribute(key, value);
    });
  });
}
