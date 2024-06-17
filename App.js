// const fs = require('fs');


// try {
//     fs.writeFileSync('data.txt', 'Create in Node.js');
// console.log("File written Successfully");
// } catch(e) {
//     console.log(e);
// }

// try {
//     const data = fs.readFileSync('data.txt', 'utf8');
//     console.log(data);
// } catch(e) {
//     console.log(e);
// }

//2 Emitter
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// //Register a listner
// emitter.on('messageLogged', function(){
//     console.log('Listner Called');
// });
// // Raise an event
// emitter.emit('Message logged');

// 3 Path Module
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
console.log()



