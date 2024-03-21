//Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

//mix array

let mixedArray = [12, "karachi", true, "Islamabad", 23, "Lahore", false, 24];

//filter only strings
let stringArray = mixedArray.filter(item=> typeof item === "string");

//print only string
console.log(stringArray)