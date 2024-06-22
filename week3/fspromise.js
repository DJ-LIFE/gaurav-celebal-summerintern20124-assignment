const fs = require('node:fs/promises');

// fs.readFile("file.txt", "utf-8")
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });

// Using Async Await
async function readFile() {
    try{
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

readFile();