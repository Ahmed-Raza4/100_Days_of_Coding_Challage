// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var megician = ["David Copperfield", "Harry Houdini", "Criss Angel", "Dynamo"];
function show_magicians(megicians) {
    megicians.forEach(function (megiciansName) {
        console.log(megiciansName);
    });
}
show_magicians(megician);
