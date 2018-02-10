import * as React from 'react';
import { GameSharing } from './GameSharing';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('Game sharing', () => {

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
});
