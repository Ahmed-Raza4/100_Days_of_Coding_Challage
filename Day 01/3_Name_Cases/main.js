// store person name in a variable
var personName = "aHmeD raZa";
// print personName in lower Case
console.log("Lower Case: ", personName.toLowerCase());
// print personName in Upper Case
console.log("Upper Case: ", personName.toUpperCase());
// print personName in Title Case
console.log("Title Case: ", personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' '));
