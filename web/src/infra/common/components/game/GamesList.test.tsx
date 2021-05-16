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
  const input = screen.getByRole('textbox', { name: 'search' });
  act(() => {
    fireEvent.change(input, { target: { value } });
  });
  return input;
}
