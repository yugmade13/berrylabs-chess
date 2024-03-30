const _ = require('lodash');
const knightPositions = require('../src/knightPositions');

describe('knight positions', () => {
  it('should knight position g6 and d7', () => {
    const input = ['a1', 'b6', 'c3', 'e5', 'f8', 'h4'];

    expect(_.xor(knightPositions(input), ['g6', 'd7']).length).toBe(0);
  });

  it('should knight position a4, d5, d7 and g6', () => {
    const input = ['a1', 'b6', 'c3', 'f8', 'h4'];

    expect(_.xor(knightPositions(input), ['a4', 'd5', 'd7', 'g6']).length).toBe(0);
  });
});
