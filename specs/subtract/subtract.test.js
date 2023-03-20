const subtract = require('../../subtract');

describe('Subtraction method', () => {
    test('should subtract two whole numbers correctly', () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    test('should subtract two negative numbers correctly', () => {
        expect(subtract(-1, -2)).toBe(1);
    })

    test('should subtract two decimals correctly', () => {
        expect(subtract(1.0, 5.2)).toBe(-4.2)
    });
});