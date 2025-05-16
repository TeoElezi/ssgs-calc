const sum = require('./math').sum;
test ('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const subtract = require('./math').subtract;
test ('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});
const multiply = require('./math').multiply;
test ('multiplies 3 * 2 to equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
});
const divide = require('./math').divide;
test ('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});
const pow = require('./math').pow;
test ('raises 2 to the power of 3 to equal 8', () => {
    expect(pow(2, 3)).toBe(8);
});
