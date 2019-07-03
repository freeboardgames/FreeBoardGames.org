import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { GameSharing } from './GameSharing';
import { IRoomMetadata } from '../Lobby/LobbyService';
import QrCodeIcon from './QrCodeIcon';
import { QrCodePopup } from '../Lobby/QrCodePopup';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from './FacebookIcon';
import ContentCopyIcon from '@material-ui/icons/FileCopy';

describe('GameSharing', () => {
  let wrapper: Enzyme.ReactWrapper;
  const roomMetadata: IRoomMetadata = { roomID: 'fooroom', numberOfPlayers: 2 };
  beforeEach(() => {
    window.location.assign = jest.fn();
    window.open = jest.fn();
    window.alert = jest.fn();
    wrapper = Enzyme.mount(
      <MemoryRouter>
        <GameSharing roomMetadata={roomMetadata} gameCode={'foogame'} roomID={'fooroom'} />
      </MemoryRouter>,
    );
  });

  it('should render', () => {
    expect(wrapper.html()).to.contain('Invite Your Friends');
  });

  it('should show QR code', () => {
    const button = wrapper.find(QrCodeIcon);
    button.simulate('click');
    expect(wrapper.find(QrCodePopup).length).to.equal(1);
  });

  it('should share on Facebook', () => {
    const button = wrapper.find(FacebookIcon);
    button.simulate('click');
    expect((window.open as any).mock.calls.length).to.equal(1);
  });

  it('should correctly generate link', () => {
    const button = wrapper.find(EmailIcon);
    button.simulate('click');
    expect((window.location.assign as any).mock.calls[0]).to.eql([
      'mailto:?body=http://localhost/room/foogame/fooroom',
    ]);
  });

  it('should copy link', () => {
    const button = wrapper.find(ContentCopyIcon);
    button.simulate('click');
    expect((window as any).copyClipboardMock.mock.calls.length).to.equal(1);
  });
});
