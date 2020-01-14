/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { Checkerboard, algebraicToCartesian } from './Checkerboard';
import { Token } from 'ui';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('render squares correctly', () => {
  const grid = Enzyme.mount(<Checkerboard />);
  expect(grid.find('rect').length).toEqual(64);
});

test('position', () => {
  const grid = Enzyme.mount(
    <Checkerboard>
      <Token square="b5">
        <circle r="0.25" fill="red" />
      </Token>
    </Checkerboard>,
  );
  expect(
    grid
      .find('g')
      .at(65)
      .html(),
  ).to.contain('translate(1, 3)');

  const grid2 = Enzyme.mount(
    <Checkerboard invert={true}>
      <Token square="b5">
        <circle r="0.25" fill="red" />
      </Token>
    </Checkerboard>,
  );
  expect(
    grid2
      .find('g')
      .at(65)
      .html(),
  ).to.contain('translate(6, 4)');
});

test('click', () => {
  const onClick = jest.fn();
  const grid = Enzyme.mount(<Checkerboard onClick={onClick} />);
  grid
    .find('rect')
    .at(5)
    .simulate('click');
  expect(onClick.mock.calls[0]).to.deep.equal([{ square: 'a3' }]);

  const onClick2 = jest.fn();
  const grid2 = Enzyme.mount(<Checkerboard onClick={onClick2} invert={true} />);
  grid2
    .find('rect')
    .at(2)
    .simulate('click');
  expect(onClick2.mock.calls[0]).to.deep.equal([{ square: 'h3' }]);
});

test('invalid square', () => {
  const invalidSquare = () => {
    algebraicToCartesian('*1');
  };
  expect(invalidSquare).to.throw();
});

test('colorMap', () => {
  const grid = Enzyme.mount(<Checkerboard highlightedSquares={{ a5: 'blue' }} />);
  expect(
    grid
      .find('rect')
      .at(3)
      .html(),
  ).to.contain('blue');
});
