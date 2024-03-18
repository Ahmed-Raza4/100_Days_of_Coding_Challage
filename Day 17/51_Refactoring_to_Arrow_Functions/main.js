//Ques # 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//original functional for calculate the area of rectangle
function AreaCalculate(width, height) {
    return width * height;
}
//Refectored into an arrow fuction
var ArrowAreaCalculate = function (width, height) { return width * height; };
//Usage the arrow function
console.log(ArrowAreaCalculate(10, 15));
