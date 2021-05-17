import { GameMode } from 'gamesShared/definitions/mode';
import React from 'react';
import { render, screen } from 'test/utils/rtl';
import { GameOver } from './GameOver';

describe('GameOver', () => {
  describe('with all optional parameters', () => {
    beforeEach(() => {
      window.location.assign = jest.fn();
      window.open = jest.fn();
      window.alert = jest.fn();
      render(
        <GameOver
          result={'fake-result'}
          gameArgs={{ gameCode: 'fake-game-code', mode: GameMode.OnlineFriend }}
          extraCardContent={<div>fake extra content</div>}
        />,
      );
    });

    it('should render the result.', () => {
      expect(screen.getByText(/Game Over, fake-result!/)).toBeTruthy();
    });

    it('should render play again button when gameArgs are present.', () => {
      expect(screen.getByText(/Play Again/)).toBeTruthy();
    });
  });

  describe('without gameArgs', () => {
    it('should not render play again button when gameArgs are present.', () => {
      render(<GameOver result={'fake-result'} extraCardContent={<div></div>} />);
      expect(screen.queryByText(/Play Again/)).toBeFalsy();
    });
  });

  describe('without gameArgs', () => {
    it('should not render play again button when gameArgs are present.', () => {
      render(
        <GameOver result={'fake-result'} gameArgs={{ gameCode: 'fake-game-code', mode: GameMode.OnlineFriend }} />,
      );
      expect(screen.queryByText(/fake extra content/)).toBeFalsy();
    });
  });
});
