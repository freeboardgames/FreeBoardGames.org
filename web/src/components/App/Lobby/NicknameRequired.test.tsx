import React from 'react';
import { NicknameRequired } from './NicknameRequired';
import Enzyme from 'enzyme';
import { AuthData } from '../../../redux/actions';
import { LobbyService } from './LobbyService';
jest.mock('./LobbyService');

describe('Nickname Required', () => {
  let wrapper: Enzyme.ReactWrapper;
  let handleClickawayMock: jest.Mock;
  let onSuccessMock: jest.Mock;
  let mockDispatch: jest.Mock;

  describe('no nickname', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      handleClickawayMock = jest.fn();
      onSuccessMock = jest.fn();
      mockDispatch = jest.fn();
      const NicknameRequiredWithReduxProps: any = NicknameRequired;
      wrapper = Enzyme.mount(
        <NicknameRequiredWithReduxProps
          user={{}}
          dispatch={mockDispatch}
          handleClickaway={handleClickawayMock}
          onSuccess={onSuccessMock}
        >
          <p>foo</p>
        </NicknameRequiredWithReduxProps>,
      );
    });

    it('dispatches', () => {
      expect(mockDispatch).toHaveBeenCalledWith({ payload: { loggedIn: false, ready: true }, type: 'SyncUser' });
    });

    it('should not render children', () => {
      expect(wrapper.text()).not.toContain('foo');
    });

    it('should prompt for nickname', () => {
      expect(wrapper.text()).toContain('Enter Your Nickname');
    });

    it('sets nickname', () => {
      const instance: any = wrapper.instance();
      instance._setNickname('foouser');
      expect(onSuccessMock).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { loggedIn: true, nickname: 'foouser', ready: true },
        type: 'SyncUser',
      });
    });

    it('sets nickname, no onSuccess() prop', () => {
      wrapper.setProps({ onSuccess: undefined });
      const instance: any = wrapper.instance();
      instance._setNickname('baruser');
      expect(onSuccessMock).not.toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { loggedIn: true, nickname: 'baruser', ready: true },
        type: 'SyncUser',
      });
    });
  });

  describe('with nickname', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      LobbyService.getNickname = jest.fn().mockReturnValue('bazuser');
      handleClickawayMock = jest.fn();
      onSuccessMock = jest.fn();
      mockDispatch = jest.fn();
      const mockUser: AuthData = { nickname: 'bazuser', loggedIn: true, ready: true };
      const NicknameRequiredWithReduxProps: any = NicknameRequired;
      wrapper = Enzyme.mount(
        <NicknameRequiredWithReduxProps
          user={mockUser}
          dispatch={mockDispatch}
          handleClickaway={handleClickawayMock}
          onSuccess={onSuccessMock}
        >
          <p>foo</p>
        </NicknameRequiredWithReduxProps>,
      );
    });

    it('dispatches', () => {
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { loggedIn: true, ready: true, nickname: 'bazuser' },
        type: 'SyncUser',
      });
    });

    it('should render children', () => {
      expect(wrapper.text()).toContain('foo');
    });
  });
});
