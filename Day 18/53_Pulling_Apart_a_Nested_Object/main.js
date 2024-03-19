// Que # 53:  Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//we do it with the example of good muslim
//A list Shown a Good Muslim's Life
var goodMuslim = {
    DailyRoutine: ["Perfone Namaz", "Recite Quran", "Recite Durood"],
    Habbits: ["Don't Lie", "Don't Spy", " Don't waste"],
    Qualities: ["Charity", "Patience", "Respecting Elders"],
};
var DailyRoutine = goodMuslim.DailyRoutine, Habbits = goodMuslim.Habbits, Qualities = goodMuslim.Qualities;
console.log("Daily Routine: ".concat(DailyRoutine[0], ", Habbits: ").concat(Habbits[0], ", Qualities: ").concat(Qualities[0]));
console.log("\n Daily Routine: ".concat(DailyRoutine[1], ", Habbits: ").concat(Habbits[1], ", Qualities: ").concat(Qualities[1]));
console.log("\n Daily Routine: ".concat(DailyRoutine[2], ", Habbits: ").concat(Habbits[2], ", Qualities: ").concat(Qualities[2]));
