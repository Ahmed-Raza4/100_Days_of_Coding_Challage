// Que # 53:  Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//we do it with the example of good muslim
//A list Shown a Good Muslim's Life

let goodMuslim = {
    DailyRoutine: ["Perfone Namaz", "Recite Quran", "Recite Durood"],
    Habbits: ["Don't Lie" , "Don't Spy" , " Don't waste"],
    Qualities : ["Charity", "Patience", "Respecting Elders"],
}

let {DailyRoutine, Habbits, Qualities} = goodMuslim;

console.log(`Daily Routine: ${DailyRoutine[0]}, Habbits: ${Habbits[0]}, Qualities: ${Qualities[0]}`);

console.log(`\n Daily Routine: ${DailyRoutine[1]}, Habbits: ${Habbits[1]}, Qualities: ${Qualities[1]}`);

console.log(`\n Daily Routine: ${DailyRoutine[2]}, Habbits: ${Habbits[2]}, Qualities: ${Qualities[2]}`);

