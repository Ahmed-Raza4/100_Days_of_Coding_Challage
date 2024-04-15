"use strict";
/*Question 117: Implement a switch statement that
 evaluates an expression and uses the default case
 if none of the cases match.

Explain & TIP: The default case in a switch statement
 provides a way to execute a block of code when none of
  the other case labels match the expression's value.*/
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            return "Excellent";
            break;
        case "B":
            return "Good";
            break;
        case "C":
            return "Average";
            break;
        case "D":
            return "Poor";
            break;
        case "F":
            return "Fail";
            break;
        default:
            return "Invalid grade";
            break;
    }
}
console.log(evaluateGrade("A"));
console.log(evaluateGrade("D"));
