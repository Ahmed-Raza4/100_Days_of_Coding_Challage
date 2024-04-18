/*Question 135: Explain how you can format a 
JSON string with proper indentation for readability.

Explain & TIP: JSON.stringify() can take additional
parameters to format the resulting JSON string. 
Adding an indent level as the third argument
beautifies the output, making it more readable.*/

//Reusing the object from question 133

const person ={
    name: "Ahmed Raza",
    age: 27,
    city: "Karachi"
}

// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2);

console.log(jsonString);

