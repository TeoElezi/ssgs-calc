const { sum, subtract, multiply, divide, pow } = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 2 to equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('raises 2 to the power of 3 to equal 8', () => {
    expect(pow(2, 3)).toBe(8);
});
