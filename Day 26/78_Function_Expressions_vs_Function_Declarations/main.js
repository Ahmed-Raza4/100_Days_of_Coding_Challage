//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
//function declarations
function squareDeclarations(number) {
    return number * number;
}
//fuction expressions
var squareExpressions = function (number) {
    return number * number;
};
console.log(squareDeclarations(2));
console.log(squareExpressions(2));
