import React from 'react';
import { GameModePicker, GameMode, IGameModeInfo } from './GameModePicker';
import { IGameModeExtraInfoSlider, IGameModeExtraInfoDropdown } from './GameModePicker';
import ListItem from '@material-ui/core/ListItem';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

describe('Game Mode Picker', () => {

  it('should show all 5 options and accept clicks', () => {
    const historyMock = { push: jest.fn() };
    const modesMock: IGameModeInfo[] = [
      { mode: GameMode.AI, cardDescription: 'foo AI' },
      { mode: GameMode.OnlineFriend, cardDescription: 'online' },
      { mode: GameMode.LocalFriend, cardDescription: 'local' },
    ];
    const wrapper = mount((
      <MemoryRouter>
        <GameModePicker gameCode="foo" modes={modesMock} />
      </MemoryRouter>
    ));
    expect(wrapper.find('a').length).to.equal(3);
  });

  it('should show a slider', () => {
    const historyMock = { push: jest.fn() };
    const modesMock: IGameModeInfo[] = [
      {
        mode: GameMode.AI,
        cardDescription: 'foo AI',
        extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },
    ];
    const wrapper = mount((
      <MemoryRouter>
        <GameModePicker gameCode="foo" modes={modesMock} />
      </MemoryRouter>
    ));
    expect(wrapper.find('Slider').length).to.equal(1);
  });

  it('should show a dropdown', () => {
    const wrapper = makeDropdownWrapper();
    expect(wrapper.find('MenuList').length).to.equal(1);
    expect(wrapper.find('MenuItem').length).to.equal(2);
  });

  it('should have the correct dropdown defaults', () => {
    const wrapper = makeDropdownWrapper();
    const easy = wrapper.find('MenuItem').at(0);
    expect(easy.prop('value')).to.equal('Easy');
    expect(easy.prop('selected')).to.equal(true);  // Easy is selected by default

    const hard = wrapper.find('MenuItem').at(1);
    expect(hard.prop('value')).to.equal('Hard');

    expect(hard.prop('selected')).to.equal(false);  // Hard is deselected by default
  });

  it('it should be a functional dropdown', () => {
    const wrapper = makeDropdownWrapper();
    const hard = wrapper.find('MenuItem').at(1);
    expect(hard.html()).not.to.contain('selected');
    hard.simulate('click');
    expect(hard.html()).to.contain('selected');
  });
});

function makeDropdownWrapper() {
  const modesMock: IGameModeInfo[] = [
    {
      mode: GameMode.AI,
      cardDescription: 'foo AI',
      extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
  ];
  const wrapper = mount((
    <MemoryRouter>
      <GameModePicker gameCode="foo" modes={modesMock} />
    </MemoryRouter>
  ));
  return wrapper;
}
