import React from 'react';
import { GameSharing } from './GameSharing';
import { IRoomMetadata } from '../Lobby/LobbyService';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

const GAME_LINK = 'http://localhost/room/foogame/fooroom';

afterEach(cleanup);
describe('GameSharing', () => {
  const roomMetadata: IRoomMetadata = { roomID: 'fooroom', numberOfPlayers: 2 };
  let wrapper: RenderResult;
  beforeEach(() => {
    window.location.assign = jest.fn();
    window.open = jest.fn();
    window.alert = jest.fn();
    wrapper = render(<GameSharing roomMetadata={roomMetadata} gameCode={'foogame'} roomID={'fooroom'} />);
  });

  it('should render', () => {
    expect(wrapper.getByText(/Invite Your Friends/)).toBeTruthy();
  });

  it('should open then close QR code', () => {
    const button = wrapper.getByLabelText('QR code');
    fireEvent.click(button);
    expect(wrapper.getByText('Scan QR code')).toBeInTheDocument();
    const closeButton = wrapper.getByText('Done');
    fireEvent.click(closeButton);
    expect(wrapper.queryByText('Scan QR code')).not.toBeInTheDocument();
  });

  it('should share on Facebook', () => {
    const button = wrapper.getByLabelText('Facebook');
    fireEvent.click(button);
    expect(window.open as any).toHaveBeenCalled();
  });

  it('should share on WhatsApp', () => {
    const button = wrapper.getByLabelText('WhatsApp');
    fireEvent.click(button);
    expect(window.open as any).toHaveBeenCalled();
  });

  it('should copy link', () => {
    jest.useFakeTimers();
    const button = wrapper.getByLabelText('Copy');
    fireEvent.click(button);
    expect(wrapper.getByText('Copied!')).toBeInTheDocument();
    jest.runAllTimers();
    expect((window as any).copyClipboardMock).toHaveBeenCalledWith(GAME_LINK);
  });
});
