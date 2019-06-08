import React from 'react';
import { GameModePicker, GameMode, IGameModeInfo } from './GameModePicker';
import { IGameModeExtraInfoSlider, IGameModeExtraInfoDropdown } from './GameModePicker';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { IGameDef } from '../../games';

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'foo.jpg',
  description: 'foo desc',
  descriptionTag: 'foo tag',
  instructions: {
    videoId: 'dQw4w9WgXcQ',
  },
  config: () => {
    return null as any;
  },
  minPlayers: 2,
  maxPlayers: 3,
  modes: [],
};

describe('Game Mode Picker', () => {
  it('should show all 5 options and accept clicks', () => {
    const modes: IGameModeInfo[] = [
      { mode: GameMode.AI },
      { mode: GameMode.OnlineFriend },
      { mode: GameMode.LocalFriend },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
      </MemoryRouter>,
    );
    expect(wrapper.find('a').length).to.equal(3);
  });

  it('should show # player Select', () => {
    const modes: IGameModeInfo[] = [
      {
        mode: GameMode.OnlineFriend,
      },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
      </MemoryRouter>,
    );
    expect(wrapper.find('Select').length).to.equal(1);
  });

  it('should show a slider', () => {
    const modes: IGameModeInfo[] = [
      {
        mode: GameMode.AI,
        extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },
    ];
    const wrapper = mount(
      <MemoryRouter>
        <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
      </MemoryRouter>,
    );
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
    expect(easy.prop('selected')).to.equal(true); // Easy is selected by default

    const hard = wrapper.find('MenuItem').at(1);
    expect(hard.prop('value')).to.equal('Hard');

    expect(hard.prop('selected')).to.equal(false); // Hard is deselected by default
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
  const modes: IGameModeInfo[] = [
    {
      mode: GameMode.AI,
      extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
  ];
  const wrapper = mount(
    <MemoryRouter>
      <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
    </MemoryRouter>,
  );
  return wrapper;
}
