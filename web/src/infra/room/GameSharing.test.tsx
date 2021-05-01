import React from 'react';
import { GameSharingInternal as GameSharing } from './GameSharing';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';
import { I18n } from 'next-i18next';
import { mock } from 'jest-mock-extended';
require('@testing-library/jest-dom/extend-expect');

const GAME_LINK = 'http://localhost/room/fooroom';

const i18n = mock<I18n>({ language: 'en' });

afterEach(cleanup);

describe('GameSharing', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    window.location.assign = jest.fn();
    window.open = jest.fn();
    window.alert = jest.fn();
    wrapper = render(<GameSharing i18n={i18n} gameCode={'foogame'} roomID={'fooroom'} isPublic={false} />);
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
