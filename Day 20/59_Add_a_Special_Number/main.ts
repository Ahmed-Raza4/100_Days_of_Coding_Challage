//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// This program makes a function that adds a specific number

function Adder (numberToAdd:number) : (number: number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number:number) : number {
        return number + numberToAdd;
    }
}
//making a magic box that adds a number 4;
let addFour :any= Adder(4);
console.log(addFour(10));
// We made a function (magic box) that adds 5 to any number.

