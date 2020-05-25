import React from 'react';
import { GameOver } from './GameOver';
import { render, RenderResult, cleanup } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

afterEach(cleanup);
describe('GameOver', () => {
  let wrapper: RenderResult;

  describe('with all optional parameters', () => {
    beforeEach(() => {
      window.location.assign = jest.fn();
      window.open = jest.fn();
      window.alert = jest.fn();
      wrapper = render(
        <GameOver
          result={'fake-result'}
          gameArgs={{ gameCode: 'fake-game-code' }}
          extraCardContent={<div>fake extra content</div>}
        />,
      );
    });

    it('should render the result.', () => {
      expect(wrapper.getByText(/Game Over, fake-result!/)).toBeTruthy();
    });

    it('should render play again button when gameArgs are present.', () => {
      expect(wrapper.getByText(/Play Again/)).toBeTruthy();
    });

    it('should render extra content.', () => {
      expect(wrapper.getByText(/fake-game-code/)).toBeTruthy();
    });
  });

  describe('without gameArgs', () => {
    it('should not render play again button when gameArgs are present.', () => {
      wrapper = render(<GameOver result={'fake-result'} extraCardContent={<div></div>} />);

      expect(wrapper.queryByText(/Play Again/)).toBeFalsy();
    });
  });

  describe('without gameArgs', () => {
    it('should not render play again button when gameArgs are present.', () => {
      wrapper = render(<GameOver result={'fake-result'} gameArgs={{ gameCode: 'fake-game-code' }} />);

      expect(wrapper.queryByText(/fake extra content/)).toBeFalsy();
    });
  });
});
