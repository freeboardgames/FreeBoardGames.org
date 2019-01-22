import * as React from 'react';
import { GameInfo } from './GameInfo';
import * as Enzyme from 'enzyme';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Game info', () => {
  const context = {};
  it('should render chess', () => {
    const wrapper = Enzyme.mount(
      <MuiThemeProvider>
        <GameInfo match={{ params: { gameCode: 'chess' } }} />
      </MuiThemeProvider>,
    );
    expect(wrapper.html()).to.contain('Chess');
  });
});
