"use strict";
//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let word = ["Hello", "World", "Python", "Java", "JavaScript", "Typescript"];
let lengths = word.map(words => words.length);
console.log(lengths);
