function pow(base, exponent) {
    return Math.pow(base, exponent);
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('La divisione per zero non è consentita.');
    }
    return a / b;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    pow,
};
