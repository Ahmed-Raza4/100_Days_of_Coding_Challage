//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logProperties(obj: any) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

logProperties({ name: "Ahmed Raza", age: 26, nationality: "Pakistani" });