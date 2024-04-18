/*Question 128: Create an arrow function that
takes multiple parameters and returns the
product of all parameters.

Explain & TIP: Arrow functions can take zero,
one, or multiple parameters. When dealing with
multiple parameters, you enclose them in parentheses.*/
var product = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.reduce(function (a, b) { return a * b; }, 1);
    console.log(product(2, 4, 6, 8));
};
