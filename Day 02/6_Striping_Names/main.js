//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//store person name in veriable with whitespaces
var personNameWithWhiteSpaces = "    \n\tAhmed Raza\t\n    ";
//print person name with white spaces
console.log(personNameWithWhiteSpaces);
//store person name without white spaces
var personNameWithoutWhiteSpaces = personNameWithWhiteSpaces.trim();
//print person name without white spaces
console.log(personNameWithoutWhiteSpaces);
