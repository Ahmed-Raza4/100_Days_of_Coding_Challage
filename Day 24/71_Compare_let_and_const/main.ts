//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let FName = "Ahmed Raza";
FName = "Ali";

console.log(FName);

const LName = "Ahmed Raza";
// LName = "Raza";
console.log(LName);

