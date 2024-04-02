"use strict";
//Question 99: Generate a date object representing your next birthday and log it to the console.
function generateNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = generateNextBirthday(7, 4);
console.log("Next Birthday: " + nextBirthday.toLocaleDateString());
