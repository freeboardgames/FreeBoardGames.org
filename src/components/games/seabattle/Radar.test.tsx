import * as React from 'react';
import { Radar } from './Radar';
import { expect } from 'chai';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('render ships correctly', () => {
  const grid = Enzyme.mount(<Radar ships={[
    {player: 0, cells: [{x: 0, y:0}, {x: 1, y: 0}], sunk: false},
    {player: 0, cells: [{x: 2, y:0}, {x: 2, y: 1}], sunk: false},
  ]} />);
  expect(grid.find('Token').length).to.equal(2);
});


