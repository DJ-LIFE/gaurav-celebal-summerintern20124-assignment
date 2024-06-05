var os = require('os');

// Endiannes
console.log('Endiannes : ' + os.endianness());

// OS Type
console.log('type : ' + os.type());

// OS Platform
console.log('Platform : ' + os.platform());

// Total Memory

console.log('Total Memory : ' + os.totalmem() + ' bytes');

// Total free Memory
console.log('Free Memory : ' + os.freemem() + ' bytes ');