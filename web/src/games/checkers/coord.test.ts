import { fromPosition, equals, createCoord, sum, multiply, inBounds, toIndex } from './coord';

describe('Coord', () => {
  it('sums with another coord.', () => {
    const initial = createCoord(5, 10);

    const result = sum(initial, createCoord(-1, 6));

    expect(result.x).toEqual(4);
    expect(result.y).toEqual(16);
  });

  it('multiplies by a scalar.', () => {
    const initial = createCoord(5, 10);

    const result = multiply(initial, 3);

    expect(result.x).toEqual(15);
    expect(result.y).toEqual(30);
  });

  it('compares to another coord.', () => {
    const c = createCoord(5, 10);

    expect(equals(c, { x: 5, y: 10 })).toBeTrue();
    expect(equals(c, { x: 8, y: 10 })).toBeFalse();
    expect(equals(c, { x: 5, y: 11 })).toBeFalse();
  });

  it('converts to an index.', () => {
    const c = createCoord(2, 1);

    expect(toIndex(c)).toEqual(10);
  });

  it('checks boundaries.', () => {
    expect(inBounds(createCoord(-1, 2))).toBeFalse();
    expect(inBounds(createCoord(1, -2))).toBeFalse();
    expect(inBounds(createCoord(8, 2))).toBeFalse();
    expect(inBounds(createCoord(1, 8))).toBeFalse();

    expect(inBounds(createCoord(3, 4))).toBeTrue();
  });

  it('constructs from an index.', () => {
    const result = fromPosition(10);

    expect(equals(result, { x: 2, y: 1 })).toBeTrue();
  });
});
