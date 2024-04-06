"use strict";
/*
Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
*/
function isDivisibleBy2And3(num) {
    return num % 6 === 0;
}
console.log(isDivisibleBy2And3(12));
console.log(isDivisibleBy2And3(15));
