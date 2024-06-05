const fs = require('fs');
const path = require('path');
const os = require('os');

function listfiles(dirpath = './Week2'){
    fs.readdir(dirpath, (err, files) => {
        if (err) {
            console.error('Error listion files in directory ${dirpath}:', err);
        } else{
            files.forEach(files => console.log(files));
        }
    })
}

// Creating a new directory
function createdir(dirpath) {
    fs.mkdir(dirpath, { recursive : true}, (err) => {
        if(err){
            console.log('Error creating Directory ${dirPath}', err);
        } else{
            console.log('Directory ${dirPath} created successfully');
        }
    });
}
// Creating a new File
function createfile(filePath, content = 'file.txt') {
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log('Error reading the ${filePath}', err);
            return;
        }else{
            console.log('File ${filePath} created successfully');
        }
    })
}

// Deleting a file

function deletePath(targetPath) {
    fs.stat(targetPath, (err, Stats) => {
        if(err){
            console.log('Error reading Path ${targetPath}', err);
            return;
        }
        if(Stats.isDirectory()){
            fs.rmdir(targetPath, {recursive: true}, (err) => {
                if(err){
                    console.log('Error Deleting Directory ${targetPath}', err);
                }else{
                    console.log('Directory ${targetPath} deleted successfully');
                }
                console.log('Directory ${targetPath} deleted Successfully');
            })
        } else{
            fs.unlink(targetPath, (err) => {
                if(err){
                    console.log('Error Deleting file ${targetPath}', err);
                }
                console.log('File ${targetPath} deleted successfully');
            })
        }
    })
}

const [,, operation, targetPath, content] = process.argv;
switch(operation){
    case 'list':
        listfiles(targetPath || '.');
        break;
    case 'createDir':
        createdir(targetPath);
        break;
    case 'createFile':
        createfile(targetPath, content || '');
        break;
    case 'delete':
        deletePath(targetPath);
        break;
    default:
        console.log('Invalid Operation');
        break;
}