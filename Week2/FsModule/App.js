const fs = require('fs');

try {
    fs.writeFileSync('data.txt', 'Create in Node.js');
console.log("File written Successfully");
} catch(e) {
    console.log(e);
}

try {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log(data);
} catch(e) {
    console.log(e);
}


