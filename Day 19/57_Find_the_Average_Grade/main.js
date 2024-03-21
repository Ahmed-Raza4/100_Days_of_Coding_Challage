//Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
//A list of grades
var grades = [85, 89, 83, 99, 98, 89];
//calculate the average
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
//show the average grade
console.log(averageGrade);
