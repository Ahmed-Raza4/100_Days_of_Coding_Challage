//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function devideAndRemainder(dividend: number, divisor: number): {quotient: number, remainder: number} {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    return {quotient, remainder};
}

console.log(devideAndRemainder(19, 3));
