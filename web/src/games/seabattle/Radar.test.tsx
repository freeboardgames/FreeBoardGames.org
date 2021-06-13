import React from 'react';
import { Radar, RadarInternal } from './Radar';
import { makeMount } from 'test/utils/enzymeUtil';

const mount = makeMount({ gameCode: 'seabattle' });

test('rotate ships correctly', () => {
  const onEdit = jest.fn();
  const radar = mount(
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
  const internal = radar.find(RadarInternal);
  (internal.instance() as RadarInternal)._onClick({ x: 0, y: 0 });
  radar.find('Token').at(0).simulate('click');
  expect(onEdit.mock.calls[0]).toEqual([
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
  const radar = mount(
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
  const internal = radar.find(RadarInternal).instance() as RadarInternal;
  internal._onDrop({ x: 4, y: 0, originalX: 0, originalY: 0 });
  internal._onClick({ x: 4, y: 0 });
  expect(internal._shouldDrag()).toEqual(true);
  expect(onEdit.mock.calls[0]).toEqual([
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
  const radar = mount(
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
  const internal = radar.find(RadarInternal).instance() as RadarInternal;
  internal._onDrop({ x: 0, y: 0, originalX: 0, originalY: 0 });
  expect(internal._shouldDrag()).toEqual(true);
  expect(onEdit.mock.calls.length).toEqual(0);
});

test('not move out of bounds', () => {
  const onEdit = jest.fn();
  const radar = mount(
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
  const internal = radar.find(RadarInternal).instance() as RadarInternal;
  internal._onDrop({ x: 11, y: 0, originalX: 0, originalY: 0 });
  internal._onClick({ x: 11, y: 0 });
  expect(onEdit.mock.calls.length).toEqual(0);
});

test('shoot ships correctly', () => {
  const onClick = jest.fn();
  const grid = mount(<Radar ships={[]} salvos={[]} editable={false} onClick={onClick} />);
  grid
    .find('rect')
    .at(2 * 10 + 1)
    .simulate('click');
  expect(onClick.mock.calls[0]).toEqual([{ x: 1, y: 2 }]);
});
