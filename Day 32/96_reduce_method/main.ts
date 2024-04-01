//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


function calculateSum(numbers: number[]): number{
    return numbers.reduce((a,b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(calculateSum(numbers)); 


