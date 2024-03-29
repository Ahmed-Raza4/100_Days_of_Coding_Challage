//Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript"


function replacements(text: string):string{
    return text.replace("JavaScript", "TypeScript");
}

console.log(replacements("JavaScript is the best programming language in the world."));