/*Question 145: Create a function that accepts a callback
and invokes it with some arguments.

Explain & TIP: Callbacks are functions passed as arguments
to another function. This design pattern is very common in
JavaScript for asynchronous operations, event listeners,
or to customize the behavior of a function with custom actions.*/
function callbackFunction(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
callbackFunction(add, 20, 30);
