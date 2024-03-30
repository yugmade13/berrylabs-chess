const knightMoves = require('./knightMoves');
const knightPositions = require('./knightPositions');

const knightPosition = 'b2';
const knight = knightMoves(knightPosition);
console.log('Langkah kuda', knightPosition, 'adalah', knight);

const input = ["a1", "b6", "c3", "f8", "h4"];
console.log(knightPositions(input)); // Output: ["a4", "d5", "d7", "g6"]