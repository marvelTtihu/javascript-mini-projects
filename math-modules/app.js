import { sum, subtract, multiply } from "./utils/math.js"; // Import from math.js
const numResult = document.querySelector("#result"); // Get DOM elements

// Sum button
document.querySelector("#sum-btn").addEventListener('click', () => {
    const sumResult = sum(5, 5);
    numResult.textContent = sumResult;
})

// Subtract button
document.querySelector("#subtract-btn").addEventListener('click', () => {
    const subtractResult = subtract(5, 5);
    numResult.textContent = subtractResult;
})

// Multiply button
document.querySelector("#multiply-btn").addEventListener('click', () => {
    const multiplyResult = multiply(5, 5);
    numResult.textContent = multiplyResult;
})
