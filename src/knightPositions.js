function knightPositions(pawnPositions) {
    const captureCount = {};

    for (const pawnPosition of pawnPositions) {
        const column = pawnPosition[0];
        const row = parseInt(pawnPosition[1]);

        const possibleKnightPositions = [
            String.fromCharCode(column.charCodeAt(0) + 2) + (row + 1),
            String.fromCharCode(column.charCodeAt(0) + 2) + (row - 1),
            String.fromCharCode(column.charCodeAt(0) - 2) + (row + 1),
            String.fromCharCode(column.charCodeAt(0) - 2) + (row - 1),
            String.fromCharCode(column.charCodeAt(0) + 1) + (row + 2),
            String.fromCharCode(column.charCodeAt(0) + 1) + (row - 2),
            String.fromCharCode(column.charCodeAt(0) - 1) + (row + 2),
            String.fromCharCode(column.charCodeAt(0) - 1) + (row - 2)
        ];

        for (const position of possibleKnightPositions) {
            if (captureCount[position]) {
                captureCount[position]++;
            } else {
                captureCount[position] = 1;
            }
        }
    }

    const maxCaptureCount = Math.max(...Object.values(captureCount));
    const optimalPositions = [];
    for (const position in captureCount) {
        if (captureCount[position] === maxCaptureCount) {
            optimalPositions.push(position);
        }
    }

    return optimalPositions;
}

module.exports = knightPositions;
