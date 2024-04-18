/*Question 131: Create two modules; one that exports 
a class, and another that imports the class and 
creates an instance.

Explain & TIP: Classes can be modularized in the 
same way as functions. This encapsulation and 
reusability is a cornerstone of modern JavaScript
application structure.*/


/*
in person.ts file,I wrote this code:
export class person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

greet(){
    console.log(`Hello, my name is ${this.name}`)
    }
}
*/


import {person} from "./person.js";

let fName = new person ("Ahmed Raza");

fName.greet();



