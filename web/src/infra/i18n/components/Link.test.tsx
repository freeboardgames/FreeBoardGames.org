import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import { screen, waitFor } from '@testing-library/react';
import { Link } from './Link';
import { LinkProps } from 'next/link';
import { nextI18Next } from '../config';
import { mock, mockDeep } from 'jest-mock-extended';
import { UseTranslation } from 'next-i18next';
import { mocked } from 'ts-jest/utils';

describe('Link', () => {
  beforeEach(() => {
    const useTranslation = jest.spyOn(nextI18Next, 'useTranslation');
    const useContext = jest.spyOn(React, 'useContext').mockReturnValue(
      mockDeep<ReturnType<UseTranslation>>({ i18n: { options: { react: { useSuspense: false, wait: undefined } } } }),
    );
    afterEach(() => {
      useTranslation.mockReset();
      useContext.mockReset();
    });
  });

  describe('Link', () => {
    describe('when translated route is available', () => {
      it('replaces the href property for it ', async () => {
        forGivenLanguage('pt');
        const text = 'Play bingo';

        renderLink(text, { href: '/play/bingo' });

        await thenLinkShouldHave(text, { href: '/jogar/bingo' });
      });

      it('does not change the url on invalid languages', async () => {
        forGivenLanguage('invalid');
        const text = 'Play bingo';

        renderLink(text, { href: '/play/bingo' });

        await thenLinkShouldHave(text, { href: '/play/bingo' });
      });

      it('does not change url for non-translated path ', async () => {
        forGivenLanguage('pt');
        const text = 'Play bingo';

        renderLink(text, { href: '/unknown/path' });

        await thenLinkShouldHave(text, { href: '/unknown/path' });
      });
    });
  });
});

function forGivenLanguage(language: string) {
  mocked<UseTranslation>(nextI18Next.useTranslation).mockReturnValue(
    mock<ReturnType<UseTranslation>>({
      i18n: { language },
    }),
  );
}

function renderLink(text: string, props: Pick<LinkProps, 'href'>) {
  RTL.render(<Link {...props}>{text}</Link>);
}

async function thenLinkShouldHave(text: string, props: Pick<LinkProps, 'href'>) {
  await waitFor(() => {
    Object.entries(props).forEach(([key, value]) => {
      expect(screen.getByText(text)).toHaveAttribute(key, value);
    });
  });
}
