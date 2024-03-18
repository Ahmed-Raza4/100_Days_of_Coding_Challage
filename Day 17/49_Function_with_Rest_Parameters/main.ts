//Que # 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

//function that accept multiple hobbies arguments
function multipleHobbis (...hobbies : string[]){
    //loop through each hobbies
    hobbies.forEach(hobby=>{
        console.log(`I enjoy ${hobby}`);
        })
}
//call the function with hobbies
multipleHobbis("Watching movies", "Driving Car", "Using mobile");
