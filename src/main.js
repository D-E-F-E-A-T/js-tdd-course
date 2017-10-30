const sum = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => (b === 0) ? 'Division by 0 is invalid' : a / b

export { sum, sub, mult, div }