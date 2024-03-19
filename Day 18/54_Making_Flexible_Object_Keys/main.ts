// Que # 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

//function is a way to make flexible list
function objectWithDyanamicKey (key : string, value : string){
    let dynamicObject = [key, value]
    return dynamicObject
}

let userPreference = objectWithDyanamicKey("Theme", "Dark");

console.log(userPreference);
