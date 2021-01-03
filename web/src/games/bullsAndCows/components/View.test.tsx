import React from 'react';
import Enzyme, { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Attempt from './Attempt';
import ColourButton from './ColourButton';
import ColourCode from './ColourCode';
import Secret from './Secret';

import { IColour } from '../service';
import View, { IViewProps } from './View';

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ShallowWrapper | ReactWrapper;
let props: IViewProps;
let ctx: any = {};

const mockColours: IColour[] = [
  { id: 1, img: 'a', hex: '#111' }, // 0
  { id: 2, img: 'b', hex: '#222' }, // 1
  { id: 3, img: 'c', hex: '#333' }, // 2
  { id: 4, img: 'd', hex: '#444' }, // 3
  { id: 5, img: 'e', hex: '#555' }, // 4
  { id: 6, img: 'f', hex: '#666' }, // 5
];

describe('Bulls and Cows View', () => {
  beforeAll(() => {
    props = {
      currentColourId: 2,
      ctx,
      selectColour: jest.fn(),
      moves: {
        setColourInPosition: jest.fn(),
        check: jest.fn(),
      },
      G: {
        secretLength: 4,
        limitOfAttempts: 3,
        lastAttempt: {
          hints: [1, 0, 0, -1],
          combination: [mockColours[0], mockColours[3], mockColours[1], mockColours[4]],
        },
        attempts: [
          {
            hints: [1, 0, 0, -1],
            combination: [mockColours[0], mockColours[3], mockColours[2], mockColours[4]],
          },
          {
            hints: [0, 0, -1, -1],
            combination: [mockColours[2], mockColours[3], mockColours[1], mockColours[4]],
          },
        ],
        current: [mockColours[0], mockColours[3], mockColours[1], mockColours[2]],
        secret: [mockColours[0], mockColours[4], mockColours[5], mockColours[3]],
        colours: [...mockColours],
      },
    };
  });

  describe('Display', () => {
    beforeAll(() => {
      wrapper = shallow(<View {...props} />);
    });

    it('should show attemps in reversed order', () => {
      const attempts = wrapper.find(Attempt);

      expect(attempts).toHaveLength(props.G.attempts.length);

      expect(attempts.at(0).props()).toEqual(
        expect.objectContaining({
          index: '02',
          attempt: props.G.attempts[1],
        }),
      );

      expect(attempts.at(1).props()).toEqual(
        expect.objectContaining({
          index: '01',
          attempt: props.G.attempts[0],
        }),
      );
    });

    describe('current guess', () => {
      let current: any;

      beforeAll(() => {
        current = wrapper.find(ColourCode);
      });

      it('should have the a ColourCode for each current', () => {
        expect(current).toHaveLength(props.G.current.length);
      });

      test.each([[0], [1], [2], [3]])('should show current %i', (x) => {
        expect(current.at(x).props()).toEqual(
          expect.objectContaining({
            position: x,
            colour: { ...props.G.current[x] },
            currentColourId: props.currentColourId,
            onClick: props.moves.setColourInPosition,
          }),
        );
      });
    });

    describe('colours choices', () => {
      let colours: any;

      beforeAll(() => {
        colours = wrapper.find(ColourButton);
      });

      it('should have the a ColourButton for each Colour', () => {
        expect(colours).toHaveLength(props.G.colours.length);
      });

      test.each([[0], [1], [2], [3], [4], [5]])('should show current %i', (x) => {
        expect(colours.at(x).props()).toEqual(
          expect.objectContaining({
            colour: { ...props.G.colours[x] },
            currentColourId: props.currentColourId,
            onClick: props.selectColour,
          }),
        );
      });
    });
  });

  describe('Click events', () => {
    beforeAll(() => {
      wrapper = mount(<View {...props} />);
    });

    it('should set the position as the current colour', () => {
      const colourCode = wrapper.find(ColourCode);

      colourCode.at(0).simulate('click');

      expect(props.moves.setColourInPosition).toHaveBeenCalledWith(props.currentColourId, 0);
    });

    it('should guess on click', () => {
      const colourButton = wrapper.find(ColourButton);

      colourButton.at(0).simulate('click');

      expect(props.selectColour).toHaveBeenCalledWith(props.G.colours[0].id);
    });
  });

  it('should show secret when game is over', () => {
    const ctx: any = { gameover: true };
    wrapper = mount(<View {...props} ctx={ctx} />);
    expect(wrapper.find(Secret).exists()).toBeTrue();
  });
});
