/*Question 134: Take a JSON string and parse 
it into a JavaScript object.

Explain & TIP: JSON.parse() is used to convert
a JSON string into a JavaScript object. This is
particularly useful when dealing with data 
received as JSON from a web server or API.*/

const jsonString = '{"name": "Ahmed Raza", "age": 27, "city": "Karachi"}'

const person = JSON.parse(jsonString);

console.log(person);


