import { act, fireEvent, render, screen } from '@testing-library/react';
import { GAMES_LIST } from 'games';
import { GamesList } from './GamesList';

const FIRST_GAME = GAMES_LIST[0];

beforeEach(() => {
  render(<GamesList />);
});

describe('GamesList', () => {
  it('should have correct games listed', () => {
    expect(screen.getByTestId(`gamecard-${FIRST_GAME.code}`)).toBeInTheDocument();
  });

  describe('filtering', () => {
    it.each([
      ['Doppelkopf', { code: 'doppelkopf' }], // lowercase
      ['sixty', { code: 'sixtysix', codes: { en: 'sixtysix' } }], // English search
      ['piquenique', { code: 'picnicGo', codes: { pt: 'piquenique-go' } }], // Portuguese search
    ])('should filter by code for %s', (name, GAME) => {
      type(name);
      expect(screen.getByTestId(`gamecard-${GAME.code}`)).toBeInTheDocument();
    });

    it('should filter by name', () => {
      type(FIRST_GAME.name);
      expect(screen.getByTestId(`gamecard-${FIRST_GAME.code}`)).toBeInTheDocument();
    });

    it('should filter by description', () => {
      type(FIRST_GAME.description);
      expect(screen.getByTestId(`gamecard-${FIRST_GAME.code}`)).toBeInTheDocument();
    });

    it('should filter by description tag', () => {
      type(FIRST_GAME.descriptionTag);
      expect(screen.getByTestId(`gamecard-${FIRST_GAME.code}`)).toBeInTheDocument();
    });
  });
});

function type(value: string) {
  const input = screen.getAllByRole('textbox', { name: 'search' })[0];
  act(() => {
    fireEvent.change(input, { target: { value } });
  });
  return input;
}
