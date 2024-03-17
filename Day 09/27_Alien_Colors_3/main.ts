// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Version 1
let alienColors :string = "Green";
if (alienColors === "Green"){
    console.log("Version 1: the player earned 5 points");
}else if(alienColors === "Yellow"){
    console.log("the player earned 10 points");
}else if(alienColors === "Red"){
    console.log("the player earned 15 points");
}else{
    console.log("Please Selece Right Color");
}

//version 2
alienColors = "Yellow";
if (alienColors === "Green"){
    console.log("the player earned 5 points");
}else if(alienColors === "Yellow"){
    console.log("Version 2: the player earned 10 points");
}else if(alienColors === "Red"){
    console.log("the player earned 15 points");
}else{
    console.log("Please Selece Right Color");
}

//version 3
alienColors = "Red";
if (alienColors === "Green"){
    console.log("the player earned 5 points");
}else if(alienColors === "Yellow"){
    console.log("the player earned 10 points");
}else if(alienColors === "Red"){
    console.log("Version 3: the player earned 15 points");
}else{
    console.log("Please Selece Right Color");
}

//Version 4
alienColors = "White";
if (alienColors === "Green"){
    console.log("the player earned 5 points");
}else if(alienColors === "Yellow"){
    console.log("the player earned 10 points");
}else if(alienColors === "Red"){
    console.log("the player earned 15 points");
}else{
    console.log("Version 4: Please Selece Right Color");
}