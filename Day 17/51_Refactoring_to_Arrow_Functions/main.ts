//Ques # 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

//original functional for calculate the area of rectangle
function AreaCalculate(width : number, height : number ): number {
    return width * height
}

//Refectored into an arrow fuction
let ArrowAreaCalculate = (width : number, height : number): number => width * height

//Usage the arrow function
console.log(ArrowAreaCalculate(10, 15));

