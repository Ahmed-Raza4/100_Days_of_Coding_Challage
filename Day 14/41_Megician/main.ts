// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let megician :string []= ["David Copperfield", "Harry Houdini", "Criss Angel", "Dynamo"];

function show_magicians(megicians:string[]){
    megicians.forEach(megiciansName => {
        console.log(megiciansName)
    });
}
show_magicians(megician);
