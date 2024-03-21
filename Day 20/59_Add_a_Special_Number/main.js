//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
// This program makes a function that adds a specific number
function Adder(numberToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + numberToAdd;
    };
}
//making a magic box that adds a number 4;
var addFour = Adder(4);
console.log(addFour(10));
