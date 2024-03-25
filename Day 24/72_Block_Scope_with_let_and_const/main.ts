// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// Demonstrating block scope
{
    let X = "visible inside the block";
    const Y = "also only inside the block";
    console.log(X); 
    console.log(Y);
}

console.log(X);
console.log(Y)
