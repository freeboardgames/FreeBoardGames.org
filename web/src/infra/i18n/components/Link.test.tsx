import * as RTL from '@testing-library/react';
import { screen, waitFor } from '@testing-library/react';
import { GAMES_MAP } from 'games';
import NextI18Next from 'next-i18next';
import React from 'react';
import { LinkProps } from '../types';

describe('Link', () => {
  let nextI18Next: NextI18Next;
  let Link;
  let play;

  beforeEach(async () => {
    nextI18Next = require('../config').nextI18Next;
    Link = require('./Link').Link;
    play = require('infra/navigation').play;
  });

  beforeEach(() => {
    const { language } = nextI18Next.i18n;
    afterAll(() => {
      nextI18Next.i18n.changeLanguage(language);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('when translated route is available', () => {
    it('replaces the href property for it ', async () => {
      await forGivenLanguage('pt');
      renderLink('Play bingo', { href: play(GAMES_MAP.bingo) });
      await thenLinkShouldHave('Play bingo', { href: '/pt/jogar/bingo' });
    });

    it('renders Link with translated game', async () => {
      await forGivenLanguage('pt');
      renderLink('Play chess', { href: play(GAMES_MAP.chess) });
      await thenLinkShouldHave('Play chess', { href: '/pt/jogar/xadrez' });
    });

    it('does not render Link whe using a invalid language', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      jest.spyOn(console, 'error').mockImplementation();

      await forGivenLanguage('invalid');
      renderLink('Play chess', { href: play(GAMES_MAP.chess) });
      await thenLinkShouldHave('Play chess', { href: '/en/play/chess' });
    });

    it('does not change url for non-translated path ', async () => {
      await forGivenLanguage('pt');
      renderLink('Play unknown', { href: () => '/unknown/path' });
      await thenLinkShouldHave('Play unknown', { href: '/pt/unknown/path' });
    });
  });

  async function forGivenLanguage(language: string) {
    return nextI18Next.i18n.changeLanguage(language);
  }

  function renderLink(text: string, props: Pick<LinkProps, 'href'>) {
    RTL.render(<Link {...props}>{text}</Link>);
  }

  async function thenLinkShouldHave(text: string, props: { href: string }) {
    await waitFor(() => {
      Object.entries(props).forEach(([key, value]) => {
        expect(screen.getByText(text)).toHaveAttribute(key, value);
      });
    });
  }
});
