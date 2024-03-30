const _ = require('lodash');
const knightMoves = require('../src/knightMoves');

describe('possible knight moves', () => {
  it('should possible knight moves from a1', () => {
    const position = 'a1';
    const knight = _.xor(knightMoves(position), ['c2', 'b3']).length;

    expect(knight).toBe(0);
  });

  it('should possible knight moves from b2', () => {
    const position = 'b2';
    const knight = _.xor(knightMoves(position), [
      'c4',
      'd3',
      'd1',
      'a4',
    ]).length;

    expect(knight).toBe(0);
  });
});
