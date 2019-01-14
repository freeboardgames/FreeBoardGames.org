import * as React from 'react';
import { GameSharing } from './GameSharing';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const doNothing = () => { return; };

describe('Game sharing', () => {

  jest.mock('react-ga');
  jest.mock('copy-to-clipboard');
  it('should contain a link', () => {
    const mockFn = jest.fn();
    const wrapper = mount((
      <MuiThemeProvider>
        <GameSharing
          gameCode={'foogame'}
          matchCode={'barmatch'}
          playerID={'0'}
          onDismiss={mockFn}
        />
      </MuiThemeProvider>
    ));
    expect(wrapper.html()).to.contain('/g/foogame/match/barmatch/1');
  });

  it('should call onDismiss', () => {
    const mockFn = jest.fn();
    const wrapper = shallow((
      <GameSharing
        gameCode={'foocode'}
        matchCode={'barmatch'}
        playerID={'0'}
        onDismiss={mockFn}
      />
    ));
    wrapper.find(RaisedButton).simulate('click');
    expect(mockFn.mock.calls.length).to.equal(1);
  });

  it('should send email', () => {
    const mockFn = jest.fn();
    location.assign = mockFn;
    const wrapper = shallow((
      <GameSharing
        gameCode={'foocode'}
        matchCode={'barmatch'}
        playerID={'0'}
        onDismiss={doNothing}
      />
    ));
    wrapper.find(IconButton).at(0).simulate('click');
    expect(mockFn.mock.calls.length).to.equal(1);
    expect(mockFn.mock.calls[0][0]).to.contain('mailto:');
  });

  it('should share on facebook', () => {
    const mockFn = jest.fn();
    window.open = mockFn;
    const wrapper = shallow((
      <GameSharing
        gameCode={'foocode'}
        matchCode={'barmatch'}
        playerID={'0'}
        onDismiss={doNothing}
      />
    ));
    wrapper.find(IconButton).at(1).simulate('click');
    expect(mockFn.mock.calls.length).to.equal(1);
    expect(mockFn.mock.calls[0][0]).to.contain('facebook.com');
  });

  it('should share on twitter', () => {
    const mockFn = jest.fn();
    window.open = mockFn;
    const wrapper = shallow((
      <GameSharing
        gameCode={'foocode'}
        matchCode={'barmatch'}
        playerID={'0'}
        onDismiss={doNothing}
      />
    ));
    wrapper.find(IconButton).at(2).simulate('click');
    expect(mockFn.mock.calls.length).to.equal(1);
    expect(mockFn.mock.calls[0][0]).to.contain('twitter.com');
  });

  it('should copy to clipboard', () => {
    const mockFn = jest.fn();
    window.alert = mockFn;
    const wrapper = shallow((
      <GameSharing
        gameCode={'foocode'}
        matchCode={'barmatch'}
        playerID={'1'}
        onDismiss={doNothing}
      />
    ));
    wrapper.find(IconButton).at(3).simulate('click');
    const mockFn2 = (global as any).copyClipboardMock;
    expect(mockFn.mock.calls.length).to.equal(1);
    expect(mockFn2.mock.calls.length).to.equal(1);
  });
});
