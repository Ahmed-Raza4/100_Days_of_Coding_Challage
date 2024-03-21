//Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

//A list of grades

let grades = [85, 89, 83, 99, 98, 89];

//calculate the average

let averageGrade = grades.reduce((total, grade) => total + grade, 0 ) / grades.length;

//show the average grade

console.log(averageGrade);
