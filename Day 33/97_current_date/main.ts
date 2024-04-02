//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function getDate():string {
    let date = new Date(); //get the current date
    let day = String(date.getDate()).padStart(2, '0'); 
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return day + "-" + month + "-" + year;
}

console.log(getDate());
