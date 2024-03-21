//Question # 62. Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

//create a blueprint for student information
interface student {
    name: string,
    fatherName: string, 
    age: number,
    class: any,
    courses: string []; 
}

// create an example student
const student1: student = {
    name: "Shakeel",
    fatherName: "Ali",
    age: 20,
    class: "11th",
    courses: ["English", "Science", "Physics"]
}
const student2: student = {
    name: "Kamran",
    fatherName: "Nadeem",
    age: 18,
    class: "10th",
    courses: ["Math", "Urdu", "Islamit"]
}

//show the student information
console.log(student1);
console.log(student2);
