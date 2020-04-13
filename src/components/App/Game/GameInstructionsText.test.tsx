import React from 'react';
import Enzyme from 'enzyme';
import { GameInstructionsText } from './GameInstructionsText';
import { IGameDef } from 'games';
import { GameMode } from './GameModePicker';

const gameDef: IGameDef = {
  code: 'foogame',
  description: 'foodescription',
  descriptionTag: 'foodescriptiontag',
  name: 'foogame',
  imageURL: { src: 'fooimage', 0: 'fooimage' },
  minPlayers: 2,
  maxPlayers: 2,
  config: jest.fn(),
  modes: [{ mode: GameMode.LocalFriend }],
};

let comp: Enzyme.ReactWrapper;

beforeEach(() => {
  comp = Enzyme.mount(<GameInstructionsText gameDef={gameDef} />);
});

it('should not contain instructions', () => {
  expect(comp.text()).toBeFalsy();
});

it('should contain instructions', () => {
  comp.setProps({ gameDef: { ...gameDef, instructions: { text: 'foo' } } });
  expect(comp.text()).toEqual('foo');
});
