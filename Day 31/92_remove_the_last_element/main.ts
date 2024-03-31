//Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement(arr: any[]) {
    return arr.pop();
}
let fruits : string[] = ['apple', 'banana', 'orange'];
console.log(`Removed Element: ${removeLastElement(fruits)}`);
console.log(fruits);

