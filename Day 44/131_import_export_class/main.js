"use strict";
/*Question 131: Create two modules; one that exports
a class, and another that imports the class and
creates an instance.

Explain & TIP: Classes can be modularized in the
same way as functions. This encapsulation and
reusability is a cornerstone of modern JavaScript
application structure.*/
Object.defineProperty(exports, "__esModule", { value: true });
var person_js_1 = require("./person.js");
var fName = new person_js_1.person("Ahmed Raza");
fName.greet();
