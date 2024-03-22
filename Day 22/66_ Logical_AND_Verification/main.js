"use strict";
//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// This function sees if both inputs are true
function checkBothTrue(a, b) {
    return a && b;
}
// Trying it with true and false
console.log(checkBothTrue(true, false));
//Extra for my underdtanding 
function checkOnlyTrue(a, b) {
    return a || b;
}
console.log(checkOnlyTrue(true, false));
