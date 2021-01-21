import { fromPosition, equals, coord, sum, multiply, inBounds, toIndex } from './coord';

describe('Coord', () => {
  it('sums with another coord.', () => {
    const initial = coord(5, 10);

    const result = sum(initial, coord(-1, 6));

    expect(result.x).toEqual(4);
    expect(result.y).toEqual(16);
  });

  it('multiplies by a scalar.', () => {
    const initial = coord(5, 10);

    const result = multiply(initial, 3);

    expect(result.x).toEqual(15);
    expect(result.y).toEqual(30);
  });

  it('compares to another coord.', () => {
    const c = coord(5, 10);

    expect(equals(c, { x: 5, y: 10 })).toBeTrue();
    expect(equals(c, { x: 8, y: 10 })).toBeFalse();
    expect(equals(c, { x: 5, y: 11 })).toBeFalse();
  });

  it('converts to an index.', () => {
    const c = coord(2, 1);

    expect(toIndex(c)).toEqual(10);
  });

  it('checks boundaries.', () => {
    expect(inBounds(coord(-1, 2))).toBeFalse();
    expect(inBounds(coord(1, -2))).toBeFalse();
    expect(inBounds(coord(8, 2))).toBeFalse();
    expect(inBounds(coord(1, 8))).toBeFalse();

    expect(inBounds(coord(3, 4))).toBeTrue();
  });

  it('constructs from an index.', () => {
    const result = fromPosition(10);

    expect(equals(result, { x: 2, y: 1 })).toBeTrue();
  });
});
