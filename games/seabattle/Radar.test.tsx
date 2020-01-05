import React from 'react';
import { Radar } from './Radar';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('rotate ships correctly', () => {
  const onEdit = jest.fn();
  const radar = Enzyme.mount(
    <Radar
      ships={[
        {
          player: 0,
          cells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          sunk: false,
          id: 'foo',
        },
        {
          player: 0,
          cells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
          sunk: false,
          id: 'bar',
        },
      ]}
      editable={true}
      onEdit={onEdit}
    />,
  );
  (radar.instance() as Radar)._onClick({ x: 0, y: 0 });
  radar
    .find('Token')
    .at(0)
    .simulate('click');
  expect(onEdit.mock.calls[0]).to.deep.equal([
    [
      {
        player: 0,
        cells: [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
        ],
        sunk: false,
        id: 'foo',
      },
      {
        player: 0,
        cells: [
          { x: 2, y: 0 },
          { x: 2, y: 1 },
        ],
        sunk: false,
        id: 'bar',
      },
    ],
  ]);
});

test('move ships correctly', () => {
  const onEdit = jest.fn();
  const radar = Enzyme.mount(
    <Radar
      ships={[
        {
          player: 0,
          cells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          sunk: false,
          id: 'foo',
        },
        {
          player: 0,
          cells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
          sunk: false,
          id: 'bar',
        },
      ]}
      editable={true}
      onEdit={onEdit}
    />,
  );
  (radar.instance() as Radar)._onDrop({ x: 4, y: 0, originalX: 0, originalY: 0 });
  (radar.instance() as Radar)._onClick({ x: 4, y: 0 });
  expect((radar.instance() as Radar)._shouldDrag()).toEqual(true);
  expect(onEdit.mock.calls[0]).to.deep.equal([
    [
      {
        player: 0,
        cells: [
          { x: 4, y: 0 },
          { x: 5, y: 0 },
        ],
        sunk: false,
        id: 'foo',
      },
      {
        player: 0,
        cells: [
          { x: 2, y: 0 },
          { x: 2, y: 1 },
        ],
        sunk: false,
        id: 'bar',
      },
    ],
  ]);
});

test('same ship position if dropped in the same place', () => {
  const onEdit = jest.fn();
  const radar = Enzyme.mount(
    <Radar
      ships={[
        {
          player: 0,
          cells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          sunk: false,
          id: 'foo',
        },
        {
          player: 0,
          cells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
          sunk: false,
          id: 'bar',
        },
      ]}
      editable={true}
      onEdit={onEdit}
    />,
  );
  (radar.instance() as Radar)._onDrop({ x: 0, y: 0, originalX: 0, originalY: 0 });
  expect((radar.instance() as Radar)._shouldDrag()).toEqual(true);
  expect(onEdit.mock.calls.length).toEqual(0);
});

test('not move out of bounds', () => {
  const onEdit = jest.fn();
  const radar = Enzyme.mount(
    <Radar
      ships={[
        {
          player: 0,
          cells: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          sunk: false,
          id: 'foo',
        },
        {
          player: 0,
          cells: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
          ],
          sunk: false,
          id: 'bar',
        },
      ]}
      editable={true}
      onEdit={onEdit}
    />,
  );
  (radar.instance() as Radar)._onDrop({ x: 11, y: 0, originalX: 0, originalY: 0 });
  (radar.instance() as Radar)._onClick({ x: 11, y: 0 });
  expect(onEdit.mock.calls.length).toEqual(0);
});

test('shoot ships correctly', () => {
  const onClick = jest.fn();
  const grid = Enzyme.mount(<Radar ships={[]} salvos={[]} editable={false} onClick={onClick} />);
  grid
    .find('rect')
    .at(2 * 10 + 1)
    .simulate('click');
  expect(onClick.mock.calls[0]).to.deep.equal([{ x: 1, y: 2 }]);
});
