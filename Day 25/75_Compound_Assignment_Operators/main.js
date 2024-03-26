"use strict";
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundAssignmentOperators() {
    let x = 4;
    console.log("initial x = ", x);
    x += 5;
    console.log("after addition x = ", x);
    x -= 3;
    console.log("after subtraction x = ", x);
    x *= 2;
    console.log("after multiplication x = ", x);
    x /= 4;
    console.log("after division x = ", x);
}
compoundAssignmentOperators();
