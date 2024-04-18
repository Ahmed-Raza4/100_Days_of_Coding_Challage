/*Question 127: Convert a traditional function expression
to an arrow function.

Explain & TIP: Arrow functions provide a concise syntax
for writing function expressions. They don't have their
own bindings to this or super, and should not be used as methods.*/


//traditional function
const traditionalFunction = function (a: any, b: any) {
    return a + b;
}

//arrow function 
const arrowFunction = (a:any, b:any) => a + b;

console.log(traditionalFunction(2, 6));
console.log(arrowFunction(2, 6));


