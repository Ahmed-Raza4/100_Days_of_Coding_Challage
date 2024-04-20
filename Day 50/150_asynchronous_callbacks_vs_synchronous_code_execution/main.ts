/*Question 150: Describe how asynchronous callbacks
differ from synchronous code execution.

Explain & TIP: Asynchronous callbacks allow JavaScript
to perform long network requests, file operations, or
set timers without blocking the main thread, enabling
the continuation of code execution. Synchronous code,
in contrast, runs sequentially, blocking further
execution until the current operation completes.*/

//synchronous example
console.log("Before synchronous code execution");
//simulate syncro blocking operation
for (let i=0; i<25; i++) {}

console.log("after synchronous code execution");

//asynchronous example

console.log("before asynchronous code execution");

//simulate asynchronous operation
setTimeout(() => {
    console.log("Asychronous code execution completed");
}, 2000)

console.log("after asynchronous code execution");

    



