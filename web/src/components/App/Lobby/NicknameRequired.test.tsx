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
      expect(LobbyService.getSyncUserAction).toHaveBeenCalled();
    });

    it('should not render children', () => {
      expect(wrapper.text()).not.toContain('foo');
    });

    it('should prompt for nickname', () => {
      expect(wrapper.text()).toContain('Enter Your Nickname');
    });

    it('sets nickname', async () => {
      const instance: any = wrapper.instance();
      await instance._setNickname('foouser');
      expect(LobbyService.newUser).toHaveBeenCalledWith('foouser');
      expect(onSuccessMock).toHaveBeenCalled();
    });

    it('sets nickname, no onSuccess() prop', async () => {
      wrapper.setProps({ onSuccess: undefined });
      const instance: any = wrapper.instance();
      await instance._setNickname('baruser');
      expect(LobbyService.newUser).toHaveBeenCalledWith('baruser');
      expect(onSuccessMock).not.toHaveBeenCalled();
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
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should render children', () => {
      expect(wrapper.text()).toContain('foo');
    });
  });
});
