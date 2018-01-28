/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import { Checkerboard } from './checkerboard';
import { Token } from 'boardgame.io/ui';
import { expect } from 'chai';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('render squares correctly', () => {
  const grid = Enzyme.mount(<Checkerboard />);
  expect(grid.find('rect').length).to.equal(64);
});

test('position', () => {
  const grid = Enzyme.mount((
    <Checkerboard>
      <Token square="b5">
        <circle r="0.25" fill="red" />
      </Token>
    </Checkerboard>
  ));
  expect(grid.html()).to.contain('translate(1, 3)');
});

test('click', () => {
  const onClick = jest.fn();
  const grid = Enzyme.mount(<Checkerboard onClick={onClick} />);
  grid
    .find('rect')
    .at(5)
    .simulate('click');
  expect(onClick.mock.calls[0]).to.deep.equal([{ square: 'a3' }]);
});

test('invalid square', () => {
  const invalidSquare = () => {
    const checkerboard =  Enzyme.shallow(<Checkerboard />).instance() as Checkerboard;
    checkerboard._algebraicToCartesian('*1');
  };
  expect(invalidSquare).to.throw();
});

test('colorMap', () => {
  const grid = Enzyme.mount((
    <Checkerboard highlightedSquares={{ a5: 'blue' }} />
  ));
  expect(grid.find('rect').at(3).html()).to.contain('blue');
});
