/*Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.*/

const students = new Map<number, string>();
students.set(1, "ali");
students.set(2, "ahmed");
students.set(3, "umer");
students.set(4, "zain");

students.forEach((name, id)=>{
    console.log(`Students id: ${id} and name: ${name}`);
})