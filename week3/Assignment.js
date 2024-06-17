// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchCallback(callback, errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: 'User left the session'
//         });
//     } else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'User is watching cat meme'
//         });
//     } else {
//         callback('thumbs up and Subscribe');
//     }
// }

// watchCallback((message) => {
//     console.log('Success ' + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })

/*

// 2 Converting callback to Promise
function watchCallbackPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User Left',
                message: 'User left the session'
            });
        } else if(userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'User is watching cat meme'
            });
        } else {
            resolve('thumbs up and Subscribe');
        }
    }
)}

watchCallbackPromise().then((message) => {
    console.log('Success' + message);
}).catch((error) => {
    console.log(error.name + " " + error.message);
})
*/

// Promise.all
// const task1 = new Promise((resolve, reject) => {
//     resolve('You have completed task1');
// })
// const task2 = new Promise((resolve , reject) => {
//     resolve("You have completed Task2");
// })
// const task3 = new Promise((resolve, reject) => {
//     resolve("You have completed Task3");
// })

// Promise.all([
//     task1,
//     task2,
//     task3
// ]).then((messages) => {
//     console.log(messages);
// }).catch((error) =>{
//     console.log(error.name + " " + message);
// })

// 3 Async and Await

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if(location == 'Google') {
            resolve('Google says Hello');
        } else {
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve('Extra Information + ${response}');
    })
}
// makeRequest('Facebook').then(response => {
//     console.log('Response Recieved');
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err);
// })

async function doThis() {
    try {
        const response = await makeRequest('Facebook');
        console.log('Response Recieved');
        
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch(err) {
        console.log(err);
    }
    
}
doThis();