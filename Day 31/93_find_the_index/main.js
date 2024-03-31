"use strict";
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBanana(fruits) {
    let index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
let fruits = ["Apple", "Banana", "Orange"];
replaceBanana(fruits);
console.log(fruits);
