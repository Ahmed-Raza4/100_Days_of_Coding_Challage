//Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//mix array
var mixedArray = [12, "karachi", true, "Islamabad", 23, "Lahore", false, 24];
//filter only strings
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
//print only string
console.log(stringArray);
