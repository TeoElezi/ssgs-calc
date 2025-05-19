const { sum, subtract, multiply, divide, pow } = require('../src/math');

describe('math functions', () => {
    describe('sum', () => {
        test('somma 1 + 2 per ottenere 3', () => {
            expect(sum(1, 2)).toBe(3);
        });
        test('somma numeri negativi', () => {
            expect(sum(-1, -2)).toBe(-3);
        });
        test('somma con zero', () => {
            expect(sum(0, 5)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('sottrae 5 - 2 per ottenere 3', () => {
            expect(subtract(5, 2)).toBe(3);
        });
        test('sottrae numeri negativi', () => {
            expect(subtract(-5, -2)).toBe(-3);
        });
        test('sottrae zero', () => {
            expect(subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        test('moltiplica 3 * 2 per ottenere 6', () => {
            expect(multiply(3, 2)).toBe(6);
        });
        test('moltiplica per zero', () => {
            expect(multiply(3, 0)).toBe(0);
        });
        test('moltiplica numeri negativi', () => {
            expect(multiply(-3, 2)).toBe(-6);
        });
    });

    describe('divide', () => {
        test('divide 6 / 2 per ottenere 3', () => {
            expect(divide(6, 2)).toBe(3);
        });
        test('divide numeri negativi', () => {
            expect(divide(-6, 2)).toBe(-3);
        });
        test('divide per 1', () => {
            expect(divide(6, 1)).toBe(6);
        });
        test('dividere per zero deve lanciare un errore', () => {
            expect(() => divide(6, 0)).toThrow();
        });
    });

    describe('pow', () => {
        test('eleva 2 alla potenza di 3 per ottenere 8', () => {
            expect(pow(2, 3)).toBe(8);
        });
        test('eleva alla potenza di 0', () => {
            expect(pow(2, 0)).toBe(1);
        });
        test('eleva 0 a qualsiasi potenza', () => {
            expect(pow(0, 5)).toBe(0);
        });
        test('eleva base negativa', () => {
            expect(pow(-2, 3)).toBe(-8);
        });
        test('potenza con esponente negativo', () => {
            expect(pow(2, -1)).toBe(0.5);
        });
    });
});
