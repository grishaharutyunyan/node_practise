// console.log(1);
// process.nextTick(() => console.log(2));
// console.log(3)



// Promise.resolve().then(() => console.log("this is promies.resolve 1 "));
// process.nextTick(()=> console.log("this is nextTick 1 "));

// const fs =require('fs')
//
// fs.readFile(__filename,()=> {
//      console.log("this id readfile")
// })
// process.nextTick(() => console.log("this is nextTick"));
// Promise.resolve().then(() => console.log("this is Promise"))
// setTimeout(() => console.log("this is setTimeout"),0)
// setImmediate(() => console.log("This is setImmediate"))


//////////////

// setImmediate(() => console.log("This is setImmediate 1"))
// setImmediate(() =>{
//     console.log("this is setImmediate 2 ");
//     process.nextTick(() => console.log("this is nextTick 1"));
//     Promise.resolve().then(() => console.log("this is Promise"))
// });
// setImmediate(() => console.log("This is setImmediate 3"))


// // timeout_vs_immediate
// setTimeout(() => {
//     console.log('timeout');
// }, 0);
//
// setImmediate(() => {
//     console.log('immediate');
// });


//
// const fs = require('node:fs');
//
// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 100);
//     setImmediate(() => {
//         console.log('immediate');
//     });
// });



console.log('Hello => number 1');

setImmediate(() => {
    console.log('Running before the timeout => number 3');
});

setTimeout(() => {
    console.log('The timeout running last => number 4');
}, 0);

process.nextTick(() => {
    console.log('Running at next tick => number 2');
});
