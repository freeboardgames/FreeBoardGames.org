import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import { screen, waitFor } from '@testing-library/react';
import { LinkProps } from 'next/link';
import mockedEnv from 'mocked-env';

describe('Link', () => {
  const context = { nextI18Next: null, Link: null };

  beforeAll(() => {
    const restore = mockedEnv({ NEXT_PUBLIC_I18N_ENABLED: 'true' });
    afterEach(restore);
  });

  beforeAll(async () => {
    context.nextI18Next = (await import('../config')).nextI18Next;
    context.Link = (await import('./Link')).Link;
  });

  beforeAll(() => {
    const { language } = context.nextI18Next.i18n;
    afterAll(() => {
      context.nextI18Next.i18n.changeLanguage(language);
    });
  });

  describe('when translated route is available', () => {
    it('replaces the href property for it ', async () => {
      await forGivenLanguage('pt');
      renderLink('Play bingo', { href: '/play/bingo' });
      await thenLinkShouldHave('Play bingo', { href: '/pt/jogar/bingo' });
    });

    it('does not change the url on invalid languages', async () => {
      const spy = jest.spyOn(console, 'warn').mockImplementation();

      await forGivenLanguage('invalid');
      renderLink('Play chess', { href: '/play/chess' });
      await thenLinkShouldHave('Play chess', { href: '/play/chess' });

      spy.mockRestore();
    });

    it('does not change url for non-translated path ', async () => {
      await forGivenLanguage('pt');
      renderLink('Play unknown', { href: '/unknown/path' });
      await thenLinkShouldHave('Play unknown', { href: '/pt/unknown/path' });
    });
  });

  async function forGivenLanguage(language: string) {
    context.nextI18Next.i18n.changeLanguage(language);
  }

  function renderLink(text: string, props: Pick<LinkProps, 'href'>) {
    const { Link } = context;
    RTL.render(<Link {...props}>{text}</Link>);
  }

  async function thenLinkShouldHave(text: string, props: Pick<LinkProps, 'href'>) {
    await waitFor(() => {
      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText(text)).toHaveAttribute(key, value);
      });
    });
  }
});
