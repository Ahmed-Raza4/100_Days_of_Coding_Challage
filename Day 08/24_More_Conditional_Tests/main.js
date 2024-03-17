"use strict";
//Tests for equality and inequality with strings
console.log("Equality Test 1: ", "Ahmed" === "Ahmed");
console.log("Equality Test 2: ", "Ahmed" === "ahmed");
//Tests for Inequality with strings
console.log("Inequality Test 1: ", "Ahmed" != "ahmed");
console.log("Ineqaulity Test 2: ", "Ahmed" != "Ahmed");
//Tests using the lower case function
console.log("Lower Case Test 1: ", "Ahmed".toLocaleLowerCase() === "ahmed");
console.log("Lower Case Test 2: ", "Ahmed".toLowerCase() === "AhmeD");
// Numerical tests involving equality
console.log("Equality Numerical Test 1: ", 4 === 4);
console.log("Equality Numerical Test 2: ", 4 === 5);
// Numerical tests involving inequality
console.log("Inequality Numberical Test 1: ", 4 != 5);
console.log("Inequality Numberical Test 2: ", 4 != 4);
//Numerical Test involving greater than
console.log("Greater than Numerical Test 1: ", 10 > 5);
console.log("Greater than Numerical Test 2: ", 10 > 12);
//Numerical Test involving less than
console.log("Less than Numerical Test 1: ", 4 < 5);
console.log("Less than Numerical Test 2: ", 4 < 3);
//Numerical Test involiving greater than or equal to
console.log("Greater than or Equal to Test 1: ", 4 >= 3);
console.log("Greater than or Equal to Test 2: ", 4 >= 5);
// Numerical Test involving less than or equal to
console.log("Less than or Equal to Test 1: ", 4 <= 4);
console.log("Less than or Equal to Test 2: ", 4 <= 2);
//Tests using "and" operator
console.log('Test 1 using "and" Operator: ', "ahmed" == "ahmed" && "raza" == "raza");
console.log('Test 2 using "and" Operator: ', "ahmed" == "Ahmed" && "raza" == "raza");
//Tests using "or" operator
console.log('Test 1 using "or" Operator: ', "Ahmed" == "Ahmed" || "raza" == "raza");
console.log("Test 2 using 'or' Operator: ", "ahmed" == "Ahmed" || "raza" == "raza");
console.log("Test 3 using 'or' Operator: ", "ahmed" == "Ahmed" || "Raza" == "raza");
//Test whether an item is in a array
//create an array
let colorNames = ["Black", "White", "Yellow", "Blue"];
console.log('Is "Black" in Color Names? ', colorNames.includes("Black"));
////Test whether an item is not in a array
console.log('Is "Red" in Color Names? ', colorNames.includes("Red"));
console.log('Is "Red" nor in Color Names? ', !colorNames.includes("Red"));
