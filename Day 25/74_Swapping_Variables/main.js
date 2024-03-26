"use strict";
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function valuesSwapped() {
    let x = 5, y = 10;
    console.log("Before swap : a = " + x + ", y = " + y);
    let temp = x;
    x = y;
    y = temp;
    console.log("after swap : x = " + x + ", y = " + y);
}
valuesSwapped();
